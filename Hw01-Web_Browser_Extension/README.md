# Hw-01 Web 前端初探

> 武桐西 2112515

## 作业要求

1. 针对任意网页，调研其不同方式请求，至少包括`get`、`post`请求，写出或截图其请求及相应数据包。

2. 针对任意网页，使用`jQuery`，能够触发某一事件，写出至少三条语句，截图响应前后不同的状态。

3. 完成一个浏览器插件，功能不限，文档中写明功能及代码。

## 一、HTTP 请求

HTTP（超文本传输协议）定义了客户端和服务器之间交互的一组规则。

### HTTP 请求的组成

一个标准的HTTP请求由请求行、请求头（headers）、空行和请求体（body）四部分组成。

1. **请求行（Request Line）：**
   
   - 请求行包含请求的方法、目标URL和使用的HTTP协议版本。
   - 格式为 `<方法> <URL> <协议版本>`。
   
   ```http
   GET /path/to/resource HTTP/1.1
   ```
   
   在上面的例子中：
   - 方法是GET，表示请求获取指定资源。
   - URL是请求的目标资源路径。
   - 协议版本是HTTP/1.1。
   
2. **请求头（Request Headers）：**
   
   - 请求头包含了关于请求的各种信息，如客户端信息、被请求资源的类型等。
   - 每个请求头都是一个键值对。
   
   ```http
   Host: example.com
   User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
   ```
   
   在上面的例子中，`Host`是一个请求头，表示请求的目标主机；`User-Agent`表示发起请求的用户代理信息。
   
3. **空行：**
   
   - 空行用于分隔请求头和请求体。
   - 在HTTP请求中，空行是一个只包含回车换行的行，表示请求头的结束。
   
   ```http
   Host: example.com
   User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36
   
   ```
   
4. **请求体（Request Body）：**
   
   - 请求体包含了发送给服务器的数据，通常用于POST、PUT等请求。
   - 对于GET请求，请求体通常为空。
   
   ```http
   POST /path/to/resource HTTP/1.1
   Host: example.com
   Content-Type: application/x-www-form-urlencoded
   
   param1=value1&param2=value2
   ```
   
   在上面的例子中，`Content-Type`表示请求体的数据格式，而请求体的内容是`param1=value1&param2=value2`。

### HTTP 请求头

HTTP 请求头的常见的键一般有：

1. **Host:**
   - 用于指定目标服务器的主机名和端口号。
   - 示例：`Host: www.example.com`

2. **User-Agent:**
   - 用于标识发起请求的用户代理（浏览器或其他客户端）的信息。
   - 示例：`User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36`

3. **Accept:**
   - 指定客户端可以处理的内容类型，通常用于告诉服务器客户端可以接受哪种类型的响应。
   - 示例：`Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8`

4. **Accept-Language:**
   - 指定客户端接受的语言类型。
   - 示例：`Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6`

5. **Accept-Encoding:**
   - 用于告知服务器客户端支持的内容编码方式，例如gzip、deflate。
   - 示例：`Accept-Encoding: gzip, deflate, br`

6. **Connection:**
   - 控制是否保持持久连接。
   - 示例：`Connection: keep-alive`

7. **Referer:**
   - 表示请求是从哪个URL页面跳转过来的。
   - 示例：`Referer: https://www.example.com/home`

8. **Cookie:**
   - 包含客户端提交的cookie信息，用于跟踪用户状态。
   - 示例：`Cookie: user_id=123; session_token=abc`

9. **Authorization:**
   - 包含用于身份验证的信息，例如基本认证（Basic Authentication）的凭证。
   - 示例：`Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`

10. **Content-Type:**
    - 用于指定请求或响应中实体主体的媒体类型。
    - 示例：`Content-Type: application/json` 、`Content-Type: text/html`

### 常见 HTTP 请求及示例

由于目前HTTP请求中应用最广泛的是 `GET` 与 `POST` 请求，其他的请求相对用的较少，有相应HTTP请求的对应网页可能并不是很容易找到，因此以下演示主要聚焦 `GET` 与 `POST` 请求。

