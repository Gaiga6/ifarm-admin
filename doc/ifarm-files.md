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

# 文件上传模块/文件迁移管理

<a id="opIdvalidateMigration"></a>

## POST 验证迁移结果

POST /migration/validate

验证文件迁移的完整性

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sourcePath|query|string| 否 |源路径|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":"string","timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultString](#schemaresultstring)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdswitchStorageType"></a>

## POST 切换存储类型

POST /migration/switch-storage

切换文件存储类型（需要重启应用生效）

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|type|query|string| 是 |存储类型|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":"string","timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultString](#schemaresultstring)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdstartMigration"></a>

## POST 开始数据迁移

POST /migration/migrate

将本地文件迁移到OSS存储

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sourcePath|query|string| 否 |源路径|
|module|query|string| 否 |模块名称|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":"string","timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultString](#schemaresultstring)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdcleanupLocalFiles"></a>

## POST 清理本地文件

POST /migration/cleanup

清理迁移后的本地文件（支持试运行）

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|sourcePath|query|string| 否 |源路径|
|dryRun|query|boolean| 否 |是否试运行|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":"string","timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultString](#schemaresultstring)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetDirectoryStats"></a>

## GET 获取目录统计信息

GET /migration/stats

获取指定目录的文件统计信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|path|query|string| 否 |目录路径|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"totalFiles":0,"successCount":0,"failCount":0,"failedFiles":["string"],"totalSize":0,"processedSize":0,"progress":0.1},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMigrationResult](#schemaresultmigrationresult)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetMigrationGuide"></a>

## GET 获取迁移指南

GET /migration/guide

获取数据迁移的操作指南

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetStorageConfig"></a>

## GET 获取当前存储配置

GET /migration/config

查看当前的文件存储配置信息

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 文件上传模块/文件管理

<a id="opIduploadFile"></a>

## POST 单文件上传

POST /files/upload

上传单个文件，自动检测文件类型

> Body 请求参数

```yaml
file: ""

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|module|query|string| 否 |模块名称|
|strictValidation|query|boolean| 否 |是否严格验证文件类型|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |文件|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIduploadImages"></a>

## POST 多张图片上传

POST /files/upload/images

批量上传图片，只允许图片类型

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|files|query|array[string]| 是 |图片文件列表|
|module|query|string| 否 |模块名称|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"property1":{},"property2":{}}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListMapStringObject](#schemaresultlistmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIduploadImage"></a>

## POST 图片上传

POST /files/upload/image

专门用于图片上传，只允许图片类型

> Body 请求参数

```yaml
file: ""

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|module|query|string| 否 |模块名称|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |图片文件|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIduploadDocument"></a>

## POST 文档上传

POST /files/upload/document

专门用于文档上传，只允许文档类型

> Body 请求参数

```yaml
file: ""

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|module|query|string| 否 |模块名称|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |文档文件|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIduploadFiles"></a>

## POST 多文件上传

POST /files/upload/batch

批量上传多个文件，自动检测文件类型

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|files|query|array[string]| 是 |文件列表|
|module|query|string| 否 |模块名称|
|strictValidation|query|boolean| 否 |是否严格验证文件类型|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":[{"property1":{},"property2":{}}],"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultListMapStringObject](#schemaresultlistmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddetectFileType"></a>

## POST 检测文件类型

POST /files/detect-type

检测上传文件的类型信息

> Body 请求参数

```yaml
file: ""

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» file|body|string(binary)| 是 |文件|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetSupportedTypes"></a>

## GET 获取支持的文件类型

GET /files/supported-types

获取系统支持的所有文件类型

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdgetFileInfo"></a>

## GET 获取文件信息

GET /files/info

获取文件的基本信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|fileUrl|query|string| 是 |文件URL|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdfileExists"></a>

## GET 检查文件是否存在

GET /files/exists

检查指定URL的文件是否存在

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|fileUrl|query|string| 是 |文件URL|

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

<a id="opIdgetDownloadUrl"></a>

## GET 获取下载URL

GET /files/download-url

获取文件的临时下载URL（用于私有文件）

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|fileUrl|query|string| 是 |文件URL|
|expireInMinutes|query|integer(int32)| 否 |过期时间（分钟）|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":"string","timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultString](#schemaresultstring)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIddeleteFile"></a>

## DELETE 删除文件

DELETE /files/delete

根据文件URL删除文件

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|fileUrl|query|string| 是 |文件URL|

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

<a id="opIddeleteFiles"></a>

## DELETE 批量删除文件

DELETE /files/delete/batch

根据文件URL列表批量删除文件

> Body 请求参数

```json
[
  "string"
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[string]| 否 |none|

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

# 文件上传模块/健康检查

<a id="opIdhealth"></a>

## GET 健康检查

GET /health

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Bad Request|[ResultObject](#schemaresultobject)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|Internal Server Error|[ResultObject](#schemaresultobject)|

<a id="opIdinfo"></a>

## GET 系统信息

GET /health/info

> 返回示例

> 200 Response

```
{"code":0,"message":"string","data":{"property1":{},"property2":{}},"timestamp":0,"success":true}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|OK|[ResultMapStringObject](#schemaresultmapstringobject)|
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

