<template>
  <div class="farm-status-management">
    <!-- 页面标题 -->
    <div class="page-header">
      <h2>农场状态管理</h2>
      <p class="page-description">管理和监控农场状态，当前用户ID: {{ farmStore.currentUserId }}</p>
    </div>

    <!-- 操作区域 -->
    <div class="action-bar">
      <el-button type="primary" @click="initializeStore" :loading="farmStore.loading">
        <el-icon><Refresh /></el-icon>
        初始化农场状态
      </el-button>
      <el-button @click="refreshData" :loading="farmStore.loading">
        <el-icon><Refresh /></el-icon>
        刷新数据
      </el-button>
      <el-button @click="showUserFarms">
        <el-icon><User /></el-icon>
        我的农场
      </el-button>
    </div>

    <!-- 统计卡片 -->
    <div class="stats-cards">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-card class="stats-card">
            <div class="stats-content">
              <div class="stats-number">{{ farmStore.farmList.length }}</div>
              <div class="stats-label">总农场数</div>
            </div>
            <el-icon class="stats-icon" color="#409EFF"><House /></el-icon>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stats-card">
            <div class="stats-content">
              <div class="stats-number">{{ farmStore.approvedFarms.length }}</div>
              <div class="stats-label">审核通过</div>
            </div>
            <el-icon class="stats-icon" color="#67C23A"><SuccessFilled /></el-icon>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stats-card">
            <div class="stats-content">
              <div class="stats-number">{{ farmStore.pendingFarms.length }}</div>
              <div class="stats-label">待审核</div>
            </div>
            <el-icon class="stats-icon" color="#E6A23C"><Clock /></el-icon>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card class="stats-card">
            <div class="stats-content">
              <div class="stats-number">{{ farmStore.rejectedFarms.length }}</div>
              <div class="stats-label">审核拒绝</div>
            </div>
            <el-icon class="stats-icon" color="#F56C6C"><CloseBold /></el-icon>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 当前农场信息 -->
    <el-card v-if="farmStore.currentFarm" class="current-farm-card">
      <template #header>
        <div class="card-header">
          <span>当前农场信息</span>
          <el-tag :type="farmStore.getStatusType(farmStore.currentFarm.auditStatus)">
            {{ farmStore.getStatusText(farmStore.currentFarm.auditStatus) }}
          </el-tag>
        </div>
      </template>
      <div class="farm-info">
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="info-item">
              <label>农场名称:</label>
              <span>{{ farmStore.currentFarm.farmName }}</span>
            </div>
            <div class="info-item">
              <label>农场编码:</label>
              <span>{{ farmStore.currentFarm.farmCode }}</span>
            </div>
            <div class="info-item">
              <label>所在地区:</label>
              <span>{{ farmStore.currentFarm.region }}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="info-item">
              <label>农场面积:</label>
              <span>{{ farmStore.currentFarm.area }} 亩</span>
            </div>
            <div class="info-item">
              <label>创建时间:</label>
              <span>{{ formatDate(farmStore.currentFarm.createTime) }}</span>
            </div>
            <div class="info-item">
              <label>认证状态:</label>
              <span>{{ farmStore.currentFarm.isVerified ? '已认证' : '未认证' }}</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <!-- 用户农场列表 -->
    <el-card class="user-farms-card">
      <template #header>
        <div class="card-header">
          <span>我的农场列表 ({{ farmStore.currentUserFarms.length }})</span>
          <el-button type="primary" size="small" @click="createNewFarm">
            <el-icon><Plus /></el-icon>
            新建农场
          </el-button>
        </div>
      </template>
      <el-table :data="farmStore.currentUserFarms" v-loading="farmStore.loading">
        <el-table-column prop="farmName" label="农场名称" />
        <el-table-column prop="farmCode" label="农场编码" />
        <el-table-column prop="region" label="地区" />
        <el-table-column prop="area" label="面积(亩)" />
        <el-table-column label="状态">
          <template #default="{ row }">
            <el-tag :type="farmStore.getStatusType(row.auditStatus)">
              {{ farmStore.getStatusText(row.auditStatus) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button size="small" @click="setCurrentFarm(row)">
              设为当前
            </el-button>
            <el-button size="small" type="primary" @click="viewFarmDetail(row)">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- 农场状态分布图表 -->
    <el-card class="chart-card">
      <template #header>
        <span>农场状态分布</span>
      </template>
      <div class="chart-container">
        <div class="status-chart">
          <div class="chart-item" v-for="(count, status) in statusDistribution" :key="status">
            <div class="chart-bar">
              <div 
                class="chart-fill" 
                :style="{ 
                  height: `${(count / Math.max(...Object.values(statusDistribution))) * 100}%`,
                  backgroundColor: getStatusColor(status)
                }"
              ></div>
            </div>
            <div class="chart-label">{{ farmStore.getStatusText(status) }}</div>
            <div class="chart-value">{{ count }}</div>
          </div>
        </div>
      </div>
    </el-card>

    <!-- 创建农场对话框 -->
    <el-dialog v-model="createFarmDialogVisible" title="创建新农场" width="900px">
      <FarmCreateForm
        ref="farmCreateFormRef"
        :loading="farmStore.loading"
        submit-text="创建农场"
        @submit="handleCreateFarm"
        @reset="handleResetFarm"
      />
      <template #footer>
        <el-button @click="createFarmDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitFarmForm" :loading="farmStore.loading">
          创建农场
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFarmStore } from '@/stores/farm.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import FarmCreateForm from '@/components/FarmCreateForm.vue'
import {
  Refresh,
  User,
  House,
  SuccessFilled,
  Clock,
  CloseBold,
  Plus
} from '@element-plus/icons-vue'

