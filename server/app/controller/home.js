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
        const res = await userModel.save();
        console.log('第一次创建');
        console.log(res);
        ctx.body = 'success';
      } else {
        console.log('已经存在了');
        console.log(ctx.user);
        ctx.redirect('http://127.0.0.1:3000');
      }
    } else {
      ctx.session.returnTo = ctx.path;
      ctx.body = `
        <div>
          <h2>${ctx.path}</h2>
          <hr>
          Login with
          <a href="/passport/weibo">Weibo</a> | <a href="/passport/github">Github</a> |
          <a href="/passport/bitbucket">Bitbucket</a> | <a href="/passport/twitter">Twitter</a>
          <hr>
          <a href="/">Home</a> | <a href="/user">User</a>
        </div>
      `;
    }
  }
}

module.exports = HomeController;
