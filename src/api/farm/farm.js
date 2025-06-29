import { get, post, put, del } from '@/utils/request'

/**
 * 农场管理 API
 */

/**
 * 创建农场
 * @param {Object} data 农场数据
 * @param {string} data.farmName 农场名称
 * @param {string} data.farmCode 农场编码
 * @param {string} data.description 农场描述
 * @param {string} data.province 省份
 * @param {string} data.city 城市
 * @param {string} data.district 区县
 * @param {string} data.address 详细地址
 * @param {number} data.longitude 经度
 * @param {number} data.latitude 纬度
 * @param {number} data.totalArea 总面积(平方米)
 * @param {string} data.contactPerson 联系人
 * @param {string} data.contactPhone 联系电话
 * @param {string} data.businessLicense 营业执照
 * @param {number} data.ownerId 农场负责人用户ID
 * @param {Array<string>} data.imageUrls 农场图片URL列表
 * @returns {Promise} 响应结果
 */
export const createFarm = (data) => {
  console.log('创建农场:', data)
  return post('/farm', data)
}

/**
 * 更新农场
 * @param {Object} data 农场数据
 * @param {number} data.id 农场ID
 * @param {string} data.farmName 农场名称
 * @param {string} data.farmCode 农场编码
 * @param {string} data.description 农场描述
 * @param {string} data.province 省份
 * @param {string} data.city 城市
 * @param {string} data.district 区县
 * @param {string} data.address 详细地址
 * @param {number} data.longitude 经度
 * @param {number} data.latitude 纬度
 * @param {number} data.totalArea 总面积(平方米)
 * @param {string} data.contactPerson 联系人
 * @param {string} data.contactPhone 联系电话
 * @param {string} data.businessLicense 营业执照
 * @param {number} data.ownerId 农场负责人用户ID
 * @param {Array<string>} data.imageUrls 农场图片URL列表
 * @returns {Promise} 响应结果
 */
export const updateFarm = (data) => {
  console.log('更新农场:', data)
  return put('/farm', data)
}

/**
 * 根据ID查询农场详情
 * @param {number} id 农场ID
 * @returns {Promise} 农场详情
 */
export const getFarmById = (id) => {
  console.log('查询农场详情:', id)
  return get(`/farm/${id}`)
}

/**
 * 删除农场
 * @param {number} id 农场ID
 * @returns {Promise} 响应结果
 */
export const deleteFarm = (id) => {
  console.log('删除农场:', id)
  return del(`/farm/${id}`)
}

/**
 * 批量删除农场
 * @param {Array<number>} ids 农场ID列表
 * @returns {Promise} 响应结果
 */
export const deleteFarms = (ids) => {
  console.log('批量删除农场:', ids)
  return del('/farm/batch', {}, { data: ids })
}

/**
 * 分页查询农场列表
 * @param {Object} params 查询参数
 * @param {number} params.page 页码
 * @param {number} params.size 每页大小
 * @param {string} params.farmName 农场名称
 * @param {string} params.province 省份
 * @param {string} params.city 城市
 * @param {number} params.status 状态
 * @param {number} params.ownerId 负责人ID
 * @returns {Promise} 分页结果
 */
export const getFarmPage = (params) => {
  console.log('分页查询农场列表:', params)
  return get('/farm/page', params)
}

/**
 * 根据负责人ID查询农场列表
 * @param {number} ownerId 负责人ID
 * @returns {Promise} 农场列表
 */
export const getFarmsByOwnerId = (ownerId) => {
  console.log('根据负责人ID查询农场列表:', ownerId)
  return get(`/farm/owner/${ownerId}`)
}

/**
 * 更新农场状态
 * @param {number} id 农场ID
 * @param {number} status 状态：0禁用，1启用，2审核中，3审核失败
 * @returns {Promise} 响应结果
 */
export const updateFarmStatus = (id, status) => {
  console.log('更新农场状态:', { id, status })
  return put(`/farm/${id}/status`, null, { params: { status } })
}

/**
 * 审核农场
 * @param {Object} data 审核数据
 * @param {number} data.id 农场ID
 * @param {string} data.auditResult 审核结果：1通过，3失败
 * @param {string} data.auditRemark 审核备注
 * @param {number} data.auditUserId 审核人ID
 * @returns {Promise} 响应结果
 */
export const auditFarm = (data) => {
  console.log('审核农场:', data)
  return put('/farm/audit', data)
}

/**
 * 检查农场编码是否存在
 * @param {string} farmCode 农场编码
 * @param {number} excludeId 排除的农场ID（编辑时使用）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkFarmCodeExists = (farmCode, excludeId = null) => {
  console.log('检查农场编码是否存在:', { farmCode, excludeId })
  const params = { farmCode }
  if (excludeId) {
    params.excludeId = excludeId
  }
  return get('/farm/check-code', params)
}

/**
 * 获取农场统计信息
 * @param {number} ownerId 负责人ID（可选）
 * @returns {Promise} 统计信息
 */
export const getFarmStats = (ownerId = null) => {
  console.log('获取农场统计信息:', ownerId)
  const params = {}
  if (ownerId) {
    params.ownerId = ownerId
  }
  return get('/farm/stats', params)
}

/**
 * 获取当前用户的农场信息
 * @returns {Promise} 农场信息
 */
export const getCurrentUserFarm = () => {
  return request.get('/farm/current')
}