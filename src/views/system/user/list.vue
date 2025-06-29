<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 搜索区域 -->
      <div class="search-section">
        <el-form :model="searchForm" ref="searchFormRef" class="search-form">
          <div class="search-grid">
            <el-form-item label="用户名" prop="username">
              <el-input
                v-model="searchForm.username"
                placeholder="请输入用户名"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
              <el-input
                v-model="searchForm.phone"
                placeholder="请输入手机号"
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
            <span>新增用户</span>
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
          v-loading="loading"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column label="头像" width="80">
            <template #default="{ row }">
              <el-avatar 
                :size="40" 
                :src="row.avatar" 
                :icon="UserFilled"
              />
            </template>
          </el-table-column>
          <el-table-column prop="username" label="用户名" min-width="120" />
          <el-table-column prop="nickname" label="昵称" min-width="120" />
          <el-table-column prop="realName" label="真实姓名" min-width="120" />
          <el-table-column prop="phone" label="手机号" min-width="130" />
          <el-table-column prop="email" label="邮箱" min-width="160" />
          <el-table-column prop="gender" label="性别" width="80">
            <template #default="{ row }">
              <span v-if="row.gender === 1">男</span>
              <span v-else-if="row.gender === 2">女</span>
              <span v-else>未知</span>
            </template>
          </el-table-column>
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
        <el-table-column prop="createTime" label="创建时间" width="160">
          <template #default="{ row }">
            {{ formatDate(row.createTime) }}
          </template>
        </el-table-column>
          <el-table-column label="操作" width="300" fixed="right">
            <template #default="{ row }">
              <div class="table-actions">
                <button class="action-btn edit" @click="handleEdit(row)">
                  <el-icon><Edit /></el-icon>
                  编辑
                </button>
                <button class="action-btn assign" @click="handleResetPassword(row)">
                  <el-icon><Key /></el-icon>
                  重置密码
                </button>
                <button class="action-btn delete" @click="handleDelete(row)">
                  <el-icon><Delete /></el-icon>
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

    <!-- 添加/编辑用户抽屉 -->
    <el-drawer
      v-model="dialogVisible"
      :title="dialogType === 'add' ? '新增用户' : '编辑用户'"
      direction="rtl"
      size="600px"
      @close="handleDialogClose"
    >
      <!-- 用户信息展示 -->
      <div class="user-info-display" v-if="dialogType === 'edit'">
        <div class="user-avatar-section">
          <AvatarUpload 
            v-model="userForm.avatar" 
            :size="100"
            @upload-success="handleAvatarUploadSuccess"
          />
        </div>
        <div class="user-details">
          <h3>{{ userForm.nickname || userForm.username }}</h3>
          <p class="user-id">用户ID: {{ userForm.id }}</p>
          <p class="user-status">
            <el-tag :type="userForm.status === 1 ? 'success' : 'danger'">
              {{ userForm.status === 1 ? '启用' : '禁用' }}
            </el-tag>
          </p>
        </div>
      </div>
      <el-form
        ref="userFormRef"
        :model="userForm"
        :rules="userFormRules"
        label-width="100px"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="userForm.username" placeholder="请输入用户名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="userForm.nickname" placeholder="请输入昵称" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20" v-if="dialogType === 'add'">
          <el-col :span="12">
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="userForm.password"
                type="password"
                placeholder="请输入密码"
                show-password
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="确认密码" prop="confirmPassword">
              <el-input
                v-model="userForm.confirmPassword"
                type="password"
                placeholder="请再次输入密码"
                show-password
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model="userForm.phone" placeholder="请输入手机号" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="userForm.email" placeholder="请输入邮箱" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="真实姓名" prop="realName">
              <el-input v-model="userForm.realName" placeholder="请输入真实姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生日" prop="birthday">
              <el-date-picker
                v-model="userForm.birthday"
                type="date"
                placeholder="请选择生日"
                style="width: 100%"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="性别" prop="gender">
              <el-radio-group v-model="userForm.gender">
                <el-radio :value="0">未知</el-radio>
                <el-radio :value="1">男</el-radio>
                <el-radio :value="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="身份证号" prop="idCard">
              <el-input v-model="userForm.idCard" placeholder="请输入身份证号" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="地址" prop="address">
          <el-input v-model="userForm.address" placeholder="请输入地址" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-radio-group v-model="userForm.status">
                <el-radio :value="1">启用</el-radio>
                <el-radio :value="0">禁用</el-radio>
              </el-radio-group>
        </el-form-item>
        
        <!-- 角色分配 -->
        <el-form-item label="分配角色" prop="roleIds">
          <el-select
            v-model="userForm.roleIds"
            multiple
            placeholder="请选择角色"
            style="width: 100%"
            collapse-tags
            collapse-tags-tooltip
          >
            <el-option
              v-for="role in roleList"
              :key="role.id"
              :label="role.roleName"
              :value="role.id"
            >
              <span>{{ role.roleName }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">
                {{ role.roleCode }}
              </span>
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      
      <template #footer>
        <div class="drawer-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit" :loading="submitLoading">
            确定
          </el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Refresh, Plus, Edit, Delete, Lock, UserFilled } from '@element-plus/icons-vue'
