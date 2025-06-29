<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 页面标题和操作 -->
      <div class="page-header">
        <div class="header-left">
          <h2>地块管理</h2>
          <p class="page-desc">管理您农场的所有地块信息，包括种植作物、面积等</p>
        </div>
        <div class="header-right">
          <el-button type="primary" @click="handleAddPlot">
            <el-icon><Plus /></el-icon>
            新增地块
          </el-button>
        </div>
      </div>

      <!-- 搜索区域 -->
      <div class="search-section">
        <el-form :model="searchForm" inline class="search-form">
          <el-form-item label="地块名称">
            <el-input
              v-model="searchForm.plotName"
              placeholder="请输入地块名称"
              clearable
              style="width: 200px"
            />
          </el-form-item>
          <el-form-item label="种植作物">
            <el-select
              v-model="searchForm.cropType"
              placeholder="请选择作物类型"
              clearable
              style="width: 150px"
            >
              <el-option label="水稻" value="rice" />
              <el-option label="小麦" value="wheat" />
              <el-option label="玉米" value="corn" />
              <el-option label="大豆" value="soybean" />
              <el-option label="蔬菜" value="vegetable" />
              <el-option label="果树" value="fruit" />
              <el-option label="其他" value="other" />
            </el-select>
          </el-form-item>
          <el-form-item label="种植状态">
            <el-select
              v-model="searchForm.plantingStatus"
              placeholder="请选择种植状态"
              clearable
              style="width: 150px"
            >
              <el-option label="未种植" value="empty" />
              <el-option label="已种植" value="planted" />
              <el-option label="生长中" value="growing" />
              <el-option label="收获期" value="harvest" />
              <el-option label="休耕" value="fallow" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSearch">
              <el-icon><Search /></el-icon>
              搜索
            </el-button>
            <el-button @click="handleResetSearch">
              <el-icon><Refresh /></el-icon>
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 批量操作 -->
      <div class="batch-actions" v-if="selectedPlots.length > 0">
        <span class="selected-info">已选择 {{ selectedPlots.length }} 个地块</span>
        <el-button type="danger" @click="handleBatchDelete">
          <el-icon><Delete /></el-icon>
          批量删除
        </el-button>
        <el-button type="warning" @click="handleBatchUpdateStatus">
          <el-icon><Edit /></el-icon>
          批量更新状态
        </el-button>
      </div>

      <!-- 地块列表 -->
      <div class="table-section">
        <el-table
          :data="plotList"
          v-loading="tableLoading"
          @selection-change="handleSelectionChange"
          stripe
          style="width: 100%"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="plotCode" label="地块编码" width="120" />
          <el-table-column prop="plotName" label="地块名称" width="150" />
          <el-table-column prop="area" label="面积(㎡)" width="100">
            <template #default="{ row }">
              <span>{{ row.area?.toLocaleString() }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="cropType" label="种植作物" width="120">
            <template #default="{ row }">
              <el-tag :type="getCropTypeColor(row.cropType)">{{ getCropTypeName(row.cropType) }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="plantingStatus" label="种植状态" width="120">
            <template #default="{ row }">
              <el-tag :type="getStatusColor(row.plantingStatus)">{{ getStatusName(row.plantingStatus) }}</el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="soilType" label="土壤类型" width="100" />
          <el-table-column prop="irrigationType" label="灌溉方式" width="100" />
          <el-table-column prop="plantingDate" label="种植日期" width="120">
            <template #default="{ row }">
              <span>{{ row.plantingDate || '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="expectedHarvestDate" label="预计收获" width="120">
            <template #default="{ row }">
              <span>{{ row.expectedHarvestDate || '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" width="160">
            <template #default="{ row }">
              <span>{{ formatDateTime(row.createTime) }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template #default="{ row }">
              <el-button type="primary" size="small" @click="handleViewPlot(row)">
                查看
              </el-button>
              <el-button type="warning" size="small" @click="handleEditPlot(row)">
                编辑
              </el-button>
              <el-button type="danger" size="small" @click="handleDeletePlot(row)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="pagination-section">
        <el-pagination
          v-model:current-page="pagination.page"
          v-model:page-size="pagination.size"
          :page-sizes="[10, 20, 50, 100]"
          :total="pagination.total"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 地块详情对话框 -->
    <el-dialog
      v-model="plotDetailVisible"
      :title="`地块详情 - ${currentPlot?.plotName}`"
      width="800px"
      :close-on-click-modal="false"
    >
      <div v-if="currentPlot" class="plot-detail">
        <div class="detail-section">
          <h4>基本信息</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <label>地块编码：</label>
              <span>{{ currentPlot.plotCode }}</span>
            </div>
            <div class="detail-item">
              <label>地块名称：</label>
              <span>{{ currentPlot.plotName }}</span>
            </div>
            <div class="detail-item">
              <label>面积：</label>
              <span>{{ currentPlot.area?.toLocaleString() }} ㎡</span>
            </div>
            <div class="detail-item">
              <label>土壤类型：</label>
              <span>{{ currentPlot.soilType }}</span>
            </div>
            <div class="detail-item">
              <label>灌溉方式：</label>
              <span>{{ currentPlot.irrigationType }}</span>
            </div>
            <div class="detail-item">
              <label>排水系统：</label>
              <span>{{ currentPlot.drainageSystem || '-' }}</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4>种植信息</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <label>种植作物：</label>
              <el-tag :type="getCropTypeColor(currentPlot.cropType)">{{ getCropTypeName(currentPlot.cropType) }}</el-tag>
            </div>
            <div class="detail-item">
              <label>种植状态：</label>
              <el-tag :type="getStatusColor(currentPlot.plantingStatus)">{{ getStatusName(currentPlot.plantingStatus) }}</el-tag>
            </div>
            <div class="detail-item">
              <label>种植日期：</label>
              <span>{{ currentPlot.plantingDate || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>预计收获：</label>
              <span>{{ currentPlot.expectedHarvestDate || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>种植品种：</label>
              <span>{{ currentPlot.variety || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>播种密度：</label>
              <span>{{ currentPlot.seedingDensity || '-' }}</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4>位置信息</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <label>经度：</label>
              <span>{{ currentPlot.longitude || '-' }}</span>
            </div>
            <div class="detail-item">
              <label>纬度：</label>
              <span>{{ currentPlot.latitude || '-' }}</span>
            </div>
            <div class="detail-item full-width">
              <label>地块描述：</label>
              <span>{{ currentPlot.description || '-' }}</span>
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <el-button @click="plotDetailVisible = false">关闭</el-button>
        <el-button type="primary" @click="handleEditPlot(currentPlot)">编辑</el-button>
      </template>
    </el-dialog>

    <!-- 地块编辑对话框 -->
    <el-dialog
      v-model="plotFormVisible"
      :title="isEditMode ? '编辑地块' : '新增地块'"
      width="800px"
      :close-on-click-modal="false"
    >
      <el-form
        ref="plotFormRef"
        :model="plotForm"
        :rules="plotRules"
        label-width="120px"
      >
        <div class="form-section">
          <h4>基本信息</h4>
          <div class="form-grid">
            <el-form-item label="地块编码" prop="plotCode">
              <el-input v-model="plotForm.plotCode" placeholder="请输入地块编码" :disabled="isEditMode" />
            </el-form-item>
            <el-form-item label="地块名称" prop="plotName">
              <el-input v-model="plotForm.plotName" placeholder="请输入地块名称" />
            </el-form-item>
            <el-form-item label="面积(㎡)" prop="area">
              <el-input-number
                v-model="plotForm.area"
                :min="1"
                :max="999999"
                placeholder="请输入面积"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="土壤类型" prop="soilType">
              <el-select v-model="plotForm.soilType" placeholder="请选择土壤类型">
                <el-option label="黏土" value="clay" />
                <el-option label="壤土" value="loam" />
                <el-option label="砂土" value="sand" />
                <el-option label="砂壤土" value="sandy_loam" />
                <el-option label="黏壤土" value="clay_loam" />
              </el-select>
            </el-form-item>
            <el-form-item label="灌溉方式" prop="irrigationType">
              <el-select v-model="plotForm.irrigationType" placeholder="请选择灌溉方式">
                <el-option label="滴灌" value="drip" />
                <el-option label="喷灌" value="sprinkler" />
                <el-option label="漫灌" value="flood" />
                <el-option label="微喷" value="micro_spray" />
                <el-option label="自然降雨" value="rainfall" />
              </el-select>
            </el-form-item>
            <el-form-item label="排水系统" prop="drainageSystem">
              <el-input v-model="plotForm.drainageSystem" placeholder="请输入排水系统" />
            </el-form-item>
          </div>
        </div>

        <div class="form-section">
          <h4>种植信息</h4>
          <div class="form-grid">
            <el-form-item label="种植作物" prop="cropType">
              <el-select v-model="plotForm.cropType" placeholder="请选择作物类型">
                <el-option label="水稻" value="rice" />
                <el-option label="小麦" value="wheat" />
                <el-option label="玉米" value="corn" />
                <el-option label="大豆" value="soybean" />
                <el-option label="蔬菜" value="vegetable" />
                <el-option label="果树" value="fruit" />
                <el-option label="其他" value="other" />
              </el-select>
            </el-form-item>
            <el-form-item label="种植状态" prop="plantingStatus">
              <el-select v-model="plotForm.plantingStatus" placeholder="请选择种植状态">
                <el-option label="未种植" value="empty" />
                <el-option label="已种植" value="planted" />
                <el-option label="生长中" value="growing" />
                <el-option label="收获期" value="harvest" />
                <el-option label="休耕" value="fallow" />
              </el-select>
            </el-form-item>
            <el-form-item label="种植日期" prop="plantingDate">
              <el-date-picker
                v-model="plotForm.plantingDate"
                type="date"
                placeholder="请选择种植日期"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="预计收获" prop="expectedHarvestDate">
              <el-date-picker
                v-model="plotForm.expectedHarvestDate"
                type="date"
                placeholder="请选择预计收获日期"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="种植品种" prop="variety">
              <el-input v-model="plotForm.variety" placeholder="请输入种植品种" />
            </el-form-item>
            <el-form-item label="播种密度" prop="seedingDensity">
              <el-input v-model="plotForm.seedingDensity" placeholder="请输入播种密度" />
            </el-form-item>
          </div>
        </div>

        <div class="form-section">
          <h4>位置信息</h4>
          <div class="form-grid">
            <el-form-item label="经度" prop="longitude">
              <el-input-number
                v-model="plotForm.longitude"
                :precision="6"
                :min="-180"
                :max="180"
                placeholder="请输入经度"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="纬度" prop="latitude">
              <el-input-number
                v-model="plotForm.latitude"
                :precision="6"
                :min="-90"
                :max="90"
                placeholder="请输入纬度"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="地块描述" prop="description" class="full-width">
              <el-input
                v-model="plotForm.description"
                type="textarea"
                :rows="3"
                placeholder="请输入地块描述"
              />
            </el-form-item>
          </div>
        </div>
      </el-form>
      <template #footer>
        <el-button @click="plotFormVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSavePlot" :loading="saveLoading">
          {{ isEditMode ? '更新' : '创建' }}
        </el-button>
      </template>
    </el-dialog>

    <!-- 批量更新状态对话框 -->
    <el-dialog
      v-model="batchStatusVisible"
      title="批量更新种植状态"
      width="400px"
    >
      <el-form :model="batchStatusForm" label-width="100px">
        <el-form-item label="种植状态">
          <el-select v-model="batchStatusForm.plantingStatus" placeholder="请选择种植状态">
            <el-option label="未种植" value="empty" />
            <el-option label="已种植" value="planted" />
            <el-option label="生长中" value="growing" />
            <el-option label="收获期" value="harvest" />
            <el-option label="休耕" value="fallow" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="batchStatusVisible = false">取消</el-button>
        <el-button type="primary" @click="handleConfirmBatchStatus" :loading="batchLoading">
          确认更新
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Plus, Search, Refresh, Delete, Edit } from '@element-plus/icons-vue'
import * as plotApi from '@/api/farm/plot'

// 响应式数据
const tableLoading = ref(false)
const saveLoading = ref(false)
const batchLoading = ref(false)
const plotDetailVisible = ref(false)
const plotFormVisible = ref(false)
const batchStatusVisible = ref(false)
const isEditMode = ref(false)
const plotFormRef = ref()
const currentPlot = ref(null)
const selectedPlots = ref([])
const plotList = ref([])

// 搜索表单
const searchForm = reactive({
  plotName: '',
  cropType: '',
  plantingStatus: ''
})

// 分页数据
const pagination = reactive({
  page: 1,
  size: 20,
  total: 0
})

// 地块表单
const plotForm = reactive({
  plotCode: '',
  plotName: '',
  area: null,
  soilType: '',
  irrigationType: '',
  drainageSystem: '',
  cropType: '',
  plantingStatus: '',
  plantingDate: '',
  expectedHarvestDate: '',
  variety: '',
  seedingDensity: '',
  longitude: null,
  latitude: null,
  description: ''
})

// 批量状态表单
const batchStatusForm = reactive({
  plantingStatus: ''
})

// 表单验证规则
const plotRules = {
  plotCode: [
    { required: true, message: '请输入地块编码', trigger: 'blur' },
    { pattern: /^[A-Z0-9]{4,20}$/, message: '地块编码由4-20位大写字母和数字组成', trigger: 'blur' }
  ],
  plotName: [
    { required: true, message: '请输入地块名称', trigger: 'blur' },
    { min: 2, max: 50, message: '地块名称长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  area: [
    { required: true, message: '请输入面积', trigger: 'blur' },
    { type: 'number', min: 1, message: '面积必须大于0', trigger: 'blur' }
  ],
  soilType: [
    { required: true, message: '请选择土壤类型', trigger: 'change' }
  ],
  irrigationType: [
    { required: true, message: '请选择灌溉方式', trigger: 'change' }
  ],
  cropType: [
    { required: true, message: '请选择种植作物', trigger: 'change' }
  ],
  plantingStatus: [
    { required: true, message: '请选择种植状态', trigger: 'change' }
  ]
}

// 获取地块列表
const fetchPlotList = async () => {
  try {
    tableLoading.value = true
    const params = {
      page: pagination.page,
      size: pagination.size,
      ...searchForm
    }
    
    const result = await plotApi.getPlotList(params)
    plotList.value = result.list || []
    pagination.total = result.total || 0
  } catch (error) {
    console.error('获取地块列表失败:', error)
    ElMessage.error('获取地块列表失败')
  } finally {
    tableLoading.value = false
  }
}

// 搜索
const handleSearch = () => {
  pagination.page = 1
  fetchPlotList()
}

// 重置搜索
const handleResetSearch = () => {
  Object.keys(searchForm).forEach(key => {
    searchForm[key] = ''
  })
  pagination.page = 1
  fetchPlotList()
}

// 分页变化
const handleSizeChange = (size) => {
  pagination.size = size
  pagination.page = 1
  fetchPlotList()
}

const handleCurrentChange = (page) => {
  pagination.page = page
  fetchPlotList()
}

// 选择变化
const handleSelectionChange = (selection) => {
  selectedPlots.value = selection
}

// 新增地块
const handleAddPlot = () => {
  isEditMode.value = false
  resetPlotForm()
  plotFormVisible.value = true
}

// 查看地块
const handleViewPlot = (plot) => {
  currentPlot.value = plot
  plotDetailVisible.value = true
}

// 编辑地块
const handleEditPlot = (plot) => {
  isEditMode.value = true
  currentPlot.value = plot
  
  // 填充表单数据
  Object.keys(plotForm).forEach(key => {
    if (plot[key] !== undefined) {
      plotForm[key] = plot[key]
    }
  })
  
  plotDetailVisible.value = false
  plotFormVisible.value = true
}

// 删除地块
const handleDeletePlot = async (plot) => {
  try {
    await ElMessageBox.confirm(
      `确定要删除地块 "${plot.plotName}" 吗？此操作不可恢复。`,
      '确认删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    await plotApi.deletePlot(plot.id)
    ElMessage.success('删除成功')
    fetchPlotList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('删除失败:', error)
      ElMessage.error('删除失败')
    }
  }
}

// 保存地块
const handleSavePlot = async () => {
  try {
    await plotFormRef.value?.validate()
    saveLoading.value = true
    
    const formData = { ...plotForm }
    
    if (isEditMode.value) {
      formData.id = currentPlot.value.id
      await plotApi.updatePlot(formData)
      ElMessage.success('更新成功')
    } else {
      await plotApi.createPlot(formData)
      ElMessage.success('创建成功')
    }
    
    plotFormVisible.value = false
    fetchPlotList()
  } catch (error) {
    console.error('保存失败:', error)
    ElMessage.error('保存失败')
  } finally {
    saveLoading.value = false
  }
}

// 批量删除
const handleBatchDelete = async () => {
  try {
    await ElMessageBox.confirm(
      `确定要删除选中的 ${selectedPlots.value.length} 个地块吗？此操作不可恢复。`,
      '确认批量删除',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    const ids = selectedPlots.value.map(plot => plot.id)
    await plotApi.batchDeletePlots(ids)
    ElMessage.success('批量删除成功')
    selectedPlots.value = []
    fetchPlotList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('批量删除失败:', error)
      ElMessage.error('批量删除失败')
    }
  }
}

// 批量更新状态
const handleBatchUpdateStatus = () => {
  batchStatusForm.plantingStatus = ''
  batchStatusVisible.value = true
}

const handleConfirmBatchStatus = async () => {
  if (!batchStatusForm.plantingStatus) {
    ElMessage.warning('请选择种植状态')
    return
  }
  
  try {
    batchLoading.value = true
    const ids = selectedPlots.value.map(plot => plot.id)
    await plotApi.batchUpdatePlotStatus({
      ids,
      plantingStatus: batchStatusForm.plantingStatus
    })
    
    ElMessage.success('批量更新成功')
    batchStatusVisible.value = false
    selectedPlots.value = []
    fetchPlotList()
  } catch (error) {
    console.error('批量更新失败:', error)
    ElMessage.error('批量更新失败')
  } finally {
    batchLoading.value = false
  }
}

// 重置表单
const resetPlotForm = () => {
  Object.keys(plotForm).forEach(key => {
    if (typeof plotForm[key] === 'string') {
      plotForm[key] = ''
    } else {
      plotForm[key] = null
    }
  })
  plotFormRef.value?.resetFields()
}

// 获取作物类型颜色
const getCropTypeColor = (type) => {
  const colorMap = {
    rice: 'success',
    wheat: 'warning',
    corn: 'primary',
    soybean: 'info',
    vegetable: 'success',
    fruit: 'danger',
    other: 'info'
  }
  return colorMap[type] || 'info'
}

// 获取作物类型名称
const getCropTypeName = (type) => {
  const nameMap = {
    rice: '水稻',
    wheat: '小麦',
    corn: '玉米',
    soybean: '大豆',
    vegetable: '蔬菜',
    fruit: '果树',
    other: '其他'
  }
  return nameMap[type] || type
}

// 获取状态颜色
const getStatusColor = (status) => {
  const colorMap = {
    empty: 'info',
    planted: 'primary',
    growing: 'success',
    harvest: 'warning',
    fallow: 'danger'
  }
  return colorMap[status] || 'info'
}

// 获取状态名称
const getStatusName = (status) => {
  const nameMap = {
    empty: '未种植',
    planted: '已种植',
    growing: '生长中',
    harvest: '收获期',
    fallow: '休耕'
  }
  return nameMap[status] || status
}

// 格式化日期时间
const formatDateTime = (dateTime) => {
  if (!dateTime) return '-'
  return new Date(dateTime).toLocaleString('zh-CN')
}

// 生命周期
onMounted(() => {
  fetchPlotList()
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
}

/* 页面标题 */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.header-left h2 {
  margin: 0 0 8px 0;
  color: #262626;
  font-size: 20px;
  font-weight: 600;
}

.page-desc {
  margin: 0;
  color: #8c8c8c;
  font-size: 14px;
}

/* 搜索区域 */
.search-section {
  margin-bottom: 16px;
  padding: 20px;
  background: #fafafa;
  border-radius: 8px;
}

.search-form {
  margin: 0;
}

/* 批量操作 */
.batch-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px 16px;
  background: #e6f7ff;
  border: 1px solid #91d5ff;
  border-radius: 6px;
}

.selected-info {
  color: #1890ff;
  font-weight: 500;
}

/* 表格区域 */
.table-section {
  margin-bottom: 16px;
}

/* 分页区域 */
.pagination-section {
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

/* 地块详情 */
.plot-detail {
  max-height: 500px;
  overflow-y: auto;
}

.detail-section {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.detail-section:last-child {
  border-bottom: none;
}

.detail-section h4 {
  margin: 0 0 16px 0;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  padding-left: 8px;
  border-left: 3px solid #1890ff;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
}

.detail-item {
  display: flex;
  align-items: center;
}

.detail-item.full-width {
  grid-column: 1 / -1;
  flex-direction: column;
  align-items: flex-start;
}

.detail-item label {
  color: #8c8c8c;
  font-size: 12px;
  margin-right: 8px;
  min-width: 80px;
}

.detail-item.full-width label {
  margin-bottom: 4px;
}

/* 表单样式 */
.form-section {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.form-section:last-child {
  border-bottom: none;
}

.form-section h4 {
  margin: 0 0 16px 0;
  color: #262626;
  font-size: 14px;
  font-weight: 600;
  padding-left: 8px;
  border-left: 3px solid #1890ff;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
}

.full-width {
  grid-column: 1 / -1;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-container {
    padding: 16px;
  }
  
  .content-card {
    padding: 16px;
  }
  
  .page-header {
    flex-direction: column;
    gap: 16px;
  }
  
  .search-form {
    flex-direction: column;
  }
  
  .batch-actions {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .form-grid,
  .detail-grid {
    grid-template-columns: 1fr;
  }
}
</style>