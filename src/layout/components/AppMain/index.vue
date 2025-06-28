<template>
  <el-main class="app-main">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="appStore.cachedViews">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>

<script setup>
import { useAppStore } from '@/stores'

const appStore = useAppStore()
</script>

<style scoped>
.app-main {
  background-color: var(--bg-secondary);
  padding: 0;
  overflow-y: auto;
  flex: 1;
}

/* 页面切换动画 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s ease;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* 滚动条样式 */
.app-main::-webkit-scrollbar {
  width: 6px;
}

.app-main::-webkit-scrollbar-track {
  background: var(--border-light);
}

.app-main::-webkit-scrollbar-thumb {
  background: var(--primary-mid);
  border-radius: 3px;
}

.app-main::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}
</style> 