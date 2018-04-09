'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TopicSchema = new Schema({
    title: { type: String },
    category: { type: String },
    content: { type: String },
    userId: { type: String },
    top: { type: Boolean, default: false },
    good: { type: Boolean, default: false },
    lock: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    replyCount: { type: Number, default: 0 },
    visitCount: { type: Number, default: 0 },
  });

  return mongoose.model('Topic', TopicSchema);
};
