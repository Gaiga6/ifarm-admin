<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 搜索区域 -->
      <div class="search-section">
        <el-form :model="searchForm" ref="searchFormRef" class="search-form">
          <div class="search-grid">
            <el-form-item label="农场名称" prop="farmName">
              <el-input
                v-model="searchForm.farmName"
                placeholder="请输入农场名称"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="农场编码" prop="farmCode">
              <el-input
                v-model="searchForm.farmCode"
                placeholder="请输入农场编码"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
            <el-form-item label="审核状态" prop="auditStatus">
              <el-select v-model="searchForm.auditStatus" placeholder="请选择审核状态" clearable>
                <el-option label="待审核" value="pending" />
                <el-option label="审核通过" value="approved" />
                <el-option label="审核拒绝" value="rejected" />
              </el-select>
            </el-form-item>
            <el-form-item label="所在地区" prop="region">
              <el-input
                v-model="searchForm.region"
                placeholder="请输入省市区"
                clearable
                @keyup.enter="handleSearch"
              />
            </el-form-item>
          </div>
          <div class="search-actions">
            <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
            <el-button :icon="Refresh" @click="handleReset">重置</el-button>
          </div>
        </el-form>
      </div>

      <!-- 操作区域 -->
      <div class="action-section">
        <div class="action-left">
          <el-button type="success" :icon="Check" @click="handleBatchApprove" :disabled="multipleSelection.length === 0">
            批量通过
          </el-button>
          <el-button type="danger" :icon="Close" @click="handleBatchReject" :disabled="multipleSelection.length === 0">
            批量拒绝
          </el-button>
        </div>
        <div class="action-right">
          <el-button :icon="Refresh" @click="fetchFarmList">刷新</el-button>
        </div>
      </div>

      <!-- 表格区域 -->
      <div class="table-section">
        <el-table
          :data="farmList"
          v-loading="loading"
          @selection-change="handleSelectionChange"
          row-key="id"
          class="farm-table"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column prop="farmCode" label="农场编码" width="120" />
          <el-table-column prop="farmName" label="农场名称" min-width="150" />
          <el-table-column label="所在地区" min-width="200">
            <template #default="{ row }">
              {{ `${row.province}${row.city}${row.district}` }}
            </template>
          </el-table-column>
          <el-table-column prop="totalArea" label="总面积(㎡)" width="120" />
          <el-table-column prop="contactPerson" label="联系人" width="100" />
          <el-table-column prop="contactPhone" label="联系电话" width="130" />
          <el-table-column label="审核状态" width="100">
            <template #default="{ row }">
              <el-tag
                :type="getAuditStatusType(row.auditStatus)"
                size="small"
              >
                {{ getAuditStatusText(row.auditStatus) }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column prop="createdAt" label="申请时间" width="160">
            <template #default="{ row }">
              {{ formatDate(row.createdAt) }}
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200" fixed="right">
            <template #default="{ row }">
              <div class="action-buttons">
                <button class="action-btn view-btn" @click="handleView(row)">
                  查看详情
                </button>
                <button 
                  v-if="row.auditStatus === 'pending'"
                  class="action-btn approve-btn" 
                  @click="handleApprove(row)"
                >
                  通过
                </button>
                <button 
                  v-if="row.auditStatus === 'pending'"
                  class="action-btn reject-btn" 
                  @click="handleReject(row)"
                >
                  拒绝
                </button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- 分页区域 -->
      <div class="pagination-section">
        <el-pagination
          v-model:current-page="pageInfo.current"
          v-model:page-size="pageInfo.size"
          :page-sizes="[10, 20, 50, 100]"
          :total="pageInfo.total"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>

    <!-- 农场详情对话框 -->
    <el-dialog
      v-model="detailDialogVisible"
      :title="`农场详情 - ${currentFarm?.farmName}`"
      width="800px"
      @close="handleDetailDialogClose"
    >
      <div v-if="currentFarm" class="farm-detail">
        <div class="detail-section">
          <h4>基本信息</h4>
          <div class="detail-grid">
            <div class="detail-item">
              <label>农场名称：</label>
              <span>{{ currentFarm.farmName }}</span>
            </div>
            <div class="detail-item">
              <label>农场编码：</label>
              <span>{{ currentFarm.farmCode }}</span>
            </div>
            <div class="detail-item">
              <label>总面积：</label>
              <span>{{ currentFarm.totalArea }}㎡</span>
            </div>
            <div class="detail-item">
              <label>联系人：</label>
              <span>{{ currentFarm.contactPerson }}</span>
            </div>
            <div class="detail-item">
              <label>联系电话：</label>
              <span>{{ currentFarm.contactPhone }}</span>
            </div>
            <div class="detail-item">
              <label>审核状态：</label>
              <el-tag :type="getAuditStatusType(currentFarm.auditStatus)">
                {{ getAuditStatusText(currentFarm.auditStatus) }}
              </el-tag>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4>地址信息</h4>
          <div class="detail-grid">
            <div class="detail-item full-width">
              <label>详细地址：</label>
              <span>{{ `${currentFarm.province}${currentFarm.city}${currentFarm.district}${currentFarm.address}` }}</span>
            </div>
            <div class="detail-item">
              <label>经度：</label>
              <span>{{ currentFarm.longitude }}</span>
            </div>
            <div class="detail-item">
              <label>纬度：</label>
              <span>{{ currentFarm.latitude }}</span>
            </div>
          </div>
        </div>

        <div class="detail-section">
          <h4>农场描述</h4>
          <p class="description">{{ currentFarm.description || '暂无描述' }}</p>
        </div>

        <div class="detail-section" v-if="currentFarm.imageUrls && currentFarm.imageUrls.length > 0">
          <h4>农场图片</h4>
          <div class="image-gallery">
            <el-image
              v-for="(url, index) in currentFarm.imageUrls"
              :key="index"
              :src="url"
              :preview-src-list="currentFarm.imageUrls"
              :initial-index="index"
              class="farm-image"
              fit="cover"
            />
          </div>
        </div>

        <div class="detail-section" v-if="currentFarm.auditStatus === 'pending'">
          <h4>审核操作</h4>
          <div class="audit-actions">
            <el-button type="success" @click="handleApprove(currentFarm)">审核通过</el-button>
            <el-button type="danger" @click="handleReject(currentFarm)">审核拒绝</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

    <!-- 审核拒绝对话框 -->
    <el-dialog
      v-model="rejectDialogVisible"
      title="审核拒绝"
      width="500px"
    >
      <el-form :model="rejectForm" ref="rejectFormRef" label-width="80px">
        <el-form-item label="拒绝原因" prop="reason" :rules="[{ required: true, message: '请输入拒绝原因' }]">
          <el-input
            v-model="rejectForm.reason"
            type="textarea"
            :rows="4"
            placeholder="请输入拒绝原因"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="rejectDialogVisible = false">取消</el-button>
        <el-button type="danger" @click="handleConfirmReject" :loading="rejectLoading">
          确认拒绝
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, Refresh, Check, Close } from '@element-plus/icons-vue'
import * as farmApi from '@/api/farm/farm'

