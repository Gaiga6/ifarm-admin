<template>
  <div class="user-detail-container">
    <!-- 用户基本信息 -->
    <div class="info-section">
      <div class="user-header">
        <el-avatar :size="80" :src="user.avatar" class="user-avatar" />
        <div class="user-basic-info">
          <h2 class="user-name">{{ user.nickname || user.username }}</h2>
          <div class="user-tags">
            <el-tag effect="plain" size="small">{{ user.roleName || '普通用户' }}</el-tag>
            <el-tag :type="user.status === 1 ? 'success' : 'danger'" size="small" effect="plain">
              {{ user.statusDesc }}
            </el-tag>
          </div>
        </div>
      </div>
      
      <el-divider />
      
      <!-- 用户详细信息 -->
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">用户名</div>
          <div class="info-value">{{ user.username }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">真实姓名</div>
          <div class="info-value">{{ user.realName }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">性别</div>
          <div class="info-value">{{ user.genderDesc }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">手机号码</div>
          <div class="info-value">{{ user.phone || '-' }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">电子邮箱</div>
          <div class="info-value">{{ user.email || '-' }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">创建时间</div>
          <div class="info-value">{{ user.createTime }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">更新时间</div>
          <div class="info-value">{{ user.updateTime }}</div>
        </div>
        <div class="info-item">
          <div class="info-label">账号ID</div>
          <div class="info-value">#{{ user.id }}</div>
        </div>
      </div>
    </div>

    <!-- 操作按钮区 -->
    <div class="action-area">
      <el-button type="primary" @click="handleEdit">
        <el-icon><Edit /></el-icon>编辑用户
      </el-button>
      <el-button :type="user.status === 1 ? 'danger' : 'success'" @click="handleToggleStatus">
        <el-icon><component :is="user.status === 1 ? 'Lock' : 'Unlock'" /></el-icon>
        {{ user.status === 1 ? '禁用账号' : '启用账号' }}
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { Edit, Lock, Unlock } from '@element-plus/icons-vue'

const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['edit', 'toggleStatus'])

// 编辑用户
const handleEdit = () => {
  emit('edit', props.user)
}

// 切换用户状态
const handleToggleStatus = () => {
  emit('toggleStatus', props.user)
}
</script>

<style scoped>
.user-detail-container {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-section {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
}

.user-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
}

.user-basic-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.user-avatar {
  border: 2px solid #f0f0f0;
}

.user-name {
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  color: #303133;
}

.user-tags {
  display: flex;
  gap: 10px;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 40px;
  margin-top: 20px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.info-label {
  font-size: 14px;
  color: #909399;
}

.info-value {
  font-size: 15px;
  color: #303133;
}

.action-area {
  display: flex;
  justify-content: center;
  gap: 16px;
}

/* 响应式调整 */
@media (max-width: 480px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .action-area {
    flex-direction: column;
  }
}
</style> 