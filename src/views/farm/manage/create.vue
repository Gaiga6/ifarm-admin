<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 页面标题 -->
      <div class="page-header">
        <h2>农场与地块创建</h2>
        <p class="page-desc">创建新的农场和地块，完善农场管理信息</p>
      </div>

      <!-- 操作按钮 -->
      <div class="action-buttons">
        <el-button type="primary" :icon="Plus" @click="openFarmDialog">
          创建农场
        </el-button>
        <el-button type="success" :icon="Plus" @click="openPlotDialog">
          创建地块
        </el-button>
      </div>

      <!-- 最近创建的农场 -->
      <div class="recent-section">
        <h3>最近创建的农场</h3>
        <el-table :data="recentFarms" style="width: 100%" v-loading="farmsLoading">
          <el-table-column prop="farmName" label="农场名称" width="200" />
          <el-table-column prop="farmCode" label="农场编码" width="150" />
          <el-table-column prop="totalArea" label="总面积(㎡)" width="120">
            <template #default="{ row }">
              {{ row.totalArea?.toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column prop="contactPerson" label="联系人" width="120" />
          <el-table-column prop="province" label="所在地区" width="150">
            <template #default="{ row }">
              {{ row.province }} {{ row.city }}
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180">
            <template #default="{ row }">
              {{ formatDate(row.createTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template #default="{ row }">
              <el-button type="primary" size="small" @click="createPlotForFarm(row)">
                创建地块
              </el-button>
              <el-button type="info" size="small" @click="viewFarmDetails(row)">
                查看详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 最近创建的地块 -->
      <div class="recent-section">
        <h3>最近创建的地块</h3>
        <el-table :data="recentPlots" style="width: 100%" v-loading="plotsLoading">
          <el-table-column prop="plotName" label="地块名称" width="150" />
          <el-table-column prop="plotCode" label="地块编码" width="120" />
          <el-table-column prop="farmName" label="所属农场" width="150" />
          <el-table-column prop="area" label="面积(㎡)" width="100">
            <template #default="{ row }">
              {{ row.area?.toLocaleString() }}
            </template>
          </el-table-column>
          <el-table-column prop="soilType" label="土壤类型" width="100" />
          <el-table-column prop="cropType" label="作物类型" width="100" />
          <el-table-column prop="plantingStatus" label="种植状态" width="100">
            <template #default="{ row }">
              <el-tag :type="getPlantingStatusColor(row.plantingStatus)">
                {{ getPlantingStatusText(row.plantingStatus) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="180">
            <template #default="{ row }">
              {{ formatDate(row.createTime) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="120">
            <template #default="{ row }">
              <el-button type="info" size="small" @click="viewPlotDetails(row)">
                查看详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 创建农场对话框 -->
    <el-dialog v-model="farmDialogVisible" title="创建新农场" width="900px">
      <FarmCreateForm
        ref="farmCreateFormRef"
        :loading="farmCreateLoading"
        submit-text="创建农场"
        @submit="handleCreateFarm"
        @reset="handleResetFarm"
      />
      <template #footer>
        <el-button @click="farmDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitFarmForm" :loading="farmCreateLoading">
          创建农场
        </el-button>
      </template>
    </el-dialog>

    <!-- 创建地块对话框 -->
    <el-dialog v-model="plotDialogVisible" title="创建新地块" width="900px">
      <PlotCreateForm
        ref="plotCreateFormRef"
        :loading="plotCreateLoading"
        :default-farm-id="selectedFarmId"
        submit-text="创建地块"
        @submit="handleCreatePlot"
        @reset="handleResetPlot"
      />
      <template #footer>
        <el-button @click="plotDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitPlotForm" :loading="plotCreateLoading">
          创建地块
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import FarmCreateForm from '@/components/FarmCreateForm.vue'
import PlotCreateForm from '@/components/PlotCreateForm.vue'
import * as farmApi from '@/api/farm/farm'
import * as plotApi from '@/api/farm/plot'

// 响应式数据
const farmDialogVisible = ref(false)
const plotDialogVisible = ref(false)
const farmCreateFormRef = ref()
const plotCreateFormRef = ref()
const farmCreateLoading = ref(false)
const plotCreateLoading = ref(false)
const farmsLoading = ref(false)
const plotsLoading = ref(false)
const selectedFarmId = ref(null)

// 数据列表
const recentFarms = ref([])
const recentPlots = ref([])

// 打开农场创建对话框
const openFarmDialog = () => {
  selectedFarmId.value = null
  farmDialogVisible.value = true
}

// 打开地块创建对话框
const openPlotDialog = () => {
  selectedFarmId.value = null
  plotDialogVisible.value = true
}

// 为特定农场创建地块
const createPlotForFarm = (farm) => {
  selectedFarmId.value = farm.id
  plotDialogVisible.value = true
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

// 创建农场
const handleCreateFarm = async (farmData) => {
  try {
    farmCreateLoading.value = true
    await farmApi.createFarm(farmData)
    farmDialogVisible.value = false
    ElMessage.success('农场创建成功！')
    
    // 重置表单并刷新列表
    farmCreateFormRef.value?.resetFields()
    await fetchRecentFarms()
  } catch (error) {
    console.error('创建农场失败:', error)
    ElMessage.error('创建农场失败')
  } finally {
    farmCreateLoading.value = false
  }
}

// 重置农场表单
const handleResetFarm = () => {
  farmCreateFormRef.value?.resetFields()
}

// 提交地块表单
const submitPlotForm = async () => {
  try {
    await plotCreateFormRef.value?.validate()
    const formData = plotCreateFormRef.value?.getFormData()
    await handleCreatePlot(formData)
  } catch (error) {
    console.error('表单验证失败:', error)
  }
}

// 创建地块
const handleCreatePlot = async (plotData) => {
  try {
    plotCreateLoading.value = true
    await plotApi.createPlot(plotData)
    plotDialogVisible.value = false
    ElMessage.success('地块创建成功！')
    
    // 重置表单并刷新列表
    plotCreateFormRef.value?.resetFields()
    await fetchRecentPlots()
  } catch (error) {
    console.error('创建地块失败:', error)
    ElMessage.error('创建地块失败')
  } finally {
    plotCreateLoading.value = false
  }
}

// 重置地块表单
const handleResetPlot = () => {
  plotCreateFormRef.value?.resetFields()
}

// 获取最近创建的农场
const fetchRecentFarms = async () => {
  try {
    farmsLoading.value = true
    const result = await farmApi.getFarmPage({ 
      page: 1, 
      size: 10,
      sortBy: 'createTime',
      sortOrder: 'desc'
    })
    recentFarms.value = result.list || []
  } catch (error) {
    console.error('获取农场列表失败:', error)
    ElMessage.error('获取农场列表失败')
  } finally {
    farmsLoading.value = false
  }
}

// 获取最近创建的地块
const fetchRecentPlots = async () => {
  try {
    plotsLoading.value = true
    const result = await plotApi.getPlotPage({ 
      page: 1, 
      size: 10,
      sortBy: 'createTime',
      sortOrder: 'desc'
    })
    recentPlots.value = result.list || []
  } catch (error) {
    console.error('获取地块列表失败:', error)
    ElMessage.error('获取地块列表失败')
  } finally {
    plotsLoading.value = false
  }
}

// 查看农场详情
const viewFarmDetails = (farm) => {
  ElMessage.info(`查看农场详情: ${farm.farmName}`)
  // 这里可以跳转到农场详情页面或打开详情对话框
}

// 查看地块详情
const viewPlotDetails = (plot) => {
  ElMessage.info(`查看地块详情: ${plot.plotName}`)
  // 这里可以跳转到地块详情页面或打开详情对话框
}

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '-'
  return new Date(dateString).toLocaleString('zh-CN')
}

// 获取种植状态颜色
const getPlantingStatusColor = (status) => {
  const colorMap = {
    'unplanted': 'info',
    'seeded': 'warning',
    'growing': 'primary',
    'mature': 'success',
    'harvested': 'success',
    'fallow': 'info'
  }
  return colorMap[status] || 'info'
}

// 获取种植状态文本
const getPlantingStatusText = (status) => {
  const textMap = {
    'unplanted': '未种植',
    'seeded': '已播种',
    'growing': '生长中',
    'mature': '成熟期',
    'harvested': '已收获',
    'fallow': '休耕'
  }
  return textMap[status] || status
}

// 组件挂载时获取数据
onMounted(() => {
  fetchRecentFarms()
  fetchRecentPlots()
})
</script>

<style scoped>
.page-container {
  padding: 20px;
}

.content-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.page-header {
  margin-bottom: 30px;
  text-align: center;
}

.page-header h2 {
  margin: 0 0 10px 0;
  color: #303133;
  font-size: 24px;
  font-weight: 600;
}

.page-desc {
  margin: 0;
  color: #606266;
  font-size: 14px;
}

.action-buttons {
  margin-bottom: 30px;
  text-align: center;
}

.action-buttons .el-button {
  margin: 0 10px;
  min-width: 120px;
}

.recent-section {
  margin-bottom: 40px;
}

.recent-section h3 {
  margin: 0 0 20px 0;
  color: #303133;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 2px solid #409eff;
  padding-bottom: 8px;
}

.recent-section:last-child {
  margin-bottom: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-container {
    padding: 10px;
  }
  
  .content-card {
    padding: 16px;
  }
  
  .action-buttons .el-button {
    margin: 5px;
    min-width: 100px;
  }
}
</style>