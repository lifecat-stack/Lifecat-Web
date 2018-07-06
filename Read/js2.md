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