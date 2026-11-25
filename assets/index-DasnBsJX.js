(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={version:1,balance:{enemyHp:1,enemyDamage:1,playerDamage:1,cellDrop:1,wrenchGain:1,xpGain:1,bossHp:1},shopPriceTiers:[1,5,9,16],rerollCost:2,dailyMutatorPool:[`lowGravity`,`doubleRail`,`glassCannon`,`bonkShockwave`,`hyperReload`,`explosiveBarrels`,`swarm`,`heavyMetal`,`cellRain`,`turbo`,`thinAir`,`featherfall`,`magnetStorm`,`bigHeads`,`criticalMass`,`vampiric`,`slickRails`,`overclocked`],weeklySynergyRules:[{id:`storm-week`,label:`Storm Week: Shock chips +25%`,tag:`shock`,mult:1.25},{id:`bonk-fest`,label:`Bonk Fest: Headbonk chains +25%`,tag:`headbonk`,mult:1.25},{id:`rail-rush`,label:`Rail Rush: Rail-exit chains +25%`,tag:`railExit`,mult:1.25},{id:`hot-streak`,label:`Hot Streak: Burn chips +25%`,tag:`burn`,mult:1.25}]},t={dt:1/60,runSpeed:10.5,sprintSpeed:16,groundAccel:100,airControl:1,lateralSpeed:10.5,trackHalf:4.5,jump1:10.6,jump1Hold:.08,jump2:11.75,jump2Hold:.15,g:9.8,gravStart:3.25,gravRamp:1.5,gravMax:10,coyote:.15,landBuffer:.15,bhopBonus:.15,stepUp:1,slidePeak:20.2,slidePeakT:.1,slideEndT:.55,slideCooldown:.6,slideMin:.4,slideJumpCancel:.2,jetIgniteVy:1,jetFuel:2.5,jetIgniteCost:.15,jetRefund:.5,jetRegenDelay:0,jetRefill:4,jetHoverVy:1.2,bodyRadius:.35,footDisc:3.9,grindMin:15.2,grindMax:23.6,grindAccel:5,railPop:7.5,railLockout:.3,bonkBounce:11.5,groundDrag:9,airDrag:2.5,maxSpeed:30,killY:-14,lavaY:-2.4,overloadWindow:.4,overloadFireRate:.35,overloadDur:2.5,overloadMissStall:.6,reloadTime:1.15,scratchRatio:.55,scratchFreeze:1.25,scratchDecay:22,scratchPickupFreeze:.35,scratchHealRate:2.5,dashCooldown:3,sectorsPerRun:5,sectorLength:520,workshopSeconds:30,basePlayerHp:120},n={version:1,balance:{enemyHp:1,enemyDamage:1,playerDamage:1,cellDrop:1,wrenchGain:1,xpGain:1,bossHp:1},shopPriceTiers:[1,5,9,16],rerollCost:2,dailyMutatorPool:[],weeklySynergyRules:[]};function r(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function i(e,t){if(!r(e)||!r(t))return e;let n={...e};for(let a of Object.keys(e)){if(!(a in t))continue;let o=e[a],s=t[a];r(o)?n[a]=i(o,s):Array.isArray(o)?Array.isArray(s)&&(n[a]=s.slice()):typeof s==typeof o&&(typeof s!=`number`||Number.isFinite(s))&&(n[a]=s)}return n}var a=i(n,e);function o(e){return a=i(a,e),a}async function s(){try{let e=await fetch(`./hotfix.override.json`,{cache:`no-cache`});e.ok&&o(await e.json())}catch{}try{let e=localStorage.getItem(`rb_hotfix`);e&&o(JSON.parse(e))}catch{}return a}function c(e,t=a){let n=t.shopPriceTiers;return n[Math.max(0,Math.min(n.length-1,e))]??1}function l(e){return Math.floor((Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())/864e5+4)/7)}function u(e=new Date,t=a){let n=t.weeklySynergyRules;return n.length?n[l(e)%n.length]:null}function d(e,t){if(t.length<20)return`${e.padEnd(8)} collecting…`;let n=[...t].sort((e,t)=>e-t),r=t.reduce((e,t)=>e+t,0)/t.length,i=e=>n[Math.min(n.length-1,Math.floor(e*n.length))],a=t.filter(e=>e<=17.5).length/t.length*100;return`${e.padEnd(8)} ${(1e3/r).toFixed(1).padStart(5)} fps  p95 ${i(.95).toFixed(1)} ms  worst ${n[n.length-1].toFixed(0)} ms  in-budget ${a.toFixed(1)}%  (${t.length} frames)`}function f(e){let t=document.createElement(`div`);t.id=`rb-bench`,t.style.cssText=`position:fixed;left:6px;right:6px;top:150px;z-index:9999;background:rgba(10,8,20,.9);color:#dff;font:10.5px/1.5 ui-monospace,Menlo,Consolas,monospace;padding:8px 10px;border:1px solid #35f0c8;border-radius:8px;white-space:pre-wrap;user-select:text;-webkit-user-select:text;pointer-events:none`,document.body.appendChild(t);let n=e.renderer.three.getContext(),r=n.getExtension(`WEBGL_debug_renderer_info`),i=String(r?n.getParameter(r.UNMASKED_RENDERER_WEBGL):n.getParameter(n.RENDERER)),a={},o=[],s=0,c=0,l=0,u=1,f=0,p=``,m=``,h=0;try{new PerformanceObserver(e=>{for(let t of e.getEntries()){if(t.startTime<3e3||t.duration<=h)continue;let e=t.scripts??[],n=[...e].sort((e,t)=>t.duration-e.duration)[0];h=t.duration,m=`longest frame task `+t.duration.toFixed(0)+` ms, of which script `+e.reduce((e,t)=>e+t.duration,0).toFixed(0)+` ms`+(n?` (`+(n.sourceFunctionName||n.invoker||`?`)+`)`:``)+`, before rendering `+((t.renderStart||t.startTime)-t.startTime).toFixed(0)+` ms, style+layout+paint `+(t.startTime+t.duration-(t.styleAndLayoutStart||t.startTime+t.duration)).toFixed(0)+` ms`}}).observe({type:`long-animation-frame`,buffered:!1})}catch{}e.autoPause=!1,e.startRun(`standard`);let g=n=>{let r=e.run;r&&(r.debug.autopilot=!0,r.debug.god=!0),s||(s=n,c=n);let h=n-c;c=n;let _=(n-s)/1e3,v=e.debugState();if(r&&v.phase===`play`&&_>3&&h>0&&h<250){let t=r.plan.biomes[v.sector??0]??`other`;(a[t]??={d:[]}).d.push(h),o.push(h),h>f&&(f=h,p=`${t}, ${Math.round(v.s??0)} m into the sector, ${Math.round(_)} s into the run`),u=Math.min(u,e.renderer.scale)}let y=Object.keys(a),b=_>240||y.length>=3&&y.every(e=>a[e].d.length>700);if(n-l>1e3||b){l=n;let r=e.renderer.canvas;t.textContent=`RAILBREAKER BENCH ${b?`DONE`:Math.floor(_)+` s`}  (60 fps budget = 16.7 ms)\nGPU ${i}\ncanvas ${r.width}x${r.height}  render scale now ${e.renderer.scale.toFixed(2)}  lowest ${u.toFixed(2)}${e.renderer.lite?`  LITE shading`:``}  dpr ${window.devicePixelRatio}\n`+d(`ALL`,o)+`
`+y.map(e=>d(e,a[e].d)).join(`
`)+(f>34?`\nworst frame ${f.toFixed(0)} ms: ${p}`:``)+(m?`  |  `+m:``)+(b?``:`
runs until canyon, rail-yard and foundry are each sampled`)}b||requestAnimationFrame(g)};requestAnimationFrame(g)}var p=`attached`,m=1e3,h=1001,g=1002,_=1003,v=1004,y=1005,b=1006,x=1007,S=1008,C=1009,w=1010,T=1011,E=1012,D=1013,O=1014,k=1015,A=1016,ee=1017,te=1018,ne=1020,re=35902,j=35899,ie=1021,ae=1022,oe=1023,se=1026,ce=1027,le=1028,ue=1029,de=1030,fe=1031,pe=1033,me=33776,he=33777,ge=33778,_e=33779,ve=35840,ye=35841,be=35842,xe=35843,Se=36196,Ce=37492,we=37496,Te=37488,Ee=37489,De=37490,Oe=37491,ke=37808,Ae=37809,je=37810,Me=37811,Ne=37812,Pe=37813,Fe=37814,Ie=37815,Le=37816,M=37817,Re=37818,ze=37819,Be=37820,N=37821,Ve=36492,P=36494,F=36495,He=36283,Ue=36284,We=36285,Ge=36286,Ke=2300,qe=2301,Je=2302,Ye=2303,Xe=2400,Ze=2401,Qe=2402,$e=3200,et=`srgb`,tt=`srgb-linear`,nt=`linear`,rt=`srgb`,it=7680,at=35044,ot=35048,st=2e3;function ct(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function lt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ut(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function dt(){let e=ut(`canvas`);return e.style.display=`block`,e}var ft={};function pt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function mt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=mt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=mt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function ht(...e){let t=e.join(` `);t in ft||(ft[t]=!0,I(...e))}function gt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var _t={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},vt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},yt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),bt=Math.PI/180,xt=180/Math.PI;function St(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yt[e&255]+yt[e>>8&255]+yt[e>>16&255]+yt[e>>24&255]+`-`+yt[t&255]+yt[t>>8&255]+`-`+yt[t>>16&15|64]+yt[t>>24&255]+`-`+yt[n&63|128]+yt[n>>8&255]+`-`+yt[n>>16&255]+yt[n>>24&255]+yt[r&255]+yt[r>>8&255]+yt[r>>16&255]+yt[r>>24&255]).toLowerCase()}function R(e,t,n){return Math.max(t,Math.min(n,e))}function Ct(e,t){return(e%t+t)%t}function wt(e,t,n){return(1-n)*e+n*t}function Tt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Et(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Dt(e,t){if(t.constructor===Float32Array)return e;let n=Et(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Ot(e,t){if(t.constructor===Float32Array)return e;let n=Et(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var z=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(R(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return At.copy(this).projectOnVector(e),this.sub(At)}reflect(e){return this.sub(At.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(R(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},At=new B,jt=new kt,V=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return ht(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Mt.makeScale(e,t)),this}rotate(e){return ht(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Mt.makeRotation(-e)),this}translate(e,t){return ht(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Mt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mt=new V,Nt=new V().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pt=new V().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ft(){let e={enabled:!0,workingColorSpace:tt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Lt(e.r),e.g=Lt(e.g),e.b=Lt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Rt(e.r),e.g=Rt(e.g),e.b=Rt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?nt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[tt]:{primaries:t,whitePoint:r,transfer:nt,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:et},outputColorSpaceConfig:{drawingBufferColorSpace:et}},[et]:{primaries:t,whitePoint:r,transfer:rt,toXYZ:Nt,fromXYZ:Pt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:et}}}),e}var It=Ft();function Lt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Rt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var zt,Bt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zt===void 0&&(zt=ut(`canvas`)),zt.width=e.width,zt.height=e.height;let t=zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ut(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Lt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Lt(t[e]/255)*255):t[e]=Lt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Vt=0,Ht=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Vt++}),this.uuid=St(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Ut(r[t].image)):e.push(Ut(r[t]))}else e=Ut(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Ut(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Bt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Wt=0,Gt=new B,Kt=class e extends vt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=h,i=h,a=b,o=S,s=oe,c=C,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wt++}),this.uuid=St(),this.name=``,this.source=new Ht(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new z(0,0),this.repeat=new z(1,1),this.center=new z(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new V,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Gt).x}get height(){return this.source.getSize(Gt).y}get depth(){return this.source.getSize(Gt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case m:e.x-=Math.floor(e.x);break;case h:e.x=e.x<0?0:1;break;case g:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case m:e.y-=Math.floor(e.y);break;case h:e.y=e.y<0?0:1;break;case g:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kt.DEFAULT_IMAGE=null,Kt.DEFAULT_MAPPING=300,Kt.DEFAULT_ANISOTROPY=1;var qt=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=R(this.x,e.x,t.x),this.y=R(this.y,e.y,t.y),this.z=R(this.z,e.z,t.z),this.w=R(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=R(this.x,e,t),this.y=R(this.y,e,t),this.z=R(this.z,e,t),this.w=R(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(R(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jt=class extends vt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:b,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Kt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:b,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ht(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Yt=class extends Jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Xt=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Zt=class extends Kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_,this.minFilter=_,this.wrapR=h,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},H=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qt.setFromMatrixColumn(e,0).length(),i=1/Qt.setFromMatrixColumn(e,1).length(),a=1/Qt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(en,e,tn)}lookAt(e,t,n){let r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),nn.crossVectors(n,an),nn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),nn.crossVectors(n,an)),nn.normalize(),rn.crossVectors(an,nn),r[0]=nn.x,r[4]=rn.x,r[8]=an.x,r[1]=nn.y,r[5]=rn.y,r[9]=an.y,r[2]=nn.z,r[6]=rn.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],te=r[14],ne=r[3],re=r[7],j=r[11],ie=r[15];return i[0]=a*x+o*T+s*k+c*ne,i[4]=a*S+o*E+s*A+c*re,i[8]=a*C+o*D+s*ee+c*j,i[12]=a*w+o*O+s*te+c*ie,i[1]=l*x+u*T+d*k+f*ne,i[5]=l*S+u*E+d*A+f*re,i[9]=l*C+u*D+d*ee+f*j,i[13]=l*w+u*O+d*te+f*ie,i[2]=p*x+m*T+h*k+g*ne,i[6]=p*S+m*E+h*A+g*re,i[10]=p*C+m*D+h*ee+g*j,i[14]=p*w+m*O+h*te+g*ie,i[3]=_*x+v*T+y*k+b*ne,i[7]=_*S+v*E+y*A+b*re,i[11]=_*C+v*D+y*ee+b*j,i[15]=_*w+v*O+y*te+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Qt.set(r[0],r[1],r[2]).length(),o=Qt.set(r[4],r[5],r[6]).length(),s=Qt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),$t.copy(this);let c=1/a,l=1/o,u=1/s;return $t.elements[0]*=c,$t.elements[1]*=c,$t.elements[2]*=c,$t.elements[4]*=l,$t.elements[5]*=l,$t.elements[6]*=l,$t.elements[8]*=u,$t.elements[9]*=u,$t.elements[10]*=u,t.setFromRotationMatrix($t),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=st,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=st,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qt=new B,$t=new H,en=new B(0,0,0),tn=new B(1,1,1),nn=new B,rn=new B,an=new B,on=new H,sn=new kt,cn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(R(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-R(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(R(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-R(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(R(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-R(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return on.makeRotationFromQuaternion(e),this.setFromRotationMatrix(on,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sn.setFromEuler(this),this.setFromQuaternion(sn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER=`XYZ`;var ln=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},un=0,dn=new B,fn=new kt,pn=new H,mn=new B,hn=new B,gn=new B,_n=new kt,vn=new B(1,0,0),yn=new B(0,1,0),bn=new B(0,0,1),xn={type:`added`},Sn={type:`removed`},Cn={type:`childadded`,child:null},wn={type:`childremoved`,child:null},Tn=class e extends vt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:un++}),this.uuid=St(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new cn,r=new kt,i=new B(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new H},normalMatrix:{value:new V}}),this.matrix=new H,this.matrixWorld=new H,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ln,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.multiply(fn),this}rotateOnWorldAxis(e,t){return fn.setFromAxisAngle(e,t),this.quaternion.premultiply(fn),this}rotateX(e){return this.rotateOnAxis(vn,e)}rotateY(e){return this.rotateOnAxis(yn,e)}rotateZ(e){return this.rotateOnAxis(bn,e)}translateOnAxis(e,t){return dn.copy(e).applyQuaternion(this.quaternion),this.position.add(dn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vn,e)}translateY(e){return this.translateOnAxis(yn,e)}translateZ(e){return this.translateOnAxis(bn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?mn.copy(e):mn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),hn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(hn,mn,this.up):pn.lookAt(mn,hn,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),fn.setFromRotationMatrix(pn),this.quaternion.premultiply(fn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sn),wn.child=e,this.dispatchEvent(wn),wn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xn),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,e,gn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hn,_n,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Tn.DEFAULT_UP=new B(0,1,0),Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=class extends Tn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Dn={type:`move`},On=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},kn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},jn={h:0,s:0,l:0};function Mn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var U=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=It.workingColorSpace){if(e=Ct(e,1),t=R(t,0,1),n=R(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Mn(i,r,e+1/3),this.g=Mn(i,r,e),this.b=Mn(i,r,e-1/3)}return It.colorSpaceToWorking(this,r),this}setStyle(e,t=et){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=et){let n=kn[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lt(e.r),this.g=Lt(e.g),this.b=Lt(e.b),this}copyLinearToSRGB(e){return this.r=Rt(e.r),this.g=Rt(e.g),this.b=Rt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=et){return It.workingToColorSpace(Nn.copy(this),e),Math.round(R(Nn.r*255,0,255))*65536+Math.round(R(Nn.g*255,0,255))*256+Math.round(R(Nn.b*255,0,255))}getHexString(e=et){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,r=Nn.g,i=Nn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=et){It.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,r=Nn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL(jn);let n=wt(An.h,jn.h,t),r=wt(An.s,jn.s,t),i=wt(An.l,jn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new U;U.NAMES=kn;var Pn=class extends Tn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Fn=new B,In=new B,Ln=new B,Rn=new B,zn=new B,Bn=new B,Vn=new B,Hn=new B,Un=new B,Wn=new B,Gn=new qt,Kn=new qt,qn=new qt,Jn=class e{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Fn.subVectors(e,t),r.cross(Fn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Fn.subVectors(r,t),In.subVectors(n,t),Ln.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(In),s=Fn.dot(Ln),c=In.dot(In),l=In.dot(Ln),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Rn)!==null&&Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Rn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Rn.x),s.addScaledVector(a,Rn.y),s.addScaledVector(o,Rn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Gn.setScalar(0),Kn.setScalar(0),qn.setScalar(0),Gn.fromBufferAttribute(e,t),Kn.fromBufferAttribute(e,n),qn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gn,i.x),a.addScaledVector(Kn,i.y),a.addScaledVector(qn,i.z),a}static isFrontFacing(e,t,n,r){return Fn.subVectors(n,t),In.subVectors(e,t),Fn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),Fn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;zn.subVectors(r,n),Bn.subVectors(i,n),Hn.subVectors(e,n);let s=zn.dot(Hn),c=Bn.dot(Hn);if(s<=0&&c<=0)return t.copy(n);Un.subVectors(e,r);let l=zn.dot(Un),u=Bn.dot(Un);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(zn,a);Wn.subVectors(e,i);let f=zn.dot(Wn),p=Bn.dot(Wn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Bn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Vn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Vn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(zn,a).addScaledVector(Bn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Zn):Zn.fromBufferAttribute(r,t),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Qn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Qn.copy(e.boundingBox)),Qn.applyMatrix4(e.matrixWorld),this.union(Qn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),or.subVectors(this.max,ar),$n.subVectors(e.a,ar),er.subVectors(e.b,ar),tr.subVectors(e.c,ar),nr.subVectors(er,$n),rr.subVectors(tr,er),ir.subVectors($n,tr);let t=[0,-nr.z,nr.y,0,-rr.z,rr.y,0,-ir.z,ir.y,nr.z,0,-nr.x,rr.z,0,-rr.x,ir.z,0,-ir.x,-nr.y,nr.x,0,-rr.y,rr.x,0,-ir.y,ir.x,0];return!lr(t,$n,er,tr,or)||(t=[1,0,0,0,1,0,0,0,1],!lr(t,$n,er,tr,or))?!1:(sr.crossVectors(nr,rr),t=[sr.x,sr.y,sr.z],lr(t,$n,er,tr,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new B,new B,new B,new B,new B,new B,new B,new B],Zn=new B,Qn=new Yn,$n=new B,er=new B,tr=new B,nr=new B,rr=new B,ir=new B,ar=new B,or=new B,sr=new B,cr=new B;function lr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){cr.fromArray(e,a);let o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),s=t.dot(cr),c=n.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var ur=new B,dr=new z,fr=0,pr=class extends vt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=at,this.updateRanges=[],this.gpuType=k,this.version=0,this._normalizationScale=e===void 0?void 0:Et(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix4(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyNormalMatrix(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.transformDirection(e),this.setXYZ(t,ur.x,ur.y,ur.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ot(e,this.array):Math.round(e*t)}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gr=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=new Yn,vr=new B,yr=new B,br=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?_r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);let t=vr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(vr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(yr)),this.expandByPoint(vr.copy(e.center).sub(yr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=0,Sr=new H,Cr=new Tn,wr=new B,Tr=new Yn,Er=new Yn,Dr=new B,Or=class e extends vt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=St(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ct(e)?hr:mr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new V().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Sr.makeRotationFromQuaternion(e),this.applyMatrix4(Sr),this}rotateX(e){return Sr.makeRotationX(e),this.applyMatrix4(Sr),this}rotateY(e){return Sr.makeRotationY(e),this.applyMatrix4(Sr),this}rotateZ(e){return Sr.makeRotationZ(e),this.applyMatrix4(Sr),this}translate(e,t,n){return Sr.makeTranslation(e,t,n),this.applyMatrix4(Sr),this}scale(e,t,n){return Sr.makeScale(e,t,n),this.applyMatrix4(Sr),this}lookAt(e){return Cr.lookAt(e),Cr.updateMatrix(),this.applyMatrix4(Cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(this.boundingBox.min,Tr.min),this.boundingBox.expandByPoint(Dr),Dr.addVectors(this.boundingBox.max,Tr.max),this.boundingBox.expandByPoint(Dr)):(this.boundingBox.expandByPoint(Tr.min),this.boundingBox.expandByPoint(Tr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new B,1/0);else if(e){let n=this.boundingSphere.center;if(Tr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Er.setFromBufferAttribute(n),this.morphTargetsRelative?(Dr.addVectors(Tr.min,Er.min),Tr.expandByPoint(Dr),Dr.addVectors(Tr.max,Er.max),Tr.expandByPoint(Dr)):(Tr.expandByPoint(Er.min),Tr.expandByPoint(Er.max))}Tr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Dr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Dr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Dr.fromBufferAttribute(a,t),o&&(wr.fromBufferAttribute(e,t),Dr.add(wr)),r=Math.max(r,n.distanceToSquared(Dr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new pr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new B,s[e]=new B;let l=new B,u=new B,d=new B,f=new z,p=new z,m=new z,h=new B,g=new B;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new B,b=new B,x=new B,S=new B;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new B,i=new B,a=new B,o=new B,s=new B,c=new B,l=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dr.fromBufferAttribute(e,t),Dr.normalize(),e.setXYZ(t,Dr.x,Dr.y,Dr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},kr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=at,this.updateRanges=[],this.version=0,this.uuid=St()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ar(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Ar(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ar(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=St()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var jr=new B,Mr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Et(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyMatrix4(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.applyNormalMatrix(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jr.fromBufferAttribute(this,t),jr.transformDirection(e),this.setXYZ(t,jr.x,jr.y,jr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){pt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new pr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){pt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?Dt(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Ot(e,this.data.array):Math.round(e*t)}},Nr=new B,Pr=new B,Fr=new V,Ir=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Nr.subVectors(n,t).cross(Pr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Nr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fr.getNormalMatrix(e),r=this.coplanarPoint(Nr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lr=0,Rr=class extends vt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lr++}),this.uuid=St(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new U(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=it,this.stencilZFail=it,this.stencilZPass=it,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new U().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Ir().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new z().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new z().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},zr=class extends Rr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Vr=new B,Hr=new B,Ur=new B,Wr=new z,Gr=new z,Kr=new H,qr=new B,Jr=new B,Yr=new B,Xr=new z,Zr=new z,Qr=new z,$r=class extends Tn{constructor(e=new zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Br===void 0){Br=new Or;let e=new kr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute(`position`,new Mr(e,3,0,!1)),Br.setAttribute(`uv`,new Mr(e,2,3,!1))}this.geometry=Br,this.material=e,this.center=new z(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&L(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Hr.setFromMatrixScale(this.matrixWorld),Kr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-Ur.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;ei(qr.set(-.5,-.5,0),Ur,a,Hr,r,i),ei(Jr.set(.5,-.5,0),Ur,a,Hr,r,i),ei(Yr.set(.5,.5,0),Ur,a,Hr,r,i),Xr.set(0,0),Zr.set(1,0),Qr.set(1,1);let o=e.ray.intersectTriangle(qr,Jr,Yr,!1,Vr);if(o===null&&(ei(Jr.set(-.5,.5,0),Ur,a,Hr,r,i),Zr.set(0,1),o=e.ray.intersectTriangle(qr,Yr,Jr,!1,Vr),o===null))return;let s=e.ray.origin.distanceTo(Vr);s<e.near||s>e.far||t.push({distance:s,point:Vr.clone(),uv:Jn.getInterpolation(Vr,qr,Jr,Yr,Xr,Zr,Qr,new z),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ei(e,t,n,r,i,a){Wr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Gr.copy(Wr):(Gr.x=a*Wr.x-i*Wr.y,Gr.y=i*Wr.x+a*Wr.y),e.copy(t),e.x+=Gr.x,e.y+=Gr.y,e.applyMatrix4(Kr)}var ti=new B,ni=new B,ri=new B,ii=new B,ai=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ni.copy(e).add(t).multiplyScalar(.5),ri.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(ni);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ri),o=ii.dot(this.direction),s=-ii.dot(ri),c=ii.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(ni).addScaledVector(ri,d),f}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),r=ti.dot(ti)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,te,ne;if(y>=b&&y>=x?(w=s,D=u,A=p,ne=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,te=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,te=_)):b>=x?(w=c,D=d,A=m,ne=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,te=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,te=v)):(w=l,D=f,A=h,ne=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,te=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,te=g)),w===0)return null;let re=S/w,j=C/w,ie=1/w,ae=T-re*D,oe=E-j*D,se=O-re*A,ce=k-j*A,le=ee-re*ne,ue=te-j*ne,de=le*ce-ue*se,fe=ae*ue-oe*le,pe=se*oe-ce*ae;if(r){if(de<0||fe<0||pe<0)return null}else if((de<0||fe<0||pe<0)&&(de>0||fe>0||pe>0))return null;let me=de+fe+pe;if(me===0)return null;let he=ie*(de*D+fe*A+pe*ne);return(me>0?he<0:he>0)?null:this.at(he/me,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends Rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new U(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},si=new H,ci=new ai,li=new br,ui=new B,di=new B,fi=new B,pi=new B,mi=new B,hi=new B,gi=new B,_i=new B,vi=class extends Tn{constructor(e=new Or,t=new oi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){hi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(mi.fromBufferAttribute(s,e),a?hi.addScaledVector(mi,r):hi.addScaledVector(mi.sub(t),r))}t.add(hi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(i),ci.copy(e.ray).recast(e.near),li.containsPoint(ci.origin)===!1&&(ci.intersectSphere(li,ui)===null||ci.origin.distanceToSquared(ui)>(e.far-e.near)**2)||(si.copy(i).invert(),ci.copy(e.ray).applyMatrix4(si),(n.boundingBox===null||ci.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=bi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=bi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=bi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=bi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function yi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;_i.copy(s),_i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(_i);return l<n.near||l>n.far?null:{distance:l,point:_i.clone(),object:e}}function bi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,di),e.getVertexPosition(c,fi),e.getVertexPosition(l,pi);let u=yi(e,t,n,r,di,fi,pi,gi);if(u){let e=new B;Jn.getBarycoord(gi,di,fi,pi,e),i&&(u.uv=Jn.getInterpolatedAttribute(i,s,c,l,e,new z)),a&&(u.uv1=Jn.getInterpolatedAttribute(a,s,c,l,e,new z)),o&&(u.normal=Jn.getInterpolatedAttribute(o,s,c,l,e,new B),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new B,materialIndex:0};Jn.getNormal(di,fi,pi,t.normal),u.face=t,u.barycoord=e}return u}var xi=new qt,Si=new qt,Ci=new qt,wi=new qt,Ti=new H,Ei=new B,Di=new br,Oi=new H,ki=new ai,Ai=class extends vi{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=p,this.bindMatrix=new H,this.bindMatrixInverse=new H,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ei),this.boundingBox.expandByPoint(Ei)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new br),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,Ei),this.boundingSphere.expandByPoint(Ei)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(r),e.ray.intersectsSphere(Di)!==!1&&(Oi.copy(r).invert(),ki.copy(e.ray).applyMatrix4(Oi),(this.boundingBox===null||ki.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,ki)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new qt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():I(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Si.fromBufferAttribute(r.attributes.skinIndex,e),Ci.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(xi.copy(t),t.set(0,0,0,0)):(xi.set(t.x,t.y,t.z,1),t.set(0,0,0)),xi.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Ci.getComponent(e);if(r!==0){let i=Si.getComponent(e);Ti.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(wi.copy(xi).applyMatrix4(Ti),r)}}return t.isVector4&&(t.w=xi.w),t.applyMatrix4(this.bindMatrixInverse)}},ji=class extends Tn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},Mi=class extends Kt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=_,l=_,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ni=new H,Pi=new H,Fi=class e{constructor(e=[],t=[]){this.uuid=St(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){I(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new H)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new H;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:Pi;Ni.multiplyMatrices(i,t[r]),Ni.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Mi(t,e,e,oe,k);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(I(`Skeleton: No bone found with UUID:`,r),i=new ji),this.bones.push(i),this.boneInverses.push(new H().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},Ii=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Li=new H,Ri=new H,zi=[],Bi=new Yn,Vi=new H,Hi=new vi,Ui=new br,Wi=class extends vi{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Vi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Bi.copy(e.boundingBox).applyMatrix4(Li),this.boundingBox.union(Bi)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Li),Ui.copy(e.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(Ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Hi.geometry=this.geometry,Hi.material=this.material,Hi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ui.copy(this.boundingSphere),Ui.applyMatrix4(n),e.ray.intersectsSphere(Ui)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Li),Ri.multiplyMatrices(n,Li),Hi.matrixWorld=Ri,Hi.raycast(e,zi);for(let e=0,n=zi.length;e<n;e++){let n=zi[e];n.instanceId=i,n.object=this,t.push(n)}zi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mi(new Float32Array(r*this.count),r,this.count,le,k));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Gi=new br,Ki=new z(.5,.5),qi=new B,Ji=class{constructor(e=new Ir,t=new Ir,n=new Ir,r=new Ir,i=new Ir,a=new Ir){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=st,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476+Ki.distanceTo(e.center),Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(qi.x=r.normal.x>0?e.max.x:e.min.x,qi.y=r.normal.y>0?e.max.y:e.min.y,qi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Yi=new H,Xi=class e{constructor(){this.coordinateSystem=st,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];Yi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Ji),n[e].setFromProjectionMatrix(Yi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ji),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Zi=class extends Rr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new U(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qi=new H,$i=new ai,ea=new br,ta=new B,na=class extends Tn{constructor(e=new Or,t=new Zi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ea.radius+=i,e.ray.intersectsSphere(ea)===!1)return;Qi.copy(r).invert(),$i.copy(e.ray).applyMatrix4(Qi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);ta.fromBufferAttribute(l,n),ra(ta,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)ta.fromBufferAttribute(l,a),ra(ta,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ra(e,t,n,r,i,a,o){let s=$i.distanceSqToPoint(e);if(s<n){let n=new B;$i.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ia=class extends Kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},aa=class extends Kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},oa=class extends Kt{constructor(e,t,n=O,r,i,a,o=_,s=_,c,l=se,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ht(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},sa=class extends oa{constructor(e,t=O,n=301,r,i,a=_,o=_,s,c=se){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ca=class extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},la=class e extends Or{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new B;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ua=class e extends Or{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},da=class e extends Or{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new B,d=new B,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function fa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(ma(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(ma(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function pa(e){let t={};for(let n=0;n<e.length;n++){let r=fa(e[n]);for(let e in r)t[e]=r[e]}return t}function ma(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ha(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function ga(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:It.workingColorSpace}var _a={clone:fa,merge:pa},va=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ya=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ba=class extends Rr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=va,this.fragmentShader=ya,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ha(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new U().setHex(r.value);break;case`v2`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new qt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new H().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},xa=class extends ba{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Sa=class extends Rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=$e,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ca=class extends Rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function wa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Ta(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Ea=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Da=class extends Ea{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xe,endingEnd:Xe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ze:i=e,o=2*t-n;break;case Qe:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ze:a=e,s=2*n-t;break;case Qe:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Aa=class extends Ea{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Na(n,t,g,y,r);i[p]=ja(x,o,_,b,m)}return i}};function ja(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ma(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Na(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ja(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ma(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Pa=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=wa(t,this.TimeBufferType),this.values=wa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:wa(e.times,Array),values:wa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Ta(e.settings)&&(n.settings={inTangents:wa(e.settings.inTangents,Array),outTangents:wa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ke:t=this.InterpolantFactoryMethodDiscrete;break;case qe:t=this.InterpolantFactoryMethodLinear;break;case Je:t=this.InterpolantFactoryMethodSmooth;break;case Ye:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ke;case this.InterpolantFactoryMethodLinear:return qe;case this.InterpolantFactoryMethodSmooth:return Je;case this.InterpolantFactoryMethodBezier:return Ye}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Ta(this.settings)&&(Fa(this.settings.inTangents,e),Fa(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Ta(this.settings)&&(Ia(this.settings.inTangents,e),Ia(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&lt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Je,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Ta(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Fa(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Ia(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Pa.prototype.ValueTypeName=``,Pa.prototype.TimeBufferType=Float32Array,Pa.prototype.ValueBufferType=Float32Array,Pa.prototype.DefaultInterpolation=qe;var La=class extends Pa{constructor(e,t,n){super(e,t,n)}};La.prototype.ValueTypeName=`bool`,La.prototype.ValueBufferType=Array,La.prototype.DefaultInterpolation=Ke,La.prototype.InterpolantFactoryMethodLinear=void 0,La.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ra.prototype.ValueTypeName=`color`;var za=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};za.prototype.ValueTypeName=`number`;var Ba=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)kt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Va=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ba(this.times,this.values,this.getValueSize(),e)}};Va.prototype.ValueTypeName=`quaternion`,Va.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Pa{constructor(e,t,n){super(e,t,n)}};Ha.prototype.ValueTypeName=`string`,Ha.prototype.ValueBufferType=Array,Ha.prototype.DefaultInterpolation=Ke,Ha.prototype.InterpolantFactoryMethodLinear=void 0,Ha.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends Pa{constructor(e,t,n,r){super(e,t,n,r)}};Ua.prototype.ValueTypeName=`vector`;var Wa={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(Ga(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!Ga(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function Ga(e){try{let t=e.slice(e.indexOf(`:`)+1);return new URL(t).protocol===`blob:`}catch{return!1}}var Ka=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},qa=class{constructor(e){this.manager=e===void 0?Ka:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},this.priority=`auto`,this.cache=`default`,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qa.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ja=new WeakMap,Ya=class extends qa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=Wa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=Ja.get(a);e===void 0&&(e=[],Ja.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=ut(`img`);function s(){l(),t&&t(this);let n=Ja.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}Ja.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),Wa.remove(`image:${e}`);let n=Ja.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}Ja.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wa.add(`image:${e}`,o),i.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Xa=class extends qa{constructor(e){super(e)}load(e,t,n,r){let i=new Kt,a=new Ya(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},Za=new B,Qa=new kt,$a=new B,eo=class extends Tn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new H,this.projectionMatrix=new H,this.projectionMatrixInverse=new H,this.coordinateSystem=st,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,Qa,$a),$a.x===1&&$a.y===1&&$a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Qa,$a.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Za,Qa,$a),$a.x===1&&$a.y===1&&$a.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,Qa,$a.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},to=new B,no=new z,ro=new z,io=class extends eo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xt*2*Math.atan(Math.tan(bt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){to.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(to.x,to.y).multiplyScalar(-e/to.z),to.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(to.x,to.y).multiplyScalar(-e/to.z)}getViewSize(e,t){return this.getViewBounds(e,no,ro),t.subVectors(ro,no)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ao=class extends eo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},oo=-90,so=1,co=class extends Tn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new io(oo,so,e,t);r.layers=this.layers,this.add(r);let i=new io(oo,so,e,t);i.layers=this.layers,this.add(i);let a=new io(oo,so,e,t);a.layers=this.layers,this.add(a);let o=new io(oo,so,e,t);o.layers=this.layers,this.add(o);let s=new io(oo,so,e,t);s.layers=this.layers,this.add(s);let c=new io(oo,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},lo=class extends io{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},uo=`\\[\\]\\.:\\/`,fo=RegExp(`[\\[\\]\\.:\\/]`,`g`),po=`[^\\[\\]\\.:\\/]`,mo=`[^`+uo.replace(`\\.`,``)+`]`,ho=`((?:WC+[\\/:])*)`.replace(`WC`,po),go=`(WCOD+)?`.replace(`WCOD`,mo),_o=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,po),vo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,po),yo=RegExp(`^`+ho+go+_o+vo+`$`),bo=[`material`,`materials`,`bones`,`map`],xo=class{constructor(e,t,n){let r=n||So.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},So=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(fo,``)}static parseTrackName(e){let t=yo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);bo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};So.Composite=xo,So.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},So.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},So.prototype.GetterByBindingType=[So.prototype._getValue_direct,So.prototype._getValue_array,So.prototype._getValue_arrayElement,So.prototype._getValue_toArray],So.prototype.SetterByBindingTypeAndVersioning=[[So.prototype._setValue_direct,So.prototype._setValue_direct_setNeedsUpdate,So.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[So.prototype._setValue_array,So.prototype._setValue_array_setNeedsUpdate,So.prototype._setValue_array_setMatrixWorldNeedsUpdate],[So.prototype._setValue_arrayElement,So.prototype._setValue_arrayElement_setNeedsUpdate,So.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[So.prototype._setValue_fromArray,So.prototype._setValue_fromArray_setNeedsUpdate,So.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function Co(e,t,n,r){let i=wo(r);switch(n){case ie:return e*t;case le:return e*t/i.components*i.byteLength;case ue:return e*t/i.components*i.byteLength;case de:return e*t*2/i.components*i.byteLength;case fe:return e*t*2/i.components*i.byteLength;case ae:return e*t*3/i.components*i.byteLength;case oe:return e*t*4/i.components*i.byteLength;case pe:return e*t*4/i.components*i.byteLength;case me:case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ye:case xe:return Math.max(e,16)*Math.max(t,8)/4;case ve:case be:return Math.max(e,8)*Math.max(t,8)/2;case Se:case Ce:case Te:case Ee:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case we:case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ke:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ae:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case je:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Me:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ne:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Pe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Le:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case M:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Re:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ze:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Be:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case N:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ve:case P:case F:return Math.ceil(e/4)*Math.ceil(t/4)*16;case He:case Ue:return Math.ceil(e/4)*Math.ceil(t/4)*8;case We:case Ge:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function wo(e){switch(e){case C:case w:return{byteLength:1,components:1};case E:case T:case A:return{byteLength:2,components:1};case ee:case te:return{byteLength:2,components:4};case O:case D:case k:return{byteLength:4,components:1};case re:case j:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function To(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Eo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var W={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new U(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new U(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new U(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new U(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},Do={basic:{uniforms:pa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:W.meshbasic_vert,fragmentShader:W.meshbasic_frag},lambert:{uniforms:pa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},envMapIntensity:{value:1}}]),vertexShader:W.meshlambert_vert,fragmentShader:W.meshlambert_frag},phong:{uniforms:pa([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new U(0)},specular:{value:new U(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:W.meshphong_vert,fragmentShader:W.meshphong_frag},standard:{uniforms:pa([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new U(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag},toon:{uniforms:pa([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new U(0)}}]),vertexShader:W.meshtoon_vert,fragmentShader:W.meshtoon_frag},matcap:{uniforms:pa([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:W.meshmatcap_vert,fragmentShader:W.meshmatcap_frag},points:{uniforms:pa([G.points,G.fog]),vertexShader:W.points_vert,fragmentShader:W.points_frag},dashed:{uniforms:pa([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:W.linedashed_vert,fragmentShader:W.linedashed_frag},depth:{uniforms:pa([G.common,G.displacementmap]),vertexShader:W.depth_vert,fragmentShader:W.depth_frag},normal:{uniforms:pa([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:W.meshnormal_vert,fragmentShader:W.meshnormal_frag},sprite:{uniforms:pa([G.sprite,G.fog]),vertexShader:W.sprite_vert,fragmentShader:W.sprite_frag},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:W.background_vert,fragmentShader:W.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:W.backgroundCube_vert,fragmentShader:W.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:W.cube_vert,fragmentShader:W.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:W.equirect_vert,fragmentShader:W.equirect_frag},distance:{uniforms:pa([G.common,G.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:W.distance_vert,fragmentShader:W.distance_frag},shadow:{uniforms:pa([G.lights,G.fog,{color:{value:new U(0)},opacity:{value:1}}]),vertexShader:W.shadow_vert,fragmentShader:W.shadow_frag}};Do.physical={uniforms:pa([Do.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new V},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new U(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new U(0)},specularColor:{value:new U(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:W.meshphysical_vert,fragmentShader:W.meshphysical_frag};var Oo={r:0,b:0,g:0},ko=new H,Ao=new V;Ao.set(-1,0,0,0,1,0,0,0,1);function jo(e,t,n,r,i,a){let o=new U(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new vi(new la(1,1,1),new ba({name:`BackgroundCubeMaterial`,uniforms:fa(Do.backgroundCube.uniforms),vertexShader:Do.backgroundCube.vertexShader,fragmentShader:Do.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ko.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ao),l.material.toneMapped=It.getTransfer(i.colorSpace)!==rt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new vi(new ua(2,2),new ba({name:`BackgroundMaterial`,uniforms:fa(Do.background.uniforms),vertexShader:Do.background.vertexShader,fragmentShader:Do.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=It.getTransfer(i.colorSpace)!==rt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Oo,ga(e)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Mo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function No(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Po(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&I(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Fo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ir,s=new V,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Io=class extends Yt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ia(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new la(5,5,5),i=new ba({name:`CubemapFromEquirect`,uniforms:fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new vi(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=b),new co(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Lo=256,Ro=3,zo=20,Bo=256,Vo=16,Ho=3,Uo=new B,Wo=new U,Go=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new co(1,10,null),this._boxMesh=new vi(new la(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Uo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Wo));let h=new co(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Lo,Tt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?Lo:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ko(e,!1,!1),n=Math.log2(e)-Ro;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ko(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Zo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Jo(),this._integrationMaterial=Yo());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Vo);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ho)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Bo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Xo());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Ko(e,t,n){return new Io(e,{minFilter:S,generateMipmaps:t,type:A,colorSpace:tt,depthBuffer:n})}function qo(e,t,n){return new ba({name:e,uniforms:t,vertexShader:W.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Jo(){return qo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Bo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Yo(){return qo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vo}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Xo(){return qo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${zo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Zo(){return qo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Qo(){return qo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $o(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Io(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Go(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Go(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function es(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ht(`WebGLRenderer: `+e+` extension not supported.`),t}}}function ts(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?hr:mr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ns(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function rs(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function is(e,t,n){let r=new WeakMap,i=new qt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Xt(h,p,m,u);g.type=k,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function as(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var os={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ss(e,t,n,r,i,a){let o=new Yt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Or;u.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new gr([0,2,0,0,2,0],2));let d=new xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new vi(u,d),p=new ao(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new Yt(t,n,{type:A,depthBuffer:!1,stencilBuffer:!1}),c=new Yt(t,n,{type:A,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new oa(t,n),a===!0&&(l.format=ce,l.type=ne)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},It.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=os[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var cs=new Kt,ls=new oa(1,1),us=new sa(1),ds=new Xt,fs=new Zt,ps=new ia,ms=[],hs=[],gs=new Float32Array(16),_s=new Float32Array(9),vs=new Float32Array(4);function ys(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ms[i];if(a===void 0&&(a=new Float32Array(i),ms[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function bs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function xs(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ss(e,t){let n=hs[t];n===void 0&&(n=new Int32Array(t),hs[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Cs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2fv(this.addr,t),xs(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bs(n,t))return;e.uniform3fv(this.addr,t),xs(n,t)}}function Es(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4fv(this.addr,t),xs(n,t)}}function Ds(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;vs.set(r),e.uniformMatrix2fv(this.addr,!1,vs),xs(n,r)}}function Os(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;_s.set(r),e.uniformMatrix3fv(this.addr,!1,_s),xs(n,r)}}function ks(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(bs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),xs(n,t)}else{if(bs(n,r))return;gs.set(r),e.uniformMatrix4fv(this.addr,!1,gs),xs(n,r)}}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2iv(this.addr,t),xs(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3iv(this.addr,t),xs(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4iv(this.addr,t),xs(n,t)}}function Ps(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Fs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bs(n,t))return;e.uniform2uiv(this.addr,t),xs(n,t)}}function Is(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bs(n,t))return;e.uniform3uiv(this.addr,t),xs(n,t)}}function Ls(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bs(n,t))return;e.uniform4uiv(this.addr,t),xs(n,t)}}function Rs(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function zs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Rs(ls):cs,n.setTexture2D(t||a,i)}function Bs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||fs,i)}function Vs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Rs(us):ps,n.setTextureCube(t||a,i)}function Hs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ds,i)}function Us(e){switch(e){case 5126:return Cs;case 35664:return ws;case 35665:return Ts;case 35666:return Es;case 35674:return Ds;case 35675:return Os;case 35676:return ks;case 5124:case 35670:return As;case 35667:case 35671:return js;case 35668:case 35672:return Ms;case 35669:case 35673:return Ns;case 5125:return Ps;case 36294:return Fs;case 36295:return Is;case 36296:return Ls;case 35678:case 36198:case 36298:case 36306:case 35682:return zs;case 35679:case 36299:case 36307:return Bs;case 35680:case 36300:case 36308:case 36293:return Vs;case 36289:case 36303:case 36311:case 36292:return Hs}}function Ws(e,t){e.uniform1fv(this.addr,t)}function Gs(e,t){let n=ys(t,this.size,2);e.uniform2fv(this.addr,n)}function Ks(e,t){let n=ys(t,this.size,3);e.uniform3fv(this.addr,n)}function qs(e,t){let n=ys(t,this.size,4);e.uniform4fv(this.addr,n)}function Js(e,t){let n=ys(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ys(e,t){let n=ys(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Xs(e,t){let n=ys(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Zs(e,t){e.uniform1iv(this.addr,t)}function Qs(e,t){e.uniform2iv(this.addr,t)}function $s(e,t){e.uniform3iv(this.addr,t)}function ec(e,t){e.uniform4iv(this.addr,t)}function tc(e,t){e.uniform1uiv(this.addr,t)}function nc(e,t){e.uniform2uiv(this.addr,t)}function rc(e,t){e.uniform3uiv(this.addr,t)}function ic(e,t){e.uniform4uiv(this.addr,t)}function ac(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Rs(ls):cs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function oc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||fs,a[e])}function sc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Rs(us):ps;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function cc(e,t,n){let r=this.cache,i=t.length,a=Ss(n,i);bs(r,a)||(e.uniform1iv(this.addr,a),xs(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ds,a[e])}function lc(e){switch(e){case 5126:return Ws;case 35664:return Gs;case 35665:return Ks;case 35666:return qs;case 35674:return Js;case 35675:return Ys;case 35676:return Xs;case 5124:case 35670:return Zs;case 35667:case 35671:return Qs;case 35668:case 35672:return $s;case 35669:case 35673:return ec;case 5125:return tc;case 36294:return nc;case 36295:return rc;case 36296:return ic;case 35678:case 36198:case 36298:case 36306:case 35682:return ac;case 35679:case 36299:case 36307:return oc;case 35680:case 36300:case 36308:case 36293:return sc;case 36289:case 36303:case 36311:case 36292:return cc}}var uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Us(t.type)}},dc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lc(t.type)}},fc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},pc=/(\w+)(\])?(\[|\.)?/g;function mc(e,t){e.seq.push(t),e.map[t.id]=t}function hc(e,t,n){let r=e.name,i=r.length;for(pc.lastIndex=0;;){let a=pc.exec(r),o=pc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){mc(n,l===void 0?new uc(s,e,t):new dc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new fc(s),mc(n,e)),n=e}}}var gc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);hc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function _c(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var vc=37297,yc=0;function bc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var xc=new V;function Sc(e){It._getMatrix(xc,It.workingColorSpace,e);let t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(It.getTransfer(e)){case nt:return[t,`LinearTransferOETF`];case rt:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Cc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+bc(e.getShaderSource(t),r)}return i}function wc(e,t){let n=Sc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Tc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ec(e,t){let n=Tc[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Dc=new B;function Oc(){return It.getLuminanceCoefficients(Dc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Dc.x.toFixed(4)}, ${Dc.y.toFixed(4)}, ${Dc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function kc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Mc).join(`
`)}function Ac(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function jc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Mc(e){return e!==``}function Nc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(e){return e.replace(Fc,Lc)}function Lc(e,t){let n=W[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Ic(n)}var Rc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(e){return e.replace(Rc,Bc)}function Bc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Vc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Hc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Uc(e){return Hc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Wc={302:`ENVMAP_MODE_REFRACTION`};function Gc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Wc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Kc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function qc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Kc[e.combine]||`ENVMAP_BLENDING_NONE`}function Jc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Uc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Gc(n),d=qc(n),f=kc(n),p=Ac(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Mc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Mc).join(`
`),g.length>0&&(g+=`
`)):(h=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Mc).join(`
`),g=[Vc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:W.tonemapping_pars_fragment,n.toneMapping===0?``:Ec(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,W.colorspace_pars_fragment,wc(`linearToOutputTexel`,n.outputColorSpace),Oc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Mc).join(`
`)),o=Ic(o),o=Nc(o,n),o=Pc(o,n),s=Ic(s),s=Nc(s,n),s=Pc(s,n),o=zc(o),s=zc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=_c(i,i.VERTEX_SHADER,v),x=_c(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Cc(i,b,`vertex`),n=Cc(i,x,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new gc(i,m),w=jc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,vc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Yc=0,Xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zc(e),t.set(e,n)),n}},Zc=class{constructor(e){this.id=Yc++,this.code=e,this.usedTimes=0}};function Qc(e){return e===1030||e===37490||e===36285}function $c(e,t,n,r,i,a){let o=new ln,s=new Xc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=Do[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),te=m.isInstancedMesh===!0,ne=m.isBatchedMesh===!0,re=!!i.map,j=!!i.matcap,ie=!!b,ae=ie&&b.isPMREMTexture===!0,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.diffuseRoughness>0,_e=i.dispersion>0,ve=i.retroreflectivity>0,ye=i.iridescence>0,be=i.sheen>0,xe=i.transmission>0,Se=me&&!!i.anisotropyMap,Ce=he&&!!i.clearcoatMap,we=he&&!!i.clearcoatNormalMap,Te=he&&!!i.clearcoatRoughnessMap,Ee=ge&&!!i.diffuseRoughnessMap,De=ye&&!!i.iridescenceMap,Oe=ye&&!!i.iridescenceThicknessMap,ke=be&&!!i.sheenColorMap,Ae=be&&!!i.sheenRoughnessMap,je=!!i.specularMap,Me=!!i.specularColorMap,Ne=!!i.specularIntensityMap,Pe=xe&&!!i.transmissionMap,Fe=xe&&!!i.thicknessMap,Ie=!!i.gradientMap,Le=!!i.alphaMap,M=i.alphaTest>0,Re=!!i.alphaHash,ze=!!i.extensions,Be=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Be=e.toneMapping);let N=ae?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ve={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:ne,batchingColor:ne&&m._colorsTexture!==null,instancing:te,instancingColor:te&&m.instanceColor!==null,instancingMorph:te&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:re,matcap:j,envMap:ie,envMapMode:ie&&b.mapping,envMapPMREM:ae,envMapMaxLod:ae?N.length-1:null,envMapSize:ae?N[0].width:null,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Qc(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:Se,clearcoat:he,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,diffuseRoughness:ge,diffuseRoughnessMap:Ee,dispersion:_e,retroreflection:ve,iridescence:ye,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:be,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:Me,specularIntensityMap:Ne,transmission:xe,transmissionMap:Pe,thicknessMap:Fe,gradientMap:Ie,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Le,alphaTest:M,alphaHash:Re,combine:i.combine,mapUv:re&&p(i.map.channel),aoMapUv:oe&&p(i.aoMap.channel),lightMapUv:se&&p(i.lightMap.channel),bumpMapUv:ce&&p(i.bumpMap.channel),normalMapUv:le&&p(i.normalMap.channel),displacementMapUv:ue&&p(i.displacementMap.channel),emissiveMapUv:de&&p(i.emissiveMap.channel),metalnessMapUv:fe&&p(i.metalnessMap.channel),roughnessMapUv:pe&&p(i.roughnessMap.channel),anisotropyMapUv:Se&&p(i.anisotropyMap.channel),clearcoatMapUv:Ce&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:we&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ee&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:De&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(i.sheenRoughnessMap.channel),specularMapUv:je&&p(i.specularMap.channel),specularColorMapUv:Me&&p(i.specularColorMap.channel),specularIntensityMapUv:Ne&&p(i.specularIntensityMap.channel),transmissionMapUv:Pe&&p(i.transmissionMap.channel),thicknessMapUv:Fe&&p(i.thicknessMap.channel),alphaMapUv:Le&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||me),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(re||Le),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Be,decodeVideoTexture:re&&i.map.isVideoTexture===!0&&It.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&It.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:ze&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(ze&&i.extensions.multiDraw===!0||ne)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ve.vertexUv1s=c.has(1),Ve.vertexUv2s=c.has(2),Ve.vertexUv3s=c.has(3),c.clear(),Ve}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=Do[t];n=_a.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Jc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function el(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function tl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function rl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||tl),r.length>1&&r.sort(t||nl),i.length>1&&i.sort(t||nl)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function il(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new rl,e.set(t,[i])):n>=r.length?(i=new rl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new B,color:new U};break;case`SpotLight`:n={position:new B,direction:new B,color:new U,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new B,color:new U,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new B,skyColor:new U,groundColor:new U};break;case`RectAreaLight`:n={color:new U,position:new B,halfWidth:new B,halfHeight:new B}}return e[t.id]=n,n}}}function ol(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var sl=0;function cl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ll(e){let t=new al,n=ol(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new B);let i=new B,a=new H,o=new H;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(cl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=sl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function ul(e){let t=new ll(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function dl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ul(e),t.set(n,[a])):r>=i.length?(a=new ul(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var fl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ml=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],hl=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],gl=new H,_l=new B,vl=new B;function yl(e,t,n){let r=new Ji,i=new z,a=new z,o=new qt,s=new Sa,c=new Ca,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ba({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:fl,fragmentShader:pl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Or;m.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new vi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){I(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new Yt(i.x,i.y,{format:de,type:A,minFilter:b,magFilter:b,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new oa(i.x,i.y,k),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=se,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_}else l.isPointLight?(d.map=new Io(i.x),d.map.depthTexture=new sa(i.x,O)):(d.map=new Yt(i.x,i.y),d.map.depthTexture=new oa(i.x,i.y,O)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=se,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=b,d.map.depthTexture.magFilter=b):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let v=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),_l.setFromMatrixPosition(l.matrixWorld),e.position.copy(_l),vl.copy(e.position),vl.add(ml[t]),e.up.copy(hl[t]),e.lookAt(vl),e.updateMatrixWorld(),n.makeTranslation(-_l.x,-_l.y,-_l.z),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(gl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,v,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new Yt(i.x,i.y,{format:de,type:A}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=x(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)S(l[e],i,a,o,s,c)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function bl(e,t){function n(){let t=!1,n=new qt,r=null,i=new qt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=_t[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,te=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,re=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),ne=re>=2):(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),ne=re>=1);let ie=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new qt().fromArray(oe),le=new qt().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h!==t&&(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(pe(e.BLEND),g=!1);else if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==k&&(ne&&e.lineWidth(t),k=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+te-1),ie!==t&&(e.activeTexture(t),ie=t)}function De(t,n,r){r===void 0&&(r=ie===null?e.TEXTURE0+te-1:ie);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(ie!==r&&(e.activeTexture(r),ie=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=ae[ie];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function M(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Be(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function N(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Ve(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function P(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function F(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new U(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:Le,texImage3D:M,pixelStorei:ze,getParameter:Re,updateUBOMapping:Ve,uniformBlockBinding:P,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:Be,viewport:N,reset:F}}function xl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new z,u=new WeakMap,d=new Set,f,p=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):ut(`canvas`)}function D(e,t,n){let r=1,i=F(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=E(n,a));let o=t?E(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function O(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function A(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?nt:It.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function te(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function ne(e,t){return O(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=new WeakRef(e);r.get(e).__ref=t,C.add(t),w.register(e,t,t)}function j(e){let t=r.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ie(e){oe(e.target)}function ae(e){se(e.target)}function oe(e){e.removeEventListener(`dispose`,ie),j(e),ue(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function se(e){e.removeEventListener(`dispose`,ae),j(e),fe(e)}function le(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?se(t):oe(t))}C.clear(),d.clear()}function ue(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&de(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function de(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function fe(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&oe(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let pe=0;function me(){pe=0}function he(){return pe}function ge(e){pe=e}function _e(){let e=pe;return e>=i.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),pe+=1,e}function ve(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ye(t,i){let a=r.get(t);if(t.isVideoTexture&&Ve(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ae(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function be(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ae(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function xe(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ae(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function Se(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?je(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let Ce={[m]:e.REPEAT,[h]:e.CLAMP_TO_EDGE,[g]:e.MIRRORED_REPEAT},we={[_]:e.NEAREST,[v]:e.NEAREST_MIPMAP_NEAREST,[y]:e.NEAREST_MIPMAP_LINEAR,[b]:e.LINEAR,[x]:e.LINEAR_MIPMAP_NEAREST,[S]:e.LINEAR_MIPMAP_LINEAR},Te={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Ee(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,Ce[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,Ce[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,Ce[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,we[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,we[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,Te[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function De(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ie),re(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ve(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&de(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function Oe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function ke(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=Oe(n.start,r.width,4),c=Oe(t.start,r.width,4);n.start<=i+1&&a===c&&Oe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ae(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=De(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=It.getPrimaries(It.workingColorSpace),r=o.colorSpace===``?null:It.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=D(o.image,!1,i.maxTextureSize);t=P(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=ee(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);Ee(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=ne(o,t);if(o.isDepthTexture)m=te(o.format===ce,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&ke(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(y){if(o.layerUpdates.size>0){let t=Co(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y){if(o.layerUpdates.size>0){let i=Co(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v){if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=F(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=F(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);O(o)&&o.mipmapsAutoUpdate===!0&&k(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function je(t,o,s){if(o.image.length!==6)return;let c=De(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=It.getPrimaries(It.workingColorSpace),r=o.colorSpace===``?null:It.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=D(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=P(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=ee(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=ne(o,h);Ee(e.TEXTURE_CUBE_MAP,o);let C;if(o.isDepthTexture){if(v=te(o.format===ce,o.type),b){if(y)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=F(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}O(o)&&o.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Me(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Be(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ne(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=te(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=ee(o.internalFormat,c,l,o.normalized,o.colorSpace);N(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Be(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Be(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Pe(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?Se(i.depthTexture,0):ye(i.depthTexture,0);let u=c.__webglTexture,d=Be(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)N(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Fe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Pe(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Pe(i.__webglFramebuffer[0],t,0):Pe(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ne(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ne(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ie(t,n,i){let a=r.get(t);n!==void 0&&Me(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Fe(t)}function Le(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,ae),re(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&N(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=ee(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Be(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ne(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),Ee(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Me(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);O(i)?k(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),Ee(c,a),Me(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),O(a)&&k(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),Ee(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Me(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Me(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);O(i)?k(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&Fe(t)}function M(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(O(a)&&a.mipmapsAutoUpdate===!0){let t=A(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),k(t),n.unbindTexture()}}}let Re=[];function ze(t){if(t.samples>0){if(N(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Re.length=0,Re.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Re.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Be(e){return Math.min(i.maxSamples,e.samples)}function N(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ve(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function P(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(It.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function F(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=_e,this.resetTextureUnits=me,this.getTextureUnits=he,this.setTextureUnits=ge,this.setTexture2D=ye,this.setTexture2DArray=be,this.setTexture3D=xe,this.setTextureCube=Se,this.rebindTextures=Ie,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=M,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=N,this.dispose=le}function Sl(e,t){function n(n,r=``){let i,a=It.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Cl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ca(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ba({vertexShader:Cl,fragmentShader:wl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vi(new ua(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},El=class extends vt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Tl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new z,w=null,T=null,E=new io;E.viewport=new qt;let D=new io;D.viewport=new qt;let k=[E,D],A=new lo,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new On,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new On,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new On,b[e]=t),t.getHandSpace()};function re(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(S.width,S.height,!1),T!==null){let e=T.camera;e.fov=T.fov,e.zoom=T.zoom,e.updateProjectionMatrix(),T=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ce:se,a=_.stencil?ne:O);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Yt(d.textureWidth,d.textureHeight,{format:oe,type:C,depthTexture:new oa(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Yt(f.framebufferWidth,f.framebufferHeight,{format:oe,type:C,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function ae(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=D.near=E.near=t,A.far=D.far=E.far=n,(ee!==A.near||te!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ee=A.near,te=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,D.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ae(A,i);for(let e=0;e<a.length;e++)ae(a[e],i);A.projectionMatrix.copy(E.projectionMatrix),A.projectionMatrixInverse.copy(E.projectionMatrixInverse),T===null&&e.isPerspectiveCamera&&(T={camera:e,fov:e.fov,zoom:e.zoom}),le(e,A,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=xt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new io,o.layers.enable(n),o.viewport=new qt,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ca,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let fe=new To;fe.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},Dl=new H,Ol=new V;Ol.set(-1,0,0,0,1,0,0,0,1);function kl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ga(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Dl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Ol),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Al(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var jl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ml=null;function Nl(){return Ml===null&&(Ml=new Mi(jl,16,16,de,A),Ml.name=`DFG_LUT`,Ml.minFilter=b,Ml.magFilter=b,Ml.wrapS=h,Ml.wrapT=h,Ml.generateMipmaps=!1,Ml.needsUpdate=!0),Ml}var Pl=class{constructor(e={}){let{canvas:t=dt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=C}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([pe,fe,ue]),g=new Set([C,O,E,ne,ee,te]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,w=[],T=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let k=this,re=!1,j=null,ie=null,ae=null,oe=null;this._outputColorSpace=et;let se=0,ce=0,le=null,de=-1,me=null,he=new qt,ge=new qt,_e=null,ve=new U(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new qt(0,0,be,xe),Ee=new qt(0,0,be,xe),De=!1,Oe=new Ji,ke=new Xi,Ae=!1,je=!1,Me=new H,Ne=new B,Pe=new qt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Le(){return le===null?Se:1}let M=n;function Re(e,n){return t.getContext(e,n)}let ze,Be,N,Ve,P,F,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,tt,nt,rt,it,at;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,ft,!1),M===null){let t=`webgl2`;if(M=Re(t,e),M===null)throw Re(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ot()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),L(`WebGLRenderer: `+e.message),e}function ot(){ze=new es(M),ze.init(),rt=new Sl(M,ze),Be=new Po(M,ze,e,rt),N=new bl(M,ze),Be.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),ie=M.createFramebuffer(),ae=M.createFramebuffer(),oe=M.createFramebuffer(),Ve=new rs(M),P=new el,F=new xl(M,ze,N,P,Be,rt,Ve),He=new $o(k),Ue=new Eo(M),it=new Mo(M,Ue),We=new ts(M,Ue,Ve,it),Ge=new as(M,We,Ue,it,Ve),$e=new is(M,Be,F),Xe=new Fo(P),Ke=new $c(k,He,ze,Be,it,Xe),qe=new kl(k,P),Je=new il,Ye=new dl(ze),Qe=new jo(k,He,N,Ge,p,s),Ze=new yl(k,Ge,Be),at=new Al(M,Ve,Be,N),tt=new No(M,ze,Ve),nt=new ns(M,ze,Ve),Ve.programs=Ke.programs,k.capabilities=Be,k.extensions=ze,k.properties=P,k.renderLists=Je,k.shadowMap=Ze,k.state=N,k.info=Ve}m!==1009&&(D=new ss(m,t.width,t.height,o,r,i));let ct=new El(k,M);this.xr=ct,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=ze.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){ct.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}D.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(he)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(he.copy(Te).multiplyScalar(Le()).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Le()).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(le!==null){let t=le.texture.format;e=h.has(t)}if(e){let e=le.texture.type,t=g.has(e),n=Qe.getClearColor(),r=Qe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),j=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,ft,!1),Qe.dispose(),Je.dispose(),Ye.dispose(),F.dispose(),P.dispose(),He.dispose(),Ge.dispose(),We.dispose(),it.dispose(),at.dispose(),Ke.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,xt),ct.removeEventListener(`sessionend`,St),R.stop()};function lt(e){e.preventDefault(),pt(`WebGLRenderer: Context Lost.`),re=!0}function ut(){pt(`WebGLRenderer: Context Restored.`),re=!1;let e=Ve.autoReset,t=Ze.enabled,n=Ze.autoUpdate,r=Ze.needsUpdate,i=Ze.type;ot(),Ve.autoReset=e,Ze.enabled=t,Ze.autoUpdate=n,Ze.needsUpdate=r,Ze.type=i}function ft(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function mt(e){let t=e.target;t.removeEventListener(`dispose`,mt),ht(t)}function ht(e){_t(e),P.remove(e)}function _t(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Fe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=V(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=We.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;it.setup(i,r,s,n,c);let h,g=tt;if(c!==null&&(h=Ue.get(c),g=nt,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Le()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Le()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh){if(ze.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ue.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function vt(e,t,n,r){j!==null&&e.isNodeMaterial&&j.setObject(r,e),Ae===!0&&Xe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,z(e,t,r),e.side=0,e.needsUpdate=!0,z(e,t,r),e.side=2):z(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),j!==null&&j.renderStart(e,t,n),x=Ye.get(n),x.init(t),T.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),j!==null&&j.updateLights(x.state.lightsArray),je=this.localClippingEnabled,Ae=Xe.init(this.clippingPlanes,je),Ae===!0&&Xe.setGlobalState(this.clippingPlanes,t),j!==null&&Ze.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];vt(o,n,t,e),r.add(o)}else vt(i,n,t,e),r.add(i)}}),x=T.pop(),j!==null&&j.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=P.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}ze.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let yt=null;function bt(e){yt&&yt(e)}function xt(){R.stop()}function St(){R.start()}let R=new To;R.setAnimationLoop(bt),typeof self<`u`&&R.setContext(self),this.setAnimationLoop=function(e){yt=e,ct.setAnimationLoop(e),e===null?R.stop():R.start()},ct.addEventListener(`sessionstart`,xt),ct.addEventListener(`sessionend`,St),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;j!==null&&j.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=D!==null&&(le===null||n)&&D.begin(k,le);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(k,e,t,le),x=Ye.get(e,T.length),x.init(t),x.state.textureUnits=F.getTextureUnits(),T.push(x),Me.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ke.setFromArrayCamera(t):Oe.setFromProjectionMatrix(Me,st,t.reversedDepth),je=this.localClippingEnabled,Ae=Xe.init(this.clippingPlanes,je),b=Je.get(e,w.length),b.init(),w.push(b),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=k.xr.getDepthSensingMesh();e!==null&&Ct(e,t,-1/0,k.sortObjects)}Ct(e,t,0,k.sortObjects),b.finish(),j!==null&&j.updateLights(x.state.lightsArray),k.sortObjects===!0&&b.sort(Ce,we),Ie=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ie&&Qe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Xe.beginShadows();let i=x.state.shadowsArray;if(Ze.render(i,e,t),Ae===!0&&Xe.endShadows(),(r&&D.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Ie&&Qe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];wt(b,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Ie&&Qe.render(e),wt(b,e,t)}le!==null&&ce===0&&(F.updateMultisampleRenderTarget(le),F.updateRenderTargetMipmap(le)),r&&D.end(k),e.isScene===!0&&e.onAfterRender(k,e,t),it.resetDefaultState(),de=-1,me=null,T.pop(),T.length>0?(x=T[T.length-1],F.setTextureUnits(x.state.textureUnits),Ae===!0&&Xe.setGlobalState(k.clippingPlanes,x.state.camera)):x=null,w.pop(),b=w.length>0?w[w.length-1]:null,j!==null&&j.renderEnd()};function Ct(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ke:Oe;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Pe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Me);let i=Ge.update(e),a=e.material;a.visible&&b.push(e,i,a,n,Pe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ke:Oe;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Pe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Pe.copy(e.boundingSphere.center)),Pe.applyMatrix4(e.matrixWorld).applyMatrix4(Me)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,Pe.z,s,t)}}else a.visible&&b.push(e,i,a,n,Pe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ct(i[e],t,n,r)}function wt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),Ae===!0&&Xe.setGlobalState(k.clippingPlanes,n),r&&N.viewport(he.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=ze.has(`EXT_color_buffer_half_float`)||ze.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new Yt(1,1,{generateMipmaps:!0,type:e?A:C,minFilter:S,samples:Math.max(4,Be.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||he;a.setSize(o.z*k.transmissionResolutionScale,o.w*k.transmissionResolutionScale);let s=k.getRenderTarget(),c=k.getActiveCubeFace(),l=k.getActiveMipmapLevel();k.setRenderTarget(a),k.getClearColor(ve),ye=k.getClearAlpha(),ye<1&&k.setClearColor(16777215,.5),k.clear(),Ie&&Qe.render(n);let u=k.toneMapping;k.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),Ae===!0&&Xe.setGlobalState(k.clippingPlanes,r),Et(e,n,r),F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a),ze.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a))}k.setRenderTarget(s,c,l),k.setClearColor(ve,ye),d!==void 0&&(r.viewport=d),k.toneMapping=u}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){j!==null&&i.isNodeMaterial&&j.setObject(e,i),e.onBeforeRender(k,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(k,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,k.renderBufferDirect(n,t,r,i,e,a),i.side=2):k.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(k,t,n,r,i,a)}function Ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function z(e,t,n){t.isScene!==!0&&(t=Fe);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=He.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,mt),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return jt(e,s),d}else s.uniforms=Ke.getUniforms(e),j!==null&&e.isNodeMaterial&&j.build(e,n,s),e.onBeforeCompile(s,k),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Xe.uniform),jt(e,s),r.needsLights=Nt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ot(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function kt(e,t,n,r,i){let a=P.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=z(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function At(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=gc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function jt(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function V(e,t,n,r,i){t.isScene!==!0&&(t=Fe),F.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=le===null?k.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:It.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=He.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(h=k.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),b=x.state.lights;if(Ae===!0&&(je===!0||e!==me)){let t=e===me&&r.id===de;Xe.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Xe.numPlanes||v.numIntersection!==Xe.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ot(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?kt(r,t,i,s,h):z(r,t,i),j&&r.isNodeMaterial&&j.onUpdateProgram(r,w,v));let T=!1,E=!1,D=!1,O=w.getUniforms(),A=v.uniforms;if(N.useProgram(w.program)&&(T=!0,E=!0,D=!0),r.id!==de&&(de=r.id,E=!0),T||me!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(M,`projectionMatrix`,e.projectionMatrix),O.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(M,Ne.setFromMatrixPosition(e.matrixWorld)),Be.logarithmicDepthBuffer&&O.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),me!==e&&(me=e,E=!0,D=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&O.setValue(M,`sunShadowMap`,b.state.sunShadowMap,F),b.state.directionalShadowMap.length>0&&O.setValue(M,`directionalShadowMap`,b.state.directionalShadowMap,F),b.state.spotShadowMap.length>0&&O.setValue(M,`spotShadowMap`,b.state.spotShadowMap,F),b.state.pointShadowMap.length>0&&O.setValue(M,`pointShadowMap`,b.state.pointShadowMap,F)),i.isSkinnedMesh){O.setOptional(M,i,`bindMatrix`),O.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(M,`boneTexture`,e.boneTexture,F))}i.isBatchedMesh&&(O.setOptional(M,i,`batchingTexture`),O.setValue(M,`batchingTexture`,i._matricesTexture,F),O.setOptional(M,i,`batchingIdTexture`),O.setValue(M,`batchingIdTexture`,i._indirectTexture,F),O.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(M,`batchingColorTexture`,i._colorsTexture,F));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&$e.update(i,n,w),(E||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,O.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=Nl()),E){if(O.setValue(M,`toneMappingExposure`,k.toneMappingExposure),v.needsLights&&Mt(A,D),a&&r.fog===!0&&qe.refreshFogUniforms(A,a),qe.refreshMaterialUniforms(A,r,Se,xe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;A.probesSH.value=e.textures,A.probesMin.value=e.min,A.probesMax.value=e.max,A.probesResolution.value=e.resolution}gc.upload(M,At(v),A,F)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(gc.upload(M,At(v),A,F),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(M,`center`,i.center),O.setValue(M,`modelViewMatrix`,i.modelViewMatrix),O.setValue(M,`normalMatrix`,i.normalMatrix),O.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];at.update(n,w),at.bind(n,w)}}return w}function Mt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Nt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){le=e,se=t,ce=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(he),N.scissor(ge),N.setScissorTest(_e),de=-1;return}if(o.__webglFramebuffer===void 0)F.setupRenderTarget(e);else if(o.__hasExternalTextures)F.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);F.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&F.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,he.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else he.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ie),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(he),N.scissor(ge),N.setScissorTest(_e),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}de=-1};function Pt(e){let t=P.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Be.textureFormatReadable(e.format),t.__typeReadable=Be.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let u=Pt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,rt.convert(c),rt.convert(l),a)}finally{let e=le===null?null:P.get(le).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s);let d=Pt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,rt.convert(l),rt.convert(u),0),M.bindBuffer(M.PIXEL_PACK_BUFFER,null);let p=le===null?null:P.get(le).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,p);let m=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await gt(M,m,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,f),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.bindBuffer(M.PIXEL_PACK_BUFFER,null),M.deleteBuffer(f),M.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;F.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=rt.convert(t.format),_=rt.convert(t.type),v;t.isData3DTexture?(F.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(F.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(F.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,ae),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,oe);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&F.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?F.setTextureCube(e,0):e.isData3DTexture?F.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?F.setTexture2DArray(e,0):F.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){se=0,ce=0,le=null,N.reset(),it.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return st}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}},Fl=[`hero`,`boss`,`drone`,`turret`,`bulwark`,`roller`,`claw`,`spire`,`mesa`,`tower`,`smelter`,`load`,`stack`],Il=new Set([`spire`,`mesa`,`tower`,`smelter`,`load`,`stack`]),Ll=new Map;function Rl(e){return Ll.get(e)??null}function zl(e){let t=new DataView(e);if(t.getUint32(0,!0)!==827146834)throw Error(`not an rbm file`);let n=t.getUint32(4,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(e,8,n))),i=8+n,{v:a,i:o,off:s}=r,c=new Uint16Array(e.slice(i+s.pos,i+s.pos+a*6)),l=new Uint16Array(e.slice(i+s.uv,i+s.uv+a*4)),u=new Float32Array(a*3),d=new Float32Array(a*2);for(let e=0;e<3;e++){let t=r.bmin[e],n=(r.bmax[e]-t)/65535;for(let r=0;r<a;r++)u[r*3+e]=t+c[r*3+e]*n}for(let e=0;e<2;e++){let t=r.uvMin[e],n=(r.uvMax[e]-t)/65535;for(let r=0;r<a;r++)d[r*2+e]=t+l[r*2+e]*n}let f=new Or;return f.setAttribute(`position`,new pr(u,3)),f.setAttribute(`normal`,new pr(new Int8Array(e.slice(i+s.nrm,i+s.nrm+a*3)),3,!0)),f.setAttribute(`uv`,new pr(d,2)),f.setIndex(new pr(new Uint16Array(e.slice(i+s.idx,i+s.idx+o*2)),1)),s.joints!=null&&s.weights!=null&&(f.setAttribute(`skinIndex`,new pr(new Uint16Array(new Uint8Array(e,i+s.joints,a*4)),4)),f.setAttribute(`skinWeight`,new pr(new Uint8Array(e.slice(i+s.weights,i+s.weights+a*4)),4,!0))),f.computeBoundingSphere(),f.computeBoundingBox(),{header:r,geo:f}}async function Bl(e,t){let n=Il.has(e)?fetch(`./models/${e}-lo.rbm`,{signal:t}).then(e=>e.ok?e.arrayBuffer():null).then(e=>e?zl(e).geo:null).catch(()=>null):Promise.resolve(null),r=await fetch(`./models/${e}.rbm`,{signal:t});if(!r.ok)throw Error(`${e}.rbm: ${r.status}`);let{header:i,geo:a}=zl(await r.arrayBuffer()),[o,s]=await Promise.all([new Xa().loadAsync(`./models/${e}.webp`),n]);t.aborted?(a.dispose(),s?.dispose(),o.dispose()):(o.flipY=!1,o.colorSpace=``,o.wrapS=o.wrapT=m,o.minFilter=S,o.magFilter=b,o.generateMipmaps=!0,o.anisotropy=4,o.needsUpdate=!0,Ll.set(e,{name:e,geo:a,tex:o,bones:i.bones,min:new B().fromArray(i.bmin),max:new B().fromArray(i.bmax),lo:s}))}async function Vl(e=9e3){if(typeof location<`u`&&new URLSearchParams(location.search).get(`models`)===`0`)return;let t=new AbortController,n=0,r=Promise.allSettled(Fl.map(e=>Bl(e,t.signal).catch(n=>{t.signal.aborted||console.warn(`[models] ${e} unavailable, using the procedural model`,n)})));await Promise.race([r,new Promise(r=>{n=window.setTimeout(()=>{t.abort(),r()},e)})]),window.clearTimeout(n)}var Hl=null,Ul=null,Wl=null,Gl=null,Kl=null,ql=null,Jl=null,Yl=null,Xl=.7,Zl=.9,Ql=`none`,$l=0,eu=1,tu=24,nu=4,ru=0,iu=-1,au=-1,ou=(e,t,n)=>Math.min(n,Math.max(t,e)),su=e=>440*2**((e-69)/12),cu=()=>Hl;function K(e,t,n,r,i,a=0,o=1){let s=cu().createOscillator();return s.type=e,s.frequency.setValueAtTime(t*o,r),n!==t&&s.frequency.exponentialRampToValueAtTime(Math.max(1,n*o),r+i),a&&(s.detune.value=a),s}function lu(e,t,n,r){let i=cu().createOscillator();return i.type=e,t.forEach((e,t)=>i.frequency.setValueAtTime(e,n+t*r)),i}function uu(){let e=cu().createBufferSource();return e.buffer=Yl,e.loop=!0,e}function q(e,t,n=.7,r=0){let i=cu().createBiquadFilter();return i.type=e,i.frequency.value=t,i.Q.value=n,i.gain.value=r,i}function du(e,t,n,r,i){e.setValueAtTime(t,r),e.exponentialRampToValueAtTime(Math.max(1,n),r+i)}function fu(e){let t=cu().createGain();return t.gain.value=e,t}function J(...e){for(let t=0;t<e.length-1;t++)e[t].connect(e[t+1]);return e}function pu(e){let t=new Float32Array(512);for(let n=0;n<512;n++)t[n]=e(n*2/511-1);return t}var mu=null;function hu(e){let t=cu().createWaveShaper();return t.curve=e,t}function gu(){return mu||=pu(e=>Math.tanh(e*4)),hu(mu)}function _u(e,t,n,r){let i=0,a=()=>{for(let t of e)try{t.disconnect()}catch{}r&&r()};for(let r of e)(r instanceof OscillatorNode||r instanceof AudioBufferSourceNode)&&(i++,r.onended=()=>{--i===0&&a()},r instanceof AudioBufferSourceNode?r.start(t,Math.random()*.7):r.start(t),r.stop(t+n+.02));i===0&&a()}function vu(e,t,n,r,i,a,o){let s=cu().createGain();s.gain.setValueAtTime(1e-4,t),s.gain.linearRampToValueAtTime(Math.max(2e-4,r),t+i),s.gain.exponentialRampToValueAtTime(1e-4,t+n),s.connect(e);let c=a(t,s);return c.push(s),_u(c,t,n,o),s}var yu=[];function bu(e,t,n,r,i={}){let a=Hl;if(!a||!Wl||a.state!==`running`||ru>=tu&&e<2)return;if(i.gun)for(;yu.length>=nu;){let e=yu.shift();e&&e.kill()}let o=a.currentTime+(i.delay||0);ru++;let s=null,c=vu(Wl,o,t,n,.003,r,()=>{if(ru=Math.max(0,ru-1),s){let e=yu.indexOf(s);e>=0&&yu.splice(e,1)}});i.gun&&(s={kill:()=>{let e=cu().currentTime;c.gain.cancelScheduledValues(e),c.gain.setTargetAtTime(0,e,.004)}},yu.push(s))}var xu=[],Su=[],Cu=0;function wu(e){if(!ql||!Jl)return;xu=[],Su=[];let t=[];if(e===`retro`)t=[hu(pu(e=>Math.round(e*6)/6)),q(`bandpass`,1200,.7),fu(1.8)];else if(e===`glitch`){let e=fu(.5),n=cu().createOscillator();n.frequency.value=35;let r=fu(.5);n.connect(r),r.connect(e.gain),n.start(),Su.push(n),xu.push(n,r);let i=hu(pu(e=>Math.tanh(e*1.8)));t=[q(`highpass`,500),e,i,fu(1.6)]}else e===`mech`&&(t=[q(`lowshelf`,220,.7,9),q(`lowpass`,1600),hu(pu(e=>Math.tanh(e*8))),fu(.7)]);J(ql,...t,Jl),xu.push(...t)}function Tu(){if(ql)try{ql.disconnect()}catch{}for(let e of Su)try{e.stop()}catch{}for(let e of xu)try{e.disconnect()}catch{}xu=[],Su=[]}function Eu(e){Ql=e;let t=Hl;if(!t||!Jl)return;let n=++Cu,r=t.currentTime;Jl.gain.cancelScheduledValues(r),Jl.gain.setTargetAtTime(0,r,.006),setTimeout(()=>{if(n!==Cu||!Hl||!Jl)return;Tu(),wu(Ql);let e=Hl.currentTime;Jl.gain.cancelScheduledValues(e),Jl.gain.setTargetAtTime(1,e,.01)},40)}function Du(e,t){let n=Hl;if(!n||!Wl)return null;let r=n.createGain();r.gain.setValueAtTime(0,n.currentTime),r.gain.linearRampToValueAtTime(e,n.currentTime+.05),r.connect(Wl);let i=new Map,a=t(r,i);a.push(r);for(let e of a)e instanceof OscillatorNode?e.start():e instanceof AudioBufferSourceNode&&e.start(0,Math.random()*.7);return{g:r,nodes:a,set:i}}function Ou(e){let t=cu().currentTime;e.g.gain.cancelScheduledValues(t),e.g.gain.setTargetAtTime(0,t,.03),setTimeout(()=>{for(let t of e.nodes){if(t instanceof OscillatorNode||t instanceof AudioBufferSourceNode)try{t.stop()}catch{}try{t.disconnect()}catch{}}},220)}var ku=null,Au=null,ju=null,Mu=-100,Nu=e=>e.split(``).map(Number),Pu={hub:{bpm:96,prog:[0,-4,3,-2],kick:Nu(`2000000020000000`),snare:Nu(`0000000000000000`),hat:Nu(`0010001000100010`),stab:Nu(`0000000000000000`),bass:[0,Mu,Mu,Mu,Mu,Mu,Mu,Mu,7,Mu,Mu,Mu,Mu,Mu,Mu,Mu],lead:null,pad:!0,cutoff:900,lay:[.4,.6,0,0,1]},combat:{bpm:150,prog:[0,-4,3,-2],kick:Nu(`1000100010001001`),snare:Nu(`0000100000001000`),hat:Nu(`1010101010101010`),stab:Nu(`1001001010010010`),bass:[0,Mu,0,Mu,0,Mu,0,3,0,Mu,0,Mu,5,Mu,3,Mu],lead:null,pad:!1,cutoff:1400,lay:[1,1,.9,0,0]},adrenaline:{bpm:150,prog:[0,-4,3,-2],kick:Nu(`1000100110001001`),snare:Nu(`0000100000001001`),hat:Nu(`1112111211121112`),stab:Nu(`1001001010010010`),bass:[0,0,Mu,0,0,Mu,0,3,0,0,Mu,0,5,Mu,7,Mu],lead:[0,3,7,10,12,10,7,3,0,3,7,10,14,12,10,7],pad:!1,cutoff:2800,lay:[1,1,1,.8,0]},boss:{bpm:168,prog:[0,1,0,-2],kick:Nu(`1011101110111011`),snare:Nu(`0000100000001000`),hat:Nu(`1111111111111111`),stab:Nu(`1000010010000100`),bass:[0,Mu,0,1,0,Mu,0,1,0,Mu,3,Mu,1,Mu,0,Mu],lead:[0,1,7,8,12,8,7,1,0,1,7,8,13,12,8,7],pad:!1,cutoff:1800,lay:[1.1,1,1,.8,0]}},Fu=`off`,Iu=`off`,Lu=0,Ru=0,zu=0,Bu=[],Vu=.12;function Hu(e,t){Iu=e;let n=e===`off`?.2:.1,r=e===`off`?[0,0,0,0,0]:Pu[e].lay;Bu.forEach((e,i)=>{e.gain.cancelScheduledValues(Math.max(0,t-.01)),e.gain.setTargetAtTime(r[i],t,n)})}function Uu(e,t){vu(Bu[0],e,.24,.9*t,.002,(e,t)=>J(K(`sine`,160,42,e,.12),t).slice(0,1))}function Wu(e){vu(Bu[0],e,.16,.5,.002,(e,t)=>{let n=uu(),r=q(`bandpass`,2200,.8),i=K(`triangle`,220,150,e,.1),a=fu(.5);return J(n,r,t),J(i,a,t),[n,r,i,a]})}function Gu(e,t){vu(Bu[0],e,t?.2:.045,t?.2:.22,.001,(e,t)=>{let n=uu(),r=q(`highpass`,7500,.9);return J(n,r,t),[n,r]})}function Ku(e,t,n,r){vu(Bu[1],e,n,.3,.004,(e,i)=>{let a=K(`sawtooth`,su(t),su(t),e,n),o=K(`sine`,su(t-12),su(t-12),e,n),s=fu(.8),c=q(`lowpass`,Math.min(900,r*.5),1.2);return J(a,c,i),J(o,s,i),[a,c,o,s]})}function qu(e,t,n,r){vu(Bu[2],e,n,.16,.004,(e,i)=>{let a=K(`sawtooth`,su(t),su(t),e,n,8),o=K(`sawtooth`,su(t),su(t),e,n,-8),s=K(`sawtooth`,su(t+7),su(t+7),e,n,4),c=fu(.5),l=gu(),u=q(`lowpass`,r,1);return J(a,c,l,u,i),o.connect(c),s.connect(c),[a,o,s,c,l,u]})}function Ju(e,t,n,r){vu(Bu[3],e,n,.12,.004,(e,i)=>{let a=K(`square`,su(t),su(t),e,n,5),o=q(`lowpass`,r+1200,.9);return J(a,o,i),[a,o]})}function Yu(e,t,n,r){let i=[t,t+(n?3:4),t+7];vu(Bu[4],e,r,.12,.35,(e,n)=>{let a=q(`lowpass`,1100,.5);a.connect(n);let o=[a];for(let n of i){let i=K(`triangle`,su(n),su(n),e,r,n===t?0:6);i.connect(a),o.push(i)}return o})}function Xu(e,t,n,r){let i=60/e.bpm/4,a=e.prog[r%e.prog.length];e.kick[t]&&Uu(n,e.kick[t]===1?1:.6),e.snare[t]&&Wu(n),e.hat[t]&&Gu(n,e.hat[t]===2);let o=e.bass[t];o!==Mu&&Ku(n,40+a+o,i*.9,e.cutoff),e.stab[t]&&qu(n,52+a,i*1.6,e.cutoff),e.lead&&Ju(n,64+a+e.lead[t],i*.85,e.cutoff),e.pad&&t===0&&Yu(n,52+a,a===0,i*16)}function Zu(){let e=Hl;if(!e||e.state!==`running`)return;let t=e.currentTime;if(Fu===`off`&&Iu!==`off`&&Hu(`off`,t),Iu===`off`){if(Fu===`off`)return;Lu=0,Ru=0,zu=t+.06,Hu(Fu,zu)}for(zu<t-.25&&(zu=t+.05);zu<t+Vu;){if(Lu===0&&Fu!==Iu){if(Fu===`off`)return;Hu(Fu,zu)}let e=Pu[Iu];Xu(e,Lu,zu,Ru),zu+=60/e.bpm/4,Lu=(Lu+1)%16,Lu===0&&Ru++}}function Qu(){let e=globalThis.AudioContext||globalThis.webkitAudioContext;if(!e)return;let t=new e({latencyHint:`interactive`});Hl=t;let n=t.createDynamicsCompressor();n.threshold.value=-14,n.knee.value=12,n.ratio.value=6,n.attack.value=.004,n.release.value=.15,Ul=t.createGain(),Ul.gain.value=.9,n.connect(Ul),Ul.connect(t.destination),Wl=t.createGain(),Wl.gain.value=Zl,Kl=t.createBiquadFilter(),Kl.type=`highshelf`,Kl.frequency.value=3500,Kl.gain.value=$l*1.2,ql=t.createGain(),Jl=t.createGain(),Wl.connect(Kl),Kl.connect(ql),Jl.connect(n),wu(Ql),Gl=t.createGain(),Gl.gain.value=Xl*.45,Gl.connect(n);for(let e=0;e<5;e++){let e=t.createGain();e.gain.value=0,e.connect(Gl),Bu.push(e)}Yl=t.createBuffer(1,t.sampleRate,t.sampleRate);let r=Yl.getChannelData(0);for(let e=0;e<r.length;e++)r[e]=Math.random()*2-1;setInterval(Zu,25)}var $u=e=>{try{e()}catch{}},Y={unlock(){$u(()=>{Hl||Qu(),Hl&&Hl.state!==`running`&&Hl.resume().catch(()=>{})})},setVolumes(e,t){$u(()=>{if(Xl=ou(e,0,1),Zl=ou(t,0,1),Hl&&Gl&&Wl){let e=Hl.currentTime;Gl.gain.setTargetAtTime(Xl*.45,e,.02),Wl.gain.setTargetAtTime(Zl,e,.02)}})},setMusicState(e){Fu=e},setVoiceFilter(e){$u(()=>Eu(e))},setIntensity(e){$u(()=>{$l=ou(Math.round(e),0,5),eu=1+.03*$l,Hl&&Kl&&Kl.gain.setTargetAtTime($l*1.2,Hl.currentTime,.05)})},suspend(){$u(()=>{Hl&&Hl.suspend().catch(()=>{})})},resume(){$u(()=>{Hl&&Hl.resume().catch(()=>{})})},shot(e){$u(()=>{let t=eu,n={gun:!0};switch(e){case`smg`:bu(1,.07,.34,(e,n)=>{let r=uu(),i=q(`highpass`,2500),a=K(`square`,900,300,e,.05,0,t),o=fu(.4);return J(r,i,n),J(a,o,n),[r,i,a,o]},n);break;case`shotgun`:bu(1,.32,.6,(e,n)=>{let r=uu(),i=q(`lowpass`,1800,.8);du(i.frequency,1800*t,200,e,.3);let a=K(`sine`,120,38,e,.25,0,t);return J(r,i,n),a.connect(n),[r,i,a]},n);break;case`arc`:bu(1,.2,.28,(e,n)=>{let r=K(`sawtooth`,2e3,180,e,.17,18,t),i=K(`sawtooth`,2e3,180,e,.17,-18,t),a=q(`highpass`,400);return r.connect(a),i.connect(a),a.connect(n),[r,i,a]},n);break;case`rocket`:bu(1,.4,.5,(e,n)=>{let r=uu(),i=q(`bandpass`,300,1.4);du(i.frequency,300*t,2600,e,.38);let a=K(`sine`,95,50,e,.2,0,t),o=fu(.7);return J(r,i,n),J(a,o,n),[r,i,a,o]},n);break;case`disc`:bu(1,.25,.3,(e,n)=>{let r=K(`sine`,1400,2200,e,.08,0,t),i=K(`sine`,2130,2130,e,.25,0,t),a=fu(.5),o=K(`triangle`,3270,3270,e,.25,0,t),s=fu(.3);return J(r,n),J(i,a,n),J(o,s,n),[r,i,a,o,s]},n);break;case`beam`:{let e=Hl?Hl.currentTime:0;if(e-au<.06)return;au=e,bu(0,.07,.2,(e,n)=>{let r=K(`sawtooth`,220,220,e,.07,0,t),i=q(`lowpass`,1200*t,1);return J(r,i,n),[r,i]},n);break}}})},hit(e){$u(()=>{if(!Hl)return;let t=Hl.currentTime;t-iu<.03||(iu=t,bu(1,e?.16:.07,e?.4:.3,(t,n)=>{let r=uu(),i=q(`bandpass`,3e3,1.5),a=K(`triangle`,e?1400:700,e?1400:500,t,.1),o=fu(.5);J(r,i,n),J(a,o,n);let s=[r,i,a,o];if(e){let e=K(`sine`,2100,2100,t,.15);e.connect(n),s.push(e)}return s}))})},kill(e){$u(()=>{let t=ou(Math.floor(e),0,7),n=[0,2,4,5,7,9,11,12][t],r=1.05-t/7*.1,i=523.25*2**(n/12)*r;bu(2,.35,.32,(e,t)=>{let n=K(`sine`,i,i,e,.35),r=K(`triangle`,i*2,i*2,e,.25),a=fu(.4);return J(n,t),J(r,a,t),[n,r,a]})})},explosion(e=!1){$u(()=>{let t=e?.4:.25;bu(2,t,e?.7:.5,(n,r)=>{let i=uu(),a=q(`lowpass`,1e3,.8);du(a.frequency,e?1400:1e3,70,n,t);let o=K(`sine`,e?90:120,30,n,t),s=fu(.9);return J(i,a,r),J(o,s,r),[i,a,o,s]})})},jump(e){$u(()=>{bu(1,e?.15:.12,.22,(t,n)=>{let r=K(`sine`,e?350:250,e?800:500,t,.12),i=uu(),a=q(`bandpass`,1500,1),o=fu(.15);return J(r,n),J(i,a,o,n),[r,i,a,o]})})},land(){$u(()=>{bu(1,.12,.35,(e,t)=>{let n=uu(),r=q(`lowpass`,450),i=K(`sine`,110,45,e,.1);return J(n,r,t),i.connect(t),[n,r,i]})})},slide(){$u(()=>{bu(0,.3,.2,(e,t)=>{let n=uu(),r=q(`bandpass`,1800,1.2);return du(r.frequency,1800,700,e,.3),J(n,r,t),[n,r]})})},footstep(e){$u(()=>{let t=(ou(e,10,24)-10)/14;bu(0,.06,.1+.14*t,(e,n)=>{let r=uu(),i=q(`lowpass`,500+700*t),a=K(`sine`,90+50*t,60+30*t,e,.05);return J(r,i,n),a.connect(n),[r,i,a]})})},grindStart(){$u(()=>{ku||=Du(.13,(e,t)=>{let n=cu().currentTime,r=K(`sawtooth`,120,120,n,0),i=K(`square`,181,181,n,0),a=q(`bandpass`,1800,3),o=fu(.6),s=uu(),c=q(`highpass`,4e3),l=fu(.35);return J(r,o,a,e),i.connect(o),J(s,c,l,e),t.set(`a`,r.frequency),t.set(`b`,i.frequency),t.set(`bp`,a.frequency),[r,i,o,a,s,c,l]})})},grindUpdate(e,t){$u(()=>{if(!ku||!Hl)return;let n=(.8+.6*((ou(e,15,24)-15)/9))*(t?1.25:1),r=Hl.currentTime;ku.set.get(`a`)?.setTargetAtTime(120*n,r,.05),ku.set.get(`b`)?.setTargetAtTime(181*n,r,.05),ku.set.get(`bp`)?.setTargetAtTime(1800*n,r,.05)})},grindStop(){$u(()=>{ku&&=(Ou(ku),null)})},jetpack(e){$u(()=>{e&&!Au?Au=Du(.2,e=>{let t=uu(),n=q(`bandpass`,700,.8),r=q(`lowpass`,1600);return J(t,n,r,e),[t,n,r]}):!e&&Au&&(Ou(Au),Au=null)})},overload(){$u(()=>{bu(2,.32,.4,(e,t)=>{let n=K(`sine`,600,2400,e,.2),r=K(`triangle`,1200,4800,e,.2),i=fu(.3),a=uu(),o=q(`highpass`,2e3),s=fu(.6);return J(n,t),J(r,i,t),J(a,o,s,t),[n,r,i,a,o,s]})})},reloadStart(){$u(()=>{bu(1,.12,.25,(e,t)=>{let n=K(`square`,200,420,e,.1),r=q(`lowpass`,1500);return J(n,r,t),[n,r]})})},reloadMiss(){$u(()=>{bu(1,.25,.28,(e,t)=>{let n=K(`sawtooth`,130,85,e,.22),r=q(`lowpass`,700);return J(n,r,t),[n,r]})})},bonk(){$u(()=>{bu(1,.2,.4,(e,t)=>{let n=K(`sine`,220,100,e,.18),r=uu(),i=q(`lowpass`,600),a=fu(.4);return n.connect(t),J(r,i,a,t),[n,r,i,a]})})},pickup(e){$u(()=>{let t=e===`cell`?[880,1320]:[523,659,784,1046];bu(1,e===`cell`?.16:.3,.28,(n,r)=>{let i=lu(e===`cell`?`sine`:`triangle`,t,n,e===`cell`?.07:.06);return i.connect(r),[i]})})},hurt(){$u(()=>{bu(2,.3,.5,(e,t)=>{let n=uu(),r=q(`lowpass`,1200);du(r.frequency,1200,300,e,.3);let i=K(`sawtooth`,200,80,e,.28),a=fu(.5);return J(n,r,t),J(i,a,t),[n,r,i,a]})})},heartbeat(e){$u(()=>{if(!e){ju&&=(clearInterval(ju),null);return}if(ju)return;let t=()=>{bu(2,.14,.5,(e,t)=>{let n=K(`sine`,75,45,e,.12),r=uu(),i=q(`lowpass`,220),a=fu(.15);return n.connect(t),J(r,i,a,t),[n,r,i,a]}),bu(2,.12,.38,(e,t)=>{let n=K(`sine`,62,40,e,.1);return n.connect(t),[n]},{delay:.18})};t(),ju=setInterval(t,6e4/110)})},telegraph(){$u(()=>{bu(2,.38,.3,(e,t)=>{let n=lu(`square`,[880,660,880,660],e,.1),r=q(`lowpass`,2500);return J(n,r,t),[n,r]})})},bossRoar(){$u(()=>{bu(2,.4,.6,(e,t)=>{let n=K(`sawtooth`,75,40,e,.4),r=K(`sawtooth`,79,38,e,.4),i=gu(),a=q(`lowpass`,900),o=uu(),s=q(`lowpass`,400),c=fu(.5);return n.connect(i),r.connect(i),J(i,a,t),J(o,s,c,t),[n,r,i,a,o,s,c]})})},lightning(){$u(()=>{bu(2,.35,.45,(e,t)=>{let n=uu(),r=q(`highpass`,1500),i=fu(0);for(let t=0;t<14;t++)i.gain.setValueAtTime(Math.random()<.5?1:.1,e+t*.022);let a=K(`sawtooth`,60,50,e,.35),o=fu(.4);return J(n,r,i,t),J(a,o,t),[n,r,i,a,o]})})},ui(e){$u(()=>{switch(e){case`tap`:bu(2,.05,.2,(e,t)=>{let n=K(`sine`,1200,1e3,e,.04);return n.connect(t),[n]});break;case`buy`:bu(2,.16,.25,(e,t)=>{let n=lu(`sine`,[880,1320],e,.06);return n.connect(t),[n]});break;case`deny`:bu(2,.14,.25,(e,t)=>{let n=K(`square`,160,120,e,.12),r=q(`lowpass`,800);return J(n,r,t),[n,r]});break;case`place`:bu(2,.12,.28,(e,t)=>{let n=K(`sine`,400,250,e,.1),r=uu(),i=q(`highpass`,3e3),a=fu(.2);return n.connect(t),J(r,i,a,t),[n,r,i,a]});break;case`unlock`:bu(2,.32,.28,(e,t)=>{let n=lu(`triangle`,[523,659,784,1046],e,.07);return n.connect(t),[n]});break;case`claim`:bu(2,.3,.28,(e,t)=>{let n=lu(`triangle`,[660,880,1320],e,.08),r=lu(`sine`,[1320,1760,2640],e,.08),i=fu(.3);return n.connect(t),J(r,i,t),[n,r,i]})}})},adrenalineUp(e){$u(()=>{let t=440*2**(ou(Math.round(e),0,5)*2/12);bu(2,.38,.35,(e,n)=>{let r=K(`sawtooth`,t*.5,t*3,e,.3),i=q(`lowpass`,3e3),a=lu(`sine`,[t,t*1.25,t*1.5],e,.09),o=fu(.6);return J(r,i,n),J(a,o,n),[r,i,a,o]})})},sectorClear(){$u(()=>{bu(2,.4,.34,(e,t)=>{let n=lu(`triangle`,[523,659,784,1046,1318],e,.07),r=lu(`sawtooth`,[262,330,392,523,659],e,.07),i=q(`lowpass`,1200),a=fu(.3);return n.connect(t),J(r,i,a,t),[n,r,i,a]})})},death(){$u(()=>{bu(2,.45,.5,(e,t)=>{let n=K(`sawtooth`,400,40,e,.42),r=q(`lowpass`,1500);du(r.frequency,1500,120,e,.42);let i=uu(),a=q(`lowpass`,500),o=fu(.4);return J(n,r,t),J(i,a,o,t),[n,r,i,a,o]})})}};function ed(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t^=t>>>15,t=Math.imul(t,2246822507),t^=t>>>13,t=Math.imul(t,3266489909),(t^t>>>16)>>>0}var td=class e{s;constructor(e){this.s=(typeof e==`string`?ed(e):e)>>>0}next(){let e=this.s+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+(t-e)*this.next()}int(e,t){return e+Math.floor(this.next()*(t-e+1))}chance(e){return this.next()<e}pick(e){return e[Math.floor(this.next()*e.length)]}shuffle(e){let t=e.slice();for(let e=t.length-1;e>0;e--){let n=Math.floor(this.next()*(e+1)),r=t[e];t[e]=t[n],t[n]=r}return t}fork(t){return new e(ed(t)^Math.floor(this.next()*4294967296))}};function nd(e=new Date){let t=String(e.getMonth()+1).padStart(2,`0`),n=String(e.getDate()).padStart(2,`0`);return`${e.getFullYear()}-${t}-${n}`}var rd=(e,t,n)=>e<t?t:e>n?n:e,id=(e,t,n)=>e+(t-e)*n,ad=(e,t,n)=>e<t?Math.min(t,e+n):Math.max(t,e-n);function od(){return{steer:0,targetX:null,jumpPressed:!1,jumpHeld:!1,slidePressed:!1,boost:!1,dashPressed:!1}}function sd(){return{speedMul:1,gravityMul:1,gravCap:t.gravMax,fuelMax:t.jetFuel,infiniteFuel:!1,jetpack:!0,slideCooldownAdd:0,grindMul:1,railLockout:t.railLockout,discMul:1,cape:!1,roller:!1,extraAirJumps:0}}function cd(e=sd()){return{x:0,y:0,s:0,vx:0,vy:0,speed:t.runSpeed,grounded:!0,mode:`run`,gravScale:t.gravStart,coyoteT:0,jumpBufT:0,bufferedInAir:!1,airJumps:1+e.extraAirJumps,jumpHoldT:0,slideT:-1,slideCdT:0,slideBufT:0,fuel:e.fuelMax,hovering:!1,rail:null,railLockT:0,rollerT:0,slamming:!1,dashT:0,zip:null,lastGroundS:0,events:[]}}function ld(e,n=1){let r=t.runSpeed*n,i=t.slidePeak*n;return e<=0?r:e<t.slidePeakT?id(r,i,e/t.slidePeakT):e>=t.slideEndT?r:id(i,r,(e-t.slidePeakT)/(t.slideEndT-t.slidePeakT))}function ud(e,n,r,i=t.gravMax){return n?Math.min(i,e+t.gravRamp*r):Math.min(e,i)}function dd(e,t,n){let r=e.pts,i=r.length/3,a=0;for(;a<i-2&&r[(a+1)*3+2]<t;)a++;let o=r[a*3],s=r[a*3+1],c=r[a*3+2],l=r[a*3+3],u=r[a*3+4],d=r[a*3+5],f=rd((t-c)/Math.max(1e-6,d-c),0,1),p=f*f*(3-2*f);n.x=id(o,l,p),n.y=id(s,u,p),n.slope=(u-s)*6*f*(1-f)/Math.max(1e-6,d-c)}var fd={x:0,y:0,slope:0};function pd(e,n,r=t.jetRefund){e.fuel=Math.min(n.fuelMax,e.fuel+r)}function md(e,n){e.vy=t.bonkBounce,e.grounded=!1,e.gravScale=t.gravStart,e.airJumps=Math.min(2+n.extraAirJumps,e.airJumps+1),e.jumpHoldT=0,e.slamming=!1,e.hovering=!1,pd(e,n)}function hd(e,n,r,i){e.vx+=n,e.speed=rd(e.speed+i,2,t.maxSpeed),r>0&&(e.vy=Math.max(e.vy,0)+r,e.grounded=!1,e.gravScale=t.gravStart,e.slideT>=0&&(e.slideT=-1,e.slideCdT=t.slideCooldown),e.rail&&(e.rail=null,e.railLockT=t.railLockout))}function gd(e,t,n,r,i){let a=Math.hypot(t-e.x,n-e.y,r-e.s);e.zip={x0:e.x,y0:e.y,s0:e.s,x1:t,y1:n,s1:r,t:0,dur:rd(a/34,.14,.45),rail:i},e.rail=null,e.hovering=!1,e.slamming=!1,e.grounded=!1,e.slideT=-1}function _d(e,n,r){e.rail=n,e.grounded=!1,e.hovering=!1,e.slamming=!1,e.slideT=-1,e.vy=0,e.vx=0,e.gravScale=t.gravStart,e.airJumps=1+r.extraAirJumps,e.speed=Math.max(e.speed,t.grindMin*r.grindMul),e.events.push(`railEnter`)}function vd(e,n,r){e.vy=r?t.jump2:t.jump1,e.jumpHoldT=r?t.jump2Hold:t.jump1Hold,e.grounded=!1,e.coyoteT=0,e.jumpBufT=0,e.gravScale=t.gravStart,e.hovering=!1,e.slamming=!1,pd(e,n),e.events.push(r?`jump2`:`jump`)}function yd(e,n,r,i,a=t.dt){if(e.events.length=0,e.zip){let n=e.zip;n.t+=a;let r=rd(n.t/n.dur,0,1),o=r*r*(3-2*r);return e.x=id(n.x0,n.x1,o),e.y=id(n.y0,n.y1,o)+Math.sin(r*Math.PI)*.6,e.s=id(n.s0,n.s1,o),e.mode=`jump`,r>=1&&(e.zip=null,e.vy=4,e.speed=Math.max(e.speed,t.grindMin+3),e.airJumps=1+i.extraAirJumps,n.rail&&_d(e,n.rail,i),e.events.push(`zipEnd`)),e}if(e.slideCdT=Math.max(0,e.slideCdT-a),e.railLockT=Math.max(0,e.railLockT-a),e.rollerT=Math.max(0,e.rollerT-a),e.dashT=Math.max(0,e.dashT-a),e.jumpBufT>0&&(e.jumpBufT-=a),e.slideBufT>0&&(e.slideBufT-=a),!e.grounded&&!e.rail&&e.coyoteT>0&&(e.coyoteT-=a),n.jumpPressed&&(e.jumpBufT=t.landBuffer,e.bufferedInAir=!e.grounded&&!e.rail&&e.coyoteT<=0),n.slidePressed&&(e.grounded?e.slideBufT=t.landBuffer:!e.rail&&i.cape&&!e.slamming?(e.slamming=!0,e.hovering=!1,e.vy=Math.min(e.vy,-26),e.events.push(`slamStart`)):e.slideBufT=t.landBuffer),n.dashPressed&&(e.dashT=.22,e.speed=Math.max(e.speed,24*i.speedMul),!e.grounded&&!e.rail&&(e.vy=Math.max(e.vy,1.5),e.gravScale=t.gravStart),e.events.push(`dash`)),e.slideBufT>0&&e.grounded&&e.slideT<0&&e.slideCdT<=0&&(e.slideT=0,e.slideBufT=0,e.events.push(`slide`)),e.jumpBufT>0){if(e.slideT>=0)e.slideT>=t.slideJumpCancel?(e.speed=Math.max(e.speed,t.slidePeak*i.speedMul),e.slideT=-1,e.slideCdT=t.slideCooldown+i.slideCooldownAdd,e.airJumps=1+i.extraAirJumps,vd(e,i,!1),e.events.push(`slideJump`)):e.jumpBufT=Math.max(e.jumpBufT,t.slideJumpCancel-e.slideT+a*1.5);else if(e.rail)e.rail=null,e.railLockT=i.railLockout,e.airJumps=1+i.extraAirJumps,vd(e,i,!1);else if(e.grounded||e.coyoteT>0){let n=e.grounded&&e.bufferedInAir;e.airJumps=1+i.extraAirJumps,vd(e,i,!1),n&&(e.speed=Math.min(t.maxSpeed,e.speed*(1+t.bhopBonus)),e.events.push(`bhop`))}else e.airJumps>0&&(e.airJumps--,vd(e,i,!0))}e.bufferedInAir=e.bufferedInAir&&e.jumpBufT>0;let o=t.lateralSpeed*(e.slideT>=0?.75:1),s=n.steer*o;n.targetX!==null&&(s=rd((n.targetX-e.x)*14,-o,o));let c=t.groundAccel*(e.grounded?1:t.airControl),l=n.boost||e.rollerT>0,u=(l?t.sprintSpeed:t.runSpeed)*i.speedMul;if(e.rail){let n=e.rail,r=t.grindMin*i.grindMul,o=t.grindMax*i.grindMul*(l?1.08:1);return e.speed=e.speed<r?r:ad(e.speed,o,t.grindAccel*(i.roller?2:1)*a),e.s+=e.speed*a,e.s>=n.s1?(dd(n,n.s1,fd),e.x=fd.x,e.y=fd.y,e.rail=null,e.railLockT=i.railLockout,e.vy=t.railPop+Math.max(0,fd.slope*e.speed*.5),e.gravScale=t.gravStart,e.airJumps=1+i.extraAirJumps,i.roller&&(e.rollerT=1.6),e.events.push(`railExit`)):(dd(n,e.s,fd),e.x=fd.x,e.y=fd.y,e.vy=0),e.mode=`grind`,e}e.vx=ad(e.vx,s,c*a),e.x+=e.vx*a;let d=r.halfWidth;e.x>d&&(e.x=d,e.vx=Math.min(0,e.vx)),e.x<-d&&(e.x=-d,e.vx=Math.max(0,e.vx)),e.slideT>=0?(e.slideT+=a,e.speed=Math.max(ld(e.slideT,i.speedMul),e.speed-t.groundDrag*a),e.slideT>=t.slideEndT&&(e.slideT=-1,e.slideCdT=t.slideCooldown+i.slideCooldownAdd)):e.speed<u?e.speed=Math.min(u,e.speed+t.groundAccel*a):e.dashT<=0&&(e.speed=Math.max(u,e.speed-(e.grounded?t.groundDrag:t.airDrag)*a)),e.s+=e.speed*a;let f=e.y;if(e.grounded){let n=r.groundAt(e.x,e.s,e.y+t.stepUp);n>-1/0&&n>=e.y-.45?(e.y=n,e.vy=0,e.lastGroundS=e.s):(e.grounded=!1,e.coyoteT=t.coyote,e.gravScale=t.gravStart,e.vy=0,e.slideT>=0&&e.slideT>=t.slideMin&&(e.slideT=-1,e.slideCdT=t.slideCooldown+i.slideCooldownAdd))}if(!e.grounded){let o=e.jumpHoldT>0&&n.jumpHeld&&e.vy>0;o?e.jumpHoldT-=a:e.jumpHoldT=0;let s=i.jetpack&&n.jumpHeld&&!e.slamming&&e.dashT<=0&&(e.hovering||e.vy<t.jetIgniteVy);if(s&&!e.hovering&&(e.fuel>t.jetIgniteCost||i.infiniteFuel)&&(e.hovering=!0,i.infiniteFuel||(e.fuel-=t.jetIgniteCost),e.events.push(`hoverStart`)),e.hovering&&(!s||e.fuel<=0&&!i.infiniteFuel?(e.hovering=!1,e.events.push(`hoverStop`)):(i.infiniteFuel||(e.fuel=Math.max(0,e.fuel-a)),e.vy=ad(e.vy,t.jetHoverVy,70*a),e.gravScale=t.gravStart)),e.hovering||(e.slamming?e.vy=Math.min(e.vy,-26)-60*a:o||(e.gravScale=ud(e.gravScale,e.vy<=0,a,i.gravCap),e.vy-=t.g*e.gravScale*i.gravityMul*a)),e.y+=e.vy*a,e.vy<=0){let n=r.groundAt(e.x,e.s,f+.05);n>-1/0&&e.y<=n&&(e.y=n,e.vy=0,e.grounded=!0,e.hovering=!1,e.coyoteT=0,e.gravScale=t.gravStart,e.airJumps=1+i.extraAirJumps,e.lastGroundS=e.s,e.events.push(e.slamming?`slamLand`:`land`),e.slamming=!1)}if(!e.grounded&&e.railLockT<=0&&e.vy<=1.5){let n=t.bodyRadius*t.footDisc*i.discMul,a=r.railsNear(e.s);for(let t=0;t<a.length;t++){let r=a[t];if(!(e.s<r.s0||e.s>r.s1-.5)&&(dd(r,e.s,fd),!(Math.abs(fd.x-e.x)>n)&&e.y<=fd.y+.45&&f>=fd.y-1.1)){_d(e,r,i),e.x=fd.x,e.y=fd.y;break}}}e.y<(r.killY??t.killY)&&e.events.push(`fall`)}else if(e.fuel=Math.min(i.fuelMax,e.fuel+i.fuelMax/t.jetRefill*a),e.hovering=!1,e.railLockT<=0&&e.slideT<0){let t=r.railsNear(e.s);for(let n=0;n<t.length;n++){let r=t[n];if(!(e.s<r.s0||e.s>r.s0+3)&&(dd(r,e.s,fd),Math.abs(fd.x-e.x)<.9&&Math.abs(fd.y-e.y)<.6)){_d(e,r,i);break}}}return e.mode=e.rail?`grind`:e.slideT>=0?`slide`:e.hovering?`hover`:e.grounded?`run`:`jump`,e}var bd=4.5,xd=(e,t,n=0)=>[-4.5,bd,e,t,n],Sd={id:`start`,len:34,minSector:0,weight:0,noMirror:!0,ground:[xd(0,34)],cells:[[0,.9,16,5,3]]},Cd={id:`gate`,len:40,minSector:0,weight:0,noMirror:!0,ground:[xd(0,40)]},wd=[{id:`bossA`,len:60,minSector:0,weight:0,noMirror:!0,ground:[xd(0,60)],rails:[[-3.4,.45,8,-3.4,2.4,18,-3.4,2.6,40,-3.4,1.6,50]],cells:[[-3.4,3.4,22,4,5]]},{id:`bossB`,len:60,minSector:0,weight:0,noMirror:!0,ground:[xd(0,60)],rails:[[3.4,.45,8,3.4,2.4,18,3.4,2.6,40,3.4,1.6,50]],cells:[[3.4,3.4,22,4,5]]}],Td=[{id:`flat`,len:40,minSector:0,weight:2,ground:[xd(0,40)],enemies:[[`drone`,1.5,3.2,28]],cells:[[-3,.9,8,5,3]]},{id:`gap`,len:46,minSector:0,weight:3,ground:[xd(0,17),xd(24,46)],enemies:[[`roller`,2.2,0,40]],cells:[[0,2.2,17,4,2.4]]},{id:`railBridge`,len:66,minSector:0,weight:3,ground:[xd(0,12),[-4.5,-1.5,22,30,0],[1.5,bd,36,44,0],xd(54,66)],rails:[[0,.45,9,0,2.4,19,-1.3,2.9,31,1.3,2.9,43,0,2.2,55]],enemies:[[`drone`,-2.5,4.6,34],[`drone`,2.5,4.4,48]],cells:[[0,3.6,21,3,3.5],[1.3,3.9,41,3,3.5]]},{id:`twinRails`,len:62,minSector:0,weight:3,ground:[xd(0,62)],rails:[[-3,.45,6,-3,2.6,16,-1.6,3,30,-3,2.6,46,-3,1.7,56],[3,.45,12,3,2.6,22,1.6,3,36,3,2.4,50,3,1.7,58]],enemies:[[`roller`,0,0,42],[`turret`,0,0,30]],cells:[[-3,3.6,18,3,4],[3,3.6,24,3,4]]},{id:`steps`,len:52,minSector:0,weight:2,ground:[xd(0,12),xd(12,24,.9),xd(24,38,1.8),xd(38,52)],enemies:[[`turret`,2.5,1.8,33],[`drone`,-2,4.8,30]],cells:[[-2.5,2.7,25,4,3]]},{id:`crusherRun`,len:54,minSector:0,weight:3,ground:[xd(0,54)],hazards:[[`crusher`,-1.5,20,6],[`crusher`,1.5,38,6]],enemies:[[`drone`,3,3.2,29]],cells:[[-1.5,.5,17,3,3],[1.5,.5,35,3,3]]},{id:`droneAlley`,len:48,minSector:0,weight:2,ground:[xd(0,48)],enemies:[[`drone`,-3,3,22],[`drone`,3,3.6,31],[`drone`,0,4.2,40]],cells:[[0,.9,10,4,3]]},{id:`splitLevel`,len:60,minSector:1,weight:2,ground:[xd(0,60),[-4.5,-.5,16,46,2.8]],rails:[[-2.5,.45,6,-2.5,2.95,15.6]],enemies:[[`bulwark`,2.4,1.7,34],[`roller`,2.5,0,50],[`turret`,-2.5,2.8,41]],cells:[[-2.5,3.7,20,6,3.4]]},{id:`islands`,len:58,minSector:1,weight:3,ground:[xd(0,9),[-4.5,-.8,14,23,0],[.8,bd,25,34,.7],[-2.2,2.2,38,45,0],xd(49,58)],rails:[[3.3,1.4,8,3.4,2.6,18,0,3.3,32,-3,2.7,44,-3,2,50]],enemies:[[`drone`,0,5,30]],cells:[[-2.6,.9,15,3,3],[2.6,1.6,26,3,3]]},{id:`barrelField`,len:46,minSector:0,weight:2,ground:[xd(0,46)],hazards:[[`barrel`,-2.5,10,0],[`barrel`,0,17,0],[`barrel`,2.5,23,0],[`barrel`,-1,31,0],[`barrel`,1.6,35,0]],enemies:[[`roller`,-3,0,28],[`roller`,3,0,40],[`turret`,0,0,42]]},{id:`boostGap`,len:54,minSector:1,weight:2,ground:[xd(0,20),xd(33,54)],rails:[[-3.2,.45,12,-3.2,2,20,-3.2,2.5,30,-3.2,1.5,36]],hazards:[[`boost`,1.5,10,3]],enemies:[[`drone`,0,4.2,44]],cells:[[1.5,3,21,5,2.6]]},{id:`bulwarkGate`,len:50,minSector:2,weight:2,ground:[xd(0,50)],hazards:[[`barrel`,-3,25,0],[`barrel`,3,25,0]],enemies:[[`bulwark`,0,1.8,32],[`drone`,-3,3.6,38],[`drone`,3,3.6,38]],cells:[[0,.9,8,4,3]]},{id:`sCurve`,len:70,minSector:1,weight:3,ground:[xd(0,12),[-4.5,-2,26,33,0],[2,bd,40,47,0],xd(58,70)],rails:[[0,.45,9,-2.5,2.3,20,2.5,3.3,34,-2,2.7,48,0,1.7,59]],enemies:[[`drone`,2.5,5.2,30],[`drone`,-2.5,5,44]],cells:[[-2.2,3.2,20,2,3],[2.4,4.2,33,2,3],[-1.9,3.6,47,2,3]]},{id:`arena`,len:74,minSector:2,weight:2,ground:[xd(0,74),[-4.5,-2.5,26,34,1.3],[2.5,bd,42,50,1.3]],hazards:[[`barrel`,0,30,0],[`barrel`,-1.5,46,0],[`boost`,0,6,3]],enemies:[[`turret`,-3.5,1.3,30],[`turret`,3.5,1.3,46],[`roller`,2,0,36],[`roller`,-2,0,56],[`drone`,0,4,44],[`drone`,2,4.5,60],[`bulwark`,0,1.8,64]],cells:[[0,.9,12,4,3]]},{id:`highline`,len:66,minSector:2,weight:2,ground:[xd(0,10),[-3,3,14,24,1.6],[-3.6,.6,28,38,3],[-.6,3.6,42,52,1.8],xd(56,66)],enemies:[[`drone`,2.5,5.4,33],[`turret`,1.5,1.8,48]],cells:[[0,2.5,15,3,3],[-1.5,3.9,29,3,3]]},{id:`pourLanes`,len:50,minSector:1,weight:3,ground:[xd(0,50)],hazards:[[`pour`,-3,16,3],[`pour`,0,27,3],[`pour`,3,27,3],[`pour`,-3,38,3],[`pour`,0,38,3]],enemies:[[`drone`,0,3.6,46]],cells:[[3,.9,14,3,3],[-3,.9,25,3,3],[3,.9,36,3,3]]}],Ed={canyon:`SUNLIT CANYON`,yard:`NEON RAIL-YARD`,foundry:`STORM FOUNDRY`};function Dd(e,t,n,r,i,a){let o=e.length,s=n?-1:1;e.tiles.push({def:t,mirror:n,s0:o});for(let n of t.ground){let t=n[0]*s,r=n[1]*s;e.platforms.push({x0:Math.min(t,r),x1:Math.max(t,r),s0:o+n[2],s1:o+n[3],y:n[4]})}for(let n of t.rails??[]){let t=[];for(let e=0;e<n.length;e+=3)t.push(n[e]*s,n[e+1],o+n[e+2]);e.rails.push({id:e.rails.length,pts:t,s0:t[2],s1:t[t.length-1]})}let c=t.enemies??[],l=0;c.forEach((n,a)=>{(a===0&&i>0||r.chance(i))&&(e.spawns.push({kind:n[0],x:n[1]*s,y:n[2],s:o+n[3]}),l++),i>1&&r.chance(i-1)&&e.spawns.push({kind:n[0],x:-n[1]*s,y:n[2],s:o+Math.min(t.len-2,n[3]+5)})});for(let n of t.hazards??[]){if(n[0]===`barrel`&&a<1&&!r.chance(a))continue;let t=n[1]*s,i=o+n[2];e.hazards.push({kind:n[0],x:t,s:i,w:n[3]??0,y:0}),n[0]===`barrel`&&a>1&&r.chance(a-1)&&e.hazards.push({kind:`barrel`,x:-t*.8+.4,s:i+3.5,w:0,y:0})}for(let n of t.cells??[]){let t=n[3]??1,r=n[4]??0;for(let i=0;i<t;i++)e.cells.push({x:n[0]*s,y:n[1],s:o+n[2]+i*r})}e.length+=t.len}function Od(e,n,r,i={}){let a={index:n,biome:r,boss:!!i.boss,tiles:[],length:0,finishS:0,platforms:[],rails:[],spawns:[],hazards:[],cells:[]},o=(.5+Math.min(n,8)*.12)*(i.enemyMul??1),s=i.barrelMul??1;if(Dd(a,Sd,!1,e,0,1),i.boss){for(let t=0;t<70;t++)Dd(a,wd[t%2],!1,e,0,1);a.finishS=1/0}else{let r=(i.length??t.sectorLength)-Cd.len,c=Td.filter(e=>e.minSector<=n),l=``,u=0;for(;a.length<r&&u++<64;){let t=c.reduce((e,t)=>e+(t.id===l?0:t.weight),0),n=e.next()*t,r=c[0];for(let e of c)if(e.id!==l&&(n-=e.weight,n<=0)){r=e;break}l=r.id,Dd(a,r,!r.noMirror&&e.chance(.5),e,o,s)}let d=a.length;Dd(a,Cd,!1,e,0,1),a.finishS=d+26}let c=new Ad(a);for(let e of a.hazards){let t=c.groundAt(e.x,e.s,50);e.y=t===-1/0?0:t}return a}var kd=16,Ad=class e{layout;halfWidth=t.trackHalf;killY=t.killY;pBuckets=new Map;rBuckets=new Map;static EMPTY=[];constructor(e){this.layout=e,e.biome===`foundry`&&(this.killY=t.lavaY-2.2);for(let t of e.platforms)for(let e=Math.floor(t.s0/kd);e<=Math.floor(t.s1/kd);e++){let n=this.pBuckets.get(e);n||(n=[],this.pBuckets.set(e,n)),n.push(t)}for(let t of e.rails)for(let e=Math.floor(t.s0/kd);e<=Math.floor(t.s1/kd);e++){let n=this.rBuckets.get(e);n||(n=[],this.rBuckets.set(e,n)),n.push(t)}}groundAt(e,t,n){let r=this.pBuckets.get(Math.floor(t/kd)),i=-1/0;if(!r)return i;for(let a=0;a<r.length;a++){let o=r[a];t>=o.s0-.3&&t<=o.s1+.3&&e>=o.x0-.3&&e<=o.x1+.3&&o.y<=n&&o.y>i&&(i=o.y)}return i}railsNear(t){return this.rBuckets.get(Math.floor(t/kd))??e.EMPTY}nextSafe(e){let t=null;for(let n of this.layout.platforms)n.s1<e+2||n.x1-n.x0<6||(!t||n.s0<t.s0)&&(t=n);return t}},jd={x:0,y:0,slope:0};function Md(e,t,n,r){let i=null,a=0;for(let r of e.rails)t>=r.s0&&t<=r.s1&&(a++,(!i||n>.5&&a>1)&&(i=r));if(i&&(n>.18||a>0&&Nd(e,t)))return dd(i,t,jd),r.x=jd.x,r.y=jd.y,r.mode=`grind`,r;let o=null,s=null,c=null;for(let n of e.platforms)t>=n.s0&&t<=n.s1?(!o||n.y<o.y)&&(o=n):n.s1<t?(!s||n.s1>s.s1)&&(s=n):(!c||n.s0<c.s0)&&(c=n);let l=e=>{let t=(e.x0+e.x1)/2,r=Math.max(0,(e.x1-e.x0)/2-1);return t+(n*2-1)*r*.7};if(o)return r.x=l(o),r.y=o.y,r.mode=`run`,r;if(s&&c){let e=Math.max(.01,c.s0-s.s1),n=(t-s.s1)/e;return r.x=l(s)+(l(c)-l(s))*n,r.y=s.y+(c.y-s.y)*n+4*(1.4+e*.1)*n*(1-n),r.mode=e>9?`hover`:`jump`,r}return r.x=0,r.y=(s??c)?.y??0,r.mode=`run`,r}function Nd(e,t){for(let n of e.platforms)if(t>=n.s0&&t<=n.s1)return!1;return!0}var Pd=[`run`,`jump`,`slide`,`grind`,`hover`],Fd=12,Id=6e3,Ld=24,Rd=`RB1.`,zd=class{meta;sectors=[];cur=null;nextIdx=0;last={t:0,x:0,y:0,z:0,state:0,score:0};constructor(e){this.meta={name:e.name,seed:e.seed,skin:e.skin??``,trail:e.trail??``}}beginSector(){this.cur={frames:[],time:0},this.sectors.push(this.cur),this.nextIdx=0}sample(e,t,n,r,i,a){this.cur||this.beginSector();let o=this.last;o.t=e,o.x=t,o.y=n,o.z=r,o.state=i,o.score=a,e>=this.nextIdx/10-1e-9&&this.cur.frames.length<5999&&(this.cur.frames.push({t:e,x:t,y:n,z:r,state:i,score:a}),this.nextIdx=Math.floor(e*10+1e-9)+1)}endSector(e){if(!this.cur)return;let t=this.cur.frames,n=this.last,r={t:e,x:n.x,y:n.y,z:n.z,state:n.state,score:n.score},i=t[t.length-1];i&&e-i.t<1e-6?t[t.length-1]=r:t.length<Id&&t.push(r),this.cur.time=e,this.cur=null}finish(e,t){return{v:1,name:this.meta.name,seed:this.meta.seed,sectors:this.sectors,totalTime:e,score:t,skin:this.meta.skin,trail:this.meta.trail}}},Bd=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`,Vd=new Int16Array(128).fill(-1);for(let e=0;e<64;e++)Vd[Bd.charCodeAt(e)]=e;function Hd(e){let t=``,n=0;for(;n+2<e.length;n+=3){let r=e[n]<<16|e[n+1]<<8|e[n+2];t+=Bd[r>>18]+Bd[r>>12&63]+Bd[r>>6&63]+Bd[r&63]}let r=e.length-n;if(r===1){let r=e[n]<<16;t+=Bd[r>>18]+Bd[r>>12&63]}else if(r===2){let r=e[n]<<16|e[n+1]<<8;t+=Bd[r>>18]+Bd[r>>12&63]+Bd[r>>6&63]}return t}function Ud(e){if(e.length%4==1)return null;let t=new Uint8Array(Math.floor(e.length*3/4)),n=0,r=0,i=0;for(let a=0;a<e.length;a++){let o=e.charCodeAt(a),s=o<128?Vd[o]:-1;if(s<0)return null;r=r<<6|s,i+=6,i>=8&&(i-=8,t[n++]=r>>i&255,r&=(1<<i)-1)}return t.subarray(0,n)}function Wd(e,t){let n=0,r=0;for(let i=0;i<t;i++)n=(n+e[i])%255,r=(r+n)%255;return r<<8|n}var Gd=new TextEncoder,Kd=new TextDecoder(`utf-8`,{fatal:!0});function qd(e){let t=Gd.encode(e);for(;t.length>Ld;)e=Array.from(e).slice(0,-1).join(``),t=Gd.encode(e);return Array.from(t)}function Jd(e,t){t=Math.max(0,Math.min(4294967295,Math.round(t)))>>>0,e.push(t&255,t>>>8&255,t>>>16&255,t>>>24&255)}function Yd(e,t){let n=t<0?-2*t-1:2*t;for(;n>=128;)e.push(n%128|128),n=Math.floor(n/128);e.push(n)}function Xd(e,t){let n=qd(t);e.push(n.length);for(let t of n)e.push(t)}function Zd(e){let t=[1];Xd(t,e.name),Xd(t,e.seed),Xd(t,e.skin),Xd(t,e.trail),Jd(t,e.totalTime*1e3),Jd(t,e.score);let n=e.sectors.slice(0,Fd);t.push(n.length);for(let e of n){Jd(t,e.time*1e3);let n=e.frames.slice(0,Id);t.push(n.length&255,n.length>>8&255);let r=0,i=0,a=0,o=0,s=0;for(let e of n){let n=Math.round(e.t*100),c=Math.round(e.x*50),l=Math.round(e.y*50),u=Math.round(e.z*10),d=Math.round(e.score);Yd(t,n-r),Yd(t,c-i),Yd(t,l-a),Yd(t,u-o),t.push(e.state&255),Yd(t,d-s),r=n,i=c,a=l,o=u,s=d}}let r=Wd(t,t.length);return t.push(r&255,r>>8),Rd+Hd(t)}var Qd=class{b;end;pos=0;constructor(e,t){this.b=e,this.end=t}u8(){if(this.pos>=this.end)throw Error(`eof`);return this.b[this.pos++]}u32(){let e=this.u8(),t=this.u8(),n=this.u8(),r=this.u8();return(e|t<<8|n<<16|r<<24)>>>0}varint(){let e=0,t=1;for(let n=0;n<8;n++){let n=this.u8();if(e+=(n&127)*t,n<128)return e%2==1?-(e+1)/2:e/2;t*=128}throw Error(`varint`)}str(){let e=this.u8();if(e>Ld||this.pos+e>this.end)throw Error(`str`);let t=Kd.decode(this.b.subarray(this.pos,this.pos+e));return this.pos+=e,t}};function $d(e){try{if(typeof e!=`string`||!e.startsWith(Rd))return null;let t=Ud(e.slice(4).trim());if(!t||t.length<4)return null;let n=t.length-2;if(Wd(t,n)!==(t[n]|t[n+1]<<8))return null;let r=new Qd(t,n);if(r.u8()!==1)return null;let i=r.str(),a=r.str(),o=r.str(),s=r.str(),c=r.u32()/1e3,l=r.u32(),u=r.u8();if(u>Fd)return null;let d=[];for(let e=0;e<u;e++){let e=r.u32()/1e3,t=r.u8()|r.u8()<<8;if(t>Id)return null;let n=[],i=0,a=0,o=0,s=0,c=0;for(let e=0;e<t;e++){i+=r.varint(),a+=r.varint(),o+=r.varint(),s+=r.varint();let e=r.u8();c+=r.varint(),n.push({t:i/100,x:a/50,y:o/50,z:s/10,state:e,score:c})}d.push({frames:n,time:e})}return r.pos===n?{v:1,name:i,seed:a,sectors:d,totalTime:c,score:l,skin:o,trail:s}:null}catch{return null}}function ef(e,t,n,r){let i=e.sectors[t]?.frames;if(!i||i.length===0)return!1;let a=i[0],o=i[i.length-1],s=e=>(r.t=n,r.x=e.x,r.y=e.y,r.z=e.z,r.state=e.state,r.score=e.score,!0);if(n<=a.t)return s(a);if(n>=o.t)return s(o);let c=0,l=i.length-1;for(;l-c>1;){let e=c+l>>1;i[e].t<=n?c=e:l=e}let u=i[c],d=i[l],f=d.t>u.t?(n-u.t)/(d.t-u.t):0;return r.t=n,r.x=u.x+(d.x-u.x)*f,r.y=u.y+(d.y-u.y)*f,r.z=u.z+(d.z-u.z)*f,r.score=u.score+(d.score-u.score)*f,r.state=u.state,!0}function tf(e,t,n){let r=e.sectors[t]?.frames;if(!r||r.length===0)return 1/0;if(r[0].z>=n)return r[0].t;for(let e=1;e<r.length;e++){let t=r[e];if(t.z>=n){let i=r[e-1],a=t.z-i.z;return a>0?i.t+(n-i.z)/a*(t.t-i.t):t.t}}return 1/0}function nf(e,t,n,r,i){n=Math.max(0,Math.min(1,n));let a=new td((r^ed(e))>>>0),o=a.next(),s=a.range(0,6.283),c=a.range(0,6.283),l=a.range(.18,.3),u=a.range(.5,.8),d=1/10,f=id(11.5,17.2,n),p={x:0,y:0,mode:`run`},m=[],h=0,g=0,_=!0,v=0;for(let e of t){let t=!Number.isFinite(e.finishS),r=id(62,36,n),i=[];Md(e,0,o,p);let a=p.x,y=p.y,b=0,x=0,S=0,C=g,w=()=>Math.max(0,Pd.indexOf(p.mode));for(let m=0;m<5998;m++){if(Md(e,b,o,p),m>0&&(a=ad(a,p.x,8*d),y+=(p.y-y)*1),i.push({t:x,x:a,y,z:b,state:w(),score:Math.round(C)}),t&&x>=r){S=x;break}let h=f*(1+.06*(.6*Math.sin((v+x)*l+s)+.4*Math.sin((v+x)*u+c)))*d;if(!t&&b+h>=e.finishS){let t=x+d*((e.finishS-b)/h);C+=(e.finishS-b)*(.6+n)*24,S=t,Md(e,e.finishS,o,p),i.push({t,x:ad(a,p.x,8*d),y,z:e.finishS,state:w(),score:Math.round(C)});break}C+=h*(.6+n)*24,b+=h,x+=d}S<=0&&(_=!1),m.push({frames:i,time:S}),v+=S>0?S:x,h+=S,g=Math.round(C)}return{v:1,name:e,seed:i,sectors:m,totalTime:_?h:0,score:g,skin:``,trail:``}}var rf=new B,af=new B,of=new V;function sf(e){return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}function X(e,t){let n=Math.min(255,Math.round((e>>16&255)*t)),r=Math.min(255,Math.round((e>>8&255)*t)),i=Math.min(255,Math.round((e&255)*t));return n<<16|r<<8|i}function cf(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255;return Math.round(r+(o-r)*n)<<16|Math.round(i+(s-i)*n)<<8|Math.round(a+(c-a)*n)}function lf(e,t=4){let n=e%t,r=Math.floor(e/t),i=.004;return[n/t+i,1-(r+1)/t+i,(n+1)/t-i,1-r/t-i]}var Z=class{pos=[];nor=[];col=[];uv=[];m=null;get vertexCount(){return this.pos.length/3}push(e,t,n,r,i,a,o,s=0,c=0){this.m?(rf.set(e,t,n).applyMatrix4(this.m),af.set(r,i,a).applyMatrix3(of.getNormalMatrix(this.m)).normalize(),this.pos.push(rf.x,rf.y,rf.z),this.nor.push(af.x,af.y,af.z)):(this.pos.push(e,t,n),this.nor.push(r,i,a)),this.col.push(o[0],o[1],o[2]),this.uv.push(s,c)}quad(e,t,n,r,i,a,o=1,s=1){let c=sf(i),l=t[0]-e[0],u=t[1]-e[1],d=t[2]-e[2],f=r[0]-e[0],p=r[1]-e[1],m=r[2]-e[2],h=u*m-d*p,g=d*f-l*m,_=l*p-u*f,v=Math.hypot(h,g,_)||1;h/=v,g/=v,_/=v;let y=a??[0,0,1,1],b=y[0],x=y[1],S=y[0]+(y[2]-y[0])*o,C=y[1]+(y[3]-y[1])*s;return this.push(e[0],e[1],e[2],h,g,_,c,b,x),this.push(t[0],t[1],t[2],h,g,_,c,S,x),this.push(n[0],n[1],n[2],h,g,_,c,S,C),this.push(e[0],e[1],e[2],h,g,_,c,b,x),this.push(n[0],n[1],n[2],h,g,_,c,S,C),this.push(r[0],r[1],r[2],h,g,_,c,b,C),this}quadC(e,t,n,r,i,a){let o=t[0]-e[0],s=t[1]-e[1],c=t[2]-e[2],l=r[0]-e[0],u=r[1]-e[1],d=r[2]-e[2],f=s*d-c*u,p=c*l-o*d,m=o*u-s*l,h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h;let g=[e,t,n,r],_=[a[0],a[2],a[2],a[0]],v=[a[1],a[1],a[3],a[3]];for(let e of[0,1,2,0,2,3])this.push(g[e][0],g[e][1],g[e][2],f,p,m,i[e],_[e],v[e]);return this}quadN(e,t,n,r=0,i=0){for(let a of[0,1,2,0,2,3]){let o=e[a],s=t[a];this.push(o[0],o[1],o[2],s[0],s[1],s[2],sf(n[a]),r,i)}return this}box(e,t,n,r,i,a,o,s,c=!1){let l=e-r/2,u=e+r/2,d=t-i/2,f=t+i/2,p=n-a/2,m=n+a/2;return this.quad([l,f,m],[u,f,m],[u,f,p],[l,f,p],s??o),c||this.quad([l,d,p],[u,d,p],[u,d,m],[l,d,m],o),this.quad([l,d,m],[u,d,m],[u,f,m],[l,f,m],o),this.quad([u,d,p],[l,d,p],[l,f,p],[u,f,p],o),this.quad([u,d,m],[u,d,p],[u,f,p],[u,f,m],o),this.quad([l,d,p],[l,d,m],[l,f,m],[l,f,p],o),this}wedge(e,t,n,r,i,a,o,s,c,l){let u=t-i/2,d=t+i/2,f=r/2,p=a/2,m=f*o,h=p*s,g=[[e-f,u,n+p],[e+f,u,n+p],[e+f,u,n-p],[e-f,u,n-p]],_=[[e-m,d,n+h],[e+m,d,n+h],[e+m,d,n-h],[e-m,d,n-h]];this.quad(_[0],_[1],_[2],_[3],l??c),this.quad(g[3],g[2],g[1],g[0],c);for(let e=0;e<4;e++){let t=(e+1)%4;this.quad(g[e],g[t],_[t],_[e],c)}return this}cyl(e,t,n,r,i,a,o,s=10,c=`y`,l){let u=sf(o),d=sf(l??o),f=(r,i,a)=>c===`y`?[e+r,t+a,n+i]:c===`x`?[e+a,t+r,n+i]:[e+r,t+i,n+a],p=(e,t,n)=>c===`y`?[e,n,t]:c===`x`?[n,e,t]:[e,t,n],m=c===`y`,h=(r-i)/a;for(let e=0;e<s;e++){let t=e/s*Math.PI*2,n=(e+1)/s*Math.PI*2,o=Math.cos(t),c=Math.sin(t),l=Math.cos(n),g=Math.sin(n),_=f(o*r,c*r,-a/2),v=f(l*r,g*r,-a/2),y=f(o*i,c*i,a/2),b=f(l*i,g*i,a/2),x=p(o,c,h),S=p(l,g,h),C=(e,t,n,r,i,a,o)=>{this.push(e[0],e[1],e[2],t[0],t[1],t[2],o),this.push(n[0],n[1],n[2],r[0],r[1],r[2],o),this.push(i[0],i[1],i[2],a[0],a[1],a[2],o)};m?(C(_,x,y,x,b,S,u),C(_,x,b,S,v,S,u)):(C(_,x,b,S,y,x,u),C(_,x,v,S,b,S,u));let w=f(0,0,a/2),T=f(0,0,-a/2),E=p(0,0,1),D=p(0,0,-1);i>.001&&(m?C(w,E,b,E,y,E,d):C(w,E,y,E,b,E,d)),r>.001&&(m?C(T,D,_,D,v,D,d):C(T,D,v,D,_,D,d))}return this}sphere(e,t,n,r,i,a=10,o=7,s=1){let c=sf(i),l=(i,c)=>{let l=i/a*Math.PI*2,u=c/o*Math.PI,d=Math.sin(u)*Math.cos(l),f=Math.cos(u),p=Math.sin(u)*Math.sin(l);return[e+d*r,t+f*r*s,n+p*r,d,f,p]};for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=l(t,e),r=l(t+1,e),i=l(t+1,e+1),a=l(t,e+1);if(e>0)for(let e of[n,r,i])this.push(e[0],e[1],e[2],e[3],e[4],e[5],c);if(e<o-1)for(let e of[n,i,a])this.push(e[0],e[1],e[2],e[3],e[4],e[5],c)}return this}triN(e,t,n,r,i,a,o){let s=n[0]-e[0],c=n[1]-e[1],l=n[2]-e[2],u=i[0]-e[0],d=i[1]-e[1],f=i[2]-e[2],p=c*f-l*d,m=l*u-s*f,h=s*d-c*u;if(p*p+m*m+h*h<1e-14)return;let[g,_,v,y]=p*(t[0]+r[0]+a[0])+m*(t[1]+r[1]+a[1])+h*(t[2]+r[2]+a[2])>=0?[n,r,i,a]:[i,a,n,r];this.push(e[0],e[1],e[2],t[0],t[1],t[2],o),this.push(g[0],g[1],g[2],_[0],_[1],_[2],o),this.push(v[0],v[1],v[2],y[0],y[1],y[2],o)}rbox(e,t,n,r,i,a,o,s,c,l=2){let u=[r/2,i/2,a/2],d=[e,t,n];if(o=Math.min(o,u[0],u[1],u[2]),o<1e-4)return this.box(e,t,n,r,i,a,s,c);let f=sf(s),p=sf(c??s),m=e=>{let t=[];for(let n=0;n<=l;n++)t.push(-e+o*(1-Math.tan((l-n)/l*Math.PI/4)));for(let n=0;n<=l;n++)t.push(e-o*(1-Math.tan(n/l*Math.PI/4)));return t},h=e=>{let t=[0,0,0],n=[0,0,0],r=0;for(let i=0;i<3;i++){let a=u[i]-o;t[i]=Math.max(-a,Math.min(a,e[i])),n[i]=e[i]-t[i],r+=n[i]*n[i]}r=Math.sqrt(r)||1;for(let e=0;e<3;e++)n[e]=n[e]/r,t[e]=d[e]+t[e]+n[e]*o;return[t,n]};for(let e=0;e<3;e++){let t=(e+1)%3,n=(e+2)%3,r=m(u[t]),i=m(u[n]);for(let a of[-1,1]){let o=e===1&&a>0?p:f,s=(r,i)=>{let o=[0,0,0];return o[e]=a*u[e],o[t]=r,o[n]=i,h(o)};for(let e=0;e<r.length-1;e++)if(!(r[e+1]-r[e]<1e-6))for(let t=0;t<i.length-1;t++){if(i[t+1]-i[t]<1e-6)continue;let[n,a]=s(r[e],i[t]),[c,l]=s(r[e+1],i[t]),[u,d]=s(r[e+1],i[t+1]),[f,p]=s(r[e],i[t+1]);this.triN(n,a,c,l,u,d,o),this.triN(n,a,u,d,f,p,o)}}}return this}capsule(e,t,n,r,i,a=12,o=3){let s=sf(i),c=t[0]-e[0],l=t[1]-e[1],u=t[2]-e[2],d=Math.hypot(c,l,u)||1;c/=d,l/=d,u/=d;let f,p,m;Math.abs(l)<.9?(f=u,p=0,m=-c):(f=0,p=-u,m=l);let h=Math.hypot(f,p,m)||1;f/=h,p/=h,m/=h;let g=l*m-u*p,_=u*f-c*m,v=c*p-l*f,y=[];for(let t=0;t<=o;t++){let r=t/o*Math.PI/2,i=Math.cos(r),a=Math.sin(r);y.push({c:[e[0]-c*n*i,e[1]-l*n*i,e[2]-u*n*i],r:n*a,nd:-i,nr:a})}for(let e=o;e>=0;e--){let n=e/o*Math.PI/2,i=Math.cos(n),a=Math.sin(n);y.push({c:[t[0]+c*r*i,t[1]+l*r*i,t[2]+u*r*i],r:r*a,nd:i,nr:a})}let b=(e,t)=>{let n=y[e],r=t/a*Math.PI*2,i=Math.cos(r),o=Math.sin(r),s=f*i+g*o,d=p*i+_*o,h=m*i+v*o;return[[n.c[0]+s*n.r,n.c[1]+d*n.r,n.c[2]+h*n.r],[c*n.nd+s*n.nr,l*n.nd+d*n.nr,u*n.nd+h*n.nr]]};for(let e=0;e<y.length-1;e++)for(let t=0;t<a;t++){let[n,r]=b(e,t),[i,a]=b(e,t+1),[o,c]=b(e+1,t+1),[l,u]=b(e+1,t);this.triN(n,r,i,a,o,c,s),this.triN(n,r,o,c,l,u,s)}return this}add(e,t){if(!t){for(let t of[`pos`,`nor`,`col`,`uv`]){let n=e[t],r=this[t];for(let e=0;e<n.length;e++)r.push(n[e])}return this}of.getNormalMatrix(t);let n=e.vertexCount;for(let r=0;r<n;r++)rf.set(e.pos[r*3],e.pos[r*3+1],e.pos[r*3+2]).applyMatrix4(t),af.set(e.nor[r*3],e.nor[r*3+1],e.nor[r*3+2]).applyMatrix3(of).normalize(),this.pos.push(rf.x,rf.y,rf.z),this.nor.push(af.x,af.y,af.z),this.col.push(e.col[r*3],e.col[r*3+1],e.col[r*3+2]),this.uv.push(e.uv[r*2],e.uv[r*2+1]);return this}build(){let e=new Or;return e.setAttribute(`position`,new gr(this.pos,3)),e.setAttribute(`normal`,new gr(this.nor,3)),e.setAttribute(`color`,new gr(this.col,3)),e.setAttribute(`uv`,new gr(this.uv,2)),e.computeBoundingSphere(),e}};It.enabled=!1;var uf={uLightDir:{value:new B(.45,.8,.4).normalize()},uShadowTint:{value:new U(6969994)},uFogColor:{value:new U(10475752)},uFogNear:{value:60},uFogFar:{value:420},uUnder:{value:new U(0)},uTime:{value:0},uFlash:{value:0},uSurf:{value:new B(0,0,0)},uGritTint:{value:new U(5910560)},uLite:{value:0},uRim:{value:new U(0)},uGroundGlow:{value:new qt(0,0,0,0)},uGroundFade:{value:new B(1,0,1)},uHighTint:{value:new U(16777215)}},df=new U,ff=`
varying vec3 vN; varying vec3 vC; varying vec3 vW; varying vec2 vUv; varying float vDepth;
uniform vec3 uTint;
#include <skinning_pars_vertex>
void main(){
  vec3 transformed = position; vec3 objectNormal = normal;
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <skinning_vertex>
  mat4 mm = modelMatrix;
  #ifdef USE_INSTANCING
    mm = modelMatrix * instanceMatrix;
  #endif
  vec4 wp = mm * vec4(transformed, 1.0);
  vN = normalize(mat3(mm) * objectNormal);
  vC = uTint;
  #ifdef USE_COLOR
    vC *= color;
  #endif
  #ifdef USE_INSTANCING_COLOR
    vC *= instanceColor;
  #endif
  vW = wp.xyz; vUv = uv;
  vec4 mv = viewMatrix * wp;
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,pf=`
varying vec3 vN; varying vec3 vC; varying vec3 vW; varying vec2 vUv; varying float vDepth;
uniform vec3 uLightDir; uniform vec3 uShadowTint; uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar;
uniform vec3 uUnder; uniform float uFlash; uniform float uGlow; uniform float uHurt; uniform float uAlpha;
uniform vec3 uSurf; uniform vec3 uGritTint; uniform float uSurfOn; uniform float uLite; uniform vec3 uRim;
uniform vec4 uGroundGlow; uniform vec3 uGroundFade; uniform vec3 uHighTint;
float h21(vec2 p){ vec3 p3 = fract(vec3(p.xyx) * 0.1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(h21(i), h21(i + vec2(1.0, 0.0)), f.x), mix(h21(i + vec2(0.0, 1.0)), h21(i + vec2(1.0, 1.0)), f.x), f.y); }
#ifdef USE_MAP
uniform sampler2D map;
#endif
#ifdef USE_MODEL_MAP
uniform sampler2D uModelMap; uniform vec2 uEmis; uniform float uLift;
#endif
void main(){
  vec3 base = vC;
  float emis = 0.0;
  #ifdef USE_MODEL_MAP
    // generated models: painted base colour; their saturated cyan lights and yellow-hot fire are keyed out as emissive
    vec3 tm = texture2D(uModelMap, vUv).rgb;
    base *= tm;
    float tmx = max(tm.r, max(tm.g, tm.b));
    float cyan = smoothstep(0.16, 0.36, min(tm.g, tm.b) - tm.r) * smoothstep(0.55, 0.8, tmx);
    float fire = smoothstep(0.84, 0.96, tm.r) * smoothstep(0.42, 0.62, tm.g) * (1.0 - smoothstep(0.4, 0.62, tm.b));
    emis = max(cyan * uEmis.x, fire * uEmis.y);
  #endif
  #ifdef USE_MAP
    vec4 t = texture2D(map, vUv);
    if (vUv.y < 0.25 && t.a < 0.5) discard; // only the atlas' bottom row is alpha-tested
    base *= t.rgb;
  #endif
  vec3 n = normalize(vN);
  #ifdef DOUBLE_SIDED
    if (!gl_FrontFacing) n = -n;
  #endif
  float wet = 0.0;
  if (uSurfOn > 0.5 && uLite > 0.5) {
    wet = uSurf.z * smoothstep(0.75, 0.95, n.y) * 0.8;
    base *= 1.0 - wet * 0.3;
  } else if (uSurfOn > 0.5) {
    // hand-painted surface detail in world space: rust / grime blotches, drip streaks on walls, sediment bands on rock
    vec3 an = abs(n);
    float wall = 1.0 - step(0.6, an.y);
    vec2 p = an.y > 0.6 ? vW.xz : (an.x > an.z ? vW.zy : vW.xy);
    float blot = vn(p * 0.42) * 0.65 + vn(p * 1.9 + 17.0) * 0.35;
    float drip = vn(vec2(p.x * 1.7, p.y * 0.13) + 5.0) * wall;
    // inked, hard-edged shapes (cel-painted grime, tone patches, sun-bleached patches), not soft smears
    float g = smoothstep(0.585, 0.6, blot + drip * 0.3);
    float isRock = step(7.0, vUv.x);
    // rock carries its own painted strata, and floors read cleaner with fewer patches (art reference)
    float gs = uSurf.x * mix(1.0, 0.3, isRock) * mix(1.0, 0.55, step(0.6, an.y));
    base = mix(base, base * uGritTint * 2.0, g * gs * 0.85);
    base *= 1.0 + (smoothstep(0.47, 0.485, blot) - 0.5) * 0.13 * gs;
    float stroke = vn(vec2(p.x * 2.6 + 3.0, p.y * 0.35));
    base *= 1.0 + (smoothstep(0.6, 0.615, stroke) - 0.3) * 0.12 * gs;
    base = mix(base, min(base * 1.3 + 0.03, vec3(1.0)), smoothstep(0.7, 0.715, vn(p * 0.8 + 31.0)) * 0.5 * gs);
    // rock walls (flagged in uv by the mesa builder): uneven sediment bands, each with a warped, broken ink line
    // under it and a sunlit lip above, plus sparse vertical cracks that wander and fade in and out
    float rock = wall * uSurf.y * isRock;
    if (rock > 0.0) {
      float lf = 1.0 - smoothstep(0.12, 0.45, fwidth(vW.y));
      float yy = vW.y + (vn(vec2(p.x * 0.06, vW.y * 0.04)) - 0.5) * 4.2;
      float sy = yy * 0.3, row = floor(sy), fy = fract(sy);
      float has = step(0.4, h21(vec2(row, 9.0)));
      float brk = smoothstep(0.42, 0.5, vn(vec2(p.x * 0.11 + row * 3.7, row)));
      base *= 1.0 + rock * (h21(vec2(row, 2.0)) - 0.5) * 0.16;
      float ln = (1.0 - smoothstep(0.035, 0.075, fy)) * has * brk;
      base = mix(base, min(base * 1.22 + 0.04, vec3(1.0)), rock * smoothstep(0.86, 0.9, fy) * has * brk * 0.5 * lf);
      float cxv = p.x * 0.19 + (vn(vec2(p.x * 0.04, vW.y * 0.1)) - 0.5) * 1.6;
      float cid = floor(cxv), cf = abs(fract(cxv) - 0.5);
      float crk = (1.0 - smoothstep(0.012, 0.03, cf)) * step(0.8, h21(vec2(cid, 4.0))) * smoothstep(0.42, 0.5, vn(vec2(cid * 7.0, vW.y * 0.07)));
      base = mix(base, base * vec3(0.45, 0.36, 0.44), rock * max(ln, crk) * 0.8 * lf);
    }
    // metal and concrete walls: long plates with a dark joint and a thin highlight beside it. The plates are several
    // metres long and each column of them is shifted, so the joints never line up into a square grid
    float panel = wall * uSurf.x * (1.0 - isRock);
    if (panel > 0.0) {
      vec2 pd = vec2(5.2, 7.6);
      vec2 fg = fract(vec2(p.x / pd.x, p.y / pd.y + floor(p.x / pd.x) * 0.37));
      float e = min(min(fg.x, 1.0 - fg.x) * pd.x, min(fg.y, 1.0 - fg.y) * pd.y);
      base = mix(base, base * 0.55, panel * (1.0 - smoothstep(0.02, 0.035, e)));
      base = mix(base, min(base * 1.25 + 0.03, vec3(1.0)), panel * 0.6 * smoothstep(0.035, 0.045, e) * (1.0 - smoothstep(0.07, 0.08, e)));
    }
    // standing water on up-facing surfaces: darker, and flagged in alpha for the post pass to reflect
    float puddle = 0.6 + 0.4 * smoothstep(0.38, 0.6, vn(vW.xz * 0.27 + 9.0));
    wet = uSurf.z * smoothstep(0.75, 0.95, n.y) * puddle;
    base *= 1.0 - wet * 0.3;
  }
  float ndl = dot(n, uLightDir);
  // three hard comic bands: core shadow, mid-tone, lit
  float band = smoothstep(-0.03, 0.03, ndl) * 0.52 + smoothstep(0.52, 0.58, ndl) * 0.48;
  vec3 shadow = uShadowTint;
  #ifdef USE_MODEL_MAP
    shadow = mix(shadow, vec3(1.0), uLift);   // the texture already carries painted shading
  #endif
  vec3 col = base * mix(shadow, vec3(1.0), band);
  // bounce light from below (lava / neon ground glow)
  float under = clamp(0.55 - n.y * 0.6, 0.0, 1.0);
  col += base * uUnder * under;
  // light from a glowing ground (lava field): strongest just above it, on faces that look down or sideways, and fading
  // with height. Surfaces far above it take a cool dark tint instead, so structures stand dark against the glow below
  float gl = 1.0 - smoothstep(0.0, uGroundFade.x, vW.y - uGroundGlow.w);
  col += (base * 0.75 + 0.06) * uGroundGlow.rgb * gl * clamp(0.8 - n.y * 0.8, 0.0, 1.0);
  col *= mix(vec3(1.0), uHighTint, smoothstep(uGroundFade.y, uGroundFade.z, vW.y));
  // rim light: a hard-edged back-light band on faces turning away from the camera, tinted per biome
  if (uLite < 0.5) {
    vec3 vdir = normalize(cameraPosition - vW);
    float fr = 1.0 - abs(dot(n, vdir));
    float rim = smoothstep(0.6, 0.68, fr) * (1.0 - smoothstep(0.8, 0.95, n.y) * smoothstep(5.0, 16.0, vDepth));
    rim *= mix(1.0, 0.3, uSurfOn) * (0.45 + 0.55 * smoothstep(-0.4, 0.4, n.y + ndl * 0.6));
    col += (base * 0.6 + 0.4) * uRim * rim;
  }
  col = mix(col, base * 1.25 + 0.1, max(uGlow, emis));
  col = mix(col, vec3(1.0, 0.95, 0.9), uHurt);
  col += uFlash * 0.25;
  float fog = smoothstep(uFogNear, uFogFar, vDepth);
  col = mix(col, uFogColor, fog * (1.0 - uGlow * 0.6));
  // opaque surfaces carry the wet mask in alpha (0 = dry); blended ones keep their own alpha
  gl_FragColor = vec4(col, uAlpha < 0.999 ? uAlpha : wet * 0.8 * (1.0 - fog));
}`;function mf(e={}){let t=new ba({vertexShader:ff,fragmentShader:pf,uniforms:{...uf,uTint:{value:new U(e.tint??16777215)},uGlow:{value:e.glow??0},uHurt:{value:0},uAlpha:{value:e.alpha??1},uSurfOn:{value:+!!e.surf},map:{value:e.map??null},uModelMap:{value:e.model??null},uEmis:{value:new z(e.emis?.[0]??1,e.emis?.[1]??1)},uLift:{value:e.lift??.3}},vertexColors:!e.model,side:e.doubleSide?2:0,transparent:(e.alpha??1)<1});return e.map&&(t.defines={USE_MAP:``}),e.model&&(t.defines={...t.defines,USE_MODEL_MAP:``}),(e.alpha??1)<1&&(t.blending=5,t.blendSrc=204,t.blendDst=205,t.blendSrcAlpha=200,t.blendDstAlpha=201),t}var hf=`varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,gf=`
varying vec2 vUv;
uniform sampler2D tColor; uniform sampler2D tDepth;
uniform vec2 uTexel; uniform float uNear; uniform float uFar; uniform float uThick; uniform vec3 uInk;
uniform float uVignette; uniform vec3 uVigColor; uniform float uPunch; uniform float uRain; uniform float uTime; uniform float uWet; uniform float uLite; uniform float uBloom;
float invZ(float d){ return (uFar + uNear - (2.0 * d - 1.0) * (uFar - uNear)) / (2.0 * uNear * uFar); }
void main(){
  vec2 o = uTexel * uThick;
  float dc = texture2D(tDepth, vUv).r;
  float wc = invZ(dc);
  float wl = invZ(texture2D(tDepth, vUv - vec2(o.x, 0.0)).r);
  float wr = invZ(texture2D(tDepth, vUv + vec2(o.x, 0.0)).r);
  float wu = invZ(texture2D(tDepth, vUv + vec2(0.0, o.y)).r);
  float wd = invZ(texture2D(tDepth, vUv - vec2(0.0, o.y)).r);
  // 1/z is planar in screen space, so its Laplacian is ~0 on flat faces and spikes on creases + silhouettes
  float lap = abs(wl + wr + wu + wd - 4.0 * wc) / max(wc, 1e-6);
  float dEdge = smoothstep(0.012, 0.035, lap);
  vec4 c4 = textureLod(tColor, vUv, 0.0);
  vec3 col = c4.rgb;
  vec3 cl = textureLod(tColor, vUv - vec2(o.x, 0.0), 0.0).rgb;
  vec3 cr = textureLod(tColor, vUv + vec2(o.x, 0.0), 0.0).rgb;
  vec3 cu = textureLod(tColor, vUv + vec2(0.0, o.y), 0.0).rgb;
  vec3 cd = textureLod(tColor, vUv - vec2(0.0, o.y), 0.0).rgb;
  float cdiff = max(max(distance(cl, col), distance(cr, col)), max(distance(cu, col), distance(cd, col)));
  float cEdge = smoothstep(0.22, 0.42, cdiff) * 0.8;
  float z = 1.0 / wc;
  float fade = 1.0 - smoothstep(90.0, 380.0, z) * 0.75;
  float edge = max(dEdge, cEdge) * fade;
  if (uLite > 0.5) {
    // lite: a plain sheen instead of the mirrored scene
    if (c4.a > 0.01 && c4.a < 0.9) col = mix(col, col * 0.55 + vec3(0.2, 0.17, 0.3), c4.a * uWet * 0.5);
  } else if (uWet > 0.0 && c4.a > 0.01 && c4.a < 0.9) {
    // wet ground: walk up the column to where the ground ends (the contact line) and mirror the scene about it
    float d = 0.0, st = 0.008;
    for (int i = 0; i < 10; i++) {
      d += st; st *= 1.38;
      float pa = textureLod(tColor, vec2(vUv.x, min(vUv.y + d, 0.999)), 0.0).a;
      if (pa < 0.01 || pa > 0.9) break;
    }
    float rip = (sin(vUv.y * 310.0 + uTime * 2.6) + sin(vUv.y * 127.0 - uTime * 1.7 + vUv.x * 40.0)) * 0.00028 * (1.0 + d * 6.0);
    vec2 ru = vec2(vUv.x + rip, vUv.y + d * 1.9);
    vec3 rc = textureLod(tColor, vec2(ru.x, min(ru.y, 0.999)), 0.0).rgb * 0.7
            + textureLod(tColor, vec2(ru.x, min(ru.y + d * 0.12, 0.999)), 0.0).rgb * 0.2
            + textureLod(tColor, vec2(ru.x, min(ru.y + d * 0.3, 0.999)), 0.0).rgb * 0.1;
    float rl = dot(rc, vec3(0.299, 0.587, 0.114));
    rc = max(mix(vec3(rl), rc, 1.4), 0.0);   // mirrored neon keeps its colour on the wet deck
    float k = (c4.a * 1.25) * uWet * (0.3 + 0.7 * smoothstep(0.1, 0.46, rl));
    col = mix(col, col * 0.4 + rc * 1.05, k * 0.86);
  }
  if (uLite < 0.5 && uBloom > 0.0) {
    // soft glow: the target's own mip chain is the blur; bright regions bleed light over their surroundings
    vec2 e = uTexel * 5.0;
    vec3 g1 = (textureLod(tColor, vUv + e, 3.0).rgb + textureLod(tColor, vUv - e, 3.0).rgb
             + textureLod(tColor, vUv + vec2(e.x, -e.y), 3.0).rgb + textureLod(tColor, vUv + vec2(-e.x, e.y), 3.0).rgb) * 0.25;
    vec2 f = uTexel * 20.0;
    vec3 g2 = (textureLod(tColor, vUv + vec2(f.x, 0.0), 5.0).rgb + textureLod(tColor, vUv - vec2(f.x, 0.0), 5.0).rgb
             + textureLod(tColor, vUv + vec2(0.0, f.y), 5.0).rgb + textureLod(tColor, vUv - vec2(0.0, f.y), 5.0).rgb) * 0.25;
    vec3 g = g1 * 0.5 + g2 * 0.5;
    g *= smoothstep(0.2, 0.62, dot(g, vec3(0.299, 0.587, 0.114)));
    col += g * uBloom * (1.0 - col);
  }
  // comic grade: saturation + contrast punch
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(vec3(l), col, 1.0 + uPunch);
  col = (col - 0.5) * (1.0 + uPunch * 0.5) + 0.5;
  col = mix(col, uInk, edge);
  if (uRain > 0.0) {
    // slanted screen-space rain streaks, two parallax layers
    float asp = uTexel.y / uTexel.x, r = 0.0;
    for (int i = 0; i < 2; i++) {
      float fi = float(i);
      vec2 p = vec2((vUv.x * asp + vUv.y * 0.1) * (44.0 + fi * 30.0), vUv.y);
      float id = floor(p.x);
      float rnd = fract(sin(id * 91.7 + fi * 13.1) * 43758.5453);
      float y = fract(p.y * (1.1 + rnd) + uTime * (1.5 + rnd * 1.1 + fi * 0.4) + rnd * 7.0);
      r += smoothstep(0.1, 0.0, abs(fract(p.x) - 0.5)) * smoothstep(0.0, 0.04, y) * smoothstep(0.2, 0.05, y) * step(0.4, rnd) * (0.5 - fi * 0.18);
    }
    col += vec3(0.5, 0.66, 1.0) * r * uRain;
  }
  vec2 q = vUv - 0.5;
  float vig = smoothstep(0.35, 0.95, length(q * vec2(1.0, 1.25)));
  col = mix(col, uVigColor, vig * uVignette);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
  gl_FragDepth = dc;
}`,_f=class{canvas;three;scene=new Pn;camera=new io(72,9/16,.4,1400);rt;postScene=new Pn;postCam=new ao(-1,1,1,-1,0,1);post;width=390;height=844;dpr=1;quality=2;hurtVignette=0;dynRes=!0;scale=1;loadMul=1;govT=0;govN=0;govGood=0;govUpAge=99;govCeil=1;govFloor=0;govSlow=0;get lite(){return uf.uLite.value>.5}set lite(e){e!==this.lite&&(uf.uLite.value=+!!e,this.rt.texture.generateMipmaps=!e,this.rt.texture.minFilter=e?b:S,this.rt.dispose())}constructor(e){this.canvas=e,this.three=new Pl({canvas:e,antialias:!1,alpha:!1,powerPreference:`high-performance`,stencil:!1}),this.three.info.autoReset=!1,this.three.outputColorSpace=tt,this.three.autoClear=!1,this.three.setClearColor(1052696,1),this.rt=this.makeTarget(4,4),this.post=new ba({vertexShader:hf,fragmentShader:gf,depthTest:!1,depthWrite:!0,uniforms:{tColor:{value:this.rt.texture},tDepth:{value:this.rt.depthTexture},uTexel:{value:new z(1,1)},uNear:{value:this.camera.near},uFar:{value:this.camera.far},uThick:{value:1.25},uInk:{value:new U(1380124)},uVignette:{value:.35},uVigColor:{value:new U(656914)},uPunch:{value:.18},uRain:{value:0},uTime:{value:0},uWet:{value:0},uLite:uf.uLite,uBloom:{value:0}}});let t=new vi(new ua(2,2),this.post);t.frustumCulled=!1,this.postScene.add(t),this.camera.layers.enable(1)}makeTarget(e,t){let n=new oa(e,t);n.type=O,n.minFilter=n.magFilter=_;let r=new Yt(e,t,{depthTexture:n,depthBuffer:!0,stencilBuffer:!1});return r.texture.magFilter=b,r.texture.minFilter=S,r.texture.generateMipmaps=!0,r}resize(e,t){this.width=Math.max(1,e),this.height=Math.max(1,t);let n=this.quality===0?1:this.quality===1?1.5:2;this.dpr=Math.min(window.devicePixelRatio||1,n)*this.scale,this.three.setPixelRatio(this.dpr),this.three.setSize(this.width,this.height,!1);let r=Math.floor(this.width*this.dpr),i=Math.floor(this.height*this.dpr);this.rt.setSize(r,i),this.post.uniforms.uTexel.value.set(1/r,1/i),this.post.uniforms.uThick.value=Math.max(1.15,this.dpr*.95),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix()}govern(e){if(!this.dynRes||e<=0)return;if(e>.1){if(e>1||++this.govSlow<4)return;e=.1}else this.govSlow=0;if(this.govT+=e,this.govN++,this.govT<1)return;let t=this.govT/this.govN*1e3;this.govT=0,this.govN=0,this.govUpAge++,t>19.5&&this.scale<=.6&&!this.lite?++this.govFloor>=2&&(this.lite=!0):t>19.5&&this.scale>(this.lite?.5:.6)?(this.scale=Math.max(this.lite?.5:.6,this.scale-(t>40?.2:.1)),this.govUpAge<=4&&(this.govCeil=this.scale),this.govGood=0,this.resize(this.width,this.height)):t<17.4&&this.scale<this.govCeil?++this.govGood>=8&&(this.scale=Math.min(this.govCeil,this.scale+.05),this.govGood=0,this.govUpAge=0,this.resize(this.width,this.height)):this.govGood=0}render(){let e=this.three,t=this.camera;e.info.reset(),this.post.uniforms.uNear.value=t.near,this.post.uniforms.uFar.value=t.far,this.post.uniforms.uTime.value=performance.now()/1e3%600;for(let n=0;n<this.loadMul;n++)t.layers.set(0),e.setRenderTarget(this.rt),e.clear(!0,!0,!1),e.render(this.scene,t),e.setRenderTarget(null),e.clear(!0,!0,!1),e.render(this.postScene,this.postCam),t.layers.set(1),e.render(this.scene,t);t.layers.enableAll()}};function vf(e,t){uf.uLightDir.value.set(t.light[0],t.light[1],t.light[2]).normalize(),uf.uShadowTint.value.setHex(t.shadow),uf.uFogColor.value.setHex(t.fog),uf.uFogNear.value=t.fogNear,uf.uFogFar.value=t.fogFar,uf.uUnder.value.setHex(t.under),e.post.uniforms.uInk.value.setHex(t.ink),e.post.uniforms.uVignette.value=t.vignette,e.post.uniforms.uVigColor.value.setHex(t.vigColor),e.post.uniforms.uPunch.value=t.punch,e.post.uniforms.uRain.value=t.rain??0,e.post.uniforms.uWet.value=t.wet??0,uf.uSurf.value.set(t.grit??0,t.strata??0,t.wet??0),uf.uGritTint.value.setHex(t.gritTint??5910560),uf.uRim.value.setHex(t.rim??0),df.setHex(t.groundGlow??0),uf.uGroundGlow.value.set(df.r,df.g,df.b,t.groundY??0),uf.uGroundFade.value.set(Math.max(.01,t.groundFade??1),t.highFrom??0,Math.max((t.highFrom??0)+.01,t.highTo??1)),uf.uHighTint.value.setHex(t.highTint??16777215),e.post.uniforms.uBloom.value=t.bloom??0,e.three.setClearColor(t.fog,1)}var yf=[{id:`armorForge`,name:`Armor Forge`,icon:`🛡️`,color:16742938,maxLevel:3,costs:[20,45,90],blurb:`Hammer out tougher plating for every run.`,perks:[`+20 max HP`,`+40 max HP`,`+60 max HP`]},{id:`circuitLab`,name:`Circuit Lab`,icon:`🧠`,color:3135743,maxLevel:3,costs:[25,55,110],blurb:`Smarter Bazar stock and cheaper reshuffles.`,perks:[`Bazar offers 4 items`,`First Bazar reroll is free`,`Bazar offers 5 items`]},{id:`ghostDish`,name:`Ghost Telemetry Dish`,icon:`📡`,color:8257434,maxLevel:2,costs:[15,60],blurb:`Telemetry from every ghost you race.`,perks:[`Daily races pay +15% Track Pass XP`,`Import friend share codes`]},{id:`gadgetBay`,name:`Gadget Bay`,icon:`🧰`,color:16765503,maxLevel:1,costs:[30],blurb:`Rack space for jetpacks, hooks and more.`,perks:[`Gadgets can be purchased`]},{id:`overclockReactor`,name:`Overclock Reactor`,icon:`⚡`,color:16727538,maxLevel:2,costs:[50,120],blurb:`Feed the core. Overload hotter and longer.`,perks:[`Corrupted chips appear in the Bazar`,`Overload lasts +0.5 s`]},{id:`paintBooth`,name:`Cosmetic Paint Booth`,icon:`🎨`,color:11758591,maxLevel:1,costs:[10],blurb:`Skins, trails and pop styles.`,perks:[`Unlock cosmetics shop`]},{id:`endlessGate`,name:`Endless Gate`,icon:`♾️`,color:5941503,maxLevel:1,costs:[80],blurb:`A portal to the unending line.`,perks:[`Unlock Endless mode`]},{id:`trophyCar`,name:`Trophy Car`,icon:`🏆`,color:16762938,maxLevel:3,costs:[20,60,140],blurb:`Brag rights that pay: more wrenches per run.`,perks:[`+10% wrenches`,`+20% wrenches`,`+30% wrenches`]}];function bf(e){return yf.find(t=>t.id===e)}function xf(e,t){let n=bf(t),r=e.hub[t];return!n||typeof r!=`number`||!Number.isFinite(r)?0:Math.max(0,Math.min(n.maxLevel,Math.floor(r)))}function Sf(e,t){let n=bf(t);if(!n)return null;let r=xf(e,t);return r>=n.maxLevel?null:n.costs[r]??null}function Cf(e,t){let n=Sf(e,t);return n===null||e.wrenches<n?!1:(e.wrenches-=n,e.hub[t]=xf(e,t)+1,!0)}function wf(e){let t=t=>xf(e,t),n=t(`circuitLab`),r=t(`ghostDish`),i=t(`overclockReactor`);return{maxHpAdd:20*t(`armorForge`),shopSlots:3+ +(n>=1)+ +(n>=3),freeReroll:n>=2,ghostSlots:r>=1?3:1,friendCodes:r>=2,gadgetBay:t(`gadgetBay`)>=1,corruptedInShop:i>=1,overloadBonus:i>=2?.5:0,cosmetics:t(`paintBooth`)>=1,endless:t(`endlessGate`)>=1,wrenchMul:1+.1*t(`trophyCar`)}}var Tf=6.2,Ef=9341608,Df=class{def;group=new En;b=new Z;g=new Z;solidMat=mf();glowMat=mf({glow:1});anims=[];geos=[];constructor(e){this.def=e}part(e,t,n,r){let i=new En;i.position.set(e,t,n);let a=new Z,o=new Z;return r(a,o),this.mesh(i,a,this.solidMat),this.mesh(i,o,this.glowMat),this.group.add(i),i}mesh(e,t,n){if(!t.vertexCount)return;let r=t.build();this.geos.push(r),e.add(new vi(r,n))}finish(){this.mesh(this.group,this.b,this.solidMat),this.mesh(this.group,this.g,this.glowMat)}},Of=new H;function kf(e,t,n,r,i,a,o,s,c,l,u=0,d){for(let f=0;f<a;f++){let p=f/a*Math.PI*2+u;Of.makeRotationX(p).setPosition(t,n+Math.cos(p)*i,r+Math.sin(p)*i),e.m=Of,e.box(0,0,0,o,s,c,d!==void 0&&f%2?d:l)}e.m=null}function Af(e,t,n,r,i,a,o,s,c,l,u=0){for(let d=0;d<a;d++){let f=d/a*Math.PI*2+u;Of.makeRotationY(-f).setPosition(t+Math.cos(f)*i,n,r+Math.sin(f)*i),e.m=Of,e.box(0,0,0,o,s,c,l)}e.m=null}function jf(e,t){let{b:n,g:r}=e,i=e.def.color;n.box(0,.85,0,4.4,.7,5.2,4869724,6975360),n.box(0,.62,0,4.46,.12,5.26,X(i,.8)),r.box(2.22,.98,0,.04,.12,3,i),r.box(-2.22,.98,0,.04,.12,3,i);for(let e of[-1.6,1.6]){n.box(0,.5,e,3,.18,.4,2763829);for(let t of[-1.55,1.55])n.cyl(t,.5,e,.4,.4,.28,2237484,10,`x`,9080476)}t||n.box(0,.8,-3.1,.3,.25,1,2237484)}function Mf(e){let{b:t,g:n}=e;t.box(-1,2.1,-1.2,2.2,1.8,2,8010538,9390646),t.box(-1,3.0999999999999996,-1.2,2.5,.25,2.3,3816004),n.box(.12,1.9,-1.2,.06,.8,1.2,16742938),n.box(.14,1.65,-1.2,.04,.3,.8,16765503),t.cyl(-1.5,4.2,-1.6,.3,.38,2,4868692,8),t.box(.8,1.45,1.2,1,.5,.8,3093051),t.box(.8,1.85,1.2,.5,.35,.5,3817033),t.box(.8,2.2,1.2,1.5,.35,.65,5593704,8028304),t.wedge(1.8,2.2,1.2,.7,.35,.6,.3,.6,5593704),t.box(1.9,2.1,1.2,.35,1.8,.35,3817033),t.box(1.9,2.95,1.2,.5,.15,.5,2763829),n.sphere(.8,2.5,1.2,.12,16742938,6,4);let r=e.part(1.9,3.0999999999999996,1.2,(e,t)=>{e.box(-.6,0,0,1.4,.22,.22,9259554),e.box(-1.1,-.05,0,.55,.55,.55,6975614,9080992),t.box(-1.1,-.34,0,.5,.05,.5,16753210),e.sphere(0,0,0,.22,2763829,7,5)});e.anims.push(e=>{r.rotation.z=.3-.95*(.5+.5*Math.sin(e*5))})}function Nf(e){let{b:t,g:n}=e;t.box(-1.2,1.45,0,.9,.5,3.6,2763829),t.box(-1.2,3.5,0,.3,4,3.8,1328702,1923664),t.box(-1,3.5,0,.1,4.2,4,2763829),t.box(-1.03,3.5,0,.08,1.4,1.4,2106412),n.box(-1,3.5,0,.04,1,1,1735306);for(let e of[-1,1]){for(let n=0;n<5;n++)t.box(-1,3.5+(n-2)*.28,e*.78,.04,.06,.2,11580608);n.box(-1,3.5+e*1.1,0,.03,.05,1.8,3135743),n.box(-1,3.5,e*1.1,.03,1.8,.05,3135743),n.box(-1,3.5+e*1.5,0,.03,.05,2.8,1747144)}for(let e of[-1.6,1.6])t.cyl(.9,1.7999999999999998,e,.65,.65,.15,2763829,10,`x`),t.cyl(.9,1.7999999999999998,e,.5,.5,.5,4872810,10,`x`),t.cyl(.9,1.7999999999999998,e,.18,.18,.7,2763829,6,`x`),t.box(.9,1.3,e,.5,.2,1,2763829);let r=e.part(-.95,3.5,0,(e,t)=>{for(let[e,n]of[[1.3,-1.3],[1.3,1.3],[0,0],[-1.3,-1.3],[-1.3,1.3]])t.box(0,e,n,.14,.4,.4,3135743)}),i=e.part(-.95,3.5,0,(e,t)=>{for(let[e,n]of[[1.3,0],[0,-1.3],[0,1.3],[-1.3,0]])t.box(0,e,n,.14,.4,.4,11203839)});e.anims.push(e=>{let t=.5+.5*Math.sin(e*3);r.scale.setScalar(.8+.4*t),i.scale.setScalar(.8+.4*(1-t))})}function Pf(e){let{b:t,g:n}=e;t.box(0,1.5,0,2.2,.6,2.2,3817033,5593704),t.cyl(0,3.2,0,.18,.28,3,6975614,8),t.box(1.4,2,1.4,1.1,1.6,1.1,2763829,3817033),n.box(1.96,2.2,1.4,.04,.7,.8,8257434);let r=e.part(0,4.8,0,(e,t)=>{e.sphere(0,0,0,.3,2763829,7,5),e.cyl(0,0,.5,.15,1.7,.7,13159638,12,`z`,9080992),e.cyl(0,0,.9,1.7,1.75,.1,8028304,12,`z`),e.box(0,.8,1.3,.1,1.6,.1,6975614),t.sphere(0,1.6,1.4,.2,8257434,7,5)});e.anims.push(e=>{r.rotation.y=e*.8});let i=e.part(0,2.5,0,(e,t)=>{Af(t,0,0,0,1.8,14,.12,.1,.55,8257434)});e.anims.push(e=>{i.rotation.y=-e*.5,i.position.y=2.5+.2*Math.sin(e*2)})}function Ff(e){let{b:t,g:n}=e;for(let e of[-2,.2])for(let n of[-1.9,-.2])t.box(n,2.8,e,.2,3.2,.2,5593704);for(let e of[1.65,3.0999999999999996,4.4])t.box(-1.05,e,-.9,1.9,.14,2.4,6965802,9069110);t.box(-1.05,4.5,-.9,2.1,.12,2.6,X(e.def.color,.7));for(let e of[-1.3,-.5])t.cyl(-1.05,2.3499999999999996,e,.28,.28,1.1,9278368,8,`y`,5593704),t.cyl(-1.05,3,e,.12,.28,.2,2763829,8),t.cyl(-1.05,1.75,e,.28,.16,.18,2763829,8),n.box(-.76,2.3499999999999996,e,.03,.7,.1,16765503);t.box(-1.05,2.5,-.9,.4,.5,.9,2763829),t.box(-1.05,3.4000000000000004,-1.3,.9,.5,.6,13781546),t.box(-1.05,3.4000000000000004,-.2,.7,.5,.5,2779858),n.box(-1.05,3.7,-.7,.5,.06,.3,16765503),t.box(1.5,1.6,1.4,1,.8,1,3817033),t.cyl(1.5,3.4000000000000004,1.4,.2,.2,2.8,6975614,8);let r=e.part(1.5,4.7,1.4,(e,t)=>{e.box(-1.1,0,0,2.4,.22,.28,15904799),e.box(.2,0,0,.5,.35,.4,2763829),e.cyl(-2.1,-.7,0,.04,.04,1.4,2763829,5),e.box(-2.1,-1.5,0,.3,.2,.3,9278368),e.box(-2.1,-1.75,0,.12,.35,.12,9278368),e.box(-2,-1.95,0,.35,.1,.12,9278368),t.sphere(.2,.3,0,.1,16765503,6,4)});e.anims.push(e=>{r.rotation.y=.5*Math.sin(e*.8)})}function If(e){let{b:t,g:n}=e;t.cyl(0,1.4,0,1.9,1.7,.4,3817033,12,`y`,5593704),t.cyl(0,3.4000000000000004,0,1.1,1.1,3.6,4871528,12,`y`,6976648),t.sphere(0,5.2,0,1.05,6976648,12,7,.6),n.cyl(0,3.4000000000000004,0,.5,.5,3.7,16727538,8);for(let[e,r]of[[-1.7,-1.7],[1.7,-1.7],[-1.7,1.7],[1.7,1.7]])t.cyl(e,2.5,r,.3,.38,2.2,2763829,8,`y`,5593704),n.cyl(e,3.6500000000000004,r,.22,.22,.06,16727538,8);let r=e.part(0,3.4000000000000004,0,(e,t)=>{for(let n of[-1,0,1])t.cyl(0,n,0,1.45,1.45,.16,16727538,14),Af(e,0,n,0,1.45,4,.5,.26,.4,2763829)});e.anims.push(e=>{r.rotation.y=e*1.5,r.position.y=3.4000000000000004+.45*Math.sin(e*1.8)})}function Lf(e){let{b:t,g:n}=e;for(let[e,n]of[[-2,-1.4],[2,-1.4],[-2,1.4],[2,1.4]])t.box(e,3.0999999999999996,n,.2,3.8,.2,5593704);for(let e=0;e<6;e++)t.box(-1.75+e*.7,5.1,0,.7,.16,3.4,e%2?16052192:11758591);for(let e of[-1.2,1.2])t.box(e,2.5,.2,.3,2.6,.3,3817033);t.box(0,3.9000000000000004,.2,2.9,.3,.4,3817033,5593704);let r=[16726843,16765503,3117055];for(let e=0;e<3;e++){let i=-.8+e*.8;t.cyl(i,3.6500000000000004,.2,.18,.08,.3,2763829,6),n.cyl(i,3.45,.2,.06,.06,.1,r[e],6)}for(let e=0;e<3;e++){let i=-1.3+e*1.3;t.cyl(i,1.85,-1.5,.48,.48,1.3,14212326,10,`y`,9080992),t.cyl(i,2.5999999999999996,-1.5,.3,.46,.2,r[e],10),n.box(i,1.85,-1.01,.5,.7,.04,r[e])}let i=e.part(0,2.5999999999999996,.2,(e,t)=>{for(let e=0;e<3;e++)t.box(-.8+e*.8,0,0,.18,1.6,.18,r[e])});e.anims.push(e=>{i.scale.set(1,.65+.35*Math.sin(e*6),1),i.position.y=2.5999999999999996+.1*Math.sin(e*6)})}function Rf(e){let{b:t,g:n}=e,r=3.9000000000000004,i=.45;t.box(0,1.45,0,3,.5,3.4,2763829,3817033);let a=new H().makeRotationY(i),o=new Z,s=new Z;kf(o,0,r,0,2.1,16,.6,.55,.9,3885688,0,5071776),o.box(0,2.2,-2,.7,1.6,.5,2763829),o.box(0,2.2,2,.7,1.6,.5,2763829),kf(s,.33,r,0,2.1,16,.04,.12,.85,5941503),t.add(o,a),n.add(s,a);let c=e.part(0,r,0,(e,t)=>{kf(t,0,0,0,1.4,8,.1,.45,.6,5941503,0,12640511),t.sphere(0,0,0,.3,16777215,7,5)}),l=new En;l.rotation.y=i,l.position.set(0,r,0),e.group.add(l),c.position.set(0,0,0),e.group.remove(c),l.add(c),e.anims.push(e=>{c.rotation.x=e*1.2})}function zf(e){let{b:t,g:n}=e,r=16762938;t.box(0,1.5,0,3.4,.6,3.6,5593704,6975614),t.box(0,2.1,0,2.2,.6,2.6,6975614,9080992),t.box(0,2.7,0,1,.6,1.4,9080992,11580608),n.box(1.1,2.1,0,.03,.3,1.4,r);let i=(e,t,n,i,a,o)=>{e.box(n,i+.08*o,a,.5*o,.16*o,.5*o,3817033),e.cyl(n,i+.35*o,a,.09*o,.09*o,.4*o,r,6),e.cyl(n,i+.85*o,a,.1*o,.38*o,.6*o,r,9,`y`,X(r,.8)),e.sphere(n-.4*o,i+.85*o,a,.09*o,r,5,4),e.sphere(n+.4*o,i+.85*o,a,.09*o,r,5,4),t.sphere(n,i+1.3*o,a,.08*o,16773792,5,4)};i(t,n,-.8,2.4,0,.9),i(t,n,.8,2.4,.9,.7);let a=e.part(0,3,0,(e,t)=>{i(e,t,0,0,0,1.3)});e.anims.push(e=>{a.rotation.y=e*1.1,a.position.y=3+.06*Math.sin(e*2.5)});let o=[13781546,2779858,2799738,11758591];[[-1.9,-2.2],[1.9,-2.2],[-1.9,2.2],[1.9,2.2]].forEach(([e,i],a)=>{t.cyl(e,2.8,i,.07,.07,3.2,11580608,6),n.sphere(e,4.5,i,.14,r,6,4),t.box(e,3.9000000000000004,i+(i>0?-0:0),.05,.9,.7,o[a])});let s=e.part(0,4.3,0,(e,t)=>{e.cyl(0,0,0,.05,.05,1,11580608,5),t.box(0,.65,0,.05,.28,.5,r)});e.anims.push(e=>{s.rotation.y=Math.sin(e*2)*.4})}var Bf={armorForge:Mf,circuitLab:Nf,ghostDish:Pf,gadgetBay:Ff,overclockReactor:If,paintBooth:Lf,endlessGate:Rf,trophyCar:zf},Vf=class{root=new En;cars=[];levels=[];smoke=null;extraGeos=[];extraMats=[];constructor(){yf.forEach((e,t)=>{let n=new Df(e);jf(n,t===yf.length-1),Bf[e.id]?.(n),n.finish(),n.group.position.set(0,0,-t*Tf),this.root.add(n.group),this.cars.push(n),this.levels.push(0)}),this.buildYard(),this.buildLoco(),this.setLevels(this.levels)}addStatic(e,t,n){let r=mf(),i=mf({glow:1});this.extraMats.push(r,i);for(let[a,o]of[[t,r],[n,i]]){if(!a.vertexCount)continue;let t=a.build();this.extraGeos.push(t),e.add(new vi(t,o))}}buildYard(){let e=new Z,t=new Z,n=9.8,r=-(yf.length-1)*Tf-4.2,i=n-r,a=(n+r)/2;e.box(0,-.65,a,18,.7,i+2,8025190,10130564),e.box(-8.9,-.28,a,.3,.1,i+2,14921759),e.box(8.9,-.28,a,.3,.1,i+2,14921759),e.box(0,-.15,a,4,.3,i,5920336,7170658);for(let t=9.3;t>r;t-=1.4)e.box(0,.04,t,3.5,.1,.35,5916214);for(let t of[-1.55,1.55])e.box(t,.12,a,.14,.12,i,11580608);for(let n=0;n<yf.length;n+=2){let r=-n*Tf+3.1;e.cyl(-6.2,1.6,r,.1,.14,3.8,3817033,6),t.sphere(-6.2,3.65,r,.28,16773808,6,4),e.box(6.2,.2,r-1,1.1,.9,1.1,9069110),e.box(6.5,1,r-1.1,.8,.7,.8,10515518)}this.addStatic(this.root,e,t)}buildLoco(){let e=new Z,t=new Z,n=Tf;e.box(0,.85,n,3.6,.7,4.6,9054754,10631726),e.box(0,.62,n,3.66,.12,4.66,14921759),e.box(0,.8,3.1,.3,.25,1,2237484),e.cyl(0,2.1,7.1000000000000005,1.15,1.15,3,3108784,12,`z`,2314112),e.box(0,2.5,4.7,3.2,2.6,1.7,2772864,3630236),e.box(0,3.9,4.7,3.5,.2,2,2237484),t.box(1.62,2.8,4.7,.04,.8,.9,16765503),t.box(-1.62,2.8,4.7,.04,.8,.9,16765503),e.cyl(0,3.6,8,.28,.45,1.2,2237484,8),e.cyl(0,3,7.1000000000000005,.42,.42,.4,14921759,8),t.sphere(0,2.1,8.65,.32,16773808,8,5),e.wedge(0,.75,8.8,2.6,.7,.6,1,.2,14921759);for(let t of[-1.4,.2,1.7])for(let r of[-1.55,1.55])e.cyl(r,.5,n+t,.5,.5,.28,2237484,10,`x`,9080476);this.addStatic(this.root,e,t);let r=mf({tint:16052192});this.extraMats.push(r),this.smoke=new En,this.smoke.position.set(0,4.4,8);let i=new Z;i.sphere(0,0,0,.35,16777215,7,5);let a=i.build();this.extraGeos.push(a);for(let e=0;e<3;e++)this.smoke.add(new vi(a,r));this.root.add(this.smoke)}setLevels(e){this.cars.forEach((t,n)=>{let r=e[n]??0;this.levels[n]=r;let i=r>0,a=i?16777215:Ef;if(t.solidMat.uniforms.uTint.value.set(a),t.glowMat.uniforms.uTint.value.set(a),t.glowMat.uniforms.uGlow.value=+!!i,!i)for(let e of t.anims)e(0)})}carCenter(e,t){return t.set(this.root.position.x,this.root.position.y+2.2,this.root.position.z-e*Tf)}update(e,t){this.cars.forEach((e,n)=>{if(!((this.levels[n]??0)<=0))for(let n of e.anims)n(t)}),this.smoke&&this.smoke.children.forEach((e,n)=>{let r=(t*.5+n/3)%1;e.position.set(.15*Math.sin(t+n),r*2.2,-r*.6),e.scale.setScalar(.4+r*1.1)})}dispose(){for(let e of this.cars){for(let t of e.geos)t.dispose();e.solidMat.dispose(),e.glowMat.dispose()}for(let e of this.extraGeos)e.dispose();for(let e of this.extraMats)e.dispose();this.root.removeFromParent()}},Hf=[{id:`lowGravity`,name:`Low Gravity`,desc:`Gravity pulls 30% less. Float further.`,icon:`🌙`},{id:`doubleRail`,name:`Double Rail`,desc:`Grinding speed boosted by 25%.`,icon:`🚄`},{id:`glassCannon`,name:`Glass Cannon`,desc:`+60% damage dealt, -40% max HP.`,icon:`🔮`},{id:`bonkShockwave`,name:`Bonk Shockwave`,desc:`Headbonks release a damaging shockwave.`,icon:`💥`},{id:`hyperReload`,name:`Hyper Reload`,desc:`Reloads take 40% less time.`,icon:`⚡`},{id:`explosiveBarrels`,name:`Explosive Barrels`,desc:`Three times as many barrels.`,icon:`🛢️`},{id:`swarm`,name:`Swarm`,desc:`50% more enemies, each 30% weaker.`,icon:`🐝`},{id:`heavyMetal`,name:`Heavy Metal`,desc:`Enemies have +50% HP, drop 30% more cells.`,icon:`🤘`},{id:`cellRain`,name:`Cell Rain`,desc:`Enemies drop 80% more powercells.`,icon:`🔋`},{id:`turbo`,name:`Turbo`,desc:`Everything runs 15% faster.`,icon:`🏎️`},{id:`thinAir`,name:`Thin Air`,desc:`Jetpack fuel is halved.`,icon:`🌫️`},{id:`featherfall`,name:`Featherfall`,desc:`Terminal fall speed capped at 6.`,icon:`🪶`},{id:`magnetStorm`,name:`Magnet Storm`,desc:`Pickup range multiplied by 2.5.`,icon:`🧲`},{id:`bigHeads`,name:`Big Heads`,desc:`Enemy heads are huge. Bonk away.`,icon:`🗿`},{id:`criticalMass`,name:`Critical Mass`,desc:`+15% critical hit chance.`,icon:`🎯`},{id:`vampiric`,name:`Vampiric`,desc:`Heal 2 HP on every kill.`,icon:`🧛`},{id:`slickRails`,name:`Slick Rails`,desc:`+20% grind speed, faster rail re-grab.`,icon:`🧈`},{id:`overclocked`,name:`Overclocked`,desc:`+25% fire rate, but enemies hit 25% harder.`,icon:`🔥`}],Uf=Object.fromEntries(Hf.map(e=>[e.id,e]));function Wf(){return{gravityMul:1,gravCap:10,grind:1,railLockout:.3,playerDamage:1,playerHp:1,enemyHp:1,enemyDamage:1,enemyCount:1,barrelMul:1,cellDrop:1,speed:1,fuel:1,reloadTime:1,fireRate:1,pickupRange:1,critChance:0,lifesteal:0,bonkShockwave:!1,bigHeads:!1}}var Gf={lowGravity:e=>{e.gravityMul*=.7},doubleRail:e=>{e.grind*=1.25},glassCannon:e=>{e.playerDamage*=1.6,e.playerHp*=.6},bonkShockwave:e=>{e.bonkShockwave=!0},hyperReload:e=>{e.reloadTime*=.6},explosiveBarrels:e=>{e.barrelMul*=3},swarm:e=>{e.enemyCount*=1.5,e.enemyHp*=.7},heavyMetal:e=>{e.enemyHp*=1.5,e.cellDrop*=1.3},cellRain:e=>{e.cellDrop*=1.8},turbo:e=>{e.speed*=1.15},thinAir:e=>{e.fuel*=.5},featherfall:e=>{e.gravCap=6},magnetStorm:e=>{e.pickupRange*=2.5},bigHeads:e=>{e.bigHeads=!0},criticalMass:e=>{e.critChance+=.15},vampiric:e=>{e.lifesteal=2},slickRails:e=>{e.grind*=1.2,e.railLockout=.15},overclocked:e=>{e.fireRate*=1.25,e.enemyDamage*=1.25}};function Kf(e){let t=Wf();for(let n of e)Object.prototype.hasOwnProperty.call(Gf,n)&&Gf[n](t);return t}var qf=[`canyon`,`yard`,`foundry`];function Jf(e){return Math.floor(e.next()*4294967296)>>>0}function Yf(e){for(let t=0;t<64;t++){let t=[];for(let n=0;n<5;n++){let r=qf.filter(e=>e!==t[n-1]);t.push(e.pick(r))}if(qf.every(e=>t.includes(e)))return t}return[`canyon`,`yard`,`foundry`,`canyon`,`yard`]}function Xf(e){let t=[...new Set(e.dailyMutatorPool.filter(e=>e in Uf))];return t.length>=2?t:Hf.map(e=>e.id)}function Zf(e,t,n,r){let i=Yf(n);i.push(`foundry`);let a=i.length,o=[],s=[];for(let e=0;e<a;e++)o.push(Jf(n.fork(`sector`+e))),s.push(Jf(n.fork(`shop`+e)));return{mode:e,seed:t,biomes:i,sectorSeeds:o,shopSeeds:s,mutators:r,sectors:a}}function Qf(e,t=a){let n=new td(ed(e));return Zf(`daily`,e,n,n.fork(`mutators`).shuffle(Xf(t)).slice(0,2))}function $f(e){let t=e>>>0;return Zf(`standard`,`S-${t}`,new td(ed(`standard:`+t)),[])}function ep(e,t,n=a){let r=e>>>0,i=t%5==4,o=new td(ed(`endless:${r}:${t}`)),s=Math.min(1+Math.floor(t/2),6),c=Xf(n),l=o.fork(`mutators`).shuffle(c).slice(0,Math.min(s,c.length)),u=i?`foundry`:qf[t%3];return{mode:`endless`,seed:`E-${r}`,biomes:[u],sectorSeeds:[Jf(o.fork(`sector`))],shopSeeds:[Jf(o.fork(`shop`))],mutators:l,sectors:1,depth:t,boss:i}}function tp(e,t,n){let r=e,i=t===5||e.mode===`endless`&&r.boss===!0,a=e.mode===`endless`?r.depth??t:t;return Od(new td(e.sectorSeeds[t]),a,e.biomes[t],{boss:i,enemyMul:n.enemyCount*(1+.12*a),barrelMul:n.barrelMul})}var Q={hazard:0,panel:1,ridges:2,strata:3,grate:4,white:5,windows:6,ties:7,lava:8,crate:9,rivets:10,grateLava:11,chevron:12,emblem:13,arrow:14,bolt:15};function np(e,t,n,r){let i=t%4*n,a=Math.floor(t/4)*n;e.save(),e.beginPath(),e.rect(i,a,n,n),e.clip(),e.translate(i,a),r(e,n),e.restore()}function rp(e,t,n,r,i,a){e.beginPath(),e.moveTo(t-r,n+i),e.lineTo(t,n-i),e.lineTo(t+r,n+i),e.lineTo(t+r,n+i+a),e.lineTo(t,n-i+a),e.lineTo(t-r,n+i+a),e.closePath()}var ip=null;function ap(){if(ip)return ip;let e=document.createElement(`canvas`);e.width=e.height=1024;let t=e.getContext(`2d`);return np(t,Q.hazard,256,(e,t)=>{e.fillStyle=`#f2b61c`,e.fillRect(0,0,t,t),e.fillStyle=`#1a1620`;for(let n=-2;n<6;n++){e.beginPath();let r=n*t*.5;e.moveTo(r,t),e.lineTo(r+t*.25,t),e.lineTo(r+t*.75,0),e.lineTo(r+t*.5,0),e.closePath(),e.fill()}}),np(t,Q.chevron,256,(e,t)=>{e.fillStyle=`#ffffff`,rp(e,t/2,t*.3,t*.4,t*.13,t*.16),e.fill(),rp(e,t/2,t*.66,t*.4,t*.13,t*.16),e.fill()}),np(t,Q.panel,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.strokeStyle=`#8f8a99`,e.lineWidth=5,e.strokeRect(4,4,t-8,t-8),e.strokeStyle=`#c9c4d4`,e.lineWidth=3,e.beginPath(),e.moveTo(t/2,6),e.lineTo(t/2,t-6),e.stroke(),e.fillStyle=`#7d7888`;for(let[n,r]of[[18,18],[t-18,18],[18,t-18],[t-18,t-18]])e.beginPath(),e.arc(n,r,5,0,7),e.fill()}),np(t,Q.ridges,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.fillStyle=`#b9b3c6`;for(let n=0;n<8;n++)e.fillRect(t/8*n+t/32,10,t/20,t-20);e.fillStyle=`#857f93`,e.fillRect(0,0,t,7),e.fillRect(0,t-7,t,7)}),np(t,Q.strata,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.strokeStyle=`#b8a8a4`,e.lineWidth=5,e.lineCap=`round`,[.18,.42,.63,.86].forEach((n,r)=>{e.beginPath(),e.moveTo(0,n*t);for(let i=0;i<=t;i+=t/6)e.lineTo(i,n*t+Math.sin(i*.05+r*2)*7);e.stroke()}),e.lineWidth=4;for(let[n,r,i]of[[60,.18,.42],[170,.42,.63],[110,.63,.86],[215,0,.18]])e.beginPath(),e.moveTo(n,r*t),e.lineTo(n+8,i*t),e.stroke()}),np(t,Q.grate,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.fillStyle=`#6b6678`;let n=t/8;for(let t=0;t<8;t++)for(let r=0;r<8;r++)e.fillRect(t*n+n*.2,r*n+n*.2,n*.6,n*.6)}),np(t,Q.emblem,256,(e,t)=>{e.translate(t/2,t/2),e.fillStyle=`#ffffff`;for(let n=0;n<8;n++)e.save(),e.rotate(n/8*Math.PI*2),e.fillRect(-t*.07,-t*.44,t*.14,t*.2),e.restore();e.beginPath(),e.arc(0,0,t*.33,0,7),e.fill(),e.globalCompositeOperation=`destination-out`,e.beginPath(),e.arc(0,0,t*.2,0,7),e.fill(),e.globalCompositeOperation=`source-over`,e.fillRect(-t*.13,-t*.05,t*.26,t*.07),e.fillRect(-t*.05,0,t*.1,t*.09),e.fillRect(-t*.1,t*.08,t*.2,t*.04)}),np(t,Q.white,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t)}),np(t,Q.windows,256,(e,t)=>{e.fillStyle=`#3a3050`,e.fillRect(0,0,t,t);let n=7;for(let r=0;r<6;r++)for(let i=0;i<4;i++)n=(n*31+17)%97,e.fillStyle=n%3==0?`#3a3050`:`#ffffff`,e.fillRect(t/4*i+10,t/6*r+9,t/4-20,t/6-18)}),np(t,Q.ties,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.fillStyle=`#8a8494`;for(let n=0;n<4;n++)e.fillRect(8,t/4*n+t/16,t-16,t/8);e.fillStyle=`#5c5768`,e.fillRect(t*.2,0,t*.07,t),e.fillRect(t*.73,0,t*.07,t)}),np(t,Q.lava,256,(e,t)=>{e.fillStyle=`#ee7a14`,e.fillRect(0,0,t,t);let n=3,r=()=>(n=(n*53+11)%211,n/211);for(let n=0;n<16;n++){let i=r()*t,a=r()*t;e.fillStyle=n%3==0?`#ffa42a`:n%3==1?`#c44c0a`:`#f28a1c`,e.beginPath(),e.ellipse(i,a,t*(.06+r()*.11),t*(.04+r()*.06),r()*3.14,0,7),e.fill()}let i=(t,n,r,i,a,o,s,c)=>{e.fillStyle=c,e.beginPath();for(let c=0;c<7;c++){let l=a+c/7*6.283,u=s*(.76+(c*37+o*11)%5*.1),d=t+Math.cos(l)*r*u,f=n+Math.sin(l)*i*u;c?e.lineTo(d,f):e.moveTo(d,f)}e.closePath(),e.fill()};for(let e=0;e<13;e++){let n=r()*t,a=r()*t,o=t*(.05+r()*.075),s=o*(.4+r()*.22),c=r()*6.283;i(n,a,o,s,c,e,1.3,`#ffb030`),i(n,a,o,s,c,e,1,`#2a0c10`),i(n-o*.1,a-s*.16,o,s,c,e,.6,`#46181c`)}e.lineCap=`round`;for(let n=0;n<14;n++){let i=r()*t,a=r()*t,o=(r()-.5)*t*.2,s=(r()-.5)*t*.34;e.strokeStyle=n%4==0?`#ffe070`:`#ffb838`,e.lineWidth=t*(.012+r()*.014),e.beginPath(),e.moveTo(i,a),e.quadraticCurveTo(i+o*.2+s*.3,a+s*.5,i+o,a+s),e.stroke()}}),np(t,Q.arrow,256,(e,t)=>{e.fillStyle=`#ffffff`;for(let n of[.12,.46])e.beginPath(),e.moveTo(t*n,t*.2),e.lineTo(t*(n+.14),t*.2),e.lineTo(t*(n+.38),t*.5),e.lineTo(t*(n+.14),t*.8),e.lineTo(t*n,t*.8),e.lineTo(t*(n+.24),t*.5),e.closePath(),e.fill()}),np(t,Q.bolt,256,(e,t)=>{e.fillStyle=`#ffffff`,e.beginPath(),e.moveTo(t*.58,t*.06),e.lineTo(t*.24,t*.56),e.lineTo(t*.46,t*.56),e.lineTo(t*.38,t*.94),e.lineTo(t*.76,t*.4),e.lineTo(t*.53,t*.4),e.closePath(),e.fill()}),np(t,Q.crate,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.strokeStyle=`#9a93a6`,e.lineWidth=6;for(let n=1;n<4;n++)e.beginPath(),e.moveTo(n*t/4,0),e.lineTo(n*t/4,t),e.stroke();e.strokeRect(3,3,t-6,t-6)}),np(t,Q.grateLava,256,(e,t)=>{e.fillStyle=`#3e3046`,e.fillRect(0,0,t,t);let n=t/8,r=t/2;for(let t=0;t<8;t++)for(let i=0;i<2;i++){let a=t*n+n*.34,o=i*r+r*.08,s=n*.32,c=r*.84,l=.5+.5*Math.sin(t/8*Math.PI*2+1.3*Math.sin(i/2*Math.PI*2));e.fillStyle=`#3a1a1c`,e.fillRect(a,o,s,c);let u=e.createLinearGradient(a,0,a+s,0);u.addColorStop(0,`#8a2610`),u.addColorStop(.5,`#f08226`),u.addColorStop(1,`#8a2610`),e.globalAlpha=.25+.6*l,e.fillStyle=u,e.fillRect(a,o,s,c),e.globalAlpha=1}}),np(t,Q.rivets,256,(e,t)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,t),e.fillStyle=`#8a8496`;for(let n=0;n<6;n++)e.beginPath(),e.arc(t/6*n+t/12,t*.2,7,0,7),e.arc(t/6*n+t/12,t*.8,7,0,7),e.fill();e.fillRect(0,t*.47,t,t*.06)}),ip=new aa(e),ip.anisotropy=4,ip.generateMipmaps=!0,ip.minFilter=S,ip}var op={classic:{"POW!":[`#ffffff`,`#1a1420`,`#ff5a1e`],"CRIT!":[`#ffd21e`,`#1a1420`,`#ff7a1e`],"BONK!":[`#ff8a1e`,`#1a1420`,`#ffe45e`],"ZAP!":[`#8ee8ff`,`#101830`,`#ffffff`],"OVERLOAD!":[`#ffffff`,`#1a1030`,`#9a6bff`],"BOOM!":[`#ff5a2a`,`#1a1420`,`#ffd21e`],"OUCH!":[`#ff4a5a`,`#1a1420`,`#ffffff`],"NICE!":[`#5effc0`,`#102018`,`#ffffff`]},neon:{"POW!":[`#ff5ae0`,`#12062a`,`#5ef2ff`],"CRIT!":[`#5ef2ff`,`#12062a`,`#ff5ae0`],"BONK!":[`#b6ff3c`,`#12062a`,`#ff5ae0`],"ZAP!":[`#ffffff`,`#12062a`,`#5ef2ff`],"OVERLOAD!":[`#ffe45e`,`#12062a`,`#ff5ae0`],"BOOM!":[`#ff7a3c`,`#12062a`,`#5ef2ff`],"OUCH!":[`#ff4a7a`,`#12062a`,`#ffffff`],"NICE!":[`#5effc0`,`#12062a`,`#ffffff`]},ink:{"POW!":[`#ffffff`,`#000000`,`#e02a2a`],"CRIT!":[`#ffffff`,`#000000`,`#e02a2a`],"BONK!":[`#ffffff`,`#000000`,`#e02a2a`],"ZAP!":[`#ffffff`,`#000000`,`#2a6ae0`],"OVERLOAD!":[`#ffffff`,`#000000`,`#e02a2a`],"BOOM!":[`#ffffff`,`#000000`,`#e02a2a`],"OUCH!":[`#ffffff`,`#000000`,`#e02a2a`],"NICE!":[`#ffffff`,`#000000`,`#2ae06a`]}},sp=[`POW!`,`CRIT!`,`BONK!`,`ZAP!`,`OVERLOAD!`,`BOOM!`,`OUCH!`,`NICE!`],cp=new Map;function lp(e,t){let n=t+e,r=cp.get(n);if(r)return r;let i=document.createElement(`canvas`);i.width=512,i.height=256;let a=i.getContext(`2d`),[o,s,c]=op[t][e];a.translate(256,128),a.rotate(-.1),a.fillStyle=c,a.strokeStyle=s,a.lineWidth=8,a.lineJoin=`miter`,a.beginPath();for(let e=0;e<28;e++){let t=e/28*Math.PI*2,n=e%2==0?1:.72,r=Math.cos(t)*225*n,i=Math.sin(t)*100*n;e===0?a.moveTo(r,i):a.lineTo(r,i)}a.closePath(),a.fill(),a.stroke(),a.font=`italic 900 ${e.length>6?76:104}px Impact, "Arial Black", "Arial Narrow", sans-serif`,a.textAlign=`center`,a.textBaseline=`middle`,a.lineWidth=16,a.strokeStyle=s,a.lineJoin=`round`,a.strokeText(e,0,6),a.fillStyle=o,a.fillText(e,0,6);let l=new aa(i);return cp.set(n,l),l}var up=null;function dp(){if(up)return up;let e=document.createElement(`canvas`);e.width=e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.35,`rgba(255,255,255,0.55)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128),up=new aa(e),up}var fp=null;function pp(){if(fp)return fp;let e=document.createElement(`canvas`);e.width=32,e.height=96;let t=e.getContext(`2d`),n=t.createImageData(32,96);for(let e=0;e<96;e++){let t=e/95,r=.95*(1-t)**.65*(.65+.35*Math.min(1,t/.15));for(let i=0;i<32;i++){let a=Math.abs((i+.5)/32*2-1)/Math.max(r,.001),o=Math.max(0,1-a)**1.4*(1-t*t),s=Math.min(1,Math.max(0,(a*1.3+t*1.1-.15)/.55)),c=s*s*(3-2*s),l=(e*32+i)*4;n.data[l]=255-199*c,n.data[l+1]=255-55*c,n.data[l+2]=255,n.data[l+3]=255*Math.min(1,o*1.25)}}return t.putImageData(n,0,0),fp=new aa(e),fp}var mp=null;function hp(){if(mp)return mp;let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`);return t.strokeStyle=`#ffffff`,t.lineWidth=11,t.beginPath(),t.arc(128,128,116,0,7),t.stroke(),t.lineWidth=4,t.globalAlpha=.6,t.beginPath(),t.arc(128,128,96,0,7),t.stroke(),mp=new aa(e),mp}var gp=null;function _p(){if(gp)return gp;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`);return t.fillStyle=`#ffffff`,t.beginPath(),t.arc(32,32,28,0,7),t.fill(),gp=new aa(e),gp}var vp=()=>({solid:new Z,decal:new Z,glow:new Z,gdecal:new Z,props:[]}),yp=t.lavaY;function bp(e,t,n,r,i,a,o=0,s=1,c=0,l=-9){let u=Rl(t);if(!u)return null;let d=a/(u.max.y-u.min.y),f={m:t,x:n,y:r-u.min.y*d,z:i,s:[d*s,d,d*s],yaw:o};if(c>0){let e=n<0?-1:1,t=Math.cos(o),r=Math.sin(o),i=u.geo.attributes.position.array,a=1/0;for(let o=0;o<i.length;o+=3)f.y+i[o+1]*d<l||(a=Math.min(a,(n+(i[o]*t+i[o+2]*r)*f.s[0])*e));a<c&&(f.x+=e*(c-a))}return e.props.push(f),f}var xp={stack:[1,0],load:[1,0],tower:[0,1],smelter:[0,1]},Sp=new Map;function Cp(e,t){let n=Sp.get(e);return n||(n=mf({model:t,doubleSide:!0,emis:xp[e]??[0,0]}),Sp.set(e,n)),n}function wp(e){let t=new Map;for(let n of e){let e=t.get(n.m);e?e.push(n):t.set(n.m,[n])}let n=(e,t)=>{let n=e.attributes.position.array,r=e.attributes.normal.array,i=e.attributes.uv.array,a=e.index.array,o=n.length/3,s=t.length,c=new Float32Array(o*3*s),l=new Int8Array(o*3*s),u=new Float32Array(o*2*s),d=o*s>65535?new Uint32Array(a.length*s):new Uint16Array(a.length*s);t.forEach((e,t)=>{let s=Math.cos(e.yaw),f=Math.sin(e.yaw),p=t*o;for(let t=0;t<o;t++){let i=t*3,a=(p+t)*3,o=n[i]*e.s[0],u=n[i+2]*e.s[2];c[a]=e.x+o*s+u*f,c[a+1]=e.y+n[i+1]*e.s[1],c[a+2]=e.z-o*f+u*s;let d=r[i]/e.s[0],m=r[i+1]/e.s[1],h=r[i+2]/e.s[2],g=127/(Math.hypot(d,m,h)||1);l[a]=Math.round((d*s+h*f)*g),l[a+1]=Math.round(m*g),l[a+2]=Math.round((-d*f+h*s)*g)}u.set(i,p*2);for(let e=0;e<a.length;e++)d[t*a.length+e]=a[e]+p});let f=new Or;return f.setAttribute(`position`,new pr(c,3)),f.setAttribute(`normal`,new pr(l,3,!0)),f.setAttribute(`uv`,new pr(u,2)),f.setIndex(new pr(d,1)),f.computeBoundingSphere(),f.computeBoundingBox(),f},r=[];for(let[e,i]of t){let t=Rl(e);if(!t)continue;let a=n(t.geo,i);r.push({m:e,hi:a,lo:t.lo?n(t.lo,i):a})}return r}var Tp=170,Ep=40,Dp=270,Op=null;function kp(){if(!Op){let e=mf({map:ap(),doubleSide:!0,surf:!0});e.polygonOffset=!0,e.polygonOffsetFactor=-2,e.polygonOffsetUnits=-2;let t=mf({map:ap(),doubleSide:!0,glow:1});t.polygonOffset=!0,t.polygonOffsetFactor=-2,t.polygonOffsetUnits=-2,Op={solid:mf({surf:!0}),decal:e,glow:mf({glow:1,doubleSide:!0}),glowDecal:t}}return Op}var Ap=.03;function jp(e,t,n,r,i,a,o,s,c=0){let l=lf(o),u=c>0?c:i-r;for(let o=r;o<i-.01;o+=u){let r=Math.min(i,o+u);e.quad([t,a+Ap,-o],[n,a+Ap,-o],[n,a+Ap,-r],[t,a+Ap,-r],s,l)}}function Mp(e,t,n,r,i,a,o,s,c=0){let l=lf(o),u=c>0?c:n-t;for(let o=t;o<n-.01;o+=u){let t=Math.min(n,o+u);e.quad([o,r,-a+Ap],[t,r,-a+Ap],[t,i,-a+Ap],[o,i,-a+Ap],s,l)}}function Np(e,t,n,r,i,a,o,s,c,l=0){let u=lf(s),d=l>0?l:a-i,f=t+o*Ap;for(let t=i;t<a-.01;t+=d){let i=Math.min(a,t+d);o>0?e.quad([f,n,-t],[f,n,-i],[f,r,-i],[f,r,-t],c,u):e.quad([f,n,-i],[f,n,-t],[f,r,-t],[f,r,-i],c,u)}}function Pp(e,t,n,r){let i={x:0,y:0,slope:0},a=Math.max(2,Math.ceil((t.s1-t.s0)/1.25)),o=0,s=0,c=0,l=.22,u=.12,d=cf(n.rail,16777215,.22),f=cf(n.rail,16777215,.8),p=cf(X(n.rail,.74),13657626,.3),m=cf(X(n.rail,.4),5909008,.4);for(let h=0;h<=a;h++){let g=t.s0+(t.s1-t.s0)*h/a;if(dd(t,g,i),h>0){let t=[o,s,-c],r=[i.x,i.y,-g],a=(e,t,n)=>[e[0]+t,e[1]+n,e[2]];e.glow.quad(a(t,-.12,0),a(t,u,0),a(r,u,0),a(r,-.12,0),d),e.glow.quad(a(t,-.065,.004),a(t,-.015,.004),a(r,-.015,.004),a(r,-.065,.004),f);for(let i of[-1,1]){let o=[[u,0,0],[l,-.07,n.rail],[l,-.16,i<0?p:X(p,.86)],[.15,-.26,m]];for(let n=1;n<o.length;n++){let s=o[n-1],c=o[n],l=a(t,i*s[0],s[1]),u=a(r,i*s[0],s[1]),d=a(t,i*c[0],c[1]),f=a(r,i*c[0],c[1]);i>0?e.glow.quad(d,f,u,l,c[2]):e.glow.quad(f,d,l,u,c[2])}}if(h%4==1){let n=.05,i=[t[0]+(r[0]-t[0])*n,t[1]+(r[1]-t[1])*n+.006,t[2]+(r[2]-t[2])*n];e.glow.quad(a(t,-.12,.006),a(t,u,.006),a(i,u,0),a(i,-.12,0),m)}e.solid.box((t[0]+r[0])/2,(t[1]+r[1])/2-.4,(t[2]+r[2])/2,.28,.3,Math.abs(r[2]-t[2])+.02,n.support)}if(h%7==3){let t=r(i.x,g),a=t===-1/0?-34:t,o=i.y-.4-a;o>.3&&(e.solid.wedge(i.x,a+o/2,-g,.7,o,.7,.62,.62,n.support),e.solid.rbox(i.x,i.y-.64,-g,1.16,.3,.66,.08,X(n.support,.8),X(n.support,1.05),1),e.solid.box(i.x,i.y-.95,-g,.62,.12,.62,X(n.support,.62)),e.glow.box(i.x,i.y-.64,-g+.335,.5,.1,.02,n.railLight)),e.glow.box(i.x+.3,i.y-.5,-g,.14,.14,.3,n.railLight),e.glow.box(i.x-.3,i.y-.5,-g,.14,.14,.3,n.railLight)}o=i.x,s=i.y,c=g}}function Fp(e,t,n,r){let i=vp(),a=t?-1:1,o=e.ground.map(e=>{let t=e[0]*a,n=e[1]*a;return{x0:Math.min(t,n),x1:Math.max(t,n),s0:e[2],s1:e[3],y:e[4]}}),s=(e,t)=>{let n=-1/0;for(let r of o)t>=r.s0&&t<=r.s1&&e>=r.x0&&e<=r.x1&&r.y>n&&(n=r.y);return n},c=r===`canyon`?46:r===`yard`?18:15;for(let e of o){let t=e.x1-e.x0,a=e.s1-e.s0,o=(e.x0+e.x1)/2,s=(e.s0+e.s1)/2;i.solid.box(o,e.y-.35,-s,t,.7,a,n.deckSide,n.deck);let l=Math.max(1,Math.round(t/3));for(let a=0;a<l;a++){let o=e.x0+t*a/l,s=e.x0+t*(a+1)/l;r===`yard`?jp(i.decal,o,s,e.s0+.6,e.s1-.6,e.y,Q.white,a%2?n.deck:n.deckAlt):r===`foundry`&&!(a%2)?jp(i.gdecal,o+.04,s-.04,e.s0+.6,e.s1-.6,e.y,Q.grateLava,16777215,3):jp(i.decal,o+.04,s-.04,e.s0+.6,e.s1-.6,e.y,a%2||r===`canyon`?Q.panel:Q.grate,a%2?n.deck:n.deckAlt,3)}if(r===`yard`&&t>5){jp(i.decal,o-1,o+1,e.s0+.6,e.s1-.6,e.y+.012,Q.ties,8028838,2);for(let n=0;n<l;n++){let r=e.x0+t*(n+.5)/l;for(let t of[-.72,.72])i.solid.box(r+t,e.y+.04,-s,.11,.08,a-1.4,8950456,12898032,!0)}for(let t=e.s0+6;t<e.s1-2;t+=6)jp(i.decal,e.x0+.1,e.x1-.1,t,t+.09,e.y+.008,Q.white,2303562)}if(r===`foundry`&&t>5){let t=0;for(let n=e.s0+3;n<e.s1-6;n+=9,t++){let r=t%2?e.x0+.15:e.x1-.75;jp(i.decal,r,r+.6,n,n+4.5,e.y+.012,Q.white,12085818)}}if(jp(i.decal,e.x0,e.x1,e.s0,e.s0+.6,e.y,Q.hazard,16777215),jp(i.decal,e.x0,e.x1,e.s1-.6,e.s1,e.y,Q.hazard,16777215),Mp(i.decal,e.x0,e.x1,e.y-.7,e.y,e.s0,Q.hazard,16777215,1.4),t>7&&a>18){if(r===`foundry`){jp(i.decal,o-1.3,o+1.3,e.s0+.6,e.s1-.6,e.y+.014,Q.white,8660016);for(let t=e.s0+2.5;t<e.s1-5;t+=6)jp(i.decal,o-1.15,o+1.15,t,t+3.4,e.y+.03,Q.chevron,14700618)}else for(let t=e.s0+5;t<e.s1-6;t+=15)jp(i.decal,o-1.1,o+1.1,t,t+3.2,e.y+.03,Q.chevron,n.safe)}for(let t of[-1,1]){let r=t<0?e.x0:e.x1;if(Math.abs(r)<4.4)continue;let o=r+t*.12;for(let t=e.s0+.4;t<=e.s1-.3;t+=4)i.solid.box(o,e.y+.5,-t,.12,1,.12,n.guard);i.solid.box(o,e.y+1,-s,.1,.1,a-.4,n.guard),i.solid.box(o,e.y+.55,-s,.07,.07,a-.4,X(n.guard,.85))}let u=X(n.support,.92);for(let s=e.s0+Math.min(4,a/2);s<=e.s1-2;s+=16)if(r===`canyon`)i.solid.box(o,e.y-.7-c/2,-s,Math.min(2.2,t*.4),c,1.8,n.support),i.solid.box(o,e.y-1.2,-s,t*.92,1,2.6,u);else{for(let r of[-1,1]){let a=o+r*(t/2-.45);i.solid.box(a,e.y-.7-c/2,-s,.5,c,.5,n.support)}if(i.solid.box(o,e.y-1.1,-s,t,.5,.6,u),i.solid.box(o,e.y-5.5,-s,t,.35,.35,u),t>3){let n=new H().makeRotationZ(Math.atan2(4.2,t-1)).setPosition(o,e.y-3.3,-s);i.solid.m=n,i.solid.box(0,0,0,Math.hypot(t-1,4.2),.22,.22,u),i.solid.m=new H().makeRotationZ(-Math.atan2(4.2,t-1)).setPosition(o,e.y-3.3,-s),i.solid.box(0,0,0,Math.hypot(t-1,4.2),.22,.22,u),i.solid.m=null}if(r===`foundry`)for(let r of[-1,1]){let a=o+r*t/2;if(Math.abs(a)<4.4)continue;let c=a+r*2.7,l=e.y-.62,d=yp-.6;i.solid.box(a+r*1.5,l,-s,3,.34,.42,u),i.solid.box(c,(e.y-.15+d)/2,-s,.44,e.y-.15-d,.44,n.support),i.solid.box(c,e.y-.12,-s,.74,.22,.74,X(n.support,1.25));let f=2.3,p=l-.2,m=p-(yp+.2);i.solid.m=new H().makeRotationZ(-r*Math.atan2(m,f)).setPosition(a+r*1.45,p-m/2,-s),i.solid.box(0,0,0,Math.hypot(f,m),.2,.2,u),i.solid.m=null}}}for(let t of e.rails??[]){let e=[];for(let n=0;n<t.length;n+=3)e.push(t[n]*a,t[n+1],t[n+2]);Pp(i,{id:0,pts:e,s0:e[2],s1:e[e.length-1]},n,s)}for(let t of e.hazards??[]){let e=t[1]*a,o=t[2],c=t[3]??0,l=Math.max(0,s(e,o));if(t[0]===`crusher`){let t=r===`yard`?9844846:r===`foundry`?8010314:10115642,a=r===`yard`?6576238:r===`foundry`?5917278:11565642;for(let n of[-1,1])i.solid.box(e+n*(c/2+.5),l+4.2,-o,.8,8.4,1.2,t);i.solid.box(e,l+8.2,-o,c+2.2,.9,1.6,t),i.solid.box(e,l+7.2,-o,1.6,1.2,1.2,n.guard),i.solid.box(e,l+5.6,-o,.16,2.2,.16,2762288),i.solid.box(e,l+3.05,-o,c,3.6,2.2,a),Mp(i.decal,e-c/2,e+c/2,l+1.25,l+1.95,o-1.1,Q.hazard,16777215,1.4),Mp(i.decal,e-c/2,e+c/2,l+1.95,l+4.85,o-1.1,Q.crate,a,c/2);let s=lf(Q.chevron);i.gdecal.quad([e+.9,l+4.3,-o+1.14],[e-.9,l+4.3,-o+1.14],[e-.9,l+2.3,-o+1.14],[e+.9,l+2.3,-o+1.14],n.danger,s);for(let t of[-1,1])i.glow.box(e+t*(c/2+.5),l+2.4,-o+.62,.34,.7,.1,n.danger)}else if(t[0]===`boost`){i.glow.box(e,l+.05,-o-2,c,.1,5,X(n.safe,.55));let t=lf(Q.chevron);for(let n=0;n<2;n++){let r=o+n*2.4;i.gdecal.quad([e-1.2,l+.13,-r],[e+1.2,l+.13,-r],[e+1.2,l+.13,-r-2.2],[e-1.2,l+.13,-r-2.2],16777215,t)}}else if(t[0]===`pour`){i.solid.box(e,l+7.4,-o-3,c*.8,1.6,2.4,n.support),i.solid.box(e,l+6.4,-o-3,c*.5,.5,1.2,X(n.support,.7)),i.glow.box(e,l+6.1,-o-3,c*.4,.12,.9,n.danger);for(let t of[-1,1])i.solid.box(e+t*c*.45,l+8.6,-o-3,.2,1,.2,n.support)}}if(e.id===`gate`){for(let e of[-1,1])i.solid.box(e*5.2,3.6,-26,1,7.2,1,n.support),i.glow.box(e*5.2,5.2,-25.48,.5,1.6,.06,n.safe),i.glow.box(e*4.6,7.6,-26,.4,.4,.4,n.safe);i.solid.box(0,7.6,-26,11.4,1.4,1.2,X(n.support,.85)),Mp(i.decal,-5,5,7,8.2,25.38,Q.hazard,16777215,1.6),jp(i.decal,-4.5,4.5,25,27,0,Q.hazard,16777215,0);let e=lf(Q.arrow);for(let t=-1;t<=1;t++)i.gdecal.quad([t*3-1.1,.06,-21],[t*3+1.1,.06,-21],[t*3+1.1,.06,-23.8],[t*3-1.1,.06,-23.8],n.safe,[e[0],e[1],e[2],e[3]])}return i}var Ip=130,Lp=[8,8,8,8];function Rp(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=l.length,m=[],h=[];for(let e=0;e<p;e++){let d=u+e/p*Math.PI*2,f=Math.cos(d)*l[e],g=Math.sin(d)*l[e];m.push([t+f*a*s,r,n+g*o*s]),h.push([t+f*a*c,i,n+g*o*c])}for(let r=0;r<p;r++){let a=(r+1)%p;e.quad(m[a],m[r],h[r],h[a],X(d,.93+r*7%4*.045),Lp),e.quad([t,i,n],h[a],h[r],h[r],f)}}var zp=Math.PI*2;function Bp(e,t,n,r,i,a,o,s,c){let l=o.length,u=[],d=[];for(let e=0;e<l;e++){let c=[];for(let l=0;l<a;l++){let u=l/a*zp,d=s(u,e);c.push([t+Math.cos(u)*r*d,o[e],n+Math.sin(u)*i*d])}u.push(c)}for(let e=0;e<l;e++){let t=[];for(let n=0;n<a;n++){let r=u[e][(n+1)%a],i=u[e][(n+a-1)%a],o=u[Math.min(l-1,e+1)][n],s=u[Math.max(0,e-1)][n],c=r[0]-i[0],d=r[1]-i[1],f=r[2]-i[2],p=o[0]-s[0],m=o[1]-s[1],h=o[2]-s[2],g=m*f-h*d,_=h*c-p*f,v=p*d-m*c,y=Math.hypot(g,_,v)||1;t.push([g/y,_/y,v/y])}d.push(t)}for(let t=0;t<l-1;t++)for(let n=0;n<a;n++){let r=(n+1)%a;e.quadN([u[t][r],u[t][n],u[t+1][n],u[t+1][r]],[d[t][r],d[t][n],d[t+1][n],d[t+1][r]],[c[t],c[t],c[t+1],c[t+1]],Lp[0],Lp[1])}return u}function Vp(e,t,n,r,i,a,o,s,c=!1){let l=[13918780,12275251,14711372,11355440,13195834],u=c?16:12,d=i*.56,f=a*.56,p=o-s,m=t.next()*zp,h=t.next()*zp,g=t.next()*zp,_=[];for(let e=0,n=c?4:3;e<n;e++)_.push([t.next()*zp,.1+t.next()*.1,.1+t.next()*.08]);let v=e=>{let t=.88+.1*Math.sin(2*e+m)+.07*Math.sin(3*e+h)+.04*Math.sin(5*e+g);for(let n of _){let r=Math.abs(e-n[0])%zp;r>Math.PI&&(r=zp-r),t-=n[1]*Math.exp(-((r/n[2])**2))}return t},y=c?6+Math.floor(t.next()*3):4+Math.floor(t.next()*2),b=(t,n,r,i)=>{e.solid.sphere(t,n,r,i,7309882,6,4,.62),e.solid.sphere(t+i*.8,n+i*.12,r+i*.35,i*.72,9678159,6,4,.62)},x=s,S=1.12,C=null;for(let i=0;i<y;i++){let a=i===y-1,s=a?o:Math.min(o-1.5,x+p/y*(.6+t.next()*.8));if(s-x<.6)continue;let m=i===0||!a&&i%3==2,h=s-x,g=t.next()*zp,_=.03+t.next()*.025,w=S,T=m?[i===0?1.3:1.14,1.08,.98,.9]:[.955,1,1,.93],E=[x,x+h*(m?.35:.14),x+h*(m?.75:.8),s],D=Math.min(1,Math.max(0,(o-(x+s)/2)/Math.max(1,p))),O=cf(l[(i+Math.floor(t.next()*5))%5],8268864,D*.42),k=m?[X(O,.8),X(O,.9),X(O,.97),X(O,1.06)]:[X(O,.7),X(O,.97),X(O,1.03),X(O,1.2)],A=Bp(e.solid,n,r,d,f,u,E,(e,t)=>v(e)*w*T[t]*(1+_*Math.sin(4*e+g)),k),ee=cf(15900784,10107972,D*.45);if(C)for(let t=0;t<u;t++){let n=(t+1)%u;e.solid.quad(C[n],C[t],A[0][t],A[0][n],ee)}if(C=A[3],c&&!a&&s>-34&&t.chance(.7)){let e=t.next()*zp,i=v(e)*w*.86;b(n+Math.cos(e)*d*i,s+.35,r+Math.sin(e)*f*i,1+t.next()*.9)}S=w*T[3]*(m?.97:.9+t.next()*.06),x=s}if(C)for(let t=0;t<u;t++)e.solid.quad([n,o+.25,r],C[(t+1)%u],C[t],C[t],16034940);for(let e=0;e<3;e++)t.chance(.7)&&b(n+(t.next()-.5)*d*S*.9,o+.4,r+(t.next()-.5)*f*S*.9,1.1+t.next()*1.1);if(c)for(let i=0;i<2;i++){if(!t.chance(.75))continue;let i=t.next()*zp,a=5+t.next()*5;Vp(e,t,n+Math.cos(i)*d*.72,r+Math.sin(i)*f*.72,a,a,s+p*(.45+t.next()*.4),s)}}function Hp(e,t,n){e.solid.box(0,-53,-65,440,2,Ip,11027756,12737080,!0);let r=e=>8*Math.sin(e/Ip*Math.PI*2)+3*Math.sin(e/Ip*Math.PI*6),i=e=>13+3.5*Math.sin(e/Ip*Math.PI*4+1),a=(t,n,r,i,a,o,s,c)=>{e.glow.quad([r,s,t],[i,s,t],[o,s,n],[a,s,n],c)};for(let e=0;e<16;e++){let t=-(e/16)*Ip,n=-((e+1)/16)*Ip,o=r(t),s=r(n),c=i(t),l=i(n),u=Math.cos(t/Ip*Math.PI*2),d=Math.cos(n/Ip*Math.PI*2);a(t,n,o-c-3.5,o+c+3.5,s-l-3.5,s+l+3.5,-51.92,1405064),a(t,n,o-c,o+c,s-l,s+l,-51.88,674914),a(t,n,o-u*4-c*.42,o-u*4+c*.42,s-d*4-l*.42,s-d*4+l*.42,-51.84,473680);for(let e of[-1,1])a(t,n,o+e*c-.35,o+e*c+.35,s+e*l-.35,s+e*l+.35,-51.8,10479850);if(e%2==0)for(let e of[-.5,.15,.6])a(t,n,o+e*c,o+e*c+.3,s+e*l,s+e*l+.3,-51.78,5815500)}let o=[1,.8,1.05,.85,.95,.75];for(let n=0;n<6;n++){let n=-t.next()*Ip,a=r(n)+(t.next()-.5)*i(n)*1.5,s=1.2+t.next()*2;Rp(e.solid,a,n,-52,-50.9+t.next()*1.6,s,s,1,.55,o,t.next()*6,12079151,14715484),e.glow.quad([a-s-.7,-51.74,n+s+.7],[a+s+.7,-51.74,n+s+.7],[a+s+.7,-51.74,n-s-.7],[a-s-.7,-51.74,n-s-.7],14678266),e.glow.quad([a-s*.5,-51.73,n-s],[a+s*.5,-51.73,n-s],[a+.3,-51.73,n-s-7],[a-.3,-51.73,n-s-7],10479850)}for(let n of[-1,1])for(let r=0;r<4;r++){let r=-t.next()*Ip,i=6+t.next()*8,a=2+t.next()*7;e.solid.box(n*(17+i/2-1.5),-52+a/2,r,i,a,10+t.next()*14,12079151,14715484,!0)}for(let r of[-1,1]){let i=-t.next()*12,a=0;for(;i>-122;){let o=14+t.next()*16,s=16+t.next()*18,c=r*(12.5+o/2+t.next()*16),l=-8+t.next()*40;(a+++n+ +(r>0))%2==0&&Math.abs(c)>27&&bp(e,`spire`,c,-52,i-s/2,Math.max(58,l+66),t.next()*zp,.32+t.next()*.12,16)||Vp(e,t,c,i-s/2,o,s,l,-52,!0),i-=s+2+t.next()*12}for(let n=0;n<2;n++){let i=34+t.next()*40,a=52+t.next()*30;n===0&&bp(e,`mesa`,r*(80+a*.3+t.next()*50),-52,-t.next()*Ip,a,t.next()*zp,.6)||Vp(e,t,r*(70+t.next()*90),-t.next()*Ip,i,30+t.next()*40,30+t.next()*80,-52)}for(let n=0;n<2;n++){let n=9+t.next()*9;Vp(e,t,r*(44+t.next()*60),-t.next()*Ip,n,n*(.8+t.next()*.5),46+t.next()*70,-52)}{let t=-(r>0==(n%2==0)?28+n*11%26:90+n*17%26),i=r*16.2,a=10+(n+ +(r>0))%3*4,o=[1,.86,1.04,.9,.98,.84,1.05,.88];Rp(e.solid,i,t,-52,-16,4.2,4.2,1,.96,o,.3,11355440,13195834),Rp(e.solid,i,t,-16,a-4,4,4,1,.92,o,.9,12275251,13918780),Rp(e.solid,i,t,a-4,a,3.7,3.7,1,.86,o,1.5,13918780,15241308);let s=r*12.3,c=t+3.9,l=r*14.8,u=t+6;Rp(e.solid,(s+l)/2+r*1.2,(c+u)/2-1.6,a-1.5,a-.25,2.6,2.2,1,.9,o,.2,12275251,15241308),e.glow.quad([s+r*.5,a+.04,c+.3],[l-r*.4,a+.04,u-.1],[i+r*.9,a+.04,t+.6],[i-r*.9,a+.04,t-.4],8378082);for(let t of[-.42,1.42])Rp(e.solid,s+(l-s)*t+r*.5,c+(u-c)*t-.5,a-4,a+1.1+(t>0?.7:0),1.5,1.4,1,.72,o,t+.6,12275251,15241308);let d=a-.2,f=-51.64,p=(t,n,i,a,o)=>{let p=(e,t,n)=>{let a=.5+(e-.5)*(1+n*o);return[s+(l-s)*a-r*(n*1.6+i),t,c+(u-c)*a+n*1.6+i]};e.glow.quad(p(t,f,1),p(n,f,1),p(n,d,0),p(t,d,0),a)};p(.06,.94,0,2857140,.6),p(.12,.26,.05,8376544,.6),p(.33,.38,.06,15924735,.6),p(.46,.6,.05,5815500,.6),p(.66,.7,.06,15924735,.6),p(.76,.9,.05,8376544,.6);let m=(s+l)/2-r*1.6,h=(c+u)/2+1.6;e.glow.quad([m-6.5,-51.660000000000004,h+7],[m+6.5,-51.660000000000004,h+7],[m+5,-51.660000000000004,h-4],[m-5,-51.660000000000004,h-4],5815500),e.glow.quad([m-4,f,h+4.5],[m+4,f,h+4.5],[m+3,f,h-2.5],[m-3,f,h-2.5],13497335)}if(t.chance(.85)){let n=r*(20+t.next()*8),i=-20-t.next()*80,a=-20-t.next()*8;Rp(e.solid,n,i-2.2,-52,a,5.5,4,1.2,.85,o,.4,11815731,14715484),e.glow.quad([n-1.2,a,i+1.6],[n+1.2,a,i+1.6],[n+.9,a+22,i-1],[n-.9,a+22,i-1],12578548),e.glow.quad([n-2.6,-52,i+3.2],[n+2.6,-52,i+3.2],[n+2.1,a,i+1.7],[n-2.1,a,i+1.7],14219002);for(let t of[-1.3,.2,1.4])e.glow.quad([n+t-.25,-52,i+3.25],[n+t+.25,-52,i+3.25],[n+t*.8+.2,a,i+1.75],[n+t*.8-.2,a,i+1.75],16777215);e.glow.quad([n-7,-51.7,i+9],[n+7,-51.7,i+9],[n+4.5,-51.7,i+1],[n-4.5,-51.7,i+1],16777215),e.glow.quad([n-9,-51.72,i+12],[n+9,-51.72,i+12],[n+7,-51.72,i+8],[n-7,-51.72,i+8],10479850)}}if(n!==1){e.solid.box(0,30,-70,260,2.4,7,7104640,9078432);for(let t=-110;t<=110;t+=44)e.solid.box(t,-12,-70,5,82,5,8025744,void 0,!0),e.solid.box(t,26,-70,14,5,6.5,6183538);let t=[14262814,12600622,9058890,12600622,2976410];for(let n=0;n<5;n++){let r=-58+n*16;e.solid.box(r,34.6,-70,14.5,6,5,t[n]),Mp(e.decal,r-3,r+3,32.4,36.8,67.5,Q.arrow,16777215)}}}function Up(e,t,n){e.solid.quad([-260,-18,0],[260,-18,0],[260,-18,-130],[-260,-18,-130],4471892);let r=[9057320,2508410,1862246,10122272,6173300,6054008,9060392];for(let i of[-1,1]){let a=[];if(Rl(`stack`))for(let n=0;n<2;n++){let r=-(12+n*62+t.next()*40);bp(e,`stack`,i*12.3,-5,r,7.8,n?Math.PI:0)&&a.push(r)}for(let n=0;n<3;n++){let o=i*(8.6+n*3.4+t.next()*.6),s=-t.next()*6;for(;s>-124;){let c=t.chance(.6)?12:6,l=n===0?5+Math.floor(t.next()*3):6+Math.floor(t.next()*5),u=a.some(e=>Math.abs(e-(s-c/2))<c/2+3.6);if(u&&(l=5),t.chance(.82)||u){for(let a=0;a<l;a++){let l=r[Math.floor(t.next()*r.length)],u=-16.7+a*2.6;e.solid.box(o,u,s-c/2,2.6,2.56,c,l),n===0&&u>-9&&Np(e.decal,o-i*1.3,u-1.2,u+1.2,-s,-s+c,-i,Q.ridges,l,c/2),u>-9&&Mp(e.decal,o-1.2,o+1.2,u-1.15,u+1.15,-s,Q.ridges,l)}if(n===0&&!u&&t.chance(.55)){let n=-16.7+(l-1)*2.6,r=t.chance(.5)?14041242:2279592;e.glow.box(o-i*1.36,n+(t.chance(.5)?.9:-.9),s-c/2,.1,.22,c*.8,r),t.chance(.6)&&e.glow.box(o-i*1.36,n-2.6,s-c*.3,.1,1.9,.22,r)}}s-=c+.6+t.next()*3}}let o=-20-t.next()*80,s=i*(6.6+t.next());e.solid.box(s,-2,o,.4,32,.4,4868714),e.solid.box(s,14.600000000000001,o,2.6,1.8,.6,3816026);for(let t=0;t<4;t++)e.glow.box(s-.7+t%2*1.4,14.200000000000003+(t>1?.8:0),o+.34,.9,.5,.06,6225856);for(let n=-6-t.next()*10;n>-126;n-=20+t.next()*8){let r=i*6.3,a=t.chance(.55)?14698654:2279592;e.solid.box(r,-6.2,n,.18,23.6,.18,3816026,void 0,!0),e.solid.box(r,5.1,n,.74,2.3,.4,1973814),e.solid.box(r,6.35,n+.1,.9,.14,.6,1315882);let o=t.chance(.5);e.glow.box(r,5.62,n+.22,.46,.46,.04,o?5903906:16724808),e.glow.box(r,4.58,n+.22,.46,.46,.04,o?3997582:1333808),e.glow.box(r-i*.14,2.4,n+.1,.1,2.6,.06,a)}if(i===(n===1?-1:1)){let n=i*(30+t.next()*16),r=-24-t.next()*80,a=64+t.next()*14;e.solid.box(n,-18+a/2,r,2.2,a,2.2,3944536,void 0,!0),e.solid.box(n-i*9,-18+a,r,46,1.5,1.5,4996716),e.solid.box(n+i*9,-18+a-1.6,r,5,3,2.6,3155530),e.solid.box(n,-18+a+2.6,r,1.2,4,1.2,3944536),e.solid.box(n-i*22,-18+a-7,r,.14,13,.14,2761280),e.solid.box(n-i*22,-18+a-14.4,r,2.4,1.8,1.6,6173300),e.glow.box(n,-18+a+4.9,r,.5,.5,.5,16724808),e.glow.box(n-i*31,-18+a+1.1,r,.4,.4,.4,16724808)}for(let n=0;n<3;n++){let n=18+t.next()*22,r=40+t.next()*90,a=i*(46+t.next()*90),o=-t.next()*Ip;e.solid.box(a,-18+r/2,o,n,r,20,4207706,5259376,!0);let s=t.chance(.5)?16734900:3535048,c=lf(Q.windows),l=Math.floor(r/14),u=Math.max(1,Math.floor(n/9));for(let r=1;r<l;r++)for(let i=0;i<u;i++){if(t.chance(.35))continue;let l=a-n/2+(i+.1)*(n/u),d=-18+r*14;e.gdecal.quad([l,d,o+10.05],[l+n/u*.8,d,o+10.05],[l+n/u*.8,d+9,o+10.05],[l,d+9,o+10.05],s,c)}}}for(let t=0;t<2;t++){let r=t?-104+n*12:-40-n*22;for(let t of[-1,1])e.solid.box(t*10.2,-1,r,1,34,1.4,11022970),e.glow.box(t*10.2,6,r+.72,.5,1.2,.06,16734900);e.solid.box(0,16.6,r,22,1.6,2,9054822,12602002);let i=t?-2.2+n*1.5:2.5-n*2;if(!bp(e,`load`,i,7.5,r,8.3)){e.solid.box(i,15.2,r,2.6,1.4,2.2,15906332);for(let t of[-2.4,2.4])e.solid.box(i+t,13.3,r,.14,2.6,.14,1710128);e.solid.box(i,12.1,r,6.4,.4,2,15906332),e.solid.box(i,9.5,r,7.2,4.8,3,6961778,9063570),Mp(e.decal,i-3.6,i+3.6,9.2,11.9,-r-1.52,Q.ridges,8013444,3.6),Mp(e.decal,i-3.6,i+3.6,7.1,8.3,-r-1.52,Q.hazard,16777215,2.2);let t=lf(Q.chevron);for(let n of[0,1.25])e.gdecal.quad([i+1.1,11.6-n,r+1.54],[i-1.1,11.6-n,r+1.54],[i-1.1,10-n,r+1.54],[i+1.1,10-n,r+1.54],16734900,t);for(let t of[-3.3,3.3])e.glow.box(i+t,9.4,r+1.54,.2,1.3,.06,16734900)}Mp(e.decal,-9,9,15.9,17.3,-r-1.02,Q.hazard,16777215,2.8)}}function Wp(e,t,n){let r=yp,i=.55,a=lf(Q.lava),o=[],s=[1,.78,1.06,.84,.96,.74,1.02,.8];for(let n=0;n<10;n++){let a=n%2?1:-1,o=t.next(),c=-t.next()*Ip,l=3+t.next()*6.5,u=l*(.6+t.next()*.5),d=t.next()*6.28,f=a*(8.6+l*1.3+o*40);Rp(e.glow,f,c,r-.2,r+i,l*1.2,u*1.2,1,1,s,d,15227406,15227406),Rp(e.solid,f,c,r-.5,r+i+.25+t.next()*.8,l,u,1,.86,s,d,2891312,4205120)}for(let t=0;t<9;t++){let a=(t%2?1:-1)*(10.4+(t*5+n*3)%7*.9),o=-(6+(t*31+n*17)%118),c=1.5+(t*3+n)%4*.45,l=c*(1.7+t%3*.5),u=t%4*.2-.3;Rp(e.glow,a,o,r-.2,r+i,c*1.25,l*1.12,1,1,s,u,15227406,15227406),Rp(e.solid,a,o,r-.5,r+i+.22,c,l,1,.88,s,u,2891312,4205120)}for(let n=0;n<4;n++){let a=(n-1.5)*27+t.next()*10,s=t.next()*6.28,c=.5+t.next()*.8;o.push([a,s]);let l=a+Math.sin(s)*7;for(let t=0;t<13;t++){let n=-t*10,o=n-10,u=a+Math.sin(s+(t+1)*.55)*7;if(Math.min(Math.abs(l),Math.abs(u))>7){e.glow.quad([l-c,r+i,n],[l+c,r+i,n],[u+c,r+i,o],[u-c,r+i,o],15754258);let t=c*.42;e.glow.quad([l-t,r+i+.03,n],[l+t,r+i+.03,n],[u+t,r+i+.03,o],[u-t,r+i+.03,o],16291370)}l=u}}let c=(e,t)=>{let n=Math.abs(e),r=-t/10*.55,i=0;for(let t of o){let n=(e-(t[0]+Math.sin(t[1]+r)*7))/7.5;i=Math.max(i,Math.exp(-n*n))}i*=Math.min(1,-t/12,(Ip+t)/12);let a=.5+.5*Math.sin(e*.11+2.2*Math.sin(t/Ip*6.2832)),s=Math.exp(-((n-9)/9)*((n-9)/9));return i=Math.min(1,Math.max(i,.6*a*Math.sqrt(a))+.15*s),i*(1-Math.min(1,Math.max(0,(n-60)/20)))},l=(e,t)=>{let n=c(e,t),r=Math.min(1,n*2),i=Math.max(0,n*2-1);return[.66+.34*r+.15*i,.34+.46*r+.45*i,.42+.38*r+.8*i]};for(let t=-200,n=0;t<200;t+=10,n++)for(let i=0,o=0;i>-130;i-=32.5,o++){let s=n%2?a[2]:a[0],c=n%2?a[0]:a[2],u=o%2?a[3]:a[1],d=o%2?a[1]:a[3],f=t>=-80&&t<80,p=f?2:1,m=f?4:1;for(let n=0;n<p;n++)for(let a=0;a<m;a++){let o=t+10*n/p,f=t+10*(n+1)/p,h=i-32.5*a/m,g=i-32.5*(a+1)/m,_=s+(c-s)*n/p,v=s+(c-s)*(n+1)/p,y=u+(d-u)*a/m,b=u+(d-u)*(a+1)/m;e.gdecal.quadC([o,r,h],[f,r,h],[f,r,g],[o,r,g],[l(o,h),l(f,h),l(f,g),l(o,g)],[_,y,v,b])}}let u=[6964296,8014916,5519434];for(let a of[-1,1]){let o=-t.next()*10,c=0;for(;o>-120;){let l=5+t.next()*4,d=5+t.next()*5,f=6+t.next()*34,p=a*(15.2+l/2+t.next()*12),m=u[Math.floor(t.next()*3)];if(c++===1+(n+ +(a>0))%2){let n=t.chance(.6)?-Math.PI/2:a>0?Math.PI:0,c=bp(e,`tower`,p,r,o-8,40+t.next()*16,n,1,17,r);if(c){Rp(e.glow,c.x-a*7,c.z+4,r-.2,r+i,7.5,6,1,1,s,0,15227406,16747040),o-=18+t.next()*8;continue}}for(let t of[-1,1])for(let n of[-1,1])e.solid.box(p+t*l/2,(r+f)/2,o-d/2+n*d/2,.55,f-r,.55,m,void 0,!0);for(let n=r+6;n<f;n+=7)e.solid.box(p,n,o,l+.5,.45,.45,X(m,.85)),e.solid.box(p,n,o-d,l+.5,.45,.45,X(m,.85)),e.solid.box(p-a*l/2,n,o-d/2,.45,.45,d,X(m,.85)),t.chance(.5)&&e.solid.box(p,n+2.6,o-d/2,l*.9,4.4,d*.9,X(m,.75),m),t.chance(.6)&&e.glow.box(p-a*(l/2+.05),n+.5,o-d/2,.08,.3,d*.7,16752682);if(e.solid.box(p,f,o-d/2,l+1.4,.6,d+1.4,X(m,1.15),X(m,1.4)),Mp(e.decal,p-l/2-.7,p+l/2+.7,f-.3,f+.3,-o-.71,Q.hazard,16777215,1.2),t.chance(.45)&&f>14){let t=p-a*(l/2+.3);e.solid.box(t,f-4.5,o-d/2,.12,7,2.6,11020858),Np(e.decal,t-a*.06,f-5.6,f-3.2,-o+d/2-1.2,-o+d/2+1.2,-a,Q.emblem,15915200)}if(t.chance(.6)&&f>12){let t=p-a*Math.max(0,l/2-1.5);e.solid.box(t,f-4.4,o+.14,2.5,6.4,.12,11020858,12728904),e.solid.box(t,f-1,o+.2,2.9,.22,.22,2760752),Mp(e.decal,t-1.15,t+1.15,f-5.4,f-3.1,-o-.21,Q.emblem,15915200)}if(t.chance(.7)){let t=p-a*(l/2-1);e.solid.cyl(t,f-2,o-d/2,1.4,1,1.6,3813444,8),e.glow.quad([t-.9,r,o-d/2+.1],[t+.9,r,o-d/2+.1],[t+.6,f-2.6,o-d/2+.1],[t-.6,f-2.6,o-d/2+.1],12727302),e.glow.quad([t-.36,r,o-d/2+.14],[t+.36,r,o-d/2+.14],[t+.24,f-2.6,o-d/2+.14],[t-.24,f-2.6,o-d/2+.14],16747040)}o-=d+5+t.next()*12}for(let t=0;t<4;t++){let o=-(14+(n*37+(a>0?19:0)+t*43)%108),c=a*(9.2+t%2*2.2),l=5.4+(n+t)%3*1.5,u=Math.abs(c),d=4865110,f=6443120;e.solid.cyl(a*(u+13)/2,l+.5,o,.55,.55,13-u+.55,d,10,`x`),e.solid.cyl(a*13,(l+1+r)/2-.3,o,.55,.55,l+1-r+.6,d,10),e.solid.cyl(a*13,r+.5,o,1.25,1,1.4,2891312,8),e.solid.cyl(a*13,l*.45,o,.7,.7,.3,f,10),e.solid.cyl(c,l+.1,o,.84,.7,1.3,f,10);let p=l-.5;e.glow.quad([c-1.15,r,o+.3],[c+1.15,r,o+.3],[c+.5,p,o+.3],[c-.5,p,o+.3],11545606),e.glow.quad([c-.74,r,o+.32],[c+.74,r,o+.32],[c+.34,p,o+.32],[c-.34,p,o+.32],14173192),e.glow.quad([c-.28,r,o+.34],[c+.28,r,o+.34],[c+.13,p,o+.34],[c-.13,p,o+.34],16747040),Rp(e.glow,c,o,r-.2,r+i,3,4.2,1,1,s,t*.7,15227406,16747040)}for(let o=0;o<2;o++){let c=12+t.next()*14,l=60+t.next()*90,u=a*(52+t.next()*90),d=-t.next()*Ip;e.solid.box(u,r+l/2,d,c,l,c,3811922,4995686,!0);for(let t=r+12;t<r+l-8;t+=16)e.glow.box(u,t,d+c/2+.05,c*.6,2.2,.1,16747050);let f=u-a*c*.24,p=d+c/2,m=r+Math.min(l*.42,34+o*9+n*4);e.solid.box(f,m+1.2,p+1,6.4,3.2,2,4995686,6179448),e.glow.box(f,m+.2,p+2.02,4.6,1,.06,16747040),e.glow.quad([f-3.4,r,p+2.1],[f+3.4,r,p+2.1],[f+2.2,m,p+2.1],[f-2.2,m,p+2.1],12727302),e.glow.quad([f-1.5,r,p+2.16],[f+1.5,r,p+2.16],[f+1,m,p+2.16],[f-1,m,p+2.16],16747040),Rp(e.glow,f,p+5,r-.2,r+i,11,7,1,1,s,0,15227406,16747040)}{let n=a*(17+t.next()*9),o=-24-t.next()*80,c=9+t.next()*8,l=bp(e,`smelter`,n+a*8,r,o-3,c+18,a>0?-Math.PI/2:0,1,17,r);if(l){let t=Rl(`smelter`).geo.attributes.position.array,n=-1/0,o=1/0;for(let e=0;e<t.length;e+=3)n=Math.max(n,t[e]);for(let e=0;e<t.length;e+=3)t[e]>n*.86&&(o=Math.min(o,t[e+1]));let c=n*l.s[0]*.95,u=l.y+o*l.s[1]+.6,d=l.x+(a>0?0:c),f=l.z+(a>0?c:0);e.glow.quad([d-2,r,f],[d+2,r,f],[d+1.5,u,f],[d-1.5,u,f],12727302),e.glow.quad([d-.9,r,f+.05],[d+.9,r,f+.05],[d+.7,u,f+.05],[d-.7,u,f+.05],16747040),Rp(e.glow,d,f+1.5,r-.2,r+i,9,6.5,1,1,s,0,15227406,16747040);continue}e.solid.box(n+a*4,(r+c)/2+3,o-3,12,c-r+6,7,3811910,4995160,!0),e.solid.box(n,c,o+1.2,5.4,2.2,3.4,5519434,6964296),Mp(e.decal,n-2.7,n+2.7,c+1.1,c+1.7,-o-2.91,Q.hazard,16777215,1.2),e.glow.quad([n-2.2,r,o+2.95],[n+2.2,r,o+2.95],[n+1.8,c-1,o+2.95],[n-1.8,c-1,o+2.95],12727302),e.glow.quad([n-1,r,o+3],[n+1,r,o+3],[n+.8,c-1,o+3],[n-.8,c-1,o+3],16747040),Rp(e.glow,n,o+4.5,r-.2,r+i,6.5,4.5,1,1,s,0,15227406,16747040)}}if(n!==1){let t=-58-n*14;e.solid.box(0,15,t,34,.5,2.6,5519434,6964296);for(let n of[-1,1])e.solid.box(n*16.5,(r+15)/2,t,.9,15-r,.9,4468796,void 0,!0);for(let n=-16;n<=16;n+=4)e.solid.box(n,15.9,t+1.2,.14,1.3,.14,8014916);e.solid.box(0,16.5,t+1.2,34,.14,.14,8014916),Mp(e.decal,-17,17,14.75,15.25,-t-1.31,Q.hazard,16777215,8),e.solid.cyl(0,13.7,t-.4,.6,.6,34,6969974,8,`x`);for(let n of[-9,0,9])e.glow.box(n,14.55,t+1.32,.9,.3,.06,16752682)}}var Gp=`varying vec3 vDir; void main(){ vDir = position; vec4 p = projectionMatrix * viewMatrix * vec4(position + cameraPosition, 1.0); gl_Position = p.xyww; }`,Kp=`
varying vec3 vDir;
uniform vec3 uTop; uniform vec3 uMid; uniform vec3 uHor; uniform vec3 uCloud; uniform vec3 uCloudSh;
uniform float uCloudAmt; uniform float uTime; uniform float uFlash; uniform float uBolt; uniform float uBoltSeed;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y); }
float fbm(vec2 p){ return noise(p) * 0.5 + noise(p * 2.1 + 3.7) * 0.27 + noise(p * 4.7 + 9.1) * 0.15 + noise(p * 10.3 + 1.3) * 0.08; }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = mix(uHor, uMid, smoothstep(-0.02, 0.22, h));
  col = mix(col, uTop, smoothstep(0.18, 0.75, h));
  if (h > 0.02) {
    vec2 p = d.xz / (h + 0.28) * 1.5 + vec2(uTime * 0.012, 0.0);
    float n = fbm(p);
    float th = 1.0 - uCloudAmt;
    float body = step(th, n) * smoothstep(0.02, 0.12, h);
    float lit = step(th + 0.07, fbm(p + vec2(0.05, -0.12)));
    col = mix(col, mix(uCloudSh, uCloud, lit), body);
  }
  if (uBolt > 0.001) {
    // forked sky bolt (Storm Foundry)
    float az = atan(d.x, -d.z);
    float c = (uBoltSeed - 0.5) * 0.5;
    float hh = h * 7.0;
    float path = c + (noise(vec2(hh * 1.7, uBoltSeed * 40.0)) - 0.5) * 0.22 + (noise(vec2(hh * 6.0, uBoltSeed * 90.0)) - 0.5) * 0.06;
    float lo = 0.05 + fract(uBoltSeed * 7.3) * 0.1;
    float m = step(lo, h) * step(abs(az), 1.5);
    float dist = abs(az - path);
    float core = smoothstep(0.007, 0.002, dist) * m;
    float halo = smoothstep(0.06, 0.0, dist) * m * 0.4;
    float bp = path + (0.4 - h) * (fract(uBoltSeed * 3.1) - 0.5) * 1.5 + (noise(vec2(hh * 5.0, 7.0 + uBoltSeed * 60.0)) - 0.5) * 0.05;
    core = max(core, smoothstep(0.005, 0.0015, abs(az - bp)) * step(lo + 0.07, h) * step(h, 0.4));
    col += vec3(0.5, 0.3, 0.85) * halo * uBolt;
    col = mix(col, vec3(0.94, 0.88, 1.0), core * min(1.0, uBolt * 1.6));
  }
  col += uFlash * vec3(0.55, 0.5, 0.8);
  gl_FragColor = vec4(col, 1.0);
}`;function qp(e){let t=new ba({vertexShader:Gp,fragmentShader:Kp,side:1,depthWrite:!1,depthTest:!1,uniforms:{uTop:{value:new U(e.top)},uMid:{value:new U(e.mid)},uHor:{value:new U(e.hor)},uCloud:{value:new U(e.cloud)},uCloudSh:{value:new U(e.cloudSh)},uCloudAmt:{value:e.cloudAmt},uTime:{value:0},uFlash:{value:0},uBolt:{value:0},uBoltSeed:{value:.5}}}),n=new vi(new da(10,20,12),t);return n.frustumCulled=!1,n.renderOrder=-100,{mesh:n,mat:t}}var Jp=class{layout;pal;root=new En;sky;skyMat;tiles=[];chunks=[];geos=[];propGeos=[];boltT=1.5;bolt=0;lastT=0;constructor(e,t,n){this.layout=e,this.pal=t;let r=kp(),i=new Map,a=e=>{let t={solid:e.solid.build(),decal:e.decal.build(),glow:e.glow.build(),gdecal:e.gdecal.build()};return this.geos.push(t),t},o=(e,t)=>{let n=new En;return n.position.z=t,e.solid.attributes.position.count&&n.add(new vi(e.solid,r.solid)),e.decal.attributes.position.count&&n.add(new vi(e.decal,r.decal)),e.glow.attributes.position.count&&n.add(new vi(e.glow,r.glow)),e.gdecal.attributes.position.count&&n.add(new vi(e.gdecal,r.glowDecal)),n.matrixAutoUpdate=!1,n.updateMatrix(),this.root.add(n),n};for(let n of e.tiles){let r=n.def.id+(n.mirror?`m`:``),s=i.get(r);s||(s=a(Fp(n.def,n.mirror,t,e.biome)),i.set(r,s)),this.tiles.push({g:o(s,-n.s0),s0:n.s0,s1:n.s0+n.def.len})}let s=new td(n^24301),c=[],l=[];for(let t=0;t<3;t++){let n=vp(),r=s.fork(`decor`+t);e.biome===`canyon`?Hp(n,r,t):e.biome===`yard`?Up(n,r,t):Wp(n,r,t),c.push(a(n));let i=wp(n.props);for(let e of i)this.propGeos.push(e.hi),e.lo!==e.hi&&this.propGeos.push(e.lo);l.push(i)}let u=Math.min(e.length,4400)+420,d=0;for(let e=-130;e<u;e+=Ip){d=(d+1+ +!!s.chance(.5))%3;let t=o(c[d],-e),n=[],r=[];for(let e of l[d]){let i=Cp(e.m,Rl(e.m).tex),a=new vi(e.hi,i);if(t.add(a),e.lo!==e.hi){let o=new vi(e.lo,i);o.visible=!1,t.add(o),n.push(a),r.push(o)}}this.chunks.push({g:t,s0:e,s1:e+Ip,v:d,hi:n,lo:r})}let f=qp(t.sky);this.sky=f.mesh,this.skyMat=f.mat,this.root.add(this.sky)}update(e,t,n,r=!1){for(let t of this.tiles)t.g.visible=t.s1>e-30&&t.s0<e+330;for(let t of this.chunks){if(t.g.visible=t.s1>e-40&&t.s0<e+520,!t.g.visible||!t.lo.length)continue;let n=t.s0<e+(r?Ep:Tp),i=r&&t.s0>e+Dp;for(let e of t.hi)e.visible=n;for(let e of t.lo)e.visible=!n&&!i}let i=this.skyMat.uniforms;if(this.layout.biome===`foundry`){let e=Math.min(.1,Math.max(0,t-this.lastT));this.lastT=t,this.boltT-=e,this.boltT<=0&&(this.boltT=.7+Math.random()*1.5,this.bolt=1,i.uBoltSeed.value=Math.random()),this.bolt=Math.max(0,this.bolt-e*1.9),i.uBolt.value=Math.max(this.bolt,.42+.12*Math.sin(t*31)),n=Math.max(n,this.bolt*this.bolt*.1)}i.uTime.value=t,i.uFlash.value=n}dispose(){for(let e of this.geos)e.solid.dispose(),e.decal.dispose(),e.glow.dispose(),e.gdecal.dispose();for(let e of this.propGeos)e.dispose();this.sky.geometry.dispose(),this.skyMat.dispose(),this.root.removeFromParent()}},Yp=[{id:`skin_rail`,name:`Railbreaker`,price:0,voice:`none`,voiceName:`Stock`,colors:{jacket:15886364,pants:2056028,boots:15327174,helmet:15722194,fin:15886364,tank:9278368,glow:5236991,trim:2762032}},{id:`skin_synth`,name:`Retro Synth`,price:60,voice:`retro`,voiceName:`Retro`,colors:{jacket:14694031,pants:1847114,boots:3133632,helmet:15984383,fin:3133632,tank:6970061,glow:16739029,trim:2102330}},{id:`skin_glitch`,name:`Cyber Glitch`,price:80,voice:`glitch`,voiceName:`Glitch`,colors:{jacket:1316378,pants:2237997,boots:3159100,helmet:1777188,fin:10354474,tank:3817288,glow:10354474,trim:658189}},{id:`skin_mech`,name:`Heavy Mech`,price:100,voice:`mech`,voiceName:`Mech`,colors:{jacket:6054766,pants:4014924,boots:8422799,helmet:7041661,fin:16106776,tank:10133674,glow:16765503,trim:2303531}},{id:`skin_foundry`,name:`Foundry Red`,price:45,voice:`none`,voiceName:`Stock`,colors:{jacket:11740702,pants:3811878,boots:8018504,helmet:15127488,fin:16747069,tank:7232082,glow:16751162,trim:2364690}},{id:`skin_arctic`,name:`Arctic`,price:45,voice:`none`,voiceName:`Stock`,colors:{jacket:9425134,pants:4156300,boots:15923452,helmet:15267067,fin:3117008,tank:11452364,glow:13169919,trim:1846846}},{id:`skin_gold`,name:`Gold Rush`,price:120,voice:`none`,voiceName:`Stock`,passOnly:!0,colors:{jacket:14921759,pants:4864538,boots:15852200,helmet:16773560,fin:12089356,tank:13214266,glow:16773258,trim:2958352}}],Xp=[{id:`trail_spark`,name:`Rail Sparks`,price:0,color:16765503,color2:16742938},{id:`trail_ember`,name:`Ember Streak`,price:25,color:16734751,color2:9050634},{id:`trail_frost`,name:`Frost Wake`,price:30,color:12579071,color2:5220607},{id:`trail_toxic`,name:`Toxic Drip`,price:40,color:10354474,color2:2787866},{id:`trail_synth`,name:`Synthwave`,price:55,color:16727538,color2:3135743},{id:`trail_void`,name:`Void Ribbon`,price:70,color:9063935,color2:1706554},{id:`trail_gold`,name:`Gold Dust`,price:90,color:16769126,color2:14917663,passOnly:!0}],Zp=[{id:`pop_classic`,name:`Classic Pop`,price:0,style:`classic`},{id:`pop_neon`,name:`Neon Pop`,price:35,style:`neon`,passOnly:!0},{id:`pop_ink`,name:`Ink Pop`,price:35,style:`ink`,passOnly:!0}];function Qp(e){return Yp.find(t=>t.id===e)??Yp[0]}function $p(e){return Xp.find(t=>t.id===e)??Xp[0]}function em(e){return Zp.find(t=>t.id===e)??Zp[0]}function tm(e,t){return e.cosmetics.owned.includes(t)}function nm(e){return Yp.find(t=>t.id===e)??Xp.find(t=>t.id===e)??Zp.find(t=>t.id===e)}function rm(e,t){let n=nm(t);return!n||n.passOnly||tm(e,t)||e.wrenches<n.price?!1:(e.wrenches-=n.price,e.cosmetics.owned.push(t),!0)}function im(e,t){if(!nm(t)||!tm(e,t))return!1;if(t.startsWith(`skin_`))e.cosmetics.skin=t;else if(t.startsWith(`trail_`))e.cosmetics.trail=t;else if(t.startsWith(`pop_`))e.cosmetics.pop=t;else return!1;return!0}var am={jacket:15886364,pants:2056028,boots:15327174,helmet:15722194,fin:15886364,tank:9278368,glow:5236991,trim:2762032},om={Spine02:1,Spine01:2,Spine:3,Head:4,LeftArm:5,LeftForeArm:6,RightArm:7,RightForeArm:8,LeftUpLeg:9,LeftLeg:10,RightUpLeg:11,RightLeg:12},sm=.92,cm=new B(1,0,0),lm=new B(0,1,0),um=new B(0,0,1),dm=new B(0,-1,0),fm=new kt,pm=new kt,mm=new kt,hm=()=>({bodyY:0,bodyRx:0,bodyRy:0,torsoRy:0,lHip:0,lKnee:0,rHip:0,rKnee:0,lArm:1.35,rArm:1.35,lElbow:.15,rElbow:.15,headRx:0}),gm=class{root=new En;muzzleL=new Tn;muzzleR=new Tn;bootL=new Tn;bootR=new Tn;pack=new Tn;body=new En;torso=new En;head=new En;armL=new En;armR=new En;foreL=new En;foreR=new En;legL=new En;legR=new En;shinL=new En;shinR=new En;cur=hm();tgt=hm();phase=0;mats=[];geos=[];recoil=0;thr=0;flames=[];jets=[];jetMats=[];jetAlpha=1;rig=null;constructor(e=am,t=null){let n=t===null?Rl(`hero`):null;if(n?.bones){this.buildRigged(n,n.bones,e);return}let r=t===null?mf():mf({glow:1,tint:t,alpha:.5}),i=t===null?mf({glow:1}):r;this.mats.push(r),i!==r&&this.mats.push(i);let a=(e,n)=>{let a=new Z,o=new Z;n(a,o);for(let[n,s]of[[a,r],[o,i]]){if(!n.vertexCount)continue;let r=n.build();this.geos.push(r);let i=new vi(r,s);t!==null&&i.layers.set(1),e.add(i)}},o=e,s=o.trim,c=t===null?2:1,l=t===null?14:8,u=9075290;this.root.add(this.body),a(this.body,e=>{e.rbox(0,.95,0,.52,.28,.36,.11,o.pants,void 0,c),e.rbox(0,1.07,0,.56,.1,.39,.04,s,void 0,c),e.rbox(0,1.07,-.2,.12,.09,.03,.012,14266954,void 0,1);for(let t of[-.3,.3])e.rbox(t,.95,.02,.13,.22,.2,.04,u,X(u,1.15),c)}),this.torso.position.set(0,1.08,0),this.body.add(this.torso),a(this.torso,(e,t)=>{e.rbox(0,.12,0,.56,.4,.38,.14,o.jacket,void 0,c),e.rbox(0,.4,0,.76,.44,.46,.19,o.jacket,X(o.jacket,1.1),c),e.rbox(0,.63,.04,.56,.17,.48,.08,X(o.jacket,.8),void 0,c),e.rbox(0,-.05,.14,.6,.3,.2,.07,X(o.jacket,.88),void 0,c);for(let t of[-.25,.25])e.rbox(t,-.06,-.01,.14,.26,.36,.05,X(o.jacket,.88),void 0,1);for(let t of[-.17,.17])e.box(t,.36,-.225,.07,.46,.02,s);e.rbox(0,.3,.22,.5,.46,.08,.03,s,void 0,1);for(let n of[-1,1]){let r=new H().makeRotationZ(-n*.2).setPosition(n*.19,.22,.38);for(let n of[e,t])n.m=r;e.cyl(0,.04,0,.14,.14,.46,o.tank,l,`y`),e.sphere(0,.27,0,.14,X(o.tank,1.08),l,6,.75),e.cyl(0,.39,0,.06,.04,.08,s,8),e.sphere(0,-.19,0,.14,X(o.tank,.8),l,6,.6),e.cyl(0,-.31,0,.11,.075,.13,s,l),e.cyl(0,.2,0,.151,.151,.05,s,l),e.cyl(0,-.12,0,.151,.151,.05,s,l),e.rbox(0,.04,.13,.12,.22,.05,.02,s,void 0,1),t.box(0,.04,.15,.07,.17,.03,o.glow);for(let n of[e,t])n.m=null}e.rbox(0,.36,.4,.14,.22,.12,.03,s,void 0,1)}),this.pack.position.set(0,-.12,.38),this.torso.add(this.pack),this.head.position.set(0,.7,0),this.torso.add(this.head),a(this.head,(e,n)=>{e.cyl(0,.03,0,.12,.11,.1,s,l),e.sphere(0,.28,0,.28,o.helmet,t===null?20:12,t===null?14:8,.96),e.cyl(0,.07,0,.2,.235,.05,X(o.helmet,.78),l),e.wedge(0,.58,.03,.08,.3,.44,.6,.3,o.fin,X(o.fin,1.1)),e.rbox(0,.26,-.2,.42,.15,.17,.06,s,void 0,c);for(let t of[-.27,.27])e.cyl(t,.25,0,.11,.11,.07,s,l,`x`),e.cyl(t*1.1,.25,0,.075,.075,.03,X(o.helmet,.9),l,`x`),n.cyl(t*1.17,.25,0,.045,.045,.03,o.glow,8,`x`)});let d=(e,t,n,r)=>{e.position.set(r*.43,.5,0),this.torso.add(e),a(e,e=>{e.sphere(0,0,0,.155,X(o.jacket,1.08),l,8),e.capsule([0,-.02,0],[0,-.33,0],.125,.105,o.jacket,l),e.rbox(r*.118,-.15,0,.03,.16,.15,.012,o.helmet,void 0,1)}),t.position.set(0,-.36,0),e.add(t),a(t,(e,t)=>{e.capsule([0,0,0],[0,-.24,0],.105,.09,o.jacket,l),e.cyl(0,-.3,0,.1,.1,.08,o.helmet,l),e.rbox(0,-.4,0,.15,.14,.16,.05,s,void 0,c),e.rbox(0,-.47,-.08,.09,.4,.14,.025,3814980,void 0,1),e.rbox(0,-.56,-.02,.07,.14,.24,.02,5591135,void 0,1),e.box(0,-.6,-.158,.03,.06,.02,2301994),t.box(0,-.675,-.08,.05,.02,.06,o.glow)}),n.position.set(0,-.7,-.08),t.add(n)};d(this.armL,this.foreL,this.muzzleL,-1),d(this.armR,this.foreR,this.muzzleR,1);let f=(e,t,n,r)=>{e.position.set(r*.16,.92,0),this.body.add(e),a(e,e=>{e.capsule([0,-.02,0],[0,-.42,0],.15,.13,o.pants,l),e.rbox(0,-.43,-.11,.2,.17,.1,.045,13617076,void 0,c),e.rbox(r*.15,-.2,.01,.07,.17,.16,.025,u,void 0,1),e.cyl(0,-.31,0,.15,.154,.035,s,l)}),t.position.set(0,-.46,0),e.add(t),a(t,(e,t)=>{e.capsule([0,0,0],[0,-.2,.01],.13,.15,o.pants,l),e.rbox(0,-.31,-.02,.35,.22,.39,.08,o.boots,void 0,c),e.rbox(0,-.41,-.08,.41,.24,.62,.09,o.boots,X(o.boots,1.05),c),e.rbox(0,-.4,-.36,.36,.17,.12,.05,o.fin,void 0,c),e.rbox(0,-.3,.17,.27,.13,.08,.03,o.fin,void 0,1),e.rbox(0,-.285,-.2,.3,.05,.1,.02,o.fin,void 0,1),e.rbox(0,-.53,-.08,.43,.07,.65,.03,s,void 0,1),e.rbox(0,-.562,-.3,.34,.03,.17,.012,o.fin,void 0,1),e.rbox(0,-.562,.13,.34,.03,.17,.012,X(o.boots,.8),void 0,1),t.box(r*.208,-.42,-.06,.02,.07,.34,o.glow),t.box(0,-.568,-.085,.16,.02,.2,o.glow)}),n.position.set(0,-.55,-.05),t.add(n)};f(this.legL,this.shinL,this.bootL,-1),f(this.legR,this.shinR,this.bootR,1),this.addJets([this.bootL,this.bootR],t===null?1:.5),t!==null&&this.root.traverse(e=>e.layers.set(1))}buildRigged(e,t,n){let r=mf({model:vm(e.tex,n),emis:[1,0],lift:.3,doubleSide:!0}),i=mf(),a=mf({glow:1});this.mats.push(r,i,a),this.root.add(this.body);let o=t.map(e=>{let t=new ji;return t.name=e.n,t.position.fromArray(e.t),t.quaternion.fromArray(e.q),t}),s=t.map(e=>e.p);t.forEach((e,t)=>{e.p>=0?o[e.p].add(o[t]):this.body.add(o[t])});let c=new Ai(e.geo,r);c.frustumCulled=!1,this.body.add(c),this.root.updateMatrixWorld(!0);let l=new Fi(o);c.bind(l,c.matrixWorld);let u=o.map(()=>new kt),d=o.map(()=>new B);o.forEach((e,t)=>{let n=s[t];n<0?(u[t].copy(e.quaternion),d[t].copy(e.position)):(u[t].copy(u[n]).multiply(e.quaternion),d[t].copy(e.position).applyQuaternion(u[n]).add(d[n]))});let f=e=>t.findIndex(t=>t.n===e),p=t.map(e=>om[e.n]??0),m=o.map(()=>new kt);for(let[e,t]of Object.entries({LeftArm:`LeftForeArm`,LeftForeArm:`LeftHand`,RightArm:`RightForeArm`,RightForeArm:`RightHand`,LeftUpLeg:`LeftLeg`,LeftLeg:`LeftFoot`,RightUpLeg:`RightLeg`,RightLeg:`RightFoot`})){let n=f(e),r=f(t);n>=0&&r>=0&&m[n].setFromUnitVectors(d[r].clone().sub(d[n]).normalize(),dm)}let h=f(`LeftUpLeg`);this.rig={mesh:c,skeleton:l,bones:o,parent:s,role:p,bind:u,corr:m,d:o.map(()=>new kt),w:o.map(()=>new kt),spine:f(`Spine`),yScale:h>=0?d[h].y/sm:1};let g=(e,t,n,r)=>{let i=f(e),a=f(t);i<0||a<0||(r.quaternion.copy(m[a]).multiply(u[i]).invert(),r.position.set(...n).applyQuaternion(r.quaternion),o[i].add(r))},_=new Z,v=new Z;_.rbox(0,-.1,-.03,.12,.5,.17,.03,3814980,void 0,1),_.rbox(0,-.2,.05,.09,.17,.29,.025,5591135,void 0,1),_.box(0,-.26,-.125,.04,.07,.03,2301994),v.box(0,-.355,-.03,.065,.025,.08,n.glow);let y=_.build(),b=v.build();this.geos.push(y,b);for(let[e,t,n]of[[`LeftHand`,`LeftForeArm`,this.muzzleL],[`RightHand`,`RightForeArm`,this.muzzleR]]){let r=new En;r.add(new vi(y,i),new vi(b,a)),n.position.set(0,-.38,-.03),r.add(n),g(e,t,[0,-.2,-.07],r)}for(let[e,t,n]of[[`LeftFoot`,`LeftLeg`,this.bootL],[`RightFoot`,`RightLeg`,this.bootR]])g(e,t,[0,-.2,0],n);this.addJets([this.bootL,this.bootR],1);let x=f(`Spine`);x>=0&&(this.pack.position.set(0,-.1,.5),o[x].add(this.pack))}poseRig(e,t,n){let r=-t.bodyRx*.8+n;for(let n=0;n<e.bones.length;n++){let i=e.parent[n],a=e.d[n],o=e.spine>=0?e.d[e.spine]:mm;switch(e.role[n]){case 1:a.setFromAxisAngle(lm,t.torsoRy/3);break;case 2:a.setFromAxisAngle(lm,t.torsoRy*2/3);break;case 3:a.setFromAxisAngle(lm,t.torsoRy);break;case 4:a.copy(o).multiply(fm.setFromAxisAngle(cm,t.headRx));break;case 5:a.copy(o).multiply(fm.setFromAxisAngle(cm,t.lArm+r)).multiply(pm.setFromAxisAngle(um,-.1)).multiply(e.corr[n]);break;case 7:a.copy(o).multiply(fm.setFromAxisAngle(cm,t.rArm+r)).multiply(pm.setFromAxisAngle(um,.1)).multiply(e.corr[n]);break;case 6:a.copy(o).multiply(fm.setFromAxisAngle(cm,t.lArm+r)).multiply(pm.setFromAxisAngle(um,-.1)).multiply(fm.setFromAxisAngle(cm,t.lElbow)).multiply(e.corr[n]);break;case 8:a.copy(o).multiply(fm.setFromAxisAngle(cm,t.rArm+r)).multiply(pm.setFromAxisAngle(um,.1)).multiply(fm.setFromAxisAngle(cm,t.rElbow)).multiply(e.corr[n]);break;case 9:a.setFromAxisAngle(cm,t.lHip).multiply(e.corr[n]);break;case 11:a.setFromAxisAngle(cm,t.rHip).multiply(e.corr[n]);break;case 10:a.setFromAxisAngle(cm,t.lHip+t.lKnee).multiply(e.corr[n]);break;case 12:a.setFromAxisAngle(cm,t.rHip+t.rKnee).multiply(e.corr[n]);break;default:i>=0?a.copy(e.d[i]):a.identity()}let s=e.w[n].copy(a).multiply(e.bind[n]);i>=0?e.bones[n].quaternion.copy(e.w[i]).invert().multiply(s):e.bones[n].quaternion.copy(s)}}setHurt(e){for(let t of this.mats)t.uniforms.uHurt.value=e}setAlpha(e){for(let t of this.mats)t.uniforms.uAlpha.value=e;for(let t of this.jetMats)t.opacity=e*this.jetAlpha}addJets(e,t){let n=.13,r=new Or;r.setAttribute(`position`,new gr([-.13,0,0,n,0,0,n,-.5,0,-.13,-.5,0,0,0,-.13,0,0,n,0,-.5,n,0,-.5,-.13],3)),r.setAttribute(`uv`,new gr([0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0],2)),r.setIndex([0,1,2,0,2,3,4,5,6,4,6,7]),this.geos.push(r);let i=typeof document<`u`,a=new oi({map:i?pp():null,color:i?16777215:3721471,transparent:!0,opacity:t,depthWrite:!1,side:2,fog:!1}),o=new zr({map:i?dp():null,color:8379647,transparent:!0,opacity:t,depthWrite:!1,blending:2,fog:!1});this.jetMats.push(a,o),this.jetAlpha=t;for(let t of e){let e=new vi(r,a);e.visible=!1,e.layers.set(1),t.add(e),this.flames.push(e);let n=new $r(o);n.visible=!1,n.layers.set(1),n.position.y=-.05,t.add(n),this.jets.push(n)}}update(e,t,n,r,i,a){let o=this.tgt;Object.assign(o,hm()),this.phase+=e*Math.min(22,n)*.95;let s=this.phase;switch(t){case`run`:{let e=Math.sin(s),t=Math.sin(s+Math.PI);o.lHip=e*.95,o.rHip=t*.95,o.lKnee=-(.25+Math.max(0,Math.cos(s))*1.25),o.rKnee=-(.25+Math.max(0,Math.cos(s+Math.PI))*1.25),o.bodyY=Math.abs(Math.cos(s))*.07,o.bodyRx=-.2;break}case`slide`:o.bodyRx=-.68,o.bodyY=-.43,o.bodyRy=.7,o.lHip=1.62,o.lKnee=-2,o.rHip=-.55,o.rKnee=-.1,o.lArm=.4,o.lElbow=0,o.rArm=-.7,o.headRx=.45;break;case`grind`:o.bodyRy=.95,o.bodyY=-.26,o.torsoRy=-.8,o.bodyRx=-.08,o.lHip=.75,o.lKnee=-1,o.rHip=-.35,o.rKnee=-.75,o.lArm=1.3,o.rArm=1.45,o.bodyY+=Math.sin(a*34)*.012;break;case`hover`:o.bodyRx=-.28,o.lHip=.25,o.lKnee=-.45,o.rHip=-.05,o.rKnee=-.55,o.bodyY=Math.sin(a*9)*.04;break;default:i>0?(o.lHip=1,o.lKnee=-1.5,o.rHip=-.25,o.rKnee=-.7,o.bodyRx=-.12):(o.lHip=.5,o.lKnee=-.9,o.rHip=.15,o.rKnee=-.5,o.bodyRx=-.22)}let c=Math.min(1,e*(t===`run`?30:16)),l=this.cur;for(let e of Object.keys(l))l[e]+=(o[e]-l[e])*c;this.body.position.y=l.bodyY*(this.rig?.yScale??1),this.body.rotation.set(l.bodyRx,l.bodyRy,-r*.028,`YXZ`),this.torso.rotation.y=l.torsoRy,this.head.rotation.x=l.headRx,this.legL.rotation.x=l.lHip,this.shinL.rotation.x=l.lKnee,this.legR.rotation.x=l.rHip,this.shinR.rotation.x=l.rKnee,this.recoil=Math.max(0,this.recoil-e*9);let u=t===`hover`?1:t===`run`||t===`slide`||t===`grind`?0:i>0?.75:.4;this.thr+=(u-this.thr)*Math.min(1,e*14);for(let e=0;e<this.flames.length;e++){let t=this.flames[e];t.visible=this.thr>.06;let n=this.rig?1.25:1;t.scale.set(n,n*this.thr*(.82+.3*Math.sin(a*47+e*2.1)),n);let r=this.jets[e];r.visible=t.visible,r.scale.setScalar(n*(.3+.22*this.thr))}let d=this.recoil*.22;this.rig?this.poseRig(this.rig,l,d):(this.armL.rotation.x=l.lArm+d-l.bodyRx*.8,this.armR.rotation.x=l.rArm+d-l.bodyRx*.8,this.armL.rotation.z=-.1,this.armR.rotation.z=.1,this.foreL.rotation.x=l.lElbow,this.foreR.rotation.x=l.rElbow)}dispose(){for(let e of this.geos)e.dispose();for(let e of this.mats)e.dispose();for(let e of this.jetMats)e.dispose();this.rig?.skeleton.dispose(),this.root.removeFromParent()}},_m=new Map;function vm(e,t){let n=[`jacket`,`pants`,`helmet`,`glow`];if(n.every(e=>t[e]===am[e]))return e;let r=n.map(e=>t[e].toString(16)).join(`-`),i=_m.get(r);if(i)return i;let a=e.image,o=typeof document<`u`?document.createElement(`canvas`):null,s=o&&a?o.getContext(`2d`,{willReadFrequently:!0}):null;if(!o||!a||!s)return e;o.width=a.naturalWidth||a.width,o.height=a.naturalHeight||a.height,s.drawImage(a,0,0);let c=s.getImageData(0,0,o.width,o.height),l=c.data,u=e=>[e>>16&255,e>>8&255,e&255],d={jacket:u(t.jacket),pants:u(t.pants),helmet:u(t.helmet),glow:u(t.glow)},f={jacket:.8,pants:.3,helmet:.8,glow:.9};for(let e=0;e<l.length;e+=4){let t=l[e],n=l[e+1],r=l[e+2],i=Math.max(t,n,r),a=Math.min(t,n,r),o=i/255,s=i?(i-a)/i:0;if(i===a&&o<.62)continue;let c=0;i!==a&&(c=i===t?(n-r)/(i-a)%6:i===n?(r-t)/(i-a)+2:(t-n)/(i-a)+4,c*=60,c<0&&(c+=360));let u=s>.45&&c>=6&&c<=46&&o>.25?`jacket`:s>.25&&c>=145&&c<=210?o>.6&&s>.4?`glow`:`pants`:s<.3&&o>.62?`helmet`:null;if(!u)continue;let p=Math.min(1.45,o/f[u]),m=d[u];l[e]=Math.min(255,m[0]*p),l[e+1]=Math.min(255,m[1]*p),l[e+2]=Math.min(255,m[2]*p)}s.putImageData(c,0,0);let p=new aa(o);return p.flipY=!1,p.colorSpace=``,p.wrapS=p.wrapT=m,p.minFilter=S,p.generateMipmaps=!0,p.anisotropy=4,_m.set(r,p),p}function $(e,t=``,...n){let r=document.createElement(e);t&&(r.className=t);for(let e of n)e!=null&&e!==!1&&r.append(typeof e==`object`?e:String(e));return r}function ym(e,t,n,r=`tap`){let i=$(`button`,(`btn `+t).trim(),e);return i.type=`button`,i.addEventListener(`click`,e=>{i.disabled||(r===`tap`&&Y.ui(`tap`),n(e))}),i}function bm(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function xm(e){return`#`+(e>>>0).toString(16).padStart(6,`0`).slice(-6)}function Sm(e){if(!isFinite(e)||e<=0)return`--:--`;let t=Math.floor(e/60),n=e-t*60;return`${t}:${n<10?`0`:``}${n.toFixed(2)}`}function Cm(e){return Math.round(e).toLocaleString(`en-US`)}var wm=null;function Tm(e,t=`info`){let n=document.getElementById(`ui`);if(!n)return;wm&&wm.isConnected||(wm=$(`div`,`toasts`),n.append(wm));let r=$(`div`,`toast `+t,e);for(wm.append(r);wm.childElementCount>3;)wm.firstElementChild.remove();setTimeout(()=>r.classList.add(`out`),1900),setTimeout(()=>r.remove(),2300)}var Em=!1;if(typeof window<`u`){let e=e=>{e.isTrusted&&(Em=!0)};window.addEventListener(`pointerdown`,e,{capture:!0,passive:!0}),window.addEventListener(`keydown`,e,{capture:!0,passive:!0})}function Dm(e,t){if(t)try{if(!Em)return;`vibrate`in navigator&&navigator.vibrate(e)}catch{}}function Om(e,t){e.textContent!==t&&(e.textContent=t)}function km(e,t){let n=(Math.max(0,Math.min(1,t))*100).toFixed(1)+`%`;e.style.width!==n&&(e.style.width=n)}var Am=`<svg viewBox="0 0 48 48"><g fill="#f3ead8" stroke="#14101f" stroke-width="2" stroke-linejoin="round"><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(0 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(45 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(90 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(135 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(180 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(225 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(270 24 24)"/><rect x="20" y="1.5" width="8" height="10" rx="1.5" transform="rotate(315 24 24)"/><circle cx="24" cy="24" r="17"/></g><circle cx="24" cy="24" r="12.5" fill="#2a1420" stroke="#14101f" stroke-width="2"/></svg><b>☠</b>`,jm=`<svg viewBox="0 0 48 48"><g transform="rotate(38 24 26)" stroke="#14101f" stroke-width="2.4" stroke-linejoin="round"><path d="M10 12h9v14a5 5 0 0 0 10 0V12h9v14a14 14 0 0 1-28 0z" fill="currentColor"/><path d="M10 12h9v6h-9zM29 12h9v6h-9z" fill="#14101f"/></g><path d="M40 1l-6 8h4l-3 8 9-11h-4.5z" fill="#ffd23f" stroke="#14101f" stroke-width="1.6" stroke-linejoin="round"/></svg>`,Mm=class{el;hpTxt=$(`span`,`hud-hp-num`);hpFill=$(`i`,`hud-hp-fill`);hpScratch=$(`i`,`hud-hp-scratch`);hpPanel;secTxt=$(`div`,`hud-sec-label`);bioTxt=$(`div`,`hud-sec-biome`);pips=$(`div`,`hud-pips`);prog=$(`i`);score=$(`div`,`hud-score`);cells=$(`span`,`cur cell`);mult=$(`span`,`hud-mult`);tiers=$(`div`,`hud-tiers`);tierFill=[];muts=$(`span`,`hud-muts`);race=$(`div`,`hud-race panel flat hide`);raceKey=``;boss=$(`div`,`hud-boss hide`);bossFill=$(`i`);bossName=$(`span`,`hud-boss-name`);banner=$(`div`,`hud-banner`);bannerMain=$(`div`,`hud-banner-main`);bannerSub=$(`div`,`hud-banner-sub`);hint=$(`div`,`hud-hint`);reload=$(`div`,`hud-reload hide`);reloadZone=$(`i`,`hud-reload-zone`);reloadMark=$(`i`,`hud-reload-mark`);ammo=$(`div`,`hud-ammo`);skill;skillIcon=$(`span`,`hud-skill-icon`);ring;fuel=$(`i`);fuelBox=$(`div`,`hud-fuel`);pipKey=``;C=2*Math.PI*44;constructor(e,t,n){let r=$(`div`,`col hud`);this.el=r,this.hpPanel=$(`div`,`hud-hp panel flat`,$(`div`,`hud-hp-row`,$(`span`,`hud-cross`,`✚`),$(`span`,`hud-hp-tag`,`HP`),this.hpTxt),$(`div`,`hud-hp-bar`,this.hpScratch,this.hpFill,$(`b`,`hud-seg`)));let i=$(`div`,`hud-sec panel flat`,this.secTxt,this.bioTxt,this.pips,$(`div`,`hud-prog`,this.prog));for(let e=0;e<5;e++){let e=$(`i`);this.tierFill.push(e),this.tiers.append($(`span`,`hud-tier`,e))}let a=$(`div`,`hud-stats`,this.score,$(`div`,`hud-stats-row`,this.muts,this.cells,this.mult),this.tiers),o=$(`span`,`hud-boss-icon`);o.innerHTML=Am,this.boss.append(o,$(`div`,`hud-boss-body`,this.bossName,$(`div`,`hud-boss-bar`,this.bossFill,$(`b`,`hud-seg`)))),this.banner.append(this.bannerMain,this.bannerSub),this.reload.append($(`span`,`hud-reload-tag`,`RELOAD`),$(`div`,`hud-reload-bar`,this.reloadZone,this.reloadMark));let s=`http://www.w3.org/2000/svg`,c=document.createElementNS(s,`svg`);c.setAttribute(`viewBox`,`0 0 100 100`),c.classList.add(`hud-skill-ring`);let l=document.createElementNS(s,`circle`);l.setAttribute(`cx`,`50`),l.setAttribute(`cy`,`50`),l.setAttribute(`r`,`44`),l.classList.add(`bg`),this.ring=document.createElementNS(s,`circle`),this.ring.setAttribute(`cx`,`50`),this.ring.setAttribute(`cy`,`50`),this.ring.setAttribute(`r`,`44`),this.ring.classList.add(`fg`),this.ring.setAttribute(`stroke-dasharray`,`${this.C} ${this.C}`),c.append(l,this.ring),this.skillIcon.innerHTML=jm,this.skill=$(`button`,`hud-skill`,c,this.skillIcon),this.skill.type=`button`,this.skill.dataset.id=`hud-skill`,this.skill.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),t()}),this.fuelBox.append($(`span`,``,`⛽`),$(`div`,`hud-fuel-bar`,this.fuel));let u=$(`button`,`hud-pause`,`II`);u.type=`button`,u.dataset.id=`hud-pause`,u.addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),n()}),r.append(this.hpPanel,i,a,this.race,this.boss,this.banner,this.hint,this.reload,this.ammo,this.fuelBox,this.skill,u),e.append(r)}show(e){this.el.classList.toggle(`hide`,!e)}prewarm(){let e=[[`.hud-hp`,[`hurt`,`low`,`shield`]],[`.hud-mult`,[`hot`]],[`.hud-boss`,[`rage`]],[`.hud-banner`,[`on`]],[`.hud-hint`,[`on`]],[`.hud-reload`,[``,`missed`]],[`.hud-ammo`,[`over`]],[`.hud-skill`,[`ready`,`over`,`zone`]],[`.hud-fuel`,[`on`]]],t=this.el.cloneNode(!0);t.classList.remove(`hide`),t.classList.add(`bossing`),t.style.opacity=`0.02`,t.style.pointerEvents=`none`,t.setAttribute(`aria-hidden`,`true`);for(let e of t.querySelectorAll(`*`))e.classList.remove(`hide`),delete e.dataset.id;for(let[e,n]of[[`.hud-banner-main`,`SECTOR CLEAR`],[`.hud-banner-sub`,`CORE EXPOSED`],[`.hud-hint`,`HOLD TO SLIDE`],[`.hud-boss-name`,`FURNACE KING`]]){let r=t.querySelector(e);r&&!r.textContent&&(r.textContent=n)}let n=t.querySelector(`.hud-race`);n&&!n.childElementCount&&(n.innerHTML=`<div class="hud-race-title">DAILY RACE</div><div class="hud-race-row you"><b>1</b><span class="grow">YOU</span><em>±0.00s</em></div><div class="hud-race-row"><b>2</b><span class="grow">GHOST-77-LONG-NAME-CLIPPED</span><em class="ahead">−1.20s</em></div><div class="hud-race-row"><b>3</b><span class="grow">RIVET-9</span><em class="behind">+0.80s</em></div>`);for(let[e,n]of[[`.hud-reload-zone`,`left:40%;width:22%`],[`.hud-reload-mark`,`left:50%`],[`.hud-boss-bar > i`,`width:60%`],[`.hud-fuel-bar > *`,`width:50%`]]){let r=t.querySelector(e);r&&(r.style.cssText+=`;`+n)}this.el.parentElement?.append(t);let r=0,i=()=>{if(r>=3)t.remove();else{for(let[n,i]of e){let e=t.querySelector(n);if(!e)continue;for(let t of i)t&&e.classList.remove(t);let a=i[r%i.length];a&&e.classList.add(a)}r++,setTimeout(i,180)}};i()}update(e){Om(this.hpTxt,`${e.hp}/${e.maxHp}`),km(this.hpFill,e.hp/e.maxHp),km(this.hpScratch,(e.hp+e.scratch)/e.maxHp),this.hpPanel.classList.toggle(`hurt`,e.hurtFlash>.3),this.hpPanel.classList.toggle(`low`,e.hp/e.maxHp<.3),this.hpPanel.classList.toggle(`shield`,e.shield),Om(this.secTxt,e.label),Om(this.bioTxt,e.biome);let t=`${e.pips}|${e.pip}|${e.boss}`;if(t!==this.pipKey){this.pipKey=t,this.pips.textContent=``;for(let t=0;t<e.pips;t++)this.pips.append($(`i`,t<e.pip?`done`:t===e.pip&&!e.boss?`cur`:``));e.pips&&this.pips.append($(`i`,`boss`+(e.boss?` cur`:``),`☠`))}km(this.prog,e.progress),Om(this.score,Cm(e.score)),Om(this.cells,`⚡ ${e.cells}`),Om(this.mult,`×${e.mult}`),Om(this.muts,e.mutators.join(` `)),this.mult.classList.toggle(`hot`,e.tier>=3);for(let t=0;t<5;t++)km(this.tierFill[t],t<e.tier?1:t===e.tier?Math.max(.06,e.adrenaline):0);let n=e.race.length>1&&!e.boss;if(this.race.classList.toggle(`hide`,!n),n){let t=e.race.map(e=>e.name+e.delta.toFixed(1)).join(`|`);t!==this.raceKey&&(this.raceKey=t,this.race.textContent=``,this.race.append($(`div`,`hud-race-title`,e.raceTitle)),e.race.forEach((e,t)=>{let n=e.you?`±0.00s`:`${e.delta<0?`−`:`+`}${Math.min(99.9,Math.abs(e.delta)).toFixed(2)}s`;this.race.append($(`div`,`hud-race-row`+(e.you?` you`:``),$(`b`,``,String(t+1)),$(`span`,`grow`,e.name),$(`em`,e.you?``:e.delta<0?`ahead`:`behind`,n)))}))}this.boss.classList.toggle(`hide`,!e.boss||e.bossHp<=0),this.el.classList.toggle(`bossing`,e.boss),e.boss&&(km(this.bossFill,e.bossHp),Om(this.bossName,`${e.bossName} · PHASE ${e.bossPhase}`),this.boss.classList.toggle(`rage`,e.bossPhase>=3)),this.banner.classList.toggle(`on`,e.bannerT>0),e.bannerT>0&&(Om(this.bannerMain,e.banner),Om(this.bannerSub,e.bannerSub)),this.hint.classList.toggle(`on`,e.hint!==``),e.hint&&Om(this.hint,e.hint),this.reload.classList.toggle(`hide`,!e.reloading),e.reloading&&(this.reloadZone.style.left=e.sweet0*100+`%`,this.reloadZone.style.width=(e.sweet1-e.sweet0)*100+`%`,this.reloadMark.style.left=(e.reloadP*100).toFixed(1)+`%`,this.reload.classList.toggle(`missed`,e.missed));let r=e.reloading&&!e.missed&&e.reloadP>=e.sweet0&&e.reloadP<=e.sweet1;Om(this.ammo,e.reloading?`· · ·`:`${e.weapon} ${e.ammo}/${e.mag}`),this.ammo.classList.toggle(`over`,e.overload>0);let i=e.skill===`overload`?`ov`:`dash`;this.skill.dataset.mode!==i&&(this.skill.dataset.mode=i),this.skill.classList.toggle(`zone`,r),this.skill.classList.toggle(`ready`,e.skill===`dash`&&e.dashCd<=0),this.skill.classList.toggle(`over`,e.overload>0);let a=e.overload>0?e.overload:e.skill===`overload`?e.reloadP:1-e.dashCd,o=(this.C*(1-Math.max(0,Math.min(1,a)))).toFixed(1);this.ring.getAttribute(`stroke-dashoffset`)!==o&&this.ring.setAttribute(`stroke-dashoffset`,o),km(this.fuel,e.fuel),this.fuelBox.classList.toggle(`on`,e.hovering||e.fuel<.98)}dispose(){this.el.remove()}};function Nm(){return{v:1,wrenches:0,hub:{},gadgets:[`jetpack`],gadget:`jetpack`,addedBazarItems:[],weapons:[`smg`,`shotgun`,`arc`],primary:`smg`,secondary:`arc`,cosmetics:{owned:[`skin_rail`,`trail_spark`,`pop_classic`],skin:`skin_rail`,trail:`trail_spark`,pop:`pop_classic`},pass:{xp:0,premium:!1,free:[],prem:[]},adFree:!1,settings:{haptics:!0,music:.6,sfx:.8,quality:1},daily:{},friends:[],stats:{runs:0,kills:0,bossKills:0,bestScore:0,bestEndless:0,headbonks:0,overloads:0},seenIntro:!1}}var Pm=`rb_save_v1`;function Fm(e,t){if(t==null)return e;if(Array.isArray(e))return Array.isArray(t)?t:e;if(typeof e==`object`&&e){if(typeof t!=`object`||Array.isArray(t))return e;let n={...t};for(let r of Object.keys(e))n[r]=Fm(e[r],t[r]);return n}return typeof t==typeof e?t:e}function Im(){try{let e=typeof localStorage<`u`?localStorage.getItem(Pm):null;if(e)return Fm(Nm(),JSON.parse(e))}catch{}return Nm()}function Lm(e){try{let t=Object.keys(e.daily).sort();for(;t.length>4;)delete e.daily[t.shift()];localStorage.setItem(Pm,JSON.stringify(e))}catch{}}function Rm(){try{localStorage.removeItem(Pm)}catch{}return Nm()}var zm=[{id:`smg`,name:`Twin SMGs`,icon:`🔫`,desc:`Alternating rapid fire. Reliable, hungry.`,kind:`bullet`,sfx:`smg`,dmg:9,rate:11,mag:36,range:34,pellets:1,spread:.02,speed:90,color:16765503,price:0},{id:`shotgun`,name:`Rail Shotgun`,icon:`💢`,desc:`7-pellet blast. Brutal up close.`,kind:`bullet`,sfx:`shotgun`,dmg:8,rate:1.5,mag:6,range:20,pellets:7,spread:.12,speed:80,color:16751165,price:0},{id:`arc`,name:`Arc Rifle`,icon:`⚡`,desc:`Instant bolt that chains to 2 more.`,kind:`arc`,sfx:`arc`,dmg:15,rate:3.2,mag:14,range:30,pellets:1,spread:0,speed:0,color:8382975,price:0},{id:`rocket`,name:`Rocket Launcher`,icon:`🚀`,desc:`Big blast. Close blasts rocket-jump you.`,kind:`rocket`,sfx:`rocket`,dmg:58,rate:.95,mag:3,range:40,pellets:1,spread:0,speed:44,color:16738858,price:40},{id:`disc`,name:`Boomerang Disc`,icon:`🥏`,desc:`Pierces out and back for double hits.`,kind:`disc`,sfx:`disc`,dmg:26,rate:1.25,mag:5,range:26,pellets:1,spread:0,speed:46,color:5236991,price:60},{id:`beam`,name:`Plasma Beam`,icon:`☄`,desc:`Locked beam that ramps the longer it burns.`,kind:`beam`,sfx:`beam`,dmg:5,rate:15,mag:48,range:30,pellets:1,spread:0,speed:0,color:16734928,price:80}],Bm=Object.fromEntries(zm.map(e=>[e.id,e]));function Vm(e){return Bm[e]??zm[0]}var Hm=.55,Um=[`damage`,`fireRate`,`critMul`,`speed`,`cellDrop`,`reload`,`magSize`,`damageTaken`,`pickupRange`,`grind`,`scoreMul`,`dashCd`];function Wm(){return{damage:1,fireRate:1,critMul:1,speed:1,cellDrop:1,reload:1,magSize:1,damageTaken:1,pickupRange:1,grind:1,scoreMul:1,dashCd:1,critChance:0,maxHp:0,fuel:0,overloadDur:0,airJumps:0}}var Gm=`core`,Km=[{id:Gm,name:`Reactor Core`,kind:`core`,tier:0,icon:`☢`,color:16761856,desc:`Powers every chip connected to it.`},{id:`inv_overload`,name:`Overload Trigger`,kind:`invoker`,tier:1,icon:`⚡`,color:16748800,desc:`Fires linked effects when you Overload a reload.`,event:`overload`},{id:`inv_slidejump`,name:`Slidekick Relay`,kind:`invoker`,tier:1,icon:`⇗`,color:58879,desc:`Fires linked effects on a slide-jump.`,event:`slideJump`},{id:`inv_headbonk`,name:`Skullpop Striker`,kind:`invoker`,tier:1,icon:`💥`,color:16732754,desc:`Fires linked effects when you headbonk an enemy.`,event:`headbonk`,tag:`headbonk`},{id:`inv_railexit`,name:`Railspit Valve`,kind:`invoker`,tier:1,icon:`⇥`,color:6942894,desc:`Fires linked effects when you leave a grind rail.`,event:`railExit`,tag:`railExit`},{id:`inv_fifth`,name:`Fifth Round Hammer`,kind:`invoker`,tier:1,icon:`⑤`,color:14696699,desc:`Fires linked effects on every fifth shot.`,event:`fifthShot`},{id:`mod_chain`,name:`Chain Lightning`,kind:`modifier`,tier:2,icon:`↯`,color:4244735,desc:`Arcs to nearby enemies.`,effect:`chain`,base:1,tag:`shock`},{id:`mod_split`,name:`Splitter +2`,kind:`modifier`,tier:2,icon:`⑂`,color:16766784,desc:`Splits into 2 extra projectiles.`,effect:`split`,base:2},{id:`mod_burn`,name:`Slagburn`,kind:`modifier`,tier:1,icon:`🔥`,color:16739584,desc:`Sets enemies on fire.`,effect:`burn`,base:1,tag:`burn`},{id:`mod_cryo`,name:`Cryo Coil`,kind:`modifier`,tier:1,icon:`❄`,color:8444159,desc:`Slows and chills enemies.`,effect:`cryo`,base:1},{id:`mod_shock`,name:`Static Jolt`,kind:`modifier`,tier:1,icon:`Ψ`,color:11766015,desc:`Shocks and briefly stuns.`,effect:`shock`,base:1,tag:`shock`},{id:`mod_double`,name:`Double Trigger`,kind:`modifier`,tier:3,icon:`×2`,color:16777215,desc:`Doubles how often linked effects repeat.`,effect:`double`,base:1},{id:`mod_crit`,name:`Crit Surge`,kind:`modifier`,tier:2,icon:`✦`,color:16771584,desc:`Forces a surge of critical hits.`,effect:`crit`,base:1},{id:`mod_nova`,name:`Blast Nova`,kind:`modifier`,tier:2,icon:`✹`,color:16717636,desc:`Explodes in a ring around you.`,effect:`nova`,base:1},{id:`mod_heal`,name:`Patch Kit`,kind:`modifier`,tier:1,icon:`+`,color:58998,desc:`Restores a chunk of health.`,effect:`heal`,base:1},{id:`mod_magnet`,name:`Scrap Magnet`,kind:`modifier`,tier:1,icon:`⌁`,color:6619098,desc:`Yanks nearby pickups to you.`,effect:`magnet`,base:1},{id:`mod_fuel`,name:`Fuel Siphon`,kind:`modifier`,tier:1,icon:`⛽`,color:16755520,desc:`Refills gadget fuel.`,effect:`fuel`,base:1},{id:`mod_missile`,name:`Pocket Missile`,kind:`modifier`,tier:3,icon:`🚀`,color:16727296,desc:`Launches a homing missile.`,effect:`missile`,base:1},{id:`mod_shield`,name:`Bulwark Plate`,kind:`modifier`,tier:2,icon:`⛨`,color:4492031,desc:`Grants a short damage shield.`,effect:`shield`,base:1},{id:`pas_damage`,name:`Hot Rounds`,kind:`passive`,tier:1,icon:`▲`,color:16732754,desc:`+15% damage.`,stats:{damage:.15}},{id:`pas_firerate`,name:`Hair Trigger`,kind:`passive`,tier:1,icon:`»`,color:16755520,desc:`+12% fire rate.`,stats:{fireRate:.12}},{id:`pas_crit`,name:`Lucky Lens`,kind:`passive`,tier:1,icon:`◉`,color:16771584,desc:`+8% crit chance.`,stats:{critChance:.08}},{id:`pas_hp`,name:`Plating Slab`,kind:`passive`,tier:0,icon:`♥`,color:16728193,desc:`+20 max HP.`,stats:{maxHp:20}},{id:`pas_speed`,name:`Greased Boots`,kind:`passive`,tier:1,icon:`»`,color:4244735,desc:`+8% move speed.`,stats:{speed:.08}},{id:`pas_celldrop`,name:`Cell Lure`,kind:`passive`,tier:0,icon:`◎`,color:7798531,desc:`+20% Powercell drops.`,stats:{cellDrop:.2}},{id:`pas_fuel`,name:`Fat Tank`,kind:`passive`,tier:0,icon:`⛽`,color:16752640,desc:`+0.6s gadget fuel.`,stats:{fuel:.6}},{id:`pas_reload`,name:`Quickload Spring`,kind:`passive`,tier:1,icon:`↻`,color:58879,desc:`Reload 15% faster.`,stats:{reload:-.15}},{id:`pas_mag`,name:`Deep Magazine`,kind:`passive`,tier:0,icon:`▤`,color:11583173,desc:`+25% magazine size.`,stats:{magSize:.25}},{id:`pas_pickup`,name:`Vacuum Ring`,kind:`passive`,tier:0,icon:`◌`,color:1960374,desc:`+30% pickup range.`,stats:{pickupRange:.3}},{id:`pas_critmul`,name:`Sharpened Edge`,kind:`passive`,tier:2,icon:`✦`,color:16766464,desc:`+25% crit damage.`,stats:{critMul:.25}},{id:`pas_score`,name:`Showboat Badge`,kind:`passive`,tier:2,icon:`★`,color:16761856,desc:`+15% score.`,stats:{scoreMul:.15}},{id:`pas_overload`,name:`Hotwire Loom`,kind:`passive`,tier:2,icon:`⚡`,color:16748800,desc:`+0.5s Overload duration.`,stats:{overloadDur:.5}},{id:`oc_glass`,name:`Glass Cannon`,kind:`corrupted`,tier:3,icon:`☠`,color:13959168,desc:`+50% damage, but take +35% damage.`,stats:{damage:.5,damageTaken:.35}},{id:`oc_belt`,name:`Belt-Fed Fury`,kind:`corrupted`,tier:3,icon:`»»`,color:16739584,desc:`+40% fire rate, but -30% magazine.`,stats:{fireRate:.4,magSize:-.3}},{id:`oc_sprinter`,name:`Sprinter Wiring`,kind:`corrupted`,tier:3,icon:`⇛`,color:47316,desc:`+20% speed, but -30 max HP.`,stats:{speed:.2,maxHp:-30}},{id:`oc_gambler`,name:`Gambler Chip`,kind:`corrupted`,tier:3,icon:`⚄`,color:11141375,desc:`+25% crit chance, but +30% reload time.`,stats:{critChance:.25,reload:.3}},{id:`oc_greed`,name:`Greed Engine`,kind:`corrupted`,tier:3,icon:`$`,color:16766464,desc:`+60% Powercell drops, but -15% damage.`,stats:{cellDrop:.6,damage:-.15}},{id:`oc_redline`,name:`Redline Furnace`,kind:`corrupted`,tier:3,icon:`♨`,color:16717636,desc:`+0.1 crit chance and +50% crit damage, but -25 max HP.`,stats:{critChance:.1,critMul:.5,maxHp:-25}},{id:`oc_hyper`,name:`Hyperdash Coil`,kind:`corrupted`,tier:3,icon:`⇒`,color:1638399,desc:`Dash 40% faster, but +20% damage taken.`,stats:{dashCd:-.4,damageTaken:.2}},{id:`oc_showoff`,name:`Showoff Amp`,kind:`corrupted`,tier:3,icon:`★`,color:16728193,desc:`+50% score and +1s Overload, but -20% damage.`,stats:{scoreMul:.5,overloadDur:1,damage:-.2}},{id:`oc_leadfoot`,name:`Lead Lungs`,kind:`corrupted`,tier:3,icon:`▼`,color:9268835,desc:`+1 air jump, but -15% speed.`,stats:{airJumps:1,speed:-.15}},{id:`syn_jet_tank`,name:`Afterburn Tank`,kind:`passive`,tier:1,icon:`⛽`,color:16748800,desc:`Jetpack: +1.0s fuel.`,stats:{fuel:1},gadget:`jetpack`},{id:`syn_jet_burst`,name:`Thrust Flare`,kind:`modifier`,tier:2,icon:`🔥`,color:16739584,desc:`Jetpack: flames scorch what is below.`,effect:`burn`,base:1.5,gadget:`jetpack`,tag:`burn`},{id:`syn_grap_reel`,name:`Reel Motor`,kind:`passive`,tier:1,icon:`⇅`,color:6942894,desc:`Grapple: +12% speed, +15% grind.`,stats:{speed:.12,grind:.15},gadget:`grapple`},{id:`syn_grap_hook`,name:`Barbed Hook`,kind:`modifier`,tier:2,icon:`⚓`,color:11583173,desc:`Grapple: hook arcs lightning.`,effect:`chain`,base:1.25,gadget:`grapple`,tag:`shock`},{id:`syn_cape_air`,name:`Updraft Weave`,kind:`passive`,tier:1,icon:`☁`,color:8444159,desc:`Cape: +1 air jump.`,stats:{airJumps:1},gadget:`cape`},{id:`syn_cape_guard`,name:`Mantle Guard`,kind:`modifier`,tier:2,icon:`⛨`,color:4492031,desc:`Cape: wraps you in a stronger shield.`,effect:`shield`,base:1.5,gadget:`cape`},{id:`syn_roll_tread`,name:`Gripper Tread`,kind:`passive`,tier:1,icon:`⚙`,color:16755520,desc:`Roller: +20% grind, +10% score.`,stats:{grind:.2,scoreMul:.1},gadget:`roller`},{id:`syn_roll_spark`,name:`Sparkwheel`,kind:`modifier`,tier:2,icon:`✵`,color:16771584,desc:`Roller: sparks shock enemies.`,effect:`shock`,base:1.5,gadget:`roller`,tag:`shock`}],qm=Object.freeze(Object.fromEntries(Km.map(e=>[e.id,e]))),Jm={jetpack:Km.filter(e=>e.gadget===`jetpack`).map(e=>e.id),grapple:Km.filter(e=>e.gadget===`grapple`).map(e=>e.id),cape:Km.filter(e=>e.gadget===`cape`).map(e=>e.id),roller:Km.filter(e=>e.gadget===`roller`).map(e=>e.id)},Ym={jetpack:{name:`Jetpack`,desc:`Hold to hover on 2.5 s of fuel.`,icon:`🚀`,cost:0},grapple:{name:`Grapple Hook`,desc:`Air-jump near a rail to zip straight onto it.`,icon:`⚓`,cost:60},cape:{name:`Hero-Slam Cape`,desc:`Slide in mid-air to slam down with a shockwave.`,icon:`☁`,cost:90},roller:{name:`Roller Rail-Boost`,desc:`Leaving a rail grants a sprint burst.`,icon:`⚙`,cost:120}};function Xm(e,t){return Km.filter(n=>n.kind===`core`?!1:n.gadget?e.includes(n.id):n.kind!==`corrupted`||t)}var Zm=[4,3,1.6,.5],Qm=[-.12,.05,.25,.4];function $m(e,t){let n=Math.max(0,Math.min(3,e));return Math.max(.05,Zm[n]*(1+Qm[n]*Math.max(0,t)))}function eh(e,t,n){let r=0;for(let e of t)r+=$m(e.tier,n);let i=e.next()*r;for(let e=0;e<t.length;e++)if(i-=$m(t[e].tier,n),i<0)return e;return t.length-1}function th(e,t,n,r,i,a){let o=Xm(r,i),s=Math.min(Math.max(0,Math.floor(t)),o.length),l=[],u=e=>e.kind===`invoker`||e.kind===`modifier`;if(s>0){let t=o.filter(u);if(t.length){let r=eh(e,t,n);l.push(t[r])}let r=o.filter(e=>!l.includes(e));for(;l.length<s&&r.length;){let t=eh(e,r,n);l.push(r.splice(t,1)[0])}}return e.shuffle(l).map(e=>({chipId:e.id,price:c(e.tier,a),sold:!1}))}function nh(e,t){e.gadgets.includes(t)||e.gadgets.push(t);let n=[];for(let r of Jm[t]??[])e.addedBazarItems.includes(r)||(e.addedBazarItems.push(r),n.push(r));return n}var rh=e=>({kind:`wrench`,amount:e,label:`${e} Wrenches`,icon:`🔧`}),ih=(e,t)=>({kind:`skin`,id:e,label:t,icon:`🧥`}),ah=(e,t)=>({kind:`trail`,id:e,label:t,icon:`✨`}),oh=(e,t)=>({kind:`pop`,id:e,label:t,icon:`💥`}),sh=[100,220,360,520,700,900,1120,1360,1620,1900,2200,2520,2860,3220,3600,4e3,4420,4860,5320,6e3],ch=[rh(10),rh(15),rh(20),rh(20),rh(25),ah(`trail_gold`,`Gold Dust Trail`),rh(30),rh(30),rh(35),rh(40),rh(40),rh(45),rh(45),rh(50),oh(`pop_neon`,`Neon Pop`),rh(50),rh(55),rh(55),rh(60),rh(60)],lh=[rh(25),rh(35),rh(40),rh(50),oh(`pop_ink`,`Ink Pop`),rh(60),rh(75),rh(90),rh(100),ih(`skin_gold`,`Gold Rush Skin`),rh(110),rh(120),rh(130),rh(140),rh(150),rh(160),rh(175),rh(190),rh(200),rh(250)],uh=sh.map((e,t)=>({xp:e,free:ch[t],premium:lh[t]}));function dh(e){let t=0;for(let n of uh)if(e>=n.xp)t++;else break;return t}function fh(e){let t=dh(e),n=t===0?0:uh[t-1].xp,r=uh[t];return r?{level:t,into:Math.max(0,e-n),span:r.xp-n}:{level:t,into:1,span:1}}function ph(e,t,n){return!Number.isInteger(t)||t<0||t>=uh.length||dh(e.pass.xp)<=t?!1:n===`premium`?e.pass.premium&&!e.pass.prem.includes(t):!e.pass.free.includes(t)}function mh(e,t,n){if(!ph(e,t,n))return null;let r=uh[t],i=n===`free`?r.free:r.premium;return i.kind===`wrench`?e.wrenches+=i.amount??0:i.id&&!e.cosmetics.owned.includes(i.id)&&e.cosmetics.owned.push(i.id),(n===`free`?e.pass.free:e.pass.prem).push(t),i}function hh(e,t,n){return Math.max(0,Math.floor(40+30*t+e/400+(n?150:0)))}var gh=[{id:`play`,icon:`▶`,label:`PLAY`},{id:`train`,icon:`🚆`,label:`TRAIN`},{id:`loadout`,icon:`🔫`,label:`LOADOUT`},{id:`pass`,icon:`🎟`,label:`PASS`},{id:`shop`,icon:`🎨`,label:`STYLE`},{id:`ghosts`,icon:`👻`,label:`GHOSTS`},{id:`settings`,icon:`⚙`,label:`SETUP`}],_h=class{host;wrap;screen;wr;lv;sheet;body;tabBtns=new Map;tab=`play`;draftName=``;draftCode=``;constructor(e,t){this.host=t,this.wr=$(`span`,`hub-wr`),this.wr.dataset.id=`hub-wrenches`,this.lv=$(`span`,`hub-lv`);let n=$(`div`,`panel flat hub-top`,$(`div`,`hub-logo`,`RAILBREAKER`),$(`div`,`hub-chips`,this.wr,this.lv));this.body=$(`div`,`hub-body scroll`),this.sheet=$(`div`,`panel hub-sheet short`,this.body);let r=$(`div`,`panel flat hub-tabs`);for(let e of gh){let t=$(`button`,`hub-tab`,$(`span`,`ic`,e.icon),$(`span`,`lb`,e.label));t.type=`button`,t.dataset.id=`tab-`+e.id,t.addEventListener(`click`,()=>{Y.ui(`tap`),this.setTab(e.id)}),this.tabBtns.set(e.id,t),r.append(t)}this.screen=$(`div`,`screen hub`,n,$(`div`,`hub-gap`),this.sheet,r),this.wrap=$(`div`,`col`,this.screen),e.append(this.wrap),this.setTab(`play`)}setTab(e){let t=this.tab;this.tab=e,this.host.tabChanged?.(e),(e===`train`||t===`train`)&&this.host.focusCar(-1),this.body.scrollTop=0,this.refresh()}refresh(){let e=this.host.save,t=this.body.scrollTop;this.wr.textContent=`🔧 ${Cm(e.wrenches)}`,this.lv.textContent=`LV ${dh(e.pass.xp)}`;for(let[e,t]of this.tabBtns)t.classList.toggle(`on`,e===this.tab);let n=this.tab===`shop`||this.tab===`loadout`,r=!n&&this.tab!==`play`&&this.tab!==`train`;switch(this.sheet.classList.toggle(`short`,!r&&!n),this.sheet.classList.toggle(`mid`,n),this.sheet.classList.toggle(`tall`,r),bm(this.body),this.tab){case`play`:this.renderPlay();break;case`train`:this.renderTrain();break;case`loadout`:this.renderLoadout();break;case`pass`:this.renderPass();break;case`shop`:this.renderShop();break;case`ghosts`:this.renderGhosts();break;case`settings`:this.renderSettings()}this.body.scrollTop=t}dispose(){this.tab===`train`&&this.host.focusCar(-1),this.wrap.remove()}mutated(){this.host.persist(),this.refresh()}deny(e=`NOT ENOUGH WRENCHES`){Y.ui(`deny`),Tm(e,`bad`)}spend(e){let t=this.host.save;return t.wrenches<e?(this.deny(),!1):(t.wrenches-=e,!0)}board(e){let t=$(`div`,`hub-lb`),n=this.host.leaderboard();return n.forEach((n,r)=>{let i=$(`div`,`hub-lbr`+(n.you?` you`:``),$(`span`,`rk`,r+1),$(`span`,`nm`,n.you?`YOU`:n.name),$(`span`,`tm`,n.time>0?Sm(n.time):`—`),e?$(`span`,`sc`,n.score>0?Cm(n.score):`—`):null);t.append(i)}),n.length||t.append($(`div`,`txt`,`No runs yet.`)),t}renderPlay(){let e=this.host.save,t=this.host,n=this.body;n.append($(`div`,`hub-h`,`DAILY RUN · ${t.dailyKey}`));let r=$(`div`,`hub-two`);for(let e of t.dailyMutators)r.append($(`div`,`hub-card`,$(`div`,`row`,$(`span`,`hub-ico`,e.icon),$(`span`,`hub-name`,e.name)),$(`div`,`txt`,e.desc)));n.append(r);let i=$(`div`,`hub-route`);t.dailyBiomes.forEach((e,t,n)=>{let r=t===n.length-1;i.append($(`span`,`hub-stop`+(r?` boss`:``),r?`${e} 💀`:e)),r||i.append($(`span`,`hub-arrow`,`▶`))}),n.append(i);let a=wf(e).endless,o=ym(`START DAILY RUN`,`primary big wide`,()=>t.start(`daily`));o.dataset.id=`start-daily`;let s=ym(`STANDARD RUN`,`teal grow hub-mode`,()=>t.start(`standard`));s.dataset.id=`start-standard`;let c=ym(a?`ENDLESS LADDER`:`🔒 ENDLESS`,`dark grow hub-mode`,()=>t.start(`endless`));c.dataset.id=`start-endless`,c.disabled=!a;let l=$(`div`,`hub-actions`,o,$(`div`,`row`,s,c));a?e.stats.bestEndless>0&&l.append($(`div`,``,$(`span`,`tag yellow`,`BEST: RUNG ${e.stats.bestEndless}`))):l.append($(`div`,`hub-hint`,`Build the Endless Gate`)),n.append(l),t.weekly&&n.append($(`div`,``,$(`span`,`tag yellow`,`WEEKLY SYNERGY: ${t.weekly.label}`))),n.append(this.board(!1))}renderTrain(){let e=this.host.save;this.body.append($(`div`,`hub-h`,`WORKSHOP TRAIN`)),yf.forEach((t,n)=>{let r=t.id,i=xf(e,r),a=Sf(e,r),o=$(`div`,`hub-pips`);for(let e=0;e<t.maxLevel;e++)o.append($(`i`,`hub-pip`+(e<i?` on`:``)));let s=a===null?$(`span`,`tag teal`,`MAXED`):$(`span`,`txt`,`NEXT: ${t.perks[i]??``}`),c=$(`div`,`grow`,$(`div`,`row`,$(`span`,`hub-name`,t.name),o,$(`span`,`sub`,`${i}/${t.maxLevel}`)),$(`div`,`txt`,t.blurb),$(`div`,``,s)),l=[$(`span`,`hub-ico`,t.icon),c];if(a!==null){let n=ym(`🔧 ${a}`,`small yellow`,n=>{n.stopPropagation(),Cf(e,r)?(Y.ui(`unlock`),Tm(`${t.name.toUpperCase()} LV ${xf(e,r)}`,`good`),this.mutated()):this.deny()},`none`);n.dataset.id=`buy-layer-`+r,l.push(n)}let u=$(`div`,`hub-card clk row`,...l);u.dataset.id=`layer-`+r,u.addEventListener(`click`,()=>this.host.focusCar(n)),this.body.append(u)})}renderLoadout(){let e=this.host.save,t=this.body;t.append($(`div`,`hub-sec`,`WEAPONS`));for(let n of zm){let r=e.weapons.includes(n.id),i=$(`div`,`hub-stats`,$(`span`,`tag`,`DMG ${n.dmg}`),$(`span`,`tag`,`RATE ${n.rate}`),$(`span`,`tag`,`MAG ${n.mag}`)),a=$(`div`,`col-act`);if(a.style.cssText=`display:flex;flex-direction:column;gap:4px;flex:0 0 auto`,r){let t=ym(`PRIMARY`,`small `+(e.primary===n.id?`teal`:`dark`),()=>{e.secondary===n.id&&(e.secondary=e.primary),e.primary=n.id,this.mutated()});t.dataset.id=`primary-`+n.id;let r=ym(`SECONDARY`,`small `+(e.secondary===n.id?`yellow`:`dark`),()=>{e.primary===n.id&&(e.primary=e.secondary),e.secondary=n.id,this.mutated()});r.dataset.id=`secondary-`+n.id,a.append(t,r)}else{let t=ym(`🔧 ${n.price}`,`small yellow`,()=>{this.spend(n.price)&&(e.weapons.push(n.id),Y.ui(`buy`),Tm(`${n.name.toUpperCase()} UNLOCKED`,`good`),this.mutated())},`none`);t.dataset.id=`buy-weapon-`+n.id,a.append(t)}let o=$(`div`,`hub-card row`+(r?` on`:``),$(`span`,`hub-ico`,n.icon),$(`div`,`grow`,$(`div`,`hub-name`,n.name),$(`div`,`txt`,n.desc),i),a);t.append(o)}t.append($(`div`,`hub-sec`,`GADGETS`));let n=wf(e).gadgetBay;for(let r of Object.keys(Ym)){let i=r,a=Ym[i],o=e.gadgets.includes(i),s=$(`div`,`hub-tags`);for(let e of Jm[i]??[])s.append($(`span`,`tag teal`,qm[e]?.name??e));let c=[$(`span`,`hub-ico`,a.icon),$(`div`,`grow`,$(`div`,`hub-name`,a.name),$(`div`,`txt`,a.desc),$(`div`,`sub`,`BAZAR SYNERGY`),s)];if(o)c.push($(`span`,`tag orange`,`ACTIVE`));else{let t=ym(`🔧 ${a.cost}`,`small yellow`,()=>{if(!n||!this.spend(a.cost))return;let t=nh(e,i);Y.ui(`unlock`),Tm(`+${t.length} SYNERGY CHIPS ADDED TO THE BAZAR`,`good`),this.mutated()},`none`);t.dataset.id=`buy-gadget-`+i,t.disabled=!n,c.push(t)}let l=$(`div`,`hub-card row`+(o?` on`:``),...c);t.append(l),!o&&!n&&t.append($(`div`,`hub-hint`,`Build the Gadget Bay`))}t.append($(`div`,`hub-sec`,`ADDED BAZAR ITEMS`));let r=$(`div`,`hub-tags`);for(let t of e.addedBazarItems)r.append($(`span`,`tag`,qm[t]?.name??t));e.addedBazarItems.length||r.append($(`span`,`txt`,`None yet`)),t.append(r)}renderPass(){let e=this.host.save,t=this.body,n=fh(e.pass.xp),r=dh(e.pass.xp),i=$(`div`,`bar`,$(`i`));if(i.firstElementChild.style.width=`${Math.min(100,Math.round(n.into/Math.max(1,n.span)*100))}%`,t.append($(`div`,`row`,$(`span`,`hub-h`,`TRACK PASS`),$(`span`,`tag demo right`,`SANDBOX · DEMO STORE — NO REAL PURCHASES`))),t.append($(`div`,`row`,$(`span`,`hub-name`,`LEVEL ${r}`),$(`span`,`sub right`,r>=uh.length?`MAX`:`${Cm(n.into)} / ${Cm(n.span)} XP`)),i),e.pass.premium)t.append($(`div`,``,$(`span`,`tag demo`,`PREMIUM ACTIVE`)));else{let n=ym(`UNLOCK PREMIUM TRACK`,`pink wide`,()=>{e.pass.premium=!0,Y.ui(`unlock`),Tm(`PREMIUM UNLOCKED (SANDBOX)`,`good`),this.mutated()},`none`);n.dataset.id=`pass-premium`,t.append(n)}t.append($(`div`,`hub-tierhead`,$(`span`),$(`span`,``,`FREE`),$(`span`,``,`PREMIUM`))),uh.forEach((e,n)=>{let r=$(`div`,`hub-tier`,$(`div`,`hub-tn`,n+1),this.passCell(n,`free`,e.free),this.passCell(n,`premium`,e.premium));r.dataset.id=`pass-tier-`+n,t.append(r)})}passCell(e,t,n){let r=this.host.save,i=(t===`free`?r.pass.free:r.pass.prem).includes(e),a=ph(r,e,t),o=$(`div`,`hub-cell`+(t===`premium`?` prem`:``)+(a?` claimable`:``)+(i?` done`:``),$(`span`,`ri`,n.icon),$(`span`,`rl`,n.label));if(i)o.append($(`span`,``,`✔`));else if(a){let n=ym(`CLAIM`,`small yellow hub-claim`,()=>{let n=mh(r,e,t);n?(Y.ui(`claim`),Tm(n.label.toUpperCase(),`good`),this.mutated()):this.deny(`CANNOT CLAIM`)},`none`);n.dataset.id=(t===`free`?`claim-free-`:`claim-prem-`)+e,o.append(n)}else o.append($(`span`,``,`🔒`));return o}renderShop(){let e=this.host.save,t=this.body,n=wf(e).cosmetics;n||t.append($(`div`,`hub-card`,$(`span`,`tag orange`,`🔒 LOCKED`),$(`div`,`txt`,`Build the Cosmetic Paint Booth (TRAIN tab) to open the shop`))),t.append($(`div`,`hub-sec`,`CHASSIS SKINS`));for(let e of Yp){let r=e.colors,i=$(`div`,`hub-sw`);for(let e of[r.jacket,r.pants,r.helmet,r.glow]){let t=$(`i`);t.style.background=xm(e),i.append(t)}t.append(this.cosCard(e.id,e.name,e.price,e.passOnly===!0,n,i,$(`span`,`tag`,`VOICE: ${e.voiceName}`)))}t.append($(`div`,`hub-sec`,`SPARK TRAILS`));for(let e of Xp){let r=$(`div`,`hub-sw grad`);r.style.background=`linear-gradient(90deg, ${xm(e.color)}, ${xm(e.color2)})`,t.append(this.cosCard(e.id,e.name,e.price,e.passOnly===!0,n,r,$(`span`,`hub-hint`,`visible on your ghost`)))}t.append($(`div`,`hub-sec`,`POP STYLE PACKS`));for(let e of Zp)t.append(this.cosCard(e.id,e.name,e.price,e.passOnly===!0,n,$(`span`,`hub-ico`,`💥`),null));t.append($(`div`,`hub-sec`,`MONETIZATION SANDBOX`));let r=ym(e.adFree?`OWNED`:`BUY`,`small `+(e.adFree?`teal`:`pink`),()=>{e.adFree=!e.adFree,Y.ui(e.adFree?`buy`:`tap`),this.mutated()},`none`);r.dataset.id=`adfree-toggle`,t.append($(`div`,`hub-card`,$(`div`,`row`,$(`span`,`tag demo`,`DEMO`),$(`span`,`hub-name grow`,`AD-FREE PASS — $4.99`),r),$(`div`,`txt`,`Rewarded ads resolve instantly. Demo only — no payment is taken.`)))}cosCard(e,t,n,r,i,a,o){let s=this.host.save,c=tm(s,e),l=s.cosmetics.skin===e||s.cosmetics.trail===e||s.cosmetics.pop===e,u;if(c){if(l)u=$(`span`,`tag teal`,`EQUIPPED`);else{let t=ym(`EQUIP`,`small teal`,()=>{im(s,e)&&(Y.ui(`unlock`),this.mutated())},`none`);t.disabled=!i,u=t}}else if(r)u=$(`span`,`tag demo`,`TRACK PASS`);else{let r=ym(`🔧 ${n}`,`small yellow`,()=>{rm(s,e)?(Y.ui(`buy`),Tm(`${t.toUpperCase()} UNLOCKED`,`good`),this.mutated()):this.deny()},`none`);r.disabled=!i,u=r}let d=$(`div`,`hub-card row`+(l?` on`:``)+(i?``:` dim`),a,$(`div`,`grow`,$(`div`,`hub-name`,t),o),u);return d.dataset.id=`cos-`+e,d}renderGhosts(){let e=this.host.save,t=this.host,n=this.body;n.append($(`div`,`hub-h`,`TODAY'S BOARD · ${t.dailyKey}`),this.board(!0)),n.append($(`div`,`hub-sec`,`YOUR SHARE CODE`));let r=t.shareCode();if(r){let e=$(`textarea`,`hub-in`);e.readOnly=!0,e.value=r,n.append(e,ym(`COPY`,`small teal`,()=>{(async()=>{try{await navigator.clipboard.writeText(r),Tm(`CODE COPIED`,`good`)}catch{e.select(),Tm(`COPY FAILED — SELECT AND COPY`,`bad`)}})()}))}else n.append($(`div`,`txt`,`Finish today's daily run to mint a code`));n.append($(`div`,`hub-sec`,`IMPORT FRIEND CODE`));let i=wf(e).friendCodes,a=$(`input`,`hub-in`);a.type=`text`,a.maxLength=10,a.placeholder=`NAME`,a.value=this.draftName,a.disabled=!i,a.addEventListener(`input`,()=>{this.draftName=a.value});let o=$(`textarea`,`hub-in`);o.placeholder=`PASTE CODE`,o.value=this.draftCode,o.disabled=!i,o.dataset.id=`ghost-code`,o.addEventListener(`input`,()=>{this.draftCode=o.value});let s=ym(`IMPORT`,`small teal`,()=>{let e=t.importFriend(a.value.trim(),o.value.trim());e?(Y.ui(`deny`),Tm(e,`bad`)):(this.draftName=``,this.draftCode=``,Y.ui(`unlock`),Tm(`FRIEND GHOST IMPORTED`,`good`),this.mutated())},`none`);s.dataset.id=`ghost-import`,s.disabled=!i,n.append(a,o,s),i||n.append($(`div`,`hub-hint`,`Upgrade the Ghost Telemetry Dish to Lv2`)),e.friends.length&&n.append($(`div`,`hub-sec`,`FRIENDS`)),e.friends.forEach((t,r)=>{let i=$(`span`,`hub-name grow`);i.textContent=t.name;let a=ym(`✕`,`small dark`,()=>{e.friends.splice(r,1),this.mutated()});n.append($(`div`,`hub-card row`,$(`span`,`hub-ico`,`👻`),i,a))})}renderSettings(){let e=this.host.save,t=this.body;t.append($(`div`,`hub-h`,`SETUP`));let n=ym(e.settings.haptics?`HAPTICS: ON`:`HAPTICS: OFF`,`small `+(e.settings.haptics?`teal`:`dark`),()=>{e.settings.haptics=!e.settings.haptics,this.mutated()});n.dataset.id=`set-haptics`,t.append(n);let r=(t,n,r)=>{let i=$(`span`,`sub right`,`${Math.round(e.settings[n]*100)}%`),a=$(`input`,`hub-range`);return a.type=`range`,a.min=`0`,a.max=`1`,a.step=`0.05`,a.value=String(e.settings[n]),a.dataset.id=r,a.addEventListener(`input`,()=>{e.settings[n]=Number(a.value),i.textContent=`${Math.round(e.settings[n]*100)}%`,this.host.persist()}),$(`div`,`hub-card`,$(`div`,`row`,$(`span`,`hub-name`,t),i),a)};t.append(r(`MUSIC VOLUME`,`music`,`set-music`),r(`SFX VOLUME`,`sfx`,`set-sfx`));let i=$(`div`,`hub-q`);[`LOW`,`MED`,`HIGH`].forEach((t,n)=>{let r=ym(t,`small `+(e.settings.quality===n?`teal`:`dark`),()=>{e.settings.quality=n,this.mutated()});r.dataset.id=`set-quality-`+n,i.append(r)}),t.append($(`div`,`hub-card`,$(`span`,`hub-name`,`QUALITY`),i)),t.append($(`div`,`hub-sec`,`CONTROLS`)),t.append($(`div`,`hub-card hub-help`,$(`div`,`txt`,$(`b`,``,`TOUCH: `),`drag to steer · swipe up/tap = jump · hold = jetpack hover · swipe down = slide · tap the round button = Overload/Dash`),$(`div`,`txt`,$(`b`,``,`KEYBOARD: `),`A/D or arrows · Space/W jump (hold to hover) · S slide · Shift sprint · E/click Overload/Dash · Esc pause`)));let a=ym(`RESET SAVE`,`small pink`,()=>this.confirmReset());a.dataset.id=`set-reset`,t.append(a)}confirmReset(){let e=()=>{r.remove()},t=ym(`ERASE EVERYTHING`,`pink`,()=>{Rm(),location.reload()});t.dataset.id=`reset-confirm`;let n=ym(`CANCEL`,`dark`,e),r=$(`div`,`modal`,$(`div`,`panel`,$(`div`,`title`,`RESET SAVE?`),$(`div`,`txt hub-modal-msg`,`This erases wrenches, upgrades, weapons, cosmetics, pass progress and ghosts. It cannot be undone.`),t,n));this.screen.append(r)}};function vh(e,t,n){return n?(Tm(`AD-FREE PASS: REWARD GRANTED`,`good`),Promise.resolve(!0)):new Promise(n=>{let r=$(`i`),i=$(`div`,`scr-ad-count`,`2`),a=!1,o=e=>{a||(a=!0,clearInterval(u),c.remove(),n(e))},s=ym(`SKIP (NO REWARD)`,`dark small`,()=>o(!1));s.dataset.id=`ad-skip`;let c=$(`div`,`modal scr-ad`,$(`div`,`panel`,$(`div`,`row`,$(`span`,`tag demo`,`SANDBOX AD · DEMO`),$(`span`,`sub right`,`NO REAL AD NETWORK`)),$(`div`,`scr-ad-screen`,$(`div`,`scr-ad-logo`,`RAIL-COLA™`),$(`div`,`txt`,`A totally fictional beverage for totally fictional rail pirates.`),i),$(`div`,`bar`,r),$(`div`,`txt center`,`Reward: ${t}`),s));c.dataset.id=`ad-modal`,e.append(c);let l=performance.now(),u=setInterval(()=>{let e=(performance.now()-l)/2e3;r.style.width=Math.min(100,e*100)+`%`,i.textContent=String(Math.max(0,Math.ceil(2-e*2))),e>=1&&(Y.ui(`claim`),o(!0))},50)})}var yh=class{el;constructor(e,t,n,r,i){let a=ym(n?`⚡ REVIVE (AD-FREE)`:`▶ WATCH AD · REVIVE`,`teal big wide`,r);a.dataset.id=`death-revive`,a.disabled=!t;let o=ym(`END RUN`,`dark wide`,i);o.dataset.id=`death-end`,this.el=$(`div`,`modal`,$(`div`,`panel center`,$(`div`,`title scr-wrecked`,`WRECKED!`),$(`div`,`txt`,t?`One rewarded revive per run. Come back at 50% HP with a shockwave.`:`Revive already used this run.`),a,$(`span`,`tag demo`,`SANDBOX · MOCK AD`),o)),e.append(this.el)}dispose(){this.el.remove()}},bh=class{el;constructor(e,t,n,r,i){let a=ym(``,`dark wide`,()=>{t.settings.haptics=!t.settings.haptics,o(),i()}),o=()=>{a.textContent=`HAPTICS: ${t.settings.haptics?`ON`:`OFF`}`};o(),a.dataset.id=`pause-haptics`;let s=ym(`RESUME ▶`,`primary big wide`,n);s.dataset.id=`pause-resume`;let c=ym(`ABANDON RUN`,`dark wide`,r);c.dataset.id=`pause-quit`,this.el=$(`div`,`modal`,$(`div`,`panel center`,$(`div`,`title`,`PAUSED`),$(`div`,`txt`,`Drag to steer · swipe up to jump (hold to hover) · swipe down to slide · tap the round button to Overload during a reload, or Dash.`),s,a,c)),e.append(this.el)}dispose(){this.el.remove()}},xh=class{el;constructor(e,t,n,r,i){let a=t.victory?`RUN COMPLETE!`:t.mode===`endless`?`LADDER: RUNG ${t.depth}`:`RUN OVER`,o=(e,t,n=``)=>$(`div`,`scr-stat `+n,$(`span`,`sub`,e),$(`b`,``,t)),s=$(`div`,`scr-board`);t.race.forEach((e,t)=>s.append($(`div`,`scr-board-row`+(e.you?` you`:``),$(`b`,``,String(t+1)),$(`span`,`grow`,e.name),$(`span`,``,e.time>0?Sm(e.time):`DNF`),$(`em`,``,Cm(e.score)))));let c=fh(n.pass.xp),l=$(`i`);l.style.width=(c.span>0?Math.min(100,c.into/c.span*100):100)+`%`;let u=ym(t.mode===`daily`?`↻ REMATCH YOUR GHOST`:`↻ RUN IT BACK`,`primary big wide`,r);u.dataset.id=`res-rematch`;let d=ym(`HUB`,`dark`,()=>i(`play`));d.dataset.id=`res-hub`;let f=ym(`🎟 TRACK PASS`,`pink`,()=>i(`pass`));f.dataset.id=`res-pass`;let p=ym(`🎨 STYLE`,`teal`,()=>i(`shop`));p.dataset.id=`res-shop`;let m=[$(`div`,`scr-res-head`,$(`div`,`title scr-res-title`+(t.victory?` win`:``),a),t.newBest?$(`span`,`tag yellow`,`NEW BEST!`):null,$(`div`,`sub`,`${t.mode.toUpperCase()} · ${t.seed}`)),$(`div`,`scr-score`,Cm(t.score)),$(`div`,`scr-stats`,o(`TIME`,Sm(t.time)),o(`SECTORS`,String(t.sectors)),o(`KILLS`,String(t.kills)),o(`BOSS`,t.bossKilled?`DOWN`:`—`)),$(`div`,`scr-rewards panel flat`,$(`div`,`row`,$(`span`,`cur`,`🔧 +${t.wrenches}`),$(`span`,`sub`,`WRENCHES`),$(`span`,`right scr-xp`,`+${t.xp} XP`)),$(`div`,`row`,$(`span`,`sub`,`TRACK PASS LV ${dh(n.pass.xp)}`),$(`div`,`bar grow`,l))),t.race.length>1?$(`div`,`panel flat`,$(`div`,`sub`,t.mode===`daily`?`DAILY RACE — FINAL`:`GHOST RACE — FINAL`),s):null];if(t.ghostCode){let e=ym(`COPY SHARE CODE`,`yellow small`,()=>{try{navigator.clipboard.writeText(t.ghostCode).then(()=>Tm(`GHOST CODE COPIED`,`good`),()=>Tm(`COPY BLOCKED — FIND IT IN GHOSTS TAB`))}catch{Tm(`COPY BLOCKED — FIND IT IN GHOSTS TAB`)}});e.dataset.id=`res-copy`,m.push($(`div`,`row`,$(`span`,`txt grow`,`${t.newBest?`New best ghost recorded`:`Your best daily ghost`} (${Math.round(t.ghostCode.length/1024*10)/10} kB). Send the code to a friend to race.`),e))}m.push(u,$(`div`,`row scr-res-btns`,d,f,p));let h=$(`div`,`scr-res-body scroll`);for(let e of m)e&&h.append(e);this.el=$(`div`,`col`,$(`div`,`screen scr-res`,h)),this.el.dataset.id=`results`,e.append(this.el)}dispose(){this.el.remove()}},Sh=30,Ch=6,wh=`http://www.w3.org/2000/svg`,Th={damage:`DMG`,fireRate:`RATE`,critMul:`CRIT DMG`,speed:`SPEED`,cellDrop:`CELLS`,reload:`RELOAD`,magSize:`MAG`,damageTaken:`TAKEN`,pickupRange:`PICKUP`,grind:`GRIND`,scoreMul:`SCORE`,dashCd:`DASH CD`},Eh=new Set([`damageTaken`,`reload`,`dashCd`]);function Dh(e){return`${e.area}:${e.index}`}function Oh(e,t){return!!e&&e.area===t.area&&e.index===t.index}var kh=class{model;col;screen;selected=null;press=null;disposed=!1;adPending=!1;wireSvg=null;board=null;timerEl=null;barFill=null;barEl=null;lastSec=-1;lastPct=-1;lastLow=!1;offersScroll=0;onMove=e=>this.handleMove(e);onUp=e=>this.handleUp(e,!1);onCancel=e=>this.handleUp(e,!0);onResize=()=>this.layoutWires();constructor(e,t){this.model=t,this.screen=$(`div`,`screen workshop`),this.col=$(`div`,`col ws-col`,this.screen),e.append(this.col),window.addEventListener(`pointermove`,this.onMove),window.addEventListener(`pointerup`,this.onUp),window.addEventListener(`pointercancel`,this.onCancel),window.addEventListener(`resize`,this.onResize),this.render()}tick(){if(this.disposed||!this.timerEl)return;let e=Math.max(0,this.model.timeLeft),t=Math.ceil(e);t!==this.lastSec&&(this.lastSec=t,this.timerEl.textContent=`${t}s`);let n=e<6;n!==this.lastLow&&(this.lastLow=n,this.timerEl.classList.toggle(`ws-low`,n),this.barEl?.classList.toggle(`ws-low`,n));let r=Math.round(Math.min(1,e/Sh)*1e3)/10;r!==this.lastPct&&this.barFill&&(this.lastPct=r,this.barFill.style.width=r+`%`)}dispose(){this.disposed||(this.disposed=!0,window.removeEventListener(`pointermove`,this.onMove),window.removeEventListener(`pointerup`,this.onUp),window.removeEventListener(`pointercancel`,this.onCancel),window.removeEventListener(`resize`,this.onResize),this.cleanupPress(),this.col.remove())}chipAt(e){return(e.area===`grid`?this.model.grid:this.model.bench)[e.index]??null}def(e){return e?qm[e]??null:null}render(){if(this.disposed)return;this.model;let e=this.screen.querySelector(`.ws-offers`);e&&(this.offersScroll=e.scrollTop),bm(this.screen),this.selected&&!this.chipAt(this.selected)&&(this.selected=null),this.screen.append(this.buildHeader(),this.buildBoard(),this.buildBench(),this.buildInfo(),this.buildBazar(),this.buildFooter()),this.lastSec=-1,this.lastPct=-1,this.lastLow=!1,this.tick(),this.layoutWires();let t=this.screen.querySelector(`.ws-offers`);t&&(t.scrollTop=this.offersScroll)}buildHeader(){let e=this.model,t=$(`span`,`cur cell`,`⚡ ${e.cells}`);t.dataset.id=`ws-cells`;let n=$(`span`,`ws-hp`,`✚ ${Math.ceil(e.hp)}/${Math.ceil(e.maxHp)}`),r=$(`span`,`ws-timer`,`${Math.ceil(e.timeLeft)}s`);r.dataset.id=`ws-timer`;let i=$(`i`),a=$(`div`,`bar ws-timebar`,i);return this.timerEl=r,this.barFill=i,this.barEl=a,$(`div`,`panel ws-head`,$(`div`,`grow`,$(`div`,`title`,e.title),$(`div`,`sub`,e.subtitle)),$(`div`,`ws-head-r`,$(`div`,`row`,t,n),r),a)}chipTile(e,t,n=``){let r=$(`div`,`ws-chip ws-k-${e.kind} ${t===!0?`ws-on`:t===!1?`ws-off`:``} ${n}`.trim());r.style.setProperty(`--c`,xm(e.color));let i=$(`div`,`ws-in`,$(`span`,`ws-ico`,e.icon),$(`span`,`ws-nm`,e.name));return r.append(i),e.kind===`invoker`&&r.append($(`span`,`ws-inv`,`INV`)),r}slotEl(e,t){let n=this.chipAt(e),r=this.def(n),i=$(`div`,`ws-slot`);i.dataset.id=e.area===`grid`?`cell-${e.index}`:`bench-${e.index}`,i.dataset.slot=Dh(e),t&&(i.dataset.drop=Dh(e)),e.area===`grid`&&e.index===5&&i.classList.add(`ws-core-cell`);let a=e.area===`grid`?this.model.eval.powered[e.index]===!0:null;a&&i.classList.add(`ws-pow`),Oh(this.selected,e)&&i.classList.add(`ws-sel`);let o=null;return r&&(i.classList.add(`ws-has`),o=this.chipTile(r,a),r.id===`core`&&o.classList.remove(`ws-off`),i.append(o)),i.addEventListener(`pointerdown`,t=>this.handleDown(t,e,n,o??i)),i}buildBoard(){let e=$(`div`,`ws-board`);for(let t=0;t<16;t++)e.append(this.slotEl({area:`grid`,index:t},t!==5));let t=document.createElementNS(wh,`svg`);return t.setAttribute(`class`,`ws-wires`),e.append(t),this.wireSvg=t,this.board=e,$(`div`,`ws-boardwrap`,e)}layoutWires(){let e=this.wireSvg,t=this.board;if(!e||!t||!t.isConnected)return;for(;e.firstChild;)e.removeChild(e.firstChild);let n=t.clientWidth,r=t.clientHeight;e.setAttribute(`viewBox`,`0 0 ${n} ${r}`);let i=new Map;for(let e of Array.from(t.children))e instanceof HTMLElement&&e.dataset.slot?.startsWith(`grid:`)&&i.set(Number(e.dataset.slot.slice(5)),e);let a=e=>{let t=i.get(e);return t?[t.offsetLeft+t.offsetWidth/2,t.offsetTop+t.offsetHeight/2]:null},o=(e,t,n)=>{let r=document.createElementNS(wh,`line`);return r.setAttribute(`class`,e),r.setAttribute(`x1`,String(t[0])),r.setAttribute(`y1`,String(t[1])),r.setAttribute(`x2`,String(n[0])),r.setAttribute(`y2`,String(n[1])),r},s=[];for(let[e,t]of this.model.eval.wires){let n=a(e),r=a(t);n&&r&&s.push([n,r])}for(let[t,n]of s)e.append(o(`ws-wire-o`,t,n));for(let[t,n]of s)e.append(o(`ws-wire-i`,t,n))}buildBench(){let e=$(`div`,`ws-bench`);for(let t=0;t<6;t++)e.append(this.slotEl({area:`bench`,index:t},!0));let t=$(`div`,`ws-scrap`,`SCRAP +1⚡`);return t.dataset.id=`ws-scrap`,t.dataset.drop=`scrap`,this.selected&&t.classList.add(`ws-armed`),t.addEventListener(`click`,()=>{this.selected&&this.selected.area===`grid`&&this.selected.index===5||this.selected&&this.doSell(this.selected)}),$(`div`,`panel flat ws-benchrow`,e,t)}buildInfo(){let e=this.model,t=$(`div`,`panel flat ws-info`),n=this.selected?this.def(this.chipAt(this.selected)):null;if(n)return t.append($(`span`,`ws-info-ico`,n.icon),$(`div`,`ws-info-t`,$(`div`,`ws-info-n`,n.name+` `,$(`span`,`tag ${n.kind===`invoker`?`orange`:n.kind===`modifier`?`teal`:n.kind===`core`?`yellow`:``}`,n.kind)),$(`div`,`txt`,n.desc))),t;let r=e.eval.stats,i=Wm(),a=[],o=(e,t,n)=>{a.push($(`span`,`ws-stat ${n?`ws-up`:`ws-dn`}`,`${e} ${t}`))};for(let e of Um){let t=r[e]-i[e];if(Math.abs(t)<5e-4)continue;let n=Math.round(t*100);n!==0&&o(Th[e]??e,`${n>0?`+`:``}${n}%`,Eh.has(e)?n<0:n>0)}let s=(e,t,n,a=!0)=>{let s=r[e]-i[e];Math.abs(s)<5e-4||o(t,(s>0?`+`:``)+n(s),a?s>0:s<0)};s(`critChance`,`CRIT`,e=>`${Math.round(e*100)}%`),s(`maxHp`,`HP`,e=>`${Math.round(e)}`),s(`fuel`,`FUEL`,e=>`${e.toFixed(1)}s`),s(`overloadDur`,`OVERLOAD`,e=>`${e.toFixed(1)}s`),s(`airJumps`,`JUMPS`,e=>`${Math.round(e)}`);let c=$(`div`,`ws-stats`);if(a.length===0)c.append($(`span`,`sub`,`NO BONUSES YET - DRAG CHIPS NEXT TO THE CORE`));else for(let e of a)c.append(e);return t.append($(`div`,`grow`,c)),e.weekly&&t.append($(`span`,`tag yellow`,`WEEKLY: ${e.weekly.label}`)),t}buildBazar(){let e=this.model,t=$(`div`,`ws-offers scroll`);e.offers.forEach((n,r)=>{let i=this.def(n.chipId);if(!i)return;let a=$(`div`,`ws-tile`,this.chipTile(i,null)),o=$(`div`,`ws-offer-t`,$(`div`,`ws-offer-n`,i.name,` `,$(`span`,`tag`,i.kind)),$(`div`,`txt`,i.desc)),s=$(`div`,`ws-offer${n.sold?` ws-sold`:``}`,a,o);if(s.dataset.id=`offer-${r}`,n.sold)s.append($(`div`,`ws-sold-t`,`SOLD`));else{let t=ym(`⚡ ${n.price}`,`small yellow`,()=>this.doBuy(r),`none`);t.dataset.id=`buy-${r}`,t.disabled=e.cells<n.price,s.append(t)}t.append(s)});let n=ym(`⚡ ${e.healCost}`,`small teal`,()=>this.doHeal(),`none`);n.dataset.id=`ws-heal`,n.disabled=e.hp>=e.maxHp||e.cells<e.healCost;let r=$(`div`,`ws-offer ws-heal`,$(`div`,`ws-tile`,`✚`),$(`div`,`ws-offer-t`,$(`div`,`ws-offer-n`,`PATCH KIT +30 HP`),$(`div`,`txt`,`Field repairs before the next sector.`)),n);return t.append(r),$(`div`,`panel ws-bazar`,$(`div`,`ws-bazar-h`,$(`div`,`title`,`BAZAR`),$(`div`,`ws-next`,e.nextLabel)),t)}buildFooter(){let e=this.model,t=ym(e.rerollCost===0?`REROLL FREE`:`REROLL ⚡${e.rerollCost}`,`dark`,()=>this.doReroll(),`none`);t.dataset.id=`ws-reroll`;let n=$(`div`,`ws-foot-l`,t);if(e.adRerollAvailable){let e=ym(`▶ AD REROLL`,`pink`,()=>this.doAdReroll(),`none`);e.dataset.id=`ws-adreroll`,e.disabled=this.adPending,n.append($(`div`,`ws-adwrap`,e,$(`span`,`tag demo`,`SANDBOX`)))}let r=ym(`DEPART ▶`,`primary big ws-depart`,()=>{Y.ui(`tap`),e.depart()},`none`);return r.dataset.id=`ws-depart`,$(`div`,`ws-foot`,n,r)}fail(e){Y.ui(`deny`),Tm(e,`bad`)}doMove(e,t){this.model.move(e,t)?(Y.ui(`place`),this.selected=null):this.fail(t.area===`bench`&&this.chipAt(t)?`CAN'T SWAP THERE`:`CAN'T MOVE THERE`),this.render()}doSell(e){this.model.sell(e)?(Y.ui(`place`),this.selected=null):this.fail(`CAN'T SCRAP THAT`),this.render()}doBuy(e){let t=this.model,n=t.offers[e],r=n?n.price:0;t.buy(e)?Y.ui(`buy`):this.fail(n?.sold?`ALREADY SOLD`:t.cells<r?`NOT ENOUGH CELLS`:`BENCH FULL`),this.render()}doReroll(){let e=this.model;e.reroll()?Y.ui(`buy`):this.fail(e.cells<e.rerollCost?`NOT ENOUGH CELLS`:`CAN'T REROLL`),this.render()}doHeal(){let e=this.model;e.heal()?Y.ui(`buy`):this.fail(e.hp>=e.maxHp?`HP ALREADY FULL`:`NOT ENOUGH CELLS`),this.render()}doAdReroll(){this.adPending||(this.adPending=!0,this.render(),this.model.adReroll().then(e=>{this.adPending=!1,this.disposed||(e?Y.ui(`buy`):this.fail(`NO REWARD`),this.render())},()=>{this.adPending=!1,this.disposed||(this.fail(`AD UNAVAILABLE`),this.render())}))}tap(e,t){let n=this.selected;if(n&&Oh(n,e)){this.selected=null,this.render();return}let r=n!==null&&this.chipAt(n)===`core`;if(n&&!r){if(e.area===`grid`&&e.index===5){this.selected=e,this.render();return}this.doMove(n,e)}else t?(this.selected=e,Y.ui(`tap`),this.render()):n&&(this.selected=null,this.render())}handleDown(e,t,n,r){if(!(this.press||e.pointerType===`mouse`&&e.button!==0)){this.press={slot:t,chipId:n,el:r,pid:e.pointerId,x:e.clientX,y:e.clientY,dragging:!1,ghost:null,hot:null};try{r.setPointerCapture(e.pointerId)}catch{}}}draggable(e){return e.chipId!==null&&e.chipId!==`core`&&(e.slot.area!==`grid`||e.slot.index!==5)}handleMove(e){let t=this.press;if(!t||e.pointerId!==t.pid)return;if(!t.dragging){if(!this.draggable(t)||Math.hypot(e.clientX-t.x,e.clientY-t.y)<=Ch)return;let n=t.el.classList.contains(`ws-chip`)?t.el:null;if(!n)return;let r=n.getBoundingClientRect(),i=$(`div`,`ws-ghost`);i.style.width=r.width+`px`,i.style.height=r.height+`px`;let a=n.cloneNode(!0);a.classList.remove(`ws-lift`),i.append(a),document.body.append(i),n.classList.add(`ws-lift`),t.ghost=i,t.dragging=!0}let n=t.ghost;n&&(n.style.left=e.clientX-parseFloat(n.style.width)/2+`px`,n.style.top=e.clientY-parseFloat(n.style.height)/2-24+`px`);let r=this.dropEl(e.clientX,e.clientY);r!==t.hot&&(t.hot?.classList.remove(`ws-hot`),r?.classList.add(`ws-hot`),t.hot=r)}dropEl(e,t){let n=document.elementFromPoint(e,t),r=n?n.closest(`[data-drop]`):null;return r&&this.screen.contains(r)?r:null}parseDrop(e){let t=e?.dataset.drop;if(!t)return null;if(t===`scrap`)return{kind:`scrap`};let[n,r]=t.split(`:`);return n!==`grid`&&n!==`bench`||r===void 0?null:{kind:`slot`,slot:{area:n,index:Number(r)}}}handleUp(e,t){let n=this.press;if(!n||e.pointerId!==n.pid)return;let r=n.dragging,i=r&&!t?this.parseDrop(this.dropEl(e.clientX,e.clientY)):null;if(this.cleanupPress(),!this.disposed){if(r){if(!i){this.render();return}i.kind===`scrap`?this.doSell(n.slot):Oh(n.slot,i.slot)?this.render():this.doMove(n.slot,i.slot)}else t||this.tap(n.slot,n.chipId)}}cleanupPress(){let e=this.press;if(e){e.ghost?.remove(),e.hot?.classList.remove(`ws-hot`),e.el.classList.remove(`ws-lift`);try{e.el.releasePointerCapture(e.pid)}catch{}this.press=null}}},Ah=[`telegraph`,`overload`],jh=class{cues=[];aggressive=!1;get active(){return this.cues.length}update(e){let t=0;for(let n=0;n<this.cues.length;n++){let r=this.cues[n]-e;r>0&&(this.cues[t++]=r)}this.cues.length=t,this.aggressive=t>25}scale(e){return!this.aggressive||Ah.includes(e)?1:e===`debris`||e===`trail`||e===`ambient`?0:.4}cue(e,t){let n=this.scale(e);return n>0&&this.cues.push(t),this.aggressive=this.cues.length>25,n}reset(){this.cues.length=0,this.aggressive=!1}},Mh=`
attribute vec4 aColor; attribute float aSize; attribute vec3 aVel; varying vec4 vC; varying vec3 vDir;
uniform float uScale; uniform float uStreak;
void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv;
  vec4 q = projectionMatrix * (mv + vec4(mat3(modelViewMatrix) * aVel * 0.02, 0.0));
  vec2 d = (q.xy / max(q.w, 0.001) - gl_Position.xy / max(gl_Position.w, 0.001)) * vec2(projectionMatrix[1][1] / projectionMatrix[0][0], 1.0);
  float l = length(d), st = uStreak * step(0.0, aSize) * smoothstep(0.0008, 0.006, l);
  vDir = vec3(st > 0.0 ? d / max(l, 0.00001) : vec2(1.0, 0.0), st);
  gl_PointSize = abs(aSize) * uScale / max(0.2, -mv.z) * mix(1.0, mix(0.6, 1.35, st), uStreak * step(0.0, aSize)); vC = aColor; }`,Nh=`
varying vec4 vC; varying vec3 vDir; uniform float uSoft;
void main(){ vec2 p = gl_PointCoord - 0.5; p.y = -p.y;
  float d = abs(dot(p, vDir.xy)) + abs(dot(p, vec2(-vDir.y, vDir.x))) * (1.0 + vDir.z * 5.0);
  if (d > 0.5) discard; float a = mix(1.0, smoothstep(0.5, mix(0.15, 0.32, vDir.z), d), uSoft);
  vec3 c = mix(vC.rgb, min(vC.rgb + vec3(0.3, 0.26, 0.1), vec3(1.0)), vDir.z * smoothstep(0.2, 0.04, d));
  gl_FragColor = vec4(c, vC.a * a); }`,Ph=class{n;points;pos;col;size;vel;life;max;grav;base;next=0;mat;alive=0;constructor(e,t){this.n=e,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grav=new Float32Array(e),this.base=new Float32Array(e);let n=new Or;n.setAttribute(`position`,new pr(this.pos,3).setUsage(ot)),n.setAttribute(`aColor`,new pr(this.col,4).setUsage(ot)),n.setAttribute(`aSize`,new pr(this.size,1).setUsage(ot)),n.setAttribute(`aVel`,new pr(this.vel,3).setUsage(ot)),this.mat=new ba({vertexShader:Mh,fragmentShader:Nh,transparent:!0,depthWrite:!1,blending:1,uniforms:{uScale:{value:600},uSoft:{value:+!!t},uStreak:{value:+!!t}}}),this.points=new na(n,this.mat),this.points.frustumCulled=!1,this.points.layers.set(1)}spawn(e,t,n,r,i,a,o,s,c,l,u,d){let f=this.next;this.next=(this.next+1)%this.n,this.pos[f*3]=e,this.pos[f*3+1]=t,this.pos[f*3+2]=n,this.vel[f*3]=r,this.vel[f*3+1]=i,this.vel[f*3+2]=a,this.life[f]=o,this.max[f]=o,this.base[f]=s,this.grav[f]=d,this.col[f*4]=c,this.col[f*4+1]=l,this.col[f*4+2]=u,this.col[f*4+3]=1}update(e){let t=0;for(let n=0;n<this.n;n++){let r=this.life[n];if(r<=0){this.size[n]!==0&&(this.size[n]=0);continue}if(r-=e,this.life[n]=r,r<=0){this.size[n]=0;continue}t++,this.vel[n*3+1]-=this.grav[n]*e,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e;let i=r/this.max[n];this.size[n]=this.base[n]*(.35+.65*i),this.col[n*4+3]=Math.min(1,i*2.2)}this.alive=t;let n=this.points.geometry;n.attributes.position.needsUpdate=!0,n.attributes.aColor.needsUpdate=!0,n.attributes.aSize.needsUpdate=!0,n.attributes.aVel.needsUpdate=!0}clear(){this.life.fill(0),this.size.fill(0)}},Fh=1400,Ih=14,Lh=new Float32Array(42),Rh=new Float32Array(42),zh=new B,Bh=new B,Vh=new B,Hh=new B,Uh=new B,Wh=new U,Gh=class{group=new En;throttle=new jh;sparks=new Ph(720,!0);chunks=new Ph(320,!1);popStyle=`classic`;bolts=[];rings=[];flashes=[];pops=[];popFlip=1;shadows=[];shadowUsed=0;rPos=new Float32Array(Fh*4*3);rCol=new Float32Array(Fh*4*4);rQuads=0;ribbon;camPos=new B;constructor(){this.group.add(this.sparks.points,this.chunks.points);let e=new Or;e.setAttribute(`position`,new pr(this.rPos,3).setUsage(ot)),e.setAttribute(`color`,new pr(this.rCol,4).setUsage(ot));let t=[];for(let e=0;e<Fh;e++){let n=e*4;t.push(n,n+1,n+2,n,n+2,n+3)}e.setIndex(t),this.ribbon=new vi(e,new oi({vertexColors:!0,side:2,depthWrite:!1,transparent:!0,fog:!1})),this.ribbon.frustumCulled=!1,this.ribbon.layers.set(1),this.group.add(this.ribbon);let n=new ua(2,2);for(let e=0;e<14;e++){let e=new oi({map:hp(),transparent:!0,depthWrite:!1,side:2,fog:!1}),t=new vi(n,e);t.visible=!1,t.layers.set(1),this.group.add(t),this.rings.push({mesh:t,mat:e,life:0,max:1,r0:0,r1:1,a:1})}for(let e=0;e<22;e++){let e=new zr({map:dp(),transparent:!0,depthWrite:!1,blending:2,fog:!1}),t=new $r(e);t.visible=!1,t.layers.set(1),this.group.add(t),this.flashes.push({spr:t,mat:e,life:0,max:1,size:1})}for(let e=0;e<14;e++){let e=new zr({transparent:!0,depthTest:!1,depthWrite:!1,fog:!1}),t=new $r(e);t.visible=!1,t.layers.set(1),t.renderOrder=10,this.group.add(t),this.pops.push({spr:t,mat:e,life:0,vy:0,scale:1})}let r=new ua(1,1);r.rotateX(-Math.PI/2);for(let e=0;e<26;e++){let e=new vi(r,new oi({map:_p(),color:525324,transparent:!0,opacity:.38,depthWrite:!1,fog:!1}));e.visible=!1,e.layers.set(1),e.renderOrder=-1,this.group.add(e),this.shadows.push(e)}}burst(e,t,n,r,i,a={}){let o=this.throttle.cue(a.cat??`hit`,a.life??.4);if(o<=0)return;let s=a.solid?this.chunks:this.sparks,c=Math.max(1,Math.round(r*o)),l=a.speed??8,u=a.life??.4,d=a.size??.3;for(let r=0;r<c;r++){Wh.setHex(a.color2!==void 0&&r%2?a.color2:i);let o=Math.random()*Math.PI*2,c=Math.acos(Math.random()*2-1),f=l*(.35+Math.random()*.65);s.spawn(e,t,-n,Math.sin(c)*Math.cos(o)*f,Math.abs(Math.cos(c))*f*.8+(a.up??0),-Math.sin(c)*Math.sin(o)*f-(a.fwd??0),u*(.6+Math.random()*.4),d*(.6+Math.random()*.8),Wh.r,Wh.g,Wh.b,a.grav??14)}}spark(e,t,n,r,i,a,o,s=.3,c=.25,l=10,u=!1){this.throttle.scale(`trail`)<=0&&Math.random()<.7||(Wh.setHex(o),this.sparks.spawn(e,t,-n,r,i,-a,s,u?-c:c,Wh.r,Wh.g,Wh.b,l))}bolt(e,t,n,r,i,a,o=10475775,s=.22,c=.12,l=.7,u=`hit`){if(this.throttle.cue(u,c)<=0)return;let d={pts:[],fork:[],life:c,max:c,color:o,width:s,jag:l,a:new B(e,t,-n),b:new B(r,i,-a),reT:0};this.jagBolt(d),this.bolts.push(d),this.bolts.length>18&&this.bolts.shift()}jagBolt(e){let t=e.a.distanceTo(e.b),n=Math.max(4,Math.min(13,Math.round(t/.9))),r=e.jag*.6,i=0,a=0,o=0;for(let e=1;e<=n;e++)i+=(Math.random()-.5)*2*r,a+=(Math.random()-.5)*2*r,o+=(Math.random()-.5)*r,Lh[e*3]=i,Lh[e*3+1]=a,Lh[e*3+2]=o;e.pts.length=0;for(let t=0;t<=n;t++){let r=t/n;e.pts.push(e.a.x+(e.b.x-e.a.x)*r+(t?Lh[t*3]-i*r:0),e.a.y+(e.b.y-e.a.y)*r+(t?Lh[t*3+1]-a*r:0),e.a.z+(e.b.z-e.a.z)*r+(t?Lh[t*3+2]-o*r:0))}if(e.fork.length=0,t>5&&Math.random()<.75){let r=Math.round(n*(.3+Math.random()*.4))*3,i=e.pts[r],a=e.pts[r+1],o=e.pts[r+2],s=Math.min(1.5,t*.09),c=Math.random()*Math.PI*2,l=Math.cos(c)*e.jag,u=Math.sin(c)*e.jag,d=(e.b.x-e.a.x)/t*s,f=(e.b.y-e.a.y)/t*s,p=(e.b.z-e.a.z)/t*s;e.fork.push(i,a,o);for(let t=0;t<3;t++)i+=d+l*(.5+Math.random()*.7),a+=f+u*(.5+Math.random()*.7),o+=p,e.fork.push(i,a,o)}}strip(e,t,n,r,i,a,o,s=!0){let c=Math.min(Ih,e.length/3);if(!(c<2)){for(let n=0;n<c;n++){let r=Math.max(0,n-1)*3,i=Math.min(c-1,n+1)*3,a=n*3;Vh.set(e[i]-e[r],e[i+1]-e[r+1],e[i+2]-e[r+2]),Hh.set(this.camPos.x-e[a],this.camPos.y-e[a+1],this.camPos.z-e[a+2]),Uh.crossVectors(Vh,Hh);let o=Uh.length(),l=n/(c-1),u=s?Math.min(l,1-l):1-l,d=o<1e-6?0:t*.5/o*Math.min(1,Math.max(.03,(Hh.length()-2)/8))*Math.min(1,.22+3.2*u);n>0&&Uh.x*Rh[a-3]+Uh.y*Rh[a-2]+Uh.z*Rh[a-1]<0&&(d=-d),Rh[a]=Uh.x*d,Rh[a+1]=Uh.y*d,Rh[a+2]=Uh.z*d}for(let t=0;t<c-1;t++)o?(this.stripQuad(e,t*3,0,1,n,r,i,a,0),this.stripQuad(e,t*3,0,-1,n,r,i,a,0)):this.stripQuad(e,t*3,-1,1,n,r,i,a,a)}}stripQuad(e,t,n,r,i,a,o,s,c){if(this.rQuads>=Fh)return;let l=t+3,u=this.rQuads*12,d=this.rQuads*16,f=this.rPos,p=this.rCol,m=Rh;f[u]=e[t]+m[t]*n,f[u+1]=e[t+1]+m[t+1]*n,f[u+2]=e[t+2]+m[t+2]*n,f[u+3]=e[t]+m[t]*r,f[u+4]=e[t+1]+m[t+1]*r,f[u+5]=e[t+2]+m[t+2]*r,f[u+6]=e[l]+m[l]*r,f[u+7]=e[l+1]+m[l+1]*r,f[u+8]=e[l+2]+m[l+2]*r,f[u+9]=e[l]+m[l]*n,f[u+10]=e[l+1]+m[l+1]*n,f[u+11]=e[l+2]+m[l+2]*n;for(let e=0;e<4;e++)p[d+e*4]=i,p[d+e*4+1]=a,p[d+e*4+2]=o,p[d+e*4+3]=e===0||e===3?s:c;this.rQuads++}pushQuad(e,t,n,r,i,a){if(this.rQuads>=Fh)return;Vh.subVectors(t,e),Hh.subVectors(this.camPos,e),Uh.crossVectors(Vh,Hh);let o=Uh.length();if(o<1e-6)return;Uh.multiplyScalar(n*.5/o);let s=Math.min(1,Math.max(.03,(Hh.length()-2)/8)),c=Math.min(1,Math.max(.03,(this.camPos.distanceTo(t)-2)/8)),l=this.rQuads*12,u=this.rPos,d=this.rCol;u[l]=e.x-Uh.x*s,u[l+1]=e.y-Uh.y*s,u[l+2]=e.z-Uh.z*s,u[l+3]=e.x+Uh.x*s,u[l+4]=e.y+Uh.y*s,u[l+5]=e.z+Uh.z*s,u[l+6]=t.x+Uh.x*c,u[l+7]=t.y+Uh.y*c,u[l+8]=t.z+Uh.z*c,u[l+9]=t.x-Uh.x*c,u[l+10]=t.y-Uh.y*c,u[l+11]=t.z-Uh.z*c;let f=this.rQuads*16;for(let e=0;e<4;e++)d[f+e*4]=r,d[f+e*4+1]=i,d[f+e*4+2]=a,d[f+e*4+3]=1;this.rQuads++}streak(e,t,n,r,i,a,o,s,c=!0){zh.set(e,t,-n),Bh.set(r,i,-a),Wh.setHex(o),this.pushQuad(zh,Bh,s,Wh.r,Wh.g,Wh.b),c&&this.pushQuad(zh,Bh,s*.4,1,1,1)}ring(e,t,n,r,i,a=.35,o=`hit`,s=!1,c=.3,l=1){if(this.throttle.cue(o,a)<=0)return;let u=this.rings[0];for(let e of this.rings){if(e.life<=0){u=e;break}e.life<u.life&&(u=e)}u.life=a,u.max=a,u.r0=c,u.r1=r,u.a=l,u.mesh.position.set(e,t,-n),u.mesh.rotation.set(s?0:-Math.PI/2,0,0),u.mat.color.setHex(i),u.mat.opacity=1,u.mesh.visible=!0}flash(e,t,n,r,i,a=.1){let o=this.flashes[0];for(let e of this.flashes){if(e.life<=0){o=e;break}e.life<o.life&&(o=e)}o.life=a,o.max=a,o.size=r,o.spr.position.set(e,t,-n),o.spr.scale.setScalar(r),o.mat.color.setHex(i),o.mat.opacity=1,o.spr.visible=!0}popCap=.3;prewarm(e){for(let t of sp)e.initTexture(lp(t,this.popStyle))}popup(e,t,n,r,i=1,a=`popup`){if(this.throttle.cue(a,.25)<=0)return;let o=this.pops[0];for(let e of this.pops){if(e.life<=0){o=e;break}e.life<o.life&&(o=e)}this.popFlip=-this.popFlip,o.life=.25,o.vy=3.2,o.scale=i,o.mat.map=lp(e,this.popStyle),o.mat.opacity=1,o.mat.needsUpdate=!0,o.spr.position.set(t+this.popFlip*(.9+Math.random()*.4),n+.6+Math.random()*.5,-r),o.spr.visible=!0}shadow(e,t,n,r){if(this.shadowUsed>=this.shadows.length||t===-1/0)return;let i=this.shadows[this.shadowUsed++];i.visible=!0,i.position.set(e,t+.04,-n),i.scale.set(r*2,1,r*2)}begin(e,t,n){this.camPos.copy(e.position),this.rQuads=0;for(let e=0;e<this.shadowUsed;e++)this.shadows[e].visible=!1;this.shadowUsed=0;let r=t/(2*Math.tan(n*Math.PI/360)),i=e.aspect||1;this.popCap=.68*Math.tan(n*Math.PI/360)*Math.min(1,i),this.sparks.mat.uniforms.uScale.value=r,this.chunks.mat.uniforms.uScale.value=r}update(e){this.throttle.update(e),this.sparks.update(e),this.chunks.update(e);for(let t=this.bolts.length-1;t>=0;t--){let n=this.bolts[t];if(n.life-=e,n.reT-=e,n.life<=0){this.bolts.splice(t,1);continue}n.reT<=0&&(this.jagBolt(n),n.reT=.04),Wh.setHex(n.color);let r=n.life/n.max,i=n.width*(.5+.5*r),a=.45+.55*r;this.strip(n.pts,i*1.6+.55,Wh.r,Wh.g,Wh.b,.5*a,!0),n.fork.length&&this.strip(n.fork,i+.3,Wh.r,Wh.g,Wh.b,.4*a,!0,!1),this.strip(n.pts,i*1.15,Wh.r,Wh.g,Wh.b,.95,!1),n.fork.length&&this.strip(n.fork,i*.7,Wh.r,Wh.g,Wh.b,.9,!1,!1),this.strip(n.pts,i*.5,1,1,1,1,!1),n.fork.length&&this.strip(n.fork,i*.28,1,1,1,1,!1,!1)}let t=this.ribbon.geometry;t.setDrawRange(0,this.rQuads*6),t.attributes.position.needsUpdate=!0,t.attributes.color.needsUpdate=!0;for(let t of this.rings){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.mesh.visible=!1;continue}let n=1-t.life/t.max,r=1-(1-n)*(1-n);t.mesh.scale.setScalar(t.r0+(t.r1-t.r0)*r),t.mat.opacity=Math.min(.8,(1-n)*1.3)*(t.r1>5?.45:1)*t.a}for(let t of this.flashes){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.spr.visible=!1;continue}let n=t.life/t.max;t.mat.opacity=n,t.spr.scale.setScalar(t.size*(.6+.4*n))}for(let t of this.pops){if(t.life<=0)continue;if(t.life-=e,t.life<=0){t.spr.visible=!1;continue}let n=1-t.life/.25,r=n<.25?.55+n/.25*.65:1.2-(n-.25)*.25,i=Math.min(3.4*r*t.scale,Math.max(.6,this.camPos.distanceTo(t.spr.position))*this.popCap*(.8+.2*r));t.spr.scale.set(i,i*.5,1),t.spr.position.y+=t.vy*e,t.mat.opacity=n>.75?(1-n)*4:1}}clear(){this.sparks.clear(),this.chunks.clear(),this.bolts.length=0,this.throttle.reset();for(let e of this.rings)e.life=0,e.mesh.visible=!1;for(let e of this.flashes)e.life=0,e.spr.visible=!1;for(let e of this.pops)e.life=0,e.spr.visible=!1}},Kh=26,qh=190,Jh=12,Yh=class{el;move=od();skillPressed=!1;pausePressed=!1;playerX=0;halfWidth=4.5;enabled=!1;lastTouch=!1;keys=new Set;pid=-1;ax=0;ay=0;at=0;baseX=0;sx=0;ay0=0;moved=0;swiped=!1;touchTarget=null;touchHeld=!1;jumpQ=!1;slideQ=!1;dashQ=!1;constructor(e){this.el=e,e.addEventListener(`pointerdown`,this.onDown,{passive:!1}),e.addEventListener(`pointermove`,this.onMove,{passive:!1}),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onUp),e.addEventListener(`contextmenu`,e=>e.preventDefault()),window.addEventListener(`keydown`,this.onKey),window.addEventListener(`keyup`,this.onKeyUp),window.addEventListener(`blur`,()=>{this.keys.clear(),this.release()})}onDown=e=>{if(this.enabled){if(e.pointerType===`mouse`)e.button===0&&(this.skillPressed=!0);else if(e.preventDefault(),this.pid===-1){this.lastTouch=!0,this.pid=e.pointerId,this.ax=e.clientX,this.ay=e.clientY,this.sx=e.clientX,this.ay0=e.clientY,this.at=performance.now(),this.baseX=this.playerX,this.moved=0,this.swiped=!1,this.touchTarget=this.playerX,this.touchHeld=!0;try{this.el.setPointerCapture(e.pointerId)}catch{}}}};onMove=e=>{if(e.pointerId!==this.pid)return;e.preventDefault();let t=Math.max(240,this.el.clientWidth),n=e.clientX-this.ax,r=e.clientY-this.ay,i=e.clientX-this.sx;this.moved=Math.max(this.moved,Math.hypot(n,e.clientY-this.ay0)),this.touchTarget=rd(this.baseX+n/(t*.62)*this.halfWidth*2,-this.halfWidth,this.halfWidth),r<-26&&Math.abs(r)>Math.abs(i)*.8?(this.jumpQ=!0,this.swiped=!0,this.ay=e.clientY,this.sx=e.clientX):r>Kh&&Math.abs(r)>Math.abs(i)*.8?(this.slideQ=!0,this.swiped=!0,this.ay=e.clientY,this.sx=e.clientX):(Math.abs(i)>Kh*1.5||Math.abs(r)>52)&&(this.ay=e.clientY,this.sx=e.clientX)};onUp=e=>{e.pointerId===this.pid&&(!this.swiped&&this.moved<Jh&&performance.now()-this.at<qh&&(this.jumpQ=!0),this.release())};release(){this.pid=-1,this.touchTarget=null,this.touchHeld=!1}onKey=e=>{if(e.repeat)return;let t=e.code;t===`Escape`||t===`KeyP`?this.pausePressed=!0:this.enabled&&(this.keys.add(t),this.lastTouch=!1,t===`Space`||t===`KeyW`||t===`ArrowUp`?(this.jumpQ=!0,e.preventDefault()):t===`KeyS`||t===`ArrowDown`?(this.slideQ=!0,e.preventDefault()):t===`KeyE`||t===`Enter`||t===`KeyF`?this.skillPressed=!0:t===`KeyQ`?this.dashQ=!0:t.startsWith(`Arrow`)&&e.preventDefault())};onKeyUp=e=>{this.keys.delete(e.code)};press(e){e===`jump`?this.jumpQ=!0:e===`slide`?this.slideQ=!0:e===`dash`?this.dashQ=!0:this.skillPressed=!0}poll(){let e=this.move,t=this.keys,n=t.has(`KeyA`)||t.has(`ArrowLeft`);return e.steer=(t.has(`KeyD`)||t.has(`ArrowRight`)?1:0)-!!n,e.targetX=e.steer===0?this.touchTarget:null,e.jumpHeld=this.touchHeld||t.has(`Space`)||t.has(`KeyW`)||t.has(`ArrowUp`),e.boost=t.has(`ShiftLeft`)||t.has(`ShiftRight`),e.jumpPressed=this.jumpQ,e.slidePressed=this.slideQ,e.dashPressed=this.dashQ,this.jumpQ=!1,this.slideQ=!1,this.dashQ=!1,e}takeSkill(){let e=this.skillPressed;return this.skillPressed=!1,e}takePause(){let e=this.pausePressed;return this.pausePressed=!1,e}reset(){this.keys.clear(),this.release(),this.jumpQ=this.slideQ=this.dashQ=!1,this.skillPressed=!1}};function Xh(e,t){return{solid:e.build(),glow:t.vertexCount?t.build():null}}function Zh(){let e=new Z,t=new Z,n=9066032,r=12880456,i=2760744,a=15784352,o=15906354;e.sphere(0,0,-.05,.6,n,12,8,.74),e.sphere(0,-.04,.6,.36,i,10,6,.85),e.wedge(0,.36,-.1,.84,.22,1,.5,.6,r,X(r,1.12)),e.box(0,.45,-.12,.12,.14,.9,o);for(let s of[-1,1]){e.m=new H().makeRotationFromEuler(new cn(.18,s*-.25,s*.62)).setPosition(s*.38,.34,-.12),e.wedge(s*.62,0,0,1.2,.13,.8,.8,.55,n,r),e.box(s*.62,.08,.12,1,.05,.1,o),e.m=new H().makeRotationFromEuler(new cn(.05,s*-.5,s*.2)).setPosition(s*.4,.14,-.2),e.box(s*.95,0,0,1.9,.035,.58,a,X(a,1.06)),e.box(s*.95,.03,.2,1.8,.03,.06,X(a,.72)),e.box(s*1,.03,-.05,1.5,.03,.04,X(a,.72)),e.m=null;for(let t of[.34,.02,-.3])e.m=new H().makeRotationZ(s*-.5).setPosition(s*.44,-.3,t),e.box(0,-.16,0,.07,.42,.07,i),e.m=null,e.box(s*.62,-.68,t+.06,.07,.34,.07,i);e.wedge(s*.2,-.26,.9,.14,.16,.42,.4,.5,14275264),e.box(s*.22,.34,.74,.04,.4,.04,i),t.box(s*.22,.56,.74,.09,.09,.09,16730942)}return t.sphere(0,0,.86,.19,16726832,8,6),t.cyl(0,-.05,-.66,.16,.16,.06,5236991,8,`z`),Xh(e,t)}function Qh(){let e=new Z,t=new Z,n=4867670,r=14256683,i=2236202;e.cyl(0,.16,0,.75,.6,.32,i,10);for(let t of[0,2.1,4.2])e.rbox(Math.sin(t)*.62,.2,Math.cos(t)*.62,.3,.4,.3,.08,n,void 0,1);e.cyl(0,.62,0,.26,.2,.6,n,8),e.rbox(0,1.2,0,1.04,.7,1.04,.17,r,X(r,1.12)),e.rbox(0,1.34,.45,.7,.26,.16,.05,i,void 0,1),e.box(0,.98,.525,.72,.05,.02,15784352);for(let t of[-.42,.42])e.sphere(t,1.02,.5,.045,13074988,6,4);e.rbox(0,1.61,-.1,.64,.18,.64,.06,n,void 0,1),e.cyl(.18,1.86,-.2,.025,.025,.36,i,5);for(let r of[-1,1])e.rbox(r*.6,1.2,.05,.22,.82,.84,.08,n,void 0,1),e.cyl(r*.26,1.16,.84,.11,.11,.8,i,8,`z`),t.cyl(r*.26,1.16,1.25,.07,.07,.04,16761405,6,`z`);return t.box(0,1.34,.535,.5,.12,.02,16726832),t.sphere(.18,2.06,-.2,.05,16730942,6,4),Xh(e,t)}function $h(){let e=new Z,t=new Z,n=2828339;e.cyl(0,0,0,.72,.72,.62,n,14,`x`,X(n,1.5)),e.cyl(0,0,0,.46,.46,.76,11881006,10,`x`);for(let t=0;t<8;t++){let n=t/8*Math.PI*2;e.box(0,Math.cos(n)*.78,Math.sin(n)*.78,.5,.2,.2,14275264)}for(let e of[-1,1])t.cyl(e*.4,0,0,.2,.2,.06,16752957,8,`x`);return Xh(e,t)}function eg(){let e=new Z,t=new Z,n=5657188,r=2367788,i=15906354;for(let t of[-1,1])e.rbox(t*.45,.42,0,.46,.84,.58,.13,r,void 0,1),e.rbox(t*.45,.1,.1,.58,.2,.86,.07,n,void 0,1),e.rbox(t*.45,.5,.27,.34,.26,.1,.05,n,void 0,1),e.sphere(t*1,1.95,-.05,.4,n,8,6),e.rbox(t*1.05,1.3,0,.38,.9,.44,.13,r,void 0,1),e.box(t*1,1.96,.3,.3,.07,.04,i);e.wedge(0,1.45,0,1.3,1.3,.9,1.3,1.1,n,X(n,1.15)),e.sphere(0,2.42,0,.36,9078424,10,7),t.box(0,2.44,.31,.44,.1,.1,16726832),e.rbox(0,1.25,.72,2.1,2.1,.16,.07,r,void 0,1);for(let t of[-.94,.94])for(let n of[.42,2.08])e.sphere(t,n,.8,.06,13074988,6,4);for(let t=0;t<5;t++)e.box(-.8+t*.4,1.25,.81,.2,1.9,.04,t%2?r:i);return e.rbox(0,2.34,.76,2.2,.16,.28,.06,n,void 0,1),e.rbox(0,.2,.76,2.2,.16,.28,.06,n,void 0,1),t.cyl(0,1.25,.86,.26,.26,.05,16734780,10,`z`),Xh(e,t)}function tg(){let e=new Z,t=new Z;e.cyl(0,.6,0,.5,.5,1.2,14169130,12,`y`,9051164);for(let t of[.25,.95])e.cyl(0,t,0,.54,.54,.1,2762288,12);return e.cyl(0,.6,0,.515,.515,.34,15909424,12),t.cyl(0,1.22,0,.2,.2,.04,16769658,8),Xh(e,t)}function ng(){let e=new Z,t=new Z;t.cyl(0,0,0,.17,.17,.4,6287615,8);for(let t of[-.26,.26])e.cyl(0,t,0,.21,.21,.12,2306108,8);return e.box(0,.36,0,.1,.08,.1,9278368),t.box(0,0,.18,.1,.22,.02,16777215),Xh(e,t)}function rg(){let e=new Z,t=new Z;return e.box(0,0,0,.56,.56,.3,15327174),t.box(0,0,.16,.4,.14,.04,4063114),t.box(0,0,.16,.14,.4,.04,4063114),t.box(0,0,-.16,.4,.14,.04,4063114),t.box(0,0,-.16,.14,.4,.04,4063114),Xh(e,t)}function ig(){return new Z().sphere(0,0,0,1,16777215,8,6).build()}function ag(){let e=new Z;e.cyl(0,0,0,.14,.14,.7,15327174,8,`z`),e.cyl(0,0,-.5,.02,.14,.3,15886364,8,`z`);for(let t of[0,1,2,3])e.box(Math.cos(t*1.5708)*.18,Math.sin(t*1.5708)*.18,.3,t%2?.04:.2,t%2?.2:.04,.22,15886364);return e.build()}function og(){let e=new Z;e.cyl(0,0,0,.5,.5,.07,5236991,12,`y`,14220287),e.cyl(0,0,0,.2,.2,.12,2306108,8);for(let t=0;t<6;t++){let n=t/6*Math.PI*2;e.box(Math.cos(n)*.52,0,Math.sin(n)*.52,.16,.05,.16,16777215)}return e.build()}function sg(){let e=mf({surf:!0}),t=mf({glow:1}),n=[],r=new En,i=(e,t,r)=>{let i=t.build();n.push(i);let a=new vi(i,r);return a.frustumCulled=!1,e.add(a),a},a=4011588,o=8010292,s=1907234,c=13210926,l=new Z,u=new Z;l.box(0,1,-.5,6.2,1.1,9.4,a,X(a,1.2)),l.wedge(0,.75,4.9,5.6,1.5,2,.35,.2,s,a);for(let e=0;e<7;e++)l.m=new H().makeRotationX(.42).setPosition(-2.4+e*.8,.85,5.35),l.rbox(0,0,0,.3,1.7,.5,.08,4866896,6972018,1);l.m=null,l.rbox(0,1.55,4.75,5.9,.36,.7,.1,c,14856266,1),u.box(0,.75,4.95,5,.9,.08,16738842),l.cyl(0,3.9,.2,2.5,2.5,7.6,o,28,`z`,s);for(let e of[-2.6,-.4,1.8,3.7]){l.cyl(0,3.9,e,2.62,2.62,.34,s,28,`z`);for(let t=0;t<=12;t++){let n=t/12*Math.PI;l.box(Math.cos(n)*2.66,3.9+Math.sin(n)*2.66,e,.15,.15,.15,c)}}l.cyl(0,3.9,4.05,2.72,2.4,.5,10111548,28,`z`,s);for(let e of[-1,1]){l.m=new H().makeRotationZ(-e*.72).setPosition(e*1.74,5.97,.7),l.rbox(0,0,0,2,.24,1.75,.08,10497064,12860464,1),l.rbox(0,0,-2.2,2,.24,1.75,.08,9381926,11678768,1);for(let[e,t]of[[-.8,.7],[.8,.7],[-.8,-.7],[.8,-.7],[-.8,-1.5],[.8,-1.5],[-.8,-2.9],[.8,-2.9]])l.box(e,.14,t,.14,.08,.14,c);l.m=null}l.cyl(0,3.2,4.2,1.98,1.98,.4,c,28,`z`,9069600);for(let e=0;e<12;e++){let t=e/12*Math.PI*2;l.box(Math.cos(t)*1.83,3.2+Math.sin(t)*1.83,4.41,.17,.17,.1,s)}for(let e of[-1,1]){let t=new H().makeRotationZ(e*.4).setPosition(e*1.22,5.5,4.34);l.m=t,l.box(0,0,-.06,1.2,.56,.2,s),l.box(0,.33,.06,1.3,.2,.34,a),u.m=t,u.box(0,-.04,.07,1.02,.36,.08,16753198),u.box(-e*.16,-.04,.1,.26,.3,.06,16773312),l.m=null,u.m=null,l.cyl(e*3,2.9,1,.55,.55,6,a,10,`z`,s),l.box(e*3,4.1,2.6,.5,1.6,.5,a),u.box(e*3.02,2.9,4.02,.5,.5,.06,16756794),l.box(e*2.2,6.3,-3.6,.3,1.6,.3,s),l.box(e*2.2,6.6,-3.42,1.3,1.5,.06,14169130),u.cyl(e*2.2,6.6,-3.36,.34,.34,.04,16767392,8,`z`)}l.cyl(0,6.3,3.9,.4,.4,.6,c,10,`z`,s),u.cyl(0,6.3,4.22,.27,.27,.06,16773312,8,`z`),l.cyl(0,6.95,2.4,.85,.98,1.3,s,12,`y`,a),l.cyl(0,7.48,2.4,.98,.98,.16,c,12),l.cyl(0,7.9,2.4,1.28,.86,.62,a,12,`y`,s),u.cyl(0,8.22,2.4,1.08,1.08,.08,16747050,12),u.cyl(0,7.48,2.4,1,1,.06,16742938,12),l.cyl(-1.3,6.7,.2,.34,.44,1,c,8),l.cyl(1.3,6.7,-.8,.34,.44,1,c,8),l.rbox(0,5.2,-4,5.4,4.4,2.8,.18,9054764,11023930,1),l.rbox(0,7.55,-4,6.1,.42,3.5,.14,s,a,1),l.box(0,4.2,-4,5.5,.22,2.9,c);for(let e of[-1,1])l.box(e*2.72,5.9,-4,.06,1.4,1.9,s),u.box(e*2.76,5.9,-4,.04,1.1,1.6,16763210);for(let e of[-1.4,1.4])u.box(e,5.9,-2.58,1.4,1.1,.06,16763210);let d=Rl(`boss`),f=null;if(d){f=mf({model:d.tex,doubleSide:!0,lift:.35});let e=new vi(d.geo,f);e.frustumCulled=!1,r.add(e)}else i(r,l,e),i(r,u,t);let p=new Z;p.cyl(0,3.2,4.42,1.62,1.62,.1,16742938,28,`z`);let m=i(r,p,t.clone());m.visible=!d;let h=new Z;for(let e=0;e<6;e++){let t=-1.25+e*.5;h.box(t,3.2,4.52,.18,2*Math.sqrt(1.62*1.62-t*t)-.06,.14,s)}i(r,h,e).visible=!d;let g=new Z;g.sphere(0,0,0,1,12580607,12,8);let _=i(r,g,mf({glow:1}));_.position.set(0,3.3,4.6),_.scale.setScalar(.001);let v=[];for(let t of[-1,1])for(let n of[-3.6,-.6,2.4]){let l=new Z;l.cyl(0,0,0,1.05,1.05,.5,s,22,`x`,a),l.cyl(0,0,0,.86,.86,.54,9381926,22,`x`,9381926),l.cyl(0,0,0,.36,.36,.62,c,8,`x`);for(let e=0;e<4;e++){let t=e/4*Math.PI;l.box(0,Math.cos(t)*.1,Math.sin(t)*.1,.56,e%2?.16:1.7,e%2?1.7:.16,o)}let u=i(r,l,e);u.position.set(t*3,1.05,n),u.visible=!d,v.push(u)}let y=new En;y.position.set(-3.3,5.2,1.6),r.add(y);let b=new Z,x=new Z,S=13074988,C=14852156;b.sphere(0,0,0,.8,a,14,10),b.rbox(.2,.2,1.6,.9,.9,3,.2,S,C,1);for(let e of[.7,2.5])b.rbox(.2,.2,e,1.02,1.02,.3,.08,s,void 0,1);b.sphere(.2,.2,3.25,.72,a,14,10),b.rbox(.2,-.9,3.4,.76,1.9,.76,.18,S,C,1),b.rbox(.2,-2.05,3.4,1.9,.8,1.7,.2,a,5919330,1);for(let[e,t]of[[-.62,.45],[.62,.45],[0,-.55]])b.rbox(.2+e,-3.05,3.4+t,.56,1.5,.6,.12,4866896,6972018,1),b.wedge(.2+e,-4,3.4+t,.5,.5,.54,.25,.25,14275264),x.box(.2+e,-3,3.4+t+(t>0?.31:-.31),.2,1,.04,16742954);x.box(.2,-2.05,4.27,1.3,.3,.04,16734762);let w=Rl(`claw`),T=null;if(w){T=mf({model:w.tex,doubleSide:!0,lift:.35});let e=new vi(w.geo,T);e.frustumCulled=!1,e.scale.x=-1,e.position.set(-.2,-w.min.y-.5,-w.min.z-.65),y.add(e)}else i(y,b,e),i(y,x,t);return{root:r,claw:y,core:_,grate:m,bodyMat:f,clawMat:T,solidMat:e,glowMat:t,wheels:v,dispose(){for(let e of n)e.dispose();e.dispose(),t.dispose(),f?.dispose(),T?.dispose(),m.material.dispose(),_.material.dispose(),r.removeFromParent()}}}var cg={drone:{hp:34,r:.85,cy:0,top:.55,value:100,cells:2},turret:{hp:55,r:.85,cy:1.1,top:1.7,value:150,cells:3},roller:{hp:30,r:.8,cy:.72,top:1.45,value:120,cells:2},bulwark:{hp:150,r:1.25,cy:1.3,top:2.8,value:400,cells:6},barrel:{hp:8,r:.65,cy:.6,top:1.25,value:30,cells:1},boss:{hp:6500,r:2.8,cy:3.4,top:99,value:5e3,cells:0}},lg=[-3,0,3],ug=new H,dg=new kt,fg=new B,pg=new B,mg=new cn,hg=null;function gg(){if(hg)return hg;let e=document.createElement(`canvas`);e.width=64,e.height=64;let t=e.getContext(`2d`);return t.clearRect(0,0,64,64),t.fillStyle=`rgba(255,255,255,0.22)`,t.fillRect(0,0,64,64),t.strokeStyle=`#fff`,t.lineWidth=9,t.lineJoin=`miter`,t.beginPath(),t.moveTo(8,18),t.lineTo(32,42),t.lineTo(56,18),t.stroke(),t.fillStyle=`#fff`,t.fillRect(0,0,3,64),t.fillRect(61,0,3,64),hg=new aa(e),hg.wrapS=hg.wrapT=m,hg}var _g=class{fx;layout;world;o;ev;root=new En;enemies=[];pourRing=new Map;boss=null;bossPhase=0;bossIntro=0;bossArc=!1;bossDying=-1;skyFlash=0;kills=0;shots=[];eshots=[];picks=[];strikes=[];geos={};solidMat=mf();modelMats={};hurtMat=mf();glowMat=mf({glow:1});eshotMesh;cellSolid;cellGlow;hpMesh;hpGlow;rocketG=ag();discG=og();owned=[];bossModel=null;lanes=[];laneState={t:-1,tel:1,safe:1,fired:!1};atkT=3;atkIdx=0;slamT=-1;slamWaveT=-1;slamS=0;addT=6;bossShotT=2;hazards;hazHit=new Set;time=0;p;constructor(e,t,n,r,i){this.fx=e,this.layout=t,this.world=n,this.o=r,this.ev=i,this.hurtMat.uniforms.uHurt.value=.5;let a=(e,t,n)=>{let r=new Wi(e,t,n);return r.count=0,r.frustumCulled=!1,this.root.add(r),this.owned.push(e),r};this.eshotMesh=a(ig(),mf({glow:1,tint:16734762}),48);let o=ng(),s=rg();this.cellSolid=a(o.solid,this.solidMat,200),this.cellGlow=a(o.glow,this.glowMat,200),this.hpMesh=a(s.solid,this.solidMat,8),this.hpGlow=a(s.glow,this.glowMat,8);for(let e=0;e<72;e++)this.shots.push({on:!1,kind:0,x:0,y:0,s:0,px:0,py:0,ps:0,vx:0,vy:0,vs:0,life:0,dmg:0,crit:!1,color:0,pierce:0,target:null,ret:!1,hit:[],mesh:null,blast:0,w:.1});for(let e=0;e<48;e++)this.eshots.push({on:!1,x:0,y:0,s:0,vx:0,vy:0,vs:0,life:0,dmg:0,r:.4});for(let e=0;e<200;e++)this.picks.push({on:!1,kind:0,x:0,y:0,s:0,vy:0,pull:!1,ph:e*1.7});for(let e of t.spawns)this.addEnemy(e.kind,e.x,e.y,e.s);this.hazards=t.hazards.filter(e=>e.kind!==`barrel`);for(let e of t.hazards)e.kind===`barrel`&&this.addEnemy(`barrel`,e.x,e.y,e.s);for(let e of t.cells)this.dropPickup(0,e.x,e.y,e.s,!1);if(t.boss){this.bossModel=sg(),this.root.add(this.bossModel.root);let e=cg.boss,t=e.hp*r.bossHpMul;this.boss={kind:`boss`,x:0,y:0,s:60,bx:0,by:0,hp:t,maxHp:t,r:e.r,cy:e.cy,top:e.top,hs:-4.6,alive:!0,active:!0,t:0,fireT:0,telT:0,burst:0,engageT:0,burnT:0,burnDps:0,burnTick:0,cryoT:0,stunT:0,hurtT:0,shield:0,view:this.bossModel.root,solid:null,phase:0,value:e.value},this.enemies.push(this.boss),this.bossIntro=2.6,this.bossPhase=1;for(let e=0;e<3;e++){let e=gg().clone();e.needsUpdate=!0;let t=new oi({map:e,color:16726586,transparent:!0,opacity:0,depthWrite:!1,fog:!1,blending:2}),n=new ua(1,1);this.owned.push(n);let r=new vi(n,t);r.rotation.x=-Math.PI/2,r.layers.set(1),r.visible=!1,r.frustumCulled=!1,this.root.add(r),this.lanes.push({mesh:r,mat:t,tex:e})}}}geoFor(e){let t=this.geos[e],n=!t&&(e===`drone`||e===`turret`||e===`roller`||e===`bulwark`)?Rl(e):null;if(n){t={solid:n.geo,glow:null},this.geos[e]=t;let r=mf({model:n.tex,doubleSide:!0}),i=mf({model:n.tex,doubleSide:!0});i.uniforms.uHurt.value=.5,this.modelMats[e]={solid:r,hurt:i}}return t||(t=e===`drone`?Zh():e===`turret`?Qh():e===`roller`?$h():e===`bulwark`?eg():tg(),this.geos[e]=t,this.owned.push(t.solid),t.glow&&this.owned.push(t.glow)),t}addEnemy(e,t,n,r){let i=cg[e];if(e!==`drone`){let e=this.world.groundAt(t,r,n+1.5);e!==-1/0&&(n=e)}let a=e===`barrel`?i.hp:i.hp*this.o.hpMul,o=this.geoFor(e),s=new En,c=new vi(o.solid,this.modelMats[e]?.solid??this.solidMat);s.add(c),o.glow&&s.add(new vi(o.glow,this.glowMat)),s.position.set(t,n+(e===`roller`?i.cy:0),-r),s.visible=!1,e===`drone`&&s.scale.setScalar(1.2),this.root.add(s);let l={kind:e,x:t,y:n,s:r,bx:t,by:n,hp:a,maxHp:a,r:i.r,cy:i.cy,top:i.top,hs:0,alive:!0,active:!1,t:0,fireT:.8+Math.random()*.8,telT:0,burst:0,engageT:0,burnT:0,burnDps:0,burnTick:0,cryoT:0,stunT:0,hurtT:0,shield:e===`bulwark`?90*this.o.hpMul:0,view:s,solid:c,phase:Math.random()*6.28,value:i.value};return this.enemies.push(l),l}acquire(e){let t=this.p,n=null,r=1e9;for(let i of this.enemies){if(!i.alive||!i.active)continue;let a=i.s+i.hs-t.s;if(a<.8||a>e)continue;let o=Math.abs(i.x-t.x);if(o>3.4+a*.24+(i.kind===`boss`?4:0))continue;let s=a+o*2+(i.kind===`barrel`?14:0);s<r&&(r=s,n=i)}return n}damage(e,t,n,r){if(!e.alive)return!1;if(e.kind===`boss`){if(this.bossIntro>0||this.bossDying>=0)return!1;this.bossPhase===3&&(t*=1.5),r===`bonk`&&(t*=.5)}else e.shield>0&&r===`shot`&&(e.shield-=t,t*=.3,Math.random()<.4&&this.fx.burst(e.x,e.y+1.3,e.s-.9,3,16762992,{speed:7,life:.2,size:.2}),e.shield<=0&&(this.fx.popup(`POW!`,e.x,e.y+2.6,e.s,1.1),this.fx.burst(e.x,e.y+1.3,e.s-.8,12,15906354,{solid:!0,speed:9,life:.6,cat:`debris`})));return(r===`bonk`||r===`blast`)&&(e.shield=0),e.hp-=t,e.hurtT=.09,r!==`burn`&&(this.fx.burst(e.x,e.y+e.cy,e.s+e.hs-e.r*.6,n?6:3,n?16774048:16756810,{speed:9,life:.22,size:n?.34:.24}),Y.hit(n),n&&r===`shot`&&this.fx.popup(`CRIT!`,e.x,e.y+e.cy+.8,e.s+e.hs,.9),e.kind===`boss`&&r===`shot`&&(n||(this.bossArc=!this.bossArc))&&this.fx.bolt(this.p.x+(this.bossArc?.4:-.4),this.p.y+1.25,this.p.s+1.3,e.x+(Math.random()-.5)*2.4,e.y+e.cy+(Math.random()-.3)*1.6,e.s+e.hs-e.r*.6,n?16774048:10479871,.17,.18,.55)),e.hp<=0?(this.kill(e,r),!0):(e.kind===`boss`&&this.checkBossPhase(),!1)}kill(e,t){if(e.kind===`boss`){if(e.hp=0,this.bossDying<0){this.bossDying=0;for(let e of this.lanes)e.mesh.visible=!1;this.laneState.t=-1,this.strikes.length=0}return}e.alive=!1,e.active=!1,e.view&&(e.view.visible=!1),this.kills++;let n=e.x,r=e.y+e.cy,i=e.s,a=e.kind===`drone`?5999766:e.kind===`turret`?14256683:e.kind===`roller`?11881006:e.kind===`barrel`?14169130:5657188;this.fx.burst(n,r,i,10,a,{solid:!0,speed:10,life:.7,size:.42,cat:`debris`,color2:2762288}),this.fx.burst(n,r,i,12,16760906,{speed:13,life:.35,size:.4,cat:`kill`,color2:16738858}),this.fx.ring(n,r,i,e.r*2.1,16769696,.22,`kill`,!0),this.fx.flash(n,r,i,e.r*6,16765066,.09),e.kind===`barrel`||e.kind===`roller`?this.explode(n,r,i,e.kind===`barrel`?5.5:3.2,e.kind===`barrel`?70:30,!0,!1):t!==`bonk`&&this.fx.popup(t===`zap`?`ZAP!`:`POW!`,n,r+.6,i,e.kind===`bulwark`?1.3:1);let o=cg[e.kind].cells*this.o.cellMul,s=Math.floor(o)+ +(Math.random()<o%1);for(let e=0;e<s;e++)this.dropPickup(0,n+(Math.random()-.5)*1.6,r+.3,i+(Math.random()-.3)*2,!0);e.kind!==`barrel`&&Math.random()<this.o.healthChance&&this.dropPickup(1,n,r+.4,i+1,!0),this.ev.kill(e,t)}explode(e,t,n,r,i,a,o){this.fx.flash(e,t,n,r*3.4,16757850,.12),this.fx.burst(e,t,n,16,16747050,{speed:r*3.2,life:.45,size:.6,cat:`kill`,color2:16769658}),this.fx.burst(e,t,n,8,3813432,{speed:r*2,life:.8,size:.7,solid:!0,cat:`debris`}),this.fx.ring(e,t,n,r,16765562,.3,`kill`),this.fx.popup(`BOOM!`,e,t+1,n,1.2),Y.explosion(r>4.5);for(let a of this.enemies){if(!a.alive||!a.active)continue;let o=Math.hypot(a.x-e,a.y+a.cy-t,a.s+a.hs-n)-a.r*.5;o<r&&this.damage(a,i*(1-.6*rd(o/r,0,1)),!1,`blast`)}let s=this.p,c=Math.hypot(s.x-e,s.y+.9-t,s.s-n);if(a&&c<r*.75&&this.ev.hurt(14,`blast`),o&&c<5.5){let t=1-c/5.5,n=s.x-e;this.ev.blast(rd(n*4,-9,9)*t,7+9*t,t)}}chain(e,t,n,r,i,a,o=10479871){let s=e,c=t,l=n,u=0,d=[],f=r;for(let e=0;e<a;e++){if(!f){let e=196;for(let t of this.enemies){if(!t.alive||!t.active||d.includes(t)||t.kind===`barrel`)continue;let n=(t.x-s)**2+(t.s+t.hs-l)**2+(t.y+t.cy-c)**2;n<e&&t.s+t.hs>this.p.s-3&&(e=n,f=t)}if(!f)break}let t=f.x,n=f.y+f.cy,r=f.s+f.hs;this.fx.bolt(s,c,l,t,n,r,o,.15,.13,.6),this.damage(f,i*(e===0?1:.7),!1,`zap`),d.push(f),u++,s=t,c=n,l=r,f=null}return u&&Y.shot(`arc`),u}status(e,t,n,r,i){let a=0,o=this.p;for(let s of this.enemies)s.alive&&s.active&&(Math.hypot(s.x-o.x,s.s+s.hs-o.s)>e||(a++,t===`burn`?(s.burnT=n,s.burnDps=Math.max(s.burnDps,r)):t===`cryo`?s.cryoT=Math.max(s.cryoT,n*(s.kind===`boss`?.4:1)):s.stunT=Math.max(s.stunT,n*(s.kind===`boss`?.25:1)),i>0&&this.damage(s,i,!1,t===`burn`?`burn`:`zap`)));return a}nova(e,t,n){let r=this.p;this.fx.ring(r.x,r.y+.4,r.s,e,n,.32,`overload`);for(let n of this.enemies)n.alive&&n.active&&Math.hypot(n.x-r.x,n.s+n.hs-r.s)<e+n.r&&this.damage(n,t,!1,`blast`);for(let t of this.eshots)t.on&&Math.hypot(t.x-r.x,t.s-r.s)<e&&(t.on=!1,this.fx.burst(t.x,t.y,t.s,3,16747082,{speed:5,life:.2}))}magnetAll(e){for(let t of this.picks)t.on&&Math.abs(t.s-this.p.s)<e&&(t.pull=!0)}spawnShot(e,t,n,r,i,a,o,s,c,l,u,d=0,f=null,p=0){let m=null;for(let e of this.shots)if(!e.on){m=e;break}m&&(m.on=!0,m.kind=e,m.x=m.px=t,m.y=m.py=n,m.s=m.ps=r,m.vx=i,m.vy=a,m.vs=o,m.life=s,m.dmg=c,m.crit=l,m.color=u,m.pierce=d,m.target=f,m.ret=!1,m.hit.length=0,m.blast=p,m.w=e===0?l?.19:.15:.2,e!==0&&(m.mesh||(m.mesh=new vi(this.rocketG,this.solidMat),this.root.add(m.mesh)),m.mesh.geometry=e===2?this.discG:this.rocketG,m.mesh.material=e===2?this.glowMat:this.solidMat,m.mesh.scale.setScalar(e===3?.7:1),m.mesh.visible=!0))}freeShot(e){e.on=!1,e.mesh&&(e.mesh.visible=!1)}stepShots(e){let t=this.p;for(let n of this.shots){if(!n.on)continue;if(n.px=n.x,n.py=n.y,n.ps=n.s,n.kind===3||n.kind===1){let t=n.target&&n.target.alive?n.target:n.kind===3?n.target=this.acquire(40):null;if(t){let r=t.x-n.x,i=t.y+t.cy-n.y,a=t.s+t.hs-n.s,o=Math.hypot(r,i,a)||1,s=Math.hypot(n.vx,n.vy,n.vs),c=Math.min(1,e*(n.kind===3?9:3));n.vx+=(r/o*s-n.vx)*c,n.vy+=(i/o*s-n.vy)*c,n.vs+=(a/o*s-n.vs)*c}Math.random()<.8&&this.fx.spark(n.x,n.y,n.s,(Math.random()-.5)*2,1+Math.random(),-4,16752704,.3,.35,-2)}else if(n.kind===2&&(!n.ret&&n.life<.5*n.w&&(n.ret=!0,n.hit.length=0),n.ret)){let e=t.x-n.x,r=t.y+1.1-n.y,i=t.s+.5-n.s,a=Math.hypot(e,r,i)||1,o=52+t.speed;if(n.vx=e/a*o,n.vy=r/a*o,n.vs=i/a*o,a<1.6){this.freeShot(n);continue}}n.x+=n.vx*e,n.y+=n.vy*e,n.s+=n.vs*e,n.life-=e;let r=n.x-n.px,i=n.y-n.py,a=n.s-n.ps,o=r*r+i*i+a*a||1e-6,s=!1;for(let e of this.enemies){if(!e.alive||!e.active)continue;let t=e.x-n.px,c=e.y+e.cy-n.py,l=e.s+e.hs-n.ps,u=rd((t*r+c*i+l*a)/o,0,1),d=e.r+(n.kind===0?.25:.5);if(!((t-r*u)**2+(c-i*u)**2+(l-a*u)**2>d*d)){if(n.kind===2){if(n.hit.includes(e))continue;n.hit.push(e),this.damage(e,n.dmg,n.crit,`shot`)}else{if(n.kind===1||n.kind===3){this.explode(n.x,n.y,n.s,n.blast,n.dmg,!1,n.kind===1),s=!0;break}if(this.damage(e,n.dmg,n.crit,`shot`),n.pierce--<=0){s=!0;break}}}}if(!s&&(n.kind===1||n.kind===3)){let e=this.world.groundAt(n.x,n.s,n.y+2);(n.y<e+.1||n.life<=0)&&(this.explode(n.x,Math.max(n.y,e+.2),n.s,n.blast,n.dmg,!1,n.kind===1),s=!0)}(s||n.life<=0&&n.kind!==2||n.kind===2&&n.life<-3)&&this.freeShot(n)}}enemyShot(e,t,n,r,i,a,o,s,c=.42){let l=null;for(let e of this.eshots)if(!e.on){l=e;break}if(!l)return;let u=r-e,d=i-t,f=a-n,p=Math.hypot(u,d,f)||1;l.on=!0,l.x=e,l.y=t,l.s=n,l.vx=u/p*o,l.vy=d/p*o,l.vs=f/p*o,l.life=4,l.dmg=s,l.r=c}fireAt(e,t,n,r,i,a,o){let s=this.p,c=Math.max(1,r-s.s)/(i+s.speed);this.enemyShot(t,n,r,s.x,s.y+1,s.s+s.speed*c,i,a*this.o.dmgMul,o),this.fx.flash(t,n,r,1.6,16738874,.08)}dropPickup(e,t,n,r,i){for(let a of this.picks)if(!a.on){a.on=!0,a.kind=e,a.x=rd(t,-4.3,4.3),a.y=n,a.s=r,a.vy=i?5+Math.random()*3:0,a.pull=!1;return}}update(e,t){this.p=t,this.time+=e,this.skyFlash=Math.max(0,this.skyFlash-e*3),this.stepEnemies(e),this.stepShots(e),this.stepEnemyShots(e),this.stepPickups(e),this.stepHazards(e),this.boss&&this.stepBoss(e)}stepEnemies(e){let t=this.p;for(let n of this.enemies){if(!n.alive||n.kind===`boss`)continue;let r=n.s-t.s;if(!n.active){if(r<120&&r>-4)n.active=!0,n.view&&(n.view.visible=!0);else continue}if(r<-7){n.alive=!1,n.active=!1,n.view&&(n.view.visible=!1);continue}if(n.t+=e,n.hurtT>0&&(n.hurtT-=e),n.solid){let e=this.modelMats[n.kind];n.solid.material=n.hurtT>.04?e?.hurt??this.hurtMat:e?.solid??this.solidMat}if(n.burnT>0&&(n.burnT-=e,n.burnTick-=e,n.burnTick<=0&&(n.burnTick=.25,this.fx.spark(n.x,n.y+n.cy+.3,n.s,(Math.random()-.5)*2,3,0,16742938,.4,.4,-4),this.damage(n,n.burnDps*.25,!1,`burn`))))continue;let i=1;n.cryoT>0&&(n.cryoT-=e,i=.3,Math.random()<.1&&this.fx.spark(n.x,n.y+n.cy,n.s,0,1,0,10479871,.4,.3,0)),n.stunT>0&&(n.stunT-=e,i=0,Math.random()<.15&&this.fx.spark(n.x,n.y+n.cy+.5,n.s,(Math.random()-.5)*4,2,0,16773242,.25,.25,0));let a=e*i,o=n.view;switch(n.kind){case`drone`:r<26&&n.engageT<4.2&&(n.engageT+=a,n.s+=t.speed*.8*a),n.x=rd(n.bx+Math.sin(n.t*1.7+n.phase)*1.3,-4.2,4.2),n.y=n.by+Math.sin(n.t*2.6+n.phase)*.25,o.position.set(n.x,n.y,-n.s),o.rotation.set(Math.sin(n.t*3)*.08,0,Math.cos(n.t*1.7+n.phase)*-.25),r>6&&r<38&&this.aiShoot(n,a,1.9,.45,1,15,9,n.x,n.y-.1,n.s-.8);break;case`turret`:o.rotation.y=Math.atan2(t.x-n.x,Math.max(2,r))*.9,r>5&&r<36&&this.aiShoot(n,a,2.6,.6,3,19,7,n.x,n.y+1.16,n.s-1.2);break;case`roller`:if(r<42){n.s-=7.5*a,n.x+=rd(t.x-n.x,-1,1)*2.6*a;let e=this.world.groundAt(n.x,n.s,n.y+1.2);if(e===-1/0){if(n.y-=18*a,n.y<Math.max(-12,this.world.killY+.6)){n.alive=!1,o.visible=!1;continue}}else n.y=e;o.rotation.x+=(7.5+t.speed*.2)*a*1.4,Math.random()<.3&&this.fx.spark(n.x,n.y+.1,n.s,(Math.random()-.5)*3,2,3,16752957,.25,.2)}o.position.set(n.x,n.y+n.cy,-n.s);break;case`bulwark`:o.rotation.y=Math.atan2(t.x-n.x,Math.max(3,r))*.5,n.telT>0?(n.telT-=a,o.position.y=n.y+Math.sin((1-n.telT/.55)*Math.PI)*.5,n.telT<=0&&(this.fx.ring(n.x,n.y+.15,n.s,5,16742970,.3,`telegraph`),this.fx.burst(n.x,n.y+.2,n.s,10,16756810,{speed:9,life:.4,cat:`telegraph`}),Y.explosion(!1),Math.hypot(t.x-n.x,t.s-n.s)<5&&t.y-t.ground<.8&&this.ev.hurt(22*this.o.dmgMul,`slam`),n.fireT=2.2)):(o.position.y=n.y,n.fireT-=a,r<9&&r>-1&&n.fireT<=0&&(n.telT=.55,this.fx.ring(n.x,n.y+.12,n.s,1.2,this.o.danger,.55,`telegraph`,!1,5),Y.telegraph()))}let s=Math.hypot(n.x-t.x,n.s-t.s),c=this.o.bigHeads?1.6:1;if(s<(n.r+.55)*c&&(t.vy<-.5||t.slamming)&&!t.grounded&&t.y>n.y+n.top-.75&&t.y<n.y+n.top+.7)this.ev.bonk(n);else if(s<n.r+.42){let e=n.kind===`drone`?n.y-.6:n.y;t.y<n.y+n.top-.2&&t.y+(t.sliding?.9:1.8)>e&&(n.kind===`roller`||n.kind===`barrel`?(this.damage(n,999,!1,`blast`),t.invuln||this.ev.hurt(16*this.o.dmgMul,`contact`)):t.invuln||(this.ev.hurt(10*this.o.dmgMul,`contact`),this.damage(n,25,!1,`blast`)))}}}aiShoot(e,t,n,r,i,a,o,s,c,l){e.burst>0?(e.telT-=t,e.telT<=0&&(this.fireAt(e,s,c,l,a,o),e.burst--,e.telT=.16,e.burst===0&&(e.fireT=n*(.8+Math.random()*.4)))):(e.fireT-=t,e.fireT<=0&&e.telT<=0?(e.telT=r,e.fireT=99,this.fx.ring(s,c,l,.25,this.o.danger,r,`telegraph`,!0,1.5),Y.telegraph()):e.fireT>50&&(e.telT-=t,e.telT<=0&&(e.burst=i,e.telT=0)))}stepEnemyShots(e){let t=this.p;for(let n of this.eshots){if(!n.on)continue;if(n.x+=n.vx*e,n.y+=n.vy*e,n.s+=n.vs*e,n.life-=e,n.life<=0||n.s<t.s-5){n.on=!1;continue}let r=t.sliding?.45:.95;!t.invuln&&Math.hypot(n.x-t.x,n.y-(t.y+r),n.s-t.s)<n.r+(t.sliding?.35:.5)&&(n.on=!1,this.ev.hurt(n.dmg,`shot`),this.fx.burst(n.x,n.y,n.s,6,16738874,{speed:6,life:.25}))}}stepPickups(e){let t=this.p,n=2.3*this.o.pickupRange;for(let r of this.picks){if(!r.on)continue;let i=r.s-t.s;if(i>140)continue;if(i<-8){r.on=!1;continue}if(r.vy!==0){r.vy-=22*e,r.y+=r.vy*e;let n=this.world.groundAt(r.x,r.s,r.y+3),i=n===-1/0?t.y+.6:n+.7;r.y<i&&r.vy<0&&(r.y=i,r.vy=0)}let a=t.x-r.x,o=t.y+.9-r.y,s=Math.hypot(a,o,i);if(!r.pull&&s<n&&(r.pull=!0),r.pull){let n=(26+t.speed)*e/Math.max(.2,s);r.x+=a*Math.min(1,n),r.y+=o*Math.min(1,n),r.s+=-i*Math.min(1,n)+t.speed*e*.5,s<.9&&(r.on=!1,this.ev.pickup(r.kind===0?`cell`:`health`),this.fx.burst(r.x,r.y,r.s,4,r.kind===0?8385791:6160282,{speed:5,life:.25,size:.25,cat:`ambient`}))}}}stepHazards(e){let t=this.p;for(let e of this.hazards){let n=e.s-t.s;if(!(n>60||n<-9)){if(e.kind===`crusher`)Math.abs(n)<1.2&&Math.abs(t.x-e.x)<e.w/2+.3&&!this.hazHit.has(e)&&t.y+(t.sliding?.95:1.8)>e.y+1.25&&t.y<e.y+4.85&&(this.hazHit.add(e),this.ev.hurt(20*this.o.dmgMul,`crusher`),this.fx.popup(`OUCH!`,t.x,t.y+2,t.s+1,1.1));else if(e.kind===`boost`)n<.5&&n>-5&&Math.abs(t.x-e.x)<e.w/2+.2&&t.y-e.y<.5&&!this.hazHit.has(e)&&(this.hazHit.add(e),this.ev.boost());else if(e.kind===`pour`){let r=(this.time+e.s*.07)%2.6,i=e.s+.4,a=e.s+5.6;if(r<1){Math.random()<.25&&this.fx.spark(e.x+(Math.random()-.5)*e.w*.8,e.y+.2,i+Math.random()*5,0,2.5,0,this.o.danger,.35,.3,0);let t=Math.floor((this.time+e.s*.07)/2.6);n<45&&this.pourRing.get(e)!==t&&(this.pourRing.set(e,t),this.fx.ring(e.x,e.y+.12,e.s+3,.6,this.o.danger,.95,`telegraph`,!1,2.6))}else if(r<1.7){for(let t=0;t<2;t++)this.fx.spark(e.x+(Math.random()-.5)*e.w*.5,e.y+6,e.s+2.4+Math.random()*1.2,(Math.random()-.5)*2,-16,0,t?16765562:16738842,.5,.6,20);!t.invuln&&t.s>i&&t.s<a&&Math.abs(t.x-e.x)<e.w/2&&t.y-e.y<4&&this.ev.hurt(15*this.o.dmgMul,`pour`)}}}}}checkBossPhase(){let e=this.boss,t=e.hp/e.maxHp,n=t>.66?1:t>.33?2:3;n>this.bossPhase&&(this.bossPhase=n,this.ev.bossPhase(n),this.fx.popup(`OVERLOAD!`,e.x,6.5,e.s-5,2,`overload`),this.fx.ring(e.x,3.4,e.s-4.6,12,16752698,.5,`overload`,!0),Y.bossRoar(),this.atkT=1.6,this.skyFlash=1)}stepBoss(e){let t=this.boss,n=this.p,r=this.bossModel;t.t+=e,t.hurtT>0&&(t.hurtT-=e),r.solidMat.uniforms.uHurt.value=t.hurtT>.06?.06:0;for(let e of[r.bodyMat,r.clawMat])e&&(e.uniforms.uHurt.value=t.hurtT>.06?.06:0,e.uniforms.uEmis.value.y=.75+Math.sin(t.t*6)*.25);let i=n.s+25+Math.sin(t.t*.6)*1.5;t.s+=(i-t.s)*Math.min(1,e*3.5),t.x=1.5+Math.sin(t.t*.45)*1;let a=this.world.groundAt(0,t.s,50);t.y=a===-1/0?t.y:a,r.root.position.set(t.x,t.y+Math.sin(t.t*9)*.04,-t.s),r.root.rotation.y=-.3+Math.sin(t.t*.45)*.05,r.root.scale.setScalar(1.26);for(let t of r.wheels)t.rotation.x-=n.speed*e;r.grate.material.uniforms.uGlow.value=.8+Math.sin(t.t*6)*.25;let o=this.bossPhase===3?1.15+Math.sin(t.t*8)*.12:.001;if(r.core.scale.setScalar(r.core.scale.x+(o-r.core.scale.x)*Math.min(1,e*5)),Math.random()<.5&&this.fx.spark(t.x+(Math.random()-.5),t.y+8.4,t.s-2.4,(Math.random()-.5)*2,5,8,this.bossPhase===3?16734762:6969962,.9,1.1,-3,this.bossPhase!==3),this.bossDying>=0){if(this.bossDying+=e,r.root.rotation.z=Math.sin(this.bossDying*30)*.03,Math.random()<.35){let e=t.x+(Math.random()-.5)*6,n=t.y+1+Math.random()*6,r=t.s-4+Math.random()*6;this.fx.flash(e,n,r,7,16757850,.12),this.fx.burst(e,n,r,10,16747050,{speed:14,life:.5,size:.7,cat:`overload`,color2:16769658}),Math.random()<.4&&(Y.explosion(!0),this.fx.popup(Math.random()<.5?`BOOM!`:`POW!`,e,n,r,1.6,`overload`))}if(this.bossDying>2.2){this.fx.ring(t.x,3.4,t.s,26,16773312,.7,`overload`,!0),this.fx.burst(t.x,3.5,t.s-2,40,16760906,{speed:26,life:.9,size:1,cat:`overload`,color2:16734762}),this.fx.burst(t.x,3.5,t.s-2,24,4011588,{speed:18,life:1.2,size:1,solid:!0,cat:`overload`}),this.fx.popup(`OVERLOAD!`,t.x,6,t.s-6,2.6,`overload`);for(let e=0;e<30;e++)this.dropPickup(0,(Math.random()-.5)*8,2+Math.random()*3,t.s-6+Math.random()*6,!0);t.alive=!1,t.active=!1,r.root.visible=!1,this.skyFlash=1.5,this.bossDying=-2,this.ev.bossDead()}return}if(this.bossIntro>0){this.bossIntro-=e,r.claw.rotation.x=-.6+Math.sin(t.t*5)*.2;return}if(!t.alive)return;let s=t.cryoT>0?.5:1;if(t.cryoT>0&&(t.cryoT-=e),t.stunT>0){t.stunT-=e;return}t.burnT>0&&(t.burnT-=e,t.burnTick-=e,t.burnTick<=0&&(t.burnTick=.25,this.damage(t,t.burnDps*.25,!1,`burn`)));let c=this.bossPhase,l=-.25+Math.sin(t.t*1.4)*.12;if(this.slamT>0?(this.slamT-=e*s,l=-1.5,this.slamT<=0&&(this.slamWaveT=0,this.slamS=t.s-6,this.fx.ring(t.x,t.y+.2,this.slamS,40,16747066,1.25,`telegraph`,!1,2),this.fx.burst(t.x,t.y+.3,this.slamS,18,16756810,{speed:14,life:.5,size:.6,cat:`telegraph`}),Y.explosion(!0))):this.slamWaveT>=0&&this.slamWaveT<.25&&(l=.5),r.claw.rotation.x+=(l-r.claw.rotation.x)*Math.min(1,e*(l>0?22:6)),this.slamWaveT>=0){let t=this.slamS-this.slamWaveT*30.4;this.slamWaveT+=e;let r=this.slamS-this.slamWaveT*30.4;n.s<=t&&n.s>=r-n.speed*e&&(n.y-n.ground<.7&&!n.invuln?this.ev.hurt(22*this.o.dmgMul,`shockwave`):n.y-n.ground>=.7&&this.fx.popup(`NICE!`,n.x,n.y+2.2,n.s+2,.9)),this.slamWaveT>1.3&&(this.slamWaveT=-1)}let u=this.laneState;if(u.t>=0){u.t+=e*s;let r=rd(u.t/u.tel,0,1);for(let e=0;e<3;e++){let i=this.lanes[e],a=e===u.safe;i.mesh.visible=!0,i.mesh.position.set(lg[e],t.y+.14,-(n.s+12)),i.mesh.scale.set(2.9,34,1),i.tex.repeat.set(1,11),i.tex.offset.y=this.time*(a?.6:2.2)%1,i.mat.color.setHex(a?this.o.safe:this.o.danger),i.mat.opacity=a?.5:.35+.55*r*(.7+.3*Math.sin(this.time*30))}if(u.t>=u.tel&&!u.fired){u.fired=!0;for(let e=0;e<3;e++)if(e!==u.safe){for(let r=0;r<7;r++)this.fx.burst(lg[e],t.y+.4,n.s-3+r*4.5,5,16738842,{speed:7,life:.45,size:.7,up:5,cat:`telegraph`,color2:16765562});this.fx.streak(lg[e],t.y+3,t.s-5,lg[e],t.y+.3,n.s-4,16742938,2.4)}Y.explosion(!1),(n.x<-1.5?0:n.x>1.5?2:1)!==u.safe&&n.y-n.ground<1.5&&!n.invuln&&this.ev.hurt(20*this.o.dmgMul,`slag`)}if(u.t>u.tel+.3){u.t=-1;for(let e of this.lanes)e.mesh.visible=!1}}for(let r=this.strikes.length-1;r>=0;r--){let i=this.strikes[r];i.t-=e,i.t<=0&&(this.fx.bolt(i.x+(Math.random()-.5)*6,t.y+40,i.s+10,i.x,t.y+.2,i.s,14207231,.7,.22,2.2,`telegraph`),this.fx.flash(i.x,t.y+1,i.s,9,14207231,.14),this.fx.burst(i.x,t.y+.4,i.s,10,14207231,{speed:10,life:.3,cat:`telegraph`}),this.skyFlash=1,Y.lightning(),!n.invuln&&Math.hypot(n.x-i.x,n.s-i.s)<i.r&&this.ev.hurt(i.dmg*this.o.dmgMul,`lightning`),this.strikes.splice(r,1))}if(this.atkT-=e*s,this.atkT<=0&&u.t<0&&this.slamT<=0){let e=c===1?[`lanes`,`shots`]:c===2?[`lanes`,`slam`,`shots`,`lanes`]:[`bolts`,`lanes`,`slam`,`bolts`],r=e[this.atkIdx++%e.length];if(r===`lanes`)u.t=0,u.tel=c===1?1.15:c===2?.95:.8,u.fired=!1,u.safe=Math.floor(Math.random()*3),Y.telegraph(),this.atkT=u.tel+(c===3?1:1.5);else if(r===`slam`)this.slamT=.85,Y.telegraph(),this.fx.ring(t.x+3.3,t.y+6.4,t.s-4.2,.4,this.o.danger,.8,`telegraph`,!0,3.4),this.atkT=2.4-c*.25;else if(r===`bolts`){let e=n.speed*.95;for(let r=0;r<3;r++){let i=r===0?n.x:rd(n.x+(Math.random()-.5)*7,-4,4),a=n.s+e+(r===0?0:(Math.random()-.3)*8);this.strikes.push({x:i,s:a,t:.95,r:2.3,dmg:18}),this.fx.ring(i,t.y+.14,a,.5,13152511,.95,`telegraph`,!1,2.3)}Y.telegraph(),this.atkT=1.7}else{for(let e=0;e<3;e++)this.fireAt(t,t.x+(e-1)*1.6,t.y+3.3,t.s-5,17,9,.55);Y.shot(`rocket`),this.atkT=1.4}}if(this.addT-=e,this.addT<=0){this.addT=c===1?9:7;let e=0;for(let t of this.enemies)t.alive&&t.kind===`drone`&&e++;if(e<3)for(let e of[-3,3]){let n=this.addEnemy(`drone`,e,t.y+3.4+Math.random(),t.s-8);n.engageT=-6}}}draw(e){let t=this.p;if(!t)return;for(let t of this.shots)t.on&&(t.kind===0?this.fx.streak(t.px,t.py,t.ps,t.x,t.y,t.s,t.color,t.w):t.mesh&&(t.mesh.position.set(t.x,t.y,-t.s),t.kind===2?(t.mesh.rotation.set(.3,e*30,0),this.fx.streak(t.px,t.py,t.ps,t.x,t.y,t.s,t.color,.5,!1)):(fg.set(t.x+t.vx,t.y+t.vy,-(t.s+t.vs)),t.mesh.lookAt(fg),t.mesh.rotateY(Math.PI))));let n=0;for(let t of this.eshots){if(!t.on)continue;let r=t.r*(1+Math.sin(e*30+n)*.12);ug.makeScale(r,r,r).setPosition(t.x,t.y,-t.s),this.eshotMesh.setMatrixAt(n++,ug),this.fx.streak(t.x,t.y,t.s,t.x-t.vx*.05,t.y-t.vy*.05,t.s-t.vs*.05,16734762,t.r*1.6,!1)}this.eshotMesh.count=n,this.eshotMesh.instanceMatrix.needsUpdate=!0;let r=0,i=0;for(let n of this.picks){if(!n.on)continue;let a=n.s-t.s;if(a>130||a<-6)continue;mg.set(.25,e*3+n.ph,.2),dg.setFromEuler(mg),fg.set(n.x,n.y+Math.sin(e*4+n.ph)*.12,-n.s);let o=n.pull?rd(Math.hypot(n.x-t.x,n.y-t.y-.9,a)/3.2,.3,1):1;n.kind===0&&r<200?(pg.setScalar(1.05*o),ug.compose(fg,dg,pg),this.cellSolid.setMatrixAt(r,ug),this.cellGlow.setMatrixAt(r++,ug)):n.kind===1&&i<8&&(pg.setScalar(1.2*o),ug.compose(fg,dg,pg),this.hpMesh.setMatrixAt(i,ug),this.hpGlow.setMatrixAt(i++,ug))}this.cellSolid.count=this.cellGlow.count=r,this.cellSolid.instanceMatrix.needsUpdate=!0,this.cellGlow.instanceMatrix.needsUpdate=!0,this.hpMesh.count=this.hpGlow.count=i,this.hpMesh.instanceMatrix.needsUpdate=!0,this.hpGlow.instanceMatrix.needsUpdate=!0;let a=0;for(let e of this.enemies){if(!e.alive||!e.active||e.kind===`boss`||a>10)continue;let n=e.s-t.s;if(n>60||n<-3)continue;let r=this.world.groundAt(e.x,e.s,e.y+1);r!==-1/0&&(this.fx.shadow(e.x,r,e.s,e.r*.9),a++)}this.boss&&this.boss.alive&&this.fx.shadow(this.boss.x,this.boss.y,this.boss.s,4.2)}liveEnemies(){let e=0;for(let t of this.enemies)t.alive&&t.kind!==`barrel`&&e++;return e}dispose(){for(let e of this.owned)e.dispose();this.rocketG.dispose(),this.discG.dispose(),this.solidMat.dispose(),this.hurtMat.dispose(),this.glowMat.dispose();for(let e of Object.values(this.modelMats))e.solid.dispose(),e.hurt.dispose();this.eshotMesh.material.dispose();for(let e of this.lanes)e.mat.dispose(),e.tex.dispose();this.bossModel?.dispose(),this.root.removeFromParent()}};function vg(){let e=Array(16).fill(null);return e[5]=Gm,e}var yg=.25,bg=1.5;function xg(e){let t=[],n=Math.floor(e/4),r=e%4;return n>0&&t.push(e-4),r>0&&t.push(e-1),r<3&&t.push(e+1),n<3&&t.push(e+4),t}function Sg(e,t){let n=[];for(let t=0;t<16;t++){let r=e[t];n.push(typeof r==`string`?qm[r]??null:null)}let r=Array(16).fill(!1),i=n.findIndex(e=>e!==null&&e.id===`core`);if(i>=0){let e=[i];for(r[i]=!0;e.length;){let t=e.pop();for(let i of xg(t))!r[i]&&n[i]&&(r[i]=!0,e.push(i))}}let a=[];for(let e=0;e<16;e++)if(r[e])for(let t of xg(e))t>e&&r[t]&&a.push([e,t]);let o=Wm();for(let e=0;e<16;e++){let t=n[e];if(r[e]&&t&&(t.kind===`passive`||t.kind===`corrupted`)&&t.stats)for(let e of Object.keys(t.stats))o[e]+=t.stats[e]??0}for(let e of Um)o[e]=Math.max(.2,o[e]);o.critChance=Math.min(1,Math.max(0,o.critChance));let s={overload:[],slideJump:[],headbonk:[],railExit:[],fifthShot:[]},c={};for(let e=0;e<16;e++){let a=n[e];if(!r[e]||!a||a.kind!==`invoker`||!a.event)continue;let o=new Set([e]),l=[e];for(;l.length;){let e=l.pop();for(let t of xg(e)){if(o.has(t)||!r[t])continue;let e=n[t];e&&(e.kind===`modifier`||e.kind===`corrupted`)&&(o.add(t),l.push(t))}}let u=[...o].sort((e,t)=>e-t);c[e]=u;let d=0,f=0;for(let t of u){if(t===e)continue;let r=n[t];r.kind===`corrupted`?d++:r.effect===`double`&&f++}let p=Math.min(3,d),m=Math.min(4,2**f);for(let o of u){if(o===e)continue;let c=n[o];if(c.kind!==`modifier`||!c.effect||c.effect===`double`)continue;let l=0;for(let e of xg(o))r[e]&&e!==i&&n[e]&&l++;let u=t&&(t.tag===c.tag||t.tag===a.tag||t.tag===c.effect||t.tag===a.event)?t.mult:1,d=(c.base??1)*(1+yg*l)*bg**p*u;s[a.event].push({effect:c.effect,power:d,repeat:m,chip:c.id,cell:o})}}return{stats:o,triggers:s,powered:r,wires:a,chains:c}}var Cg={canyon:{look:{light:[.55,.78,.32],shadow:10117256,fog:10149870,fogNear:90,fogFar:560,under:1706496,ink:2758178,vignette:.22,vigColor:2756640,punch:.2,grit:.58,strata:1,gritTint:7223856,rim:6967856,bloom:.3},deck:12883054,deckAlt:11830370,deckSide:8021616,support:9404294,guard:15906332,rail:16762398,railLight:5236991,safe:3135648,danger:16730682,accent:15886364,sky:{top:3126502,mid:5951726,hor:14478552,cloud:16774372,cloudSh:12901606,cloudAmt:.5}},yard:{look:{light:[-.35,.8,.45],shadow:6970508,fog:5654638,fogNear:45,fogFar:330,under:4202570,ink:722968,vignette:.34,vigColor:394266,punch:.24,rain:.55,grit:.58,wet:1,gritTint:3158108,rim:4876954,bloom:.78},deck:5134972,deckAlt:4476784,deckSide:3683918,support:4603998,guard:15906332,rail:3535048,railLight:16734900,safe:3535048,danger:16730778,accent:16734900,sky:{top:3811920,mid:5522538,hor:9201288,cloud:5916272,cloudSh:3812436,cloudAmt:.5}},foundry:{look:{light:[.25,.7,.5],shadow:6439020,fog:8142434,fogNear:55,fogFar:360,under:4858376,ink:1575454,vignette:.4,vigColor:1705490,punch:.24,grit:.7,gritTint:7484444,rim:10114080,bloom:.55,groundGlow:15234076,groundY:t.lavaY,groundFade:17,highTint:9208512,highFrom:4.5,highTo:24},deck:7234166,deckAlt:6181478,deckSide:4468796,support:5519434,guard:15906332,rail:8382719,railLight:16752682,safe:3530890,danger:16726586,accent:16747038,sky:{top:3678300,mid:7224970,hor:14181946,cloud:5911160,cloudSh:3414610,cloudAmt:.62}}},wg=[1,1.5,2,3,4],Tg=[[`GHOST-77`,.93],[`RIVET-9`,.74],[`KESTREL`,.52]],Eg={x:0,y:0,mode:`run`},Dg={x:0,y:0,slope:0},Og=new B,kg=new B,Ag=.6,jg=class{host;phase=`intro`;hud;result=null;workshop=null;debug={god:!1,autopilot:!1,timeScale:1};plan;mode;sector=0;depth=0;layout;world;combat;st;view;rmods;mmods=sd();perks;weekly;grid=vg();bench=[,,,,,,].fill(null);ev;cells=0;score=0;kills=0;hp=0;maxHp=0;scratch=0;scratchFreeze=0;invulnT=0;shieldT=0;hurtFlash=0;meter=0;tier=0;meterIdle=0;w1;w2;cd1=.4;cd2=.8;ammo=0;mag=0;reloadT=-1;reloadDur=1;reloadMissed=!1;overloadT=0;overloadDur=1;shotN=0;muzzleSide=1;splitT=0;critT=0;dashCd=0;beamT=0;beamTarget=null;beamRamp=0;beamColor=0;grappleCd=0;queue=[];copts;player;cp={x:0,y:0,s:0,vy:0,speed:0,grounded:!0,sliding:!1,slamming:!1,ground:0,invuln:!1};px=0;py=0;ps=0;acc=0;time=0;secT=0;totalT=0;phaseT=0;camX=0;camY=0;roll=0;fov=72;shake=0;boostAmt=0;tq=.8;slq=0;stepDist=0;tick=0;comboN=0;comboT=0;recorder;recT=0;ghosts=[];layouts=[];sectorsCleared=0;bossKilled=!1;reviveUsed=!1;adRerollUsed=!1;rerolls=0;offers=[];shopRng=new td(1);workshopT=0;trailA;trailB;music=``;beat=!1;finished=!1;firstOverload=!1;endlessSeed=0;gadgets;constructor(e,t){this.host=e;let n=e.save;this.mode=t,this.perks=wf(n),this.weekly=u(),this.gadgets=new Set(n.gadgets),t===`daily`?this.plan=Qf(nd()):t===`standard`?this.plan=$f(Math.random()*4294967295>>>0):(this.endlessSeed=Math.random()*4294967295>>>0,this.plan=ep(this.endlessSeed,0)),this.rmods=Kf(this.plan.mutators),this.grid[5]=Gm,this.grid[6]=`inv_overload`,this.grid[7]=`mod_chain`,this.ev=Sg(this.grid,this.weekly),this.w1=Vm(n.primary),this.w2=Vm(n.secondary);let r=Qp(n.cosmetics.skin),i=$p(n.cosmetics.trail);this.trailA=i.color,this.trailB=i.color2,this.player=new gm(r.colors),e.renderer.scene.add(this.player.root),this.recorder=new zd({name:`YOU`,seed:this.plan.seed,skin:r.id,trail:i.id}),this.copts={hpMul:1,dmgMul:1,cellMul:1,bigHeads:!1,bossHpMul:1,safe:0,danger:0,pickupRange:1,healthChance:.07},this.st=cd(this.mmods),this.hud={hp:0,maxHp:0,scratch:0,shield:!1,hurtFlash:0,label:``,biome:``,pips:5,pip:0,boss:!1,progress:0,score:0,cells:0,mult:1,tier:0,adrenaline:0,ammo:0,mag:0,reloading:!1,reloadP:0,sweet0:.4,sweet1:.62,missed:!1,overload:0,skill:`dash`,dashCd:0,fuel:1,hovering:!1,race:[],raceTitle:``,bossHp:0,bossName:`FURNACE KING`,bossPhase:1,banner:``,bannerSub:``,bannerT:0,hint:``,time:0,speed:0,mutators:this.plan.mutators.map(e=>Uf[e]?.icon??`?`),weapon:this.w1.icon,weapon2:this.w2.icon},this.applyBuild(!0),t!==`endless`&&this.buildGhostPack(),this.loadSector(0)}applyBuild(e){this.ev=Sg(this.grid,this.weekly);let n=this.ev.stats,r=this.rmods,i=Math.max(20,Math.round((t.basePlayerHp+this.perks.maxHpAdd+n.maxHp)*r.playerHp));this.hp=e?i:Math.min(i,this.hp+Math.max(0,i-this.maxHp)),this.maxHp=i;let a=this.mmods;a.gravityMul=r.gravityMul,a.gravCap=r.gravCap,a.fuelMax=(t.jetFuel+n.fuel)*r.fuel,a.jetpack=this.gadgets.has(`jetpack`),a.cape=this.gadgets.has(`cape`),a.roller=this.gadgets.has(`roller`),a.grindMul=n.grind*r.grind,a.railLockout=r.railLockout,a.extraAirJumps=Math.round(n.airJumps),this.mag=Math.max(1,Math.round(this.w1.mag*n.magSize)),this.ammo=e?this.mag:Math.min(this.ammo,this.mag),this.copts.pickupRange=n.pickupRange*r.pickupRange,this.copts.bigHeads=r.bigHeads,this.refreshSpeed()}refreshSpeed(){this.mmods.speedMul=this.ev.stats.speed*this.rmods.speed*(1+.03*this.tier),this.copts.cellMul=a.balance.cellDrop*this.rmods.cellDrop*this.ev.stats.cellDrop*(1+.12*this.tier)}dmgMul(){return this.ev.stats.damage*this.rmods.playerDamage*a.balance.playerDamage}buildGhostPack(){let e=this.host.save,t=this.plan;for(let e=0;e<t.sectors;e++)this.layouts.push(tp(t,e,this.rmods));let n=[];if(this.perks.friendCodes)for(let r of e.friends){let e=$d(r.code);e&&e.seed===t.seed&&n.length<2&&(e.name=r.name||e.name,n.push(e))}let r=e.daily[t.seed];if(t.mode===`daily`&&r&&r.ghost){let e=$d(r.ghost);e&&(e.name=`YOUR PB`,n.push(e))}let i=ed(t.seed);for(let[e,r]of Tg)n.length<3&&n.push(nf(e,this.layouts,r,i,t.seed));for(let t of n){let r=$p(t.trail),i=new gm(Qp(t.skin).colors,t.name===`YOUR PB`?16765503:n.indexOf(t)<e.friends.length&&this.perks.friendCodes&&!Tg.some(e=>e[0]===t.name)?16743120:5236991);i.root.visible=!1,this.host.renderer.scene.add(i.root),this.ghosts.push({data:t,char:i,frame:{t:0,x:0,y:0,z:0,state:0,score:0},delta:0,trail:r.color,on:!1})}}isBoss(){return this.layout.boss}loadSector(e){let t=this.host.renderer,n=this.host.fx;this.view&&(this.view.dispose(),this.view.root.removeFromParent(),this.combat.dispose()),n.clear(),this.sector=e,this.layout=this.layouts[e]??tp(this.plan,e,this.rmods),this.world=new Ad(this.layout);let r=this.layout.biome,i=Cg[r];vf(t,i.look),this.view=new Jp(this.layout,i,this.plan.sectorSeeds[e]??1),t.scene.add(this.view.root);let o=this.mode===`endless`?this.depth:e,s=this.copts;s.hpMul=a.balance.enemyHp*this.rmods.enemyHp*(1+.14*o),s.dmgMul=a.balance.enemyDamage*this.rmods.enemyDamage*(1+.06*o),s.bossHpMul=a.balance.bossHp*this.rmods.enemyHp*(this.mode===`endless`?1+this.depth*.12:1),s.safe=i.safe,s.danger=i.danger,this.combat=new _g(n,this.layout,this.world,s,{hurt:(e,t)=>this.hurt(e,t),kill:(e,t)=>this.onKill(e,t),bonk:e=>this.onBonk(e),pickup:e=>this.onPickup(e),blast:(e,t,n)=>{hd(this.st,e,t,4*n),this.shake=Math.min(.6,this.shake+.3)},boost:()=>{this.st.rollerT=Math.max(this.st.rollerT,1.8),this.host.fx.popup(`NICE!`,this.st.x,this.st.y+2.2,this.st.s+2,.9),Y.adrenalineUp(2)},bossPhase:e=>{this.banner(e===2?`CLAW UNLEASHED`:`CORE EXPOSED!`,e===2?`JUMP THE SHOCKWAVES`:`DODGE THE LIGHTNING`,2),this.shake=.6},bossDead:()=>this.onBossDead()}),t.scene.add(this.combat.root);let c=this.st,l=cd(this.mmods);Object.assign(c,l),c.s=3,c.x=0;let u=this.world.groundAt(0,c.s,50);c.y=u===-1/0?0:u,this.px=c.x,this.py=c.y,this.ps=c.s,this.camX=0,this.camY=c.y,this.host.input.halfWidth=this.world.halfWidth,this.host.input.reset(),this.secT=0,this.finished=!1,this.queue.length=0,this.reloadT=-1,this.ammo=this.mag,this.overloadT=0,this.splitT=0,this.critT=0,this.beamT=0,this.recorder.beginSector(),this.recT=0;for(let t of this.ghosts)t.on=!this.layout.boss&&ef(t.data,e,0,t.frame),t.char.root.visible=t.on,t.delta=0;let d=this.hud;d.boss=this.layout.boss,d.biome=Ed[r],this.mode===`endless`?(d.label=`RUNG ${this.depth+1}${this.layout.boss?` · BOSS`:``}`,d.pips=0,d.pip=0):(d.label=this.layout.boss?`SECTOR 6-B`:`SECTOR 0${e+1}/05`,d.pips=5,d.pip=Math.min(5,e)),d.raceTitle=this.mode===`daily`?`DAILY RACE`:`GHOST RACE`,this.banner(this.layout.boss?`BOSS: FURNACE KING`:d.label,d.biome,2.2),this.layout.boss&&Y.bossRoar(),this.setPhase(`intro`),this.syncMusic()}banner(e,t,n){this.hud.banner=e,this.hud.bannerSub=t,this.hud.bannerT=n}setPhase(e){this.phase=e,this.phaseT=0,this.host.input.enabled=e===`play`||e===`intro`,e!==`play`&&(Y.grindStop(),Y.jetpack(!1),Y.heartbeat(!1),this.beat=!1),this.host.onPhase(e)}syncMusic(){let e=this.phase===`workshop`?`hub`:this.layout.boss?`boss`:this.tier>=3?`adrenaline`:`combat`;e!==this.music&&(this.music=e,Y.setMusicState(e))}addMeter(e){this.meter=Math.min(100,this.meter+e),this.meterIdle=0;let t=Math.min(4,Math.floor(this.meter/20));t>this.tier&&(this.tier=t,Y.adrenalineUp(t),Y.setIntensity(t),this.refreshSpeed(),this.syncMusic(),this.banner(`ADRENALINE T${t+1}`,`SCORE ×${wg[t]}`,1.1))}dropTier(){this.tier===0?this.meter=0:(this.tier--,this.meter=this.tier*20+6,Y.setIntensity(this.tier),this.refreshSpeed(),this.syncMusic())}addScore(e){this.score+=e*wg[this.tier]*this.ev.stats.scoreMul}heal(e){let t=this.hp;this.hp=Math.min(this.maxHp,this.hp+e),this.scratch=Math.max(0,Math.min(this.scratch-(this.hp-t),this.maxHp-this.hp))}hurt(e,n){if(this.phase!==`play`||this.debug.god||n!==`fall`&&(this.invulnT>0||this.st.dashT>0))return;let r=this.host.fx,i=this.st;this.shieldT>0?(this.shieldT=0,this.invulnT=.5,r.ring(i.x,i.y+1,i.s,3,8382975,.3,`hit`,!0),r.popup(`NICE!`,i.x,i.y+2.3,i.s+1,.9)):(e*=this.ev.stats.damageTaken,this.hp-=e,this.scratch=Math.min(this.maxHp-Math.max(0,this.hp),this.scratch+e*t.scratchRatio),this.scratchFreeze=t.scratchFreeze,this.invulnT=.7,this.hurtFlash=1,this.shake=Math.min(.6,this.shake+.35),this.dropTier(),Y.hurt(),Dm(40,this.host.save.settings.haptics),r.burst(i.x,i.y+1,i.s,8,16734794,{speed:7,life:.3}),n!==`crusher`&&r.popup(`OUCH!`,i.x,i.y+2.2,i.s+1,.9),this.hp<=0&&(this.hp=0,this.die()))}die(){let e=this.st,t=this.host.fx;Y.death(),Dm([60,40,120],this.host.save.settings.haptics),t.burst(e.x,e.y+1,e.s,20,16747050,{speed:12,life:.7,size:.6,cat:`overload`,color2:16769658}),t.popup(`BOOM!`,e.x,e.y+2,e.s,1.4,`overload`),this.player.root.visible=!1,this.setPhase(`dying`)}get canRevive(){return!this.reviveUsed}revive(){if(this.phase!==`dead`||this.reviveUsed)return;this.reviveUsed=!0,this.hp=Math.round(this.maxHp*.5),this.scratch=0,this.invulnT=2.5,this.player.root.visible=!0;let e=this.st;e.y<-2&&this.respawn(),this.combat.nova(12,60,8382975),this.host.fx.popup(`OVERLOAD!`,e.x,e.y+2.4,e.s+1,1.3,`overload`),Y.overload(),this.setPhase(`play`),this.syncMusic()}endRun(){this.phase!==`done`&&this.finish(!1)}respawn(){let e=this.st,t=this.world.nextSafe(e.s-6)??this.world.nextSafe(0);Object.assign(e,cd(this.mmods),{fuel:e.fuel}),t&&(e.s=Math.max(t.s0+1.5,Math.min(e.lastGroundS,t.s1-2)),e.x=rd(0,t.x0+1,t.x1-1),e.y=t.y,e.s=t.s0+1.5),this.px=e.x,this.py=e.y,this.ps=e.s}onKill(e,t){this.kills++,e.kind!==`barrel`&&(this.addMeter(22),this.comboN=this.comboT>0?this.comboN+1:0,this.comboT=2.2,Y.kill(this.comboN),this.scratchRally(4),this.rmods.lifesteal>0&&this.heal(this.maxHp*this.rmods.lifesteal)),this.addScore(e.value)}scratchRally(e){let t=Math.min(this.scratch,e);t>0&&(this.scratch-=t,this.hp=Math.min(this.maxHp,this.hp+t))}onBonk(e){let t=this.st,n=this.host.fx;md(t,this.mmods),this.invulnT=Math.max(this.invulnT,.3),n.popup(`BONK!`,e.x,e.y+e.top+.6,e.s,1.25),n.ring(e.x,e.y+e.top,e.s,2.6,16774048,.25,`hit`),Y.bonk(),Dm(25,this.host.save.settings.haptics),this.addMeter(40),this.addScore(150),this.host.save.stats.headbonks++,this.combat.damage(e,70*this.dmgMul(),!0,`bonk`),this.rmods.bonkShockwave&&this.combat.nova(5,30*this.dmgMul(),16774048),this.trigger(`headbonk`)}onPickup(e){Y.pickup(e),e===`cell`?(this.cells++,this.addMeter(2),this.addScore(10),this.scratchRally(2*t.scratchHealRate)):(this.heal(10*t.scratchHealRate),this.host.fx.popup(`NICE!`,this.st.x,this.st.y+2.2,this.st.s+1,.8)),this.scratchFreeze=Math.max(this.scratchFreeze,0)+t.scratchPickupFreeze}onBossDead(){this.bossKilled=!0,this.host.save.stats.bossKills++,this.addScore(5e3),Dm([80,60,80,60,200],this.host.save.settings.haptics),this.shake=.6,this.sectorClear()}trigger(e){for(let t of this.ev.triggers[e])for(let e=0;e<t.repeat;e++)this.queue.push({fx:t,t:e*.14})}runEffect(e){let t=this.st,n=this.host.fx,r=this.combat,i=e.power,a=this.dmgMul();switch(e.effect){case`chain`:r.chain(t.x,t.y+1.2,t.s+.4,null,22*i*a,3)&&n.popup(`ZAP!`,t.x,t.y+2.4,t.s+3,.8);break;case`split`:this.splitT=2;break;case`burn`:n.ring(t.x,t.y+.4,t.s,9,16742938,.35,`overload`),r.status(9,`burn`,3,8*i*a,0);break;case`cryo`:n.ring(t.x,t.y+.4,t.s,9,10479871,.35,`overload`),r.status(9,`cryo`,2.5*i,0,0);break;case`shock`:n.ring(t.x,t.y+.4,t.s,8,16773242,.3,`overload`),r.status(8,`stun`,1.2,0,12*i*a)&&n.popup(`ZAP!`,t.x,t.y+2.4,t.s+3,.9);break;case`crit`:this.critT=1.5*i;break;case`nova`:r.nova(6,30*i*a,16756810);break;case`heal`:this.heal(6*i),n.burst(t.x,t.y+1,t.s,6,6160282,{speed:4,life:.4,up:4});break;case`magnet`:r.magnetAll(70);break;case`fuel`:t.fuel=Math.min(this.mmods.fuelMax,t.fuel+.6*i);break;case`missile`:{let e=r.acquire(44);r.spawnShot(3,t.x,t.y+1.6,t.s+.5,(Math.random()-.5)*8,9,26+t.speed,2.2,40*i*a,!1,16752704,0,e,3),Y.shot(`rocket`);break}case`shield`:this.shieldT=3*i,n.ring(t.x,t.y+1,t.s,2.2,8382975,.3,`overload`,!0)}}fire(e,t,n){let r=this.st,i=this.combat,a=this.host.fx,o=this.muzzleSide=-this.muzzleSide,s=r.x+o*.36,c=r.y+(r.mode===`slide`?.7:1.22),l=r.s+.7,u=n.x,d=n.y+n.cy,f=n.s+n.hs,p=.07+this.ev.stats.critChance+this.rmods.critChance+(this.critT>0?.5:0),m=this.dmgMul(),h=()=>{let t=Math.random()<p;return[e.dmg*m*(t?2*this.ev.stats.critMul:1),t]},g=this.splitT>0?2:0;switch(this.player.recoil=1,Y.shot(e.sfx),a.flash(s,c,l+.3,e.kind===`bullet`?1.5:2,e.color,.08),e.kind){case`bullet`:{let t=e.pellets+g;for(let n=0;n<t;n++){let t=u-s,a=d-c,o=f-l,p=Math.hypot(t,a,o)||1,m=e.speed+r.speed,g=(Math.random()-.5)*2*e.spread+(n>=e.pellets?n-e.pellets?.13:-.13:0),_=(Math.random()-.5)*e.spread,[v,y]=h();i.spawnShot(0,s,c,l,(t/p+g)*m,(a/p+_)*m,o/p*m,e.range/e.speed,v,y,y?16774048:e.color)}break}case`arc`:{let[t,r]=h();i.chain(s,c,l,n,t,3+g,r?16774048:e.color);break}case`rocket`:for(let t=0;t<=g;t++){let a=u-s,o=d-c+.6,p=f-l,m=Math.hypot(a,o,p)||1,g=e.speed+r.speed,[_]=h();i.spawnShot(1,s,c,l,a/m*g+(t?t===1?-7:7:0),o/m*g+1.5,p/m*g,2.4,_,!1,e.color,0,n,4.2)}break;case`disc`:for(let t=0;t<=g;t++){let n=u-s+(t?t===1?-3:3:0),a=d-c,o=f-l,p=Math.hypot(n,a,o)||1,m=e.speed+r.speed,[g,_]=h();i.spawnShot(2,s,c,l,n/p*m,a/p*m,o/p*m,Math.min(.75,(p+5)/m)+.1,g,_,e.color,99)}break;case`beam`:{this.beamTarget!==n&&(this.beamTarget=n,this.beamRamp=0),this.beamRamp=Math.min(1.5,this.beamRamp+.06),this.beamT=.12,this.beamColor=e.color;let[t,r]=h();i.damage(n,t*(1+this.beamRamp),r,`shot`),g&&i.chain(u,d,f,null,t*.6,2,e.color);break}}t&&(this.ammo--,this.shotN++,this.shotN%5==0&&this.trigger(`fifthShot`),this.ammo<=0&&this.startReload())}startReload(){this.reloadDur=t.reloadTime*this.ev.stats.reload*this.rmods.reloadTime,this.reloadT=0,this.reloadMissed=!1,Y.reloadStart()}overload(){let e=this.st,n=this.host.fx;this.reloadT=-1,this.ammo=this.mag,this.overloadDur=t.overloadDur+this.ev.stats.overloadDur+this.perks.overloadBonus,this.overloadT=this.overloadDur,this.firstOverload=!0,n.popup(`OVERLOAD!`,e.x,e.y+2.6,e.s+2,1.5,`overload`),n.ring(e.x,e.y+.5,e.s,7,8382975,.4,`overload`),n.ring(e.x,e.y+1.1,e.s,4,16774048,.3,`overload`,!0,.3,.35),n.burst(e.x,e.y+1,e.s,14,8382975,{speed:12,life:.4,cat:`overload`,color2:16774048}),this.combat.nova(6.5,26*this.dmgMul(),8382975),Y.overload(),Dm([30,40,60],this.host.save.settings.haptics),this.addMeter(35),this.addScore(100),this.shake=Math.min(.6,this.shake+.25),this.host.save.stats.overloads++,this.trigger(`overload`)}skill(e){if(this.reloadT>=0){if(this.reloadMissed)return;let e=this.reloadT/this.reloadDur;e>=this.hud.sweet0&&e<=this.hud.sweet1?this.overload():(this.reloadMissed=!0,this.reloadDur+=t.overloadMissStall,Y.reloadMiss(),this.host.fx.popup(`OUCH!`,this.st.x,this.st.y+2.2,this.st.s+2,.7))}else this.dashCd<=0&&(e.dashPressed=!0)}stepWeapons(e){if(this.combat.bossIntro>0)return;let n=this.ev.stats.fireRate*this.rmods.fireRate*(this.overloadT>0?1+t.overloadFireRate:1);if(this.reloadT>=0)this.reloadT+=e,this.reloadT>=this.reloadDur&&(this.reloadT=-1,this.ammo=this.mag);else if(this.cd1-=e,this.cd1<=0){let e=this.combat.acquire(this.w1.range);e?(this.fire(this.w1,!0,e),this.cd1=1/(this.w1.rate*n)):this.cd1=.05}if(this.cd2-=e,this.cd2<=0){let e=this.combat.acquire(this.w2.range);e?(this.fire(this.w2,!1,e),this.cd2=1/(this.w2.rate*n*Hm)):this.cd2=.08}this.beamT>0&&(this.beamT-=e,this.beamTarget&&!this.beamTarget.alive&&(this.beamT=0,this.beamTarget=null))}autopilot(e){let t=this.st,n=this.world,r=t.s+Math.max(2.2,t.speed*.2);Md(this.layout,t.s+5,.7,Eg);let i=Eg.x;for(let n of this.layout.hazards){let r=n.s-t.s;n.kind===`crusher`&&r>.5&&r<t.speed*.32+1&&Math.abs(t.x-n.x)<n.w/2+.6&&t.grounded&&(e.slidePressed=!0),n.kind===`pour`&&r>-6&&r<14&&Math.abs(i-n.x)<n.w/2+.5&&(i=n.x+(n.x>0?-1:1)*(n.w/2+1.2))}this.layout.boss&&(i=Math.sin(this.secT*.8)*3),e.targetX=rd(i,-n.halfWidth+.5,n.halfWidth-.5),e.steer=0;let a=n.groundAt(t.x,t.s,t.y+.6),o=n.groundAt(t.x,r,t.y+1.2);if(t.grounded&&!t.rail&&o===-1/0&&(e.jumpPressed=!0),!t.grounded&&!t.rail&&a===-1/0&&(e.jumpHeld=!0,t.vy<-2&&t.airJumps>0&&(e.jumpPressed=!0)),this.layout.boss&&t.grounded&&this.tick%80==0&&(e.jumpPressed=!0),this.reloadT>=0&&!this.reloadMissed){let t=this.reloadT/this.reloadDur;t>this.hud.sweet0+.05&&t<this.hud.sweet1&&this.skill(e)}}step(e){let n=this.st,r=this.host.fx,i=this.host.input;this.tick++,this.px=n.x,this.py=n.y,this.ps=n.s,i.playerX=n.x;let a=i.poll(),o=this.phase===`play`;if(o||(a.steer=0,a.targetX=this.phase===`clear`?0:a.targetX,a.jumpPressed=!1,a.slidePressed=!1,a.dashPressed=!1,a.jumpHeld=!1),o&&this.debug.autopilot&&this.autopilot(a),a.dashPressed&&this.dashCd>0&&(a.dashPressed=!1),o&&i.takeSkill()?this.skill(a):o||i.takeSkill(),i.lastTouch&&this.tier>=2&&(a.boost=!0),o&&this.gadgets.has(`grapple`)&&a.jumpPressed&&!n.grounded&&!n.rail&&!n.zip&&n.airJumps<=0&&this.grappleCd<=0){let e=this.findRail();if(e){let t=rd(n.s+9,e.s0+.5,e.s1-1);dd(e,t,Dg),gd(n,Dg.x,Dg.y,t,e),r.bolt(n.x,n.y+1.2,n.s,Dg.x,Dg.y,t,16765503,.16,.3,.1),this.grappleCd=1.2,a.jumpPressed=!1,Y.shot(`disc`)}}if(yd(n,a,this.world,this.mmods,e),this.phase===`clear`){let e=Math.min(this.layout.finishS+12,this.layout.length-4);n.s>e&&(n.s=e,n.speed=0)}for(let e of n.events)this.onMoveEvent(e);n.grounded&&n.mode===`run`&&(this.stepDist+=n.speed*e,this.stepDist>2.3&&(this.stepDist=0,Y.footstep(n.speed),n.speed>13&&r.burst(n.x,n.y+.1,n.s-.3,2,14209216,{speed:2,life:.3,size:.3,cat:`ambient`})));let s=n.speed>t.runSpeed*this.mmods.speedMul+2.5;if(n.rail){this.tick%5==0&&Y.grindUpdate(n.speed,s);for(let e=0;e<2;e++)r.spark(n.x+(Math.random()-.5)*.3,n.y+.05,n.s-.2,(Math.random()-.5)*5,2+Math.random()*3,-4-Math.random()*6,e?this.trailA:16758344,.3,.26,14)}else if((s||n.mode===`slide`)&&(this.tick%2==0&&r.spark(n.x+(Math.random()-.5)*.5,n.y+.15,n.s-.4,(Math.random()-.5)*2,.6+Math.random(),-3,Math.random()<.5?this.trailA:this.trailB,.35,.3,2),n.mode===`slide`&&n.grounded))for(let e=0;e<4;e++){let t=e&1;r.spark(n.x+(t?-.55:.3)+(Math.random()-.5)*.25,n.y+.06,n.s+(t?.55:-.5),(Math.random()-.5)*6,1.5+Math.random()*3.5,-5-Math.random()*6,e<2?16751150:16762458,.3,.26,14)}if(n.hovering&&this.tick%2==0)for(let e of[-.2,.2])r.spark(n.x+e,n.y+.1,n.s,(Math.random()-.5)*1.5,-7,-2,Math.random()<.5?8382975:16777215,.22,.34,0);let c=this.cp;c.x=n.x,c.y=n.y,c.s=n.s,c.vy=n.vy,c.speed=n.speed,c.grounded=n.grounded||n.rail!==null,c.sliding=n.mode===`slide`,c.slamming=n.slamming;let l=this.world.groundAt(n.x,n.s,n.y+.5);c.ground=l===-1/0?n.y-99:l,c.invuln=this.invulnT>0||n.dashT>0||!o||this.debug.god,this.combat.update(e,c),o&&this.stepWeapons(e);for(let t=this.queue.length-1;t>=0;t--){let n=this.queue[t];n.t-=e,n.t<=0&&(this.queue.splice(t,1),o&&this.runEffect(n.fx))}this.invulnT=Math.max(0,this.invulnT-e),this.shieldT=Math.max(0,this.shieldT-e),this.overloadT=Math.max(0,this.overloadT-e),this.splitT=Math.max(0,this.splitT-e),this.critT=Math.max(0,this.critT-e),this.dashCd=Math.max(0,this.dashCd-e),this.grappleCd=Math.max(0,this.grappleCd-e),this.comboT=Math.max(0,this.comboT-e),this.scratch>0&&(this.scratchFreeze>0?this.scratchFreeze-=e:this.scratch=Math.max(0,this.scratch-t.scratchDecay*e));let u=o&&this.scratch>.5;if(u!==this.beat&&(this.beat=u,Y.heartbeat(u)),this.meterIdle+=e,this.meterIdle>2.5&&this.meter>0){this.meter=Math.max(0,this.meter-5*e);let t=Math.min(4,Math.floor(this.meter/20));t<this.tier&&(this.tier=t,Y.setIntensity(t),this.refreshSpeed(),this.syncMusic())}o&&(this.secT+=e,this.totalT+=e,this.recT-=e,this.recT<=0&&(this.recT+=.1,this.recorder.sample(this.secT,n.x,n.y,n.s,Math.max(0,Pd.indexOf(n.mode)),this.score),this.updateRace()),!this.finished&&n.s>=this.layout.finishS&&this.sectorClear())}findRail(){let e=this.st,t=null,n=1e9;for(let r of this.layout.rails){if(r.s1<e.s+3||r.s0>e.s+16)continue;let i=Math.max(0,r.s0-e.s);i<n&&(n=i,t=r)}return t}onMoveEvent(e){let n=this.st,r=this.host.fx,i=this.host.save.settings.haptics;switch(e){case`jump`:Y.jump(!1),r.burst(n.x,n.y,n.s,4,15261904,{speed:3,life:.25,size:.3,cat:`ambient`});break;case`jump2`:Y.jump(!0),r.ring(n.x,n.y,n.s,1.6,8382975,.22,`ambient`);break;case`land`:Y.land(),r.burst(n.x,n.y+.1,n.s,5,15261904,{speed:4,life:.3,size:.32,cat:`ambient`});break;case`slide`:Y.slide();break;case`slideJump`:Dm(15,i),this.addMeter(10),this.addScore(40),r.popup(`NICE!`,n.x,n.y+2.3,n.s+2,.8),this.trigger(`slideJump`);break;case`bhop`:this.addMeter(6),r.ring(n.x,n.y+.1,n.s,1.8,16765503,.2,`ambient`);break;case`railEnter`:Y.grindStart(),r.burst(n.x,n.y,n.s,8,16762458,{speed:7,life:.3}),this.addMeter(4);break;case`railExit`:Y.grindStop(),this.addMeter(15),this.addScore(60),this.trigger(`railExit`);break;case`hoverStart`:Y.jetpack(!0);break;case`hoverStop`:Y.jetpack(!1);break;case`slamStart`:Y.slide();break;case`slamLand`:this.combat.nova(4.8,45*this.dmgMul(),16756810),Y.explosion(!1),this.shake=Math.min(.6,this.shake+.4),r.popup(`POW!`,n.x,n.y+1.6,n.s+1.5,1.1),Dm(30,i);break;case`dash`:this.dashCd=t.dashCooldown*this.ev.stats.dashCd,Y.slide(),r.ring(n.x,n.y+1,n.s,2.4,16777215,.2,`hit`,!0),r.burst(n.x,n.y+1,n.s,8,this.trailA,{speed:6,life:.3,fwd:-8});break;case`fall`:this.layout.biome===`foundry`&&(r.ring(n.x,t.lavaY+.3,n.s,3.2,16747040,.35,`hit`,!0),r.burst(n.x,t.lavaY+.4,n.s,14,16752682,{speed:7,life:.5})),this.hurt(20,`fall`),this.phase===`play`&&(this.respawn(),this.invulnT=1.5)}}updateRace(){let e=[{name:`YOU`,delta:0,you:!0}];for(let t of this.ghosts){if(!t.on)continue;let n=tf(t.data,this.sector,this.st.s);t.delta=isFinite(n)?n-this.secT:(this.st.s-t.frame.z)/Math.max(8,this.st.speed),e.push({name:t.data.name,delta:t.delta,you:!1})}e.sort((e,t)=>e.delta-t.delta),this.hud.race=e}sectorClear(){if(this.finished)return;this.finished=!0,this.sectorsCleared++,this.recorder.endSector(this.secT);let e=Math.max(0,Math.round((62-this.secT)*25));this.addScore(500+e),Y.sectorClear(),this.banner(this.layout.boss?`FURNACE KING DOWN!`:`SECTOR CLEAR!`,`TIME ${this.secT.toFixed(2)}s  ·  +${Math.round((500+e)*wg[this.tier])}`,2.4),this.combat.magnetAll(200),this.setPhase(`clear`)}openWorkshop(){let e=this,n=this.perks,r=this.host.save,i=this.mode===`endless`?this.depth:this.sector,o=this.mode===`endless`?0:this.sector;this.shopRng=new td(this.plan.shopSeeds[o]??1);let s=()=>{this.offers=th(this.shopRng,n.shopSlots,i,r.addedBazarItems,n.corruptedInShop||i>=3,a)};s(),this.rerolls=0,this.workshopT=t.workshopSeconds;let c=e=>(e.area===`grid`?this.grid[e.index]:this.bench[e.index])??null,l=(e,t)=>{e.area===`grid`?this.grid[e.index]=t:this.bench[e.index]=t},u=e=>e.area===`grid`&&(e.index===5||this.grid[e.index]===`core`),d=e=>e.index>=0&&e.index<(e.area===`grid`?16:6),f=``;if(this.mode===`endless`)f=`NEXT: RUNG ${this.depth+2}`;else{let e=this.plan.biomes[this.sector+1];f=this.sector+1>=5?`NEXT: BOSS · STORM FOUNDRY`:`NEXT: SECTOR ${this.sector+2} · ${e?Ed[e]:``}`}let p=this.mode===`endless`?`RUNG ${this.depth+1} CLEARED`:`SECTOR ${this.sector+1} CLEARED`;this.workshop={get grid(){return e.grid},get bench(){return e.bench},get offers(){return e.offers},get cells(){return e.cells},get eval(){return e.ev},get hp(){return Math.ceil(e.hp)},get maxHp(){return e.maxHp},get timeLeft(){return e.workshopT},title:`WORKSHOP CAR`,subtitle:p,nextLabel:f,get rerollCost(){return n.freeReroll&&e.rerolls===0?0:a.rerollCost+e.rerolls},get adRerollAvailable(){return!e.adRerollUsed},healCost:4,weekly:this.weekly,move:(e,t)=>{if(!d(e)||!d(t)||u(e)||u(t)||e.area===t.area&&e.index===t.index)return!1;let n=c(e);return n?(l(e,c(t)),l(t,n),this.applyBuild(!1),!0):!1},sell:e=>!d(e)||u(e)||!c(e)?!1:(l(e,null),this.cells++,this.applyBuild(!1),!0),buy:e=>{let t=this.offers[e],n=this.bench.indexOf(null);return!t||t.sold||this.cells<t.price||n<0||!qm[t.chipId]?!1:(this.cells-=t.price,t.sold=!0,this.bench[n]=t.chipId,!0)},reroll:()=>{let e=this.workshop.rerollCost;return this.cells<e?!1:(this.cells-=e,this.rerolls++,s(),!0)},adReroll:async()=>this.adRerollUsed||!await this.host.showAd(`FREE BAZAR REROLL`)||this.phase!==`workshop`?!1:(this.adRerollUsed=!0,s(),!0),heal:()=>this.cells<4||this.hp>=this.maxHp?!1:(this.cells-=4,this.heal(30),!0),depart:()=>this.depart()},this.setPhase(`workshop`),this.syncMusic()}depart(){this.phase===`workshop`&&(this.workshop=null,this.applyBuild(!1),this.mode===`endless`?(this.depth++,this.plan=ep(this.endlessSeed,this.depth),this.rmods=Kf(this.plan.mutators),this.hud.mutators=this.plan.mutators.map(e=>Uf[e]?.icon??`?`),this.applyBuild(!1),this.loadSector(0)):this.loadSector(this.sector+1))}finish(e){let t=this.host.save,n=this.plan;this.finished||this.recorder.endSector(0);let r=e&&this.mode!==`endless`,i=this.recorder.finish(r?this.totalT:0,Math.round(this.score)),o=this.perks,s=this.mode===`endless`?this.sectorsCleared:0,c=Math.max(1,Math.floor((this.score/1200+this.sectorsCleared*4+(this.bossKilled?25:0))*o.wrenchMul*a.balance.wrenchGain)),l=this.mode===`daily`&&o.ghostSlots>=3?1.15:1,u=Math.round(hh(Math.round(this.score),this.sectorsCleared,this.bossKilled)*a.balance.xpGain*l),d=``,f=!1;if(this.mode===`daily`){let e=t.daily[n.seed];if(!e||this.score>e.score){try{d=Zd(i)}catch{d=``}t.daily[n.seed]={score:Math.round(this.score),time:r?this.totalT:0,ghost:d},f=!0}else d=e.ghost}t.wrenches+=c,t.pass.xp+=u,t.stats.runs++,t.stats.kills+=this.kills,this.score>t.stats.bestScore&&(t.stats.bestScore=Math.round(this.score),this.mode!==`daily`&&(f=!0)),s>t.stats.bestEndless&&(t.stats.bestEndless=s),Lm(t);let p=this.ghosts.map(e=>({name:e.data.name,time:e.data.totalTime,score:e.data.score,you:!1}));p.push({name:`YOU`,time:r?this.totalT:0,score:Math.round(this.score),you:!0}),p.sort((e,t)=>(e.time>0?e.time:1e9)-(t.time>0?t.time:1e9)||t.score-e.score),this.result={mode:this.mode,seed:n.seed,victory:e,score:Math.round(this.score),time:this.totalT,sectors:this.sectorsCleared,kills:this.kills,bossKilled:this.bossKilled,depth:s,wrenches:c,xp:u,newBest:f,ghostCode:d,race:p},this.setPhase(`done`)}update(e){if(e*=this.debug.timeScale,this.time+=e,this.phaseT+=e,this.phase===`intro`||this.phase===`play`||this.phase===`clear`||this.phase===`dying`){for(this.acc=Math.min(this.acc+e*(this.phase===`dying`?.35:1),.1*Math.max(1,this.debug.timeScale));this.acc>=t.dt;)if(this.step(t.dt),this.acc-=t.dt,this.phase!==`intro`&&this.phase!==`play`&&this.phase!==`clear`&&this.phase!==`dying`){this.acc=0;break}}switch(this.phase){case`intro`:this.phaseT>.9&&this.setPhase(`play`);break;case`clear`:this.phaseT>2.4&&(this.mode!==`endless`&&this.sector>=this.plan.sectors-1?this.finish(!0):this.openWorkshop());break;case`workshop`:this.workshopT-=e,this.workshopT<=0&&this.depart();break;case`dying`:this.phaseT>1.3&&this.setPhase(`dead`)}this.hud.bannerT=Math.max(0,this.hud.bannerT-e),this.hurtFlash=Math.max(0,this.hurtFlash-e*2.2),this.shake*=Math.exp(-e*7),this.syncHud()}syncHud(){let e=this.hud,n=this.st;e.hp=Math.max(0,Math.ceil(this.hp)),e.maxHp=this.maxHp,e.scratch=this.scratch,e.shield=this.shieldT>0,e.hurtFlash=this.hurtFlash,e.progress=this.layout.boss?0:rd(n.s/this.layout.finishS,0,1),e.score=Math.round(this.score),e.cells=this.cells,e.mult=wg[this.tier],e.tier=this.tier,e.adrenaline=this.tier>=4?1:rd((this.meter-this.tier*20)/20,0,1),e.ammo=this.ammo,e.mag=this.mag,e.reloading=this.reloadT>=0,e.reloadP=this.reloadT>=0?rd(this.reloadT/this.reloadDur,0,1):0,e.missed=this.reloadMissed,e.overload=this.overloadT>0?this.overloadT/this.overloadDur:0,e.skill=this.reloadT>=0?`overload`:`dash`,e.dashCd=this.dashCd/(t.dashCooldown*this.ev.stats.dashCd),e.fuel=rd(n.fuel/this.mmods.fuelMax,0,1),e.hovering=n.hovering;let r=this.combat.boss;e.bossHp=r?rd(r.hp/r.maxHp,0,1):0,e.bossPhase=this.combat.bossPhase,e.time=this.secT,e.speed=n.speed,e.hint=``,this.phase===`play`&&(!this.host.save.seenIntro&&this.sector===0&&this.secT<7?e.hint=this.host.input.lastTouch||`ontouchstart`in window?`DRAG = STEER · SWIPE UP = JUMP · SWIPE DOWN = SLIDE`:`A/D STEER · SPACE JUMP · S SLIDE · E OVERLOAD`:this.reloadT>=0&&!this.firstOverload&&!this.reloadMissed&&(e.hint=`TAP ⚡ IN THE BRIGHT ZONE!`))}render(e){let n=this.host.renderer,r=this.host.fx,i=this.st,a=n.camera,o=rd(this.acc/t.dt,0,1),s=id(this.px,i.x,o),c=id(this.py,i.y,o),l=id(this.ps,i.s,o),u=i.speed>t.runSpeed*this.mmods.speedMul+2.5||i.dashT>0;this.boostAmt+=(+!!u-this.boostAmt)*Math.min(1,e*6),this.camX+=(s*(n.width<n.height?.87:.72)-this.camX)*Math.min(1,e*9),this.camY+=(c-this.camY)*Math.min(1,e*(c>this.camY?6:9)),this.roll+=(rd(-i.vx*.011,-.09,.09)-this.roll)*Math.min(1,e*7);let d=72-7*this.boostAmt+(this.overloadT>0?2:0);this.fov+=(d-this.fov)*Math.min(1,e*8),Math.abs(a.fov-this.fov)>.01&&(a.fov=this.fov,a.updateProjectionMatrix());let f=Math.min(.6,this.shake),p=(Math.random()-.5)*f*.5,m=(Math.random()-.5)*f*.5,h=+!!this.layout.boss;this.tq+=((h||i.mode===`grind`?1:.8)-this.tq)*Math.min(1,e*3.2),this.slq+=(+(i.mode===`slide`)-this.slq)*Math.min(1,e*12);let g=this.slq,_=this.tq;if(this.phase===`workshop`||this.phase===`dead`||this.phase===`done`){let e=this.time*.35;a.position.set(s+Math.sin(e)*5.5,c+2.6,-l+Math.cos(e)*5.5),a.up.set(0,1,0),a.lookAt(s,c+1.2,-l)}else{a.position.set(id(this.camX+_*2.3,s-.2,g)+p,this.camY+3.05-_*.4-g*1.72+h*.45+m,-l+5.6-_*.4-g*1.2+h*1),a.up.set(Math.sin(this.roll),Math.cos(this.roll),0),Og.set(id(s*.55+this.camX*.25-_*1,s-.75,g)+h*1.1,this.camY+1.75-g*.62+h*1.2,-l-9),a.lookAt(Og),a.updateMatrixWorld(!0),kg.set(s,c+1,-l).applyMatrix4(a.matrixWorldInverse);let e=Math.max(.5,-kg.z)*Math.tan(a.fov*Math.PI/360)*a.aspect,t=kg.x<-.6*e?kg.x+Ag*e:kg.x>Ag*e?kg.x-Ag*e:0;t!==0&&(a.position.x+=t,Og.x+=t,a.lookAt(Og))}r.begin(a,n.height,a.fov);let v=this.player;v.root.position.set(s,c,-l);let y=this.phase===`workshop`||this.phase===`done`;v.update(e,y?`run`:i.mode,y?0:i.speed,i.vx,i.vy,this.time),v.setHurt(this.hurtFlash>.5?.8:0),this.phase!==`dying`&&this.phase!==`dead`&&(v.root.visible=!(this.invulnT>0&&this.phase===`play`&&Math.floor(this.time*20)%2==0&&i.dashT<=0));let b=this.world.groundAt(s,l,c+.5);if(b!==-1/0&&v.root.visible&&r.shadow(s,b,l,.55),this.shieldT>0&&this.tick%3==0&&r.spark(s+Math.sin(this.time*9)*.8,c+1+Math.cos(this.time*7)*.6,l+Math.cos(this.time*9)*.8,0,0,i.speed,8382975,.2,.3,0,!0),this.overloadT>0&&(r.streak(s-.4,c+.2,l-.6,s-.4,c+.2,l-2.6,8382975,.18,!1),r.streak(s+.4,c+.2,l-.6,s+.4,c+.2,l-2.6,8382975,.18,!1)),this.beamT>0&&this.beamTarget&&this.beamTarget.alive){let e=this.beamTarget;r.streak(s+.3,c+1.2,l+.7,e.x,e.y+e.cy,e.s+e.hs,this.beamColor,.3+this.beamRamp*.25)}for(let t of this.ghosts){if(!t.on)continue;let n=this.phase===`play`||this.phase===`intro`||this.phase===`clear`;if(!ef(t.data,this.sector,this.secT,t.frame)){t.char.root.visible=!1;continue}let i=t.frame,a=i.z-l;t.char.root.visible=n&&a>-12&&a<150,t.char.root.visible&&(t.char.root.position.set(i.x,i.y,-i.z),t.char.setAlpha(.66*rd((Math.hypot(i.x-s,a,i.y-c)-.8)/3.2,.1,1)*(a<0?rd(1+a/2.2,.1,1):1)),t.char.update(e,Pd[i.state]??`run`,12,0,0,this.time+t.trail),Math.random()<.3&&r.spark(i.x,i.y+.2,i.z-.3,0,.5,-2,t.trail,.4,.26,0))}this.combat.draw(this.time),r.update(e*this.debug.timeScale);let x=this.combat.skyFlash;this.layout.biome===`foundry`&&Math.random()<e*.25&&(x=Math.max(x,.8)),this.view.update(l,this.time,x,n.lite),n.hurtVignette=Math.max(this.hurtFlash,this.scratch>.5?.25+.15*Math.sin(this.time*7):0)}dispose(){let e=this.host.renderer;Y.grindStop(),Y.jetpack(!1),Y.heartbeat(!1),this.view.dispose(),this.view.root.removeFromParent(),this.combat.dispose(),this.player.root.removeFromParent(),this.player.dispose();for(let e of this.ghosts)e.char.root.removeFromParent(),e.char.dispose();this.host.fx.clear(),e.hurtVignette=0,e.camera.up.set(0,1,0),e.camera.fov!==72&&(e.camera.fov=72,e.camera.updateProjectionMatrix()),this.host.input.enabled=!1}},Mg={light:[.5,.72,.48],shadow:9069224,fog:15243882,fogNear:60,fogFar:260,under:2759226,ink:1183260,vignette:.36,vigColor:1706536,punch:.2},Ng=[[`GHOST-77`,.93],[`RIVET-9`,.74],[`KESTREL`,.52]],Pg=class{ui;save;renderer;fx=new Gh;input;run=null;state=`hub`;paused=!1;fps=60;autoPause=!0;hubView=new Vf;hubSky=qp({top:2830214,mid:9063070,hor:16754778,cloud:16765088,cloudSh:11033230,cloudAmt:.46});hubChar=null;hubSkin=``;hubUI=null;hud;workshopUI=null;death=null;pauseUI=null;results=null;lastPhase=``;mode=`daily`;time=0;last=0;unlocked=!1;focus=-1;tab=`play`;camPos=new B(10,9,18);camTgt=new B(0,1.5,-10);goalPos=new B;goalTgt=new B;viewOff=.2;rivalCache=null;host;_v=new B;constructor(e,t,n){this.ui=t,this.save=n,this.renderer=new _f(e),this.input=new Yh(e),this.renderer.scene.add(this.fx.group),this.hud=new Mm(t,()=>this.input.press(`skill`),()=>this.togglePause()),this.hud.show(!1);let r=this,i=nd(),a=Qf(i);this.host={get save(){return r.save},persist:()=>this.persist(),start:e=>this.startRun(e),focusCar:e=>{this.focus=e},tabChanged:e=>{this.tab=e},showAd:e=>this.showAd(e),dailyKey:i,dailyMutators:a.mutators.map(e=>Uf[e]).filter(e=>!!e),dailyBiomes:a.biomes.map(e=>Ed[e]),weekly:u(),leaderboard:()=>this.leaderboard(),shareCode:()=>this.save.daily[i]?.ghost||null,importFriend:(e,t)=>this.importFriend(e,t)};let o=()=>{this.unlocked||(this.unlocked=!0,Y.unlock(),this.applySettings(),this.state===`hub`&&Y.setMusicState(`hub`))};window.addEventListener(`pointerdown`,o,{capture:!0}),window.addEventListener(`keydown`,o,{capture:!0}),document.addEventListener(`visibilitychange`,()=>{document.hidden?this.autoPause&&(Y.suspend(),this.run&&this.run.phase===`play`&&!this.paused&&this.togglePause()):Y.resume()}),window.addEventListener(`resize`,()=>this.resize()),window.addEventListener(`orientationchange`,()=>this.resize()),this.applySettings(),this.resize(),this.enterHub(`play`),this.last=performance.now(),requestAnimationFrame(this.frame)}applySettings(){let e=this.save;Y.setVolumes(e.settings.music,e.settings.sfx),Y.setVoiceFilter(Qp(e.cosmetics.skin).voice),this.fx.popStyle=em(e.cosmetics.pop).style,this.hubView.setLevels(yf.map(t=>xf(e,t.id))),this.renderer.quality!==e.settings.quality&&(this.renderer.quality=e.settings.quality,this.resize()),this.state===`hub`&&this.hubSkin!==e.cosmetics.skin&&this.buildHubChar()}persist(){Lm(this.save),this.applySettings()}resize(){this.renderer.resize(window.innerWidth,window.innerHeight)}showAd(e){return vh(this.ui,e,this.save.adFree)}buildHubChar(){this.hubChar&&(this.hubChar.root.removeFromParent(),this.hubChar.dispose()),this.hubSkin=this.save.cosmetics.skin,this.hubChar=new gm(Qp(this.hubSkin).colors),this.hubChar.root.position.set(4.9,-.3,5.2),this.hubChar.root.rotation.y=Math.PI*.82,this.hubView.root.add(this.hubChar.root)}enterHub(e){this.state=`hub`,this.paused=!1,this.input.enabled=!1,this.hud.show(!1),this.renderer.scene.add(this.hubView.root),this.renderer.scene.add(this.hubSky.mesh),vf(this.renderer,Mg),this.renderer.camera.up.set(0,1,0),this.buildHubChar(),this.applySettings(),this.focus=-1,this.hubUI=new _h(this.ui,this.host),this.tab=`play`,e!==`play`&&this.hubUI.setTab(e),this.unlocked&&Y.setMusicState(`hub`)}leaveHub(){this.hubUI?.dispose(),this.hubUI=null,this.hubView.root.removeFromParent(),this.hubSky.mesh.removeFromParent(),this.renderer.camera.clearViewOffset(),this.renderer.camera.updateProjectionMatrix()}updateHub(e){let t=this.renderer.camera,n=this.time;this.hubView.update(e,n),this.hubSky.mat.uniforms.uTime.value=n,this.hubChar?.update(e,`run`,0,0,0,n);let r=.2;if(this.tab===`train`&&this.focus>=0)this.hubView.carCenter(this.focus,this._v),this.goalTgt.copy(this._v),this.goalPos.set(this._v.x+8.6+Math.sin(n*.5)*.6,this._v.y+3.2,this._v.z+5.4);else if(this.tab===`shop`||this.tab===`loadout`)this.goalTgt.set(4.9,.7,5.2),this.goalPos.set(7+Math.sin(n*.6)*.6,1.6,12.3),r=.235;else{let e=Math.sin(n*.22);this.goalTgt.set(-.4,2.2,-7+e*2),this.goalPos.set(13.5+e*1.5,9.5,20),this.tab!==`play`&&this.tab!==`train`&&(r=.34)}let i=1-Math.exp(-e*3.2);this.camPos.lerp(this.goalPos,i),this.camTgt.lerp(this.goalTgt,i),this.viewOff+=(r-this.viewOff)*i,t.position.copy(this.camPos),t.lookAt(this.camTgt),t.fov!==60&&(t.fov=60);let a=this.renderer.width,o=this.renderer.height;t.setViewOffset(a,o,0,Math.round(o*this.viewOff),a,o),this.fx.begin(t,o,t.fov),this.fx.update(e)}leaderboard(){let e=this.host.dailyKey;if(!this.rivalCache||this.rivalCache.key!==e){let t=Qf(e),n=Kf(t.mutators),r=[];for(let e=0;e<t.sectors;e++)r.push(tp(t,e,n));let i=ed(t.seed);this.rivalCache={key:e,rows:Ng.map(([e,n])=>{let a=nf(e,r,n,i,t.seed);return{name:e,time:a.totalTime,score:a.score,you:!1}})}}let t=this.rivalCache.rows.slice(),n=this.save.daily[e];n&&t.push({name:`YOU`,time:n.time,score:n.score,you:!0});for(let n of this.save.friends){let r=$d(n.code);r&&r.seed===e&&t.push({name:n.name||r.name,time:r.totalTime,score:r.score,you:!1})}return t.sort((e,t)=>(e.time>0?e.time:1e9)-(t.time>0?t.time:1e9)),t}importFriend(e,t){if(!t)return`PASTE A CODE FIRST`;let n=$d(t);if(!n)return`INVALID GHOST CODE`;if(n.seed!==this.host.dailyKey)return`CODE IS FOR ${n.seed}, NOT TODAY`;let r=(e||n.name||`FRIEND`).toUpperCase().slice(0,10),i=this.save.friends.filter(e=>e.name!==r);return i.length>=5?`FRIEND LIST FULL (5)`:(i.push({name:r,code:t}),this.save.friends=i,null)}startRun(e){this.clearOverlays(),this.state===`hub`&&this.leaveHub(),this.run&&=(this.run.dispose(),null),this.mode=e,this.fx.prewarm(this.renderer.three),this.state=`run`,this.paused=!1;let t=this.renderer.camera;t.clearViewOffset(),t.fov=72,t.updateProjectionMatrix(),this.fx.clear(),this.lastPhase=``,this.run=new jg({renderer:this.renderer,fx:this.fx,input:this.input,save:this.save,onPhase:()=>{},showAd:e=>this.showAd(e)},e),this.hud.show(!0),this.hud.prewarm(),this.hud.update(this.run.hud)}clearOverlays(){this.workshopUI?.dispose(),this.workshopUI=null,this.death?.dispose(),this.death=null,this.pauseUI?.dispose(),this.pauseUI=null,this.results?.dispose(),this.results=null}endRunToHub(e){this.clearOverlays(),this.run&&=(this.run.dispose(),null),this.enterHub(e)}togglePause(){let e=this.run;e&&this.state===`run`&&(this.paused?(this.paused=!1,this.pauseUI?.dispose(),this.pauseUI=null,this.input.reset(),this.input.enabled=e.phase===`play`||e.phase===`intro`,Y.resume()):(e.phase===`play`||e.phase===`intro`)&&(this.paused=!0,this.input.enabled=!1,Y.grindStop(),Y.jetpack(!1),this.pauseUI=new bh(this.ui,this.save,()=>this.togglePause(),()=>{this.paused=!1,this.pauseUI?.dispose(),this.pauseUI=null,e.endRun()},()=>Lm(this.save))))}onPhase(e,t){if(this.hud.show(t===`intro`||t===`play`||t===`clear`||t===`dying`),t!==`workshop`&&this.workshopUI&&(this.workshopUI.dispose(),this.workshopUI=null),t!==`dead`&&this.death&&(this.death.dispose(),this.death=null),t===`workshop`&&e.workshop&&!this.workshopUI&&(this.workshopUI=new kh(this.ui,e.workshop)),t===`dead`){let t=!1;this.death=new yh(this.ui,e.canRevive,this.save.adFree,()=>{t||(t=!0,this.showAd(`1 revive at 50% HP`).then(n=>{t=!1,n&&this.run===e&&e.phase===`dead`?e.revive():n||Tm(`NO REWARD — AD SKIPPED`)}))},()=>e.endRun())}t===`done`&&e.result&&(this.save.seenIntro=!0,Lm(this.save),this.rivalCache=null,this.results=new xh(this.ui,e.result,this.save,()=>this.startRun(this.mode),e=>this.endRunToHub(e)))}advance(e){let t=this.run;if(t){for(let n=0;n<e&&(t.update(1/60),this.fx.update(1/60),t.phase!==this.lastPhase&&(this.lastPhase=t.phase,this.onPhase(t,t.phase)),this.run===t);n+=1/60);this.hud.update(t.hud)}}frame=e=>{requestAnimationFrame(this.frame);let t=(e-this.last)/1e3;this.last=e,t>0&&t<1&&(this.fps+=(1/t-this.fps)*.05),this.paused||this.renderer.govern(t);let n=Math.min(.05,Math.max(0,t));if(this.time+=n,this.input.takePause()&&this.togglePause(),this.state===`hub`)this.updateHub(n);else if(this.run){let e=this.run;this.paused||e.update(n),e.phase!==this.lastPhase&&(this.lastPhase=e.phase,this.onPhase(e,e.phase)),this.run===e&&(e.render(this.paused?0:n),this.hud.update(e.hud),this.workshopUI?.tick())}this.renderer.render()};debugState(){let e=this.run;return{state:this.state,paused:this.paused,fps:Math.round(this.fps),scale:+this.renderer.scale.toFixed(2),lite:this.renderer.lite,tab:this.tab,phase:e?.phase??null,sector:e?.sector??null,depth:e?.depth??null,s:e?Math.round(e.st.s):null,x:e?+e.st.x.toFixed(2):null,y:e?+e.st.y.toFixed(2):null,mode:e?.st.mode??null,hp:e?.hud.hp??null,score:e?.hud.score??null,cells:e?.hud.cells??null,enemies:e?e.combat.liveEnemies():null,boss:e?.hud.boss??null,bossHp:e?.hud.bossHp??null,result:e?.result?{victory:e.result.victory,score:e.result.score,time:+e.result.time.toFixed(1),wrenches:e.result.wrenches,xp:e.result.xp,ghost:e.result.ghostCode.length}:null,wrenches:this.save.wrenches,xp:this.save.pass.xp,calls:this.renderer.three.info.render.calls,tris:this.renderer.three.info.render.triangles}}};function Fg(){typeof window<`u`&&typeof navigator<`u`&&`serviceWorker`in navigator&&(window.Capacitor||(location.protocol===`http:`||location.protocol===`https:`)&&window.addEventListener(`load`,()=>{navigator.serviceWorker.register(`./sw.js`).catch(e=>{console.info(`[pwa] service worker registration skipped`,e)})}))}async function Ig(){let e=document.getElementById(`game`),t=document.getElementById(`ui`);await Promise.all([s(),Vl()]);let n=new Pg(e,t,Im());Fg(),window.__RB={game:n,start:(e=`daily`)=>n.startRun(e),state:()=>n.debugState(),advance:e=>n.advance(e),autopilot:(e=!0)=>{n.run&&(n.run.debug.autopilot=e)},god:(e=!0)=>{n.run&&(n.run.debug.god=e)},timeScale:(e=1)=>{n.run&&(n.run.debug.timeScale=e)},autoPause:e=>{n.autoPause=e},dynRes:e=>{n.renderer.dynRes=e},load:(e=1)=>{n.renderer.loadMul=Math.max(1,Math.floor(e))}},new URLSearchParams(location.search).has(`bench`)&&f(n)}Ig();