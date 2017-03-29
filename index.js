'use strict';

const startTime = new Date();

const Koa = require('koa');
const hbs = require('koa-hbs');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const co = require('co');

const initConfig = require('./init/config');
const initMongoose = require('./init/mongoose');

// 初始化配置
global.config = initConfig.init();

// 初始化 Mongoose
initMongoose.init().catch(err => console.error(err.stack));

const app = new Koa();

// 设置调试日志
if (process.env.NODE_ENV === 'development') {
    app.use(require('koa-logger')());
}

// 设置 etag
app.use(conditional());
app.use(etag());

// 嘻嘻…
app.use(async (ctx, next) => {
    ctx.set('X-Powered-By', 'Koa');
    await next();
});

// 设置模板引擎
app.use(convert(hbs.middleware({
    viewPath: __dirname + '/views',
    defaultLayout: 'layout'
})));
app.use(async (ctx, next) => {
    const render = ctx.render;
    ctx.render = (...args) => co.call(ctx, render.apply(ctx, args));
    await next();
});

// 静态资源
app.use(serve(__dirname + '/public'));

// Body parser
app.use(bodyParser());

// 设置路由
const router = Router();
const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api');
router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/api',api.routes(), api.allowedMethods());
app.use(router.routes(), router.allowedMethods());

app.startUp = () => app.listen(global.config.system, () => {
    console.log('\x1b[90mServer started up in \x1b[1;36m%d\x1b[90m ms. ' +
                'Environment is \x1b[1;36m%s\x1b[90m. ' +
                'Address: \x1b[1;36mhttp://%s:%s\x1b[0m',
                new Date() - startTime,
                process.env.NODE_ENV,
                global.config.system.host,
                global.config.system.port);
});

module.exports = app;
