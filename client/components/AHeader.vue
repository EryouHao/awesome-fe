<template>
  <div class="">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title" @click="$router.push('/')">Awesome FE</span>
      <div class="md-toolbar-section-end">
        <md-button to="/login">Login</md-button>
        <md-button to="/personal">EryouHao</md-button>
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
  </div>
</template>

<script>
export default {
  data: () => ({
    menuVisible: false,
  })
}
</script>

<style lang="scss" scoped>
.md-title {
  cursor: pointer;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
