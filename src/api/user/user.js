import { get, post, put, del } from '@/utils/request'

/**
 * 用户管理 API
 */

/**
 * 创建用户
 * @param {Object} data 用户数据
 * @param {string} data.username 用户名
 * @param {string} data.nickname 昵称
 * @param {string} data.password 密码
 * @param {string} data.phone 手机号
 * @param {string} data.email 邮箱
 * @param {string} data.avatar 头像URL
 * @param {number} data.gender 性别：0未知，1男，2女
 * @param {string} data.birthday 生日
 * @param {string} data.address 地址
 * @param {string} data.realName 真实姓名
 * @param {string} data.idCard 身份证号
 * @param {number} data.status 状态：0禁用，1启用
 * @returns {Promise} 响应结果
 */
export const createUser = (data) => {
  console.log('创建用户:', data)
  return post('/user', data)
}

/**
 * 更新用户信息
 * @param {number} userId 用户ID
 * @param {Object} data 用户数据
 * @param {string} data.nickname 昵称
 * @param {string} data.phone 手机号
 * @param {string} data.email 邮箱
 * @param {string} data.avatar 头像URL
 * @param {number} data.gender 性别：0未知，1男，2女
 * @param {string} data.birthday 生日
 * @param {string} data.address 地址
 * @param {string} data.realName 真实姓名
 * @param {string} data.idCard 身份证号
 * @param {number} data.status 状态：0禁用，1启用
 * @returns {Promise} 响应结果
 */
export const updateUser = (userId, data) => {
  console.log('更新用户信息:', { userId, ...data })
  return put(`/user/${userId}`, data)
}

/**
 * 获取用户详情
 * @param {number} userId 用户ID
 * @returns {Promise} 用户详情
 */
export const getUserDetail = (userId) => {
  console.log('获取用户详情:', userId)
  return get(`/user/${userId}`)
}

/**
 * 删除用户
 * @param {number} userId 用户ID
 * @returns {Promise<boolean>} 删除结果
 */
export const deleteUser = (userId) => {
  console.log('删除用户:', userId)
  return del(`/user/${userId}`)
}

/**
 * 分页查询用户列表
 * @param {Object} params 查询参数
 * @param {number} params.current 当前页
 * @param {number} params.size 每页大小
 * @param {string} params.username 用户名（模糊查询）
 * @param {string} params.phone 手机号（模糊查询）
 * @param {number} params.status 状态：0禁用，1启用
 * @returns {Promise} 分页结果
 */
export const getUserPage = (params) => {
  console.log('分页查询用户列表:', params)
  return get('/user/page', params)
}

/**
 * 修改用户状态
 * @param {number} userId 用户ID
 * @param {number} status 状态：0禁用，1启用
 * @returns {Promise<boolean>} 修改结果
 */
export const changeUserStatus = (userId, status) => {
  console.log('修改用户状态:', { userId, status })
  return put(`/user/${userId}/status`, null, { params: { status } })
}

/**
 * 重置密码
 * @param {number} userId 用户ID
 * @param {string} newPassword 新密码
 * @returns {Promise<boolean>} 重置结果
 */
export const resetPassword = (userId, newPassword) => {
  console.log('重置密码:', { userId, newPassword: '******' })
  return put(`/user/${userId}/reset-password`, null, { params: { newPassword } })
}

/**
 * 修改密码
 * @param {number} userId 用户ID
 * @param {Object} data 密码数据
 * @param {string} data.oldPassword 原密码
 * @param {string} data.newPassword 新密码
 * @param {string} data.confirmPassword 确认新密码
 * @returns {Promise<boolean>} 修改结果
 */
export const changePassword = (userId, data) => {
  console.log('修改密码:', { userId, data: { ...data, oldPassword: '******', newPassword: '******', confirmPassword: '******' } })
  return put(`/user/${userId}/password`, data)
}

/**
 * 检查用户名是否存在
 * @param {string} username 用户名
 * @param {number} excludeUserId 排除的用户ID（用于更新时检查）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkUsernameExists = (username, excludeUserId = null) => {
  console.log('检查用户名是否存在:', { username, excludeUserId })
  const params = { username }
  if (excludeUserId) params.excludeUserId = excludeUserId
  return get('/user/check-username', params)
}

/**
 * 检查手机号是否存在
 * @param {string} phone 手机号
 * @param {number} excludeUserId 排除的用户ID（用于更新时检查）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkPhoneExists = (phone, excludeUserId = null) => {
  console.log('检查手机号是否存在:', { phone, excludeUserId })
  const params = { phone }
  if (excludeUserId) params.excludeUserId = excludeUserId
  return get('/user/check-phone', params)
}

/**
 * 检查邮箱是否存在
 * @param {string} email 邮箱
 * @param {number} excludeUserId 排除的用户ID（用于更新时检查）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkEmailExists = (email, excludeUserId = null) => {
  console.log('检查邮箱是否存在:', { email, excludeUserId })
  const params = { email }
  if (excludeUserId) params.excludeUserId = excludeUserId
  return get('/user/check-email', params)
}

/**
 * 批量删除用户
 * @param {Array<number>} userIds 用户ID列表
 * @returns {Promise<boolean>} 删除结果
 */
export const batchDeleteUsers = (userIds) => {
  console.log('批量删除用户:', userIds)
  return del('/user/batch', {}, { data: userIds })
} 