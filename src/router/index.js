import { createRouter, createWebHistory } from 'vue-router'
import { markRaw } from 'vue'
import {
  House,
  User,
  Lock,
  UserFilled,
  Grid,
  DataAnalysis,
  Plus
} from '@element-plus/icons-vue'

// 导入布局组件
import Layout from '@/layout/index.vue'


// 导入页面组件
import Dashboard from '@/views/dashboard/index.vue'

// 导入设置页面组件
import Settings from '@/views/settings/index.vue'

// 导入用户管理页面组件
import SystemUser from '@/views/system/user/list.vue'

// 导入角色管理页面组件
import SystemRole from '@/views/system/role/list.vue'

// 导入权限管理页面组件
import SystemPermission from '@/views/system/permission/list.vue'

// 导入农场模块页面组件
import FarmAdminList from '@/views/farm/admin/list.vue'
import FarmManageInfo from '@/views/farm/manage/info.vue'
import FarmManagePlot from '@/views/farm/manage/plot.vue'
import FarmManageCreate from '@/views/farm/manage/create.vue'
import FarmStatus from '@/views/farm/status/index.vue'


// 用户模块
// 导入用户个人中心模块
import UserProfile from '@/views/user/profile.vue'

const routes = [

  // 错误页面路由
  {
    path: '/403',
    name: 'Forbidden',
    component: () => import('@/views/error/403.vue'),
    meta: {
      title: '访问被拒绝',
      requiresAuth: false,
      hideInMenu: true
    }
  },
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
        component: UserProfile,
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
    path: '/system',
    component: Layout,
    redirect: '/system/user',
    meta: {
      title: '系统管理',
      icon: 'Tools'
    },
    children: [
      {
        path: 'user',
        name: 'SystemUser',
        component: SystemUser,
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
  },

  // 农场管理模块
  {
    path: '/farm',
    component: Layout,
    redirect: '/farm/admin/list',
    meta: {
      title: '农场管理',
      icon: 'House'
    },
    children: [
      {
        path: 'admin/list',
        name: 'FarmAdminList',
        component: FarmAdminList,
        meta: {
          title: '农场审核',
          icon: 'DocumentChecked',
          roles: ['admin'] // 仅管理员可访问
        }
      },
      {
        path: 'manage/info',
        name: 'FarmManageInfo',
        component: FarmManageInfo,
        meta: {
          title: '农场信息',
          icon: 'OfficeBuilding',
          roles: ['farm_admin'] // 仅农场管理员可访问
        }
      },
      {
        path: 'manage/plot',
        name: 'FarmManagePlot',
        component: FarmManagePlot,
        meta: {
          title: '地块管理',
          icon: 'Grid',
          roles: ['farm_admin'] // 仅农场管理员可访问
        }
      },
      {
        path: 'manage/create',
        name: 'FarmManageCreate',
        component: FarmManageCreate,
        meta: {
          title: '创建管理',
          icon: markRaw(Plus),
          roles: ['admin', 'farm_admin']
        }
      },
      {
        path: 'status',
        name: 'FarmStatus',
        component: FarmStatus,
        meta: {
          title: '状态管理',
          icon: 'DataAnalysis',
          roles: ['admin', 'farm_admin'] // 管理员和农场管理员可访问
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
router.beforeEach(async (to, from, next) => {
  // 设置页面标题
  if (to.meta?.title) {
    document.title = `${to.meta.title} - 智慧农场认养平台`
  } else {
    document.title = '智慧农场认养平台'
  }
  
  // 直接允许访问所有页面
  next()
})

// 路由错误处理
router.onError((error) => {
  console.error('路由错误:', error)
})

export default router