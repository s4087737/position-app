var b=Object.defineProperty;var E=(t,e,n)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>E(t,typeof e!="symbol"?e+"":e,n);import{z as $,y as c,S as x,h as C,d as I,T as O,Q as v,U,V as p,W as V,X as j,Y as w,Z as z,_ as B,$ as L,a0 as M,a1 as N}from"./scheduler.DdttVWVM.js";const o=new Set;let d;function Z(){d={r:0,c:[],p:d}}function A(){d.r||$(d.c),d=d.p}function P(t,e){t&&t.i&&(o.delete(t),t.i(e))}function D(t,e,n,s){if(t&&t.o){if(o.has(t))return;o.add(t),d.c.push(()=>{o.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function F(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function G(t){t&&t.c()}function H(t,e){t&&t.l(e)}function Q(t,e,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),p(()=>{const f=t.$$.on_mount.map(z).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(p)}function R(t,e){const n=t.$$;n.fragment!==null&&(V(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){t.$$.dirty[0]===-1&&(B.push(t),L(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,s,i,f,h=null,S=[-1]){const u=j;w(t);const a=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:x(),dirty:S,skip_bound:!1,root:e.target||u.$$.root};h&&h(a.root);let l=!1;if(a.ctx=n?n(t,e.props||{},(r,g,...y)=>{const m=y.length?y[0]:g;return a.ctx&&i(a.ctx[r],a.ctx[r]=m)&&(!a.skip_bound&&a.bound[r]&&a.bound[r](m),l&&T(t,r)),g}):[],a.update(),l=!0,$(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){M();const r=C(e.target);a.fragment&&a.fragment.l(r),r.forEach(I)}else a.fragment&&a.fragment.c();e.intro&&P(t.$$.fragment),Q(t,e.target,e.anchor),N(),O()}w(u)}class K{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){R(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const W="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(W);export{K as S,P as a,G as b,A as c,H as d,R as e,F as f,Z as g,J as i,Q as m,D as t};
