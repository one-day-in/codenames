import{i as M,s as p,a as F,p as z,D as k,G as R,I as w,L as P,t as L,g as B,l as I,c as V}from"./icons-DBgGDpDx.js";async function K(){if(!M)return null;const{data:{user:n}}=await p.auth.getUser();return n}async function J(){if(!M){window.alert("Google auth is not configured for this deployment yet.");return}const{error:n}=await p.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});n&&console.error("Auth error:",n)}async function Q(){M&&await p.auth.signOut()}async function Z(n){if(!M)throw new Error("Supabase is not configured.");const{data:t}=await p.from("rooms").select("id, guest_token, state, language").eq("owner_id",n).maybeSingle();if(t)return{id:t.id,guest_token:t.guest_token,hasActiveGame:!!t.state,language:t.language,state:t.state??null};const o=ee(),{data:e}=await p.from("rooms").insert({id:o,owner_id:n}).select("id, guest_token").single();return{id:e.id,guest_token:e.guest_token,hasActiveGame:!1,language:null,state:null}}function ee(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}function te(n){const t=n*n,o=Math.random()<.5?"resonant":"dissonant",e=Math.ceil(t/3),m=e-1,v=o==="resonant"?e:m,d=o==="dissonant"?e:m,f=1,E=t-v-d-f,G=[...Array(v).fill("resonant"),...Array(d).fill("dissonant"),...Array(E).fill("anomaly"),...Array(f).fill("nightmare")];return{roles:F(G),startsFirst:o}}const ne={resonant:9,dissonant:9,anomaly:7,nightmare:1};function ae(n){return F(Array.from({length:n},(t,o)=>o+1))}function oe({size:n,words:t}){const{roles:o,startsFirst:e}=te(n),m=Object.fromEntries(Object.entries(ne).map(([d,f])=>[d,ae(f)]));return{cells:z(t,n*n).map((d,f)=>{const E=o[f],G=m[E].shift()??1;return{word:d,role:E,imageVariant:G,revealed:!1}}),startsFirst:e}}function se(){return window.__nwLoader||null}async function C(n){const t=se();return t!=null&&t.wrap?await t.wrap(n):await n()}function ie(){try{return localStorage.getItem("nw_lang")||k}catch{return k}}function le(n){try{localStorage.setItem("nw_lang",n)}catch{}}async function re(n){let t=ie(),o=null,e=null,m=null,v=!0,d=null;function f(s=16){const _=7.140000000000001,N=19*.34,h=[];for(let u=0;u<4;u+=1)for(let y=0;y<4;y+=1)h.push({r:u,c:y});for(let u=h.length-1;u>0;u-=1){const y=Math.floor(Math.random()*(u+1));[h[u],h[y]]=[h[y],h[u]]}return h.slice(0,s).map(({r:u,c:y},O)=>{const j=8+21*(y+.5),D=12+19*(u+.5),H=Math.round(j+(Math.random()*2-1)*_),T=Math.round(D+(Math.random()*2-1)*N),W=Math.round(24+Math.random()*56),X=(3+Math.random()*2).toFixed(2),Y=(Math.random()*2.5).toFixed(2),q=(.3+Math.random()*.5).toFixed(2);return{id:O,size:W,left:H,top:T,period:X,delay:Y,alpha:q}})}const E=f(16);function G(s){return new Promise(l=>{var b;const i=document.createElement("div");i.className="confirm-modal",i.innerHTML=`
                <div class="confirm-modal__backdrop" data-close="cancel"></div>
                <div class="confirm-modal__content" role="dialog" aria-modal="true">
                    <h2 class="confirm-modal__title">${s.newGame}</h2>
                    <p class="confirm-modal__text">${s.confirmNewGame}</p>
                    <div class="confirm-modal__actions">
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                            ${s.confirmNewGameAction}
                        </button>
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                            ${s.cancel}
                        </button>
                    </div>
                </div>
            `;const a=r=>{document.removeEventListener("keydown",g),i.remove(),l(r)},g=r=>{r.key==="Escape"&&a(!1)};i.addEventListener("click",r=>{var $,_;const c=(_=($=r.target)==null?void 0:$.dataset)==null?void 0:_.close;c==="confirm"&&a(!0),c==="cancel"&&a(!1)}),document.addEventListener("keydown",g),document.body.appendChild(i),(b=i.querySelector(".confirm-modal__btn--confirm"))==null||b.focus()})}function S(s){o&&m!==s&&(m=s,I(s).catch(()=>{m=null}))}async function A(){const s=L(t),l=!!(o&&(e!=null&&e.id)),i=!!(e!=null&&e.hasActiveGame&&(!(e!=null&&e.language)||e.language===t));document.body.className="",n.innerHTML=`
            <div class="app ${v?"":"app--intro"}">

                <div class="lang-toggle">
                    ${P.map(a=>`
                        <button
                            class="lang-toggle__btn ${a.code===t?"lang-toggle__btn--active":""}"
                            data-lang="${a.code}">
                            ${a.label}
                        </button>
                    `).join("")}
                </div>

                <div class="lobby-screen">
                    <div class="home-eyes" aria-hidden="true">
                        ${E.map(a=>`
                            <span class="home-eye"
                                style="--eye-size:${a.size}px;--eye-left:${a.left}%;--eye-top:${a.top}%;--eye-period:${a.period}s;--eye-delay:${a.delay}s;--eye-alpha:${a.alpha};">
                                <span class="home-eye__open">${w.eye}</span>
                                <span class="home-eye__closed">${w.eyeClosed}</span>
                            </span>
                        `).join("")}
                    </div>

                    <div class="lobby__title-wrap">
                        <h1 class="lobby__title">${R}</h1>
                    </div>

                    ${l?`
                            <div class="lobby-screen__actions">
                                ${e!=null&&e.hasActiveGame&&i?`
                                        <button class="lobby__btn lobby__btn--continue" id="continueBtn">
                                            ${s.continueGame}
                                        </button>
                                      `:""}
                                <button class="lobby__btn lobby__btn--newgame" id="newGameBtn">
                                    ${s.newGame}
                                </button>
                            </div>
                        `:`
                            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                                <span class="lobby__btn-text">${s.signIn}</span>
                                <span class="lobby__btn-google-icon">${w.google}</span>
                            </button>
                        `}

                </div>
            </div>

            ${o?`<button class="btn-logout btn-icon" id="logoutBtn" title="${o.email}">${w.user}</button>`:""}
            <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${w.maximize}</button>
        `,x(),S(t),v=!0}function x(s){var a,g,b,r;n.querySelectorAll(".lang-toggle__btn").forEach(c=>{c.addEventListener("click",()=>{t=c.dataset.lang,le(t),A()})}),(a=document.getElementById("loginBtn"))==null||a.addEventListener("click",J),(g=document.getElementById("continueBtn"))==null||g.addEventListener("click",()=>{window.location.href=`${B()}/game.html?room=${e.id}&token=${e.guest_token}`}),(b=document.getElementById("newGameBtn"))==null||b.addEventListener("click",U),(r=document.getElementById("logoutBtn"))==null||r.addEventListener("click",async()=>{await C(async()=>{if(e!=null&&e.id)try{await p.from("rooms").update({state:null}).eq("id",e.id)}catch(c){console.error("Failed to clear room on logout:",c)}await Q(),o=null,e=null,A()})});const l=document.getElementById("fullscreenBtn"),i=()=>{l&&(l.innerHTML=document.fullscreenElement?w.minimize:w.maximize)};i(),d&&document.removeEventListener("fullscreenchange",d),d=()=>i(),document.addEventListener("fullscreenchange",d),l==null||l.addEventListener("click",()=>{var c,$,_;document.fullscreenElement?(_=document.exitFullscreen)==null||_.call(document):($=(c=document.documentElement).requestFullscreen)==null||$.call(c)})}async function U(){const s=L(t),l=document.getElementById("newGameBtn");if(!(!l||!(e!=null&&e.id))&&!(e!=null&&e.hasActiveGame&&!await G(s))){l.disabled=!0;try{await C(async()=>{var c;const i=await I(t),{cells:a,startsFirst:g}=oe({size:5,words:i}),b={gameId:((c=crypto.randomUUID)==null?void 0:c.call(crypto))||Math.random().toString(36).slice(2),phase:"lobby",size:5,cells:a,turn:{team:g,guideLimit:null,dreamwalkerMoves:0},teamEffects:V(),gameOver:!1,winner:null},{error:r}=await p.from("rooms").update({state:b,language:t}).eq("id",e.id);if(r)throw r;window.location.href=`${B()}/game.html?room=${e.id}&token=${e.guest_token}`})}catch(i){console.error("New game failed:",i),window.alert(s.newGameFailed),l.disabled=!1}}}await A(),o=await K(),o&&(e=await Z(o.id),await A())}export{re as initHome};
