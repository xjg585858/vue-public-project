import { Message } from 'element-ui'
/* eslint-disable */
export default{
  install(Vue, options) {
    Vue.prototype.$Message = function (vl, el) {
      Message({ showClose: true, message: vl, type: el, duration: 1000 })
    }
  }
}
