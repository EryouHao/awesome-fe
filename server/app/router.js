'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.render);

  router.get('/user', controller.home.render);
  router.get('/user/info', controller.user.getUserInfo);
  router.get('/user/logout', controller.user.logout);
  router.post('/topic/upload', controller.topic.upload);

  app.passport.mount('github', {
    loginURL: '/passport/github',
    callbackURL: '/passport/github/callback',
  });
};
