(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{253:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(606)),l={title:"iOS"},o={unversionedId:"known_issues/ios",id:"known_issues/ios",isDocsHomePage:!1,title:"iOS",description:"System setup and preparation",source:"@site/mobileapp/known_issues/ios.md",slug:"/known_issues/ios",permalink:"/mobileapp/known_issues/ios",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/mobileapp/known_issues/ios.md",version:"current",sidebar:"mobileapp",previous:{title:"Android",permalink:"/mobileapp/known_issues/android"},next:{title:"E2E Testing",permalink:"/mobileapp/testing/e2e"}},c=[{value:"System setup and preparation",id:"system-setup-and-preparation",children:[]},{value:"For internal contributors",id:"for-internal-contributors",children:[]},{value:"Build",id:"build",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"system-setup-and-preparation"},"System setup and preparation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Setup AppStore with your Apple ID"),Object(a.b)("li",{parentName:"ul"},"Install XCode & XCode Commandline Utilities"),Object(a.b)("li",{parentName:"ul"},"Install brew (get instruction from ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://brew.sh"}),"https://brew.sh")," )"),Object(a.b)("li",{parentName:"ul"},"Install Cocoa Pods ",Object(a.b)("inlineCode",{parentName:"li"},"sudo gem install cocoapods")),Object(a.b)("li",{parentName:"ul"},"Install git ",Object(a.b)("inlineCode",{parentName:"li"},"brew install git")),Object(a.b)("li",{parentName:"ul"},"Install coreutils ",Object(a.b)("inlineCode",{parentName:"li"},"brew install coreutils")),Object(a.b)("li",{parentName:"ul"},"needed to run ",Object(a.b)("inlineCode",{parentName:"li"},"sudo xcode-select --switch /Applications/Xcode.app")),Object(a.b)("li",{parentName:"ul"},"Install watchman ",Object(a.b)("inlineCode",{parentName:"li"},"brew install watchman")),Object(a.b)("li",{parentName:"ul"},"Install bundler ",Object(a.b)("inlineCode",{parentName:"li"},"sudo gem install bundler")),Object(a.b)("li",{parentName:"ul"},"Install pods in ios dir ",Object(a.b)("inlineCode",{parentName:"li"},"cd ios; pod install"))),Object(a.b)("h2",{id:"for-internal-contributors"},"For internal contributors"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Setup fastlane for ios distribution ",Object(a.b)("inlineCode",{parentName:"li"},"bundle exec fastlane ios profiles")," ( look at the 1password vault for passwords )"),Object(a.b)("li",{parentName:"ul"},"Setup fastlane for local development ",Object(a.b)("inlineCode",{parentName:"li"},"bundle exec fastlane match development -a beercoin.io.mobileapp.staging")," ",Object(a.b)("inlineCode",{parentName:"li"},"bundle exec fastlane match development -a beercoin.io.mobileapp.staging"))),Object(a.b)("h2",{id:"build"},"Build"),Object(a.b)("p",null,"We have 3 different targets to build: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"develop"),Object(a.b)("li",{parentName:"ul"},"staging"),Object(a.b)("li",{parentName:"ul"},"production")),Object(a.b)("p",null,"Each target can be build in ",Object(a.b)("inlineCode",{parentName:"p"},"debug")," or ",Object(a.b)("inlineCode",{parentName:"p"},"release")," config."),Object(a.b)("p",null,"The ",Object(a.b)("strong",{parentName:"p"},"Build Phases")," tab includes custom steps, that are unique to this project:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Version iOS Build"),": Reads the current app version from the ",Object(a.b)("inlineCode",{parentName:"li"},"package.json")," and updates the xcode project"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Copy Firbase Environment File"),": It is a little tricky to use multiple Firebase environments in one project. We copy a matching firebase env file while building to accomplish this. ",Object(a.b)("em",{parentName:"li"},"( Notice the difference between targets here )"))))}s.isMDXComponent=!0},606:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||a;return n?i.a.createElement(m,o(o({ref:t},p),{},{components:n})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);