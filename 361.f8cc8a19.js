(window.webpackJsonp=window.webpackJsonp||[]).push([[361],{427:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(429),l=a(21),c=a(24),i=a(448),s=a(3),u=a(8),m=a(430),p=a(431),d=a(436),b=a(445),f=a(446),y=a(466),h=a(434),g=a(438),v=a(439),j=a(102),O=a.n(j),k=function(e){var t=Object(l.default)().isClient,a=Object(v.a)().isDarkTheme,n=e.sources,o=e.className,c=e.alt,i=void 0===c?"":c,p=Object(u.a)(e,["sources","className","alt"]),d=t?a?["dark"]:["light"]:["light","dark"];return r.a.createElement(r.a.Fragment,null,d.map((function(e){return r.a.createElement("img",Object(s.a)({key:e,src:n[e],alt:i,className:Object(m.a)(O.a.themedImage,O.a["themedImage--"+e],o)},p))})))},E=a(435),N=function(e){var t=Object(l.default)().isClient,a=Object(p.useThemeConfig)().navbar,n=a.title,o=a.logo,c=void 0===o?{}:o,i=e.imageClassName,m=e.titleClassName,d=Object(u.a)(e,["imageClassName","titleClassName"]),b=Object(E.a)(c.href||"/"),f=c.target?{target:c.target}:Object(g.a)(b)?{}:{rel:"noopener noreferrer",target:"_blank"},y={light:Object(E.a)(c.src),dark:Object(E.a)(c.srcDark||c.src)};return r.a.createElement(h.a,Object(s.a)({to:b},d,f),c.src&&r.a.createElement(k,{key:t,className:i,sources:y,alt:c.alt||n||"Logo"}),null!=n&&r.a.createElement("strong",{className:m},n))},C=a(103),x=a.n(C);var w=function e(t,a){return"link"===t.type?Object(p.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function P(e){var t,a,o,l=e.item,c=e.onItemClick,i=e.collapsible,p=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),b=l.items,f=l.label,y=w(l,p),h=(a=y,o=Object(n.useRef)(a),Object(n.useEffect)((function(){o.current=a}),[a]),o.current),g=Object(n.useState)((function(){return!!i&&(!y&&l.collapsed)})),v=g[0],j=g[1],O=Object(n.useRef)(null),k=Object(n.useState)(void 0),E=k[0],N=k[1],C=function(e){var t;void 0===e&&(e=!0),N(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){y&&!h&&v&&j(!1)}),[y,h,v]);var P=Object(n.useCallback)((function(e){e.preventDefault(),E||C(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[E]);return 0===b.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[x.a.menuLinkText]=!i,t)),onClick:i?P:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:E},onTransitionEnd:function(){v||C(!1)}},b.map((function(e){return r.a.createElement(S,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:p})}))))}function T(e){var t=e.item,a=e.onItemClick,n=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=w(t,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(h.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function S(e){switch(e.item.type){case"category":return r.a.createElement(P,e);case"link":default:return r.a.createElement(T,e)}}var _=function(e){var t,a,o=e.path,l=e.sidebar,c=e.sidebarCollapsible,i=void 0===c||c,s=e.onCollapse,u=e.isHidden,h=Object(n.useState)(!1),g=h[0],v=h[1],j=Object(p.useThemeConfig)(),O=j.navbar.hideOnScroll,k=j.hideableSidebar,E=Object(d.a)().isAnnouncementBarClosed,C=Object(y.a)().scrollY;Object(b.a)(g);var w=Object(f.a)();return Object(n.useEffect)((function(){w===f.b.desktop&&v(!1)}),[w]),r.a.createElement("div",{className:Object(m.a)(x.a.sidebar,(t={},t[x.a.sidebarWithHideableNavbar]=O,t[x.a.sidebarHidden]=u,t))},O&&r.a.createElement(N,{tabIndex:-1,className:x.a.sidebarLogo}),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",x.a.menu,(a={"menu--show":g},a[x.a.menuWithAnnouncementBar]=!E&&0===C,a))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){v(!g)}},g?r.a.createElement("span",{className:Object(m.a)(x.a.sidebarMenuIcon,x.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:x.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(S,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),v(!1)},collapsible:i,activePath:o})})))),k&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",x.a.collapseSidebarButton),onClick:s}))},D={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},I={Prism:a(22).a,theme:D};function L(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var B=/\r\n|\r|\n/,R=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},A=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},F=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=M({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=M({},a,{backgroundColor:null}),r};function W(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var H=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),L(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?F(e.theme,e.language):void 0;return t.themeDict=a})),L(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=M({},W(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?M({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),L(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),L(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=M({},W(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?M({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=n[l]++)<r[l];){var s=void 0,u=t[l],m=a[l][o];if("string"==typeof m?(u=l>0?u:["plain"],s=m):(u=A(u,m.type),m.alias&&(u=A(u,m.alias)),s=m.content),"string"==typeof s){var p=s.split(B),d=p.length;c.push({types:u,content:p[0]});for(var b=1;b<d;b++)R(c),i.push(c=[]),c.push({types:u,content:p[b]})}else l++,t.push(u),a.push(s),n.push(0),r.push(s.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return R(c),i}(void 0!==l?t.tokenize(n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component),$=a(474),z=a.n($),J=a(475),K=a.n(J),U={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},V=function(){var e=Object(p.useThemeConfig)().prism,t=Object(v.a)().isDarkTheme,a=e.theme||U,n=e.darkTheme||a;return t?n:a},X=a(104),Y=a.n(X),q=/{([\d,-]+)}/,G=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},Q=/(?:title=")(.*)(?:")/,Z=function(e){var t=e.children,a=e.className,o=e.metastring,l=Object(p.useThemeConfig)().prism,c=Object(n.useState)(!1),i=c[0],u=c[1],d=Object(n.useState)(!1),b=d[0],f=d[1];Object(n.useEffect)((function(){f(!0)}),[]);var y=Object(n.useRef)(null),h=[],g="",v=V();if(Array.isArray(t)&&(t=t.join("")),o&&q.test(o)){var j=o.match(q)[1];h=K()(j).filter((function(e){return e>0}))}o&&Q.test(o)&&(g=o.match(Q)[1]);var O=a&&a.replace(/language-/,"");!O&&l.defaultLanguage&&(O=l.defaultLanguage);var k=t.replace(/\n$/,"");if(0===h.length&&void 0!==O){for(var E,N="",C=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return G(["js","jsBlock"]);case"jsx":case"tsx":return G(["js","jsBlock","jsx"]);case"html":return G(["js","jsBlock","html"]);case"python":case"py":return G(["python"]);default:return G()}}(O),x=t.replace(/\n$/,"").split("\n"),w=0;w<x.length;){var P=w+1,T=x[w].match(C);if(null!==T){switch(T.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=P+",";break;case"highlight-start":E=P;break;case"highlight-end":N+=E+"-"+(P-1)+","}x.splice(w,1)}else w+=1}h=K()(N),k=x.join("\n")}var S=function(){z()(k),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(H,Object(s.a)({},I,{key:String(b),theme:v,code:k,language:O}),(function(e){var t,a=e.className,n=e.style,o=e.tokens,l=e.getLineProps,c=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:n,className:Y.a.codeBlockTitle},g),r.a.createElement("div",{className:Y.a.codeBlockContent},r.a.createElement("div",{tabIndex:0,className:Object(m.a)(a,Y.a.codeBlock,"thin-scrollbar",(t={},t[Y.a.codeBlockWithTitle]=g,t))},r.a.createElement("div",{className:Y.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=l({line:e,key:t});return h.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},c({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":"Copy code to clipboard",className:Object(m.a)(Y.a.copyButton),onClick:S},i?"Copied":"Copy")))}))},ee=(a(105),a(106)),te=a.n(ee),ae=function(e){return function(t){var a,n=t.id,o=Object(u.a)(t,["id"]),l=Object(p.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(m.a)("anchor",(a={},a[te.a.enhancedAnchor]=!l,a)),id:n}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},ne=a(107),re=a.n(ne),oe={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(Z,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(h.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:re.a.mdxCodeBlock},e))},h1:ae("h1"),h2:ae("h2"),h3:ae("h3"),h4:ae("h4"),h5:ae("h5"),h6:ae("h6")},le=a(464),ce=a(432),ie=a(108),se=a.n(ie);function ue(e){var t,a,c,s,u=e.currentDocRoute,d=e.versionMetadata,b=e.children,f=Object(l.default)(),y=f.siteConfig,h=f.isClient,g=d.pluginId,v=d.permalinkToSidebar,j=d.docsSidebars,O=d.version,k=v[u.path],E=j[k],N=Object(n.useState)(!1),C=N[0],x=N[1],w=Object(n.useState)(!1),P=w[0],T=w[1],S=Object(n.useCallback)((function(){P&&T(!1),x(!C)}),[P]);return r.a.createElement(i.a,{key:h,searchMetadatas:{version:O,tag:Object(p.docVersionSearchTag)(g,O)}},r.a.createElement("div",{className:se.a.docPage},E&&r.a.createElement("div",{className:Object(m.a)(se.a.docSidebarContainer,(t={},t[se.a.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(se.a.docSidebarContainer)&&C&&T(!0)},role:"complementary"},r.a.createElement(_,{key:k,sidebar:E,path:u.path,sidebarCollapsible:null===(a=null===(c=y.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===a||a,onCollapse:S,isHidden:P}),P&&r.a.createElement("div",{className:se.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:S,onClick:S})),r.a.createElement("main",{className:se.a.docMainContainer},r.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",se.a.docItemWrapper,(s={},s[se.a.docItemWrapperEnhanced]=C,s))},r.a.createElement(o.a,{components:oe},b)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,o=t.find((function(e){return Object(ce.matchPath)(n.pathname,e)}));return o?r.a.createElement(ue,{currentDocRoute:o,versionMetadata:a},Object(c.a)(t)):r.a.createElement(le.default,e)}},429:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(a),d=n,b=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.a.createElement(b,c(c({ref:t},s),{},{components:a})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},464:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(448);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},474:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l};e.exports=n,e.exports.default=n},475:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a}}]);