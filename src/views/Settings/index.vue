<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">账户设置</h1>
    </div>
    
    <div class="settings-content">
      <div class="settings-sidebar">
        <div class="sidebar-menu">
          <div 
            v-for="tab in settingTabs" 
            :key="tab.key"
            class="sidebar-item"
            :class="{ active: activeTab === tab.key }"
            @click="activeTab = tab.key"
          >
            <el-icon class="sidebar-icon">
              <component :is="getIcon(tab.icon)" />
            </el-icon>
            <span class="sidebar-label">{{ tab.label }}</span>
          </div>
        </div>
      </div>
      
      <div class="settings-main">
        <!-- 账户信息 -->
        <div v-if="activeTab === 'account'" class="content-card">
          <h3 class="card-title">账户信息</h3>
          <el-form :model="accountForm" label-width="100px" class="settings-form">
            <el-form-item label="用户名">
              <el-input 
                v-model="accountForm.username" 
                disabled
                placeholder="用户名不可修改"
              />
            </el-form-item>
            <el-form-item label="邮箱地址">
              <div class="input-with-action">
                <el-input 
                  v-model="accountForm.email" 
                  placeholder="请输入邮箱地址"
                />
                <el-button type="primary" text>
                  {{ accountForm.emailVerified ? '已验证' : '验证邮箱' }}
                </el-button>
              </div>
            </el-form-item>
            <el-form-item label="手机号码">
              <div class="input-with-action">
                <el-input 
                  v-model="accountForm.phone" 
                  placeholder="请输入手机号码"
                />
                <el-button type="primary" text>
                  {{ accountForm.phoneVerified ? '已验证' : '验证手机' }}
                </el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="saveAccountInfo">保存修改</el-button>
            </el-form-item>
          </el-form>
        </div>
        
        <!-- 密码安全 -->
        <div v-if="activeTab === 'security'" class="content-card">
          <h3 class="card-title">密码安全</h3>
          <el-form :model="passwordForm" label-width="100px" class="settings-form">
            <el-form-item label="当前密码">
              <el-input 
                v-model="passwordForm.currentPassword" 
                type="password"
                placeholder="请输入当前密码"
                show-password
              />
            </el-form-item>
            <el-form-item label="新密码">
              <el-input 
                v-model="passwordForm.newPassword" 
                type="password"
                placeholder="请输入新密码"
                show-password
              />
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input 
                v-model="passwordForm.confirmPassword" 
                type="password"
                placeholder="请再次输入新密码"
                show-password
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="changePassword">修改密码</el-button>
            </el-form-item>
          </el-form>
        </div>
        
        <!-- 通知设置 -->
        <div v-if="activeTab === 'notification'" class="content-card">
          <h3 class="card-title">通知设置</h3>
          <div class="notification-settings">
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-title">系统通知</div>
                <div class="notification-desc">接收系统重要通知和公告</div>
              </div>
              <el-switch v-model="notificationSettings.system" />
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-title">订单通知</div>
                <div class="notification-desc">接收订单状态变更通知</div>
              </div>
              <el-switch v-model="notificationSettings.order" />
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-title">认养通知</div>
                <div class="notification-desc">接收认养项目相关通知</div>
              </div>
              <el-switch v-model="notificationSettings.adoption" />
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-title">邮件通知</div>
                <div class="notification-desc">通过邮件接收重要通知</div>
              </div>
              <el-switch v-model="notificationSettings.email" />
            </div>
            <div class="notification-item">
              <div class="notification-info">
                <div class="notification-title">短信通知</div>
                <div class="notification-desc">通过短信接收重要通知</div>
              </div>
              <el-switch v-model="notificationSettings.sms" />
            </div>
          </div>
          <div class="form-actions">
            <el-button type="primary" @click="saveNotificationSettings">保存设置</el-button>
          </div>
        </div>
        
        <!-- 隐私设置 -->
        <div v-if="activeTab === 'privacy'" class="content-card">
          <h3 class="card-title">隐私设置</h3>
          <div class="privacy-settings">
            <div class="privacy-item">
              <div class="privacy-info">
                <div class="privacy-title">个人资料可见性</div>
                <div class="privacy-desc">其他用户可以查看我的基本信息</div>
              </div>
              <el-switch v-model="privacySettings.profileVisible" />
            </div>
            <div class="privacy-item">
              <div class="privacy-info">
                <div class="privacy-title">活动记录</div>
                <div class="privacy-desc">在活动页面显示我的操作记录</div>
              </div>
              <el-switch v-model="privacySettings.activityVisible" />
            </div>
            <div class="privacy-item">
              <div class="privacy-info">
                <div class="privacy-title">在线状态</div>
                <div class="privacy-desc">显示我的在线状态</div>
              </div>
              <el-switch v-model="privacySettings.onlineStatus" />
            </div>
          </div>
          <div class="form-actions">
            <el-button type="primary" @click="savePrivacySettings">保存设置</el-button>
          </div>
        </div>
        
        <!-- 账户注销 -->
        <div v-if="activeTab === 'danger'" class="content-card danger-zone">
          <h3 class="card-title danger-title">危险操作</h3>
          <div class="danger-content">
            <div class="danger-item">
              <div class="danger-info">
                <div class="danger-action-title">注销账户</div>
                <div class="danger-desc">永久删除账户和所有相关数据，此操作不可恢复</div>
              </div>
              <el-button type="danger" @click="showDeleteDialog = true">注销账户</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 账户注销确认对话框 -->
    <el-dialog
      v-model="showDeleteDialog"
      title="确认注销账户"
      width="500px"
      class="danger-dialog"
    >
      <div class="delete-warning">
        <el-icon size="48" color="#F56C6C"><WarningFilled /></el-icon>
        <h3>此操作将永久删除您的账户</h3>
        <p>包括：</p>
        <ul>
          <li>所有个人信息和设置</li>
          <li>认养项目和订单记录</li>
          <li>收藏和活动历史</li>
          <li>无法恢复任何数据</li>
        </ul>
        <p>请输入您的密码确认此操作：</p>
        <el-input 
          v-model="deletePassword"
          type="password"
          placeholder="请输入账户密码"
          show-password
        />
      </div>
      <template #footer>
        <el-button @click="showDeleteDialog = false">取消</el-button>
        <el-button type="danger" @click="deleteAccount">确认注销</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { WarningFilled } from '@element-plus/icons-vue'
