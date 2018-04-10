<template>
  <div class="topic">
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs9>
          <v-card>
            <v-card-title>
              <div class="topic-container" v-if="topic">
                <h2 class="topic-title">{{ topic.title }}</h2>
                <section
                  class="topic-content"
                  v-html="renderContent(topic.content)"
                ></section>
              </div>
              <v-progress-circular
                style="text-align: center; width: 100%;"
                v-else
                indeterminate
                :size="50"
                color="black"
              ></v-progress-circular>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex xs3>
          作者信息
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import marked from 'marked'
export default {
  data: () => ({
    topic: null,
  }),
  mounted () {
    const topicId = this.$route.params.id
    this.fetchTopic(topicId)
  },
  methods: {
    async fetchTopic (id) {
      const res = await this.$api.topic.fetchTopic(id)
      if (res.success) {
        this.topic = res.topic
      }
    },
    renderContent (content) {
      return marked(content)
    },
  },
}
</script>

<style lang="scss" scoped>
.topic {
  display: flex;
  width: 100%;
}
.topic-container {
  background: #fff;
  min-height: 100px;
  width: 100%;
  .topic-title {
    font-size: 28px;
    font-weight: normal;
    padding: 16px 0;
    border-bottom: 1px solid #f5f5f5;
  }
  .topic-content {
    padding: 16px 0;
    font-size: 18px;
  }
}
</style>
