<template>
  <div class="user-management">
    <!-- 页面标题栏 -->
    <div class="page-header">
      <div class="header-left">
        <h1 class="page-title">
          <el-icon class="title-icon"><User /></el-icon>
          用户管理
        </h1>
        <p class="page-description">管理系统用户，维护用户基本信息和权限分配</p>
      </div>
      <div class="header-right">
        <div class="statistics-cards">
          <div class="stat-card">
            <div class="stat-value">{{ pagination.total }}</div>
            <div class="stat-label">总用户数</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ activeUsers }}</div>
            <div class="stat-label">活跃用户</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">{{ onlineUsers }}</div>
            <div class="stat-label">在线用户</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 数据表格 -->
    <DataTable
      v-model:current-page="pagination.current"
      v-model:page-size="pagination.size"
      :data="tableData"
      :columns="columns"
      :total="pagination.total"
      :loading="loading"
      @refresh="handleRefresh"
      @search="handleSearch"
      @selection-change="handleSelectionChange"
      @current-change="handlePageChange"
      @size-change="handleSizeChange"
    >
      <!-- 搜索区域 -->
      <template #search>
        <SearchForm
          v-model="searchForm"
          :fields="searchFields"
          :advanced-fields="advancedSearchFields"
          :show-advanced="true"
          @search="handleSearch"
          @reset="handleResetSearch"
        />
      </template>

      <!-- 操作按钮 -->
      <template #toolbar>
        <el-button 
          type="primary" 
          :icon="Plus" 
          @click="handleCreate"
          v-if="hasPermission('user:create')"
        >
          新增用户
        </el-button>
        <el-button 
          :icon="Download" 
          @click="handleExport"
          :loading="exportLoading"
        >
          导出
        </el-button>
      </template>

      <!-- 批量操作 -->
      <template #batchActions="{ selectedRows }">
        <el-button 
          type="danger" 
          :icon="Delete" 
          @click="handleBatchDelete(selectedRows)"
          v-if="hasPermission('user:delete')"
        >
          批量删除
        </el-button>
        <el-button 
          :icon="Edit" 
          @click="handleBatchChangeStatus(selectedRows, 1)"
          v-if="hasPermission('user:status')"
        >
          批量启用
        </el-button>
        <el-button 
          :icon="Lock" 
          @click="handleBatchChangeStatus(selectedRows, 0)"
          v-if="hasPermission('user:status')"
        >
          批量禁用
        </el-button>
      </template>

      <!-- 状态列 -->
      <template #status="{ row }">
        <el-switch
          v-model="row.status"
          :active-value="1"
          :inactive-value="0"
          :loading="row.statusLoading"
          @change="handleStatusChange(row)"
          v-if="hasPermission('user:status')"
        />
        <el-tag v-else :type="row.status === 1 ? 'success' : 'danger'" size="small">
          {{ row.statusDesc }}
        </el-tag>
      </template>

      <!-- 头像列 -->
      <template #avatar="{ row }">
        <el-avatar
          :src="row.avatar"
          :size="40"
          shape="circle"
        >
          {{ row.nickname ? row.nickname.charAt(0) : row.username.charAt(0) }}
        </el-avatar>
      </template>

      <!-- 性别列 -->
      <template #gender="{ row }">
        <el-tag :type="getGenderTagType(row.gender)" size="small">
          {{ row.genderDesc }}
        </el-tag>
      </template>

      <!-- 角色列 -->
      <template #roles="{ row }">
        <el-tag
          v-for="role in row.roles"
          :key="role.id"
          size="small"
          class="mr-1"
        >
          {{ role.roleName }}
        </el-tag>
        <span v-if="!row.roles || row.roles.length === 0" class="text-gray-400">
          暂无角色
        </span>
      </template>

      <!-- 操作列 -->
      <template #actions="{ row }">
        <el-button
          type="text"
          size="small"
          :icon="View"
          @click="handleView(row)"
        >
          详情
        </el-button>
        <el-button
          type="text"
          size="small"
          :icon="Edit"
          @click="handleEdit(row)"
          v-if="hasPermission('user:update')"
        >
          编辑
        </el-button>
        <el-button
          type="text"
          size="small"
          :icon="Key"
          @click="handleResetPassword(row)"
          v-if="hasPermission('user:password')"
        >
          重置密码
        </el-button>
        <el-button
          type="text"
          size="small"
          :icon="Delete"
          @click="handleDelete(row)"
          v-if="hasPermission('user:delete')"
          class="text-red-500"
        >
          删除
        </el-button>
      </template>
    </DataTable>

    <!-- 用户表单抽屉 -->
    <FormDrawer
      v-model="formDrawer.visible"
      :mode="formDrawer.mode"
      :title="formDrawer.title"
      :fields="formFields"
      :data="formDrawer.data"
      :rules="formRules"
      :loading="formDrawer.loading"
      @submit="handleFormSubmit"
      @cancel="handleFormCancel"
      @close="handleFormClose"
    >
      <!-- 角色选择 -->
      <template #roleIds="{ value, setValue }">
        <el-select
          :model-value="value"
          @update:model-value="setValue"
          multiple
          placeholder="请选择角色"
          style="width: 100%"
          :loading="roleOptionsLoading"
        >
          <el-option
            v-for="role in roleOptions"
            :key="role.id"
            :label="role.roleName"
            :value="role.id"
          />
        </el-select>
      </template>
    </FormDrawer>

    <!-- 用户详情抽屉 -->
    <el-drawer
      v-model="detailDrawer.visible"
      title="用户详情"
      size="50%"
      direction="rtl"
    >
      <div v-if="detailDrawer.data" class="user-detail">
        <!-- 用户基本信息 -->
        <div class="detail-section">
          <h3 class="section-title">基本信息</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>头像</label>
  <div>
                <el-avatar
                  :src="detailDrawer.data.avatar"
                  :size="60"
                  shape="circle"
                >
                  {{ detailDrawer.data.nickname?.charAt(0) || detailDrawer.data.username?.charAt(0) }}
                </el-avatar>
              </div>
            </div>
            <div class="info-item">
              <label>用户名</label>
              <span>{{ detailDrawer.data.username }}</span>
            </div>
            <div class="info-item">
              <label>昵称</label>
              <span>{{ detailDrawer.data.nickname || '-' }}</span>
            </div>
            <div class="info-item">
              <label>真实姓名</label>
              <span>{{ detailDrawer.data.realName || '-' }}</span>
            </div>
            <div class="info-item">
              <label>性别</label>
              <el-tag :type="getGenderTagType(detailDrawer.data.gender)" size="small">
                {{ detailDrawer.data.genderDesc }}
              </el-tag>
            </div>
            <div class="info-item">
              <label>生日</label>
              <span>{{ detailDrawer.data.birthday || '-' }}</span>
            </div>
            <div class="info-item">
              <label>手机号</label>
              <span>{{ detailDrawer.data.phone || '-' }}</span>
            </div>
            <div class="info-item">
              <label>邮箱</label>
              <span>{{ detailDrawer.data.email || '-' }}</span>
            </div>
            <div class="info-item">
              <label>身份证号</label>
              <span>{{ detailDrawer.data.idCard || '-' }}</span>
            </div>
            <div class="info-item">
              <label>地址</label>
              <span>{{ detailDrawer.data.address || '-' }}</span>
            </div>
            <div class="info-item">
              <label>状态</label>
              <el-tag :type="detailDrawer.data.status === 1 ? 'success' : 'danger'" size="small">
                {{ detailDrawer.data.statusDesc }}
              </el-tag>
            </div>
          </div>
        </div>

        <!-- 角色信息 -->
        <div class="detail-section">
          <h3 class="section-title">角色信息</h3>
          <div class="roles-container">
            <el-tag
              v-for="role in detailDrawer.data.roles"
              :key="role.id"
              size="default"
              class="mr-2 mb-2"
            >
              {{ role.roleName }}
              <span class="text-gray-400 ml-1">({{ role.roleCode }})</span>
            </el-tag>
            <span v-if="!detailDrawer.data.roles?.length" class="text-gray-400">
              暂无角色
            </span>
          </div>
        </div>

        <!-- 权限信息 -->
        <div class="detail-section">
          <h3 class="section-title">权限信息</h3>
          <div class="permissions-container">
            <el-tag
              v-for="permission in detailDrawer.data.permissions"
              :key="permission"
              type="info"
              size="small"
              class="mr-1 mb-1"
            >
              {{ permission }}
            </el-tag>
            <span v-if="!detailDrawer.data.permissions?.length" class="text-gray-400">
              暂无权限
            </span>
          </div>
        </div>

        <!-- 登录信息 -->
        <div class="detail-section">
          <h3 class="section-title">登录信息</h3>
          <div class="info-grid">
            <div class="info-item">
              <label>最后登录时间</label>
              <span>{{ detailDrawer.data.loginTime || '-' }}</span>
            </div>
            <div class="info-item">
              <label>最后登录IP</label>
              <span>{{ detailDrawer.data.loginIp || '-' }}</span>
            </div>
            <div class="info-item">
              <label>创建时间</label>
              <span>{{ detailDrawer.data.createTime }}</span>
            </div>
            <div class="info-item">
              <label>更新时间</label>
              <span>{{ detailDrawer.data.updateTime }}</span>
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import {
  Plus,
  Edit,
  Delete,
  View,
  Download,
  Lock,
  Key
} from '@element-plus/icons-vue'

