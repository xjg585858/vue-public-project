// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './entry/App.vue'
import router from './router/index.router'
import i18n from './web/lang/index'
// import Cookies from 'js-cookie'
import store from './store/index'
import './assets/css/reset.css'
import './assets/web/public.scss'
/* eslint-disable */
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  components: { App },
  template: '<App/>'
})