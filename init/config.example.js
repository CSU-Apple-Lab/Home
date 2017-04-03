'use strict';

exports.init = () => {
  let port, host, mongo;

  switch (process.env.NODE_ENV) {
  case 'production':
    host = '**';
    port = 3000;
    mongo = {
      host: '**',
      port: '**',
      db: '**',
      user: '**',
      pass: '**',
    };
    break;

  case 'development':
  default:
    host = 'localhost';
    port = 2333;
    mongo = {
      host: 'localhost',
      port: '**',
      db: '**',
      user: '**',
      pass: '**',
    };
    break;
  }

  const config = {
    system: {
      host: host || '0.0.0.0',
      port: process.env.PORT || port,
    },
    mongo: mongo,
  };

  return config;
};
