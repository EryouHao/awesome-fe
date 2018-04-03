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
      userId: ctx.user._id,
    });

    ctx.body = {
      success: true,
    };
  }

  async upload() {
    console.log('run....');
    const { ctx, config } = this;
    const stream = await ctx.getFileStream();
    const filename = encodeURIComponent(stream.fields.name) +
      path.extname(stream.filename).toLowerCase();
    const target = path.join(config.upload.path, filename);

    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
      ctx.body = {
        success: true,
        url: config.upload.url + filename,
      };
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = TopicController;
