<template>
  <div class="profile-container">
    <!-- 顶部个人信息区域 -->
    <div class="profile-header">
      <div class="profile-card">
        <div class="avatar-section">
          <div class="avatar-wrapper">
            <el-avatar :size="100" :src="userInfo.avatar" class="user-avatar">
              <el-icon size="50"><User /></el-icon>
            </el-avatar>
            <el-button 
              class="avatar-edit-btn" 
              circle 
              size="small"
              @click="handleAvatarEdit"
            >
              <el-icon><Camera /></el-icon>
            </el-button>
          </div>
        </div>
        
        <div class="user-info">
          <h1 class="user-name">{{ userInfo.name }}</h1>
          <p class="user-title">{{ userInfo.role }}</p>
          <p class="user-email">{{ userInfo.email }}</p>
          
          <div class="user-actions">
            <el-button 
              type="primary" 
              @click="showEditDialog = true"
              class="edit-btn"
            >
              <el-icon><Edit /></el-icon>
              编辑资料
            </el-button>
            <el-button 
              @click="$router.push('/settings')"
              class="settings-btn"
            >
              <el-icon><Setting /></el-icon>
              账户设置
            </el-button>
          </div>
        </div>
      </div>
    </div>

    <!-- 统计数据区域 -->
    <div class="stats-section">
      <div class="stats-container">
        <div class="stat-card" v-for="stat in statsData" :key="stat.key">
          <div 
            class="stat-icon" 
            :style="{ 
              '--icon-color': stat.color,
              '--icon-color-dark': stat.colorDark
            }"
          >
            <el-icon size="24">
              <component :is="stat.icon" />
            </el-icon>
          </div>
          <div class="stat-content">
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="content-section">
      <div class="content-grid">
        <!-- 基本信息 -->
        <div class="info-card">
          <div class="card-header">
            <h3 class="card-title">基本信息</h3>
            <el-button 
              text 
              type="primary" 
              @click="showEditDialog = true"
              class="card-action"
            >
              <el-icon><Edit /></el-icon>
              编辑
            </el-button>
          </div>
          <div class="info-list">
            <div class="info-item" v-for="info in basicInfo" :key="info.key">
              <div class="info-icon">
                <el-icon size="16">
                  <component :is="info.icon" />
                </el-icon>
              </div>
              <div class="info-content">
                <span class="info-label">{{ info.label }}</span>
                <span class="info-value">{{ info.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 最近活动 -->
        <div class="activity-card">
          <div class="card-header">
            <h3 class="card-title">最近活动</h3>
            <el-button 
              text 
              type="primary"
              class="card-action"
            >
              查看全部
            </el-button>
          </div>
          <div class="activity-list">
            <div class="activity-item" v-for="activity in recentActivities" :key="activity.id">
              <div class="activity-dot" :style="{ backgroundColor: activity.color }"></div>
              <div class="activity-content">
                <div class="activity-title">{{ activity.title }}</div>
                <div class="activity-time">{{ activity.time }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑个人资料对话框 -->
    <el-dialog
      v-model="showEditDialog"
      title="编辑个人资料"
      width="500px"
      :close-on-click-modal="false"
    >
      <el-form 
        :model="editForm" 
        :rules="formRules"
        ref="editFormRef"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input 
            v-model="editForm.name" 
            placeholder="请输入姓名"
            clearable
          />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input 
            v-model="editForm.phone" 
            placeholder="请输入手机号"
            clearable
          />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input 
            v-model="editForm.email" 
            placeholder="请输入邮箱"
            clearable
          />
        </el-form-item>
        <el-form-item label="所在地区" prop="region">
          <el-input 
            v-model="editForm.region" 
            placeholder="请输入所在地区"
            clearable
          />
        </el-form-item>
        <el-form-item label="个人简介" prop="bio">
          <el-input 
            v-model="editForm.bio" 
            type="textarea" 
            :rows="3"
            placeholder="请输入个人简介"
            :maxlength="200"
            show-word-limit
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="showEditDialog = false">取消</el-button>
          <el-button type="primary" @click="saveProfile" :loading="saving">
            保存
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { 
  User, Edit, Setting, Camera, Phone, Message, 
  Location, Calendar, Present, ShoppingBag, 
  Star, TrendCharts 
} from '@element-plus/icons-vue'

// 响应式数据
const showEditDialog = ref(false)
const saving = ref(false)
const editFormRef = ref()

// 用户信息
const userInfo = reactive({
  name: '张三',
  role: '农场管理员',
  email: 'zhangsan@ifarm.com',
  phone: '138****8888',
  avatar: '',
  region: '北京市朝阳区',
  bio: '专注于农业科技创新，致力于推动现代农业发展。',
  joinDate: '2023-01-15',
  lastLogin: '2024-01-20 14:25:00'
})

// 统计数据
const statsData = computed(() => [
  {
    key: 'adoption',
    label: '认养项目',
    value: 25,
    icon: 'Present',
    color: '#A5D6A7',
    colorDark: '#81C784'
  },
  {
    key: 'orders',
    label: '订单数量',
    value: 88,
    icon: 'ShoppingBag',
    color: '#81C784',
    colorDark: '#66BB6A'
  },
  {
    key: 'favorites',
    label: '收藏商品',
    value: 156,
    icon: 'Star',
    color: '#66BB6A',
    colorDark: '#4CAF50'
  },
  {
    key: 'growth',
    label: '成长值',
    value: 2580,
    icon: 'TrendCharts',
    color: '#4CAF50',
    colorDark: '#388E3C'
  }
])

// 基本信息
const basicInfo = computed(() => [
  {
    key: 'phone',
    label: '手机号',
    value: userInfo.phone,
    icon: 'Phone'
  },
  {
    key: 'email',
    label: '邮箱',
    value: userInfo.email,
    icon: 'Message'
  },
  {
    key: 'region',
    label: '所在地区',
    value: userInfo.region,
    icon: 'Location'
  },
  {
    key: 'joinDate',
    label: '注册时间',
    value: userInfo.joinDate,
    icon: 'Calendar'
  }
])

// 最近活动
const recentActivities = ref([
  {
    id: 1,
    title: '认养了有机蔬菜地块',
    time: '2小时前',
    color: '#A5D6A7'
  },
  {
    id: 2,
    title: '订单已完成配送',
    time: '1天前',
    color: '#81C784'
  },
  {
    id: 3,
    title: '收藏了新鲜水果',
    time: '2天前',
    color: '#66BB6A'
  },
  {
    id: 4,
    title: '参与了农场活动',
    time: '3天前',
    color: '#4CAF50'
  }
])

// 编辑表单
const editForm = reactive({
  name: '',
  phone: '',
  email: '',
  region: '',
  bio: ''
})

// 表单验证规则
const formRules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  phone: [
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  email: [
    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
  ]
}

// 方法
const handleAvatarEdit = () => {
  ElMessage.info('头像上传功能开发中...')
}

const saveProfile = async () => {
  try {
    await editFormRef.value.validate()
    saving.value = true
    
    // 模拟保存
    setTimeout(() => {
      Object.assign(userInfo, editForm)
      saving.value = false
      showEditDialog.value = false
      ElMessage.success('保存成功')
    }, 1000)
  } catch (error) {
    console.log('验证失败:', error)
  }
}

// 监听编辑对话框打开
const openEditDialog = () => {
  Object.assign(editForm, {
    name: userInfo.name,
    phone: userInfo.phone,
    email: userInfo.email,
    region: userInfo.region,
    bio: userInfo.bio
  })
}

// 监听对话框显示状态
watch(() => showEditDialog.value, (newVal) => {
  if (newVal) {
    openEditDialog()
  }
})
</script>

<style scoped>
.profile-container {
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #f8fffe 50%, #ffffff 100%);
  padding: 24px;
}

/* 顶部个人信息区域 */
.profile-header {
  margin-bottom: 32px;
}

.profile-card {
  background: linear-gradient(135deg, #E8F5E8 0%, #F1F8E9 50%, #ffffff 100%);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 2px 12px rgba(165, 214, 167, 0.15);
  border: 1px solid rgba(165, 214, 167, 0.2);
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  overflow: hidden;
}

.avatar-section {
  flex-shrink: 0;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.user-avatar {
  border: 4px solid #f8f9fa;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.avatar-edit-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  color: #666;
  width: 32px;
  height: 32px;
}

.avatar-edit-btn:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 8px 0;
}

.user-title {
  font-size: 16px;
  color: #666;
  margin: 0 0 4px 0;
}

.user-email {
  font-size: 14px;
  color: #999;
  margin: 0 0 24px 0;
}

.user-actions {
  display: flex;
  gap: 12px;
}

.edit-btn, .settings-btn {
  border-radius: 8px;
  height: 40px;
  padding: 0 20px;
  font-weight: 500;
}

.settings-btn {
  background: #f8f9fa;
  border-color: #e9ecef;
  color: #495057;
}

.settings-btn:hover {
  background: #e9ecef;
  border-color: #dee2e6;
}

/* 统计数据区域 */
.stats-section {
  margin-bottom: 32px;
}

.stats-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.stat-card {
  background: linear-gradient(145deg, #ffffff 0%, #f8fffe 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 200px;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(165, 214, 167, 0.2);
  background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #A5D6A7, #81C784, #66BB6A, #4CAF50);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--icon-color, #A5D6A7), var(--icon-color-dark, #81C784)) !important;
  box-shadow: 0 2px 8px rgba(165, 214, 167, 0.3);
}

.stat-content {
  flex: 1;
}

.stat-number {
  font-size: 24px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

/* 主要内容区域 */
.content-section {
  margin-bottom: 32px;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.info-card, .activity-card {
  background: linear-gradient(145deg, #ffffff 0%, #fafffe 100%);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.info-card:hover, .activity-card:hover {
  box-shadow: 0 4px 12px rgba(165, 214, 167, 0.1);
  background: linear-gradient(145deg, #ffffff 0%, #f0fdf4 100%);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.card-action {
  font-size: 14px;
  padding: 4px 8px;
}

/* 基本信息列表 */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.info-icon {
  width: 32px;
  height: 32px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  flex-shrink: 0;
}

.info-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.info-label {
  font-size: 12px;
  color: #999;
}

.info-value {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

/* 活动列表 */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.activity-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 14px;
  color: #333;
  font-weight: 500;
  margin-bottom: 4px;
}

.activity-time {
  font-size: 12px;
  color: #999;
}

/* 对话框样式 */
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

  /* 响应式设计 */
  @media (max-width: 768px) {
    .profile-container {
      padding: 16px;
    }
    
    .profile-card {
      flex-direction: column;
      text-align: center;
      gap: 24px;
      padding: 24px;
    }
    
    .user-actions {
      justify-content: center;
    }
    
    .stats-container {
      flex-direction: column;
      gap: 16px;
    }
    
    .content-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
    
    .stat-card {
      padding: 20px;
      min-width: auto;
    }
    
    .info-card, .activity-card {
      padding: 20px;
    }
  }
  
  @media (max-width: 480px) {
    .stats-container {
      flex-direction: column;
      gap: 12px;
    }
    
    .user-name {
      font-size: 24px;
    }
    
    .stat-number {
      font-size: 20px;
    }
  }
</style> 