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

    var codeBlockList = document.getElementsByName("code");

    for (var i = 0; i < codeBlockList.length; i++) {
        var codeBlock = codeBlockList[i];

        // 获取第一个匹配的子元素
        // var code = codeBlock.querySelector("code"); // 标签名匹配
        var btn = codeBlock.querySelector(".hljs-button"); // 类名匹配

        if (btn) {
            btn.setAttribute("data-title", "一键复制");

            // 设置 onclick 属性以调用 copyCode 函数
            btn.removeAttribute("onclick"); // 清除原事件绑定
            btn.addEventListener("click", copyCode);
            // btn.removeAttribute("data-report-click");
        }
    }
})();