/**
 * @creater      : pandas
 * @since        : 2025-06-28 18:47:41
 * @lastTime     : 2025-06-28 18:49:32
 * @LastAuthor   : pands
 * @Description  : 系统管理相关API接口
 */
import api from './index'

// ==================== 系统配置管理 ====================

/**
 * 查询系统配置列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {string} params.configKey - 配置键，可选
 * @returns {Promise}
 */
export function getSystemConfigList(params) {
  return api.get('/system/configs', { params })
}

/**
 * 查询系统配置详情
 * @param {number} id - 配置ID
 * @returns {Promise}
 */
export function getSystemConfigDetail(id) {
  return api.get(`/system/configs/${id}`)
}

/**
 * 创建系统配置
 * @param {Object} data - 配置数据
 * @param {string} data.configKey - 配置键
 * @param {string} data.configValue - 配置值
 * @param {string} data.description - 配置描述
 * @returns {Promise}
 */
export function createSystemConfig(data) {
  return api.post('/system/configs', data)
}

/**
 * 更新系统配置
 * @param {number} id - 配置ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateSystemConfig(id, data) {
  return api.put(`/system/configs/${id}`, data)
}

/**
 * 删除系统配置
 * @param {number} id - 配置ID
 * @returns {Promise}
 */
export function deleteSystemConfig(id) {
  return api.delete(`/system/configs/${id}`)
}

/**
 * 根据键获取配置值
 * @param {string} configKey - 配置键
 * @returns {Promise}
 */
export function getSystemConfigByKey(configKey) {
  return api.get(`/system/configs/key/${configKey}`)
}

// ==================== 操作日志管理 ====================

/**
 * 分页查询操作日志
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {string} params.username - 用户名，可选
 * @param {string} params.operation - 操作类型，可选
 * @param {string} params.startTime - 开始时间，可选
 * @param {string} params.endTime - 结束时间，可选
 * @returns {Promise}
 */
export function getOperationLogList(params) {
  return api.get('/system/operation-logs', { params })
}

/**
 * 查询操作日志详情
 * @param {number} id - 日志ID
 * @returns {Promise}
 */
export function getOperationLogDetail(id) {
  return api.get(`/system/operation-logs/${id}`)
}

/**
 * 删除操作日志
 * @param {number} id - 日志ID
 * @returns {Promise}
 */
export function deleteOperationLog(id) {
  return api.delete(`/system/operation-logs/${id}`)
}

/**
 * 批量删除操作日志
 * @param {Array<number>} ids - 日志ID数组
 * @returns {Promise}
 */
export function batchDeleteOperationLogs(ids) {
  return api.delete('/system/operation-logs/batch', { data: { ids } })
}

// ==================== 消息通知管理 ====================

/**
 * 分页查询通知列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.userId - 用户ID，可选
 * @param {string} params.type - 通知类型，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getNotificationList(params) {
  return api.get('/system/notifications', { params })
}

/**
 * 查询通知详情
 * @param {number} id - 通知ID
 * @returns {Promise}
 */
export function getNotificationDetail(id) {
  return api.get(`/system/notifications/${id}`)
}

/**
 * 创建通知
 * @param {Object} data - 通知数据
 * @param {number} data.userId - 用户ID
 * @param {string} data.title - 通知标题
 * @param {string} data.content - 通知内容
 * @param {string} data.type - 通知类型
 * @returns {Promise}
 */
export function createNotification(data) {
  return api.post('/system/notifications', data)
}

/**
 * 更新通知
 * @param {number} id - 通知ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateNotification(id, data) {
  return api.put(`/system/notifications/${id}`, data)
}

/**
 * 删除通知
 * @param {number} id - 通知ID
 * @returns {Promise}
 */
export function deleteNotification(id) {
  return api.delete(`/system/notifications/${id}`)
}

/**
 * 标记通知为已读
 * @param {number} id - 通知ID
 * @returns {Promise}
 */
export function markNotificationAsRead(id) {
  return api.put(`/system/notifications/${id}/read`)
}

/**
 * 批量标记通知为已读
 * @param {Array<number>} ids - 通知ID数组
 * @returns {Promise}
 */
export function batchMarkNotificationsAsRead(ids) {
  return api.put('/system/notifications/batch-read', { ids })
}

