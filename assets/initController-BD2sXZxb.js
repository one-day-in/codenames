import{C as X,r as me,a as fe,q as ge,e as ne,g as pe,c as Ee,p as A,d as Ge,i as Ie,o as Ae,f as Ne,s as _e,l as N,k as se,m as ce,j as ue,n as Me}from"./gridPatch-DC6i8oQa.js";import{t as x,e as V,I as W,f as We,h as qe,k as Fe,D as Y,m as je,n as De,o as z}from"./roomRepository-CIM5PE7W.js";import{r as ze}from"./entry-DePpwYzC.js";function Ve(n){const r=x(n);let g=[];function s(){const c=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&c<=768&&l<=1024}async function _(){var c;if(s())try{(c=screen.orientation)!=null&&c.lock&&await screen.orientation.lock("portrait")}catch{}}function d(){let c=document.getElementById("orientation-guard");return c||(c=document.createElement("div"),c.id="orientation-guard",c.className="orientation-guard",c.setAttribute("aria-live","polite"),c.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${r.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${r.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(c)),c}function v(){const c=d(),l=window.matchMedia("(orientation: landscape)").matches,y=s()&&l;c.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const p=()=>{document.visibilityState==="visible"&&(_(),v())},b=()=>v(),a=()=>v();return _(),v(),document.addEventListener("visibilitychange",p),window.addEventListener("resize",b),window.addEventListener("orientationchange",a),g=[()=>document.removeEventListener("visibilitychange",p),()=>window.removeEventListener("resize",b),()=>window.removeEventListener("orientationchange",a)],()=>{g.forEach(c=>c())}}function Je(n,r){return n==="guide"?r.guide:r.dreamwalker}function Ue(n,r){return n==="guide"?r.controllerGuideHint:r.controllerWalkerHint}function Ke(n){return n==="guide"?W.book:W.eye}function Qe({language:n,presenceState:r,currentPresenceRole:g}){const s=x(n),_=X.filter(l=>r==null?void 0:r[l.presenceRole]).length,d=g===null&&_>0,v=d?s.newGame:s.controllerConnectEyebrow,p=d?s.controllerReconnectTitle:s.controllerConnectTitle,b=d?s.controllerReconnectText:s.controllerConnectText,a=["dissonant","resonant"];function c(l){const y=g===l.presenceRole,k=!!(r!=null&&r[l.presenceRole])&&!y,T=Je(l.roleType,s),S=Ue(l.roleType,s),w=k?s.roleBusy:y?s.currentRole:s.chooseRoleAction,h=k?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${k?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Ke(l.roleType)}</span>
                <span class="controller-role-picker__role">${T}</span>
                <span class="controller-role-picker__hint">${S}</span>
                <span class="controller-role-picker__state ${h}">${w}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${d?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${v}</div>
                <h2 class="controller-role-picker__title">${p}</h2>
                <p class="controller-role-picker__text">${b}</p>
                <p class="controller-role-picker__summary">${_} / ${X.length} ${s.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${a.map(l=>{const y=V(l,n),k=X.filter(T=>T.team===l);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${l}">
                                <h3 class="controller-role-picker__team-title">${y}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${k.map(c).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function ye({mode:n,title:r,titleMuted:g=!1,metaHtml:s="",boardClassName:_="",boardHtml:d="",footerHtml:v="",overlayHtml:p=""}){return`
        <div class="screen-layout screen-layout--fit-pending player-screen-layout ${n}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${g?"player-screen__title--muted":"player-screen__title--active"}">${r}</div>
                    <div class="player-screen__meta-wrap" aria-live="polite">${s}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="screen-board player-screen__board ${_}">
                    ${d}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${n}__footer">
                <div class="player-screen__footer-content">${v}</div>
            </footer>
            ${p}
        </div>
    `}function ve({state:n,lang:r,team:g,maxHintButtons:s,teamEffects:_}){const d=x(r),v=n.turn,p=v.team===g,b=v.guideLimit!==null,a=p&&!b&&!n.gameOver&&!n.turnTransition,c=_.allowTwoWordClue,l=_.forcedGuideLimit,y=_.hideEnemyColors,k=_.hideNightmare,T=V(g,r),S=a?`${d.guide}: ${d.chooseLimit}`:`${d.guide}: ${W.eyeClosed}`,w=[a&&l===1?d.guideForcedOneMove:null,a&&c?d.guideTwoWordClue:null,y?d.guideBlurActive:null,k?d.guideNightmareHidden:null].filter(Boolean),h=w.length?`<div class="player__meta player__meta--detail ${a?"player__meta--active":"player__meta--muted"}">${w.join(" • ")}</div>`:"",O=Array.from({length:s},(R,H)=>{const C=H+1;return`
            <button
                class="guide__num-btn ${v.guideLimit===C?"guide__num-btn--chosen":""}"
                data-limit="${C}"
                ${!a||l!==null&&C!==l?"disabled":""}
            >${C}</button>
        `}).join("");return{teamTitle:T,titleMuted:!a,metaHtml:`
            <div class="player__meta ${a?"player__meta--active":"player__meta--muted"}">${S}</div>
            ${h}
        `,boardHtml:`
            <div class="grid grid--5">
                ${n.cells.map((R,H)=>`
                    <div class="${ge(R,{team:g,effects:_})}" data-index="${H}">
                        <span class="cell__content">${ne(R.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${a?"guide__btns--active":"guide__btns--muted"}">${O}</div>`}}function Xe({state:n,lang:r,team:g,maxHintButtons:s,teamEffects:_,suppressedTransitionId:d,controllerRolePickerHtml:v=""}){const p=ve({state:n,lang:r,team:g,maxHintButtons:s,teamEffects:_});return ye({mode:"guide",title:p.teamTitle,titleMuted:p.titleMuted,metaHtml:p.metaHtml,boardClassName:`guide guide--${g}`,boardHtml:p.boardHtml,footerHtml:p.footerHtml,overlayHtml:`
            ${me(n,r,{suppressedTransitionId:d})}
            ${fe({state:n,lang:r,team:g})}
            ${v}
        `})}function Ye(n,r){return n.revealed?n.word:`${n.word}, ${r.dreamwalker}`}function ke({state:n,lang:r,team:g}){const s=x(r),_=n.turn,d=_.team===g,v=_.guideLimit!==null,p=d&&v&&!n.gameOver&&!n.turnTransition,b=v?Math.max((_.guideLimit??0)-(_.dreamwalkerMoves??0),0):0,a=V(g,r),c=p?`${s.dreamwalker}: <span class="walker__moves-value">${We(b,r)}</span>`:`${s.dreamwalker}: ${W.eyeClosed}`;return{teamTitle:a,titleMuted:!p,metaHtml:`<div class="${p?"player__meta player__meta--active":"player__meta player__meta--muted"}">${c}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${n.cells.map((y,k)=>`
                    <button
                        type="button"
                        aria-label="${ne(Ye(y,s))}"
                        class="${pe(y)} ${p&&!y.revealed?"cell--clickable":""}"
                        data-index="${k}"
                        ${!p||y.revealed?"disabled":""}
                    >
                        <span class="cell__content">${ne(y.word)}</span>
                    </button>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${p?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${s.endTurn}" ${p?"":"disabled"}>
                    <span class="walker__action-label">${s.endTurn}</span>
                    <span class="walker__action-icon">${W.x}</span>
                </button>
            </div>
        `,canPlay:p}}function Ze({state:n,lang:r,team:g,suppressedTransitionId:s,controllerRolePickerHtml:_=""}){const d=ke({state:n,lang:r,team:g});return ye({mode:"walker",title:d.teamTitle,titleMuted:d.titleMuted,metaHtml:d.metaHtml,boardClassName:`walker walker--${g}`,boardHtml:d.boardHtml,footerHtml:d.footerHtml,overlayHtml:`
            ${me(n,r,{suppressedTransitionId:s})}
            ${fe({state:n,lang:r,team:g})}
            ${_}
        `})}const de=8;function te(n){return`nw-controller-game:${n}`}function en(n){try{return sessionStorage.getItem(te(n))}catch{return null}}function Z(n,r){try{r?sessionStorage.setItem(te(n),r):sessionStorage.removeItem(te(n))}catch{}}function nn({team:n,roleType:r}){return!n||n!=="resonant"&&n!=="dissonant"?null:r==="guide"||r==="walker"?_e(r,n):null}function tn(n,r,g){if(!n)return r.controllerTaken.replace(`
`,"<br>");if(n.roleType==="walker")return`${V(n.team,g)} ${r.dreamwalker}<br>${r.controllerTaken.replace(`
`,"<br>")}`;const s=n.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return r[s].replace(`
`,"<br>")}function ee(n,r=""){return`<div class="waiting-screen">
        ${r?"":`<p>${x(n).waitingGame}</p>`}
        ${r}
    </div>`}async function an(n){var oe,ae;const{roomId:r,token:g,team:s,roleType:_}=qe();if(n.innerHTML=ee(Y),!r||!g){n.innerHTML=`<div class="waiting-screen">
            <p>${x(Y).scanQr}</p>
        </div>`;return}const{room:d,error:v}=await Fe(r,g),p=(d==null?void 0:d.language)||Y,b=x(p);if(!d||v){n.innerHTML=`<div class="waiting-screen">
            <p>${b.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}Ve(p);const a=Ne(r);await a.init();const c=Ee(r);let l=nn({team:s,roleType:_});const y=A(l);l&&await c.isRoleTaken(l)&&(n.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${tn(y,b,p)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${b.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(i=>{var t;(t=document.getElementById("forceJoinBtn"))==null||t.addEventListener("click",i,{once:!0})})),l?c.join(l):c.listen(),await Ge({presence:c,store:a,role:()=>l});let k=!1,T=new Set,S=en(r),w=!l,h=null,O=null,R=null,H=null,C=null,B=null,q=null,E=!0,F=!1,J=0;const M=Me({root:n,getGrid:()=>n.querySelector(".grid"),onFitEnd:()=>{j()}});function G(e,i){const t=A(l),m=`[controller:${r}:${(t==null?void 0:t.roleType)??"none"}:${(t==null?void 0:t.team)??"none"}]`,o=new Date().toISOString();if(i===void 0){console.info(`${m} ${o} ${e}`);return}console.info(`${m} ${o} ${e}`,i)}function $e(){return n.querySelector(".grid")}function we(){F||(F=!0,je())}function j(){F&&(F=!1,De())}function be(){const e=$e();return e?`${e.clientWidth}x${e.clientHeight}`:null}function re(){M.observeGrid(()=>{E=!0,Q(a.getState(),B)})}Ie(n,()=>{var e;return(e=a.getState())==null?void 0:e.turnTransition},async()=>{var i;const e=(i=a.getState())==null?void 0:i.turnTransition;G("dismiss transition",{transitionId:(e==null?void 0:e.id)??null,status:(e==null?void 0:e.status)??null,kind:(e==null?void 0:e.kind)??null}),await a.forceCompleteTurnTransition()});function U(){k=!1,T=new Set,h=null,O=null,R=null,H=null,C=null,B=null,q=null,E=!0,M.reset()}async function Te(e){l=e??null,l?await c.setRole(l):await c.setRole(null)}async function ie(e,{reopenPickerOnError:i=!1}={}){const t=++J,m=l;we();try{await Te(e)}catch(o){return l=m,i&&(w=!0),j(),ze("controller:set-role",o),t===J&&P(),!1}return t!==J?!1:(P(),e||j(),!0)}function he(e){const i=(e==null?void 0:e.gameId)??null;if(!i){S=null,Z(r,null),w=!l;return}if(!l){w=!0;return}if(!S){S=i,Z(r,i);return}i!==S&&!w&&(w=!0,U(),ie(null,{reopenPickerOnError:!0}))}function K(){return Qe({language:a.getLanguage(),presenceState:c.getPresenceState(),currentPresenceRole:l})}function Le(e,i){return JSON.stringify(z(e)[i])}function le(e,i){const t=N(e.cells);return(i==null?void 0:i.roleType)==="guide"?`${t}|${Le(e.teamEffects,i.team)}`:t}function Se(e,i,t,m){const o=t==null?void 0:t.roleType;return o!=="guide"&&o!=="walker"||m||e.turnTransition||e.gameOver||R!==o||H!==t.team||O!==i||!h||!n.querySelector(`.${o}-layout`)?!1:o==="walker"?N(h.cells)===N(e.cells):le(h,t)===le(e,t)}function Ce(e,i,t){return(t==null?void 0:t.roleType)==="guide"?ve({state:e,lang:i,team:t.team,maxHintButtons:de,teamEffects:z(e.teamEffects)[t.team]}):ke({state:e,lang:i,team:t.team})}function Re(e,i,t,m){const o=n.querySelector(`.${t.roleType} .grid`);return o?(t==null?void 0:t.roleType)==="walker"?ue({grid:o,prevCells:i==null?void 0:i.cells,nextCells:e.cells,getCellClass:f=>`${pe(f)}${m.canPlay&&!f.revealed?" cell--clickable":""}`,refreshAllClasses:!0,updateCellElement:(f,u,$)=>{f instanceof HTMLButtonElement&&(f.type="button",f.disabled=!m.canPlay||u.revealed,f.setAttribute("aria-label",u.word),f.dataset.index=String($))}}):ue({grid:o,prevCells:i==null?void 0:i.cells,nextCells:e.cells,getCellClass:f=>ge(f,{team:t.team,effects:z(e.teamEffects)[t.team]}),refreshAllClasses:!1}):!1}function He(e,i,t){const m=h,o=Ce(e,i,t),f=n.querySelector(".player-screen__title"),u=n.querySelector(".player-screen__meta-wrap"),$=n.querySelector(".player-screen__footer-content");return!f||!u||!$||(f.textContent=o.teamTitle,f.classList.toggle("player-screen__title--muted",o.titleMuted),f.classList.toggle("player-screen__title--active",!o.titleMuted),u.innerHTML=o.metaHtml,$.innerHTML=o.footerHtml,!Re(e,m,t,o))?!1:(h=e,O=i,R=t.roleType,H=t.team,!0)}function Q(e,i){if(!e||!i)return;const t=N(e.cells),m=be(),o=E||!k||C!==t||B!==i||q!==m;C=t,B=i,q=m,o&&(E=!1,M.scheduleFit())}function Be(e,i,t,m){var $,L;const o=z(e.teamEffects)[t.team],f=se(e.cells),u=!k||C!==N(e.cells)||B!=="guide";G("render guide",{revision:e.revision??null,transitionId:(($=e.turnTransition)==null?void 0:$.id)??null,transitionStatus:((L=e.turnTransition)==null?void 0:L.status)??null,gameOver:e.gameOver,shouldShowBoardLoading:u}),n.innerHTML=Xe({state:e,lang:i,team:t.team,maxHintButtons:de,teamEffects:o,controllerRolePickerHtml:m}),u&&M.markPending(),ce({root:n,selector:".guide .grid .cell",currentRevealed:f,prevRevealed:T,hasRenderedBoard:k}),T=f,k=!0,re(),Q(e,"guide")}function Pe(e,i,t,m){var u,$,L,I;const o=se(e.cells),f=!k||C!==N(e.cells)||B!=="walker";G("render walker",{revision:e.revision??null,transitionId:((u=e.turnTransition)==null?void 0:u.id)??null,transitionStatus:(($=e.turnTransition)==null?void 0:$.status)??null,guideLimit:((L=e.turn)==null?void 0:L.guideLimit)??null,dreamwalkerMoves:((I=e.turn)==null?void 0:I.dreamwalkerMoves)??null,gameOver:e.gameOver,shouldShowBoardLoading:f}),n.innerHTML=Ze({state:e,lang:i,team:t.team,controllerRolePickerHtml:m}),f&&M.markPending(),ce({root:n,selector:".walker .grid .cell",currentRevealed:o,prevRevealed:T,hasRenderedBoard:k}),T=o,k=!0,re(),Q(e,"walker")}function xe(e,i){document.body.classList.remove("team-resonant","team-dissonant"),U(),j(),n.innerHTML=ee(i,K())}function Oe(e,i){var f,u;he(e);const t=A(l),m=w||!t;if(G("renderBoard",{revision:e.revision??null,roleSelectionOpen:w,shouldShowPicker:m,transitionId:((f=e.turnTransition)==null?void 0:f.id)??null,transitionStatus:((u=e.turnTransition)==null?void 0:u.status)??null,syncStatus:a.getSyncStatus()}),!t){xe(e,i);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t.team}`);const o=m?K():"";if(!(Se(e,i,t,m)&&He(e,i,t))){if(t.roleType==="guide"){Be(e,i,t,o);return}Pe(e,i,t,o)}}function P({state:e,language:i}={}){var o,f,u,$;const t=e??a.getState(),m=i??a.getLanguage();if(!t){G("rerender skipped: no state"),U(),n.innerHTML=ee(m,l?"":K());return}G("rerender",{revision:t.revision??null,transitionId:((o=t.turnTransition)==null?void 0:o.id)??null,transitionStatus:((f=t.turnTransition)==null?void 0:f.status)??null,syncStatus:a.getSyncStatus()}),Oe(t,m),h=t,O=m,R=((u=A(l))==null?void 0:u.roleType)??null,H=(($=A(l))==null?void 0:$.team)??null}a.subscribe(P),c.onChange(()=>{(w||!l)&&P()}),Ae(()=>{E=!0,P()}),(ae=(oe=document.fonts)==null?void 0:oe.ready)==null||ae.then(()=>{E=!0,P()}).catch(()=>{}),n.addEventListener("click",async e=>{if(e.target.closest("[data-transition-dismiss]")){e.preventDefault(),e.stopPropagation(),await a.forceCompleteTurnTransition();return}const t=e.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(t){const u=t.dataset.roleType,$=t.dataset.team,L=_e(u,$),I=c.getPresenceState(),D=a.getState();if(I[L]&&l!==L)return;w=!1,S=(D==null?void 0:D.gameId)??null,Z(r,S),await ie(L,{reopenPickerOnError:!0});return}const m=e.target.closest(".guide__num-btn:not([disabled])");if(m){await a.setGuideLimit(parseInt(m.dataset.limit,10));return}const o=e.target.closest(".cell--clickable");if(o){await a.reveal(parseInt(o.dataset.index,10));return}if(e.target.closest("#refreshBtn")){const u=a.getState(),$=A(l),L=$&&(u==null?void 0:u.turn.team)===$.team,I=(u==null?void 0:u.turn.guideLimit)!==null;!!(L&&I&&!(u!=null&&u.gameOver)&&!(u!=null&&u.turnTransition))&&await a.endTurn()}}),P()}export{an as initController};
