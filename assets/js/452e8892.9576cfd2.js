"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7429],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,k=s["".concat(a,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(k,c(c({ref:t},p),{},{components:r})):n.createElement(k,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=s;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3868:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],l={title:"\u67b6\u6784",sidebar_position:1},a=void 0,u={unversionedId:"developer_cookbook/core/introduction/architecture",id:"developer_cookbook/core/introduction/architecture",isDocsHomePage:!1,title:"\u67b6\u6784",description:"\u67b6\u6784",source:"@site/docs/developer_cookbook/core/introduction/architecture.md",sourceDirName:"developer_cookbook/core/introduction",slug:"/developer_cookbook/core/introduction/architecture",permalink:"/docs/developer_cookbook/core/introduction/architecture",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/introduction/architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u67b6\u6784",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/docs/developer_cookbook/core/getting_started"},next:{title:"\u914d\u7f6e",permalink:"/docs/developer_cookbook/core/introduction/configuration"}},p=[{value:"\u67b6\u6784",id:"\u67b6\u6784",children:[{value:"Restful APIs",id:"restful-apis",children:[],level:3},{value:"\u5b9e\u4f53\u7ba1\u7406",id:"\u5b9e\u4f53\u7ba1\u7406",children:[],level:3},{value:"Runtime",id:"runtime",children:[],level:3},{value:"Inbox",id:"inbox",children:[],level:3},{value:"Channel Endpoint",id:"channel-endpoint",children:[],level:3},{value:"\u5173\u7cfb",id:"\u5173\u7cfb",children:[],level:3},{value:"\u8ba2\u9605",id:"\u8ba2\u9605",children:[],level:3},{value:"Storege",id:"storege",children:[],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,l=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture",src:r(6870).Z})),(0,i.kt)("h3",{id:"restful-apis"},"Restful APIs"),(0,i.kt)("p",null,"core \u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"RESTFUL")," \u89c4\u8303\u5b9e\u73b0 API\uff0c\u81f4\u529b\u4e8e\u63d0\u4f9b\u6b63\u4ea4\u7684APIs\uff0c\u5411\u5916\u63d0\u4f9b\u7b80\u6d01\uff0c\u7a33\u5b9a\u7684API\u3002"),(0,i.kt)("h3",{id:"\u5b9e\u4f53\u7ba1\u7406"},"\u5b9e\u4f53\u7ba1\u7406"),(0,i.kt)("p",null,'core \u5c06\u7269\u7406\u4e16\u754c\u4e2d\u7684 "\u5bf9\u8c61" \u52a0\u4ee5\u62bd\u8c61\uff0c\u5c01\u88c5\u6210\u6570\u5b57\u4e16\u754c\u4e2d\u7684 ',(0,i.kt)("inlineCode",{parentName:"p"},"\u5b9e\u4f53"),"\uff0c \u5b9e\u4f53\u662f\u5bf9\u7269\u7406\u201c\u5bf9\u8c61\u201d \u7684\u6570\u5b57\u955c\u50cf\uff0c\u5b9e\u4f53\u7ba1\u7406 \u5bf9core\u4e2d\u7684\u5b9e\u4f53\u8fdb\u9879\u7ba1\u7406\uff0c\u5e76\u4ee3\u7406\u5b9e\u4f53\u76f8\u5173\u7684 API \u64cd\u4f5c\uff0c\u4e3a\u5b9e\u4f53\u548c\u5b9e\u4f53\u8fd0\u884c\u65f6\uff08Actor\uff09\u5411\u5916\u66b4\u9732\u63a5\u53e3\u3002"),(0,i.kt)("h3",{id:"runtime"},"Runtime"),(0,i.kt)("p",null,"Runtime \u4e3a\u5b9e\u4f53\u7684\u8fd0\u884c\u65f6\uff08Actor\uff09\u63d0\u4f9b\u73af\u5883\u652f\u6301\uff0c\u5bf9\u5b9e\u4f53\u8fdb\u884c\u8c03\u5ea6\u548c\u7ba1\u7406\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"core-actor",src:r(1275).Z})),(0,i.kt)("h3",{id:"inbox"},"Inbox"),(0,i.kt)("p",null,"Inbox \u5b9e\u73b0\u4ece\u6570\u636e\u6e90\uff08MQ\uff0c\u6570\u636e\u5e93\u7b49\uff09\u4e2d\u6d88\u8d39\u6d88\u606f\uff0c\u5b9e\u73b0 checkpoint \u673a\u5236\uff0c \u4e3a Runtime \u4e2d\u7684 Actor \u63d0\u4f9b\u53ef\u9760\u6d88\u606f\u4fdd\u8bc1\u3002"),(0,i.kt)("h3",{id:"channel-endpoint"},"Channel Endpoint"),(0,i.kt)("p",null,"\u9ad8\u9891\uff0c\u9ad8\u541e\u5410\u91cf\u7684\u6d88\u606f\u6d41\u5bf9 \u4f20\u8f93 \u7684\u8981\u6c42\u603b\u662f\u82db\u523b\u7684\uff0c core \u91c7\u7528\u9ad8\u6548\u6570\u636e\u901a\u9053\uff0c \u5c01\u88c5\u901a\u9053\u7aef\u70b9\uff0c\u4e3a\u9ad8\u9891\u6d88\u606f\u63d0\u4f9b\u9ad8\u901f\u901a\u9053\u3002"),(0,i.kt)("h3",{id:"\u5173\u7cfb"},"\u5173\u7cfb"),(0,i.kt)("p",null,"\u7269\u7406\u4e16\u754c\u4e2d\u7684\u5bf9\u8c61\u901a\u5e38\u4e0d\u662f\u5b64\u7acb\u7684\uff0ccore \u901a\u8fc7 \u5173\u7cfb\uff08Relationship\uff09 \u6a21\u62df\u7269\u7406\u4e16\u754c\u4e2d\u7684\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u4e3a\u5b9e\u4f53\u63d0\u4f9b\u591a\u6837\u7684\u7ec4\u7ec7\u5f62\u5f0f\u3002"),(0,i.kt)("h3",{id:"\u8ba2\u9605"},"\u8ba2\u9605"),(0,i.kt)("h3",{id:"storege"},"Storege"),(0,i.kt)("p",null,"Storege \u662f core \u6301\u4e45\u5316\u7f13\u51b2\u6a21\u5757\u3002"))}s.isMDXComponent=!0},1275:function(e,t,r){t.Z=r.p+"assets/images/architecture-actor-09fe2e5e9761e011f6933b7c81512ad3.png"},6870:function(e,t,r){t.Z=r.p+"assets/images/architecture-239e4ab233ef4cdae685de2449f11cc1.png"}}]);