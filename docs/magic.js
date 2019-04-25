(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
function b(a,b){return j(a)||c(a,b)||f()}function c(a,b){var c=[];var d=!0;var e=!1;var f=undefined;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{!d&&h["return"]!=null&&h["return"]()}finally{if(e)throw f}}return c}function e(a){return j(a)||g(a)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function g(a){if(Symbol.iterator in Object(a)||Object.prototype.toString.call(a)==="[object Arguments]")return Array.from(a)}function j(a){if(Array.isArray(a))return a}function k(a,b){if(a==null)return{};var c=l(a,b);var d,e;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(e=0;e<f.length;e++)d=f[e],!(b.indexOf(d)>=0)&&Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d])}return c}function l(a,b){if(a==null)return{};var c={};var d=Object.keys(a);var e,f;for(f=0;f<d.length;f++)e=d[f],!(b.indexOf(e)>=0)&&(c[e]=a[e]);return c}function m(a){return m=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function m(a){return typeof a}:function m(a){return a&&typeof Symbol==="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=require("hyperapp"),o=n.app,q=n.h;var h=function(a){return function(){var b=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var d=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];var e=function is(a){for(var b=arguments.length,c=Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return!d&&(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),q(a,b,d)}};var r=h("div");var s=h("button");var t=h("code");var u=h("i");var i=h("pre");var v=h("span");var w=h("a");var a=h("text");var x=function Link(a,b){var c=a.to,d=k(a,["to"]);return function(a,f){var g=d.href,h=d.text,i=d.nofollow,j=d.noreferrer,l=d.onclick,m=k(d,["href","text","nofollow","noreferrer","onclick"]);return c=c||g||"",m.href=c,c&&c.startsWith("/")&&!c.startsWith("//")?m.onclick=function(a){l&&l({e:a,to:c}),f.go({e:a,to:c})}:(m.target="_blank",m.rel="noopener",i&&(m.rel+=" nofollow"),j&&(m.rel+=" noreferrer")),w(m,[h,b])}};var y=h("h1");var z=h("h2");var A=h("p");var p={View:function View(a){var b=!!(arguments.length>1&&arguments[1]!==undefined)&&arguments[1];return function(c,d){var g="dark";return!b&&c.pre.theme==="dark"&&(g="light"),r({"class":"Pre ".concat(b||c.pre.theme)},[r({"class":"menu"},[!b&&s({onclick:function onclick(){return d.pre.changeTheme(g)}},g),s({onclick:function onclick(){return d.pre.clip(a)}},"copy")]),i(function format(a){var f=function wrapWords(a){if(typeof a!=="string")return a;var e=a.split(/\b/);return a=e.map(function(a,f){if(a!==""){var g="";return a==="state"?g="state":a==="actions"?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":j(a)?g="html":"let this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final export throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require".includes(a)?g="keyword":"Array Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array".includes(a)?g="builtin":"true false".includes(a)?g="boolean":e[f-1]==="."?g="property":e[f+1]==="."&&(g="object"),g&&(a=v({"class":g},a)),a}}),a};var h={canvas:1,video:1};var i=function wordsByLine(a){if(a.trim().startsWith("//"))return t({"class":"line comment"},a);if(a.includes("//")){var m=a.split("//");m[0]=i(m[0]);for(var n=1;n<m.length;n++)m[n]=t({"class":"comment"},"//".concat(m[n]));return t({"class":"line"},m)}var b=a.replace(/"/g,"'");var c=b.split("'"),d=e(c),g=d[0],h=d[1],j=d.slice(2);var k=j;k.length===1?k=i(k[0]):k.length>1&&(k=i(k.join("'")));var l=[];return l=typeof h==="undefined"?f(a):[f(g),v({"class":"string"},"'".concat(h,"'")),k],l};var j=function isHtmlTag(a){if(h.hasOwnProperty(a))return!0;try{var b=typeof global==="undefined"?document.createElement(a).toString()==="[object HTMLDivElement]":Object.keys(o.dependencies).includes(a);if(b)return h[a]=!0,!0}catch(a){}};a=a.replace(/^\n|\n$/g,"");var k=a.split("\n").map(function(a){return t({"class":"line"},i(a))});return k}(a))])}}};var B=h("img");var C=function Img(a){return function(){if(typeof a==="string"&&(a={src:a}),!!a.src)return!a.alt&&(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),B(a)}};var D=h("li");var E=h("ul");var F=function GitBadges(a){var c=a.project,d=c!==void 0&&c,e=a.branch,f=e===void 0?"master":e;var g=Object.entries({npm:function npm(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}},travis:function travis(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}},appveyor:function appveyor(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://ci.appveyor.com/project/".concat(a,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(a,"/").concat(f,".svg")}},coveralls:function coveralls(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://coveralls.io/github/".concat(a),src:"https://coveralls.io/repos/github/".concat(a,"/badge.svg")}},greenkeeper:function greenkeeper(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}},snyk:function snyk(){var a=arguments.length>0&&arguments[0]!==undefined?arguments[0]:d;return a&&{to:"https://snyk.io/test/github/".concat(a),src:"https://snyk.io/test/github/".concat(a,"/badge.svg")}}}).map(function(c){var d=b(c,2),e=d[0],f=d[1];return f(a[e])}).filter(function(b){return b.to&&b.src});return g.length?E({"class":"GitBadges"},g.map(function(a){var b=a.to,c=a.src;return D([x({to:b},C({src:c}))])})):void 0};var G=function LanguageSwitch(){return function(a,b){var c=a.languages,d=c===void 0?[]:c,e=a.url,f=a.hash,g=a.root;if(d.length){e=e.replace(g,"/").replace(/\/\/+/g,"/");var h=e.split("/").filter(function(b){return b});var i=h[0];var j=d.find(function(a){return a.code===i})||d[0]||{code:a.language};var k=j.code;return k&&k!==a.language&&b.changeLanguage(k),E({"class":"LanguageSwitch"},d.map(function(a){var c=a.to,d=c===void 0?"":c,g=a.text,i=a.code;if(i!==k){e=e.replace("/".concat(k,"/"),"/");var j=f?"#".concat(f):"";return d=(d+e+j).replace(/\/\/+/g,"/"),D([x({to:d,onclick:function onclick(){return b.changeLanguage(i)}},g)])}}))}}};var H={View:function View(){return I({"class":"main"},[r({"class":"wrapper"},["made with a few bits of ",x({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])}};var I=h("footer");var J={View:function View(a){var b=a.name,c=b===void 0?"menu":b,d=a["class"],e=d===void 0?"":d,f=a.between,g=f!==void 0&&f,h=a.items,i=h===void 0?[]:h;return function(a){if(i.length||a[c]&&a[c].length)return!i.length&&(i=a[c]),K({"class":"Menu ".concat(e)},[E(i.map(function(b,d){var e=b.items,f=k(b,["items"]);var h={};var i=a.hash?"#".concat(a.hash):"";var j=a.url+i;f.to===j&&(h["class"]="active");var l;return e&&j.startsWith(f.to)&&(l=E(e.map(function(a){var b={};return a.to===j&&(b["class"]="active"),D(b,x(a))}))),[D(h,[x(f),l]),g&&d<a[c].length-1?D(g):""]}))])}}};var K=h("nav");var L=h("header");var M=function PageHead(a){return(a.logo||a.menu||a.tagline)&&L({"class":"main"},[(a.logo||a.logotext)&&x({to:"/languageswitch/","class":"logo-wrapper"},[a.logo&&C({"class":"logo",src:a.logo}),a.logotext&&v({"class":"logo-text"},a.logotext)]),J.View])};var N={"/languageswitch/de/":function languageswitchDe(){return r([G,y("@magic-modules/languageswitch"),A(["dies ist das ",x({to:"https://github.com/magic-modules"},"@magic-modules")," LanguageSwitch modul. Es rendert ein Menu mit Sprachauswahl."]),F({project:"magic-modules/languageswitch",appveyor:"jaeh/languageswitch"}),z({id:"installation"},"installation:"),A(["installation funktioniert durch npm.","in naher zukunft leben alle magic module auf github und nicht npm."]),A("das fehlende @ vor magic-modules ist, wie wir npm module von github installieren k\xF6nnen."),p.View("\nnpm install magic-modules/languageswitch\n"),z({id:"require"},"importieren"),A("zuerst laden wir das modul via /assets/index.js"),p.View("\n// assets/index.js\nmodule.exports = {\n  //...other exports\n  LanguageSwitch: require('@magic-modules/languageswitch'),\n}"),z({id:"usage"},"usage:"),A("in einer page oder einem komponent"),p.View("module.exports = {\n  View: () => div({ class: 'page' }, LanguageSwitch)\n}"),z({id:"source"},"source"),A(["der source dieser page ist im ",x({to:"https://github.com/magic-modules/languageswitch/tree/master/example"},"example directory")," und wird mit ",x({to:"https://github.com/magic/core"},"@magic/core")," gebaut und zu github publiziert."])])},"/languageswitch/":function languageswitch(){return r([G,y("@magic-modules/languageswitch"),A(["this is the ",x({to:"https://github.com/magic-modules"},"@magic-modules")," LanguageSwitch component. It provides a language switch menu."]),F({project:"magic-modules/languageswitch",appveyor:"jaeh/languageswitch"}),z({id:"installation"},"installation:"),A("installation is done using npm. for now, all magic modules are living on github and not on npm."),A("note the missing @ before magic-modules."),A("this is how we install npm modules from github."),p.View("\nnpm install magic-modules/languageswitch\n"),z({id:"require"},"require:"),A("first add the component to the assets"),p.View("\n// assets/index.js\nmodule.exports = {\n  //...other exports\n  LanguageSwitch: require('@magic-modules/languageswitch'),\n}"),z({id:"usage"},"usage:"),A("in a page or component"),p.View("module.exports = {\n  View: () => LanguageSwitch,\n}"),z({id:"pages"},"language pages"),A("create your languages in the pages directory, for example:"),p.View("\n/pages/\n  index.js // english page\n  /de/\n    index.js // german page\n"),z({id:"state"},"required state"),A("LanguageSwitch needs to know about the languages in your app."),p.View("\n// /assets/app.js\nmodule.exports = {\n  state: {\n    // ... other app state\n    languages: [\n      // the first language is the default fallback\n      { code: 'en', to: '/languageswitch/', text: 'english' },\n      { code: 'de', to: '/languageswitch/de/', text: 'deutsch' },\n    ],\n  },\n}\n"),A("thats it, your magic app now knows about your languages"),z({id:"source"},"source"),A(["the source for this page is in the ",x({to:"https://github.com/magic-modules/languageswitch/tree/master/example"},"example directory")," and gets built and published to github using ",x({to:"https://github.com/magic/core"},"@magic/core")])])},"/404/":function _(){return r("404 - not found")}};var O={"url":"/languageswitch/","root":"/languageswitch/",logo:"/languageswitch/img/logo.png","logotext":"pre","languages":[{"code":"en",to:"/languageswitch/","text":"english"},{"code":"de",to:"/languageswitch/de/","text":"deutsch"}],"menu":[{to:"/languageswitch/#installation","text":"installation"},{to:"/languageswitch/#require","text":"require"},{to:"/languageswitch/#usage","text":"usage"},{to:"/languageswitch/#fixed-color","text":"fixed color"},{to:"/languageswitch/#source","text":"source"}],"pages":{"/languageswitch/de/":{"lang":"de"}},"pre":{"theme":"light"},"language":""};O.url=window.location.pathname,O.root=/languageswitch/;var P={"go":function go(a){return function(c){if(typeof window==="undefined"||!window.history)return!0;var d=a.to;var f=a.e?a.e:a;f.preventDefault();var e=c.url;var g=e.split("#"),h=b(g,2),i=h[0],j=h[1],k=j===void 0?"":j;if(d){e=d.replace(window.location.origin,"");var l=e.split("#"),m=b(l,2),n=m[0],o=m[1],p=o===void 0?"":o;i=n,k=p;var q=c.hash?"#".concat(c.hash):"";var r=c.url+q;e!==r&&(window.history&&window.history.pushState({uri:i},"",e),!k&&window.scrollTo(0,0))}else i=f.state?f.state.uri:"/";return k&&window.location&&(window.location.hash=k),{url:i,hash:k,prev:c.url}}},"pre":{"changeTheme":function changeTheme(a){return{theme:a}},"clip":function clip(a){if(typeof document!=="undefined"&&typeof document.execCommand==="function"){var b=document.createElement("textarea");b.id="copy",b.innerHTML=a,document.body.appendChild(b);var c=document.getElementById("copy");c.select(),document.execCommand("copy"),document.body.removeChild(c)}}},"changeLanguage":function changeLanguage(a){return{language:a}}};var Q=function view(a,b){var c=N[a.url]?a.url:"/404/";var d=N[c];if(a.pages){var e=a.pages[c];for(var f in e)a[f]=e[f]}if(b.pages){var g=b.pages[c];for(var h in g)b[h]=g[h]}return r({"class":"wrapper",oncreate:function oncreate(){typeof window!=="undefined"&&b.go&&window.addEventListener("popstate",b.go)}},[M,d?r({"class":"page"},d(a,b)):r({"class":"page"},"404 - not found"),H.View])};var R=document;var d=R.getElementById("magic");!d&&(d=R.createElement("div"),d.id="magic",R.body.appendChild(d)),o(O,P,Q,d);
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"hyperapp":2}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.hyperapp={})}(this,function(e){"use strict";e.h=function(e,n){for(var t=[],r=[],o=arguments.length;2<o--;)t.push(arguments[o]);for(;t.length;){var l=t.pop();if(l&&l.pop)for(o=l.length;o--;)t.push(l[o]);else null!=l&&!0!==l&&!1!==l&&r.push(l)}return"function"==typeof e?e(n||{},r):{nodeName:e,attributes:n||{},children:r,key:n&&n.key}},e.app=function(e,n,t,r){var o,l=[].map,u=r&&r.children[0]||null,i=u&&function n(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:l.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:n(e)})}}(u),f=[],m=!0,a=v(e),c=function e(r,o,l){for(var n in l)"function"==typeof l[n]?function(e,t){l[e]=function(e){var n=t(e);return"function"==typeof n&&(n=n(h(r,a),l)),n&&n!==(o=h(r,a))&&!n.then&&d(a=p(r,v(o,n),a)),n}}(n,l[n]):e(r.concat(n),o[n]=v(o[n]),l[n]=v(l[n]));return l}([],a,v(n));return d(),c;function g(e){return"function"==typeof e?g(e(a,c)):null!=e?e:""}function s(){o=!o;var e=g(t);for(r&&!o&&(u=function e(n,t,r,o,l){if(o===r);else if(null==r||r.nodeName!==o.nodeName){var u=k(o,l);n.insertBefore(u,t),null!=r&&T(n,t,r),t=u}else if(null==r.nodeName)t.nodeValue=o;else{x(t,r.attributes,o.attributes,l=l||"svg"===o.nodeName);for(var i={},f={},a=[],c=r.children,s=o.children,d=0;d<c.length;d++){a[d]=t.childNodes[d];var v=N(c[d]);null!=v&&(i[v]=[a[d],c[d]])}for(var d=0,p=0;p<s.length;){var v=N(c[d]),h=N(s[p]=g(s[p]));if(f[v])d++;else if(null==h||h!==N(c[d+1]))if(null==h||m)null==v&&(e(t,a[d],c[d],s[p],l),p++),d++;else{var y=i[h]||[];v===h?(e(t,y[0],y[1],s[p],l),d++):y[0]?e(t,t.insertBefore(y[0],a[d]),y[1],s[p],l):e(t,a[d],null,s[p],l),f[h]=s[p],p++}else null==v&&T(t,a[d],c[d]),d++}for(;d<c.length;)null==N(c[d])&&T(t,a[d],c[d]),d++;for(var d in i)f[d]||T(t,i[d][0],i[d][1])}return t}(r,u,i,i=e)),m=!1;f.length;)f.pop()()}function d(){o||(o=!0,setTimeout(s))}function v(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t}function p(e,n,t){var r={};return e.length?(r[e[0]]=1<e.length?p(e.slice(1),n,t[e[0]]):n,v(t,r)):n}function h(e,n){for(var t=0;t<e.length;)n=n[e[t++]];return n}function N(e){return e?e.key:null}function y(e){return e.currentTarget.events[e.type](e)}function b(e,n,t,r,o){if("key"===n);else if("style"===n)if("string"==typeof t)e.style.cssText=t;else for(var l in"string"==typeof r&&(r=e.style.cssText=""),v(r,t)){var u=null==t||null==t[l]?"":t[l];"-"===l[0]?e.style.setProperty(l,u):e.style[l]=u}else"o"===n[0]&&"n"===n[1]?(n=n.slice(2),e.events?r||(r=e.events[n]):e.events={},(e.events[n]=t)?r||e.addEventListener(n,y):e.removeEventListener(n,y)):n in e&&"list"!==n&&"type"!==n&&"draggable"!==n&&"spellcheck"!==n&&"translate"!==n&&!o?e[n]=null==t?"":t:null!=t&&!1!==t&&e.setAttribute(n,t),null!=t&&!1!==t||e.removeAttribute(n)}function k(e,n){var t="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName),r=e.attributes;if(r){r.oncreate&&f.push(function(){r.oncreate(t)});for(var o=0;o<e.children.length;o++)t.appendChild(k(e.children[o]=g(e.children[o]),n));for(var l in r)b(t,l,r[l],null,n)}return t}function x(e,n,t,r){for(var o in v(n,t))t[o]!==("value"===o||"checked"===o?e[o]:n[o])&&b(e,o,t[o],n[o],r);var l=m?t.oncreate:t.onupdate;l&&f.push(function(){l(e,n)})}function T(e,n,t){function r(){e.removeChild(function e(n,t){var r=t.attributes;if(r){for(var o=0;o<t.children.length;o++)e(n.childNodes[o],t.children[o]);r.ondestroy&&r.ondestroy(n)}return n}(n,t))}var o=t.attributes&&t.attributes.onremove;o?o(n,r):r()}}});

},{}]},{},[1]);