// 组件导入
import DataTable from '@/components/Table/DataTable.vue'
import SearchForm from '@/components/Form/SearchForm.vue'
import FormDrawer from '@/components/Drawer/FormDrawer.vue'

// API导入
import api from '@/api'

// 工具函数导入
import { getGenderText } from '@/utils'

// 权限检查函数 (简单示例，实际项目中应该从store或其他地方获取)
const hasPermission = (permission) => {
  // 这里应该实现真正的权限检查逻辑
  return true
}

// 响应式数据
const loading = ref(false)
const exportLoading = ref(false)
const tableData = ref([])
const selectedRows = ref([])

// 分页数据
const pagination = reactive({
  current: 1,
  size: 10,
  total: 0
})

// 搜索表单
const searchForm = ref({})

// 表单抽屉
const formDrawer = reactive({
  visible: false,
  mode: 'create',
  title: '',
  data: {},
  loading: false
})

// 详情抽屉
const detailDrawer = reactive({
  visible: false,
  data: null
})

// 角色选项
const roleOptions = ref([])
const roleOptionsLoading = ref(false)

// 计算属性
const activeUsers = computed(() => {
  return tableData.value.filter(user => user.status === 1).length
})

const onlineUsers = computed(() => {
  // 这里可以根据实际业务逻辑计算在线用户数
  // 比如最近30分钟有活动的用户
  return tableData.value.filter(user => {
    if (!user.lastLoginTime) return false
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000)
    return new Date(user.lastLoginTime) > thirtyMinutesAgo
  }).length
})

