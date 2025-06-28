import { get, post, put, del } from '@/utils/request'

/**
 * 认养项目管理 API
 */

/**
 * 创建认养项目
 * @param {Object} data 项目数据
 * @param {number} data.farmId 农场ID
 * @param {string} data.name 项目名称
 * @param {string} data.description 项目描述
 * @param {string} data.type 项目类型
 * @param {number} data.plotId 地块ID
 * @param {number} data.unitCount 单元数量
 * @param {number} data.unitArea 单元面积
 * @param {number} data.adoptionPrice 认养价格
 * @param {string} data.startTime 开始时间
 * @param {string} data.endTime 结束时间
 * @param {Array<string>} data.imageUrls 项目图片URL列表
 * @param {Array<number>} data.cropIds 作物ID列表
 * @param {Array<number>} data.farmSelectedCropIds 农场推荐作物ID列表
 * @param {Array<Object>} data.packages 套餐列表
 * @returns {Promise} 响应结果
 */
export const createAdoptionProject = (data) => {
  console.log('创建认养项目:', data)
  return post('/adoption/projects', data)
}

/**
 * 更新认养项目
 * @param {number} id 项目ID
 * @param {Object} data 项目数据
 * @param {string} data.name 项目名称
 * @param {string} data.description 项目描述
 * @param {number} data.unitCount 单元数量
 * @param {number} data.unitArea 单元面积
 * @param {number} data.adoptionPrice 认养价格
 * @param {string} data.startTime 开始时间
 * @param {string} data.endTime 结束时间
 * @returns {Promise} 响应结果
 */
export const updateAdoptionProject = (id, data) => {
  console.log('更新认养项目:', { id, ...data })
  return put(`/adoption/projects/${id}`, data)
}

/**
 * 根据ID查询认养项目详情
 * @param {number} id 项目ID
 * @returns {Promise} 项目详情
 */
export const getAdoptionProjectById = (id) => {
  console.log('查询认养项目详情:', id)
  return get(`/adoption/projects/${id}`)
}

/**
 * 删除认养项目
 * @param {number} id 项目ID
 * @returns {Promise} 响应结果
 */
export const deleteAdoptionProject = (id) => {
  console.log('删除认养项目:', id)
  return del(`/adoption/projects/${id}`)
}

/**
 * 分页查询认养项目列表
 * @param {Object} params 查询参数
 * @param {number} params.pageNum 页码
 * @param {number} params.pageSize 页大小
 * @param {number} params.farmId 农场ID
 * @param {string} params.name 项目名称
 * @param {string} params.type 项目类型
 * @param {string} params.status 项目状态
 * @returns {Promise} 分页结果
 */
export const getAdoptionProjectPage = (params) => {
  console.log('分页查询认养项目列表:', params)
  return get('/adoption/projects/page', params)
}

/**
 * 查询已发布的认养项目
 * @param {Object} params 查询参数
 * @param {number} params.farmId 农场ID（可选）
 * @param {string} params.type 项目类型（可选）
 * @returns {Promise} 项目列表
 */
export const getPublishedProjects = (params = {}) => {
  console.log('查询已发布的认养项目:', params)
  return get('/adoption/projects/published', params)
}

/**
 * 查询热门认养项目
 * @param {number} limit 限制数量（可选）
 * @returns {Promise} 热门项目列表
 */
export const getHotProjects = (limit = null) => {
  console.log('查询热门认养项目:', limit)
  const params = {}
  if (limit) params.limit = limit
  return get('/adoption/projects/hot', params)
}

/**
 * 根据农场ID查询项目列表
 * @param {number} farmId 农场ID
 * @returns {Promise} 项目列表
 */
export const getProjectsByFarmId = (farmId) => {
  console.log('根据农场ID查询项目列表:', farmId)
  return get(`/adoption/projects/farm/${farmId}`)
}

/**
 * 统计认养项目数量
 * @param {Object} params 统计参数
 * @param {number} params.farmId 农场ID（可选）
 * @param {string} params.status 项目状态（可选）
 * @returns {Promise} 项目数量
 */
export const countProjects = (params = {}) => {
  console.log('统计认养项目数量:', params)
  return get('/adoption/projects/count', params)
}

/**
 * 检查项目名称是否存在
 * @param {number} farmId 农场ID
 * @param {string} name 项目名称
 * @param {number} excludeId 排除的项目ID（可选）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkProjectNameExists = (farmId, name, excludeId = null) => {
  console.log('检查项目名称是否存在:', { farmId, name, excludeId })
  const params = { farmId, name }
  if (excludeId) params.excludeId = excludeId
  return get('/adoption/projects/check-name', params)
}

/**
 * 发布认养项目
 * @param {number} id 项目ID
 * @returns {Promise} 响应结果
 */
export const publishAdoptionProject = (id) => {
  console.log('发布认养项目:', id)
  return post(`/adoption/projects/${id}/publish`)
}

/**
 * 结束认养项目
 * @param {number} id 项目ID
 * @returns {Promise} 响应结果
 */
export const endAdoptionProject = (id) => {
  console.log('结束认养项目:', id)
  return post(`/adoption/projects/${id}/end`)
}

/**
 * 审核认养项目
 * @param {number} id 项目ID
 * @param {number} auditUserId 审核人ID
 * @param {Object} data 审核数据
 * @param {string} data.status 审核状态
 * @param {string} data.auditRemark 审核备注
 * @returns {Promise} 响应结果
 */
export const auditAdoptionProject = (id, auditUserId, data) => {
  console.log('审核认养项目:', { id, auditUserId, ...data })
  return post(`/adoption/projects/${id}/audit`, data, { params: { auditUserId } })
} 