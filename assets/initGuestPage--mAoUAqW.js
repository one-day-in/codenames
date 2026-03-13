import{t as v,b,s as k,D as f,d as L}from"./url-DrpWMjE3.js";import{a as w,c as y,b as E,R as g}from"./syncIndicator-BbgSmntl.js";function A(i,n){var a;(a=i.querySelector(".turn-transition-overlay"))==null||a.addEventListener("click",()=>{n()})}function T(i){const n=v(i);let a=[];async function o(){var e;try{(e=screen.orientation)!=null&&e.lock&&await screen.orientation.lock("portrait")}catch{}}function d(){let e=document.getElementById("orientation-guard");return e||(e=document.createElement("div"),e.id="orientation-guard",e.className="orientation-guard",e.setAttribute("aria-live","polite"),e.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${n.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${n.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(e)),e}function t(){const e=d(),c=window.matchMedia("(orientation: landscape)").matches;e.classList.toggle("is-visible",c),document.body.classList.toggle("is-orientation-blocked",c)}const r=()=>{document.visibilityState==="visible"&&(o(),t())},l=()=>t(),s=()=>t();return o(),t(),document.addEventListener("visibilitychange",r),window.addEventListener("resize",l),window.addEventListener("orientationchange",s),a=[()=>document.removeEventListener("visibilitychange",r),()=>window.removeEventListener("resize",l),()=>window.removeEventListener("orientationchange",s)],()=>{a.forEach(e=>e())}}function _(i,n){return i==="guide"?n==="resonant"?g.GUIDE_RESONANT:g.GUIDE_DISSONANT:n==="resonant"?g.WALKER_RESONANT:g.WALKER_DISSONANT}function R(i,n,a,o){return i==="walker"?`${L(n,o)} ${a.dreamwalker}<br>${a.controllerTaken.replace(`
`,"<br>")}`:a[n==="resonant"?"miniTakenResonant":"miniTakenDissonant"].replace(`
`,"<br>")}async function $(i,{roleType:n,invalidParamsHtml:a}){const{roomId:o,token:d,team:t}=b();if(!o||!d||!t||t!=="resonant"&&t!=="dissonant")return i.innerHTML=a,null;const{data:r,error:l}=await k.from("rooms").select("id, guest_token, language").eq("id",o).eq("guest_token",d).maybeSingle(),s=(r==null?void 0:r.language)||f,e=v(s);if(!r||l)return i.innerHTML=`<div class="waiting-screen">
            <p>${e.wrongLink.replace(`
`,"<br>")}</p>
        </div>`,null;const c=_(n,t),u=y(o);await u.isRoleTaken(c)&&(i.innerHTML=`
            <div class="waiting-screen">
                <div class="taken-screen">
                    <p class="taken-screen__icon">🔒</p>
                    <p class="taken-screen__text">${R(n,t,e,s)}</p>
                    <button class="ui-btn" id="forceJoinBtn">${e.forceRejoin}</button>
                </div>
            </div>`,await new Promise(p=>{document.getElementById("forceJoinBtn").addEventListener("click",p,{once:!0})})),u.join(c),T(s),document.body.classList.add(`team-${t}`);const m=E(o);return await m.init(),await w({presence:u,store:m,role:c}),{presence:u,store:m,team:t,roomId:o}}export{A as b,$ as i};
