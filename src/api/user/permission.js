import { get, post, put, del } from '../index.js'

/**
 * 权限管理API模块
 */
const permissionApi = {
  /**
   * 更新权限
   * @param {object} permissionData 权限数据
   * @param {number} permissionData.id 权限ID
   * @param {number} [permissionData.parentId] 父权限ID
   * @param {string} permissionData.permissionName 权限名称
   * @param {string} permissionData.permissionCode 权限编码
   * @param {number} permissionData.permissionType 权限类型：1目录，2菜单，3按钮，4接口
   * @param {string} [permissionData.component] 前端组件路径
   * @param {string} [permissionData.path] 前端路由路径
   * @param {string} [permissionData.icon] 图标
   * @param {number} [permissionData.sort] 排序
   * @param {number} permissionData.status 状态：0禁用，1启用
   * @returns {Promise} 更新结果
   */
  async updatePermission(permissionData) {
    console.log(`✏️ 更新权限 - Permission ID: ${permissionData.id}`, permissionData)
    try {
      const result = await put('/permission', permissionData)
      console.log('✅ 权限更新成功')
      return result
    } catch (error) {
      console.error('❌ 更新权限失败:', error)
      throw error
    }
  },

  /**
   * 创建权限
   * @param {object} permissionData 权限数据
   * @param {number} [permissionData.parentId] 父权限ID
   * @param {string} permissionData.permissionName 权限名称
   * @param {string} permissionData.permissionCode 权限编码
   * @param {number} permissionData.permissionType 权限类型：1目录，2菜单，3按钮，4接口
   * @param {string} [permissionData.component] 前端组件路径
   * @param {string} [permissionData.path] 前端路由路径
   * @param {string} [permissionData.icon] 图标
   * @param {number} [permissionData.sort] 排序
   * @param {number} permissionData.status 状态：0禁用，1启用
   * @returns {Promise} 创建结果
   */
  async createPermission(permissionData) {
    console.log('🔧 创建新权限:', permissionData)
    try {
      const result = await post('/permission', permissionData)
      console.log('✅ 权限创建成功, Permission ID:', result.data)
      return result
    } catch (error) {
      console.error('❌ 创建权限失败:', error)
      throw error
    }
  },

  /**
   * 更新权限状态
   * @param {number} id 权限ID
   * @param {number} status 状态：0禁用，1启用
   * @returns {Promise} 更新结果
   */
  async updatePermissionStatus(id, status) {
    console.log(`🔄 更新权限状态 - Permission ID: ${id}, Status: ${status}`)
    try {
      const result = await put(`/permission/${id}/status`, null, {
        params: { status }
      })
      console.log(`✅ 权限状态更新成功: ${status === 1 ? '启用' : '禁用'}`)
      return result
    } catch (error) {
      console.error('❌ 更新权限状态失败:', error)
      throw error
    }
  },

  /**
   * 获取权限详情
   * @param {number} id 权限ID
   * @returns {Promise} 权限详细信息
   */
  async getPermissionDetail(id) {
    console.log(`🔧 获取权限详情 - Permission ID: ${id}`)
    try {
      const result = await get(`/permission/${id}`)
      console.log('✅ 权限详情获取成功:', result.data)
      return result
    } catch (error) {
      console.error('❌ 获取权限详情失败:', error)
      throw error
    }
  },

  /**
   * 删除权限
   * @param {number} id 权限ID
   * @returns {Promise} 删除结果
   */
  async deletePermission(id) {
    console.log(`🗑️ 删除权限 - Permission ID: ${id}`)
    try {
      const result = await del(`/permission/${id}`)
      console.log('✅ 权限删除成功')
      return result
    } catch (error) {
      console.error('❌ 删除权限失败:', error)
      throw error
    }
  },

  /**
   * 获取用户菜单权限树
   * @param {number} userId 用户ID
   * @returns {Promise} 用户菜单权限树
   */
  async getUserMenuTree(userId) {
    console.log(`🌳 获取用户菜单权限树 - User ID: ${userId}`)
    try {
      const result = await get(`/permission/user/${userId}/menu`)
      console.log(`✅ 用户菜单权限树获取成功, 共 ${result.data.length} 个菜单`)
      return result
    } catch (error) {
      console.error('❌ 获取用户菜单权限树失败:', error)
      throw error
    }
  },

  /**
   * 根据类型获取权限列表
   * @param {number} permissionType 权限类型：1目录，2菜单，3按钮，4接口
   * @returns {Promise} 权限列表
   */
  async getPermissionsByType(permissionType) {
    console.log(`📋 根据类型获取权限列表 - Type: ${permissionType}`)
    const typeDesc = {
      1: '目录',
      2: '菜单',
      3: '按钮',
      4: '接口'
    }
    try {
      const result = await get(`/permission/type/${permissionType}`)
      console.log(`✅ ${typeDesc[permissionType]}权限列表获取成功, 共 ${result.data.length} 个权限`)
      return result
    } catch (error) {
      console.error('❌ 根据类型获取权限列表失败:', error)
      throw error
    }
  },

  /**
   * 获取权限树
   * @returns {Promise} 权限树形结构
   */
  async getPermissionTree() {
    console.log('🌳 获取权限树形结构')
    try {
      const result = await get('/permission/tree')
      console.log(`✅ 权限树获取成功, 共 ${result.data.length} 个顶级权限`)
      return result
    } catch (error) {
      console.error('❌ 获取权限树失败:', error)
      throw error
    }
  },

  /**
   * 分页查询权限列表
   * @param {object} params 查询参数
   * @param {number} [params.current] 当前页
   * @param {number} [params.size] 每页大小
   * @param {string} [params.permissionName] 权限名称
   * @param {string} [params.permissionCode] 权限编码
   * @param {number} [params.permissionType] 权限类型
   * @param {number} [params.status] 状态
   * @returns {Promise} 权限列表
   */
  async pagePermissions(params = {}) {
    console.log('📋 分页查询权限列表:', params)
    try {
      const result = await get('/permission/page', params)
      console.log(`✅ 权限列表查询成功, 共 ${result.data.total} 条记录`)
      return result
    } catch (error) {
      console.error('❌ 查询权限列表失败:', error)
      throw error
    }
  },

  /**
   * 获取子权限列表
   * @param {number} parentId 父权限ID
   * @returns {Promise} 子权限列表
   */
  async getPermissionsByParentId(parentId) {
    console.log(`📋 获取子权限列表 - Parent ID: ${parentId}`)
    try {
      const result = await get(`/permission/children/${parentId}`)
      console.log(`✅ 子权限列表获取成功, 共 ${result.data.length} 个子权限`)
      return result
    } catch (error) {
      console.error('❌ 获取子权限列表失败:', error)
      throw error
    }
  },

  /**
   * 批量删除权限
   * @param {number[]} permissionIds 权限ID列表
   * @returns {Promise} 删除结果
   */
  async batchDeletePermissions(permissionIds) {
    console.log(`🗑️ 批量删除权限, 共 ${permissionIds.length} 个权限:`, permissionIds)
    try {
      const result = await del('/permission/batch', {
        data: permissionIds
      })
      console.log('✅ 批量删除权限成功')
      return result
    } catch (error) {
      console.error('❌ 批量删除权限失败:', error)
      throw error
    }
  }
}

export default permissionApi 