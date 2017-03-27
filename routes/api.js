'use strict';

const router = require('koa-router')();
const submit = require('../controller/submit');

router.post('/submit-designer', submit.designer);
router.post('/submit-coder', submit.coder);
router.post('/submit-pmer', submit.pmer);

module.exports = router;