访问网站以我的 [GitHub主页](https://github.com/InfinityUniverse0) 为例。其页面内容大致如下（**注**：由于笔者已经登录，因此该网页是从账户所有者的视角呈现，访客视角可能与本页面略有区别）：

![image-20231218102036738](README.assets/image-20231218102036738.png)

1. **GET请求：**
   
   - 用于从服务器获取数据。
   - 请求参数附加在URL中，可见于浏览器地址栏。
   - 不适合传输敏感信息，因为参数可见于URL。
   
   ```http
   GET /path/to/resource?param1=value1&param2=value2 HTTP/1.1
   Host: example.com
   ```
   
   **示例1**：对 `/InfinityUniverse0.html` 的 `GET` 请求。
   
   ![image-20231218103104480](README.assets/image-20231218103104480.png)
   
   其请求标头主要内容（部分）如下：
   
   ![image-20231218103623826](README.assets/image-20231218103623826.png)
   
   ![image-20231218103756267](README.assets/image-20231218103756267.png)
   
   对应的HTTP响应信息则为所请求的HTML文件内容：
   
   ![image-20231218110400985](README.assets/image-20231218110400985.png)
   
   **示例2**：对 CSS 文件的 `GET` 请求。
   
   ![image-20231218110622517](README.assets/image-20231218110622517.png)
   
   其响应则为对应的CSS文件：
   
   ![image-20231218110659209](README.assets/image-20231218110659209.png)
   
   **示例3**：对图片文件的 `GET` 请求。
   
   ![image-20231218111845512](README.assets/image-20231218111845512.png)
   
   （由于在本地有缓存，因此请求标头并未显示完整）
   
   注意：红框里的 `?v=4` 即为 `GET` 请求的参数，可以在对应的Payload里面看到：
   
   ![image-20231218111845512](README.assets/image-20231218112007589.png)
   
   返回的响应即为对应的图片：
   
   ![image-20231218112304734](README.assets/image-20231218112304734.png)
   
   **示例4**：图片文件
   
   ![image-20231218112346522](README.assets/image-20231218112346522.png)
   
   注意：红框中有多个 `GET` 请求参数，对应的 Payload 如下：
   
   ![image-20231218112424146](README.assets/image-20231218112424146.png)
   
   图片文件如下：
   
   ![image-20231218114056717](README.assets/image-20231218114056717.png)
   
2. **POST请求：**
   
   - 用于向服务器提交数据，通常用于表单提交等。
   - 请求参数附加在请求体中，不可见于URL。
   - 适合传输敏感信息。
   
   ```http
   POST /path/to/resource HTTP/1.1
   Host: example.com
   
   param1=value1&param2=value2
   ```
   
   **示例1**：
   
   ![image-20231218111154110](README.assets/image-20231218111154110.png)
   
   ![image-20231218111220418](README.assets/image-20231218111220418.png)
   
   对应的请求体的内容（Payload负载）：
   
   ![image-20231218111336169](README.assets/image-20231218111336169.png)
   
   **示例2**：提交GitHub的个人状态。
   
   ![image-20231218113033128](README.assets/image-20231218113033128.png)
   
   这是一个表单提交，对应的HTTP POST请求如下：
   
   ![image-20231218113228446](README.assets/image-20231218113228446.png)
   
   ![image-20231218113247482](README.assets/image-20231218113247482.png)
   
   其请求体（Payload）的源内容如下：
   
   ![image-20231218113420008](README.assets/image-20231218113420008.png)
   
   将其分析为人易读的数据，如下：
   
   ![image-20231218113610030](README.assets/image-20231218113610030.png)
   
3. **PUT请求：**
   
   - 用于向服务器发送数据，类似于POST请求。
   - 不同之处在于PUT请求通常用于更新资源，而POST用于创建新资源。
   
   ```http
   PUT /path/to/resource HTTP/1.1
   Host: example.com
   
   param1=value1&param2=value2
   ```
   
4. **DELETE请求：**
   
   - 用于请求服务器删除指定的资源。
   
   ```http
   DELETE /path/to/resource HTTP/1.1
   Host: example.com
   ```
   
5. **PATCH请求：**
   - 用于对资源进行部分更新。
   - 与PUT的区别在于，PATCH只更新资源的一部分，而PUT更新整个资源。

   ```http
   PATCH /path/to/resource HTTP/1.1
   Host: example.com
   
   param1=newValue
   ```

6. **HEAD请求：**
   - 类似于GET请求，但服务器只返回响应头，不返回实际数据。
   - 用于获取资源的元信息而无需获取资源本身。

   ```http
   HEAD /path/to/resource HTTP/1.1
   Host: example.com
   ```

7. **OPTIONS请求：**
   
   - 用于获取目标资源支持的通信选项。
   - 常用于跨域请求的预检。
   
   ```http
   OPTIONS /path/to/resource HTTP/1.1
   Host: example.com
   ```

## 二、`jQuery` 触发响应

以 [哔哩哔哩 (゜-゜)つロ 干杯~-bilibili](https://www.bilibili.com/) 网页为例。

实验环境采用 Win10 系统 Edge 浏览器的开发者工具。

**注**：由于浏览器开发工具在该网站上并不完全支持 `jQuery` 语法，因此在编写时混杂了一些 `Javascript` 语法（虽然 `jQuery` 本身就是一个 JS 库）。

### **示例1**：搜索“原神启动”

#### 网站检查

进入哔哩哔哩的首页，可以观察到一个搜索框。（注：*搜索框中的默认占位符为B站随机推荐，与本人无关，仅作教学用途，无任何恶意*）

![image-20231221013057210](README.assets/image-20231221013057210.png)

打开开发者工具，可以看到与该搜索框相关的 DOM 元素如下：

```html
<form id="nav-searchform" class="" style="border-radius:8px 8px 8px 8px;">
    <div class="nav-search-content">
        <input class="nav-search-input" type="text" autocomplete="off" accesskey="s" maxlength="100" x-webkit-speech="" x-webkit-grammar="builtin:translate" value="" placeholder="白粥nina瓜" title="白粥nina瓜">
    	<div class="nav-search-clean"><svg><!-- 省略清除搜索图标 --></svg></div>
    </div>
    
    <div class="nav-search-btn"><svg><!-- 省略搜索图标 --></svg></div>
</form>
```

各个元素的解释如下：

```html
<form id="nav-searchform">
    <div class="nav-search-content">
        <input class="nav-search-input" value="输入框的内容（值）" placeholder="默认的占位符">
    	<div class="nav-search-clean">清除搜索图标</div>
    </div>
    <div class="nav-search-btn">搜索图标</div>
</form>
```

#### jQuery 响应

1. 获取输入框DOM元素，修改 `value` 属性值

   ```javascript
   $(".nav-search-input").value // .表示匹配类名 value用以获取输入框的当前值
   ```

   ![image-20231221014413305](README.assets/image-20231221014413305.png)

   可以看到 `value` 值为空，意味着输入框中无内容；而这时候由于 `placeholder` 属性的值为 `"白粥nina瓜"` ，因此输入框会显示该默认**占位符**信息。

   ```javascript
   $(".nav-search-input").setAttribute("value","原神启动") // 设置输入框的 value 属性值为 "原神启动"
   /*
    * 实际上该语句的纯 jQuery 语句应为
    * $(".nav-search-input").attr("value","原神启动")
    */
   ```

   ![image-20231221015722678](README.assets/image-20231221015722678.png)

   可以看到，该语句执行后，输入框中的内容变为 `"原神启动"` 。

2. 搜索图标的点击事件

   ```javascript
   // 调用 click 触发点击事件
   $(".nav-search-btn").click()
   ```

   ![image-20231221020414570](README.assets/image-20231221020414570.png)

   ![image-20231221021837465](README.assets/image-20231221021837465.png)

   可以看到，触发点击事件后，会自动跳转到另一个网页URL，并且以 GET 请求的方式在地址栏中体现，搜索内容也在搜索框中体现。

   **值得注意的是**，这里并没有我们所设想的那样搜索 `"原神启动"` ，而是搜索的原搜索框本来的原始内容。经过后续的测试，发现这个搜索内容既不能通过 `value` 属性影响，也不能通过 `placeholder` 或 `title` 属性影响。

   同时，注意到其 `form` 表单并没有绑定提交后的 `action` 等响应事件，推测其可能是在某个JS文件中进行处理。除此之外，在输入框中通过用户键盘输入的内容，也并不会在对应的 `input` 元素中有所**显示的**体现。

   综上，推测这一现象产生的原因是：B站可能做了一些处理，更改了一般的搜索处理逻辑，例如将行为隐藏在JS文件中，用来防止这样类似的操作，而只允许用户通过亲自输入来实现对应内容的搜索。

### 示例2：去除广告

#### 网页检查

在B站首页，可以看到推送的广告。

![image-20231221023553427](README.assets/image-20231221023553427.png)

使用开发者工具检查 DOM 元素。

![image-20231221023716372](README.assets/image-20231221023716372.png)

关键信息如下：

```html
<div class="feed-card" data-v-6f3c6166="">
    <div class="bili-video-card is-rcmd">
        <div class="bili-video-card__skeleton hide"></div>
    	<div class="bili-video-card__wrap __scale-wrap">
            <svg class="bili-video-card__info--ad"></svg> <!-- ad 代表广告 -->
    	</div>
	</div>
</div>
<!-- 为节省篇幅 忽略了部分代码结构 上述代码仅作示例 -->
```

#### jQuery 响应

```javascript
// 定位到对应DOM元素后，将style属性设置为"display: none"，即可隐藏
$(".bili-video-card__info--ad").parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.setAttribute("style", "display: none")

/*
 * 实际上 jQuery 中标准的访问父结点可以用 parent()
 */
```

![image-20231221025133928](README.assets/image-20231221025133928.png)

可以看到执行完该语句后，广告对应的视频卡消失了。

## 三、浏览器插件：

### Motivation

众所周知，CSDN是每一位国内程序员必然会使用的一个与编程相关的博客网站。而当你没有CSDN账号，或者不想浪费时间手机扫码登录时，面对着只能“登录复制”的代码，你本就被bug折磨的内心会不会更加烦闷？

![image-20231220023012630](README.assets/image-20231220023012630.png)

![image-20231220023302635](README.assets/image-20231220023302635.png)

基于上述原因，笔者编写了一个 TamperMonkey 脚本（可作为浏览器插件使用），能够在未登录 CSDN 的情况下，一键复制代码。

### Overview

CSDN-OneClickCodeCopy：在 CSDN 中，无需登录即可一键复制代码！

其主要功能包括：

1. 将原“登陆复制”按钮替换为“一键复制”；
2. 点击“一键复制”，即可在不触发登录界面的情况下，复制代码框内的代码到剪切板（Clipboard）；
3. 显示复制状态信息（复制成功或复制失败），一段时间后（本脚本中设置为 $3s$ ），恢复为“一键复制”。

### 前期调研

经过前期对 CSDN 网站的调研，发现其代码块主要分为以下两种：

1. 白色代码块

   ![image-20231220023408888](README.assets/image-20231220023408888.png)

   其HTML元素组成如下：

   ```html
   <pre data-index="3" class="set-code-show" name="code">
       <code class="hljs language-cobol">
           <ol class="hljs-ln" style="width:100%">
               <li>
                   <div class="hljs-ln-numbers">
                       <div class="hljs-ln-line hljs-ln-n" data-line-number="1"></div>
                   </div>
                   <div class="hljs-ln-code">
                       <div class="hljs-ln-line">
                           <span class="hljs-keyword">from</span> sklearn.datasets import load_iris
                       </div>
                   </div>
               </li>
               <li>
                   <div class="hljs-ln-numbers">
                       <div class="hljs-ln-line hljs-ln-n" data-line-number="2"></div>
                   </div>
                   <div class="hljs-ln-code">
                       <div class="hljs-ln-line"> </div>
                   </div>
               </li>
               <!-- 此处省略部分内容 -->
           </ol>
       </code>
       <div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}" onclick="hljs.signin(event)"></div>
   </pre>
   ```

   总结如下：

   ```html
   <pre data-index="3" class="set-code-show" name="code">
   	<code>这里是代码的内容</code>
   	<div class="hljs-button signin active" data-title="登录复制" data-report-click="已省略" onclick="hljs.signin(event)">
   		这里是“登陆复制”按钮
   		其类名主要是 hljs-button
   		data-title 属性即为其所显示的文本
   		onclick 属性即为鼠标点击时的响应
   		data-report-click 属性主要是用来向服务器报告点击事件的用户的相关信息的，这里可以不用关注
   	</div>
   </pre>
   ```

2. 黑色代码块

   ![image-20231220023426637](README.assets/image-20231220023426637.png)

   其HTML元素组成如下：

   ```html
   <pre data-index="0" class="set-code-show prettyprint">
       <code class="prism language-c has-numbering" onclick="mdcp.signin(event)" style="position: unset;">
           <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
           <!-- 此处省略部分内容 -->
           <span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{<!-- --></span>
               <span class="token keyword">char</span> hex_ip<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储输入的十六进制格式的IP地址，需要8个字符的空间，加上字符串结尾符'\0'共9个字符</span>
               <!-- 此处省略部分内容 -->
               <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <div class="hljs-button signin active" data-title="登录复制" data-report-click="{&quot;spm&quot;:&quot;1001.2101.3001.4334&quot;}"></div>
       </code>
       <ul class="pre-numbering" style="">
           <li style="color: rgb(153, 153, 153);">1</li>
           <li style="color: rgb(153, 153, 153);">2</li>
           <!-- 此处省略部分内容 -->
           <li style="color: rgb(153, 153, 153);">21</li>
       </ul>
   </pre>
   ```

   总结如下：

   ```html
   <pre data-index="0" class="set-code-show prettyprint">
   	<code class="prism language-c has-numbering" onclick="mdcp.signin(event)" style="已省略">
   		代码内容
   		注意：这里的鼠标点击响应函数在 code 标签中绑定
   		<div class="hljs-button signin active" data-title="登录复制" data-report-click="已省略">
   			这里是“登陆复制”按钮
               其类名主要是 hljs-button
               data-title 属性即为其所显示的文本
               data-report-click 属性主要是用来向服务器报告点击事件的用户的相关信息的，这里可以不用关注
   		</div>
   	</code>
   	<ul class="pre-numbering" style="">
           代码行号
       </ul>
   </pre>
   ```

二者的主要区别在于， `<code>` 与 `<div class="hljs-button">` 是**同级兄弟节点**还是**父子节点**关系。

### 功能实现

#### TamperMonkey 元数据

```javascript
// ==UserScript==
// @name         CSDN 一键复制（无需登录）
// @namespace    https://github.com/InfinityUniverse0
// @version      1.0.0
// @description  在 CSDN 中，无需登录即可一键复制代码！
// @author       Tongxi Wu
// @match        *://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==
```

各个字段的含义如下：

```javascript
// ==UserScript==
// @name         脚本名称
// @namespace    用以标识同名不同作者的脚本，一般可以为个人博客等
// @version      版本信息
// @description  描述信息
// @author       T作者
// @match        该脚本使用的网页（可以使用正则表达式或通配符）
// @icon         图标
// @grant        脚本所需授予的权限
// ==/UserScript==
```

#### 定位 DOM 元素 + 修改属性值

```javascript
var codeBlockList = document.getElementsByTagName("code");

for (var i = 0; i < codeBlockList.length; i++) {
    var codeBlock = codeBlockList[i].parentNode;

    // 获取第一个匹配的子元素
    var code = codeBlock.querySelector("code"); // 标签名匹配
    var btn = codeBlock.querySelector(".hljs-button"); // 类名匹配

    if (code && code.hasAttribute("onclick")) {
        code.removeAttribute("onclick"); // 清除原事件绑定
        code.addEventListener("click", copyCode); // 点击事件监视器

        if (btn) {btn.setAttribute("data-title", "一键复制");}
    }
    else if (btn) {
        btn.setAttribute("data-title", "一键复制");

        // 设置 onclick 属性以调用 copyCode 函数
        btn.removeAttribute("onclick"); // 清除原事件绑定
        btn.addEventListener("click", copyCode); // 点击事件监视器
        // btn.removeAttribute("data-report-click");
    }
}
```

#### 鼠标点击响应函数：复制代码

```javascript
function copyCode(event) {
    var code = event.target.parentNode.querySelector("code");
    if (!code) code = event.target.parentNode;

    // 创建一个临时的 textarea 元素
    var textarea = document.createElement("textarea");
    textarea.value = code.innerText;
    document.body.appendChild(textarea);

    // 选择 textarea 中的文本
    textarea.select();

    try {
        // 尝试执行复制命令
        var successful = document.execCommand("copy");

        var message = successful ? "复制成功" : "复制失败";
        event.target.setAttribute("data-title", message);
        setTimeout(function () {
            event.target.setAttribute("data-title", "一键复制"); // 三秒后子线程执行，将其还原
        }, 3000);
        // alert(message);
    } catch (err) {
        console.error("复制失败:", err);
    }

    // 移除临时的 textarea 元素
    document.body.removeChild(textarea);
}
```

这里需要注意：

1. 之所以采用一个临时变量 `textarea` 是因为：在将文本复制到剪贴板时，通常需要将文本放置在可编辑的元素（例如 `textarea` 或 `input`）中，然后执行复制命令。这是因为浏览器出于安全原因，通常只允许在用户交互的上下文中执行复制命令。

   具体做法如下：

   创建一个临时的 `textarea` 元素，将文本放置在其中，然后将这个 `textarea` 添加到页面中。这样做的目的是为了在执行复制命令时使用这个可编辑元素。在这个过程中，我们将文本放在一个可编辑的元素中，并通过执行 `document.execCommand("copy")` 来触发复制命令。一旦复制完成，将这个临时的 `textarea` 元素从页面中移除，以避免对页面的影响。

   这样可以在保证安全性的情况下完成剪贴板复制的任务。

2. 使用 `setTimeout` 启动异步任务，在不影响主线程的响应的情况下，完成一段时间后对按钮文本的初始状态的恢复。

### 源代码

```javascript
// ==UserScript==
// @name         CSDN 一键复制（无需登录）
// @namespace    https://github.com/InfinityUniverse0
// @version      1.0.0
// @description  在 CSDN 中，无需登录即可一键复制代码！
// @author       Tongxi Wu
// @match        *://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function(){
    'use strict';

    function copyCode(event) {
        var code = event.target.parentNode.querySelector("code");
        if (!code) code = event.target.parentNode;

        // 创建一个临时的 textarea 元素
        var textarea = document.createElement("textarea");
        textarea.value = code.innerText;
        document.body.appendChild(textarea);

        // 选择 textarea 中的文本
        textarea.select();

        try {
            // 尝试执行复制命令
            var successful = document.execCommand("copy");

            var message = successful ? "复制成功" : "复制失败";
            event.target.setAttribute("data-title", message);
            setTimeout(function () {
                event.target.setAttribute("data-title", "一键复制"); // 三秒后子线程执行，将其还原
            }, 3000);
            // alert(message);
        } catch (err) {
            console.error("复制失败:", err);
        }

        // 移除临时的 textarea 元素
        document.body.removeChild(textarea);
    }

    var codeBlockList = document.getElementsByTagName("code");

    for (var i = 0; i < codeBlockList.length; i++) {
        var codeBlock = codeBlockList[i].parentNode;

        // 获取第一个匹配的子元素
        var code = codeBlock.querySelector("code"); // 标签名匹配
        var btn = codeBlock.querySelector(".hljs-button"); // 类名匹配

        if (code && code.hasAttribute("onclick")) {
            code.removeAttribute("onclick"); // 清除原事件绑定
            code.addEventListener("click", copyCode);

            if (btn) {btn.setAttribute("data-title", "一键复制");}
        }
        else if (btn) {
            btn.setAttribute("data-title", "一键复制");

            // 设置 onclick 属性以调用 copyCode 函数
            btn.removeAttribute("onclick"); // 清除原事件绑定
            btn.addEventListener("click", copyCode);
            // btn.removeAttribute("data-report-click");
        }
    }
})();
```

### 效果展示

注：为方便效果展示，这里采用 `console.log()` 在控制台打印输出。

![image-20231220032724440](README.assets/image-20231220032724440.png)

![image-20231220032805681](README.assets/image-20231220032805681.png)

![image-20231220033007625](README.assets/image-20231220033007625.png)

![image-20231220033058220](README.assets/image-20231220033058220.png)

![image-20231220033137662](README.assets/image-20231220033137662.png)

![image-20231220033206139](README.assets/image-20231220033206139.png)

### To do

未来计划：

- [ ] 有些博客即使登录后，也会有“关注博主后才能……”的情况发生，未来计划针对这一部分进行限制解除。
- [ ] 在调查研究时，发现 CSDN 的代码块的 DOM 元素结构与 [掘金论坛](https://juejin.cn/) 类似（并且该网站同样需要登录复制），考虑未来同样适配该网站。

### 其他事项

本项目计划于课程结课后在 [GitHub](https://github.com/InfinityUniverse0/Internet-Database-Development-2023) 开源

---

本部分中用作示例出现的CSDN博客：

- [十六进制IP转换点分十进制代码-CSDN博客](https://blog.csdn.net/MrWangHao/article/details/133995845)
- [机器学习 | 决策树 Decision Tree-CSDN博客](https://blog.csdn.net/weixin_47187147/article/details/135043029)
