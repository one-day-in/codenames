import{k as I,o as L,c as C,a as x,R as u,e as A}from"./sanitize-hr0MzWWz.js";import{a as h,t as N}from"./fitText-Bd138XTN.js";import{g as T}from"./renderCell-C7h02id-.js";import{a as B,g as m}from"./url-XkLgVFj3.js";import{I as o}from"./icons-Bcd_E9sO.js";function D(r,s=130){return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&color=1D2433&bgcolor=FAF8F2&data=${encodeURIComponent(r)}"
        width="${s}" height="${s}" />`}async function Q(r){const{roomId:s,token:$}=B();if(!s||!$){window.location.href=m()+"/index.html";return}const g=C(s);g.listen(),I(g);const l=x(s);if(await l.init(),!l.getState()){window.location.href=m()+"/index.html";return}function q(a,i){return`${m()}/${a}.html?room=${s}&token=${$}&team=${i}`}let c=!1;function p(){const a=r.querySelector(".game__qr-hub");if(!a){c=!1;return}a.classList.toggle("is-open",c)}function b(){c=!1,p()}function y(a,i,_){const n=N(i),{cells:d}=a,w=d.filter(e=>e.role==="resonant").length,k=d.filter(e=>e.role==="dissonant").length,E=d.filter(e=>e.role==="resonant"&&e.revealed).length,S=d.filter(e=>e.role==="dissonant"&&e.revealed).length,R=[{team:"dissonant",role:"guide",label:n.guide,presenceRole:u.GUIDE_DISSONANT},{team:"dissonant",role:"walker",label:n.dreamwalker,presenceRole:u.WALKER_DISSONANT},{team:"resonant",role:"guide",label:n.guide,presenceRole:u.GUIDE_RESONANT},{team:"resonant",role:"walker",label:n.dreamwalker,presenceRole:u.WALKER_RESONANT}];document.body.className=`team-${a.turn.team}`,r.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${o.arrowLeft}</button>
                    <div class="game__qr-hub" aria-label="${n.qrHubLabel}">
                        <button class="game__qr-trigger btn-icon" type="button" aria-label="${n.showQr}">${o.qrCode}</button>
                        <span class="game__qr-caption">${n.connectControllers}</span>
                        <span class="game__eye-indicator" aria-hidden="true">
                            <span class="game__eye game__eye--closed">${o.eyeClosed}</span>
                            <span class="game__eye game__eye--open">${o.eye}</span>
                        </span>
                        <div class="game__qr-modal">
                            <div class="game__qr-modal-content">
                                <p class="game__qr-hint">${n.scanToControl}</p>
                                <div class="game__qr-columns">
                                    ${["dissonant","resonant"].map(e=>`
                                        <section class="game__qr-team game__qr-team--${e}">
                                            <h3 class="game__qr-team-title">${e==="dissonant"?n.dissonant:n.resonant}</h3>
                                            <div class="game__qr-cards">
                                                ${R.filter(t=>t.team===e).map(t=>`
                                                    <article class="game__qr-card game__qr-card--${t.role}">
                                                        <div class="game__qr-code-wrap">${D(q(t.role,t.team),130)}</div>
                                                        <p class="game__qr-role">
                                                            <span class="game__qr-role-eye ${_[t.presenceRole]?"is-connected":""}">
                                                                ${_[t.presenceRole]?o.eye:o.eyeClosed}
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
                        ${d.map(e=>`
                            <div class="${T(e)}">
                                <span class="cell__content">${A(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--resonant ${a.turn.team==="resonant"?"game__score-item--active":""}">${E} / ${w}</span>
                    <span class="game__score-item game__score-item--dissonant ${a.turn.team==="dissonant"?"game__score-item--active":""}">${S} / ${k}</span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${o.maximize}</button>
            </footer>
        </div>
        `,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=m()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var e,t,v;document.fullscreenElement?(v=document.exitFullscreen)==null||v.call(document):(t=(e=document.documentElement).requestFullscreen)==null||t.call(e)}),p(),requestAnimationFrame(()=>h(r))}function f(){const a=l.getState(),i=l.getLanguage(),_=g.getPresenceState();if(!a){window.location.href=m()+"/index.html";return}if(a.phase==="lobby"){l.startGame().catch(n=>{console.error("Failed to start game:",n)});return}y(a,i,_)}l.subscribe(f),g.onChange(f),L(()=>h(r)),r.addEventListener("click",a=>{if(c){b();return}a.target.closest(".game__qr-trigger")&&(a.preventDefault(),c=!0,p())}),document.addEventListener("keydown",a=>{a.key==="Escape"&&c&&b()}),f()}export{Q as initGame};
