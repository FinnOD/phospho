(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function rt(){}const Yf=i=>i;function Ds(i,e){for(const t in e)i[t]=e[t];return i}function xu(i){return i()}function Fa(){return Object.create(null)}function Qt(i){i.forEach(xu)}function Fr(i){return typeof i=="function"}function Ze(i,e){return i!=i?e==e:i!==e||i&&typeof i=="object"||typeof i=="function"}function Zf(i){return Object.keys(i).length===0}function Bs(i,...e){if(i==null)return rt;const t=i.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function di(i){let e;return Bs(i,t=>e=t)(),e}function et(i,e,t){i.$$.on_destroy.push(Bs(e,t))}function pt(i,e,t,n){if(i){const r=Mu(i,e,t,n);return i[0](r)}}function Mu(i,e,t,n){return i[1]&&n?Ds(t.ctx.slice(),i[1](n(e))):t.ctx}function mt(i,e,t,n){if(i[2]&&n){const r=i[2](n(t));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|r[a];return s}return e.dirty|r}return e.dirty}function gt(i,e,t,n,r,s){if(r){const o=Mu(e,t,n,s);i.p(o,r)}}function _t(i){if(i.ctx.length>32){const e=[],t=i.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Kf(i){const e={};for(const t in i)e[t]=!0;return e}function Yt(i){return i==null?"":i}function nn(i,e,t){return i.set(t),e}function kr(i){return i&&Fr(i.destroy)?i.destroy:rt}const Su=typeof window<"u";let Jf=Su?()=>window.performance.now():()=>Date.now(),Eu=Su?i=>requestAnimationFrame(i):rt;const sr=new Set;function Au(i){sr.forEach(e=>{e.c(i)||(sr.delete(e),e.f())}),sr.size!==0&&Eu(Au)}function Qf(i){let e;return sr.size===0&&Eu(Au),{promise:new Promise(t=>{sr.add(e={c:i,f:t})}),abort(){sr.delete(e)}}}function Me(i,e){i.appendChild(e)}function Te(i,e,t){i.insertBefore(e,t||null)}function Ae(i){i.parentNode.removeChild(i)}function Vs(i,e){for(let t=0;t<i.length;t+=1)i[t]&&i[t].d(e)}function Fe(i){return document.createElement(i)}function Sn(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function sn(i){return document.createTextNode(i)}function Ue(){return sn(" ")}function gr(){return sn("")}function $e(i,e,t,n){return i.addEventListener(e,t,n),()=>i.removeEventListener(e,t,n)}function Oi(i){return function(e){return e.preventDefault(),i.call(this,e)}}function cr(i){return function(e){return e.stopPropagation(),i.call(this,e)}}function ee(i,e,t){t==null?i.removeAttribute(e):i.getAttribute(e)!==t&&i.setAttribute(e,t)}function ka(i,e){const t=Object.getOwnPropertyDescriptors(i.__proto__);for(const n in e)e[n]==null?i.removeAttribute(n):n==="style"?i.style.cssText=e[n]:n==="__value"?i.value=i[n]=e[n]:t[n]&&t[n].set?i[n]=e[n]:ee(i,n,e[n])}function $f(i){return i===""?null:+i}function ed(i){return Array.from(i.childNodes)}function ur(i,e){e=""+e,i.wholeText!==e&&(i.data=e)}function Ps(i,e){i.value=e==null?"":e}function Qe(i,e,t){i.classList[t?"add":"remove"](e)}function td(i,e,{bubbles:t=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(i,t,n,e),r}let zr;function Or(i){zr=i}function _r(){if(!zr)throw new Error("Function called outside component initialization");return zr}function nd(i){_r().$$.before_update.push(i)}function Hr(i){_r().$$.on_mount.push(i)}function At(i){_r().$$.on_destroy.push(i)}function Fi(){const i=_r();return(e,t,{cancelable:n=!1}={})=>{const r=i.$$.callbacks[e];if(r){const s=td(e,t,{cancelable:n});return r.slice().forEach(o=>{o.call(i,s)}),!s.defaultPrevented}return!0}}function En(i,e){return _r().$$.context.set(i,e),e}function Nn(i){return _r().$$.context.get(i)}function lt(i,e){const t=i.$$.callbacks[e.type];t&&t.slice().forEach(n=>n.call(this,e))}const Pr=[],zt=[],Ss=[],Jo=[],Tu=Promise.resolve();let Qo=!1;function Cu(){Qo||(Qo=!0,Tu.then(Lu))}function Ur(){return Cu(),Tu}function $o(i){Ss.push(i)}function Tn(i){Jo.push(i)}const co=new Set;let Jr=0;function Lu(){const i=zr;do{for(;Jr<Pr.length;){const e=Pr[Jr];Jr++,Or(e),id(e.$$)}for(Or(null),Pr.length=0,Jr=0;zt.length;)zt.pop()();for(let e=0;e<Ss.length;e+=1){const t=Ss[e];co.has(t)||(co.add(t),t())}Ss.length=0}while(Pr.length);for(;Jo.length;)Jo.pop()();Qo=!1,co.clear(),Or(i)}function id(i){if(i.fragment!==null){i.update(),Qt(i.before_update);const e=i.dirty;i.dirty=[-1],i.fragment&&i.fragment.p(i.ctx,e),i.after_update.forEach($o)}}const Es=new Set;let Ci;function Bt(){Ci={r:0,c:[],p:Ci}}function Vt(){Ci.r||Qt(Ci.c),Ci=Ci.p}function Q(i,e){i&&i.i&&(Es.delete(i),i.i(e))}function ne(i,e,t,n){if(i&&i.o){if(Es.has(i))return;Es.add(i),Ci.c.push(()=>{Es.delete(i),n&&(t&&i.d(1),n())}),i.o(e)}else n&&n()}function rd(i,e){const t={},n={},r={$$scope:1};let s=i.length;for(;s--;){const o=i[s],a=e[s];if(a){for(const l in o)l in a||(n[l]=1);for(const l in a)r[l]||(t[l]=a[l],r[l]=1);i[s]=a}else for(const l in o)r[l]=1}for(const o in n)o in t||(t[o]=void 0);return t}function Cn(i,e,t){const n=i.$$.props[e];n!==void 0&&(i.$$.bound[n]=t,t(i.$$.ctx[n]))}function Ie(i){i&&i.c()}function Pe(i,e,t,n){const{fragment:r,on_mount:s,on_destroy:o,after_update:a}=i.$$;r&&r.m(e,t),n||$o(()=>{const l=s.map(xu).filter(Fr);o?o.push(...l):Qt(l),i.$$.on_mount=[]}),a.forEach($o)}function Re(i,e){const t=i.$$;t.fragment!==null&&(Qt(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function sd(i,e){i.$$.dirty[0]===-1&&(Pr.push(i),Cu(),i.$$.dirty.fill(0)),i.$$.dirty[e/31|0]|=1<<e%31}function tt(i,e,t,n,r,s,o,a=[-1]){const l=zr;Or(i);const c=i.$$={fragment:null,ctx:null,props:s,update:rt,not_equal:r,bound:Fa(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Fa(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(i,e.props||{},(f,d,...m)=>{const g=m.length?m[0]:d;return c.ctx&&r(c.ctx[f],c.ctx[f]=g)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](g),u&&sd(i,f)),d}):[],c.update(),u=!0,Qt(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=ed(e.target);c.fragment&&c.fragment.l(f),f.forEach(Ae)}else c.fragment&&c.fragment.c();e.intro&&Q(i.$$.fragment),Pe(i,e.target,e.anchor,e.customElement),Lu()}Or(l)}class nt{$destroy(){Re(this,1),this.$destroy=rt}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!Zf(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ui=[];function Du(i,e){return{subscribe:Et(i,e).subscribe}}function Et(i,e=rt){let t;const n=new Set;function r(a){if(Ze(i,a)&&(i=a,t)){const l=!Ui.length;for(const c of n)c[1](),Ui.push(c,i);if(l){for(let c=0;c<Ui.length;c+=2)Ui[c][0](Ui[c+1]);Ui.length=0}}}function s(a){r(a(i))}function o(a,l=rt){const c=[a,l];return n.add(c),n.size===1&&(t=e(r)||rt),a(i),()=>{n.delete(c),n.size===0&&(t(),t=null)}}return{set:r,update:s,subscribe:o}}function Hs(i,e,t){const n=!Array.isArray(i),r=n?[i]:i,s=e.length<2;return Du(t,o=>{let a=!1;const l=[];let c=0,u=rt;const f=()=>{if(c)return;u();const m=e(n?l[0]:l,o);s?o(m):u=Fr(m)?m:rt},d=r.map((m,g)=>Bs(m,h=>{l[g]=h,c&=~(1<<g),a&&f()},()=>{c|=1<<g}));return a=!0,f(),function(){Qt(d),u()}})}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="144",Gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,za=1,ad=2,Pu=1,Ru=2,Rr=3,fr=0,mn=1,fi=2,hi=0,or=1,Ua=2,Ga=3,Ba=4,ld=5,ir=100,cd=101,ud=102,Va=103,Ha=104,fd=200,dd=201,hd=202,pd=203,Iu=204,Ou=205,md=206,gd=207,_d=208,vd=209,bd=210,wd=0,yd=1,xd=2,ea=3,Md=4,Sd=5,Ed=6,Ad=7,ga=0,Td=1,Cd=2,On=0,Ld=1,Dd=2,Pd=3,Nu=4,Rd=5,Fu=300,dr=301,hr=302,ta=303,na=304,Ws=306,ia=1e3,An=1001,ra=1002,Zt=1003,Wa=1004,ja=1005,fn=1006,Id=1007,js=1008,Ni=1009,Od=1010,Nd=1011,ku=1012,Fd=1013,Li=1014,Di=1015,Gr=1016,kd=1017,zd=1018,ar=1020,Ud=1021,Gd=1022,In=1023,Bd=1024,Vd=1025,Ri=1026,pr=1027,Hd=1028,Wd=1029,jd=1030,qd=1031,Xd=1033,uo=33776,fo=33777,ho=33778,po=33779,qa=35840,Xa=35841,Ya=35842,Za=35843,Yd=36196,Ka=37492,Ja=37496,Qa=37808,$a=37809,el=37810,tl=37811,nl=37812,il=37813,rl=37814,sl=37815,ol=37816,al=37817,ll=37818,cl=37819,ul=37820,fl=37821,dl=36492,pi=3e3,wt=3001,Zd=3200,Kd=3201,zu=0,Jd=1,Xn="srgb",Pi="srgb-linear",mo=7680,Qd=519,hl=35044,pl="300 es",sa=1035;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],go=Math.PI/180,ml=180/Math.PI;function Wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function $d(i,e){return(i%e+e)%e}function _o(i,e,t){return(1-t)*i+t*e}function gl(i){return(i&i-1)===0&&i!==0}function oa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qr(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dn{constructor(){dn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],h=r[0],p=r[3],_=r[6],b=r[1],x=r[4],w=r[7],y=r[2],S=r[5],I=r[8];return s[0]=o*h+a*b+l*y,s[3]=o*p+a*x+l*S,s[6]=o*_+a*w+l*I,s[1]=c*h+u*b+f*y,s[4]=c*p+u*x+f*S,s[7]=c*_+u*w+f*I,s[2]=d*h+m*b+g*y,s[5]=d*p+m*x+g*S,s[8]=d*_+m*w+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,m=c*s-o*l,g=t*f+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(r*c-u*n)*h,e[2]=(a*n-r*o)*h,e[3]=d*h,e[4]=(u*t-r*l)*h,e[5]=(r*s-a*t)*h,e[6]=m*h,e[7]=(n*l-c*t)*h,e[8]=(o*t-n*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Uu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const vo={[Xn]:{[Pi]:Ii},[Pi]:{[Xn]:As}},bn={legacyMode:!0,get workingColorSpace(){return Pi},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(vo[e]&&vo[e][t]!==void 0){const n=vo[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lt={r:0,g:0,b:0},wn={h:0,s:0,l:0},$r={h:0,s:0,l:0};function bo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function es(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Pi){return this.r=e,this.g=t,this.b=n,bn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Pi){if(e=$d(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=bo(o,s,e+1/3),this.g=bo(o,s,e),this.b=bo(o,s,e-1/3)}return bn.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,bn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,bn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,bn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,bn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xn){const n=Gu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return bn.fromWorkingColorSpace(es(this,Lt),e),Kt(Lt.r*255,0,255)<<16^Kt(Lt.g*255,0,255)<<8^Kt(Lt.b*255,0,255)<<0}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pi){bn.fromWorkingColorSpace(es(this,Lt),t);const n=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Pi){return bn.fromWorkingColorSpace(es(this,Lt),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Xn){return bn.fromWorkingColorSpace(es(this,Lt),e),e!==Xn?`color(${e} ${Lt.r} ${Lt.g} ${Lt.b})`:`rgb(${Lt.r*255|0},${Lt.g*255|0},${Lt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL($r);const n=_o(wn.h,$r.h,t),r=_o(wn.s,$r.s,t),s=_o(wn.l,$r.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ve.NAMES=Gu;let Vi;class Bu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=Br("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ii(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Vu{constructor(e=null){this.isSource=!0,this.uuid=Wr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wo(r[o].image)):s.push(wo(r[o]))}else s=wo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function wo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class _n extends ki{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=An,r=An,s=fn,o=js,a=In,l=Ni,c=1,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Wr(),this.name="",this.source=new Vu(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ia:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case ra:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ia:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case ra:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Fu;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],m=l[5],g=l[9],h=l[2],p=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,w=(m+1)/2,y=(_+1)/2,S=(u+d)/4,I=(f+h)/4,v=(g+p)/4;return x>w&&x>y?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=S/n,s=I/n):w>y?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=S/r,s=v/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=I/s,r=v/s),this.set(n,r,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(f-h)/b,this.z=(d-u)/b,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends ki{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new _n(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:fn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Vu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hu extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class th extends _n{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const d=s[o+0],m=s[o+1],g=s[o+2],h=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=h;return}if(f!==h||l!==d||c!==m||u!==g){let p=1-a;const _=l*d+c*m+u*g+f*h,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const y=Math.sqrt(x),S=Math.atan2(y,_*b);p=Math.sin(p*S)/y,a=Math.sin(a*S)/y}const w=a*b;if(l=l*p+d*w,c=c*p+m*w,u=u*p+g*w,f=f*p+h*w,p===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*m-c*d,e[t+1]=l*g+u*d+c*f-a*m,e[t+2]=c*g+u*m+a*d-l*f,e[t+3]=u*g-a*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),d=l(n/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f+d*m*g;break;case"YZX":this._x=d*u*f+c*m*g,this._y=c*m*f+d*u*g,this._z=c*u*g-d*m*f,this._w=c*u*f-d*m*g;break;case"XZY":this._x=d*u*f-c*m*g,this._y=c*m*f-d*u*g,this._z=c*u*g+d*m*f,this._w=c*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_l.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_l.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,f=l*r+s*n-o*t,d=-s*t-o*n-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yo.copy(this).projectOnVector(e),this.sub(yo)}reflect(e){return this.sub(yo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yo=new z,_l=new gi;class jr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],d=e[l+2];u<t&&(t=u),f<n&&(n=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),d=e.getZ(l);u<t&&(t=u),f<n&&(n=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)xi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(xi)}else n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox),xo.applyMatrix4(e.matrixWorld),this.union(xo);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Er),ts.subVectors(this.max,Er),Hi.subVectors(e.a,Er),Wi.subVectors(e.b,Er),ji.subVectors(e.c,Er),ri.subVectors(Wi,Hi),si.subVectors(ji,Wi),Mi.subVectors(Hi,ji);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Mi.z,Mi.y,ri.z,0,-ri.x,si.z,0,-si.x,Mi.z,0,-Mi.x,-ri.y,ri.x,0,-si.y,si.x,0,-Mi.y,Mi.x,0];return!Mo(t,Hi,Wi,ji,ts)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,Hi,Wi,ji,ts))?!1:(ns.crossVectors(ri,si),t=[ns.x,ns.y,ns.z],Mo(t,Hi,Wi,ji,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return xi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new z,new z,new z,new z,new z,new z,new z,new z],xi=new z,xo=new jr,Hi=new z,Wi=new z,ji=new z,ri=new z,si=new z,Mi=new z,Er=new z,ts=new z,ns=new z,Si=new z;function Mo(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const nh=new jr,vl=new z,is=new z,So=new z;class qs{constructor(e=new z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.add(So.multiplyScalar(r/n)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?is.set(0,0,1).multiplyScalar(e.radius):is.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(vl.copy(e.center).add(is)),this.expandByPoint(vl.copy(e.center).sub(is)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new z,Eo=new z,rs=new z,oi=new z,Ao=new z,ss=new z,To=new z;class _a{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.direction).multiplyScalar(t).add(this.origin),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Eo.copy(e).add(t).multiplyScalar(.5),rs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Eo);const s=e.distanceTo(t)*.5,o=-this.direction.dot(rs),a=oi.dot(this.direction),l=-oi.dot(rs),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,d,m,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(rs).multiplyScalar(d).add(Eo),m}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const n=Hn.dot(this.direction),r=Hn.dot(Hn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||n!==n)&&(n=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,n,r,s){Ao.subVectors(t,e),ss.subVectors(n,e),To.crossVectors(Ao,ss);let o=this.direction.dot(To),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(ss.crossVectors(oi,ss));if(l<0)return null;const c=a*this.direction.dot(Ao.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(To);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,f,d,m,g,h,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=m,_[7]=g,_[11]=h,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=d-h*c,t[9]=-a*l,t[2]=h-d*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d+h*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=h+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,m=l*f,g=c*u,h=c*f;t[0]=d-h*a,t[4]=-o*f,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=h-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,m=o*f,g=a*u,h=a*f;t[0]=l*u,t[4]=g*c-m,t[8]=d*c+h,t[1]=l*f,t[5]=h*c+d,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=h-d*f,t[8]=g*f+m,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,h=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+h,t[5]=o*u,t[9]=m*f-g,t[2]=g*f-m,t[6]=a*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ih,e,rh)}lookAt(e,t,n){const r=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),ai.crossVectors(n,en),ai.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),ai.crossVectors(n,en)),ai.normalize(),os.crossVectors(en,ai),r[0]=ai.x,r[4]=os.x,r[8]=en.x,r[1]=ai.y,r[5]=os.y,r[9]=en.y,r[2]=ai.z,r[6]=os.z,r[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],h=n[6],p=n[10],_=n[14],b=n[3],x=n[7],w=n[11],y=n[15],S=r[0],I=r[4],v=r[8],E=r[12],M=r[1],R=r[5],k=r[9],D=r[13],N=r[2],O=r[6],P=r[10],q=r[14],X=r[3],V=r[7],G=r[11],W=r[15];return s[0]=o*S+a*M+l*N+c*X,s[4]=o*I+a*R+l*O+c*V,s[8]=o*v+a*k+l*P+c*G,s[12]=o*E+a*D+l*q+c*W,s[1]=u*S+f*M+d*N+m*X,s[5]=u*I+f*R+d*O+m*V,s[9]=u*v+f*k+d*P+m*G,s[13]=u*E+f*D+d*q+m*W,s[2]=g*S+h*M+p*N+_*X,s[6]=g*I+h*R+p*O+_*V,s[10]=g*v+h*k+p*P+_*G,s[14]=g*E+h*D+p*q+_*W,s[3]=b*S+x*M+w*N+y*X,s[7]=b*I+x*R+w*O+y*V,s[11]=b*v+x*k+w*P+y*G,s[15]=b*E+x*D+w*q+y*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],m=e[14],g=e[3],h=e[7],p=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*a*d+n*c*d+r*a*m-n*l*m)+h*(+t*l*m-t*c*d+s*o*d-r*o*m+r*c*u-s*l*u)+p*(+t*c*f-t*a*m-s*o*f+n*o*m+s*a*u-n*c*u)+_*(-r*a*u-t*l*f+t*a*d+r*o*f-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],m=e[11],g=e[12],h=e[13],p=e[14],_=e[15],b=f*p*c-h*d*c+h*l*m-a*p*m-f*l*_+a*d*_,x=g*d*c-u*p*c-g*l*m+o*p*m+u*l*_-o*d*_,w=u*h*c-g*f*c+g*a*m-o*h*m-u*a*_+o*f*_,y=g*f*l-u*h*l-g*a*d+o*h*d+u*a*p-o*f*p,S=t*b+n*x+r*w+s*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/S;return e[0]=b*I,e[1]=(h*d*s-f*p*s-h*r*m+n*p*m+f*r*_-n*d*_)*I,e[2]=(a*p*s-h*l*s+h*r*c-n*p*c-a*r*_+n*l*_)*I,e[3]=(f*l*s-a*d*s-f*r*c+n*d*c+a*r*m-n*l*m)*I,e[4]=x*I,e[5]=(u*p*s-g*d*s+g*r*m-t*p*m-u*r*_+t*d*_)*I,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*_-t*l*_)*I,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*m+t*l*m)*I,e[8]=w*I,e[9]=(g*f*s-u*h*s-g*n*m+t*h*m+u*n*_-t*f*_)*I,e[10]=(o*h*s-g*a*s+g*n*c-t*h*c-o*n*_+t*a*_)*I,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*m-t*a*m)*I,e[12]=y*I,e[13]=(u*h*r-g*f*r+g*n*d-t*h*d-u*n*p+t*f*p)*I,e[14]=(g*a*r-o*h*r-g*n*l+t*h*l+o*n*p-t*a*p)*I,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*d+t*a*d)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,m=s*u,g=s*f,h=o*u,p=o*f,_=a*f,b=l*c,x=l*u,w=l*f,y=n.x,S=n.y,I=n.z;return r[0]=(1-(h+_))*y,r[1]=(m+w)*y,r[2]=(g-x)*y,r[3]=0,r[4]=(m-w)*S,r[5]=(1-(d+_))*S,r[6]=(p+b)*S,r[7]=0,r[8]=(g+x)*I,r[9]=(p-b)*I,r[10]=(1-(d+h))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const o=qi.set(r[4],r[5],r[6]).length(),a=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const c=1/s,u=1/o,f=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),f=(t+e)*l,d=(n+r)*c,m=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new z,yn=new ut,ih=new z(0,0,0),rh=new z(1,1,1),ai=new z,os=new z,en=new z,bl=new ut,wl=new gi;class qr{constructor(e=0,t=0,n=0,r=qr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}qr.DefaultOrder="XYZ";qr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class va{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sh=0;const yl=new z,Xi=new gi,Wn=new ut,as=new z,Ar=new z,oh=new z,ah=new gi,xl=new z(1,0,0),Ml=new z(0,1,0),Sl=new z(0,0,1),lh={type:"added"},El={type:"removed"};class ot extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new z,t=new qr,n=new gi,r=new z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new dn}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new va,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(Ml,e)}rotateZ(e){return this.rotateOnAxis(Sl,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(Ml,e)}translateZ(e){return this.translateOnAxis(Sl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ar,as,this.up):Wn.lookAt(as,Ar,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(El)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(El)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,oh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ot.DefaultUp=new z(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const xn=new z,jn=new z,Co=new z,qn=new z,Yi=new z,Zi=new z,Al=new z,Lo=new z,Do=new z,Po=new z;class Yn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),jn.subVectors(n,t),Co.subVectors(e,t);const o=xn.dot(xn),a=xn.dot(jn),l=xn.dot(Co),c=jn.dot(jn),u=jn.dot(Co),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn),qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,qn),l.set(0,0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),jn.subVectors(e,t),xn.cross(jn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),xn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Yn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,n),Zi.subVectors(s,n),Lo.subVectors(e,n);const l=Yi.dot(Lo),c=Zi.dot(Lo);if(l<=0&&c<=0)return t.copy(n);Do.subVectors(e,r);const u=Yi.dot(Do),f=Zi.dot(Do);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Yi,o);Po.subVectors(e,s);const m=Yi.dot(Po),g=Zi.dot(Po);if(g>=0&&m<=g)return t.copy(s);const h=m*c-l*g;if(h<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zi,a);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Al.subVectors(s,r),a=(f-u)/(f-u+(m-g)),t.copy(r).addScaledVector(Al,a);const _=1/(p+h+d);return o=h*_,a=d*_,t.copy(n).addScaledVector(Yi,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ch=0;class vr extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=or,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Iu,this.blendDst=Ou,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mo,this.stencilZFail=mo,this.stencilZPass=mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==or&&(n.blending=this.blending),this.side!==fr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ba extends vr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new z,ls=new ke;class Ln{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=hl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Wu extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ju extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let uh=0;const cn=new ut,Ro=new ot,Ki=new z,tn=new jr,Tr=new jr,Rt=new z;class on extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?ju:Wu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new dn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Ro.lookAt(e),Ro.updateMatrix(),this.applyMatrix4(Ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(tn.min,Tr.min),tn.expandByPoint(Rt),Rt.addVectors(tn.max,Tr.max),tn.expandByPoint(Rt)):(tn.expandByPoint(Tr.min),tn.expandByPoint(Tr.max))}tn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Ki.fromBufferAttribute(e,c),Rt.add(Ki)),r=Math.max(r,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let M=0;M<a;M++)c[M]=new z,u[M]=new z;const f=new z,d=new z,m=new z,g=new ke,h=new ke,p=new ke,_=new z,b=new z;function x(M,R,k){f.fromArray(r,M*3),d.fromArray(r,R*3),m.fromArray(r,k*3),g.fromArray(o,M*2),h.fromArray(o,R*2),p.fromArray(o,k*2),d.sub(f),m.sub(f),h.sub(g),p.sub(g);const D=1/(h.x*p.y-p.x*h.y);!isFinite(D)||(_.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(D),b.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(D),c[M].add(_),c[R].add(_),c[k].add(_),u[M].add(b),u[R].add(b),u[k].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let M=0,R=w.length;M<R;++M){const k=w[M],D=k.start,N=k.count;for(let O=D,P=D+N;O<P;O+=3)x(n[O+0],n[O+1],n[O+2])}const y=new z,S=new z,I=new z,v=new z;function E(M){I.fromArray(s,M*3),v.copy(I);const R=c[M];y.copy(R),y.sub(I.multiplyScalar(I.dot(R))).normalize(),S.crossVectors(v,R);const D=S.dot(u[M])<0?-1:1;l[M*4]=y.x,l[M*4+1]=y.y,l[M*4+2]=y.z,l[M*4+3]=D}for(let M=0,R=w.length;M<R;++M){const k=w[M],D=k.start,N=k.count;for(let O=D,P=D+N;O<P;O+=3)E(n[O+0]),E(n[O+1]),E(n[O+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),h=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,h),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(h,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let m=0,g=0;for(let h=0,p=l.length;h<p;h++){a.isInterleavedBufferAttribute?m=l[h]*a.data.stride+a.offset:m=l[h]*u;for(let _=0;_<u;_++)d[g++]=c[m++]}return new Ln(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],m=e(d,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new ut,Ji=new _a,Io=new qs,li=new z,ci=new z,ui=new z,Oo=new z,No=new z,Fo=new z,cs=new z,us=new z,fs=new z,ds=new ke,hs=new ke,ps=new ke,ko=new z,ms=new z;class hn extends ot{constructor(e=new on,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(s),e.ray.intersectsSphere(Io)===!1)||(Tl.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(Tl),n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const _=m[h],b=r[_.materialIndex],x=Math.max(_.start,g.start),w=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let y=x,S=w;y<S;y+=3){const I=a.getX(y),v=a.getX(y+1),E=a.getX(y+2);o=gs(this,b,e,Ji,l,c,u,f,d,I,v,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const h=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=h,b=p;_<b;_+=3){const x=a.getX(_),w=a.getX(_+1),y=a.getX(_+2);o=gs(this,r,e,Ji,l,c,u,f,d,x,w,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let h=0,p=m.length;h<p;h++){const _=m[h],b=r[_.materialIndex],x=Math.max(_.start,g.start),w=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=x,S=w;y<S;y+=3){const I=y,v=y+1,E=y+2;o=gs(this,b,e,Ji,l,c,u,f,d,I,v,E),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const h=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=h,b=p;_<b;_+=3){const x=_,w=_+1,y=_+2;o=gs(this,r,e,Ji,l,c,u,f,d,x,w,y),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function fh(i,e,t,n,r,s,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==fi,a),l===null)return null;ms.copy(a),ms.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:i}}function gs(i,e,t,n,r,s,o,a,l,c,u,f){li.fromBufferAttribute(r,c),ci.fromBufferAttribute(r,u),ui.fromBufferAttribute(r,f);const d=i.morphTargetInfluences;if(s&&d){cs.set(0,0,0),us.set(0,0,0),fs.set(0,0,0);for(let g=0,h=s.length;g<h;g++){const p=d[g],_=s[g];p!==0&&(Oo.fromBufferAttribute(_,c),No.fromBufferAttribute(_,u),Fo.fromBufferAttribute(_,f),o?(cs.addScaledVector(Oo,p),us.addScaledVector(No,p),fs.addScaledVector(Fo,p)):(cs.addScaledVector(Oo.sub(li),p),us.addScaledVector(No.sub(ci),p),fs.addScaledVector(Fo.sub(ui),p)))}li.add(cs),ci.add(us),ui.add(fs)}i.isSkinnedMesh&&(i.boneTransform(c,li),i.boneTransform(u,ci),i.boneTransform(f,ui));const m=fh(i,e,t,n,li,ci,ui,ko);if(m){a&&(ds.fromBufferAttribute(a,c),hs.fromBufferAttribute(a,u),ps.fromBufferAttribute(a,f),m.uv=Yn.getUV(ko,li,ci,ui,ds,hs,ps,new ke)),l&&(ds.fromBufferAttribute(l,c),hs.fromBufferAttribute(l,u),ps.fromBufferAttribute(l,f),m.uv2=Yn.getUV(ko,li,ci,ui,ds,hs,ps,new ke));const g={a:c,b:u,c:f,normal:new z,materialIndex:0};Yn.getNormal(li,ci,ui,g.normal),m.face=g}return m}class Xr extends on{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(u,3)),this.setAttribute("uv",new Pt(f,2));function g(h,p,_,b,x,w,y,S,I,v,E){const M=w/I,R=y/v,k=w/2,D=y/2,N=S/2,O=I+1,P=v+1;let q=0,X=0;const V=new z;for(let G=0;G<P;G++){const W=G*R-D;for(let te=0;te<O;te++){const oe=te*M-k;V[h]=oe*b,V[p]=W*x,V[_]=N,c.push(V.x,V.y,V.z),V[h]=0,V[p]=0,V[_]=S>0?1:-1,u.push(V.x,V.y,V.z),f.push(te/I),f.push(1-G/v),q+=1}}for(let G=0;G<v;G++)for(let W=0;W<I;W++){const te=d+W+O*G,oe=d+W+O*(G+1),re=d+(W+1)+O*(G+1),we=d+(W+1)+O*G;l.push(te,oe,we),l.push(oe,re,we),X+=6}a.addGroup(m,X,E),m+=X,d+=q}}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=mr(i[t]);for(const r in n)e[r]=n[r]}return e}function dh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const qu={clone:mr,merge:Gt};var hh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends vr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hh,this.fragmentShader=ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=dh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wa extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class rn extends wa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(go*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=90,$i=1;class mh extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new rn(Qi,$i,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new z(1,0,0)),this.add(r);const s=new rn(Qi,$i,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new z(-1,0,0)),this.add(s);const o=new rn(Qi,$i,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new z(0,1,0)),this.add(o);const a=new rn(Qi,$i,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new z(0,-1,0)),this.add(a);const l=new rn(Qi,$i,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new z(0,0,1)),this.add(l);const c=new rn(Qi,$i,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new z(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Xu extends _n{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:dr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gh extends mi{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xr(5,5,5),s=new Kn({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:hi});s.uniforms.tEquirect.value=t;const o=new hn(r,s),a=t.minFilter;return t.minFilter===js&&(t.minFilter=fn),new mh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const zo=new z,_h=new z,vh=new dn;class Ei{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zo.subVectors(n,t).cross(_h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(zo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vh.getNormalMatrix(e),r=this.coplanarPoint(zo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new qs,_s=new z;class Xs{constructor(e=new Ei,t=new Ei,n=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],d=n[8],m=n[9],g=n[10],h=n[11],p=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-r,f-l,h-d,x-p).normalize(),t[1].setComponents(a+r,f+l,h+d,x+p).normalize(),t[2].setComponents(a+s,f+c,h+m,x+_).normalize(),t[3].setComponents(a-s,f-c,h-m,x-_).normalize(),t[4].setComponents(a-o,f-u,h-g,x-b).normalize(),t[5].setComponents(a+o,f+u,h+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_s.x=r.normal.x>0?e.max.x:e.min.x,_s.y=r.normal.y>0?e.max.y:e.min.y,_s.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Yu(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,d=c.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,m=u.updateRange;i.bindBuffer(f,c),m.count===-1?i.bufferSubData(f,0,d):(t?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ya extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,m=[],g=[],h=[],p=[];for(let _=0;_<u;_++){const b=_*d-o;for(let x=0;x<c;x++){const w=x*f-s;g.push(w,-b,0),h.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,w=b+c*(_+1),y=b+1+c*(_+1),S=b+1+c*_;m.push(x,w,S),m.push(w,y,S)}this.setIndex(m),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(p,2))}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}var wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Eh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ah="vec3 transformed = vec3( position );",Th=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ch=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Lh=`#ifdef USE_IRIDESCENCE
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
#endif`,Dh=`#ifdef USE_BUMPMAP
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
#endif`,Ph=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ih=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Uh=`#define PI 3.141592653589793
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
}`,Gh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bh=`vec3 transformedNormal = objectNormal;
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
#endif`,Vh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yh=`#ifdef USE_ENVMAP
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
#endif`,Zh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kh=`#ifdef USE_ENVMAP
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
#endif`,Jh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,$h=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ip=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,op=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,lp=`uniform bool receiveShadow;
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
#endif`,cp=`#if defined( USE_ENVMAP )
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
#endif`,up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,pp=`PhysicalMaterial material;
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
#endif`,mp=`struct PhysicalMaterial {
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,bp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
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
#endif`,Pp=`#ifdef USE_MORPHTARGETS
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
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Ip=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Op=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$p=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,dm=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,hm=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,pm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,mm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,gm=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#include <envmap_common_pars_fragment>
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
}`,xm=`#include <common>
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
}`,Mm=`#if DEPTH_PACKING == 3200
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
}`,Sm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cm=`uniform float scale;
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,km=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Um=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Bm=`#define STANDARD
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
}`,Vm=`#define TOON
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
}`,Hm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,jm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Xm=`uniform vec3 color;
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
}`,Ym=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,qe={alphamap_fragment:wh,alphamap_pars_fragment:yh,alphatest_fragment:xh,alphatest_pars_fragment:Mh,aomap_fragment:Sh,aomap_pars_fragment:Eh,begin_vertex:Ah,beginnormal_vertex:Th,bsdfs:Ch,iridescence_fragment:Lh,bumpmap_pars_fragment:Dh,clipping_planes_fragment:Ph,clipping_planes_pars_fragment:Rh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Oh,color_fragment:Nh,color_pars_fragment:Fh,color_pars_vertex:kh,color_vertex:zh,common:Uh,cube_uv_reflection_fragment:Gh,defaultnormal_vertex:Bh,displacementmap_pars_vertex:Vh,displacementmap_vertex:Hh,emissivemap_fragment:Wh,emissivemap_pars_fragment:jh,encodings_fragment:qh,encodings_pars_fragment:Xh,envmap_fragment:Yh,envmap_common_pars_fragment:Zh,envmap_pars_fragment:Kh,envmap_pars_vertex:Jh,envmap_physical_pars_fragment:cp,envmap_vertex:Qh,fog_vertex:$h,fog_pars_vertex:ep,fog_fragment:tp,fog_pars_fragment:np,gradientmap_pars_fragment:ip,lightmap_fragment:rp,lightmap_pars_fragment:sp,lights_lambert_fragment:op,lights_lambert_pars_fragment:ap,lights_pars_begin:lp,lights_toon_fragment:up,lights_toon_pars_fragment:fp,lights_phong_fragment:dp,lights_phong_pars_fragment:hp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:bp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:xp,map_fragment:Mp,map_pars_fragment:Sp,map_particle_fragment:Ep,map_particle_pars_fragment:Ap,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:Cp,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Pp,morphtarget_vertex:Rp,normal_fragment_begin:Ip,normal_fragment_maps:Op,normal_pars_fragment:Np,normal_pars_vertex:Fp,normal_vertex:kp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Vp,output_fragment:Hp,packing:Wp,premultiplied_alpha_fragment:jp,project_vertex:qp,dithering_fragment:Xp,dithering_pars_fragment:Yp,roughnessmap_fragment:Zp,roughnessmap_pars_fragment:Kp,shadowmap_pars_fragment:Jp,shadowmap_pars_vertex:Qp,shadowmap_vertex:$p,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:rm,specularmap_fragment:sm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:hm,uv2_pars_fragment:pm,uv2_pars_vertex:mm,uv2_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:bm,cube_vert:wm,cube_frag:ym,depth_vert:xm,depth_frag:Mm,distanceRGBA_vert:Sm,distanceRGBA_frag:Em,equirect_vert:Am,equirect_frag:Tm,linedashed_vert:Cm,linedashed_frag:Lm,meshbasic_vert:Dm,meshbasic_frag:Pm,meshlambert_vert:Rm,meshlambert_frag:Im,meshmatcap_vert:Om,meshmatcap_frag:Nm,meshnormal_vert:Fm,meshnormal_frag:km,meshphong_vert:zm,meshphong_frag:Um,meshphysical_vert:Gm,meshphysical_frag:Bm,meshtoon_vert:Vm,meshtoon_frag:Hm,points_vert:Wm,points_frag:jm,shadow_vert:qm,shadow_frag:Xm,sprite_vert:Ym,sprite_frag:Zm},de={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new dn},uv2Transform:{value:new dn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dn}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new dn}}},Rn={basic:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Gt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Gt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Gt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Ve(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Gt([de.points,de.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Gt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Gt([de.common,de.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Gt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Gt([de.sprite,de.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new dn},t2D:{value:null}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},cube:{uniforms:Gt([de.envmap,{opacity:{value:1}}]),vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Gt([de.common,de.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Gt([de.lights,de.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Rn.physical={uniforms:Gt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};function Km(i,e,t,n,r,s){const o=new Ve(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function m(h,p){let _=!1,b=p.isScene===!0?p.background:null;b&&b.isTexture&&(b=e.get(b));const x=i.xr,w=x.getSession&&x.getSession();w&&w.environmentBlendMode==="additive"&&(b=null),b===null?g(o,a):b&&b.isColor&&(g(b,1),_=!0),(i.autoClear||_)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ws)?(c===void 0&&(c=new hn(new Xr(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:mr(Rn.cube.uniforms),vertexShader:Rn.cube.vertexShader,fragmentShader:Rn.cube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,(u!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),h.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new hn(new ya(2,2),new Kn({name:"BackgroundMaterial",uniforms:mr(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=b,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),h.unshift(l,l.geometry,l.material,0,0,null))}function g(h,p){t.buffers.color.setClear(h.r,h.g,h.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(h,p=1){o.set(h),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(h){a=h,g(o,a)},render:m}}function Jm(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(N,O,P,q,X){let V=!1;if(o){const G=h(q,P,O);c!==G&&(c=G,m(c.object)),V=_(N,q,P,X),V&&b(N,q,P,X)}else{const G=O.wireframe===!0;(c.geometry!==q.id||c.program!==P.id||c.wireframe!==G)&&(c.geometry=q.id,c.program=P.id,c.wireframe=G,V=!0)}X!==null&&t.update(X,34963),(V||u)&&(u=!1,v(N,O,P,q),X!==null&&i.bindBuffer(34963,t.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function h(N,O,P){const q=P.wireframe===!0;let X=a[N.id];X===void 0&&(X={},a[N.id]=X);let V=X[O.id];V===void 0&&(V={},X[O.id]=V);let G=V[q];return G===void 0&&(G=p(d()),V[q]=G),G}function p(N){const O=[],P=[],q=[];for(let X=0;X<r;X++)O[X]=0,P[X]=0,q[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:P,attributeDivisors:q,object:N,attributes:{},index:null}}function _(N,O,P,q){const X=c.attributes,V=O.attributes;let G=0;const W=P.getAttributes();for(const te in W)if(W[te].location>=0){const re=X[te];let we=V[te];if(we===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(we=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(we=N.instanceColor)),re===void 0||re.attribute!==we||we&&re.data!==we.data)return!0;G++}return c.attributesNum!==G||c.index!==q}function b(N,O,P,q){const X={},V=O.attributes;let G=0;const W=P.getAttributes();for(const te in W)if(W[te].location>=0){let re=V[te];re===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));const we={};we.attribute=re,re&&re.data&&(we.data=re.data),X[te]=we,G++}c.attributes=X,c.attributesNum=G,c.index=q}function x(){const N=c.newAttributes;for(let O=0,P=N.length;O<P;O++)N[O]=0}function w(N){y(N,0)}function y(N,O){const P=c.newAttributes,q=c.enabledAttributes,X=c.attributeDivisors;P[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),X[N]!==O&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,O),X[N]=O)}function S(){const N=c.newAttributes,O=c.enabledAttributes;for(let P=0,q=O.length;P<q;P++)O[P]!==N[P]&&(i.disableVertexAttribArray(P),O[P]=0)}function I(N,O,P,q,X,V){n.isWebGL2===!0&&(P===5124||P===5125)?i.vertexAttribIPointer(N,O,P,X,V):i.vertexAttribPointer(N,O,P,q,X,V)}function v(N,O,P,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=q.attributes,V=P.getAttributes(),G=O.defaultAttributeValues;for(const W in V){const te=V[W];if(te.location>=0){let oe=X[W];if(oe===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor)),oe!==void 0){const re=oe.normalized,we=oe.itemSize,B=t.get(oe);if(B===void 0)continue;const _e=B.buffer,Ee=B.type,pe=B.bytesPerElement;if(oe.isInterleavedBufferAttribute){const ye=oe.data,Xe=ye.stride,Y=oe.offset;if(ye.isInstancedInterleavedBuffer){for(let ue=0;ue<te.locationSize;ue++)y(te.location+ue,ye.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ue=0;ue<te.locationSize;ue++)w(te.location+ue);i.bindBuffer(34962,_e);for(let ue=0;ue<te.locationSize;ue++)I(te.location+ue,we/te.locationSize,Ee,re,Xe*pe,(Y+we/te.locationSize*ue)*pe)}else{if(oe.isInstancedBufferAttribute){for(let ye=0;ye<te.locationSize;ye++)y(te.location+ye,oe.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ye=0;ye<te.locationSize;ye++)w(te.location+ye);i.bindBuffer(34962,_e);for(let ye=0;ye<te.locationSize;ye++)I(te.location+ye,we/te.locationSize,Ee,re,we*pe,we/te.locationSize*ye*pe)}}else if(G!==void 0){const re=G[W];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(te.location,re);break;case 3:i.vertexAttrib3fv(te.location,re);break;case 4:i.vertexAttrib4fv(te.location,re);break;default:i.vertexAttrib1fv(te.location,re)}}}}S()}function E(){k();for(const N in a){const O=a[N];for(const P in O){const q=O[P];for(const X in q)g(q[X].object),delete q[X];delete O[P]}delete a[N]}}function M(N){if(a[N.id]===void 0)return;const O=a[N.id];for(const P in O){const q=O[P];for(const X in q)g(q[X].object),delete q[X];delete O[P]}delete a[N.id]}function R(N){for(const O in a){const P=a[O];if(P[N.id]===void 0)continue;const q=P[N.id];for(const X in q)g(q[X].object),delete q[X];delete P[N.id]}}function k(){D(),u=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:k,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:w,disableUnusedAttributes:S}}function Qm(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function $m(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),d=i.getParameter(35660),m=i.getParameter(3379),g=i.getParameter(34076),h=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),x=d>0,w=o||e.has("OES_texture_float"),y=x&&w,S=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:y,maxSamples:S}}function eg(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ei,a=new dn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const g=f.length!==0||d||n!==0||r;return r=d,t=u(f,m,0),n=f.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(f,d,m){const g=f.clippingPlanes,h=f.clipIntersection,p=f.clipShadows,_=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const b=s?0:n,x=b*4;let w=_.clippingState||null;l.value=w,w=u(g,d,x,m);for(let y=0;y!==x;++y)w[y]=t[y];_.clippingState=w,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,m,g){const h=f!==null?f.length:0;let p=null;if(h!==0){if(p=l.value,g!==!0||p===null){const _=m+h*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,w=m;x!==h;++x,w+=4)o.copy(f[x]).applyMatrix4(b,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,p}}function tg(i){let e=new WeakMap;function t(o,a){return a===ta?o.mapping=dr:a===na&&(o.mapping=hr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ta||a===na)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gh(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ys extends wa{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,Cl=[.125,.215,.35,.446,.526,.582],Ti=20,Uo=new Ys,Ll=new Ve;let Go=null;const Ai=(1+Math.sqrt(5))/2,tr=1/Ai,Dl=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Ai,tr),new z(0,Ai,-tr),new z(tr,0,Ai),new z(-tr,0,Ai),new z(Ai,tr,0),new z(-Ai,tr,0)];class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Go=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Go),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dr||e.mapping===hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Go=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Gr,format:In,encoding:pi,depthBuffer:!1},r=Rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ng(s)),this._blurMaterial=ig(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,n,r){const a=new rn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ll),u.toneMapping=On,u.autoClear=!1;const m=new ba({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new hn(new Xr,m);let h=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,h=!0):(m.color.copy(Ll),h=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;vs(r,b*x,_>2?x:0,x,x),u.setRenderTarget(r),h&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===dr||e.mapping===hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Uo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Dl[(r-1)%Dl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new hn(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ti-1),h=s/g,p=isFinite(s)?1+Math.floor(u*h):Ti;p>Ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ti}`);const _=[];let b=0;for(let I=0;I<Ti;++I){const v=I/h,E=Math.exp(-v*v/2);_.push(E),I===0?b+=E:I<p&&(b+=2*E)}for(let I=0;I<_.length;I++)_[I]=_[I]/b;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const w=this._sizeLods[r],y=3*w*(r>x-rr?r-x+rr:0),S=4*(this._cubeSize-w);vs(t,y,S,3*w,2*w),l.setRenderTarget(t),l.render(f,Uo)}}function ng(i){const e=[],t=[],n=[];let r=i;const s=i-rr+1+Cl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-rr?l=Cl[o-i+rr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,h=3,p=2,_=1,b=new Float32Array(h*g*m),x=new Float32Array(p*g*m),w=new Float32Array(_*g*m);for(let S=0;S<m;S++){const I=S%3*2/3-1,v=S>2?0:-1,E=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];b.set(E,h*g*S),x.set(d,p*g*S);const M=[S,S,S,S,S,S];w.set(M,_*g*S)}const y=new on;y.setAttribute("position",new Ln(b,h)),y.setAttribute("uv",new Ln(x,p)),y.setAttribute("faceIndex",new Ln(w,_)),e.push(y),r>rr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rl(i,e,t){const n=new mi(i,e,t);return n.texture.mapping=Ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ig(i,e,t){const n=new Float32Array(Ti),r=new z(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xa(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Il(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ol(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function rg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ta||l===na,u=l===dr||l===hr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Pl(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Pl(i));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function sg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function og(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const m=f.morphAttributes;for(const g in m){const h=m[g];for(let p=0,_=h.length;p<_;p++)e.update(h[p],34962)}}function c(f){const d=[],m=f.index,g=f.attributes.position;let h=0;if(m!==null){const b=m.array;h=m.version;for(let x=0,w=b.length;x<w;x+=3){const y=b[x+0],S=b[x+1],I=b[x+2];d.push(y,S,S,I,I,y)}}else{const b=g.array;h=g.version;for(let x=0,w=b.length/3-1;x<w;x+=3){const y=x+0,S=x+1,I=x+2;d.push(y,S,S,I,I,y)}}const p=new(Uu(d)?ju:Wu)(d,1);p.version=h;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ag(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,m){i.drawElements(s,m,a,d*l),t.update(m,s,1)}function f(d,m,g){if(g===0)return;let h,p;if(r)h=i,p="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,m,a,d*l,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function lg(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function cg(i,e){return i[0]-e[0]}function ug(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fg(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new It,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,d){const m=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,h=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==h){let O=function(){D.dispose(),s.delete(u),u.removeEventListener("dispose",O)};p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let E=0;x===!0&&(E=1),w===!0&&(E=2),y===!0&&(E=3);let M=u.attributes.position.count*E,R=1;M>e.maxTextureSize&&(R=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const k=new Float32Array(M*R*4*h),D=new Hu(k,M,R,h);D.type=Di,D.needsUpdate=!0;const N=E*4;for(let P=0;P<h;P++){const q=S[P],X=I[P],V=v[P],G=M*R*4*P;for(let W=0;W<q.count;W++){const te=W*N;x===!0&&(o.fromBufferAttribute(q,W),k[G+te+0]=o.x,k[G+te+1]=o.y,k[G+te+2]=o.z,k[G+te+3]=0),w===!0&&(o.fromBufferAttribute(X,W),k[G+te+4]=o.x,k[G+te+5]=o.y,k[G+te+6]=o.z,k[G+te+7]=0),y===!0&&(o.fromBufferAttribute(V,W),k[G+te+8]=o.x,k[G+te+9]=o.y,k[G+te+10]=o.z,k[G+te+11]=V.itemSize===4?o.w:1)}}p={count:h,texture:D,size:new ke(M,R)},s.set(u,p),u.addEventListener("dispose",O)}let _=0;for(let x=0;x<m.length;x++)_+=m[x];const b=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(i,"morphTargetBaseInfluence",b),d.getUniforms().setValue(i,"morphTargetInfluences",m),d.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=m===void 0?0:m.length;let h=n[u.id];if(h===void 0||h.length!==g){h=[];for(let w=0;w<g;w++)h[w]=[w,0];n[u.id]=h}for(let w=0;w<g;w++){const y=h[w];y[0]=w,y[1]=m[w]}h.sort(ug);for(let w=0;w<8;w++)w<g&&h[w][1]?(a[w][0]=h[w][0],a[w][1]=h[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(cg);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let w=0;w<8;w++){const y=a[w],S=y[0],I=y[1];S!==Number.MAX_SAFE_INTEGER&&I?(p&&u.getAttribute("morphTarget"+w)!==p[S]&&u.setAttribute("morphTarget"+w,p[S]),_&&u.getAttribute("morphNormal"+w)!==_[S]&&u.setAttribute("morphNormal"+w,_[S]),r[w]=I,b+=I):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),_&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}const x=u.morphTargetsRelative?1:1-b;d.getUniforms().setValue(i,"morphTargetBaseInfluence",x),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function dg(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Zu=new _n,Ku=new Hu,Ju=new th,Qu=new Xu,Nl=[],Fl=[],kl=new Float32Array(16),zl=new Float32Array(9),Ul=new Float32Array(4);function br(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Nl[r];if(s===void 0&&(s=new Float32Array(r),Nl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Zs(i,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function hg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function mg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function gg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function _g(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),jt(t,n)}}function vg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,n))return;zl.set(n),i.uniformMatrix3fv(this.addr,!1,zl),jt(t,n)}}function bg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),jt(t,n)}}function wg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function yg(i,e){const t=this.cache;Wt(t,e)||(i.uniform2iv(this.addr,e),jt(t,e))}function xg(i,e){const t=this.cache;Wt(t,e)||(i.uniform3iv(this.addr,e),jt(t,e))}function Mg(i,e){const t=this.cache;Wt(t,e)||(i.uniform4iv(this.addr,e),jt(t,e))}function Sg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Eg(i,e){const t=this.cache;Wt(t,e)||(i.uniform2uiv(this.addr,e),jt(t,e))}function Ag(i,e){const t=this.cache;Wt(t,e)||(i.uniform3uiv(this.addr,e),jt(t,e))}function Tg(i,e){const t=this.cache;Wt(t,e)||(i.uniform4uiv(this.addr,e),jt(t,e))}function Cg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Zu,r)}function Lg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ju,r)}function Dg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Qu,r)}function Pg(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ku,r)}function Rg(i){switch(i){case 5126:return hg;case 35664:return pg;case 35665:return mg;case 35666:return gg;case 35674:return _g;case 35675:return vg;case 35676:return bg;case 5124:case 35670:return wg;case 35667:case 35671:return yg;case 35668:case 35672:return xg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return Eg;case 36295:return Ag;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Pg}}function Ig(i,e){i.uniform1fv(this.addr,e)}function Og(i,e){const t=br(e,this.size,2);i.uniform2fv(this.addr,t)}function Ng(i,e){const t=br(e,this.size,3);i.uniform3fv(this.addr,t)}function Fg(i,e){const t=br(e,this.size,4);i.uniform4fv(this.addr,t)}function kg(i,e){const t=br(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function zg(i,e){const t=br(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Ug(i,e){const t=br(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gg(i,e){i.uniform1iv(this.addr,e)}function Bg(i,e){i.uniform2iv(this.addr,e)}function Vg(i,e){i.uniform3iv(this.addr,e)}function Hg(i,e){i.uniform4iv(this.addr,e)}function Wg(i,e){i.uniform1uiv(this.addr,e)}function jg(i,e){i.uniform2uiv(this.addr,e)}function qg(i,e){i.uniform3uiv(this.addr,e)}function Xg(i,e){i.uniform4uiv(this.addr,e)}function Yg(i,e,t){const n=e.length,r=Zs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Zu,r[s])}function Zg(i,e,t){const n=e.length,r=Zs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Ju,r[s])}function Kg(i,e,t){const n=e.length,r=Zs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Qu,r[s])}function Jg(i,e,t){const n=e.length,r=Zs(t,n);i.uniform1iv(this.addr,r);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Ku,r[s])}function Qg(i){switch(i){case 5126:return Ig;case 35664:return Og;case 35665:return Ng;case 35666:return Fg;case 35674:return kg;case 35675:return zg;case 35676:return Ug;case 5124:case 35670:return Gg;case 35667:case 35671:return Bg;case 35668:case 35672:return Vg;case 35669:case 35673:return Hg;case 5125:return Wg;case 36294:return jg;case 36295:return qg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Kg;case 36289:case 36303:case 36311:case 36292:return Jg}}class $g{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Rg(t.type)}}class e_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Qg(t.type)}}class t_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Gl(i,e){i.seq.push(e),i.map[e.id]=e}function n_(i,e,t){const n=i.name,r=n.length;for(Bo.lastIndex=0;;){const s=Bo.exec(n),o=Bo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Gl(t,c===void 0?new $g(a,i,e):new e_(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new t_(a),Gl(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);n_(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Bl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let i_=0;function r_(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function s_(i){switch(i){case pi:return["Linear","( value )"];case wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Vl(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+r_(i.getShaderSource(e),o)}else return r}function o_(i,e){const t=s_(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function a_(i,e){let t;switch(e){case Ld:t="Linear";break;case Dd:t="Reinhard";break;case Pd:t="OptimizedCineon";break;case Nu:t="ACESFilmic";break;case Rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function l_(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ir).join(`
`)}function c_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u_(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ir(i){return i!==""}function Hl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function aa(i){return i.replace(f_,d_)}function d_(i,e){const t=qe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return aa(t)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(i){return i.replace(h_,p_)}function p_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ql(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function g_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case dr:case hr:e="ENVMAP_TYPE_CUBE";break;case Ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function __(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case hr:e="ENVMAP_MODE_REFRACTION";break}return e}function v_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ga:e="ENVMAP_BLENDING_MULTIPLY";break;case Td:e="ENVMAP_BLENDING_MIX";break;case Cd:e="ENVMAP_BLENDING_ADD";break}return e}function b_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function w_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=m_(t),c=g_(t),u=__(t),f=v_(t),d=b_(t),m=t.isWebGL2?"":l_(t),g=c_(s),h=r.createProgram();let p,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Ir).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ir).join(`
`),_.length>0&&(_+=`
`)):(p=[ql(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),_=[m,ql(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?qe.tonemapping_pars_fragment:"",t.toneMapping!==On?a_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.encodings_pars_fragment,o_("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=aa(o),o=Hl(o,t),o=Wl(o,t),a=aa(a),a=Hl(a,t),a=Wl(a,t),o=jl(o),a=jl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+p+o,w=b+_+a,y=Bl(r,35633,x),S=Bl(r,35632,w);if(r.attachShader(h,y),r.attachShader(h,S),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),i.debug.checkShaderErrors){const E=r.getProgramInfoLog(h).trim(),M=r.getShaderInfoLog(y).trim(),R=r.getShaderInfoLog(S).trim();let k=!0,D=!0;if(r.getProgramParameter(h,35714)===!1){k=!1;const N=Vl(r,y,"vertex"),O=Vl(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+E+`
`+N+`
`+O)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(M===""||R==="")&&(D=!1);D&&(this.diagnostics={runnable:k,programLog:E,vertexShader:{log:M,prefix:p},fragmentShader:{log:R,prefix:_}})}r.deleteShader(y),r.deleteShader(S);let I;this.getUniforms=function(){return I===void 0&&(I=new Ts(r,h)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=u_(r,h)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=i_++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=y,this.fragmentShader=S,this}let y_=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M_(e),t.set(e,n)),n}}class M_{constructor(e){this.id=y_++,this.code=e,this.usedTimes=0}}function S_(i,e,t,n,r,s,o){const a=new va,l=new x_,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v,E,M,R,k){const D=R.fog,N=k.geometry,O=v.isMeshStandardMaterial?R.environment:null,P=(v.isMeshStandardMaterial?t:e).get(v.envMap||O),q=!!P&&P.mapping===Ws?P.image.height:null,X=g[v.type];v.precision!==null&&(m=r.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const V=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,G=V!==void 0?V.length:0;let W=0;N.morphAttributes.position!==void 0&&(W=1),N.morphAttributes.normal!==void 0&&(W=2),N.morphAttributes.color!==void 0&&(W=3);let te,oe,re,we;if(X){const Xe=Rn[X];te=Xe.vertexShader,oe=Xe.fragmentShader}else te=v.vertexShader,oe=v.fragmentShader,l.update(v),re=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const B=i.getRenderTarget(),_e=v.alphaTest>0,Ee=v.clearcoat>0,pe=v.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:v.type,vertexShader:te,fragmentShader:oe,defines:v.defines,customVertexShaderID:re,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:k.isInstancedMesh===!0,instancingColor:k.isInstancedMesh===!0&&k.instanceColor!==null,supportsVertexTextures:d,outputEncoding:B===null?i.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:pi,map:!!v.map,matcap:!!v.matcap,envMap:!!P,envMapMode:P&&P.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Jd,tangentSpaceNormalMap:v.normalMapType===zu,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===wt,clearcoat:Ee,clearcoatMap:Ee&&!!v.clearcoatMap,clearcoatRoughnessMap:Ee&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Ee&&!!v.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!v.iridescenceMap,iridescenceThicknessMap:pe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===or,alphaMap:!!v.alphaMap,alphaTest:_e,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:W,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&M.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:On,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fi,flipSided:v.side===mn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const M in v.defines)E.push(M),E.push(v.defines[M]);return v.isRawShaderMaterial===!1&&(_(E,v),b(E,v),E.push(i.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function b(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),v.push(a.mask)}function x(v){const E=g[v.type];let M;if(E){const R=Rn[E];M=qu.clone(R.uniforms)}else M=v.uniforms;return M}function w(v,E){let M;for(let R=0,k=c.length;R<k;R++){const D=c[R];if(D.cacheKey===E){M=D,++M.usedTimes;break}}return M===void 0&&(M=new w_(i,E,v,s),c.push(M)),M}function y(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function S(v){l.remove(v)}function I(){l.dispose()}return{getParameters:h,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:y,releaseShaderCache:S,programs:c,dispose:I}}function E_(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function A_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,d,m,g,h,p){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:h,group:p},i[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=h,_.group=p),e++,_}function a(f,d,m,g,h,p){const _=o(f,d,m,g,h,p);m.transmission>0?n.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,d,m,g,h,p){const _=o(f,d,m,g,h,p);m.transmission>0?n.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||A_),n.length>1&&n.sort(d||Xl),r.length>1&&r.sort(d||Xl)}function u(){for(let f=e,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function T_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Yl,i.set(n,[o])):r>=s.length?(o=new Yl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function C_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Ve};break;case"SpotLight":t={position:new z,direction:new z,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function L_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let D_=0;function P_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function R_(i,e){const t=new C_,n=L_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new z);const s=new z,o=new ut,a=new ut;function l(u,f){let d=0,m=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let h=0,p=0,_=0,b=0,x=0,w=0,y=0,S=0,I=0,v=0;u.sort(P_);const E=f!==!0?Math.PI:1;for(let R=0,k=u.length;R<k;R++){const D=u[R],N=D.color,O=D.intensity,P=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=N.r*O*E,m+=N.g*O*E,g+=N.b*O*E;else if(D.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(D.sh.coefficients[X],O);else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.directionalShadow[h]=G,r.directionalShadowMap[h]=q,r.directionalShadowMatrix[h]=D.shadow.matrix,w++}r.directional[h]=X,h++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(N).multiplyScalar(O*E),X.distance=P,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,r.spot[_]=X;const V=D.shadow;if(D.map&&(r.spotLightMap[I]=D.map,I++,V.updateMatrices(D),D.castShadow&&v++),r.spotLightMatrix[_]=V.matrix,D.castShadow){const G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=q,S++}_++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(N).multiplyScalar(O),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),r.rectArea[b]=X,b++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*E),X.distance=D.distance,X.decay=D.decay,D.castShadow){const V=D.shadow,G=n.get(D);G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=D.shadow.matrix,y++}r.point[p]=X,p++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(O*E),X.groundColor.copy(D.groundColor).multiplyScalar(O*E),r.hemi[x]=X,x++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=de.LTC_FLOAT_1,r.rectAreaLTC2=de.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=de.LTC_HALF_1,r.rectAreaLTC2=de.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const M=r.hash;(M.directionalLength!==h||M.pointLength!==p||M.spotLength!==_||M.rectAreaLength!==b||M.hemiLength!==x||M.numDirectionalShadows!==w||M.numPointShadows!==y||M.numSpotShadows!==S||M.numSpotMaps!==I)&&(r.directional.length=h,r.spot.length=_,r.rectArea.length=b,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=y,r.pointShadowMap.length=y,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=y,r.spotLightMatrix.length=S+I-v,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=v,M.directionalLength=h,M.pointLength=p,M.spotLength=_,M.rectAreaLength=b,M.hemiLength=x,M.numDirectionalShadows=w,M.numPointShadows=y,M.numSpotShadows=S,M.numSpotMaps=I,r.version=D_++)}function c(u,f){let d=0,m=0,g=0,h=0,p=0;const _=f.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const w=u[b];if(w.isDirectionalLight){const y=r.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),d++}else if(w.isSpotLight){const y=r.spot[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(_),g++}else if(w.isRectAreaLight){const y=r.rectArea[h];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),a.identity(),o.copy(w.matrixWorld),o.premultiply(_),a.extractRotation(o),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),h++}else if(w.isPointLight){const y=r.point[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(_),m++}else if(w.isHemisphereLight){const y=r.hemi[p];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:r}}function Zl(i,e){const t=new R_(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function I_(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Zl(i,e),t.set(s,[l])):o>=a.length?(l=new Zl(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class O_ extends vr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N_ extends vr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k_=`uniform sampler2D shadow_pass;
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
}`;function z_(i,e,t){let n=new Xs;const r=new ke,s=new ke,o=new It,a=new O_({depthPacking:Kd}),l=new N_,c={},u=t.maxTextureSize,f={0:mn,1:fr,2:fi},d=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:F_,fragmentShader:k_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new hn(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu,this.render=function(w,y,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),M=i.state;M.setBlending(hi),M.buffers.color.setClear(1,1,1,1),M.buffers.depth.setTest(!0),M.setScissorTest(!1);for(let R=0,k=w.length;R<k;R++){const D=w[R],N=D.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();if(r.multiply(O),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/O.x),r.x=s.x*O.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/O.y),r.y=s.y*O.y,N.mapSize.y=s.y)),N.map===null){const q=this.type!==Rr?{minFilter:Zt,magFilter:Zt}:{};N.map=new mi(r.x,r.y,q),N.map.texture.name=D.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const P=N.getViewportCount();for(let q=0;q<P;q++){const X=N.getViewport(q);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),M.viewport(o),N.updateMatrices(D,q),n=N.getFrustum(),x(y,S,N.camera,D,this.type)}N.isPointLightShadow!==!0&&this.type===Rr&&_(N,S),N.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(I,v,E)};function _(w,y){const S=e.update(h);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new mi(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(y,null,S,d,h,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(y,null,S,m,h,null)}function b(w,y,S,I,v,E){let M=null;const R=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0?M=R:M=S.isPointLight===!0?l:a,i.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const k=M.uuid,D=y.uuid;let N=c[k];N===void 0&&(N={},c[k]=N);let O=N[D];O===void 0&&(O=M.clone(),N[D]=O),M=O}return M.visible=y.visible,M.wireframe=y.wireframe,E===Rr?M.side=y.shadowSide!==null?y.shadowSide:y.side:M.side=y.shadowSide!==null?y.shadowSide:f[y.side],M.alphaMap=y.alphaMap,M.alphaTest=y.alphaTest,M.clipShadows=y.clipShadows,M.clippingPlanes=y.clippingPlanes,M.clipIntersection=y.clipIntersection,M.displacementMap=y.displacementMap,M.displacementScale=y.displacementScale,M.displacementBias=y.displacementBias,M.wireframeLinewidth=y.wireframeLinewidth,M.linewidth=y.linewidth,S.isPointLight===!0&&M.isMeshDistanceMaterial===!0&&(M.referencePosition.setFromMatrixPosition(S.matrixWorld),M.nearDistance=I,M.farDistance=v),M}function x(w,y,S,I,v){if(w.visible===!1)return;if(w.layers.test(y.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Rr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const R=e.update(w),k=w.material;if(Array.isArray(k)){const D=R.groups;for(let N=0,O=D.length;N<O;N++){const P=D[N],q=k[P.materialIndex];if(q&&q.visible){const X=b(w,q,I,S.near,S.far,v);i.renderBufferDirect(S,null,R,X,w,P)}}}else if(k.visible){const D=b(w,k,I,S.near,S.far,v);i.renderBufferDirect(S,null,R,D,w,null)}}const M=w.children;for(let R=0,k=M.length;R<k;R++)x(M[R],y,S,I,v)}}function U_(i,e,t){const n=t.isWebGL2;function r(){let U=!1;const fe=new It;let Z=null;const xe=new It(0,0,0,0);return{setMask:function(ve){Z!==ve&&!U&&(i.colorMask(ve,ve,ve,ve),Z=ve)},setLocked:function(ve){U=ve},setClear:function(ve,Ke,bt,dt,an){an===!0&&(ve*=dt,Ke*=dt,bt*=dt),fe.set(ve,Ke,bt,dt),xe.equals(fe)===!1&&(i.clearColor(ve,Ke,bt,dt),xe.copy(fe))},reset:function(){U=!1,Z=null,xe.set(-1,0,0,0)}}}function s(){let U=!1,fe=null,Z=null,xe=null;return{setTest:function(ve){ve?_e(2929):Ee(2929)},setMask:function(ve){fe!==ve&&!U&&(i.depthMask(ve),fe=ve)},setFunc:function(ve){if(Z!==ve){if(ve)switch(ve){case wd:i.depthFunc(512);break;case yd:i.depthFunc(519);break;case xd:i.depthFunc(513);break;case ea:i.depthFunc(515);break;case Md:i.depthFunc(514);break;case Sd:i.depthFunc(518);break;case Ed:i.depthFunc(516);break;case Ad:i.depthFunc(517);break;default:i.depthFunc(515)}else i.depthFunc(515);Z=ve}},setLocked:function(ve){U=ve},setClear:function(ve){xe!==ve&&(i.clearDepth(ve),xe=ve)},reset:function(){U=!1,fe=null,Z=null,xe=null}}}function o(){let U=!1,fe=null,Z=null,xe=null,ve=null,Ke=null,bt=null,dt=null,an=null;return{setTest:function(ct){U||(ct?_e(2960):Ee(2960))},setMask:function(ct){fe!==ct&&!U&&(i.stencilMask(ct),fe=ct)},setFunc:function(ct,vn,qt){(Z!==ct||xe!==vn||ve!==qt)&&(i.stencilFunc(ct,vn,qt),Z=ct,xe=vn,ve=qt)},setOp:function(ct,vn,qt){(Ke!==ct||bt!==vn||dt!==qt)&&(i.stencilOp(ct,vn,qt),Ke=ct,bt=vn,dt=qt)},setLocked:function(ct){U=ct},setClear:function(ct){an!==ct&&(i.clearStencil(ct),an=ct)},reset:function(){U=!1,fe=null,Z=null,xe=null,ve=null,Ke=null,bt=null,dt=null,an=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,h=[],p=null,_=!1,b=null,x=null,w=null,y=null,S=null,I=null,v=null,E=!1,M=null,R=null,k=null,D=null,N=null;const O=i.getParameter(35661);let P=!1,q=0;const X=i.getParameter(7938);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),P=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),P=q>=2);let V=null,G={};const W=i.getParameter(3088),te=i.getParameter(2978),oe=new It().fromArray(W),re=new It().fromArray(te);function we(U,fe,Z){const xe=new Uint8Array(4),ve=i.createTexture();i.bindTexture(U,ve),i.texParameteri(U,10241,9728),i.texParameteri(U,10240,9728);for(let Ke=0;Ke<Z;Ke++)i.texImage2D(fe+Ke,0,6408,1,1,0,6408,5121,xe);return ve}const B={};B[3553]=we(3553,3553,1),B[34067]=we(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(2929),l.setFunc(ea),yt(!1),Ot(za),_e(2884),He(hi);function _e(U){d[U]!==!0&&(i.enable(U),d[U]=!0)}function Ee(U){d[U]!==!1&&(i.disable(U),d[U]=!1)}function pe(U,fe){return m[U]!==fe?(i.bindFramebuffer(U,fe),m[U]=fe,n&&(U===36009&&(m[36160]=fe),U===36160&&(m[36009]=fe)),!0):!1}function ye(U,fe){let Z=h,xe=!1;if(U)if(Z=g.get(fe),Z===void 0&&(Z=[],g.set(fe,Z)),U.isWebGLMultipleRenderTargets){const ve=U.texture;if(Z.length!==ve.length||Z[0]!==36064){for(let Ke=0,bt=ve.length;Ke<bt;Ke++)Z[Ke]=36064+Ke;Z.length=ve.length,xe=!0}}else Z[0]!==36064&&(Z[0]=36064,xe=!0);else Z[0]!==1029&&(Z[0]=1029,xe=!0);xe&&(t.isWebGL2?i.drawBuffers(Z):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Z))}function Xe(U){return p!==U?(i.useProgram(U),p=U,!0):!1}const Y={[ir]:32774,[cd]:32778,[ud]:32779};if(n)Y[Va]=32775,Y[Ha]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(Y[Va]=U.MIN_EXT,Y[Ha]=U.MAX_EXT)}const ue={[fd]:0,[dd]:1,[hd]:768,[Iu]:770,[bd]:776,[_d]:774,[md]:772,[pd]:769,[Ou]:771,[vd]:775,[gd]:773};function He(U,fe,Z,xe,ve,Ke,bt,dt){if(U===hi){_===!0&&(Ee(3042),_=!1);return}if(_===!1&&(_e(3042),_=!0),U!==ld){if(U!==b||dt!==E){if((x!==ir||S!==ir)&&(i.blendEquation(32774),x=ir,S=ir),dt)switch(U){case or:i.blendFuncSeparate(1,771,1,771);break;case Ua:i.blendFunc(1,1);break;case Ga:i.blendFuncSeparate(0,769,0,1);break;case Ba:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case or:i.blendFuncSeparate(770,771,1,771);break;case Ua:i.blendFunc(770,1);break;case Ga:i.blendFuncSeparate(0,769,0,1);break;case Ba:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}w=null,y=null,I=null,v=null,b=U,E=dt}return}ve=ve||fe,Ke=Ke||Z,bt=bt||xe,(fe!==x||ve!==S)&&(i.blendEquationSeparate(Y[fe],Y[ve]),x=fe,S=ve),(Z!==w||xe!==y||Ke!==I||bt!==v)&&(i.blendFuncSeparate(ue[Z],ue[xe],ue[Ke],ue[bt]),w=Z,y=xe,I=Ke,v=bt),b=U,E=null}function vt(U,fe){U.side===fi?Ee(2884):_e(2884);let Z=U.side===mn;fe&&(Z=!Z),yt(Z),U.blending===or&&U.transparent===!1?He(hi):He(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const xe=U.stencilWrite;c.setTest(xe),xe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ce(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(32926):Ee(32926)}function yt(U){M!==U&&(U?i.frontFace(2304):i.frontFace(2305),M=U)}function Ot(U){U!==od?(_e(2884),U!==R&&(U===za?i.cullFace(1029):U===ad?i.cullFace(1028):i.cullFace(1032))):Ee(2884),R=U}function xt(U){U!==k&&(P&&i.lineWidth(U),k=U)}function Ce(U,fe,Z){U?(_e(32823),(D!==fe||N!==Z)&&(i.polygonOffset(fe,Z),D=fe,N=Z)):Ee(32823)}function Tt(U){U?_e(3089):Ee(3089)}function Nt(U){U===void 0&&(U=33984+O-1),V!==U&&(i.activeTexture(U),V=U)}function L(U,fe){V===null&&Nt();let Z=G[V];Z===void 0&&(Z={type:void 0,texture:void 0},G[V]=Z),(Z.type!==U||Z.texture!==fe)&&(i.bindTexture(U,fe||B[U]),Z.type=U,Z.texture=fe)}function A(){const U=G[V];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function C(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){oe.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),oe.copy(U))}function he(U){re.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),re.copy(U))}function Oe(U,fe){let Z=f.get(fe);Z===void 0&&(Z=new WeakMap,f.set(fe,Z));let xe=Z.get(U);xe===void 0&&(xe=i.getUniformBlockIndex(fe,U.name),Z.set(U,xe))}function We(U,fe){const xe=f.get(fe).get(U);u.get(U)!==xe&&(i.uniformBlockBinding(fe,xe,U.__bindingPointIndex),u.set(U,xe))}function st(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},V=null,G={},m={},g=new WeakMap,h=[],p=null,_=!1,b=null,x=null,w=null,y=null,S=null,I=null,v=null,E=!1,M=null,R=null,k=null,D=null,N=null,oe.set(0,0,i.canvas.width,i.canvas.height),re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_e,disable:Ee,bindFramebuffer:pe,drawBuffers:ye,useProgram:Xe,setBlending:He,setMaterial:vt,setFlipSided:yt,setCullFace:Ot,setLineWidth:xt,setPolygonOffset:Ce,setScissorTest:Tt,activeTexture:Nt,bindTexture:L,unbindTexture:A,compressedTexImage2D:J,texImage2D:ie,texImage3D:ce,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:Ne,texStorage3D:C,texSubImage2D:se,texSubImage3D:le,compressedTexSubImage2D:me,scissor:ge,viewport:he,reset:st}}function G_(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,A){return _?new OffscreenCanvas(L,A):Br("canvas")}function x(L,A,J,se){let le=1;if((L.width>se||L.height>se)&&(le=se/Math.max(L.width,L.height)),le<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const me=A?oa:Math.floor,Ne=me(le*L.width),C=me(le*L.height);h===void 0&&(h=b(Ne,C));const ie=J?b(Ne,C):h;return ie.width=Ne,ie.height=C,ie.getContext("2d").drawImage(L,0,0,Ne,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+Ne+"x"+C+")."),ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function w(L){return gl(L.width)&&gl(L.height)}function y(L){return a?!1:L.wrapS!==An||L.wrapT!==An||L.minFilter!==Zt&&L.minFilter!==fn}function S(L,A){return L.generateMipmaps&&A&&L.minFilter!==Zt&&L.minFilter!==fn}function I(L){i.generateMipmap(L)}function v(L,A,J,se,le=!1){if(a===!1)return A;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let me=A;return A===6403&&(J===5126&&(me=33326),J===5131&&(me=33325),J===5121&&(me=33321)),A===33319&&(J===5126&&(me=33328),J===5131&&(me=33327),J===5121&&(me=33323)),A===6408&&(J===5126&&(me=34836),J===5131&&(me=34842),J===5121&&(me=se===wt&&le===!1?35907:32856),J===32819&&(me=32854),J===32820&&(me=32855)),(me===33325||me===33326||me===33327||me===33328||me===34842||me===34836)&&e.get("EXT_color_buffer_float"),me}function E(L,A,J){return S(L,J)===!0||L.isFramebufferTexture&&L.minFilter!==Zt&&L.minFilter!==fn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function M(L){return L===Zt||L===Wa||L===ja?9728:9729}function R(L){const A=L.target;A.removeEventListener("dispose",R),D(A),A.isVideoTexture&&g.delete(A)}function k(L){const A=L.target;A.removeEventListener("dispose",k),O(A)}function D(L){const A=n.get(L);if(A.__webglInit===void 0)return;const J=L.source,se=p.get(J);if(se){const le=se[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&N(L),Object.keys(se).length===0&&p.delete(J)}n.remove(L)}function N(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const J=L.source,se=p.get(J);delete se[A.__cacheKey],o.memory.textures--}function O(L){const A=L.texture,J=n.get(L),se=n.get(A);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++)i.deleteFramebuffer(J.__webglFramebuffer[le]),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer[le]);else{if(i.deleteFramebuffer(J.__webglFramebuffer),J.__webglDepthbuffer&&i.deleteRenderbuffer(J.__webglDepthbuffer),J.__webglMultisampledFramebuffer&&i.deleteFramebuffer(J.__webglMultisampledFramebuffer),J.__webglColorRenderbuffer)for(let le=0;le<J.__webglColorRenderbuffer.length;le++)J.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(J.__webglColorRenderbuffer[le]);J.__webglDepthRenderbuffer&&i.deleteRenderbuffer(J.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let le=0,me=A.length;le<me;le++){const Ne=n.get(A[le]);Ne.__webglTexture&&(i.deleteTexture(Ne.__webglTexture),o.memory.textures--),n.remove(A[le])}n.remove(A),n.remove(L)}let P=0;function q(){P=0}function X(){const L=P;return L>=l&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l),P+=1,L}function V(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.encoding),A.join()}function G(L,A){const J=n.get(L);if(L.isVideoTexture&&Tt(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(J,L,A);return}}t.activeTexture(33984+A),t.bindTexture(3553,J.__webglTexture)}function W(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Ee(J,L,A);return}t.activeTexture(33984+A),t.bindTexture(35866,J.__webglTexture)}function te(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){Ee(J,L,A);return}t.activeTexture(33984+A),t.bindTexture(32879,J.__webglTexture)}function oe(L,A){const J=n.get(L);if(L.version>0&&J.__version!==L.version){pe(J,L,A);return}t.activeTexture(33984+A),t.bindTexture(34067,J.__webglTexture)}const re={[ia]:10497,[An]:33071,[ra]:33648},we={[Zt]:9728,[Wa]:9984,[ja]:9986,[fn]:9729,[Id]:9985,[js]:9987};function B(L,A,J){if(J?(i.texParameteri(L,10242,re[A.wrapS]),i.texParameteri(L,10243,re[A.wrapT]),(L===32879||L===35866)&&i.texParameteri(L,32882,re[A.wrapR]),i.texParameteri(L,10240,we[A.magFilter]),i.texParameteri(L,10241,we[A.minFilter])):(i.texParameteri(L,10242,33071),i.texParameteri(L,10243,33071),(L===32879||L===35866)&&i.texParameteri(L,32882,33071),(A.wrapS!==An||A.wrapT!==An)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,10240,M(A.magFilter)),i.texParameteri(L,10241,M(A.minFilter)),A.minFilter!==Zt&&A.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const se=e.get("EXT_texture_filter_anisotropic");if(A.type===Di&&e.has("OES_texture_float_linear")===!1||a===!1&&A.type===Gr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(L,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function _e(L,A){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",R));const se=A.source;let le=p.get(se);le===void 0&&(le={},p.set(se,le));const me=V(A);if(me!==L.__cacheKey){le[me]===void 0&&(le[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),le[me].usedTimes++;const Ne=le[L.__cacheKey];Ne!==void 0&&(le[L.__cacheKey].usedTimes--,Ne.usedTimes===0&&N(A)),L.__cacheKey=me,L.__webglTexture=le[me].texture}return J}function Ee(L,A,J){let se=3553;A.isDataArrayTexture&&(se=35866),A.isData3DTexture&&(se=32879);const le=_e(L,A),me=A.source;if(t.activeTexture(33984+J),t.bindTexture(se,L.__webglTexture),me.version!==me.__currentVersion||le===!0){i.pixelStorei(37440,A.flipY),i.pixelStorei(37441,A.premultiplyAlpha),i.pixelStorei(3317,A.unpackAlignment),i.pixelStorei(37443,0);const Ne=y(A)&&w(A.image)===!1;let C=x(A.image,Ne,!1,u);C=Nt(A,C);const ie=w(C)||a,ce=s.convert(A.format,A.encoding);let ge=s.convert(A.type),he=v(A.internalFormat,ce,ge,A.encoding,A.isVideoTexture);B(se,A,ie);let Oe;const We=A.mipmaps,st=a&&A.isVideoTexture!==!0,U=me.__currentVersion===void 0||le===!0,fe=E(A,C,ie);if(A.isDepthTexture)he=6402,a?A.type===Di?he=36012:A.type===Li?he=33190:A.type===ar?he=35056:he=33189:A.type===Di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ri&&he===6402&&A.type!==ku&&A.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Li,ge=s.convert(A.type)),A.format===pr&&he===6402&&(he=34041,A.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ar,ge=s.convert(A.type))),U&&(st?t.texStorage2D(3553,1,he,C.width,C.height):t.texImage2D(3553,0,he,C.width,C.height,0,ce,ge,null));else if(A.isDataTexture)if(We.length>0&&ie){st&&U&&t.texStorage2D(3553,fe,he,We[0].width,We[0].height);for(let Z=0,xe=We.length;Z<xe;Z++)Oe=We[Z],st?t.texSubImage2D(3553,Z,0,0,Oe.width,Oe.height,ce,ge,Oe.data):t.texImage2D(3553,Z,he,Oe.width,Oe.height,0,ce,ge,Oe.data);A.generateMipmaps=!1}else st?(U&&t.texStorage2D(3553,fe,he,C.width,C.height),t.texSubImage2D(3553,0,0,0,C.width,C.height,ce,ge,C.data)):t.texImage2D(3553,0,he,C.width,C.height,0,ce,ge,C.data);else if(A.isCompressedTexture){st&&U&&t.texStorage2D(3553,fe,he,We[0].width,We[0].height);for(let Z=0,xe=We.length;Z<xe;Z++)Oe=We[Z],A.format!==In?ce!==null?st?t.compressedTexSubImage2D(3553,Z,0,0,Oe.width,Oe.height,ce,Oe.data):t.compressedTexImage2D(3553,Z,he,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?t.texSubImage2D(3553,Z,0,0,Oe.width,Oe.height,ce,ge,Oe.data):t.texImage2D(3553,Z,he,Oe.width,Oe.height,0,ce,ge,Oe.data)}else if(A.isDataArrayTexture)st?(U&&t.texStorage3D(35866,fe,he,C.width,C.height,C.depth),t.texSubImage3D(35866,0,0,0,0,C.width,C.height,C.depth,ce,ge,C.data)):t.texImage3D(35866,0,he,C.width,C.height,C.depth,0,ce,ge,C.data);else if(A.isData3DTexture)st?(U&&t.texStorage3D(32879,fe,he,C.width,C.height,C.depth),t.texSubImage3D(32879,0,0,0,0,C.width,C.height,C.depth,ce,ge,C.data)):t.texImage3D(32879,0,he,C.width,C.height,C.depth,0,ce,ge,C.data);else if(A.isFramebufferTexture){if(U)if(st)t.texStorage2D(3553,fe,he,C.width,C.height);else{let Z=C.width,xe=C.height;for(let ve=0;ve<fe;ve++)t.texImage2D(3553,ve,he,Z,xe,0,ce,ge,null),Z>>=1,xe>>=1}}else if(We.length>0&&ie){st&&U&&t.texStorage2D(3553,fe,he,We[0].width,We[0].height);for(let Z=0,xe=We.length;Z<xe;Z++)Oe=We[Z],st?t.texSubImage2D(3553,Z,0,0,ce,ge,Oe):t.texImage2D(3553,Z,he,ce,ge,Oe);A.generateMipmaps=!1}else st?(U&&t.texStorage2D(3553,fe,he,C.width,C.height),t.texSubImage2D(3553,0,0,0,ce,ge,C)):t.texImage2D(3553,0,he,ce,ge,C);S(A,ie)&&I(se),me.__currentVersion=me.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pe(L,A,J){if(A.image.length!==6)return;const se=_e(L,A),le=A.source;if(t.activeTexture(33984+J),t.bindTexture(34067,L.__webglTexture),le.version!==le.__currentVersion||se===!0){i.pixelStorei(37440,A.flipY),i.pixelStorei(37441,A.premultiplyAlpha),i.pixelStorei(3317,A.unpackAlignment),i.pixelStorei(37443,0);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,Ne=A.image[0]&&A.image[0].isDataTexture,C=[];for(let Z=0;Z<6;Z++)!me&&!Ne?C[Z]=x(A.image[Z],!1,!0,c):C[Z]=Ne?A.image[Z].image:A.image[Z],C[Z]=Nt(A,C[Z]);const ie=C[0],ce=w(ie)||a,ge=s.convert(A.format,A.encoding),he=s.convert(A.type),Oe=v(A.internalFormat,ge,he,A.encoding),We=a&&A.isVideoTexture!==!0,st=le.__currentVersion===void 0||se===!0;let U=E(A,ie,ce);B(34067,A,ce);let fe;if(me){We&&st&&t.texStorage2D(34067,U,Oe,ie.width,ie.height);for(let Z=0;Z<6;Z++){fe=C[Z].mipmaps;for(let xe=0;xe<fe.length;xe++){const ve=fe[xe];A.format!==In?ge!==null?We?t.compressedTexSubImage2D(34069+Z,xe,0,0,ve.width,ve.height,ge,ve.data):t.compressedTexImage2D(34069+Z,xe,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(34069+Z,xe,0,0,ve.width,ve.height,ge,he,ve.data):t.texImage2D(34069+Z,xe,Oe,ve.width,ve.height,0,ge,he,ve.data)}}}else{fe=A.mipmaps,We&&st&&(fe.length>0&&U++,t.texStorage2D(34067,U,Oe,C[0].width,C[0].height));for(let Z=0;Z<6;Z++)if(Ne){We?t.texSubImage2D(34069+Z,0,0,0,C[Z].width,C[Z].height,ge,he,C[Z].data):t.texImage2D(34069+Z,0,Oe,C[Z].width,C[Z].height,0,ge,he,C[Z].data);for(let xe=0;xe<fe.length;xe++){const Ke=fe[xe].image[Z].image;We?t.texSubImage2D(34069+Z,xe+1,0,0,Ke.width,Ke.height,ge,he,Ke.data):t.texImage2D(34069+Z,xe+1,Oe,Ke.width,Ke.height,0,ge,he,Ke.data)}}else{We?t.texSubImage2D(34069+Z,0,0,0,ge,he,C[Z]):t.texImage2D(34069+Z,0,Oe,ge,he,C[Z]);for(let xe=0;xe<fe.length;xe++){const ve=fe[xe];We?t.texSubImage2D(34069+Z,xe+1,0,0,ge,he,ve.image[Z]):t.texImage2D(34069+Z,xe+1,Oe,ge,he,ve.image[Z])}}}S(A,ce)&&I(34067),le.__currentVersion=le.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ye(L,A,J,se,le){const me=s.convert(J.format,J.encoding),Ne=s.convert(J.type),C=v(J.internalFormat,me,Ne,J.encoding);n.get(A).__hasExternalTextures||(le===32879||le===35866?t.texImage3D(le,0,C,A.width,A.height,A.depth,0,me,Ne,null):t.texImage2D(le,0,C,A.width,A.height,0,me,Ne,null)),t.bindFramebuffer(36160,L),Ce(A)?d.framebufferTexture2DMultisampleEXT(36160,se,le,n.get(J).__webglTexture,0,xt(A)):i.framebufferTexture2D(36160,se,le,n.get(J).__webglTexture,0),t.bindFramebuffer(36160,null)}function Xe(L,A,J){if(i.bindRenderbuffer(36161,L),A.depthBuffer&&!A.stencilBuffer){let se=33189;if(J||Ce(A)){const le=A.depthTexture;le&&le.isDepthTexture&&(le.type===Di?se=36012:le.type===Li&&(se=33190));const me=xt(A);Ce(A)?d.renderbufferStorageMultisampleEXT(36161,me,se,A.width,A.height):i.renderbufferStorageMultisample(36161,me,se,A.width,A.height)}else i.renderbufferStorage(36161,se,A.width,A.height);i.framebufferRenderbuffer(36160,36096,36161,L)}else if(A.depthBuffer&&A.stencilBuffer){const se=xt(A);J&&Ce(A)===!1?i.renderbufferStorageMultisample(36161,se,35056,A.width,A.height):Ce(A)?d.renderbufferStorageMultisampleEXT(36161,se,35056,A.width,A.height):i.renderbufferStorage(36161,34041,A.width,A.height),i.framebufferRenderbuffer(36160,33306,36161,L)}else{const se=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let le=0;le<se.length;le++){const me=se[le],Ne=s.convert(me.format,me.encoding),C=s.convert(me.type),ie=v(me.internalFormat,Ne,C,me.encoding),ce=xt(A);J&&Ce(A)===!1?i.renderbufferStorageMultisample(36161,ce,ie,A.width,A.height):Ce(A)?d.renderbufferStorageMultisampleEXT(36161,ce,ie,A.width,A.height):i.renderbufferStorage(36161,ie,A.width,A.height)}}i.bindRenderbuffer(36161,null)}function Y(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),G(A.depthTexture,0);const se=n.get(A.depthTexture).__webglTexture,le=xt(A);if(A.depthTexture.format===Ri)Ce(A)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,se,0,le):i.framebufferTexture2D(36160,36096,3553,se,0);else if(A.depthTexture.format===pr)Ce(A)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,se,0,le):i.framebufferTexture2D(36160,33306,3553,se,0);else throw new Error("Unknown depthTexture format")}function ue(L){const A=n.get(L),J=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Y(A.__webglFramebuffer,L)}else if(J){A.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(36160,A.__webglFramebuffer[se]),A.__webglDepthbuffer[se]=i.createRenderbuffer(),Xe(A.__webglDepthbuffer[se],L,!1)}else t.bindFramebuffer(36160,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Xe(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(36160,null)}function He(L,A,J){const se=n.get(L);A!==void 0&&ye(se.__webglFramebuffer,L,L.texture,36064,3553),J!==void 0&&ue(L)}function vt(L){const A=L.texture,J=n.get(L),se=n.get(A);L.addEventListener("dispose",k),L.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=A.version,o.memory.textures++);const le=L.isWebGLCubeRenderTarget===!0,me=L.isWebGLMultipleRenderTargets===!0,Ne=w(L)||a;if(le){J.__webglFramebuffer=[];for(let C=0;C<6;C++)J.__webglFramebuffer[C]=i.createFramebuffer()}else{if(J.__webglFramebuffer=i.createFramebuffer(),me)if(r.drawBuffers){const C=L.texture;for(let ie=0,ce=C.length;ie<ce;ie++){const ge=n.get(C[ie]);ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Ce(L)===!1){const C=me?A:[A];J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,J.__webglMultisampledFramebuffer);for(let ie=0;ie<C.length;ie++){const ce=C[ie];J.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(36161,J.__webglColorRenderbuffer[ie]);const ge=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),Oe=v(ce.internalFormat,ge,he,ce.encoding),We=xt(L);i.renderbufferStorageMultisample(36161,We,Oe,L.width,L.height),i.framebufferRenderbuffer(36160,36064+ie,36161,J.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(36161,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Xe(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(36160,null)}}if(le){t.bindTexture(34067,se.__webglTexture),B(34067,A,Ne);for(let C=0;C<6;C++)ye(J.__webglFramebuffer[C],L,A,36064,34069+C);S(A,Ne)&&I(34067),t.unbindTexture()}else if(me){const C=L.texture;for(let ie=0,ce=C.length;ie<ce;ie++){const ge=C[ie],he=n.get(ge);t.bindTexture(3553,he.__webglTexture),B(3553,ge,Ne),ye(J.__webglFramebuffer,L,ge,36064+ie,3553),S(ge,Ne)&&I(3553)}t.unbindTexture()}else{let C=3553;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?C=L.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,se.__webglTexture),B(C,A,Ne),ye(J.__webglFramebuffer,L,A,36064,C),S(A,Ne)&&I(C),t.unbindTexture()}L.depthBuffer&&ue(L)}function yt(L){const A=w(L)||a,J=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let se=0,le=J.length;se<le;se++){const me=J[se];if(S(me,A)){const Ne=L.isWebGLCubeRenderTarget?34067:3553,C=n.get(me).__webglTexture;t.bindTexture(Ne,C),I(Ne),t.unbindTexture()}}}function Ot(L){if(a&&L.samples>0&&Ce(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],J=L.width,se=L.height;let le=16384;const me=[],Ne=L.stencilBuffer?33306:36096,C=n.get(L),ie=L.isWebGLMultipleRenderTargets===!0;if(ie)for(let ce=0;ce<A.length;ce++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let ce=0;ce<A.length;ce++){me.push(36064+ce),L.depthBuffer&&me.push(Ne);const ge=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(ge===!1&&(L.depthBuffer&&(le|=256),L.stencilBuffer&&(le|=1024)),ie&&i.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ce]),ge===!0&&(i.invalidateFramebuffer(36008,[Ne]),i.invalidateFramebuffer(36009,[Ne])),ie){const he=n.get(A[ce]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,he,0)}i.blitFramebuffer(0,0,J,se,0,0,J,se,le,9728),m&&i.invalidateFramebuffer(36008,me)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ie)for(let ce=0;ce<A.length;ce++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,C.__webglColorRenderbuffer[ce]);const ge=n.get(A[ce]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,ge,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function xt(L){return Math.min(f,L.samples)}function Ce(L){const A=n.get(L);return a&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Tt(L){const A=o.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function Nt(L,A){const J=L.encoding,se=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===sa||J!==pi&&(J===wt?a===!1?e.has("EXT_sRGB")===!0&&se===In?(L.format=sa,L.minFilter=fn,L.generateMipmaps=!1):A=Bu.sRGBToLinear(A):(se!==In||le!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",J)),A}this.allocateTextureUnit=X,this.resetTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=W,this.setTexture3D=te,this.setTextureCube=oe,this.rebindTextures=He,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ce}function B_(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Ni)return 5121;if(s===kd)return 32819;if(s===zd)return 32820;if(s===Od)return 5120;if(s===Nd)return 5122;if(s===ku)return 5123;if(s===Fd)return 5124;if(s===Li)return 5125;if(s===Di)return 5126;if(s===Gr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ud)return 6406;if(s===In)return 6408;if(s===Bd)return 6409;if(s===Vd)return 6410;if(s===Ri)return 6402;if(s===pr)return 34041;if(s===Hd)return 6403;if(s===Gd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===sa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Wd)return 36244;if(s===jd)return 33319;if(s===qd)return 33320;if(s===Xd)return 36249;if(s===uo||s===fo||s===ho||s===po)if(o===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===uo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===po)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===uo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ho)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===po)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qa||s===Xa||s===Ya||s===Za)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Xa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ya)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Za)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ka||s===Ja)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Ka)return o===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ja)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qa||s===$a||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===ol||s===al||s===ll||s===cl||s===ul||s===fl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qa)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$a)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===el)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tl)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===nl)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===il)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rl)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sl)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ol)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===al)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ll)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cl)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ul)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fl)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===dl)return o===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===ar?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class V_ extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bs extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const h of e.hand.values()){const p=t.getJointPose(h,n);if(c.joints[h.jointName]===void 0){const b=new bs;b.matrixAutoUpdate=!1,b.visible=!1,c.joints[h.jointName]=b,c.add(b)}const _=c.joints[h.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class W_ extends _n{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ri,u!==Ri&&u!==pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ri&&(n=Li),n===void 0&&u===pr&&(n=ar),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1}}class j_ extends ki{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,f=null,d=null,m=null;const g=t.getContextAttributes();let h=null,p=null;const _=[],b=[],x=new rn;x.layers.enable(1),x.viewport=new It;const w=new rn;w.layers.enable(2),w.viewport=new It;const y=[x,w],S=new V_;S.layers.enable(1),S.layers.enable(2);let I=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=_[V];return G===void 0&&(G=new Vo,_[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=_[V];return G===void 0&&(G=new Vo,_[V]=G),G.getGripSpace()},this.getHand=function(V){let G=_[V];return G===void 0&&(G=new Vo,_[V]=G),G.getHandSpace()};function E(V){const G=b.indexOf(V.inputSource);if(G===-1)return;const W=_[G];W!==void 0&&W.dispatchEvent({type:V.type,data:V.inputSource})}function M(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",M),r.removeEventListener("inputsourceschange",R);for(let V=0;V<_.length;V++){const G=b[V];G!==null&&(b[V]=null,_[V].disconnect(G))}I=null,v=null,e.setRenderTarget(h),d=null,f=null,u=null,r=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",M),r.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:d}),p=new mi(d.framebufferWidth,d.framebufferHeight,{format:In,type:Ni,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,W=null,te=null;g.depth&&(te=g.stencil?35056:33190,G=g.stencil?pr:Ri,W=g.stencil?ar:Li);const oe={colorFormat:32856,depthFormat:te,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(oe),r.updateRenderState({layers:[f]}),p=new mi(f.textureWidth,f.textureHeight,{format:In,type:Ni,depthTexture:new W_(f.textureWidth,f.textureHeight,W,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const re=e.properties.get(p);re.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(V){for(let G=0;G<V.removed.length;G++){const W=V.removed[G],te=b.indexOf(W);te>=0&&(b[te]=null,_[te].dispatchEvent({type:"disconnected",data:W}))}for(let G=0;G<V.added.length;G++){const W=V.added[G];let te=b.indexOf(W);if(te===-1){for(let re=0;re<_.length;re++)if(re>=b.length){b.push(W),te=re;break}else if(b[re]===null){b[re]=W,te=re;break}if(te===-1)break}const oe=_[te];oe&&oe.dispatchEvent({type:"connected",data:W})}}const k=new z,D=new z;function N(V,G,W){k.setFromMatrixPosition(G.matrixWorld),D.setFromMatrixPosition(W.matrixWorld);const te=k.distanceTo(D),oe=G.projectionMatrix.elements,re=W.projectionMatrix.elements,we=oe[14]/(oe[10]-1),B=oe[14]/(oe[10]+1),_e=(oe[9]+1)/oe[5],Ee=(oe[9]-1)/oe[5],pe=(oe[8]-1)/oe[0],ye=(re[8]+1)/re[0],Xe=we*pe,Y=we*ye,ue=te/(-pe+ye),He=ue*-pe;G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(He),V.translateZ(ue),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const vt=we+ue,yt=B+ue,Ot=Xe-He,xt=Y+(te-He),Ce=_e*B/yt*vt,Tt=Ee*B/yt*vt;V.projectionMatrix.makePerspective(Ot,xt,Ce,Tt,vt,yt)}function O(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;S.near=w.near=x.near=V.near,S.far=w.far=x.far=V.far,(I!==S.near||v!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,v=S.far);const G=V.parent,W=S.cameras;O(S,G);for(let oe=0;oe<W.length;oe++)O(W[oe],G);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),V.matrix.copy(S.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const te=V.children;for(let oe=0,re=te.length;oe<re;oe++)te[oe].updateMatrixWorld(!0);W.length===2?N(S,x,w):S.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){f!==null&&(f.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)};let P=null;function q(V,G){if(c=G.getViewerPose(l||o),m=G,c!==null){const W=c.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let te=!1;W.length!==S.cameras.length&&(S.cameras.length=0,te=!0);for(let oe=0;oe<W.length;oe++){const re=W[oe];let we=null;if(d!==null)we=d.getViewport(re);else{const _e=u.getViewSubImage(f,re);we=_e.viewport,oe===0&&(e.setRenderTargetTextures(p,_e.colorTexture,f.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(p))}let B=y[oe];B===void 0&&(B=new rn,B.layers.enable(oe),B.viewport=new It,y[oe]=B),B.matrix.fromArray(re.transform.matrix),B.projectionMatrix.fromArray(re.projectionMatrix),B.viewport.set(we.x,we.y,we.width,we.height),oe===0&&S.matrix.copy(B.matrix),te===!0&&S.cameras.push(B)}}for(let W=0;W<_.length;W++){const te=b[W],oe=_[W];te!==null&&oe!==void 0&&oe.update(te,G,l||o)}P&&P(V,G),m=null}const X=new Yu;X.setAnimationLoop(q),this.setAnimationLoop=function(V){P=V},this.dispose=function(){}}}function q_(i,e){function t(h,p){h.fogColor.value.copy(p.color),p.isFog?(h.fogNear.value=p.near,h.fogFar.value=p.far):p.isFogExp2&&(h.fogDensity.value=p.density)}function n(h,p,_,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(h,p):p.isMeshToonMaterial?(r(h,p),u(h,p)):p.isMeshPhongMaterial?(r(h,p),c(h,p)):p.isMeshStandardMaterial?(r(h,p),f(h,p),p.isMeshPhysicalMaterial&&d(h,p,x)):p.isMeshMatcapMaterial?(r(h,p),m(h,p)):p.isMeshDepthMaterial?r(h,p):p.isMeshDistanceMaterial?(r(h,p),g(h,p)):p.isMeshNormalMaterial?r(h,p):p.isLineBasicMaterial?(s(h,p),p.isLineDashedMaterial&&o(h,p)):p.isPointsMaterial?a(h,p,_,b):p.isSpriteMaterial?l(h,p):p.isShadowMaterial?(h.color.value.copy(p.color),h.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(h,p){h.opacity.value=p.opacity,p.color&&h.diffuse.value.copy(p.color),p.emissive&&h.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.bumpMap&&(h.bumpMap.value=p.bumpMap,h.bumpScale.value=p.bumpScale,p.side===mn&&(h.bumpScale.value*=-1)),p.displacementMap&&(h.displacementMap.value=p.displacementMap,h.displacementScale.value=p.displacementScale,h.displacementBias.value=p.displacementBias),p.emissiveMap&&(h.emissiveMap.value=p.emissiveMap),p.normalMap&&(h.normalMap.value=p.normalMap,h.normalScale.value.copy(p.normalScale),p.side===mn&&h.normalScale.value.negate()),p.specularMap&&(h.specularMap.value=p.specularMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(h.envMap.value=_,h.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=p.reflectivity,h.ior.value=p.ior,h.refractionRatio.value=p.refractionRatio),p.lightMap){h.lightMap.value=p.lightMap;const w=i.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=p.lightMapIntensity*w}p.aoMap&&(h.aoMap.value=p.aoMap,h.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),h.uvTransform.value.copy(b.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uv2Transform.value.copy(x.matrix))}function s(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity}function o(h,p){h.dashSize.value=p.dashSize,h.totalSize.value=p.dashSize+p.gapSize,h.scale.value=p.scale}function a(h,p,_,b){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.size.value=p.size*_,h.scale.value=b*.5,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),h.uvTransform.value.copy(x.matrix))}function l(h,p){h.diffuse.value.copy(p.color),h.opacity.value=p.opacity,h.rotation.value=p.rotation,p.map&&(h.map.value=p.map),p.alphaMap&&(h.alphaMap.value=p.alphaMap),p.alphaTest>0&&(h.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),h.uvTransform.value.copy(_.matrix))}function c(h,p){h.specular.value.copy(p.specular),h.shininess.value=Math.max(p.shininess,1e-4)}function u(h,p){p.gradientMap&&(h.gradientMap.value=p.gradientMap)}function f(h,p){h.roughness.value=p.roughness,h.metalness.value=p.metalness,p.roughnessMap&&(h.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(h.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(h.envMapIntensity.value=p.envMapIntensity)}function d(h,p,_){h.ior.value=p.ior,p.sheen>0&&(h.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),h.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(h.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(h.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(h.clearcoat.value=p.clearcoat,h.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(h.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),h.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===mn&&h.clearcoatNormalScale.value.negate())),p.iridescence>0&&(h.iridescence.value=p.iridescence,h.iridescenceIOR.value=p.iridescenceIOR,h.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(h.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(h.transmission.value=p.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(h.transmissionMap.value=p.transmissionMap),h.thickness.value=p.thickness,p.thicknessMap&&(h.thicknessMap.value=p.thicknessMap),h.attenuationDistance.value=p.attenuationDistance,h.attenuationColor.value.copy(p.attenuationColor)),h.specularIntensity.value=p.specularIntensity,h.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(h.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(h.specularColorMap.value=p.specularColorMap)}function m(h,p){p.matcap&&(h.matcap.value=p.matcap)}function g(h,p){h.referencePosition.value.copy(p.referencePosition),h.nearDistance.value=p.nearDistance,h.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function X_(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,x){const w=x.program;n.uniformBlockBinding(b,w)}function c(b,x){let w=r[b.id];w===void 0&&(g(b),w=u(b),r[b.id]=w,b.addEventListener("dispose",p));const y=x.program;n.updateUBOMapping(b,y);const S=e.render.frame;s[b.id]!==S&&(d(b),s[b.id]=S)}function u(b){const x=f();b.__bindingPointIndex=x;const w=i.createBuffer(),y=b.__size,S=b.usage;return i.bindBuffer(35345,w),i.bufferData(35345,y,S),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,w),w}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const x=r[b.id],w=b.uniforms,y=b.__cache;i.bindBuffer(35345,x);for(let S=0,I=w.length;S<I;S++){const v=w[S];if(m(v,S,y)===!0){const E=v.value,M=v.__offset;typeof E=="number"?(v.__data[0]=E,i.bufferSubData(35345,M,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):E.toArray(v.__data),i.bufferSubData(35345,M,v.__data))}}i.bindBuffer(35345,null)}function m(b,x,w){const y=b.value;if(w[x]===void 0)return typeof y=="number"?w[x]=y:w[x]=y.clone(),!0;if(typeof y=="number"){if(w[x]!==y)return w[x]=y,!0}else{const S=w[x];if(S.equals(y)===!1)return S.copy(y),!0}return!1}function g(b){const x=b.uniforms;let w=0;const y=16;let S=0;for(let I=0,v=x.length;I<v;I++){const E=x[I],M=h(E);if(E.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,I>0){S=w%y;const R=y-S;S!==0&&R-M.boundary<0&&(w+=y-S,E.__offset=w)}w+=M.storage}return S=w%y,S>0&&(w+=y-S),b.__size=w,b.__cache={},this}function h(b){const x=b.value,w={boundary:0,storage:0};return typeof x=="number"?(w.boundary=4,w.storage=4):x.isVector2?(w.boundary=8,w.storage=8):x.isVector3||x.isColor?(w.boundary=16,w.storage=12):x.isVector4?(w.boundary=16,w.storage=16):x.isMatrix3?(w.boundary=48,w.storage=48):x.isMatrix4?(w.boundary=64,w.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),w}function p(b){const x=b.target;x.removeEventListener("dispose",p);const w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function Y_(){const i=Br("canvas");return i.style.display="block",i}function $u(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Y_(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const h=this;let p=!1,_=0,b=0,x=null,w=-1,y=null;const S=new It,I=new It;let v=null,E=e.width,M=e.height,R=1,k=null,D=null;const N=new It(0,0,E,M),O=new It(0,0,E,M);let P=!1;const q=new Xs;let X=!1,V=!1,G=null;const W=new ut,te=new ke,oe=new z,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return x===null?R:1}let B=t;function _e(T,j){for(let K=0;K<T.length;K++){const H=T[K],$=e.getContext(H,j);if($!==null)return $}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",We,!1),e.addEventListener("webglcontextcreationerror",st,!1),B===null){const j=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&j.shift(),B=_e(j,T),B===null)throw _e(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ee,pe,ye,Xe,Y,ue,He,vt,yt,Ot,xt,Ce,Tt,Nt,L,A,J,se,le,me,Ne,C,ie,ce;function ge(){Ee=new sg(B),pe=new $m(B,Ee,i),Ee.init(pe),C=new B_(B,Ee,pe),ye=new U_(B,Ee,pe),Xe=new lg,Y=new E_,ue=new G_(B,Ee,ye,Y,pe,C,Xe),He=new tg(h),vt=new rg(h),yt=new bh(B,pe),ie=new Jm(B,Ee,yt,pe),Ot=new og(B,yt,Xe,ie),xt=new dg(B,Ot,yt,Xe),le=new fg(B,pe,ue),A=new eg(Y),Ce=new S_(h,He,vt,Ee,pe,ie,A),Tt=new q_(h,Y),Nt=new T_,L=new I_(Ee,pe),se=new Km(h,He,ye,xt,u,o),J=new z_(h,xt,pe),ce=new X_(B,Xe,pe,ye),me=new Qm(B,Ee,Xe,pe),Ne=new ag(B,Ee,Xe,pe),Xe.programs=Ce.programs,h.capabilities=pe,h.extensions=Ee,h.properties=Y,h.renderLists=Nt,h.shadowMap=J,h.state=ye,h.info=Xe}ge();const he=new j_(h,B);this.xr=he,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=Ee.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ee.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(T){T!==void 0&&(R=T,this.setSize(E,M,!1))},this.getSize=function(T){return T.set(E,M)},this.setSize=function(T,j,K){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,M=j,e.width=Math.floor(T*R),e.height=Math.floor(j*R),K!==!1&&(e.style.width=T+"px",e.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(E*R,M*R).floor()},this.setDrawingBufferSize=function(T,j,K){E=T,M=j,R=K,e.width=Math.floor(T*K),e.height=Math.floor(j*K),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,j,K,H){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,j,K,H),ye.viewport(S.copy(N).multiplyScalar(R).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,j,K,H){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,j,K,H),ye.scissor(I.copy(O).multiplyScalar(R).floor())},this.getScissorTest=function(){return P},this.setScissorTest=function(T){ye.setScissorTest(P=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(T=!0,j=!0,K=!0){let H=0;T&&(H|=16384),j&&(H|=256),K&&(H|=1024),B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",We,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Nt.dispose(),L.dispose(),Y.dispose(),He.dispose(),vt.dispose(),xt.dispose(),ie.dispose(),ce.dispose(),Ce.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ke),he.removeEventListener("sessionend",bt),G&&(G.dispose(),G=null),dt.stop()};function Oe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Xe.autoReset,j=J.enabled,K=J.autoUpdate,H=J.needsUpdate,$=J.type;ge(),Xe.autoReset=T,J.enabled=j,J.autoUpdate=K,J.needsUpdate=H,J.type=$}function st(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function U(T){const j=T.target;j.removeEventListener("dispose",U),fe(j)}function fe(T){Z(T),Y.remove(T)}function Z(T){const j=Y.get(T).programs;j!==void 0&&(j.forEach(function(K){Ce.releaseProgram(K)}),T.isShaderMaterial&&Ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,K,H,$,Le){j===null&&(j=re);const ze=$.isMesh&&$.matrixWorld.determinant()<0,Be=lo(T,j,K,H,$);ye.setMaterial(H,ze);let Ge=K.index;const Je=K.attributes.position;if(Ge===null){if(Je===void 0||Je.count===0)return}else if(Ge.count===0)return;let je=1;H.wireframe===!0&&(Ge=Ot.getWireframeAttribute(K),je=2),ie.setup($,H,Be,K,Ge);let Ye,ht=me;Ge!==null&&(Ye=yt.get(Ge),ht=Ne,ht.setIndex(Ye));const zn=Ge!==null?Ge.count:Je.count,ti=K.drawRange.start*je,ni=K.drawRange.count*je,ln=Le!==null?Le.start*je:0,it=Le!==null?Le.count*je:1/0,ii=Math.max(ti,ln),Mt=Math.min(zn,ti+ni,ln+it)-1,Xt=Math.max(0,Mt-ii+1);if(Xt!==0){if($.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*we()),ht.setMode(1)):ht.setMode(4);else if($.isLine){let Pn=H.linewidth;Pn===void 0&&(Pn=1),ye.setLineWidth(Pn*we()),$.isLineSegments?ht.setMode(1):$.isLineLoop?ht.setMode(2):ht.setMode(3)}else $.isPoints?ht.setMode(0):$.isSprite&&ht.setMode(4);if($.isInstancedMesh)ht.renderInstances(ii,Xt,$.count);else if(K.isInstancedBufferGeometry){const Pn=Math.min(K.instanceCount,K._maxInstanceCount);ht.renderInstances(ii,Xt,Pn)}else ht.render(ii,Xt)}},this.compile=function(T,j){function K(H,$,Le){H.transparent===!0&&H.side===fi?(H.side=mn,H.needsUpdate=!0,bi(H,$,Le),H.side=fr,H.needsUpdate=!0,bi(H,$,Le),H.side=fi):bi(H,$,Le)}d=L.get(T),d.init(),g.push(d),T.traverseVisible(function(H){H.isLight&&H.layers.test(j.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights(h.physicallyCorrectLights),T.traverse(function(H){const $=H.material;if($)if(Array.isArray($))for(let Le=0;Le<$.length;Le++){const ze=$[Le];K(ze,T,H)}else K($,T,H)}),g.pop(),d=null};let xe=null;function ve(T){xe&&xe(T)}function Ke(){dt.stop()}function bt(){dt.start()}const dt=new Yu;dt.setAnimationLoop(ve),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(T){xe=T,he.setAnimationLoop(T),T===null?dt.stop():dt.start()},he.addEventListener("sessionstart",Ke),he.addEventListener("sessionend",bt),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(j),j=he.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,j,x),d=L.get(T,g.length),d.init(),g.push(d),W.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),q.setFromProjectionMatrix(W),V=this.localClippingEnabled,X=A.init(this.clippingPlanes,V,j),f=Nt.get(T,m.length),f.init(),m.push(f),an(T,j,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(k,D),X===!0&&A.beginShadows();const K=d.state.shadowsArray;if(J.render(K,T,j),X===!0&&A.endShadows(),this.info.autoReset===!0&&this.info.reset(),se.render(f,T),d.setupLights(h.physicallyCorrectLights),j.isArrayCamera){const H=j.cameras;for(let $=0,Le=H.length;$<Le;$++){const ze=H[$];ct(f,T,ze,ze.viewport)}}else ct(f,T,j);x!==null&&(ue.updateMultisampleRenderTarget(x),ue.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(h,T,j),ie.resetDefaultState(),w=-1,y=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function an(T,j,K,H){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){H&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);const ze=xt.update(T),Be=T.material;Be.visible&&f.push(T,ze,Be,K,oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Xe.render.frame&&(T.skeleton.update(),T.skeleton.frame=Xe.render.frame),!T.frustumCulled||q.intersectsObject(T))){H&&oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);const ze=xt.update(T),Be=T.material;if(Array.isArray(Be)){const Ge=ze.groups;for(let Je=0,je=Ge.length;Je<je;Je++){const Ye=Ge[Je],ht=Be[Ye.materialIndex];ht&&ht.visible&&f.push(T,ze,ht,K,oe.z,Ye)}}else Be.visible&&f.push(T,ze,Be,K,oe.z,null)}}const Le=T.children;for(let ze=0,Be=Le.length;ze<Be;ze++)an(Le[ze],j,K,H)}function ct(T,j,K,H){const $=T.opaque,Le=T.transmissive,ze=T.transparent;d.setupLightsView(K),Le.length>0&&vn($,j,K),H&&ye.viewport(S.copy(H)),$.length>0&&qt($,j,K),Le.length>0&&qt(Le,j,K),ze.length>0&&qt(ze,j,K),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function vn(T,j,K){const H=pe.isWebGL2;G===null&&(G=new mi(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?Gr:Ni,minFilter:js,samples:H&&s===!0?4:0})),h.getDrawingBufferSize(te),H?G.setSize(te.x,te.y):G.setSize(oa(te.x),oa(te.y));const $=h.getRenderTarget();h.setRenderTarget(G),h.clear();const Le=h.toneMapping;h.toneMapping=On,qt(T,j,K),h.toneMapping=Le,ue.updateMultisampleRenderTarget(G),ue.updateRenderTargetMipmap(G),h.setRenderTarget($)}function qt(T,j,K){const H=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Le=T.length;$<Le;$++){const ze=T[$],Be=ze.object,Ge=ze.geometry,Je=H===null?ze.material:H,je=ze.group;Be.layers.test(K.layers)&&Ht(Be,j,K,Ge,Je,je)}}function Ht(T,j,K,H,$,Le){T.onBeforeRender(h,j,K,H,$,Le),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(h,j,K,H,T,Le),$.transparent===!0&&$.side===fi?($.side=mn,$.needsUpdate=!0,h.renderBufferDirect(K,j,H,$,T,Le),$.side=fr,$.needsUpdate=!0,h.renderBufferDirect(K,j,H,$,T,Le),$.side=fi):h.renderBufferDirect(K,j,H,$,T,Le),T.onAfterRender(h,j,K,H,$,Le)}function bi(T,j,K){j.isScene!==!0&&(j=re);const H=Y.get(T),$=d.state.lights,Le=d.state.shadowsArray,ze=$.state.version,Be=Ce.getParameters(T,$.state,Le,j,K),Ge=Ce.getProgramCacheKey(Be);let Je=H.programs;H.environment=T.isMeshStandardMaterial?j.environment:null,H.fog=j.fog,H.envMap=(T.isMeshStandardMaterial?vt:He).get(T.envMap||H.environment),Je===void 0&&(T.addEventListener("dispose",U),Je=new Map,H.programs=Je);let je=Je.get(Ge);if(je!==void 0){if(H.currentProgram===je&&H.lightsStateVersion===ze)return Zr(T,Be),je}else Be.uniforms=Ce.getUniforms(T),T.onBuild(K,Be,h),T.onBeforeCompile(Be,h),je=Ce.acquireProgram(Be,Ge),Je.set(Ge,je),H.uniforms=Be.uniforms;const Ye=H.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=A.uniform),Zr(T,Be),H.needsLights=Kr(T),H.lightsStateVersion=ze,H.needsLights&&(Ye.ambientLightColor.value=$.state.ambient,Ye.lightProbe.value=$.state.probe,Ye.directionalLights.value=$.state.directional,Ye.directionalLightShadows.value=$.state.directionalShadow,Ye.spotLights.value=$.state.spot,Ye.spotLightShadows.value=$.state.spotShadow,Ye.rectAreaLights.value=$.state.rectArea,Ye.ltc_1.value=$.state.rectAreaLTC1,Ye.ltc_2.value=$.state.rectAreaLTC2,Ye.pointLights.value=$.state.point,Ye.pointLightShadows.value=$.state.pointShadow,Ye.hemisphereLights.value=$.state.hemi,Ye.directionalShadowMap.value=$.state.directionalShadowMap,Ye.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ye.spotShadowMap.value=$.state.spotShadowMap,Ye.spotLightMatrix.value=$.state.spotLightMatrix,Ye.spotLightMap.value=$.state.spotLightMap,Ye.pointShadowMap.value=$.state.pointShadowMap,Ye.pointShadowMatrix.value=$.state.pointShadowMatrix);const ht=je.getUniforms(),zn=Ts.seqWithValue(ht.seq,Ye);return H.currentProgram=je,H.uniformsList=zn,je}function Zr(T,j){const K=Y.get(T);K.outputEncoding=j.outputEncoding,K.instancing=j.instancing,K.skinning=j.skinning,K.morphTargets=j.morphTargets,K.morphNormals=j.morphNormals,K.morphColors=j.morphColors,K.morphTargetsCount=j.morphTargetsCount,K.numClippingPlanes=j.numClippingPlanes,K.numIntersection=j.numClipIntersection,K.vertexAlphas=j.vertexAlphas,K.vertexTangents=j.vertexTangents,K.toneMapping=j.toneMapping}function lo(T,j,K,H,$){j.isScene!==!0&&(j=re),ue.resetTextureUnits();const Le=j.fog,ze=H.isMeshStandardMaterial?j.environment:null,Be=x===null?h.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:pi,Ge=(H.isMeshStandardMaterial?vt:He).get(H.envMap||ze),Je=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,je=!!H.normalMap&&!!K.attributes.tangent,Ye=!!K.morphAttributes.position,ht=!!K.morphAttributes.normal,zn=!!K.morphAttributes.color,ti=H.toneMapped?h.toneMapping:On,ni=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ln=ni!==void 0?ni.length:0,it=Y.get(H),ii=d.state.lights;if(X===!0&&(V===!0||T!==y)){const F=T===y&&H.id===w;A.setState(H,T,F)}let Mt=!1;H.version===it.__version?(it.needsLights&&it.lightsStateVersion!==ii.state.version||it.outputEncoding!==Be||$.isInstancedMesh&&it.instancing===!1||!$.isInstancedMesh&&it.instancing===!0||$.isSkinnedMesh&&it.skinning===!1||!$.isSkinnedMesh&&it.skinning===!0||it.envMap!==Ge||H.fog===!0&&it.fog!==Le||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==A.numPlanes||it.numIntersection!==A.numIntersection)||it.vertexAlphas!==Je||it.vertexTangents!==je||it.morphTargets!==Ye||it.morphNormals!==ht||it.morphColors!==zn||it.toneMapping!==ti||pe.isWebGL2===!0&&it.morphTargetsCount!==ln)&&(Mt=!0):(Mt=!0,it.__version=H.version);let Xt=it.currentProgram;Mt===!0&&(Xt=bi(H,j,$));let Pn=!1,yi=!1,Mr=!1;const Ft=Xt.getUniforms(),Un=it.uniforms;if(ye.useProgram(Xt.program)&&(Pn=!0,yi=!0,Mr=!0),H.id!==w&&(w=H.id,yi=!0),Pn||y!==T){if(Ft.setValue(B,"projectionMatrix",T.projectionMatrix),pe.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),y!==T&&(y=T,yi=!0,Mr=!0),H.isShaderMaterial||H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshStandardMaterial||H.envMap){const F=Ft.map.cameraPosition;F!==void 0&&F.setValue(B,oe.setFromMatrixPosition(T.matrixWorld))}(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial||H.isShadowMaterial||$.isSkinnedMesh)&&Ft.setValue(B,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){Ft.setOptional(B,$,"bindMatrix"),Ft.setOptional(B,$,"bindMatrixInverse");const F=$.skeleton;F&&(pe.floatVertexTextures?(F.boneTexture===null&&F.computeBoneTexture(),Ft.setValue(B,"boneTexture",F.boneTexture,ue),Ft.setValue(B,"boneTextureSize",F.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sr=K.morphAttributes;if((Sr.position!==void 0||Sr.normal!==void 0||Sr.color!==void 0&&pe.isWebGL2===!0)&&le.update($,K,H,Xt),(yi||it.receiveShadow!==$.receiveShadow)&&(it.receiveShadow=$.receiveShadow,Ft.setValue(B,"receiveShadow",$.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Un.envMap.value=Ge,Un.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),yi&&(Ft.setValue(B,"toneMappingExposure",h.toneMappingExposure),it.needsLights&&wi(Un,Mr),Le&&H.fog===!0&&Tt.refreshFogUniforms(Un,Le),Tt.refreshMaterialUniforms(Un,H,R,M,G),Ts.upload(B,it.uniformsList,Un,ue)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ts.upload(B,it.uniformsList,Un,ue),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ft.setValue(B,"center",$.center),Ft.setValue(B,"modelViewMatrix",$.modelViewMatrix),Ft.setValue(B,"normalMatrix",$.normalMatrix),Ft.setValue(B,"modelMatrix",$.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const F=H.uniformsGroups;for(let Se=0,St=F.length;Se<St;Se++)if(pe.isWebGL2){const Gn=F[Se];ce.update(Gn,Xt),ce.bind(Gn,Xt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xt}function wi(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Kr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,j,K){Y.get(T.texture).__webglTexture=j,Y.get(T.depthTexture).__webglTexture=K;const H=Y.get(T);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=K===void 0,H.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,j){const K=Y.get(T);K.__webglFramebuffer=j,K.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(T,j=0,K=0){x=T,_=j,b=K;let H=!0;if(T){const Ge=Y.get(T);Ge.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(36160,null),H=!1):Ge.__webglFramebuffer===void 0?ue.setupRenderTarget(T):Ge.__hasExternalTextures&&ue.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture)}let $=null,Le=!1,ze=!1;if(T){const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture)&&(ze=!0);const Je=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Je[j],Le=!0):pe.isWebGL2&&T.samples>0&&ue.useMultisampledRTT(T)===!1?$=Y.get(T).__webglMultisampledFramebuffer:$=Je,S.copy(T.viewport),I.copy(T.scissor),v=T.scissorTest}else S.copy(N).multiplyScalar(R).floor(),I.copy(O).multiplyScalar(R).floor(),v=P;if(ye.bindFramebuffer(36160,$)&&pe.drawBuffers&&H&&ye.drawBuffers(T,$),ye.viewport(S),ye.scissor(I),ye.setScissorTest(v),Le){const Ge=Y.get(T.texture);B.framebufferTexture2D(36160,36064,34069+j,Ge.__webglTexture,K)}else if(ze){const Ge=Y.get(T.texture),Je=j||0;B.framebufferTextureLayer(36160,36064,Ge.__webglTexture,K||0,Je)}w=-1},this.readRenderTargetPixels=function(T,j,K,H,$,Le,ze){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ze!==void 0&&(Be=Be[ze]),Be){ye.bindFramebuffer(36160,Be);try{const Ge=T.texture,Je=Ge.format,je=Ge.type;if(Je!==In&&C.convert(Je)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=je===Gr&&(Ee.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(je!==Ni&&C.convert(je)!==B.getParameter(35738)&&!(je===Di&&(pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-H&&K>=0&&K<=T.height-$&&B.readPixels(j,K,H,$,C.convert(Je),C.convert(je),Le)}finally{const Ge=x!==null?Y.get(x).__webglFramebuffer:null;ye.bindFramebuffer(36160,Ge)}}},this.copyFramebufferToTexture=function(T,j,K=0){const H=Math.pow(2,-K),$=Math.floor(j.image.width*H),Le=Math.floor(j.image.height*H);ue.setTexture2D(j,0),B.copyTexSubImage2D(3553,K,0,0,T.x,T.y,$,Le),ye.unbindTexture()},this.copyTextureToTexture=function(T,j,K,H=0){const $=j.image.width,Le=j.image.height,ze=C.convert(K.format),Be=C.convert(K.type);ue.setTexture2D(K,0),B.pixelStorei(37440,K.flipY),B.pixelStorei(37441,K.premultiplyAlpha),B.pixelStorei(3317,K.unpackAlignment),j.isDataTexture?B.texSubImage2D(3553,H,T.x,T.y,$,Le,ze,Be,j.image.data):j.isCompressedTexture?B.compressedTexSubImage2D(3553,H,T.x,T.y,j.mipmaps[0].width,j.mipmaps[0].height,ze,j.mipmaps[0].data):B.texSubImage2D(3553,H,T.x,T.y,ze,Be,j.image),H===0&&K.generateMipmaps&&B.generateMipmap(3553),ye.unbindTexture()},this.copyTextureToTexture3D=function(T,j,K,H,$=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,ze=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,Ge=C.convert(H.format),Je=C.convert(H.type);let je;if(H.isData3DTexture)ue.setTexture3D(H,0),je=32879;else if(H.isDataArrayTexture)ue.setTexture2DArray(H,0),je=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,H.flipY),B.pixelStorei(37441,H.premultiplyAlpha),B.pixelStorei(3317,H.unpackAlignment);const Ye=B.getParameter(3314),ht=B.getParameter(32878),zn=B.getParameter(3316),ti=B.getParameter(3315),ni=B.getParameter(32877),ln=K.isCompressedTexture?K.mipmaps[0]:K.image;B.pixelStorei(3314,ln.width),B.pixelStorei(32878,ln.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(je,$,j.x,j.y,j.z,Le,ze,Be,Ge,Je,ln.data):K.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(je,$,j.x,j.y,j.z,Le,ze,Be,Ge,ln.data)):B.texSubImage3D(je,$,j.x,j.y,j.z,Le,ze,Be,Ge,Je,ln),B.pixelStorei(3314,Ye),B.pixelStorei(32878,ht),B.pixelStorei(3316,zn),B.pixelStorei(3315,ti),B.pixelStorei(32877,ni),$===0&&H.generateMipmaps&&B.generateMipmap(je),ye.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?ue.setTextureCube(T,0):T.isData3DTexture?ue.setTexture3D(T,0):T.isDataArrayTexture?ue.setTexture2DArray(T,0):ue.setTexture2D(T,0),ye.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,ye.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Z_ extends $u{}Z_.prototype.isWebGL1Renderer=!0;class K_ extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Kl extends Ln{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jl=new ut,Ql=new ut,ws=[],Cr=new hn;class Rs extends hn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Cr.geometry=this.geometry,Cr.material=this.material,Cr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Jl),Ql.multiplyMatrices(n,Jl),Cr.matrixWorld=Ql,Cr.raycast(e,ws);for(let o=0,a=ws.length;o<a;o++){const l=ws[o];l.instanceId=s,l.object=this,t.push(l)}ws.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Kl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ef extends vr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $l=new z,ec=new z,tc=new ut,Ho=new _a,ys=new qs;class J_ extends ot{constructor(e=new on,t=new ef){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)$l.fromBufferAttribute(t,r-1),ec.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=$l.distanceTo(ec);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),ys.radius+=s,e.ray.intersectsSphere(ys)===!1)return;tc.copy(r).invert(),Ho.copy(e.ray).applyMatrix4(tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new z,u=new z,f=new z,d=new z,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=_,w=b-1;x<w;x+=m){const y=g.getX(x),S=g.getX(x+1);if(c.fromBufferAttribute(p,y),u.fromBufferAttribute(p,S),Ho.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(d);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let x=_,w=b-1;x<w;x+=m){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Ho.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Ks extends on{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const h=[],p=n/2;let _=0;b(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Pt(f,3)),this.setAttribute("normal",new Pt(d,3)),this.setAttribute("uv",new Pt(m,2));function b(){const w=new z,y=new z;let S=0;const I=(t-e)/n;for(let v=0;v<=s;v++){const E=[],M=v/s,R=M*(t-e)+e;for(let k=0;k<=r;k++){const D=k/r,N=D*l+a,O=Math.sin(N),P=Math.cos(N);y.x=R*O,y.y=-M*n+p,y.z=R*P,f.push(y.x,y.y,y.z),w.set(O,I,P).normalize(),d.push(w.x,w.y,w.z),m.push(D,1-M),E.push(g++)}h.push(E)}for(let v=0;v<r;v++)for(let E=0;E<s;E++){const M=h[E][v],R=h[E+1][v],k=h[E+1][v+1],D=h[E][v+1];u.push(M,R,D),u.push(R,k,D),S+=6}c.addGroup(_,S,0),_+=S}function x(w){const y=g,S=new ke,I=new z;let v=0;const E=w===!0?e:t,M=w===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,p*M,0),d.push(0,M,0),m.push(.5,.5),g++;const R=g;for(let k=0;k<=r;k++){const N=k/r*l+a,O=Math.cos(N),P=Math.sin(N);I.x=E*P,I.y=p*M,I.z=E*O,f.push(I.x,I.y,I.z),d.push(0,M,0),S.x=O*.5+.5,S.y=P*.5*M+.5,m.push(S.x,S.y),g++}for(let k=0;k<r;k++){const D=y+k,N=R+k;w===!0?u.push(N,N+1,D):u.push(N+1,N,D),v+=3}c.addGroup(_,v,w===!0?1:2),_+=v}}static fromJSON(e){return new Ks(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ma extends on{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const x=new z,w=new z,y=new z;for(let S=0;S<t.length;S+=3)m(t[S+0],x),m(t[S+1],w),m(t[S+2],y),l(x,w,y,b)}function l(b,x,w,y){const S=y+1,I=[];for(let v=0;v<=S;v++){I[v]=[];const E=b.clone().lerp(w,v/S),M=x.clone().lerp(w,v/S),R=S-v;for(let k=0;k<=R;k++)k===0&&v===S?I[v][k]=E:I[v][k]=E.clone().lerp(M,k/R)}for(let v=0;v<S;v++)for(let E=0;E<2*(S-v)-1;E++){const M=Math.floor(E/2);E%2===0?(d(I[v][M+1]),d(I[v+1][M]),d(I[v][M])):(d(I[v][M+1]),d(I[v+1][M+1]),d(I[v+1][M]))}}function c(b){const x=new z;for(let w=0;w<s.length;w+=3)x.x=s[w+0],x.y=s[w+1],x.z=s[w+2],x.normalize().multiplyScalar(b),s[w+0]=x.x,s[w+1]=x.y,s[w+2]=x.z}function u(){const b=new z;for(let x=0;x<s.length;x+=3){b.x=s[x+0],b.y=s[x+1],b.z=s[x+2];const w=p(b)/2/Math.PI+.5,y=_(b)/Math.PI+.5;o.push(w,1-y)}g(),f()}function f(){for(let b=0;b<o.length;b+=6){const x=o[b+0],w=o[b+2],y=o[b+4],S=Math.max(x,w,y),I=Math.min(x,w,y);S>.9&&I<.1&&(x<.2&&(o[b+0]+=1),w<.2&&(o[b+2]+=1),y<.2&&(o[b+4]+=1))}}function d(b){s.push(b.x,b.y,b.z)}function m(b,x){const w=b*3;x.x=e[w+0],x.y=e[w+1],x.z=e[w+2]}function g(){const b=new z,x=new z,w=new z,y=new z,S=new ke,I=new ke,v=new ke;for(let E=0,M=0;E<s.length;E+=9,M+=6){b.set(s[E+0],s[E+1],s[E+2]),x.set(s[E+3],s[E+4],s[E+5]),w.set(s[E+6],s[E+7],s[E+8]),S.set(o[M+0],o[M+1]),I.set(o[M+2],o[M+3]),v.set(o[M+4],o[M+5]),y.copy(b).add(x).add(w).divideScalar(3);const R=p(y);h(S,M+0,b,R),h(I,M+2,x,R),h(v,M+4,w,R)}}function h(b,x,w,y){y<0&&b.x===1&&(o[x]=b.x-1),w.x===0&&w.z===0&&(o[x]=y/2/Math.PI+.5)}function p(b){return Math.atan2(b.z,-b.x)}function _(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}static fromJSON(e){return new Ma(e.vertices,e.indices,e.radius,e.details)}}class Sa extends Ma{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Sa(e.radius,e.detail)}}class Cs extends vr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const nc={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Q_{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const $_=new Q_;class tf{constructor(e){this.manager=e!==void 0?e:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class e0 extends tf{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=nc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Br("img");function l(){u(),nc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ic extends tf{constructor(e){super(e)}load(e,t,n,r){const s=new _n,o=new e0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class nf extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const rc=new ut,sc=new z,oc=new z;class t0{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(sc),oc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oc),t.updateMatrixWorld(),rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n0 extends t0{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class i0 extends nf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new n0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class r0 extends nf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ac(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ac();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ac(){return(typeof performance>"u"?Date:performance).now()}class s0{constructor(e,t,n=0,r=1/0){this.ray=new _a(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new va,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return la(e,this,n,t),n.sort(lc),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)la(e[r],this,n,t);return n.sort(lc),n}}function lc(i,e){return i.distance-e.distance}function la(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)la(r[s],e,t,!0)}}class Is{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const cc=new z;let xs,Wo;class o0 extends ot{constructor(e=new z(0,0,1),t=new z(0,0,0),n=1,r=16776960,s=n*.2,o=s*.2){super(),this.type="ArrowHelper",xs===void 0&&(xs=new on,xs.setAttribute("position",new Pt([0,0,0,0,1,0],3)),Wo=new Ks(0,.5,1,5,1),Wo.translate(0,-.5,0)),this.position.copy(t),this.line=new J_(xs,new ef({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new hn(Wo,new ba({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,o)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{cc.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(cc,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);const uc={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Js{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}}const a0=new Ys(-1,1,1,-1,0,1),Ea=new on;Ea.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3));Ea.setAttribute("uv",new Pt([0,2,0,0,2,0],2));class l0{constructor(e){this._mesh=new hn(Ea,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fc extends Js{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Kn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=qu.clone(e.uniforms),this.material=new Kn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new l0(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}}class dc extends Js{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class c0 extends Js{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class u0{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new ke);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new mi(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],uc===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),fc===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new fc(uc),this.clock=new rf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}dc!==void 0&&(o instanceof dc?n=!0:o instanceof c0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}}new Ys(-1,1,1,-1,0,1);const sf=new on;sf.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3));sf.setAttribute("uv",new Pt([0,2,0,0,2,0],2));class of extends Js{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const f0=(i,e,t)=>{i.renderer=new $u({powerPreference:"high-performance",canvas:e,antialias:!0,alpha:!0,...t}),i.composer=new u0(i.renderer),i.composer.addPass(new of(i.scene,di(i.camera)))},hc=(i,e,t)=>{!i.renderer||(e?i.renderer.outputEncoding=pi:i.renderer.outputEncoding=wt,t?i.renderer.toneMapping=On:i.renderer.toneMapping=Nu)},pc=(i,e,t)=>{!i.renderer||!i.composer||(i.renderer.setSize(e.width,e.height),i.renderer.setPixelRatio(t),i.composer.setSize(e.width,e.height),i.composer.setPixelRatio(t))},mc=(i,e,t)=>{!i.renderer||(i.renderer.shadowMap.enabled=e,i.renderer.shadowMap.type=t)},pn=i=>i.userData,d0=(i,e)=>{i.pointer.update(t=>i.renderer?t.set(e.offsetX/i.renderer.domElement.clientWidth*2-1,-(e.offsetY/i.renderer.domElement.clientHeight)*2+1):t)},af=(i,e,t,n)=>(i.raycaster.setFromCamera(e,t),i.raycaster.intersectObjects(n,!1)),h0=(i,e)=>i.object.uuid!==e.object.uuid||i.instanceId!==e.instanceId,p0=(i,e,t)=>{let n=di(i.camera);const r=i.camera.subscribe(c=>n=c);At(r);let s=di(i.pointer);const o=i.pointer.subscribe(c=>s=c);At(o);let a;const l=c=>{var d,m;c.preventDefault();const u=c.type;i.pointerOverCanvas.set(!0),t.pointerInvalidated=!0,d0(i,c);const f=m0(e,s,n);if(u==="pointerdown"&&(a=f?{object:f.object,instanceId:f.instanceId}:null),u==="click"){if(!g0(f,a)){a=null;return}a=null}!f||(m=(d=pn(f.object)).eventDispatcher)==null||m.call(d,u,{...f,event:c})};return{onClick:l,onContextMenu:l,onPointerUp:l,onPointerDown:l,onPointerMove:l}};function m0(i,e,t){if(i.interactiveObjects.size===0||i.raycastableObjects.size===0)return null;const n=af(i,e,t,Array.from(i.raycastableObjects));return n.length===0||!i.interactiveObjects.has(n[0].object)?null:n[0]}function g0(i,e){return!i||!e?!1:i.object.uuid===e.object.uuid&&i.instanceId===e.instanceId}const _0=(i,e)=>{let t=di(i.pointerOverCanvas);const n=i.pointerOverCanvas.subscribe(c=>t=c);At(n);let r=di(i.camera);const s=i.camera.subscribe(c=>r=c);At(s);let o=di(i.pointer);const a=i.pointer.subscribe(c=>o=c);return At(a),{raycast:()=>{var f,d,m,g,h,p,_,b;if(e.interactiveObjects.size===0||e.raycastableObjects.size===0)return;const c=t?af(e,o,r,Array.from(e.raycastableObjects)):[],u=c.length&&e.interactiveObjects.has(c[0].object)?c[0]:null;u?e.lastIntersection?e.lastIntersection&&h0(e.lastIntersection,u)&&((p=(h=pn(e.lastIntersection.object)).eventDispatcher)==null||p.call(h,"pointerleave",e.lastIntersection),(b=(_=pn(u.object)).eventDispatcher)==null||b.call(_,"pointerenter",u)):(g=(m=pn(u.object)).eventDispatcher)==null||g.call(m,"pointerenter",u):e.lastIntersection&&((d=(f=pn(e.lastIntersection.object)).eventDispatcher)==null||d.call(f,"pointerleave",e.lastIntersection)),e.lastIntersection=u}}},Qs=typeof window<"u",v0=i=>{if(!Qs)return;let e;const t=()=>{i(),e=requestAnimationFrame(t)};t(),At(()=>{!e||cancelAnimationFrame(e)})},b0=(i,e)=>{if(e.frameHandlers.size===0)return;if(e.debugFrameloop){let r=0;e.frameHandlers.forEach(s=>{s.debugFrameloopMessage?e.invalidations[s.debugFrameloopMessage]=s.debugFrameloopMessage in e.invalidations?e.invalidations[s.debugFrameloopMessage]+1:1:++r}),r>0&&(e.invalidations.onFrame=e.frameHandlers.size)}const t=Array.from(e.frameHandlers).reduce((r,s)=>s.order?!0:r,!1),n=i.clock.getDelta();t?Array.from(e.frameHandlers).sort((r,s)=>{var o,a;return((o=r.order)!=null?o:0)>((a=s.order)!=null?a:0)?1:-1}).forEach(r=>r.fn(i,n)):e.frameHandlers.forEach(r=>r.fn(i,n))},w0=i=>{!i.debugFrameloop||(i.frame+=1,console.log(`frame: ${i.frame}${Object.keys(i.invalidations).length>0?", requested by \u21B4":""}`),Object.keys(i.invalidations).length>0&&console.table(i.invalidations),i.invalidations={})},y0=(i,e,t,n)=>{let r=di(i.camera);const s=i.camera.subscribe(a=>r=a);At(s);const{raycast:o}=_0(i,e);v0(()=>{n.dispose();const a=t.frameloop==="always"||t.frameloop==="demand"&&(t.frameInvalidated||t.frameHandlers.size>0)||t.frameloop==="never"&&t.advance;(a||t.pointerInvalidated)&&(o(),t.pointerInvalidated=!1),a&&(!r||!i.composer||!i.renderer||(b0(i,t),i.composer.passes.length>1?i.composer.render():i.renderer.render(i.scene,r),w0(t),t.frameInvalidated=!1,t.advance=!1))})},x0=()=>{const i=new rn(75,0,.1,1e3);return pn(i).threlteDefaultCamera=!0,i.position.z=5,i.lookAt(0,0,0),i},M0=i=>{const e=i.size.subscribe(t=>{pn(di(i.camera)).threlteDefaultCamera&&i.camera.update(n=>{const r=n;return r.aspect=t.width/t.height,r.updateProjectionMatrix(),i.invalidate("Default camera: aspect ratio changed"),r})});At(e)},S0=(i,e,t,n,r,s,o)=>{const a={audioListeners:new Map,addAudioListener:(_,b)=>{if(b=b!=null?b:"default",a.audioListeners.has(b)){console.warn(`An AudioListener with the id "${b}" has already been added, aborting.`);return}a.audioListeners.set(b,_)},removeAudioListener:_=>{if(_=_!=null?_:"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}a.audioListeners.delete(_)},getAudioListener:_=>{if(_=_!=null?_:"default",!a.audioListeners.has(_)){console.warn(`No AudioListener with the id "${_}" found, aborting.`);return}return a.audioListeners.get(_)}},l={debugFrameloop:s,frameloop:o,frame:0,frameInvalidated:!0,pointerInvalidated:!0,invalidations:{},frameHandlers:new Set,advance:!1},c={size:Hs([n,r],([_,b])=>_||b),pointer:Et(new ke),pointerOverCanvas:Et(!1),clock:new rf,camera:Et(x0()),scene:new K_,renderer:void 0,composer:void 0,invalidate:_=>{l.frameInvalidated=!0,l.debugFrameloop&&_&&(l.invalidations[_]=l.invalidations[_]?l.invalidations[_]+1:1)},advance:()=>{l.advance=!0}},u={flat:Et(e),linear:Et(i),dpr:Et(t),setCamera:_=>{c.camera.set(_),c.composer&&(c.composer.passes.forEach(b=>{b instanceof of&&(b.camera=_)}),c.invalidate("Canvas: setting camera"))},raycastableObjects:new Set,interactiveObjects:new Set,raycaster:new s0,lastIntersection:null,addRaycastableObject:_=>{u.raycastableObjects.add(_)},removeRaycastableObject:_=>{u.raycastableObjects.delete(_)},addInteractiveObject:_=>{u.interactiveObjects.add(_)},removeInteractiveObject:_=>{u.interactiveObjects.delete(_)},addPass:_=>{!c.composer||(c.composer.addPass(_),c.invalidate("Canvas: adding pass"))},removePass:_=>{!c.composer||(c.composer.removePass(_),c.invalidate("Canvas: removing pass"))}},f={dispose:async(_=!1)=>{await Ur(),!(!f.shouldDispose&&!_)&&(f.disposableObjects.forEach((b,x)=>{var w;(b===0||_)&&((w=x==null?void 0:x.dispose)==null||w.call(x),f.disposableObjects.delete(x))}),f.shouldDispose=!1)},collectDisposableObjects:(_,b)=>{const x=b!=null?b:[];return _&&((_==null?void 0:_.dispose)&&typeof _.dispose=="function"&&_.type!=="Scene"&&x.push(_),Object.entries(_).forEach(([w,y])=>{if(w==="parent"||w==="children"||typeof y!="object")return;const S=y;S!=null&&S.dispose&&f.collectDisposableObjects(S,x)})),x},addDisposableObjects:_=>{_.forEach(b=>{const x=f.disposableObjects.get(b);x?f.disposableObjects.set(b,x+1):f.disposableObjects.set(b,1)})},removeDisposableObjects:_=>{_.length!==0&&(_.forEach(b=>{const x=f.disposableObjects.get(b);x&&x>0&&f.disposableObjects.set(b,x-1)}),f.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1};return En("threlte",c),En("threlte-root",u),En("threlte-render-context",l),En("threlte-audio-context",a),En("threlte-disposal-context",f),{ctx:c,rootCtx:u,renderCtx:l,audioCtx:a,disposalCtx:f,getCtx:()=>c,getRootCtx:()=>u,getRenderCtx:()=>l,getAudioCtx:()=>a,getDisposalCtx:()=>f}};function $s(i,e){const t=Et(i);let n=i;const r=t.subscribe(a=>n=a);return At(r),{...t,set:a=>{if((a==null?void 0:a.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(a),e==null||e(a,l)},update:a=>{const l=a(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Dn=()=>Nn("threlte");function E0(i){let e;const t=i[8].default,n=pt(t,i,i[7],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&128)&&gt(n,t,r,r[7],e?mt(t,r[7],s,null):_t(r[7]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}const A0=()=>({onChildMount:Nn("threlte-hierarchical-object-on-mount"),onChildDestroy:Nn("threlte-hierarchical-object-on-destroy")}),lf=()=>Nn("threlte-hierarchical-parent-context");function T0(i,e,t){var _;let n,{$$slots:r={},$$scope:s}=e,{object:o=void 0}=e,{children:a=[]}=e,{onChildMount:l=void 0}=e;const c=b=>{a.push(b),t(1,a),l==null||l(b)};let{onChildDestroy:u=void 0}=e;const f=b=>{const x=a.findIndex(w=>w.uuid===b.uuid);x!==-1&&a.splice(x,1),t(1,a),u==null||u(b)},{invalidate:d}=Dn(),m=lf();et(i,m,b=>t(6,n=b));let{parent:g=n}=e;const h=A0();o&&((_=h.onChildMount)==null||_.call(h,o),d("HierarchicalObject: object added"));const p=$s(o,(b,x)=>{var w,y;x&&((w=h.onChildDestroy)==null||w.call(h,x),d("HierarchicalObject: object added")),b&&((y=h.onChildMount)==null||y.call(h,b),d("HierarchicalObject: object removed"))});return At(()=>{var b;o&&((b=h.onChildDestroy)==null||b.call(h,o),d("HierarchicalObject: object removed"))}),En("threlte-hierarchical-object-on-mount",c),En("threlte-hierarchical-object-on-destroy",f),En("threlte-hierarchical-parent-context",p),i.$$set=b=>{"object"in b&&t(3,o=b.object),"children"in b&&t(1,a=b.children),"onChildMount"in b&&t(4,l=b.onChildMount),"onChildDestroy"in b&&t(5,u=b.onChildDestroy),"parent"in b&&t(2,g=b.parent),"$$scope"in b&&t(7,s=b.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&t(2,g=n),i.$$.dirty&8&&p.set(o)},[m,a,g,o,l,u,n,s,r]}class C0 extends nt{constructor(e){super(),tt(this,e,T0,E0,Ze,{object:3,children:1,onChildMount:4,onChildDestroy:5,parent:2})}}function L0(i){let e;const t=i[1].default,n=pt(t,i,i[4],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16)&&gt(n,t,r,r[4],e?mt(t,r[4],s,null):_t(r[4]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function D0(i){let e,t;return e=new C0({props:{object:i[0],onChildMount:i[2],onChildDestroy:i[3],$$slots:{default:[L0]},$$scope:{ctx:i}}}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.object=n[0]),r&1&&(s.onChildMount=n[2]),r&1&&(s.onChildDestroy=n[3]),r&16&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function P0(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e;const o=l=>s.add(l),a=l=>s.remove(l);return i.$$set=l=>{"object"in l&&t(0,s=l.object),"$$scope"in l&&t(4,r=l.$$scope)},[s,n,o,a,r]}class eo extends nt{constructor(e){super(),tt(this,e,P0,D0,Ze,{object:0})}}const R0=()=>{const i=Et({width:0,height:0});let e={width:0,height:0};const t=i.subscribe(o=>e=o);At(t);let n;const r=()=>{const o=e;if(!n||!n.parentElement)return;const{clientWidth:a,clientHeight:l}=n.parentElement;(a!==o.width||l!==o.height)&&i.set({width:a,height:l})},s=o=>{n=o,r(),window.addEventListener("resize",r)};return Qs?(At(()=>{window.removeEventListener("resize",r)}),{parentSizeAction:s,parentSize:i}):{parentSize:i,parentSizeAction:s}};function gc(i){let e,t;return e=new eo({props:{object:i[0].scene,$$slots:{default:[I0]},$$scope:{ctx:i}}}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,r){const s={};r[1]&4&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function I0(i){let e;const t=i[29].default,n=pt(t,i,i[33],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[1]&4)&&gt(n,t,r,r[33],e?mt(t,r[33],s,null):_t(r[33]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function O0(i){let e,t,n,r,s=i[2]&&gc(i);return{c(){e=Fe("canvas"),s&&s.c(),ee(e,"class","svelte-o3oskp")},m(o,a){Te(o,e,a),s&&s.m(e,null),i[30](e),t=!0,n||(r=[kr(i[3].call(null,e)),$e(e,"click",i[9]),$e(e,"contextmenu",i[10]),$e(e,"pointerup",i[13]),$e(e,"pointerdown",i[11]),$e(e,"pointermove",i[12]),$e(e,"pointerenter",i[31]),$e(e,"pointerleave",i[32])],n=!0)},p(o,a){o[2]?s?(s.p(o,a),a[0]&4&&Q(s,1)):(s=gc(o),s.c(),Q(s,1),s.m(e,null)):s&&(Bt(),ne(s,1,1,()=>{s=null}),Vt())},i(o){t||(Q(s),t=!0)},o(o){ne(s),t=!1},d(o){o&&Ae(e),s&&s.d(),i[30](null),n=!1,Qt(r)}}}const _c=new Set;function N0(i,e,t){let n,r,s,o,{$$slots:a={},$$scope:l}=e,{dpr:c=Qs?window.devicePixelRatio:1}=e,{flat:u=!1}=e,{linear:f=!1}=e,{frameloop:d="demand"}=e,{debugFrameloop:m=!1}=e,{shadows:g=!0}=e,{shadowMapType:h=Ru}=e,{size:p=void 0}=e,{rendererParameters:_=void 0}=e,b,x=!1;const w=Et(p),{parentSize:y,parentSizeAction:S}=R0(),I=S0(f,u,c,w,y,m,d),{getCtx:v,renderCtx:E,disposalCtx:M}=I,{ctx:R,rootCtx:k,audioCtx:D}=I;M0(R),_c.add(R.invalidate),At(()=>{_c.delete(R.invalidate)});const{size:N,scene:O}=R;et(i,N,_e=>t(26,r=_e));const{flat:P,linear:q,dpr:X}=k;et(i,P,_e=>t(27,s=_e)),et(i,q,_e=>t(28,o=_e)),et(i,X,_e=>t(25,n=_e)),En("threlte-parent",Et(O)),Hr(()=>{!b||(f0(R,b,_),hc(R,o,s),pc(R,r,n),mc(R,g,h),t(2,x=!0))}),y0(R,k,E,M);const{onClick:V,onContextMenu:G,onPointerDown:W,onPointerMove:te,onPointerUp:oe}=p0(R,k,E);At(()=>{M.dispose(!0)});function re(_e){zt[_e?"unshift":"push"](()=>{b=_e,t(1,b)})}const we=()=>v().pointerOverCanvas.set(!0),B=()=>v().pointerOverCanvas.set(!1);return i.$$set=_e=>{"dpr"in _e&&t(14,c=_e.dpr),"flat"in _e&&t(15,u=_e.flat),"linear"in _e&&t(16,f=_e.linear),"frameloop"in _e&&t(17,d=_e.frameloop),"debugFrameloop"in _e&&t(18,m=_e.debugFrameloop),"shadows"in _e&&t(19,g=_e.shadows),"shadowMapType"in _e&&t(20,h=_e.shadowMapType),"size"in _e&&t(21,p=_e.size),"rendererParameters"in _e&&t(22,_=_e.rendererParameters),"$$scope"in _e&&t(33,l=_e.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&2097152&&w.set(p),i.$$.dirty[0]&65536&&nn(q,o=f,o),i.$$.dirty[0]&32768&&nn(P,s=u,s),i.$$.dirty[0]&16384&&nn(X,n=c,n),i.$$.dirty[0]&402653184&&hc(v(),o,s),i.$$.dirty[0]&100663296&&pc(v(),r,n),i.$$.dirty[0]&1572864&&mc(v(),g,h)},[R,b,x,S,v,N,P,q,X,V,G,W,te,oe,c,u,f,d,m,g,h,p,_,k,D,n,r,s,o,a,re,we,B,l]}class F0 extends nt{constructor(e){super(),tt(this,e,N0,O0,Ze,{dpr:14,flat:15,linear:16,frameloop:17,debugFrameloop:18,shadows:19,shadowMapType:20,size:21,rendererParameters:22,ctx:0,rootCtx:23,audioCtx:24},null,[-1,-1])}get ctx(){return this.$$.ctx[0]}get rootCtx(){return this.$$.ctx[23]}get audioCtx(){return this.$$.ctx[24]}}const Aa=()=>Nn("threlte-root"),k0=()=>Nn("threlte-disposal-context");function z0(i){let e;const t=i[9].default,n=pt(t,i,i[8],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,[s]){n&&n.p&&(!e||s&256)&&gt(n,t,r,r[8],e?mt(t,r[8],s,null):_t(r[8]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}const vc="threlte-disposable-object-context";function U0(i,e,t){var p;let n,r,{$$slots:s={},$$scope:o}=e;const{collectDisposableObjects:a,addDisposableObjects:l,removeDisposableObjects:c}=k0();let{object:u=void 0}=e,f=u,{dispose:d=void 0}=e;const m=Nn(vc);et(i,m,_=>t(7,r=_));const g=Et((p=d!=null?d:r)!=null?p:!0);et(i,g,_=>t(6,n=_)),En(vc,g);let h=n?a(u):[];return l(h),At(()=>{c(h)}),i.$$set=_=>{"object"in _&&t(2,u=_.object),"dispose"in _&&t(3,d=_.dispose),"$$scope"in _&&t(8,o=_.$$scope)},i.$$.update=()=>{var _;i.$$.dirty&136&&g.set((_=d!=null?d:r)!=null?_:!0),i.$$.dirty&116&&u!==f&&(c(h),t(5,h=n?a(u):[]),l(h),t(4,f=u))},[m,g,u,d,f,h,n,r,o,s]}class Vr extends nt{constructor(e){super(),tt(this,e,U0,z0,Ze,{object:2,dispose:3})}}function G0(i,e,t){let n,r,{object:s}=e;const o=$s(s);et(i,o,c=>t(4,r=c));const a=Nn("threlte-layers");et(i,a,c=>t(3,n=c));const{invalidate:l}=Dn();return i.$$set=c=>{"object"in c&&t(2,s=c.object)},i.$$.update=()=>{if(i.$$.dirty&4&&o.set(s),i.$$.dirty&24){if(n==="all")r.layers.enableAll();else if(n==="none")r.layers.disableAll();else if(Array.isArray(n))for(let c=0;c<32;c+=1){const u=c;n.includes(u)?r.layers.enable(c):r.layers.disable(c)}else n!==void 0&&r.layers.set(n);l("LayerableObject")}},[o,a,s,n,r]}class B0 extends nt{constructor(e){super(),tt(this,e,G0,null,Ze,{object:2})}}const wr=(i,e)=>{var a;if(!Qs)return{start:()=>{},stop:()=>{},started:Du(!1)};const t=Nn("threlte-render-context"),n={fn:i,order:e==null?void 0:e.order,debugFrameloopMessage:e==null?void 0:e.debugFrameloopMessage},r=Et(!1),s=()=>{t.frameHandlers.delete(n),r.set(!1)},o=()=>{t.frameHandlers.add(n),r.set(!0)};return((a=e==null?void 0:e.autostart)==null||a)&&o(),At(()=>{s()}),{start:o,stop:s,started:{subscribe:r.subscribe}}},cf=()=>{const i=Et(!1);return(async()=>{await Ur(),i.set(!0)})(),i};function V0(i,e,t){let n,r,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e;const u=new z,f=Fi(),{invalidate:d}=Dn(),m=cf();et(i,m,x=>t(8,r=x));const g=async()=>{r||await Ur(),f("transform")},h=async()=>{d("TransformableObject: transformed"),await g()};pn(s).onTransform=h;const{start:p,stop:_}=wr(async()=>{c&&!l&&c instanceof ot&&(c.getWorldPosition(u),s.lookAt(u),await g())},{autostart:!1,debugFrameloopMessage:"TransformableObject: tracking object"}),b=$s(s);return et(i,b,x=>t(7,n=x)),i.$$set=x=>{"object"in x&&t(2,s=x.object),"position"in x&&t(3,o=x.position),"scale"in x&&t(4,a=x.scale),"rotation"in x&&t(5,l=x.rotation),"lookAt"in x&&t(6,c=x.lookAt)},i.$$.update=()=>{var x,w,y,S,I,v,E,M,R,k,D,N,O;i.$$.dirty&4&&b.set(s),i.$$.dirty&232&&(o&&(n.position.set((x=o.x)!=null?x:0,(w=o.y)!=null?w:0,(y=o.z)!=null?y:0),h()),c&&!l&&(c instanceof ot?p():(_(),n.lookAt((S=c.x)!=null?S:0,(I=c.y)!=null?I:0,(v=c.z)!=null?v:0),h())),c||_()),i.$$.dirty&144&&a&&(typeof a=="number"?n.scale.set(a,a,a):n.scale.set((E=a.x)!=null?E:1,(M=a.y)!=null?M:1,(R=a.z)!=null?R:1),h()),i.$$.dirty&160&&l&&(n.rotation.set((k=l.x)!=null?k:0,(D=l.y)!=null?D:0,(N=l.z)!=null?N:0,(O=l.order)!=null?O:"XYZ"),h())},[m,b,s,o,a,l,c,n]}class to extends nt{constructor(e){super(),tt(this,e,V0,null,Ze,{object:2,position:3,scale:4,rotation:5,lookAt:6})}}function H0(i,e,t){let n,r,s,{object:o}=e,{viewportAware:a=!1}=e;const l=Fi(),{camera:c,invalidate:u}=Dn();et(i,c,S=>t(8,s=S));const f=new Xs,d=new ut,m=S=>S.type==="Mesh",g=new z,h=()=>s?(d.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),f.setFromProjectionMatrix(d),m(o)?f.intersectsObject(o):(o.getWorldPosition(g),f.containsPoint(g))):!0,p=cf();et(i,p,S=>t(7,r=S));let{inViewport:_=h()}=e;const b=async S=>{S?(r||await Ur(),l("viewportenter",o)):(r||await Ur(),l("viewportleave",o))},{start:x,stop:w,started:y}=wr(()=>{const S=h();_===void 0?(t(3,_=h()),b(_)):S!==_&&(b(S),t(3,_=S))},{autostart:a,debugFrameloopMessage:"ViewportAwareObject: tracking viewport visibility"});return et(i,y,S=>t(6,n=S)),u("ViewportAwareObject"),i.$$set=S=>{"object"in S&&t(4,o=S.object),"viewportAware"in S&&t(5,a=S.viewportAware),"inViewport"in S&&t(3,_=S.inViewport)},i.$$.update=()=>{i.$$.dirty&96&&(a&&!n?x():!a&&n&&w())},[c,p,y,_,o,a,n]}class W0 extends nt{constructor(e){super(),tt(this,e,H0,null,Ze,{object:4,viewportAware:5,inViewport:3})}}function j0(i){let e;const t=i[14].default,n=pt(t,i,i[18],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&262144)&&gt(n,t,r,r[18],e?mt(t,r[18],s,null):_t(r[18]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function q0(i){let e,t;return e=new eo({props:{object:i[1],$$slots:{default:[j0]},$$scope:{ctx:i}}}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,r){const s={};r&2&&(s.object=n[1]),r&262144&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function X0(i){let e,t,n,r,s,o,a,l,c;e=new B0({props:{object:i[1]}}),n=new to({props:{object:i[1],position:i[2],rotation:i[4],scale:i[3],lookAt:i[5]}}),s=new Vr({props:{object:i[1],dispose:i[7],$$slots:{default:[q0]},$$scope:{ctx:i}}});function u(d){i[15](d)}let f={object:i[1],viewportAware:i[6]};return i[0]!==void 0&&(f.inViewport=i[0]),a=new W0({props:f}),zt.push(()=>Cn(a,"inViewport",u)),a.$on("viewportenter",i[16]),a.$on("viewportleave",i[17]),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment),r=Ue(),Ie(s.$$.fragment),o=Ue(),Ie(a.$$.fragment)},m(d,m){Pe(e,d,m),Te(d,t,m),Pe(n,d,m),Te(d,r,m),Pe(s,d,m),Te(d,o,m),Pe(a,d,m),c=!0},p(d,[m]){const g={};m&2&&(g.object=d[1]),e.$set(g);const h={};m&2&&(h.object=d[1]),m&4&&(h.position=d[2]),m&16&&(h.rotation=d[4]),m&8&&(h.scale=d[3]),m&32&&(h.lookAt=d[5]),n.$set(h);const p={};m&2&&(p.object=d[1]),m&128&&(p.dispose=d[7]),m&262146&&(p.$$scope={dirty:m,ctx:d}),s.$set(p);const _={};m&2&&(_.object=d[1]),m&64&&(_.viewportAware=d[6]),!l&&m&1&&(l=!0,_.inViewport=d[0],Tn(()=>l=!1)),a.$set(_)},i(d){c||(Q(e.$$.fragment,d),Q(n.$$.fragment,d),Q(s.$$.fragment,d),Q(a.$$.fragment,d),c=!0)},o(d){ne(e.$$.fragment,d),ne(n.$$.fragment,d),ne(s.$$.fragment,d),ne(a.$$.fragment,d),c=!1},d(d){Re(e,d),d&&Ae(t),Re(n,d),d&&Ae(r),Re(s,d),d&&Ae(o),Re(a,d)}}}function Y0(i,e,t){let{$$slots:n={},$$scope:r}=e,{object:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{dispose:_=void 0}=e,{userData:b=void 0}=e;const{invalidate:x}=Dn(),w=()=>s;function y(v){f=v,t(0,f)}function S(v){lt.call(this,i,v)}function I(v){lt.call(this,i,v)}return i.$$set=v=>{"object"in v&&t(1,s=v.object),"position"in v&&t(2,o=v.position),"scale"in v&&t(3,a=v.scale),"rotation"in v&&t(4,l=v.rotation),"lookAt"in v&&t(5,c=v.lookAt),"viewportAware"in v&&t(6,u=v.viewportAware),"inViewport"in v&&t(0,f=v.inViewport),"castShadow"in v&&t(8,d=v.castShadow),"receiveShadow"in v&&t(9,m=v.receiveShadow),"frustumCulled"in v&&t(10,g=v.frustumCulled),"renderOrder"in v&&t(11,h=v.renderOrder),"visible"in v&&t(12,p=v.visible),"dispose"in v&&t(7,_=v.dispose),"userData"in v&&t(13,b=v.userData),"$$scope"in v&&t(18,r=v.$$scope)},i.$$.update=()=>{i.$$.dirty&16128&&(p!==void 0&&(w().visible=p),d!==void 0&&(w().castShadow=d),m!==void 0&&(w().receiveShadow=m),g!==void 0&&(w().frustumCulled=g),h!==void 0&&(w().renderOrder=h),b!==void 0&&(w().userData={...w().userData,...b}),x("Object3DInstance: props changed"))},[f,s,o,a,l,c,u,_,d,m,g,h,p,b,n,y,S,I,r]}class no extends nt{constructor(e){super(),tt(this,e,Y0,X0,Ze,{object:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:8,receiveShadow:9,frustumCulled:10,renderOrder:11,visible:12,dispose:7,userData:13})}}function Z0(i){let e;const t=i[17].default,n=pt(t,i,i[21],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&2097152)&&gt(n,t,r,r[21],e?mt(t,r[21],s,null):_t(r[21]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function K0(i){let e,t,n;function r(o){i[18](o)}let s={object:i[1],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[Z0]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new no({props:s}),zt.push(()=>Cn(e,"inViewport",r)),e.$on("viewportenter",i[19]),e.$on("viewportleave",i[20]),{c(){Ie(e.$$.fragment)},m(o,a){Pe(e,o,a),n=!0},p(o,[a]){const l={};a&2&&(l.object=o[1]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&2097152&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Tn(()=>t=!1)),e.$set(l)},i(o){n||(Q(e.$$.fragment,o),n=!0)},o(o){ne(e.$$.fragment,o),n=!1},d(o){Re(e,o)}}}function J0(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{camera:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:_=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{useCamera:w=!1}=e;const y=$s(o);et(i,y,M=>t(16,n=M));const{setCamera:S}=Aa();function I(M){d=M,t(0,d)}function v(M){lt.call(this,i,M)}function E(M){lt.call(this,i,M)}return i.$$set=M=>{"camera"in M&&t(1,o=M.camera),"position"in M&&t(2,a=M.position),"scale"in M&&t(3,l=M.scale),"rotation"in M&&t(4,c=M.rotation),"lookAt"in M&&t(5,u=M.lookAt),"viewportAware"in M&&t(6,f=M.viewportAware),"inViewport"in M&&t(0,d=M.inViewport),"castShadow"in M&&t(7,m=M.castShadow),"receiveShadow"in M&&t(8,g=M.receiveShadow),"frustumCulled"in M&&t(9,h=M.frustumCulled),"renderOrder"in M&&t(10,p=M.renderOrder),"visible"in M&&t(11,_=M.visible),"userData"in M&&t(12,b=M.userData),"dispose"in M&&t(13,x=M.dispose),"useCamera"in M&&t(15,w=M.useCamera),"$$scope"in M&&t(21,s=M.$$scope)},i.$$.update=()=>{i.$$.dirty&2&&y.set(o),i.$$.dirty&98304&&w&&S(n)},[d,o,a,l,c,u,f,m,g,h,p,_,b,x,y,w,n,r,I,v,E,s]}class Q0 extends nt{constructor(e){super(),tt(this,e,J0,K0,Ze,{camera:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,useCamera:15})}}function $0(i){let e;const t=i[20].default,n=pt(t,i,i[24],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&16777216)&&gt(n,t,r,r[24],e?mt(t,r[24],s,null):_t(r[24]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function ev(i){let e,t,n;function r(o){i[21](o)}let s={camera:i[0],position:i[2],scale:i[3],rotation:i[4],castShadow:i[6],receiveShadow:i[7],frustumCulled:i[8],renderOrder:i[9],visible:i[10],userData:i[11],dispose:i[12],viewportAware:i[13],lookAt:i[5],useCamera:i[14],$$slots:{default:[$0]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new Q0({props:s}),zt.push(()=>Cn(e,"inViewport",r)),e.$on("viewportenter",i[22]),e.$on("viewportleave",i[23]),{c(){Ie(e.$$.fragment)},m(o,a){Pe(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.camera=o[0]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.castShadow=o[6]),a&128&&(l.receiveShadow=o[7]),a&256&&(l.frustumCulled=o[8]),a&512&&(l.renderOrder=o[9]),a&1024&&(l.visible=o[10]),a&2048&&(l.userData=o[11]),a&4096&&(l.dispose=o[12]),a&8192&&(l.viewportAware=o[13]),a&32&&(l.lookAt=o[5]),a&16384&&(l.useCamera=o[14]),a&16777216&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Tn(()=>t=!1)),e.$set(l)},i(o){n||(Q(e.$$.fragment,o),n=!0)},o(o){ne(e.$$.fragment,o),n=!1},d(o){Re(e,o)}}}function tv(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{castShadow:u=void 0}=e,{receiveShadow:f=void 0}=e,{frustumCulled:d=void 0}=e,{renderOrder:m=void 0}=e,{visible:g=void 0}=e,{userData:h=void 0}=e,{dispose:p=void 0}=e,{viewportAware:_=!1}=e,{inViewport:b=!1}=e,{useCamera:x=!0}=e,{near:w=void 0}=e,{far:y=void 0}=e,{fov:S=void 0}=e;const{size:I,invalidate:v}=Dn();et(i,I,D=>t(19,n=D));const E=new rn(S,n.width/n.height,w,y);function M(D){b=D,t(1,b)}function R(D){lt.call(this,i,D)}function k(D){lt.call(this,i,D)}return i.$$set=D=>{"position"in D&&t(2,o=D.position),"scale"in D&&t(3,a=D.scale),"rotation"in D&&t(4,l=D.rotation),"lookAt"in D&&t(5,c=D.lookAt),"castShadow"in D&&t(6,u=D.castShadow),"receiveShadow"in D&&t(7,f=D.receiveShadow),"frustumCulled"in D&&t(8,d=D.frustumCulled),"renderOrder"in D&&t(9,m=D.renderOrder),"visible"in D&&t(10,g=D.visible),"userData"in D&&t(11,h=D.userData),"dispose"in D&&t(12,p=D.dispose),"viewportAware"in D&&t(13,_=D.viewportAware),"inViewport"in D&&t(1,b=D.inViewport),"useCamera"in D&&t(14,x=D.useCamera),"near"in D&&t(16,w=D.near),"far"in D&&t(17,y=D.far),"fov"in D&&t(18,S=D.fov),"$$scope"in D&&t(24,s=D.$$scope)},i.$$.update=()=>{i.$$.dirty&524289&&(t(0,E.aspect=n.width/n.height,E),E.updateProjectionMatrix(),v("PerspectiveCamera: aspect changed")),i.$$.dirty&458753&&(w!==void 0&&t(0,E.near=w,E),y!==void 0&&t(0,E.far=y,E),S!==void 0&&t(0,E.fov=S,E),E.updateProjectionMatrix(),v("PerspectiveCamera: props changed"))},[E,b,o,a,l,c,u,f,d,m,g,h,p,_,x,I,w,y,S,n,r,M,R,k,s]}class nv extends nt{constructor(e){super(),tt(this,e,tv,ev,Ze,{position:2,scale:3,rotation:4,lookAt:5,castShadow:6,receiveShadow:7,frustumCulled:8,renderOrder:9,visible:10,userData:11,dispose:12,viewportAware:13,inViewport:1,useCamera:14,near:16,far:17,fov:18,camera:0})}get camera(){return this.$$.ctx[0]}}const bc=[],iv=(i,e)=>{const t=bc.find(r=>r instanceof i);if(t)return t;const n=e();return bc.push(n),n},wc={type:"change"},jo={type:"start"},yc={type:"end"};class rv extends ki{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Bi.ROTATE,TWO:Bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Nt),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wc),n.update(),s=r.NONE},this.update=function(){const C=new z,ie=new gi().setFromUnitVectors(e.up,new z(0,1,0)),ce=ie.clone().invert(),ge=new z,he=new gi,Oe=2*Math.PI;return function(){const st=n.object.position;C.copy(st).sub(n.target),C.applyQuaternion(ie),a.setFromVector3(C),n.autoRotate&&s===r.NONE&&E(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let U=n.minAzimuthAngle,fe=n.maxAzimuthAngle;return isFinite(U)&&isFinite(fe)&&(U<-Math.PI?U+=Oe:U>Math.PI&&(U-=Oe),fe<-Math.PI?fe+=Oe:fe>Math.PI&&(fe-=Oe),U<=fe?a.theta=Math.max(U,Math.min(fe,a.theta)):a.theta=a.theta>(U+fe)/2?Math.max(U,a.theta):Math.min(fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),C.setFromSpherical(a),C.applyQuaternion(ce),st.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ge.distanceToSquared(n.object.position)>o||8*(1-he.dot(n.object.quaternion))>o?(n.dispatchEvent(wc),ge.copy(n.object.position),he.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",J),n.domElement.removeEventListener("pointerdown",He),n.domElement.removeEventListener("pointercancel",Ot),n.domElement.removeEventListener("wheel",Tt),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",yt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",Nt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Is,l=new Is;let c=1;const u=new z;let f=!1;const d=new ke,m=new ke,g=new ke,h=new ke,p=new ke,_=new ke,b=new ke,x=new ke,w=new ke,y=[],S={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(C){l.theta-=C}function M(C){l.phi-=C}const R=function(){const C=new z;return function(ce,ge){C.setFromMatrixColumn(ge,0),C.multiplyScalar(-ce),u.add(C)}}(),k=function(){const C=new z;return function(ce,ge){n.screenSpacePanning===!0?C.setFromMatrixColumn(ge,1):(C.setFromMatrixColumn(ge,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ce),u.add(C)}}(),D=function(){const C=new z;return function(ce,ge){const he=n.domElement;if(n.object.isPerspectiveCamera){const Oe=n.object.position;C.copy(Oe).sub(n.target);let We=C.length();We*=Math.tan(n.object.fov/2*Math.PI/180),R(2*ce*We/he.clientHeight,n.object.matrix),k(2*ge*We/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(R(ce*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),k(ge*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(C){d.set(C.clientX,C.clientY)}function q(C){b.set(C.clientX,C.clientY)}function X(C){h.set(C.clientX,C.clientY)}function V(C){m.set(C.clientX,C.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;E(2*Math.PI*g.x/ie.clientHeight),M(2*Math.PI*g.y/ie.clientHeight),d.copy(m),n.update()}function G(C){x.set(C.clientX,C.clientY),w.subVectors(x,b),w.y>0?N(v()):w.y<0&&O(v()),b.copy(x),n.update()}function W(C){p.set(C.clientX,C.clientY),_.subVectors(p,h).multiplyScalar(n.panSpeed),D(_.x,_.y),h.copy(p),n.update()}function te(C){C.deltaY<0?O(v()):C.deltaY>0&&N(v()),n.update()}function oe(C){let ie=!1;switch(C.code){case n.keys.UP:D(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:D(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:D(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:D(-n.keyPanSpeed,0),ie=!0;break}ie&&(C.preventDefault(),n.update())}function re(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),ie=.5*(y[0].pageY+y[1].pageY);d.set(C,ie)}}function we(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),ie=.5*(y[0].pageY+y[1].pageY);h.set(C,ie)}}function B(){const C=y[0].pageX-y[1].pageX,ie=y[0].pageY-y[1].pageY,ce=Math.sqrt(C*C+ie*ie);b.set(0,ce)}function _e(){n.enableZoom&&B(),n.enablePan&&we()}function Ee(){n.enableZoom&&B(),n.enableRotate&&re()}function pe(C){if(y.length==1)m.set(C.pageX,C.pageY);else{const ce=Ne(C),ge=.5*(C.pageX+ce.x),he=.5*(C.pageY+ce.y);m.set(ge,he)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;E(2*Math.PI*g.x/ie.clientHeight),M(2*Math.PI*g.y/ie.clientHeight),d.copy(m)}function ye(C){if(y.length===1)p.set(C.pageX,C.pageY);else{const ie=Ne(C),ce=.5*(C.pageX+ie.x),ge=.5*(C.pageY+ie.y);p.set(ce,ge)}_.subVectors(p,h).multiplyScalar(n.panSpeed),D(_.x,_.y),h.copy(p)}function Xe(C){const ie=Ne(C),ce=C.pageX-ie.x,ge=C.pageY-ie.y,he=Math.sqrt(ce*ce+ge*ge);x.set(0,he),w.set(0,Math.pow(x.y/b.y,n.zoomSpeed)),N(w.y),b.copy(x)}function Y(C){n.enableZoom&&Xe(C),n.enablePan&&ye(C)}function ue(C){n.enableZoom&&Xe(C),n.enableRotate&&pe(C)}function He(C){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",vt),n.domElement.addEventListener("pointerup",yt)),se(C),C.pointerType==="touch"?L(C):xt(C))}function vt(C){n.enabled!==!1&&(C.pointerType==="touch"?A(C):Ce(C))}function yt(C){le(C),y.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",vt),n.domElement.removeEventListener("pointerup",yt)),n.dispatchEvent(yc),s=r.NONE}function Ot(C){le(C)}function xt(C){let ie;switch(C.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case Gi.DOLLY:if(n.enableZoom===!1)return;q(C),s=r.DOLLY;break;case Gi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;X(C),s=r.PAN}else{if(n.enableRotate===!1)return;P(C),s=r.ROTATE}break;case Gi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;P(C),s=r.ROTATE}else{if(n.enablePan===!1)return;X(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(jo)}function Ce(C){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;V(C);break;case r.DOLLY:if(n.enableZoom===!1)return;G(C);break;case r.PAN:if(n.enablePan===!1)return;W(C);break}}function Tt(C){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(C.preventDefault(),n.dispatchEvent(jo),te(C),n.dispatchEvent(yc))}function Nt(C){n.enabled===!1||n.enablePan===!1||oe(C)}function L(C){switch(me(C),y.length){case 1:switch(n.touches.ONE){case Bi.ROTATE:if(n.enableRotate===!1)return;re(),s=r.TOUCH_ROTATE;break;case Bi.PAN:if(n.enablePan===!1)return;we(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Bi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;_e(),s=r.TOUCH_DOLLY_PAN;break;case Bi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ee(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(jo)}function A(C){switch(me(C),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(C),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ye(C),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(C),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ue(C),n.update();break;default:s=r.NONE}}function J(C){n.enabled!==!1&&C.preventDefault()}function se(C){y.push(C)}function le(C){delete S[C.pointerId];for(let ie=0;ie<y.length;ie++)if(y[ie].pointerId==C.pointerId){y.splice(ie,1);return}}function me(C){let ie=S[C.pointerId];ie===void 0&&(ie=new ke,S[C.pointerId]=ie),ie.set(C.pageX,C.pageY)}function Ne(C){const ie=C.pointerId===y[0].pointerId?y[1]:y[0];return S[ie.pointerId]}n.domElement.addEventListener("contextmenu",J),n.domElement.addEventListener("pointerdown",He),n.domElement.addEventListener("pointercancel",Ot),n.domElement.addEventListener("wheel",Tt,{passive:!1}),this.update()}}function sv(i){let e,t,n,r;return e=new Vr({props:{dispose:i[2],object:i[0]}}),n=new to({props:{object:i[4],position:i[1]}}),n.$on("transform",i[5]),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment)},m(s,o){Pe(e,s,o),Te(s,t,o),Pe(n,s,o),r=!0},p(s,o){const a={};o[0]&4&&(a.dispose=s[2]),o[0]&1&&(a.object=s[0]),e.$set(a);const l={};o[0]&2&&(l.position=s[1]),n.$set(l)},i(s){r||(Q(e.$$.fragment,s),Q(n.$$.fragment,s),r=!0)},o(s){ne(e.$$.fragment,s),ne(n.$$.fragment,s),r=!1},d(s){Re(e,s),s&&Ae(t),Re(n,s)}}}function ov(i,e,t){let n,{autoRotate:r=void 0}=e,{autoRotateSpeed:s=void 0}=e,{dampingFactor:o=void 0}=e,{enableDamping:a=void 0}=e,{enabled:l=void 0}=e,{enablePan:c=void 0}=e,{enableRotate:u=void 0}=e,{enableZoom:f=void 0}=e,{keyPanSpeed:d=void 0}=e,{keys:m=void 0}=e,{maxAzimuthAngle:g=void 0}=e,{maxDistance:h=void 0}=e,{maxPolarAngle:p=void 0}=e,{maxZoom:_=void 0}=e,{minAzimuthAngle:b=void 0}=e,{minDistance:x=void 0}=e,{minPolarAngle:w=void 0}=e,{minZoom:y=void 0}=e,{mouseButtons:S=void 0}=e,{panSpeed:I=void 0}=e,{rotateSpeed:v=void 0}=e,{screenSpacePanning:E=void 0}=e,{touches:M=void 0}=e,{zoomSpeed:R=void 0}=e,{target:k=void 0}=e,{dispose:D=void 0}=e;const N=lf();et(i,N,B=>t(30,n=B));const{renderer:O,invalidate:P}=Dn();if(!O)throw new Error("Threlte Context missing: Is <OrbitControls> a child of <Canvas>?");if(!(n instanceof wa))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const q=Fi(),X=()=>{P("Orbitcontrols: change event"),q("change")},V=()=>q("start"),G=()=>q("end"),W=new rv(n,O.domElement);pn(n).orbitControls=W,W.addEventListener("change",X),W.addEventListener("start",V),W.addEventListener("end",G),At(()=>{n&&delete pn(n).orbitControls,W.removeEventListener("change",X),W.removeEventListener("start",V),W.removeEventListener("end",G)});const{start:te,stop:oe}=wr(()=>W.update(),{autostart:!1,debugFrameloopMessage:"OrbitControlts: updating controls"}),re=new ot,we=()=>{t(0,W.target=re.position,W),W.update(),P("OrbitControls: target changed")};return i.$$set=B=>{"autoRotate"in B&&t(6,r=B.autoRotate),"autoRotateSpeed"in B&&t(7,s=B.autoRotateSpeed),"dampingFactor"in B&&t(8,o=B.dampingFactor),"enableDamping"in B&&t(9,a=B.enableDamping),"enabled"in B&&t(10,l=B.enabled),"enablePan"in B&&t(11,c=B.enablePan),"enableRotate"in B&&t(12,u=B.enableRotate),"enableZoom"in B&&t(13,f=B.enableZoom),"keyPanSpeed"in B&&t(14,d=B.keyPanSpeed),"keys"in B&&t(15,m=B.keys),"maxAzimuthAngle"in B&&t(16,g=B.maxAzimuthAngle),"maxDistance"in B&&t(17,h=B.maxDistance),"maxPolarAngle"in B&&t(18,p=B.maxPolarAngle),"maxZoom"in B&&t(19,_=B.maxZoom),"minAzimuthAngle"in B&&t(20,b=B.minAzimuthAngle),"minDistance"in B&&t(21,x=B.minDistance),"minPolarAngle"in B&&t(22,w=B.minPolarAngle),"minZoom"in B&&t(23,y=B.minZoom),"mouseButtons"in B&&t(24,S=B.mouseButtons),"panSpeed"in B&&t(25,I=B.panSpeed),"rotateSpeed"in B&&t(26,v=B.rotateSpeed),"screenSpacePanning"in B&&t(27,E=B.screenSpacePanning),"touches"in B&&t(28,M=B.touches),"zoomSpeed"in B&&t(29,R=B.zoomSpeed),"target"in B&&t(1,k=B.target),"dispose"in B&&t(2,D=B.dispose)},i.$$.update=()=>{i.$$.dirty[0]&1073741761&&(r!==void 0&&t(0,W.autoRotate=r,W),s!==void 0&&t(0,W.autoRotateSpeed=s,W),o!==void 0&&t(0,W.dampingFactor=o,W),a!==void 0&&t(0,W.enableDamping=a,W),l!==void 0&&t(0,W.enabled=l,W),c!==void 0&&t(0,W.enablePan=c,W),u!==void 0&&t(0,W.enableRotate=u,W),f!==void 0&&t(0,W.enableZoom=f,W),d!==void 0&&t(0,W.keyPanSpeed=d,W),m!==void 0&&t(0,W.keys=m,W),g!==void 0&&t(0,W.maxAzimuthAngle=g,W),h!==void 0&&t(0,W.maxDistance=h,W),p!==void 0&&t(0,W.maxPolarAngle=p,W),_!==void 0&&t(0,W.maxZoom=_,W),b!==void 0&&t(0,W.minAzimuthAngle=b,W),x!==void 0&&t(0,W.minDistance=x,W),w!==void 0&&t(0,W.minPolarAngle=w,W),y!==void 0&&t(0,W.minZoom=y,W),S!==void 0&&t(0,W.mouseButtons=S,W),I!==void 0&&t(0,W.panSpeed=I,W),v!==void 0&&t(0,W.rotateSpeed=v,W),E!==void 0&&t(0,W.screenSpacePanning=E,W),M!==void 0&&t(0,W.touches=M,W),R!==void 0&&t(0,W.zoomSpeed=R,W),W.update(),P("OrbitControls: props changed")),i.$$.dirty[0]&576&&(r||a?te():oe())},[W,k,D,N,re,we,r,s,o,a,l,c,u,f,d,m,g,h,p,_,b,x,w,y,S,I,v,E,M,R]}class av extends nt{constructor(e){super(),tt(this,e,ov,sv,Ze,{autoRotate:6,autoRotateSpeed:7,dampingFactor:8,enableDamping:9,enabled:10,enablePan:11,enableRotate:12,enableZoom:13,keyPanSpeed:14,keys:15,maxAzimuthAngle:16,maxDistance:17,maxPolarAngle:18,maxZoom:19,minAzimuthAngle:20,minDistance:21,minPolarAngle:22,minZoom:23,mouseButtons:24,panSpeed:25,rotateSpeed:26,screenSpacePanning:27,touches:28,zoomSpeed:29,target:1,dispose:2,controls:0},null,[-1,-1])}get controls(){return this.$$.ctx[0]}}const lv=(i,e)=>e?new Ve(i):new Ve().setHex(new Ve(i).getHex()).convertSRGBToLinear();function cv(i){let e;const t=i[18].default,n=pt(t,i,i[22],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4194304)&&gt(n,t,r,r[22],e?mt(t,r[22],s,null):_t(r[22]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function uv(i){let e,t,n;function r(o){i[19](o)}let s={object:i[0],lookAt:i[5],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],position:i[2],scale:i[3],rotation:i[4],viewportAware:i[6],visible:i[11],userData:i[12],dispose:i[13],$$slots:{default:[cv]},$$scope:{ctx:i}};return i[1]!==void 0&&(s.inViewport=i[1]),e=new no({props:s}),zt.push(()=>Cn(e,"inViewport",r)),e.$on("viewportenter",i[20]),e.$on("viewportleave",i[21]),{c(){Ie(e.$$.fragment)},m(o,a){Pe(e,o,a),n=!0},p(o,[a]){const l={};a&1&&(l.object=o[0]),a&32&&(l.lookAt=o[5]),a&128&&(l.castShadow=o[7]),a&256&&(l.receiveShadow=o[8]),a&512&&(l.frustumCulled=o[9]),a&1024&&(l.renderOrder=o[10]),a&4&&(l.position=o[2]),a&8&&(l.scale=o[3]),a&16&&(l.rotation=o[4]),a&64&&(l.viewportAware=o[6]),a&2048&&(l.visible=o[11]),a&4096&&(l.userData=o[12]),a&8192&&(l.dispose=o[13]),a&4194304&&(l.$$scope={dirty:a,ctx:o}),!t&&a&2&&(t=!0,l.inViewport=o[1],Tn(()=>t=!1)),e.$set(l)},i(o){n||(Q(e.$$.fragment,o),n=!0)},o(o){ne(e.$$.fragment,o),n=!1},d(o){Re(e,o)}}}function fv(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{light:o}=e,{position:a=void 0}=e,{scale:l=void 0}=e,{rotation:c=void 0}=e,{lookAt:u=void 0}=e,{viewportAware:f=!1}=e,{inViewport:d=!1}=e,{castShadow:m=void 0}=e,{receiveShadow:g=void 0}=e,{frustumCulled:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:_=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{color:w=void 0}=e,{intensity:y=void 0}=e;const{invalidate:S}=Dn(),{linear:I}=Aa();et(i,I,R=>t(17,n=R));function v(R){d=R,t(1,d)}function E(R){lt.call(this,i,R)}function M(R){lt.call(this,i,R)}return i.$$set=R=>{"light"in R&&t(0,o=R.light),"position"in R&&t(2,a=R.position),"scale"in R&&t(3,l=R.scale),"rotation"in R&&t(4,c=R.rotation),"lookAt"in R&&t(5,u=R.lookAt),"viewportAware"in R&&t(6,f=R.viewportAware),"inViewport"in R&&t(1,d=R.inViewport),"castShadow"in R&&t(7,m=R.castShadow),"receiveShadow"in R&&t(8,g=R.receiveShadow),"frustumCulled"in R&&t(9,h=R.frustumCulled),"renderOrder"in R&&t(10,p=R.renderOrder),"visible"in R&&t(11,_=R.visible),"userData"in R&&t(12,b=R.userData),"dispose"in R&&t(13,x=R.dispose),"color"in R&&t(15,w=R.color),"intensity"in R&&t(16,y=R.intensity),"$$scope"in R&&t(22,s=R.$$scope)},i.$$.update=()=>{i.$$.dirty&229376&&(y!==void 0&&t(0,o.intensity=y,o),w!==void 0&&t(0,o.color=lv(w,n),o),S("LightInstance: props changed"))},[o,d,a,l,c,u,f,m,g,h,p,_,b,x,I,w,y,n,r,v,E,M,s]}class uf extends nt{constructor(e){super(),tt(this,e,fv,uv,Ze,{light:0,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:1,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,color:15,intensity:16})}}function dv(i){let e;const t=i[16].default,n=pt(t,i,i[20],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&1048576)&&gt(n,t,r,r[20],e?mt(t,r[20],s,null):_t(r[20]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function hv(i){let e,t,n;function r(o){i[17](o)}let s={light:i[15],lookAt:i[4],position:i[1],scale:i[2],rotation:i[3],castShadow:i[5],receiveShadow:i[6],frustumCulled:i[7],renderOrder:i[8],visible:i[9],userData:i[10],dispose:i[11],viewportAware:i[12],color:i[13],intensity:i[14],$$slots:{default:[dv]},$$scope:{ctx:i}};return i[0]!==void 0&&(s.inViewport=i[0]),e=new uf({props:s}),zt.push(()=>Cn(e,"inViewport",r)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),{c(){Ie(e.$$.fragment)},m(o,a){Pe(e,o,a),n=!0},p(o,[a]){const l={};a&16&&(l.lookAt=o[4]),a&2&&(l.position=o[1]),a&4&&(l.scale=o[2]),a&8&&(l.rotation=o[3]),a&32&&(l.castShadow=o[5]),a&64&&(l.receiveShadow=o[6]),a&128&&(l.frustumCulled=o[7]),a&256&&(l.renderOrder=o[8]),a&512&&(l.visible=o[9]),a&1024&&(l.userData=o[10]),a&2048&&(l.dispose=o[11]),a&4096&&(l.viewportAware=o[12]),a&8192&&(l.color=o[13]),a&16384&&(l.intensity=o[14]),a&1048576&&(l.$$scope={dirty:a,ctx:o}),!t&&a&1&&(t=!0,l.inViewport=o[0],Tn(()=>t=!1)),e.$set(l)},i(o){n||(Q(e.$$.fragment,o),n=!0)},o(o){ne(e.$$.fragment,o),n=!1},d(o){Re(e,o)}}}function pv(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{castShadow:c=void 0}=e,{receiveShadow:u=void 0}=e,{frustumCulled:f=void 0}=e,{renderOrder:d=void 0}=e,{visible:m=void 0}=e,{userData:g=void 0}=e,{dispose:h=void 0}=e,{viewportAware:p=!1}=e,{inViewport:_=!1}=e,{color:b=void 0}=e,{intensity:x=void 0}=e;const w=new r0(b,x);function y(v){_=v,t(0,_)}function S(v){lt.call(this,i,v)}function I(v){lt.call(this,i,v)}return i.$$set=v=>{"position"in v&&t(1,s=v.position),"scale"in v&&t(2,o=v.scale),"rotation"in v&&t(3,a=v.rotation),"lookAt"in v&&t(4,l=v.lookAt),"castShadow"in v&&t(5,c=v.castShadow),"receiveShadow"in v&&t(6,u=v.receiveShadow),"frustumCulled"in v&&t(7,f=v.frustumCulled),"renderOrder"in v&&t(8,d=v.renderOrder),"visible"in v&&t(9,m=v.visible),"userData"in v&&t(10,g=v.userData),"dispose"in v&&t(11,h=v.dispose),"viewportAware"in v&&t(12,p=v.viewportAware),"inViewport"in v&&t(0,_=v.inViewport),"color"in v&&t(13,b=v.color),"intensity"in v&&t(14,x=v.intensity),"$$scope"in v&&t(20,r=v.$$scope)},[_,s,o,a,l,c,u,f,d,m,g,h,p,b,x,w,n,y,S,I,r]}class mv extends nt{constructor(e){super(),tt(this,e,pv,hv,Ze,{position:1,scale:2,rotation:3,lookAt:4,castShadow:5,receiveShadow:6,frustumCulled:7,renderOrder:8,visible:9,userData:10,dispose:11,viewportAware:12,inViewport:0,color:13,intensity:14,light:15})}get light(){return this.$$.ctx[15]}}function xc(i){let e,t,n,r,s,o;return e=new eo({props:{object:i[16]}}),n=new to({props:{object:i[16],position:i[15]}}),s=new Vr({props:{dispose:i[10],object:i[15]}}),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment),r=Ue(),Ie(s.$$.fragment)},m(a,l){Pe(e,a,l),Te(a,t,l),Pe(n,a,l),Te(a,r,l),Pe(s,a,l),o=!0},p(a,l){const c={};l&32768&&(c.position=a[15]),n.$set(c);const u={};l&1024&&(u.dispose=a[10]),l&32768&&(u.object=a[15]),s.$set(u)},i(a){o||(Q(e.$$.fragment,a),Q(n.$$.fragment,a),Q(s.$$.fragment,a),o=!0)},o(a){ne(e.$$.fragment,a),ne(n.$$.fragment,a),ne(s.$$.fragment,a),o=!1},d(a){Re(e,a),a&&Ae(t),Re(n,a),a&&Ae(r),Re(s,a)}}}function gv(i){let e;const t=i[18].default,n=pt(t,i,i[22],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&4194304)&&gt(n,t,r,r[22],e?mt(t,r[22],s,null):_t(r[22]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function _v(i){let e,t,n,r,s=i[15]&&!(i[15]instanceof ot)&&xc(i);function o(l){i[19](l)}let a={light:i[1],position:i[2],scale:i[3],rotation:i[4],castShadow:!!i[14],receiveShadow:i[5],frustumCulled:i[6],renderOrder:i[7],visible:i[8],userData:i[9],dispose:i[10],viewportAware:i[11],color:i[12],intensity:i[13],$$slots:{default:[gv]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.inViewport=i[0]),t=new uf({props:a}),zt.push(()=>Cn(t,"inViewport",o)),t.$on("viewportenter",i[20]),t.$on("viewportleave",i[21]),{c(){s&&s.c(),e=Ue(),Ie(t.$$.fragment)},m(l,c){s&&s.m(l,c),Te(l,e,c),Pe(t,l,c),r=!0},p(l,[c]){l[15]&&!(l[15]instanceof ot)?s?(s.p(l,c),c&32768&&Q(s,1)):(s=xc(l),s.c(),Q(s,1),s.m(e.parentNode,e)):s&&(Bt(),ne(s,1,1,()=>{s=null}),Vt());const u={};c&2&&(u.light=l[1]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&16384&&(u.castShadow=!!l[14]),c&32&&(u.receiveShadow=l[5]),c&64&&(u.frustumCulled=l[6]),c&128&&(u.renderOrder=l[7]),c&256&&(u.visible=l[8]),c&512&&(u.userData=l[9]),c&1024&&(u.dispose=l[10]),c&2048&&(u.viewportAware=l[11]),c&4096&&(u.color=l[12]),c&8192&&(u.intensity=l[13]),c&4194304&&(u.$$scope={dirty:c,ctx:l}),!n&&c&1&&(n=!0,u.inViewport=l[0],Tn(()=>n=!1)),t.$set(u)},i(l){r||(Q(s),Q(t.$$.fragment,l),r=!0)},o(l){ne(s),ne(t.$$.fragment,l),r=!1},d(l){s&&s.d(l),l&&Ae(e),Re(t,l)}}}function vv(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{receiveShadow:c=void 0}=e,{frustumCulled:u=void 0}=e,{renderOrder:f=void 0}=e,{visible:d=void 0}=e,{userData:m=void 0}=e,{dispose:g=void 0}=e,{viewportAware:h=!1}=e,{inViewport:p=!1}=e,{color:_=void 0}=e,{intensity:b=void 0}=e,{shadow:x=void 0}=e,{target:w=void 0}=e;const y=new i0(_,b),{invalidate:S}=Dn(),I=y.target,{start:v,stop:E,started:M}=wr(()=>{},{autostart:!1,debugFrameloopMessage:"DirectionalLight: tracking target"});et(i,M,P=>t(23,n=P));const R=P=>{P&&P instanceof ot&&!n?(t(1,y.target=P,y),v(),S("DirectionalLight: target changed")):(!P||!(P instanceof ot))&&n&&(t(1,y.target=I,y),E(),S("DirectionalLight: target changed"))},k=P=>{if(P){const{mapSize:q=[512,512],camera:{left:X=-5,bottom:V=-5,right:G=5,top:W=5,near:te=.5,far:oe=500}={},bias:re=0,radius:we=1}=P===!0?{}:P;y.shadow.mapSize.set(q[0],q[1]),t(1,y.shadow.camera.left=X,y),t(1,y.shadow.camera.top=W,y),t(1,y.shadow.camera.right=G,y),t(1,y.shadow.camera.bottom=V,y),t(1,y.shadow.camera.near=te,y),t(1,y.shadow.camera.far=oe,y),t(1,y.shadow.bias=re,y),t(1,y.shadow.radius=we,y)}S("DirectionalLight: shadow changed")};function D(P){p=P,t(0,p)}function N(P){lt.call(this,i,P)}function O(P){lt.call(this,i,P)}return i.$$set=P=>{"position"in P&&t(2,o=P.position),"scale"in P&&t(3,a=P.scale),"rotation"in P&&t(4,l=P.rotation),"receiveShadow"in P&&t(5,c=P.receiveShadow),"frustumCulled"in P&&t(6,u=P.frustumCulled),"renderOrder"in P&&t(7,f=P.renderOrder),"visible"in P&&t(8,d=P.visible),"userData"in P&&t(9,m=P.userData),"dispose"in P&&t(10,g=P.dispose),"viewportAware"in P&&t(11,h=P.viewportAware),"inViewport"in P&&t(0,p=P.inViewport),"color"in P&&t(12,_=P.color),"intensity"in P&&t(13,b=P.intensity),"shadow"in P&&t(14,x=P.shadow),"target"in P&&t(15,w=P.target),"$$scope"in P&&t(22,s=P.$$scope)},i.$$.update=()=>{i.$$.dirty&32768&&R(w),i.$$.dirty&16384&&k(x)},[p,y,o,a,l,c,u,f,d,m,g,h,_,b,x,w,I,M,r,D,N,O,s]}class bv extends nt{constructor(e){super(),tt(this,e,vv,_v,Ze,{position:2,scale:3,rotation:4,receiveShadow:5,frustumCulled:6,renderOrder:7,visible:8,userData:9,dispose:10,viewportAware:11,inViewport:0,color:12,intensity:13,shadow:14,target:15,light:1})}get light(){return this.$$.ctx[1]}}function wv(i,e,t){let{object:n}=e,r=n,{interactive:s=!1}=e,{ignorePointer:o=!1}=e;const a=Fi(),{addInteractiveObject:l,removeInteractiveObject:c,addRaycastableObject:u,removeRaycastableObject:f}=Aa(),{invalidate:d}=Dn(),m=h=>{f(h),c(h),delete pn(h).eventDispatcher},g=(h,p,_)=>{pn(h).eventDispatcher=a,p?(f(h),c(h)):(u(h),_?l(h):c(h))};return At(()=>{m(n),d("InteractiveObject: object removed")}),i.$$set=h=>{"object"in h&&t(0,n=h.object),"interactive"in h&&t(1,s=h.interactive),"ignorePointer"in h&&t(2,o=h.ignorePointer)},i.$$.update=()=>{i.$$.dirty&15&&(n!==r?(m(r),g(n,o,s),d("InteractiveObject: object changed"),t(3,r=n)):n===r&&(g(n,o,s),d("InteractiveObject: props changed")))},[n,s,o,r]}class yv extends nt{constructor(e){super(),tt(this,e,wv,null,Ze,{object:0,interactive:1,ignorePointer:2})}}function xv(i){let e;const t=i[16].default,n=pt(t,i,i[27],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&134217728)&&gt(n,t,r,r[27],e?mt(t,r[27],s,null):_t(r[27]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function Mv(i){let e,t,n,r,s;function o(l){i[17](l)}let a={object:i[1],lookAt:i[5],position:i[2],scale:i[3],rotation:i[4],castShadow:i[7],receiveShadow:i[8],frustumCulled:i[9],renderOrder:i[10],visible:i[11],userData:i[12],dispose:i[13],viewportAware:i[6],$$slots:{default:[xv]},$$scope:{ctx:i}};return i[0]!==void 0&&(a.inViewport=i[0]),e=new no({props:a}),zt.push(()=>Cn(e,"inViewport",o)),e.$on("viewportenter",i[18]),e.$on("viewportleave",i[19]),r=new yv({props:{object:i[1],interactive:i[14],ignorePointer:i[15]}}),r.$on("click",i[20]),r.$on("contextmenu",i[21]),r.$on("pointerup",i[22]),r.$on("pointerdown",i[23]),r.$on("pointerenter",i[24]),r.$on("pointerleave",i[25]),r.$on("pointermove",i[26]),{c(){Ie(e.$$.fragment),n=Ue(),Ie(r.$$.fragment)},m(l,c){Pe(e,l,c),Te(l,n,c),Pe(r,l,c),s=!0},p(l,[c]){const u={};c&2&&(u.object=l[1]),c&32&&(u.lookAt=l[5]),c&4&&(u.position=l[2]),c&8&&(u.scale=l[3]),c&16&&(u.rotation=l[4]),c&128&&(u.castShadow=l[7]),c&256&&(u.receiveShadow=l[8]),c&512&&(u.frustumCulled=l[9]),c&1024&&(u.renderOrder=l[10]),c&2048&&(u.visible=l[11]),c&4096&&(u.userData=l[12]),c&8192&&(u.dispose=l[13]),c&64&&(u.viewportAware=l[6]),c&134217728&&(u.$$scope={dirty:c,ctx:l}),!t&&c&1&&(t=!0,u.inViewport=l[0],Tn(()=>t=!1)),e.$set(u);const f={};c&2&&(f.object=l[1]),c&16384&&(f.interactive=l[14]),c&32768&&(f.ignorePointer=l[15]),r.$set(f)},i(l){s||(Q(e.$$.fragment,l),Q(r.$$.fragment,l),s=!0)},o(l){ne(e.$$.fragment,l),ne(r.$$.fragment,l),s=!1},d(l){Re(e,l),l&&Ae(n),Re(r,l)}}}function Sv(i,e,t){let{$$slots:n={},$$scope:r}=e,{mesh:s}=e,{position:o=void 0}=e,{scale:a=void 0}=e,{rotation:l=void 0}=e,{lookAt:c=void 0}=e,{viewportAware:u=!1}=e,{inViewport:f=!1}=e,{castShadow:d=void 0}=e,{receiveShadow:m=void 0}=e,{frustumCulled:g=void 0}=e,{renderOrder:h=void 0}=e,{visible:p=void 0}=e,{userData:_=void 0}=e,{dispose:b=void 0}=e,{interactive:x=!1}=e,{ignorePointer:w=!1}=e;function y(O){f=O,t(0,f)}function S(O){lt.call(this,i,O)}function I(O){lt.call(this,i,O)}function v(O){lt.call(this,i,O)}function E(O){lt.call(this,i,O)}function M(O){lt.call(this,i,O)}function R(O){lt.call(this,i,O)}function k(O){lt.call(this,i,O)}function D(O){lt.call(this,i,O)}function N(O){lt.call(this,i,O)}return i.$$set=O=>{"mesh"in O&&t(1,s=O.mesh),"position"in O&&t(2,o=O.position),"scale"in O&&t(3,a=O.scale),"rotation"in O&&t(4,l=O.rotation),"lookAt"in O&&t(5,c=O.lookAt),"viewportAware"in O&&t(6,u=O.viewportAware),"inViewport"in O&&t(0,f=O.inViewport),"castShadow"in O&&t(7,d=O.castShadow),"receiveShadow"in O&&t(8,m=O.receiveShadow),"frustumCulled"in O&&t(9,g=O.frustumCulled),"renderOrder"in O&&t(10,h=O.renderOrder),"visible"in O&&t(11,p=O.visible),"userData"in O&&t(12,_=O.userData),"dispose"in O&&t(13,b=O.dispose),"interactive"in O&&t(14,x=O.interactive),"ignorePointer"in O&&t(15,w=O.ignorePointer),"$$scope"in O&&t(27,r=O.$$scope)},[f,s,o,a,l,c,u,d,m,g,h,p,_,b,x,w,n,y,S,I,v,E,M,R,k,D,N,r]}class ca extends nt{constructor(e){super(),tt(this,e,Sv,Mv,Ze,{mesh:1,position:2,scale:3,rotation:4,lookAt:5,viewportAware:6,inViewport:0,castShadow:7,receiveShadow:8,frustumCulled:9,renderOrder:10,visible:11,userData:12,dispose:13,interactive:14,ignorePointer:15})}}const Ev=(i,e)=>{let t=i;return{onChange:(r,s)=>{(e&&!e(r,t)||!e&&r!==t)&&(s(r,t),t=r)}}};function Mc(i){let e,t,n;function r(o){i[24](o)}let s={mesh:i[17],castShadow:i[5],receiveShadow:i[6],frustumCulled:void 0,renderOrder:i[7],visible:i[8],userData:i[9],dispose:i[10],interactive:i[11],ignorePointer:i[12],viewportAware:i[4]};return i[0]!==void 0&&(s.inViewport=i[0]),e=new ca({props:s}),zt.push(()=>Cn(e,"inViewport",r)),e.$on("click",i[20]),e.$on("contextmenu",i[20]),e.$on("pointerup",i[20]),e.$on("pointerdown",i[20]),e.$on("pointerenter",i[20]),e.$on("pointerleave",i[20]),e.$on("pointermove",i[20]),e.$on("viewportenter",i[25]),e.$on("viewportleave",i[26]),{c(){Ie(e.$$.fragment)},m(o,a){Pe(e,o,a),n=!0},p(o,a){const l={};a[0]&131072&&(l.mesh=o[17]),a[0]&32&&(l.castShadow=o[5]),a[0]&64&&(l.receiveShadow=o[6]),a[0]&128&&(l.renderOrder=o[7]),a[0]&256&&(l.visible=o[8]),a[0]&512&&(l.userData=o[9]),a[0]&1024&&(l.dispose=o[10]),a[0]&2048&&(l.interactive=o[11]),a[0]&4096&&(l.ignorePointer=o[12]),a[0]&16&&(l.viewportAware=o[4]),!t&&a[0]&1&&(t=!0,l.inViewport=o[0],Tn(()=>t=!1)),e.$set(l)},i(o){n||(Q(e.$$.fragment,o),n=!0)},o(o){ne(e.$$.fragment,o),n=!1},d(o){Re(e,o)}}}function Av(i){let e=i[17].uuid,t,n,r=Mc(i);const s=i[23].default,o=pt(s,i,i[27],null);return{c(){r.c(),t=Ue(),o&&o.c()},m(a,l){r.m(a,l),Te(a,t,l),o&&o.m(a,l),n=!0},p(a,l){l[0]&131072&&Ze(e,e=a[17].uuid)?(Bt(),ne(r,1,1,rt),Vt(),r=Mc(a),r.c(),Q(r,1),r.m(t.parentNode,t)):r.p(a,l),o&&o.p&&(!n||l[0]&134217728)&&gt(o,s,a,a[27],n?mt(s,a[27],l,null):_t(a[27]),null)},i(a){n||(Q(r),Q(o,a),n=!0)},o(a){ne(r),ne(o,a),n=!1},d(a){r.d(a),a&&Ae(t),o&&o.d(a)}}}function Tv(i){let e,t,n,r,s,o;return e=new Vr({props:{dispose:i[10],object:i[14]}}),n=new Vr({props:{dispose:i[10],object:i[15]}}),s=new no({props:{object:i[18],position:i[1],scale:i[2],rotation:i[3],lookAt:i[13],$$slots:{default:[Av]},$$scope:{ctx:i}}}),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment),r=Ue(),Ie(s.$$.fragment)},m(a,l){Pe(e,a,l),Te(a,t,l),Pe(n,a,l),Te(a,r,l),Pe(s,a,l),o=!0},p(a,l){const c={};l[0]&1024&&(c.dispose=a[10]),l[0]&16384&&(c.object=a[14]),e.$set(c);const u={};l[0]&1024&&(u.dispose=a[10]),l[0]&32768&&(u.object=a[15]),n.$set(u);const f={};l[0]&2&&(f.position=a[1]),l[0]&4&&(f.scale=a[2]),l[0]&8&&(f.rotation=a[3]),l[0]&8192&&(f.lookAt=a[13]),l[0]&134356977&&(f.$$scope={dirty:l,ctx:a}),s.$set(f)},i(a){o||(Q(e.$$.fragment,a),Q(n.$$.fragment,a),Q(s.$$.fragment,a),o=!0)},o(a){ne(e.$$.fragment,a),ne(n.$$.fragment,a),ne(s.$$.fragment,a),o=!1},d(a){Re(e,a),a&&Ae(t),Re(n,a),a&&Ae(r),Re(s,a)}}}const ff=new ot;ff.scale.set(0,0,0);const Sc={matrix:ff.matrix,color:null},Cv=new ut().fromArray(new Array(16).fill(0)),qo=new Ve(16777215),df="threlte-instanced-mesh-context",Lv=i=>Nn(df+i);function Dv(i,e,t){let n,r=rt,s=()=>(r(),r=Bs(D,Y=>t(17,n=Y)),D),o;i.$$.on_destroy.push(()=>r());let{$$slots:a={},$$scope:l}=e,{position:c=void 0}=e,{scale:u=void 0}=e,{rotation:f=void 0}=e,{viewportAware:d=!1}=e,{inViewport:m=!1}=e,{castShadow:g=void 0}=e,{receiveShadow:h=void 0}=e,{renderOrder:p=void 0}=e,{visible:_=void 0}=e,{userData:b=void 0}=e,{dispose:x=void 0}=e,{interactive:w=!1}=e,{ignorePointer:y=!1}=e,{lookAt:S=void 0}=e,{geometry:I}=e,{material:v}=e,{count:E=void 0}=e,{id:M=""}=e;const{onChange:R}=Ev(v),k=Y=>Y===void 0,D=Et(new Rs(I,v,k(E)?0:E));s();const N=new ot,O=[],{invalidate:P}=Dn(),q=(Y,ue)=>{const He=O.findIndex(vt=>vt===Y);if(He===-1){console.warn("Instanced Mesh: Instance not found");return}ue(He)},{start:X,stop:V,started:G}=wr(()=>{n.dispose(),nn(D,n=new Rs(I,v,O.length),n),O.forEach((Y,ue)=>{we(Y,ue),Y.color?n.setColorAt(ue,Y.color):n.setColorAt(ue,qo)}),nn(D,n.instanceMatrix.needsUpdate=!0,n),n.instanceColor&&nn(D,n.instanceColor.needsUpdate=!0,n),V()},{autostart:!1,debugFrameloopMessage:"Instanced Mesh: auto instance count change queued"});et(i,G,Y=>t(29,o=Y));const W=Y=>{if(k(E))O.push(Y),o||X();else{const ue=O.findIndex(He=>He===Sc);ue!==-1?O[ue]=Y:O.push(Y),O.length>E&&console.warn("Instanced Mesh: More instances requested than allocated, increase count on <")}oe(Y),P("Instanced Mesh: Instance added")},te=Y=>{if(k(E)){const ue=O.findIndex(He=>He===Y);O.splice(ue,1),o||X()}else{re(Y);const ue=O.findIndex(He=>He===Y);ue>=E?O.splice(ue,1):O.splice(ue,1,Sc)}P("Instanced Mesh: Instance removed")},oe=Y=>{Y.color||q(Y,ue=>{n.setColorAt(ue,qo),n.instanceColor&&nn(D,n.instanceColor.needsUpdate=!0,n)})},re=Y=>{q(Y,ue=>{n.setMatrixAt(ue,Cv),nn(D,n.instanceMatrix.needsUpdate=!0,n),P("Instanced Mesh: instance matrix resetted")})},we=(Y,ue)=>{n.setMatrixAt(ue,Y.matrix),nn(D,n.instanceMatrix.needsUpdate=!0,n),P("Instanced Mesh: instance matrix set")},B=Y=>{q(Y,ue=>{we(Y,ue)})},_e=Y=>{q(Y,ue=>{var He;n.setColorAt(ue,(He=Y.color)!=null?He:qo),n.instanceColor&&nn(D,n.instanceColor.needsUpdate=!0,n),P("Instanced Mesh: instance color set")})};En(df+M,{registerInstance:W,removeInstance:te,setInstanceMatrix:B,setInstanceColor:_e,parentObject:N});const Ee=Y=>{if(Y.detail.instanceId===void 0)return;const ue=O[Y.detail.instanceId];ue&&ue.pointerEventDispatcher&&ue.pointerEventDispatcher(Y.type,Y.detail)};function pe(Y){m=Y,t(0,m)}function ye(Y){lt.call(this,i,Y)}function Xe(Y){lt.call(this,i,Y)}return i.$$set=Y=>{"position"in Y&&t(1,c=Y.position),"scale"in Y&&t(2,u=Y.scale),"rotation"in Y&&t(3,f=Y.rotation),"viewportAware"in Y&&t(4,d=Y.viewportAware),"inViewport"in Y&&t(0,m=Y.inViewport),"castShadow"in Y&&t(5,g=Y.castShadow),"receiveShadow"in Y&&t(6,h=Y.receiveShadow),"renderOrder"in Y&&t(7,p=Y.renderOrder),"visible"in Y&&t(8,_=Y.visible),"userData"in Y&&t(9,b=Y.userData),"dispose"in Y&&t(10,x=Y.dispose),"interactive"in Y&&t(11,w=Y.interactive),"ignorePointer"in Y&&t(12,y=Y.ignorePointer),"lookAt"in Y&&t(13,S=Y.lookAt),"geometry"in Y&&t(14,I=Y.geometry),"material"in Y&&t(15,v=Y.material),"count"in Y&&t(21,E=Y.count),"id"in Y&&t(22,M=Y.id),"$$scope"in Y&&t(27,l=Y.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&32768&&R(v,Y=>{nn(D,n.material=Y,n)})},[m,c,u,f,d,g,h,p,_,b,x,w,y,S,I,v,D,n,N,G,Ee,E,M,a,pe,ye,Xe,l]}class Pv extends nt{constructor(e){super(),tt(this,e,Dv,Tv,Ze,{position:1,scale:2,rotation:3,viewportAware:4,inViewport:0,castShadow:5,receiveShadow:6,renderOrder:7,visible:8,userData:9,dispose:10,interactive:11,ignorePointer:12,lookAt:13,geometry:14,material:15,count:21,id:22,instancedMesh:16},null,[-1,-1])}get instancedMesh(){return this.$$.ctx[16]}}function Rv(i){let e;const t=i[8].default,n=pt(t,i,i[9],null);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&512)&&gt(n,t,r,r[9],e?mt(t,r[9],s,null):_t(r[9]),null)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function Iv(i){let e,t,n,r;return e=new eo({props:{object:i[4],$$slots:{default:[Rv]},$$scope:{ctx:i}}}),n=new to({props:{object:i[4],position:i[0],scale:i[1],rotation:i[2],lookAt:i[3]}}),n.$on("transform",i[5]),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment)},m(s,o){Pe(e,s,o),Te(s,t,o),Pe(n,s,o),r=!0},p(s,[o]){const a={};o&512&&(a.$$scope={dirty:o,ctx:s}),e.$set(a);const l={};o&1&&(l.position=s[0]),o&2&&(l.scale=s[1]),o&4&&(l.rotation=s[2]),o&8&&(l.lookAt=s[3]),n.$set(l)},i(s){r||(Q(e.$$.fragment,s),Q(n.$$.fragment,s),r=!0)},o(s){ne(e.$$.fragment,s),ne(n.$$.fragment,s),r=!1},d(s){Re(e,s),s&&Ae(t),Re(n,s)}}}function Ov(i,e,t){let{$$slots:n={},$$scope:r}=e,{position:s=void 0}=e,{scale:o=void 0}=e,{rotation:a=void 0}=e,{lookAt:l=void 0}=e,{color:c=void 0}=e,{id:u=""}=e;const{registerInstance:f,setInstanceMatrix:d,removeInstance:m,setInstanceColor:g,parentObject:h}=Lv(u),p=new ot,_=new ut,b=Fi(),x=()=>{var k;return h.uuid===((k=p.parent)==null?void 0:k.uuid)},w=k=>k!==void 0?k instanceof Ve?k:new Ve(k):null,y={color:w(c),matrix:p.matrix,pointerEventDispatcher:b},S=k=>{y.color=w(k),g(y)},I=()=>{let k=p.parent;const D=[];for(;k&&h&&k.uuid!==h.uuid&&(D.push(k),!!k.parent);)k=k.parent;p.updateMatrix(),_.copy(p.matrix),D.forEach(N=>{N.updateMatrix(),_.premultiply(N.matrix)}),y.matrix=_},v=()=>{p.updateMatrix(),y.matrix=p.matrix},E=()=>{v(),d(y)},{start:M}=wr(()=>{I(),d(y)},{autostart:!1,debugFrameloopMessage:"Instance: tracking non-direct child instance"});f(y),Hr(()=>{x()?E():M(),S(c)});const R=()=>{x()&&E()};return At(()=>{m(y)}),i.$$set=k=>{"position"in k&&t(0,s=k.position),"scale"in k&&t(1,o=k.scale),"rotation"in k&&t(2,a=k.rotation),"lookAt"in k&&t(3,l=k.lookAt),"color"in k&&t(6,c=k.color),"id"in k&&t(7,u=k.id),"$$scope"in k&&t(9,r=k.$$scope)},i.$$.update=()=>{i.$$.dirty&64&&S(c)},[s,o,a,l,p,R,c,u,n,r]}class Nv extends nt{constructor(e){super(),tt(this,e,Ov,Iv,Ze,{position:0,scale:1,rotation:2,lookAt:3,color:6,id:7})}}iv(ic,()=>new ic);function Ec(i){return-.5*(Math.cos(Math.PI*i)-1)}function Ac(i){return Object.prototype.toString.call(i)==="[object Date]"}function ua(i,e){if(i===e||i!==i)return()=>i;const t=typeof i;if(t!==typeof e||Array.isArray(i)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(i)){const n=e.map((r,s)=>ua(i[s],r));return r=>n.map(s=>s(r))}if(t==="object"){if(!i||!e)throw new Error("Object cannot be null");if(Ac(i)&&Ac(e)){i=i.getTime(),e=e.getTime();const s=e-i;return o=>new Date(i+o*s)}const n=Object.keys(e),r={};return n.forEach(s=>{r[s]=ua(i[s],e[s])}),s=>{const o={};return n.forEach(a=>{o[a]=r[a](s)}),o}}if(t==="number"){const n=e-i;return r=>i+r*n}throw new Error(`Cannot interpolate ${t} values`)}function Tc(i,e={}){const t=Et(i);let n,r=i;function s(o,a){if(i==null)return t.set(i=o),Promise.resolve();r=o;let l=n,c=!1,{delay:u=0,duration:f=400,easing:d=Yf,interpolate:m=ua}=Ds(Ds({},e),a);if(f===0)return l&&(l.abort(),l=null),t.set(i=r),Promise.resolve();const g=Jf()+u;let h;return n=Qf(p=>{if(p<g)return!0;c||(h=m(i,o),typeof f=="function"&&(f=f(i,o)),c=!0),l&&(l.abort(),l=null);const _=p-g;return _>f?(t.set(i=o),!1):(t.set(i=h(d(_/f))),!0)}),n.promise}return{set:s,update:(o,a)=>s(o(r,i),a),subscribe:t.subscribe}}function Fv(i){let e,t;return e=new Nv({props:{position:{...i[4]},scale:i[2],color:i[0]?new Ve(5263440):i[3]}}),e.$on("pointerenter",i[9]),e.$on("pointerleave",i[10]),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.scale=n[2]),r&9&&(s.color=n[0]?new Ve(5263440):n[3]),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function kv(i,e,t){let n,r,{graph:s}=e,{nodeID:o}=e,{greyedOut:a}=e,l=s.getNodeAttributes(o);const c={x:l.x,y:l.y,z:l.z};let u=!1;const f=Tc(1);et(i,f,b=>t(2,n=b));const d=Tc(0);let m=new Ve(16727552),g=new Ve(16699392);const h=Hs(d,b=>new Ve().lerpColors(m,g,b));et(i,h,b=>t(3,r=b));const p=()=>t(1,u=!0),_=()=>t(1,u=!1);return i.$$set=b=>{"graph"in b&&t(7,s=b.graph),"nodeID"in b&&t(8,o=b.nodeID),"greyedOut"in b&&t(0,a=b.greyedOut)},i.$$.update=()=>{i.$$.dirty&3&&(!a&&u?(f.set(3,{duration:50,easing:Ec}),d.set(1,{duration:0})):(f.set(1,{duration:250,easing:Ec}),d.set(0,{duration:250})))},[a,u,n,r,c,f,h,s,o,p,_]}class zv extends nt{constructor(e){super(),tt(this,e,kv,Fv,Ze,{graph:7,nodeID:8,greyedOut:0})}}var Ta={exports:{}},lr=typeof Reflect=="object"?Reflect:null,Cc=lr&&typeof lr.apply=="function"?lr.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Ls;lr&&typeof lr.ownKeys=="function"?Ls=lr.ownKeys:Object.getOwnPropertySymbols?Ls=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Ls=function(e){return Object.getOwnPropertyNames(e)};function Uv(i){console&&console.warn&&console.warn(i)}var hf=Number.isNaN||function(e){return e!==e};function at(){at.init.call(this)}Ta.exports=at;Ta.exports.once=Hv;at.EventEmitter=at;at.prototype._events=void 0;at.prototype._eventsCount=0;at.prototype._maxListeners=void 0;var Lc=10;function io(i){if(typeof i!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof i)}Object.defineProperty(at,"defaultMaxListeners",{enumerable:!0,get:function(){return Lc},set:function(i){if(typeof i!="number"||i<0||hf(i))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+i+".");Lc=i}});at.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};at.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||hf(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function pf(i){return i._maxListeners===void 0?at.defaultMaxListeners:i._maxListeners}at.prototype.getMaxListeners=function(){return pf(this)};at.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r=e==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Cc(l,this,t);else for(var c=l.length,u=bf(l,c),n=0;n<c;++n)Cc(u[n],this,t);return!0};function mf(i,e,t,n){var r,s,o;if(io(t),s=i._events,s===void 0?(s=i._events=Object.create(null),i._eventsCount=0):(s.newListener!==void 0&&(i.emit("newListener",e,t.listener?t.listener:t),s=i._events),o=s[e]),o===void 0)o=s[e]=t,++i._eventsCount;else if(typeof o=="function"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),r=pf(i),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=i,a.type=e,a.count=o.length,Uv(a)}return i}at.prototype.addListener=function(e,t){return mf(this,e,t,!1)};at.prototype.on=at.prototype.addListener;at.prototype.prependListener=function(e,t){return mf(this,e,t,!0)};function Gv(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function gf(i,e,t){var n={fired:!1,wrapFn:void 0,target:i,type:e,listener:t},r=Gv.bind(n);return r.listener=t,n.wrapFn=r,r}at.prototype.once=function(e,t){return io(t),this.on(e,gf(this,e,t)),this};at.prototype.prependOnceListener=function(e,t){return io(t),this.prependListener(e,gf(this,e,t)),this};at.prototype.removeListener=function(e,t){var n,r,s,o,a;if(io(t),r=this._events,r===void 0)return this;if(n=r[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,s=o;break}if(s<0)return this;s===0?n.shift():Bv(n,s),n.length===1&&(r[e]=n[0]),r.removeListener!==void 0&&this.emit("removeListener",e,a||t)}return this};at.prototype.off=at.prototype.removeListener;at.prototype.removeAllListeners=function(e){var t,n,r;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this};function _f(i,e,t){var n=i._events;if(n===void 0)return[];var r=n[e];return r===void 0?[]:typeof r=="function"?t?[r.listener||r]:[r]:t?Vv(r):bf(r,r.length)}at.prototype.listeners=function(e){return _f(this,e,!0)};at.prototype.rawListeners=function(e){return _f(this,e,!1)};at.listenerCount=function(i,e){return typeof i.listenerCount=="function"?i.listenerCount(e):vf.call(i,e)};at.prototype.listenerCount=vf;function vf(i){var e=this._events;if(e!==void 0){var t=e[i];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}at.prototype.eventNames=function(){return this._eventsCount>0?Ls(this._events):[]};function bf(i,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=i[n];return t}function Bv(i,e){for(;e+1<i.length;e++)i[e]=i[e+1];i.pop()}function Vv(i){for(var e=new Array(i.length),t=0;t<e.length;++t)e[t]=i[t].listener||i[t];return e}function Hv(i,e){return new Promise(function(t,n){function r(o){i.removeListener(e,s),n(o)}function s(){typeof i.removeListener=="function"&&i.removeListener("error",r),t([].slice.call(arguments))}wf(i,e,s,{once:!0}),e!=="error"&&Wv(i,r,{once:!0})})}function Wv(i,e,t){typeof i.on=="function"&&wf(i,"error",e,t)}function wf(i,e,t,n){if(typeof i.on=="function")n.once?i.once(e,t):i.on(e,t);else if(typeof i.addEventListener=="function")i.addEventListener(e,function r(s){n.once&&i.removeEventListener(e,r),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof i)}function Fn(i){if(typeof i!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=i}typeof Symbol<"u"&&(Fn.prototype[Symbol.iterator]=function(){return this});Fn.of=function(){var i=arguments,e=i.length,t=0;return new Fn(function(){return t>=e?{done:!0}:{done:!1,value:i[t++]}})};Fn.empty=function(){var i=new Fn(function(){return{done:!0}});return i};Fn.fromSequence=function(i){var e=0,t=i.length;return new Fn(function(){return e>=t?{done:!0}:{done:!1,value:i[e++]}})};Fn.is=function(i){return i instanceof Fn?!0:typeof i=="object"&&i!==null&&typeof i.next=="function"};var Jt=Fn,Ca={};Ca.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u";Ca.SYMBOL_SUPPORT=typeof Symbol<"u";var jv=Jt,yf=Ca,qv=yf.ARRAY_BUFFER_SUPPORT,Xv=yf.SYMBOL_SUPPORT;function Yv(i){return typeof i=="string"||Array.isArray(i)||qv&&ArrayBuffer.isView(i)?jv.fromSequence(i):typeof i!="object"||i===null?null:Xv&&typeof i[Symbol.iterator]=="function"?i[Symbol.iterator]():typeof i.next=="function"?i:null}var xf=function(e){var t=Yv(e);if(!t)throw new Error("obliterator: target is not iterable nor a valid iterator.");return t},Zv=xf,Mf=function(e,t){for(var n=arguments.length>1?t:1/0,r=n!==1/0?new Array(n):[],s,o=0,a=Zv(e);;){if(o===n)return r;if(s=a.next(),s.done)return o!==t&&(r.length=o),r;r[o++]=s.value}},Kv=Jt,Jv=xf,Zn=function(){var e=arguments,t=null,n=-1;return new Kv(function(){var s=null;do{if(t===null){if(n++,n>=e.length)return{done:!0};t=Jv(e[n])}if(s=t.next(),s.done===!0){t=null;continue}break}while(!0);return s})};function Qv(){const i=arguments[0];for(let e=1,t=arguments.length;e<t;e++)if(!!arguments[e])for(const n in arguments[e])i[n]=arguments[e][n];return i}let Dt=Qv;typeof Object.assign=="function"&&(Dt=Object.assign);function gn(i,e,t,n){const r=i._nodes.get(e);let s=null;return r&&(n==="mixed"?s=r.out&&r.out[t]||r.undirected&&r.undirected[t]:n==="directed"?s=r.out&&r.out[t]:s=r.undirected&&r.undirected[t]),s}function $v(i){return i!==null&&typeof i=="object"&&typeof i.addUndirectedEdgeWithKey=="function"&&typeof i.dropNode=="function"}function kt(i){return typeof i=="object"&&i!==null&&i.constructor===Object}function Sf(i){let e;for(e in i)return!1;return!0}function un(i,e,t){Object.defineProperty(i,e,{enumerable:!1,configurable:!1,writable:!0,value:t})}function Mn(i,e,t){const n={enumerable:!0,configurable:!0};typeof t=="function"?n.get=t:(n.value=t,n.writable=!1),Object.defineProperty(i,e,n)}function Dc(i){return!(!kt(i)||i.attributes&&!Array.isArray(i.attributes))}function eb(){let i=Math.floor(Math.random()*256)&255;return()=>i++}class La extends Error{constructor(e){super(),this.name="GraphError",this.message=e}}class be extends La{constructor(e){super(e),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,be.prototype.constructor)}}class ae extends La{constructor(e){super(e),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,ae.prototype.constructor)}}class De extends La{constructor(e){super(e),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,De.prototype.constructor)}}function Ef(i,e){this.key=i,this.attributes=e,this.clear()}Ef.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.in={},this.out={},this.undirected={}};function Af(i,e){this.key=i,this.attributes=e,this.clear()}Af.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.in={},this.out={}};function Tf(i,e){this.key=i,this.attributes=e,this.clear()}Tf.prototype.clear=function(){this.undirectedDegree=0,this.undirected={}};function yr(i,e,t,n,r){this.key=e,this.attributes=r,this.undirected=i,this.source=t,this.target=n}yr.prototype.attach=function(){let i="out",e="in";this.undirected&&(i=e="undirected");const t=this.source.key,n=this.target.key;this.source[i][n]=this,!(this.undirected&&t===n)&&(this.target[e][t]=this)};yr.prototype.attachMulti=function(){let i="out",e="in";const t=this.source.key,n=this.target.key;this.undirected&&(i=e="undirected");const r=this.source[i],s=r[n];if(typeof s>"u"){r[n]=this,this.undirected&&t===n||(this.target[e][t]=this);return}s.previous=this,this.next=s,r[n]=this,this.target[e][t]=this};yr.prototype.detach=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),delete this.source[t][e],delete this.target[n][i]};yr.prototype.detachMulti=function(){const i=this.source.key,e=this.target.key;let t="out",n="in";this.undirected&&(t=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[t][e],delete this.target[n][i]):(this.next.previous=void 0,this.source[t][e]=this.next,this.target[n][i]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const Cf=0,Lf=1,tb=2,Df=3;function $n(i,e,t,n,r,s,o){let a,l,c,u;if(n=""+n,t===Cf){if(a=i._nodes.get(n),!a)throw new ae(`Graph.${e}: could not find the "${n}" node in the graph.`);c=r,u=s}else if(t===Df){if(r=""+r,l=i._edges.get(r),!l)throw new ae(`Graph.${e}: could not find the "${r}" edge in the graph.`);const f=l.source.key,d=l.target.key;if(n===f)a=l.target;else if(n===d)a=l.source;else throw new ae(`Graph.${e}: the "${n}" node is not attached to the "${r}" edge (${f}, ${d}).`);c=s,u=o}else{if(l=i._edges.get(n),!l)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`);t===Lf?a=l.source:a=l.target,c=r,u=s}return[a,c,u]}function nb(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=$n(this,e,t,n,r,s);return o.attributes[a]}}function ib(i,e,t){i.prototype[e]=function(n,r){const[s]=$n(this,e,t,n,r);return s.attributes}}function rb(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=$n(this,e,t,n,r,s);return o.attributes.hasOwnProperty(a)}}function sb(i,e,t){i.prototype[e]=function(n,r,s,o){const[a,l,c]=$n(this,e,t,n,r,s,o);return a.attributes[l]=c,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:l}),this}}function ob(i,e,t){i.prototype[e]=function(n,r,s,o){const[a,l,c]=$n(this,e,t,n,r,s,o);if(typeof c!="function")throw new be(`Graph.${e}: updater should be a function.`);const u=a.attributes,f=c(u[l]);return u[l]=f,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:l}),this}}function ab(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=$n(this,e,t,n,r,s);return delete o.attributes[a],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function lb(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=$n(this,e,t,n,r,s);if(!kt(a))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function cb(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=$n(this,e,t,n,r,s);if(!kt(a))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return Dt(o.attributes,a),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function ub(i,e,t){i.prototype[e]=function(n,r,s){const[o,a]=$n(this,e,t,n,r,s);if(typeof a!="function")throw new be(`Graph.${e}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const fb=[{name:i=>`get${i}Attribute`,attacher:nb},{name:i=>`get${i}Attributes`,attacher:ib},{name:i=>`has${i}Attribute`,attacher:rb},{name:i=>`set${i}Attribute`,attacher:sb},{name:i=>`update${i}Attribute`,attacher:ob},{name:i=>`remove${i}Attribute`,attacher:ab},{name:i=>`replace${i}Attributes`,attacher:lb},{name:i=>`merge${i}Attributes`,attacher:cb},{name:i=>`update${i}Attributes`,attacher:ub}];function db(i){fb.forEach(function({name:e,attacher:t}){t(i,e("Node"),Cf),t(i,e("Source"),Lf),t(i,e("Target"),tb),t(i,e("Opposite"),Df)})}function hb(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new ae(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes[r]}}function pb(i,e,t){i.prototype[e]=function(n){let r;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+n,o=""+arguments[1];if(r=gn(this,s,o,t),!r)throw new ae(`Graph.${e}: could not find an edge for the given path ("${s}" - "${o}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,r=this._edges.get(n),!r)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return r.attributes}}function mb(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new ae(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function gb(i,e,t){i.prototype[e]=function(n,r,s){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,l=""+r;if(r=arguments[2],s=arguments[3],o=gn(this,a,l,t),!o)throw new ae(`Graph.${e}: could not find an edge for the given path ("${a}" - "${l}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return o.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function _b(i,e,t){i.prototype[e]=function(n,r,s){let o;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,l=""+r;if(r=arguments[2],s=arguments[3],o=gn(this,a,l,t),!o)throw new ae(`Graph.${e}: could not find an edge for the given path ("${a}" - "${l}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof s!="function")throw new be(`Graph.${e}: updater should be a function.`);return o.attributes[r]=s(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function vb(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new ae(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function bb(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new ae(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!kt(r))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function wb(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new ae(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(!kt(r))throw new be(`Graph.${e}: provided attributes are not a plain object.`);return Dt(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function yb(i,e,t){i.prototype[e]=function(n,r){let s;if(this.type!=="mixed"&&t!=="mixed"&&t!==this.type)throw new De(`Graph.${e}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new De(`Graph.${e}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=gn(this,o,a,t),!s)throw new ae(`Graph.${e}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(t!=="mixed")throw new De(`Graph.${e}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new ae(`Graph.${e}: could not find the "${n}" edge in the graph.`)}if(typeof r!="function")throw new be(`Graph.${e}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const xb=[{name:i=>`get${i}Attribute`,attacher:hb},{name:i=>`get${i}Attributes`,attacher:pb},{name:i=>`has${i}Attribute`,attacher:mb},{name:i=>`set${i}Attribute`,attacher:gb},{name:i=>`update${i}Attribute`,attacher:_b},{name:i=>`remove${i}Attribute`,attacher:vb},{name:i=>`replace${i}Attributes`,attacher:bb},{name:i=>`merge${i}Attributes`,attacher:wb},{name:i=>`update${i}Attributes`,attacher:yb}];function Mb(i){xb.forEach(function({name:e,attacher:t}){t(i,e("Edge"),"mixed"),t(i,e("DirectedEdge"),"directed"),t(i,e("UndirectedEdge"),"undirected")})}const Sb=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function Eb(i,e,t,n){let r=!1;for(const s in e){if(s===n)continue;const o=e[s];if(r=t(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),i&&r)return o.key}}function Ab(i,e,t,n){let r,s,o,a=!1;for(const l in e)if(l!==n){r=e[l];do{if(s=r.source,o=r.target,a=t(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected),i&&a)return r.key;r=r.next}while(r!==void 0)}}function Xo(i,e){const t=Object.keys(i),n=t.length;let r,s=0;return new Jt(function(){do if(r)r=r.next;else{if(s>=n)return{done:!0};const a=t[s++];if(a===e){r=void 0;continue}r=i[a]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}})}function Tb(i,e,t,n){const r=e[t];if(!r)return;const s=r.source,o=r.target;if(n(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected)&&i)return r.key}function Cb(i,e,t,n){let r=e[t];if(!r)return;let s=!1;do{if(s=n(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),i&&s)return r.key;r=r.next}while(r!==void 0)}function Yo(i,e){let t=i[e];return t.next!==void 0?new Jt(function(){if(!t)return{done:!0};const n={edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected};return t=t.next,{done:!1,value:n}}):Jt.of({edge:t.key,attributes:t.attributes,source:t.source.key,target:t.target.key,sourceAttributes:t.source.attributes,targetAttributes:t.target.attributes,undirected:t.undirected})}function Lb(i,e){if(i.size===0)return[];if(e==="mixed"||e===i.type)return typeof Array.from=="function"?Array.from(i._edges.keys()):Mf(i._edges.keys(),i._edges.size);const t=e==="undirected"?i.undirectedSize:i.directedSize,n=new Array(t),r=e==="undirected",s=i._edges.values();let o=0,a,l;for(;a=s.next(),a.done!==!0;)l=a.value,l.undirected===r&&(n[o++]=l.key);return n}function Pf(i,e,t,n){if(e.size===0)return;const r=t!=="mixed"&&t!==e.type,s=t==="undirected";let o,a,l=!1;const c=e._edges.values();for(;o=c.next(),o.done!==!0;){if(a=o.value,r&&a.undirected!==s)continue;const{key:u,attributes:f,source:d,target:m}=a;if(l=n(u,f,d.key,m.key,d.attributes,m.attributes,a.undirected),i&&l)return u}}function Db(i,e){if(i.size===0)return Jt.empty();const t=e!=="mixed"&&e!==i.type,n=e==="undirected",r=i._edges.values();return new Jt(function(){let o,a;for(;;){if(o=r.next(),o.done)return o;if(a=o.value,!(t&&a.undirected!==n))break}return{value:{edge:a.key,attributes:a.attributes,source:a.source.key,target:a.target.key,sourceAttributes:a.source.attributes,targetAttributes:a.target.attributes,undirected:a.undirected},done:!1}})}function Da(i,e,t,n,r,s){const o=e?Ab:Eb;let a;if(t!=="undirected"&&(n!=="out"&&(a=o(i,r.in,s),i&&a)||n!=="in"&&(a=o(i,r.out,s,n?void 0:r.key),i&&a))||t!=="directed"&&(a=o(i,r.undirected,s),i&&a))return a}function Pb(i,e,t,n){const r=[];return Da(!1,i,e,t,n,function(s){r.push(s)}),r}function Rb(i,e,t){let n=Jt.empty();return i!=="undirected"&&(e!=="out"&&typeof t.in<"u"&&(n=Zn(n,Xo(t.in))),e!=="in"&&typeof t.out<"u"&&(n=Zn(n,Xo(t.out,e?void 0:t.key)))),i!=="directed"&&typeof t.undirected<"u"&&(n=Zn(n,Xo(t.undirected))),n}function Pa(i,e,t,n,r,s,o){const a=t?Cb:Tb;let l;if(e!=="undirected"&&(typeof r.in<"u"&&n!=="out"&&(l=a(i,r.in,s,o),i&&l)||typeof r.out<"u"&&n!=="in"&&(n||r.key!==s)&&(l=a(i,r.out,s,o),i&&l))||e!=="directed"&&typeof r.undirected<"u"&&(l=a(i,r.undirected,s,o),i&&l))return l}function Ib(i,e,t,n,r){const s=[];return Pa(!1,i,e,t,n,r,function(o){s.push(o)}),s}function Ob(i,e,t,n){let r=Jt.empty();return i!=="undirected"&&(typeof t.in<"u"&&e!=="out"&&n in t.in&&(r=Zn(r,Yo(t.in,n))),typeof t.out<"u"&&e!=="in"&&n in t.out&&(e||t.key!==n)&&(r=Zn(r,Yo(t.out,n)))),i!=="directed"&&typeof t.undirected<"u"&&n in t.undirected&&(r=Zn(r,Yo(t.undirected,n))),r}function Nb(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s,o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return Lb(this,n);if(arguments.length===1){s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new ae(`Graph.${t}: could not find the "${s}" node in the graph.`);return Pb(this.multi,n==="mixed"?this.type:n,r,a)}if(arguments.length===2){s=""+s,o=""+o;const a=this._nodes.get(s);if(!a)throw new ae(`Graph.${t}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(o))throw new ae(`Graph.${t}:  could not find the "${o}" target node in the graph.`);return Ib(n,this.multi,r,a,o)}throw new be(`Graph.${t}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Fb(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,u,f){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return f=c,Pf(!1,this,n,f);if(arguments.length===2){c=""+c,f=u;const d=this._nodes.get(c);if(typeof d>"u")throw new ae(`Graph.${s}: could not find the "${c}" node in the graph.`);return Da(!1,this.multi,n==="mixed"?this.type:n,r,d,f)}if(arguments.length===3){c=""+c,u=""+u;const d=this._nodes.get(c);if(!d)throw new ae(`Graph.${s}:  could not find the "${c}" source node in the graph.`);if(!this._nodes.has(u))throw new ae(`Graph.${s}:  could not find the "${u}" target node in the graph.`);return Pa(!1,n,this.multi,r,d,u,f)}throw new be(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(){const c=Array.prototype.slice.call(arguments),u=c.pop();let f;if(c.length===0){let d=0;n!=="directed"&&(d+=this.undirectedSize),n!=="undirected"&&(d+=this.directedSize),f=new Array(d);let m=0;c.push((g,h,p,_,b,x,w)=>{f[m++]=u(g,h,p,_,b,x,w)})}else f=[],c.push((d,m,g,h,p,_,b)=>{f.push(u(d,m,g,h,p,_,b))});return this[s].apply(this,c),f};const a="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(){const c=Array.prototype.slice.call(arguments),u=c.pop(),f=[];return c.push((d,m,g,h,p,_,b)=>{u(d,m,g,h,p,_,b)&&f.push(d)}),this[s].apply(this,c),f};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(){let c=Array.prototype.slice.call(arguments);if(c.length<2||c.length>4)throw new be(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${c.length}).`);if(typeof c[c.length-1]=="function"&&typeof c[c.length-2]!="function")throw new be(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,f;c.length===2?(u=c[0],f=c[1],c=[]):c.length===3?(u=c[1],f=c[2],c=[c[0]]):c.length===4&&(u=c[2],f=c[3],c=[c[0],c[1]]);let d=f;return c.push((m,g,h,p,_,b,x)=>{d=u(d,m,g,h,p,_,b,x)}),this[s].apply(this,c),d}}function kb(i,e){const{name:t,type:n,direction:r}=e,s="find"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(l,c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return u=l,Pf(!0,this,n,u);if(arguments.length===2){l=""+l,u=c;const f=this._nodes.get(l);if(typeof f>"u")throw new ae(`Graph.${s}: could not find the "${l}" node in the graph.`);return Da(!0,this.multi,n==="mixed"?this.type:n,r,f,u)}if(arguments.length===3){l=""+l,c=""+c;const f=this._nodes.get(l);if(!f)throw new ae(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(c))throw new ae(`Graph.${s}:  could not find the "${c}" target node in the graph.`);return Pa(!0,n,this.multi,r,f,c,u)}throw new be(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((f,d,m,g,h,p,_)=>c(f,d,m,g,h,p,_)),!!this[s].apply(this,l)};const a="every"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((f,d,m,g,h,p,_)=>!c(f,d,m,g,h,p,_)),!this[s].apply(this,l)}}function zb(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(o,a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Jt.empty();if(!arguments.length)return Db(this,n);if(arguments.length===1){o=""+o;const l=this._nodes.get(o);if(!l)throw new ae(`Graph.${s}: could not find the "${o}" node in the graph.`);return Rb(n,r,l)}if(arguments.length===2){o=""+o,a=""+a;const l=this._nodes.get(o);if(!l)throw new ae(`Graph.${s}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(a))throw new ae(`Graph.${s}:  could not find the "${a}" target node in the graph.`);return Ob(n,r,l,a)}throw new be(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function Ub(i){Sb.forEach(e=>{Nb(i,e),Fb(i,e),kb(i,e),zb(i,e)})}const Gb=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function ro(){this.A=null,this.B=null}ro.prototype.wrap=function(i){this.A===null?this.A=i:this.B===null&&(this.B=i)};ro.prototype.has=function(i){return this.A!==null&&i in this.A||this.B!==null&&i in this.B};function Lr(i,e,t,n,r){for(const s in n){const o=n[s],a=o.source,l=o.target,c=a===t?l:a;if(e&&e.has(c.key))continue;const u=r(c.key,c.attributes);if(i&&u)return c.key}}function Ra(i,e,t,n,r){if(e!=="mixed"){if(e==="undirected")return Lr(i,null,n,n.undirected,r);if(typeof t=="string")return Lr(i,null,n,n[t],r)}const s=new ro;let o;if(e!=="undirected"){if(t!=="out"){if(o=Lr(i,null,n,n.in,r),i&&o)return o;s.wrap(n.in)}if(t!=="in"){if(o=Lr(i,s,n,n.out,r),i&&o)return o;s.wrap(n.out)}}if(e!=="directed"&&(o=Lr(i,s,n,n.undirected,r),i&&o))return o}function Bb(i,e,t){if(i!=="mixed"){if(i==="undirected")return Object.keys(t.undirected);if(typeof e=="string")return Object.keys(t[e])}const n=[];return Ra(!1,i,e,t,function(r){n.push(r)}),n}function Dr(i,e,t){const n=Object.keys(t),r=n.length;let s=0;return new Jt(function(){let a=null;do{if(s>=r)return i&&i.wrap(t),{done:!0};const l=t[n[s++]],c=l.source,u=l.target;if(a=c===e?u:c,i&&i.has(a.key)){a=null;continue}}while(a===null);return{done:!1,value:{neighbor:a.key,attributes:a.attributes}}})}function Vb(i,e,t){if(i!=="mixed"){if(i==="undirected")return Dr(null,t,t.undirected);if(typeof e=="string")return Dr(null,t,t[e])}let n=Jt.empty();const r=new ro;return i!=="undirected"&&(e!=="out"&&(n=Zn(n,Dr(r,t,t.in))),e!=="in"&&(n=Zn(n,Dr(r,t,t.out)))),i!=="directed"&&(n=Zn(n,Dr(r,t,t.undirected))),n}function Hb(i,e){const{name:t,type:n,direction:r}=e;i.prototype[t]=function(s){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new ae(`Graph.${t}: could not find the "${s}" node in the graph.`);return Bb(n==="mixed"?this.type:n,r,o)}}function Wb(i,e){const{name:t,type:n,direction:r}=e,s="forEach"+t[0].toUpperCase()+t.slice(1,-1);i.prototype[s]=function(c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const f=this._nodes.get(c);if(typeof f>"u")throw new ae(`Graph.${s}: could not find the "${c}" node in the graph.`);Ra(!1,n==="mixed"?this.type:n,r,f,u)};const o="map"+t[0].toUpperCase()+t.slice(1);i.prototype[o]=function(c,u){const f=[];return this[s](c,(d,m)=>{f.push(u(d,m))}),f};const a="filter"+t[0].toUpperCase()+t.slice(1);i.prototype[a]=function(c,u){const f=[];return this[s](c,(d,m)=>{u(d,m)&&f.push(d)}),f};const l="reduce"+t[0].toUpperCase()+t.slice(1);i.prototype[l]=function(c,u,f){if(arguments.length<3)throw new be(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let d=f;return this[s](c,(m,g)=>{d=u(d,m,g)}),d}}function jb(i,e){const{name:t,type:n,direction:r}=e,s=t[0].toUpperCase()+t.slice(1,-1),o="find"+s;i.prototype[o]=function(c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const f=this._nodes.get(c);if(typeof f>"u")throw new ae(`Graph.${o}: could not find the "${c}" node in the graph.`);return Ra(!0,n==="mixed"?this.type:n,r,f,u)};const a="some"+s;i.prototype[a]=function(c,u){return!!this[o](c,u)};const l="every"+s;i.prototype[l]=function(c,u){return!this[o](c,(d,m)=>!u(d,m))}}function qb(i,e){const{name:t,type:n,direction:r}=e,s=t.slice(0,-1)+"Entries";i.prototype[s]=function(o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Jt.empty();o=""+o;const a=this._nodes.get(o);if(typeof a>"u")throw new ae(`Graph.${s}: could not find the "${o}" node in the graph.`);return Vb(n==="mixed"?this.type:n,r,a)}}function Xb(i){Gb.forEach(e=>{Hb(i,e),Wb(i,e),jb(i,e),qb(i,e)})}function Ms(i,e,t,n,r){const s=n._nodes.values(),o=n.type;let a,l,c,u,f,d,m;for(;a=s.next(),a.done!==!0;){let g=!1;if(l=a.value,o!=="undirected"){u=l.out;for(c in u){f=u[c];do{if(d=f.target,g=!0,m=r(l.key,d.key,l.attributes,d.attributes,f.key,f.attributes,f.undirected),i&&m)return f;f=f.next}while(f)}}if(o!=="directed"){u=l.undirected;for(c in u)if(!(e&&l.key>c)){f=u[c];do{if(d=f.target,d.key!==c&&(d=f.source),g=!0,m=r(l.key,d.key,l.attributes,d.attributes,f.key,f.attributes,f.undirected),i&&m)return f;f=f.next}while(f)}}if(t&&!g&&(m=r(l.key,null,l.attributes,null,null,null,null),i&&m))return null}}function Yb(i,e){const t={key:i};return Sf(e.attributes)||(t.attributes=Dt({},e.attributes)),t}function Zb(i,e){const t={key:i,source:e.source.key,target:e.target.key};return Sf(e.attributes)||(t.attributes=Dt({},e.attributes)),e.undirected&&(t.undirected=!0),t}function Kb(i){if(!kt(i))throw new be('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in i))throw new be("Graph.import: serialized node is missing its key.");if("attributes"in i&&(!kt(i.attributes)||i.attributes===null))throw new be("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Jb(i){if(!kt(i))throw new be('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in i))throw new be("Graph.import: serialized edge is missing its source.");if(!("target"in i))throw new be("Graph.import: serialized edge is missing its target.");if("attributes"in i&&(!kt(i.attributes)||i.attributes===null))throw new be("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in i&&typeof i.undirected!="boolean")throw new be("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const Qb=eb(),$b=new Set(["directed","undirected","mixed"]),Pc=new Set(["domain","_events","_eventsCount","_maxListeners"]),ew=[{name:i=>`${i}Edge`,generateKey:!0},{name:i=>`${i}DirectedEdge`,generateKey:!0,type:"directed"},{name:i=>`${i}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:i=>`${i}EdgeWithKey`},{name:i=>`${i}DirectedEdgeWithKey`,type:"directed"},{name:i=>`${i}UndirectedEdgeWithKey`,type:"undirected"}],tw={allowSelfLoops:!0,multi:!1,type:"mixed"};function nw(i,e,t){if(t&&!kt(t))throw new be(`Graph.addNode: invalid attributes. Expecting an object but got "${t}"`);if(e=""+e,t=t||{},i._nodes.has(e))throw new De(`Graph.addNode: the "${e}" node already exist in the graph.`);const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function Rc(i,e,t){const n=new i.NodeDataClass(e,t);return i._nodes.set(e,n),i.emit("nodeAdded",{key:e,attributes:t}),n}function Rf(i,e,t,n,r,s,o,a){if(!n&&i.type==="undirected")throw new De(`Graph.${e}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new De(`Graph.${e}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(a&&!kt(a))throw new be(`Graph.${e}: invalid attributes. Expecting an object but got "${a}"`);if(s=""+s,o=""+o,a=a||{},!i.allowSelfLoops&&s===o)throw new De(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const l=i._nodes.get(s),c=i._nodes.get(o);if(!l)throw new ae(`Graph.${e}: source node "${s}" not found.`);if(!c)throw new ae(`Graph.${e}: target node "${o}" not found.`);const u={key:null,undirected:n,source:s,target:o,attributes:a};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new De(`Graph.${e}: the "${r}" edge already exists in the graph.`);if(!i.multi&&(n?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new De(`Graph.${e}: an edge linking "${s}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const f=new yr(n,r,l,c,a);i._edges.set(r,f);const d=s===o;return n?(l.undirectedDegree++,c.undirectedDegree++,d&&i._undirectedSelfLoopCount++):(l.outDegree++,c.inDegree++,d&&i._directedSelfLoopCount++),i.multi?f.attachMulti():f.attach(),n?i._undirectedSize++:i._directedSize++,u.key=r,i.emit("edgeAdded",u),r}function iw(i,e,t,n,r,s,o,a,l){if(!n&&i.type==="undirected")throw new De(`Graph.${e}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new De(`Graph.${e}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(a){if(l){if(typeof a!="function")throw new be(`Graph.${e}: invalid updater function. Expecting a function but got "${a}"`)}else if(!kt(a))throw new be(`Graph.${e}: invalid attributes. Expecting an object but got "${a}"`)}s=""+s,o=""+o;let c;if(l&&(c=a,a=void 0),!i.allowSelfLoops&&s===o)throw new De(`Graph.${e}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=i._nodes.get(s),f=i._nodes.get(o),d,m;if(!t&&(d=i._edges.get(r),d)){if((d.source.key!==s||d.target.key!==o)&&(!n||d.source.key!==o||d.target.key!==s))throw new De(`Graph.${e}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${o}" target vs. ("${d.source.key}", "${d.target.key}").`);m=d}if(!m&&!i.multi&&u&&(m=n?u.undirected[o]:u.out[o]),m){const b=[m.key,!1,!1,!1];if(l?!c:!a)return b;if(l){const x=m.attributes;m.attributes=c(x),i.emit("edgeAttributesUpdated",{type:"replace",key:m.key,attributes:m.attributes})}else Dt(m.attributes,a),i.emit("edgeAttributesUpdated",{type:"merge",key:m.key,attributes:m.attributes,data:a});return b}a=a||{},l&&c&&(a=c(a));const g={key:null,undirected:n,source:s,target:o,attributes:a};if(t)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new De(`Graph.${e}: the "${r}" edge already exists in the graph.`);let h=!1,p=!1;u||(u=Rc(i,s,{}),h=!0,s===o&&(f=u,p=!0)),f||(f=Rc(i,o,{}),p=!0),d=new yr(n,r,u,f,a),i._edges.set(r,d);const _=s===o;return n?(u.undirectedDegree++,f.undirectedDegree++,_&&i._undirectedSelfLoopCount++):(u.outDegree++,f.inDegree++,_&&i._directedSelfLoopCount++),i.multi?d.attachMulti():d.attach(),n?i._undirectedSize++:i._directedSize++,g.key=r,i.emit("edgeAdded",g),[r,!0,h,p]}function nr(i,e){i._edges.delete(e.key);const{source:t,target:n,attributes:r}=e,s=e.undirected,o=t===n;s?(t.undirectedDegree--,n.undirectedDegree--,o&&i._undirectedSelfLoopCount--):(t.outDegree--,n.inDegree--,o&&i._directedSelfLoopCount--),i.multi?e.detachMulti():e.detach(),s?i._undirectedSize--:i._directedSize--,i.emit("edgeDropped",{key:e.key,attributes:r,source:t.key,target:n.key,undirected:s})}class ft extends Ta.exports.EventEmitter{constructor(e){if(super(),e=Dt({},tw,e),typeof e.multi!="boolean")throw new be(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${e.multi}".`);if(!$b.has(e.type))throw new be(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${e.type}".`);if(typeof e.allowSelfLoops!="boolean")throw new be(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${e.allowSelfLoops}".`);const t=e.type==="mixed"?Ef:e.type==="directed"?Af:Tf;un(this,"NodeDataClass",t);const n="geid_"+Qb()+"_";let r=0;const s=()=>{let o;do o=n+r++;while(this._edges.has(o));return o};un(this,"_attributes",{}),un(this,"_nodes",new Map),un(this,"_edges",new Map),un(this,"_directedSize",0),un(this,"_undirectedSize",0),un(this,"_directedSelfLoopCount",0),un(this,"_undirectedSelfLoopCount",0),un(this,"_edgeKeyGenerator",s),un(this,"_options",e),Pc.forEach(o=>un(this,o,this[o])),Mn(this,"order",()=>this._nodes.size),Mn(this,"size",()=>this._edges.size),Mn(this,"directedSize",()=>this._directedSize),Mn(this,"undirectedSize",()=>this._undirectedSize),Mn(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Mn(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Mn(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Mn(this,"multi",this._options.multi),Mn(this,"type",this._options.type),Mn(this,"allowSelfLoops",this._options.allowSelfLoops),Mn(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(e){return this._nodes.has(""+e)}hasDirectedEdge(e,t){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&!r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)return!1;const r=n.out[t];return r?this.multi?!!r.size:!0:!1}throw new be(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(e,t){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+e,r=this._edges.get(n);return!!r&&r.undirected}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)return!1;const r=n.undirected[t];return r?this.multi?!!r.size:!0:!1}throw new be(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(e,t){if(arguments.length===1){const n=""+e;return this._edges.has(n)}else if(arguments.length===2){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)return!1;let r=typeof n.out<"u"&&n.out[t];return r||(r=typeof n.undirected<"u"&&n.undirected[t]),r?this.multi?!!r.size:!0:!1}throw new be(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(e,t){if(this.type==="undirected")return;if(e=""+e,t=""+t,this.multi)throw new De("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(e);if(!n)throw new ae(`Graph.directedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new ae(`Graph.directedEdge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||void 0;if(r)return r.key}undirectedEdge(e,t){if(this.type==="directed")return;if(e=""+e,t=""+t,this.multi)throw new De("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(e);if(!n)throw new ae(`Graph.undirectedEdge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new ae(`Graph.undirectedEdge: could not find the "${t}" target node in the graph.`);const r=n.undirected&&n.undirected[t]||void 0;if(r)return r.key}edge(e,t){if(this.multi)throw new De("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.edge: could not find the "${e}" source node in the graph.`);if(!this._nodes.has(t))throw new ae(`Graph.edge: could not find the "${t}" target node in the graph.`);const r=n.out&&n.out[t]||n.undirected&&n.undirected[t]||void 0;if(r)return r.key}areDirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areDirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in||t in n.out}areOutNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areOutNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.out}areInNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areInNeighbors: could not find the "${e}" node in the graph.`);return this.type==="undirected"?!1:t in n.in}areUndirectedNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areUndirectedNeighbors: could not find the "${e}" node in the graph.`);return this.type==="directed"?!1:t in n.undirected}areNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&(t in n.in||t in n.out)||this.type!=="directed"&&t in n.undirected}areInboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areInboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.in||this.type!=="directed"&&t in n.undirected}areOutboundNeighbors(e,t){e=""+e,t=""+t;const n=this._nodes.get(e);if(!n)throw new ae(`Graph.areOutboundNeighbors: could not find the "${e}" node in the graph.`);return this.type!=="undirected"&&t in n.out||this.type!=="directed"&&t in n.undirected}inDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.inDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree}outDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.outDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.outDegree}directedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.directedDegree: could not find the "${e}" node in the graph.`);return this.type==="undirected"?0:t.inDegree+t.outDegree}undirectedDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.undirectedDegree: could not find the "${e}" node in the graph.`);return this.type==="directed"?0:t.undirectedDegree}inboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.inboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree),n}outboundDegree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.outboundDegree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.outDegree),n}degree(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.degree: could not find the "${e}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=t.undirectedDegree),this.type!=="undirected"&&(n+=t.inDegree+t.outDegree),n}inDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.inDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="undirected")return 0;const n=t.in[e],r=n?this.multi?n.size:1:0;return t.inDegree-r}outDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.outDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="undirected")return 0;const n=t.out[e],r=n?this.multi?n.size:1:0;return t.outDegree-r}directedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.directedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="undirected")return 0;const n=t.out[e],r=n?this.multi?n.size:1:0;return t.inDegree+t.outDegree-r*2}undirectedDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);if(this.type==="directed")return 0;const n=t.undirected[e],r=n?this.multi?n.size:1:0;return t.undirectedDegree-r*2}inboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n,r=0,s=0;return this.type!=="directed"&&(r+=t.undirectedDegree,n=t.undirected[e],s+=(n?this.multi?n.size:1:0)*2),this.type!=="undirected"&&(r+=t.inDegree,n=t.out[e],s+=n?this.multi?n.size:1:0),r-s}outboundDegreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n,r=0,s=0;return this.type!=="directed"&&(r+=t.undirectedDegree,n=t.undirected[e],s+=(n?this.multi?n.size:1:0)*2),this.type!=="undirected"&&(r+=t.outDegree,n=t.in[e],s+=n?this.multi?n.size:1:0),r-s}degreeWithoutSelfLoops(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.degreeWithoutSelfLoops: could not find the "${e}" node in the graph.`);let n,r=0,s=0;return this.type!=="directed"&&(r+=t.undirectedDegree,n=t.undirected[e],s+=(n?this.multi?n.size:1:0)*2),this.type!=="undirected"&&(r+=t.inDegree+t.outDegree,n=t.out[e],s+=(n?this.multi?n.size:1:0)*2),r-s}source(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ae(`Graph.source: could not find the "${e}" edge in the graph.`);return t.source.key}target(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ae(`Graph.target: could not find the "${e}" edge in the graph.`);return t.target.key}extremities(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ae(`Graph.extremities: could not find the "${e}" edge in the graph.`);return[t.source.key,t.target.key]}opposite(e,t){e=""+e,t=""+t;const n=this._edges.get(t);if(!n)throw new ae(`Graph.opposite: could not find the "${t}" edge in the graph.`);const r=n.source.key,s=n.target.key;if(e===r)return s;if(e===s)return r;throw new ae(`Graph.opposite: the "${e}" node is not attached to the "${t}" edge (${r}, ${s}).`)}hasExtremity(e,t){e=""+e,t=""+t;const n=this._edges.get(e);if(!n)throw new ae(`Graph.hasExtremity: could not find the "${e}" edge in the graph.`);return n.source.key===t||n.target.key===t}isUndirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ae(`Graph.isUndirected: could not find the "${e}" edge in the graph.`);return t.undirected}isDirected(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ae(`Graph.isDirected: could not find the "${e}" edge in the graph.`);return!t.undirected}isSelfLoop(e){e=""+e;const t=this._edges.get(e);if(!t)throw new ae(`Graph.isSelfLoop: could not find the "${e}" edge in the graph.`);return t.source===t.target}addNode(e,t){return nw(this,e,t).key}mergeNode(e,t){if(t&&!kt(t))throw new be(`Graph.mergeNode: invalid attributes. Expecting an object but got "${t}"`);e=""+e,t=t||{};let n=this._nodes.get(e);return n?(t&&(Dt(n.attributes,t),this.emit("nodeAttributesUpdated",{type:"merge",key:e,attributes:n.attributes,data:t})),[e,!1]):(n=new this.NodeDataClass(e,t),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:t}),[e,!0])}updateNode(e,t){if(t&&typeof t!="function")throw new be(`Graph.updateNode: invalid updater function. Expecting a function but got "${t}"`);e=""+e;let n=this._nodes.get(e);if(n){if(t){const s=n.attributes;n.attributes=t(s),this.emit("nodeAttributesUpdated",{type:"replace",key:e,attributes:n.attributes})}return[e,!1]}const r=t?t({}):{};return n=new this.NodeDataClass(e,r),this._nodes.set(e,n),this.emit("nodeAdded",{key:e,attributes:r}),[e,!0]}dropNode(e){e=""+e;const t=this._nodes.get(e);if(!t)throw new ae(`Graph.dropNode: could not find the "${e}" node in the graph.`);let n;if(this.type!=="undirected"){for(const r in t.out){n=t.out[r];do nr(this,n),n=n.next;while(n)}for(const r in t.in){n=t.in[r];do nr(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const r in t.undirected){n=t.undirected[r];do nr(this,n),n=n.next;while(n)}this._nodes.delete(e),this.emit("nodeDropped",{key:e,attributes:t.attributes})}dropEdge(e){let t;if(arguments.length>1){const n=""+arguments[0],r=""+arguments[1];if(t=gn(this,n,r,this.type),!t)throw new ae(`Graph.dropEdge: could not find the "${n}" -> "${r}" edge in the graph.`)}else if(e=""+e,t=this._edges.get(e),!t)throw new ae(`Graph.dropEdge: could not find the "${e}" edge in the graph.`);return nr(this,t),this}dropDirectedEdge(e,t){if(arguments.length<2)throw new De("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new De("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");e=""+e,t=""+t;const n=gn(this,e,t,"directed");if(!n)throw new ae(`Graph.dropDirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return nr(this,n),this}dropUndirectedEdge(e,t){if(arguments.length<2)throw new De("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new De("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=gn(this,e,t,"undirected");if(!n)throw new ae(`Graph.dropUndirectedEdge: could not find a "${e}" -> "${t}" edge in the graph.`);return nr(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const e=this._nodes.values();let t;for(;t=e.next(),t.done!==!0;)t.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(e){return this._attributes[e]}getAttributes(){return this._attributes}hasAttribute(e){return this._attributes.hasOwnProperty(e)}setAttribute(e,t){return this._attributes[e]=t,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}updateAttribute(e,t){if(typeof t!="function")throw new be("Graph.updateAttribute: updater should be a function.");const n=this._attributes[e];return this._attributes[e]=t(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:e}),this}removeAttribute(e){return delete this._attributes[e],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:e}),this}replaceAttributes(e){if(!kt(e))throw new be("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=e,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(e){if(!kt(e))throw new be("Graph.mergeAttributes: provided attributes are not a plain object.");return Dt(this._attributes,e),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:e}),this}updateAttributes(e){if(typeof e!="function")throw new be("Graph.updateAttributes: provided updater is not a function.");return this._attributes=e(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(e,t){if(typeof e!="function")throw new be("Graph.updateEachNodeAttributes: expecting an updater function.");if(t&&!Dc(t))throw new be("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,s.attributes=e(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:t||null})}updateEachEdgeAttributes(e,t){if(typeof e!="function")throw new be("Graph.updateEachEdgeAttributes: expecting an updater function.");if(t&&!Dc(t))throw new be("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let r,s,o,a;for(;r=n.next(),r.done!==!0;)s=r.value,o=s.source,a=s.target,s.attributes=e(s.key,s.attributes,o.key,a.key,o.attributes,a.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:t||null})}forEachAdjacencyEntry(e){if(typeof e!="function")throw new be("Graph.forEachAdjacencyEntry: expecting a callback.");Ms(!1,!1,!1,this,e)}forEachAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new be("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Ms(!1,!1,!0,this,e)}forEachAssymetricAdjacencyEntry(e){if(typeof e!="function")throw new be("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Ms(!1,!0,!1,this,e)}forEachAssymetricAdjacencyEntryWithOrphans(e){if(typeof e!="function")throw new be("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Ms(!1,!0,!0,this,e)}nodes(){return typeof Array.from=="function"?Array.from(this._nodes.keys()):Mf(this._nodes.keys(),this._nodes.size)}forEachNode(e){if(typeof e!="function")throw new be("Graph.forEachNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)}findNode(e){if(typeof e!="function")throw new be("Graph.findNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return r.key}mapNodes(e){if(typeof e!="function")throw new be("Graph.mapNode: expecting a callback.");const t=this._nodes.values();let n,r;const s=new Array(this.order);let o=0;for(;n=t.next(),n.done!==!0;)r=n.value,s[o++]=e(r.key,r.attributes);return s}someNode(e){if(typeof e!="function")throw new be("Graph.someNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,e(r.key,r.attributes))return!0;return!1}everyNode(e){if(typeof e!="function")throw new be("Graph.everyNode: expecting a callback.");const t=this._nodes.values();let n,r;for(;n=t.next(),n.done!==!0;)if(r=n.value,!e(r.key,r.attributes))return!1;return!0}filterNodes(e){if(typeof e!="function")throw new be("Graph.filterNodes: expecting a callback.");const t=this._nodes.values();let n,r;const s=[];for(;n=t.next(),n.done!==!0;)r=n.value,e(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(e,t){if(typeof e!="function")throw new be("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new be("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=t;const r=this._nodes.values();let s,o;for(;s=r.next(),s.done!==!0;)o=s.value,n=e(n,o.key,o.attributes);return n}nodeEntries(){const e=this._nodes.values();return new Jt(()=>{const t=e.next();if(t.done)return t;const n=t.value;return{value:{node:n.key,attributes:n.attributes},done:!1}})}export(){const e=new Array(this._nodes.size);let t=0;this._nodes.forEach((r,s)=>{e[t++]=Yb(s,r)});const n=new Array(this._edges.size);return t=0,this._edges.forEach((r,s)=>{n[t++]=Zb(s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:e,edges:n}}import(e,t=!1){if($v(e))return e.forEachNode((l,c)=>{t?this.mergeNode(l,c):this.addNode(l,c)}),e.forEachEdge((l,c,u,f,d,m,g)=>{t?g?this.mergeUndirectedEdgeWithKey(l,u,f,c):this.mergeDirectedEdgeWithKey(l,u,f,c):g?this.addUndirectedEdgeWithKey(l,u,f,c):this.addDirectedEdgeWithKey(l,u,f,c)}),this;if(!kt(e))throw new be("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(e.attributes){if(!kt(e.attributes))throw new be("Graph.import: invalid attributes. Expecting a plain object.");t?this.mergeAttributes(e.attributes):this.replaceAttributes(e.attributes)}let n,r,s,o,a;if(e.nodes){if(s=e.nodes,!Array.isArray(s))throw new be("Graph.import: invalid nodes. Expecting an array.");for(n=0,r=s.length;n<r;n++){o=s[n],Kb(o);const{key:l,attributes:c}=o;t?this.mergeNode(l,c):this.addNode(l,c)}}if(e.edges){if(s=e.edges,!Array.isArray(s))throw new be("Graph.import: invalid edges. Expecting an array.");for(n=0,r=s.length;n<r;n++){a=s[n],Jb(a);const{source:l,target:c,attributes:u,undirected:f=!1}=a;let d;"key"in a?(d=t?f?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:f?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,d.call(this,a.key,l,c,u)):(d=t?f?this.mergeUndirectedEdge:this.mergeDirectedEdge:f?this.addUndirectedEdge:this.addDirectedEdge,d.call(this,l,c,u))}}return this}nullCopy(e){const t=new ft(Dt({},this._options,e));return t.replaceAttributes(Dt({},this.getAttributes())),t}emptyCopy(e){const t=this.nullCopy(e);return this._nodes.forEach((n,r)=>{const s=Dt({},n.attributes);n=new t.NodeDataClass(r,s),t._nodes.set(r,n)}),t}copy(e){if(e=e||{},typeof e.type=="string"&&e.type!==this.type&&e.type!=="mixed")throw new De(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${e.type}" because this would mean losing information about the current graph.`);if(typeof e.multi=="boolean"&&e.multi!==this.multi&&e.multi!==!0)throw new De("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof e.allowSelfLoops=="boolean"&&e.allowSelfLoops!==this.allowSelfLoops&&e.allowSelfLoops!==!0)throw new De("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const t=this.emptyCopy(e),n=this._edges.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,Rf(t,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,Dt({},s.attributes));return t}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const e={};this._nodes.forEach((s,o)=>{e[o]=s.attributes});const t={},n={};this._edges.forEach((s,o)=>{const a=s.undirected?"--":"->";let l="",c=s.source.key,u=s.target.key,f;s.undirected&&c>u&&(f=c,c=u,u=f);const d=`(${c})${a}(${u})`;o.startsWith("geid_")?this.multi&&(typeof n[d]>"u"?n[d]=0:n[d]++,l+=`${n[d]}. `):l+=`[${o}]: `,l+=d,t[l]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!Pc.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=e,r.edges=t,un(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(ft.prototype[Symbol.for("nodejs.util.inspect.custom")]=ft.prototype.inspect);ew.forEach(i=>{["add","merge","update"].forEach(e=>{const t=i.name(e),n=e==="add"?Rf:iw;i.generateKey?ft.prototype[t]=function(r,s,o){return n(this,t,!0,(i.type||this.type)==="undirected",null,r,s,o,e==="update")}:ft.prototype[t]=function(r,s,o,a){return n(this,t,!1,(i.type||this.type)==="undirected",r,s,o,a,e==="update")}})});db(ft);Mb(ft);Ub(ft);Xb(ft);class If extends ft{constructor(e){const t=Dt({type:"directed"},e);if("multi"in t&&t.multi!==!1)throw new be("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="directed")throw new be('DirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Of extends ft{constructor(e){const t=Dt({type:"undirected"},e);if("multi"in t&&t.multi!==!1)throw new be("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(t.type!=="undirected")throw new be('UndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Nf extends ft{constructor(e){const t=Dt({multi:!0},e);if("multi"in t&&t.multi!==!0)throw new be("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(t)}}class Ia extends ft{constructor(e){const t=Dt({type:"directed",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new be("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="directed")throw new be('MultiDirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}class Ff extends ft{constructor(e){const t=Dt({type:"undirected",multi:!0},e);if("multi"in t&&t.multi!==!0)throw new be("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(t.type!=="undirected")throw new be('MultiUndirectedGraph.from: inconsistent "'+t.type+'" type in given options!');super(t)}}function xr(i){i.from=function(e,t){const n=Dt({},e.options,t),r=new i(n);return r.import(e),r}}xr(ft);xr(If);xr(Of);xr(Nf);xr(Ia);xr(Ff);ft.Graph=ft;ft.DirectedGraph=If;ft.UndirectedGraph=Of;ft.MultiGraph=Nf;ft.MultiDirectedGraph=Ia;ft.MultiUndirectedGraph=Ff;ft.InvalidArgumentsGraphError=be;ft.NotFoundGraphError=ae;ft.UsageGraphError=De;function Ic(i){let e=new Ia;return e.import({attributes:{name:"My Graph"},options:{allowSelfLoops:!0,multi:!0,type:"directed"},nodes:i.nodes.map(t=>({key:t.id,attributes:{...t}})),edges:i.links.map(t=>{let n=typeof t.source=="string"?t.source:t.source.id,r=typeof t.target=="string"?t.target:t.target.id;return{key:t.key,source:n,target:r,undirected:!1,attributes:{...t}}})}),e}function Oc(i,e){i.updateEachNodeAttributes((r,s)=>{var o;return{...s,x:s.x*e,y:s.y*e,z:s.z*e,maxAbsFC:(o=s==null?void 0:s.maxAbsFC)!=null?o:0}});const t=new Intl.Collator("en",{numeric:!0,sensitivity:"base"});let n=[];return i.forEachNode(r=>{i.forEachNeighbor(r,s=>{if(n.includes(s))return;let o=0;i.someEdge(r,s,a=>{i.setEdgeAttribute(a,"multiNumber",o),o++}),i.someEdge(r,s,a=>{i.setEdgeAttribute(a,"multiTotal",o)})}),n.push(r)}),i.updateEachEdgeAttributes((r,s,o,a,l,c)=>{const u=t.compare(o,a),f=s.multiTotal,d=s.multiNumber;let m=0,g=0;f>1&&(m=.5,g=d/f*2*Math.PI,u===1&&(g=Math.PI-g)),u===0&&(m=.5);let h=new z(l.x,l.y,l.z),p=new z(c.x,c.y,c.z),_=h.lerp(p,.5),b=p.clone().add(h.clone().multiplyScalar(-1)),x=new Is().setFromVector3(b);const w=new z().subVectors(p,h),y=new o0(w.clone().normalize(),p),S=new z(y.rotation.x,y.rotation.y,y.rotation.z);return{curve:m,curveRotation:g,isFirstLink:d===0,cylLength:2*x.radius,cylPos:_,cylRot:S,dotForwards:p.dot(h),...s}}),i}function rw(i,e){if(e===void 0)return i.updateEachEdgeAttributes((t,n)=>(n.fc=void 0,n.err=void 0,n)),i;{let t=e.sort((r,s)=>r.site===s.site?0:r.site==="Pan-specific"?-1:1),n=Object.fromEntries(i.mapNodes(r=>[r,0]));return i.updateEachEdgeAttributes((r,s,o,a,l,c)=>{var m;let u=t.slice().find(g=>g.targetid===a),f=t.slice().find(g=>g.targetid===a&&g.site===s.substratePhosphosite);f!==void 0&&(u=f),s.fc=u==null?void 0:u.fc,s.err=u==null?void 0:u.err;let d=Math.abs((m=s==null?void 0:s.fc)!=null?m:0);return d>n[o]&&(n[o]=d),d>n[a]&&(n[a]=d),s}),i.updateEachNodeAttributes((r,s)=>({...s,maxAbsFC:n[r]})),i}}let Os=Et(!1),fa=Et(!1),Ns=Et(!1),Fs=Et(.2),da=Et(void 0),kf=Et(void 0),ha=Hs([kf,da],(i,e)=>{if(!i[0])e(void 0);else{let t=Oc(Ic(i[0]),100);t.setAttribute("hasFC",!1),e(t)}if(i[0]&&i[1]){console.log("setting FC");let t=Oc(rw(Ic(i[0]),i[1]),100);t.setAttribute("hasFC",!0),console.log(t),e(t)}});function Nc(i,e,t){const n=i.slice();return n[6]=e[t],n[8]=t,n}function Fc(i){let e,t;return e=new zv({props:{graph:i[3],nodeID:i[6],greyedOut:!1}}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,r){const s={};r&8&&(s.graph=n[3]),r&4&&(s.nodeID=n[6]),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function sw(i){let e,t,n=i[2][0],r=[];for(let o=0;o<n.length;o+=1)r[o]=Fc(Nc(i,n,o));const s=o=>ne(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=gr()},m(o,a){for(let l=0;l<r.length;l+=1)r[l].m(o,a);Te(o,e,a),t=!0},p(o,a){if(a&12){n=o[2][0];let l;for(l=0;l<n.length;l+=1){const c=Nc(o,n,l);r[l]?(r[l].p(c,a),Q(r[l],1)):(r[l]=Fc(c),r[l].c(),Q(r[l],1),r[l].m(e.parentNode,e))}for(Bt(),l=n.length;l<r.length;l+=1)s(l);Vt()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)Q(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ne(r[a]);t=!1},d(o){Vs(r,o),o&&Ae(e)}}}function ow(i){let e,t;return e=new Pv({props:{geometry:i[0],material:i[1],interactive:!0,$$slots:{default:[sw]},$$scope:{ctx:i}}}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,[r]){const s={};r&1&&(s.geometry=n[0]),r&2&&(s.material=n[1]),r&524&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function aw(i,e,t){console.log("updatin");let n=new Set,r=new Set;i.getAttribute("hasFC"),i.forEachEdge((a,l,c,u,f,d)=>{var g;if(!l.isFirstLink||c===u)return;let m=(g=l==null?void 0:l.fc)!=null?g:0;Math.abs(m)>e&&(n.add(c),n.add(u))}),r=new Set([...r].filter(a=>!n.has(a)));let s=Array(...n),o=Array(...r);return[s,o]}function lw(i,e,t){let n,r;et(i,ha,c=>t(3,r=c));let{nodeGeometry:s}=e,{nodeMaterial:o}=e,{transparentMaterial:a}=e,l=Hs([ha,Fs,Ns],(c,u)=>{u(aw(c[0],c[1],c[2]))});return et(i,l,c=>t(2,n=c)),i.$$set=c=>{"nodeGeometry"in c&&t(0,s=c.nodeGeometry),"nodeMaterial"in c&&t(1,o=c.nodeMaterial),"transparentMaterial"in c&&t(5,a=c.transparentMaterial)},[s,o,n,r,l,a]}class cw extends nt{constructor(e){super(),tt(this,e,lw,ow,Ze,{nodeGeometry:0,nodeMaterial:1,transparentMaterial:5})}}function uw(i){let e,t,n,r;return e=new ca({props:{mesh:i[1],ignorePointer:!0}}),n=new ca({props:{mesh:i[0],ignorePointer:!0}}),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment)},m(s,o){Pe(e,s,o),Te(s,t,o),Pe(n,s,o),r=!0},p(s,[o]){const a={};o&2&&(a.mesh=s[1]),e.$set(a);const l={};o&1&&(l.mesh=s[0]),n.$set(l)},i(s){r||(Q(e.$$.fragment,s),Q(n.$$.fragment,s),r=!0)},o(s){ne(e.$$.fragment,s),ne(n.$$.fragment,s),r=!1},d(s){Re(e,s),s&&Ae(t),Re(n,s)}}}function fw(i,e,t){let n;et(i,Fs,f=>t(7,n=f));let{graph:r}=e,{width:s}=e,{showSubstrates:o}=e,{geometry:a}=e,{material:l}=e,c,u;return i.$$set=f=>{"graph"in f&&t(2,r=f.graph),"width"in f&&t(3,s=f.width),"showSubstrates"in f&&t(4,o=f.showSubstrates),"geometry"in f&&t(5,a=f.geometry),"material"in f&&t(6,l=f.material)},i.$$.update=()=>{if(i.$$.dirty&255&&r){const f=new Cs({opacity:.05,transparent:!0,color:"#9DAABC"});t(0,c=new Rs(a,l,1e4)),t(1,u=new Rs(a,f,1e4));let d=r.getAttribute("hasFC"),m=new Ve,g=0,h=0;r.forEachEdge((p,_,b,x,w,y)=>{if(!_.isFirstLink||b===x||!o&&!(w.isKinase&&y.isKinase))return;const S=new z(w.x,w.y,w.z),I=new z(y.x,y.y,y.z),v=S.clone().lerp(I.clone(),.5),E=I.clone().add(S.clone().multiplyScalar(-1)),M=new Is().setFromVector3(E),R=new z().subVectors(I,S);let k=new ut,D=new gi;if(D.setFromUnitVectors(new z(0,1,0),R.normalize()),k.compose(v,D,new z(s,M.radius,s)),!d)c.setMatrixAt(g,k),c.setColorAt(g,m.setHex(10332860)),g++;else{let N=_==null?void 0:_.fc;Math.abs(N)>n?(c.setMatrixAt(g,k),c.setColorAt(g,N>0?m.set(16750157):N<0?m.set(2781850):m.setHex(10332860)),g++):(u.setMatrixAt(h,k),h++)}})}},[c,u,r,s,o,a,l,n]}class dw extends nt{constructor(e){super(),tt(this,e,fw,uw,Ze,{graph:2,width:3,showSubstrates:4,geometry:5,material:6})}}function hw(i){let e,t;return e=new av({props:{autoRotate:i[0],enableZoom:!0,enableDamping:!1}}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,r){const s={};r&1&&(s.autoRotate=n[0]),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function kc(i){let e,t,n,r;return e=new dw({props:{geometry:i[5],material:i[6],width:gw,graph:i[1],showSubstrates:i[2]}}),n=new cw({props:{nodeGeometry:i[3],nodeMaterial:i[4],transparentMaterial:i[7]}}),{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment)},m(s,o){Pe(e,s,o),Te(s,t,o),Pe(n,s,o),r=!0},p(s,o){const a={};o&2&&(a.graph=s[1]),o&4&&(a.showSubstrates=s[2]),e.$set(a)},i(s){r||(Q(e.$$.fragment,s),Q(n.$$.fragment,s),r=!0)},o(s){ne(e.$$.fragment,s),ne(n.$$.fragment,s),r=!1},d(s){Re(e,s),s&&Ae(t),Re(n,s)}}}function pw(i){let e,t,n,r,s,o,a,l;e=new nv({props:{fov:50,far:1e10,position:{x:Zo*4,y:2*Zo,z:Zo*4},lookAt:{},$$slots:{default:[hw]},$$scope:{ctx:i}}}),n=new bv({props:{color:16777215,intensity:.6,position:{x:500,y:500,z:500}}}),s=new mv({props:{color:10066329}});let c=i[1]&&kc(i);return{c(){Ie(e.$$.fragment),t=Ue(),Ie(n.$$.fragment),r=Ue(),Ie(s.$$.fragment),o=Ue(),c&&c.c(),a=gr()},m(u,f){Pe(e,u,f),Te(u,t,f),Pe(n,u,f),Te(u,r,f),Pe(s,u,f),Te(u,o,f),c&&c.m(u,f),Te(u,a,f),l=!0},p(u,[f]){const d={};f&257&&(d.$$scope={dirty:f,ctx:u}),e.$set(d),u[1]?c?(c.p(u,f),f&2&&Q(c,1)):(c=kc(u),c.c(),Q(c,1),c.m(a.parentNode,a)):c&&(Bt(),ne(c,1,1,()=>{c=null}),Vt())},i(u){l||(Q(e.$$.fragment,u),Q(n.$$.fragment,u),Q(s.$$.fragment,u),Q(c),l=!0)},o(u){ne(e.$$.fragment,u),ne(n.$$.fragment,u),ne(s.$$.fragment,u),ne(c),l=!1},d(u){Re(e,u),u&&Ae(t),Re(n,u),u&&Ae(r),Re(s,u),u&&Ae(o),c&&c.d(u),u&&Ae(a)}}}const Zo=100,mw=2,gw=.5,_w=5;function vw(i,e,t){let n,r,s;et(i,fa,f=>t(0,n=f)),et(i,ha,f=>t(1,r=f)),et(i,Ns,f=>t(2,s=f));const o=new Sa(mw,2),a=new Cs({opacity:.8,transparent:!1}),l=new Ks(1,1,1,_w,1,!1),c=new Cs({opacity:.6,transparent:!0,color:"#9DAABC"}),u=new Cs({opacity:.1,transparent:!0,color:"#00ff00"});return[n,r,s,o,a,l,c,u]}class bw extends nt{constructor(e){super(),tt(this,e,vw,pw,Ze,{})}}const ww="modulepreload",yw=function(i,e){return new URL(i,e).href},zc={},Ko=function(e,t,n){return!t||t.length===0?e():Promise.all(t.map(r=>{if(r=yw(r,n),r in zc)return;zc[r]=!0;const s=r.endsWith(".css"),o=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":ww,s||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),s)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};function xw(i){let e,t,n,r,s,o,a,l;const c=i[7].default,u=pt(c,i,i[6],null);return{c(){e=Fe("aside"),t=Fe("div"),n=Ue(),r=Fe("div"),u&&u.c(),ee(t,"class","overlay svelte-1c92i6o"),ee(r,"class",s="panel "+i[1]+" svelte-1c92i6o"),Qe(r,"size",i[2]),ee(e,"class","drawer svelte-1c92i6o"),ee(e,"style",i[3]),Qe(e,"open",i[0])},m(f,d){Te(f,e,d),Me(e,t),Me(e,n),Me(e,r),u&&u.m(r,null),o=!0,a||(l=$e(t,"click",i[4]),a=!0)},p(f,[d]){u&&u.p&&(!o||d&64)&&gt(u,c,f,f[6],o?mt(c,f[6],d,null):_t(f[6]),null),(!o||d&2&&s!==(s="panel "+f[1]+" svelte-1c92i6o"))&&ee(r,"class",s),(!o||d&6)&&Qe(r,"size",f[2]),(!o||d&8)&&ee(e,"style",f[3]),(!o||d&1)&&Qe(e,"open",f[0])},i(f){o||(Q(u,f),o=!0)},o(f){ne(u,f),o=!1},d(f){f&&Ae(e),u&&u.d(f),a=!1,l()}}}function Mw(i,e,t){let n,{$$slots:r={},$$scope:s}=e,{open:o=!1}=e,{duration:a=.2}=e,{placement:l="left"}=e,{size:c=null}=e,u=!1;const f=Fi();function d(g){if(u){const h=document.querySelector("body");h.style.overflow=g?"hidden":"auto"}}function m(){f("clickAway")}return Hr(()=>{u=!0,d(o)}),i.$$set=g=>{"open"in g&&t(0,o=g.open),"duration"in g&&t(5,a=g.duration),"placement"in g&&t(1,l=g.placement),"size"in g&&t(2,c=g.size),"$$scope"in g&&t(6,s=g.$$scope)},i.$$.update=()=>{i.$$.dirty&36&&t(3,n=`--duration: ${a}s; --size: ${c};`),i.$$.dirty&1&&d(o)},[o,l,c,n,m,a,s,r]}class Sw extends nt{constructor(e){super(),tt(this,e,Mw,xw,Ze,{open:0,duration:5,placement:1,size:2})}}function so(i){return i.split("-")[0]}function zf(i){return i.split("-")[1]}function Oa(i){return["top","bottom"].includes(so(i))?"x":"y"}function Ew(i){return i==="y"?"height":"width"}function Aw(i){return{top:0,right:0,bottom:0,left:0,...i}}function Tw(i){return typeof i!="number"?Aw(i):{top:i,right:i,bottom:i,left:i}}function Uc(i){return{...i,top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height}}async function Uf(i,e){var t;e===void 0&&(e={});const{x:n,y:r,platform:s,rects:o,elements:a,strategy:l}=i,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:d=!1,padding:m=0}=e,g=Tw(m),p=a[d?f==="floating"?"reference":"floating":f],_=Uc(await s.getClippingRect({element:(t=await(s.isElement==null?void 0:s.isElement(p)))==null||t?p:p.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),b=Uc(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:f==="floating"?{...o.floating,x:n,y:r}:o.reference,offsetParent:await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),strategy:l}):o[f]);return{top:_.top-b.top+g.top,bottom:b.bottom-_.bottom+g.bottom,left:_.left-b.left+g.left,right:b.right-_.right+g.right}}const Cw=Math.min,Lw=Math.max;function Gc(i,e,t){return Lw(i,Cw(e,t))}const Dw={left:"right",right:"left",bottom:"top",top:"bottom"};function ks(i){return i.replace(/left|right|bottom|top/g,e=>Dw[e])}function Pw(i,e,t){t===void 0&&(t=!1);const n=zf(i),r=Oa(i),s=Ew(r);let o=r==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=ks(o)),{main:o,cross:ks(o)}}const Rw={start:"end",end:"start"};function Bc(i){return i.replace(/start|end/g,e=>Rw[e])}function Iw(i){const e=ks(i);return[Bc(i),e,Bc(e)]}const Ow=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(e){var t;const{placement:n,middlewareData:r,rects:s,initialPlacement:o,platform:a,elements:l}=e,{mainAxis:c=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:d="bestFit",flipAlignment:m=!0,...g}=i,h=so(n),_=f||(h===o||!m?[ks(o)]:Iw(o)),b=[o,..._],x=await Uf(e,g),w=[];let y=((t=r.flip)==null?void 0:t.overflows)||[];if(c&&w.push(x[h]),u){const{main:E,cross:M}=Pw(n,s,await(a.isRTL==null?void 0:a.isRTL(l.floating)));w.push(x[E],x[M])}if(y=[...y,{placement:n,overflows:w}],!w.every(E=>E<=0)){var S,I;const E=((S=(I=r.flip)==null?void 0:I.index)!=null?S:0)+1,M=b[E];if(M)return{data:{index:E,overflows:y},reset:{placement:M}};let R="bottom";switch(d){case"bestFit":{var v;const k=(v=y.map(D=>[D,D.overflows.filter(N=>N>0).reduce((N,O)=>N+O,0)]).sort((D,N)=>D[1]-N[1])[0])==null?void 0:v[0].placement;k&&(R=k);break}case"initialPlacement":R=o;break}if(n!==R)return{reset:{placement:R}}}return{}}}};async function Nw(i,e){const{placement:t,platform:n,elements:r}=i,s=await(n.isRTL==null?void 0:n.isRTL(r.floating)),o=so(t),a=zf(t),l=Oa(t)==="x",c=["left","top"].includes(o)?-1:1,u=s&&l?-1:1,f=typeof e=="function"?e(i):e;let{mainAxis:d,crossAxis:m,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return a&&typeof g=="number"&&(m=a==="end"?g*-1:g),l?{x:m*u,y:d*c}:{x:d*c,y:m*u}}const Fw=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(e){const{x:t,y:n}=e,r=await Nw(e,i);return{x:t+r.x,y:n+r.y,data:r}}}};function kw(i){return i==="x"?"y":"x"}const zw=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(e){const{x:t,y:n,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:p=>{let{x:_,y:b}=p;return{x:_,y:b}}},...l}=i,c={x:t,y:n},u=await Uf(e,l),f=Oa(so(r)),d=kw(f);let m=c[f],g=c[d];if(s){const p=f==="y"?"top":"left",_=f==="y"?"bottom":"right",b=m+u[p],x=m-u[_];m=Gc(b,m,x)}if(o){const p=d==="y"?"top":"left",_=d==="y"?"bottom":"right",b=g+u[p],x=g-u[_];g=Gc(b,g,x)}const h=a.fn({...e,[f]:m,[d]:g});return{...h,data:{x:h.x-t,y:h.y-n}}}}};function Gf(i){return i.split("-")[0]}function Uw(i){return i.split("-")[1]}function Gw(i){return["top","bottom"].includes(Gf(i))?"x":"y"}function Bw(i){return i==="y"?"height":"width"}function Vc(i,e,t){let{reference:n,floating:r}=i;const s=n.x+n.width/2-r.width/2,o=n.y+n.height/2-r.height/2,a=Gw(e),l=Bw(a),c=n[l]/2-r[l]/2,u=Gf(e),f=a==="x";let d;switch(u){case"top":d={x:s,y:n.y-r.height};break;case"bottom":d={x:s,y:n.y+n.height};break;case"right":d={x:n.x+n.width,y:o};break;case"left":d={x:n.x-r.width,y:o};break;default:d={x:n.x,y:n.y}}switch(Uw(e)){case"start":d[a]-=c*(t&&f?-1:1);break;case"end":d[a]+=c*(t&&f?-1:1);break}return d}const Vw=async(i,e,t)=>{const{placement:n="bottom",strategy:r="absolute",middleware:s=[],platform:o}=t,a=await(o.isRTL==null?void 0:o.isRTL(e));let l=await o.getElementRects({reference:i,floating:e,strategy:r}),{x:c,y:u}=Vc(l,n,a),f=n,d={},m=0;for(let g=0;g<s.length;g++){const{name:h,fn:p}=s[g],{x:_,y:b,data:x,reset:w}=await p({x:c,y:u,initialPlacement:n,placement:f,strategy:r,middlewareData:d,rects:l,platform:o,elements:{reference:i,floating:e}});if(c=_!=null?_:c,u=b!=null?b:u,d={...d,[h]:{...d[h],...x}},w&&m<=50){m++,typeof w=="object"&&(w.placement&&(f=w.placement),w.rects&&(l=w.rects===!0?await o.getElementRects({reference:i,floating:e,strategy:r}):w.rects),{x:c,y:u}=Vc(l,f,a)),g=-1;continue}}return{x:c,y:u,placement:f,strategy:r,middlewareData:d}};function Hc(i){return{...i,top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height}}function Bf(i){return i&&i.document&&i.location&&i.alert&&i.setInterval}function ei(i){if(i==null)return window;if(!Bf(i)){const e=i.ownerDocument;return e&&e.defaultView||window}return i}function Yr(i){return ei(i).getComputedStyle(i)}function Jn(i){return Bf(i)?"":i?(i.nodeName||"").toLowerCase():""}function Vf(){const i=navigator.userAgentData;return i!=null&&i.brands?i.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function kn(i){return i instanceof ei(i).HTMLElement}function _i(i){return i instanceof ei(i).Element}function Hw(i){return i instanceof ei(i).Node}function Na(i){if(typeof ShadowRoot>"u")return!1;const e=ei(i).ShadowRoot;return i instanceof e||i instanceof ShadowRoot}function oo(i){const{overflow:e,overflowX:t,overflowY:n}=Yr(i);return/auto|scroll|overlay|hidden/.test(e+n+t)}function Ww(i){return["table","td","th"].includes(Jn(i))}function Hf(i){const e=/firefox/i.test(Vf()),t=Yr(i);return t.transform!=="none"||t.perspective!=="none"||t.contain==="paint"||["transform","perspective"].includes(t.willChange)||e&&t.willChange==="filter"||e&&(t.filter?t.filter!=="none":!1)}function Wf(){return!/^((?!chrome|android).)*safari/i.test(Vf())}const Wc=Math.min,Nr=Math.max,zs=Math.round;function Qn(i,e,t){var n,r,s,o;e===void 0&&(e=!1),t===void 0&&(t=!1);const a=i.getBoundingClientRect();let l=1,c=1;e&&kn(i)&&(l=i.offsetWidth>0&&zs(a.width)/i.offsetWidth||1,c=i.offsetHeight>0&&zs(a.height)/i.offsetHeight||1);const u=_i(i)?ei(i):window,f=!Wf()&&t,d=(a.left+(f&&(n=(r=u.visualViewport)==null?void 0:r.offsetLeft)!=null?n:0))/l,m=(a.top+(f&&(s=(o=u.visualViewport)==null?void 0:o.offsetTop)!=null?s:0))/c,g=a.width/l,h=a.height/c;return{width:g,height:h,top:m,right:d+g,bottom:m+h,left:d,x:d,y:m}}function vi(i){return((Hw(i)?i.ownerDocument:i.document)||window.document).documentElement}function ao(i){return _i(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function jf(i){return Qn(vi(i)).left+ao(i).scrollLeft}function jw(i){const e=Qn(i);return zs(e.width)!==i.offsetWidth||zs(e.height)!==i.offsetHeight}function qw(i,e,t){const n=kn(e),r=vi(e),s=Qn(i,n&&jw(e),t==="fixed");let o={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if(n||!n&&t!=="fixed")if((Jn(e)!=="body"||oo(r))&&(o=ao(e)),kn(e)){const l=Qn(e,!0);a.x=l.x+e.clientLeft,a.y=l.y+e.clientTop}else r&&(a.x=jf(r));return{x:s.left+o.scrollLeft-a.x,y:s.top+o.scrollTop-a.y,width:s.width,height:s.height}}function qf(i){return Jn(i)==="html"?i:i.assignedSlot||i.parentNode||(Na(i)?i.host:null)||vi(i)}function jc(i){return!kn(i)||getComputedStyle(i).position==="fixed"?null:i.offsetParent}function Xw(i){let e=qf(i);for(Na(e)&&(e=e.host);kn(e)&&!["html","body"].includes(Jn(e));){if(Hf(e))return e;e=e.parentNode}return null}function pa(i){const e=ei(i);let t=jc(i);for(;t&&Ww(t)&&getComputedStyle(t).position==="static";)t=jc(t);return t&&(Jn(t)==="html"||Jn(t)==="body"&&getComputedStyle(t).position==="static"&&!Hf(t))?e:t||Xw(i)||e}function qc(i){if(kn(i))return{width:i.offsetWidth,height:i.offsetHeight};const e=Qn(i);return{width:e.width,height:e.height}}function Yw(i){let{rect:e,offsetParent:t,strategy:n}=i;const r=kn(t),s=vi(t);if(t===s)return e;let o={scrollLeft:0,scrollTop:0};const a={x:0,y:0};if((r||!r&&n!=="fixed")&&((Jn(t)!=="body"||oo(s))&&(o=ao(t)),kn(t))){const l=Qn(t,!0);a.x=l.x+t.clientLeft,a.y=l.y+t.clientTop}return{...e,x:e.x-o.scrollLeft+a.x,y:e.y-o.scrollTop+a.y}}function Zw(i,e){const t=ei(i),n=vi(i),r=t.visualViewport;let s=n.clientWidth,o=n.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=Wf();(c||!c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}function Kw(i){var e;const t=vi(i),n=ao(i),r=(e=i.ownerDocument)==null?void 0:e.body,s=Nr(t.scrollWidth,t.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Nr(t.scrollHeight,t.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let a=-n.scrollLeft+jf(i);const l=-n.scrollTop;return Yr(r||t).direction==="rtl"&&(a+=Nr(t.clientWidth,r?r.clientWidth:0)-s),{width:s,height:o,x:a,y:l}}function Xf(i){const e=qf(i);return["html","body","#document"].includes(Jn(e))?i.ownerDocument.body:kn(e)&&oo(e)?e:Xf(e)}function Us(i,e){var t;e===void 0&&(e=[]);const n=Xf(i),r=n===((t=i.ownerDocument)==null?void 0:t.body),s=ei(n),o=r?[s].concat(s.visualViewport||[],oo(n)?n:[]):n,a=e.concat(o);return r?a:a.concat(Us(o))}function Jw(i,e){const t=e.getRootNode==null?void 0:e.getRootNode();if(i.contains(e))return!0;if(t&&Na(t)){let n=e;do{if(n&&i===n)return!0;n=n.parentNode||n.host}while(n)}return!1}function Qw(i,e){const t=Qn(i,!1,e==="fixed"),n=t.top+i.clientTop,r=t.left+i.clientLeft;return{top:n,left:r,x:r,y:n,right:r+i.clientWidth,bottom:n+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}function Xc(i,e,t){return e==="viewport"?Hc(Zw(i,t)):_i(e)?Qw(e,t):Hc(Kw(vi(i)))}function $w(i){const e=Us(i),n=["absolute","fixed"].includes(Yr(i).position)&&kn(i)?pa(i):i;return _i(n)?e.filter(r=>_i(r)&&Jw(r,n)&&Jn(r)!=="body"):[]}function ey(i){let{element:e,boundary:t,rootBoundary:n,strategy:r}=i;const o=[...t==="clippingAncestors"?$w(e):[].concat(t),n],a=o[0],l=o.reduce((c,u)=>{const f=Xc(e,u,r);return c.top=Nr(f.top,c.top),c.right=Wc(f.right,c.right),c.bottom=Wc(f.bottom,c.bottom),c.left=Nr(f.left,c.left),c},Xc(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}const ty={getClippingRect:ey,convertOffsetParentRelativeRectToViewportRelativeRect:Yw,isElement:_i,getDimensions:qc,getOffsetParent:pa,getDocumentElement:vi,getElementRects:i=>{let{reference:e,floating:t,strategy:n}=i;return{reference:qw(e,pa(t),n),floating:{...qc(t),x:0,y:0}}},getClientRects:i=>Array.from(i.getClientRects()),isRTL:i=>Yr(i).direction==="rtl"};function ny(i,e,t,n){n===void 0&&(n={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=!0,animationFrame:a=!1}=n,l=r&&!a,c=s&&!a,u=l||c?[..._i(i)?Us(i):[],...Us(e)]:[];u.forEach(h=>{l&&h.addEventListener("scroll",t,{passive:!0}),c&&h.addEventListener("resize",t)});let f=null;if(o){let h=!0;f=new ResizeObserver(()=>{h||t(),h=!1}),_i(i)&&!a&&f.observe(i),f.observe(e)}let d,m=a?Qn(i):null;a&&g();function g(){const h=Qn(i);m&&(h.x!==m.x||h.y!==m.y||h.width!==m.width||h.height!==m.height)&&t(),m=h,d=requestAnimationFrame(g)}return t(),()=>{var h;u.forEach(p=>{l&&p.removeEventListener("scroll",t),c&&p.removeEventListener("resize",t)}),(h=f)==null||h.disconnect(),f=null,a&&cancelAnimationFrame(d)}}const iy=(i,e,t)=>Vw(i,e,{platform:ty,...t});function ry(i){let e,t;const n={autoUpdate:!0};let r=i;const s=c=>({...n,...i||{},...c||{}}),o=c=>{e&&t&&(r=s(c),iy(e,t,r).then(u=>{Object.assign(t.style,{position:u.strategy,left:`${u.x}px`,top:`${u.y}px`}),r!=null&&r.onComputed&&r.onComputed(u)}))};return[c=>{e=c,o()},(c,u)=>{let f;t=c,r=s(u),setTimeout(()=>o(u),0),o(u);const d=()=>{f&&(f(),f=void 0)},m=({autoUpdate:g}=r||{})=>{if(d(),g!==!1)return ny(e,t,()=>o(r),g===!0?{}:g)};return f=m(),{update(g){o(g),f=m(g)},destroy(){d()}}},o]}function sy({loadOptions:i,filterText:e,items:t,multiple:n,value:r,itemId:s,groupBy:o,itemFilter:a,convertStringItemsToObjects:l,filterGroupedItems:c,label:u}){if(t&&i&&e.length>0)return t;if(!t)return[];t&&t.length>0&&typeof t[0]!="object"&&(t=l(t));let f=t.filter(d=>{let m=a(d[u],e,d);return m&&n&&(r==null?void 0:r.length)&&(m=!r.some(g=>g[s]===d[s])),m});return o&&(f=c(f)),f}async function oy({dispatch:i,loadOptions:e,convertStringItemsToObjects:t,filterText:n}){let r=await e(n).catch(s=>{console.warn("svelte-select loadOptions error :>> ",s),i("error",{type:"loadOptions",details:s})});if(r&&!r.cancelled)return r?(r&&r.length>0&&typeof r[0]!="object"&&(r=t(r)),i("loaded",{items:r})):r=[],{filteredItems:r,loading:!1,focused:!0,listOpen:!0}}function ay(i){let e,t;return{c(){e=Sn("svg"),t=Sn("path"),ee(t,"fill","currentColor"),ee(t,"d",`M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z`),ee(e,"width","100%"),ee(e,"height","100%"),ee(e,"viewBox","0 0 20 20"),ee(e,"focusable","false"),ee(e,"aria-hidden","true"),ee(e,"class","svelte-qbd276")},m(n,r){Te(n,e,r),Me(e,t)},p:rt,i:rt,o:rt,d(n){n&&Ae(e)}}}class ly extends nt{constructor(e){super(),tt(this,e,null,ay,Ze,{})}}function cy(i){let e,t;return{c(){e=Sn("svg"),t=Sn("path"),ee(t,"fill","currentColor"),ee(t,"d",`M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z`),ee(e,"width","100%"),ee(e,"height","100%"),ee(e,"viewBox","-2 -2 50 50"),ee(e,"focusable","false"),ee(e,"aria-hidden","true"),ee(e,"role","presentation"),ee(e,"class","svelte-whdbu1")},m(n,r){Te(n,e,r),Me(e,t)},p:rt,i:rt,o:rt,d(n){n&&Ae(e)}}}class Gs extends nt{constructor(e){super(),tt(this,e,null,cy,Ze,{})}}function uy(i){let e,t;return{c(){e=Sn("svg"),t=Sn("circle"),ee(t,"class","circle_path svelte-1p3nqvd"),ee(t,"cx","50"),ee(t,"cy","50"),ee(t,"r","20"),ee(t,"fill","none"),ee(t,"stroke","currentColor"),ee(t,"stroke-width","5"),ee(t,"stroke-miterlimit","10"),ee(e,"class","loading svelte-1p3nqvd"),ee(e,"viewBox","25 25 50 50")},m(n,r){Te(n,e,r),Me(e,t)},p:rt,i:rt,o:rt,d(n){n&&Ae(e)}}}class fy extends nt{constructor(e){super(),tt(this,e,null,uy,Ze,{})}}function Yc(i,e,t){const n=i.slice();return n[115]=e[t],n}const dy=i=>({listOpen:i[0]&64}),Zc=i=>({listOpen:i[6]}),hy=i=>({}),Kc=i=>({}),py=i=>({}),Jc=i=>({}),my=i=>({selection:i[0]&8}),Qc=i=>({selection:i[3]});function $c(i,e,t){const n=i.slice();return n[115]=e[t],n[119]=t,n}const gy=i=>({}),eu=i=>({}),_y=i=>({selection:i[0]&8}),tu=i=>({selection:i[115]}),vy=i=>({}),nu=i=>({}),by=i=>({}),iu=i=>({});function ru(i,e,t){const n=i.slice();return n[115]=e[t],n[119]=t,n}const wy=i=>({item:i[0]&4194304}),su=i=>({item:i[115],index:i[119]}),yy=i=>({filteredItems:i[0]&4194304}),ou=i=>({filteredItems:i[22]});function au(i){let e,t,n,r,s,o;const a=[Sy,My,xy],l=[];function c(u,f){return u[48].list?0:u[22].length>0?1:u[15]?-1:2}return~(t=c(i))&&(n=l[t]=a[t](i)),{c(){e=Fe("div"),n&&n.c(),ee(e,"class","svelte-select-list svelte-1gwhqva")},m(u,f){Te(u,e,f),~t&&l[t].m(e,null),i[85](e),r=!0,s||(o=[kr(i[47].call(null,e)),$e(e,"scroll",i[39]),$e(e,"pointerdown",cr(Oi(i[81])))],s=!0)},p(u,f){let d=t;t=c(u),t===d?~t&&l[t].p(u,f):(n&&(Bt(),ne(l[d],1,1,()=>{l[d]=null}),Vt()),~t?(n=l[t],n?n.p(u,f):(n=l[t]=a[t](u),n.c()),Q(n,1),n.m(e,null)):n=null)},i(u){r||(Q(n),r=!0)},o(u){ne(n),r=!1},d(u){u&&Ae(e),~t&&l[t].d(),i[85](null),s=!1,Qt(o)}}}function xy(i){let e;const t=i[77].empty,n=pt(t,i,i[76],iu),r=n||Ey();return{c(){r&&r.c()},m(s,o){r&&r.m(s,o),e=!0},p(s,o){n&&n.p&&(!e||o[2]&16384)&&gt(n,t,s,s[76],e?mt(t,s[76],o,by):_t(s[76]),iu)},i(s){e||(Q(r,s),e=!0)},o(s){ne(r,s),e=!1},d(s){r&&r.d(s)}}}function My(i){let e,t,n=i[22],r=[];for(let o=0;o<n.length;o+=1)r[o]=lu(ru(i,n,o));const s=o=>ne(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=gr()},m(o,a){for(let l=0;l<r.length;l+=1)r[l].m(o,a);Te(o,e,a),t=!0},p(o,a){if(a[0]&206572552|a[1]&7168|a[2]&16384){n=o[22];let l;for(l=0;l<n.length;l+=1){const c=ru(o,n,l);r[l]?(r[l].p(c,a),Q(r[l],1)):(r[l]=lu(c),r[l].c(),Q(r[l],1),r[l].m(e.parentNode,e))}for(Bt(),l=n.length;l<r.length;l+=1)s(l);Vt()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)Q(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ne(r[a]);t=!1},d(o){Vs(r,o),o&&Ae(e)}}}function Sy(i){let e;const t=i[77].list,n=pt(t,i,i[76],ou);return{c(){n&&n.c()},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s[0]&4194304|s[2]&16384)&&gt(n,t,r,r[76],e?mt(t,r[76],s,yy):_t(r[76]),ou)},i(r){e||(Q(n,r),e=!0)},o(r){ne(n,r),e=!1},d(r){n&&n.d(r)}}}function Ey(i){let e;return{c(){e=Fe("div"),e.textContent="No options",ee(e,"class","empty svelte-1gwhqva")},m(t,n){Te(t,e,n)},p:rt,d(t){t&&Ae(e)}}}function Ay(i){var n;let e=((n=i[115])==null?void 0:n[i[10]])+"",t;return{c(){t=sn(e)},m(r,s){Te(r,t,s)},p(r,s){var o;s[0]&4195328&&e!==(e=((o=r[115])==null?void 0:o[r[10]])+"")&&ur(t,e)},d(r){r&&Ae(t)}}}function lu(i){let e,t,n,r,s,o,a,l;const c=i[77].item,u=pt(c,i,i[76],su),f=u||Ay(i);function d(){return i[82](i[119])}function m(){return i[83](i[119])}function g(){return i[84](i[115],i[119])}return{c(){var h;e=Fe("div"),t=Fe("div"),f&&f.c(),s=Ue(),ee(t,"class","item svelte-1gwhqva"),Qe(t,"list-group-title",i[115].groupHeader),Qe(t,"active",i[43](i[115],i[3],i[11])),Qe(t,"first",Fy(i[119])),Qe(t,"hover",i[20]===i[119]),Qe(t,"group-item",i[115].groupItem),Qe(t,"not-selectable",((h=i[115])==null?void 0:h.selectable)===!1),ee(e,"class","list-item svelte-1gwhqva"),ee(e,"tabindex","-1")},m(h,p){Te(h,e,p),Me(e,t),f&&f.m(t,null),Me(e,s),o=!0,a||(l=[kr(n=i[44].call(null,t,{scroll:i[43](i[115],i[3],i[11]),listMounted:i[27]})),kr(r=i[45].call(null,t,{scroll:i[26]===i[119],listMounted:i[27]})),$e(e,"mouseover",d),$e(e,"focus",m),$e(e,"click",cr(g))],a=!0)},p(h,p){var _;i=h,u?u.p&&(!o||p[0]&4194304|p[2]&16384)&&gt(u,c,i,i[76],o?mt(c,i[76],p,wy):_t(i[76]),su):f&&f.p&&(!o||p[0]&4195328)&&f.p(i,o?p:[-1,-1,-1,-1]),n&&Fr(n.update)&&p[0]&138414088&&n.update.call(null,{scroll:i[43](i[115],i[3],i[11]),listMounted:i[27]}),r&&Fr(r.update)&&p[0]&201326592&&r.update.call(null,{scroll:i[26]===i[119],listMounted:i[27]}),(!o||p[0]&4194304)&&Qe(t,"list-group-title",i[115].groupHeader),(!o||p[0]&4196360|p[1]&4096)&&Qe(t,"active",i[43](i[115],i[3],i[11])),(!o||p[0]&1048576)&&Qe(t,"hover",i[20]===i[119]),(!o||p[0]&4194304)&&Qe(t,"group-item",i[115].groupItem),(!o||p[0]&4194304)&&Qe(t,"not-selectable",((_=i[115])==null?void 0:_.selectable)===!1)},i(h){o||(Q(f,h),o=!0)},o(h){ne(f,h),o=!1},d(h){h&&Ae(e),f&&f.d(h),a=!1,Qt(l)}}}function cu(i){let e,t,n,r,s;return{c(){e=Fe("span"),t=sn(i[29]),n=Ue(),r=Fe("span"),s=sn(i[28]),ee(e,"id","aria-selection"),ee(e,"class","svelte-1gwhqva"),ee(r,"id","aria-context"),ee(r,"class","svelte-1gwhqva")},m(o,a){Te(o,e,a),Me(e,t),Te(o,n,a),Te(o,r,a),Me(r,s)},p(o,a){a[0]&536870912&&ur(t,o[29]),a[0]&268435456&&ur(s,o[28])},d(o){o&&Ae(e),o&&Ae(n),o&&Ae(r)}}}function uu(i){let e,t,n,r;const s=[Cy,Ty],o=[];function a(l,c){return l[7]?0:1}return e=a(i),t=o[e]=s[e](i),{c(){t.c(),n=gr()},m(l,c){o[e].m(l,c),Te(l,n,c),r=!0},p(l,c){let u=e;e=a(l),e===u?o[e].p(l,c):(Bt(),ne(o[u],1,1,()=>{o[u]=null}),Vt(),t=o[e],t?t.p(l,c):(t=o[e]=s[e](l),t.c()),Q(t,1),t.m(n.parentNode,n))},i(l){r||(Q(t),r=!0)},o(l){ne(t),r=!1},d(l){o[e].d(l),l&&Ae(n)}}}function Ty(i){let e,t;const n=i[77].selection,r=pt(n,i,i[76],Qc),s=r||Ly(i);return{c(){e=Fe("div"),s&&s.c(),ee(e,"class","selected-item svelte-1gwhqva"),Qe(e,"hide-selected-item",i[33])},m(o,a){Te(o,e,a),s&&s.m(e,null),t=!0},p(o,a){r?r.p&&(!t||a[0]&8|a[2]&16384)&&gt(r,n,o,o[76],t?mt(n,o[76],a,my):_t(o[76]),Qc):s&&s.p&&(!t||a[0]&1032)&&s.p(o,t?a:[-1,-1,-1,-1]),(!t||a[1]&4)&&Qe(e,"hide-selected-item",o[33])},i(o){t||(Q(s,o),t=!0)},o(o){ne(s,o),t=!1},d(o){o&&Ae(e),s&&s.d(o)}}}function Cy(i){let e,t,n=i[3],r=[];for(let o=0;o<n.length;o+=1)r[o]=du($c(i,n,o));const s=o=>ne(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=gr()},m(o,a){for(let l=0;l<r.length;l+=1)r[l].m(o,a);Te(o,e,a),t=!0},p(o,a){if(a[0]&16779016|a[1]&8|a[2]&16384){n=o[3];let l;for(l=0;l<n.length;l+=1){const c=$c(o,n,l);r[l]?(r[l].p(c,a),Q(r[l],1)):(r[l]=du(c),r[l].c(),Q(r[l],1),r[l].m(e.parentNode,e))}for(Bt(),l=n.length;l<r.length;l+=1)s(l);Vt()}},i(o){if(!t){for(let a=0;a<n.length;a+=1)Q(r[a]);t=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)ne(r[a]);t=!1},d(o){Vs(r,o),o&&Ae(e)}}}function Ly(i){let e=i[3][i[10]]+"",t;return{c(){t=sn(e)},m(n,r){Te(n,t,r)},p(n,r){r[0]&1032&&e!==(e=n[3][n[10]]+"")&&ur(t,e)},d(n){n&&Ae(t)}}}function Dy(i){let e=i[115][i[10]]+"",t;return{c(){t=sn(e)},m(n,r){Te(n,t,r)},p(n,r){r[0]&1032&&e!==(e=n[115][n[10]]+"")&&ur(t,e)},d(n){n&&Ae(t)}}}function fu(i){let e,t,n,r;const s=i[77]["multi-clear-icon"],o=pt(s,i,i[76],eu),a=o||Py();function l(){return i[86](i[119])}return{c(){e=Fe("div"),a&&a.c(),ee(e,"class","multi-item-clear svelte-1gwhqva")},m(c,u){Te(c,e,u),a&&a.m(e,null),t=!0,n||(r=[$e(e,"pointerdown",cr(Oi(i[80]))),$e(e,"click",l)],n=!0)},p(c,u){i=c,o&&o.p&&(!t||u[2]&16384)&&gt(o,s,i,i[76],t?mt(s,i[76],u,gy):_t(i[76]),eu)},i(c){t||(Q(a,c),t=!0)},o(c){ne(a,c),t=!1},d(c){c&&Ae(e),a&&a.d(c),n=!1,Qt(r)}}}function Py(i){let e,t;return e=new Gs({}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function du(i){let e,t,n,r,s,o,a;const l=i[77].selection,c=pt(l,i,i[76],tu),u=c||Dy(i);let f=!i[9]&&!i[8]&&Gs&&fu(i);function d(){return i[87](i[119])}return{c(){e=Fe("div"),t=Fe("span"),u&&u.c(),n=Ue(),f&&f.c(),r=Ue(),ee(t,"class","multi-item-text svelte-1gwhqva"),ee(e,"class","multi-item svelte-1gwhqva"),Qe(e,"active",i[24]===i[119]),Qe(e,"disabled",i[9])},m(m,g){Te(m,e,g),Me(e,t),u&&u.m(t,null),Me(e,n),f&&f.m(e,null),Me(e,r),s=!0,o||(a=$e(e,"click",Oi(d)),o=!0)},p(m,g){i=m,c?c.p&&(!s||g[0]&8|g[2]&16384)&&gt(c,l,i,i[76],s?mt(l,i[76],g,_y):_t(i[76]),tu):u&&u.p&&(!s||g[0]&1032)&&u.p(i,s?g:[-1,-1,-1,-1]),!i[9]&&!i[8]&&Gs?f?(f.p(i,g),g[0]&768&&Q(f,1)):(f=fu(i),f.c(),Q(f,1),f.m(e,r)):f&&(Bt(),ne(f,1,1,()=>{f=null}),Vt()),(!s||g[0]&16777216)&&Qe(e,"active",i[24]===i[119]),(!s||g[0]&512)&&Qe(e,"disabled",i[9])},i(m){s||(Q(u,m),Q(f),s=!0)},o(m){ne(u,m),ne(f),s=!1},d(m){m&&Ae(e),u&&u.d(m),f&&f.d(),o=!1,a()}}}function hu(i){let e,t;const n=i[77]["loading-icon"],r=pt(n,i,i[76],Jc),s=r||Ry();return{c(){e=Fe("div"),s&&s.c(),ee(e,"class","icon loading svelte-1gwhqva"),ee(e,"aria-hidden","true")},m(o,a){Te(o,e,a),s&&s.m(e,null),t=!0},p(o,a){r&&r.p&&(!t||a[2]&16384)&&gt(r,n,o,o[76],t?mt(n,o[76],a,py):_t(o[76]),Jc)},i(o){t||(Q(s,o),t=!0)},o(o){ne(s,o),t=!1},d(o){o&&Ae(e),s&&s.d(o)}}}function Ry(i){let e,t;return e=new fy({}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function pu(i){let e,t,n,r;const s=i[77]["clear-icon"],o=pt(s,i,i[76],Kc),a=o||Iy();return{c(){e=Fe("div"),a&&a.c(),ee(e,"class","icon clear-select svelte-1gwhqva"),ee(e,"aria-hidden","true")},m(l,c){Te(l,e,c),a&&a.m(e,null),t=!0,n||(r=[$e(e,"click",cr(Oi(i[19]))),$e(e,"pointerdown",cr(Oi(i[79])))],n=!0)},p(l,c){o&&o.p&&(!t||c[2]&16384)&&gt(o,s,l,l[76],t?mt(s,l[76],c,hy):_t(l[76]),Kc)},i(l){t||(Q(a,l),t=!0)},o(l){ne(a,l),t=!1},d(l){l&&Ae(e),a&&a.d(l),n=!1,Qt(r)}}}function Iy(i){let e,t;return e=new Gs({}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function mu(i){let e,t;const n=i[77]["chevron-icon"],r=pt(n,i,i[76],Zc),s=r||Oy();return{c(){e=Fe("div"),s&&s.c(),ee(e,"class","icon chevron svelte-1gwhqva"),ee(e,"aria-hidden","true")},m(o,a){Te(o,e,a),s&&s.m(e,null),t=!0},p(o,a){r&&r.p&&(!t||a[0]&64|a[2]&16384)&&gt(r,n,o,o[76],t?mt(n,o[76],a,dy):_t(o[76]),Zc)},i(o){t||(Q(s,o),t=!0)},o(o){ne(s,o),t=!1},d(o){o&&Ae(e),s&&s.d(o)}}}function Oy(i){let e,t;return e=new ly({}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function gu(i){let e,t,n;return{c(){e=Fe("input"),ee(e,"name",t=i[16].name),ee(e,"type","hidden"),e.value=n=i[3]?i[3][i[11]]:null,ee(e,"class","svelte-1gwhqva")},m(r,s){Te(r,e,s)},p(r,s){s[0]&65536&&t!==(t=r[16].name)&&ee(e,"name",t),s[0]&2056&&n!==(n=r[3]?r[3][r[11]]:null)&&(e.value=n)},d(r){r&&Ae(e)}}}function _u(i){let e,t=i[3],n=[];for(let r=0;r<t.length;r+=1)n[r]=vu(Yc(i,t,r));return{c(){for(let r=0;r<n.length;r+=1)n[r].c();e=gr()},m(r,s){for(let o=0;o<n.length;o+=1)n[o].m(r,s);Te(r,e,s)},p(r,s){if(s[0]&67592){t=r[3];let o;for(o=0;o<t.length;o+=1){const a=Yc(r,t,o);n[o]?n[o].p(a,s):(n[o]=vu(a),n[o].c(),n[o].m(e.parentNode,e))}for(;o<n.length;o+=1)n[o].d(1);n.length=t.length}},d(r){Vs(n,r),r&&Ae(e)}}}function vu(i){let e,t,n;return{c(){e=Fe("input"),ee(e,"name",t=i[16].name),ee(e,"type","hidden"),e.value=n=i[115]?i[115][i[11]]:null,ee(e,"class","svelte-1gwhqva")},m(r,s){Te(r,e,s)},p(r,s){s[0]&65536&&t!==(t=r[16].name)&&ee(e,"name",t),s[0]&2056&&n!==(n=r[115]?r[115][r[11]]:null)&&(e.value=n)},d(r){r&&Ae(e)}}}function Ny(i){let e,t,n,r,s,o,a,l,c,u,f,d,m,g,h,p,_,b,x,w=i[6]&&au(i),y=i[2]&&cu(i);const S=i[77].prepend,I=pt(S,i,i[76],nu);let v=i[23]&&uu(i),E=[{readOnly:c=!i[13]},i[25],{placeholder:i[31]},{style:i[14]},{disabled:i[9]}],M={};for(let P=0;P<E.length;P+=1)M=Ds(M,E[P]);let R=i[5]&&hu(i),k=i[32]&&pu(i),D=i[17]&&mu(i),N=(!i[7]||i[7]&&!i[30])&&gu(i),O=i[7]&&i[30]&&_u(i);return{c(){e=Fe("div"),w&&w.c(),t=Ue(),n=Fe("span"),y&&y.c(),r=Ue(),I&&I.c(),s=Ue(),o=Fe("div"),v&&v.c(),a=Ue(),l=Fe("input"),u=Ue(),f=Fe("div"),R&&R.c(),d=Ue(),k&&k.c(),m=Ue(),D&&D.c(),g=Ue(),N&&N.c(),h=Ue(),O&&O.c(),ee(n,"aria-live","polite"),ee(n,"aria-atomic","false"),ee(n,"aria-relevant","additions text"),ee(n,"class","a11y-text svelte-1gwhqva"),ka(l,M),Qe(l,"svelte-1gwhqva",!0),ee(o,"class","value-container svelte-1gwhqva"),ee(f,"class","indicators svelte-1gwhqva"),ee(e,"class",p="svelte-select "+i[18]+" svelte-1gwhqva"),ee(e,"style",i[12]),Qe(e,"multi",i[7]),Qe(e,"disabled",i[9]),Qe(e,"focused",i[2]),Qe(e,"list-open",i[6]),Qe(e,"show-chevron",i[17])},m(P,q){Te(P,e,q),w&&w.m(e,null),Me(e,t),Me(e,n),y&&y.m(n,null),Me(e,r),I&&I.m(e,null),Me(e,s),Me(e,o),v&&v.m(o,null),Me(o,a),Me(o,l),l.autofocus&&l.focus(),i[88](l),Ps(l,i[4]),Me(e,u),Me(e,f),R&&R.m(f,null),Me(f,d),k&&k.m(f,null),Me(f,m),D&&D.m(f,null),Me(e,g),N&&N.m(e,null),Me(e,h),O&&O.m(e,null),i[90](e),_=!0,b||(x=[$e(window,"click",i[40]),$e(window,"keydown",i[35]),$e(l,"keydown",i[35]),$e(l,"blur",i[37]),$e(l,"focus",i[36]),$e(l,"input",i[89]),$e(e,"pointerdown",Oi(i[38])),$e(e,"click",cr(Oi(i[78]))),kr(i[46].call(null,e))],b=!0)},p(P,q){P[6]?w?(w.p(P,q),q[0]&64&&Q(w,1)):(w=au(P),w.c(),Q(w,1),w.m(e,t)):w&&(Bt(),ne(w,1,1,()=>{w=null}),Vt()),P[2]?y?y.p(P,q):(y=cu(P),y.c(),y.m(n,null)):y&&(y.d(1),y=null),I&&I.p&&(!_||q[2]&16384)&&gt(I,S,P,P[76],_?mt(S,P[76],q,vy):_t(P[76]),nu),P[23]?v?(v.p(P,q),q[0]&8388608&&Q(v,1)):(v=uu(P),v.c(),Q(v,1),v.m(o,a)):v&&(Bt(),ne(v,1,1,()=>{v=null}),Vt()),ka(l,M=rd(E,[(!_||q[0]&8192&&c!==(c=!P[13]))&&{readOnly:c},q[0]&33554432&&P[25],(!_||q[1]&1)&&{placeholder:P[31]},(!_||q[0]&16384)&&{style:P[14]},(!_||q[0]&512)&&{disabled:P[9]}])),q[0]&16&&l.value!==P[4]&&Ps(l,P[4]),Qe(l,"svelte-1gwhqva",!0),P[5]?R?(R.p(P,q),q[0]&32&&Q(R,1)):(R=hu(P),R.c(),Q(R,1),R.m(f,d)):R&&(Bt(),ne(R,1,1,()=>{R=null}),Vt()),P[32]?k?(k.p(P,q),q[1]&2&&Q(k,1)):(k=pu(P),k.c(),Q(k,1),k.m(f,m)):k&&(Bt(),ne(k,1,1,()=>{k=null}),Vt()),P[17]?D?(D.p(P,q),q[0]&131072&&Q(D,1)):(D=mu(P),D.c(),Q(D,1),D.m(f,null)):D&&(Bt(),ne(D,1,1,()=>{D=null}),Vt()),!P[7]||P[7]&&!P[30]?N?N.p(P,q):(N=gu(P),N.c(),N.m(e,h)):N&&(N.d(1),N=null),P[7]&&P[30]?O?O.p(P,q):(O=_u(P),O.c(),O.m(e,null)):O&&(O.d(1),O=null),(!_||q[0]&262144&&p!==(p="svelte-select "+P[18]+" svelte-1gwhqva"))&&ee(e,"class",p),(!_||q[0]&4096)&&ee(e,"style",P[12]),(!_||q[0]&262272)&&Qe(e,"multi",P[7]),(!_||q[0]&262656)&&Qe(e,"disabled",P[9]),(!_||q[0]&262148)&&Qe(e,"focused",P[2]),(!_||q[0]&262208)&&Qe(e,"list-open",P[6]),(!_||q[0]&393216)&&Qe(e,"show-chevron",P[17])},i(P){_||(Q(w),Q(I,P),Q(v),Q(R),Q(k),Q(D),_=!0)},o(P){ne(w),ne(I,P),ne(v),ne(R),ne(k),ne(D),_=!1},d(P){P&&Ae(e),w&&w.d(),y&&y.d(),I&&I.d(P),v&&v.d(),i[88](null),R&&R.d(),k&&k.d(),D&&D.d(),N&&N.d(),O&&O.d(),i[90](null),b=!1,Qt(x)}}}function bu(i){return i.map((e,t)=>({index:t,value:e,label:`${e}`}))}function Fy(i){return i===0}function ky(i){return i.groupHeader&&i.selectable||i.selectable||!i.hasOwnProperty("selectable")}function wu(i){return{update(e){e.scroll&&i.scrollIntoView({behavior:"auto",block:"nearest",inline:"start"})}}}function zy(i,e,t){let n,r,s,o,a,l,c,u,f,{$$slots:d={},$$scope:m}=e;const g=Kf(d),h=Fi();let{justValue:p=null}=e,{filter:_=sy}=e,{getItems:b=oy}=e,{id:x=null}=e,{container:w=void 0}=e,{input:y=void 0}=e,{multiple:S=!1}=e,{multiFullItemClearable:I=!1}=e,{disabled:v=!1}=e,{focused:E=!1}=e,{value:M=null}=e,{filterText:R=""}=e,{placeholder:k="Please select"}=e,{placeholderAlwaysShow:D=!1}=e,{items:N=null}=e,{label:O="label"}=e,{itemFilter:P=(F,Se)=>`${F}`.toLowerCase().includes(Se.toLowerCase())}=e,{groupBy:q=void 0}=e,{groupFilter:X=F=>F}=e,{groupHeaderSelectable:V=!1}=e,{itemId:G="value"}=e,{loadOptions:W=void 0}=e,{containerStyles:te=""}=e,{createGroupHeaderItem:oe=(F,Se)=>({value:F,label:F})}=e;const re=()=>u;let{searchable:we=!0}=e,{inputStyles:B=""}=e,{clearable:_e=!0}=e,{loading:Ee=!1}=e,{listOpen:pe=!1}=e,ye,{debounce:Xe=(F,Se=1)=>{clearTimeout(ye),ye=setTimeout(F,Se)}}=e,{debounceWait:Y=300}=e,{hideEmptyState:ue=!1}=e,{inputAttributes:He={}}=e,{listAutoWidth:vt=!0}=e,{showChevron:yt=!1}=e,{listOffset:Ot=5}=e,{class:xt=""}=e,Ce,Tt,Nt,L,A=0;function J(){if(typeof M=="string"){let F=N.find(Se=>Se[G]===M);t(3,M=F||{[G]:M,label:M})}else S&&Array.isArray(M)&&M.length>0&&t(3,M=M.map(F=>typeof F=="string"?{value:F,label:F}:F))}let se;function le(){t(25,se=Object.assign({autocapitalize:"none",autocomplete:"off",autocorrect:"off",spellcheck:!1,tabindex:0,type:"text","aria-autocomplete":"list"},He)),x&&t(25,se.id=x,se),we||t(25,se.readonly=!0,se)}function me(F){const Se=[],St={};F.forEach(zi=>{const Bn=q(zi);Se.includes(Bn)||(Se.push(Bn),St[Bn]=[],Bn&&St[Bn].push(Object.assign(oe(Bn,zi),{id:Bn,groupHeader:!0,selectable:V}))),St[Bn].push(Object.assign({groupItem:!!Bn},zi))});const Gn=[];return X(Se).forEach(zi=>{St[zi]&&Gn.push(...St[zi])}),Gn}function Ne(){if(S){JSON.stringify(M)!==JSON.stringify(Tt)&&he()&&h("change",M);return}(!Tt||JSON.stringify(M[G])!==JSON.stringify(Tt[G]))&&h("change",M)}function C(){M&&(Array.isArray(M)?t(3,M=[...M]):t(3,M=[M]))}function ie(){M&&t(3,M=null)}function ce(){R.length!==0&&(t(2,E=!0),t(6,pe=!0),W?Xe(async function(){t(5,Ee=!0);let F=await b({dispatch:h,loadOptions:W,convertStringItemsToObjects:bu,filterText:R});F?(t(5,Ee=F.loading),t(2,E=F.focused),t(6,pe=F.listOpen),t(49,N=q?me(F.filteredItems):F.filteredItems)):(t(5,Ee=!1),t(2,E=!0),t(6,pe=!0))},Y):(t(6,pe=!0),S&&t(24,Ce=void 0)))}nd(async()=>{t(73,Tt=M),t(74,Nt=R),t(75,L=S)});function ge(){return S?M?M.map(F=>F[G]):null:M&&M[G]}function he(){let F=!0;if(M){const Se=[],St=[];M.forEach(Gn=>{Se.includes(Gn[G])?F=!1:(Se.push(Gn[G]),St.push(Gn))}),F||t(3,M=St)}return F}function Oe(F){let Se=F?F[G]:M[G];return N.find(St=>St[G]===Se)}function We(F){!F||F.length===0||F.some(Se=>typeof Se!="object")||!M||(S?M.some(Se=>!Se||!Se[G]):!M[G])||(Array.isArray(M)?t(3,M=M.map(Se=>Oe(Se)||Se)):t(3,M=Oe()||M))}async function st(F){const Se=M[F];M.length===1?t(3,M=void 0):t(3,M=M.filter(St=>St!==Se)),h("clear",Se)}function U(F){if(!!E)switch(F.stopPropagation(),F.key){case"Escape":F.preventDefault(),bt();break;case"Enter":if(F.preventDefault(),pe){if(u.length===0)break;const Se=u[A];if((Se==null?void 0:Se.selectable)===!1)break;if(M&&!S&&M[G]===Se[G]){bt();break}else t(51,wi=A),T(u[A])}break;case"ArrowDown":F.preventDefault(),pe?$(1):(t(20,A=0),t(6,pe=!0),t(24,Ce=void 0));break;case"ArrowUp":F.preventDefault(),pe?$(-1):(t(6,pe=!0),t(24,Ce=void 0));break;case"Tab":if(pe&&E){if(u.length===0||M&&M[G]===u[A][G])return bt();F.preventDefault(),t(51,wi=A),T(u[A]),t(6,pe=!1)}break;case"Backspace":if(!S||R.length>0)return;if(S&&M&&M.length>0){if(st(Ce!==void 0?Ce:M.length-1),Ce===0||Ce===void 0)break;t(24,Ce=M.length>Ce?Ce-1:void 0)}break;case"ArrowLeft":if(!M||!S||R.length>0)return;Ce===void 0?t(24,Ce=M.length-1):M.length>Ce&&Ce!==0&&t(24,Ce-=1);break;case"ArrowRight":if(!M||!S||R.length>0||Ce===void 0)return;Ce===M.length-1?t(24,Ce=void 0):Ce<M.length-1&&t(24,Ce+=1);break}}function fe(F){F&&h("focus",F),y.focus(),t(2,E=!0)}function Z(F){(pe||E)&&(h("blur",F),t(6,pe=!1),t(2,E=!1),t(24,Ce=void 0),y.blur())}function xe(){v||(t(20,A=0),t(6,pe=!pe),pe&&!E&&fe())}function ve(){t(3,M=void 0),t(6,pe=!1),h("clear",M),fe()}Hr(()=>{pe&&t(2,E=!0),E&&y&&y.focus()});function Ke(F){if(F){t(4,R="");const Se=Object.assign({},F);(!Se.groupHeader||Se.selectable)&&(S?t(3,M=M?M.concat([Se]):[Se]):t(3,M=Se),t(3,M),setTimeout(()=>{t(6,pe=!1),t(24,Ce=void 0),h("select",M)}))}}function bt(){t(4,R=""),t(6,pe=!1)}let{ariaValues:dt=F=>`Option ${F}, selected.`}=e,{ariaListOpen:an=(F,Se)=>`You are currently focused on option ${F}. There are ${Se} results available.`}=e,{ariaFocused:ct=()=>"Select is focused, type to refine list, press down to open the menu."}=e;function vn(F){let Se;return F&&M.length>0?Se=M.map(St=>St[O]).join(", "):Se=M[O],dt(Se)}function qt(){if(!u||u.length===0)return"";let F=u[A];if(pe&&F){let Se=u?u.length:0;return an(F[O],Se)}else return ct()}let Ht=null,bi;function Zr(){clearTimeout(bi),bi=setTimeout(()=>{Kr=!1},100)}function lo(F){w&&!w.contains(F.target)&&!(Ht!=null&&Ht.contains(F.target))&&Z()}At(()=>{Ht==null||Ht.remove()});let{activeItemIndex:wi=0}=e,Kr=!1;function T(F){F.isCreator||Ke(F)}function j(F){Kr||t(20,A=F)}function K(F){const{item:Se,i:St}=F;if((Se==null?void 0:Se.selectable)!==!1){if(M&&!S&&M[G]===Se[G])return bt();ky(Se)&&(t(51,wi=St),t(20,A=St),T(Se))}}let H=0;function $(F){F>0&&A===u.length-1?t(20,A=0):F<0&&A===0?t(20,A=u.length-1):t(20,A=A+F),t(26,H=A)}function Le(F,Se,St){if(!S)return Se&&Se[St]===F[St]}const ze=wu,Be=wu;function Ge(){const{width:F}=w.getBoundingClientRect();t(21,Ht.style.width=vt?F+"px":"auto",Ht)}let{floatingConfig:Je={}}=e,je={strategy:"absolute",placement:"bottom-start",middleware:[Fw(Ot),Ow(),zw()]};const[Ye,ht]=ry(je);function zn(){je=Object.assign(je,Je)}function ti(F){lt.call(this,i,F)}function ni(F){lt.call(this,i,F)}function ln(F){lt.call(this,i,F)}function it(F){lt.call(this,i,F)}const ii=F=>j(F),Mt=F=>j(F),Xt=(F,Se)=>K({item:F,i:Se});function Pn(F){zt[F?"unshift":"push"](()=>{Ht=F,t(21,Ht)})}const yi=F=>st(F),Mr=F=>I?st(F):{};function Ft(F){zt[F?"unshift":"push"](()=>{y=F,t(1,y)})}function Un(){R=this.value,t(4,R),t(6,pe),t(2,E),t(1,y)}function Sr(F){zt[F?"unshift":"push"](()=>{w=F,t(0,w)})}return i.$$set=F=>{"justValue"in F&&t(50,p=F.justValue),"filter"in F&&t(52,_=F.filter),"getItems"in F&&t(53,b=F.getItems),"id"in F&&t(54,x=F.id),"container"in F&&t(0,w=F.container),"input"in F&&t(1,y=F.input),"multiple"in F&&t(7,S=F.multiple),"multiFullItemClearable"in F&&t(8,I=F.multiFullItemClearable),"disabled"in F&&t(9,v=F.disabled),"focused"in F&&t(2,E=F.focused),"value"in F&&t(3,M=F.value),"filterText"in F&&t(4,R=F.filterText),"placeholder"in F&&t(55,k=F.placeholder),"placeholderAlwaysShow"in F&&t(56,D=F.placeholderAlwaysShow),"items"in F&&t(49,N=F.items),"label"in F&&t(10,O=F.label),"itemFilter"in F&&t(57,P=F.itemFilter),"groupBy"in F&&t(58,q=F.groupBy),"groupFilter"in F&&t(59,X=F.groupFilter),"groupHeaderSelectable"in F&&t(60,V=F.groupHeaderSelectable),"itemId"in F&&t(11,G=F.itemId),"loadOptions"in F&&t(61,W=F.loadOptions),"containerStyles"in F&&t(12,te=F.containerStyles),"createGroupHeaderItem"in F&&t(62,oe=F.createGroupHeaderItem),"searchable"in F&&t(13,we=F.searchable),"inputStyles"in F&&t(14,B=F.inputStyles),"clearable"in F&&t(64,_e=F.clearable),"loading"in F&&t(5,Ee=F.loading),"listOpen"in F&&t(6,pe=F.listOpen),"debounce"in F&&t(65,Xe=F.debounce),"debounceWait"in F&&t(66,Y=F.debounceWait),"hideEmptyState"in F&&t(15,ue=F.hideEmptyState),"inputAttributes"in F&&t(16,He=F.inputAttributes),"listAutoWidth"in F&&t(67,vt=F.listAutoWidth),"showChevron"in F&&t(17,yt=F.showChevron),"listOffset"in F&&t(68,Ot=F.listOffset),"class"in F&&t(18,xt=F.class),"ariaValues"in F&&t(69,dt=F.ariaValues),"ariaListOpen"in F&&t(70,an=F.ariaListOpen),"ariaFocused"in F&&t(71,ct=F.ariaFocused),"activeItemIndex"in F&&t(51,wi=F.activeItemIndex),"floatingConfig"in F&&t(72,Je=F.floatingConfig),"$$scope"in F&&t(76,m=F.$$scope)},i.$$.update=()=>{i.$$.dirty[0]&8|i.$$.dirty[1]&262144&&M&&J(),i.$$.dirty[0]&73728&&(He||!we)&&le(),i.$$.dirty[0]&128&&S&&C(),i.$$.dirty[0]&128|i.$$.dirty[2]&8192&&L&&!S&&ie(),i.$$.dirty[0]&136&&S&&M&&M.length>1&&he(),i.$$.dirty[0]&8&&M&&Ne(),i.$$.dirty[0]&136|i.$$.dirty[2]&2048&&!M&&S&&Tt&&h("change",M),i.$$.dirty[0]&6&&!E&&y&&t(6,pe=!1),i.$$.dirty[0]&64&&(pe||t(4,R="")),i.$$.dirty[0]&16|i.$$.dirty[2]&4096&&R!==Nt&&ce(),i.$$.dirty[0]&136&&t(23,n=S?M&&M.length>0:M),i.$$.dirty[0]&8388624&&t(33,r=n&&R.length>0),i.$$.dirty[0]&8389152|i.$$.dirty[2]&4&&t(32,s=n&&_e&&!v&&!Ee),i.$$.dirty[0]&136|i.$$.dirty[1]&50331648&&t(31,o=D&&S?k:M?"":k),i.$$.dirty[0]&136&&t(30,a=S&&M&&M.length>0),i.$$.dirty[0]&136&&t(29,l=M?vn(S):""),i.$$.dirty[0]&3224|i.$$.dirty[1]&1277427712&&t(22,u=_({loadOptions:W,filterText:R,items:N,multiple:S,value:M,itemId:G,groupBy:q,label:O,itemFilter:P,convertStringItemsToObjects:bu,filterGroupedItems:me})),i.$$.dirty[0]&4194304&&u&&t(20,A=0),i.$$.dirty[0]&5242948&&t(28,c=qt()),i.$$.dirty[1]&262144&&We(N),i.$$.dirty[0]&2184&&t(50,p=ge()),i.$$.dirty[0]&136|i.$$.dirty[2]&2048&&!S&&Tt&&!M&&h("change",M),i.$$.dirty[0]&2097217&&pe&&w&&Ht&&Ge(),i.$$.dirty[2]&1024&&zn(),i.$$.dirty[0]&2097152&&t(27,f=!!Ht)},[w,y,E,M,R,Ee,pe,S,I,v,O,G,te,we,B,ue,He,yt,xt,ve,A,Ht,u,n,Ce,se,H,f,c,l,a,o,s,r,st,U,fe,Z,xe,Zr,lo,j,K,Le,ze,Be,Ye,ht,g,N,p,wi,_,b,x,k,D,P,q,X,V,W,oe,re,_e,Xe,Y,vt,Ot,dt,an,ct,Je,Tt,Nt,L,m,d,ti,ni,ln,it,ii,Mt,Xt,Pn,yi,Mr,Ft,Un,Sr]}class Uy extends nt{constructor(e){super(),tt(this,e,zy,Ny,Ze,{justValue:50,filter:52,getItems:53,id:54,container:0,input:1,multiple:7,multiFullItemClearable:8,disabled:9,focused:2,value:3,filterText:4,placeholder:55,placeholderAlwaysShow:56,items:49,label:10,itemFilter:57,groupBy:58,groupFilter:59,groupHeaderSelectable:60,itemId:11,loadOptions:61,containerStyles:12,createGroupHeaderItem:62,getFilteredItems:63,searchable:13,inputStyles:14,clearable:64,loading:5,listOpen:6,debounce:65,debounceWait:66,hideEmptyState:15,inputAttributes:16,listAutoWidth:67,showChevron:17,listOffset:68,class:18,handleClear:19,ariaValues:69,ariaListOpen:70,ariaFocused:71,activeItemIndex:51,floatingConfig:72},null,[-1,-1,-1,-1])}get getFilteredItems(){return this.$$.ctx[63]}get handleClear(){return this.$$.ctx[19]}}function Gy(i){let e,t,n,r,s,o,a;return{c(){e=Sn("svg"),t=Sn("g"),n=Sn("path"),r=Sn("g"),s=Sn("path"),ee(n,"d",`M372.939,264.641c-6.641,0-12.03,5.39-12.03,12.03v84.212H24.061v-84.212c0-6.641-5.39-12.03-12.03-12.03
        S0,270.031,0,276.671v96.242c0,6.641,5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03v-96.242
        C384.97,270.019,379.58,264.641,372.939,264.641z`),ee(t,"id","top"),ee(t,"class","svelte-192w7ff"),ee(s,"d",`M117.067,103.507l63.46-62.558v235.71c0,6.641,5.438,12.03,12.151,12.03c6.713,0,12.151-5.39,12.151-12.03V40.95
        l63.46,62.558c4.74,4.704,12.439,4.704,17.179,0c4.74-4.704,4.752-12.319,0-17.011l-84.2-82.997
        c-4.692-4.656-12.584-4.608-17.191,0L99.888,86.496c-4.752,4.704-4.74,12.319,0,17.011
        C104.628,108.211,112.327,108.211,117.067,103.507z`),ee(r,"id","bottom"),ee(r,"class",o=Yt(i[0]?"active":"")+" svelte-192w7ff"),ee(e,"class",a=Yt(i[0]?"active":"")+" svelte-192w7ff"),ee(e,"width","100%"),ee(e,"viewBox","0 0 385 385"),ee(e,"preserveAspectRatio","xMidYMid meet")},m(l,c){Te(l,e,c),Me(e,t),Me(t,n),Me(e,r),Me(r,s)},p(l,[c]){c&1&&o!==(o=Yt(l[0]?"active":"")+" svelte-192w7ff")&&ee(r,"class",o),c&1&&a!==(a=Yt(l[0]?"active":"")+" svelte-192w7ff")&&ee(e,"class",a)},i:rt,o:rt,d(l){l&&Ae(e)}}}function By(i,e,t){let{hovered:n}=e;return i.$$set=r=>{"hovered"in r&&t(0,n=r.hovered)},[n]}class Vy extends nt{constructor(e){super(),tt(this,e,By,Gy,Ze,{hovered:0})}}function Hy(i){let e=i[0][0].name+"",t;return{c(){t=sn(e)},m(n,r){Te(n,t,r)},p(n,r){r&1&&e!==(e=n[0][0].name+"")&&ur(t,e)},i:rt,o:rt,d(n){n&&Ae(t)}}}function Wy(i){let e,t,n;return e=new Vy({props:{hovered:i[1]}}),{c(){Ie(e.$$.fragment),t=sn(" Upload a file")},m(r,s){Pe(e,r,s),Te(r,t,s),n=!0},p(r,s){const o={};s&2&&(o.hovered=r[1]),e.$set(o)},i(r){n||(Q(e.$$.fragment,r),n=!0)},o(r){ne(e.$$.fragment,r),n=!1},d(r){Re(e,r),r&&Ae(t)}}}function jy(i){let e,t,n,r,s,o,a,l,c,u;const f=[Wy,Hy],d=[];function m(g,h){return g[0]===void 0?0:1}return n=m(i),r=d[n]=f[n](i),{c(){e=Fe("div"),t=Fe("button"),r.c(),o=Ue(),a=Fe("input"),ee(t,"class",s=Yt(i[1]||i[0]?"active":"")+" svelte-1w8p7ld"),ee(a,"type","file"),ee(a,"name","fileghost"),ee(a,"class","svelte-1w8p7ld"),ee(e,"class","upload-btn-wrapper svelte-1w8p7ld")},m(g,h){Te(g,e,h),Me(e,t),d[n].m(t,null),Me(e,o),Me(e,a),l=!0,c||(u=[$e(a,"mouseenter",i[2]),$e(a,"mouseleave",i[3]),$e(a,"change",i[4])],c=!0)},p(g,[h]){let p=n;n=m(g),n===p?d[n].p(g,h):(Bt(),ne(d[p],1,1,()=>{d[p]=null}),Vt(),r=d[n],r?r.p(g,h):(r=d[n]=f[n](g),r.c()),Q(r,1),r.m(t,null)),(!l||h&3&&s!==(s=Yt(g[1]||g[0]?"active":"")+" svelte-1w8p7ld"))&&ee(t,"class",s)},i(g){l||(Q(r),l=!0)},o(g){ne(r),l=!1},d(g){g&&Ae(e),d[n].d(),c=!1,Qt(u)}}}function qy(i,e,t){let n=!1;function r(){t(1,n=!0)}function s(){t(1,n=!1)}let o;function a(){o=this.files,t(0,o)}return i.$$.update=()=>{if(i.$$.dirty&1)if(o){let l=new FileReader;l.onload=function(c){let u;try{u=JSON.parse(c.target.result)}catch(f){console.error(f),t(0,o=void 0)}da.set(u)},l.readAsText(o[0])}else da.set(void 0)},[o,n,r,s,a]}class Xy extends nt{constructor(e){super(),tt(this,e,qy,jy,Ze,{})}}function Yy(i){let e,t,n,r,s,o;return{c(){e=Fe("label"),t=Fe("input"),n=Ue(),r=Fe("span"),ee(t,"type","checkbox"),ee(t,"class","svelte-1ynonck"),ee(r,"class","slider svelte-1ynonck"),ee(e,"class","switch svelte-1ynonck")},m(a,l){Te(a,e,l),Me(e,t),t.checked=i[0],Me(e,n),Me(e,r),s||(o=$e(t,"change",i[1]),s=!0)},p(a,[l]){l&1&&(t.checked=a[0])},i:rt,o:rt,d(a){a&&Ae(e),s=!1,o()}}}function Zy(i,e,t){let{checked:n=!1}=e;function r(){n=this.checked,t(0,n)}return i.$$set=s=>{"checked"in s&&t(0,n=s.checked)},[n,r]}class yu extends nt{constructor(e){super(),tt(this,e,Zy,Yy,Ze,{checked:0})}}function Ky(i){let e,t,n,r,s,o,a,l,c,u,f,d,m,g,h,p,_,b,x,w,y,S,I,v,E,M,R,k,D,N,O,P,q;function X(re){i[7](re)}let V={items:i[1]};i[0]!==void 0&&(V.value=i[0]),s=new Uy({props:V}),zt.push(()=>Cn(s,"value",X)),u=new Xy({});function G(re){i[8](re)}let W={};i[3]!==void 0&&(W.checked=i[3]),y=new yu({props:W}),zt.push(()=>Cn(y,"checked",G));function te(re){i[9](re)}let oe={};return i[4]!==void 0&&(oe.checked=i[4]),R=new yu({props:oe}),zt.push(()=>Cn(R,"checked",te)),{c(){e=Fe("div"),e.innerHTML=`<div class="fakebutton svelte-1ticox3"></div> 
		<div class="title svelte-1ticox3">Network Options</div>`,t=Ue(),n=Fe("div"),r=sn(`Network Select
		`),Ie(s.$$.fragment),a=Ue(),l=Fe("br"),c=sn(`
		Fold-Change Data
		`),Ie(u.$$.fragment),f=Ue(),d=Fe("br"),m=Ue(),g=Fe("hr"),h=Ue(),p=Fe("br"),_=Ue(),b=Fe("div"),x=sn(`Auto-rotate
			`),w=Fe("div"),Ie(y.$$.fragment),I=Ue(),v=Fe("div"),E=sn(`Show substrates
			`),M=Fe("div"),Ie(R.$$.fragment),D=Ue(),N=Fe("input"),ee(e,"class","header svelte-1ticox3"),ee(w,"class","switch svelte-1ticox3"),ee(b,"class","switchElement svelte-1ticox3"),ee(M,"class","switch svelte-1ticox3"),ee(v,"class","switchElement svelte-1ticox3"),ee(N,"type","range"),ee(N,"step","0.1"),ee(N,"min",-.1),ee(N,"max","4"),ee(n,"class","drawerbody svelte-1ticox3")},m(re,we){Te(re,e,we),Te(re,t,we),Te(re,n,we),Me(n,r),Pe(s,n,null),Me(n,a),Me(n,l),Me(n,c),Pe(u,n,null),Me(n,f),Me(n,d),Me(n,m),Me(n,g),Me(n,h),Me(n,p),Me(n,_),Me(n,b),Me(b,x),Me(b,w),Pe(y,w,null),Me(n,I),Me(n,v),Me(v,E),Me(v,M),Pe(R,M,null),Me(n,D),Me(n,N),Ps(N,i[5]),O=!0,P||(q=[$e(N,"change",i[10]),$e(N,"input",i[10])],P=!0)},p(re,we){const B={};we&2&&(B.items=re[1]),!o&&we&1&&(o=!0,B.value=re[0],Tn(()=>o=!1)),s.$set(B);const _e={};!S&&we&8&&(S=!0,_e.checked=re[3],Tn(()=>S=!1)),y.$set(_e);const Ee={};!k&&we&16&&(k=!0,Ee.checked=re[4],Tn(()=>k=!1)),R.$set(Ee),we&32&&Ps(N,re[5])},i(re){O||(Q(s.$$.fragment,re),Q(u.$$.fragment,re),Q(y.$$.fragment,re),Q(R.$$.fragment,re),O=!0)},o(re){ne(s.$$.fragment,re),ne(u.$$.fragment,re),ne(y.$$.fragment,re),ne(R.$$.fragment,re),O=!1},d(re){re&&Ae(e),re&&Ae(t),re&&Ae(n),Re(s),Re(u),Re(y),Re(R),P=!1,Qt(q)}}}function Jy(i){let e,t;return e=new Sw({props:{open:i[2],size:"30%",$$slots:{default:[Ky]},$$scope:{ctx:i}}}),e.$on("clickAway",i[11]),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},p(n,[r]){const s={};r&4&&(s.open=n[2]),r&4155&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function Qy(i,e,t){let n,r,s,o;et(i,Os,h=>t(2,n=h)),et(i,fa,h=>t(3,r=h)),et(i,Ns,h=>t(4,s=h)),et(i,Fs,h=>t(5,o=h));const a=[{value:"../assets/networkTiny.json",label:"Tiny Network",data:void 0},{value:"../assets/kinases.json",label:"All Kinases",data:void 0},{value:"../assets/network.json",label:"Full Network",data:void 0}];let l=a[0],c=!1;Hr(async()=>{t(1,a[0].data=(await Ko(()=>import("./networkTiny.0f0bd82f.js"),[],import.meta.url)).default,a),t(1,a[1].data=(await Ko(()=>import("./kinases.75aaa947.js"),[],import.meta.url)).default,a),t(1,a[2].data=(await Ko(()=>import("./network.f494f7fd.js"),[],import.meta.url)).default,a),t(6,c=!0)}),At(()=>{t(6,c=!1)});function u(h){l=h,t(0,l)}function f(h){r=h,fa.set(r)}function d(h){s=h,Ns.set(s)}function m(){o=$f(this.value),Fs.set(o)}const g=()=>nn(Os,n=!1,n);return i.$$.update=()=>{i.$$.dirty&65&&c&&l&&kf.set(l.data)},[l,a,n,r,s,o,c,u,f,d,m,g]}class $y extends nt{constructor(e){super(),tt(this,e,Qy,Jy,Ze,{})}}function e1(i){let e,t,n,r,s,o,a,l,c,u,f,d;return{c(){e=Fe("div"),t=Fe("span"),r=Ue(),s=Fe("span"),a=Ue(),l=Fe("span"),ee(t,"class",n=Yt(i[0]?"active line line-1":"line line-1")+" svelte-t8clq2"),ee(s,"class",o=Yt(i[0]?"active line line-2":"line line-2")+" svelte-t8clq2"),ee(l,"class",c=Yt(i[0]?"active line line-3":"line line-3")+" svelte-t8clq2"),ee(e,"id","menu-icon"),ee(e,"class",u=Yt(i[0]?"active":"")+" svelte-t8clq2"),ee(e,"style","--transition-time: 0.2s;")},m(m,g){Te(m,e,g),Me(e,t),Me(e,r),Me(e,s),Me(e,a),Me(e,l),f||(d=$e(e,"click",i[1]),f=!0)},p(m,[g]){g&1&&n!==(n=Yt(m[0]?"active line line-1":"line line-1")+" svelte-t8clq2")&&ee(t,"class",n),g&1&&o!==(o=Yt(m[0]?"active line line-2":"line line-2")+" svelte-t8clq2")&&ee(s,"class",o),g&1&&c!==(c=Yt(m[0]?"active line line-3":"line line-3")+" svelte-t8clq2")&&ee(l,"class",c),g&1&&u!==(u=Yt(m[0]?"active":"")+" svelte-t8clq2")&&ee(e,"class",u)},i:rt,o:rt,d(m){m&&Ae(e),f=!1,d()}}}function t1(i,e,t){let n;return et(i,Os,s=>t(0,n=s)),[n,()=>nn(Os,n=!n,n)]}class n1 extends nt{constructor(e){super(),tt(this,e,t1,e1,Ze,{})}}function i1(i){let e,t;return e=new bw({}),{c(){Ie(e.$$.fragment)},m(n,r){Pe(e,n,r),t=!0},i(n){t||(Q(e.$$.fragment,n),t=!0)},o(n){ne(e.$$.fragment,n),t=!1},d(n){Re(e,n)}}}function r1(i){let e,t,n,r,s,o,a;return t=new n1({}),r=new $y({}),o=new F0({props:{$$slots:{default:[i1]},$$scope:{ctx:i}}}),{c(){e=Fe("div"),Ie(t.$$.fragment),n=Ue(),Ie(r.$$.fragment),s=Ue(),Ie(o.$$.fragment),ee(e,"id","main"),ee(e,"class","svelte-13umlk2")},m(l,c){Te(l,e,c),Pe(t,e,null),Me(e,n),Pe(r,e,null),Me(e,s),Pe(o,e,null),a=!0},p(l,[c]){const u={};c&1&&(u.$$scope={dirty:c,ctx:l}),o.$set(u)},i(l){a||(Q(t.$$.fragment,l),Q(r.$$.fragment,l),Q(o.$$.fragment,l),a=!0)},o(l){ne(t.$$.fragment,l),ne(r.$$.fragment,l),ne(o.$$.fragment,l),a=!1},d(l){l&&Ae(e),Re(t),Re(r),Re(o)}}}class s1 extends nt{constructor(e){super(),tt(this,e,null,r1,Ze,{})}}new s1({target:document.getElementById("app")});
