"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var A=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);t&&(A=A.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,A)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,A,i=function(e,t){if(null==e)return{};var n,A,i={},r=Object.keys(e);for(A=0;A<r.length;A++)n=r[A],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(A=0;A<r.length;A++)n=r[A],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=A.createContext({}),o=function(e){var t=A.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=o(e.components);return A.createElement(c.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return A.createElement(A.Fragment,{},t)}},u=A.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=o(n),u=i,h=g["".concat(c,".").concat(u)]||g[u]||p[u]||r;return n?A.createElement(h,a(a({ref:t},s),{},{components:n})):A.createElement(h,a({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var o=2;o<r;o++)a[o]=n[o];return A.createElement.apply(null,a)}return A.createElement.apply(null,n)}u.displayName="MDXCreateElement"},61490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var A=n(87462),i=(n(67294),n(3905));const r={},a="Scene - Light",l={unversionedId:"inspectors/scene/scene-light",id:"inspectors/scene/scene-light",title:"Scene - Light",description:"General",source:"@site/docs/002.inspectors/002.scene/004.scene-light.md",sourceDirName:"002.inspectors/002.scene",slug:"/inspectors/scene/scene-light",permalink:"/docs/inspectors/scene/scene-light",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/002.inspectors/002.scene/004.scene-light.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scene - Region",permalink:"/docs/inspectors/scene/scene-region"},next:{title:"Scene - Animation",permalink:"/docs/inspectors/scene/scene-animation"}},c={},o=[{value:"General",id:"general",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Events",id:"events",level:3},{value:"Scripts",id:"scripts",level:3}],s={toc:o};function g(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,A.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"scene---light"},"Scene - Light"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(39577).Z,width:"345",height:"354"})),(0,i.kt)("h3",{id:"general"},"General"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name\uff1aScene Light source name, no real use"),(0,i.kt)("li",{parentName:"ul"},"Type",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Point\uff1aLight source with circular diffusion and attenuation from one point to the surrounding area, enable parameters (range, intensity)"),(0,i.kt)("li",{parentName:"ul"},"Area\uff1aUsing a texture as the light source, enable parameters (Mask, Anchor X, Anchor Y, Width, Height, Angle), it can be used to create a spotlight"))),(0,i.kt)("li",{parentName:"ul"},"Blend\uff1aScreen\u3001Additive\u3001Subtract\u3001Max"),(0,i.kt)("li",{parentName:"ul"},"X\uff1aThe horizontal position of the light source in the scene"),(0,i.kt)("li",{parentName:"ul"},"Y\uff1aThe vertical position of the light source in the scene"),(0,i.kt)("li",{parentName:"ul"},"Width\uff1aThe width of the light source in the scene"),(0,i.kt)("li",{parentName:"ul"},"Height\uff1aThe height of the light source in the scene")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(15307).Z,width:"345",height:"52"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Point Light - Parameters",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Range\uff1aDiameter of light (0 ~ 128)"),(0,i.kt)("li",{parentName:"ul"},"Intensity\uff1aThe greater the intensity, the smaller the attenuation of the light source, the brighter"),(0,i.kt)("li",{parentName:"ul"},"Red\uff1aThe red component at the center of the point source"),(0,i.kt)("li",{parentName:"ul"},"Green\uff1aThe green component at the center of the point source"),(0,i.kt)("li",{parentName:"ul"},"Blue\uff1aThe blue component at the center of the point source")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(40595).Z,width:"345",height:"148"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Area Light - Parameters",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Mask\uff1aThe light is projected onto the scene through the mask image, and if it is not set, it is displayed as a rectangle"),(0,i.kt)("li",{parentName:"ul"},"Anchor X\uff1aThe horizontal position (0 ~ 1) of the mask image connection point of the light source."),(0,i.kt)("li",{parentName:"ul"},"Anchor Y\uff1aThe vertical position (0 ~ 1) of the mask image connection point of the light source."),(0,i.kt)("li",{parentName:"ul"},"Width\uff1aThe width of the rectangular area"),(0,i.kt)("li",{parentName:"ul"},"Height\uff1aThe height of the rectangular area"),(0,i.kt)("li",{parentName:"ul"},"Angle\uff1aThe rotation angle of the rectangular area"),(0,i.kt)("li",{parentName:"ul"},"Red\uff1aOriginal color (red) ","*"," Mask image color (red) ","*"," Red / 255 = Final color (red)"),(0,i.kt)("li",{parentName:"ul"},"Green\uff1aOriginal color (green) ","*"," Mask image color (green) ","*"," Green / 255 = Final color (green)"),(0,i.kt)("li",{parentName:"ul"},"Blue\uff1aOriginal color (blue) ","*"," Mask image color (blue) ","*"," Blue / 255 = Final color (blue)")))),(0,i.kt)("h3",{id:"conditions"},"Conditions"),(0,i.kt)("p",null,"When loading a scene, the light source will be created only when the conditions are met, each preset light source has a self variable that can be saved permanently."),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("p",null,'Access "Event Trigger Light" in the event to get this light'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Autorun\uff1aTriggered when the light source appears in a scene (including after loading savedata)"),(0,i.kt)("li",{parentName:"ul"},'Custom Events\uff1aCustom events can be called via the "Call Event" command')),(0,i.kt)("h3",{id:"scripts"},"Scripts"),(0,i.kt)("p",null,"Add Javascript files to extend this light"))}g.isMDXComponent=!0},39577:(e,t,n)=>{n.d(t,{Z:()=>A});const A=n.p+"assets/images/scene-light-1-acc0adb8375e43157ae896a0bd0a9a6e.png"},15307:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAAA0CAIAAACvjdy8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxZjc0ZDQ5ZC04NjNlLWQ2NDEtODNkNy04ZjVjNzQzYmEzZGQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY0NEEyQzJBRTY3MTFFREE1RkJERkI4MkVDMUY0ODciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY0NEEyQzFBRTY3MTFFREE1RkJERkI4MkVDMUY0ODciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJmMjZlZTNkLWQ3OTctMzg0Yy1hNTYwLTVhZWQ1N2JmZTVmYyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxZjc0ZDQ5ZC04NjNlLWQ2NDEtODNkNy04ZjVjNzQzYmEzZGQiLz4gPC9y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"},40595:(e,t,n)=>{n.d(t,{Z:()=>A});const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAACUCAIAAAC2kc1SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplY2QxZTNlNi0yNjZjLWU3NDctYTUwZC1jNzM2YWYzNjRjMTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTk0NjNGRkVBRTY3MTFFREJCRUQ4Nzg3Mjg4OUVFNTgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTk0NjNGRkRBRTY3MTFFREJCRUQ4Nzg3Mjg4OUVFNTgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFlOTNjMTk0LWVkNGEtNjE0Zi04YjE2LTU0NzdlNjIzNGUzZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDplY2QxZTNlNi0yNjZjLWU3NDctYTUwZC1jNzM2YWYzNjRjMTciLz4gPC9y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"}}]);