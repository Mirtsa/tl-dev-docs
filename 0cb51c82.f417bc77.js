(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{413:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return o}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},j=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),j=s(a),m=n,o=j["".concat(l,".").concat(m)]||j[m]||O[m]||b;return a?r.a.createElement(o,c(c({ref:t},p),{},{components:a})):r.a.createElement(o,c({ref:t},p))}));function o(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),b=(a(0),a(413)),l={id:"_wallets_tlwallet_.tlwallet",title:"Interface: TLWallet",sidebar_label:"TLWallet"},c={unversionedId:"api/interfaces/_wallets_tlwallet_.tlwallet",id:"api/interfaces/_wallets_tlwallet_.tlwallet",isDocsHomePage:!1,title:"Interface: TLWallet",description:'"wallets/TLWallet".TLWallet',source:"@site/clientlib/api/interfaces/_wallets_tlwallet_.tlwallet.md",slug:"/api/interfaces/_wallets_tlwallet_.tlwallet",permalink:"/clientlib/next/api/interfaces/_wallets_tlwallet_.tlwallet",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/interfaces/_wallets_tlwallet_.tlwallet.md",version:"current",sidebar_label:"TLWallet",sidebar:"clientlib",previous:{title:"Interface: Web3TxReceipt",permalink:"/clientlib/next/api/interfaces/_typings_.web3txreceipt"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Properties",id:"properties",children:[{value:"address",id:"address",children:[]}]},{value:"Methods",id:"methods",children:[{value:"confirm",id:"confirm",children:[]},{value:"create",id:"create",children:[]},{value:"decrypt",id:"decrypt",children:[]},{value:"deployIdentity",id:"deployidentity",children:[]},{value:"encrypt",id:"encrypt",children:[]},{value:"encryptToSerializedKeystore",id:"encrypttoserializedkeystore",children:[]},{value:"exportPrivateKey",id:"exportprivatekey",children:[]},{value:"getAddress",id:"getaddress",children:[]},{value:"getBalance",id:"getbalance",children:[]},{value:"getMetaTxFees",id:"getmetatxfees",children:[]},{value:"getTxStatus",id:"gettxstatus",children:[]},{value:"getWalletData",id:"getwalletdata",children:[]},{value:"hashTx",id:"hashtx",children:[]},{value:"isIdentityDeployed",id:"isidentitydeployed",children:[]},{value:"loadFrom",id:"loadfrom",children:[]},{value:"prepareTransaction",id:"preparetransaction",children:[]},{value:"recoverFromEncryptedKeystore",id:"recoverfromencryptedkeystore",children:[]},{value:"recoverFromPrivateKey",id:"recoverfromprivatekey",children:[]},{value:"recoverFromSeed",id:"recoverfromseed",children:[]},{value:"showSeed",id:"showseed",children:[]},{value:"signMessage",id:"signmessage",children:[]},{value:"signMsgHash",id:"signmsghash",children:[]}]}],p={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_wallets_tlwallet_"}),'"wallets/TLWallet"'),".TLWallet"),Object(b.b)("p",null,"Interface for different wallet strategies."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner")),Object(b.b)("p",{parentName:"li"},"\u21b3 ",Object(b.b)("strong",{parentName:"p"},"TLWallet")))),Object(b.b)("h2",{id:"implemented-by"},"Implemented by"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/clientlib/next/api/classes/_wallets_etherswallet_.etherswallet"}),"EthersWallet")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/clientlib/next/api/classes/_wallets_identitywallet_.identitywallet"}),"IdentityWallet"))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"address"},"address"),Object(b.b)("p",null,"\u2022  ",Object(b.b)("strong",{parentName:"p"},"address"),": string"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L8"}),"src/wallets/TLWallet.ts:8"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"confirm"},"confirm"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirm"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#confirm"}),"confirm"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L19"}),"src/signers/TLSigner.ts:19"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"create"},"create"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"create"),"(): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L11"}),"src/wallets/TLWallet.ts:11"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"decrypt"},"decrypt"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"decrypt"),"(",Object(b.b)("inlineCode",{parentName:"p"},"encMsg"),": any, ",Object(b.b)("inlineCode",{parentName:"p"},"theirPubKey"),": string): Promise","<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L29"}),"src/wallets/TLWallet.ts:29"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"encMsg")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"theirPubKey")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","any>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"deployidentity"},"deployIdentity"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"deployIdentity"),"(): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L12"}),"src/wallets/TLWallet.ts:12"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"encrypt"},"encrypt"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"encrypt"),"(",Object(b.b)("inlineCode",{parentName:"p"},"msg"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"theirPubKey"),": string): Promise","<","any>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L28"}),"src/wallets/TLWallet.ts:28"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"msg")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"theirPubKey")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","any>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"encrypttoserializedkeystore"},"encryptToSerializedKeystore"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"encryptToSerializedKeystore"),"(",Object(b.b)("inlineCode",{parentName:"p"},"tlWalletData"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),", ",Object(b.b)("inlineCode",{parentName:"p"},"password"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"progressCallback?"),": (progress: number) => any): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L23"}),"src/wallets/TLWallet.ts:23"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tlWalletData")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"password")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"progressCallback?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(progress: number) => any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"exportprivatekey"},"exportPrivateKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"exportPrivateKey"),"(): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L10"}),"src/wallets/TLWallet.ts:10"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getaddress"},"getAddress"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAddress"),"(): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#getaddress"}),"getAddress"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L14"}),"src/signers/TLSigner.ts:14"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbalance"},"getBalance"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBalance"),"(): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#getbalance"}),"getBalance"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L15"}),"src/signers/TLSigner.ts:15"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmetatxfees"},"getMetaTxFees"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMetaTxFees"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#getmetatxfees"}),"getMetaTxFees"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L22"}),"src/signers/TLSigner.ts:22"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettxstatus"},"getTxStatus"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTxStatus"),"(",Object(b.b)("inlineCode",{parentName:"p"},"txHash"),": string ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#gettxstatus"}),"getTxStatus"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L21"}),"src/signers/TLSigner.ts:21"))),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"txHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getwalletdata"},"getWalletData"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getWalletData"),"(): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L15"}),"src/wallets/TLWallet.ts:15"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hashtx"},"hashTx"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hashTx"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#hashtx"}),"hashTx"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L18"}),"src/signers/TLSigner.ts:18"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isidentitydeployed"},"isIdentityDeployed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isIdentityDeployed"),"(): Promise","<","boolean>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L13"}),"src/wallets/TLWallet.ts:13"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","boolean>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"loadfrom"},"loadFrom"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"loadFrom"),"(",Object(b.b)("inlineCode",{parentName:"p"},"tlWalletData"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),"): Promise","<","void>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L14"}),"src/wallets/TLWallet.ts:14"))),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tlWalletData")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"preparetransaction"},"prepareTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepareTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobjectraw"}),"TxObjectRaw"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#preparetransaction"}),"prepareTransaction"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L20"}),"src/signers/TLSigner.ts:20"))),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobjectraw"}),"TxObjectRaw"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"recoverfromencryptedkeystore"},"recoverFromEncryptedKeystore"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"recoverFromEncryptedKeystore"),"(",Object(b.b)("inlineCode",{parentName:"p"},"serializedEncryptedKeystore"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"password"),": string, ",Object(b.b)("inlineCode",{parentName:"p"},"progressCallback?"),": (progress: number) => any): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L17"}),"src/wallets/TLWallet.ts:17"))),Object(b.b)("h4",{id:"parameters-9"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"serializedEncryptedKeystore")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"password")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"progressCallback?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(progress: number) => any")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"recoverfromprivatekey"},"recoverFromPrivateKey"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"recoverFromPrivateKey"),"(",Object(b.b)("inlineCode",{parentName:"p"},"privateKey"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L22"}),"src/wallets/TLWallet.ts:22"))),Object(b.b)("h4",{id:"parameters-10"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"privateKey")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"recoverfromseed"},"recoverFromSeed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"recoverFromSeed"),"(",Object(b.b)("inlineCode",{parentName:"p"},"seed"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L16"}),"src/wallets/TLWallet.ts:16"))),Object(b.b)("h4",{id:"parameters-11"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"seed")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.tlwalletdata"}),"TLWalletData"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"showseed"},"showSeed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"showSeed"),"(): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/wallets/TLWallet.ts#L9"}),"src/wallets/TLWallet.ts:9"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"signmessage"},"signMessage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"signMessage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"message"),": string ","|"," ArrayLike","<","number>): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#signmessage"}),"signMessage"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L17"}),"src/signers/TLSigner.ts:17"))),Object(b.b)("h4",{id:"parameters-12"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"message")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string ","|"," ArrayLike","<","number>")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"signmsghash"},"signMsgHash"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"signMsgHash"),"(",Object(b.b)("inlineCode",{parentName:"p"},"msgHash"),": string): Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Inherited from ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"),".",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner#signmsghash"}),"signMsgHash"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/TLSigner.ts#L16"}),"src/signers/TLSigner.ts:16"))),Object(b.b)("h4",{id:"parameters-13"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"msgHash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"))}s.isMDXComponent=!0}}]);