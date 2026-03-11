import{o as k,a as q,e as R,r as W,b as j}from"./sanitize-d-swCcn9.js";import{t as f,D as y,n as F,f as x,I as D}from"./url-6tX14MqV.js";import{i as P}from"./initGuestPage-B1Ojcrwt.js";import"./entry-GKl8-ezo.js";const U=8;async function Z(a){const h=await P(a,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${f(y).scanQr}</p>
        </div>`});if(!h)return;const{presence:T,store:c,team:d,presenceRole:L,controllerId:w}=h;let m=!1,g=new Set;function C(i=y){m=!1,g=new Set,a.innerHTML=`<div class="waiting-screen">
            <p>${f(i).waitingLobby}</p>
        </div>`}function A(i,o){var p;const t=f(o),r=i.turn,E=r.team===d,S=r.guideLimit!==null,n=((p=i.controllerOwners)==null?void 0:p[L])===w&&E&&!S&&!i.gameOver&&!i.turnTransition,l=F(i.teamEffects)[d],B=l.allowTwoWordClue,v=l.forcedGuideLimit,H=l.hideEnemyColors,G=l.hideNightmare;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${d}`);const N=x(d,o),O=n?`${t.guide}: ${t.chooseLimit}`:`${t.guide}: ${D.eyeClosed}`,$=[n&&v===1?t.guideForcedOneMove:null,n&&B?t.guideTwoWordClue:null,H?t.guideBlurActive:null,G?t.guideNightmareHidden:null].filter(Boolean),M=$.length?`<div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${$.join(" • ")}</div>`:"",I=Array.from({length:U},(e,s)=>{const u=s+1;return`
            <button
                class="guide__num-btn ${r.guideLimit===u?"guide__num-btn--chosen":""}"
                data-limit="${u}"
                ${!n||v!==null&&u!==v?"disabled":""}
            >${u}</button>
        `}).join(""),b=new Set(i.cells.map((e,s)=>e.revealed?s:-1).filter(e=>e>=0));a.innerHTML=`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${n?"guide__title--active":"guide__title--muted"}">${N}</div>
                    <div class="guide__meta ${n?"guide__meta--active":"guide__meta--muted"}">${O}</div>
                    ${M}
                    <div class="guide__btns ${n?"guide__btns--active":"guide__btns--muted"}">${I}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${d}">
                    <div class="grid grid--5">
                        ${i.cells.map((e,s)=>`
                            <div class="${q(e,{team:d,effects:l})}" data-index="${s}">
                                <span class="cell__content">${R(e.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${W(i,o)}
        </div>
    `,a.querySelectorAll(".guide .grid .cell").forEach((e,s)=>{m&&(!b.has(s)||g.has(s)||e.classList.add("cell--reveal-anim"))}),g=b,m=!0,requestAnimationFrame(()=>{a.querySelectorAll(".cell").forEach(e=>j(e))}),a.querySelectorAll(".guide__num-btn:not([disabled])").forEach(e=>{e.addEventListener("click",()=>c.setGuideLimit(parseInt(e.dataset.limit,10)))})}function _({state:i,language:o}={}){const t=i??c.getState(),r=o??c.getLanguage();if(!t||t.phase==="lobby"){C(r);return}A(t,r)}c.subscribe(_),T.onChange(()=>_()),k(()=>_())}export{Z as initGuide};
