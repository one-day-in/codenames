import{i as E,s as f,g as k,l as M}from"./url-NB_mxKzZ.js";import{D as I,G as P,I as w,L as J,t as x,g as Q}from"./icons-CW5xgYQm.js";import{c as V}from"./boardFactory-cNgSMpV-.js";async function Z(){if(!E)return null;const{data:{user:s}}=await f.auth.getUser();return s}async function ee(){if(!E){window.alert("Google auth is not configured for this deployment yet.");return}const{error:s}=await f.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});s&&console.error("Auth error:",s)}async function ne(){E&&await f.auth.signOut()}async function te(s){if(!E)throw new Error("Supabase is not configured.");const{data:o}=await f.from("rooms").select("id, guest_token, state, language").eq("owner_id",s).maybeSingle();if(o)return{id:o.id,guest_token:o.guest_token,hasActiveGame:!!o.state,language:o.language,state:o.state??null};const u=ae(),{data:e}=await f.from("rooms").insert({id:u,owner_id:s}).select("id, guest_token").single();return{id:e.id,guest_token:e.guest_token,hasActiveGame:!1,language:null,state:null}}function ae(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}function oe(){return window.__nwLoader||null}async function A(s){const o=oe();return o!=null&&o.wrap?await o.wrap(s):await s()}function ie(){try{return localStorage.getItem("nw_lang")||I}catch{return I}}function se(s){try{localStorage.setItem("nw_lang",s)}catch{}}async function de(s){let o=ie(),u=null,e=null,G=null,L=!0,p=null,v=null;function F(n=16){const _=7.140000000000001,$=19*.34,h=[];for(let d=0;d<4;d+=1)for(let b=0;b<4;b+=1)h.push({r:d,c:b});for(let d=h.length-1;d>0;d-=1){const b=Math.floor(Math.random()*(d+1));[h[d],h[b]]=[h[b],h[d]]}return h.slice(0,n).map(({r:d,c:b},R)=>{const W=8+21*(b+.5),q=12+19*(d+.5),O=Math.round(W+(Math.random()*2-1)*_),X=Math.round(q+(Math.random()*2-1)*$),Y=Math.round(24+Math.random()*56),D=(3+Math.random()*2).toFixed(2),j=(Math.random()*2.5).toFixed(2),K=(.3+Math.random()*.5).toFixed(2);return{id:R,size:Y,left:O,top:X,period:D,delay:j,alpha:K}})}const N=F(16);function C(n){const a=e==null?void 0:e.state;if(!a||!a.turn)return"";const i=a.turn.team,t=Q(i,o),m=a.turn.guideLimit===null?n.turnRoleGuide:n.turnRoleWalker,c=a.gameOver,l=c?n.gameFinished:`${t} • ${m}`;return`
            <div class="home-turn-indicator ${c?"is-finished":""}">
                <span class="home-turn-indicator__label">${n.currentTurnLabel}</span>
                <span class="home-turn-indicator__value">${l}</span>
            </div>
        `}function B(){v&&(f.removeChannel(v),v=null)}function S(){e!=null&&e.id&&(B(),v=f.channel(`home-room-${e.id}`).on("postgres_changes",{event:"*",schema:"public",table:"rooms",filter:`id=eq.${e.id}`},n=>{var a,i,t;e={...e,hasActiveGame:!!((a=n.new)!=null&&a.state),language:((i=n.new)==null?void 0:i.language)??e.language,state:((t=n.new)==null?void 0:t.state)??null},y()}).subscribe())}function U(n){return new Promise(a=>{var c;const i=document.createElement("div");i.className="confirm-modal",i.innerHTML=`
                <div class="confirm-modal__backdrop" data-close="cancel"></div>
                <div class="confirm-modal__content" role="dialog" aria-modal="true">
                    <h2 class="confirm-modal__title">${n.newGame}</h2>
                    <p class="confirm-modal__text">${n.confirmNewGame}</p>
                    <div class="confirm-modal__actions">
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                            ${n.confirmNewGameAction}
                        </button>
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                            ${n.cancel}
                        </button>
                    </div>
                </div>
            `;const t=l=>{document.removeEventListener("keydown",m),i.remove(),a(l)},m=l=>{l.key==="Escape"&&t(!1)};i.addEventListener("click",l=>{var r,_;const g=(_=(r=l.target)==null?void 0:r.dataset)==null?void 0:_.close;g==="confirm"&&t(!0),g==="cancel"&&t(!1)}),document.addEventListener("keydown",m),document.body.appendChild(i),(c=i.querySelector(".confirm-modal__btn--confirm"))==null||c.focus()})}function T(n){u&&G!==n&&(G=n,M(n).catch(()=>{G=null}))}async function y(){const n=x(o),a=!!(u&&(e!=null&&e.id)),i=!!(e!=null&&e.hasActiveGame&&(!(e!=null&&e.language)||e.language===o));document.body.className="",s.innerHTML=`
            <div class="app ${L?"":"app--intro"}">

                <div class="lang-toggle">
                    ${J.map(t=>`
                        <button
                            class="lang-toggle__btn ${t.code===o?"lang-toggle__btn--active":""}"
                            data-lang="${t.code}">
                            ${t.label}
                        </button>
                    `).join("")}
                </div>

                <div class="lobby-screen">
                    <div class="home-eyes" aria-hidden="true">
                        ${N.map(t=>`
                            <span class="home-eye"
                                style="--eye-size:${t.size}px;--eye-left:${t.left}%;--eye-top:${t.top}%;--eye-period:${t.period}s;--eye-delay:${t.delay}s;--eye-alpha:${t.alpha};">
                                <span class="home-eye__open">${w.eye}</span>
                                <span class="home-eye__closed">${w.eyeClosed}</span>
                            </span>
                        `).join("")}
                    </div>

                    <div class="lobby__title-wrap">
                        <h1 class="lobby__title">${P}</h1>
                    </div>

                    ${a?`
                            ${C(n)}
                            <div class="lobby-screen__actions">
                                ${e!=null&&e.hasActiveGame&&i?`
                                        <button class="lobby__btn lobby__btn--continue" id="continueBtn">
                                            ${n.continueGame}
                                        </button>
                                      `:""}
                                <button class="lobby__btn lobby__btn--newgame" id="newGameBtn">
                                    ${n.newGame}
                                </button>
                                <button class="lobby__btn lobby__btn--sandbox" id="sandboxBtn">
                                    ${n.sandboxBoard}
                                </button>
                            </div>
                        `:`
                            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                                <span class="lobby__btn-text">${n.signIn}</span>
                                <span class="lobby__btn-google-icon">${w.google}</span>
                            </button>
                        `}

                </div>
            </div>

            ${u?`<button class="btn-logout btn-icon" id="logoutBtn" title="${u.email}">${w.user}</button>`:""}
            <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${w.maximize}</button>
        `,z(),T(o),L=!0}function z(n){var t,m,c,l,g;s.querySelectorAll(".lang-toggle__btn").forEach(r=>{r.addEventListener("click",()=>{o=r.dataset.lang,se(o),y()})}),(t=document.getElementById("loginBtn"))==null||t.addEventListener("click",ee),(m=document.getElementById("continueBtn"))==null||m.addEventListener("click",()=>{window.location.href=`${k()}/game.html?room=${e.id}&token=${e.guest_token}`}),(c=document.getElementById("newGameBtn"))==null||c.addEventListener("click",H),(l=document.getElementById("sandboxBtn"))==null||l.addEventListener("click",()=>{!(e!=null&&e.id)||!(e!=null&&e.guest_token)||(window.location.href=`${k()}/sandbox.html?room=${e.id}&token=${e.guest_token}`)}),(g=document.getElementById("logoutBtn"))==null||g.addEventListener("click",async()=>{await A(async()=>{if(e!=null&&e.id)try{await f.from("rooms").update({state:null}).eq("id",e.id)}catch(r){console.error("Failed to clear room on logout:",r)}await ne(),B(),u=null,e=null,y()})});const a=document.getElementById("fullscreenBtn"),i=()=>{a&&(a.innerHTML=document.fullscreenElement?w.minimize:w.maximize)};i(),p&&document.removeEventListener("fullscreenchange",p),p=()=>i(),document.addEventListener("fullscreenchange",p),a==null||a.addEventListener("click",()=>{var r,_,$;document.fullscreenElement?($=document.exitFullscreen)==null||$.call(document):(_=(r=document.documentElement).requestFullscreen)==null||_.call(r)})}async function H(){const n=x(o),a=document.getElementById("newGameBtn");if(!(!a||!(e!=null&&e.id))&&!(e!=null&&e.hasActiveGame&&!await U(n))){a.disabled=!0;try{await A(async()=>{var g;const i=await M(o),{cells:t,startsFirst:m}=V({size:5,words:i}),c={gameId:((g=crypto.randomUUID)==null?void 0:g.call(crypto))||Math.random().toString(36).slice(2),phase:"lobby",size:5,cells:t,turn:{team:m,guideLimit:null,dreamwalkerMoves:0},gameOver:!1,winner:null},{error:l}=await f.from("rooms").update({state:c,language:o}).eq("id",e.id);if(l)throw l;window.location.href=`${k()}/game.html?room=${e.id}&token=${e.guest_token}`})}catch(i){console.error("New game failed:",i),window.alert(n.newGameFailed),a.disabled=!1}}}await y(),u=await Z(),u&&(e=await te(u.id),S(),await y())}export{de as initHome};
