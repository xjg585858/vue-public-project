/* eslint-disable */
// import Vue from 'vue'
// import VueRouter from 'vue-router'
Vue.use(VueRouter)
import store from '../store'
import error from '../web/component/error'
import { getinfo } from '../api/Management'
import FrontDesk from '../web/Front-desk.vue'
import index from '../web/view/Home'
// import NewPost from '../web/view/NewPost/'
import Details from '../web/view/Details'
import Forum from '../web/view/forum'
import Forum_index from '../web/view/forum/CategoryList'
import Forum_Details from '../web/view/forum/Details'
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
          path:'Forum',
          name: 'Forum',
          component: Forum,
          redirect: { name: 'Forum_index' },
          meta: { title: 'Forum', noCache: true ,requiresAuth: false},
          children: [
            {
              path: '_index',
              name: 'Forum_index',
              component: Forum_index,
              meta: {title: 'Forum', noCache: true ,requiresAuth: false}
            },
            {
              path: '_Details',
              name: 'Forum_Details',
              component: Forum_Details,
              // props: true,
              meta: {title: 'Details', noCache: true ,requiresAuth: false}
            },
          ]
        },
        // {
        //   path:'NewPost',
        //   name: 'NewPost',
        //   component: NewPost,
        //   meta: { title: 'NewPost', noCache: true ,requiresAuth: false}
        // },
        {
          path:'Details',
          name: 'Details',
          component: Details,
          meta: { title: 'Details', noCache: true ,requiresAuth: false}
        },
      ]
    },
    {
      path:'*',
      name: 'error',
      component:error,
      meta: { title: 'error', noCache: true ,requiresAuth: false}
    },
  ]
})
router.beforeEach((to, from, next) => {
  if(store.getters.token){
    store.dispatch('GetUserInfo').then((req) =>{}).catch((err) =>{
      console.log(err)
    })
  }
  // getinfo().then((req) => {
  //   console.log(req)
  // })
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