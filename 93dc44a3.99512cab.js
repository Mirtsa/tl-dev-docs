(window.webpackJsonp=window.webpackJsonp||[]).push([[210],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(439)),i={title:"Configuration"},c={unversionedId:"develop/configuration",id:"develop/configuration",isDocsHomePage:!1,title:"Configuration",description:"The relay server can be configured via a config.toml file.",source:"@site/relay/develop/configuration.md",slug:"/develop/configuration",permalink:"/relay/develop/configuration",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay/develop/configuration.md",version:"current",sidebar:"Relay",previous:{title:"Start developing",permalink:"/relay/develop/develop"},next:{title:"Pre-commit hooks",permalink:"/relay/develop/pre_commit_hooks"}},l=[],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The relay server can be configured via a ",Object(a.b)("inlineCode",{parentName:"p"},"config.toml")," file.\nYou can find an example config in the repository: ",Object(a.b)("inlineCode",{parentName:"p"},"config.toml"),".\nNotably, the connection to the running blockchain node required by the relay\ncan be configured via the keys under ",Object(a.b)("inlineCode",{parentName:"p"},"[node_rpc]")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'[node_rpc]\n## Possible values for connection type are ipc, http, websocket. Default: http\n## type = websocket\nport = 8545\nhost = "localhost"\nuse_ssl = false\n## or use an uri to automatically detect the correct provider. Example for ipc:\n# uri = "file:///path-to-file.ipc"\n')),Object(a.b)("p",null,"Additionally, if the delegate service is enabled, the relay relies on an unlocked account\non the connected node to sign transactions. This behaviour can be changed with the ",Object(a.b)("inlineCode",{parentName:"p"},"[account]")," keys"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'[account]\nkeystore_path = "keystore.json"\nkeystore_password_path = "keystore-password.txt"\n')),Object(a.b)("p",null,"In parallel to the config, the relay needs to know the addresses of deployed trustlines contracts.\nThat is, which currency networks are deployed on the chain and the relay should let its users interact with,\nand which identity proxy factory the relay agrees to use to deploy identities for its users.\nYou can find a example of the ",Object(a.b)("inlineCode",{parentName:"p"},"addresses.json")," file in the repository.\nThe file contains the addresses of already deployed currency networks and identity proxy factory on the\nTrustlines Blockchain."),Object(a.b)("p",null,"Once configured, the relay can be started with the command ",Object(a.b)("inlineCode",{parentName:"p"},"tl-relay"),".\nYou can verify that it is correctly running with::"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl http://localhost:5000/api/v1/version\n")))}s.isMDXComponent=!0},439:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,b=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},p),{},{components:n})):o.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);