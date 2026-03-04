import{o as w,c as y,e as k}from"./sanitize-hfRfoo9X.js";import{a as u,t as x}from"./fitText-CiV-JiRu.js";import{g as B}from"./renderCell-C7h02id-.js";import{a as C,g as c}from"./url-XkLgVFj3.js";import{I as d}from"./icons-Bcd_E9sO.js";function I(o,t=130){return`<img class="qr-image"
        src="https://api.qrserver.com/v1/create-qr-code/?size=${t}x${t}&color=1D2433&bgcolor=FAF8F2&data=${encodeURIComponent(o)}"
        width="${t}" height="${t}" />`}async function S(o){const{roomId:t,token:m}=C();if(!t||!m){window.location.href=c()+"/index.html";return}const s=y(t);if(await s.init(),!s.getState()){window.location.href=c()+"/index.html";return}function p(n,l){return`${c()}/${n}.html?room=${t}&token=${m}&team=${l}`}function v(n,l){const a=x(l),{cells:i}=n,b=i.filter(e=>e.role==="resonant").length,f=i.filter(e=>e.role==="dissonant").length,$=i.filter(e=>e.role==="resonant"&&e.revealed).length,h=i.filter(e=>e.role==="dissonant"&&e.revealed).length,q=[{team:"dissonant",role:"guide",label:a.guide},{team:"dissonant",role:"walker",label:a.dreamwalker},{team:"resonant",role:"guide",label:a.guide},{team:"resonant",role:"walker",label:a.dreamwalker}];document.body.className=`team-${n.turn.team}`,o.innerHTML=`
        <div class="screen-layout game-layout">
            <header class="screen-header game__header">
                <div class="game__header-bar">
                    <button class="btn-back btn-icon" id="backBtn">${d.arrowLeft}</button>
                    <div class="game__qr-hub" aria-label="${a.qrHubLabel}">
                        <span class="game__eye-indicator" aria-hidden="true">
                            <span class="game__eye game__eye--closed">${d.eyeClosed}</span>
                            <span class="game__eye game__eye--open">${d.eye}</span>
                        </span>
                        <button class="game__qr-trigger btn-icon" type="button" aria-label="${a.showQr}">${d.qrCode}</button>
                        <div class="game__qr-modal">
                            <div class="game__qr-modal-content">
                                <p class="game__qr-hint">${a.scanToControl}</p>
                                <div class="qr-panel">
                                    ${["dissonant","resonant"].map(e=>`
                                        <div class="qr-panel__group qr-panel__group--${e}">
                                            <p class="qr-panel__group-title">${e==="dissonant"?a.dissonant:a.resonant}</p>
                                            <div class="qr-panel__group-cards">
                                                ${q.filter(r=>r.team===e).map(r=>`
                                                    <div class="qr-panel__block">
                                                        <div class="qr-wrapper">${I(p(r.role,r.team),130)}</div>
                                                        <p class="qr-panel__label">${r.label}</p>
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
                <div class="game">
                    <div class="grid grid--5">
                        ${i.map(e=>`
                            <div class="${B(e)}">
                                <span class="cell__content">${k(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>

            </main>

            <footer class="screen-footer game__footer">
                <div class="game__score">
                    <span class="game__score-item game__score-item--resonant ${n.turn.team==="resonant"?"game__score-item--active":""}">${$} / ${b}</span>
                    <span class="game__score-item game__score-item--dissonant ${n.turn.team==="dissonant"?"game__score-item--active":""}">${h} / ${f}</span>
                </div>
                <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${d.maximize}</button>
            </footer>
        </div>
        `,document.getElementById("backBtn").addEventListener("click",()=>{window.location.href=c()+"/index.html"}),document.getElementById("fullscreenBtn").addEventListener("click",()=>{var e,r,_;document.fullscreenElement?(_=document.exitFullscreen)==null||_.call(document):(r=(e=document.documentElement).requestFullscreen)==null||r.call(e)}),requestAnimationFrame(()=>u(o))}function g(){const n=s.getState(),l=s.getLanguage();if(!n){window.location.href=c()+"/index.html";return}if(n.phase==="lobby"){s.startGame().catch(a=>{console.error("Failed to start game:",a)});return}v(n,l)}s.subscribe(g),w(()=>u(o)),g()}export{S as initGame};
