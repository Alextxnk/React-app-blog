(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9046],{3735:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},8249:function(e,t,n){"use strict";n.d(t,{oC:function(){return tT},VY:function(){return tD},ZA:function(){return tO},ck:function(){return tI},wU:function(){return tA},__:function(){return tP},Uv:function(){return tR},Ee:function(){return tx},Rk:function(){return tk},fC:function(){return ty},Z0:function(){return tF},Tr:function(){return tS},tu:function(){return tL},fF:function(){return tZ},xz:function(){return tC}});var r=n(3735),o=n(7376),a=n(5674),u=n(3440),l=n(6301),i=n(3477),c=n(689),d=n(6196),s=n(5377),f=n(668),p=n(1505),m=n(3485),v=n(366),g=n(2588),w=n(484),h=n(3236),E=n(5345),M=n(6904),_=n(493),b=n(4274);let y="Popper",[C,R]=(0,l.b)(y),[D,O]=C(y),P=e=>{let{__scopePopper:t,children:n}=e,[r,a]=(0,o.useState)(null);return(0,o.createElement)(D,{scope:t,anchor:r,onAnchorChange:a},n)},I=(0,o.forwardRef)((e,t)=>{let{__scopePopper:n,virtualRef:r,...a}=e,l=O("PopperAnchor",n),i=(0,o.useRef)(null),d=(0,u.e)(t,i);return(0,o.useEffect)(()=>{l.onAnchorChange((null==r?void 0:r.current)||i.current)}),r?null:(0,o.createElement)(c.WV.div,(0,g.Z)({},a,{ref:d}))}),T="PopperContent",[x,k]=C(T),[A,F]=C(T,{hasParent:!1,positionUpdateFns:new Set}),S=(0,o.forwardRef)((e,t)=>{var n,r,a,l,i,d,s,f;let{__scopePopper:p,side:m="bottom",sideOffset:v=0,align:g="center",alignOffset:M=0,arrowPadding:y=0,collisionBoundary:C=[],collisionPadding:R=0,sticky:D="partial",hideWhenDetached:P=!1,avoidCollisions:I=!0,...k}=e,S=O(T,p),[Z,L]=(0,o.useState)(null),W=(0,u.e)(t,e=>L(e)),[G,B]=(0,o.useState)(null),z=(0,b.t)(G),X=null!==(n=null==z?void 0:z.width)&&void 0!==n?n:0,Y=null!==(r=null==z?void 0:z.height)&&void 0!==r?r:0,$="number"==typeof R?R:{top:0,right:0,bottom:0,left:0,...R},H=Array.isArray(C)?C:[C],j=H.length>0,q={padding:$,boundary:H.filter(U),altBoundary:j},{reference:J,floating:Q,strategy:ee,x:et,y:en,placement:er,middlewareData:eo,update:ea}=(0,w.YF)({strategy:"fixed",placement:m+("center"!==g?"-"+g:""),whileElementsMounted:h.Me,middleware:[(0,E.cv)({mainAxis:v+Y,alignmentAxis:M}),I?(0,E.uY)({mainAxis:!0,crossAxis:!1,limiter:"partial"===D?(0,E.dr)():void 0,...q}):void 0,G?(0,w.x7)({element:G,padding:y}):void 0,I?(0,E.RR)({...q}):void 0,K({arrowWidth:X,arrowHeight:Y}),P?(0,E.Cp)({strategy:"referenceHidden"}):void 0].filter(N)});(0,_.b)(()=>{J(S.anchor)},[J,S.anchor]);let eu=null!==et&&null!==en,[el,ei]=V(er),ec=null===(a=eo.arrow)||void 0===a?void 0:a.x,ed=null===(l=eo.arrow)||void 0===l?void 0:l.y,es=(null===(i=eo.arrow)||void 0===i?void 0:i.centerOffset)!==0,[ef,ep]=(0,o.useState)();(0,_.b)(()=>{Z&&ep(window.getComputedStyle(Z).zIndex)},[Z]);let{hasParent:em,positionUpdateFns:ev}=F(T,p),eg=!em;(0,o.useLayoutEffect)(()=>{if(!eg)return ev.add(ea),()=>{ev.delete(ea)}},[eg,ev,ea]),(0,o.useLayoutEffect)(()=>{eg&&eu&&Array.from(ev).reverse().forEach(e=>requestAnimationFrame(e))},[eg,eu,ev]);let ew={"data-side":el,"data-align":ei,...k,ref:W,style:{...k.style,animation:eu?void 0:"none",opacity:null!==(d=eo.hide)&&void 0!==d&&d.referenceHidden?0:void 0}};return(0,o.createElement)("div",{ref:Q,"data-radix-popper-content-wrapper":"",style:{position:ee,left:0,top:0,transform:eu?`translate3d(${Math.round(et)}px, ${Math.round(en)}px, 0)`:"translate3d(0, -200%, 0)",minWidth:"max-content",zIndex:ef,"--radix-popper-transform-origin":[null===(s=eo.transformOrigin)||void 0===s?void 0:s.x,null===(f=eo.transformOrigin)||void 0===f?void 0:f.y].join(" ")}},(0,o.createElement)(x,{scope:p,placedSide:el,onArrowChange:B,arrowX:ec,arrowY:ed,shouldHideArrow:es},eg?(0,o.createElement)(A,{scope:p,hasParent:!0,positionUpdateFns:ev},(0,o.createElement)(c.WV.div,ew)):(0,o.createElement)(c.WV.div,ew)))}),Z={top:"bottom",right:"left",bottom:"top",left:"right"},L=(0,o.forwardRef)(function(e,t){let{__scopePopper:n,...r}=e,a=k("PopperArrow",n),u=Z[a.placedSide];return(0,o.createElement)("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[u]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0}},(0,o.createElement)(M.f,(0,g.Z)({},r,{ref:t,style:{...r.style,display:"block"}})))});function N(e){return void 0!==e}function U(e){return null!==e}let K=e=>({name:"transformOrigin",options:e,fn(t){var n,r,o,a,u;let{placement:l,rects:i,middlewareData:c}=t,d=(null===(n=c.arrow)||void 0===n?void 0:n.centerOffset)!==0,s=d?0:e.arrowWidth,f=d?0:e.arrowHeight,[p,m]=V(l),v={start:"0%",center:"50%",end:"100%"}[m],g=(null!==(r=null===(o=c.arrow)||void 0===o?void 0:o.x)&&void 0!==r?r:0)+s/2,w=(null!==(a=null===(u=c.arrow)||void 0===u?void 0:u.y)&&void 0!==a?a:0)+f/2,h="",E="";return"bottom"===p?(h=d?v:`${g}px`,E=`${-f}px`):"top"===p?(h=d?v:`${g}px`,E=`${i.floating.height+f}px`):"right"===p?(h=`${-f}px`,E=d?v:`${w}px`):"left"===p&&(h=`${i.floating.width+f}px`,E=d?v:`${w}px`),{data:{x:h,y:E}}}});function V(e){let[t,n="center"]=e.split("-");return[t,n]}var W=n(2305),G=n(3619),B=n(797);let z="rovingFocusGroup.onEntryFocus",X={bubbles:!1,cancelable:!0},Y="RovingFocusGroup",[$,H,j]=(0,d.B)(Y),[q,J]=(0,l.b)(Y,[j]),[Q,ee]=q(Y),et=(0,o.forwardRef)((e,t)=>(0,o.createElement)($.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)($.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(en,(0,g.Z)({},e,{ref:t}))))),en=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:r,loop:l=!1,dir:d,currentTabStopId:f,defaultCurrentTabStopId:p,onCurrentTabStopIdChange:m,onEntryFocus:v,...w}=e,h=(0,o.useRef)(null),E=(0,u.e)(t,h),M=(0,s.gm)(d),[_=null,b]=(0,i.T)({prop:f,defaultProp:p,onChange:m}),[y,C]=(0,o.useState)(!1),R=(0,B.W)(v),D=H(n),O=(0,o.useRef)(!1),[P,I]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=h.current;if(e)return e.addEventListener(z,R),()=>e.removeEventListener(z,R)},[R]),(0,o.createElement)(Q,{scope:n,orientation:r,dir:M,loop:l,currentTabStopId:_,onItemFocus:(0,o.useCallback)(e=>b(e),[b]),onItemShiftTab:(0,o.useCallback)(()=>C(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>I(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>I(e=>e-1),[])},(0,o.createElement)(c.WV.div,(0,g.Z)({tabIndex:y||0===P?-1:0,"data-orientation":r},w,{ref:E,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{O.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!O.current;if(e.target===e.currentTarget&&t&&!y){let t=new CustomEvent(z,X);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=D().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===_),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);ea(o)}}O.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>C(!1))})))}),er=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:r=!0,active:u=!1,...l}=e,i=(0,v.M)(),d=ee("RovingFocusGroupItem",n),s=d.currentTabStopId===i,f=H(n),{onFocusableItemAdd:p,onFocusableItemRemove:m}=d;return(0,o.useEffect)(()=>{if(r)return p(),()=>m()},[r,p,m]),(0,o.createElement)($.ItemSlot,{scope:n,id:i,focusable:r,active:u},(0,o.createElement)(c.WV.span,(0,g.Z)({tabIndex:s?0:-1,"data-orientation":d.orientation},l,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{r?d.onItemFocus(i):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>d.onItemFocus(i)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){d.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return eo[o]}(e,d.orientation,d.dir);if(void 0!==t){e.preventDefault();let o=f().filter(e=>e.focusable),a=o.map(e=>e.ref.current);if("last"===t)a.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&a.reverse();let o=a.indexOf(e.currentTarget);a=d.loop?(n=a,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):a.slice(o+1)}setTimeout(()=>ea(a))}})})))}),eo={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ea(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}var eu=n(4444),el=n(5015),ei=n(2278);let ec=["Enter"," "],ed=["ArrowUp","PageDown","End"],es=["ArrowDown","PageUp","Home",...ed],ef={ltr:[...ec,"ArrowRight"],rtl:[...ec,"ArrowLeft"]},ep={ltr:["ArrowLeft"],rtl:["ArrowRight"]},em="Menu",[ev,eg,ew]=(0,d.B)(em),[eh,eE]=(0,l.b)(em,[ew,R,J]),eM=R(),e_=J(),[eb,ey]=eh(em),[eC,eR]=eh(em),eD=e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:a,onOpenChange:u,modal:l=!0}=e,i=eM(t),[c,d]=(0,o.useState)(null),f=(0,o.useRef)(!1),p=(0,B.W)(u),m=(0,s.gm)(a);return(0,o.useEffect)(()=>{let e=()=>{f.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>f.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,o.createElement)(P,i,(0,o.createElement)(eb,{scope:t,open:n,onOpenChange:p,content:c,onContentChange:d},(0,o.createElement)(eC,{scope:t,onClose:(0,o.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:f,dir:m,modal:l},r)))},eO=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e,u=eM(n);return(0,o.createElement)(I,(0,r.Z)({},u,a,{ref:t}))}),eP="MenuPortal",[eI,eT]=eh(eP,{forceMount:void 0}),ex=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:a}=e,u=ey(eP,t);return(0,o.createElement)(eI,{scope:t,forceMount:n},(0,o.createElement)(G.z,{present:n||u.open},(0,o.createElement)(W.h,{asChild:!0,container:a},r)))},ek="MenuContent",[eA,eF]=eh(ek),eS=(0,o.forwardRef)((e,t)=>{let n=eT(ek,e.__scopeMenu),{forceMount:a=n.forceMount,...u}=e,l=ey(ek,e.__scopeMenu),i=eR(ek,e.__scopeMenu);return(0,o.createElement)(ev.Provider,{scope:e.__scopeMenu},(0,o.createElement)(G.z,{present:a||l.open},(0,o.createElement)(ev.Slot,{scope:e.__scopeMenu},i.modal?(0,o.createElement)(eZ,(0,r.Z)({},u,{ref:t})):(0,o.createElement)(eL,(0,r.Z)({},u,{ref:t})))))}),eZ=(0,o.forwardRef)((e,t)=>{let n=ey(ek,e.__scopeMenu),l=(0,o.useRef)(null),i=(0,u.e)(t,l);return(0,o.useEffect)(()=>{let e=l.current;if(e)return(0,el.Ry)(e)},[]),(0,o.createElement)(eN,(0,r.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,a.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),eL=(0,o.forwardRef)((e,t)=>{let n=ey(ek,e.__scopeMenu);return(0,o.createElement)(eN,(0,r.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),eN=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,loop:l=!1,trapFocus:i,onOpenAutoFocus:c,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:w,onInteractOutside:h,onDismiss:E,disableOutsideScroll:M,..._}=e,b=ey(ek,n),y=eR(ek,n),C=eM(n),R=e_(n),D=eg(n),[O,P]=(0,o.useState)(null),I=(0,o.useRef)(null),T=(0,u.e)(t,I,b.onContentChange),x=(0,o.useRef)(0),k=(0,o.useRef)(""),A=(0,o.useRef)(0),F=(0,o.useRef)(null),Z=(0,o.useRef)("right"),L=(0,o.useRef)(0),N=M?ei.Z:o.Fragment,U=M?{as:eu.g7,allowPinchZoom:!0}:void 0,K=e=>{var t,n;let r=k.current+e,o=D().filter(e=>!e.disabled),a=document.activeElement,u=null===(t=o.find(e=>e.ref.current===a))||void 0===t?void 0:t.textValue,l=o.map(e=>e.textValue),i=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0]),a=o?t[0]:t,u=n?e.indexOf(n):-1,l=(r=Math.max(u,0),e.map((t,n)=>e[(r+n)%e.length])),i=1===a.length;i&&(l=l.filter(e=>e!==n));let c=l.find(e=>e.toLowerCase().startsWith(a.toLowerCase()));return c!==n?c:void 0}(l,r,u),c=null===(n=o.find(e=>e.textValue===i))||void 0===n?void 0:n.ref.current;!function e(t){k.current=t,window.clearTimeout(x.current),""!==t&&(x.current=window.setTimeout(()=>e(""),1e3))}(r),c&&setTimeout(()=>c.focus())};(0,o.useEffect)(()=>()=>window.clearTimeout(x.current),[]),(0,p.EW)();let V=(0,o.useCallback)(e=>{var t,n;let r=Z.current===(null===(t=F.current)||void 0===t?void 0:t.side);return r&&function(e,t){if(!t)return!1;let n={x:e.clientX,y:e.clientY};return function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,a=t.length-1;e<t.length;a=e++){let u=t[e].x,l=t[e].y,i=t[a].x,c=t[a].y,d=l>r!=c>r&&n<(i-u)*(r-l)/(c-l)+u;d&&(o=!o)}return o}(n,t)}(e,null===(n=F.current)||void 0===n?void 0:n.area)},[]);return(0,o.createElement)(eA,{scope:n,searchRef:k,onItemEnter:(0,o.useCallback)(e=>{V(e)&&e.preventDefault()},[V]),onItemLeave:(0,o.useCallback)(e=>{var t;V(e)||(null===(t=I.current)||void 0===t||t.focus(),P(null))},[V]),onTriggerLeave:(0,o.useCallback)(e=>{V(e)&&e.preventDefault()},[V]),pointerGraceTimerRef:A,onPointerGraceIntentChange:(0,o.useCallback)(e=>{F.current=e},[])},(0,o.createElement)(N,U,(0,o.createElement)(m.M,{asChild:!0,trapped:i,onMountAutoFocus:(0,a.M)(c,e=>{var t;e.preventDefault(),null===(t=I.current)||void 0===t||t.focus()}),onUnmountAutoFocus:d},(0,o.createElement)(f.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:w,onInteractOutside:h,onDismiss:E},(0,o.createElement)(et,(0,r.Z)({asChild:!0},R,{dir:y.dir,orientation:"vertical",loop:l,currentTabStopId:O,onCurrentTabStopIdChange:P,onEntryFocus:e=>{y.isUsingKeyboardRef.current||e.preventDefault()}}),(0,o.createElement)(S,(0,r.Z)({role:"menu","aria-orientation":"vertical","data-state":e9(b.open),"data-radix-menu-content":"",dir:y.dir},C,_,{ref:T,style:{outline:"none",..._.style},onKeyDown:(0,a.M)(_.onKeyDown,e=>{let t=e.target,n=t.closest("[data-radix-menu-content]")===e.currentTarget,r=e.ctrlKey||e.altKey||e.metaKey,o=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!r&&o&&K(e.key));let a=I.current;if(e.target!==a||!es.includes(e.key))return;e.preventDefault();let u=D().filter(e=>!e.disabled),l=u.map(e=>e.ref.current);ed.includes(e.key)&&l.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(l)}),onBlur:(0,a.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(x.current),k.current="")}),onPointerMove:(0,a.M)(e.onPointerMove,tt(e=>{let t=e.target,n=L.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>L.current?"right":"left";Z.current=t,L.current=e.clientX}}))})))))))}),eU=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(c.WV.div,(0,r.Z)({role:"group"},a,{ref:t}))}),eK=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(c.WV.div,(0,r.Z)({},a,{ref:t}))}),eV="MenuItem",eW="menu.itemSelect",eG=(0,o.forwardRef)((e,t)=>{let{disabled:n=!1,onSelect:l,...i}=e,d=(0,o.useRef)(null),s=eR(eV,e.__scopeMenu),f=eF(eV,e.__scopeMenu),p=(0,u.e)(t,d),m=(0,o.useRef)(!1),v=()=>{let e=d.current;if(!n&&e){let t=new CustomEvent(eW,{bubbles:!0,cancelable:!0});e.addEventListener(eW,e=>null==l?void 0:l(e),{once:!0}),(0,c.jH)(e,t),t.defaultPrevented?m.current=!1:s.onClose()}};return(0,o.createElement)(eB,(0,r.Z)({},i,{ref:p,disabled:n,onClick:(0,a.M)(e.onClick,v),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,a.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&ec.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),eB=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,disabled:l=!1,textValue:i,...d}=e,s=eF(eV,n),f=e_(n),p=(0,o.useRef)(null),m=(0,u.e)(t,p),[v,g]=(0,o.useState)(!1),[w,h]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=p.current;if(e){var t;h((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[d.children]),(0,o.createElement)(ev.ItemSlot,{scope:n,disabled:l,textValue:null!=i?i:w},(0,o.createElement)(er,(0,r.Z)({asChild:!0},f,{focusable:!l}),(0,o.createElement)(c.WV.div,(0,r.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":l||void 0,"data-disabled":l?"":void 0},d,{ref:m,onPointerMove:(0,a.M)(e.onPointerMove,tt(e=>{if(l)s.onItemLeave(e);else if(s.onItemEnter(e),!e.defaultPrevented){let t=e.currentTarget;t.focus()}})),onPointerLeave:(0,a.M)(e.onPointerLeave,tt(e=>s.onItemLeave(e))),onFocus:(0,a.M)(e.onFocus,()=>g(!0)),onBlur:(0,a.M)(e.onBlur,()=>g(!1))}))))}),ez=(0,o.forwardRef)((e,t)=>{let{checked:n=!1,onCheckedChange:u,...l}=e;return(0,o.createElement)(eq,{scope:e.__scopeMenu,checked:n},(0,o.createElement)(eG,(0,r.Z)({role:"menuitemcheckbox","aria-checked":e8(n)?"mixed":n},l,{ref:t,"data-state":te(n),onSelect:(0,a.M)(l.onSelect,()=>null==u?void 0:u(!!e8(n)||!n),{checkForDefaultPrevented:!1})})))}),[eX,eY]=eh("MenuRadioGroup",{value:void 0,onValueChange:()=>{}}),e$=(0,o.forwardRef)((e,t)=>{let{value:n,onValueChange:a,...u}=e,l=(0,B.W)(a);return(0,o.createElement)(eX,{scope:e.__scopeMenu,value:n,onValueChange:l},(0,o.createElement)(eU,(0,r.Z)({},u,{ref:t})))}),eH=(0,o.forwardRef)((e,t)=>{let{value:n,...u}=e,l=eY("MenuRadioItem",e.__scopeMenu),i=n===l.value;return(0,o.createElement)(eq,{scope:e.__scopeMenu,checked:i},(0,o.createElement)(eG,(0,r.Z)({role:"menuitemradio","aria-checked":i},u,{ref:t,"data-state":te(i),onSelect:(0,a.M)(u.onSelect,()=>{var e;return null===(e=l.onValueChange)||void 0===e?void 0:e.call(l,n)},{checkForDefaultPrevented:!1})})))}),ej="MenuItemIndicator",[eq,eJ]=eh(ej,{checked:!1}),eQ=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,forceMount:a,...u}=e,l=eJ(ej,n);return(0,o.createElement)(G.z,{present:a||e8(l.checked)||!0===l.checked},(0,o.createElement)(c.WV.span,(0,r.Z)({},u,{ref:t,"data-state":te(l.checked)})))}),e0=(0,o.forwardRef)((e,t)=>{let{__scopeMenu:n,...a}=e;return(0,o.createElement)(c.WV.div,(0,r.Z)({role:"separator","aria-orientation":"horizontal"},a,{ref:t}))}),e1=((e,t)=>{let{__scopeMenu:n,...a}=e,u=eM(n);return(0,o.createElement)(L,(0,r.Z)({},u,a,{ref:t}))},"MenuSub"),[e3,e4]=eh(e1),e5=e=>{let{__scopeMenu:t,children:n,open:r=!1,onOpenChange:a}=e,u=ey(e1,t),l=eM(t),[i,c]=(0,o.useState)(null),[d,s]=(0,o.useState)(null),f=(0,B.W)(a);return(0,o.useEffect)(()=>(!1===u.open&&f(!1),()=>f(!1)),[u.open,f]),(0,o.createElement)(P,l,(0,o.createElement)(eb,{scope:t,open:r,onOpenChange:f,content:d,onContentChange:s},(0,o.createElement)(e3,{scope:t,contentId:(0,v.M)(),triggerId:(0,v.M)(),trigger:i,onTriggerChange:c},n)))},e7="MenuSubTrigger",e2=(0,o.forwardRef)((e,t)=>{let n=ey(e7,e.__scopeMenu),l=eR(e7,e.__scopeMenu),i=e4(e7,e.__scopeMenu),c=eF(e7,e.__scopeMenu),d=(0,o.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=c,p={__scopeMenu:e.__scopeMenu},m=(0,o.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,o.useEffect)(()=>m,[m]),(0,o.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,o.createElement)(eO,(0,r.Z)({asChild:!0},p),(0,o.createElement)(eB,(0,r.Z)({id:i.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":i.contentId,"data-state":e9(n.open)},e,{ref:(0,u.F)(t,i.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,a.M)(e.onPointerMove,tt(t=>{c.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||d.current||(c.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,a.M)(e.onPointerLeave,tt(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,a="right"===t,u=o[a?"left":"right"],l=o[a?"right":"left"];c.onPointerGraceIntentChange({area:[{x:e.clientX+(a?-5:5),y:e.clientY},{x:u,y:o.top},{x:l,y:o.top},{x:l,y:o.bottom},{x:u,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>c.onPointerGraceIntentChange(null),300)}else{if(c.onTriggerLeave(e),e.defaultPrevented)return;c.onPointerGraceIntentChange(null)}})),onKeyDown:(0,a.M)(e.onKeyDown,t=>{let r=""!==c.searchRef.current;if(!e.disabled&&(!r||" "!==t.key)&&ef[l.dir].includes(t.key)){var o;n.onOpenChange(!0),null===(o=n.content)||void 0===o||o.focus(),t.preventDefault()}})})))}),e6=(0,o.forwardRef)((e,t)=>{let n=eT(ek,e.__scopeMenu),{forceMount:l=n.forceMount,...i}=e,c=ey(ek,e.__scopeMenu),d=eR(ek,e.__scopeMenu),s=e4("MenuSubContent",e.__scopeMenu),f=(0,o.useRef)(null),p=(0,u.e)(t,f);return(0,o.createElement)(ev.Provider,{scope:e.__scopeMenu},(0,o.createElement)(G.z,{present:l||c.open},(0,o.createElement)(ev.Slot,{scope:e.__scopeMenu},(0,o.createElement)(eN,(0,r.Z)({id:s.contentId,"aria-labelledby":s.triggerId},i,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;d.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,a.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&c.onOpenChange(!1)}),onEscapeKeyDown:(0,a.M)(e.onEscapeKeyDown,d.onClose),onKeyDown:(0,a.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=ep[d.dir].includes(e.key);if(t&&n){var r;c.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))});function e9(e){return e?"open":"closed"}function e8(e){return"indeterminate"===e}function te(e){return e8(e)?"indeterminate":e?"checked":"unchecked"}function tt(e){return t=>"mouse"===t.pointerType?e(t):void 0}let tn="DropdownMenu",[tr,to]=(0,l.b)(tn,[eE]),ta=eE(),[tu,tl]=tr(tn),ti=e=>{let{__scopeDropdownMenu:t,children:n,dir:a,open:u,defaultOpen:l,onOpenChange:c,modal:d=!0}=e,s=ta(t),f=(0,o.useRef)(null),[p=!1,m]=(0,i.T)({prop:u,defaultProp:l,onChange:c});return(0,o.createElement)(tu,{scope:t,triggerId:(0,v.M)(),triggerRef:f,contentId:(0,v.M)(),open:p,onOpenChange:m,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,o.createElement)(eD,(0,r.Z)({},s,{open:p,onOpenChange:m,dir:a,modal:d}),n))},tc=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:l=!1,...i}=e,d=tl("DropdownMenuTrigger",n),s=ta(n);return(0,o.createElement)(eO,(0,r.Z)({asChild:!0},s),(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button",id:d.triggerId,"aria-haspopup":"menu","aria-expanded":d.open,"aria-controls":d.open?d.contentId:void 0,"data-state":d.open?"open":"closed","data-disabled":l?"":void 0,disabled:l},i,{ref:(0,u.F)(t,d.triggerRef),onPointerDown:(0,a.M)(e.onPointerDown,e=>{l||0!==e.button||!1!==e.ctrlKey||(d.onOpenToggle(),d.open||e.preventDefault())}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{!l&&(["Enter"," "].includes(e.key)&&d.onOpenToggle(),"ArrowDown"===e.key&&d.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),td=e=>{let{__scopeDropdownMenu:t,...n}=e,a=ta(t);return(0,o.createElement)(ex,(0,r.Z)({},a,n))},ts=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...u}=e,l=tl("DropdownMenuContent",n),i=ta(n),c=(0,o.useRef)(!1);return(0,o.createElement)(eS,(0,r.Z)({id:l.contentId,"aria-labelledby":l.triggerId},i,u,{ref:t,onCloseAutoFocus:(0,a.M)(e.onCloseAutoFocus,e=>{var t;c.current||null===(t=l.triggerRef.current)||void 0===t||t.focus(),c.current=!1,e.preventDefault()}),onInteractOutside:(0,a.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!l.modal||r)&&(c.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)"}}))}),tf=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(eU,(0,r.Z)({},u,a,{ref:t}))}),tp=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(eK,(0,r.Z)({},u,a,{ref:t}))}),tm=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(eG,(0,r.Z)({},u,a,{ref:t}))}),tv=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(ez,(0,r.Z)({},u,a,{ref:t}))}),tg=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(e$,(0,r.Z)({},u,a,{ref:t}))}),tw=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(eH,(0,r.Z)({},u,a,{ref:t}))}),th=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(eQ,(0,r.Z)({},u,a,{ref:t}))}),tE=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(e0,(0,r.Z)({},u,a,{ref:t}))}),tM=e=>{let{__scopeDropdownMenu:t,children:n,open:a,onOpenChange:u,defaultOpen:l}=e,c=ta(t),[d=!1,s]=(0,i.T)({prop:a,defaultProp:l,onChange:u});return(0,o.createElement)(e5,(0,r.Z)({},c,{open:d,onOpenChange:s}),n)},t_=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(e2,(0,r.Z)({},u,a,{ref:t}))}),tb=(0,o.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...a}=e,u=ta(n);return(0,o.createElement)(e6,(0,r.Z)({},u,a,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)"}}))}),ty=ti,tC=tc,tR=td,tD=ts,tO=tf,tP=tp,tI=tm,tT=tv,tx=tg,tk=tw,tA=th,tF=tE,tS=tM,tZ=t_,tL=tb},3619:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7376),o=n(900),a=n(3440),u=n(493);let l=e=>{let{present:t,children:n}=e,l=function(e){var t;let[n,a]=(0,r.useState)(),l=(0,r.useRef)({}),c=(0,r.useRef)(e),d=(0,r.useRef)("none"),[s,f]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},e?"mounted":"unmounted"));return(0,r.useEffect)(()=>{let e=i(l.current);d.current="mounted"===s?e:"none"},[s]),(0,u.b)(()=>{let t=l.current,n=c.current;if(n!==e){let r=d.current,o=i(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),c.current=e}},[e,f]),(0,u.b)(()=>{if(n){let e=e=>{let t=i(l.current),r=t.includes(e.animationName);e.target===n&&r&&(0,o.flushSync)(()=>f("ANIMATION_END"))},t=e=>{e.target===n&&(d.current=i(l.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:(0,r.useCallback)(e=>{e&&(l.current=getComputedStyle(e)),a(e)},[])}}(t),c="function"==typeof n?n({present:l.isPresent}):r.Children.only(n),d=(0,a.e)(l.ref,c.ref);return"function"==typeof n||l.isPresent?(0,r.cloneElement)(c,{ref:d}):null};function i(e){return(null==e?void 0:e.animationName)||"none"}l.displayName="Presence"},7097:function(e,t,n){"use strict";var r=(0,n(1414).Z)("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);t.Z=r},2122:function(e,t,n){e.exports=n(5753)}}]);