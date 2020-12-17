(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{606:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),j=p(a),m=n,o=j["".concat(i,".").concat(m)]||j[m]||O[m]||b;return a?r.a.createElement(o,c(c({ref:t},s),{},{components:a})):r.a.createElement(o,c({ref:t},s))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<b;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(8),b=(a(0),a(606)),i={id:"_signers_tlsigner_.tlsigner",title:"Interface: TLSigner",sidebar_label:"TLSigner"},c={unversionedId:"api/interfaces/_signers_tlsigner_.tlsigner",id:"version-0.13.7/api/interfaces/_signers_tlsigner_.tlsigner",isDocsHomePage:!1,title:"Interface: TLSigner",description:'"signers/TLSigner".TLSigner',source:"@site/clientlib_versioned_docs/version-0.13.7/api/interfaces/_signers_tlsigner_.tlsigner.md",slug:"/api/interfaces/_signers_tlsigner_.tlsigner",permalink:"/clientlib/0.13.7/api/interfaces/_signers_tlsigner_.tlsigner",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib_versioned_docs/version-0.13.7/api/interfaces/_signers_tlsigner_.tlsigner.md",version:"0.13.7",sidebar_label:"TLSigner",sidebar:"version-0.13.7/clientlib",previous:{title:"Interface: TLProvider",permalink:"/clientlib/0.13.7/api/interfaces/_providers_tlprovider_.tlprovider"},next:{title:"Interface: AccruedInterestsObject",permalink:"/clientlib/0.13.7/api/interfaces/_typings_.accruedinterestsobject"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Methods",id:"methods",children:[{value:"confirm",id:"confirm",children:[]},{value:"getAddress",id:"getaddress",children:[]},{value:"getBalance",id:"getbalance",children:[]},{value:"getMetaTxFees",id:"getmetatxfees",children:[]},{value:"getTxStatus",id:"gettxstatus",children:[]},{value:"hashTx",id:"hashtx",children:[]},{value:"prepareTransaction",id:"preparetransaction",children:[]},{value:"signMessage",id:"signmessage",children:[]},{value:"signMsgHash",id:"signmsghash",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/modules/_signers_tlsigner_"}),'"signers/TLSigner"'),".TLSigner"),Object(b.b)("p",null,"Interface for different signer strategies."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("strong",{parentName:"p"},"TLSigner")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_wallets_tlwallet_.tlwallet"}),"TLWallet")))),Object(b.b)("h2",{id:"implemented-by"},"Implemented by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/clientlib/0.13.7/api/classes/_signers_web3signer_.web3signer"}),"Web3Signer"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"confirm"},"confirm"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirm"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L19"}),"src/signers/TLSigner.ts:19"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getaddress"},"getAddress"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAddress"),"(): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L14"}),"src/signers/TLSigner.ts:14"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbalance"},"getBalance"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBalance"),"(): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L15"}),"src/signers/TLSigner.ts:15"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmetatxfees"},"getMetaTxFees"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMetaTxFees"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L22"}),"src/signers/TLSigner.ts:22"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettxstatus"},"getTxStatus"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTxStatus"),"(",Object(b.b)("inlineCode",{parentName:"p"},"txHash"),": string ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L21"}),"src/signers/TLSigner.ts:21"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"txHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hashtx"},"hashTx"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hashTx"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L18"}),"src/signers/TLSigner.ts:18"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"preparetransaction"},"prepareTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepareTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.txobjectraw"}),"TxObjectRaw"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L20"}),"src/signers/TLSigner.ts:20"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.txobjectraw"}),"TxObjectRaw"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"signmessage"},"signMessage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"signMessage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"message"),": string ","|"," ArrayLike","<","number>): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L17"}),"src/signers/TLSigner.ts:17"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"message")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," ArrayLike","<","number>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"signmsghash"},"signMsgHash"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"signMsgHash"),"(",Object(b.b)("inlineCode",{parentName:"p"},"msgHash"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L16"}),"src/signers/TLSigner.ts:16"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"msgHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/0.13.7/api/interfaces/_typings_.signature"}),"Signature"),">"))}p.isMDXComponent=!0}}]);