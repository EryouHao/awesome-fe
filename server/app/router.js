'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const { home, user, topic } = controller;

  // home
  router.get('/home/list', home.list);

  // user
  router.get('/user/login', user.login);
  router.get('/user/info', user.getUserInfo);
  router.get('/user/logout', user.logout);

  // topic
  router.get('/topic/:id', topic.index);
  router.post('/topic/create', topic.create);
  router.post('/topic/upload', topic.upload);

  app.passport.mount('github', {
    loginURL: '/passport/github',
    // callbackURL: '/passport/github/callback',
    successRedirect: '/user/login',
  });
};
