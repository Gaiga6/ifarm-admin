/**
 * @Description  : 认养项目相关API接口
 */
import api from './index'

/**
 * 分页查询认养项目列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.farmId - 农场ID，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getAdoptionProjectList(params) {
  return api.get('/adoption-projects', { params })
}

/**
 * 查询认养项目详情
 * @param {number} id - 项目ID
 * @returns {Promise}
 */
export function getAdoptionProjectDetail(id) {
  return api.get(`/adoption-projects/${id}`)
}

/**
 * 创建认养项目
 * @param {Object} data - 项目数据
 * @returns {Promise}
 */
export function createAdoptionProject(data) {
  return api.post('/adoption-projects', data)
}

/**
 * 更新认养项目
 * @param {number} id - 项目ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateAdoptionProject(id, data) {
  return api.put(`/adoption-projects/${id}`, data)
}

/**
 * 项目审核
 * @param {number} id - 项目ID
 * @param {Object} data - 审核数据
 * @param {string} data.status - 状态
 * @param {string} data.auditRemark - 审核备注
 * @returns {Promise}
 */
export function auditAdoptionProject(id, data) {
  return api.put(`/adoption-projects/${id}/audit`, data)
}

/**
 * 查询认养套餐列表
 * @param {Object} params - 查询参数
 * @param {number} params.projectId - 项目ID
 * @returns {Promise}
 */
export function getAdoptionPackageList(params) {
  return api.get('/adoption-packages', { params })
}

/**
 * 查询认养套餐详情
 * @param {number} id - 套餐ID
 * @returns {Promise}
 */
export function getAdoptionPackageDetail(id) {
  return api.get(`/adoption-packages/${id}`)
}

/**
 * 创建认养套餐
 * @param {Object} data - 套餐数据
 * @returns {Promise}
 */
export function createAdoptionPackage(data) {
  return api.post('/adoption-packages', data)
}

/**
 * 更新认养套餐
 * @param {number} id - 套餐ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateAdoptionPackage(id, data) {
  return api.put(`/adoption-packages/${id}`, data)
}

/**
 * 删除认养套餐
 * @param {number} id - 套餐ID
 * @returns {Promise}
 */
export function deleteAdoptionPackage(id) {
  return api.delete(`/adoption-packages/${id}`)
} 