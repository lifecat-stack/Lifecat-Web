<template>
  <div>
    <div class="login-outer">
      <div class="login-mask"></div>
      <div class="login-inner">
        <div class="login-left">
          <div>
            <div class="login-font-bg"></div>
            <!--用户名-->
            <div class="login-user">
              <input type="text" placeholder="UserName" id="userName">
              <i></i>
            </div>
            <!--密码-->
            <div class="login-pwd">
              <input type="password" placeholder="PassWord" id="passWord">
              <i></i>
              <!--忘记密码先隐藏了-->
              <a href="#" class="login-forget">忘记密码？</a>
            </div>
            <!--是否记住密码-->
            <div class="login-keep-pwd">
              <label for="keepPwd" id="keepPwdLabel"><i class="active"></i>记住密码</label><input style="display: none"
                                                                                              type="checkbox"
                                                                                              id="keepPwd"
                                                                                              checked>
            </div>
            <!--登录按钮-->
            <div class="login-btn">
              <input type="button" value="登&nbsp;&nbsp;录" id="loginBtn">
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="font-wrap">
            <div class="font01"></div>
            <div class="font02"></div>
            <div class="font03"></div>
          </div>
        </div>
      </div>
    </div>
    <!--错误提示-->
    <div class="login-error-parent">
      <div class="login-error-wrap">
        <div class="login-error">
          <i class="closed" id="closedBtn"></i>
          <p>用户名或密码错误</p>
          <p>请您重新输入</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hello'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0
  }

  @keyframes animateShow {
    0% {
      opacity: .2
    }
    100% {
      opacity: 1
    }
  }

  body {
    animation: animateShow 1s ease-in-out
  }

  body, html {
    height: 100%;
    font-family: Microsoft YaHei, tahoma, arial, Hiragino Sans GB, \\5b8b\4f53, sans-serif
  }

  .login-outer {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(i/login-bg.jpg) no-repeat;
    background-position: center center;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .login-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #5069fc;
    opacity: .6
  }

  .login-inner {
    position: relative;
    z-index: 9;
    width: 90%;
    height: 90%;
    box-shadow: 0 0 60px rgba(0, 0, 0, .4)
  }

  .login-left {
    float: left;
    width: 33%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center
  }

  .login-left > div {
    width: 100%
  }

  .login-right {
    position: relative;
    height: 100%;
    margin-left: 33%;
    overflow: hidden
  }

  .login-font-bg {
    width: 100%;
    height: 52px;
    margin-bottom: 70px;
    background: url(./i/font-bg.jpg) no-repeat;
    background-position: center center
  }

  .login-btn, .login-pwd, .login-user {
    width: 310px;
    height: 58px;
    margin: 0 auto 30px;
    position: relative
  }

  .login-pwd input, .login-user input {
    width: 230px;
    height: 58px;
    border-radius: 4px;
    border: 1px solid #e7e7e7;
    padding-left: 60px;
    padding-right: 20px;
    font-size: 16px;
    color: #838383
  }

  .login-pwd input:focus, .login-user input:focus {
    border: 1px solid rgba(80, 105, 252, .4)
  }

  .login-btn input {
    width: 310px;
    height: 58px;
    cursor: pointer;
    background: #c2c2c2;
    border: none;
    color: #fff;
    border-radius: 4px;
    font-size: 18px;
    transition: all .6s
  }

  .login-btn .active {
    background: #5069fc
  }

  .login-btn .active:hover {
    background: #2e48de
  }

  .login-user i {
    position: absolute;
    left: 15px;
    top: 21px;
    display: block;
    width: 25px;
    height: 17px;
    background: url(i/icon01.png) no-repeat
  }

  .login-user .active {
    background: url(i/icon01_active.png) no-repeat
  }

  .login-user input:focus + i {
    background: url(i/icon01_active.png) no-repeat
  }

  .login-pwd i {
    position: absolute;
    left: 18px;
    top: 17px;
    display: block;
    width: 20px;
    height: 26px;
    background: url(i/icon02.png) no-repeat
  }

  .login-pwd .active {
    background: url(i/icon02_active.png) no-repeat
  }

  .login-pwd input:focus + i {
    background: url(i/icon02_active.png) no-repeat
  }

  input::-webkit-input-placeholder {
    color: #dcdcdc
  }

  input:-moz-placeholder {
    color: #dcdcdc
  }

  input::-moz-placeholder {
    color: #dcdcdc
  }

  input:-ms-input-placeholder {
    color: #dcdcdc
  }

  .login-forget {
    display: none;
    position: absolute;
    right: -100px;
    top: 0;
    line-height: 60px;
    text-decoration: none;
    color: #ddd
  }

  .login-keep-pwd {
    width: 285px;
    height: 58px;
    margin: 0 auto;
    position: relative;
    padding-left: 25px;
    color: #a6a6a6;
    user-select: none
  }

  .login-keep-pwd label {
    cursor: pointer
  }

  .login-keep-pwd i {
    position: absolute;
    left: 0;
    top: 3px;
    width: 18px;
    height: 18px;
    background: url(i/icon03.png) no-repeat
  }

  .login-keep-pwd .active {
    background: url(i/icon03_active.png) no-repeat !important
  }

  .login-right .font-wrap {
    width: 780px;
    height: 300px;
    position: absolute;
    right: 5%;
    bottom: 45px
  }

  .login-right .font-wrap .font01 {
    width: 116px;
    height: 128px;
    background: url(i/font01.png) no-repeat;
    position: absolute;
    right: 0;
    top: 0;
    opacity: 0
  }

  .login-right .font-wrap .font02 {
    position: absolute;
    left: 0;
    top: 160px;
    width: 780px;
    height: 48px;
    background: url(i/font02.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0
  }

  .login-right .font-wrap .font03 {
    position: absolute;
    left: 0;
    top: 240px;
    width: 553px;
    height: 40px;
    background: url(i/font03.png) no-repeat;
    background-size: 100% 100%;
    opacity: 0
  }

  @keyframes showFont {
    0% {
      opacity: 0;
      transform: translateX(-100px)
    }
    100% {
      opacity: 1;
      transform: translateX(0)
    }
  }

  .login-right .font-wrap div:nth-child(1) {
    animation: showFont .5s .5s;
    animation-fill-mode: forwards
  }

  .login-right .font-wrap div:nth-child(2) {
    animation: showFont .5s .8s;
    animation-fill-mode: forwards
  }

  .login-right .font-wrap div:nth-child(3) {
    animation: showFont .5s 1.2s;
    animation-fill-mode: forwards
  }

  @keyframes showMask {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1
    }
  }

  @keyframes showError {
    0% {
      transform: scale(.8)
    }
    50% {
      transform: scale(1.2)
    }
    100% {
      transform: scale(1)
    }
  }

  .login-error-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    z-index: 9999;
    animation: showMask .8s ease-in-out
  }

  .login-error {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    height: 300px;
    width: 560px;
    border: 1px solid #fff;
    background: #fff;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    color: #666;
    animation: showError .6s ease-in-out
  }

  .login-error .closed {
    display: block;
    width: 18px;
    height: 18px;
    background: #a6071b;
    box-sizing: content-box;
    border: 5px solid #525252;
    position: absolute;
    right: -15px;
    top: -15px;
    border-radius: 50%;
    cursor: pointer;
    transition: all .5s
  }

  .login-error .closed:hover {
    background: red
  }

  .login-error-parent {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 11111
  }

  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

</style>
