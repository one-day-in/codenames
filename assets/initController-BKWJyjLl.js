import{C as Q,m as He,e as ge,r as _e,a as pe,g as Ce,c as Be,p as I,d as xe,i as Pe,o as Ge,f as Ee,n as ve,q as X,j as Y,k as me,l as Me}from"./turnTransitionDismiss-C_9nbsEB.js";import{t as x,e as F,I as A,f as Oe,h as Ie,k as Ae,D as Z,n as ee}from"./roomRepository-BzPr1MxX.js";import"./entry-Df57teEp.js";function Ne(t){const n=x(t);let d=[];function c(){const a=Math.min(window.innerWidth,window.innerHeight),r=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&a<=768&&r<=1024}async function p(){var a;if(c())try{(a=screen.orientation)!=null&&a.lock&&await screen.orientation.lock("portrait")}catch{}}function s(){let a=document.getElementById("orientation-guard");return a||(a=document.createElement("div"),a.id="orientation-guard",a.className="orientation-guard",a.setAttribute("aria-live","polite"),a.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(a)),a}function m(){const a=s(),r=window.matchMedia("(orientation: landscape)").matches,v=c()&&r;a.classList.toggle("is-visible",v),document.body.classList.toggle("is-orientation-blocked",v)}const g=()=>{document.visibilityState==="visible"&&(p(),m())},w=()=>m(),l=()=>m();return p(),m(),document.addEventListener("visibilitychange",g),window.addEventListener("resize",w),window.addEventListener("orientationchange",l),d=[()=>document.removeEventListener("visibilitychange",g),()=>window.removeEventListener("resize",w),()=>window.removeEventListener("orientationchange",l)],()=>{d.forEach(a=>a())}}function We(t,n){return t==="guide"?n.guide:n.dreamwalker}function je(t,n){return t==="guide"?n.controllerGuideHint:n.controllerWalkerHint}function Fe(t){return t==="guide"?A.book:A.eye}function qe({language:t,presenceState:n,currentPresenceRole:d}){const c=x(t),p=Q.filter(r=>n==null?void 0:n[r.presenceRole]).length,s=d===null&&p>0,m=s?c.newGame:c.controllerConnectEyebrow,g=s?c.controllerReconnectTitle:c.controllerConnectTitle,w=s?c.controllerReconnectText:c.controllerConnectText,l=["dissonant","resonant"];function a(r){const v=d===r.presenceRole,k=!!(n!=null&&n[r.presenceRole])&&!v,$=We(r.roleType,c),h=je(r.roleType,c),T=k?c.roleBusy:v?c.currentRole:c.chooseRoleAction,b=k?"controller-role-picker__state--busy":v?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${r.team} controller-role-picker__btn--${r.roleType} ${v?"is-current":""}"
                type="button"
                data-role-type="${r.roleType}"
                data-team="${r.team}"
                ${k?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Fe(r.roleType)}</span>
                <span class="controller-role-picker__role">${$}</span>
                <span class="controller-role-picker__hint">${h}</span>
                <span class="controller-role-picker__state ${b}">${T}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${s?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${m}</div>
                <h2 class="controller-role-picker__title">${g}</h2>
                <p class="controller-role-picker__text">${w}</p>
                <p class="controller-role-picker__summary">${p} / ${Q.length} ${c.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${l.map(r=>{const v=F(r,t),k=Q.filter($=>$.team===r);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${r}">
                                <h3 class="controller-role-picker__team-title">${v}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${k.map(a).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function ye({mode:t,title:n,titleMuted:d=!1,metaHtml:c="",boardClassName:p="",boardHtml:s="",footerHtml:m="",overlayHtml:g=""}){return`
        <div class="screen-layout player-screen-layout ${t}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${d?"player-screen__title--muted":"player-screen__title--active"}">${n}</div>
                    <div class="player-screen__meta-wrap">${c}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="player-screen__board ${p}">
                    ${s}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${t}__footer">
                <div class="player-screen__footer-content">${m}</div>
            </footer>
            ${g}
        </div>
    `}function ke({state:t,lang:n,team:d,maxHintButtons:c,teamEffects:p}){const s=x(n),m=t.turn,g=m.team===d,w=m.guideLimit!==null,l=g&&!w&&!t.gameOver&&!t.turnTransition,a=p.allowTwoWordClue,r=p.forcedGuideLimit,v=p.hideEnemyColors,k=p.hideNightmare,$=F(d,n),h=l?`${s.guide}: ${s.chooseLimit}`:`${s.guide}: ${A.eyeClosed}`,T=[l&&r===1?s.guideForcedOneMove:null,l&&a?s.guideTwoWordClue:null,v?s.guideBlurActive:null,k?s.guideNightmareHidden:null].filter(Boolean),b=T.length?`<div class="player__meta ${l?"player__meta--active":"player__meta--muted"}">${T.join(" • ")}</div>`:"",L=Array.from({length:c},(H,C)=>{const R=C+1;return`
            <button
                class="guide__num-btn ${m.guideLimit===R?"guide__num-btn--chosen":""}"
                data-limit="${R}"
                ${!l||r!==null&&R!==r?"disabled":""}
            >${R}</button>
        `}).join("");return{teamTitle:$,titleMuted:!l,metaHtml:`
            <div class="player__meta ${l?"player__meta--active":"player__meta--muted"}">${h}</div>
            ${b}
        `,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map((H,C)=>`
                    <div class="${He(H,{team:d,effects:p})}" data-index="${C}">
                        <span class="cell__content">${ge(H.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${l?"guide__btns--active":"guide__btns--muted"}">${L}</div>`}}function ze({state:t,lang:n,team:d,maxHintButtons:c,teamEffects:p,suppressedTransitionId:s,controllerRolePickerHtml:m=""}){const g=ke({state:t,lang:n,team:d,maxHintButtons:c,teamEffects:p});return ye({mode:"guide",title:g.teamTitle,titleMuted:g.titleMuted,metaHtml:g.metaHtml,boardClassName:`guide guide--${d}`,boardHtml:g.boardHtml,footerHtml:g.footerHtml,overlayHtml:`
            ${_e(t,n,{suppressedTransitionId:s})}
            ${pe({state:t,lang:n,team:d})}
            ${m}
        `})}function De({state:t,lang:n,team:d,suppressedTransitionId:c,controllerRolePickerHtml:p=""}){const s=x(n),m=t.turn,g=m.team===d,w=m.guideLimit!==null,l=g&&w&&!t.gameOver&&!t.turnTransition,a=w?Math.max((m.guideLimit??0)-(m.dreamwalkerMoves??0),0):0,r=F(d,n),v=l?`${s.dreamwalker}: <span class="walker__moves-value">${Oe(a,n)}</span>`:`${s.dreamwalker}: ${A.eyeClosed}`;return ye({mode:"walker",title:r,titleMuted:!l,metaHtml:`<div class="${l?"player__meta player__meta--active":"player__meta player__meta--muted"}">${v}</div>`,boardClassName:`walker walker--${d}`,boardHtml:`
            <div class="grid grid--5">
                ${t.cells.map(($,h)=>`
                    <div
                        class="${Ce($)} ${l&&!$.revealed?"cell--clickable":""}"
                        data-index="${h}"
                    >
                        <span class="cell__content">${ge($.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${l?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${s.endTurn}" ${l?"":"disabled"}>
                    <span class="walker__action-label">${s.endTurn}</span>
                    <span class="walker__action-icon">${A.x}</span>
                </button>
            </div>
        `,overlayHtml:`
            ${_e(t,n,{suppressedTransitionId:c})}
            ${pe({state:t,lang:n,team:d})}
            ${p}
        `})}const fe=8;function re(t){return`nw-controller-game:${t}`}function Je(t){try{return sessionStorage.getItem(re(t))}catch{return null}}function te(t,n){try{n?sessionStorage.setItem(re(t),n):sessionStorage.removeItem(re(t))}catch{}}function Ve({team:t,roleType:n}){return!t||t!=="resonant"&&t!=="dissonant"?null:n==="guide"||n==="walker"?ve(n,t):null}function Ue(t,n,d){if(!t)return n.controllerTaken.replace(`
`,"<br>");if(t.roleType==="walker")return`${F(t.team,d)} ${n.dreamwalker}<br>${n.controllerTaken.replace(`
`,"<br>")}`;const c=t.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return n[c].replace(`
`,"<br>")}function ne(t,n=""){return`<div class="waiting-screen">
        ${n?"":`<p>${x(t).waitingGame}</p>`}
        ${n}
    </div>`}async function Ye(t){var de,ue;const{roomId:n,token:d,team:c,roleType:p}=Ie();if(t.innerHTML=ne(Z),!n||!d){t.innerHTML=`<div class="waiting-screen">
            <p>${x(Z).scanQr}</p>
        </div>`;return}const{room:s,error:m}=await Ae(n,d),g=(s==null?void 0:s.language)||Z,w=x(g);if(!s||m){t.innerHTML=`<div class="waiting-screen">
            <p>${w.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}Ne(g);const l=Ee(n);await l.init();const a=Be(n);let r=Ve({team:c,roleType:p});const v=I(r);r&&await a.isRoleTaken(r)&&(t.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${Ue(v,w,g)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${w.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(o=>{var i;(i=document.getElementById("forceJoinBtn"))==null||i.addEventListener("click",o,{once:!0})})),r?a.join(r):a.listen(),await xe({presence:a,store:l,role:()=>r});let k=!1,$=new Set,h=null,T=Je(n),b=!r,L=null,H=null,C=null,R=null,N=null,E=null,q=null,B=!0,P=0,G=null,z=null;function ie(){P&&(cancelAnimationFrame(P),P=0)}function le(){G==null||G.disconnect(),G=null,z=null}function D(){return t.querySelector(".grid")}function $e(){const e=D();return e?`${e.clientWidth}x${e.clientHeight}`:null}function oe(){const e=D();!e||z===e||typeof ResizeObserver>"u"||(le(),z=e,G=new ResizeObserver(()=>{B=!0,U(l.getState(),E)}),G.observe(e))}Pe(t,()=>{var e;return(e=l.getState())==null?void 0:e.turnTransition},async()=>{var o;const e=(o=l.getState())==null?void 0:o.turnTransition;e!=null&&e.id&&(h=e.id,S()),await l.forceCompleteTurnTransition()});function J(){k=!1,$=new Set,h=null,L=null,H=null,C=null,R=null,N=null,E=null,q=null,B=!0,ie(),le()}async function ae(e){r=e??null,r?await a.setRole(r):await a.setRole(null)}function we(e){const o=(e==null?void 0:e.gameId)??null;if(!o){T=null,te(n,null),b=!r;return}if(!r){b=!0;return}if(!T){T=o,te(n,o);return}o!==T&&!b&&(b=!0,J(),ae(null).then(()=>S()))}function V(){return qe({language:l.getLanguage(),presenceState:a.getPresenceState(),currentPresenceRole:r})}function se(e=[]){return Array.from(Y(e)).sort((o,i)=>o-i).join(",")}function ce(e,o){return JSON.stringify(ee(e)[o])}function he(e,o,i,_){return(i==null?void 0:i.roleType)!=="guide"||_||e.turnTransition||e.gameOver||C!=="guide"||R!==i.team||H!==o||!L||!t.querySelector(".guide-layout")?!1:X(L.cells)===X(e.cells)&&se(L.cells)===se(e.cells)&&ce(L.teamEffects,i.team)===ce(e.teamEffects,i.team)}function Te(e,o,i){const _=ee(e.teamEffects)[i.team],f=ke({state:e,lang:o,team:i.team,maxHintButtons:fe,teamEffects:_}),y=t.querySelector(".player-screen__title"),M=t.querySelector(".player-screen__meta-wrap"),u=t.querySelector(".player-screen__footer-content");return!y||!M||!u?!1:(y.textContent=f.teamTitle,y.classList.toggle("player-screen__title--muted",f.titleMuted),y.classList.toggle("player-screen__title--active",!f.titleMuted),M.innerHTML=f.metaHtml,u.innerHTML=f.footerHtml,L=e,H=o,C="guide",R=i.team,!0)}function U(e,o){if(!e||!o)return;const i=X(e.cells),_=$e(),f=B||!k||N!==i||E!==o||q!==_;N=i,E=o,q=_,f&&(B=!1,ie(),P=requestAnimationFrame(()=>{P=requestAnimationFrame(()=>{P=0;const y=D();if(!y||!y.clientWidth||!y.clientHeight){B=!0;return}Me(y,".cell")})}))}function be(e,o,i,_){const f=ee(e.teamEffects)[i.team],y=Y(e.cells);t.innerHTML=ze({state:e,lang:o,team:i.team,maxHintButtons:fe,teamEffects:f,suppressedTransitionId:h,controllerRolePickerHtml:_}),me({root:t,selector:".guide .grid .cell",currentRevealed:y,prevRevealed:$,hasRenderedBoard:k}),$=y,k=!0,oe(),U(e,"guide")}function Le(e,o,i,_){const f=Y(e.cells);t.innerHTML=De({state:e,lang:o,team:i.team,suppressedTransitionId:h,controllerRolePickerHtml:_}),me({root:t,selector:".walker .grid .cell",currentRevealed:f,prevRevealed:$,hasRenderedBoard:k}),$=f,k=!0,oe(),U(e,"walker")}function Re(e,o){document.body.classList.remove("team-resonant","team-dissonant"),J(),t.innerHTML=ne(o,V())}function Se(e,o){we(e),(!e.turnTransition||e.turnTransition.id!==h)&&(h=null);const i=I(r),_=b||!i;if(!i){Re(e,o);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${i.team}`);const f=_?V():"";if(!(he(e,o,i,_)&&Te(e,o,i))){if(i.roleType==="guide"){be(e,o,i,f);return}Le(e,o,i,f)}}function S({state:e,language:o}={}){var f,y;const i=e??l.getState(),_=o??l.getLanguage();if(!i){J(),t.innerHTML=ne(_,r?"":V());return}Se(i,_),L=i,H=_,C=((f=I(r))==null?void 0:f.roleType)??null,R=((y=I(r))==null?void 0:y.team)??null}l.subscribe(S),a.onChange(()=>{(b||!r)&&S()}),Ge(()=>{B=!0,S()}),(ue=(de=document.fonts)==null?void 0:de.ready)==null||ue.then(()=>{B=!0,S()}).catch(()=>{}),t.addEventListener("click",async e=>{var M;if(e.target.closest("[data-transition-dismiss]")){const u=(M=l.getState())==null?void 0:M.turnTransition;u!=null&&u.id&&(h=u.id,S()),await l.forceCompleteTurnTransition();return}const i=e.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(i){const u=i.dataset.roleType,W=i.dataset.team,O=ve(u,W),K=a.getPresenceState(),j=l.getState();if(K[O]&&r!==O)return;b=!1,T=(j==null?void 0:j.gameId)??null,te(n,T),await ae(O),S();return}const _=e.target.closest(".guide__num-btn:not([disabled])");if(_){await l.setGuideLimit(parseInt(_.dataset.limit,10));return}const f=e.target.closest(".cell--clickable");if(f){await l.reveal(parseInt(f.dataset.index,10));return}if(e.target.closest("#refreshBtn")){const u=l.getState(),W=I(r),O=W&&(u==null?void 0:u.turn.team)===W.team,K=(u==null?void 0:u.turn.guideLimit)!==null;!!(O&&K&&!(u!=null&&u.gameOver)&&!(u!=null&&u.turnTransition))&&await l.endTurn()}}),S()}export{Ye as initController};
