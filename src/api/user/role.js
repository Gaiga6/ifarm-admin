import { get, post, put, del } from '@/utils/request'

/**
 * 角色管理 API
 */

/**
 * 创建角色
 * @param {Object} data 角色数据
 * @param {string} data.roleName 角色名称
 * @param {string} data.roleCode 角色编码
 * @param {string} data.description 角色描述
 * @param {number} data.status 状态：0禁用，1启用
 * @param {Array<number>} data.permissionIds 权限ID列表
 * @returns {Promise} 响应结果
 */
export const createRole = (data) => {
  console.log('创建角色:', data)
  return post('/role', data)
}

/**
 * 更新角色
 * @param {Object} data 角色数据
 * @param {number} data.id 角色ID
 * @param {string} data.roleName 角色名称
 * @param {string} data.roleCode 角色编码
 * @param {string} data.description 角色描述
 * @param {number} data.status 状态：0禁用，1启用
 * @param {Array<number>} data.permissionIds 权限ID列表
 * @returns {Promise<boolean>} 更新结果
 */
export const updateRole = (data) => {
  console.log('更新角色:', data)
  return put('/role', data)
}

/**
 * 获取角色详情
 * @param {number} id 角色ID
 * @returns {Promise} 角色详情
 */
export const getRoleDetail = (id) => {
  console.log('获取角色详情:', id)
  return get(`/role/${id}`)
}

/**
 * 删除角色
 * @param {number} id 角色ID
 * @returns {Promise<boolean>} 删除结果
 */
export const deleteRole = (id) => {
  console.log('删除角色:', id)
  return del(`/role/${id}`)
}

/**
 * 分页查询角色列表
 * @param {Object} params 查询参数
 * @param {number} params.current 当前页
 * @param {number} params.size 每页大小
 * @param {string} params.roleName 角色名称
 * @param {string} params.roleCode 角色编码
 * @param {number} params.status 状态
 * @returns {Promise} 分页结果
 */
export const pageRoles = (params) => {
  console.log('分页查询角色列表:', params)
  return get('/role/page', params)
}

/**
 * 获取所有角色列表
 * @returns {Promise} 角色列表
 */
export const getAllRoles = () => {
  console.log('获取所有角色列表')
  return get('/role/list')
}

/**
 * 更新角色状态
 * @param {number} id 角色ID
 * @param {number} status 状态：0禁用，1启用
 * @returns {Promise<boolean>} 更新结果
 */
export const updateRoleStatus = (id, status) => {
  console.log('更新角色状态:', { id, status })
  return put(`/role/${id}/status`, null, { params: { status } })
}

/**
 * 为角色分配权限
 * @param {number} id 角色ID
 * @param {Array<number>} permissionIds 权限ID列表
 * @returns {Promise<boolean>} 分配结果
 */
export const assignPermissions = (id, permissionIds) => {
  console.log('为角色分配权限:', { id, permissionIds })
  return put(`/role/${id}/permissions`, permissionIds)
}

/**
 * 批量删除角色
 * @param {Array<number>} roleIds 角色ID列表
 * @returns {Promise<boolean>} 删除结果
 */
export const batchDeleteRoles = (roleIds) => {
  console.log('批量删除角色:', roleIds)
  return del('/role/batch', {}, { data: roleIds })
} 