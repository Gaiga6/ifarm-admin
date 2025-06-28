# 农产品管理模块/农产品分类管理

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

# 数据模型