(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4665],{2588:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3440:function(e,t,r){"use strict";r.d(t,{F:function(){return a},e:function(){return i}});var n=r(7376);function a(...e){return t=>e.forEach(e=>{var r;"function"==typeof(r=e)?r(t):null!=r&&(r.current=t)})}function i(...e){return(0,n.useCallback)(a(...e),e)}},2981:function(e,t,r){"use strict";r.d(t,{f:function(){return l}});var n=r(2588),a=r(7376),i=r(689);let s=(0,a.forwardRef)((e,t)=>(0,a.createElement)(i.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),l=s},689:function(e,t,r){"use strict";r.d(t,{WV:function(){return l},jH:function(){return o}});var n=r(2588),a=r(7376),i=r(900),s=r(4444);let l=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,a.forwardRef)((e,r)=>{let{asChild:i,...l}=e,o=i?s.g7:t;return(0,a.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,a.createElement)(o,(0,n.Z)({},l,{ref:r}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function o(e,t){e&&(0,i.flushSync)(()=>e.dispatchEvent(t))}},4444:function(e,t,r){"use strict";r.d(t,{A4:function(){return o},g7:function(){return s}});var n=r(2588),a=r(7376),i=r(3440);let s=(0,a.forwardRef)((e,t)=>{let{children:r,...i}=e,s=a.Children.toArray(r),o=s.find(c);if(o){let e=o.props.children,r=s.map(t=>t!==o?t:a.Children.count(e)>1?a.Children.only(null):(0,a.isValidElement)(e)?e.props.children:null);return(0,a.createElement)(l,(0,n.Z)({},i,{ref:t}),(0,a.isValidElement)(e)?(0,a.cloneElement)(e,void 0,r):null)}return(0,a.createElement)(l,(0,n.Z)({},i,{ref:t}),r)});s.displayName="Slot";let l=(0,a.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,a.isValidElement)(r)?(0,a.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let a=e[n],i=t[n],s=/^on[A-Z]/.test(n);s?a&&i?r[n]=(...e)=>{i(...e),a(...e)}:a&&(r[n]=a):"style"===n?r[n]={...a,...i}:"className"===n&&(r[n]=[a,i].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:(0,i.F)(t,r.ref)}):a.Children.count(r)>1?a.Children.only(null):null});l.displayName="SlotClone";let o=({children:e})=>(0,a.createElement)(a.Fragment,null,e);function c(e){return(0,a.isValidElement)(e)&&e.type===o}},6089:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.flat(1/0).filter(Boolean).join(" ")},i=(e,t)=>r=>{var i;if((null==t?void 0:t.variants)==null)return a(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:s,defaultVariants:l}=t,o=Object.keys(s).map(e=>{let t=null==r?void 0:r[e],a=null==l?void 0:l[e];if(null===t)return null;let i=n(t)||n(a);return s[e][i]}),c=r&&Object.entries(r).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{}),u=null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((e,t)=>{let{class:r,className:n,...a}=t;return Object.entries(a).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...l,...c}[t]):({...l,...c})[t]===r})?[...e,r,n]:e},[]);return a(e,o,u,null==r?void 0:r.class,null==r?void 0:r.className)}},1414:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7376),a=r(9478),i=r.n(a),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=["color","size","strokeWidth","children"];function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var c=function(e,t){var r=(0,n.forwardRef)(function(r,a){var i=r.color,c=r.size,u=void 0===c?24:c,d=r.strokeWidth,f=r.children,p=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(r,l);return(0,n.createElement)("svg",o({ref:a},s,{width:u,height:u,stroke:void 0===i?"currentColor":i,strokeWidth:void 0===d?2:d,className:"lucide lucide-"+e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()},p),[].concat(t.map(function(e){var t=e[0],r=e[1];return(0,n.createElement)(t,r)}),f||[]))});return r.propTypes={color:i().string,size:i().oneOfType([i().string,i().number]),strokeWidth:i().oneOfType([i().string,i().number])},r.displayName=""+e,r}},8537:function(e,t,r){"use strict";var n=(0,r(1414).Z)("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["line",{x1:"12",y1:"9",x2:"12",y2:"13",key:"mb7vjk"}],["line",{x1:"12",y1:"17",x2:"12.01",y2:"17",key:"kdstpg"}]]);t.Z=n},1923:function(e,t,r){"use strict";var n=(0,r(1414).Z)("AlignLeft",[["line",{x1:"21",y1:"6",x2:"3",y2:"6",key:"1e448z"}],["line",{x1:"15",y1:"12",x2:"3",y2:"12",key:"80e4vw"}],["line",{x1:"17",y1:"18",x2:"3",y2:"18",key:"1771gn"}]]);t.Z=n},435:function(e,t,r){"use strict";var n=(0,r(1414).Z)("ArrowRight",[["line",{x1:"5",y1:"12",x2:"19",y2:"12",key:"1smlys"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]);t.Z=n},3982:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Check",[["polyline",{points:"20 6 9 17 4 12",key:"10jjfj"}]]);t.Z=n},8841:function(e,t,r){"use strict";var n=(0,r(1414).Z)("ChevronLeft",[["polyline",{points:"15 18 9 12 15 6",key:"kvxz59"}]]);t.Z=n},315:function(e,t,r){"use strict";var n=(0,r(1414).Z)("ChevronRight",[["polyline",{points:"9 18 15 12 9 6",key:"1rtp27"}]]);t.Z=n},5320:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Command",[["path",{d:"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z",key:"uqkaba"}]]);t.Z=n},7947:function(e,t,r){"use strict";var n=(0,r(1414).Z)("CreditCard",[["rect",{x:"2",y:"5",width:"20",height:"14",rx:"2",key:"qneu4z"}],["line",{x1:"2",y1:"10",x2:"22",y2:"10",key:"1ytoly"}]]);t.Z=n},7355:function(e,t,r){"use strict";var n=(0,r(1414).Z)("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}]]);t.Z=n},3208:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);t.Z=n},2222:function(e,t,r){"use strict";var n=(0,r(1414).Z)("FileText",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}],["line",{x1:"16",y1:"13",x2:"8",y2:"13",key:"7g4hpw"}],["line",{x1:"16",y1:"17",x2:"8",y2:"17",key:"1nzzn0"}],["line",{x1:"10",y1:"9",x2:"8",y2:"9",key:"13jkcr"}]]);t.Z=n},3928:function(e,t,r){"use strict";var n=(0,r(1414).Z)("File",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["polyline",{points:"14 2 14 8 20 8",key:"1ew0cm"}]]);t.Z=n},2971:function(e,t,r){"use strict";var n=(0,r(1414).Z)("GraduationCap",[["path",{d:"M22 10v6M2 10l10-5 10 5-10 5z",key:"1ef52a"}],["path",{d:"M6 12v5c3 3 9 3 12 0v-5",key:"1f75yj"}]]);t.Z=n},5474:function(e,t,r){"use strict";var n=(0,r(1414).Z)("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",y1:"17",x2:"12.01",y2:"17",key:"kdstpg"}]]);t.Z=n},4733:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Image",[["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2",key:"maln0c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);t.Z=n},5512:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);t.Z=n},3565:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);t.Z=n},8221:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Moon",[["path",{d:"M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"1rit1i"}]]);t.Z=n},8493:function(e,t,r){"use strict";var n=(0,r(1414).Z)("MoreVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);t.Z=n},6652:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Pizza",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z",key:"1akyvp"}],["path",{d:"M17 6c-6.29 1.47-9.43 5.13-11 11",key:"1dsok0"}]]);t.Z=n},5445:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Plus",[["line",{x1:"12",y1:"5",x2:"12",y2:"19",key:"myz83a"}],["line",{x1:"5",y1:"12",x2:"19",y2:"12",key:"1smlys"}]]);t.Z=n},5956:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);t.Z=n},2171:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);t.Z=n},4674:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);t.Z=n},471:function(e,t,r){"use strict";var n=(0,r(1414).Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);t.Z=n},8304:function(e,t,r){"use strict";var n=(0,r(1414).Z)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);t.Z=n},8016:function(e,t,r){"use strict";var n=(0,r(1414).Z)("X",[["line",{x1:"18",y1:"6",x2:"6",y2:"18",key:"1o5bob"}],["line",{x1:"6",y1:"6",x2:"18",y2:"18",key:"z4dcbv"}]]);t.Z=n},7590:function(e,t,r){Promise.resolve().then(r.t.bind(r,5753,23)),Promise.resolve().then(r.bind(r,4432))},4415:function(e,t,r){"use strict";r.d(t,{P:function(){return T}});var n=r(4203),a=r(5320),i=r(8016),s=r(3208),l=r(7355),o=r(2171),c=r(8221),u=r(5512),d=r(3565),f=r(8841),p=r(315),y=r(4674),h=r(2222),m=r(3928),v=r(4733),k=r(2971),x=r(1923),g=r(5956),Z=r(7947),b=r(8493),w=r(5445),j=r(8537),M=r(8304),O=r(435),z=r(5474),C=r(6652),E=r(471),S=r(3982);let T={logo:a.Z,close:i.Z,eye:s.Z,eyeOff:l.Z,sun:o.Z,moon:c.Z,laptop:u.Z,spinner:d.Z,chevronLeft:f.Z,chevronRight:p.Z,trash:y.Z,post:h.Z,page:m.Z,media:v.Z,student:k.Z,menu:x.Z,settings:g.Z,billing:Z.Z,ellipsis:b.Z,add:w.Z,warning:j.Z,user:M.Z,arrowRight:O.Z,help:z.Z,pizza:C.Z,gitHub:e=>{let{...t}=e;return(0,n.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,n.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},twitter:E.Z,check:S.Z}},4949:function(e,t,r){"use strict";r.d(t,{d:function(){return l},z:function(){return o}});var n=r(4203),a=r(7376),i=r(6089),s=r(9321);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",{variants:{variant:{default:"bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",destructive:"bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",outline:"bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",subtle:"bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",ghost:"bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",link:"bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-2 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),o=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,...o}=e;return(0,n.jsx)("button",{className:(0,s.cn)(l({variant:a,size:i,className:r})),ref:t,...o})});o.displayName="Button"},5652:function(e,t,r){"use strict";r.d(t,{I:function(){return s}});var n=r(4203),a=r(7376),i=r(9321);let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("input",{className:(0,i.cn)("flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",r),ref:t,...a})});s.displayName="Input"},8680:function(e,t,r){"use strict";r.d(t,{_:function(){return l}});var n=r(4203),a=r(7376),i=r(2981),s=r(9321);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(i.f,{ref:t,className:(0,s.cn)("text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",r),...a})});l.displayName=i.f.displayName},4432:function(e,t,r){"use strict";r.r(t),r.d(t,{UserAuthForm:function(){return m}});var n=r(4203),a=r(7376),i=r(6724),s=r(672),l=r(3410),o=r(7631),c=r(5289),u=r(9321),d=r(1105),f=r(4415),p=r(4949),y=r(5652),h=r(8680);function m(e){let{className:t,...r}=e,{register:m,handleSubmit:v,formState:{errors:k}}=(0,c.cI)({resolver:(0,l.F)(d.J)}),[x,g]=a.useState(!1),[Z,b]=a.useState(!1),w=(0,i.useSearchParams)();async function j(e){g(!0);let t=await (0,o.signIn)("email",{email:e.email.toLowerCase(),redirect:!1,callbackUrl:(null==w?void 0:w.get("from"))||"/dashboard"});return(g(!1),null==t?void 0:t.ok)?(0,s.Am)({title:"Проверьте свою электронную почту",description:"Мы отправили вам ссылку для входа в систему. Обязательно проверьте также свой спам."}):(0,s.Am)({title:"Что-то пошло не так.",description:"Ваш запрос на вход не выполнен. Пожалуйста, попробуйте снова.",variant:"destructive"})}let[M,O]=a.useState(!1),z=()=>{O(e=>!e)};return(0,n.jsx)("div",{className:(0,u.cn)("grid gap-6",t),...r,children:(0,n.jsx)("form",{onSubmit:v(j),children:(0,n.jsxs)("div",{className:"grid gap-2",children:[(0,n.jsxs)("div",{className:"grid gap-1",children:[(0,n.jsx)(h._,{className:"ml-1 mb-1",htmlFor:"email",children:"Электронная почта"}),(0,n.jsx)(y.I,{id:"email",placeholder:"name@example.com",type:"email",autoCapitalize:"none",autoComplete:"email",autoCorrect:"off",disabled:x||Z,...m("email")}),(null==k?void 0:k.email)&&(0,n.jsx)("p",{className:"ml-1 text-sm text-red-600",children:k.email.message})]}),(0,n.jsxs)("div",{className:"grid gap-1",children:[(0,n.jsx)(h._,{className:"ml-1 mb-1",htmlFor:"password",children:"Пароль"}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)(y.I,{id:"password",type:M?"text":"password",autoCapitalize:"none",autoComplete:"password",autoCorrect:"off",disabled:x||Z,...m("password")}),(0,n.jsx)("button",{className:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5",type:"button",onClick:z,children:M?(0,n.jsx)(f.P.eyeOff,{}):(0,n.jsx)(f.P.eye,{})})]}),(null==k?void 0:k.password)&&(0,n.jsx)("p",{className:"ml-1 text-sm text-red-600",children:k.password.message})]}),(0,n.jsxs)("button",{className:(0,u.cn)((0,p.d)()),disabled:x,children:[x&&(0,n.jsx)(f.P.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Войти"]})]})})})}},672:function(e,t,r){"use strict";r.d(t,{Am:function(){return d},pm:function(){return f}});var n=r(7376);let a=0,i=new Map,s=e=>{if(i.has(e))return;let t=setTimeout(()=>{i.delete(e),u({type:"REMOVE_TOAST",toastId:e})},1e3);i.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":let{toastId:r}=t;return r?s(r):e.toasts.forEach(e=>{s(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)};case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function u(e){c=l(c,e),o.forEach(e=>{e(c)})}function d(e){let{...t}=e,r=(a=(a+1)%Number.MAX_VALUE).toString(),n=e=>u({type:"UPDATE_TOAST",toast:{...e,id:r}}),i=()=>u({type:"DISMISS_TOAST",toastId:r});return u({type:"ADD_TOAST",toast:{...t,id:r,open:!0,onOpenChange:e=>{e||i()}}}),{id:r,dismiss:i,update:n}}function f(){let[e,t]=n.useState(c);return n.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:d,dismiss:e=>u({type:"DISMISS_TOAST",toastId:e})}}},9321:function(e,t,r){"use strict";r.d(t,{cn:function(){return i},p:function(){return s}});var n=r(9754),a=r(5138);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m)((0,n.W)(t))}function s(e){let t=new Date(e);return t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}},1105:function(e,t,r){"use strict";r.d(t,{$:function(){return i},J:function(){return a}});var n=r(9457);let a=n.Ry({email:n.Z_().email("Email введен некорректно"),password:n.Z_().min(8,{message:"Пароль должен состоять минимум из 8 символов"})}),i=n.Ry({email:n.Z_().email("Email введен некорректно"),password:n.Z_().min(8,{message:"Пароль должен состоять минимум из 8 символов"}),appointment:n.Z_()})},6724:function(e,t,r){e.exports=r(8066)},2677:function(e,t,r){"use strict";var n=r(4646);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,i,s){if(s!==n){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return r.PropTypes=r,r}},9478:function(e,t,r){e.exports=r(2677)()},4646:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[5753,2822,8030,7631,5827,1744],function(){return e(e.s=7590)}),_N_E=e.O()}]);