<template>
  <el-form
    ref="farmFormRef"
    :model="form"
    :rules="farmRules"
    label-width="120px"
    class="farm-create-form"
  >
    <!-- 基本信息 -->
    <div class="form-section">
      <h3 class="section-title">基本信息</h3>
      <div class="form-grid">
        <el-form-item label="农场名称" prop="farmName">
        <el-input 
          v-model="form.farmName" 
          placeholder="请输入农场名称"
          clearable
        />
      </el-form-item>
      
      <el-form-item label="农场编码" prop="farmCode">
        <div class="code-input-group">
          <el-input 
            v-model="form.farmCode" 
            placeholder="请输入农场编码或点击生成"
            clearable
            style="flex: 1;"
          />
          <el-button 
            type="primary" 
            @click="generateFarmCode"
            :disabled="!form.province"
            style="margin-left: 8px;"
          >
            智能生成
          </el-button>
        </div>
      </el-form-item>
      
      <el-form-item label="总面积(㎡)" prop="totalArea">
        <el-input-number
          v-model="form.totalArea"
          :min="1"
          :max="999999999"
          placeholder="请输入总面积"
          style="width: 100%"
        />
      </el-form-item>
        
        <el-form-item label="联系人" prop="contactPerson">
          <el-input 
            v-model="form.contactPerson" 
            placeholder="请输入联系人"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="联系电话" prop="contactPhone">
          <el-input 
            v-model="form.contactPhone" 
            placeholder="请输入联系电话"
            clearable
          />
        </el-form-item>
        
        <el-form-item label="营业执照" prop="businessLicense">
          <el-input 
            v-model="form.businessLicense" 
            placeholder="请输入营业执照号"
            clearable
          />
        </el-form-item>
      </div>
    </div>

    <!-- 地址信息 -->
    <div class="form-section">
      <h3 class="section-title">地址信息</h3>
      <div class="form-grid">
        <!-- 地址选择器 -->
        <div class="full-width">
          <AddressSelector
            v-model:province="form.province"
            v-model:city="form.city"
            v-model:district="form.district"
            v-model:address="form.address"
            @address-change="handleAddressChange"
          />
        </div>
      </div>
    </div>



    <!-- 农场描述 -->
    <div class="form-section">
      <h3 class="section-title">农场描述</h3>
      <el-form-item label="农场描述" prop="description">
        <el-input
          v-model="form.description"
          type="textarea"
          :rows="4"
          placeholder="请输入农场描述，包括主要种植作物、特色等"
          maxlength="500"
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
import { ref, reactive, defineProps, defineEmits, defineExpose } from 'vue'
import { ElMessage } from 'element-plus'
import AddressSelector from './AddressSelector.vue'

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
    default: '创建农场'
  },
  // 加载状态
  loading: {
    type: Boolean,
    default: false
  }
})

// 定义事件
const emit = defineEmits(['submit', 'reset'])

// 表单引用
const farmFormRef = ref()

// 地址变化处理函数
const handleAddressChange = (addressInfo) => {
  // 当地址组件发生变化时，可以在这里处理额外的逻辑
  console.log('地址信息已更新:', addressInfo)
}



// 农场表单数据
const form = reactive({
  farmName: '',
  farmCode: '',
  totalArea: null,
  contactPerson: '',
  contactPhone: '',
  businessLicense: '',
  province: '',
  city: '',
  district: '',
  address: '',
  description: '',
  ...props.initialData
})

// 保持向后兼容
const farmForm = form

// 表单验证规则
const farmRules = {
  farmName: [
    { required: true, message: '请输入农场名称', trigger: 'blur' },
    { min: 2, max: 50, message: '农场名称长度在 2 到 50 个字符', trigger: 'blur' }
  ],
  farmCode: [
    { required: true, message: '请输入农场编码', trigger: 'blur' },
    { pattern: /^[A-Z0-9]{4,20}$/, message: '农场编码由4-20位大写字母和数字组成', trigger: 'blur' }
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
  businessLicense: [
    { required: true, message: '请输入营业执照号', trigger: 'blur' },
    { pattern: /^[0-9A-Z]{15,18}$/, message: '营业执照号格式不正确', trigger: 'blur' }
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
    { required: true, message: '请输入详细地址', trigger: 'blur' },
    { min: 5, max: 100, message: '详细地址长度在 5 到 100 个字符', trigger: 'blur' }
  ],
  description: [
    { max: 500, message: '描述不能超过500个字符', trigger: 'blur' }
  ]
}

// 提交表单
const handleSubmit = async () => {
  try {
    await farmFormRef.value?.validate()
    emit('submit', { ...form })
  } catch (error) {
    ElMessage.error('请检查表单填写是否正确')
  }
}

// 智能生成农场编码
const generateFarmCode = () => {
  if (!form.province) {
    ElMessage.warning('请先选择省份')
    return
  }
  
  // 使用省份名称的前两个字符作为代码
  const provinceCode = form.province ? form.province.slice(0, 2) : 'XX'
  const year = new Date().getFullYear().toString().slice(-2)
  const month = (new Date().getMonth() + 1).toString().padStart(2, '0')
  const day = new Date().getDate().toString().padStart(2, '0')
  const random = Math.random().toString(36).substr(2, 4).toUpperCase()
  
  form.farmCode = `${provinceCode}${year}${month}${day}${random}`
  ElMessage.success('农场编码生成成功！')
}



// 重置表单
const handleReset = () => {
  farmFormRef.value?.resetFields()
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'string') {
      form[key] = ''
    } else {
      form[key] = null
    }
  })
  emit('reset')
}

// 暴露方法给父组件
defineExpose({
  validate: () => farmFormRef.value?.validate(),
  resetFields: () => farmFormRef.value?.resetFields(),
  getFormData: () => ({ ...form })
})
</script>

<style scoped>
.farm-create-form {
  max-width: 900px;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.form-section {
  margin-bottom: 0;
  padding: 32px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.form-section:last-of-type {
  border-bottom: none;
}

.section-title {
  margin: 0 0 24px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  display: flex;
  align-items: center;
  gap: 8px;
}

.section-title::before {
  content: '';
  width: 4px;
  height: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  align-items: start;
}

.full-width {
  grid-column: 1 / -1;
  margin-top: 8px;
}

.form-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 40px;
  padding: 24px 0;
  border-top: 1px solid #ebeef5;
  background: #fafbfc;
  border-radius: 0 0 8px 8px;
}

.form-actions .el-button {
  min-width: 120px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
}

.code-input-group {
  display: flex;
  align-items: center;
}

.location-actions {
  margin-bottom: 20px;
  text-align: center;
}

.location-actions .el-button {
  margin: 0 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .farm-create-form {
    max-width: 100%;
    margin: 16px;
    border-radius: 8px;
  }
  
  .form-section {
    padding: 24px 20px;
  }
  
  .section-title {
    font-size: 16px;
  }
  
  .form-actions {
    padding: 20px;
    margin-top: 24px;
  }
  
  .form-actions .el-button {
    min-width: 100px;
    height: 36px;
  }
}

@media (max-width: 480px) {
  .farm-create-form {
    margin: 8px;
  }
  
  .form-section {
    padding: 20px 16px;
  }
  
  .form-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .form-actions .el-button {
    width: 100%;
    max-width: 200px;
  }
}
</style>