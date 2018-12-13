/* eslint-disable */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
Vue.use(VueRouter)
import FrontDesk from '../web/Front-desk.vue'
import index from '../web/view/Home/index.vue'
import NewPost from '../web/view/NewPost/'

// import  from ''
const router =  new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'FrontDesk',
      component:  FrontDesk,
      redirect: { name: 'index' },
      meta: { title: 'FrontDesk', noCache: true ,requiresAuth: false},
      children:[
        {
          path:'index',
          name: 'index',
          component: index,
          meta: { title: 'index', noCache: true ,requiresAuth: false},
        },
        {
          path:'NewPost',
          name: 'NewPost',
          component: NewPost,
          meta: { title: 'NewPost', noCache: true ,requiresAuth: false}
        }
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