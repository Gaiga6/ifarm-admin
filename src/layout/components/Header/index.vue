<template>
  <el-header class="header">
    <div class="header-left">
      <!-- 折叠按钮 -->
      <el-button
        type="text"
        @click="appStore.toggleSidebar"
        class="collapse-btn"
      >
        <el-icon size="20">
          <Expand v-if="appStore.sidebarCollapsed" />
          <Fold v-else />
        </el-icon>
      </el-button>
      
      <!-- 面包屑导航 -->
      <Breadcrumb v-if="appStore.breadcrumb.enabled" class="breadcrumb-nav" />
    </div>
    
    <!-- 搜索框 -->
    <div class="header-center">
      <div class="search-container">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索功能、页面、数据..."
          class="search-input"
          @keyup.enter="handleSearch"
          @input="handleSearchInput"
          clearable
        >
          <template #prefix>
            <el-icon class="search-icon">
              <Search />
            </el-icon>
          </template>
          <template #suffix>
            <div class="search-shortcut">
              <span class="shortcut-key">Ctrl</span>
              <span class="shortcut-key">K</span>
            </div>
          </template>
        </el-input>
        
        <!-- 搜索建议下拉框 -->
        <div v-if="showSuggestions && searchSuggestions.length > 0" class="search-suggestions">
          <div class="suggestions-header">
            <span class="suggestions-title">搜索建议</span>
          </div>
          <div
            v-for="(suggestion, index) in searchSuggestions"
            :key="index"
            class="suggestion-item"
            @click="handleSuggestionClick(suggestion)"
          >
            <el-icon class="suggestion-icon">
              <component :is="suggestion.icon" />
            </el-icon>
            <div class="suggestion-content">
              <div class="suggestion-title">{{ suggestion.title }}</div>
              <div class="suggestion-desc">{{ suggestion.description }}</div>
            </div>
            <div class="suggestion-type">{{ suggestion.type }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="header-right">
      <!-- 全屏按钮 -->
      <div class="header-icon-wrapper">
        <el-button type="text" class="header-btn" @click="toggleFullscreen">
          <el-icon size="18">
            <FullScreen v-if="!isFullscreen" />
            <Fold v-else />
          </el-icon>
        </el-button>
      </div>
      <!-- 语言切换 -->
      <div class="header-icon-wrapper">
        <el-dropdown @command="handleLanguageChange" class="header-dropdown">
          <el-button type="text" class="header-btn">
            <el-icon size="18">
              <Guide />
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="zh-CN">简体中文</el-dropdown-item>
              <el-dropdown-item command="en-US">English</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      
      <!-- 主题切换 -->
      <div class="header-icon-wrapper">
        <el-button
          type="text"
          @click="appStore.toggleTheme"
          class="header-btn"
        >
          <el-icon size="18">
            <Sunny v-if="appStore.theme === 'light'" />
            <Moon v-else />
          </el-icon>
        </el-button>
      </div>
      
      <!-- 设置按钮 -->
      <div class="header-icon-wrapper">
        <el-button
          type="text"
          @click="appStore.toggleSettingsDrawer"
          class="header-btn"
        >
          <el-icon size="18">
            <Setting />
          </el-icon>
        </el-button>
      </div>
      
      <!-- 用户信息 -->
      <UserInfo />
    </div>
  </el-header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores'
import { 
  Expand, 
  Fold, 
  Guide, 
  Sunny, 
  Moon, 
  Setting, 
  Search,
  Document,
  House,
  User,
  Grid,
  List,
  Present,
  ShoppingBag,
  FullScreen,
  Plus,
  Download,
  Avatar,
  Key
} from '@element-plus/icons-vue'
import Breadcrumb from './Breadcrumb.vue'
import UserInfo from './UserInfo.vue'
import searchData from '@/config/searchData'
import routerConfig from '@/router/index.js'

const router = useRouter()
const appStore = useAppStore()

// 自动从路由meta生成页面建议
function getRouteSuggestions() {
  const suggestions = []
  const routes = routerConfig.options?.routes || routerConfig.options || []
  function walk(route, parentPath = '') {
    const basePath = route.path.startsWith('/') ? route.path : (parentPath ? parentPath + '/' + route.path : route.path)
    if (route.meta && route.meta.title && !route.meta.hidden) {
      suggestions.push({
        title: route.meta.title,
        description: route.meta.description || '',
        type: '页面',
        icon: route.meta.icon || 'Document',
        path: basePath
      })
    }
    if (route.children && route.children.length > 0) {
      route.children.forEach(child => walk(child, basePath))
    }
  }
  routes.forEach(r => walk(r))
  return suggestions
}

// 合并静态功能建议和页面建议
const allSuggestions = computed(() => [
  ...getRouteSuggestions(),
  ...searchData
])

// 搜索建议
const searchKeyword = ref('')
const showSuggestions = ref(false)
const searchSuggestions = computed(() => {
  if (!searchKeyword.value.trim()) return []
  return allSuggestions.value.filter(item =>
    item.title.toLowerCase().includes(searchKeyword.value.toLowerCase()) ||
    item.description.toLowerCase().includes(searchKeyword.value.toLowerCase())
  ).slice(0, 8)
})

// 处理搜索输入
const handleSearchInput = () => {
  showSuggestions.value = searchKeyword.value.trim().length > 0
}

// 处理搜索
const handleSearch = () => {
  if (!searchKeyword.value.trim()) return
  if (searchSuggestions.value.length > 0) {
    const firstSuggestion = searchSuggestions.value[0]
    router.push(firstSuggestion.path)
  }
  showSuggestions.value = false
}

// 处理建议点击
const handleSuggestionClick = (suggestion) => {
  router.push(suggestion.path)
  searchKeyword.value = ''
  showSuggestions.value = false
}

// 处理语言切换
const handleLanguageChange = (language) => {
  appStore.setLanguage(language)
  console.log('语言切换到:', language)
}

// 键盘快捷键监听
const handleKeydown = (event) => {
  // Ctrl + K 打开搜索
  if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
    event.preventDefault()
    const searchInput = document.querySelector('.search-input input')
    if (searchInput) {
      searchInput.focus()
    }
  }
  
  // ESC 关闭搜索建议
  if (event.key === 'Escape') {
    showSuggestions.value = false
  }
}

