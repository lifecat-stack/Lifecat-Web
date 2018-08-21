<template>
  <nav class="nav">
    <ul class="navCon">
      <li class="navConLogo">
        <router-link to="/dashboard">
          <a></a>
        </router-link>
      </li>
      <li class="navConSearch">
        <input id="search" type="text" value="搜索" name="搜索">
        <span class="serchLogo"></span>
      </li>
      <li class="navConUser">
        <router-link class="nav-child1" to="/databoard/explore">
          <a title=""></a>
        </router-link>
        <router-link class="nav-child2" to="/databoard/dynamic">
          <a title=""></a>
        </router-link>
        <router-link class="nav-child3" to="/databoard/user">
          <a title=""></a>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .nav {
    border-bottom: 1px solid #dbdbdb;
    height: 77px;
  }

  .navCon {
    max-width: 1010px;
    width: 100%;
    text-align: center;
    overflow: auto;
    margin: 0 auto;
    padding: 26px 40px;
    box-sizing: border-box;
    /*line-height: 35px;*/
  }

  .navConLogo {
    float: left;
  }

  .navConSearch {
    display: inline;
  }

  .navConSearch input {
    border: solid 1px #dbdbdb;
    border-radius: 3px;
    padding: 3px 10px 3px 26px;
    height: 28px;
    -webkit-box-sizing: border-box;
    font-size: 14px;
    text-align: center;
    background-color: #fafafa;
    color: #999;
  }

  .serchLogo {
    background-image: url(../img/logo.png);
    background-repeat: no-repeat;
    background-position: -682px -200px;
    /*background-position: -504px -106px;*/
    height: 10px;
    width: 10px;
    display: inline-block;
    position: relative;
    /*left: -205px;*/
    left: -135px;
    /*top: 5px;*/
  }

  .navConLogo a {
    float: left;
    width: 176px;
    height: 35px;
    background-image: url(../img/logo.png);
    background-position: -504px -176px;
  }

  .navConUser {
    float: right;
    overflow: auto;
    box-sizing: border-box;
    height: 35px;
  }

  .navConUser a {
    float: left;
    width: 24px;
    height: 24px;
  }

  .navConUser .nav-child1 {
    background-image: url(../img/logo.png);
    background-position: -633px -321px;
  }

  .navConUser .nav-child2 {
    background-image: url(../img/logo.png);
    background-position: -610px -585px;
    margin-left: 30px;
  }

  .navConUser .nav-child3 {
    background-image: url(../img/logo.png);
    background-position: -54px -635px;
    margin-left: 30px;
  }
</style>

