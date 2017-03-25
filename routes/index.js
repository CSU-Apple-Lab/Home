'use strict';

const router = require('koa-router')();
const rf = require('fs').readFileSync;

// 我承认这个办法非常非常勉强……
router.get('/', async (ctx) => {
    await ctx.render('layout', { body: rf('./views/index.hbs') });
});

router.get('/member', async (ctx) => {
    await ctx.render('html/member.html', { title: '中南大学苹果实验室' });
});

module.exports = router;
