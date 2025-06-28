import { get, post, put, del } from '../index.js'

/**
 * 地址管理API模块
 */
const addressApi = {
  /**
   * 获取地址详情
   * @param {number} userId 用户ID
   * @param {number} addressId 地址ID
   * @returns {Promise} 地址详细信息
   */
  async getAddressDetail(userId, addressId) {
    console.log(`📍 获取地址详情 - User ID: ${userId}, Address ID: ${addressId}`)
    try {
      const result = await get(`/user/${userId}/address/${addressId}`)
      console.log('✅ 地址详情获取成功:', result.data)
      return result
    } catch (error) {
      console.error('❌ 获取地址详情失败:', error)
      throw error
    }
  },

  /**
   * 更新地址
   * @param {number} userId 用户ID
   * @param {number} addressId 地址ID
   * @param {object} addressData 地址数据
   * @returns {Promise} 更新结果
   */
  async updateAddress(userId, addressId, addressData) {
    console.log(`✏️ 更新地址 - User ID: ${userId}, Address ID: ${addressId}`, addressData)
    try {
      const result = await put(`/user/${userId}/address/${addressId}`, addressData)
      console.log('✅ 地址更新成功')
      return result
    } catch (error) {
      console.error('❌ 更新地址失败:', error)
      throw error
    }
  },

  /**
   * 删除地址
   * @param {number} userId 用户ID
   * @param {number} addressId 地址ID
   * @returns {Promise} 删除结果
   */
  async deleteAddress(userId, addressId) {
    console.log(`🗑️ 删除地址 - User ID: ${userId}, Address ID: ${addressId}`)
    try {
      const result = await del(`/user/${userId}/address/${addressId}`)
      console.log('✅ 地址删除成功')
      return result
    } catch (error) {
      console.error('❌ 删除地址失败:', error)
      throw error
    }
  },

  /**
   * 设置默认地址
   * @param {number} userId 用户ID
   * @param {number} addressId 地址ID
   * @returns {Promise} 设置结果
   */
  async setDefaultAddress(userId, addressId) {
    console.log(`⭐ 设置默认地址 - User ID: ${userId}, Address ID: ${addressId}`)
    try {
      const result = await put(`/user/${userId}/address/${addressId}/default`)
      console.log('✅ 默认地址设置成功')
      return result
    } catch (error) {
      console.error('❌ 设置默认地址失败:', error)
      throw error
    }
  },

  /**
   * 获取用户地址列表
   * @param {number} userId 用户ID
   * @returns {Promise} 地址列表
   */
  async getUserAddressList(userId) {
    console.log(`📋 获取用户地址列表 - User ID: ${userId}`)
    try {
      const result = await get(`/user/${userId}/address`)
      console.log(`✅ 地址列表获取成功, 共 ${result.data.length} 个地址`)
      return result
    } catch (error) {
      console.error('❌ 获取地址列表失败:', error)
      throw error
    }
  },

  /**
   * 创建地址
   * @param {number} userId 用户ID
   * @param {object} addressData 地址数据
   * @param {string} addressData.contactName 联系人姓名
   * @param {string} addressData.contactPhone 联系人电话
   * @param {string} [addressData.provinceCode] 省份编码
   * @param {string} [addressData.provinceName] 省份名称
   * @param {string} [addressData.cityCode] 城市编码
   * @param {string} [addressData.cityName] 城市名称
   * @param {string} [addressData.districtCode] 区县编码
   * @param {string} [addressData.districtName] 区县名称
   * @param {string} addressData.detailAddress 详细地址
   * @param {number} [addressData.addressType] 地址类型：1家庭，2公司，3其他
   * @param {number} [addressData.isDefault] 是否默认地址：0否，1是
   * @param {number} [addressData.longitude] 经度
   * @param {number} [addressData.latitude] 纬度
   * @returns {Promise} 创建结果
   */
  async createAddress(userId, addressData) {
    console.log(`📍 创建地址 - User ID: ${userId}`, addressData)
    try {
      const result = await post(`/user/${userId}/address`, addressData)
      console.log('✅ 地址创建成功, Address ID:', result.data)
      return result
    } catch (error) {
      console.error('❌ 创建地址失败:', error)
      throw error
    }
  },

  /**
   * 获取默认地址
   * @param {number} userId 用户ID
   * @returns {Promise} 默认地址信息
   */
  async getUserDefaultAddress(userId) {
    console.log(`⭐ 获取默认地址 - User ID: ${userId}`)
    try {
      const result = await get(`/user/${userId}/address/default`)
      if (result.data) {
        console.log('✅ 默认地址获取成功:', result.data)
      } else {
        console.log('ℹ️ 用户暂无默认地址')
      }
      return result
    } catch (error) {
      console.error('❌ 获取默认地址失败:', error)
      throw error
    }
  }
}

export default addressApi 