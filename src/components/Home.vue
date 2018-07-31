<template>
  <!--body部分-->
  <div class="row" style="margin-top:70px">

    <!--左侧Tap切换栏-->
    <div class="  nav-left col-md-2 no-padding" id="nav-list-left">
      <div class="user-panel">
        <img src="../images/user/user.jpg" class="img-circle center-block"/>
      </div>
      <div class="nav-list">
        <ul>
          <li>
            <a id="main-href" href="#">控制盘</a>
          </li>
          <li>
            <a id="admin-href" href="#">管理员</a>
          </li>
          <li>
            <a id="user-href" href="#">用户管理</a>
          </li>
          <li>
            <a id="diary-href" href="#">日记管理</a>
          </li>
          <li>
            <a id="image-href" href="#">图片管理</a>
          </li>
        </ul>
      </div>
    </div>

    <!--主Tap页面-->
    <div id="main-tap" class="main-right col-md-10 col-md-offset-2 main-tap">
      <div id="home-tap-div" class="col-lg-12 content-div show"></div>
    </div>

  </div>
</template>

<script>
</script>

<style scoped>
  @import "../assets/css/home-base.css";
</style>
