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

  /**
   * 挂载鉴权路由，相当于
   * router.get('/passport/github', github)
   * router.get('/passport/github/callback', github)
   */
  app.passport.mount('github', {
    loginURL: '/passport/github',
    callbackURL: '/passport/github/callback',
    // successRedirect: 'http://localhost:3000',
  });
};
