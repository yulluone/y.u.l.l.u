(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19],{2331:function(e,t,n){"use strict";var s=n(5893);n(7294);var i=n(6010),a=n(1664),l=n.n(a),r=n(3771),o=n(4027),d=n(209);let c=e=>{let{className:t,title:n,images:a,slug:c,date:m,tags:u}=e;return(0,s.jsxs)("div",{className:(0,i.Z)("group prose prose-zinc flex dark:prose-invert","md:bg-gradient-omega-900 md:shadow-lg",t),children:[(null==a?void 0:a[0])&&(0,s.jsx)(l(),{href:c.join("/"),"aria-label":n,className:"not-prose relative inline-block h-32 w-1/3 overflow-hidden md:h-40",children:(0,s.jsx)(r.Z,{src:a[0].src,alt:a[0].alt||n,animation:"fade-in zoom-out",wrapperClassName:"transition-transform group-hover:scale-105 duration-300 ease-out before:bg-omega-700",className:"object-cover",sizes:"(min-width: 540px) 428px, 16vw",fill:!0})}),(0,s.jsxs)("div",{className:"w-2/3 px-2 md:p-5",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("div",{className:"space-x-1",children:null==u?void 0:u.map(e=>(0,s.jsx)(o.Z,{slug:e.slug,className:"m-0.5 font-mono text-sm lg:mr-2",children:e.title},e.title))}),m&&(0,s.jsx)("div",{className:"hidden text-omega-500 md:block",children:(0,s.jsx)(d.Z,{className:"block align-middle font-mono text-xs font-bold uppercase",date:m})})]}),(0,s.jsx)(l(),{href:c.join("/"),"aria-label":n,children:(0,s.jsx)("h6",{className:"mb-0 mt-2 transition-colors group-hover:text-accent dark:group-hover:text-alpha md:mt-3",children:n})})]})]})};t.Z=c},1432:function(e,t,n){"use strict";var s=n(5893);n(7294);var i=n(6229),a=n(9249);let l=e=>{let{title:t,list:n}=e;return(0,s.jsxs)("div",{className:"prose prose-invert flex h-12 flex-wrap items-center justify-between",children:[t&&(0,s.jsx)("h4",{className:"mb-4 w-full lg:mb-0 lg:w-auto",children:t}),n&&n.map((e,t)=>{let{icon:n}=e;return(0,s.jsx)(i.Z,{animation:"fade-in zoom-in",delay:250*t,children:n&&(0,s.jsx)(a.Z,{...n,className:"h-12 w-36 fill-current text-omega-500"})},t)})]})};t.Z=l},4312:function(e,t,n){"use strict";var s=n(5893);n(7294);var i=n(3899);let a=e=>{let{source:t}=e;if(!t)return null;let n=t.compiledSource?t:t.content;return n?(0,s.jsx)(i.R,{...n}):null};t.Z=a},209:function(e,t,n){"use strict";var s=n(5893);n(7294);var i=n(6788);let a=e=>{let{date:t,className:n,...a}=e;if(!t)return null;let l=new Date(t);return(0,s.jsxs)("dl",{className:n,...a,children:[(0,s.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,s.jsx)("dd",{className:"inline",children:(0,s.jsx)("time",{dateTime:t,children:l.toLocaleDateString(i.vc.dateLocale,i.vc.dateOptions)})})]})};t.Z=a},3771:function(e,t,n){"use strict";var s=n(5893),i=n(7294),a=n(6010),l=n(5675),r=n.n(l);let o=e=>{let[t,n]=i.useState(!1),{wrapperClassName:l,className:o,animation:d="fade-in",alt:c,quality:m=90,...u}=e,f={fadeIn:d.includes("fade-in"),zoomOut:d.includes("zoom-out"),maskRight:d.includes("mask-right"),maskLeft:d.includes("mask-left"),slideInTop:d.includes("slide-in-top")},x=()=>{n(!0)};return(0,s.jsxs)("div",{className:(0,a.Z)("relative overflow-hidden",{"h-full w-full":u.fill},l),children:[(0,s.jsx)("div",{className:(0,a.Z)("absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-omega-900","origin-bottom skew-x-6 transform-gpu transition-transform duration-700",(f.maskRight||f.maskLeft)&&"md:block",{"translate-x-full":t&&f.maskRight,"-translate-x-full":t&&f.maskLeft})}),(0,s.jsx)(r(),{onLoadingComplete:x,className:(0,a.Z)("md:transform-gpu md:transition-all md:duration-700",!t&&{"md:opacity-0":f.fadeIn,"md:scale-150 md:will-change-transform":f.zoomOut,"md:translate-y-20 md:will-change-transform":f.slideInTop},o),alt:c,quality:m,...u})]})};t.Z=o},6229:function(e,t,n){"use strict";var s=n(5893),i=n(7650),a=n(6010);let l=e=>{let{className:t,animation:n="fade-in",threshold:l=.3,triggerOnce:r=!0,delay:o,duration:d,timeout:c,style:m={},children:u,...f}=e,x={fadeIn:n.includes("fade-in"),slideInRight:n.includes("slide-in-right"),slideInLeft:n.includes("slide-in-left"),slideInTop:n.includes("slide-in-top"),slideInBottom:n.includes("slide-in-bottom"),zoomIn:n.includes("zoom-in"),scaleX:n.includes("scale-x")},[h,p]=(0,i.YD)({triggerOnce:r,threshold:l,delay:c}),g=(0,a.Z)("md:transition-all",{"md:origin-left":x.scaleX,"md:duration-1000":void 0===d},!p&&{"md:opacity-0":x.fadeIn,"md:-translate-x-10":x.slideInRight,"md:translate-x-10":x.slideInLeft,"md:translate-y-5":x.slideInTop,"md:-translate-y-5":x.slideInBottom,"md:scale-90":x.zoomIn,"md:scale-x-0":x.scaleX},t);return(0,s.jsx)("div",{ref:h,className:g,style:{transitionDelay:o?"".concat(o,"ms"):void 0,transitionDuration:d?"".concat(d,"ms"):void 0,...m},...f,children:u})};t.Z=l},4027:function(e,t,n){"use strict";var s=n(5893);n(7294);var i=n(6010),a=n(1664),l=n.n(a);let r=e=>{let{children:t,className:n,slug:a,...r}=e,o=Array.isArray(a),d=o?l():"span",c=o?a.join("/"):void 0;return(0,s.jsx)(d,{className:(0,i.Z)("inline-block select-none px-3 py-1 uppercase no-underline","bg-beta/10 text-beta",o&&"hover:bg-beta/20",n),href:c,...r,children:t})};t.Z=r},6019:function(e,t,n){"use strict";n.r(t);var s=n(5893);n(7294);var i=n(6010),a=n(4312),l=n(3771),r=n(4477),o=n(2331),d=n(6229),c=n(1432);let m=e=>{var t;let{main:n}=e;return(null===(t=n.images)||void 0===t?void 0:t[1])&&(0,s.jsxs)("div",{className:"relative mx-auto w-full text-center",children:[(0,s.jsx)(d.Z,{delay:1e3,animation:"fade-in slide-in-top",className:"prose absolute -bottom-4 left-1/2 z-20 w-full -translate-x-1/2",children:(0,s.jsx)("h1",{className:"text-gradient-500 m-0 text-7xl drop-shadow-md md:text-8xl",children:n.name})}),(0,s.jsx)(d.Z,{animation:"fade-in zoom-in",className:"absolute left-1/2 h-72 w-72 -translate-x-1/2 md:bottom-0 md:h-96 md:w-96",children:(0,s.jsx)("div",{className:(0,i.Z)("h-full w-full rounded-full md:animate-spin-slow","bg-gradient-to-tr from-alpha-600 via-beta to-accent")})}),(0,s.jsx)(l.Z,{src:n.images[1].src,width:n.images[1].width,height:n.images[1].height,alt:n.images[1].alt,animation:"fade-in slide-in-top",className:"mx-auto",priority:!0})]})},u=e=>{let{main:t}=e;return(0,s.jsx)(d.Z,{animation:"fade-in slide-in-bottom",className:(0,i.Z)("mx-auto max-w-3xl px-4 md:p-0","prose prose-invert prose-headings:my-4 first-of-type:prose-headings:mt-0","prose-p:mx-auto prose-p:max-w-prose md:prose-headings:my-6","prose-hr:mx-auto prose-hr:max-w-md"),children:(0,s.jsx)(a.Z,{source:t})})},f=e=>{let{achievements:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.Z,{animation:"fade-in slide-in-bottom",className:(0,i.Z)("relative z-10","mx-auto max-w-5xl p-10 text-center md:p-6","ld:grid-cols-4 prose prose-invert grid grid-cols-2 lg:grid-cols-4","bg-gradient-omega-900 shadow-lg","divide-omega-700/30 lg:divide-x"),children:null==t?void 0:t.map((e,t)=>(0,s.jsxs)(d.Z,{animation:"fade-in",delay:250*t,className:"flex-1 p-2",children:[(0,s.jsx)("h3",{className:"m-0 text-accent",children:e.number}),(0,s.jsx)("p",{className:"mt-2 mb-0 text-omega-300",children:e.text})]},t))}),(0,s.jsx)(d.Z,{animation:"fade-in scale-x",className:"mx-auto h-px max-w-5xl bg-gradient-to-r from-accent via-beta to-alpha"})]})},x=e=>{var t,n;let{articles:i}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"prose prose-invert text-center",children:(0,s.jsx)(a.Z,{source:null==i?void 0:i.content})}),(0,s.jsx)("div",{className:"mt-8 grid gap-6 md:mt-14 md:gap-4 lg:grid-cols-2",children:null==i?void 0:null===(t=i.collection)||void 0===t?void 0:null===(n=t.records)||void 0===n?void 0:n.map(e=>(0,s.jsx)(o.Z,{...e},e.slug.join("/")))})]})},h=e=>{let{main:t={},articles:n={},cta:i={},achievements:l=[],companies:o}=e;return(0,s.jsxs)("div",{className:"mx-auto my-auto",children:[(0,s.jsx)("div",{className:"items-center py-10 md:p-10 lg:p-20",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsx)(m,{main:t}),(0,s.jsx)(f,{achievements:l}),(0,s.jsx)(r.Z,{size:12}),(0,s.jsx)(u,{main:t}),(0,s.jsx)(r.Z,{size:12}),(0,s.jsx)("div",{className:"prose prose-invert",children:(0,s.jsx)(a.Z,{source:i})}),(0,s.jsxs)("div",{className:"hidden md:block",children:[(0,s.jsx)(r.Z,{size:24}),(0,s.jsx)(c.Z,{...o})]})]})}),(0,s.jsx)("div",{className:"bg-gradient-omega-900 py-10 md:p-10 lg:p-20",children:(0,s.jsx)(x,{articles:n})})]})};t.default=h},2746:function(e,t,n){let s=n(5893);e.exports.c=s},3899:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});var s={};n.r(s),n.d(s,{MDXContext:function(){return l.pC},MDXProvider:function(){return l.Zo},useMDXComponents:function(){return l.ah},withMDXComponents:function(){return l.NF}});var i=n(7294),a=n(2746),l=n(1151);function r({compiledSource:e,frontmatter:t,scope:n,components:r={},lazy:o}){let[d,c]=(0,i.useState)(!o||"undefined"==typeof window);(0,i.useEffect)(()=>{if(o){let e=window.requestIdleCallback(()=>{c(!0)});return()=>window.cancelIdleCallback(e)}},[]);let m=(0,i.useMemo)(()=>{let i=Object.assign({opts:{...s,...a.c}},{frontmatter:t},n),l=Object.keys(i),r=Object.values(i),o=Reflect.construct(Function,l.concat(`${e}`));return o.apply(o,r).default},[n,e]);if(!d)return i.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});let u=i.createElement(l.Zo,{components:r},i.createElement(m,null));return o?i.createElement("div",null,u):u}"undefined"!=typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var t=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},7650:function(e,t,n){"use strict";let s;n.d(t,{YD:function(){return o}});var i=n(7294);let a=new Map,l=new WeakMap,r=0;function o({threshold:e,delay:t,trackVisibility:n,rootMargin:o,root:d,triggerOnce:c,skip:m,initialInView:u,fallbackInView:f,onChange:x}={}){var h;let[p,g]=i.useState(null),v=i.useRef(),[j,w]=i.useState({inView:!!u,entry:void 0});v.current=x,i.useEffect(()=>{let i;if(!m&&p)return i=function(e,t,n={},i=s){if(void 0===window.IntersectionObserver&&void 0!==i){let s=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:s,intersectionRect:s,rootBounds:s}),()=>{}}let{id:o,observer:d,elements:c}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return`${t}_${"root"===t?(n=e.root)?(l.has(n)||(r+=1,l.set(n,r.toString())),l.get(n)):"0":e[t]}`}).toString(),n=a.get(t);if(!n){let s;let i=new Map,l=new IntersectionObserver(t=>{t.forEach(t=>{var n;let a=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=a),null==(n=i.get(t.target))||n.forEach(e=>{e(a,t)})})},e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:i},a.set(t,n)}return n}(n),m=c.get(e)||[];return c.has(e)||c.set(e,m),m.push(t),d.observe(e),function(){m.splice(m.indexOf(t),1),0===m.length&&(c.delete(e),d.unobserve(e)),0===c.size&&(d.disconnect(),a.delete(o))}}(p,(e,t)=>{w({inView:e,entry:t}),v.current&&v.current(e,t),t.isIntersecting&&c&&i&&(i(),i=void 0)},{root:d,rootMargin:o,threshold:e,trackVisibility:n,delay:t},f),()=>{i&&i()}},[Array.isArray(e)?e.toString():e,p,d,o,c,m,n,f,t]);let b=null==(h=j.entry)?void 0:h.target;i.useEffect(()=>{p||!b||c||m||w({inView:!!u,entry:void 0})},[p,b,c,m,u]);let N=[g,j.inView,j.entry];return N.ref=N[0],N.inView=N[1],N.entry=N[2],N}}}]);