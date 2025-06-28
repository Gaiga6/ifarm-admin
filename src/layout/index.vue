<template>
  <div class="layout-container" :class="appStore.themeClass">
    <!-- 侧边栏 -->
    <Sidebar />
    
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
import { useAppStore } from '@/stores'
import Sidebar from './components/Sidebar/index.vue'
import Header from './components/Header/index.vue'
import TagsView from './components/TagsView/index.vue'
import AppMain from './components/AppMain/index.vue'
import SettingsDrawer from './components/Settings/index.vue'
import Watermark from './components/Watermark/index.vue'

const appStore = useAppStore()

// 初始化主题
appStore.applyTheme()
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
</style> 