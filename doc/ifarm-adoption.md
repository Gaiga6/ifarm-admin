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

# 认养项目管理模块/认养项目管理

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

# 认养项目管理模块/项目作物管理

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

# 认养项目管理模块/认养套餐管理

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

