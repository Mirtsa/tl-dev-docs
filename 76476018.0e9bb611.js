(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),b=(n(0),n(413)),i={id:"_signers_web3signer_.web3signer",title:"Class: Web3Signer",sidebar_label:"Web3Signer"},c={unversionedId:"api/classes/_signers_web3signer_.web3signer",id:"api/classes/_signers_web3signer_.web3signer",isDocsHomePage:!1,title:"Class: Web3Signer",description:'"signers/Web3Signer".Web3Signer',source:"@site/clientlib/api/classes/_signers_web3signer_.web3signer.md",slug:"/api/classes/_signers_web3signer_.web3signer",permalink:"/clientlib/next/api/classes/_signers_web3signer_.web3signer",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/clientlib/api/classes/_signers_web3signer_.web3signer.md",version:"current",sidebar_label:"Web3Signer",sidebar:"clientlib",previous:{title:"Class: RelayProvider",permalink:"/clientlib/next/api/classes/_providers_relayprovider_.relayprovider"},next:{title:"Class: EthersWallet",permalink:"/clientlib/next/api/classes/_wallets_etherswallet_.etherswallet"}},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"confirm",id:"confirm",children:[]},{value:"getAddress",id:"getaddress",children:[]},{value:"getBalance",id:"getbalance",children:[]},{value:"getMetaTxFees",id:"getmetatxfees",children:[]},{value:"getTxInfos",id:"gettxinfos",children:[]},{value:"getTxStatus",id:"gettxstatus",children:[]},{value:"hashTx",id:"hashtx",children:[]},{value:"prepareTransaction",id:"preparetransaction",children:[]},{value:"signMessage",id:"signmessage",children:[]},{value:"signMsgHash",id:"signmsghash",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/modules/_signers_web3signer_"}),'"signers/Web3Signer"'),".Web3Signer"),Object(b.b)("p",null,"The Web3Signer class contains functions for signing transactions with a web3 provider."),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"Web3Signer"))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new Web3Signer"),"(",Object(b.b)("inlineCode",{parentName:"p"},"web3Provider"),": Web3Provider): ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/classes/_signers_web3signer_.web3signer"}),"Web3Signer")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L23"}),"src/signers/Web3Signer.ts:23"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"web3Provider")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Web3Provider")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/classes/_signers_web3signer_.web3signer"}),"Web3Signer")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"confirm"},"confirm"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"confirm"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L59"}),"src/signers/Web3Signer.ts:59"))),Object(b.b)("p",null,"Signs a transaction and returns ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," with transaction hash."),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Raw transaction object.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getaddress"},"getAddress"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getAddress"),"(): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L33"}),"src/signers/Web3Signer.ts:33"))),Object(b.b)("p",null,"Returns ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," with address of signer."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getbalance"},"getBalance"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getBalance"),"(): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L43"}),"src/signers/Web3Signer.ts:43"))),Object(b.b)("p",null,"Returns ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," with balance of signer."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.amount"}),"Amount"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getmetatxfees"},"getMetaTxFees"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getMetaTxFees"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L172"}),"src/signers/Web3Signer.ts:172"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.metatransactionfees"}),"MetaTransactionFees"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettxinfos"},"getTxInfos"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTxInfos"),"(",Object(b.b)("inlineCode",{parentName:"p"},"userAddress"),": string): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txinfos"}),"TxInfos"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L125"}),"src/signers/Web3Signer.ts:125"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"userAddress")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txinfos"}),"TxInfos"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"gettxstatus"},"getTxStatus"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getTxStatus"),"(",Object(b.b)("inlineCode",{parentName:"p"},"tx"),": string ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L166"}),"src/signers/Web3Signer.ts:166"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tx")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.transactionstatusobject"}),"TransactionStatusObject"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hashtx"},"hashTx"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"hashTx"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<","string>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L121"}),"src/signers/Web3Signer.ts:121"))),Object(b.b)("p",null,"Returns the hash of the signed transaction for given rawTx with loaded user"),Object(b.b)("h4",{id:"parameters-5"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"preparetransaction"},"prepareTransaction"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"prepareTransaction"),"(",Object(b.b)("inlineCode",{parentName:"p"},"rawTx"),": ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"),"): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobjectraw"}),"TxObjectRaw"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L144"}),"src/signers/Web3Signer.ts:144"))),Object(b.b)("h4",{id:"parameters-6"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rawTx")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/clientlib/next/api/interfaces/_typings_.rawtxobject"}),"RawTxObject"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.txobjectraw"}),"TxObjectRaw"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"signmessage"},"signMessage"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"signMessage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"message"),": string ","|"," ArrayLike","<","number>): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L88"}),"src/signers/Web3Signer.ts:88"))),Object(b.b)("p",null,"Signs the given message and returns ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," with signature."),Object(b.b)("h4",{id:"parameters-7"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"message")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string ","|"," ArrayLike","<","number>"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Message to sign.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"signmsghash"},"signMsgHash"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"signMsgHash"),"(",Object(b.b)("inlineCode",{parentName:"p"},"msgHash"),": string): Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"/clientlib/next/api/interfaces/_signers_tlsigner_.tlsigner"}),"TLSigner"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/trustlines-protocol/clientlib/blob/a897659/src/signers/Web3Signer.ts#L106"}),"src/signers/Web3Signer.ts:106"))),Object(b.b)("p",null,"Signs the given message hash and return ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," with signature."),Object(b.b)("h4",{id:"parameters-8"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"msgHash")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hash of message to sign.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/clientlib/next/api/interfaces/_typings_.signature"}),"Signature"),">"))}p.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return o}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},j=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),j=p(n),m=a,o=j["".concat(i,".").concat(m)]||j[m]||O[m]||b;return n?r.a.createElement(o,c(c({ref:t},s),{},{components:n})):r.a.createElement(o,c({ref:t},s))}));function o(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<b;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);