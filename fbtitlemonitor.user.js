// ==UserScript==
// @name        Facebook Title Monitor
// @namespace   ca.chrisdouglas.fbtitlemon
// @version     2019.01.28
// @description Keeps the browser's title bar to 'Facebook', removing notification clutter.
// @author      chrisgdouglas
// @license     MIT
// @include     http*://*facebook.com*
// @grant       none
// @updateURL   https://raw.githubusercontent.com/chrisgdouglas/fbtitlemonitor/master/fbtitlemonitor.js
// @downloadURL https://raw.githubusercontent.com/chrisgdouglas/fbtitlemonitor/master/fbtitlemonitor.js
// ==/UserScript==
(() => {
    "use strict";
    let targetNode = document.querySelector('title');
    let config = { childList: true, subtree: true };
    let titleMon = function (mutationsList, observer) {
        let fbTitle = "Facebook";
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' && targetNode.innerHTML !== fbTitle) {
                targetNode.innerHTML = fbTitle;
            }
        }
    };
    let observer = new MutationObserver(titleMon);
    observer.observe(targetNode, config);
}) ();