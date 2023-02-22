"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),m=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(u.Provider,{value:t},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=m(a),c=l,N=k["".concat(u,".").concat(c)]||k[c]||s[c]||r;return a?n.createElement(N,i(i({ref:t},o),{},{components:a})):n.createElement(N,i({ref:t},o))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[k]="string"==typeof e?e:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},14303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={},i="If",p={unversionedId:"event-commands/flow/if",id:"event-commands/flow/if",title:"If",description:"- Branches\uff1aA branch can have multiple conditions, if the conditions are met, execute the commands of the branch, otherwise check the conditions of the next branch",source:"@site/docs/003.event-commands/004.flow/001.if.md",sourceDirName:"003.event-commands/004.flow",slug:"/event-commands/flow/if",permalink:"/docs/event-commands/flow/if",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/003.event-commands/004.flow/001.if.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Delete Variable",permalink:"/docs/event-commands/variable/deleteVariable"},next:{title:"Switch",permalink:"/docs/event-commands/flow/switch"}},u={},m=[{value:"Condition",id:"condition",level:3}],o={toc:m};function k(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"if"},"If"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(72610).Z,width:"326",height:"182"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Branches\uff1aA branch can have multiple conditions, if the conditions are met, execute the commands of the branch, otherwise check the conditions of the next branch"),(0,l.kt)("li",{parentName:"ul"},'Else\uff1aIf checked, when none of the branch conditions are sufficient, go to the "else" branch')),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(68009).Z,width:"326",height:"220"})),(0,l.kt)("h3",{id:"condition"},"Condition"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Condition Type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Boolean",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Variable\uff1aVariable Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Equal to (==)"),(0,l.kt)("li",{parentName:"ul"},"Not Equal to (!=)"))),(0,l.kt)("li",{parentName:"ul"},"Operand Type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None\uff1aDoes not exist"),(0,l.kt)("li",{parentName:"ul"},"Constant"),(0,l.kt)("li",{parentName:"ul"},"Variable"))))),(0,l.kt)("li",{parentName:"ul"},"Number",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Variable\uff1aVariable Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Equal to (==)"),(0,l.kt)("li",{parentName:"ul"},"Not Equal to (!=)"),(0,l.kt)("li",{parentName:"ul"},"Greater than or equal to (>=)"),(0,l.kt)("li",{parentName:"ul"},"Less than or equal to (<=)"),(0,l.kt)("li",{parentName:"ul"},"Greater than (>)"),(0,l.kt)("li",{parentName:"ul"},"Less than (<)"))),(0,l.kt)("li",{parentName:"ul"},"Operand Type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None\uff1aDoes not exist"),(0,l.kt)("li",{parentName:"ul"},"Constant"),(0,l.kt)("li",{parentName:"ul"},"Variable"))))),(0,l.kt)("li",{parentName:"ul"},"String",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Variable\uff1aVariable Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Equal to (==)"),(0,l.kt)("li",{parentName:"ul"},"Not Equal to (!=)"),(0,l.kt)("li",{parentName:"ul"},"Include"),(0,l.kt)("li",{parentName:"ul"},"Exclude"))),(0,l.kt)("li",{parentName:"ul"},"Operand Target",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None\uff1aDoes not exist"),(0,l.kt)("li",{parentName:"ul"},"Constant"),(0,l.kt)("li",{parentName:"ul"},"Variable"),(0,l.kt)("li",{parentName:"ul"},"Enumeration"))))),(0,l.kt)("li",{parentName:"ul"},"Object",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Variable\uff1aVariable Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Equal to (==)\uff1aEnable Parameter (Operand Type)"),(0,l.kt)("li",{parentName:"ul"},"Not Equal to(!=)\uff1aEnable Parameter (Operand Type)"),(0,l.kt)("li",{parentName:"ul"},"is Actor"),(0,l.kt)("li",{parentName:"ul"},"is Skill"),(0,l.kt)("li",{parentName:"ul"},"is State"),(0,l.kt)("li",{parentName:"ul"},"is Equipment"),(0,l.kt)("li",{parentName:"ul"},"is Item"),(0,l.kt)("li",{parentName:"ul"},"is Trigger"),(0,l.kt)("li",{parentName:"ul"},"is Light"),(0,l.kt)("li",{parentName:"ul"},"is Element"))),(0,l.kt)("li",{parentName:"ul"},"Operand Type",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None\uff1aDoes not exist"),(0,l.kt)("li",{parentName:"ul"},"Actor\uff1aActor Getter"),(0,l.kt)("li",{parentName:"ul"},"Skill\uff1aSkill Getter"),(0,l.kt)("li",{parentName:"ul"},"State\uff1aState Getter"),(0,l.kt)("li",{parentName:"ul"},"Equipment\uff1aEquipment Getter"),(0,l.kt)("li",{parentName:"ul"},"Item\uff1aItem Getter"),(0,l.kt)("li",{parentName:"ul"},"Trigger\uff1aTrigger Getter"),(0,l.kt)("li",{parentName:"ul"},"Light\uff1aLight Getter"),(0,l.kt)("li",{parentName:"ul"},"Element\uff1aElement Getter"),(0,l.kt)("li",{parentName:"ul"},"Variable\uff1aVariable Getter"))))),(0,l.kt)("li",{parentName:"ul"},"Actor",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Actor\uff1aActor Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Present and Active"),(0,l.kt)("li",{parentName:"ul"},"Present\uff1aThe actor is in the current scene"),(0,l.kt)("li",{parentName:"ul"},"Absent\uff1aThe actor is not in the current scene"),(0,l.kt)("li",{parentName:"ul"},"Active\uff1aDefault"),(0,l.kt)("li",{parentName:"ul"},'Inactive\uff1aChange the activation status of an actor with the "Set Active" command'),(0,l.kt)("li",{parentName:"ul"},"Has Targets\uff1aThere is a target actor in the actor's target pool"),(0,l.kt)("li",{parentName:"ul"},"Has No Targets\uff1aThere is no target actors in the actor's target pool"),(0,l.kt)("li",{parentName:"ul"},"In Screen\uff1aThe actor is inside the visible area of the camera"),(0,l.kt)("li",{parentName:"ul"},'Is Player Actor\uff1aThe actor is set to "Player Actor"'),(0,l.kt)("li",{parentName:"ul"},"Is Party Member"),(0,l.kt)("li",{parentName:"ul"},"Has Skill"),(0,l.kt)("li",{parentName:"ul"},"Has State"),(0,l.kt)("li",{parentName:"ul"},"Has Items"),(0,l.kt)("li",{parentName:"ul"},"Has Equipments"),(0,l.kt)("li",{parentName:"ul"},'Has Skill Shortcut\uff1aThe specified "shortcut key" corresponds to a skill'),(0,l.kt)("li",{parentName:"ul"},'Has Item Shortcut\uff1aThe specified "shortcut key" corresponds to an item'),(0,l.kt)("li",{parentName:"ul"},"Equipped"),(0,l.kt)("li",{parentName:"ul"},"Is a Teammate of Actor ...\uff1aBe in the same team as the specified actor"),(0,l.kt)("li",{parentName:"ul"},"Is a Friend of Actor ...\uff1aThe team relationship with the specified actor is friendly"),(0,l.kt)("li",{parentName:"ul"},"Is an Enemy of Actor ...\uff1aThe team relationship with the specified actor is hostile"),(0,l.kt)("li",{parentName:"ul"},"Is a Member of Team ...\uff1aIs a member of the specified team"),(0,l.kt)("li",{parentName:"ul"},"Is a Friend of Team ...\uff1aThe relationship with the specified team is friendly"),(0,l.kt)("li",{parentName:"ul"},"Is an Enemy of Team ...\uff1aThe relationship with the specified team is hostile"))))),(0,l.kt)("li",{parentName:"ul"},"Element",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Element\uff1aElement Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Present\uff1aThe element read from the element getter is valid"),(0,l.kt)("li",{parentName:"ul"},"Absent\uff1aThe element read from the element getter is invalid"),(0,l.kt)("li",{parentName:"ul"},"Visible\uff1aThe element is not hidden"),(0,l.kt)("li",{parentName:"ul"},"Invisible\uff1aThe element is hidden"),(0,l.kt)("li",{parentName:"ul"},"Dialog Box - is Paused"),(0,l.kt)("li",{parentName:"ul"},"Dialog Box - is Updating"),(0,l.kt)("li",{parentName:"ul"},"Dialog Box - is Waiting"),(0,l.kt)("li",{parentName:"ul"},"Dialog Box - is Complete"))))),(0,l.kt)("li",{parentName:"ul"},"Keyboard",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Key Code"),(0,l.kt)("li",{parentName:"ul"},"State",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pressed"),(0,l.kt)("li",{parentName:"ul"},"Released"))))),(0,l.kt)("li",{parentName:"ul"},"Mouse",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Button",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Left Button"),(0,l.kt)("li",{parentName:"ul"},"Middle Button"),(0,l.kt)("li",{parentName:"ul"},"Right Button"),(0,l.kt)("li",{parentName:"ul"},"Back Button"),(0,l.kt)("li",{parentName:"ul"},"Forward Button"))),(0,l.kt)("li",{parentName:"ul"},"State",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Pressed"),(0,l.kt)("li",{parentName:"ul"},"Released"))))),(0,l.kt)("li",{parentName:"ul"},"List",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Variable\uff1aList Variable Getter"),(0,l.kt)("li",{parentName:"ul"},"Operation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Include"),(0,l.kt)("li",{parentName:"ul"},"Exclude"))),(0,l.kt)("li",{parentName:"ul"},"Variable",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Read the operand from the variable"))))),(0,l.kt)("li",{parentName:"ul"},"Other",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Other",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Mouse has entered the window"),(0,l.kt)("li",{parentName:"ul"},"Mouse has left the window"),(0,l.kt)("li",{parentName:"ul"},"Game is paused"),(0,l.kt)("li",{parentName:"ul"},"Game is not paused")))))))))}k.isMDXComponent=!0},72610:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUYAAAC2CAIAAAAqULMKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4MTU3NzQ5OS1lNWY0LTUwNDAtOGQyZi1lZjhlZjg2M2EzODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDFCNTA4OENBRTc2MTFFRDk3NDFGQjQwQjEzMkRFNkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDFCNTA4OEJBRTc2MTFFRDk3NDFGQjQwQjEzMkRFNkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmExYWE5YTQ0LWRlOWItYWM0Zi1hMTE0LTVlMDQ5ODZkYTk2ZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4MTU3NzQ5OS1lNWY0LTUwNDAtOGQyZi1lZjhlZjg2M2EzODQiLz4gPC9y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"},68009:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/if-2-04aa9b67f3afcabaa89e11c3d0dbbbee.png"}}]);