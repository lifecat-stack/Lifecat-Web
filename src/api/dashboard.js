import request from '@/utils/request'

// 测试跨域访问后端
export function getTestAll() {
  return request({
    url: '/api/test/all',
    method: 'get'
  })
}
