
/* eslint-disable */
import app from './modules/app'
import user from './modules/user'
import Forum from './modules/Forum'
import getters from './getters'

const store = new Vuex.Store({
  modules: {
    app,
    user,
    Forum
  },
  getters
})
export default store