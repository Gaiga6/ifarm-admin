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
import SystemRole from '@/views/System/Role.vue'
import SystemPermission from '@/views/System/Permission.vue'
import Profile from '@/views/Profile/index.vue'
import Settings from '@/views/Settings/index.vue'

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
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile,
        meta: {
          title: '个人中心',
          icon: 'User',
          hidden: true // 隐藏在侧边栏菜单中
        }
      },
      {
        path: 'settings',
        name: 'Settings',
        component: Settings,
        meta: {
          title: '账户设置',
          icon: 'Setting',
          hidden: true // 隐藏在侧边栏菜单中
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
      },
      {
        path: 'plot',
        name: 'PlotManage',
        component: Plot,
        meta: {
          title: '地块管理',
          icon: 'Grid'
        }
      }
    ]
  },

  {
    path: '/adoption',
    component: Layout,
    redirect: '/adoption/list',
    meta: {
      title: '认养管理',
      icon: 'Heart'
    },
    children: [
      {
        path: 'list',
        name: 'AdoptionList',
        component: Adoption,
        meta: {
          title: '认养项目',
          icon: 'List'
        }
      },
      {
        path: 'product',
        name: 'ProductManage',
        component: Product,
        meta: {
          title: '农产品管理',
          icon: 'GoodsFilled'
        }
      },
      {
        path: 'order',
        name: 'OrderManage',
        component: Order,
        meta: {
          title: '订单管理',
          icon: 'Document'
        }
      }
    ]
  },

  {
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'Setting'
    },
    children: [
      {
        path: 'user',
        name: 'SystemUser',
        component: User,
        meta: {
          title: '用户管理',
          icon: 'User'
        }
      },
      {
        path: 'role',
        name: 'SystemRole',
        component: SystemRole,
        meta: {
          title: '角色管理',
          icon: 'Avatar'
        }
      },
      {
        path: 'permission',
        name: 'SystemPermission',
        component: SystemPermission,
        meta: {
          title: '权限管理',
          icon: 'Key'
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