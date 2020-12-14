(window.webpackJsonp=window.webpackJsonp||[]).push([[294],{363:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(413)),i={layout:"relay",title:"Running Trustlines via docker-compose"},c={unversionedId:"trustlines_docker",id:"trustlines_docker",isDocsHomePage:!1,title:"Running Trustlines via docker-compose",description:"This directory contains the files needed to start a trustlines system via",source:"@site/relay/trustlines_docker.md",slug:"/trustlines_docker",permalink:"/relay/trustlines_docker",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/relay/trustlines_docker.md",version:"current",sidebar:"Relay",previous:{title:"Running the Trustlines system",permalink:"/relay/running_trustlines_system"}},l=[{value:"Services",id:"services",children:[]},{value:"Setup",id:"setup",children:[{value:"Fetch docker image",id:"fetch-docker-image",children:[]},{value:"Generate keys",id:"generate-keys",children:[]},{value:"Copy compiled contracts",id:"copy-compiled-contracts",children:[]},{value:"Setup initial database",id:"setup-initial-database",children:[]},{value:"Test the installation",id:"test-the-installation",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/tree/master/docker/trustlines"}),"This directory")," contains the files needed to start a trustlines system via\ndocker-compose. Following these setup instructions will give you a\nsystem, where you can:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"connect to a trustlines laika node via JSONRPC on port 8545"),Object(o.b)("li",{parentName:"ul"},"use the trustlines laika node as a metamask backend"),Object(o.b)("li",{parentName:"ul"},"connect to a relay server on port 5000 and interact with currency\nnetworks running on chain")),Object(o.b)("p",null,"Please be aware that you additionally might have to firewall the\ninstalled system if you don't want to expose those services."),Object(o.b)("h2",{id:"services"},"Services"),Object(o.b)("p",null,"The docker-compose file contains service definitions for the following services:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"db: A service running a postgres server. The postgres files will be\nstored in the ",Object(o.b)("inlineCode",{parentName:"p"},"postgres-data")," docker volume.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"tlbc: A service running a modified parity node for the trustlines\nblockchain. The blockchain data will be stored in the\n",Object(o.b)("inlineCode",{parentName:"p"},"blockchain-data")," docker volume.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"index: A service running py-eth-index, which synchronizes certain\ninformation from parity into the postgres database.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"relay: The relay server itself."))),Object(o.b)("h2",{id:"setup"},"Setup"),Object(o.b)("p",null,"We need to do some initial setup and configuration for the system to work. You\nneed to provide the ",Object(o.b)("inlineCode",{parentName:"p"},"addresses.json")," file, which should be put in the directory\nalongside the ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file."),Object(o.b)("p",null,"This directory contains working example files for contracts already\ndeployed on the laika blockchain. If you deploy your own contracts,\nplease adapt ",Object(o.b)("inlineCode",{parentName:"p"},"addresses.json")," accordingly."),Object(o.b)("h3",{id:"fetch-docker-image"},"Fetch docker image"),Object(o.b)("p",null,"Let's first build and fetch all of the images that we will need\nwithout starting any services with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up --no-start\n")),Object(o.b)("h3",{id:"generate-keys"},"Generate keys"),Object(o.b)("p",null,"The relay server either needs a parity node with an unlocked account\nor it needs a key to sign transactions itself. We will use the latter\nmethod."),Object(o.b)("p",null,"Please generate a keystore file by running the following command. It\nwill ask for a password."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it -v $(pwd):/here --entrypoint /opt/relay/bin/deploy-tools trustlines/relay generate-keystore --keystore-path /here/keystore.json\n")),Object(o.b)("p",null,"We also need to store the password in clear text. Please create a file\n'keystore-password.txt' containing only the password on the first\nline."),Object(o.b)("p",null,"Of course you can also use an existing keyfile, but please do not\nreuse a keyfile from a validator node."),Object(o.b)("h3",{id:"copy-compiled-contracts"},"Copy compiled contracts"),Object(o.b)("p",null,"The relay server image containts the file 'contracts.json', which\ncontains the compiled currency network contracts. We will need\nthis file for the index service."),Object(o.b)("p",null,"Please copy them to the current directory with:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'docker-compose run --rm --no-deps -v $(pwd):/here --entrypoint /bin/bash relay -c "cp /opt/relay/trustlines-contracts/build/contracts.json /here"\n')),Object(o.b)("h3",{id:"setup-initial-database"},"Setup initial database"),Object(o.b)("p",null,"We need to setup the database and import the ABIs for the index\nservice by running the following commands:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker-compose up -d db\nsleep 2\ndocker-compose run --rm index createtables\ndocker-compose run --rm index importabi\n")),Object(o.b)("p",null,"After that you can start the system with ",Object(o.b)("inlineCode",{parentName:"p"},"docker-compose up -d"),",\nthough you have to wait for the blockchain node to sync with the\ntrustlines blockchain in order to have a fully functioning system."),Object(o.b)("p",null,"The account you've setup at the beginning will have to pay for\ntransactions. Please fund it with enough coins. You should now be able\nto connect to the local node via metamask to do that."),Object(o.b)("h3",{id:"test-the-installation"},"Test the installation"),Object(o.b)("p",null,"Please try to run the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl http://localhost:5000/api/v1/networks\n")),Object(o.b)("p",null,"It should print some information about the networks as JSON."),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"The relay server provides a REST API. Please read ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/relay/blob/master/docs/RelayAPI.md"}),"relay server API\ndocumentation"),"\nfor more information."),Object(o.b)("p",null,"You can also use the clientlib to access the relay server from\njavascript. Please visit the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/trustlines-protocol/clientlib"}),"clientlib github\nrepository")," for more\ninformation."))}p.isMDXComponent=!0},413:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);