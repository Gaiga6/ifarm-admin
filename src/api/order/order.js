import { get, post, put, del } from '@/utils/request'

/**
 * 订单管理 API
 */

/**
 * 创建订单
 * @param {number} userId 用户ID
 * @param {Object} data 订单数据
 * @param {number} data.projectId 项目ID
 * @param {number} data.packageId 套餐ID
 * @param {number} data.amount 金额
 * @param {number} data.addressId 地址ID
 * @param {string} data.remark 备注
 * @returns {Promise} 响应结果
 */
export const createOrder = (userId, data) => {
  console.log('创建订单:', { userId, ...data })
  return post('/orders', data, { params: { userId } })
}

/**
 * 分页查询订单列表
 * @param {Object} params 查询参数
 * @param {number} params.pageNum 页码
 * @param {number} params.pageSize 页大小
 * @param {number} params.userId 用户ID
 * @param {string} params.orderNo 订单编号
 * @param {string} params.status 订单状态
 * @param {number} params.projectId 项目ID
 * @returns {Promise} 分页结果
 */
export const getOrderPage = (params) => {
  console.log('分页查询订单列表:', params)
  return get('/orders', params)
}

/**
 * 查询订单详情
 * @param {number} id 订单ID
 * @returns {Promise} 订单详情
 */
export const getOrderById = (id) => {
  console.log('查询订单详情:', id)
  return get(`/orders/${id}`)
}

/**
 * 查询用户订单列表
 * @param {number} userId 用户ID
 * @returns {Promise} 订单列表
 */
export const getOrdersByUserId = (userId) => {
  console.log('查询用户订单列表:', userId)
  return get(`/orders/user/${userId}`)
}

/**
 * 支付订单
 * @param {number} id 订单ID
 * @param {number} userId 用户ID
 * @param {Object} data 支付数据
 * @param {string} data.paymentMethod 支付方式
 * @param {number} data.paymentAmount 支付金额
 * @param {string} data.paymentPassword 支付密码
 * @returns {Promise} 响应结果
 */
export const payOrder = (id, userId, data) => {
  console.log('支付订单:', { id, userId, ...data })
  return post(`/orders/${id}/pay`, data, { params: { userId } })
}

/**
 * 取消订单
 * @param {number} id 订单ID
 * @param {number} userId 用户ID
 * @returns {Promise} 响应结果
 */
export const cancelOrder = (id, userId) => {
  console.log('取消订单:', { id, userId })
  return post(`/orders/${id}/cancel`, null, { params: { userId } })
}

/**
 * 退款订单
 * @param {number} id 订单ID
 * @param {number} userId 操作用户ID
 * @returns {Promise} 响应结果
 */
export const refundOrder = (id, userId) => {
  console.log('退款订单:', { id, userId })
  return post(`/orders/${id}/refund`, null, { params: { userId } })
} 