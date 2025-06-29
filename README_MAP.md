# 地图功能配置说明

## 概述

本项目集成了高德地图API，提供地图选点、地址搜索、当前位置获取等功能。在使用地图功能前，需要先配置高德地图API密钥。

## 配置步骤

### 1. 申请高德地图API密钥

1. 访问 [高德开放平台](https://console.amap.com/dev/key/app)
2. 注册并登录账号
3. 创建新应用
4. 添加Key，选择「Web端(JS API)」
5. 复制生成的API Key

### 2. 配置API密钥

打开 `src/config/map.js` 文件，将 `YOUR_AMAP_API_KEY` 替换为您申请的实际API密钥：

```javascript
export const mapConfig = {
  // 替换为您的实际密钥
  amapKey: 'your_actual_api_key_here',
  // ... 其他配置
}
```

### 3. 配置域名白名单（可选）

在高德控制台中，为您的API Key配置域名白名单：
- 开发环境：`localhost`、`127.0.0.1`
- 生产环境：您的实际域名

## 功能说明

### 地图选点组件 (MapSelector)

**功能特性：**
- 🗺️ 交互式地图选点
- 🔍 地址搜索功能
- 📍 当前位置获取
- 🎯 精确经纬度显示
- 📱 响应式设计

**使用方法：**

```vue
<template>
  <MapSelector
    v-model="showMap"
    :initial-location="{
      longitude: 116.397428,
      latitude: 39.90923,
      address: '北京市东城区'
    }"
    @confirm="handleLocationConfirm"
  />
</template>

<script setup>
import MapSelector from '@/components/MapSelector.vue'

const showMap = ref(false)

const handleLocationConfirm = (location) => {
  console.log('选中位置:', location)
  // location 包含: { longitude, latitude, address }
}
</script>
```

### 农场创建表单集成

在农场创建表单中，地图功能已完全集成：

1. **智能编码生成**：基于省份代码自动生成农场编码
2. **位置信息获取**：
   - 点击「获取当前位置」按钮获取GPS定位
   - 点击「地图选点」按钮打开地图选择器
3. **自动填充**：选择位置后自动填充经纬度和地址信息

## 配置选项

在 `src/config/map.js` 中可以自定义以下配置：

```javascript
export const mapConfig = {
  // API密钥
  amapKey: 'YOUR_AMAP_API_KEY',
  
  // 默认中心点（北京天安门）
  defaultCenter: {
    longitude: 116.397428,
    latitude: 39.90923
  },
  
  // 地图样式
  mapStyle: 'amap://styles/normal', // 可选: normal, dark, light 等
  
  // 默认缩放级别
  defaultZoom: 15,
  
  // 搜索半径（米）
  searchRadius: 1000,
  
  // GPS定位配置
  geolocationOptions: {
    enableHighAccuracy: true, // 高精度定位
    timeout: 10000,          // 超时时间
    maximumAge: 60000        // 缓存时间
  }
}
```

## 常见问题

### Q: 地图无法加载
**A:** 请检查：
1. API密钥是否正确配置
2. 网络连接是否正常
3. 域名是否在白名单中
4. 浏览器控制台是否有错误信息

### Q: 定位功能不可用
**A:** 请检查：
1. 浏览器是否支持地理位置API
2. 是否允许了位置权限
3. 是否使用HTTPS协议（生产环境必需）

### Q: 搜索功能无结果
**A:** 请检查：
1. 搜索关键词是否正确
2. API密钥是否有搜索权限
3. 网络连接是否正常

## 技术支持

如遇到问题，请参考：
- [高德地图JS API文档](https://lbs.amap.com/api/jsapi-v2/summary)
- [高德开放平台FAQ](https://lbs.amap.com/faq)

## 更新日志

### v1.0.0 (2024-01-XX)
- ✅ 集成高德地图API
- ✅ 实现地图选点功能
- ✅ 支持地址搜索
- ✅ 支持当前位置获取
- ✅ 响应式设计适配
- ✅ 农场创建表单集成