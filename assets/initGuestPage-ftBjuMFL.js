import{c as f,d as w,f as L,R as m}from"./turnTransitionDismiss-RkrMfjXR.js";import{t as v,d as k,D as E,b}from"./url-Qg2x4s1h.js";import{a as y}from"./roomRepository-DwKmHnBd.js";function T(a){const t=v(a);let o=[];async function i(){var e;try{(e=screen.orientation)!=null&&e.lock&&await screen.orientation.lock("portrait")}catch{}}function d(){let e=document.getElementById("orientation-guard");return e||(e=document.createElement("div"),e.id="orientation-guard",e.className="orientation-guard",e.setAttribute("aria-live","polite"),e.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${t.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${t.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(e)),e}function n(){const e=d(),c=window.matchMedia("(orientation: landscape)").matches;e.classList.toggle("is-visible",c),document.body.classList.toggle("is-orientation-blocked",c)}const r=()=>{document.visibilityState==="visible"&&(i(),n())},l=()=>n(),s=()=>n();return i(),n(),document.addEventListener("visibilitychange",r),window.addEventListener("resize",l),window.addEventListener("orientationchange",s),o=[()=>document.removeEventListener("visibilitychange",r),()=>window.removeEventListener("resize",l),()=>window.removeEventListener("orientationchange",s)],()=>{o.forEach(e=>e())}}function _(a,t){return a==="guide"?t==="resonant"?m.GUIDE_RESONANT:m.GUIDE_DISSONANT:t==="resonant"?m.WALKER_RESONANT:m.WALKER_DISSONANT}function R(a,t,o,i){return a==="walker"?`${b(t,i)} ${o.dreamwalker}<br>${o.controllerTaken.replace(`
`,"<br>")}`:o[t==="resonant"?"miniTakenResonant":"miniTakenDissonant"].replace(`
`,"<br>")}async function G(a,{roleType:t,invalidParamsHtml:o}){const{roomId:i,token:d,team:n}=k();if(!i||!d||!n||n!=="resonant"&&n!=="dissonant")return a.innerHTML=o,null;const{room:r,error:l}=await y(i,d),s=(r==null?void 0:r.language)||E,e=v(s);if(!r||l)return a.innerHTML=`<div class="waiting-screen">
            <p>${e.wrongLink.replace(`
`,"<br>")}</p>
        </div>`,null;const c=_(t,n),u=w(i);await u.isRoleTaken(c)&&(a.innerHTML=`
            <div class="waiting-screen">
                <div class="taken-screen">
                    <p class="taken-screen__icon">🔒</p>
                    <p class="taken-screen__text">${R(t,n,e,s)}</p>
                    <button class="ui-btn" id="forceJoinBtn">${e.forceRejoin}</button>
                </div>
            </div>`,await new Promise(p=>{document.getElementById("forceJoinBtn").addEventListener("click",p,{once:!0})})),u.join(c),T(s),document.body.classList.add(`team-${n}`);const g=L(i);return await g.init(),await f({presence:u,store:g,role:c}),{presence:u,store:g,team:n,roomId:i}}export{G as i};
