
/* eslint-disable */
import app from './modules/app'
import user from './modules/user'
import getters from './getters'
const store = new Vuex.Store({
  modules: {
    app,
    user
  },
  getters
})
export default store