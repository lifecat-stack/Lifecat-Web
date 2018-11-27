import request from '@/utils/request'

// 获取推荐动态
export function getRecommendDynamic() {
  return request({
    url: '/recommend/dynamic',
    method: 'get'
  })
}

// 获取推荐好友
export function getRecommendUser() {
  return request({
    url: '/recommend/user',
    method: 'get'
  })
}
