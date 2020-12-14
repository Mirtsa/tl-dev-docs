(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{360:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),l=(n(0),n(413)),o={layout:"relay",title:"Trustlines relay server"},i={unversionedId:"relay_server",id:"relay_server",isDocsHomePage:!1,title:"Trustlines relay server",description:"This documents describes how to install the trustlines relay server",source:"@site/relay/relay_server.md",slug:"/relay_server",permalink:"/relay/relay_server",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay/relay_server.md",version:"current",sidebar:"Relay",next:{title:"Trustlines Relay API",permalink:"/relay/relay-api"}},s=[{value:"Installation",id:"installation",children:[{value:"Changelog",id:"changelog",children:[]}]}],c={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This documents describes how to install the trustlines relay server\nfor local development."),Object(l.b)("p",null,"If you're trying to setup a complete trustlines system, please visit\n",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"running_trustlines_system"}),"Running the trustlines system")),Object(l.b)("p",null,"The relay server provides a REST API. Please visit the ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/blob/master/docs/RelayAPI.md"}),"REST API\nDocumentation"),"\npage for more information."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("p",null,"Prerequisites"),Object(l.b)("p",null,"An installation of the relay server requires at least the following\ncomponents:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"PostgreSQL header files"),Object(l.b)("li",{parentName:"ul"},"Python 3.6 or up"),Object(l.b)("li",{parentName:"ul"},"pip")),Object(l.b)("h5",{id:"installation-on-ubuntu"},"Installation on Ubuntu"),Object(l.b)("p",null,"Please issue the following command to install the prerequisites on ubuntu 18.04"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt install build-essential python3-dev libsecp256k1-dev python3-virtualenv virtualenv pkg-config libssl-dev automake autoconf libtool git libpq-dev\n")),Object(l.b)("h5",{id:"setup"},"Setup"),Object(l.b)("p",null,"To install all needed development dependencies run the following commands in a\nfresh virtualenv"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/trustlines-protocol/relay.git\ncd relay\npip install -c constraints.txt -r requirements.txt\npip install -c constraints.txt -e .\n")),Object(l.b)("p",null,"If you plan to make changes to the source code and open pull requests\non github, please consider initializing the pre-commit hooks. The\ninstalled git pre-commit hooks run flake8 and black among other things\nwhen committing changes to the git repository"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-git"}),"pre-commit install\npre-commit run -a\n")),Object(l.b)("p",null,"After running those commands, the relay server is ready to run. Please\nrun ",Object(l.b)("inlineCode",{parentName:"p"},"tl-relay --help")," to get an overview of available options."),Object(l.b)("h3",{id:"changelog"},"Changelog"),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/blob/master/CHANGELOG.rst"}),"CHANGELOG")))}u.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||b[m]||l;return n?a.a.createElement(d,i(i({ref:t},c),{},{components:n})):a.a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);