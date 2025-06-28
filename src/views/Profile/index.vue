<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">个人中心</h1>
    </div>
    
    <div class="profile-content">
      <!-- 个人信息卡片 -->
      <div class="content-card profile-card">
        <div class="profile-avatar-section">
          <el-avatar :size="120" :src="userInfo.avatar" class="profile-avatar">
            <el-icon size="60"><User /></el-icon>
          </el-avatar>
          <div class="profile-info">
            <h2 class="profile-name">{{ userInfo.name }}</h2>
            <p class="profile-role">{{ userInfo.role }}</p>
            <p class="profile-email">{{ userInfo.email }}</p>
            <el-button type="primary" @click="showEditDialog = true" class="edit-profile-btn">
              <el-icon><Edit /></el-icon>
              编辑资料
            </el-button>
          </div>
        </div>
      </div>
      
      <!-- 基本信息 -->
      <div class="content-card">
        <h3 class="card-title">基本信息</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">用户名</span>
            <span class="info-value">{{ userInfo.username }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">手机号</span>
            <span class="info-value">{{ userInfo.phone }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">注册时间</span>
            <span class="info-value">{{ userInfo.registerTime }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">最后登录</span>
            <span class="info-value">{{ userInfo.lastLoginTime }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">所在地区</span>
            <span class="info-value">{{ userInfo.region }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">个人简介</span>
            <span class="info-value">{{ userInfo.bio || '暂无' }}</span>
          </div>
        </div>
      </div>
      
      <!-- 统计信息 -->
      <div class="content-card">
        <h3 class="card-title">我的统计</h3>
        <div class="stats-grid">
          <div class="stats-item">
            <div class="stats-icon">
              <el-icon size="24" color="#A5D6A7"><Present /></el-icon>
            </div>
            <div class="stats-content">
              <div class="stats-number">{{ userStats.adoptionCount }}</div>
              <div class="stats-label">认养项目</div>
            </div>
          </div>
          <div class="stats-item">
            <div class="stats-icon">
              <el-icon size="24" color="#A5D6A7"><ShoppingBag /></el-icon>
            </div>
            <div class="stats-content">
              <div class="stats-number">{{ userStats.orderCount }}</div>
              <div class="stats-label">订单数量</div>
            </div>
          </div>
          <div class="stats-item">
            <div class="stats-icon">
              <el-icon size="24" color="#A5D6A7"><Star /></el-icon>
            </div>
            <div class="stats-content">
              <div class="stats-number">{{ userStats.favoriteCount }}</div>
              <div class="stats-label">收藏农产品</div>
            </div>
          </div>
          <div class="stats-item">
            <div class="stats-icon">
              <el-icon size="24" color="#A5D6A7"><Calendar /></el-icon>
            </div>
            <div class="stats-content">
              <div class="stats-number">{{ userStats.daysJoined }}</div>
              <div class="stats-label">加入天数</div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 最近活动 -->
      <div class="content-card">
        <h3 class="card-title">最近活动</h3>
        <div class="activity-list">
          <div v-for="activity in recentActivities" :key="activity.id" class="activity-item">
            <div class="activity-icon">
              <el-icon :color="activity.iconColor">
                <component :is="getIcon(activity.icon)" />
              </el-icon>
            </div>
            <div class="activity-content">
              <div class="activity-title">{{ activity.title }}</div>
              <div class="activity-time">{{ activity.time }}</div>
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
      class="edit-dialog"
    >
      <el-form :model="editForm" label-width="80px" class="edit-form">
        <el-form-item label="姓名">
          <el-input v-model="editForm.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="editForm.phone" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="editForm.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="所在地区">
          <el-input v-model="editForm.region" placeholder="请输入所在地区" />
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input 
            v-model="editForm.bio" 
            type="textarea" 
            :rows="3"
            placeholder="请输入个人简介" 
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="showEditDialog = false">取消</el-button>
        <el-button type="primary" @click="saveProfile">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { User, Edit, Present, ShoppingBag, Star, Calendar } from '@element-plus/icons-vue'
import { getIcon } from '@/utils/icons'

// 用户基本信息
const userInfo = reactive({
  name: '农场管理员',
  username: 'admin',
  role: '系统管理员',
  email: 'admin@ifarm.com',
  phone: '138****8888',
  avatar: '',
  registerTime: '2023-01-15 10:30:00',
  lastLoginTime: '2024-01-20 14:25:00',
  region: '北京市朝阳区',
  bio: '专注于农业科技创新，致力于推动现代农业发展。'
})

// 用户统计数据
const userStats = reactive({
  adoptionCount: 25,
  orderCount: 88,
  favoriteCount: 156,
  daysJoined: 370
})

// 最近活动
const recentActivities = ref([
  {
    id: 1,
    title: '认养了有机蔬菜地块',
    time: '2小时前',
    icon: 'Present',
    iconColor: '#A5D6A7'
  },
  {
    id: 2,
    title: '订单已完成配送',
    time: '1天前',
    icon: 'ShoppingBag',
    iconColor: '#81C784'
  },
  {
    id: 3,
    title: '收藏了新鲜水果',
    time: '3天前',
    icon: 'Star',
    iconColor: '#4CAF50'
  },
  {
    id: 4,
    title: '更新了个人资料',
    time: '1周前',
    icon: 'User',
    iconColor: '#388E3C'
  }
])

// 编辑对话框状态
const showEditDialog = ref(false)

// 编辑表单
const editForm = reactive({
  name: userInfo.name,
  phone: userInfo.phone,
  email: userInfo.email,
  region: userInfo.region,
  bio: userInfo.bio
})

// 保存个人资料
const saveProfile = () => {
  // 更新用户信息
  Object.assign(userInfo, editForm)
  showEditDialog.value = false
  ElMessage.success('个人资料更新成功！')
}
</script>

<style scoped>
.profile-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.profile-card {
  background: linear-gradient(135deg, var(--primary-light), var(--primary-mid));
  border: 1px solid var(--primary-color);
}

.profile-avatar-section {
  display: flex;
  align-items: center;
  gap: 32px;
}

.profile-avatar {
  border: 4px solid var(--primary-color);
  box-shadow: 0 4px 16px rgba(165, 214, 167, 0.3);
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 32px;
  font-weight: 700;
  color: var(--primary-dark);
  margin: 0 0 8px 0;
}

.profile-role {
  font-size: 16px;
  color: var(--primary-dark);
  margin: 0 0 4px 0;
  opacity: 0.8;
}

.profile-email {
  font-size: 14px;
  color: var(--text-secondary);
  margin: 0 0 20px 0;
}

.edit-profile-btn {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 8px;
}

.card-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--primary-light);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.info-label {
  font-weight: 500;
  color: var(--text-secondary);
  font-size: 14px;
}

.info-value {
  font-weight: 500;
  color: var(--text-primary);
  font-size: 14px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.stats-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background-color: var(--bg-light);
  border-radius: 12px;
  border: 1px solid var(--border-light);
  transition: transform 0.3s ease;
}

.stats-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-medium);
}

.stats-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--primary-light);
  border-radius: 12px;
}

.stats-content {
  flex: 1;
}

.stats-number {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
}

.stats-label {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.activity-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;
}

.activity-item:hover {
  background-color: var(--primary-light);
  transform: translateX(4px);
}

.activity-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-primary);
  border-radius: 8px;
  border: 1px solid var(--border-light);
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1;
}

.activity-time {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.edit-dialog :deep(.el-dialog__body) {
  padding: 20px 20px 0;
}

.edit-form {
  padding-right: 20px;
}

@media (max-width: 768px) {
  .profile-avatar-section {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 