import { userApi, roleApi } from '@/api/user'
import AvatarUpload from '@/components/AvatarUpload.vue'

// 响应式数据
const loading = ref(false)
const submitLoading = ref(false)
const tableData = ref([])
const multipleSelection = ref([])
const dialogVisible = ref(false)
const dialogType = ref('add') // add | edit

// 搜索表单
const searchForm = reactive({
  username: '',
  phone: '',
  status: null
})

// 分页信息
const pageInfo = reactive({
  current: 1,
  size: 10,
  total: 0
})

// 角色列表
const roleList = ref([])

// 用户表单
const userForm = reactive({
  id: null,
  username: '',
  nickname: '',
  password: '',
  confirmPassword: '',
  phone: '',
  email: '',
  realName: '',
  gender: 0,
  idCard: '',
  birthday: '',
  address: '',
  status: 1,
  avatar: '',
  roleIds: []
})

// 表单验证规则
const userFormRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度为 3 到 20 个字符', trigger: 'blur' }
  ],
  nickname: [
    { required: true, message: '请输入昵称', trigger: 'blur' },
    { min: 2, max: 20, message: '昵称长度为 2 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度为 6 到 20 个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请再次输入密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value !== userForm.password) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      },
      trigger: 'blur'
    }
  ],
  phone: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
}

// refs
const searchFormRef = ref()
const userFormRef = ref()

// 方法
// 获取角色列表
const fetchRoleList = async () => {
  try {
    const result = await roleApi.getAllRoles()
    console.log('角色列表数据:', result)
    // 处理不同的数据结构
    if (result.records) {
      roleList.value = result.records
    } else if (result.data) {
      roleList.value = result.data
    } else if (Array.isArray(result)) {
      roleList.value = result
    } else {
      roleList.value = []
    }
    console.log('处理后的角色列表:', roleList.value)
  } catch (error) {
    console.error('获取角色列表失败:', error)
    ElMessage.error('获取角色列表失败')
    roleList.value = []
  }
}

// 头像上传前验证
const beforeAvatarUpload = (file) => {
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
  const isLt2M = file.size / 1024 / 1024 < 2

  if (!isJPG) {
    ElMessage.error('头像图片只能是 JPG/PNG 格式!')
  }
  if (!isLt2M) {
    ElMessage.error('头像图片大小不能超过 2MB!')
  }
  return isJPG && isLt2M
}

// 处理头像上传
const handleAvatarUpload = async (options) => {
  const { file } = options
  const formData = new FormData()
  formData.append('file', file)
  
  try {
    // TODO: 调用真实的文件上传API
    // const result = await fileApi.uploadAvatar(formData)
    // userForm.avatar = result.data.url
    
    // 临时使用本地预览
    const reader = new FileReader()
    reader.onload = (e) => {
      userForm.avatar = e.target.result
    }
    reader.readAsDataURL(file)
    
    ElMessage.success('头像上传成功')
  } catch (error) {
    console.error('头像上传失败:', error)
    ElMessage.error('头像上传失败')
  }
}

