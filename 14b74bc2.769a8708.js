(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{413:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return n?i.a.createElement(m,l(l({ref:t},o),{},{components:n})):i.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<a;o++)c[o]=n[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(413)),c={id:"_typings_.tlnetworkconfig",title:"Interface: TLNetworkConfig",sidebar_label:"TLNetworkConfig"},l={unversionedId:"api/interfaces/_typings_.tlnetworkconfig",id:"version-0.13.7/api/interfaces/_typings_.tlnetworkconfig",isDocsHomePage:!1,title:"Interface: TLNetworkConfig",description:'"typings".TLNetworkConfig',source:"@site/clientlib_versioned_docs/version-0.13.7/api/interfaces/_typings_.tlnetworkconfig.md",slug:"/api/interfaces/_typings_.tlnetworkconfig",permalink:"/clientlib/api/interfaces/_typings_.tlnetworkconfig",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.13.7/api/interfaces/_typings_.tlnetworkconfig.md",version:"0.13.7",sidebar_label:"TLNetworkConfig",sidebar:"version-0.13.7/clientlib",previous:{title:"Interface: TLEvent",permalink:"/clientlib/api/interfaces/_typings_.tlevent"},next:{title:"Interface: TLWalletData",permalink:"/clientlib/api/interfaces/_typings_.tlwalletdata"}},b=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"chainId",id:"chainid",children:[]},{value:"identityFactoryAddress",id:"identityfactoryaddress",children:[]},{value:"identityImplementationAddress",id:"identityimplementationaddress",children:[]},{value:"messagingUrl",id:"messagingurl",children:[]},{value:"nonceMechanism",id:"noncemechanism",children:[]},{value:"relayUrl",id:"relayurl",children:[]},{value:"walletType",id:"wallettype",children:[]},{value:"web3Provider",id:"web3provider",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/modules/_typings_"}),'"typings"'),".TLNetworkConfig"),Object(a.b)("p",null,"Configuration object for a TLNetwork instance"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TLNetworkConfig"))),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("h3",{id:"chainid"},"chainId"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"chainId"),": number"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L35"}),"src/typings.ts:35"))),Object(a.b)("p",null,"Chain id used in the signature of meta-tx"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"identityfactoryaddress"},"identityFactoryAddress"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"identityFactoryAddress"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L27"}),"src/typings.ts:27"))),Object(a.b)("p",null,"Address of the identity factory"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"identityimplementationaddress"},"identityImplementationAddress"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"identityImplementationAddress"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L31"}),"src/typings.ts:31"))),Object(a.b)("p",null,"Address of the implementation of the identity contract"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"messagingurl"},"messagingUrl"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"messagingUrl"),": string ","|"," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.providerurl"}),"ProviderUrl")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L15"}),"src/typings.ts:15"))),Object(a.b)("p",null,"ProviderUrl object or full url for the messaging api"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"noncemechanism"},"nonceMechanism"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"nonceMechanism"),": ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/enums/_typings_.noncemechanism"}),"NonceMechanism")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L39"}),"src/typings.ts:39"))),Object(a.b)("p",null,"Mechanism how to generate nonces for identity meta-tx"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"relayurl"},"relayUrl"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"relayUrl"),": string ","|"," ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/clientlib/api/interfaces/_typings_.providerurl"}),"ProviderUrl")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L11"}),"src/typings.ts:11"))),Object(a.b)("p",null,"ProviderUrl object or full url for the relay api"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"wallettype"},"walletType"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"walletType"),": string"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L23"}),"src/typings.ts:23"))),Object(a.b)("p",null,"Full URL for trustline rest api"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"web3provider"},"web3Provider"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(a.b)("strong",{parentName:"p"},"web3Provider"),": any"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/typings.ts#L19"}),"src/typings.ts:19"))),Object(a.b)("p",null,"Web3 provider"))}p.isMDXComponent=!0}}]);