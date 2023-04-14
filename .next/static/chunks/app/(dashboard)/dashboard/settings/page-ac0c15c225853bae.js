(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8748],{9180:function(e,n,s){Promise.resolve().then(s.bind(s,4506)),Promise.resolve().then(s.bind(s,6640)),Promise.resolve().then(s.bind(s,5986)),Promise.resolve().then(s.bind(s,7415)),Promise.resolve().then(s.bind(s,8344))},213:function(e,n,s){"use strict";s.d(n,{Z:function(){return i}});var t=s(4203),r=s(9321);function a(e){let{className:n,...s}=e;return(0,t.jsx)("div",{className:(0,r.cn)("h-5 w-2/5 animate-pulse rounded-lg bg-slate-100",n),...s})}function i(e){let{className:n,...s}=e;return(0,t.jsx)("div",{className:(0,r.cn)("overflow-hidden rounded-lg border",n),...s})}i.Header=function(e){let{className:n,...s}=e;return(0,t.jsx)("div",{className:(0,r.cn)("grid gap-1 p-6",n),...s})},i.Content=function(e){let{className:n,...s}=e;return(0,t.jsx)("div",{className:(0,r.cn)("px-6 pb-4",n),...s})},i.Footer=function(e){let{className:n,...s}=e;return(0,t.jsx)("div",{className:(0,r.cn)("border-t bg-slate-50 px-6 py-4",n),...s})},i.Title=function(e){let{className:n,...s}=e;return(0,t.jsx)("h4",{className:(0,r.cn)("text-lg font-medium",n),...s})},i.Description=function(e){let{className:n,...s}=e;return(0,t.jsx)("p",{className:(0,r.cn)("text-sm text-gray-600",n),...s})},i.Skeleton=function(){return(0,t.jsxs)(i,{children:[(0,t.jsxs)(i.Header,{className:"gap-2",children:[(0,t.jsx)(a,{className:"h-5 w-1/5"}),(0,t.jsx)(a,{className:"h-4 w-4/5"})]}),(0,t.jsx)(i.Content,{className:"h-10"}),(0,t.jsx)(i.Footer,{children:(0,t.jsx)(a,{className:"h-8 w-[120px] bg-slate-200"})})]})}},8344:function(e,n,s){"use strict";s.r(n),s.d(n,{UserNameForm:function(){return N}});var t=s(4203),r=s(7376),a=s(6724),i=s(672),l=s(3410),o=s(5289),c=s(9321),u=s(9457);let d=u.Ry({name:u.Z_().min(3).max(32)});var m=s(4415),h=s(4949),x=s(213),f=s(5652),p=s(8830);function N(e){let{user:n,className:s,...u}=e,N=(0,a.useRouter)(),{handleSubmit:j,register:v,formState:{errors:b}}=(0,o.cI)({resolver:(0,l.F)(d),defaultValues:{name:(null==n?void 0:n.name)||""}}),[g,_]=r.useState(!1);async function w(e){_(!0);let s=await fetch("/api/users/".concat(n.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name})});if(_(!1),!(null==s?void 0:s.ok))return(0,i.Am)({title:"Something went wrong.",description:"Your name was not updated. Please try again.",variant:"destructive"});(0,i.Am)({description:"Your name has been updated."}),N.refresh()}return(0,t.jsx)("form",{className:(0,c.cn)(s),onSubmit:j(w),...u,children:(0,t.jsxs)(x.Z,{children:[(0,t.jsxs)(x.Z.Header,{children:[(0,t.jsx)(x.Z.Title,{children:"Your Name"}),(0,t.jsx)(x.Z.Description,{children:"Please enter your full name or a display name you are comfortable with."})]}),(0,t.jsx)(x.Z.Content,{children:(0,t.jsxs)("div",{className:"grid gap-1",children:[(0,t.jsx)(p._,{className:"sr-only",htmlFor:"name",children:"Name"}),(0,t.jsx)(f.I,{id:"name",className:"w-[400px]",size:32,...v("name")}),(null==b?void 0:b.name)&&(0,t.jsx)("p",{className:"px-1 text-xs text-red-600",children:b.name.message})]})}),(0,t.jsx)(x.Z.Footer,{children:(0,t.jsxs)("button",{type:"submit",className:(0,c.cn)((0,h.dc)(),s),disabled:g,children:[g&&(0,t.jsx)(m.P.spinner,{className:"mr-2 h-4 w-4 animate-spin"}),(0,t.jsx)("span",{children:"Save"})]})})]})})}},7415:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.suspense=function(){let e=Error(t.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=t.NEXT_DYNAMIC_NO_SSR_CODE,e},n.NoSSR=function(e){let{children:n}=e;return n},(0,s(4450).Z)(s(7376));var t=s(5157)}},function(e){e.O(0,[2822,2574,6171,5827,1744],function(){return e(e.s=9180)}),_N_E=e.O()}]);