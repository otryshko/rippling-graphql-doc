"use strict";(self.webpackChunkrippling_graphql=self.webpackChunkrippling_graphql||[]).push([[3231],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(k,i(i({ref:t},l),{},{components:r})):a.createElement(k,i({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9832:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={id:"paystub",title:"Paystub"},c=void 0,p={unversionedId:"partners/truework/objects/paystub",id:"partners/truework/objects/paystub",isDocsHomePage:!1,title:"Paystub",description:"No description",source:"@site/docs/partners/truework/objects/paystub.mdx",sourceDirName:"partners/truework/objects",slug:"/partners/truework/objects/paystub",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/paystub",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/partners/truework/objects/paystub.mdx",tags:[],version:"current",frontMatter:{id:"paystub",title:"Paystub"},sidebar:"tutorialSidebar",previous:{title:"PayrollCompensation",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/payroll-compensation"},next:{title:"Role",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/role"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Paystub {\n  payDate: Date\n  payPeriodStartDate: Date\n  payPeriodEndDate: Date\n  grossEarnings: Decimal\n  netEarnings: Decimal\n  baseAmount: Decimal\n  bonusAmount: Decimal\n  overtimeAmount: Decimal\n  commissionAmount: Decimal\n  otherAmount: Decimal\n  payPeriodHours: Decimal\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"paydate-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"payDate")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"payperiodstartdate-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"payPeriodStartDate")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"payperiodenddate-date"},(0,o.kt)("inlineCode",{parentName:"h4"},"payPeriodEndDate")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date")),")"),(0,o.kt)("h4",{id:"grossearnings-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"grossEarnings")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"netearnings-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"netEarnings")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"baseamount-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"baseAmount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"bonusamount-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"bonusAmount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"overtimeamount-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"overtimeAmount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"commissionamount-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"commissionAmount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"otheramount-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"otherAmount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"),(0,o.kt)("h4",{id:"payperiodhours-decimal"},(0,o.kt)("inlineCode",{parentName:"h4"},"payPeriodHours")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,o.kt)("inlineCode",{parentName:"a"},"Decimal")),")"))}m.isMDXComponent=!0}}]);