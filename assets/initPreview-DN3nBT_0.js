import{c as z}from"./boardFactory-cNgSMpV-.js";import{b as D,f as P,g as L,a as W}from"./renderCell-D2QPO2EK.js";import{I as c,g as E,f as H,t as x,D as $}from"./icons-CW5xgYQm.js";const I=`
.preview-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    display: flex;
    gap: 6px;
    padding: 8px;
    background: rgba(217, 28, 28, 0.9);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    overflow-x: auto;
}
.preview-nav__btn {
    flex: 0 0 auto;
    min-height: 34px;
    padding: 6px 12px;
    border-radius: 8px;
     border 1px solid rgb(248, 240, 240);
    font-family: monospace;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}
.preview-nav__btn--active {
    border-color: var(--pal-team-light);
    box-shadow: 0 0 16px rgba(255, 223, 174, 0.28);
}
.preview-clickable .cell {
    cursor: pointer;
}
.preview-clickable .cell:hover {
    outline: 1px solid rgba(255, 255, 255, 0.9);
    outline-offset: -1px;
}
`,B=[{id:"game",label:"Game"},{id:"guide-resonant",label:"Guide R"},{id:"guide-dissonant",label:"Guide D"},{id:"walker-resonant",label:"Walker R"},{id:"walker-dissonant",label:"Walker D"},{id:"home-guest",label:"Home Guest"},{id:"home-auth",label:"Home Auth"},{id:"home-confirm",label:"Home Confirm"}],X=["МРІЯ","ТІНЬ","ХВИЛЯ","ЗІРКА","КРИЛО","МІСЯЦЬ","ВОГОНЬ","ЛІХТАР","ДОРОГА","ПІСНЯ","КАМІНЬ","ВІТЕР","ОЗЕРО","РАНОК","ЛИСТОК","ТУМАН","БЕРЕГ","НЕБО","СТРУНА","КВІТКА","ЖАРА","ДУМКА","СЛОВО","МОРЕ","КЛЮЧ"];function Y(){const{cells:e,startsFirst:a}=z({size:5,words:X});return{phase:"game",size:5,cells:e,turn:{team:a,guideLimit:3,dreamwalkerMoves:1},gameOver:!1,winner:null}}function U(e,a=190,t="neutral"){const d={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:r,bg:_}=d[t]||d.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${a}x${a}&color=${r}&bgcolor=${_}&data=${encodeURIComponent(e)}"
        width="${a}" height="${a}" />`}function O(e){const a=x($),t={"guide-dissonant":!1,"walker-dissonant":!0,"guide-resonant":!0,"walker-resonant":!1};document.body.className=`team-${e.turn.team}`;const{cells:d}=e,r=d.filter(s=>s.role==="resonant").length,_=d.filter(s=>s.role==="dissonant").length,g=d.filter(s=>s.role==="resonant"&&s.revealed).length,o=d.filter(s=>s.role==="dissonant"&&s.revealed).length;return`
    <div class="screen-layout game-layout">
        <header class="screen-header game__header">
            <div class="game__header-bar">
                <button class="btn-back btn-icon">${c.arrowLeft}</button>
                <div class="game__qr-hub" aria-label="${a.qrHubLabel}">
                    <button class="game__qr-hit btn-flat" type="button" aria-label="${a.showQr}">
                        <span class="game__qr-caption">${a.connectControllers}</span>
                        <span class="game__qr-trigger" aria-hidden="true">${c.qrCode}</span>
                        <span class="game__eye-indicator" aria-hidden="true">
                            <span class="game__eye game__eye--closed">${c.eyeClosed}</span>
                            <span class="game__eye game__eye--open">${c.eye}</span>
                        </span>
                    </button>
                    <div class="game__qr-modal">
                        <div class="game__qr-modal-content">
                            <p class="game__qr-hint">${a.scanToControl}</p>
                            <div class="game__qr-columns">
                                ${["dissonant","resonant"].map(s=>`
                                    <section class="game__qr-team game__qr-team--${s}">
                                        <h3 class="game__qr-team-title">${E(s,$)}</h3>
                                        <div class="game__qr-cards">
                                            ${[{role:"guide",label:a.guide},{role:"walker",label:a.dreamwalker}].map(b=>`
                                                <article class="game__qr-card game__qr-card--${b.role}">
                                                    <div class="game__qr-code-wrap">${U(`${window.location.origin}/sleepwalkers/${b.role}.html?team=${s}`,130,s)}</div>
                                                    <p class="game__qr-role">
                                                        <span class="game__qr-role-eye ${t[`${b.role}-${s}`]?"is-connected":""}">
                                                            ${t[`${b.role}-${s}`]?c.eye:c.eyeClosed}
                                                        </span>
                                                        <span class="game__qr-role-text">${b.label}</span>
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
                    ${d.map((s,b)=>`
                        <div class="${L(s)}" data-index="${b}">
                            <span class="cell__content">${s.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

        </main>

        <footer class="screen-footer game__footer">
            <div class="game__score">
                <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active":""}">${g} / ${r}</span>
                <span class="game__score-item game__score-item--dissonant ${e.turn.team==="dissonant"?"game__score-item--active":""}">${o} / ${_}</span>
            </div>
            <button class="fullscreen-btn btn-icon">${c.maximize}</button>
        </footer>
    </div>`}function C(e,a){const t=x($);document.body.className="";const{guideLimit:d,team:r}=e.turn,o=r===a&&!(d!==null),s=E(a,$),b=o?`${t.guide}: ${t.chooseLimit}`:`${t.guide}: ${c.eyeClosed}`,v=Array.from({length:8},(p,f)=>{const i=f+1;return`<button class="guide__num-btn ${d===i?"guide__num-btn--chosen":""}" ${o?"":"disabled"}>${i}</button>`}).join("");return`
    <div class="screen-layout guide-layout">
        <header class="screen-header">
            <div class="guide__header">
                <div class="guide__title ${o?"guide__title--active":"guide__title--muted"}">${s}</div>
                <div class="guide__meta ${o?"guide__meta--active":"guide__meta--muted"}">${b}</div>
                <div class="guide__btns ${o?"guide__btns--active":"guide__btns--muted"}">${v}</div>
            </div>
        </header>

        <main class="screen-body">
            <div class="guide guide--${a} preview-clickable">
                <div class="grid grid--5">
                    ${e.cells.map((p,f)=>`
                        <div class="${W(p)}" data-index="${f}">
                            <span class="cell__content">${p.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer guide__footer"></footer>
    </div>`}function S(e,a){const t=x($);document.body.className=`team-${e.turn.team}`;const{team:d,guideLimit:r}=e.turn,g=d===a&&r!==null,o=E(a,$),s=g?`${t.dreamwalker}: ${H(r,$)}`:`${t.dreamwalker}: ${c.eyeClosed}`;return`
    <div class="screen-layout walker-layout">
        <header class="screen-header">
            <div class="walker__header">
                <div class="walker__title ${g?"walker__title--active":"walker__title--muted"}">${o}</div>
                <div class="walker__meta">
                    <div class="${g?"walker__status walker__status--active":"walker__status walker__status--muted"}">${s}</div>
                    <div class="walker__actions">
                        <span class="walker__end-hint">${t.endTurn}</span>
                        <button class="walker__action-btn walker__refresh-btn ${g?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" aria-label="${t.endTurn}" ${g?"":"disabled"}>${c.refreshCw}</button>
                    </div>
                </div>
        </div>
        </header>

        <main class="screen-body">
            <div class="walker walker--${a} preview-clickable">
                <div class="grid grid--5">
                    ${e.cells.map((v,p)=>`
                        <div class="${L(v)}" data-index="${p}">
                            <span class="cell__content">${v.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer walker__footer"></footer>
    </div>`}function k({isGuest:e=!1,showConfirm:a=!1}={}){document.body.className="";const t=x($),r=((o=16)=>{const h=7.140000000000001,w=19*.34,l=[];for(let n=0;n<4;n+=1)for(let u=0;u<4;u+=1)l.push({r:n,c:u});for(let n=l.length-1;n>0;n-=1){const u=Math.floor(Math.random()*(n+1));[l[n],l[u]]=[l[u],l[n]]}return l.slice(0,o).map(({r:n,c:u},y)=>{const M=8+21*(u+.5),A=12+19*(n+.5),T=Math.round(M+(Math.random()*2-1)*h),F=Math.round(A+(Math.random()*2-1)*w),N=Math.round(24+Math.random()*56),G=(3+Math.random()*2).toFixed(2),R=(Math.random()*2.5).toFixed(2),j=(.3+Math.random()*.5).toFixed(2);return{id:y,size:N,left:T,top:F,period:G,delay:R,alpha:j}})})(16),_=e?`
            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                <span class="lobby__btn-text">${t.signIn}</span>
                <span class="lobby__btn-google-icon">${c.google}</span>
            </button>
        `:`
            <div class="lobby-screen__actions">
                <button class="lobby__btn lobby__btn--continue">Continue Game</button>
                <button class="lobby__btn lobby__btn--newgame">New Game</button>
            </div>
        `,g=a?`
    <div class="confirm-modal">
        <div class="confirm-modal__backdrop"></div>
        <div class="confirm-modal__content" role="dialog" aria-modal="true">
            <h2 class="confirm-modal__title">${t.newGame}</h2>
            <p class="confirm-modal__text">${t.confirmNewGame}</p>
            <div class="confirm-modal__actions">
                <button class="lobby__btn confirm-modal__btn confirm-modal__btn--confirm">${t.confirmNewGameAction}</button>
                <button class="lobby__btn confirm-modal__btn confirm-modal__btn--cancel">${t.cancel}</button>
            </div>
        </div>
    </div>
    `:"";return`
    <div class="app">
        <div class="lang-toggle">
            <button class="lang-toggle__btn lang-toggle__btn--active">UK</button>
            <button class="lang-toggle__btn">EN</button>
        </div>
        <div class="lobby-screen">
            <div class="home-eyes" aria-hidden="true">
                ${r.map(o=>`
                    <span class="home-eye"
                        style="--eye-size:${o.size}px;--eye-left:${o.left}%;--eye-top:${o.top}%;--eye-period:${o.period}s;--eye-delay:${o.delay}s;--eye-alpha:${o.alpha};">
                        <span class="home-eye__open">${c.eye}</span>
                        <span class="home-eye__closed">${c.eyeClosed}</span>
                    </span>
                `).join("")}
            </div>
            <div class="lobby__title-wrap"><h1 class="lobby__title">SLEEPWALKERS</h1></div>
            ${_}
        </div>
    </div>
    ${e?"":`<button class="btn-logout btn-icon">${c.user}</button>`}
    <button class="fullscreen-btn btn-icon">${c.maximize}</button>
    ${g}`}function Q(){return new URLSearchParams(location.search).get("screen")||"home-guest"}function K(e){const a=new URL(location.href);a.searchParams.set("screen",e),history.pushState({},"",a)}function ee(e){const a=document.createElement("style");a.textContent=I,document.head.appendChild(a);const t=Y(),d=new Set(["game","guide-resonant","guide-dissonant","walker-resonant","walker-dissonant"]);let r=!1,_=!1,g=!1,o=!1,s=new Set;function b(){e.querySelectorAll(".fullscreen-btn").forEach(i=>{i.innerHTML=document.fullscreenElement?c.minimize:c.maximize})}function v(){const i=e.querySelector(".game__qr-hub");if(!i){r=!1,_=!1;return}const m=r||_;i.classList.toggle("is-open",m),i.classList.toggle("is-pinned",r)}function p(){r=!1,_=!1,v()}function f(){var w;const i=Q();let m="";switch(i){case"guide-resonant":m=C(t,"resonant");break;case"guide-dissonant":m=C(t,"dissonant");break;case"walker-resonant":m=S(t,"resonant");break;case"walker-dissonant":m=S(t,"dissonant");break;case"home":m=k();break;case"home-auth":m=k({isGuest:!1,showConfirm:!1});break;case"home-confirm":m=k({isGuest:!1,showConfirm:!0});break;case"home-guest":m=k({isGuest:!0,showConfirm:!1});break;case"game":default:m=O(t);break}const q=`
            <div class="preview-nav">
                ${B.map(l=>`
                    <button class="preview-nav__btn ${l.id===i?"preview-nav__btn--active":""}" data-screen="${l.id}">${l.label}</button>
                `).join("")}
            </div>`;if(e.innerHTML=`${m}${q}`,d.has(i)){const l=new Set(t.cells.map((n,u)=>n.revealed?u:-1).filter(n=>n>=0));e.querySelectorAll(".grid .cell[data-index]").forEach(n=>{const u=Number(n.dataset.index);o&&(!l.has(u)||s.has(u)||n.classList.add("cell--reveal-anim"))}),s=l,o=!0}else o=!1,s=new Set;v();const h=e.querySelector(".game__qr-hit");h==null||h.addEventListener("mouseenter",()=>{_=!0,v()}),h==null||h.addEventListener("mouseleave",()=>{_=!1,v()}),requestAnimationFrame(()=>{e.querySelectorAll(".cell").forEach(l=>D(l)),P(e)}),(w=e.querySelector(".preview-nav"))==null||w.addEventListener("click",l=>{const n=l.target.closest("[data-screen]");n&&(K(n.dataset.screen),f())}),e.querySelectorAll(".preview-clickable .cell").forEach(l=>{l.addEventListener("click",()=>{const n=Number(l.dataset.index);Number.isNaN(n)||(t.cells[n].revealed=!t.cells[n].revealed,f())})}),e.querySelectorAll(".fullscreen-btn").forEach(l=>{l.addEventListener("click",()=>{var n,u,y;document.fullscreenElement?(y=document.exitFullscreen)==null||y.call(document):(u=(n=document.documentElement).requestFullscreen)==null||u.call(n)})}),b()}e.addEventListener("click",i=>{if(i.target.closest(".game__qr-hit")){i.preventDefault(),r=!r,v();return}r&&(r=!1,v())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(r||_)&&p()}),g||(document.addEventListener("fullscreenchange",b),g=!0),window.addEventListener("popstate",f),f()}export{ee as initPreview};
