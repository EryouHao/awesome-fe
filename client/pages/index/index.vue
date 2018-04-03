<template>
  <div class="all">
    <article-cell v-for="i in 10" :key="i"></article-cell>
  </div>
</template>

<script>
import ArticleCell from '~/components/cell/ArticleCell'

export default {
  components: {
    ArticleCell,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
