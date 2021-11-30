import{S as ae,i as oe,s as ne,e as j,k as D,c as w,a as y,n as F,d as k,b as n,W as Q,f as W,G as f,X as C,Y as X,Z as le,_ as se,$ as re,a0 as ie,a1 as x,a2 as de,t as ue,M as ce,g as _e,a3 as fe,w as he,x as me,u as pe,a4 as ve,a5 as $,r as be,a6 as ge,I as ke}from"../../chunks/vendor-93654020.js";function L(d,{pending:t,error:e,result:a}){let h;async function E(m){const c=h={};m.preventDefault();const v=new FormData(d);t&&t(v,d);try{const r=await fetch(d.action,{method:d.method,headers:{accept:"application/json"},body:v});if(c!==h)return;r.ok?a(r,d):e?e(r,null,d):console.error(await r.text())}catch(r){if(e)e(null,r,d);else throw r}}return d.addEventListener("submit",E),{destroy(){d.removeEventListener("submit",E)}}}function ee(d,t,e){const a=d.slice();return a[6]=t[e],a[7]=t,a[8]=e,a}function te(d,t){let e,a,h,E,m,c,v,r,o,p,_,b,I,M,O,s,i,l,T,R,N,B,V,U,A,G=ke,q,H,Y;function Z(...g){return t[3](t[6],t[7],t[8],...g)}function z(){return t[4](t[6],t[7],t[8])}function J(){return t[5](t[6])}return{key:d,first:null,c(){e=j("div"),a=j("form"),h=j("input"),m=D(),c=j("button"),p=D(),_=j("form"),b=j("input"),M=D(),O=j("button"),i=D(),l=j("form"),T=j("button"),V=D(),this.h()},l(g){e=w(g,"DIV",{class:!0});var u=y(e);a=w(u,"FORM",{action:!0,method:!0});var P=y(a);h=w(P,"INPUT",{type:!0,name:!0,class:!0}),m=F(P),c=w(P,"BUTTON",{class:!0,"aria-label":!0}),y(c).forEach(k),P.forEach(k),p=F(u),_=w(u,"FORM",{class:!0,action:!0,method:!0});var S=y(_);b=w(S,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),M=F(S),O=w(S,"BUTTON",{class:!0,"aria-label":!0}),y(O).forEach(k),S.forEach(k),i=F(u),l=w(u,"FORM",{action:!0,method:!0});var K=y(l);T=w(K,"BUTTON",{class:!0,"aria-label":!0}),y(T).forEach(k),K.forEach(k),V=F(u),u.forEach(k),this.h()},h(){n(h,"type","hidden"),n(h,"name","done"),h.value=E=t[6].done?"":"true",n(h,"class","svelte-dmxqmd"),n(c,"class","toggle svelte-dmxqmd"),n(c,"aria-label",v="Mark todo as "+(t[6].done?"not done":"done")),n(a,"action",r="/todos/"+t[6].uid+".json?_method=patch"),n(a,"method","post"),n(b,"aria-label","Edit todo"),n(b,"type","text"),n(b,"name","text"),b.value=I=t[6].text,n(b,"class","svelte-dmxqmd"),n(O,"class","save svelte-dmxqmd"),n(O,"aria-label","Save todo"),n(_,"class","text svelte-dmxqmd"),n(_,"action",s="/todos/"+t[6].uid+".json?_method=patch"),n(_,"method","post"),n(T,"class","delete svelte-dmxqmd"),n(T,"aria-label","Delete todo"),T.disabled=R=t[6].pending_delete,n(l,"action",N="/todos/"+t[6].uid+".json?_method=delete"),n(l,"method","post"),n(e,"class","todo svelte-dmxqmd"),Q(e,"done",t[6].done),this.first=e},m(g,u){W(g,e,u),f(e,a),f(a,h),f(a,m),f(a,c),f(e,p),f(e,_),f(_,b),f(_,M),f(_,O),f(e,i),f(e,l),f(l,T),f(e,V),q=!0,H||(Y=[C(o=L.call(null,a,{pending:Z,result:t[1]})),C(L.call(null,_,{result:t[1]})),C(B=L.call(null,l,{pending:z,result:J}))],H=!0)},p(g,u){t=g,(!q||u&1&&E!==(E=t[6].done?"":"true"))&&(h.value=E),(!q||u&1&&v!==(v="Mark todo as "+(t[6].done?"not done":"done")))&&n(c,"aria-label",v),(!q||u&1&&r!==(r="/todos/"+t[6].uid+".json?_method=patch"))&&n(a,"action",r),o&&X(o.update)&&u&1&&o.update.call(null,{pending:Z,result:t[1]}),(!q||u&1&&I!==(I=t[6].text)&&b.value!==I)&&(b.value=I),(!q||u&1&&s!==(s="/todos/"+t[6].uid+".json?_method=patch"))&&n(_,"action",s),(!q||u&1&&R!==(R=t[6].pending_delete))&&(T.disabled=R),(!q||u&1&&N!==(N="/todos/"+t[6].uid+".json?_method=delete"))&&n(l,"action",N),B&&X(B.update)&&u&1&&B.update.call(null,{pending:z,result:J}),u&1&&Q(e,"done",t[6].done)},r(){A=e.getBoundingClientRect()},f(){le(e),G(),se(e,A)},a(){G(),G=re(e,A,ve,{duration:200})},i(g){q||(g&&ie(()=>{U||(U=x(e,$,{start:.7},!0)),U.run(1)}),q=!0)},o(g){g&&(U||(U=x(e,$,{start:.7},!1)),U.run(0)),q=!1},d(g){g&&k(e),g&&U&&U.end(),H=!1,de(Y)}}}function Ee(d){let t,e,a,h,E,m,c,v,r,o=[],p=new Map,_,b,I,M=d[0];const O=s=>s[6].uid;for(let s=0;s<M.length;s+=1){let i=ee(d,M,s),l=O(i);p.set(l,o[s]=te(l,i))}return{c(){t=D(),e=j("div"),a=j("h1"),h=ue("Todos"),E=D(),m=j("form"),c=j("input"),r=D();for(let s=0;s<o.length;s+=1)o[s].c();this.h()},l(s){ce('[data-svelte="svelte-181o7gf"]',document.head).forEach(k),t=F(s),e=w(s,"DIV",{class:!0});var l=y(e);a=w(l,"H1",{});var T=y(a);h=_e(T,"Todos"),T.forEach(k),E=F(l),m=w(l,"FORM",{class:!0,action:!0,method:!0});var R=y(m);c=w(R,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),R.forEach(k),r=F(l);for(let N=0;N<o.length;N+=1)o[N].l(l);l.forEach(k),this.h()},h(){document.title="Todos",n(c,"name","text"),n(c,"aria-label","Add todo"),n(c,"placeholder","+ tap to add a todo"),n(c,"class","svelte-dmxqmd"),n(m,"class","new svelte-dmxqmd"),n(m,"action","/todos.json"),n(m,"method","post"),n(e,"class","todos svelte-dmxqmd")},m(s,i){W(s,t,i),W(s,e,i),f(e,a),f(a,h),f(e,E),f(e,m),f(m,c),f(e,r);for(let l=0;l<o.length;l+=1)o[l].m(e,null);_=!0,b||(I=C(v=L.call(null,m,{result:d[2]})),b=!0)},p(s,[i]){if(v&&X(v.update)&&i&1&&v.update.call(null,{result:s[2]}),i&3){M=s[0],be();for(let l=0;l<o.length;l+=1)o[l].r();o=fe(o,i,O,1,s,M,p,e,ge,te,null,ee);for(let l=0;l<o.length;l+=1)o[l].a();he()}},i(s){if(!_){for(let i=0;i<M.length;i+=1)me(o[i]);_=!0}},o(s){for(let i=0;i<o.length;i+=1)pe(o[i]);_=!1},d(s){s&&k(t),s&&k(e);for(let i=0;i<o.length;i+=1)o[i].d();b=!1,I()}}}const Te=async({fetch:d})=>{const t=await d("/todos.json");if(t.ok)return{props:{todos:await t.json()}};const{message:e}=await t.json();return{error:new Error(e)}};function je(d,t,e){let{todos:a}=t;async function h(r){const o=await r.json();e(0,a=a.map(p=>p.uid===o.uid?o:p))}const E=async(r,o)=>{const p=await r.json();e(0,a=[...a,p]),o.reset()},m=(r,o,p,_)=>{e(0,o[p].done=!!_.get("done"),a)},c=(r,o,p)=>e(0,o[p].pending_delete=!0,a),v=r=>{e(0,a=a.filter(o=>o.uid!==r.uid))};return d.$$set=r=>{"todos"in r&&e(0,a=r.todos)},[a,h,E,m,c,v]}class qe extends ae{constructor(t){super();oe(this,t,je,Ee,ne,{todos:0})}}export{qe as default,Te as load};