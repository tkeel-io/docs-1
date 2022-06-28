"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[3478],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(n),s=a,g=k["".concat(o,".").concat(s)]||k[s]||u[s]||l;return n?r.createElement(g,i(i({ref:e},m),{},{components:n})):r.createElement(g,i({ref:e},m))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},39263:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u67e5\u8be2\u5b9e\u4f53\u5c5e\u6027",description:"GetEntityProps",sidebar_position:43},i=void 0,p={unversionedId:"api/core/method_GetEntityProps",id:"api/core/method_GetEntityProps",title:"\u67e5\u8be2\u5b9e\u4f53\u5c5e\u6027",description:"GetEntityProps",source:"@site/docs/api/core/method_GetEntityProps.md",sourceDirName:"api/core",slug:"/api/core/method_GetEntityProps",permalink:"/en/api/core/method_GetEntityProps",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/core/method_GetEntityProps.md",tags:[],version:"current",lastUpdatedAt:1655966912,formattedLastUpdatedAt:"6/23/2022",sidebarPosition:43,frontMatter:{title:"\u67e5\u8be2\u5b9e\u4f53\u5c5e\u6027",description:"GetEntityProps",sidebar_position:43},sidebar:"tutorialSidebar",previous:{title:"\u66f4\u65b0(\u63d2\u5165)\u5b9e\u4f53\u5c5e\u6027",permalink:"/en/api/core/method_UpdateEntityProps"},next:{title:"\u6279\u91cf\u5220\u9664\u5b9e\u4f53\u5c5e\u6027",permalink:"/en/api/core/method_RemoveEntityProps"}},o={},d=[{value:"\u63a5\u53e3\u8bf4\u660e",id:"\u63a5\u53e3\u8bf4\u660e",level:2},{value:"URI",id:"uri",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"\u54cd\u5e94",id:"\u54cd\u5e94",level:2},{value:"\u54cd\u5e94&lt;200&gt;",id:"\u54cd\u5e94200",level:3},{value:"v1EntityResponse",id:"v1entityresponse",level:4},{value:"v1Mapper",id:"v1mapper",level:3}],m={toc:d};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63a5\u53e3\u8bf4\u660e"},"\u63a5\u53e3\u8bf4\u660e"),(0,a.kt)("p",null,"\u8c03\u7528\u8be5\u63a5\u53e3\u67e5\u8be2\u5b9e\u4f53\u5c5e\u6027\u3002"),(0,a.kt)("h2",{id:"uri"},"URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"get /entities/{id}/properties\n")),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u4f4d\u7f6e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b")))),(0,a.kt)("p",null,"| id | path | string | \u5b9e\u4f53id |  Required | "),(0,a.kt)("p",null,"| source | query | string | \u6765\u6e90id |  false |\n| owner | query | string | \u7528\u6237id |  true |\n| type | query | string | \u5b9e\u4f53\u7c7b\u578b |  false |\n| property_keys | query | string | \u5b9e\u4f53\u5c5e\u6027\u5b57\u6bb5, eg: pids=1,2,3 |  false |"),(0,a.kt)("h2",{id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,a.kt)("h3",{id:"\u54cd\u5e94200"},"\u54cd\u5e94<200>"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Code"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200"),(0,a.kt)("td",{parentName:"tr",align:null},"OK"),(0,a.kt)("td",{parentName:"tr",align:null},"Object(",(0,a.kt)("a",{parentName:"td",href:"#v1EntityResponse"},"v1EntityResponse"),")")))),(0,a.kt)("h4",{id:"v1entityresponse"},"v1EntityResponse"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"configs"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u914d\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"description"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"last_time"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6b21\u4fee\u6539\u65f6\u95f4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mappers"),(0,a.kt)("td",{parentName:"tr",align:null},"Array","[v1Mapper]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u6620\u5c04 [ \u5177\u4f53\u53c2\u6570\u53ef\u89c1\u4e0b\u9762 ",(0,a.kt)("a",{parentName:"td",href:"#v1Mapper"},"v1Mapper")," ]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"owner"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u6237id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"properties"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"source"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6765\u6e90id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"template_id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u6a21\u7248")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"version"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7248\u672c")))),(0,a.kt)("h3",{id:"v1mapper"},"v1Mapper"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"description"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04\u63cf\u8ff0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04\u540d\u79f0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tql"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6620\u5c04tql\u8bed\u53e5")))))}u.isMDXComponent=!0}}]);