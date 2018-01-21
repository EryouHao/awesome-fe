<template>
  <div class="">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title" @click="$router.push('/')">Awesome FE</span>
      <div class="md-toolbar-section-end">
        <md-button v-if="!logged" to="/login">Login</md-button>
        <span v-else>
          <md-avatar>
            <img :src="user.photo" alt="Avatar">
          </md-avatar>
          <md-button to="/personal">{{ user.name }}</md-button>
        </span>
      </div>
    </md-toolbar>

    <md-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text" @click="logout">Logout</span>
        </md-list-item>

      </md-list>
    </md-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    menuVisible: false,
  }),
  computed: {
    ...mapGetters({
      logged: 'logged',
    }),
    user() {
      return this.$store.state.user
    },
  },
  async mounted () {
    await this.fetchUserInfo()
  },
  methods: {
    ...mapActions({
      logout: 'logout',
      fetchUserInfo: 'fetchUserInfo',
    }),
  },
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
