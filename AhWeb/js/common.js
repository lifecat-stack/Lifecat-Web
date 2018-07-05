$(function() {

    if (myBrowser() != "IE8" && myBrowser() != "IE7") {

        /* wow.min.js涓嶆敮鎸両E8 */
        /* 鏁堟灉鍒濆鍖� */

        if (window.WOW) {
            wow = new WOW({
                boxClass : 'wow',
                animateClass : 'animated',
            });
            wow.init();
        }

    }

    $(".code").hover(function() {
        $(this).toggleClass("animated shake");
    })

    /* logo鎮仠鏁堟灉 */
    $(".nav-logo img").hover(function() {
        $(this).toggleClass("animated rubberBand");
    })

})

/* 娴忚鍣ㄥ垽鏂� */
function myBrowser() {
    var userAgent = navigator.userAgent; // 鍙栧緱娴忚鍣ㄧ殑userAgent瀛楃涓�
    var isOpera = userAgent.indexOf("Opera") > -1; // 鍒ゆ柇鏄惁Opera娴忚鍣�
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; // 鍒ゆ柇鏄惁IE娴忚鍣�
    var isFF = userAgent.indexOf("Firefox") > -1; // 鍒ゆ柇鏄惁Firefox娴忚鍣�
    var isSafari = userAgent.indexOf("Safari") > -1; // 鍒ゆ柇鏄惁Safari娴忚鍣�
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
    }// isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
}