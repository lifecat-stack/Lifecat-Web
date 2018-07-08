#### 对象模型
* 用户对象
  * js中定义的对象
* 内置对象
  * 系统预定义并被内置到JavaScript中的对象
  * 如Object Function
* 宿主对象
  * 捆绑到浏览器内的API组件定义的对象，这些对象与js本身无直接关系，但在Js中可以操作他们
  * 如`Window`,`Document`,`Navigator`,`Location`等

#### 浏览器对象BOM（主要）
|BOM对象|说明
|:--:|---|
|Window|顶层对象，每当<body>加载时，就会被自动创建
|Document|包含整个HTML文档，可被用来访问页面中的所有元素

__（1）Window对象__
1、window对象代表当前窗口，可以省略window
2、常用方法
open(url,name,features,replace) 打开一个新窗口
close() 关闭窗口
3、交互方法
alert() 提示对话框
confirm() 确认对话框
prompt() 输入对话框

#### DOM文档对象模型：访问和操作文档的API
<p>
1、获取指定元素节点：var node = document. getElementById(ID)
2、获取指定标签所有元素：var all = document.getElementByTagName(tag)
3、获取节点属性：getAttribute()
4、设置节点属性：setAttribute()
</p>

#### 操作文档
* innerHTML 插入内容
* innerText 插入文本内容
* outerHTML 覆盖内容
* outerText 副高文本内容

--------------------------------------------------
### 事件处理模型

#### 基本事件类型
|属性|触发
|---|---|
|onchange|域内容改变
|onclick|鼠标点击
|onmouseover|鼠标移到上面
|onmouseout|鼠标移开
|onmousemove|鼠标移动
|onfocus|获得焦点
|onblur|失去焦点
|onkeydown|按下键盘
|onkeypress|释放键盘
|onselect|文本被选定
|onsubmit|表单被提交
|...|...

#### 绑定事件
* 静态绑定
    * 将事件属性作为属性值直接付给元素
* 动态绑定
    * 利用DOM对象进行赋值
      var button =document.getElementById("id");
      button.onclick = function(){
        alert...
      }

#### 事件处理函数的参数
* 一般不会传递参数，默认传递一个event实参
   function(e){ e = window.event } ==> Event对象
* this一般指本对象，有时候指window对象

-------------------------------------------------
### 动态CSS

#### 动态CSS脚本
`
box.style.borderRightColor = "red";
`
属性对象.style.属性名的驼峰命名 ==> CSS操作

#### style对象方法
* getPropertyValue(propertyName)：获取指定样式属性的值
* setProperty(propertyName,value,priority)：设置指定属性的值
    * 例：box.style.setProperty("width","400px","")

