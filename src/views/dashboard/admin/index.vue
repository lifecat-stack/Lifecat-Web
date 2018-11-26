<template>
  <div class="dashboard-container">


    <div v-for="index in 10">
      <li v-if="index % 4 === 0"><br></li>
      <li>
        <userImage url="https://avatars2.githubusercontent.com/u/22876610?s=460&v=4"></userImage>
      </li>

    </div>


  </div>
</template>


<script>
  import userImage from "./components/Image"

  export default {
    name: 'dashboard-admin',
    components: {userImage},
    data() {
      return {
        items: {}
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .dashboard-container {
    background-color: blue;
    display: flex;
    justify-content: center;
  }
</style>
