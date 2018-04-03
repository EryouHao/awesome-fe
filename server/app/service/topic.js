'use strict';

const Service = require('egg').Service;

class TopicService extends Service {
  async createTopic({ title, category, content, userId }) {
    const topic = new this.ctx.model.Topic();
    topic.title = title;
    topic.category = category;
    topic.content = content;
    topic.userId = userId;

    return topic.save();
  }
}

module.exports = TopicService;
