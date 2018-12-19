/* eslint-disable */
import Cookies from 'js-cookie'

import { login, Obtain, logInOut} from '../../api/Management'
import * as Type from "../modulesType"
import { getToken, setToken, removeToken } from '../../utils/auth'
const user = {
  state: {
    user:{},
    token: getToken()
  },
  mutations: {
    [Type.SET_USERINFO] (state, value) {
      state.user = value
    },
    [Type.SET_TOKEN] (state, value) {
        state.token = value
    }
  },
  actions: {
    loginUserName({commit}, value) { // 登录
        return new Promise((resolve, reject) => {
            login(value).then((req) => {
                if (req.status != 'success') {
                    reject(req)
                } else {
                    commit(Type.SET_USERINFO,req.data) // 用户信息
                    commit(Type.SET_TOKEN, req.data.token) // 设置token
                    setToken(req.data.token)
                    resolve(req)
                }
            }).catch((error) => {
                reject(error)
            })
        })
    },
    GetUserInfo({ commit, state }) { // 获取用户信息
        if(state.token){
            return new Promise((resolve,reject) => {
                Obtain({token: state.token}).then((req) => {
                    if(req.status === 'success') {
                        commit(Type.SET_USERINFO,req.data) // 用户信息
                        commit(Type.SET_TOKEN, req.data.token) // 设置token
                        setToken(req.data.token)
                        return resolve(req)
                    } else {
                        reject(false)
                    }
                }).catch((err) => {
                    commit(Type.SET_TOKEN, null) // 清除
                    removeToken() // 清除
                    reject(false)
                })
            })
        }
    },
    logInOut({ commit, state }) { //退出
        return new Promise((resolve, reject) => {
            logInOut({token: state.token}).then((req) => {
                commit(Type.SET_TOKEN, null) // 清除
                removeToken() // 清除
                resolve(req)
            }).catch((error) => {
                console.log(error)
                reject(error)
            })
        })
    }
  }
}
export default user
