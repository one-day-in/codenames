import{c as W}from"./boardFactory-cNgSMpV-.js";import{b as z,f as D,g as S,a as P}from"./renderCell-D2QPO2EK.js";import{I as c,g as E,f as H,t as x,D as $}from"./icons-CW5xgYQm.js";const I=`
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
`,B=[{id:"game",label:"Game"},{id:"guide-resonant",label:"Guide R"},{id:"guide-dissonant",label:"Guide D"},{id:"walker-resonant",label:"Walker R"},{id:"walker-dissonant",label:"Walker D"},{id:"home-guest",label:"Home Guest"},{id:"home-auth",label:"Home Auth"},{id:"home-confirm",label:"Home Confirm"}],X=["МРІЯ","ТІНЬ","ХВИЛЯ","ЗІРКА","КРИЛО","МІСЯЦЬ","ВОГОНЬ","ЛІХТАР","ДОРОГА","ПІСНЯ","КАМІНЬ","ВІТЕР","ОЗЕРО","РАНОК","ЛИСТОК","ТУМАН","БЕРЕГ","НЕБО","СТРУНА","КВІТКА","ЖАРА","ДУМКА","СЛОВО","МОРЕ","КЛЮЧ"];function Y(){const{cells:e,startsFirst:s}=W({size:5,words:X});return{phase:"game",size:5,cells:e,turn:{team:s,guideLimit:3,dreamwalkerMoves:1},gameOver:!1,winner:null}}function U(e,s=190,t="neutral"){const d={resonant:{color:"5A2E00",bg:"FFF3DE"},dissonant:{color:"0A3558",bg:"EAF6FF"},neutral:{color:"1E2A36",bg:"F2F6FB"}},{color:o,bg:b}=d[t]||d.neutral;return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&color=${o}&bgcolor=${b}&data=${encodeURIComponent(e)}"
        width="${s}" height="${s}" />`}function O(e){const s=x($),t={"guide-dissonant":!1,"walker-dissonant":!0,"guide-resonant":!0,"walker-resonant":!1};document.body.className=`team-${e.turn.team}`;const{cells:d}=e,o=d.filter(a=>a.role==="resonant").length,b=d.filter(a=>a.role==="dissonant").length,g=d.filter(a=>a.role==="resonant"&&a.revealed).length,r=d.filter(a=>a.role==="dissonant"&&a.revealed).length,v=e.turn.guideLimit===null?s.turnRoleGuide:s.turnRoleWalker,f=e.turn.team==="dissonant"?"game__score-turn--left":"game__score-turn--right";return`
    <div class="screen-layout game-layout">
        <header class="screen-header game__header">
            <div class="game__header-bar">
                <button class="btn-back btn-icon">${c.arrowLeft}</button>
                <div class="game__qr-hub" aria-label="${s.qrHubLabel}">
                    <button class="game__qr-hit btn-flat" type="button" aria-label="${s.showQr}">
                        <span class="game__qr-caption">${s.connectControllers}</span>
                        <span class="game__qr-trigger" aria-hidden="true">${c.qrCode}</span>
                        <span class="game__eye-indicator" aria-hidden="true">
                            <span class="game__eye game__eye--closed">${c.eyeClosed}</span>
                            <span class="game__eye game__eye--open">${c.eye}</span>
                        </span>
                    </button>
                    <div class="game__qr-modal">
                        <div class="game__qr-modal-content">
                            <p class="game__qr-hint">${s.scanToControl}</p>
                            <div class="game__qr-columns">
                                ${["dissonant","resonant"].map(a=>`
                                    <section class="game__qr-team game__qr-team--${a}">
                                        <h3 class="game__qr-team-title">${E(a,$)}</h3>
                                        <div class="game__qr-cards">
                                            ${[{role:"guide",label:s.guide},{role:"walker",label:s.dreamwalker}].map(u=>`
                                                <article class="game__qr-card game__qr-card--${u.role}">
                                                    <div class="game__qr-code-wrap">${U(`${window.location.origin}/sleepwalkers/${u.role}.html?team=${a}`,130,a)}</div>
                                                    <p class="game__qr-role">
                                                        <span class="game__qr-role-eye ${t[`${u.role}-${a}`]?"is-connected":""}">
                                                            ${t[`${u.role}-${a}`]?c.eye:c.eyeClosed}
                                                        </span>
                                                        <span class="game__qr-role-text">${u.label}</span>
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
                    ${d.map((a,u)=>`
                        <div class="${S(a)}" data-index="${u}">
                            <span class="cell__content">${a.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>

        </main>

        <footer class="screen-footer game__footer">
            <div class="game__score-wrap">
                <div class="game__score">
                    <span class="game__score-item game__score-item--dissonant ${e.turn.team==="dissonant"?"game__score-item--active":""}">${r} / ${b}</span>
                    <span class="game__score-item game__score-item--resonant ${e.turn.team==="resonant"?"game__score-item--active":""}">${g} / ${o}</span>
                </div>
                ${`
                    <div class="game__score-turn ${f}">
                        <span class="game__score-turn-dot" aria-hidden="true">•</span>
                        <span class="game__score-turn-text">${v}</span>
                    </div>
                `}
            </div>
            <button class="fullscreen-btn btn-icon">${c.maximize}</button>
        </footer>
    </div>`}function C(e,s){const t=x($);document.body.className="";const{guideLimit:d,team:o}=e.turn,r=o===s&&!(d!==null),v=E(s,$),f=r?`${t.guide}: ${t.chooseLimit}`:`${t.guide}: ${c.eyeClosed}`,a=Array.from({length:8},(u,p)=>{const i=p+1;return`<button class="guide__num-btn ${d===i?"guide__num-btn--chosen":""}" ${r?"":"disabled"}>${i}</button>`}).join("");return`
    <div class="screen-layout guide-layout">
        <header class="screen-header">
            <div class="guide__header">
                <div class="guide__title ${r?"guide__title--active":"guide__title--muted"}">${v}</div>
                <div class="guide__meta ${r?"guide__meta--active":"guide__meta--muted"}">${f}</div>
                <div class="guide__btns ${r?"guide__btns--active":"guide__btns--muted"}">${a}</div>
            </div>
        </header>

        <main class="screen-body">
            <div class="guide guide--${s} preview-clickable">
                <div class="grid grid--5">
                    ${e.cells.map((u,p)=>`
                        <div class="${P(u)}" data-index="${p}">
                            <span class="cell__content">${u.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer guide__footer"></footer>
    </div>`}function L(e,s){const t=x($);document.body.className=`team-${e.turn.team}`;const{team:d,guideLimit:o}=e.turn,g=d===s&&o!==null,r=E(s,$),v=g?`${t.dreamwalker}: ${H(o,$)}`:`${t.dreamwalker}: ${c.eyeClosed}`;return`
    <div class="screen-layout walker-layout">
        <header class="screen-header">
            <div class="walker__header">
                <div class="walker__title ${g?"walker__title--active":"walker__title--muted"}">${r}</div>
                <div class="walker__meta">
                    <div class="${g?"walker__status walker__status--active":"walker__status walker__status--muted"}">${v}</div>
                    <div class="walker__actions">
                        <span class="walker__end-hint">${t.endTurn}</span>
                        <button class="walker__action-btn walker__refresh-btn ${g?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" aria-label="${t.endTurn}" ${g?"":"disabled"}>${c.refreshCw}</button>
                    </div>
                </div>
        </div>
        </header>

        <main class="screen-body">
            <div class="walker walker--${s} preview-clickable">
                <div class="grid grid--5">
                    ${e.cells.map((a,u)=>`
                        <div class="${S(a)}" data-index="${u}">
                            <span class="cell__content">${a.word}</span>
                        </div>
                    `).join("")}
                </div>
            </div>
        </main>

        <footer class="screen-footer walker__footer"></footer>
    </div>`}function k({isGuest:e=!1,showConfirm:s=!1}={}){document.body.className="";const t=x($),o=((r=16)=>{const h=7.140000000000001,w=19*.34,l=[];for(let n=0;n<4;n+=1)for(let m=0;m<4;m+=1)l.push({r:n,c:m});for(let n=l.length-1;n>0;n-=1){const m=Math.floor(Math.random()*(n+1));[l[n],l[m]]=[l[m],l[n]]}return l.slice(0,r).map(({r:n,c:m},y)=>{const M=8+21*(m+.5),A=12+19*(n+.5),T=Math.round(M+(Math.random()*2-1)*h),F=Math.round(A+(Math.random()*2-1)*w),G=Math.round(24+Math.random()*56),N=(3+Math.random()*2).toFixed(2),R=(Math.random()*2.5).toFixed(2),j=(.3+Math.random()*.5).toFixed(2);return{id:y,size:G,left:T,top:F,period:N,delay:R,alpha:j}})})(16),b=e?`
            <button class="lobby__btn lobby__btn--google" id="loginBtn">
                <span class="lobby__btn-text">${t.signIn}</span>
                <span class="lobby__btn-google-icon">${c.google}</span>
            </button>
        `:`
            <div class="lobby-screen__actions">
                <button class="lobby__btn lobby__btn--continue">Continue Game</button>
                <button class="lobby__btn lobby__btn--newgame">New Game</button>
            </div>
        `,g=s?`
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
                ${o.map(r=>`
                    <span class="home-eye"
                        style="--eye-size:${r.size}px;--eye-left:${r.left}%;--eye-top:${r.top}%;--eye-period:${r.period}s;--eye-delay:${r.delay}s;--eye-alpha:${r.alpha};">
                        <span class="home-eye__open">${c.eye}</span>
                        <span class="home-eye__closed">${c.eyeClosed}</span>
                    </span>
                `).join("")}
            </div>
            <div class="lobby__title-wrap"><h1 class="lobby__title">SLEEPWALKERS</h1></div>
            ${b}
        </div>
    </div>
    ${e?"":`<button class="btn-logout btn-icon">${c.user}</button>`}
    <button class="fullscreen-btn btn-icon">${c.maximize}</button>
    ${g}`}function Q(){return new URLSearchParams(location.search).get("screen")||"home-guest"}function K(e){const s=new URL(location.href);s.searchParams.set("screen",e),history.pushState({},"",s)}function ee(e){const s=document.createElement("style");s.textContent=I,document.head.appendChild(s);const t=Y(),d=new Set(["game","guide-resonant","guide-dissonant","walker-resonant","walker-dissonant"]);let o=!1,b=!1,g=!1,r=!1,v=new Set;function f(){e.querySelectorAll(".fullscreen-btn").forEach(i=>{i.innerHTML=document.fullscreenElement?c.minimize:c.maximize})}function a(){const i=e.querySelector(".game__qr-hub");if(!i){o=!1,b=!1;return}const _=o||b;i.classList.toggle("is-open",_),i.classList.toggle("is-pinned",o)}function u(){o=!1,b=!1,a()}function p(){var w;const i=Q();let _="";switch(i){case"guide-resonant":_=C(t,"resonant");break;case"guide-dissonant":_=C(t,"dissonant");break;case"walker-resonant":_=L(t,"resonant");break;case"walker-dissonant":_=L(t,"dissonant");break;case"home":_=k();break;case"home-auth":_=k({isGuest:!1,showConfirm:!1});break;case"home-confirm":_=k({isGuest:!1,showConfirm:!0});break;case"home-guest":_=k({isGuest:!0,showConfirm:!1});break;case"game":default:_=O(t);break}const q=`
            <div class="preview-nav">
                ${B.map(l=>`
                    <button class="preview-nav__btn ${l.id===i?"preview-nav__btn--active":""}" data-screen="${l.id}">${l.label}</button>
                `).join("")}
            </div>`;if(e.innerHTML=`${_}${q}`,d.has(i)){const l=new Set(t.cells.map((n,m)=>n.revealed?m:-1).filter(n=>n>=0));e.querySelectorAll(".grid .cell[data-index]").forEach(n=>{const m=Number(n.dataset.index);r&&(!l.has(m)||v.has(m)||n.classList.add("cell--reveal-anim"))}),v=l,r=!0}else r=!1,v=new Set;a();const h=e.querySelector(".game__qr-hit");h==null||h.addEventListener("mouseenter",()=>{b=!0,a()}),h==null||h.addEventListener("mouseleave",()=>{b=!1,a()}),requestAnimationFrame(()=>{e.querySelectorAll(".cell").forEach(l=>z(l)),D(e)}),(w=e.querySelector(".preview-nav"))==null||w.addEventListener("click",l=>{const n=l.target.closest("[data-screen]");n&&(K(n.dataset.screen),p())}),e.querySelectorAll(".preview-clickable .cell").forEach(l=>{l.addEventListener("click",()=>{const n=Number(l.dataset.index);Number.isNaN(n)||(t.cells[n].revealed=!t.cells[n].revealed,p())})}),e.querySelectorAll(".fullscreen-btn").forEach(l=>{l.addEventListener("click",()=>{var n,m,y;document.fullscreenElement?(y=document.exitFullscreen)==null||y.call(document):(m=(n=document.documentElement).requestFullscreen)==null||m.call(n)})}),f()}e.addEventListener("click",i=>{if(i.target.closest(".game__qr-hit")){i.preventDefault(),o=!o,a();return}o&&(o=!1,a())}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(o||b)&&u()}),g||(document.addEventListener("fullscreenchange",f),g=!0),window.addEventListener("popstate",p),p()}export{ee as initPreview};
