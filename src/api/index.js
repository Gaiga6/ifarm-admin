import axios from 'axios'

// 创建axios实例
const request = axios.create({
  baseURL: 'http://172.20.10.3:8080/api', // 根据API文档设置的基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 打印请求日志
    console.group(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`)
    console.log('📤 Request Config:', {
      url: config.url,
      method: config.method,
      params: config.params,
      data: config.data,
      headers: config.headers
    })
    console.log('⏰ Request Time:', new Date().toLocaleString())
    console.groupEnd()

    // 从localStorage获取token并添加到请求头
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      console.log('🔑 Added Authorization token to request')
    }

    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    const { data, status, statusText, config } = response
    
    // 打印响应日志
    console.group(`✅ API Response: ${config.method?.toUpperCase()} ${config.url}`)
    console.log('📥 Response Status:', status, statusText)
    console.log('📄 Response Data:', data)
    console.log('⏰ Response Time:', new Date().toLocaleString())
    console.log('⏱️ Duration:', Date.now() - config.startTime + 'ms')
    console.groupEnd()

    // 根据业务状态码处理响应
    // 支持多种成功状态码：0 或 200
    if (data.code === 0 || data.code === 200) {
      console.log('✨ Request Success:', data.message || 'Success')
      return data
    } else {
      console.warn('⚠️ Business Error:', data.message || 'Unknown error')
      // 可以在这里添加全局错误提示
      return Promise.reject(new Error(data.message || '请求失败'))
    }
  },
  (error) => {
    const { response, config } = error
    
    console.group(`❌ API Error: ${config?.method?.toUpperCase()} ${config?.url}`)
    console.error('💥 Error Details:', error)
    
    if (response) {
      console.error('📥 Error Response:', {
        status: response.status,
        statusText: response.statusText,
        data: response.data
      })
      
      // 根据HTTP状态码处理不同错误
      switch (response.status) {
        case 400:
          console.error('❌ 400: Bad Request - 请求参数错误')
          break
        case 401:
          console.error('❌ 401: Unauthorized - 未授权，请重新登录')
          // 可以在这里清除token并跳转到登录页
          localStorage.removeItem('token')
          break
        case 403:
          console.error('❌ 403: Forbidden - 无权限访问')
          break
        case 404:
          console.error('❌ 404: Not Found - 请求的资源不存在')
          break
        case 500:
          console.error('❌ 500: Internal Server Error - 服务器内部错误')
          break
        default:
          console.error(`❌ ${response.status}: ${response.statusText}`)
      }
    } else if (error.request) {
      console.error('📡 Network Error - 网络请求失败')
    } else {
      console.error('⚙️ Request Setup Error:', error.message)
    }
    
    console.log('⏰ Error Time:', new Date().toLocaleString())
    console.groupEnd()
    
    return Promise.reject(error)
  }
)

// 添加请求开始时间戳
request.interceptors.request.use(
  (config) => {
    config.startTime = Date.now()
    return config
  }
)

/**
 * 封装GET请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @param {object} config 请求配置
 * @returns {Promise} 请求结果
 */
export const get = (url, params = {}, config = {}) => {
  console.log(`📋 Preparing GET request to: ${url}`, params)
  return request({
    method: 'GET',
    url,
    params,
    ...config
  })
}

/**
 * 封装POST请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} config 请求配置
 * @returns {Promise} 请求结果
 */
export const post = (url, data = {}, config = {}) => {
  console.log(`📋 Preparing POST request to: ${url}`, data)
  return request({
    method: 'POST',
    url,
    data,
    ...config
  })
}

/**
 * 封装PUT请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} config 请求配置
 * @returns {Promise} 请求结果
 */
export const put = (url, data = {}, config = {}) => {
  console.log(`📋 Preparing PUT request to: ${url}`, data)
  return request({
    method: 'PUT',
    url,
    data,
    ...config
  })
}

/**
 * 封装DELETE请求
 * @param {string} url 请求地址
 * @param {object} config 请求配置
 * @returns {Promise} 请求结果
 */
export const del = (url, config = {}) => {
  console.log(`📋 Preparing DELETE request to: ${url}`)
  return request({
    method: 'DELETE',
    url,
    ...config
  })
}

/**
 * 封装PATCH请求
 * @param {string} url 请求地址
 * @param {object} data 请求数据
 * @param {object} config 请求配置
 * @returns {Promise} 请求结果
 */
export const patch = (url, data = {}, config = {}) => {
  console.log(`📋 Preparing PATCH request to: ${url}`, data)
  return request({
    method: 'PATCH',
    url,
    data,
    ...config
  })
}

// 导入用户管理模块
import userModule from './user/index.js'

/**
 * 统一导出所有API模块
 * 使用方式：
 * import api from '@/api'
 * 
 * // 用户相关
 * api.user.user.getUserDetail(1)
 * api.user.user.createUser(userData)
 * 
 * // 地址相关
 * api.user.address.getUserAddressList(1)
 * api.user.address.createAddress(1, addressData)
 * 
 * // 角色相关
 * api.user.role.getAllRoles()
 * api.user.role.createRole(roleData)
 * 
 * // 权限相关
 * api.user.permission.getPermissionTree()
 * api.user.permission.getUserMenuTree(1)
 * 
 * 或者更简洁的使用方式：
 * import { userModule } from '@/api'
 * 
 * // 用户相关
 * userModule.user.getUserDetail(1)
 * userModule.user.createUser(userData)
 * 
 * // 地址相关
 * userModule.address.getUserAddressList(1)
 * userModule.address.createAddress(1, addressData)
 * 
 * // 角色相关
 * userModule.role.getAllRoles()
 * userModule.role.createRole(roleData)
 * 
 * // 权限相关
 * userModule.permission.getPermissionTree()
 * userModule.permission.getUserMenuTree(1)
 */
const api = {
  user: userModule
}

// 默认导出API对象
export default api

// 单独导出用户管理模块和request实例
export { userModule, request } 