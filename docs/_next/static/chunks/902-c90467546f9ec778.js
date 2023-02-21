"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{9886:function(t,e,n){n.d(e,{z:function(){return l}});var r=n(2784),o=n(7846),i={maskWrapper:()=>({opacity:.7,left:0,top:0,position:"fixed",zIndex:99999,pointerEvents:"none",color:"#000"}),svgWrapper:t=>{let{windowWidth:e,windowHeight:n,wpx:r,wpy:o}=t;return{width:e,height:n,left:Number(r)/2,top:Number(o)/2,position:"fixed"}},maskArea:t=>{let{x:e,y:n,width:r,height:o}=t;return{x:e,y:n,width:r,height:o,fill:"black",rx:0}},maskRect:t=>{let{windowWidth:e,windowHeight:n,maskID:r}=t;return{x:0,y:0,width:e,height:n,fill:"currentColor",mask:"url(#".concat(r,")")}},clickArea:t=>{let{windowWidth:e,windowHeight:n,clipID:r}=t;return{x:0,y:0,width:e,height:n,fill:"currentcolor",pointerEvents:"auto",clipPath:"url(#".concat(r,")")}},highlightedArea:t=>{let{x:e,y:n,width:r,height:o}=t;return{x:e,y:n,width:r,height:o,pointerEvents:"auto",fill:"transparent",display:"none"}}},l=t=>{let{padding:e=10,wrapperPadding:n=0,onClick:l,onClickHighlighted:u,styles:a={},sizes:s,className:f,highlightedAreaClassName:d,maskId:h,clipId:m}=t,p=h||c("mask__"),v=m||c("clip__"),g=(t,e)=>{let n=i[t](e),r=a[t];return r?r(n,e):n},[w,b]=(0,o.tQ)(e),[y,E]=(0,o.tQ)(n),{w:x,h:A}=(0,o.Jj)(),k=(0,o.Tw)((null==s?void 0:s.width)+2*w),O=(0,o.Tw)((null==s?void 0:s.height)+2*b),j=(0,o.Tw)((null==s?void 0:s.top)-b-E/2),N=(0,o.Tw)((null==s?void 0:s.left)-w-y/2),z=x-y,S=A-E,_=g("maskArea",{x:N,y:j,width:k,height:O}),R=g("highlightedArea",{x:N,y:j,width:k,height:O});return r.createElement("div",{style:g("maskWrapper",{}),onClick:l,className:f},r.createElement("svg",{width:z,height:S,xmlns:"http://www.w3.org/2000/svg",style:g("svgWrapper",{windowWidth:z,windowHeight:S,wpx:y,wpy:E})},r.createElement("defs",null,r.createElement("mask",{id:p},r.createElement("rect",{x:0,y:0,width:z,height:S,fill:"white"}),r.createElement("rect",{style:_,rx:_.rx?1:void 0})),r.createElement("clipPath",{id:v},r.createElement("polygon",{points:"0 0, 0 ".concat(S,", ").concat(N," ").concat(S,", ").concat(N," ").concat(j,", ").concat(N+k," ").concat(j,", ").concat(N+k," ").concat(j+O,", ").concat(N," ").concat(j+O,", ").concat(N," ").concat(S,", ").concat(z," ").concat(S,", ").concat(z," 0")}))),r.createElement("rect",{style:g("maskRect",{windowWidth:z,windowHeight:S,maskID:p})}),r.createElement("rect",{style:g("clickArea",{windowWidth:z,windowHeight:S,top:j,left:N,width:k,height:O,clipID:v})}),r.createElement("rect",{style:R,className:d,onClick:u,rx:R.rx?1:void 0})))};function c(t){return t+Math.random().toString(36).substring(2,16)}},9561:function(t,e,n){n.d(e,{J:function(){return v}});var r=n(2784),o=n(7846),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))a.call(e,n)&&f(t,n,e[n]);if(u)for(var n of u(e))s.call(e,n)&&f(t,n,e[n]);return t},h=(t,e)=>l(t,c(e)),m=(t,e)=>{var n={};for(var r in t)a.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&u)for(var r of u(t))0>e.indexOf(r)&&s.call(t,r)&&(n[r]=t[r]);return n},p={popover:()=>({position:"fixed",maxWidth:353,backgroundColor:"#fff",padding:"24px 30px",boxShadow:"0 0.5em 3em rgba(0, 0, 0, 0.3)",color:"inherit",zIndex:1e5,transition:"transform 0.3s",top:0,left:0})},v=t=>{var{children:e,position:n="bottom",padding:i=10,styles:l={},sizes:c,refresher:u}=t,a=m(t,["children","position","padding","styles","sizes","refresher"]);let s=(0,r.useRef)(null),f=(0,r.useRef)(""),v=(0,r.useRef)(""),g=(0,r.useRef)(""),{w:w,h:b}=(0,o.Jj)(),y=(0,o.EL)(s,u),{width:E,height:x}=y,A=null==c?void 0:c.left,k=null==c?void 0:c.top,O=null==c?void 0:c.right,j=null==c?void 0:c.bottom,N=n&&"function"==typeof n?n({width:E,height:x,windowWidth:w,windowHeight:b,top:k,left:A,right:O,bottom:j,x:c.x,y:c.y},y):n,z={left:A,right:w-O,top:k,bottom:b-j},[S,_]=(0,o.tQ)(i),R=t=>z[t]>((0,o.Fz)(t)?E+2*S:x+2*_),C=t=>{let e=(0,o.vq)(z);for(let n=0;n<e.length;n++)if(R(e[n]))return f.current=e[n],t[e[n]];return f.current="center",t.center},P=(t=>{if(Array.isArray(t)){let e=(0,o.Xs)(t[0],w),n=(0,o.At)(t[1],b);return f.current="custom",[e?w/2-E/2:t[0],n?b/2-x/2:t[1]]}let e=(0,o.Xs)(A+E,w)?O-E+S:A-S,n=e>S?e:S,r=(0,o.At)(k+x,b)?j-x+_:k-_,i=r>_?r:_;(0,o.At)(k+x,b)?v.current="bottom":v.current="top",(0,o.Xs)(A+E,w)?g.current="left":g.current="right";let l={top:[n,k-x-2*_],right:[O+2*S,i],bottom:[n,j+2*_],left:[A-E-2*S,i],center:[w/2-E/2,b/2-x/2]};return"center"===t||R(t)?(f.current=t,l[t]):C(l)})(N);return r.createElement("div",d({className:"reactour__popover",style:h(d({},((t,e)=>{let n=p[t](e),r=l[t];return r?r(n,e):n})("popover",{position:f.current,verticalAlign:v.current,horizontalAlign:g.current})),{transform:"translate(".concat(Math.round(P[0]),"px, ").concat(Math.round(P[1]),"px)")}),ref:s},a),e)}},7846:function(t,e,n){n.d(e,{At:function(){return g},Dz:function(){return c},EL:function(){return u},Fz:function(){return p},Jj:function(){return h},S1:function(){return f},Tw:function(){return d},XS:function(){return l},Xs:function(){return v},jF:function(){return m},ld:function(){return s},tQ:function(){return b},vq:function(){return w}});var r=n(2784),o=n(3771),i=n(7209),l=t=>{let{mutationObservables:e,resizeObservables:n,refresh:l}=t,[c,u]=(0,r.useState)(0),a=(0,r.useRef)(document.documentElement||document.body);function s(t){let n=Array.from(t);for(let t of n)if(e){if(!t.attributes)continue;let n=e.find(e=>t.matches(e));n&&l(!0)}}function f(t){let e=Array.from(t);for(let t of e)if(n){if(!t.attributes)continue;let e=n.find(e=>t.matches(e));e&&u(c+1)}}return(0,o.Z)(a,t=>{for(let e of t)0!==e.addedNodes.length&&(s(e.addedNodes),f(e.addedNodes)),0!==e.removedNodes.length&&(s(e.removedNodes),f(e.removedNodes))},{childList:!0,subtree:!0}),(0,r.useEffect)(()=>{if(!n)return;let t=new i.Z(()=>{l()});for(let e of n){let n=document.querySelector(e);n&&t.observe(n)}return()=>{t.disconnect()}},[n,c]),null};function c(t){let e=a;if(t){let n=t.getBoundingClientRect();e=n}return e}function u(t,e){let[n,o]=(0,r.useState)(a),i=(0,r.useCallback)(()=>{(null==t?void 0:t.current)&&o(c(null==t?void 0:t.current))},[null==t?void 0:t.current]);return(0,r.useEffect)(()=>(i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[null==t?void 0:t.current,e]),n}var a={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function s(t,e){return new Promise(n=>{if(!(t instanceof Element))throw TypeError("Argument 1 must be an Element");let r=0,o=null,i=Object.assign({behavior:"smooth"},e);t.scrollIntoView(i),requestAnimationFrame(function e(){let i=null==t?void 0:t.getBoundingClientRect().top;if(i===o){if(r++>2)return n(null)}else r=0,o=i;requestAnimationFrame(e)})})}function f(t,e){let{threshold:n=0,root:o=null,rootMargin:i="0%",freezeOnceVisible:l=!1}=e,[c,u]=(0,r.useState)(),a=(null==c?void 0:c.isIntersecting)&&l,s=t=>{let[e]=t;u(e)};return(0,r.useEffect)(()=>{let e=null==t?void 0:t.current,r=!!window.IntersectionObserver;if(!r||a||!e)return;let l=new IntersectionObserver(s,{threshold:n,root:o,rootMargin:i});return l.observe(e),()=>l.disconnect()},[t,JSON.stringify(n),o,i,a]),c}function d(t){return t<0?0:t}function h(){let t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),e=Math.max(document.documentElement.clientHeight,window.innerHeight||0);return{w:t,h:e}}function m(t){let{top:e,right:n,bottom:r,left:o,threshold:i}=t,{w:l,h:c}=h(),{thresholdX:u,thresholdY:a}="object"==typeof i&&null!==i?{thresholdX:i.x||0,thresholdY:i.y||0}:{thresholdX:i||0,thresholdY:i||0};return e<0&&r-e>c||e>=0+a&&o>=0+u&&r<=c-a&&n<=l-u}var p=t=>/(left|right)/.test(t),v=(t,e)=>t>e,g=(t,e)=>t>e;function w(t){return Object.keys(t).map(e=>({position:e,value:t[e]})).sort((t,e)=>e.value-t.value).map(t=>t.position)}function b(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Array.isArray(t)?t[0]?[t[0],t[1]?t[1]:t[0]]:[10,10]:[t,t]}}}]);