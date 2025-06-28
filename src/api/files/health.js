import { get } from '@/utils/request'

/**
 * 健康检查 API
 */

/**
 * 健康检查
 * @returns {Promise} 健康状态
 */
export const health = () => {
  console.log('健康检查')
  return get('/health')
}

/**
 * 系统信息
 * @returns {Promise} 系统信息
 */
export const systemInfo = () => {
  console.log('获取系统信息')
  return get('/health/info')
} 