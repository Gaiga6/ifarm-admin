<template>
  <el-form
    ref="plotFormRef"
    :model="plotForm"
    :rules="plotRules"
    label-width="120px"
    class="plot-create-form"
  >
    <!-- 基本信息 -->
    <div class="form-section">
      <h3 class="section-title">基本信息</h3>
      <div class="form-grid">
        <el-form-item label="地块编码" prop="plotCode">
          <el-input 
            v-model="plotForm.plotCode" 
            placeholder="请输入地块编码"
            :disabled="isEdit"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="地块名称" prop="plotName">
          <el-input 
            v-model="plotForm.plotName" 
            placeholder="请输入地块名称"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="地块面积(㎡)" prop="area">
          <el-input-number
            v-model="plotForm.area"
            :min="1"
            :max="999999"
            placeholder="请输入地块面积"
            style="width: 100%"
          />
        </el-form-item>
        
        <el-form-item label="所属农场" prop="farmId" v-if="showFarmSelect">
          <el-select 
            v-model="plotForm.farmId" 
            placeholder="请选择所属农场"
            clearable
            style="width: 100%"
            :loading="farmListLoading"
          >
            <el-option 
              v-for="farm in farmList" 
              :key="farm.id" 
              :label="farm.farmName" 
              :value="farm.id"
            />
          </el-select>
        </el-form-item>
      </div>
    </div>

    <!-- 土壤和环境信息 -->
    <div class="form-section">
      <h3 class="section-title">土壤和环境信息</h3>
      <div class="form-grid">
        <el-form-item label="土壤类型" prop="soilType">
          <el-select 
            v-model="plotForm.soilType" 
            placeholder="请选择土壤类型"
            clearable
            style="width: 100%"
          >
            <el-option label="黏土" value="clay" />
            <el-option label="壤土" value="loam" />
            <el-option label="砂土" value="sand" />
            <el-option label="砂壤土" value="sandy_loam" />
            <el-option label="黏壤土" value="clay_loam" />
            <el-option label="粉砂土" value="silt" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="灌溉方式" prop="irrigationType">
          <el-select 
            v-model="plotForm.irrigationType" 
            placeholder="请选择灌溉方式"
            clearable
            style="width: 100%"
          >
            <el-option label="滴灌" value="drip" />
            <el-option label="喷灌" value="sprinkler" />
            <el-option label="漫灌" value="flood" />
            <el-option label="微喷" value="micro_spray" />
            <el-option label="渗灌" value="seepage" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="排水系统" prop="drainageSystem">
          <el-input 
            v-model="plotForm.drainageSystem" 
            placeholder="请输入排水系统描述"
            clearable
          />
        </el-form-item>
      </div>
    </div>

    <!-- 种植信息 -->
    <div class="form-section">
      <h3 class="section-title">种植信息</h3>
      <div class="form-grid">
        <el-form-item label="作物类型" prop="cropType">
          <el-select 
            v-model="plotForm.cropType" 
            placeholder="请选择作物类型"
            clearable
            style="width: 100%"
          >
            <el-option label="蔬菜" value="vegetable" />
            <el-option label="水果" value="fruit" />
            <el-option label="粮食作物" value="grain" />
            <el-option label="经济作物" value="cash_crop" />
            <el-option label="花卉" value="flower" />
            <el-option label="中药材" value="herb" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="种植状态" prop="plantingStatus">
          <el-select 
            v-model="plotForm.plantingStatus" 
            placeholder="请选择种植状态"
            clearable
            style="width: 100%"
          >
            <el-option label="未种植" value="unplanted" />
            <el-option label="已播种" value="seeded" />
            <el-option label="生长中" value="growing" />
            <el-option label="成熟期" value="mature" />
            <el-option label="已收获" value="harvested" />
            <el-option label="休耕" value="fallow" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="种植日期" prop="plantingDate">
          <el-date-picker
            v-model="plotForm.plantingDate"
            type="date"
            placeholder="请选择种植日期"
            style="width: 100%"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        
        <el-form-item label="预计收获日期" prop="expectedHarvestDate">
          <el-date-picker
            v-model="plotForm.expectedHarvestDate"
            type="date"
            placeholder="请选择预计收获日期"
            style="width: 100%"
            format="YYYY-MM-DD"
            value-format="YYYY-MM-DD"
          />
        </el-form-item>
        
        <el-form-item label="种植品种" prop="variety">
          <el-input 
            v-model="plotForm.variety" 
            placeholder="请输入种植品种"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="播种密度" prop="seedingDensity">
          <el-input 
            v-model="plotForm.seedingDensity" 
            placeholder="请输入播种密度（如：每亩1000株）"
            clearable
          />
        </el-form-item>
      </div>
    </div>

    <!-- 位置信息 -->
    <div class="form-section">
      <h3 class="section-title">位置信息</h3>
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
      </div>
    </div>

    <!-- 地块描述 -->
    <div class="form-section">
      <h3 class="section-title">地块描述</h3>
      <el-form-item label="地块描述" prop="description">
        <el-input
          v-model="plotForm.description"
          type="textarea"
          :rows="4"
          placeholder="请输入地块描述，包括特殊说明、注意事项等"
          maxlength="300"
          show-word-limit
        />
      </el-form-item>
    </div>

    <!-- 操作按钮 -->
    <div class="form-actions">
      <el-button @click="handleReset">重置</el-button>
      <el-button type="primary" @click="handleSubmit" :loading="loading">
        {{ submitText }}
      </el-button>
    </div>
  </el-form>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import * as farmApi from '@/api/farm/farm'

