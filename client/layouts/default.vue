<template>
  <div class="page-container">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">My Title</span>
      <div class="md-toolbar-section-end">
        <md-button>Favorites</md-button>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

      </md-list>
    </md-drawer>

    <md-content class="main-container">
      <nuxt/>
    </md-content>
  </div>
</template>


<script>
export default {
  name: 'Reveal',
  data: () => ({
    menuVisible: false,
  })
}
</script>

<style lang="scss" scoped>
  .main-container {
    padding: 24px 32px;
    background: #f5f5f5;
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body {
  background: #f5f5f5;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
