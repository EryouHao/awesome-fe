<template>
  <div class="cell">
    <div class="title-container">
      <v-avatar size="32" class="avatar">
        <img src="~assets/images/avatar.png" alt="Avatar">
      </v-avatar>
      <span class="number">96 / 14505</span>
      <span class="tag">精华</span>
      <span></span>
      <a href="#" class="topic-title">Hello 了个 world</a>
    </div>
    <span class="time">半小时前</span>
  </div>
</template>

<script>
export default {
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
