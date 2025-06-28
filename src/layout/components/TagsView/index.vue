<template>
  <div class="tags-view-container">
    <el-scrollbar class="tags-view-wrapper">
      <div class="tags-view-list" ref="tagsRef">
        <router-link
          v-for="tag in appStore.visitedViews"
          :key="tag.path"
          :to="{ path: tag.path }"
          class="tags-view-item"
          :class="{ active: isActive(tag) }"
          @contextmenu.prevent="openContextMenu(tag, $event)"
        >
          <el-icon v-if="appStore.tagsView.showIcon && tag.icon" class="tag-icon">
            <component :is="getIcon(tag.icon)" />
          </el-icon>
          <span class="tag-title">{{ tag.title }}</span>
          <el-icon
            v-if="!tag.affix"
            class="tag-close"
            @click.prevent.stop="closeTag(tag)"
          >
            <Close />
          </el-icon>
        </router-link>
      </div>
    </el-scrollbar>
    
    <!-- 右键菜单 -->
    <el-dropdown
      ref="contextMenuRef"
      :virtual-ref="triggerRef"
      trigger="contextmenu"
      @command="handleContextMenuCommand"
    >
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="refresh">
            <el-icon><Refresh /></el-icon>
            刷新页面
          </el-dropdown-item>
          <el-dropdown-item command="close" :disabled="selectedTag?.affix">
            <el-icon><Close /></el-icon>
            关闭标签
          </el-dropdown-item>
          <el-dropdown-item command="closeOthers">
            <el-icon><CircleClose /></el-icon>
            关闭其他
          </el-dropdown-item>
          <el-dropdown-item command="closeAll">
            <el-icon><CircleClose /></el-icon>
            关闭全部
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAppStore } from '@/stores'
import { getIcon } from '@/utils/icons'
import { Close, Refresh, CircleClose } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const tagsRef = ref()
const contextMenuRef = ref()
const triggerRef = ref()
const selectedTag = ref(null)

// 判断标签是否激活
const isActive = (tag) => {
  return tag.path === route.path
}

// 关闭标签
const closeTag = (tag) => {
  appStore.removeVisitedView(tag.path)
  
  // 如果关闭的是当前页面，跳转到最后一个标签
  if (isActive(tag)) {
    const visitedViews = appStore.visitedViews
    const lastView = visitedViews[visitedViews.length - 1]
    if (lastView) {
      router.push(lastView.path)
    }
  }
}

// 打开右键菜单
const openContextMenu = (tag, e) => {
  selectedTag.value = tag
  triggerRef.value = {
    getBoundingClientRect: () => ({
      x: e.clientX,
      y: e.clientY,
      width: 0,
      height: 0,
      top: e.clientY,
      left: e.clientX,
      right: e.clientX,
      bottom: e.clientY
    })
  }
  
  nextTick(() => {
    contextMenuRef.value?.handleOpen()
  })
}

// 处理右键菜单命令
const handleContextMenuCommand = (command) => {
  switch (command) {
    case 'refresh':
      window.location.reload()
      break
    case 'close':
      if (selectedTag.value && !selectedTag.value.affix) {
        closeTag(selectedTag.value)
      }
      break
    case 'closeOthers':
      appStore.removeOtherViews(selectedTag.value?.path || route.path)
      break
    case 'closeAll':
      appStore.removeAllViews()
      const visitedViews = appStore.visitedViews
      if (visitedViews.length > 0) {
        router.push(visitedViews[0].path)
      }
      break
  }
}

// 监听路由变化，自动添加标签
router.afterEach((to) => {
  if (to.meta?.title) {
    appStore.addVisitedView({
      path: to.path,
      name: to.name,
      title: to.meta.title,
      icon: to.meta.icon
    })
  }
})
</script>

<style scoped>
.tags-view-container {
  height: 46px;
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  padding: 8px 16px;
  display: flex;
  align-items: center;
}

.tags-view-wrapper {
  flex: 1;
  height: 100%;
}

.tags-view-list {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 8px;
  white-space: nowrap;
}

.tags-view-item {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 12px;
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-light);
  border-radius: 6px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  transition: all 0.3s ease;
  cursor: pointer;
  white-space: nowrap;
  min-width: fit-content;
}

.tags-view-item:hover {
  background-color: var(--primary-light);
  color: var(--primary-dark);
  border-color: var(--primary-color);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(165, 214, 167, 0.3);
}

.tags-view-item.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
  box-shadow: 0 2px 8px rgba(165, 214, 167, 0.4);
}

.tag-icon {
  font-size: 12px;
  flex-shrink: 0;
}

.tag-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

.tag-close {
  font-size: 12px;
  margin-left: 4px;
  opacity: 0.7;
  transition: all 0.3s ease;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.tag-close:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.3);
  transform: scale(1.2);
}

.tags-view-item:not(.active) .tag-close:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

/* 隐藏滚动条但保持滚动功能 */
.tags-view-wrapper :deep(.el-scrollbar__bar) {
  display: none;
}

.tags-view-wrapper :deep(.el-scrollbar__view) {
  height: 100%;
}
</style> 