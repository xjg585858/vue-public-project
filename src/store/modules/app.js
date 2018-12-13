import Cookies from 'js-cookie'
/* eslint-disable */
import * as Type from "../modulesType"
const app = {
  state: {
    language: Cookies.get('language') || 'zh'
  },
  mutations: {
    [Type.SET_LANGUAGE] (state, value) {
      state.language = value
      Cookies.set('language', value)
    }
  },
  actions: {
    setLanguage({commit}, value) {
      
      commit(Type.SET_LANGUAGE, value)
    }
  }
}
export default app
