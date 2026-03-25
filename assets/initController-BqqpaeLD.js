import{C as Q,r as de,a as me,q as fe,s as ge,g as pe,c as Me,p as A,d as xe,i as Ge,o as Ae,f as Oe,t as _e,T as ae,u as Ne,n as We,l as O,k as qe,m as Fe,j as je}from"./gridPatch-BHmQcDXE.js";import{t as B,e as D,I as N,f as ze,h as De,k as Ve,D as X,m as Ue,n as Je,o as se}from"./roomRepository-CIM5PE7W.js";import{r as ce}from"./entry-CF3_Twcv.js";function Ke(e){const n=B(e);let f=[];function o(){const s=Math.min(window.innerWidth,window.innerHeight),i=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&s<=768&&i<=1024}async function p(){var s;if(o())try{(s=screen.orientation)!=null&&s.lock&&await screen.orientation.lock("portrait")}catch{}}function u(){let s=document.getElementById("orientation-guard");return s||(s=document.createElement("div"),s.id="orientation-guard",s.className="orientation-guard",s.setAttribute("aria-live","polite"),s.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(s)),s}function v(){const s=u(),i=window.matchMedia("(orientation: landscape)").matches,y=o()&&i;s.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const m=()=>{document.visibilityState==="visible"&&(p(),v())},b=()=>v(),a=()=>v();return p(),v(),document.addEventListener("visibilitychange",m),window.addEventListener("resize",b),window.addEventListener("orientationchange",a),f=[()=>document.removeEventListener("visibilitychange",m),()=>window.removeEventListener("resize",b),()=>window.removeEventListener("orientationchange",a)],()=>{f.forEach(s=>s())}}function Qe(e,n){return e==="guide"?n.guide:n.dreamwalker}function Xe(e,n){return e==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function Ye(e){return e==="guide"?N.book:N.eye}function Ze({language:e,presenceState:n,currentPresenceRole:f}){const o=B(e),p=Q.filter(i=>n==null?void 0:n[i.presenceRole]).length,u=f===null&&p>0,v=u?o.newGame:o.controllerConnectEyebrow,m=u?o.controllerReconnectTitle:o.controllerConnectTitle,b=u?o.controllerReconnectText:o.controllerConnectText,a=["dissonant","resonant"];function s(i){const y=f===i.presenceRole,T=!!(n!=null&&n[i.presenceRole])&&!y,C=Qe(i.roleType,o),$=Xe(i.roleType,o),w=T?o.roleBusy:y?o.currentRole:o.chooseRoleAction,h=T?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${i.team} controller-role-picker__btn--${i.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${i.roleType}"
                data-team="${i.team}"
                ${T?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Ye(i.roleType)}</span>
                <span class="controller-role-picker__role">${C}</span>
                <span class="controller-role-picker__hint">${$}</span>
                <span class="controller-role-picker__state ${h}">${w}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${u?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${v}</div>
                <h2 class="controller-role-picker__title">${m}</h2>
                <p class="controller-role-picker__text">${b}</p>
                <p class="controller-role-picker__summary">${p} / ${Q.length} ${o.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${a.map(i=>{const y=D(i,e),T=Q.filter(C=>C.team===i);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${i}">
                                <h3 class="controller-role-picker__team-title">${y}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${T.map(s).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function ye({mode:e,title:n,titleMuted:f=!1,metaHtml:o="",boardClassName:p="",boardHtml:u="",footerHtml:v="",overlayHtml:m=""}){return`
        <div class="screen-layout screen-layout--fit-pending player-screen-layout ${e}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${f?"player-screen__title--muted":"player-screen__title--active"}">${n}</div>
                    <div class="player-screen__meta-wrap" aria-live="polite">${o}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="screen-board player-screen__board ${p}">
                    ${u}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${e}__footer">
                <div class="player-screen__footer-content">${v}</div>
            </footer>
            ${m}
        </div>
    `}function ve({state:e,lang:n,team:f,maxHintButtons:o,teamEffects:p}){const u=B(n),v=e.turn,m=v.team===f,b=v.guideLimit!==null,a=m&&!b&&!e.gameOver&&!e.turnTransition,s=p.allowTwoWordClue,i=p.forcedGuideLimit,y=p.hideEnemyColors,T=p.hideNightmare,C=D(f,n),$=a?`${u.guide}: ${u.chooseLimit}`:`${u.guide}: ${N.eyeClosed}`,w=[a&&i===1?u.guideForcedOneMove:null,a&&s?u.guideTwoWordClue:null,y?u.guideBlurActive:null,T?u.guideNightmareHidden:null].filter(Boolean),h=w.length?`<div class="player__meta player__meta--detail ${a?"player__meta--active":"player__meta--muted"}">${w.join(" • ")}</div>`:"",E=Array.from({length:o},(R,P)=>{const S=P+1;return`
            <button
                class="guide__num-btn ${v.guideLimit===S?"guide__num-btn--chosen":""}"
                data-limit="${S}"
                ${!a||i!==null&&S!==i?"disabled":""}
            >${S}</button>
        `}).join("");return{teamTitle:C,titleMuted:!a,metaHtml:`
            <div class="player__meta ${a?"player__meta--active":"player__meta--muted"}">${$}</div>
            ${h}
        `,boardHtml:fe({cells:e.cells,getCellClass:R=>ge(R,{team:f,effects:p})}),footerHtml:`<div class="guide__btns ${a?"guide__btns--active":"guide__btns--muted"}">${E}</div>`}}function et({state:e,lang:n,team:f,maxHintButtons:o,teamEffects:p,suppressedTransitionId:u,controllerRolePickerHtml:v=""}){const m=ve({state:e,lang:n,team:f,maxHintButtons:o,teamEffects:p});return ye({mode:"guide",title:m.teamTitle,titleMuted:m.titleMuted,metaHtml:m.metaHtml,boardClassName:`guide guide--${f}`,boardHtml:m.boardHtml,footerHtml:m.footerHtml,overlayHtml:`
            ${de(e,n,{suppressedTransitionId:u})}
            ${me({state:e,lang:n,team:f})}
            ${v}
        `})}function tt(e,n){return e.revealed?e.word:`${e.word}, ${n.dreamwalker}`}function ke({state:e,lang:n,team:f}){const o=B(n),p=e.turn,u=p.team===f,v=p.guideLimit!==null,m=u&&v&&!e.gameOver&&!e.turnTransition,b=v?Math.max((p.guideLimit??0)-(p.dreamwalkerMoves??0),0):0,a=D(f,n),s=m?`${o.dreamwalker}: <span class="walker__moves-value">${ze(b,n)}</span>`:`${o.dreamwalker}: ${N.eyeClosed}`;return{teamTitle:a,titleMuted:!m,metaHtml:`<div class="${m?"player__meta player__meta--active":"player__meta player__meta--muted"}">${s}</div>`,boardHtml:fe({cells:e.cells,getCellClass:y=>`${pe(y)}${m&&!y.revealed?" cell--clickable":""}`,getAction:y=>({className:m&&!y.revealed?"cell__action--clickable":"",ariaLabel:tt(y,o),disabled:!m||y.revealed})}),footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${m?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${o.endTurn}" ${m?"":"disabled"}>
                    <span class="walker__action-label">${o.endTurn}</span>
                    <span class="walker__action-icon">${N.x}</span>
                </button>
            </div>
        `,canPlay:m}}function nt({state:e,lang:n,team:f,suppressedTransitionId:o,controllerRolePickerHtml:p=""}){const u=ke({state:e,lang:n,team:f});return ye({mode:"walker",title:u.teamTitle,titleMuted:u.titleMuted,metaHtml:u.metaHtml,boardClassName:`walker walker--${f}`,boardHtml:u.boardHtml,footerHtml:u.footerHtml,overlayHtml:`
            ${de(e,n,{suppressedTransitionId:o})}
            ${me({state:e,lang:n,team:f})}
            ${p}
        `})}const ue=8;function ee(e){return`nw-controller-game:${e}`}function rt(e){try{return sessionStorage.getItem(ee(e))}catch{return null}}function Y(e,n){try{n?sessionStorage.setItem(ee(e),n):sessionStorage.removeItem(ee(e))}catch{}}function lt({team:e,roleType:n}){return!e||e!=="resonant"&&e!=="dissonant"?null:n==="guide"||n==="walker"?_e(n,e):null}function it(e,n,f){if(!e)return n.controllerTaken.replace(`
`,"<br>");if(e.roleType==="walker")return`${D(e.team,f)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const o=e.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[o].replace(`
`,"<br>")}function Z(e,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${B(e).waitingGame}</p>`}
        ${n}
    </div>`}async function ct(e){var ie,oe;const{roomId:n,token:f,team:o,roleType:p}=De();if(e.innerHTML=Z(X),!n||!f){e.innerHTML=`<div class="waiting-screen">
            <p>${B(X).scanQr}</p>
        </div>`;return}const{room:u,error:v}=await Ve(n,f),m=(u==null?void 0:u.language)||X,b=B(m);if(!u||v){e.innerHTML=`<div class="waiting-screen">
            <p>${b.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}Ke(m);const a=Oe(n);await a.init();const s=Me(n);let i=lt({team:o,roleType:p});const y=A(i);i&&await s.isRoleTaken(i)&&(e.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${it(y,b,m)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${b.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(l=>{var r;(r=document.getElementById("forceJoinBtn"))==null||r.addEventListener("click",l,{once:!0})})),i?s.join(i):s.listen(),await xe({presence:s,store:a,role:()=>i});let T=!1,C=new Set,$=rt(n),w=!i,h=null,E=null,R=null,P=null,S=null,I=null,W=null,M=!0,q=!1,V=0,G=null;const F=We({root:e,getGrid:()=>e.querySelector(".grid"),onFitEnd:()=>{j()}});function Te(){return e.querySelector(".grid")}function we(){q||(q=!0,Ue())}function j(){q&&(q=!1,Je())}function be(){const t=Te();return t?`${t.clientWidth}x${t.clientHeight}`:null}function he(){F.observeGrid(()=>{M=!0,le(a.getState(),I)})}function U(){G&&(clearTimeout(G),G=null)}function $e(t){const l=t==null?void 0:t.turnTransition;if(!l||l.status!==ae.VISIBLE){U();return}const r=l.id;U(),G=setTimeout(()=>{var d;G=null;const c=(d=a.getState())==null?void 0:d.turnTransition;(c==null?void 0:c.status)!==ae.VISIBLE||c.id!==r||a.forceCompleteTurnTransition().catch(g=>{ce("controller.transitionAutoComplete",g)})},Ne.visibleMs+250)}Ge(e,()=>{var t;return(t=a.getState())==null?void 0:t.turnTransition},async()=>{await a.forceCompleteTurnTransition()});function J(){T=!1,C=new Set,h=null,E=null,R=null,P=null,S=null,I=null,W=null,M=!0,U(),F.reset()}async function Ce(t){i=t??null,i?await s.setRole(i):await s.setRole(null)}async function te(t,{reopenPickerOnError:l=!1}={}){const r=++V,c=i;we();try{await Ce(t)}catch(d){return i=c,l&&(w=!0),j(),ce("controller:set-role",d),r===V&&H(),!1}return r!==V?!1:(H(),t||j(),!0)}function Se(t){const l=(t==null?void 0:t.gameId)??null;if(!l){$=null,Y(n,null),w=!i;return}if(!i){w=!0;return}if(!$){$=l,Y(n,l);return}l!==$&&!w&&(w=!0,J(),te(null,{reopenPickerOnError:!0}))}function K(){return Ze({language:a.getLanguage(),presenceState:s.getPresenceState(),currentPresenceRole:i})}function Le(t,l){return JSON.stringify(se(t)[l])}function ne(t,l){const r=O(t.cells);return(l==null?void 0:l.roleType)==="guide"?`${r}|${Le(t.teamEffects,l.team)}`:r}function Re(t,l,r,c){const d=r==null?void 0:r.roleType;return d!=="guide"&&d!=="walker"||c||t.turnTransition||t.gameOver||R!==d||P!==r.team||E!==l||!h||!e.querySelector(`.${d}-layout`)?!1:d==="walker"?O(h.cells)===O(t.cells):ne(h,r)===ne(t,r)}function re(t,l,r){const c=se(t.teamEffects)[r.team];if(r.roleType==="guide")return{roleType:"guide",viewModel:ve({state:t,lang:l,team:r.team,maxHintButtons:ue,teamEffects:c}),renderMarkup:({pickerHtml:g})=>et({state:t,lang:l,team:r.team,maxHintButtons:ue,teamEffects:c,controllerRolePickerHtml:g}),getCellClass:g=>ge(g,{team:r.team,effects:c}),updateCellElement:null,refreshAllClasses:!1,animationSelector:".guide .grid .cell"};const d=ke({state:t,lang:l,team:r.team});return{roleType:"walker",viewModel:d,renderMarkup:({pickerHtml:g})=>nt({state:t,lang:l,team:r.team,controllerRolePickerHtml:g}),getCellClass:g=>`${pe(g)}${d.canPlay&&!g.revealed?" cell--clickable":""}`,updateCellElement:(g,_,L)=>{const k=g.querySelector(".cell__action");if(!(k instanceof HTMLButtonElement))return;const x=d.canPlay&&!_.revealed;k.type="button",k.className=x?"cell__action cell__action--clickable":"cell__action",k.disabled=!x,k.setAttribute("aria-label",_.word),k.dataset.index=String(L)},refreshAllClasses:!0,animationSelector:".walker .grid .cell"}}function He(t,l,r){const c=e.querySelector(`.${r.roleType} .grid`);return c?je({grid:c,prevCells:l==null?void 0:l.cells,nextCells:t.cells,getCellClass:r.getCellClass,refreshAllClasses:r.refreshAllClasses,updateCellElement:r.updateCellElement}):!1}function Be(t,l,r){const c=h,d=re(t,l,r),{viewModel:g}=d,_=e.querySelector(".player-screen__title"),L=e.querySelector(".player-screen__meta-wrap"),k=e.querySelector(".player-screen__footer-content");return!_||!L||!k||(_.textContent=g.teamTitle,_.classList.toggle("player-screen__title--muted",g.titleMuted),_.classList.toggle("player-screen__title--active",!g.titleMuted),L.innerHTML=g.metaHtml,k.innerHTML=g.footerHtml,!He(t,c,d))?!1:(h=t,E=l,R=r.roleType,P=r.team,!0)}function le(t,l){if(!t||!l)return;const r=O(t.cells),c=be(),d=M||!T||S!==r||I!==l||W!==c;S=r,I=l,W=c,d&&(M=!1,F.scheduleFit())}function Ee(t,l,r,c){const d=qe(t.cells),g=re(t,l,r),_=!T||S!==O(t.cells)||I!==g.roleType;e.innerHTML=g.renderMarkup({pickerHtml:c}),_&&F.markPending(),Fe({root:e,selector:g.animationSelector,currentRevealed:d,prevRevealed:C,hasRenderedBoard:T}),C=d,T=!0,he(),le(t,g.roleType)}function Pe(t,l){document.body.classList.remove("team-resonant","team-dissonant"),J(),j(),e.innerHTML=Z(l,K())}function Ie(t,l){Se(t);const r=A(i),c=w||!r;if(!r){Pe(t,l);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${r.team}`);const d=c?K():"";Re(t,l,r,c)&&Be(t,l,r)||Ee(t,l,r,d)}function H({state:t,language:l}={}){var d,g;const r=t??a.getState(),c=l??a.getLanguage();if(!r){J(),e.innerHTML=Z(c,i?"":K());return}$e(r),Ie(r,c),h=r,E=c,R=((d=A(i))==null?void 0:d.roleType)??null,P=((g=A(i))==null?void 0:g.team)??null}a.subscribe(H),s.onChange(()=>{(w||!i)&&H()}),Ae(()=>{M=!0,H()}),(oe=(ie=document.fonts)==null?void 0:ie.ready)==null||oe.then(()=>{M=!0,H()}).catch(()=>{}),e.addEventListener("click",async t=>{if(t.target.closest("[data-transition-dismiss]")){t.preventDefault(),t.stopPropagation(),await a.forceCompleteTurnTransition();return}const r=t.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(r){const _=r.dataset.roleType,L=r.dataset.team,k=_e(_,L),x=s.getPresenceState(),z=a.getState();if(x[k]&&i!==k)return;w=!1,$=(z==null?void 0:z.gameId)??null,Y(n,$),await te(k,{reopenPickerOnError:!0});return}const c=t.target.closest(".guide__num-btn:not([disabled])");if(c){await a.setGuideLimit(parseInt(c.dataset.limit,10));return}const d=t.target.closest("[data-cell-action]");if(d&&!d.disabled){await a.reveal(parseInt(d.dataset.index,10));return}if(t.target.closest("#refreshBtn")){const _=a.getState(),L=A(i),k=L&&(_==null?void 0:_.turn.team)===L.team,x=(_==null?void 0:_.turn.guideLimit)!==null;!!(k&&x&&!(_!=null&&_.gameOver)&&!(_!=null&&_.turnTransition))&&await a.endTurn()}}),H()}export{ct as initController};
