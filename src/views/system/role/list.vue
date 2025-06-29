<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 搜索区域 -->
      <div class="search-section">
        <el-form :model="searchForm" ref="searchFormRef" class="search-form">
          <div class="search-grid">
            <el-form-item label="角色名称" prop="roleName">
              <el-input
                v-model="searchForm.roleName"
                placeholder="请输入角色名称"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="角色编码" prop="roleCode">
              <el-input
                v-model="searchForm.roleCode"
                placeholder="请输入角色编码"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="状态" prop="status">
              <el-select v-model="searchForm.status" placeholder="请选择状态" clearable>
                <el-option label="启用" :value="1" />
                <el-option label="禁用" :value="0" />
              </el-select>
            </el-form-item>
            <div class="search-actions">
              <el-button type="primary" @click="handleSearch">
                <el-icon><Search /></el-icon>
                搜索
              </el-button>
              <el-button @click="handleReset">
                <el-icon><Refresh /></el-icon>
                重置
              </el-button>
            </div>
          </div>
        </el-form>
      </div>

      <!-- 操作栏 -->
      <div class="action-bar">
        <div class="action-left">
          <el-button type="primary" @click="handleAdd">
            <el-icon><Plus /></el-icon>
            <span>新增角色</span>
          </el-button>
          <el-button 
            type="danger" 
            :disabled="multipleSelection.length === 0"
            @click="handleBatchDelete"
          >
            <el-icon><Delete /></el-icon>
            <span>批量删除</span>
          </el-button>
        </div>
        <div class="action-right">
          <span class="total-info">共 {{ pageInfo?.total || 0 }} 条记录</span>
        </div>
      </div>

      <!-- 表格 -->
      <div class="data-table">
        <el-table
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="roleId" label="角色ID" width="80" />
          <el-table-column prop="roleName" label="角色名称" min-width="120" />
          <el-table-column prop="roleCode" label="角色编码" min-width="120" />
          <el-table-column prop="description" label="描述" min-width="150" show-overflow-tooltip />
          <el-table-column prop="status" label="状态" width="120">
            <template #default="{ row }">
              <el-switch
                v-model="row.status"
                :active-value="1"
                :inactive-value="0"
                @change="handleStatusChange(row)"
              />
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180">
            <template #default="{ row }">
              {{ formatDate(row.createTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="280" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <button class="action-btn edit-btn" @click="handleEdit(row)">
                  编辑
                </button>
                <button class="action-btn assign-btn" @click="handleAssignPermissions(row)">
                  分配权限
                </button>
                <button class="action-btn delete-btn" @click="handleDelete(row)">
                  删除
                </button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="pagination-container">
        <div class="pagination-info">
          显示第 {{ (pageInfo.current - 1) * pageInfo.size + 1 }} 到 {{ Math.min(pageInfo.current * pageInfo.size, pageInfo.total) }} 条，共 {{ pageInfo.total }} 条
        </div>
        <el-pagination
          v-model:current-page="pageInfo.current"
          v-model:page-size="pageInfo.size"
          :page-sizes="[10, 20, 50, 100]"
          :total="pageInfo.total"
          layout="sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 添加/编辑角色对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogType === 'add' ? '新增角色' : '编辑角色'"
      width="500px"
      @close="handleDialogClose"
    >
      <el-form
        ref="roleFormRef"
        :model="roleForm"
        :rules="roleFormRules"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="roleForm.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="角色编码" prop="roleCode">
          <el-input v-model="roleForm.roleCode" placeholder="请输入角色编码" />
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input
            v-model="roleForm.description"
            type="textarea"
            :rows="3"
            placeholder="请输入角色描述"
          />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="roleForm.status">
                <el-radio :value="1">启用</el-radio>
                <el-radio :value="0">禁用</el-radio>
              </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit" :loading="submitLoading">
          确定
        </el-button>
      </template>
    </el-dialog>

    <!-- 权限分配对话框 -->
    <el-dialog
      v-model="permissionDialogVisible"
      :title="`为角色「${currentRole?.roleName}」分配权限`"
      width="700px"
      @close="handlePermissionDialogClose"
    >
      <!-- 权限统计信息 -->
      <div class="permission-stats" v-if="currentRole">
        <el-alert
          :title="`当前已分配 ${checkedPermissionIds.length} 个权限，共 ${getAllPermissionIds(permissionTreeData).length} 个权限可分配`"
          type="info"
          :closable="false"
          style="margin-bottom: 16px;"
        />
      </div>
      
      <div style="max-height: 400px; overflow-y: auto;">
        <el-tree
          ref="permissionTreeRef"
          :data="permissionTreeData"
          :props="treeProps"
          node-key="id"
          show-checkbox
          :default-expand-all="true"
          @check="handlePermissionCheck"
        />
      </div>
      <template #footer>
        <el-button @click="permissionDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSavePermissions" :loading="permissionSubmitLoading">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Refresh, Plus, Edit, Delete, Setting } from '@element-plus/icons-vue'
import { roleApi, permissionApi } from '@/api/user'
import { id } from 'element-plus/es/locales.mjs'

// 响应式数据
const loading = ref(false)
const submitLoading = ref(false)
const permissionSubmitLoading = ref(false)
const tableData = ref([])
const multipleSelection = ref([])
const dialogVisible = ref(false)
const permissionDialogVisible = ref(false)
const dialogType = ref('add') // add | edit
const currentRole = ref(null)

// 权限相关数据
const permissionTreeData = ref([])
const checkedPermissionIds = ref([])
const treeProps = {
  children: 'children',
  label: 'permissionName'
}

// 搜索表单
const searchForm = reactive({
  roleName: '',
  roleCode: '',
  status: null
})

// 分页信息
const pageInfo = reactive({
  current: 1,
  size: 10,
  total: 0
})

// 角色表单
const roleForm = reactive({
  id: null,
  roleName: '',
  roleCode: '',
  description: '',
  status: 1
})

// 表单验证规则
const roleFormRules = {
  roleName: [
    { required: true, message: '请输入角色名称', trigger: 'blur' },
    { min: 2, max: 50, message: '角色名称长度为 2 到 50 个字符', trigger: 'blur' }
  ],
  roleCode: [
    { required: true, message: '请输入角色编码', trigger: 'blur' },
    { min: 2, max: 50, message: '角色编码长度为 2 到 50 个字符', trigger: 'blur' },
    { pattern: /^[A-Z_]+$/, message: '角色编码只能包含大写字母和下划线', trigger: 'blur' }
  ],
  description: [
    { max: 200, message: '角色描述最多 200 个字符', trigger: 'blur' }
  ]
}

// refs
const searchFormRef = ref()
const roleFormRef = ref()
const permissionTreeRef = ref()

// 方法
const fetchRoleList = async () => {
  loading.value = true
  try {
    const params = {
      current: pageInfo.current,
      size: pageInfo.size,
      ...searchForm
    }
    const result = await roleApi.pageRoles(params)
    tableData.value = result.records || []
    pageInfo.total = result.total || 0
  } catch (error) {
    console.error('获取角色列表失败:', error)
    ElMessage.error('获取角色列表失败')
  } finally {
    loading.value = false
  }
}

const fetchPermissionTree = async () => {
  try {
    const result = await permissionApi.getPermissionTree()
    permissionTreeData.value = result || []
  } catch (error) {
    console.error('获取权限树失败:', error)
    ElMessage.error('获取权限树失败')
  }
}

const handleSearch = () => {
  pageInfo.current = 1
  fetchRoleList()
}

const handleReset = () => {
  searchFormRef.value?.resetFields()
  pageInfo.current = 1
  fetchRoleList()
}

const handleAdd = () => {
  dialogType.value = 'add'
  resetRoleForm()
  dialogVisible.value = true
}

const handleEdit = (row) => {
  dialogType.value = 'edit'
  Object.assign(roleForm, row)
  dialogVisible.value = true
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除角色"${row.roleName}"吗？`,
      '确认删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    await roleApi.deleteRole(row.id)
    ElMessage.success('删除成功')
    fetchRoleList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除角色失败:', error)
      ElMessage.error('删除角色失败')
    }
  }
}

const handleBatchDelete = async () => {
  try {
    await ElMessageBox.confirm(
      `确定要删除选中的 ${multipleSelection.value.length} 个角色吗？`,
      '确认批量删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    const roleIds = multipleSelection.value.map(item => item.id)
    await roleApi.batchDeleteRoles(roleIds)
    ElMessage.success('批量删除成功')
    fetchRoleList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('批量删除角色失败:', error)
      ElMessage.error('批量删除角色失败')
    }
  }
}

const handleAssignPermissions = async (row) => {
  currentRole.value = row
  
  try {
    // 确保权限树数据已加载
    if (!permissionTreeData.value || permissionTreeData.value.length === 0) {
      await fetchPermissionTree()
    }
    
    // 获取角色已有权限
    const permissions = await permissionApi.getRolePermissions(row.id)
    checkedPermissionIds.value = permissions.map(p => p.id) || []
    
    // 打开权限分配对话框
    permissionDialogVisible.value = true
    
    // 等待DOM更新后设置选中状态
    await nextTick()
    if (permissionTreeRef.value) {
      permissionTreeRef.value.setCheckedKeys(checkedPermissionIds.value)
    }
    
    console.log('角色权限分配信息:', {
      roleId: row.id,
      roleName: row.roleName,
      assignedPermissions: checkedPermissionIds.value,
      totalPermissions: getAllPermissionIds(permissionTreeData.value)
    })
    
  } catch (error) {
    console.error('获取角色权限失败:', error)
    ElMessage.error('获取角色权限失败')
  }
}

// 处理权限选择变化
const handlePermissionCheck = () => {
  if (permissionTreeRef.value) {
    const checkedKeys = permissionTreeRef.value.getCheckedKeys()
    const halfCheckedKeys = permissionTreeRef.value.getHalfCheckedKeys()
    checkedPermissionIds.value = [...checkedKeys, ...halfCheckedKeys]
  }
}

const handleSavePermissions = async () => {
  try {
    permissionSubmitLoading.value = true
    const checkedKeys = permissionTreeRef.value.getCheckedKeys()
    const halfCheckedKeys = permissionTreeRef.value.getHalfCheckedKeys()
    const allCheckedKeys = [...checkedKeys, ...halfCheckedKeys]
    
    console.log('保存权限分配:', {
      roleId: currentRole.value.id,
      roleName: currentRole.value.roleName,
      originalPermissions: checkedPermissionIds.value.length,
      newPermissions: allCheckedKeys.length,
      permissionIds: allCheckedKeys
    })
    
    await roleApi.assignPermissions(currentRole.value.id, allCheckedKeys)
    ElMessage.success('权限分配成功')
    permissionDialogVisible.value = false
  } catch (error) {
    console.error('权限分配失败:', error)
    ElMessage.error('权限分配失败')
  } finally {
    permissionSubmitLoading.value = false
  }
}

const handleSelectionChange = (selection) => {
  multipleSelection.value = selection
}

const handleSizeChange = (size) => {
  pageInfo.size = size
  pageInfo.current = 1
  fetchRoleList()
}

const handleCurrentChange = (current) => {
  pageInfo.current = current
  fetchRoleList()
}

const handleDialogClose = () => {
  roleFormRef.value?.resetFields()
  resetRoleForm()
}

const handlePermissionDialogClose = () => {
  currentRole.value = null
  checkedPermissionIds.value = []
}

const handleSubmit = async () => {
  try {
    await roleFormRef.value?.validate()
    submitLoading.value = true
    
    if (dialogType.value === 'add') {
      await roleApi.createRole(roleForm)
      ElMessage.success('角色创建成功')
    } else {
      await roleApi.updateRole(roleForm)
      ElMessage.success('角色更新成功')
    }
    
    dialogVisible.value = false
    fetchRoleList()
  } catch (error) {
    console.error('提交失败:', error)
    ElMessage.error('操作失败')
  } finally {
    submitLoading.value = false
  }
}

const resetRoleForm = () => {
  Object.assign(roleForm, {
    id: null,
    roleName: '',
    roleCode: '',
    description: '',
    status: 1
  })
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('zh-CN')
}

const handleStatusChange = async (row) => {
  try {
    console.log('角色状态更新:', row.id, row.status);
    await roleApi.changeRoleStatus(row.id, row.status)
    
    
    ElMessage.success('状态更新成功')
  } catch (e) {
    ElMessage.error('状态更新失败')
    row.status = row.status === 1 ? 0 : 1
  }
}

// 获取所有权限ID的辅助函数
const getAllPermissionIds = (permissions) => {
  const ids = []
  const traverse = (nodes) => {
    nodes.forEach(node => {
      ids.push(node.id)
      if (node.children && node.children.length > 0) {
        traverse(node.children)
      }
    })
  }
  traverse(permissions)
  return ids
}

// 生命周期
onMounted(() => {
  // 初始化时先获取权限树数据，再获取角色列表
  fetchPermissionTree().then(() => {
    console.log('权限树数据初始化完成，总权限数:', getAllPermissionIds(permissionTreeData.value).length)
    fetchRoleList()
  })
})
</script>

<style scoped>
/* 页面容器 */
.page-container {
  padding: 24px;
  background: #f5f7fa;
  min-height: 100vh;
}

/* 内容卡片 */
.content-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
  margin-bottom: 24px;
}

/* 搜索区域 */
.search-section {
  padding: 20px 24px;
  background: #ffffff;
  border: none;
}

.search-form {
  width: 100%;
}

.search-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 24px;
  align-items: center;
}

.search-grid .el-form-item {
  margin-bottom: 0;
  display: flex;
  align-items: center;
}

.search-grid .el-form-item__label {
  width: 80px;
  text-align: right;
  padding-right: 12px;
  font-weight: 500;
  color: #303133;
  flex-shrink: 0;
}

.search-grid .el-form-item__content {
  flex: 1;
  margin-left: 0 !important;
}

.search-actions {
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  align-items: center;
}

.search-actions .el-button {
  flex: 1;
}

/* 响应式布局 */
@media (max-width: 1200px) {
  .search-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .search-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .search-grid {
    grid-template-columns: 1fr;
  }
  
  .search-actions {
    justify-content: center;
  }
}

/* 操作栏 */
.action-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #ebeef5;
}

.action-left {
  display: flex;
  gap: 12px;
}

.action-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.total-info {
  color: #606266;
  font-size: 14px;
}

/* 按钮样式 */
.btn-primary {
  background: linear-gradient(135deg, #409eff 0%, #66b3ff 100%);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-primary:hover {
  background: linear-gradient(135deg, #337ecc 0%, #5aa3e6 100%);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(64, 158, 255, 0.3);
}

.btn-secondary {
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.btn-secondary:hover {
  background: #f5f7fa;
  border-color: #c0c4cc;
  color: #409eff;
}

/* 表格样式 */
.data-table {
  margin-bottom: 24px;
}

.data-table .el-table {
  border-radius: 8px;
  overflow: hidden;
}

.data-table .el-table th {
  background: #fafbfc;
  color: #303133;
  font-weight: 600;
  border-bottom: 1px solid #ebeef5;
}

.data-table .el-table td {
  border-bottom: 1px solid #f5f7fa;
}

.data-table .el-table tr:hover td {
  background: #f8f9fa;
}

/* 状态标签 */
.status-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  min-width: 60px;
}

.status-active {
  background: #f0f9ff;
  color: #1890ff;
  border: 1px solid #b3d8ff;
}

.status-inactive {
  background: #fff2f0;
  color: #ff4d4f;
  border: 1px solid #ffb3b3;
}

/* 操作按钮 */
.table-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;
}

.edit-btn {
  background: #e6f7ff;
  color: #1890ff;
}

.edit-btn:hover {
  background: #bae7ff;
  color: #096dd9;
}

.assign-btn {
  background: #f6ffed;
  color: #52c41a;
}

.assign-btn:hover {
  background: #d9f7be;
  color: #389e0d;
}

.delete-btn {
  background: #fff2f0;
  color: #ff4d4f;
}

.delete-btn:hover {
  background: #ffccc7;
  color: #cf1322;
}

/* 分页样式 */
.pagination-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #ebeef5;
}

.pagination-info {
  color: #606266;
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-container {
    padding: 16px;
  }
  
  .search-form {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-item .el-input,
  .search-item .el-select {
    width: 100%;
  }
  
  .search-actions {
    margin-left: 0;
    justify-content: flex-start;
  }
  
  .action-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .pagination-container {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
}
</style>