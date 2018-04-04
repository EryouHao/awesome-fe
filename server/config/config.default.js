'use strict';

const path = require('path');
const afeConfig = require('../afe-config');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516271380278_5569';

  // add your config here
  config.middleware = [];

  // github key and secret
  config.passportGithub = {
    key: afeConfig.github.key,
    secret: afeConfig.github.secret,
    callbackURL: '/passport/github',
  };

  // mongo
  config.mongoose = {
    url: afeConfig.mongoUrl || 'mongodb://localhost:27017/awesome_fe',
    options: {},
  };

  // upload
  config.upload = {
    path: path.join(appInfo.baseDir, 'app/public/upload/'),
    url: '/public/upload/',
  };

  // 关闭安全威胁
  config.security = {
    csrf: {
      enable: false,
    },
  };

  // 七牛
  config.qn = {
    accessKey: afeConfig.qn.accessKey,
    secretKey: afeConfig.qn.secretKey,
    bucket: afeConfig.qn.bucket,
    origin: afeConfig.qn.origin,
  };

  return config;
};
