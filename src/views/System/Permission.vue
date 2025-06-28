<template>
  <div class="page-container">
    <div class="page-header">
      <h1 class="page-title">权限管理</h1>
      <el-button type="primary" @click="showAddDialog = true">
        <el-icon><Plus /></el-icon>
        新增权限
      </el-button>
    </div>

    <!-- 搜索区域 -->
    <div class="content-card">
      <el-form :model="searchForm" :inline="true" class="search-form">
        <el-form-item label="权限名称">
          <el-input 
            v-model="searchForm.name" 
            placeholder="请输入权限名称"
            clearable
            style="width: 200px"
          />
        </el-form-item>
        <el-form-item label="权限类型">
          <el-select 
            v-model="searchForm.type" 
            placeholder="请选择类型"
            clearable
            style="width: 120px"
          >
            <el-option label="目录" value="directory" />
            <el-option label="菜单" value="menu" />
            <el-option label="按钮" value="button" />
            <el-option label="接口" value="api" />
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

    <!-- 表格区域 -->
    <div class="content-card">
      <el-table 
        :data="tableData" 
        v-loading="loading" 
        style="width: 100%"
        stripe
        border
        row-key="id"
        default-expand-all
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      >
        <el-table-column prop="name" label="权限名称" min-width="200" />
        <el-table-column prop="code" label="权限编码" min-width="180" />
        <el-table-column prop="type" label="权限类型" width="100" align="center">
          <template #default="{ row }">
            <el-tag 
              :class="getTypeClass(row.type)"
              size="small"
            >
              <el-icon style="margin-right: 4px;">
                <component :is="getTypeIcon(row.type)" />
              </el-icon>
              {{ getTypeLabel(row.type) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="path" label="路径/接口" min-width="180" />
        <el-table-column prop="description" label="描述" min-width="200" show-overflow-tooltip />
        <el-table-column prop="sort" label="排序" width="80" align="center" />
        <el-table-column prop="status" label="状态" width="80" align="center">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'danger'" size="small">
              {{ row.status === 1 ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center" fixed="right">
          <template #default="{ row }">
            <el-button 
              type="primary" 
              size="small" 
              @click="handleEdit(row)"
              text
            >
              编辑
            </el-button>
            <el-button 
              type="danger" 
              size="small" 
              @click="handleDelete(row)"
              text
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 新增/编辑对话框 -->
    <el-dialog
      v-model="showAddDialog"
      :title="editMode ? '编辑权限' : '新增权限'"
      width="600px"
    >
      <el-form :model="permissionForm" :rules="permissionRules" ref="permissionFormRef" label-width="80px">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="上级权限" prop="parentId">
              <el-tree-select
                v-model="permissionForm.parentId"
                :data="permissionTree"
                :props="{ label: 'name', value: 'id' }"
                placeholder="请选择上级权限"
                clearable
                check-strictly
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="权限类型" prop="type">
              <el-select v-model="permissionForm.type" placeholder="请选择类型">
                <el-option label="目录" value="directory" />
                <el-option label="菜单" value="menu" />
                <el-option label="按钮" value="button" />
                <el-option label="接口" value="api" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="权限名称" prop="name">
              <el-input v-model="permissionForm.name" placeholder="请输入权限名称" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="权限编码" prop="code">
              <el-input v-model="permissionForm.code" placeholder="请输入权限编码" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="路径/接口" prop="path">
          <el-input v-model="permissionForm.path" placeholder="请输入路径或接口地址" />
        </el-form-item>
        <el-form-item label="描述" prop="description">
          <el-input 
            v-model="permissionForm.description" 
            type="textarea" 
            :rows="3"
            placeholder="请输入权限描述" 
          />
        </el-form-item>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="排序" prop="sort">
              <el-input-number v-model="permissionForm.sort" :min="0" :max="999" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态" prop="status">
              <el-radio-group v-model="permissionForm.status">
                <el-radio :label="1">启用</el-radio>
                <el-radio :label="0">禁用</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <template #footer>
        <el-button @click="showAddDialog = false">取消</el-button>
        <el-button type="primary" @click="handleSave">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus, Search, Refresh, Folder, Document, Operation, Link } from '@element-plus/icons-vue'

// 响应式数据
const loading = ref(false)
const showAddDialog = ref(false)
const editMode = ref(false)
const permissionFormRef = ref()

// 搜索表单
const searchForm = reactive({
  name: '',
  type: ''
})

// 权限表单
const permissionForm = reactive({
  id: null,
  parentId: null,
  name: '',
  code: '',
  type: 'menu',
  path: '',
  description: '',
  sort: 0,
  status: 1
})

// 表单验证规则
const permissionRules = {
  name: [
    { required: true, message: '请输入权限名称', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '请输入权限编码', trigger: 'blur' }
  ],
  type: [
    { required: true, message: '请选择权限类型', trigger: 'change' }
  ]
}

// 表格数据
const tableData = ref([
  {
    id: 1,
    name: '首页',
    code: 'dashboard',
    type: 'menu',
    path: '/dashboard',
    description: '系统首页',
    sort: 1,
    status: 1,
    children: []
  },
  {
    id: 2,
    name: '系统管理',
    code: 'system',
    type: 'directory',
    path: '/system',
    description: '系统管理模块',
    sort: 2,
    status: 1,
    children: [
      {
        id: 21,
        parentId: 2,
        name: '用户管理',
        code: 'system:user',
        type: 'menu',
        path: '/system/user',
        description: '用户管理页面',
        sort: 1,
        status: 1,
        children: [
          {
            id: 211,
            parentId: 21,
            name: '新增用户',
            code: 'system:user:add',
            type: 'button',
            path: '',
            description: '新增用户按钮',
            sort: 1,
            status: 1
          },
          {
            id: 212,
            parentId: 21,
            name: '编辑用户',
            code: 'system:user:edit',
            type: 'button',
            path: '',
            description: '编辑用户按钮',
            sort: 2,
            status: 1
          },
          {
            id: 213,
            parentId: 21,
            name: '获取用户列表',
            code: 'system:user:list',
            type: 'api',
            path: '/api/user/list',
            description: '获取用户列表接口',
            sort: 3,
            status: 1
          },
          {
            id: 214,
            parentId: 21,
            name: '删除用户',
            code: 'system:user:delete',
            type: 'api',
            path: '/api/user/delete',
            description: '删除用户接口',
            sort: 4,
            status: 1
          }
        ]
      },
      {
        id: 22,
        parentId: 2,
        name: '角色管理',
        code: 'system:role',
        type: 'menu',
        path: '/system/role',
        description: '角色管理页面',
        sort: 2,
        status: 1,
        children: []
      },
      {
        id: 23,
        parentId: 2,
        name: '权限管理',
        code: 'system:permission',
        type: 'menu',
        path: '/system/permission',
        description: '权限管理页面',
        sort: 3,
        status: 1,
        children: []
      }
    ]
  }
])

// 权限树数据
const permissionTree = computed(() => {
  const buildTree = (data, parentId = null) => {
    return data
      .filter(item => item.parentId === parentId)
      .map(item => ({
        id: item.id,
        name: item.name,
        children: buildTree(data, item.id)
      }))
  }
  
  // 添加根节点
  const allData = [
    { id: 0, parentId: null, name: '根节点' },
    ...flattenData(tableData.value)
  ]
  
  return buildTree(allData)
})

// 扁平化数据
const flattenData = (data, result = []) => {
  data.forEach(item => {
    result.push(item)
    if (item.children && item.children.length > 0) {
      flattenData(item.children, result)
    }
  })
  return result
}

// 获取类型标签
const getTypeLabel = (type) => {
  const typeMap = {
    directory: '目录',
    menu: '菜单',
    button: '按钮',
    api: '接口'
  }
  return typeMap[type] || type
}

// 获取类型样式类
const getTypeClass = (type) => {
  const classMap = {
    directory: 'permission-tag-directory',
    menu: 'permission-tag-menu',
    button: 'permission-tag-button',
    api: 'permission-tag-api'
  }
  return classMap[type] || ''
}

// 获取类型图标
const getTypeIcon = (type) => {
  const iconMap = {
    directory: 'Folder',
    menu: 'Document',
    button: 'Operation',
    api: 'Link'
  }
  return iconMap[type] || 'Document'
}

// 搜索
const handleSearch = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    ElMessage.success('搜索完成')
  }, 1000)
}

