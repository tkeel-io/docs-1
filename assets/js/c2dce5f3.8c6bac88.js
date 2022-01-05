"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[1408],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,A=function(e,t){if(null==e)return{};var n,r,A={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,A=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=o(n),m=A,u=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,A=t&&t.mdxType;if("string"==typeof e||A){var l=n.length,i=new Array(l);i[0]=s;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:A,i[1]=a;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1420:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return d},default:function(){return s}});var r=n(3117),A=n(102),l=(n(7294),n(3905)),i=["components"],a={title:"\u6a21\u578b",sidebar_position:3},p=void 0,o={unversionedId:"developer_cookbook/core/specs/model",id:"developer_cookbook/core/specs/model",title:"\u6a21\u578b",description:"Model",source:"@site/docs/developer_cookbook/core/specs/model.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/model",permalink:"/developer_cookbook/core/specs/model",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/model.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u6a21\u578b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u6620\u5c04",permalink:"/developer_cookbook/core/specs/mapper"},next:{title:"\u5173\u7cfb",permalink:"/developer_cookbook/core/specs/relationship"}},d=[{value:"Model",id:"model",children:[],level:2},{value:"Roadmap",id:"roadmap",children:[],level:2},{value:"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53",id:"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53",children:[],level:2},{value:"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb",id:"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb",children:[],level:2},{value:"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f",id:"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f",children:[],level:2},{value:"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316",id:"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316",children:[],level:2},{value:"\u6a21\u578b\u5b9e\u73b0",id:"\u6a21\u578b\u5b9e\u73b0",children:[{value:"Define \u5185\u7f6e\u5b57\u6bb5",id:"define-\u5185\u7f6e\u5b57\u6bb5",children:[],level:3}],level:2},{value:"Example",id:"example",children:[],level:2}],c={toc:d};function s(e){var t=e.components,a=(0,A.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"model"},"Model"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"model \u4f5c\u4e3a\u5b9e\u4f53\u5b58\u5728\uff0c model \u662f\u5bf9 Entity \u7684\u7ea6\u675f\u5b9a\u4e49\uff0c\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u53ef\u4ee5\u5b58\u5728\u7ee7\u627f\u5173\u7cfb\u4ece\u800c\u5efa\u7acb\u7ea6\u675f\u529b\u3002")),(0,l.kt)("h2",{id:"roadmap"},"Roadmap"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u5b9e\u4f53"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u662f\u5b9e\u4f53\u5c5e\u6027\u7ea6\u675f\u7684\u5b9a\u4e49\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u5b9a\u4e49",(0,l.kt)("inlineCode",{parentName:"li"},"\u7ee7\u627f"),"\u5173\u7cfb\u5b9e\u73b0\u7ea6\u675f\u529b\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6a21\u578b\u652f\u6301\u672c\u5730\u5316\uff0c\u5b9e\u4f53\u7684\u7ea6\u675f\u6761\u4ef6\u53ef\u4ee5\u5728\u6a21\u578b\u7684\u57fa\u7840\u4e0a\u7279\u5316\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b9e\u4f53\u53ef\u4ee5\u4e0d\u7ee7\u627f\u4efb\u4f55\u6a21\u578b\u3002")),(0,l.kt)("h2",{id:"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53"},"\u6a21\u578b\u662f\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53"),(0,l.kt)("p",null,"\u6a21\u578b\u662f\u5177\u6709\u7279\u5b9a\u7c7b\u578b\u7684\u5b9e\u4f53\uff0c\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"\u8bbe\u5907"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u7a7a\u95f4"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u8ba2\u9605"),"\u4e00\u6837\u90fd\u662f\u5b9e\u4f53\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"model-is-entity",src:n(7424).Z})),(0,l.kt)("h2",{id:"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb"},"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u7684\u5173\u7cfb"),(0,l.kt)("p",null,"\u6a21\u578b\u548c\u5b9e\u4f53\u4e4b\u95f4\u53ef\u4ee5\u5b58\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ee7\u627f")," ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5173\u7cfb"),"\uff0c\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"\u7ee7\u627f"),"\u6765\u5b8c\u6210\u6a21\u578b\u5bf9\u5b9e\u4f53\u7684\u7ea6\u675f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-extends-model",src:n(4172).Z})),(0,l.kt)("h2",{id:"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f"},"\u6a21\u578b\u5141\u8bb8\u591a\u7ee7\u627f"),(0,l.kt)("p",null,"\u540c\u4e00\u4e2a\u5b9e\u4f53\u7684\u7ea6\u675f\u6761\u4ef6\u53ef\u80fd\u662f\u6765\u81ea\u591a\u4e2a\u6a21\u578b\uff0c\u6211\u4eec\u5bf9\u8fd9\u4e9b\u6a21\u578b\u7ea6\u675f\u8fdb\u884c\u5408\u5e76\uff0c\u5408\u5e76\u7684\u7ed3\u679c\u4f5c\u4e3a\u5b9e\u4f53\u7684\u7ea6\u675f\u6761\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-multiple-extends-models",src:n(1237).Z})),(0,l.kt)("h2",{id:"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316"},"\u6a21\u578b\u7ea6\u675f\u5141\u8bb8\u672c\u5730\u5316"),(0,l.kt)("p",null,"\u4e3a\u4e86\u6ee1\u8db3\u5b9e\u4f53\u7279\u5b9a\u7684\u7ea6\u675f\uff0c\u6211\u4eec\u5141\u8bb8\u5b9e\u4f53\u5728\u7ee7\u627f\u6a21\u578b\u7684\u57fa\u7840\u4e0a\u5b9a\u4e49\u672c\u5730\u5316\u7ea6\u675f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"entity-extends-model-add-local-constraints",src:n(3924).Z})),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u5316\u7ea6\u675f"),"\u5176\u5b9e\u548c\u6a21\u578b\u7684\u7ee7\u627f\u5173\u7cfb\u662f\u7edf\u4e00\u7684\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"\u672c\u5730\u5316\u7ea6\u675f"),"\u5c31\u50cf\u662f\u5b9e\u4f53\u672c\u5730\u7684\u4e00\u4e2a\u6a21\u578b\uff0c\u53ea\u80fd\u88ab\u5f53\u524d\u5b9e\u4f53\u7ee7\u627f\u3002"),(0,l.kt)("h2",{id:"\u6a21\u578b\u5b9e\u73b0"},"\u6a21\u578b\u5b9e\u73b0"),(0,l.kt)("p",null,"\u6a21\u578b\u662f\u5b9e\u4f53\uff0c\u6a21\u578b\u4e5f\u5177\u6709\u5c5e\u6027\uff0c\u662fk-v\u7684\uff0c\u6a21\u578b\u7684\u5c5e\u6027\u7528\u4e8e\u63cf\u8ff0\u7ee7\u627f\u8be5\u6a21\u578b\u7684\u5c5e\u6027\u7684\u7ea6\u675f\u6761\u4ef6\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-go"},'type Config struct {\n    ID                string                 `json:"id" mapstructure:"id"`\n    Type              string                 `json:"type" mapstructure:"type"`\n    Weight            int                    `json:"weight" mapstructure:"weight"`\n    Enabled           bool                   `json:"enabled" mapstructure:"enabled"`\n    EnabledSearch     bool                   `json:"enabled_search" mapstructure:"enabled_search"`\n    EnabledTimeSeries bool                   `json:"enabled_time_series" mapstructure:"enabled_time_series"`\n    Description       string                 `json:"description" mapstructure:"description"`\n    Define            map[string]interface{} `json:"define" mapstructure:"define"`\n    LastTime          int64                  `json:"last_time" mapstructure:"last_time"`\n}\n\n// ID: \u5c5e\u6027 ID \u6216\u8005\u5d4c\u5957\u5c5e\u6027\u7684 ID\u3002\n// Type: \u5c5e\u6027\u7684\u7c7b\u578b\uff0c\u5982 int, float32, string \u7b49\u3002\n// Weight: \u5c5e\u6027\u914d\u7f6e\u7684\u6743\u91cd\u3002\n// Enabled: \u51b3\u5b9a\u5c5e\u6027\u662f\u5426\u542f\u7528\uff0c\u9ed8\u8ba4true\u3002\n// EnabledSearch: \u914d\u7f6e\u5c5e\u6027\u662f\u5426\u6301\u4e45\u5316\u5230\u641c\u7d22\u5f15\u64ce\u3002\n// EnabledTimeSeries: \u914d\u7f6e\u5c5e\u6027\u662f\u5426\u6301\u4e45\u5316\u5230\u65f6\u5e8f\u6570\u636e\u5e93\u3002\n// Description: \u5173\u4e8e\u5c5e\u6027\u7684\u63cf\u8ff0\u4fe1\u606f\u3002\n// Define: \u5173\u4e8e\u4e0d\u540c\u7c7b\u578b\u7684\u5c5e\u6027\u914d\u7f6e\u4fe1\u606f\u3002\n// LastTime: \u5c5e\u6027\u914d\u7f6e\u7684\u6700\u540e\u66f4\u65b0\u65f6\u95f4\u3002\n')),(0,l.kt)("h3",{id:"define-\u5185\u7f6e\u5b57\u6bb5"},"Define \u5185\u7f6e\u5b57\u6bb5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9002\u7528\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u7684\u6700\u5927\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u7684\u6700\u5c0f\u503c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"length"),(0,l.kt)("td",{parentName:"tr",align:null},"string, array"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5c5e\u6027\u7684size\u3002")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"\u901a\u8fc7\u6a21\u578b\u521b\u5efa\u5b9e\u4f53\uff0c",(0,l.kt)("a",{parentName:"p",href:"/developer_cookbook/core/tutorial/iot-create-entity-from-model"},"\u8be6\u60c5\u8bf7\u67e5\u770b")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5177\u6709\u6a21\u578b\u7ea6\u675f\u7684\u8bbe\u5907\u5b9e\u4f53\u793a\u4f8b\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# device entity\n{\n    "id": "device123",\n    "source": "dm",\n    "owner": "admin",\n    "type": "DEVICE",\n    "configs": {\n        "temp": {\n            "define": {\n                "max": 500,\n                "min": 10,\n                "unit": "\xb0"\n            },\n            "description": "",\n            "enabled": true,\n            "enabled_search": false,\n            "enabled_time_series": false,\n            "id": "temp",\n            "last_time": 0,\n            "type": "int",\n            "weight": 0\n        }\n    },\n    "properties": {\n        "status": "end",\n        "temp": 20\n    }\n}\n')))}s.isMDXComponent=!0},3924:function(e,t,n){t.Z=n.p+"assets/images/entity-extends-model-add-local-constraints-175665dbaa561b64b2b39a0257f4b2dd.png"},4172:function(e,t,n){t.Z=n.p+"assets/images/entity-extends-model-3f68adc6358111be972182a1e581b8c8.png"},1237:function(e,t){t.Z="data:image/png;base64,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"},7424:function(e,t){t.Z="data:image/png;base64,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"}}]);