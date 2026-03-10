import{o as x,c as N,e as O,r as D}from"./sanitize-C2FLv090.js";import{g as G,f as k}from"./renderCell-D2QPO2EK.js";import{k as M,c as U,R as h}from"./keepAlive-By6PPzHl.js";import{I as i,t as H}from"./icons-CW5xgYQm.js";import{a as P,g as p}from"./url-NB_mxKzZ.js";function Q(r,l=130,v="neutral"){const d={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:s,bg:b}=d[v]||d.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${l}x${l}&color=${s}&bgcolor=${b}&data=${encodeURIComponent(r)}"
        width="${l}" height="${l}" />`}async function V(r){const{roomId:l,token:v}=P();if(!l||!v){window.location.href=p()+"/index.html";return}const d=U(l);d.listen(),M(d);const s=N(l);if(await s.init(),!s.getState()){window.location.href=p()+"/index.html";return}function b(a,c){return`${p()}/${a}.html?room=${l}&token=${v}&team=${c}`}let o=!1,u=!1,q=!1,y=!1,E=new Set;function w(){const a=document.getElementById("fullscreenBtn");a&&(a.innerHTML=document.fullscreenElement?i.minimize:i.maximize)}function g(){const a=r.querySelector(".game__qr-hub");if(!a){o=!1,u=!1;return}const c=o||u;a.classList.toggle("is-open",c),a.classList.toggle("is-pinned",o)}function R(){o=!1,u=!1,g()}function T(a,c,m){const t=H(c),{cells:_}=a,A=_.filter(e=>e.role==="resonant").length,B=_.filter(e=>e.role==="dissonant").length,F=_.filter(e=>e.role==="resonant"&&e.revealed).length,I=_.filter(e=>e.role==="dissonant"&&e.revealed).length,C=[{team:"dissonant",role:"guide",label:t.guide,presenceRole:h.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:t.dreamwalker,presenceRole:h.WALKER_DISSONANT},{team:"resonant",role:"guide",label:t.guide,presenceRole:h.GUIDE_RESONANT},{team:"resonant",role:"walker",label:t.dreamwalker,presenceRole:h.WALKER_RESONANT}];document.body.className=`team-${a.turn.team}`;const S=new Set(_.map((e,n)=>e.revealed?n:-1).filter(e=>e>=0));r.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${i.arrowLeft}</button>
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
                                                ${C.filter(n=>n.team===e).map(n=>`
                                                    <article class="game__qr-card game__qr-card--${n.role}">
                                                        <div class="game__qr-code-wrap">${Q(b(n.role,n.team),130,n.team)}</div>
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
                            <div class="${G(e)}">
                                <span class="cell__content">${O(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--resonant ${a.turn.team==="resonant"?"game__score-item--active":""}">${F} / ${A}</span>
                    <span class="game__score-item game__score-item--dissonant ${a.turn.team==="dissonant"?"game__score-item--active":""}">${I} / ${B}</span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${i.maximize}</button>
            </footer>
            ${D(a,c)}
        </div>
        `,r.querySelectorAll(".game .grid .cell").forEach((e,n)=>{y&&(!S.has(n)||E.has(n)||e.classList.add("cell--reveal-anim"))}),E=S,y=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=p()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var e,n,L;document.fullscreenElement?(L=document.exitFullscreen)==null||L.call(document):(n=(e=document.documentElement).requestFullscreen)==null||n.call(e)}),w();const f=r.querySelector(".game__qr-hit");f==null||f.addEventListener("mouseenter",()=>{var e;(e=s.getState())!=null&&e.turnTransition||(u=!0,g())}),f==null||f.addEventListener("mouseleave",()=>{var e;(e=s.getState())!=null&&e.turnTransition||(u=!1,g())}),g(),requestAnimationFrame(()=>k(r))}function $(){const a=s.getState(),c=s.getLanguage(),m=d.getPresenceState();if(!a){window.location.href=p()+"/index.html";return}if(a.phase==="lobby"){s.startGame().catch(t=>{console.error("Failed to start game:",t)});return}T(a,c,m)}s.subscribe($),d.onChange($),x(()=>k(r)),q||(document.addEventListener("fullscreenchange",w),q=!0),r.addEventListener("click",a=>{var m;if((m=s.getState())!=null&&m.turnTransition)return;if(a.target.closest(".game__qr-hit")){a.preventDefault(),o=!o,g();return}o&&(o=!1,g())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(o||u)&&R()}),$()}export{V as initGame};
