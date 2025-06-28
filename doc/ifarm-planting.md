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

# 种植管理模块/种植单元管理

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

# 种植管理模块/种植记录管理

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

