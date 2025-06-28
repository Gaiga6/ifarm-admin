/**
 * 用户管理模块API使用示例
 * 
 * 本文件展示了如何使用重新组织后的用户管理API
 * 在实际开发中，您可以删除此文件
 */

import userModule from './index.js'

/**
 * 用户管理示例
 */
export const userExamples = {
  // 获取用户详情
  async getUserDetailExample() {
    try {
      const result = await userModule.user.getUserDetail(1)
      console.log('用户详情:', result.data)
      return result.data
    } catch (error) {
      console.error('获取用户详情失败:', error)
    }
  },

  // 创建用户
  async createUserExample() {
    const userData = {
      username: 'testuser',
      nickname: '测试用户',
      password: '123456',
      phone: '13800138000',
      email: 'test@example.com',
      gender: 1,
      status: 1
    }
    
    try {
      const result = await userModule.user.createUser(userData)
      console.log('用户创建成功, ID:', result.data)
      return result.data
    } catch (error) {
      console.error('创建用户失败:', error)
    }
  },

  // 分页查询用户
  async getUserPageExample() {
    const params = {
      current: 1,
      size: 10,
      username: '测试',
      status: 1
    }
    
    try {
      const result = await userModule.user.getUserPage(params)
      console.log('用户列表:', result.data)
      return result.data
    } catch (error) {
      console.error('查询用户列表失败:', error)
    }
  }
}

/**
 * 地址管理示例
 */
export const addressExamples = {
  // 创建地址
  async createAddressExample() {
    const addressData = {
      contactName: '张三',
      contactPhone: '13800138000',
      provinceCode: '110000',
      provinceName: '北京市',
      cityCode: '110100',
      cityName: '北京市',
      districtCode: '110101',
      districtName: '东城区',
      detailAddress: '王府井大街1号',
      addressType: 1,
      isDefault: 1
    }
    
    try {
      const result = await userModule.address.createAddress(1, addressData)
      console.log('地址创建成功, ID:', result.data)
      return result.data
    } catch (error) {
      console.error('创建地址失败:', error)
    }
  },

  // 获取用户地址列表
  async getUserAddressListExample() {
    try {
      const result = await userModule.address.getUserAddressList(1)
      console.log('地址列表:', result.data)
      return result.data
    } catch (error) {
      console.error('获取地址列表失败:', error)
    }
  }
}

/**
 * 角色管理示例
 */
export const roleExamples = {
  // 创建角色
  async createRoleExample() {
    const roleData = {
      roleName: '测试角色',
      roleCode: 'TEST_ROLE',
      description: '这是一个测试角色',
      status: 1,
      permissionIds: [1, 2, 3]
    }
    
    try {
      const result = await userModule.role.createRole(roleData)
      console.log('角色创建成功, ID:', result.data)
      return result.data
    } catch (error) {
      console.error('创建角色失败:', error)
    }
  },

  // 获取所有角色
  async getAllRolesExample() {
    try {
      const result = await userModule.role.getAllRoles()
      console.log('角色列表:', result.data)
      return result.data
    } catch (error) {
      console.error('获取角色列表失败:', error)
    }
  },

  // 分页查询角色
  async pageRolesExample() {
    const params = {
      current: 1,
      size: 10,
      roleName: '管理员'
    }
    
    try {
      const result = await userModule.role.pageRoles(params)
      console.log('角色分页列表:', result.data)
      return result.data
    } catch (error) {
      console.error('查询角色列表失败:', error)
    }
  }
}

/**
 * 权限管理示例
 */
