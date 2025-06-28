import { get, post, put, del } from '@/utils/request'

/**
 * 种植单元管理 API
 */

/**
 * 创建种植单元
 * @param {Object} data 种植单元数据
 * @param {number} data.adoptionId 认养记录ID
 * @param {string} data.unitNo 种植单元编号
 * @param {number} data.cropId 农产品ID
 * @param {string} data.status 状态
 * @returns {Promise} 响应结果
 */
export const createPlantingUnit = (data) => {
  console.log('创建种植单元:', data)
  return post('/planting/units', data)
}

/**
 * 分页查询种植单元列表
 * @param {Object} params 查询参数
 * @param {number} params.page 页码
 * @param {number} params.size 每页数量
 * @param {number} params.adoptionId 认养记录ID
 * @param {number} params.cropId 农产品ID
 * @param {string} params.status 状态
 * @returns {Promise} 分页结果
 */
export const getPlantingUnitPage = (params) => {
  console.log('分页查询种植单元列表:', params)
  return get('/planting/units', params)
}

/**
 * 查询种植单元详情
 * @param {number} id 种植单元ID
 * @returns {Promise} 种植单元详情
 */
export const getPlantingUnitDetail = (id) => {
  console.log('查询种植单元详情:', id)
  return get(`/planting/units/${id}`)
}

/**
 * 删除种植单元
 * @param {number} id 种植单元ID
 * @returns {Promise<boolean>} 删除结果
 */
export const deletePlantingUnit = (id) => {
  console.log('删除种植单元:', id)
  return del(`/planting/units/${id}`)
}

/**
 * 更新种植单元状态
 * @param {number} id 种植单元ID
 * @param {string} status 状态
 * @returns {Promise<boolean>} 更新结果
 */
export const updatePlantingUnitStatus = (id, status) => {
  console.log('更新种植单元状态:', { id, status })
  return put(`/planting/units/${id}/status`, null, { params: { status } })
}

/**
 * 批量更新状态
 * @param {Array<number>} ids 种植单元ID列表
 * @param {string} status 状态
 * @returns {Promise<boolean>} 更新结果
 */
export const batchUpdateStatus = (ids, status) => {
  console.log('批量更新状态:', { ids, status })
  return put('/planting/units/batch-status', null, { params: { ids, status } })
}

/**
 * 根据认养记录ID查询种植单元列表
 * @param {number} adoptionId 认养记录ID
 * @returns {Promise} 种植单元列表
 */
export const getByAdoptionId = (adoptionId) => {
  console.log('根据认养记录ID查询种植单元列表:', adoptionId)
  return get(`/planting/units/adoption/${adoptionId}`)
} 