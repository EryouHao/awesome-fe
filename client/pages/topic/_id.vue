<template>
  <div class="topic">
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs9>
          <h2>标题</h2>
          <section>
            内容
          </section>
        </v-flex>
        <v-flex xs3>
          作者信息
        </v-flex>
      </v-layout>
    </v-container>
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
.topic {
  display: flex;
  width: 100%;
}
</style>
