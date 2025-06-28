# 智慧农场认养平台API文档

## 项目概述

智慧农场认养平台是一个基于Spring Boot 3.2.0开发的现代化农业认养系统，为用户提供农场认养、作物管理、订单处理、物流跟踪、种植管理等全流程服务。

### 技术栈
- **后端框架**: Spring Boot 3.2.0
- **数据库**: MySQL 8.0 + Redis
- **ORM框架**: MyBatis-Plus 3.5.5
- **安全框架**: Spring Security
- **API文档**: Swagger/OpenAPI 3
- **工具库**: Lombok、Hutool

### 基础信息
- **Base URL**: `http://localhost:8080`
- **API版本**: v1.0
- **认证方式**: Bearer Token (JWT)

---

## 1. 系统管理模块

### 1.1 用户管理接口

#### 1.1.1 分页查询用户列表
- **接口**: `GET /api/system/users`
- **描述**: 分页查询用户列表，支持多条件筛选
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `username` (string): 用户名，可选
  - `phone` (string): 手机号，可选
  - `status` (string): 状态，可选
- **响应示例**:
```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "records": [
      {
        "id": 1,
        "username": "farmer001",
        "realName": "张三",
        "phone": "13800138000",
        "email": "farmer001@example.com",
        "status": 1,
        "statusDesc": "正常",
        "createTime": "2024-01-01 10:00:00"
      }
    ],
    "total": 100,
    "size": 10,
    "current": 1,
    "pages": 10
  }
}
```

#### 1.1.2 查询用户详情
- **接口**: `GET /api/system/users/{id}`
- **描述**: 根据用户ID查询用户详细信息
- **参数**:
  - `id` (long): 用户ID

#### 1.1.3 创建用户
- **接口**: `POST /api/system/users`
- **描述**: 创建新用户
- **请求体**:
```json
{
  "username": "farmer002",
  "password": "123456",
  "realName": "李四",
  "phone": "13800138001",
  "email": "farmer002@example.com"
}
```

#### 1.1.4 更新用户信息
- **接口**: `PUT /api/system/users/{id}`
- **描述**: 更新用户基本信息

#### 1.1.5 修改用户密码
- **接口**: `PUT /api/system/users/{id}/password`
- **描述**: 修改用户密码

### 1.2 角色管理接口

#### 1.2.1 分页查询角色列表
- **接口**: `GET /api/system/roles`
- **描述**: 分页查询角色列表

#### 1.2.2 创建角色
- **接口**: `POST /api/system/roles`
- **描述**: 创建新角色
- **请求体**:
```json
{
  "roleName": "农场管理员",
  "roleCode": "FARM_ADMIN",
  "description": "农场管理员角色"
}
```

#### 1.2.3 分配角色权限
- **接口**: `POST /api/system/roles/{roleId}/permissions`
- **描述**: 为角色分配权限
- **请求体**:
```json
{
  "permissionIds": [1, 2, 3, 4]
}
```

### 1.3 权限管理接口

#### 1.3.1 查询权限树
- **接口**: `GET /api/system/permissions/tree`
- **描述**: 查询权限树结构

#### 1.3.2 创建权限
- **接口**: `POST /api/system/permissions`
- **描述**: 创建新权限

### 1.4 用户地址管理

#### 1.4.1 查询用户地址列表
- **接口**: `GET /api/system/user-addresses`
- **描述**: 查询用户地址列表

#### 1.4.2 创建用户地址
- **接口**: `POST /api/system/user-addresses`
- **描述**: 创建新地址
- **请求体**:
```json
{
  "userId": 1,
  "contactName": "张三",
  "contactPhone": "13800138000",
  "provinceName": "北京市",
  "cityName": "北京市",
  "districtName": "朝阳区",
  "detailAddress": "三里屯街道1号",
  "isDefault": 1
}
```

### 1.5 系统配置管理

#### 1.5.1 查询系统配置列表
- **接口**: `GET /api/system/configs`
- **描述**: 分页查询系统配置

