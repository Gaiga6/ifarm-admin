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

# 订单管理模块/订单管理

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

