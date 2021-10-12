"use strict";(self.webpackChunkrippling_graphql=self.webpackChunkrippling_graphql||[]).push([[514],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?n.createElement(f,i(i({ref:r},s),{},{components:t})):n.createElement(f,i({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4879:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={id:"payroll-compensation",title:"PayrollCompensation"},c=void 0,p={unversionedId:"partners/truework/objects/payroll-compensation",id:"partners/truework/objects/payroll-compensation",isDocsHomePage:!1,title:"PayrollCompensation",description:"No description",source:"@site/docs/partners/truework/objects/payroll-compensation.mdx",sourceDirName:"partners/truework/objects",slug:"/partners/truework/objects/payroll-compensation",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/payroll-compensation",tags:[],version:"current",frontMatter:{id:"payroll-compensation",title:"PayrollCompensation"},sidebar:"tutorialSidebar",previous:{title:"PageInfo",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/page-info"},next:{title:"Paystub",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/paystub"}},s=[{value:"Fields",id:"fields",children:[]}],m={toc:s};function u(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PayrollCompensation {\n  gross: Decimal\n  net: Decimal\n  base: Decimal\n  bonus: Decimal\n  commission: Decimal\n  overtime: Decimal\n  other: Decimal\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"gross-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"gross")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"net-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"net")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"base-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"base")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"bonus-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"bonus")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"commission-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"commission")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"overtime-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"overtime")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"other-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"other")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"))}u.isMDXComponent=!0}}]);