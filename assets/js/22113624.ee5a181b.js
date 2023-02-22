"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2082],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=n,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return t?a.createElement(d,i(i({ref:r},c),{},{components:t})):a.createElement(d,i({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},35163:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={},i="UI - Progress Bar",l={unversionedId:"inspectors/ui/ui-progressbar",id:"inspectors/ui/ui-progressbar",title:"UI - Progress Bar",description:"Progress Bar Properties",source:"@site/docs/002.inspectors/003.ui/007.ui-progressbar.md",sourceDirName:"002.inspectors/003.ui",slug:"/inspectors/ui/ui-progressbar",permalink:"/docs/inspectors/ui/ui-progressbar",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/002.inspectors/003.ui/007.ui-progressbar.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI - Dialog Box",permalink:"/docs/inspectors/ui/ui-dialogbox"},next:{title:"UI - Video",permalink:"/docs/inspectors/ui/ui-video"}},s={},p=[{value:"Progress Bar Properties",id:"progress-bar-properties",level:3}],c={toc:p};function u(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ui---progress-bar"},"UI - Progress Bar"),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(62579).Z,width:"345",height:"291"})),(0,n.kt)("h3",{id:"progress-bar-properties"},"Progress Bar Properties"),(0,n.kt)("p",null,'Modify progress bar properties by "Set Progress Bar" command'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Image\uff1aImage File"),(0,n.kt)("li",{parentName:"ul"},"Display",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Stretch"),(0,n.kt)("li",{parentName:"ul"},"Clip\uff1aEnable Parameter (Clip)"))),(0,n.kt)("li",{parentName:"ul"},"Clip\uff1aCrop the specified rectangular area"),(0,n.kt)("li",{parentName:"ul"},"Type",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Horizontal"),(0,n.kt)("li",{parentName:"ul"},"Vertical"),(0,n.kt)("li",{parentName:"ul"},"Circular\uff1aEnable parameters (Center X, Center Y, Start Angle, central Angle)"))),(0,n.kt)("li",{parentName:"ul"},"Center X\uff1aCenter X of the circular progress bar"),(0,n.kt)("li",{parentName:"ul"},"Center Y\uff1aCenter Y of the circular progress bar"),(0,n.kt)("li",{parentName:"ul"},"Start Angle\uff1aStart angle of the circular progress bar, right side = 0 degrees, clockwise"),(0,n.kt)("li",{parentName:"ul"},"Central Angle\uff1aThe angle at the end of the circular progress bar minus the angle at the beginning"),(0,n.kt)("li",{parentName:"ul"},"Step\uff1aThe texture sampling length of the horizontal / vertical progress bar is an integer multiple of the step\uff0cThe texture sampling angle of the circular progress bar is an integer multiple of the step\uff0cStep = 0 means disable"),(0,n.kt)("li",{parentName:"ul"},"Progress\uff1aInitial progress of progress bar (0 ~ 1)"),(0,n.kt)("li",{parentName:"ul"},"Blend",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Normal"),(0,n.kt)("li",{parentName:"ul"},"Additive"),(0,n.kt)("li",{parentName:"ul"},"Subtract"))),(0,n.kt)("li",{parentName:"ul"},"Color Mode",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Texture Sampling\uff1aUse the pixel colors in the progress bar image"),(0,n.kt)("li",{parentName:"ul"},"Fixed\uff1aReplace the pixel color in the progress bar image with the specified color, enable parameters (red, green, blue, opacity)"))),(0,n.kt)("li",{parentName:"ul"},"Red\uff1aRed component of the progress bar color in fixed color mode"),(0,n.kt)("li",{parentName:"ul"},"Green\uff1aGreen component of the progress bar color in fixed color mode"),(0,n.kt)("li",{parentName:"ul"},"Blue\uff1aBlue component of the progress bar color in fixed color mode"),(0,n.kt)("li",{parentName:"ul"},"Alpha\uff1aAlpha component of the progress bar color in fixed color mode")))}u.isMDXComponent=!0},62579:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/ui-progressbar-1-33dd07b8f6cc18c345fdf516bb87a2b8.png"}}]);