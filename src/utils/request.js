import axios from 'axios'
import { ElMessage } from 'element-plus'

import router from '@/router'

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 记录请求开始时间
    config.metadata = { startTime: Date.now() }
    
    // 可以在这里添加其他请求头配置
    
    // 打印详细请求信息（开发环境）
    if (import.meta.env.DEV) {
      const fullUrl = config.baseURL ? `${config.baseURL}${config.url}` : config.url
      const timestamp = new Date().toISOString()
      
      console.group(`🚀 [${timestamp}] HTTP请求发送`)
      console.log('📍 请求地址:', {
        url: config.url,
        fullUrl: fullUrl,
        method: config.method?.toUpperCase()
      })
      console.log('📋 请求头:', config.headers)
      
      if (config.params && Object.keys(config.params).length > 0) {
        console.log('🔍 查询参数:', config.params)
      }
      
      if (config.data) {
        console.log('📦 请求体:', config.data)
      }
      
      console.log('⚙️ 请求配置:', {
        timeout: config.timeout,
        baseURL: config.baseURL,
        withCredentials: config.withCredentials
      })
      console.groupEnd()
    }
    
    return config
  },
  (error) => {
    const timestamp = new Date().toISOString()
    console.group(`❌ [${timestamp}] 请求拦截器错误`)
    console.error('错误类型:', error.name)
    console.error('错误信息:', error.message)
    console.error('错误堆栈:', error.stack)
    console.error('完整错误对象:', error)
    console.groupEnd()
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const result = response.data
    
    // 计算请求耗时
    const endTime = Date.now()
    const startTime = response.config.metadata?.startTime || endTime
    const duration = endTime - startTime
    
    // 打印详细响应信息（开发环境）
    if (import.meta.env.DEV) {
      const fullUrl = response.config.baseURL ? `${response.config.baseURL}${response.config.url}` : response.config.url
      const timestamp = new Date().toISOString()
      
      console.group(`✅ [${timestamp}] HTTP响应接收 (${duration}ms)`)
      console.log('📍 响应地址:', {
        url: response.config.url,
        fullUrl: fullUrl,
        method: response.config.method?.toUpperCase()
      })
      console.log('📊 响应状态:', {
        status: response.status,
        statusText: response.statusText,
        duration: `${duration}ms`
      })
      console.log('📋 响应头:', response.headers)
      console.log('📦 响应数据:', result)
      
      // 性能提示
      if (duration > 3000) {
        console.warn('⚠️ 请求耗时较长:', `${duration}ms`)
      } else if (duration > 1000) {
        console.info('ℹ️ 请求耗时:', `${duration}ms`)
      }
      
      console.groupEnd()
    }
    
    // 判断业务状态码
    if (result.code === 200 || result.success) {
      return result.data
    } else {
      // 业务错误
      const errorMessage = result.message || '请求失败'
      const timestamp = new Date().toISOString()
      
      console.group(`⚠️ [${timestamp}] 业务逻辑错误`)
      console.error('错误码:', result.code)
      console.error('错误信息:', errorMessage)
      console.error('完整响应:', result)
      console.groupEnd()
      
      ElMessage.error(errorMessage)
      return Promise.reject(new Error(errorMessage))
    }
  },
  (error) => {
    // 计算请求耗时（如果有的话）
    const endTime = Date.now()
    const startTime = error.config?.metadata?.startTime
    const duration = startTime ? endTime - startTime : 0
    const timestamp = new Date().toISOString()
    
    console.group(`❌ [${timestamp}] HTTP请求失败${duration ? ` (${duration}ms)` : ''}`)
    console.error('错误类型:', error.name)
    console.error('错误信息:', error.message)
    
    let errorMessage = '网络异常，请稍后重试'
    
    if (error.response) {
      // 服务器响应了错误状态码
      const { status, data, headers } = error.response
      
      console.log('📍 请求地址:', {
        url: error.config?.url,
        method: error.config?.method?.toUpperCase(),
        fullUrl: error.config?.baseURL ? `${error.config.baseURL}${error.config.url}` : error.config?.url
      })
      console.error('📊 错误状态:', {
        status: status,
        statusText: error.response.statusText,
        duration: duration ? `${duration}ms` : 'unknown'
      })
      console.error('📋 响应头:', headers)
      console.error('📦 错误响应:', data)
      
      switch (status) {
        case 400:
          errorMessage = data?.message || '请求参数错误'
          break
        case 401:
          errorMessage = '未授权访问'
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
          errorMessage = `服务器错误 (${status})`
      }
    } else if (error.code === 'ECONNABORTED') {
      errorMessage = '请求超时，请稍后重试'
      console.error('⏱️ 请求超时详情:', {
        timeout: error.config?.timeout,
        url: error.config?.url,
        method: error.config?.method?.toUpperCase()
      })
    } else if (error.code === 'ERR_NETWORK') {
      errorMessage = '网络连接失败，请检查网络设置'
      console.error('🌐 网络错误详情:', {
        code: error.code,
        message: error.message,
        url: error.config?.url
      })
    } else {
      console.error('🔍 其他错误详情:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      })
    }
    
    console.error('📋 完整错误对象:', error)
    console.groupEnd()
    
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