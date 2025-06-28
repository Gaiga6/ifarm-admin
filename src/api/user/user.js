import { get, post, put, del } from '../index.js'

/**
 * 用户管理API模块
 */
const userApi = {
  /**
   * 获取用户详情
   * @param {number} userId 用户ID
   * @returns {Promise} 用户详细信息
   */
  async getUserDetail(userId) {
    console.log(`👤 获取用户详情 - User ID: ${userId}`)
    try {
      const result = await get(`/user/${userId}`)
      console.log('✅ 用户详情获取成功:', result.data)
      return result
    } catch (error) {
      console.error('❌ 获取用户详情失败:', error)
      throw error
    }
  },

  /**
   * 更新用户信息
   * @param {number} userId 用户ID
   * @param {object} userData 用户数据
   * @returns {Promise} 更新结果
   */
  async updateUser(userId, userData) {
    console.log(`✏️ 更新用户信息 - User ID: ${userId}`, userData)
    try {
      const result = await put(`/user/${userId}`, userData)
      console.log('✅ 用户信息更新成功')
      return result
    } catch (error) {
      console.error('❌ 更新用户信息失败:', error)
      throw error
    }
  },

  /**
   * 删除用户
   * @param {number} userId 用户ID
   * @returns {Promise} 删除结果
   */
  async deleteUser(userId) {
    console.log(`🗑️ 删除用户 - User ID: ${userId}`)
    try {
      const result = await del(`/user/${userId}`)
      console.log('✅ 用户删除成功')
      return result
    } catch (error) {
      console.error('❌ 删除用户失败:', error)
      throw error
    }
  },

  /**
   * 修改用户状态
   * @param {number} userId 用户ID
   * @param {number} status 状态：0禁用，1启用
   * @returns {Promise} 修改结果
   */
  async changeUserStatus(userId, status) {
    console.log(`🔄 修改用户状态 - User ID: ${userId}, Status: ${status}`)
    try {
      const result = await put(`/user/${userId}/status`, null, {
        params: { status }
      })
      console.log(`✅ 用户状态修改成功: ${status === 1 ? '启用' : '禁用'}`)
      return result
    } catch (error) {
      console.error('❌ 修改用户状态失败:', error)
      throw error
    }
  },

  /**
   * 重置密码（管理员操作）
   * @param {number} userId 用户ID
   * @param {string} newPassword 新密码
   * @returns {Promise} 重置结果
   */
  async resetPassword(userId, newPassword) {
    console.log(`🔑 管理员重置密码 - User ID: ${userId}`)
    try {
      const result = await put(`/user/${userId}/reset-password`, null, {
        params: { newPassword }
      })
      console.log('✅ 密码重置成功')
      return result
    } catch (error) {
      console.error('❌ 密码重置失败:', error)
      throw error
    }
  },

  /**
   * 修改密码（用户自己操作）
   * @param {number} userId 用户ID
   * @param {object} passwordData 密码数据
   * @param {string} passwordData.oldPassword 原密码
   * @param {string} passwordData.newPassword 新密码
   * @param {string} passwordData.confirmPassword 确认新密码
   * @returns {Promise} 修改结果
   */
  async changePassword(userId, passwordData) {
    console.log(`🔐 用户修改密码 - User ID: ${userId}`)
    try {
      const result = await put(`/user/${userId}/password`, passwordData)
      console.log('✅ 密码修改成功')
      return result
    } catch (error) {
      console.error('❌ 密码修改失败:', error)
      throw error
    }
  },

  /**
   * 创建用户
   * @param {object} userData 用户数据
   * @returns {Promise} 创建结果
   */
  async createUser(userData) {
    console.log('👤 创建新用户:', userData)
    try {
      const result = await post('/user', userData)
      console.log('✅ 用户创建成功, User ID:', result.data)
      return result
    } catch (error) {
      console.error('❌ 创建用户失败:', error)
      throw error
    }
  },

  /**
   * 分页查询用户列表
   * @param {object} params 查询参数
   * @param {number} params.current 当前页
   * @param {number} params.size 每页大小
   * @param {string} [params.username] 用户名（模糊查询）
   * @param {string} [params.phone] 手机号（模糊查询）
   * @param {number} [params.status] 状态：0禁用，1启用
   * @returns {Promise} 用户列表
   */
  async getUserPage(params) {
    console.log('📋 分页查询用户列表:', params)
    try {
      const result = await get('/user/page', params)
      console.log(`✅ 用户列表查询成功, 共 ${result.data.total} 条记录`)
      return result
    } catch (error) {
      console.error('❌ 查询用户列表失败:', error)
      throw error
    }
  },

  /**
   * 检查用户名是否存在
   * @param {string} username 用户名
   * @param {number} [excludeUserId] 排除的用户ID（用于更新时检查）
   * @returns {Promise} 检查结果
   */
  async checkUsernameExists(username, excludeUserId) {
    console.log(`🔍 检查用户名是否存在: ${username}`)
    try {
      const params = { username }
      if (excludeUserId) {
        params.excludeUserId = excludeUserId
      }
      const result = await get('/user/check-username', params)
      console.log(`✅ 用户名检查完成: ${result.data ? '已存在' : '可用'}`)
      return result
    } catch (error) {
      console.error('❌ 检查用户名失败:', error)
      throw error
    }
  },

  /**
   * 检查手机号是否存在
   * @param {string} phone 手机号
   * @param {number} [excludeUserId] 排除的用户ID（用于更新时检查）
   * @returns {Promise} 检查结果
   */
  async checkPhoneExists(phone, excludeUserId) {
    console.log(`🔍 检查手机号是否存在: ${phone}`)
    try {
      const params = { phone }
      if (excludeUserId) {
        params.excludeUserId = excludeUserId
      }
      const result = await get('/user/check-phone', params)
      console.log(`✅ 手机号检查完成: ${result.data ? '已存在' : '可用'}`)
      return result
    } catch (error) {
      console.error('❌ 检查手机号失败:', error)
      throw error
    }
  },

  /**
   * 检查邮箱是否存在
   * @param {string} email 邮箱
   * @param {number} [excludeUserId] 排除的用户ID（用于更新时检查）
   * @returns {Promise} 检查结果
   */
  async checkEmailExists(email, excludeUserId) {
    console.log(`🔍 检查邮箱是否存在: ${email}`)
    try {
      const params = { email }
      if (excludeUserId) {
        params.excludeUserId = excludeUserId
      }
      const result = await get('/user/check-email', params)
      console.log(`✅ 邮箱检查完成: ${result.data ? '已存在' : '可用'}`)
      return result
    } catch (error) {
      console.error('❌ 检查邮箱失败:', error)
      throw error
    }
  },

  /**
   * 批量删除用户
   * @param {number[]} userIds 用户ID列表
   * @returns {Promise} 删除结果
   */
  async batchDeleteUsers(userIds) {
    console.log(`🗑️ 批量删除用户, 共 ${userIds.length} 个用户:`, userIds)
    try {
      const result = await del('/user/batch', {
        data: userIds
      })
      console.log('✅ 批量删除用户成功')
      return result
    } catch (error) {
      console.error('❌ 批量删除用户失败:', error)
      throw error
    }
  }
}

export default userApi 