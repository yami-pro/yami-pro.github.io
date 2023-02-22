"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6853],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={},o="Scene - Animation",l={unversionedId:"inspectors/scene/scene-animation",id:"inspectors/scene/scene-animation",title:"Scene - Animation",description:"General",source:"@site/docs/002.inspectors/002.scene/005.scene-animation.md",sourceDirName:"002.inspectors/002.scene",slug:"/inspectors/scene/scene-animation",permalink:"/docs/inspectors/scene/scene-animation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/002.inspectors/002.scene/005.scene-animation.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scene - Light",permalink:"/docs/inspectors/scene/scene-light"},next:{title:"Scene - Particle",permalink:"/docs/inspectors/scene/scene-particle"}},s={},c=[{value:"General",id:"general",level:3},{value:"Conditions",id:"conditions",level:3},{value:"Events",id:"events",level:3},{value:"Scripts",id:"scripts",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scene---animation"},"Scene - Animation"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(89124).Z,width:"345",height:"378"})),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name\uff1aScene animation name, no real use"),(0,a.kt)("li",{parentName:"ul"},"Animation\uff1aBound animation file"),(0,a.kt)("li",{parentName:"ul"},"Motion\uff1aA motion in the bound animation file"),(0,a.kt)("li",{parentName:"ul"},"Rotatable\uff1aWhen turned on, the rotation angle of the animation will be set automatically"),(0,a.kt)("li",{parentName:"ul"},"X\uff1aThe horizontal position of the animation in the scene"),(0,a.kt)("li",{parentName:"ul"},"Y\uff1aThe vertical position of the animation in the scene"),(0,a.kt)("li",{parentName:"ul"},'Angle\uff1aThe angle of the animation, which affects the "animation direction"'),(0,a.kt)("li",{parentName:"ul"},"Scale\uff1aOverall scaling factor of the animation"),(0,a.kt)("li",{parentName:"ul"},"Speed\uff1aThe playback speed of the animation"),(0,a.kt)("li",{parentName:"ul"},"Opacity\uff1aUsed to adjust the visibility of the animation in the scene"),(0,a.kt)("li",{parentName:"ul"},"Priority\uff1aPrioritize the animation when rendering, so that animations located below will always override those above.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Priority = -1 means that the rendering position is shifted up by one tile distance."),(0,a.kt)("li",{parentName:"ul"},"Priority = 1 means that the rendering position is shifted down by one tile distance.")))),(0,a.kt)("h3",{id:"conditions"},"Conditions"),(0,a.kt)("p",null,"When loading a scene, the animation will be created only when the conditions are met, each preset animation has a self variable that can be saved permanently."),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Autorun\uff1aTriggered when the animation appears in a scene (including after loading savedata)"),(0,a.kt)("li",{parentName:"ul"},'Custom Events\uff1aCustom events can be called via the "Call Event" command')),(0,a.kt)("h3",{id:"scripts"},"Scripts"),(0,a.kt)("p",null,"Add Javascript files to extend this animation"))}u.isMDXComponent=!0},89124:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/scene-animation-1-71360028dead0fc884cd515bd86026b0.png"}}]);