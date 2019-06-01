"use strict";function b(a){return l(a)||c(a)||j()}function c(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function d(a){for(var b=1;b<arguments.length;b++){var c=null==arguments[b]?{}:arguments[b],d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){e(a,b,c[b])})}return a}function e(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function f(a,b){if(null==a)return{};var c,d,e=g(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function g(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function i(a,b){return l(a)||k(a,b)||j()}function j(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function k(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}function l(a){if(Array.isArray(a))return a}function m(a){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},m(a)}var n=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,i=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=i(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(!!(b&&!0!==b)&&("function"==typeof b[0]?[b]:k(b)))},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},n=function(c,a){for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},o=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||n(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},p=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2).toLowerCase()]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=i(d)))?a.setAttribute(b,d):a.removeAttribute(b)},q=function(a,c,d){var e=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name):document.createElement(a.name),f=a.props;for(var g in f)p(e,g,null,f[g],c,d);for(var h=0,j=a.children.length;h<j;h++)e.appendChild(q(a.children[h]=u(a.children[h]),c,d));return a.node=e},r=function(a){return null==a?null:a.key},s=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(q(e=u(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,o=e.props,t=d.children,v=e.children,w=0,x=0,y=t.length-1,z=v.length-1;for(var A in g=g||"svg"===e.name,j(n,o))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==o[A]&&p(c,A,n[A],o[A],f,g);for(;x<=z&&w<=y&&null!=(l=r(t[w]))&&l===r(v[x]);)s(c,t[w].node,t[w],v[x]=u(v[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=r(t[y]))&&l===r(v[z]);)s(c,t[y].node,t[y],v[z]=u(v[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(q(v[x]=u(v[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=r(k=t[w]),m=r(v[x]=u(v[x],k)),C[l]||null!=m&&m===r(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(s(c,k&&k.node,k,v[x],f,g),x++),w++):(l===m?(s(c,k.node,k,v[x],f,g),C[m]=!0,w++):null==(h=B[m])?s(c,k&&k.node,null,v[x],f,g):(s(c,c.insertBefore(h.node,k&&k.node),h,v[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==r(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},t=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(b,c){return b.type===a?((!c||t(c.lazy,b.lazy))&&((c=b.lazy.view(b.lazy)).lazy=b.lazy),c):b},v=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},w=function(a,e){return v(a,c,d,e,null,b)},x=function(a){return a.nodeType===b?w(a.nodeValue,a):v(a.nodeName.toLowerCase(),c,e.call(a.childNodes,x),a,null,1)},y=function(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push("object"===m(d)?d:w(d));return b=b||c,"function"==typeof a?a(b,g):v(a,b,g,null,b.key)};return{h:y,app:function app(a,b){var c={},d=!1,e=a.view,h=a.node,i=h&&x(h),j=a.subscriptions,l=[],m=function(a){p(this.actions[a.type],a)},n=function(a){return c===a||d||g(q,d=!0),c=a},p=(b||function(a){return a})(function(a,b,d){return"function"==typeof a?p(a(c,b),d||b):f(a)?"function"==typeof a[0]?p(a[0],"function"==typeof(a=a[1])?a(b):a,b):(k(a.slice(1)).map(function(a){a&&a[0](p,a[1],b)},n(a[0])),c):n(a)}),q=function(){d=!1,j&&(l=o(l,k(j(c)),p)),e&&(h=s(h.parentNode,h,i,"string"==typeof(i=e(c))?w(i):i,m))};p(a.init)}}}(),o=n.h,h=n.app,q=function(a){return function(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},d=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1],e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===m(a)})};return d||(e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})),o(a,b,d)}},r=q("a"),a=q("button"),s=q("code"),t=q("div"),u=q("footer"),v=q("h1"),w=q("h2"),x=q("header"),y=q("img"),z=q("li"),A=q("nav"),B=q("p"),p=q("pre"),C=q("span"),D=q("ul"),E={url:"/language-switch/",root:"/language-switch/",logotext:"LanguageSwitch",title:"@magic-modules/language-switch",description:["@magic-modules LanguageSwitch."," adds an intelligent language switching mechanism to your @magic app."],languages:[{code:"en",to:"/",text:"english"},{code:"de",to:"/de/",text:"deutsch"}],menu:[{to:"/#installation",text:"installation"},{to:"/#usage",text:"usage"},{to:"/#pages",text:"language pages"},{to:"/#state",text:"required state"},{to:"/#source",text:"source"}],pages:{"/language-switch/de/":{lang:"de"}},pageClass:"",language:"",theme:"dark"},F={mapClickToGo:function mapClickToGo(a){return a.preventDefault(),a},listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},G=function(){return u({class:"Footer"},[t({class:"Container"},["made with a few bits of ",M({to:"https://github.com/magic/core",target:"_blank",rel:"noopener"},"magic")])])},H=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.project,d=void 0!==c&&c,e=b.branch,f=void 0===e?"master":e,g=b.host,h=void 0===g?"github":g,j=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://www.npmjs.com/package/@".concat(a),src:"https://img.shields.io/npm/v/@".concat(a,".svg")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://travis-ci.com/".concat(a,".svg?branch=").concat(f)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;if(a){var b=a.split("/"),c=i(b,2),e=c[0],g=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(g,"/branch/").concat(f),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(g,"/").concat(f,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return{to:"https://coveralls.io/".concat(h,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(h,"/").concat(a,"/").concat(f,".svg")}}],["greenkeeper",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://greenkeeper.io",src:"https://badges.greenkeeper.io/".concat(a,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:d;return a&&{to:"https://snyk.io/test/".concat(h,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=i(b,2),d=c[0],e=c[1];return e(a[d])}).filter(function(b){return b.to&&b.src});return j.length?D({class:"GitBadges"},j.map(function(a){var b=a.to,c=a.src;return z([M({to:b},J({src:c}))])})):void 0},I=function(a){var b=a.logo,c=a.menu,e=a.root,g=a.tagline,h=a.logotext,i=f(a,["logo","menu","root","tagline","logotext"]);return b||c||g?x({class:"Header"},[(b||h)&&M({to:e,class:"LogoWrapper"},[b&&J({class:"Logo",src:b}),h&&C({class:"LogoText"},h)]),c&&N(d({},i,{root:e,items:c}))]):void 0},J=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="")),y(a)},K=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.languages,c=void 0===b?[]:b,d=a.url,e=a.hash,f=a.root;if(c.length&&f&&d){d=d.replace(f,"/").replace(/\/\/+/g,"/");var g=d.split("/").filter(function(b){return b}),h=g[0],i=c.find(function(a){return a.code===h})||c[0]||{code:a.language},j=i.code;return j&&j!==a.language&&S.changeLanguage(a,j),D({class:"LanguageSwitch"},c.map(function(a){var b=a.to,c=void 0===b?"":b,g=a.text,i=a.code;if(i!==j){d=d.replace("/".concat(j,"/"),"/");var k=e?"#".concat(e):"";return c=(f+c+d+k).replace(/\/\/+/g,"/"),z([M({to:c,onclick:[S.changeLanguage,i]},g)])}}))}},L=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return a({class:"LightSwitch",onclick:S.changeTheme})},M=function(a,b){var c=a.to,d=f(a,["to"]),e=d.href,g=d.text,h=d.nofollow,i=d.noreferrer,j=d.onclick,k=f(d,["href","text","nofollow","noreferrer","onclick"]);c=c||e||"",k.href=c;var l=c.startsWith("/");return l?k.onclick=[S.go,F.mapClickToGo]:(k.target="_blank",k.rel="noopener",h&&(k.rel+=" nofollow"),i&&(k.rel+=" noreferrer")),r(k,[g,b])},N=function(a){var b=a.items,c=a.hash,e=a.url,f=void 0===e?"":e,g=a.root,h=a["class"],i=void 0===h?"Menu":h,j=a.collapse;if(b.length)return c&&(f+="#".concat(c)),A({class:i},D(b.map(function(a){return O(d({},a,{root:g,url:f,collapse:void 0===j||j}))})))},O=function(a){var b=a.url,c=a.text,e=a.items,g=void 0===e?[]:e,h=a.root,i=a.parentTo,j=void 0===i?void 0:i,k=a.collapse,l=f(a,["url","text","items","root","parentTo","collapse"]);if(l.to||c){var m={class:"MenuItem"},n=l.to;n.startsWith("/#")&&(n=n.substr(1));var o=l.to[0],p="/"===o||"-"===o||"#"===o;if(j&&p)if("-"===o)n=j+n;else if("#"===o)n=j+n;else{var t=n.split("/")[1];if(t){var u=j.endsWith("/".concat(t,"/"));!u&&p&&(n=j+n)}}var q=n.startsWith(h);h&&p&&!q&&(n=h+n),l.to=n.replace(/\/\//g,"/");var r=b&&b.includes(l.to);b.endsWith(l.to)&&(m["class"]+=" active");var s=[];return(g.length&&r||!k)&&(s=D(g.map(function(a){return O(d({parentTo:l.to,root:h,url:b,collapse:k},a))}))),z(m,[l.to?M(l,c):C(l,c),s])}},P=function(a){var b=a.page,c=a.state;b=b?b(c):"404 - not found";var d={id:"Magic"};c.pageClass&&(d["class"]=c.pageClass),c.theme&&(d["class"]?!d["class"].includes(c.theme)&&(d["class"]+=" ".concat(c.theme)):d["class"]=c.theme);return t(d,t({class:"Wrapper"},[I(c),t({class:"Page"},b),G(c)]))},Q=function(b){"string"==typeof b&&(b={content:b});var c=b,d=c.content;return t({class:"Pre"},[t({class:"menu"},[a({onclick:[S.pre.clip,function(a){return{e:a,content:d}}]},"copy")]),p(R.pre.format(d))])},R={pre:function(){var a="\nlet this long package float\ngoto private class if short\nwhile protected with debugger case\ncontinue volatile interface\n\ninstanceof super synchronized throw\nextends final throws\ntry import double enum\n\nboolean abstract function\nimplements typeof transient break\ndefault do static void\n\nint new async native switch\nelse delete null public var\nawait byte finally catch\nin return for get const char\nmodule exports require\n".trim().split(/\b/g).map(function(a){return a.trim()}),c="\nArray Object String Number RegExp Null Symbol\nSet WeakSet Map WeakMap\nsetInterval setTimeout\nPromise\nJSON\nInt8Array Uint8Array Uint8ClampedArray\nInt16Array Uint16Array\nInt32Array Uint32Array\nFloat32Array Float64Array\n".trim().split(/\b/g).map(function(a){return a.trim()}),d=["true","false"],e=function(b){if("string"!=typeof b)return b;var e=b.split(/\b/);return b=e.map(function(b,f){if(""!==b){var g="";return"state"===b?g="state":"actions"===b?g="actions":e[f+1]&&e[f+1].includes(":")?g="colon":a.includes(b)?g="keyword":c.includes(b)?g="builtin":d.includes(b)?g="boolean":"."===e[f-1]?g="property":"."===e[f+1]&&(g="object"),g&&(b=C({class:g},b)),b}}),b},f=/([a-zA-Z0-9:+._-]+@[a-zA-Z0-9._-]+)/g,g=function(a){return a.split(f).map(function(a){if(f.test(a)){var b=a.startsWith("mailto:")?a:"mailto:".concat(a),c=a.replace("mailto:","");return M({class:"email",to:b},c)}return e(a)})},h=function(a,b){return[l(a.substring(0,b)),l(a.substring(b))]},i=function(a){return a.split(/(?= )/).map(function(a){return a.includes("://")?M({to:a},a):l(a)})},j=function(a){return a.includes("://")&&!a.includes("@")?i(a):g(a)},k=function(a){var c=a.replace(/"/g,"'"),d=c.split("'"),f=b(d),g=f[0],h=f[1],i=f.slice(2),k=i;1===k.length?k=l(k[0]):1<k.length&&(k=l(k.join("'")));var m=[];return m="undefined"==typeof h?e(a):[e(g),C({class:"string"},["'",j(h),"'"]),k],m},l=function(a){var b=a.indexOf("//"),c=a.trim();if(c.startsWith("//")){for(var d=a.search(/\S|$/),e="",f=0;f<d;f++)e+=" ";return c.startsWith("// ")||(a="".concat(e,"// ").concat(c.substr(2))),C({class:"comment"},[e,"// ",l(c.substring(3))])}return-1<b&&":"!==a[b-1]?h(a,b):2<a.indexOf("://")?i(a):a.indexOf("@")&&a.includes(".")&&!a.trim().includes(" ")?g(a):k(a)},m=function(a){return s({class:"line"},l(a))};return{format:function format(a){return a.trim().split("\n").map(m)}}}()},S={page:{addClass:function addClass(a,b){return a.pageClass.includes(b)?a:d({},a,{pageClass:"".concat(a.pageClass," ").concat(b)})},removeClass:function removeClass(a,b){return a.pageClass.includes(b)?(b=a.pageClass.replace(b,"").replace(/\s\s+/g," "),d({},a,{pageClass:b})):a},toggleClass:function toggleClass(a,b){return a.pageClass.includes(b)?S.page.addClass(a,b):S.page.removeClass(a,b)},replaceClass:function replaceClass(a,b){var c=i(b,2),e=c[0],f=c[1];return a.pageClass.includes(e)&&(a=S.page.removeClass(a,e)),a.pageClass.includes(f)||(a=S.page.addClass(a,f)),d({},a)}},pop:function pop(a,b){var c=window.location,e=c.pathname,f=c.hash;return f=f.substring(1),b.state&&(e=b.state.url,f=b.state.hash),f?window.location.hash=f:window.scrollTo(0,0),d({},a,{url:e,hash:f})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),e=c.split("#"),f=i(e,2),g=f[0],h=f[1],j=void 0===h?"":h;if(g===a.url&&j===a.hash)return a;if(window.history.pushState({url:g,hash:j},"",c),j){var k=document.getElementById(j);k&&window.scrollTo(0,k.scrollTop),window.location.hash=j}else window.scrollTo(0,0);return d({},a,{url:g,hash:j,prev:a.url})},changeLanguage:function changeLanguage(a,b){return d({},a,{language:b})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}},changeTheme:function changeTheme(a){var b="dark"===a.theme?"light":"dark";return d({},S.page.replaceClass(a,[a.theme,b]),{theme:b})}},T={"/language-switch/":function languageSwitch(a){return[K(a),v("@magic-modules/language-switch"),B(["this is the ",M({to:"https://github.com/magic-modules"},"@magic-modules")," LanguageSwitch component. It provides a language switch menu."]),H("magic-modules/language-switch"),w({id:"installation"},"installation:"),Q("npm install magic-modules/language-switch"),w({id:"usage"},"usage:"),B("in a page or module View"),Q("export const View = state => div({ class: 'page' }, LanguageSwitch(state))"),w({id:"pages"},"language pages"),B("create your languages in the pages directory, for example:"),Q("\n/pages/\n  index.mjs // english page\n  /de/\n    index.mjs // german page\n"),w({id:"state"},"required state"),B("LanguageSwitch needs to know about the languages in your app."),Q("\n// /assets/app.mjs\nexport const state = {\n  // ... other app state\n  languages: [\n    // the first language is the default fallback\n    { code: 'en', to: '/', text: 'english' },\n    { code: 'de', to: '/de/', text: 'deutsch' },\n  ],\n}\n"),B("thats it, your magic app now knows about your languages"),w({id:"source"},"source"),B(["the source for this page is in the ",M({to:"https://github.com/magic-modules/language-switch/tree/master/example"},"example directory")," and gets built and published to github using ",M({to:"https://github.com/magic/core"},"@magic/core")]),L(a)]},"/language-switch/404/":function languageSwitch404(){return t("404 - not found")},"/language-switch/de/":function languageSwitchDe(a){return[K(a),v("@magic-modules/language-switch"),B(["dies ist das ",M({to:"https://github.com/magic-modules"},"@magic-modules")," LanguageSwitch modul. Es rendert ein Menu mit Sprachauswahl."]),H("magic-modules/language-switch"),w({id:"installation"},"installation:"),Q("npm install magic-modules/language-switch"),w({id:"usage"},"usage:"),B("in einer page oder einem komponent"),Q("export const View = state => div({ class: 'page' }, LanguageSwitch(state))"),w({id:"source"},"source"),B(["der source dieser page ist im ",M({to:"https://github.com/magic-modules/language-switch/tree/master/example"},"example directory")," und wird mit ",M({to:"https://github.com/magic/core"},"@magic/core")," gebaut und zu github publiziert."]),L(a)]}};h({init:function init(){return d({},E,{url:window.location.pathname})},subscriptions:function subscriptions(){return[[F.listenPopState,S.pop]]},view:function view(a){var b=T[a.url]?a.url:"/404/",c=T[b];if(a.pages){var d=a.pages[b];for(var e in d)a[e]=d[e]}return P({page:c,state:a})},node:document.getElementById("Magic")});