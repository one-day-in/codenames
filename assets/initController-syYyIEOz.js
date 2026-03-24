import{C as Y,m as Ee,e as ge,r as _e,a as pe,g as Pe,c as Me,p as I,d as Ge,i as Oe,o as Ie,f as Ae,n as ve,q as A,j as Z,k as me,l as Ne}from"./turnTransitionDismiss-BcKDMhW-.js";import{t as E,e as z,I as N,f as We,h as qe,k as je,D as ee,n as te}from"./roomRepository-BzPr1MxX.js";import"./entry-BpMQl4fM.js";function Fe(t){const n=E(t);let m=[];function c(){const a=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&a<=768&&l<=1024}async function g(){var a;if(c())try{(a=screen.orientation)!=null&&a.lock&&await screen.orientation.lock("portrait")}catch{}}function u(){let a=document.getElementById("orientation-guard");return a||(a=document.createElement("div"),a.id="orientation-guard",a.className="orientation-guard",a.setAttribute("aria-live","polite"),a.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(a)),a}function v(){const a=u(),l=window.matchMedia("(orientation: landscape)").matches,y=c()&&l;a.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const f=()=>{document.visibilityState==="visible"&&(g(),v())},h=()=>v(),o=()=>v();return g(),v(),document.addEventListener("visibilitychange",f),window.addEventListener("resize",h),window.addEventListener("orientationchange",o),m=[()=>document.removeEventListener("visibilitychange",f),()=>window.removeEventListener("resize",h),()=>window.removeEventListener("orientationchange",o)],()=>{m.forEach(a=>a())}}function ze(t,n){return t==="guide"?n.guide:n.dreamwalker}function De(t,n){return t==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function Ve(t){return t==="guide"?N.book:N.eye}function Je({language:t,presenceState:n,currentPresenceRole:m}){const c=E(t),g=Y.filter(l=>n==null?void 0:n[l.presenceRole]).length,u=m===null&&g>0,v=u?c.newGame:c.controllerConnectEyebrow,f=u?c.controllerReconnectTitle:c.controllerConnectTitle,h=u?c.controllerReconnectText:c.controllerConnectText,o=["dissonant","resonant"];function a(l){const y=m===l.presenceRole,k=!!(n!=null&&n[l.presenceRole])&&!y,T=ze(l.roleType,c),b=De(l.roleType,c),L=k?c.roleBusy:y?c.currentRole:c.chooseRoleAction,H=k?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${k?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Ve(l.roleType)}</span>
                <span class="controller-role-picker__role">${T}</span>
                <span class="controller-role-picker__hint">${b}</span>
                <span class="controller-role-picker__state ${H}">${L}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${u?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${v}</div>
                <h2 class="controller-role-picker__title">${f}</h2>
                <p class="controller-role-picker__text">${h}</p>
                <p class="controller-role-picker__summary">${g} / ${Y.length} ${c.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${o.map(l=>{const y=z(l,t),k=Y.filter(T=>T.team===l);return`
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
    `}function ye({mode:t,title:n,titleMuted:m=!1,metaHtml:c="",boardClassName:g="",boardHtml:u="",footerHtml:v="",overlayHtml:f=""}){return`
        <div class="screen-layout player-screen-layout ${t}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${m?"player-screen__title--muted":"player-screen__title--active"}">${n}</div>
                    <div class="player-screen__meta-wrap">${c}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="player-screen__board ${g}">
                    ${u}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${t}__footer">
                <div class="player-screen__footer-content">${v}</div>
            </footer>
            ${f}
        </div>
    `}function ke({state:t,lang:n,team:m,maxHintButtons:c,teamEffects:g}){const u=E(n),v=t.turn,f=v.team===m,h=v.guideLimit!==null,o=f&&!h&&!t.gameOver&&!t.turnTransition,a=g.allowTwoWordClue,l=g.forcedGuideLimit,y=g.hideEnemyColors,k=g.hideNightmare,T=z(m,n),b=o?`${u.guide}: ${u.chooseLimit}`:`${u.guide}: ${N.eyeClosed}`,L=[o&&l===1?u.guideForcedOneMove:null,o&&a?u.guideTwoWordClue:null,y?u.guideBlurActive:null,k?u.guideNightmareHidden:null].filter(Boolean),H=L.length?`<div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${L.join(" • ")}</div>`:"",w=Array.from({length:c},(R,C)=>{const S=C+1;return`
            <button
                class="guide__num-btn ${v.guideLimit===S?"guide__num-btn--chosen":""}"
                data-limit="${S}"
                ${!o||l!==null&&S!==l?"disabled":""}
            >${S}</button>
        `}).join("");return{teamTitle:T,titleMuted:!o,metaHtml:`
            <div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${b}</div>
            ${H}
        `,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map((R,C)=>`
                    <div class="${Ee(R,{team:m,effects:g})}" data-index="${C}">
                        <span class="cell__content">${ge(R.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${o?"guide__btns--active":"guide__btns--muted"}">${w}</div>`}}function Ue({state:t,lang:n,team:m,maxHintButtons:c,teamEffects:g,suppressedTransitionId:u,controllerRolePickerHtml:v=""}){const f=ke({state:t,lang:n,team:m,maxHintButtons:c,teamEffects:g});return ye({mode:"guide",title:f.teamTitle,titleMuted:f.titleMuted,metaHtml:f.metaHtml,boardClassName:`guide guide--${m}`,boardHtml:f.boardHtml,footerHtml:f.footerHtml,overlayHtml:`
            ${_e(t,n,{suppressedTransitionId:u})}
            ${pe({state:t,lang:n,team:m})}
            ${v}
        `})}function we({state:t,lang:n,team:m}){const c=E(n),g=t.turn,u=g.team===m,v=g.guideLimit!==null,f=u&&v&&!t.gameOver&&!t.turnTransition,h=v?Math.max((g.guideLimit??0)-(g.dreamwalkerMoves??0),0):0,o=z(m,n),a=f?`${c.dreamwalker}: <span class="walker__moves-value">${We(h,n)}</span>`:`${c.dreamwalker}: ${N.eyeClosed}`;return{teamTitle:o,titleMuted:!f,metaHtml:`<div class="${f?"player__meta player__meta--active":"player__meta player__meta--muted"}">${a}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map((y,k)=>`
                    <div
                        class="${Pe(y)} ${f&&!y.revealed?"cell--clickable":""}"
                        data-index="${k}"
                    >
                        <span class="cell__content">${ge(y.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${f?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${c.endTurn}" ${f?"":"disabled"}>
                    <span class="walker__action-label">${c.endTurn}</span>
                    <span class="walker__action-icon">${N.x}</span>
                </button>
            </div>
        `,canPlay:f}}function Ke({state:t,lang:n,team:m,suppressedTransitionId:c,controllerRolePickerHtml:g=""}){const u=we({state:t,lang:n,team:m});return ye({mode:"walker",title:u.teamTitle,titleMuted:u.titleMuted,metaHtml:u.metaHtml,boardClassName:`walker walker--${m}`,boardHtml:u.boardHtml,footerHtml:u.footerHtml,overlayHtml:`
            ${_e(t,n,{suppressedTransitionId:c})}
            ${pe({state:t,lang:n,team:m})}
            ${g}
        `})}const fe=8;function le(t){return`nw-controller-game:${t}`}function Qe(t){try{return sessionStorage.getItem(le(t))}catch{return null}}function ne(t,n){try{n?sessionStorage.setItem(le(t),n):sessionStorage.removeItem(le(t))}catch{}}function Xe({team:t,roleType:n}){return!t||t!=="resonant"&&t!=="dissonant"?null:n==="guide"||n==="walker"?ve(n,t):null}function Ye(t,n,m){if(!t)return n.controllerTaken.replace(`
`,"<br>");if(t.roleType==="walker")return`${z(t.team,m)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const c=t.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[c].replace(`
`,"<br>")}function re(t,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${E(t).waitingGame}</p>`}
        ${n}
    </div>`}async function nt(t){var ue,de;const{roomId:n,token:m,team:c,roleType:g}=qe();if(t.innerHTML=re(ee),!n||!m){t.innerHTML=`<div class="waiting-screen">
            <p>${E(ee).scanQr}</p>
        </div>`;return}const{room:u,error:v}=await je(n,m),f=(u==null?void 0:u.language)||ee,h=E(f);if(!u||v){t.innerHTML=`<div class="waiting-screen">
            <p>${h.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}Fe(f);const o=Ae(n);await o.init();const a=Me(n);let l=Xe({team:c,roleType:g});const y=I(l);l&&await a.isRoleTaken(l)&&(t.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${Ye(y,h,f)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${h.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(i=>{var r;(r=document.getElementById("forceJoinBtn"))==null||r.addEventListener("click",i,{once:!0})})),l?a.join(l):a.listen(),await Ge({presence:a,store:o,role:()=>l});let k=!1,T=new Set,b=null,L=Qe(n),H=!l,w=null,R=null,C=null,S=null,W=null,G=null,D=null,x=!0,P=0,M=null,V=null;function ie(){P&&(cancelAnimationFrame(P),P=0)}function oe(){M==null||M.disconnect(),M=null,V=null}function J(){return t.querySelector(".grid")}function $e(){const e=J();return e?`${e.clientWidth}x${e.clientHeight}`:null}function ae(){const e=J();!e||V===e||typeof ResizeObserver>"u"||(oe(),V=e,M=new ResizeObserver(()=>{x=!0,Q(o.getState(),G)}),M.observe(e))}Oe(t,()=>{var e;return(e=o.getState())==null?void 0:e.turnTransition},async()=>{var i;const e=(i=o.getState())==null?void 0:i.turnTransition;e!=null&&e.id&&(b=e.id,B()),await o.forceCompleteTurnTransition()});function U(){k=!1,T=new Set,b=null,w=null,R=null,C=null,S=null,W=null,G=null,D=null,x=!0,ie(),oe()}async function se(e){l=e??null,l?await a.setRole(l):await a.setRole(null)}function he(e){const i=(e==null?void 0:e.gameId)??null;if(!i){L=null,ne(n,null),H=!l;return}if(!l){H=!0;return}if(!L){L=i,ne(n,i);return}i!==L&&!H&&(H=!0,U(),se(null).then(()=>B()))}function K(){return Je({language:o.getLanguage(),presenceState:a.getPresenceState(),currentPresenceRole:l})}function q(e=[]){return Array.from(Z(e)).sort((i,r)=>i-r).join(",")}function ce(e,i){return JSON.stringify(te(e)[i])}function Te(e,i,r,s){return(r==null?void 0:r.roleType)!=="guide"||s||e.turnTransition||e.gameOver||C!=="guide"||S!==r.team||R!==i||!w||!t.querySelector(".guide-layout")?!1:A(w.cells)===A(e.cells)&&q(w.cells)===q(e.cells)&&ce(w.teamEffects,r.team)===ce(e.teamEffects,r.team)}function be(e,i,r,s){return(r==null?void 0:r.roleType)!=="walker"||s||e.turnTransition||e.gameOver||C!=="walker"||S!==r.team||R!==i||!w||!t.querySelector(".walker-layout")?!1:A(w.cells)===A(e.cells)&&q(w.cells)===q(e.cells)}function Le(e,i,r){const s=te(e.teamEffects)[r.team],d=ke({state:e,lang:i,team:r.team,maxHintButtons:fe,teamEffects:s}),_=t.querySelector(".player-screen__title"),$=t.querySelector(".player-screen__meta-wrap"),p=t.querySelector(".player-screen__footer-content");return!_||!$||!p?!1:(_.textContent=d.teamTitle,_.classList.toggle("player-screen__title--muted",d.titleMuted),_.classList.toggle("player-screen__title--active",!d.titleMuted),$.innerHTML=d.metaHtml,p.innerHTML=d.footerHtml,w=e,R=i,C="guide",S=r.team,!0)}function He(e,i,r){const s=t.querySelectorAll(".walker .grid .cell");return s.length!==e.cells.length?!1:(e.cells.forEach((d,_)=>{const $=s[_];$&&($.className=`${$.className.replace(/\s?cell--clickable/g,"")}${r&&!d.revealed?" cell--clickable":""}`,$.dataset.index=String(_))}),!0)}function Se(e,i,r){const s=we({state:e,lang:i,team:r.team}),d=t.querySelector(".player-screen__title"),_=t.querySelector(".player-screen__meta-wrap"),$=t.querySelector(".player-screen__footer-content");return!d||!_||!$||(d.textContent=s.teamTitle,d.classList.toggle("player-screen__title--muted",s.titleMuted),d.classList.toggle("player-screen__title--active",!s.titleMuted),_.innerHTML=s.metaHtml,$.innerHTML=s.footerHtml,!He(e,r,s.canPlay))?!1:(w=e,R=i,C="walker",S=r.team,!0)}function Q(e,i){if(!e||!i)return;const r=A(e.cells),s=$e(),d=x||!k||W!==r||G!==i||D!==s;W=r,G=i,D=s,d&&(x=!1,ie(),P=requestAnimationFrame(()=>{P=requestAnimationFrame(()=>{P=0;const _=J();if(!_||!_.clientWidth||!_.clientHeight){x=!0;return}Ne(_,".cell")})}))}function Re(e,i,r,s){const d=te(e.teamEffects)[r.team],_=Z(e.cells);t.innerHTML=Ue({state:e,lang:i,team:r.team,maxHintButtons:fe,teamEffects:d,suppressedTransitionId:b,controllerRolePickerHtml:s}),me({root:t,selector:".guide .grid .cell",currentRevealed:_,prevRevealed:T,hasRenderedBoard:k}),T=_,k=!0,ae(),Q(e,"guide")}function Ce(e,i,r,s){const d=Z(e.cells);t.innerHTML=Ke({state:e,lang:i,team:r.team,suppressedTransitionId:b,controllerRolePickerHtml:s}),me({root:t,selector:".walker .grid .cell",currentRevealed:d,prevRevealed:T,hasRenderedBoard:k}),T=d,k=!0,ae(),Q(e,"walker")}function Be(e,i){document.body.classList.remove("team-resonant","team-dissonant"),U(),t.innerHTML=re(i,K())}function xe(e,i){he(e),(!e.turnTransition||e.turnTransition.id!==b)&&(b=null);const r=I(l),s=H||!r;if(!r){Be(e,i);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${r.team}`);const d=s?K():"";if(!(Te(e,i,r,s)&&Le(e,i,r))&&!(be(e,i,r,s)&&Se(e,i,r))){if(r.roleType==="guide"){Re(e,i,r,d);return}Ce(e,i,r,d)}}function B({state:e,language:i}={}){var d,_;const r=e??o.getState(),s=i??o.getLanguage();if(!r){U(),t.innerHTML=re(s,l?"":K());return}xe(r,s),w=r,R=s,C=((d=I(l))==null?void 0:d.roleType)??null,S=((_=I(l))==null?void 0:_.team)??null}o.subscribe(B),a.onChange(()=>{(H||!l)&&B()}),Ie(()=>{x=!0,B()}),(de=(ue=document.fonts)==null?void 0:ue.ready)==null||de.then(()=>{x=!0,B()}).catch(()=>{}),t.addEventListener("click",async e=>{var $;if(e.target.closest("[data-transition-dismiss]")){const p=($=o.getState())==null?void 0:$.turnTransition;p!=null&&p.id&&(b=p.id,B()),await o.forceCompleteTurnTransition();return}const r=e.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(r){const p=r.dataset.roleType,j=r.dataset.team,O=ve(p,j),X=a.getPresenceState(),F=o.getState();if(X[O]&&l!==O)return;H=!1,L=(F==null?void 0:F.gameId)??null,ne(n,L),await se(O),B();return}const s=e.target.closest(".guide__num-btn:not([disabled])");if(s){await o.setGuideLimit(parseInt(s.dataset.limit,10));return}const d=e.target.closest(".cell--clickable");if(d){await o.reveal(parseInt(d.dataset.index,10));return}if(e.target.closest("#refreshBtn")){const p=o.getState(),j=I(l),O=j&&(p==null?void 0:p.turn.team)===j.team,X=(p==null?void 0:p.turn.guideLimit)!==null;!!(O&&X&&!(p!=null&&p.gameOver)&&!(p!=null&&p.turnTransition))&&await o.endTurn()}}),B()}export{nt as initController};
