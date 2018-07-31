<template>
  <nav class="navbar navbar-default row no-yj  navbar-fixed-top">
    <div class="container-fluid">

      <!--Left-->
      <div class="navbar-header">
        <a class="navbar-brand" href="#">
          LifeCat-SSM管理系统
        </a>
      </div>

      <!--Right-->
      <div class="navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">

          <!--1、提醒-->
          <li>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              <i class="glyphicon glyphicon-bell">
                <i class="label label-warning label-nav">
                  66
                </i>
              </i>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li>
                <a href="#">
                  提醒
                </a>
              </li>
            </ul>
          </li>

          <!--2、通知-->
          <li>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
              <i class="glyphicon glyphicon-envelope">
                <i class="label label-success label-nav">
                  6
                </i>
              </i>
            </a>
            <ul class="dropdown-menu dropdown-menu-right">
              <li>
                <a href="#">
                  通知
                </a>
              </li>
            </ul>
          </li>

          <!--3、资料-->
          <li>
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" style="height: 50px">
              <img class="img-circle pull-left img-responsive nav-user-img" src="../images/user/user.jpg"/>
              <span class="pull-left nav-username">
                管理员
              </span>
            </a>

            <ul class="dropdown-menu dropdown-menu-right clearfix" style="padding-top: 0">
              <li class="user-li-head">
                <span>
                  <img class="img-circle nav-user-img-xiala center-block" src="../images/user/user.jpg"/>
                </span>
                <p></p>
                <p class="text-center">
                  <span>
                    LifeCat
                  </span>
                </p>
                <p class="text-center">
                  <span>
                    Kevinten
                  </span>
                </p>
                <p class="text-center">
                  <small>
                    <span>
                      2018-07-13
                    </span>
                  </small>
                </p>
              </li>
              <li style="padding: 10px 20px 20px;">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat no-yj">
                    资料
                  </a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat no-yj">
                    注销
                  </a>
                </div>
              </li>
            </ul>

          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
</script>

<style scoped>
  @import "../assets/css/home-base.css";
  @import '~bootstrap/scss/bootstrap.scss';
</style>
