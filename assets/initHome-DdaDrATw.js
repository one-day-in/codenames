import{i as B,s as v,a as F,p as z,D as M,G as R,I as p,L as P,t as I,g as L,l as x}from"./icons-B2SvFG-W.js";async function V(){if(!B)return null;const{data:{user:e}}=await v.auth.getUser();return e}async function K(){if(!B){window.alert("Google auth is not configured for this deployment yet.");return}const{error:e}=await v.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});e&&console.error("Auth error:",e)}async function J(){B&&await v.auth.signOut()}async function Q(e){if(!B)throw new Error("Supabase is not configured.");const{data:t}=await v.from("rooms").select("id, guest_token, state, language").eq("owner_id",e).maybeSingle();if(t)return{id:t.id,guest_token:t.guest_token,hasActiveGame:!!t.state,language:t.language,state:t.state??null};const s=Z(),{data:n}=await v.from("rooms").insert({id:s,owner_id:e}).select("id, guest_token").single();return{id:n.id,guest_token:n.guest_token,hasActiveGame:!1,language:null,state:null}}function Z(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}function nn(e){const t=e*e,s=Math.random()<.5?"resonant":"dissonant",n=Math.ceil(t/3),g=n-1,$=s==="resonant"?n:g,r=s==="dissonant"?n:g,f=1,E=t-$-r-f,k=[...Array($).fill("resonant"),...Array(r).fill("dissonant"),...Array(E).fill("anomaly"),...Array(f).fill("nightmare")];return{roles:F(k),startsFirst:s}}const tn={resonant:9,dissonant:9,anomaly:7,nightmare:1};function en(e){return F(Array.from({length:e},(t,s)=>s+1))}function on({size:e,words:t}){const{roles:s,startsFirst:n}=nn(e),g=Object.fromEntries(Object.entries(tn).map(([r,f])=>[r,en(f)]));return{cells:z(t,e*e).map((r,f)=>{const E=s[f],k=g[E].shift()??1;return{word:r,role:E,imageVariant:k,revealed:!1}}),startsFirst:n}}function an(){return window.__nwLoader||null}async function C(e){const t=an();return t!=null&&t.wrap?await t.wrap(e):await e()}function sn(){try{return localStorage.getItem("nw_lang")||M}catch{return M}}function ln(e){try{localStorage.setItem("nw_lang",e)}catch{}}async function rn(e){let t=sn(),s=null,n=null,g=null,$=!0,r=null;function f(a=16){const h=7.140000000000001,A=19*.34,w=[];for(let u=0;u<4;u+=1)for(let y=0;y<4;y+=1)w.push({r:u,c:y});for(let u=w.length-1;u>0;u-=1){const y=Math.floor(Math.random()*(u+1));[w[u],w[y]]=[w[y],w[u]]}return w.slice(0,a).map(({r:u,c:y},O)=>{const j=8+21*(y+.5),D=12+19*(u+.5),H=Math.round(j+(Math.random()*2-1)*h),W=Math.round(D+(Math.random()*2-1)*A),X=Math.round(24+Math.random()*56),Y=(3+Math.random()*2).toFixed(2),q=(Math.random()*2.5).toFixed(2),T=(.3+Math.random()*.5).toFixed(2);return{id:O,size:X,left:H,top:W,period:Y,delay:q,alpha:T}})}const E=f(16);function k(a){return new Promise(l=>{var _;const i=document.createElement("div");i.className="confirm-modal",i.innerHTML=`
                <div class="confirm-modal__backdrop" data-close="cancel"></div>
                <div class="confirm-modal__content" role="dialog" aria-modal="true">
                    <h2 class="confirm-modal__title">${a.newGame}</h2>
                    <p class="confirm-modal__text">${a.confirmNewGame}</p>
                    <div class="confirm-modal__actions">
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                            ${a.confirmNewGameAction}
                        </button>
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                            ${a.cancel}
                        </button>
                    </div>
                </div>
            `;const o=c=>{document.removeEventListener("keydown",b),i.remove(),l(c)},b=c=>{c.key==="Escape"&&o(!1)};i.addEventListener("click",c=>{var d,h;const m=(h=(d=c.target)==null?void 0:d.dataset)==null?void 0:h.close;m==="confirm"&&o(!0),m==="cancel"&&o(!1)}),document.addEventListener("keydown",b),document.body.appendChild(i),(_=i.querySelector(".confirm-modal__btn--confirm"))==null||_.focus()})}function S(a){s&&g!==a&&(g=a,x(a).catch(()=>{g=null}))}async function G(){const a=I(t),l=!!(s&&(n!=null&&n.id)),i=!!(n!=null&&n.hasActiveGame&&(!(n!=null&&n.language)||n.language===t));document.body.className="",e.innerHTML=`
            <div class="app ${$?"":"app--intro"}">

                <div class="lang-toggle">
                    ${P.map(o=>`
                        <button
                            class="lang-toggle__btn ${o.code===t?"lang-toggle__btn--active":""}"
                            data-lang="${o.code}">
                            ${o.label}
                        </button>
                    `).join("")}
                </div>

                <div class="lobby-screen">
                    <div class="home-eyes" aria-hidden="true">
                        ${E.map(o=>`
                            <span class="home-eye"
                                style="--eye-size:${o.size}px;--eye-left:${o.left}%;--eye-top:${o.top}%;--eye-period:${o.period}s;--eye-delay:${o.delay}s;--eye-alpha:${o.alpha};">
                                <span class="home-eye__open">${p.eye}</span>
                                <span class="home-eye__closed">${p.eyeClosed}</span>
                            </span>
                        `).join("")}
                    </div>

                    <div class="lobby__title-wrap">
                        <h1 class="lobby__title">${R}</h1>
                    </div>

                    ${l?`
                            <div class="lobby-screen__actions">
                                ${n!=null&&n.hasActiveGame&&i?`
                                        <button class="lobby__btn lobby__btn--continue" id="continueBtn">
                                            ${a.continueGame}
                                        </button>
                                      `:""}
                                <button class="lobby__btn lobby__btn--newgame" id="newGameBtn">
                                    ${a.newGame}
                                </button>
                                <button class="lobby__btn lobby__btn--sandbox" id="sandboxBtn">
                                    ${a.sandboxBoard}
                                </button>
                            </div>
                        `:`
                            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                                <span class="lobby__btn-text">${a.signIn}</span>
                                <span class="lobby__btn-google-icon">${p.google}</span>
                            </button>
                        `}

                </div>
            </div>

            ${s?`<button class="btn-logout btn-icon" id="logoutBtn" title="${s.email}">${p.user}</button>`:""}
            <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${p.maximize}</button>
        `,U(),S(t),$=!0}function U(a){var o,b,_,c,m;e.querySelectorAll(".lang-toggle__btn").forEach(d=>{d.addEventListener("click",()=>{t=d.dataset.lang,ln(t),G()})}),(o=document.getElementById("loginBtn"))==null||o.addEventListener("click",K),(b=document.getElementById("continueBtn"))==null||b.addEventListener("click",()=>{window.location.href=`${L()}/game.html?room=${n.id}&token=${n.guest_token}`}),(_=document.getElementById("newGameBtn"))==null||_.addEventListener("click",N),(c=document.getElementById("sandboxBtn"))==null||c.addEventListener("click",()=>{!(n!=null&&n.id)||!(n!=null&&n.guest_token)||(window.location.href=`${L()}/sandbox.html?room=${n.id}&token=${n.guest_token}`)}),(m=document.getElementById("logoutBtn"))==null||m.addEventListener("click",async()=>{await C(async()=>{if(n!=null&&n.id)try{await v.from("rooms").update({state:null}).eq("id",n.id)}catch(d){console.error("Failed to clear room on logout:",d)}await J(),s=null,n=null,G()})});const l=document.getElementById("fullscreenBtn"),i=()=>{l&&(l.innerHTML=document.fullscreenElement?p.minimize:p.maximize)};i(),r&&document.removeEventListener("fullscreenchange",r),r=()=>i(),document.addEventListener("fullscreenchange",r),l==null||l.addEventListener("click",()=>{var d,h,A;document.fullscreenElement?(A=document.exitFullscreen)==null||A.call(document):(h=(d=document.documentElement).requestFullscreen)==null||h.call(d)})}async function N(){const a=I(t),l=document.getElementById("newGameBtn");if(!(!l||!(n!=null&&n.id))&&!(n!=null&&n.hasActiveGame&&!await k(a))){l.disabled=!0;try{await C(async()=>{var m;const i=await x(t),{cells:o,startsFirst:b}=on({size:5,words:i}),_={gameId:((m=crypto.randomUUID)==null?void 0:m.call(crypto))||Math.random().toString(36).slice(2),phase:"lobby",size:5,cells:o,turn:{team:b,guideLimit:null,dreamwalkerMoves:0},gameOver:!1,winner:null},{error:c}=await v.from("rooms").update({state:_,language:t}).eq("id",n.id);if(c)throw c;window.location.href=`${L()}/game.html?room=${n.id}&token=${n.guest_token}`})}catch(i){console.error("New game failed:",i),window.alert(a.newGameFailed),l.disabled=!1}}}await G(),s=await V(),s&&(n=await Q(s.id),await G())}export{rn as initHome};
