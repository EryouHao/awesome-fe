// 登录校验
export default function ({ app, store, redirect }) {
  if (!store.getters['logged']) {
    return redirect('/login')
  }
}
