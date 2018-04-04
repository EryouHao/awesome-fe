'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async render() {
    const ctx = this.ctx;
    if (ctx.isAuthenticated()) {
      // 如果登录，则检查是否存在用户，不存在则创建用户
      const user = await ctx.model.User.find({ id: ctx.user.id });
      if (!user.length) {
        const data = {
          userName: ctx.user.name,
          id: ctx.user.id,
          displayName: ctx.user.displayName,
          photo: ctx.user.photo,
          provider: ctx.user.provider,
          accessToken: ctx.user.accessToken,
        };
        const userModel = new ctx.model.User(data);
        await userModel.save();
      }
      const value = JSON.stringify(ctx.user);
      ctx.cookies.set('afeUser', encodeURIComponent(value), {
        httpOnly: true,
      });
      ctx.redirect('http://127.0.0.1:3000');
    }
  }
}

module.exports = HomeController;
