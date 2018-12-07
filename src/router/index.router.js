/* eslint-disable */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
Vue.use(VueRouter)
import index from '../web/view/Home/index.vue'
export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: { title: 'index', noCache: true ,requiresAuth: false}
    }
  ]
})