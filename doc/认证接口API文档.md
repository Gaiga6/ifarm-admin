# 智慧农场认养平台 - 认证接口API文档

## 基本信息

- **Base URL**: `http://localhost:8080/api`
- **API版本**: v1.0
- **认证方式**: Bearer Token (JWT)
- **内容类型**: application/json

## 1. 登录接口

### 1.1 用户登录

- **接口**: `POST /auth/login`
- **描述**: 通过用户名和密码登录系统，获取访问令牌和刷新令牌
- **请求参数**:

| 参数名     | 类型    | 必填 | 描述                          |
|------------|---------|------|-------------------------------|
| username   | string  | 是   | 用户名                        |
| password   | string  | 是   | 密码                          |
| captcha    | string  | 是   | 验证码                        |
| captchaId  | string  | 是   | 验证码ID                      |
| rememberMe | boolean | 否   | 是否记住我，默认false         |

- **请求示例**:

```json
{
  "username": "admin",
  "password": "123456",
  "captcha": "A7B2",
  "captchaId": "3d9e7a1c-5a7b-4d1c-9b4e-8f3a2c5d6e7b",
  "rememberMe": false
}
```

- **响应参数**:

| 参数名        | 类型    | 描述                      |
|---------------|---------|---------------------------|
| code          | integer | 状态码，200表示成功       |
| message       | string  | 返回消息                  |
| data          | object  | 返回数据                  |
| - accessToken  | string  | 访问令牌                  |
| - refreshToken | string  | 刷新令牌                  |
| - tokenType    | string  | 令牌类型，固定为"Bearer"  |
| - expiresIn    | long    | 访问令牌过期时间(秒)      |
| - userId       | long    | 用户ID                    |
| - username     | string  | 用户名                    |
| - realName     | string  | 真实姓名                  |
| - avatar       | string  | 用户头像URL               |
| - roles        | array   | 角色列表                  |
| - permissions  | array   | 权限列表                  |
| - isAdmin      | boolean | 是否为管理员              |
| - loginTime    | string  | 登录时间                  |

- **响应示例**:

```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLEFETUlOOnN5c3RlbTp1c2VyOnZpZXciLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNzA0NjMwNTEzLCJleHAiOjE3MDQ2MzQxMTN9.signature",
    "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLEFETUlOOnN5c3RlbTp1c2VyOnZpZXciLCJ0eXBlIjoiUkVGUkVTSCIsImlhdCI6MTcwNDYzMDUxMywiZXhwIjoxNzA1MjM1MzEzfQ.signature",
    "tokenType": "Bearer",
    "expiresIn": 3600,
    "userId": 1,
    "username": "admin",
    "realName": "系统管理员",
    "avatar": "http://localhost:8080/api/files/avatar/default.png",
    "roles": ["ADMIN", "USER"],
    "permissions": ["system:user:list", "system:user:add"],
    "isAdmin": true,
    "loginTime": "2024-01-07 15:35:13"
  }
}
```

- **错误码**:

| 状态码 | 描述               | 说明                     |
|--------|--------------------|-----------------------------|
| 400    | 参数验证失败       | 请求参数不符合要求          |
| 401    | 用户名或密码错误   | 认证失败                   |
| 403    | 验证码错误         | 验证码不正确或已过期        |
| 500    | 系统错误           | 服务器内部错误              |

## 2. 注册接口

### 2.1 用户注册

- **接口**: `POST /auth/register`
- **描述**: 注册新用户
- **请求参数**:

| 参数名         | 类型   | 必填 | 描述                            |
|----------------|--------|------|--------------------------------|
| username       | string | 是   | 用户名(4-16位字母、数字或下划线)|
| password       | string | 是   | 密码(6-20位)                   |
| confirmPassword | string | 是   | 确认密码                        |
| phone          | string | 是   | 手机号                          |
| realName       | string | 否   | 真实姓名                        |
| email          | string | 否   | 邮箱                            |
| captcha        | string | 是   | 验证码                          |
| captchaId      | string | 是   | 验证码ID                        |
| roleCode       | string | 否   | 角色编码，默认为普通用户"USER"   |

- **请求示例**:

```json
{
  "username": "farmer001",
  "password": "123456",
  "confirmPassword": "123456",
  "phone": "13800138000",
  "realName": "张三",
  "email": "farmer001@example.com",
  "captcha": "X7Y9",
  "captchaId": "9c2e4f5a-6b7c-8d9e-0f1a-2b3c4d5e6f7a",
  "roleCode": "USER"
}
```

- **响应参数**:

| 参数名   | 类型    | 描述                |
|----------|---------|---------------------|
| code     | integer | 状态码，200表示成功 |
| message  | string  | 返回消息            |
| data     | long    | 用户ID              |

- **响应示例**:

```json
{
  "code": 200,
  "message": "注册成功",
  "data": 1001
}
```

- **错误码**:

| 状态码 | 描述                 | 说明                       |
|--------|-----------------------|----------------------------|
| 400    | 参数验证失败         | 请求参数不符合要求          |
| 409    | 用户名已存在         | 该用户名已被注册            |
| 409    | 手机号已存在         | 该手机号已被注册            |
| 403    | 验证码错误           | 验证码不正确或已过期        |
| 400    | 两次输入的密码不一致 | 密码与确认密码不匹配        |
| 500    | 系统错误             | 服务器内部错误              |

## 3. 刷新令牌接口

### 3.1 刷新访问令牌

- **接口**: `POST /auth/refresh`
- **描述**: 使用刷新令牌获取新的访问令牌
- **请求头**:

