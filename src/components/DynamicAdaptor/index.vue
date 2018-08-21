<template>
  <article class="listUserCard">
    <header class="cardHead">
      <a class="roundPhoto" href="javascript:;">
        <img class="roundUserPhoto" src="./img/head.jpg">
      </a>
      <div class="cardUser">
        <a href="">yeungchinwah</a>
      </div>
      <a class="messageTime" href="javascript:;">1小时</a>
    </header><!-- /header -->
    <div class="cardImg">
      <img class="cardUserImg" src="./img/user2.jpg">
      <!-- <video class="cardUserImg" poster="https://scontent.cdninstagram.com/t51.2885-15/s640x640/e15/14052166_839575616177533_919806798_n.jpg?ig_cache_key=MTMxOTg1ODMxNjc3OTgwMDkzMg%3D%3D.2" preload="none" src="https://scontent.cdninstagram.com/t50.2886-16/14038705_267140927005428_2113723440_n.mp4" type="video/mp4"></video> -->
    </div>
    <div class="cardFoot">
      <section class="cardFTop">
								<span class="zanAmounts">
								1,732</span>
        <span>次赞</span>
      </section>
      <ul class="cardFMiddle">
        <li class="cardFMiddleList">
          <h1 class="">
            <a href="">yuyanpeng</a>
            <span>#謝謝钧甯也來支持危城</span>
          </h1>
        </li>
        <li class="cardFMiddleList">
          <a href="javascript:;">
            全部
            <span>185</span>
            条评论
          </a>
        </li>
        <li class="cardFMiddleList">
          <a href="">yuyanpeng</a>
          <span>#謝謝钧甯也來支持危城</span>
        </li>
      </ul>
      <section class="cardFBottom">
        <a class="cardFBottomZ" href="javascript:;"></a>
        <input class="cardFBottomInput" type="text" placeholder="添加评论..." name="">
        <button class="cardFBottomMore" type="button"></button>
      </section>
    </div>
  </article>
</template>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  a, a:hover {
    text-decoration: none;
    color: #003569;
  }

  ul, li, th, tr, td {
    list-style: none;
  }

  input {
    outline: none;
    -webkit-appearance: none;
    border: 0;
  }

  body, button, input, textarea {
    font-family: 'proxima-nova', 'Helvetica Neue', Arial, Helvetica, sans-serif;
  }

  html, body {
    height: 100%;
  }

  body {
    min-width: 1280px;
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

  .navConLogo a {
    float: left;
    width: 176px;
    height: 35px;
    background-image: url(img/logo.png);
    background-position: -504px -176px;
  }

  .navConUser a {
    float: left;
    width: 24px;
    height: 24px;
  }

  .navConUser a:nth-child(1) {
    background-image: url(img/logo.png);
    background-position: -633px -321px;
  }

  .navConUser a:nth-child(2) {
    background-image: url(img/logo.png);
    background-position: -610px -585px;
    margin-left: 30px;
  }

  .navConUser a:nth-child(3) {
    background-image: url(img/logo.png);
    background-position: -54px -635px;
    margin-left: 30px;
  }

  .cardHead {
    height: 64px;
    padding: 14px 20px;
    box-sizing: border-box;
    vertical-align: baseline;
    overflow: auto;
  }

  .roundPhoto, .roundUserPhoto {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: -1px 10px -1px -5px;
    background-color: #fafafa;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    display: inline-block;
    float: left;
  }

  .roundUserPhoto {
    margin: 0;
    border: 0;
  }

  .cardUser {
    float: left;
    overflow: auto;
  }

  .cardUser a {
    float: left;
    margin-top: 7px;
  }

  .messageTime {
    float: right;
    font-size: 15px;
    color: #999;
    line-height: 35px;
  }

  .cardImg {
    overflow: auto;
    border-top: 1px solid #dbdbdb;
  }

  .cardFoot {
    padding: 0 20px;
  }

  .cardUserImg {
    width: 100%;
    height: 100%;
    float: left;
  }

  .cardFTop {
    margin-top: 20px;
    margin-bottom: 7px;
    font-weight: 600;
    font-size: 14px;
  }

  .cardFMiddle {
    margin-left: -24px;
    margin-right: -24px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: -5px;
    padding-top: 5px;
    margin-bottom: 7px;
  }

  .cardFMiddleList {
    margin-bottom: 7px;
    position: relative;
    word-wrap: break-word;
    font-size: 13.33px;
  }

  .cardFBottom {
    margin-top: 17px;
    /*min-height: 68px;*/
    padding: 20px 0;
    border-top: 1px solid #dbdbdb;
  }

  .cardFBottomZ {
    float: left;
    background-image: url(img/logo.png);
    background-repeat: no-repeat;
    background-position: -506px -585px;
    height: 24px;
    width: 24px;
    margin-right: 10px;
    margin-top: -3px;
  }

  .cardFBottomInput {
    width: 470px;
    line-height: 18px;
    font-size: 15px;
  }

  .cardFBottomMore {
    float: right;
    background-image: url(img/logo.png);
    background-repeat: no-repeat;
    background-position: -493px -448px;
    height: 44px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    margin-left: 5px;
    margin-right: -10px;
    padding: 0;
    margin-top: -10px;
    width: 44px;
  }

  h1 {
    font-size: 13.33px;
  }

  .footerCon ul {
    overflow: auto;
    text-align: center;

  }

  .footerCon ul:nth-child(2) {
    margin-top: 10px;
  }

  .footerCon ul li {
    display: inline;
    margin-left: 15px;
  }

  @media (min-width: 640px) {
    .listUserCard {
      background-color: #fff;
      border: 1px solid #efefef;
      border-radius: 3px;
      margin-left: -1px;
      margin-right: -1px;
      margin-bottom: 40px;
    }
  }
</style>