// 重置
const handleReset = () => {
  searchForm.name = ''
  searchForm.type = ''
  handleSearch()
}

// 编辑权限
const handleEdit = (row) => {
  editMode.value = true
  Object.assign(permissionForm, {
    ...row,
    parentId: row.parentId || 0
  })
  showAddDialog.value = true
}

// 删除权限
const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(`确定要删除权限"${row.name}"吗？`, '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    ElMessage.success('删除成功')
  } catch {
    // 用户取消
  }
}

// 保存权限
const handleSave = async () => {
  try {
    await permissionFormRef.value.validate()
    ElMessage.success(editMode.value ? '更新成功' : '新增成功')
    showAddDialog.value = false
    resetForm()
    handleSearch()
  } catch {
    // 验证失败
  }
}

// 重置表单
const resetForm = () => {
  permissionForm.id = null
  permissionForm.parentId = null
  permissionForm.name = ''
  permissionForm.code = ''
  permissionForm.type = 'menu'
  permissionForm.path = ''
  permissionForm.description = ''
  permissionForm.sort = 0
  permissionForm.status = 1
}
</script>

<style scoped>
/* 权限类型标签样式 */
.permission-tag-directory {
  background-color: #E3F2FD !important;
  border-color: #2196F3 !important;
  color: #1976D2 !important;
}

.permission-tag-menu {
  background-color: #E8F5E8 !important;
  border-color: #4CAF50 !important;
  color: #2E7D32 !important;
}

.permission-tag-button {
  background-color: #FFF3E0 !important;
  border-color: #FF9800 !important;
  color: #F57C00 !important;
}

.permission-tag-api {
  background-color: #F3E5F5 !important;
  border-color: #9C27B0 !important;
  color: #7B1FA2 !important;
}

/* 悬停效果 */
.permission-tag-directory:hover {
  background-color: #BBDEFB !important;
}

.permission-tag-menu:hover {
  background-color: #C8E6C9 !important;
}

.permission-tag-button:hover {
  background-color: #FFE0B2 !important;
}

.permission-tag-api:hover {
  background-color: #E1BEE7 !important;
}

/* 其他样式 */
.search-form {
  margin-bottom: 0;
}
</style> 