import{g as O,e as B,r as H,a as q,f as D,o as N,i as U,j as W,k as j}from"./turnTransitionDismiss-Bix9TJnx.js";import{e as F,f as K,I as P,t as b,D as A}from"./roomRepository-BHUUrAsq.js";import{i as z,r as J,g as Q}from"./controllerRolePicker-kJhTgBq4.js";import"./entry-_NpZif-m.js";function V({state:n,lang:a,team:c,suppressedTransitionId:t,controllerRolePickerHtml:u=""}){const s=b(a),m=n.turn,T=m.team===c,p=m.guideLimit!==null,l=T&&p&&!n.gameOver&&!n.turnTransition,g=p?Math.max((m.guideLimit??0)-(m.dreamwalkerMoves??0),0):0,k=F(c,a),d=l?`${s.dreamwalker}: <span class="walker__moves-value">${K(g,a)}</span>`:`${s.dreamwalker}: ${P.eyeClosed}`;return`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__title ${l?"walker__title--active":"walker__title--muted"}">${k}</div>
                <div class="walker__header">
                    <div class="walker__meta">
                        <div class="${l?"walker__status walker__status--active":"walker__status walker__status--muted"}">${d}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${s.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${l?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${s.endTurn}" ${l?"":"disabled"}>${P.x}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${c}">
                    <div class="grid grid--5">
                        ${n.cells.map((i,y)=>`
                            <div
                                class="${O(i)} ${l&&!i.revealed?"cell--clickable":""}"
                                data-index="${y}"
                            >
                                <span class="cell__content">${B(i.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${H(n,a,{suppressedTransitionId:t})}
            ${q({state:n,lang:a,team:c})}
            ${u}
        </div>
    `}const L=n=>`nw-controller-game:${n}`;function X(n){try{return sessionStorage.getItem(L(n))}catch{return null}}function S(n,a){try{a?sessionStorage.setItem(L(n),a):sessionStorage.removeItem(L(n))}catch{}}async function ae(n){const a=await z(n,{roleType:"walker",invalidParamsHtml:`<div class="error-screen">
            <p>${b(A).wrongLink.replace(`
`,"<br>")}</p>
        </div>`});if(!a)return;const{presence:c,store:t,team:u,roomId:s,roleType:m,guestUrl:T,getPresenceRole:p,setPresenceRole:l}=a;let g=!1,k=new Set,d=null,o=!1,i=X(s);D(n,()=>{var e;return(e=t.getState())==null?void 0:e.turnTransition},async()=>{var r;const e=(r=t.getState())==null?void 0:r.turnTransition;e!=null&&e.id&&(d=e.id,v()),await t.dismissTurnTransition()});function y(e=A){g=!1,k=new Set,d=null,o=!1,n.innerHTML=`<div class="waiting-screen">
            <p>${b(e).waitingGame}</p>
        </div>`}function C(e){const r=(e==null?void 0:e.gameId)??null;if(!r){i=null,S(s,null),o=!1;return}if(!i){i=r,S(s,r);return}r!==i&&!o&&(o=!0,l(null).then(()=>v()))}function x(e,r){var I;C(e),(!e.turnTransition||e.turnTransition.id!==d)&&(d=null);const w=U(e.cells),_=e.turn,G=_.team===u,M=_.guideLimit!==null,E=G&&M&&!e.gameOver&&!e.turnTransition;document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${u}`),n.innerHTML=V({state:e,lang:r,team:u,suppressedTransitionId:d,controllerRolePickerHtml:o?J({language:r,presenceState:c.getPresenceState(),currentPresenceRole:p()}):""}),W({root:n,selector:".walker .grid .cell",currentRevealed:w,prevRevealed:k,hasRenderedBoard:g}),k=w,g=!0,requestAnimationFrame(()=>j(n)),n.querySelectorAll(".cell--clickable").forEach(f=>{f.addEventListener("click",()=>t.reveal(parseInt(f.dataset.index,10)))}),(I=document.getElementById("refreshBtn"))==null||I.addEventListener("click",()=>{E&&t.endTurn()}),n.querySelectorAll("[data-controller-role-picker] button[data-role-type][data-team]").forEach(f=>{f.addEventListener("click",async()=>{const $=f.dataset.roleType,h=f.dataset.team,R=Q($,h);if(!c.getPresenceState()[R]){if(i=e.gameId,S(s,e.gameId),o=!1,$===m&&h===u){await l(R),v();return}window.location.href=T($,h)}})})}function v({state:e,language:r}={}){const w=e??t.getState(),_=r??t.getLanguage();if(!w){y(_);return}x(w,_)}t.subscribe(v),c.onChange(()=>{o&&v()}),N(()=>v())}export{ae as initWalker};
