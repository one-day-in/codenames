import{o as Q,c as W,g as z,e as J,r as V,f as G}from"./sanitize-CWtCII0P.js";import{k as X,c as Y,A as Z,R as m}from"./keepAlive-D4SXiUrX.js";import{a as ee,g as y,I as i,G as ae,b as ne,t as T}from"./icons-87ROm5CI.js";function C(c,h=130,u="neutral"){const $={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:_,bg:o}=$[u]||$.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${h}x${h}&color=${_}&bgcolor=${o}&data=${encodeURIComponent(c)}"
        width="${h}" height="${h}" />`}async function le(c){const{roomId:u,token:$}=ee();if(!u||!$){window.location.href=y()+"/index.html";return}const _=Y(u);_.listen(),X(_);const o=W(u);if(await o.init(),!o.getState()){window.location.href=y()+"/index.html";return}function b(e,t){return`${y()}/${e}.html?room=${u}&token=${$}&team=${t}`}let d=!1,g=!1,S=!1,A=!1,k=new Set,E=!1,L=null,R=null,w=!1;function N(){const e=document.getElementById("fullscreenBtn");e&&(e.innerHTML=document.fullscreenElement?i.minimize:i.maximize)}function p(){const e=c.querySelector(".game__qr-hub");if(!e){d=!1,g=!1;return}const t=d||g;e.classList.toggle("is-open",t),e.classList.toggle("is-pinned",d)}function B(){d=!1,g=!1,p()}function x(e){!e||R===e||(R=e,E=!0,L&&clearTimeout(L),q(),L=setTimeout(()=>{E=!1,q()},280))}function D(e,t){const r=T(t);return`
            <div class="qr-panel">
                ${[{team:"dissonant",title:r.dissonant,cards:[{role:m.GUIDE_DISSONANT,url:b("guide","dissonant"),label:r.guide},{role:m.WALKER_DISSONANT,url:b("walker","dissonant"),label:r.dreamwalker}]},{team:"resonant",title:r.resonant,cards:[{role:m.GUIDE_RESONANT,url:b("guide","resonant"),label:r.guide},{role:m.WALKER_RESONANT,url:b("walker","resonant"),label:r.dreamwalker}]}].map(l=>`
                    <div class="qr-panel__group qr-panel__group--${l.team}">
                        <p class="qr-panel__group-title">${l.title}</p>
                        <div class="qr-panel__group-cards">
                            ${l.cards.map(f=>`
                                <div class="qr-panel__block ${e[f.role]?"qr-panel__block--connected":""}">
                                    <div class="qr-wrapper">${C(f.url,130,l.team)}</div>
                                    <p class="qr-panel__label">${f.label}</p>
                                    ${e[f.role]?'<div class="qr-panel__check">✓</div>':""}
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `).join("")}
            </div>`}function M(e,t){const r=T(t),n=Z.filter(l=>e[l]).length;document.body.className="",c.innerHTML=`
            <div class="app">
                <div class="waiting-screen">
                    <h1 class="waiting-screen__title">${ae}</h1>
                    ${D(e,t)}
                    <p>${n} / 4 ${r.waitingPlayers}</p>
                </div>
            </div>`}function H(e,t,r){const n=T(t),{cells:l}=e,f=l.filter(a=>a.role==="resonant").length,U=l.filter(a=>a.role==="dissonant").length,P=l.filter(a=>a.role==="resonant"&&a.revealed).length,j=l.filter(a=>a.role==="dissonant"&&a.revealed).length,I=e.turn.guideLimit===null?n.turnRoleGuide:n.turnRoleWalker,K=[{team:"dissonant",role:"guide",label:n.guide,presenceRole:m.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:n.dreamwalker,presenceRole:m.WALKER_DISSONANT},{team:"resonant",role:"guide",label:n.guide,presenceRole:m.GUIDE_RESONANT},{team:"resonant",role:"walker",label:n.dreamwalker,presenceRole:m.WALKER_RESONANT}];document.body.className=`team-${e.turn.team}`;const O=new Set(l.map((a,s)=>a.revealed?s:-1).filter(a=>a>=0));c.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${i.arrowLeft}</button>
                    <div class="game__qr-hub" aria-label="${n.qrHubLabel}">
                        <button class="game__qr-hit btn-flat" type="button" aria-label="${n.showQr}">
                            <span class="game__qr-caption">${n.connectControllers}</span>
                            <span class="game__qr-trigger" aria-hidden="true">${i.qrCode}</span>
                            <span class="game__eye-indicator" aria-hidden="true">
                                <span class="game__eye game__eye--closed">${i.eyeClosed}</span>
                                <span class="game__eye game__eye--open">${i.eye}</span>
                            </span>
                        </button>
                        <div class="game__qr-modal">
                            <div class="game__qr-modal-content">
                                <p class="game__qr-hint">${n.scanToControl}</p>
                                <div class="game__qr-columns">
                                    ${["dissonant","resonant"].map(a=>`
                                        <section class="game__qr-team game__qr-team--${a}">
                                            <h3 class="game__qr-team-title">${a==="dissonant"?n.dissonant:n.resonant}</h3>
                                            <div class="game__qr-cards">
                                                ${K.filter(s=>s.team===a).map(s=>`
                                                    <article class="game__qr-card game__qr-card--${s.role}">
                                                        <div class="game__qr-code-wrap">${C(b(s.role,s.team),130,s.team)}</div>
                                                        <p class="game__qr-role">
                                                            <span class="game__qr-role-eye ${r[s.presenceRole]?"is-connected":""}">
                                                                ${r[s.presenceRole]?i.eye:i.eyeClosed}
                                                            </span>
                                                            <span class="game__qr-role-text">${s.label}</span>
                                                        </p>
                                                    </article>
                                                `).join("")}
                                            </div>
                                        </section>
                                    `).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="game">
                    <div class="grid grid--5">
                        ${l.map(a=>`
                            <div class="${z(a,{forceReveal:E})}">
                                <span class="cell__content">${J(a.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--dissonant ${e.turn.team==="dissonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${j} / ${U}</span>
                        ${e.turn.team==="dissonant"?`<span class="game__score-turn-inline">${e.gameOver?n.gameFinished:I}</span>`:""}
                    </span>
                    <span class="game__score-center ${e.gameOver?"game__score-center--finished":""}">
                        <span class="game__score-arrow game__score-arrow--${e.turn.team}" aria-hidden="true">
                            ${e.turn.team==="dissonant"?i.arrowLeft:i.arrowRight}
                        </span>
                        <span class="game__score-center-text">${e.gameOver?n.gameFinished:ne(e.turn.team,t)}</span>
                    </span>
                    <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${P} / ${f}</span>
                        ${e.turn.team==="resonant"?`<span class="game__score-turn-inline">${e.gameOver?n.gameFinished:I}</span>`:""}
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${i.maximize}</button>
            </footer>
            ${V(e,t)}
        </div>
        `,c.querySelectorAll(".game .grid .cell").forEach((a,s)=>{A&&(!O.has(s)||k.has(s)||a.classList.add("cell--reveal-anim"))}),k=O,A=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=y()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var a,s,F;document.fullscreenElement?(F=document.exitFullscreen)==null||F.call(document):(s=(a=document.documentElement).requestFullscreen)==null||s.call(a)}),N();const v=c.querySelector(".game__qr-hit");v==null||v.addEventListener("mouseenter",()=>{var a;(a=o.getState())!=null&&a.turnTransition||(g=!0,p())}),v==null||v.addEventListener("mouseleave",()=>{var a;(a=o.getState())!=null&&a.turnTransition||(g=!1,p())}),p(),requestAnimationFrame(()=>G(c))}function q(){var n;const e=o.getState(),t=o.getLanguage(),r=_.getPresenceState();if(((n=e==null?void 0:e.turnTransition)==null?void 0:n.kind)==="anomaly"&&e.turnTransition.anomalyKey==="glitch"&&x(e.turnTransition.id),!e){window.location.href=y()+"/index.html";return}if(e.phase==="lobby"){M(r,t),w||(w=!0,o.startGame().catch(l=>{console.error("Failed to start game:",l)}).finally(()=>{w=!1}));return}H(e,t,r)}o.subscribe(q),_.onChange(q),Q(()=>G(c)),S||(document.addEventListener("fullscreenchange",N),S=!0),c.addEventListener("click",e=>{var r;if((r=o.getState())!=null&&r.turnTransition)return;if(e.target.closest(".game__qr-hit")){e.preventDefault(),d=!d,p();return}d&&(d=!1,p())}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(d||g)&&B()}),q()}export{le as initGame};
