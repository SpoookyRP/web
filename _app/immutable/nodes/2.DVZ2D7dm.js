import{s as ee,n as Q,e as te,x as W}from"../chunks/scheduler.W2pu3yam.js";import{S as le,i as ae,m as U,j as T,g as _,y as D,z as N,d as C,o as s,A as y,k as z,e as S,s as V,u as G,c as E,h as B,B as x,v as P,w as X,t as Y,a as Z,x as q}from"../chunks/index.D8nPKPn0.js";const se="always",de=Object.freeze(Object.defineProperty({__proto__:null,trailingSlash:se},Symbol.toStringTag,{value:"Module"}));function ie(a,e){e&&e!=="lg"&&e!=="sm"&&e!=="xs"?a.style.fontSize=e.replace("x","em"):a.style.fontSize=""}function fe(a,e,l,r,u,n=1,o="",h=""){let m=1,g=1;u&&(u=="horizontal"?m=-1:u=="vertical"?g=-1:m=g=-1),typeof a=="string"&&(a=parseFloat(a)),typeof e=="string"&&(e=parseFloat(e)),typeof l=="string"&&(l=parseFloat(l));const c=`${e*n}${o}`,t=`${l*n}${o}`;let i=`translate(${c},${t}) scale(${m*a},${g*a})`;return r&&(i+=` rotate(${r}${h})`),i}function $(a){let e,l,r,u,n,o,h;function m(t,i){return typeof t[16][4]=="string"?ne:re}let g=m(a),c=g(a);return{c(){e=D("svg"),l=D("g"),r=D("g"),c.c(),this.h()},l(t){e=N(t,"svg",{id:!0,class:!0,style:!0,viewBox:!0,"aria-hidden":!0,role:!0,xmlns:!0});var i=C(e);l=N(i,"g",{transform:!0,"transform-origin":!0});var b=C(l);r=N(b,"g",{transform:!0});var k=C(r);c.l(k),k.forEach(_),b.forEach(_),i.forEach(_),this.h()},h(){s(r,"transform",a[15]),s(l,"transform",u="translate("+a[16][0]/2+" "+a[16][1]/2+")"),s(l,"transform-origin",n=a[16][0]/4+" 0"),s(e,"id",a[1]),s(e,"class",o="svelte-fa svelte-fa-base "+a[0]+" svelte-bvo74f"),s(e,"style",a[2]),s(e,"viewBox",h="0 0 "+a[16][0]+" "+a[16][1]),s(e,"aria-hidden","true"),s(e,"role","img"),s(e,"xmlns","http://www.w3.org/2000/svg"),y(e,"pulse",a[8]),y(e,"svelte-fa-size-lg",a[3]==="lg"),y(e,"svelte-fa-size-sm",a[3]==="sm"),y(e,"svelte-fa-size-xs",a[3]==="xs"),y(e,"svelte-fa-fw",a[5]),y(e,"svelte-fa-pull-left",a[6]==="left"),y(e,"svelte-fa-pull-right",a[6]==="right"),y(e,"spin",a[7])},m(t,i){T(t,e,i),z(e,l),z(l,r),c.m(r,null),a[23](e)},p(t,i){g===(g=m(t))&&c?c.p(t,i):(c.d(1),c=g(t),c&&(c.c(),c.m(r,null))),i&32768&&s(r,"transform",t[15]),i&65536&&u!==(u="translate("+t[16][0]/2+" "+t[16][1]/2+")")&&s(l,"transform",u),i&65536&&n!==(n=t[16][0]/4+" 0")&&s(l,"transform-origin",n),i&2&&s(e,"id",t[1]),i&1&&o!==(o="svelte-fa svelte-fa-base "+t[0]+" svelte-bvo74f")&&s(e,"class",o),i&4&&s(e,"style",t[2]),i&65536&&h!==(h="0 0 "+t[16][0]+" "+t[16][1])&&s(e,"viewBox",h),i&257&&y(e,"pulse",t[8]),i&9&&y(e,"svelte-fa-size-lg",t[3]==="lg"),i&9&&y(e,"svelte-fa-size-sm",t[3]==="sm"),i&9&&y(e,"svelte-fa-size-xs",t[3]==="xs"),i&33&&y(e,"svelte-fa-fw",t[5]),i&65&&y(e,"svelte-fa-pull-left",t[6]==="left"),i&65&&y(e,"svelte-fa-pull-right",t[6]==="right"),i&129&&y(e,"spin",t[7])},d(t){t&&_(e),c.d(),a[23](null)}}}function re(a){let e,l,r,u,n,o,h,m,g,c;return{c(){e=D("path"),o=D("path"),this.h()},l(t){e=N(t,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),C(e).forEach(_),o=N(t,"path",{d:!0,fill:!0,"fill-opacity":!0,transform:!0}),C(o).forEach(_),this.h()},h(){s(e,"d",l=a[16][4][0]),s(e,"fill",r=a[10]||a[4]||"currentColor"),s(e,"fill-opacity",u=a[13]!=!1?a[11]:a[12]),s(e,"transform",n="translate("+a[16][0]/-2+" "+a[16][1]/-2+")"),s(o,"d",h=a[16][4][1]),s(o,"fill",m=a[9]||a[4]||"currentColor"),s(o,"fill-opacity",g=a[13]!=!1?a[12]:a[11]),s(o,"transform",c="translate("+a[16][0]/-2+" "+a[16][1]/-2+")")},m(t,i){T(t,e,i),T(t,o,i)},p(t,i){i&65536&&l!==(l=t[16][4][0])&&s(e,"d",l),i&1040&&r!==(r=t[10]||t[4]||"currentColor")&&s(e,"fill",r),i&14336&&u!==(u=t[13]!=!1?t[11]:t[12])&&s(e,"fill-opacity",u),i&65536&&n!==(n="translate("+t[16][0]/-2+" "+t[16][1]/-2+")")&&s(e,"transform",n),i&65536&&h!==(h=t[16][4][1])&&s(o,"d",h),i&528&&m!==(m=t[9]||t[4]||"currentColor")&&s(o,"fill",m),i&14336&&g!==(g=t[13]!=!1?t[12]:t[11])&&s(o,"fill-opacity",g),i&65536&&c!==(c="translate("+t[16][0]/-2+" "+t[16][1]/-2+")")&&s(o,"transform",c)},d(t){t&&(_(e),_(o))}}}function ne(a){let e,l,r,u;return{c(){e=D("path"),this.h()},l(n){e=N(n,"path",{d:!0,fill:!0,transform:!0}),C(e).forEach(_),this.h()},h(){s(e,"d",l=a[16][4]),s(e,"fill",r=a[4]||a[9]||"currentColor"),s(e,"transform",u="translate("+a[16][0]/-2+" "+a[16][1]/-2+")")},m(n,o){T(n,e,o)},p(n,o){o&65536&&l!==(l=n[16][4])&&s(e,"d",l),o&528&&r!==(r=n[4]||n[9]||"currentColor")&&s(e,"fill",r),o&65536&&u!==(u="translate("+n[16][0]/-2+" "+n[16][1]/-2+")")&&s(e,"transform",u)},d(n){n&&_(e)}}}function oe(a){let e,l=a[16][4]&&$(a);return{c(){l&&l.c(),e=U()},l(r){l&&l.l(r),e=U()},m(r,u){l&&l.m(r,u),T(r,e,u)},p(r,[u]){r[16][4]?l?l.p(r,u):(l=$(r),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:Q,o:Q,d(r){r&&_(e),l&&l.d(r)}}}function ue(a,e,l){let r,u,{class:n=void 0}=e,{id:o=void 0}=e,{style:h=void 0}=e,{icon:m}=e,{size:g=void 0}=e,{color:c=void 0}=e,{fw:t=!1}=e,{pull:i=void 0}=e,{scale:b=1}=e,{translateX:k=0}=e,{translateY:p=0}=e,{rotate:w=void 0}=e,{flip:j=void 0}=e,{spin:O=!1}=e,{pulse:H=!1}=e,{primaryColor:I=""}=e,{secondaryColor:M=""}=e,{primaryOpacity:L=1}=e,{secondaryOpacity:F=.4}=e,{swapOpacity:d=!1}=e,v;function A(f){te[f?"unshift":"push"](()=>{v=f,l(14,v)})}return a.$$set=f=>{"class"in f&&l(0,n=f.class),"id"in f&&l(1,o=f.id),"style"in f&&l(2,h=f.style),"icon"in f&&l(17,m=f.icon),"size"in f&&l(3,g=f.size),"color"in f&&l(4,c=f.color),"fw"in f&&l(5,t=f.fw),"pull"in f&&l(6,i=f.pull),"scale"in f&&l(18,b=f.scale),"translateX"in f&&l(19,k=f.translateX),"translateY"in f&&l(20,p=f.translateY),"rotate"in f&&l(21,w=f.rotate),"flip"in f&&l(22,j=f.flip),"spin"in f&&l(7,O=f.spin),"pulse"in f&&l(8,H=f.pulse),"primaryColor"in f&&l(9,I=f.primaryColor),"secondaryColor"in f&&l(10,M=f.secondaryColor),"primaryOpacity"in f&&l(11,L=f.primaryOpacity),"secondaryOpacity"in f&&l(12,F=f.secondaryOpacity),"swapOpacity"in f&&l(13,d=f.swapOpacity)},a.$$.update=()=>{a.$$.dirty&16392&&v&&g&&ie(v,g),a.$$.dirty&131072&&l(16,r=m&&m.icon||[0,0,"",[],""]),a.$$.dirty&8126464&&l(15,u=fe(b,k,p,w,j,512))},[n,o,h,g,c,t,i,O,H,I,M,L,F,d,v,u,r,m,b,k,p,w,j,A]}class J extends le{constructor(e){super(),ae(this,e,ue,oe,ee,{class:0,id:1,style:2,icon:17,size:3,color:4,fw:5,pull:6,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:7,pulse:8,primaryColor:9,secondaryColor:10,primaryOpacity:11,secondaryOpacity:12,swapOpacity:13})}}var ce={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},me={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},ge={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};function he(a){let e,l,r,u,n,o='<img src="./images/logo_text.png" alt="logo"/> <div class="sites svelte-ehz4gf"><a href="/" class="svelte-ehz4gf">Jak se připojit?</a> <a href="/" class="svelte-ehz4gf">O nás</a> <a href="/" class="svelte-ehz4gf">FAQ</a></div>',h,m,g,c,t,i,b,k,p,w,j,O,H='<h1 class="svelte-ehz4gf">Vítej na našich stránkách!</h1> <p class="svelte-ehz4gf">Spooky RP je český roleplay server na platformě FiveM. Na našem serveru se snažíme vytvořit co nejlepší zážitek pro hráče, ať už jde o kvalitní roleplay, nebo o příjemnou komunitu.</p>',I,M,L,F;return c=new J({props:{icon:me,size:"3x"}}),b=new J({props:{icon:ce,size:"3x"}}),w=new J({props:{icon:ge,size:"3x"}}),{c(){e=S("div"),l=S("img"),u=V(),n=S("div"),n.innerHTML=o,h=V(),m=S("div"),g=S("a"),G(c.$$.fragment),t=V(),i=S("a"),G(b.$$.fragment),k=V(),p=S("a"),G(w.$$.fragment),j=V(),O=S("div"),O.innerHTML=H,I=V(),M=S("img"),this.h()},l(d){e=E(d,"DIV",{id:!0,class:!0});var v=C(e);l=E(v,"IMG",{class:!0,src:!0,alt:!0}),u=B(v),n=E(v,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-rpf21e"&&(n.innerHTML=o),h=B(v),m=E(v,"DIV",{class:!0});var A=C(m);g=E(A,"A",{href:!0,class:!0});var f=C(g);P(c.$$.fragment,f),f.forEach(_),t=B(A),i=E(A,"A",{href:!0,class:!0});var R=C(i);P(b.$$.fragment,R),R.forEach(_),k=B(A),p=E(A,"A",{href:!0,class:!0});var K=C(p);P(w.$$.fragment,K),K.forEach(_),A.forEach(_),j=B(v),O=E(v,"DIV",{class:!0,"data-svelte-h":!0}),x(O)!=="svelte-ggnw0g"&&(O.innerHTML=H),I=B(v),M=E(v,"IMG",{class:!0,src:!0,alt:!0}),v.forEach(_),this.h()},h(){s(l,"class","background svelte-ehz4gf"),W(l.src,r="./images/background.png")||s(l,"src",r),s(l,"alt","background"),s(n,"class","upper-menu svelte-ehz4gf"),s(g,"href","/"),s(g,"class","svelte-ehz4gf"),s(i,"href","https://discord.gg/eMbGavcXym"),s(i,"class","svelte-ehz4gf"),s(p,"href","/"),s(p,"class","svelte-ehz4gf"),s(m,"class","left-menu svelte-ehz4gf"),s(O,"class","right-menu svelte-ehz4gf"),s(M,"class","character svelte-ehz4gf"),W(M.src,L="./images/character.webp")||s(M,"src",L),s(M,"alt","character"),s(e,"id","container"),s(e,"class","svelte-ehz4gf")},m(d,v){T(d,e,v),z(e,l),z(e,u),z(e,n),z(e,h),z(e,m),z(m,g),X(c,g,null),z(m,t),z(m,i),X(b,i,null),z(m,k),z(m,p),X(w,p,null),z(e,j),z(e,O),z(e,I),z(e,M),F=!0},p:Q,i(d){F||(Y(c.$$.fragment,d),Y(b.$$.fragment,d),Y(w.$$.fragment,d),F=!0)},o(d){Z(c.$$.fragment,d),Z(b.$$.fragment,d),Z(w.$$.fragment,d),F=!1},d(d){d&&_(e),q(c),q(b),q(w)}}}class ye extends le{constructor(e){super(),ae(this,e,null,he,ee,{})}}export{ye as component,de as universal};
