import { get, post, put, del } from '@/utils/request'

/**
 * 物流管理 API
 */

/**
 * 创建物流
 * @param {Object} data 物流数据
 * @param {string} data.company 物流公司
 * @param {string} data.recipientName 收件人姓名
 * @param {string} data.recipientPhone 收件人电话
 * @param {string} data.recipientAddress 收件人地址
 * @returns {Promise} 响应结果
 */
export const createLogistics = (data) => {
  console.log('创建物流:', data)
  return post('/logistics', data)
}

/**
 * 分页查询物流列表
 * @param {Object} params 查询参数
 * @param {number} params.page 页码
 * @param {number} params.size 每页大小
 * @param {string} params.logisticsNo 物流单号
 * @param {string} params.company 物流公司
 * @param {string} params.status 状态
 * @returns {Promise} 分页结果
 */
export const getLogisticsPage = (params) => {
  console.log('分页查询物流列表:', params)
  return get('/logistics', params)
}

/**
 * 查询物流详情
 * @param {number} id 物流ID
 * @returns {Promise} 物流详情
 */
export const getLogisticsDetail = (id) => {
  console.log('查询物流详情:', id)
  return get(`/logistics/${id}`)
}

/**
 * 根据物流单号查询物流信息
 * @param {string} logisticsNo 物流单号
 * @returns {Promise} 物流信息
 */
export const getLogisticsByNo = (logisticsNo) => {
  console.log('根据物流单号查询物流信息:', logisticsNo)
  return get(`/logistics/no/${logisticsNo}`)
}

/**
 * 发货
 * @param {number} id 物流ID
 * @returns {Promise} 响应结果
 */
export const shipLogistics = (id) => {
  console.log('发货:', id)
  return put(`/logistics/${id}/ship`)
}

/**
 * 确认送达
 * @param {number} id 物流ID
 * @returns {Promise} 响应结果
 */
export const deliverLogistics = (id) => {
  console.log('确认送达:', id)
  return put(`/logistics/${id}/deliver`)
}

/**
 * 添加物流跟踪记录
 * @param {number} id 物流ID
 * @param {string} location 当前位置
 * @param {string} description 描述信息
 * @returns {Promise} 响应结果
 */
export const addTrackingRecord = (id, location, description) => {
  console.log('添加物流跟踪记录:', { id, location, description })
  return post(`/logistics/${id}/tracking`, null, { 
    params: { location, description } 
  })
} 