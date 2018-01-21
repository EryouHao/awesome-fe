// 登录校验
export default function ({ store, redirect }) {
  if (!store.getters['logged']) {
    return redirect('/login')
  }
}
