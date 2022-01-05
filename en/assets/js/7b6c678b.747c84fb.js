"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[5666],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,k=d["".concat(i,".").concat(f)]||d[f]||s[f]||l;return t?r.createElement(k,c(c({ref:n},u),{},{components:t})):r.createElement(k,c({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,c=new Array(l);c[0]=d;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<l;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5949:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(3117),o=t(102),l=(t(7294),t(3905)),c=["components"],a={title:"Channel",sidebar_position:11},i=void 0,p={unversionedId:"developer_cookbook/core/specs/channel",id:"developer_cookbook/core/specs/channel",title:"Channel",description:"channel",source:"@site/docs/developer_cookbook/core/specs/channel.md",sourceDirName:"developer_cookbook/core/specs",slug:"/developer_cookbook/core/specs/channel",permalink:"/en/developer_cookbook/core/specs/channel",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/core/specs/channel.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Channel",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Actor",permalink:"/en/developer_cookbook/core/specs/actor"},next:{title:"\u6570\u636e\u6301\u4e45\u5316",permalink:"/en/developer_cookbook/core/specs/persistent-strategy"}},u=[{value:"channel",id:"channel",children:[{value:"channels",id:"channels",children:[],level:3},{value:"\u63d2\u4ef6\u901a\u8fc7 channel \u5b9e\u73b0\u5bf9 core \u7684\u5f02\u6b65\u8c03\u7528",id:"\u63d2\u4ef6\u901a\u8fc7-channel-\u5b9e\u73b0\u5bf9-core-\u7684\u5f02\u6b65\u8c03\u7528",children:[],level:3}],level:2}],s={toc:u};function d(e){var n=e.components,a=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"channel"},"channel"),(0,l.kt)("p",null,"\u5728\u7269\u8054\u7f51\u573a\u666f\u4e0b\uff0c\u6211\u4eec\u5f80\u5f80\u9700\u8981\u9762\u5bf9\u9ad8\u5e76\u53d1\uff0c\u9ad8\u541e\u5410\u91cf\u7684\u538b\u529b\uff0c\u4e3a\u4e86\u89c4\u907f\u56e0\u4e3a\u8fb9\u8f66\u548c\u7f51\u5173\u5e26\u6765\u7684\u989d\u5916\u7684\u8def\u7531\u5f00\u9500\uff0c\u6211\u4eec\u8bbe\u8ba1 ",(0,l.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u7684\u4e00\u7aef\u8fde\u63a5 core\uff0c\u4e00\u7aef\u8fde\u63a5 tKeel \u5e73\u53f0\u7684\u5176\u4ed6\u63d2\u4ef6\uff0c \u4ee5\u9002\u5e94\u7269\u8054\u7f51\u573a\u666f\u4e0b\u7684\u9ad8\u5e76\u53d1\u9ad8\u541e\u5410\u91cf\u6311\u6218\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"channel",src:t(1849).Z})),(0,l.kt)("p",null,"\u4e0a\u56fe\u4e2d\u6709\u4e09\u4e2a\u670d\u52a1\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Keel")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"tKeel")," \u5e73\u53f0\u7684\u7f51\u5173\uff0c\u4ee3\u7406\u6240\u6709\u63d2\u4ef6\u7684\u8bf7\u6c42\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"PluginA")," \u662f\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"tKeel")," \u5e73\u53f0\u7684\u63d2\u4ef6\uff0c PluginA \u60f3\u8981\u5411 Core\u53d1\u9001\u8bf7\u6c42\uff0c \u6309\u7167\u5e38\u89c4\u8c03\u7528\u94fe\u8def\uff0c\u5e94\u8be5\u662f\u56fe\u4e2d\u7684\u9ed1\u8272\u8fde\u7ebf\uff0c\u8bf7\u6c42\u7ecf\u8fc7 Keel \u8f6c\u53d1\u5230 Core\uff0c \u5bf9\u4e8e\u5e38\u89c4\u7684\u8bf7\u6c42\uff08\u5982\u5b9e\u4f53\u521b\u5efa\uff0c\u8ba2\u9605\u521b\u5efa\uff0c\u6620\u5c04\u5220\u9664\uff09\uff0c\u8fd9\u4e9b\u4f4e\u9891\u4e14\u4e0d\u8003\u8651\u5b9e\u65f6\u6027\u7684\u8bf7\u6c42\u662f\u53ef\u4ee5\u7684\uff0c\u4f46\u662f\u5bf9\u4e8e\u9ad8\u9891\u7684\u8bbe\u5907\u6d88\u606f\u8bf7\u6c42\uff0c\u4e00\u65b9\u9762\u4f1a\u589e\u52a0\u989d\u5916\u7684\u7f51\u7edc\u94fe\u8def\u5f00\u9500\uff0c\u53e6\u4e00\u65b9\u9762\u9ad8\u9891\u7684\u6570\u636e\u6d41\u4e5f\u4f1a\u589e\u52a0 Keel \u670d\u52a1\u8282\u70b9\u7684\u538b\u529b\u3002"),(0,l.kt)("p",null,"\u4e0a\u56fe\u4e2d\u7eff\u8272\u7684\u8fde\u7ebf\u662f\u8868\u793a\u901a\u8fc7 channel \u4f20\u8f93\u8bf7\u6c42\u7684\u94fe\u8def\u3002"),(0,l.kt)("h3",{id:"channels"},"channels"),(0,l.kt)("p",null,"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"channel"),", \u6211\u4eec\u7684\u5b9a\u4e49\u7684\u4ec5\u4ec5\u662f\u6570\u636e\u4f20\u8f93\u7684\u901a\u9053\uff0c\u5728\u5b9e\u73b0\u65f6\u6839\u636e\u5177\u4f53\u573a\u666f\u53ef\u4ee5\u662f\u591a\u6837\u7684\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5c06 channel\u5b9e\u73b0\u4e3a\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TCP \u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},"MQ"),(0,l.kt)("li",{parentName:"ul"},"RPC"),(0,l.kt)("li",{parentName:"ul"},"GRPC")),(0,l.kt)("h3",{id:"\u63d2\u4ef6\u901a\u8fc7-channel-\u5b9e\u73b0\u5bf9-core-\u7684\u5f02\u6b65\u8c03\u7528"},"\u63d2\u4ef6\u901a\u8fc7 channel \u5b9e\u73b0\u5bf9 core \u7684\u5f02\u6b65\u8c03\u7528"),(0,l.kt)("p",null,"\u5728core\u5185\u90e8\u5b58\u5728\u4e00\u4e2a\u63d2\u4ef6\u7684\u5b9e\u4f53\uff0c\u63d2\u4ef6\u5b9e\u4f53\u5185\u6709\u5f88\u591a\u5c5e\u6027\uff0c\u5c5e\u6027\u540d\u79f0\u5c31\u662f\u63d2\u4ef6\u8c03\u7528\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u6267\u884c\u540e\u7684\u8fd4\u56de\u503c\u5c31\u5b58\u5728\u63d2\u4ef6\u5b9e\u4f53\u5185\u3002"))}d.isMDXComponent=!0},1849:function(e,n,t){n.Z=t.p+"assets/images/channel-a816bb6f6d9d8b76c360a4a776c5e355.png"}}]);