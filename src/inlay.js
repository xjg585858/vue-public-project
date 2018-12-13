
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './entry/inlay.vue'

import router from './router/inlay.router'
import './assets/css/reset.css'
import './mobile/css/index.css'
import i18n from './mobile/lang/index'
import massage from '@/api/massage'
/* eslint-disable */
Vue.use(massage);
Vue.config.productionTip = false
new Vue({
  el: '#inlay',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})