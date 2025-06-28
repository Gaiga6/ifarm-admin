# 种植管理模块/认养记录管理

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

