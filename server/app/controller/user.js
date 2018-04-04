'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async getUserInfo() {
    const { ctx } = this;
    ctx.body = { success: true, data: ctx.user };
  }

  async logout() {
    const { ctx } = this;
    ctx.logout();
    ctx.cookies.set('afeUser', null);
    ctx.body = { success: true };
  }

}

module.exports = UserController;
