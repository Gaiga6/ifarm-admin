<template>
  <el-dialog
    v-model="visible"
    title="地图选点"
    width="80%"
    :before-close="handleClose"
    class="map-selector-dialog"
  >
    <div class="map-container">
      <!-- 搜索框 -->
      <div class="search-box">
        <el-input
          v-model="searchKeyword"
          placeholder="搜索地址或POI"
          clearable
          @keyup.enter="searchLocation"
        >
          <template #append>
            <el-button @click="searchLocation" :icon="Search">搜索</el-button>
          </template>
        </el-input>
      </div>
      
      <!-- 地图容器 -->
      <div id="mapContainer" class="map-view"></div>
      
      <!-- 位置信息显示 -->
      <div class="location-info" v-if="selectedLocation">
        <h4>选中位置信息</h4>
        <p><strong>地址：</strong>{{ selectedLocation.address }}</p>
        <p><strong>经度：</strong>{{ selectedLocation.longitude }}</p>
        <p><strong>纬度：</strong>{{ selectedLocation.latitude }}</p>
      </div>
    </div>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="getCurrentPosition">获取当前位置</el-button>
        <el-button @click="handleClose">取消</el-button>
        <el-button 
          type="primary" 
          @click="confirmSelection"
          :disabled="!selectedLocation"
        >
          确认选择
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, watch, nextTick, defineProps, defineEmits } from 'vue'
import { ElMessage } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { mapConfig, loadAMapAPI, checkApiKey } from '../config/map.js'

// 定义组件属性
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  // 初始位置
  initialLocation: {
    type: Object,
    default: () => ({
      longitude: 116.397428,
      latitude: 39.90923,
      address: ''
    })
  }
})

// 定义事件
const emit = defineEmits(['update:modelValue', 'confirm'])

// 响应式数据
const visible = ref(false)
const searchKeyword = ref('')
const selectedLocation = ref(null)
const map = ref(null)
const marker = ref(null)
const geocoder = ref(null)

// 监听对话框显示状态
watch(() => props.modelValue, (newVal) => {
  visible.value = newVal
  if (newVal) {
    nextTick(() => {
      initMap()
    })
  }
})

watch(visible, (newVal) => {
  emit('update:modelValue', newVal)
})

// 初始化地图
const initMap = () => {
  // 检查API密钥配置
  if (!checkApiKey()) {
    ElMessage.error('地图API密钥未配置，请联系管理员')
    return
  }
  
  // 加载地图API
  loadAMapAPI().then(() => {
    createMap()
  }).catch((error) => {
    console.error('地图加载失败:', error)
    ElMessage.error('地图加载失败，请检查网络连接或API密钥配置')
  })
}

// 创建地图实例
const createMap = () => {
  try {
    // 创建地图
    map.value = new AMap.Map('mapContainer', {
      zoom: mapConfig.defaultZoom,
      center: [props.initialLocation.longitude, props.initialLocation.latitude],
      mapStyle: mapConfig.mapStyle
    })
    
    // 创建地理编码实例
    geocoder.value = new AMap.Geocoder({
      radius: mapConfig.searchRadius,
      extensions: 'all'
    })
    
    // 添加点击事件
    map.value.on('click', handleMapClick)
    
    // 如果有初始位置，添加标记
    if (props.initialLocation.longitude && props.initialLocation.latitude) {
      addMarker(props.initialLocation.longitude, props.initialLocation.latitude)
      selectedLocation.value = { ...props.initialLocation }
    }
    
    ElMessage.success('地图加载成功，点击地图选择位置')
  } catch (error) {
    console.error('地图初始化失败:', error)
    ElMessage.error('地图初始化失败，请刷新页面重试')
  }
}

// 地图点击事件
const handleMapClick = (e) => {
  const longitude = e.lnglat.lng
  const latitude = e.lnglat.lat
  
  // 添加标记
  addMarker(longitude, latitude)
  
  // 逆地理编码获取地址
  if (geocoder.value) {
    geocoder.value.getAddress([longitude, latitude], (status, result) => {
      if (status === 'complete' && result.regeocode) {
        const address = result.regeocode.formattedAddress
        selectedLocation.value = {
          longitude: parseFloat(longitude.toFixed(6)),
          latitude: parseFloat(latitude.toFixed(6)),
          address: address
        }
      } else {
        selectedLocation.value = {
          longitude: parseFloat(longitude.toFixed(6)),
          latitude: parseFloat(latitude.toFixed(6)),
          address: '未知地址'
        }
      }
    })
  }
}

