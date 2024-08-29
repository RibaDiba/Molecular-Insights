import{s as re,e as g,t as N,a as D,c as p,b as $,d as A,f as o,g as V,o as d,N as R,i as E,h,j as L,O as Z,x as ee,M as Pe,k as Te,u as Ue}from"../chunks/scheduler.DwoTH7Gm.js";import{S as ne,i as ce,b as te,d as le,m as ie,a as H,t as Q,e as se,c as fe,g as oe}from"../chunks/index.BmjTw2gQ.js";import{p as ze}from"../chunks/stores.Bc9_PUGg.js";import{a as Oe}from"../chunks/articles.IJDiWeLt.js";/* empty css                                                     */import{S as qe,e as T}from"../chunks/ScrollDivider.DELE_aTE.js";/* empty css                                                              */function he(c,e,a){const s=c.slice();return s[1]=e[a],s}function ue(c,e,a){const s=c.slice();return s[4]=e[a],s}function de(c,e,a){const s=c.slice();return s[7]=e[a],s}function _e(c){let e,a=c[4].header+"",s;return{c(){e=g("div"),s=N(a),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","text-3xl font-bold mt-10 text-blue-950")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[4].header+"")&&L(s,a)},d(l){l&&o(e)}}}function me(c){let e,a;return{c(){e=g("img"),this.h()},l(s){e=p(s,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){R(e.src,a=c[4].image)||d(e,"src",a),d(e,"class","rounded-lg w-full"),d(e,"alt","")},m(s,l){E(s,e,l)},p(s,l){l&1&&!R(e.src,a=s[4].image)&&d(e,"src",a)},d(s){s&&o(e)}}}function ve(c){let e,a,s=T(c[4].list),l=[];for(let t=0;t<s.length;t+=1)l[t]=ge(de(c,s,t));return{c(){e=g("div"),a=g("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var r=$(e);a=p(r,"UL",{class:!0});var i=$(a);for(let n=0;n<l.length;n+=1)l[n].l(i);i.forEach(o),r.forEach(o),this.h()},h(){d(a,"class","list-disc list-inside"),d(e,"class","mt-5 text-lg")},m(t,r){E(t,e,r),h(e,a);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(a,null)},p(t,r){if(r&1){s=T(t[4].list);let i;for(i=0;i<s.length;i+=1){const n=de(t,s,i);l[i]?l[i].p(n,r):(l[i]=ge(n),l[i].c(),l[i].m(a,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},d(t){t&&o(e),Z(l,t)}}}function ge(c){let e,a=c[7]+"",s;return{c(){e=g("li"),s=N(a),this.h()},l(l){e=p(l,"LI",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","mt-2")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[7]+"")&&L(s,a)},d(l){l&&o(e)}}}function pe(c){let e,a=c[4].paragraph+"",s;return{c(){e=g("div"),s=N(a),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","mt-5 text-lg")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[4].paragraph+"")&&L(s,a)},d(l){l&&o(e)}}}function be(c){let e,a,s,l,t=c[4].header&&_e(c),r=c[4].image&&me(c),i=c[4].list&&ve(c),n=c[4].paragraph&&pe(c);return{c(){e=g("div"),t&&t.c(),a=D(),r&&r.c(),s=D(),i&&i.c(),l=D(),n&&n.c(),this.h()},l(f){e=p(f,"DIV",{class:!0});var u=$(e);t&&t.l(u),a=V(u),r&&r.l(u),s=V(u),i&&i.l(u),l=V(u),n&&n.l(u),u.forEach(o),this.h()},h(){d(e,"class","my-5")},m(f,u){E(f,e,u),t&&t.m(e,null),h(e,a),r&&r.m(e,null),h(e,s),i&&i.m(e,null),h(e,l),n&&n.m(e,null)},p(f,u){f[4].header?t?t.p(f,u):(t=_e(f),t.c(),t.m(e,a)):t&&(t.d(1),t=null),f[4].image?r?r.p(f,u):(r=me(f),r.c(),r.m(e,s)):r&&(r.d(1),r=null),f[4].list?i?i.p(f,u):(i=ve(f),i.c(),i.m(e,l)):i&&(i.d(1),i=null),f[4].paragraph?n?n.p(f,u):(n=pe(f),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(f){f&&o(e),t&&t.d(),r&&r.d(),i&&i.d(),n&&n.d()}}}function ke(c){let e,a="Citations",s,l,t=T(c[0].citations),r=[];for(let i=0;i<t.length;i+=1)r[i]=$e(he(c,t,i));return{c(){e=g("div"),e.textContent=a,s=D();for(let i=0;i<r.length;i+=1)r[i].c();l=ee(),this.h()},l(i){e=p(i,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-sfz2yk"&&(e.textContent=a),s=V(i);for(let n=0;n<r.length;n+=1)r[n].l(i);l=ee(),this.h()},h(){d(e,"class","text-xl font-bold mt-10 mb-3 text-blue-900")},m(i,n){E(i,e,n),E(i,s,n);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(i,n);E(i,l,n)},p(i,n){if(n&1){t=T(i[0].citations);let f;for(f=0;f<t.length;f+=1){const u=he(i,t,f);r[f]?r[f].p(u,n):(r[f]=$e(u),r[f].c(),r[f].m(l.parentNode,l))}for(;f<r.length;f+=1)r[f].d(1);r.length=t.length}},d(i){i&&(o(e),o(s),o(l)),Z(r,i)}}}function $e(c){let e,a=c[1].citation+"",s;return{c(){e=g("div"),s=N(a),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","text-gray-700 text-xs mb-4")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[1].citation+"")&&L(s,a)},d(l){l&&o(e)}}}function Be(c){let e,a,s,l=c[0].title+"",t,r,i,n,f=c[0].author+"",u,q,z=c[0].date+"",J,O,w,j,K,B,G,U,S,M,P,C;U=new qe({props:{transitionTime:"2s",color:"#172554",height:"3px"}});let I=T(c[0].content),b=[];for(let m=0;m<I.length;m+=1)b[m]=be(ue(c,I,m));let _=c[0].citations&&ke(c);return{c(){e=g("main"),a=g("div"),s=g("div"),t=N(l),r=D(),i=g("div"),n=g("div"),u=N(f),q=D(),J=N(z),O=D(),w=g("div"),j=g("img"),B=D(),G=g("div"),te(U.$$.fragment),S=D(),M=g("div");for(let m=0;m<b.length;m+=1)b[m].c();P=D(),_&&_.c(),this.h()},l(m){e=p(m,"MAIN",{class:!0});var v=$(e);a=p(v,"DIV",{class:!0});var k=$(a);s=p(k,"DIV",{class:!0});var F=$(s);t=A(F,l),F.forEach(o),r=V(k),i=p(k,"DIV",{class:!0});var W=$(i);n=p(W,"DIV",{class:!0});var x=$(n);u=A(x,f),x.forEach(o),q=V(W),J=A(W,z),W.forEach(o),O=V(k),w=p(k,"DIV",{class:!0});var X=$(w);j=p(X,"IMG",{src:!0,alt:!0,class:!0}),X.forEach(o),B=V(k),G=p(k,"DIV",{class:!0});var Y=$(G);le(U.$$.fragment,Y),Y.forEach(o),k.forEach(o),S=V(v),M=p(v,"DIV",{class:!0});var y=$(M);for(let ae=0;ae<b.length;ae+=1)b[ae].l(y);P=V(y),_&&_.l(y),y.forEach(o),v.forEach(o),this.h()},h(){d(s,"class","poppins font-bold text-blue-950 text-5xl svelte-vkkdv3"),d(n,"class","font-bold text-blue-900"),d(i,"class","mt-3 poppins text-lg svelte-vkkdv3"),R(j.src,K=c[0].cover)||d(j,"src",K),d(j,"alt",""),d(j,"class","rounded-lg svelte-vkkdv3"),d(w,"class","cover-container mt-5 svelte-vkkdv3"),d(G,"class","overflow-hidden mt-10"),d(a,"class",""),d(M,"class",""),d(e,"class","mx-64 poppins mb-10 svelte-vkkdv3")},m(m,v){E(m,e,v),h(e,a),h(a,s),h(s,t),h(a,r),h(a,i),h(i,n),h(n,u),h(i,q),h(i,J),h(a,O),h(a,w),h(w,j),h(a,B),h(a,G),ie(U,G,null),h(e,S),h(e,M);for(let k=0;k<b.length;k+=1)b[k]&&b[k].m(M,null);h(M,P),_&&_.m(M,null),C=!0},p(m,[v]){if((!C||v&1)&&l!==(l=m[0].title+"")&&L(t,l),(!C||v&1)&&f!==(f=m[0].author+"")&&L(u,f),(!C||v&1)&&z!==(z=m[0].date+"")&&L(J,z),(!C||v&1&&!R(j.src,K=m[0].cover))&&d(j,"src",K),v&1){I=T(m[0].content);let k;for(k=0;k<I.length;k+=1){const F=ue(m,I,k);b[k]?b[k].p(F,v):(b[k]=be(F),b[k].c(),b[k].m(M,P))}for(;k<b.length;k+=1)b[k].d(1);b.length=I.length}m[0].citations?_?_.p(m,v):(_=ke(m),_.c(),_.m(M,null)):_&&(_.d(1),_=null)},i(m){C||(H(U.$$.fragment,m),C=!0)},o(m){Q(U.$$.fragment,m),C=!1},d(m){m&&o(e),se(U),Z(b,m),_&&_.d()}}}function Fe(c,e,a){let{article:s}=e;return c.$$set=l=>{"article"in l&&a(0,s=l.article)},[s]}class He extends ne{constructor(e){super(),ce(this,e,Fe,Be,re,{article:0})}}function Ie(c,e,a){const s=c.slice();return s[1]=e[a],s}function Ee(c,e,a){const s=c.slice();return s[4]=e[a],s}function De(c,e,a){const s=c.slice();return s[7]=e[a],s}function Ve(c){let e,a=c[4].header+"",s;return{c(){e=g("div"),s=N(a),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","text-2xl font-bold mt-10 text-blue-950")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[4].header+"")&&L(s,a)},d(l){l&&o(e)}}}function we(c){let e,a;return{c(){e=g("img"),this.h()},l(s){e=p(s,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){R(e.src,a=c[4].image)||d(e,"src",a),d(e,"class","rounded-lg w-full"),d(e,"alt","")},m(s,l){E(s,e,l)},p(s,l){l&1&&!R(e.src,a=s[4].image)&&d(e,"src",a)},d(s){s&&o(e)}}}function Me(c){let e,a,s=T(c[4].list),l=[];for(let t=0;t<s.length;t+=1)l[t]=Ce(De(c,s,t));return{c(){e=g("div"),a=g("ul");for(let t=0;t<l.length;t+=1)l[t].c();this.h()},l(t){e=p(t,"DIV",{class:!0});var r=$(e);a=p(r,"UL",{class:!0});var i=$(a);for(let n=0;n<l.length;n+=1)l[n].l(i);i.forEach(o),r.forEach(o),this.h()},h(){d(a,"class","list-disc list-inside"),d(e,"class","mt-5 text-lg")},m(t,r){E(t,e,r),h(e,a);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(a,null)},p(t,r){if(r&1){s=T(t[4].list);let i;for(i=0;i<s.length;i+=1){const n=De(t,s,i);l[i]?l[i].p(n,r):(l[i]=Ce(n),l[i].c(),l[i].m(a,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},d(t){t&&o(e),Z(l,t)}}}function Ce(c){let e,a=c[7]+"",s;return{c(){e=g("li"),s=N(a),this.h()},l(l){e=p(l,"LI",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","mt-2 text-md")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[7]+"")&&L(s,a)},d(l){l&&o(e)}}}function Ne(c){let e,a=c[4].paragraph+"",s;return{c(){e=g("div"),s=N(a),this.h()},l(l){e=p(l,"DIV",{class:!0});var t=$(e);s=A(t,a),t.forEach(o),this.h()},h(){d(e,"class","mt-5 text-md")},m(l,t){E(l,e,t),h(e,s)},p(l,t){t&1&&a!==(a=l[4].paragraph+"")&&L(s,a)},d(l){l&&o(e)}}}function Ae(c){let e,a,s,l,t=c[4].header&&Ve(c),r=c[4].image&&we(c),i=c[4].list&&Me(c),n=c[4].paragraph&&Ne(c);return{c(){e=g("div"),t&&t.c(),a=D(),r&&r.c(),s=D(),i&&i.c(),l=D(),n&&n.c(),this.h()},l(f){e=p(f,"DIV",{class:!0});var u=$(e);t&&t.l(u),a=V(u),r&&r.l(u),s=V(u),i&&i.l(u),l=V(u),n&&n.l(u),u.forEach(o),this.h()},h(){d(e,"class","my-4 md:my-5")},m(f,u){E(f,e,u),t&&t.m(e,null),h(e,a),r&&r.m(e,null),h(e,s),i&&i.m(e,null),h(e,l),n&&n.m(e,null)},p(f,u){f[4].header?t?t.p(f,u):(t=Ve(f),t.c(),t.m(e,a)):t&&(t.d(1),t=null),f[4].image?r?r.p(f,u):(r=we(f),r.c(),r.m(e,s)):r&&(r.d(1),r=null),f[4].list?i?i.p(f,u):(i=Me(f),i.c(),i.m(e,l)):i&&(i.d(1),i=null),f[4].paragraph?n?n.p(f,u):(n=Ne(f),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(f){f&&o(e),t&&t.d(),r&&r.d(),i&&i.d(),n&&n.d()}}}function je(c){let e,a="Citations",s,l,t=T(c[0].citations),r=[];for(let i=0;i<t.length;i+=1)r[i]=Ge(Ie(c,t,i));return{c(){e=g("div"),e.textContent=a,s=D();for(let i=0;i<r.length;i+=1)r[i].c();l=ee(),this.h()},l(i){e=p(i,"DIV",{class:!0,"data-svelte-h":!0}),Pe(e)!=="svelte-ons6ut"&&(e.textContent=a),s=V(i);for(let n=0;n<r.length;n+=1)r[n].l(i);l=ee(),this.h()},h(){d(e,"class","text-md md:text-xl font-bold mt-6 mb-3 text-blue-900")},m(i,n){E(i,e,n),E(i,s,n);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(i,n);E(i,l,n)},p(i,n){if(n&1){t=T(i[0].citations);let f;for(f=0;f<t.length;f+=1){const u=Ie(i,t,f);r[f]?r[f].p(u,n):(r[f]=Ge(u),r[f].c(),r[f].m(l.parentNode,l))}for(;f<r.length;f+=1)r[f].d(1);r.length=t.length}},d(i){i&&(o(e),o(s),o(l)),Z(r,i)}}}function Ge(c){let e,a=c[1].citation+"",s,l;return{c(){e=g("div"),s=N(a),l=D(),this.h()},l(t){e=p(t,"DIV",{class:!0});var r=$(e);s=A(r,a),l=V(r),r.forEach(o),this.h()},h(){d(e,"class","text-gray-700 text-xs md:text-sm mb-4 overflow-hidden ")},m(t,r){E(t,e,r),h(e,s),h(e,l)},p(t,r){r&1&&a!==(a=t[1].citation+"")&&L(s,a)},d(t){t&&o(e)}}}function Je(c){let e,a,s,l=c[0].title+"",t,r,i,n=c[0].author+"",f,u,q=c[0].date+"",z,J,O,w,j,K,B,G,U,S,M,P;G=new qe({props:{transitionTime:"2s",color:"#172554",height:"3px"}});let C=T(c[0].content),I=[];for(let _=0;_<C.length;_+=1)I[_]=Ae(Ee(c,C,_));let b=c[0].citations&&je(c);return{c(){e=g("main"),a=g("div"),s=g("div"),t=N(l),r=D(),i=g("div"),f=N(n),u=N(" | "),z=N(q),J=D(),O=g("div"),w=g("img"),K=D(),B=g("div"),te(G.$$.fragment),U=D(),S=g("div");for(let _=0;_<I.length;_+=1)I[_].c();M=D(),b&&b.c(),this.h()},l(_){e=p(_,"MAIN",{class:!0});var m=$(e);a=p(m,"DIV",{});var v=$(a);s=p(v,"DIV",{class:!0});var k=$(s);t=A(k,l),k.forEach(o),r=V(v),i=p(v,"DIV",{class:!0});var F=$(i);f=A(F,n),u=A(F," | "),z=A(F,q),F.forEach(o),J=V(v),O=p(v,"DIV",{class:!0});var W=$(O);w=p(W,"IMG",{src:!0,alt:!0,class:!0}),W.forEach(o),K=V(v),B=p(v,"DIV",{class:!0});var x=$(B);le(G.$$.fragment,x),x.forEach(o),v.forEach(o),U=V(m),S=p(m,"DIV",{});var X=$(S);for(let Y=0;Y<I.length;Y+=1)I[Y].l(X);M=V(X),b&&b.l(X),X.forEach(o),m.forEach(o),this.h()},h(){d(s,"class","font-bold text-blue-950 text-3xl md:text-5xl"),d(i,"class","mt-2 text-sm md:text-lg"),R(w.src,j=c[0].cover)||d(w,"src",j),d(w,"alt",""),d(w,"class","rounded-lg w-full svelte-13a24j2"),d(O,"class","cover-container mt-4 md:mt-5 svelte-13a24j2"),d(B,"class","overflow-hidden mt-6 md:mt-10"),d(e,"class","p-4 md:p-8 poppins svelte-13a24j2")},m(_,m){E(_,e,m),h(e,a),h(a,s),h(s,t),h(a,r),h(a,i),h(i,f),h(i,u),h(i,z),h(a,J),h(a,O),h(O,w),h(a,K),h(a,B),ie(G,B,null),h(e,U),h(e,S);for(let v=0;v<I.length;v+=1)I[v]&&I[v].m(S,null);h(S,M),b&&b.m(S,null),P=!0},p(_,[m]){if((!P||m&1)&&l!==(l=_[0].title+"")&&L(t,l),(!P||m&1)&&n!==(n=_[0].author+"")&&L(f,n),(!P||m&1)&&q!==(q=_[0].date+"")&&L(z,q),(!P||m&1&&!R(w.src,j=_[0].cover))&&d(w,"src",j),m&1){C=T(_[0].content);let v;for(v=0;v<C.length;v+=1){const k=Ee(_,C,v);I[v]?I[v].p(k,m):(I[v]=Ae(k),I[v].c(),I[v].m(S,M))}for(;v<I.length;v+=1)I[v].d(1);I.length=C.length}_[0].citations?b?b.p(_,m):(b=je(_),b.c(),b.m(S,null)):b&&(b.d(1),b=null)},i(_){P||(H(G.$$.fragment,_),P=!0)},o(_){Q(G.$$.fragment,_),P=!1},d(_){_&&o(e),se(G),Z(I,_),b&&b.d()}}}function Ke(c,e,a){let{article:s}=e;return c.$$set=l=>{"article"in l&&a(0,s=l.article)},[s]}class Qe extends ne{constructor(e){super(),ce(this,e,Ke,Je,re,{article:0})}}function Le(c){let e,a;return e=new He({props:{article:c[0]}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,l){ie(e,s,l),a=!0},p(s,l){const t={};l&1&&(t.article=s[0]),e.$set(t)},i(s){a||(H(e.$$.fragment,s),a=!0)},o(s){Q(e.$$.fragment,s),a=!1},d(s){se(e,s)}}}function Se(c){let e,a;return e=new Qe({props:{article:c[0]}}),{c(){te(e.$$.fragment)},l(s){le(e.$$.fragment,s)},m(s,l){ie(e,s,l),a=!0},p(s,l){const t={};l&1&&(t.article=s[0]),e.$set(t)},i(s){a||(H(e.$$.fragment,s),a=!0)},o(s){Q(e.$$.fragment,s),a=!1},d(s){se(e,s)}}}function Re(c){let e,a,s,l,t,r=c[0]&&Le(c),i=c[0]&&Se(c);return{c(){e=g("main"),a=g("div"),r&&r.c(),s=D(),l=g("div"),i&&i.c(),this.h()},l(n){e=p(n,"MAIN",{class:!0});var f=$(e);a=p(f,"DIV",{class:!0});var u=$(a);r&&r.l(u),u.forEach(o),s=V(f),l=p(f,"DIV",{class:!0});var q=$(l);i&&i.l(q),q.forEach(o),f.forEach(o),this.h()},h(){d(a,"class","mt-36 hidden md:block"),d(l,"class","block md:hidden mt-20"),d(e,"class","lg:container")},m(n,f){E(n,e,f),h(e,a),r&&r.m(a,null),h(e,s),h(e,l),i&&i.m(l,null),t=!0},p(n,[f]){n[0]?r?(r.p(n,f),f&1&&H(r,1)):(r=Le(n),r.c(),H(r,1),r.m(a,null)):r&&(oe(),Q(r,1,1,()=>{r=null}),fe()),n[0]?i?(i.p(n,f),f&1&&H(i,1)):(i=Se(n),i.c(),H(i,1),i.m(l,null)):i&&(oe(),Q(i,1,1,()=>{i=null}),fe())},i(n){t||(H(r),H(i),t=!0)},o(n){Q(r),Q(i),t=!1},d(n){n&&o(e),r&&r.d(),i&&i.d()}}}function We(c,e,a){let s;Te(c,ze,r=>a(2,s=r));let l,t=null;return l=s.params.articleId,Ue(()=>{a(0,t=Oe.find(r=>r.id==l)),console.log(t)}),[t]}class lt extends ne{constructor(e){super(),ce(this,e,We,Re,re,{})}}export{lt as component};
