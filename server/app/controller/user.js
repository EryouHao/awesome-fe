'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async getUserInfo() {
    this.ctx.body = this.ctx.user;
  }

  async logout() {
    const ctx = this.ctx;

    ctx.logout();
    ctx.redirect(ctx.get('referer') || '/');
  }

}

module.exports = UserController;
