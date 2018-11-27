import Mock from 'mockjs'

const recommendList = []
const userList = []

for (let i = 0; i < 10; i++) {
  recommendList.push(Mock.mock({
    id: i,
    userId: '@increment',
    dynamicContent: +Mock.Random.date('T'),
    dynamicImageUrl: 'https://avatars2.githubusercontent.com/u/22876610?s=460&v=4'
  }))
  userList.push(Mock.mock({
    id: i,
    userId: '@increment',
    userName: +Mock.Random.date('T'),
    userIconUrl: 'https://avatars2.githubusercontent.com/u/22876610?s=460&v=4',
    source:'热门'
  }))
}

export default {
  getDynamicList: () => ({
    dynamicList: recommendList
  }),
  getUserList: () => ({
    userList: userList
  })
}
