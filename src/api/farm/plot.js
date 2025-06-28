import { get, post, put, del } from '@/utils/request'

/**
 * 地块管理 API
 */

/**
 * 创建地块
 * @param {Object} data 地块数据
 * @param {number} data.farmId 农场ID
 * @param {string} data.name 地块名称
 * @param {number} data.area 面积（平方米）
 * @param {string} data.location 位置描述
 * @param {string} data.soilType 土壤类型
 * @param {string} data.waterSource 水源情况
 * @param {string} data.status 状态：available可用，in_use使用中，unavailable不可用
 * @param {Array<string>} data.imageUrls 地块图片URL列表
 * @returns {Promise} 响应结果
 */
export const createPlot = (data) => {
  console.log('创建地块:', data)
  return post('/plot', data)
}

/**
 * 更新地块
 * @param {Object} data 地块数据
 * @param {number} data.id 地块ID
 * @param {number} data.farmId 农场ID
 * @param {string} data.name 地块名称
 * @param {number} data.area 面积（平方米）
 * @param {string} data.location 位置描述
 * @param {string} data.soilType 土壤类型
 * @param {string} data.waterSource 水源情况
 * @param {string} data.status 状态：available可用，in_use使用中，unavailable不可用
 * @param {Array<string>} data.imageUrls 地块图片URL列表
 * @returns {Promise} 响应结果
 */
export const updatePlot = (data) => {
  console.log('更新地块:', data)
  return put('/plot', data)
}

/**
 * 根据ID查询地块详情
 * @param {number} id 地块ID
 * @returns {Promise} 地块详情
 */
export const getPlotById = (id) => {
  console.log('查询地块详情:', id)
  return get(`/plot/${id}`)
}

/**
 * 删除地块
 * @param {number} id 地块ID
 * @returns {Promise} 响应结果
 */
export const deletePlot = (id) => {
  console.log('删除地块:', id)
  return del(`/plot/${id}`)
}

/**
 * 批量删除地块
 * @param {Array<number>} ids 地块ID列表
 * @returns {Promise} 响应结果
 */
export const deletePlots = (ids) => {
  console.log('批量删除地块:', ids)
  return del('/plot/batch', {}, { data: ids })
}

/**
 * 分页查询地块列表
 * @param {Object} params 查询参数
 * @param {number} params.page 页码
 * @param {number} params.size 每页大小
 * @param {number} params.farmId 农场ID
 * @param {string} params.name 地块名称
 * @param {string} params.status 状态
 * @returns {Promise} 分页结果
 */
export const getPlotPage = (params) => {
  console.log('分页查询地块列表:', params)
  return get('/plot/page', params)
}

/**
 * 根据农场ID查询地块列表
 * @param {number} farmId 农场ID
 * @returns {Promise} 地块列表
 */
export const getPlotsByFarmId = (farmId) => {
  console.log('根据农场ID查询地块列表:', farmId)
  return get(`/plot/farm/${farmId}`)
}

/**
 * 更新地块状态
 * @param {number} id 地块ID  
 * @param {string} status 状态：available可用，in_use使用中，unavailable不可用
 * @returns {Promise} 响应结果
 */
export const updatePlotStatus = (id, status) => {
  console.log('更新地块状态:', { id, status })
  return put(`/plot/${id}/status`, null, { params: { status } })
}

/**
 * 检查地块名称是否存在
 * @param {number} farmId 农场ID
 * @param {string} name 地块名称
 * @param {number} excludeId 排除的地块ID（编辑时使用）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkPlotNameExists = (farmId, name, excludeId = null) => {
  console.log('检查地块名称是否存在:', { farmId, name, excludeId })
  const params = { farmId, name }
  if (excludeId) {
    params.excludeId = excludeId
  }
  return get('/plot/check-name', params)
} 