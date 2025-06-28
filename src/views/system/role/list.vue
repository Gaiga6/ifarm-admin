<template>
  <div class="page-container">
    <!-- 页面标题栏 -->
    <div class="page-header">
      <div class="header-left">
        <h1 class="page-title">
          <el-icon class="title-icon"><Avatar /></el-icon>
          角色管理
        </h1>
        <p class="page-description">管理系统角色，分配权限和控制访问级别</p>
      </div>
      <div class="header-right">
        <div class="statistics-cards">
          <div class="stat-card">
            <div class="stat-value">{{ pagination.total }}</div>
            <div class="stat-label">总角色数</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ activeRoles }}</div>
            <div class="stat-label">活跃角色</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ selectedRoles.length }}</div>
            <div class="stat-label">已选择</div>
          </div>
        </div>
        <div class="header-actions">
          <el-button type="danger" @click="handleBatchDelete" :disabled="selectedRoles.length === 0">
            <el-icon><Delete /></el-icon>
            批量删除
          </el-button>
          <el-button type="primary" @click="handleAdd">
            <el-icon><Plus /></el-icon>
            新增角色
          </el-button>
        </div>
      </div>
    </div>

    <div class="content-card">
      <!-- 搜索区域 -->
      <div class="search-section">
        <el-form :model="searchForm" inline>
          <el-form-item label="角色名称">
            <el-input
              v-model="searchForm.roleName"
              placeholder="请输入角色名称"
              clearable
              @keyup.enter="handleSearch"
            />
          </el-form-item>
          <el-form-item label="角色编码">
            <el-input
              v-model="searchForm.roleCode"
              placeholder="请输入角色编码"
              clearable
              @keyup.enter="handleSearch"
            />
          </el-form-item>
          <el-form-item label="状态">
            <el-select v-model="searchForm.status" placeholder="请选择状态" clearable style="width: 180px;">
              <el-option label="正常" value="1" />
              <el-option label="禁用" value="0" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">
              <el-icon><Search /></el-icon>
              搜索
            </el-button>
            <el-button @click="handleReset">
              <el-icon><Refresh /></el-icon>
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 角色列表 -->
      <div class="table-section">
        <el-table
          v-loading="loading"
          :data="roleList"
          stripe
          border
          style="width: 100%"
          @selection-change="handleSelectionChange"
          :default-sort="{prop: 'createTime', order: 'descending'}"
        >
          <!-- 选择列 -->
          <el-table-column type="selection" width="55" fixed="left" />

          <!-- 序号列 -->
          <el-table-column type="index" label="序号" width="80" align="center" />

          <el-table-column prop="roleName" label="角色名称" width="150" />
          <el-table-column prop="roleCode" label="角色编码" width="150" />
          <el-table-column prop="description" label="角色描述" width="200" show-overflow-tooltip />
          <el-table-column prop="sort" label="排序" width="100" align="center" />
          <el-table-column prop="status" label="状态" width="100" align="center">
            <template #default="{ row }">
              <el-tag :type="row.status === 1 ? 'success' : 'danger'">
                {{ row.status === 1 ? '正常' : '禁用' }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180" sortable />

          <!-- 操作列 -->
          <el-table-column label="操作" width="280" fixed="right" align="center">
            <template #default="{ row }">
              <div class="action-buttons">
                <el-button type="primary" text @click="handleEdit(row)">
                  <el-icon><Edit /></el-icon>编辑
                </el-button>
                <el-button type="success" text @click="handleAssignPermissions(row)">
                  <el-icon><Key /></el-icon>分配权限
                </el-button>
                <el-button
                  :type="row.status === 1 ? 'danger' : 'success'"
                  text
                  @click="handleToggleStatus(row)"
                >
                  <el-icon><component :is="row.status === 1 ? 'Lock' : 'Unlock'" /></el-icon>
                  {{ row.status === 1 ? '禁用' : '启用' }}
                </el-button>
                <el-button type="danger" text @click="handleDelete(row)">
                  <el-icon><Delete /></el-icon>删除
                </el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <div class="pagination-section">
          <el-pagination
            :current-page="pagination.current"
            :page-size="pagination.size"
            :page-sizes="[10, 20, 50, 100]"
            :total="pagination.total"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>

    <!-- 角色表单对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="600px"
      @close="handleDialogClose"
    >
      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        label-width="100px"
      >
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="角色编码" prop="roleCode">
          <el-input v-model="form.roleCode" placeholder="请输入角色编码" />
        </el-form-item>
        <el-form-item label="角色描述" prop="description">
          <el-input
            v-model="form.description"
            type="textarea"
            :rows="3"
            placeholder="请输入角色描述"
          />
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input-number v-model="form.sort" :min="0" :max="999" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio :label="1">正常</el-radio>
            <el-radio :label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit" :loading="submitLoading">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>

    <!-- 分配权限对话框 -->
    <el-dialog
      v-model="permissionDialogVisible"
      title="分配权限"
      width="600px"
      @close="handlePermissionDialogClose"
    >
      <div class="permission-section">
        <div class="permission-header">
          <span>为角色"{{ currentRole?.roleName }}" 分配权限</span>
          <div class="permission-actions">
            <el-button size="small" @click="handleExpandAll">展开全部</el-button>
            <el-button size="small" @click="handleCollapseAll">收起全部</el-button>
            <el-button size="small" @click="handleCheckAll">全选</el-button>
            <el-button size="small" @click="handleUncheckAll">取消全选</el-button>
          </div>
        </div>
        <el-tree
          ref="permissionTreeRef"
          :data="permissionTree"
          :props="treeProps"
          node-key="id"
          show-checkbox
          :default-checked-keys="checkedPermissions"
          :default-expand-all="false"
          class="permission-tree"
        >
          <template #default="{ node, data }">
            <div class="tree-node">
              <el-icon v-if="data.type === 'menu'"><Menu /></el-icon>
              <el-icon v-else-if="data.type === 'button'"><Operation /></el-icon>
              <el-icon v-else><Folder /></el-icon>
              <span class="node-label">{{ data.name }}</span>
              <el-tag v-if="data.type" size="small" class="node-type">
                {{ data.type === 'menu' ? '菜单' : data.type === 'button' ? '按钮' : '目录' }}
              </el-tag>
            </div>
          </template>
        </el-tree>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="permissionDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmitPermissions" :loading="permissionLoading">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  Plus, Search, Refresh, Edit, Key, Lock, Unlock, Delete,
  Menu, Operation, Folder, Avatar
} from '@element-plus/icons-vue'

