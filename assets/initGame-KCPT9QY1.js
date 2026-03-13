import{g as w,e as L,r as S,a as T,R as C,b as k,o as A,c as B,d as F,f as x,h as I,i as R}from"./revealedCells-DKwX_vYq.js";import{I as u,b as O,t as N,d as G,g as v}from"./url-BkejxNIu.js";import{o as D}from"./rulesModal-B_dpvcV7.js";import"./entry-DcrdvCjS.js";function M(e,l=130,n="neutral"){const a={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:c,bg:o}=a[n]||a.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${l}x${l}&color=${c}&bgcolor=${o}&data=${encodeURIComponent(e)}"
        width="${l}" height="${l}" />`}function U({tr:e,presenceState:l,guestUrl:n,roles:a}){const c=[{team:"dissonant",role:"guide",label:e.guide,presenceRole:a.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:e.dreamwalker,presenceRole:a.WALKER_DISSONANT},{team:"resonant",role:"guide",label:e.guide,presenceRole:a.GUIDE_RESONANT},{team:"resonant",role:"walker",label:e.dreamwalker,presenceRole:a.WALKER_RESONANT}];return`
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
                        ${["dissonant","resonant"].map(o=>`
                            <section class="game__qr-team game__qr-team--${o}">
                                <h3 class="game__qr-team-title">${o==="dissonant"?e.dissonant:e.resonant}</h3>
                                <div class="game__qr-cards">
                                    ${c.filter(t=>t.team===o).map(t=>`
                                        <article class="game__qr-card game__qr-card--${t.role}">
                                            <div class="game__qr-code-wrap">${M(n(t.role,t.team),130,t.team)}</div>
                                            <p class="game__qr-role">
                                                <span class="game__qr-role-eye ${l[t.presenceRole]?"is-connected":""}">
                                                    ${l[t.presenceRole]?u.eye:u.eyeClosed}
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
    `}function H(e,l){let n=!1,a=!1;function c(){const s=e.querySelector(".game__qr-hub");if(!s){n=!1,a=!1;return}const d=n||a;s.classList.toggle("is-open",d),s.classList.toggle("is-pinned",n)}function o(){n=!1,a=!1,c()}function t(){const s=e.querySelector(".game__qr-hit");s==null||s.addEventListener("mouseenter",()=>{l()||(a=!0,c())}),s==null||s.addEventListener("mouseleave",()=>{l()||(a=!1,c())}),c()}function m(s){if(l())return;if(s.target.closest(".game__qr-hit")){s.preventDefault(),n=!n,c();return}n&&(n=!1,c())}function g(s){s.key==="Escape"&&(n||a)&&o()}return{bind:t,close:o,handleEscape:g,handleRootClick:m}}function Q({sequenceMs:e,onChange:l}){let n=!1,a=[],c=null;function o(){a.forEach(clearTimeout),a=[]}function t(s){if(!s||c===s)return;c=s,o();let d=0;e.forEach(_=>{a.push(setTimeout(()=>{n=!0,l()},d)),d+=_.on,a.push(setTimeout(()=>{n=!1,l()},d)),d+=_.off})}function m(){return n}function g(){o()}return{dispose:g,isActive:m,trigger:t}}function j({state:e,lang:l,presenceState:n,guestUrl:a,forceReveal:c,syncStatus:o}){const t=N(l),{cells:m}=e,g=m.filter(i=>i.role==="resonant").length,s=m.filter(i=>i.role==="dissonant").length,d=m.filter(i=>i.role==="resonant"&&i.revealed).length,_=m.filter(i=>i.role==="dissonant"&&i.revealed).length,p=e.turn.guideLimit===null?t.turnRoleGuide:t.turnRoleWalker;return`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <div class="game__header-actions">
                        <button class="btn-back btn-icon" id="backBtn">${u.arrowLeft}</button>
                        <button class="btn-rules btn-icon game__rules-btn" id="rulesBtn" aria-label="${t.openRules}" title="${t.rules}">${u.book}</button>
                    </div>
                    ${U({tr:t,presenceState:n,guestUrl:a,roles:C})}
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
                        <span class="game__score-main">${_} / ${s}</span>
                        ${e.turn.team==="dissonant"?`<span class="game__score-turn-inline">${e.gameOver?t.gameFinished:p}</span>`:""}
                    </span>
                    <span class="game__score-center ${e.gameOver?"game__score-center--finished":""}">
                        <span class="game__score-arrow game__score-arrow--${e.turn.team}" aria-hidden="true">
                            ${e.turn.team==="dissonant"?u.arrowLeft:u.arrowRight}
                        </span>
                        <span class="game__score-center-text">${e.gameOver?t.gameFinished:O(e.turn.team,l)}</span>
                    </span>
                    <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                        <span class="game__score-main">${d} / ${g}</span>
                        ${e.turn.team==="resonant"?`<span class="game__score-turn-inline">${e.gameOver?t.gameFinished:p}</span>`:""}
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${u.maximize}</button>
            </footer>
            ${S(o,l)}
            ${T(e,l)}
        </div>
    `}async function J(e){const l=[{on:110,off:70},{on:260,off:110},{on:180,off:90},{on:420,off:140},{on:560,off:0}],{roomId:n,token:a}=G();if(!n||!a){window.location.href=v()+"/index.html";return}const c=B(n);c.listen();const o=F(n);if(await o.init(),await k({presence:c,store:o}),!o.getState()){window.location.href=v()+"/index.html";return}function t(r,f){return`${v()}/${r}.html?room=${n}&token=${a}&team=${f}`}let m=!1,g=!1,s=new Set;const d=H(e,()=>{var r;return!!((r=o.getState())!=null&&r.turnTransition)}),_=Q({sequenceMs:l,onChange:()=>$()});function p(){const r=document.getElementById("fullscreenBtn");r&&(r.innerHTML=document.fullscreenElement?u.minimize:u.maximize)}function i(r,f,b){document.body.className=`team-${r.turn.team}`;const h=x(r.cells);e.innerHTML=j({state:r,lang:f,presenceState:b,guestUrl:t,forceReveal:_.isActive(),syncStatus:o.getSyncStatus()}),I({root:e,selector:".game .grid .cell",currentRevealed:h,prevRevealed:s,hasRenderedBoard:g}),s=h,g=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=v()+"/index.html"}),document.getElementById("rulesBtn").addEventListener("click",()=>{D(f)}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var y,E,q;document.fullscreenElement?(q=document.exitFullscreen)==null||q.call(document):(E=(y=document.documentElement).requestFullscreen)==null||E.call(y)}),p(),d.bind(),requestAnimationFrame(()=>R(e))}function $(){var h;const r=o.getState(),f=o.getLanguage(),b=c.getPresenceState();if(((h=r==null?void 0:r.turnTransition)==null?void 0:h.kind)==="anomaly"&&r.turnTransition.anomalyKey==="glitch"&&_.trigger(r.turnTransition.id),!r){window.location.href=v()+"/index.html";return}i(r,f,b)}o.subscribe($),c.onChange($),A(()=>R(e)),m||(document.addEventListener("fullscreenchange",p),m=!0),e.addEventListener("click",r=>{d.handleRootClick(r)}),document.addEventListener("keydown",r=>{d.handleEscape(r)}),$()}export{J as initGame};
