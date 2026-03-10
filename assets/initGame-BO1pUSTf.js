import{o as O,c as N,e as D,r as G}from"./sanitize-C2FLv090.js";import{g as M,f as R}from"./renderCell-D2QPO2EK.js";import{k as U,c as H,R as v}from"./keepAlive-By6PPzHl.js";import{I as i,t as P}from"./icons-CW5xgYQm.js";import{a as Q,g as p}from"./url-NB_mxKzZ.js";function j(r,l=130,$="neutral"){const d={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:s,bg:h}=d[$]||d.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${l}x${l}&color=${s}&bgcolor=${h}&data=${encodeURIComponent(r)}"
        width="${l}" height="${l}" />`}async function X(r){const{roomId:l,token:$}=Q();if(!l||!$){window.location.href=p()+"/index.html";return}const d=H(l);d.listen(),U(d);const s=N(l);if(await s.init(),!s.getState()){window.location.href=p()+"/index.html";return}function h(n,c){return`${p()}/${n}.html?room=${l}&token=${$}&team=${c}`}let o=!1,u=!1,q=!1,y=!1,E=new Set;function w(){const n=document.getElementById("fullscreenBtn");n&&(n.innerHTML=document.fullscreenElement?i.minimize:i.maximize)}function g(){const n=r.querySelector(".game__qr-hub");if(!n){o=!1,u=!1;return}const c=o||u;n.classList.toggle("is-open",c),n.classList.toggle("is-pinned",o)}function F(){o=!1,u=!1,g()}function T(n,c,m){const a=P(c),{cells:_}=n,A=_.filter(e=>e.role==="resonant").length,B=_.filter(e=>e.role==="dissonant").length,I=_.filter(e=>e.role==="resonant"&&e.revealed).length,x=_.filter(e=>e.role==="dissonant"&&e.revealed).length,S=n.turn.guideLimit===null?a.turnRoleGuide:a.turnRoleWalker,C=[{team:"dissonant",role:"guide",label:a.guide,presenceRole:v.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:a.dreamwalker,presenceRole:v.WALKER_DISSONANT},{team:"resonant",role:"guide",label:a.guide,presenceRole:v.GUIDE_RESONANT},{team:"resonant",role:"walker",label:a.dreamwalker,presenceRole:v.WALKER_RESONANT}];document.body.className=`team-${n.turn.team}`;const L=new Set(_.map((e,t)=>e.revealed?t:-1).filter(e=>e>=0));r.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${i.arrowLeft}</button>
                    <div class="game__qr-hub" aria-label="${a.qrHubLabel}">
                        <button class="game__qr-hit btn-flat" type="button" aria-label="${a.showQr}">
                            <span class="game__qr-caption">${a.connectControllers}</span>
                            <span class="game__qr-trigger" aria-hidden="true">${i.qrCode}</span>
                            <span class="game__eye-indicator" aria-hidden="true">
                                <span class="game__eye game__eye--closed">${i.eyeClosed}</span>
                                <span class="game__eye game__eye--open">${i.eye}</span>
                            </span>
                        </button>
                        <div class="game__qr-modal">
                            <div class="game__qr-modal-content">
                                <p class="game__qr-hint">${a.scanToControl}</p>
                                <div class="game__qr-columns">
                                    ${["dissonant","resonant"].map(e=>`
                                        <section class="game__qr-team game__qr-team--${e}">
                                            <h3 class="game__qr-team-title">${e==="dissonant"?a.dissonant:a.resonant}</h3>
                                            <div class="game__qr-cards">
                                                ${C.filter(t=>t.team===e).map(t=>`
                                                    <article class="game__qr-card game__qr-card--${t.role}">
                                                        <div class="game__qr-code-wrap">${j(h(t.role,t.team),130,t.team)}</div>
                                                        <p class="game__qr-role">
                                                            <span class="game__qr-role-eye ${m[t.presenceRole]?"is-connected":""}">
                                                                ${m[t.presenceRole]?i.eye:i.eyeClosed}
                                                            </span>
                                                            <span class="game__qr-role-text">${t.label}</span>
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
                        ${_.map(e=>`
                            <div class="${M(e)}">
                                <span class="cell__content">${D(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--dissonant ${n.turn.team==="dissonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${x} / ${B}</span>
                        ${n.turn.team==="dissonant"?`<span class="game__score-turn-inline">${n.gameOver?a.gameFinished:`${a.turn}: ${S}`}</span>`:""}
                    </span>
                    <span class="game__score-item game__score-item--resonant ${n.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${I} / ${A}</span>
                        ${n.turn.team==="resonant"?`<span class="game__score-turn-inline">${n.gameOver?a.gameFinished:`${a.turn}: ${S}`}</span>`:""}
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${i.maximize}</button>
            </footer>
            ${G(n,c)}
        </div>
        `,r.querySelectorAll(".game .grid .cell").forEach((e,t)=>{y&&(!L.has(t)||E.has(t)||e.classList.add("cell--reveal-anim"))}),E=L,y=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=p()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var e,t,k;document.fullscreenElement?(k=document.exitFullscreen)==null||k.call(document):(t=(e=document.documentElement).requestFullscreen)==null||t.call(e)}),w();const f=r.querySelector(".game__qr-hit");f==null||f.addEventListener("mouseenter",()=>{var e;(e=s.getState())!=null&&e.turnTransition||(u=!0,g())}),f==null||f.addEventListener("mouseleave",()=>{var e;(e=s.getState())!=null&&e.turnTransition||(u=!1,g())}),g(),requestAnimationFrame(()=>R(r))}function b(){const n=s.getState(),c=s.getLanguage(),m=d.getPresenceState();if(!n){window.location.href=p()+"/index.html";return}if(n.phase==="lobby"){s.startGame().catch(a=>{console.error("Failed to start game:",a)});return}T(n,c,m)}s.subscribe(b),d.onChange(b),O(()=>R(r)),q||(document.addEventListener("fullscreenchange",w),q=!0),r.addEventListener("click",n=>{var m;if((m=s.getState())!=null&&m.turnTransition)return;if(n.target.closest(".game__qr-hit")){n.preventDefault(),o=!o,g();return}o&&(o=!1,g())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&(o||u)&&F()}),b()}export{X as initGame};
