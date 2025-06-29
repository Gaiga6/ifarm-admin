import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as farmApi from '@/api/farm/farm.js'

export const useFarmStore = defineStore('farm', () => {
  // 状态定义
  const farmList = ref([])
  const currentFarm = ref(null)
  const userFarms = ref([])
  const loading = ref(false)
  const currentUserId = ref(2) // 当前用户ID，默认为2
  
  // 分页信息
  const pagination = ref({
    current: 1,
    size: 10,
    total: 0
  })
  
  // 搜索条件
  const searchParams = ref({
    farmName: '',
    farmCode: '',
    auditStatus: '',
    region: ''
  })
  
  // 农场状态枚举
  const FARM_STATUS = {
    PENDING: 'pending',
    APPROVED: 'approved', 
    REJECTED: 'rejected'
  }
  
  // 农场状态文本映射
  const statusTextMap = {
    [FARM_STATUS.PENDING]: '待审核',
    [FARM_STATUS.APPROVED]: '审核通过',
    [FARM_STATUS.REJECTED]: '审核拒绝'
  }
  
  // 农场状态类型映射
  const statusTypeMap = {
    [FARM_STATUS.PENDING]: 'warning',
    [FARM_STATUS.APPROVED]: 'success',
    [FARM_STATUS.REJECTED]: 'danger'
  }
  
  // 计算属性
  const approvedFarms = computed(() => 
    farmList.value.filter(farm => farm.auditStatus === FARM_STATUS.APPROVED)
  )
  
  const pendingFarms = computed(() => 
    farmList.value.filter(farm => farm.auditStatus === FARM_STATUS.PENDING)
  )
  
  const rejectedFarms = computed(() => 
    farmList.value.filter(farm => farm.auditStatus === FARM_STATUS.REJECTED)
  )
  
  const currentUserFarms = computed(() => 
    farmList.value.filter(farm => farm.ownerId === currentUserId.value)
  )
  
  // 获取农场列表
  const fetchFarmList = async (params = {}) => {
    try {
      loading.value = true
      const requestParams = {
        ...searchParams.value,
        ...params,
        page: pagination.value.current,
        size: pagination.value.size
      }
      
      const result = await farmApi.getFarmPage(requestParams)
      
      // 处理返回的数据，将status字段转换为auditStatus字段
      const processedRecords = (result.records || []).map(farm => {
        let auditStatus = FARM_STATUS.PENDING // 默认待审核
        if (farm.isVerified === 1) {
          auditStatus = FARM_STATUS.APPROVED // 已认证表示审核通过
        } else if (farm.isVerified === 0) {
          auditStatus = FARM_STATUS.REJECTED // 未认证可能表示审核拒绝
        }
        
        return {
          ...farm,
          auditStatus
        }
      })
      
      farmList.value = processedRecords
      pagination.value.total = result.total || 0
      
      return processedRecords
    } catch (error) {
      console.error('获取农场列表失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 获取用户的农场列表
  const fetchUserFarms = async (userId = currentUserId.value) => {
    try {
      loading.value = true
      const params = {
        ownerId: userId,
        page: 1,
        size: 100 // 获取用户所有农场
      }
      
      const result = await farmApi.getFarmPage(params)
      const processedRecords = (result.records || []).map(farm => {
        let auditStatus = FARM_STATUS.PENDING
        if (farm.isVerified === 1) {
          auditStatus = FARM_STATUS.APPROVED
        } else if (farm.isVerified === 0) {
          auditStatus = FARM_STATUS.REJECTED
        }
        
        return {
          ...farm,
          auditStatus
        }
      })
      
      userFarms.value = processedRecords
      return processedRecords
    } catch (error) {
      console.error('获取用户农场列表失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 获取农场详情
  const fetchFarmDetail = async (farmId) => {
    try {
      loading.value = true
      const result = await farmApi.getFarmById(farmId)
      
      // 处理状态字段
      let auditStatus = FARM_STATUS.PENDING
      if (result.isVerified === 1) {
        auditStatus = FARM_STATUS.APPROVED
      } else if (result.isVerified === 0) {
        auditStatus = FARM_STATUS.REJECTED
      }
      
      const processedFarm = {
        ...result,
        auditStatus
      }
      
      currentFarm.value = processedFarm
      return processedFarm
    } catch (error) {
      console.error('获取农场详情失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 创建农场
  const createFarm = async (farmData) => {
    try {
      loading.value = true
      const result = await farmApi.createFarm({
        ...farmData,
        ownerId: currentUserId.value
      })
      
      // 创建成功后刷新列表
      await fetchFarmList()
      await fetchUserFarms()
      
      return result
    } catch (error) {
      console.error('创建农场失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 更新农场
  const updateFarm = async (farmId, farmData) => {
    try {
      loading.value = true
      const result = await farmApi.updateFarm(farmId, farmData)
      
      // 更新成功后刷新列表
      await fetchFarmList()
      await fetchUserFarms()
      
      // 如果当前农场是被更新的农场，也更新当前农场信息
      if (currentFarm.value && currentFarm.value.id === farmId) {
        await fetchFarmDetail(farmId)
      }
      
      return result
    } catch (error) {
      console.error('更新农场失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 审核农场
  const auditFarm = async (farmId, status, remark = '') => {
    try {
      loading.value = true
      // 转换状态为API期望的格式
      let auditResult = '1' // 默认通过
      if (status === FARM_STATUS.REJECTED) {
        auditResult = '3' // 失败
      }
      
      const auditData = {
        id: farmId,
        auditResult,
        auditRemark: remark,
        auditUserId: currentUserId.value
      }
      
      const result = await farmApi.auditFarm(auditData)
      
      // 审核成功后刷新列表
      await fetchFarmList()
      
      return result
    } catch (error) {
      console.error('审核农场失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 批量审核农场
  const batchAuditFarms = async (farmIds, status, remark = '') => {
    try {
      loading.value = true
      
      // 转换状态为API期望的格式
      let auditResult = '1' // 默认通过
      if (status === FARM_STATUS.REJECTED) {
        auditResult = '3' // 失败
      }
      
      // 批量调用单个审核接口
      const promises = farmIds.map(farmId => {
        const auditData = {
          id: farmId,
          auditResult,
          auditRemark: remark,
          auditUserId: currentUserId.value
        }
        return farmApi.auditFarm(auditData)
      })
      
      const results = await Promise.all(promises)
      
      // 批量审核成功后刷新列表
      await fetchFarmList()
      
      return results
    } catch (error) {
      console.error('批量审核农场失败:', error)
      throw error
    } finally {
      loading.value = false
    }
  }
  
  // 设置当前用户ID
  const setCurrentUserId = (userId) => {
    currentUserId.value = userId
  }
  
  // 设置当前农场
  const setCurrentFarm = (farm) => {
    currentFarm.value = farm
  }
  
  // 更新搜索参数
  const updateSearchParams = (params) => {
    searchParams.value = { ...searchParams.value, ...params }
  }
  
  // 重置搜索参数
  const resetSearchParams = () => {
    searchParams.value = {
      farmName: '',
      farmCode: '',
      auditStatus: '',
      region: ''
    }
  }
  
  // 更新分页信息
  const updatePagination = (paginationData) => {
    pagination.value = { ...pagination.value, ...paginationData }
  }
  
  // 重置分页
  const resetPagination = () => {
    pagination.value = {
      current: 1,
      size: 10,
      total: 0
    }
  }
  
  // 获取状态文本
  const getStatusText = (status) => {
    return statusTextMap[status] || '未知状态'
  }
  
  // 获取状态类型
  const getStatusType = (status) => {
    return statusTypeMap[status] || 'info'
  }
  
  // 初始化农场状态管理（为用户ID为2的用户）
  const initializeFarmStore = async () => {
    try {
      console.log('🚀 初始化农场状态管理，当前用户ID:', currentUserId.value)
      
      // 1. 获取所有农场列表
      await fetchFarmList()
      console.log('✅ 农场列表加载完成，共', farmList.value.length, '个农场')
      
      // 2. 获取当前用户的农场
      await fetchUserFarms(currentUserId.value)
      console.log('✅ 用户农场加载完成，用户拥有', userFarms.value.length, '个农场')
      
      // 3. 如果用户有农场，设置第一个为当前农场
      if (userFarms.value.length > 0) {
        setCurrentFarm(userFarms.value[0])
        console.log('✅ 设置当前农场:', currentFarm.value.farmName)
      }
      
      console.log('🎉 农场状态管理初始化完成！')
      console.log('📊 统计信息:', {
        总农场数: farmList.value.length,
        用户农场数: userFarms.value.length,
        审核通过: approvedFarms.value.length,
        待审核: pendingFarms.value.length,
        审核拒绝: rejectedFarms.value.length
      })
      
      return {
        success: true,
        data: {
          totalFarms: farmList.value.length,
          userFarms: userFarms.value.length,
          approvedFarms: approvedFarms.value.length,
          pendingFarms: pendingFarms.value.length,
          rejectedFarms: rejectedFarms.value.length
        }
      }
    } catch (error) {
      console.error('❌ 农场状态管理初始化失败:', error)
      throw error
    }
  }
  
  return {
    // 状态
    farmList,
    currentFarm,
    userFarms,
    loading,
    currentUserId,
    pagination,
    searchParams,
    
    // 常量
    FARM_STATUS,
    
    // 计算属性
    approvedFarms,
    pendingFarms,
    rejectedFarms,
    currentUserFarms,
    
    // 方法
    fetchFarmList,
    fetchUserFarms,
    fetchFarmDetail,
    createFarm,
    updateFarm,
    auditFarm,
    batchAuditFarms,
    setCurrentUserId,
    setCurrentFarm,
    updateSearchParams,
    resetSearchParams,
    updatePagination,
    resetPagination,
    getStatusText,
    getStatusType,
    initializeFarmStore
  }
}, {
  persist: {
    key: 'farm-store',
    storage: localStorage,
    paths: ['currentUserId', 'searchParams', 'pagination']
  }
})