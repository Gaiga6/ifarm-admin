/**
 * @Description  : 农场相关API接口
 */
import api from './index'

/**
 * 分页查询农场列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {string} params.farmName - 农场名称，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getFarmList(params) {
  return api.get('/farms', { params })
}

/**
 * 查询农场详情
 * @param {number} id - 农场ID
 * @returns {Promise}
 */
export function getFarmDetail(id) {
  return api.get(`/farms/${id}`)
}

/**
 * 创建农场
 * @param {Object} data - 农场数据
 * @returns {Promise}
 */
export function createFarm(data) {
  return api.post('/farms', data)
}

/**
 * 更新农场信息
 * @param {number} id - 农场ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateFarm(id, data) {
  return api.put(`/farms/${id}`, data)
}

/**
 * 农场审核
 * @param {number} id - 农场ID
 * @param {Object} data - 审核数据
 * @param {number} data.status - 状态
 * @param {string} data.auditRemark - 审核备注
 * @returns {Promise}
 */
export function auditFarm(id, data) {
  return api.put(`/farms/${id}/audit`, data)
}

/**
 * 分页查询地块列表
 * @param {Object} params - 查询参数
 * @returns {Promise}
 */
export function getPlotList(params) {
  return api.get('/plots', { params })
}

/**
 * 查询地块详情
 * @param {number} id - 地块ID
 * @returns {Promise}
 */
export function getPlotDetail(id) {
  return api.get(`/plots/${id}`)
}

/**
 * 创建地块
 * @param {Object} data - 地块数据
 * @returns {Promise}
 */
export function createPlot(data) {
  return api.post('/plots', data)
}

/**
 * 更新地块信息
 * @param {number} id - 地块ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updatePlot(id, data) {
  return api.put(`/plots/${id}`, data)
}

/**
 * 删除地块
 * @param {number} id - 地块ID
 * @returns {Promise}
 */
export function deletePlot(id) {
  return api.delete(`/plots/${id}`)
} 