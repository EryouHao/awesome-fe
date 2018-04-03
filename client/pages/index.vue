<template>
  <section class="home">
    <v-container grid-list-md fluid>
      <v-layout row wrap>
        <v-flex xs9>
          <div class="content">
            <div class="child-content">
              <nuxt-child/>
            </div>
          </div>
        </v-flex>
        <v-flex xs3>
          <div class="sidebar">
            导航
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  width: 100%;
}
.content {
  flex: 1;
  background: #fff;
}
.child-content {
  padding: 0 0 24px;
  flex: 1;
}
.sidebar {
  width: 320px;
  // background: #000;
}
</style>
