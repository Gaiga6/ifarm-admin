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

# 农产品管理模块/农场农产品关联管理

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

# 农产品管理模块/农产品管理

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

