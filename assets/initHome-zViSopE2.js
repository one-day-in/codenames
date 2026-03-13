import{i as G,s as A,G as N,I as f,L as S,a as L,p as x,g as k,l as C,c as F,D as B,t as O}from"./url-BkejxNIu.js";import{r as M}from"./entry-KexUoWPs.js";import{s as R,c as H,g as U}from"./roomRepository-DOzx6gVt.js";import{o as W}from"./rulesModal-B_dpvcV7.js";async function j(){if(!G)return null;const{data:{user:n}}=await A.auth.getUser();return n}async function X(){if(!G){window.alert("Google auth is not configured for this deployment yet.");return}const{error:n}=await A.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});n&&M("auth.signInWithGoogle",n)}async function Y(){G&&await A.auth.signOut()}function T(n=16){const d=7.140000000000001,h=19*.34,m=[];for(let s=0;s<4;s+=1)for(let u=0;u<4;u+=1)m.push({r:s,c:u});for(let s=m.length-1;s>0;s-=1){const u=Math.floor(Math.random()*(s+1));[m[s],m[u]]=[m[u],m[s]]}return m.slice(0,n).map(({r:s,c:u},w)=>{const p=8+21*(u+.5),_=12+19*(s+.5),b=Math.round(p+(Math.random()*2-1)*d),y=Math.round(_+(Math.random()*2-1)*h),v=Math.round(24+Math.random()*56),g=(3+Math.random()*2).toFixed(2),$=(Math.random()*2.5).toFixed(2),E=(.3+Math.random()*.5).toFixed(2);return{id:w,size:v,left:b,top:y,period:g,delay:$,alpha:E}})}function z({lang:n,tr:e,user:a,room:t,canManageGame:c,canContinueCurrentGame:l,introPlayed:i,homeEyes:r}){return`
        <div class="app ${i?"":"app--intro"}">
            <div class="lang-toggle">
                ${S.map(o=>`
                    <button
                        class="lang-toggle__btn ${o.code===n?"lang-toggle__btn--active":""}"
                        data-lang="${o.code}">
                        ${o.label}
                    </button>
                `).join("")}
            </div>

            <div class="home-screen">
                <div class="home-eyes" aria-hidden="true">
                    ${r.map(o=>`
                        <span class="home-eye"
                            style="--eye-size:${o.size}px;--eye-left:${o.left}%;--eye-top:${o.top}%;--eye-period:${o.period}s;--eye-delay:${o.delay}s;--eye-alpha:${o.alpha};">
                            <span class="home-eye__open">${f.eye}</span>
                            <span class="home-eye__closed">${f.eyeClosed}</span>
                        </span>
                    `).join("")}
                </div>

                <div class="home-screen__title-wrap">
                    <h1 class="home-screen__title">${N}</h1>
                </div>

                ${c?`
                        <div class="home-screen__actions">
                            ${t!=null&&t.hasActiveGame&&l?`
                                    <button class="ui-btn home__btn home__btn--continue" id="continueBtn">
                                        ${e.continueGame}
                                    </button>
                                `:""}
                            <button class="ui-btn home__btn home__btn--newgame" id="newGameBtn">
                                ${e.newGame}
                            </button>
                        </div>
                    `:`
                        <button class="ui-btn home__btn home__btn--google" id="loginBtn">
                            <span class="home__btn-text">${e.signIn}</span>
                            <span class="home__btn-google-icon">${f.google}</span>
                        </button>
                    `}
            </div>
        </div>

        ${a?`<button class="btn-logout btn-icon" id="logoutBtn" title="${a.email}">${f.user}</button>`:""}
        <button class="btn-rules btn-icon" id="rulesBtn" aria-label="${e.openRules}" title="${e.rules}">${f.book}</button>
        <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${f.maximize}</button>
    `}function q(n){return new Promise(e=>{var l;const a=document.createElement("div");a.className="confirm-modal",a.innerHTML=`
            <div class="confirm-modal__backdrop" data-close="cancel"></div>
            <div class="confirm-modal__content" role="dialog" aria-modal="true">
                <h2 class="confirm-modal__title">${n.newGame}</h2>
                <p class="confirm-modal__text">${n.confirmNewGame}</p>
                <div class="confirm-modal__actions">
                    <button class="ui-btn confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                        ${n.confirmNewGameAction}
                    </button>
                    <button class="ui-btn confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                        ${n.cancel}
                    </button>
                </div>
            </div>
        `;const t=i=>{document.removeEventListener("keydown",c),a.remove(),e(i)},c=i=>{i.key==="Escape"&&t(!1)};a.addEventListener("click",i=>{var o,d;const r=(d=(o=i.target)==null?void 0:o.dataset)==null?void 0:d.close;r==="confirm"&&t(!0),r==="cancel"&&t(!1)}),document.addEventListener("keydown",c),document.body.appendChild(a),(l=a.querySelector(".confirm-modal__btn--confirm"))==null||l.focus()})}function P(){return window.__nwLoader||null}async function I(n){const e=P();return e!=null&&e.wrap?await e.wrap(n):await n()}function V(n){const e=n*n,a=Math.random()<.5?"resonant":"dissonant",t=Math.ceil(e/3),c=t-1,l=a==="resonant"?t:c,i=a==="dissonant"?t:c,r=1,o=e-l-i-r,d=[...Array(l).fill("resonant"),...Array(i).fill("dissonant"),...Array(o).fill("anomaly"),...Array(r).fill("nightmare")];return{roles:L(d),startsFirst:a}}const D={resonant:9,dissonant:9,anomaly:7,nightmare:1};function K(n){return L(Array.from({length:n},(e,a)=>a+1))}function J({size:n,words:e}){const{roles:a,startsFirst:t}=V(n),c=Object.fromEntries(Object.entries(D).map(([i,r])=>[i,K(r)]));return{cells:x(e,n*n).map((i,r)=>{const o=a[r],d=c[o].shift()??1;return{word:i,role:o,imageVariant:d,revealed:!1}}),startsFirst:t}}async function Q(n,e){await I(async()=>{if(n!=null&&n.id)try{await H(n.id)}catch(a){M("home.logoutAndClearRoom",a)}await Y(),await(e==null?void 0:e())})}async function Z({room:n,lang:e,tr:a,askConfirm:t}){const c=document.getElementById("newGameBtn");if(!(!c||!(n!=null&&n.id))&&!(n.hasActiveGame&&!await t())){c.disabled=!0;try{await I(async()=>{var h;const l=await C(e),{cells:i,startsFirst:r}=J({size:5,words:l}),o=F({gameId:((h=crypto.randomUUID)==null?void 0:h.call(crypto))||Math.random().toString(36).slice(2),size:5,cells:i,startsFirst:r}),{error:d}=await R(n.id,o,e);if(d)throw d;window.location.href=`${k()}/game.html?room=${n.id}&token=${n.guest_token}`})}catch(l){M("home.createAndOpenNewGame",l),window.alert(a.newGameFailed),c.disabled=!1}}}function nn(n){!(n!=null&&n.id)||!(n!=null&&n.guest_token)||(window.location.href=`${k()}/game.html?room=${n.id}&token=${n.guest_token}`)}function en(){try{return localStorage.getItem("nw_lang")||B}catch{return B}}function tn(n){try{localStorage.setItem("nw_lang",n)}catch{}}async function ln(n){let e=en(),a=null,t=null,c=null,l=!0,i=null;const r=T(16);function o(s){a&&c!==s&&(c=s,C(s).catch(()=>{c=null}))}async function d(){const s=O(e),u=!!(a&&(t!=null&&t.id)),w=!!(t!=null&&t.hasActiveGame&&(!(t!=null&&t.language)||t.language===e));document.body.className="",n.innerHTML=z({lang:e,tr:s,user:a,room:t,canManageGame:u,canContinueCurrentGame:w,introPlayed:l,homeEyes:r}),h(s),o(e),l=!0}function h(s){var p,_,b,y,v;n.querySelectorAll(".lang-toggle__btn").forEach(g=>{g.addEventListener("click",()=>{e=g.dataset.lang,tn(e),d()})}),(p=document.getElementById("loginBtn"))==null||p.addEventListener("click",X),(_=document.getElementById("continueBtn"))==null||_.addEventListener("click",()=>nn(t)),(b=document.getElementById("newGameBtn"))==null||b.addEventListener("click",()=>m(s)),(y=document.getElementById("logoutBtn"))==null||y.addEventListener("click",async()=>{await Q(t,async()=>{a=null,t=null,await d()})}),(v=document.getElementById("rulesBtn"))==null||v.addEventListener("click",()=>W(e));const u=document.getElementById("fullscreenBtn"),w=()=>{u&&(u.innerHTML=document.fullscreenElement?f.minimize:f.maximize)};w(),i&&document.removeEventListener("fullscreenchange",i),i=()=>w(),document.addEventListener("fullscreenchange",i),u==null||u.addEventListener("click",()=>{var g,$,E;document.fullscreenElement?(E=document.exitFullscreen)==null||E.call(document):($=(g=document.documentElement).requestFullscreen)==null||$.call(g)})}async function m(s){await Z({room:t,lang:e,tr:s,askConfirm:()=>q(s)})}await d(),a=await j(),a&&(t=await U(a.id),await d())}export{ln as initHome};
