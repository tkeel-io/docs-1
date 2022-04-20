"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[6299],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},A=Object.keys(t);for(a=0;a<A.length;a++)n=A[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(t);for(a=0;a<A.length;a++)n=A[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,A=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=o(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||A;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var A=n.length,l=new Array(A);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var o=2;o<A;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2363:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var a=n(7462),r=n(3366),A=(n(7294),n(3905)),l=["components"],i={title:"\u5b9e\u4f53",sidebar_position:1},p=void 0,o={unversionedId:"developer_cookbook/core/specs/entity",id:"developer_cookbook/core/specs/entity",title:"\u5b9e\u4f53",description:"\u5b9e\u4f53\uff08Entity\uff09",source:"@site/docs/developer_cookbook/core/specs/entity.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/entity",permalink:"/en/developer_cookbook/core/specs/entity",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/entity.md",tags:[],version:"current",lastUpdatedAt:1650424719,formattedLastUpdatedAt:"4/20/2022",sidebarPosition:1,frontMatter:{title:"\u5b9e\u4f53",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4e3a\u7a7a\u95f4\u5173\u7cfb\u53d8\u66f4\u521b\u5efa\u6620\u5c04",permalink:"/en/developer_cookbook/core/tutorial/mapper-for-space-relationships"},next:{title:"\u6620\u5c04",permalink:"/en/developer_cookbook/core/specs/mapper"}},d={},u=[{value:"\u5b9e\u4f53\uff08Entity\uff09",id:"\u5b9e\u4f53entity",level:2},{value:"\u7ec4\u6210",id:"\u7ec4\u6210",level:2},{value:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f",id:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f",level:2},{value:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f",id:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f",level:2},{value:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8",id:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8",level:2},{value:"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027",id:"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027",level:2},{value:"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5",id:"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5",level:3}],m={toc:u};function c(t){var e=t.components,i=(0,r.Z)(t,l);return(0,A.kt)("wrapper",(0,a.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,A.kt)("h2",{id:"\u5b9e\u4f53entity"},"\u5b9e\u4f53\uff08Entity\uff09"),(0,A.kt)("p",null,"\u5728\u6570\u5b57\u7cfb\u7edf\u4e2d\uff0c\u6211\u4eec\u5bf9\u4e8e\u4e00\u4e2a\u7269\u7406\u5bf9\u8c61\u7684\u62bd\u8c61\u65f6\u9700\u8981\u5b9a\u4e49\u5b83\u7684\u72b6\u6001\u548c\u884c\u4e3a\uff0c"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\u7269\u8054\u7f51\u4e16\u754c\u91cc\u7684\u64cd\u4f5c\u5bf9\u8c61\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u5bf9\u8c61\u7ec4\u5408\u62bd\u8c61\u51fa\u6765\u7684\u5bf9\u8c61\uff0c\u5305\u62ec\u7f51\u5173\uff0c\u8bbe\u5907\uff0c\u8bbe\u5907\u7684\u805a\u5408\u62bd\u8c61\u7b49\u7b49\u3002")),(0,A.kt)("h2",{id:"\u7ec4\u6210"},"\u7ec4\u6210"),(0,A.kt)("p",null,"\u5b9e\u4f53\uff08Entity\uff09\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u7684\u5c5e\u6027\uff0c\u7528\u4e8e\u63cf\u8ff0\u5b9e\u4f53\u7684\u5404\u79cd\u6307\u6807\u3002"),(0,A.kt)("li",{parentName:"ul"},"\u5b9e\u4f53\u7684\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f\uff0c\u7528\u4e8e\u5b9a\u4e49\u5b9e\u4f53\u7684\u5c5e\u6027\u3002")),(0,A.kt)("p",null,"\u5c5e\u6027\u5177\u6709 ",(0,A.kt)("strong",{parentName:"p"},"\u56fa\u5b9a")," \u4e14 ",(0,A.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u7684\u5b57\u6bb5\uff0c\u4e5f\u6709 ",(0,A.kt)("em",{parentName:"p"},"\u53ef\u9009")," \u7684\u5b57\u6bb5\uff0c\u5c5e\u6027\u4ee5 Key-Value \u7684\u5f62\u5f0f\u5b58\u5728\uff0c\u4ee5\u63d0\u4f9b\u826f\u597d\u7684\u6269\u5c55\u6027\u3002"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5177\u6709\u96f6\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027\u3002")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u5b9e\u4f53\u5c5e\u6027\u7684\u7c7b\u578b\u53ef\u4ee5\u662f ",(0,A.kt)("em",{parentName:"p"},"\u4efb\u610f\u7c7b\u578b"),"\uff0c\u6ee1\u8db3 ",(0,A.kt)("inlineCode",{parentName:"p"},"json")," \u89c4\u8303 \u3002")),(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("p",{parentName:"li"},"\u5b9e\u4f53 ",(0,A.kt)("strong",{parentName:"p"},"\u5fc5\u987b")," \u5177\u6709\u5982\u4e0b\u5b57\u6bb5\uff1a"),(0,A.kt)("table",{parentName:"li"},(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,A.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,A.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"id"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684id\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u5b9e\u4f53\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"type"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u7528\u4e8e\u5b9e\u4f53\u5206\u7c7b\uff0c\u8bf8\u5982\u8bbe\u5907\uff0c\u7a7a\u95f4\u7b49\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"owner"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u62e5\u6709\u8005ID\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"source"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5b9e\u4f53\u7684\u63d2\u4ef6\u540d\u79f0\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"version"),(0,A.kt)("td",{parentName:"tr",align:null},"int64"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7248\u672c\u53f7\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"last_time"),(0,A.kt)("td",{parentName:"tr",align:null},"int64"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u6700\u8fd1\u4fee\u6539\u65f6\u95f4\u3002")))))),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-bash"},'# Example\n{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "properties": {\n        "status": "end",\n        "temp": 20\n    }\n}\n')),(0,A.kt)("h2",{id:"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f"},"\u5b9e\u4f53\u7684\u4e24\u79cd\u5b58\u5728\u5f62\u5f0f"),(0,A.kt)("p",null,"\u5b9e\u4f53\u662f\u5bf9\u7269\u8054\u7f51\u4e16\u754c\u4e2d\u7684\u64cd\u4f5c\u5bf9\u8c61\u7684\u6570\u5b57\u5316\u62bd\u8c61\uff0c\u6211\u4eec\u4e0d\u4ec5\u62bd\u8c61\u5176\u72b6\u6001\uff0c\u4e5f\u5bf9\u5176\u884c\u4e3a\u8fdb\u884c\u62bd\u8c61\u3002\u6240\u4ee5\u6211\u4eec\u4e3a\u5b9e\u4f53\u521b\u5efa ",(0,A.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001\u5b58\u50a8")," \u548c ",(0,A.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u65f6Actor"),"\uff0c\u7528\u4e8e\u73b0\u7269\u7406\u4e16\u754c\u4e2d",(0,A.kt)("inlineCode",{parentName:"p"},"\u5bf9\u8c61"),"\u7684",(0,A.kt)("inlineCode",{parentName:"p"},"\u72b6\u6001"),"\u548c",(0,A.kt)("inlineCode",{parentName:"p"},"\u884c\u4e3a"),"\u3002"),(0,A.kt)("h2",{id:"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f"},"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f"),(0,A.kt)("p",null,"\u5b9e\u4f53\u7684\u751f\u547d\u5468\u671f\u4ece\u7528\u6237\u521b\u5efa\uff0c\u5b58\u5728\u4e8e\u72b6\u6001\u5b58\u50a8\uff0c\u5f53\u6709\u5b9e\u4f53\u7684\u6d88\u606f\u5230\u8fbe\uff0c\u5b9e\u4f53\u88ab\u52a0\u8f7d\u5230\u5185\u5b58\uff0c\u6267\u884c\u6536\u5230\u7684\u6d88\u606f\uff0c\u5f53\u6d88\u606f\u6267\u884c\u5b8c\u6210\uff0c\u518d\u65e0\u6d88\u606f\u53ef\u6267\u884c\u5219\u4ece ",(0,A.kt)("inlineCode",{parentName:"p"},"runtime")," \u5378\u8f7d\u5b9e\u4f53\u3002\u5f53\u7528\u6237\u5220\u9664\u5b9e\u4f53\uff0c\u5b9e\u4f53\u5219\u4ece\u72b6\u6001\u5b58\u50a8\uff0cRuntime\uff0c\u641c\u7d22\u5f15\u64ce\u5220\u9664\u3002"),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"entity-life-cycle",src:n(585).Z,width:"525",height:"387"})),(0,A.kt)("h2",{id:"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8"},"\u5b9e\u4f53\u72b6\u6001\u7684\u5b58\u50a8"),(0,A.kt)("p",null,"\u5b9e\u4f53\u7684\u72b6\u6001\u6570\u636e\uff0c\u5373\u5b9e\u4f53\u7684\u5c5e\u6027\u6570\u636e\uff0c\u6211\u4eec\u6839\u636e\u9700\u6c42\u5c06\u5176\u9009\u62e9\u6027\u7684\u5b58\u50a8\u5230\u72b6\u6001\u5b58\u50a8\uff0c\u65f6\u5e8f\u5b58\u50a8 \u548c \u641c\u7d22\u5f15\u64ce\u3002"),(0,A.kt)("p",null,"\u5b9e\u4f53\u72b6\u6001\u6570\u636e\u7684\u6301\u4e45\u5316\u5177\u6709\u4e24\u65b9\u9762\u7279\u5f81\uff1a\u9009\u62e9\u6027\uff0c\u7b56\u7565\u6027\u3002"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"\u9009\u62e9\u6027\u662f\u6307\u7528\u6237\u53ef\u4ee5\u5bf9\u5b9e\u4f53\u7684\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u6765\u6307\u5b9a\u6240\u914d\u7f6e\u7684\u5c5e\u6027\u662f\u5426\u8fdb\u884c\u6301\u4e45\u5316\uff0c",(0,A.kt)("a",{parentName:"li",href:"/en/developer_cookbook/core/specs/model"},"\u8be6\u60c5\u8bf7\u67e5\u770b"),"\u3002"),(0,A.kt)("li",{parentName:"ul"},"\u7b56\u7565\u6027\u662f\u6307\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5bf9\u670d\u52a1\u8282\u70b9\u914d\u7f6e\u4fe1\u606f\u8fdb\u884c\u8c03\u8282\uff0c\u6765\u63a7\u5236\u5b9e\u4f53\u6570\u636e\u7684",(0,A.kt)("a",{parentName:"li",href:"/en/developer_cookbook/core/specs/persistent-strategy"},"\u6301\u4e45\u5316\u7b56\u7565"),"\u3002")),(0,A.kt)("h2",{id:"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027"},"\u5e73\u94fa\u5b9e\u4f53\u5c5e\u6027"),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"id, type, owner, source")," \u7b49\u5b57\u6bb5\u4e5f\u53ef\u4ee5\u770b\u505a\u5b9e\u4f53\u7684\u5fc5\u987b\u5c5e\u6027\u5b57\u6bb5\uff0c\u662f\u88ab Core \u4fdd\u7559\u7684\uff0c\u7528\u4e8e\u63cf\u8ff0\u5b9e\u4f53\uff0c\u7528\u6237\u4e0d\u80fd\u91cd\u65b0\u5b9a\u4e49\u3002"),(0,A.kt)("p",null,"\u6545\uff0c\u5b9e\u4f53\u53ef\u4ee5\u5b58\u5728\u4e24\u79cd\u5c55\u793a\u5f62\u5f0f\uff1a"),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Structured:")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "properties": {\n        "status": "end",\n        "temp": 20\n    }\n}\n')),(0,A.kt)("p",null,(0,A.kt)("strong",{parentName:"p"},"Tiled\uff1a")),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "status": "end",\n    "temp": 20\n}\n')),(0,A.kt)("h3",{id:"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5"},"\u5b9e\u4f53\u4fdd\u7559\u5b57\u6bb5"),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,A.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,A.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"id"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684id\uff0c\u7528\u4e8e\u552f\u4e00\u6807\u8bc6\u5b9e\u4f53\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"type"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7c7b\u578b\uff0c\u7528\u4e8e\u5b9e\u4f53\u5206\u7c7b\uff0c\u8bf8\u5982\u8bbe\u5907\uff0c\u7a7a\u95f4\u7b49\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"owner"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u62e5\u6709\u8005ID\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"source"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u521b\u5efa\u5b9e\u4f53\u7684\u63d2\u4ef6\u540d\u79f0\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"version"),(0,A.kt)("td",{parentName:"tr",align:null},"int64"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u7248\u672c\u53f7\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"last_time"),(0,A.kt)("td",{parentName:"tr",align:null},"int64"),(0,A.kt)("td",{parentName:"tr",align:null},"\u5b9e\u4f53\u7684\u6700\u8fd1\u4fee\u6539\u65f6\u95f4\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"template"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u5b9e\u4f53\u7684\u6a21\u677fID")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"properties"),(0,A.kt)("td",{parentName:"tr",align:null},"object"),(0,A.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u7ed3\u6784\u5316\u5c55\u793a\u5b9e\u4f53\u5c5e\u6027\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"configs"),(0,A.kt)("td",{parentName:"tr",align:null},"object"),(0,A.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5c55\u793a\u5b9e\u4f53\u5c5e\u6027\u5b9a\u4e49\u4fe1\u606f\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"config_file"),(0,A.kt)("td",{parentName:"tr",align:null},"string"),(0,A.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5b58\u50a8\u5b9e\u4f53\u5c5e\u6027\u5b9a\u4e49\u3002")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:null},"mappers"),(0,A.kt)("td",{parentName:"tr",align:null},"object"),(0,A.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5c55\u793a\u5b9e\u4f53\u7684\u6620\u5c04\u3002")))))}c.isMDXComponent=!0},585:function(t,e){e.Z="data:image/png;base64,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"}}]);