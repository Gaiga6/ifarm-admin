/**
 * 文件管理模块 API 统一导出
 */

// 文件管理 API
export * as filesApi from './files.js'

// 文件迁移管理 API
export * as migrationApi from './migration.js'

// 健康检查 API
export * as healthApi from './health.js'

// 默认导出（方便使用）
export { default as filesService } from './files.js'
export { default as migrationService } from './migration.js'
export { default as healthService } from './health.js' 