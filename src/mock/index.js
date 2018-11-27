import Mock from 'mockjs'
import loginAPI from './login'
import databoardAPI from './databoard'
import recommendAPI from './recommend'
// import dashboardAPI from './dashboard'

// Mock.setup({
//   timeout: '350-600'
// })

// Mock.mock(/\/test\/all/, 'get', dashboardAPI.getTestAll)

// 登录相关
Mock.mock(/\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/infos\.*/, 'get', loginAPI.getUserInfo)

// 数据相关
// 获取所有user
Mock.mock(/\/users/, 'get', databoardAPI.getUserList)
// 获取所有message
Mock.mock(/\/messages/, 'get', databoardAPI.getMessageList)
// 获取所有image
Mock.mock(/\/images/, 'get', databoardAPI.getImageList)
// 获取所有record
Mock.mock(/\/records/, 'get', databoardAPI.getDynamicList)

// 推荐
Mock.mock(/\/recommend\/dynamic/,'get',recommendAPI.getDynamicList)
Mock.mock(/\/recommend\/user/,'get',recommendAPI.getUserList)

export default Mock
