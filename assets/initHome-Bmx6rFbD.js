import{i as y,s as g,g as E}from"./url-XkLgVFj3.js";import{D as $,G as T,L as U,t as G,f as D}from"./fitText-CiV-JiRu.js";import{c as O}from"./boardFactory-CFSUbiZD.js";import{I as k}from"./icons-Bcd_E9sO.js";async function q(){if(!y)return null;const{data:{user:t}}=await g.auth.getUser();return t}async function W(){if(!y){window.alert("Google auth is not configured for this deployment yet.");return}const{error:t}=await g.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});t&&console.error("Auth error:",t)}async function F(){y&&await g.auth.signOut()}async function z(t){if(!y)throw new Error("Supabase is not configured.");const{data:n}=await g.from("rooms").select("id, guest_token, state").eq("owner_id",t).maybeSingle();if(n)return{id:n.id,guest_token:n.guest_token,hasActiveGame:!!n.state};const a=H(),{data:e}=await g.from("rooms").insert({id:a,owner_id:t}).select("id, guest_token").single();return{id:e.id,guest_token:e.guest_token,hasActiveGame:!1}}function H(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}const L=30*60*1e3,S=25,R=350,x=1e4,h=new Map;function B(t){return`nw_words_cache_${t}`}function P(t){const n=h.get(t);if(n&&Date.now()-n.ts<L)return n.words;try{const a=localStorage.getItem(B(t));if(!a)return null;const e=JSON.parse(a);return!(e!=null&&e.ts)||!Array.isArray(e==null?void 0:e.words)||Date.now()-e.ts>=L?null:(h.set(t,{ts:e.ts,words:e.words}),e.words)}catch{return null}}function J(t,n){const a={ts:Date.now(),words:n};h.set(t,a);try{localStorage.setItem(B(t),JSON.stringify(a))}catch{}}function K(t,n){return Promise.race([t,new Promise((a,e)=>setTimeout(()=>e(new Error("Words request timeout")),n))])}async function I(t="uk",{force:n=!1}={}){if(!n){const u=P(t);if(u&&u.length>=S)return u}const a=g.from("words").select("word").eq("language",t).eq("active",!0).limit(R),{data:e,error:_}=await K(a,x),w=(e||[]).map(u=>u.word).filter(Boolean);if(_||w.length<S)throw new Error(`Cannot load words (language: ${t})`);return J(t,w),w}function j(){try{return localStorage.getItem("nw_lang")||$}catch{return $}}function Q(t){try{localStorage.setItem("nw_lang",t)}catch{}}async function ee(t){let n=j(),a=null,e=null,_=null,w=!0;function u(o){return new Promise(i=>{var c;const r=document.createElement("div");r.className="confirm-modal",r.innerHTML=`
                <div class="confirm-modal__backdrop" data-close="cancel"></div>
                <div class="confirm-modal__content" role="dialog" aria-modal="true">
                    <h2 class="confirm-modal__title">${o.newGame}</h2>
                    <p class="confirm-modal__text">${o.confirmNewGame}</p>
                    <div class="confirm-modal__actions">
                        <button class="confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                            ${o.cancel}
                        </button>
                        <button class="confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                            ${o.confirmNewGameAction}
                        </button>
                    </div>
                </div>
            `;const d=()=>{D(r,".confirm-modal__btn",{widthRatio:.9,heightRatio:.42,minSize:11,step:.25})},s=l=>{document.removeEventListener("keydown",f),window.removeEventListener("resize",d),r.remove(),i(l)},f=l=>{l.key==="Escape"&&s(!1)};r.addEventListener("click",l=>{var p,v;const m=(v=(p=l.target)==null?void 0:p.dataset)==null?void 0:v.close;m==="confirm"&&s(!0),m==="cancel"&&s(!1)}),document.addEventListener("keydown",f),window.addEventListener("resize",d),document.body.appendChild(r),requestAnimationFrame(d),(c=r.querySelector(".confirm-modal__btn--confirm"))==null||c.focus()})}function A(o){const i=document.createElement("div");return i.className="newgame-loading-modal",i.innerHTML=`
            <div class="newgame-loading-modal__backdrop"></div>
            <div class="newgame-loading-modal__content">
                <p class="newgame-loading-modal__title">${o.loading}</p>
                <p class="newgame-loading-modal__text">${o.preparingGame}</p>
                <div class="loader__dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `,document.body.appendChild(i),()=>i.remove()}function M(o){a&&_!==o&&(_=o,I(o).catch(()=>{_=null}))}async function b(){const o=G(n);document.body.className="",t.innerHTML=`
            <div class="app ${w?"":"app--intro"}">

                <div class="lang-toggle">
                    ${U.map(i=>`
                        <button
                            class="lang-toggle__btn ${i.code===n?"lang-toggle__btn--active":""}"
                            data-lang="${i.code}">
                            ${i.label}
                        </button>
                    `).join("")}
                </div>

                <div class="lobby-screen">
                    <div class="lobby__title-wrap">
                        <h1 class="lobby__title">${T}</h1>
                    </div>

                    ${a?`
                            <div class="lobby-screen__actions">
                                ${e!=null&&e.hasActiveGame?`
                                        <button class="lobby__btn lobby__btn--continue" id="continueBtn">
                                            ${o.continueGame}
                                        </button>
                                      `:""}
                                <button class="lobby__btn lobby__btn--newgame" id="newGameBtn">
                                    ${o.newGame}
                                </button>
                            </div>
                        `:`
                            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                                ${o.signIn}
                            </button>
                        `}

                </div>
            </div>

            ${a?`<button class="btn-profile btn-icon" id="profileBtn" title="${a.email}">${k.user}</button>`:""}
            <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${k.maximize}</button>
        `,N(),M(n),w=!0}function N(o){var i,r,d,s,f;t.querySelectorAll(".lang-toggle__btn").forEach(c=>{c.addEventListener("click",()=>{n=c.dataset.lang,Q(n),b()})}),(i=document.getElementById("loginBtn"))==null||i.addEventListener("click",W),(r=document.getElementById("continueBtn"))==null||r.addEventListener("click",()=>{window.location.href=`${E()}/game.html?room=${e.id}&token=${e.guest_token}`}),(d=document.getElementById("newGameBtn"))==null||d.addEventListener("click",C),(s=document.getElementById("profileBtn"))==null||s.addEventListener("click",async()=>{await F(),a=null,e=null,b()}),(f=document.getElementById("fullscreenBtn"))==null||f.addEventListener("click",()=>{var c,l,m;document.fullscreenElement?(m=document.exitFullscreen)==null||m.call(document):(l=(c=document.documentElement).requestFullscreen)==null||l.call(c)})}async function C(){var d;const o=G(n),i=document.getElementById("newGameBtn");if(!i||!(e!=null&&e.id)||e!=null&&e.hasActiveGame&&!await u(o))return;i.disabled=!0;const r=A(o);try{const s=await I(n),{cells:f,startsFirst:c}=O({size:5,words:s}),l={gameId:((d=crypto.randomUUID)==null?void 0:d.call(crypto))||Math.random().toString(36).slice(2),phase:"lobby",size:5,cells:f,turn:{team:c,guideLimit:null,dreamwalkerMoves:0},gameOver:!1,winner:null},{error:m}=await g.from("rooms").update({state:l,language:n}).eq("id",e.id);if(m)throw m;window.location.href=`${E()}/game.html?room=${e.id}&token=${e.guest_token}`}catch(s){console.error("New game failed:",s),window.alert(o.newGameFailed),i.disabled=!1}finally{r()}}await b(),a=await q(),a&&(e=await z(a.id),await b())}export{ee as initHome};
