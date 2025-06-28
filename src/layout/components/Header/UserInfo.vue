<template>
  <el-dropdown @command="handleCommand" class="user-dropdown">
    <div class="user-info">
      <el-avatar :size="32" :src="userInfo.avatar" class="user-avatar">
        <el-icon><User /></el-icon>
      </el-avatar>
      <span class="username">{{ userInfo.name }}</span>
      <el-icon class="dropdown-icon"><ArrowDown /></el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="profile">
          <el-icon><User /></el-icon>
          个人中心
        </el-dropdown-item>
        <el-dropdown-item command="settings">
          <el-icon><Setting /></el-icon>
          账户设置
        </el-dropdown-item>
        <el-dropdown-item divided command="logout">
          <el-icon><SwitchButton /></el-icon>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores'
import { User, ArrowDown, Setting, SwitchButton } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const router = useRouter()
const appStore = useAppStore()

// 用户信息
const userInfo = ref({
  name: '管理员',
  avatar: ''
})

// 处理下拉菜单命令
const handleCommand = async (command) => {
  switch (command) {
    case 'profile':
      // 跳转到个人中心
      router.push('/profile')
      // 添加到标签页
      appStore.addVisitedView({
        path: '/profile',
        name: 'Profile',
        title: '个人中心',
        icon: 'User'
      })
      break
    case 'settings':
      // 跳转到账户设置
      router.push('/settings')
      // 添加到标签页
      appStore.addVisitedView({
        path: '/settings',
        name: 'Settings',
        title: '账户设置',
        icon: 'Setting'
      })
      break
    case 'logout':
      try {
        await ElMessageBox.confirm('确定要退出登录吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        
        // 清除所有标签页
        appStore.removeAllViews()
        
        // 这里可以添加退出登录的逻辑
        // 比如清除token、重定向到登录页等
        ElMessage.success('退出登录成功')
        
        // 跳转到首页
        router.push('/dashboard')
      } catch {
        // 用户取消
      }
      break
  }
}
</script>

<style scoped>
.user-dropdown {
  margin-left: 8px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: transparent;
}

.user-info:hover {
  background-color: var(--primary-light);
}

.user-avatar {
  flex-shrink: 0;
  border: 2px solid transparent;
  transition: border-color 0.3s ease;
}

.user-info:hover .user-avatar {
  border-color: var(--primary-color);
}

.username {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
  white-space: nowrap;
}

.dropdown-icon {
  font-size: 12px;
  color: var(--text-secondary);
  transition: transform 0.3s ease, color 0.3s ease;
}

.user-info:hover .dropdown-icon {
  color: var(--primary-dark);
  transform: rotate(180deg);
}

@media (max-width: 768px) {
  .username {
    display: none;
  }
  
  .user-info {
    padding: 6px;
  }
}
</style> 