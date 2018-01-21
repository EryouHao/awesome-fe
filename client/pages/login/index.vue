<template>
  <div class="login">
    <md-button class="md-raised md-primary" @click="loginWithGithub"><i class="fa fa-github"></i> Login with Github</md-button>
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    async loginWithGithub () {
      // const res = await this.$api.user.loginWithGithub()
      // console.log(res)
      location.assign('http://127.0.0.1:7001/passport/github')
      // if (res.success) {
      //   window.location.href = res.url
      // } else {
      //   console.log(res.message)
      // }
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
