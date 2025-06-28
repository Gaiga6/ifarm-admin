<template>
  <el-menu
    :default-active="$route.path"
    :collapse="appStore.sidebarCollapsed"
    :unique-opened="false"
    router
    class="sidebar-menu"
    background-color="var(--bg-primary)"
    text-color="var(--text-primary)"
    active-text-color="var(--primary-dark)"
  >
    <!-- 动态生成菜单 -->
    <template v-for="route in menuRoutes" :key="route.path">
      <sidebar-menu-item :route="route" />
    </template>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores'
import SidebarMenuItem from './SidebarMenuItem.vue'

const router = useRouter()
const appStore = useAppStore()

// 过滤和处理路由，生成菜单数据
const menuRoutes = computed(() => {
  return filterMenuRoutes(router.getRoutes())
})

// 过滤路由，只显示需要在菜单中显示的路由
function filterMenuRoutes(routes) {
  const menuRoutes = []
  
  // 过滤出需要显示的路由（有 children 且使用 Layout 的路由）
  const validRoutes = routes.filter(route => {
    // 检查是否是布局路由（有children的顶级路由）
    return route.path && route.children && route.children.length > 0
  })
  
  validRoutes.forEach(route => {
    // 过滤出可见的子路由
    const visibleChildren = route.children.filter(child => 
      child.meta && !child.meta.hidden
    )
    
    if (visibleChildren.length === 0) {
      return // 没有可见子路由，跳过
    }
    
    // 如果只有一个子路由，将其提升为顶级菜单
    if (visibleChildren.length === 1 && route.meta?.alwaysShow !== true) {
      const child = visibleChildren[0]
      // 正确拼接完整路径
      const fullPath = route.path === '/' ? `/${child.path}` : `${route.path}/${child.path}`
      menuRoutes.push({
        path: fullPath, // 使用完整的绝对路径
        name: child.name,
        meta: child.meta,
        children: []
      })
    } else {
      // 多个子路由，保持层级结构
      menuRoutes.push({
        path: route.path,
        name: route.name,
        meta: route.meta,
        children: visibleChildren.map(child => {
          // 为每个子路由也拼接完整路径
          const fullPath = route.path === '/' ? `/${child.path}` : `${route.path}/${child.path}`
          return {
            path: fullPath,
            name: child.name,
            meta: child.meta
          }
        })
      })
    }
  })
  
  return menuRoutes
}
</script>

<style scoped>
/* 基础容器样式 */
.sidebar-menu {
  width: 100% !important;
  border: none !important;
}

/* ==================== 展开状态样式 ==================== */

/* 一级菜单项样式 */
.sidebar-menu :deep(.el-menu-item) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
  height: 48px !important;
  line-height: 48px !important;
  display: flex !important;
  align-items: center !important;
  position: relative !important;
  padding: 0 12px !important;
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* 二级菜单容器样式 */
.sidebar-menu :deep(.el-sub-menu) {
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
}

/* 二级菜单标题样式 */
.sidebar-menu :deep(.el-sub-menu > .el-sub-menu__title) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  height: 48px !important;
  line-height: 48px !important;
  display: flex !important;
  align-items: center !important;
  padding: 0 12px !important;
}

.sidebar-menu :deep(.el-sub-menu > .el-sub-menu__title:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

/* 展开状态下的图标和文字样式 */
.sidebar-menu :deep(.menu-icon) {
  font-size: 18px !important;
  margin-right: 8px !important;
  color: inherit !important;
  width: 18px !important;
  height: 18px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.sidebar-menu :deep(.menu-text) {
  font-size: 14px !important;
  color: inherit !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

/* ==================== 折叠状态样式 ==================== */

/* 折叠状态下的容器 */
.sidebar-menu.el-menu--collapse {
  width: 64px !important;
}

/* 折叠状态：重置所有菜单项容器 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title) {
  margin: 0 !important;
  padding: 0 !important;
  width: 64px !important;
  border-radius: 0 !important;
}

/* 折叠状态：菜单项容器完美居中 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title) {
  height: 48px !important;
  margin: 2px 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  position: relative !important;
  text-align: center !important;
  border-radius: 6px !important;
  background-color: transparent !important;
}

/* 折叠状态：强制图标水平垂直居中 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item) .el-icon,
.sidebar-menu.el-menu--collapse :deep(.el-menu-item) .menu-icon,
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title) .el-icon,
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title) .menu-icon {
  /* 完全重置 */
  margin: 0 !important;
  padding: 0 !important;
  left: auto !important;
  right: auto !important;
  top: auto !important;
  bottom: auto !important;
  transform: none !important;
  
  /* 尺寸设置 */
  width: 20px !important;
  height: 20px !important;
  font-size: 20px !important;
  
  /* Flexbox居中 */
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  
  /* 定位居中 */
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
}

/* 折叠状态：确保图标在最顶层 */
.sidebar-menu.el-menu--collapse :deep(.el-icon) {
  z-index: 10 !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 20px !important;
  height: 20px !important;
  font-size: 20px !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

/* 折叠状态：彻底隐藏所有文字 */
.sidebar-menu.el-menu--collapse :deep(span:not(.el-icon)),
.sidebar-menu.el-menu--collapse :deep(.menu-text),
.sidebar-menu.el-menu--collapse :deep(.el-menu-item__title),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu__icon-arrow) {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  width: 0 !important;
  height: 0 !important;
  overflow: hidden !important;
  position: absolute !important;
  left: -9999px !important;
  top: -9999px !important;
}

/* 折叠状态下hover和active样式完全一致 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item.is-active),
.sidebar-menu.el-menu--collapse :deep(.el-menu-item:hover),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title.is-active),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* 折叠状态下弹出子菜单的active和hover样式一致 */
.sidebar-menu.el-menu--collapse :deep(.el-menu--popup .el-menu-item.is-active),
.sidebar-menu.el-menu--collapse :deep(.el-menu--popup .el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* ==================== 动画和交互 ==================== */

/* 禁用不必要的动画 */
.sidebar-menu :deep(*) {
  transition: none !important;
  animation: none !important;
}

/* 保留hover动画 */
.sidebar-menu :deep(.el-menu-item),
.sidebar-menu :deep(.el-sub-menu > .el-sub-menu__title) {
  transition: background-color 0.3s ease !important;
}

/* 确保tooltip正常工作 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu > .el-sub-menu__title) {
  overflow: visible !important;
}

/* ==================== 强制覆盖Element Plus默认样式 ==================== */

/* 移除Element Plus的默认间距和定位 */
.sidebar-menu.el-menu--collapse .el-menu-item,
.sidebar-menu.el-menu--collapse .el-sub-menu .el-sub-menu__title {
  padding-left: 0 !important;
  padding-right: 0 !important;
  text-align: center !important;
}

/* 确保图标完美居中显示 */
.sidebar-menu.el-menu--collapse .el-menu-item .el-icon,
.sidebar-menu.el-menu--collapse .el-sub-menu .el-sub-menu__title .el-icon {
  margin-left: 0 !important;
  margin-right: 0 !important;
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
}
</style> 