| 参数名        | 类型   | 必填 | 描述                           |
|--------------|--------|------|--------------------------------|
| Authorization | string | 是   | Bearer + 空格 + 刷新令牌       |

- **请求示例**:

```
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLEFETUlOOnN5c3RlbTp1c2VyOnZpZXciLCJ0eXBlIjoiUkVGUkVTSCIsImlhdCI6MTcwNDYzMDUxMywiZXhwIjoxNzA1MjM1MzEzfQ.signature
```

- **响应参数**: 与登录接口响应一致
- **响应示例**: 与登录接口响应示例一致

- **错误码**:

| 状态码 | 描述               | 说明                     |
|--------|--------------------|-----------------------------|
| 401    | 刷新令牌已失效     | 刷新令牌过期或无效          |
| 403    | 无效的刷新令牌     | 使用的不是刷新令牌而是访问令牌 |
| 500    | 系统错误           | 服务器内部错误              |

## 4. 登出接口

### 4.1 用户登出

- **接口**: `POST /auth/logout`
- **描述**: 使当前用户的令牌失效
- **请求头**:

| 参数名        | 类型   | 必填 | 描述                       |
|--------------|--------|------|----------------------------|
| Authorization | string | 是   | Bearer + 空格 + 访问令牌   |

- **请求示例**:

```
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLEFETUlOOnN5c3RlbTp1c2VyOnZpZXciLCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNzA0NjMwNTEzLCJleHAiOjE3MDQ2MzQxMTN9.signature
```

- **响应参数**:

| 参数名   | 类型    | 描述                |
|----------|---------|---------------------|
| code     | integer | 状态码，200表示成功 |
| message  | string  | 返回消息            |

- **响应示例**:

```json
{
  "code": 200,
  "message": "操作成功"
}
```

## 5. 获取用户信息接口

### 5.1 获取当前用户信息

- **接口**: `GET /auth/info`
- **描述**: 获取当前登录用户的详细信息
- **请求头**:

| 参数名        | 类型   | 必填 | 描述                       |
|--------------|--------|------|----------------------------|
| Authorization | string | 是   | Bearer + 空格 + 访问令牌   |

- **响应参数**: 与登录接口响应中的data部分一致
- **响应示例**:

```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "userId": 1,
    "username": "admin",
    "realName": "系统管理员",
    "avatar": "http://localhost:8080/api/files/avatar/default.png",
    "roles": ["ADMIN", "USER"],
    "permissions": ["system:user:list", "system:user:add"],
    "isAdmin": true
  }
}
```

- **错误码**:

| 状态码 | 描述               | 说明                     |
|--------|--------------------|-----------------------------|
| 401    | 用户未登录         | 未提供有效的访问令牌        |
| 403    | 访问被拒绝         | 没有权限访问此资源          |

## 6. 验证码接口

### 6.1 获取验证码

- **接口**: `GET /captcha`
- **描述**: 生成图形验证码
- **请求参数**: 无
- **响应参数**:

| 参数名      | 类型    | 描述                       |
|-------------|---------|----------------------------|
| code        | integer | 状态码，200表示成功        |
| message     | string  | 返回消息                   |
| data        | object  | 返回数据                   |
| - captchaId  | string  | 验证码ID                   |
| - base64Image | string  | Base64编码的验证码图片     |
| - expiresIn   | long    | 过期时间（秒）             |

- **响应示例**:

```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "captchaId": "3d9e7a1c-5a7b-4d1c-9b4e-8f3a2c5d6e7b",
    "base64Image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA...(此处省略Base64编码)",
    "expiresIn": 300
  }
}
```

## 7. 用户名和手机号检查接口

### 7.1 检查用户名是否存在

- **接口**: `GET /auth/check-username`
- **描述**: 检查指定用户名是否已被注册
- **请求参数**:

| 参数名   | 类型   | 必填 | 描述       |
|----------|--------|------|------------|
| username | string | 是   | 用户名     |

- **响应参数**:

| 参数名   | 类型    | 描述                          |
|----------|---------|-------------------------------|
| code     | integer | 状态码，200表示成功           |
| message  | string  | 返回消息                      |
| data     | boolean | true表示存在，false表示不存在 |

- **响应示例**:

```json
{
  "code": 200,
  "message": "操作成功",
  "data": false
}
```

### 7.2 检查手机号是否存在

- **接口**: `GET /auth/check-phone`
- **描述**: 检查指定手机号是否已被注册
- **请求参数**:

| 参数名 | 类型   | 必填 | 描述     |
|--------|--------|------|----------|
| phone  | string | 是   | 手机号   |

- **响应参数**: 与检查用户名接口响应一致
- **响应示例**: 与检查用户名接口响应示例一致

## 8. 安全建议

1. 所有请求应使用HTTPS协议
2. 登录接口应添加请求频率限制，防止暴力破解
3. 验证码应在每次验证后失效
4. 访问令牌的有效期不应过长，一般建议30分钟
5. 敏感操作应要求重新验证身份
6. 客户端应妥善保存令牌，避免泄露

## 9. 错误码汇总

| 状态码 | 描述                 | 说明                       |
|--------|-----------------------|----------------------------|
| 200    | 操作成功             | 请求成功处理                |
| 400    | 参数验证失败         | 请求参数不符合要求          |
| 401    | 未授权               | 未登录或令牌已过期          |
| 403    | 禁止访问             | 没有权限访问此资源          |
| 404    | 资源不存在           | 请求的资源不存在            |
| 409    | 资源已存在           | 创建的资源已存在            |
| 429    | 请求过于频繁         | 超出接口调用频率限制        |
| 500    | 系统错误             | 服务器内部错误              | 