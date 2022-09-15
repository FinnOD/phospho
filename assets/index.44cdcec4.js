(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Et(){}const yu=i=>i;function oo(i,e){for(const t in e)i[t]=e[t];return i}function Kl(i){return i()}function Xo(){return Object.create(null)}function di(i){i.forEach(Kl)}function Mo(i){return typeof i=="function"}function qe(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function xu(i){return Object.keys(i).length===0}function ns(i,...e){if(i==null)return Et;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Hn(i){let e;return ns(i,t=>e=t)(),e}function nt(i,e,t){i.$$.on_destroy.push(ns(e,t))}function Pt(i,e,t,n){if(i){const r=Jl(i,e,t,n);return i[0](r)}}function Jl(i,e,t,n){return i[1]&&n?oo(t.ctx.slice(),i[1](n(e))):t.ctx}function Rt(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],a=Math.max(e.dirty.length,r.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|r[o];return s}return e.dirty|r}return e.dirty}function It(i,e,t,n,r,s){if(r){const a=Jl(e,t,n,s);i.p(a,r)}}function Ot(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function ln(i,e,t){return i.set(t),e}function bu(i){return i&&Mo(i.destroy)?i.destroy:Et}const Ql=typeof window<"u";let wu=Ql?()=>window.performance.now():()=>Date.now(),$l=Ql?i=>requestAnimationFrame(i):Et;const zi=new Set;function ec(i){zi.forEach(e=>{e.c(i)||(zi.delete(e),e.f())}),zi.size!==0&&$l(ec)}function Mu(i){let e;return zi.size===0&&$l(ec),{promise:new Promise(t=>{zi.add(e={c:i,f:t})}),abort(){zi.delete(e)}}}function gn(i,e){i.appendChild(e)}function Ze(i,e,t){i.insertBefore(e,t||null)}function Xe(i){i.parentNode.removeChild(i)}function Dn(i){return document.createElement(i)}function tc(i){return document.createTextNode(i)}function ot(){return tc(" ")}function fr(){return tc("")}function Tn(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function St(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function Su(i){return Array.from(i.childNodes)}function Yt(i,e,t){i.classList[t?"add":"remove"](e)}function Eu(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(i,t,n,e),r}let dr;function ur(i){dr=i}function _r(){if(!dr)throw new Error("Function called outside component initialization");return dr}function So(i){_r().$$.on_mount.push(i)}function pt(i){_r().$$.on_destroy.push(i)}function qi(){const i=_r();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=Eu(e,t,{cancelable:n});return r.slice().forEach(a=>{a.call(i,s)}),!s.defaultPrevented}return!0}}function cn(i,e){return _r().$$.context.set(i,e),e}function yn(i){return _r().$$.context.get(i)}function et(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const ar=[],dn=[],Kr=[],ao=[],nc=Promise.resolve();let lo=!1;function ic(){lo||(lo=!0,nc.then(rc))}function hr(){return ic(),nc}function co(i){Kr.push(i)}function Yn(i){ao.push(i)}const bs=new Set;let Mr=0;function rc(){const i=dr;do{for(;Mr<ar.length;){const e=ar[Mr];Mr++,ur(e),Au(e.$$)}for(ur(null),ar.length=0,Mr=0;dn.length;)dn.pop()();for(let e=0;e<Kr.length;e+=1){const t=Kr[e];bs.has(t)||(bs.add(t),t())}Kr.length=0}while(ar.length);for(;ao.length;)ao.pop()();lo=!1,bs.clear(),ur(i)}function Au(i){if(i.fragment!==null){i.update(),di(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach(co)}}const Jr=new Set;let ri;function Xi(){ri={r:0,c:[],p:ri}}function Yi(){ri.r||di(ri.c),ri=ri.p}function pe(i,e){i&&i.i&&(Jr.delete(i),i.i(e))}function _e(i,e,t,n){if(i&&i.o){if(Jr.has(i))return;Jr.add(i),ri.c.push(()=>{Jr.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function sc(i,e){_e(i,1,1,()=>{e.delete(i.key)})}function oc(i,e,t,n,r,s,a,o,l,c,u,f){let d=i.length,m=s.length,v=d;const p={};for(;v--;)p[i[v].key]=v;const h=[],g=new Map,y=new Map;for(v=m;v--;){const M=f(r,s,v),D=t(M);let _=a.get(D);_?n&&_.p(M,e):(_=c(D,M),_.c()),g.set(D,h[v]=_),D in p&&y.set(D,Math.abs(v-p[D]))}const w=new Set,b=new Set;function x(M){pe(M,1),M.m(o,u),a.set(M.key,M),u=M.first,m--}for(;d&&m;){const M=h[m-1],D=i[d-1],_=M.key,E=D.key;M===D?(u=M.first,d--,m--):g.has(E)?!a.has(_)||w.has(_)?x(M):b.has(E)?d--:y.get(_)>y.get(E)?(b.add(_),x(M)):(w.add(E),d--):(l(D,a),d--)}for(;d--;){const M=i[d];g.has(M.key)||l(M,a)}for(;m;)x(h[m-1]);return h}function Zn(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Re(i){i&&i.c()}function Le(i,e,t,n){const{fragment:r,on_mount:s,on_destroy:a,after_update:o}=i.$$;r&&r.m(e,t),n||co(()=>{const l=s.map(Kl).filter(Mo);a?a.push(...l):di(l),i.$$.on_mount=[]}),o.forEach(co)}function De(i,e){const t=i.$$;t.fragment!==null&&(di(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Tu(i,e){i.$$.dirty[0]===-1&&(ar.push(i),ic(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function Je(i,e,t,n,r,s,a,o=[-1]){const l=dr;ur(i);const c=i.$$={fragment:null,ctx:null,props:s,update:Et,not_equal:r,bound:Xo(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Xo(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...m)=>{const v=m.length?m[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=v)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](v),u&&Tu(i,f)),d}):[],c.update(),u=!0,di(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=Su(e.target);c.fragment&&c.fragment.l(f),f.forEach(Xe)}else c.fragment&&c.fragment.c();e.intro&&pe(i.$$.fragment),Le(i,e.target,e.anchor,e.customElement),rc()}ur(l)}class Qe{$destroy(){De(this,1),this.$destroy=Et}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!xu(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _i=[];function ac(i,e){return{subscribe:wt(i,e).subscribe}}function wt(i,e=Et){let t;const n=new Set;function r(o){if(qe(i,o)&&(i=o,t)){const l=!_i.length;for(const c of n)c[1](),_i.push(c,i);if(l){for(let c=0;c<_i.length;c+=2)_i[c][0](_i[c+1]);_i.length=0}}}function s(o){r(o(i))}function a(o,l=Et){const c=[o,l];return n.add(c),n.size===1&&(t=e(r)||Et),o(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:a}}function Eo(i,e,t){const n=!Array.isArray(i),r=n?[i]:i,s=e.length<2;return ac(t,a=>{let o=!1;const l=[];let c=0,u=Et;const f=()=>{if(c)return;u();const m=e(n?l[0]:l,a);s?a(m):u=Mo(m)?m:Et},d=r.map((m,v)=>ns(m,p=>{l[v]=p,c&=~(1<<v),o&&f()},()=>{c|=1<<v}));return o=!0,f(),function(){di(d),u()}})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ao="144",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cu=0,Yo=1,Lu=2,lc=1,cc=2,lr=3,Bi=0,$t=1,Wn=2,jn=0,Ui=1,Zo=2,Ko=3,Jo=4,Du=5,Ni=100,Pu=101,Ru=102,Qo=103,$o=104,Iu=200,Ou=201,Nu=202,Fu=203,uc=204,fc=205,zu=206,Uu=207,ku=208,Gu=209,Bu=210,Vu=0,Wu=1,Hu=2,uo=3,ju=4,qu=5,Xu=6,Yu=7,To=0,Zu=1,Ku=2,vn=0,Ju=1,Qu=2,$u=3,dc=4,ef=5,hc=300,Vi=301,Wi=302,fo=303,ho=304,is=306,po=1e3,un=1001,mo=1002,Ct=1003,ea=1004,ta=1005,Zt=1006,tf=1007,rs=1008,ui=1009,nf=1010,rf=1011,pc=1012,sf=1013,si=1014,oi=1015,pr=1016,of=1017,af=1018,ki=1020,lf=1021,cf=1022,_n=1023,uf=1024,ff=1025,li=1026,Hi=1027,df=1028,hf=1029,pf=1030,mf=1031,gf=1033,ws=33776,Ms=33777,Ss=33778,Es=33779,na=35840,ia=35841,ra=35842,sa=35843,_f=36196,oa=37492,aa=37496,la=37808,ca=37809,ua=37810,fa=37811,da=37812,ha=37813,pa=37814,ma=37815,ga=37816,_a=37817,va=37818,ya=37819,xa=37820,ba=37821,wa=36492,qn=3e3,tt=3001,vf=3200,yf=3201,mc=0,xf=1,Cn="srgb",ai="srgb-linear",As=7680,bf=519,Ma=35044,Sa="300 es",go=1035;class hi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ts=Math.PI/180,Ea=180/Math.PI;function vr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function wf(i,e){return(i%e+e)%e}function Cs(i,e,t){return(1-t)*i+t*e}function Aa(i){return(i&i-1)===0&&i!==0}function _o(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],v=n[8],p=r[0],h=r[3],g=r[6],y=r[1],w=r[4],b=r[7],x=r[2],M=r[5],D=r[8];return s[0]=a*p+o*y+l*x,s[3]=a*h+o*w+l*M,s[6]=a*g+o*b+l*D,s[1]=c*p+u*y+f*x,s[4]=c*h+u*w+f*M,s[7]=c*g+u*b+f*D,s[2]=d*p+m*y+v*x,s[5]=d*h+m*w+v*M,s[8]=d*g+m*b+v*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,m=c*s-a*l,v=t*f+n*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=f*p,e[1]=(r*c-u*n)*p,e[2]=(o*n-r*a)*p,e[3]=d*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=m*p,e[7]=(n*l-c*t)*p,e[8]=(a*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],a=r[3],o=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*a+n*c,r[6]=t*o+n*u,r[1]=-n*s+t*l,r[4]=-n*a+t*c,r[7]=-n*o+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function gc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ls={[Cn]:{[ai]:ci},[ai]:{[Cn]:Qr}},nn={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(Ls[e]&&Ls[e][t]!==void 0){const n=Ls[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},_c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},rn={h:0,s:0,l:0},Er={h:0,s:0,l:0};function Ds(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ar(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ai){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ai){if(e=wf(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ds(a,s,e+1/3),this.g=Ds(a,s,e),this.b=Ds(a,s,e-1/3)}return nn.toWorkingColorSpace(this,r),this}setStyle(e,t=Cn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,nn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,nn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,nn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,nn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Cn){const n=_c[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Qr(e.r),this.g=Qr(e.g),this.b=Qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return nn.fromWorkingColorSpace(Ar(this,dt),e),Lt(dt.r*255,0,255)<<16^Lt(dt.g*255,0,255)<<8^Lt(dt.b*255,0,255)<<0}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ai){nn.fromWorkingColorSpace(Ar(this,dt),t);const n=dt.r,r=dt.g,s=dt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ai){return nn.fromWorkingColorSpace(Ar(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=Cn){return nn.fromWorkingColorSpace(Ar(this,dt),e),e!==Cn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(rn),rn.h+=e,rn.s+=t,rn.l+=n,this.setHSL(rn.h,rn.s,rn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rn),e.getHSL(Er);const n=Cs(rn.h,Er.h,t),r=Cs(rn.s,Er.s,t),s=Cs(rn.l,Er.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=_c;let xi;class vc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=mr("canvas")),xi.width=e.width,xi.height=e.height;const n=xi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class yc{constructor(e=null){this.isSource=!0,this.uuid=vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ps(r[a].image)):s.push(Ps(r[a]))}else s=Ps(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ps(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mf=0;class tn extends hi{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=un,r=un,s=Zt,a=rs,o=_n,l=ui,c=1,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=vr(),this.name="",this.source=new yc(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case po:e.x=e.x-Math.floor(e.x);break;case un:e.x=e.x<0?0:1;break;case mo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case po:e.y=e.y-Math.floor(e.y);break;case un:e.y=e.y<0?0:1;break;case mo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=hc;class vt{constructor(e=0,t=0,n=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],v=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-p)<.01&&Math.abs(v-h)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+p)<.1&&Math.abs(v+h)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,b=(m+1)/2,x=(g+1)/2,M=(u+d)/4,D=(f+p)/4,_=(v+h)/4;return w>b&&w>x?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=M/n,s=D/n):b>x?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=M/r,s=_/r):x<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),n=D/s,r=_/s),this.set(n,r,s,t),this}let y=Math.sqrt((h-v)*(h-v)+(f-p)*(f-p)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(h-v)/y,this.y=(f-p)/y,this.z=(d-u)/y,this.w=Math.acos((c+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xn extends hi{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new tn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xc extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sf extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=p;return}if(f!==p||l!==d||c!==m||u!==v){let h=1-o;const g=l*d+c*m+u*v+f*p,y=g>=0?1:-1,w=1-g*g;if(w>Number.EPSILON){const x=Math.sqrt(w),M=Math.atan2(x,g*y);h=Math.sin(h*M)/x,o=Math.sin(o*M)/x}const b=o*y;if(l=l*h+d*b,c=c*h+m*b,u=u*h+v*b,f=f*h+p*b,h===1-o){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*m-c*d,e[t+1]=l*v+u*d+c*f-o*m,e[t+2]=c*v+u*m+o*d-l*f,e[t+3]=u*v-o*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),d=l(n/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"YXZ":this._x=d*u*f+c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"ZXY":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f-d*m*v;break;case"ZYX":this._x=d*u*f-c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f+d*m*v;break;case"YZX":this._x=d*u*f+c*m*v,this._y=c*m*f+d*u*v,this._z=c*u*v-d*m*f,this._w=c*u*f-d*m*v;break;case"XZY":this._x=d*u*f-c*m*v,this._y=c*m*f-d*u*v,this._z=c*u*v+d*m*f,this._w=c*u*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,f=l*r+s*n-a*t,d=-s*t-a*n-o*r;return this.x=c*l+d*-s+u*-o-f*-a,this.y=u*l+d*-a+f*-s-c*-o,this.z=f*l+d*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rs.copy(this).projectOnVector(e),this.sub(Rs)}reflect(e){return this.sub(Rs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rs=new N,Ta=new fi;class yr{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<r&&(r=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<r&&(r=d),u>s&&(s=u),f>a&&(a=f),d>o&&(o=d)}return this.min.set(t,n,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Qn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Tr.subVectors(this.max,tr),bi.subVectors(e.a,tr),wi.subVectors(e.b,tr),Mi.subVectors(e.c,tr),Fn.subVectors(wi,bi),zn.subVectors(Mi,wi),$n.subVectors(bi,Mi);let t=[0,-Fn.z,Fn.y,0,-zn.z,zn.y,0,-$n.z,$n.y,Fn.z,0,-Fn.x,zn.z,0,-zn.x,$n.z,0,-$n.x,-Fn.y,Fn.x,0,-zn.y,zn.x,0,-$n.y,$n.x,0];return!Os(t,bi,wi,Mi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Os(t,bi,wi,Mi,Tr))?!1:(Cr.crossVectors(Fn,zn),t=[Cr.x,Cr.y,Cr.z],Os(t,bi,wi,Mi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Qn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wn=[new N,new N,new N,new N,new N,new N,new N,new N],Qn=new N,Is=new yr,bi=new N,wi=new N,Mi=new N,Fn=new N,zn=new N,$n=new N,tr=new N,Tr=new N,Cr=new N,ei=new N;function Os(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ei.fromArray(i,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),l=e.dot(ei),c=t.dot(ei),u=n.dot(ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ef=new yr,Ca=new N,Lr=new N,Ns=new N;class ss{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ef.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Ns.subVectors(e,this.center);const t=Ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(Ns.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?Lr.set(0,0,1).multiplyScalar(e.radius):Lr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Ca.copy(e.center).add(Lr)),this.expandByPoint(Ca.copy(e.center).sub(Lr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new N,Fs=new N,Dr=new N,Un=new N,zs=new N,Pr=new N,Us=new N;class Co{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.direction).multiplyScalar(t).add(this.origin),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fs.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Un.dot(this.direction),l=-Un.dot(Dr),c=Un.lengthSq(),u=Math.abs(1-a*a);let f,d,m,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const p=1/u;f*=p,d*=p,m=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(Dr).multiplyScalar(d).add(Fs),m}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||n!==n)&&(n=s),(a<r||r!==r)&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,s){zs.subVectors(t,e),Pr.subVectors(n,e),Us.crossVectors(zs,Pr);let a=this.direction.dot(Us),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const l=o*this.direction.dot(Pr.crossVectors(Un,Pr));if(l<0)return null;const c=o*this.direction.dot(zs.cross(Un));if(c<0||l+c>a)return null;const u=-o*Un.dot(Us);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,o,l,c,u,f,d,m,v,p,h){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=d,g[3]=m,g[7]=v,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),s=1/Si.setFromMatrixColumn(e,1).length(),a=1/Si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,m=a*f,v=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-p*c,t[9]=-o*l,t[2]=p-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,v=c*u,p=c*f;t[0]=d+p*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=p+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,v=c*u,p=c*f;t[0]=d-p*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=p-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,m=a*f,v=o*u,p=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=d*c+p,t[1]=l*f,t[5]=p*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=p-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=d-p*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+p,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=p*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Tf)}lookAt(e,t,n){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),kn.crossVectors(n,kt),kn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),kn.crossVectors(n,kt)),kn.normalize(),Rr.crossVectors(kt,kn),r[0]=kn.x,r[4]=Rr.x,r[8]=kt.x,r[1]=kn.y,r[5]=Rr.y,r[9]=kt.y,r[2]=kn.z,r[6]=Rr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],v=n[2],p=n[6],h=n[10],g=n[14],y=n[3],w=n[7],b=n[11],x=n[15],M=r[0],D=r[4],_=r[8],E=r[12],C=r[1],O=r[5],W=r[9],P=r[13],F=r[2],R=r[6],U=r[10],J=r[14],j=r[3],k=r[7],H=r[11],B=r[15];return s[0]=a*M+o*C+l*F+c*j,s[4]=a*D+o*O+l*R+c*k,s[8]=a*_+o*W+l*U+c*H,s[12]=a*E+o*P+l*J+c*B,s[1]=u*M+f*C+d*F+m*j,s[5]=u*D+f*O+d*R+m*k,s[9]=u*_+f*W+d*U+m*H,s[13]=u*E+f*P+d*J+m*B,s[2]=v*M+p*C+h*F+g*j,s[6]=v*D+p*O+h*R+g*k,s[10]=v*_+p*W+h*U+g*H,s[14]=v*E+p*P+h*J+g*B,s[3]=y*M+w*C+b*F+x*j,s[7]=y*D+w*O+b*R+x*k,s[11]=y*_+w*W+b*U+x*H,s[15]=y*E+w*P+b*J+x*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],v=e[3],p=e[7],h=e[11],g=e[15];return v*(+s*l*f-r*c*f-s*o*d+n*c*d+r*o*m-n*l*m)+p*(+t*l*m-t*c*d+s*a*d-r*a*m+r*c*u-s*l*u)+h*(+t*c*f-t*o*m-s*a*f+n*a*m+s*o*u-n*c*u)+g*(-r*o*u-t*l*f+t*o*d+r*a*f-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],v=e[12],p=e[13],h=e[14],g=e[15],y=f*h*c-p*d*c+p*l*m-o*h*m-f*l*g+o*d*g,w=v*d*c-u*h*c-v*l*m+a*h*m+u*l*g-a*d*g,b=u*p*c-v*f*c+v*o*m-a*p*m-u*o*g+a*f*g,x=v*f*l-u*p*l-v*o*d+a*p*d+u*o*h-a*f*h,M=t*y+n*w+r*b+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/M;return e[0]=y*D,e[1]=(p*d*s-f*h*s-p*r*m+n*h*m+f*r*g-n*d*g)*D,e[2]=(o*h*s-p*l*s+p*r*c-n*h*c-o*r*g+n*l*g)*D,e[3]=(f*l*s-o*d*s-f*r*c+n*d*c+o*r*m-n*l*m)*D,e[4]=w*D,e[5]=(u*h*s-v*d*s+v*r*m-t*h*m-u*r*g+t*d*g)*D,e[6]=(v*l*s-a*h*s-v*r*c+t*h*c+a*r*g-t*l*g)*D,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*m+t*l*m)*D,e[8]=b*D,e[9]=(v*f*s-u*p*s-v*n*m+t*p*m+u*n*g-t*f*g)*D,e[10]=(a*p*s-v*o*s+v*n*c-t*p*c-a*n*g+t*o*g)*D,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*m-t*o*m)*D,e[12]=x*D,e[13]=(u*p*r-v*f*r+v*n*d-t*p*d-u*n*h+t*f*h)*D,e[14]=(v*o*r-a*p*r-v*n*l+t*p*l+a*n*h-t*o*h)*D,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*d+t*o*d)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,m=s*u,v=s*f,p=a*u,h=a*f,g=o*f,y=l*c,w=l*u,b=l*f,x=n.x,M=n.y,D=n.z;return r[0]=(1-(p+g))*x,r[1]=(m+b)*x,r[2]=(v-w)*x,r[3]=0,r[4]=(m-b)*M,r[5]=(1-(d+g))*M,r[6]=(h+y)*M,r[7]=0,r[8]=(v+w)*D,r[9]=(h-y)*D,r[10]=(1-(d+p))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Si.set(r[0],r[1],r[2]).length();const a=Si.set(r[4],r[5],r[6]).length(),o=Si.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],sn.copy(this);const c=1/s,u=1/a,f=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=u,sn.elements[5]*=u,sn.elements[6]*=u,sn.elements[8]*=f,sn.elements[9]*=f,sn.elements[10]*=f,t.setFromRotationMatrix(sn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,s,a){const o=this.elements,l=1/(t-e),c=1/(n-r),u=1/(a-s),f=(t+e)*l,d=(n+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Si=new N,sn=new Ke,Af=new N(0,0,0),Tf=new N(1,1,1),kn=new N,Rr=new N,kt=new N,La=new Ke,Da=new fi;class xr{constructor(e=0,t=0,n=0,r=xr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return La.makeRotationFromQuaternion(e),this.setFromRotationMatrix(La,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Da.setFromEuler(this),this.setFromQuaternion(Da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xr.DefaultOrder="XYZ";xr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Lo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cf=0;const Pa=new N,Ei=new fi,Sn=new Ke,Ir=new N,nr=new N,Lf=new N,Df=new fi,Ra=new N(1,0,0),Ia=new N(0,1,0),Oa=new N(0,0,1),Pf={type:"added"},Na={type:"removed"};class He extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DefaultUp.clone();const e=new N,t=new xr,n=new fi,r=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Kt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=He.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=He.DefaultMatrixWorldAutoUpdate,this.layers=new Lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Ra,e)}rotateY(e){return this.rotateOnAxis(Ia,e)}rotateZ(e){return this.rotateOnAxis(Oa,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ra,e)}translateY(e){return this.translateOnAxis(Ia,e)}translateZ(e){return this.translateOnAxis(Oa,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(nr,Ir,this.up):Sn.lookAt(Ir,nr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),Ei.setFromRotationMatrix(Sn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Pf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Na)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Na)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,Lf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Df,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}He.DefaultUp=new N(0,1,0);He.DefaultMatrixAutoUpdate=!0;He.DefaultMatrixWorldAutoUpdate=!0;const on=new N,En=new N,ks=new N,An=new N,Ai=new N,Ti=new N,Fa=new N,Gs=new N,Bs=new N,Vs=new N;class Ln{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),on.subVectors(e,t),r.cross(on);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){on.subVectors(r,t),En.subVectors(n,t),ks.subVectors(e,t);const a=on.dot(on),o=on.dot(En),l=on.dot(ks),c=En.dot(En),u=En.dot(ks),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-m-v,v,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,An),l.set(0,0),l.addScaledVector(s,An.x),l.addScaledVector(a,An.y),l.addScaledVector(o,An.z),l}static isFrontFacing(e,t,n,r){return on.subVectors(n,t),En.subVectors(e,t),on.cross(En).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),En.subVectors(this.a,this.b),on.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ln.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ai.subVectors(r,n),Ti.subVectors(s,n),Gs.subVectors(e,n);const l=Ai.dot(Gs),c=Ti.dot(Gs);if(l<=0&&c<=0)return t.copy(n);Bs.subVectors(e,r);const u=Ai.dot(Bs),f=Ti.dot(Bs);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ai,a);Vs.subVectors(e,s);const m=Ai.dot(Vs),v=Ti.dot(Vs);if(v>=0&&m<=v)return t.copy(s);const p=m*c-l*v;if(p<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Ti,o);const h=u*v-m*f;if(h<=0&&f-u>=0&&m-v>=0)return Fa.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(Fa,o);const g=1/(h+p+d);return a=p*g,o=d*g,t.copy(n).addScaledVector(Ai,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Rf=0;class Zi extends hi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Ui,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=uc,this.blendDst=fc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Bi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Do extends Zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new N,Or=new Ae;class fn{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Ma,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Or.fromBufferAttribute(this,t),Or.applyMatrix3(e),this.setXY(t,Or.x,Or.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ma&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wc extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let If=0;const qt=new Ke,Ws=new He,Ci=new N,Gt=new yr,ir=new yr,_t=new N;class Vt extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?wc:bc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Ws.lookAt(e),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ci).negate(),this.translate(Ci.x,Ci.y,Ci.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(Gt.min,ir.min),Gt.expandByPoint(_t),_t.addVectors(Gt.max,ir.max),Gt.expandByPoint(_t)):(Gt.expandByPoint(ir.min),Gt.expandByPoint(ir.max))}Gt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)_t.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(_t));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(Ci.fromBufferAttribute(e,c),_t.add(Ci)),r=Math.max(r,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let C=0;C<o;C++)c[C]=new N,u[C]=new N;const f=new N,d=new N,m=new N,v=new Ae,p=new Ae,h=new Ae,g=new N,y=new N;function w(C,O,W){f.fromArray(r,C*3),d.fromArray(r,O*3),m.fromArray(r,W*3),v.fromArray(a,C*2),p.fromArray(a,O*2),h.fromArray(a,W*2),d.sub(f),m.sub(f),p.sub(v),h.sub(v);const P=1/(p.x*h.y-h.x*p.y);!isFinite(P)||(g.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(P),y.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(P),c[C].add(g),c[O].add(g),c[W].add(g),u[C].add(y),u[O].add(y),u[W].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let C=0,O=b.length;C<O;++C){const W=b[C],P=W.start,F=W.count;for(let R=P,U=P+F;R<U;R+=3)w(n[R+0],n[R+1],n[R+2])}const x=new N,M=new N,D=new N,_=new N;function E(C){D.fromArray(s,C*3),_.copy(D);const O=c[C];x.copy(O),x.sub(D.multiplyScalar(D.dot(O))).normalize(),M.crossVectors(_,O);const P=M.dot(u[C])<0?-1:1;l[C*4]=x.x,l[C*4+1]=x.y,l[C*4+2]=x.z,l[C*4+3]=P}for(let C=0,O=b.length;C<O;++C){const W=b[C],P=W.start,F=W.count;for(let R=P,U=P+F;R<U;R+=3)E(n[R+0]),E(n[R+1]),E(n[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,h),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,h),o.add(u),l.add(u),c.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(h,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let p=0,h=l.length;p<h;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let g=0;g<u;g++)d[v++]=c[m++]}return new fn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const za=new Ke,Li=new Co,Hs=new ss,Gn=new N,Bn=new N,Vn=new N,js=new N,qs=new N,Xs=new N,Nr=new N,Fr=new N,zr=new N,Ur=new Ae,kr=new Ae,Gr=new Ae,Ys=new N,Br=new N;class Jt extends He{constructor(e=new Vt,t=new Do){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(s),e.ray.intersectsSphere(Hs)===!1)||(za.copy(s).invert(),Li.copy(e.ray).applyMatrix4(za),n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,v=n.drawRange;if(o!==null)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const g=m[p],y=r[g.materialIndex],w=Math.max(g.start,v.start),b=Math.min(o.count,Math.min(g.start+g.count,v.start+v.count));for(let x=w,M=b;x<M;x+=3){const D=o.getX(x),_=o.getX(x+1),E=o.getX(x+2);a=Vr(this,y,e,Li,l,c,u,f,d,D,_,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),h=Math.min(o.count,v.start+v.count);for(let g=p,y=h;g<y;g+=3){const w=o.getX(g),b=o.getX(g+1),x=o.getX(g+2);a=Vr(this,r,e,Li,l,c,u,f,d,w,b,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const g=m[p],y=r[g.materialIndex],w=Math.max(g.start,v.start),b=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let x=w,M=b;x<M;x+=3){const D=x,_=x+1,E=x+2;a=Vr(this,y,e,Li,l,c,u,f,d,D,_,E),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=g.materialIndex,t.push(a))}}else{const p=Math.max(0,v.start),h=Math.min(l.count,v.start+v.count);for(let g=p,y=h;g<y;g+=3){const w=g,b=g+1,x=g+2;a=Vr(this,r,e,Li,l,c,u,f,d,w,b,x),a&&(a.faceIndex=Math.floor(g/3),t.push(a))}}}}function Of(i,e,t,n,r,s,a,o){let l;if(e.side===$t?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side!==Wn,o),l===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Br);return c<t.near||c>t.far?null:{distance:c,point:Br.clone(),object:i}}function Vr(i,e,t,n,r,s,a,o,l,c,u,f){Gn.fromBufferAttribute(r,c),Bn.fromBufferAttribute(r,u),Vn.fromBufferAttribute(r,f);const d=i.morphTargetInfluences;if(s&&d){Nr.set(0,0,0),Fr.set(0,0,0),zr.set(0,0,0);for(let v=0,p=s.length;v<p;v++){const h=d[v],g=s[v];h!==0&&(js.fromBufferAttribute(g,c),qs.fromBufferAttribute(g,u),Xs.fromBufferAttribute(g,f),a?(Nr.addScaledVector(js,h),Fr.addScaledVector(qs,h),zr.addScaledVector(Xs,h)):(Nr.addScaledVector(js.sub(Gn),h),Fr.addScaledVector(qs.sub(Bn),h),zr.addScaledVector(Xs.sub(Vn),h)))}Gn.add(Nr),Bn.add(Fr),Vn.add(zr)}i.isSkinnedMesh&&(i.boneTransform(c,Gn),i.boneTransform(u,Bn),i.boneTransform(f,Vn));const m=Of(i,e,t,n,Gn,Bn,Vn,Ys);if(m){o&&(Ur.fromBufferAttribute(o,c),kr.fromBufferAttribute(o,u),Gr.fromBufferAttribute(o,f),m.uv=Ln.getUV(Ys,Gn,Bn,Vn,Ur,kr,Gr,new Ae)),l&&(Ur.fromBufferAttribute(l,c),kr.fromBufferAttribute(l,u),Gr.fromBufferAttribute(l,f),m.uv2=Ln.getUV(Ys,Gn,Bn,Vn,Ur,kr,Gr,new Ae));const v={a:c,b:u,c:f,normal:new N,materialIndex:0};Ln.getNormal(Gn,Bn,Vn,v.normal),m.face=v}return m}class br extends Vt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function v(p,h,g,y,w,b,x,M,D,_,E){const C=b/D,O=x/_,W=b/2,P=x/2,F=M/2,R=D+1,U=_+1;let J=0,j=0;const k=new N;for(let H=0;H<U;H++){const B=H*O-P;for(let ee=0;ee<R;ee++){const $=ee*C-W;k[p]=$*y,k[h]=B*w,k[g]=F,c.push(k.x,k.y,k.z),k[p]=0,k[h]=0,k[g]=M>0?1:-1,u.push(k.x,k.y,k.z),f.push(ee/D),f.push(1-H/_),J+=1}}for(let H=0;H<_;H++)for(let B=0;B<D;B++){const ee=d+B+R*H,$=d+B+R*(H+1),de=d+(B+1)+R*(H+1),ye=d+(B+1)+R*H;l.push(ee,$,ye),l.push($,de,ye),j+=6}o.addGroup(m,j,E),m+=j,d+=J}}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ji(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function bt(i){const e={};for(let t=0;t<i.length;t++){const n=ji(i[t]);for(const r in n)e[r]=n[r]}return e}function Nf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const Mc={clone:ji,merge:bt};var Ff=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ff,this.fragmentShader=zf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Nf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Po extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Bt extends Po{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(Ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ts*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=90,Pi=1;class Uf extends He{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Bt(Di,Pi,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new N(1,0,0)),this.add(r);const s=new Bt(Di,Pi,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(-1,0,0)),this.add(s);const a=new Bt(Di,Pi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new N(0,1,0)),this.add(a);const o=new Bt(Di,Pi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new N(0,-1,0)),this.add(o);const l=new Bt(Di,Pi,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new N(0,0,1)),this.add(l);const c=new Bt(Di,Pi,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new N(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Sc extends tn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kf extends Xn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Sc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new br(5,5,5),s=new Rn({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$t,blending:jn});s.uniforms.tEquirect.value=t;const a=new Jt(r,s),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=Zt),new Uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Zs=new N,Gf=new N,Bf=new Kt;class ti{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zs.subVectors(n,t).cross(Gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Zs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bf.getNormalMatrix(e),r=this.coplanarPoint(Zs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new ss,Wr=new N;class os{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],v=n[10],p=n[11],h=n[12],g=n[13],y=n[14],w=n[15];return t[0].setComponents(o-r,f-l,p-d,w-h).normalize(),t[1].setComponents(o+r,f+l,p+d,w+h).normalize(),t[2].setComponents(o+s,f+c,p+m,w+g).normalize(),t[3].setComponents(o-s,f-c,p-m,w-g).normalize(),t[4].setComponents(o-a,f-u,p-v,w-y).normalize(),t[5].setComponents(o+a,f+u,p+v,w+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(e){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Wr.x=r.normal.x>0?e.max.x:e.min.x,Wr.y=r.normal.y>0?e.max.y:e.min.y,Wr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ec(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Vf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=5123;else if(f instanceof Int16Array)v=5122;else if(f instanceof Uint32Array)v=5125;else if(f instanceof Int32Array)v=5124;else if(f instanceof Int8Array)v=5120;else if(f instanceof Uint8Array)v=5121;else if(f instanceof Uint8ClampedArray)v=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;i.bindBuffer(f,c),m.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Ro extends Vt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=t/l,m=[],v=[],p=[],h=[];for(let g=0;g<u;g++){const y=g*d-a;for(let w=0;w<c;w++){const b=w*f-s;v.push(b,-y,0),p.push(0,0,1),h.push(w/o),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const w=y+c*g,b=y+c*(g+1),x=y+1+c*(g+1),M=y+1+c*g;m.push(w,b,M),m.push(b,x,M)}this.setIndex(m),this.setAttribute("position",new mt(v,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(h,2))}static fromJSON(e){return new Ro(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf="vec3 transformed = vec3( position );",Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Qf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Td=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,Pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Rd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,zd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Ud=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,eh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,th=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ih=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ah=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,fh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_h=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xh=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wh=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Mh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Th=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Ih=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Oh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Nh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Fh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,zh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Uh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,kh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Gh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vh=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Zh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$h=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:Wf,alphamap_pars_fragment:Hf,alphatest_fragment:jf,alphatest_pars_fragment:qf,aomap_fragment:Xf,aomap_pars_fragment:Yf,begin_vertex:Zf,beginnormal_vertex:Kf,bsdfs:Jf,iridescence_fragment:Qf,bumpmap_pars_fragment:$f,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:rd,color_pars_fragment:sd,color_pars_vertex:od,color_vertex:ad,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:ud,displacementmap_pars_vertex:fd,displacementmap_vertex:dd,emissivemap_fragment:hd,emissivemap_pars_fragment:pd,encodings_fragment:md,encodings_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:yd,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Rd,envmap_vertex:bd,fog_vertex:wd,fog_pars_vertex:Md,fog_fragment:Sd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_fragment:Td,lightmap_pars_fragment:Cd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Pd,lights_toon_fragment:Id,lights_toon_pars_fragment:Od,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:zd,lights_physical_pars_fragment:Ud,lights_fragment_begin:kd,lights_fragment_maps:Gd,lights_fragment_end:Bd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:jd,map_fragment:qd,map_pars_fragment:Xd,map_particle_fragment:Yd,map_particle_pars_fragment:Zd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Jd,morphcolor_vertex:Qd,morphnormal_vertex:$d,morphtarget_pars_vertex:eh,morphtarget_vertex:th,normal_fragment_begin:nh,normal_fragment_maps:ih,normal_pars_fragment:rh,normal_pars_vertex:sh,normal_vertex:oh,normalmap_pars_fragment:ah,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:uh,iridescence_pars_fragment:fh,output_fragment:dh,packing:hh,premultiplied_alpha_fragment:ph,project_vertex:mh,dithering_fragment:gh,dithering_pars_fragment:_h,roughnessmap_fragment:vh,roughnessmap_pars_fragment:yh,shadowmap_pars_fragment:xh,shadowmap_pars_vertex:bh,shadowmap_vertex:wh,shadowmask_pars_fragment:Mh,skinbase_vertex:Sh,skinning_pars_vertex:Eh,skinning_vertex:Ah,skinnormal_vertex:Th,specularmap_fragment:Ch,specularmap_pars_fragment:Lh,tonemapping_fragment:Dh,tonemapping_pars_fragment:Ph,transmission_fragment:Rh,transmission_pars_fragment:Ih,uv_pars_fragment:Oh,uv_pars_vertex:Nh,uv_vertex:Fh,uv2_pars_fragment:zh,uv2_pars_vertex:Uh,uv2_vertex:kh,worldpos_vertex:Gh,background_vert:Bh,background_frag:Vh,cube_vert:Wh,cube_frag:Hh,depth_vert:jh,depth_frag:qh,distanceRGBA_vert:Xh,distanceRGBA_frag:Yh,equirect_vert:Zh,equirect_frag:Kh,linedashed_vert:Jh,linedashed_frag:Qh,meshbasic_vert:$h,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:rp,meshnormal_vert:sp,meshnormal_frag:op,meshphong_vert:ap,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:up,meshtoon_vert:fp,meshtoon_frag:dp,points_vert:hp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},oe={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kt},uv2Transform:{value:new Kt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kt}}},mn={basic:{uniforms:bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:bt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:bt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:bt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:bt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:bt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:bt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:bt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:bt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},cube:{uniforms:bt([oe.envmap,{opacity:{value:1}}]),vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:bt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:bt([oe.lights,oe.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};mn.physical={uniforms:bt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};function yp(i,e,t,n,r,s){const a=new Pe(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function m(p,h){let g=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=e.get(y));const w=i.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?v(a,o):y&&y.isColor&&(v(y,1),g=!0),(i.autoClear||g)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===is)?(c===void 0&&(c=new Jt(new br(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:ji(mn.cube.uniforms),vertexShader:mn.cube.vertexShader,fragmentShader:mn.cube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,M,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(u!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jt(new Ro(2,2),new Rn({name:"BackgroundMaterial",uniforms:ji(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,h){t.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return a},setClearColor:function(p,h=1){a.set(p),o=h,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,v(a,o)},render:m}}function xp(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=h(null);let c=l,u=!1;function f(F,R,U,J,j){let k=!1;if(a){const H=p(J,U,R);c!==H&&(c=H,m(c.object)),k=g(F,J,U,j),k&&y(F,J,U,j)}else{const H=R.wireframe===!0;(c.geometry!==J.id||c.program!==U.id||c.wireframe!==H)&&(c.geometry=J.id,c.program=U.id,c.wireframe=H,k=!0)}j!==null&&t.update(j,34963),(k||u)&&(u=!1,_(F,R,U,J),j!==null&&i.bindBuffer(34963,t.get(j).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function v(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function p(F,R,U){const J=U.wireframe===!0;let j=o[F.id];j===void 0&&(j={},o[F.id]=j);let k=j[R.id];k===void 0&&(k={},j[R.id]=k);let H=k[J];return H===void 0&&(H=h(d()),k[J]=H),H}function h(F){const R=[],U=[],J=[];for(let j=0;j<r;j++)R[j]=0,U[j]=0,J[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:J,object:F,attributes:{},index:null}}function g(F,R,U,J){const j=c.attributes,k=R.attributes;let H=0;const B=U.getAttributes();for(const ee in B)if(B[ee].location>=0){const de=j[ee];let ye=k[ee];if(ye===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(ye=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(ye=F.instanceColor)),de===void 0||de.attribute!==ye||ye&&de.data!==ye.data)return!0;H++}return c.attributesNum!==H||c.index!==J}function y(F,R,U,J){const j={},k=R.attributes;let H=0;const B=U.getAttributes();for(const ee in B)if(B[ee].location>=0){let de=k[ee];de===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));const ye={};ye.attribute=de,de&&de.data&&(ye.data=de.data),j[ee]=ye,H++}c.attributes=j,c.attributesNum=H,c.index=J}function w(){const F=c.newAttributes;for(let R=0,U=F.length;R<U;R++)F[R]=0}function b(F){x(F,0)}function x(F,R){const U=c.newAttributes,J=c.enabledAttributes,j=c.attributeDivisors;U[F]=1,J[F]===0&&(i.enableVertexAttribArray(F),J[F]=1),j[F]!==R&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,R),j[F]=R)}function M(){const F=c.newAttributes,R=c.enabledAttributes;for(let U=0,J=R.length;U<J;U++)R[U]!==F[U]&&(i.disableVertexAttribArray(U),R[U]=0)}function D(F,R,U,J,j,k){n.isWebGL2===!0&&(U===5124||U===5125)?i.vertexAttribIPointer(F,R,U,j,k):i.vertexAttribPointer(F,R,U,J,j,k)}function _(F,R,U,J){if(n.isWebGL2===!1&&(F.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const j=J.attributes,k=U.getAttributes(),H=R.defaultAttributeValues;for(const B in k){const ee=k[B];if(ee.location>=0){let $=j[B];if($===void 0&&(B==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),B==="instanceColor"&&F.instanceColor&&($=F.instanceColor)),$!==void 0){const de=$.normalized,ye=$.itemSize,z=t.get($);if(z===void 0)continue;const ve=z.buffer,we=z.type,Me=z.bytesPerElement;if($.isInterleavedBufferAttribute){const ge=$.data,Ge=ge.stride,q=$.offset;if(ge.isInstancedInterleavedBuffer){for(let se=0;se<ee.locationSize;se++)x(ee.location+se,ge.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let se=0;se<ee.locationSize;se++)b(ee.location+se);i.bindBuffer(34962,ve);for(let se=0;se<ee.locationSize;se++)D(ee.location+se,ye/ee.locationSize,we,de,Ge*Me,(q+ye/ee.locationSize*se)*Me)}else{if($.isInstancedBufferAttribute){for(let ge=0;ge<ee.locationSize;ge++)x(ee.location+ge,$.meshPerAttribute);F.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ge=0;ge<ee.locationSize;ge++)b(ee.location+ge);i.bindBuffer(34962,ve);for(let ge=0;ge<ee.locationSize;ge++)D(ee.location+ge,ye/ee.locationSize,we,de,ye*Me,ye/ee.locationSize*ge*Me)}}else if(H!==void 0){const de=H[B];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(ee.location,de);break;case 3:i.vertexAttrib3fv(ee.location,de);break;case 4:i.vertexAttrib4fv(ee.location,de);break;default:i.vertexAttrib1fv(ee.location,de)}}}}M()}function E(){W();for(const F in o){const R=o[F];for(const U in R){const J=R[U];for(const j in J)v(J[j].object),delete J[j];delete R[U]}delete o[F]}}function C(F){if(o[F.id]===void 0)return;const R=o[F.id];for(const U in R){const J=R[U];for(const j in J)v(J[j].object),delete J[j];delete R[U]}delete o[F.id]}function O(F){for(const R in o){const U=o[R];if(U[F.id]===void 0)continue;const J=U[F.id];for(const j in J)v(J[j].object),delete J[j];delete U[F.id]}}function W(){P(),u=!0,c!==l&&(c=l,m(c.object))}function P(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:C,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:b,disableUnusedAttributes:M}}function bp(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function wp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),d=i.getParameter(35660),m=i.getParameter(3379),v=i.getParameter(34076),p=i.getParameter(34921),h=i.getParameter(36347),g=i.getParameter(36348),y=i.getParameter(36349),w=d>0,b=a||e.has("OES_texture_float"),x=w&&b,M=a?i.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:M}}function Mp(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ti,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const v=f.length!==0||d||n!==0||r;return r=d,t=u(f,m,0),n=f.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const v=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,g=i.get(f);if(!r||v===null||v.length===0||s&&!h)s?u(null):c();else{const y=s?0:n,w=y*4;let b=g.clippingState||null;l.value=b,b=u(v,d,w,m);for(let x=0;x!==w;++x)b[x]=t[x];g.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,v){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,v!==!0||h===null){const g=m+p*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(h===null||h.length<g)&&(h=new Float32Array(g));for(let w=0,b=m;w!==p;++w,b+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(h,b),h[b+3]=a.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function Sp(i){let e=new WeakMap;function t(a,o){return o===fo?a.mapping=Vi:o===ho&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===fo||o===ho)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kf(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class as extends Po{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fi=4,Ua=[.125,.215,.35,.446,.526,.582],ii=20,Ks=new as,ka=new Pe;let Js=null;const ni=(1+Math.sqrt(5))/2,Ii=1/ni,Ga=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,ni,Ii),new N(0,ni,-Ii),new N(Ii,0,ni),new N(-Ii,0,ni),new N(ni,Ii,0),new N(-ni,Ii,0)];class Ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Js=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ha(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Js),e.scissorTest=!1,Hr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vi||e.mapping===Wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Js=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:pr,format:_n,encoding:qn,depthBuffer:!1},r=Va(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Va(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(s)),this._blurMaterial=Ap(s,e,t)}return r}_compileMaterial(e){const t=new Jt(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,r){const o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ka),u.toneMapping=vn,u.autoClear=!1;const m=new Do({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),v=new Jt(new br,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(ka),p=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const w=this._cubeSize;Hr(r,y*w,g>2?w:0,w,w),u.setRenderTarget(r),p&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=h}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Vi||e.mapping===Wi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ha()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wa());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Hr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ga[(r-1)%Ga.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Jt(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),p=s/v,h=isFinite(s)?1+Math.floor(u*p):ii;h>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${ii}`);const g=[];let y=0;for(let D=0;D<ii;++D){const _=D/p,E=Math.exp(-_*_/2);g.push(E),D===0?y+=E:D<h&&(y+=2*E)}for(let D=0;D<g.length;D++)g[D]=g[D]/y;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-n;const b=this._sizeLods[r],x=3*b*(r>w-Fi?r-w+Fi:0),M=4*(this._cubeSize-b);Hr(t,x,M,3*b,2*b),l.setRenderTarget(t),l.render(f,Ks)}}function Ep(i){const e=[],t=[],n=[];let r=i;const s=i-Fi+1+Ua.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Fi?l=Ua[a-i+Fi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,p=3,h=2,g=1,y=new Float32Array(p*v*m),w=new Float32Array(h*v*m),b=new Float32Array(g*v*m);for(let M=0;M<m;M++){const D=M%3*2/3-1,_=M>2?0:-1,E=[D,_,0,D+2/3,_,0,D+2/3,_+1,0,D,_,0,D+2/3,_+1,0,D,_+1,0];y.set(E,p*v*M),w.set(d,h*v*M);const C=[M,M,M,M,M,M];b.set(C,g*v*M)}const x=new Vt;x.setAttribute("position",new fn(y,p)),x.setAttribute("uv",new fn(w,h)),x.setAttribute("faceIndex",new fn(b,g)),e.push(x),r>Fi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Va(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ap(i,e,t){const n=new Float32Array(ii),r=new N(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Wa(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Ha(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function Io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fo||l===ho,u=l===Vi||l===Wi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Ba(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Ba(i));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Lp(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],34962);const m=f.morphAttributes;for(const v in m){const p=m[v];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let p=0;if(m!==null){const y=m.array;p=m.version;for(let w=0,b=y.length;w<b;w+=3){const x=y[w+0],M=y[w+1],D=y[w+2];d.push(x,M,M,D,D,x)}}else{const y=v.array;p=v.version;for(let w=0,b=y.length/3-1;w<b;w+=3){const x=w+0,M=w+1,D=w+2;d.push(x,M,M,D,D,x)}}const h=new(gc(d)?wc:bc)(d,1);h.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,h)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Dp(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(s,m,o,d*l),t.update(m,s,1)}function f(d,m,v){if(v===0)return;let p,h;if(r)p=i,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,o,d*l,v),t.update(m,s,v)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rp(i,e){return i[0]-e[0]}function Ip(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Op(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new vt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=p!==void 0?p.length:0;let g=s.get(u);if(g===void 0||g.count!==h){let U=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",U)};var v=U;g!==void 0&&g.texture.dispose();const b=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],E=u.morphAttributes.color||[];let C=0;b===!0&&(C=1),x===!0&&(C=2),M===!0&&(C=3);let O=u.attributes.position.count*C,W=1;O>e.maxTextureSize&&(W=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const P=new Float32Array(O*W*4*h),F=new xc(P,O,W,h);F.type=oi,F.needsUpdate=!0;const R=C*4;for(let J=0;J<h;J++){const j=D[J],k=_[J],H=E[J],B=O*W*4*J;for(let ee=0;ee<j.count;ee++){const $=ee*R;b===!0&&(a.fromBufferAttribute(j,ee),P[B+$+0]=a.x,P[B+$+1]=a.y,P[B+$+2]=a.z,P[B+$+3]=0),x===!0&&(a.fromBufferAttribute(k,ee),P[B+$+4]=a.x,P[B+$+5]=a.y,P[B+$+6]=a.z,P[B+$+7]=0),M===!0&&(a.fromBufferAttribute(H,ee),P[B+$+8]=a.x,P[B+$+9]=a.y,P[B+$+10]=a.z,P[B+$+11]=H.itemSize===4?a.w:1)}}g={count:h,texture:F,size:new Ae(O,W)},s.set(u,g),u.addEventListener("dispose",U)}let y=0;for(let b=0;b<m.length;b++)y+=m[b];const w=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==p){h=[];for(let x=0;x<p;x++)h[x]=[x,0];n[u.id]=h}for(let x=0;x<p;x++){const M=h[x];M[0]=x,M[1]=m[x]}h.sort(Ip);for(let x=0;x<8;x++)x<p&&h[x][1]?(o[x][0]=h[x][0],o[x][1]=h[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Rp);const g=u.morphAttributes.position,y=u.morphAttributes.normal;let w=0;for(let x=0;x<8;x++){const M=o[x],D=M[0],_=M[1];D!==Number.MAX_SAFE_INTEGER&&_?(g&&u.getAttribute("morphTarget"+x)!==g[D]&&u.setAttribute("morphTarget"+x,g[D]),y&&u.getAttribute("morphNormal"+x)!==y[D]&&u.setAttribute("morphNormal"+x,y[D]),r[x]=_,w+=_):(g&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),y&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const b=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Np(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ac=new tn,Tc=new xc,Cc=new Sf,Lc=new Sc,ja=[],qa=[],Xa=new Float32Array(16),Ya=new Float32Array(9),Za=new Float32Array(4);function Ki(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ja[r];if(s===void 0&&(s=new Float32Array(r),ja[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ls(i,e){let t=qa[e];t===void 0&&(t=new Int32Array(e),qa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Za.set(n),i.uniformMatrix2fv(this.addr,!1,Za),Tt(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Ya.set(n),i.uniformMatrix3fv(this.addr,!1,Ya),Tt(t,n)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(At(t,n))return;Xa.set(n),i.uniformMatrix4fv(this.addr,!1,Xa),Tt(t,n)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;At(t,e)||(i.uniform2iv(this.addr,e),Tt(t,e))}function jp(i,e){const t=this.cache;At(t,e)||(i.uniform3iv(this.addr,e),Tt(t,e))}function qp(i,e){const t=this.cache;At(t,e)||(i.uniform4iv(this.addr,e),Tt(t,e))}function Xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yp(i,e){const t=this.cache;At(t,e)||(i.uniform2uiv(this.addr,e),Tt(t,e))}function Zp(i,e){const t=this.cache;At(t,e)||(i.uniform3uiv(this.addr,e),Tt(t,e))}function Kp(i,e){const t=this.cache;At(t,e)||(i.uniform4uiv(this.addr,e),Tt(t,e))}function Jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Ac,r)}function Qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cc,r)}function $p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lc,r)}function em(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Tc,r)}function tm(i){switch(i){case 5126:return Fp;case 35664:return zp;case 35665:return Up;case 35666:return kp;case 35674:return Gp;case 35675:return Bp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Hp;case 35668:case 35672:return jp;case 35669:case 35673:return qp;case 5125:return Xp;case 36294:return Yp;case 36295:return Zp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return $p;case 36289:case 36303:case 36311:case 36292:return em}}function nm(i,e){i.uniform1fv(this.addr,e)}function im(i,e){const t=Ki(e,this.size,2);i.uniform2fv(this.addr,t)}function rm(i,e){const t=Ki(e,this.size,3);i.uniform3fv(this.addr,t)}function sm(i,e){const t=Ki(e,this.size,4);i.uniform4fv(this.addr,t)}function om(i,e){const t=Ki(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){const t=Ki(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lm(i,e){const t=Ki(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cm(i,e){i.uniform1iv(this.addr,e)}function um(i,e){i.uniform2iv(this.addr,e)}function fm(i,e){i.uniform3iv(this.addr,e)}function dm(i,e){i.uniform4iv(this.addr,e)}function hm(i,e){i.uniform1uiv(this.addr,e)}function pm(i,e){i.uniform2uiv(this.addr,e)}function mm(i,e){i.uniform3uiv(this.addr,e)}function gm(i,e){i.uniform4uiv(this.addr,e)}function _m(i,e,t){const n=e.length,r=ls(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Ac,r[s])}function vm(i,e,t){const n=e.length,r=ls(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Cc,r[s])}function ym(i,e,t){const n=e.length,r=ls(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Lc,r[s])}function xm(i,e,t){const n=e.length,r=ls(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Tc,r[s])}function bm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return rm;case 35666:return sm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return hm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return xm}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=tm(t.type)}}class Mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=bm(t.type)}}class Sm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Ka(i,e){i.seq.push(e),i.map[e.id]=e}function Em(i,e,t){const n=i.name,r=n.length;for(Qs.lastIndex=0;;){const s=Qs.exec(n),a=Qs.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Ka(t,c===void 0?new wm(o,i,e):new Mm(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Sm(o),Ka(t,f)),t=f}}}class $r{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Em(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Ja(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Am=0;function Tm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Cm(i){switch(i){case qn:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Qa(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Tm(i.getShaderSource(e),a)}else return r}function Lm(i,e){const t=Cm(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Dm(i,e){let t;switch(e){case Ju:t="Linear";break;case Qu:t="Reinhard";break;case $u:t="OptimizedCineon";break;case dc:t="ACESFilmic";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pm(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function Rm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cr(i){return i!==""}function $a(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function el(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(Om,Nm)}function Nm(i,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return vo(t)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tl(i){return i.replace(Fm,zm)}function zm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Um(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function km(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vi:case Wi:e="ENVMAP_TYPE_CUBE";break;case is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Wi:e="ENVMAP_MODE_REFRACTION";break}return e}function Bm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case To:e="ENVMAP_BLENDING_MULTIPLY";break;case Zu:e="ENVMAP_BLENDING_MIX";break;case Ku:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Um(t),c=km(t),u=Gm(t),f=Bm(t),d=Vm(t),m=t.isWebGL2?"":Pm(t),v=Rm(s),p=r.createProgram();let h,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=[v].filter(cr).join(`
`),h.length>0&&(h+=`
`),g=[m,v].filter(cr).join(`
`),g.length>0&&(g+=`
`)):(h=[nl(t),"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),g=[m,nl(t),"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==vn?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,Lm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=vo(a),a=$a(a,t),a=el(a,t),o=vo(o),o=$a(o,t),o=el(o,t),a=tl(a),o=tl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",t.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const w=y+h+a,b=y+g+o,x=Ja(r,35633,w),M=Ja(r,35632,b);if(r.attachShader(p,x),r.attachShader(p,M),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(x).trim(),O=r.getShaderInfoLog(M).trim();let W=!0,P=!0;if(r.getProgramParameter(p,35714)===!1){W=!1;const F=Qa(r,x,"vertex"),R=Qa(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+F+`
`+R)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(C===""||O==="")&&(P=!1);P&&(this.diagnostics={runnable:W,programLog:E,vertexShader:{log:C,prefix:h},fragmentShader:{log:O,prefix:g}})}r.deleteShader(x),r.deleteShader(M);let D;this.getUniforms=function(){return D===void 0&&(D=new $r(r,p)),D};let _;return this.getAttributes=function(){return _===void 0&&(_=Im(r,p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=M,this}let Hm=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new qm(e),t.set(e,n)),n}}class qm{constructor(e){this.id=Hm++,this.code=e,this.usedTimes=0}}function Xm(i,e,t,n,r,s,a){const o=new Lo,l=new jm,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_,E,C,O,W){const P=O.fog,F=W.geometry,R=_.isMeshStandardMaterial?O.environment:null,U=(_.isMeshStandardMaterial?t:e).get(_.envMap||R),J=!!U&&U.mapping===is?U.image.height:null,j=v[_.type];_.precision!==null&&(m=r.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const k=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,H=k!==void 0?k.length:0;let B=0;F.morphAttributes.position!==void 0&&(B=1),F.morphAttributes.normal!==void 0&&(B=2),F.morphAttributes.color!==void 0&&(B=3);let ee,$,de,ye;if(j){const Ge=mn[j];ee=Ge.vertexShader,$=Ge.fragmentShader}else ee=_.vertexShader,$=_.fragmentShader,l.update(_),de=l.getVertexShaderID(_),ye=l.getFragmentShaderID(_);const z=i.getRenderTarget(),ve=_.alphaTest>0,we=_.clearcoat>0,Me=_.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:_.type,vertexShader:ee,fragmentShader:$,defines:_.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:W.isInstancedMesh===!0,instancingColor:W.isInstancedMesh===!0&&W.instanceColor!==null,supportsVertexTextures:d,outputEncoding:z===null?i.outputEncoding:z.isXRRenderTarget===!0?z.texture.encoding:qn,map:!!_.map,matcap:!!_.matcap,envMap:!!U,envMapMode:U&&U.mapping,envMapCubeUVHeight:J,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===xf,tangentSpaceNormalMap:_.normalMapType===mc,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===tt,clearcoat:we,clearcoatMap:we&&!!_.clearcoatMap,clearcoatRoughnessMap:we&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!_.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!_.iridescenceMap,iridescenceThicknessMap:Me&&!!_.iridescenceThicknessMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Ui,alphaMap:!!_.alphaMap,alphaTest:ve,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!F.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||!!_.iridescenceMap||!!_.iridescenceThicknessMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!P,useFog:_.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:f,skinning:W.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:B,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:_.toneMapped?i.toneMapping:vn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Wn,flipSided:_.side===$t,useDepthPacking:!!_.depthPacking,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function h(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(g(E,_),y(E,_),E.push(i.outputEncoding)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputEncoding),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.combine),_.push(E.vertexUvs),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function y(_,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),_.push(o.mask)}function w(_){const E=v[_.type];let C;if(E){const O=mn[E];C=Mc.clone(O.uniforms)}else C=_.uniforms;return C}function b(_,E){let C;for(let O=0,W=c.length;O<W;O++){const P=c[O];if(P.cacheKey===E){C=P,++C.usedTimes;break}}return C===void 0&&(C=new Wm(i,E,_,s),c.push(C)),C}function x(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function M(_){l.remove(_)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:w,acquireProgram:b,releaseProgram:x,releaseShaderCache:M,programs:c,dispose:D}}function Ym(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Zm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function il(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,m,v,p,h){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:p,group:h},i[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=v,g.renderOrder=f.renderOrder,g.z=p,g.group=h),e++,g}function o(f,d,m,v,p,h){const g=a(f,d,m,v,p,h);m.transmission>0?n.push(g):m.transparent===!0?r.push(g):t.push(g)}function l(f,d,m,v,p,h){const g=a(f,d,m,v,p,h);m.transmission>0?n.unshift(g):m.transparent===!0?r.unshift(g):t.unshift(g)}function c(f,d){t.length>1&&t.sort(f||Zm),n.length>1&&n.sort(d||il),r.length>1&&r.sort(d||il)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Km(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new rl,i.set(n,[a])):r>=s.length?(a=new rl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Pe};break;case"SpotLight":t={position:new N,direction:new N,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function Qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $m=0;function eg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tg(i,e){const t=new Jm,n=Qm(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,a=new Ke,o=new Ke;function l(u,f){let d=0,m=0,v=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let p=0,h=0,g=0,y=0,w=0,b=0,x=0,M=0,D=0,_=0;u.sort(eg);const E=f!==!0?Math.PI:1;for(let O=0,W=u.length;O<W;O++){const P=u[O],F=P.color,R=P.intensity,U=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=F.r*R*E,m+=F.g*R*E,v+=F.b*R*E;else if(P.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(P.sh.coefficients[j],R);else if(P.isDirectionalLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*E),P.castShadow){const k=P.shadow,H=n.get(P);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,r.directionalShadow[p]=H,r.directionalShadowMap[p]=J,r.directionalShadowMatrix[p]=P.shadow.matrix,b++}r.directional[p]=j,p++}else if(P.isSpotLight){const j=t.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(F).multiplyScalar(R*E),j.distance=U,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,r.spot[g]=j;const k=P.shadow;if(P.map&&(r.spotLightMap[D]=P.map,D++,k.updateMatrices(P),P.castShadow&&_++),r.spotLightMatrix[g]=k.matrix,P.castShadow){const H=n.get(P);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,r.spotShadow[g]=H,r.spotShadowMap[g]=J,M++}g++}else if(P.isRectAreaLight){const j=t.get(P);j.color.copy(F).multiplyScalar(R),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),r.rectArea[y]=j,y++}else if(P.isPointLight){const j=t.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity*E),j.distance=P.distance,j.decay=P.decay,P.castShadow){const k=P.shadow,H=n.get(P);H.shadowBias=k.bias,H.shadowNormalBias=k.normalBias,H.shadowRadius=k.radius,H.shadowMapSize=k.mapSize,H.shadowCameraNear=k.camera.near,H.shadowCameraFar=k.camera.far,r.pointShadow[h]=H,r.pointShadowMap[h]=J,r.pointShadowMatrix[h]=P.shadow.matrix,x++}r.point[h]=j,h++}else if(P.isHemisphereLight){const j=t.get(P);j.skyColor.copy(P.color).multiplyScalar(R*E),j.groundColor.copy(P.groundColor).multiplyScalar(R*E),r.hemi[w]=j,w++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const C=r.hash;(C.directionalLength!==p||C.pointLength!==h||C.spotLength!==g||C.rectAreaLength!==y||C.hemiLength!==w||C.numDirectionalShadows!==b||C.numPointShadows!==x||C.numSpotShadows!==M||C.numSpotMaps!==D)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=y,r.point.length=h,r.hemi.length=w,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=M+D-_,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=_,C.directionalLength=p,C.pointLength=h,C.spotLength=g,C.rectAreaLength=y,C.hemiLength=w,C.numDirectionalShadows=b,C.numPointShadows=x,C.numSpotShadows=M,C.numSpotMaps=D,r.version=$m++)}function c(u,f){let d=0,m=0,v=0,p=0,h=0;const g=f.matrixWorldInverse;for(let y=0,w=u.length;y<w;y++){const b=u[y];if(b.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(b.isSpotLight){const x=r.spot[v];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),v++}else if(b.isRectAreaLight){const x=r.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),a.copy(b.matrixWorld),a.premultiply(g),o.extractRotation(a),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const x=r.point[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),m++}else if(b.isHemisphereLight){const x=r.hemi[h];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),h++}}}return{setup:l,setupView:c,state:r}}function sl(i,e){const t=new tg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ng(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new sl(i,e),t.set(s,[l])):a>=o.length?(l=new sl(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ig extends Zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends Zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ag(i,e,t){let n=new os;const r=new Ae,s=new Ae,a=new vt,o=new ig({depthPacking:yf}),l=new rg,c={},u=t.maxTextureSize,f={0:$t,1:Bi,2:Wn},d=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:sg,fragmentShader:og}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Vt;v.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Jt(v,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc,this.render=function(b,x,M){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;const D=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),C=i.state;C.setBlending(jn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let O=0,W=b.length;O<W;O++){const P=b[O],F=P.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",P,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const R=F.getFrameExtents();if(r.multiply(R),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/R.x),r.x=s.x*R.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/R.y),r.y=s.y*R.y,F.mapSize.y=s.y)),F.map===null){const J=this.type!==lr?{minFilter:Ct,magFilter:Ct}:{};F.map=new Xn(r.x,r.y,J),F.map.texture.name=P.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const U=F.getViewportCount();for(let J=0;J<U;J++){const j=F.getViewport(J);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),C.viewport(a),F.updateMatrices(P,J),n=F.getFrustum(),w(x,M,F.camera,P,this.type)}F.isPointLightShadow!==!0&&this.type===lr&&g(F,M),F.needsUpdate=!1}h.needsUpdate=!1,i.setRenderTarget(D,_,E)};function g(b,x){const M=e.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Xn(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(x,null,M,d,p,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(x,null,M,m,p,null)}function y(b,x,M,D,_,E){let C=null;const O=M.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0?C=O:C=M.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const W=C.uuid,P=x.uuid;let F=c[W];F===void 0&&(F={},c[W]=F);let R=F[P];R===void 0&&(R=C.clone(),F[P]=R),C=R}return C.visible=x.visible,C.wireframe=x.wireframe,E===lr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:f[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaTest,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,M.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(M.matrixWorld),C.nearDistance=D,C.farDistance=_),C}function w(b,x,M,D,_){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&_===lr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,b.matrixWorld);const O=e.update(b),W=b.material;if(Array.isArray(W)){const P=O.groups;for(let F=0,R=P.length;F<R;F++){const U=P[F],J=W[U.materialIndex];if(J&&J.visible){const j=y(b,J,D,M.near,M.far,_);i.renderBufferDirect(M,null,O,j,b,U)}}}else if(W.visible){const P=y(b,W,D,M.near,M.far,_);i.renderBufferDirect(M,null,O,P,b,null)}}const C=b.children;for(let O=0,W=C.length;O<W;O++)w(C[O],x,M,D,_)}}function lg(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const ae=new vt;let X=null;const me=new vt(0,0,0,0);return{setMask:function(he){X!==he&&!I&&(i.colorMask(he,he,he,he),X=he)},setLocked:function(he){I=he},setClear:function(he,ke,gt,st,On){On===!0&&(he*=st,ke*=st,gt*=st),ae.set(he,ke,gt,st),me.equals(ae)===!1&&(i.clearColor(he,ke,gt,st),me.copy(ae))},reset:function(){I=!1,X=null,me.set(-1,0,0,0)}}}function s(){let I=!1,ae=null,X=null,me=null;return{setTest:function(he){he?ve(2929):we(2929)},setMask:function(he){ae!==he&&!I&&(i.depthMask(he),ae=he)},setFunc:function(he){if(X!==he){if(he)switch(he){case Vu:i.depthFunc(512);break;case Wu:i.depthFunc(519);break;case Hu:i.depthFunc(513);break;case uo:i.depthFunc(515);break;case ju:i.depthFunc(514);break;case qu:i.depthFunc(518);break;case Xu:i.depthFunc(516);break;case Yu:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);X=he}},setLocked:function(he){I=he},setClear:function(he){me!==he&&(i.clearDepth(he),me=he)},reset:function(){I=!1,ae=null,X=null,me=null}}}function a(){let I=!1,ae=null,X=null,me=null,he=null,ke=null,gt=null,st=null,On=null;return{setTest:function(it){I||(it?ve(2960):we(2960))},setMask:function(it){ae!==it&&!I&&(i.stencilMask(it),ae=it)},setFunc:function(it,bn,Ht){(X!==it||me!==bn||he!==Ht)&&(i.stencilFunc(it,bn,Ht),X=it,me=bn,he=Ht)},setOp:function(it,bn,Ht){(ke!==it||gt!==bn||st!==Ht)&&(i.stencilOp(it,bn,Ht),ke=it,gt=bn,st=Ht)},setLocked:function(it){I=it},setClear:function(it){On!==it&&(i.clearStencil(it),On=it)},reset:function(){I=!1,ae=null,X=null,me=null,he=null,ke=null,gt=null,st=null,On=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,p=[],h=null,g=!1,y=null,w=null,b=null,x=null,M=null,D=null,_=null,E=!1,C=null,O=null,W=null,P=null,F=null;const R=i.getParameter(35661);let U=!1,J=0;const j=i.getParameter(7938);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=J>=2);let k=null,H={};const B=i.getParameter(3088),ee=i.getParameter(2978),$=new vt().fromArray(B),de=new vt().fromArray(ee);function ye(I,ae,X){const me=new Uint8Array(4),he=i.createTexture();i.bindTexture(I,he),i.texParameteri(I,10241,9728),i.texParameteri(I,10240,9728);for(let ke=0;ke<X;ke++)i.texImage2D(ae+ke,0,6408,1,1,0,6408,5121,me);return he}const z={};z[3553]=ye(3553,3553,1),z[34067]=ye(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(2929),l.setFunc(uo),ut(!1),Nt(Yo),ve(2884),Ue(jn);function ve(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function we(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Me(I,ae){return m[I]!==ae?(i.bindFramebuffer(I,ae),m[I]=ae,n&&(I===36009&&(m[36160]=ae),I===36160&&(m[36009]=ae)),!0):!1}function ge(I,ae){let X=p,me=!1;if(I)if(X=v.get(ae),X===void 0&&(X=[],v.set(ae,X)),I.isWebGLMultipleRenderTargets){const he=I.texture;if(X.length!==he.length||X[0]!==36064){for(let ke=0,gt=he.length;ke<gt;ke++)X[ke]=36064+ke;X.length=he.length,me=!0}}else X[0]!==36064&&(X[0]=36064,me=!0);else X[0]!==1029&&(X[0]=1029,me=!0);me&&(t.isWebGL2?i.drawBuffers(X):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(X))}function Ge(I){return h!==I?(i.useProgram(I),h=I,!0):!1}const q={[Ni]:32774,[Pu]:32778,[Ru]:32779};if(n)q[Qo]=32775,q[$o]=32776;else{const I=e.get("EXT_blend_minmax");I!==null&&(q[Qo]=I.MIN_EXT,q[$o]=I.MAX_EXT)}const se={[Iu]:0,[Ou]:1,[Nu]:768,[uc]:770,[Bu]:776,[ku]:774,[zu]:772,[Fu]:769,[fc]:771,[Gu]:775,[Uu]:773};function Ue(I,ae,X,me,he,ke,gt,st){if(I===jn){g===!0&&(we(3042),g=!1);return}if(g===!1&&(ve(3042),g=!0),I!==Du){if(I!==y||st!==E){if((w!==Ni||M!==Ni)&&(i.blendEquation(32774),w=Ni,M=Ni),st)switch(I){case Ui:i.blendFuncSeparate(1,771,1,771);break;case Zo:i.blendFunc(1,1);break;case Ko:i.blendFuncSeparate(0,769,0,1);break;case Jo:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ui:i.blendFuncSeparate(770,771,1,771);break;case Zo:i.blendFunc(770,1);break;case Ko:i.blendFuncSeparate(0,769,0,1);break;case Jo:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,x=null,D=null,_=null,y=I,E=st}return}he=he||ae,ke=ke||X,gt=gt||me,(ae!==w||he!==M)&&(i.blendEquationSeparate(q[ae],q[he]),w=ae,M=he),(X!==b||me!==x||ke!==D||gt!==_)&&(i.blendFuncSeparate(se[X],se[me],se[ke],se[gt]),b=X,x=me,D=ke,_=gt),y=I,E=null}function ct(I,ae){I.side===Wn?we(2884):ve(2884);let X=I.side===$t;ae&&(X=!X),ut(X),I.blending===Ui&&I.transparent===!1?Ue(jn):Ue(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const me=I.stencilWrite;c.setTest(me),me&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ve(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ve(32926):we(32926)}function ut(I){C!==I&&(I?i.frontFace(2304):i.frontFace(2305),C=I)}function Nt(I){I!==Cu?(ve(2884),I!==O&&(I===Yo?i.cullFace(1029):I===Lu?i.cullFace(1028):i.cullFace(1032))):we(2884),O=I}function ft(I){I!==W&&(U&&i.lineWidth(I),W=I)}function Ve(I,ae,X){I?(ve(32823),(P!==ae||F!==X)&&(i.polygonOffset(ae,X),P=ae,F=X)):we(32823)}function Wt(I){I?ve(3089):we(3089)}function Ft(I){I===void 0&&(I=33984+R-1),k!==I&&(i.activeTexture(I),k=I)}function L(I,ae){k===null&&Ft();let X=H[k];X===void 0&&(X={type:void 0,texture:void 0},H[k]=X),(X.type!==I||X.texture!==ae)&&(i.bindTexture(I,ae||z[I]),X.type=I,X.texture=ae)}function S(){const I=H[k];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function A(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){$.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),$.copy(I))}function le(I){de.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),de.copy(I))}function Ee(I,ae){let X=f.get(ae);X===void 0&&(X=new WeakMap,f.set(ae,X));let me=X.get(I);me===void 0&&(me=i.getUniformBlockIndex(ae,I.name),X.set(I,me))}function Ne(I,ae){const me=f.get(ae).get(I);u.get(I)!==me&&(i.uniformBlockBinding(ae,me,I.__bindingPointIndex),u.set(I,me))}function $e(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},k=null,H={},m={},v=new WeakMap,p=[],h=null,g=!1,y=null,w=null,b=null,x=null,M=null,D=null,_=null,E=!1,C=null,O=null,W=null,P=null,F=null,$.set(0,0,i.canvas.width,i.canvas.height),de.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:we,bindFramebuffer:Me,drawBuffers:ge,useProgram:Ge,setBlending:Ue,setMaterial:ct,setFlipSided:ut,setCullFace:Nt,setLineWidth:ft,setPolygonOffset:Ve,setScissorTest:Wt,activeTexture:Ft,bindTexture:L,unbindTexture:S,compressedTexImage2D:Y,texImage2D:Q,texImage3D:re,updateUBOMapping:Ee,uniformBlockBinding:Ne,texStorage2D:Se,texStorage3D:A,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:ce,scissor:ue,viewport:le,reset:$e}}function cg(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,S){return g?new OffscreenCanvas(L,S):mr("canvas")}function w(L,S,Y,te){let ie=1;if((L.width>te||L.height>te)&&(ie=te/Math.max(L.width,L.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ce=S?_o:Math.floor,Se=ce(ie*L.width),A=ce(ie*L.height);p===void 0&&(p=y(Se,A));const Q=Y?y(Se,A):p;return Q.width=Se,Q.height=A,Q.getContext("2d").drawImage(L,0,0,Se,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Se+"x"+A+")."),Q}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function b(L){return Aa(L.width)&&Aa(L.height)}function x(L){return o?!1:L.wrapS!==un||L.wrapT!==un||L.minFilter!==Ct&&L.minFilter!==Zt}function M(L,S){return L.generateMipmaps&&S&&L.minFilter!==Ct&&L.minFilter!==Zt}function D(L){i.generateMipmap(L)}function _(L,S,Y,te,ie=!1){if(o===!1)return S;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=S;return S===6403&&(Y===5126&&(ce=33326),Y===5131&&(ce=33325),Y===5121&&(ce=33321)),S===33319&&(Y===5126&&(ce=33328),Y===5131&&(ce=33327),Y===5121&&(ce=33323)),S===6408&&(Y===5126&&(ce=34836),Y===5131&&(ce=34842),Y===5121&&(ce=te===tt&&ie===!1?35907:32856),Y===32819&&(ce=32854),Y===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function E(L,S,Y){return M(L,Y)===!0||L.isFramebufferTexture&&L.minFilter!==Ct&&L.minFilter!==Zt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function C(L){return L===Ct||L===ea||L===ta?9728:9729}function O(L){const S=L.target;S.removeEventListener("dispose",O),P(S),S.isVideoTexture&&v.delete(S)}function W(L){const S=L.target;S.removeEventListener("dispose",W),R(S)}function P(L){const S=n.get(L);if(S.__webglInit===void 0)return;const Y=L.source,te=h.get(Y);if(te){const ie=te[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(L),Object.keys(te).length===0&&h.delete(Y)}n.remove(L)}function F(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const Y=L.source,te=h.get(Y);delete te[S.__cacheKey],a.memory.textures--}function R(L){const S=L.texture,Y=n.get(L),te=n.get(S);if(te.__webglTexture!==void 0&&(i.deleteTexture(te.__webglTexture),a.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)i.deleteFramebuffer(Y.__webglFramebuffer[ie]),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ie]);else{if(i.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ie=0;ie<Y.__webglColorRenderbuffer.length;ie++)Y.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ie]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ie=0,ce=S.length;ie<ce;ie++){const Se=n.get(S[ie]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),a.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(L)}let U=0;function J(){U=0}function j(){const L=U;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),U+=1,L}function k(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.encoding),S.join()}function H(L,S){const Y=n.get(L);if(L.isVideoTexture&&Wt(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const te=L.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Y,L,S);return}}t.activeTexture(33984+S),t.bindTexture(3553,Y.__webglTexture)}function B(L,S){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){we(Y,L,S);return}t.activeTexture(33984+S),t.bindTexture(35866,Y.__webglTexture)}function ee(L,S){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){we(Y,L,S);return}t.activeTexture(33984+S),t.bindTexture(32879,Y.__webglTexture)}function $(L,S){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Me(Y,L,S);return}t.activeTexture(33984+S),t.bindTexture(34067,Y.__webglTexture)}const de={[po]:10497,[un]:33071,[mo]:33648},ye={[Ct]:9728,[ea]:9984,[ta]:9986,[Zt]:9729,[tf]:9985,[rs]:9987};function z(L,S,Y){if(Y?(i.texParameteri(L,10242,de[S.wrapS]),i.texParameteri(L,10243,de[S.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,de[S.wrapR]),i.texParameteri(L,10240,ye[S.magFilter]),i.texParameteri(L,10241,ye[S.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(S.wrapS!==un||S.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,C(S.magFilter)),i.texParameteri(L,10241,C(S.minFilter)),S.minFilter!==Ct&&S.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(S.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===pr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(L,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function ve(L,S){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",O));const te=S.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const ce=k(S);if(ce!==L.__cacheKey){ie[ce]===void 0&&(ie[ce]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ie[ce].usedTimes++;const Se=ie[L.__cacheKey];Se!==void 0&&(ie[L.__cacheKey].usedTimes--,Se.usedTimes===0&&F(S)),L.__cacheKey=ce,L.__webglTexture=ie[ce].texture}return Y}function we(L,S,Y){let te=3553;S.isDataArrayTexture&&(te=35866),S.isData3DTexture&&(te=32879);const ie=ve(L,S),ce=S.source;if(t.activeTexture(33984+Y),t.bindTexture(te,L.__webglTexture),ce.version!==ce.__currentVersion||ie===!0){i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const Se=x(S)&&b(S.image)===!1;let A=w(S.image,Se,!1,u);A=Ft(S,A);const Q=b(A)||o,re=s.convert(S.format,S.encoding);let ue=s.convert(S.type),le=_(S.internalFormat,re,ue,S.encoding,S.isVideoTexture);z(te,S,Q);let Ee;const Ne=S.mipmaps,$e=o&&S.isVideoTexture!==!0,I=ce.__currentVersion===void 0||ie===!0,ae=E(S,A,Q);if(S.isDepthTexture)le=6402,o?S.type===oi?le=36012:S.type===si?le=33190:S.type===ki?le=35056:le=33189:S.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===li&&le===6402&&S.type!==pc&&S.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=si,ue=s.convert(S.type)),S.format===Hi&&le===6402&&(le=34041,S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ki,ue=s.convert(S.type))),I&&($e?t.texStorage2D(3553,1,le,A.width,A.height):t.texImage2D(3553,0,le,A.width,A.height,0,re,ue,null));else if(S.isDataTexture)if(Ne.length>0&&Q){$e&&I&&t.texStorage2D(3553,ae,le,Ne[0].width,Ne[0].height);for(let X=0,me=Ne.length;X<me;X++)Ee=Ne[X],$e?t.texSubImage2D(3553,X,0,0,Ee.width,Ee.height,re,ue,Ee.data):t.texImage2D(3553,X,le,Ee.width,Ee.height,0,re,ue,Ee.data);S.generateMipmaps=!1}else $e?(I&&t.texStorage2D(3553,ae,le,A.width,A.height),t.texSubImage2D(3553,0,0,0,A.width,A.height,re,ue,A.data)):t.texImage2D(3553,0,le,A.width,A.height,0,re,ue,A.data);else if(S.isCompressedTexture){$e&&I&&t.texStorage2D(3553,ae,le,Ne[0].width,Ne[0].height);for(let X=0,me=Ne.length;X<me;X++)Ee=Ne[X],S.format!==_n?re!==null?$e?t.compressedTexSubImage2D(3553,X,0,0,Ee.width,Ee.height,re,Ee.data):t.compressedTexImage2D(3553,X,le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,X,0,0,Ee.width,Ee.height,re,ue,Ee.data):t.texImage2D(3553,X,le,Ee.width,Ee.height,0,re,ue,Ee.data)}else if(S.isDataArrayTexture)$e?(I&&t.texStorage3D(35866,ae,le,A.width,A.height,A.depth),t.texSubImage3D(35866,0,0,0,0,A.width,A.height,A.depth,re,ue,A.data)):t.texImage3D(35866,0,le,A.width,A.height,A.depth,0,re,ue,A.data);else if(S.isData3DTexture)$e?(I&&t.texStorage3D(32879,ae,le,A.width,A.height,A.depth),t.texSubImage3D(32879,0,0,0,0,A.width,A.height,A.depth,re,ue,A.data)):t.texImage3D(32879,0,le,A.width,A.height,A.depth,0,re,ue,A.data);else if(S.isFramebufferTexture){if(I)if($e)t.texStorage2D(3553,ae,le,A.width,A.height);else{let X=A.width,me=A.height;for(let he=0;he<ae;he++)t.texImage2D(3553,he,le,X,me,0,re,ue,null),X>>=1,me>>=1}}else if(Ne.length>0&&Q){$e&&I&&t.texStorage2D(3553,ae,le,Ne[0].width,Ne[0].height);for(let X=0,me=Ne.length;X<me;X++)Ee=Ne[X],$e?t.texSubImage2D(3553,X,0,0,re,ue,Ee):t.texImage2D(3553,X,le,re,ue,Ee);S.generateMipmaps=!1}else $e?(I&&t.texStorage2D(3553,ae,le,A.width,A.height),t.texSubImage2D(3553,0,0,0,re,ue,A)):t.texImage2D(3553,0,le,re,ue,A);M(S,Q)&&D(te),ce.__currentVersion=ce.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Me(L,S,Y){if(S.image.length!==6)return;const te=ve(L,S),ie=S.source;if(t.activeTexture(33984+Y),t.bindTexture(34067,L.__webglTexture),ie.version!==ie.__currentVersion||te===!0){i.pixelStorei(37440,S.flipY),i.pixelStorei(37441,S.premultiplyAlpha),i.pixelStorei(3317,S.unpackAlignment),i.pixelStorei(37443,0);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,A=[];for(let X=0;X<6;X++)!ce&&!Se?A[X]=w(S.image[X],!1,!0,c):A[X]=Se?S.image[X].image:S.image[X],A[X]=Ft(S,A[X]);const Q=A[0],re=b(Q)||o,ue=s.convert(S.format,S.encoding),le=s.convert(S.type),Ee=_(S.internalFormat,ue,le,S.encoding),Ne=o&&S.isVideoTexture!==!0,$e=ie.__currentVersion===void 0||te===!0;let I=E(S,Q,re);z(34067,S,re);let ae;if(ce){Ne&&$e&&t.texStorage2D(34067,I,Ee,Q.width,Q.height);for(let X=0;X<6;X++){ae=A[X].mipmaps;for(let me=0;me<ae.length;me++){const he=ae[me];S.format!==_n?ue!==null?Ne?t.compressedTexSubImage2D(34069+X,me,0,0,he.width,he.height,ue,he.data):t.compressedTexImage2D(34069+X,me,Ee,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+X,me,0,0,he.width,he.height,ue,le,he.data):t.texImage2D(34069+X,me,Ee,he.width,he.height,0,ue,le,he.data)}}}else{ae=S.mipmaps,Ne&&$e&&(ae.length>0&&I++,t.texStorage2D(34067,I,Ee,A[0].width,A[0].height));for(let X=0;X<6;X++)if(Se){Ne?t.texSubImage2D(34069+X,0,0,0,A[X].width,A[X].height,ue,le,A[X].data):t.texImage2D(34069+X,0,Ee,A[X].width,A[X].height,0,ue,le,A[X].data);for(let me=0;me<ae.length;me++){const ke=ae[me].image[X].image;Ne?t.texSubImage2D(34069+X,me+1,0,0,ke.width,ke.height,ue,le,ke.data):t.texImage2D(34069+X,me+1,Ee,ke.width,ke.height,0,ue,le,ke.data)}}else{Ne?t.texSubImage2D(34069+X,0,0,0,ue,le,A[X]):t.texImage2D(34069+X,0,Ee,ue,le,A[X]);for(let me=0;me<ae.length;me++){const he=ae[me];Ne?t.texSubImage2D(34069+X,me+1,0,0,ue,le,he.image[X]):t.texImage2D(34069+X,me+1,Ee,ue,le,he.image[X])}}}M(S,re)&&D(34067),ie.__currentVersion=ie.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ge(L,S,Y,te,ie){const ce=s.convert(Y.format,Y.encoding),Se=s.convert(Y.type),A=_(Y.internalFormat,ce,Se,Y.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,A,S.width,S.height,S.depth,0,ce,Se,null):t.texImage2D(ie,0,A,S.width,S.height,0,ce,Se,null)),t.bindFramebuffer(36160,L),Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,te,ie,n.get(Y).__webglTexture,0,ft(S)):i.framebufferTexture2D(36160,te,ie,n.get(Y).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(L,S,Y){if(i.bindRenderbuffer(36161,L),S.depthBuffer&&!S.stencilBuffer){let te=33189;if(Y||Ve(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===oi?te=36012:ie.type===si&&(te=33190));const ce=ft(S);Ve(S)?d.renderbufferStorageMultisampleEXT(36161,ce,te,S.width,S.height):i.renderbufferStorageMultisample(36161,ce,te,S.width,S.height)}else i.renderbufferStorage(36161,te,S.width,S.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(S.depthBuffer&&S.stencilBuffer){const te=ft(S);Y&&Ve(S)===!1?i.renderbufferStorageMultisample(36161,te,35056,S.width,S.height):Ve(S)?d.renderbufferStorageMultisampleEXT(36161,te,35056,S.width,S.height):i.renderbufferStorage(36161,34041,S.width,S.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const te=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<te.length;ie++){const ce=te[ie],Se=s.convert(ce.format,ce.encoding),A=s.convert(ce.type),Q=_(ce.internalFormat,Se,A,ce.encoding),re=ft(S);Y&&Ve(S)===!1?i.renderbufferStorageMultisample(36161,re,Q,S.width,S.height):Ve(S)?d.renderbufferStorageMultisampleEXT(36161,re,Q,S.width,S.height):i.renderbufferStorage(36161,Q,S.width,S.height)}}i.bindRenderbuffer(36161,null)}function q(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ie=ft(S);if(S.depthTexture.format===li)Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):i.framebufferTexture2D(36160,36096,3553,te,0);else if(S.depthTexture.format===Hi)Ve(S)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):i.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function se(L){const S=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");q(S.__webglFramebuffer,L)}else if(Y){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),Ge(S.__webglDepthbuffer[te],L,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ge(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function Ue(L,S,Y){const te=n.get(L);S!==void 0&&ge(te.__webglFramebuffer,L,L.texture,36064,3553),Y!==void 0&&se(L)}function ct(L){const S=L.texture,Y=n.get(L),te=n.get(S);L.addEventListener("dispose",W),L.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,a.memory.textures++);const ie=L.isWebGLCubeRenderTarget===!0,ce=L.isWebGLMultipleRenderTargets===!0,Se=b(L)||o;if(ie){Y.__webglFramebuffer=[];for(let A=0;A<6;A++)Y.__webglFramebuffer[A]=i.createFramebuffer()}else{if(Y.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const A=L.texture;for(let Q=0,re=A.length;Q<re;Q++){const ue=n.get(A[Q]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&L.samples>0&&Ve(L)===!1){const A=ce?S:[S];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let Q=0;Q<A.length;Q++){const re=A[Q];Y.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[Q]);const ue=s.convert(re.format,re.encoding),le=s.convert(re.type),Ee=_(re.internalFormat,ue,le,re.encoding),Ne=ft(L);i.renderbufferStorageMultisample(36161,Ne,Ee,L.width,L.height),i.framebufferRenderbuffer(36160,36064+Q,36161,Y.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,te.__webglTexture),z(34067,S,Se);for(let A=0;A<6;A++)ge(Y.__webglFramebuffer[A],L,S,36064,34069+A);M(S,Se)&&D(34067),t.unbindTexture()}else if(ce){const A=L.texture;for(let Q=0,re=A.length;Q<re;Q++){const ue=A[Q],le=n.get(ue);t.bindTexture(3553,le.__webglTexture),z(3553,ue,Se),ge(Y.__webglFramebuffer,L,ue,36064+Q,3553),M(ue,Se)&&D(3553)}t.unbindTexture()}else{let A=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(o?A=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,te.__webglTexture),z(A,S,Se),ge(Y.__webglFramebuffer,L,S,36064,A),M(S,Se)&&D(A),t.unbindTexture()}L.depthBuffer&&se(L)}function ut(L){const S=b(L)||o,Y=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let te=0,ie=Y.length;te<ie;te++){const ce=Y[te];if(M(ce,S)){const Se=L.isWebGLCubeRenderTarget?34067:3553,A=n.get(ce).__webglTexture;t.bindTexture(Se,A),D(Se),t.unbindTexture()}}}function Nt(L){if(o&&L.samples>0&&Ve(L)===!1){const S=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Y=L.width,te=L.height;let ie=16384;const ce=[],Se=L.stencilBuffer?33306:36096,A=n.get(L),Q=L.isWebGLMultipleRenderTargets===!0;if(Q)for(let re=0;re<S.length;re++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),i.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let re=0;re<S.length;re++){ce.push(36064+re),L.depthBuffer&&ce.push(Se);const ue=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(ue===!1&&(L.depthBuffer&&(ie|=256),L.stencilBuffer&&(ie|=1024)),Q&&i.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[re]),ue===!0&&(i.invalidateFramebuffer(36008,[Se]),i.invalidateFramebuffer(36009,[Se])),Q){const le=n.get(S[re]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,le,0)}i.blitFramebuffer(0,0,Y,te,0,0,Y,te,ie,9728),m&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let re=0;re<S.length;re++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+re,36161,A.__webglColorRenderbuffer[re]);const ue=n.get(S[re]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),i.framebufferTexture2D(36009,36064+re,3553,ue,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function ft(L){return Math.min(f,L.samples)}function Ve(L){const S=n.get(L);return o&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(L){const S=a.render.frame;v.get(L)!==S&&(v.set(L,S),L.update())}function Ft(L,S){const Y=L.encoding,te=L.format,ie=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===go||Y!==qn&&(Y===tt?o===!1?e.has("EXT_sRGB")===!0&&te===_n?(L.format=go,L.minFilter=Zt,L.generateMipmaps=!1):S=vc.sRGBToLinear(S):(te!==_n||ie!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),S}this.allocateTextureUnit=j,this.resetTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=ee,this.setTextureCube=$,this.rebindTextures=Ue,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ve}function ug(i,e,t){const n=t.isWebGL2;function r(s,a=null){let o;if(s===ui)return 5121;if(s===of)return 32819;if(s===af)return 32820;if(s===nf)return 5120;if(s===rf)return 5122;if(s===pc)return 5123;if(s===sf)return 5124;if(s===si)return 5125;if(s===oi)return 5126;if(s===pr)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===lf)return 6406;if(s===_n)return 6408;if(s===uf)return 6409;if(s===ff)return 6410;if(s===li)return 6402;if(s===Hi)return 34041;if(s===df)return 6403;if(s===cf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===go)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===hf)return 36244;if(s===pf)return 33319;if(s===mf)return 33320;if(s===gf)return 36249;if(s===ws||s===Ms||s===Ss||s===Es)if(a===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ms)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ss)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Es)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===na||s===ia||s===ra||s===sa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===na)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===sa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_f)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===oa||s===aa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===oa)return a===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===aa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===la||s===ca||s===ua||s===fa||s===da||s===ha||s===pa||s===ma||s===ga||s===_a||s===va||s===ya||s===xa||s===ba)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===la)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ca)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ua)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===fa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===da)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ha)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===pa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ma)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ga)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_a)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===va)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ya)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===xa)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ba)return a===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===wa)return a===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ki?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class fg extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jr extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dg={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const h=t.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const y=new jr;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[p.jointName]=y,c.add(y)}const g=c.joints[p.jointName];h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class hg extends tn{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:li,u!==li&&u!==Hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===li&&(n=si),n===void 0&&u===Hi&&(n=ki),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1}}class pg extends hi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const v=t.getContextAttributes();let p=null,h=null;const g=[],y=[],w=new Bt;w.layers.enable(1),w.viewport=new vt;const b=new Bt;b.layers.enable(2),b.viewport=new vt;const x=[w,b],M=new fg;M.layers.enable(1),M.layers.enable(2);let D=null,_=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let H=g[k];return H===void 0&&(H=new $s,g[k]=H),H.getTargetRaySpace()},this.getControllerGrip=function(k){let H=g[k];return H===void 0&&(H=new $s,g[k]=H),H.getGripSpace()},this.getHand=function(k){let H=g[k];return H===void 0&&(H=new $s,g[k]=H),H.getHandSpace()};function E(k){const H=y.indexOf(k.inputSource);if(H===-1)return;const B=g[H];B!==void 0&&B.dispatchEvent({type:k.type,data:k.inputSource})}function C(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",O);for(let k=0;k<g.length;k++){const H=y[k];H!==null&&(y[k]=null,g[k].disconnect(H))}D=null,_=null,e.setRenderTarget(p),d=null,f=null,u=null,r=null,h=null,j.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",C),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const H={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,H),r.updateRenderState({baseLayer:d}),h=new Xn(d.framebufferWidth,d.framebufferHeight,{format:_n,type:ui,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let H=null,B=null,ee=null;v.depth&&(ee=v.stencil?35056:33190,H=v.stencil?Hi:li,B=v.stencil?ki:si);const $={colorFormat:32856,depthFormat:ee,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer($),r.updateRenderState({layers:[f]}),h=new Xn(f.textureWidth,f.textureHeight,{format:_n,type:ui,depthTexture:new hg(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const de=e.properties.get(h);de.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),j.setContext(r),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(k){for(let H=0;H<k.removed.length;H++){const B=k.removed[H],ee=y.indexOf(B);ee>=0&&(y[ee]=null,g[ee].dispatchEvent({type:"disconnected",data:B}))}for(let H=0;H<k.added.length;H++){const B=k.added[H];let ee=y.indexOf(B);if(ee===-1){for(let de=0;de<g.length;de++)if(de>=y.length){y.push(B),ee=de;break}else if(y[de]===null){y[de]=B,ee=de;break}if(ee===-1)break}const $=g[ee];$&&$.dispatchEvent({type:"connected",data:B})}}const W=new N,P=new N;function F(k,H,B){W.setFromMatrixPosition(H.matrixWorld),P.setFromMatrixPosition(B.matrixWorld);const ee=W.distanceTo(P),$=H.projectionMatrix.elements,de=B.projectionMatrix.elements,ye=$[14]/($[10]-1),z=$[14]/($[10]+1),ve=($[9]+1)/$[5],we=($[9]-1)/$[5],Me=($[8]-1)/$[0],ge=(de[8]+1)/de[0],Ge=ye*Me,q=ye*ge,se=ee/(-Me+ge),Ue=se*-Me;H.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ue),k.translateZ(se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const ct=ye+se,ut=z+se,Nt=Ge-Ue,ft=q+(ee-Ue),Ve=ve*z/ut*ct,Wt=we*z/ut*ct;k.projectionMatrix.makePerspective(Nt,ft,Ve,Wt,ct,ut)}function R(k,H){H===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(H.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;M.near=b.near=w.near=k.near,M.far=b.far=w.far=k.far,(D!==M.near||_!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,_=M.far);const H=k.parent,B=M.cameras;R(M,H);for(let $=0;$<B.length;$++)R(B[$],H);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),k.matrix.copy(M.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ee=k.children;for(let $=0,de=ee.length;$<de;$++)ee[$].updateMatrixWorld(!0);B.length===2?F(M,w,b):M.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(k){f!==null&&(f.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)};let U=null;function J(k,H){if(c=H.getViewerPose(l||a),m=H,c!==null){const B=c.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let ee=!1;B.length!==M.cameras.length&&(M.cameras.length=0,ee=!0);for(let $=0;$<B.length;$++){const de=B[$];let ye=null;if(d!==null)ye=d.getViewport(de);else{const ve=u.getViewSubImage(f,de);ye=ve.viewport,$===0&&(e.setRenderTargetTextures(h,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(h))}let z=x[$];z===void 0&&(z=new Bt,z.layers.enable($),z.viewport=new vt,x[$]=z),z.matrix.fromArray(de.transform.matrix),z.projectionMatrix.fromArray(de.projectionMatrix),z.viewport.set(ye.x,ye.y,ye.width,ye.height),$===0&&M.matrix.copy(z.matrix),ee===!0&&M.cameras.push(z)}}for(let B=0;B<g.length;B++){const ee=y[B],$=g[B];ee!==null&&$!==void 0&&$.update(ee,H,l||a)}U&&U(k,H),m=null}const j=new Ec;j.setAnimationLoop(J),this.setAnimationLoop=function(k){U=k},this.dispose=function(){}}}function mg(i,e){function t(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function n(p,h,g,y,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,w)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),v(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,g,y):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===$t&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===$t&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*b}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let y;h.map?y=h.map:h.specularMap?y=h.specularMap:h.displacementMap?y=h.displacementMap:h.normalMap?y=h.normalMap:h.bumpMap?y=h.bumpMap:h.roughnessMap?y=h.roughnessMap:h.metalnessMap?y=h.metalnessMap:h.alphaMap?y=h.alphaMap:h.emissiveMap?y=h.emissiveMap:h.clearcoatMap?y=h.clearcoatMap:h.clearcoatNormalMap?y=h.clearcoatNormalMap:h.clearcoatRoughnessMap?y=h.clearcoatRoughnessMap:h.iridescenceMap?y=h.iridescenceMap:h.iridescenceThicknessMap?y=h.iridescenceThicknessMap:h.specularIntensityMap?y=h.specularIntensityMap:h.specularColorMap?y=h.specularColorMap:h.transmissionMap?y=h.transmissionMap:h.thicknessMap?y=h.thicknessMap:h.sheenColorMap?y=h.sheenColorMap:h.sheenRoughnessMap&&(y=h.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix));let w;h.aoMap?w=h.aoMap:h.lightMap&&(w=h.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,g,y){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=y*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let w;h.map?w=h.map:h.alphaMap&&(w=h.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===$t&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function v(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function gg(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(35375):0;function l(y,w){const b=w.program;n.uniformBlockBinding(y,b)}function c(y,w){let b=r[y.id];b===void 0&&(v(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",h));const x=w.program;n.updateUBOMapping(y,x);const M=e.render.frame;s[y.id]!==M&&(d(y),s[y.id]=M)}function u(y){const w=f();y.__bindingPointIndex=w;const b=i.createBuffer(),x=y.__size,M=y.usage;return i.bindBuffer(35345,b),i.bufferData(35345,x,M),i.bindBuffer(35345,null),i.bindBufferBase(35345,w,b),b}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=r[y.id],b=y.uniforms,x=y.__cache;i.bindBuffer(35345,w);for(let M=0,D=b.length;M<D;M++){const _=b[M];if(m(_,M,x)===!0){const E=_.value,C=_.__offset;typeof E=="number"?(_.__data[0]=E,i.bufferSubData(35345,C,_.__data)):(_.value.isMatrix3?(_.__data[0]=_.value.elements[0],_.__data[1]=_.value.elements[1],_.__data[2]=_.value.elements[2],_.__data[3]=_.value.elements[0],_.__data[4]=_.value.elements[3],_.__data[5]=_.value.elements[4],_.__data[6]=_.value.elements[5],_.__data[7]=_.value.elements[0],_.__data[8]=_.value.elements[6],_.__data[9]=_.value.elements[7],_.__data[10]=_.value.elements[8],_.__data[11]=_.value.elements[0]):E.toArray(_.__data),i.bufferSubData(35345,C,_.__data))}}i.bindBuffer(35345,null)}function m(y,w,b){const x=y.value;if(b[w]===void 0)return typeof x=="number"?b[w]=x:b[w]=x.clone(),!0;if(typeof x=="number"){if(b[w]!==x)return b[w]=x,!0}else{const M=b[w];if(M.equals(x)===!1)return M.copy(x),!0}return!1}function v(y){const w=y.uniforms;let b=0;const x=16;let M=0;for(let D=0,_=w.length;D<_;D++){const E=w[D],C=p(E);if(E.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,D>0){M=b%x;const O=x-M;M!==0&&O-C.boundary<0&&(b+=x-M,E.__offset=b)}b+=C.storage}return M=b%x,M>0&&(b+=x-M),y.__size=b,y.__cache={},this}function p(y){const w=y.value,b={boundary:0,storage:0};return typeof w=="number"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function h(y){const w=y.target;w.removeEventListener("dispose",h);const b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function g(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:g}}function _g(){const i=mr("canvas");return i.style.display="block",i}function Dc(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:_g(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,a=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,o=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,d=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=qn,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,g=0,y=0,w=null,b=-1,x=null;const M=new vt,D=new vt;let _=null,E=e.width,C=e.height,O=1,W=null,P=null;const F=new vt(0,0,E,C),R=new vt(0,0,E,C);let U=!1;const J=new os;let j=!1,k=!1,H=null;const B=new Ke,ee=new Ae,$=new N,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return w===null?O:1}let z=t;function ve(T,V){for(let Z=0;Z<T.length;Z++){const G=T[Z],K=e.getContext(G,V);if(K!==null)return K}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ao}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",$e,!1),z===null){const V=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&V.shift(),z=ve(V,T),z===null)throw ve(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let we,Me,ge,Ge,q,se,Ue,ct,ut,Nt,ft,Ve,Wt,Ft,L,S,Y,te,ie,ce,Se,A,Q,re;function ue(){we=new Cp(z),Me=new wp(z,we,i),we.init(Me),A=new ug(z,we,Me),ge=new lg(z,we,Me),Ge=new Pp,q=new Ym,se=new cg(z,we,ge,q,Me,A,Ge),Ue=new Sp(p),ct=new Tp(p),ut=new Vf(z,Me),Q=new xp(z,we,ut,Me),Nt=new Lp(z,ut,Ge,Q),ft=new Np(z,Nt,ut,Ge),ie=new Op(z,Me,se),S=new Mp(q),Ve=new Xm(p,Ue,ct,we,Me,Q,S),Wt=new mg(p,q),Ft=new Km,L=new ng(we,Me),te=new yp(p,Ue,ge,ft,u,a),Y=new ag(p,ft,Me),re=new gg(z,Ge,Me,ge),ce=new bp(z,we,Ge,Me),Se=new Dp(z,we,Ge,Me),Ge.programs=Ve.programs,p.capabilities=Me,p.extensions=we,p.properties=q,p.renderLists=Ft,p.shadowMap=Y,p.state=ge,p.info=Ge}ue();const le=new pg(p,z);this.xr=le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=we.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=we.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(E,C,!1))},this.getSize=function(T){return T.set(E,C)},this.setSize=function(T,V,Z){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,C=V,e.width=Math.floor(T*O),e.height=Math.floor(V*O),Z!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(E*O,C*O).floor()},this.setDrawingBufferSize=function(T,V,Z){E=T,C=V,O=Z,e.width=Math.floor(T*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,V,Z,G){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,V,Z,G),ge.viewport(M.copy(F).multiplyScalar(O).floor())},this.getScissor=function(T){return T.copy(R)},this.setScissor=function(T,V,Z,G){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,V,Z,G),ge.scissor(D.copy(R).multiplyScalar(O).floor())},this.getScissorTest=function(){return U},this.setScissorTest=function(T){ge.setScissorTest(U=T)},this.setOpaqueSort=function(T){W=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,V=!0,Z=!0){let G=0;T&&(G|=16384),V&&(G|=256),Z&&(G|=1024),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),Ft.dispose(),L.dispose(),q.dispose(),Ue.dispose(),ct.dispose(),ft.dispose(),Q.dispose(),re.dispose(),Ve.dispose(),le.dispose(),le.removeEventListener("sessionstart",ke),le.removeEventListener("sessionend",gt),H&&(H.dispose(),H=null),st.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=Ge.autoReset,V=Y.enabled,Z=Y.autoUpdate,G=Y.needsUpdate,K=Y.type;ue(),Ge.autoReset=T,Y.enabled=V,Y.autoUpdate=Z,Y.needsUpdate=G,Y.type=K}function $e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function I(T){const V=T.target;V.removeEventListener("dispose",I),ae(V)}function ae(T){X(T),q.remove(T)}function X(T){const V=q.get(T).programs;V!==void 0&&(V.forEach(function(Z){Ve.releaseProgram(Z)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Z,G,K,xe){V===null&&(V=de);const Te=K.isMesh&&K.matrixWorld.determinant()<0,Ie=mu(T,V,Z,G,K);ge.setMaterial(G,Te);let Ce=Z.index;const We=Z.attributes.position;if(Ce===null){if(We===void 0||We.count===0)return}else if(Ce.count===0)return;let Fe=1;G.wireframe===!0&&(Ce=Nt.getWireframeAttribute(Z),Fe=2),Q.setup(K,G,Ie,Z,Ce);let ze,rt=ce;Ce!==null&&(ze=ut.get(Ce),rt=Se,rt.setIndex(ze));const Kn=Ce!==null?Ce.count:We.count,pi=Z.drawRange.start*Fe,mi=Z.drawRange.count*Fe,pn=xe!==null?xe.start*Fe:0,Be=xe!==null?xe.count*Fe:1/0,gi=Math.max(pi,pn),at=Math.min(Kn,pi+mi,pn+Be)-1,jt=Math.max(0,at-gi+1);if(jt!==0){if(K.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*ye()),rt.setMode(1)):rt.setMode(4);else if(K.isLine){let Nn=G.linewidth;Nn===void 0&&(Nn=1),ge.setLineWidth(Nn*ye()),K.isLineSegments?rt.setMode(1):K.isLineLoop?rt.setMode(2):rt.setMode(3)}else K.isPoints?rt.setMode(0):K.isSprite&&rt.setMode(4);if(K.isInstancedMesh)rt.renderInstances(gi,jt,K.count);else if(Z.isInstancedBufferGeometry){const Nn=Math.min(Z.instanceCount,Z._maxInstanceCount);rt.renderInstances(gi,jt,Nn)}else rt.render(gi,jt)}},this.compile=function(T,V){function Z(G,K,xe){G.transparent===!0&&G.side===Wn?(G.side=$t,G.needsUpdate=!0,wr(G,K,xe),G.side=Bi,G.needsUpdate=!0,wr(G,K,xe),G.side=Wn):wr(G,K,xe)}d=L.get(T),d.init(),v.push(d),T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(p.physicallyCorrectLights),T.traverse(function(G){const K=G.material;if(K)if(Array.isArray(K))for(let xe=0;xe<K.length;xe++){const Te=K[xe];Z(Te,T,G)}else Z(K,T,G)}),v.pop(),d=null};let me=null;function he(T){me&&me(T)}function ke(){st.stop()}function gt(){st.start()}const st=new Ec;st.setAnimationLoop(he),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(T){me=T,le.setAnimationLoop(T),T===null?st.stop():st.start()},le.addEventListener("sessionstart",ke),le.addEventListener("sessionend",gt),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(V),V=le.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,V,w),d=L.get(T,v.length),d.init(),v.push(d),B.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),J.setFromProjectionMatrix(B),k=this.localClippingEnabled,j=S.init(this.clippingPlanes,k,V),f=Ft.get(T,m.length),f.init(),m.push(f),On(T,V,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(W,P),j===!0&&S.beginShadows();const Z=d.state.shadowsArray;if(Y.render(Z,T,V),j===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,T),d.setupLights(p.physicallyCorrectLights),V.isArrayCamera){const G=V.cameras;for(let K=0,xe=G.length;K<xe;K++){const Te=G[K];it(f,T,Te,Te.viewport)}}else it(f,T,V);w!==null&&(se.updateMultisampleRenderTarget(w),se.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(p,T,V),Q.resetDefaultState(),b=-1,x=null,v.pop(),v.length>0?d=v[v.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function On(T,V,Z,G){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){G&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const Te=ft.update(T),Ie=T.material;Ie.visible&&f.push(T,Te,Ie,Z,$.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ge.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ge.render.frame),!T.frustumCulled||J.intersectsObject(T))){G&&$.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);const Te=ft.update(T),Ie=T.material;if(Array.isArray(Ie)){const Ce=Te.groups;for(let We=0,Fe=Ce.length;We<Fe;We++){const ze=Ce[We],rt=Ie[ze.materialIndex];rt&&rt.visible&&f.push(T,Te,rt,Z,$.z,ze)}}else Ie.visible&&f.push(T,Te,Ie,Z,$.z,null)}}const xe=T.children;for(let Te=0,Ie=xe.length;Te<Ie;Te++)On(xe[Te],V,Z,G)}function it(T,V,Z,G){const K=T.opaque,xe=T.transmissive,Te=T.transparent;d.setupLightsView(Z),xe.length>0&&bn(K,V,Z),G&&ge.viewport(M.copy(G)),K.length>0&&Ht(K,V,Z),xe.length>0&&Ht(xe,V,Z),Te.length>0&&Ht(Te,V,Z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function bn(T,V,Z){const G=Me.isWebGL2;H===null&&(H=new Xn(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?pr:ui,minFilter:rs,samples:G&&s===!0?4:0})),p.getDrawingBufferSize(ee),G?H.setSize(ee.x,ee.y):H.setSize(_o(ee.x),_o(ee.y));const K=p.getRenderTarget();p.setRenderTarget(H),p.clear();const xe=p.toneMapping;p.toneMapping=vn,Ht(T,V,Z),p.toneMapping=xe,se.updateMultisampleRenderTarget(H),se.updateRenderTargetMipmap(H),p.setRenderTarget(K)}function Ht(T,V,Z){const G=V.isScene===!0?V.overrideMaterial:null;for(let K=0,xe=T.length;K<xe;K++){const Te=T[K],Ie=Te.object,Ce=Te.geometry,We=G===null?Te.material:G,Fe=Te.group;Ie.layers.test(Z.layers)&&pu(Ie,V,Z,Ce,We,Fe)}}function pu(T,V,Z,G,K,xe){T.onBeforeRender(p,V,Z,G,K,xe),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(p,V,Z,G,T,xe),K.transparent===!0&&K.side===Wn?(K.side=$t,K.needsUpdate=!0,p.renderBufferDirect(Z,V,G,K,T,xe),K.side=Bi,K.needsUpdate=!0,p.renderBufferDirect(Z,V,G,K,T,xe),K.side=Wn):p.renderBufferDirect(Z,V,G,K,T,xe),T.onAfterRender(p,V,Z,G,K,xe)}function wr(T,V,Z){V.isScene!==!0&&(V=de);const G=q.get(T),K=d.state.lights,xe=d.state.shadowsArray,Te=K.state.version,Ie=Ve.getParameters(T,K.state,xe,V,Z),Ce=Ve.getProgramCacheKey(Ie);let We=G.programs;G.environment=T.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(T.isMeshStandardMaterial?ct:Ue).get(T.envMap||G.environment),We===void 0&&(T.addEventListener("dispose",I),We=new Map,G.programs=We);let Fe=We.get(Ce);if(Fe!==void 0){if(G.currentProgram===Fe&&G.lightsStateVersion===Te)return jo(T,Ie),Fe}else Ie.uniforms=Ve.getUniforms(T),T.onBuild(Z,Ie,p),T.onBeforeCompile(Ie,p),Fe=Ve.acquireProgram(Ie,Ce),We.set(Ce,Fe),G.uniforms=Ie.uniforms;const ze=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=S.uniform),jo(T,Ie),G.needsLights=_u(T),G.lightsStateVersion=Te,G.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const rt=Fe.getUniforms(),Kn=$r.seqWithValue(rt.seq,ze);return G.currentProgram=Fe,G.uniformsList=Kn,Fe}function jo(T,V){const Z=q.get(T);Z.outputEncoding=V.outputEncoding,Z.instancing=V.instancing,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function mu(T,V,Z,G,K){V.isScene!==!0&&(V=de),se.resetTextureUnits();const xe=V.fog,Te=G.isMeshStandardMaterial?V.environment:null,Ie=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:qn,Ce=(G.isMeshStandardMaterial?ct:Ue).get(G.envMap||Te),We=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Fe=!!G.normalMap&&!!Z.attributes.tangent,ze=!!Z.morphAttributes.position,rt=!!Z.morphAttributes.normal,Kn=!!Z.morphAttributes.color,pi=G.toneMapped?p.toneMapping:vn,mi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pn=mi!==void 0?mi.length:0,Be=q.get(G),gi=d.state.lights;if(j===!0&&(k===!0||T!==x)){const zt=T===x&&G.id===b;S.setState(G,T,zt)}let at=!1;G.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==gi.state.version||Be.outputEncoding!==Ie||K.isInstancedMesh&&Be.instancing===!1||!K.isInstancedMesh&&Be.instancing===!0||K.isSkinnedMesh&&Be.skinning===!1||!K.isSkinnedMesh&&Be.skinning===!0||Be.envMap!==Ce||G.fog===!0&&Be.fog!==xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==S.numPlanes||Be.numIntersection!==S.numIntersection)||Be.vertexAlphas!==We||Be.vertexTangents!==Fe||Be.morphTargets!==ze||Be.morphNormals!==rt||Be.morphColors!==Kn||Be.toneMapping!==pi||Me.isWebGL2===!0&&Be.morphTargetsCount!==pn)&&(at=!0):(at=!0,Be.__version=G.version);let jt=Be.currentProgram;at===!0&&(jt=wr(G,V,K));let Nn=!1,er=!1,vs=!1;const Mt=jt.getUniforms(),Jn=Be.uniforms;if(ge.useProgram(jt.program)&&(Nn=!0,er=!0,vs=!0),G.id!==b&&(b=G.id,er=!0),Nn||x!==T){if(Mt.setValue(z,"projectionMatrix",T.projectionMatrix),Me.logarithmicDepthBuffer&&Mt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,er=!0,vs=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const zt=Mt.map.cameraPosition;zt!==void 0&&zt.setValue(z,$.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Mt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||K.isSkinnedMesh)&&Mt.setValue(z,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){Mt.setOptional(z,K,"bindMatrix"),Mt.setOptional(z,K,"bindMatrixInverse");const zt=K.skeleton;zt&&(Me.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Mt.setValue(z,"boneTexture",zt.boneTexture,se),Mt.setValue(z,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ys=Z.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&Me.isWebGL2===!0)&&ie.update(K,Z,G,jt),(er||Be.receiveShadow!==K.receiveShadow)&&(Be.receiveShadow=K.receiveShadow,Mt.setValue(z,"receiveShadow",K.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Jn.envMap.value=Ce,Jn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),er&&(Mt.setValue(z,"toneMappingExposure",p.toneMappingExposure),Be.needsLights&&gu(Jn,vs),xe&&G.fog===!0&&Wt.refreshFogUniforms(Jn,xe),Wt.refreshMaterialUniforms(Jn,G,O,C,H),$r.upload(z,Be.uniformsList,Jn,se)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($r.upload(z,Be.uniformsList,Jn,se),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Mt.setValue(z,"center",K.center),Mt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Mt.setValue(z,"normalMatrix",K.normalMatrix),Mt.setValue(z,"modelMatrix",K.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zt=G.uniformsGroups;for(let xs=0,vu=zt.length;xs<vu;xs++)if(Me.isWebGL2){const qo=zt[xs];re.update(qo,jt),re.bind(qo,jt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return jt}function gu(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function _u(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,V,Z){q.get(T.texture).__webglTexture=V,q.get(T.depthTexture).__webglTexture=Z;const G=q.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=Z===void 0,G.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const Z=q.get(T);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,Z=0){w=T,g=V,y=Z;let G=!0;if(T){const Ce=q.get(T);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),G=!1):Ce.__webglFramebuffer===void 0?se.setupRenderTarget(T):Ce.__hasExternalTextures&&se.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture)}let K=null,xe=!1,Te=!1;if(T){const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Te=!0);const We=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=We[V],xe=!0):Me.isWebGL2&&T.samples>0&&se.useMultisampledRTT(T)===!1?K=q.get(T).__webglMultisampledFramebuffer:K=We,M.copy(T.viewport),D.copy(T.scissor),_=T.scissorTest}else M.copy(F).multiplyScalar(O).floor(),D.copy(R).multiplyScalar(O).floor(),_=U;if(ge.bindFramebuffer(36160,K)&&Me.drawBuffers&&G&&ge.drawBuffers(T,K),ge.viewport(M),ge.scissor(D),ge.setScissorTest(_),xe){const Ce=q.get(T.texture);z.framebufferTexture2D(36160,36064,34069+V,Ce.__webglTexture,Z)}else if(Te){const Ce=q.get(T.texture),We=V||0;z.framebufferTextureLayer(36160,36064,Ce.__webglTexture,Z||0,We)}b=-1},this.readRenderTargetPixels=function(T,V,Z,G,K,xe,Te){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(Ie=Ie[Te]),Ie){ge.bindFramebuffer(36160,Ie);try{const Ce=T.texture,We=Ce.format,Fe=Ce.type;if(We!==_n&&A.convert(We)!==z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===pr&&(we.has("EXT_color_buffer_half_float")||Me.isWebGL2&&we.has("EXT_color_buffer_float"));if(Fe!==ui&&A.convert(Fe)!==z.getParameter(35738)&&!(Fe===oi&&(Me.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-G&&Z>=0&&Z<=T.height-K&&z.readPixels(V,Z,G,K,A.convert(We),A.convert(Fe),xe)}finally{const Ce=w!==null?q.get(w).__webglFramebuffer:null;ge.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(T,V,Z=0){const G=Math.pow(2,-Z),K=Math.floor(V.image.width*G),xe=Math.floor(V.image.height*G);se.setTexture2D(V,0),z.copyTexSubImage2D(3553,Z,0,0,T.x,T.y,K,xe),ge.unbindTexture()},this.copyTextureToTexture=function(T,V,Z,G=0){const K=V.image.width,xe=V.image.height,Te=A.convert(Z.format),Ie=A.convert(Z.type);se.setTexture2D(Z,0),z.pixelStorei(37440,Z.flipY),z.pixelStorei(37441,Z.premultiplyAlpha),z.pixelStorei(3317,Z.unpackAlignment),V.isDataTexture?z.texSubImage2D(3553,G,T.x,T.y,K,xe,Te,Ie,V.image.data):V.isCompressedTexture?z.compressedTexSubImage2D(3553,G,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Te,V.mipmaps[0].data):z.texSubImage2D(3553,G,T.x,T.y,Te,Ie,V.image),G===0&&Z.generateMipmaps&&z.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Z,G,K=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Te=T.max.y-T.min.y+1,Ie=T.max.z-T.min.z+1,Ce=A.convert(G.format),We=A.convert(G.type);let Fe;if(G.isData3DTexture)se.setTexture3D(G,0),Fe=32879;else if(G.isDataArrayTexture)se.setTexture2DArray(G,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(37440,G.flipY),z.pixelStorei(37441,G.premultiplyAlpha),z.pixelStorei(3317,G.unpackAlignment);const ze=z.getParameter(3314),rt=z.getParameter(32878),Kn=z.getParameter(3316),pi=z.getParameter(3315),mi=z.getParameter(32877),pn=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;z.pixelStorei(3314,pn.width),z.pixelStorei(32878,pn.height),z.pixelStorei(3316,T.min.x),z.pixelStorei(3315,T.min.y),z.pixelStorei(32877,T.min.z),Z.isDataTexture||Z.isData3DTexture?z.texSubImage3D(Fe,K,V.x,V.y,V.z,xe,Te,Ie,Ce,We,pn.data):Z.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Fe,K,V.x,V.y,V.z,xe,Te,Ie,Ce,pn.data)):z.texSubImage3D(Fe,K,V.x,V.y,V.z,xe,Te,Ie,Ce,We,pn),z.pixelStorei(3314,ze),z.pixelStorei(32878,rt),z.pixelStorei(3316,Kn),z.pixelStorei(3315,pi),z.pixelStorei(32877,mi),K===0&&G.generateMipmaps&&z.generateMipmap(Fe),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?se.setTextureCube(T,0):T.isData3DTexture?se.setTexture3D(T,0):T.isDataArrayTexture?se.setTexture2DArray(T,0):se.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){g=0,y=0,w=null,ge.reset(),Q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class vg extends Dc{}vg.prototype.isWebGL1Renderer=!0;class yg extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class ol extends fn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const al=new Ke,ll=new Ke,qr=[],rr=new Jt;class cl extends Jt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,al),ll.multiplyMatrices(n,al),rr.matrixWorld=ll,rr.raycast(e,qr);for(let a=0,o=qr.length;a<o;a++){const l=qr[a];l.instanceId=s,l.object=this,t.push(l)}qr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Pc extends Zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ul=new N,fl=new N,dl=new Ke,eo=new Co,Xr=new ss;class xg extends He{constructor(e=new Vt,t=new Pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ul.fromBufferAttribute(t,r-1),fl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ul.distanceTo(fl);e.setAttribute("lineDistance",new mt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere),Xr.applyMatrix4(r),Xr.radius+=s,e.ray.intersectsSphere(Xr)===!1)return;dl.copy(r).invert(),eo.copy(e.ray).applyMatrix4(dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new N,u=new N,f=new N,d=new N,m=this.isLineSegments?2:1,v=n.index,h=n.attributes.position;if(v!==null){const g=Math.max(0,a.start),y=Math.min(v.count,a.start+a.count);for(let w=g,b=y-1;w<b;w+=m){const x=v.getX(w),M=v.getX(w+1);if(c.fromBufferAttribute(h,x),u.fromBufferAttribute(h,M),eo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const _=e.ray.origin.distanceTo(d);_<e.near||_>e.far||t.push({distance:_,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,a.start),y=Math.min(h.count,a.start+a.count);for(let w=g,b=y-1;w<b;w+=m){if(c.fromBufferAttribute(h,w),u.fromBufferAttribute(h,w+1),eo.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class cs extends Vt{constructor(e=1,t=1,n=1,r=8,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let v=0;const p=[],h=n/2;let g=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(m,2));function y(){const b=new N,x=new N;let M=0;const D=(t-e)/n;for(let _=0;_<=s;_++){const E=[],C=_/s,O=C*(t-e)+e;for(let W=0;W<=r;W++){const P=W/r,F=P*l+o,R=Math.sin(F),U=Math.cos(F);x.x=O*R,x.y=-C*n+h,x.z=O*U,f.push(x.x,x.y,x.z),b.set(R,D,U).normalize(),d.push(b.x,b.y,b.z),m.push(P,1-C),E.push(v++)}p.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const C=p[E][_],O=p[E+1][_],W=p[E+1][_+1],P=p[E][_+1];u.push(C,O,P),u.push(O,W,P),M+=6}c.addGroup(g,M,0),g+=M}function w(b){const x=v,M=new Ae,D=new N;let _=0;const E=b===!0?e:t,C=b===!0?1:-1;for(let W=1;W<=r;W++)f.push(0,h*C,0),d.push(0,C,0),m.push(.5,.5),v++;const O=v;for(let W=0;W<=r;W++){const F=W/r*l+o,R=Math.cos(F),U=Math.sin(F);D.x=E*U,D.y=h*C,D.z=E*R,f.push(D.x,D.y,D.z),d.push(0,C,0),M.x=R*.5+.5,M.y=U*.5*C+.5,m.push(M.x,M.y),v++}for(let W=0;W<r;W++){const P=x+W,F=O+W;b===!0?u.push(F,F+1,P):u.push(F+1,F,P),_+=3}c.addGroup(g,_,b===!0?1:2),g+=_}}static fromJSON(e){return new cs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oo extends Vt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const w=new N,b=new N,x=new N;for(let M=0;M<t.length;M+=3)m(t[M+0],w),m(t[M+1],b),m(t[M+2],x),l(w,b,x,y)}function l(y,w,b,x){const M=x+1,D=[];for(let _=0;_<=M;_++){D[_]=[];const E=y.clone().lerp(b,_/M),C=w.clone().lerp(b,_/M),O=M-_;for(let W=0;W<=O;W++)W===0&&_===M?D[_][W]=E:D[_][W]=E.clone().lerp(C,W/O)}for(let _=0;_<M;_++)for(let E=0;E<2*(M-_)-1;E++){const C=Math.floor(E/2);E%2===0?(d(D[_][C+1]),d(D[_+1][C]),d(D[_][C])):(d(D[_][C+1]),d(D[_+1][C+1]),d(D[_+1][C]))}}function c(y){const w=new N;for(let b=0;b<s.length;b+=3)w.x=s[b+0],w.y=s[b+1],w.z=s[b+2],w.normalize().multiplyScalar(y),s[b+0]=w.x,s[b+1]=w.y,s[b+2]=w.z}function u(){const y=new N;for(let w=0;w<s.length;w+=3){y.x=s[w+0],y.y=s[w+1],y.z=s[w+2];const b=h(y)/2/Math.PI+.5,x=g(y)/Math.PI+.5;a.push(b,1-x)}v(),f()}function f(){for(let y=0;y<a.length;y+=6){const w=a[y+0],b=a[y+2],x=a[y+4],M=Math.max(w,b,x),D=Math.min(w,b,x);M>.9&&D<.1&&(w<.2&&(a[y+0]+=1),b<.2&&(a[y+2]+=1),x<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function m(y,w){const b=y*3;w.x=e[b+0],w.y=e[b+1],w.z=e[b+2]}function v(){const y=new N,w=new N,b=new N,x=new N,M=new Ae,D=new Ae,_=new Ae;for(let E=0,C=0;E<s.length;E+=9,C+=6){y.set(s[E+0],s[E+1],s[E+2]),w.set(s[E+3],s[E+4],s[E+5]),b.set(s[E+6],s[E+7],s[E+8]),M.set(a[C+0],a[C+1]),D.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),x.copy(y).add(w).add(b).divideScalar(3);const O=h(x);p(M,C+0,y,O),p(D,C+2,w,O),p(_,C+4,b,O)}}function p(y,w,b,x){x<0&&y.x===1&&(a[w]=y.x-1),b.x===0&&b.z===0&&(a[w]=x/2/Math.PI+.5)}function h(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new Oo(e.vertices,e.indices,e.radius,e.details)}}class No extends Oo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new No(e.radius,e.detail)}}class hl extends Zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=To,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const pl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class bg{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],v=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return v}return null}}}const wg=new bg;class Rc{constructor(e){this.manager=e!==void 0?e:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Mg extends Rc{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=pl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=mr("img");function l(){u(),pl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ml extends Rc{constructor(e){super(e)}load(e,t,n,r){const s=new tn,a=new Mg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ic extends He{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const gl=new Ke,_l=new N,vl=new N;class Sg{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new os,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),vl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vl),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Eg extends Sg{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ag extends Ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DefaultUp),this.updateMatrix(),this.target=new He,this.shadow=new Eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tg extends Ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Oc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=yl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=yl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yl(){return(typeof performance>"u"?Date:performance).now()}class Cg{constructor(e,t,n=0,r=1/0){this.ray=new Co(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Lo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yo(e,this,n,t),n.sort(xl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yo(e[r],this,n,t);return n.sort(xl),n}}function xl(i,e){return i.distance-e.distance}function yo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)yo(r[s],e,t,!0)}}class xo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bl=new N;let Yr,to;class Lg extends He{constructor(e=new N(0,0,1),t=new N(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Yr===void 0&&(Yr=new Vt,Yr.setAttribute("position",new mt([0,0,0,0,1,0],3)),to=new cs(0,.5,1,5,1),to.translate(0,-.5,0)),this.position.copy(t),this.line=new xg(Yr,new Pc({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Jt(to,new Do({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bl.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bl,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ao);const wl={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class us{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const Dg=new as(-1,1,1,-1,0,1),Fo=new Vt;Fo.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3));Fo.setAttribute("uv",new mt([0,2,0,0,2,0],2));class Pg{constructor(e){this._mesh=new Jt(Fo,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ml extends us{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mc.clone(e.uniforms),this.material=new Rn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Pg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class Sl extends us{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Rg extends us{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ig{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new Ae);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new Xn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],wl===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),Ml===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new Ml(wl),this.clock=new Oc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Sl!==void 0&&(a instanceof Sl?n=!0:a instanceof Rg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new as(-1,1,1,-1,0,1);const Nc=new Vt;Nc.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3));Nc.setAttribute("uv",new mt([0,2,0,0,2,0],2));class Fc extends us{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Og=(i,e,t)=>{i.renderer=new Dc({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new Ig(i.renderer),i.composer.addPass(new Fc(i.scene,Hn(i.camera)))},El=(i,e,t)=>{!i.renderer||(e?i.renderer.outputEncoding=qn:i.renderer.outputEncoding=tt,t?i.renderer.toneMapping=vn:i.renderer.toneMapping=dc)},Al=(i,e,t)=>{!i.renderer||!i.composer||(i.renderer.setSize(e.width,e.height),i.renderer.setPixelRatio(t),i.composer.setSize(e.width,e.height),i.composer.setPixelRatio(t))},Tl=(i,e,t)=>{!i.renderer||(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},Qt=i=>i.userData,Ng=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},zc=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),Fg=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,zg=(i,e,t)=>{let n=Hn(i.camera);const r=i.camera.subscribe(c=>n=c);pt(r);let s=Hn(i.pointer);const a=i.pointer.subscribe(c=>s=c);pt(a);let o;const l=c=>{var d,m;c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,Ng(i,c);const f=Ug(e,s,n);if(u==="pointerdown"&&(o=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!kg(f,o)){o=null;return}o=null}!f||(m=(d=Qt(f.object)).eventDispatcher)==null||m.call(d,u,{...f,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function Ug(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=zc(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function kg(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const Gg=(i,e)=>{let t=Hn(i.pointerOverCanvas);const n=i.pointerOverCanvas.subscribe(c=>t=c);pt(n);let r=Hn(i.camera);const s=i.camera.subscribe(c=>r=c);pt(s);let a=Hn(i.pointer);const o=i.pointer.subscribe(c=>a=c);return pt(o),{raycast:()=>{var f,d,m,v,p,h,g,y;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?zc(e,a,r,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&Fg(e.lastIntersection,u)&&((h=(p=Qt(e.lastIntersection.object)).eventDispatcher)==null||h.call(p,"pointerleave",e.lastIntersection),(y=(g=Qt(u.object)).eventDispatcher)==null||y.call(g,"pointerenter",u)):(v=(m=Qt(u.object)).eventDispatcher)==null||v.call(m,"pointerenter",u):e.lastIntersection&&((d=(f=Qt(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},fs=typeof window<"u",Bg=i=>{if(!fs)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),pt(()=>{!e||cancelAnimationFrame(e)})},Vg=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>{var a,o;return((a=r.order)!=null?a:0)>((o=s.order)!=null?o:0)?1:-1}).forEach(r=>r.fn(i,n)):e.frameHandlers.forEach(r=>r.fn(i,n))},Wg=i=>{!i.debugFrameloop||(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},Hg=(i,e,t,n)=>{let r=Hn(i.camera);const s=i.camera.subscribe(o=>r=o);pt(s);const{raycast:a}=Gg(i,e);Bg(()=>{n.dispose();const o=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(o||t.pointerInvalidated)&&(a(),t.pointerInvalidated=!1),o&&(!r||!i.composer||!i.renderer||(Vg(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,r),Wg(t),t.frameInvalidated=!1,t.advance=!1))})},jg=()=>{const i=new Bt(75,0,.1,1e3);return Qt(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},qg=i=>{const e=i.size.subscribe(t=>{Qt(Hn(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),r})});pt(e)},Xg=(i,e,t,n,r,s,a)=>{const o={audioListeners:new Map,addAudioListener:(g,y)=>{if(y=y!=null?y:"default",o.audioListeners.has(y)){console.warn(`An AudioListener with the id "${y}" has already been added, aborting.`);return}o.audioListeners.set(y,g)},removeAudioListener:g=>{if(g=g!=null?g:"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}o.audioListeners.delete(g)},getAudioListener:g=>{if(g=g!=null?g:"default",!o.audioListeners.has(g)){console.warn(`No AudioListener with the id "${g}" found, aborting.`);return}return o.audioListeners.get(g)}},l={debugFrameloop:s,frameloop:a,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Eo([n,r],([g,y])=>g||y),pointer:wt(new Ae),pointerOverCanvas:wt(!1),clock:new Oc,camera:wt(jg()),scene:new yg,renderer:void 0,composer:void 0,invalidate:g=>{l.frameInvalidated=!0,l.debugFrameloop&&g&&(l.invalidations[g]=l.invalidations[g]?l.invalidations[g]+1:1)},advance:()=>{l.advance=!0}},u={flat:wt(e),linear:wt(i),dpr:wt(t),setCamera:g=>{c.camera.set(g),c.composer&&(c.composer.passes.forEach(y=>{y instanceof Fc&&(y.camera=g)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new Cg,lastIntersection:null,addRaycastableObject:g=>{u.raycastableObjects.add(g)},removeRaycastableObject:g=>{u.raycastableObjects.delete(g)},addInteractiveObject:g=>{u.interactiveObjects.add(g)},removeInteractiveObject:g=>{u.interactiveObjects.delete(g)},addPass:g=>{!c.composer||(c.composer.addPass(g),c.invalidate("Canvas: adding pass"))},removePass:g=>{!c.composer||(c.composer.removePass(g),c.invalidate("Canvas: removing pass"))}},f={dispose:async(g=!1)=>{await hr(),!(!f.shouldDispose&&!g)&&(f.disposableObjects.forEach((y,w)=>{var b;(y===0||g)&&((b=w==null?void 0:w.dispose)==null||b.call(w),f.disposableObjects.delete(w))}),f.shouldDispose=!1)},collectDisposableObjects:(g,y)=>{const w=y!=null?y:[];return g&&((g==null?void 0:g.dispose)&&typeof g.dispose=="function"&&g.type!=="Scene"&&w.push(g),Object.entries(g).forEach(([b,x])=>{if(b==="parent"||b==="children"||typeof x!="object")return;const M=x;M!=null&&M.dispose&&f.collectDisposableObjects(M,w)})),w},addDisposableObjects:g=>{g.forEach(y=>{const w=f.disposableObjects.get(y);w?f.disposableObjects.set(y,w+1):f.disposableObjects.set(y,1)})},removeDisposableObjects:g=>{g.length!==0&&(g.forEach(y=>{const w=f.disposableObjects.get(y);w&&w>0&&f.disposableObjects.set(y,w-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return cn("threlte",c),cn("threlte-root",u),cn("threlte-render-context",l),cn("threlte-audio-context",o),cn("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:o,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>o,getDisposalCtx:()=>f}};function ds(i,e){const t=wt(i);let n=i;const r=t.subscribe(o=>n=o);return pt(r),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const hn=()=>yn("threlte");function Yg(i){let e;const t=i[8].default,n=Pt(t,i,i[7],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&128)&&It(n,t,r,r[7],e?Rt(t,r[7],s,null):Ot(r[7]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}const Zg=()=>({onChildMount:yn("threlte-hierarchical-object-on-mount"),onChildDestroy:yn("threlte-hierarchical-object-on-destroy")}),Uc=()=>yn("threlte-hierarchical-parent-context");function Kg(i,e,t){var g;let n,{$$slots:r={},$$scope:s}=e,{object:a=void 0}=e,{children:o=[]}=e,{onChildMount:l=void 0}=e;const c=y=>{o.push(y),t(1,o),l==null||l(y)};let{onChildDestroy:u=void 0}=e;const f=y=>{const w=o.findIndex(b=>b.uuid===y.uuid);w!==-1&&o.splice(w,1),t(1,o),u==null||u(y)},{invalidate:d}=hn(),m=Uc();nt(i,m,y=>t(6,n=y));let{parent:v=n}=e;const p=Zg();a&&((g=p.onChildMount)==null||g.call(p,a),d("HierarchicalObject: object added"));const h=ds(a,(y,w)=>{var b,x;w&&((b=p.onChildDestroy)==null||b.call(p,w),d("HierarchicalObject: object added")),y&&((x=p.onChildMount)==null||x.call(p,y),d("HierarchicalObject: object removed"))});return pt(()=>{var y;a&&((y=p.onChildDestroy)==null||y.call(p,a),d("HierarchicalObject: object removed"))}),cn("threlte-hierarchical-object-on-mount",c),cn("threlte-hierarchical-object-on-destroy",f),cn("threlte-hierarchical-parent-context",h),i.$$set=y=>{"object"in y&&t(3,a=y.object),"children"in y&&t(1,o=y.children),"onChildMount"in y&&t(4,l=y.onChildMount),"onChildDestroy"in y&&t(5,u=y.onChildDestroy),"parent"in y&&t(2,v=y.parent),"$$scope"in y&&t(7,s=y.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,v=n),i.$$.dirty&8&&h.set(a)},[m,o,v,a,l,u,n,s,r]}class Jg extends Qe{constructor(e){super(),Je(this,e,Kg,Yg,qe,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function Qg(i){let e;const t=i[1].default,n=Pt(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&It(n,t,r,r[4],e?Rt(t,r[4],s,null):Ot(r[4]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function $g(i){let e,t;return e=new Jg({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[Qg]},$$scope:{ctx:i}}}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function e_(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const a=l=>s.add(l),o=l=>s.remove(l);return i.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,r=l.$$scope)},[s,n,a,o,r]}class hs extends Qe{constructor(e){super(),Je(this,e,e_,$g,qe,{object:0})}}const t_=()=>{const i=wt({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(a=>e=a);pt(t);let n;const r=()=>{const a=e;if(!n||!n.parentElement)return;const{clientWidth:o,clientHeight:l}=n.parentElement;(o!==a.width||l!==a.height)&&i.set({width:o,height:l})},s=a=>{n=a,r(),window.addEventListener("resize",r)};return fs?(pt(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:i}):{parentSize:i,parentSizeAction:s}};function Cl(i){let e,t;return e=new hs({props:{object:i[0].scene,$$slots:{default:[n_]},$$scope:{ctx:i}}}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,r){const s={};r[1]&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function n_(i){let e;const t=i[29].default,n=Pt(t,i,i[33],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&4)&&It(n,t,r,r[33],e?Rt(t,r[33],s,null):Ot(r[33]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function i_(i){let e,t,n,r,s=i[2]&&Cl(i);return{c(){e=Dn("canvas"),s&&s.c(),St(e,"class","svelte-o3oskp")},m(a,o){Ze(a,e,o),s&&s.m(e,null),i[30](e),t=!0,n||(r=[bu(i[3].call(null,e)),Tn(e,"click",i[9]),Tn(e,"contextmenu",i[10]),Tn(e,"pointerup",i[13]),Tn(e,"pointerdown",i[11]),Tn(e,"pointermove",i[12]),Tn(e,"pointerenter",i[31]),Tn(e,"pointerleave",i[32])],n=!0)},p(a,o){a[2]?s?(s.p(a,o),o[0]&4&&pe(s,1)):(s=Cl(a),s.c(),pe(s,1),s.m(e,null)):s&&(Xi(),_e(s,1,1,()=>{s=null}),Yi())},i(a){t||(pe(s),t=!0)},o(a){_e(s),t=!1},d(a){a&&Xe(e),s&&s.d(),i[30](null),n=!1,di(r)}}}const Ll=new Set;function r_(i,e,t){let n,r,s,a,{$$slots:o={},$$scope:l}=e,{dpr:c=fs?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:v=!0}=e,{shadowMapType:p=cc}=e,{size:h=void 0}=e,{rendererParameters:g=void 0}=e,y,w=!1;const b=wt(h),{parentSize:x,parentSizeAction:M}=t_(),D=Xg(f,u,c,b,x,m,d),{getCtx:_,renderCtx:E,disposalCtx:C}=D,{ctx:O,rootCtx:W,audioCtx:P}=D;qg(O),Ll.add(O.invalidate),pt(()=>{Ll.delete(O.invalidate)});const{size:F,scene:R}=O;nt(i,F,ve=>t(26,r=ve));const{flat:U,linear:J,dpr:j}=W;nt(i,U,ve=>t(27,s=ve)),nt(i,J,ve=>t(28,a=ve)),nt(i,j,ve=>t(25,n=ve)),cn("threlte-parent",wt(R)),So(()=>{!y||(Og(O,y,g),El(O,a,s),Al(O,r,n),Tl(O,v,p),t(2,w=!0))}),Hg(O,W,E,C);const{onClick:k,onContextMenu:H,onPointerDown:B,onPointerMove:ee,onPointerUp:$}=zg(O,W,E);pt(()=>{C.dispose(!0)});function de(ve){dn[ve?"unshift":"push"](()=>{y=ve,t(1,y)})}const ye=()=>_().pointerOverCanvas.set(!0),z=()=>_().pointerOverCanvas.set(!1);return i.$$set=ve=>{"dpr"in ve&&t(14,c=ve.dpr),"flat"in ve&&t(15,u=ve.flat),"linear"in ve&&t(16,f=ve.linear),"frameloop"in ve&&t(17,d=ve.frameloop),"debugFrameloop"in ve&&t(18,m=ve.debugFrameloop),"shadows"in ve&&t(19,v=ve.shadows),"shadowMapType"in ve&&t(20,p=ve.shadowMapType),"size"in ve&&t(21,h=ve.size),"rendererParameters"in ve&&t(22,g=ve.rendererParameters),"$$scope"in ve&&t(33,l=ve.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&b.set(h),i.$$.dirty[0]&65536&&ln(J,a=f,a),i.$$.dirty[0]&32768&&ln(U,s=u,s),i.$$.dirty[0]&16384&&ln(j,n=c,n),i.$$.dirty[0]&402653184&&El(_(),a,s),i.$$.dirty[0]&100663296&&Al(_(),r,n),i.$$.dirty[0]&1572864&&Tl(_(),v,p)},[O,y,w,M,_,F,U,J,j,k,H,B,ee,$,c,u,f,d,m,v,p,h,g,W,P,n,r,s,a,o,de,ye,z,l]}class s_ extends Qe{constructor(e){super(),Je(this,e,r_,i_,qe,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const zo=()=>yn("threlte-root"),o_=()=>yn("threlte-disposal-context");function a_(i){let e;const t=i[9].default,n=Pt(t,i,i[8],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&256)&&It(n,t,r,r[8],e?Rt(t,r[8],s,null):Ot(r[8]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}const Dl="threlte-disposable-object-context";function l_(i,e,t){var h;let n,r,{$$slots:s={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=o_();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const m=yn(Dl);nt(i,m,g=>t(7,r=g));const v=wt((h=d!=null?d:r)!=null?h:!0);nt(i,v,g=>t(6,n=g)),cn(Dl,v);let p=n?o(u):[];return l(p),pt(()=>{c(p)}),i.$$set=g=>{"object"in g&&t(2,u=g.object),"dispose"in g&&t(3,d=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},i.$$.update=()=>{var g;i.$$.dirty&136&&v.set((g=d!=null?d:r)!=null?g:!0),i.$$.dirty&116&&u!==f&&(c(p),t(5,p=n?o(u):[]),l(p),t(4,f=u))},[m,v,u,d,f,p,n,r,a,s]}class gr extends Qe{constructor(e){super(),Je(this,e,l_,a_,qe,{object:2,dispose:3})}}function c_(i,e,t){let n,r,{object:s}=e;const a=ds(s);nt(i,a,c=>t(4,r=c));const o=yn("threlte-layers");nt(i,o,c=>t(3,n=c));const{invalidate:l}=hn();return i.$$set=c=>{"object"in c&&t(2,s=c.object)},i.$$.update=()=>{if(i.$$.dirty&4&&a.set(s),i.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?r.layers.enable(c):r.layers.disable(c)}else n!==void 0&&r.layers.set(n);l("LayerableObject")}},[a,o,s,n,r]}class u_ extends Qe{constructor(e){super(),Je(this,e,c_,null,qe,{object:2})}}const Ji=(i,e)=>{var o;if(!fs)return{start:()=>{},stop:()=>{},started:ac(!1)};const t=yn("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=wt(!1),s=()=>{t.frameHandlers.delete(n),r.set(!1)},a=()=>{t.frameHandlers.add(n),r.set(!0)};return((o=e==null?void 0:e.autostart)==null||o)&&a(),pt(()=>{s()}),{start:a,stop:s,started:{subscribe:r.subscribe}}},kc=()=>{const i=wt(!1);return(async()=>{await hr(),i.set(!0)})(),i};function f_(i,e,t){let n,r,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new N,f=qi(),{invalidate:d}=hn(),m=kc();nt(i,m,w=>t(8,r=w));const v=async()=>{r||await hr(),f("transform")},p=async()=>{d("TransformableObject: transformed"),await v()};Qt(s).onTransform=p;const{start:h,stop:g}=Ji(async()=>{c&&!l&&c instanceof He&&(c.getWorldPosition(u),s.lookAt(u),await v())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),y=ds(s);return nt(i,y,w=>t(7,n=w)),i.$$set=w=>{"object"in w&&t(2,s=w.object),"position"in w&&t(3,a=w.position),"scale"in w&&t(4,o=w.scale),"rotation"in w&&t(5,l=w.rotation),"lookAt"in w&&t(6,c=w.lookAt)},i.$$.update=()=>{var w,b,x,M,D,_,E,C,O,W,P,F,R;i.$$.dirty&4&&y.set(s),i.$$.dirty&232&&(a&&(n.position.set((w=a.x)!=null?w:0,(b=a.y)!=null?b:0,(x=a.z)!=null?x:0),p()),c&&!l&&(c instanceof He?h():(g(),n.lookAt((M=c.x)!=null?M:0,(D=c.y)!=null?D:0,(_=c.z)!=null?_:0),p())),c||g()),i.$$.dirty&144&&o&&(typeof o=="number"?n.scale.set(o,o,o):n.scale.set((E=o.x)!=null?E:1,(C=o.y)!=null?C:1,(O=o.z)!=null?O:1),p()),i.$$.dirty&160&&l&&(n.rotation.set((W=l.x)!=null?W:0,(P=l.y)!=null?P:0,(F=l.z)!=null?F:0,(R=l.order)!=null?R:"XYZ"),p())},[m,y,s,a,o,l,c,n]}class ps extends Qe{constructor(e){super(),Je(this,e,f_,null,qe,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function d_(i,e,t){let n,r,s,{object:a}=e,{viewportAware:o=!1}=e;const l=qi(),{camera:c,invalidate:u}=hn();nt(i,c,M=>t(8,s=M));const f=new os,d=new Ke,m=M=>M.type==="Mesh",v=new N,p=()=>s?(d.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(d),m(a)?f.intersectsObject(a):(a.getWorldPosition(v),f.containsPoint(v))):!0,h=kc();nt(i,h,M=>t(7,r=M));let{inViewport:g=p()}=e;const y=async M=>{M?(r||await hr(),l("viewportenter",a)):(r||await hr(),l("viewportleave",a))},{start:w,stop:b,started:x}=Ji(()=>{const M=p();g===void 0?(t(3,g=p()),y(g)):M!==g&&(y(M),t(3,g=M))},{autostart:o,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return nt(i,x,M=>t(6,n=M)),u("ViewportAwareObject"),i.$$set=M=>{"object"in M&&t(4,a=M.object),"viewportAware"in M&&t(5,o=M.viewportAware),"inViewport"in M&&t(3,g=M.inViewport)},i.$$.update=()=>{i.$$.dirty&96&&(o&&!n?w():!o&&n&&b())},[c,h,x,g,a,o,n]}class h_ extends Qe{constructor(e){super(),Je(this,e,d_,null,qe,{object:4,viewportAware:5,inViewport:3})}}function p_(i){let e;const t=i[14].default,n=Pt(t,i,i[18],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&262144)&&It(n,t,r,r[18],e?Rt(t,r[18],s,null):Ot(r[18]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function m_(i){let e,t;return e=new hs({props:{object:i[1],$$slots:{default:[p_]},$$scope:{ctx:i}}}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.object=n[1]),r&262144&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function g_(i){let e,t,n,r,s,a,o,l,c;e=new u_({props:{object:i[1]}}),n=new ps({props:{object:i[1],position:i[2],rotation:i[4],scale:i[3],lookAt:i[5]}}),s=new gr({props:{object:i[1],dispose:i[7],$$slots:{default:[m_]},$$scope:{ctx:i}}});function u(d){i[15](d)}let f={object:i[1],viewportAware:i[6]};return i[0]!==void 0&&(f.inViewport=i[0]),o=new h_({props:f}),dn.push(()=>Zn(o,"inViewport",u)),o.$on("viewportenter",i[16]),o.$on("viewportleave",i[17]),{c(){Re(e.$$.fragment),t=ot(),Re(n.$$.fragment),r=ot(),Re(s.$$.fragment),a=ot(),Re(o.$$.fragment)},m(d,m){Le(e,d,m),Ze(d,t,m),Le(n,d,m),Ze(d,r,m),Le(s,d,m),Ze(d,a,m),Le(o,d,m),c=!0},p(d,[m]){const v={};m&2&&(v.object=d[1]),e.$set(v);const p={};m&2&&(p.object=d[1]),m&4&&(p.position=d[2]),m&16&&(p.rotation=d[4]),m&8&&(p.scale=d[3]),m&32&&(p.lookAt=d[5]),n.$set(p);const h={};m&2&&(h.object=d[1]),m&128&&(h.dispose=d[7]),m&262146&&(h.$$scope={dirty:m,ctx:d}),s.$set(h);const g={};m&2&&(g.object=d[1]),m&64&&(g.viewportAware=d[6]),!l&&m&1&&(l=!0,g.inViewport=d[0],Yn(()=>l=!1)),o.$set(g)},i(d){c||(pe(e.$$.fragment,d),pe(n.$$.fragment,d),pe(s.$$.fragment,d),pe(o.$$.fragment,d),c=!0)},o(d){_e(e.$$.fragment,d),_e(n.$$.fragment,d),_e(s.$$.fragment,d),_e(o.$$.fragment,d),c=!1},d(d){De(e,d),d&&Xe(t),De(n,d),d&&Xe(r),De(s,d),d&&Xe(a),De(o,d)}}}function __(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{dispose:g=void 0}=e,{userData:y=void 0}=e;const{invalidate:w}=hn(),b=()=>s;function x(_){f=_,t(0,f)}function M(_){et.call(this,i,_)}function D(_){et.call(this,i,_)}return i.$$set=_=>{"object"in _&&t(1,s=_.object),"position"in _&&t(2,a=_.position),"scale"in _&&t(3,o=_.scale),"rotation"in _&&t(4,l=_.rotation),"lookAt"in _&&t(5,c=_.lookAt),"viewportAware"in _&&t(6,u=_.viewportAware),"inViewport"in _&&t(0,f=_.inViewport),"castShadow"in _&&t(8,d=_.castShadow),"receiveShadow"in _&&t(9,m=_.receiveShadow),"frustumCulled"in _&&t(10,v=_.frustumCulled),"renderOrder"in _&&t(11,p=_.renderOrder),"visible"in _&&t(12,h=_.visible),"dispose"in _&&t(7,g=_.dispose),"userData"in _&&t(13,y=_.userData),"$$scope"in _&&t(18,r=_.$$scope)},i.$$.update=()=>{i.$$.dirty&16128&&(h!==void 0&&(b().visible=h),d!==void 0&&(b().castShadow=d),m!==void 0&&(b().receiveShadow=m),v!==void 0&&(b().frustumCulled=v),p!==void 0&&(b().renderOrder=p),y!==void 0&&(b().userData={...b().userData,...y}),w("Object3DInstance: props changed"))},[f,s,a,o,l,c,u,g,d,m,v,p,h,y,n,x,M,D,r]}class ms extends Qe{constructor(e){super(),Je(this,e,__,g_,qe,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function v_(i){let e;const t=i[17].default,n=Pt(t,i,i[21],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2097152)&&It(n,t,r,r[21],e?Rt(t,r[21],s,null):Ot(r[21]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function y_(i){let e,t,n;function r(a){i[18](a)}let s={object:i[1],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[v_]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new ms({props:s}),dn.push(()=>Zn(e,"inViewport",r)),e.$on("viewportenter",i[19]),e.$on("viewportleave",i[20]),{c(){Re(e.$$.fragment)},m(a,o){Le(e,a,o),n=!0},p(a,[o]){const l={};o&2&&(l.object=a[1]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&2097152&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],Yn(()=>t=!1)),e.$set(l)},i(a){n||(pe(e.$$.fragment,a),n=!0)},o(a){_e(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function x_(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{camera:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:y=void 0}=e,{dispose:w=void 0}=e,{useCamera:b=!1}=e;const x=ds(a);nt(i,x,C=>t(16,n=C));const{setCamera:M}=zo();function D(C){d=C,t(0,d)}function _(C){et.call(this,i,C)}function E(C){et.call(this,i,C)}return i.$$set=C=>{"camera"in C&&t(1,a=C.camera),"position"in C&&t(2,o=C.position),"scale"in C&&t(3,l=C.scale),"rotation"in C&&t(4,c=C.rotation),"lookAt"in C&&t(5,u=C.lookAt),"viewportAware"in C&&t(6,f=C.viewportAware),"inViewport"in C&&t(0,d=C.inViewport),"castShadow"in C&&t(7,m=C.castShadow),"receiveShadow"in C&&t(8,v=C.receiveShadow),"frustumCulled"in C&&t(9,p=C.frustumCulled),"renderOrder"in C&&t(10,h=C.renderOrder),"visible"in C&&t(11,g=C.visible),"userData"in C&&t(12,y=C.userData),"dispose"in C&&t(13,w=C.dispose),"useCamera"in C&&t(15,b=C.useCamera),"$$scope"in C&&t(21,s=C.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&x.set(a),i.$$.dirty&98304&&b&&M(n)},[d,a,o,l,c,u,f,m,v,p,h,g,y,w,x,b,n,r,D,_,E,s]}class b_ extends Qe{constructor(e){super(),Je(this,e,x_,y_,qe,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function w_(i){let e;const t=i[20].default,n=Pt(t,i,i[24],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16777216)&&It(n,t,r,r[24],e?Rt(t,r[24],s,null):Ot(r[24]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function M_(i){let e,t,n;function r(a){i[21](a)}let s={camera:i[0],position:i[2],scale:i[3],rotation:i[4],castShadow:i[6],receiveShadow:i[7],frustumCulled:i[8],renderOrder:i[9],visible:i[10],userData:i[11],dispose:i[12],viewportAware:i[13],lookAt:i[5],useCamera:i[14],$$slots:{default:[w_]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new b_({props:s}),dn.push(()=>Zn(e,"inViewport",r)),e.$on("viewportenter",i[22]),e.$on("viewportleave",i[23]),{c(){Re(e.$$.fragment)},m(a,o){Le(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.camera=a[0]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.castShadow=a[6]),o&128&&(l.receiveShadow=a[7]),o&256&&(l.frustumCulled=a[8]),o&512&&(l.renderOrder=a[9]),o&1024&&(l.visible=a[10]),o&2048&&(l.userData=a[11]),o&4096&&(l.dispose=a[12]),o&8192&&(l.viewportAware=a[13]),o&32&&(l.lookAt=a[5]),o&16384&&(l.useCamera=a[14]),o&16777216&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],Yn(()=>t=!1)),e.$set(l)},i(a){n||(pe(e.$$.fragment,a),n=!0)},o(a){_e(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function S_(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:v=void 0}=e,{userData:p=void 0}=e,{dispose:h=void 0}=e,{viewportAware:g=!1}=e,{inViewport:y=!1}=e,{useCamera:w=!0}=e,{near:b=void 0}=e,{far:x=void 0}=e,{fov:M=void 0}=e;const{size:D,invalidate:_}=hn();nt(i,D,P=>t(19,n=P));const E=new Bt(M,n.width/n.height,b,x);function C(P){y=P,t(1,y)}function O(P){et.call(this,i,P)}function W(P){et.call(this,i,P)}return i.$$set=P=>{"position"in P&&t(2,a=P.position),"scale"in P&&t(3,o=P.scale),"rotation"in P&&t(4,l=P.rotation),"lookAt"in P&&t(5,c=P.lookAt),"castShadow"in P&&t(6,u=P.castShadow),"receiveShadow"in P&&t(7,f=P.receiveShadow),"frustumCulled"in P&&t(8,d=P.frustumCulled),"renderOrder"in P&&t(9,m=P.renderOrder),"visible"in P&&t(10,v=P.visible),"userData"in P&&t(11,p=P.userData),"dispose"in P&&t(12,h=P.dispose),"viewportAware"in P&&t(13,g=P.viewportAware),"inViewport"in P&&t(1,y=P.inViewport),"useCamera"in P&&t(14,w=P.useCamera),"near"in P&&t(16,b=P.near),"far"in P&&t(17,x=P.far),"fov"in P&&t(18,M=P.fov),"$$scope"in P&&t(24,s=P.$$scope)},i.$$.update=()=>{i.$$.dirty&524289&&(t(0,E.aspect=n.width/n.height,E),E.updateProjectionMatrix(),_("PerspectiveCamera: aspect changed")),i.$$.dirty&458753&&(b!==void 0&&t(0,E.near=b,E),x!==void 0&&t(0,E.far=x,E),M!==void 0&&t(0,E.fov=M,E),E.updateProjectionMatrix(),_("PerspectiveCamera: props changed"))},[E,y,a,o,l,c,u,f,d,m,v,p,h,g,w,D,b,x,M,n,r,C,O,W,s]}class E_ extends Qe{constructor(e){super(),Je(this,e,S_,M_,qe,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const Pl=[],A_=(i,e)=>{const t=Pl.find(r=>r instanceof i);if(t)return t;const n=e();return Pl.push(n),n},Rl={type:"change"},no={type:"start"},Il={type:"end"};class T_ extends hi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:yi.ROTATE,TWO:yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Ft),this._domElementKeyEvents=A},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rl),n.update(),s=r.NONE},this.update=function(){const A=new N,Q=new fi().setFromUnitVectors(e.up,new N(0,1,0)),re=Q.clone().invert(),ue=new N,le=new fi,Ee=2*Math.PI;return function(){const $e=n.object.position;A.copy($e).sub(n.target),A.applyQuaternion(Q),o.setFromVector3(A),n.autoRotate&&s===r.NONE&&E(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let I=n.minAzimuthAngle,ae=n.maxAzimuthAngle;return isFinite(I)&&isFinite(ae)&&(I<-Math.PI?I+=Ee:I>Math.PI&&(I-=Ee),ae<-Math.PI?ae+=Ee:ae>Math.PI&&(ae-=Ee),I<=ae?o.theta=Math.max(I,Math.min(ae,o.theta)):o.theta=o.theta>(I+ae)/2?Math.max(I,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),A.setFromSpherical(o),A.applyQuaternion(re),$e.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ue.distanceToSquared(n.object.position)>a||8*(1-le.dot(n.object.quaternion))>a?(n.dispatchEvent(Rl),ue.copy(n.object.position),le.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Y),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",Nt),n.domElement.removeEventListener("wheel",Wt),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",ut),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Ft)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new xo,l=new xo;let c=1;const u=new N;let f=!1;const d=new Ae,m=new Ae,v=new Ae,p=new Ae,h=new Ae,g=new Ae,y=new Ae,w=new Ae,b=new Ae,x=[],M={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function _(){return Math.pow(.95,n.zoomSpeed)}function E(A){l.theta-=A}function C(A){l.phi-=A}const O=function(){const A=new N;return function(re,ue){A.setFromMatrixColumn(ue,0),A.multiplyScalar(-re),u.add(A)}}(),W=function(){const A=new N;return function(re,ue){n.screenSpacePanning===!0?A.setFromMatrixColumn(ue,1):(A.setFromMatrixColumn(ue,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(re),u.add(A)}}(),P=function(){const A=new N;return function(re,ue){const le=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;A.copy(Ee).sub(n.target);let Ne=A.length();Ne*=Math.tan(n.object.fov/2*Math.PI/180),O(2*re*Ne/le.clientHeight,n.object.matrix),W(2*ue*Ne/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(O(re*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),W(ue*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(A){n.object.isPerspectiveCamera?c/=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(A){n.object.isPerspectiveCamera?c*=A:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/A)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(A){d.set(A.clientX,A.clientY)}function J(A){y.set(A.clientX,A.clientY)}function j(A){p.set(A.clientX,A.clientY)}function k(A){m.set(A.clientX,A.clientY),v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;E(2*Math.PI*v.x/Q.clientHeight),C(2*Math.PI*v.y/Q.clientHeight),d.copy(m),n.update()}function H(A){w.set(A.clientX,A.clientY),b.subVectors(w,y),b.y>0?F(_()):b.y<0&&R(_()),y.copy(w),n.update()}function B(A){h.set(A.clientX,A.clientY),g.subVectors(h,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(h),n.update()}function ee(A){A.deltaY<0?R(_()):A.deltaY>0&&F(_()),n.update()}function $(A){let Q=!1;switch(A.code){case n.keys.UP:P(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:P(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:P(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:P(-n.keyPanSpeed,0),Q=!0;break}Q&&(A.preventDefault(),n.update())}function de(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),Q=.5*(x[0].pageY+x[1].pageY);d.set(A,Q)}}function ye(){if(x.length===1)p.set(x[0].pageX,x[0].pageY);else{const A=.5*(x[0].pageX+x[1].pageX),Q=.5*(x[0].pageY+x[1].pageY);p.set(A,Q)}}function z(){const A=x[0].pageX-x[1].pageX,Q=x[0].pageY-x[1].pageY,re=Math.sqrt(A*A+Q*Q);y.set(0,re)}function ve(){n.enableZoom&&z(),n.enablePan&&ye()}function we(){n.enableZoom&&z(),n.enableRotate&&de()}function Me(A){if(x.length==1)m.set(A.pageX,A.pageY);else{const re=Se(A),ue=.5*(A.pageX+re.x),le=.5*(A.pageY+re.y);m.set(ue,le)}v.subVectors(m,d).multiplyScalar(n.rotateSpeed);const Q=n.domElement;E(2*Math.PI*v.x/Q.clientHeight),C(2*Math.PI*v.y/Q.clientHeight),d.copy(m)}function ge(A){if(x.length===1)h.set(A.pageX,A.pageY);else{const Q=Se(A),re=.5*(A.pageX+Q.x),ue=.5*(A.pageY+Q.y);h.set(re,ue)}g.subVectors(h,p).multiplyScalar(n.panSpeed),P(g.x,g.y),p.copy(h)}function Ge(A){const Q=Se(A),re=A.pageX-Q.x,ue=A.pageY-Q.y,le=Math.sqrt(re*re+ue*ue);w.set(0,le),b.set(0,Math.pow(w.y/y.y,n.zoomSpeed)),F(b.y),y.copy(w)}function q(A){n.enableZoom&&Ge(A),n.enablePan&&ge(A)}function se(A){n.enableZoom&&Ge(A),n.enableRotate&&Me(A)}function Ue(A){n.enabled!==!1&&(x.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",ct),n.domElement.addEventListener("pointerup",ut)),te(A),A.pointerType==="touch"?L(A):ft(A))}function ct(A){n.enabled!==!1&&(A.pointerType==="touch"?S(A):Ve(A))}function ut(A){ie(A),x.length===0&&(n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",ct),n.domElement.removeEventListener("pointerup",ut)),n.dispatchEvent(Il),s=r.NONE}function Nt(A){ie(A)}function ft(A){let Q;switch(A.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case vi.DOLLY:if(n.enableZoom===!1)return;J(A),s=r.DOLLY;break;case vi.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enablePan===!1)return;j(A),s=r.PAN}else{if(n.enableRotate===!1)return;U(A),s=r.ROTATE}break;case vi.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(n.enableRotate===!1)return;U(A),s=r.ROTATE}else{if(n.enablePan===!1)return;j(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(no)}function Ve(A){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;k(A);break;case r.DOLLY:if(n.enableZoom===!1)return;H(A);break;case r.PAN:if(n.enablePan===!1)return;B(A);break}}function Wt(A){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(A.preventDefault(),n.dispatchEvent(no),ee(A),n.dispatchEvent(Il))}function Ft(A){n.enabled===!1||n.enablePan===!1||$(A)}function L(A){switch(ce(A),x.length){case 1:switch(n.touches.ONE){case yi.ROTATE:if(n.enableRotate===!1)return;de(),s=r.TOUCH_ROTATE;break;case yi.PAN:if(n.enablePan===!1)return;ye(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ve(),s=r.TOUCH_DOLLY_PAN;break;case yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;we(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(no)}function S(A){switch(ce(A),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(A),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ge(A),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(A),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;se(A),n.update();break;default:s=r.NONE}}function Y(A){n.enabled!==!1&&A.preventDefault()}function te(A){x.push(A)}function ie(A){delete M[A.pointerId];for(let Q=0;Q<x.length;Q++)if(x[Q].pointerId==A.pointerId){x.splice(Q,1);return}}function ce(A){let Q=M[A.pointerId];Q===void 0&&(Q=new Ae,M[A.pointerId]=Q),Q.set(A.pageX,A.pageY)}function Se(A){const Q=A.pointerId===x[0].pointerId?x[1]:x[0];return M[Q.pointerId]}n.domElement.addEventListener("contextmenu",Y),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",Nt),n.domElement.addEventListener("wheel",Wt,{passive:!1}),this.update()}}function C_(i){let e,t,n,r;return e=new gr({props:{dispose:i[2],object:i[0]}}),n=new ps({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){Re(e.$$.fragment),t=ot(),Re(n.$$.fragment)},m(s,a){Le(e,s,a),Ze(s,t,a),Le(n,s,a),r=!0},p(s,a){const o={};a[0]&4&&(o.dispose=s[2]),a[0]&1&&(o.object=s[0]),e.$set(o);const l={};a[0]&2&&(l.position=s[1]),n.$set(l)},i(s){r||(pe(e.$$.fragment,s),pe(n.$$.fragment,s),r=!0)},o(s){_e(e.$$.fragment,s),_e(n.$$.fragment,s),r=!1},d(s){De(e,s),s&&Xe(t),De(n,s)}}}function L_(i,e,t){let n,{autoRotate:r=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:a=void 0}=e,{enableDamping:o=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:v=void 0}=e,{maxDistance:p=void 0}=e,{maxPolarAngle:h=void 0}=e,{maxZoom:g=void 0}=e,{minAzimuthAngle:y=void 0}=e,{minDistance:w=void 0}=e,{minPolarAngle:b=void 0}=e,{minZoom:x=void 0}=e,{mouseButtons:M=void 0}=e,{panSpeed:D=void 0}=e,{rotateSpeed:_=void 0}=e,{screenSpacePanning:E=void 0}=e,{touches:C=void 0}=e,{zoomSpeed:O=void 0}=e,{target:W=void 0}=e,{dispose:P=void 0}=e;const F=Uc();nt(i,F,z=>t(30,n=z));const{renderer:R,invalidate:U}=hn();if(!R)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof Po))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const J=qi(),j=()=>{U("Orbitcontrols: change event"),J("change")},k=()=>J("start"),H=()=>J("end"),B=new T_(n,R.domElement);Qt(n).orbitControls=B,B.addEventListener("change",j),B.addEventListener("start",k),B.addEventListener("end",H),pt(()=>{n&&delete Qt(n).orbitControls,B.removeEventListener("change",j),B.removeEventListener("start",k),B.removeEventListener("end",H)});const{start:ee,stop:$}=Ji(()=>B.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),de=new He,ye=()=>{t(0,B.target=de.position,B),B.update(),U("OrbitControls: target changed")};return i.$$set=z=>{"autoRotate"in z&&t(6,r=z.autoRotate),"autoRotateSpeed"in z&&t(7,s=z.autoRotateSpeed),"dampingFactor"in z&&t(8,a=z.dampingFactor),"enableDamping"in z&&t(9,o=z.enableDamping),"enabled"in z&&t(10,l=z.enabled),"enablePan"in z&&t(11,c=z.enablePan),"enableRotate"in z&&t(12,u=z.enableRotate),"enableZoom"in z&&t(13,f=z.enableZoom),"keyPanSpeed"in z&&t(14,d=z.keyPanSpeed),"keys"in z&&t(15,m=z.keys),"maxAzimuthAngle"in z&&t(16,v=z.maxAzimuthAngle),"maxDistance"in z&&t(17,p=z.maxDistance),"maxPolarAngle"in z&&t(18,h=z.maxPolarAngle),"maxZoom"in z&&t(19,g=z.maxZoom),"minAzimuthAngle"in z&&t(20,y=z.minAzimuthAngle),"minDistance"in z&&t(21,w=z.minDistance),"minPolarAngle"in z&&t(22,b=z.minPolarAngle),"minZoom"in z&&t(23,x=z.minZoom),"mouseButtons"in z&&t(24,M=z.mouseButtons),"panSpeed"in z&&t(25,D=z.panSpeed),"rotateSpeed"in z&&t(26,_=z.rotateSpeed),"screenSpacePanning"in z&&t(27,E=z.screenSpacePanning),"touches"in z&&t(28,C=z.touches),"zoomSpeed"in z&&t(29,O=z.zoomSpeed),"target"in z&&t(1,W=z.target),"dispose"in z&&t(2,P=z.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(r!==void 0&&t(0,B.autoRotate=r,B),s!==void 0&&t(0,B.autoRotateSpeed=s,B),a!==void 0&&t(0,B.dampingFactor=a,B),o!==void 0&&t(0,B.enableDamping=o,B),l!==void 0&&t(0,B.enabled=l,B),c!==void 0&&t(0,B.enablePan=c,B),u!==void 0&&t(0,B.enableRotate=u,B),f!==void 0&&t(0,B.enableZoom=f,B),d!==void 0&&t(0,B.keyPanSpeed=d,B),m!==void 0&&t(0,B.keys=m,B),v!==void 0&&t(0,B.maxAzimuthAngle=v,B),p!==void 0&&t(0,B.maxDistance=p,B),h!==void 0&&t(0,B.maxPolarAngle=h,B),g!==void 0&&t(0,B.maxZoom=g,B),y!==void 0&&t(0,B.minAzimuthAngle=y,B),w!==void 0&&t(0,B.minDistance=w,B),b!==void 0&&t(0,B.minPolarAngle=b,B),x!==void 0&&t(0,B.minZoom=x,B),M!==void 0&&t(0,B.mouseButtons=M,B),D!==void 0&&t(0,B.panSpeed=D,B),_!==void 0&&t(0,B.rotateSpeed=_,B),E!==void 0&&t(0,B.screenSpacePanning=E,B),C!==void 0&&t(0,B.touches=C,B),O!==void 0&&t(0,B.zoomSpeed=O,B),B.update(),U("OrbitControls: props changed")),i.$$.dirty[0]&576&&(r||o?ee():$())},[B,W,P,F,de,ye,r,s,a,o,l,c,u,f,d,m,v,p,h,g,y,w,b,x,M,D,_,E,C,O]}class D_ extends Qe{constructor(e){super(),Je(this,e,L_,C_,qe,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const P_=(i,e)=>e?new Pe(i):new Pe().setHex(new Pe(i).getHex()).convertSRGBToLinear();function R_(i){let e;const t=i[18].default,n=Pt(t,i,i[22],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4194304)&&It(n,t,r,r[22],e?Rt(t,r[22],s,null):Ot(r[22]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function I_(i){let e,t,n;function r(a){i[19](a)}let s={object:i[0],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[R_]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new ms({props:s}),dn.push(()=>Zn(e,"inViewport",r)),e.$on("viewportenter",i[20]),e.$on("viewportleave",i[21]),{c(){Re(e.$$.fragment)},m(a,o){Le(e,a,o),n=!0},p(a,[o]){const l={};o&1&&(l.object=a[0]),o&32&&(l.lookAt=a[5]),o&128&&(l.castShadow=a[7]),o&256&&(l.receiveShadow=a[8]),o&512&&(l.frustumCulled=a[9]),o&1024&&(l.renderOrder=a[10]),o&4&&(l.position=a[2]),o&8&&(l.scale=a[3]),o&16&&(l.rotation=a[4]),o&64&&(l.viewportAware=a[6]),o&2048&&(l.visible=a[11]),o&4096&&(l.userData=a[12]),o&8192&&(l.dispose=a[13]),o&4194304&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.inViewport=a[1],Yn(()=>t=!1)),e.$set(l)},i(a){n||(pe(e.$$.fragment,a),n=!0)},o(a){_e(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function O_(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{light:a}=e,{position:o=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:v=void 0}=e,{frustumCulled:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:y=void 0}=e,{dispose:w=void 0}=e,{color:b=void 0}=e,{intensity:x=void 0}=e;const{invalidate:M}=hn(),{linear:D}=zo();nt(i,D,O=>t(17,n=O));function _(O){d=O,t(1,d)}function E(O){et.call(this,i,O)}function C(O){et.call(this,i,O)}return i.$$set=O=>{"light"in O&&t(0,a=O.light),"position"in O&&t(2,o=O.position),"scale"in O&&t(3,l=O.scale),"rotation"in O&&t(4,c=O.rotation),"lookAt"in O&&t(5,u=O.lookAt),"viewportAware"in O&&t(6,f=O.viewportAware),"inViewport"in O&&t(1,d=O.inViewport),"castShadow"in O&&t(7,m=O.castShadow),"receiveShadow"in O&&t(8,v=O.receiveShadow),"frustumCulled"in O&&t(9,p=O.frustumCulled),"renderOrder"in O&&t(10,h=O.renderOrder),"visible"in O&&t(11,g=O.visible),"userData"in O&&t(12,y=O.userData),"dispose"in O&&t(13,w=O.dispose),"color"in O&&t(15,b=O.color),"intensity"in O&&t(16,x=O.intensity),"$$scope"in O&&t(22,s=O.$$scope)},i.$$.update=()=>{i.$$.dirty&229376&&(x!==void 0&&t(0,a.intensity=x,a),b!==void 0&&t(0,a.color=P_(b,n),a),M("LightInstance: props changed"))},[a,d,o,l,c,u,f,m,v,p,h,g,y,w,D,b,x,n,r,_,E,C,s]}class Gc extends Qe{constructor(e){super(),Je(this,e,O_,I_,qe,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function N_(i){let e;const t=i[16].default,n=Pt(t,i,i[20],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&1048576)&&It(n,t,r,r[20],e?Rt(t,r[20],s,null):Ot(r[20]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function F_(i){let e,t,n;function r(a){i[17](a)}let s={light:i[15],lookAt:i[4],position:i[1],scale:i[2],rotation:i[3],castShadow:i[5],receiveShadow:i[6],frustumCulled:i[7],renderOrder:i[8],visible:i[9],userData:i[10],dispose:i[11],viewportAware:i[12],color:i[13],intensity:i[14],$$slots:{default:[N_]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new Gc({props:s}),dn.push(()=>Zn(e,"inViewport",r)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),{c(){Re(e.$$.fragment)},m(a,o){Le(e,a,o),n=!0},p(a,[o]){const l={};o&16&&(l.lookAt=a[4]),o&2&&(l.position=a[1]),o&4&&(l.scale=a[2]),o&8&&(l.rotation=a[3]),o&32&&(l.castShadow=a[5]),o&64&&(l.receiveShadow=a[6]),o&128&&(l.frustumCulled=a[7]),o&256&&(l.renderOrder=a[8]),o&512&&(l.visible=a[9]),o&1024&&(l.userData=a[10]),o&2048&&(l.dispose=a[11]),o&4096&&(l.viewportAware=a[12]),o&8192&&(l.color=a[13]),o&16384&&(l.intensity=a[14]),o&1048576&&(l.$$scope={dirty:o,ctx:a}),!t&&o&1&&(t=!0,l.inViewport=a[0],Yn(()=>t=!1)),e.$set(l)},i(a){n||(pe(e.$$.fragment,a),n=!0)},o(a){_e(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function z_(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:m=void 0}=e,{userData:v=void 0}=e,{dispose:p=void 0}=e,{viewportAware:h=!1}=e,{inViewport:g=!1}=e,{color:y=void 0}=e,{intensity:w=void 0}=e;const b=new Tg(y,w);function x(_){g=_,t(0,g)}function M(_){et.call(this,i,_)}function D(_){et.call(this,i,_)}return i.$$set=_=>{"position"in _&&t(1,s=_.position),"scale"in _&&t(2,a=_.scale),"rotation"in _&&t(3,o=_.rotation),"lookAt"in _&&t(4,l=_.lookAt),"castShadow"in _&&t(5,c=_.castShadow),"receiveShadow"in _&&t(6,u=_.receiveShadow),"frustumCulled"in _&&t(7,f=_.frustumCulled),"renderOrder"in _&&t(8,d=_.renderOrder),"visible"in _&&t(9,m=_.visible),"userData"in _&&t(10,v=_.userData),"dispose"in _&&t(11,p=_.dispose),"viewportAware"in _&&t(12,h=_.viewportAware),"inViewport"in _&&t(0,g=_.inViewport),"color"in _&&t(13,y=_.color),"intensity"in _&&t(14,w=_.intensity),"$$scope"in _&&t(20,r=_.$$scope)},[g,s,a,o,l,c,u,f,d,m,v,p,h,y,w,b,n,x,M,D,r]}class U_ extends Qe{constructor(e){super(),Je(this,e,z_,F_,qe,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,viewportAware:12,inViewport:0,color:13,intensity:14,light:15})}get light(){return this.$$.ctx[15]}}function Ol(i){let e,t,n,r,s,a;return e=new hs({props:{object:i[16]}}),n=new ps({props:{object:i[16],position:i[15]}}),s=new gr({props:{dispose:i[10],object:i[15]}}),{c(){Re(e.$$.fragment),t=ot(),Re(n.$$.fragment),r=ot(),Re(s.$$.fragment)},m(o,l){Le(e,o,l),Ze(o,t,l),Le(n,o,l),Ze(o,r,l),Le(s,o,l),a=!0},p(o,l){const c={};l&32768&&(c.position=o[15]),n.$set(c);const u={};l&1024&&(u.dispose=o[10]),l&32768&&(u.object=o[15]),s.$set(u)},i(o){a||(pe(e.$$.fragment,o),pe(n.$$.fragment,o),pe(s.$$.fragment,o),a=!0)},o(o){_e(e.$$.fragment,o),_e(n.$$.fragment,o),_e(s.$$.fragment,o),a=!1},d(o){De(e,o),o&&Xe(t),De(n,o),o&&Xe(r),De(s,o)}}}function k_(i){let e;const t=i[18].default,n=Pt(t,i,i[22],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4194304)&&It(n,t,r,r[22],e?Rt(t,r[22],s,null):Ot(r[22]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function G_(i){let e,t,n,r,s=i[15]&&!(i[15]instanceof He)&&Ol(i);function a(l){i[19](l)}let o={light:i[1],position:i[2],scale:i[3],rotation:i[4],castShadow:!!i[14],receiveShadow:i[5],frustumCulled:i[6],renderOrder:i[7],visible:i[8],userData:i[9],dispose:i[10],viewportAware:i[11],color:i[12],intensity:i[13],$$slots:{default:[k_]},$$scope:{ctx:i}};return i[0]!==void 0&&(o.inViewport=i[0]),t=new Gc({props:o}),dn.push(()=>Zn(t,"inViewport",a)),t.$on("viewportenter",i[20]),t.$on("viewportleave",i[21]),{c(){s&&s.c(),e=ot(),Re(t.$$.fragment)},m(l,c){s&&s.m(l,c),Ze(l,e,c),Le(t,l,c),r=!0},p(l,[c]){l[15]&&!(l[15]instanceof He)?s?(s.p(l,c),c&32768&&pe(s,1)):(s=Ol(l),s.c(),pe(s,1),s.m(e.parentNode,e)):s&&(Xi(),_e(s,1,1,()=>{s=null}),Yi());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&16384&&(u.castShadow=!!l[14]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.userData=l[9]),c&1024&&(u.dispose=l[10]),c&2048&&(u.viewportAware=l[11]),c&4096&&(u.color=l[12]),c&8192&&(u.intensity=l[13]),c&4194304&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],Yn(()=>n=!1)),t.$set(u)},i(l){r||(pe(s),pe(t.$$.fragment,l),r=!0)},o(l){_e(s),_e(t.$$.fragment,l),r=!1},d(l){s&&s.d(l),l&&Xe(e),De(t,l)}}}function B_(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{userData:m=void 0}=e,{dispose:v=void 0}=e,{viewportAware:p=!1}=e,{inViewport:h=!1}=e,{color:g=void 0}=e,{intensity:y=void 0}=e,{shadow:w=void 0}=e,{target:b=void 0}=e;const x=new Ag(g,y),{invalidate:M}=hn(),D=x.target,{start:_,stop:E,started:C}=Ji(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});nt(i,C,U=>t(23,n=U));const O=U=>{U&&U instanceof He&&!n?(t(1,x.target=U,x),_(),M("DirectionalLight: target changed")):(!U||!(U instanceof He))&&n&&(t(1,x.target=D,x),E(),M("DirectionalLight: target changed"))},W=U=>{if(U){const{mapSize:J=[512,512],camera:{left:j=-5,bottom:k=-5,right:H=5,top:B=5,near:ee=.5,far:$=500}={},bias:de=0,radius:ye=1}=U===!0?{}:U;x.shadow.mapSize.set(J[0],J[1]),t(1,x.shadow.camera.left=j,x),t(1,x.shadow.camera.top=B,x),t(1,x.shadow.camera.right=H,x),t(1,x.shadow.camera.bottom=k,x),t(1,x.shadow.camera.near=ee,x),t(1,x.shadow.camera.far=$,x),t(1,x.shadow.bias=de,x),t(1,x.shadow.radius=ye,x)}M("DirectionalLight: shadow changed")};function P(U){h=U,t(0,h)}function F(U){et.call(this,i,U)}function R(U){et.call(this,i,U)}return i.$$set=U=>{"position"in U&&t(2,a=U.position),"scale"in U&&t(3,o=U.scale),"rotation"in U&&t(4,l=U.rotation),"receiveShadow"in U&&t(5,c=U.receiveShadow),"frustumCulled"in U&&t(6,u=U.frustumCulled),"renderOrder"in U&&t(7,f=U.renderOrder),"visible"in U&&t(8,d=U.visible),"userData"in U&&t(9,m=U.userData),"dispose"in U&&t(10,v=U.dispose),"viewportAware"in U&&t(11,p=U.viewportAware),"inViewport"in U&&t(0,h=U.inViewport),"color"in U&&t(12,g=U.color),"intensity"in U&&t(13,y=U.intensity),"shadow"in U&&t(14,w=U.shadow),"target"in U&&t(15,b=U.target),"$$scope"in U&&t(22,s=U.$$scope)},i.$$.update=()=>{i.$$.dirty&32768&&O(b),i.$$.dirty&16384&&W(w)},[h,x,a,o,l,c,u,f,d,m,v,p,g,y,w,b,D,C,r,P,F,R,s]}class V_ extends Qe{constructor(e){super(),Je(this,e,B_,G_,qe,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function W_(i,e,t){let{object:n}=e,r=n,{interactive:s=!1}=e,{ignorePointer:a=!1}=e;const o=qi(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=zo(),{invalidate:d}=hn(),m=p=>{f(p),c(p),delete Qt(p).eventDispatcher},v=(p,h,g)=>{Qt(p).eventDispatcher=o,h?(f(p),c(p)):(u(p),g?l(p):c(p))};return pt(()=>{m(n),d("InteractiveObject: object removed")}),i.$$set=p=>{"object"in p&&t(0,n=p.object),"interactive"in p&&t(1,s=p.interactive),"ignorePointer"in p&&t(2,a=p.ignorePointer)},i.$$.update=()=>{i.$$.dirty&15&&(n!==r?(m(r),v(n,a,s),d("InteractiveObject: object changed"),t(3,r=n)):n===r&&(v(n,a,s),d("InteractiveObject: props changed")))},[n,s,a,r]}class H_ extends Qe{constructor(e){super(),Je(this,e,W_,null,qe,{object:0,interactive:1,ignorePointer:2})}}function j_(i){let e;const t=i[16].default,n=Pt(t,i,i[27],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&134217728)&&It(n,t,r,r[27],e?Rt(t,r[27],s,null):Ot(r[27]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function q_(i){let e,t,n,r,s;function a(l){i[17](l)}let o={object:i[1],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],visible:i[11],userData:i[12],dispose:i[13],viewportAware:i[6],$$slots:{default:[j_]},$$scope:{ctx:i}};return i[0]!==void 0&&(o.inViewport=i[0]),e=new ms({props:o}),dn.push(()=>Zn(e,"inViewport",a)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),r=new H_({props:{object:i[1],interactive:i[14],ignorePointer:i[15]}}),r.$on("click",i[20]),r.$on("contextmenu",i[21]),r.$on("pointerup",i[22]),r.$on("pointerdown",i[23]),r.$on("pointerenter",i[24]),r.$on("pointerleave",i[25]),r.$on("pointermove",i[26]),{c(){Re(e.$$.fragment),n=ot(),Re(r.$$.fragment)},m(l,c){Le(e,l,c),Ze(l,n,c),Le(r,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Yn(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),r.$set(f)},i(l){s||(pe(e.$$.fragment,l),pe(r.$$.fragment,l),s=!0)},o(l){_e(e.$$.fragment,l),_e(r.$$.fragment,l),s=!1},d(l){De(e,l),l&&Xe(n),De(r,l)}}}function X_(i,e,t){let{$$slots:n={},$$scope:r}=e,{mesh:s}=e,{position:a=void 0}=e,{scale:o=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:v=void 0}=e,{renderOrder:p=void 0}=e,{visible:h=void 0}=e,{userData:g=void 0}=e,{dispose:y=void 0}=e,{interactive:w=!1}=e,{ignorePointer:b=!1}=e;function x(R){f=R,t(0,f)}function M(R){et.call(this,i,R)}function D(R){et.call(this,i,R)}function _(R){et.call(this,i,R)}function E(R){et.call(this,i,R)}function C(R){et.call(this,i,R)}function O(R){et.call(this,i,R)}function W(R){et.call(this,i,R)}function P(R){et.call(this,i,R)}function F(R){et.call(this,i,R)}return i.$$set=R=>{"mesh"in R&&t(1,s=R.mesh),"position"in R&&t(2,a=R.position),"scale"in R&&t(3,o=R.scale),"rotation"in R&&t(4,l=R.rotation),"lookAt"in R&&t(5,c=R.lookAt),"viewportAware"in R&&t(6,u=R.viewportAware),"inViewport"in R&&t(0,f=R.inViewport),"castShadow"in R&&t(7,d=R.castShadow),"receiveShadow"in R&&t(8,m=R.receiveShadow),"frustumCulled"in R&&t(9,v=R.frustumCulled),"renderOrder"in R&&t(10,p=R.renderOrder),"visible"in R&&t(11,h=R.visible),"userData"in R&&t(12,g=R.userData),"dispose"in R&&t(13,y=R.dispose),"interactive"in R&&t(14,w=R.interactive),"ignorePointer"in R&&t(15,b=R.ignorePointer),"$$scope"in R&&t(27,r=R.$$scope)},[f,s,a,o,l,c,u,d,m,v,p,h,g,y,w,b,n,x,M,D,_,E,C,O,W,P,F,r]}class Y_ extends Qe{constructor(e){super(),Je(this,e,X_,q_,qe,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}const Z_=(i,e)=>{let t=i;return{onChange:(r,s)=>{(e&&!e(r,t)||!e&&r!==t)&&(s(r,t),t=r)}}};function Nl(i){let e,t,n;function r(a){i[24](a)}let s={mesh:i[17],castShadow:i[5],receiveShadow:i[6],frustumCulled:void 0,renderOrder:i[7],visible:i[8],userData:i[9],dispose:i[10],interactive:i[11],ignorePointer:i[12],viewportAware:i[4]};return i[0]!==void 0&&(s.inViewport=i[0]),e=new Y_({props:s}),dn.push(()=>Zn(e,"inViewport",r)),e.$on("click",i[20]),e.$on("contextmenu",i[20]),e.$on("pointerup",i[20]),e.$on("pointerdown",i[20]),e.$on("pointerenter",i[20]),e.$on("pointerleave",i[20]),e.$on("pointermove",i[20]),e.$on("viewportenter",i[25]),e.$on("viewportleave",i[26]),{c(){Re(e.$$.fragment)},m(a,o){Le(e,a,o),n=!0},p(a,o){const l={};o[0]&131072&&(l.mesh=a[17]),o[0]&32&&(l.castShadow=a[5]),o[0]&64&&(l.receiveShadow=a[6]),o[0]&128&&(l.renderOrder=a[7]),o[0]&256&&(l.visible=a[8]),o[0]&512&&(l.userData=a[9]),o[0]&1024&&(l.dispose=a[10]),o[0]&2048&&(l.interactive=a[11]),o[0]&4096&&(l.ignorePointer=a[12]),o[0]&16&&(l.viewportAware=a[4]),!t&&o[0]&1&&(t=!0,l.inViewport=a[0],Yn(()=>t=!1)),e.$set(l)},i(a){n||(pe(e.$$.fragment,a),n=!0)},o(a){_e(e.$$.fragment,a),n=!1},d(a){De(e,a)}}}function K_(i){let e=i[17].uuid,t,n,r=Nl(i);const s=i[23].default,a=Pt(s,i,i[27],null);return{c(){r.c(),t=ot(),a&&a.c()},m(o,l){r.m(o,l),Ze(o,t,l),a&&a.m(o,l),n=!0},p(o,l){l[0]&131072&&qe(e,e=o[17].uuid)?(Xi(),_e(r,1,1,Et),Yi(),r=Nl(o),r.c(),pe(r,1),r.m(t.parentNode,t)):r.p(o,l),a&&a.p&&(!n||l[0]&134217728)&&It(a,s,o,o[27],n?Rt(s,o[27],l,null):Ot(o[27]),null)},i(o){n||(pe(r),pe(a,o),n=!0)},o(o){_e(r),_e(a,o),n=!1},d(o){r.d(o),o&&Xe(t),a&&a.d(o)}}}function J_(i){let e,t,n,r,s,a;return e=new gr({props:{dispose:i[10],object:i[14]}}),n=new gr({props:{dispose:i[10],object:i[15]}}),s=new ms({props:{object:i[18],position:i[1],scale:i[2],rotation:i[3],lookAt:i[13],$$slots:{default:[K_]},$$scope:{ctx:i}}}),{c(){Re(e.$$.fragment),t=ot(),Re(n.$$.fragment),r=ot(),Re(s.$$.fragment)},m(o,l){Le(e,o,l),Ze(o,t,l),Le(n,o,l),Ze(o,r,l),Le(s,o,l),a=!0},p(o,l){const c={};l[0]&1024&&(c.dispose=o[10]),l[0]&16384&&(c.object=o[14]),e.$set(c);const u={};l[0]&1024&&(u.dispose=o[10]),l[0]&32768&&(u.object=o[15]),n.$set(u);const f={};l[0]&2&&(f.position=o[1]),l[0]&4&&(f.scale=o[2]),l[0]&8&&(f.rotation=o[3]),l[0]&8192&&(f.lookAt=o[13]),l[0]&134356977&&(f.$$scope={dirty:l,ctx:o}),s.$set(f)},i(o){a||(pe(e.$$.fragment,o),pe(n.$$.fragment,o),pe(s.$$.fragment,o),a=!0)},o(o){_e(e.$$.fragment,o),_e(n.$$.fragment,o),_e(s.$$.fragment,o),a=!1},d(o){De(e,o),o&&Xe(t),De(n,o),o&&Xe(r),De(s,o)}}}const Bc=new He;Bc.scale.set(0,0,0);const Fl={matrix:Bc.matrix,color:null},Q_=new Ke().fromArray(new Array(16).fill(0)),io=new Pe(16777215),Vc="threlte-instanced-mesh-context",$_=i=>yn(Vc+i);function e0(i,e,t){let n,r=Et,s=()=>(r(),r=ns(P,q=>t(17,n=q)),P),a;i.$$.on_destroy.push(()=>r());let{$$slots:o={},$$scope:l}=e,{position:c=void 0}=e,{scale:u=void 0}=e,{rotation:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:m=!1}=e,{castShadow:v=void 0}=e,{receiveShadow:p=void 0}=e,{renderOrder:h=void 0}=e,{visible:g=void 0}=e,{userData:y=void 0}=e,{dispose:w=void 0}=e,{interactive:b=!1}=e,{ignorePointer:x=!1}=e,{lookAt:M=void 0}=e,{geometry:D}=e,{material:_}=e,{count:E=void 0}=e,{id:C=""}=e;const{onChange:O}=Z_(_),W=q=>q===void 0,P=wt(new cl(D,_,W(E)?0:E));s();const F=new He,R=[],{invalidate:U}=hn(),J=(q,se)=>{const Ue=R.findIndex(ct=>ct===q);if(Ue===-1){console.warn("Instanced Mesh: Instance not found");return}se(Ue)},{start:j,stop:k,started:H}=Ji(()=>{n.dispose(),ln(P,n=new cl(D,_,R.length),n),R.forEach((q,se)=>{ye(q,se),q.color?n.setColorAt(se,q.color):n.setColorAt(se,io)}),ln(P,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&ln(P,n.instanceColor.needsUpdate=!0,n),k()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});nt(i,H,q=>t(29,a=q));const B=q=>{if(W(E))R.push(q),a||j();else{const se=R.findIndex(Ue=>Ue===Fl);se!==-1?R[se]=q:R.push(q),R.length>E&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}$(q),U("Instanced Mesh: Instance added")},ee=q=>{if(W(E)){const se=R.findIndex(Ue=>Ue===q);R.splice(se,1),a||j()}else{de(q);const se=R.findIndex(Ue=>Ue===q);se>=E?R.splice(se,1):R.splice(se,1,Fl)}U("Instanced Mesh: Instance removed")},$=q=>{q.color||J(q,se=>{n.setColorAt(se,io),n.instanceColor&&ln(P,n.instanceColor.needsUpdate=!0,n)})},de=q=>{J(q,se=>{n.setMatrixAt(se,Q_),ln(P,n.instanceMatrix.needsUpdate=!0,n),U("Instanced Mesh: instance matrix resetted")})},ye=(q,se)=>{n.setMatrixAt(se,q.matrix),ln(P,n.instanceMatrix.needsUpdate=!0,n),U("Instanced Mesh: instance matrix set")},z=q=>{J(q,se=>{ye(q,se)})},ve=q=>{J(q,se=>{var Ue;n.setColorAt(se,(Ue=q.color)!=null?Ue:io),n.instanceColor&&ln(P,n.instanceColor.needsUpdate=!0,n),U("Instanced Mesh: instance color set")})};cn(Vc+C,{registerInstance:B,removeInstance:ee,setInstanceMatrix:z,setInstanceColor:ve,parentObject:F});const we=q=>{if(q.detail.instanceId===void 0)return;const se=R[q.detail.instanceId];se&&se.pointerEventDispatcher&&se.pointerEventDispatcher(q.type,q.detail)};function Me(q){m=q,t(0,m)}function ge(q){et.call(this,i,q)}function Ge(q){et.call(this,i,q)}return i.$$set=q=>{"position"in q&&t(1,c=q.position),"scale"in q&&t(2,u=q.scale),"rotation"in q&&t(3,f=q.rotation),"viewportAware"in q&&t(4,d=q.viewportAware),"inViewport"in q&&t(0,m=q.inViewport),"castShadow"in q&&t(5,v=q.castShadow),"receiveShadow"in q&&t(6,p=q.receiveShadow),"renderOrder"in q&&t(7,h=q.renderOrder),"visible"in q&&t(8,g=q.visible),"userData"in q&&t(9,y=q.userData),"dispose"in q&&t(10,w=q.dispose),"interactive"in q&&t(11,b=q.interactive),"ignorePointer"in q&&t(12,x=q.ignorePointer),"lookAt"in q&&t(13,M=q.lookAt),"geometry"in q&&t(14,D=q.geometry),"material"in q&&t(15,_=q.material),"count"in q&&t(21,E=q.count),"id"in q&&t(22,C=q.id),"$$scope"in q&&t(27,l=q.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&32768&&O(_,q=>{ln(P,n.material=q,n)})},[m,c,u,f,d,v,p,h,g,y,w,b,x,M,D,_,P,n,F,H,we,E,C,o,Me,ge,Ge,l]}class zl extends Qe{constructor(e){super(),Je(this,e,e0,J_,qe,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function t0(i){let e;const t=i[8].default,n=Pt(t,i,i[9],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&512)&&It(n,t,r,r[9],e?Rt(t,r[9],s,null):Ot(r[9]),null)},i(r){e||(pe(n,r),e=!0)},o(r){_e(n,r),e=!1},d(r){n&&n.d(r)}}}function n0(i){let e,t,n,r;return e=new hs({props:{object:i[4],$$slots:{default:[t0]},$$scope:{ctx:i}}}),n=new ps({props:{object:i[4],position:i[0],scale:i[1],rotation:i[2],lookAt:i[3]}}),n.$on("transform",i[5]),{c(){Re(e.$$.fragment),t=ot(),Re(n.$$.fragment)},m(s,a){Le(e,s,a),Ze(s,t,a),Le(n,s,a),r=!0},p(s,[a]){const o={};a&512&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const l={};a&1&&(l.position=s[0]),a&2&&(l.scale=s[1]),a&4&&(l.rotation=s[2]),a&8&&(l.lookAt=s[3]),n.$set(l)},i(s){r||(pe(e.$$.fragment,s),pe(n.$$.fragment,s),r=!0)},o(s){_e(e.$$.fragment,s),_e(n.$$.fragment,s),r=!1},d(s){De(e,s),s&&Xe(t),De(n,s)}}}function i0(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:a=void 0}=e,{rotation:o=void 0}=e,{lookAt:l=void 0}=e,{color:c=void 0}=e,{id:u=""}=e;const{registerInstance:f,setInstanceMatrix:d,removeInstance:m,setInstanceColor:v,parentObject:p}=$_(u),h=new He,g=new Ke,y=qi(),w=()=>{var W;return p.uuid===((W=h.parent)==null?void 0:W.uuid)},b=W=>W!==void 0?W instanceof Pe?W:new Pe(W):null,x={color:b(c),matrix:h.matrix,pointerEventDispatcher:y},M=W=>{x.color=b(W),v(x)},D=()=>{let W=h.parent;const P=[];for(;W&&p&&W.uuid!==p.uuid&&(P.push(W),!!W.parent);)W=W.parent;h.updateMatrix(),g.copy(h.matrix),P.forEach(F=>{F.updateMatrix(),g.premultiply(F.matrix)}),x.matrix=g},_=()=>{h.updateMatrix(),x.matrix=h.matrix},E=()=>{_(),d(x)},{start:C}=Ji(()=>{D(),d(x)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});f(x),So(()=>{w()?E():C(),M(c)});const O=()=>{w()&&E()};return pt(()=>{m(x)}),i.$$set=W=>{"position"in W&&t(0,s=W.position),"scale"in W&&t(1,a=W.scale),"rotation"in W&&t(2,o=W.rotation),"lookAt"in W&&t(3,l=W.lookAt),"color"in W&&t(6,c=W.color),"id"in W&&t(7,u=W.id),"$$scope"in W&&t(9,r=W.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&M(c)},[s,a,o,l,h,O,c,u,n,r]}class Wc extends Qe{constructor(e){super(),Je(this,e,i0,n0,qe,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}A_(ml,()=>new ml);function Ul(i){return-.5*(Math.cos(Math.PI*i)-1)}function kl(i){return Object.prototype.toString.call(i)==="[object Date]"}function bo(i,e){if(i===e||i!==i)return()=>i;const t=typeof i;if(t!==typeof e||Array.isArray(i)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const n=e.map((r,s)=>bo(i[s],r));return r=>n.map(s=>s(r))}if(t==="object"){if(!i||!e)throw new Error("Object cannot be null");if(kl(i)&&kl(e)){i=i.getTime(),e=e.getTime();const s=e-i;return a=>new Date(i+a*s)}const n=Object.keys(e),r={};return n.forEach(s=>{r[s]=bo(i[s],e[s])}),s=>{const a={};return n.forEach(o=>{a[o]=r[o](s)}),a}}if(t==="number"){const n=e-i;return r=>i+r*n}throw new Error(`Cannot interpolate ${t} values`)}function wo(i,e={}){const t=wt(i);let n,r=i;function s(a,o){if(i==null)return t.set(i=a),Promise.resolve();r=a;let l=n,c=!1,{delay:u=0,duration:f=400,easing:d=yu,interpolate:m=bo}=oo(oo({},e),o);if(f===0)return l&&(l.abort(),l=null),t.set(i=r),Promise.resolve();const v=wu()+u;let p;return n=Mu(h=>{if(h<v)return!0;c||(p=m(i,a),typeof f=="function"&&(f=f(i,a)),c=!0),l&&(l.abort(),l=null);const g=h-v;return g>f?(t.set(i=a),!1):(t.set(i=p(d(g/f))),!0)}),n.promise}return{set:s,update:(a,o)=>s(a(r,i),o),subscribe:t.subscribe}}function r0(i){let e,t;return e=new Wc({props:{position:{...i[3].cylPos},scale:{x:i[0],y:i[3].cylLength,z:i[0]},rotation:{...i[3].cylRot},color:i[2]}}),e.$on("pointerenter",i[7]),e.$on("pointerleave",i[8]),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.scale={x:n[0],y:n[3].cylLength,z:n[0]}),r&4&&(s.color=n[2]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function s0(i,e,t){let n,{graph:r}=e,{edgeID:s}=e,{width:a}=e,o=r.getEdgeAttributes(s),l=!1;const c=wo(0),u=new Pe(11184810),f=new Pe(16727552),d=Eo(c,p=>new Pe().lerpColors(u,f,p));nt(i,d,p=>t(2,n=p));const m=()=>t(1,l=!0),v=()=>t(1,l=!1);return i.$$set=p=>{"graph"in p&&t(5,r=p.graph),"edgeID"in p&&t(6,s=p.edgeID),"width"in p&&t(0,a=p.width)},i.$$.update=()=>{i.$$.dirty&2&&(l?c.set(1,{duration:0}):c.set(0,{duration:250}))},[a,l,n,o,d,r,s,m,v]}class o0 extends Qe{constructor(e){super(),Je(this,e,s0,r0,qe,{graph:5,edgeID:6,width:0})}}function a0(i){let e,t;return e=new Wc({props:{position:{...i[3]},scale:i[1],color:i[2]}}),e.$on("pointerenter",i[8]),e.$on("pointerleave",i[9]),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,[r]){const s={};r&2&&(s.scale=n[1]),r&4&&(s.color=n[2]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function l0(i,e,t){let n,r,{graph:s}=e,{nodeID:a}=e,o=s.getNodeAttributes(a);const l={x:o.x,y:o.y,z:o.z};let c=!1;const u=wo(1);nt(i,u,g=>t(1,n=g));const f=wo(0),d=new Pe(16727552),m=new Pe(16699392),v=Eo(f,g=>new Pe().lerpColors(d,m,g));nt(i,v,g=>t(2,r=g));const p=()=>t(0,c=!0),h=()=>t(0,c=!1);return i.$$set=g=>{"graph"in g&&t(6,s=g.graph),"nodeID"in g&&t(7,a=g.nodeID)},i.$$.update=()=>{i.$$.dirty&1&&(c?(u.set(3,{duration:50,easing:Ul}),f.set(1,{duration:0})):(u.set(1,{duration:250,easing:Ul}),f.set(0,{duration:250})))},[c,n,r,l,u,v,s,a,p,h]}class c0 extends Qe{constructor(e){super(),Je(this,e,l0,a0,qe,{graph:6,nodeID:7})}}var Uo={exports:{}},Gi=typeof Reflect=="object"?Reflect:null,Gl=Gi&&typeof Gi.apply=="function"?Gi.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},es;Gi&&typeof Gi.ownKeys=="function"?es=Gi.ownKeys:Object.getOwnPropertySymbols?es=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:es=function(e){return Object.getOwnPropertyNames(e)};function u0(i){console&&console.warn&&console.warn(i)}var Hc=Number.isNaN||function(e){return e!==e};function je(){je.init.call(this)}Uo.exports=je;Uo.exports.once=p0;je.EventEmitter=je;je.prototype._events=void 0;je.prototype._eventsCount=0;je.prototype._maxListeners=void 0;var Bl=10;function gs(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(je,"defaultMaxListeners",{enumerable:!0,get:function(){return Bl},set:function(i){if(typeof i!="number"||i<0||Hc(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");Bl=i}});je.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};je.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Hc(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function jc(i){return i._maxListeners===void 0?je.defaultMaxListeners:i._maxListeners}je.prototype.getMaxListeners=function(){return jc(this)};je.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var o=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw o.context=a,o}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Gl(l,this,t);else for(var c=l.length,u=Kc(l,c),n=0;n<c;++n)Gl(u[n],this,t);return!0};function qc(i,e,t,n){var r,s,a;if(gs(t),s=i._events,s===void 0?(s=i._events=Object.create(null),i._eventsCount=0):(s.newListener!==void 0&&(i.emit("newListener",e,t.listener?t.listener:t),s=i._events),a=s[e]),a===void 0)a=s[e]=t,++i._eventsCount;else if(typeof a=="function"?a=s[e]=n?[t,a]:[a,t]:n?a.unshift(t):a.push(t),r=jc(i),r>0&&a.length>r&&!a.warned){a.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=i,o.type=e,o.count=a.length,u0(o)}return i}je.prototype.addListener=function(e,t){return qc(this,e,t,!1)};je.prototype.on=je.prototype.addListener;je.prototype.prependListener=function(e,t){return qc(this,e,t,!0)};function f0(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Xc(i,e,t){var n={fired:!1,wrapFn:void 0,target:i,type:e,listener:t},r=f0.bind(n);return r.listener=t,n.wrapFn=r,r}je.prototype.once=function(e,t){return gs(t),this.on(e,Xc(this,e,t)),this};je.prototype.prependOnceListener=function(e,t){return gs(t),this.prependListener(e,Xc(this,e,t)),this};je.prototype.removeListener=function(e,t){var n,r,s,a,o;if(gs(t),r=this._events,r===void 0)return this;if(n=r[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,a=n.length-1;a>=0;a--)if(n[a]===t||n[a].listener===t){o=n[a].listener,s=a;break}if(s<0)return this;s===0?n.shift():d0(n,s),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",e,o||t)}return this};je.prototype.off=je.prototype.removeListener;je.prototype.removeAllListeners=function(e){var t,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),a;for(r=0;r<s.length;++r)a=s[r],a!=="removeListener"&&this.removeAllListeners(a);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function Yc(i,e,t){var n=i._events;if(n===void 0)return[];var r=n[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?h0(r):Kc(r,r.length)}je.prototype.listeners=function(e){return Yc(this,e,!0)};je.prototype.rawListeners=function(e){return Yc(this,e,!1)};je.listenerCount=function(i,e){return typeof i.listenerCount=="function"?i.listenerCount(e):Zc.call(i,e)};je.prototype.listenerCount=Zc;function Zc(i){var e=this._events;if(e!==void 0){var t=e[i];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}je.prototype.eventNames=function(){return this._eventsCount>0?es(this._events):[]};function Kc(i,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=i[n];return t}function d0(i,e){for(;e+1<i.length;e++)i[e]=i[e+1];i.pop()}function h0(i){for(var e=new Array(i.length),t=0;t<e.length;++t)e[t]=i[t].listener||i[t];return e}function p0(i,e){return new Promise(function(t,n){function r(a){i.removeListener(e,s),n(a)}function s(){typeof i.removeListener=="function"&&i.removeListener("error",r),t([].slice.call(arguments))}Jc(i,e,s,{once:!0}),e!=="error"&&m0(i,r,{once:!0})})}function m0(i,e,t){typeof i.on=="function"&&Jc(i,"error",e,t)}function Jc(i,e,t,n){if(typeof i.on=="function")n.once?i.once(e,t):i.on(e,t);else if(typeof i.addEventListener=="function")i.addEventListener(e,function r(s){n.once&&i.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}function xn(i){if(typeof i!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=i}typeof Symbol<"u"&&(xn.prototype[Symbol.iterator]=function(){return this});xn.of=function(){var i=arguments,e=i.length,t=0;return new xn(function(){return t>=e?{done:!0}:{done:!1,value:i[t++]}})};xn.empty=function(){var i=new xn(function(){return{done:!0}});return i};xn.fromSequence=function(i){var e=0,t=i.length;return new xn(function(){return e>=t?{done:!0}:{done:!1,value:i[e++]}})};xn.is=function(i){return i instanceof xn?!0:typeof i=="object"&&i!==null&&typeof i.next=="function"};var Dt=xn,ko={};ko.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u";ko.SYMBOL_SUPPORT=typeof Symbol<"u";var g0=Dt,Qc=ko,_0=Qc.ARRAY_BUFFER_SUPPORT,v0=Qc.SYMBOL_SUPPORT;function y0(i){return typeof i=="string"||Array.isArray(i)||_0&&ArrayBuffer.isView(i)?g0.fromSequence(i):typeof i!="object"||i===null?null:v0&&typeof i[Symbol.iterator]=="function"?i[Symbol.iterator]():typeof i.next=="function"?i:null}var $c=function(e){var t=y0(e);if(!t)throw new Error("obliterator: target is not iterable nor a valid iterator.");return t},x0=$c,eu=function(e,t){for(var n=arguments.length>1?t:1/0,r=n!==1/0?new Array(n):[],s,a=0,o=x0(e);;){if(a===n)return r;if(s=o.next(),s.done)return a!==t&&(r.length=a),r;r[a++]=s.value}},b0=Dt,w0=$c,Pn=function(){var e=arguments,t=null,n=-1;return new b0(function(){var s=null;do{if(t===null){if(n++,n>=e.length)return{done:!0};t=w0(e[n])}if(s=t.next(),s.done===!0){t=null;continue}break}while(!0);return s})};function M0(){const i=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(!!arguments[e])for(const n in arguments[e])i[n]=arguments[e][n];return i}let ht=M0;typeof Object.assign=="function"&&(ht=Object.assign);function en(i,e,t,n){const r=i._nodes.get(e);let s=null;return r&&(n==="mixed"?s=r.out&&r.out[t]||r.undirected&&r.undirected[t]:n==="directed"?s=r.out&&r.out[t]:s=r.undirected&&r.undirected[t]),s}function S0(i){return i!==null&&typeof i=="object"&&typeof i.addUndirectedEdgeWithKey=="function"&&typeof i.dropNode=="function"}function yt(i){return typeof i=="object"&&i!==null&&i.constructor===Object}function tu(i){let e;for(e in i)return!1;return!0}function Xt(i,e,t){Object.defineProperty(i,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function an(i,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(i,e,n)}function Vl(i){return!(!yt(i)||i.attributes&&!Array.isArray(i.attributes))}function E0(){let i=Math.floor(Math.random()*256)&255;return()=>i++}class Go extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class fe extends Go{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,fe.prototype.constructor)}}class ne extends Go{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ne.prototype.constructor)}}class be extends Go{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,be.prototype.constructor)}}function nu(i,e){this.key=i,this.attributes=e,this.clear()}nu.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.in={},this.out={},this.undirected={}};function iu(i,e){this.key=i,this.attributes=e,this.clear()}iu.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.in={},this.out={}};function ru(i,e){this.key=i,this.attributes=e,this.clear()}ru.prototype.clear=function(){this.undirectedDegree=0,this.undirected={}};function Qi(i,e,t,n,r){this.key=e,this.attributes=r,this.undirected=i,this.source=t,this.target=n}Qi.prototype.attach=function(){let i="out",e="in";this.undirected&&(i=e="undirected");const t=this.source.key,n=this.target.key;this.source[i][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};Qi.prototype.attachMulti=function(){let i="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(i=e="undirected");const r=this.source[i],s=r[n];if(typeof s>"u"){r[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}s.previous=this,this.next=s,r[n]=this,this.target[e][t]=this};Qi.prototype.detach=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][i]};Qi.prototype.detachMulti=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][i]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][i]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const su=0,ou=1,A0=2,au=3;function In(i,e,t,n,r,s,a){let o,l,c,u;if(n=""+n,t===su){if(o=i._nodes.get(n),!o)throw new ne(`Graph.${e}: could not find the "${n}" node in the graph.`);c=r,u=s}else if(t===au){if(r=""+r,l=i._edges.get(r),!l)throw new ne(`Graph.${e}: could not find the "${r}" edge in the graph.`);const f=l.source.key,d=l.target.key;if(n===f)o=l.target;else if(n===d)o=l.source;else throw new ne(`Graph.${e}: the "${n}" node is not attached to the "${r}" edge (${f}, ${d}).`);c=s,u=a}else{if(l=i._edges.get(n),!l)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===ou?o=l.source:o=l.target,c=r,u=s}return[o,c,u]}function T0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=In(this,e,t,n,r,s);return a.attributes[o]}}function C0(i,e,t){i.prototype[e]=function(n,r){const[s]=In(this,e,t,n,r);return s.attributes}}function L0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=In(this,e,t,n,r,s);return a.attributes.hasOwnProperty(o)}}function D0(i,e,t){i.prototype[e]=function(n,r,s,a){const[o,l,c]=In(this,e,t,n,r,s,a);return o.attributes[l]=c,this.emit("nodeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:l}),this}}function P0(i,e,t){i.prototype[e]=function(n,r,s,a){const[o,l,c]=In(this,e,t,n,r,s,a);if(typeof c!="function")throw new fe(`Graph.${e}: updater should be a function.`);const u=o.attributes,f=c(u[l]);return u[l]=f,this.emit("nodeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:l}),this}}function R0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=In(this,e,t,n,r,s);return delete a.attributes[o],this.emit("nodeAttributesUpdated",{key:a.key,type:"remove",attributes:a.attributes,name:o}),this}}function I0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=In(this,e,t,n,r,s);if(!yt(o))throw new fe(`Graph.${e}: provided attributes are not a plain object.`);return a.attributes=o,this.emit("nodeAttributesUpdated",{key:a.key,type:"replace",attributes:a.attributes}),this}}function O0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=In(this,e,t,n,r,s);if(!yt(o))throw new fe(`Graph.${e}: provided attributes are not a plain object.`);return ht(a.attributes,o),this.emit("nodeAttributesUpdated",{key:a.key,type:"merge",attributes:a.attributes,data:o}),this}}function N0(i,e,t){i.prototype[e]=function(n,r,s){const[a,o]=In(this,e,t,n,r,s);if(typeof o!="function")throw new fe(`Graph.${e}: provided updater is not a function.`);return a.attributes=o(a.attributes),this.emit("nodeAttributesUpdated",{key:a.key,type:"update",attributes:a.attributes}),this}}const F0=[{name:i=>`get${i}Attribute`,attacher:T0},{name:i=>`get${i}Attributes`,attacher:C0},{name:i=>`has${i}Attribute`,attacher:L0},{name:i=>`set${i}Attribute`,attacher:D0},{name:i=>`update${i}Attribute`,attacher:P0},{name:i=>`remove${i}Attribute`,attacher:R0},{name:i=>`replace${i}Attributes`,attacher:I0},{name:i=>`merge${i}Attributes`,attacher:O0},{name:i=>`update${i}Attributes`,attacher:N0}];function z0(i){F0.forEach(function({name:e,attacher:t}){t(i,e("Node"),su),t(i,e("Source"),ou),t(i,e("Target"),A0),t(i,e("Opposite"),au)})}function U0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=en(this,a,o,t),!s)throw new ne(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes[r]}}function k0(i,e,t){i.prototype[e]=function(n){let r;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+n,a=""+arguments[1];if(r=en(this,s,a,t),!r)throw new ne(`Graph.${e}: could not find an edge for the given path ("${s}" - "${a}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,r=this._edges.get(n),!r)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return r.attributes}}function G0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=en(this,a,o,t),!s)throw new ne(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function B0(i,e,t){i.prototype[e]=function(n,r,s){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,l=""+r;if(r=arguments[2],s=arguments[3],a=en(this,o,l,t),!a)throw new ne(`Graph.${e}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return a.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:r}),this}}function V0(i,e,t){i.prototype[e]=function(n,r,s){let a;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,l=""+r;if(r=arguments[2],s=arguments[3],a=en(this,o,l,t),!a)throw new ne(`Graph.${e}: could not find an edge for the given path ("${o}" - "${l}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,a=this._edges.get(n),!a)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof s!="function")throw new fe(`Graph.${e}: updater should be a function.`);return a.attributes[r]=s(a.attributes[r]),this.emit("edgeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:r}),this}}function W0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=en(this,a,o,t),!s)throw new ne(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function H0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=en(this,a,o,t),!s)throw new ne(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!yt(r))throw new fe(`Graph.${e}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function j0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=en(this,a,o,t),!s)throw new ne(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!yt(r))throw new fe(`Graph.${e}: provided attributes are not a plain object.`);return ht(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function q0(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new be(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new be(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,o=""+r;if(r=arguments[2],s=en(this,a,o,t),!s)throw new ne(`Graph.${e}: could not find an edge for the given path ("${a}" - "${o}").`)}else{if(t!=="mixed")throw new be(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ne(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof r!="function")throw new fe(`Graph.${e}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const X0=[{name:i=>`get${i}Attribute`,attacher:U0},{name:i=>`get${i}Attributes`,attacher:k0},{name:i=>`has${i}Attribute`,attacher:G0},{name:i=>`set${i}Attribute`,attacher:B0},{name:i=>`update${i}Attribute`,attacher:V0},{name:i=>`remove${i}Attribute`,attacher:W0},{name:i=>`replace${i}Attributes`,attacher:H0},{name:i=>`merge${i}Attributes`,attacher:j0},{name:i=>`update${i}Attributes`,attacher:q0}];function Y0(i){X0.forEach(function({name:e,attacher:t}){t(i,e("Edge"),"mixed"),t(i,e("DirectedEdge"),"directed"),t(i,e("UndirectedEdge"),"undirected")})}const Z0=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function K0(i,e,t,n){let r=!1;for(const s in e){if(s===n)continue;const a=e[s];if(r=t(a.key,a.attributes,a.source.key,a.target.key,a.source.attributes,a.target.attributes,a.undirected),i&&r)return a.key}}function J0(i,e,t,n){let r,s,a,o=!1;for(const l in e)if(l!==n){r=e[l];do{if(s=r.source,a=r.target,o=t(r.key,r.attributes,s.key,a.key,s.attributes,a.attributes,r.undirected),i&&o)return r.key;r=r.next}while(r!==void 0)}}function ro(i,e){const t=Object.keys(i),n=t.length;let r,s=0;return new Dt(function(){do if(r)r=r.next;else{if(s>=n)return{done:!0};const o=t[s++];if(o===e){r=void 0;continue}r=i[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}})}function Q0(i,e,t,n){const r=e[t];if(!r)return;const s=r.source,a=r.target;if(n(r.key,r.attributes,s.key,a.key,s.attributes,a.attributes,r.undirected)&&i)return r.key}function $0(i,e,t,n){let r=e[t];if(!r)return;let s=!1;do{if(s=n(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),i&&s)return r.key;r=r.next}while(r!==void 0)}function so(i,e){let t=i[e];return t.next!==void 0?new Dt(function(){if(!t)return{done:!0};const n={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:n}}):Dt.of({edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected})}function ev(i,e){if(i.size===0)return[];if(e==="mixed"||e===i.type)return typeof Array.from=="function"?Array.from(i._edges.keys()):eu(i._edges.keys(),i._edges.size);const t=e==="undirected"?i.undirectedSize:i.directedSize,n=new Array(t),r=e==="undirected",s=i._edges.values();let a=0,o,l;for(;o=s.next(),o.done!==!0;)l=o.value,l.undirected===r&&(n[a++]=l.key);return n}function lu(i,e,t,n){if(e.size===0)return;const r=t!=="mixed"&&t!==e.type,s=t==="undirected";let a,o,l=!1;const c=e._edges.values();for(;a=c.next(),a.done!==!0;){if(o=a.value,r&&o.undirected!==s)continue;const{key:u,attributes:f,source:d,target:m}=o;if(l=n(u,f,d.key,m.key,d.attributes,m.attributes,o.undirected),i&&l)return u}}function tv(i,e){if(i.size===0)return Dt.empty();const t=e!=="mixed"&&e!==i.type,n=e==="undirected",r=i._edges.values();return new Dt(function(){let a,o;for(;;){if(a=r.next(),a.done)return a;if(o=a.value,!(t&&o.undirected!==n))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}})}function Bo(i,e,t,n,r,s){const a=e?J0:K0;let o;if(t!=="undirected"&&(n!=="out"&&(o=a(i,r.in,s),i&&o)||n!=="in"&&(o=a(i,r.out,s,n?void 0:r.key),i&&o))||t!=="directed"&&(o=a(i,r.undirected,s),i&&o))return o}function nv(i,e,t,n){const r=[];return Bo(!1,i,e,t,n,function(s){r.push(s)}),r}function iv(i,e,t){let n=Dt.empty();return i!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=Pn(n,ro(t.in))),e!=="in"&&typeof t.out<"u"&&(n=Pn(n,ro(t.out,e?void 0:t.key)))),i!=="directed"&&typeof t.undirected<"u"&&(n=Pn(n,ro(t.undirected))),n}function Vo(i,e,t,n,r,s,a){const o=t?$0:Q0;let l;if(e!=="undirected"&&(typeof r.in<"u"&&n!=="out"&&(l=o(i,r.in,s,a),i&&l)||typeof r.out<"u"&&n!=="in"&&(n||r.key!==s)&&(l=o(i,r.out,s,a),i&&l))||e!=="directed"&&typeof r.undirected<"u"&&(l=o(i,r.undirected,s,a),i&&l))return l}function rv(i,e,t,n,r){const s=[];return Vo(!1,i,e,t,n,r,function(a){s.push(a)}),s}function sv(i,e,t,n){let r=Dt.empty();return i!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(r=Pn(r,so(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(r=Pn(r,so(t.out,n)))),i!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(r=Pn(r,so(t.undirected,n))),r}function ov(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s,a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return ev(this,n);if(arguments.length===1){s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new ne(`Graph.${t}: could not find the "${s}" node in the graph.`);return nv(this.multi,n==="mixed"?this.type:n,r,o)}if(arguments.length===2){s=""+s,a=""+a;const o=this._nodes.get(s);if(!o)throw new ne(`Graph.${t}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(a))throw new ne(`Graph.${t}:  could not find the "${a}" target node in the graph.`);return rv(n,this.multi,r,o,a)}throw new fe(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function av(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,u,f){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return f=c,lu(!1,this,n,f);if(arguments.length===2){c=""+c,f=u;const d=this._nodes.get(c);if(typeof d>"u")throw new ne(`Graph.${s}: could not find the "${c}" node in the graph.`);return Bo(!1,this.multi,n==="mixed"?this.type:n,r,d,f)}if(arguments.length===3){c=""+c,u=""+u;const d=this._nodes.get(c);if(!d)throw new ne(`Graph.${s}:  could not find the "${c}" source node in the graph.`);if(!this._nodes.has(u))throw new ne(`Graph.${s}:  could not find the "${u}" target node in the graph.`);return Vo(!1,n,this.multi,r,d,u,f)}throw new fe(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const a="map"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(){const c=Array.prototype.slice.call(arguments),u=c.pop();let f;if(c.length===0){let d=0;n!=="directed"&&(d+=this.undirectedSize),n!=="undirected"&&(d+=this.directedSize),f=new Array(d);let m=0;c.push((v,p,h,g,y,w,b)=>{f[m++]=u(v,p,h,g,y,w,b)})}else f=[],c.push((d,m,v,p,h,g,y)=>{f.push(u(d,m,v,p,h,g,y))});return this[s].apply(this,c),f};const o="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(){const c=Array.prototype.slice.call(arguments),u=c.pop(),f=[];return c.push((d,m,v,p,h,g,y)=>{u(d,m,v,p,h,g,y)&&f.push(d)}),this[s].apply(this,c),f};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(){let c=Array.prototype.slice.call(arguments);if(c.length<2||c.length>4)throw new fe(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${c.length}).`);if(typeof c[c.length-1]=="function"&&typeof c[c.length-2]!="function")throw new fe(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,f;c.length===2?(u=c[0],f=c[1],c=[]):c.length===3?(u=c[1],f=c[2],c=[c[0]]):c.length===4&&(u=c[2],f=c[3],c=[c[0],c[1]]);let d=f;return c.push((m,v,p,h,g,y,w)=>{d=u(d,m,v,p,h,g,y,w)}),this[s].apply(this,c),d}}function lv(i,e){const{name:t,type:n,direction:r}=e,s="find"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(l,c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return u=l,lu(!0,this,n,u);if(arguments.length===2){l=""+l,u=c;const f=this._nodes.get(l);if(typeof f>"u")throw new ne(`Graph.${s}: could not find the "${l}" node in the graph.`);return Bo(!0,this.multi,n==="mixed"?this.type:n,r,f,u)}if(arguments.length===3){l=""+l,c=""+c;const f=this._nodes.get(l);if(!f)throw new ne(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(c))throw new ne(`Graph.${s}:  could not find the "${c}" target node in the graph.`);return Vo(!0,n,this.multi,r,f,c,u)}throw new fe(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const a="some"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((f,d,m,v,p,h,g)=>c(f,d,m,v,p,h,g)),!!this[s].apply(this,l)};const o="every"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((f,d,m,v,p,h,g)=>!c(f,d,m,v,p,h,g)),!this[s].apply(this,l)}}function cv(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(a,o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Dt.empty();if(!arguments.length)return tv(this,n);if(arguments.length===1){a=""+a;const l=this._nodes.get(a);if(!l)throw new ne(`Graph.${s}: could not find the "${a}" node in the graph.`);return iv(n,r,l)}if(arguments.length===2){a=""+a,o=""+o;const l=this._nodes.get(a);if(!l)throw new ne(`Graph.${s}:  could not find the "${a}" source node in the graph.`);if(!this._nodes.has(o))throw new ne(`Graph.${s}:  could not find the "${o}" target node in the graph.`);return sv(n,r,l,o)}throw new fe(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function uv(i){Z0.forEach(e=>{ov(i,e),av(i,e),lv(i,e),cv(i,e)})}const fv=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function _s(){this.A=null,this.B=null}_s.prototype.wrap=function(i){this.A===null?this.A=i:this.B===null&&(this.B=i)};_s.prototype.has=function(i){return this.A!==null&&i in this.A||this.B!==null&&i in this.B};function sr(i,e,t,n,r){for(const s in n){const a=n[s],o=a.source,l=a.target,c=o===t?l:o;if(e&&e.has(c.key))continue;const u=r(c.key,c.attributes);if(i&&u)return c.key}}function Wo(i,e,t,n,r){if(e!=="mixed"){if(e==="undirected")return sr(i,null,n,n.undirected,r);if(typeof t=="string")return sr(i,null,n,n[t],r)}const s=new _s;let a;if(e!=="undirected"){if(t!=="out"){if(a=sr(i,null,n,n.in,r),i&&a)return a;s.wrap(n.in)}if(t!=="in"){if(a=sr(i,s,n,n.out,r),i&&a)return a;s.wrap(n.out)}}if(e!=="directed"&&(a=sr(i,s,n,n.undirected,r),i&&a))return a}function dv(i,e,t){if(i!=="mixed"){if(i==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return Wo(!1,i,e,t,function(r){n.push(r)}),n}function or(i,e,t){const n=Object.keys(t),r=n.length;let s=0;return new Dt(function(){let o=null;do{if(s>=r)return i&&i.wrap(t),{done:!0};const l=t[n[s++]],c=l.source,u=l.target;if(o=c===e?u:c,i&&i.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}})}function hv(i,e,t){if(i!=="mixed"){if(i==="undirected")return or(null,t,t.undirected);if(typeof e=="string")return or(null,t,t[e])}let n=Dt.empty();const r=new _s;return i!=="undirected"&&(e!=="out"&&(n=Pn(n,or(r,t,t.in))),e!=="in"&&(n=Pn(n,or(r,t,t.out)))),i!=="directed"&&(n=Pn(n,or(r,t,t.undirected))),n}function pv(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new ne(`Graph.${t}: could not find the "${s}" node in the graph.`);return dv(n==="mixed"?this.type:n,r,a)}}function mv(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const f=this._nodes.get(c);if(typeof f>"u")throw new ne(`Graph.${s}: could not find the "${c}" node in the graph.`);Wo(!1,n==="mixed"?this.type:n,r,f,u)};const a="map"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(c,u){const f=[];return this[s](c,(d,m)=>{f.push(u(d,m))}),f};const o="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(c,u){const f=[];return this[s](c,(d,m)=>{u(d,m)&&f.push(d)}),f};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(c,u,f){if(arguments.length<3)throw new fe(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let d=f;return this[s](c,(m,v)=>{d=u(d,m,v)}),d}}function gv(i,e){const{name:t,type:n,direction:r}=e,s=t[0].toUpperCase()+t.slice(1,-1),a="find"+s;i.prototype[a]=function(c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const f=this._nodes.get(c);if(typeof f>"u")throw new ne(`Graph.${a}: could not find the "${c}" node in the graph.`);return Wo(!0,n==="mixed"?this.type:n,r,f,u)};const o="some"+s;i.prototype[o]=function(c,u){return!!this[a](c,u)};const l="every"+s;i.prototype[l]=function(c,u){return!this[a](c,(d,m)=>!u(d,m))}}function _v(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Dt.empty();a=""+a;const o=this._nodes.get(a);if(typeof o>"u")throw new ne(`Graph.${s}: could not find the "${a}" node in the graph.`);return hv(n==="mixed"?this.type:n,r,o)}}function vv(i){fv.forEach(e=>{pv(i,e),mv(i,e),gv(i,e),_v(i,e)})}function Zr(i,e,t,n,r){const s=n._nodes.values(),a=n.type;let o,l,c,u,f,d,m;for(;o=s.next(),o.done!==!0;){let v=!1;if(l=o.value,a!=="undirected"){u=l.out;for(c in u){f=u[c];do{if(d=f.target,v=!0,m=r(l.key,d.key,l.attributes,d.attributes,f.key,f.attributes,f.undirected),i&&m)return f;f=f.next}while(f)}}if(a!=="directed"){u=l.undirected;for(c in u)if(!(e&&l.key>c)){f=u[c];do{if(d=f.target,d.key!==c&&(d=f.source),v=!0,m=r(l.key,d.key,l.attributes,d.attributes,f.key,f.attributes,f.undirected),i&&m)return f;f=f.next}while(f)}}if(t&&!v&&(m=r(l.key,null,l.attributes,null,null,null,null),i&&m))return null}}function yv(i,e){const t={key:i};return tu(e.attributes)||(t.attributes=ht({},e.attributes)),t}function xv(i,e){const t={key:i,source:e.source.key,target:e.target.key};return tu(e.attributes)||(t.attributes=ht({},e.attributes)),e.undirected&&(t.undirected=!0),t}function bv(i){if(!yt(i))throw new fe('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in i))throw new fe("Graph.import: serialized node is missing its key.");if("attributes"in i&&(!yt(i.attributes)||i.attributes===null))throw new fe("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function wv(i){if(!yt(i))throw new fe('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in i))throw new fe("Graph.import: serialized edge is missing its source.");if(!("target"in i))throw new fe("Graph.import: serialized edge is missing its target.");if("attributes"in i&&(!yt(i.attributes)||i.attributes===null))throw new fe("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in i&&typeof i.undirected!="boolean")throw new fe("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const Mv=E0(),Sv=new Set(["directed","undirected","mixed"]),Wl=new Set(["domain","_events","_eventsCount","_maxListeners"]),Ev=[{name:i=>`${i}Edge`,generateKey:!0},{name:i=>`${i}DirectedEdge`,generateKey:!0,type:"directed"},{name:i=>`${i}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:i=>`${i}EdgeWithKey`},{name:i=>`${i}DirectedEdgeWithKey`,type:"directed"},{name:i=>`${i}UndirectedEdgeWithKey`,type:"undirected"}],Av={allowSelfLoops:!0,multi:!1,type:"mixed"};function Tv(i,e,t){if(t&&!yt(t))throw new fe(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},i._nodes.has(e))throw new be(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function Hl(i,e,t){const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function cu(i,e,t,n,r,s,a,o){if(!n&&i.type==="undirected")throw new be(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new be(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(o&&!yt(o))throw new fe(`Graph.${e}: invalid attributes. Expecting an object but got "${o}"`);if(s=""+s,a=""+a,o=o||{},!i.allowSelfLoops&&s===a)throw new be(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const l=i._nodes.get(s),c=i._nodes.get(a);if(!l)throw new ne(`Graph.${e}: source node "${s}" not found.`);if(!c)throw new ne(`Graph.${e}: target node "${a}" not found.`);const u={key:null,undirected:n,source:s,target:a,attributes:o};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new be(`Graph.${e}: the "${r}" edge already exists in the graph.`);if(!i.multi&&(n?typeof l.undirected[a]<"u":typeof l.out[a]<"u"))throw new be(`Graph.${e}: an edge linking "${s}" to "${a}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const f=new Qi(n,r,l,c,o);i._edges.set(r,f);const d=s===a;return n?(l.undirectedDegree++,c.undirectedDegree++,d&&i._undirectedSelfLoopCount++):(l.outDegree++,c.inDegree++,d&&i._directedSelfLoopCount++),i.multi?f.attachMulti():f.attach(),n?i._undirectedSize++:i._directedSize++,u.key=r,i.emit("edgeAdded",u),r}function Cv(i,e,t,n,r,s,a,o,l){if(!n&&i.type==="undirected")throw new be(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new be(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(o){if(l){if(typeof o!="function")throw new fe(`Graph.${e}: invalid updater function. Expecting a function but got "${o}"`)}else if(!yt(o))throw new fe(`Graph.${e}: invalid attributes. Expecting an object but got "${o}"`)}s=""+s,a=""+a;let c;if(l&&(c=o,o=void 0),!i.allowSelfLoops&&s===a)throw new be(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=i._nodes.get(s),f=i._nodes.get(a),d,m;if(!t&&(d=i._edges.get(r),d)){if((d.source.key!==s||d.target.key!==a)&&(!n||d.source.key!==a||d.target.key!==s))throw new be(`Graph.${e}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${a}" target vs. ("${d.source.key}", "${d.target.key}").`);m=d}if(!m&&!i.multi&&u&&(m=n?u.undirected[a]:u.out[a]),m){const y=[m.key,!1,!1,!1];if(l?!c:!o)return y;if(l){const w=m.attributes;m.attributes=c(w),i.emit("edgeAttributesUpdated",{type:"replace",key:m.key,attributes:m.attributes})}else ht(m.attributes,o),i.emit("edgeAttributesUpdated",{type:"merge",key:m.key,attributes:m.attributes,data:o});return y}o=o||{},l&&c&&(o=c(o));const v={key:null,undirected:n,source:s,target:a,attributes:o};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new be(`Graph.${e}: the "${r}" edge already exists in the graph.`);let p=!1,h=!1;u||(u=Hl(i,s,{}),p=!0,s===a&&(f=u,h=!0)),f||(f=Hl(i,a,{}),h=!0),d=new Qi(n,r,u,f,o),i._edges.set(r,d);const g=s===a;return n?(u.undirectedDegree++,f.undirectedDegree++,g&&i._undirectedSelfLoopCount++):(u.outDegree++,f.inDegree++,g&&i._directedSelfLoopCount++),i.multi?d.attachMulti():d.attach(),n?i._undirectedSize++:i._directedSize++,v.key=r,i.emit("edgeAdded",v),[r,!0,p,h]}function Oi(i,e){i._edges.delete(e.key);const{source:t,target:n,attributes:r}=e,s=e.undirected,a=t===n;s?(t.undirectedDegree--,n.undirectedDegree--,a&&i._undirectedSelfLoopCount--):(t.outDegree--,n.inDegree--,a&&i._directedSelfLoopCount--),i.multi?e.detachMulti():e.detach(),s?i._undirectedSize--:i._directedSize--,i.emit("edgeDropped",{key:e.key,attributes:r,source:t.key,target:n.key,undirected:s})}class Ye extends Uo.exports.EventEmitter{constructor(e){if(super(),e=ht({},Av,e),typeof e.multi!="boolean")throw new fe(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!Sv.has(e.type))throw new fe(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new fe(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?nu:e.type==="directed"?iu:ru;Xt(this,"NodeDataClass",t);const n="geid_"+Mv()+"_";let r=0;const s=()=>{let a;do a=n+r++;while(this._edges.has(a));return a};Xt(this,"_attributes",{}),Xt(this,"_nodes",new Map),Xt(this,"_edges",new Map),Xt(this,"_directedSize",0),Xt(this,"_undirectedSize",0),Xt(this,"_directedSelfLoopCount",0),Xt(this,"_undirectedSelfLoopCount",0),Xt(this,"_edgeKeyGenerator",s),Xt(this,"_options",e),Wl.forEach(a=>Xt(this,a,this[a])),an(this,"order",()=>this._nodes.size),an(this,"size",()=>this._edges.size),an(this,"directedSize",()=>this._directedSize),an(this,"undirectedSize",()=>this._undirectedSize),an(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),an(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),an(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),an(this,"multi",this._options.multi),an(this,"type",this._options.type),an(this,"allowSelfLoops",this._options.allowSelfLoops),an(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&!r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)return!1;const r=n.out[t];return r?this.multi?!!r.size:!0:!1}throw new fe(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)return!1;const r=n.undirected[t];return r?this.multi?!!r.size:!0:!1}throw new fe(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)return!1;let r=typeof n.out<"u"&&n.out[t];return r||(r=typeof n.undirected<"u"&&n.undirected[t]),r?this.multi?!!r.size:!0:!1}throw new fe(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new be("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new ne(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new ne(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new be("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new ne(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new ne(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new be("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new ne(`Graph.edge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ne(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="undirected")return 0;const n=t.in[e],r=n?this.multi?n.size:1:0;return t.inDegree-r}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="undirected")return 0;const n=t.out[e],r=n?this.multi?n.size:1:0;return t.outDegree-r}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="undirected")return 0;const n=t.out[e],r=n?this.multi?n.size:1:0;return t.inDegree+t.outDegree-r*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="directed")return 0;const n=t.undirected[e],r=n?this.multi?n.size:1:0;return t.undirectedDegree-r*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n,r=0,s=0;return this.type!=="directed"&&(r+=t.undirectedDegree,n=t.undirected[e],s+=(n?this.multi?n.size:1:0)*2),this.type!=="undirected"&&(r+=t.inDegree,n=t.out[e],s+=n?this.multi?n.size:1:0),r-s}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n,r=0,s=0;return this.type!=="directed"&&(r+=t.undirectedDegree,n=t.undirected[e],s+=(n?this.multi?n.size:1:0)*2),this.type!=="undirected"&&(r+=t.outDegree,n=t.in[e],s+=n?this.multi?n.size:1:0),r-s}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n,r=0,s=0;return this.type!=="directed"&&(r+=t.undirectedDegree,n=t.undirected[e],s+=(n?this.multi?n.size:1:0)*2),this.type!=="undirected"&&(r+=t.inDegree+t.outDegree,n=t.out[e],s+=(n?this.multi?n.size:1:0)*2),r-s}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ne(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ne(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ne(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new ne(`Graph.opposite: could not find the "${t}" edge in the graph.`);const r=n.source.key,s=n.target.key;if(e===r)return s;if(e===s)return r;throw new ne(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${s}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new ne(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ne(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ne(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ne(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return Tv(this,e,t).key}mergeNode(e,t){if(t&&!yt(t))throw new fe(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(ht(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new fe(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const s=n.attributes;n.attributes=t(s),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:r}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ne(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const r in t.out){n=t.out[r];do Oi(this,n),n=n.next;while(n)}for(const r in t.in){n=t.in[r];do Oi(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const r in t.undirected){n=t.undirected[r];do Oi(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],r=""+arguments[1];if(t=en(this,n,r,this.type),!t)throw new ne(`Graph.dropEdge: could not find the "${n}" -> "${r}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new ne(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return Oi(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new be("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new be("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=en(this,e,t,"directed");if(!n)throw new ne(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return Oi(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new be("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new be("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=en(this,e,t,"undirected");if(!n)throw new ne(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return Oi(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new fe("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!yt(e))throw new fe("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!yt(e))throw new fe("Graph.mergeAttributes: provided attributes are not a plain object.");return ht(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new fe("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new fe("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!Vl(t))throw new fe("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,s.attributes=e(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new fe("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!Vl(t))throw new fe("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let r,s,a,o;for(;r=n.next(),r.done!==!0;)s=r.value,a=s.source,o=s.target,s.attributes=e(s.key,s.attributes,a.key,o.key,a.attributes,o.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new fe("Graph.forEachAdjacencyEntry: expecting a callback.");Zr(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new fe("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Zr(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new fe("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Zr(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new fe("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Zr(!1,!0,!0,this,e)}nodes(){return typeof Array.from=="function"?Array.from(this._nodes.keys()):eu(this._nodes.keys(),this._nodes.size)}forEachNode(e){if(typeof e!="function")throw new fe("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!="function")throw new fe("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!="function")throw new fe("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,r;const s=new Array(this.order);let a=0;for(;n=t.next(),n.done!==!0;)r=n.value,s[a++]=e(r.key,r.attributes);return s}someNode(e){if(typeof e!="function")throw new fe("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new fe("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new fe("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,r;const s=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(e,t){if(typeof e!="function")throw new fe("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new fe("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const r=this._nodes.values();let s,a;for(;s=r.next(),s.done!==!0;)a=s.value,n=e(n,a.key,a.attributes);return n}nodeEntries(){const e=this._nodes.values();return new Dt(()=>{const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}})}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((r,s)=>{e[t++]=yv(s,r)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((r,s)=>{n[t++]=xv(s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if(S0(e))return e.forEachNode((l,c)=>{t?this.mergeNode(l,c):this.addNode(l,c)}),e.forEachEdge((l,c,u,f,d,m,v)=>{t?v?this.mergeUndirectedEdgeWithKey(l,u,f,c):this.mergeDirectedEdgeWithKey(l,u,f,c):v?this.addUndirectedEdgeWithKey(l,u,f,c):this.addDirectedEdgeWithKey(l,u,f,c)}),this;if(!yt(e))throw new fe("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!yt(e.attributes))throw new fe("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,r,s,a,o;if(e.nodes){if(s=e.nodes,!Array.isArray(s))throw new fe("Graph.import: invalid nodes. Expecting an array.");for(n=0,r=s.length;n<r;n++){a=s[n],bv(a);const{key:l,attributes:c}=a;t?this.mergeNode(l,c):this.addNode(l,c)}}if(e.edges){if(s=e.edges,!Array.isArray(s))throw new fe("Graph.import: invalid edges. Expecting an array.");for(n=0,r=s.length;n<r;n++){o=s[n],wv(o);const{source:l,target:c,attributes:u,undirected:f=!1}=o;let d;"key"in o?(d=t?f?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:f?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,d.call(this,o.key,l,c,u)):(d=t?f?this.mergeUndirectedEdge:this.mergeDirectedEdge:f?this.addUndirectedEdge:this.addDirectedEdge,d.call(this,l,c,u))}}return this}nullCopy(e){const t=new Ye(ht({},this._options,e));return t.replaceAttributes(ht({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,r)=>{const s=ht({},n.attributes);n=new t.NodeDataClass(r,s),t._nodes.set(r,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new be(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new be("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new be("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,cu(t,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,ht({},s.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((s,a)=>{e[a]=s.attributes});const t={},n={};this._edges.forEach((s,a)=>{const o=s.undirected?"--":"->";let l="",c=s.source.key,u=s.target.key,f;s.undirected&&c>u&&(f=c,c=u,u=f);const d=`(${c})${o}(${u})`;a.startsWith("geid_")?this.multi&&(typeof n[d]>"u"?n[d]=0:n[d]++,l+=`${n[d]}. `):l+=`[${a}]: `,l+=d,t[l]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!Wl.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,Xt(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(Ye.prototype[Symbol.for("nodejs.util.inspect.custom")]=Ye.prototype.inspect);Ev.forEach(i=>{["add","merge","update"].forEach(e=>{const t=i.name(e),n=e==="add"?cu:Cv;i.generateKey?Ye.prototype[t]=function(r,s,a){return n(this,t,!0,(i.type||this.type)==="undirected",null,r,s,a,e==="update")}:Ye.prototype[t]=function(r,s,a,o){return n(this,t,!1,(i.type||this.type)==="undirected",r,s,a,o,e==="update")}})});z0(Ye);Y0(Ye);uv(Ye);vv(Ye);class uu extends Ye{constructor(e){const t=ht({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new fe("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new fe('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class fu extends Ye{constructor(e){const t=ht({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new fe("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new fe('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class du extends Ye{constructor(e){const t=ht({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new fe("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class Ho extends Ye{constructor(e){const t=ht({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new fe("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new fe('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class hu extends Ye{constructor(e){const t=ht({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new fe("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new fe('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function $i(i){i.from=function(e,t){const n=ht({},e.options,t),r=new i(n);return r.import(e),r}}$i(Ye);$i(uu);$i(fu);$i(du);$i(Ho);$i(hu);Ye.Graph=Ye;Ye.DirectedGraph=uu;Ye.UndirectedGraph=fu;Ye.MultiGraph=du;Ye.MultiDirectedGraph=Ho;Ye.MultiUndirectedGraph=hu;Ye.InvalidArgumentsGraphError=fe;Ye.NotFoundGraphError=ne;Ye.UsageGraphError=be;function Lv(i){let e=new Ho;return e.import({attributes:{name:"My Graph"},options:{allowSelfLoops:!0,multi:!0,type:"directed"},nodes:i.nodes.map(t=>({key:t.id,attributes:{...t}})),edges:i.links.map(t=>{let n=typeof t.source=="string"?t.source:t.source.id,r=typeof t.target=="string"?t.target:t.target.id;return{key:t.key,source:n,target:r,undirected:!1,attributes:{...t}}})}),e}function Dv(i,e){i.updateEachNodeAttributes((r,s)=>({...s,x:s.x*e,y:s.y*e,z:s.z*e}));const t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});let n=[];return i.forEachNode(r=>{i.forEachNeighbor(r,s=>{if(n.includes(s))return;let a=0;i.someEdge(r,s,o=>{i.setEdgeAttribute(o,"multiNumber",a),a++}),i.someEdge(r,s,o=>{i.setEdgeAttribute(o,"multiTotal",a)})}),n.push(r)}),i.updateEachEdgeAttributes((r,s,a,o,l,c)=>{const u=t.compare(a,o),f=s.multiTotal,d=s.multiNumber;let m=0,v=0;f>1&&(m=.5,v=d/f*2*Math.PI,u===1&&(v=Math.PI-v)),u===0&&(m=.5);let p=new N(l.x,l.y,l.z),h=new N(c.x,c.y,c.z),g=p.lerp(h,.5),y=h.clone().add(p.clone().multiplyScalar(-1)),w=new xo().setFromVector3(y);const b=new N().subVectors(h,p),x=new Lg(b.clone().normalize(),h),M=new N(x.rotation.x,x.rotation.y,x.rotation.z);return{curve:m,curveRotation:v,isFirstLink:d===0,cylLength:2*w.radius,cylPos:g,cylRot:M,dotForwards:h.dot(p),...s}}),i}const Pv=[{effectCode:"",fullPhosphorylationEffect:"The effect of Yes Tyr-32 phosphorylation is unclear.",key:"P07947-Y32->P07947",source:"P07222947",substratePhosphosite:"Y32",target:"P07948"},{effectCode:"+",fullPhosphorylationEffect:"Yes Tyr-426 phosphorylation stimulates phosphotransferase activity. This phosphosite is located in the kinase activation loop between catalytic subdomains VII and VIII.",key:"P07947-Y426->P07947",source:"P07222947",substratePhosphosite:"Y426",target:"P07947"},{effectCode:"+",fullPhosphorylationEffect:"Yes Tyr-426 phosphorylation stimulates phosphotransferase activity. This phosphosite is located in the kinase activation loop between catalytic subdomains VII and VIII.",key:"P07947-26->P07947",source:"P41240",substratePhosphosite:"Y426",target:"P07222947"},{effectCode:"+",fullPhosphorylationEffect:"Yes Tyr-426 phosphorylation stimulates phosphotransferase activity. This phosphosite is located in the kinase activation loop between catalytic subdomains VII and VIII.",key:"P07947-26333->P07947",source:"P41240",substratePhosphosite:"Y426",target:"P07222947"}],Rv=[{desc:"Protein kinase - Tyr (non-receptor), TK group, Src family",id:"P07222947",isKinase:!0,name:"YES1",type:"Kinase",x:0,y:0,z:0},{desc:"Protein kinase - Tyr (non-receptor), TK group, Src family",id:"P07947",isKinase:!0,name:"YES1",type:"Kinase",x:1,y:0,z:0},{desc:"Protein kinase - Tyr (non-receptor), TK group, Src family",id:"P07948",isKinase:!1,name:"YES2",type:"Kinase",x:0,y:1,z:0},{desc:"Protein kinase - Tyr (non-receptor), TK group, Csk family",id:"P41240",isKinase:!0,name:"CSK",type:"Kinase",x:0,y:0,z:1}],Iv={links:Pv,nodes:Rv};function jl(i,e,t){const n=i.slice();return n[5]=e[t][0],n[6]=e[t][1],n}function ql(i,e,t){const n=i.slice();return n[9]=e[t],n}function Ov(i){let e,t;return e=new D_({props:{autoRotate:!1,enableZoom:!0,enableDamping:!1}}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p:Et,i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Xl(i){let e,t;return e=new o0({props:{graph:i[0],edgeID:i[9],width:kv}}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.graph=n[0]),r&1&&(s.edgeID=n[9]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Yl(i,e){let t,n=e[0].getEdgeAttribute(e[9],"isFirstLink"),r,s,a=n&&Xl(e);return{key:i,first:null,c(){t=fr(),a&&a.c(),r=fr(),this.first=t},m(o,l){Ze(o,t,l),a&&a.m(o,l),Ze(o,r,l),s=!0},p(o,l){e=o,l&1&&(n=e[0].getEdgeAttribute(e[9],"isFirstLink")),n?a?(a.p(e,l),l&1&&pe(a,1)):(a=Xl(e),a.c(),pe(a,1),a.m(r.parentNode,r)):a&&(Xi(),_e(a,1,1,()=>{a=null}),Yi())},i(o){s||(pe(a),s=!0)},o(o){_e(a),s=!1},d(o){o&&Xe(t),a&&a.d(o),o&&Xe(r)}}}function Nv(i){let e=[],t=new Map,n,r,s=i[0].edges();const a=o=>o[9]+"_interactive";for(let o=0;o<s.length;o+=1){let l=ql(i,s,o),c=a(l);t.set(c,e[o]=Yl(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=fr()},m(o,l){for(let c=0;c<e.length;c+=1)e[c].m(o,l);Ze(o,n,l),r=!0},p(o,l){l&1&&(s=o[0].edges(),Xi(),e=oc(e,l,a,1,o,s,t,n.parentNode,sc,Yl,n,ql),Yi())},i(o){if(!r){for(let l=0;l<s.length;l+=1)pe(e[l]);r=!0}},o(o){for(let l=0;l<e.length;l+=1)_e(e[l]);r=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&Xe(n)}}}function Zl(i,e){let t,n,r;return n=new c0({props:{graph:e[0],nodeID:e[6]}}),{key:i,first:null,c(){t=fr(),Re(n.$$.fragment),this.first=t},m(s,a){Ze(s,t,a),Le(n,s,a),r=!0},p(s,a){e=s;const o={};a&1&&(o.graph=e[0]),a&1&&(o.nodeID=e[6]),n.$set(o)},i(s){r||(pe(n.$$.fragment,s),r=!0)},o(s){_e(n.$$.fragment,s),r=!1},d(s){s&&Xe(t),De(n,s)}}}function Fv(i){let e=[],t=new Map,n,r,s=Object.entries(i[0].nodes());const a=o=>o[6];for(let o=0;o<s.length;o+=1){let l=jl(i,s,o),c=a(l);t.set(c,e[o]=Zl(c,l))}return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=fr()},m(o,l){for(let c=0;c<e.length;c+=1)e[c].m(o,l);Ze(o,n,l),r=!0},p(o,l){l&1&&(s=Object.entries(o[0].nodes()),Xi(),e=oc(e,l,a,1,o,s,t,n.parentNode,sc,Zl,n,jl),Yi())},i(o){if(!r){for(let l=0;l<s.length;l+=1)pe(e[l]);r=!0}},o(o){for(let l=0;l<e.length;l+=1)_e(e[l]);r=!1},d(o){for(let l=0;l<e.length;l+=1)e[l].d(o);o&&Xe(n)}}}function zv(i){let e,t,n,r,s,a,o,l,c,u;return e=new E_({props:{fov:50,far:1e10,position:{x:ts*4,y:2*ts,z:ts*4},lookAt:{},$$slots:{default:[Ov]},$$scope:{ctx:i}}}),n=new V_({props:{color:16777215,intensity:.6,position:{x:500,y:500,z:500}}}),s=new U_({props:{color:10066329}}),o=new zl({props:{geometry:i[3],material:i[4],interactive:!0,$$slots:{default:[Nv]},$$scope:{ctx:i}}}),c=new zl({props:{geometry:i[1],material:i[2],interactive:!0,$$slots:{default:[Fv]},$$scope:{ctx:i}}}),{c(){Re(e.$$.fragment),t=ot(),Re(n.$$.fragment),r=ot(),Re(s.$$.fragment),a=ot(),Re(o.$$.fragment),l=ot(),Re(c.$$.fragment)},m(f,d){Le(e,f,d),Ze(f,t,d),Le(n,f,d),Ze(f,r,d),Le(s,f,d),Ze(f,a,d),Le(o,f,d),Ze(f,l,d),Le(c,f,d),u=!0},p(f,[d]){const m={};d&4096&&(m.$$scope={dirty:d,ctx:f}),e.$set(m);const v={};d&4097&&(v.$$scope={dirty:d,ctx:f}),o.$set(v);const p={};d&4097&&(p.$$scope={dirty:d,ctx:f}),c.$set(p)},i(f){u||(pe(e.$$.fragment,f),pe(n.$$.fragment,f),pe(s.$$.fragment,f),pe(o.$$.fragment,f),pe(c.$$.fragment,f),u=!0)},o(f){_e(e.$$.fragment,f),_e(n.$$.fragment,f),_e(s.$$.fragment,f),_e(o.$$.fragment,f),_e(c.$$.fragment,f),u=!1},d(f){De(e,f),f&&Xe(t),De(n,f),f&&Xe(r),De(s,f),f&&Xe(a),De(o,f),f&&Xe(l),De(c,f)}}}const ts=100,Uv=2,kv=.5,Gv=6;function Bv(i,e,t){let n=Lv(Iv);n=Dv(n,ts);const r=new No(Uv,5),s=new hl({opacity:.8,transparent:!1}),a=new cs(1,1,1,Gv,1,!1),o=new hl({opacity:.1,transparent:!0,color:"#9DAABC"});return[n,r,s,a,o]}class Vv extends Qe{constructor(e){super(),Je(this,e,Bv,zv,qe,{})}}function Wv(i){let e,t,n,r,s,a,o,l;const c=i[7].default,u=Pt(c,i,i[6],null);return{c(){e=Dn("aside"),t=Dn("div"),n=ot(),r=Dn("div"),u&&u.c(),St(t,"class","overlay svelte-1c92i6o"),St(r,"class",s="panel "+i[1]+" svelte-1c92i6o"),Yt(r,"size",i[2]),St(e,"class","drawer svelte-1c92i6o"),St(e,"style",i[3]),Yt(e,"open",i[0])},m(f,d){Ze(f,e,d),gn(e,t),gn(e,n),gn(e,r),u&&u.m(r,null),a=!0,o||(l=Tn(t,"click",i[4]),o=!0)},p(f,[d]){u&&u.p&&(!a||d&64)&&It(u,c,f,f[6],a?Rt(c,f[6],d,null):Ot(f[6]),null),(!a||d&2&&s!==(s="panel "+f[1]+" svelte-1c92i6o"))&&St(r,"class",s),(!a||d&6)&&Yt(r,"size",f[2]),(!a||d&8)&&St(e,"style",f[3]),(!a||d&1)&&Yt(e,"open",f[0])},i(f){a||(pe(u,f),a=!0)},o(f){_e(u,f),a=!1},d(f){f&&Xe(e),u&&u.d(f),o=!1,l()}}}function Hv(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{open:a=!1}=e,{duration:o=.2}=e,{placement:l="left"}=e,{size:c=null}=e,u=!1;const f=qi();function d(v){if(u){const p=document.querySelector("body");p.style.overflow=v?"hidden":"auto"}}function m(){f("clickAway")}return So(()=>{u=!0,d(a)}),i.$$set=v=>{"open"in v&&t(0,a=v.open),"duration"in v&&t(5,o=v.duration),"placement"in v&&t(1,l=v.placement),"size"in v&&t(2,c=v.size),"$$scope"in v&&t(6,s=v.$$scope)},i.$$.update=()=>{i.$$.dirty&36&&t(3,n=`--duration: ${o}s; --size: ${c};`),i.$$.dirty&1&&d(a)},[a,l,c,n,m,o,s,r]}class jv extends Qe{constructor(e){super(),Je(this,e,Hv,Wv,qe,{open:0,duration:5,placement:1,size:2})}}function qv(i){let e,t;return e=new jv({props:{open:i[0],size:"30%"}}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.open=n[0]),e.$set(s)},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function Xv(i,e,t){let{open:n=!1}=e;return i.$$set=r=>{"open"in r&&t(0,n=r.open)},[n]}class Yv extends Qe{constructor(e){super(),Je(this,e,Xv,qv,qe,{open:0})}}function Zv(i){let e,t,n,r,s,a,o,l;return{c(){e=Dn("div"),t=Dn("span"),n=ot(),r=Dn("span"),s=ot(),a=Dn("span"),St(t,"class","line line-1 svelte-1ogitq8"),Yt(t,"active",i[0]),St(r,"class","line line-2 svelte-1ogitq8"),Yt(r,"active",i[0]),St(a,"class","line line-3 svelte-1ogitq8"),Yt(a,"active",i[0]),St(e,"id","menu-icon"),St(e,"style","--transition-time: 0.2s;"),St(e,"class","svelte-1ogitq8"),Yt(e,"active",i[0])},m(c,u){Ze(c,e,u),gn(e,t),gn(e,n),gn(e,r),gn(e,s),gn(e,a),o||(l=Tn(e,"click",i[1]),o=!0)},p(c,[u]){u&1&&Yt(t,"active",c[0]),u&1&&Yt(r,"active",c[0]),u&1&&Yt(a,"active",c[0]),u&1&&Yt(e,"active",c[0])},i:Et,o:Et,d(c){c&&Xe(e),o=!1,l()}}}function Kv(i,e,t){let{active:n}=e;function r(s){et.call(this,i,s)}return i.$$set=s=>{"active"in s&&t(0,n=s.active)},i.$$.update=()=>{i.$$.dirty&1&&console.log(n)},[n,r]}class Jv extends Qe{constructor(e){super(),Je(this,e,Kv,Zv,qe,{active:0})}}function Qv(i){let e,t;return e=new Vv({}),{c(){Re(e.$$.fragment)},m(n,r){Le(e,n,r),t=!0},i(n){t||(pe(e.$$.fragment,n),t=!0)},o(n){_e(e.$$.fragment,n),t=!1},d(n){De(e,n)}}}function $v(i){let e,t,n,r,s,a,o;return t=new Jv({props:{active:i[0]}}),t.$on("click",i[1]),r=new Yv({props:{open:i[0]}}),a=new s_({props:{$$slots:{default:[Qv]},$$scope:{ctx:i}}}),{c(){e=Dn("div"),Re(t.$$.fragment),n=ot(),Re(r.$$.fragment),s=ot(),Re(a.$$.fragment),St(e,"id","main"),St(e,"class","svelte-qjpt37")},m(l,c){Ze(l,e,c),Le(t,e,null),gn(e,n),Le(r,e,null),gn(e,s),Le(a,e,null),o=!0},p(l,[c]){const u={};c&1&&(u.active=l[0]),t.$set(u);const f={};c&1&&(f.open=l[0]),r.$set(f);const d={};c&4&&(d.$$scope={dirty:c,ctx:l}),a.$set(d)},i(l){o||(pe(t.$$.fragment,l),pe(r.$$.fragment,l),pe(a.$$.fragment,l),o=!0)},o(l){_e(t.$$.fragment,l),_e(r.$$.fragment,l),_e(a.$$.fragment,l),o=!1},d(l){l&&Xe(e),De(t),De(r),De(a)}}}function ey(i,e,t){let n=!1;return[n,()=>{console.log("dddd"),t(0,n=!n)}]}class ty extends Qe{constructor(e){super(),Je(this,e,ey,$v,qe,{})}}new ty({target:document.getElementById("app")});
