/**
 * 用户管理模块统一导出
 * 
 * 本文件统一导出用户管理相关的所有API模块
 * 包含：用户管理、地址管理、角色管理、权限管理
 */

import userApi from './user.js'
import addressApi from './address.js'
import roleApi from './role.js'
import permissionApi from './permission.js'

/**
 * 统一导出用户管理相关API
 * 
 * 使用方式：
 * import userModule from '@/api/user'
 * 
 * // 用户相关
 * userModule.user.getUserDetail(1)
 * userModule.user.createUser(userData)
 * 
 * // 地址相关
 * userModule.address.getUserAddressList(1)
 * userModule.address.createAddress(1, addressData)
 * 
 * // 角色相关
 * userModule.role.getAllRoles()
 * userModule.role.createRole(roleData)
 * 
 * // 权限相关
 * userModule.permission.getPermissionTree()
 * userModule.permission.getUserMenuTree(1)
 */
const userModule = {
  user: userApi,
  address: addressApi,
  role: roleApi,
  permission: permissionApi
}

// 默认导出整个模块
export default userModule

// 也可以单独导出各个API
export { userApi, addressApi, roleApi, permissionApi } 