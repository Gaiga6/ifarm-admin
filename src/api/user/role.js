import { get, post, put, del } from '../index.js'

/**
 * 角色管理API模块
 */
const roleApi = {
  /**
   * 更新角色
   * @param {object} roleData 角色数据
   * @param {number} roleData.id 角色ID
   * @param {string} roleData.roleName 角色名称
   * @param {string} roleData.roleCode 角色编码
   * @param {string} [roleData.description] 角色描述
   * @param {number} roleData.status 状态：0禁用，1启用
   * @param {number[]} [roleData.permissionIds] 权限ID列表
   * @returns {Promise} 更新结果
   */
  async updateRole(roleData) {
    console.log(`✏️ 更新角色 - Role ID: ${roleData.id}`, roleData)
    try {
      const result = await put('/role', roleData)
      console.log('✅ 角色更新成功')
      return result
    } catch (error) {
      console.error('❌ 更新角色失败:', error)
      throw error
    }
  },

  /**
   * 创建角色
   * @param {object} roleData 角色数据
   * @param {string} roleData.roleName 角色名称
   * @param {string} roleData.roleCode 角色编码
   * @param {string} [roleData.description] 角色描述
   * @param {number} roleData.status 状态：0禁用，1启用
   * @param {number[]} [roleData.permissionIds] 权限ID列表
   * @returns {Promise} 创建结果
   */
  async createRole(roleData) {
    console.log('🔐 创建新角色:', roleData)
    try {
      const result = await post('/role', roleData)
      console.log('✅ 角色创建成功, Role ID:', result.data)
      return result
    } catch (error) {
      console.error('❌ 创建角色失败:', error)
      throw error
    }
  },

  /**
   * 更新角色状态
   * @param {number} id 角色ID
   * @param {number} status 状态：0禁用，1启用
   * @returns {Promise} 更新结果
   */
  async updateRoleStatus(id, status) {
    console.log(`🔄 更新角色状态 - Role ID: ${id}, Status: ${status}`)
    try {
      const result = await put(`/role/${id}/status`, null, {
        params: { status }
      })
      console.log(`✅ 角色状态更新成功: ${status === 1 ? '启用' : '禁用'}`)
      return result
    } catch (error) {
      console.error('❌ 更新角色状态失败:', error)
      throw error
    }
  },

  /**
   * 为角色分配权限
   * @param {number} id 角色ID
   * @param {number[]} permissionIds 权限ID列表
   * @returns {Promise} 分配结果
   */
  async assignPermissions(id, permissionIds) {
    console.log(`🔧 为角色分配权限 - Role ID: ${id}, 权限数量: ${permissionIds.length}`, permissionIds)
    try {
      const result = await put(`/role/${id}/permissions`, permissionIds)
      console.log('✅ 权限分配成功')
      return result
    } catch (error) {
      console.error('❌ 权限分配失败:', error)
      throw error
    }
  },

  /**
   * 获取角色详情
   * @param {number} id 角色ID
   * @returns {Promise} 角色详细信息
   */
  async getRoleDetail(id) {
    console.log(`🔐 获取角色详情 - Role ID: ${id}`)
    try {
      const result = await get(`/role/${id}`)
      console.log('✅ 角色详情获取成功:', result.data)
      return result
    } catch (error) {
      console.error('❌ 获取角色详情失败:', error)
      throw error
    }
  },

  /**
   * 删除角色
   * @param {number} id 角色ID
   * @returns {Promise} 删除结果
   */
  async deleteRole(id) {
    console.log(`🗑️ 删除角色 - Role ID: ${id}`)
    try {
      const result = await del(`/role/${id}`)
      console.log('✅ 角色删除成功')
      return result
    } catch (error) {
      console.error('❌ 删除角色失败:', error)
      throw error
    }
  },

  /**
   * 分页查询角色列表
   * @param {object} params 查询参数
   * @param {number} [params.current] 当前页
   * @param {number} [params.size] 每页大小
   * @param {string} [params.roleName] 角色名称
   * @param {string} [params.roleCode] 角色编码
   * @param {number} [params.status] 状态
   * @returns {Promise} 角色列表
   */
  async pageRoles(params = {}) {
    console.log('📋 分页查询角色列表:', params)
    try {
      const result = await get('/role/page', params)
      console.log(`✅ 角色列表查询成功, 共 ${result.data.total} 条记录`)
      return result
    } catch (error) {
      console.error('❌ 查询角色列表失败:', error)
      throw error
    }
  },

  /**
   * 获取所有角色列表
   * @returns {Promise} 所有启用状态的角色列表
   */
  async getAllRoles() {
    console.log('📋 获取所有角色列表')
    try {
      const result = await get('/role/list')
      console.log(`✅ 角色列表获取成功, 共 ${result.data.length} 个角色`)
      return result
    } catch (error) {
      console.error('❌ 获取角色列表失败:', error)
      throw error
    }
  },

  /**
   * 批量删除角色
   * @param {number[]} roleIds 角色ID列表
   * @returns {Promise} 删除结果
   */
  async batchDeleteRoles(roleIds) {
    console.log(`🗑️ 批量删除角色, 共 ${roleIds.length} 个角色:`, roleIds)
    try {
      const result = await del('/role/batch', {
        data: roleIds
      })
      console.log('✅ 批量删除角色成功')
      return result
    } catch (error) {
      console.error('❌ 批量删除角色失败:', error)
      throw error
    }
  }
}

export default roleApi 