(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return a})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return h})),n.d(e,"e",(function(){return p})),n.d(e,"k",(function(){return d})),n.d(e,"l",(function(){return f})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return v}));n(26),n(100),n(166),n(96),n(171),n(67),n(44),n(308),n(68),n(321),n(103);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:|[a-zA-Z]{4,}:)/;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function l(t){return a.test(t)}function u(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function p(t,e){var n=t.hash,r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function d(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:h(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function f(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=a.sidebar||s.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),u=l.base,c=l.config;return c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var s=e.children||[];return 0===s.length&&e.path?Object.assign(d(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,u)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},308:function(t,e,n){"use strict";var i=n(168),r=n(7),s=n(13),a=n(20),o=n(169),l=n(170);i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),u=String(this);if(!a.global)return l(a,u);var c=a.unicode;a.lastIndex=0;for(var h,p=[],d=0;null!==(h=l(a,u));){var f=String(h[0]);p[d]=f,""===f&&(a.lastIndex=o(u,s(a.lastIndex),c)),d++}return 0===d?null:p}]}))},309:function(t,e,n){},310:function(t,e,n){},311:function(t,e,n){},312:function(t,e,n){},313:function(t,e,n){},314:function(t,e,n){},315:function(t,e,n){},316:function(t,e,n){},317:function(t,e,n){},318:function(t,e,n){},319:function(t,e,n){},321:function(t,e,n){"use strict";var i=n(168),r=n(167),s=n(7),a=n(20),o=n(99),l=n(169),u=n(13),c=n(170),h=n(70),p=n(1),d=[].push,f=Math.min,g=!p((function(){return!RegExp(4294967295,"y")}));i("split",2,(function(t,e,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var i=String(a(this)),s=void 0===n?4294967295:n>>>0;if(0===s)return[];if(void 0===t)return[i];if(!r(t))return e.call(i,t,s);for(var o,l,u,c=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,g=new RegExp(t.source,p+"g");(o=h.call(g,i))&&!((l=g.lastIndex)>f&&(c.push(i.slice(f,o.index)),o.length>1&&o.index<i.length&&d.apply(c,o.slice(1)),u=o[0].length,f=l,c.length>=s));)g.lastIndex===o.index&&g.lastIndex++;return f===i.length?!u&&g.test("")||c.push(""):c.push(i.slice(f)),c.length>s?c.slice(0,s):c}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var r=a(this),s=null==e?void 0:e[t];return void 0!==s?s.call(e,r,n):i.call(String(r),e,n)},function(t,r){var a=n(i,t,this,r,i!==e);if(a.done)return a.value;var h=s(t),p=String(this),d=o(h,RegExp),v=h.unicode,m=(h.ignoreCase?"i":"")+(h.multiline?"m":"")+(h.unicode?"u":"")+(g?"y":"g"),b=new d(g?h:"^(?:"+h.source+")",m),_=void 0===r?4294967295:r>>>0;if(0===_)return[];if(0===p.length)return null===c(b,p)?[p]:[];for(var k=0,x=0,$=[];x<p.length;){b.lastIndex=g?x:0;var C,y=c(b,g?p:p.slice(x));if(null===y||(C=f(u(b.lastIndex+(g?0:x)),p.length))===k)x=l(p,x,v);else{if($.push(p.slice(k,x)),$.length===_)return $;for(var w=1;w<=y.length-1;w++)if($.push(y[w]),$.length===_)return $;x=k=C}}return $.push(p.slice(k)),$}]}),!g)},322:function(t,e,n){"use strict";var i=n(0),r=n(172).trim;i({target:"String",proto:!0,forced:n(332)("trim")},{trim:function(){return r(this)}})},323:function(t,e,n){var i=n(5),r=n(3),s=n(69),a=n(180),o=n(8).f,l=n(45).f,u=n(167),c=n(104),h=n(176),p=n(9),d=n(1),f=n(30).set,g=n(174),v=n(2)("match"),m=r.RegExp,b=m.prototype,_=/a/g,k=/a/g,x=new m(_)!==_,$=h.UNSUPPORTED_Y;if(i&&s("RegExp",!x||$||d((function(){return k[v]=!1,m(_)!=_||m(k)==k||"/a/i"!=m(_,"i")})))){for(var C=function(t,e){var n,i=this instanceof C,r=u(t),s=void 0===e;if(!i&&r&&t.constructor===C&&s)return t;x?r&&!s&&(t=t.source):t instanceof C&&(s&&(e=c.call(t)),t=t.source),$&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var o=a(x?new m(t,e):m(t,e),i?this:b,C);return $&&n&&f(o,{sticky:n}),o},y=function(t){t in C||o(C,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},w=l(m),S=0;w.length>S;)y(w[S++]);b.constructor=C,C.prototype=b,p(r,"RegExp",C)}g("RegExp")},324:function(t,e,n){"use strict";n.r(e);n(165);var i=n(307),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(325).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(324).default},methods:{isActive:i.e}},s=(n(341),n(25)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(342),n(67);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function l(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var u=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,u),l(t,e.children,n,r,s,a+1)])})))}var u={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,u=n.$themeLocaleConfig,c=e.props,h=c.item,p=c.sidebarDepth,d=Object(i.e)(s,h.path),f="auto"===h.type?d||h.children.some((function(t){return Object(i.e)(s,h.basePath+"#"+t.slug)})):d,g="external"===h.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,h.path,h.title||h.path):o(t,h.path,h.title||h.path,f),v=[r.frontmatter.sidebarDepth,p,u.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),m=u.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[g,l(t,h.children,h.basePath,s,v)]:(f||m)&&h.headers&&!i.d.test(h.path)?[g,l(t,Object(i.c)(h.headers),h.path,s,v)]:g}};n(343);var c={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(u,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some((function(e){return"page"===e.type&&Object(i.e)(t,e.path)})))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},325:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(336),n(25)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},326:function(t,e,n){"use strict";var i=n(0),r=n(327);i({target:"String",proto:!0,forced:n(328)("link")},{link:function(t){return r(this,"a","href",t)}})},327:function(t,e,n){var i=n(20),r=/"/g;t.exports=function(t,e,n,s){var a=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(s).replace(r,"&quot;")+'"'),o+">"+a+"</"+e+">"}},328:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},329:function(t,e,n){"use strict";var i=n(309);n.n(i).a},330:function(t,e,n){var i=n(0),r=n(331);i({global:!0,forced:parseInt!=r},{parseInt:r})},331:function(t,e,n){var i=n(3),r=n(172).trim,s=n(173),a=i.parseInt,o=/^[+-]?0[Xx]/,l=8!==a(s+"08")||22!==a(s+"0x16");t.exports=l?function(t,e){var n=r(String(t));return a(n,e>>>0||(o.test(n)?16:10))}:a},332:function(t,e,n){var i=n(1),r=n(173);t.exports=function(t){return i((function(){return!!r[t]()||"​᠎"!="​᠎"[t]()||r[t].name!==t}))}},333:function(t,e,n){"use strict";var i,r=n(0),s=n(22).f,a=n(13),o=n(101),l=n(20),u=n(102),c=n(21),h="".endsWith,p=Math.min,d=u("endsWith");r({target:"String",proto:!0,forced:!!(c||d||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!d},{endsWith:function(t){var e=String(l(this));o(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),r=void 0===n?i:p(a(n),i),s=String(t);return h?h.call(e,s,r):e.slice(r-s.length,r)===s}})},334:function(t,e,n){"use strict";var i=n(310);n.n(i).a},335:function(t,e,n){"use strict";var i=n(311);n.n(i).a},336:function(t,e,n){"use strict";var i=n(312);n.n(i).a},337:function(t,e,n){"use strict";var i=n(313);n.n(i).a},338:function(t,e,n){"use strict";var i=n(314);n.n(i).a},339:function(t,e,n){"use strict";var i=n(315);n.n(i).a},340:function(t,e,n){"use strict";var i=n(316);n.n(i).a},341:function(t,e,n){"use strict";var i=n(317);n.n(i).a},342:function(t,e,n){"use strict";var i=n(0),r=n(31).find,s=n(98),a=n(18),o=!0,l=a("find");"find"in[]&&Array(1).find((function(){o=!1})),i({target:"Array",proto:!0,forced:o||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},343:function(t,e,n){"use strict";var i=n(318);n.n(i).a},344:function(t,e,n){"use strict";var i=n(319);n.n(i).a},346:function(t,e,n){"use strict";n.r(e);n(165),n(95),n(326);var i=n(307),r={props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.f,isMailto:i.g,isTel:i.h}},s=n(25),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null).exports,o={components:{NavLink:a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(329),Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),u=(n(330),n(26),n(175),n(166),n(96),n(44),n(177),n(308),n(322),n(171),n(67),n(323),n(97),n(333),n(68),n(321),n(179)),c=n.n(u),h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=c()(e,"title","");return c()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),p(t,i)},p=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},d={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],s=0;s<e.length&&!(r.length>=n);s++){var a=e[s];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(h(t,a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=n);o++){var l=a.headers[o];l.title&&h(t,a,l.title)&&r.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},f=(n(334),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),g=(n(335),Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),v=(n(178),n(42)),m={components:{NavLink:a,DropdownTransition:n(325).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},b=(n(337),{components:{NavLink:a,DropdownLink:Object(s.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})),0):n("NavLink",{attrs:{item:e}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,r=this.$site.themeConfig.locales||{},s={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map((function(s){var a,o=e[s],l=r[s]&&r[s].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,s),i.some((function(t){return t.path===a}))||(a=s)),{text:l,link:a}}))};return[].concat(Object(v.a)(this.userNav),[s])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.j)(t),{items:(t.items||[]).map(i.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),_=(n(338),Object(s.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function k(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var x={components:{SidebarButton:g,NavLinks:_,SearchBox:f,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(k(this.$el,"paddingLeft"))+parseInt(k(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},$=(n(339),Object(s.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports);function C(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var y={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,C(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(i.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,C(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,o=t.docsRepo,l=void 0===o?e:o;return l&&n&&this.$page.relativePath?this.createEditLink(e,l,r,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,r,s){return/bitbucket.org/.test(t)?(i.i.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+s+"?mode=edit&spa=0&at=".concat(r,"&fileviewer=file-view-default"):(i.i.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(r,"/")+(n?n.replace(i.a,"")+"/":"")+s}}},w=(n(340),Object(s.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),S={name:"Sidebar",components:{SidebarLinks:n(324).default,NavLinks:_},props:["items"]},L=(n(344),{components:{Home:l,Page:w,Sidebar:Object(s.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:$},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),O=Object(s.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)}),[],!1,null,null,null);e.default=O.exports}}]);