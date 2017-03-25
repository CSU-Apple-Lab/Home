'use strict';

const router = require('koa-router')();

router.get('/', (ctx) => {
    ctx.body = 'respond with a resource\nThis section is WIP.';
});

module.exports = router;
