<template>
  <div class="container-1 container-2 container-3">
    <a href="/dynamicDetail?dynamicId=">
      <div class="dynamic-1">
        <div class="dynamic-2">
          <img class="dynamic-image" sizes="293px"
               :src="dynamic.dynamicImageUrl"
               :alt="dynamic.dynamicContent">
        </div>
        <div class="dynamic-3"></div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    name: "dynamic",
    props: {
      dynamic: {
        type: Object,
        default: function () {
          return {
            id: "0",
            userId: "0",
            dynamicImageUrl: 'http://ku.90sjimg.com/element_origin_min_pic/01/37/92/40573c69065b76e.jpg',
            dynamicContent: '图片加载失败',
          }
        }
      }
    }
  }
</script>

<style scoped>
  /*! CSS Used from: Embedded */
  .FPmhX {
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 5px;
    margin-left: -5px;
  }

  /*! CSS Used from: Embedded */
  a, article, div, h2, img, span {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /*! CSS Used from: Embedded */
  article, div, main {
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border: 0 solid #000;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin: 0;
    padding: 0;
    position: relative;
  }

  /*! CSS Used from: Embedded */
  button {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 18px;
  }

  a, a:visited {
    color: #003569;
    text-decoration: none;
  }

  a:active {
    opacity: .5;
  }

  /*! CSS Used from: Embedded */
  .W1Bne {
    left: 50%;
    position: absolute;
    top: 50%;
    background-size: 100%;
  }

  .ztp9m {
    height: 32px;
    margin-left: -16px;
    margin-top: -16px;
    width: 32px;
    background-image: url(data:image/png;base64,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);
    -webkit-animation: spinner-spin12 1.2s steps(12) infinite;
    animation: spinner-spin12 1.2s steps(12) infinite;
  }

  /*! CSS Used from: Embedded */
  .oF4XW {
    outline: 0 !important;
  }

  /*! CSS Used from: Embedded */
  .sqdOP {
    -moz-osx-font-smoothing: grayscale;
    -webkit-appearance: none;
    -webkit-font-smoothing: antialiased;
    -moz-appearance: none;
    appearance: none;
    background: 0 0;
    border: 0;
    cursor: pointer;
    display: block;
    font-weight: 600;
    padding: 5px 9px;
    overflow: hidden;
    text-transform: inherit;
    text-overflow: ellipsis;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto;
  }

  .sqdOP:active {
    opacity: .7;
  }

  .L3NKy {
    background-color: #3897f0;
    border: 1px solid #3897f0;
    border-radius: 4px;
    color: #fff;
  }

  .L3NKy {
    position: relative;
  }

  /*! CSS Used from: Embedded */
  .coreSpriteChevronRight {
    background-image: url(https://www.instagram.com/static/bundles/base/sprite_core.png/f37e41a0eb73.png);
  }

  .coreSpriteChevronRight {
    background-repeat: no-repeat;
    background-position: -290px -227px;
    height: 11px;
    width: 6px;
  }

  @media (min-device-pixel-ratio: 1.5),(-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi) {
    .coreSpriteChevronRight {
      background-image: url(https://www.instagram.com/static/bundles/base/sprite_core_2x.png/06b0008528a7.png);
    }

    .coreSpriteChevronRight {
      background-size: 451px 431px;
      background-position: -439px -98px;
    }

    .coreSpriteChevronRight {
      background-position: -439px -268px;
    }
  }

  /*! CSS Used from: Embedded */
  .container-2:active {
    opacity: 1;
  }

  .hUQXy, .hUQXy:visited {
    color: #3897f0;
  }

  /*! CSS Used from: Embedded */
  ._2dbep {
    background-color: #fafafa;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    position: relative;
  }

  ._2dbep::after {
    border: 1px solid rgba(0, 0, 0, .0975);
    border-radius: 50%;
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
  }

  .qNELH {
    cursor: pointer;
  }

  ._6q-tv {
    height: 100%;
    width: 100%;
  }

  /*! CSS Used from: Embedded */
  .HUW1v {
    display: block;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    float: right;
    font-size: 12px;
    font-weight: 600;
  }

  /*! CSS Used from: Embedded */
  .yQ0j1 {
    color: #999;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 16px;
    text-align: left;
    text-transform: capitalize;
  }

  @media (max-width: 735px) {
    .yQ0j1 {
      font-size: 14px;
      padding: 0 8px;
    }
  }

  /*! CSS Used from: Embedded */
  .dynamic-1 {
    background-color: #efefef;
    display: block;
    width: 100%;
  }

  .dynamic-2 {
    display: block;
    overflow: hidden;
    padding-bottom: 100%;
  }

  .dynamic-image, .dynamic-3 {
    left: 0;
    position: absolute;
    top: 0;
  }

  .dynamic-image {
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 100%;
  }

  .dynamic-3 {
    bottom: 0;
    right: 0;
  }

  /*! CSS Used from: Embedded */
  .container-1 {
    display: block;
    position: relative;
    width: 100%;
  }

  /*! CSS Used from: Embedded */
  .Nnq7C {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .Nnq7C > * {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0%;
    -ms-flex: 1 0 0%;
    flex: 1 0 0%;
  }

  /*! CSS Used from: Embedded */
  ._4emnV {
    height: 48px;
    margin-top: 40px;
  }

  .weEfm:last-child {
    margin-bottom: 0;
  }

  .container-3:last-child {
    margin-right: 0;
  }

  @media (min-width: 736px) {
    .container-3 {
      margin-right: 28px;
    }

    .weEfm {
      margin-bottom: 28px;
    }
  }

  @media (max-width: 735px) {
    .container-3 {
      margin-right: 3px;
    }

    .weEfm {
      margin-bottom: 3px;
    }
  }

  /*! CSS Used from: Embedded */
  .Lkcbb {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 220px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .pUHJ0 {
    display: block;
    margin-bottom: 12px;
  }

  .tLZyl {
    color: #999;
    font-size: 12px;
    line-height: 14px;
  }

  .t0fbY {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    border: solid 1px #efefef;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 0;
    -ms-flex: 1 0 0;
    flex: 1 0 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 28px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .t0fbY:last-child {
    margin-right: 0;
  }

  ._2vJ74, .s5bRp {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-direction: normal;
  }

  ._2vJ74 {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 12px;
    min-width: 70px;
    -webkit-box-orient: vertical;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .s5bRp {
    -webkit-box-orient: horizontal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .DXv8P, .DXv8P:visited {
    color: #262626;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 2px;
  }

  /*! CSS Used from: Embedded */
  .SCxLW {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-box-ordinal-group: 5;
    -webkit-order: 4;
    -ms-flex-order: 4;
    order: 4;
  }

  .o64aR {
    background-color: #fafafa;
  }

  /*! CSS Used from: Embedded */
  .v1pSD {
    margin-bottom: 20px;
  }

  /*! CSS Used from: Embedded */
  .BSqtQ {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0 auto 30px;
    max-width: 935px;
    width: 100%;
  }

  @media (min-width: 736px) {
    .BSqtQ {
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      padding: 40px 20px 0;
      width: calc(100% - 40px);
    }

    .Xt-CQ {
      margin-bottom: 60px;
    }
  }

  @media (max-width: 735px) {
    .Xt-CQ {
      display: none;
    }

    .X6NdS {
      padding-top: 32px;
    }
  }

  @media (min-width: 640px) {
    .BSqtQ {
      padding-top: 60px;
    }
  }

  @media (max-width: 639px) {
    .BSqtQ {
      background: #fff;
      margin-bottom: 10px;
    }
  }

  /*! CSS Used keyframes */
  @-webkit-keyframes spinner-spin12 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes spinner-spin12 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
