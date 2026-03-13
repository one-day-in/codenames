import{g as w,e as L,r as S,a as T,R as k,b as C,o as A,c as B,d as F,f as R}from"./syncIndicator-D2f8fAiK.js";import{I as u,b as I,t as x,d as O,g as v}from"./url-BkejxNIu.js";import{o as N}from"./rulesModal-B_dpvcV7.js";import"./entry-E3Bxpwj9.js";function G(e,a=130,n="neutral"){const t={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:c,bg:s}=t[n]||t.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${a}x${a}&color=${c}&bgcolor=${s}&data=${encodeURIComponent(e)}"
        width="${a}" height="${a}" />`}function D({tr:e,presenceState:a,guestUrl:n,roles:t}){const c=[{team:"dissonant",role:"guide",label:e.guide,presenceRole:t.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:e.dreamwalker,presenceRole:t.WALKER_DISSONANT},{team:"resonant",role:"guide",label:e.guide,presenceRole:t.GUIDE_RESONANT},{team:"resonant",role:"walker",label:e.dreamwalker,presenceRole:t.WALKER_RESONANT}];return`
        <div class="game__qr-hub" aria-label="${e.qrHubLabel}">
            <button class="game__qr-hit btn-flat" type="button" aria-label="${e.showQr}">
                <span class="game__qr-caption">${e.connectControllers}</span>
                <span class="game__qr-trigger" aria-hidden="true">${u.qrCode}</span>
                <span class="game__eye-indicator" aria-hidden="true">
                    <span class="game__eye game__eye--closed">${u.eyeClosed}</span>
                    <span class="game__eye game__eye--open">${u.eye}</span>
                </span>
            </button>
            <div class="game__qr-modal">
                <div class="game__qr-modal-content">
                    <p class="game__qr-hint">${e.scanToControl}</p>
                    <div class="game__qr-columns">
                        ${["dissonant","resonant"].map(s=>`
                            <section class="game__qr-team game__qr-team--${s}">
                                <h3 class="game__qr-team-title">${s==="dissonant"?e.dissonant:e.resonant}</h3>
                                <div class="game__qr-cards">
                                    ${c.filter(r=>r.team===s).map(r=>`
                                        <article class="game__qr-card game__qr-card--${r.role}">
                                            <div class="game__qr-code-wrap">${G(n(r.role,r.team),130,r.team)}</div>
                                            <p class="game__qr-role">
                                                <span class="game__qr-role-eye ${a[r.presenceRole]?"is-connected":""}">
                                                    ${a[r.presenceRole]?u.eye:u.eyeClosed}
                                                </span>
                                                <span class="game__qr-role-text">${r.label}</span>
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
    `}function M(e,a){let n=!1,t=!1;function c(){const o=e.querySelector(".game__qr-hub");if(!o){n=!1,t=!1;return}const d=n||t;o.classList.toggle("is-open",d),o.classList.toggle("is-pinned",n)}function s(){n=!1,t=!1,c()}function r(){const o=e.querySelector(".game__qr-hit");o==null||o.addEventListener("mouseenter",()=>{a()||(t=!0,c())}),o==null||o.addEventListener("mouseleave",()=>{a()||(t=!1,c())}),c()}function m(o){if(a())return;if(o.target.closest(".game__qr-hit")){o.preventDefault(),n=!n,c();return}n&&(n=!1,c())}function g(o){o.key==="Escape"&&(n||t)&&s()}return{bind:r,close:s,handleEscape:g,handleRootClick:m}}function U({sequenceMs:e,onChange:a}){let n=!1,t=[],c=null;function s(){t.forEach(clearTimeout),t=[]}function r(o){if(!o||c===o)return;c=o,s();let d=0;e.forEach(_=>{t.push(setTimeout(()=>{n=!0,a()},d)),d+=_.on,t.push(setTimeout(()=>{n=!1,a()},d)),d+=_.off})}function m(){return n}function g(){s()}return{dispose:g,isActive:m,trigger:r}}function H(e){return new Set(e.map((a,n)=>a.revealed?n:-1).filter(a=>a>=0))}function Q(e,a,n,t){e.querySelectorAll(".game .grid .cell").forEach((c,s)=>{t&&(!a.has(s)||n.has(s)||c.classList.add("cell--reveal-anim"))})}function j({state:e,lang:a,presenceState:n,guestUrl:t,forceReveal:c,syncStatus:s}){const r=x(a),{cells:m}=e,g=m.filter(i=>i.role==="resonant").length,o=m.filter(i=>i.role==="dissonant").length,d=m.filter(i=>i.role==="resonant"&&i.revealed).length,_=m.filter(i=>i.role==="dissonant"&&i.revealed).length,p=e.turn.guideLimit===null?r.turnRoleGuide:r.turnRoleWalker;return`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <div class="game__header-actions">
                        <button class="btn-back btn-icon" id="backBtn">${u.arrowLeft}</button>
                        <button class="btn-rules btn-icon game__rules-btn" id="rulesBtn" aria-label="${r.openRules}" title="${r.rules}">${u.book}</button>
                    </div>
                    ${D({tr:r,presenceState:n,guestUrl:t,roles:k})}
                </div>
            </header>

            <main class="screen-body">
                <div class="game">
                    <div class="grid grid--5">
                        ${m.map(i=>`
                            <div class="${w(i,{forceReveal:c})}">
                                <span class="cell__content">${L(i.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--dissonant ${e.turn.team==="dissonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${_} / ${o}</span>
                        ${e.turn.team==="dissonant"?`<span class="game__score-turn-inline">${e.gameOver?r.gameFinished:p}</span>`:""}
                    </span>
                    <span class="game__score-center ${e.gameOver?"game__score-center--finished":""}">
                        <span class="game__score-arrow game__score-arrow--${e.turn.team}" aria-hidden="true">
                            ${e.turn.team==="dissonant"?u.arrowLeft:u.arrowRight}
                        </span>
                        <span class="game__score-center-text">${e.gameOver?r.gameFinished:I(e.turn.team,a)}</span>
                    </span>
                    <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${d} / ${g}</span>
                        ${e.turn.team==="resonant"?`<span class="game__score-turn-inline">${e.gameOver?r.gameFinished:p}</span>`:""}
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${u.maximize}</button>
            </footer>
            ${S(s,a)}
            ${T(e,a)}
        </div>
    `}async function J(e){const a=[{on:110,off:70},{on:260,off:110},{on:180,off:90},{on:420,off:140},{on:560,off:0}],{roomId:n,token:t}=O();if(!n||!t){window.location.href=v()+"/index.html";return}const c=B(n);c.listen();const s=F(n);if(await s.init(),await C({presence:c,store:s}),!s.getState()){window.location.href=v()+"/index.html";return}function r(l,f){return`${v()}/${l}.html?room=${n}&token=${t}&team=${f}`}let m=!1,g=!1,o=new Set;const d=M(e,()=>{var l;return!!((l=s.getState())!=null&&l.turnTransition)}),_=U({sequenceMs:a,onChange:()=>$()});function p(){const l=document.getElementById("fullscreenBtn");l&&(l.innerHTML=document.fullscreenElement?u.minimize:u.maximize)}function i(l,f,b){document.body.className=`team-${l.turn.team}`;const h=H(l.cells);e.innerHTML=j({state:l,lang:f,presenceState:b,guestUrl:r,forceReveal:_.isActive(),syncStatus:s.getSyncStatus()}),Q(e,h,o,g),o=h,g=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=v()+"/index.html"}),document.getElementById("rulesBtn").addEventListener("click",()=>{N(f)}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var y,E,q;document.fullscreenElement?(q=document.exitFullscreen)==null||q.call(document):(E=(y=document.documentElement).requestFullscreen)==null||E.call(y)}),p(),d.bind(),requestAnimationFrame(()=>R(e))}function $(){var h;const l=s.getState(),f=s.getLanguage(),b=c.getPresenceState();if(((h=l==null?void 0:l.turnTransition)==null?void 0:h.kind)==="anomaly"&&l.turnTransition.anomalyKey==="glitch"&&_.trigger(l.turnTransition.id),!l){window.location.href=v()+"/index.html";return}i(l,f,b)}s.subscribe($),c.onChange($),A(()=>R(e)),m||(document.addEventListener("fullscreenchange",p),m=!0),e.addEventListener("click",l=>{d.handleRootClick(l)}),document.addEventListener("keydown",l=>{d.handleEscape(l)}),$()}export{J as initGame};
