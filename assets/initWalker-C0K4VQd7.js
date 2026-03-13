import{o as B,g as E,e as G,r as I,a as H,f as O}from"./syncIndicator-D2f8fAiK.js";import{t as w,D as f,e as x,b as $,g as M,f as N,I as g}from"./url-BkejxNIu.js";import{i as q,b as D}from"./initGuestPage-CpTiMpLy.js";import"./entry-E3Bxpwj9.js";async function F(t){const v=await q(t,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${w(f).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!v)return;const{presence:b,store:i,team:d}=v;let o=!1,m=new Set;function h(e=f){o=!1,m=new Set,t.innerHTML=`<div class="waiting-screen">
            <p>${w(e).waitingGame}</p>
        </div>`}function p(e,r){o=!1,m=new Set;const a=w(r),s=e.winner===d;t.innerHTML=`
            <div class="awake-screen awake-screen--${e.winner}">
                <div class="awake-screen__content">
                    <div class="awake-screen__title">${a.awake}</div>
                    <div class="awake-screen__awakening">${x(e.winner,r)}</div>
                    <div class="awake-screen__role">${s?"🏆":"💀"} ${$(d,r)} ${a.dreamwalker}</div>
                    <button class="awake-screen__new-game-btn" id="newGameBtn">${a.newGame}</button>
                </div>
            </div>`,document.getElementById("newGameBtn").addEventListener("click",async()=>{await i.resetGame(),window.location.href=M()+"/index.html"})}function T(e,r){var k;const a=w(r),s=e.turn,y=s.team===d,L=s.guideLimit!==null,l=y&&L&&!e.gameOver&&!e.turnTransition,S=$(d,r),_=new Set(e.cells.map((n,c)=>n.revealed?c:-1).filter(n=>n>=0)),C=l?`${a.dreamwalker}: ${N(s.guideLimit,r)}`:`${a.dreamwalker}: ${g.eyeClosed}`,A=l?"walker__status walker__status--active":"walker__status walker__status--muted";document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${d}`),t.innerHTML=`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__header">
                    <div class="walker__title ${l?"walker__title--active":"walker__title--muted"}">${S}</div>
                    <div class="walker__meta">
                        <div class="${A}">${C}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${a.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${l?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${a.endTurn}" ${l?"":"disabled"}>${g.refreshCw}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${d}">
                    <div class="grid grid--5">
                        ${e.cells.map((n,c)=>`
                            <div
                                class="${E(n)} ${l&&!n.revealed?"cell--clickable":""}"
                                data-index="${c}"
                            >
                                <span class="cell__content">${G(n.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${I(i.getSyncStatus(),r)}
            ${H(e,r)}
        </div>
    `,t.querySelectorAll(".walker .grid .cell").forEach((n,c)=>{o&&(!_.has(c)||m.has(c)||n.classList.add("cell--reveal-anim"))}),m=_,o=!0,requestAnimationFrame(()=>O(t)),t.querySelectorAll(".cell--clickable").forEach(n=>{n.addEventListener("click",()=>i.reveal(parseInt(n.dataset.index,10)))}),(k=document.getElementById("refreshBtn"))==null||k.addEventListener("click",()=>{l&&i.endTurn()}),D(t,()=>i.dismissTurnTransition())}function u({state:e,language:r}={}){const a=e??i.getState(),s=r??i.getLanguage();if(!a){h(s);return}if(a.gameOver){p(a,s);return}T(a,s)}i.subscribe(u),b.onChange(()=>u()),B(()=>u())}export{F as initWalker};
