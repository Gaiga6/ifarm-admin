<template>
  <div class="page-container">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1 class="page-title">仪表盘</h1>
      <div class="page-actions">
        <el-button type="primary" :icon="Refresh" @click="refreshData">
          刷新数据
        </el-button>
      </div>
    </div>

    <!-- 统计数据卡片 -->
    <el-row :gutter="20" class="stats-row">
      <el-col :span="6">
        <div class="stats-card">
          <div class="stats-number">{{ statsData.farmCount }}</div>
          <div class="stats-label">农场总数</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stats-card">
          <div class="stats-number">{{ statsData.adoptionCount }}</div>
          <div class="stats-label">认养项目</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stats-card">
          <div class="stats-number">{{ statsData.orderCount }}</div>
          <div class="stats-label">总订单数</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="stats-card">
          <div class="stats-number">{{ statsData.userCount }}</div>
          <div class="stats-label">注册用户</div>
        </div>
      </el-col>
    </el-row>

    <!-- 快捷操作 -->
    <div class="content-card">
      <h3 style="margin-bottom: 20px;">快捷操作</h3>
      <el-row :gutter="16">
        <el-col :span="6" v-for="action in quickActions" :key="action.name">
          <el-card class="quick-action-card" @click="handleQuickAction(action.path)">
            <div class="quick-action-content">
              <el-icon size="32" :color="action.color">
                <component :is="getIcon(action.icon)" />
              </el-icon>
              <div class="action-info">
                <div class="action-title">{{ action.title }}</div>
                <div class="action-desc">{{ action.description }}</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 最近动态 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="content-card">
          <h3 style="margin-bottom: 20px;">最近订单</h3>
          <el-table :data="recentOrders" style="width: 100%">
            <el-table-column prop="orderNo" label="订单号" width="120" />
            <el-table-column prop="projectName" label="认养项目" />
            <el-table-column prop="amount" label="金额">
              <template #default="scope">
                <span style="color: var(--primary-dark)">¥{{ scope.row.amount }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="状态">
              <template #default="scope">
                <el-tag :type="getStatusType(scope.row.status)">
                  {{ scope.row.status }}
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="content-card">
          <h3 style="margin-bottom: 20px;">待审核项目</h3>
          <el-table :data="pendingProjects" style="width: 100%">
            <el-table-column prop="name" label="项目名称" />
            <el-table-column prop="farmName" label="农场" />
            <el-table-column prop="type" label="类型">
              <template #default="scope">
                <el-tag size="small">{{ scope.row.type }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template #default="scope">
                <el-button type="primary" size="small" @click="handleAudit(scope.row)">
                  审核
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getIcon } from '@/utils/icons'
import { Refresh } from '@element-plus/icons-vue'

const router = useRouter()

// 统计数据
const statsData = ref({
  farmCount: 25,
  adoptionCount: 86,
  orderCount: 342,
  userCount: 1268
})

// 快捷操作配置
const quickActions = ref([
  {
    name: 'createFarm',
    title: '创建农场',
    description: '添加新的农场信息',
    icon: 'House',
    color: 'var(--primary-color)',
    path: '/farm/create'
  },
  {
    name: 'createAdoption',
    title: '创建认养项目',
    description: '发布新的认养项目',
    icon: 'Present',
    color: 'var(--success-color)',
    path: '/adoption/create'
  },
  {
    name: 'orderManage',
    title: '订单管理',
    description: '查看和处理订单',
    icon: 'ShoppingBag',
    color: 'var(--info-color)',
    path: '/order/list'
  },
  {
    name: 'auditManage',
    title: '审核管理',
    description: '审核待处理项目',
    icon: 'CircleCheck',
    color: 'var(--warning-color)',
    path: '/system/audit'
  }
])

// 最近订单数据
const recentOrders = ref([
  {
    orderNo: 'ORD001',
    projectName: '生态蔬菜认养',
    amount: 299,
    status: '已支付'
  },
  {
    orderNo: 'ORD002',
    projectName: '有机水果认养',
    amount: 599,
    status: '待发货'
  },
  {
    orderNo: 'ORD003',
    projectName: '绿色稻米认养',
    amount: 799,
    status: '已完成'
  }
])

// 待审核项目数据
const pendingProjects = ref([
  {
    name: '春季蔬菜认养计划',
    farmName: '绿源农场',
    type: '农场自选'
  },
  {
    name: '夏季水果认养项目',
    farmName: '阳光农庄',
    type: '用户自选'
  },
  {
    name: '有机稻米认养',
    farmName: '田园农场',
    type: '农场自选'
  }
])

// 刷新数据
const refreshData = () => {
  // 这里可以调用API刷新数据
  console.log('刷新数据')
}

// 处理快捷操作
const handleQuickAction = (path) => {
  router.push(path)
}

// 获取状态类型
const getStatusType = (status) => {
  const statusMap = {
    '已支付': 'success',
    '待发货': 'warning',
    '已完成': 'info'
  }
  return statusMap[status] || 'info'
}

// 处理审核
const handleAudit = (project) => {
  // 跳转到审核页面
  router.push('/system/audit')
}

onMounted(() => {
  // 组件挂载时加载数据
  console.log('仪表盘页面加载完成')
})
</script>

<style scoped>
.stats-row {
  margin-bottom: 20px;
}

.quick-action-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid var(--border-light);
}

.quick-action-card:hover {
  border-color: var(--primary-color);
  box-shadow: var(--shadow-medium);
  transform: translateY(-2px);
}

.quick-action-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.action-info {
  flex: 1;
}

.action-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.action-desc {
  font-size: 12px;
  color: var(--text-secondary);
}

.page-actions {
  display: flex;
  gap: 12px;
}
</style> 