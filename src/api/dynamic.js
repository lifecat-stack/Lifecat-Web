import request from '@/utils/request'

// 获取推荐动态
export function getDynamicByUser() {
  return request({
    url: '/dynamic',
    method: 'get'
  })
}
