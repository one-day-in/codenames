import{g as y,e as h,r as L,a as C,d as M,o as S,i as x,j as A,k as O}from"./turnTransitionDismiss-Xd96Dg3X.js";import{b as E,f as G,I as p,t as k,D as T}from"./url-Qg2x4s1h.js";import{i as I}from"./initGuestPage-R6L8Yu2X.js";import"./entry-8JfoYGwn.js";import"./roomRepository-DwKmHnBd.js";function B({state:a,lang:s,team:u,suppressedTransitionId:n}){const t=k(s),i=a.turn,m=i.team===u,l=i.guideLimit!==null,d=m&&l&&!a.gameOver&&!a.turnTransition,_=l?Math.max((i.guideLimit??0)-(i.dreamwalkerMoves??0),0):0,v=E(u,s),e=d?`${t.dreamwalker}: <span class="walker__moves-value">${G(_,s)}</span>`:`${t.dreamwalker}: ${p.eyeClosed}`;return`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__title ${d?"walker__title--active":"walker__title--muted"}">${v}</div>
                <div class="walker__header">
                    <div class="walker__meta">
                        <div class="${d?"walker__status walker__status--active":"walker__status walker__status--muted"}">${e}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${t.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${d?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${t.endTurn}" ${d?"":"disabled"}>${p.x}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${u}">
                    <div class="grid grid--5">
                        ${a.cells.map((r,o)=>`
                            <div
                                class="${y(r)} ${d&&!r.revealed?"cell--clickable":""}"
                                data-index="${o}"
                            >
                                <span class="cell__content">${h(r.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${L(a,s,{suppressedTransitionId:n})}
            ${C({state:a,lang:s,team:u})}
        </div>
    `}async function W(a){const s=await I(a,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${k(T).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!s)return;const{presence:u,store:n,team:t}=s;let i=!1,m=new Set,l=null;M(a,()=>{var e;return(e=n.getState())==null?void 0:e.turnTransition},async()=>{var c;const e=(c=n.getState())==null?void 0:c.turnTransition;e!=null&&e.id&&(l=e.id,v()),await n.dismissTurnTransition()});function d(e=T){i=!1,m=new Set,l=null,a.innerHTML=`<div class="waiting-screen">
            <p>${k(e).waitingGame}</p>
        </div>`}function _(e,c){var w;(!e.turnTransition||e.turnTransition.id!==l)&&(l=null);const r=x(e.cells),o=e.turn,g=o.team===t,$=o.guideLimit!==null,b=g&&$&&!e.gameOver&&!e.turnTransition;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t}`),a.innerHTML=B({state:e,lang:c,team:t,suppressedTransitionId:l}),A({root:a,selector:".walker .grid .cell",currentRevealed:r,prevRevealed:m,hasRenderedBoard:i}),m=r,i=!0,requestAnimationFrame(()=>O(a)),a.querySelectorAll(".cell--clickable").forEach(f=>{f.addEventListener("click",()=>n.reveal(parseInt(f.dataset.index,10)))}),(w=document.getElementById("refreshBtn"))==null||w.addEventListener("click",()=>{b&&n.endTurn()})}function v({state:e,language:c}={}){const r=e??n.getState(),o=c??n.getLanguage();if(!r){d(o);return}_(r,o)}n.subscribe(v),u.onChange(()=>{}),S(()=>v())}export{W as initWalker};