#### 1.5.2 创建系统配置
- **接口**: `POST /api/system/configs`
- **描述**: 创建系统配置
- **请求体**:
```json
{
  "configKey": "system.name",
  "configValue": "智慧农场认养平台",
  "description": "系统名称"
}
```

#### 1.5.3 根据键获取配置值
- **接口**: `GET /api/system/configs/key/{configKey}`
- **描述**: 根据配置键获取配置值

### 1.6 操作日志管理

#### 1.6.1 分页查询操作日志
- **接口**: `GET /api/system/operation-logs`
- **描述**: 分页查询操作日志

### 1.7 消息通知管理

#### 1.7.1 分页查询通知列表
- **接口**: `GET /api/system/notifications`
- **描述**: 分页查询通知列表

#### 1.7.2 创建通知
- **接口**: `POST /api/system/notifications`
- **描述**: 创建新通知
- **请求体**:
```json
{
  "userId": 1,
  "title": "收获通知",
  "content": "您的作物已可收获",
  "type": "harvest"
}
```

#### 1.7.3 标记通知为已读
- **接口**: `PUT /api/system/notifications/{id}/read`
- **描述**: 标记通知为已读

---

## 2. 农场管理模块

### 2.1 农场基础接口

#### 2.1.1 分页查询农场列表
- **接口**: `GET /api/farms`
- **描述**: 分页查询农场列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `farmName` (string): 农场名称，可选
  - `status` (string): 状态，可选
- **响应示例**:
```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "records": [
      {
        "id": 1,
        "farmName": "绿野农场",
        "farmCode": "FARM001",
        "description": "专业有机蔬菜种植基地",
        "address": "北京市昌平区绿野路1号",
        "totalArea": 50000.00,
        "status": 1,
        "statusDesc": "正常运营",
        "contactPerson": "张三",
        "contactPhone": "13800138000",
        "createTime": "2024-01-01 10:00:00"
      }
    ],
    "total": 50,
    "size": 10,
    "current": 1,
    "pages": 5
  }
}
```

#### 2.1.2 创建农场
- **接口**: `POST /api/farms`
- **描述**: 创建新农场
- **请求体**:
```json
{
  "farmName": "绿野农场",
  "farmCode": "FARM001",
  "description": "专业有机蔬菜种植基地",
  "province": "北京市",
  "city": "北京市",
  "district": "昌平区",
  "address": "绿野路1号",
  "totalArea": 50000.00,
  "contactPerson": "张三",
  "contactPhone": "13800138000",
  "ownerId": 1
}
```

#### 2.1.3 农场审核
- **接口**: `PUT /api/farms/{id}/audit`
- **描述**: 审核农场
- **请求体**:
```json
{
  "status": 1,
  "auditRemark": "审核通过"
}
```

### 2.2 地块管理接口

#### 2.2.1 分页查询地块列表
- **接口**: `GET /api/plots`
- **描述**: 分页查询地块列表

#### 2.2.2 创建地块
- **接口**: `POST /api/plots`
- **描述**: 创建新地块
- **请求体**:
```json
{
  "farmId": 1,
  "name": "A区1号地块",
  "area": 1000.00,
  "location": "农场东南角",
  "soilType": "沙质土",
  "waterSource": "井水灌溉"
}
```

---

## 3. 产品管理模块

### 3.1 农产品分类管理

#### 3.1.1 查询分类树
- **接口**: `GET /api/product/crop-categories/tree`
- **描述**: 查询农产品分类树

#### 3.1.2 创建分类
- **接口**: `POST /api/product/crop-categories`
- **描述**: 创建农产品分类
- **请求体**:
```json
{
  "name": "叶菜类",
  "parentId": null,
  "sort": 1
}
```

### 3.2 农产品管理

#### 3.2.1 分页查询农产品列表
- **接口**: `GET /api/product/crops`
- **描述**: 分页查询农产品列表

