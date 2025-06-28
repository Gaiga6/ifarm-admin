<template>
  <el-menu
    :default-active="$route.path"
    :collapse="appStore.sidebarCollapsed"
    :unique-opened="true"
    router
    class="sidebar-menu"
    background-color="var(--bg-primary)"
    text-color="var(--text-primary)"
    active-text-color="var(--primary-dark)"
  >
    <!-- 首页菜单 -->
    <el-menu-item 
      index="/dashboard"
      @click="handleMenuClick({ path: '/dashboard', name: 'Dashboard', meta: { title: '首页', icon: 'HomeFilled' } })"
    >
      <el-icon>
        <component :is="getIcon('HomeFilled')" />
      </el-icon>
      <template #title>首页</template>
    </el-menu-item>
    
    <template v-for="route in menuRoutes" :key="route.path">
      <!-- 单级菜单 -->
      <el-menu-item 
        v-if="!route.children"
        :index="route.path"
        @click="handleMenuClick(route)"
      >
        <el-icon>
          <component :is="getIcon(route.meta?.icon || 'Document')" />
        </el-icon>
        <template #title>{{ route.meta?.title || route.name }}</template>
      </el-menu-item>
      
      <!-- 多级菜单 -->
      <el-sub-menu 
        v-else
        :index="route.path"
      >
        <template #title>
          <el-icon>
            <component :is="getIcon(route.meta?.icon || 'Folder')" />
          </el-icon>
          <span>{{ route.meta?.title || route.name }}</span>
        </template>
        
        <el-menu-item
          v-for="child in route.children"
          :key="child.path"
          :index="child.path"
          @click="handleMenuClick(child)"
        >
          <el-icon>
            <component :is="getIcon(child.meta?.icon || 'Document')" />
          </el-icon>
          <template #title>{{ child.meta?.title || child.name }}</template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores'
import { getIcon } from '@/utils/icons'

const router = useRouter()
const appStore = useAppStore()

// 获取菜单路由（排除首页）
const menuRoutes = computed(() => {
  return router.getRoutes().filter(route => {
    return route.meta && !route.meta.hidden && route.path !== '/' && route.path !== '/dashboard'
  })
})

// 处理菜单点击
const handleMenuClick = (route) => {
  // 记录访问的标签页
  if (route.meta?.title) {
    appStore.addVisitedView({
      path: route.path,
      name: route.name,
      title: route.meta.title,
      icon: route.meta.icon
    })
  }
}
</script>

<style scoped>
.sidebar-menu {
  border: none;
  width: 100%;
  min-height: calc(100vh - 60px);
}

/* 菜单项样式 - 移除所有动画 */
.sidebar-menu :deep(.el-menu-item) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
  transition: none !important; /* 移除动画 */
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

/* active样式和hover样式保持一致 */
.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* 子菜单标题样式 - 移除所有动画 */
.sidebar-menu :deep(.el-sub-menu__title) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
  transition: none !important; /* 移除动画 */
}

.sidebar-menu :deep(.el-sub-menu__title:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

/* 子菜单展开图标 - 移除动画 */
.sidebar-menu :deep(.el-sub-menu__icon-arrow) {
  color: var(--text-secondary) !important;
  transition: none !important; /* 移除动画 */
}

.sidebar-menu :deep(.el-sub-menu.is-opened .el-sub-menu__icon-arrow) {
  color: var(--primary-color) !important;
}

/* 子菜单列表 */
.sidebar-menu :deep(.el-menu--inline) {
  background-color: var(--bg-secondary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  padding: 4px 0 !important;
}

.sidebar-menu :deep(.el-menu--inline .el-menu-item) {
  margin: 1px 8px !important;
  width: calc(100% - 16px) !important;
  padding-left: 48px !important;
  transition: none !important; /* 移除动画 */
}

/* 子菜单项hover和active样式保持一致 */
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

/* 收起状态下的样式 */
.sidebar-menu.el-menu--collapse :deep(.el-menu-item),
.sidebar-menu.el-menu--collapse :deep(.el-sub-menu__title) {
  margin: 2px auto !important;
  width: 48px !important;
  justify-content: center !important;
}

.sidebar-menu.el-menu--collapse :deep(.el-icon) {
  margin-right: 0 !important;
}

/* 移除Element Plus默认的所有动画效果 */
.sidebar-menu :deep(*) {
  transition: none !important;
  animation: none !important;
}
</style> 