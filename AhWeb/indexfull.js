//鑾峰彇褰撳墠椤甸潰鍚庣紑锛屼互鍒ゆ柇褰撳墠椤甸潰鏄腑/鑻辨枃
var loc = location.href;
var n2 = loc.indexOf("-");//鍙栧緱鈥�-鈥濆彿鐨勪綅缃�
var language=decodeURI(loc.substr(n2+1, 2));
if(n2 < 0){ //娌℃湁鈥�-鈥濆彿锛岃鏄庢槸鍩熷悕璁块棶锛岄粯璁や腑鏂�
    language=0
}else if(language == 'ch'){
    language=0
}else{
    language=1
}

function getIndexfullImgs() {
    $.ajax({
        type:"POST",
        url:thePath+"/Indexfull/getIndexfullImgs.do",
        data:{
            "language":language
        },
        success:function(data){
            if(data.state==0){
                //alert("data鎴愬姛::"+data.massage);
                innerImgs(data);
            }else{
                alert("缃戠粶寮傚父锛屽姞杞藉け璐�");
            }
        },
        error:function(){
            alert("缃戠粶寮傚父锛屽姞杞藉け璐�");
        }
    });
}

function innerImgs(data){
    var json=eval(data.data);//灏唈son瀛楃涓茶浆鎹㈡垚闇€瑕佺殑json瀵硅薄
    for(var i=0; i<json.length; i++){
        //alert("#f"+i+"1");
        $("#f"+i+"1").attr('src',thePath+json[i].image);
        $("#f"+i+"2").html('<strong>'+json[i].yearMouth+'-'+json[i].day+'</strong>');
        $("#f"+i+"3").html('<strong>'+json[i].imageTitle+'</strong>');
    }
}

window.onload=function (ev) {
    getIndexfullImgs();
};