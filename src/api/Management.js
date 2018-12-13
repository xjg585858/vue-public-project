import request from './request'
import qs from 'qs'

export function login (data) { // 登录
  return request({
    url: '/api/login',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function getinfo () { // 登录
  return request({
    url: '/api/info',
    method: 'get',
    params: { }
  })
}

export function Getregistered (data) {
  return request({
    url: '/api/registered',
    method: 'post',
    data: qs.stringify(data)
  })
}
