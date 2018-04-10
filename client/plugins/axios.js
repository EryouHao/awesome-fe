import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  timeout: 1000 * 120,
  validateStatus: (status) => {
    return true
  },
})

export default ({ redirect, store }) => {
  instance.interceptors.request.use((config) => {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  instance.interceptors.response.use((res) => {
    if (res.status >= 200 && res.status < 300) {
      return res.data
    }
    if (res.status === 401) {
      store.dispatch('/logout')
      redirect('/login')
    }
  }, (err) => {
    Promise.reject(err)
  })

  const post = (url, config) => {
    const data = config || {}
    return instance({
      url,
      method: 'POST',
      data: data,
    })
  }

  const get = (url, params) => {
    return instance({
      url,
      method: 'GET',
      params: params,
    })
  }

  // DELETE ME
  console.log(post, get)

  const home = {
    fetchList: () => get('/api/home/list'),
  }

  const user = {
    fetchUserInfo: () => get('/api/user/info'),
    logout: () => get('/api/user/logout'),
  }

  const topic = {
    fetchTopic: id => get(`/api/topic/${id}`),
    createTopic: form => post('/api/topic/create', form),
    uploadImage: file => post('/api/topic/upload', file),
  }

  Vue.prototype.$api = {
    home,
    user,
    topic,
  }
}
