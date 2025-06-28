/**
 * 用户管理模块 API 统一导出
 */

// 用户管理 API
export * as userApi from './user.js'

// 用户地址管理 API
export * as addressApi from './address.js'

// 角色管理 API
export * as roleApi from './role.js'

// 权限管理 API
export * as permissionApi from './permission.js'

// 默认导出（方便使用）
export { default as userService } from './user.js'
export { default as addressService } from './address.js'
export { default as roleService } from './role.js'
export { default as permissionService } from './permission.js' 