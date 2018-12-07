
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './entry/inlay.vue'

import router from './router/inlay.router'
import './assets/css/reset.css'
import i18n from './lang/index'
/* eslint-disable */
Vue.config.productionTip = false
new Vue({
  el: '#inlay',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})