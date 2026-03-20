import{R as b,g as N,e as O,r as I,a as A,b as x,c as B,o as F,T as G,d as M,f as D,h as U,i as H,j as Q,k as P,l as j}from"./turnTransitionDismiss-B0d5dzhW.js";import{I as d,t as q,f as k,b as W,d as K,g as y}from"./url-Qg2x4s1h.js";import{o as z,w as V}from"./rulesModal-Bhja84lI.js";import"./entry-CIKAVfaz.js";function Y(e,a=130,n="neutral"){const r={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:l,bg:t}=r[n]||r.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${a}x${a}&color=${l}&bgcolor=${t}&data=${encodeURIComponent(e)}"
        width="${a}" height="${a}" />`}function J({tr:e,presenceState:a,guestUrl:n,roles:r}){const l=[{team:"dissonant",role:"guide",label:e.guide,presenceRole:r.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:e.dreamwalker,presenceRole:r.WALKER_DISSONANT},{team:"resonant",role:"guide",label:e.guide,presenceRole:r.GUIDE_RESONANT},{team:"resonant",role:"walker",label:e.dreamwalker,presenceRole:r.WALKER_RESONANT}];return`
        <div class="game__qr-hub" aria-label="${e.qrHubLabel}">
            <button class="game__qr-hit btn-flat" type="button" aria-label="${e.showQr}">
                <span class="game__qr-caption">${e.connectControllers}</span>
                <span class="game__qr-trigger" aria-hidden="true">${d.qrCode}</span>
                <span class="game__eye-indicator" aria-hidden="true">
                    <span class="game__eye game__eye--closed">${d.eyeClosed}</span>
                    <span class="game__eye game__eye--open">${d.eye}</span>
                </span>
            </button>
            <div class="game__qr-modal">
                <div class="game__qr-modal-content">
                    <p class="game__qr-hint">${e.scanToControl}</p>
                    <div class="game__qr-columns">
                        ${["dissonant","resonant"].map(t=>`
                            <section class="game__qr-team game__qr-team--${t}">
                                <h3 class="game__qr-team-title">${t==="dissonant"?e.dissonant:e.resonant}</h3>
                                <div class="game__qr-cards">
                                    ${l.filter(o=>o.team===t).map(o=>`
                                        <article class="game__qr-card game__qr-card--${o.role}">
                                            <div class="game__qr-code-wrap">${Y(n(o.role,o.team),130,o.team)}</div>
                                            <p class="game__qr-role">
                                                <span class="game__qr-role-eye ${a[o.presenceRole]?"is-connected":""}" data-presence-role="${o.presenceRole}">
                                                    ${a[o.presenceRole]?d.eye:d.eyeClosed}
                                                </span>
                                                <span class="game__qr-role-text">${o.label}</span>
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
    `}function X(e,a){let n=!1,r=!1;function l(){const c=e.querySelector(".game__qr-hub");if(!c){n=!1,r=!1;return}const u=n||r;c.classList.toggle("is-open",u),c.classList.toggle("is-pinned",n)}function t(){n=!1,r=!1,l()}function o(){const c=e.querySelector(".game__qr-hit");c==null||c.addEventListener("mouseenter",()=>{a()||(r=!0,l())}),c==null||c.addEventListener("mouseleave",()=>{a()||(r=!1,l())}),l()}function m(c){if(a())return;if(c.target.closest(".game__qr-hit")){c.preventDefault(),n=!n,l();return}n&&(n=!1,l())}function g(c){c.key==="Escape"&&(n||r)&&t()}return{bind:o,close:t,handleEscape:g,handleRootClick:m}}function Z(e,a){e.querySelectorAll("[data-presence-role]").forEach(n=>{const r=n.dataset.presenceRole,l=!!(a!=null&&a[r]);n.classList.toggle("is-connected",l),n.innerHTML=l?d.eye:d.eyeClosed})}function ee({sequenceMs:e,onChange:a}){let n=!1,r=[],l=null;function t(){r.forEach(clearTimeout),r=[]}function o(c){if(!c||l===c)return;l=c,t();let u=0;e.forEach(_=>{r.push(setTimeout(()=>{n=!0,a()},u)),u+=_.on,r.push(setTimeout(()=>{n=!1,a()},u)),u+=_.off})}function m(){return n}function g(){t()}return{dispose:g,isActive:m,trigger:o}}function ne(e,a){const n=q(a);return e===b.CONNECTED?n.syncConnected:e===b.CONNECTING?n.syncConnecting:e===b.RECONNECTING?n.syncReconnecting:e===b.STALE?n.syncStale:e===b.ERROR?n.syncError:n.syncConnecting}function ae(e,a){return`
        <div class="sync-indicator sync-indicator--${e}">
            <span class="sync-indicator__dot" aria-hidden="true"></span>
            <span class="sync-indicator__label">${ne(e,a)}</span>
        </div>
    `}function se({state:e,lang:a,presenceState:n,guestUrl:r,forceReveal:l,syncStatus:t}){const o=q(a),{cells:m}=e,g=m.filter(s=>s.role==="resonant").length,c=m.filter(s=>s.role==="dissonant").length,u=m.filter(s=>s.role==="resonant"&&s.revealed).length,_=m.filter(s=>s.role==="dissonant"&&s.revealed).length,h=e.turn.guideLimit===null?o.turnRoleGuide:o.turnRoleWalker,p=e.turn.guideLimit!==null&&!e.gameOver,E=p?Math.max((e.turn.guideLimit??0)-(e.turn.dreamwalkerMoves??0),0):0,v=p&&e.turn.team==="dissonant"?`<span class="game__score-moves game__score-moves--dissonant">${k(E,a)}</span>`:"",i=p&&e.turn.team==="resonant"?`<span class="game__score-moves game__score-moves--resonant">${k(E,a)}</span>`:"";return`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <div class="game__header-actions">
                        <button class="btn-back btn-icon" id="backBtn">${d.arrowLeft}</button>
                        <button class="btn-rules btn-icon game__rules-btn" id="rulesBtn" aria-label="${o.openRules}" title="${o.rules}">${d.book}</button>
                    </div>
                    ${J({tr:o,presenceState:n,guestUrl:r,roles:x})}
                </div>
            </header>

            <main class="screen-body">
                <div class="game">
                    <div class="grid grid--5">
                        ${m.map(s=>`
                            <div class="${N(s,{forceReveal:l})}">
                                <span class="cell__content">${O(s.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-side game__score-side--dissonant">
                        <span class="game__score-pocket game__score-pocket--dissonant">
                            ${v}
                            <span class="game__score-item game__score-item--dissonant ${e.turn.team==="dissonant"?"game__score-item--active game__score-item--expanded":""}">
                                <span class="game__score-main">${_} / ${c}</span>
                                ${e.turn.team==="dissonant"?`<span class="game__score-turn-inline">${e.gameOver?o.gameFinished:h}</span>`:""}
                            </span>
                        </span>
                    </span>
                    <span class="game__score-center ${e.gameOver?"game__score-center--finished":""}">
                        <span class="game__score-arrow game__score-arrow--${e.turn.team}" aria-hidden="true">
                            ${e.turn.team==="dissonant"?d.arrowLeft:d.arrowRight}
                        </span>
                        <span class="game__score-center-text">${e.gameOver?o.gameFinished:W(e.turn.team,a)}</span>
                    </span>
                    <span class="game__score-side game__score-side--resonant">
                        <span class="game__score-pocket game__score-pocket--resonant">
                            <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                                <span class="game__score-main">${u} / ${g}</span>
                                ${e.turn.team==="resonant"?`<span class="game__score-turn-inline">${e.gameOver?o.gameFinished:h}</span>`:""}
                            </span>
                            ${i}
                        </span>
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${d.maximize}</button>
            </footer>
            ${ae(t,a)}
            ${I(e,a)}
            ${A({state:e,lang:a,showRestart:!0})}
        </div>
    `}async function ie(e){const a=[{on:110,off:70},{on:260,off:110},{on:180,off:90},{on:420,off:140},{on:560,off:0}],{roomId:n,token:r}=K();if(!n||!r){window.location.href=y()+"/index.html";return}const l=M(n);l.listen();const t=D(n);if(await t.init(),await B({presence:l,store:t}),!t.getState()){window.location.href=y()+"/index.html";return}function o(i,s){return`${y()}/${i}.html?room=${n}&token=${r}&team=${s}`}let m=!1,g=!1,c=new Set,u="";const _=X(e,()=>{var i;return!!((i=t.getState())!=null&&i.turnTransition)}),h=ee({sequenceMs:a,onChange:()=>v()});function p(){const i=document.getElementById("fullscreenBtn");i&&(i.innerHTML=document.fullscreenElement?d.minimize:d.maximize)}function E(i,s,f,{forceFit:T=!1}={}){var C;document.body.className=`team-${i.turn.team}`;const $=U(i.cells);e.innerHTML=se({state:i,lang:s,presenceState:f,guestUrl:o,forceReveal:h.isActive(),syncStatus:t.getSyncStatus()}),H({root:e,selector:".game .grid .cell",currentRevealed:$,prevRevealed:c,hasRenderedBoard:g}),c=$,g=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=y()+"/index.html"}),document.getElementById("rulesBtn").addEventListener("click",()=>{z(s)}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var L,S,w;document.fullscreenElement?(w=document.exitFullscreen)==null||w.call(document):(S=(L=document.documentElement).requestFullscreen)==null||S.call(L)}),(C=document.getElementById("gameOverNewGameBtn"))==null||C.addEventListener("click",async()=>{await V(async()=>{await t.resetGame()})}),Q(e,()=>t.dismissTurnTransition()),p(),_.bind();const R=P(i.cells);(T||R!==u)&&(u=R,requestAnimationFrame(()=>j(e)))}function v({forceFit:i=!1}={}){var $;const s=t.getState(),f=t.getLanguage(),T=l.getPresenceState();if((($=s==null?void 0:s.turnTransition)==null?void 0:$.kind)==="anomaly"&&s.turnTransition.anomalyKey==="glitch"&&h.trigger(s.turnTransition.id),!s){window.location.href=y()+"/index.html";return}E(s,f,T,{forceFit:i})}t.subscribe(v),l.onChange(i=>{Z(e,i)}),F(()=>v({forceFit:!0})),m||(document.addEventListener("fullscreenchange",p),m=!0),e.addEventListener("click",i=>{_.handleRootClick(i)}),document.addEventListener("keydown",async i=>{var s;if(i.key==="Escape"){const f=(s=t.getState())==null?void 0:s.turnTransition;if((f==null?void 0:f.status)===G.VISIBLE&&!f.dismissed){i.preventDefault(),await t.dismissTurnTransition();return}}_.handleEscape(i)}),v()}export{ie as initGame};
