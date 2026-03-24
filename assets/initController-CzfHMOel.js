import{C as Q,r as ue,a as me,q as fe,e as ge,g as _e,c as Ee,p as I,d as Ge,i as Oe,o as Ie,f as Ae,s as pe,m as Ne,n as j,k as ae,l as se,j as ce}from"./gridPatch-C9E-zRxT.js";import{t as B,e as z,I as A,f as Me,h as We,k as Fe,D as X,m as je,n as q,o as qe}from"./roomRepository-DP2sOvJL.js";import"./entry-f9_KxKyX.js";function ze(e){const t=B(e);let u=[];function s(){const a=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&a<=768&&l<=1024}async function f(){var a;if(s())try{(a=screen.orientation)!=null&&a.lock&&await screen.orientation.lock("portrait")}catch{}}function d(){let a=document.getElementById("orientation-guard");return a||(a=document.createElement("div"),a.id="orientation-guard",a.className="orientation-guard",a.setAttribute("aria-live","polite"),a.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${t.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${t.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(a)),a}function p(){const a=d(),l=window.matchMedia("(orientation: landscape)").matches,y=s()&&l;a.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const m=()=>{document.visibilityState==="visible"&&(f(),p())},$=()=>p(),o=()=>p();return f(),p(),document.addEventListener("visibilitychange",m),window.addEventListener("resize",$),window.addEventListener("orientationchange",o),u=[()=>document.removeEventListener("visibilitychange",m),()=>window.removeEventListener("resize",$),()=>window.removeEventListener("orientationchange",o)],()=>{u.forEach(a=>a())}}function De(e,t){return e==="guide"?t.guide:t.dreamwalker}function Ve(e,t){return e==="guide"?t.controllerGuideHint:t.controllerWalkerHint}function Je(e){return e==="guide"?A.book:A.eye}function Ue({language:e,presenceState:t,currentPresenceRole:u}){const s=B(e),f=Q.filter(l=>t==null?void 0:t[l.presenceRole]).length,d=u===null&&f>0,p=d?s.newGame:s.controllerConnectEyebrow,m=d?s.controllerReconnectTitle:s.controllerConnectTitle,$=d?s.controllerReconnectText:s.controllerConnectText,o=["dissonant","resonant"];function a(l){const y=u===l.presenceRole,v=!!(t!=null&&t[l.presenceRole])&&!y,w=De(l.roleType,s),T=Ve(l.roleType,s),h=v?s.roleBusy:y?s.currentRole:s.chooseRoleAction,b=v?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${v?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Je(l.roleType)}</span>
                <span class="controller-role-picker__role">${w}</span>
                <span class="controller-role-picker__hint">${T}</span>
                <span class="controller-role-picker__state ${b}">${h}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${d?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${p}</div>
                <h2 class="controller-role-picker__title">${m}</h2>
                <p class="controller-role-picker__text">${$}</p>
                <p class="controller-role-picker__summary">${f} / ${Q.length} ${s.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${o.map(l=>{const y=z(l,e),v=Q.filter(w=>w.team===l);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${l}">
                                <h3 class="controller-role-picker__team-title">${y}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${v.map(a).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function ye({mode:e,title:t,titleMuted:u=!1,metaHtml:s="",boardClassName:f="",boardHtml:d="",footerHtml:p="",overlayHtml:m=""}){return`
        <div class="screen-layout screen-layout--fit-pending player-screen-layout ${e}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${u?"player-screen__title--muted":"player-screen__title--active"}">${t}</div>
                    <div class="player-screen__meta-wrap">${s}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="screen-board player-screen__board ${f}">
                    ${d}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${e}__footer">
                <div class="player-screen__footer-content">${p}</div>
            </footer>
            ${m}
        </div>
    `}function ve({state:e,lang:t,team:u,maxHintButtons:s,teamEffects:f}){const d=B(t),p=e.turn,m=p.team===u,$=p.guideLimit!==null,o=m&&!$&&!e.gameOver&&!e.turnTransition,a=f.allowTwoWordClue,l=f.forcedGuideLimit,y=f.hideEnemyColors,v=f.hideNightmare,w=z(u,t),T=o?`${d.guide}: ${d.chooseLimit}`:`${d.guide}: ${A.eyeClosed}`,h=[o&&l===1?d.guideForcedOneMove:null,o&&a?d.guideTwoWordClue:null,y?d.guideBlurActive:null,v?d.guideNightmareHidden:null].filter(Boolean),b=h.length?`<div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${h.join(" • ")}</div>`:"",L=Array.from({length:s},(R,S)=>{const C=S+1;return`
            <button
                class="guide__num-btn ${p.guideLimit===C?"guide__num-btn--chosen":""}"
                data-limit="${C}"
                ${!o||l!==null&&C!==l?"disabled":""}
            >${C}</button>
        `}).join("");return{teamTitle:w,titleMuted:!o,metaHtml:`
            <div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${T}</div>
            ${b}
        `,boardHtml:`
            <div class="grid grid--5">
                ${e.cells.map((R,S)=>`
                    <div class="${fe(R,{team:u,effects:f})}" data-index="${S}">
                        <span class="cell__content">${ge(R.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${o?"guide__btns--active":"guide__btns--muted"}">${L}</div>`}}function Ke({state:e,lang:t,team:u,maxHintButtons:s,teamEffects:f,suppressedTransitionId:d,controllerRolePickerHtml:p=""}){const m=ve({state:e,lang:t,team:u,maxHintButtons:s,teamEffects:f});return ye({mode:"guide",title:m.teamTitle,titleMuted:m.titleMuted,metaHtml:m.metaHtml,boardClassName:`guide guide--${u}`,boardHtml:m.boardHtml,footerHtml:m.footerHtml,overlayHtml:`
            ${ue(e,t,{suppressedTransitionId:d})}
            ${me({state:e,lang:t,team:u})}
            ${p}
        `})}function ke({state:e,lang:t,team:u}){const s=B(t),f=e.turn,d=f.team===u,p=f.guideLimit!==null,m=d&&p&&!e.gameOver&&!e.turnTransition,$=p?Math.max((f.guideLimit??0)-(f.dreamwalkerMoves??0),0):0,o=z(u,t),a=m?`${s.dreamwalker}: <span class="walker__moves-value">${Me($,t)}</span>`:`${s.dreamwalker}: ${A.eyeClosed}`;return{teamTitle:o,titleMuted:!m,metaHtml:`<div class="${m?"player__meta player__meta--active":"player__meta player__meta--muted"}">${a}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${e.cells.map((y,v)=>`
                    <div
                        class="${_e(y)} ${m&&!y.revealed?"cell--clickable":""}"
                        data-index="${v}"
                    >
                        <span class="cell__content">${ge(y.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${m?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${s.endTurn}" ${m?"":"disabled"}>
                    <span class="walker__action-label">${s.endTurn}</span>
                    <span class="walker__action-icon">${A.x}</span>
                </button>
            </div>
        `,canPlay:m}}function Qe({state:e,lang:t,team:u,suppressedTransitionId:s,controllerRolePickerHtml:f=""}){const d=ke({state:e,lang:t,team:u});return ye({mode:"walker",title:d.teamTitle,titleMuted:d.titleMuted,metaHtml:d.metaHtml,boardClassName:`walker walker--${u}`,boardHtml:d.boardHtml,footerHtml:d.footerHtml,overlayHtml:`
            ${ue(e,t,{suppressedTransitionId:s})}
            ${me({state:e,lang:t,team:u})}
            ${f}
        `})}const de=8;function ee(e){return`nw-controller-game:${e}`}function Xe(e){try{return sessionStorage.getItem(ee(e))}catch{return null}}function Y(e,t){try{t?sessionStorage.setItem(ee(e),t):sessionStorage.removeItem(ee(e))}catch{}}function Ye({team:e,roleType:t}){return!e||e!=="resonant"&&e!=="dissonant"?null:t==="guide"||t==="walker"?pe(t,e):null}function Ze(e,t,u){if(!e)return t.controllerTaken.replace(`
`,"<br>");if(e.roleType==="walker")return`${z(e.team,u)} ${t.dreamwalker}<br>${t.controllerTaken.replace(`
`,"<br>")}`;const s=e.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return t[s].replace(`
`,"<br>")}function Z(e,t=""){return`<div class="waiting-screen">
        ${t?"":`<p>${B(e).waitingGame}</p>`}
        ${t}
    </div>`}async function rn(e){var le,oe;const{roomId:t,token:u,team:s,roleType:f}=We();if(e.innerHTML=Z(X),!t||!u){e.innerHTML=`<div class="waiting-screen">
            <p>${B(X).scanQr}</p>
        </div>`;return}const{room:d,error:p}=await Fe(t,u),m=(d==null?void 0:d.language)||X,$=B(m);if(!d||p){e.innerHTML=`<div class="waiting-screen">
            <p>${$.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}ze(m);const o=Ae(t);await o.init();const a=Ee(t);let l=Ye({team:s,roleType:f});const y=I(l);l&&await a.isRoleTaken(l)&&(e.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${Ze(y,$,m)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${$.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(i=>{var r;(r=document.getElementById("forceJoinBtn"))==null||r.addEventListener("click",i,{once:!0})})),l?a.join(l):a.listen(),await Ge({presence:a,store:o,role:()=>l});let v=!1,w=new Set,T=null,h=Xe(t),b=!l,L=null,R=null,S=null,C=null,N=null,P=null,D=null,x=!0,M=!1;const E=Ne({root:e,getGrid:()=>e.querySelector(".grid"),onFitEnd:()=>{ne()}});function $e(){return e.querySelector(".grid")}function we(){M||(M=!0,je())}function ne(){M&&(M=!1,qe())}function Te(){const n=$e();return n?`${n.clientWidth}x${n.clientHeight}`:null}function te(){E.observeGrid(()=>{x=!0,U(o.getState(),P)})}Oe(e,()=>{var n;return(n=o.getState())==null?void 0:n.turnTransition},async()=>{var i;const n=(i=o.getState())==null?void 0:i.turnTransition;n!=null&&n.id&&(T=n.id,H()),await o.forceCompleteTurnTransition()});function V(){v=!1,w=new Set,T=null,L=null,R=null,S=null,C=null,N=null,P=null,D=null,x=!0,E.reset()}async function re(n){l=n??null,l?await a.setRole(l):await a.setRole(null)}function he(n){const i=(n==null?void 0:n.gameId)??null;if(!i){h=null,Y(t,null),b=!l;return}if(!l){b=!0;return}if(!h){h=i,Y(t,i);return}i!==h&&!b&&(b=!0,V(),re(null).then(()=>H()))}function J(){return Ue({language:o.getLanguage(),presenceState:a.getPresenceState(),currentPresenceRole:l})}function be(n,i){return JSON.stringify(q(n)[i])}function ie(n,i){const r=j(n.cells);return(i==null?void 0:i.roleType)==="guide"?`${r}|${be(n.teamEffects,i.team)}`:r}function Le(n,i,r,g){const c=r==null?void 0:r.roleType;return c!=="guide"&&c!=="walker"||g||n.turnTransition||n.gameOver||S!==c||C!==r.team||R!==i||!L||!e.querySelector(`.${c}-layout`)?!1:c==="walker"?j(L.cells)===j(n.cells):ie(L,r)===ie(n,r)}function Ce(n,i,r){return(r==null?void 0:r.roleType)==="guide"?ve({state:n,lang:i,team:r.team,maxHintButtons:de,teamEffects:q(n.teamEffects)[r.team]}):ke({state:n,lang:i,team:r.team})}function He(n,i,r,g){const c=e.querySelector(`.${r.roleType} .grid`);return c?(r==null?void 0:r.roleType)==="walker"?ce({grid:c,prevCells:i==null?void 0:i.cells,nextCells:n.cells,getCellClass:k=>`${_e(k)}${g.canPlay&&!k.revealed?" cell--clickable":""}`,refreshAllClasses:!0}):ce({grid:c,prevCells:i==null?void 0:i.cells,nextCells:n.cells,getCellClass:k=>fe(k,{team:r.team,effects:q(n.teamEffects)[r.team]}),refreshAllClasses:!1}):!1}function Re(n,i,r){const g=L,c=Ce(n,i,r),k=e.querySelector(".player-screen__title"),G=e.querySelector(".player-screen__meta-wrap"),_=e.querySelector(".player-screen__footer-content");return!k||!G||!_||(k.textContent=c.teamTitle,k.classList.toggle("player-screen__title--muted",c.titleMuted),k.classList.toggle("player-screen__title--active",!c.titleMuted),G.innerHTML=c.metaHtml,_.innerHTML=c.footerHtml,!He(n,g,r,c))?!1:(L=n,R=i,S=r.roleType,C=r.team,!0)}function U(n,i){if(!n||!i)return;const r=j(n.cells),g=Te(),c=x||!v||N!==r||P!==i||D!==g;N=r,P=i,D=g,c&&(x=!1,E.scheduleFit())}function Se(n,i,r,g){const c=q(n.teamEffects)[r.team],k=ae(n.cells);e.innerHTML=Ke({state:n,lang:i,team:r.team,maxHintButtons:de,teamEffects:c,suppressedTransitionId:T,controllerRolePickerHtml:g}),E.markPending(),se({root:e,selector:".guide .grid .cell",currentRevealed:k,prevRevealed:w,hasRenderedBoard:v}),w=k,v=!0,te(),U(n,"guide")}function Be(n,i,r,g){const c=ae(n.cells);e.innerHTML=Qe({state:n,lang:i,team:r.team,suppressedTransitionId:T,controllerRolePickerHtml:g}),E.markPending(),se({root:e,selector:".walker .grid .cell",currentRevealed:c,prevRevealed:w,hasRenderedBoard:v}),w=c,v=!0,te(),U(n,"walker")}function xe(n,i){document.body.classList.remove("team-resonant","team-dissonant"),V(),ne(),e.innerHTML=Z(i,J())}function Pe(n,i){he(n),(!n.turnTransition||n.turnTransition.id!==T)&&(T=null);const r=I(l),g=b||!r;if(!r){xe(n,i);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${r.team}`);const c=g?J():"";if(!(Le(n,i,r,g)&&Re(n,i,r))){if(r.roleType==="guide"){Se(n,i,r,c);return}Be(n,i,r,c)}}function H({state:n,language:i}={}){var c,k;const r=n??o.getState(),g=i??o.getLanguage();if(!r){V(),e.innerHTML=Z(g,l?"":J());return}Pe(r,g),L=r,R=g,S=((c=I(l))==null?void 0:c.roleType)??null,C=((k=I(l))==null?void 0:k.team)??null}o.subscribe(H),a.onChange(()=>{(b||!l)&&H()}),Ie(()=>{x=!0,H()}),(oe=(le=document.fonts)==null?void 0:le.ready)==null||oe.then(()=>{x=!0,H()}).catch(()=>{}),e.addEventListener("click",async n=>{var G;if(n.target.closest("[data-transition-dismiss]")){const _=(G=o.getState())==null?void 0:G.turnTransition;_!=null&&_.id&&(T=_.id,H()),await o.forceCompleteTurnTransition();return}const r=n.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(r){const _=r.dataset.roleType,W=r.dataset.team,O=pe(_,W),K=a.getPresenceState(),F=o.getState();if(K[O]&&l!==O)return;b=!1,we(),h=(F==null?void 0:F.gameId)??null,Y(t,h),await re(O),H();return}const g=n.target.closest(".guide__num-btn:not([disabled])");if(g){await o.setGuideLimit(parseInt(g.dataset.limit,10));return}const c=n.target.closest(".cell--clickable");if(c){await o.reveal(parseInt(c.dataset.index,10));return}if(n.target.closest("#refreshBtn")){const _=o.getState(),W=I(l),O=W&&(_==null?void 0:_.turn.team)===W.team,K=(_==null?void 0:_.turn.guideLimit)!==null;!!(O&&K&&!(_!=null&&_.gameOver)&&!(_!=null&&_.turnTransition))&&await o.endTurn()}}),H()}export{rn as initController};
