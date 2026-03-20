import{l as C,e as w,r as A,a as G,o as B,h as H,i as N,m as S,j as M}from"./turnTransitionDismiss-DeQWzOUS.js";import{b as O,I as k,t as f,D as T,n as E}from"./url-Qg2x4s1h.js";import{i as x}from"./initGuestPage-BY1MheCw.js";import"./entry-BWRv8-EY.js";import"./roomRepository-DwKmHnBd.js";function I({state:e,lang:d,team:a,maxHintButtons:r,teamEffects:t}){const i=f(d),o=e.turn,v=o.team===a,_=o.guideLimit!==null,n=v&&!_&&!e.gameOver&&!e.turnTransition,s=t.allowTwoWordClue,l=t.forcedGuideLimit,c=t.hideEnemyColors,u=t.hideNightmare,m=O(a,d),b=n?`${i.guide}: ${i.chooseLimit}`:`${i.guide}: ${k.eyeClosed}`,p=[n&&l===1?i.guideForcedOneMove:null,n&&s?i.guideTwoWordClue:null,c?i.guideBlurActive:null,u?i.guideNightmareHidden:null].filter(Boolean),y=p.length?`<div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${p.join(" • ")}</div>`:"",L=Array.from({length:r},($,h)=>{const g=h+1;return`
            <button
                class="guide__num-btn ${o.guideLimit===g?"guide__num-btn--chosen":""}"
                data-limit="${g}"
                ${!n||l!==null&&g!==l?"disabled":""}
            >${g}</button>
        `}).join("");return`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${n?"guide__title--active":"guide__title--muted"}">${m}</div>
                    <div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${b}</div>
                    ${y}
                    <div class="guide__btns ${n?"guide__btns--active":"guide__btns--muted"}">${L}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${a}">
                    <div class="grid grid--5">
                        ${e.cells.map(($,h)=>`
                            <div class="${C($,{team:a,effects:t})}" data-index="${h}">
                                <span class="cell__content">${w($.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${A(e,d)}
            ${G({state:e,lang:d,team:a})}
        </div>
    `}const R=8;async function z(e){const d=await x(e,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${f(T).scanQr}</p>
        </div>`});if(!d)return;const{presence:a,store:r,team:t}=d;let i=!1,o=new Set;function v(s=T){i=!1,o=new Set,e.innerHTML=`<div class="waiting-screen">
            <p>${f(s).waitingGame}</p>
        </div>`}function _(s,l){const c=E(s.teamEffects)[t];document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t}`);const u=H(s.cells);e.innerHTML=I({state:s,lang:l,team:t,maxHintButtons:R,teamEffects:c}),N({root:e,selector:".guide .grid .cell",currentRevealed:u,prevRevealed:o,hasRenderedBoard:i}),o=u,i=!0,requestAnimationFrame(()=>{e.querySelectorAll(".cell").forEach(m=>S(m))}),e.querySelectorAll(".guide__num-btn:not([disabled])").forEach(m=>{m.addEventListener("click",()=>r.setGuideLimit(parseInt(m.dataset.limit,10)))}),M(e,()=>r.dismissTurnTransition())}function n({state:s,language:l}={}){const c=s??r.getState(),u=l??r.getLanguage();if(!c){v(u);return}_(c,u)}r.subscribe(n),a.onChange(()=>{}),B(()=>n())}export{z as initGuide};
