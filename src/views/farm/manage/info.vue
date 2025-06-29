<template>
  <div class="page-container">
    <div class="content-card">
      <!-- 页面标题 -->
      <div class="page-header">
        <h2>农场信息管理</h2>
        <p class="page-desc">管理您的农场基本信息、联系方式和相关资料</p>
      </div>

      <!-- 农场信息表单 -->
      <el-form
        ref="farmFormRef"
        :model="farmForm"
        :rules="farmRules"
        label-width="120px"
        class="farm-form"
      >
        <div class="form-section">
          <h3>基本信息</h3>
          <div class="form-grid">
            <el-form-item label="农场名称" prop="farmName">
              <el-input v-model="farmForm.farmName" placeholder="请输入农场名称" />
            </el-form-item>
            <el-form-item label="农场编码" prop="farmCode">
              <el-input v-model="farmForm.farmCode" placeholder="请输入农场编码" :disabled="isEdit" />
            </el-form-item>
            <el-form-item label="总面积(㎡)" prop="totalArea">
              <el-input-number
                v-model="farmForm.totalArea"
                :min="1"
                :max="999999999"
                placeholder="请输入总面积"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="联系人" prop="contactPerson">
              <el-input v-model="farmForm.contactPerson" placeholder="请输入联系人" />
            </el-form-item>
            <el-form-item label="联系电话" prop="contactPhone">
              <el-input v-model="farmForm.contactPhone" placeholder="请输入联系电话" />
            </el-form-item>
            <el-form-item label="营业执照" prop="businessLicense">
              <el-input v-model="farmForm.businessLicense" placeholder="请输入营业执照号" />
            </el-form-item>
          </div>
        </div>

        <div class="form-section">
          <h3>地址信息</h3>
          <div class="form-grid">
            <el-form-item label="省份" prop="province">
              <el-select v-model="farmForm.province" placeholder="请选择省份" @change="handleProvinceChange">
                <el-option
                  v-for="province in provinces"
                  :key="province.code"
                  :label="province.name"
                  :value="province.name"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="城市" prop="city">
              <el-select v-model="farmForm.city" placeholder="请选择城市" @change="handleCityChange">
                <el-option
                  v-for="city in cities"
                  :key="city.code"
                  :label="city.name"
                  :value="city.name"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="区县" prop="district">
              <el-select v-model="farmForm.district" placeholder="请选择区县">
                <el-option
                  v-for="district in districts"
                  :key="district.code"
                  :label="district.name"
                  :value="district.name"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="详细地址" prop="address" class="full-width">
              <el-input v-model="farmForm.address" placeholder="请输入详细地址" />
            </el-form-item>
            <el-form-item label="经度" prop="longitude">
              <el-input-number
                v-model="farmForm.longitude"
                :precision="6"
                :min="-180"
                :max="180"
                placeholder="请输入经度"
                style="width: 100%"
              />
            </el-form-item>
            <el-form-item label="纬度" prop="latitude">
              <el-input-number
                v-model="farmForm.latitude"
                :precision="6"
                :min="-90"
                :max="90"
                placeholder="请输入纬度"
                style="width: 100%"
              />
            </el-form-item>
          </div>
        </div>

        <div class="form-section">
          <h3>农场描述</h3>
          <el-form-item label="农场描述" prop="description">
            <el-input
              v-model="farmForm.description"
              type="textarea"
              :rows="4"
              placeholder="请输入农场描述，包括种植特色、环境优势等"
            />
          </el-form-item>
        </div>

        <div class="form-section">
          <h3>农场图片</h3>
          <el-form-item label="农场图片" prop="imageUrls">
            <div class="image-upload-container">
              <el-upload
                v-model:file-list="fileList"
                action="#"
                list-type="picture-card"
                :auto-upload="false"
                :on-change="handleImageChange"
                :on-remove="handleImageRemove"
                :before-upload="beforeImageUpload"
                multiple
              >
                <el-icon><Plus /></el-icon>
              </el-upload>
              <div class="upload-tip">
                <p>支持 jpg、png、jpeg 格式，单张图片不超过 5MB，最多上传 6 张</p>
              </div>
            </div>
          </el-form-item>
        </div>


      </el-form>
    </div>

    <!-- 审核状态提示 -->
    <div v-if="farmInfo && farmInfo.auditStatus" class="status-card">
      <el-alert
        :title="getStatusTitle(farmInfo.auditStatus)"
        :type="getStatusType(farmInfo.auditStatus)"
        :description="getStatusDescription(farmInfo.auditStatus)"
        show-icon
        :closable="false"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import * as farmApi from '@/api/farm/farm'

