"use strict";(self.webpackChunk_tkeel_docs=self.webpackChunk_tkeel_docs||[]).push([[7403],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return m}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return o?r.createElement(k,l(l({ref:t},s),{},{components:o})):r.createElement(k,l({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7062:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=o(3117),n=o(102),a=(o(7294),o(3905)),l=["components"],i={title:"Artisan",sidebar_position:20},p="Artisan",c={unversionedId:"developer_cookbook/tools/artisan",id:"developer_cookbook/tools/artisan",title:"Artisan",description:"\u8fd9\u662f\u6211\u4eec\u4e13\u95e8\u4e3a\u5f00\u53d1\u8005\u6253\u9020\u7684\u4e00\u6b3e\u7528\u4e8e\u751f\u6210\u9879\u76ee\u67b6\u6784\u548c\u4e00\u4e9b\u4ee3\u7801\u7684 CLI \u5de5\u5177\u3002",source:"@site/docs/developer_cookbook/tools/artisan.md",sourceDirName:"developer_cookbook/tools",slug:"/developer_cookbook/tools/artisan",permalink:"/en/developer_cookbook/tools/artisan",editUrl:"https://github.com/tkeel-io/docs/tree/main/docs/developer_cookbook/tools/artisan.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Artisan",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Don't Repeat Yourself",permalink:"/en/developer_cookbook/tools/do_not_repeat_youself"},next:{title:"IoTHub \u5feb\u901f\u5165\u95e8",permalink:"/en/developer_cookbook/iothub/getting_started"}},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",children:[{value:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee",children:[],level:3},{value:"\u521d\u59cb\u5316\uff0c\u4e0b\u8f7d\u5de5\u5177",id:"\u521d\u59cb\u5316\u4e0b\u8f7d\u5de5\u5177",children:[],level:3},{value:"\u91cd\u65b0\u751f\u6210 API \u4ee5\u53ca\u6587\u6863",id:"\u91cd\u65b0\u751f\u6210-api-\u4ee5\u53ca\u6587\u6863",children:[],level:3},{value:"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801",id:"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801",children:[],level:3},{value:"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801",id:"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801",children:[],level:3},{value:"\u751f\u6210 API \u7684\u5bf9\u5e94 Markdown",id:"\u751f\u6210-api-\u7684\u5bf9\u5e94-markdown",children:[],level:3},{value:"\u6dfb\u52a0\u65b0\u7684 protobuf \u670d\u52a1",id:"\u6dfb\u52a0\u65b0\u7684-protobuf-\u670d\u52a1",children:[],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"artisan"},"Artisan"),(0,a.kt)("p",null,"\u8fd9\u662f\u6211\u4eec\u4e13\u95e8\u4e3a\u5f00\u53d1\u8005\u6253\u9020\u7684\u4e00\u6b3e\u7528\u4e8e\u751f\u6210\u9879\u76ee\u67b6\u6784\u548c\u4e00\u4e9b\u4ee3\u7801\u7684 CLI \u5de5\u5177\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"go install github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest\n")),(0,a.kt)("h3",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"go")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf"},"protoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf-go"},"protoc-gen-go"))),(0,a.kt)("h2",{id:"\u4f7f\u7528\u65b9\u6cd5"},"\u4f7f\u7528\u65b9\u6cd5"),(0,a.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"artisan new github.com/tkeel-io/helloworld\n\ncd helloworld\n\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tkeel-io/tkeel-template-go"},"tkeel-io/tkeel-template-go"),"\u4e0a\u590d\u5236\u6a21\u677f\uff0c\u5e76\u4e14\u5c06\u5305\u66ff\u6362\u4e3a helloworld"),(0,a.kt)("p",null,"\u6b64\u65f6\u5df2\u7ecf\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u5e76\u8bbf\u95ee helloworld \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ cd helloworld\n$ go generate ./...\n$ go build -o ./bin/ ./...\n$ ./bin/helloworld\n")),(0,a.kt)("h3",{id:"\u521d\u59cb\u5316\u4e0b\u8f7d\u5de5\u5177"},"\u521d\u59cb\u5316\uff0c\u4e0b\u8f7d\u5de5\u5177"),(0,a.kt)("p",null,"\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\uff0c\u90a3\u4e48\u5fc5\u987b\u5148\u521d\u59cb\u5316\u5e76\u4e0b\u8f7d\u5de5\u5177\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Download necessary plug-ins\nmake init\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u811a\u672c\uff0c\u53ef\u4ee5\u4e0b\u8f7d protoc \u5de5\u5177\u5168\u5bb6\u6876\uff0c\u4ee5\u53ca protoc \u63d2\u4ef6\u548c\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -d -u  github.com/tkeel-io/tkeel-interface/openapi\ngo get -d -u  github.com/tkeel-io/kit\ngo get -d -u  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.0\ngo install  github.com/tkeel-io/tkeel-interface/tool/cmd/artisan@latest\ngo install  google.golang.org/protobuf/cmd/protoc-gen-go@v1.27.1\ngo install  google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.1.0\ngo install  github.com/tkeel-io/tkeel-interface/protoc-gen-go-http@latest\ngo install  github.com/tkeel-io/tkeel-interface/protoc-gen-go-errors@latest\ngo install  github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@v2.7.0\n")),(0,a.kt)("h3",{id:"\u91cd\u65b0\u751f\u6210-api-\u4ee5\u53ca\u6587\u6863"},"\u91cd\u65b0\u751f\u6210 API \u4ee5\u53ca\u6587\u6863"),(0,a.kt)("p",null,"\u5982\u679c\u4fee\u6539\u4e86 Proto \u5b9a\u4e49\uff0c\u90a3\u4e48\u5fc5\u987b\u91cd\u65b0\u751f\u6210\u5bf9\u5e94\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate proto source code\nmake api\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u811a\u672c\uff0c\u53ef\u4ee5\u8fd0\u884c protoc \u5de5\u5177\u6765\u751f\u6210\u5bf9\u5e94\u7684\u7ed3\u6784\u4f53\u4ee5\u53ca\u6587\u6863"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"protoc --proto_path=. \\\n       --proto_path=./third_party \\\n       --go_out=paths=source_relative:. \\\n       --go-http_out=paths=source_relative:. \\\n       --go-grpc_out=paths=source_relative:. \\\n       --go-errors_out=paths=source_relative:. \\\n       --openapiv2_out=./api/ \\\n       --openapiv2_opt=allow_merge=true \\\n       --openapiv2_opt=logtostderr=true \\\n       --openapiv2_opt=json_names_for_fields=false \\\n       $(API_PROTO_FILES)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-go_out=paths=source_relative:.")," \u751f\u6210 go \u7684\u7ed3\u6784\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--go-http_out=paths=source_relative:.")," \u751f\u6210\u5bf9\u5e94\u7684 http \u670d\u52a1\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--go-grpc_out=paths=source_relative:.")," \u751f\u6210\u5bf9\u5e94\u7684 grpc \u670d\u52a1\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--go-errors_out=paths=source_relative:.")," \u751f\u6210 errors \u7684\u7ed3\u6784\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-go_out=paths=source_relative:.")," \u751f\u6210 go \u7684\u7ed3\u6784\u4f53"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--openapiv2_out=./api/")," \u751f\u6210\u5bf9\u5e94\u7684 swagger \u6587\u6863")),(0,a.kt)("h3",{id:"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801"},"\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801"),(0,a.kt)("p",null,"\u5982\u679c\u4fee\u6539\u4e86 Proto \u670d\u52a1\u5b9a\u4e49\uff0c\u90a3\u4e48\u5fc5\u987b\u901a\u8fc7\u4ee5\u4e0b\u811a\u672c\u91cd\u65b0\u751f\u6210\u670d\u52a1\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate service template\nartisan proto service api/helloworld/v1/helloworld.proto -t pkg/service\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u907f\u514d\u4fee\u6539\u60a8\u7684\u4e1a\u52a1\u4ee3\u7801\uff0c\u8be5\u547d\u4ee4\u4e0d\u4f1a\u8986\u76d6\u60a8\u7684\u6587\u4ef6\u3002"))),(0,a.kt)("h3",{id:"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801"},"\u589e\u52a0\u6216\u5220\u9664\u670d\u52a1\u542f\u52a8\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)\nartisan proto server api/helloworld/v1/helloworld.proto\n")),(0,a.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u811a\u672c\uff0c\u53ef\u4ee5\u8f93\u51fa\u542f\u52a8\u4ee3\u7801\uff0c\u60a8\u53ef\u4ee5\u52a0\u5165\u4efb\u4f55\u5730\u65b9\u6765\u5b8c\u6210\u670d\u52a1\u7684\u542f\u52a8\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\ud83d\udcbb Add the following code to cmd/<project>.go  \ud83d\udc47:\n\nimport(\n    Greeter_v1 "github.com/tkeel-io/tkeeldemo/api/helloworld/v1"\n)\n\nGreeterSrv := service.NewGreeterService()\nGreeter_v1.RegisterGreeterHTTPServer(httpSrv.Container, GreeterSrv)\nGreeter_v1.RegisterGreeterServer(grpcSrv.GetServe(), GreeterSrv)\n')),(0,a.kt)("h3",{id:"\u751f\u6210-api-\u7684\u5bf9\u5e94-markdown"},"\u751f\u6210 API \u7684\u5bf9\u5e94 Markdown"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate API's makedown\nartisan markdown -f api/apidocs.swagger.json  -t third_party/markdown-templates/ -o ./docs/API/Greeter -m all\n")),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u65b0\u7684-protobuf-\u670d\u52a1"},"\u6dfb\u52a0\u65b0\u7684 protobuf \u670d\u52a1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u521b\u5efa\u65b0\u7684 proto")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate proto template\nartisan proto add api/helloworld/v1/helloworld.proto\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bf9\u5e94\u6587\u4ef6\uff08\u7ed3\u6784\u4f53\u3001\u6587\u6863\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate proto source code\nmake api\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bf9\u5e94\u670d\u52a1")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate service template\nartisan proto service api/helloworld/v1/helloworld.proto -t pkg/service\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210\u5bf9\u5e94\u542f\u52a8\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate server template (this output needs to be manually added to cmd/helloworld/main.go)\nartisan proto server api/helloworld/v1/helloworld.proto\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u542f\u52a8\u4ee3\u7801\u9700\u8981\u52a0\u5165\u60a8\u7684\u542f\u52a8\u51fd\u6570\u4e2d\u3002"))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"\u542f\u52a8\u4ee3\u7801")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Run the program\ngo run cmd/helloworld/main.go\n")))}u.isMDXComponent=!0}}]);