// 表格列配置
const columns = [
  {
    prop: 'avatar',
    label: '头像',
    width: 80,
    align: 'center'
  },
  {
    prop: 'username',
    label: '用户名',
    width: 120,
    sortable: true
  },
  {
    prop: 'nickname',
    label: '昵称',
    width: 120
  },
  {
    prop: 'realName',
    label: '真实姓名',
    width: 120
  },
  {
    prop: 'gender',
    label: '性别',
    width: 80,
    align: 'center'
  },
  {
    prop: 'phone',
    label: '手机号',
    width: 140
  },
  {
    prop: 'email',
    label: '邮箱',
    minWidth: 180
  },
  {
    prop: 'roles',
    label: '角色',
    minWidth: 150
  },
  {
    prop: 'status',
    label: '状态',
    width: 100,
    align: 'center'
  },
  {
    prop: 'loginTime',
    label: '最后登录',
    width: 160,
    type: 'date',
    format: 'YYYY-MM-DD HH:mm'
  },
  {
    prop: 'createTime',
    label: '创建时间',
    width: 160,
    type: 'date',
    format: 'YYYY-MM-DD HH:mm'
  }
]

// 搜索字段配置
const searchFields = [
  {
    prop: 'username',
    label: '用户名',
    type: 'input',
    placeholder: '请输入用户名'
  },
  {
    prop: 'phone',
    label: '手机号',
    type: 'input',
    placeholder: '请输入手机号'
  },
  {
    prop: 'status',
    label: '状态',
    type: 'select',
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]

// 高级搜索字段配置
const advancedSearchFields = [
  {
    prop: 'email',
    label: '邮箱',
    type: 'input',
    placeholder: '请输入邮箱'
  },
  {
    prop: 'realName',
    label: '真实姓名',
    type: 'input',
    placeholder: '请输入真实姓名'
  },
  {
    prop: 'gender',
    label: '性别',
    type: 'select',
    options: [
      { label: '男', value: 1 },
      { label: '女', value: 2 }
    ]
  },
  {
    prop: 'createTimeRange',
    label: '创建时间',
    type: 'daterange',
    placeholder: '请选择创建时间范围'
  }
]

// 表单字段配置
const formFields = [
  {
    prop: 'username',
    label: '用户名',
    type: 'input',
    required: true,
    placeholder: '请输入用户名',
    rules: [
      { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符', trigger: 'blur' }
    ]
  },
  {
    prop: 'nickname',
    label: '昵称',
    type: 'input',
    placeholder: '请输入昵称'
  },
  {
    prop: 'password',
    label: '密码',
    type: 'password',
    required: true,
    placeholder: '请输入密码',
    rules: [
      { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
    ]
  },
  {
    prop: 'phone',
    label: '手机号',
    type: 'input',
    placeholder: '请输入手机号',
    rules: [
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ]
  },
  {
    prop: 'email',
    label: '邮箱',
    type: 'input',
    placeholder: '请输入邮箱',
    rules: [
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ]
  },
  {
    prop: 'realName',
    label: '真实姓名',
    type: 'input',
    placeholder: '请输入真实姓名'
  },
  {
    prop: 'gender',
    label: '性别',
    type: 'radio',
    defaultValue: 0,
    options: [
      { label: '未知', value: 0 },
      { label: '男', value: 1 },
      { label: '女', value: 2 }
    ]
  },
  {
    prop: 'birthday',
    label: '生日',
    type: 'date',
    placeholder: '请选择生日'
  },
  {
    prop: 'address',
    label: '地址',
    type: 'textarea',
    placeholder: '请输入地址',
    rows: 3
  },
  {
    prop: 'idCard',
    label: '身份证号',
    type: 'input',
    placeholder: '请输入身份证号',
    rules: [
      { 
        pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|31)\d{3}[0-9Xx]$/,
        message: '请输入正确的身份证号',
        trigger: 'blur'
      }
    ]
  },
  {
    prop: 'roleIds',
    label: '角色',
    type: 'slot',
    help: '可选择多个角色'
  },
  {
    prop: 'status',
    label: '状态',
    type: 'radio',
    defaultValue: 1,
    options: [
      { label: '启用', value: 1 },
      { label: '禁用', value: 0 }
    ]
  }
]

// 表单验证规则
const formRules = {}

// 计算属性
const getGenderTagType = (gender) => {
  const typeMap = { 0: 'info', 1: 'primary', 2: 'success' }
  return typeMap[gender] || 'info'
}

// 生命周期
onMounted(() => {
  fetchUserList()
  fetchRoleOptions()
})

// 获取用户列表
const fetchUserList = async () => {
  try {
    loading.value = true
    const params = {
      current: pagination.current,
      size: pagination.size,
      ...searchForm.value
    }
    
    // 处理日期范围
    if (params.createTimeRange?.length === 2) {
      params.startTime = params.createTimeRange[0]
      params.endTime = params.createTimeRange[1]
      delete params.createTimeRange
    }
    
    const response = await api.user.user.getUserPage(params)
    
    if (response.success) {
      tableData.value = response.data.records.map(item => ({
        ...item,
        statusLoading: false
      }))
      pagination.total = response.data.total
    }
  } catch (error) {
    console.error('获取用户列表失败:', error)
    ElMessage.error('获取用户列表失败')
  } finally {
    loading.value = false
  }
}

// 获取角色选项
const fetchRoleOptions = async () => {
  try {
    roleOptionsLoading.value = true
    const response = await api.user.role.getAllRoles()
    if (response.success) {
      roleOptions.value = response.data
    }
  } catch (error) {
    console.error('获取角色列表失败:', error)
  } finally {
    roleOptionsLoading.value = false
  }
}

// 搜索
const handleSearch = () => {
  pagination.current = 1
  fetchUserList()
}

// 重置搜索
const handleResetSearch = () => {
  searchForm.value = {}
  handleSearch()
}

// 刷新
const handleRefresh = () => {
  fetchUserList()
}

// 分页变化
const handlePageChange = (page) => {
  pagination.current = page
  fetchUserList()
}

const handleSizeChange = (size) => {
  pagination.size = size
  pagination.current = 1
  fetchUserList()
}

// 选择变化
const handleSelectionChange = (selection) => {
  selectedRows.value = selection
}

// 新增用户
const handleCreate = () => {
  formDrawer.mode = 'create'
  formDrawer.title = '新增用户'
  formDrawer.data = {}
  formDrawer.visible = true
}

// 编辑用户
const handleEdit = async (row) => {
  try {
    const response = await api.user.user.getUserDetail(row.id)
    if (response.success) {
      formDrawer.mode = 'edit'
      formDrawer.title = '编辑用户'
      formDrawer.data = {
        ...response.data,
        roleIds: response.data.roles?.map(role => role.id) || []
      }
      formDrawer.visible = true
    }
  } catch (error) {
    console.error('获取用户详情失败:', error)
    ElMessage.error('获取用户详情失败')
  }
}

// 查看详情
const handleView = async (row) => {
  try {
    const response = await api.user.user.getUserDetail(row.id)
    if (response.success) {
      detailDrawer.data = response.data
      detailDrawer.visible = true
    }
  } catch (error) {
    console.error('获取用户详情失败:', error)
    ElMessage.error('获取用户详情失败')
  }
}

// 删除用户
const handleDelete = (row) => {
  ElMessageBox.confirm(
    `确定要删除用户 "${row.username}" 吗？`,
    '确认删除',
    {
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  ).then(async () => {
    try {
      const response = await api.user.user.deleteUser(row.id)
      if (response.success) {
        ElMessage.success('删除成功')
        fetchUserList()
      }
    } catch (error) {
      console.error('删除用户失败:', error)
      ElMessage.error('删除用户失败')
    }
  })
}

// 批量删除
const handleBatchDelete = (rows) => {
  ElMessageBox.confirm(
    `确定要删除选中的 ${rows.length} 个用户吗？`,
    '确认批量删除',
    {
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  ).then(async () => {
    try {
      const userIds = rows.map(row => row.id)
      const response = await api.user.user.batchDeleteUsers(userIds)
      if (response.success) {
        ElMessage.success('批量删除成功')
        fetchUserList()
      }
    } catch (error) {
      console.error('批量删除失败:', error)
      ElMessage.error('批量删除失败')
    }
  })
}

// 状态变化
const handleStatusChange = async (row) => {
  row.statusLoading = true
  try {
    const response = await api.user.user.changeUserStatus(row.id, row.status)
    if (response.success) {
      ElMessage.success(`${row.status === 1 ? '启用' : '禁用'}成功`)
      // 更新状态描述
      row.statusDesc = row.status === 1 ? '启用' : '禁用'
    } else {
      // 恢复原状态
      row.status = row.status === 1 ? 0 : 1
    }
  } catch (error) {
    console.error('修改状态失败:', error)
    ElMessage.error('修改状态失败')
    // 恢复原状态
    row.status = row.status === 1 ? 0 : 1
  } finally {
    row.statusLoading = false
  }
}

// 批量修改状态
const handleBatchChangeStatus = (rows, status) => {
  const action = status === 1 ? '启用' : '禁用'
  ElMessageBox.confirm(
    `确定要${action}选中的 ${rows.length} 个用户吗？`,
    `确认批量${action}`,
    {
      type: 'warning',
      confirmButtonText: '确定',
      cancelButtonText: '取消'
    }
  ).then(async () => {
    try {
      const promises = rows.map(row => 
        api.user.user.changeUserStatus(row.id, status)
      )
      await Promise.all(promises)
      ElMessage.success(`批量${action}成功`)
      fetchUserList()
    } catch (error) {
      console.error(`批量${action}失败:`, error)
      ElMessage.error(`批量${action}失败`)
    }
  })
}

// 重置密码
const handleResetPassword = (row) => {
  ElMessageBox.prompt(
    `请输入用户 "${row.username}" 的新密码`,
    '重置密码',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPlaceholder: '请输入新密码',
      inputType: 'password',
      inputValidator: (value) => {
        if (!value || value.length < 6) {
          return '密码长度不能少于6位'
        }
        return true
      }
    }
  ).then(async ({ value }) => {
    try {
      const response = await api.user.user.resetPassword(row.id, value)
      if (response.success) {
        ElMessage.success('密码重置成功')
      }
    } catch (error) {
      console.error('重置密码失败:', error)
      ElMessage.error('重置密码失败')
    }
  })
}

// 导出
const handleExport = async () => {
  try {
    exportLoading.value = true
    // 这里应该调用导出API
    ElMessage.success('导出功能待实现')
  } catch (error) {
    console.error('导出失败:', error)
    ElMessage.error('导出失败')
  } finally {
    exportLoading.value = false
  }
}

// 表单提交
const handleFormSubmit = async (formData) => {
  try {
    formDrawer.loading = true
    
    let response
    if (formDrawer.mode === 'create') {
      response = await api.user.user.createUser(formData)
    } else {
      response = await api.user.user.updateUser(formDrawer.data.id, formData)
    }
    
    if (response.success) {
      ElMessage.success(`${formDrawer.mode === 'create' ? '创建' : '更新'}成功`)
      formDrawer.visible = false
      fetchUserList()
    }
  } catch (error) {
    console.error('提交失败:', error)
    ElMessage.error(`${formDrawer.mode === 'create' ? '创建' : '更新'}失败`)
  } finally {
    formDrawer.loading = false
  }
}

// 表单取消
const handleFormCancel = () => {
  formDrawer.visible = false
}

// 表单关闭
const handleFormClose = () => {
  formDrawer.data = {}
}
</script>

<style scoped>
.user-management {
  height: 100%;
  background: #f5f7fa;
}

/* 页面标题栏样式 */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 24px 24px 20px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: #fff;
  margin-bottom: 20px;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 4px 20px rgba(79, 172, 254, 0.25);
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

/* 主内容区域调整 */
.user-management :deep(.data-table-container) {
  margin: 0 24px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 1px solid #e4e7ed;
}

.user-detail {
  padding: 20px;
}

.detail-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e7ed;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item label {
  font-size: 14px;
  color: #606266;
  font-weight: 500;
}

.info-item span {
  font-size: 14px;
  color: #303133;
}

.roles-container,
.permissions-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.text-gray-400 {
  color: #909399;
}

.mr-1 {
  margin-right: 4px;
}

.mr-2 {
  margin-right: 8px;
}

.mb-1 {
  margin-bottom: 4px;
}

.mb-2 {
  margin-bottom: 8px;
}

.text-red-500 {
  color: #f56565;
}
</style>