// 定义组件属性
const props = defineProps({
  // 是否为编辑模式
  isEdit: {
    type: Boolean,
    default: false
  },
  // 初始数据（编辑时使用）
  initialData: {
    type: Object,
    default: () => ({})
  },
  // 提交按钮文本
  submitText: {
    type: String,
    default: '创建地块'
  },
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  },
  // 是否显示农场选择（如果在农场管理页面则不显示）
  showFarmSelect: {
    type: Boolean,
    default: true
  },
  // 默认农场ID
  defaultFarmId: {
    type: Number,
    default: null
  }
})

// 定义事件
const emit = defineEmits(['submit', 'reset'])

// 表单引用
const plotFormRef = ref()

// 农场列表
const farmList = ref([])
const farmListLoading = ref(false)

// 地块表单数据
const plotForm = reactive({
  plotCode: '',
  plotName: '',
  area: null,
  farmId: props.defaultFarmId,
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
  description: '',
  ...props.initialData
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
    { required: true, message: '请输入地块面积', trigger: 'blur' },
    { type: 'number', min: 1, message: '地块面积必须大于0', trigger: 'blur' }
  ],
  farmId: [
    { required: true, message: '请选择所属农场', trigger: 'change' }
  ],
  soilType: [
    { required: true, message: '请选择土壤类型', trigger: 'change' }
  ],
  irrigationType: [
    { required: true, message: '请选择灌溉方式', trigger: 'change' }
  ],
  cropType: [
    { required: true, message: '请选择作物类型', trigger: 'change' }
  ],
  plantingStatus: [
    { required: true, message: '请选择种植状态', trigger: 'change' }
  ],
  description: [
    { max: 300, message: '描述不能超过300个字符', trigger: 'blur' }
  ]
}

// 获取农场列表
const fetchFarmList = async () => {
  if (!props.showFarmSelect) return
  
  try {
    farmListLoading.value = true
    const result = await farmApi.getFarmPage({ page: 1, size: 100 })
    farmList.value = result.list || []
  } catch (error) {
    console.error('获取农场列表失败:', error)
    ElMessage.error('获取农场列表失败')
  } finally {
    farmListLoading.value = false
  }
}

// 提交表单
const handleSubmit = async () => {
  try {
    await plotFormRef.value?.validate()
    emit('submit', { ...plotForm })
  } catch (error) {
    ElMessage.error('请检查表单填写是否正确')
  }
}

// 重置表单
const handleReset = () => {
  plotFormRef.value?.resetFields()
  Object.keys(plotForm).forEach(key => {
    if (key === 'farmId') {
      plotForm[key] = props.defaultFarmId
    } else if (typeof plotForm[key] === 'string') {
      plotForm[key] = ''
    } else {
      plotForm[key] = null
    }
  })
  emit('reset')
}

// 组件挂载时获取农场列表
onMounted(() => {
  fetchFarmList()
})

// 暴露方法给父组件
defineExpose({
  validate: () => plotFormRef.value?.validate(),
  resetFields: () => plotFormRef.value?.resetFields(),
  getFormData: () => ({ ...plotForm })
})
</script>

<style scoped>
.plot-create-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #fafafa;
  border-radius: 8px;
}

.section-title {
  margin: 0 0 20px 0;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  border-bottom: 2px solid #67c23a;
  padding-bottom: 8px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

.form-actions {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #ebeef5;
}

.form-actions .el-button {
  margin: 0 10px;
  min-width: 100px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .plot-create-form {
    max-width: 100%;
    padding: 0 10px;
  }
  
  .form-section {
    padding: 15px;
  }
}
</style>