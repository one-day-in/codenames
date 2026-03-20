import{g as b,e as h,r as y,a as L,d as C,o as M,i as x,j as A,k as O}from"./turnTransitionDismiss-uFtuu3ag.js";import{b as S,f as E,I as f,t as _,D as p}from"./url-Qg2x4s1h.js";import{i as G}from"./initGuestPage-DTBR0Omg.js";import"./entry-BAZdRGRq.js";import"./roomRepository-DwKmHnBd.js";function B({state:e,lang:n,team:d}){const s=_(n),t=e.turn,o=t.team===d,c=t.guideLimit!==null,i=o&&c&&!e.gameOver&&!e.turnTransition,v=c?Math.max((t.guideLimit??0)-(t.dreamwalkerMoves??0),0):0,u=S(d,n),a=i?`${s.dreamwalker}: <span class="walker__moves-value">${E(v,n)}</span>`:`${s.dreamwalker}: ${f.eyeClosed}`;return`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__title ${i?"walker__title--active":"walker__title--muted"}">${u}</div>
                <div class="walker__header">
                    <div class="walker__meta">
                        <div class="${i?"walker__status walker__status--active":"walker__status walker__status--muted"}">${a}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${s.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${i?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${s.endTurn}" ${i?"":"disabled"}>${f.x}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${d}">
                    <div class="grid grid--5">
                        ${e.cells.map((r,l)=>`
                            <div
                                class="${b(r)} ${i&&!r.revealed?"cell--clickable":""}"
                                data-index="${l}"
                            >
                                <span class="cell__content">${h(r.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${y(e,n)}
            ${L({state:e,lang:n,team:d})}
        </div>
    `}async function N(e){const n=await G(e,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${_(p).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!n)return;const{presence:d,store:s,team:t}=n;let o=!1,c=new Set;C(e,()=>{var a;return(a=s.getState())==null?void 0:a.turnTransition},()=>s.dismissTurnTransition());function i(a=p){o=!1,c=new Set,e.innerHTML=`<div class="waiting-screen">
            <p>${_(a).waitingGame}</p>
        </div>`}function v(a,m){var k;const r=x(a.cells),l=a.turn,$=l.team===t,g=l.guideLimit!==null,T=$&&g&&!a.gameOver&&!a.turnTransition;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t}`),e.innerHTML=B({state:a,lang:m,team:t}),A({root:e,selector:".walker .grid .cell",currentRevealed:r,prevRevealed:c,hasRenderedBoard:o}),c=r,o=!0,requestAnimationFrame(()=>O(e)),e.querySelectorAll(".cell--clickable").forEach(w=>{w.addEventListener("click",()=>s.reveal(parseInt(w.dataset.index,10)))}),(k=document.getElementById("refreshBtn"))==null||k.addEventListener("click",()=>{T&&s.endTurn()})}function u({state:a,language:m}={}){const r=a??s.getState(),l=m??s.getLanguage();if(!r){i(l);return}v(r,l)}s.subscribe(u),d.onChange(()=>{}),M(()=>u())}export{N as initWalker};
