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

  async getAllTopic() {
    const topicList = await this.ctx.model.Topic.find().sort({ createTIme: -1 });
    return topicList;
  }

  async getTopicById(id) {
    const topic = await this.ctx.model.Topic.findOne({ _id: id });
    return topic;
  }
}

module.exports = TopicService;
