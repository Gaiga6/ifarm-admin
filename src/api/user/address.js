import { get, post, put, del } from '@/utils/request'

/**
 * 用户地址管理 API
 */

/**
 * 创建地址
 * @param {number} userId 用户ID
 * @param {Object} data 地址数据
 * @param {string} data.contactName 联系人姓名
 * @param {string} data.contactPhone 联系人电话
 * @param {string} data.provinceCode 省份编码
 * @param {string} data.provinceName 省份名称
 * @param {string} data.cityCode 城市编码
 * @param {string} data.cityName 城市名称
 * @param {string} data.districtCode 区县编码
 * @param {string} data.districtName 区县名称
 * @param {string} data.detailAddress 详细地址
 * @param {number} data.addressType 地址类型：1家庭，2公司，3其他
 * @param {number} data.isDefault 是否默认地址：0否，1是
 * @param {number} data.longitude 经度
 * @param {number} data.latitude 纬度
 * @returns {Promise} 响应结果
 */
export const createAddress = (userId, data) => {
  console.log('创建地址:', { userId, ...data })
  return post(`/user/${userId}/address`, data)
}

/**
 * 更新地址
 * @param {number} userId 用户ID
 * @param {number} addressId 地址ID
 * @param {Object} data 地址数据
 * @param {string} data.contactName 联系人姓名
 * @param {string} data.contactPhone 联系人电话
 * @param {string} data.provinceCode 省份编码
 * @param {string} data.provinceName 省份名称
 * @param {string} data.cityCode 城市编码
 * @param {string} data.cityName 城市名称
 * @param {string} data.districtCode 区县编码
 * @param {string} data.districtName 区县名称
 * @param {string} data.detailAddress 详细地址
 * @param {number} data.addressType 地址类型：1家庭，2公司，3其他
 * @param {number} data.isDefault 是否默认地址：0否，1是
 * @param {number} data.longitude 经度
 * @param {number} data.latitude 纬度
 * @returns {Promise<boolean>} 更新结果
 */
export const updateAddress = (userId, addressId, data) => {
  console.log('更新地址:', { userId, addressId, ...data })
  return put(`/user/${userId}/address/${addressId}`, data)
}

/**
 * 获取地址详情
 * @param {number} userId 用户ID
 * @param {number} addressId 地址ID
 * @returns {Promise} 地址详情
 */
export const getAddressDetail = (userId, addressId) => {
  console.log('获取地址详情:', { userId, addressId })
  return get(`/user/${userId}/address/${addressId}`)
}

/**
 * 删除地址
 * @param {number} userId 用户ID
 * @param {number} addressId 地址ID
 * @returns {Promise<boolean>} 删除结果
 */
export const deleteAddress = (userId, addressId) => {
  console.log('删除地址:', { userId, addressId })
  return del(`/user/${userId}/address/${addressId}`)
}

/**
 * 获取用户地址列表
 * @param {number} userId 用户ID
 * @returns {Promise} 地址列表
 */
export const getUserAddressList = (userId) => {
  console.log('获取用户地址列表:', userId)
  return get(`/user/${userId}/address`)
}

/**
 * 获取默认地址
 * @param {number} userId 用户ID
 * @returns {Promise} 默认地址
 */
export const getUserDefaultAddress = (userId) => {
  console.log('获取默认地址:', userId)
  return get(`/user/${userId}/address/default`)
}

/**
 * 设置默认地址
 * @param {number} userId 用户ID
 * @param {number} addressId 地址ID
 * @returns {Promise<boolean>} 设置结果
 */
export const setDefaultAddress = (userId, addressId) => {
  console.log('设置默认地址:', { userId, addressId })
  return put(`/user/${userId}/address/${addressId}/default`)
} 