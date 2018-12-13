/* eslint-disable */
Vue.use(VueRouter)
import Home from '../mobile/view/Home/index.vue'
import InlayIndex from '@/components/inlay.index'
import Mine from '../mobile/view/Mine'
import Forum from '../mobile/view/Forum'
import inlayAuto from '../mobile/view/auto/index.vue'
import login from '../mobile/view/auto/login/index.vue'
import registered from '../mobile/view/auto/reg/index.vue'

// import InlayIndex from '@/components/inlay.index'
const router = new VueRouter({
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
    {
      path: '/inlayAuto',
      name: 'inlayAuto',
      component: inlayAuto,
      meta:{title: 'forum', noCache: false, icon: '', requiresAuth: false},
      redirect: { name: 'login' },
      children:[
        {
          path: 'login',
          name: 'login',
          component: login,
          meta:{title: 'login', noCache: false, icon: '', requiresAuth: false}
        },
        {
          path: 'registered',
          name: 'registered',
          component: registered,
          meta:{title: 'registered', noCache: false, icon: '', requiresAuth: false}
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  // if(to.meta.title){
  //   document.title = to.meta.title
  // }
  // if(to.meta.requiresAuth){
  //   if(to.meta.requiresAuth && store.getters.Token){
  //       next()
  //   }else{
  //     next({name:'login',query:{redirect: to.fullPath}})
  //   }
  // }
  next()
})
export default router