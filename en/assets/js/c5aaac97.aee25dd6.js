"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5520],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"API \u4ecb\u7ecd",sidebar_position:10},p=void 0,u={unversionedId:"api/api_usage",id:"api/api_usage",title:"API \u4ecb\u7ecd",description:"TKeel \u7269\u8054\u7f51\u5e73\u53f0\u5411\u7528\u6237\u5f00\u653e\u6240\u6709\u8d44\u6e90\u64cd\u4f5c\u76f8\u5173\u7684 API ,\u5f97\u76ca\u4e8e\u63d2\u4ef6\u5316\u7684\u6846\u67b6\uff0c \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u989d\u5916\u7684 API \u6269\u5c55 TKeel \u7269\u8054\u7f51\u5e73\u53f0\uff0c \u800c\u4e0d\u5c40\u9650\u4e8e TKeel \u6838\u5fc3 API \u63d0\u4f9b\u7684\u529f\u80fd\u3002",source:"@site/docs/api/api_usage.md",sourceDirName:"api",slug:"/api/api_usage",permalink:"/en/api/api_usage",draft:!1,editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/api/api_usage.md",tags:[],version:"current",lastUpdatedAt:1655365518,formattedLastUpdatedAt:"6/16/2022",sidebarPosition:10,frontMatter:{title:"API \u4ecb\u7ecd",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Artisan",permalink:"/en/develop_guide/tools/artisan"},next:{title:"API\u5217\u8868",permalink:"/en/api/api_list"}},s={},c=[{value:"API\u8bbf\u95ee\u65b9\u5f0f",id:"api\u8bbf\u95ee\u65b9\u5f0f",level:2},{value:"\u8bbf\u95ee\u63a7\u5236",id:"\u8bbf\u95ee\u63a7\u5236",level:2},{value:"\u5982\u4f55\u8bf7\u6c42 API",id:"\u5982\u4f55\u8bf7\u6c42-api",level:2},{value:"1. \u83b7\u53d6 API \u8bbf\u95ee Token",id:"1-\u83b7\u53d6-api-\u8bbf\u95ee-token",level:3},{value:"2. \u8c03\u7528 API",id:"2-\u8c03\u7528-api",level:3},{value:"API \u5217\u8868",id:"api-\u5217\u8868",level:2}],d={toc:c};function k(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"TKeel \u7269\u8054\u7f51\u5e73\u53f0\u5411\u7528\u6237\u5f00\u653e\u6240\u6709\u8d44\u6e90\u64cd\u4f5c\u76f8\u5173\u7684 API ,\u5f97\u76ca\u4e8e\u63d2\u4ef6\u5316\u7684\u6846\u67b6\uff0c \u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u989d\u5916\u7684 API \u6269\u5c55 TKeel \u7269\u8054\u7f51\u5e73\u53f0\uff0c \u800c\u4e0d\u5c40\u9650\u4e8e TKeel \u6838\u5fc3 API \u63d0\u4f9b\u7684\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"api\u8bbf\u95ee\u65b9\u5f0f"},"API\u8bbf\u95ee\u65b9\u5f0f"),(0,i.kt)("p",null,"\u5e73\u53f0\u63d0\u4f9b\u7684\u63d2\u4ef6 API \u4e00\u822c\u683c\u5f0f\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"https://<Host>:<port>/apis/<pluginID>/<pluginHTTPEndpoint>"),"\u3002\n\u5176\u4e2d\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Host>:<port>")," \u4ee3\u8868\u5e73\u53f0\u63d0\u4f9b\u670d\u52a1\u7684\u5730\u5740\uff0c\u7531\u5b89\u88c5\u90e8\u5206\u7684\u914d\u7f6e\u51b3\u5b9a"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<pluginID>")," \u4ee3\u8868\u63d2\u4ef6\u540d\u79f0\uff0c\u4f8b\u5982\u8d1f\u8d23\u7528\u6237\u7ba1\u7406\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"rudder"),"\u3001\u8d1f\u8d23\u8bbe\u5907\u7ba1\u7406\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"device")," \u7b49\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<pluginHTTPEndpoint>")," \u4ee3\u8868\u63d2\u4ef6\u63d0\u4f9b\u7684\u5177\u4f53\u8def\u5f84\uff0c\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("a",{parentName:"li",href:"/en/api/api_list"},"API \u5217\u8868"),"\u67e5\u770b\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u662f API \u7684\u63cf\u8ff0\uff0cTKeel \u5df2\u7ecf\u63d0\u4f9b\u4e86\u5982\u4e0b\u63d2\u4ef6(\u5982\uff1a rudder keel core device\u7b49)\u4ee5\u53ca\u63d2\u4ef6\u7684 HTTP Endpoint ",(0,i.kt)("a",{parentName:"p",href:"/en/api/api_list"},"API \u5217\u8868")))),(0,i.kt)("p",null,"\u8bf7\u6c42\u7684\u6574\u4f53\u6d41\u7a0b\u5982\u56fe\u6240\u793a\uff1a"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"api_usage",src:n(79780).Z,width:"1046",height:"641"})),(0,i.kt)("h2",{id:"\u8bbf\u95ee\u63a7\u5236"},"\u8bbf\u95ee\u63a7\u5236"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9274\u4e8e\u5e73\u53f0\u5b89\u5168\u4f53\u7cfb\uff0c\u4f1a\u5bf9 API \u7684\u8bf7\u6c42\u505a\u8bbf\u95ee\u63a7\u5236\uff0c\u5373\u5bf9\u7528\u6237\u7684 API \u8bf7\u6c42\u8fdb\u884c\u9274\u6743\uff0c\u9274\u6743\u7684\u65b9\u5f0f\u662f\u901a\u8fc7\u5bf9 HTTP \u8bf7\u6c42\u4e2d\u7684 Header \u7684 Authorization \u5b57\u6bb5\u7684\u503c\u8fdb\u884c\u9a8c\u8bc1\u3002\u9a8c\u8bc1\u4e0d\u901a\u8fc7\u5219\u4e3a\u975e\u6cd5\u8bf7\u6c42\uff0c\u8fd4\u56de UnAuthorized \u9519\u8bef\u4fe1\u606f\u3002\n\u6240\u4ee5\u5728\u8c03\u7528 API \u4e4b\u524d\uff0c\u5148\u901a\u8fc7 ",(0,i.kt)("a",{parentName:"li",href:"https://docs.tkeel.io/api/rudder/method_OauthToken"},"OAuth Token \u63a5\u53e3")," \u83b7\u53d6 API \u8bbf\u95ee Token<access_token>\u3002\n<access_token> \u5c06\u4f5c\u4e3a http header\uff0c\u5305\u542b\u5728\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u4e2d\u53d1\u9001\uff0c\u8bf7\u6c42\u5934 key \u4e3a Authorization\uff0cvalue \u4e3a Bearer <access_token>\u3002")),(0,i.kt)("p",null,"HTTP Authorization \u8bf7\u6c42\u5934\u683c\u5f0f\uff08\u4e0d\u5305\u542b\u5c16\u62ec\u53f7\uff09:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Authorization: Bearer <access_token>\n")),(0,i.kt)("h2",{id:"\u5982\u4f55\u8bf7\u6c42-api"},"\u5982\u4f55\u8bf7\u6c42 API"),(0,i.kt)("h3",{id:"1-\u83b7\u53d6-api-\u8bbf\u95ee-token"},"1. \u83b7\u53d6 API \u8bbf\u95ee Token"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://<tkeel.io>:30707/apis/security/v1/oauth/<tenant_id>/token?grant_type=password&username=<username>&password=<password>'\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "code": "io.tkeel.SUCCESS",\n  "msg": "",\n  "data": {\n    "@type": "type.googleapis.com/io.tkeel.security.api.oauth.v1.TokenResponse",\n    "access_token": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0a2VlbCIsImV4cCI6MTY1NTIwMTkzNCwic3ViIjoidXNyLWFmNDEzNWMwYzZlMWU0M2QyNDgyYzU0Y2VjOTIifQ.9Mc_AgVXpk_CW5MZuMSV2ux4D6qxlH4vU3DE6JhsCn22WTakvhLvqQqLa1HTaZXE5S-SBviPhWFSFk2gmyqDvw",\n    "refresh_token": "NDY2ZMZMNMMTNJI2MI01YWVKLTK3NMYTZGM0YWZMOWNMMZQ1",\n    "expires_in": "7200",\n    "token_type": "Bearer",\n    "redirect_url": ""\n  }\n}\n\n')),(0,i.kt)("h3",{id:"2-\u8c03\u7528-api"},"2. \u8c03\u7528 API"),(0,i.kt)("p",null,"\u4ee5\u8c03\u7528\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"<security>")," \u7684\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPEndpoint </v1/oauth/authenticate>")," \u4e3a\u4f8b\uff1a "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Request")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://<tkeel.io>:30707/apis/security/v1/oauth/authenticate' \\\n--header 'Authorization: Bearer <access_token>'\n \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Response")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": "io.tkeel.SUCCESS",\n    "msg": "",\n    "data": {\n        "@type": "type.googleapis.com/io.tkeel.security.api.oauth.v1.AuthenticateResponse",\n        "expires_in": "7200",\n        "user_id": "usr-af4135c0c6e1e43d2482c54cec92",\n        "username": "admin",\n        "external_id": "",\n        "nick_name": "",\n        "avatar": "",\n        "tenant_id": "yLGoEQ0Y",\n        "auth_type": "internal"\n    }\n}\n\n')),(0,i.kt)("h2",{id:"api-\u5217\u8868"},"API \u5217\u8868"),(0,i.kt)("p",null,"\u5b8c\u6574\u7684 API \u5185\u5bb9\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"/en/api/api_list"},"API \u5217\u8868"),"\u3002"))}k.isMDXComponent=!0},79780:function(e,t,n){t.Z=n.p+"assets/images/api_usage-c79d0181b454ee3817bddbb61578eb43.png"}}]);