import{i as A,s as h,G as S,I as f,L as x,a as B,p as F,g as L,l as I,c as N,D as M,t as U}from"./url-DrpWMjE3.js";import{r as k}from"./entry-CtYOvSJy.js";import{o as H}from"./rulesModal-DZB5mEI0.js";async function O(){if(!A)return null;const{data:{user:e}}=await h.auth.getUser();return e}async function R(){if(!A){window.alert("Google auth is not configured for this deployment yet.");return}const{error:e}=await h.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});e&&k("auth.signInWithGoogle",e)}async function W(){A&&await h.auth.signOut()}async function j(e){if(!A)throw new Error("Supabase is not configured.");const{data:t}=await h.from("rooms").select("id, guest_token, state, language").eq("owner_id",e).maybeSingle();if(t)return{id:t.id,guest_token:t.guest_token,hasActiveGame:!!t.state,language:t.language,state:t.state??null};const a=X(),{data:n}=await h.from("rooms").insert({id:a,owner_id:e}).select("id, guest_token").single();return{id:n.id,guest_token:n.guest_token,hasActiveGame:!1,language:null,state:null}}function X(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}function Y(e=16){const d=7.140000000000001,w=19*.34,m=[];for(let s=0;s<4;s+=1)for(let u=0;u<4;u+=1)m.push({r:s,c:u});for(let s=m.length-1;s>0;s-=1){const u=Math.floor(Math.random()*(s+1));[m[s],m[u]]=[m[u],m[s]]}return m.slice(0,e).map(({r:s,c:u},_)=>{const p=8+21*(u+.5),y=12+19*(s+.5),b=Math.round(p+(Math.random()*2-1)*d),v=Math.round(y+(Math.random()*2-1)*w),$=Math.round(24+Math.random()*56),g=(3+Math.random()*2).toFixed(2),E=(Math.random()*2.5).toFixed(2),G=(.3+Math.random()*.5).toFixed(2);return{id:_,size:$,left:b,top:v,period:g,delay:E,alpha:G}})}function q({lang:e,tr:t,user:a,room:n,canManageGame:c,canContinueCurrentGame:l,introPlayed:i,homeEyes:r}){return`
        <div class="app ${i?"":"app--intro"}">
            <div class="lang-toggle">
                ${x.map(o=>`
                    <button
                        class="lang-toggle__btn ${o.code===e?"lang-toggle__btn--active":""}"
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
                    <h1 class="home-screen__title">${S}</h1>
                </div>

                ${c?`
                        <div class="home-screen__actions">
                            ${n!=null&&n.hasActiveGame&&l?`
                                    <button class="ui-btn home__btn home__btn--continue" id="continueBtn">
                                        ${t.continueGame}
                                    </button>
                                `:""}
                            <button class="ui-btn home__btn home__btn--newgame" id="newGameBtn">
                                ${t.newGame}
                            </button>
                        </div>
                    `:`
                        <button class="ui-btn home__btn home__btn--google" id="loginBtn">
                            <span class="home__btn-text">${t.signIn}</span>
                            <span class="home__btn-google-icon">${f.google}</span>
                        </button>
                    `}
            </div>
        </div>

        ${a?`<button class="btn-logout btn-icon" id="logoutBtn" title="${a.email}">${f.user}</button>`:""}
        <button class="btn-rules btn-icon" id="rulesBtn" aria-label="${t.openRules}" title="${t.rules}">${f.book}</button>
        <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${f.maximize}</button>
    `}function T(e){return new Promise(t=>{var l;const a=document.createElement("div");a.className="confirm-modal",a.innerHTML=`
            <div class="confirm-modal__backdrop" data-close="cancel"></div>
            <div class="confirm-modal__content" role="dialog" aria-modal="true">
                <h2 class="confirm-modal__title">${e.newGame}</h2>
                <p class="confirm-modal__text">${e.confirmNewGame}</p>
                <div class="confirm-modal__actions">
                    <button class="ui-btn confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                        ${e.confirmNewGameAction}
                    </button>
                    <button class="ui-btn confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                        ${e.cancel}
                    </button>
                </div>
            </div>
        `;const n=i=>{document.removeEventListener("keydown",c),a.remove(),t(i)},c=i=>{i.key==="Escape"&&n(!1)};a.addEventListener("click",i=>{var o,d;const r=(d=(o=i.target)==null?void 0:o.dataset)==null?void 0:d.close;r==="confirm"&&n(!0),r==="cancel"&&n(!1)}),document.addEventListener("keydown",c),document.body.appendChild(a),(l=a.querySelector(".confirm-modal__btn--confirm"))==null||l.focus()})}function z(){return window.__nwLoader||null}async function C(e){const t=z();return t!=null&&t.wrap?await t.wrap(e):await e()}function D(e){const t=e*e,a=Math.random()<.5?"resonant":"dissonant",n=Math.ceil(t/3),c=n-1,l=a==="resonant"?n:c,i=a==="dissonant"?n:c,r=1,o=t-l-i-r,d=[...Array(l).fill("resonant"),...Array(i).fill("dissonant"),...Array(o).fill("anomaly"),...Array(r).fill("nightmare")];return{roles:B(d),startsFirst:a}}const P={resonant:9,dissonant:9,anomaly:7,nightmare:1};function V(e){return B(Array.from({length:e},(t,a)=>a+1))}function K({size:e,words:t}){const{roles:a,startsFirst:n}=D(e),c=Object.fromEntries(Object.entries(P).map(([i,r])=>[i,V(r)]));return{cells:F(t,e*e).map((i,r)=>{const o=a[r],d=c[o].shift()??1;return{word:i,role:o,imageVariant:d,revealed:!1}}),startsFirst:n}}async function J(e){e&&await h.from("rooms").update({state:null}).eq("id",e)}async function Q(e,t){await C(async()=>{if(e!=null&&e.id)try{await J(e.id)}catch(a){k("home.logoutAndClearRoom",a)}await W(),await(t==null?void 0:t())})}async function Z({room:e,lang:t,tr:a,askConfirm:n}){const c=document.getElementById("newGameBtn");if(!(!c||!(e!=null&&e.id))&&!(e.hasActiveGame&&!await n())){c.disabled=!0;try{await C(async()=>{var w;const l=await I(t),{cells:i,startsFirst:r}=K({size:5,words:l}),o=N({gameId:((w=crypto.randomUUID)==null?void 0:w.call(crypto))||Math.random().toString(36).slice(2),size:5,cells:i,startsFirst:r}),{error:d}=await h.from("rooms").update({state:o,language:t}).eq("id",e.id);if(d)throw d;window.location.href=`${L()}/game.html?room=${e.id}&token=${e.guest_token}`})}catch(l){k("home.createAndOpenNewGame",l),window.alert(a.newGameFailed),c.disabled=!1}}}function ee(e){!(e!=null&&e.id)||!(e!=null&&e.guest_token)||(window.location.href=`${L()}/game.html?room=${e.id}&token=${e.guest_token}`)}function te(){try{return localStorage.getItem("nw_lang")||M}catch{return M}}function ne(e){try{localStorage.setItem("nw_lang",e)}catch{}}async function ie(e){let t=te(),a=null,n=null,c=null,l=!0,i=null;const r=Y(16);function o(s){a&&c!==s&&(c=s,I(s).catch(()=>{c=null}))}async function d(){const s=U(t),u=!!(a&&(n!=null&&n.id)),_=!!(n!=null&&n.hasActiveGame&&(!(n!=null&&n.language)||n.language===t));document.body.className="",e.innerHTML=q({lang:t,tr:s,user:a,room:n,canManageGame:u,canContinueCurrentGame:_,introPlayed:l,homeEyes:r}),w(s),o(t),l=!0}function w(s){var p,y,b,v,$;e.querySelectorAll(".lang-toggle__btn").forEach(g=>{g.addEventListener("click",()=>{t=g.dataset.lang,ne(t),d()})}),(p=document.getElementById("loginBtn"))==null||p.addEventListener("click",R),(y=document.getElementById("continueBtn"))==null||y.addEventListener("click",()=>ee(n)),(b=document.getElementById("newGameBtn"))==null||b.addEventListener("click",()=>m(s)),(v=document.getElementById("logoutBtn"))==null||v.addEventListener("click",async()=>{await Q(n,async()=>{a=null,n=null,await d()})}),($=document.getElementById("rulesBtn"))==null||$.addEventListener("click",()=>H(t));const u=document.getElementById("fullscreenBtn"),_=()=>{u&&(u.innerHTML=document.fullscreenElement?f.minimize:f.maximize)};_(),i&&document.removeEventListener("fullscreenchange",i),i=()=>_(),document.addEventListener("fullscreenchange",i),u==null||u.addEventListener("click",()=>{var g,E,G;document.fullscreenElement?(G=document.exitFullscreen)==null||G.call(document):(E=(g=document.documentElement).requestFullscreen)==null||E.call(g)})}async function m(s){await Z({room:n,lang:t,tr:s,askConfirm:()=>T(s)})}await d(),a=await O(),a&&(n=await j(a.id),await d())}export{ie as initHome};