#### 3.2.2 创建农产品
- **接口**: `POST /api/product/crops`
- **描述**: 创建新农产品
- **请求体**:
```json
{
  "name": "白菜",
  "categoryId": 1,
  "description": "优质大白菜",
  "growthPeriod": 60,
  "plantingSeason": "春秋两季",
  "cultivationMethod": "直播种植"
}
```

### 3.3 农场农产品关联管理

#### 3.3.1 查询农场可种植农产品
- **接口**: `GET /api/product/farm-crops`
- **描述**: 查询农场可种植的农产品列表

#### 3.3.2 添加农场农产品关联
- **接口**: `POST /api/product/farm-crops`
- **描述**: 为农场添加可种植农产品

---

## 4. 认养项目管理模块

### 4.1 认养项目接口

#### 4.1.1 分页查询认养项目列表
- **接口**: `GET /api/adoption-projects`
- **描述**: 分页查询认养项目列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `farmId` (long): 农场ID，可选
  - `status` (string): 状态，可选

#### 4.1.2 创建认养项目
- **接口**: `POST /api/adoption-projects`
- **描述**: 创建新的认养项目
- **请求体**:
```json
{
  "farmId": 1,
  "name": "春季蔬菜认养",
  "description": "春季时令蔬菜认养体验",
  "type": "farm",
  "plotId": 1,
  "unitCount": 100,
  "unitArea": 10.00,
  "adoptionPrice": 200.00,
  "startTime": "2024-03-01",
  "endTime": "2024-06-30"
}
```

#### 4.1.3 项目审核
- **接口**: `PUT /api/adoption-projects/{id}/audit`
- **描述**: 审核认养项目
- **请求体**:
```json
{
  "status": "published",
  "auditRemark": "审核通过"
}
```

### 4.2 认养套餐管理

#### 4.2.1 查询项目套餐列表
- **接口**: `GET /api/adoption-packages`
- **描述**: 查询认养套餐列表

#### 4.2.2 创建认养套餐
- **接口**: `POST /api/adoption-packages`
- **描述**: 创建认养套餐
- **请求体**:
```json
{
  "projectId": 1,
  "name": "基础套餐",
  "unitCount": 1,
  "seasonCount": 1,
  "price": 200.00,
  "originalPrice": 250.00,
  "harvestCount": 3
}
```

---

## 5. 订单管理模块

### 5.1 订单接口

#### 5.1.1 分页查询订单列表
- **接口**: `GET /api/orders`
- **描述**: 分页查询订单列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `userId` (long): 用户ID，可选
  - `status` (string): 订单状态，可选

#### 5.1.2 创建订单
- **接口**: `POST /api/orders`
- **描述**: 创建新订单
- **请求体**:
```json
{
  "userId": 1,
  "projectId": 1,
  "packageId": 1,
  "amount": 200.00,
  "addressId": 1,
  "remark": "尽快发货"
}
```

#### 5.1.3 订单支付
- **接口**: `PUT /api/orders/{id}/pay`
- **描述**: 订单支付
- **请求体**:
```json
{
  "paymentMethod": "alipay",
  "paymentAmount": 200.00
}
```

#### 5.1.4 取消订单
- **接口**: `PUT /api/orders/{id}/cancel`
- **描述**: 取消订单

---

## 6. 种植管理模块

### 6.1 认养记录管理

#### 6.1.1 分页查询认养记录列表
- **接口**: `GET /api/planting/adoption-records`
- **描述**: 分页查询认养记录列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `orderId` (long): 订单ID，可选
  - `status` (string): 状态，可选
- **响应示例**:
```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "records": [
      {
        "id": 1,
        "orderId": 1,
        "startTime": "2024-03-01",
        "endTime": "2024-06-30",
        "status": "planting",
        "statusDesc": "种植中",
        "createTime": "2024-03-01 10:00:00"
      }
    ],
    "total": 20,
    "size": 10,
    "current": 1,
    "pages": 2
  }
}
```

#### 6.1.2 创建认养记录
- **接口**: `POST /api/planting/adoption-records`
- **描述**: 创建认养记录
- **请求体**:
```json
{
  "orderId": 1,
  "startTime": "2024-03-01",
  "endTime": "2024-06-30",
  "status": "planting"
}
```

