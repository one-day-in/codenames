import{t as k,d as L,s as p,D as E,k as y,f as _,e as S,R as g}from"./url-6tX14MqV.js";import{k as T,c as h}from"./sanitize-d-swCcn9.js";function O(o){const r=k(o);let i=[];async function e(){var t;try{(t=screen.orientation)!=null&&t.lock&&await screen.orientation.lock("portrait")}catch{}}function s(){let t=document.getElementById("orientation-guard");return t||(t=document.createElement("div"),t.id="orientation-guard",t.className="orientation-guard",t.setAttribute("aria-live","polite"),t.innerHTML=`
                <div class="orientation-guard__content">
                    <p class="orientation-guard__title">${r.rotatePortraitTitle}</p>
                    <p class="orientation-guard__text">${r.rotatePortraitText}</p>
                </div>
            `,document.body.appendChild(t)),t}function n(){const t=s(),c=window.matchMedia("(orientation: landscape)").matches;t.classList.toggle("is-visible",c),document.body.classList.toggle("is-orientation-blocked",c)}const a=()=>{document.visibilityState==="visible"&&(e(),n())},d=()=>n(),l=()=>n();return e(),n(),document.addEventListener("visibilitychange",a),window.addEventListener("resize",d),window.addEventListener("orientationchange",l),i=[()=>document.removeEventListener("visibilitychange",a),()=>window.removeEventListener("resize",d),()=>window.removeEventListener("orientationchange",l)],()=>{i.forEach(t=>t())}}function I(o,r){return o==="guide"?r==="resonant"?g.GUIDE_RESONANT:g.GUIDE_DISSONANT:r==="resonant"?g.WALKER_RESONANT:g.WALKER_DISSONANT}function A(o,r,i,e){return o==="walker"?`${_(r,e)} ${i.dreamwalker}<br>${i.controllerTaken.replace(`
`,"<br>")}`:i[r==="resonant"?"miniTakenResonant":"miniTakenDissonant"].replace(`
`,"<br>")}async function G(o,{roleType:r,invalidParamsHtml:i}){var v;const{roomId:e,token:s,team:n}=L();if(!e||!s||!n||n!=="resonant"&&n!=="dissonant")return o.innerHTML=i,null;const{data:a,error:d}=await p.from("rooms").select("id, guest_token, language, state").eq("id",e).eq("guest_token",s).maybeSingle(),l=(a==null?void 0:a.language)||E,t=k(l);if(!a||d)return o.innerHTML=`<div class="waiting-screen">
            <p>${t.wrongLink.replace(`
`,"<br>")}</p>
        </div>`,null;const c=I(r,n),m=S(e),u=N(e,c),w=y((v=a==null?void 0:a.state)==null?void 0:v.controllerOwners)[c];!!(w&&w!==u)&&(o.innerHTML=`
            <div class="waiting-screen">
                <div class="taken-screen">
                    <p class="taken-screen__icon">🔒</p>
                    <p class="taken-screen__text">${A(r,n,t,l)}</p>
                    <button class="lobby__btn" id="forceJoinBtn">${t.forceRejoin}</button>
                </div>
            </div>`,await new Promise(b=>{document.getElementById("forceJoinBtn").addEventListener("click",b,{once:!0})})),await R(e,c,u),m.join(c),T(m,c),O(l),document.body.classList.add(`team-${n}`);const f=h(e,{role:c,controllerId:u});return await f.init(),{presence:m,store:f,team:n,roomId:e,presenceRole:c,controllerId:u}}function N(o,r){var e,s;const i=`nw_controller:${o}:${r}`;try{const n=sessionStorage.getItem(i);if(n)return n;const a=((e=crypto.randomUUID)==null?void 0:e.call(crypto))||Math.random().toString(36).slice(2);return sessionStorage.setItem(i,a),a}catch{return((s=crypto.randomUUID)==null?void 0:s.call(crypto))||Math.random().toString(36).slice(2)}}async function R(o,r,i){const{data:e,error:s}=await p.from("rooms").select("state").eq("id",o).maybeSingle();if(s||!(e!=null&&e.state))return;const n={...e.state,controllerOwners:{...y(e.state.controllerOwners),[r]:i}};await p.from("rooms").update({state:n}).eq("id",o)}export{G as i};
