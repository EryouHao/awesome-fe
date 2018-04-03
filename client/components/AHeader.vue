<template>
  <div class="">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="$router.push('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="black" dark fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/topic/create"><v-icon>add</v-icon>新话题</v-btn>
      <v-btn v-if="!logged" to="/login">Login</v-btn>
      <span v-else>
        <v-menu
          v-model="menu"
          :nudge-width="200"
          offset-x
          :close-on-content-click="false"
        >
          <v-avatar size="32" slot="activator">
            <img :src="user.photo" alt="Avatar">
          </v-avatar>
          <v-card>
            <v-list avatar>
              <v-list-tile-avatar to="/personal">
                <img :src="user.photo" alt="Avatar">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ user.name }}</v-list-tile-title>
                <v-list-tile-sub-title>Front Developer</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="text" @click="logout">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data: () => ({
    menuVisible: false,
    drawer: false,
    menu: false,
  }),
  computed: {
    ...mapGetters({
      logged: 'logged',
    }),
    user () {
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