#### 6.1.3 更新认养记录状态
- **接口**: `PUT /api/planting/adoption-records/{id}/status`
- **描述**: 更新认养记录状态
- **参数**:
  - `status` (string): 新状态（planting/growing/harvest_ready/completed/cancelled）

#### 6.1.4 根据订单ID查询认养记录
- **接口**: `GET /api/planting/adoption-records/order/{orderId}`
- **描述**: 根据订单ID查询认养记录

### 6.2 种植单元管理

#### 6.2.1 分页查询种植单元列表
- **接口**: `GET /api/planting/units`
- **描述**: 分页查询种植单元列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `adoptionId` (long): 认养记录ID，可选
  - `cropId` (long): 农产品ID，可选
  - `status` (string): 状态，可选

#### 6.2.2 创建种植单元
- **接口**: `POST /api/planting/units`
- **描述**: 创建种植单元
- **请求体**:
```json
{
  "adoptionId": 1,
  "unitNo": "UNIT001",
  "cropId": 1,
  "status": "planting"
}
```

#### 6.2.3 更新种植单元状态
- **接口**: `PUT /api/planting/units/{id}/status`
- **描述**: 更新种植单元状态
- **参数**:
  - `status` (string): 新状态（planting/growing/mature/harvested）

#### 6.2.4 根据认养记录ID查询种植单元
- **接口**: `GET /api/planting/units/adoption/{adoptionId}`
- **描述**: 根据认养记录ID查询种植单元列表

### 6.3 种植记录管理

#### 6.3.1 分页查询种植记录列表
- **接口**: `GET /api/planting/records`
- **描述**: 分页查询种植记录列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `unitId` (long): 种植单元ID，可选
  - `creatorId` (long): 创建者ID，可选

#### 6.3.2 创建种植记录
- **接口**: `POST /api/planting/records`
- **描述**: 创建种植记录
- **请求体**:
```json
{
  "unitId": 1,
  "recordTime": "2024-03-15",
  "content": "今日浇水施肥，长势良好",
  "imageList": [
    "http://example.com/image1.jpg",
    "http://example.com/image2.jpg"
  ]
}
```
- **参数**:
  - `creatorId` (long): 创建者ID

#### 6.3.3 更新种植记录
- **接口**: `PUT /api/planting/records/{id}`
- **描述**: 更新种植记录

#### 6.3.4 根据种植单元ID查询种植记录
- **接口**: `GET /api/planting/records/unit/{unitId}`
- **描述**: 根据种植单元ID查询种植记录列表

---

## 7. 物流管理模块

### 7.1 收获记录管理

#### 7.1.1 分页查询收获记录列表
- **接口**: `GET /api/logistics/harvest-records`
- **描述**: 分页查询收获记录列表
- **参数**:
  - `page` (int): 页码，默认1
  - `size` (int): 每页大小，默认10
  - `adoptionId` (long): 认养记录ID，可选
  - `status` (string): 状态，可选

#### 7.1.2 创建收获记录
- **接口**: `POST /api/logistics/harvest-records`
- **描述**: 创建收获记录
- **请求体**:
```json
{
  "adoptionId": 1,
  "harvestTime": "2024-06-15",
  "packageType": "保鲜盒装",
  "status": "pending_confirmation"
}
```

#### 7.1.3 更新收获记录状态
- **接口**: `PUT /api/logistics/harvest-records/{id}/status`
- **描述**: 更新收获记录状态
- **参数**:
  - `status` (string): 新状态（pending_confirmation/confirmed/shipped/completed）

#### 7.1.4 关联物流信息
- **接口**: `PUT /api/logistics/harvest-records/{id}/logistics`
- **描述**: 为收获记录关联物流信息
- **参数**:
  - `logisticsId` (long): 物流ID

### 7.2 物流管理

#### 7.2.1 分页查询物流列表
- **接口**: `GET /api/logistics`
- **描述**: 分页查询物流列表

