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

# 物流管理模块/物流管理

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

# 物流管理模块/收获记录管理

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

# 物流管理模块/物流跟踪记录管理

<a id="opIdgetTrackingPage"></a>

## GET 分页查询物流跟踪记录列表

GET /logistics-tracking

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|page|query|integer(int32)| 否 |页码|
|size|query|integer(int32)| 否 |每页大小|
|logisticsId|query|integer(int64)| 否 |物流ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"current":0,"size":0,"total":0,"pages":0,"records":[{"id":0,"logisticsId":0,"trackingTime":"2019-08-24T14:15:22Z","location":"string","description":"string","createTime":"2019-08-24T14:15:22Z"}]},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultPageResultLogisticsTrackingVO](#schemaresultpageresultlogisticstrackingvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcreateTracking"></a>

## POST 创建物流跟踪记录

POST /logistics-tracking

> Body 请求参数

```json
{
  "logisticsId": 0,
  "trackingTime": "2019-08-24T14:15:22Z",
  "location": "北京市朝阳区物流中心",
  "description": "快件已到达北京分拣中心"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[LogisticsTrackingCreateDTO](#schemalogisticstrackingcreatedto)| 否 |none|

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

<a id="opIdbatchCreateTracking"></a>

## POST 批量创建物流跟踪记录

POST /logistics-tracking/batch

> Body 请求参数

```json
[
  {
    "logisticsId": 0,
    "trackingTime": "2019-08-24T14:15:22Z",
    "location": "北京市朝阳区物流中心",
    "description": "快件已到达北京分拣中心"
  }
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[LogisticsTrackingCreateDTO](#schemalogisticstrackingcreatedto)| 否 |none|

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

<a id="opIdgetTrackingDetail"></a>

## GET 查询物流跟踪记录详情

GET /logistics-tracking/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |跟踪记录ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"id":0,"logisticsId":0,"trackingTime":"2019-08-24T14:15:22Z","location":"string","description":"string","createTime":"2019-08-24T14:15:22Z"},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultLogisticsTrackingVO](#schemaresultlogisticstrackingvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteTracking"></a>

## DELETE 删除物流跟踪记录

DELETE /logistics-tracking/{id}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |跟踪记录ID|

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

<a id="opIdgetTrackingsByLogisticsId"></a>

## GET 根据物流ID查询跟踪记录列表

GET /logistics-tracking/logistics/{logisticsId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|logisticsId|path|integer(int64)| 是 |物流ID|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"id":0,"logisticsId":0,"trackingTime":"2019-08-24T14:15:22Z","location":"string","description":"string","createTime":"2019-08-24T14:15:22Z"}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListLogisticsTrackingVO](#schemaresultlistlogisticstrackingvo)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteTrackingsByLogisticsId"></a>

## DELETE 根据物流ID删除所有跟踪记录

DELETE /logistics-tracking/logistics/{logisticsId}

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|logisticsId|path|integer(int64)| 是 |物流ID|

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

