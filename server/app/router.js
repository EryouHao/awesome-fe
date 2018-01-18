'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.render);
  router.get('/user', controller.home.render);

  // 挂载鉴权路由
  app.passport.mount('github');

  app.router.get('/logout', controller.user.logout);
};