const fetchUserList = async () => {
  loading.value = true
  try {
    const params = {
      current: pageInfo.current,
      size: pageInfo.size,
      ...searchForm
    }
    const result = await userApi.getUserPage(params)
    tableData.value = result.records || []
    pageInfo.total = result.total || 0
  } catch (error) {
    console.error('获取用户列表失败:', error)
    ElMessage.error('获取用户列表失败')
  } finally {
    loading.value = false
  }
}

const handleSearch = () => {
  pageInfo.current = 1
  fetchUserList()
}

const handleReset = () => {
  searchFormRef.value?.resetFields()
  pageInfo.current = 1
  fetchUserList()
}

const handleAdd = () => {
  dialogType.value = 'add'
  resetUserForm()
  dialogVisible.value = true
}

const handleEdit = (row) => {
  dialogType.value = 'edit'
  Object.assign(userForm, {
    ...row,
    password: '',
    confirmPassword: ''
  })
  dialogVisible.value = true
}

const handleDelete = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除用户"${row.username}"吗？`,
      '确认删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    await userApi.deleteUser(row.id)
    ElMessage.success('删除成功')
    fetchUserList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除用户失败:', error)
      ElMessage.error('删除用户失败')
    }
  }
}

const handleBatchDelete = async () => {
  try {
    await ElMessageBox.confirm(
      `确定要删除选中的 ${multipleSelection.value.length} 个用户吗？`,
      '确认批量删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    const userIds = multipleSelection.value.map(item => item.id)
    await userApi.batchDeleteUsers(userIds)
    ElMessage.success('批量删除成功')
    fetchUserList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('批量删除用户失败:', error)
      ElMessage.error('批量删除用户失败')
    }
  }
}

const handleResetPassword = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要重置用户"${row.username}"的密码吗？重置后密码为：123456`,
      '确认重置密码',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    await userApi.resetPassword(row.id, '123456')
    ElMessage.success('密码重置成功，新密码为：123456')
  } catch (error) {
    if (error !== 'cancel') {
      console.error('重置密码失败:', error)
      ElMessage.error('重置密码失败')
    }
  }
}

const handleSelectionChange = (selection) => {
  multipleSelection.value = selection
}

const handleSizeChange = (size) => {
  pageInfo.size = size
  pageInfo.current = 1
  fetchUserList()
}

const handleCurrentChange = (current) => {
  pageInfo.current = current
  fetchUserList()
}

const handleDialogClose = () => {
  userFormRef.value?.resetFields()
  resetUserForm()
}

const handleSubmit = async () => {
  try {
    await userFormRef.value?.validate()
    submitLoading.value = true
    
    const formData = { ...userForm }
    // 移除确认密码字段
    delete formData.confirmPassword
    
    if (dialogType.value === 'add') {
      await userApi.createUser(formData)
      ElMessage.success('用户创建成功')
    } else {
      await userApi.updateUser(formData.id, formData)
      ElMessage.success('用户更新成功')
    }
    
    dialogVisible.value = false
    fetchUserList()
  } catch (error) {
    console.error('提交失败:', error)
    ElMessage.error('操作失败')
  } finally {
    submitLoading.value = false
  }
}

// 头像上传成功处理
const handleAvatarUploadSuccess = async (result) => {
  try {
    // 如果是编辑模式，直接更新用户头像
    if (dialogType.value === 'edit' && userForm.id) {
      const updateData = {
        id: userForm.id,
        avatar: result.url
      }
      
      await userApi.updateUser(userForm.id, updateData)
      ElMessage.success('头像更新成功')
      
      // 刷新用户列表
      fetchUserList()
    }
  } catch (error) {
    console.error('头像更新失败:', error)
    ElMessage.error('头像更新失败，请重试')
  }
}

const resetUserForm = () => {
  Object.assign(userForm, {
    id: null,
    username: '',
    nickname: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: '',
    realName: '',
    gender: 0,
    idCard: '',
    birthday: '',
    address: '',
    status: 1,
    avatar: '',
    roleIds: []
  })
}

const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('zh-CN')
}

const handleStatusChange = async (row) => {
  try {
    await userApi.changeUserStatus(row.id, row.status)
    ElMessage.success('状态更新成功')
  } catch (e) {
    ElMessage.error('状态更新失败')
    row.status = row.status === 1 ? 0 : 1
  }
}

