"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Routing",sidebar_label:"Routing",sidebar_position:6,slug:"/ibc/apps/routing"},i="Routing",u={unversionedId:"ibc/apps/routing",id:"version-v4.5.x/ibc/apps/routing",title:"Routing",description:"Pre-requisite readings",source:"@site/versioned_docs/version-v4.5.x/01-ibc/03-apps/06-routing.md",sourceDirName:"01-ibc/03-apps",slug:"/ibc/apps/routing",permalink:"/v4.5.x/ibc/apps/routing",draft:!1,tags:[],version:"v4.5.x",sidebarPosition:6,frontMatter:{title:"Routing",sidebar_label:"Routing",sidebar_position:6,slug:"/ibc/apps/routing"}},l={},p=[],c={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"routing"},"Routing"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v4.5.x/ibc/overview"},"IBC Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/v4.5.x/ibc/integration"},"IBC default integration")))),(0,o.kt)("admonition",{title:"Synopsis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Learn how to hook a route to the IBC router for the custom IBC module.")),(0,o.kt)("p",null,"As mentioned above, modules must implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"IBCModule")," interface (which contains both channel\nhandshake callbacks and packet handling callbacks). The concrete implementation of this interface\nmust be registered with the module name as a route on the IBC ",(0,o.kt)("inlineCode",{parentName:"p"},"Router"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// app.go\nfunc NewApp(...args) *App {\n// ...\n\n// Create static IBC router, add module routes, then set and seal it\nibcRouter := port.NewRouter()\n\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferModule)\n// Note: moduleCallbacks must implement IBCModule interface\nibcRouter.AddRoute(moduleName, moduleCallbacks)\n\n// Setting Router will finalize all routes by sealing router\n// No more routes can be added\napp.IBCKeeper.SetRouter(ibcRouter)\n\n// ...\n}\n")))}d.isMDXComponent=!0}}]);