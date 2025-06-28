import { createRouter, createWebHistory } from 'vue-router'

// 导入布局组件
import Layout from '@/layout/index.vue'

// 导入页面组件
import Dashboard from '@/views/Dashboard/index.vue'
import Farm from '@/views/Farm/index.vue'
import Plot from '@/views/Plot/index.vue'
import Adoption from '@/views/Adoption/index.vue'
import Product from '@/views/Product/index.vue'
import Order from '@/views/Order/index.vue'
import User from '@/views/User/index.vue'
import System from '@/views/System/index.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
          title: '仪表盘',
          icon: 'Odometer'
        }
      }
    ]
  },
  {
    path: '/farm',
    component: Layout,
    redirect: '/farm/list',
    meta: {
      title: '农场管理',
      icon: 'House'
    },
    children: [
      {
        path: 'list',
        name: 'FarmList',
        component: Farm,
        meta: {
          title: '农场列表',
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/plot',
    component: Layout,
    redirect: '/plot/list',
    meta: {
      title: '地块管理',
      icon: 'MapLocation'
    },
    children: [
      {
        path: 'list',
        name: 'PlotList',
        component: Plot,
        meta: {
          title: '地块列表',
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/adoption',
    component: Layout,
    redirect: '/adoption/list',
    meta: {
      title: '认养项目',
      icon: 'Present'
    },
    children: [
      {
        path: 'list',
        name: 'AdoptionList',
        component: Adoption,
        meta: {
          title: '认养项目列表',
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    redirect: '/product/category',
    meta: {
      title: '农产品管理',
      icon: 'Apple'
    },
    children: [
      {
        path: 'category',
        name: 'ProductCategory',
        component: Product,
        meta: {
          title: '农产品分类',
          icon: 'Menu'
        }
      },
      {
        path: 'list',
        name: 'ProductList',
        component: Product,
        meta: {
          title: '农产品列表',
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/list',
    meta: {
      title: '订单管理',
      icon: 'ShoppingBag'
    },
    children: [
      {
        path: 'list',
        name: 'OrderList',
        component: Order,
        meta: {
          title: '订单列表',
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user/list',
    meta: {
      title: '用户管理',
      icon: 'User'
    },
    children: [
      {
        path: 'list',
        name: 'UserList',
        component: User,
        meta: {
          title: '用户列表',
          icon: 'List'
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/audit',
    meta: {
      title: '系统管理',
      icon: 'Setting'
    },
    children: [
      {
        path: 'audit',
        name: 'SystemAudit',
        component: System,
        meta: {
          title: '审核管理',
          icon: 'CircleCheck'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 