/**
 * API 统一导出
 */

// 用户管理模块
export * as user from './user/index.js'

// 农场管理模块
export * as farm from './farm/index.js'

// 文件管理模块
export * as files from './files/index.js'

// 认养项目管理模块
export * as adoption from './adoption/index.js'

// 物流管理模块
export * as logistics from './logistics/index.js'

// 订单管理模块
export * as order from './order/index.js'

// 种植管理模块
export * as planting from './planting/index.js'

// 农产品管理模块
export * as product from './product/index.js'

// 认证模块


// 创建主API对象，方便使用
const api = {
  user: () => import('./user/index.js'),
  farm: () => import('./farm/index.js'),
  files: () => import('./files/index.js'),
  adoption: () => import('./adoption/index.js'),
  logistics: () => import('./logistics/index.js'),
  order: () => import('./order/index.js'),
  planting: () => import('./planting/index.js'),
  product: () => import('./product/index.js'),

}

export default api