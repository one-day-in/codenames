import{c as h}from"./boardFactory-CFSUbiZD.js";import{g as w,a as k}from"./renderCell-C7h02id-.js";import{b as y,a as x,g as v,t as g,D as u}from"./fitText-CiV-JiRu.js";import{I as d}from"./icons-Bcd_E9sO.js";const q=`
.preview-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    gap: 6px;
    padding: 8px;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    overflow-x: auto;
}
.preview-nav__btn {
    flex: 0 0 auto;
    min-height: 34px;
    padding: 6px 12px;
    border-radius: 8px;
    font-family: monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.preview-nav__btn--active {
    border-color: var(--resonant-light);
    box-shadow: 0 0 16px rgba(255, 223, 174, 0.28);
}
.preview-clickable .cell {
    cursor: pointer;
}
.preview-clickable .cell:hover {
    outline: 1px solid rgba(255, 255, 255, 0.3);
    outline-offset: -1px;
}
`,T=[{id:"game",label:"Game"},{id:"guide-resonant",label:"Guide R"},{id:"guide-dissonant",label:"Guide D"},{id:"walker-resonant",label:"Walker R"},{id:"walker-dissonant",label:"Walker D"},{id:"home",label:"Home"}],C=["МРІЯ","ТІНЬ","ХВИЛЯ","ЗІРКА","КРИЛО","МІСЯЦЬ","ВОГОНЬ","ЛІХТАР","ДОРОГА","ПІСНЯ","КАМІНЬ","ВІТЕР","ОЗЕРО","РАНОК","ЛИСТОК","ТУМАН","БЕРЕГ","НЕБО","СТРУНА","КВІТКА","ЖАРА","ДУМКА","СЛОВО","МОРЕ","КЛЮЧ"];function L(){const{cells:t,startsFirst:e}=h({size:5,words:C});return{phase:"game",size:5,cells:t,turn:{team:e,guideLimit:3,dreamwalkerMoves:1},gameOver:!1,winner:null}}function E(t,e=190){return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${e}x${e}&color=1D2433&bgcolor=FAF8F2&data=${encodeURIComponent(t)}"
        width="${e}" height="${e}" />`}function S(t){const e=g(u);document.body.className=`team-${t.turn.team}`;const{cells:n}=t,r=n.filter(a=>a.role==="resonant").length,o=n.filter(a=>a.role==="dissonant").length,i=n.filter(a=>a.role==="resonant"&&a.revealed).length,l=n.filter(a=>a.role==="dissonant"&&a.revealed).length;return`
    <div class="screen-layout game-layout">
        <header class="screen-header game__header">
            <div class="game__header-bar">
                <button class="btn-back btn-icon">${d.arrowLeft}</button>
                <div class="game__qr-hub" aria-label="${e.qrHubLabel}">
                    <span class="game__eye-indicator" aria-hidden="true">
                        <span class="game__eye game__eye--closed">${d.eyeClosed}</span>
                        <span class="game__eye game__eye--open">${d.eye}</span>
                    </span>
                    <button class="game__qr-trigger btn-icon" type="button" aria-label="${e.showQr}">${d.qrCode}</button>
                    <div class="game__qr-modal">
                        <div class="game__qr-modal-content">
                            <p class="game__qr-hint">${e.scanToControl}</p>
                            <div class="qr-panel">
                                ${["dissonant","resonant"].map(a=>`
                                    <div class="qr-panel__group qr-panel__group--${a}">
                                        <p class="qr-panel__group-title">${v(a,u)}</p>
                                        <div class="qr-panel__group-cards">
                                            ${[{role:"guide",label:e.guide},{role:"walker",label:e.dreamwalker}].map(s=>`
                                                <div class="qr-panel__block">
                                                    <div class="qr-wrapper">${E(`${window.location.origin}/sleepwalkers/${s.role}.html?team=${a}`,130)}</div>
                                                    <p class="qr-panel__label">${s.label}</p>
                                                </div>
                                            `).join("")}
                                        </div>
                                    </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main class="screen-body">
            <div class="game preview-clickable">
                <div class="grid grid--5">
                    ${n.map((a,s)=>`
                        <div class="${w(a)}" data-index="${s}">
                            <span class="cell__content">${a.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

        </main>

        <footer class="screen-footer game__footer">
            <div class="game__score">
                <span class="game__score-item game__score-item--resonant ${t.turn.team==="resonant"?"game__score-item--active":""}">${i} / ${r}</span>
                <span class="game__score-item game__score-item--dissonant ${t.turn.team==="dissonant"?"game__score-item--active":""}">${l} / ${o}</span>
            </div>
            <button class="fullscreen-btn btn-icon">${d.maximize}</button>
        </footer>
    </div>`}function $(t,e){const n=g(u);document.body.className="";const{guideLimit:r,team:o}=t.turn,a=o===e&&!(r!==null),s=`${v(e,u)} ${n.guide}`,c=n.chooseLimit,b=Array.from({length:8},(_,m)=>{const p=m+1;return`<button class="guide__num-btn ${r===p?"guide__num-btn--chosen":""}" ${a?"":"disabled"}>${p}</button>`}).join("");return`
    <div class="screen-layout guide-layout">
        <header class="screen-header">
            <div class="guide__header">
                <div class="guide__title ${a?"guide__title--active":"guide__title--muted"}">${s}</div>
                <div class="guide__hint">${c}</div>
                <div class="guide__btns ${a?"guide__btns--active":"guide__btns--muted"}">${b}</div>
            </div>
        </header>

        <main class="screen-body">
            <div class="guide guide--${e} preview-clickable">
                <div class="grid grid--5">
                    ${t.cells.map((_,m)=>`
                        <div class="${k(_)}" data-index="${m}">
                            <span class="cell__content">${_.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer guide__footer"></footer>
    </div>`}function f(t,e){const n=g(u);document.body.className=`team-${t.turn.team}`;const{team:r,guideLimit:o}=t.turn,l=r===e&&o!==null,a=`${v(e,u)} ${n.dreamwalker}`,s=l?`${o} ${n.steps}`:"";return`
    <div class="screen-layout walker-layout">
        <header class="screen-header">
            <div class="walker__header">
                <div class="walker__title ${l?"walker__title--active":"walker__title--muted"}">${a}</div>
                <div class="walker__meta">
                    <div class="${l?"walker__turn-info walker__turn-info--active":"walker__turn-info walker__turn-info--muted"}">${s}</div>
                    <div class="walker__actions">
                        <span class="walker__end-hint">${n.end}</span>
                        <button class="walker__action-btn walker__refresh-btn ${l?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" aria-label="${n.endTurn}" ${l?"":"disabled"}>${d.refreshCw}</button>
                    </div>
                </div>
        </div>
        </header>

        <main class="screen-body">
            <div class="walker walker--${e} preview-clickable">
                <div class="grid grid--5">
                    ${t.cells.map((b,_)=>`
                        <div class="${w(b)}" data-index="${_}">
                            <span class="cell__content">${b.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer walker__footer"></footer>
    </div>`}function N(){return document.body.className="",`
    <div class="app">
        <div class="lang-toggle">
            <button class="lang-toggle__btn lang-toggle__btn--active">UK</button>
            <button class="lang-toggle__btn">EN</button>
        </div>
        <div class="lobby-screen">
            <div class="lobby__title-wrap"><h1 class="lobby__title">SLEEPWALKERS</h1></div>
            <div class="lobby-screen__actions">
                <button class="lobby__btn lobby__btn--continue">Continue Game</button>
                <button class="lobby__btn lobby__btn--newgame">New Game</button>
            </div>
        </div>
    </div>
    <button class="btn-profile btn-icon">${d.user}</button>
    <button class="fullscreen-btn btn-icon">${d.maximize}</button>`}function A(){return new URLSearchParams(location.search).get("screen")||"game"}function G(t){const e=new URL(location.href);e.searchParams.set("screen",t),history.pushState({},"",e)}function P(t){const e=document.createElement("style");e.textContent=q,document.head.appendChild(e);const n=L();function r(){var a;const o=A();let i="";switch(o){case"guide-resonant":i=$(n,"resonant");break;case"guide-dissonant":i=$(n,"dissonant");break;case"walker-resonant":i=f(n,"resonant");break;case"walker-dissonant":i=f(n,"dissonant");break;case"home":i=N();break;case"game":default:i=S(n);break}const l=`
            <div class="preview-nav">
                ${T.map(s=>`
                    <button class="preview-nav__btn ${s.id===o?"preview-nav__btn--active":""}" data-screen="${s.id}">${s.label}</button>
                `).join("")}
            </div>`;t.innerHTML=`${i}${l}`,requestAnimationFrame(()=>{t.querySelectorAll(".cell").forEach(s=>y(s)),x(t)}),(a=t.querySelector(".preview-nav"))==null||a.addEventListener("click",s=>{const c=s.target.closest("[data-screen]");c&&(G(c.dataset.screen),r())}),t.querySelectorAll(".preview-clickable .cell").forEach(s=>{s.addEventListener("click",()=>{const c=Number(s.dataset.index);Number.isNaN(c)||(n.cells[c].revealed=!n.cells[c].revealed,r())})})}window.addEventListener("popstate",r),r()}export{P as initPreview};
