"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7793],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=i,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={},o="\u754c\u9762 - \u5bf9\u8bdd\u6846",l={unversionedId:"inspectors/ui/ui-dialogbox",id:"inspectors/ui/ui-dialogbox",title:"\u754c\u9762 - \u5bf9\u8bdd\u6846",description:"\u5bf9\u8bdd\u6846\u5c5e\u6027",source:"@site/docs/002.inspectors/003.ui/006.ui-dialogbox.md",sourceDirName:"002.inspectors/003.ui",slug:"/inspectors/ui/ui-dialogbox",permalink:"/docs/inspectors/ui/ui-dialogbox",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/002.inspectors/003.ui/006.ui-dialogbox.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u754c\u9762 - \u6587\u672c\u6846",permalink:"/docs/inspectors/ui/ui-textbox"},next:{title:"\u754c\u9762 - \u8fdb\u5ea6\u6761",permalink:"/docs/inspectors/ui/ui-progressbar"}},u={},p=[{value:"\u5bf9\u8bdd\u6846\u5c5e\u6027",id:"\u5bf9\u8bdd\u6846\u5c5e\u6027",level:3}],c={toc:p};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u754c\u9762---\u5bf9\u8bdd\u6846"},"\u754c\u9762 - \u5bf9\u8bdd\u6846"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(49413).Z,width:"345",height:"387"})),(0,i.kt)("h3",{id:"\u5bf9\u8bdd\u6846\u5c5e\u6027"},"\u5bf9\u8bdd\u6846\u5c5e\u6027"),(0,i.kt)("p",null,"\u53ef\u901a\u8fc7<\u8bbe\u7f6e\u5bf9\u8bdd\u6846>\u4e8b\u4ef6\u6307\u4ee4\u4fee\u6539\u5bf9\u8bdd\u6846\u5c5e\u6027\uff0c\u901a\u8fc7<\u63a7\u5236\u5bf9\u8bdd\u6846>\u4e8b\u4ef6\u6307\u4ee4\u63a7\u5236\u5bf9\u8bdd\u6846\u6253\u5370"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5185\u5bb9\uff1a\u5143\u7d20\u7684\u6587\u672c\u5185\u5bb9\uff0c\u652f\u6301\u5bcc\u6587\u672c\u6807\u7b7e\uff0c\u70b9\u51fb\u53f3\u952e\u83dc\u5355->\u6807\u7b7e\uff0c\u63d2\u5165\u5bcc\u6587\u672c\u6807\u7b7e"),(0,i.kt)("li",{parentName:"ul"},"\u6253\u5370\u95f4\u9694\uff1a\u5982\u679c\u8bbe\u7f6e\u4e3a0\uff0c\u76f4\u63a5\u6253\u5370\u6240\u6709\u6587\u5b57\uff0c\u5426\u5219\u6309\u7167\u95f4\u9694\u6301\u7eed\u6253\u5370\u6587\u5b57\uff0c\u76f4\u5230\u6253\u5370\u7ed3\u675f\u6216\u8005\u5f53\u524d\u9875\u9762\u88ab\u586b\u6ee1"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u4f53\u5927\u5c0f\uff1a\u6587\u672c\u5b57\u4f53\u5927\u5c0f(10 ~ 400)\uff0c\u53ef\u4ee5\u4f7f\u7528\u5bcc\u6587\u672c\u6807\u7b7e\u4fee\u6539"),(0,i.kt)("li",{parentName:"ul"},"\u884c\u95f4\u8ddd\uff1a\u6587\u672c\u884c\u7684\u95f4\u9694\u8ddd\u79bb(\u5355\u4f4d\uff1a\u50cf\u7d20)"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u95f4\u8ddd\uff1a\u540c\u4e00\u884c\u6bcf\u4e2a\u6587\u5b57\u7684\u95f4\u9694\u8ddd\u79bb(\u5355\u4f4d\uff1a\u50cf\u7d20)"),(0,i.kt)("li",{parentName:"ul"},"\u989c\u8272\uff1a\u6587\u5b57\u7684\u521d\u59cb\u989c\u8272"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u4f53\uff1a\u8f93\u5165\u5b57\u4f53\u540d\u79f0\uff0c\u5982\u679c\u6709\u591a\u4e2a\u5b57\u4f53\uff0c\u7528\u9017\u53f7\u9694\u5f00\uff0c\u6309\u4ece\u5de6\u5230\u53f3\u7684\u4f18\u5148\u987a\u5e8f\u6392\u5217"),(0,i.kt)("li",{parentName:"ul"},"\u5b57\u578b\uff1a\u6b63\u5e38\u3001\u52a0\u7c97\u3001\u503e\u659c\u3001\u52a0\u7c97 \u503e\u659c"),(0,i.kt)("li",{parentName:"ul"},"\u6587\u5b57\u6548\u679c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u65e0"),(0,i.kt)("li",{parentName:"ul"},"\u9634\u5f71\uff1a\u542f\u7528\u53c2\u6570(\u9634\u5f71X\uff0c\u9634\u5f71Y\uff0c\u6548\u679c\u989c\u8272)"),(0,i.kt)("li",{parentName:"ul"},"\u63cf\u8fb9\uff1a\u542f\u7528\u53c2\u6570(\u63cf\u8fb9\u5bbd\u5ea6\uff0c\u6548\u679c\u989c\u8272)"),(0,i.kt)("li",{parentName:"ul"},"\u8f6e\u5ed3\uff1a\u7c7b\u4f3c\u4e8e\u63cf\u8fb9\uff0c\u6269\u9614\u7ebf\u5bbd\u56fa\u5b9a\u4e3a1\u50cf\u7d20\uff0c\u542f\u7528\u53c2\u6570(\u6548\u679c\u989c\u8272)"))),(0,i.kt)("li",{parentName:"ul"},"\u9634\u5f71X\uff1a\u6587\u5b57\u9634\u5f71\u7684\u6c34\u5e73\u504f\u79fb\u8ddd\u79bb(\u5355\u4f4d\uff1a\u50cf\u7d20)"),(0,i.kt)("li",{parentName:"ul"},"\u9634\u5f71Y\uff1a\u6587\u5b57\u9634\u5f71\u7684\u5782\u76f4\u504f\u79fb\u8ddd\u79bb(\u5355\u4f4d\uff1a\u50cf\u7d20)"),(0,i.kt)("li",{parentName:"ul"},"\u63cf\u8fb9\u5bbd\u5ea6\uff1a\u6587\u5b57\u63cf\u8fb9\u7ebf\u6761\u7684\u5bbd\u5ea6\uff0c\u6709\u4e00\u534a\u5728\u6587\u5b57\u5185\u90e8\u88ab\u906e\u6321\uff0c\u53e6\u4e00\u534a\u5728\u5916\u90e8"),(0,i.kt)("li",{parentName:"ul"},"\u6548\u679c\u989c\u8272\uff1a\u9634\u5f71/\u63cf\u8fb9/\u8f6e\u5ed3\u7684\u989c\u8272"),(0,i.kt)("li",{parentName:"ul"},"\u6df7\u5408\u6a21\u5f0f\uff1a\u6b63\u5e38\u3001\u52a0\u6cd5\u3001\u51cf\u6cd5")))}s.isMDXComponent=!0},49413:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ui-dialogbox-1-e6bd9dbf5293df576e42357fb9c03249.png"}}]);