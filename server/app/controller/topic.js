'use strict';

const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const Controller = require('egg').Controller;

class TopicController extends Controller {
  async create() {
    const { ctx, service } = this;
    const { body } = ctx.request;

    console.log(service, body);

    await service.topic.createTopic({
      title: body.title,
      category: body.category,
      content: body.content,
      userId: ctx.user.id,
    });

    ctx.body = {
      success: true,
    };
  }

  async upload() {
    const { ctx, config } = this;
    const stream = await ctx.getFileStream();
    const filename = encodeURIComponent((new Date()).getTime()) +
      path.extname(stream.filename).toLowerCase();
    const target = path.join(config.upload.path, filename);
    // 七牛云上传
    if (config.qn.accessKey) {
      try {
        const upload = this.ctx.helper.qnUpload(config.qn);
        const result = await upload(stream);
        ctx.body = {
          success: true,
          url: `${config.qn.origin}/${result.hash}`,
        };
      } catch (e) {
        console.log(e);
      }
    } else {
      // 普通上传 FIXME: URL 配置
      const writeStream = fs.createWriteStream(target);
      try {
        await awaitWriteStream(stream.pipe(writeStream));
        ctx.body = {
          success: true,
          url: `http://localhost:7001${config.upload.url + filename}`,
        };
      } catch (err) {
        ctx.body = {
          success: false,
          message: err.message,
        };
      }
    }
  }

  async all() {
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

module.exports = TopicController;
