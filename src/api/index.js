/**
 * @creater      : pandas
 * @since        : 2025-06-28 15:42:30
 * @lastTime     : 2025-06-28 18:46:41
 * @LastAuthor   : pands
 * @Description  : 
 */
import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api' : '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 开发环境下打印请求信息
    if (process.env.NODE_ENV === 'development') {
      console.group(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`)
      console.log('📅 Time:', new Date().toLocaleString())
      console.log('🔗 URL:', config.baseURL + config.url)
      console.log('📋 Method:', config.method?.toUpperCase())
      console.log('🔑 Headers:', config.headers)
      console.log('📦 Params:', config.params)
      console.log('📄 Data:', config.data)
      console.groupEnd()
    }
    
    return config
  },
  error => {
    // 对请求错误做些什么
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ Request Error:', error)
    }
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  response => {
    // 开发环境下打印响应信息
    if (process.env.NODE_ENV === 'development') {
      console.group(`✅ API Response: ${response.config.method?.toUpperCase()} ${response.config.url}`)
      console.log('📅 Time:', new Date().toLocaleString())
      console.log('⏱️ Duration:', `${response.headers['x-response-time'] || 'N/A'}`)
      console.log('📊 Status:', response.status, response.statusText)
      console.log('📋 Headers:', response.headers)
      console.log('📄 Data:', response.data)
      console.groupEnd()
    }
    
    // 对响应数据做点什么
    const { code, data, message } = response.data
    
    if (code === 200) {
      return data
    } else {
      // 处理业务错误
      if (process.env.NODE_ENV === 'development') {
        console.error('⚠️ Business Error:', {
          code,
          message,
          url: response.config.url,
          method: response.config.method?.toUpperCase()
        })
      }
      return Promise.reject(new Error(message || '请求失败'))
    }
  },
  error => {
    // 对响应错误做点什么
    if (process.env.NODE_ENV === 'development') {
      console.group(`❌ API Error: ${error.config?.method?.toUpperCase()} ${error.config?.url}`)
      console.log('📅 Time:', new Date().toLocaleString())
      console.log('🔗 URL:', error.config?.baseURL + error.config?.url)
      console.log('📋 Method:', error.config?.method?.toUpperCase())
      console.log('📦 Params:', error.config?.params)
      console.log('📄 Request Data:', error.config?.data)
      
      if (error.response) {
        // 服务器返回了错误状态码
        const { status, statusText, data, headers } = error.response
        console.log('📊 Response Status:', status, statusText)
        console.log('📋 Response Headers:', headers)
        console.log('📄 Response Data:', data)
        
        switch (status) {
          case 400:
            console.error('🚫 Bad Request - 请求参数错误')
            break
          case 401:
            console.error('🔒 Unauthorized - 未授权，需要登录')
            break
          case 403:
            console.error('🚫 Forbidden - 禁止访问，权限不足')
            break
          case 404:
            console.error('🔍 Not Found - 请求的资源不存在')
            break
          case 405:
            console.error('🚫 Method Not Allowed - 请求方法不允许')
            break
          case 408:
            console.error('⏰ Request Timeout - 请求超时')
            break
          case 422:
            console.error('📝 Unprocessable Entity - 请求格式正确但语义错误')
            break
          case 429:
            console.error('🚦 Too Many Requests - 请求过于频繁')
            break
          case 500:
            console.error('💥 Internal Server Error - 服务器内部错误')
            break
          case 502:
            console.error('🌐 Bad Gateway - 网关错误')
            break
          case 503:
            console.error('🔧 Service Unavailable - 服务不可用')
            break
          case 504:
            console.error('⏰ Gateway Timeout - 网关超时')
            break
          default:
            console.error('❓ Unknown Error - 未知错误')
        }
      } else if (error.request) {
        // 请求已发出但没有收到响应
        console.error('🌐 Network Error - 网络错误，请检查网络连接')
        console.log('📋 Request:', error.request)
      } else {
        // 请求配置出错
        console.error('⚙️ Config Error - 请求配置错误')
        console.log('📋 Error Message:', error.message)
      }
      console.groupEnd()
    }
    
    if (error.response) {
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          // 未授权，清除token并跳转到登录页
          console.warn('🔒 用户未授权，清除token并跳转到登录页')
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          console.error('🚫 没有权限访问该资源')
          break
        case 404:
          console.error('🔍 请求的资源不存在')
          break
        case 500:
          console.error('💥 服务器内部错误')
          break
        default:
          console.error('❓ 请求失败:', data?.message || error.message)
      }
    } else {
      console.error('🌐 网络错误:', error.message)
    }
    
    return Promise.reject(error)
  }
)

// 导出所有模块API
export * from './user'
export * from './farm'
export * from './product'
export * from './adoption'
export * from './order'
export * from './planting'
export * from './logistics'
export * from './system'

export default api 