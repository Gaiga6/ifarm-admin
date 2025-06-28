# API 接口文档

本项目的API接口封装，基于axios实现，提供统一的请求响应处理。

## 目录结构

```
src/api/
├── farm/                # 农场管理模块
│   ├── farm.js         # 农场管理API
│   ├── plot.js         # 地块管理API
│   └── index.js        # 模块统一导出
├── examples/           # 使用示例
│   └── farm-usage.js   # 农场模块使用示例
├── index.js           # 所有API统一导出
└── README.md          # 本文档
```

## 快速开始

### 1. 基础配置

axios封装在 `src/utils/request.js` 中，包含以下功能：

- 请求/响应拦截器
- 统一错误处理
- Token自动添加
- 开发环境请求日志
- 超时设置（15秒）

### 2. 使用方式

#### 方式一：直接导入模块API

```javascript
import { farmApi, plotApi } from '@/api/farm'

// 使用农场API
const farms = await farmApi.getFarmPage({ page: 1, size: 10 })

// 使用地块API
const plots = await plotApi.getPlotsByFarmId(1)
```

#### 方式二：单独导入

```javascript
import * as farmApi from '@/api/farm/farm.js'
import * as plotApi from '@/api/farm/plot.js'
```

#### 方式三：通过主API对象

```javascript
import api from '@/api'

const farmModule = await api.farm()
const farms = await farmModule.farmApi.getFarmPage({ page: 1, size: 10 })
```

## 农场管理模块 API

### 农场管理 (farmApi)

| 方法 | 描述 | 参数 |
|------|------|------|
| `createFarm(data)` | 创建农场 | 农场数据对象 |
| `updateFarm(data)` | 更新农场 | 农场数据对象（包含id） |
| `getFarmById(id)` | 查询农场详情 | 农场ID |
| `deleteFarm(id)` | 删除农场 | 农场ID |
| `deleteFarms(ids)` | 批量删除农场 | 农场ID数组 |
| `getFarmPage(params)` | 分页查询农场 | 查询参数对象 |
| `getFarmsByOwnerId(ownerId)` | 根据负责人查询农场 | 负责人ID |
| `updateFarmStatus(id, status)` | 更新农场状态 | 农场ID, 状态值 |
| `auditFarm(data)` | 审核农场 | 审核数据对象 |
| `checkFarmCodeExists(code, excludeId)` | 检查编码是否存在 | 农场编码, 排除ID |
| `getFarmStats(ownerId)` | 获取统计信息 | 负责人ID（可选） |

### 地块管理 (plotApi)

| 方法 | 描述 | 参数 |
|------|------|------|
| `createPlot(data)` | 创建地块 | 地块数据对象 |
| `updatePlot(data)` | 更新地块 | 地块数据对象（包含id） |
| `getPlotById(id)` | 查询地块详情 | 地块ID |
| `deletePlot(id)` | 删除地块 | 地块ID |
| `deletePlots(ids)` | 批量删除地块 | 地块ID数组 |
| `getPlotPage(params)` | 分页查询地块 | 查询参数对象 |
| `getPlotsByFarmId(farmId)` | 根据农场查询地块 | 农场ID |
| `updatePlotStatus(id, status)` | 更新地块状态 | 地块ID, 状态值 |
| `checkPlotNameExists(farmId, name, excludeId)` | 检查名称是否存在 | 农场ID, 地块名称, 排除ID |

## 数据格式

### 农场数据 (Farm)

```javascript
{
  id: 1,                           // 农场ID（更新时必需）
  farmName: "绿色有机农场",          // 农场名称
  farmCode: "FARM001",             // 农场编码
  description: "农场描述",          // 农场描述
  province: "山东省",               // 省份
  city: "济南市",                   // 城市
  district: "历城区",               // 区县
  address: "港西路1234号",          // 详细地址
  longitude: 117.1,                // 经度
  latitude: 36.7,                  // 纬度
  totalArea: 50000,                // 总面积（平方米）
  contactPerson: "张三",            // 联系人
  contactPhone: "13800138000",     // 联系电话
  businessLicense: "BL123456789",  // 营业执照
  ownerId: 1,                      // 负责人用户ID
  imageUrls: [                     // 农场图片URL列表
    "https://example.com/farm1.jpg"
  ]
}
```

### 地块数据 (Plot)

```javascript
{
  id: 1,                           // 地块ID（更新时必需）
  farmId: 1,                       // 农场ID
  name: "A区01地块",                // 地块名称
  area: 2000,                      // 面积（平方米）
  location: "农场东南角",           // 位置描述
  soilType: "黑土",                // 土壤类型
  waterSource: "井水",             // 水源情况
  status: "available",             // 状态：available, in_use, unavailable
  imageUrls: [                     // 地块图片URL列表
    "https://example.com/plot1.jpg"
  ]
}
```

## 状态码说明

### 农场状态

- `0`: 禁用
- `1`: 启用
- `2`: 审核中
- `3`: 审核失败

### 地块状态

- `available`: 可用
- `in_use`: 使用中
- `unavailable`: 不可用

## 错误处理

所有API调用都会自动处理错误，包括：

- 网络错误
- HTTP状态码错误（400, 401, 403, 404, 500等）
- 业务逻辑错误（success=false）
- 超时错误

错误信息会自动通过Element Plus的Message组件显示。

## 环境配置

在项目根目录创建环境配置文件：

```bash
# .env（开发环境）
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_TITLE=iFarm 管理后台

# .env.production（生产环境）
VITE_API_BASE_URL=https://api.ifarm.com/api
VITE_APP_TITLE=iFarm 管理后台
```

## 开发调试

开发环境下，所有请求和响应都会在控制台打印日志，方便调试：

```
🚀 请求发送: { url: '/farm/page', method: 'get', params: {...} }
📡 响应接收: { url: '/farm/page', status: 200, data: {...} }
```

## 扩展说明

要添加新的API模块，请遵循以下步骤：

1. 在 `src/api/` 下创建新的模块目录
2. 创建具体的API文件，按功能拆分
3. 创建模块的 `index.js` 统一导出
4. 在 `src/api/index.js` 中添加新模块的导出
5. 参考 `examples/` 目录添加使用示例 