<template>
  <div class="login">
    <v-btn @click="loginWithGithub"><i class="fa fa-github"></i> Login with Github</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    async loginWithGithub () {
      location.assign('http://127.0.0.1:7001/passport/github')
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  margin: 40px auto;
  text-align: center;
}
</style>
