import{o as M,h as I,e as O,r as k,d as q,i as W}from"./syncIndicator-BbgSmntl.js";import{t as f,D as y,n as j,d as D,I as F}from"./url-DrpWMjE3.js";import{i as R,b as x}from"./initGuestPage--mAoUAqW.js";import"./entry-CtYOvSJy.js";const P=8;async function V(a){const h=await R(a,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${f(y).scanQr}</p>
        </div>`});if(!h)return;const{presence:b,store:d,team:r}=h;let m=!1,g=new Set;function p(i=y){m=!1,g=new Set,a.innerHTML=`<div class="waiting-screen">
            <p>${f(i).waitingGame}</p>
        </div>`}function L(i,c){const t=f(c),o=i.turn,S=o.team===r,w=o.guideLimit!==null,n=S&&!w&&!i.gameOver&&!i.turnTransition,l=j(i.teamEffects)[r],C=l.allowTwoWordClue,v=l.forcedGuideLimit,A=l.hideEnemyColors,E=l.hideNightmare;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${r}`);const B=D(r,c),G=n?`${t.guide}: ${t.chooseLimit}`:`${t.guide}: ${F.eyeClosed}`,$=[n&&v===1?t.guideForcedOneMove:null,n&&C?t.guideTwoWordClue:null,A?t.guideBlurActive:null,E?t.guideNightmareHidden:null].filter(Boolean),H=$.length?`<div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${$.join(" • ")}</div>`:"",N=Array.from({length:P},(e,s)=>{const u=s+1;return`
            <button
                class="guide__num-btn ${o.guideLimit===u?"guide__num-btn--chosen":""}"
                data-limit="${u}"
                ${!n||v!==null&&u!==v?"disabled":""}
            >${u}</button>
        `}).join(""),T=new Set(i.cells.map((e,s)=>e.revealed?s:-1).filter(e=>e>=0));a.innerHTML=`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${n?"guide__title--active":"guide__title--muted"}">${B}</div>
                    <div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${G}</div>
                    ${H}
                    <div class="guide__btns ${n?"guide__btns--active":"guide__btns--muted"}">${N}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${r}">
                    <div class="grid grid--5">
                        ${i.cells.map((e,s)=>`
                            <div class="${I(e,{team:r,effects:l})}" data-index="${s}">
                                <span class="cell__content">${O(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${k(d.getSyncStatus(),c)}
            ${q(i,c)}
        </div>
    `,a.querySelectorAll(".guide .grid .cell").forEach((e,s)=>{m&&(!T.has(s)||g.has(s)||e.classList.add("cell--reveal-anim"))}),g=T,m=!0,requestAnimationFrame(()=>{a.querySelectorAll(".cell").forEach(e=>W(e))}),a.querySelectorAll(".guide__num-btn:not([disabled])").forEach(e=>{e.addEventListener("click",()=>d.setGuideLimit(parseInt(e.dataset.limit,10)))}),x(a,()=>d.dismissTurnTransition())}function _({state:i,language:c}={}){const t=i??d.getState(),o=c??d.getLanguage();if(!t){p(o);return}L(t,o)}d.subscribe(_),b.onChange(()=>_()),M(()=>_())}export{V as initGuide};
