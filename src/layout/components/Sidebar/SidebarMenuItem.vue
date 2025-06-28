<template>
  <!-- 如果有子菜单，渲染子菜单 -->
  <el-sub-menu 
    v-if="route.children && route.children.length > 0" 
    :index="route.path"
    class="sidebar-submenu"
  >
    <template #title>
      <div class="menu-title-content">
        <div class="menu-left">
          <el-icon class="menu-icon">
            <component :is="getIcon(route.meta?.icon || 'Folder')" />
          </el-icon>
          <span class="menu-text">{{ route.meta?.title || route.name }}</span>
        </div>
        <el-icon class="menu-arrow">
          <ArrowDown />
        </el-icon>
      </div>
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
    @click="handleMenuClick(route)"
  >
    <el-icon>
      <component :is="getIcon(route.meta?.icon || 'Document')" />
    </el-icon>
    <template #title>{{ route.meta?.title || route.name }}</template>
  </el-menu-item>
</template>

<script setup>
import { useAppStore } from '@/stores'
import { getIcon } from '@/utils/icons'
import { ArrowDown } from '@element-plus/icons-vue'

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
/* 基础菜单项样式 */
:deep(.el-menu-item) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
  transition: none !important;
  height: 48px !important;
  line-height: 48px !important;
}

:deep(.el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

:deep(.el-menu-item.is-active) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* 子菜单样式 */
:deep(.el-sub-menu) {
  margin: 2px 8px !important;
  width: calc(100% - 16px) !important;
}

/* 自定义子菜单标题 */
:deep(.el-sub-menu__title) {
  color: var(--text-primary) !important;
  border-radius: 6px !important;
  transition: none !important;
  height: 48px !important;
  line-height: 48px !important;
  padding: 0 !important;
}

:deep(.el-sub-menu__title:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

/* 隐藏默认的箭头图标 */
:deep(.el-sub-menu__icon-arrow) {
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
:deep(.el-sub-menu.is-opened) .menu-arrow {
  transform: rotate(180deg);
  color: var(--primary-color);
}

/* 子菜单列表 */
:deep(.el-menu--inline) {
  background-color: var(--bg-primary) !important;
  border-radius: 6px !important;
  margin: 2px 8px !important;
  padding: 4px 0 !important;
}

:deep(.el-menu--inline .el-menu-item) {
  margin: 1px 8px !important;
  width: calc(100% - 16px) !important;
  padding-left: 48px !important;
  height: 40px !important;
  line-height: 40px !important;
}

:deep(.el-menu--inline .el-menu-item:hover) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

:deep(.el-menu--inline .el-menu-item.is-active) {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  font-weight: 500 !important;
}

/* 图标样式 */
:deep(.el-icon) {
  font-size: 16px !important;
  margin-right: 8px !important;
  color: inherit !important;
}

/* 收起状态样式 - 使用 Element Plus 的折叠类名 */
:deep(.el-menu--collapse .el-menu-item) {
  margin: 2px auto !important;
  width: 48px !important;
  height: 48px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  text-align: center !important;
}

:deep(.el-menu--collapse .el-sub-menu__title) {
  margin: 2px auto !important;
  width: 48px !important;
  height: 48px !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
}

:deep(.el-menu--collapse .el-menu-item .el-icon) {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

:deep(.el-menu--collapse) .menu-title-content {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  padding: 0 !important;
  width: 48px !important;
  height: 48px !important;
}

:deep(.el-menu--collapse) .menu-left {
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 48px !important;
  height: 48px !important;
}

:deep(.el-menu--collapse) .menu-icon {
  margin-right: 0 !important;
  margin-left: 0 !important;
}

:deep(.el-menu--collapse) .menu-text,
:deep(.el-menu--collapse) .menu-arrow {
  display: none !important;
}

/* 移除所有动画效果 */
:deep(*) {
  transition: none !important;
  animation: none !important;
}

/* 保留箭头旋转动画 */
.menu-arrow {
  transition: transform 0.3s ease !important;
}
</style> 