import { getIcon } from '@/utils/icons'

// 当前激活的标签页
const activeTab = ref('account')

// 设置菜单
const settingTabs = [
  { key: 'account', label: '账户信息', icon: 'User' },
  { key: 'security', label: '密码安全', icon: 'Lock' },
  { key: 'notification', label: '通知设置', icon: 'Bell' },
  { key: 'privacy', label: '隐私设置', icon: 'View' },
  { key: 'danger', label: '账户注销', icon: 'Warning' }
]

// 账户信息表单
const accountForm = reactive({
  username: 'admin',
  email: 'admin@ifarm.com',
  phone: '13800138000',
  emailVerified: true,
  phoneVerified: false
})

// 密码表单
const passwordForm = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// 通知设置
const notificationSettings = reactive({
  system: true,
  order: true,
  adoption: true,
  email: false,
  sms: false
})

// 隐私设置
const privacySettings = reactive({
  profileVisible: true,
  activityVisible: true,
  onlineStatus: false
})

// 账户注销相关
const showDeleteDialog = ref(false)
const deletePassword = ref('')

// 保存账户信息
const saveAccountInfo = () => {
  ElMessage.success('账户信息更新成功！')
}

// 修改密码
const changePassword = () => {
  if (!passwordForm.currentPassword) {
    ElMessage.warning('请输入当前密码')
    return
  }
  if (!passwordForm.newPassword) {
    ElMessage.warning('请输入新密码')
    return
  }
  if (passwordForm.newPassword !== passwordForm.confirmPassword) {
    ElMessage.warning('两次输入的密码不一致')
    return
  }
  
  ElMessage.success('密码修改成功！')
  // 清空表单
  Object.keys(passwordForm).forEach(key => {
    passwordForm[key] = ''
  })
}

