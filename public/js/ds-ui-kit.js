!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(r,s,function(t){return e[t]}.bind(null,s));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}({"./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/ds-ui-kit.scss":function(e,t,n){},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":function(e,t,n){"use strict";var r,s={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}();function a(e,t){for(var n=[],r={},s=0;s<e.length;s++){var o=e[s],i=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}function l(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=s[r.id],i=0;if(o){for(o.refs++;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(h(r.parts[i],t))}else{for(var a=[];i<r.parts.length;i++)a.push(h(r.parts[i],t));s[r.id]={id:r.id,refs:1,parts:a}}}}function u(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,c=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,s);else{var o=document.createTextNode(s),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,s=n.media,o=n.sourceMap;if(s&&e.setAttribute("media",s),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,v=0;function h(e,t){var n,r,s;if(t.singleton){var o=v++;n=m||(m=u(t)),r=f.bind(null,n,o,!1),s=f.bind(null,n,o,!0)}else n=u(t),r=p.bind(null,n,t),s=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=a(e,t);return l(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o],u=s[i.id];u&&(u.refs--,r.push(u))}e&&l(a(e,t),t);for(var d=0;d<r.length;d++){var c=r[d];if(0===c.refs){for(var f=0;f<c.parts.length;f++)c.parts[f]();delete s[c.id]}}}}},"./src/styles/ds-ui-kit.scss":function(e,t,n){var r=n("./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/ds-ui-kit.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var s={insert:"head",singleton:!1};n("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(r,s);r.locals&&(e.exports=r.locals)},3:function(e,t,n){e.exports=n("./src/styles/ds-ui-kit.scss")}});
//# sourceMappingURL=ds-ui-kit.js.map?b396c3866af54fad8624