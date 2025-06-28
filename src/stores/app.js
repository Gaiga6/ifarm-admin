import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // 侧边栏状态
    sidebarCollapsed: false,
    
    // 语言设置
    language: 'zh-CN',
    
    // 主题设置
    theme: 'light', // light | dark
    primaryColor: '#A5D6A7',
    
    // 布局设置
    layoutMode: 'classic', // classic | vertical
    
    // 水印设置
    watermark: {
      enabled: false, // 默认关闭
      text: '农场认养管理系统',
      opacity: 0.15
    },
    
    // 标签栏设置
    tagsView: {
      enabled: true,
      cached: true,
      showIcon: true
    },
    
    // 面包屑设置
    breadcrumb: {
      enabled: true,
      showIcon: true
    },
    
    // 设置抽屉
    settingsDrawer: false,
    
    // 当前访问的标签页
    visitedViews: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        title: '仪表盘',
        icon: 'Odometer',
        affix: true // 固定标签，不可关闭
      }
    ],
    
    // 缓存的页面
    cachedViews: ['Dashboard']
  }),
  
  getters: {
    // 获取当前主题类名
    themeClass: (state) => {
      return state.theme === 'dark' ? 'theme-dark' : 'theme-light'
    },
    
    // 获取侧边栏宽度
    sidebarWidth: (state) => {
      return state.sidebarCollapsed ? '64px' : '240px'
    },
    
    // 获取当前语言配置
    currentLanguage: (state) => {
      const languages = {
        'zh-CN': '简体中文',
        'en-US': 'English'
      }
      return languages[state.language] || '简体中文'
    }
  },
  
  actions: {
    // 切换侧边栏
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed
    },
    
    // 设置侧边栏状态
    setSidebarCollapsed(collapsed) {
      this.sidebarCollapsed = collapsed
    },
    
    // 切换主题
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      this.applyTheme()
    },
    
    // 设置主题
    setTheme(theme) {
      this.theme = theme
      this.applyTheme()
    },
    
    // 应用主题
    applyTheme() {
      const html = document.documentElement
      html.setAttribute('data-theme', this.theme)
      
      // 更新主题色
      if (this.theme === 'dark') {
        html.style.setProperty('--bg-primary', '#1e1e1e')
        html.style.setProperty('--bg-secondary', '#252525')
        html.style.setProperty('--text-primary', '#ffffff')
        html.style.setProperty('--text-secondary', '#cccccc')
        html.style.setProperty('--border-color', '#404040')
      } else {
        html.style.setProperty('--bg-primary', '#ffffff')
        html.style.setProperty('--bg-secondary', '#f8f9fa')
        html.style.setProperty('--text-primary', '#333333')
        html.style.setProperty('--text-secondary', '#666666')
        html.style.setProperty('--border-color', '#e0e0e0')
      }
    },
    
    // 设置主题色
    setPrimaryColor(color) {
      this.primaryColor = color
      const html = document.documentElement
      html.style.setProperty('--primary-color', color)
      
      // 计算相关颜色
      const lightColor = this.lightenColor(color, 0.9)
      const midColor = this.lightenColor(color, 0.7)
      const darkColor = this.darkenColor(color, 0.1)
      
      html.style.setProperty('--primary-light', lightColor)
      html.style.setProperty('--primary-mid', midColor)
      html.style.setProperty('--primary-dark', darkColor)
    },
    
    // 颜色加亮
    lightenColor(color, amount) {
      const hex = color.replace('#', '')
      const r = parseInt(hex.substr(0, 2), 16)
      const g = parseInt(hex.substr(2, 2), 16)
      const b = parseInt(hex.substr(4, 2), 16)
      
      const newR = Math.round(r + (255 - r) * amount)
      const newG = Math.round(g + (255 - g) * amount)
      const newB = Math.round(b + (255 - b) * amount)
      
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
    },
    
    // 颜色加深
    darkenColor(color, amount) {
      const hex = color.replace('#', '')
      const r = parseInt(hex.substr(0, 2), 16)
      const g = parseInt(hex.substr(2, 2), 16)
      const b = parseInt(hex.substr(4, 2), 16)
      
      const newR = Math.round(r * (1 - amount))
      const newG = Math.round(g * (1 - amount))
      const newB = Math.round(b * (1 - amount))
      
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
    },
    
    // 设置语言
    setLanguage(lang) {
      this.language = lang
    },
    
    // 设置布局模式
    setLayoutMode(mode) {
      this.layoutMode = mode
    },
    
    // 设置水印
    setWatermark(config) {
      this.watermark = { ...this.watermark, ...config }
    },
    
    // 设置标签栏
    setTagsView(config) {
      this.tagsView = { ...this.tagsView, ...config }
    },
    
    // 设置面包屑
    setBreadcrumb(config) {
      this.breadcrumb = { ...this.breadcrumb, ...config }
    },
    
    // 打开/关闭设置抽屉
    toggleSettingsDrawer() {
      this.settingsDrawer = !this.settingsDrawer
    },
    
    // 添加访问的视图
    addVisitedView(view) {
      const existingIndex = this.visitedViews.findIndex(v => v.path === view.path)
      if (existingIndex === -1) {
        this.visitedViews.push(view)
      } else {
        // 更新现有视图
        this.visitedViews[existingIndex] = { ...this.visitedViews[existingIndex], ...view }
      }
      
      // 添加到缓存
      if (this.tagsView.cached && view.name && !this.cachedViews.includes(view.name)) {
        this.cachedViews.push(view.name)
      }
    },
    
    // 删除访问的视图
    removeVisitedView(targetPath) {
      const index = this.visitedViews.findIndex(v => v.path === targetPath)
      if (index > -1) {
        const view = this.visitedViews[index]
        this.visitedViews.splice(index, 1)
        
        // 从缓存中移除
        if (view.name) {
          const cachedIndex = this.cachedViews.indexOf(view.name)
          if (cachedIndex > -1) {
            this.cachedViews.splice(cachedIndex, 1)
          }
        }
      }
    },
    
    // 删除其他视图
    removeOtherViews(currentPath) {
      this.visitedViews = this.visitedViews.filter(v => v.affix || v.path === currentPath)
      this.cachedViews = this.cachedViews.filter(name => {
        return this.visitedViews.some(v => v.name === name)
      })
    },
    
    // 删除所有视图
    removeAllViews() {
      this.visitedViews = this.visitedViews.filter(v => v.affix)
      this.cachedViews = this.cachedViews.filter(name => {
        return this.visitedViews.some(v => v.name === name)
      })
    }
  },
  
  // 持久化存储
  persist: {
    key: 'ifarm-admin-app',
    storage: localStorage,
    paths: [
      'sidebarCollapsed',
      'language',
      'theme',
      'primaryColor',
      'layoutMode',
      'watermark',
      'tagsView',
      'breadcrumb'
    ]
  }
}) 