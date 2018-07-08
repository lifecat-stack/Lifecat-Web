### Ajax
#### XMLHttpRequest
__XMLHttpRequest方法__

|方法|说明
|---|---|
|open|创建新的HTTP请求，并制定请求的方法、URL以及验证信息
|send|发送HTTP请求到web服务器并接受回应
|...|...

__XMLHttpRequest属性__

|属性|说明
|---|---|
|onreadystatechange|当readyState属性改变时的回调函数
|readyState|返回当前请求的状态
|status|http请求码

#### 步骤解析

#### 例程
```javascript
var request = createXMLHttpRequest();
window.onload = function(){
    var user = document.getElementById("user");
    user.onkeyup = function(){
        var name = document.getElementById("user).value;
        var url = "test.jsp?name=" + name;
        request.open("GET",url,true);
        request.send(null);
        request.onreadystatechange = updatePage;
    }
}
function updatePage(){
    if(request.readyState == 4){
        if(request.status == 200){
            var response = request.responseText;
            vat p =document.getElementsBytTagNmae("p")[0];
            p.innerHTML = response;
        }
        else
            alert(request.status);
    }
}
```