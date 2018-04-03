<template>
  <div class="all">
    <v-tabs
      v-model="active"
      color="#f5f5f5"
      slider-color="black"
      height="40"
    >
      <v-tab :key="1">VSCode</v-tab>
      <v-tab :key="2">Atom</v-tab>
      <v-tab :key="3">Sublime Text</v-tab>
      <v-tab-item>
        <article-cell v-for="i in 2" :key="i"></article-cell>
      </v-tab-item>
      <v-tab-item>
        <article-cell v-for="i in 2" :key="i"></article-cell>
      </v-tab-item>
      <v-tab-item>
        <article-cell v-for="i in 2" :key="i"></article-cell>
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
  }),
}
</script>

<style lang="scss" scoped>
</style>
