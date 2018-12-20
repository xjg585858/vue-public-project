import Cookies from 'js-cookie'
/* eslint-disable */
import * as Type from "../modulesType"
const Forum = {
  state: {
    DetailsIdPage: Cookies.get('DETAILSIDPAGE') || ''
  },
  mutations: {
    [Type.SER_DETAILS.IDPAGE] (state, value) {
      state.DetailsIdPage = value
    }
  },
  actions: {
    SetForumDetailsId({commit}, value) {
      commit(Type.SER_DETAILS.IDPAGE, value)
      Cookies.set(Type.SER_DETAILS.IDPAGE, value)
    },
    RemoveDetailsId({commit}, value) {
      commit(Type.SER_DETAILS.IDPAGE, '')
      Cookies.remove(Type.SER_DETAILS.IDPAGE)
    }
  }
}
export default Forum
