'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ObjectId = Schema.ObjectId;

  const TopicSchema = new Schema({
    title: { type: String },
    category: { type: String },
    content: { type: String },
    userId: { type: ObjectId },
    top: { type: Boolean, default: false },
    good: { type: Boolean, default: false },
    lock: { type: Boolean, default: false },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  });

  return mongoose.model('Topic', TopicSchema);
};