// 使用农场状态管理
const farmStore = useFarmStore()

// 响应式数据
const createFarmDialogVisible = ref(false)
const farmCreateFormRef = ref()

// 计算属性
const statusDistribution = computed(() => {
  return {
    [farmStore.FARM_STATUS.PENDING]: farmStore.pendingFarms.length,
    [farmStore.FARM_STATUS.APPROVED]: farmStore.approvedFarms.length,
    [farmStore.FARM_STATUS.REJECTED]: farmStore.rejectedFarms.length
  }
})

// 方法
const initializeStore = async () => {
  try {
    await farmStore.initializeFarmStore()
    ElMessage.success('农场状态管理初始化成功！')
  } catch (error) {
    ElMessage.error('初始化失败: ' + error.message)
  }
}

const refreshData = async () => {
  try {
    await farmStore.fetchFarmList()
    await farmStore.fetchUserFarms()
    ElMessage.success('数据刷新成功！')
  } catch (error) {
    ElMessage.error('刷新失败: ' + error.message)
  }
}

const showUserFarms = () => {
  if (farmStore.currentUserFarms.length === 0) {
    ElMessage.info('您还没有农场，请先创建一个农场')
  } else {
    ElMessage.success(`您共有 ${farmStore.currentUserFarms.length} 个农场`)
  }
}

const setCurrentFarm = (farm) => {
  farmStore.setCurrentFarm(farm)
  ElMessage.success(`已设置 "${farm.farmName}" 为当前农场`)
}

const viewFarmDetail = async (farm) => {
  try {
    await farmStore.fetchFarmDetail(farm.id)
    ElMessage.success('农场详情加载成功')
  } catch (error) {
    ElMessage.error('加载农场详情失败: ' + error.message)
  }
}

const createNewFarm = () => {
  createFarmDialogVisible.value = true
}

// 提交农场表单
const submitFarmForm = async () => {
  try {
    await farmCreateFormRef.value?.validate()
    const formData = farmCreateFormRef.value?.getFormData()
    await handleCreateFarm(formData)
  } catch (error) {
    console.error('表单验证失败:', error)
  }
}

// 创建新农场
const handleCreateFarm = async (farmData) => {
  try {
    await farmStore.createFarm(farmData)
    createFarmDialogVisible.value = false
    ElMessage.success('农场创建成功！')
    
    // 重置表单
    farmCreateFormRef.value?.resetFields()
  } catch (error) {
    console.error('创建农场失败:', error)
    ElMessage.error('创建农场失败')
  }
}

// 重置农场表单
const handleResetFarm = () => {
  farmCreateFormRef.value?.resetFields()
}

const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleString('zh-CN')
}

const getStatusColor = (status) => {
  const colorMap = {
    [farmStore.FARM_STATUS.PENDING]: '#E6A23C',
    [farmStore.FARM_STATUS.APPROVED]: '#67C23A',
    [farmStore.FARM_STATUS.REJECTED]: '#F56C6C'
  }
  return colorMap[status] || '#909399'
}

// 生命周期
onMounted(() => {
  // 页面加载时自动初始化
  initializeStore()
})
</script>

<style scoped>
.farm-status-management {
  padding: 20px;
}

.page-header {
  margin-bottom: 20px;
}

.page-header h2 {
  margin: 0 0 8px 0;
  color: #303133;
}

.page-description {
  margin: 0;
  color: #606266;
  font-size: 14px;
}

.action-bar {
  margin-bottom: 20px;
}

.action-bar .el-button {
  margin-right: 10px;
}

.stats-cards {
  margin-bottom: 20px;
}

.stats-card {
  position: relative;
  overflow: hidden;
}

.stats-content {
  position: relative;
  z-index: 2;
}

.stats-number {
  font-size: 32px;
  font-weight: bold;
  color: #303133;
  line-height: 1;
}

.stats-label {
  font-size: 14px;
  color: #606266;
  margin-top: 8px;
}

.stats-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 48px;
  opacity: 0.1;
  z-index: 1;
}

.current-farm-card,
.user-farms-card,
.chart-card {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.farm-info {
  padding: 10px 0;
}

.info-item {
  display: flex;
  margin-bottom: 12px;
  align-items: center;
}

.info-item label {
  font-weight: 500;
  color: #606266;
  width: 100px;
  flex-shrink: 0;
}

.info-item span {
  color: #303133;
}

.chart-container {
  padding: 20px;
}

.status-chart {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  padding: 20px 0;
}

.chart-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

.chart-bar {
  width: 60px;
  height: 120px;
  background-color: #f5f7fa;
  border-radius: 4px;
  position: relative;
  margin-bottom: 10px;
}

.chart-fill {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 4px;
  transition: height 0.3s ease;
}

.chart-label {
  font-size: 12px;
  color: #606266;
  margin-bottom: 4px;
  text-align: center;
}

.chart-value {
  font-size: 18px;
  font-weight: bold;
  color: #303133;
  text-align: center;
}

.el-card {
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-table {
  border-radius: 4px;
}
</style>