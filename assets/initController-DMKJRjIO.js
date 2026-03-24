import{C as Q,r as fe,a as ge,m as Ee,e as pe,g as Ge,c as Oe,p as A,d as Ie,i as Ae,o as Me,f as Ne,n as _e,j as X,k as ue,q as de,l as We}from"./turnTransitionDismiss-BAqi2ypV.js";import{t as P,e as F,I as M,f as je,h as Fe,k as qe,D as Y,n as Z}from"./roomRepository-BzPr1MxX.js";import"./entry-DoCwrXiB.js";function ze(t){const n=P(t);let d=[];function s(){const a=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&a<=768&&l<=1024}async function g(){var a;if(s())try{(a=screen.orientation)!=null&&a.lock&&await screen.orientation.lock("portrait")}catch{}}function c(){let a=document.getElementById("orientation-guard");return a||(a=document.createElement("div"),a.id="orientation-guard",a.className="orientation-guard",a.setAttribute("aria-live","polite"),a.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(a)),a}function p(){const a=c(),l=window.matchMedia("(orientation: landscape)").matches,v=s()&&l;a.classList.toggle("is-visible",v),document.body.classList.toggle("is-orientation-blocked",v)}const f=()=>{document.visibilityState==="visible"&&(g(),p())},$=()=>p(),o=()=>p();return g(),p(),document.addEventListener("visibilitychange",f),window.addEventListener("resize",$),window.addEventListener("orientationchange",o),d=[()=>document.removeEventListener("visibilitychange",f),()=>window.removeEventListener("resize",$),()=>window.removeEventListener("orientationchange",o)],()=>{d.forEach(a=>a())}}function De(t,n){return t==="guide"?n.guide:n.dreamwalker}function Ve(t,n){return t==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function Je(t){return t==="guide"?M.book:M.eye}function Ue({language:t,presenceState:n,currentPresenceRole:d}){const s=P(t),g=Q.filter(l=>n==null?void 0:n[l.presenceRole]).length,c=d===null&&g>0,p=c?s.newGame:s.controllerConnectEyebrow,f=c?s.controllerReconnectTitle:s.controllerConnectTitle,$=c?s.controllerReconnectText:s.controllerConnectText,o=["dissonant","resonant"];function a(l){const v=d===l.presenceRole,k=!!(n!=null&&n[l.presenceRole])&&!v,w=De(l.roleType,s),h=Ve(l.roleType,s),T=k?s.roleBusy:v?s.currentRole:s.chooseRoleAction,b=k?"controller-role-picker__state--busy":v?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${v?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${k?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Je(l.roleType)}</span>
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
                <p class="controller-role-picker__summary">${g} / ${Q.length} ${s.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${o.map(l=>{const v=F(l,t),k=Q.filter(w=>w.team===l);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${l}">
                                <h3 class="controller-role-picker__team-title">${v}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${k.map(a).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function ve({mode:t,title:n,titleMuted:d=!1,metaHtml:s="",boardClassName:g="",boardHtml:c="",footerHtml:p="",overlayHtml:f=""}){return`
        <div class="screen-layout player-screen-layout ${t}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${d?"player-screen__title--muted":"player-screen__title--active"}">${n}</div>
                    <div class="player-screen__meta-wrap">${s}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="player-screen__board ${g}">
                    ${c}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${t}__footer">
                <div class="player-screen__footer-content">${p}</div>
            </footer>
            ${f}
        </div>
    `}function ye({state:t,lang:n,team:d,maxHintButtons:s,teamEffects:g}){const c=P(n),p=t.turn,f=p.team===d,$=p.guideLimit!==null,o=f&&!$&&!t.gameOver&&!t.turnTransition,a=g.allowTwoWordClue,l=g.forcedGuideLimit,v=g.hideEnemyColors,k=g.hideNightmare,w=F(d,n),h=o?`${c.guide}: ${c.chooseLimit}`:`${c.guide}: ${M.eyeClosed}`,T=[o&&l===1?c.guideForcedOneMove:null,o&&a?c.guideTwoWordClue:null,v?c.guideBlurActive:null,k?c.guideNightmareHidden:null].filter(Boolean),b=T.length?`<div class="player__meta ${o?"player__meta--active":"player__meta--muted"}">${T.join(" • ")}</div>`:"",B=Array.from({length:s},(R,C)=>{const S=C+1;return`
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
                ${t.cells.map((R,C)=>`
                    <div class="${Ee(R,{team:d,effects:g})}" data-index="${C}">
                        <span class="cell__content">${pe(R.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${o?"guide__btns--active":"guide__btns--muted"}">${B}</div>`}}function Ke({state:t,lang:n,team:d,maxHintButtons:s,teamEffects:g,suppressedTransitionId:c,controllerRolePickerHtml:p=""}){const f=ye({state:t,lang:n,team:d,maxHintButtons:s,teamEffects:g});return ve({mode:"guide",title:f.teamTitle,titleMuted:f.titleMuted,metaHtml:f.metaHtml,boardClassName:`guide guide--${d}`,boardHtml:f.boardHtml,footerHtml:f.footerHtml,overlayHtml:`
            ${fe(t,n,{suppressedTransitionId:c})}
            ${ge({state:t,lang:n,team:d})}
            ${p}
        `})}function ke({state:t,lang:n,team:d}){const s=P(n),g=t.turn,c=g.team===d,p=g.guideLimit!==null,f=c&&p&&!t.gameOver&&!t.turnTransition,$=p?Math.max((g.guideLimit??0)-(g.dreamwalkerMoves??0),0):0,o=F(d,n),a=f?`${s.dreamwalker}: <span class="walker__moves-value">${je($,n)}</span>`:`${s.dreamwalker}: ${M.eyeClosed}`;return{teamTitle:o,titleMuted:!f,metaHtml:`<div class="${f?"player__meta player__meta--active":"player__meta player__meta--muted"}">${a}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map((v,k)=>`
                    <div
                        class="${Ge(v)} ${f&&!v.revealed?"cell--clickable":""}"
                        data-index="${k}"
                    >
                        <span class="cell__content">${pe(v.word)}</span>
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
        `,canPlay:f}}function Qe({state:t,lang:n,team:d,suppressedTransitionId:s,controllerRolePickerHtml:g=""}){const c=ke({state:t,lang:n,team:d});return ve({mode:"walker",title:c.teamTitle,titleMuted:c.titleMuted,metaHtml:c.metaHtml,boardClassName:`walker walker--${d}`,boardHtml:c.boardHtml,footerHtml:c.footerHtml,overlayHtml:`
            ${fe(t,n,{suppressedTransitionId:s})}
            ${ge({state:t,lang:n,team:d})}
            ${g}
        `})}const me=8;function ne(t){return`nw-controller-game:${t}`}function Xe(t){try{return sessionStorage.getItem(ne(t))}catch{return null}}function ee(t,n){try{n?sessionStorage.setItem(ne(t),n):sessionStorage.removeItem(ne(t))}catch{}}function Ye({team:t,roleType:n}){return!t||t!=="resonant"&&t!=="dissonant"?null:n==="guide"||n==="walker"?_e(n,t):null}function Ze(t,n,d){if(!t)return n.controllerTaken.replace(`
`,"<br>");if(t.roleType==="walker")return`${F(t.team,d)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const s=t.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[s].replace(`
`,"<br>")}function te(t,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${P(t).waitingGame}</p>`}
        ${n}
    </div>`}async function rt(t){var se,ce;const{roomId:n,token:d,team:s,roleType:g}=Fe();if(t.innerHTML=te(Y),!n||!d){t.innerHTML=`<div class="waiting-screen">
            <p>${P(Y).scanQr}</p>
        </div>`;return}const{room:c,error:p}=await qe(n,d),f=(c==null?void 0:c.language)||Y,$=P(f);if(!c||p){t.innerHTML=`<div class="waiting-screen">
            <p>${$.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}ze(f);const o=Ne(n);await o.init();const a=Oe(n);let l=Ye({team:s,roleType:g});const v=A(l);l&&await a.isRoleTaken(l)&&(t.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${Ze(v,$,f)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${$.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(i=>{var r;(r=document.getElementById("forceJoinBtn"))==null||r.addEventListener("click",i,{once:!0})})),l?a.join(l):a.listen(),await Ie({presence:a,store:o,role:()=>l});let k=!1,w=new Set,h=null,T=Xe(n),b=!l,B=null,R=null,C=null,S=null,N=null,O=null,q=null,x=!0,E=0,G=null,z=null;function re(){E&&(cancelAnimationFrame(E),E=0)}function ie(){G==null||G.disconnect(),G=null,z=null}function D(){return t.querySelector(".grid")}function $e(){const e=D();return e?`${e.clientWidth}x${e.clientHeight}`:null}function le(){const e=D();!e||z===e||typeof ResizeObserver>"u"||(ie(),z=e,G=new ResizeObserver(()=>{x=!0,U(o.getState(),O)}),G.observe(e))}Ae(t,()=>{var e;return(e=o.getState())==null?void 0:e.turnTransition},async()=>{var i;const e=(i=o.getState())==null?void 0:i.turnTransition;e!=null&&e.id&&(h=e.id,H()),await o.forceCompleteTurnTransition()});function V(){k=!1,w=new Set,h=null,B=null,R=null,C=null,S=null,N=null,O=null,q=null,x=!0,re(),ie()}async function oe(e){l=e??null,l?await a.setRole(l):await a.setRole(null)}function we(e){const i=(e==null?void 0:e.gameId)??null;if(!i){T=null,ee(n,null),b=!l;return}if(!l){b=!0;return}if(!T){T=i,ee(n,i);return}i!==T&&!b&&(b=!0,V(),oe(null).then(()=>H()))}function J(){return Ue({language:o.getLanguage(),presenceState:a.getPresenceState(),currentPresenceRole:l})}function he(e=[]){return Array.from(X(e)).sort((i,r)=>i-r).join(",")}function Te(e,i){return JSON.stringify(Z(e)[i])}function ae(e,i){const r=[de(e.cells),he(e.cells)].join("|");return(i==null?void 0:i.roleType)==="guide"?`${r}|${Te(e.teamEffects,i.team)}`:r}function be(e,i,r,u){const m=r==null?void 0:r.roleType;return m!=="guide"&&m!=="walker"||u||e.turnTransition||e.gameOver||C!==m||S!==r.team||R!==i||!B||!t.querySelector(`.${m}-layout`)?!1:ae(B,r)===ae(e,r)}function Le(e,i,r){const u=t.querySelectorAll(".walker .grid .cell");return u.length!==e.cells.length?!1:(e.cells.forEach((m,y)=>{const L=u[y];L&&(L.className=`${L.className.replace(/\s?cell--clickable/g,"")}${r&&!m.revealed?" cell--clickable":""}`,L.dataset.index=String(y))}),!0)}function Se(e,i,r){return(r==null?void 0:r.roleType)==="guide"?ye({state:e,lang:i,team:r.team,maxHintButtons:me,teamEffects:Z(e.teamEffects)[r.team]}):ke({state:e,lang:i,team:r.team})}function He(e,i,r){return(i==null?void 0:i.roleType)==="walker"?Le(e,i,r.canPlay):!0}function Re(e,i,r){const u=Se(e,i,r),m=t.querySelector(".player-screen__title"),y=t.querySelector(".player-screen__meta-wrap"),L=t.querySelector(".player-screen__footer-content");return!m||!y||!L||(m.textContent=u.teamTitle,m.classList.toggle("player-screen__title--muted",u.titleMuted),m.classList.toggle("player-screen__title--active",!u.titleMuted),y.innerHTML=u.metaHtml,L.innerHTML=u.footerHtml,!He(e,r,u))?!1:(B=e,R=i,C=r.roleType,S=r.team,!0)}function U(e,i){if(!e||!i)return;const r=de(e.cells),u=$e(),m=x||!k||N!==r||O!==i||q!==u;N=r,O=i,q=u,m&&(x=!1,re(),E=requestAnimationFrame(()=>{E=requestAnimationFrame(()=>{E=0;const y=D();if(!y||!y.clientWidth||!y.clientHeight){x=!0;return}We(y,".cell")})}))}function Ce(e,i,r,u){const m=Z(e.teamEffects)[r.team],y=X(e.cells);t.innerHTML=Ke({state:e,lang:i,team:r.team,maxHintButtons:me,teamEffects:m,suppressedTransitionId:h,controllerRolePickerHtml:u}),ue({root:t,selector:".guide .grid .cell",currentRevealed:y,prevRevealed:w,hasRenderedBoard:k}),w=y,k=!0,le(),U(e,"guide")}function Be(e,i,r,u){const m=X(e.cells);t.innerHTML=Qe({state:e,lang:i,team:r.team,suppressedTransitionId:h,controllerRolePickerHtml:u}),ue({root:t,selector:".walker .grid .cell",currentRevealed:m,prevRevealed:w,hasRenderedBoard:k}),w=m,k=!0,le(),U(e,"walker")}function xe(e,i){document.body.classList.remove("team-resonant","team-dissonant"),V(),t.innerHTML=te(i,J())}function Pe(e,i){we(e),(!e.turnTransition||e.turnTransition.id!==h)&&(h=null);const r=A(l),u=b||!r;if(!r){xe(e,i);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${r.team}`);const m=u?J():"";if(!(be(e,i,r,u)&&Re(e,i,r))){if(r.roleType==="guide"){Ce(e,i,r,m);return}Be(e,i,r,m)}}function H({state:e,language:i}={}){var m,y;const r=e??o.getState(),u=i??o.getLanguage();if(!r){V(),t.innerHTML=te(u,l?"":J());return}Pe(r,u),B=r,R=u,C=((m=A(l))==null?void 0:m.roleType)??null,S=((y=A(l))==null?void 0:y.team)??null}o.subscribe(H),a.onChange(()=>{(b||!l)&&H()}),Me(()=>{x=!0,H()}),(ce=(se=document.fonts)==null?void 0:se.ready)==null||ce.then(()=>{x=!0,H()}).catch(()=>{}),t.addEventListener("click",async e=>{var L;if(e.target.closest("[data-transition-dismiss]")){const _=(L=o.getState())==null?void 0:L.turnTransition;_!=null&&_.id&&(h=_.id,H()),await o.forceCompleteTurnTransition();return}const r=e.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(r){const _=r.dataset.roleType,W=r.dataset.team,I=_e(_,W),K=a.getPresenceState(),j=o.getState();if(K[I]&&l!==I)return;b=!1,T=(j==null?void 0:j.gameId)??null,ee(n,T),await oe(I),H();return}const u=e.target.closest(".guide__num-btn:not([disabled])");if(u){await o.setGuideLimit(parseInt(u.dataset.limit,10));return}const m=e.target.closest(".cell--clickable");if(m){await o.reveal(parseInt(m.dataset.index,10));return}if(e.target.closest("#refreshBtn")){const _=o.getState(),W=A(l),I=W&&(_==null?void 0:_.turn.team)===W.team,K=(_==null?void 0:_.turn.guideLimit)!==null;!!(I&&K&&!(_!=null&&_.gameOver)&&!(_!=null&&_.turnTransition))&&await o.endTurn()}}),H()}export{rt as initController};
