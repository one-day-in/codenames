import{c as B,o as N,f as h,g as O,e as A,r as F}from"./sanitize-B9K5B1tx.js";import{b as I,g as l,c as q,I as c,t as $}from"./icons-B2SvFG-W.js";async function G(i){const{roomId:m,token:x}=I();if(!m||!x){window.location.href=l()+"/index.html";return}const s=B(m);if(await s.init(),!s.getState()){window.location.href=l()+"/index.html";return}let u=!1,g=new Set;function w(n){const a=$(n);i.innerHTML=`
            <div class="waiting-screen">
                <p>${a.waitingLobby}</p>
            </div>
        `}function y(){i.querySelectorAll(".sandbox .grid .cell.cell--hidden").forEach(n=>{n.addEventListener("click",()=>{const a=s.getState();if(!a||a.gameOver||a.turnTransition)return;const t=Number(n.dataset.index);Number.isNaN(t)||s.reveal(t)})})}function E(n,a){var v,b;const t=$(a),{cells:o}=n,L=o.filter(e=>e.role==="resonant").length,S=o.filter(e=>e.role==="dissonant").length,T=o.filter(e=>e.role==="resonant"&&e.revealed).length,k=o.filter(e=>e.role==="dissonant"&&e.revealed).length,_=q(n.turn.team,a),f=new Set(o.map((e,r)=>e.revealed?r:-1).filter(e=>e>=0));i.innerHTML=`
            <div class="screen-layout sandbox-layout">
                <header class="screen-header sandbox__header">
                    <div class="sandbox__header-bar">
                        <button class="btn-back btn-icon" id="backBtn">${c.arrowLeft}</button>
                        <div class="sandbox__title">${t.gameName} / ${_}</div>
                        <button class="fullscreen-btn btn-icon" id="fullscreenBtn">${document.fullscreenElement?c.minimize:c.maximize}</button>
                    </div>
                </header>

                <main class="screen-body">
                    <div class="sandbox">
                        <div class="grid grid--5">
                            ${o.map((e,r)=>`
                                <div class="${O(e)}" data-index="${r}">
                                    <span class="cell__content">${A(e.word)}</span>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                </main>

                <footer class="screen-footer sandbox__footer">
                    <div class="game__score sandbox__score">
                        <span class="game__score-item game__score-item--dissonant ${n.turn.team==="dissonant"?"game__score-item--active game__score-item--expanded":""}">
                            <span class="game__score-main">${k} / ${S}</span>
                            ${n.turn.team==="dissonant"?`<span class="game__score-turn-inline">${t.dreamwalker}</span>`:""}
                        </span>
                        <span class="game__score-center ${n.gameOver?"game__score-center--finished":""}">
                            <span class="game__score-arrow game__score-arrow--${n.turn.team}" aria-hidden="true">
                                ${n.turn.team==="dissonant"?c.arrowLeft:c.arrowRight}
                            </span>
                            <span class="game__score-center-text">${n.gameOver?t.gameFinished:_}</span>
                        </span>
                        <span class="game__score-item game__score-item--resonant ${n.turn.team==="resonant"?"game__score-item--active game__score-item--expanded":""}">
                            <span class="game__score-main">${T} / ${L}</span>
                            ${n.turn.team==="resonant"?`<span class="game__score-turn-inline">${t.dreamwalker}</span>`:""}
                        </span>
                    </div>
                </footer>

                ${F(n,a)}
            </div>
        `,i.querySelectorAll(".sandbox .grid .cell").forEach((e,r)=>{u&&(!f.has(r)||g.has(r)||e.classList.add("cell--reveal-anim"))}),g=f,u=!0,(v=document.getElementById("backBtn"))==null||v.addEventListener("click",()=>{window.location.href=l()+"/index.html"}),(b=document.getElementById("fullscreenBtn"))==null||b.addEventListener("click",()=>{var e,r,p;document.fullscreenElement?(p=document.exitFullscreen)==null||p.call(document):(r=(e=document.documentElement).requestFullscreen)==null||r.call(e)}),y(),requestAnimationFrame(()=>h(i))}function d(){const n=s.getState(),a=s.getLanguage();if(!n){window.location.href=l()+"/index.html";return}if(n.phase==="lobby"){s.startGame().catch(t=>console.error("Failed to start game:",t)),w(a);return}E(n,a)}s.subscribe(d),N(()=>h(i)),document.addEventListener("fullscreenchange",d),d()}export{G as initSandbox};
