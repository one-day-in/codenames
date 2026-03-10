import{o as x,c as D,e as G,r as M}from"./sanitize-C2FLv090.js";import{g as U,f as k}from"./renderCell-D2QPO2EK.js";import{k as H,c as P,R as h}from"./keepAlive-By6PPzHl.js";import{I as i,g as Q,t as j}from"./icons-CW5xgYQm.js";import{a as W,g as p}from"./url-NB_mxKzZ.js";function K(l,o=130,v="neutral"){const d={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:r,bg:$}=d[v]||d.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${o}x${o}&color=${r}&bgcolor=${$}&data=${encodeURIComponent(l)}"
        width="${o}" height="${o}" />`}async function Z(l){const{roomId:o,token:v}=W();if(!o||!v){window.location.href=p()+"/index.html";return}const d=P(o);d.listen(),H(d);const r=D(o);if(await r.init(),!r.getState()){window.location.href=p()+"/index.html";return}function $(a,s){return`${p()}/${a}.html?room=${o}&token=${v}&team=${s}`}let c=!1,u=!1,q=!1,y=!1,E=new Set;function S(){const a=document.getElementById("fullscreenBtn");a&&(a.innerHTML=document.fullscreenElement?i.minimize:i.maximize)}function g(){const a=l.querySelector(".game__qr-hub");if(!a){c=!1,u=!1;return}const s=c||u;a.classList.toggle("is-open",s),a.classList.toggle("is-pinned",c)}function R(){c=!1,u=!1,g()}function T(a,s,m){const t=j(s),{cells:_}=a,F=_.filter(e=>e.role==="resonant").length,A=_.filter(e=>e.role==="dissonant").length,B=_.filter(e=>e.role==="resonant"&&e.revealed).length,I=_.filter(e=>e.role==="dissonant"&&e.revealed).length,C=a.turn.guideLimit===null?t.turnRoleGuide:t.turnRoleWalker,N=a.gameOver?t.gameFinished:`${Q(a.turn.team,s)} • ${C}`,O=[{team:"dissonant",role:"guide",label:t.guide,presenceRole:h.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:t.dreamwalker,presenceRole:h.WALKER_DISSONANT},{team:"resonant",role:"guide",label:t.guide,presenceRole:h.GUIDE_RESONANT},{team:"resonant",role:"walker",label:t.dreamwalker,presenceRole:h.WALKER_RESONANT}];document.body.className=`team-${a.turn.team}`;const w=new Set(_.map((e,n)=>e.revealed?n:-1).filter(e=>e>=0));l.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${i.arrowLeft}</button>
                    <div class="game__turn-indicator ${a.gameOver?"is-finished":""}">
                        <span class="game__turn-label">${t.currentTurnLabel}</span>
                        <span class="game__turn-value">${N}</span>
                    </div>
                    <div class="game__qr-hub" aria-label="${t.qrHubLabel}">
                        <button class="game__qr-hit btn-flat" type="button" aria-label="${t.showQr}">
                            <span class="game__qr-caption">${t.connectControllers}</span>
                            <span class="game__qr-trigger" aria-hidden="true">${i.qrCode}</span>
                            <span class="game__eye-indicator" aria-hidden="true">
                                <span class="game__eye game__eye--closed">${i.eyeClosed}</span>
                                <span class="game__eye game__eye--open">${i.eye}</span>
                            </span>
                        </button>
                        <div class="game__qr-modal">
                            <div class="game__qr-modal-content">
                                <p class="game__qr-hint">${t.scanToControl}</p>
                                <div class="game__qr-columns">
                                    ${["dissonant","resonant"].map(e=>`
                                        <section class="game__qr-team game__qr-team--${e}">
                                            <h3 class="game__qr-team-title">${e==="dissonant"?t.dissonant:t.resonant}</h3>
                                            <div class="game__qr-cards">
                                                ${O.filter(n=>n.team===e).map(n=>`
                                                    <article class="game__qr-card game__qr-card--${n.role}">
                                                        <div class="game__qr-code-wrap">${K($(n.role,n.team),130,n.team)}</div>
                                                        <p class="game__qr-role">
                                                            <span class="game__qr-role-eye ${m[n.presenceRole]?"is-connected":""}">
                                                                ${m[n.presenceRole]?i.eye:i.eyeClosed}
                                                            </span>
                                                            <span class="game__qr-role-text">${n.label}</span>
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
                            <div class="${U(e)}">
                                <span class="cell__content">${G(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--resonant ${a.turn.team==="resonant"?"game__score-item--active":""}">${B} / ${F}</span>
                    <span class="game__score-item game__score-item--dissonant ${a.turn.team==="dissonant"?"game__score-item--active":""}">${I} / ${A}</span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${i.maximize}</button>
            </footer>
            ${M(a,s)}
        </div>
        `,l.querySelectorAll(".game .grid .cell").forEach((e,n)=>{y&&(!w.has(n)||E.has(n)||e.classList.add("cell--reveal-anim"))}),E=w,y=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=p()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var e,n,L;document.fullscreenElement?(L=document.exitFullscreen)==null||L.call(document):(n=(e=document.documentElement).requestFullscreen)==null||n.call(e)}),S();const f=l.querySelector(".game__qr-hit");f==null||f.addEventListener("mouseenter",()=>{var e;(e=r.getState())!=null&&e.turnTransition||(u=!0,g())}),f==null||f.addEventListener("mouseleave",()=>{var e;(e=r.getState())!=null&&e.turnTransition||(u=!1,g())}),g(),requestAnimationFrame(()=>k(l))}function b(){const a=r.getState(),s=r.getLanguage(),m=d.getPresenceState();if(!a){window.location.href=p()+"/index.html";return}if(a.phase==="lobby"){r.startGame().catch(t=>{console.error("Failed to start game:",t)});return}T(a,s,m)}r.subscribe(b),d.onChange(b),x(()=>k(l)),q||(document.addEventListener("fullscreenchange",S),q=!0),l.addEventListener("click",a=>{var m;if((m=r.getState())!=null&&m.turnTransition)return;if(a.target.closest(".game__qr-hit")){a.preventDefault(),c=!c,g();return}c&&(c=!1,g())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(c||u)&&R()}),b()}export{Z as initGame};
