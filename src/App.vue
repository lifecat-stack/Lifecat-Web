<template>
  <div id="app">
    <div class="container-fluid">
      <navbar></navbar>
      <home>
        <!--<router-view></router-view>-->
      </home>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Home from "./components/Home";

  export default {
    name: 'App',
    components: {
      Navbar,
      Home
    }
  }
</script>

<style>
  @import "assets/css/home-base.css";
</style>
