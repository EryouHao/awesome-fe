<template>
  <div class="cell">
    <div class="title-container">
      <v-avatar size="32" class="avatar">
        <img :src="topic.userPhoto" alt="Avatar">
      </v-avatar>
      <span class="number">{{ topic.replyCount }} / {{ topic.visitCount }}</span>
      <span class="tag" v-if="topic.good">精华</span>
      <span class="tag" v-else>{{ topic.category }}</span>
      <span></span>
      <a :href="`/topic/${topic._id}`" class="topic-title">{{ topic.title }}</a>
    </div>
    <span class="time">{{ topic.createAt | formatTime }}</span>
  </div>
</template>

<script>
export default {
  props: {
    topic: Object,
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  padding: 8px 16px;
  display: flex;
  line-height: 40px;
  border-bottom: 1px dotted #eee;
  transition: all 0.3s;
  &:hover {
    background: #f8f8f8;
  }
}
.number {
  font-size: 12px;
  margin: 0 8px;
  color: #666;
}
.time {
  width: 120px;
  font-size: 12px;
  text-align: right;
}
.title-container {
  flex: 1;
}
.topic-title {
  font-size: 18px;
}
.tag {
  background: #000;
  color: #fff;
  padding: 2px 4px;
  border-radius: 2px;
  margin: 0 8px;
}
</style>
