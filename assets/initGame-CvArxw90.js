import{g as S,e as C,r as x,a as B,b as I,R as A,c as O,o as F,T as N,d as G,f as M,h as D,i as U,j as H,k as Q,l as P}from"./turnTransitionDismiss-LeTUvWx7.js";import{I as d,f as q,b as j,t as W,d as K,g as b}from"./url-Qg2x4s1h.js";import{o as z,w as V}from"./rulesModal-Bhja84lI.js";import"./entry-m6w2mEbg.js";function J(e,n=130,a="neutral"){const t={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:l,bg:r}=t[a]||t.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${n}x${n}&color=${l}&bgcolor=${r}&data=${encodeURIComponent(e)}"
        width="${n}" height="${n}" />`}function X({tr:e,presenceState:n,guestUrl:a,roles:t}){const l=[{team:"dissonant",role:"guide",label:e.guide,presenceRole:t.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:e.dreamwalker,presenceRole:t.WALKER_DISSONANT},{team:"resonant",role:"guide",label:e.guide,presenceRole:t.GUIDE_RESONANT},{team:"resonant",role:"walker",label:e.dreamwalker,presenceRole:t.WALKER_RESONANT}];return`
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
                        ${["dissonant","resonant"].map(r=>`
                            <section class="game__qr-team game__qr-team--${r}">
                                <h3 class="game__qr-team-title">${r==="dissonant"?e.dissonant:e.resonant}</h3>
                                <div class="game__qr-cards">
                                    ${l.filter(o=>o.team===r).map(o=>`
                                        <article class="game__qr-card game__qr-card--${o.role}">
                                            <div class="game__qr-code-wrap">${J(a(o.role,o.team),130,o.team)}</div>
                                            <p class="game__qr-role">
                                                <span class="game__qr-role-eye ${n[o.presenceRole]?"is-connected":""}" data-presence-role="${o.presenceRole}">
                                                    ${n[o.presenceRole]?d.eye:d.eyeClosed}
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
    `}function Y(e,n){let a=!1,t=!1;function l(){const i=e.querySelector(".game__qr-hub");if(!i){a=!1,t=!1;return}const u=a||t;i.classList.toggle("is-open",u),i.classList.toggle("is-pinned",a)}function r(){a=!1,t=!1,l()}function o(){const i=e.querySelector(".game__qr-hit");i==null||i.addEventListener("mouseenter",()=>{n()||(t=!0,l())}),i==null||i.addEventListener("mouseleave",()=>{n()||(t=!1,l())}),l()}function m(i){if(n())return;if(i.target.closest(".game__qr-hit")){i.preventDefault(),a=!a,l();return}a&&(a=!1,l())}function g(i){i.key==="Escape"&&(a||t)&&r()}return{bind:o,close:r,handleEscape:g,handleRootClick:m}}function Z(e,n){e.querySelectorAll("[data-presence-role]").forEach(a=>{const t=a.dataset.presenceRole,l=!!(n!=null&&n[t]);a.classList.toggle("is-connected",l),a.innerHTML=l?d.eye:d.eyeClosed})}function ee({sequenceMs:e,onChange:n}){let a=!1,t=[],l=null;function r(){t.forEach(clearTimeout),t=[]}function o(i){if(!i||l===i)return;l=i,r();let u=0;e.forEach(_=>{t.push(setTimeout(()=>{a=!0,n()},u)),u+=_.on,t.push(setTimeout(()=>{a=!1,n()},u)),u+=_.off})}function m(){return a}function g(){r()}return{dispose:g,isActive:m,trigger:o}}function ne({state:e,lang:n,presenceState:a,guestUrl:t,forceReveal:l,syncStatus:r}){const o=W(n),{cells:m}=e,g=m.filter(s=>s.role==="resonant").length,i=m.filter(s=>s.role==="dissonant").length,u=m.filter(s=>s.role==="resonant"&&s.revealed).length,_=m.filter(s=>s.role==="dissonant"&&s.revealed).length,h=e.turn.guideLimit===null?o.turnRoleGuide:o.turnRoleWalker,p=e.turn.guideLimit!==null&&!e.gameOver,y=p?Math.max((e.turn.guideLimit??0)-(e.turn.dreamwalkerMoves??0),0):0,v=p&&e.turn.team==="dissonant"?`<span class="game__score-moves game__score-moves--dissonant">${q(y,n)}</span>`:"",c=p&&e.turn.team==="resonant"?`<span class="game__score-moves game__score-moves--resonant">${q(y,n)}</span>`:"";return`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <div class="game__header-actions">
                        <button class="btn-back btn-icon" id="backBtn">${d.arrowLeft}</button>
                        <button class="btn-rules btn-icon game__rules-btn" id="rulesBtn" aria-label="${o.openRules}" title="${o.rules}">${d.book}</button>
                    </div>
                    ${X({tr:o,presenceState:a,guestUrl:t,roles:A})}
                </div>
            </header>

            <main class="screen-body">
                <div class="game">
                    <div class="grid grid--5">
                        ${m.map(s=>`
                            <div class="${S(s,{forceReveal:l})}">
                                <span class="cell__content">${C(s.word)}</span>
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
                                <span class="game__score-main">${_} / ${i}</span>
                                ${e.turn.team==="dissonant"?`<span class="game__score-turn-inline">${e.gameOver?o.gameFinished:h}</span>`:""}
                            </span>
                        </span>
                    </span>
                    <span class="game__score-center ${e.gameOver?"game__score-center--finished":""}">
                        <span class="game__score-arrow game__score-arrow--${e.turn.team}" aria-hidden="true">
                            ${e.turn.team==="dissonant"?d.arrowLeft:d.arrowRight}
                        </span>
                        <span class="game__score-center-text">${e.gameOver?o.gameFinished:j(e.turn.team,n)}</span>
                    </span>
                    <span class="game__score-side game__score-side--resonant">
                        <span class="game__score-pocket game__score-pocket--resonant">
                            <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                                <span class="game__score-main">${u} / ${g}</span>
                                ${e.turn.team==="resonant"?`<span class="game__score-turn-inline">${e.gameOver?o.gameFinished:h}</span>`:""}
                            </span>
                            ${c}
                        </span>
                    </span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${d.maximize}</button>
            </footer>
            ${x(r,n)}
            ${B(e,n)}
            ${I({state:e,lang:n,showRestart:!0})}
        </div>
    `}async function oe(e){const n=[{on:110,off:70},{on:260,off:110},{on:180,off:90},{on:420,off:140},{on:560,off:0}],{roomId:a,token:t}=K();if(!a||!t){window.location.href=b()+"/index.html";return}const l=G(a);l.listen();const r=M(a);if(await r.init(),await O({presence:l,store:r}),!r.getState()){window.location.href=b()+"/index.html";return}function o(c,s){return`${b()}/${c}.html?room=${a}&token=${t}&team=${s}`}let m=!1,g=!1,i=new Set,u="";const _=Y(e,()=>{var c;return!!((c=r.getState())!=null&&c.turnTransition)}),h=ee({sequenceMs:n,onChange:()=>v()});function p(){const c=document.getElementById("fullscreenBtn");c&&(c.innerHTML=document.fullscreenElement?d.minimize:d.maximize)}function y(c,s,f,{forceFit:T=!1}={}){var w;document.body.className=`team-${c.turn.team}`;const $=D(c.cells);e.innerHTML=ne({state:c,lang:s,presenceState:f,guestUrl:o,forceReveal:h.isActive(),syncStatus:r.getSyncStatus()}),U({root:e,selector:".game .grid .cell",currentRevealed:$,prevRevealed:i,hasRenderedBoard:g}),i=$,g=!0,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=b()+"/index.html"}),document.getElementById("rulesBtn").addEventListener("click",()=>{z(s)}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var L,R,k;document.fullscreenElement?(k=document.exitFullscreen)==null||k.call(document):(R=(L=document.documentElement).requestFullscreen)==null||R.call(L)}),(w=document.getElementById("gameOverNewGameBtn"))==null||w.addEventListener("click",async()=>{await V(async()=>{await r.resetGame()})}),H(e,()=>r.dismissTurnTransition()),p(),_.bind();const E=Q(c.cells);(T||E!==u)&&(u=E,requestAnimationFrame(()=>P(e)))}function v({forceFit:c=!1}={}){var $;const s=r.getState(),f=r.getLanguage(),T=l.getPresenceState();if((($=s==null?void 0:s.turnTransition)==null?void 0:$.kind)==="anomaly"&&s.turnTransition.anomalyKey==="glitch"&&h.trigger(s.turnTransition.id),!s){window.location.href=b()+"/index.html";return}y(s,f,T,{forceFit:c})}r.subscribe(v),l.onChange(c=>{Z(e,c)}),F(()=>v({forceFit:!0})),m||(document.addEventListener("fullscreenchange",p),m=!0),e.addEventListener("click",c=>{_.handleRootClick(c)}),document.addEventListener("keydown",async c=>{var s;if(c.key==="Escape"){const f=(s=r.getState())==null?void 0:s.turnTransition;if((f==null?void 0:f.status)===N.VISIBLE&&!f.dismissed){c.preventDefault(),await r.dismissTurnTransition();return}}_.handleEscape(c)}),v()}export{oe as initGame};