// API导入
import api from '@/api'

// 响应式数据
const loading = ref(false)
const roleList = ref([])
const dialogVisible = ref(false)
const dialogTitle = ref('')
const submitLoading = ref(false)
const selectedRoles = ref([])
const permissionDialogVisible = ref(false)

// 计算属性
const activeRoles = computed(() => {
  return roleList.value.filter(role => role.status === 1).length
})
const permissionLoading = ref(false)
const currentRole = ref(null)
const permissionTree = ref([])
const checkedPermissions = ref([])
const permissionTreeRef = ref()

// 搜索表单
const searchForm = reactive({
  roleName: '',
  roleCode: '',
  status: ''
})

// 分页数据
const pagination = reactive({
  current: 1,
  size: 10,
  total: 0
})

// 角色表单
const formRef = ref()
const form = reactive({
  id: null,
  roleName: '',
  roleCode: '',
  description: '',
  sort: 0,
  status: 1
})

// 树形控件属性
const treeProps = {
  children: 'children',
  label: 'name'
}

// 表单验证规则
const rules = {
  roleName: [
    { required: true, message: '请输入角色名称', trigger: 'blur' },
    { min: 2, max: 20, message: '角色名称长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  roleCode: [
    { required: true, message: '请输入角色编码', trigger: 'blur' },
    { pattern: /^[A-Z_]+$/, message: '角色编码只能包含大写字母和下划线', trigger: 'blur' }
  ],
  description: [
    { max: 200, message: '描述不能超过200个字符', trigger: 'blur' }
  ],
  sort: [
    { required: true, message: '请输入排序', trigger: 'blur' }
  ],
  status: [
    { required: true, message: '请选择状态', trigger: 'change' }
  ]
}

// 获取角色列表
const fetchRoleList = async () => {
  try {
    loading.value = true
    const params = {
      current: pagination.current,
      size: pagination.size,
      ...searchForm
    }

    const response = await api.user.role.pageRoles(params)
    roleList.value = response.data.records || []
    pagination.total = response.data.total || 0
  } catch (error) {
    ElMessage.error('获取角色列表失败')
    console.error('获取角色列表失败:', error)
  } finally {
    loading.value = false
  }
}

// 搜索
const handleSearch = () => {
  pagination.current = 1
  fetchRoleList()
}

// 重置搜索
const handleReset = () => {
  Object.assign(searchForm, {
    roleName: '',
    roleCode: '',
    status: ''
  })
  pagination.current = 1
  fetchRoleList()
}

// 分页大小改变
const handleSizeChange = (size) => {
  pagination.size = size
  pagination.current = 1
  fetchRoleList()
}

// 当前页改变
const handleCurrentChange = (current) => {
  pagination.current = current
  fetchRoleList()
}

// 新增角色
const handleAdd = () => {
  dialogTitle.value = '新增角色'
  Object.assign(form, {
    id: null,
    roleName: '',
    roleCode: '',
    description: '',
    sort: 0,
    status: 1
  })
  dialogVisible.value = true
}

// 编辑角色
const handleEdit = (row) => {
  dialogTitle.value = '编辑角色'
  Object.assign(form, {
    id: row.id,
    roleName: row.roleName,
    roleCode: row.roleCode,
    description: row.description,
    sort: row.sort,
    status: row.status
  })
  dialogVisible.value = true
}

// 提交表单
const handleSubmit = async () => {
  try {
    await formRef.value.validate()
    submitLoading.value = true

    if (form.id) {
      // 编辑角色
      await api.user.role.updateRole(form)
      ElMessage.success('角色更新成功')
    } else {
      // 新增角色
      await api.user.role.createRole(form)
      ElMessage.success('角色创建成功')
    }

    dialogVisible.value = false
    await fetchRoleList()
  } catch (error) {
    ElMessage.error(error.message || '操作失败')
    console.error('提交表单失败:', error)
  } finally {
    submitLoading.value = false
  }
}

// 对话框关闭
const handleDialogClose = () => {
  formRef.value?.resetFields()
}

// 删除角色
const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除角色"${row.roleName}" 吗？`,
      '确认删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )

    await api.user.role.deleteRole(row.id)
    ElMessage.success('角色删除成功')
    fetchRoleList()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error(error.message || '删除失败')
      console.error('删除角色失败:', error)
    }
  }
}

// 切换角色状态
const handleToggleStatus = async (row) => {
  try {
    const newStatus = row.status === 1 ? 0 : 1
    const action = newStatus === 1 ? '启用' : '禁用'

    await ElMessageBox.confirm(
      `确定要${action}角色 "${row.roleName}" 吗？`,
      '确认操作',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )

    await api.user.role.updateRoleStatus(row.id, newStatus)
    ElMessage.success(`角色${action}成功`)
    fetchRoleList()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error(error.message || '操作失败')
      console.error('切换角色状态失败', error)
    }
  }
}

// 处理表格选择变化
const handleSelectionChange = (selection) => {
  selectedRoles.value = selection
}

// 批量删除角色
const handleBatchDelete = async () => {
  if (selectedRoles.value.length === 0) {
    ElMessage.warning('请选择要删除的角色')
    return
  }

  try {
    await ElMessageBox.confirm(
      `确定要批量删除所选 ${selectedRoles.value.length} 个角色吗？此操作不可恢复！`,
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )

    loading.value = true
    const roleIds = selectedRoles.value.map(role => role.id)
    await api.user.role.batchDeleteRoles(roleIds)

    ElMessage.success('批量删除成功')
    fetchRoleList()
  } catch (error) {
    if (error !== 'cancel') {
      ElMessage.error('批量删除失败')
      console.error('批量删除失败:', error)
    }
  } finally {
    loading.value = false
  }
}

// 分配权限
const handleAssignPermissions = async (row) => {
  try {
    currentRole.value = row
    permissionDialogVisible.value = true

    // 获取权限树和当前角色已有权限
    const [treeResponse, detailResponse] = await Promise.all([
      api.user.permission.getPermissionTree(),
      api.user.role.getRoleDetail(row.id)
    ])

    permissionTree.value = treeResponse.data
    checkedPermissions.value = detailResponse.data.permissionIds || []
  } catch (error) {
    ElMessage.error('获取权限数据失败')
    console.error('获取权限数据失败:', error)
  }
}

// 权限对话框关闭
const handlePermissionDialogClose = () => {
  currentRole.value = null
  permissionTree.value = []
  checkedPermissions.value = []
}

// 展开全部
const handleExpandAll = () => {
  const nodes = permissionTreeRef.value.store.nodesMap
  for (let node in nodes) {
    nodes[node].expanded = true
  }
}

// 收起全部
const handleCollapseAll = () => {
  const nodes = permissionTreeRef.value.store.nodesMap
  for (let node in nodes) {
    nodes[node].expanded = false
  }
}

// 全选
const handleCheckAll = () => {
  const allKeys = []
  const traverse = (nodes) => {
    nodes.forEach(node => {
      allKeys.push(node.id)
      if (node.children && node.children.length > 0) {
        traverse(node.children)
      }
    })
  }
  traverse(permissionTree.value)
  permissionTreeRef.value.setCheckedKeys(allKeys)
}

// 取消全选
const handleUncheckAll = () => {
  permissionTreeRef.value.setCheckedKeys([])
}

// 提交权限分配
const handleSubmitPermissions = async () => {
  try {
    permissionLoading.value = true
    const checkedKeys = permissionTreeRef.value.getCheckedKeys()
    const halfCheckedKeys = permissionTreeRef.value.getHalfCheckedKeys()
    const allKeys = [...checkedKeys, ...halfCheckedKeys]

    await api.user.role.assignPermissions(currentRole.value.id, allKeys)
    ElMessage.success('权限分配成功')
    permissionDialogVisible.value = false
  } catch (error) {
    ElMessage.error(error.message || '权限分配失败')
    console.error('权限分配失败:', error)
  } finally {
    permissionLoading.value = false
  }
}

// 页面加载时获取数据
onMounted(() => {
  fetchRoleList()
})
</script>

<style scoped>
.page-container {
  height: 100%;
  background: #f5f7fa;
}

/* 页面标题栏样式 */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 24px 20px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  color: #fff;
  margin-bottom: 20px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 4px 20px rgba(255, 154, 158, 0.25);
}

.header-left {
  flex: 1;
}

.page-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-icon {
  padding: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.page-description {
  margin: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

.header-right {
  flex-shrink: 0;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-end;
}

.statistics-cards {
  display: flex;
  gap: 16px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 16px 20px;
  text-align: center;
  min-width: 80px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.content-card {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  margin: 0 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e4e7ed;
}

.search-section {
  margin-bottom: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 6px;
}

.table-section {
  margin-top: 20px;
}

.pagination-section {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.action-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
}

.permission-section {
  max-height: 500px;
  overflow-y: auto;
}

.permission-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebeef5;
}

.permission-actions {
  display: flex;
  gap: 8px;
}

.permission-tree {
  max-height: 400px;
  overflow-y: auto;
}

.tree-node {
  display: flex;
  align-items: center;
  gap: 6px;
}

.node-label {
  flex: 1;
}

.node-type {
  margin-left: 8px;
}
</style>