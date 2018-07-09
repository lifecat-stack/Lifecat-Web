### jQuery

#### 一
* $()等效于jQuery(),即为jQuery构造器
```javascript
$(function(){
   1. $(CSS选择器) 操作CSS
      var red = $("p span");
      red.css("color","red");

   2. $(HTML字符串) 动态创建DOM元素
      $("<span>...</span>").appendTo("body");

   3. $(element元素) 将若干DOM对象转化为jQuery对象
      $("span").css(...)

   4. $(callback) 绑定DOM文档加载完毕之后的函数
      alert(...)
})
```
* DOM对象和jQuery对象是两个不同的概念，不能相互调用，
  可以通过$(DOM)转化为jQuery对象

#### 访问元素
1、each()遍历元素
```javascript
    var li = $('li');
    li.each(function(n){
        this.style.fontSize = ...;
    })
```

2、size()/length 返回对象中元素的个数

3、get()/get(index) 将jQuery对象转换为DOM对象集合

4、index(subject) 获取jQuery对象中指定元素的下标索引值

#### 读写属性
1、attr(name) 读取属性
```javascript
    var href = $('a').attr('href');
    // 获取第一个匹配元素的对应属性值
```

2、attr(key,value) 设置属性
```javascript
    $(this).attr("title",this.innerHTML + "(" + $(this).attr("href") + ")");
```

3、attr(key,fun) 设置属性
为属性设置一个函数，计算返回值作为赋值

4、attr(properties) 设置多个属性
```javascript
    .attr({width:"100",height:"100"})
```

5、removeAttr(name) 移除属性

#### 定义类样式
1、addClass(class) 为元素增加样式类
```javascript
    $("p").addClass(className)
```

2、removeClass(class) 删除样式表

3、toggleClass(class) 打开关闭样式表

#### 读写文本和值
1、text() 获取元素文本内容

2、text(val) 覆盖原有文本

