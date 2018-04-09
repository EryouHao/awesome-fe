'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // async getUserInfo() {
  // }

  async getUserById(id) {
    return await this.ctx.model.User.findOne({ id });
  }
}

module.exports = UserService;
