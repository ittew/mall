import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/home'
import Category from 'views/category/category'
import Cart from 'views/cart/cart'
import Profile from 'views/profile/profile'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function replace (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/cart'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ]
})

export default router
