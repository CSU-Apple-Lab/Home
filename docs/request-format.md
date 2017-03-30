# request-format

## request headers
```
POST /path/to/submit HTTP/1.1
Content-Type: application/json;charset=UTF-8
```

## hr-coder
```js
{
    "name": "萌小天", // 姓名
    "class" "计科1402", // 班级
    "id": "0902140229", // 学号
    "email": "nuptunee@gamil.com", // Email
    "grade": "大三", // 年级
    "gender": "男", // 性别
    "part": "移动组", // 想加入的技术组
    "phone": "15675884010", // 手机号码
    "softwareExp": "劳资是大神，全栈你懂吗", // 软件开发经验
    "mobileExp": "是", // 是否有过移动开发经验
    "webExp": "是", // 是否有过web开发经验
    "otherExp": "是", // 是否有过ACM等算法研究经验
    "skill": "1.熟练使用JavaScript、HTML、CSS；2.熟悉Linux下的开发与基本运维；3.对Vue.js框架有一定开发经验；4.能够使用php及thinkphp框架开发网站后端", // 专业技能
    "introduce": "~劳资是大神，全栈你懂吗~" // 自我能力描述
}
```

## hr-designer 
```js
{
    "name": "萌小天", // 姓名
    "class" "计科1402", // 班级
    "id": "0902140229", // 学号
    "email": "nuptunee@gamil.com", // Email
    "grade": "大三", // 年级
    "gender": "男", // 性别
    "phone": "15675884010", // 手机号码
    "designExp": "劳资是大神，平面合成三维通吃，创世神", // 设计经验
    "uiExp": "是", // 是否有过UI设计经验
    "zcoolExp": "是", // 是否在站酷、UI中国、Dribbble等上传过作品
    "mdExp": "是", // 是否清楚一些UI设计规范（如Meterial Design）
    "skill": ".熟练使用photoshop工具；2.熟练使用AE，并对trapcode，element3d等有一定了解；3.可以使用maya建模；4.个人站酷账号为zcool.com/xxx", // 专业技能
    "introduce": "~劳资是大神，平面合成三维通吃，创世神~" // 自我能力描述
}
```

## hr-pmer
```js
{
    "name": "萌小天", // 姓名
    "class" "计科1402", // 班级
    "id": "0902140229", // 学号
    "email": "nuptunee@gamil.com", // Email
    "grade": "大三", // 年级
    "gender": "男", // 性别
    "phone": "15675884010", // 手机号码
    "skill": "1.熟练使用Axure原型制作工具；2.熟练使用墨刀工具；3.对互联网产品有自己的独到见解", // 专业技能
    "introduce": "~~" // 自我能力描述
}
```