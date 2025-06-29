<template>
  <div class="avatar-upload">
    <div class="avatar-container">
      <!-- 头像预览 -->
      <div class="avatar-preview" @click="handleAvatarClick">
        <img 
          v-if="avatarUrl" 
          :src="avatarUrl" 
          alt="头像" 
          class="avatar-image"
        />
        <div v-else class="avatar-placeholder">
          <el-icon class="avatar-icon"><User /></el-icon>
          <span class="upload-text">点击上传头像</span>
        </div>
        
        <!-- 上传进度遮罩 -->
        <div v-if="uploading" class="upload-overlay">
          <el-progress 
            type="circle" 
            :percentage="uploadProgress" 
            :width="60"
            :stroke-width="4"
          />
        </div>
        
        <!-- 悬停操作按钮 -->
        <div v-if="avatarUrl && !uploading" class="avatar-actions">
          <el-button 
            type="primary" 
            :icon="Edit" 
            circle 
            size="small" 
            @click.stop="handleAvatarClick"
          />
          <el-button 
            type="danger" 
            :icon="Delete" 
            circle 
            size="small" 
            @click.stop="handleDeleteAvatar"
          />
        </div>
      </div>
      
      <!-- 隐藏的文件输入框 -->
      <input 
        ref="fileInputRef" 
        type="file" 
        accept="image/*" 
        style="display: none" 
        @change="handleFileChange"
      />
    </div>
    
    <!-- 上传提示 -->
    <div class="upload-tips">
      <p class="tip-text">支持 JPG、PNG、GIF 格式，文件大小不超过 2MB</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { User, Edit, Delete } from '@element-plus/icons-vue'
import { files } from '@/api'

// Props
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 120
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

// Emits
const emit = defineEmits(['update:modelValue', 'upload-success', 'upload-error'])

// Refs
const fileInputRef = ref()
const uploading = ref(false)
const uploadProgress = ref(0)

// Computed
const avatarUrl = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// 处理头像点击
const handleAvatarClick = () => {
  if (props.disabled || uploading.value) return
  fileInputRef.value?.click()
}

// 处理文件选择
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (!file) return
  
  // 验证文件类型
  if (!file.type.startsWith('image/')) {
    ElMessage.error('请选择图片文件')
    return
  }
  
  // 验证文件大小 (2MB)
  if (file.size > 2 * 1024 * 1024) {
    ElMessage.error('图片大小不能超过 2MB')
    return
  }
  
  uploadAvatar(file)
  
  // 清空input值，允许重复选择同一文件
  event.target.value = ''
}

// 上传头像
const uploadAvatar = async (file) => {
  try {
    uploading.value = true
    uploadProgress.value = 0
    
    // 调用上传API
    const result = await files.filesApi.uploadImage(file, 'avatar')
    
    uploadProgress.value = 100
    
    // 更新头像URL
    avatarUrl.value = result.url
    
    ElMessage.success('头像上传成功')
    emit('upload-success', result)
    
  } catch (error) {
    console.error('头像上传失败:', error)
    ElMessage.error('头像上传失败，请重试')
    emit('upload-error', error)
  } finally {
    uploading.value = false
    uploadProgress.value = 0
  }
}

// 删除头像
const handleDeleteAvatar = async () => {
  try {
    await ElMessageBox.confirm(
      '确定要删除当前头像吗？',
      '删除头像',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    avatarUrl.value = ''
    ElMessage.success('头像已删除')
    
  } catch {
    // 用户取消删除
  }
}
</script>

<style scoped>
.avatar-upload {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.avatar-container {
  position: relative;
}

.avatar-preview {
  position: relative;
  width: v-bind('props.size + "px"');
  height: v-bind('props.size + "px"');
  border: 2px dashed #d9d9d9;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #fafafa;
}

.avatar-preview:hover {
  border-color: #409eff;
  background-color: #f0f9ff;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.avatar-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #8c8c8c;
}

.avatar-icon {
  font-size: 32px;
  margin-bottom: 8px;
}

.upload-text {
  font-size: 12px;
  text-align: center;
  line-height: 1.2;
}

.upload-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.avatar-actions {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 50%;
}

.avatar-preview:hover .avatar-actions {
  opacity: 1;
}

.upload-tips {
  text-align: center;
}

.tip-text {
  margin: 0;
  font-size: 12px;
  color: #999;
  line-height: 1.4;
}

/* 禁用状态 */
.avatar-upload[disabled] .avatar-preview {
  cursor: not-allowed;
  opacity: 0.6;
}

.avatar-upload[disabled] .avatar-preview:hover {
  border-color: #d9d9d9;
  background-color: #fafafa;
}
</style>