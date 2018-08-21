<template>
  <main class="SCxLW  o64aR" role="main">
    <div class="v9tJq">

      <!--header-->
      <header class="vtbgv ">

        <!--用户头像-->
        <div class="XjzKX">
          <div class="_4dMfM">
            <div class="M-jxE">
              <button class="IalUJ " title="更换头像">
                <img alt="更换头像" class="be6sR" :src="userIconUrl">
              </button>
              <div>
                <form enctype="multipart/form-data"><input accept="image/jpeg,image/png" class="tb_sK" type="file">
                </form>
              </div>
            </div>
          </div>
        </div>

        <!--用户资料-->
        <section class="zwlfE">

          <div class="nZSzR">

            <!--用户账号-->
            <h1 class="AC5d8 notranslate" title="kevinten10">{{userAccountName}}</h1>

            <!--编辑按钮-->
            <router-link class="thEYr " to="/databoard/edit/">
              <button class="oF4XW sqdOP  L3NKy _4pI4F  _8A5w5">编辑个人主页</button>
            </router-link>

            <!--选项按钮-->
            <div class="AFWDX">
              <button class="oF4XW dCJp8">
                <span class="glyphsSpriteSettings__outline__24__grey_9 u-__7" aria-label="选项"></span>
              </button>
            </div>
          </div>

          <!--用户资料显示-->
          <ul class="k9GMp ">
            <li class="Y8-fY ">
              <span class="-nal3 ">
                <span class="g47SY ">
                  {{dynamicCount}}
                </span>
                动态
              </span>
            </li>
            <li class="Y8-fY ">
              <span class="-nal3 ">
                <span class="g47SY " title="0">
                  {{fansCount}}
                </span>
                粉丝
              </span>
            </li>
            <li class="Y8-fY ">
              <span class="-nal3 ">
                正在关注
                <span class="g47SY ">
                  {{followCount}}
                </span>
              </span>
            </li>
          </ul>

          <!--用户昵称及个性签名-->
          <div class="-vDIg">
            <h1 class="rhpdm">{{userName}}</h1>
            <br>
            <span>{{userSignature}}</span>
          </div>

        </section>
      </header>

      <div class="fx7hk">
        <a class="_9VEo1 T-jvg" href="/databoard/dynamic">
          <span class="smsjF">
            <div class=" coreSpriteDesktopPhotoGridActive"></div>
            <span class="PJXu4">动态</span>
          </span>
        </a>

        <a class="_9VEo1 " href="/databoard/explore/">
          <span class="smsjF">
            <div class="coreSpriteDesktopProfileIGTV "></div>
            <span class="PJXu4">探索</span>
          </span>
        </a>

        <a class="_9VEo1 " href="/databoard/saved/">
          <span class="smsjF">
            <div class="coreSpriteDesktopProfileSave "></div>
            <span class="PJXu4">收藏夹</span>
          </span>
        </a>

        <a class="_9VEo1 " href="/databoard/tagged/">
          <span class="qzihg">
            <div class="coreSpriteDesktopProfileTagged "></div>
            <span class="_08DtY">已标记</span>
          </span>
        </a>
      </div>

      <!--外部链接-->
      <div class=" _2z6nI">

        <article>
          <div class="jju9v">
            <div class="m41U8">
              <img class="_61V1C" src="../img/show.jpg" alt="">
            </div>
            <div class="mDC51">
              <div class="JLbVX">
                <h2 class="Kr222">捕捉和分享你的每一精彩瞬间。</h2>
                <h3 class="c-Vw8">下载应用，分享首张照片或视频。</h3>
                <div class="SVLuk">
                  <a class="z1VUo"
                     href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.profilePage.badge&amp;mt=8">
                    <img class="Rt8TI" alt="已在 App Store 中提供"
                         src="../img/apple.png">
                  </a>
                  <a class="z1VUo"
                     href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DprofilePage%26ig_mid%3DW3oS1wALAAFUenBjxjVtgatMd0xj%26utm_medium%3Dbadge">
                    <img class="Rt8TI" alt="已在 Google Play 中提供"
                         src="../img/google.png">
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'user',
    data() {
      return {
        userAccountName: 'kevinten',
        userName: '汪十号',
        userSignature: 'woooooo',
        userIconUrl: "https://scontent-hkg3-2.cdninstagram.com/vp/44de05a800e8b92486c72a145630791d/5BF253EE/t51.2885-19/s150x150/39276572_233850873985970_2229252523871436800_n.jpg",
        dynamicCount: 4,
        fansCount: 6,
        followCount: 9,
      }
    }
  }
</script>

