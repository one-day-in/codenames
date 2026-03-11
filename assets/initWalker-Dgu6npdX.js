import{o as O,g as I,e as H,r as x,f as M}from"./sanitize-C6Ej3ODi.js";import{t as m,D as $,h as N,f as g,g as R,j as q,I as b}from"./url-6tX14MqV.js";import{i as P}from"./initGuestPage-efLiJqDq.js";import"./entry-7LEPujMZ.js";async function z(t){const v=await P(t,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${m($).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!v)return;const{presence:h,store:l,team:c,presenceRole:p,controllerId:y}=v;let o=!1,w=new Set;function L(e=$){o=!1,w=new Set,t.innerHTML=`<div class="waiting-screen">
            <p>${m(e).waitingLobby}</p>
        </div>`}function T(e,r){o=!1,w=new Set;const a=m(r),s=e.winner===c;t.innerHTML=`
            <div class="awake-screen awake-screen--${e.winner}">
                <div class="awake-screen__content">
                    <div class="awake-screen__title">${a.awake}</div>
                    <div class="awake-screen__awakening">${N(e.winner,r)}</div>
                    <div class="awake-screen__role">${s?"🏆":"💀"} ${g(c,r)} ${a.dreamwalker}</div>
                    <button class="awake-screen__new-game-btn" id="newGameBtn">${a.newGame}</button>
                </div>
            </div>`,document.getElementById("newGameBtn").addEventListener("click",async()=>{await l.resetGame(),window.location.href=R()+"/index.html"})}function C(e,r){var k,f;const a=m(r),s=e.turn,A=s.team===c,B=s.guideLimit!==null,i=((k=e.controllerOwners)==null?void 0:k[p])===y&&A&&B&&!e.gameOver&&!e.turnTransition,E=g(c,r),_=new Set(e.cells.map((n,d)=>n.revealed?d:-1).filter(n=>n>=0)),S=i?`${a.dreamwalker}: ${q(s.guideLimit,r)}`:`${a.dreamwalker}: ${b.eyeClosed}`,G=i?"walker__status walker__status--active":"walker__status walker__status--muted";document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${c}`),t.innerHTML=`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__header">
                    <div class="walker__title ${i?"walker__title--active":"walker__title--muted"}">${E}</div>
                    <div class="walker__meta">
                        <div class="${G}">${S}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${a.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${i?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${a.endTurn}" ${i?"":"disabled"}>${b.refreshCw}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${c}">
                    <div class="grid grid--5">
                        ${e.cells.map((n,d)=>`
                            <div
                                class="${I(n)} ${i&&!n.revealed?"cell--clickable":""}"
                                data-index="${d}"
                            >
                                <span class="cell__content">${H(n.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${x(e,r)}
        </div>
    `,t.querySelectorAll(".walker .grid .cell").forEach((n,d)=>{o&&(!_.has(d)||w.has(d)||n.classList.add("cell--reveal-anim"))}),w=_,o=!0,requestAnimationFrame(()=>M(t)),t.querySelectorAll(".cell--clickable").forEach(n=>{n.addEventListener("click",()=>l.reveal(parseInt(n.dataset.index,10)))}),(f=document.getElementById("refreshBtn"))==null||f.addEventListener("click",()=>{i&&l.endTurn()})}function u({state:e,language:r}={}){const a=e??l.getState(),s=r??l.getLanguage();if(!a||a.phase==="lobby"){L(s);return}if(a.gameOver){T(a,s);return}C(a,s)}l.subscribe(u),h.onChange(()=>u()),O(()=>u())}export{z as initWalker};
