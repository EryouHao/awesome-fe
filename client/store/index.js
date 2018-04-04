import Vue from 'vue'

export const state = () => ({
  user: null,
})

export const getters = {
  logged (state) {
    return state.user !== null
  },
}

export const mutations = {
  SET_USER (state, data) {
    state.user = data || null
  },
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.headers.cookie) {
      const match = req.headers.cookie.match(/afeUser=([^;]*)/)
      if (match) {
        const afeUser = JSON.parse(decodeURIComponent(match[1]))
        commit('SET_USER', afeUser)
      }
    }
  },
  async fetchUserInfo ({ commit }) {
    const res = await Vue.prototype.$api.user.fetchUserInfo()
    if (res.success) {
      if (res.data) {
        commit('SET_USER', res.data)
      }
    } else {
      console.log(res.message)
    }
  },
  async logout ({ commit }) {
    const res = await Vue.prototype.$api.user.logout()
    if (res.success) {
      commit('SET_USER', null)
      location.reload()
    } else {
      console.log(res.message)
    }
  },
}
