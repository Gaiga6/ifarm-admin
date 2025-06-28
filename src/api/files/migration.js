import { get, post } from '@/utils/request'

/**
 * 文件迁移管理 API
 */

/**
 * 开始数据迁移
 * @param {string} sourcePath 源路径（可选）
 * @param {string} module 模块名称（可选）
 * @returns {Promise} 迁移结果
 */
export const startMigration = (sourcePath = null, module = null) => {
  console.log('开始数据迁移:', { sourcePath, module })
  const params = {}
  if (sourcePath) params.sourcePath = sourcePath
  if (module) params.module = module
  
  return post('/migration/migrate', null, { params })
}

/**
 * 验证迁移结果
 * @param {string} sourcePath 源路径（可选）
 * @returns {Promise} 验证结果
 */
export const validateMigration = (sourcePath = null) => {
  console.log('验证迁移结果:', sourcePath)
  const params = {}
  if (sourcePath) params.sourcePath = sourcePath
  
  return post('/migration/validate', null, { params })
}

/**
 * 切换存储类型
 * @param {string} type 存储类型
 * @returns {Promise} 切换结果
 */
export const switchStorageType = (type) => {
  console.log('切换存储类型:', type)
  return post('/migration/switch-storage', null, { params: { type } })
}

/**
 * 清理本地文件
 * @param {string} sourcePath 源路径（可选）
 * @param {boolean} dryRun 是否试运行（可选）
 * @returns {Promise} 清理结果
 */
export const cleanupLocalFiles = (sourcePath = null, dryRun = false) => {
  console.log('清理本地文件:', { sourcePath, dryRun })
  const params = {}
  if (sourcePath) params.sourcePath = sourcePath
  if (dryRun) params.dryRun = dryRun
  
  return post('/migration/cleanup', null, { params })
}

/**
 * 获取目录统计信息
 * @param {string} path 目录路径（可选）
 * @returns {Promise} 统计信息
 */
export const getDirectoryStats = (path = null) => {
  console.log('获取目录统计信息:', path)
  const params = {}
  if (path) params.path = path
  
  return get('/migration/stats', params)
}

/**
 * 获取迁移指南
 * @returns {Promise} 迁移指南
 */
export const getMigrationGuide = () => {
  console.log('获取迁移指南')
  return get('/migration/guide')
}

/**
 * 获取当前存储配置
 * @returns {Promise} 存储配置
 */
export const getStorageConfig = () => {
  console.log('获取当前存储配置')
  return get('/migration/config')
} 