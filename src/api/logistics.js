/**
 * @Description  : 物流相关API接口
 */
import api from './index'

/**
 * 分页查询收获记录列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.adoptionId - 认养记录ID，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getHarvestRecordList(params) {
  return api.get('/logistics/harvest-records', { params })
}

/**
 * 查询收获记录详情
 * @param {number} id - 收获记录ID
 * @returns {Promise}
 */
export function getHarvestRecordDetail(id) {
  return api.get(`/logistics/harvest-records/${id}`)
}

/**
 * 创建收获记录
 * @param {Object} data - 收获记录数据
 * @returns {Promise}
 */
export function createHarvestRecord(data) {
  return api.post('/logistics/harvest-records', data)
}

/**
 * 更新收获记录状态
 * @param {number} id - 收获记录ID
 * @param {Object} data - 更新数据
 * @param {string} data.status - 新状态
 * @returns {Promise}
 */
export function updateHarvestRecordStatus(id, data) {
  return api.put(`/logistics/harvest-records/${id}/status`, data)
}

/**
 * 关联物流信息
 * @param {number} id - 收获记录ID
 * @param {Object} data - 物流数据
 * @param {number} data.logisticsId - 物流ID
 * @returns {Promise}
 */
export function associateLogistics(id, data) {
  return api.put(`/logistics/harvest-records/${id}/logistics`, data)
}

/**
 * 分页查询物流列表
 * @param {Object} params - 查询参数
 * @returns {Promise}
 */
export function getLogisticsList(params) {
  return api.get('/logistics', { params })
}

/**
 * 查询物流详情
 * @param {number} id - 物流ID
 * @returns {Promise}
 */
export function getLogisticsDetail(id) {
  return api.get(`/logistics/${id}`)
}

/**
 * 创建物流记录
 * @param {Object} data - 物流数据
 * @returns {Promise}
 */
export function createLogistics(data) {
  return api.post('/logistics', data)
}

/**
 * 更新物流状态
 * @param {number} id - 物流ID
 * @param {Object} data - 更新数据
 * @param {string} data.status - 新状态
 * @returns {Promise}
 */
export function updateLogisticsStatus(id, data) {
  return api.put(`/logistics/${id}/status`, data)
}

/**
 * 查询物流跟踪记录
 * @param {Object} params - 查询参数
 * @returns {Promise}
 */
export function getLogisticsTrackingList(params) {
  return api.get('/logistics/tracking', { params })
}

/**
 * 添加物流跟踪记录
 * @param {Object} data - 跟踪记录数据
 * @returns {Promise}
 */
export function addLogisticsTracking(data) {
  return api.post('/logistics/tracking', data)
}

/**
 * 根据物流ID查询跟踪记录
 * @param {number} logisticsId - 物流ID
 * @returns {Promise}
 */
export function getLogisticsTrackingByLogisticsId(logisticsId) {
  return api.get(`/logistics/tracking/logistics/${logisticsId}`)
} 