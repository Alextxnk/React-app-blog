"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3933],{4415:function(e,t,s){s.d(t,{P:function(){return Z}});var a=s(4203),r=s(5320),n=s(8016),l=s(3565),i=s(8841),o=s(315),d=s(4674),c=s(2222),u=s(3928),f=s(4733),m=s(2971),p=s(1923),x=s(5956),h=s(7947),g=s(8493),b=s(5445),y=s(8537),w=s(8304),N=s(435),j=s(5474),k=s(6652),v=s(471),S=s(3982);let Z={logo:r.Z,close:n.Z,spinner:l.Z,chevronLeft:i.Z,chevronRight:o.Z,trash:d.Z,post:c.Z,page:u.Z,media:f.Z,student:m.Z,menu:p.Z,settings:x.Z,billing:h.Z,ellipsis:g.Z,add:b.Z,warning:y.Z,user:w.Z,arrowRight:N.Z,help:j.Z,pizza:k.Z,gitHub:e=>{let{...t}=e;return(0,a.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...t,children:(0,a.jsx)("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})},twitter:v.Z,check:S.Z}},3233:function(e,t,s){s.r(t),s.d(t,{PostCreateButton:function(){return c}});var a=s(4203),r=s(7376),n=s(6724),l=s(672),i=s(9321),o=s(4415),d=s(4949);function c(e){let{className:t,...s}=e,c=(0,n.useRouter)(),[u,f]=r.useState(!1);async function m(){f(!0);let e=await fetch("/api/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"Untitled Post"})});if(f(!1),!(null==e?void 0:e.ok))return 402===e.status?(0,l.Am)({title:"Limit of 3 posts reached.",description:"Please upgrade to the PRO plan.",variant:"destructive"}):(0,l.Am)({title:"Something went wrong.",description:"Your post was not created. Please try again.",variant:"destructive"});let t=await e.json();c.refresh(),c.push("/editor/".concat(t.id))}return(0,a.jsxs)("button",{onClick:m,className:(0,i.cn)((0,d.dc)(),{"cursor-not-allowed opacity-60":u},t),disabled:u,...s,children:[u?(0,a.jsx)(o.P.spinner,{className:"mr-2 h-4 w-4 animate-spin"}):(0,a.jsx)(o.P.add,{className:"mr-2 h-4 w-4"}),"New post"]})}},3353:function(e,t,s){s.r(t),s.d(t,{PostOperations:function(){return v}});var a=s(4203),r=s(7376),n=s(2122),l=s.n(n),i=s(6724),o=s(672),d=s(4415),c=s(413),u=s(9321);let f=c.fC;c.xz;let m=e=>{let{className:t,children:s,...r}=e;return(0,a.jsx)(c.h_,{className:(0,u.cn)(t),...r,children:(0,a.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:s})})};m.displayName=c.h_.displayName;let p=r.forwardRef((e,t)=>{let{className:s,children:r,...n}=e;return(0,a.jsx)(c.aV,{className:(0,u.cn)("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity animate-in fade-in",s),...n,ref:t})});p.displayName=c.aV.displayName;let x=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsxs)(m,{children:[(0,a.jsx)(p,{}),(0,a.jsx)(c.VY,{ref:t,className:(0,u.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 bg-white p-6 opacity-100 animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full","dark:bg-slate-900",s),...r})]})});x.displayName=c.VY.displayName;let h=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,u.cn)("flex flex-col space-y-2 text-center sm:text-left",t),...s})};h.displayName="AlertDialogHeader";let g=e=>{let{className:t,...s}=e;return(0,a.jsx)("div",{className:(0,u.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s})};g.displayName="AlertDialogFooter";let b=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.Dx,{ref:t,className:(0,u.cn)("text-lg font-semibold text-slate-900","dark:text-slate-50",s),...r})});b.displayName=c.Dx.displayName;let y=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.dk,{ref:t,className:(0,u.cn)("text-sm text-slate-500","dark:text-slate-400",s),...r})});y.displayName=c.dk.displayName;let w=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.aU,{ref:t,className:(0,u.cn)("inline-flex h-10 items-center justify-center rounded-md bg-slate-900 py-2 px-4 text-sm font-semibold text-white transition-colors hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900",s),...r})});w.displayName=c.aU.displayName;let N=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(c.$j,{ref:t,className:(0,u.cn)("mt-2 inline-flex h-10 items-center justify-center rounded-md border border-slate-200 bg-transparent py-2 px-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 sm:mt-0",s),...r})});N.displayName=c.$j.displayName;var j=s(4173);async function k(e){let t=await fetch("/api/posts/".concat(e),{method:"DELETE"});return(null==t?void 0:t.ok)||(0,o.Am)({title:"Something went wrong.",description:"Your post was not deleted. Please try again.",variant:"destructive"}),!0}function v(e){let{post:t}=e,s=(0,i.useRouter)(),[n,o]=r.useState(!1),[c,u]=r.useState(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(j.h_,{children:[(0,a.jsxs)(j.$F,{className:"flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-slate-50",children:[(0,a.jsx)(d.P.ellipsis,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Open"})]}),(0,a.jsxs)(j.AW,{align:"end",children:[(0,a.jsx)(j.Xi,{children:(0,a.jsx)(l(),{href:"/editor/".concat(t.id),className:"flex w-full",children:"Edit"})}),(0,a.jsx)(j.VD,{}),(0,a.jsx)(j.Xi,{className:"flex cursor-pointer items-center text-red-600 focus:bg-red-50",onSelect:()=>o(!0),children:"Delete"})]})]}),(0,a.jsx)(f,{open:n,onOpenChange:o,children:(0,a.jsxs)(x,{children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(b,{children:"Are you sure you want to delete this post?"}),(0,a.jsx)(y,{children:"This action cannot be undone."})]}),(0,a.jsxs)(g,{children:[(0,a.jsx)(N,{children:"Cancel"}),(0,a.jsxs)(w,{onClick:async e=>{e.preventDefault(),u(!0);let a=await k(t.id);a&&(u(!1),o(!1),s.refresh())},className:"bg-red-600 focus:ring-red-600",children:[c?(0,a.jsx)(d.P.spinner,{className:"mr-2 h-4 w-4 animate-spin"}):(0,a.jsx)(d.P.trash,{className:"mr-2 h-4 w-4"}),(0,a.jsx)("span",{children:"Delete"})]})]})]})})]})}},4949:function(e,t,s){s.d(t,{dc:function(){return i}});var a=s(4203),r=s(7376),n=s(6089),l=s(9321);let i=(0,n.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",{variants:{variant:{default:"bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",destructive:"bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",outline:"bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",subtle:"bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",ghost:"bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",link:"bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent"},size:{default:"h-10 py-2 px-4",sm:"h-9 px-2 rounded-md",lg:"h-11 px-8 rounded-md"}},defaultVariants:{variant:"default",size:"default"}}),o=r.forwardRef((e,t)=>{let{className:s,variant:r,size:n,...o}=e;return(0,a.jsx)("button",{className:(0,l.cn)(i({variant:r,size:n,className:s})),ref:t,...o})});o.displayName="Button"},4173:function(e,t,s){s.d(t,{$F:function(){return u},AW:function(){return p},VD:function(){return y},Xi:function(){return x},h_:function(){return c}});var a=s(4203),r=s(7376),n=s(4485),l=s(315),i=s(3982),o=s(7097),d=s(9321);let c=n.fC,u=n.xz;n.ZA,n.Uv,n.Tr,n.Ee;let f=r.forwardRef((e,t)=>{let{className:s,inset:r,children:i,...o}=e;return(0,a.jsxs)(n.fF,{ref:t,className:(0,d.cn)("flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700",r&&"pl-8",s),...o,children:[i,(0,a.jsx)(l.Z,{className:"ml-auto h-4 w-4"})]})});f.displayName=n.fF.displayName;let m=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.tu,{ref:t,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in slide-in-from-left-1 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",s),...r})});m.displayName=n.tu.displayName;let p=r.forwardRef((e,t)=>{let{className:s,sideOffset:r=4,...l}=e;return(0,a.jsx)(n.Uv,{children:(0,a.jsx)(n.VY,{ref:t,sideOffset:r,className:(0,d.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-100 bg-white p-1 text-slate-700 shadow-md animate-in data-[side=right]:slide-in-from-left-2 data-[side=left]:slide-in-from-right-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400",s),...l})})});p.displayName=n.VY.displayName;let x=r.forwardRef((e,t)=>{let{className:s,inset:r,...l}=e;return(0,a.jsx)(n.ck,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",r&&"pl-8",s),...l})});x.displayName=n.ck.displayName;let h=r.forwardRef((e,t)=>{let{className:s,children:r,checked:l,...o}=e;return(0,a.jsxs)(n.oC,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",s),checked:l,...o,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.wU,{children:(0,a.jsx)(i.Z,{className:"h-4 w-4"})})}),r]})});h.displayName=n.oC.displayName;let g=r.forwardRef((e,t)=>{let{className:s,children:r,...l}=e;return(0,a.jsxs)(n.Rk,{ref:t,className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm font-medium outline-none focus:bg-slate-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-700",s),...l,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(n.wU,{children:(0,a.jsx)(o.Z,{className:"h-2 w-2 fill-current"})})}),r]})});g.displayName=n.Rk.displayName;let b=r.forwardRef((e,t)=>{let{className:s,inset:r,...l}=e;return(0,a.jsx)(n.__,{ref:t,className:(0,d.cn)("px-2 py-1.5 text-sm font-semibold text-slate-900 dark:text-slate-300",r&&"pl-8",s),...l})});b.displayName=n.__.displayName;let y=r.forwardRef((e,t)=>{let{className:s,...r}=e;return(0,a.jsx)(n.Z0,{ref:t,className:(0,d.cn)("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-700",s),...r})});y.displayName=n.Z0.displayName;let w=e=>{let{className:t,...s}=e;return(0,a.jsx)("span",{className:(0,d.cn)("ml-auto text-xs tracking-widest text-slate-500",t),...s})};w.displayName="DropdownMenuShortcut"},672:function(e,t,s){s.d(t,{Am:function(){return u},pm:function(){return f}});var a=s(7376);let r=0,n=new Map,l=e=>{if(n.has(e))return;let t=setTimeout(()=>{n.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e3);n.set(e,t)},i=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":let{toastId:s}=t;return s?l(s):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,open:!1}:e)};case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],d={toasts:[]};function c(e){d=i(d,e),o.forEach(e=>{e(d)})}function u(e){let{...t}=e,s=(r=(r+1)%Number.MAX_VALUE).toString(),a=e=>c({type:"UPDATE_TOAST",toast:{...e,id:s}}),n=()=>c({type:"DISMISS_TOAST",toastId:s});return c({type:"ADD_TOAST",toast:{...t,id:s,open:!0,onOpenChange:e=>{e||n()}}}),{id:s,dismiss:n,update:a}}function f(){let[e,t]=a.useState(d);return a.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},9321:function(e,t,s){s.d(t,{cn:function(){return n},p:function(){return l}});var a=s(9754),r=s(5138);function n(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,r.m)((0,a.W)(t))}function l(e){let t=new Date(e);return t.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})}}}]);