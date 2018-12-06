import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
/* eslint-disable */
Vue.use(VueI18n)

const messages = {
    en: require('./guage/en.1.js'),
    zh: require('./guage/zh')
    // es: {
    //   ...esLocale,
    //   ...elementEsLocale
    // }
}
const i18n = new VueI18n({
    // set locale
    // options: en | zh | es
    locale: Cookies.get('language') || 'zh',
    // set locale messages
    messages
})
  

export default  i18n