"use strict";(self.webpackChunkrippling_graphql=self.webpackChunkrippling_graphql||[]).push([[3253],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3740:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"notify-payload",title:"NotifyPayload"},p=void 0,l={unversionedId:"partners/truework/objects/notify-payload",id:"partners/truework/objects/notify-payload",isDocsHomePage:!1,title:"NotifyPayload",description:"The payload sent to webhook",source:"@site/docs/partners/truework/objects/notify-payload.mdx",sourceDirName:"partners/truework/objects",slug:"/partners/truework/objects/notify-payload",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/notify-payload",tags:[],version:"current",frontMatter:{id:"notify-payload",title:"NotifyPayload"},sidebar:"tutorialSidebar",previous:{title:"Job",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/job"},next:{title:"PageInfo",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/page-info"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The payload sent to webhook"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type NotifyPayload {\n  instanceType: String!\n  instance: NotifySubject!\n  action: NotifyAction\n  subAction: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"instancetype-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"instanceType")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("p",null,"type of the object the notification is about, only Employee is supported at the moment"),(0,a.kt)("h4",{id:"instance-notifysubject"},(0,a.kt)("inlineCode",{parentName:"h4"},"instance")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/interfaces/notify-subject"},(0,a.kt)("inlineCode",{parentName:"a"},"NotifySubject!")),")"),(0,a.kt)("p",null,"The object the notification is about"),(0,a.kt)("h4",{id:"action-notifyaction"},(0,a.kt)("inlineCode",{parentName:"h4"},"action")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/enums/notify-action"},(0,a.kt)("inlineCode",{parentName:"a"},"NotifyAction")),")"),(0,a.kt)("p",null,"what has happened to that object"),(0,a.kt)("h4",{id:"subaction-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"subAction")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"free-formed string with more details about notification action"))}f.isMDXComponent=!0}}]);