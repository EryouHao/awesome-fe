const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Awesome FE',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Awesome FE' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: '//fonts.googleapis.com/icon?family=Material+Icons' }
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#448aff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vue-material',
      'axios',
      'moment',
    ],
    extractCSS: true,
    filenames: {
      vendor: 'vendor.[hash:12].js',
      app: 'amz.[chunkhash:12].js',
      css: 'amz.[contenthash:12].css',
    },
    plugins: [
      new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en/)
    ]
  },
  css: [
    { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
    { src: '~/assets/theme.scss', lang: 'scss' }, // include vue-material theme engine
  ],
  plugins: [
    { src: '~plugins/vue-material' },
    { src: '~plugins/axios' },
    { src: '~plugins/mavon-editor', ssr: false },
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-oauth',
  ],
  oauth: {
    sessionName: 'awesomeFe',
    secretKey: 'awesomefe',
    oauthHost: 'github',
    oauthClientID: 'a20309c7cd5fdb49a703',
    oauthClientSecret: '403925a1e5c821d12ff27c306c152b343d2b2ee2',
    onlogout: (req, res) => {
      // do something after logging out
    },
    fetchUser: (accessToken) => {
      // do something to return the user
      // const user = User.findByToken(accessToken)
      // return user
    },
  },
  proxy: [
    ['/api', {
      local: {
        target: 'http://localhost:7001',
        pathRewrite: { '^/api': '/' },
      },
    }[process.env.NODE_ENV || 'local']],
  ],
}
