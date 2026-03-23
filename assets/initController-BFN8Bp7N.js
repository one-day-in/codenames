import{C as I,m as ee,e as V,r as K,a as Q,g as ne,c as te,p as F,d as re,i as ie,o as oe,f as ae,n as B,j as z,k as D,q as le,l as se}from"./turnTransitionDismiss-BCrGXuNK.js";import{t as R,e as M,I as x,f as ce,h as de,k as ue,D as J,n as me}from"./roomRepository-DkWECZGj.js";import"./entry-CuE4sIVp.js";function ge(e){const n=R(e);let l=[];function s(){const o=Math.min(window.innerWidth,window.innerHeight),i=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&o<=768&&i<=1024}async function m(){var o;if(s())try{(o=screen.orientation)!=null&&o.lock&&await screen.orientation.lock("portrait")}catch{}}function d(){let o=document.getElementById("orientation-guard");return o||(o=document.createElement("div"),o.id="orientation-guard",o.className="orientation-guard",o.setAttribute("aria-live","polite"),o.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(o)),o}function g(){const o=d(),i=window.matchMedia("(orientation: landscape)").matches,p=s()&&i;o.classList.toggle("is-visible",p),document.body.classList.toggle("is-orientation-blocked",p)}const u=()=>{document.visibilityState==="visible"&&(m(),g())},_=()=>g(),r=()=>g();return m(),g(),document.addEventListener("visibilitychange",u),window.addEventListener("resize",_),window.addEventListener("orientationchange",r),l=[()=>document.removeEventListener("visibilitychange",u),()=>window.removeEventListener("resize",_),()=>window.removeEventListener("orientationchange",r)],()=>{l.forEach(o=>o())}}function _e(e,n){return e==="guide"?n.guide:n.dreamwalker}function ve(e,n){return e==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function ke(e){return e==="guide"?x.book:x.eye}function pe({language:e,presenceState:n,currentPresenceRole:l}){const s=R(e),m=I.filter(r=>n==null?void 0:n[r.presenceRole]).length,d=l===null&&m>0,g=d?s.newGame:s.controllerConnectEyebrow,u=d?s.controllerReconnectTitle:s.controllerConnectTitle,_=d?s.controllerReconnectText:s.controllerConnectText;return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${d?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${g}</div>
                <h2 class="controller-role-picker__title">${u}</h2>
                <p class="controller-role-picker__text">${_}</p>
                <p class="controller-role-picker__summary">${m} / ${I.length} ${s.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${I.map(r=>{const o=l===r.presenceRole,i=!!(n!=null&&n[r.presenceRole])&&!o,p=M(r.team,e),k=_e(r.roleType,s),v=ve(r.roleType,s);return`
                            <button
                                class="controller-role-picker__btn controller-role-picker__btn--${r.team} controller-role-picker__btn--${r.roleType} ${o?"is-current":""}"
                                type="button"
                                data-role-type="${r.roleType}"
                                data-team="${r.team}"
                                ${i?"disabled":""}
                            >
                                <span class="controller-role-picker__icon" aria-hidden="true">${ke(r.roleType)}</span>
                                <span class="controller-role-picker__team">${p}</span>
                                <span class="controller-role-picker__role">${k}</span>
                                <span class="controller-role-picker__hint">${v}</span>
                                <span class="controller-role-picker__state">${i?s.roleBusy:o?s.currentRole:s.chooseRoleAction}</span>
                            </button>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function fe({state:e,lang:n,team:l,maxHintButtons:s,teamEffects:m,suppressedTransitionId:d,controllerRolePickerHtml:g=""}){const u=R(n),_=e.turn,r=_.team===l,o=_.guideLimit!==null,i=r&&!o&&!e.gameOver&&!e.turnTransition,p=m.allowTwoWordClue,k=m.forcedGuideLimit,v=m.hideEnemyColors,w=m.hideNightmare,y=M(l,n),h=i?`${u.guide}: ${u.chooseLimit}`:`${u.guide}: ${x.eyeClosed}`,C=[i&&k===1?u.guideForcedOneMove:null,i&&p?u.guideTwoWordClue:null,v?u.guideBlurActive:null,w?u.guideNightmareHidden:null].filter(Boolean),H=C.length?`<div class="guide__meta ${i?"guide__meta--active":"guide__meta--muted"}">${C.join(" • ")}</div>`:"",G=Array.from({length:s},(b,T)=>{const S=T+1;return`
            <button
                class="guide__num-btn ${_.guideLimit===S?"guide__num-btn--chosen":""}"
                data-limit="${S}"
                ${!i||k!==null&&S!==k?"disabled":""}
            >${S}</button>
        `}).join("");return`
        <div class="screen-layout guide-layout">
            <header class="screen-header">
                <div class="guide__header">
                    <div class="guide__title ${i?"guide__title--active":"guide__title--muted"}">${y}</div>
                    <div class="guide__meta ${i?"guide__meta--active":"guide__meta--muted"}">${h}</div>
                    ${H}
                    <div class="guide__btns ${i?"guide__btns--active":"guide__btns--muted"}">${G}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="guide guide--${l}">
                    <div class="grid grid--5">
                        ${e.cells.map((b,T)=>`
                            <div class="${ee(b,{team:l,effects:m})}" data-index="${T}">
                                <span class="cell__content">${V(b.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer guide__footer"></footer>
            ${K(e,n,{suppressedTransitionId:d})}
            ${Q({state:e,lang:n,team:l})}
            ${g}
        </div>
    `}function we({state:e,lang:n,team:l,suppressedTransitionId:s,controllerRolePickerHtml:m=""}){const d=R(n),g=e.turn,u=g.team===l,_=g.guideLimit!==null,r=u&&_&&!e.gameOver&&!e.turnTransition,o=_?Math.max((g.guideLimit??0)-(g.dreamwalkerMoves??0),0):0,i=M(l,n),p=r?`${d.dreamwalker}: <span class="walker__moves-value">${ce(o,n)}</span>`:`${d.dreamwalker}: ${x.eyeClosed}`;return`
        <div class="screen-layout walker-layout">
            <header class="screen-header">
                <div class="walker__title ${r?"walker__title--active":"walker__title--muted"}">${i}</div>
                <div class="walker__header">
                    <div class="walker__meta">
                        <div class="${r?"walker__status walker__status--active":"walker__status walker__status--muted"}">${p}</div>
                        <div class="walker__actions">
                            <span class="walker__end-hint">${d.endTurn}</span>
                            <button class="walker__action-btn walker__refresh-btn ${r?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${d.endTurn}" ${r?"":"disabled"}>${x.x}</button>
                        </div>
                    </div>
                </div>
            </header>

            <main class="screen-body">
                <div class="walker walker--${l}">
                    <div class="grid grid--5">
                        ${e.cells.map((v,w)=>`
                            <div
                                class="${ne(v)} ${r&&!v.revealed?"cell--clickable":""}"
                                data-index="${w}"
                            >
                                <span class="cell__content">${V(v.word)}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </main>

            <footer class="screen-footer walker__footer"></footer>
            ${K(e,n,{suppressedTransitionId:s})}
            ${Q({state:e,lang:n,team:l})}
            ${m}
        </div>
    `}const $e=8;function O(e){return`nw-controller-game:${e}`}function he(e){try{return sessionStorage.getItem(O(e))}catch{return null}}function A(e,n){try{n?sessionStorage.setItem(O(e),n):sessionStorage.removeItem(O(e))}catch{}}function ye({team:e,roleType:n}){if(!e||e!=="resonant"&&e!=="dissonant")return null;if(n==="guide"||n==="walker")return B(n,e);const l=window.location.pathname.split("/").pop();return l==="guide.html"?B("guide",e):l==="walker.html"?B("walker",e):null}function Te(e,n,l){if(!e)return n.controllerTaken.replace(`
`,"<br>");if(e.roleType==="walker")return`${M(e.team,l)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const s=e.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[s].replace(`
`,"<br>")}function U(e,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${R(e).waitingGame}</p>`}
        ${n}
    </div>`}async function Ce(e){const{roomId:n,token:l,team:s,roleType:m}=de();if(!n||!l){e.innerHTML=`<div class="waiting-screen">
            <p>${R(J).scanQr}</p>
        </div>`;return}const{room:d,error:g}=await ue(n,l),u=(d==null?void 0:d.language)||J,_=R(u);if(!d||g){e.innerHTML=`<div class="waiting-screen">
            <p>${_.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}ge(u);const r=ae(n);await r.init();const o=te(n);let i=ye({team:s,roleType:m});const p=F(i);i&&await o.isRoleTaken(i)&&(e.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${Te(p,_,u)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${_.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(a=>{var c;(c=document.getElementById("forceJoinBtn"))==null||c.addEventListener("click",a,{once:!0})})),i?o.join(i):o.listen(),await re({presence:o,store:r,role:()=>i});let k=!1,v=new Set,w=null,y=he(n),h=!i;ie(e,()=>{var t;return(t=r.getState())==null?void 0:t.turnTransition},async()=>{var a;const t=(a=r.getState())==null?void 0:a.turnTransition;t!=null&&t.id&&(w=t.id,L()),await r.dismissTurnTransition()});function C(){k=!1,v=new Set,w=null}async function H(t){i=t??null,i?await o.setRole(i):await o.setRole(null)}function G(t){const a=(t==null?void 0:t.gameId)??null;if(!a){y=null,A(n,null),h=!i;return}if(!i){h=!0;return}if(!y){y=a,A(n,a);return}a!==y&&!h&&(h=!0,C(),H(null).then(()=>L()))}function b(){return pe({language:r.getLanguage(),presenceState:o.getPresenceState(),currentPresenceRole:i})}function T(t){e.querySelectorAll("[data-controller-role-picker] button[data-role-type][data-team]").forEach(a=>{a.addEventListener("click",async()=>{const c=a.dataset.roleType,$=a.dataset.team,f=B(c,$);o.getPresenceState()[f]&&i!==f||(h=!1,y=(t==null?void 0:t.gameId)??null,A(n,y),await H(f),L())})})}function S(t,a,c,$){const f=me(t.teamEffects)[c.team],E=z(t.cells);e.innerHTML=fe({state:t,lang:a,team:c.team,maxHintButtons:$e,teamEffects:f,suppressedTransitionId:w,controllerRolePickerHtml:$}),D({root:e,selector:".guide .grid .cell",currentRevealed:E,prevRevealed:v,hasRenderedBoard:k}),v=E,k=!0,requestAnimationFrame(()=>{e.querySelectorAll(".cell").forEach(P=>le(P))}),e.querySelectorAll(".guide__num-btn:not([disabled])").forEach(P=>{P.addEventListener("click",()=>r.setGuideLimit(parseInt(P.dataset.limit,10)))}),T(t)}function N(t,a,c,$){var j;const f=z(t.cells),E=t.turn,P=E.team===c.team,Y=E.guideLimit!==null,Z=P&&Y&&!t.gameOver&&!t.turnTransition;e.innerHTML=we({state:t,lang:a,team:c.team,suppressedTransitionId:w,controllerRolePickerHtml:$}),D({root:e,selector:".walker .grid .cell",currentRevealed:f,prevRevealed:v,hasRenderedBoard:k}),v=f,k=!0,requestAnimationFrame(()=>se(e)),e.querySelectorAll(".cell--clickable").forEach(q=>{q.addEventListener("click",()=>r.reveal(parseInt(q.dataset.index,10)))}),(j=document.getElementById("refreshBtn"))==null||j.addEventListener("click",()=>{Z&&r.endTurn()}),T(t)}function W(t,a){document.body.classList.remove("team-resonant","team-dissonant"),C(),e.innerHTML=U(a,b()),T(t)}function X(t,a){G(t),(!t.turnTransition||t.turnTransition.id!==w)&&(w=null);const c=F(i),$=h||!c;if(!c){W(t,a);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${c.team}`);const f=$?b():"";if(c.roleType==="guide"){S(t,a,c,f);return}N(t,a,c,f)}function L({state:t,language:a}={}){const c=t??r.getState(),$=a??r.getLanguage();if(!c){C(),e.innerHTML=U($,i?"":b()),i||T(null);return}X(c,$)}r.subscribe(L),o.onChange(()=>{(h||!i)&&L()}),oe(()=>L()),L()}export{Ce as initController};
