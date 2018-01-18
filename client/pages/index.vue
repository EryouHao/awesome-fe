<template>
  <section class="home">
    <div class="content">
      <md-tabs>
        <md-tab id="tab-home" md-label="全部" @click="$router.push('/')"></md-tab>
        <md-tab id="tab-pages" md-label="Visual Studio Code" @click="$router.push('/vscode')"></md-tab>
        <md-tab id="tab-posts" md-label="Atom" @click="$router.push('/atom')"></md-tab>
        <md-tab id="tab-favorites" md-label="Sublime Text" @click="$router.push('/sublime-text')"></md-tab>
      </md-tabs>
      <div class="child-content">
        <nuxt-child/>
      </div>
    </div>
    <div class="sidebar">
      导航
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
}
.content {
  flex: 1;
  background: #fff;
}
.child-content {
  padding: 8px 0 24px;
}
.sidebar {
  width: 320px;
  // background: #000;
}
</style>
