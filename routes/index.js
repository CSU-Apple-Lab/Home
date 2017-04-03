'use strict';

const router = require('koa-router')();

router.get('/', async (ctx) => {
  await ctx.render('index');
});

router.get('hr-coder', async (ctx) => {
  await ctx.render('hr-coder');
});

router.get('hr-designer', async (ctx) => {
  await ctx.render('hr-designer');
});

router.get('hr-pmer', async (ctx) => {
  await ctx.render('hr-pmer');
});

router.get('member', async (ctx) => {
  await ctx.render('member');
});

module.exports = router;
