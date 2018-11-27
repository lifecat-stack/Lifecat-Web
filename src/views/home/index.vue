<template>
  <main class="main-1  main-2" role="main">
    <div class="main-3 main-4">

      <h2 class="explore">主页</h2>
      <article class="recommend-dynamic">
        <div>
          <div style="flex-direction: column; padding-bottom: 0px; padding-top: 0px;">

            <!--推荐动态-->
            <div class="recommend-dynamic-1 recommend-dynamic-2"
                 v-for="j in 2">
              <div v-for="i in 3">
                <recommendDynamic :dynamic=dynamicList[j*3+i]></recommendDynamic>
              </div>
            </div>
          </div>
        </div>

        <div class="footer">
          <div class="footer-1 footer-2"></div>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
  import recommendDynamic from '@/components/Dynamic'
  import {getRecommendDynamic, getRecommendUser} from '@/api/recommend'

  export default {
    name: 'home',
    components: {
      recommendDynamic
    },
    data() {
      return {
        dynamicList: '',
        userList: '',
        listLoading: true,
        dynamicMatrix: ''
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true

        getRecommendDynamic().then(response => {
          this.dynamicList = response.data.dynamicList
          this.listLoading = false
        })

        getRecommendUser().then(response => {
          this.userList = response.data.userList
          this.listLoading = false
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../styles/dynamic-panel.scss";
  @import "../../styles/user-panel.scss";
</style>
