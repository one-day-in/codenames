import{C as Q,r as ue,a as me,q as fe,e as ee,g as ge,c as Ee,p as A,d as Ge,i as Oe,o as Ie,f as Ae,s as pe,n as Ne,l as G,k as ae,m as se,j as ce}from"./gridPatch-BrF3-ODs.js";import{t as P,e as z,I as N,f as Me,h as We,k as qe,D as X,m as Fe,n as je,o as j}from"./roomRepository-CIM5PE7W.js";import{r as ze}from"./entry-C22KtAnj.js";function De(e){const r=P(e);let u=[];function a(){const s=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&s<=768&&l<=1024}async function g(){var s;if(a())try{(s=screen.orientation)!=null&&s.lock&&await screen.orientation.lock("portrait")}catch{}}function c(){let s=document.getElementById("orientation-guard");return s||(s=document.createElement("div"),s.id="orientation-guard",s.className="orientation-guard",s.setAttribute("aria-live","polite"),s.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${r.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${r.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(s)),s}function v(){const s=c(),l=window.matchMedia("(orientation: landscape)").matches,y=a()&&l;s.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const m=()=>{document.visibilityState==="visible"&&(g(),v())},$=()=>v(),d=()=>v();return g(),v(),document.addEventListener("visibilitychange",m),window.addEventListener("resize",$),window.addEventListener("orientationchange",d),u=[()=>document.removeEventListener("visibilitychange",m),()=>window.removeEventListener("resize",$),()=>window.removeEventListener("orientationchange",d)],()=>{u.forEach(s=>s())}}function Ve(e,r){return e==="guide"?r.guide:r.dreamwalker}function Je(e,r){return e==="guide"?r.controllerGuideHint:r.controllerWalkerHint}function Ue(e){return e==="guide"?N.book:N.eye}function Ke({language:e,presenceState:r,currentPresenceRole:u}){const a=P(e),g=Q.filter(l=>r==null?void 0:r[l.presenceRole]).length,c=u===null&&g>0,v=c?a.newGame:a.controllerConnectEyebrow,m=c?a.controllerReconnectTitle:a.controllerConnectTitle,$=c?a.controllerReconnectText:a.controllerConnectText,d=["dissonant","resonant"];function s(l){const y=u===l.presenceRole,k=!!(r!=null&&r[l.presenceRole])&&!y,b=Ve(l.roleType,a),T=Je(l.roleType,a),w=k?a.roleBusy:y?a.currentRole:a.chooseRoleAction,h=k?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${k?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Ue(l.roleType)}</span>
                <span class="controller-role-picker__role">${b}</span>
                <span class="controller-role-picker__hint">${T}</span>
                <span class="controller-role-picker__state ${h}">${w}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${c?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${v}</div>
                <h2 class="controller-role-picker__title">${m}</h2>
                <p class="controller-role-picker__text">${$}</p>
                <p class="controller-role-picker__summary">${g} / ${Q.length} ${a.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${d.map(l=>{const y=z(l,e),k=Q.filter(b=>b.team===l);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${l}">
                                <h3 class="controller-role-picker__team-title">${y}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${k.map(s).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function _e({mode:e,title:r,titleMuted:u=!1,metaHtml:a="",boardClassName:g="",boardHtml:c="",footerHtml:v="",overlayHtml:m=""}){return`
        <div class="screen-layout screen-layout--fit-pending player-screen-layout ${e}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${u?"player-screen__title--muted":"player-screen__title--active"}">${r}</div>
                    <div class="player-screen__meta-wrap" aria-live="polite">${a}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="screen-board player-screen__board ${g}">
                    ${c}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${e}__footer">
                <div class="player-screen__footer-content">${v}</div>
            </footer>
            ${m}
        </div>
    `}function ye({state:e,lang:r,team:u,maxHintButtons:a,teamEffects:g}){const c=P(r),v=e.turn,m=v.team===u,$=v.guideLimit!==null,d=m&&!$&&!e.gameOver&&!e.turnTransition,s=g.allowTwoWordClue,l=g.forcedGuideLimit,y=g.hideEnemyColors,k=g.hideNightmare,b=z(u,r),T=d?`${c.guide}: ${c.chooseLimit}`:`${c.guide}: ${N.eyeClosed}`,w=[d&&l===1?c.guideForcedOneMove:null,d&&s?c.guideTwoWordClue:null,y?c.guideBlurActive:null,k?c.guideNightmareHidden:null].filter(Boolean),h=w.length?`<div class="player__meta player__meta--detail ${d?"player__meta--active":"player__meta--muted"}">${w.join(" • ")}</div>`:"",x=Array.from({length:a},(R,H)=>{const L=H+1;return`
            <button
                class="guide__num-btn ${v.guideLimit===L?"guide__num-btn--chosen":""}"
                data-limit="${L}"
                ${!d||l!==null&&L!==l?"disabled":""}
            >${L}</button>
        `}).join("");return{teamTitle:b,titleMuted:!d,metaHtml:`
            <div class="player__meta ${d?"player__meta--active":"player__meta--muted"}">${T}</div>
            ${h}
        `,boardHtml:`
            <div class="grid grid--5">
                ${e.cells.map((R,H)=>`
                    <div class="${fe(R,{team:u,effects:g})}" data-index="${H}">
                        <span class="cell__content">${ee(R.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${d?"guide__btns--active":"guide__btns--muted"}">${x}</div>`}}function Qe({state:e,lang:r,team:u,maxHintButtons:a,teamEffects:g,suppressedTransitionId:c,controllerRolePickerHtml:v=""}){const m=ye({state:e,lang:r,team:u,maxHintButtons:a,teamEffects:g});return _e({mode:"guide",title:m.teamTitle,titleMuted:m.titleMuted,metaHtml:m.metaHtml,boardClassName:`guide guide--${u}`,boardHtml:m.boardHtml,footerHtml:m.footerHtml,overlayHtml:`
            ${ue(e,r,{suppressedTransitionId:c})}
            ${me({state:e,lang:r,team:u})}
            ${v}
        `})}function Xe(e,r){return e.revealed?e.word:`${e.word}, ${r.dreamwalker}`}function ve({state:e,lang:r,team:u}){const a=P(r),g=e.turn,c=g.team===u,v=g.guideLimit!==null,m=c&&v&&!e.gameOver&&!e.turnTransition,$=v?Math.max((g.guideLimit??0)-(g.dreamwalkerMoves??0),0):0,d=z(u,r),s=m?`${a.dreamwalker}: <span class="walker__moves-value">${Me($,r)}</span>`:`${a.dreamwalker}: ${N.eyeClosed}`;return{teamTitle:d,titleMuted:!m,metaHtml:`<div class="${m?"player__meta player__meta--active":"player__meta player__meta--muted"}">${s}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${e.cells.map((y,k)=>`
                    <button
                        type="button"
                        aria-label="${ee(Xe(y,a))}"
                        class="${ge(y)} ${m&&!y.revealed?"cell--clickable":""}"
                        data-index="${k}"
                        ${!m||y.revealed?"disabled":""}
                    >
                        <span class="cell__content">${ee(y.word)}</span>
                    </button>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${m?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${a.endTurn}" ${m?"":"disabled"}>
                    <span class="walker__action-label">${a.endTurn}</span>
                    <span class="walker__action-icon">${N.x}</span>
                </button>
            </div>
        `,canPlay:m}}function Ye({state:e,lang:r,team:u,suppressedTransitionId:a,controllerRolePickerHtml:g=""}){const c=ve({state:e,lang:r,team:u});return _e({mode:"walker",title:c.teamTitle,titleMuted:c.titleMuted,metaHtml:c.metaHtml,boardClassName:`walker walker--${u}`,boardHtml:c.boardHtml,footerHtml:c.footerHtml,overlayHtml:`
            ${ue(e,r,{suppressedTransitionId:a})}
            ${me({state:e,lang:r,team:u})}
            ${g}
        `})}const de=8;function te(e){return`nw-controller-game:${e}`}function Ze(e){try{return sessionStorage.getItem(te(e))}catch{return null}}function Y(e,r){try{r?sessionStorage.setItem(te(e),r):sessionStorage.removeItem(te(e))}catch{}}function et({team:e,roleType:r}){return!e||e!=="resonant"&&e!=="dissonant"?null:r==="guide"||r==="walker"?pe(r,e):null}function tt(e,r,u){if(!e)return r.controllerTaken.replace(`
`,"<br>");if(e.roleType==="walker")return`${z(e.team,u)} ${r.dreamwalker}<br>${r.controllerTaken.replace(`
`,"<br>")}`;const a=e.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return r[a].replace(`
`,"<br>")}function Z(e,r=""){return`<div class="waiting-screen">
        ${r?"":`<p>${P(e).waitingGame}</p>`}
        ${r}
    </div>`}async function lt(e){var le,oe;const{roomId:r,token:u,team:a,roleType:g}=We();if(e.innerHTML=Z(X),!r||!u){e.innerHTML=`<div class="waiting-screen">
            <p>${P(X).scanQr}</p>
        </div>`;return}const{room:c,error:v}=await qe(r,u),m=(c==null?void 0:c.language)||X,$=P(m);if(!c||v){e.innerHTML=`<div class="waiting-screen">
            <p>${$.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}De(m);const d=Ae(r);await d.init();const s=Ee(r);let l=et({team:a,roleType:g});const y=A(l);l&&await s.isRoleTaken(l)&&(e.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${tt(y,$,m)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${$.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(i=>{var n;(n=document.getElementById("forceJoinBtn"))==null||n.addEventListener("click",i,{once:!0})})),l?s.join(l):s.listen(),await Ge({presence:s,store:d,role:()=>l});let k=!1,b=new Set,T=Ze(r),w=!l,h=null,x=null,R=null,H=null,L=null,S=null,M=null,E=!0,W=!1,D=0;const O=Ne({root:e,getGrid:()=>e.querySelector(".grid"),onFitEnd:()=>{q()}});function ke(){return e.querySelector(".grid")}function we(){W||(W=!0,Fe())}function q(){W&&(W=!1,je())}function $e(){const t=ke();return t?`${t.clientWidth}x${t.clientHeight}`:null}function ne(){O.observeGrid(()=>{E=!0,U(d.getState(),S)})}Oe(e,()=>{var t;return(t=d.getState())==null?void 0:t.turnTransition},async()=>{await d.forceCompleteTurnTransition()});function V(){k=!1,b=new Set,h=null,x=null,R=null,H=null,L=null,S=null,M=null,E=!0,O.reset()}async function be(t){l=t??null,l?await s.setRole(l):await s.setRole(null)}async function re(t,{reopenPickerOnError:i=!1}={}){const n=++D,f=l;we();try{await be(t)}catch(o){return l=f,i&&(w=!0),q(),ze("controller:set-role",o),n===D&&B(),!1}return n!==D?!1:(B(),t||q(),!0)}function he(t){const i=(t==null?void 0:t.gameId)??null;if(!i){T=null,Y(r,null),w=!l;return}if(!l){w=!0;return}if(!T){T=i,Y(r,i);return}i!==T&&!w&&(w=!0,V(),re(null,{reopenPickerOnError:!0}))}function J(){return Ke({language:d.getLanguage(),presenceState:s.getPresenceState(),currentPresenceRole:l})}function Te(t,i){return JSON.stringify(j(t)[i])}function ie(t,i){const n=G(t.cells);return(i==null?void 0:i.roleType)==="guide"?`${n}|${Te(t.teamEffects,i.team)}`:n}function Le(t,i,n,f){const o=n==null?void 0:n.roleType;return o!=="guide"&&o!=="walker"||f||t.turnTransition||t.gameOver||R!==o||H!==n.team||x!==i||!h||!e.querySelector(`.${o}-layout`)?!1:o==="walker"?G(h.cells)===G(t.cells):ie(h,n)===ie(t,n)}function Ce(t,i,n){return(n==null?void 0:n.roleType)==="guide"?ye({state:t,lang:i,team:n.team,maxHintButtons:de,teamEffects:j(t.teamEffects)[n.team]}):ve({state:t,lang:i,team:n.team})}function Re(t,i,n,f){const o=e.querySelector(`.${n.roleType} .grid`);return o?(n==null?void 0:n.roleType)==="walker"?ce({grid:o,prevCells:i==null?void 0:i.cells,nextCells:t.cells,getCellClass:p=>`${ge(p)}${f.canPlay&&!p.revealed?" cell--clickable":""}`,refreshAllClasses:!0,updateCellElement:(p,_,C)=>{p instanceof HTMLButtonElement&&(p.type="button",p.disabled=!f.canPlay||_.revealed,p.setAttribute("aria-label",_.word),p.dataset.index=String(C))}}):ce({grid:o,prevCells:i==null?void 0:i.cells,nextCells:t.cells,getCellClass:p=>fe(p,{team:n.team,effects:j(t.teamEffects)[n.team]}),refreshAllClasses:!1}):!1}function He(t,i,n){const f=h,o=Ce(t,i,n),p=e.querySelector(".player-screen__title"),_=e.querySelector(".player-screen__meta-wrap"),C=e.querySelector(".player-screen__footer-content");return!p||!_||!C||(p.textContent=o.teamTitle,p.classList.toggle("player-screen__title--muted",o.titleMuted),p.classList.toggle("player-screen__title--active",!o.titleMuted),_.innerHTML=o.metaHtml,C.innerHTML=o.footerHtml,!Re(t,f,n,o))?!1:(h=t,x=i,R=n.roleType,H=n.team,!0)}function U(t,i){if(!t||!i)return;const n=G(t.cells),f=$e(),o=E||!k||L!==n||S!==i||M!==f;L=n,S=i,M=f,o&&(E=!1,O.scheduleFit())}function Se(t,i,n,f){const o=j(t.teamEffects)[n.team],p=ae(t.cells),_=!k||L!==G(t.cells)||S!=="guide";e.innerHTML=Qe({state:t,lang:i,team:n.team,maxHintButtons:de,teamEffects:o,controllerRolePickerHtml:f}),_&&O.markPending(),se({root:e,selector:".guide .grid .cell",currentRevealed:p,prevRevealed:b,hasRenderedBoard:k}),b=p,k=!0,ne(),U(t,"guide")}function Be(t,i,n,f){const o=ae(t.cells),p=!k||L!==G(t.cells)||S!=="walker";e.innerHTML=Ye({state:t,lang:i,team:n.team,controllerRolePickerHtml:f}),p&&O.markPending(),se({root:e,selector:".walker .grid .cell",currentRevealed:o,prevRevealed:b,hasRenderedBoard:k}),b=o,k=!0,ne(),U(t,"walker")}function Pe(t,i){document.body.classList.remove("team-resonant","team-dissonant"),V(),q(),e.innerHTML=Z(i,J())}function xe(t,i){he(t);const n=A(l),f=w||!n;if(!n){Pe(t,i);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${n.team}`);const o=f?J():"";if(!(Le(t,i,n,f)&&He(t,i,n))){if(n.roleType==="guide"){Se(t,i,n,o);return}Be(t,i,n,o)}}function B({state:t,language:i}={}){var o,p;const n=t??d.getState(),f=i??d.getLanguage();if(!n){V(),e.innerHTML=Z(f,l?"":J());return}xe(n,f),h=n,x=f,R=((o=A(l))==null?void 0:o.roleType)??null,H=((p=A(l))==null?void 0:p.team)??null}d.subscribe(B),s.onChange(()=>{(w||!l)&&B()}),Ie(()=>{E=!0,B()}),(oe=(le=document.fonts)==null?void 0:le.ready)==null||oe.then(()=>{E=!0,B()}).catch(()=>{}),e.addEventListener("click",async t=>{if(t.target.closest("[data-transition-dismiss]")){t.preventDefault(),t.stopPropagation(),await d.forceCompleteTurnTransition();return}const n=t.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(n){const _=n.dataset.roleType,C=n.dataset.team,I=pe(_,C),K=s.getPresenceState(),F=d.getState();if(K[I]&&l!==I)return;w=!1,T=(F==null?void 0:F.gameId)??null,Y(r,T),await re(I,{reopenPickerOnError:!0});return}const f=t.target.closest(".guide__num-btn:not([disabled])");if(f){await d.setGuideLimit(parseInt(f.dataset.limit,10));return}const o=t.target.closest(".cell--clickable");if(o){await d.reveal(parseInt(o.dataset.index,10));return}if(t.target.closest("#refreshBtn")){const _=d.getState(),C=A(l),I=C&&(_==null?void 0:_.turn.team)===C.team,K=(_==null?void 0:_.turn.guideLimit)!==null;!!(I&&K&&!(_!=null&&_.gameOver)&&!(_!=null&&_.turnTransition))&&await d.endTurn()}}),B()}export{lt as initController};
