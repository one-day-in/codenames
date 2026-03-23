import{l as k,e as P,r as B,a as H,f as x,o as E,i as N,j as O,m as M}from"./turnTransitionDismiss-Bix9TJnx.js";import{e as j,I as q,t as G,D as C,n as W}from"./roomRepository-BHUUrAsq.js";import{i as D,r as F,g as U}from"./controllerRolePicker-kJhTgBq4.js";import"./entry-_NpZif-m.js";function z({state:n,lang:a,team:d,maxHintButtons:o,teamEffects:l,suppressedTransitionId:_,controllerRolePickerHtml:S=""}){const c=G(a),p=n.turn,y=p.team===d,T=p.guideLimit!==null,s=y&&!T&&!n.gameOver&&!n.turnTransition,v=l.allowTwoWordClue,r=l.forcedGuideLimit,f=l.hideEnemyColors,w=l.hideNightmare,b=j(d,a),L=s?`${c.guide}: ${c.chooseLimit}`:`${c.guide}: ${q.eyeClosed}`,u=[s&&r===1?c.guideForcedOneMove:null,s&&v?c.guideTwoWordClue:null,f?c.guideBlurActive:null,w?c.guideNightmareHidden:null].filter(Boolean),e=u.length?`<div class="guide__meta ${s?"guide__meta--active":"guide__meta--muted"}">${u.join(" • ")}</div>`:"",t=Array.from({length:o},(m,g)=>{const i=g+1;return`
            <button
                class="guide__num-btn ${p.guideLimit===i?"guide__num-btn--chosen":""}"
                data-limit="${i}"
                ${!s||r!==null&&i!==r?"disabled":""}
            >${i}</button>
        `}).join("");return`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${s?"guide__title--active":"guide__title--muted"}">${b}</div>
                    <div class="guide__meta ${s?"guide__meta--active":"guide__meta--muted"}">${L}</div>
                    ${e}
                    <div class="guide__btns ${s?"guide__btns--active":"guide__btns--muted"}">${t}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${d}">
                    <div class="grid grid--5">
                        ${n.cells.map((m,g)=>`
                            <div class="${k(m,{team:d,effects:l})}" data-index="${g}">
                                <span class="cell__content">${P(m.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${B(n,a,{suppressedTransitionId:_})}
            ${H({state:n,lang:a,team:d})}
            ${S}
        </div>
    `}const K=8,I=n=>`nw-controller-game:${n}`;function Q(n){try{return sessionStorage.getItem(I(n))}catch{return null}}function A(n,a){try{a?sessionStorage.setItem(I(n),a):sessionStorage.removeItem(I(n))}catch{}}async function ee(n){const a=await D(n,{roleType:"guide",invalidParamsHtml:`<div class="waiting-screen">
            <p>${G(C).scanQr}</p>
        </div>`});if(!a)return;const{presence:d,store:o,team:l,roomId:_,roleType:S,guestUrl:c,getPresenceRole:p,setPresenceRole:y}=a;let T=!1,s=new Set,v=null,r=!1,f=Q(_);x(n,()=>{var e;return(e=o.getState())==null?void 0:e.turnTransition},async()=>{var t;const e=(t=o.getState())==null?void 0:t.turnTransition;e!=null&&e.id&&(v=e.id,u()),await o.dismissTurnTransition()});function w(e=C){T=!1,s=new Set,v=null,r=!1,n.innerHTML=`<div class="waiting-screen">
            <p>${G(e).waitingGame}</p>
        </div>`}function b(e){const t=(e==null?void 0:e.gameId)??null;if(!t){f=null,A(_,null),r=!1;return}if(!f){f=t,A(_,t);return}t!==f&&!r&&(r=!0,y(null).then(()=>u()))}function L(e,t){b(e),(!e.turnTransition||e.turnTransition.id!==v)&&(v=null);const m=W(e.teamEffects)[l];document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${l}`);const g=N(e.cells);n.innerHTML=z({state:e,lang:t,team:l,maxHintButtons:K,teamEffects:m,suppressedTransitionId:v,controllerRolePickerHtml:r?F({language:t,presenceState:d.getPresenceState(),currentPresenceRole:p()}):""}),O({root:n,selector:".guide .grid .cell",currentRevealed:g,prevRevealed:s,hasRenderedBoard:T}),s=g,T=!0,requestAnimationFrame(()=>{n.querySelectorAll(".cell").forEach(i=>M(i))}),n.querySelectorAll(".guide__num-btn:not([disabled])").forEach(i=>{i.addEventListener("click",()=>o.setGuideLimit(parseInt(i.dataset.limit,10)))}),n.querySelectorAll("[data-controller-role-picker] button[data-role-type][data-team]").forEach(i=>{i.addEventListener("click",async()=>{const $=i.dataset.roleType,h=i.dataset.team,R=U($,h);if(!d.getPresenceState()[R]){if(f=e.gameId,A(_,e.gameId),r=!1,$===S&&h===l){await y(R),u();return}window.location.href=c($,h)}})})}function u({state:e,language:t}={}){const m=e??o.getState(),g=t??o.getLanguage();if(!m){w(g);return}L(m,g)}o.subscribe(u),d.onChange(()=>{r&&u()}),E(()=>u())}export{ee as initGuide};
