(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[570],{4312:function(e,t,r){"use strict";var n=r(5893);r(7294);var s=r(3899);let i=e=>{let{source:t}=e;if(!t)return null;let r=t.compiledSource?t:t.content;return r?(0,n.jsx)(s.R,{...r}):null};t.Z=i},6229:function(e,t,r){"use strict";var n=r(5893),s=r(7650),i=r(6010);let a=e=>{let{className:t,animation:r="fade-in",threshold:a=.3,triggerOnce:l=!0,delay:o,duration:d,timeout:c,style:m={},children:u,...f}=e,p={fadeIn:r.includes("fade-in"),slideInRight:r.includes("slide-in-right"),slideInLeft:r.includes("slide-in-left"),slideInTop:r.includes("slide-in-top"),slideInBottom:r.includes("slide-in-bottom"),zoomIn:r.includes("zoom-in"),scaleX:r.includes("scale-x")},[h,x]=(0,s.YD)({triggerOnce:l,threshold:a,delay:c}),b=(0,i.Z)("md:transition-all",{"md:origin-left":p.scaleX,"md:duration-1000":void 0===d},!x&&{"md:opacity-0":p.fadeIn,"md:-translate-x-10":p.slideInRight,"md:translate-x-10":p.slideInLeft,"md:translate-y-5":p.slideInTop,"md:-translate-y-5":p.slideInBottom,"md:scale-90":p.zoomIn,"md:scale-x-0":p.scaleX},t);return(0,n.jsx)("div",{ref:h,className:b,style:{transitionDelay:o?"".concat(o,"ms"):void 0,transitionDuration:d?"".concat(d,"ms"):void 0,...m},...f,children:u})};t.Z=a},3570:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return F}});var n=r(5893),s=r(7294),i=r(6010),a=r(7536),l=r(4312),o=r(6229),d=r(7636);let c=s.forwardRef((e,t)=>(0,n.jsx)(d.Z,{...e,ref:t,type:"textarea"}));c.displayName="FormTextarea";let m=s.forwardRef((e,t)=>{let{label:r,name:s,autoComplete:a,hasError:l,...o}=e;return(0,n.jsxs)(n.Fragment,{children:[r&&(0,n.jsx)("label",{htmlFor:s,className:"block",children:r}),(0,n.jsx)("select",{ref:t,id:s,name:s,autoComplete:a,className:(0,i.Z)("block w-full border-0 py-3 px-4","border-b bg-omega-700/20  placeholder-omega-400",l?"border-red-500 focus:border-0 focus:ring-red-500":"border-accent focus:ring-accent-500"),...o,children:e.options.map((e,t)=>{let{label:r,...s}=e;return(0,n.jsx)("option",{className:"text-black",...s,children:r},t)})})]})});m.displayName="FormSelect";let u=s.forwardRef((e,t)=>{let{id:r,label:s,value:i,type:l="checkbox",name:o}=e,{setValue:d}=(0,a.Gc)(),c=e=>{let{value:t,checked:r}=e.target;d(e.target.name,t||r)};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("input",{ref:t,id:r,name:o,type:l,value:i,className:"h-6 w-6 border-omega-300 text-accent-600 focus:ring-accent-500",onChange:c}),(0,n.jsx)("label",{htmlFor:r,className:"ml-3 block",children:s})]})});u.displayName="FormCheckbox";let f=s.forwardRef((e,t)=>(0,n.jsx)(u,{...e,ref:t,type:"radio"}));f.displayName="FormRadio";var p=r(1893),h=r(454),x=r(6788);let b={_origin:"https://api.emailjs.com"},g=(e,t="https://api.emailjs.com")=>{b._userID=e,b._origin=t},v=(e,t,r)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class w{constructor(e){this.status=e?e.status:0,this.text=e?e.responseText:"Network Error"}}let y=(e,t,r={})=>new Promise((n,s)=>{let i=new XMLHttpRequest;i.addEventListener("load",({target:e})=>{let t=new w(e);200===t.status||"OK"===t.text?n(t):s(t)}),i.addEventListener("error",({target:e})=>{s(new w(e))}),i.open("POST",b._origin+e,!0),Object.keys(r).forEach(e=>{i.setRequestHeader(e,r[e])}),i.send(t)}),j=(e,t,r,n)=>{let s=n||b._userID;return v(s,e,t),y("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:s,service_id:e,template_id:t,template_params:r}),{"Content-type":"application/json"})},I=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},N=(e,t,r,n)=>{let s=n||b._userID,i=I(r);v(s,e,t);let a=new FormData(i);return a.append("lib_version","3.11.0"),a.append("service_id",e),a.append("template_id",t),a.append("user_id",s),y("/api/v1.0/email/send-form",a)};var _={init:g,send:j,sendForm:N},k=r(3454);let E=k.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,C=k.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,R=k.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,{inputs:S}=x.vc.contactForm||{},T={text:d.Z,textarea:c,select:m,radio:f,checkbox:u},M=e=>{let{errors:t,name:r}=e;return t[r]?(0,n.jsx)("div",{className:"mb-4 block bg-red-500/5 px-4 py-2 text-red-500",children:t[r].message}):null},D=()=>(0,n.jsx)(o.Z,{animation:"fade-in",children:(0,n.jsx)("div",{className:"absolute inset-0 z-20 flex h-full w-full items-center justify-center bg-omega-800/95",children:(0,n.jsxs)("div",{className:"max-w-md text-center",children:[(0,n.jsx)(h.Rqm,{className:"mx-auto text-5xl text-alpha"}),(0,n.jsx)("h5",{children:"Thank you for contacting me."}),(0,n.jsx)("p",{children:"I will get back to you as soon as possible."})]})})}),L=e=>{let{main:t={}}=e,r=(0,a.cI)(),{register:d,formState:{errors:c,isValidating:m,isSubmitting:u,isSubmitSuccessful:f},handleSubmit:h,setError:x,clearErrors:b}=r,g=async e=>{if(!e.email)return{error:"Missing email address. Please provide a correct email address."};let t={subject:"Message from Portfolio",firstName:e["first-name"],lastName:e["last-name"],phone:e.phone,email:e.email,message_html:e};console.log(JSON.stringify(e));try{await _.send(R,E,t,C)}catch(e){x("service",{type:"serviceSideError",message:e})}};return s.useEffect(()=>{c.service&&m&&b("service")},[m,c.service,b]),(0,n.jsx)("div",{className:"my-auto p-3 md:p-6 lg:p-12",children:(0,n.jsxs)("div",{className:"prose prose-invert items-start lg:flex",children:[(0,n.jsx)(o.Z,{animation:"fade-in slide-in-right",className:"prose prose-invert basis-1/3 lg:mr-14",children:(0,n.jsx)(l.Z,{source:t})}),(0,n.jsx)(o.Z,{animation:"fade-in zoom-in",className:"md:with-back-plate max-w-3xl border border-omega-700 md:before:bg-omega-700",children:(0,n.jsx)(a.RV,{...r,children:(0,n.jsx)("form",{onSubmit:h(g),children:(0,n.jsxs)("div",{className:"relative overflow-hidden shadow",children:[f&&(0,n.jsx)(D,{}),(0,n.jsx)("div",{className:"bg-gradient-omega-900",children:null==S?void 0:S.map((e,t)=>{let{legend:r,columns:s,fields:a}=e;return(0,n.jsxs)("fieldset",{className:"border-b border-dashed border-omega-700",children:[(0,n.jsx)("div",{className:"bg-omega-800 p-5",children:(0,n.jsx)("legend",{className:"m-0 p-0",children:r})}),(0,n.jsx)("div",{className:(0,i.Z)("grid gap-2 p-5",{"md:grid-cols-2":2===s,"md:grid-cols-3":3===s}),children:a.map((e,t)=>{let r=T[e.type];return e.type&&r?(0,n.jsx)("div",{className:"flex items-center",required:!0,children:(0,n.jsx)(r,{...e,...d(e.id||e.name)})},(e.id||e.name)+t):null})})]},t)})}),(0,n.jsxs)("div",{className:"bg-omega-900 px-4 pt-6 pb-8 text-left md:px-8",children:[(0,n.jsx)(M,{errors:c,name:"service"}),(0,n.jsx)(p.Z,{as:"button",type:"submit",size:"sm",className:"w-full sm:w-1/3",disabled:u,children:"Submit"})]})]})})})})]})})};var F=L},2746:function(e,t,r){let n=r(5893);e.exports.c=n},3899:function(e,t,r){"use strict";r.d(t,{R:function(){return l}});var n={};r.r(n),r.d(n,{MDXContext:function(){return a.pC},MDXProvider:function(){return a.Zo},useMDXComponents:function(){return a.ah},withMDXComponents:function(){return a.NF}});var s=r(7294),i=r(2746),a=r(1151);function l({compiledSource:e,frontmatter:t,scope:r,components:l={},lazy:o}){let[d,c]=(0,s.useState)(!o||"undefined"==typeof window);(0,s.useEffect)(()=>{if(o){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let m=(0,s.useMemo)(()=>{let s=Object.assign({opts:{...n,...i.c}},{frontmatter:t},r),a=Object.keys(s),l=Object.values(s),o=Reflect.construct(Function,a.concat(`${e}`));return o.apply(o,l).default},[r,e]);if(!d)return s.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=s.createElement(a.Zo,{components:l},s.createElement(m,null));return o?s.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},7650:function(e,t,r){"use strict";let n;r.d(t,{YD:function(){return o}});var s=r(7294);let i=new Map,a=new WeakMap,l=0;function o({threshold:e,delay:t,trackVisibility:r,rootMargin:o,root:d,triggerOnce:c,skip:m,initialInView:u,fallbackInView:f,onChange:p}={}){var h;let[x,b]=s.useState(null),g=s.useRef(),[v,w]=s.useState({inView:!!u,entry:void 0});g.current=p,s.useEffect(()=>{let s;if(!m&&x)return s=function(e,t,r={},s=n){if(void 0===window.IntersectionObserver&&void 0!==s){let n=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:o,observer:d,elements:c}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var r;return`${t}_${"root"===t?(r=e.root)?(a.has(r)||(l+=1,a.set(r,l.toString())),a.get(r)):"0":e[t]}`}).toString(),r=i.get(t);if(!r){let n;let s=new Map,a=new IntersectionObserver(t=>{t.forEach(t=>{var r;let i=t.isIntersecting&&n.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(r=s.get(t.target))||r.forEach(e=>{e(i,t)})})},e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:a,elements:s},i.set(t,r)}return r}(r),m=c.get(e)||[];return c.has(e)||c.set(e,m),m.push(t),d.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(c.delete(e),d.unobserve(e)),0===c.size&&(d.disconnect(),i.delete(o))}}(x,(e,t)=>{w({inView:e,entry:t}),g.current&&g.current(e,t),t.isIntersecting&&c&&s&&(s(),s=void 0)},{root:d,rootMargin:o,threshold:e,trackVisibility:r,delay:t},f),()=>{s&&s()}},[Array.isArray(e)?e.toString():e,x,d,o,c,m,r,f,t]);let y=null==(h=v.entry)?void 0:h.target;s.useEffect(()=>{x||!y||c||m||w({inView:!!u,entry:void 0})},[x,y,c,m,u]);let j=[b,v.inView,v.entry];return j.ref=j[0],j.inView=j[1],j.entry=j[2],j}}}]);