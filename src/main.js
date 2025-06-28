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

const app = createApp(App)

// 使用状态管理
app.use(pinia)

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
