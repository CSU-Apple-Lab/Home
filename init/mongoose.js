'use strict';

const mongoose = require('mongoose');
const cfg_mongo = global.config.mongo;
mongoose.Promise = global.Promise;

const opts = {
    user: cfg_mongo.user,
    pass: cfg_mongo.pass,
    auth:{
        authdb: cfg_mongo.db
    }
};

const uri = `mongodb://${cfg_mongo.host}:${cfg_mongo.port}/${cfg_mongo.db}`;

module.exports = mongoose.connect(uri, opts);
