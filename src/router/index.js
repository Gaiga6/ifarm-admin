import { createRouter, createWebHistory } from 'vue-router'

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


// 用户模块
// 导入用户个人中心模块
import UserProfile from '@/views/user/profile.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 