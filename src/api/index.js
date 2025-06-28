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
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const { code, data, message } = response.data
    
    if (code === 200) {
      return data
    } else {
      // 处理业务错误
      console.error('API Error:', message)
      return Promise.reject(new Error(message || '请求失败'))
    }
  },
  error => {
    // 对响应错误做点什么
    if (error.response) {
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          // 未授权，清除token并跳转到登录页
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          console.error('没有权限访问')
          break
        case 404:
          console.error('请求的资源不存在')
          break
        case 500:
          console.error('服务器内部错误')
          break
        default:
          console.error('请求失败:', data?.message || error.message)
      }
    } else {
      console.error('网络错误:', error.message)
    }
    
    return Promise.reject(error)
  }
)

export default api 