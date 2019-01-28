// ==UserScript==
// @name        Facebook Title Monitor
// @namespace   fbtitlemon
// @version     2019.01.28
// @description Keeps the browser's title bar to 'Facebook', removing notification clutter.
// @author      chrisgdouglas
// @license     MIT
// @include     http*://*facebook.com*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/chrisgdouglas/fbtitlemonitor/master/fbtitlemonitor.js
// @downloadURL https://raw.githubusercontent.com/chrisgdouglas/fbtitlemonitor/master/fbtitlemonitor.js
// ==/UserScript==
var targetNode = document.querySelector('title');
var config = { childList: true, subtree: true };
var titleMon = function (mutationsList, observer) {
    var fbTitle = "Facebook";
    for (var mutation of mutationsList) {
        if (mutation.type == 'childList' && targetNode.innerHTML !== "Facebook") {
            targetNode.innerHTML = fbTitle;
        }
    }
};
var observer = new MutationObserver(titleMon);
observer.observe(targetNode, config);