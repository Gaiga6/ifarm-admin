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

