# AJAX的demo

ajax === async javascript and xml

## ajax的全部内容就是用 JS 发请求 和 收响应

它有4个步骤

1. 创建 HttpRequest 对象 (全程XMLHttpRequest)

2. 调用open对象 param1 : 请求方式 get post... param2 : 请求路径

3. 调用onload 和 onerror 事件，专业前端会改用onreadystatechange事件，readystate值有4个 

| 值   | 状态               | 描述                                                |
| ---- | ------------------ | --------------------------------------------------- |
| `0`  | `UNSENT`           | 代理被创建，但尚未调用 open() 方法。                |
| `1`  | `OPENED`           | `open()` 方法已经被调用。                           |
| `2`  | `HEADERS_RECEIVED` | `send()` 方法已经被调用，并且头部和状态已经可获得。 |
| `3`  | `LOADING`          | 下载中；`responseText` 属性已经包含部分数据。       |
| `4`  | `DONE`             | 下载操作已完成。                                    |

4. 调用对象send 方法 



# 总结

HTTP 是个框 什么都可以往里装 (html, css, js, xml, json,...)

记得设置正确的Content-Type，好习惯

知道怎么解析这些内容，就可以使用

## 解析方法

css 生成 style标签

js   生成  script标签

html 使用 innerHTML 和 dom api

xml 使用 responseXML 和 dom api

json 使用 JSON.parse 方法 和 dom api

...





-------

```javascript
使用 node server.js 8888 
```