export const permissionExamples = {
  // 创建权限
  async createPermissionExample() {
    const permissionData = {
      permissionName: '用户管理',
      permissionCode: 'user:manage',
      permissionType: 2,
      component: 'UserManage',
      path: '/user/manage',
      icon: 'user',
      sort: 1,
      status: 1
    }
    
    try {
      const result = await userModule.permission.createPermission(permissionData)
      console.log('权限创建成功, ID:', result.data)
      return result.data
    } catch (error) {
      console.error('创建权限失败:', error)
    }
  },

  // 获取权限树
  async getPermissionTreeExample() {
    try {
      const result = await userModule.permission.getPermissionTree()
      console.log('权限树:', result.data)
      return result.data
    } catch (error) {
      console.error('获取权限树失败:', error)
    }
  },

  // 获取用户菜单权限树
  async getUserMenuTreeExample() {
    try {
      const result = await userModule.permission.getUserMenuTree(1)
      console.log('用户菜单权限树:', result.data)
      return result.data
    } catch (error) {
      console.error('获取用户菜单权限树失败:', error)
    }
  }
}

/**
 * 综合使用示例
 */
export const integratedExamples = {
  // 完整的用户创建流程
  async completeUserCreationFlow() {
    console.log('🚀 开始完整的用户创建流程')
    
    try {
      // 1. 检查用户名是否存在
      const usernameCheck = await userModule.user.checkUsernameExists('newuser')
      if (usernameCheck.data) {
        console.log('❌ 用户名已存在')
        return
      }
      
      // 2. 创建用户
      const userData = {
        username: 'newuser',
        nickname: '新用户',
        password: '123456',
        phone: '13900139000',
        email: 'newuser@example.com',
        status: 1
      }
      const userResult = await userModule.user.createUser(userData)
      const userId = userResult.data
      console.log(`✅ 用户创建成功, ID: ${userId}`)
      
      // 3. 为用户创建地址
      const addressData = {
        contactName: '新用户',
        contactPhone: '13900139000',
        detailAddress: '测试地址123号',
        addressType: 1,
        isDefault: 1
      }
      const addressResult = await userModule.address.createAddress(userId, addressData)
      console.log(`✅ 地址创建成功, ID: ${addressResult.data}`)
      
      // 4. 获取用户详情（包含地址）
      const userDetail = await userModule.user.getUserDetail(userId)
      const addressList = await userModule.address.getUserAddressList(userId)
      
      console.log('✅ 用户创建流程完成!')
      return {
        user: userDetail.data,
        addresses: addressList.data
      }
      
    } catch (error) {
      console.error('❌ 用户创建流程失败:', error)
      throw error
    }
  },

  // 完整的角色权限管理流程
  async completeRolePermissionFlow() {
    console.log('🚀 开始角色权限管理流程')
    
    try {
      // 1. 获取权限树
      const permissionTree = await userModule.permission.getPermissionTree()
      console.log('✅ 权限树获取成功')
      
      // 2. 创建新角色
      const roleData = {
        roleName: '内容管理员',
        roleCode: 'CONTENT_ADMIN',
        description: '负责内容管理的角色',
        status: 1,
        permissionIds: [1, 2, 3, 4] // 假设这些是内容相关的权限ID
      }
      const roleResult = await userModule.role.createRole(roleData)
      const roleId = roleResult.data
      console.log(`✅ 角色创建成功, ID: ${roleId}`)
      
      // 3. 为角色分配更多权限
      const additionalPermissions = [5, 6, 7]
      await userModule.role.assignPermissions(roleId, [...roleData.permissionIds, ...additionalPermissions])
      console.log('✅ 权限分配成功')
      
      // 4. 获取角色详情
      const roleDetail = await userModule.role.getRoleDetail(roleId)
      console.log('✅ 角色详情获取成功')
      
      console.log('✅ 角色权限管理流程完成!')
      return {
        role: roleDetail.data,
        permissions: permissionTree.data
      }
      
    } catch (error) {
      console.error('❌ 角色权限管理流程失败:', error)
      throw error
    }
  }
}

// 默认导出所有示例
export default {
  user: userExamples,
  address: addressExamples,
  role: roleExamples,
  permission: permissionExamples,
  integrated: integratedExamples
} 