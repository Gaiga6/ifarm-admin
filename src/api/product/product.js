import { get, post, put, del } from '@/utils/request'

/**
 * 农场农产品关联管理 API
 */

/**
 * 创建农场农产品关联
 * @param {Object} data 关联数据
 * @param {number} data.farmId 农场ID
 * @param {Array<number>} data.cropIds 农产品ID列表
 * @param {string} data.status 状态
 * @returns {Promise} 响应结果
 */
export const createFarmCrop = (data) => {
  console.log('创建农场农产品关联:', data)
  return post('/product/farm-crop', data)
}

/**
 * 根据ID查询农场农产品关联详情
 * @param {number} id 关联ID
 * @returns {Promise} 关联详情
 */
export const getFarmCropById = (id) => {
  console.log('根据ID查询农场农产品关联详情:', id)
  return get(`/product/farm-crop/${id}`)
}

/**
 * 删除农场农产品关联
 * @param {number} id 关联ID
 * @returns {Promise} 响应结果
 */
export const deleteFarmCrop = (id) => {
  console.log('删除农场农产品关联:', id)
  return del(`/product/farm-crop/${id}`)
}

/**
 * 更新农场农产品关联状态
 * @param {number} id 关联ID
 * @param {string} status 状态
 * @returns {Promise} 响应结果
 */
export const updateFarmCropStatus = (id, status) => {
  console.log('更新农场农产品关联状态:', { id, status })
  return put(`/product/farm-crop/${id}/status`, null, { params: { status } })
}

/**
 * 分页查询农场农产品关联列表
 * @param {Object} params 查询参数
 * @param {number} params.pageNum 页码
 * @param {number} params.pageSize 页大小
 * @param {number} params.farmId 农场ID
 * @param {string} params.cropName 农产品名称
 * @param {string} params.status 状态
 * @returns {Promise} 分页结果
 */
export const getFarmCropPage = (params) => {
  console.log('分页查询农场农产品关联列表:', params)
  return get('/product/farm-crop/page', params)
}

/**
 * 根据农场ID查询农产品列表
 * @param {number} farmId 农场ID
 * @returns {Promise} 农产品列表
 */
export const getCropsByFarmId = (farmId) => {
  console.log('根据农场ID查询农产品列表:', farmId)
  return get(`/product/farm-crop/farm/${farmId}/crops`)
}

/**
 * 根据农产品ID查询农场列表
 * @param {number} cropId 农产品ID
 * @returns {Promise} 农场列表
 */
export const getFarmsByCropId = (cropId) => {
  console.log('根据农产品ID查询农场列表:', cropId)
  return get(`/product/farm-crop/crop/${cropId}/farms`)
} 