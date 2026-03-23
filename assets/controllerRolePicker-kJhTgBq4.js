import{b as u,c as R,d as T,h as b}from"./turnTransitionDismiss-Bix9TJnx.js";import{t as w,g as h,h as y,k as L,D as E,e as _}from"./roomRepository-BHUUrAsq.js";function f(r){const e=w(r);let a=[];function t(){const n=Math.min(window.innerWidth,window.innerHeight),d=Math.max(window.innerWidth,window.innerHeight);return window.matchMedia("(pointer: coarse)").matches&&n<=768&&d<=1024}async function o(){var n;if(t())try{(n=screen.orientation)!=null&&n.lock&&await screen.orientation.lock("portrait")}catch{}}function i(){let n=document.getElementById("orientation-guard");return n||(n=document.createElement("div"),n.id="orientation-guard",n.className="orientation-guard",n.setAttribute("aria-live","polite"),n.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${e.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${e.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(n)),n}function s(){const n=i(),d=window.matchMedia("(orientation: landscape)").matches,c=t()&&d;n.classList.toggle("is-visible",c),document.body.classList.toggle("is-orientation-blocked",c)}const m=()=>{document.visibilityState==="visible"&&(o(),s())},l=()=>s(),p=()=>s();return o(),s(),document.addEventListener("visibilitychange",m),window.addEventListener("resize",l),window.addEventListener("orientationchange",p),a=[()=>document.removeEventListener("visibilitychange",m),()=>window.removeEventListener("resize",l),()=>window.removeEventListener("orientationchange",p)],()=>{a.forEach(n=>n())}}const $=[{roleType:"guide",team:"dissonant",presenceRole:u.GUIDE_DISSONANT},{roleType:"walker",team:"dissonant",presenceRole:u.WALKER_DISSONANT},{roleType:"guide",team:"resonant",presenceRole:u.GUIDE_RESONANT},{roleType:"walker",team:"resonant",presenceRole:u.WALKER_RESONANT}];function N(r,e){return r==="guide"?e==="resonant"?u.GUIDE_RESONANT:u.GUIDE_DISSONANT:e==="resonant"?u.WALKER_RESONANT:u.WALKER_DISSONANT}function A({roleType:r,roomId:e,token:a,team:t}){return`${h()}/${r}.html?room=${e}&token=${a}&team=${t}`}function O(r,e,a,t){return r==="walker"?`${_(e,t)} ${a.dreamwalker}<br>${a.controllerTaken.replace(`
`,"<br>")}`:a[e==="resonant"?"miniTakenResonant":"miniTakenDissonant"].replace(`
`,"<br>")}async function D(r,{roleType:e,invalidParamsHtml:a}){const{roomId:t,token:o,team:i}=y();if(!t||!o||!i||i!=="resonant"&&i!=="dissonant")return r.innerHTML=a,null;const{room:s,error:m}=await L(t,o),l=(s==null?void 0:s.language)||E,p=w(l);if(!s||m)return r.innerHTML=`<div class="waiting-screen">
            <p>${p.wrongLink.replace(`
`,"<br>")}</p>
        </div>`,null;const n=N(e,i);let d=n;const c=R(t);await c.isRoleTaken(n)&&(r.innerHTML=`
            <div class="waiting-screen">
                <div class="taken-screen">
                    <p class="taken-screen__icon">🔒</p>
                    <p class="taken-screen__text">${O(e,i,p,l)}</p>
                    <button class="ui-btn" id="forceJoinBtn">${p.forceRejoin}</button>
                </div>
            </div>`,await new Promise(g=>{document.getElementById("forceJoinBtn").addEventListener("click",g,{once:!0})})),c.join(n),f(l),document.body.classList.add(`team-${i}`);const k=b(t);return await k.init(),await T({presence:c,store:k,role:()=>d}),{presence:c,store:k,team:i,roomId:t,token:o,roleType:e,getPresenceRole:()=>d,setPresenceRole:async g=>{d=g??null,await c.setRole(d)},guestUrl:(g,v)=>A({roleType:g,roomId:t,token:o,team:v})}}function P(r,e){return r==="guide"?e.guide:e.dreamwalker}function C({language:r,presenceState:e,currentPresenceRole:a}){const t=w(r);return`
        <div class="controller-role-picker" data-controller-role-picker>
            <div class="controller-role-picker__panel">
                <div class="controller-role-picker__eyebrow">${t.newGame}</div>
                <h2 class="controller-role-picker__title">${t.chooseControllerRole}</h2>
                <div class="controller-role-picker__grid">
                    ${$.map(o=>{const i=a===o.presenceRole,s=!!(e!=null&&e[o.presenceRole])&&!i,m=_(o.team,r),l=P(o.roleType,t);return`
                            <button
                                class="controller-role-picker__btn controller-role-picker__btn--${o.team} ${i?"is-current":""}"
                                type="button"
                                data-role-type="${o.roleType}"
                                data-team="${o.team}"
                                ${s?"disabled":""}
                            >
                                <span class="controller-role-picker__team">${m}</span>
                                <span class="controller-role-picker__role">${l}</span>
                                <span class="controller-role-picker__state">${s?t.roleBusy:i?t.currentRole:t.chooseRoleAction}</span>
                            </button>
                        `}).join("")}
                </div>
            </div>
        </div>
    `}export{N as g,D as i,C as r};
