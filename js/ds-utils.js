!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=22)}({2:function(e,t,n){"use strict";var r,o={},i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},l=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[l]?r[l].parts.push(c):n.push(r[l]={id:l,parts:[c]})}return n}function a(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id],l=0;if(i){for(i.refs++;l<i.parts.length;l++)i.parts[l](r.parts[l]);for(;l<r.parts.length;l++)i.parts.push(g(r.parts[l],t))}else{for(var c=[];l<r.parts.length;l++)c.push(g(r.parts[l],t));o[r.id]={id:r.id,refs:1,parts:c}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=l(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(i,l[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,m=0;function g(e,t){var n,r,o;if(t.singleton){var i=m++;n=v||(v=s(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e,t);return a(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var l=n[i],s=o[l.id];s&&(s.refs--,r.push(s))}e&&a(c(e,t),t);for(var u=0;u<r.length;u++){var d=r[u];if(0===d.refs){for(var f=0;f<d.parts.length;f++)d.parts[f]();delete o[d.id]}}}}},22:function(e,t,n){n(23),e.exports=n(25)},23:function(e,t,n){var r=n(24);"string"==typeof r&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(2)(r,o);r.locals&&(e.exports=r.locals)},24:function(e,t,n){},25:function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".disable-transition");e&&e.classList.toggle("disable-transition")}));var n=document.querySelectorAll(".stock-full");n&&n.forEach((function(e){var t=e.querySelector(".stock-full__wrapper");e.querySelector(".stock-full__expand").addEventListener("click",(function(){return t.classList.toggle("is-expanded")}))}));var r=document.querySelectorAll(".stock-dropdown-filter");r&&r.forEach((function(e){e.querySelector(".stock-dropdown-filter__head").addEventListener("click",(function(){return e.classList.toggle("is-expanded")}))}));var o=document.querySelectorAll(".item-params-list__item");o&&o.forEach((function(e){e.addEventListener("click",(function(){return e.classList.toggle("is-selected")}))}));var i=document.querySelectorAll(".item-params-list");o&&i.forEach((function(e){var t=e.nextElementSibling;t&&t.addEventListener("click",(function(){return e.classList.toggle("is-expanded")}))}));var l=document.querySelectorAll(".collapse-section");l&&l.forEach((function(e){e.querySelector(".collapse-section__heading").addEventListener("click",(function(){return e.classList.toggle("is-expanded")}))}));var c,a=document.querySelectorAll(".modal__select");if(a)for(var s=0;s<a.length;s++)a[s].addEventListener("click",(function(){this.classList.toggle("is-toggle")}));(c=document.querySelectorAll(".modal__select"))&&c.forEach((function(e){var t=e.querySelector(".modal__selected-position");e.querySelectorAll("li.item").forEach((function(e){e.addEventListener("click",(function(){t.innerHTML=e.innerHTML}))}))}));var u=document.querySelector(".modal__btn-about-goods"),d=document.querySelector(".modal__goods-info");u&&u.addEventListener("click",(function(){d.classList.toggle("is-toggle")}));var f=document.querySelector(".btn-sum__minus"),p=document.querySelector(".btn-sum__plus"),v=document.querySelector(".btn-sum__sum-num");f&&f.addEventListener("click",(function(){v.value--})),p&&p.addEventListener("click",(function(){v.value++}));var m=document.querySelector(".icon-heart-bold");if(m){m.addEventListener("click",(function(){m.classList.toggle("icon-heart-filled")}))}}});
//# sourceMappingURL=ds-utils.js.map?ea42b075d6db226be189