#### 7.2.2 创建物流记录
- **接口**: `POST /api/logistics`
- **描述**: 创建物流记录
- **请求体**:
```json
{
  "logisticsNo": "SF1234567890",
  "company": "顺丰快递",
  "recipientName": "张三",
  "recipientPhone": "13800138000",
  "recipientAddress": "北京市朝阳区三里屯街道1号"
}
```

#### 7.2.3 更新物流状态
- **接口**: `PUT /api/logistics/{id}/status`
- **描述**: 更新物流状态
- **参数**:
  - `status` (string): 新状态（pending/shipping/delivered）

### 7.3 物流跟踪管理

#### 7.3.1 查询物流跟踪记录
- **接口**: `GET /api/logistics/tracking`
- **描述**: 分页查询物流跟踪记录

#### 7.3.2 添加跟踪记录
- **接口**: `POST /api/logistics/tracking`
- **描述**: 添加物流跟踪记录
- **请求体**:
```json
{
  "logisticsId": 1,
  "trackingTime": "2024-06-16 10:00:00",
  "location": "北京分拣中心",
  "description": "快件已到达北京分拣中心"
}
```

#### 7.3.3 根据物流ID查询跟踪记录
- **接口**: `GET /api/logistics/tracking/logistics/{logisticsId}`
- **描述**: 根据物流ID查询跟踪记录列表

---

## 8. 通用响应格式

### 8.1 成功响应
```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    // 具体数据内容
  }
}
```

### 8.2 分页响应
```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "records": [],
    "total": 100,
    "size": 10,
    "current": 1,
    "pages": 10
  }
}
```

### 8.3 错误响应
```json
{
  "code": 400,
  "message": "参数错误",
  "data": null
}
```

---

## 9. 认证授权

### 9.1 用户登录
- **接口**: `POST /api/auth/login`
- **描述**: 用户登录获取访问令牌
- **请求体**:
```json
{
  "username": "admin",
  "password": "123456"
}
```
- **响应示例**:
```json
{
  "code": 200,
  "message": "登录成功",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": 1,
      "username": "admin",
      "realName": "管理员",
      "roles": ["管理员"]
    }
  }
}
```

### 9.2 退出登录
- **接口**: `POST /api/auth/logout`
- **描述**: 用户退出登录

### 9.3 刷新Token
- **接口**: `POST /api/auth/refresh`
- **描述**: 刷新访问令牌

### 9.4 请求头格式
```
Authorization: Bearer {token}
Content-Type: application/json
```

---

## 10. 错误码对照表

| 错误码 | 错误信息 | 描述 |
|--------|----------|------|
| 200 | 操作成功 | 请求处理成功 |
| 400 | 参数错误 | 请求参数不正确 |
| 401 | 未授权 | 用户未登录或token无效 |
| 403 | 权限不足 | 用户无权限访问该资源 |
| 404 | 资源不存在 | 请求的资源不存在 |
| 500 | 服务器内部错误 | 服务器处理异常 |
| 1001 | 用户名或密码错误 | 登录验证失败 |
| 1002 | 用户已存在 | 注册时用户名已被使用 |
| 1003 | 用户不存在 | 指定的用户不存在 |
| 2001 | 农场不存在 | 指定的农场不存在 |
| 2002 | 地块不可用 | 地块已被占用或不可用 |
| 3001 | 作物不存在 | 指定的作物不存在 |
| 4001 | 认养项目不存在 | 指定的认养项目不存在 |
| 4002 | 项目已结束 | 认养项目已结束，无法操作 |
| 5001 | 订单不存在 | 指定的订单不存在 |
| 5002 | 订单状态错误 | 订单当前状态不允许该操作 |
| 6001 | 物流信息不存在 | 指定的物流信息不存在 |
| 7001 | 认养记录不存在 | 指定的认养记录不存在 |
| 7002 | 种植单元不存在 | 指定的种植单元不存在 |
| 7003 | 种植记录不存在 | 指定的种植记录不存在 |

---

## 11. 开发环境配置

