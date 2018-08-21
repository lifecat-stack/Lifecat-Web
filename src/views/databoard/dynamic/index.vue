<template>
  <content class="main">

    <section class="mainCon">

      <section class="con">
        <div class="conTopPhoto">
          <button class="closeIcon" type="button"></button>
          <div class="addBtnCon">
            <button class="addBtn" type="button">
						<span class="addBtnC">
						</span>
              <br>
              创建动态
              <input class="btnFile" type="file" accept="image/jpeg" name="">
            </button>
          </div>
        </div>
      </section>

      <div class="listUser">
        <div>
          <dynamic-adaptor></dynamic-adaptor>
          <dynamic-adaptor></dynamic-adaptor>
        </div>
      </div>

    </section>
  </content>
</template>

<script>
  import DynamicAdaptor from '@/components/DynamicAdaptor'

  export default {
    name: 'dynamic',
    components:{
      DynamicAdaptor
    }
  }
</script>

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
    background-image: url(../img/logo.png);
    background-position: -504px -176px;
  }

  .navConUser a {
    float: left;
    width: 24px;
    height: 24px;
  }

  .navConUser a:nth-child(1) {
    background-image: url(../img/logo.png);
    background-position: -633px -321px;
  }

  .navConUser a:nth-child(2) {
    background-image: url(../img/logo.png);
    background-position: -610px -585px;
    margin-left: 30px;
  }

  .navConUser a:nth-child(3) {
    background-image: url(../img/logo.png);
    background-position: -54px -635px;
    margin-left: 30px;
  }

  .main {
    background-color: #fafafa;
  }

  .mainCon {
    background-color: #fafafa;
  }

  .con, .listUser {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
  }

  .conTopPhoto {
    padding: 10px;
    background-color: #fff;
    margin-bottom: 20px;
  }

  .closeIcon {
    height: 36px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 36px;
    z-index: 2;
    background: 0 0;
    border: none;
    cursor: pointer;
    outline: none;
  }

  .closeIcon::before {
    color: #c7c7c7;
    content: '\00D7';
    display: block;
    font-size: 36px;
    font-weight: 100;
    line-height: 36px;
    margin: 0;
    padding: 0;
  }

  .addBtn {
    color: #3897f0;
    font: inherit;
    margin: 0;
    background: 0 0;
    border: none;
    cursor: pointer;
    outline: none;
    margin: 10px auto;
    position: relative;

  }

  .addBtnCon {
    text-align: center;
  }

  .addBtnC {
    display: inline-block;
    background-image: url(../img/logo.png);
    background-repeat: no-repeat;
    background-position: -460px -352px;
    height: 80px;
    width: 80px;
  }

  .btnFile {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
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
    .con {
      padding-top: 60px;
    }

    .conTopPhoto {
      background-color: #fff;
      border: 1px solid #efefef;
      border-radius: 3px;
      margin-left: -1px;
      margin-right: -1px;
      position: relative;
    }
  }
</style>