// 响应式数据
const farmFormRef = ref()
const submitLoading = ref(false)
const farmInfo = ref(null)
const fileList = ref([])

// 地区数据
const provinces = ref([])
const cities = ref([])
const districts = ref([])

// 表单数据
const farmForm = reactive({
  farmName: '',
  farmCode: '',
  description: '',
  province: '',
  city: '',
  district: '',
  address: '',
  longitude: null,
  latitude: null,
  totalArea: null,
  contactPerson: '',
  contactPhone: '',
  businessLicense: '',
  imageUrls: []
})

// 表单验证规则
const farmRules = {
  farmName: [
    { required: true, message: '请输入农场名称', trigger: 'blur' },
    { min: 2, max: 50, message: '农场名称长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  farmCode: [
    { required: true, message: '请输入农场编码', trigger: 'blur' },
    { pattern: /^[A-Z0-9]{6,20}$/, message: '农场编码由6-20位大写字母和数字组成', trigger: 'blur' }
  ],
  totalArea: [
    { required: true, message: '请输入总面积', trigger: 'blur' },
    { type: 'number', min: 1, message: '总面积必须大于0', trigger: 'blur' }
  ],
  contactPerson: [
    { required: true, message: '请输入联系人', trigger: 'blur' },
    { min: 2, max: 20, message: '联系人长度在 2 到 20 个字符', trigger: 'blur' }
  ],
  contactPhone: [
    { required: true, message: '请输入联系电话', trigger: 'blur' },
    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  province: [
    { required: true, message: '请选择省份', trigger: 'change' }
  ],
  city: [
    { required: true, message: '请选择城市', trigger: 'change' }
  ],
  district: [
    { required: true, message: '请选择区县', trigger: 'change' }
  ],
  address: [
    { required: true, message: '请输入详细地址', trigger: 'blur' }
  ]
}

// 计算属性
const isEdit = computed(() => {
  return farmInfo.value && farmInfo.value.id
})

// 获取当前用户的农场信息
const fetchFarmInfo = async () => {
  try {
    const result = await farmApi.getCurrentUserFarm()
    if (result) {
      farmInfo.value = result
      // 填充表单数据
      Object.keys(farmForm).forEach(key => {
        if (result[key] !== undefined) {
          farmForm[key] = result[key]
        }
      })
      
      // 处理图片列表
      if (result.imageUrls && result.imageUrls.length > 0) {
        fileList.value = result.imageUrls.map((url, index) => ({
          uid: index,
          name: `image-${index}.jpg`,
          status: 'success',
          url: url
        }))
      }
    }
  } catch (error) {
    console.error('获取农场信息失败:', error)
    // 如果是404错误，说明用户还没有农场，这是正常情况
    if (error.status !== 404) {
      ElMessage.error('获取农场信息失败')
    }
  }
}

// 初始化地区数据
const initRegionData = () => {
  // TODO: 对接真实的地区API获取省份数据
  // 临时使用静态数据，后续需要调用地区API
  provinces.value = [
    { code: '110000', name: '北京市' },
    { code: '120000', name: '天津市' },
    { code: '130000', name: '河北省' },
    { code: '140000', name: '山西省' },
    { code: '150000', name: '内蒙古自治区' },
    { code: '210000', name: '辽宁省' },
    { code: '220000', name: '吉林省' },
    { code: '230000', name: '黑龙江省' },
    { code: '310000', name: '上海市' },
    { code: '320000', name: '江苏省' },
    { code: '330000', name: '浙江省' },
    { code: '340000', name: '安徽省' },
    { code: '350000', name: '福建省' },
    { code: '360000', name: '江西省' },
    { code: '370000', name: '山东省' },
    { code: '410000', name: '河南省' },
    { code: '420000', name: '湖北省' },
    { code: '430000', name: '湖南省' },
    { code: '440000', name: '广东省' },
    { code: '450000', name: '广西壮族自治区' },
    { code: '460000', name: '海南省' },
    { code: '500000', name: '重庆市' },
    { code: '510000', name: '四川省' },
    { code: '520000', name: '贵州省' },
    { code: '530000', name: '云南省' },
    { code: '540000', name: '西藏自治区' },
    { code: '610000', name: '陕西省' },
    { code: '620000', name: '甘肃省' },
    { code: '630000', name: '青海省' },
    { code: '640000', name: '宁夏回族自治区' },
    { code: '650000', name: '新疆维吾尔自治区' }
  ]
}

// 省份变化
const handleProvinceChange = (province) => {
  farmForm.city = ''
  farmForm.district = ''
  
  // TODO: 根据省份调用真实API获取城市数据
  cities.value = [
    { code: '001', name: '市辖区' },
    { code: '002', name: '县级市' },
    { code: '003', name: '其他市' }
  ]
  districts.value = []
}

// 城市变化
const handleCityChange = (city) => {
  farmForm.district = ''
  
  // TODO: 根据城市调用真实API获取区县数据
  districts.value = [
    { code: '001', name: '区县1' },
    { code: '002', name: '区县2' },
    { code: '003', name: '区县3' }
  ]
}

// 图片上传相关
const handleImageChange = (file, fileList) => {
  // 更新图片URL列表
  farmForm.imageUrls = fileList.map(item => item.url || item.response?.url || '')
}

const handleImageRemove = (file, fileList) => {
  farmForm.imageUrls = fileList.map(item => item.url || item.response?.url || '')
}

const beforeImageUpload = (file) => {
  const isImage = file.type.startsWith('image/')
  const isLt5M = file.size / 1024 / 1024 < 5
  
  if (!isImage) {
    ElMessage.error('只能上传图片文件!')
    return false
  }
  if (!isLt5M) {
    ElMessage.error('图片大小不能超过 5MB!')
    return false
  }
  
  // TODO: 调用真实的文件上传API
  // const result = await fileApi.uploadImage(file)
  // file.url = result.url
  // farmForm.imageUrls.push(result.url)
  
  // 临时使用本地预览
  file.url = URL.createObjectURL(file)
  farmForm.imageUrls.push(file.url)
  
  return true
}

// 提交表单
const handleSubmit = async () => {
  try {
    await farmFormRef.value?.validate()
    submitLoading.value = true
    
    const formData = { ...farmForm }
    
    if (isEdit.value) {
      formData.id = farmInfo.value.id
      await farmApi.updateFarm(formData)
      ElMessage.success('农场信息更新成功')
    } else {
      await farmApi.createFarm(formData)
      ElMessage.success('农场创建成功，请等待管理员审核')
    }
    
    // 重新获取农场信息
    await fetchFarmInfo()
  } catch (error) {
    console.error('提交失败:', error)
    ElMessage.error('提交失败，请重试')
  } finally {
    submitLoading.value = false
  }
}

// 重置表单
const handleReset = () => {
  farmFormRef.value?.resetFields()
  fileList.value = []
  farmForm.imageUrls = []
}

// 取消编辑
const handleCancel = () => {
  // 重新获取农场信息，恢复原始数据
  fetchFarmInfo()
}

// 获取状态标题
const getStatusTitle = (status) => {
  const titleMap = {
    pending: '审核中',
    approved: '审核通过',
    rejected: '审核拒绝'
  }
  return titleMap[status] || '未知状态'
}

// 获取状态类型
const getStatusType = (status) => {
  const typeMap = {
    pending: 'warning',
    approved: 'success',
    rejected: 'error'
  }
  return typeMap[status] || 'info'
}

// 获取状态描述
const getStatusDescription = (status) => {
  const descMap = {
    pending: '您的农场信息正在审核中，请耐心等待管理员审核。',
    approved: '恭喜！您的农场信息已通过审核，可以正常使用所有功能。',
    rejected: '很抱歉，您的农场信息审核未通过，请根据拒绝原因修改后重新提交。'
  }
  return descMap[status] || ''
}

// 生命周期
onMounted(() => {
  initRegionData()
  fetchFarmInfo()
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
  padding: 32px;
  margin-bottom: 24px;
}

/* 页面标题 */
.page-header {
  margin-bottom: 32px;
  text-align: center;
}

.page-header h2 {
  margin: 0 0 8px 0;
  color: #262626;
  font-size: 24px;
  font-weight: 600;
}

.page-desc {
  margin: 0;
  color: #8c8c8c;
  font-size: 14px;
}

/* 表单样式 */
.farm-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  margin: 0 0 20px 0;
  color: #262626;
  font-size: 16px;
  font-weight: 600;
  padding-left: 8px;
  border-left: 3px solid #1890ff;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

/* 图片上传 */
.image-upload-container {
  width: 100%;
}

.upload-tip {
  margin-top: 8px;
}

.upload-tip p {
  margin: 0;
  color: #8c8c8c;
  font-size: 12px;
}

/* 表单操作 */
.form-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #f0f0f0;
}

/* 状态卡片 */
.status-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 24px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-container {
    padding: 16px;
  }
  
  .content-card {
    padding: 20px;
  }
  
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .form-actions {
    flex-direction: column;
  }
}
</style>