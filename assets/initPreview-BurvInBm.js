import{c as N}from"./boardFactory-CFSUbiZD.js";import{g as y,a as A}from"./renderCell-C7h02id-.js";import{b as j,a as G,g as $,t as h,D as p}from"./fitText-Bd138XTN.js";import{I as u}from"./icons-Bcd_E9sO.js";const D=`
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
`,F=[{id:"game",label:"Game"},{id:"guide-resonant",label:"Guide R"},{id:"guide-dissonant",label:"Guide D"},{id:"walker-resonant",label:"Walker R"},{id:"walker-dissonant",label:"Walker D"},{id:"home",label:"Home"}],I=["МРІЯ","ТІНЬ","ХВИЛЯ","ЗІРКА","КРИЛО","МІСЯЦЬ","ВОГОНЬ","ЛІХТАР","ДОРОГА","ПІСНЯ","КАМІНЬ","ВІТЕР","ОЗЕРО","РАНОК","ЛИСТОК","ТУМАН","БЕРЕГ","НЕБО","СТРУНА","КВІТКА","ЖАРА","ДУМКА","СЛОВО","МОРЕ","КЛЮЧ"];function R(){const{cells:s,startsFirst:a}=N({size:5,words:I});return{phase:"game",size:5,cells:s,turn:{team:a,guideLimit:3,dreamwalkerMoves:1},gameOver:!1,winner:null}}function W(s,a=190){return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${a}x${a}&color=1D2433&bgcolor=FAF8F2&data=${encodeURIComponent(s)}"
        width="${a}" height="${a}" />`}function P(s){const a=h(p),t={"guide-dissonant":!1,"walker-dissonant":!0,"guide-resonant":!0,"walker-resonant":!1};document.body.className=`team-${s.turn.team}`;const{cells:r}=s,_=r.filter(e=>e.role==="resonant").length,v=r.filter(e=>e.role==="dissonant").length,l=r.filter(e=>e.role==="resonant"&&e.revealed).length,n=r.filter(e=>e.role==="dissonant"&&e.revealed).length;return`
    <div class="screen-layout game-layout">
        <header class="screen-header game__header">
            <div class="game__header-bar">
                <button class="btn-back btn-icon">${u.arrowLeft}</button>
                <div class="game__qr-hub" aria-label="${a.qrHubLabel}">
                    <button class="game__qr-trigger btn-icon" type="button" aria-label="${a.showQr}">${u.qrCode}</button>
                    <span class="game__qr-caption">${a.connectControllers}</span>
                    <span class="game__eye-indicator" aria-hidden="true">
                        <span class="game__eye game__eye--closed">${u.eyeClosed}</span>
                        <span class="game__eye game__eye--open">${u.eye}</span>
                    </span>
                    <div class="game__qr-modal">
                        <div class="game__qr-modal-content">
                            <p class="game__qr-hint">${a.scanToControl}</p>
                            <div class="game__qr-columns">
                                ${["dissonant","resonant"].map(e=>`
                                    <section class="game__qr-team game__qr-team--${e}">
                                        <h3 class="game__qr-team-title">${$(e,p)}</h3>
                                        <div class="game__qr-cards">
                                            ${[{role:"guide",label:a.guide},{role:"walker",label:a.dreamwalker}].map(i=>`
                                                <article class="game__qr-card game__qr-card--${i.role}">
                                                    <div class="game__qr-code-wrap">${W(`${window.location.origin}/sleepwalkers/${i.role}.html?team=${e}`,130)}</div>
                                                    <p class="game__qr-role">
                                                        <span class="game__qr-role-eye ${t[`${i.role}-${e}`]?"is-connected":""}">
                                                            ${t[`${i.role}-${e}`]?u.eye:u.eyeClosed}
                                                        </span>
                                                        <span class="game__qr-role-text">${i.label}</span>
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
                    ${r.map((e,i)=>`
                        <div class="${y(e)}" data-index="${i}">
                            <span class="cell__content">${e.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

        </main>

        <footer class="screen-footer game__footer">
            <div class="game__score">
                <span class="game__score-item game__score-item--resonant ${s.turn.team==="resonant"?"game__score-item--active":""}">${l} / ${_}</span>
                <span class="game__score-item game__score-item--dissonant ${s.turn.team==="dissonant"?"game__score-item--active":""}">${n} / ${v}</span>
            </div>
            <button class="fullscreen-btn btn-icon">${u.maximize}</button>
        </footer>
    </div>`}function f(s,a){const t=h(p);document.body.className="";const{guideLimit:r,team:_}=s.turn,n=_===a&&!(r!==null),e=`${$(a,p)} ${t.guide}`,i=t.chooseLimit,g=Array.from({length:8},(o,c)=>{const m=c+1;return`<button class="guide__num-btn ${r===m?"guide__num-btn--chosen":""}" ${n?"":"disabled"}>${m}</button>`}).join("");return`
    <div class="screen-layout guide-layout">
        <header class="screen-header">
            <div class="guide__header">
                <div class="guide__title ${n?"guide__title--active":"guide__title--muted"}">${e}</div>
                <div class="guide__hint">${i}</div>
                <div class="guide__btns ${n?"guide__btns--active":"guide__btns--muted"}">${g}</div>
            </div>
        </header>

        <main class="screen-body">
            <div class="guide guide--${a} preview-clickable">
                <div class="grid grid--5">
                    ${s.cells.map((o,c)=>`
                        <div class="${A(o)}" data-index="${c}">
                            <span class="cell__content">${o.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer guide__footer"></footer>
    </div>`}function w(s,a){const t=h(p);document.body.className=`team-${s.turn.team}`;const{team:r,guideLimit:_}=s.turn,l=r===a&&_!==null,n=`${$(a,p)} ${t.dreamwalker}`,e=l?`${_} ${t.steps}`:"";return`
    <div class="screen-layout walker-layout">
        <header class="screen-header">
            <div class="walker__header">
                <div class="walker__title ${l?"walker__title--active":"walker__title--muted"}">${n}</div>
                <div class="walker__meta">
                    <div class="${l?"walker__turn-info walker__turn-info--active":"walker__turn-info walker__turn-info--muted"}">${e}</div>
                    <div class="walker__actions">
                        <span class="walker__end-hint">${t.end}</span>
                        <button class="walker__action-btn walker__refresh-btn ${l?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" aria-label="${t.endTurn}" ${l?"":"disabled"}>${u.refreshCw}</button>
                    </div>
                </div>
        </div>
        </header>

        <main class="screen-body">
            <div class="walker walker--${a} preview-clickable">
                <div class="grid grid--5">
                    ${s.cells.map((g,o)=>`
                        <div class="${y(g)}" data-index="${o}">
                            <span class="cell__content">${g.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer walker__footer"></footer>
    </div>`}function z(){return document.body.className="",`
    <div class="app">
        <div class="lang-toggle">
            <button class="lang-toggle__btn lang-toggle__btn--active">UK</button>
            <button class="lang-toggle__btn">EN</button>
        </div>
        <div class="lobby-screen">
            <div class="home-eyes" aria-hidden="true">
                ${((t=16)=>{const o=7.140000000000001,c=19*.34,m=[];for(let d=0;d<4;d+=1)for(let b=0;b<4;b+=1)m.push({r:d,c:b});for(let d=m.length-1;d>0;d-=1){const b=Math.floor(Math.random()*(d+1));[m[d],m[b]]=[m[b],m[d]]}return m.slice(0,t).map(({r:d,c:b},k)=>{const x=8+21*(b+.5),q=12+19*(d+.5),E=Math.round(x+(Math.random()*2-1)*o),C=Math.round(q+(Math.random()*2-1)*c),M=Math.round(24+Math.random()*56),L=(3+Math.random()*2).toFixed(2),T=(Math.random()*2.5).toFixed(2),S=(.3+Math.random()*.5).toFixed(2);return{id:k,size:M,left:E,top:C,period:L,delay:T,alpha:S}})})(16).map(t=>`
                    <span class="home-eye"
                        style="--eye-size:${t.size}px;--eye-left:${t.left}%;--eye-top:${t.top}%;--eye-period:${t.period}s;--eye-delay:${t.delay}s;--eye-alpha:${t.alpha};">
                        <span class="home-eye__open">${u.eye}</span>
                        <span class="home-eye__closed">${u.eyeClosed}</span>
                    </span>
                `).join("")}
            </div>
            <div class="lobby__title-wrap"><h1 class="lobby__title">SLEEPWALKERS</h1></div>
            <div class="lobby-screen__actions">
                <button class="lobby__btn lobby__btn--continue">Continue Game</button>
                <button class="lobby__btn lobby__btn--newgame">New Game</button>
            </div>
        </div>
    </div>
    <button class="btn-logout btn-icon">${u.user}</button>
    <button class="fullscreen-btn btn-icon">${u.maximize}</button>`}function H(){return new URLSearchParams(location.search).get("screen")||"game"}function X(s){const a=new URL(location.href);a.searchParams.set("screen",s),history.pushState({},"",a)}function K(s){const a=document.createElement("style");a.textContent=D,document.head.appendChild(a);const t=R();let r=!1;function _(){const n=s.querySelector(".game__qr-hub");if(!n){r=!1;return}n.classList.toggle("is-open",r)}function v(){r=!1,_()}function l(){var g;const n=H();let e="";switch(n){case"guide-resonant":e=f(t,"resonant");break;case"guide-dissonant":e=f(t,"dissonant");break;case"walker-resonant":e=w(t,"resonant");break;case"walker-dissonant":e=w(t,"dissonant");break;case"home":e=z();break;case"game":default:e=P(t);break}const i=`
            <div class="preview-nav">
                ${F.map(o=>`
                    <button class="preview-nav__btn ${o.id===n?"preview-nav__btn--active":""}" data-screen="${o.id}">${o.label}</button>
                `).join("")}
            </div>`;s.innerHTML=`${e}${i}`,_(),requestAnimationFrame(()=>{s.querySelectorAll(".cell").forEach(o=>j(o)),G(s)}),(g=s.querySelector(".preview-nav"))==null||g.addEventListener("click",o=>{const c=o.target.closest("[data-screen]");c&&(X(c.dataset.screen),l())}),s.querySelectorAll(".preview-clickable .cell").forEach(o=>{o.addEventListener("click",()=>{const c=Number(o.dataset.index);Number.isNaN(c)||(t.cells[c].revealed=!t.cells[c].revealed,l())})})}s.addEventListener("click",n=>{if(r){v();return}n.target.closest(".game__qr-trigger")&&(n.preventDefault(),r=!0,_())}),document.addEventListener("keydown",n=>{n.key==="Escape"&&r&&v()}),window.addEventListener("popstate",l),l()}export{K as initPreview};
