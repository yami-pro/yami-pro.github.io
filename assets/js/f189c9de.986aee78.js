"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=i(r),d=a,b=f["".concat(p,".").concat(d)]||f[d]||u[d]||l;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[f]="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64583:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={},o="\u5faa\u73af",c={unversionedId:"event-commands/flow/loop",id:"event-commands/flow/loop",title:"\u5faa\u73af",description:"\u5f53\u6ee1\u8db3\u6761\u4ef6\u65f6\u5c31\u4f1a\u91cd\u590d\u6267\u884c\u7684\u8bed\u53e5\u5757\uff0c\u5982\u679c\u903b\u8f91\u6709\u7f3a\u9677\u53ef\u80fd\u8fdb\u5165\u6b7b\u5faa\u73af\uff0c\u5bfc\u81f4\u6e38\u620f\u7a0b\u5e8f\u672a\u54cd\u5e94\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/003.event-commands/004.flow/003.loop.md",sourceDirName:"003.event-commands/004.flow",slug:"/event-commands/flow/loop",permalink:"/docs/event-commands/flow/loop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/003.event-commands/004.flow/003.loop.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5339\u914d",permalink:"/docs/event-commands/flow/switch"},next:{title:"\u904d\u5386",permalink:"/docs/event-commands/flow/forEach"}},p={},i=[],m={toc:i};function f(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5faa\u73af"},"\u5faa\u73af"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(10952).Z,width:"326",height:"206"})),(0,a.kt)("p",null,"\u5f53\u6ee1\u8db3\u6761\u4ef6\u65f6\u5c31\u4f1a\u91cd\u590d\u6267\u884c\u7684\u8bed\u53e5\u5757\uff0c\u5982\u679c\u903b\u8f91\u6709\u7f3a\u9677\u53ef\u80fd\u8fdb\u5165\u6b7b\u5faa\u73af\uff0c\u5bfc\u81f4\u6e38\u620f\u7a0b\u5e8f\u672a\u54cd\u5e94\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a21\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\u5168\u90e8\u6761\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u6ee1\u8db3\u4efb\u610f\u6761\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"\u6761\u4ef6\u5217\u8868",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5faa\u73af\u6761\u4ef6\uff1a",(0,a.kt)("a",{parentName:"li",href:"if"},"\u70b9\u51fb\u8df3\u8f6c"))))))}f.isMDXComponent=!0},10952:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAADOCAIAAADNITymAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNjVlNThhNC1iNzlkLTA1NGMtOWNhMy03OTYyOWQwOTI1OTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjIzMTQ3NTRBQzM4MTFFRDg2RERGMDc0RDBGOTFCRDMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjIzMTQ3NTNBQzM4MTFFRDg2RERGMDc0RDBGOTFCRDMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2NWU1OGE0LWI3OWQtMDU0Yy05Y2EzLTc5NjI5ZDA5MjU5NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiNjVlNThhNC1iNzlkLTA1NGMtOWNhMy03OTYyOWQwOTI1OTQiLz4gPC9y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"}}]);