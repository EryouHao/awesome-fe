<template>
  <div class="page-container">
    <a-header></a-header>

    <md-content class="main-container">
      <nuxt/>
    </md-content>
  </div>
</template>


<script>
import AHeader from '~/components/AHeader'

export default {
  components: {
    AHeader,
  },
  name: 'Reveal',
}
</script>

<style lang="scss" scoped>
  .main-container {
    padding: 24px 32px;
    background: #f5f5f5;
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
