<template>
  <!-- 如果有子菜单，渲染子菜单 -->
  <el-sub-menu
    v-if="route.children && route.children.length > 0"
    :index="route.path"
    class="sidebar-submenu"
  >
    <template #title>
      <el-icon class="menu-icon">
        <component :is="getIcon(route.meta?.icon || 'Folder')" />
      </el-icon>
      <span class="menu-text">{{ route.meta?.title || route.name }}</span>
    </template>

    <!-- 递归渲染子菜单 -->
    <template v-for="child in route.children" :key="child.path">
      <sidebar-menu-item :route="child" />
    </template>
  </el-sub-menu>

  <!-- 如果没有子菜单，渲染普通菜单项 -->
  <el-menu-item
    v-else
    :index="route.path"
    class="sidebar-menu-item"
    @click="handleMenuClick(route)"
  >
    <el-icon class="menu-icon">
      <component :is="getIcon(route.meta?.icon || 'Document')" />
    </el-icon>
    <template #title>
      <span class="menu-text">{{ route.meta?.title || route.name }}</span>
    </template>
  </el-menu-item>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { getIcon } from '@/utils/icons'

// 定义组件名称以支持递归
defineOptions({
  name: 'SidebarMenuItem'
})

// 定义 props
defineProps({
  route: {
    type: Object,
    required: true
  }
})

const appStore = useAppStore()

// 处理菜单点击
const handleMenuClick = (route) => {
  appStore.addVisitedView({
    path: route.path,
    name: route.name,
    title: route.meta?.title || route.name,
    icon: route.meta?.icon || 'Document'
  })
}
</script>

<style scoped>
/* 基础图标和文字样式 - 仅在展开状态生效 */
.menu-icon {
  font-size: 18px !important;
  margin-right: 8px !important;
  color: inherit !important;
  width: 18px !important;
  height: 18px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.menu-text {
  font-size: 14px !important;
  color: inherit !important;
  white-space: nowrap !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
}

/* 展开状态下的子菜单列表样式 */
.sidebar-submenu :deep(.el-menu--inline) {
  background-color: var(--bg-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  padding: 4px 0 !important;
}

.sidebar-submenu :deep(.el-menu--inline .el-menu-item) {
  margin: 1px 8px !important;
  width: calc(100% - 16px) !important;
  padding-left: 48px !important;
  height: 40px !important;
  line-height: 40px !important;
}

.sidebar-submenu :deep(.el-menu--inline .el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.sidebar-submenu :deep(.el-menu--inline .el-menu-item.is-active) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}
</style> 