/* eslint-disable */
Vue.use(VueRouter)
import Home from '../mobile/view/Home/index.vue'
import InlayIndex from '@/components/inlay.index'
import Mine from '../mobile/view/Mine'
import Forum from '../mobile/view/Forum'
// import InlayIndex from '@/components/inlay.index'
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'InlayIndex',
      component: InlayIndex,
      redirect: { name: 'Home' },
      children:[
        {
          path: 'Home',
          name: 'Home',
          component: Home,
          meta:{title: 'home', noCache: false, icon: '', requiresAuth: false}
        },
        {
          path: 'Mine',
          name: 'Mine',
          component: Mine,
          meta:{title: 'mine', noCache: false, icon: '', requiresAuth: false}
        },
        {
          path: 'Forum',
          name: 'Forum',
          component: Forum,
          meta:{title: 'forum', noCache: false, icon: '', requiresAuth: false}
        }
      ]
    },
  ]
})
