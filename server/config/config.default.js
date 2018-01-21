'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1516271380278_5569';

  // add your config here
  config.middleware = [];

  // github key and secret
  config.passportGithub = {
    key: 'a20309c7cd5fdb49a703',
    secret: '403925a1e5c821d12ff27c306c152b343d2b2ee2',
    callbackURL: '/passport/github',
  };

  // mongo
  config.mongoose = {
    url: 'mongodb://localhost:27017/awesome_fe',
    options: {},
  };

  return config;
};
