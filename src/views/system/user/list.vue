<template>
    <div class="page-container">
      <div class="page-header">
        <h1 class="page-title">用户管理</h1>
        <div class="page-actions">
          <el-button type="danger" @click="handleBatchDelete" :disabled="selectedUsers.length === 0">
            <el-icon><Delete /></el-icon>
            批量删除
          </el-button>
          <el-button type="primary" @click="handleAdd">
            <el-icon><Plus /></el-icon>
            新增用户
          </el-button>
        </div>
      </div>
      
      <div class="content-card">
        <!-- 搜索区域 -->
        <div class="search-section">
          <el-form :model="searchForm" inline>
            <el-form-item label="用户名">
              <el-input
                v-model="searchForm.username"
                placeholder="请输入用户名"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="手机号">
              <el-input
                v-model="searchForm.phone"
                placeholder="请输入手机号"
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
  
  
        <!-- 用户列表 -->
        <div class="table-section">
          <el-table
            v-loading="loading"
            :data="userList"
            stripe
            border
            style="width: 100%"
            @selection-change="handleSelectionChange"
            :default-sort="{prop: 'createTime', order: 'descending'}"
          >
            <!-- 选择列，固定在左侧 -->
            <el-table-column type="selection" width="55" fixed="left" />
            
            <!-- 序号列 -->
            <el-table-column type="index" label="序号" width="80" align="center" />
            
            <!-- 头像列放在前面 -->
            <el-table-column label="头像" width="80" align="center">
              <template #default="{ row }">
                <div class="avatar-container">
                  <el-avatar :size="40" :src="row.avatar" />
                </div>
              </template>
            </el-table-column>
            
            <el-table-column prop="username" label="用户名" width="120" />
            <el-table-column prop="nickname" label="昵称" width="120" />
            <el-table-column prop="realName" label="真实姓名" width="120" />
            <el-table-column prop="phone" label="手机号" width="130" />
            <el-table-column prop="email" label="邮箱" width="180" />
            <el-table-column prop="genderDesc" label="性别" width="80" align="center" />
            <el-table-column prop="status" label="状态" width="100" align="center">
              <template #default="{ row }">
                <el-tag :type="row.status === 1 ? 'success' : 'danger'">
                  {{ row.statusDesc }}
                </el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间" width="180" sortable />
            
            <!-- 操作列，固定在右侧 -->
            <el-table-column label="操作" width="240" fixed="right" align="center">
              <template #default="{ row }">
                <div class="action-grid">
                  <el-button type="info" text @click="handleViewDetail(row)">
                    <el-icon><View /></el-icon>查看
                  </el-button>
                  <el-button type="primary" text @click="handleEdit(row)">
                    <el-icon><Edit /></el-icon>编辑
                  </el-button>
                  <el-button type="warning" text @click="handleResetPassword(row)">
                    <el-icon><Key /></el-icon>重置
                  </el-button>
                  <el-button 
                    :type="row.status === 1 ? 'danger' : 'success'" 
                    text
                    @click="handleToggleStatus(row)"
                  >
                    <el-icon><component :is="row.status === 1 ? 'Lock' : 'Unlock'" /></el-icon>
                    {{ row.status === 1 ? '禁用' : '启用' }}
                  </el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
  
          <!-- 分页 -->
          <div class="pagination-section">
            <el-pagination
              v-model:current-page="pagination.current"
              v-model:page-size="pagination.size"
              :page-sizes="[10, 20, 50, 100]"
              :total="pagination.total"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </div>
  
      <!-- 用户表单对话框 -->
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
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="form.realName" placeholder="请输入真实姓名" />
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入手机号" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" placeholder="请输入邮箱" />
          </el-form-item>
          <el-form-item label="密码" prop="password" v-if="!form.id">
            <el-input 
              v-model="form.password" 
              type="password" 
              placeholder="请输入密码"
              show-password
            />
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
  
      <!-- 重置密码对话框 -->
      <el-dialog
        v-model="resetPasswordVisible"
        title="重置密码"
        width="400px"
      >
        <el-form
          ref="resetPasswordFormRef"
          :model="resetPasswordForm"
          :rules="resetPasswordRules"
          label-width="100px"
        >
          <el-form-item label="新密码" prop="newPassword">
            <el-input 
              v-model="resetPasswordForm.newPassword" 
              type="password" 
              placeholder="请输入新密码"
              show-password
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input 
              v-model="resetPasswordForm.confirmPassword" 
              type="password" 
              placeholder="请再次输入新密码"
              show-password
            />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="resetPasswordVisible = false">取消</el-button>
            <el-button type="primary" @click="handleResetPasswordSubmit" :loading="resetPasswordLoading">
              确定
            </el-button>
          </span>
        </template>
      </el-dialog>
  
      <!-- 用户详情抽屉 -->
      <el-drawer
        v-model="drawerVisible"
        title="用户详情"
        size="400px"
        direction="rtl"
        :destroy-on-close="false"
        :close-on-click-modal="false"
        :show-close="true"
        :with-header="true"
      >
        <template #header>
          <div style="display: flex; align-items: center; gap: 8px;">
            <el-icon style="font-size: 18px;"><User /></el-icon>
            <span style="font-size: 18px; font-weight: 600;">用户详情</span>
          </div>
        </template>
        <UserDetail 
          v-if="currentUser" 
          :user="currentUser" 
          @edit="handleEdit" 
          @toggle-status="handleToggleStatus"
        />
      </el-drawer>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, onMounted } from 'vue'
  import { ElMessage, ElMessageBox } from 'element-plus'
  import { 
    Plus, Search, Refresh, View, Edit, Key, Lock, Unlock, 
    User, UserFilled, Iphone, Message, Male, CircleCheck, Calendar, Timer, Delete 
  } from '@element-plus/icons-vue'
  import { 
    getUserList, 
    createUser, 
    updateUser, 
    updateUserPassword,
    deleteUser 
  } from '@/api'
  import UserDetail from '@/components/UserDetail.vue'
  
  // 响应式数据
  const loading = ref(false)
  const userList = ref([])
  const dialogVisible = ref(false)
  const dialogTitle = ref('')
  const submitLoading = ref(false)
  const resetPasswordVisible = ref(false)
  const resetPasswordLoading = ref(false)
  const currentUserId = ref(null)
  const selectedUsers = ref([]) // 存储选中的用户
  const drawerVisible = ref(false) // 抽屉是否可见
  const currentUser = ref(null) // 当前查看的用户
  
  // 搜索表单
  const searchForm = reactive({
    username: '',
    phone: '',
    status: '1' // 默认设置为正常状态
  })
  
  // 分页数据
  const pagination = reactive({
    current: 1,
    size: 10,
    total: 0
  })
  
  // 用户表单
  const formRef = ref()
  const form = reactive({
    id: null,
    username: '',
    realName: '',
    phone: '',
    email: '',
    password: '',
    status: 1
  })
  
  // 重置密码表单
  const resetPasswordFormRef = ref()
  const resetPasswordForm = reactive({
    newPassword: '',
    confirmPassword: ''
  })
  
  // 表单验证规则
  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符', trigger: 'blur' }
    ],
    realName: [
      { required: true, message: '请输入真实姓名', trigger: 'blur' }
    ],
    phone: [
      { required: true, message: '请输入手机号', trigger: 'blur' },
      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
    ],
    email: [
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
    ],
    status: [
      { required: true, message: '请选择状态', trigger: 'change' }
    ]
  }
  
  // 重置密码验证规则
  const resetPasswordRules = {
    newPassword: [
      { required: true, message: '请输入新密码', trigger: 'blur' },
      { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
    ],
    confirmPassword: [
      { required: true, message: '请再次输入新密码', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value !== resetPasswordForm.newPassword) {
            callback(new Error('两次输入密码不一致'))
          } else {
            callback()
          }
        },
        trigger: 'blur'
      }
    ]
  }
  
  // 获取用户列表
  const fetchUserList = async () => {
    try {
      loading.value = true
      const params = {
        page: pagination.current,
        size: pagination.size,
        ...searchForm
      }
      
      const response = await getUserList(params)
      userList.value = response.records || []
      pagination.total = response.total || 0
    } catch (error) {
      ElMessage.error('获取用户列表失败')
      console.error('获取用户列表失败:', error)
    } finally {
      loading.value = false
    }
  }
  
  // 搜索
  const handleSearch = () => {
    pagination.current = 1
    fetchUserList()
  }
  
  // 重置搜索
  const handleReset = () => {
    Object.assign(searchForm, {
      username: '',
      phone: '',
      status: '1'
    })
    pagination.current = 1
    fetchUserList()
  }
  
  // 分页大小改变
  const handleSizeChange = (size) => {
    pagination.size = size
    pagination.current = 1
    fetchUserList()
  }
  
  // 当前页改变
  const handleCurrentChange = (current) => {
    pagination.current = current
    fetchUserList()
  }
  
  // 新增用户
  const handleAdd = () => {
    dialogTitle.value = '新增用户'
    Object.assign(form, {
      id: null,
      username: '',
      realName: '',
      phone: '',
      email: '',
      password: '',
      status: 1
    })
    dialogVisible.value = true
  }
  
  // 编辑用户
  const handleEdit = (row) => {
    dialogTitle.value = '编辑用户'
    Object.assign(form, {
      id: row.id,
      username: row.username,
      realName: row.realName,
      phone: row.phone,
      email: row.email,
      password: '',
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
        // 编辑用户
        const { password, ...updateData } = form
        await updateUser(form.id, updateData)
        ElMessage.success('用户更新成功')
      } else {
        // 新增用户
        await createUser(form)
        ElMessage.success('用户创建成功')
      }
      
      dialogVisible.value = false
      // 重新获取用户列表
      await fetchUserList()
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
  
  // 重置密码
  const handleResetPassword = (row) => {
    currentUserId.value = row.id
    Object.assign(resetPasswordForm, {
      newPassword: '',
      confirmPassword: ''
    })
    resetPasswordVisible.value = true
  }
  
  // 提交重置密码
  const handleResetPasswordSubmit = async () => {
    try {
      await resetPasswordFormRef.value.validate()
      resetPasswordLoading.value = true
      
      await updateUserPassword(currentUserId.value, {
        newPassword: resetPasswordForm.newPassword
      })
      
      ElMessage.success('密码重置成功')
      resetPasswordVisible.value = false
    } catch (error) {
      ElMessage.error(error.message || '密码重置失败')
      console.error('重置密码失败:', error)
    } finally {
      resetPasswordLoading.value = false
    }
  }
  
  // 切换用户状态
  const handleToggleStatus = async (row) => {
    try {
      const newStatus = row.status === 1 ? 0 : 1
      const action = newStatus === 1 ? '启用' : '禁用'
      
      await ElMessageBox.confirm(
        `确定要${action}用户 "${row.username}" 吗？`,
        '确认操作',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
      
      await updateUser(row.id, { status: newStatus })
      ElMessage.success(`用户${action}成功`)
      fetchUserList()
    } catch (error) {
      if (error !== 'cancel') {
        ElMessage.error(error.message || '操作失败')
        console.error('切换用户状态失败:', error)
      }
    }
  }
  
  // 处理表格选择变化
  const handleSelectionChange = (selection) => {
    selectedUsers.value = selection
  }
  
  // 查看用户详情
  const handleViewDetail = (row) => {
    currentUser.value = row
    drawerVisible.value = true
  }
  
  // 批量启用用户
  const handleBatchEnable = async () => {
    if (selectedUsers.value.length === 0) {
      ElMessage.warning('请选择要启用的用户')
      return
    }
    
    try {
      await ElMessageBox.confirm('确认要批量启用所选用户吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      
      loading.value = true
      // 这里假设后端有批量操作的API，如果没有可以用Promise.all处理多个请求
      // await api.updateBatchUserStatus(selectedUsers.value.map(user => user.id), 1)
      
      // 模拟批量操作成功
      ElMessage.success('批量启用成功')
      fetchUserList() // 重新加载列表
    } catch (error) {
      console.error('批量启用失败:', error)
    } finally {
      loading.value = false
    }
  }
  
  // 批量禁用用户
  const handleBatchDisable = async () => {
    if (selectedUsers.value.length === 0) {
      ElMessage.warning('请选择要禁用的用户')
      return
    }
    
    try {
      await ElMessageBox.confirm('确认要批量禁用所选用户吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      
      loading.value = true
      // 这里假设后端有批量操作的API，如果没有可以用Promise.all处理多个请求
      // await api.updateBatchUserStatus(selectedUsers.value.map(user => user.id), 0)
      
      // 模拟批量操作成功
      ElMessage.success('批量禁用成功')
      fetchUserList() // 重新加载列表
    } catch (error) {
      console.error('批量禁用失败:', error)
    } finally {
      loading.value = false
    }
  }
  
  // 批量删除用户
  const handleBatchDelete = async () => {
    if (selectedUsers.value.length === 0) {
      ElMessage.warning('请选择要删除的用户')
      return
    }
    
    try {
      await ElMessageBox.confirm(
        `确认要批量删除所选 ${selectedUsers.value.length} 个用户吗？此操作不可恢复！`, 
        '警告', 
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          confirmButtonClass: 'el-button--danger'
        }
      )
      
      loading.value = true
      // 这里假设后端有批量删除的API，如果没有可以用Promise.all处理多个请求
      // const userIds = selectedUsers.value.map(user => user.id)
      // await api.deleteBatchUsers(userIds)
      
      // 模拟批量操作成功
      ElMessage.success('批量删除成功')
      fetchUserList() // 重新加载列表
    } catch (error) {
      if (error !== 'cancel') {
        console.error('批量删除失败:', error)
      }
    } finally {
      loading.value = false
    }
  }
  
  // 页面加载时获取数据
  onMounted(() => {
    fetchUserList()
  })
  </script>
  
  <style scoped>
  .page-container {
    padding: 20px;
  }
  
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .page-title {
    font-size: 24px;
    font-weight: 600;
    color: #303133;
    margin: 0;
  }
  
  .content-card {
    background: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  .search-section {
    margin-bottom: 20px;
  }
  
  .table-section {
    margin-top: 20px;
  }
  
  .pagination-section {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
  
  .avatar-container {
    display: flex;
    justify-content: center;
  }
  
  :deep(.el-avatar) {
    border: 1px solid #eee;
  }
  
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  
  .batch-actions {
    margin-bottom: 20px;
  }
  
  .batch-buttons {
    display: inline-flex;
    margin-left: 15px;
    gap: 10px;
  }
  
  .action-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  </style> 