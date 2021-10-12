"use strict";(self.webpackChunkrippling_graphql=self.webpackChunkrippling_graphql||[]).push([[355],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?n.createElement(k,i(i({ref:r},c),{},{components:t})):n.createElement(k,i({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3593:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={id:"employee",title:"Employee"},l=void 0,p={unversionedId:"partners/truework/objects/employee",id:"partners/truework/objects/employee",isDocsHomePage:!1,title:"Employee",description:"No description",source:"@site/docs/partners/truework/objects/employee.mdx",sourceDirName:"partners/truework/objects",slug:"/partners/truework/objects/employee",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/employee",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/partners/truework/objects/employee.mdx",tags:[],version:"current",frontMatter:{id:"employee",title:"Employee"},sidebar:"tutorialSidebar",previous:{title:"EmployeePayroll",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/employee-payroll"},next:{title:"PageInfo",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/page-info"}},c=[{value:"Fields",id:"fields",children:[]},{value:"Interfaces",id:"interfaces",children:[]}],d={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Employee implements Node {\n  id: ID!\n  ssn: String\n  fullName: String\n  firstName: String\n  lastName: String\n  dob: String\n  email: String\n  phone: String\n  homeAddress: Address\n  roles: [Role!]\n  consent: EmployeeConsent\n  payroll: EmployeePayroll\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h4",{id:"ssn-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"ssn")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"fullname-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"fullName")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"firstname-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"firstName")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"lastname-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"lastName")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"dob-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"dob")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"email-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"phone-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"phone")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"homeaddress-address"},(0,o.kt)("inlineCode",{parentName:"h4"},"homeAddress")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address")),")"),(0,o.kt)("h4",{id:"roles-role"},(0,o.kt)("inlineCode",{parentName:"h4"},"roles")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/objects/role"},(0,o.kt)("inlineCode",{parentName:"a"},"[Role!]")),")"),(0,o.kt)("h4",{id:"consent-employeeconsent"},(0,o.kt)("inlineCode",{parentName:"h4"},"consent")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/objects/employee-consent"},(0,o.kt)("inlineCode",{parentName:"a"},"EmployeeConsent")),")"),(0,o.kt)("h4",{id:"payroll-employeepayroll"},(0,o.kt)("inlineCode",{parentName:"h4"},"payroll")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/objects/employee-payroll"},(0,o.kt)("inlineCode",{parentName:"a"},"EmployeePayroll")),")"),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"node"},(0,o.kt)("a",{parentName:"h4",href:"/docs/partners/truework/interfaces/node"},(0,o.kt)("inlineCode",{parentName:"a"},"Node"))))}m.isMDXComponent=!0}}]);