<style scoped>

  /*! CSS Used from: Embedded */
  .z1VUo {
    margin-right: 8px;
  }

  .z1VUo:last-child {
    margin-right: 0;
  }

  .Rt8TI {
    height: 40px;
  }

  /*! CSS Used from: Embedded */
  a, article, div, form, h1, h2, h3, header, img, li, section, span, ul {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  ul {
    list-style: none;
  }

  /*! CSS Used from: Embedded */
  article, div, header, main, section {
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
  button, input {
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
  .oF4XW, .oF4XW * {
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

  ._4pI4F {
    width: 100%;
  }

  ._8A5w5 {
    background-color: transparent;
    border: 1px solid #ed4956;
    color: #ed4956;
  }

  ._8A5w5 {
    border: 1px solid #dbdbdb;
    color: #262626;
  }

  /*! CSS Used from: Embedded */
  .glyphsSpriteSettings__outline__24__grey_9 {
    background-image: url(https://www.instagram.com/static/bundles/base/sprite_glyphs.png/0eb4cf27cdd8.png);
  }

  .glyphsSpriteSettings__outline__24__grey_9 {
    background-repeat: no-repeat;
    background-position: -157px -26px;
    height: 24px;
    width: 24px;
  }

  @media (min-device-pixel-ratio: 1.5),(-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi) {
    .glyphsSpriteSettings__outline__24__grey_9 {
      background-image: url(https://www.instagram.com/static/bundles/base/sprite_glyphs_2x.png/fdcf827e59e8.png);
    }

    .glyphsSpriteSettings__outline__24__grey_9 {
      background-size: 178px 162px;
      background-position: -154px -25px;
    }
  }

  /*! CSS Used from: Embedded */
  .u-__7 {
    display: block;
  }

  /*! CSS Used from: Embedded */
  .dCJp8 {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    background: 0 0;
    border: 0;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-height: 40px;
    min-width: 40px;
    padding: 0;
  }

  /*! CSS Used from: Embedded */
  .jju9v {
    background-color: #fff;
    border-radius: 4px;
  }

  .mDC51 {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }

  ._61V1C {
    width: 100%;
    height: 100%;
  }

  .JLbVX, .SVLuk {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .JLbVX {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    text-align: center;
  }

  .SVLuk {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: 25px;
  }

  .Kr222 {
    font-weight: 600;
  }

  .c-Vw8 {
    margin-top: 10px;
  }

  @media (min-width: 822px) {
    .jju9v {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
    }

    .mDC51 {
      -webkit-flex-basis: 400px;
      -ms-flex-preferred-size: 400px;
      flex-basis: 400px;
      height: 380px;
    }

    ._61V1C {
      border-radius: 4px 0 0 4px;
    }

    .m41U8 {
      height: 380px;
      width: 380px;
    }

    .c-Vw8 {
      font-size: 16px;
    }

    .Kr222 {
      font-size: 18px;
    }
  }

  @media (max-width: 821px) {
    .jju9v {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
    }

    .m41U8, .mDC51 {
      display: block;
      height: auto;
    }

    .m41U8 {
      max-width: 100%;
      width: 100%;
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }

    .mDC51 {
      -webkit-flex-basis: 188px;
      -ms-flex-preferred-size: 188px;
      flex-basis: 188px;
      -webkit-flex-shrink: 1;
      -ms-flex-negative: 1;
      flex-shrink: 1;
      -webkit-box-ordinal-group: 1;
      -webkit-order: 0;
      -ms-flex-order: 0;
      order: 0;
      padding: 40px 0;
    }

    .Kr222 {
      font-size: 16px;
    }

    .c-Vw8 {
      font-size: 14px;
    }
  }

  /*! CSS Used from: Embedded */
  .coreSpriteDesktopPhotoGridActive, .coreSpriteDesktopProfileIGTV, .coreSpriteDesktopProfileSave, .coreSpriteDesktopProfileTagged {
    background-image: url(https://www.instagram.com/static/bundles/base/sprite_core.png/f37e41a0eb73.png);
  }

  .coreSpriteDesktopPhotoGridActive {
    background-repeat: no-repeat;
    background-position: -378px -209px;
    height: 12px;
    width: 12px;
  }

  .coreSpriteDesktopPhotoGridActive {
    background-position: -190px -438px;
  }

  .coreSpriteDesktopProfileIGTV {
    background-repeat: no-repeat;
    background-position: -204px -438px;
    height: 12px;
    width: 12px;
  }

  .coreSpriteDesktopProfileSave {
    background-repeat: no-repeat;
    background-position: -36px -459px;
    height: 12px;
    width: 10px;
  }

  .coreSpriteDesktopProfileTagged {
    background-repeat: no-repeat;
    background-position: -246px -438px;
    height: 12px;
    width: 12px;
  }

  @media (min-device-pixel-ratio: 1.5),(-webkit-min-device-pixel-ratio: 1.5),(min-resolution: 144dpi) {
    .coreSpriteDesktopPhotoGridActive, .coreSpriteDesktopProfileIGTV, .coreSpriteDesktopProfileSave, .coreSpriteDesktopProfileTagged {
      background-image: url(https://www.instagram.com/static/bundles/base/sprite_core_2x.png/06b0008528a7.png);
    }

    .coreSpriteDesktopPhotoGridActive {
      background-size: 451px 431px;
      background-position: -439px -137px;
    }

    .coreSpriteDesktopProfileIGTV {
      background-size: 451px 431px;
      background-position: -439px -72px;
    }

    .coreSpriteDesktopProfileSave {
      background-size: 451px 431px;
      background-position: -439px -222px;
    }

    .coreSpriteDesktopProfileTagged {
      background-size: 451px 431px;
      background-position: -439px -111px;
    }
  }

  /*! CSS Used from: Embedded */
  .-nal3, .-nal3:active, .-nal3:hover, .-nal3:visited {
    color: inherit;
  }

  .g47SY {
    color: #262626;
    font-weight: 600;
  }

  /*! CSS Used from: Embedded */
  .tb_sK {
    display: none !important;
  }

  /*! CSS Used from: Embedded */
  .IalUJ, .M-jxE {
    height: 100%;
    width: 100%;
  }

  .M-jxE {
    background-color: #fafafa;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  .M-jxE::after {
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

  .IalUJ {
    border: 0;
    cursor: pointer;
    padding: 0;
  }

  .be6sR {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  /*! CSS Used from: Embedded */
  .k9GMp {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .k9GMp {
    margin-bottom: 20px;
  }

  .Y8-fY {
    font-size: 16px;
    margin-right: 40px;
  }

  .Y8-fY:first-child {
    margin-left: 0;
  }

  .Y8-fY:last-child {
    margin-right: 0;
  }

  /*! CSS Used from: Embedded */
  .qzihg {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  ._08DtY {
    margin-left: 6px;
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
  a._9VEo1, a._9VEo1:visited {
    color: #999;
  }

  ._9VEo1, a.T-jvg, a.T-jvg:visited, a._9VEo1, a._9VEo1:visited {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  a.T-jvg, a.T-jvg:visited {
    color: #262626;
  }

  ._9VEo1 {
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 52px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-transform: uppercase;
  }

  @media (min-width: 736px) {
    ._9VEo1:not(:last-child) {
      margin-right: 60px;
    }

    .T-jvg {
      border-top: 1px solid #262626;
      color: #262626;
      margin-top: -1px;
    }
  }

  @media (max-width: 735px) {
    ._9VEo1 {
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      cursor: pointer;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
      -webkit-flex: 1 1 auto;
      -ms-flex: 1 1 auto;
      flex: 1 1 auto;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      height: 44px;
    }
  }

  /*! CSS Used from: Embedded */
  .fx7hk {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #999;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    font-size: 12px;
    font-weight: 600;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    letter-spacing: 1px;
    text-align: center;
  }

  .fx7hk {
    border-top: 1px solid #efefef;
  }

  @media (max-width: 735px) {
    ._2z6nI {
      border-top: 1px solid #efefef;
    }
  }

  /*! CSS Used from: Embedded */
  .v9tJq {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0 auto 30px;
    max-width: 935px;
    width: 100%;
  }

  .zwlfE {
    color: #262626;
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    min-width: 0;
  }

  ._4dMfM {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .XjzKX {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
  }

  .-vDIg {
    display: block;
  }

  .-vDIg:empty {
    display: none;
  }

  .thEYr {
    display: block;
  }

  .thEYr {
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 20px;
  }

  .rhpdm {
    display: inline;
    font-weight: 600;
  }

  .vtbgv {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .AFWDX {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: 5px;
  }

  .AC5d8, .nZSzR {
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    min-width: 0;
  }

  .AC5d8 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .nZSzR {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }

  .smsjF {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .PJXu4 {
    margin-left: 6px;
  }

  @media (min-width: 736px) {
    .v9tJq {
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      padding: 60px 20px 0;
      width: calc(100% - 40px);
    }

    .zwlfE {
      -webkit-flex-basis: 30px;
      -ms-flex-preferred-size: 30px;
      flex-basis: 30px;
      -webkit-box-flex: 2;
      -webkit-flex-grow: 2;
      -ms-flex-positive: 2;
      flex-grow: 2;
    }

    ._4dMfM {
      height: 152px;
      width: 152px;
    }

    .XjzKX {
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      margin-right: 30px;
    }

    .-vDIg {
      font-size: 16px;
      line-height: 24px;
      word-wrap: break-word;
    }

    .vtbgv {
      margin-bottom: 44px;
    }

    .nZSzR {
      margin-bottom: 20px;
    }

    .AC5d8 {
      font-size: 32px;
      line-height: 40px;
      font-weight: 200;
    }
  }

  @media (max-width: 735px) {
    .zwlfE {
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    }

    ._4dMfM {
      height: 77px;
      width: 77px;
    }

    .XjzKX {
      margin-right: 28px;
    }

    .-vDIg {
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      padding: 0 16px 21px;
      text-overflow: ellipsis;
    }

    .vtbgv {
      margin: 30px 16px;
    }

    .nZSzR {
      margin-bottom: 12px;
    }

    .AC5d8 {
      font-size: 22px;
      line-height: 26px;
    }
  }
</style>
