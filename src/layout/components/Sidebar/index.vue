<template>
  <el-aside :width="appStore.sidebarWidth" class="sidebar">
    <!-- Logo区域 -->
    <div class="logo-container">
      <div class="logo">
        <el-icon size="32" color="var(--primary-color)">
          <House />
        </el-icon>
        <span v-show="!appStore.sidebarCollapsed" class="site-name">农场认养管理</span>
      </div>
    </div>
    
    <!-- 菜单区域 -->
    <SidebarMenu />
  </el-aside>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { House } from '@element-plus/icons-vue'
import SidebarMenu from './SidebarMenu.vue'

const appStore = useAppStore()
</script>

<style scoped>
.sidebar {
  background-color: var(--bg-primary);
  border-right: 1px solid var(--border-color);
  transition: width 0.3s ease;
  overflow: hidden;
}

.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  padding: 0 16px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.site-name {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-dark);
  white-space: nowrap;
}
</style> 