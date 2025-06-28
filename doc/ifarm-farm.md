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

