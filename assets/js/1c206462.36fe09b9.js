"use strict";(self.webpackChunkrippling_graphql=self.webpackChunkrippling_graphql||[]).push([[7434],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),y=o,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6530:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],p={id:"job",title:"Job"},l=void 0,c={unversionedId:"partners/truework/objects/job",id:"partners/truework/objects/job",isDocsHomePage:!1,title:"Job",description:"Employee's job definition",source:"@site/docs/partners/truework/objects/job.mdx",sourceDirName:"partners/truework/objects",slug:"/partners/truework/objects/job",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/job",tags:[],version:"current",frontMatter:{id:"job",title:"Job"},sidebar:"tutorialSidebar",previous:{title:"Employee",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/employee"},next:{title:"PageInfo",permalink:"/rippling-graphql-doc/docs/partners/truework/objects/page-info"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Employee's job definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Job {\n  employmentType: EmploymentType\n  exemptionType: ExemptionType\n  title: String\n  salaryUnit: JobSalaryUnit\n  salaryPerUnit: Decimal\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"employmenttype-employmenttype"},(0,a.kt)("inlineCode",{parentName:"h4"},"employmentType")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/enums/employment-type"},(0,a.kt)("inlineCode",{parentName:"a"},"EmploymentType")),")"),(0,a.kt)("p",null,"is full time/contractor/etc"),(0,a.kt)("h4",{id:"exemptiontype-exemptiontype"},(0,a.kt)("inlineCode",{parentName:"h4"},"exemptionType")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/enums/exemption-type"},(0,a.kt)("inlineCode",{parentName:"a"},"ExemptionType")),")"),(0,a.kt)("h4",{id:"title-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Job title"),(0,a.kt)("h4",{id:"salaryunit-jobsalaryunit"},(0,a.kt)("inlineCode",{parentName:"h4"},"salaryUnit")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/enums/job-salary-unit"},(0,a.kt)("inlineCode",{parentName:"a"},"JobSalaryUnit")),")"),(0,a.kt)("h4",{id:"salaryperunit-decimal"},(0,a.kt)("inlineCode",{parentName:"h4"},"salaryPerUnit")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/partners/truework/scalars/decimal"},(0,a.kt)("inlineCode",{parentName:"a"},"Decimal")),")"))}m.isMDXComponent=!0}}]);