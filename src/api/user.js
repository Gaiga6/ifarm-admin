/**
 * @creater      : pandas
 * @since        : 2025-06-28 18:47:41
 * @lastTime     : 2025-06-28 21:11:26
 * @LastAuthor   : pands
 * @Description  : 
 */
/**
 * @Description  : 用户相关API接口
 */
import api from './index'

/**
 * 分页查询用户列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {string} params.username - 用户名，可选
 * @param {string} params.phone - 手机号，可选
 * @param {string} params.status - 状态，可选
 * @returns {Promise}
 */
export function getUserList(params) {
  return api.get('/system/user/page', { params })
}

/**
 * 查询用户详情
 * @param {number} id - 用户ID
 * @returns {Promise}
 */
export function getUserDetail(id) {
  return api.get(`/system/user/${id}`)
}

/**
 * 创建用户
 * @param {Object} data - 用户数据
 * @returns {Promise}
 */
export function createUser(data) {
  return api.post('/system/user', data)
}

/**
 * 更新用户信息
 * @param {number} id - 用户ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateUser(id, data) {
  return api.put(`/system/user/${id}`, data)
}

/**
 * 修改用户密码
 * @param {number} id - 用户ID
 * @param {Object} data - 密码数据
 * @returns {Promise}
 */
export function updateUserPassword(id, data) {
  return api.put(`/system/user/${id}/password`, data)
}

/**
 * 删除用户
 * @param {number} id - 用户ID
 * @returns {Promise}
 */
export function deleteUser(id) {
  return api.delete(`/system/user/${id}`)
}

/**
 * 查询用户地址列表
 * @returns {Promise}
 */
export function getUserAddressList() {
  return api.get('/system/user-addresses')
}

/**
 * 创建用户地址
 * @param {Object} data - 地址数据
 * @returns {Promise}
 */
export function createUserAddress(data) {
  return api.post('/system/user-addresses', data)
}

/**
 * 更新用户地址
 * @param {number} id - 地址ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateUserAddress(id, data) {
  return api.put(`/system/user-addresses/${id}`, data)
}

/**
 * 删除用户地址
 * @param {number} id - 地址ID
 * @returns {Promise}
 */
export function deleteUserAddress(id) {
  return api.delete(`/system/user-addresses/${id}`)
}




// ==================== 角色管理 ====================

/**
 * 分页查询角色列表
 * @param {Object} params - 查询参数
 * @param {number} params.page - 页码，默认1
 * @param {number} params.size - 每页大小，默认10
 * @param {string} params.roleName - 角色名称，可选
 * @param {string} params.roleCode - 角色编码，可选
 * @returns {Promise}
 */
export function getRoleList(params) {
  return api.get('/system/role/page', { params })
}

/**
 * 查询角色详情
 * @param {number} id - 角色ID
 * @returns {Promise}
 */
export function getRoleDetail(id) {
  return api.get(`/system/roles/${id}`)
}

/**
 * 创建角色
 * @param {Object} data - 角色数据
 * @param {string} data.roleName - 角色名称
 * @param {string} data.roleCode - 角色编码
 * @param {string} data.description - 角色描述
 * @returns {Promise}
 */
export function createRole(data) {
  return api.post('/system/roles', data)
}

/**
 * 更新角色
 * @param {number} id - 角色ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updateRole(id, data) {
  return api.put(`/system/roles/${id}`, data)
}

/**
 * 删除角色
 * @param {number} id - 角色ID
 * @returns {Promise}
 */
export function deleteRole(id) {
  return api.delete(`/system/roles/${id}`)
}

/**
 * 分配角色权限
 * @param {number} roleId - 角色ID
 * @param {Object} data - 权限数据
 * @param {Array<number>} data.permissionIds - 权限ID数组
 * @returns {Promise}
 */
export function assignRolePermissions(roleId, data) {
  return api.post(`/system/roles/${roleId}/permissions`, data)
}

/**
 * 查询角色权限
 * @param {number} roleId - 角色ID
 * @returns {Promise}
 */
export function getRolePermissions(roleId) {
  return api.get(`/system/roles/${roleId}/permissions`)
}

// ==================== 权限管理 ====================

/**
 * 查询权限树
 * @returns {Promise}
 */
export function getPermissionTree() {
  return api.get('/system/permissions/tree')
}

/**
 * 查询权限列表
 * @param {Object} params - 查询参数
 * @returns {Promise}
 */
export function getPermissionList(params) {
  return api.get('/system/permissions', { params })
}

/**
 * 查询权限详情
 * @param {number} id - 权限ID
 * @returns {Promise}
 */
export function getPermissionDetail(id) {
  return api.get(`/system/permissions/${id}`)
}

/**
 * 创建权限
 * @param {Object} data - 权限数据
 * @param {string} data.name - 权限名称
 * @param {string} data.code - 权限编码
 * @param {string} data.type - 权限类型
 * @param {number} data.parentId - 父权限ID
 * @returns {Promise}
 */
export function createPermission(data) {
  return api.post('/system/permissions', data)
}

/**
 * 更新权限
 * @param {number} id - 权限ID
 * @param {Object} data - 更新数据
 * @returns {Promise}
 */
export function updatePermission(id, data) {
  return api.put(`/system/permissions/${id}`, data)
}

/**
 * 删除权限
 * @param {number} id - 权限ID
 * @returns {Promise}
 */
export function deletePermission(id) {
  return api.delete(`/system/permissions/${id}`)
}


