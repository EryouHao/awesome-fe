<template>
  <v-app>
    <a-header></a-header>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
        >
          <nuxt/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>



<script>
import AHeader from '../components/AHeader'
export default {
  components: {
    AHeader,
  },
  name: 'Reveal',
}
</script>

<style lang="scss" scoped>
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