// 生命周期
onMounted(() => {
  fetchUserList()
  fetchRoleList()
})
</script>

<style scoped>
/* 页面容器 */
.page-container {
  padding: 24px;
  background: #fafafa;
  min-height: calc(100vh - 60px);
}

.content-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  border: none;
  overflow: hidden;
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
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: end;
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

/* 用户头像区域样式 */
.user-avatar-section {
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
}

.avatar-uploader {
  margin-top: 8px;
}

.user-basic-info {
  flex: 1;
}

.user-basic-info h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.user-id {
  margin: 4px 0;
  font-size: 14px;
  color: #6c757d;
}

.user-status {
  margin: 8px 0 0 0;
}

/* 抽屉底部按钮样式 */
.drawer-footer {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid #e9ecef;
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
  
  .user-avatar-section {
    flex-direction: column;
    text-align: center;
  }
  
  .avatar-container {
    margin-right: 0;
    margin-bottom: 16px;
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
  padding: 16px 24px;
  background: #ffffff;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.action-left {
  display: flex;
  gap: 12px;
}

.action-right {
  display: flex;
  gap: 8px;
  align-items: center;
}

.total-info {
  color: #666666;
  font-size: 14px;
}

/* 按钮样式 */
.btn-primary {
  background: linear-gradient(135deg, #A5D6A7 0%, #81C784 100%);
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(165, 214, 167, 0.3);
  transition: all 0.2s ease;
  color: #ffffff;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(165, 214, 167, 0.4);
}

.btn-secondary {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px 16px;
  color: #666666;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #f8f9fa;
  border-color: #A5D6A7;
  color: #A5D6A7;
}

/* 表格样式 */
.data-table {
  margin: 0;
}

.data-table :deep(.el-table) {
  border: none;
  background: transparent;
}

.data-table :deep(.el-table__header) {
  background: #fafafa;
}

.data-table :deep(.el-table__header th) {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  padding: 16px 12px;
  font-weight: 600;
  color: #333333;
}

.data-table :deep(.el-table__body tr) {
  transition: background-color 0.2s ease;
}

.data-table :deep(.el-table__body tr:hover) {
  background: #f8fffe;
}

.data-table :deep(.el-table__body td) {
  border: none;
  border-bottom: 1px solid #f5f5f5;
  padding: 16px 12px;
}

/* 状态标签 */
.status-tag {
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  border: none;
}

.status-tag.active {
  background: #e8f5e8;
  color: #2e7d32;
}

.status-tag.inactive {
  background: #ffeaa7;
  color: #d68910;
}

/* 操作按钮 */
.table-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.action-btn {
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.action-btn.edit {
  background: #e3f2fd;
  color: #1976d2;
}

.action-btn.edit:hover {
  background: #bbdefb;
}

.action-btn.delete {
  background: #ffebee;
  color: #d32f2f;
}

.action-btn.delete:hover {
  background: #ffcdd2;
}

.action-btn.assign {
  background: #f3e5f5;
  color: #7b1fa2;
}

.action-btn.assign:hover {
  background: #e1bee7;
}

/* 分页 */
.pagination-container {
  padding: 20px 24px;
  background: #ffffff;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-info {
  color: #666666;
  font-size: 14px;
}

:deep(.el-pagination) {
  --el-pagination-button-color: #666666;
  --el-pagination-hover-color: #A5D6A7;
  --el-pagination-button-bg-color: transparent;
}

.el-form-item {
  margin-bottom: 18px;
}

/* 用户信息展示区域 */
.user-info-display {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 8px;
  margin-bottom: 24px;
}

.user-avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.user-details {
  flex: 1;
}

.user-details h3 {
  margin: 0 0 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.user-details p {
  margin: 4px 0;
  font-size: 14px;
  color: #666;
}

.user-id {
  font-family: 'Courier New', monospace;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
}

.user-status {
  margin-top: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .search-form {
    flex-direction: column;
  }
  
  .search-item {
    min-width: 100%;
  }
  
  .action-bar {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .pagination-container {
    flex-direction: column;
    gap: 12px;
  }
}
</style>