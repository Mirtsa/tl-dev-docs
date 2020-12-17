(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(606)),o={title:"Structure"},s={unversionedId:"customizations/structure",id:"customizations/structure",isDocsHomePage:!1,title:"Structure",description:"We aim to be consistent.",source:"@site/mobileapp/customizations/structure.md",slug:"/customizations/structure",permalink:"/mobileapp/customizations/structure",editUrl:"https://github.com/trustlines-protocol/tl-dev-docs/edit/master/mobileapp/customizations/structure.md",version:"current",sidebar:"mobileapp",previous:{title:"Getting started",permalink:"/mobileapp/getting_started"},next:{title:"Custom Icons",permalink:"/mobileapp/customizations/custom_icons"}},c=[{value:"Folder structure",id:"folder-structure",children:[]},{value:"State",id:"state",children:[]},{value:"Screens &amp; Navigation",id:"screens--navigation",children:[{value:"Navigators",id:"navigators",children:[]}]},{value:"Components",id:"components",children:[]},{value:"Themes and styling",id:"themes-and-styling",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"We aim to be consistent.")),Object(i.b)("p",null,"We aim, but we are not always successful. As it is often the case with big projects developed over the span of several years - things are\nin flux. A pattern used at one particular point of time proves to be hard to use when things scale or requirements change."),Object(i.b)("p",null,"This doc is a snapshot of the things learned over the past couple of years. "),Object(i.b)("h2",{id:"folder-structure"},"Folder structure"),Object(i.b)("p",null,"All files directly relevant to the app are located in ",Object(i.b)("inlineCode",{parentName:"p"},"/src"),". So far everything is shared so all files are located in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/shared"),"."),Object(i.b)("p",null,"A babel plugin to rewrite module paths is used (",Object(i.b)("inlineCode",{parentName:"p"},"babel-plugin-module-resolver"),") to enable non-relative file imports.\nWe currently set the root to ",Object(i.b)("inlineCode",{parentName:"p"},"/src/shared")," in ",Object(i.b)("inlineCode",{parentName:"p"},"babel.config.js"),", so that we can import as follows"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// in `/src/shared/some-folder/some-file.js`\n\nimport { MyComponent } from 'components/MyComponent'  // absolute path `/src/shared/components/MyComponent`\n// instead of \nimport { MyComponent } from '../../components/MyComponent'\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"see ",Object(i.b)("inlineCode",{parentName:"em"},"babel.config.js")," for details")),Object(i.b)("h2",{id:"state"},"State"),Object(i.b)("p",null,"This react-native app uses ",Object(i.b)("inlineCode",{parentName:"p"},"redux")," and ",Object(i.b)("inlineCode",{parentName:"p"},"redux-sagas")," to hold and manipulate it's state and handle side-effects."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"http://redux.js.org/"}),"http://redux.js.org/")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://redux-saga.js.org/"}),"https://redux-saga.js.org/"))),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"state"}),"More on state")),Object(i.b)("h2",{id:"screens--navigation"},"Screens & Navigation"),Object(i.b)("p",null,"The app uses ",Object(i.b)("inlineCode",{parentName:"p"},"react-navigation")," v4 to structure its content and make it accessible. All navigators (base for the structure of screens) and screens are located in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/shared/navigation"),". However, not all code for navigation is currently here, even though it should be."),Object(i.b)("p",null,"A js file in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/shared/screens")," represents a single page / view / screen in the app and is used as a ",Object(i.b)("inlineCode",{parentName:"p"},"redux container"),". In the past, it was decided to prepare all data needed for the view in this component. This design that all data needs to be fetched here from the store does not make sense together with ",Object(i.b)("inlineCode",{parentName:"p"},"react-redux")," so we will try to move away from that, and have more ",Object(i.b)("inlineCode",{parentName:"p"},"redux containers")," further down the component hierarchy. "),Object(i.b)("h3",{id:"navigators"},"Navigators"),Object(i.b)("p",null,"Currently, there are three navigators: ",Object(i.b)("inlineCode",{parentName:"p"},"StartNavigator"),", ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator")," and ",Object(i.b)("inlineCode",{parentName:"p"},"SwitchNavigator"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SwitchNavigator")," is responsible for navigating the user either to the screens in ",Object(i.b)("inlineCode",{parentName:"p"},"StartNavigator")," or ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"StartNavigator")," includes all screens necessary for onboarding the user and initial actions in the app, i.e.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Start screen"),Object(i.b)("li",{parentName:"ul"},"Sign up / Log in"),Object(i.b)("li",{parentName:"ul"},"Select user"),Object(i.b)("li",{parentName:"ul"},"Create user"),Object(i.b)("li",{parentName:"ul"},"Import user")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator")," in combination with ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator")," includes the screens of the app once its setup is finished, i.e.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Home screen"),Object(i.b)("li",{parentName:"ul"},"Contacts"),Object(i.b)("li",{parentName:"ul"},"Account"),Object(i.b)("li",{parentName:"ul"},"Send / Receive"),Object(i.b)("li",{parentName:"ul"},"Setting up trustlines")),Object(i.b)("h2",{id:"components"},"Components"),Object(i.b)("p",null,"At the begining the components were used by the principles of the atomic design pattern (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://patternlab.io/"}),"http://patternlab.io/"),"). With the\ntime we realized that this is hard to maintain and moved away from it. Currently, we have container components and presentational\ncomponents. The container components are responsible for dealing with the state and the presentational components for\ndisplaying the data. "),Object(i.b)("h2",{id:"themes-and-styling"},"Themes and styling"),Object(i.b)("p",null,"The app utilizes and extends the UI framework ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/akveo/react-native-ui-kitten"}),"react-native-ui-kitten")," for styling components. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./styling"}),"styling")," for more details."))}p.isMDXComponent=!0},606:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);