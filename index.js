'use strict';

const Koa = require('koa');
const hbs = require('koa-hbs');
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const convert = require('koa-convert');
const co = require('co');

const initConfig = require('./init/config');
const initMongoose = require('./init/mongoose');

(async () => {
    try {
        // 初始化配置
        global.config = initConfig.init();

        // 初始化 Mongoose
        await initMongoose.init();

        const app = new Koa();

        // 设置模板引擎
        app.use(convert(hbs.middleware({
            viewPath: __dirname + '/views',
            defaultLayout: 'layout'
        })));
        app.use(async (ctx, next) => {
            const render = ctx.render;
            ctx.render = async (...args) => co.call(ctx, render.apply(ctx, args));
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

        // 监听
        const { port, host } = global.config.system;
        app.listen(port, host);

    } catch (err) {
        console.error(err.stack);
    }
})();
