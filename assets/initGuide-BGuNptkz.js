import{l as C,e as w,r as A,a as G,d as B,o as H,i as S,j as N,m as M}from"./turnTransitionDismiss-uFtuu3ag.js";import{b as O,I as k,t as h,D as p,n as E}from"./url-Qg2x4s1h.js";import{i as x}from"./initGuestPage-DTBR0Omg.js";import"./entry-BAZdRGRq.js";import"./roomRepository-DwKmHnBd.js";function I({state:e,lang:a,team:r,maxHintButtons:d,teamEffects:s}){const n=h(a),o=e.turn,v=o.team===r,_=o.guideLimit!==null,t=v&&!_&&!e.gameOver&&!e.turnTransition,i=s.allowTwoWordClue,l=s.forcedGuideLimit,c=s.hideEnemyColors,u=s.hideNightmare,m=O(r,a),b=t?`${n.guide}: ${n.chooseLimit}`:`${n.guide}: ${k.eyeClosed}`,T=[t&&l===1?n.guideForcedOneMove:null,t&&i?n.guideTwoWordClue:null,c?n.guideBlurActive:null,u?n.guideNightmareHidden:null].filter(Boolean),y=T.length?`<div class="guide__meta ${t?"guide__meta--active":"guide__meta--muted"}">${T.join(" • ")}</div>`:"",L=Array.from({length:d},($,f)=>{const g=f+1;return`
            <button
                class="guide__num-btn ${o.guideLimit===g?"guide__num-btn--chosen":""}"
                data-limit="${g}"
                ${!t||l!==null&&g!==l?"disabled":""}
            >${g}</button>
        `}).join("");return`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${t?"guide__title--active":"guide__title--muted"}">${m}</div>
                    <div class="guide__meta ${t?"guide__meta--active":"guide__meta--muted"}">${b}</div>
                    ${y}
                    <div class="guide__btns ${t?"guide__btns--active":"guide__btns--muted"}">${L}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${r}">
                    <div class="grid grid--5">
                        ${e.cells.map(($,f)=>`
                            <div class="${C($,{team:r,effects:s})}" data-index="${f}">
                                <span class="cell__content">${w($.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${A(e,a)}
            ${G({state:e,lang:a,team:r})}
        </div>
    `}const R=8;async function z(e){const a=await x(e,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${h(p).scanQr}</p>
        </div>`});if(!a)return;const{presence:r,store:d,team:s}=a;let n=!1,o=new Set;B(e,()=>{var i;return(i=d.getState())==null?void 0:i.turnTransition},()=>d.dismissTurnTransition());function v(i=p){n=!1,o=new Set,e.innerHTML=`<div class="waiting-screen">
            <p>${h(i).waitingGame}</p>
        </div>`}function _(i,l){const c=E(i.teamEffects)[s];document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${s}`);const u=S(i.cells);e.innerHTML=I({state:i,lang:l,team:s,maxHintButtons:R,teamEffects:c}),N({root:e,selector:".guide .grid .cell",currentRevealed:u,prevRevealed:o,hasRenderedBoard:n}),o=u,n=!0,requestAnimationFrame(()=>{e.querySelectorAll(".cell").forEach(m=>M(m))}),e.querySelectorAll(".guide__num-btn:not([disabled])").forEach(m=>{m.addEventListener("click",()=>d.setGuideLimit(parseInt(m.dataset.limit,10)))})}function t({state:i,language:l}={}){const c=i??d.getState(),u=l??d.getLanguage();if(!c){v(u);return}_(c,u)}d.subscribe(t),r.onChange(()=>{}),H(()=>t())}export{z as initGuide};