// 点击外部关闭建议
const handleClickOutside = (event) => {
  const searchContainer = document.querySelector('.search-container')
  if (searchContainer && !searchContainer.contains(event.target)) {
    showSuggestions.value = false
  }
}

// 全屏相关
const isFullscreen = ref(false)

const checkFullscreen = () => {
  isFullscreen.value = !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullscreenElement
  )
}

const toggleFullscreen = () => {
  if (!isFullscreen.value) {
    const el = document.documentElement
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen()
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen()
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen()
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleClickOutside)
  document.addEventListener('fullscreenchange', checkFullscreen)
  document.addEventListener('webkitfullscreenchange', checkFullscreen)
  document.addEventListener('mozfullscreenchange', checkFullscreen)
  document.addEventListener('MSFullscreenChange', checkFullscreen)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleClickOutside)
  document.removeEventListener('fullscreenchange', checkFullscreen)
  document.removeEventListener('webkitfullscreenchange', checkFullscreen)
  document.removeEventListener('mozfullscreenchange', checkFullscreen)
  document.removeEventListener('MSFullscreenChange', checkFullscreen)
})
</script>

<style scoped>
.header {
  background-color: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 60px;
  position: relative;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  min-width: 0;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 600px;
  margin: 0 40px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
}

/* ==================== 搜索框样式（极简风格） ==================== */
.search-container {
  position: relative;
  width: 100%;
  max-width: 420px;
}

.search-input {
  width: 100%;
}

.search-input :deep(.el-input__wrapper) {
  background: rgba(245, 247, 250, 0.95);
  border: 1px solid #e5e6eb;
  border-radius: 22px;
  padding: 4px 18px;
  transition: box-shadow 0.2s, border-color 0.2s;
  box-shadow: 0 2px 8px 0 rgba(60, 60, 60, 0.04);
  min-height: 40px;
}

