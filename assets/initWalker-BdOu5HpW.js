import{g as h,e as L,r as A,a as C,o as S,f as B,h as G,i as E}from"./revealedCells-DKwX_vYq.js";import{e as I,b as p,g as M,f as x,I as $,t as m,D as g}from"./url-BkejxNIu.js";import{i as O,b as W}from"./initGuestPage-CFH49wW5.js";import"./entry-DcrdvCjS.js";function H({state:e,lang:a,team:s}){const n=m(a),t=e.winner===s;return`
        <div class="awake-screen awake-screen--${e.winner}">
            <div class="awake-screen__content">
                <div class="awake-screen__title">${n.awake}</div>
                <div class="awake-screen__awakening">${I(e.winner,a)}</div>
                <div class="awake-screen__role">${t?"🏆":"💀"} ${p(s,a)} ${n.dreamwalker}</div>
                <button class="awake-screen__new-game-btn" id="newGameBtn">${n.newGame}</button>
            </div>
        </div>
    `}function R(e,a){var s;(s=document.getElementById("newGameBtn"))==null||s.addEventListener("click",async()=>{await a.resetGame(),window.location.href=M()+"/index.html"})}function N({state:e,lang:a,team:s,syncStatus:n}){const t=m(a),c=e.turn,o=c.team===s,v=c.guideLimit!==null,d=o&&v&&!e.gameOver&&!e.turnTransition,k=p(s,a),w=d?`${t.dreamwalker}: ${x(c.guideLimit,a)}`:`${t.dreamwalker}: ${$.eyeClosed}`;return`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__header">
                    <div class="walker__title ${d?"walker__title--active":"walker__title--muted"}">${k}</div>
                    <div class="walker__meta">
                        <div class="${d?"walker__status walker__status--active":"walker__status walker__status--muted"}">${w}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${t.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${d?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${t.endTurn}" ${d?"":"disabled"}>${$.refreshCw}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${s}">
                    <div class="grid grid--5">
                        ${e.cells.map((i,l)=>`
                            <div
                                class="${h(i)} ${d&&!i.revealed?"cell--clickable":""}"
                                data-index="${l}"
                            >
                                <span class="cell__content">${L(i.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${A(n,a)}
            ${C(e,a)}
        </div>
    `}async function F(e){const a=await O(e,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${m(g).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!a)return;const{presence:s,store:n,team:t}=a;let c=!1,o=new Set;function v(r=g){c=!1,o=new Set,e.innerHTML=`<div class="waiting-screen">
            <p>${m(r).waitingGame}</p>
        </div>`}function d(r,i){c=!1,o=new Set,e.innerHTML=H({state:r,lang:i,team:t}),R(e,n)}function k(r,i){var _;const l=B(r.cells),u=r.turn,b=u.team===t,y=u.guideLimit!==null,T=b&&y&&!r.gameOver&&!r.turnTransition;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t}`),e.innerHTML=N({state:r,lang:i,team:t,syncStatus:n.getSyncStatus()}),G({root:e,selector:".walker .grid .cell",currentRevealed:l,prevRevealed:o,hasRenderedBoard:c}),o=l,c=!0,requestAnimationFrame(()=>E(e)),e.querySelectorAll(".cell--clickable").forEach(f=>{f.addEventListener("click",()=>n.reveal(parseInt(f.dataset.index,10)))}),(_=document.getElementById("refreshBtn"))==null||_.addEventListener("click",()=>{T&&n.endTurn()}),W(e,()=>n.dismissTurnTransition())}function w({state:r,language:i}={}){const l=r??n.getState(),u=i??n.getLanguage();if(!l){v(u);return}if(l.gameOver){d(l,u);return}k(l,u)}n.subscribe(w),s.onChange(()=>w()),S(()=>w())}export{F as initWalker};
