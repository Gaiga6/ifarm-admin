import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    // 打印请求信息（开发环境）
    if (import.meta.env.DEV) {
      console.log('🚀 请求发送:', {
        url: config.url,
        method: config.method,
        params: config.params,
        data: config.data
      })
    }
    
    return config
  },
  (error) => {
    console.error('请求拦截器错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const result = response.data
    
    // 打印响应信息（开发环境）
    if (import.meta.env.DEV) {
      console.log('✅ 响应接收:', {
        url: response.config.url,
        data: result
      })
    }
    
    // 判断业务状态码
    if (result.code === 0 || result.success) {
      return result.data
    } else {
      // 业务错误
      const errorMessage = result.message || '请求失败'
      console.error('业务错误:', errorMessage)
      ElMessage.error(errorMessage)
      return Promise.reject(new Error(errorMessage))
    }
  },
  (error) => {
    console.error('响应拦截器错误:', error)
    
    let errorMessage = '网络异常，请稍后重试'
    
    if (error.response) {
      // 服务器响应了错误状态码
      const { status, data } = error.response
      
      switch (status) {
        case 400:
          errorMessage = data?.message || '请求参数错误'
          break
        case 401:
          errorMessage = '登录已过期，请重新登录'
          // 清除token并跳转到登录页
          localStorage.removeItem('token')
          window.location.href = '/login'
          break
        case 403:
          errorMessage = '无权限访问此资源'
          break
        case 404:
          errorMessage = '请求的资源不存在'
          break
        case 500:
          errorMessage = '服务器内部错误'
          break
        default:
          errorMessage = data?.message || `请求失败 (${status})`
      }
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = '请求超时，请稍后重试'
    }
    
    ElMessage.error(errorMessage)
    return Promise.reject(error)
  }
)

/**
 * GET 请求
 * @param {string} url 请求地址
 * @param {Object} params 请求参数
 * @param {Object} config 请求配置
 * @returns {Promise} 响应结果
 */
export const get = (url, params = {}, config = {}) => {
  return request.get(url, { params, ...config })
}

/**
 * POST 请求
 * @param {string} url 请求地址
 * @param {Object} data 请求数据
 * @param {Object} config 请求配置
 * @returns {Promise} 响应结果
 */
export const post = (url, data = {}, config = {}) => {
  return request.post(url, data, config)
}

/**
 * PUT 请求
 * @param {string} url 请求地址
 * @param {Object} data 请求数据
 * @param {Object} config 请求配置
 * @returns {Promise} 响应结果
 */
export const put = (url, data = {}, config = {}) => {
  return request.put(url, data, config)
}

/**
 * DELETE 请求
 * @param {string} url 请求地址
 * @param {Object} config 请求配置
 * @returns {Promise} 响应结果
 */
export const del = (url, config = {}) => {
  return request.delete(url, config)
}

/**
 * 文件上传请求
 * @param {string} url 请求地址
 * @param {FormData} formData 表单数据
 * @param {Object} config 请求配置
 * @returns {Promise} 响应结果
 */
export const upload = (url, formData, config = {}) => {
  return request.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    timeout: 60000, // 上传文件超时时间设置为60秒
    ...config
  })
}

// 默认导出request实例
export default request 