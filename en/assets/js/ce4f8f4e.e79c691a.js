"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),s=l,f=m["".concat(o,".").concat(s)]||m[s]||d[s]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var a=n(87462),l=(n(67294),n(3905));const r={},i=void 0,p={unversionedId:"api/appendix/plantuml/tenant-manager-admin",id:"api/appendix/plantuml/tenant-manager-admin",title:"tenant-manager-admin",description:"1.2.2 \u79df\u6237\u7ba1\u7406",source:"@site/docs/api/appendix/plantuml/tenant-manager-admin.md",sourceDirName:"api/appendix/plantuml",slug:"/api/appendix/plantuml/tenant-manager-admin",permalink:"/en/api/appendix/plantuml/tenant-manager-admin",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/appendix/plantuml/tenant-manager-admin.md",tags:[],version:"current",lastUpdatedAt:1656403915,formattedLastUpdatedAt:"6/28/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"template",permalink:"/en/api/appendix/plantuml/template"},next:{title:"user-manager-tenant",permalink:"/en/api/appendix/plantuml/user-manager-tenant"}},o={},u=[{value:"1.2.2 \u79df\u6237\u7ba1\u7406",id:"122-\u79df\u6237\u7ba1\u7406",level:3},{value:"1.2.2.1 \u521b\u5efa\u79df\u6237\u7a7a\u95f4",id:"1221-\u521b\u5efa\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.1.1 \u65f6\u5e8f\u56fe",id:"12211-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.2 \u7f16\u8f91\u79df\u6237\u7a7a\u95f4",id:"1222-\u7f16\u8f91\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.2.1 \u65f6\u5e8f\u56fe",id:"12221-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.3 \u5220\u9664\u79df\u6237\u7a7a\u95f4",id:"1223-\u5220\u9664\u79df\u6237\u7a7a\u95f4",level:4},{value:"1.2.2.3.1 \u65f6\u5e8f\u56fe",id:"12231-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.4 \u67e5\u770b\u7528\u6237\u5217\u8868",id:"1224-\u67e5\u770b\u7528\u6237\u5217\u8868",level:4},{value:"1.2.2.4.1 \u65f6\u5e8f\u56fe",id:"12241-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.5 \u91cd\u7f6e\u7528\u6237\u5bc6\u7801",id:"1225-\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",level:4},{value:"1.2.2.5.1 \u65f6\u5e8f\u56fe",id:"12251-\u65f6\u5e8f\u56fe",level:5},{value:"1.2.2.6 \u5355\u70b9\u767b\u5f55",id:"1226-\u5355\u70b9\u767b\u5f55",level:4},{value:"1.2.2.6.1 \u65f6\u5e8f\u56fe",id:"12261-\u65f6\u5e8f\u56fe",level:5}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"122-\u79df\u6237\u7ba1\u7406"},"1.2.2 \u79df\u6237\u7ba1\u7406"),(0,l.kt)("h4",{id:"1221-\u521b\u5efa\u79df\u6237\u7a7a\u95f4"},"1.2.2.1 \u521b\u5efa\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12211-\u65f6\u5e8f\u56fe"},"1.2.2.1.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZPAnJiCm48PtFuMLgKZD2sI8obWX109Uu6gVmAfZcxE3b1T020c9WP6b6nChJqJp6jX92eegqcwM_TttdyzU-00Kwaep4C4IRzy-jazV73olFH9pyL09vS04dfrUBg-H7f1cPuZw9EC9MyVb66i_D-thu_RzvVjvCwDQIgI13MWYaHnA89CGO0KUUNRU-7kT9O9M82uSOoayBvExw8kMSdwZWiRv5LP0QvQEyd8a_8SSCNdP9nI2408E7V7AodYBOqYo6YTna98xgvLeYXvsI9NoNbd3bHaq4xKWguXrmpySy0VpkpIzb7TCo2tPsksLTqFtZSztdhG-wDhrCgvEljtDpRIhUsL2xup7uLsJwtThWKR63_e3",alt:null}),(0,l.kt)("h4",{id:"1222-\u7f16\u8f91\u79df\u6237\u7a7a\u95f4"},"1.2.2.2 \u7f16\u8f91\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12221-\u65f6\u5e8f\u56fe"},"1.2.2.2.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/TP0z2i9044RxFSMIAeAvG8gWPH1Hr0kCsIcM_Asp6y4BY0Y2XQLDEYjRJsHo3NSrJKIxOURnlMztf0sGgVACGM9AuktbrXmU73IlD19JzYWJgQ0mt1lFuoNI5icV86O3ZpiijMCVQ-zrUzutrzFpMFjK2O7KiGOBIxWCcI0JO60D6hattUbDvZc2rf3CL2-lMp7N9uYSBlpan6AuaaPcE5nW3fGoTmkYdkGVseE2wEC8AsKxOLUJvwMmJ_iYt_vVt5iUHAvbIAXLMMXa8oo4_TiN",alt:null}),(0,l.kt)("h4",{id:"1223-\u5220\u9664\u79df\u6237\u7a7a\u95f4"},"1.2.2.3 \u5220\u9664\u79df\u6237\u7a7a\u95f4"),(0,l.kt)("h5",{id:"12231-\u65f6\u5e8f\u56fe"},"1.2.2.3.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuKfCBialKYWjJYtYAW0APIPd5YJcbIWeEGPu1gSMbQKMQNYdfkPeAYae91OhP0EPgCgUhrluV4BRipczJxiMQXILfgIa5a7LbgJc0LM0pCXCJkLAIIn9J4eiJbLGygqiBinH0gaeIafCzY_WuW9Phci7CjjAuMd_n1TRjxzOl_tPnYOka92k7Of181LDpwPkUBPWuSjLFLmeShfs41E1QZeMl9ovvFdo-SywjhzOFkb5vwRdQwSzdxgKUFLF-xkUxsuXLTUp5GkVpkicHZqnAb-iNmfH_6H7z_CfAuZK1T7oV5RBi_v9JtPlm-TzI92_s3_bwUnvptTFVZPl3ZJ8GJ629k6GcfS2J2y0",alt:null}),(0,l.kt)("h4",{id:"1224-\u67e5\u770b\u7528\u6237\u5217\u8868"},"1.2.2.4 \u67e5\u770b\u7528\u6237\u5217\u8868"),(0,l.kt)("h5",{id:"12241-\u65f6\u5e8f\u56fe"},"1.2.2.4.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/PP1D2i9038NtSuhGLLtq0bsKMheH5GJn0B4DE3ZMDZCLl80BGV00Rde1RwMzXZErADLTVhwyboJM1jdKEoKsX3anpAGsAqqiC3DxXjg5fKLa9aii37ZZnMH9V23sfqHgv06WXgqDXrXxRzhhwNcxFCwDptLkjNlMK649fo4p4ZaQNACcyEP7NIdF4MaYd6yGETcGgQf96-6I81fCVtg3QX2bIPYXKc5t3NJdfCdlB33fSbzOQsS6IlxhzFvlh5_0mTzQJ4Lkl_S2",alt:null}),(0,l.kt)("h4",{id:"1225-\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"},"1.2.2.5 \u91cd\u7f6e\u7528\u6237\u5bc6\u7801"),(0,l.kt)("h5",{id:"12251-\u65f6\u5e8f\u56fe"},"1.2.2.5.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/SoWkIImgAStDuSf8JKn9BL88IYrEBGajJYqAI2mkBiylIk7YIamkoIzIA0MASHK05MScPnOavfKeA3a6U0Qd5fMb5cbufwRcQ2efA2GMAsG3cQZAdgzR-7n2sxCvlK-x5ceKbQO0RO6gBKdD0we0cP6PdCgLabYIc9HOdAgWv5jPN9YZ15BXuiJ51R9OrmvahfN2q_w9BxPkVx5--xEDJLmW8Lqx54D0AfgUJTtmRC72bwjwk53aTErSdAmKditUycpQXkTJLZphsFva_y9dZUkvN9mmJ7cnVyhJsVEUxvxyRDuST5CWBa5H0N49oA5e4WwfUId0m0K0",alt:null}),(0,l.kt)("h4",{id:"1226-\u5355\u70b9\u767b\u5f55"},"1.2.2.6 \u5355\u70b9\u767b\u5f55"),(0,l.kt)("h5",{id:"12261-\u65f6\u5e8f\u56fe"},"1.2.2.6.1 \u65f6\u5e8f\u56fe"),(0,l.kt)("img",{src:"https://www.plantuml.com/plantuml/png/VLBBJi905DtFLzomWWKD5Pyi22vS43SaVa7JZabZRSbq8BgJa4XZ136YYOWeE-C2sB4Wf3z37_w5qySWDUBotZdtt7FkcP999K9hvngIP6eGg9cOe2fhgR9QbNGAgSDA-GIJEYRfOuorJ0f0Ck6K63fDuhpnoEjUkuEsSpDAavgYO1A3emAXW3jR34SBu3tFdSKZ2gjiCO8KO4i0lpDpxfweSOPr5BLNCta1lbfjPzntklVfV4xCyF60kG3RQy_nigCBYeakQMK5wrIbbnLYrDLmqux09Q1D8CwxAm0ZNIxQZZNbpc9-hdkFiVK-t8xblZQzzuO_RR8oDWxHJLPcDclQPmQk-hxT-Y4AZn5GMxEbFN8Rat_KSZ47ZERprfyq4dDyFKU9kK3pcsjr8NdioBGeiYZidlCo14cMiMd6g4I88ijhkR03h-iWIFZ_dR6Ovo7_gGzYxcXv0f98EtwVFxZ30K8bh2li5mFw1W00",alt:null}))}d.isMDXComponent=!0}}]);