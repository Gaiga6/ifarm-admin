<template>
  <div class="address-selector">
    <!-- 简化的地址输入方式 -->
    <div class="address-input-group">
      <!-- 省市县联动选择 -->
      <div class="cascader-wrapper">
        <el-cascader
          v-model="selectedRegion"
          :options="regionOptions"
          :props="cascaderProps"
          placeholder="请选择省/市/区县"
          filterable
          clearable
          @change="handleRegionChange"
          style="width: 100%; margin-bottom: 16px;"
        />
      </div>
      
      <!-- 详细地址输入 -->
      <el-input
        v-model="addressForm.address"
        placeholder="请输入详细地址，如街道、门牌号等"
        clearable
        maxlength="100"
        show-word-limit
        @input="handleAddressInput"
      />
    </div>

    <!-- 地址预览 -->
    <div class="address-preview" v-if="fullAddress">
      <el-tag type="success" size="default">
        <el-icon><LocationInformation /></el-icon>
        {{ fullAddress }}
      </el-tag>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, defineProps, defineEmits } from 'vue'
import { LocationInformation } from '@element-plus/icons-vue'
import { addressData } from '../config/addressData.js'

// 定义组件属性
const props = defineProps({
  province: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: ''
  },
  district: {
    type: String,
    default: ''
  },
  address: {
    type: String,
    default: ''
  }
})

// 定义事件
const emit = defineEmits(['update:province', 'update:city', 'update:district', 'update:address', 'address-change'])

// 地址表单数据
const addressForm = reactive({
  province: props.province || '',
  city: props.city || '',
  district: props.district || '',
  address: props.address || ''
})

// 级联选择器的选中值
const selectedRegion = ref([])

// 级联选择器配置
const cascaderProps = {
  value: 'name',
  label: 'name',
  children: 'children',
  emitPath: false,
  checkStrictly: true
}

// 构建级联选择器的数据结构
const regionOptions = computed(() => {
  return addressData.provinces.map(province => {
    const provinceOption = {
      name: province.name,
      code: province.code,
      children: []
    }
    
    // 添加城市数据
    if (addressData.cities[province.name]) {
      provinceOption.children = addressData.cities[province.name].map(city => {
        const cityOption = {
          name: city.name,
          code: city.code,
          children: []
        }
        
        // 添加区县数据
        if (addressData.districts[city.name]) {
          cityOption.children = addressData.districts[city.name].map(district => ({
            name: district.name,
            code: district.code
          }))
        }
        
        return cityOption
      })
    }
    
    return provinceOption
  })
})

// 完整地址
const fullAddress = computed(() => {
  const parts = []
  if (addressForm.province) parts.push(addressForm.province)
  if (addressForm.city) parts.push(addressForm.city)
  if (addressForm.district) parts.push(addressForm.district)
  if (addressForm.address) parts.push(addressForm.address)
  return parts.join('')
})

// 级联选择器变化处理
const handleRegionChange = (value) => {
  if (value && value.length > 0) {
    // 根据选择的层级更新地址信息
    addressForm.province = value[0] || ''
    addressForm.city = value[1] || ''
    addressForm.district = value[2] || ''
  } else {
    // 清空选择
    addressForm.province = ''
    addressForm.city = ''
    addressForm.district = ''
  }
  
  emitChange()
}

// 详细地址输入处理
const handleAddressInput = () => {
  emitChange()
}

// 发送变化事件
const emitChange = () => {
  // 发送各个字段的更新事件
  emit('update:province', addressForm.province)
  emit('update:city', addressForm.city)
  emit('update:district', addressForm.district)
  emit('update:address', addressForm.address)
  
  // 发送地址变化事件
  emit('address-change', {
    province: addressForm.province,
    city: addressForm.city,
    district: addressForm.district,
    address: addressForm.address,
    fullAddress: fullAddress.value
  })
}

// 监听props变化，同步到内部状态
watch(() => [props.province, props.city, props.district, props.address], ([province, city, district, address]) => {
  addressForm.province = province || ''
  addressForm.city = city || ''
  addressForm.district = district || ''
  addressForm.address = address || ''
  
  // 更新级联选择器的值
  updateSelectedRegion()
}, { immediate: true })

// 更新级联选择器的选中值
const updateSelectedRegion = () => {
  const values = []
  if (addressForm.province) values.push(addressForm.province)
  if (addressForm.city) values.push(addressForm.city)
  if (addressForm.district) values.push(addressForm.district)
  selectedRegion.value = values
}

// 暴露方法给父组件
defineExpose({
  getFullAddress: () => fullAddress.value,
  reset: () => {
    addressForm.province = ''
    addressForm.city = ''
    addressForm.district = ''
    addressForm.address = ''
    cities.value = []
    districts.value = []
  }
})
</script>

<style scoped>
.address-selector {
  width: 100%;
}

.address-input-group {
  width: 100%;
}

.cascader-wrapper {
  width: 100%;
}

.address-preview {
  margin-top: 12px;
  padding: 8px 0;
}

.address-preview .el-tag {
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 6px;
  max-width: 100%;
  word-break: break-all;
}

.address-preview .el-icon {
  margin-right: 6px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .address-preview .el-tag {
    font-size: 12px;
    padding: 6px 10px;
  }
}
</style>