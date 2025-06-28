/**
 * @Description  : 订单相关API接口
 */
import api from './index'

/**
 * 分页查询订单列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {number} params.userId - 用户ID，可选
 * @param {string} params.status - 订单状态，可选
 * @returns {Promise}
 */
export function getOrderList(params) {
  return api.get('/orders', { params })
}

/**
 * 查询订单详情
 * @param {number} id - 订单ID
 * @returns {Promise}
 */
export function getOrderDetail(id) {
  return api.get(`/orders/${id}`)
}

/**
 * 创建订单
 * @param {Object} data - 订单数据
 * @returns {Promise}
 */
export function createOrder(data) {
  return api.post('/orders', data)
}

/**
 * 更新订单信息
 * @param {number} id - 订单ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateOrder(id, data) {
  return api.put(`/orders/${id}`, data)
}

/**
 * 订单支付
 * @param {number} id - 订单ID
 * @param {Object} data - 支付数据
 * @param {string} data.paymentMethod - 支付方式
 * @param {number} data.paymentAmount - 支付金额
 * @returns {Promise}
 */
export function payOrder(id, data) {
  return api.put(`/orders/${id}/pay`, data)
}

/**
 * 取消订单
 * @param {number} id - 订单ID
 * @returns {Promise}
 */
export function cancelOrder(id) {
  return api.put(`/orders/${id}/cancel`)
}

/**
 * 删除订单
 * @param {number} id - 订单ID
 * @returns {Promise}
 */
export function deleteOrder(id) {
  return api.delete(`/orders/${id}`)
} 