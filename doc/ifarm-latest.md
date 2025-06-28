---
title: ifarm-latest
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# ifarm-latest

Base URLs:

* <a href="http://localhost:8080/api">本地开发环境: http://localhost:8080/api</a>

# Authentication

# 用户管理模块/用户管理

<a id="opIdgetUserDetail"></a>

## GET 获取用户详情

GET /user/{userId}

根据用户ID获取用户详细信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"username":"string","nickname":"string","phone":"string","email":"string","avatar":"string","gender":0,"genderDesc":"string","birthday":"2019-08-24","address":"string","realName":"string","idCard":"string","status":0,"statusDesc":"string","loginTime":"2019-08-24T14:15:22Z","loginIp":"string","roles":[{"id":0,"roleName":"string","roleCode":"string","description":"string","status":0,"statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"permissions":["string"],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultUserDetailVO](#schemaresultuserdetailvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdateUser"></a>

## PUT 更新用户信息

PUT /user/{userId}

根据用户ID更新用户信息

> Body 请求参数

```json
{
  "nickname": "string",
  "phone": "string",
  "email": "string",
  "avatar": "string",
  "gender": 2,
  "birthday": "2019-08-24",
  "address": "string",
  "realName": "string",
  "idCard": "string",
  "status": 1
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|body|body|[UserUpdateDTO](#schemauserupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteUser"></a>

## DELETE 删除用户

DELETE /user/{userId}

根据用户ID删除用户

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdchangeUserStatus"></a>

## PUT 修改用户状态

PUT /user/{userId}/status

启用或禁用用户

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|status|query|integer(int32)| 是 |状态：0禁用，1启用|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdresetPassword"></a>

## PUT 重置密码

PUT /user/{userId}/reset-password

管理员重置用户密码

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|newPassword|query|string| 是 |新密码|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdchangePassword"></a>

## PUT 修改密码

PUT /user/{userId}/password

用户修改自己的密码

> Body 请求参数

```json
{
  "oldPassword": "string",
  "newPassword": "string",
  "confirmPassword": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|body|body|[UserPasswordDTO](#schemauserpassworddto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateUser"></a>

## POST 创建用户

POST /user

创建新用户

> Body 请求参数

```json
{
  "username": "string",
  "nickname": "string",
  "password": "string",
  "phone": "string",
  "email": "string",
  "avatar": "string",
  "gender": 2,
  "birthday": "2019-08-24",
  "address": "string",
  "realName": "string",
  "idCard": "string",
  "status": 1
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[UserCreateDTO](#schemausercreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetUserPage"></a>

## GET 分页查询用户列表

GET /user/page

分页查询用户列表，支持按用户名、手机号、状态筛选

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|current|query|integer(int64)| 是 |当前页|
|size|query|integer(int64)| 是 |每页大小|
|username|query|string| 否 |用户名（模糊查询）|
|phone|query|string| 否 |手机号（模糊查询）|
|status|query|integer(int32)| 否 |状态：0禁用，1启用|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"username":"string","nickname":"string","phone":"string","email":"string","avatar":"string","gender":0,"genderDesc":"string","birthday":"2019-08-24","address":"string","realName":"string","idCard":"string","status":0,"statusDesc":"string","loginTime":"2019-08-24T14:15:22Z","loginIp":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultUserVO](#schemaresultpageresultuservo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckUsernameExists"></a>

## GET 检查用户名是否存在

GET /user/check-username

检查用户名是否已被使用

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|username|query|string| 是 |用户名|
|excludeUserId|query|integer(int64)| 否 |排除的用户ID（用于更新时检查）|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckPhoneExists"></a>

## GET 检查手机号是否存在

GET /user/check-phone

检查手机号是否已被使用

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|phone|query|string| 是 |手机号|
|excludeUserId|query|integer(int64)| 否 |排除的用户ID（用于更新时检查）|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckEmailExists"></a>

## GET 检查邮箱是否存在

GET /user/check-email

检查邮箱是否已被使用

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|email|query|string| 是 |邮箱|
|excludeUserId|query|integer(int64)| 否 |排除的用户ID（用于更新时检查）|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchDeleteUsers"></a>

## DELETE 批量删除用户

DELETE /user/batch

根据用户ID列表批量删除用户

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 用户管理模块/用户地址管理

<a id="opIdgetAddressDetail"></a>

## GET 获取地址详情

GET /user/{userId}/address/{addressId}

根据地址ID获取地址详细信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|addressId|path|integer(int64)| 是 |地址ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"userId":0,"contactName":"string","contactPhone":"string","provinceCode":"string","provinceName":"string","cityCode":"string","cityName":"string","districtCode":"string","districtName":"string","detailAddress":"string","fullAddress":"string","addressType":0,"addressTypeDesc":"string","isDefault":0,"isDefaultDesc":"string","longitude":0,"latitude":0,"status":0,"statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultAddressVO](#schemaresultaddressvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdateAddress"></a>

## PUT 更新地址

PUT /user/{userId}/address/{addressId}

根据地址ID更新地址信息

> Body 请求参数

```json
{
  "contactName": "string",
  "contactPhone": "string",
  "provinceCode": "string",
  "provinceName": "string",
  "cityCode": "string",
  "cityName": "string",
  "districtCode": "string",
  "districtName": "string",
  "detailAddress": "string",
  "addressType": 1,
  "isDefault": 1,
  "longitude": -180,
  "latitude": -90
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|addressId|path|integer(int64)| 是 |地址ID|
|body|body|[AddressUpdateDTO](#schemaaddressupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteAddress"></a>

## DELETE 删除地址

DELETE /user/{userId}/address/{addressId}

根据地址ID删除地址

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|addressId|path|integer(int64)| 是 |地址ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdsetDefaultAddress"></a>

## PUT 设置默认地址

PUT /user/{userId}/address/{addressId}/default

将指定地址设置为默认地址

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|addressId|path|integer(int64)| 是 |地址ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetUserAddressList"></a>

## GET 获取用户地址列表

GET /user/{userId}/address

获取指定用户的所有地址

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"userId":0,"contactName":"string","contactPhone":"string","provinceCode":"string","provinceName":"string","cityCode":"string","cityName":"string","districtCode":"string","districtName":"string","detailAddress":"string","fullAddress":"string","addressType":0,"addressTypeDesc":"string","isDefault":0,"isDefaultDesc":"string","longitude":0,"latitude":0,"status":0,"statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListAddressVO](#schemaresultlistaddressvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateAddress"></a>

## POST 创建地址

POST /user/{userId}/address

为用户创建新地址

> Body 请求参数

```json
{
  "contactName": "string",
  "contactPhone": "string",
  "provinceCode": "string",
  "provinceName": "string",
  "cityCode": "string",
  "cityName": "string",
  "districtCode": "string",
  "districtName": "string",
  "detailAddress": "string",
  "addressType": 1,
  "isDefault": 1,
  "longitude": -180,
  "latitude": -90
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|body|body|[AddressCreateDTO](#schemaaddresscreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetUserDefaultAddress"></a>

## GET 获取默认地址

GET /user/{userId}/address/default

获取用户的默认地址

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"userId":0,"contactName":"string","contactPhone":"string","provinceCode":"string","provinceName":"string","cityCode":"string","cityName":"string","districtCode":"string","districtName":"string","detailAddress":"string","fullAddress":"string","addressType":0,"addressTypeDesc":"string","isDefault":0,"isDefaultDesc":"string","longitude":0,"latitude":0,"status":0,"statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultAddressVO](#schemaresultaddressvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 用户管理模块/角色管理

<a id="opIdupdateRole"></a>

## PUT 更新角色

PUT /role

更新角色信息

> Body 请求参数

```json
{
  "id": 0,
  "roleName": "string",
  "roleCode": "string",
  "description": "string",
  "status": 0,
  "permissionIds": [
    0
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[RoleUpdateDTO](#schemaroleupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateRole"></a>

## POST 创建角色

POST /role

创建新的角色

> Body 请求参数

```json
{
  "roleName": "string",
  "roleCode": "string",
  "description": "string",
  "status": 0,
  "permissionIds": [
    0
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[RoleCreateDTO](#schemarolecreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdateRoleStatus"></a>

## PUT 更新角色状态

PUT /role/{id}/status

启用或禁用角色

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |角色ID|
|status|query|integer(int32)| 是 |状态：0禁用，1启用|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdassignPermissions"></a>

## PUT 为角色分配权限

PUT /role/{id}/permissions

为指定角色分配权限

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |角色ID|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetRoleDetail"></a>

## GET 获取角色详情

GET /role/{id}

根据ID获取角色详情

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |角色ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"roleName":"string","roleCode":"string","description":"string","status":0,"statusDesc":"string","permissions":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":null,"parentId":null,"permissionName":null,"permissionCode":null,"permissionType":null,"permissionTypeDesc":null,"component":null,"path":null,"icon":null,"sort":null,"status":null,"statusDesc":null,"children":null,"createTime":null,"updateTime":null}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"permissionIds":[0],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultRoleDetailVO](#schemaresultroledetailvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteRole"></a>

## DELETE 删除角色

DELETE /role/{id}

根据ID删除角色

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |角色ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdpageRoles"></a>

## GET 分页查询角色列表

GET /role/page

根据条件分页查询角色列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|current|query|integer(int64)| 否 |当前页|
|size|query|integer(int64)| 否 |每页大小|
|roleName|query|string| 否 |角色名称|
|roleCode|query|string| 否 |角色编码|
|status|query|integer(int32)| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"roleName":"string","roleCode":"string","description":"string","status":0,"statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultRoleVO](#schemaresultpageresultrolevo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetAllRoles"></a>

## GET 获取所有角色列表

GET /role/list

获取所有启用状态的角色列表

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"roleName":"string","roleCode":"string","description":"string","status":0,"statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListRoleVO](#schemaresultlistrolevo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchDeleteRoles"></a>

## DELETE 批量删除角色

DELETE /role/batch

批量删除角色

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 用户管理模块/权限管理

<a id="opIdupdatePermission"></a>

## PUT 更新权限

PUT /permission

更新权限信息

> Body 请求参数

```json
{
  "id": 0,
  "parentId": 0,
  "permissionName": "string",
  "permissionCode": "string",
  "permissionType": 1,
  "component": "string",
  "path": "string",
  "icon": "string",
  "sort": 0,
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[PermissionUpdateDTO](#schemapermissionupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreatePermission"></a>

## POST 创建权限

POST /permission

创建新的权限

> Body 请求参数

```json
{
  "parentId": 0,
  "permissionName": "string",
  "permissionCode": "string",
  "permissionType": 1,
  "component": "string",
  "path": "string",
  "icon": "string",
  "sort": 0,
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[PermissionCreateDTO](#schemapermissioncreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdatePermissionStatus"></a>

## PUT 更新权限状态

PUT /permission/{id}/status

启用或禁用权限

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |权限ID|
|status|query|integer(int32)| 是 |状态：0禁用，1启用|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPermissionDetail"></a>

## GET 获取权限详情

GET /permission/{id}

根据ID获取权限详情

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |权限ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":null,"parentId":null,"permissionName":null,"permissionCode":null,"permissionType":null,"permissionTypeDesc":null,"component":null,"path":null,"icon":null,"sort":null,"status":null,"statusDesc":null,"children":null,"createTime":null,"updateTime":null}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPermissionVO](#schemaresultpermissionvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeletePermission"></a>

## DELETE 删除权限

DELETE /permission/{id}

根据ID删除权限

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |权限ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetUserMenuTree"></a>

## GET 获取用户菜单权限树

GET /permission/user/{userId}/menu

获取指定用户的菜单权限树

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPermissionVO](#schemaresultlistpermissionvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPermissionsByType"></a>

## GET 根据类型获取权限列表

GET /permission/type/{permissionType}

根据权限类型获取权限列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|permissionType|path|integer(int32)| 是 |权限类型：1目录，2菜单，3按钮，4接口|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPermissionVO](#schemaresultlistpermissionvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPermissionTree"></a>

## GET 获取权限树

GET /permission/tree

获取权限树形结构

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPermissionVO](#schemaresultlistpermissionvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdpagePermissions"></a>

## GET 分页查询权限列表

GET /permission/page

根据条件分页查询权限列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|current|query|integer(int64)| 否 |当前页|
|size|query|integer(int64)| 否 |每页大小|
|permissionName|query|string| 否 |权限名称|
|permissionCode|query|string| 否 |权限编码|
|permissionType|query|integer(int32)| 否 |权限类型|
|status|query|integer(int32)| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":null,"parentId":null,"permissionName":null,"permissionCode":null,"permissionType":null,"permissionTypeDesc":null,"component":null,"path":null,"icon":null,"sort":null,"status":null,"statusDesc":null,"children":null,"createTime":null,"updateTime":null}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultPermissionVO](#schemaresultpageresultpermissionvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPermissionsByParentId"></a>

## GET 获取子权限列表

GET /permission/children/{parentId}

根据父权限ID获取子权限列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|parentId|path|integer(int64)| 是 |父权限ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{"id":0,"parentId":0,"permissionName":"string","permissionCode":"string","permissionType":0,"permissionTypeDesc":"string","component":"string","path":"string","icon":"string","sort":0,"status":0,"statusDesc":"string","children":[{}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPermissionVO](#schemaresultlistpermissionvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchDeletePermissions"></a>

## DELETE 批量删除权限

DELETE /permission/batch

批量删除权限

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 农场管理模块/农场农产品关联管理

<a id="opIdupdateFarmCropStatus"></a>

## PUT 更新农场农产品关联状态

PUT /product/farm-crop/{id}/status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |关联ID|
|status|query|string| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateFarmCrop"></a>

## POST 创建农场农产品关联

POST /product/farm-crop

> Body 请求参数

```json
{
  "farmId": 0,
  "cropIds": [
    0
  ],
  "status": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[FarmCropCreateDTO](#schemafarmcropcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmCropById"></a>

## GET 根据ID查询农场农产品关联详情

GET /product/farm-crop/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |关联ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"farmId":0,"farmName":"string","cropId":0,"cropName":"string","cropImage":"string","categoryName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultFarmCropVO](#schemaresultfarmcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteFarmCrop"></a>

## DELETE 删除农场农产品关联

DELETE /product/farm-crop/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |关联ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmCropPage"></a>

## GET 分页查询农场农产品关联列表

GET /product/farm-crop/page

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|integer(int32)| 否 |页码|
|pageSize|query|integer(int32)| 否 |页大小|
|farmId|query|integer(int64)| 否 |农场ID|
|cropName|query|string| 否 |农产品名称|
|status|query|string| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"farmId":0,"farmName":"string","cropId":0,"cropName":"string","cropImage":"string","categoryName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultFarmCropVO](#schemaresultpageresultfarmcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCropsByFarmId"></a>

## GET 根据农场ID查询农产品列表

GET /product/farm-crop/farm/{farmId}/crops

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|path|integer(int64)| 是 |农场ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmId":0,"farmName":"string","cropId":0,"cropName":"string","cropImage":"string","categoryName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListFarmCropVO](#schemaresultlistfarmcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmsByCropId"></a>

## GET 根据农产品ID查询农场列表

GET /product/farm-crop/crop/{cropId}/farms

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cropId|path|integer(int64)| 是 |农产品ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmId":0,"farmName":"string","cropId":0,"cropName":"string","cropImage":"string","categoryName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListFarmCropVO](#schemaresultlistfarmcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 农场管理模块/农产品管理

<a id="opIdupdateCrop"></a>

## PUT 更新农产品

PUT /product/crop

> Body 请求参数

```json
{
  "id": 0,
  "name": "string",
  "categoryId": 0,
  "image": "string",
  "description": "string",
  "growthPeriod": 1,
  "plantingSeason": "string",
  "cultivationMethod": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[CropUpdateDTO](#schemacropupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateCrop"></a>

## POST 创建农产品

POST /product/crop

> Body 请求参数

```json
{
  "name": "string",
  "categoryId": 0,
  "image": "string",
  "description": "string",
  "growthPeriod": 1,
  "plantingSeason": "string",
  "cultivationMethod": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[CropCreateDTO](#schemacropcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCropById"></a>

## GET 根据ID查询农产品详情

GET /product/crop/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |农产品ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"name":"string","categoryId":0,"categoryName":"string","image":"string","description":"string","growthPeriod":0,"plantingSeason":"string","cultivationMethod":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultCropVO](#schemaresultcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteCrop"></a>

## DELETE 删除农产品

DELETE /product/crop/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |农产品ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPopularCrops"></a>

## GET 查询热门农产品

GET /product/crop/popular

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|limit|query|integer(int32)| 否 |限制数量|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"name":"string","categoryId":0,"categoryName":"string","image":"string","description":"string","growthPeriod":0,"plantingSeason":"string","cultivationMethod":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListCropVO](#schemaresultlistcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCropPage"></a>

## GET 分页查询农产品列表

GET /product/crop/page

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|integer(int32)| 否 |页码|
|pageSize|query|integer(int32)| 否 |页大小|
|name|query|string| 否 |农产品名称|
|categoryId|query|integer(int64)| 否 |分类ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"name":"string","categoryId":0,"categoryName":"string","image":"string","description":"string","growthPeriod":0,"plantingSeason":"string","cultivationMethod":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultCropVO](#schemaresultpageresultcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCropsByCategoryId"></a>

## GET 根据分类ID查询农产品列表

GET /product/crop/category/{categoryId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|categoryId|path|integer(int64)| 是 |分类ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"name":"string","categoryId":0,"categoryName":"string","image":"string","description":"string","growthPeriod":0,"plantingSeason":"string","cultivationMethod":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListCropVO](#schemaresultlistcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 农场管理模块/农产品分类管理

<a id="opIdupdateCategory"></a>

## PUT 更新农产品分类

PUT /product/category

> Body 请求参数

```json
{
  "id": 0,
  "name": "string",
  "parentId": 0,
  "sort": 999
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[CropCategoryUpdateDTO](#schemacropcategoryupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateCategory"></a>

## POST 创建农产品分类

POST /product/category

> Body 请求参数

```json
{
  "name": "string",
  "parentId": 0,
  "sort": 999
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[CropCategoryCreateDTO](#schemacropcategorycreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCategoryById"></a>

## GET 根据ID查询农产品分类详情

GET /product/category/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |分类ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{"id":null,"name":null,"parentId":null,"parentName":null,"sort":null,"children":null,"cropCount":null,"createTime":null,"updateTime":null}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultCropCategoryVO](#schemaresultcropcategoryvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteCategory"></a>

## DELETE 删除农产品分类

DELETE /product/category/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |分类ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCategoryTree"></a>

## GET 查询分类树形结构

GET /product/category/tree

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListCropCategoryVO](#schemaresultlistcropcategoryvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCategoryPage"></a>

## GET 分页查询农产品分类列表

GET /product/category/page

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|integer(int32)| 否 |页码|
|pageSize|query|integer(int32)| 否 |页大小|
|name|query|string| 否 |分类名称|
|parentId|query|integer(int64)| 否 |父分类ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{"id":null,"name":null,"parentId":null,"parentName":null,"sort":null,"children":null,"cropCount":null,"createTime":null,"updateTime":null}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultCropCategoryVO](#schemaresultpageresultcropcategoryvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCategoryByParentId"></a>

## GET 根据父ID查询子分类列表

GET /product/category/children/{parentId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|parentId|path|integer(int64)| 是 |父分类ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{"id":0,"name":"string","parentId":0,"parentName":"string","sort":0,"children":[{}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"cropCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListCropCategoryVO](#schemaresultlistcropcategoryvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 农场管理模块/地块管理

<a id="opIdupdatePlot"></a>

## PUT 更新地块

PUT /plot

> Body 请求参数

```json
{
  "id": 0,
  "farmId": 0,
  "name": "string",
  "area": 0.01,
  "location": "string",
  "soilType": "string",
  "waterSource": "string",
  "status": "string",
  "imageUrls": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[PlotUpdateDTO](#schemaplotupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreatePlot"></a>

## POST 创建地块

POST /plot

> Body 请求参数

```json
{
  "farmId": 0,
  "name": "string",
  "area": 0.01,
  "location": "string",
  "soilType": "string",
  "waterSource": "string",
  "status": "string",
  "imageUrls": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[PlotCreateDTO](#schemaplotcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdatePlotStatus"></a>

## PUT 更新地块状态

PUT /plot/{id}/status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |地块ID|
|status|query|string| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPlotById"></a>

## GET 根据ID查询地块详情

GET /plot/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |地块ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"farmId":0,"farmName":"string","name":"string","area":0,"location":"string","soilType":"string","waterSource":"string","status":"string","statusDesc":"string","imageUrls":["string"],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPlotVO](#schemaresultplotvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeletePlot"></a>

## DELETE 删除地块

DELETE /plot/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |地块ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPlotPage"></a>

## GET 分页查询地块列表

GET /plot/page

支持按农场、地块名称、状态等条件查询

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页大小|
|farmId|query|integer(int64)| 否 |农场ID|
|name|query|string| 否 |地块名称|
|status|query|string| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"farmId":0,"farmName":"string","name":"string","area":0,"location":"string","soilType":"string","waterSource":"string","status":"string","statusDesc":"string","imageUrls":["string"],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultPlotVO](#schemaresultpageresultplotvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPlotsByFarmId"></a>

## GET 根据农场ID查询地块列表

GET /plot/farm/{farmId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|path|integer(int64)| 是 |农场ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmId":0,"farmName":"string","name":"string","area":0,"location":"string","soilType":"string","waterSource":"string","status":"string","statusDesc":"string","imageUrls":["string"],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPlotVO](#schemaresultlistplotvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckPlotNameExists"></a>

## GET 检查地块名称是否存在

GET /plot/check-name

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|query|integer(int64)| 是 |农场ID|
|name|query|string| 是 |地块名称|
|excludeId|query|integer(int64)| 否 |排除的地块ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeletePlots"></a>

## DELETE 批量删除地块

DELETE /plot/batch

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 农场管理模块/农场管理

<a id="opIdupdateFarm"></a>

## PUT 更新农场

PUT /farm

> Body 请求参数

```json
{
  "id": 0,
  "farmName": "string",
  "farmCode": "string",
  "description": "string",
  "province": "string",
  "city": "string",
  "district": "string",
  "address": "string",
  "longitude": -180,
  "latitude": -90,
  "totalArea": 0.01,
  "contactPerson": "string",
  "contactPhone": "string",
  "businessLicense": "string",
  "ownerId": 0,
  "imageUrls": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[FarmUpdateDTO](#schemafarmupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateFarm"></a>

## POST 创建农场

POST /farm

> Body 请求参数

```json
{
  "farmName": "string",
  "farmCode": "string",
  "description": "string",
  "province": "string",
  "city": "string",
  "district": "string",
  "address": "string",
  "longitude": -180,
  "latitude": -90,
  "totalArea": 0.01,
  "contactPerson": "string",
  "contactPhone": "string",
  "businessLicense": "string",
  "ownerId": 0,
  "imageUrls": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[FarmCreateDTO](#schemafarmcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdateFarmStatus"></a>

## PUT 更新农场状态

PUT /farm/{id}/status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |农场ID|
|status|query|integer(int32)| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdauditFarm"></a>

## PUT 审核农场

PUT /farm/audit

> Body 请求参数

```json
{
  "id": 0,
  "auditResult": "string",
  "auditRemark": "string",
  "auditUserId": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[FarmAuditDTO](#schemafarmauditdto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmById"></a>

## GET 根据ID查询农场详情

GET /farm/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |农场ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"farmName":"string","farmCode":"string","description":"string","province":"string","city":"string","district":"string","address":"string","fullAddress":"string","longitude":0,"latitude":0,"totalArea":0,"contactPerson":"string","contactPhone":"string","businessLicense":"string","isVerified":0,"verifiedDesc":"string","status":0,"statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditUserName":"string","auditRemark":"string","ownerId":0,"ownerName":"string","imageUrls":["string"],"plotCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultFarmVO](#schemaresultfarmvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteFarm"></a>

## DELETE 删除农场

DELETE /farm/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |农场ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmStats"></a>

## GET 获取农场统计信息

GET /farm/stats

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ownerId|query|integer(int64)| 否 |负责人ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultObject](#schemaresultobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmPage"></a>

## GET 分页查询农场列表

GET /farm/page

支持按农场名称、地区、状态、负责人等条件查询

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页大小|
|farmName|query|string| 否 |农场名称|
|province|query|string| 否 |省份|
|city|query|string| 否 |城市|
|status|query|integer(int32)| 否 |状态|
|ownerId|query|integer(int64)| 否 |负责人ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"farmName":"string","farmCode":"string","description":"string","province":"string","city":"string","district":"string","address":"string","fullAddress":"string","longitude":0,"latitude":0,"totalArea":0,"contactPerson":"string","contactPhone":"string","businessLicense":"string","isVerified":0,"verifiedDesc":"string","status":0,"statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditUserName":"string","auditRemark":"string","ownerId":0,"ownerName":"string","imageUrls":["string"],"plotCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultFarmVO](#schemaresultpageresultfarmvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFarmsByOwnerId"></a>

## GET 根据负责人ID查询农场列表

GET /farm/owner/{ownerId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ownerId|path|integer(int64)| 是 |负责人ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmName":"string","farmCode":"string","description":"string","province":"string","city":"string","district":"string","address":"string","fullAddress":"string","longitude":0,"latitude":0,"totalArea":0,"contactPerson":"string","contactPhone":"string","businessLicense":"string","isVerified":0,"verifiedDesc":"string","status":0,"statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditUserName":"string","auditRemark":"string","ownerId":0,"ownerName":"string","imageUrls":["string"],"plotCount":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListFarmVO](#schemaresultlistfarmvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckFarmCodeExists"></a>

## GET 检查农场编码是否存在

GET /farm/check-code

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmCode|query|string| 是 |农场编码|
|excludeId|query|integer(int64)| 否 |排除的农场ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteFarms"></a>

## DELETE 批量删除农场

DELETE /farm/batch

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/种植单元管理

<a id="opIdupdatePlantingUnitStatus"></a>

## PUT 更新种植单元状态

PUT /planting/units/{id}/status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |种植单元ID|
|status|query|string| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchUpdateStatus"></a>

## PUT 批量更新状态

PUT /planting/units/batch-status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ids|query|array[integer]| 是 |种植单元ID列表|
|status|query|string| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPlantingUnitPage"></a>

## GET 分页查询种植单元列表

GET /planting/units

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页数量|
|adoptionId|query|integer(int64)| 否 |认养记录ID|
|cropId|query|integer(int64)| 否 |农产品ID|
|status|query|string| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"size":0,"total":0,"records":[{"id":0,"adoptionId":0,"unitNo":"string","cropId":0,"cropName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"current":0,"pages":0},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultIPagePlantingUnitVO](#schemaresultipageplantingunitvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreatePlantingUnit"></a>

## POST 创建种植单元

POST /planting/units

> Body 请求参数

```json
{
  "adoptionId": 0,
  "unitNo": "string",
  "cropId": 0,
  "status": "planting"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[PlantingUnitCreateDTO](#schemaplantingunitcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPlantingUnitDetail"></a>

## GET 查询种植单元详情

GET /planting/units/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |种植单元ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"adoptionId":0,"unitNo":"string","cropId":0,"cropName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPlantingUnitVO](#schemaresultplantingunitvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeletePlantingUnit"></a>

## DELETE 删除种植单元

DELETE /planting/units/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |种植单元ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetByAdoptionId"></a>

## GET 根据认养记录ID查询种植单元列表

GET /planting/units/adoption/{adoptionId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|adoptionId|path|integer(int64)| 是 |认养记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"adoptionId":0,"unitNo":"string","cropId":0,"cropName":"string","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPlantingUnitVO](#schemaresultlistplantingunitvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/种植记录管理

<a id="opIdgetPlantingRecordDetail"></a>

## GET 查询种植记录详情

GET /planting/records/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |种植记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"unitId":0,"unitNo":"string","recordTime":"2019-08-24","content":"string","imageList":["string"],"creatorId":0,"creatorName":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPlantingRecordVO](#schemaresultplantingrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdatePlantingRecord"></a>

## PUT 更新种植记录

PUT /planting/records/{id}

> Body 请求参数

```json
{
  "unitId": 0,
  "recordTime": "2019-08-24",
  "content": "string",
  "imageList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |种植记录ID|
|body|body|[PlantingRecordCreateDTO](#schemaplantingrecordcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeletePlantingRecord"></a>

## DELETE 删除种植记录

DELETE /planting/records/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |种植记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPlantingRecordPage"></a>

## GET 分页查询种植记录列表

GET /planting/records

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页数量|
|unitId|query|integer(int64)| 否 |种植单元ID|
|creatorId|query|integer(int64)| 否 |创建者ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"size":0,"total":0,"records":[{"id":0,"unitId":0,"unitNo":"string","recordTime":"2019-08-24","content":"string","imageList":["string"],"creatorId":0,"creatorName":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"current":0,"pages":0},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultIPagePlantingRecordVO](#schemaresultipageplantingrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreatePlantingRecord"></a>

## POST 创建种植记录

POST /planting/records

> Body 请求参数

```json
{
  "unitId": 0,
  "recordTime": "2019-08-24",
  "content": "string",
  "imageList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|creatorId|query|integer(int64)| 是 |创建者ID|
|body|body|[PlantingRecordCreateDTO](#schemaplantingrecordcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetByUnitId"></a>

## GET 根据种植单元ID查询种植记录列表

GET /planting/records/unit/{unitId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|unitId|path|integer(int64)| 是 |种植单元ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"unitId":0,"unitNo":"string","recordTime":"2019-08-24","content":"string","imageList":["string"],"creatorId":0,"creatorName":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPlantingRecordVO](#schemaresultlistplantingrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetByCreatorId"></a>

## GET 根据创建者ID查询种植记录列表

GET /planting/records/creator/{creatorId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|creatorId|path|integer(int64)| 是 |创建者ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"unitId":0,"unitNo":"string","recordTime":"2019-08-24","content":"string","imageList":["string"],"creatorId":0,"creatorName":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListPlantingRecordVO](#schemaresultlistplantingrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/认养记录管理

<a id="opIdupdateAdoptionRecordStatus"></a>

## PUT 更新认养记录状态

PUT /planting/adoption-records/{id}/status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |认养记录ID|
|status|query|string| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchUpdateStatus_1"></a>

## PUT 批量更新状态

PUT /planting/adoption-records/batch-status

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|ids|query|array[integer]| 是 |认养记录ID列表|
|status|query|string| 是 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetAdoptionRecordPage"></a>

## GET 分页查询认养记录列表

GET /planting/adoption-records

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页数量|
|orderId|query|integer(int64)| 否 |订单ID|
|status|query|string| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"size":0,"total":0,"records":[{"id":0,"orderId":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"current":0,"pages":0},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultIPageAdoptionRecordVO](#schemaresultipageadoptionrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateAdoptionRecord"></a>

## POST 创建认养记录

POST /planting/adoption-records

> Body 请求参数

```json
{
  "orderId": 0,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24",
  "status": "planting"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[AdoptionRecordCreateDTO](#schemaadoptionrecordcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetAdoptionRecordDetail"></a>

## GET 查询认养记录详情

GET /planting/adoption-records/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |认养记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"orderId":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultAdoptionRecordVO](#schemaresultadoptionrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteAdoptionRecord"></a>

## DELETE 删除认养记录

DELETE /planting/adoption-records/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |认养记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetByOrderId"></a>

## GET 根据订单ID查询认养记录

GET /planting/adoption-records/order/{orderId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|orderId|path|integer(int64)| 是 |订单ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"orderId":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultAdoptionRecordVO](#schemaresultadoptionrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/物流管理

<a id="opIdshipLogistics"></a>

## PUT 发货

PUT /logistics/{id}/ship

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |物流ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeliverLogistics"></a>

## PUT 确认送达

PUT /logistics/{id}/deliver

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |物流ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetLogisticsPage"></a>

## GET 分页查询物流列表

GET /logistics

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页大小|
|logisticsNo|query|string| 否 |物流单号|
|company|query|string| 否 |物流公司|
|status|query|string| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"logisticsNo":"string","company":"string","status":"string","statusDesc":"string","recipientName":"string","recipientPhone":"string","recipientAddress":"string","shippingTime":"2019-08-24T14:15:22Z","deliveryTime":"2019-08-24T14:15:22Z","trackingList":[{"id":null,"logisticsId":null,"trackingTime":null,"location":null,"description":null,"createTime":null}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultLogisticsVO](#schemaresultpageresultlogisticsvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateLogistics"></a>

## POST 创建物流

POST /logistics

> Body 请求参数

```json
{
  "company": "顺丰快递",
  "recipientName": "张三",
  "recipientPhone": "13800138000",
  "recipientAddress": "北京市朝阳区xxx街道xxx小区"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[LogisticsCreateDTO](#schemalogisticscreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdaddTrackingRecord"></a>

## POST 添加物流跟踪记录

POST /logistics/{id}/tracking

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |物流ID|
|location|query|string| 是 |当前位置|
|description|query|string| 是 |描述信息|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetLogisticsDetail"></a>

## GET 查询物流详情

GET /logistics/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |物流ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"logisticsNo":"string","company":"string","status":"string","statusDesc":"string","recipientName":"string","recipientPhone":"string","recipientAddress":"string","shippingTime":"2019-08-24T14:15:22Z","deliveryTime":"2019-08-24T14:15:22Z","trackingList":[{"id":0,"logisticsId":0,"trackingTime":"2019-08-24T14:15:22Z","location":"string","description":"string","createTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLogisticsVO](#schemaresultlogisticsvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetLogisticsByNo"></a>

## GET 根据物流单号查询物流信息

GET /logistics/no/{logisticsNo}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|logisticsNo|path|string| 是 |物流单号|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"logisticsNo":"string","company":"string","status":"string","statusDesc":"string","recipientName":"string","recipientPhone":"string","recipientAddress":"string","shippingTime":"2019-08-24T14:15:22Z","deliveryTime":"2019-08-24T14:15:22Z","trackingList":[{"id":0,"logisticsId":0,"trackingTime":"2019-08-24T14:15:22Z","location":"string","description":"string","createTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLogisticsVO](#schemaresultlogisticsvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/收获记录管理

<a id="opIdshipHarvest"></a>

## PUT 发货

PUT /harvest-records/{id}/ship

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |收获记录ID|
|logisticsId|query|integer(int64)| 是 |物流ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdconfirmHarvest"></a>

## PUT 用户确认收获

PUT /harvest-records/{id}/confirm

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |收获记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcompleteHarvest"></a>

## PUT 完成收获

PUT /harvest-records/{id}/complete

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |收获记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetHarvestRecordPage"></a>

## GET 分页查询收获记录列表

GET /harvest-records

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页大小|
|adoptionId|query|integer(int64)| 否 |认养记录ID|
|status|query|string| 否 |状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"adoptionId":0,"harvestTime":"2019-08-24","status":"string","statusDesc":"string","packageType":"string","logisticsId":0,"logisticsNo":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultHarvestRecordVO](#schemaresultpageresultharvestrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateHarvestRecord"></a>

## POST 创建收获记录

POST /harvest-records

> Body 请求参数

```json
{
  "adoptionId": 0,
  "harvestTime": "2024-01-01",
  "packageType": "精装礼盒"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[HarvestRecordCreateDTO](#schemaharvestrecordcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetHarvestRecordDetail"></a>

## GET 查询收获记录详情

GET /harvest-records/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |收获记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"adoptionId":0,"harvestTime":"2019-08-24","status":"string","statusDesc":"string","packageType":"string","logisticsId":0,"logisticsNo":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultHarvestRecordVO](#schemaresultharvestrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteHarvestRecord"></a>

## DELETE 删除收获记录

DELETE /harvest-records/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |收获记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetHarvestRecordsByAdoptionId"></a>

## GET 根据认养记录ID查询收获记录列表

GET /harvest-records/adoption/{adoptionId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|adoptionId|path|integer(int64)| 是 |认养记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"adoptionId":0,"harvestTime":"2019-08-24","status":"string","statusDesc":"string","packageType":"string","logisticsId":0,"logisticsNo":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListHarvestRecordVO](#schemaresultlistharvestrecordvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/认养项目管理

<a id="opIdgetAdoptionProjectById"></a>

## GET 根据ID查询认养项目详情

GET /adoption/projects/{id}

获取认养项目的完整信息，包括图片、作物、套餐等

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"farmId":0,"farmName":"string","name":"string","description":"string","type":"string","typeDesc":"string","plotId":0,"plotName":"string","unitCount":0,"adoptedUnitCount":0,"remainingUnitCount":0,"unitArea":0,"adoptionPrice":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditRemark":"string","imageUrls":["string"],"crops":[{"id":0,"projectId":0,"cropId":0,"cropName":"string","cropImage":"string","cropDescription":"string","growthPeriod":0,"plantingSeason":"string","farmSelected":true,"farmSelectedDesc":"string","createTime":"2019-08-24T14:15:22Z"}],"packages":[{"id":0,"projectId":0,"name":"string","unitCount":0,"seasonCount":0,"price":0,"originalPrice":0,"harvestCount":0,"discountAmount":0,"discountRate":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultAdoptionProjectVO](#schemaresultadoptionprojectvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdateAdoptionProject"></a>

## PUT 更新认养项目

PUT /adoption/projects/{id}

更新认养项目信息，只有待审核和已拒绝状态的项目可以修改

> Body 请求参数

```json
{
  "name": "string",
  "description": "string",
  "unitCount": 1,
  "unitArea": 0.01,
  "adoptionPrice": 0.01,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |项目ID|
|body|body|[AdoptionProjectUpdateDTO](#schemaadoptionprojectupdatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteAdoptionProject"></a>

## DELETE 删除认养项目

DELETE /adoption/projects/{id}

删除认养项目，只有待审核和已拒绝状态的项目可以删除

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateAdoptionProject"></a>

## POST 创建认养项目

POST /adoption/projects

创建新的认养项目，包括项目信息、图片、作物、套餐等

> Body 请求参数

```json
{
  "farmId": 0,
  "name": "string",
  "description": "string",
  "type": "string",
  "plotId": 0,
  "unitCount": 1,
  "unitArea": 0.01,
  "adoptionPrice": 0.01,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24",
  "imageUrls": [
    "string"
  ],
  "cropIds": [
    0
  ],
  "farmSelectedCropIds": [
    0
  ],
  "packages": [
    {
      "name": "string",
      "unitCount": 1,
      "seasonCount": 1,
      "price": 0.01,
      "originalPrice": 0.01,
      "harvestCount": 100
    }
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[AdoptionProjectCreateDTO](#schemaadoptionprojectcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdpublishAdoptionProject"></a>

## POST 发布认养项目

POST /adoption/projects/{id}/publish

发布认养项目，使其对用户可见

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdendAdoptionProject"></a>

## POST 结束认养项目

POST /adoption/projects/{id}/end

结束认养项目，不再接受新的认养

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdauditAdoptionProject"></a>

## POST 审核认养项目

POST /adoption/projects/{id}/audit

审核认养项目，可以通过或拒绝

> Body 请求参数

```json
{
  "status": "string",
  "auditRemark": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |项目ID|
|auditUserId|query|integer(int64)| 是 |审核人ID|
|body|body|[AdoptionProjectAuditDTO](#schemaadoptionprojectauditdto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPublishedProjects"></a>

## GET 查询已发布的认养项目

GET /adoption/projects/published

查询所有已发布状态的认养项目

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|query|integer(int64)| 否 |农场ID|
|type|query|string| 否 |项目类型|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmId":0,"farmName":"string","name":"string","description":"string","type":"string","typeDesc":"string","plotId":0,"plotName":"string","unitCount":0,"adoptedUnitCount":0,"remainingUnitCount":0,"unitArea":0,"adoptionPrice":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditRemark":"string","imageUrls":["string"],"crops":[{"id":0,"projectId":0,"cropId":0,"cropName":"string","cropImage":"string","cropDescription":"string","growthPeriod":0,"plantingSeason":"string","farmSelected":true,"farmSelectedDesc":"string","createTime":"2019-08-24T14:15:22Z"}],"packages":[{"id":0,"projectId":0,"name":"string","unitCount":0,"seasonCount":0,"price":0,"originalPrice":0,"harvestCount":0,"discountAmount":0,"discountRate":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListAdoptionProjectVO](#schemaresultlistadoptionprojectvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetAdoptionProjectPage"></a>

## GET 分页查询认养项目列表

GET /adoption/projects/page

支持按农场、名称、类型、状态等条件分页查询

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|integer(int32)| 否 |页码|
|pageSize|query|integer(int32)| 否 |页大小|
|farmId|query|integer(int64)| 否 |农场ID|
|name|query|string| 否 |项目名称|
|type|query|string| 否 |项目类型|
|status|query|string| 否 |项目状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"farmId":0,"farmName":"string","name":"string","description":"string","type":"string","typeDesc":"string","plotId":0,"plotName":"string","unitCount":0,"adoptedUnitCount":0,"remainingUnitCount":0,"unitArea":0,"adoptionPrice":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditRemark":"string","imageUrls":["string"],"crops":[{"id":null,"projectId":null,"cropId":null,"cropName":null,"cropImage":null,"cropDescription":null,"growthPeriod":null,"plantingSeason":null,"farmSelected":null,"farmSelectedDesc":null,"createTime":null}],"packages":[{"id":null,"projectId":null,"name":null,"unitCount":null,"seasonCount":null,"price":null,"originalPrice":null,"harvestCount":null,"discountAmount":null,"discountRate":null,"createTime":null,"updateTime":null}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultAdoptionProjectVO](#schemaresultpageresultadoptionprojectvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetHotProjects"></a>

## GET 查询热门认养项目

GET /adoption/projects/hot

查询最受欢迎的认养项目列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|limit|query|integer(int32)| 否 |限制数量|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmId":0,"farmName":"string","name":"string","description":"string","type":"string","typeDesc":"string","plotId":0,"plotName":"string","unitCount":0,"adoptedUnitCount":0,"remainingUnitCount":0,"unitArea":0,"adoptionPrice":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditRemark":"string","imageUrls":["string"],"crops":[{"id":0,"projectId":0,"cropId":0,"cropName":"string","cropImage":"string","cropDescription":"string","growthPeriod":0,"plantingSeason":"string","farmSelected":true,"farmSelectedDesc":"string","createTime":"2019-08-24T14:15:22Z"}],"packages":[{"id":0,"projectId":0,"name":"string","unitCount":0,"seasonCount":0,"price":0,"originalPrice":0,"harvestCount":0,"discountAmount":0,"discountRate":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListAdoptionProjectVO](#schemaresultlistadoptionprojectvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetProjectsByFarmId"></a>

## GET 根据农场ID查询项目列表

GET /adoption/projects/farm/{farmId}

查询指定农场的所有认养项目

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|path|integer(int64)| 是 |农场ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"farmId":0,"farmName":"string","name":"string","description":"string","type":"string","typeDesc":"string","plotId":0,"plotName":"string","unitCount":0,"adoptedUnitCount":0,"remainingUnitCount":0,"unitArea":0,"adoptionPrice":0,"startTime":"2019-08-24","endTime":"2019-08-24","status":"string","statusDesc":"string","auditTime":"2019-08-24T14:15:22Z","auditUserId":0,"auditRemark":"string","imageUrls":["string"],"crops":[{"id":0,"projectId":0,"cropId":0,"cropName":"string","cropImage":"string","cropDescription":"string","growthPeriod":0,"plantingSeason":"string","farmSelected":true,"farmSelectedDesc":"string","createTime":"2019-08-24T14:15:22Z"}],"packages":[{"id":0,"projectId":0,"name":"string","unitCount":0,"seasonCount":0,"price":0,"originalPrice":0,"harvestCount":0,"discountAmount":0,"discountRate":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListAdoptionProjectVO](#schemaresultlistadoptionprojectvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcountProjects"></a>

## GET 统计认养项目数量

GET /adoption/projects/count

统计认养项目总数或按条件统计

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|query|integer(int64)| 否 |农场ID|
|status|query|string| 否 |项目状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckProjectNameExists"></a>

## GET 检查项目名称是否存在

GET /adoption/projects/check-name

检查指定农场下项目名称是否已存在

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|farmId|query|integer(int64)| 是 |农场ID|
|name|query|string| 是 |项目名称|
|excludeId|query|integer(int64)| 否 |排除的项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/项目作物管理

<a id="opIdupdateProjectCrop"></a>

## PUT 更新项目作物关联

PUT /adoption/project-crops/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |关联ID|
|farmSelected|query|boolean| 是 |是否农场默认选择|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteProjectCrop"></a>

## DELETE 删除项目作物关联

DELETE /adoption/project-crops/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |关联ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdaddProjectCrop"></a>

## POST 添加项目作物关联

POST /adoption/project-crops

> Body 请求参数

```json
{
  "projectId": 0,
  "cropId": 0,
  "farmSelected": true
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ProjectCropCreateDTO](#schemaprojectcropcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchAddProjectCrops"></a>

## POST 批量添加项目作物关联

POST /adoption/project-crops/batch

> Body 请求参数

```json
[
  {
    "projectId": 0,
    "cropId": 0,
    "farmSelected": true
  }
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ProjectCropCreateDTO](#schemaprojectcropcreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchDeleteProjectCrops"></a>

## DELETE 批量删除项目作物关联

DELETE /adoption/project-crops/batch

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetCropsByProjectId"></a>

## GET 根据项目ID查询作物列表

GET /adoption/project-crops/project/{projectId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"projectId":0,"cropId":0,"cropName":"string","cropImage":"string","cropDescription":"string","growthPeriod":0,"plantingSeason":"string","farmSelected":true,"farmSelectedDesc":"string","createTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListAdoptionProjectCropVO](#schemaresultlistadoptionprojectcropvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteByProjectId"></a>

## DELETE 根据项目ID删除所有作物关联

DELETE /adoption/project-crops/project/{projectId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcountProjectsByCropId"></a>

## GET 根据作物ID查询关联的项目数量

GET /adoption/project-crops/crop/{cropId}/count

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|cropId|path|integer(int64)| 是 |作物ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckProjectCropExists"></a>

## GET 检查项目作物关联是否存在

GET /adoption/project-crops/check

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|query|integer(int64)| 是 |项目ID|
|cropId|query|integer(int64)| 是 |作物ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/认养套餐管理

<a id="opIdgetPackageById"></a>

## GET 根据ID查询套餐详情

GET /adoption/packages/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |套餐ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"projectId":0,"name":"string","unitCount":0,"seasonCount":0,"price":0,"originalPrice":0,"harvestCount":0,"discountAmount":0,"discountRate":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultAdoptionPackageVO](#schemaresultadoptionpackagevo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdupdatePackage"></a>

## PUT 更新认养套餐

PUT /adoption/packages/{id}

> Body 请求参数

```json
{
  "name": "string",
  "unitCount": 1,
  "seasonCount": 1,
  "price": 0.01,
  "originalPrice": 0.01,
  "harvestCount": 100
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |套餐ID|
|body|body|[AdoptionPackageCreateDTO](#schemaadoptionpackagecreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeletePackage"></a>

## DELETE 删除认养套餐

DELETE /adoption/packages/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |套餐ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreatePackage"></a>

## POST 创建认养套餐

POST /adoption/packages

> Body 请求参数

```json
{
  "name": "string",
  "unitCount": 1,
  "seasonCount": 1,
  "price": 0.01,
  "originalPrice": 0.01,
  "harvestCount": 100
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|query|integer(int64)| 是 |项目ID|
|body|body|[AdoptionPackageCreateDTO](#schemaadoptionpackagecreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchCreatePackages"></a>

## POST 批量创建认养套餐

POST /adoption/packages/batch

> Body 请求参数

```json
[
  {
    "name": "string",
    "unitCount": 1,
    "seasonCount": 1,
    "price": 0.01,
    "originalPrice": 0.01,
    "harvestCount": 100
  }
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|query|integer(int64)| 是 |项目ID|
|body|body|[AdoptionPackageCreateDTO](#schemaadoptionpackagecreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdbatchDeletePackages"></a>

## DELETE 批量删除认养套餐

DELETE /adoption/packages/batch

> Body 请求参数

```json
[
  0
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[integer]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetPackagesByProjectId"></a>

## GET 根据项目ID查询套餐列表

GET /adoption/packages/project/{projectId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"projectId":0,"name":"string","unitCount":0,"seasonCount":0,"price":0,"originalPrice":0,"harvestCount":0,"discountAmount":0,"discountRate":0,"createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListAdoptionPackageVO](#schemaresultlistadoptionpackagevo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteByProjectId_1"></a>

## DELETE 根据项目ID删除所有套餐

DELETE /adoption/packages/project/{projectId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckPackageNameExists"></a>

## GET 检查套餐名称是否存在

GET /adoption/packages/check-name

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|query|integer(int64)| 是 |项目ID|
|name|query|string| 是 |套餐名称|
|excludeId|query|integer(int64)| 否 |排除的套餐ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 认养项目管理/订单管理

<a id="opIdgetOrderPage"></a>

## GET 分页查询订单列表

GET /orders

支持多条件筛选查询订单

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|pageNum|query|integer(int32)| 否 |页码|
|pageSize|query|integer(int32)| 否 |页大小|
|userId|query|integer(int64)| 否 |用户ID|
|orderNo|query|string| 否 |订单编号|
|status|query|string| 否 |订单状态|
|projectId|query|integer(int64)| 否 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"size":0,"total":0,"records":[{"id":0,"orderNo":"string","userId":0,"userName":"string","projectId":0,"projectName":"string","farmName":"string","packageId":0,"packageName":"string","amount":0,"status":"string","statusDesc":"string","payTime":"2019-08-24T14:15:22Z","addressId":0,"address":"string","recipientName":"string","recipientPhone":"string","remark":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"current":0,"pages":0},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultIPageOrderVO](#schemaresultipageordervo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateOrder"></a>

## POST 创建订单

POST /orders

用户创建新订单

> Body 请求参数

```json
{
  "projectId": 1,
  "packageId": 1,
  "amount": 299,
  "addressId": 1,
  "remark": "请尽快发货"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|query|integer(int64)| 是 |用户ID|
|body|body|[OrderCreateDTO](#schemaordercreatedto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdrefundOrder"></a>

## POST 退款订单

POST /orders/{id}/refund

管理员退款订单

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |订单ID|
|userId|query|integer(int64)| 是 |操作用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdpayOrder"></a>

## POST 支付订单

POST /orders/{id}/pay

用户支付订单

> Body 请求参数

```json
{
  "paymentMethod": "alipay",
  "paymentAmount": 299,
  "paymentPassword": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |订单ID|
|userId|query|integer(int64)| 是 |用户ID|
|body|body|[OrderPayDTO](#schemaorderpaydto)| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcancelOrder"></a>

## POST 取消订单

POST /orders/{id}/cancel

用户取消订单

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |订单ID|
|userId|query|integer(int64)| 是 |用户ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultVoid](#schemaresultvoid)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetOrderById"></a>

## GET 查询订单详情

GET /orders/{id}

根据订单ID查询详细信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |订单ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"orderNo":"string","userId":0,"userName":"string","projectId":0,"projectName":"string","farmName":"string","packageId":0,"packageName":"string","amount":0,"status":"string","statusDesc":"string","payTime":"2019-08-24T14:15:22Z","addressId":0,"address":"string","recipientName":"string","recipientPhone":"string","remark":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultOrderVO](#schemaresultordervo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetOrdersByUserId"></a>

## GET 查询用户订单列表

GET /orders/user/{userId}

根据用户ID查询订单列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |用户ID|
|status|query|string| 否 |订单状态|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"orderNo":"string","userId":0,"userName":"string","projectId":0,"projectName":"string","farmName":"string","packageId":0,"packageName":"string","amount":0,"status":"string","statusDesc":"string","payTime":"2019-08-24T14:15:22Z","addressId":0,"address":"string","recipientName":"string","recipientPhone":"string","remark":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListOrderVO](#schemaresultlistordervo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetOrdersByProjectId"></a>

## GET 查询项目订单列表

GET /orders/project/{projectId}

根据项目ID查询订单列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|projectId|path|integer(int64)| 是 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"orderNo":"string","userId":0,"userName":"string","projectId":0,"projectName":"string","farmName":"string","packageId":0,"packageName":"string","amount":0,"status":"string","statusDesc":"string","payTime":"2019-08-24T14:15:22Z","addressId":0,"address":"string","recipientName":"string","recipientPhone":"string","remark":"string","createTime":"2019-08-24T14:15:22Z","updateTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListOrderVO](#schemaresultlistordervo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcountOrders"></a>

## GET 统计订单数量

GET /orders/count

统计符合条件的订单数量

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|query|integer(int64)| 否 |用户ID|
|status|query|string| 否 |订单状态|
|projectId|query|integer(int64)| 否 |项目ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":0,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLong](#schemaresultlong)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcheckOrderNoExists"></a>

## GET 检查订单编号是否存在

GET /orders/check-order-no

验证订单编号唯一性

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|orderNo|query|string| 是 |订单编号|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":true,"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultBoolean](#schemaresultboolean)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 数据模型

<h2 id="tocS_ResultObject">ResultObject</h2>

<a id="schemaresultobject"></a>
<a id="schema_ResultObject"></a>
<a id="tocSresultobject"></a>
<a id="tocsresultobject"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|object|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_UserUpdateDTO">UserUpdateDTO</h2>

<a id="schemauserupdatedto"></a>
<a id="schema_UserUpdateDTO"></a>
<a id="tocSuserupdatedto"></a>
<a id="tocsuserupdatedto"></a>

```json
{
  "nickname": "string",
  "phone": "string",
  "email": "string",
  "avatar": "string",
  "gender": 2,
  "birthday": "2019-08-24",
  "address": "string",
  "realName": "string",
  "idCard": "string",
  "status": 1
}

```

用户更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|nickname|string|false|none||昵称|
|phone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatar|string|false|none||头像URL|
|gender|integer(int32)|false|none||性别：0未知，1男，2女|
|birthday|string(date)|false|none||生日|
|address|string|false|none||地址|
|realName|string|false|none||真实姓名|
|idCard|string|false|none||身份证号|
|status|integer(int32)|false|none||状态：0禁用，1启用|

<h2 id="tocS_ResultBoolean">ResultBoolean</h2>

<a id="schemaresultboolean"></a>
<a id="schema_ResultBoolean"></a>
<a id="tocSresultboolean"></a>
<a id="tocsresultboolean"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": true,
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|boolean|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_UserPasswordDTO">UserPasswordDTO</h2>

<a id="schemauserpassworddto"></a>
<a id="schema_UserPasswordDTO"></a>
<a id="tocSuserpassworddto"></a>
<a id="tocsuserpassworddto"></a>

```json
{
  "oldPassword": "string",
  "newPassword": "string",
  "confirmPassword": "string"
}

```

用户密码修改DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|oldPassword|string|true|none||原密码|
|newPassword|string|true|none||新密码|
|confirmPassword|string|true|none||确认新密码|

<h2 id="tocS_AddressUpdateDTO">AddressUpdateDTO</h2>

<a id="schemaaddressupdatedto"></a>
<a id="schema_AddressUpdateDTO"></a>
<a id="tocSaddressupdatedto"></a>
<a id="tocsaddressupdatedto"></a>

```json
{
  "contactName": "string",
  "contactPhone": "string",
  "provinceCode": "string",
  "provinceName": "string",
  "cityCode": "string",
  "cityName": "string",
  "districtCode": "string",
  "districtName": "string",
  "detailAddress": "string",
  "addressType": 1,
  "isDefault": 1,
  "longitude": -180,
  "latitude": -90
}

```

地址更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|contactName|string|false|none||联系人姓名|
|contactPhone|string|false|none||联系人电话|
|provinceCode|string|false|none||省份编码|
|provinceName|string|false|none||省份名称|
|cityCode|string|false|none||城市编码|
|cityName|string|false|none||城市名称|
|districtCode|string|false|none||区县编码|
|districtName|string|false|none||区县名称|
|detailAddress|string|false|none||详细地址|
|addressType|integer(int32)|false|none||地址类型：1家庭，2公司，3其他|
|isDefault|integer(int32)|false|none||是否默认地址：0否，1是|
|longitude|number|false|none||经度|
|latitude|number|false|none||纬度|

<h2 id="tocS_ResultVoid">ResultVoid</h2>

<a id="schemaresultvoid"></a>
<a id="schema_ResultVoid"></a>
<a id="tocSresultvoid"></a>
<a id="tocsresultvoid"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|object|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_SystemConfigUpdateDTO">SystemConfigUpdateDTO</h2>

<a id="schemasystemconfigupdatedto"></a>
<a id="schema_SystemConfigUpdateDTO"></a>
<a id="tocSsystemconfigupdatedto"></a>
<a id="tocssystemconfigupdatedto"></a>

```json
{
  "configValue": "智慧农场认养平台",
  "description": "系统名称配置"
}

```

系统配置更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|configValue|string|true|none||配置值|
|description|string|false|none||配置描述|

<h2 id="tocS_RoleUpdateDTO">RoleUpdateDTO</h2>

<a id="schemaroleupdatedto"></a>
<a id="schema_RoleUpdateDTO"></a>
<a id="tocSroleupdatedto"></a>
<a id="tocsroleupdatedto"></a>

```json
{
  "id": 0,
  "roleName": "string",
  "roleCode": "string",
  "description": "string",
  "status": 0,
  "permissionIds": [
    0
  ]
}

```

角色更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||角色ID|
|roleName|string|true|none||角色名称|
|roleCode|string|true|none||角色编码|
|description|string|false|none||角色描述|
|status|integer(int32)|true|none||状态：0禁用，1启用|
|permissionIds|[integer]|false|none||权限ID列表|

<h2 id="tocS_CropUpdateDTO">CropUpdateDTO</h2>

<a id="schemacropupdatedto"></a>
<a id="schema_CropUpdateDTO"></a>
<a id="tocScropupdatedto"></a>
<a id="tocscropupdatedto"></a>

```json
{
  "id": 0,
  "name": "string",
  "categoryId": 0,
  "image": "string",
  "description": "string",
  "growthPeriod": 1,
  "plantingSeason": "string",
  "cultivationMethod": "string"
}

```

农产品更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||农产品ID|
|name|string|true|none||农产品名称|
|categoryId|integer(int64)|true|none||分类ID|
|image|string|false|none||图片URL|
|description|string|false|none||描述|
|growthPeriod|integer(int32)|false|none||生长周期（天）|
|plantingSeason|string|false|none||适宜种植季节|
|cultivationMethod|string|false|none||种植方法|

<h2 id="tocS_CropCategoryUpdateDTO">CropCategoryUpdateDTO</h2>

<a id="schemacropcategoryupdatedto"></a>
<a id="schema_CropCategoryUpdateDTO"></a>
<a id="tocScropcategoryupdatedto"></a>
<a id="tocscropcategoryupdatedto"></a>

```json
{
  "id": 0,
  "name": "string",
  "parentId": 0,
  "sort": 999
}

```

农产品分类更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||分类ID|
|name|string|true|none||分类名称|
|parentId|integer(int64)|false|none||父分类ID|
|sort|integer(int32)|false|none||排序|

<h2 id="tocS_PlotUpdateDTO">PlotUpdateDTO</h2>

<a id="schemaplotupdatedto"></a>
<a id="schema_PlotUpdateDTO"></a>
<a id="tocSplotupdatedto"></a>
<a id="tocsplotupdatedto"></a>

```json
{
  "id": 0,
  "farmId": 0,
  "name": "string",
  "area": 0.01,
  "location": "string",
  "soilType": "string",
  "waterSource": "string",
  "status": "string",
  "imageUrls": [
    "string"
  ]
}

```

地块更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||地块ID|
|farmId|integer(int64)|true|none||农场ID|
|name|string|true|none||地块名称|
|area|number|true|none||面积（平方米）|
|location|string|false|none||位置描述|
|soilType|string|false|none||土壤类型|
|waterSource|string|false|none||水源情况|
|status|string|true|none||状态：available可用，in_use使用中，unavailable不可用|
|imageUrls|[string]|false|none||地块图片URL列表|

<h2 id="tocS_PlantingRecordCreateDTO">PlantingRecordCreateDTO</h2>

<a id="schemaplantingrecordcreatedto"></a>
<a id="schema_PlantingRecordCreateDTO"></a>
<a id="tocSplantingrecordcreatedto"></a>
<a id="tocsplantingrecordcreatedto"></a>

```json
{
  "unitId": 0,
  "recordTime": "2019-08-24",
  "content": "string",
  "imageList": [
    "string"
  ]
}

```

种植记录创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|unitId|integer(int64)|true|none||种植单元ID|
|recordTime|string(date)|true|none||记录时间|
|content|string|true|none||记录内容|
|imageList|[string]|false|none||图片URL列表|

<h2 id="tocS_PermissionUpdateDTO">PermissionUpdateDTO</h2>

<a id="schemapermissionupdatedto"></a>
<a id="schema_PermissionUpdateDTO"></a>
<a id="tocSpermissionupdatedto"></a>
<a id="tocspermissionupdatedto"></a>

```json
{
  "id": 0,
  "parentId": 0,
  "permissionName": "string",
  "permissionCode": "string",
  "permissionType": 1,
  "component": "string",
  "path": "string",
  "icon": "string",
  "sort": 0,
  "status": 0
}

```

权限更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||权限ID|
|parentId|integer(int64)|false|none||父权限ID|
|permissionName|string|true|none||权限名称|
|permissionCode|string|true|none||权限编码|
|permissionType|integer(int32)|true|none||权限类型：1目录，2菜单，3按钮，4接口|
|component|string|false|none||前端组件路径|
|path|string|false|none||前端路由路径|
|icon|string|false|none||图标|
|sort|integer(int32)|false|none||排序|
|status|integer(int32)|true|none||状态：0禁用，1启用|

<h2 id="tocS_FarmUpdateDTO">FarmUpdateDTO</h2>

<a id="schemafarmupdatedto"></a>
<a id="schema_FarmUpdateDTO"></a>
<a id="tocSfarmupdatedto"></a>
<a id="tocsfarmupdatedto"></a>

```json
{
  "id": 0,
  "farmName": "string",
  "farmCode": "string",
  "description": "string",
  "province": "string",
  "city": "string",
  "district": "string",
  "address": "string",
  "longitude": -180,
  "latitude": -90,
  "totalArea": 0.01,
  "contactPerson": "string",
  "contactPhone": "string",
  "businessLicense": "string",
  "ownerId": 0,
  "imageUrls": [
    "string"
  ]
}

```

农场更新DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||农场ID|
|farmName|string|true|none||农场名称|
|farmCode|string|true|none||农场编码|
|description|string|false|none||农场描述|
|province|string|true|none||省份|
|city|string|true|none||城市|
|district|string|true|none||区县|
|address|string|true|none||详细地址|
|longitude|number|false|none||经度|
|latitude|number|false|none||纬度|
|totalArea|number|true|none||总面积(平方米)|
|contactPerson|string|true|none||联系人|
|contactPhone|string|true|none||联系电话|
|businessLicense|string|false|none||营业执照|
|ownerId|integer(int64)|true|none||农场负责人用户ID|
|imageUrls|[string]|false|none||农场图片URL列表|

<h2 id="tocS_FarmAuditDTO">FarmAuditDTO</h2>

<a id="schemafarmauditdto"></a>
<a id="schema_FarmAuditDTO"></a>
<a id="tocSfarmauditdto"></a>
<a id="tocsfarmauditdto"></a>

```json
{
  "id": 0,
  "auditResult": "string",
  "auditRemark": "string",
  "auditUserId": 0
}

```

农场审核DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|true|none||农场ID|
|auditResult|string|true|none||审核结果：1通过，3失败|
|auditRemark|string|false|none||审核备注|
|auditUserId|integer(int64)|true|none||审核人ID|

<h2 id="tocS_AdoptionProjectUpdateDTO">AdoptionProjectUpdateDTO</h2>

<a id="schemaadoptionprojectupdatedto"></a>
<a id="schema_AdoptionProjectUpdateDTO"></a>
<a id="tocSadoptionprojectupdatedto"></a>
<a id="tocsadoptionprojectupdatedto"></a>

```json
{
  "name": "string",
  "description": "string",
  "unitCount": 1,
  "unitArea": 0.01,
  "adoptionPrice": 0.01,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|false|none||none|
|description|string|false|none||none|
|unitCount|integer(int32)|false|none||none|
|unitArea|number|false|none||none|
|adoptionPrice|number|false|none||none|
|startTime|string(date)|false|none||none|
|endTime|string(date)|false|none||none|

<h2 id="tocS_AdoptionPackageCreateDTO">AdoptionPackageCreateDTO</h2>

<a id="schemaadoptionpackagecreatedto"></a>
<a id="schema_AdoptionPackageCreateDTO"></a>
<a id="tocSadoptionpackagecreatedto"></a>
<a id="tocsadoptionpackagecreatedto"></a>

```json
{
  "name": "string",
  "unitCount": 1,
  "seasonCount": 1,
  "price": 0.01,
  "originalPrice": 0.01,
  "harvestCount": 100
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|true|none||none|
|unitCount|integer(int32)|true|none||none|
|seasonCount|integer(int32)|true|none||none|
|price|number|true|none||none|
|originalPrice|number|false|none||none|
|harvestCount|integer(int32)|false|none||none|

<h2 id="tocS_UserCreateDTO">UserCreateDTO</h2>

<a id="schemausercreatedto"></a>
<a id="schema_UserCreateDTO"></a>
<a id="tocSusercreatedto"></a>
<a id="tocsusercreatedto"></a>

```json
{
  "username": "string",
  "nickname": "string",
  "password": "string",
  "phone": "string",
  "email": "string",
  "avatar": "string",
  "gender": 2,
  "birthday": "2019-08-24",
  "address": "string",
  "realName": "string",
  "idCard": "string",
  "status": 1
}

```

用户创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|username|string|true|none||用户名|
|nickname|string|false|none||昵称|
|password|string|true|none||密码|
|phone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatar|string|false|none||头像URL|
|gender|integer(int32)|false|none||性别：0未知，1男，2女|
|birthday|string(date)|false|none||生日|
|address|string|false|none||地址|
|realName|string|false|none||真实姓名|
|idCard|string|false|none||身份证号|
|status|integer(int32)|false|none||状态：0禁用，1启用|

<h2 id="tocS_ResultLong">ResultLong</h2>

<a id="schemaresultlong"></a>
<a id="schema_ResultLong"></a>
<a id="tocSresultlong"></a>
<a id="tocsresultlong"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": 0,
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|integer(int64)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_AddressCreateDTO">AddressCreateDTO</h2>

<a id="schemaaddresscreatedto"></a>
<a id="schema_AddressCreateDTO"></a>
<a id="tocSaddresscreatedto"></a>
<a id="tocsaddresscreatedto"></a>

```json
{
  "contactName": "string",
  "contactPhone": "string",
  "provinceCode": "string",
  "provinceName": "string",
  "cityCode": "string",
  "cityName": "string",
  "districtCode": "string",
  "districtName": "string",
  "detailAddress": "string",
  "addressType": 1,
  "isDefault": 1,
  "longitude": -180,
  "latitude": -90
}

```

地址创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|contactName|string|true|none||联系人姓名|
|contactPhone|string|true|none||联系人电话|
|provinceCode|string|false|none||省份编码|
|provinceName|string|false|none||省份名称|
|cityCode|string|false|none||城市编码|
|cityName|string|false|none||城市名称|
|districtCode|string|false|none||区县编码|
|districtName|string|false|none||区县名称|
|detailAddress|string|true|none||详细地址|
|addressType|integer(int32)|false|none||地址类型：1家庭，2公司，3其他|
|isDefault|integer(int32)|false|none||是否默认地址：0否，1是|
|longitude|number|false|none||经度|
|latitude|number|false|none||纬度|

<h2 id="tocS_NotificationCreateDTO">NotificationCreateDTO</h2>

<a id="schemanotificationcreatedto"></a>
<a id="schema_NotificationCreateDTO"></a>
<a id="tocSnotificationcreatedto"></a>
<a id="tocsnotificationcreatedto"></a>

```json
{
  "userId": 0,
  "title": "订单状态更新",
  "content": "您的订单已完成支付",
  "type": "order",
  "relatedId": 123
}

```

消息通知创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|userId|integer(int64)|true|none||用户ID|
|title|string|true|none||通知标题|
|content|string|true|none||通知内容|
|type|string|true|none||通知类型|
|relatedId|integer(int64)|false|none||关联ID|

#### 枚举值

|属性|值|
|---|---|
|type|system|
|type|order|
|type|harvest|
|type|logistics|

<h2 id="tocS_SystemConfigCreateDTO">SystemConfigCreateDTO</h2>

<a id="schemasystemconfigcreatedto"></a>
<a id="schema_SystemConfigCreateDTO"></a>
<a id="tocSsystemconfigcreatedto"></a>
<a id="tocssystemconfigcreatedto"></a>

```json
{
  "configKey": "system.name",
  "configValue": "智慧农场认养平台",
  "description": "系统名称配置"
}

```

系统配置创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|configKey|string|true|none||配置键|
|configValue|string|true|none||配置值|
|description|string|false|none||配置描述|

<h2 id="tocS_ResultMapStringString">ResultMapStringString</h2>

<a id="schemaresultmapstringstring"></a>
<a id="schema_ResultMapStringString"></a>
<a id="tocSresultmapstringstring"></a>
<a id="tocsresultmapstringstring"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "property1": "string",
    "property2": "string"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|object|false|none||响应数据|
|» **additionalProperties**|string|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_RoleCreateDTO">RoleCreateDTO</h2>

<a id="schemarolecreatedto"></a>
<a id="schema_RoleCreateDTO"></a>
<a id="tocSrolecreatedto"></a>
<a id="tocsrolecreatedto"></a>

```json
{
  "roleName": "string",
  "roleCode": "string",
  "description": "string",
  "status": 0,
  "permissionIds": [
    0
  ]
}

```

角色创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|roleName|string|true|none||角色名称|
|roleCode|string|true|none||角色编码|
|description|string|false|none||角色描述|
|status|integer(int32)|true|none||状态：0禁用，1启用|
|permissionIds|[integer]|false|none||权限ID列表|

<h2 id="tocS_FarmCropCreateDTO">FarmCropCreateDTO</h2>

<a id="schemafarmcropcreatedto"></a>
<a id="schema_FarmCropCreateDTO"></a>
<a id="tocSfarmcropcreatedto"></a>
<a id="tocsfarmcropcreatedto"></a>

```json
{
  "farmId": 0,
  "cropIds": [
    0
  ],
  "status": "string"
}

```

农场农产品关联创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|farmId|integer(int64)|true|none||农场ID|
|cropIds|[integer]|true|none||农产品ID列表|
|status|string|true|none||状态：active正常，inactive下架|

<h2 id="tocS_CropCreateDTO">CropCreateDTO</h2>

<a id="schemacropcreatedto"></a>
<a id="schema_CropCreateDTO"></a>
<a id="tocScropcreatedto"></a>
<a id="tocscropcreatedto"></a>

```json
{
  "name": "string",
  "categoryId": 0,
  "image": "string",
  "description": "string",
  "growthPeriod": 1,
  "plantingSeason": "string",
  "cultivationMethod": "string"
}

```

农产品创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|true|none||农产品名称|
|categoryId|integer(int64)|true|none||分类ID|
|image|string|false|none||图片URL|
|description|string|false|none||描述|
|growthPeriod|integer(int32)|false|none||生长周期（天）|
|plantingSeason|string|false|none||适宜种植季节|
|cultivationMethod|string|false|none||种植方法|

<h2 id="tocS_CropCategoryCreateDTO">CropCategoryCreateDTO</h2>

<a id="schemacropcategorycreatedto"></a>
<a id="schema_CropCategoryCreateDTO"></a>
<a id="tocScropcategorycreatedto"></a>
<a id="tocscropcategorycreatedto"></a>

```json
{
  "name": "string",
  "parentId": 0,
  "sort": 999
}

```

农产品分类创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|name|string|true|none||分类名称|
|parentId|integer(int64)|false|none||父分类ID|
|sort|integer(int32)|false|none||排序|

<h2 id="tocS_PlotCreateDTO">PlotCreateDTO</h2>

<a id="schemaplotcreatedto"></a>
<a id="schema_PlotCreateDTO"></a>
<a id="tocSplotcreatedto"></a>
<a id="tocsplotcreatedto"></a>

```json
{
  "farmId": 0,
  "name": "string",
  "area": 0.01,
  "location": "string",
  "soilType": "string",
  "waterSource": "string",
  "status": "string",
  "imageUrls": [
    "string"
  ]
}

```

地块创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|farmId|integer(int64)|true|none||农场ID|
|name|string|true|none||地块名称|
|area|number|true|none||面积（平方米）|
|location|string|false|none||位置描述|
|soilType|string|false|none||土壤类型|
|waterSource|string|false|none||水源情况|
|status|string|true|none||状态：available可用，in_use使用中，unavailable不可用|
|imageUrls|[string]|false|none||地块图片URL列表|

<h2 id="tocS_PlantingUnitCreateDTO">PlantingUnitCreateDTO</h2>

<a id="schemaplantingunitcreatedto"></a>
<a id="schema_PlantingUnitCreateDTO"></a>
<a id="tocSplantingunitcreatedto"></a>
<a id="tocsplantingunitcreatedto"></a>

```json
{
  "adoptionId": 0,
  "unitNo": "string",
  "cropId": 0,
  "status": "planting"
}

```

种植单元创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|adoptionId|integer(int64)|true|none||认养记录ID|
|unitNo|string|true|none||单元编号|
|cropId|integer(int64)|true|none||农产品ID|
|status|string|false|none||状态|

<h2 id="tocS_AdoptionRecordCreateDTO">AdoptionRecordCreateDTO</h2>

<a id="schemaadoptionrecordcreatedto"></a>
<a id="schema_AdoptionRecordCreateDTO"></a>
<a id="tocSadoptionrecordcreatedto"></a>
<a id="tocsadoptionrecordcreatedto"></a>

```json
{
  "orderId": 0,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24",
  "status": "planting"
}

```

认养记录创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|orderId|integer(int64)|true|none||订单ID|
|startTime|string(date)|true|none||认养开始时间|
|endTime|string(date)|true|none||认养结束时间|
|status|string|false|none||状态|

<h2 id="tocS_PermissionCreateDTO">PermissionCreateDTO</h2>

<a id="schemapermissioncreatedto"></a>
<a id="schema_PermissionCreateDTO"></a>
<a id="tocSpermissioncreatedto"></a>
<a id="tocspermissioncreatedto"></a>

```json
{
  "parentId": 0,
  "permissionName": "string",
  "permissionCode": "string",
  "permissionType": 1,
  "component": "string",
  "path": "string",
  "icon": "string",
  "sort": 0,
  "status": 0
}

```

权限创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|parentId|integer(int64)|false|none||父权限ID|
|permissionName|string|true|none||权限名称|
|permissionCode|string|true|none||权限编码|
|permissionType|integer(int32)|true|none||权限类型：1目录，2菜单，3按钮，4接口|
|component|string|false|none||前端组件路径|
|path|string|false|none||前端路由路径|
|icon|string|false|none||图标|
|sort|integer(int32)|false|none||排序|
|status|integer(int32)|true|none||状态：0禁用，1启用|

<h2 id="tocS_OrderCreateDTO">OrderCreateDTO</h2>

<a id="schemaordercreatedto"></a>
<a id="schema_OrderCreateDTO"></a>
<a id="tocSordercreatedto"></a>
<a id="tocsordercreatedto"></a>

```json
{
  "projectId": 1,
  "packageId": 1,
  "amount": 299,
  "addressId": 1,
  "remark": "请尽快发货"
}

```

订单创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|projectId|integer(int64)|true|none||项目ID|
|packageId|integer(int64)|true|none||套餐ID|
|amount|number|true|none||订单金额|
|addressId|integer(int64)|true|none||收货地址ID|
|remark|string|false|none||备注|

<h2 id="tocS_OrderPayDTO">OrderPayDTO</h2>

<a id="schemaorderpaydto"></a>
<a id="schema_OrderPayDTO"></a>
<a id="tocSorderpaydto"></a>
<a id="tocsorderpaydto"></a>

```json
{
  "paymentMethod": "alipay",
  "paymentAmount": 299,
  "paymentPassword": "123456"
}

```

订单支付DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|paymentMethod|string|true|none||支付方式|
|paymentAmount|number|true|none||支付金额|
|paymentPassword|string|false|none||支付密码|

#### 枚举值

|属性|值|
|---|---|
|paymentMethod|alipay|
|paymentMethod|wechat|
|paymentMethod|bank|

<h2 id="tocS_ResultString">ResultString</h2>

<a id="schemaresultstring"></a>
<a id="schema_ResultString"></a>
<a id="tocSresultstring"></a>
<a id="tocsresultstring"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|string|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_LogisticsCreateDTO">LogisticsCreateDTO</h2>

<a id="schemalogisticscreatedto"></a>
<a id="schema_LogisticsCreateDTO"></a>
<a id="tocSlogisticscreatedto"></a>
<a id="tocslogisticscreatedto"></a>

```json
{
  "company": "顺丰快递",
  "recipientName": "张三",
  "recipientPhone": "13800138000",
  "recipientAddress": "北京市朝阳区xxx街道xxx小区"
}

```

物流创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|company|string|true|none||物流公司|
|recipientName|string|true|none||收件人姓名|
|recipientPhone|string|true|none||收件人电话|
|recipientAddress|string|true|none||收件地址|

<h2 id="tocS_LogisticsTrackingCreateDTO">LogisticsTrackingCreateDTO</h2>

<a id="schemalogisticstrackingcreatedto"></a>
<a id="schema_LogisticsTrackingCreateDTO"></a>
<a id="tocSlogisticstrackingcreatedto"></a>
<a id="tocslogisticstrackingcreatedto"></a>

```json
{
  "logisticsId": 0,
  "trackingTime": "2019-08-24T14:15:22Z",
  "location": "北京市朝阳区物流中心",
  "description": "快件已到达北京分拣中心"
}

```

物流跟踪记录创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|logisticsId|integer(int64)|true|none||物流ID|
|trackingTime|string(date-time)|true|none||跟踪时间|
|location|string|true|none||当前位置|
|description|string|true|none||描述信息|

<h2 id="tocS_HarvestRecordCreateDTO">HarvestRecordCreateDTO</h2>

<a id="schemaharvestrecordcreatedto"></a>
<a id="schema_HarvestRecordCreateDTO"></a>
<a id="tocSharvestrecordcreatedto"></a>
<a id="tocsharvestrecordcreatedto"></a>

```json
{
  "adoptionId": 0,
  "harvestTime": "2024-01-01",
  "packageType": "精装礼盒"
}

```

收获记录创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|adoptionId|integer(int64)|true|none||认养记录ID|
|harvestTime|string(date)|true|none||收获时间|
|packageType|string|false|none||包装类型|

<h2 id="tocS_ResultMapStringObject">ResultMapStringObject</h2>

<a id="schemaresultmapstringobject"></a>
<a id="schema_ResultMapStringObject"></a>
<a id="tocSresultmapstringobject"></a>
<a id="tocsresultmapstringobject"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "property1": {},
    "property2": {}
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|object|false|none||响应数据|
|» **additionalProperties**|object|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListMapStringObject">ResultListMapStringObject</h2>

<a id="schemaresultlistmapstringobject"></a>
<a id="schema_ResultListMapStringObject"></a>
<a id="tocSresultlistmapstringobject"></a>
<a id="tocsresultlistmapstringobject"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "property1": {},
      "property2": {}
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[object]|false|none||响应数据|
|» **additionalProperties**|object|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_FarmCreateDTO">FarmCreateDTO</h2>

<a id="schemafarmcreatedto"></a>
<a id="schema_FarmCreateDTO"></a>
<a id="tocSfarmcreatedto"></a>
<a id="tocsfarmcreatedto"></a>

```json
{
  "farmName": "string",
  "farmCode": "string",
  "description": "string",
  "province": "string",
  "city": "string",
  "district": "string",
  "address": "string",
  "longitude": -180,
  "latitude": -90,
  "totalArea": 0.01,
  "contactPerson": "string",
  "contactPhone": "string",
  "businessLicense": "string",
  "ownerId": 0,
  "imageUrls": [
    "string"
  ]
}

```

农场创建DTO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|farmName|string|true|none||农场名称|
|farmCode|string|true|none||农场编码|
|description|string|false|none||农场描述|
|province|string|true|none||省份|
|city|string|true|none||城市|
|district|string|true|none||区县|
|address|string|true|none||详细地址|
|longitude|number|false|none||经度|
|latitude|number|false|none||纬度|
|totalArea|number|true|none||总面积(平方米)|
|contactPerson|string|true|none||联系人|
|contactPhone|string|true|none||联系电话|
|businessLicense|string|false|none||营业执照|
|ownerId|integer(int64)|true|none||农场负责人用户ID|
|imageUrls|[string]|false|none||农场图片URL列表|

<h2 id="tocS_AdoptionProjectCreateDTO">AdoptionProjectCreateDTO</h2>

<a id="schemaadoptionprojectcreatedto"></a>
<a id="schema_AdoptionProjectCreateDTO"></a>
<a id="tocSadoptionprojectcreatedto"></a>
<a id="tocsadoptionprojectcreatedto"></a>

```json
{
  "farmId": 0,
  "name": "string",
  "description": "string",
  "type": "string",
  "plotId": 0,
  "unitCount": 1,
  "unitArea": 0.01,
  "adoptionPrice": 0.01,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24",
  "imageUrls": [
    "string"
  ],
  "cropIds": [
    0
  ],
  "farmSelectedCropIds": [
    0
  ],
  "packages": [
    {
      "name": "string",
      "unitCount": 1,
      "seasonCount": 1,
      "price": 0.01,
      "originalPrice": 0.01,
      "harvestCount": 100
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|farmId|integer(int64)|true|none||none|
|name|string|true|none||none|
|description|string|false|none||none|
|type|string|true|none||none|
|plotId|integer(int64)|true|none||none|
|unitCount|integer(int32)|true|none||none|
|unitArea|number|true|none||none|
|adoptionPrice|number|true|none||none|
|startTime|string(date)|true|none||none|
|endTime|string(date)|true|none||none|
|imageUrls|[string]|false|none||none|
|cropIds|[integer]|true|none||none|
|farmSelectedCropIds|[integer]|false|none||none|
|packages|[[AdoptionPackageCreateDTO](#schemaadoptionpackagecreatedto)]|true|none||none|

<h2 id="tocS_AdoptionProjectAuditDTO">AdoptionProjectAuditDTO</h2>

<a id="schemaadoptionprojectauditdto"></a>
<a id="schema_AdoptionProjectAuditDTO"></a>
<a id="tocSadoptionprojectauditdto"></a>
<a id="tocsadoptionprojectauditdto"></a>

```json
{
  "status": "string",
  "auditRemark": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|status|string|true|none||none|
|auditRemark|string|false|none||none|

<h2 id="tocS_ProjectCropCreateDTO">ProjectCropCreateDTO</h2>

<a id="schemaprojectcropcreatedto"></a>
<a id="schema_ProjectCropCreateDTO"></a>
<a id="tocSprojectcropcreatedto"></a>
<a id="tocsprojectcropcreatedto"></a>

```json
{
  "projectId": 0,
  "cropId": 0,
  "farmSelected": true
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|projectId|integer(int64)|true|none||none|
|cropId|integer(int64)|true|none||none|
|farmSelected|boolean|false|none||none|

<h2 id="tocS_ResultUserDetailVO">ResultUserDetailVO</h2>

<a id="schemaresultuserdetailvo"></a>
<a id="schema_ResultUserDetailVO"></a>
<a id="tocSresultuserdetailvo"></a>
<a id="tocsresultuserdetailvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "username": "string",
    "nickname": "string",
    "phone": "string",
    "email": "string",
    "avatar": "string",
    "gender": 0,
    "genderDesc": "string",
    "birthday": "2019-08-24",
    "address": "string",
    "realName": "string",
    "idCard": "string",
    "status": 0,
    "statusDesc": "string",
    "loginTime": "2019-08-24T14:15:22Z",
    "loginIp": "string",
    "roles": [
      {
        "id": 0,
        "roleName": "string",
        "roleCode": "string",
        "description": "string",
        "status": 0,
        "statusDesc": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "permissions": [
      "string"
    ],
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[UserDetailVO](#schemauserdetailvo)|false|none||用户详情VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_RoleVO">RoleVO</h2>

<a id="schemarolevo"></a>
<a id="schema_RoleVO"></a>
<a id="tocSrolevo"></a>
<a id="tocsrolevo"></a>

```json
{
  "id": 0,
  "roleName": "string",
  "roleCode": "string",
  "description": "string",
  "status": 0,
  "statusDesc": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

角色VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||角色ID|
|roleName|string|false|none||角色名称|
|roleCode|string|false|none||角色编码|
|description|string|false|none||角色描述|
|status|integer(int32)|false|none||状态：0禁用，1启用|
|statusDesc|string|false|none||状态描述|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_UserDetailVO">UserDetailVO</h2>

<a id="schemauserdetailvo"></a>
<a id="schema_UserDetailVO"></a>
<a id="tocSuserdetailvo"></a>
<a id="tocsuserdetailvo"></a>

```json
{
  "id": 0,
  "username": "string",
  "nickname": "string",
  "phone": "string",
  "email": "string",
  "avatar": "string",
  "gender": 0,
  "genderDesc": "string",
  "birthday": "2019-08-24",
  "address": "string",
  "realName": "string",
  "idCard": "string",
  "status": 0,
  "statusDesc": "string",
  "loginTime": "2019-08-24T14:15:22Z",
  "loginIp": "string",
  "roles": [
    {
      "id": 0,
      "roleName": "string",
      "roleCode": "string",
      "description": "string",
      "status": 0,
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "permissions": [
    "string"
  ],
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

用户详情VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||用户ID|
|username|string|false|none||用户名|
|nickname|string|false|none||昵称|
|phone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatar|string|false|none||头像URL|
|gender|integer(int32)|false|none||性别：0未知，1男，2女|
|genderDesc|string|false|none||性别描述|
|birthday|string(date)|false|none||生日|
|address|string|false|none||地址|
|realName|string|false|none||真实姓名|
|idCard|string|false|none||身份证号|
|status|integer(int32)|false|none||状态：0禁用，1启用|
|statusDesc|string|false|none||状态描述|
|loginTime|string(date-time)|false|none||最后登录时间|
|loginIp|string|false|none||最后登录IP|
|roles|[[RoleVO](#schemarolevo)]|false|none||用户角色列表|
|permissions|[string]|false|none||用户权限列表|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_AddressVO">AddressVO</h2>

<a id="schemaaddressvo"></a>
<a id="schema_AddressVO"></a>
<a id="tocSaddressvo"></a>
<a id="tocsaddressvo"></a>

```json
{
  "id": 0,
  "userId": 0,
  "contactName": "string",
  "contactPhone": "string",
  "provinceCode": "string",
  "provinceName": "string",
  "cityCode": "string",
  "cityName": "string",
  "districtCode": "string",
  "districtName": "string",
  "detailAddress": "string",
  "fullAddress": "string",
  "addressType": 0,
  "addressTypeDesc": "string",
  "isDefault": 0,
  "isDefaultDesc": "string",
  "longitude": 0,
  "latitude": 0,
  "status": 0,
  "statusDesc": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

地址VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||地址ID|
|userId|integer(int64)|false|none||用户ID|
|contactName|string|false|none||联系人姓名|
|contactPhone|string|false|none||联系人电话|
|provinceCode|string|false|none||省份编码|
|provinceName|string|false|none||省份名称|
|cityCode|string|false|none||城市编码|
|cityName|string|false|none||城市名称|
|districtCode|string|false|none||区县编码|
|districtName|string|false|none||区县名称|
|detailAddress|string|false|none||详细地址|
|fullAddress|string|false|none||完整地址|
|addressType|integer(int32)|false|none||地址类型：1家庭，2公司，3其他|
|addressTypeDesc|string|false|none||地址类型描述|
|isDefault|integer(int32)|false|none||是否默认地址：0否，1是|
|isDefaultDesc|string|false|none||是否默认地址描述|
|longitude|number|false|none||经度|
|latitude|number|false|none||纬度|
|status|integer(int32)|false|none||状态：0禁用，1启用|
|statusDesc|string|false|none||状态描述|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultListAddressVO">ResultListAddressVO</h2>

<a id="schemaresultlistaddressvo"></a>
<a id="schema_ResultListAddressVO"></a>
<a id="tocSresultlistaddressvo"></a>
<a id="tocsresultlistaddressvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "userId": 0,
      "contactName": "string",
      "contactPhone": "string",
      "provinceCode": "string",
      "provinceName": "string",
      "cityCode": "string",
      "cityName": "string",
      "districtCode": "string",
      "districtName": "string",
      "detailAddress": "string",
      "fullAddress": "string",
      "addressType": 0,
      "addressTypeDesc": "string",
      "isDefault": 0,
      "isDefaultDesc": "string",
      "longitude": 0,
      "latitude": 0,
      "status": 0,
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[AddressVO](#schemaaddressvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultAddressVO">ResultAddressVO</h2>

<a id="schemaresultaddressvo"></a>
<a id="schema_ResultAddressVO"></a>
<a id="tocSresultaddressvo"></a>
<a id="tocsresultaddressvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "userId": 0,
    "contactName": "string",
    "contactPhone": "string",
    "provinceCode": "string",
    "provinceName": "string",
    "cityCode": "string",
    "cityName": "string",
    "districtCode": "string",
    "districtName": "string",
    "detailAddress": "string",
    "fullAddress": "string",
    "addressType": 0,
    "addressTypeDesc": "string",
    "isDefault": 0,
    "isDefaultDesc": "string",
    "longitude": 0,
    "latitude": 0,
    "status": 0,
    "statusDesc": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[AddressVO](#schemaaddressvo)|false|none||地址VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultUserVO">PageResultUserVO</h2>

<a id="schemapageresultuservo"></a>
<a id="schema_PageResultUserVO"></a>
<a id="tocSpageresultuservo"></a>
<a id="tocspageresultuservo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "username": "string",
      "nickname": "string",
      "phone": "string",
      "email": "string",
      "avatar": "string",
      "gender": 0,
      "genderDesc": "string",
      "birthday": "2019-08-24",
      "address": "string",
      "realName": "string",
      "idCard": "string",
      "status": 0,
      "statusDesc": "string",
      "loginTime": "2019-08-24T14:15:22Z",
      "loginIp": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[UserVO](#schemauservo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultUserVO">ResultPageResultUserVO</h2>

<a id="schemaresultpageresultuservo"></a>
<a id="schema_ResultPageResultUserVO"></a>
<a id="tocSresultpageresultuservo"></a>
<a id="tocsresultpageresultuservo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "username": "string",
        "nickname": "string",
        "phone": "string",
        "email": "string",
        "avatar": "string",
        "gender": 0,
        "genderDesc": "string",
        "birthday": "2019-08-24",
        "address": "string",
        "realName": "string",
        "idCard": "string",
        "status": 0,
        "statusDesc": "string",
        "loginTime": "2019-08-24T14:15:22Z",
        "loginIp": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultUserVO](#schemapageresultuservo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_UserVO">UserVO</h2>

<a id="schemauservo"></a>
<a id="schema_UserVO"></a>
<a id="tocSuservo"></a>
<a id="tocsuservo"></a>

```json
{
  "id": 0,
  "username": "string",
  "nickname": "string",
  "phone": "string",
  "email": "string",
  "avatar": "string",
  "gender": 0,
  "genderDesc": "string",
  "birthday": "2019-08-24",
  "address": "string",
  "realName": "string",
  "idCard": "string",
  "status": 0,
  "statusDesc": "string",
  "loginTime": "2019-08-24T14:15:22Z",
  "loginIp": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

用户VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||用户ID|
|username|string|false|none||用户名|
|nickname|string|false|none||昵称|
|phone|string|false|none||手机号|
|email|string|false|none||邮箱|
|avatar|string|false|none||头像URL|
|gender|integer(int32)|false|none||性别：0未知，1男，2女|
|genderDesc|string|false|none||性别描述|
|birthday|string(date)|false|none||生日|
|address|string|false|none||地址|
|realName|string|false|none||真实姓名|
|idCard|string|false|none||身份证号|
|status|integer(int32)|false|none||状态：0禁用，1启用|
|statusDesc|string|false|none||状态描述|
|loginTime|string(date-time)|false|none||最后登录时间|
|loginIp|string|false|none||最后登录IP|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_NotificationVO">NotificationVO</h2>

<a id="schemanotificationvo"></a>
<a id="schema_NotificationVO"></a>
<a id="tocSnotificationvo"></a>
<a id="tocsnotificationvo"></a>

```json
{
  "id": 0,
  "userId": 0,
  "username": "string",
  "title": "string",
  "content": "string",
  "type": "string",
  "typeDesc": "string",
  "isRead": true,
  "relatedId": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

消息通知展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||通知ID|
|userId|integer(int64)|false|none||用户ID|
|username|string|false|none||用户名|
|title|string|false|none||通知标题|
|content|string|false|none||通知内容|
|type|string|false|none||通知类型|
|typeDesc|string|false|none||类型描述|
|isRead|boolean|false|none||是否已读|
|relatedId|integer(int64)|false|none||关联ID|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_PageResultNotificationVO">PageResultNotificationVO</h2>

<a id="schemapageresultnotificationvo"></a>
<a id="schema_PageResultNotificationVO"></a>
<a id="tocSpageresultnotificationvo"></a>
<a id="tocspageresultnotificationvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "userId": 0,
      "username": "string",
      "title": "string",
      "content": "string",
      "type": "string",
      "typeDesc": "string",
      "isRead": true,
      "relatedId": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[NotificationVO](#schemanotificationvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultNotificationVO">ResultPageResultNotificationVO</h2>

<a id="schemaresultpageresultnotificationvo"></a>
<a id="schema_ResultPageResultNotificationVO"></a>
<a id="tocSresultpageresultnotificationvo"></a>
<a id="tocsresultpageresultnotificationvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "userId": 0,
        "username": "string",
        "title": "string",
        "content": "string",
        "type": "string",
        "typeDesc": "string",
        "isRead": true,
        "relatedId": 0,
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultNotificationVO](#schemapageresultnotificationvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultNotificationVO">ResultNotificationVO</h2>

<a id="schemaresultnotificationvo"></a>
<a id="schema_ResultNotificationVO"></a>
<a id="tocSresultnotificationvo"></a>
<a id="tocsresultnotificationvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "userId": 0,
    "username": "string",
    "title": "string",
    "content": "string",
    "type": "string",
    "typeDesc": "string",
    "isRead": true,
    "relatedId": 0,
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[NotificationVO](#schemanotificationvo)|false|none||消息通知展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_OperationLogVO">OperationLogVO</h2>

<a id="schemaoperationlogvo"></a>
<a id="schema_OperationLogVO"></a>
<a id="tocSoperationlogvo"></a>
<a id="tocsoperationlogvo"></a>

```json
{
  "id": 0,
  "userId": 0,
  "username": "string",
  "module": "string",
  "action": "string",
  "description": "string",
  "ipAddress": "string",
  "userAgent": "string",
  "requestData": "string",
  "responseData": "string",
  "status": "string",
  "statusDesc": "string",
  "createTime": "2019-08-24T14:15:22Z"
}

```

操作日志展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||日志ID|
|userId|integer(int64)|false|none||操作用户ID|
|username|string|false|none||操作用户名|
|module|string|false|none||操作模块|
|action|string|false|none||操作动作|
|description|string|false|none||操作描述|
|ipAddress|string|false|none||IP地址|
|userAgent|string|false|none||用户代理|
|requestData|string|false|none||请求数据|
|responseData|string|false|none||响应数据|
|status|string|false|none||操作状态|
|statusDesc|string|false|none||状态描述|
|createTime|string(date-time)|false|none||创建时间|

<h2 id="tocS_PageResultOperationLogVO">PageResultOperationLogVO</h2>

<a id="schemapageresultoperationlogvo"></a>
<a id="schema_PageResultOperationLogVO"></a>
<a id="tocSpageresultoperationlogvo"></a>
<a id="tocspageresultoperationlogvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "userId": 0,
      "username": "string",
      "module": "string",
      "action": "string",
      "description": "string",
      "ipAddress": "string",
      "userAgent": "string",
      "requestData": "string",
      "responseData": "string",
      "status": "string",
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[OperationLogVO](#schemaoperationlogvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultOperationLogVO">ResultPageResultOperationLogVO</h2>

<a id="schemaresultpageresultoperationlogvo"></a>
<a id="schema_ResultPageResultOperationLogVO"></a>
<a id="tocSresultpageresultoperationlogvo"></a>
<a id="tocsresultpageresultoperationlogvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "userId": 0,
        "username": "string",
        "module": "string",
        "action": "string",
        "description": "string",
        "ipAddress": "string",
        "userAgent": "string",
        "requestData": "string",
        "responseData": "string",
        "status": "string",
        "statusDesc": "string",
        "createTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultOperationLogVO](#schemapageresultoperationlogvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultOperationLogVO">ResultOperationLogVO</h2>

<a id="schemaresultoperationlogvo"></a>
<a id="schema_ResultOperationLogVO"></a>
<a id="tocSresultoperationlogvo"></a>
<a id="tocsresultoperationlogvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "userId": 0,
    "username": "string",
    "module": "string",
    "action": "string",
    "description": "string",
    "ipAddress": "string",
    "userAgent": "string",
    "requestData": "string",
    "responseData": "string",
    "status": "string",
    "statusDesc": "string",
    "createTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[OperationLogVO](#schemaoperationlogvo)|false|none||操作日志展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultSystemConfigVO">PageResultSystemConfigVO</h2>

<a id="schemapageresultsystemconfigvo"></a>
<a id="schema_PageResultSystemConfigVO"></a>
<a id="tocSpageresultsystemconfigvo"></a>
<a id="tocspageresultsystemconfigvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "configKey": "string",
      "configValue": "string",
      "description": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[SystemConfigVO](#schemasystemconfigvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultSystemConfigVO">ResultPageResultSystemConfigVO</h2>

<a id="schemaresultpageresultsystemconfigvo"></a>
<a id="schema_ResultPageResultSystemConfigVO"></a>
<a id="tocSresultpageresultsystemconfigvo"></a>
<a id="tocsresultpageresultsystemconfigvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "configKey": "string",
        "configValue": "string",
        "description": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultSystemConfigVO](#schemapageresultsystemconfigvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_SystemConfigVO">SystemConfigVO</h2>

<a id="schemasystemconfigvo"></a>
<a id="schema_SystemConfigVO"></a>
<a id="tocSsystemconfigvo"></a>
<a id="tocssystemconfigvo"></a>

```json
{
  "id": 0,
  "configKey": "string",
  "configValue": "string",
  "description": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

系统配置展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||配置ID|
|configKey|string|false|none||配置键|
|configValue|string|false|none||配置值|
|description|string|false|none||配置描述|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultSystemConfigVO">ResultSystemConfigVO</h2>

<a id="schemaresultsystemconfigvo"></a>
<a id="schema_ResultSystemConfigVO"></a>
<a id="tocSresultsystemconfigvo"></a>
<a id="tocsresultsystemconfigvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "configKey": "string",
    "configValue": "string",
    "description": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[SystemConfigVO](#schemasystemconfigvo)|false|none||系统配置展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PermissionVO">PermissionVO</h2>

<a id="schemapermissionvo"></a>
<a id="schema_PermissionVO"></a>
<a id="tocSpermissionvo"></a>
<a id="tocspermissionvo"></a>

```json
{
  "id": 0,
  "parentId": 0,
  "permissionName": "string",
  "permissionCode": "string",
  "permissionType": 0,
  "permissionTypeDesc": "string",
  "component": "string",
  "path": "string",
  "icon": "string",
  "sort": 0,
  "status": 0,
  "statusDesc": "string",
  "children": [
    {
      "id": 0,
      "parentId": 0,
      "permissionName": "string",
      "permissionCode": "string",
      "permissionType": 0,
      "permissionTypeDesc": "string",
      "component": "string",
      "path": "string",
      "icon": "string",
      "sort": 0,
      "status": 0,
      "statusDesc": "string",
      "children": [
        {
          "id": 0,
          "parentId": 0,
          "permissionName": "string",
          "permissionCode": "string",
          "permissionType": 0,
          "permissionTypeDesc": "string",
          "component": "string",
          "path": "string",
          "icon": "string",
          "sort": 0,
          "status": 0,
          "statusDesc": "string",
          "children": [
            {}
          ],
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

权限VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||权限ID|
|parentId|integer(int64)|false|none||父权限ID|
|permissionName|string|false|none||权限名称|
|permissionCode|string|false|none||权限编码|
|permissionType|integer(int32)|false|none||权限类型：1目录，2菜单，3按钮，4接口|
|permissionTypeDesc|string|false|none||权限类型描述|
|component|string|false|none||前端组件路径|
|path|string|false|none||前端路由路径|
|icon|string|false|none||图标|
|sort|integer(int32)|false|none||排序|
|status|integer(int32)|false|none||状态：0禁用，1启用|
|statusDesc|string|false|none||状态描述|
|children|[[PermissionVO](#schemapermissionvo)]|false|none||子权限列表|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultRoleDetailVO">ResultRoleDetailVO</h2>

<a id="schemaresultroledetailvo"></a>
<a id="schema_ResultRoleDetailVO"></a>
<a id="tocSresultroledetailvo"></a>
<a id="tocsresultroledetailvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "roleName": "string",
    "roleCode": "string",
    "description": "string",
    "status": 0,
    "statusDesc": "string",
    "permissions": [
      {
        "id": 0,
        "parentId": 0,
        "permissionName": "string",
        "permissionCode": "string",
        "permissionType": 0,
        "permissionTypeDesc": "string",
        "component": "string",
        "path": "string",
        "icon": "string",
        "sort": 0,
        "status": 0,
        "statusDesc": "string",
        "children": [
          {
            "id": null,
            "parentId": null,
            "permissionName": null,
            "permissionCode": null,
            "permissionType": null,
            "permissionTypeDesc": null,
            "component": null,
            "path": null,
            "icon": null,
            "sort": null,
            "status": null,
            "statusDesc": null,
            "children": null,
            "createTime": null,
            "updateTime": null
          }
        ],
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "permissionIds": [
      0
    ],
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[RoleDetailVO](#schemaroledetailvo)|false|none||角色详情VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_RoleDetailVO">RoleDetailVO</h2>

<a id="schemaroledetailvo"></a>
<a id="schema_RoleDetailVO"></a>
<a id="tocSroledetailvo"></a>
<a id="tocsroledetailvo"></a>

```json
{
  "id": 0,
  "roleName": "string",
  "roleCode": "string",
  "description": "string",
  "status": 0,
  "statusDesc": "string",
  "permissions": [
    {
      "id": 0,
      "parentId": 0,
      "permissionName": "string",
      "permissionCode": "string",
      "permissionType": 0,
      "permissionTypeDesc": "string",
      "component": "string",
      "path": "string",
      "icon": "string",
      "sort": 0,
      "status": 0,
      "statusDesc": "string",
      "children": [
        {
          "id": 0,
          "parentId": 0,
          "permissionName": "string",
          "permissionCode": "string",
          "permissionType": 0,
          "permissionTypeDesc": "string",
          "component": "string",
          "path": "string",
          "icon": "string",
          "sort": 0,
          "status": 0,
          "statusDesc": "string",
          "children": [
            {}
          ],
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "permissionIds": [
    0
  ],
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

角色详情VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||角色ID|
|roleName|string|false|none||角色名称|
|roleCode|string|false|none||角色编码|
|description|string|false|none||角色描述|
|status|integer(int32)|false|none||状态：0禁用，1启用|
|statusDesc|string|false|none||状态描述|
|permissions|[[PermissionVO](#schemapermissionvo)]|false|none||权限列表|
|permissionIds|[integer]|false|none||权限ID列表|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_PageResultRoleVO">PageResultRoleVO</h2>

<a id="schemapageresultrolevo"></a>
<a id="schema_PageResultRoleVO"></a>
<a id="tocSpageresultrolevo"></a>
<a id="tocspageresultrolevo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "roleName": "string",
      "roleCode": "string",
      "description": "string",
      "status": 0,
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[RoleVO](#schemarolevo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultRoleVO">ResultPageResultRoleVO</h2>

<a id="schemaresultpageresultrolevo"></a>
<a id="schema_ResultPageResultRoleVO"></a>
<a id="tocSresultpageresultrolevo"></a>
<a id="tocsresultpageresultrolevo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "roleName": "string",
        "roleCode": "string",
        "description": "string",
        "status": 0,
        "statusDesc": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultRoleVO](#schemapageresultrolevo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListRoleVO">ResultListRoleVO</h2>

<a id="schemaresultlistrolevo"></a>
<a id="schema_ResultListRoleVO"></a>
<a id="tocSresultlistrolevo"></a>
<a id="tocsresultlistrolevo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "roleName": "string",
      "roleCode": "string",
      "description": "string",
      "status": 0,
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[RoleVO](#schemarolevo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_FarmCropVO">FarmCropVO</h2>

<a id="schemafarmcropvo"></a>
<a id="schema_FarmCropVO"></a>
<a id="tocSfarmcropvo"></a>
<a id="tocsfarmcropvo"></a>

```json
{
  "id": 0,
  "farmId": 0,
  "farmName": "string",
  "cropId": 0,
  "cropName": "string",
  "cropImage": "string",
  "categoryName": "string",
  "status": "string",
  "statusDesc": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

农场农产品关联展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||关联ID|
|farmId|integer(int64)|false|none||农场ID|
|farmName|string|false|none||农场名称|
|cropId|integer(int64)|false|none||农产品ID|
|cropName|string|false|none||农产品名称|
|cropImage|string|false|none||农产品图片|
|categoryName|string|false|none||分类名称|
|status|string|false|none||状态：active正常，inactive下架|
|statusDesc|string|false|none||状态描述|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultFarmCropVO">ResultFarmCropVO</h2>

<a id="schemaresultfarmcropvo"></a>
<a id="schema_ResultFarmCropVO"></a>
<a id="tocSresultfarmcropvo"></a>
<a id="tocsresultfarmcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "farmId": 0,
    "farmName": "string",
    "cropId": 0,
    "cropName": "string",
    "cropImage": "string",
    "categoryName": "string",
    "status": "string",
    "statusDesc": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[FarmCropVO](#schemafarmcropvo)|false|none||农场农产品关联展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultFarmCropVO">PageResultFarmCropVO</h2>

<a id="schemapageresultfarmcropvo"></a>
<a id="schema_PageResultFarmCropVO"></a>
<a id="tocSpageresultfarmcropvo"></a>
<a id="tocspageresultfarmcropvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "farmId": 0,
      "farmName": "string",
      "cropId": 0,
      "cropName": "string",
      "cropImage": "string",
      "categoryName": "string",
      "status": "string",
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[FarmCropVO](#schemafarmcropvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultFarmCropVO">ResultPageResultFarmCropVO</h2>

<a id="schemaresultpageresultfarmcropvo"></a>
<a id="schema_ResultPageResultFarmCropVO"></a>
<a id="tocSresultpageresultfarmcropvo"></a>
<a id="tocsresultpageresultfarmcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "farmId": 0,
        "farmName": "string",
        "cropId": 0,
        "cropName": "string",
        "cropImage": "string",
        "categoryName": "string",
        "status": "string",
        "statusDesc": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultFarmCropVO](#schemapageresultfarmcropvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListFarmCropVO">ResultListFarmCropVO</h2>

<a id="schemaresultlistfarmcropvo"></a>
<a id="schema_ResultListFarmCropVO"></a>
<a id="tocSresultlistfarmcropvo"></a>
<a id="tocsresultlistfarmcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "farmId": 0,
      "farmName": "string",
      "cropId": 0,
      "cropName": "string",
      "cropImage": "string",
      "categoryName": "string",
      "status": "string",
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[FarmCropVO](#schemafarmcropvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_CropVO">CropVO</h2>

<a id="schemacropvo"></a>
<a id="schema_CropVO"></a>
<a id="tocScropvo"></a>
<a id="tocscropvo"></a>

```json
{
  "id": 0,
  "name": "string",
  "categoryId": 0,
  "categoryName": "string",
  "image": "string",
  "description": "string",
  "growthPeriod": 0,
  "plantingSeason": "string",
  "cultivationMethod": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

农产品展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||农产品ID|
|name|string|false|none||农产品名称|
|categoryId|integer(int64)|false|none||分类ID|
|categoryName|string|false|none||分类名称|
|image|string|false|none||图片URL|
|description|string|false|none||描述|
|growthPeriod|integer(int32)|false|none||生长周期（天）|
|plantingSeason|string|false|none||适宜种植季节|
|cultivationMethod|string|false|none||种植方法|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultCropVO">ResultCropVO</h2>

<a id="schemaresultcropvo"></a>
<a id="schema_ResultCropVO"></a>
<a id="tocSresultcropvo"></a>
<a id="tocsresultcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "name": "string",
    "categoryId": 0,
    "categoryName": "string",
    "image": "string",
    "description": "string",
    "growthPeriod": 0,
    "plantingSeason": "string",
    "cultivationMethod": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[CropVO](#schemacropvo)|false|none||农产品展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListCropVO">ResultListCropVO</h2>

<a id="schemaresultlistcropvo"></a>
<a id="schema_ResultListCropVO"></a>
<a id="tocSresultlistcropvo"></a>
<a id="tocsresultlistcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string",
      "categoryId": 0,
      "categoryName": "string",
      "image": "string",
      "description": "string",
      "growthPeriod": 0,
      "plantingSeason": "string",
      "cultivationMethod": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[CropVO](#schemacropvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultCropVO">PageResultCropVO</h2>

<a id="schemapageresultcropvo"></a>
<a id="schema_PageResultCropVO"></a>
<a id="tocSpageresultcropvo"></a>
<a id="tocspageresultcropvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "name": "string",
      "categoryId": 0,
      "categoryName": "string",
      "image": "string",
      "description": "string",
      "growthPeriod": 0,
      "plantingSeason": "string",
      "cultivationMethod": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[CropVO](#schemacropvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultCropVO">ResultPageResultCropVO</h2>

<a id="schemaresultpageresultcropvo"></a>
<a id="schema_ResultPageResultCropVO"></a>
<a id="tocSresultpageresultcropvo"></a>
<a id="tocsresultpageresultcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "name": "string",
        "categoryId": 0,
        "categoryName": "string",
        "image": "string",
        "description": "string",
        "growthPeriod": 0,
        "plantingSeason": "string",
        "cultivationMethod": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultCropVO](#schemapageresultcropvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_CropCategoryVO">CropCategoryVO</h2>

<a id="schemacropcategoryvo"></a>
<a id="schema_CropCategoryVO"></a>
<a id="tocScropcategoryvo"></a>
<a id="tocscropcategoryvo"></a>

```json
{
  "id": 0,
  "name": "string",
  "parentId": 0,
  "parentName": "string",
  "sort": 0,
  "children": [
    {
      "id": 0,
      "name": "string",
      "parentId": 0,
      "parentName": "string",
      "sort": 0,
      "children": [
        {
          "id": 0,
          "name": "string",
          "parentId": 0,
          "parentName": "string",
          "sort": 0,
          "children": [
            {}
          ],
          "cropCount": 0,
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "cropCount": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "cropCount": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

农产品分类展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||分类ID|
|name|string|false|none||分类名称|
|parentId|integer(int64)|false|none||父分类ID|
|parentName|string|false|none||父分类名称|
|sort|integer(int32)|false|none||排序|
|children|[[CropCategoryVO](#schemacropcategoryvo)]|false|none||子分类列表|
|cropCount|integer(int32)|false|none||农产品数量|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultCropCategoryVO">ResultCropCategoryVO</h2>

<a id="schemaresultcropcategoryvo"></a>
<a id="schema_ResultCropCategoryVO"></a>
<a id="tocSresultcropcategoryvo"></a>
<a id="tocsresultcropcategoryvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "name": "string",
    "parentId": 0,
    "parentName": "string",
    "sort": 0,
    "children": [
      {
        "id": 0,
        "name": "string",
        "parentId": 0,
        "parentName": "string",
        "sort": 0,
        "children": [
          {
            "id": null,
            "name": null,
            "parentId": null,
            "parentName": null,
            "sort": null,
            "children": null,
            "cropCount": null,
            "createTime": null,
            "updateTime": null
          }
        ],
        "cropCount": 0,
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "cropCount": 0,
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[CropCategoryVO](#schemacropcategoryvo)|false|none||农产品分类展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListCropCategoryVO">ResultListCropCategoryVO</h2>

<a id="schemaresultlistcropcategoryvo"></a>
<a id="schema_ResultListCropCategoryVO"></a>
<a id="tocSresultlistcropcategoryvo"></a>
<a id="tocsresultlistcropcategoryvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "name": "string",
      "parentId": 0,
      "parentName": "string",
      "sort": 0,
      "children": [
        {
          "id": 0,
          "name": "string",
          "parentId": 0,
          "parentName": "string",
          "sort": 0,
          "children": [
            {}
          ],
          "cropCount": 0,
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "cropCount": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[CropCategoryVO](#schemacropcategoryvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultCropCategoryVO">PageResultCropCategoryVO</h2>

<a id="schemapageresultcropcategoryvo"></a>
<a id="schema_PageResultCropCategoryVO"></a>
<a id="tocSpageresultcropcategoryvo"></a>
<a id="tocspageresultcropcategoryvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "name": "string",
      "parentId": 0,
      "parentName": "string",
      "sort": 0,
      "children": [
        {
          "id": 0,
          "name": "string",
          "parentId": 0,
          "parentName": "string",
          "sort": 0,
          "children": [
            {}
          ],
          "cropCount": 0,
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "cropCount": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[CropCategoryVO](#schemacropcategoryvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultCropCategoryVO">ResultPageResultCropCategoryVO</h2>

<a id="schemaresultpageresultcropcategoryvo"></a>
<a id="schema_ResultPageResultCropCategoryVO"></a>
<a id="tocSresultpageresultcropcategoryvo"></a>
<a id="tocsresultpageresultcropcategoryvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "name": "string",
        "parentId": 0,
        "parentName": "string",
        "sort": 0,
        "children": [
          {
            "id": null,
            "name": null,
            "parentId": null,
            "parentName": null,
            "sort": null,
            "children": null,
            "cropCount": null,
            "createTime": null,
            "updateTime": null
          }
        ],
        "cropCount": 0,
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultCropCategoryVO](#schemapageresultcropcategoryvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PlotVO">PlotVO</h2>

<a id="schemaplotvo"></a>
<a id="schema_PlotVO"></a>
<a id="tocSplotvo"></a>
<a id="tocsplotvo"></a>

```json
{
  "id": 0,
  "farmId": 0,
  "farmName": "string",
  "name": "string",
  "area": 0,
  "location": "string",
  "soilType": "string",
  "waterSource": "string",
  "status": "string",
  "statusDesc": "string",
  "imageUrls": [
    "string"
  ],
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

地块展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||地块ID|
|farmId|integer(int64)|false|none||农场ID|
|farmName|string|false|none||农场名称|
|name|string|false|none||地块名称|
|area|number|false|none||面积（平方米）|
|location|string|false|none||位置描述|
|soilType|string|false|none||土壤类型|
|waterSource|string|false|none||水源情况|
|status|string|false|none||状态：available可用，in_use使用中，unavailable不可用|
|statusDesc|string|false|none||状态描述|
|imageUrls|[string]|false|none||地块图片列表|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultPlotVO">ResultPlotVO</h2>

<a id="schemaresultplotvo"></a>
<a id="schema_ResultPlotVO"></a>
<a id="tocSresultplotvo"></a>
<a id="tocsresultplotvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "farmId": 0,
    "farmName": "string",
    "name": "string",
    "area": 0,
    "location": "string",
    "soilType": "string",
    "waterSource": "string",
    "status": "string",
    "statusDesc": "string",
    "imageUrls": [
      "string"
    ],
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PlotVO](#schemaplotvo)|false|none||地块展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultPlotVO">PageResultPlotVO</h2>

<a id="schemapageresultplotvo"></a>
<a id="schema_PageResultPlotVO"></a>
<a id="tocSpageresultplotvo"></a>
<a id="tocspageresultplotvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "farmId": 0,
      "farmName": "string",
      "name": "string",
      "area": 0,
      "location": "string",
      "soilType": "string",
      "waterSource": "string",
      "status": "string",
      "statusDesc": "string",
      "imageUrls": [
        "string"
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[PlotVO](#schemaplotvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultPlotVO">ResultPageResultPlotVO</h2>

<a id="schemaresultpageresultplotvo"></a>
<a id="schema_ResultPageResultPlotVO"></a>
<a id="tocSresultpageresultplotvo"></a>
<a id="tocsresultpageresultplotvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "farmId": 0,
        "farmName": "string",
        "name": "string",
        "area": 0,
        "location": "string",
        "soilType": "string",
        "waterSource": "string",
        "status": "string",
        "statusDesc": "string",
        "imageUrls": [
          "string"
        ],
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultPlotVO](#schemapageresultplotvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListPlotVO">ResultListPlotVO</h2>

<a id="schemaresultlistplotvo"></a>
<a id="schema_ResultListPlotVO"></a>
<a id="tocSresultlistplotvo"></a>
<a id="tocsresultlistplotvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "farmId": 0,
      "farmName": "string",
      "name": "string",
      "area": 0,
      "location": "string",
      "soilType": "string",
      "waterSource": "string",
      "status": "string",
      "statusDesc": "string",
      "imageUrls": [
        "string"
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[PlotVO](#schemaplotvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_IPagePlantingUnitVO">IPagePlantingUnitVO</h2>

<a id="schemaipageplantingunitvo"></a>
<a id="schema_IPagePlantingUnitVO"></a>
<a id="tocSipageplantingunitvo"></a>
<a id="tocsipageplantingunitvo"></a>

```json
{
  "size": 0,
  "total": 0,
  "records": [
    {
      "id": 0,
      "adoptionId": 0,
      "unitNo": "string",
      "cropId": 0,
      "cropName": "string",
      "status": "string",
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "current": 0,
  "pages": 0
}

```

响应数据

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|size|integer(int64)|false|none||none|
|total|integer(int64)|false|none||none|
|records|[[PlantingUnitVO](#schemaplantingunitvo)]|false|none||[种植单元展示VO]|
|current|integer(int64)|false|none||none|
|pages|integer(int64)|false|none||none|

<h2 id="tocS_PlantingUnitVO">PlantingUnitVO</h2>

<a id="schemaplantingunitvo"></a>
<a id="schema_PlantingUnitVO"></a>
<a id="tocSplantingunitvo"></a>
<a id="tocsplantingunitvo"></a>

```json
{
  "id": 0,
  "adoptionId": 0,
  "unitNo": "string",
  "cropId": 0,
  "cropName": "string",
  "status": "string",
  "statusDesc": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

种植单元展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||种植单元ID|
|adoptionId|integer(int64)|false|none||认养记录ID|
|unitNo|string|false|none||单元编号|
|cropId|integer(int64)|false|none||农产品ID|
|cropName|string|false|none||农产品名称|
|status|string|false|none||状态|
|statusDesc|string|false|none||状态描述|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultIPagePlantingUnitVO">ResultIPagePlantingUnitVO</h2>

<a id="schemaresultipageplantingunitvo"></a>
<a id="schema_ResultIPagePlantingUnitVO"></a>
<a id="tocSresultipageplantingunitvo"></a>
<a id="tocsresultipageplantingunitvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "size": 0,
    "total": 0,
    "records": [
      {
        "id": 0,
        "adoptionId": 0,
        "unitNo": "string",
        "cropId": 0,
        "cropName": "string",
        "status": "string",
        "statusDesc": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "current": 0,
    "pages": 0
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[IPagePlantingUnitVO](#schemaipageplantingunitvo)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultPlantingUnitVO">ResultPlantingUnitVO</h2>

<a id="schemaresultplantingunitvo"></a>
<a id="schema_ResultPlantingUnitVO"></a>
<a id="tocSresultplantingunitvo"></a>
<a id="tocsresultplantingunitvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "adoptionId": 0,
    "unitNo": "string",
    "cropId": 0,
    "cropName": "string",
    "status": "string",
    "statusDesc": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PlantingUnitVO](#schemaplantingunitvo)|false|none||种植单元展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListPlantingUnitVO">ResultListPlantingUnitVO</h2>

<a id="schemaresultlistplantingunitvo"></a>
<a id="schema_ResultListPlantingUnitVO"></a>
<a id="tocSresultlistplantingunitvo"></a>
<a id="tocsresultlistplantingunitvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "adoptionId": 0,
      "unitNo": "string",
      "cropId": 0,
      "cropName": "string",
      "status": "string",
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[PlantingUnitVO](#schemaplantingunitvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_IPagePlantingRecordVO">IPagePlantingRecordVO</h2>

<a id="schemaipageplantingrecordvo"></a>
<a id="schema_IPagePlantingRecordVO"></a>
<a id="tocSipageplantingrecordvo"></a>
<a id="tocsipageplantingrecordvo"></a>

```json
{
  "size": 0,
  "total": 0,
  "records": [
    {
      "id": 0,
      "unitId": 0,
      "unitNo": "string",
      "recordTime": "2019-08-24",
      "content": "string",
      "imageList": [
        "string"
      ],
      "creatorId": 0,
      "creatorName": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "current": 0,
  "pages": 0
}

```

响应数据

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|size|integer(int64)|false|none||none|
|total|integer(int64)|false|none||none|
|records|[[PlantingRecordVO](#schemaplantingrecordvo)]|false|none||[种植记录展示VO]|
|current|integer(int64)|false|none||none|
|pages|integer(int64)|false|none||none|

<h2 id="tocS_PlantingRecordVO">PlantingRecordVO</h2>

<a id="schemaplantingrecordvo"></a>
<a id="schema_PlantingRecordVO"></a>
<a id="tocSplantingrecordvo"></a>
<a id="tocsplantingrecordvo"></a>

```json
{
  "id": 0,
  "unitId": 0,
  "unitNo": "string",
  "recordTime": "2019-08-24",
  "content": "string",
  "imageList": [
    "string"
  ],
  "creatorId": 0,
  "creatorName": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

种植记录展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||记录ID|
|unitId|integer(int64)|false|none||种植单元ID|
|unitNo|string|false|none||种植单元编号|
|recordTime|string(date)|false|none||记录时间|
|content|string|false|none||记录内容|
|imageList|[string]|false|none||图片URL列表|
|creatorId|integer(int64)|false|none||创建者ID|
|creatorName|string|false|none||创建者姓名|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultIPagePlantingRecordVO">ResultIPagePlantingRecordVO</h2>

<a id="schemaresultipageplantingrecordvo"></a>
<a id="schema_ResultIPagePlantingRecordVO"></a>
<a id="tocSresultipageplantingrecordvo"></a>
<a id="tocsresultipageplantingrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "size": 0,
    "total": 0,
    "records": [
      {
        "id": 0,
        "unitId": 0,
        "unitNo": "string",
        "recordTime": "2019-08-24",
        "content": "string",
        "imageList": [
          "string"
        ],
        "creatorId": 0,
        "creatorName": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "current": 0,
    "pages": 0
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[IPagePlantingRecordVO](#schemaipageplantingrecordvo)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultPlantingRecordVO">ResultPlantingRecordVO</h2>

<a id="schemaresultplantingrecordvo"></a>
<a id="schema_ResultPlantingRecordVO"></a>
<a id="tocSresultplantingrecordvo"></a>
<a id="tocsresultplantingrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "unitId": 0,
    "unitNo": "string",
    "recordTime": "2019-08-24",
    "content": "string",
    "imageList": [
      "string"
    ],
    "creatorId": 0,
    "creatorName": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PlantingRecordVO](#schemaplantingrecordvo)|false|none||种植记录展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListPlantingRecordVO">ResultListPlantingRecordVO</h2>

<a id="schemaresultlistplantingrecordvo"></a>
<a id="schema_ResultListPlantingRecordVO"></a>
<a id="tocSresultlistplantingrecordvo"></a>
<a id="tocsresultlistplantingrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "unitId": 0,
      "unitNo": "string",
      "recordTime": "2019-08-24",
      "content": "string",
      "imageList": [
        "string"
      ],
      "creatorId": 0,
      "creatorName": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[PlantingRecordVO](#schemaplantingrecordvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_AdoptionRecordVO">AdoptionRecordVO</h2>

<a id="schemaadoptionrecordvo"></a>
<a id="schema_AdoptionRecordVO"></a>
<a id="tocSadoptionrecordvo"></a>
<a id="tocsadoptionrecordvo"></a>

```json
{
  "id": 0,
  "orderId": 0,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24",
  "status": "string",
  "statusDesc": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

认养记录展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||认养记录ID|
|orderId|integer(int64)|false|none||订单ID|
|startTime|string(date)|false|none||认养开始时间|
|endTime|string(date)|false|none||认养结束时间|
|status|string|false|none||状态|
|statusDesc|string|false|none||状态描述|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_IPageAdoptionRecordVO">IPageAdoptionRecordVO</h2>

<a id="schemaipageadoptionrecordvo"></a>
<a id="schema_IPageAdoptionRecordVO"></a>
<a id="tocSipageadoptionrecordvo"></a>
<a id="tocsipageadoptionrecordvo"></a>

```json
{
  "size": 0,
  "total": 0,
  "records": [
    {
      "id": 0,
      "orderId": 0,
      "startTime": "2019-08-24",
      "endTime": "2019-08-24",
      "status": "string",
      "statusDesc": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "current": 0,
  "pages": 0
}

```

响应数据

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|size|integer(int64)|false|none||none|
|total|integer(int64)|false|none||none|
|records|[[AdoptionRecordVO](#schemaadoptionrecordvo)]|false|none||[认养记录展示VO]|
|current|integer(int64)|false|none||none|
|pages|integer(int64)|false|none||none|

<h2 id="tocS_ResultIPageAdoptionRecordVO">ResultIPageAdoptionRecordVO</h2>

<a id="schemaresultipageadoptionrecordvo"></a>
<a id="schema_ResultIPageAdoptionRecordVO"></a>
<a id="tocSresultipageadoptionrecordvo"></a>
<a id="tocsresultipageadoptionrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "size": 0,
    "total": 0,
    "records": [
      {
        "id": 0,
        "orderId": 0,
        "startTime": "2019-08-24",
        "endTime": "2019-08-24",
        "status": "string",
        "statusDesc": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "current": 0,
    "pages": 0
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[IPageAdoptionRecordVO](#schemaipageadoptionrecordvo)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultAdoptionRecordVO">ResultAdoptionRecordVO</h2>

<a id="schemaresultadoptionrecordvo"></a>
<a id="schema_ResultAdoptionRecordVO"></a>
<a id="tocSresultadoptionrecordvo"></a>
<a id="tocsresultadoptionrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "orderId": 0,
    "startTime": "2019-08-24",
    "endTime": "2019-08-24",
    "status": "string",
    "statusDesc": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[AdoptionRecordVO](#schemaadoptionrecordvo)|false|none||认养记录展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultPermissionVO">ResultPermissionVO</h2>

<a id="schemaresultpermissionvo"></a>
<a id="schema_ResultPermissionVO"></a>
<a id="tocSresultpermissionvo"></a>
<a id="tocsresultpermissionvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "parentId": 0,
    "permissionName": "string",
    "permissionCode": "string",
    "permissionType": 0,
    "permissionTypeDesc": "string",
    "component": "string",
    "path": "string",
    "icon": "string",
    "sort": 0,
    "status": 0,
    "statusDesc": "string",
    "children": [
      {
        "id": 0,
        "parentId": 0,
        "permissionName": "string",
        "permissionCode": "string",
        "permissionType": 0,
        "permissionTypeDesc": "string",
        "component": "string",
        "path": "string",
        "icon": "string",
        "sort": 0,
        "status": 0,
        "statusDesc": "string",
        "children": [
          {
            "id": null,
            "parentId": null,
            "permissionName": null,
            "permissionCode": null,
            "permissionType": null,
            "permissionTypeDesc": null,
            "component": null,
            "path": null,
            "icon": null,
            "sort": null,
            "status": null,
            "statusDesc": null,
            "children": null,
            "createTime": null,
            "updateTime": null
          }
        ],
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PermissionVO](#schemapermissionvo)|false|none||权限VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListPermissionVO">ResultListPermissionVO</h2>

<a id="schemaresultlistpermissionvo"></a>
<a id="schema_ResultListPermissionVO"></a>
<a id="tocSresultlistpermissionvo"></a>
<a id="tocsresultlistpermissionvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "parentId": 0,
      "permissionName": "string",
      "permissionCode": "string",
      "permissionType": 0,
      "permissionTypeDesc": "string",
      "component": "string",
      "path": "string",
      "icon": "string",
      "sort": 0,
      "status": 0,
      "statusDesc": "string",
      "children": [
        {
          "id": 0,
          "parentId": 0,
          "permissionName": "string",
          "permissionCode": "string",
          "permissionType": 0,
          "permissionTypeDesc": "string",
          "component": "string",
          "path": "string",
          "icon": "string",
          "sort": 0,
          "status": 0,
          "statusDesc": "string",
          "children": [
            {}
          ],
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[PermissionVO](#schemapermissionvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultPermissionVO">PageResultPermissionVO</h2>

<a id="schemapageresultpermissionvo"></a>
<a id="schema_PageResultPermissionVO"></a>
<a id="tocSpageresultpermissionvo"></a>
<a id="tocspageresultpermissionvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "parentId": 0,
      "permissionName": "string",
      "permissionCode": "string",
      "permissionType": 0,
      "permissionTypeDesc": "string",
      "component": "string",
      "path": "string",
      "icon": "string",
      "sort": 0,
      "status": 0,
      "statusDesc": "string",
      "children": [
        {
          "id": 0,
          "parentId": 0,
          "permissionName": "string",
          "permissionCode": "string",
          "permissionType": 0,
          "permissionTypeDesc": "string",
          "component": "string",
          "path": "string",
          "icon": "string",
          "sort": 0,
          "status": 0,
          "statusDesc": "string",
          "children": [
            {}
          ],
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[PermissionVO](#schemapermissionvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultPermissionVO">ResultPageResultPermissionVO</h2>

<a id="schemaresultpageresultpermissionvo"></a>
<a id="schema_ResultPageResultPermissionVO"></a>
<a id="tocSresultpageresultpermissionvo"></a>
<a id="tocsresultpageresultpermissionvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "parentId": 0,
        "permissionName": "string",
        "permissionCode": "string",
        "permissionType": 0,
        "permissionTypeDesc": "string",
        "component": "string",
        "path": "string",
        "icon": "string",
        "sort": 0,
        "status": 0,
        "statusDesc": "string",
        "children": [
          {
            "id": null,
            "parentId": null,
            "permissionName": null,
            "permissionCode": null,
            "permissionType": null,
            "permissionTypeDesc": null,
            "component": null,
            "path": null,
            "icon": null,
            "sort": null,
            "status": null,
            "statusDesc": null,
            "children": null,
            "createTime": null,
            "updateTime": null
          }
        ],
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultPermissionVO](#schemapageresultpermissionvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_IPageOrderVO">IPageOrderVO</h2>

<a id="schemaipageordervo"></a>
<a id="schema_IPageOrderVO"></a>
<a id="tocSipageordervo"></a>
<a id="tocsipageordervo"></a>

```json
{
  "size": 0,
  "total": 0,
  "records": [
    {
      "id": 0,
      "orderNo": "string",
      "userId": 0,
      "userName": "string",
      "projectId": 0,
      "projectName": "string",
      "farmName": "string",
      "packageId": 0,
      "packageName": "string",
      "amount": 0,
      "status": "string",
      "statusDesc": "string",
      "payTime": "2019-08-24T14:15:22Z",
      "addressId": 0,
      "address": "string",
      "recipientName": "string",
      "recipientPhone": "string",
      "remark": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "current": 0,
  "pages": 0
}

```

响应数据

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|size|integer(int64)|false|none||none|
|total|integer(int64)|false|none||none|
|records|[[OrderVO](#schemaordervo)]|false|none||[订单展示VO]|
|current|integer(int64)|false|none||none|
|pages|integer(int64)|false|none||none|

<h2 id="tocS_OrderVO">OrderVO</h2>

<a id="schemaordervo"></a>
<a id="schema_OrderVO"></a>
<a id="tocSordervo"></a>
<a id="tocsordervo"></a>

```json
{
  "id": 0,
  "orderNo": "string",
  "userId": 0,
  "userName": "string",
  "projectId": 0,
  "projectName": "string",
  "farmName": "string",
  "packageId": 0,
  "packageName": "string",
  "amount": 0,
  "status": "string",
  "statusDesc": "string",
  "payTime": "2019-08-24T14:15:22Z",
  "addressId": 0,
  "address": "string",
  "recipientName": "string",
  "recipientPhone": "string",
  "remark": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

订单展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||订单ID|
|orderNo|string|false|none||订单编号|
|userId|integer(int64)|false|none||用户ID|
|userName|string|false|none||用户名|
|projectId|integer(int64)|false|none||项目ID|
|projectName|string|false|none||项目名称|
|farmName|string|false|none||农场名称|
|packageId|integer(int64)|false|none||套餐ID|
|packageName|string|false|none||套餐名称|
|amount|number|false|none||订单金额|
|status|string|false|none||状态|
|statusDesc|string|false|none||状态描述|
|payTime|string(date-time)|false|none||支付时间|
|addressId|integer(int64)|false|none||收货地址ID|
|address|string|false|none||收货地址|
|recipientName|string|false|none||收件人姓名|
|recipientPhone|string|false|none||收件人电话|
|remark|string|false|none||备注|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultIPageOrderVO">ResultIPageOrderVO</h2>

<a id="schemaresultipageordervo"></a>
<a id="schema_ResultIPageOrderVO"></a>
<a id="tocSresultipageordervo"></a>
<a id="tocsresultipageordervo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "size": 0,
    "total": 0,
    "records": [
      {
        "id": 0,
        "orderNo": "string",
        "userId": 0,
        "userName": "string",
        "projectId": 0,
        "projectName": "string",
        "farmName": "string",
        "packageId": 0,
        "packageName": "string",
        "amount": 0,
        "status": "string",
        "statusDesc": "string",
        "payTime": "2019-08-24T14:15:22Z",
        "addressId": 0,
        "address": "string",
        "recipientName": "string",
        "recipientPhone": "string",
        "remark": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "current": 0,
    "pages": 0
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[IPageOrderVO](#schemaipageordervo)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultOrderVO">ResultOrderVO</h2>

<a id="schemaresultordervo"></a>
<a id="schema_ResultOrderVO"></a>
<a id="tocSresultordervo"></a>
<a id="tocsresultordervo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "orderNo": "string",
    "userId": 0,
    "userName": "string",
    "projectId": 0,
    "projectName": "string",
    "farmName": "string",
    "packageId": 0,
    "packageName": "string",
    "amount": 0,
    "status": "string",
    "statusDesc": "string",
    "payTime": "2019-08-24T14:15:22Z",
    "addressId": 0,
    "address": "string",
    "recipientName": "string",
    "recipientPhone": "string",
    "remark": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[OrderVO](#schemaordervo)|false|none||订单展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListOrderVO">ResultListOrderVO</h2>

<a id="schemaresultlistordervo"></a>
<a id="schema_ResultListOrderVO"></a>
<a id="tocSresultlistordervo"></a>
<a id="tocsresultlistordervo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "orderNo": "string",
      "userId": 0,
      "userName": "string",
      "projectId": 0,
      "projectName": "string",
      "farmName": "string",
      "packageId": 0,
      "packageName": "string",
      "amount": 0,
      "status": "string",
      "statusDesc": "string",
      "payTime": "2019-08-24T14:15:22Z",
      "addressId": 0,
      "address": "string",
      "recipientName": "string",
      "recipientPhone": "string",
      "remark": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[OrderVO](#schemaordervo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_MigrationResult">MigrationResult</h2>

<a id="schemamigrationresult"></a>
<a id="schema_MigrationResult"></a>
<a id="tocSmigrationresult"></a>
<a id="tocsmigrationresult"></a>

```json
{
  "totalFiles": 0,
  "successCount": 0,
  "failCount": 0,
  "failedFiles": [
    "string"
  ],
  "totalSize": 0,
  "processedSize": 0,
  "progress": 0.1
}

```

响应数据

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|totalFiles|integer(int32)|false|none||none|
|successCount|integer(int32)|false|none||none|
|failCount|integer(int32)|false|none||none|
|failedFiles|[string]|false|none||none|
|totalSize|integer(int64)|false|none||none|
|processedSize|integer(int64)|false|none||none|
|progress|number(double)|false|none||none|

<h2 id="tocS_ResultMigrationResult">ResultMigrationResult</h2>

<a id="schemaresultmigrationresult"></a>
<a id="schema_ResultMigrationResult"></a>
<a id="tocSresultmigrationresult"></a>
<a id="tocsresultmigrationresult"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "totalFiles": 0,
    "successCount": 0,
    "failCount": 0,
    "failedFiles": [
      "string"
    ],
    "totalSize": 0,
    "processedSize": 0,
    "progress": 0.1
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[MigrationResult](#schemamigrationresult)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_LogisticsTrackingVO">LogisticsTrackingVO</h2>

<a id="schemalogisticstrackingvo"></a>
<a id="schema_LogisticsTrackingVO"></a>
<a id="tocSlogisticstrackingvo"></a>
<a id="tocslogisticstrackingvo"></a>

```json
{
  "id": 0,
  "logisticsId": 0,
  "trackingTime": "2019-08-24T14:15:22Z",
  "location": "string",
  "description": "string",
  "createTime": "2019-08-24T14:15:22Z"
}

```

物流跟踪记录VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||跟踪记录ID|
|logisticsId|integer(int64)|false|none||物流ID|
|trackingTime|string(date-time)|false|none||跟踪时间|
|location|string|false|none||当前位置|
|description|string|false|none||描述信息|
|createTime|string(date-time)|false|none||创建时间|

<h2 id="tocS_LogisticsVO">LogisticsVO</h2>

<a id="schemalogisticsvo"></a>
<a id="schema_LogisticsVO"></a>
<a id="tocSlogisticsvo"></a>
<a id="tocslogisticsvo"></a>

```json
{
  "id": 0,
  "logisticsNo": "string",
  "company": "string",
  "status": "string",
  "statusDesc": "string",
  "recipientName": "string",
  "recipientPhone": "string",
  "recipientAddress": "string",
  "shippingTime": "2019-08-24T14:15:22Z",
  "deliveryTime": "2019-08-24T14:15:22Z",
  "trackingList": [
    {
      "id": 0,
      "logisticsId": 0,
      "trackingTime": "2019-08-24T14:15:22Z",
      "location": "string",
      "description": "string",
      "createTime": "2019-08-24T14:15:22Z"
    }
  ],
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

物流展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||物流ID|
|logisticsNo|string|false|none||物流单号|
|company|string|false|none||物流公司|
|status|string|false|none||状态|
|statusDesc|string|false|none||状态描述|
|recipientName|string|false|none||收件人姓名|
|recipientPhone|string|false|none||收件人电话|
|recipientAddress|string|false|none||收件地址|
|shippingTime|string(date-time)|false|none||发货时间|
|deliveryTime|string(date-time)|false|none||送达时间|
|trackingList|[[LogisticsTrackingVO](#schemalogisticstrackingvo)]|false|none||物流跟踪记录|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_PageResultLogisticsVO">PageResultLogisticsVO</h2>

<a id="schemapageresultlogisticsvo"></a>
<a id="schema_PageResultLogisticsVO"></a>
<a id="tocSpageresultlogisticsvo"></a>
<a id="tocspageresultlogisticsvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "logisticsNo": "string",
      "company": "string",
      "status": "string",
      "statusDesc": "string",
      "recipientName": "string",
      "recipientPhone": "string",
      "recipientAddress": "string",
      "shippingTime": "2019-08-24T14:15:22Z",
      "deliveryTime": "2019-08-24T14:15:22Z",
      "trackingList": [
        {
          "id": 0,
          "logisticsId": 0,
          "trackingTime": "2019-08-24T14:15:22Z",
          "location": "string",
          "description": "string",
          "createTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[LogisticsVO](#schemalogisticsvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultLogisticsVO">ResultPageResultLogisticsVO</h2>

<a id="schemaresultpageresultlogisticsvo"></a>
<a id="schema_ResultPageResultLogisticsVO"></a>
<a id="tocSresultpageresultlogisticsvo"></a>
<a id="tocsresultpageresultlogisticsvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "logisticsNo": "string",
        "company": "string",
        "status": "string",
        "statusDesc": "string",
        "recipientName": "string",
        "recipientPhone": "string",
        "recipientAddress": "string",
        "shippingTime": "2019-08-24T14:15:22Z",
        "deliveryTime": "2019-08-24T14:15:22Z",
        "trackingList": [
          {
            "id": null,
            "logisticsId": null,
            "trackingTime": null,
            "location": null,
            "description": null,
            "createTime": null
          }
        ],
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultLogisticsVO](#schemapageresultlogisticsvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultLogisticsVO">ResultLogisticsVO</h2>

<a id="schemaresultlogisticsvo"></a>
<a id="schema_ResultLogisticsVO"></a>
<a id="tocSresultlogisticsvo"></a>
<a id="tocsresultlogisticsvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "logisticsNo": "string",
    "company": "string",
    "status": "string",
    "statusDesc": "string",
    "recipientName": "string",
    "recipientPhone": "string",
    "recipientAddress": "string",
    "shippingTime": "2019-08-24T14:15:22Z",
    "deliveryTime": "2019-08-24T14:15:22Z",
    "trackingList": [
      {
        "id": 0,
        "logisticsId": 0,
        "trackingTime": "2019-08-24T14:15:22Z",
        "location": "string",
        "description": "string",
        "createTime": "2019-08-24T14:15:22Z"
      }
    ],
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[LogisticsVO](#schemalogisticsvo)|false|none||物流展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultLogisticsTrackingVO">PageResultLogisticsTrackingVO</h2>

<a id="schemapageresultlogisticstrackingvo"></a>
<a id="schema_PageResultLogisticsTrackingVO"></a>
<a id="tocSpageresultlogisticstrackingvo"></a>
<a id="tocspageresultlogisticstrackingvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "logisticsId": 0,
      "trackingTime": "2019-08-24T14:15:22Z",
      "location": "string",
      "description": "string",
      "createTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[LogisticsTrackingVO](#schemalogisticstrackingvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultLogisticsTrackingVO">ResultPageResultLogisticsTrackingVO</h2>

<a id="schemaresultpageresultlogisticstrackingvo"></a>
<a id="schema_ResultPageResultLogisticsTrackingVO"></a>
<a id="tocSresultpageresultlogisticstrackingvo"></a>
<a id="tocsresultpageresultlogisticstrackingvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "logisticsId": 0,
        "trackingTime": "2019-08-24T14:15:22Z",
        "location": "string",
        "description": "string",
        "createTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultLogisticsTrackingVO](#schemapageresultlogisticstrackingvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultLogisticsTrackingVO">ResultLogisticsTrackingVO</h2>

<a id="schemaresultlogisticstrackingvo"></a>
<a id="schema_ResultLogisticsTrackingVO"></a>
<a id="tocSresultlogisticstrackingvo"></a>
<a id="tocsresultlogisticstrackingvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "logisticsId": 0,
    "trackingTime": "2019-08-24T14:15:22Z",
    "location": "string",
    "description": "string",
    "createTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[LogisticsTrackingVO](#schemalogisticstrackingvo)|false|none||物流跟踪记录VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListLogisticsTrackingVO">ResultListLogisticsTrackingVO</h2>

<a id="schemaresultlistlogisticstrackingvo"></a>
<a id="schema_ResultListLogisticsTrackingVO"></a>
<a id="tocSresultlistlogisticstrackingvo"></a>
<a id="tocsresultlistlogisticstrackingvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "logisticsId": 0,
      "trackingTime": "2019-08-24T14:15:22Z",
      "location": "string",
      "description": "string",
      "createTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[LogisticsTrackingVO](#schemalogisticstrackingvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_HarvestRecordVO">HarvestRecordVO</h2>

<a id="schemaharvestrecordvo"></a>
<a id="schema_HarvestRecordVO"></a>
<a id="tocSharvestrecordvo"></a>
<a id="tocsharvestrecordvo"></a>

```json
{
  "id": 0,
  "adoptionId": 0,
  "harvestTime": "2019-08-24",
  "status": "string",
  "statusDesc": "string",
  "packageType": "string",
  "logisticsId": 0,
  "logisticsNo": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

收获记录展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||收获记录ID|
|adoptionId|integer(int64)|false|none||认养记录ID|
|harvestTime|string(date)|false|none||收获时间|
|status|string|false|none||状态|
|statusDesc|string|false|none||状态描述|
|packageType|string|false|none||包装类型|
|logisticsId|integer(int64)|false|none||物流ID|
|logisticsNo|string|false|none||物流单号|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_PageResultHarvestRecordVO">PageResultHarvestRecordVO</h2>

<a id="schemapageresultharvestrecordvo"></a>
<a id="schema_PageResultHarvestRecordVO"></a>
<a id="tocSpageresultharvestrecordvo"></a>
<a id="tocspageresultharvestrecordvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "adoptionId": 0,
      "harvestTime": "2019-08-24",
      "status": "string",
      "statusDesc": "string",
      "packageType": "string",
      "logisticsId": 0,
      "logisticsNo": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[HarvestRecordVO](#schemaharvestrecordvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultHarvestRecordVO">ResultPageResultHarvestRecordVO</h2>

<a id="schemaresultpageresultharvestrecordvo"></a>
<a id="schema_ResultPageResultHarvestRecordVO"></a>
<a id="tocSresultpageresultharvestrecordvo"></a>
<a id="tocsresultpageresultharvestrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "adoptionId": 0,
        "harvestTime": "2019-08-24",
        "status": "string",
        "statusDesc": "string",
        "packageType": "string",
        "logisticsId": 0,
        "logisticsNo": "string",
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultHarvestRecordVO](#schemapageresultharvestrecordvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultHarvestRecordVO">ResultHarvestRecordVO</h2>

<a id="schemaresultharvestrecordvo"></a>
<a id="schema_ResultHarvestRecordVO"></a>
<a id="tocSresultharvestrecordvo"></a>
<a id="tocsresultharvestrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "adoptionId": 0,
    "harvestTime": "2019-08-24",
    "status": "string",
    "statusDesc": "string",
    "packageType": "string",
    "logisticsId": 0,
    "logisticsNo": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[HarvestRecordVO](#schemaharvestrecordvo)|false|none||收获记录展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListHarvestRecordVO">ResultListHarvestRecordVO</h2>

<a id="schemaresultlistharvestrecordvo"></a>
<a id="schema_ResultListHarvestRecordVO"></a>
<a id="tocSresultlistharvestrecordvo"></a>
<a id="tocsresultlistharvestrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "adoptionId": 0,
      "harvestTime": "2019-08-24",
      "status": "string",
      "statusDesc": "string",
      "packageType": "string",
      "logisticsId": 0,
      "logisticsNo": "string",
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[HarvestRecordVO](#schemaharvestrecordvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_FarmVO">FarmVO</h2>

<a id="schemafarmvo"></a>
<a id="schema_FarmVO"></a>
<a id="tocSfarmvo"></a>
<a id="tocsfarmvo"></a>

```json
{
  "id": 0,
  "farmName": "string",
  "farmCode": "string",
  "description": "string",
  "province": "string",
  "city": "string",
  "district": "string",
  "address": "string",
  "fullAddress": "string",
  "longitude": 0,
  "latitude": 0,
  "totalArea": 0,
  "contactPerson": "string",
  "contactPhone": "string",
  "businessLicense": "string",
  "isVerified": 0,
  "verifiedDesc": "string",
  "status": 0,
  "statusDesc": "string",
  "auditTime": "2019-08-24T14:15:22Z",
  "auditUserId": 0,
  "auditUserName": "string",
  "auditRemark": "string",
  "ownerId": 0,
  "ownerName": "string",
  "imageUrls": [
    "string"
  ],
  "plotCount": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

农场展示VO

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||农场ID|
|farmName|string|false|none||农场名称|
|farmCode|string|false|none||农场编码|
|description|string|false|none||农场描述|
|province|string|false|none||省份|
|city|string|false|none||城市|
|district|string|false|none||区县|
|address|string|false|none||详细地址|
|fullAddress|string|false|none||完整地址|
|longitude|number|false|none||经度|
|latitude|number|false|none||纬度|
|totalArea|number|false|none||总面积(平方米)|
|contactPerson|string|false|none||联系人|
|contactPhone|string|false|none||联系电话|
|businessLicense|string|false|none||营业执照|
|isVerified|integer(int32)|false|none||是否已认证：0未认证，1已认证|
|verifiedDesc|string|false|none||认证状态描述|
|status|integer(int32)|false|none||状态：0禁用，1启用，2审核中，3审核失败|
|statusDesc|string|false|none||状态描述|
|auditTime|string(date-time)|false|none||审核时间|
|auditUserId|integer(int64)|false|none||审核人ID|
|auditUserName|string|false|none||审核人姓名|
|auditRemark|string|false|none||审核备注|
|ownerId|integer(int64)|false|none||农场负责人用户ID|
|ownerName|string|false|none||农场负责人姓名|
|imageUrls|[string]|false|none||农场图片列表|
|plotCount|integer(int32)|false|none||地块数量|
|createTime|string(date-time)|false|none||创建时间|
|updateTime|string(date-time)|false|none||更新时间|

<h2 id="tocS_ResultFarmVO">ResultFarmVO</h2>

<a id="schemaresultfarmvo"></a>
<a id="schema_ResultFarmVO"></a>
<a id="tocSresultfarmvo"></a>
<a id="tocsresultfarmvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "farmName": "string",
    "farmCode": "string",
    "description": "string",
    "province": "string",
    "city": "string",
    "district": "string",
    "address": "string",
    "fullAddress": "string",
    "longitude": 0,
    "latitude": 0,
    "totalArea": 0,
    "contactPerson": "string",
    "contactPhone": "string",
    "businessLicense": "string",
    "isVerified": 0,
    "verifiedDesc": "string",
    "status": 0,
    "statusDesc": "string",
    "auditTime": "2019-08-24T14:15:22Z",
    "auditUserId": 0,
    "auditUserName": "string",
    "auditRemark": "string",
    "ownerId": 0,
    "ownerName": "string",
    "imageUrls": [
      "string"
    ],
    "plotCount": 0,
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[FarmVO](#schemafarmvo)|false|none||农场展示VO|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultFarmVO">PageResultFarmVO</h2>

<a id="schemapageresultfarmvo"></a>
<a id="schema_PageResultFarmVO"></a>
<a id="tocSpageresultfarmvo"></a>
<a id="tocspageresultfarmvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "farmName": "string",
      "farmCode": "string",
      "description": "string",
      "province": "string",
      "city": "string",
      "district": "string",
      "address": "string",
      "fullAddress": "string",
      "longitude": 0,
      "latitude": 0,
      "totalArea": 0,
      "contactPerson": "string",
      "contactPhone": "string",
      "businessLicense": "string",
      "isVerified": 0,
      "verifiedDesc": "string",
      "status": 0,
      "statusDesc": "string",
      "auditTime": "2019-08-24T14:15:22Z",
      "auditUserId": 0,
      "auditUserName": "string",
      "auditRemark": "string",
      "ownerId": 0,
      "ownerName": "string",
      "imageUrls": [
        "string"
      ],
      "plotCount": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[FarmVO](#schemafarmvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultFarmVO">ResultPageResultFarmVO</h2>

<a id="schemaresultpageresultfarmvo"></a>
<a id="schema_ResultPageResultFarmVO"></a>
<a id="tocSresultpageresultfarmvo"></a>
<a id="tocsresultpageresultfarmvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "farmName": "string",
        "farmCode": "string",
        "description": "string",
        "province": "string",
        "city": "string",
        "district": "string",
        "address": "string",
        "fullAddress": "string",
        "longitude": 0,
        "latitude": 0,
        "totalArea": 0,
        "contactPerson": "string",
        "contactPhone": "string",
        "businessLicense": "string",
        "isVerified": 0,
        "verifiedDesc": "string",
        "status": 0,
        "statusDesc": "string",
        "auditTime": "2019-08-24T14:15:22Z",
        "auditUserId": 0,
        "auditUserName": "string",
        "auditRemark": "string",
        "ownerId": 0,
        "ownerName": "string",
        "imageUrls": [
          "string"
        ],
        "plotCount": 0,
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultFarmVO](#schemapageresultfarmvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListFarmVO">ResultListFarmVO</h2>

<a id="schemaresultlistfarmvo"></a>
<a id="schema_ResultListFarmVO"></a>
<a id="tocSresultlistfarmvo"></a>
<a id="tocsresultlistfarmvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "farmName": "string",
      "farmCode": "string",
      "description": "string",
      "province": "string",
      "city": "string",
      "district": "string",
      "address": "string",
      "fullAddress": "string",
      "longitude": 0,
      "latitude": 0,
      "totalArea": 0,
      "contactPerson": "string",
      "contactPhone": "string",
      "businessLicense": "string",
      "isVerified": 0,
      "verifiedDesc": "string",
      "status": 0,
      "statusDesc": "string",
      "auditTime": "2019-08-24T14:15:22Z",
      "auditUserId": 0,
      "auditUserName": "string",
      "auditRemark": "string",
      "ownerId": 0,
      "ownerName": "string",
      "imageUrls": [
        "string"
      ],
      "plotCount": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[FarmVO](#schemafarmvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_AdoptionPackageVO">AdoptionPackageVO</h2>

<a id="schemaadoptionpackagevo"></a>
<a id="schema_AdoptionPackageVO"></a>
<a id="tocSadoptionpackagevo"></a>
<a id="tocsadoptionpackagevo"></a>

```json
{
  "id": 0,
  "projectId": 0,
  "name": "string",
  "unitCount": 0,
  "seasonCount": 0,
  "price": 0,
  "originalPrice": 0,
  "harvestCount": 0,
  "discountAmount": 0,
  "discountRate": 0,
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||none|
|projectId|integer(int64)|false|none||none|
|name|string|false|none||none|
|unitCount|integer(int32)|false|none||none|
|seasonCount|integer(int32)|false|none||none|
|price|number|false|none||none|
|originalPrice|number|false|none||none|
|harvestCount|integer(int32)|false|none||none|
|discountAmount|number|false|none||none|
|discountRate|number|false|none||none|
|createTime|string(date-time)|false|none||none|
|updateTime|string(date-time)|false|none||none|

<h2 id="tocS_AdoptionProjectCropVO">AdoptionProjectCropVO</h2>

<a id="schemaadoptionprojectcropvo"></a>
<a id="schema_AdoptionProjectCropVO"></a>
<a id="tocSadoptionprojectcropvo"></a>
<a id="tocsadoptionprojectcropvo"></a>

```json
{
  "id": 0,
  "projectId": 0,
  "cropId": 0,
  "cropName": "string",
  "cropImage": "string",
  "cropDescription": "string",
  "growthPeriod": 0,
  "plantingSeason": "string",
  "farmSelected": true,
  "farmSelectedDesc": "string",
  "createTime": "2019-08-24T14:15:22Z"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||none|
|projectId|integer(int64)|false|none||none|
|cropId|integer(int64)|false|none||none|
|cropName|string|false|none||none|
|cropImage|string|false|none||none|
|cropDescription|string|false|none||none|
|growthPeriod|integer(int32)|false|none||none|
|plantingSeason|string|false|none||none|
|farmSelected|boolean|false|none||none|
|farmSelectedDesc|string|false|none||none|
|createTime|string(date-time)|false|none||none|

<h2 id="tocS_AdoptionProjectVO">AdoptionProjectVO</h2>

<a id="schemaadoptionprojectvo"></a>
<a id="schema_AdoptionProjectVO"></a>
<a id="tocSadoptionprojectvo"></a>
<a id="tocsadoptionprojectvo"></a>

```json
{
  "id": 0,
  "farmId": 0,
  "farmName": "string",
  "name": "string",
  "description": "string",
  "type": "string",
  "typeDesc": "string",
  "plotId": 0,
  "plotName": "string",
  "unitCount": 0,
  "adoptedUnitCount": 0,
  "remainingUnitCount": 0,
  "unitArea": 0,
  "adoptionPrice": 0,
  "startTime": "2019-08-24",
  "endTime": "2019-08-24",
  "status": "string",
  "statusDesc": "string",
  "auditTime": "2019-08-24T14:15:22Z",
  "auditUserId": 0,
  "auditRemark": "string",
  "imageUrls": [
    "string"
  ],
  "crops": [
    {
      "id": 0,
      "projectId": 0,
      "cropId": 0,
      "cropName": "string",
      "cropImage": "string",
      "cropDescription": "string",
      "growthPeriod": 0,
      "plantingSeason": "string",
      "farmSelected": true,
      "farmSelectedDesc": "string",
      "createTime": "2019-08-24T14:15:22Z"
    }
  ],
  "packages": [
    {
      "id": 0,
      "projectId": 0,
      "name": "string",
      "unitCount": 0,
      "seasonCount": 0,
      "price": 0,
      "originalPrice": 0,
      "harvestCount": 0,
      "discountAmount": 0,
      "discountRate": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "createTime": "2019-08-24T14:15:22Z",
  "updateTime": "2019-08-24T14:15:22Z"
}

```

响应数据

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|integer(int64)|false|none||none|
|farmId|integer(int64)|false|none||none|
|farmName|string|false|none||none|
|name|string|false|none||none|
|description|string|false|none||none|
|type|string|false|none||none|
|typeDesc|string|false|none||none|
|plotId|integer(int64)|false|none||none|
|plotName|string|false|none||none|
|unitCount|integer(int32)|false|none||none|
|adoptedUnitCount|integer(int32)|false|none||none|
|remainingUnitCount|integer(int32)|false|none||none|
|unitArea|number|false|none||none|
|adoptionPrice|number|false|none||none|
|startTime|string(date)|false|none||none|
|endTime|string(date)|false|none||none|
|status|string|false|none||none|
|statusDesc|string|false|none||none|
|auditTime|string(date-time)|false|none||none|
|auditUserId|integer(int64)|false|none||none|
|auditRemark|string|false|none||none|
|imageUrls|[string]|false|none||none|
|crops|[[AdoptionProjectCropVO](#schemaadoptionprojectcropvo)]|false|none||none|
|packages|[[AdoptionPackageVO](#schemaadoptionpackagevo)]|false|none||none|
|createTime|string(date-time)|false|none||none|
|updateTime|string(date-time)|false|none||none|

<h2 id="tocS_ResultAdoptionProjectVO">ResultAdoptionProjectVO</h2>

<a id="schemaresultadoptionprojectvo"></a>
<a id="schema_ResultAdoptionProjectVO"></a>
<a id="tocSresultadoptionprojectvo"></a>
<a id="tocsresultadoptionprojectvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "farmId": 0,
    "farmName": "string",
    "name": "string",
    "description": "string",
    "type": "string",
    "typeDesc": "string",
    "plotId": 0,
    "plotName": "string",
    "unitCount": 0,
    "adoptedUnitCount": 0,
    "remainingUnitCount": 0,
    "unitArea": 0,
    "adoptionPrice": 0,
    "startTime": "2019-08-24",
    "endTime": "2019-08-24",
    "status": "string",
    "statusDesc": "string",
    "auditTime": "2019-08-24T14:15:22Z",
    "auditUserId": 0,
    "auditRemark": "string",
    "imageUrls": [
      "string"
    ],
    "crops": [
      {
        "id": 0,
        "projectId": 0,
        "cropId": 0,
        "cropName": "string",
        "cropImage": "string",
        "cropDescription": "string",
        "growthPeriod": 0,
        "plantingSeason": "string",
        "farmSelected": true,
        "farmSelectedDesc": "string",
        "createTime": "2019-08-24T14:15:22Z"
      }
    ],
    "packages": [
      {
        "id": 0,
        "projectId": 0,
        "name": "string",
        "unitCount": 0,
        "seasonCount": 0,
        "price": 0,
        "originalPrice": 0,
        "harvestCount": 0,
        "discountAmount": 0,
        "discountRate": 0,
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ],
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[AdoptionProjectVO](#schemaadoptionprojectvo)|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListAdoptionProjectVO">ResultListAdoptionProjectVO</h2>

<a id="schemaresultlistadoptionprojectvo"></a>
<a id="schema_ResultListAdoptionProjectVO"></a>
<a id="tocSresultlistadoptionprojectvo"></a>
<a id="tocsresultlistadoptionprojectvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "farmId": 0,
      "farmName": "string",
      "name": "string",
      "description": "string",
      "type": "string",
      "typeDesc": "string",
      "plotId": 0,
      "plotName": "string",
      "unitCount": 0,
      "adoptedUnitCount": 0,
      "remainingUnitCount": 0,
      "unitArea": 0,
      "adoptionPrice": 0,
      "startTime": "2019-08-24",
      "endTime": "2019-08-24",
      "status": "string",
      "statusDesc": "string",
      "auditTime": "2019-08-24T14:15:22Z",
      "auditUserId": 0,
      "auditRemark": "string",
      "imageUrls": [
        "string"
      ],
      "crops": [
        {
          "id": 0,
          "projectId": 0,
          "cropId": 0,
          "cropName": "string",
          "cropImage": "string",
          "cropDescription": "string",
          "growthPeriod": 0,
          "plantingSeason": "string",
          "farmSelected": true,
          "farmSelectedDesc": "string",
          "createTime": "2019-08-24T14:15:22Z"
        }
      ],
      "packages": [
        {
          "id": 0,
          "projectId": 0,
          "name": "string",
          "unitCount": 0,
          "seasonCount": 0,
          "price": 0,
          "originalPrice": 0,
          "harvestCount": 0,
          "discountAmount": 0,
          "discountRate": 0,
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[AdoptionProjectVO](#schemaadoptionprojectvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_PageResultAdoptionProjectVO">PageResultAdoptionProjectVO</h2>

<a id="schemapageresultadoptionprojectvo"></a>
<a id="schema_PageResultAdoptionProjectVO"></a>
<a id="tocSpageresultadoptionprojectvo"></a>
<a id="tocspageresultadoptionprojectvo"></a>

```json
{
  "current": 0,
  "size": 0,
  "total": 0,
  "pages": 0,
  "records": [
    {
      "id": 0,
      "farmId": 0,
      "farmName": "string",
      "name": "string",
      "description": "string",
      "type": "string",
      "typeDesc": "string",
      "plotId": 0,
      "plotName": "string",
      "unitCount": 0,
      "adoptedUnitCount": 0,
      "remainingUnitCount": 0,
      "unitArea": 0,
      "adoptionPrice": 0,
      "startTime": "2019-08-24",
      "endTime": "2019-08-24",
      "status": "string",
      "statusDesc": "string",
      "auditTime": "2019-08-24T14:15:22Z",
      "auditUserId": 0,
      "auditRemark": "string",
      "imageUrls": [
        "string"
      ],
      "crops": [
        {
          "id": 0,
          "projectId": 0,
          "cropId": 0,
          "cropName": "string",
          "cropImage": "string",
          "cropDescription": "string",
          "growthPeriod": 0,
          "plantingSeason": "string",
          "farmSelected": true,
          "farmSelectedDesc": "string",
          "createTime": "2019-08-24T14:15:22Z"
        }
      ],
      "packages": [
        {
          "id": 0,
          "projectId": 0,
          "name": "string",
          "unitCount": 0,
          "seasonCount": 0,
          "price": 0,
          "originalPrice": 0,
          "harvestCount": 0,
          "discountAmount": 0,
          "discountRate": 0,
          "createTime": "2019-08-24T14:15:22Z",
          "updateTime": "2019-08-24T14:15:22Z"
        }
      ],
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ]
}

```

分页结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|current|integer(int64)|false|none||当前页码|
|size|integer(int64)|false|none||每页大小|
|total|integer(int64)|false|none||总记录数|
|pages|integer(int64)|false|none||总页数|
|records|[[AdoptionProjectVO](#schemaadoptionprojectvo)]|false|none||数据列表|

<h2 id="tocS_ResultPageResultAdoptionProjectVO">ResultPageResultAdoptionProjectVO</h2>

<a id="schemaresultpageresultadoptionprojectvo"></a>
<a id="schema_ResultPageResultAdoptionProjectVO"></a>
<a id="tocSresultpageresultadoptionprojectvo"></a>
<a id="tocsresultpageresultadoptionprojectvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "current": 0,
    "size": 0,
    "total": 0,
    "pages": 0,
    "records": [
      {
        "id": 0,
        "farmId": 0,
        "farmName": "string",
        "name": "string",
        "description": "string",
        "type": "string",
        "typeDesc": "string",
        "plotId": 0,
        "plotName": "string",
        "unitCount": 0,
        "adoptedUnitCount": 0,
        "remainingUnitCount": 0,
        "unitArea": 0,
        "adoptionPrice": 0,
        "startTime": "2019-08-24",
        "endTime": "2019-08-24",
        "status": "string",
        "statusDesc": "string",
        "auditTime": "2019-08-24T14:15:22Z",
        "auditUserId": 0,
        "auditRemark": "string",
        "imageUrls": [
          "string"
        ],
        "crops": [
          {
            "id": null,
            "projectId": null,
            "cropId": null,
            "cropName": null,
            "cropImage": null,
            "cropDescription": null,
            "growthPeriod": null,
            "plantingSeason": null,
            "farmSelected": null,
            "farmSelectedDesc": null,
            "createTime": null
          }
        ],
        "packages": [
          {
            "id": null,
            "projectId": null,
            "name": null,
            "unitCount": null,
            "seasonCount": null,
            "price": null,
            "originalPrice": null,
            "harvestCount": null,
            "discountAmount": null,
            "discountRate": null,
            "createTime": null,
            "updateTime": null
          }
        ],
        "createTime": "2019-08-24T14:15:22Z",
        "updateTime": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[PageResultAdoptionProjectVO](#schemapageresultadoptionprojectvo)|false|none||分页结果|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListAdoptionProjectCropVO">ResultListAdoptionProjectCropVO</h2>

<a id="schemaresultlistadoptionprojectcropvo"></a>
<a id="schema_ResultListAdoptionProjectCropVO"></a>
<a id="tocSresultlistadoptionprojectcropvo"></a>
<a id="tocsresultlistadoptionprojectcropvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "projectId": 0,
      "cropId": 0,
      "cropName": "string",
      "cropImage": "string",
      "cropDescription": "string",
      "growthPeriod": 0,
      "plantingSeason": "string",
      "farmSelected": true,
      "farmSelectedDesc": "string",
      "createTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[AdoptionProjectCropVO](#schemaadoptionprojectcropvo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultAdoptionPackageVO">ResultAdoptionPackageVO</h2>

<a id="schemaresultadoptionpackagevo"></a>
<a id="schema_ResultAdoptionPackageVO"></a>
<a id="tocSresultadoptionpackagevo"></a>
<a id="tocsresultadoptionpackagevo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": 0,
    "projectId": 0,
    "name": "string",
    "unitCount": 0,
    "seasonCount": 0,
    "price": 0,
    "originalPrice": 0,
    "harvestCount": 0,
    "discountAmount": 0,
    "discountRate": 0,
    "createTime": "2019-08-24T14:15:22Z",
    "updateTime": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[AdoptionPackageVO](#schemaadoptionpackagevo)|false|none||none|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

<h2 id="tocS_ResultListAdoptionPackageVO">ResultListAdoptionPackageVO</h2>

<a id="schemaresultlistadoptionpackagevo"></a>
<a id="schema_ResultListAdoptionPackageVO"></a>
<a id="tocSresultlistadoptionpackagevo"></a>
<a id="tocsresultlistadoptionpackagevo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": 0,
      "projectId": 0,
      "name": "string",
      "unitCount": 0,
      "seasonCount": 0,
      "price": 0,
      "originalPrice": 0,
      "harvestCount": 0,
      "discountAmount": 0,
      "discountRate": 0,
      "createTime": "2019-08-24T14:15:22Z",
      "updateTime": "2019-08-24T14:15:22Z"
    }
  ],
  "timestamp": 0,
  "success": true
}

```

响应结果

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer(int32)|false|none||状态码|
|message|string|false|none||返回消息|
|data|[[AdoptionPackageVO](#schemaadoptionpackagevo)]|false|none||响应数据|
|timestamp|integer(int64)|false|none||时间戳|
|success|boolean|false|none||none|

