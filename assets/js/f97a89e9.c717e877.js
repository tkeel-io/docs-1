"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[371],{3905:function(A,e,r){r.d(e,{Zo:function(){return g},kt:function(){return f}});var o=r(7294);function t(A,e,r){return e in A?Object.defineProperty(A,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[e]=r,A}function n(A,e){var r=Object.keys(A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),r.push.apply(r,o)}return r}function i(A){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){t(A,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(r,e))}))}return A}function a(A,e){if(null==A)return{};var r,o,t=function(A,e){if(null==A)return{};var r,o,t={},n=Object.keys(A);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||(t[r]=A[r]);return t}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(o=0;o<n.length;o++)r=n[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(A,r)&&(t[r]=A[r])}return t}var c=o.createContext({}),u=function(A){var e=o.useContext(c),r=e;return A&&(r="function"==typeof A?A(e):i(i({},e),A)),r},g=function(A){var e=u(A.components);return o.createElement(c.Provider,{value:e},A.children)},v={inlineCode:"code",wrapper:function(A){var e=A.children;return o.createElement(o.Fragment,{},e)}},s=o.forwardRef((function(A,e){var r=A.components,t=A.mdxType,n=A.originalType,c=A.parentName,g=a(A,["components","mdxType","originalType","parentName"]),s=u(r),f=t,C=s["".concat(c,".").concat(f)]||s[f]||v[f]||n;return r?o.createElement(C,i(i({ref:e},g),{},{components:r})):o.createElement(C,i({ref:e},g))}));function f(A,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof A||t){var n=r.length,i=new Array(n);i[0]=s;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=A,a.mdxType="string"==typeof A?A:t,i[1]=a;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6817:function(A,e,r){r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return g},default:function(){return s}});var o=r(7462),t=r(3366),n=(r(7294),r(3905)),i=["components"],a={title:"Interfaces",sidebar_position:15},c=void 0,u={unversionedId:"developer_cookbook/core/specs/interfaces",id:"developer_cookbook/core/specs/interfaces",isDocsHomePage:!1,title:"Interfaces",description:"apis layer",source:"@site/docs/developer_cookbook/core/specs/interfaces.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/interfaces",permalink:"/developer_cookbook/core/specs/interfaces",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/interfaces.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"Interfaces",sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"tentacle \u4e00\u81f4\u6027",permalink:"/developer_cookbook/core/specs/tentacle-consistency"},next:{title:"API Special Parameters",permalink:"/developer_cookbook/core/specs/api-special-parameter"}},g=[{value:"apis layer",id:"apis-layer",children:[],level:2}],v={toc:g};function s(A){var e=A.components,a=(0,t.Z)(A,i);return(0,n.kt)("wrapper",(0,o.Z)({},v,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"apis-layer"},"apis layer"),(0,n.kt)("p",null,"apis \u5206\u4e3a\u4e24\u5c42\uff0c\u7b2c\u4e00\u5c42\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Entity Manager"),"\uff0c\u4e3a Core \u63d0\u4f9b\u5b9e\u4f53\u8d44\u6e90\u63a5\u53e3\u3002\u7b2c\u4e8c\u5c42\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"Runtime"),"\uff0c\u4e3a Core \u63d0\u4f9b\u8fd0\u884c\u65f6\u7684\u5b9e\u4f53\u63a7\u5236\u63a5\u53e3\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"apis-interfaces-layers",src:r(8160).Z})))}s.isMDXComponent=!0},8160:function(A,e){e.Z="data:image/png;base64,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NX80vOHn7v0Do0d7JZ8cHMkHjs8M93pLE2O56mYfvdk989boZCLsLU4MjeWsaNSUtUUfMzY5dzxUz8YP9Y8UmuFEIkIHYbd65plnPvGJT3znO99xepA241ldXXV6hk14PJ4WnkxtO4ZhqLz5aH92pj80Vk2cKaV29JLkRr1a10zTK43CUPDpXOhkZS5G98A9dubY7tqvIIZhuDM5WBMC0ErVciGXSqaL3nAivrM/mVVOH/J/9OCzmWKpMJsp1LRQX4gMgoJGRka+/e1vOz1FO+E6IQCttDgzNJQV/8DkdNz64Hu3UiAxPb6YnJqIHWroPeHhmfRODwC4gmmaP/vZz5yeop1wdsyNXLu2CQC4aztzbD916tS3vvWt73//+9v9ibaKs2MAAGDb7d+///z5805P0U4oIQAAdo99+/Y98sgjTk/RTighAAB2lWKx6PQI7YQSAgAA6qKEAACAuighAACgLl5PyKUMw3B6BAAAdj9KyI14MSGog1fPAuAszo4BAAB1UUIAAEBdlBAAAFAXJQQAANRFCQEAAHVRQgAAQF2UEAAAUBclBAAA1EUJAQAAdVFCAABAXZQQAABQFyUEAADURQkBAAB1UUIAAEBdlBAAAFAXJQQAANRFCQEAAHVRQgAAQF2UEAAAUBclBAAA1EUJAdhpr7zySldXVzabXb8lm812dXX96Ec/cnAqAGryrK6uOj3DJjwez9LSktNTANguPp+vo6Pjvvvuu3r16t69e995552VlZVareb0XMBuYBiGC7+GGobhzuRgTQiAA8bGxlZWVq5evSoiV69eXVlZGR0ddXooACpiTQiAM0zTbDaba29rmlatVp2dB9g1WBPaEtaEADhjdHS0s7NTRDo7O7/+9a87PQ4ARbEmBMAxa8tCLAgBrcWa0JawJgTAMaOjo3v27GFBCICDOpweAIC6jh079vrrrx87dszpQQCoi7NjbmQYhtMjAABab2e+tHF2bEtYE3IpFz6JAQD3gu9y3YnrhAAAgLooIQAAoC5KCAAAqIsSAgAA6qKEAACAuighAACgLkoIAACoixICAADqooQAAIC6KCEAAKAuSggAAKiLEgIAAOqihAAAgLooIQAAoC5KCAAAqIsSAgAA6qKEAACAuighAACgLkoIAACoixICAADqooQAAIC6KCEAAKAuSggAAKiLEgIAAOqihADclXIq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"}}]);