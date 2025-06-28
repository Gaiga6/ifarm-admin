/**
 * 农场管理 API 使用示例
 */

import { farmApi, plotApi } from '@/api/farm'
// 或者单独导入
// import * as farmApi from '@/api/farm/farm.js'
// import * as plotApi from '@/api/farm/plot.js'

/**
 * 农场管理使用示例
 */
export const farmExamples = {
  // 创建农场
  async createFarm() {
    try {
      const farmData = {
        farmName: '绿色有机农场',
        farmCode: 'FARM001',
        description: '专注有机蔬菜种植的现代化农场',
        province: '山东省',
        city: '济南市',
        district: '历城区',
        address: '港西路1234号',
        longitude: 117.1,
        latitude: 36.7,
        totalArea: 50000,
        contactPerson: '张三',
        contactPhone: '13800138000',
        businessLicense: 'BL123456789',
        ownerId: 1,
        imageUrls: [
          'https://example.com/farm1.jpg',
          'https://example.com/farm2.jpg'
        ]
      }
      
      const result = await farmApi.createFarm(farmData)
      console.log('创建农场成功:', result)
      return result
    } catch (error) {
      console.error('创建农场失败:', error)
      throw error
    }
  },

  // 分页查询农场
  async getFarmList(page = 1, size = 10) {
    try {
      const params = {
        page,
        size,
        farmName: '', // 可选的搜索条件
        province: '',
        city: '',
        status: null,
        ownerId: null
      }
      
      const result = await farmApi.getFarmPage(params)
      console.log('查询农场列表:', result)
      return result
    } catch (error) {
      console.error('查询农场列表失败:', error)
      throw error
    }
  },

  // 更新农场状态
  async updateFarmStatus(farmId, status) {
    try {
      const result = await farmApi.updateFarmStatus(farmId, status)
      console.log('更新农场状态成功:', result)
      return result
    } catch (error) {
      console.error('更新农场状态失败:', error)
      throw error
    }
  }
}

/**
 * 地块管理使用示例
 */
export const plotExamples = {
  // 创建地块
  async createPlot() {
    try {
      const plotData = {
        farmId: 1,
        name: 'A区01地块',
        area: 2000,
        location: '农场东南角',
        soilType: '黑土',
        waterSource: '井水',
        status: 'available',
        imageUrls: [
          'https://example.com/plot1.jpg'
        ]
      }
      
      const result = await plotApi.createPlot(plotData)
      console.log('创建地块成功:', result)
      return result
    } catch (error) {
      console.error('创建地块失败:', error)
      throw error
    }
  },

  // 根据农场ID查询地块列表
  async getPlotsByFarm(farmId) {
    try {
      const result = await plotApi.getPlotsByFarmId(farmId)
      console.log('查询地块列表:', result)
      return result
    } catch (error) {
      console.error('查询地块列表失败:', error)
      throw error
    }
  },

  // 检查地块名称是否存在
  async checkPlotName(farmId, name, excludeId = null) {
    try {
      const result = await plotApi.checkPlotNameExists(farmId, name, excludeId)
      console.log('检查地块名称:', result)
      return result
    } catch (error) {
      console.error('检查地块名称失败:', error)
      throw error
    }
  }
}

// Vue组件中的使用示例
export const vueComponentExample = `
<template>
  <div>
    <el-button @click="loadFarms">加载农场列表</el-button>
    <el-table :data="farms" style="width: 100%">
      <el-table-column prop="farmName" label="农场名称" />
      <el-table-column prop="ownerName" label="负责人" />
      <el-table-column prop="statusDesc" label="状态" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { farmApi } from '@/api/farm'

const farms = ref([])

const loadFarms = async () => {
  try {
    const result = await farmApi.getFarmPage({ page: 1, size: 10 })
    farms.value = result.data.records
  } catch (error) {
    console.error('加载农场列表失败:', error)
  }
}

onMounted(() => {
  loadFarms()
})
</script>
` 