### 11.1 环境要求
- JDK 17+
- MySQL 8.0+
- Redis 6.0+
- Maven 3.8+

### 11.2 配置文件
```yaml
# application.yml
server:
  port: 8080

spring:
  datasource:
    url: jdbc:mysql://localhost:3306/ifarm?useUnicode=true&characterEncoding=utf8&serverTimezone=Asia/Shanghai
    username: root
    password: password
  
  redis:
    host: localhost
    port: 6379
    password: 
    database: 0

mybatis-plus:
  configuration:
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

### 11.3 数据库初始化
执行以下SQL文件顺序：
1. `00_create_database.sql` - 创建数据库
2. `01_user_management.sql` - 用户管理表
3. `02_farm_management.sql` - 农场管理表
4. `03_product_management.sql` - 产品管理表
5. `04_adoption_project.sql` - 认养项目表
6. `05_order_management.sql` - 订单管理表
7. `06_planting_management.sql` - 种植管理表
8. `07_logistics_management.sql` - 物流管理表
9. `08_system_management.sql` - 系统管理表
10. `09_init_permission_data.sql` - 初始化权限数据

---

## 12. 接口测试示例

### 12.1 Postman测试集合
可以导入以下Postman测试集合进行接口测试：

```json
{
  "info": {
    "name": "智慧农场认养平台API",
    "description": "完整的API测试集合"
  },
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{token}}",
        "type": "string"
      }
    ]
  },
  "variable": [
    {
      "key": "baseUrl",
      "value": "http://localhost:8080"
    },
    {
      "key": "token",
      "value": ""
    }
  ]
}
```

### 12.2 cURL示例

#### 登录获取Token
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "123456"
  }'
```

#### 查询用户列表
```bash
curl -X GET "http://localhost:8080/api/system/users?page=1&size=10" \
  -H "Authorization: Bearer {token}"
```

#### 创建认养项目
```bash
curl -X POST http://localhost:8080/api/adoption-projects \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "farmId": 1,
    "name": "春季蔬菜认养",
    "description": "春季时令蔬菜认养体验",
    "type": "farm",
    "plotId": 1,
    "unitCount": 100,
    "unitArea": 10.00,
    "adoptionPrice": 200.00,
    "startTime": "2024-03-01",
    "endTime": "2024-06-30"
  }'
```

#### 创建种植记录
```bash
curl -X POST "http://localhost:8080/api/planting/records?creatorId=1" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "unitId": 1,
    "recordTime": "2024-03-15",
    "content": "今日浇水施肥，长势良好",
    "imageList": [
      "http://example.com/image1.jpg",
      "http://example.com/image2.jpg"
    ]
  }'
```

---

## 13. 业务流程说明

### 13.1 认养流程
1. 用户浏览认养项目列表
2. 选择心仪的项目和套餐
3. 创建订单并支付
4. 系统自动创建认养记录
5. 农场分配种植单元
6. 开始种植并记录生长过程
7. 收获时创建收获记录
8. 安排物流发货
9. 用户收到农产品

### 13.2 状态流转
- **认养记录**: 种植中 → 生长中 → 待收获 → 已完成 → 已取消
- **种植单元**: 种植中 → 生长中 → 成熟 → 已收获
- **收获记录**: 待用户确认 → 已确认 → 已发货 → 已完成
- **物流状态**: 待发货 → 运输中 → 已送达

---

## 14. 注意事项

### 14.1 安全考虑
- 所有API都需要进行身份验证
- 敏感操作需要相应权限
- 输入参数需要进行验证和过滤
- 使用HTTPS传输敏感数据

### 14.2 性能优化
- 使用Redis缓存热点数据
- 数据库查询添加适当索引
- 大数据量查询使用分页
- 异步处理耗时操作

### 14.3 监控和日志
- 所有操作都会记录操作日志
- 关键业务操作发送通知
- 定期清理过期数据
- 监控系统性能指标

---

*本文档最后更新时间：2024年1月1日*
*API版本：v1.0*
*文档版本：2.0.0* 