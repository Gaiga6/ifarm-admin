<template>
  <el-header class="header">
    <div class="header-left">
      <!-- 折叠按钮 -->
      <el-button
        type="text"
        @click="appStore.toggleSidebar"
        class="collapse-btn"
      >
        <el-icon size="20">
          <Expand v-if="appStore.sidebarCollapsed" />
          <Fold v-else />
        </el-icon>
      </el-button>
      
      <!-- 面包屑导航 -->
      <Breadcrumb v-if="appStore.breadcrumb.enabled" class="breadcrumb-nav" />
    </div>
    
    <div class="header-right">
      <!-- 语言切换 -->
      <div class="header-icon-wrapper">
        <el-dropdown @command="handleLanguageChange" class="header-dropdown">
          <el-button type="text" class="header-btn">
            <el-icon size="18">
              <Location />
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
              <el-dropdown-item command="en-US">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      
      <!-- 主题切换 -->
      <div class="header-icon-wrapper">
        <el-button
          type="text"
          @click="appStore.toggleTheme"
          class="header-btn"
        >
          <el-icon size="18">
            <Sunny v-if="appStore.theme === 'light'" />
            <Moon v-else />
          </el-icon>
        </el-button>
      </div>
      
      <!-- 设置按钮 -->
      <div class="header-icon-wrapper">
        <el-button
          type="text"
          @click="appStore.toggleSettingsDrawer"
          class="header-btn"
        >
          <el-icon size="18">
            <Setting />
          </el-icon>
        </el-button>
      </div>
      
      <!-- 用户信息 -->
      <UserInfo />
    </div>
  </el-header>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { Expand, Fold, Location, Sunny, Moon, Setting } from '@element-plus/icons-vue'
import Breadcrumb from './Breadcrumb.vue'
import UserInfo from './UserInfo.vue'

const appStore = useAppStore()

// 处理语言切换
const handleLanguageChange = (language) => {
  appStore.setLanguage(language)
  // 这里可以添加国际化逻辑
  console.log('语言切换到:', language)
}
</script>

<style scoped>
.header {
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 60px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  min-width: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}

.header-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

.breadcrumb-nav {
  overflow: hidden;
  white-space: nowrap;
}

.collapse-btn {
  padding: 8px !important;
  border: none !important;
  background: none !important;
  color: var(--text-secondary) !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
  flex-shrink: 0;
}

.collapse-btn:hover {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.header-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 40px !important;
  height: 40px !important;
  padding: 0 !important;
  border-radius: 8px !important;
  color: var(--text-secondary) !important;
  transition: all 0.3s ease !important;
  border: none !important;
  background: none !important;
}

.header-btn:hover {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.header-dropdown .el-button:hover {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

/* 移除Element Plus默认按钮样式 */
.header-btn:focus,
.header-btn:active {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  border: none !important;
  outline: none !important;
}

@media (max-width: 768px) {
  .header {
    padding: 0 16px;
  }
  
  .header-left {
    gap: 12px;
  }
  
  .header-right {
    gap: 0;
  }
  
  .header-icon-wrapper {
    width: 40px;
    height: 40px;
  }
  
  .header-btn {
    width: 36px !important;
    height: 36px !important;
  }
}
</style> 