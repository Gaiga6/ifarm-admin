<template>
  <div class="layout-container" :class="[appStore.themeClass, appStore.device]">
    <!-- 侧边栏 -->
    <Sidebar />
    
    <!-- 移动端遮罩层 -->
    <div 
      v-if="appStore.showSidebarMask"
      class="sidebar-mask"
      @click="handleMaskClick"
    ></div>
    
    <!-- 主要内容区域 -->
    <div class="main-container">
      <!-- 顶部导航 -->
      <Header />
      
      <!-- 标签栏 -->
      <TagsView v-if="appStore.tagsView.enabled" />
      
      <!-- 内容区域 -->
      <AppMain />
    </div>
    
    <!-- 设置抽屉 -->
    <SettingsDrawer />
    
    <!-- 水印 -->
    <Watermark v-if="appStore.watermark.enabled" />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores'
import Sidebar from './components/Sidebar/index.vue'
import Header from './components/Header/index.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from './components/AppMain/index.vue'
import SettingsDrawer from './components/Settings/index.vue'
import Watermark from './components/Watermark/index.vue'

const appStore = useAppStore()

// 处理窗口尺寸变化
const handleResize = () => {
  // 窗口大小变化时，强制更新设备类型和侧边栏状态
  appStore.checkDevice(true)
}

// 处理遮罩点击
const handleMaskClick = () => {
  if (appStore.isMobile) {
    appStore.setSidebarCollapsed(true)
  }
}

onMounted(() => {
  // 监听窗口尺寸变化
  window.addEventListener('resize', handleResize)
  
  // 初始化主题
  appStore.applyTheme()
  
  // 注意：不在这里调用 checkDevice()，因为在 main.js 的 initializeTheme() 中已经调用了
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: margin-left 0.3s ease;
}

/* 侧边栏遮罩 */
.sidebar-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease;
}

/* 主题样式 */
.theme-dark {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

.theme-light {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
}

/* 移动端样式 */
.mobile .main-container {
  margin-left: 0 !important;
}

/* 平板端样式 */
.tablet .main-container {
  margin-left: 0;
}

/* 桌面端样式 */
.desktop .main-container {
  margin-left: 0;
}

/* 响应式断点 */
@media (max-width: 767px) {
  .layout-container {
    overflow-x: hidden;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  /* 平板端特殊样式 */
}

@media (min-width: 1024px) {
  /* 桌面端特殊样式 */
}
</style> 