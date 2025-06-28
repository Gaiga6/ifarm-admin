import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 自定义主题样式
import './styles/theme.css'

// 强制覆盖Element Plus的CSS变量
const setElementPlusTheme = (primaryColor = '#A5D6A7') => {
  const root = document.documentElement
  root.style.setProperty('--el-color-primary', primaryColor)
  
  // 计算相关颜色
  const lightenColor = (color, amount) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    
    const newR = Math.round(r + (255 - r) * amount)
    const newG = Math.round(g + (255 - g) * amount)
    const newB = Math.round(b + (255 - b) * amount)
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
  }
  
  const darkenColor = (color, amount) => {
    const hex = color.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    
    const newR = Math.round(r * (1 - amount))
    const newG = Math.round(g * (1 - amount))
    const newB = Math.round(b * (1 - amount))
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
  }
  
  root.style.setProperty('--el-color-primary-light-3', lightenColor(primaryColor, 0.3))
  root.style.setProperty('--el-color-primary-light-5', lightenColor(primaryColor, 0.5))
  root.style.setProperty('--el-color-primary-light-7', lightenColor(primaryColor, 0.7))
  root.style.setProperty('--el-color-primary-light-8', lightenColor(primaryColor, 0.8))
  root.style.setProperty('--el-color-primary-light-9', lightenColor(primaryColor, 0.9))
  root.style.setProperty('--el-color-primary-dark-2', darkenColor(primaryColor, 0.2))
  
  // 文字颜色
  root.style.setProperty('--el-text-color-primary', '#333333')
  root.style.setProperty('--el-text-color-regular', '#606266')
  root.style.setProperty('--el-text-color-secondary', '#909399')
  root.style.setProperty('--el-text-color-placeholder', '#C0C4CC')
  
  // 其他颜色
  root.style.setProperty('--el-color-success', '#4CAF50')
  root.style.setProperty('--el-color-warning', '#FF9800')
  root.style.setProperty('--el-color-danger', '#F44336')
  root.style.setProperty('--el-color-info', '#2196F3')
}

// 函数已在上面设置为全局

const app = createApp(App)

// 使用状态管理
app.use(pinia)

// 初始化主题（从localStorage恢复）
import { useAppStore } from './stores/app.js'
const appStore = useAppStore()

// 先设置Element Plus主题函数为全局可用
window.setElementPlusTheme = setElementPlusTheme

// 初始化主题
appStore.initializeTheme()

// 使用路由
app.use(router)

// 使用 Element Plus
app.use(ElementPlus)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局配置
app.config.globalProperties.$ELEMENT = {
  size: 'default', // set element-plus default size
  zIndex: 3000 // set element-plus default zIndex
}

app.mount('#app')