// 响应式数据
const loading = ref(false)
const farmList = ref([])
const multipleSelection = ref([])
const detailDialogVisible = ref(false)
const rejectDialogVisible = ref(false)
const currentFarm = ref(null)
const rejectLoading = ref(false)

// 搜索表单
const searchForm = reactive({
  farmName: '',
  farmCode: '',
  auditStatus: '',
  region: ''
})

// 分页信息
const pageInfo = reactive({
  current: 1,
  size: 10,
  total: 0
})

// 拒绝表单
const rejectForm = reactive({
  reason: ''
})

const searchFormRef = ref()
const rejectFormRef = ref()

// 获取农场列表
const fetchFarmList = async () => {
  try {
    loading.value = true
    const params = {
      ...searchForm,
      page: pageInfo.current,
      size: pageInfo.size
    }
    
    const result = await farmApi.getFarmPage(params)
    
    // 处理返回的数据，将status字段转换为auditStatus字段
    const processedRecords = (result.records || []).map(farm => {
      // 根据isVerified字段判断审核状态
      let auditStatus = 'pending' // 默认待审核
      if (farm.isVerified === 1) {
        auditStatus = 'approved' // 已认证表示审核通过
      } else if (farm.isVerified === 0) {
        auditStatus = 'rejected' // 未认证可能表示审核拒绝
      }
      
      return {
        ...farm,
        auditStatus // 添加auditStatus字段
      }
    })
    
    farmList.value = processedRecords
    pageInfo.total = result.total || 0
  } catch (error) {
    console.error('获取农场列表失败:', error)
    ElMessage.error('获取农场列表失败')
  } finally {
    loading.value = false
  }
}

// 搜索
const handleSearch = () => {
  pageInfo.current = 1
  fetchFarmList()
}

// 重置
const handleReset = () => {
  searchFormRef.value?.resetFields()
  pageInfo.current = 1
  fetchFarmList()
}

// 查看详情
const handleView = (row) => {
  currentFarm.value = row
  detailDialogVisible.value = true
}

// 审核通过
const handleApprove = async (row) => {
  try {
    await ElMessageBox.confirm(
      `确定要通过农场「${row.farmName}」的审核吗？`,
      '确认操作',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    await farmApi.auditFarm(row.id, 'approved', '')
    ElMessage.success('审核通过成功')
    detailDialogVisible.value = false
    fetchFarmList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('审核通过失败:', error)
      ElMessage.error('审核通过失败')
    }
  }
}

// 审核拒绝
const handleReject = (row) => {
  currentFarm.value = row
  rejectForm.reason = ''
  rejectDialogVisible.value = true
}

