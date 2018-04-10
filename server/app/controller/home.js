'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 首页话题列表
  async list() {
    const { ctx, service } = this;
    const topicList = await service.topic.getAllTopic();
    const list = [];
    for (const topic of topicList) {
      const user = await service.user.getUserById(topic.userId);
      list.push({
        _id: topic._id,
        userId: topic.userId,
        content: topic.content,
        title: topic.title,
        category: topic.category,
        updateAt: topic.updateAt,
        createAt: topic.createAt,
        good: topic.good,
        top: topic.top,
        userPhoto: user.photo,
        replyCount: topic.replyCount,
        visitCount: topic.visitCount,
      });
    }

    ctx.body = {
      success: true,
      list,
    };
  }
}

module.exports = HomeController;
