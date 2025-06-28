<template>
  <el-aside 
    :width="appStore.sidebarWidth" 
    class="sidebar"
    :class="{
      'sidebar-mobile': appStore.isMobile,
      'sidebar-collapsed': appStore.sidebarCollapsed,
      'sidebar-expanded': !appStore.sidebarCollapsed,
      'has-scrollbar': hasScrollbar
    }"
  >
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
    <div class="menu-wrapper" ref="menuWrapperRef">
      <SidebarMenu />
    </div>
  </el-aside>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useAppStore } from '@/stores'
import { House } from '@element-plus/icons-vue'
import SidebarMenu from './SidebarMenu.vue'

const appStore = useAppStore()
const menuWrapperRef = ref()
const hasScrollbar = ref(false)

// 检查是否需要滚动条
const checkScrollbar = () => {
  if (!menuWrapperRef.value) return
  
  const element = menuWrapperRef.value
  hasScrollbar.value = element.scrollHeight > element.clientHeight
}

// 使用 ResizeObserver 监听内容变化
let resizeObserver = null

// 监听侧边栏折叠状态变化
watch(
  () => appStore.sidebarCollapsed,
  () => {
    // 延迟检查，等待CSS动画完成
    setTimeout(() => {
      checkScrollbar()
    }, 300)
  }
)

onMounted(() => {
  nextTick(() => {
    checkScrollbar()
    
    // 监听菜单内容变化
    if (menuWrapperRef.value) {
      resizeObserver = new ResizeObserver(() => {
        checkScrollbar()
      })
      resizeObserver.observe(menuWrapperRef.value)
    }
  })
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<style scoped>
.sidebar {
  background-color: var(--bg-primary);
  border-right: 1px solid var(--border-color);
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100vh;
  position: relative;
  z-index: 100;
}

/* 移动端侧边栏样式 */
.sidebar-mobile {
  position: fixed !important;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

/* 移动端收起状态 */
.sidebar-mobile.sidebar-collapsed {
  transform: translateX(-100%);
}

/* 移动端展开状态 */
.sidebar-mobile.sidebar-expanded {
  transform: translateX(0);
}

/* 桌面端样式 */
@media (min-width: 1024px) {
  .sidebar {
    position: static !important;
    transform: none !important;
    box-shadow: none !important;
  }
}

/* 平板端样式 */
@media (min-width: 768px) and (max-width: 1023px) {
  .sidebar {
    position: fixed !important;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar.sidebar-collapsed {
    transform: translateX(-100%);
  }
  
  .sidebar.sidebar-expanded {
    transform: translateX(0);
  }
}

.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border-color);
  padding: 0 16px;
  flex-shrink: 0;
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
  transition: opacity 0.3s ease;
}

/* 收起状态下隐藏站点名称 */
.sidebar-collapsed .site-name {
  opacity: 0;
}

/* 菜单包装器 */
.menu-wrapper {
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  /* 默认隐藏滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
}

/* 默认隐藏 WebKit 滚动条 */
.menu-wrapper::-webkit-scrollbar {
  width: 0;
  background: transparent;
}

/* 只有在需要滚动且鼠标悬停时才显示滚动条 */
.sidebar.has-scrollbar:hover .menu-wrapper::-webkit-scrollbar {
  width: 6px;
}

.sidebar.has-scrollbar:hover .menu-wrapper::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
}

.sidebar.has-scrollbar:hover .menu-wrapper::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border-radius: 3px;
  transition: background-color 0.3s ease;
}

.sidebar.has-scrollbar:hover .menu-wrapper::-webkit-scrollbar-thumb:hover {
  background-color: var(--primary-color);
}

/* 当内容不超出容器高度时，确保滚动条完全隐藏 */
.menu-wrapper::-webkit-scrollbar-corner {
  background: transparent;
}

/* 菜单样式调整 */
.sidebar :deep(.el-menu) {
  height: auto;
  min-height: 100%;
  overflow: visible;
}

/* 移动端特殊处理 */
@media (max-width: 767px) {
  .sidebar {
    position: fixed !important;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    width: 240px !important;
  }
  
  .sidebar.sidebar-collapsed {
    transform: translateX(-100%);
  }
  
  .sidebar.sidebar-expanded {
    transform: translateX(0);
  }
  
  /* 移动端Logo适配 */
  .logo-container {
    padding: 0 12px;
  }
  
  .site-name {
    font-size: 16px;
  }
}
</style> 