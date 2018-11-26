<template>
  <div class="image-container">
    <img :src="url" class="image"/>
  </div>
</template>

<script>
  export default {
    name: "Image",
    props: ["url"]
  }
</script>

<style scoped>
  .image-container{
    float: left;
    margin: 10px;
    height: 120px;
    width: 120px;
    background: #af5b5e;
  }

  .image {
    margin: 10px;
    height: 100px;
    width: 100px;
  }
</style>
