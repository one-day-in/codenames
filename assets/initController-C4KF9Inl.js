import{C as q,r as oe,a as le,m as pe,e as ae,g as ve,c as ke,p as J,d as $e,i as ye,o as we,f as he,n as se,j as re,k as ie,q as be,l as Te}from"./turnTransitionDismiss-DtZho3D3.js";import{t as B,e as A,I as G,f as Le,h as Re,k as Ce,D as U,n as Se}from"./roomRepository-BzPr1MxX.js";import"./entry-CYulbPRV.js";function Be(e){const n=B(e);let c=[];function a(){const i=Math.min(window.innerWidth,window.innerHeight),r=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&i<=768&&r<=1024}async function g(){var i;if(a())try{(i=screen.orientation)!=null&&i.lock&&await screen.orientation.lock("portrait")}catch{}}function d(){let i=document.getElementById("orientation-guard");return i||(i=document.createElement("div"),i.id="orientation-guard",i.className="orientation-guard",i.setAttribute("aria-live","polite"),i.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(i)),i}function _(){const i=d(),r=window.matchMedia("(orientation: landscape)").matches,p=a()&&r;i.classList.toggle("is-visible",p),document.body.classList.toggle("is-orientation-blocked",p)}const u=()=>{document.visibilityState==="visible"&&(g(),_())},v=()=>_(),o=()=>_();return g(),_(),document.addEventListener("visibilitychange",u),window.addEventListener("resize",v),window.addEventListener("orientationchange",o),c=[()=>document.removeEventListener("visibilitychange",u),()=>window.removeEventListener("resize",v),()=>window.removeEventListener("orientationchange",o)],()=>{c.forEach(i=>i())}}function He(e,n){return e==="guide"?n.guide:n.dreamwalker}function xe(e,n){return e==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function Pe(e){return e==="guide"?G.book:G.eye}function Me({language:e,presenceState:n,currentPresenceRole:c}){const a=B(e),g=q.filter(r=>n==null?void 0:n[r.presenceRole]).length,d=c===null&&g>0,_=d?a.newGame:a.controllerConnectEyebrow,u=d?a.controllerReconnectTitle:a.controllerConnectTitle,v=d?a.controllerReconnectText:a.controllerConnectText,o=["dissonant","resonant"];function i(r){const p=c===r.presenceRole,f=!!(n!=null&&n[r.presenceRole])&&!p,k=He(r.roleType,a),y=xe(r.roleType,a),L=f?a.roleBusy:p?a.currentRole:a.chooseRoleAction,h=f?"controller-role-picker__state--busy":p?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${r.team} controller-role-picker__btn--${r.roleType} ${p?"is-current":""}"
                type="button"
                data-role-type="${r.roleType}"
                data-team="${r.team}"
                ${f?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Pe(r.roleType)}</span>
                <span class="controller-role-picker__role">${k}</span>
                <span class="controller-role-picker__hint">${y}</span>
                <span class="controller-role-picker__state ${h}">${L}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${d?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${_}</div>
                <h2 class="controller-role-picker__title">${u}</h2>
                <p class="controller-role-picker__text">${v}</p>
                <p class="controller-role-picker__summary">${g} / ${q.length} ${a.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${o.map(r=>{const p=A(r,e),f=q.filter(k=>k.team===r);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${r}">
                                <h3 class="controller-role-picker__team-title">${p}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${f.map(i).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function ce({mode:e,title:n,titleMuted:c=!1,metaHtml:a="",boardClassName:g="",boardHtml:d="",footerHtml:_="",overlayHtml:u=""}){return`
        <div class="screen-layout player-screen-layout ${e}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${c?"player-screen__title--muted":"player-screen__title--active"}">${n}</div>
                    ${a}
                </div>
            </header>

            <main class="screen-body">
                <div class="${g}">
                    ${d}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${e}__footer">
                ${_}
            </footer>
            ${u}
        </div>
    `}function Ge({state:e,lang:n,team:c,maxHintButtons:a,teamEffects:g,suppressedTransitionId:d,controllerRolePickerHtml:_=""}){const u=B(n),v=e.turn,o=v.team===c,i=v.guideLimit!==null,r=o&&!i&&!e.gameOver&&!e.turnTransition,p=g.allowTwoWordClue,f=g.forcedGuideLimit,k=g.hideEnemyColors,y=g.hideNightmare,L=A(c,n),h=r?`${u.guide}: ${u.chooseLimit}`:`${u.guide}: ${G.eyeClosed}`,H=[r&&f===1?u.guideForcedOneMove:null,r&&p?u.guideTwoWordClue:null,k?u.guideBlurActive:null,y?u.guideNightmareHidden:null].filter(Boolean),x=H.length?`<div class="player__meta ${r?"player__meta--active":"player__meta--muted"}">${H.join(" • ")}</div>`:"",P=Array.from({length:a},(b,R)=>{const T=R+1;return`
            <button
                class="guide__num-btn ${v.guideLimit===T?"guide__num-btn--chosen":""}"
                data-limit="${T}"
                ${!r||f!==null&&T!==f?"disabled":""}
            >${T}</button>
        `}).join("");return ce({mode:"guide",title:L,titleMuted:!r,metaHtml:`
            <div class="player__meta ${r?"player__meta--active":"player__meta--muted"}">${h}</div>
            ${x}
        `,boardClassName:`guide guide--${c}`,boardHtml:`
            <div class="grid grid--5">
                ${e.cells.map((b,R)=>`
                    <div class="${pe(b,{team:c,effects:g})}" data-index="${R}">
                        <span class="cell__content">${ae(b.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${r?"guide__btns--active":"guide__btns--muted"}">${P}</div>`,overlayHtml:`
            ${oe(e,n,{suppressedTransitionId:d})}
            ${le({state:e,lang:n,team:c})}
            ${_}
        `})}function Oe({state:e,lang:n,team:c,suppressedTransitionId:a,controllerRolePickerHtml:g=""}){const d=B(n),_=e.turn,u=_.team===c,v=_.guideLimit!==null,o=u&&v&&!e.gameOver&&!e.turnTransition,i=v?Math.max((_.guideLimit??0)-(_.dreamwalkerMoves??0),0):0,r=A(c,n),p=o?`${d.dreamwalker}: <span class="walker__moves-value">${Le(i,n)}</span>`:`${d.dreamwalker}: ${G.eyeClosed}`;return ce({mode:"walker",title:r,titleMuted:!o,metaHtml:`<div class="${o?"player__meta player__meta--active":"player__meta player__meta--muted"}">${p}</div>`,boardClassName:`walker walker--${c}`,boardHtml:`
            <div class="grid grid--5">
                ${e.cells.map((k,y)=>`
                    <div
                        class="${ve(k)} ${o&&!k.revealed?"cell--clickable":""}"
                        data-index="${y}"
                    >
                        <span class="cell__content">${ae(k.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${o?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${d.endTurn}" ${o?"":"disabled"}>
                    <span class="walker__action-label">${d.endTurn}</span>
                    <span class="walker__action-icon">${G.x}</span>
                </button>
            </div>
        `,overlayHtml:`
            ${oe(e,n,{suppressedTransitionId:a})}
            ${le({state:e,lang:n,team:c})}
            ${g}
        `})}const Ie=8;function Q(e){return`nw-controller-game:${e}`}function Ee(e){try{return sessionStorage.getItem(Q(e))}catch{return null}}function V(e,n){try{n?sessionStorage.setItem(Q(e),n):sessionStorage.removeItem(Q(e))}catch{}}function Ae({team:e,roleType:n}){return!e||e!=="resonant"&&e!=="dissonant"?null:n==="guide"||n==="walker"?se(n,e):null}function Ne(e,n,c){if(!e)return n.controllerTaken.replace(`
`,"<br>");if(e.roleType==="walker")return`${A(e.team,c)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const a=e.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[a].replace(`
`,"<br>")}function K(e,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${B(e).waitingGame}</p>`}
        ${n}
    </div>`}async function ze(e){var ee,ne;const{roomId:n,token:c,team:a,roleType:g}=Re();if(e.innerHTML=K(U),!n||!c){e.innerHTML=`<div class="waiting-screen">
            <p>${B(U).scanQr}</p>
        </div>`;return}const{room:d,error:_}=await Ce(n,c),u=(d==null?void 0:d.language)||U,v=B(u);if(!d||_){e.innerHTML=`<div class="waiting-screen">
            <p>${v.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}Be(u);const o=he(n);await o.init();const i=ke(n);let r=Ae({team:a,roleType:g});const p=J(r);r&&await i.isRoleTaken(r)&&(e.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${Ne(p,v,u)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${v.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(l=>{var s;(s=document.getElementById("forceJoinBtn"))==null||s.addEventListener("click",l,{once:!0})})),r?i.join(r):i.listen(),await $e({presence:i,store:o,role:()=>r});let f=!1,k=new Set,y=null,L=Ee(n),h=!r,H=null,x=null,P=null,b=!0,R=0,T=null,O=null;function N(){R&&(cancelAnimationFrame(R),R=0)}function X(){T==null||T.disconnect(),T=null,O=null}function W(){return e.querySelector(".grid")}function de(){const t=W();return t?`${t.clientWidth}x${t.clientHeight}`:null}function Y(){const t=W();!t||O===t||typeof ResizeObserver>"u"||(X(),O=t,T=new ResizeObserver(()=>{b=!0,z(o.getState(),x)}),T.observe(t))}ye(e,()=>{var t;return(t=o.getState())==null?void 0:t.turnTransition},async()=>{var l;const t=(l=o.getState())==null?void 0:l.turnTransition;t!=null&&t.id&&(y=t.id,C()),await o.forceCompleteTurnTransition()});function j(){f=!1,k=new Set,y=null,H=null,x=null,P=null,b=!0,N(),X()}async function Z(t){r=t??null,r?await i.setRole(r):await i.setRole(null)}function ue(t){const l=(t==null?void 0:t.gameId)??null;if(!l){L=null,V(n,null),h=!r;return}if(!r){h=!0;return}if(!L){L=l,V(n,l);return}l!==L&&!h&&(h=!0,j(),Z(null).then(()=>C()))}function F(){return Me({language:o.getLanguage(),presenceState:i.getPresenceState(),currentPresenceRole:r})}function z(t,l){if(!t||!l)return;const s=be(t.cells),$=de(),w=b||!f||H!==s||x!==l||P!==$;H=s,x=l,P=$,w&&(b=!1,N(),R=requestAnimationFrame(()=>{R=requestAnimationFrame(()=>{R=0;const S=W();if(!S||!S.clientWidth||!S.clientHeight){b=!0;return}Te(S,".cell")})}))}function me(t,l,s,$){const w=Se(t.teamEffects)[s.team],S=re(t.cells);e.innerHTML=Ge({state:t,lang:l,team:s.team,maxHintButtons:Ie,teamEffects:w,suppressedTransitionId:y,controllerRolePickerHtml:$}),ie({root:e,selector:".guide .grid .cell",currentRevealed:S,prevRevealed:k,hasRenderedBoard:f}),k=S,f=!0,Y(),z(t,"guide")}function ge(t,l,s,$){const w=re(t.cells);e.innerHTML=Oe({state:t,lang:l,team:s.team,suppressedTransitionId:y,controllerRolePickerHtml:$}),ie({root:e,selector:".walker .grid .cell",currentRevealed:w,prevRevealed:k,hasRenderedBoard:f}),k=w,f=!0,Y(),z(t,"walker")}function _e(t,l){document.body.classList.remove("team-resonant","team-dissonant"),j(),e.innerHTML=K(l,F())}function fe(t,l){ue(t),(!t.turnTransition||t.turnTransition.id!==y)&&(y=null);const s=J(r),$=h||!s;if(!s){_e(t,l);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${s.team}`);const w=$?F():"";if(s.roleType==="guide"){me(t,l,s,w);return}ge(t,l,s,w)}function C({state:t,language:l}={}){const s=t??o.getState(),$=l??o.getLanguage();if(!s){j(),e.innerHTML=K($,r?"":F());return}fe(s,$)}o.subscribe(C),i.onChange(()=>{(h||!r)&&C()}),we(()=>{b=!0,C()}),(ne=(ee=document.fonts)==null?void 0:ee.ready)==null||ne.then(()=>{b=!0,C()}).catch(()=>{}),e.addEventListener("click",async t=>{var te;if(t.target.closest("[data-transition-dismiss]")){const m=(te=o.getState())==null?void 0:te.turnTransition;m!=null&&m.id&&(y=m.id,C()),await o.forceCompleteTurnTransition();return}const s=t.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(s){const m=s.dataset.roleType,I=s.dataset.team,M=se(m,I),D=i.getPresenceState(),E=o.getState();if(D[M]&&r!==M)return;h=!1,L=(E==null?void 0:E.gameId)??null,V(n,L),await Z(M),C();return}const $=t.target.closest(".guide__num-btn:not([disabled])");if($){await o.setGuideLimit(parseInt($.dataset.limit,10));return}const w=t.target.closest(".cell--clickable");if(w){await o.reveal(parseInt(w.dataset.index,10));return}if(t.target.closest("#refreshBtn")){const m=o.getState(),I=J(r),M=I&&(m==null?void 0:m.turn.team)===I.team,D=(m==null?void 0:m.turn.guideLimit)!==null;!!(M&&D&&!(m!=null&&m.gameOver)&&!(m!=null&&m.turnTransition))&&await o.endTurn()}}),C()}export{ze as initController};
