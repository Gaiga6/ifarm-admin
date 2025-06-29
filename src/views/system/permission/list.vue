<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 搜索区域 -->
      <div class="search-section">
        <el-form :model="searchForm" ref="searchFormRef" class="search-form">
          <div class="search-grid">
            <el-form-item label="权限名称" prop="name">
              <el-input
                v-model="searchForm.name"
                placeholder="请输入权限名称"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="权限编码" prop="code">
              <el-input
                v-model="searchForm.code"
                placeholder="请输入权限编码"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="权限类型" prop="type">
              <el-select v-model="searchForm.type" placeholder="请选择权限类型" clearable>
                <el-option label="目录" :value="1" />
                <el-option label="菜单" :value="2" />
                <el-option label="按钮" :value="3" />
                <el-option label="接口" :value="4" />
              </el-select>
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
            <span>新增权限</span>
          </el-button>
        </div>
        <div class="action-right">
          <span class="total-info">共 {{ pagination?.total || 0 }} 条记录</span>
        </div>
      </div>

      <!-- 表格 -->
      <div class="data-table">
        <el-table
          ref="tableRef"
          :data="tableData"
          style="width: 100%"
          :loading="loading"
          row-key="id"
          :tree-props="{ children: 'children' }"
          :default-expand-all="false"
        >
          <el-table-column prop="permissionName" label="权限名称" min-width="200" />
          <el-table-column prop="permissionCode" label="权限编码" min-width="150" />
          <el-table-column prop="type" label="权限类型" width="120">
            <template #default="{ row }">
              <el-tag 
                :type="getTypeTagType(row.permissionType)" 
                :effect="getTypeTagEffect(row.permissionType)"
                size="small"
              >
                <el-icon :size="12" style="margin-right: 4px;">
                  <component :is="getTypeIcon(row.permissionType)" />
                </el-icon>
                {{ row.permissionTypeDesc || getTypeText(row.permissionType) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="path" label="路径" min-width="150" show-overflow-tooltip />
          <el-table-column prop="sort" label="排序" width="80" />
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
          <el-table-column prop="description" label="描述" min-width="150" show-overflow-tooltip />
          <el-table-column prop="createTime" label="创建时间" width="180">
            <template #default="{ row }">
              {{ formatDate(row.createTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <button class="action-btn edit-btn" @click="handleEdit(row)">
                  编辑
                </button>
                <button class="action-btn delete-btn" @click="handleDelete(row)">
                  删除
                </button>
              </div>
            </template>
          </el-table-column>
        </el-table>
        
        <!-- 分页组件 -->
        <div class="pagination-wrapper">
          <el-pagination
            v-model:current-page="pagination.current"
            v-model:page-size="pagination.size"
            :page-sizes="[10, 20, 50, 100]"
            :total="pagination.total"
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handlePageChange"
          />
        </div>
      </div>
    </div>

    <!-- 添加/编辑权限对话框 -->
    <el-dialog
      v-model="dialogVisible"
      :title="dialogType === 'add' ? (parentPermission ? '新增子权限' : '新增权限') : '编辑权限'"
      width="600px"
      @close="handleDialogClose"
    >
      <el-form
        ref="permissionFormRef"
        :model="permissionForm"
        :rules="permissionFormRules"
        label-width="100px"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="权限名称" prop="permissionName">
              <el-input v-model="permissionForm.permissionName" placeholder="请输入权限名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="权限编码" prop="permissionCode">
              <el-input v-model="permissionForm.permissionCode" placeholder="请输入权限编码" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="权限类型" prop="type">
              <el-select v-model="permissionForm.type" placeholder="请选择权限类型" style="width: 100%">
                <el-option label="菜单" value="menu" />
                <el-option label="按钮" value="button" />
                <el-option label="接口" value="api" />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="父级权限" prop="parentId">
              <el-tree-select
                v-model="permissionForm.parentId"
                :data="permissionTreeOptions"
                :render-after-expand="false"
                :default-expand-all="false"
                placeholder="请选择父级权限"
                check-strictly
                :props="{ label: 'permissionName', value: 'id' }"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="路径" prop="path">
              <el-input v-model="permissionForm.path" placeholder="请输入路径" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="图标" prop="icon">
              <el-input v-model="permissionForm.icon" placeholder="请输入图标类名">
                <template #prefix>
                  <el-icon v-if="permissionForm.icon" :class="permissionForm.icon" />
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="排序号" prop="sort">
              <el-input-number
                v-model="permissionForm.sort"
                :min="0"
                :max="9999"
                controls-position="right"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态" prop="status">
              <el-radio-group v-model="permissionForm.status">
                <el-radio :value="1">启用</el-radio>
                <el-radio :value="0">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="权限描述" prop="description">
          <el-input
            v-model="permissionForm.description"
            type="textarea"
            :rows="3"
            placeholder="请输入权限描述"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSubmit" :loading="submitLoading">
          确定
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Refresh, Plus, Edit, Delete, Sort, Fold, Folder, Menu, Operation, Link } from '@element-plus/icons-vue'
import { permissionApi } from '@/api/user'

// 权限类型映射
const typeLabels = {
  menu: '菜单',
  button: '按钮',
  api: '接口'
}

// 响应式数据
const loading = ref(false)
const submitLoading = ref(false)
const tableData = ref([])
const dialogVisible = ref(false)
const dialogType = ref('add') // add | edit
const parentPermission = ref(null)

// 分页数据
const pagination = reactive({
  current: 1,
  size: 10,
  total: 0,
  pages: 0
})


// 搜索表单
const searchForm = reactive({
  name: '',
  code: '',
  type: '',
  status: null
})

// 权限表单
const permissionForm = reactive({
  id: null,
  permissionName: '',
  permissionCode: '',
  description: '',
  parentId: 0,
  type: 'menu',
  path: '',
  icon: '',
  sort: 0,
  status: 1
})

// 表单验证规则
const permissionFormRules = {
  permissionName: [
    { required: true, message: '请输入权限名称', trigger: 'blur' },
    { min: 2, max: 50, message: '权限名称长度为 2 到 50 个字符', trigger: 'blur' }
  ],
  permissionCode: [
    { required: true, message: '请输入权限编码', trigger: 'blur' },
    { min: 2, max: 100, message: '权限编码长度为 2 到 100 个字符', trigger: 'blur' },
    { pattern: /^[a-zA-Z_:]+$/, message: '权限编码只能包含字母、下划线和冒号', trigger: 'blur' }
  ],
  type: [
    { required: true, message: '请选择权限类型', trigger: 'change' }
  ],
  sort: [
    { required: true, message: '请输入排序号', trigger: 'blur' }
  ]
}

// refs
const searchFormRef = ref()
const permissionFormRef = ref()
const tableRef = ref()

// 计算属性 - 权限树选项
const permissionTreeOptions = computed(() => {
  const options = [{ id: 0, permissionName: '根权限', children: [] }]
  
  const buildTree = (items, parentId = 0) => {
    const children = []
    items.forEach(item => {
      if (item.parentId === parentId && item.id !== permissionForm.id) {
        const node = {
          id: item.id,
          permissionName: item.permissionName,
          children: buildTree(items, item.id)
        }
        children.push(node)
      }
    })
    return children
  }
  
  // 将所有权限平铺
  const flatPermissions = []
  const flatten = (items) => {
    items.forEach(item => {
      flatPermissions.push(item)
      if (item.children) {
        flatten(item.children)
      }
    })
  }
  flatten(tableData.value)
  
  options[0].children = buildTree(flatPermissions)
  return options
})

// 方法
const fetchPermissionList = async () => {
  loading.value = true
  try {
    const params = {
      current: pagination.current,
      size: pagination.size,
      permissionName: searchForm.name,
      permissionCode: searchForm.code,
      permissionType: searchForm.type,
      status: searchForm.status
    }
    const result = await permissionApi.getPermissionPage(params)
    if (result && result.records) {
      tableData.value = result.records
      pagination.current = result.current
      pagination.size = result.size
      pagination.total = result.total
      pagination.pages = result.pages
    } else {
      tableData.value = []
      pagination.total = 0
    }
  } catch (error) {
    console.error('获取权限列表失败:', error)
    ElMessage.error('获取权限列表失败')
  } finally {
    loading.value = false
  }
}

const handleSearch = () => {
  pagination.current = 1 // 重置到第一页
  fetchPermissionList()
}

const handleReset = () => {
  searchFormRef.value?.resetFields()
  pagination.current = 1 // 重置到第一页
  fetchPermissionList()
}

// 分页处理
const handlePageChange = (page) => {
  pagination.current = page
  fetchPermissionList()
}

const handleSizeChange = (size) => {
  pagination.size = size
  pagination.current = 1
  fetchPermissionList()
}

const handleAdd = (row = null) => {
  dialogType.value = 'add'
  parentPermission.value = row
  resetPermissionForm()
  if (row) {
    permissionForm.parentId = row.id
  }
  dialogVisible.value = true
}

const handleEdit = (row) => {
  dialogType.value = 'edit'
  parentPermission.value = null
  Object.assign(permissionForm, row)
  dialogVisible.value = true
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除权限"${row.permissionName}"吗？删除后其子权限也将被删除！`,
      '确认删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    await permissionApi.deletePermission(row.id)
    ElMessage.success('删除成功')
    fetchPermissionList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除权限失败:', error)
      ElMessage.error('删除权限失败')
    }
  }
}



const handleDialogClose = () => {
  permissionFormRef.value?.resetFields()
  resetPermissionForm()
  parentPermission.value = null
}

const handleSubmit = async () => {
  try {
    await permissionFormRef.value?.validate()
    submitLoading.value = true
    
    if (dialogType.value === 'add') {
      await permissionApi.createPermission(permissionForm)
      ElMessage.success('权限创建成功')
    } else {
      await permissionApi.updatePermission(permissionForm)
      ElMessage.success('权限更新成功')
    }
    
    dialogVisible.value = false
    fetchPermissionList()
  } catch (error) {
    console.error('提交失败:', error)
    ElMessage.error('操作失败')
  } finally {
    submitLoading.value = false
  }
}

const resetPermissionForm = () => {
  Object.assign(permissionForm, {
    id: null,
    permissionName: '',
    permissionCode: '',
    description: '',
    parentId: 0,
    type: 'menu',
    path: '',
    icon: '',
    sort: 0,
    status: 1
  })
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('zh-CN')
}

const handleStatusChange = async (row) => {
  try {
    await permissionApi.changePermissionStatus(row.id, row.status)
    ElMessage.success('状态更新成功')
    await fetchPermissionList() // 刷新列表
  } catch (e) {
    ElMessage.error('状态更新失败')
    row.status = row.status === 1 ? 0 : 1
  }
}

const getTypeText = (type) => {
  const typeMap = {
    1: '目录',
    2: '菜单',
    3: '按钮',
    4: '接口'
  }
  return typeMap[type] || '未知'
}

// 获取权限类型对应的标签类型
const getTypeTagType = (type) => {
  const typeMap = {
    1: 'info',     // 目录 - 蓝色
    2: 'success',  // 菜单 - 绿色
    3: 'warning',  // 按钮 - 橙色
    4: 'danger'    // 接口 - 红色
  }
  return typeMap[type] || 'info'
}

// 获取权限类型对应的标签效果
const getTypeTagEffect = (type) => {
  const effectMap = {
    1: 'light',    // 目录 - 浅色效果
    2: 'light',    // 菜单 - 浅色效果
    3: 'light',    // 按钮 - 浅色效果
    4: 'light'     // 接口 - 浅色效果
  }
  return effectMap[type] || 'light'
}

// 获取权限类型对应的图标
const getTypeIcon = (type) => {
  const iconMap = {
    1: Folder,     // 目录 - 文件夹图标
    2: Menu,       // 菜单 - 菜单图标
    3: Operation,  // 按钮 - 操作图标
    4: Link        // 接口 - 链接图标
  }
  return iconMap[type] || Folder
}

// 生命周期
onMounted(() => {
  fetchPermissionList()
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

/* 权限类型标签样式优化 */
.el-tag {
  display: inline-flex;
  align-items: center;
  font-weight: 500;
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

.delete-btn {
  background: #fff2f0;
  color: #ff4d4f;
}

.delete-btn:hover {
  background: #ffccc7;
  color: #cf1322;
}

/* 分页组件样式 */
.pagination-wrapper {
  display: flex;
  justify-content: center;
  padding: 20px 0;
  margin-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.pagination-wrapper .el-pagination {
  --el-pagination-font-size: 14px;
}

.pagination-wrapper .el-pagination .btn-prev,
.pagination-wrapper .el-pagination .btn-next {
  background-color: #fff;
  border: 1px solid #dcdfe6;
}

.pagination-wrapper .el-pagination .btn-prev:hover,
.pagination-wrapper .el-pagination .btn-next:hover {
  color: #409eff;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .search-fields {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px 20px;
  }
}

@media (max-width: 768px) {
  .page-container {
    padding: 16px;
  }
  
  .search-section {
    padding: 20px;
  }
  
  .search-fields {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  
  .search-fields .el-form-item {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .search-fields .el-form-item__label {
    width: auto;
    text-align: left;
    padding-right: 0;
    margin-bottom: 8px;
  }
  
  .search-actions {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .action-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .action-left {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

@media (max-width: 480px) {
  .search-section {
    padding: 16px;
  }
  
  .search-actions {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-actions .el-button {
    width: 100%;
    justify-content: center;
  }
}
</style>