import{C as K,r as de,a as ue,m as Ge,e as me,g as fe,c as Oe,p as N,d as Ie,i as Me,o as Ne,f as Ae,n as ge,l as We,q,j as Q,k as se}from"./turnTransitionDismiss-CUSLYKl0.js";import{t as E,e as z,I as A,f as je,h as Fe,k as qe,D as X,m as ze,n as Y,o as Ve}from"./roomRepository-DP2sOvJL.js";import"./entry-BGrt6lEj.js";function De(n){const i=E(n);let f=[];function c(){const s=Math.min(window.innerWidth,window.innerHeight),l=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&s<=768&&l<=1024}async function _(){var s;if(c())try{(s=screen.orientation)!=null&&s.lock&&await screen.orientation.lock("portrait")}catch{}}function u(){let s=document.getElementById("orientation-guard");return s||(s=document.createElement("div"),s.id="orientation-guard",s.className="orientation-guard",s.setAttribute("aria-live","polite"),s.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${i.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${i.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(s)),s}function v(){const s=u(),l=window.matchMedia("(orientation: landscape)").matches,y=c()&&l;s.classList.toggle("is-visible",y),document.body.classList.toggle("is-orientation-blocked",y)}const g=()=>{document.visibilityState==="visible"&&(_(),v())},w=()=>v(),a=()=>v();return _(),v(),document.addEventListener("visibilitychange",g),window.addEventListener("resize",w),window.addEventListener("orientationchange",a),f=[()=>document.removeEventListener("visibilitychange",g),()=>window.removeEventListener("resize",w),()=>window.removeEventListener("orientationchange",a)],()=>{f.forEach(s=>s())}}function Je(n,i){return n==="guide"?i.guide:i.dreamwalker}function Ue(n,i){return n==="guide"?i.controllerGuideHint:i.controllerWalkerHint}function Ke(n){return n==="guide"?A.book:A.eye}function Qe({language:n,presenceState:i,currentPresenceRole:f}){const c=E(n),_=K.filter(l=>i==null?void 0:i[l.presenceRole]).length,u=f===null&&_>0,v=u?c.newGame:c.controllerConnectEyebrow,g=u?c.controllerReconnectTitle:c.controllerConnectTitle,w=u?c.controllerReconnectText:c.controllerConnectText,a=["dissonant","resonant"];function s(l){const y=f===l.presenceRole,h=!!(i!=null&&i[l.presenceRole])&&!y,$=Je(l.roleType,c),T=Ue(l.roleType,c),b=h?c.roleBusy:y?c.currentRole:c.chooseRoleAction,L=h?"controller-role-picker__state--busy":y?"controller-role-picker__state--current":"controller-role-picker__state--action";return`
            <button
                class="controller-role-picker__btn controller-role-picker__btn--${l.team} controller-role-picker__btn--${l.roleType} ${y?"is-current":""}"
                type="button"
                data-role-type="${l.roleType}"
                data-team="${l.team}"
                ${h?"disabled":""}
            >
                <span class="controller-role-picker__icon" aria-hidden="true">${Ke(l.roleType)}</span>
                <span class="controller-role-picker__role">${$}</span>
                <span class="controller-role-picker__hint">${T}</span>
                <span class="controller-role-picker__state ${L}">${b}</span>
            </button>
        `}return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel ${u?"controller-role-picker__panel--reconnect":""}">
                <div class="controller-role-picker__eyebrow">${v}</div>
                <h2 class="controller-role-picker__title">${g}</h2>
                <p class="controller-role-picker__text">${w}</p>
                <p class="controller-role-picker__summary">${_} / ${K.length} ${c.waitingPlayers}</p>
                <div class="controller-role-picker__grid">
                    ${a.map(l=>{const y=z(l,n),h=K.filter($=>$.team===l);return`
                            <section class="controller-role-picker__team-column controller-role-picker__team-column--${l}">
                                <h3 class="controller-role-picker__team-title">${y}</h3>
                                <div class="controller-role-picker__team-stack">
                                    ${h.map(s).join("")}
                                </div>
                            </section>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}function _e({mode:n,title:i,titleMuted:f=!1,metaHtml:c="",boardClassName:_="",boardHtml:u="",footerHtml:v="",overlayHtml:g=""}){return`
        <div class="screen-layout screen-layout--fit-pending player-screen-layout ${n}-layout">
            <header class="screen-header">
                <div class="player-screen__header">
                    <div class="player-screen__title ${f?"player-screen__title--muted":"player-screen__title--active"}">${i}</div>
                    <div class="player-screen__meta-wrap">${c}</div>
                </div>
            </header>

            <main class="screen-body">
                <div class="screen-board player-screen__board ${_}">
                    ${u}
                </div>
            </main>

            <footer class="screen-footer player-screen__footer ${n}__footer">
                <div class="player-screen__footer-content">${v}</div>
            </footer>
            ${g}
        </div>
    `}function pe({state:n,lang:i,team:f,maxHintButtons:c,teamEffects:_}){const u=E(i),v=n.turn,g=v.team===f,w=v.guideLimit!==null,a=g&&!w&&!n.gameOver&&!n.turnTransition,s=_.allowTwoWordClue,l=_.forcedGuideLimit,y=_.hideEnemyColors,h=_.hideNightmare,$=z(f,i),T=a?`${u.guide}: ${u.chooseLimit}`:`${u.guide}: ${A.eyeClosed}`,b=[a&&l===1?u.guideForcedOneMove:null,a&&s?u.guideTwoWordClue:null,y?u.guideBlurActive:null,h?u.guideNightmareHidden:null].filter(Boolean),L=b.length?`<div class="player__meta ${a?"player__meta--active":"player__meta--muted"}">${b.join(" • ")}</div>`:"",R=Array.from({length:c},(C,B)=>{const H=B+1;return`
            <button
                class="guide__num-btn ${v.guideLimit===H?"guide__num-btn--chosen":""}"
                data-limit="${H}"
                ${!a||l!==null&&H!==l?"disabled":""}
            >${H}</button>
        `}).join("");return{teamTitle:$,titleMuted:!a,metaHtml:`
            <div class="player__meta ${a?"player__meta--active":"player__meta--muted"}">${T}</div>
            ${L}
        `,boardHtml:`
            <div class="grid grid--5">
                ${n.cells.map((C,B)=>`
                    <div class="${Ge(C,{team:f,effects:_})}" data-index="${B}">
                        <span class="cell__content">${me(C.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`<div class="guide__btns ${a?"guide__btns--active":"guide__btns--muted"}">${R}</div>`}}function Xe({state:n,lang:i,team:f,maxHintButtons:c,teamEffects:_,suppressedTransitionId:u,controllerRolePickerHtml:v=""}){const g=pe({state:n,lang:i,team:f,maxHintButtons:c,teamEffects:_});return _e({mode:"guide",title:g.teamTitle,titleMuted:g.titleMuted,metaHtml:g.metaHtml,boardClassName:`guide guide--${f}`,boardHtml:g.boardHtml,footerHtml:g.footerHtml,overlayHtml:`
            ${de(n,i,{suppressedTransitionId:u})}
            ${ue({state:n,lang:i,team:f})}
            ${v}
        `})}function ve({state:n,lang:i,team:f}){const c=E(i),_=n.turn,u=_.team===f,v=_.guideLimit!==null,g=u&&v&&!n.gameOver&&!n.turnTransition,w=v?Math.max((_.guideLimit??0)-(_.dreamwalkerMoves??0),0):0,a=z(f,i),s=g?`${c.dreamwalker}: <span class="walker__moves-value">${je(w,i)}</span>`:`${c.dreamwalker}: ${A.eyeClosed}`;return{teamTitle:a,titleMuted:!g,metaHtml:`<div class="${g?"player__meta player__meta--active":"player__meta player__meta--muted"}">${s}</div>`,boardHtml:`
            <div class="grid grid--5">
                ${n.cells.map((y,h)=>`
                    <div
                        class="${fe(y)} ${g&&!y.revealed?"cell--clickable":""}"
                        data-index="${h}"
                    >
                        <span class="cell__content">${me(y.word)}</span>
                    </div>
                `).join("")}
            </div>
        `,footerHtml:`
            <div class="walker__actions">
                <button class="walker__action-btn walker__refresh-btn ${g?"walker__refresh-btn--active":"walker__refresh-btn--muted"}" id="refreshBtn" aria-label="${c.endTurn}" ${g?"":"disabled"}>
                    <span class="walker__action-label">${c.endTurn}</span>
                    <span class="walker__action-icon">${A.x}</span>
                </button>
            </div>
        `,canPlay:g}}function Ye({state:n,lang:i,team:f,suppressedTransitionId:c,controllerRolePickerHtml:_=""}){const u=ve({state:n,lang:i,team:f});return _e({mode:"walker",title:u.teamTitle,titleMuted:u.titleMuted,metaHtml:u.metaHtml,boardClassName:`walker walker--${f}`,boardHtml:u.boardHtml,footerHtml:u.footerHtml,overlayHtml:`
            ${de(n,i,{suppressedTransitionId:c})}
            ${ue({state:n,lang:i,team:f})}
            ${_}
        `})}const ce=8;function ne(n){return`nw-controller-game:${n}`}function Ze(n){try{return sessionStorage.getItem(ne(n))}catch{return null}}function Z(n,i){try{i?sessionStorage.setItem(ne(n),i):sessionStorage.removeItem(ne(n))}catch{}}function en({team:n,roleType:i}){return!n||n!=="resonant"&&n!=="dissonant"?null:i==="guide"||i==="walker"?ge(i,n):null}function nn(n,i,f){if(!n)return i.controllerTaken.replace(`
`,"<br>");if(n.roleType==="walker")return`${z(n.team,f)} ${i.dreamwalker}<br>${i.controllerTaken.replace(`
`,"<br>")}`;const c=n.team==="resonant"?"miniTakenResonant":"miniTakenDissonant";return i[c].replace(`
`,"<br>")}function ee(n,i=""){return`<div class="waiting-screen">
        ${i?"":`<p>${E(n).waitingGame}</p>`}
        ${i}
    </div>`}async function on(n){var oe,ae;const{roomId:i,token:f,team:c,roleType:_}=Fe();if(n.innerHTML=ee(X),!i||!f){n.innerHTML=`<div class="waiting-screen">
            <p>${E(X).scanQr}</p>
        </div>`;return}const{room:u,error:v}=await qe(i,f),g=(u==null?void 0:u.language)||X,w=E(g);if(!u||v){n.innerHTML=`<div class="waiting-screen">
            <p>${w.wrongLink.replace(`
`,"<br>")}</p>
        </div>`;return}De(g);const a=Ae(i);await a.init();const s=Oe(i);let l=en({team:c,roleType:_});const y=N(l);l&&await s.isRoleTaken(l)&&(n.innerHTML=`
                <div class="waiting-screen">
                    <div class="taken-screen">
                        <p class="taken-screen__icon">🔒</p>
                        <p class="taken-screen__text">${nn(y,w,g)}</p>
                        <button class="ui-btn" id="forceJoinBtn">${w.forceRejoin}</button>
                    </div>
                </div>`,await new Promise(r=>{var t;(t=document.getElementById("forceJoinBtn"))==null||t.addEventListener("click",r,{once:!0})})),l?s.join(l):s.listen(),await Ie({presence:s,store:a,role:()=>l});let h=!1,$=new Set,T=null,b=Ze(i),L=!l,R=null,C=null,B=null,H=null,W=null,I=null,V=null,P=!0,j=!1;const M=We({root:n,getGrid:()=>n.querySelector(".grid"),onFitEnd:()=>{te()}});function ye(){return n.querySelector(".grid")}function ke(){j||(j=!0,ze())}function te(){j&&(j=!1,Ve())}function he(){const e=ye();return e?`${e.clientWidth}x${e.clientHeight}`:null}function re(){M.observeGrid(()=>{P=!0,U(a.getState(),I)})}Me(n,()=>{var e;return(e=a.getState())==null?void 0:e.turnTransition},async()=>{var r;const e=(r=a.getState())==null?void 0:r.turnTransition;e!=null&&e.id&&(T=e.id,S()),await a.forceCompleteTurnTransition()});function D(){h=!1,$=new Set,T=null,R=null,C=null,B=null,H=null,W=null,I=null,V=null,P=!0,M.reset()}async function ie(e){l=e??null,l?await s.setRole(l):await s.setRole(null)}function we(e){const r=(e==null?void 0:e.gameId)??null;if(!r){b=null,Z(i,null),L=!l;return}if(!l){L=!0;return}if(!b){b=r,Z(i,r);return}r!==b&&!L&&(L=!0,D(),ie(null).then(()=>S()))}function J(){return Qe({language:a.getLanguage(),presenceState:s.getPresenceState(),currentPresenceRole:l})}function $e(e=[]){return Array.from(Q(e)).sort((r,t)=>r-t).join(",")}function Te(e,r){return JSON.stringify(Y(e)[r])}function be(e=[],r=[]){const t=Math.max(e.length,r.length),m=[];for(let o=0;o<t;o+=1){const p=e[o],k=r[o];if(!p||!k){m.push(o);continue}(p.word!==k.word||p.revealed!==k.revealed||p.role!==k.role||p.imageVariant!==k.imageVariant)&&m.push(o)}return m}function le(e,r){const t=[q(e.cells),$e(e.cells)].join("|");return(r==null?void 0:r.roleType)==="guide"?`${t}|${Te(e.teamEffects,r.team)}`:t}function Le(e,r,t,m){const o=t==null?void 0:t.roleType;return o!=="guide"&&o!=="walker"||m||e.turnTransition||e.gameOver||B!==o||H!==t.team||C!==r||!R||!n.querySelector(`.${o}-layout`)?!1:o==="walker"?q(R.cells)===q(e.cells):le(R,t)===le(e,t)}function Re(e,r,t){const m=n.querySelectorAll(".walker .grid .cell");if(m.length!==e.cells.length)return!1;const o=be(r==null?void 0:r.cells,e.cells);return o.length?(o.forEach(p=>{var x,O;const k=e.cells[p],d=m[p];if(!k||!d)return;const G=!!((O=(x=r==null?void 0:r.cells)==null?void 0:x[p])!=null&&O.revealed);d.className=`${fe(k)}${t&&!k.revealed?" cell--clickable":""}`,d.dataset.index=String(p),k.revealed&&!G&&(d.classList.add("cell--reveal-anim"),d.addEventListener("animationend",()=>{d.classList.remove("cell--reveal-anim")},{once:!0}))}),!0):(e.cells.forEach((p,k)=>{const d=m[k];d&&d.classList.toggle("cell--clickable",!!(t&&!p.revealed))}),!0)}function He(e,r,t){return(t==null?void 0:t.roleType)==="guide"?pe({state:e,lang:r,team:t.team,maxHintButtons:ce,teamEffects:Y(e.teamEffects)[t.team]}):ve({state:e,lang:r,team:t.team})}function Se(e,r,t,m){return(t==null?void 0:t.roleType)==="walker"?Re(e,r,m.canPlay):!0}function Ce(e,r,t){const m=R,o=He(e,r,t),p=n.querySelector(".player-screen__title"),k=n.querySelector(".player-screen__meta-wrap"),d=n.querySelector(".player-screen__footer-content");return!p||!k||!d||(p.textContent=o.teamTitle,p.classList.toggle("player-screen__title--muted",o.titleMuted),p.classList.toggle("player-screen__title--active",!o.titleMuted),k.innerHTML=o.metaHtml,d.innerHTML=o.footerHtml,!Se(e,m,t,o))?!1:(R=e,C=r,B=t.roleType,H=t.team,!0)}function U(e,r){if(!e||!r)return;const t=q(e.cells),m=he(),o=P||!h||W!==t||I!==r||V!==m;W=t,I=r,V=m,o&&(P=!1,M.scheduleFit())}function Be(e,r,t,m){const o=Y(e.teamEffects)[t.team],p=Q(e.cells);n.innerHTML=Xe({state:e,lang:r,team:t.team,maxHintButtons:ce,teamEffects:o,suppressedTransitionId:T,controllerRolePickerHtml:m}),M.markPending(),se({root:n,selector:".guide .grid .cell",currentRevealed:p,prevRevealed:$,hasRenderedBoard:h}),$=p,h=!0,re(),U(e,"guide")}function xe(e,r,t,m){const o=Q(e.cells);n.innerHTML=Ye({state:e,lang:r,team:t.team,suppressedTransitionId:T,controllerRolePickerHtml:m}),M.markPending(),se({root:n,selector:".walker .grid .cell",currentRevealed:o,prevRevealed:$,hasRenderedBoard:h}),$=o,h=!0,re(),U(e,"walker")}function Ee(e,r){document.body.classList.remove("team-resonant","team-dissonant"),D(),te(),n.innerHTML=ee(r,J())}function Pe(e,r){we(e),(!e.turnTransition||e.turnTransition.id!==T)&&(T=null);const t=N(l),m=L||!t;if(!t){Ee(e,r);return}document.body.classList.remove("team-resonant","team-dissonant"),document.body.classList.add(`team-${t.team}`);const o=m?J():"";if(!(Le(e,r,t,m)&&Ce(e,r,t))){if(t.roleType==="guide"){Be(e,r,t,o);return}xe(e,r,t,o)}}function S({state:e,language:r}={}){var o,p;const t=e??a.getState(),m=r??a.getLanguage();if(!t){D(),n.innerHTML=ee(m,l?"":J());return}Pe(t,m),R=t,C=m,B=((o=N(l))==null?void 0:o.roleType)??null,H=((p=N(l))==null?void 0:p.team)??null}a.subscribe(S),s.onChange(()=>{(L||!l)&&S()}),Ne(()=>{P=!0,S()}),(ae=(oe=document.fonts)==null?void 0:oe.ready)==null||ae.then(()=>{P=!0,S()}).catch(()=>{}),n.addEventListener("click",async e=>{var k;if(e.target.closest("[data-transition-dismiss]")){const d=(k=a.getState())==null?void 0:k.turnTransition;d!=null&&d.id&&(T=d.id,S()),await a.forceCompleteTurnTransition();return}const t=e.target.closest("[data-controller-role-picker] button[data-role-type][data-team]");if(t){const d=t.dataset.roleType,G=t.dataset.team,x=ge(d,G),O=s.getPresenceState(),F=a.getState();if(O[x]&&l!==x)return;L=!1,ke(),b=(F==null?void 0:F.gameId)??null,Z(i,b),await ie(x),S();return}const m=e.target.closest(".guide__num-btn:not([disabled])");if(m){await a.setGuideLimit(parseInt(m.dataset.limit,10));return}const o=e.target.closest(".cell--clickable");if(o){await a.reveal(parseInt(o.dataset.index,10));return}if(e.target.closest("#refreshBtn")){const d=a.getState(),G=N(l),x=G&&(d==null?void 0:d.turn.team)===G.team,O=(d==null?void 0:d.turn.guideLimit)!==null;!!(x&&O&&!(d!=null&&d.gameOver)&&!(d!=null&&d.turnTransition))&&await a.endTurn()}}),S()}export{on as initController};
