"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={},l="Actor Getter",c={unversionedId:"event-commands/getter/actor-getter",id:"event-commands/getter/actor-getter",title:"Actor Getter",description:"Parameters",source:"@site/docs/003.event-commands/001.getter/001.actor-getter.md",sourceDirName:"003.event-commands/001.getter",slug:"/event-commands/getter/actor-getter",permalink:"/docs/event-commands/getter/actor-getter",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/003.event-commands/001.getter/001.actor-getter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Event Window",permalink:"/docs/event-commands/command-list"},next:{title:"Skill Getter",permalink:"/docs/event-commands/getter/skill-getter"}},i={},s=[{value:"Parameters",id:"parameters",level:3}],m={toc:s};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"actor-getter"},"Actor Getter"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(60560).Z,width:"326",height:"240"})),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Type",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Event Trigger Actor\uff1aThe actor that triggered this event, for example",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The actor who owns this event"),(0,n.kt)("li",{parentName:"ul"},"The actor who used the item"),(0,n.kt)("li",{parentName:"ul"},"The actor who added the equipment"),(0,n.kt)("li",{parentName:"ul"},"The actor who cast the skill"),(0,n.kt)("li",{parentName:"ul"},"The actor who got the state"))),(0,n.kt)("li",{parentName:"ul"},'Skill Caster\uff1aAccessible in the "Cast Skill" event, as well as in all trigger events'),(0,n.kt)("li",{parentName:"ul"},'Latest Actor\uff1aGet the latest created actor, which refreshes when the "Create Actor" or "Create Global Actor" command is called.'),(0,n.kt)("li",{parentName:"ul"},"Target Actor\uff1aA container for temporary storage of an actor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'Access it in the "Collision" event to get another actor that collided with "Event Trigger Actor"'),(0,n.kt)("li",{parentName:"ul"},'After calling the "Detect Targets" command, it will be set to an eligible actor in the target actor pool, which may not exist (none).'),(0,n.kt)("li",{parentName:"ul"},'After calling the "Show Text" command, it is set to the actor read by the "actor accessor" in the command, which may not exist (none).'))),(0,n.kt)("li",{parentName:"ul"},'Player Actor\uff1aSet the initial player actor via "Project Settings -> Actor -> Player Actor". Modify via "Set Player Actor" command'),(0,n.kt)("li",{parentName:"ul"},"Party Member\uff1aEnable parameter (Index: 0 = first member, 1 = second member, ......)"),(0,n.kt)("li",{parentName:"ul"},"Global Actor\uff1aEnable parameter (Actor File: get the relevant global actor by actor file id)"),(0,n.kt)("li",{parentName:"ul"},"By Actor ID\uff1aGet a preset actor in the current scene, enable parameter (Data ID: only the actor list in the current scene can be displayed)"),(0,n.kt)("li",{parentName:"ul"},"Variable\uff1aRead the actor from the specified variable, enable parameter (Variable)")))))}p.isMDXComponent=!0},60560:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/actor-getter-464e2e3944569488404ef770caaad4d1.png"}}]);