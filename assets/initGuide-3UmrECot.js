import{j as S,e as w,r as A,a as B,o as G,f as H,h as N,k}from"./revealedCells-DwXIVMT6.js";import{b as M,I as E,t as h,D as T,n as I}from"./url-BkejxNIu.js";import{i as x,b as O}from"./initGuestPage-QjZeZkqA.js";import"./entry-KexUoWPs.js";import"./roomRepository-DOzx6gVt.js";function R({state:i,lang:a,team:o,syncStatus:s,maxHintButtons:u,teamEffects:t}){const n=h(a),c=i.turn,v=c.team===o,m=c.guideLimit!==null,e=v&&!m&&!i.gameOver&&!i.turnTransition,g=t.allowTwoWordClue,d=t.forcedGuideLimit,r=t.hideEnemyColors,l=t.hideNightmare,y=M(o,a),b=e?`${n.guide}: ${n.chooseLimit}`:`${n.guide}: ${E.eyeClosed}`,p=[e&&d===1?n.guideForcedOneMove:null,e&&g?n.guideTwoWordClue:null,r?n.guideBlurActive:null,l?n.guideNightmareHidden:null].filter(Boolean),L=p.length?`<div class="guide__meta ${e?"guide__meta--active":"guide__meta--muted"}">${p.join(" • ")}</div>`:"",C=Array.from({length:u},($,f)=>{const _=f+1;return`
            <button
                class="guide__num-btn ${c.guideLimit===_?"guide__num-btn--chosen":""}"
                data-limit="${_}"
                ${!e||d!==null&&_!==d?"disabled":""}
            >${_}</button>
        `}).join("");return`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${e?"guide__title--active":"guide__title--muted"}">${y}</div>
                    <div class="guide__meta ${e?"guide__meta--active":"guide__meta--muted"}">${b}</div>
                    ${L}
                    <div class="guide__btns ${e?"guide__btns--active":"guide__btns--muted"}">${C}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${o}">
                    <div class="grid grid--5">
                        ${i.cells.map(($,f)=>`
                            <div class="${S($,{team:o,effects:t})}" data-index="${f}">
                                <span class="cell__content">${w($.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${A(s,a)}
            ${B(i,a)}
        </div>
    `}const j=8;async function Q(i){const a=await x(i,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${h(T).scanQr}</p>
        </div>`});if(!a)return;const{presence:o,store:s,team:u}=a;let t=!1,n=new Set;function c(e=T){t=!1,n=new Set,i.innerHTML=`<div class="waiting-screen">
            <p>${h(e).waitingGame}</p>
        </div>`}function v(e,g){const d=I(e.teamEffects)[u];document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${u}`);const r=H(e.cells);i.innerHTML=R({state:e,lang:g,team:u,syncStatus:s.getSyncStatus(),maxHintButtons:j,teamEffects:d}),N({root:i,selector:".guide .grid .cell",currentRevealed:r,prevRevealed:n,hasRenderedBoard:t}),n=r,t=!0,requestAnimationFrame(()=>{i.querySelectorAll(".cell").forEach(l=>k(l))}),i.querySelectorAll(".guide__num-btn:not([disabled])").forEach(l=>{l.addEventListener("click",()=>s.setGuideLimit(parseInt(l.dataset.limit,10)))}),O(i,()=>s.dismissTurnTransition())}function m({state:e,language:g}={}){const d=e??s.getState(),r=g??s.getLanguage();if(!d){c(r);return}v(d,r)}s.subscribe(m),o.onChange(()=>m()),G(()=>m())}export{Q as initGuide};
