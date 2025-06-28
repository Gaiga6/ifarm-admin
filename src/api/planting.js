/**
 * @Description  : 种植管理相关API接口
 */
import api from './index'

/**
 * 分页查询认养记录列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.orderId - 订单ID，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getAdoptionRecordList(params) {
  return api.get('/planting/adoption-records', { params })
}

/**
 * 查询认养记录详情
 * @param {number} id - 认养记录ID
 * @returns {Promise}
 */
export function getAdoptionRecordDetail(id) {
  return api.get(`/planting/adoption-records/${id}`)
}

/**
 * 创建认养记录
 * @param {Object} data - 认养记录数据
 * @returns {Promise}
 */
export function createAdoptionRecord(data) {
  return api.post('/planting/adoption-records', data)
}

/**
 * 更新认养记录状态
 * @param {number} id - 认养记录ID
 * @param {Object} data - 更新数据
 * @param {string} data.status - 新状态
 * @returns {Promise}
 */
export function updateAdoptionRecordStatus(id, data) {
  return api.put(`/planting/adoption-records/${id}/status`, data)
}

/**
 * 根据订单ID查询认养记录
 * @param {number} orderId - 订单ID
 * @returns {Promise}
 */
export function getAdoptionRecordByOrderId(orderId) {
  return api.get(`/planting/adoption-records/order/${orderId}`)
}

/**
 * 分页查询种植单元列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.adoptionId - 认养记录ID，可选
 * @param {number} params.cropId - 农产品ID，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getPlantingUnitList(params) {
  return api.get('/planting/units', { params })
}

/**
 * 查询种植单元详情
 * @param {number} id - 种植单元ID
 * @returns {Promise}
 */
export function getPlantingUnitDetail(id) {
  return api.get(`/planting/units/${id}`)
}

/**
 * 创建种植单元
 * @param {Object} data - 种植单元数据
 * @returns {Promise}
 */
export function createPlantingUnit(data) {
  return api.post('/planting/units', data)
}

/**
 * 更新种植单元状态
 * @param {number} id - 种植单元ID
 * @param {Object} data - 更新数据
 * @param {string} data.status - 新状态
 * @returns {Promise}
 */
export function updatePlantingUnitStatus(id, data) {
  return api.put(`/planting/units/${id}/status`, data)
}

/**
 * 根据认养记录ID查询种植单元
 * @param {number} adoptionId - 认养记录ID
 * @returns {Promise}
 */
export function getPlantingUnitsByAdoptionId(adoptionId) {
  return api.get(`/planting/units/adoption/${adoptionId}`)
}

/**
 * 分页查询种植记录列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.unitId - 种植单元ID，可选
 * @param {number} params.creatorId - 创建者ID，可选
 * @returns {Promise}
 */
export function getPlantingRecordList(params) {
  return api.get('/planting/records', { params })
}

/**
 * 创建种植记录
 * @param {Object} data - 种植记录数据
 * @param {number} creatorId - 创建者ID
 * @returns {Promise}
 */
export function createPlantingRecord(data, creatorId) {
  return api.post('/planting/records', data, { params: { creatorId } })
}

/**
 * 更新种植记录
 * @param {number} id - 种植记录ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updatePlantingRecord(id, data) {
  return api.put(`/planting/records/${id}`, data)
}

/**
 * 根据种植单元ID查询种植记录
 * @param {number} unitId - 种植单元ID
 * @returns {Promise}
 */
export function getPlantingRecordsByUnitId(unitId) {
  return api.get(`/planting/records/unit/${unitId}`)
} 