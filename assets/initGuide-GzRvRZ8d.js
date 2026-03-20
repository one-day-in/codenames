import{l as w,e as A,r as G,a as B,d as S,o as H,i as N,j as M,m as O}from"./turnTransitionDismiss-Xd96Dg3X.js";import{b as k,I as E,t as p,D as y,n as I}from"./url-Qg2x4s1h.js";import{i as x}from"./initGuestPage-R6L8Yu2X.js";import"./entry-8JfoYGwn.js";import"./roomRepository-DwKmHnBd.js";function R({state:i,lang:o,team:l,maxHintButtons:d,teamEffects:a,suppressedTransitionId:g}){const t=p(o),r=i.turn,_=r.team===l,T=r.guideLimit!==null,n=_&&!T&&!i.gameOver&&!i.turnTransition,e=a.allowTwoWordClue,s=a.forcedGuideLimit,c=a.hideEnemyColors,u=a.hideNightmare,m=k(l,o),b=n?`${t.guide}: ${t.chooseLimit}`:`${t.guide}: ${E.eyeClosed}`,h=[n&&s===1?t.guideForcedOneMove:null,n&&e?t.guideTwoWordClue:null,c?t.guideBlurActive:null,u?t.guideNightmareHidden:null].filter(Boolean),L=h.length?`<div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${h.join(" • ")}</div>`:"",C=Array.from({length:d},($,f)=>{const v=f+1;return`
            <button
                class="guide__num-btn ${r.guideLimit===v?"guide__num-btn--chosen":""}"
                data-limit="${v}"
                ${!n||s!==null&&v!==s?"disabled":""}
            >${v}</button>
        `}).join("");return`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${n?"guide__title--active":"guide__title--muted"}">${m}</div>
                    <div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${b}</div>
                    ${L}
                    <div class="guide__btns ${n?"guide__btns--active":"guide__btns--muted"}">${C}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${l}">
                    <div class="grid grid--5">
                        ${i.cells.map(($,f)=>`
                            <div class="${w($,{team:l,effects:a})}" data-index="${f}">
                                <span class="cell__content">${A($.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${G(i,o,{suppressedTransitionId:g})}
            ${B({state:i,lang:o,team:l})}
        </div>
    `}const j=8;async function Q(i){const o=await x(i,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${p(y).scanQr}</p>
        </div>`});if(!o)return;const{presence:l,store:d,team:a}=o;let g=!1,t=new Set,r=null;S(i,()=>{var e;return(e=d.getState())==null?void 0:e.turnTransition},async()=>{var s;const e=(s=d.getState())==null?void 0:s.turnTransition;e!=null&&e.id&&(r=e.id,n()),await d.dismissTurnTransition()});function _(e=y){g=!1,t=new Set,r=null,i.innerHTML=`<div class="waiting-screen">
            <p>${p(e).waitingGame}</p>
        </div>`}function T(e,s){(!e.turnTransition||e.turnTransition.id!==r)&&(r=null);const c=I(e.teamEffects)[a];document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${a}`);const u=N(e.cells);i.innerHTML=R({state:e,lang:s,team:a,maxHintButtons:j,teamEffects:c,suppressedTransitionId:r}),M({root:i,selector:".guide .grid .cell",currentRevealed:u,prevRevealed:t,hasRenderedBoard:g}),t=u,g=!0,requestAnimationFrame(()=>{i.querySelectorAll(".cell").forEach(m=>O(m))}),i.querySelectorAll(".guide__num-btn:not([disabled])").forEach(m=>{m.addEventListener("click",()=>d.setGuideLimit(parseInt(m.dataset.limit,10)))})}function n({state:e,language:s}={}){const c=e??d.getState(),u=s??d.getLanguage();if(!c){_(u);return}T(c,u)}d.subscribe(n),l.onChange(()=>{}),H(()=>n())}export{Q as initGuide};
