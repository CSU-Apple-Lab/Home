'use strict';

const router = require('koa-router')();
const rf = require('fs').readFileSync;

router.get('/', async (ctx) => {
    await ctx.render('index');
});

router.get('/member', async (ctx) => {
    await ctx.render('html/member.html', { title: '中南大学苹果实验室' });
});

module.exports = router;
