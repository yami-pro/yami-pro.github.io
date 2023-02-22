"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7882],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},b="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=i(r),u=o,k=b["".concat(p,".").concat(u)]||b[u]||s[u]||c;return r?n.createElement(k,a(a({ref:t},m),{},{components:r})):n.createElement(k,a({ref:t},m))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[b]="string"==typeof e?e:o,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},42874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const c={},a="Set Player Actor",l={unversionedId:"event-commands/actor/setPlayerActor",id:"event-commands/actor/setPlayerActor",title:"Set Player Actor",description:'After being set as the player actor, you can get the actor through "Actor Getter -> Player Actor"',source:"@site/docs/003.event-commands/008.actor/014.setPlayerActor.md",sourceDirName:"003.event-commands/008.actor",slug:"/event-commands/actor/setPlayerActor",permalink:"/docs/event-commands/actor/setPlayerActor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/003.event-commands/008.actor/014.setPlayerActor.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete Actor",permalink:"/docs/event-commands/actor/deleteActor"},next:{title:"Set Party Member",permalink:"/docs/event-commands/actor/setPartyMember"}},p={},i=[],m={toc:i};function b(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-player-actor"},"Set Player Actor"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(90098).Z,width:"326",height:"100"})),(0,o.kt)("p",null,'After being set as the player actor, you can get the actor through "Actor Getter -> Player Actor"'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Global Actor\uff1aThe player actor must be a global actor")))}b.isMDXComponent=!0},90098:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAABkCAIAAAB1pg4uAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MzYyNGJhNS0zMGRmLWMzNDYtOTExMS0zNjNiNDUzMjRhZjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjZCMjBCMjhBRTg2MTFFREIwMzVERkM5MjI2QzYzRDQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjZCMjBCMjdBRTg2MTFFREIwMzVERkM5MjI2QzYzRDQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmNhZDE4ZGFiLWU1ZGYtYzQ0MS1iZWJkLTFhNTQ4MTRiNDIwYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MzYyNGJhNS0zMGRmLWMzNDYtOTExMS0zNjNiNDUzMjRhZjYiLz4gPC9y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"}}]);