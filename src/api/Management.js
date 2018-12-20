import request from './request'
import qs from 'qs'

export function Verification (data) {
  return request({
    url: '/api/Verification',
    method: 'get',
    params: { }
  })
}
export function Obtain (params) {
  return request({
    url: '/api/Obtain/info',
    method: 'get',
    params
  })
}
export function login (data) { // 登录
  return request({
    url: '/api/login',
    method: 'post',
    data: qs.stringify(data)
  })
}
export function getinfo () { // 已删除
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

export function logInOut () { // 退出
  return request({
    url: '/logInOut',
    method: 'get',
    params: { }
  })
}

export function ForumAll (params) { // 查询所有论坛
  return request({
    url: '/api/ForumAll',
    method: 'get',
    params
  })
}
export function ForumDetails (params) { // 查询论坛详情
  return request({
    url: '/api/Forum/Details',
    method: 'get',
    params
  })
}

export function createMessage (params) { // 留言板回复
  return request({
    url: '/api/Forum/createMessage',
    method: 'get',
    params
  })
}

export function FindMessage (params) { // 查询留言板信息
  return request({
    url: '/api/Forum/FindMessage',
    method: 'get',
    params
  })
}
export function localNews (params) { // 退出
  return request({
    url: '/localNews',
    method: 'get',
    params
  })
}
export function ForumMassage (params) { // 查询当前消息内容
  return request({
    url: '/api/ForumMassage',
    method: 'get',
    params
  })
}

export function leaveMessage (params) { // 退出
  return request({
    url: '/leave/message',
    method: 'get',
    params
  })
}
export function ForumMassageOnly (params) { // 退出
  return request({
    url: '/api/ForumOnlyDetails',
    method: 'get',
    params
  })
}
export function updataMeassageNumber (params) { // 退出
  return request({
    url: '/api/UpdataMeassageNumber',
    method: 'get',
    params
  })
}
