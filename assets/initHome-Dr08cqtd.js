import{i as G,s as b,g as k}from"./url-XkLgVFj3.js";import{D as B,G as P,L as J,t as L,f as K}from"./fitText-Bd138XTN.js";import{c as Q}from"./boardFactory-CFSUbiZD.js";import{I as E}from"./icons-Bcd_E9sO.js";async function V(){if(!G)return null;const{data:{user:t}}=await b.auth.getUser();return t}async function Z(){if(!G){window.alert("Google auth is not configured for this deployment yet.");return}const{error:t}=await b.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin+window.location.pathname}});t&&console.error("Auth error:",t)}async function ee(){G&&await b.auth.signOut()}async function te(t){if(!G)throw new Error("Supabase is not configured.");const{data:n}=await b.from("rooms").select("id, guest_token, state, language").eq("owner_id",t).maybeSingle();if(n)return{id:n.id,guest_token:n.guest_token,hasActiveGame:!!n.state,language:n.language};const s=ne(),{data:e}=await b.from("rooms").insert({id:s,owner_id:t}).select("id, guest_token").single();return{id:e.id,guest_token:e.guest_token,hasActiveGame:!1,language:null}}function ne(){return typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID().slice(0,8):Math.random().toString(36).slice(2,10)}const S=30*60*1e3,I=25,oe=350,ae=1e4,M=new Map;function C(t){return`nw_words_cache_${t}`}function se(t){const n=M.get(t);if(n&&Date.now()-n.ts<S)return n.words;try{const s=localStorage.getItem(C(t));if(!s)return null;const e=JSON.parse(s);return!(e!=null&&e.ts)||!Array.isArray(e==null?void 0:e.words)||Date.now()-e.ts>=S?null:(M.set(t,{ts:e.ts,words:e.words}),e.words)}catch{return null}}function ie(t,n){const s={ts:Date.now(),words:n};M.set(t,s);try{localStorage.setItem(C(t),JSON.stringify(s))}catch{}}function re(t,n){return Promise.race([t,new Promise((s,e)=>setTimeout(()=>e(new Error("Words request timeout")),n))])}async function A(t="uk",{force:n=!1}={}){if(!n){const w=se(t);if(w&&w.length>=I)return w}const s=b.from("words").select("word").eq("language",t).eq("active",!0).limit(oe),{data:e,error:y}=await re(s,ae),h=(e||[]).map(w=>w.word).filter(Boolean);if(y||h.length<I)throw new Error(`Cannot load words (language: ${t})`);return ie(t,h),h}function ce(){try{return localStorage.getItem("nw_lang")||B}catch{return B}}function le(t){try{localStorage.setItem("nw_lang",t)}catch{}}async function ge(t){let n=ce(),s=null,e=null,y=null,h=!0;function w(o=16){const v=7.140000000000001,$=19*.34,_=[];for(let m=0;m<4;m+=1)for(let g=0;g<4;g+=1)_.push({r:m,c:g});for(let m=_.length-1;m>0;m-=1){const g=Math.floor(Math.random()*(m+1));[_[m],_[g]]=[_[g],_[m]]}return _.slice(0,o).map(({r:m,c:g},O)=>{const F=8+21*(g+.5),q=12+19*(m+.5),z=Math.round(F+(Math.random()*2-1)*v),H=Math.round(q+(Math.random()*2-1)*$),X=Math.round(24+Math.random()*56),Y=(3+Math.random()*2).toFixed(2),R=(Math.random()*2.5).toFixed(2),j=(.3+Math.random()*.5).toFixed(2);return{id:O,size:X,left:z,top:H,period:Y,delay:R,alpha:j}})}const N=w(16);function T(o){return new Promise(i=>{var l;const r=document.createElement("div");r.className="confirm-modal",r.innerHTML=`
                <div class="confirm-modal__backdrop" data-close="cancel"></div>
                <div class="confirm-modal__content" role="dialog" aria-modal="true">
                    <h2 class="confirm-modal__title">${o.newGame}</h2>
                    <p class="confirm-modal__text">${o.confirmNewGame}</p>
                    <div class="confirm-modal__actions">
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--cancel" data-close="cancel">
                            ${o.cancel}
                        </button>
                        <button class="lobby__btn confirm-modal__btn confirm-modal__btn--confirm" data-close="confirm">
                            ${o.confirmNewGameAction}
                        </button>
                    </div>
                </div>
            `;const a=()=>{K(r,".confirm-modal__btn",{widthRatio:.9,heightRatio:.42,minSize:11,step:.25})},c=d=>{document.removeEventListener("keydown",f),window.removeEventListener("resize",a),r.remove(),i(d)},f=d=>{d.key==="Escape"&&c(!1)};r.addEventListener("click",d=>{var v,$;const u=($=(v=d.target)==null?void 0:v.dataset)==null?void 0:$.close;u==="confirm"&&c(!0),u==="cancel"&&c(!1)}),document.addEventListener("keydown",f),window.addEventListener("resize",a),document.body.appendChild(r),requestAnimationFrame(a),(l=r.querySelector(".confirm-modal__btn--confirm"))==null||l.focus()})}function U(o){const i=document.createElement("div");return i.className="newgame-loading-modal",i.innerHTML=`
            <div class="newgame-loading-modal__backdrop"></div>
            <div class="newgame-loading-modal__content">
                <p class="newgame-loading-modal__title">${o.loading}</p>
                <p class="newgame-loading-modal__text">${o.preparingGame}</p>
                <div class="loader__dots">
                    <span></span><span></span><span></span>
                </div>
            </div>
        `,document.body.appendChild(i),()=>i.remove()}function x(o){s&&y!==o&&(y=o,A(o).catch(()=>{y=null}))}async function p(){const o=L(n),i=!!(s&&(e!=null&&e.id)),r=!!(e!=null&&e.hasActiveGame&&(!(e!=null&&e.language)||e.language===n));document.body.className="",t.innerHTML=`
            <div class="app ${h?"":"app--intro"}">

                <div class="lang-toggle">
                    ${J.map(a=>`
                        <button
                            class="lang-toggle__btn ${a.code===n?"lang-toggle__btn--active":""}"
                            data-lang="${a.code}">
                            ${a.label}
                        </button>
                    `).join("")}
                </div>

                <div class="lobby-screen">
                    <div class="home-eyes" aria-hidden="true">
                        ${N.map(a=>`
                            <span class="home-eye"
                                style="--eye-size:${a.size}px;--eye-left:${a.left}%;--eye-top:${a.top}%;--eye-period:${a.period}s;--eye-delay:${a.delay}s;--eye-alpha:${a.alpha};">
                                <span class="home-eye__open">${E.eye}</span>
                                <span class="home-eye__closed">${E.eyeClosed}</span>
                            </span>
                        `).join("")}
                    </div>

                    <div class="lobby__title-wrap">
                        <h1 class="lobby__title">${P}</h1>
                    </div>

                    ${i?`
                            <div class="lobby-screen__actions">
                                ${e!=null&&e.hasActiveGame&&r?`
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

            ${s?`<button class="btn-logout btn-icon" id="logoutBtn" title="${s.email}">${E.user}</button>`:""}
            <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${E.maximize}</button>
        `,W(),x(n),h=!0}function W(o){var i,r,a,c,f;t.querySelectorAll(".lang-toggle__btn").forEach(l=>{l.addEventListener("click",()=>{n=l.dataset.lang,le(n),p()})}),(i=document.getElementById("loginBtn"))==null||i.addEventListener("click",Z),(r=document.getElementById("continueBtn"))==null||r.addEventListener("click",()=>{window.location.href=`${k()}/game.html?room=${e.id}&token=${e.guest_token}`}),(a=document.getElementById("newGameBtn"))==null||a.addEventListener("click",D),(c=document.getElementById("logoutBtn"))==null||c.addEventListener("click",async()=>{await ee(),s=null,e=null,p()}),(f=document.getElementById("fullscreenBtn"))==null||f.addEventListener("click",()=>{var l,d,u;document.fullscreenElement?(u=document.exitFullscreen)==null||u.call(document):(d=(l=document.documentElement).requestFullscreen)==null||d.call(l)})}async function D(){var a;const o=L(n),i=document.getElementById("newGameBtn");if(!i||!(e!=null&&e.id)||e!=null&&e.hasActiveGame&&!await T(o))return;i.disabled=!0;const r=U(o);try{const c=await A(n),{cells:f,startsFirst:l}=Q({size:5,words:c}),d={gameId:((a=crypto.randomUUID)==null?void 0:a.call(crypto))||Math.random().toString(36).slice(2),phase:"lobby",size:5,cells:f,turn:{team:l,guideLimit:null,dreamwalkerMoves:0},gameOver:!1,winner:null},{error:u}=await b.from("rooms").update({state:d,language:n}).eq("id",e.id);if(u)throw u;window.location.href=`${k()}/game.html?room=${e.id}&token=${e.guest_token}`}catch(c){console.error("New game failed:",c),window.alert(o.newGameFailed),i.disabled=!1}finally{r()}}await p(),s=await V(),s&&(e=await te(s.id),await p())}export{ge as initHome};
