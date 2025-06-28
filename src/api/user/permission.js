import { get, post, put, del } from '@/utils/request'

/**
 * 权限管理 API
 */

/**
 * 创建权限
 * @param {Object} data 权限数据
 * @param {string} data.permissionName 权限名称
 * @param {string} data.permissionCode 权限编码
 * @param {string} data.description 权限描述
 * @param {number} data.parentId 父权限ID，0表示根权限
 * @param {string} data.type 权限类型：menu菜单，button按钮，api接口
 * @param {string} data.path 路径
 * @param {string} data.icon 图标
 * @param {number} data.sort 排序号
 * @param {number} data.status 状态：0禁用，1启用
 * @returns {Promise} 响应结果
 */
export const createPermission = (data) => {
  console.log('创建权限:', data)
  return post('/permission', data)
}

/**
 * 更新权限
 * @param {Object} data 权限数据
 * @param {number} data.id 权限ID
 * @param {string} data.permissionName 权限名称
 * @param {string} data.permissionCode 权限编码
 * @param {string} data.description 权限描述
 * @param {number} data.parentId 父权限ID，0表示根权限
 * @param {string} data.type 权限类型：menu菜单，button按钮，api接口
 * @param {string} data.path 路径
 * @param {string} data.icon 图标
 * @param {number} data.sort 排序号
 * @param {number} data.status 状态：0禁用，1启用
 * @returns {Promise<boolean>} 更新结果
 */
export const updatePermission = (data) => {
  console.log('更新权限:', data)
  return put('/permission', data)
}

/**
 * 获取权限详情
 * @param {number} id 权限ID
 * @returns {Promise} 权限详情
 */
export const getPermissionDetail = (id) => {
  console.log('获取权限详情:', id)
  return get(`/permission/${id}`)
}

/**
 * 删除权限
 * @param {number} id 权限ID
 * @returns {Promise<boolean>} 删除结果
 */
export const deletePermission = (id) => {
  console.log('删除权限:', id)
  return del(`/permission/${id}`)
}

/**
 * 获取权限树形列表
 * @param {Object} params 查询参数
 * @param {string} params.permissionName 权限名称（模糊查询）
 * @param {string} params.type 权限类型
 * @param {number} params.status 状态
 * @returns {Promise} 权限树形列表
 */
export const getPermissionTree = (params = {}) => {
  console.log('获取权限树形列表:', params)
  return get('/permission/tree', params)
}

/**
 * 获取所有权限列表
 * @returns {Promise} 权限列表
 */
export const getAllPermissions = () => {
  console.log('获取所有权限列表')
  return get('/permission/list')
}

/**
 * 更新权限状态
 * @param {number} id 权限ID
 * @param {number} status 状态：0禁用，1启用
 * @returns {Promise<boolean>} 更新结果
 */
export const updatePermissionStatus = (id, status) => {
  console.log('更新权限状态:', { id, status })
  return put(`/permission/${id}/status`, null, { params: { status } })
}

/**
 * 获取用户权限列表
 * @param {number} userId 用户ID
 * @returns {Promise} 权限列表
 */
export const getUserPermissions = (userId) => {
  console.log('获取用户权限列表:', userId)
  return get(`/permission/user/${userId}`)
}

/**
 * 获取角色权限列表
 * @param {number} roleId 角色ID
 * @returns {Promise} 权限列表
 */
export const getRolePermissions = (roleId) => {
  console.log('获取角色权限列表:', roleId)
  return get(`/permission/role/${roleId}`)
}

/**
 * 获取菜单权限列表
 * @param {number} userId 用户ID
 * @returns {Promise} 菜单权限列表
 */
export const getMenuPermissions = (userId) => {
  console.log('获取菜单权限列表:', userId)
  return get(`/permission/menu/${userId}`)
}

/**
 * 检查权限编码是否存在
 * @param {string} permissionCode 权限编码
 * @param {number} excludeId 排除的权限ID（用于更新时检查）
 * @returns {Promise<boolean>} 是否存在
 */
export const checkPermissionCodeExists = (permissionCode, excludeId = null) => {
  console.log('检查权限编码是否存在:', { permissionCode, excludeId })
  const params = { permissionCode }
  if (excludeId) params.excludeId = excludeId
  return get('/permission/check-code', params)
} 