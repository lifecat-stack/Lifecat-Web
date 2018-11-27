<template>
  <div class="recommend-user-container">
    <a class="recommend-user-icon-1 recommend-user-icon-2 recommend-user-icon-3 recommend-user-icon-4"
       style="width: 78px; height: 78px;"
       :href="'/user?userId=' + user.userId">
      <img class="recommend-user-icon"
           :src="user.userIconUrl"
           :alt="user.userName + '的头像'">
    </a>

    <div class="recommend-user-text">
      <div class="recommend-user-text-2">
        <a class="recommend-user-name-1 recommend-user-name-2 recommend-user-name-3"
           title="katelyn_k_zou"
           :href="'/user?userId=' + user.userId">
          {{user.userName}}
        </a>
      </div>
      <div class="recommend-user-source">
        {{user.source}}
      </div>
    </div>
    <div class="recommend-user-opera">
      <button class="recommend-user-button-1 recommend-user-button-2  recommend-user-button-3">
        关注
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommendUser",
    props: {
      user: {
        type: Object,
        default: function () {
          return {
            id: "0",
            userId: "0",
            userName: 'Ten',
            source: '热门推荐',
            userIconUrl: 'https://avatars2.githubusercontent.com/u/22876610?s=460&v=4',
          }
        }
      }
    }
  }
</script>

<style scoped>
  @import "../../styles/user-panel.scss";
</style>
