"use strict";(self.webpackChunkpisanix=self.webpackChunkpisanix||[]).push([[61],{3905:function(n,e,t){t.d(e,{Zo:function(){return d},kt:function(){return y}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=r.createContext({}),l=function(n){var e=r.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=l(n.components);return r.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,p=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),u=l(t),y=o,m=u["".concat(p,".").concat(y)]||u[y]||c[y]||a;return t?r.createElement(m,s(s({ref:e},d),{},{components:t})):r.createElement(m,s({ref:e},d))}));function y(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=n,i.mdxType="string"==typeof n?n:o,s[1]=i;for(var l=2;l<a;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1457:function(n,e,t){t.r(e),t.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={sidebar_position:2},p="\u5355\u72ec\u90e8\u7f72 Pisa-Proxy",l={unversionedId:"UseCases/standalone",id:"UseCases/standalone",title:"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy",description:"Pisa-Proxy \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a",source:"@site/docs/UseCases/standalone.md",sourceDirName:"UseCases",slug:"/UseCases/standalone",permalink:"/docs/UseCases/standalone",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5728 Kubernetes \u4e2d\u90e8\u7f72",permalink:"/docs/UseCases/kubernetes"}},d={},c=[{value:"\u90e8\u7f72\u8bf4\u660e",id:"\u90e8\u7f72\u8bf4\u660e",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:3},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:3},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:3},{value:"\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406",id:"\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406",level:4},{value:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861",id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861",level:4}],u={toc:c};function y(n){var e=n.components,i=(0,o.Z)(n,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5355\u72ec\u90e8\u7f72-pisa-proxy"},"\u5355\u72ec\u90e8\u7f72 Pisa-Proxy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy"))," \u4f5c\u4e3a\u9ad8\u6027\u80fd\u4ee3\u7406\u4e0d\u4ec5\u53ef\u4ee5\u5728 kubernetes \u4e2d\u4ee5 Sidecar \u7684\u65b9\u5f0f\u90e8\u7f72\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u7edf\u4e00\u63a5\u5165\u5c42\u5355\u72ec\u90e8\u7f72\u5728 kubernetes \u4e4b\u5916\u7684\u670d\u52a1\u5668\u4e0a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"single.png",src:t(8238).Z,width:"841",height:"431"})),(0,a.kt)("p",null,"\u76ee\u524d",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy")),"\u652f\u6301 MySQL \u534f\u8bae\uff0c\u65e0\u8bba\u540e\u7aef\u662f\u4e91\u4e0a\u7684 RDS \u5b9e\u4f8b\uff0c\u8fd8\u662f\u81ea\u5efa\u7684 MySQL\u3001ShardingSphere\u3001TiDB \u7b49\uff0c\u90fd\u53ef\u4ee5\u7531 Pisa-Proxy \u7edf\u4e00\u6d41\u91cf\u5206\u53d1\uff0c\u5b9e\u73b0\u65e0\u611f\u7684\u9ad8\u53ef\u7528\u5207\u6362\u3001\u9762\u5411 SQL \u7684\u53ef\u89c2\u6d4b\u6027\u7b49\u3002"),(0,a.kt)("h2",{id:"\u90e8\u7f72\u8bf4\u660e"},"\u90e8\u7f72\u8bf4\u660e"),(0,a.kt)("p",null,"Pisa-Proxy \u652f\u6301\u4ece\u914d\u7f6e\u6587\u4ef6\u548c Remote API \u83b7\u53d6\u914d\u7f6e\u3002\u5728\u5f53\u524d\u7248\u672c,\u82e5\u9700\u8981\u4ece\u672c\u5730\u6587\u4ef6\u52a0\u8f7d\u914d\u7f6e\u9700\u8981\u5bfc\u51fa ",(0,a.kt)("inlineCode",{parentName:"p"},"LOCAL_CONFIG=true")," \u73af\u5883\u53d8\u91cf\uff0c\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"-c\uff0c--config")," \u53c2\u6570\u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002\u82e5\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"./etc/config.toml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u52a0\u8f7d\u3002Pisa-Proxy \u652f\u6301\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\u8fdb\u884c\u670d\u52a1\u542f\u52a8\u914d\u7f6e\u3002\u914d\u7f6e\u8be6\u89e3\u5982\u4e0b\uff1a"),(0,a.kt)("h3",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./pisa-proxy -h\nPisa-Proxy \n\nUSAGE:\n    pisa-proxy [OPTIONS]\n\nOPTIONS:\n    -c, --config <config>         Config path               # \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\n    -h, --help                    Print help information    # \u67e5\u770b\u4f7f\u7528\u5e2e\u52a9\n        --log-level <loglevel>    Log level                 # \u6307\u5b9a\u65e5\u5fd7\u7ea7\u522b\n    -p, --port <port>             Http port                 # \u6307\u5b9a api \u7aef\u53e3\u53f7\n")),(0,a.kt)("h3",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u73af\u5883\u53d8\u91cf\u5305\u62ec\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"PORT: HTTP \u670d\u52a1\u542f\u52a8\u7aef\u53e3\u53f7"),(0,a.kt)("li",{parentName:"ol"},"LOG_LEVEL: \u65e5\u5fd7\u7ea7\u522b"),(0,a.kt)("li",{parentName:"ol"},"LOCAL_CONFIG: \u6307\u5b9a Pisa-Proxy \u4ece\u672c\u5730\u52a0\u8f7d\u914d\u7f6e")),(0,a.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# api \u914d\u7f6e\u5757\uff0c\u5bf9\u5e94\u547d\u4ee4\u884c\u53c2\u6570\u548c\u73af\u5883\u53d8\u91cf\n[admin]\n# api \u7aef\u53e3\nport = "8081"\n# \u65e5\u5fd7\u7ea7\u522b\nlog_level = "INFO"\n\n# pisa-proxy \u4ee3\u7406\u914d\u7f6e\u5757\n[proxy]\n# config a proxy\n[[proxy.config]]\n# proxy \u4ee3\u7406\u5730\u5740\nlisten_addr = "0.0.0.0:9088"\n# proxy \u8ba4\u8bc1\u7528\u6237\u540d\nuser = "root"\n# proxy \u8ba4\u8bc1\u5bc6\u7801\npassword = "12345678"\n# proxy schema\ndb = "test"\n# \u914d\u7f6e\u540e\u7aef\u6570\u636e\u6e90\u7c7b\u578b\nbackend_type = "mysql"\n# proxy \u4e0e\u540e\u7aef\u6570\u636e\u5e93\u5efa\u8fde\u8fde\u63a5\u6c60\u5927\u5c0f\uff0c\u503c\u8303\u56f4\uff1a1 ~ 255, \u9ed8\u8ba4\u503c\uff1a64\npool_size = 3\n\n# \u540e\u7aef\u8d1f\u8f7d\u5747\u8861\u914d\u7f6e\n[proxy.config.simple_loadbalance]\n# \u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff1a[random/roundrobin], \u9ed8\u8ba4\u503c: random \u7b97\u6cd5\nbalance_type = "random"\n# \u9009\u62e9\u6302\u8f7d\u540e\u7aef\u8282\u70b9\nnodes = ["ds001"]\n\n# \u540e\u7aef\u6570\u636e\u6e90\u914d\u7f6e\n[mysql]\n[[mysql.node]]\n# \u6570\u636e\u6e90 name\nname = "ds001"\n# database name\ndb = ""\n# \u6570\u636e\u5e93 user\nuser = "root"\n# \u6570\u636e\u5e93 password\npassword = "root"\n# \u6570\u636e\u5e93\u5730\u5740\nhost = "127.0.0.1"\n# \u6570\u636e\u5e93\u7aef\u53e3\nport = 3307\n')),(0,a.kt)("h3",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,a.kt)("h4",{id:"\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406"},"\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[admin]\nport = "8081"\nlog_level = "INFO"\n\n[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9088"\nuser = "root"\npassword = "12345678"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001"]\n\n[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9089"\nuser = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001"]\n\n[mysql]\n[[mysql.node]]\nname = "ds001"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3307\n')),(0,a.kt)("h4",{id:"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861"},"\u914d\u7f6e\u540e\u7aef\u6570\u636e\u5e93\u8d1f\u8f7d\u5747\u8861"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[proxy]\n[[proxy.config]]\nlisten_addr = "0.0.0.0:9089"\nuser = "root"\npassword = "root"\ndb = "test"\nbackend_type = "mysql"\npool_size = 3\n\n[proxy.config.simple_loadbalance]\nbalance_type = "random"\nnodes = ["ds001", "ds002"]\n\n[mysql]\n[[mysql.node]]\nname = "ds001"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3307\n\n[[mysql.node]]\nname = "ds002"\ndb = "test"\nuser = "root"\npassword = "root"\nhost = "127.0.0.1"\nport = 3308\n')),(0,a.kt)("p",null,"\u5728\u90e8\u7f72 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Pisa-Proxy"))," \u540e\u5373\u53ef\u4f7f\u7528\u5e94\u7528\u6839\u636e\u914d\u7f6e\u4fe1\u606f\u8fdb\u884c\u8bbf\u95ee\u3002"))}y.isMDXComponent=!0},8238:function(n,e,t){e.Z=t.p+"assets/images/single-b33d2c8fd40d86198ea10d6dfa71ee0d.png"}}]);