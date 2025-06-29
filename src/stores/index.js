import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(createPersistedState())

export default pinia

// 导出所有store
export { useAppStore } from './app.js'
export { useFarmStore } from './farm.js'