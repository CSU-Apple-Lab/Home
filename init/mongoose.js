'use strict';

const mongoose = require('mongoose');

exports.init = () => {
  const cfgMongo = global.config.mongo;
  mongoose.Promise = global.Promise;

  const opts = {
    user: cfgMongo.user,
    pass: cfgMongo.pass,
    auth: {
      authdb: cfgMongo.db,
    },
  };

  const uri = `mongodb://${ cfgMongo.host }:${ cfgMongo.port }/${ cfgMongo.db }`;

    // 返回一个 Promise
  return mongoose.connect(uri, opts);
};