// 保存通知设置
const saveNotificationSettings = () => {
  ElMessage.success('通知设置保存成功！')
}

// 保存隐私设置
const savePrivacySettings = () => {
  ElMessage.success('隐私设置保存成功！')
}

// 注销账户
const deleteAccount = async () => {
  if (!deletePassword.value) {
    ElMessage.warning('请输入账户密码')
    return
  }
  
  try {
    await ElMessageBox.confirm('确定要注销账户吗？此操作不可恢复！', '最终确认', {
      confirmButtonText: '确认注销',
      cancelButtonText: '取消',
      type: 'error'
    })
    
    ElMessage.success('账户注销申请已提交，将在3个工作日内处理')
    showDeleteDialog.value = false
    deletePassword.value = ''
  } catch {
    // 用户取消
  }
}
</script>

<style scoped>
.settings-content {
  display: flex;
  gap: 24px;
  min-height: 600px;
}

.settings-sidebar {
  width: 220px;
  flex-shrink: 0;
}

.sidebar-menu {
  background-color: var(--bg-primary);
  border-radius: 12px;
  padding: 8px;
  box-shadow: var(--shadow-light);
  border: 1px solid var(--border-light);
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 4px;
}

.sidebar-item:hover {
  background-color: var(--primary-light);
  color: var(--primary-dark);
}

.sidebar-item.active {
  background-color: var(--primary-color);
  color: white;
  font-weight: 500;
}

.sidebar-icon {
  font-size: 16px;
}

.sidebar-label {
  font-size: 14px;
  font-weight: 500;
}

.settings-main {
  flex: 1;
}

.settings-form {
  max-width: 500px;
}

.input-with-action {
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
}

.input-with-action .el-input {
  flex: 1;
}

.notification-settings,
.privacy-settings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.notification-item,
.privacy-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--bg-light);
  border-radius: 8px;
  border-left: 4px solid var(--primary-color);
}

.notification-info,
.privacy-info {
  flex: 1;
}

.notification-title,
.privacy-title {
  font-size: 16px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.notification-desc,
.privacy-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.form-actions {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--border-light);
}

.danger-zone {
  border: 1px solid #F56C6C !important;
  background-color: #FEF0F0 !important;
}

.danger-title {
  color: #F56C6C !important;
}

.danger-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.danger-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--bg-primary);
  border-radius: 8px;
  border-left: 4px solid #F56C6C;
}

.danger-info {
  flex: 1;
}

.danger-action-title {
  font-size: 16px;
  font-weight: 500;
  color: #F56C6C;
  margin-bottom: 4px;
}

.danger-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.4;
}

.delete-warning {
  text-align: center;
  padding: 20px;
}

.delete-warning h3 {
  color: #F56C6C;
  margin: 16px 0;
  font-size: 18px;
}

.delete-warning p {
  color: var(--text-secondary);
  margin: 12px 0;
}

.delete-warning ul {
  text-align: left;
  max-width: 300px;
  margin: 16px auto;
  color: var(--text-secondary);
}

.delete-warning ul li {
  margin: 4px 0;
}

.delete-warning .el-input {
  margin-top: 16px;
}

@media (max-width: 768px) {
  .settings-content {
    flex-direction: column;
  }
  
  .settings-sidebar {
    width: 100%;
  }
  
  .sidebar-menu {
    display: flex;
    overflow-x: auto;
    padding: 8px;
  }
  
  .sidebar-item {
    white-space: nowrap;
    margin-right: 8px;
    margin-bottom: 0;
  }
  
  .notification-item,
  .privacy-item,
  .danger-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style> 