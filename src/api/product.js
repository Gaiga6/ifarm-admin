/**
 * @Description  : 产品相关API接口
 */
import api from './index'

/**
 * 查询农产品分类树
 * @returns {Promise}
 */
export function getCropCategoryTree() {
  return api.get('/product/crop-categories/tree')
}

/**
 * 创建农产品分类
 * @param {Object} data - 分类数据
 * @returns {Promise}
 */
export function createCropCategory(data) {
  return api.post('/product/crop-categories', data)
}

/**
 * 更新农产品分类
 * @param {number} id - 分类ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateCropCategory(id, data) {
  return api.put(`/product/crop-categories/${id}`, data)
}

/**
 * 删除农产品分类
 * @param {number} id - 分类ID
 * @returns {Promise}
 */
export function deleteCropCategory(id) {
  return api.delete(`/product/crop-categories/${id}`)
}

/**
 * 分页查询农产品列表
 * @param {Object} params - 查询参数
 * @returns {Promise}
 */
export function getCropList(params) {
  return api.get('/product/crops', { params })
}

/**
 * 查询农产品详情
 * @param {number} id - 农产品ID
 * @returns {Promise}
 */
export function getCropDetail(id) {
  return api.get(`/product/crops/${id}`)
}

/**
 * 创建农产品
 * @param {Object} data - 农产品数据
 * @returns {Promise}
 */
export function createCrop(data) {
  return api.post('/product/crops', data)
}

/**
 * 更新农产品
 * @param {number} id - 农产品ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateCrop(id, data) {
  return api.put(`/product/crops/${id}`, data)
}

/**
 * 删除农产品
 * @param {number} id - 农产品ID
 * @returns {Promise}
 */
export function deleteCrop(id) {
  return api.delete(`/product/crops/${id}`)
}

/**
 * 查询农场可种植农产品
 * @param {Object} params - 查询参数
 * @param {number} params.farmId - 农场ID
 * @returns {Promise}
 */
export function getFarmCrops(params) {
  return api.get('/product/farm-crops', { params })
}

/**
 * 添加农场农产品关联
 * @param {Object} data - 关联数据
 * @returns {Promise}
 */
export function addFarmCrop(data) {
  return api.post('/product/farm-crops', data)
}

/**
 * 删除农场农产品关联
 * @param {number} id - 关联ID
 * @returns {Promise}
 */
export function deleteFarmCrop(id) {
  return api.delete(`/product/farm-crops/${id}`)
} 