// 确认拒绝
const handleConfirmReject = async () => {
  try {
    await rejectFormRef.value?.validate()
    rejectLoading.value = true
    
    await farmApi.auditFarm(currentFarm.value.id, 'rejected', rejectForm.reason)
    ElMessage.success('审核拒绝成功')
    rejectDialogVisible.value = false
    detailDialogVisible.value = false
    fetchFarmList()
  } catch (error) {
    console.error('审核拒绝失败:', error)
    ElMessage.error('审核拒绝失败')
  } finally {
    rejectLoading.value = false
  }
}

// 批量通过
const handleBatchApprove = async () => {
  try {
    await ElMessageBox.confirm(
      `确定要批量通过选中的 ${multipleSelection.value.length} 个农场的审核吗？`,
      '确认操作',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }
    )
    
    const farmIds = multipleSelection.value.map(item => item.id)
    await farmApi.batchAuditFarms(farmIds, 'approved', '')
    ElMessage.success('批量审核通过成功')
    fetchFarmList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('批量审核通过失败:', error)
      ElMessage.error('批量审核通过失败')
    }
  }
}

// 批量拒绝
const handleBatchReject = async () => {
  try {
    const { value: reason } = await ElMessageBox.prompt(
      `请输入批量拒绝 ${multipleSelection.value.length} 个农场的原因：`,
      '批量拒绝',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /.+/,
        inputErrorMessage: '请输入拒绝原因'
      }
    )
    
    const farmIds = multipleSelection.value.map(item => item.id)
    await farmApi.batchAuditFarms(farmIds, 'rejected', reason)
    ElMessage.success('批量审核拒绝成功')
    fetchFarmList()
  } catch (error) {
    if (error !== 'cancel') {
      console.error('批量审核拒绝失败:', error)
      ElMessage.error('批量审核拒绝失败')
    }
  }
}

// 选择变化
const handleSelectionChange = (selection) => {
  multipleSelection.value = selection
}

// 分页变化
const handleSizeChange = (size) => {
  pageInfo.size = size
  pageInfo.current = 1
  fetchFarmList()
}

const handleCurrentChange = (current) => {
  pageInfo.current = current
  fetchFarmList()
}

// 关闭详情对话框
const handleDetailDialogClose = () => {
  currentFarm.value = null
}

// 获取审核状态类型
const getAuditStatusType = (status) => {
  const typeMap = {
    pending: 'warning',
    approved: 'success',
    rejected: 'danger'
  }
  return typeMap[status] || 'info'
}

// 获取审核状态文本
const getAuditStatusText = (status) => {
  const textMap = {
    pending: '待审核',
    approved: '审核通过',
    rejected: '审核拒绝'
  }
  return textMap[status] || '未知状态'
}

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return ''
  return new Date(dateString).toLocaleString('zh-CN')
}

// 生命周期
onMounted(() => {
  fetchFarmList()
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
  margin: 0;
}

.search-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
}

.search-actions {
  display: flex;
  gap: 12px;
}

/* 操作区域 */
.action-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 4px;
}

.action-left {
  display: flex;
  gap: 12px;
}

.action-right {
  display: flex;
  gap: 12px;
}

/* 表格区域 */
.table-section {
  margin-bottom: 20px;
}

.farm-table {
  width: 100%;
}

/* 操作按钮 */
.action-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.action-btn {
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s;
}

.view-btn {
  background: #e1f3ff;
  color: #1890ff;
}

.view-btn:hover {
  background: #bae7ff;
}

.approve-btn {
  background: #f6ffed;
  color: #52c41a;
}

.approve-btn:hover {
  background: #d9f7be;
}

.reject-btn {
  background: #fff2f0;
  color: #ff4d4f;
}

.reject-btn:hover {
  background: #ffccc7;
}

/* 分页区域 */
.pagination-section {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

/* 农场详情 */
.farm-detail {
  max-height: 600px;
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
  font-size: 16px;
  font-weight: 600;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

.detail-item {
  display: flex;
  align-items: center;
}

.detail-item.full-width {
  grid-column: 1 / -1;
}

.detail-item label {
  font-weight: 500;
  color: #666;
  margin-right: 8px;
  min-width: 80px;
}

.detail-item span {
  color: #333;
}

.description {
  color: #666;
  line-height: 1.6;
  margin: 0;
  padding: 12px;
  background: #fafafa;
  border-radius: 6px;
}

/* 图片画廊 */
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.farm-image {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  cursor: pointer;
}

/* 审核操作 */
.audit-actions {
  display: flex;
  gap: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .search-grid {
    grid-template-columns: 1fr;
  }
  
  .action-section {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;
  }
  
  .detail-grid {
    grid-template-columns: 1fr;
  }
  
  .image-gallery {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
  
  .farm-image {
    width: 100px;
    height: 100px;
  }
}
</style>