import{s as C,a as v,t as f,c,e as n,f as W,i as b}from"../chunks/disclose-version.D1Tk4CF3.js";import{x as _,y as D,a as E,h as m,U as y,i as I,w as A,z as H,A as O,t as z,B as p}from"../chunks/runtime.Bx7xfm0y.js";import{i as R,e as Z,T as j,a as q,s as B}from"../chunks/toggleTheme.BeDHwJ8E.js";import{d as F}from"../chunks/misc.BGa3BRog.js";import{s as G}from"../chunks/entry.RD3c2nHw.js";import{S as J}from"../chunks/standardButton.BfvMDrGz.js";function K(e,s,r){if(e==null)return s(void 0),_;const t=e.subscribe(s,r);return t.unsubscribe?()=>t.unsubscribe():t}function Q(e,s,r){let t=r[s];const u=t===void 0;u&&(t={store:null,last_value:null,value:A(y),unsubscribe:_},r[s]=t),(u||t.store!==e)&&(t.unsubscribe(),t.store=e??null,t.unsubscribe=X(e,t.value));const o=m(t.value);return o===y?t.last_value:o}function X(e,s){return e==null?(I(s,void 0),_):K(e,r=>I(s,r))}function Y(e){ee(()=>{let s;for(s in e)e[s].unsubscribe()})}function ee(e){D(()=>()=>E(e))}var te=f('<div class="circle svelte-1xmualr"><span class="svelte-1xmualr"></span></div> <div class="content svelte-1xmualr"><!></div>',1);function se(e,s){var r=te(),t=W(r),u=n(n(t,!0)),o=c(u);C(o,F(s),{}),v(e,r)}const re=()=>{const e=G;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},ae={subscribe(e){return re().page.subscribe(e)}};var ne=f('<div class="random-div svelte-1huedht"> </div>'),oe=f('<h1 class="svelte-1huedht"> </h1> <h2 class="svelte-1huedht"> </h2>',1),ie=f("Return Home",1),ue=f('<div class="container svelte-1huedht"><!> <div class="themeToggle svelte-1huedht"><!></div> <div class="circle svelte-1huedht"><!></div> <!></div>');function be(e,s){H(s,!1);const r={};Y(r);const t=()=>Q(ae,"$page",r);function u(){return window.innerWidth}let o=u();function L(){const a=u();a<500?o=20:a<1200?o=50:o=90}L();let g=A([]);for(let a=0;a<o;a++){const l=`${Math.floor(Math.random()*100)}vh`,d=`${Math.floor(Math.random()*100)}vw`,i=Math.floor(Math.random()*3)+1;m(g).push({id:i,top:l,left:d})}R();var $=ue(),x=c($);Z(x,1,()=>m(g),q,(a,l,d)=>{var i=ne(),h=c(i);z(()=>{B(i,"style",`top: ${p(l).top??""}; left: ${p(l).left??""};`),B(i,"data-id",p(l).id),b(h,t().status)}),v(a,i)});var S=n(n(x,!0)),N=c(S);j(N);var w=n(n(S,!0)),P=c(w);se(P,{children:(a,l)=>{var d=oe(),i=W(d),h=c(i),V=n(n(i,!0)),k=c(V);z(()=>{var M,T;b(h,t().status),b(k,(T=(M=t())==null?void 0:M.error)==null?void 0:T.message)}),v(a,d)},$$slots:{default:!0}});var U=n(n(w,!0));J(U,{href:"/",children:(a,l)=>{var d=ie();v(a,d)},$$slots:{default:!0}}),v(e,$),O()}export{be as component};
