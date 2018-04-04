'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  // user
  router.get('/user/login', controller.user.login);
  router.get('/user/info', controller.user.getUserInfo);
  router.get('/user/logout', controller.user.logout);

  // topic
  router.post('/topic/create', controller.topic.create);
  router.post('/topic/upload', controller.topic.upload);

  app.passport.mount('github', {
    loginURL: '/passport/github',
    // callbackURL: '/passport/github/callback',
    successRedirect: '/user/login',
  });
};
