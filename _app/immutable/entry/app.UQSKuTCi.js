const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.BgxBtFjE.js","../chunks/scheduler.-01WbZ0C.js","../chunks/index.BESyycpN.js","../chunks/paths.Byr7dKF2.js","../assets/0.D_bhqu5f.css","../nodes/1.G5-oLjk8.js","../nodes/2.CA2m2LvV.js","../chunks/index.8hYQJLgP.js","../assets/2.D5lqjq8s.css","../nodes/3.DEkNffVR.js","../nodes/4.DV9ocAoZ.js","../assets/4.tmyjjqqk.css","../nodes/5.Cgh_bsgX.js","../assets/5.BbDmfHLl.css"])))=>i.map(i=>d[i]);
import{s as N,a as B,e as p,c as U,i as k,d as h,b as j,o as W,f as z,g as F,h as G,j as D,k as d,l as H,m as J,n as K,p as I,q as y,t as Q}from"../chunks/scheduler.-01WbZ0C.js";import{S as X,i as Y,t as g,c as A,a as w,g as S,b as R,d as O,m as P,e as L}from"../chunks/index.BESyycpN.js";const Z="modulepreload",M=function(a,e){return new URL(a,e).href},T={},v=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),s=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));r=Promise.allSettled(n.map(o=>{if(o=M(o,i),o in T)return;T[o]=!0;const f=o.endsWith(".css"),l=f?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const E=u[b];if(E.href===o&&(!f||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const _=document.createElement("link");if(_.rel=f?"stylesheet":Z,f||(_.as="script"),_.crossOrigin="",_.href=o,s&&_.setAttribute("nonce",s),document.head.appendChild(_),f)return new Promise((b,E)=>{_.addEventListener("load",b),_.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(u=>{for(const t of u||[]){if(t.status!=="rejected")continue;const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t.reason,window.dispatchEvent(s),!s.defaultPrevented)throw t.reason}return e()})},se={};function $(a){let e,n,i;var r=a[1][0];function u(t,s){return{props:{data:t[3],form:t[2]}}}return r&&(e=y(r,u(a)),a[12](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){S();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,u(t)),t[12](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[12](null),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][0];function u(t,s){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return r&&(e=y(r,u(a)),a[11](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][0])){if(e){S();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,u(t)),t[11](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&8&&(o.data=t[3]),s&8215&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[11](null),e&&L(e,t)}}}function ee(a){let e,n,i;var r=a[1][1];function u(t,s){return{props:{data:t[4],form:t[2]}}}return r&&(e=y(r,u(a)),a[10](e)),{c(){e&&R(e.$$.fragment),n=p()},l(t){e&&O(e.$$.fragment,t),n=p()},m(t,s){e&&P(e,t,s),k(t,n,s),i=!0},p(t,s){if(s&2&&r!==(r=t[1][1])){if(e){S();const o=e;g(o.$$.fragment,1,0,()=>{L(o,1)}),A()}r?(e=y(r,u(t)),t[10](e),R(e.$$.fragment),w(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else if(r){const o={};s&16&&(o.data=t[4]),s&4&&(o.form=t[2]),e.$set(o)}},i(t){i||(e&&w(e.$$.fragment,t),i=!0)},o(t){e&&g(e.$$.fragment,t),i=!1},d(t){t&&h(n),a[10](null),e&&L(e,t)}}}function V(a){let e,n=a[6]&&q(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(i){e=F(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=G(e);n&&n.l(r),r.forEach(h),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,r){k(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=q(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&h(e),n&&n.d()}}}function q(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,i){k(n,e,i)},p(n,i){i&128&&K(e,n[7])},d(n){n&&h(e)}}}function te(a){let e,n,i,r,u;const t=[x,$],s=[];function o(l,m){return l[1][1]?0:1}e=o(a),n=s[e]=t[e](a);let f=a[5]&&V(a);return{c(){n.c(),i=B(),f&&f.c(),r=p()},l(l){n.l(l),i=U(l),f&&f.l(l),r=p()},m(l,m){s[e].m(l,m),k(l,i,m),f&&f.m(l,m),k(l,r,m),u=!0},p(l,[m]){let _=e;e=o(l),e===_?s[e].p(l,m):(S(),g(s[_],1,1,()=>{s[_]=null}),A(),n=s[e],n?n.p(l,m):(n=s[e]=t[e](l),n.c()),w(n,1),n.m(i.parentNode,i)),l[5]?f?f.p(l,m):(f=V(l),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null)},i(l){u||(w(n),u=!0)},o(l){g(n),u=!1},d(l){l&&(h(i),h(r)),s[e].d(l),f&&f.d(l)}}}function ne(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:u}=e,{components:t=[]}=e,{form:s}=e,{data_0:o=null}=e,{data_1:f=null}=e;j(i.page.notify);let l=!1,m=!1,_=null;W(()=>{const c=i.page.subscribe(()=>{l&&(n(6,m=!0),Q().then(()=>{n(7,_=document.title||"untitled page")}))});return n(5,l=!0),c});function b(c){I[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function E(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function C(c){I[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,i=c.stores),"page"in c&&n(9,r=c.page),"constructors"in c&&n(1,u=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,s=c.form),"data_0"in c&&n(3,o=c.data_0),"data_1"in c&&n(4,f=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,u,s,o,f,l,m,_,i,r,b,E,C]}class oe extends X{constructor(e){super(),Y(this,e,ne,te,N,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>v(()=>import("../nodes/0.BgxBtFjE.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),()=>v(()=>import("../nodes/1.G5-oLjk8.js"),__vite__mapDeps([5,1,2]),import.meta.url),()=>v(()=>import("../nodes/2.CA2m2LvV.js"),__vite__mapDeps([6,1,2,7,8]),import.meta.url),()=>v(()=>import("../nodes/3.DEkNffVR.js"),__vite__mapDeps([9,1,2]),import.meta.url),()=>v(()=>import("../nodes/4.DV9ocAoZ.js"),__vite__mapDeps([10,1,2,11]),import.meta.url),()=>v(()=>import("../nodes/5.Cgh_bsgX.js"),__vite__mapDeps([12,1,2,13]),import.meta.url)],le=[],fe={"/":[2],"/about":[3],"/gameplay":[4],"/scoreboard":[5]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,se as matchers,ae as nodes,oe as root,le as server_loads};