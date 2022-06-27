"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[4974],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=o(r),s=l,f=d["".concat(u,".").concat(s)]||d[s]||m[s]||a;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var o=2;o<a;o++)p[o]=r[o];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var n=r(87462),l=(r(67294),r(3905));const a={},p=void 0,i={unversionedId:"api/appendix/plantuml/rule_manager",id:"api/appendix/plantuml/rule_manager",title:"rule_manager",description:"1.3.8.1 \u521b\u5efa\u8def\u7531\u89c4\u5219",source:"@site/docs/api/appendix/plantuml/rule_manager.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/rule_manager",permalink:"/api/appendix/plantuml/rule_manager",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/rule_manager.md",tags:[],version:"current",lastUpdatedAt:1656311832,formattedLastUpdatedAt:"2022/6/27",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rudder",permalink:"/api/appendix/plantuml/rudder"},next:{title:"\u8ba2\u9605 Device \u53d8\u66f4\uff08ws\uff09",permalink:"/api/appendix/websocket"}},u={},o=[{value:"1.3.8.1 \u521b\u5efa\u8def\u7531\u89c4\u5219",id:"1381-\u521b\u5efa\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.2 \u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5",id:"1382-\u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5",level:5},{value:"1.3.8.3 \u542f\u52a8\u8def\u7531\u89c4\u5219",id:"1383-\u542f\u52a8\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.4 \u505c\u6b62\u8def\u7531\u89c4\u5219",id:"1384-\u505c\u6b62\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.5 \u7f16\u8f91\u8def\u7531\u89c4\u5219",id:"1385-\u7f16\u8f91\u8def\u7531\u89c4\u5219",level:5},{value:"1.3.8.6 \u5220\u9664\u8def\u7531\u89c4\u5219",id:"1386-\u5220\u9664\u8def\u7531\u89c4\u5219",level:5},{value:"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531",id:"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531",level:4},{value:"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907",id:"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907",level:4}],c={toc:o};function m(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h5",{id:"1381-\u521b\u5efa\u8def\u7531\u89c4\u5219"},"1.3.8.1 \u521b\u5efa\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL98BafDB4aDAir9vU9AJ2x9BrBmA2afSCx9JCqhuIe0girCpYn8p2jH02dnJSnBJ4yj2aujAijCJaMHTd7YuaBerBN3L6xrj6FsqzsxdatTyAnttOljwvzFsSY5gKhNpiN92YBxPF_2Puthd_KqFjdP-hHd6bR522kXnhzOj-ZbZDRdkoS_cpU7oo4rBmNeLm00",alt:null}),(0,l.kt)("h5",{id:"1382-\u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5"},"1.3.8.2 \u67e5\u8be2\u8def\u7531\u89c4\u5219\u8be6\u60c5"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL98Joq9Air9vU9AJ2x9BrBmA2afSCx9JCqhuIe0AinCpYn8p2jH02dnJSnBJ4yj2aujAijCJaMHTd7YuaBerBN3L6xrRFxI5-iNlTY-_lcKZI-MjppjcCc5gSf6ryx5oUh9xhvdKpSywrttTDVa9plM4gLJrmvXlzMB_LEUpfw7hEF5-cNFcbkv75BpKe1-1m00",alt:null}),(0,l.kt)("h5",{id:"1383-\u542f\u52a8\u8def\u7531\u89c4\u5219"},"1.3.8.3 \u542f\u52a8\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL80yuDASrAvk1AJI_AB53nAIWgSSp9Jyqgu2e1IcScP1Obv9GeW9Rw9UOdfgKN1gKLbcScfAD8kJYXSrn1d5nG1tzIIn9J4aaGCCojGZKaiA0eeJIekJK8H3aaiIayjAURYGZXErmxJHLPF9wn_shNYsTGDpthNlTY-_lcKZLoOgdJjN9oidirV-cBz8eYQ5yjRddRCnAeIvcoh5nkQdqzP0VS5ZA5h1_Af5R8vJzjcFcrT2Wu0J1DjT76O-7HoxzDTKv3yPwDBbF-W-a3M8RjstQANCrfHNDK_usdFDB2BAf0TGK0X8ZwidcthUB5b9yHkYBIk7JHUh22YptVtlzZV3ZLcISlp2MrF9_H1WkFvx7NF5hHpEQJcfG3J7W00",alt:null}),(0,l.kt)("h5",{id:"1384-\u505c\u6b62\u8def\u7531\u89c4\u5219"},"1.3.8.4 \u505c\u6b62\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL8eBial22hDIUNYIamkoIzIy2WfAN3EoKpDA-4g0AhCJCuiICmhKG0fyKtCIqnFBGfEBIhBJ4v5aNPnGk6wXZYxe0ZuffOafYIM96AOMO5gJ691KK1fKd5f4XSNmY6wTfYsMprjdFDixQ9dKpSywrttOllwvrCsSc6gqhLpSR9wDd_fY_MB86fUB6zvsZ4JgqgO4wrUR6X-FcK5tCKmXguTo5TMoEOysTq74dlQiU3bp2LO3BNHnM7eqyczJtTDGVAYZIvHNeJg0rcAxE1rYrxEQ4LssDF-6Kzxfe5TL87i208A4S5lzMnRnuijEo5smwJ1bDMpwGkUJjpxPCTQY3dlz_GysR7ewPvcg5g7rBmKOF820000",alt:null}),(0,l.kt)("h5",{id:"1385-\u7f16\u8f91\u8def\u7531\u89c4\u5219"},"1.3.8.5 \u7f16\u8f91\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL98JSai2IhDIUNYIamkoIzIy2WfAN3EoKpDA-4g0AhCJCuiICmhKG0fyKtCIqnFBGfEBIhBJ4v5aNPnuk92wDIrmrHkzNpFj1Vx9hxOllxvb8qlbhSyxPZ9XQdAHjVEnSaAMT6pdiOdErkVzap3ebhN3c6drOlzKvxEdeUizSNwPS-QMxaSKlDIW1u60000",alt:null}),(0,l.kt)("h5",{id:"1386-\u5220\u9664\u8def\u7531\u89c4\u5219"},"1.3.8.6 \u5220\u9664\u8def\u7531\u89c4\u5219"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL98ISr9BKaDAir9vU9AJ2x9BrBmA2afSCx9JCqhuIe0girCpYn8p2jH02dnJSnBJ4yj2aujAijCJaMHTd7YuaBerBLppYzATIhApuQhjdhQiU3bp2NFfcvurhlknVRrpwTivC9Gf6lducG5aNooV-6pnlNFUXgVx6nzsZCDcrg4VL33NwnRz796w_FTav_DcyFba9gN0lGe0000",alt:null}),(0,l.kt)("h4",{id:"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531"},"\u6dfb\u52a0\u8bbe\u5907\u5230\u6570\u636e\u8def\u7531"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL98J4bnIItBJ4uDoGygpKdbuafCBialKl0eAIbmpibCpIlXAW1go4pEB4ZCAr40AV5Dp4jCJoqAJYq2QKEHTd52uJhd5wLYLPPOK1HGcbHSciJ5XR18rmxJTAjdstS_xLhmOjs-fqlQdtPiU3PrmxFUTI-shty-PICNfd9TEoGhhLviQ7u-PGL8v6d7xAUxTxrOj-ZbZ5Oiscnq2MjxEhdtwQufMErqSRA2g7coV-6pnlNFUXgVx6nzsZCDoMyskgJv3MeR5vAxWFR0WyqAxBh-YKztD3_RrW6q4wYz01AWjhOABzjxdoxfLR2r9KExGsfU2Z1r0000",alt:null}),(0,l.kt)("h4",{id:"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907"},"\u4ece\u6570\u636e\u8def\u7531\u4e2d\u5220\u9664\u8bbe\u5907"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL98ISr9BKbrIItBJ4vrAyhF3IhDIUNYIamkoIzIy2WfAN3EoKpDA-4g0EhAJCuiICmhKG0fyKtCIqnFBGfEBG9fH95sSUBYGkZKjSDKRlLaTz-pgHkUzQvxiNtzyoaRd-nO-xHZmSkPIrwis_TqIJiNfWvTE-VyebIOzXSRcfzFMG4IUTe_xTcsZXVh5hsSqOf5cuqkOMrF9_S-tJK5gvqkJbOGDK_sBtpMkFvPJ-EJdQrFUwOXUSz6bsJlGIrqICrB0SO30000",alt:null}))}m.isMDXComponent=!0}}]);