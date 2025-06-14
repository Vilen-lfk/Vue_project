import store from '../store'

export default function(to, from, next) {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isUserLoggedIn) {
      next()
    } else {
      next({
        path: '/login',
        query: { loginError: true, redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
}