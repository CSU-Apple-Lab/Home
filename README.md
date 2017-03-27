# :apple: Our Home :heart:
## Setup
无论是开发还是部署，都要先安装 Nodejs (v7.6.0 以上版本)和 MongoDB。

### 开发配置
``` bash
# 假定已安装 Nodejs v7.6.0+ 和 MongoDB

# clone 项目并设置
$ git clone git@github.com:Equim-chan/Home.git
$ npm i
$ cd Home/init
$ cp config.example.js config.js
$ vim config.js                              # 编辑配置文件，包含监听端口，MongoDB 端口及其用户验证等
$ cd ..

# 调试运行
$ DEBUG=koa-views node index.js
```

### 部署配置
``` bash
# 假定已安装 Nodejs v7.6.0+ 和 MongoDB

# 安装 pm2
$ sudo npm i -g pm2

# 安装 pm2-logrotate 插件并配置
$ pm2 install pm2-logrotate
$ pm2 set pm2-logrotate:max_size 10M         # 单个日志最大体积 10 MiB
$ pm2 set pm2-logrotate:compress true        # 对已轮转的日志进行压缩
$ pm2 set pm2-logrotate:retain 7             # 最多保留 7 个日志

# clone 项目并设置
$ git clone git@github.com:Equim-chan/Home.git
$ npm i --production
$ cd Home/init
$ cp config.example.js config.js
$ vim config.js                              # 编辑配置文件，包含监听端口，MongoDB 端口及其用户验证等
$ cd ..

# 配置部署配置(可选)
$ vim labHome.yml

# 部署
$ pm2 start labHome.yml
```

## TODO
### 前端
* [ ] 修复表单
* [ ] 修复路由
* [ ] ~~讨伐懒崇~~

### 后端
* [x] 解决 hbs 渲染问题
* [ ] 添加日志模块
* [ ] 完善中间件

## Contributors
[![Equim](https://avatars3.githubusercontent.com/u/17795845?v=3&s=100 "Equim")](https://github.com/Equim-chan)
[![Zijin Xiao](https://avatars3.githubusercontent.com/u/4846135?v=3&s=100 "Zijin Xiao")](https://github.com/jxpxxzj)
[![Bugzhang](https://avatars2.githubusercontent.com/u/9525158?v=3&s=100 "Bugzhang")](https://github.com/rhythm1995)

## Powered by
[![CSU Apple Lab](https://avatars1.githubusercontent.com/u/23062358?v=3&s=100 "CSU Apple Lab")](https://github.com/CSU-Apple-Lab)
