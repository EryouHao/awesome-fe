<template>
  <div class="all">
    <v-tabs
      v-model="active"
      color="#f5f5f5"
      slider-color="black"
      height="40"
    >
      <v-tab :key="0">全部</v-tab>
      <v-tab :key="1">VSCode</v-tab>
      <v-tab :key="2">Atom</v-tab>
      <v-tab :key="3">Sublime Text</v-tab>
      <v-tab-item>
        <article-cell
          v-if="topicList"
          v-for="(topic, index) in topicList"
          :key="index"
          :topic="topic"
        ></article-cell>
      </v-tab-item>
      <v-tab-item>
        2
        <!-- <article-cell v-for="i in 2" :key="i"></article-cell> -->
      </v-tab-item>
      <v-tab-item>
        3
        <!-- <article-cell v-for="i in 2" :key="i"></article-cell> -->
      </v-tab-item>
      <v-tab-item>
        4
        <!-- <article-cell v-for="i in 2" :key="i"></article-cell> -->
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import ArticleCell from '~/components/cell/ArticleCell'

export default {
  components: {
    ArticleCell,
  },
  data: () => ({
    active: null,
    topicList: null,
  }),
  mounted () {
    this.fetchAllTopic()
  },
  methods: {
    async fetchAllTopic () {
      const res = await this.$api.topic.fetchAllTopic()
      if (res.success) {
        this.topicList = res.list
      }
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
