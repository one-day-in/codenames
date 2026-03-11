import{o as Q,c as j,g as K,e as W,r as z,f as G}from"./sanitize-CWtCII0P.js";import{k as J,c as V,R as b}from"./keepAlive-BWq9KLr-.js";import{a as X,g as $,I as l,b as Y,t as I}from"./icons-87ROm5CI.js";function Z(o,p=130,d="neutral"){const h={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:u,bg:s}=h[d]||h.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${p}x${p}&color=${u}&bgcolor=${s}&data=${encodeURIComponent(o)}"
        width="${p}" height="${p}" />`}async function te(o){const{roomId:d,token:h}=X();if(!d||!h){window.location.href=$()+"/index.html";return}const u=V(d);u.listen(),J(u);const s=j(d);if(await s.init(),!s.getState()){window.location.href=$()+"/index.html";return}function C(e,r){return`${$()}/${e}.html?room=${d}&token=${h}&team=${r}`}let i=!1,g=!1,w=!1,E=!1,T=new Set,y=!1,q=null,S=null,L=!1;function R(){const e=document.getElementById("fullscreenBtn");e&&(e.innerHTML=document.fullscreenElement?l.minimize:l.maximize)}function _(){const e=o.querySelector(".game__qr-hub");if(!e){i=!1,g=!1;return}const r=i||g;e.classList.toggle("is-open",r),e.classList.toggle("is-pinned",i)}function O(){i=!1,g=!1,_()}function B(e){!e||S===e||(S=e,y=!0,q&&clearTimeout(q),v(),q=setTimeout(()=>{y=!1,v()},280))}function x(e){const r=I(e);document.body.className="",o.innerHTML=`
            <div class="app">
                <div class="waiting-screen">
                    <p>${r.preparingGame}</p>
                </div>
            </div>`}function N(e,r,m){const n=I(r),{cells:c}=e,M=c.filter(a=>a.role==="resonant").length,D=c.filter(a=>a.role==="dissonant").length,H=c.filter(a=>a.role==="resonant"&&a.revealed).length,U=c.filter(a=>a.role==="dissonant"&&a.revealed).length,k=e.turn.guideLimit===null?n.turnRoleGuide:n.turnRoleWalker,P=[{team:"dissonant",role:"guide",label:n.guide,presenceRole:b.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:n.dreamwalker,presenceRole:b.WALKER_DISSONANT},{team:"resonant",role:"guide",label:n.guide,presenceRole:b.GUIDE_RESONANT},{team:"resonant",role:"walker",label:n.dreamwalker,presenceRole:b.WALKER_RESONANT}];document.body.className=`team-${e.turn.team}`;const F=new Set(c.map((a,t)=>a.revealed?t:-1).filter(a=>a>=0));o.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${l.arrowLeft}</button>
                    <div class="game__qr-hub" aria-label="${n.qrHubLabel}">
                        <button class="game__qr-hit btn-flat" type="button" aria-label="${n.showQr}">
                            <span class="game__qr-caption">${n.connectControllers}</span>
                            <span class="game__qr-trigger" aria-hidden="true">${l.qrCode}</span>
                            <span class="game__eye-indicator" aria-hidden="true">
                                <span class="game__eye game__eye--closed">${l.eyeClosed}</span>
                                <span class="game__eye game__eye--open">${l.eye}</span>
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
                                                ${P.filter(t=>t.team===a).map(t=>`
                                                    <article class="game__qr-card game__qr-card--${t.role}">
                                                        <div class="game__qr-code-wrap">${Z(C(t.role,t.team),130,t.team)}</div>
                                                        <p class="game__qr-role">
                                                            <span class="game__qr-role-eye ${m[t.presenceRole]?"is-connected":""}">
                                                                ${m[t.presenceRole]?l.eye:l.eyeClosed}
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
                        ${c.map(a=>`
                            <div class="${K(a,{forceReveal:y})}">
                                <span class="cell__content">${W(a.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--dissonant ${e.turn.team==="dissonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${U} / ${D}</span>
                        ${e.turn.team==="dissonant"?`<span class="game__score-turn-inline">${e.gameOver?n.gameFinished:k}</span>`:""}
                    </span>
                    <span class="game__score-center ${e.gameOver?"game__score-center--finished":""}">
                        <span class="game__score-arrow game__score-arrow--${e.turn.team}" aria-hidden="true">
                            ${e.turn.team==="dissonant"?l.arrowLeft:l.arrowRight}
                        </span>
                        <span class="game__score-center-text">${e.gameOver?n.gameFinished:Y(e.turn.team,r)}</span>
                    </span>
                    <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${H} / ${M}</span>
                        ${e.turn.team==="resonant"?`<span class="game__score-turn-inline">${e.gameOver?n.gameFinished:k}</span>`:""}
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${l.maximize}</button>
            </footer>
            ${z(e,r)}
        </div>
        `,o.querySelectorAll(".game .grid .cell").forEach((a,t)=>{E&&(!F.has(t)||T.has(t)||a.classList.add("cell--reveal-anim"))}),T=F,E=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=$()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var a,t,A;document.fullscreenElement?(A=document.exitFullscreen)==null||A.call(document):(t=(a=document.documentElement).requestFullscreen)==null||t.call(a)}),R();const f=o.querySelector(".game__qr-hit");f==null||f.addEventListener("mouseenter",()=>{var a;(a=s.getState())!=null&&a.turnTransition||(g=!0,_())}),f==null||f.addEventListener("mouseleave",()=>{var a;(a=s.getState())!=null&&a.turnTransition||(g=!1,_())}),_(),requestAnimationFrame(()=>G(o))}function v(){var n;const e=s.getState(),r=s.getLanguage(),m=u.getPresenceState();if(((n=e==null?void 0:e.turnTransition)==null?void 0:n.kind)==="anomaly"&&e.turnTransition.anomalyKey==="glitch"&&B(e.turnTransition.id),!e){window.location.href=$()+"/index.html";return}if(e.phase==="lobby"){x(r),L||(L=!0,s.startGame().catch(c=>{console.error("Failed to start game:",c)}).finally(()=>{L=!1}));return}N(e,r,m)}s.subscribe(v),u.onChange(v),Q(()=>G(o)),w||(document.addEventListener("fullscreenchange",R),w=!0),o.addEventListener("click",e=>{var m;if((m=s.getState())!=null&&m.turnTransition)return;if(e.target.closest(".game__qr-hit")){e.preventDefault(),i=!i,_();return}i&&(i=!1,_())}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(i||g)&&O()}),v()}export{te as initGame};