.search-input :deep(.el-input__wrapper:hover),
.search-input :deep(.el-input__wrapper.is-focus) {
  border-color: #b7eb8f;
  box-shadow: 0 4px 16px 0 rgba(165, 214, 167, 0.08);
  background: #fff;
}

.search-input :deep(.el-input__inner) {
  background: transparent;
  border: none;
  color: #222;
  font-size: 15px;
  height: 32px;
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.search-input :deep(.el-input__inner::placeholder) {
  color: #bfbfbf;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.search-icon {
  color: #bfbfbf;
  font-size: 18px;
  margin-right: 2px;
}

.search-shortcut {
  display: flex;
  align-items: center;
  gap: 2px;
}

.shortcut-key {
  background: #f5f7fa;
  border: 1px solid #e5e6eb;
  border-radius: 6px;
  padding: 1px 6px 0 6px;
  font-size: 12px;
  color: #bfbfbf;
  line-height: 1.5;
  min-width: 18px;
  text-align: center;
  font-family: 'JetBrains Mono', 'Menlo', 'Consolas', monospace;
  box-shadow: 0 1px 2px 0 rgba(60,60,60,0.03);
}

/* ==================== 搜索建议样式（极简风格） ==================== */
.search-suggestions {
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #e5e6eb;
  border-radius: 18px;
  margin-top: 4px;
  box-shadow: 0 8px 32px 0 rgba(60,60,60,0.08);
  z-index: 1000;
  overflow: hidden;
  min-width: 220px;
}

.suggestions-header {
  padding: 10px 18px 6px;
  border-bottom: 1px solid #f0f0f0;
  background: transparent;
}

.suggestions-title {
  font-size: 12px;
  color: #bfbfbf;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.suggestion-item {
  display: flex;
  align-items: center;
  padding: 10px 18px;
  cursor: pointer;
  transition: background 0.15s;
  gap: 10px;
  border-bottom: 1px solid #f5f5f5;
}

.suggestion-item:last-child {
  border-bottom: none;
}

.suggestion-item:hover {
  background: #f5f7fa;
}

.suggestion-icon {
  color: #b7eb8f;
  font-size: 17px;
  flex-shrink: 0;
}

.suggestion-content {
  flex: 1;
  min-width: 0;
}

.suggestion-title {
  font-size: 14px;
  color: #222;
  font-weight: 500;
  margin-bottom: 1px;
}

.suggestion-desc {
  font-size: 12px;
  color: #bfbfbf;
  line-height: 1.4;
}

.suggestion-type {
  font-size: 12px;
  color: #bfbfbf;
  background: #f5f7fa;
  padding: 1px 8px;
  border-radius: 6px;
  flex-shrink: 0;
  font-weight: 400;
}

/* ==================== 原有样式 ==================== */
.header-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
}

.breadcrumb-nav {
  overflow: hidden;
  white-space: nowrap;
}

.collapse-btn {
  padding: 8px !important;
  border: none !important;
  background: none !important;
  color: var(--text-secondary) !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
  flex-shrink: 0;
}

.collapse-btn:hover {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.header-btn {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 40px !important;
  height: 40px !important;
  padding: 0 !important;
  border-radius: 8px !important;
  color: var(--text-secondary) !important;
  transition: all 0.3s ease !important;
  border: none !important;
  background: none !important;
}

.header-btn:hover {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.header-dropdown .el-button:hover {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
}

.header-btn:focus,
.header-btn:active {
  background-color: var(--primary-light) !important;
  color: var(--primary-dark) !important;
  border: none !important;
  outline: none !important;
}

/* ==================== 响应式设计 ==================== */
@media (max-width: 1200px) {
  .header-center {
    max-width: 320px;
    margin: 0 10px;
  }
  .search-container {
    max-width: 320px;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 8px;
  }
  .header-center {
    display: none;
  }
}
@media (max-width: 480px) {
  .header-left {
    flex: 1;
  }
  .breadcrumb-nav {
    display: none;
  }
}
</style> 