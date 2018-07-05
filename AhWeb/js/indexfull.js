$(function() {

    if (myBrowser() != "IE8" && myBrowser() != "IE7") {
        if (window.CanvasParticle) {
            // canvas閰嶇疆start
            // 閰嶇疆
            var mydivW = $("#mydiv").width();
            if (mydivW < 768) {
                var config = {
                    vx : 2, // 灏忕悆x杞撮€熷害,姝ｄ负鍙筹紝璐熶负宸�
                    vy : 2, // 灏忕悆y杞撮€熷害
                    height : 3, // 灏忕悆楂樺锛屽叾瀹炰负姝ｆ柟褰紝鎵€浠ヤ笉瀹滃お澶�
                    width : 3,
                    count : 80, // 鐐逛釜鏁�
                    color : "83,110,197", // 鐐归鑹�
                    stroke : "255,255,255", // 绾挎潯棰滆壊
                    dist : 1000, // 鐐瑰惛闄勮窛绂�
                    e_dist : 1000, // 榧犳爣鍚搁檮鍔犻€熻窛绂�
                    max_conn : 5
                    // 鐐瑰埌鐐规渶澶ц繛鎺ユ暟
                }

            } else {
                var config = {
                    vx : 2, // 灏忕悆x杞撮€熷害,姝ｄ负鍙筹紝璐熶负宸�
                    vy : 2, // 灏忕悆y杞撮€熷害
                    height : 3, // 灏忕悆楂樺锛屽叾瀹炰负姝ｆ柟褰紝鎵€浠ヤ笉瀹滃お澶�
                    width : 3,
                    count : 200, // 鐐逛釜鏁�
                    color : "83,110,197", // 鐐归鑹�
                    stroke : "255,255,255", // 绾挎潯棰滆壊
                    dist : 6000, // 鐐瑰惛闄勮窛绂�
                    e_dist : 10000, // 榧犳爣鍚搁檮鍔犻€熻窛绂�
                    max_conn : 10
                    // 鐐瑰埌鐐规渶澶ц繛鎺ユ暟
                }
            }

            // 璋冪敤
            CanvasParticle(config);

        } // canvas閰嶇疆end
    }

    /* fullpage閰嶇疆 */
    $("#fullpage").fullpage(
        {
            scrollOverflow : true,
            touchSensitivity : 8,
            scrollingSpeed : 1200,
            css3 : true,
            afterRender : function() {

                $(".fullpage-firstSection").children().css({
                    display : 'block'
                }).addClass("animated rubberBand");

                $(".fullpage-navbar-index").animate({
                    opacity : 1
                }, 1000);

                $(".before-load-hidden").css({
                    display : 'table'
                });

            },
            afterLoad : function(anchorLink, index) {

            },
            onLeave : function(index, nextIndex, direction) {

                if (nextIndex == 2) {
                    $(".fullpage-solution-animate").children().addClass(
                        "animated  fadeInUp");
                    $(".fullpage-solution-content-animate").children()
                        .children().addClass("animated fadeInDown");
                } else {
                    $(".fullpage-solution-animate").children().removeClass(
                        "animated  fadeInUp");
                    $(".fullpage-solution-content-animate").children()
                        .children().removeClass("animated fadeInDown");
                }

                if (nextIndex == 3) {
                    $(".fullpage-news-animate").children().addClass(
                        "animated fadeInUp");
                    $(".fullpage-news-contentL-animate").children()
                        .addClass("animated fadeInLeftBig");
                    $(".fullpage-news-contentR-animate").children()
                        .addClass("animated fadeInRightBig");
                } else {
                    $(".fullpage-news-animate").children().removeClass(
                        "animated fadeInUp");
                    $(".fullpage-news-contentL-animate").children()
                        .removeClass("animated fadeInLeftBig");
                    $(".fullpage-news-contentR-animate").children()
                        .removeClass("animated fadeInRightBig");
                }

            }

        })

    /* fullpage閰嶇疆 end */

    window.onresize = function() {
        var fullpageCW = $("#fullpage").width();
        if (fullpageCW < 768) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    /* 鍚堜綔浼欎即鍔犺浇 */
    var logoWall = document.getElementById('logoWall');
    var logoBox = document.getElementById('logoBox');
    if (logoWall && logoBox) {
        var imgW = $("#logoBox li").width();
        var speed = -2;
        var logoLen = $("#logoBox li").length;
        logoBox.style.width = logoLen * imgW + 'px';
        function move() {
            if (-logoBox.offsetLeft + logoWall.offsetWidth < logoBox.offsetWidth) {
                logoBox.style.left = logoBox.offsetLeft + speed + 'px';
            } else {
                logoBox.style.left = 0;
            }
        }
        var timer = setInterval(move, 30);

        $("#logoBox").mouseenter(function() {
            clearInterval(timer);
        }).mouseleave(function() {
            timer = setInterval(move, 30);
        })
    }
})