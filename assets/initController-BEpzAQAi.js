import{C as X,r as ye,a as ve,m as Ne,e as ke,g as We,c as Fe,p as A,d as je,i as qe,o as ze,f as De,n as $e,j as Y,k as ge,q as pe,l as Ve}from"./turnTransitionDismiss-BUn_jTBN.js";import{t as P,e as q,I as M,f as Je,h as Ue,k as Ke,D as Z,m as Qe,n as ee,o as Xe}from"./roomRepository-DP2sOvJL.js";import"./entry-BRRMSp8D.js";function Ye(t){const n=P(t);let d=[];function s(){const a=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&a<=768&&l<=1024}async function g(){var a;if(s())try{(a=screen.orientation)!=null&&a.lock&&await screen.orientation.lock("portrait")}catch{}}function c(){let a=document.getElementById("orientation-guard");return a||(a=document.createElement("div"),a.id="orientation-guard",a.className="orientation-guard",a.setAttribute("aria-live","polite"),a.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(a)),a}function p(){const a=c(),l=window.matchMedia("(orientation: landscape)").matches,y=s()&&l;a.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const f=()=>{document.visibilityState==="visible"&&(g(),p())},$=()=>p(),o=()=>p();return g(),p(),document.addEventListener("visibilitychange",f),window.addEventListener("resize",$),window.addEventListener("orientationchange",o),d=[()=>document.removeEventListener("visibilitychange",f),()=>window.removeEventListener("resize",$),()=>window.removeEventListener("orientationchange",o)],()=>{d.forEach(a=>a())}}function Ze(t,n){return t==="guide"?n.guide:n.dreamwalker}function et(t,n){return t==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function tt(t){return t==="guide"?M.book:M.eye}function nt({language:t,presenceState:n,currentPresenceRole:d}){const s=P(t),g=X.filter(l=>n==null?void 0:n[l.presenceRole]).length,c=d===null&&g>0,p=c?s.newGame:s.controllerConnectEyebrow,f=c?s.controllerReconnectTitle:s.controllerConnectTitle,$=c?s.controllerReconnectText:s.controllerConnectText,o=["dissonant","resonant"];function a(l){const y=d===l.presenceRole,k=!!(n!=null&&n[l.presenceRole])&&!y,w=Ze(l.roleType,s),h=et(l.roleType,s),T=k?s.roleBusy:y?s.currentRole:s.chooseRoleAction,b=k?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${k?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${tt(l.roleType)}</span>
                <span class="controller-role-picker__role">${w}</span>
                <span class="controller-role-picker__hint">${h}</span>
                <span class="controller-role-picker__state ${b}">${T}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${c?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${p}</div>
                <h2 class="controller-role-picker__title">${f}</h2>
                <p class="controller-role-picker__text">${$}</p>
                <p class="controller-role-picker__summary">${g} / ${X.length} ${s.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${o.map(l=>{const y=q(l,t),k=X.filter(w=>w.team===l);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${l}">
                                <h3 class="controller-role-picker__team-title">${y}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${k.map(a).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function we({mode:t,title:n,titleMuted:d=!1,metaHtml:s="",boardClassName:g="",boardHtml:c="",footerHtml:p="",overlayHtml:f=""}){return`
        <div class="screen-layout screen-layout--fit-pending player-screen-layout ${t}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${d?"player-screen__title--muted":"player-screen__title--active"}">${n}</div>
                    <div class="player-screen__meta-wrap">${s}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="screen-board player-screen__board ${g}">
                    ${c}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${t}__footer">
                <div class="player-screen__footer-content">${p}</div>
            </footer>
            ${f}
        </div>
    `}function he({state:t,lang:n,team:d,maxHintButtons:s,teamEffects:g}){const c=P(n),p=t.turn,f=p.team===d,$=p.guideLimit!==null,o=f&&!$&&!t.gameOver&&!t.turnTransition,a=g.allowTwoWordClue,l=g.forcedGuideLimit,y=g.hideEnemyColors,k=g.hideNightmare,w=q(d,n),h=o?`${c.guide}: ${c.chooseLimit}`:`${c.guide}: ${M.eyeClosed}`,T=[o&&l===1?c.guideForcedOneMove:null,o&&a?c.guideTwoWordClue:null,y?c.guideBlurActive:null,k?c.guideNightmareHidden:null].filter(Boolean),b=T.length?`<div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${T.join(" • ")}</div>`:"",B=Array.from({length:s},(H,C)=>{const S=C+1;return`
            <button
                class="guide__num-btn ${p.guideLimit===S?"guide__num-btn--chosen":""}"
                data-limit="${S}"
                ${!o||l!==null&&S!==l?"disabled":""}
            >${S}</button>
        `}).join("");return{teamTitle:w,titleMuted:!o,metaHtml:`
            <div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${h}</div>
            ${b}
        `,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map((H,C)=>`
                    <div class="${Ne(H,{team:d,effects:g})}" data-index="${C}">
                        <span class="cell__content">${ke(H.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${o?"guide__btns--active":"guide__btns--muted"}">${B}</div>`}}function rt({state:t,lang:n,team:d,maxHintButtons:s,teamEffects:g,suppressedTransitionId:c,controllerRolePickerHtml:p=""}){const f=he({state:t,lang:n,team:d,maxHintButtons:s,teamEffects:g});return we({mode:"guide",title:f.teamTitle,titleMuted:f.titleMuted,metaHtml:f.metaHtml,boardClassName:`guide guide--${d}`,boardHtml:f.boardHtml,footerHtml:f.footerHtml,overlayHtml:`
            ${ye(t,n,{suppressedTransitionId:c})}
            ${ve({state:t,lang:n,team:d})}
            ${p}
        `})}function Te({state:t,lang:n,team:d}){const s=P(n),g=t.turn,c=g.team===d,p=g.guideLimit!==null,f=c&&p&&!t.gameOver&&!t.turnTransition,$=p?Math.max((g.guideLimit??0)-(g.dreamwalkerMoves??0),0):0,o=q(d,n),a=f?`${s.dreamwalker}: <span class="walker__moves-value">${Je($,n)}</span>`:`${s.dreamwalker}: ${M.eyeClosed}`;return{teamTitle:o,titleMuted:!f,metaHtml:`<div class="${f?"player__meta player__meta--active":"player__meta player__meta--muted"}">${a}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map((y,k)=>`
                    <div
                        class="${We(y)} ${f&&!y.revealed?"cell--clickable":""}"
                        data-index="${k}"
                    >
                        <span class="cell__content">${ke(y.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${f?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${s.endTurn}" ${f?"":"disabled"}>
                    <span class="walker__action-label">${s.endTurn}</span>
                    <span class="walker__action-icon">${M.x}</span>
                </button>
            </div>
        `,canPlay:f}}function it({state:t,lang:n,team:d,suppressedTransitionId:s,controllerRolePickerHtml:g=""}){const c=Te({state:t,lang:n,team:d});return we({mode:"walker",title:c.teamTitle,titleMuted:c.titleMuted,metaHtml:c.metaHtml,boardClassName:`walker walker--${d}`,boardHtml:c.boardHtml,footerHtml:c.footerHtml,overlayHtml:`
            ${ye(t,n,{suppressedTransitionId:s})}
            ${ve({state:t,lang:n,team:d})}
            ${g}
        `})}const _e=8;function re(t){return`nw-controller-game:${t}`}function lt(t){try{return sessionStorage.getItem(re(t))}catch{return null}}function te(t,n){try{n?sessionStorage.setItem(re(t),n):sessionStorage.removeItem(re(t))}catch{}}function ot({team:t,roleType:n}){return!t||t!=="resonant"&&t!=="dissonant"?null:n==="guide"||n==="walker"?$e(n,t):null}function at(t,n,d){if(!t)return n.controllerTaken.replace(`
`,"<br>");if(t.roleType==="walker")return`${q(t.team,d)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const s=t.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[s].replace(`
`,"<br>")}function ne(t,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${P(t).waitingGame}</p>`}
        ${n}
    </div>`}async function dt(t){var me,fe;const{roomId:n,token:d,team:s,roleType:g}=Ue();if(t.innerHTML=ne(Z),!n||!d){t.innerHTML=`<div class="waiting-screen">
            <p>${P(Z).scanQr}</p>
        </div>`;return}const{room:c,error:p}=await Ke(n,d),f=(c==null?void 0:c.language)||Z,$=P(f);if(!c||p){t.innerHTML=`<div class="waiting-screen">
            <p>${$.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}Ye(f);const o=De(n);await o.init();const a=Fe(n);let l=ot({team:s,roleType:g});const y=A(l);l&&await a.isRoleTaken(l)&&(t.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${at(y,$,f)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${$.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(i=>{var r;(r=document.getElementById("forceJoinBtn"))==null||r.addEventListener("click",i,{once:!0})})),l?a.join(l):a.listen(),await je({presence:a,store:o,role:()=>l});let k=!1,w=new Set,h=null,T=lt(n),b=!l,B=null,H=null,C=null,S=null,N=null,O=null,z=null,x=!0,E=0,G=null,D=null,W=!1;function ie(){E&&(cancelAnimationFrame(E),E=0)}function le(){G==null||G.disconnect(),G=null,D=null}function V(){return t.querySelector(".grid")}function oe(){return t.querySelector(".screen-layout")}function be(){W||(W=!0,Qe())}function ae(){W&&(W=!1,Xe())}function se(){const e=oe();e&&(e.classList.add("screen-layout--fit-pending"),e.classList.remove("screen-layout--fit-ready"))}function Le(){const e=oe();e&&(e.classList.remove("screen-layout--fit-pending"),e.classList.add("screen-layout--fit-ready"),ae())}function Se(){const e=V();return e?`${e.clientWidth}x${e.clientHeight}`:null}function ce(){const e=V();!e||D===e||typeof ResizeObserver>"u"||(le(),D=e,G=new ResizeObserver(()=>{x=!0,K(o.getState(),O)}),G.observe(e))}qe(t,()=>{var e;return(e=o.getState())==null?void 0:e.turnTransition},async()=>{var i;const e=(i=o.getState())==null?void 0:i.turnTransition;e!=null&&e.id&&(h=e.id,R()),await o.forceCompleteTurnTransition()});function J(){k=!1,w=new Set,h=null,B=null,H=null,C=null,S=null,N=null,O=null,z=null,x=!0,ie(),le()}async function ue(e){l=e??null,l?await a.setRole(l):await a.setRole(null)}function Re(e){const i=(e==null?void 0:e.gameId)??null;if(!i){T=null,te(n,null),b=!l;return}if(!l){b=!0;return}if(!T){T=i,te(n,i);return}i!==T&&!b&&(b=!0,J(),ue(null).then(()=>R()))}function U(){return nt({language:o.getLanguage(),presenceState:a.getPresenceState(),currentPresenceRole:l})}function He(e=[]){return Array.from(Y(e)).sort((i,r)=>i-r).join(",")}function Ce(e,i){return JSON.stringify(ee(e)[i])}function de(e,i){const r=[pe(e.cells),He(e.cells)].join("|");return(i==null?void 0:i.roleType)==="guide"?`${r}|${Ce(e.teamEffects,i.team)}`:r}function Be(e,i,r,u){const m=r==null?void 0:r.roleType;return m!=="guide"&&m!=="walker"||u||e.turnTransition||e.gameOver||C!==m||S!==r.team||H!==i||!B||!t.querySelector(`.${m}-layout`)?!1:de(B,r)===de(e,r)}function xe(e,i,r){const u=t.querySelectorAll(".walker .grid .cell");return u.length!==e.cells.length?!1:(e.cells.forEach((m,v)=>{const L=u[v];L&&(L.className=`${L.className.replace(/\s?cell--clickable/g,"")}${r&&!m.revealed?" cell--clickable":""}`,L.dataset.index=String(v))}),!0)}function Pe(e,i,r){return(r==null?void 0:r.roleType)==="guide"?he({state:e,lang:i,team:r.team,maxHintButtons:_e,teamEffects:ee(e.teamEffects)[r.team]}):Te({state:e,lang:i,team:r.team})}function Ee(e,i,r){return(i==null?void 0:i.roleType)==="walker"?xe(e,i,r.canPlay):!0}function Ge(e,i,r){const u=Pe(e,i,r),m=t.querySelector(".player-screen__title"),v=t.querySelector(".player-screen__meta-wrap"),L=t.querySelector(".player-screen__footer-content");return!m||!v||!L||(m.textContent=u.teamTitle,m.classList.toggle("player-screen__title--muted",u.titleMuted),m.classList.toggle("player-screen__title--active",!u.titleMuted),v.innerHTML=u.metaHtml,L.innerHTML=u.footerHtml,!Ee(e,r,u))?!1:(B=e,H=i,C=r.roleType,S=r.team,!0)}function K(e,i){if(!e||!i)return;const r=pe(e.cells),u=Se(),m=x||!k||N!==r||O!==i||z!==u;N=r,O=i,z=u,m&&(x=!1,ie(),E=requestAnimationFrame(()=>{E=requestAnimationFrame(()=>{E=0;const v=V();if(!v||!v.clientWidth||!v.clientHeight){x=!0;return}Ve(v,".cell"),Le()})}))}function Oe(e,i,r,u){const m=ee(e.teamEffects)[r.team],v=Y(e.cells);t.innerHTML=rt({state:e,lang:i,team:r.team,maxHintButtons:_e,teamEffects:m,suppressedTransitionId:h,controllerRolePickerHtml:u}),se(),ge({root:t,selector:".guide .grid .cell",currentRevealed:v,prevRevealed:w,hasRenderedBoard:k}),w=v,k=!0,ce(),K(e,"guide")}function Ie(e,i,r,u){const m=Y(e.cells);t.innerHTML=it({state:e,lang:i,team:r.team,suppressedTransitionId:h,controllerRolePickerHtml:u}),se(),ge({root:t,selector:".walker .grid .cell",currentRevealed:m,prevRevealed:w,hasRenderedBoard:k}),w=m,k=!0,ce(),K(e,"walker")}function Ae(e,i){document.body.classList.remove("team-resonant","team-dissonant"),J(),ae(),t.innerHTML=ne(i,U())}function Me(e,i){Re(e),(!e.turnTransition||e.turnTransition.id!==h)&&(h=null);const r=A(l),u=b||!r;if(!r){Ae(e,i);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${r.team}`);const m=u?U():"";if(!(Be(e,i,r,u)&&Ge(e,i,r))){if(r.roleType==="guide"){Oe(e,i,r,m);return}Ie(e,i,r,m)}}function R({state:e,language:i}={}){var m,v;const r=e??o.getState(),u=i??o.getLanguage();if(!r){J(),t.innerHTML=ne(u,l?"":U());return}Me(r,u),B=r,H=u,C=((m=A(l))==null?void 0:m.roleType)??null,S=((v=A(l))==null?void 0:v.team)??null}o.subscribe(R),a.onChange(()=>{(b||!l)&&R()}),ze(()=>{x=!0,R()}),(fe=(me=document.fonts)==null?void 0:me.ready)==null||fe.then(()=>{x=!0,R()}).catch(()=>{}),t.addEventListener("click",async e=>{var L;if(e.target.closest("[data-transition-dismiss]")){const _=(L=o.getState())==null?void 0:L.turnTransition;_!=null&&_.id&&(h=_.id,R()),await o.forceCompleteTurnTransition();return}const r=e.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(r){const _=r.dataset.roleType,F=r.dataset.team,I=$e(_,F),Q=a.getPresenceState(),j=o.getState();if(Q[I]&&l!==I)return;b=!1,be(),T=(j==null?void 0:j.gameId)??null,te(n,T),await ue(I),R();return}const u=e.target.closest(".guide__num-btn:not([disabled])");if(u){await o.setGuideLimit(parseInt(u.dataset.limit,10));return}const m=e.target.closest(".cell--clickable");if(m){await o.reveal(parseInt(m.dataset.index,10));return}if(e.target.closest("#refreshBtn")){const _=o.getState(),F=A(l),I=F&&(_==null?void 0:_.turn.team)===F.team,Q=(_==null?void 0:_.turn.guideLimit)!==null;!!(I&&Q&&!(_!=null&&_.gameOver)&&!(_!=null&&_.turnTransition))&&await o.endTurn()}}),R()}export{dt as initController};
