import{g as b,e as h,r as y,a as L,o as C,h as M,i as x,k as A,j as O}from"./turnTransitionDismiss-DeQWzOUS.js";import{b as E,f as G,I as f,t as _,D as p}from"./url-Qg2x4s1h.js";import{i as S}from"./initGuestPage-BY1MheCw.js";import"./entry-BWRv8-EY.js";import"./roomRepository-DwKmHnBd.js";function B({state:e,lang:n,team:d}){const a=_(n),t=e.turn,o=t.team===d,c=t.guideLimit!==null,i=o&&c&&!e.gameOver&&!e.turnTransition,v=c?Math.max((t.guideLimit??0)-(t.dreamwalkerMoves??0),0):0,u=E(d,n),s=i?`${a.dreamwalker}: <span class="walker__moves-value">${G(v,n)}</span>`:`${a.dreamwalker}: ${f.eyeClosed}`;return`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__title ${i?"walker__title--active":"walker__title--muted"}">${u}</div>
                <div class="walker__header">
                    <div class="walker__meta">
                        <div class="${i?"walker__status walker__status--active":"walker__status walker__status--muted"}">${s}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${a.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${i?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${a.endTurn}" ${i?"":"disabled"}>${f.x}</button>
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
    `}async function N(e){const n=await S(e,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${_(p).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!n)return;const{presence:d,store:a,team:t}=n;let o=!1,c=new Set;function i(s=p){o=!1,c=new Set,e.innerHTML=`<div class="waiting-screen">
            <p>${_(s).waitingGame}</p>
        </div>`}function v(s,m){var k;const r=M(s.cells),l=s.turn,$=l.team===t,g=l.guideLimit!==null,T=$&&g&&!s.gameOver&&!s.turnTransition;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t}`),e.innerHTML=B({state:s,lang:m,team:t}),x({root:e,selector:".walker .grid .cell",currentRevealed:r,prevRevealed:c,hasRenderedBoard:o}),c=r,o=!0,requestAnimationFrame(()=>A(e)),e.querySelectorAll(".cell--clickable").forEach(w=>{w.addEventListener("click",()=>a.reveal(parseInt(w.dataset.index,10)))}),(k=document.getElementById("refreshBtn"))==null||k.addEventListener("click",()=>{T&&a.endTurn()}),O(e,()=>a.dismissTurnTransition())}function u({state:s,language:m}={}){const r=s??a.getState(),l=m??a.getLanguage();if(!r){i(l);return}v(r,l)}a.subscribe(u),d.onChange(()=>{}),C(()=>u())}export{N as initWalker};