// 添加标记
const addMarker = (longitude, latitude) => {
  // 移除旧标记
  if (marker.value) {
    map.value.remove(marker.value)
  }
  
  // 添加新标记
  marker.value = new AMap.Marker({
    position: [longitude, latitude],
    title: '选中位置'
  })
  
  map.value.add(marker.value)
}

// 搜索位置
const searchLocation = () => {
  if (!searchKeyword.value.trim()) {
    ElMessage.warning('请输入搜索关键词')
    return
  }
  
  if (typeof AMap === 'undefined') {
    ElMessage.error('地图未加载完成')
    return
  }
  
  const placeSearch = new AMap.PlaceSearch({
    pageSize: 10,
    pageIndex: 1,
    city: '全国'
  })
  
  placeSearch.search(searchKeyword.value, (status, result) => {
    if (status === 'complete' && result.poiList.pois.length > 0) {
      const poi = result.poiList.pois[0]
      const longitude = poi.location.lng
      const latitude = poi.location.lat
      
      // 移动地图中心
      map.value.setCenter([longitude, latitude])
      map.value.setZoom(16)
      
      // 添加标记
      addMarker(longitude, latitude)
      
      selectedLocation.value = {
        longitude: parseFloat(longitude.toFixed(6)),
        latitude: parseFloat(latitude.toFixed(6)),
        address: poi.name + ' ' + poi.address
      }
      
      ElMessage.success('搜索成功')
    } else {
      ElMessage.error('未找到相关位置')
    }
  })
}

// 获取当前位置
const getCurrentPosition = () => {
  if (!navigator.geolocation) {
    ElMessage.error('您的浏览器不支持地理位置获取')
    return
  }
  
  ElMessage.info('正在获取当前位置...')
  
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const longitude = position.coords.longitude
      const latitude = position.coords.latitude
      
      // 移动地图中心
      if (map.value) {
        map.value.setCenter([longitude, latitude])
        map.value.setZoom(16)
        
        // 添加标记
        addMarker(longitude, latitude)
        
        // 获取地址信息
        if (geocoder.value) {
          geocoder.value.getAddress([longitude, latitude], (status, result) => {
            if (status === 'complete' && result.regeocode) {
              selectedLocation.value = {
                longitude: parseFloat(longitude.toFixed(6)),
                latitude: parseFloat(latitude.toFixed(6)),
                address: result.regeocode.formattedAddress
              }
            }
          })
        }
      }
      
      ElMessage.success('当前位置获取成功')
    },
    (error) => {
      let errorMsg = '位置获取失败'
      switch(error.code) {
        case error.PERMISSION_DENIED:
          errorMsg = '用户拒绝了地理位置请求'
          break
        case error.POSITION_UNAVAILABLE:
          errorMsg = '位置信息不可用'
          break
        case error.TIMEOUT:
          errorMsg = '获取位置超时'
          break
      }
      ElMessage.error(errorMsg)
    },
    mapConfig.geolocationOptions
  )
}

// 确认选择
const confirmSelection = () => {
  if (selectedLocation.value) {
    emit('confirm', selectedLocation.value)
    handleClose()
  }
}

// 关闭对话框
const handleClose = () => {
  visible.value = false
  selectedLocation.value = null
  searchKeyword.value = ''
}
</script>

<style scoped>
.map-selector-dialog {
  .el-dialog__body {
    padding: 10px;
  }
}

.map-container {
  height: 500px;
  position: relative;
}

.search-box {
  margin-bottom: 10px;
  z-index: 1000;
  position: relative;
}

.map-view {
  width: 100%;
  height: 400px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.location-info {
  margin-top: 10px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
}

.location-info h4 {
  margin: 0 0 8px 0;
  color: #303133;
  font-size: 14px;
}

.location-info p {
  margin: 4px 0;
  color: #606266;
  font-size: 12px;
}

.dialog-footer {
  text-align: right;
}

.dialog-footer .el-button {
  margin-left: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .map-container {
    height: 400px;
  }
  
  .map-view {
    height: 300px;
  }
}
</style>