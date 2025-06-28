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
    
    // 如果只有一个可见子路由，将子路由提升为顶级菜单
    if (visibleChildren.length === 1) {
      const child = visibleChildren[0]
      // 正确拼接路径，避免双斜杠
      const childPath = route.path === '/' ? `/${child.path}` : `${route.path}/${child.path}`
      menuRoutes.push({
        path: childPath,
        name: child.name,
        meta: child.meta,
        component: child.component
      })
    } else {
      // 多个子路由，保持嵌套结构
      // 但需要检查父路由是否有 meta 信息
      if (route.meta && !route.meta.hidden) {
        menuRoutes.push({
          path: route.path,
          name: route.name,
          meta: route.meta,
          children: visibleChildren.map(child => {
            // 正确拼接路径，避免双斜杠
            const childPath = route.path === '/' ? `/${child.path}` : `${route.path}/${child.path}`
            return {
              path: childPath,
              name: child.name,
              meta: child.meta,
              component: child.component
            }
          })
        })
      }
    }
  })
  
  return menuRoutes
}
</script>

<style scoped>
.sidebar-menu {
  border: none;
  width: 100%;
  min-height: 100%;
}

/* 基础菜单项样式 */
.sidebar-menu :deep(.el-menu-item) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
  transition: none !important;
  height: 48px !important;
  line-height: 48px !important;
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

/* 子菜单样式 */
.sidebar-menu :deep(.el-sub-menu) {
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
}

/* 自定义子菜单标题 */
.sidebar-menu :deep(.el-sub-menu__title) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  transition: none !important;
  height: 48px !important;
  line-height: 48px !important;
  padding: 0 !important;
}

.sidebar-menu :deep(.el-sub-menu__title:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

/* 隐藏默认的箭头图标 */
.sidebar-menu :deep(.el-sub-menu__icon-arrow) {
  display: none !important;
}

/* 自定义标题内容布局 */
.menu-title-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 16px;
}

.menu-left {
  display: flex;
  align-items: center;
  flex: 1;
}

.menu-icon {
  font-size: 16px;
  margin-right: 8px;
  color: inherit;
}

.menu-text {
  font-size: 14px;
  color: inherit;
}

.menu-arrow {
  font-size: 12px;
  color: var(--text-secondary);
  transition: transform 0.3s ease;
}

/* 展开状态的箭头旋转 */
.sidebar-menu :deep(.el-sub-menu.is-opened) .menu-arrow {
  transform: rotate(180deg);
  color: var(--primary-color);
}

/* 子菜单列表 */
.sidebar-menu :deep(.el-menu--inline) {
  background-color: var(--bg-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  padding: 4px 0 !important;
}

.sidebar-menu :deep(.el-menu--inline .el-menu-item) {
  margin: 1px 8px !important;
  width: calc(100% - 16px) !important;
  padding-left: 48px !important;
  height: 40px !important;
  line-height: 40px !important;
}

.sidebar-menu :deep(.el-menu--inline .el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.sidebar-menu :deep(.el-menu--inline .el-menu-item.is-active) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* 图标样式 */
.sidebar-menu :deep(.el-icon) {
  font-size: 16px !important;
  margin-right: 8px !important;
  color: inherit !important;
}

/* 收起状态样式 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item) {
  margin: 2px auto !important;
  width: 48px !important;
  height: 48px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  text-align: center !important;
}

.sidebar-menu.el-menu--collapse :deep(.el-sub-menu__title) {
  margin: 2px auto !important;
  width: 48px !important;
  height: 48px !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

.sidebar-menu.el-menu--collapse :deep(.el-menu-item .el-icon) {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.sidebar-menu.el-menu--collapse .menu-title-content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  width: 48px !important;
  height: 48px !important;
}

.sidebar-menu.el-menu--collapse .menu-left {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 48px !important;
  height: 48px !important;
}

.sidebar-menu.el-menu--collapse .menu-icon {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

.sidebar-menu.el-menu--collapse .menu-text,
.sidebar-menu.el-menu--collapse .menu-arrow {
  display: none !important;
}

/* 移除所有动画效果 */
.sidebar-menu :deep(*) {
  transition: none !important;
  animation: none !important;
}

/* 保留箭头旋转动画 */
.menu-arrow {
  transition: transform 0.3s ease !important;
}
</style> 