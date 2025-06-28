import { get, post, del, upload } from '@/utils/request'

/**
 * 文件管理 API
 */

/**
 * 单文件上传
 * @param {File} file 文件对象
 * @param {string} module 模块名称（可选）
 * @param {boolean} strictValidation 是否严格验证文件类型（可选）
 * @returns {Promise} 上传结果
 */
export const uploadFile = (file, module = null, strictValidation = false) => {
  console.log('单文件上传:', { file: file.name, module, strictValidation })
  const formData = new FormData()
  formData.append('file', file)
  
  const params = {}
  if (module) params.module = module
  if (strictValidation) params.strictValidation = strictValidation
  
  return upload('/files/upload', formData, { params })
}

/**
 * 图片上传
 * @param {File} file 图片文件对象
 * @param {string} module 模块名称（可选）
 * @returns {Promise} 上传结果
 */
export const uploadImage = (file, module = null) => {
  console.log('图片上传:', { file: file.name, module })
  const formData = new FormData()
  formData.append('file', file)
  
  const params = {}
  if (module) params.module = module
  
  return upload('/files/upload/image', formData, { params })
}

/**
 * 多张图片上传
 * @param {Array<File>} files 图片文件列表
 * @param {string} module 模块名称（可选）
 * @returns {Promise} 上传结果
 */
export const uploadImages = (files, module = null) => {
  console.log('多张图片上传:', { count: files.length, module })
  const formData = new FormData()
  files.forEach(file => {
    formData.append('files', file)
  })
  
  const params = {}
  if (module) params.module = module
  
  return upload('/files/upload/images', formData, { params })
}

/**
 * 文档上传
 * @param {File} file 文档文件对象
 * @param {string} module 模块名称（可选）
 * @returns {Promise} 上传结果
 */
export const uploadDocument = (file, module = null) => {
  console.log('文档上传:', { file: file.name, module })
  const formData = new FormData()
  formData.append('file', file)
  
  const params = {}
  if (module) params.module = module
  
  return upload('/files/upload/document', formData, { params })
}

/**
 * 多文件上传
 * @param {Array<File>} files 文件列表
 * @param {string} module 模块名称（可选）
 * @param {boolean} strictValidation 是否严格验证文件类型（可选）
 * @returns {Promise} 上传结果
 */
export const uploadFiles = (files, module = null, strictValidation = false) => {
  console.log('多文件上传:', { count: files.length, module, strictValidation })
  const formData = new FormData()
  files.forEach(file => {
    formData.append('files', file)
  })
  
  const params = {}
  if (module) params.module = module
  if (strictValidation) params.strictValidation = strictValidation
  
  return upload('/files/upload/batch', formData, { params })
}

/**
 * 检测文件类型
 * @param {File} file 文件对象
 * @returns {Promise} 文件类型信息
 */
export const detectFileType = (file) => {
  console.log('检测文件类型:', file.name)
  const formData = new FormData()
  formData.append('file', file)
  
  return upload('/files/detect-type', formData)
}

/**
 * 获取支持的文件类型
 * @returns {Promise} 支持的文件类型列表
 */
export const getSupportedTypes = () => {
  console.log('获取支持的文件类型')
  return get('/files/supported-types')
}

/**
 * 获取文件信息
 * @param {string} fileUrl 文件URL
 * @returns {Promise} 文件信息
 */
export const getFileInfo = (fileUrl) => {
  console.log('获取文件信息:', fileUrl)
  return get('/files/info', { fileUrl })
}

/**
 * 检查文件是否存在
 * @param {string} fileUrl 文件URL
 * @returns {Promise<boolean>} 是否存在
 */
export const fileExists = (fileUrl) => {
  console.log('检查文件是否存在:', fileUrl)
  return get('/files/exists', { fileUrl })
}

/**
 * 获取下载URL
 * @param {string} fileUrl 文件URL
 * @param {number} expireInMinutes 过期时间（分钟），可选
 * @returns {Promise} 下载URL
 */
export const getDownloadUrl = (fileUrl, expireInMinutes = null) => {
  console.log('获取下载URL:', { fileUrl, expireInMinutes })
  const params = { fileUrl }
  if (expireInMinutes) {
    params.expireInMinutes = expireInMinutes
  }
  return get('/files/download-url', params)
}

/**
 * 删除文件
 * @param {string} fileUrl 文件URL
 * @returns {Promise<boolean>} 删除结果
 */
export const deleteFile = (fileUrl) => {
  console.log('删除文件:', fileUrl)
  return del('/files/delete', { fileUrl })
}

/**
 * 批量删除文件
 * @param {Array<string>} fileUrls 文件URL列表
 * @returns {Promise} 删除结果
 */
export const deleteFiles = (fileUrls) => {
  console.log('批量删除文件:', fileUrls)
  return del('/files/delete/batch', {}, { data: fileUrls })
} 