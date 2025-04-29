function Dd(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.copilotFlow=!1;window.Vaadin.featureFlags.copilotI18n=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;var Sy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Od={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ao=Symbol.for("react.element"),Bp=Symbol.for("react.portal"),Hp=Symbol.for("react.fragment"),Wp=Symbol.for("react.strict_mode"),Qp=Symbol.for("react.profiler"),Kp=Symbol.for("react.provider"),Gp=Symbol.for("react.context"),qp=Symbol.for("react.forward_ref"),Yp=Symbol.for("react.suspense"),Xp=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),Bu=Symbol.iterator;function Zp(e){return e===null||typeof e!="object"?null:(e=Bu&&e[Bu]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Id=Object.assign,Fd={};function Mr(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Ad}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ud(){}Ud.prototype=Mr.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Ad}var xs=gs.prototype=new Ud;xs.constructor=gs;Id(xs,Mr.prototype);xs.isPureReactComponent=!0;var Hu=Array.isArray,Vd=Object.prototype.hasOwnProperty,ys={current:null},Bd={key:!0,ref:!0,__self:!0,__source:!0};function Hd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Vd.call(t,r)&&!Bd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Ao,type:e,key:i,ref:l,props:o,_owner:ys.current}}function eh(e,t){return{$$typeof:Ao,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ws(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ao}function th(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Wu=/\/+/g;function Il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?th(""+e.key):t.toString(36)}function bi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Ao:case Bp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Il(l,0):r,Hu(o)?(n="",e!=null&&(n=e.replace(Wu,"$&/")+"/"),bi(o,t,n,"",function(u){return u})):o!=null&&(ws(o)&&(o=eh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Wu,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Hu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Il(i,a);l+=bi(i,t,n,s,o)}else if(s=Zp(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Il(i,a++),l+=bi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ni(e,t,n){if(e==null)return e;var r=[],o=0;return bi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Si={transition:null},rh={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Si,ReactCurrentOwner:ys};function Wd(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:ni,forEach:function(e,t,n){ni(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ni(e,function(){t++}),t},toArray:function(e){return ni(e,function(t){return t})||[]},only:function(e){if(!ws(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Mr;Y.Fragment=Hp;Y.Profiler=Qp;Y.PureComponent=gs;Y.StrictMode=Wp;Y.Suspense=Yp;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;Y.act=Wd;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Id({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ys.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Vd.call(t,s)&&!Bd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ao,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:Gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kp,_context:e},e.Consumer=e};Y.createElement=Hd;Y.createFactory=function(e){var t=Hd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:qp,render:e}};Y.isValidElement=ws;Y.lazy=function(e){return{$$typeof:Jp,_payload:{_status:-1,_result:e},_init:nh}};Y.memo=function(e,t){return{$$typeof:Xp,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Si.transition;Si.transition={};try{e()}finally{Si.transition=t}};Y.unstable_act=Wd;Y.useCallback=function(e,t){return Ze.current.useCallback(e,t)};Y.useContext=function(e){return Ze.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};Y.useEffect=function(e,t){return Ze.current.useEffect(e,t)};Y.useId=function(){return Ze.current.useId()};Y.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return Ze.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};Y.useRef=function(e){return Ze.current.useRef(e)};Y.useState=function(e){return Ze.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return Ze.current.useTransition()};Y.version="18.3.1";Od.exports=Y;var E=Od.exports;const oh=Md(E),ih=Dd({__proto__:null,default:oh},[E]);var Qd={exports:{}},ft={},Kd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,M){var H=R.length;R.push(M);e:for(;0<H;){var te=H-1>>>1,oe=R[te];if(0<o(oe,M))R[te]=M,R[H]=oe,H=te;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var M=R[0],H=R.pop();if(H!==M){R[0]=H;e:for(var te=0,oe=R.length,Le=oe>>>1;te<Le;){var Ie=2*(te+1)-1,xt=R[Ie],_e=Ie+1,Fe=R[_e];if(0>o(xt,H))_e<oe&&0>o(Fe,xt)?(R[te]=Fe,R[_e]=H,te=_e):(R[te]=xt,R[Ie]=H,te=Ie);else if(_e<oe&&0>o(Fe,H))R[te]=Fe,R[_e]=H,te=_e;else break e}}return M}function o(R,M){var H=R.sortIndex-M.sortIndex;return H!==0?H:R.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,c=null,f=3,w=!1,S=!1,y=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=R)r(u),M.sortIndex=M.expirationTime,t(s,M);else break;M=n(u)}}function k(R){if(y=!1,v(R),!S)if(n(s)!==null)S=!0,tt(T);else{var M=n(u);M!==null&&gt(k,M.startTime-R)}}function T(R,M){S=!1,y&&(y=!1,h(g),g=-1),w=!0;var H=f;try{for(v(M),c=n(s);c!==null&&(!(c.expirationTime>M)||R&&!W());){var te=c.callback;if(typeof te=="function"){c.callback=null,f=c.priorityLevel;var oe=te(c.expirationTime<=M);M=e.unstable_now(),typeof oe=="function"?c.callback=oe:c===n(s)&&r(s),v(M)}else r(s);c=n(s)}if(c!==null)var Le=!0;else{var Ie=n(u);Ie!==null&&gt(k,Ie.startTime-M),Le=!1}return Le}finally{c=null,f=H,w=!1}}var $=!1,N=null,g=-1,U=5,D=-1;function W(){return!(e.unstable_now()-D<U)}function X(){if(N!==null){var R=e.unstable_now();D=R;var M=!0;try{M=N(!0,R)}finally{M?fe():($=!1,N=null)}}else $=!1}var fe;if(typeof m=="function")fe=function(){m(X)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Ae=se.port2;se.port1.onmessage=X,fe=function(){Ae.postMessage(null)}}else fe=function(){C(X,0)};function tt(R){N=R,$||($=!0,fe())}function gt(R,M){g=C(function(){R(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){S||w||(S=!0,tt(T))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var H=f;f=M;try{return R()}finally{f=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,M){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=f;f=R;try{return M()}finally{f=H}},e.unstable_scheduleCallback=function(R,M,H){var te=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?te+H:te):H=te,R){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=H+oe,R={id:d++,callback:M,priorityLevel:R,startTime:H,expirationTime:oe,sortIndex:-1},H>te?(R.sortIndex=H,t(u,R),n(s)===null&&R===n(u)&&(y?(h(g),g=-1):y=!0,gt(k,H-te))):(R.sortIndex=oe,t(s,R),S||w||(S=!0,tt(T))),R},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(R){var M=f;return function(){var H=f;f=M;try{return R.apply(this,arguments)}finally{f=H}}}})(Gd);Kd.exports=Gd;var lh=Kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah=E,mt=lh;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qd=new Set,ho={};function Jn(e,t){Cr(e,t),Cr(e+"Capture",t)}function Cr(e,t){for(ho[e]=t,e=0;e<t.length;e++)qd.add(t[e])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ya=Object.prototype.hasOwnProperty,sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qu={},Ku={};function uh(e){return ya.call(Ku,e)?!0:ya.call(Qu,e)?!1:sh.test(e)?Ku[e]=!0:(Qu[e]=!0,!1)}function ch(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dh(e,t,n,r){if(t===null||typeof t>"u"||ch(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var bs=/[\-:]([a-z])/g;function Ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(bs,Ss);He[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(bs,Ss);He[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(bs,Ss);He[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function ks(e,t,n,r){var o=He.hasOwnProperty(t)?He[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dh(t,n,o,r)&&(n=null),r||o===null?uh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ri=Symbol.for("react.element"),ar=Symbol.for("react.portal"),sr=Symbol.for("react.fragment"),Es=Symbol.for("react.strict_mode"),wa=Symbol.for("react.profiler"),Yd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),js=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),Cs=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),Jd=Symbol.for("react.offscreen"),Gu=Symbol.iterator;function Vr(e){return e===null||typeof e!="object"?null:(e=Gu&&e[Gu]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Fl;function Zr(e){if(Fl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fl=t&&t[1]||""}return`
`+Fl+e}var Ul=!1;function Vl(e,t){if(!e||Ul)return"";Ul=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ul=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Zr(e):""}function mh(e){switch(e.tag){case 5:return Zr(e.type);case 16:return Zr("Lazy");case 13:return Zr("Suspense");case 19:return Zr("SuspenseList");case 0:case 2:case 15:return e=Vl(e.type,!1),e;case 11:return e=Vl(e.type.render,!1),e;case 1:return e=Vl(e.type,!0),e;default:return""}}function ka(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case sr:return"Fragment";case ar:return"Portal";case wa:return"Profiler";case Es:return"StrictMode";case ba:return"Suspense";case Sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xd:return(e.displayName||"Context")+".Consumer";case Yd:return(e._context.displayName||"Context")+".Provider";case js:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Cs:return t=e.displayName||null,t!==null?t:ka(e.type)||"Memo";case an:t=e._payload,e=e._init;try{return ka(e(t))}catch{}}return null}function fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ka(t);case 8:return t===Es?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ph(e){var t=Zd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oi(e){e._valueTracker||(e._valueTracker=ph(e))}function em(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ea(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tm(e,t){t=t.checked,t!=null&&ks(e,"checked",t,!1)}function ja(e,t){tm(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ca(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ca(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ca(e,t,n){(t!=="number"||Di(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function wr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function _a(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(eo(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function nm(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ju(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,om=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function vo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(e){hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),oo[t]=oo[e]})});function im(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||oo.hasOwnProperty(e)&&oo[e]?(""+t).trim():t+"px"}function lm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=im(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var vh=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ta(e,t){if(t){if(vh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ra=null;function _s(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var La=null,br=null,Sr=null;function Zu(e){if(e=Uo(e)){if(typeof La!="function")throw Error(z(280));var t=e.stateNode;t&&(t=hl(t),La(e.stateNode,e.type,t))}}function am(e){br?Sr?Sr.push(e):Sr=[e]:br=e}function sm(){if(br){var e=br,t=Sr;if(Sr=br=null,Zu(e),t)for(e=0;e<t.length;e++)Zu(t[e])}}function um(e,t){return e(t)}function cm(){}var Bl=!1;function dm(e,t,n){if(Bl)return e(t,n);Bl=!0;try{return um(e,t,n)}finally{Bl=!1,(br!==null||Sr!==null)&&(cm(),sm())}}function go(e,t){var n=e.stateNode;if(n===null)return null;var r=hl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var $a=!1;if(Yt)try{var Br={};Object.defineProperty(Br,"passive",{get:function(){$a=!0}}),window.addEventListener("test",Br,Br),window.removeEventListener("test",Br,Br)}catch{$a=!1}function gh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var io=!1,Mi=null,Oi=!1,Na=null,xh={onError:function(e){io=!0,Mi=e}};function yh(e,t,n,r,o,i,l,a,s){io=!1,Mi=null,gh.apply(xh,arguments)}function wh(e,t,n,r,o,i,l,a,s){if(yh.apply(this,arguments),io){if(io){var u=Mi;io=!1,Mi=null}else throw Error(z(198));Oi||(Oi=!0,Na=u)}}function Zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function mm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ec(e){if(Zn(e)!==e)throw Error(z(188))}function bh(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ec(o),e;if(i===r)return ec(o),t;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function fm(e){return e=bh(e),e!==null?pm(e):null}function pm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pm(e);if(t!==null)return t;e=e.sibling}return null}var hm=mt.unstable_scheduleCallback,tc=mt.unstable_cancelCallback,Sh=mt.unstable_shouldYield,kh=mt.unstable_requestPaint,Se=mt.unstable_now,Eh=mt.unstable_getCurrentPriorityLevel,zs=mt.unstable_ImmediatePriority,vm=mt.unstable_UserBlockingPriority,Ai=mt.unstable_NormalPriority,jh=mt.unstable_LowPriority,gm=mt.unstable_IdlePriority,dl=null,At=null;function Ch(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Th,_h=Math.log,zh=Math.LN2;function Th(e){return e>>>=0,e===0?32:31-(_h(e)/zh|0)|0}var li=64,ai=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ii(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=to(a):(i&=l,i!==0&&(r=to(i)))}else l=n&~o,l!==0?r=to(l):i!==0&&(r=to(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),o=1<<n,r|=e[n],t&=~o;return r}function Ph(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rh(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Lt(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=Ph(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function Da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xm(){var e=li;return li<<=1,!(li&4194240)&&(li=64),e}function Hl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Io(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Lh(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Lt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var re=0;function ym(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wm,Ps,bm,Sm,km,Ma=!1,si=[],vn=null,gn=null,xn=null,xo=new Map,yo=new Map,un=[],$h="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nc(e,t){switch(e){case"focusin":case"focusout":vn=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":xo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(t.pointerId)}}function Hr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Uo(t),t!==null&&Ps(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Nh(e,t,n,r,o){switch(t){case"focusin":return vn=Hr(vn,e,t,n,r,o),!0;case"dragenter":return gn=Hr(gn,e,t,n,r,o),!0;case"mouseover":return xn=Hr(xn,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return xo.set(i,Hr(xo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,yo.set(i,Hr(yo.get(i)||null,e,t,n,r,o)),!0}return!1}function Em(e){var t=Mn(e.target);if(t!==null){var n=Zn(t);if(n!==null){if(t=n.tag,t===13){if(t=mm(n),t!==null){e.blockedOn=t,km(e.priority,function(){bm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Oa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ra=r,n.target.dispatchEvent(r),Ra=null}else return t=Uo(n),t!==null&&Ps(t),e.blockedOn=n,!1;t.shift()}return!0}function rc(e,t,n){ki(e)&&n.delete(t)}function Dh(){Ma=!1,vn!==null&&ki(vn)&&(vn=null),gn!==null&&ki(gn)&&(gn=null),xn!==null&&ki(xn)&&(xn=null),xo.forEach(rc),yo.forEach(rc)}function Wr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ma||(Ma=!0,mt.unstable_scheduleCallback(mt.unstable_NormalPriority,Dh)))}function wo(e){function t(o){return Wr(o,e)}if(0<si.length){Wr(si[0],e);for(var n=1;n<si.length;n++){var r=si[n];r.blockedOn===e&&(r.blockedOn=null)}}for(vn!==null&&Wr(vn,e),gn!==null&&Wr(gn,e),xn!==null&&Wr(xn,e),xo.forEach(t),yo.forEach(t),n=0;n<un.length;n++)r=un[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<un.length&&(n=un[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&un.shift()}var kr=en.ReactCurrentBatchConfig,Fi=!0;function Mh(e,t,n,r){var o=re,i=kr.transition;kr.transition=null;try{re=1,Rs(e,t,n,r)}finally{re=o,kr.transition=i}}function Oh(e,t,n,r){var o=re,i=kr.transition;kr.transition=null;try{re=4,Rs(e,t,n,r)}finally{re=o,kr.transition=i}}function Rs(e,t,n,r){if(Fi){var o=Oa(e,t,n,r);if(o===null)ea(e,t,r,Ui,n),nc(e,r);else if(Nh(o,e,t,n,r))r.stopPropagation();else if(nc(e,r),t&4&&-1<$h.indexOf(e)){for(;o!==null;){var i=Uo(o);if(i!==null&&wm(i),i=Oa(e,t,n,r),i===null&&ea(e,t,r,Ui,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ea(e,t,r,null,n)}}var Ui=null;function Oa(e,t,n,r){if(Ui=null,e=_s(r),e=Mn(e),e!==null)if(t=Zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=mm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ui=e,null}function jm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Eh()){case zs:return 1;case vm:return 4;case Ai:case jh:return 16;case gm:return 536870912;default:return 16}default:return 16}}var fn=null,Ls=null,Ei=null;function Cm(){if(Ei)return Ei;var e,t=Ls,n=t.length,r,o="value"in fn?fn.value:fn.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Ei=o.slice(e,1<r?1-r:void 0)}function ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function oc(){return!1}function pt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ui:oc,this.isPropagationStopped=oc,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$s=pt(Or),Fo=ge({},Or,{view:0,detail:0}),Ah=pt(Fo),Wl,Ql,Qr,ml=ge({},Fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ns,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(Wl=e.screenX-Qr.screenX,Ql=e.screenY-Qr.screenY):Ql=Wl=0,Qr=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Ql}}),ic=pt(ml),Ih=ge({},ml,{dataTransfer:0}),Fh=pt(Ih),Uh=ge({},Fo,{relatedTarget:0}),Kl=pt(Uh),Vh=ge({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=pt(Vh),Hh=ge({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=pt(Hh),Qh=ge({},Or,{data:0}),lc=pt(Qh),Kh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=qh[e])?!!t[e]:!1}function Ns(){return Yh}var Xh=ge({},Fo,{key:function(e){if(e.key){var t=Kh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ns,charCode:function(e){return e.type==="keypress"?ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=pt(Xh),Zh=ge({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ac=pt(Zh),ev=ge({},Fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ns}),tv=pt(ev),nv=ge({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),rv=pt(nv),ov=ge({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=pt(ov),lv=[9,13,27,32],Ds=Yt&&"CompositionEvent"in window,lo=null;Yt&&"documentMode"in document&&(lo=document.documentMode);var av=Yt&&"TextEvent"in window&&!lo,_m=Yt&&(!Ds||lo&&8<lo&&11>=lo),sc=" ",uc=!1;function zm(e,t){switch(e){case"keyup":return lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ur=!1;function sv(e,t){switch(e){case"compositionend":return Tm(t);case"keypress":return t.which!==32?null:(uc=!0,sc);case"textInput":return e=t.data,e===sc&&uc?null:e;default:return null}}function uv(e,t){if(ur)return e==="compositionend"||!Ds&&zm(e,t)?(e=Cm(),Ei=Ls=fn=null,ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _m&&t.locale!=="ko"?null:t.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cv[e.type]:t==="textarea"}function Pm(e,t,n,r){am(r),t=Vi(t,"onChange"),0<t.length&&(n=new $s("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ao=null,bo=null;function dv(e){Um(e,0)}function fl(e){var t=mr(e);if(em(t))return e}function mv(e,t){if(e==="change")return t}var Rm=!1;if(Yt){var Gl;if(Yt){var ql="oninput"in document;if(!ql){var dc=document.createElement("div");dc.setAttribute("oninput","return;"),ql=typeof dc.oninput=="function"}Gl=ql}else Gl=!1;Rm=Gl&&(!document.documentMode||9<document.documentMode)}function mc(){ao&&(ao.detachEvent("onpropertychange",Lm),bo=ao=null)}function Lm(e){if(e.propertyName==="value"&&fl(bo)){var t=[];Pm(t,bo,e,_s(e)),dm(dv,t)}}function fv(e,t,n){e==="focusin"?(mc(),ao=t,bo=n,ao.attachEvent("onpropertychange",Lm)):e==="focusout"&&mc()}function pv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(bo)}function hv(e,t){if(e==="click")return fl(t)}function vv(e,t){if(e==="input"||e==="change")return fl(t)}function gv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:gv;function So(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ya.call(t,o)||!Nt(e[o],t[o]))return!1}return!0}function fc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function pc(e,t){var n=fc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fc(n)}}function $m(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$m(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nm(){for(var e=window,t=Di();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Ms(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xv(e){var t=Nm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&$m(n.ownerDocument.documentElement,n)){if(r!==null&&Ms(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=pc(n,i);var l=pc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yv=Yt&&"documentMode"in document&&11>=document.documentMode,cr=null,Aa=null,so=null,Ia=!1;function hc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ia||cr==null||cr!==Di(r)||(r=cr,"selectionStart"in r&&Ms(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),so&&So(so,r)||(so=r,r=Vi(Aa,"onSelect"),0<r.length&&(t=new $s("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=cr)))}function ci(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dr={animationend:ci("Animation","AnimationEnd"),animationiteration:ci("Animation","AnimationIteration"),animationstart:ci("Animation","AnimationStart"),transitionend:ci("Transition","TransitionEnd")},Yl={},Dm={};Yt&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function pl(e){if(Yl[e])return Yl[e];if(!dr[e])return e;var t=dr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dm)return Yl[e]=t[n];return e}var Mm=pl("animationend"),Om=pl("animationiteration"),Am=pl("animationstart"),Im=pl("transitionend"),Fm=new Map,vc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){Fm.set(e,t),Jn(t,[e])}for(var Xl=0;Xl<vc.length;Xl++){var Jl=vc[Xl],wv=Jl.toLowerCase(),bv=Jl[0].toUpperCase()+Jl.slice(1);Cn(wv,"on"+bv)}Cn(Mm,"onAnimationEnd");Cn(Om,"onAnimationIteration");Cn(Am,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(Im,"onTransitionEnd");Cr("onMouseEnter",["mouseout","mouseover"]);Cr("onMouseLeave",["mouseout","mouseover"]);Cr("onPointerEnter",["pointerout","pointerover"]);Cr("onPointerLeave",["pointerout","pointerover"]);Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function gc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function Um(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;gc(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;gc(o,a,u),i=s}}}if(Oi)throw e=Na,Oi=!1,Na=null,e}function ce(e,t){var n=t[Ha];n===void 0&&(n=t[Ha]=new Set);var r=e+"__bubble";n.has(r)||(Vm(t,e,2,!1),n.add(r))}function Zl(e,t,n){var r=0;t&&(r|=4),Vm(n,e,r,t)}var di="_reactListening"+Math.random().toString(36).slice(2);function ko(e){if(!e[di]){e[di]=!0,qd.forEach(function(n){n!=="selectionchange"&&(Sv.has(n)||Zl(n,!1,e),Zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[di]||(t[di]=!0,Zl("selectionchange",!1,t))}}function Vm(e,t,n,r){switch(jm(t)){case 1:var o=Mh;break;case 4:o=Oh;break;default:o=Rs}n=o.bind(null,t,n,e),o=void 0,!$a||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ea(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Mn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}dm(function(){var u=i,d=_s(n),c=[];e:{var f=Fm.get(e);if(f!==void 0){var w=$s,S=e;switch(e){case"keypress":if(ji(n)===0)break e;case"keydown":case"keyup":w=Jh;break;case"focusin":S="focus",w=Kl;break;case"focusout":S="blur",w=Kl;break;case"beforeblur":case"afterblur":w=Kl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=tv;break;case Mm:case Om:case Am:w=Bh;break;case Im:w=rv;break;case"scroll":w=Ah;break;case"wheel":w=iv;break;case"copy":case"cut":case"paste":w=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ac}var y=(t&4)!==0,C=!y&&e==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,v;m!==null;){v=m;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,h!==null&&(k=go(m,h),k!=null&&y.push(Eo(m,k,v)))),C)break;m=m.return}0<y.length&&(f=new w(f,S,null,n,d),c.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",f&&n!==Ra&&(S=n.relatedTarget||n.fromElement)&&(Mn(S)||S[Xt]))break e;if((w||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=u,S=S?Mn(S):null,S!==null&&(C=Zn(S),S!==C||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=u),w!==S)){if(y=ic,k="onMouseLeave",h="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=ac,k="onPointerLeave",h="onPointerEnter",m="pointer"),C=w==null?f:mr(w),v=S==null?f:mr(S),f=new y(k,m+"leave",w,n,d),f.target=C,f.relatedTarget=v,k=null,Mn(d)===u&&(y=new y(h,m+"enter",S,n,d),y.target=v,y.relatedTarget=C,k=y),C=k,w&&S)t:{for(y=w,h=S,m=0,v=y;v;v=rr(v))m++;for(v=0,k=h;k;k=rr(k))v++;for(;0<m-v;)y=rr(y),m--;for(;0<v-m;)h=rr(h),v--;for(;m--;){if(y===h||h!==null&&y===h.alternate)break t;y=rr(y),h=rr(h)}y=null}else y=null;w!==null&&xc(c,f,w,y,!1),S!==null&&C!==null&&xc(c,C,S,y,!0)}}e:{if(f=u?mr(u):window,w=f.nodeName&&f.nodeName.toLowerCase(),w==="select"||w==="input"&&f.type==="file")var T=mv;else if(cc(f))if(Rm)T=vv;else{T=pv;var $=fv}else(w=f.nodeName)&&w.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=hv);if(T&&(T=T(e,u))){Pm(c,T,n,d);break e}$&&$(e,f,u),e==="focusout"&&($=f._wrapperState)&&$.controlled&&f.type==="number"&&Ca(f,"number",f.value)}switch($=u?mr(u):window,e){case"focusin":(cc($)||$.contentEditable==="true")&&(cr=$,Aa=u,so=null);break;case"focusout":so=Aa=cr=null;break;case"mousedown":Ia=!0;break;case"contextmenu":case"mouseup":case"dragend":Ia=!1,hc(c,n,d);break;case"selectionchange":if(yv)break;case"keydown":case"keyup":hc(c,n,d)}var N;if(Ds)e:{switch(e){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ur?zm(e,n)&&(g="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(_m&&n.locale!=="ko"&&(ur||g!=="onCompositionStart"?g==="onCompositionEnd"&&ur&&(N=Cm()):(fn=d,Ls="value"in fn?fn.value:fn.textContent,ur=!0)),$=Vi(u,g),0<$.length&&(g=new lc(g,e,null,n,d),c.push({event:g,listeners:$}),N?g.data=N:(N=Tm(n),N!==null&&(g.data=N)))),(N=av?sv(e,n):uv(e,n))&&(u=Vi(u,"onBeforeInput"),0<u.length&&(d=new lc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=N))}Um(c,t)})}function Eo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=go(e,n),i!=null&&r.unshift(Eo(e,i,o)),i=go(e,t),i!=null&&r.push(Eo(e,i,o))),e=e.return}return r}function rr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=go(n,i),s!=null&&l.unshift(Eo(n,s,a))):o||(s=go(n,i),s!=null&&l.push(Eo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var kv=/\r\n?/g,Ev=/\u0000|\uFFFD/g;function yc(e){return(typeof e=="string"?e:""+e).replace(kv,`
`).replace(Ev,"")}function mi(e,t,n){if(t=yc(t),yc(e)!==t&&n)throw Error(z(425))}function Bi(){}var Fa=null,Ua=null;function Va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ba=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,wc=typeof Promise=="function"?Promise:void 0,Cv=typeof queueMicrotask=="function"?queueMicrotask:typeof wc<"u"?function(e){return wc.resolve(null).then(e).catch(_v)}:Ba;function _v(e){setTimeout(function(){throw e})}function ta(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),wo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);wo(t)}function yn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Ar,jo="__reactProps$"+Ar,Xt="__reactContainer$"+Ar,Ha="__reactEvents$"+Ar,zv="__reactListeners$"+Ar,Tv="__reactHandles$"+Ar;function Mn(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bc(e);e!==null;){if(n=e[Ot])return n;e=bc(e)}return t}e=n,n=e.parentNode}return null}function Uo(e){return e=e[Ot]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function hl(e){return e[jo]||null}var Wa=[],fr=-1;function _n(e){return{current:e}}function de(e){0>fr||(e.current=Wa[fr],Wa[fr]=null,fr--)}function ae(e,t){fr++,Wa[fr]=e.current,e.current=t}var jn={},qe=_n(jn),ot=_n(!1),Hn=jn;function _r(e,t){var n=e.type.contextTypes;if(!n)return jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function it(e){return e=e.childContextTypes,e!=null}function Hi(){de(ot),de(qe)}function Sc(e,t,n){if(qe.current!==jn)throw Error(z(168));ae(qe,t),ae(ot,n)}function Bm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(z(108,fh(e)||"Unknown",o));return ge({},n,r)}function Wi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||jn,Hn=qe.current,ae(qe,e),ae(ot,ot.current),!0}function kc(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=Bm(e,t,Hn),r.__reactInternalMemoizedMergedChildContext=e,de(ot),de(qe),ae(qe,e)):de(ot),ae(ot,n)}var Wt=null,vl=!1,na=!1;function Hm(e){Wt===null?Wt=[e]:Wt.push(e)}function Pv(e){vl=!0,Hm(e)}function zn(){if(!na&&Wt!==null){na=!0;var e=0,t=re;try{var n=Wt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,vl=!1}catch(o){throw Wt!==null&&(Wt=Wt.slice(e+1)),hm(zs,zn),o}finally{re=t,na=!1}}return null}var pr=[],hr=0,Qi=null,Ki=0,yt=[],wt=0,Wn=null,Qt=1,Kt="";function Nn(e,t){pr[hr++]=Ki,pr[hr++]=Qi,Qi=e,Ki=t}function Wm(e,t,n){yt[wt++]=Qt,yt[wt++]=Kt,yt[wt++]=Wn,Wn=e;var r=Qt;e=Kt;var o=32-Lt(r)-1;r&=~(1<<o),n+=1;var i=32-Lt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Qt=1<<32-Lt(t)+o|n<<o|r,Kt=i+e}else Qt=1<<i|n<<o|r,Kt=e}function Os(e){e.return!==null&&(Nn(e,1),Wm(e,1,0))}function As(e){for(;e===Qi;)Qi=pr[--hr],pr[hr]=null,Ki=pr[--hr],pr[hr]=null;for(;e===Wn;)Wn=yt[--wt],yt[wt]=null,Kt=yt[--wt],yt[wt]=null,Qt=yt[--wt],yt[wt]=null}var dt=null,ct=null,me=!1,Rt=null;function Qm(e,t){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ec(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,dt=e,ct=yn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,dt=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Wn!==null?{id:Qt,overflow:Kt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,dt=e,ct=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ka(e){if(me){var t=ct;if(t){var n=t;if(!Ec(e,t)){if(Qa(e))throw Error(z(418));t=yn(n.nextSibling);var r=dt;t&&Ec(e,t)?Qm(r,n):(e.flags=e.flags&-4097|2,me=!1,dt=e)}}else{if(Qa(e))throw Error(z(418));e.flags=e.flags&-4097|2,me=!1,dt=e}}}function jc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dt=e}function fi(e){if(e!==dt)return!1;if(!me)return jc(e),me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Va(e.type,e.memoizedProps)),t&&(t=ct)){if(Qa(e))throw Km(),Error(z(418));for(;t;)Qm(e,t),t=yn(t.nextSibling)}if(jc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=yn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=dt?yn(e.stateNode.nextSibling):null;return!0}function Km(){for(var e=ct;e;)e=yn(e.nextSibling)}function zr(){ct=dt=null,me=!1}function Is(e){Rt===null?Rt=[e]:Rt.push(e)}var Rv=en.ReactCurrentBatchConfig;function Kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Cc(e){var t=e._init;return t(e._payload)}function Gm(e){function t(h,m){if(e){var v=h.deletions;v===null?(h.deletions=[m],h.flags|=16):v.push(m)}}function n(h,m){if(!e)return null;for(;m!==null;)t(h,m),m=m.sibling;return null}function r(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function o(h,m){return h=kn(h,m),h.index=0,h.sibling=null,h}function i(h,m,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<m?(h.flags|=2,m):v):(h.flags|=2,m)):(h.flags|=1048576,m)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,m,v,k){return m===null||m.tag!==6?(m=ua(v,h.mode,k),m.return=h,m):(m=o(m,v),m.return=h,m)}function s(h,m,v,k){var T=v.type;return T===sr?d(h,m,v.props.children,k,v.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&Cc(T)===m.type)?(k=o(m,v.props),k.ref=Kr(h,m,v),k.return=h,k):(k=Li(v.type,v.key,v.props,null,h.mode,k),k.ref=Kr(h,m,v),k.return=h,k)}function u(h,m,v,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==v.containerInfo||m.stateNode.implementation!==v.implementation?(m=ca(v,h.mode,k),m.return=h,m):(m=o(m,v.children||[]),m.return=h,m)}function d(h,m,v,k,T){return m===null||m.tag!==7?(m=Vn(v,h.mode,k,T),m.return=h,m):(m=o(m,v),m.return=h,m)}function c(h,m,v){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ua(""+m,h.mode,v),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ri:return v=Li(m.type,m.key,m.props,null,h.mode,v),v.ref=Kr(h,null,m),v.return=h,v;case ar:return m=ca(m,h.mode,v),m.return=h,m;case an:var k=m._init;return c(h,k(m._payload),v)}if(eo(m)||Vr(m))return m=Vn(m,h.mode,v,null),m.return=h,m;pi(h,m)}return null}function f(h,m,v,k){var T=m!==null?m.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(h,m,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ri:return v.key===T?s(h,m,v,k):null;case ar:return v.key===T?u(h,m,v,k):null;case an:return T=v._init,f(h,m,T(v._payload),k)}if(eo(v)||Vr(v))return T!==null?null:d(h,m,v,k,null);pi(h,v)}return null}function w(h,m,v,k,T){if(typeof k=="string"&&k!==""||typeof k=="number")return h=h.get(v)||null,a(m,h,""+k,T);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case ri:return h=h.get(k.key===null?v:k.key)||null,s(m,h,k,T);case ar:return h=h.get(k.key===null?v:k.key)||null,u(m,h,k,T);case an:var $=k._init;return w(h,m,v,$(k._payload),T)}if(eo(k)||Vr(k))return h=h.get(v)||null,d(m,h,k,T,null);pi(m,k)}return null}function S(h,m,v,k){for(var T=null,$=null,N=m,g=m=0,U=null;N!==null&&g<v.length;g++){N.index>g?(U=N,N=null):U=N.sibling;var D=f(h,N,v[g],k);if(D===null){N===null&&(N=U);break}e&&N&&D.alternate===null&&t(h,N),m=i(D,m,g),$===null?T=D:$.sibling=D,$=D,N=U}if(g===v.length)return n(h,N),me&&Nn(h,g),T;if(N===null){for(;g<v.length;g++)N=c(h,v[g],k),N!==null&&(m=i(N,m,g),$===null?T=N:$.sibling=N,$=N);return me&&Nn(h,g),T}for(N=r(h,N);g<v.length;g++)U=w(N,h,g,v[g],k),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?g:U.key),m=i(U,m,g),$===null?T=U:$.sibling=U,$=U);return e&&N.forEach(function(W){return t(h,W)}),me&&Nn(h,g),T}function y(h,m,v,k){var T=Vr(v);if(typeof T!="function")throw Error(z(150));if(v=T.call(v),v==null)throw Error(z(151));for(var $=T=null,N=m,g=m=0,U=null,D=v.next();N!==null&&!D.done;g++,D=v.next()){N.index>g?(U=N,N=null):U=N.sibling;var W=f(h,N,D.value,k);if(W===null){N===null&&(N=U);break}e&&N&&W.alternate===null&&t(h,N),m=i(W,m,g),$===null?T=W:$.sibling=W,$=W,N=U}if(D.done)return n(h,N),me&&Nn(h,g),T;if(N===null){for(;!D.done;g++,D=v.next())D=c(h,D.value,k),D!==null&&(m=i(D,m,g),$===null?T=D:$.sibling=D,$=D);return me&&Nn(h,g),T}for(N=r(h,N);!D.done;g++,D=v.next())D=w(N,h,g,D.value,k),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?g:D.key),m=i(D,m,g),$===null?T=D:$.sibling=D,$=D);return e&&N.forEach(function(X){return t(h,X)}),me&&Nn(h,g),T}function C(h,m,v,k){if(typeof v=="object"&&v!==null&&v.type===sr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ri:e:{for(var T=v.key,$=m;$!==null;){if($.key===T){if(T=v.type,T===sr){if($.tag===7){n(h,$.sibling),m=o($,v.props.children),m.return=h,h=m;break e}}else if($.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===an&&Cc(T)===$.type){n(h,$.sibling),m=o($,v.props),m.ref=Kr(h,$,v),m.return=h,h=m;break e}n(h,$);break}else t(h,$);$=$.sibling}v.type===sr?(m=Vn(v.props.children,h.mode,k,v.key),m.return=h,h=m):(k=Li(v.type,v.key,v.props,null,h.mode,k),k.ref=Kr(h,m,v),k.return=h,h=k)}return l(h);case ar:e:{for($=v.key;m!==null;){if(m.key===$)if(m.tag===4&&m.stateNode.containerInfo===v.containerInfo&&m.stateNode.implementation===v.implementation){n(h,m.sibling),m=o(m,v.children||[]),m.return=h,h=m;break e}else{n(h,m);break}else t(h,m);m=m.sibling}m=ca(v,h.mode,k),m.return=h,h=m}return l(h);case an:return $=v._init,C(h,m,$(v._payload),k)}if(eo(v))return S(h,m,v,k);if(Vr(v))return y(h,m,v,k);pi(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,m!==null&&m.tag===6?(n(h,m.sibling),m=o(m,v),m.return=h,h=m):(n(h,m),m=ua(v,h.mode,k),m.return=h,h=m),l(h)):n(h,m)}return C}var Tr=Gm(!0),qm=Gm(!1),Gi=_n(null),qi=null,vr=null,Fs=null;function Us(){Fs=vr=qi=null}function Vs(e){var t=Gi.current;de(Gi),e._currentValue=t}function Ga(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Er(e,t){qi=e,Fs=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(rt=!0),e.firstContext=null)}function Et(e){var t=e._currentValue;if(Fs!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(qi===null)throw Error(z(308));vr=e,qi.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var On=null;function Bs(e){On===null?On=[e]:On.push(e)}function Ym(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Bs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Jt(e,r)}function Jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var sn=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function wn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Jt(e,n)}return o=r.interleaved,o===null?(t.next=t,Bs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Jt(e,n)}function Ci(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function _c(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yi(e,t,n,r){var o=e.updateQueue;sn=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var c=o.baseState;l=0,d=u=s=null,a=i;do{var f=a.lane,w=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:w,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var S=e,y=a;switch(f=t,w=n,y.tag){case 1:if(S=y.payload,typeof S=="function"){c=S.call(w,c,f);break e}c=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=y.payload,f=typeof S=="function"?S.call(w,c,f):S,f==null)break e;c=ge({},c,f);break e;case 2:sn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[a]:f.push(a))}else w={eventTime:w,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=w,s=c):d=d.next=w,l|=f;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;f=a,a=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(d===null&&(s=c),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Kn|=l,e.lanes=l,e.memoizedState=c}}function zc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(z(191,o));o.call(r)}}}var Vo={},It=_n(Vo),Co=_n(Vo),_o=_n(Vo);function An(e){if(e===Vo)throw Error(z(174));return e}function Ws(e,t){switch(ae(_o,t),ae(Co,e),ae(It,Vo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}de(It),ae(It,t)}function Pr(){de(It),de(Co),de(_o)}function Jm(e){An(_o.current);var t=An(It.current),n=za(t,e.type);t!==n&&(ae(Co,e),ae(It,n))}function Qs(e){Co.current===e&&(de(It),de(Co))}var he=_n(0);function Xi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ra=[];function Ks(){for(var e=0;e<ra.length;e++)ra[e]._workInProgressVersionPrimary=null;ra.length=0}var _i=en.ReactCurrentDispatcher,oa=en.ReactCurrentBatchConfig,Qn=0,ve=null,Te=null,Ne=null,Ji=!1,uo=!1,zo=0,Lv=0;function Qe(){throw Error(z(321))}function Gs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Nt(e[n],t[n]))return!1;return!0}function qs(e,t,n,r,o,i){if(Qn=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_i.current=e===null||e.memoizedState===null?Mv:Ov,e=n(r,o),uo){i=0;do{if(uo=!1,zo=0,25<=i)throw Error(z(301));i+=1,Ne=Te=null,t.updateQueue=null,_i.current=Av,e=n(r,o)}while(uo)}if(_i.current=Zi,t=Te!==null&&Te.next!==null,Qn=0,Ne=Te=ve=null,Ji=!1,t)throw Error(z(300));return e}function Ys(){var e=zo!==0;return zo=0,e}function Mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ve.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function jt(){if(Te===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var t=Ne===null?ve.memoizedState:Ne.next;if(t!==null)Ne=t,Te=e;else{if(e===null)throw Error(z(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ne===null?ve.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function To(e,t){return typeof t=="function"?t(e):t}function ia(e){var t=jt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=Te,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Qn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=c,l=r):s=s.next=c,ve.lanes|=d,Kn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Nt(r,t.memoizedState)||(rt=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ve.lanes|=i,Kn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=jt(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Nt(i,t.memoizedState)||(rt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Zm(){}function ef(e,t){var n=ve,r=jt(),o=t(),i=!Nt(r.memoizedState,o);if(i&&(r.memoizedState=o,rt=!0),r=r.queue,Xs(rf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Po(9,nf.bind(null,n,r,o,t),void 0,null),Me===null)throw Error(z(349));Qn&30||tf(n,t,o)}return o}function tf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nf(e,t,n,r){t.value=n,t.getSnapshot=r,of(t)&&lf(e)}function rf(e,t,n){return n(function(){of(t)&&lf(e)})}function of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Nt(e,n)}catch{return!0}}function lf(e){var t=Jt(e,1);t!==null&&$t(t,e,1,-1)}function Tc(e){var t=Mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:e},t.queue=e,e=e.dispatch=Dv.bind(null,ve,e),[t.memoizedState,e]}function Po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function af(){return jt().memoizedState}function zi(e,t,n,r){var o=Mt();ve.flags|=e,o.memoizedState=Po(1|t,n,void 0,r===void 0?null:r)}function gl(e,t,n,r){var o=jt();r=r===void 0?null:r;var i=void 0;if(Te!==null){var l=Te.memoizedState;if(i=l.destroy,r!==null&&Gs(r,l.deps)){o.memoizedState=Po(t,n,i,r);return}}ve.flags|=e,o.memoizedState=Po(1|t,n,i,r)}function Pc(e,t){return zi(8390656,8,e,t)}function Xs(e,t){return gl(2048,8,e,t)}function sf(e,t){return gl(4,2,e,t)}function uf(e,t){return gl(4,4,e,t)}function cf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function df(e,t,n){return n=n!=null?n.concat([e]):null,gl(4,4,cf.bind(null,t,e),n)}function Js(){}function mf(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ff(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Gs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pf(e,t,n){return Qn&21?(Nt(n,t)||(n=xm(),ve.lanes|=n,Kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=n)}function $v(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{re=n,oa.transition=r}}function hf(){return jt().memoizedState}function Nv(e,t,n){var r=Sn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vf(e))gf(t,n);else if(n=Ym(e,t,n,r),n!==null){var o=Je();$t(n,e,r,o),xf(n,t,r)}}function Dv(e,t,n){var r=Sn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vf(e))gf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Nt(a,l)){var s=t.interleaved;s===null?(o.next=o,Bs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Ym(e,t,o,r),n!==null&&(o=Je(),$t(n,e,r,o),xf(n,t,r))}}function vf(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function gf(e,t){uo=Ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var Zi={readContext:Et,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},Mv={readContext:Et,useCallback:function(e,t){return Mt().memoizedState=[e,t===void 0?null:t],e},useContext:Et,useEffect:Pc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zi(4194308,4,cf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){return zi(4,2,e,t)},useMemo:function(e,t){var n=Mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nv.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Mt();return e={current:e},t.memoizedState=e},useState:Tc,useDebugValue:Js,useDeferredValue:function(e){return Mt().memoizedState=e},useTransition:function(){var e=Tc(!1),t=e[0];return e=$v.bind(null,e[1]),Mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,o=Mt();if(me){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Me===null)throw Error(z(349));Qn&30||tf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Pc(rf.bind(null,r,i,e),[e]),r.flags|=2048,Po(9,nf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Mt(),t=Me.identifierPrefix;if(me){var n=Kt,r=Qt;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ov={readContext:Et,useCallback:mf,useContext:Et,useEffect:Xs,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:ff,useReducer:ia,useRef:af,useState:function(){return ia(To)},useDebugValue:Js,useDeferredValue:function(e){var t=jt();return pf(t,Te.memoizedState,e)},useTransition:function(){var e=ia(To)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Zm,useSyncExternalStore:ef,useId:hf,unstable_isNewReconciler:!1},Av={readContext:Et,useCallback:mf,useContext:Et,useEffect:Xs,useImperativeHandle:df,useInsertionEffect:sf,useLayoutEffect:uf,useMemo:ff,useReducer:la,useRef:af,useState:function(){return la(To)},useDebugValue:Js,useDeferredValue:function(e){var t=jt();return Te===null?t.memoizedState=e:pf(t,Te.memoizedState,e)},useTransition:function(){var e=la(To)[0],t=jt().memoizedState;return[e,t]},useMutableSource:Zm,useSyncExternalStore:ef,useId:hf,unstable_isNewReconciler:!1};function zt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function qa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Je(),o=Sn(e),i=Gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,o),t!==null&&($t(t,e,o,r),Ci(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Je(),o=Sn(e),i=Gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=wn(e,i,o),t!==null&&($t(t,e,o,r),Ci(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Je(),r=Sn(e),o=Gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=wn(e,o,r),t!==null&&($t(t,e,r,n),Ci(t,e,r))}};function Rc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!So(n,r)||!So(o,i):!0}function yf(e,t,n){var r=!1,o=jn,i=t.contextType;return typeof i=="object"&&i!==null?i=Et(i):(o=it(t)?Hn:qe.current,r=t.contextTypes,i=(r=r!=null)?_r(e,o):jn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=xl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Lc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&xl.enqueueReplaceState(t,t.state,null)}function Ya(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Hs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Et(i):(i=it(t)?Hn:qe.current,o.context=_r(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(qa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&xl.enqueueReplaceState(o,o.state,null),Yi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Rr(e,t){try{var n="",r=t;do n+=mh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function aa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Xa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Iv=typeof WeakMap=="function"?WeakMap:Map;function wf(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,as=r),Xa(e,t)},n}function bf(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Xa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Xa(e,t),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $c(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Iv;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Zv.bind(null,e,t,n),t.then(e,e))}function Nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,wn(n,t,1))),n.lanes|=1),e)}var Fv=en.ReactCurrentOwner,rt=!1;function Xe(e,t,n,r){t.child=e===null?qm(t,null,n,r):Tr(t,e.child,n,r)}function Mc(e,t,n,r,o){n=n.render;var i=t.ref;return Er(t,o),r=qs(e,t,n,r,i,o),n=Ys(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(me&&n&&Os(t),t.flags|=1,Xe(e,t,r,o),t.child)}function Oc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!lu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Sf(e,t,i,r,o)):(e=Li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:So,n(l,r)&&e.ref===t.ref)return Zt(e,t,o)}return t.flags|=1,e=kn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(So(i,r)&&e.ref===t.ref)if(rt=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(rt=!0);else return t.lanes=e.lanes,Zt(e,t,o)}return Ja(e,t,n,r,o)}function kf(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(xr,st),st|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(xr,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(xr,st),st|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(xr,st),st|=r;return Xe(e,t,o,n),t.child}function Ef(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ja(e,t,n,r,o){var i=it(n)?Hn:qe.current;return i=_r(t,i),Er(t,o),n=qs(e,t,n,r,i,o),r=Ys(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Zt(e,t,o)):(me&&r&&Os(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Ac(e,t,n,r,o){if(it(n)){var i=!0;Wi(t)}else i=!1;if(Er(t,o),t.stateNode===null)Ti(e,t),yf(t,n,r),Ya(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Et(u):(u=it(n)?Hn:qe.current,u=_r(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";c||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&Lc(t,l,r,u),sn=!1;var f=t.memoizedState;l.state=f,Yi(t,r,l,o),s=t.memoizedState,a!==r||f!==s||ot.current||sn?(typeof d=="function"&&(qa(t,n,d,r),s=t.memoizedState),(a=sn||Rc(t,n,a,r,f,s,u))?(c||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Xm(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:zt(t.type,a),l.props=u,c=t.pendingProps,f=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=Et(s):(s=it(n)?Hn:qe.current,s=_r(t,s));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==c||f!==s)&&Lc(t,l,r,s),sn=!1,f=t.memoizedState,l.state=f,Yi(t,r,l,o);var S=t.memoizedState;a!==c||f!==S||ot.current||sn?(typeof w=="function"&&(qa(t,n,w,r),S=t.memoizedState),(u=sn||Rc(t,n,u,r,f,S,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,S,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,S,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=S),l.props=r,l.state=S,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Za(e,t,n,r,i,o)}function Za(e,t,n,r,o,i){Ef(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&kc(t,n,!1),Zt(e,t,i);r=t.stateNode,Fv.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Tr(t,e.child,null,i),t.child=Tr(t,null,a,i)):Xe(e,t,a,i),t.memoizedState=r.state,o&&kc(t,n,!0),t.child}function jf(e){var t=e.stateNode;t.pendingContext?Sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sc(e,t.context,!1),Ws(e,t.containerInfo)}function Ic(e,t,n,r,o){return zr(),Is(o),t.flags|=256,Xe(e,t,n,r),t.child}var es={dehydrated:null,treeContext:null,retryLane:0};function ts(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cf(e,t,n){var r=t.pendingProps,o=he.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ae(he,o&1),e===null)return Ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=bl(l,r,0,null),e=Vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ts(n),t.memoizedState=es,e):Zs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Uv(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=kn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=kn(a,i):(i=Vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ts(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=es,r}return i=e.child,e=i.sibling,r=kn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Zs(e,t){return t=bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hi(e,t,n,r){return r!==null&&Is(r),Tr(t,e.child,null,n),e=Zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uv(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=aa(Error(z(422))),hi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=bl({mode:"visible",children:r.children},o,0,null),i=Vn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Tr(t,e.child,null,l),t.child.memoizedState=ts(l),t.memoizedState=es,i);if(!(t.mode&1))return hi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(z(419)),r=aa(i,r,void 0),hi(e,t,l,r)}if(a=(l&e.childLanes)!==0,rt||a){if(r=Me,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Jt(e,o),$t(r,e,o,-1))}return iu(),r=aa(Error(z(421))),hi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=eg.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,ct=yn(o.nextSibling),dt=t,me=!0,Rt=null,e!==null&&(yt[wt++]=Qt,yt[wt++]=Kt,yt[wt++]=Wn,Qt=e.id,Kt=e.overflow,Wn=t),t=Zs(t,r.children),t.flags|=4096,t)}function Fc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ga(e.return,t,n)}function sa(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function _f(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Xe(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Fc(e,n,t);else if(e.tag===19)Fc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(he,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Xi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),sa(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Xi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}sa(t,!0,n,null,i);break;case"together":sa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vv(e,t,n){switch(t.tag){case 3:jf(t),zr();break;case 5:Jm(t);break;case 1:it(t.type)&&Wi(t);break;case 4:Ws(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ae(Gi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?Cf(e,t,n):(ae(he,he.current&1),e=Zt(e,t,n),e!==null?e.sibling:null);ae(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return _f(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ae(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,kf(e,t,n)}return Zt(e,t,n)}var zf,ns,Tf,Pf;zf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ns=function(){};Tf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,An(It.current);var i=null;switch(n){case"input":o=Ea(e,o),r=Ea(e,r),i=[];break;case"select":o=ge({},o,{value:void 0}),r=ge({},r,{value:void 0}),i=[];break;case"textarea":o=_a(e,o),r=_a(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bi)}Ta(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ho.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ho.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ce("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Pf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gr(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bv(e,t,n){var r=t.pendingProps;switch(As(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(t),null;case 1:return it(t.type)&&Hi(),Ke(t),null;case 3:return r=t.stateNode,Pr(),de(ot),de(qe),Ks(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(cs(Rt),Rt=null))),ns(e,t),Ke(t),null;case 5:Qs(t);var o=An(_o.current);if(n=t.type,e!==null&&t.stateNode!=null)Tf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Ke(t),null}if(e=An(It.current),fi(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ot]=t,r[jo]=i,e=(t.mode&1)!==0,n){case"dialog":ce("cancel",r),ce("close",r);break;case"iframe":case"object":case"embed":ce("load",r);break;case"video":case"audio":for(o=0;o<no.length;o++)ce(no[o],r);break;case"source":ce("error",r);break;case"img":case"image":case"link":ce("error",r),ce("load",r);break;case"details":ce("toggle",r);break;case"input":qu(r,i),ce("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ce("invalid",r);break;case"textarea":Xu(r,i),ce("invalid",r)}Ta(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&mi(r.textContent,a,e),o=["children",""+a]):ho.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ce("scroll",r)}switch(n){case"input":oi(r),Yu(r,i,!0);break;case"textarea":oi(r),Ju(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ot]=t,e[jo]=r,zf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Pa(n,r),n){case"dialog":ce("cancel",e),ce("close",e),o=r;break;case"iframe":case"object":case"embed":ce("load",e),o=r;break;case"video":case"audio":for(o=0;o<no.length;o++)ce(no[o],e);o=r;break;case"source":ce("error",e),o=r;break;case"img":case"image":case"link":ce("error",e),ce("load",e),o=r;break;case"details":ce("toggle",e),o=r;break;case"input":qu(e,r),o=Ea(e,r),ce("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ge({},r,{value:void 0}),ce("invalid",e);break;case"textarea":Xu(e,r),o=_a(e,r),ce("invalid",e);break;default:o=r}Ta(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?lm(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&om(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&vo(e,s):typeof s=="number"&&vo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ho.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ce("scroll",e):s!=null&&ks(e,i,s,l))}switch(n){case"input":oi(e),Yu(e,r,!1);break;case"textarea":oi(e),Ju(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?wr(e,!!r.multiple,i,!1):r.defaultValue!=null&&wr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Bi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ke(t),null;case 6:if(e&&t.stateNode!=null)Pf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=An(_o.current),An(It.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ot]=t,(i=r.nodeValue!==n)&&(e=dt,e!==null))switch(e.tag){case 3:mi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mi(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ot]=t,t.stateNode=r}return Ke(t),null;case 13:if(de(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(me&&ct!==null&&t.mode&1&&!(t.flags&128))Km(),zr(),t.flags|=98560,i=!1;else if(i=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(z(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[Ot]=t}else zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ke(t),i=!1}else Rt!==null&&(cs(Rt),Rt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?Re===0&&(Re=3):iu())),t.updateQueue!==null&&(t.flags|=4),Ke(t),null);case 4:return Pr(),ns(e,t),e===null&&ko(t.stateNode.containerInfo),Ke(t),null;case 10:return Vs(t.type._context),Ke(t),null;case 17:return it(t.type)&&Hi(),Ke(t),null;case 19:if(de(he),i=t.memoizedState,i===null)return Ke(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Gr(i,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Xi(e),l!==null){for(t.flags|=128,Gr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(he,he.current&1|2),t.child}e=e.sibling}i.tail!==null&&Se()>Lr&&(t.flags|=128,r=!0,Gr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!me)return Ke(t),null}else 2*Se()-i.renderingStartTime>Lr&&n!==1073741824&&(t.flags|=128,r=!0,Gr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Se(),t.sibling=null,n=he.current,ae(he,r?n&1|2:n&1),t):(Ke(t),null);case 22:case 23:return ou(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(Ke(t),t.subtreeFlags&6&&(t.flags|=8192)):Ke(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function Hv(e,t){switch(As(t),t.tag){case 1:return it(t.type)&&Hi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pr(),de(ot),de(qe),Ks(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Qs(t),null;case 13:if(de(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(he),null;case 4:return Pr(),null;case 10:return Vs(t.type._context),null;case 22:case 23:return ou(),null;case 24:return null;default:return null}}var vi=!1,Ge=!1,Wv=typeof WeakSet=="function"?WeakSet:Set,A=null;function gr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){be(e,t,r)}else n.current=null}function rs(e,t,n){try{n()}catch(r){be(e,t,r)}}var Uc=!1;function Qv(e,t){if(Fa=Fi,e=Nm(),Ms(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var w;c!==n||o!==0&&c.nodeType!==3||(a=l+o),c!==i||r!==0&&c.nodeType!==3||(s=l+r),c.nodeType===3&&(l+=c.nodeValue.length),(w=c.firstChild)!==null;)f=c,c=w;for(;;){if(c===e)break t;if(f===n&&++u===o&&(a=l),f===i&&++d===r&&(s=l),(w=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=w}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ua={focusedElem:e,selectionRange:n},Fi=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var S=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var y=S.memoizedProps,C=S.memoizedState,h=t.stateNode,m=h.getSnapshotBeforeUpdate(t.elementType===t.type?y:zt(t.type,y),C);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(k){be(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return S=Uc,Uc=!1,S}function co(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&rs(t,n,i)}o=o.next}while(o!==r)}}function yl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function os(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Rf(e){var t=e.alternate;t!==null&&(e.alternate=null,Rf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ot],delete t[jo],delete t[Ha],delete t[zv],delete t[Tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Lf(e){return e.tag===5||e.tag===3||e.tag===4}function Vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Lf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function is(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bi));else if(r!==4&&(e=e.child,e!==null))for(is(e,t,n),e=e.sibling;e!==null;)is(e,t,n),e=e.sibling}function ls(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ls(e,t,n),e=e.sibling;e!==null;)ls(e,t,n),e=e.sibling}var Ve=null,Tt=!1;function on(e,t,n){for(n=n.child;n!==null;)$f(e,t,n),n=n.sibling}function $f(e,t,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:Ge||gr(n,t);case 6:var r=Ve,o=Tt;Ve=null,on(e,t,n),Ve=r,Tt=o,Ve!==null&&(Tt?(e=Ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ve.removeChild(n.stateNode));break;case 18:Ve!==null&&(Tt?(e=Ve,n=n.stateNode,e.nodeType===8?ta(e.parentNode,n):e.nodeType===1&&ta(e,n),wo(e)):ta(Ve,n.stateNode));break;case 4:r=Ve,o=Tt,Ve=n.stateNode.containerInfo,Tt=!0,on(e,t,n),Ve=r,Tt=o;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&rs(n,t,l),o=o.next}while(o!==r)}on(e,t,n);break;case 1:if(!Ge&&(gr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){be(n,t,a)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,on(e,t,n),Ge=r):on(e,t,n);break;default:on(e,t,n)}}function Bc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wv),t.forEach(function(r){var o=tg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ve=a.stateNode,Tt=!1;break e;case 3:Ve=a.stateNode.containerInfo,Tt=!0;break e;case 4:Ve=a.stateNode.containerInfo,Tt=!0;break e}a=a.return}if(Ve===null)throw Error(z(160));$f(i,l,o),Ve=null,Tt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){be(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nf(t,e),t=t.sibling}function Nf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Dt(e),r&4){try{co(3,e,e.return),yl(3,e)}catch(y){be(e,e.return,y)}try{co(5,e,e.return)}catch(y){be(e,e.return,y)}}break;case 1:Ct(t,e),Dt(e),r&512&&n!==null&&gr(n,n.return);break;case 5:if(Ct(t,e),Dt(e),r&512&&n!==null&&gr(n,n.return),e.flags&32){var o=e.stateNode;try{vo(o,"")}catch(y){be(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&tm(o,i),Pa(a,l);var u=Pa(a,i);for(l=0;l<s.length;l+=2){var d=s[l],c=s[l+1];d==="style"?lm(o,c):d==="dangerouslySetInnerHTML"?om(o,c):d==="children"?vo(o,c):ks(o,d,c,u)}switch(a){case"input":ja(o,i);break;case"textarea":nm(o,i);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?wr(o,!!i.multiple,w,!1):f!==!!i.multiple&&(i.defaultValue!=null?wr(o,!!i.multiple,i.defaultValue,!0):wr(o,!!i.multiple,i.multiple?[]:"",!1))}o[jo]=i}catch(y){be(e,e.return,y)}}break;case 6:if(Ct(t,e),Dt(e),r&4){if(e.stateNode===null)throw Error(z(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){be(e,e.return,y)}}break;case 3:if(Ct(t,e),Dt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{wo(t.containerInfo)}catch(y){be(e,e.return,y)}break;case 4:Ct(t,e),Dt(e);break;case 13:Ct(t,e),Dt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(nu=Se())),r&4&&Bc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(u=Ge)||d,Ct(t,e),Ge=u):Ct(t,e),Dt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(A=e,d=e.child;d!==null;){for(c=A=d;A!==null;){switch(f=A,w=f.child,f.tag){case 0:case 11:case 14:case 15:co(4,f,f.return);break;case 1:gr(f,f.return);var S=f.stateNode;if(typeof S.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,S.props=t.memoizedProps,S.state=t.memoizedState,S.componentWillUnmount()}catch(y){be(r,n,y)}}break;case 5:gr(f,f.return);break;case 22:if(f.memoizedState!==null){Wc(c);continue}}w!==null?(w.return=f,A=w):Wc(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{o=c.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=c.stateNode,s=c.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=im("display",l))}catch(y){be(e,e.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){be(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(t,e),Dt(e),r&4&&Bc(e);break;case 21:break;default:Ct(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Lf(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(vo(o,""),r.flags&=-33);var i=Vc(e);ls(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Vc(e);is(e,a,l);break;default:throw Error(z(161))}}catch(s){be(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kv(e,t,n){A=e,Df(e)}function Df(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var o=A,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||vi;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Ge;a=vi;var u=Ge;if(vi=l,(Ge=s)&&!u)for(A=o;A!==null;)l=A,s=l.child,l.tag===22&&l.memoizedState!==null?Qc(o):s!==null?(s.return=l,A=s):Qc(o);for(;i!==null;)A=i,Df(i),i=i.sibling;A=o,vi=a,Ge=u}Hc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,A=i):Hc(e)}}function Hc(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||yl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:zt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&zc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}zc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&wo(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Ge||t.flags&512&&os(t)}catch(f){be(t,t.return,f)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Wc(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Qc(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{yl(4,t)}catch(s){be(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){be(t,o,s)}}var i=t.return;try{os(t)}catch(s){be(t,i,s)}break;case 5:var l=t.return;try{os(t)}catch(s){be(t,l,s)}}}catch(s){be(t,t.return,s)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var Gv=Math.ceil,el=en.ReactCurrentDispatcher,eu=en.ReactCurrentOwner,kt=en.ReactCurrentBatchConfig,Z=0,Me=null,Ce=null,Be=0,st=0,xr=_n(0),Re=0,Ro=null,Kn=0,wl=0,tu=0,mo=null,nt=null,nu=0,Lr=1/0,Ht=null,tl=!1,as=null,bn=null,gi=!1,pn=null,nl=0,fo=0,ss=null,Pi=-1,Ri=0;function Je(){return Z&6?Se():Pi!==-1?Pi:Pi=Se()}function Sn(e){return e.mode&1?Z&2&&Be!==0?Be&-Be:Rv.transition!==null?(Ri===0&&(Ri=xm()),Ri):(e=re,e!==0||(e=window.event,e=e===void 0?16:jm(e.type)),e):1}function $t(e,t,n,r){if(50<fo)throw fo=0,ss=null,Error(z(185));Io(e,n,r),(!(Z&2)||e!==Me)&&(e===Me&&(!(Z&2)&&(wl|=n),Re===4&&cn(e,Be)),lt(e,r),n===1&&Z===0&&!(t.mode&1)&&(Lr=Se()+500,vl&&zn()))}function lt(e,t){var n=e.callbackNode;Rh(e,t);var r=Ii(e,e===Me?Be:0);if(r===0)n!==null&&tc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&tc(n),t===1)e.tag===0?Pv(Kc.bind(null,e)):Hm(Kc.bind(null,e)),Cv(function(){!(Z&6)&&zn()}),n=null;else{switch(ym(r)){case 1:n=zs;break;case 4:n=vm;break;case 16:n=Ai;break;case 536870912:n=gm;break;default:n=Ai}n=Bf(n,Mf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mf(e,t){if(Pi=-1,Ri=0,Z&6)throw Error(z(327));var n=e.callbackNode;if(jr()&&e.callbackNode!==n)return null;var r=Ii(e,e===Me?Be:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var o=Z;Z|=2;var i=Af();(Me!==e||Be!==t)&&(Ht=null,Lr=Se()+500,Un(e,t));do try{Xv();break}catch(a){Of(e,a)}while(!0);Us(),el.current=i,Z=o,Ce!==null?t=0:(Me=null,Be=0,t=Re)}if(t!==0){if(t===2&&(o=Da(e),o!==0&&(r=o,t=us(e,o))),t===1)throw n=Ro,Un(e,0),cn(e,r),lt(e,Se()),n;if(t===6)cn(e,r);else{if(o=e.current.alternate,!(r&30)&&!qv(o)&&(t=rl(e,r),t===2&&(i=Da(e),i!==0&&(r=i,t=us(e,i))),t===1))throw n=Ro,Un(e,0),cn(e,r),lt(e,Se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:Dn(e,nt,Ht);break;case 3:if(cn(e,r),(r&130023424)===r&&(t=nu+500-Se(),10<t)){if(Ii(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Je(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ba(Dn.bind(null,e,nt,Ht),t);break}Dn(e,nt,Ht);break;case 4:if(cn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Lt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gv(r/1960))-r,10<r){e.timeoutHandle=Ba(Dn.bind(null,e,nt,Ht),r);break}Dn(e,nt,Ht);break;case 5:Dn(e,nt,Ht);break;default:throw Error(z(329))}}}return lt(e,Se()),e.callbackNode===n?Mf.bind(null,e):null}function us(e,t){var n=mo;return e.current.memoizedState.isDehydrated&&(Un(e,t).flags|=256),e=rl(e,t),e!==2&&(t=nt,nt=n,t!==null&&cs(t)),e}function cs(e){nt===null?nt=e:nt.push.apply(nt,e)}function qv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Nt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t){for(t&=~tu,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function Kc(e){if(Z&6)throw Error(z(327));jr();var t=Ii(e,0);if(!(t&1))return lt(e,Se()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=Da(e);r!==0&&(t=r,n=us(e,r))}if(n===1)throw n=Ro,Un(e,0),cn(e,t),lt(e,Se()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dn(e,nt,Ht),lt(e,Se()),null}function ru(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(Lr=Se()+500,vl&&zn())}}function Gn(e){pn!==null&&pn.tag===0&&!(Z&6)&&jr();var t=Z;Z|=1;var n=kt.transition,r=re;try{if(kt.transition=null,re=1,e)return e()}finally{re=r,kt.transition=n,Z=t,!(Z&6)&&zn()}}function ou(){st=xr.current,de(xr)}function Un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,jv(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hi();break;case 3:Pr(),de(ot),de(qe),Ks();break;case 5:Qs(r);break;case 4:Pr();break;case 13:de(he);break;case 19:de(he);break;case 10:Vs(r.type._context);break;case 22:case 23:ou()}n=n.return}if(Me=e,Ce=e=kn(e.current,null),Be=st=t,Re=0,Ro=null,tu=wl=Kn=0,nt=mo=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}On=null}return e}function Of(e,t){do{var n=Ce;try{if(Us(),_i.current=Zi,Ji){for(var r=ve.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ji=!1}if(Qn=0,Ne=Te=ve=null,uo=!1,zo=0,eu.current=null,n===null||n.return===null){Re=1,Ro=t,Ce=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Be,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=Nc(l);if(w!==null){w.flags&=-257,Dc(w,l,a,i,t),w.mode&1&&$c(i,u,t),t=w,s=u;var S=t.updateQueue;if(S===null){var y=new Set;y.add(s),t.updateQueue=y}else S.add(s);break e}else{if(!(t&1)){$c(i,u,t),iu();break e}s=Error(z(426))}}else if(me&&a.mode&1){var C=Nc(l);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Dc(C,l,a,i,t),Is(Rr(s,a));break e}}i=s=Rr(s,a),Re!==4&&(Re=2),mo===null?mo=[i]:mo.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=wf(i,s,t);_c(i,h);break e;case 1:a=s;var m=i.type,v=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(bn===null||!bn.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=bf(i,a,t);_c(i,k);break e}}i=i.return}while(i!==null)}Ff(n)}catch(T){t=T,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function Af(){var e=el.current;return el.current=Zi,e===null?Zi:e}function iu(){(Re===0||Re===3||Re===2)&&(Re=4),Me===null||!(Kn&268435455)&&!(wl&268435455)||cn(Me,Be)}function rl(e,t){var n=Z;Z|=2;var r=Af();(Me!==e||Be!==t)&&(Ht=null,Un(e,t));do try{Yv();break}catch(o){Of(e,o)}while(!0);if(Us(),Z=n,el.current=r,Ce!==null)throw Error(z(261));return Me=null,Be=0,Re}function Yv(){for(;Ce!==null;)If(Ce)}function Xv(){for(;Ce!==null&&!Sh();)If(Ce)}function If(e){var t=Vf(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Ff(e):Ce=t,eu.current=null}function Ff(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hv(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Ce=null;return}}else if(n=Bv(n,t,st),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);Re===0&&(Re=5)}function Dn(e,t,n){var r=re,o=kt.transition;try{kt.transition=null,re=1,Jv(e,t,n,r)}finally{kt.transition=o,re=r}return null}function Jv(e,t,n,r){do jr();while(pn!==null);if(Z&6)throw Error(z(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Lh(e,i),e===Me&&(Ce=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,Bf(Ai,function(){return jr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=kt.transition,kt.transition=null;var l=re;re=1;var a=Z;Z|=4,eu.current=null,Qv(e,n),Nf(n,e),xv(Ua),Fi=!!Fa,Ua=Fa=null,e.current=n,Kv(n),kh(),Z=a,re=l,kt.transition=i}else e.current=n;if(gi&&(gi=!1,pn=e,nl=o),i=e.pendingLanes,i===0&&(bn=null),Ch(n.stateNode),lt(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(tl)throw tl=!1,e=as,as=null,e;return nl&1&&e.tag!==0&&jr(),i=e.pendingLanes,i&1?e===ss?fo++:(fo=0,ss=e):fo=0,zn(),null}function jr(){if(pn!==null){var e=ym(nl),t=kt.transition,n=re;try{if(kt.transition=null,re=16>e?16:e,pn===null)var r=!1;else{if(e=pn,pn=null,nl=0,Z&6)throw Error(z(331));var o=Z;for(Z|=4,A=e.current;A!==null;){var i=A,l=i.child;if(A.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(A=u;A!==null;){var d=A;switch(d.tag){case 0:case 11:case 15:co(8,d,i)}var c=d.child;if(c!==null)c.return=d,A=c;else for(;A!==null;){d=A;var f=d.sibling,w=d.return;if(Rf(d),d===u){A=null;break}if(f!==null){f.return=w,A=f;break}A=w}}}var S=i.alternate;if(S!==null){var y=S.child;if(y!==null){S.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}A=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,A=l;else e:for(;A!==null;){if(i=A,i.flags&2048)switch(i.tag){case 0:case 11:case 15:co(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,A=h;break e}A=i.return}}var m=e.current;for(A=m;A!==null;){l=A;var v=l.child;if(l.subtreeFlags&2064&&v!==null)v.return=l,A=v;else e:for(l=m;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:yl(9,a)}}catch(T){be(a,a.return,T)}if(a===l){A=null;break e}var k=a.sibling;if(k!==null){k.return=a.return,A=k;break e}A=a.return}}if(Z=o,zn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{re=n,kt.transition=t}}return!1}function Gc(e,t,n){t=Rr(n,t),t=wf(e,t,1),e=wn(e,t,1),t=Je(),e!==null&&(Io(e,1,t),lt(e,t))}function be(e,t,n){if(e.tag===3)Gc(e,e,n);else for(;t!==null;){if(t.tag===3){Gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=Rr(n,e),e=bf(t,e,1),t=wn(t,e,1),e=Je(),t!==null&&(Io(t,1,e),lt(t,e));break}}t=t.return}}function Zv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Je(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Be&n)===n&&(Re===4||Re===3&&(Be&130023424)===Be&&500>Se()-nu?Un(e,0):tu|=n),lt(e,t)}function Uf(e,t){t===0&&(e.mode&1?(t=ai,ai<<=1,!(ai&130023424)&&(ai=4194304)):t=1);var n=Je();e=Jt(e,t),e!==null&&(Io(e,t,n),lt(e,n))}function eg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Uf(e,n)}function tg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Uf(e,n)}var Vf;Vf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ot.current)rt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return rt=!1,Vv(e,t,n);rt=!!(e.flags&131072)}else rt=!1,me&&t.flags&1048576&&Wm(t,Ki,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ti(e,t),e=t.pendingProps;var o=_r(t,qe.current);Er(t,n),o=qs(null,t,r,e,o,n);var i=Ys();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(i=!0,Wi(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hs(t),o.updater=xl,t.stateNode=o,o._reactInternals=t,Ya(t,r,e,n),t=Za(null,t,r,!0,i,n)):(t.tag=0,me&&i&&Os(t),Xe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ti(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rg(r),e=zt(r,e),o){case 0:t=Ja(null,t,r,e,n);break e;case 1:t=Ac(null,t,r,e,n);break e;case 11:t=Mc(null,t,r,e,n);break e;case 14:t=Oc(null,t,r,zt(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Ja(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Ac(e,t,r,o,n);case 3:e:{if(jf(t),e===null)throw Error(z(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Xm(e,t),Yi(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Rr(Error(z(423)),t),t=Ic(e,t,r,n,o);break e}else if(r!==o){o=Rr(Error(z(424)),t),t=Ic(e,t,r,n,o);break e}else for(ct=yn(t.stateNode.containerInfo.firstChild),dt=t,me=!0,Rt=null,n=qm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===o){t=Zt(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Jm(t),e===null&&Ka(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Va(r,o)?l=null:i!==null&&Va(r,i)&&(t.flags|=32),Ef(e,t),Xe(e,t,l,n),t.child;case 6:return e===null&&Ka(t),null;case 13:return Cf(e,t,n);case 4:return Ws(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Tr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Mc(e,t,r,o,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ae(Gi,r._currentValue),r._currentValue=l,i!==null)if(Nt(i.value,l)){if(i.children===o.children&&!ot.current){t=Zt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Gt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ga(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ga(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Xe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Er(t,n),o=Et(o),r=r(o),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,o=zt(r,t.pendingProps),o=zt(r.type,o),Oc(e,t,r,o,n);case 15:return Sf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:zt(r,o),Ti(e,t),t.tag=1,it(r)?(e=!0,Wi(t)):e=!1,Er(t,n),yf(t,r,o),Ya(t,r,o,n),Za(null,t,r,!0,e,n);case 19:return _f(e,t,n);case 22:return kf(e,t,n)}throw Error(z(156,t.tag))};function Bf(e,t){return hm(e,t)}function ng(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(e,t,n,r){return new ng(e,t,n,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rg(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===js)return 11;if(e===Cs)return 14}return 2}function kn(e,t){var n=e.alternate;return n===null?(n=St(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Li(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")lu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case sr:return Vn(n.children,o,i,t);case Es:l=8,o|=8;break;case wa:return e=St(12,n,t,o|2),e.elementType=wa,e.lanes=i,e;case ba:return e=St(13,n,t,o),e.elementType=ba,e.lanes=i,e;case Sa:return e=St(19,n,t,o),e.elementType=Sa,e.lanes=i,e;case Jd:return bl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yd:l=10;break e;case Xd:l=9;break e;case js:l=11;break e;case Cs:l=14;break e;case an:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=St(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Vn(e,t,n,r){return e=St(7,e,r,t),e.lanes=n,e}function bl(e,t,n,r){return e=St(22,e,r,t),e.elementType=Jd,e.lanes=n,e.stateNode={isHidden:!1},e}function ua(e,t,n){return e=St(6,e,null,t),e.lanes=n,e}function ca(e,t,n){return t=St(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function og(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,o,i,l,a,s){return e=new og(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=St(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(i),e}function ig(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Hf(e){if(!e)return jn;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(it(n))return Bm(e,n,t)}return t}function Wf(e,t,n,r,o,i,l,a,s){return e=au(n,r,!0,e,o,i,l,a,s),e.context=Hf(null),n=e.current,r=Je(),o=Sn(n),i=Gt(r,o),i.callback=t??null,wn(n,i,o),e.current.lanes=o,Io(e,o,r),lt(e,r),e}function Sl(e,t,n,r){var o=t.current,i=Je(),l=Sn(o);return n=Hf(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=wn(o,t,l),e!==null&&($t(e,o,l,i),Ci(e,o,l)),l}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function qc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function su(e,t){qc(e,t),(e=e.alternate)&&qc(e,t)}function lg(){return null}var Qf=typeof reportError=="function"?reportError:function(e){console.error(e)};function uu(e){this._internalRoot=e}kl.prototype.render=uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Sl(e,t,null,null)};kl.prototype.unmount=uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gn(function(){Sl(null,e,null,null)}),t[Xt]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<un.length&&t!==0&&t<un[n].priority;n++);un.splice(n,0,e),n===0&&Em(e)}};function cu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function El(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yc(){}function ag(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=ol(l);i.call(u)}}var l=Wf(t,r,e,0,null,!1,!1,"",Yc);return e._reactRootContainer=l,e[Xt]=l.current,ko(e.nodeType===8?e.parentNode:e),Gn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=ol(s);a.call(u)}}var s=au(e,0,!1,null,null,!1,!1,"",Yc);return e._reactRootContainer=s,e[Xt]=s.current,ko(e.nodeType===8?e.parentNode:e),Gn(function(){Sl(t,s,n,r)}),s}function jl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=ol(l);a.call(s)}}Sl(t,l,e,o)}else l=ag(n,t,e,o,r);return ol(l)}wm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(Ts(t,n|1),lt(t,Se()),!(Z&6)&&(Lr=Se()+500,zn()))}break;case 13:Gn(function(){var r=Jt(e,1);if(r!==null){var o=Je();$t(r,e,1,o)}}),su(e,1)}};Ps=function(e){if(e.tag===13){var t=Jt(e,134217728);if(t!==null){var n=Je();$t(t,e,134217728,n)}su(e,134217728)}};bm=function(e){if(e.tag===13){var t=Sn(e),n=Jt(e,t);if(n!==null){var r=Je();$t(n,e,t,r)}su(e,t)}};Sm=function(){return re};km=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};La=function(e,t,n){switch(t){case"input":if(ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=hl(r);if(!o)throw Error(z(90));em(r),ja(r,o)}}}break;case"textarea":nm(e,n);break;case"select":t=n.value,t!=null&&wr(e,!!n.multiple,t,!1)}};um=ru;cm=Gn;var sg={usingClientEntryPoint:!1,Events:[Uo,mr,hl,am,sm,ru]},qr={findFiberByHostInstance:Mn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ug={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fm(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||lg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xi.isDisabled&&xi.supportsFiber)try{dl=xi.inject(ug),At=xi}catch{}}ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg;ft.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cu(t))throw Error(z(200));return ig(e,t,null,n)};ft.createRoot=function(e,t){if(!cu(e))throw Error(z(299));var n=!1,r="",o=Qf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,r,o),e[Xt]=t.current,ko(e.nodeType===8?e.parentNode:e),new uu(t)};ft.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=fm(t),e=e===null?null:e.stateNode,e};ft.flushSync=function(e){return Gn(e)};ft.hydrate=function(e,t,n){if(!El(t))throw Error(z(200));return jl(null,e,t,!0,n)};ft.hydrateRoot=function(e,t,n){if(!cu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Qf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wf(t,null,e,1,n??null,o,!1,i,l),e[Xt]=t.current,ko(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new kl(t)};ft.render=function(e,t,n){if(!El(t))throw Error(z(200));return jl(null,e,t,!1,n)};ft.unmountComponentAtNode=function(e){if(!El(e))throw Error(z(40));return e._reactRootContainer?(Gn(function(){jl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};ft.unstable_batchedUpdates=ru;ft.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!El(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return jl(e,t,n,!1,r)};ft.version="18.3.1-next-f1338f8080-20240426";function Kf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kf)}catch(e){console.error(e)}}Kf(),Qd.exports=ft;var du=Qd.exports;const cg=Md(du),dg=Dd({__proto__:null,default:cg},[du]);var Gf,Xc=du;Gf=Xc.createRoot,Xc.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var je;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(je||(je={}));const Jc="popstate";function mg(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Lo("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Bo(o)}return pg(t,n,null,e)}function q(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $r(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function fg(){return Math.random().toString(36).substr(2,8)}function Zc(e,t){return{usr:e.state,key:e.key,idx:t}}function Lo(e,t,n,r){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tn(t):t,{state:n,key:t&&t.key||r||fg()})}function Bo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function pg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=je.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(pe({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function c(){a=je.Pop;let C=d(),h=C==null?null:C-u;u=C,s&&s({action:a,location:y.location,delta:h})}function f(C,h){a=je.Push;let m=Lo(y.location,C,h);u=d()+1;let v=Zc(m,u),k=y.createHref(m);try{l.pushState(v,"",k)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;o.location.assign(k)}i&&s&&s({action:a,location:y.location,delta:1})}function w(C,h){a=je.Replace;let m=Lo(y.location,C,h);u=d();let v=Zc(m,u),k=y.createHref(m);l.replaceState(v,"",k),i&&s&&s({action:a,location:y.location,delta:0})}function S(C){let h=o.location.origin!=="null"?o.location.origin:o.location.href,m=typeof C=="string"?C:Bo(C);return m=m.replace(/ $/,"%20"),q(h,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,h)}let y={get action(){return a},get location(){return e(o,l)},listen(C){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Jc,c),s=C,()=>{o.removeEventListener(Jc,c),s=null}},createHref(C){return t(o,C)},createURL:S,encodeLocation(C){let h=S(C);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:w,go(C){return l.go(C)}};return y}var ie;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ie||(ie={}));const hg=new Set(["lazy","caseSensitive","path","id","index","children"]);function vg(e){return e.index===!0}function $o(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,String(i)],a=typeof o.id=="string"?o.id:l.join("-");if(q(o.index!==!0||!o.children,"Cannot specify children on an index route"),q(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),vg(o)){let s=pe({},o,t(o),{id:a});return r[a]=s,s}else{let s=pe({},o,t(o),{id:a,children:void 0});return r[a]=s,o.children&&(s.children=$o(o.children,t,l,r)),s}})}function dn(e,t,n){return n===void 0&&(n="/"),$i(e,t,n,!1)}function $i(e,t,n,r){let o=typeof t=="string"?Tn(t):t,i=qn(o.pathname||"/",n);if(i==null)return null;let l=qf(e);xg(l);let a=null;for(let s=0;a==null&&s<l.length;++s){let u=Tg(i);a=_g(l[s],u,r)}return a}function gg(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function qf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(q(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=qt([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(q(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qf(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:jg(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of Yf(i.path))o(i,l,s)}),t}function Yf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Yf(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function xg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Cg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const yg=/^:[\w-]+$/,wg=3,bg=2,Sg=1,kg=10,Eg=-2,ed=e=>e==="*";function jg(e,t){let n=e.split("/"),r=n.length;return n.some(ed)&&(r+=Eg),t&&(r+=bg),n.filter(o=>!ed(o)).reduce((o,i)=>o+(yg.test(i)?wg:i===""?Sg:kg),r)}function Cg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function _g(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,o={},i="/",l=[];for(let a=0;a<r.length;++a){let s=r[a],u=a===r.length-1,d=i==="/"?t:t.slice(i.length)||"/",c=td({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},d),f=s.route;if(!c&&u&&n&&!r[r.length-1].route.index&&(c=td({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},d)),!c)return null;Object.assign(o,c.params),l.push({params:o,pathname:qt([i,c.pathname]),pathnameBase:Lg(qt([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=qt([i,c.pathnameBase]))}return l}function td(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:w}=d;if(f==="*"){let y=a[c]||"";l=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const S=a[c];return w&&!S?u[f]=void 0:u[f]=(S||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function zg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$r(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Tg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $r(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Pg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Tn(e):e;return{pathname:n?n.startsWith("/")?n:Rg(n,t):t,search:$g(r),hash:Ng(o)}}function Rg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function da(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function mu(e,t){let n=Xf(e);return t?n.map((r,o)=>o===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fu(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Tn(e):(o=pe({},e),q(!o.pathname||!o.pathname.includes("?"),da("?","pathname","search",o)),q(!o.pathname||!o.pathname.includes("#"),da("#","pathname","hash",o)),q(!o.search||!o.search.includes("#"),da("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let c=t.length-1;if(!r&&l.startsWith("..")){let f=l.split("/");for(;f[0]==="..";)f.shift(),c-=1;o.pathname=f.join("/")}a=c>=0?t[c]:"/"}let s=Pg(o,a),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),Lg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$g=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ng=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class il{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Cl(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jf=["post","put","patch","delete"],Dg=new Set(Jf),Mg=["get",...Jf],Og=new Set(Mg),Ag=new Set([301,302,303,307,308]),Ig=new Set([307,308]),ma={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Fg={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ir={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},pu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ug=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Zf="remix-router-transitions";function Vg(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;q(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let p=e.detectErrorBoundary;o=x=>({hasErrorBoundary:p(x)})}else o=Ug;let i={},l=$o(e.routes,o,void 0,i),a,s=e.basename||"/",u=e.unstable_dataStrategy||Gg,d=e.unstable_patchRoutesOnNavigation,c=pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),f=null,w=new Set,S=1e3,y=new Set,C=null,h=null,m=null,v=e.hydrationData!=null,k=dn(l,e.history.location,s),T=null;if(k==null&&!d){let p=Ye(404,{pathname:e.history.location.pathname}),{matches:x,route:b}=cd(l);k=x,T={[b.id]:p}}k&&!e.hydrationData&&Yo(k,l,e.history.location.pathname).active&&(k=null);let $;if(k)if(k.some(p=>p.route.lazy))$=!1;else if(!k.some(p=>p.route.loader))$=!0;else if(c.v7_partialHydration){let p=e.hydrationData?e.hydrationData.loaderData:null,x=e.hydrationData?e.hydrationData.errors:null,b=j=>j.route.loader?typeof j.route.loader=="function"&&j.route.loader.hydrate===!0?!1:p&&p[j.route.id]!==void 0||x&&x[j.route.id]!==void 0:!0;if(x){let j=k.findIndex(O=>x[O.route.id]!==void 0);$=k.slice(0,j+1).every(b)}else $=k.every(b)}else $=e.hydrationData!=null;else if($=!1,k=[],c.v7_partialHydration){let p=Yo(null,l,e.history.location.pathname);p.active&&p.matches&&(k=p.matches)}let N,g={historyAction:e.history.action,location:e.history.location,matches:k,initialized:$,navigation:ma,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||T,fetchers:new Map,blockers:new Map},U=je.Pop,D=!1,W,X=!1,fe=new Map,se=null,Ae=!1,tt=!1,gt=[],R=new Set,M=new Map,H=0,te=-1,oe=new Map,Le=new Set,Ie=new Map,xt=new Map,_e=new Set,Fe=new Map,_=new Map,L=new Map,K;function Ue(){if(f=e.history.listen(p=>{let{action:x,location:b,delta:j}=p;if(K){K(),K=void 0;return}$r(_.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let O=Au({currentLocation:g.location,nextLocation:b,historyAction:x});if(O&&j!=null){let V=new Promise(Q=>{K=Q});e.history.go(j*-1),Go(O,{state:"blocked",location:b,proceed(){Go(O,{state:"proceeding",proceed:void 0,reset:void 0,location:b}),V.then(()=>e.history.go(j))},reset(){let Q=new Map(g.blockers);Q.set(O,ir),xe({blockers:Q})}});return}return Rn(x,b)}),n){u0(t,fe);let p=()=>c0(t,fe);t.addEventListener("pagehide",p),se=()=>t.removeEventListener("pagehide",p)}return g.initialized||Rn(je.Pop,g.location,{initialHydration:!0}),N}function We(){f&&f(),se&&se(),w.clear(),W&&W.abort(),g.fetchers.forEach((p,x)=>Ko(x)),g.blockers.forEach((p,x)=>Ou(x))}function ze(p){return w.add(p),()=>w.delete(p)}function xe(p,x){x===void 0&&(x={}),g=pe({},g,p);let b=[],j=[];c.v7_fetcherPersist&&g.fetchers.forEach((O,V)=>{O.state==="idle"&&(_e.has(V)?j.push(V):b.push(V))}),[...w].forEach(O=>O(g,{deletedFetchers:j,unstable_viewTransitionOpts:x.viewTransitionOpts,unstable_flushSync:x.flushSync===!0})),c.v7_fetcherPersist&&(b.forEach(O=>g.fetchers.delete(O)),j.forEach(O=>Ko(O)))}function tr(p,x,b){var j,O;let{flushSync:V}=b===void 0?{}:b,Q=g.actionData!=null&&g.navigation.formMethod!=null&&Pt(g.navigation.formMethod)&&g.navigation.state==="loading"&&((j=p.state)==null?void 0:j._isRedirect)!==!0,P;x.actionData?Object.keys(x.actionData).length>0?P=x.actionData:P=null:Q?P=g.actionData:P=null;let B=x.loaderData?sd(g.loaderData,x.loaderData,x.matches||[],x.errors):g.loaderData,I=g.blockers;I.size>0&&(I=new Map(I),I.forEach((ne,ue)=>I.set(ue,ir)));let F=D===!0||g.navigation.formMethod!=null&&Pt(g.navigation.formMethod)&&((O=p.state)==null?void 0:O._isRedirect)!==!0;a&&(l=a,a=void 0),Ae||U===je.Pop||(U===je.Push?e.history.push(p,p.state):U===je.Replace&&e.history.replace(p,p.state));let ee;if(U===je.Pop){let ne=fe.get(g.location.pathname);ne&&ne.has(p.pathname)?ee={currentLocation:g.location,nextLocation:p}:fe.has(p.pathname)&&(ee={currentLocation:p,nextLocation:g.location})}else if(X){let ne=fe.get(g.location.pathname);ne?ne.add(p.pathname):(ne=new Set([p.pathname]),fe.set(g.location.pathname,ne)),ee={currentLocation:g.location,nextLocation:p}}xe(pe({},x,{actionData:P,loaderData:B,historyAction:U,location:p,initialized:!0,navigation:ma,revalidation:"idle",restoreScrollPosition:Fu(p,x.matches||g.matches),preventScrollReset:F,blockers:I}),{viewTransitionOpts:ee,flushSync:V===!0}),U=je.Pop,D=!1,X=!1,Ae=!1,tt=!1,gt=[]}async function Pu(p,x){if(typeof p=="number"){e.history.go(p);return}let b=ds(g.location,g.matches,s,c.v7_prependBasename,p,c.v7_relativeSplatPath,x?.fromRouteId,x?.relative),{path:j,submission:O,error:V}=nd(c.v7_normalizeFormMethod,!1,b,x),Q=g.location,P=Lo(g.location,j,x&&x.state);P=pe({},P,e.history.encodeLocation(P));let B=x&&x.replace!=null?x.replace:void 0,I=je.Push;B===!0?I=je.Replace:B===!1||O!=null&&Pt(O.formMethod)&&O.formAction===g.location.pathname+g.location.search&&(I=je.Replace);let F=x&&"preventScrollReset"in x?x.preventScrollReset===!0:void 0,ee=(x&&x.unstable_flushSync)===!0,ne=Au({currentLocation:Q,nextLocation:P,historyAction:I});if(ne){Go(ne,{state:"blocked",location:P,proceed(){Go(ne,{state:"proceeding",proceed:void 0,reset:void 0,location:P}),Pu(p,x)},reset(){let ue=new Map(g.blockers);ue.set(ne,ir),xe({blockers:ue})}});return}return await Rn(I,P,{submission:O,pendingError:V,preventScrollReset:F,replace:x&&x.replace,enableViewTransition:x&&x.unstable_viewTransition,flushSync:ee})}function Tp(){if(Ml(),xe({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){Rn(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}Rn(U||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation,enableViewTransition:X===!0})}}async function Rn(p,x,b){W&&W.abort(),W=null,U=p,Ae=(b&&b.startUninterruptedRevalidation)===!0,Ip(g.location,g.matches),D=(b&&b.preventScrollReset)===!0,X=(b&&b.enableViewTransition)===!0;let j=a||l,O=b&&b.overrideNavigation,V=dn(j,x,s),Q=(b&&b.flushSync)===!0,P=Yo(V,j,x.pathname);if(P.active&&P.matches&&(V=P.matches),!V){let{error:J,notFoundMatches:$e,route:Ee}=Ol(x.pathname);tr(x,{matches:$e,loaderData:{},errors:{[Ee.id]:J}},{flushSync:Q});return}if(g.initialized&&!tt&&e0(g.location,x)&&!(b&&b.submission&&Pt(b.submission.formMethod))){tr(x,{matches:V},{flushSync:Q});return}W=new AbortController;let B=or(e.history,x,W.signal,b&&b.submission),I;if(b&&b.pendingError)I=[yr(V).route.id,{type:ie.error,error:b.pendingError}];else if(b&&b.submission&&Pt(b.submission.formMethod)){let J=await Pp(B,x,b.submission,V,P.active,{replace:b.replace,flushSync:Q});if(J.shortCircuited)return;if(J.pendingActionResult){let[$e,Ee]=J.pendingActionResult;if(ut(Ee)&&Cl(Ee.error)&&Ee.error.status===404){W=null,tr(x,{matches:J.matches,loaderData:{},errors:{[$e]:Ee.error}});return}}V=J.matches||V,I=J.pendingActionResult,O=fa(x,b.submission),Q=!1,P.active=!1,B=or(e.history,B.url,B.signal)}let{shortCircuited:F,matches:ee,loaderData:ne,errors:ue}=await Rp(B,x,V,P.active,O,b&&b.submission,b&&b.fetcherSubmission,b&&b.replace,b&&b.initialHydration===!0,Q,I);F||(W=null,tr(x,pe({matches:ee||V},ud(I),{loaderData:ne,errors:ue})))}async function Pp(p,x,b,j,O,V){V===void 0&&(V={}),Ml();let Q=a0(x,b);if(xe({navigation:Q},{flushSync:V.flushSync===!0}),O){let I=await Xo(j,x.pathname,p.signal);if(I.type==="aborted")return{shortCircuited:!0};if(I.type==="error"){let{boundaryId:F,error:ee}=qo(x.pathname,I);return{matches:I.partialMatches,pendingActionResult:[F,{type:ie.error,error:ee}]}}else if(I.matches)j=I.matches;else{let{notFoundMatches:F,error:ee,route:ne}=Ol(x.pathname);return{matches:F,pendingActionResult:[ne.id,{type:ie.error,error:ee}]}}}let P,B=ro(j,x);if(!B.route.action&&!B.route.lazy)P={type:ie.error,error:Ye(405,{method:p.method,pathname:x.pathname,routeId:B.route.id})};else if(P=(await Fr("action",g,p,[B],j,null))[B.route.id],p.signal.aborted)return{shortCircuited:!0};if(In(P)){let I;return V&&V.replace!=null?I=V.replace:I=id(P.response.headers.get("Location"),new URL(p.url),s)===g.location.pathname+g.location.search,await Ln(p,P,!0,{submission:b,replace:I}),{shortCircuited:!0}}if(hn(P))throw Ye(400,{type:"defer-action"});if(ut(P)){let I=yr(j,B.route.id);return(V&&V.replace)!==!0&&(U=je.Push),{matches:j,pendingActionResult:[I.route.id,P]}}return{matches:j,pendingActionResult:[B.route.id,P]}}async function Rp(p,x,b,j,O,V,Q,P,B,I,F){let ee=O||fa(x,V),ne=V||Q||md(ee),ue=!Ae&&(!c.v7_partialHydration||!B);if(j){if(ue){let ye=Ru(F);xe(pe({navigation:ee},ye!==void 0?{actionData:ye}:{}),{flushSync:I})}let G=await Xo(b,x.pathname,p.signal);if(G.type==="aborted")return{shortCircuited:!0};if(G.type==="error"){let{boundaryId:ye,error:at}=qo(x.pathname,G);return{matches:G.partialMatches,loaderData:{},errors:{[ye]:at}}}else if(G.matches)b=G.matches;else{let{error:ye,notFoundMatches:at,route:we}=Ol(x.pathname);return{matches:at,loaderData:{},errors:{[we.id]:ye}}}}let J=a||l,[$e,Ee]=rd(e.history,g,b,ne,x,c.v7_partialHydration&&B===!0,c.v7_skipActionErrorRevalidation,tt,gt,R,_e,Ie,Le,J,s,F);if(Al(G=>!(b&&b.some(ye=>ye.route.id===G))||$e&&$e.some(ye=>ye.route.id===G)),te=++H,$e.length===0&&Ee.length===0){let G=Du();return tr(x,pe({matches:b,loaderData:{},errors:F&&ut(F[1])?{[F[0]]:F[1].error}:null},ud(F),G?{fetchers:new Map(g.fetchers)}:{}),{flushSync:I}),{shortCircuited:!0}}if(ue){let G={};if(!j){G.navigation=ee;let ye=Ru(F);ye!==void 0&&(G.actionData=ye)}Ee.length>0&&(G.fetchers=Lp(Ee)),xe(G,{flushSync:I})}Ee.forEach(G=>{M.has(G.key)&&nn(G.key),G.controller&&M.set(G.key,G.controller)});let Ur=()=>Ee.forEach(G=>nn(G.key));W&&W.signal.addEventListener("abort",Ur);let{loaderResults:Ut,fetcherResults:nr}=await Lu(g,b,$e,Ee,p);if(p.signal.aborted)return{shortCircuited:!0};W&&W.signal.removeEventListener("abort",Ur),Ee.forEach(G=>M.delete(G.key));let rn=yi(Ut);if(rn)return await Ln(p,rn.result,!0,{replace:P}),{shortCircuited:!0};if(rn=yi(nr),rn)return Le.add(rn.key),await Ln(p,rn.result,!0,{replace:P}),{shortCircuited:!0};let{loaderData:Jo,errors:Vt}=ad(g,b,$e,Ut,F,Ee,nr,Fe);Fe.forEach((G,ye)=>{G.subscribe(at=>{(at||G.done)&&Fe.delete(ye)})}),c.v7_partialHydration&&B&&g.errors&&Object.entries(g.errors).filter(G=>{let[ye]=G;return!$e.some(at=>at.route.id===ye)}).forEach(G=>{let[ye,at]=G;Vt=Object.assign(Vt||{},{[ye]:at})});let Zo=Du(),ei=Mu(te),ti=Zo||ei||Ee.length>0;return pe({matches:b,loaderData:Jo,errors:Vt},ti?{fetchers:new Map(g.fetchers)}:{})}function Ru(p){if(p&&!ut(p[1]))return{[p[0]]:p[1].data};if(g.actionData)return Object.keys(g.actionData).length===0?null:g.actionData}function Lp(p){return p.forEach(x=>{let b=g.fetchers.get(x.key),j=Yr(void 0,b?b.data:void 0);g.fetchers.set(x.key,j)}),new Map(g.fetchers)}function $p(p,x,b,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");M.has(p)&&nn(p);let O=(j&&j.unstable_flushSync)===!0,V=a||l,Q=ds(g.location,g.matches,s,c.v7_prependBasename,b,c.v7_relativeSplatPath,x,j?.relative),P=dn(V,Q,s),B=Yo(P,V,Q);if(B.active&&B.matches&&(P=B.matches),!P){Ft(p,x,Ye(404,{pathname:Q}),{flushSync:O});return}let{path:I,submission:F,error:ee}=nd(c.v7_normalizeFormMethod,!0,Q,j);if(ee){Ft(p,x,ee,{flushSync:O});return}let ne=ro(P,I);if(D=(j&&j.preventScrollReset)===!0,F&&Pt(F.formMethod)){Np(p,x,I,ne,P,B.active,O,F);return}Ie.set(p,{routeId:x,path:I}),Dp(p,x,I,ne,P,B.active,O,F)}async function Np(p,x,b,j,O,V,Q,P){Ml(),Ie.delete(p);function B(we){if(!we.route.action&&!we.route.lazy){let Bt=Ye(405,{method:P.formMethod,pathname:b,routeId:x});return Ft(p,x,Bt,{flushSync:Q}),!0}return!1}if(!V&&B(j))return;let I=g.fetchers.get(p);tn(p,s0(P,I),{flushSync:Q});let F=new AbortController,ee=or(e.history,b,F.signal,P);if(V){let we=await Xo(O,b,ee.signal);if(we.type==="aborted")return;if(we.type==="error"){let{error:Bt}=qo(b,we);Ft(p,x,Bt,{flushSync:Q});return}else if(we.matches){if(O=we.matches,j=ro(O,b),B(j))return}else{Ft(p,x,Ye(404,{pathname:b}),{flushSync:Q});return}}M.set(p,F);let ne=H,J=(await Fr("action",g,ee,[j],O,p))[j.route.id];if(ee.signal.aborted){M.get(p)===F&&M.delete(p);return}if(c.v7_fetcherPersist&&_e.has(p)){if(In(J)||ut(J)){tn(p,ln(void 0));return}}else{if(In(J))if(M.delete(p),te>ne){tn(p,ln(void 0));return}else return Le.add(p),tn(p,Yr(P)),Ln(ee,J,!1,{fetcherSubmission:P});if(ut(J)){Ft(p,x,J.error);return}}if(hn(J))throw Ye(400,{type:"defer-action"});let $e=g.navigation.location||g.location,Ee=or(e.history,$e,F.signal),Ur=a||l,Ut=g.navigation.state!=="idle"?dn(Ur,g.navigation.location,s):g.matches;q(Ut,"Didn't find any matches after fetcher action");let nr=++H;oe.set(p,nr);let rn=Yr(P,J.data);g.fetchers.set(p,rn);let[Jo,Vt]=rd(e.history,g,Ut,P,$e,!1,c.v7_skipActionErrorRevalidation,tt,gt,R,_e,Ie,Le,Ur,s,[j.route.id,J]);Vt.filter(we=>we.key!==p).forEach(we=>{let Bt=we.key,Vu=g.fetchers.get(Bt),Vp=Yr(void 0,Vu?Vu.data:void 0);g.fetchers.set(Bt,Vp),M.has(Bt)&&nn(Bt),we.controller&&M.set(Bt,we.controller)}),xe({fetchers:new Map(g.fetchers)});let Zo=()=>Vt.forEach(we=>nn(we.key));F.signal.addEventListener("abort",Zo);let{loaderResults:ei,fetcherResults:ti}=await Lu(g,Ut,Jo,Vt,Ee);if(F.signal.aborted)return;F.signal.removeEventListener("abort",Zo),oe.delete(p),M.delete(p),Vt.forEach(we=>M.delete(we.key));let G=yi(ei);if(G)return Ln(Ee,G.result,!1);if(G=yi(ti),G)return Le.add(G.key),Ln(Ee,G.result,!1);let{loaderData:ye,errors:at}=ad(g,Ut,Jo,ei,void 0,Vt,ti,Fe);if(g.fetchers.has(p)){let we=ln(J.data);g.fetchers.set(p,we)}Mu(nr),g.navigation.state==="loading"&&nr>te?(q(U,"Expected pending action"),W&&W.abort(),tr(g.navigation.location,{matches:Ut,loaderData:ye,errors:at,fetchers:new Map(g.fetchers)})):(xe({errors:at,loaderData:sd(g.loaderData,ye,Ut,at),fetchers:new Map(g.fetchers)}),tt=!1)}async function Dp(p,x,b,j,O,V,Q,P){let B=g.fetchers.get(p);tn(p,Yr(P,B?B.data:void 0),{flushSync:Q});let I=new AbortController,F=or(e.history,b,I.signal);if(V){let J=await Xo(O,b,F.signal);if(J.type==="aborted")return;if(J.type==="error"){let{error:$e}=qo(b,J);Ft(p,x,$e,{flushSync:Q});return}else if(J.matches)O=J.matches,j=ro(O,b);else{Ft(p,x,Ye(404,{pathname:b}),{flushSync:Q});return}}M.set(p,I);let ee=H,ue=(await Fr("loader",g,F,[j],O,p))[j.route.id];if(hn(ue)&&(ue=await hu(ue,F.signal,!0)||ue),M.get(p)===I&&M.delete(p),!F.signal.aborted){if(_e.has(p)){tn(p,ln(void 0));return}if(In(ue))if(te>ee){tn(p,ln(void 0));return}else{Le.add(p),await Ln(F,ue,!1);return}if(ut(ue)){Ft(p,x,ue.error);return}q(!hn(ue),"Unhandled fetcher deferred data"),tn(p,ln(ue.data))}}async function Ln(p,x,b,j){let{submission:O,fetcherSubmission:V,replace:Q}=j===void 0?{}:j;x.response.headers.has("X-Remix-Revalidate")&&(tt=!0);let P=x.response.headers.get("Location");q(P,"Expected a Location header on the redirect Response"),P=id(P,new URL(p.url),s);let B=Lo(g.location,P,{_isRedirect:!0});if(n){let J=!1;if(x.response.headers.has("X-Remix-Reload-Document"))J=!0;else if(pu.test(P)){const $e=e.history.createURL(P);J=$e.origin!==t.location.origin||qn($e.pathname,s)==null}if(J){Q?t.location.replace(P):t.location.assign(P);return}}W=null;let I=Q===!0||x.response.headers.has("X-Remix-Replace")?je.Replace:je.Push,{formMethod:F,formAction:ee,formEncType:ne}=g.navigation;!O&&!V&&F&&ee&&ne&&(O=md(g.navigation));let ue=O||V;if(Ig.has(x.response.status)&&ue&&Pt(ue.formMethod))await Rn(I,B,{submission:pe({},ue,{formAction:P}),preventScrollReset:D,enableViewTransition:b?X:void 0});else{let J=fa(B,O);await Rn(I,B,{overrideNavigation:J,fetcherSubmission:V,preventScrollReset:D,enableViewTransition:b?X:void 0})}}async function Fr(p,x,b,j,O,V){let Q,P={};try{Q=await qg(u,p,x,b,j,O,V,i,o)}catch(B){return j.forEach(I=>{P[I.route.id]={type:ie.error,error:B}}),P}for(let[B,I]of Object.entries(Q))if(n0(I)){let F=I.result;P[B]={type:ie.redirect,response:Jg(F,b,B,O,s,c.v7_relativeSplatPath)}}else P[B]=await Xg(I);return P}async function Lu(p,x,b,j,O){let V=p.matches,Q=Fr("loader",p,O,b,x,null),P=Promise.all(j.map(async F=>{if(F.matches&&F.match&&F.controller){let ne=(await Fr("loader",p,or(e.history,F.path,F.controller.signal),[F.match],F.matches,F.key))[F.match.route.id];return{[F.key]:ne}}else return Promise.resolve({[F.key]:{type:ie.error,error:Ye(404,{pathname:F.path})}})})),B=await Q,I=(await P).reduce((F,ee)=>Object.assign(F,ee),{});return await Promise.all([i0(x,B,O.signal,V,p.loaderData),l0(x,I,j)]),{loaderResults:B,fetcherResults:I}}function Ml(){tt=!0,gt.push(...Al()),Ie.forEach((p,x)=>{M.has(x)&&(R.add(x),nn(x))})}function tn(p,x,b){b===void 0&&(b={}),g.fetchers.set(p,x),xe({fetchers:new Map(g.fetchers)},{flushSync:(b&&b.flushSync)===!0})}function Ft(p,x,b,j){j===void 0&&(j={});let O=yr(g.matches,x);Ko(p),xe({errors:{[O.route.id]:b},fetchers:new Map(g.fetchers)},{flushSync:(j&&j.flushSync)===!0})}function $u(p){return c.v7_fetcherPersist&&(xt.set(p,(xt.get(p)||0)+1),_e.has(p)&&_e.delete(p)),g.fetchers.get(p)||Fg}function Ko(p){let x=g.fetchers.get(p);M.has(p)&&!(x&&x.state==="loading"&&oe.has(p))&&nn(p),Ie.delete(p),oe.delete(p),Le.delete(p),_e.delete(p),R.delete(p),g.fetchers.delete(p)}function Mp(p){if(c.v7_fetcherPersist){let x=(xt.get(p)||0)-1;x<=0?(xt.delete(p),_e.add(p)):xt.set(p,x)}else Ko(p);xe({fetchers:new Map(g.fetchers)})}function nn(p){let x=M.get(p);q(x,"Expected fetch controller: "+p),x.abort(),M.delete(p)}function Nu(p){for(let x of p){let b=$u(x),j=ln(b.data);g.fetchers.set(x,j)}}function Du(){let p=[],x=!1;for(let b of Le){let j=g.fetchers.get(b);q(j,"Expected fetcher: "+b),j.state==="loading"&&(Le.delete(b),p.push(b),x=!0)}return Nu(p),x}function Mu(p){let x=[];for(let[b,j]of oe)if(j<p){let O=g.fetchers.get(b);q(O,"Expected fetcher: "+b),O.state==="loading"&&(nn(b),oe.delete(b),x.push(b))}return Nu(x),x.length>0}function Op(p,x){let b=g.blockers.get(p)||ir;return _.get(p)!==x&&_.set(p,x),b}function Ou(p){g.blockers.delete(p),_.delete(p)}function Go(p,x){let b=g.blockers.get(p)||ir;q(b.state==="unblocked"&&x.state==="blocked"||b.state==="blocked"&&x.state==="blocked"||b.state==="blocked"&&x.state==="proceeding"||b.state==="blocked"&&x.state==="unblocked"||b.state==="proceeding"&&x.state==="unblocked","Invalid blocker state transition: "+b.state+" -> "+x.state);let j=new Map(g.blockers);j.set(p,x),xe({blockers:j})}function Au(p){let{currentLocation:x,nextLocation:b,historyAction:j}=p;if(_.size===0)return;_.size>1&&$r(!1,"A router only supports one blocker at a time");let O=Array.from(_.entries()),[V,Q]=O[O.length-1],P=g.blockers.get(V);if(!(P&&P.state==="proceeding")&&Q({currentLocation:x,nextLocation:b,historyAction:j}))return V}function Ol(p){let x=Ye(404,{pathname:p}),b=a||l,{matches:j,route:O}=cd(b);return Al(),{notFoundMatches:j,route:O,error:x}}function qo(p,x){return{boundaryId:yr(x.partialMatches).route.id,error:Ye(400,{type:"route-discovery",pathname:p,message:x.error!=null&&"message"in x.error?x.error:String(x.error)})}}function Al(p){let x=[];return Fe.forEach((b,j)=>{(!p||p(j))&&(b.cancel(),x.push(j),Fe.delete(j))}),x}function Ap(p,x,b){if(C=p,m=x,h=b||null,!v&&g.navigation===ma){v=!0;let j=Fu(g.location,g.matches);j!=null&&xe({restoreScrollPosition:j})}return()=>{C=null,m=null,h=null}}function Iu(p,x){return h&&h(p,x.map(j=>gg(j,g.loaderData)))||p.key}function Ip(p,x){if(C&&m){let b=Iu(p,x);C[b]=m()}}function Fu(p,x){if(C){let b=Iu(p,x),j=C[b];if(typeof j=="number")return j}return null}function Yo(p,x,b){if(d){if(y.has(b))return{active:!1,matches:p};if(p){if(Object.keys(p[0].params).length>0)return{active:!0,matches:$i(x,b,s,!0)}}else return{active:!0,matches:$i(x,b,s,!0)||[]}}return{active:!1,matches:null}}async function Xo(p,x,b){let j=p;for(;;){let O=a==null,V=a||l;try{await Qg(d,x,j,V,i,o,L,b)}catch(B){return{type:"error",error:B,partialMatches:j}}finally{O&&(l=[...l])}if(b.aborted)return{type:"aborted"};let Q=dn(V,x,s);if(Q)return Uu(x,y),{type:"success",matches:Q};let P=$i(V,x,s,!0);if(!P||j.length===P.length&&j.every((B,I)=>B.route.id===P[I].route.id))return Uu(x,y),{type:"success",matches:null};j=P}}function Uu(p,x){if(x.size>=S){let b=x.values().next().value;x.delete(b)}x.add(p)}function Fp(p){i={},a=$o(p,o,void 0,i)}function Up(p,x){let b=a==null;tp(p,x,a||l,i,o),b&&(l=[...l],xe({}))}return N={get basename(){return s},get future(){return c},get state(){return g},get routes(){return l},get window(){return t},initialize:Ue,subscribe:ze,enableScrollRestoration:Ap,navigate:Pu,fetch:$p,revalidate:Tp,createHref:p=>e.history.createHref(p),encodeLocation:p=>e.history.encodeLocation(p),getFetcher:$u,deleteFetcher:Mp,dispose:We,getBlocker:Op,deleteBlocker:Ou,patchRoutes:Up,_internalFetchControllers:M,_internalActiveDeferreds:Fe,_internalSetRoutes:Fp},N}function Bg(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function ds(e,t,n,r,o,i,l,a){let s,u;if(l){s=[];for(let c of t)if(s.push(c),c.route.id===l){u=c;break}}else s=t,u=t[t.length-1];let d=fu(o||".",mu(s,i),qn(e.pathname,n)||e.pathname,a==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!vu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:qt([n,d.pathname])),Bo(d)}function nd(e,t,n,r){if(!r||!Bg(r))return{path:n};if(r.formMethod&&!o0(r.formMethod))return{path:n,error:Ye(405,{method:r.formMethod})};let o=()=>({path:n,error:Ye(400,{type:"invalid-body"})}),i=r.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=np(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Pt(l))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((w,S)=>{let[y,C]=S;return""+w+y+"="+C+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Pt(l))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}q(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=ms(r.formData),u=r.formData;else if(r.body instanceof FormData)s=ms(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=ld(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=ld(s)}catch{return o()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Pt(d.formMethod))return{path:n,submission:d};let c=Tn(n);return t&&c.search&&vu(c.search)&&s.append("index",""),c.search="?"+s,{path:Bo(c),submission:d}}function Hg(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function rd(e,t,n,r,o,i,l,a,s,u,d,c,f,w,S,y){let C=y?ut(y[1])?y[1].error:y[1].data:void 0,h=e.createURL(t.location),m=e.createURL(o),v=y&&ut(y[1])?y[0]:void 0,k=v?Hg(n,v):n,T=y?y[1].statusCode:void 0,$=l&&T&&T>=400,N=k.filter((U,D)=>{let{route:W}=U;if(W.lazy)return!0;if(W.loader==null)return!1;if(i)return typeof W.loader!="function"||W.loader.hydrate?!0:t.loaderData[W.id]===void 0&&(!t.errors||t.errors[W.id]===void 0);if(Wg(t.loaderData,t.matches[D],U)||s.some(se=>se===U.route.id))return!0;let X=t.matches[D],fe=U;return od(U,pe({currentUrl:h,currentParams:X.params,nextUrl:m,nextParams:fe.params},r,{actionResult:C,actionStatus:T,defaultShouldRevalidate:$?!1:a||h.pathname+h.search===m.pathname+m.search||h.search!==m.search||ep(X,fe)}))}),g=[];return c.forEach((U,D)=>{if(i||!n.some(Ae=>Ae.route.id===U.routeId)||d.has(D))return;let W=dn(w,U.path,S);if(!W){g.push({key:D,routeId:U.routeId,path:U.path,matches:null,match:null,controller:null});return}let X=t.fetchers.get(D),fe=ro(W,U.path),se=!1;f.has(D)?se=!1:u.has(D)?(u.delete(D),se=!0):X&&X.state!=="idle"&&X.data===void 0?se=a:se=od(fe,pe({currentUrl:h,currentParams:t.matches[t.matches.length-1].params,nextUrl:m,nextParams:n[n.length-1].params},r,{actionResult:C,actionStatus:T,defaultShouldRevalidate:$?!1:a})),se&&g.push({key:D,routeId:U.routeId,path:U.path,matches:W,match:fe,controller:new AbortController})}),[N,g]}function Wg(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function ep(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function od(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Qg(e,t,n,r,o,i,l,a){let s=[t,...n.map(u=>u.route.id)].join("-");try{let u=l.get(s);u||(u=e({path:t,matches:n,patch:(d,c)=>{a.aborted||tp(d,c,r,o,i)}}),l.set(s,u)),u&&t0(u)&&await u}finally{l.delete(s)}}function tp(e,t,n,r,o){if(e){var i;let l=r[e];q(l,"No route found to patch children into: routeId = "+e);let a=$o(t,o,[e,"patch",String(((i=l.children)==null?void 0:i.length)||"0")],r);l.children?l.children.push(...a):l.children=a}else{let l=$o(t,o,["patch",String(n.length||"0")],r);n.push(...l)}}async function Kg(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];q(o,"No route found in manifest");let i={};for(let l in r){let s=o[l]!==void 0&&l!=="hasErrorBoundary";$r(!s,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!hg.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,pe({},t(o),{lazy:void 0}))}async function Gg(e){let{matches:t}=e,n=t.filter(o=>o.shouldLoad);return(await Promise.all(n.map(o=>o.resolve()))).reduce((o,i,l)=>Object.assign(o,{[n[l].route.id]:i}),{})}async function qg(e,t,n,r,o,i,l,a,s,u){let d=i.map(w=>w.route.lazy?Kg(w.route,s,a):void 0),c=i.map((w,S)=>{let y=d[S],C=o.some(m=>m.route.id===w.route.id);return pe({},w,{shouldLoad:C,resolve:async m=>(m&&r.method==="GET"&&(w.route.lazy||w.route.loader)&&(C=!0),C?Yg(t,r,w,y,m,u):Promise.resolve({type:ie.data,result:void 0}))})}),f=await e({matches:c,request:r,params:i[0].params,fetcherKey:l,context:u});try{await Promise.all(d)}catch{}return f}async function Yg(e,t,n,r,o,i){let l,a,s=u=>{let d,c=new Promise((S,y)=>d=y);a=()=>d(),t.signal.addEventListener("abort",a);let f=S=>typeof u!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):u({request:t,params:n.params,context:i},...S!==void 0?[S]:[]),w=(async()=>{try{return{type:"data",result:await(o?o(y=>f(y)):f())}}catch(S){return{type:"error",result:S}}})();return Promise.race([w,c])};try{let u=n.route[e];if(r)if(u){let d,[c]=await Promise.all([s(u).catch(f=>{d=f}),r]);if(d!==void 0)throw d;l=c}else if(await r,u=n.route[e],u)l=await s(u);else if(e==="action"){let d=new URL(t.url),c=d.pathname+d.search;throw Ye(405,{method:t.method,pathname:c,routeId:n.route.id})}else return{type:ie.data,result:void 0};else if(u)l=await s(u);else{let d=new URL(t.url),c=d.pathname+d.search;throw Ye(404,{pathname:c})}q(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(u){return{type:ie.error,result:u}}finally{a&&t.signal.removeEventListener("abort",a)}return l}async function Xg(e){let{result:t,type:n}=e;if(rp(t)){let u;try{let d=t.headers.get("Content-Type");d&&/\bapplication\/json\b/.test(d)?t.body==null?u=null:u=await t.json():u=await t.text()}catch(d){return{type:ie.error,error:d}}return n===ie.error?{type:ie.error,error:new il(t.status,t.statusText,u),statusCode:t.status,headers:t.headers}:{type:ie.data,data:u,statusCode:t.status,headers:t.headers}}if(n===ie.error){if(dd(t)){var r;if(t.data instanceof Error){var o;return{type:ie.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status}}t=new il(((r=t.init)==null?void 0:r.status)||500,void 0,t.data)}return{type:ie.error,error:t,statusCode:Cl(t)?t.status:void 0}}if(r0(t)){var i,l;return{type:ie.deferred,deferredData:t,statusCode:(i=t.init)==null?void 0:i.status,headers:((l=t.init)==null?void 0:l.headers)&&new Headers(t.init.headers)}}if(dd(t)){var a,s;return{type:ie.data,data:t.data,statusCode:(a=t.init)==null?void 0:a.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:ie.data,data:t}}function Jg(e,t,n,r,o,i){let l=e.headers.get("Location");if(q(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!pu.test(l)){let a=r.slice(0,r.findIndex(s=>s.route.id===n)+1);l=ds(new URL(t.url),a,o,!0,l,i),e.headers.set("Location",l)}return e}function id(e,t,n){if(pu.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=qn(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function or(e,t,n,r){let o=e.createURL(np(t)).toString(),i={signal:n};if(r&&Pt(r.formMethod)){let{formMethod:l,formEncType:a}=r;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=ms(r.formData):i.body=r.formData}return new Request(o,i)}function ms(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function ld(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function Zg(e,t,n,r,o){let i={},l=null,a,s=!1,u={},d=n&&ut(n[1])?n[1].error:void 0;return e.forEach(c=>{if(!(c.route.id in t))return;let f=c.route.id,w=t[f];if(q(!In(w),"Cannot handle redirect results in processLoaderData"),ut(w)){let S=w.error;d!==void 0&&(S=d,d=void 0),l=l||{};{let y=yr(e,f);l[y.route.id]==null&&(l[y.route.id]=S)}i[f]=void 0,s||(s=!0,a=Cl(w.error)?w.error.status:500),w.headers&&(u[f]=w.headers)}else hn(w)?(r.set(f,w.deferredData),i[f]=w.deferredData.data,w.statusCode!=null&&w.statusCode!==200&&!s&&(a=w.statusCode),w.headers&&(u[f]=w.headers)):(i[f]=w.data,w.statusCode&&w.statusCode!==200&&!s&&(a=w.statusCode),w.headers&&(u[f]=w.headers))}),d!==void 0&&n&&(l={[n[0]]:d},i[n[0]]=void 0),{loaderData:i,errors:l,statusCode:a||200,loaderHeaders:u}}function ad(e,t,n,r,o,i,l,a){let{loaderData:s,errors:u}=Zg(t,r,o,a);return i.forEach(d=>{let{key:c,match:f,controller:w}=d,S=l[c];if(q(S,"Did not find corresponding fetcher result"),!(w&&w.signal.aborted))if(ut(S)){let y=yr(e.matches,f?.route.id);u&&u[y.route.id]||(u=pe({},u,{[y.route.id]:S.error})),e.fetchers.delete(c)}else if(In(S))q(!1,"Unhandled fetcher revalidation redirect");else if(hn(S))q(!1,"Unhandled fetcher deferred data");else{let y=ln(S.data);e.fetchers.set(c,y)}}),{loaderData:s,errors:u}}function sd(e,t,n,r){let o=pe({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function ud(e){return e?ut(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function yr(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function cd(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Ye(e,t){let{pathname:n,routeId:r,method:o,type:i,message:l}=t===void 0?{}:t,a="Unknown Server Error",s="Unknown @remix-run/router error";return e===400?(a="Bad Request",i==="route-discovery"?s='Unable to match URL "'+n+'" - the `unstable_patchRoutesOnNavigation()` '+(`function threw the following error:
`+l):o&&n&&r?s="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?s="defer() is not supported in actions":i==="invalid-body"&&(s="Unable to encode submission body")):e===403?(a="Forbidden",s='Route "'+r+'" does not match URL "'+n+'"'):e===404?(a="Not Found",s='No route matches URL "'+n+'"'):e===405&&(a="Method Not Allowed",o&&n&&r?s="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(s='Invalid request method "'+o.toUpperCase()+'"')),new il(e||500,a,new Error(s),!0)}function yi(e){let t=Object.entries(e);for(let n=t.length-1;n>=0;n--){let[r,o]=t[n];if(In(o))return{key:r,result:o}}}function np(e){let t=typeof e=="string"?Tn(e):e;return Bo(pe({},t,{hash:""}))}function e0(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function t0(e){return typeof e=="object"&&e!=null&&"then"in e}function n0(e){return rp(e.result)&&Ag.has(e.result.status)}function hn(e){return e.type===ie.deferred}function ut(e){return e.type===ie.error}function In(e){return(e&&e.type)===ie.redirect}function dd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function r0(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function rp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function o0(e){return Og.has(e.toLowerCase())}function Pt(e){return Dg.has(e.toLowerCase())}async function i0(e,t,n,r,o){let i=Object.entries(t);for(let l=0;l<i.length;l++){let[a,s]=i[l],u=e.find(f=>f?.route.id===a);if(!u)continue;let d=r.find(f=>f.route.id===u.route.id),c=d!=null&&!ep(d,u)&&(o&&o[u.route.id])!==void 0;hn(s)&&c&&await hu(s,n,!1).then(f=>{f&&(t[a]=f)})}}async function l0(e,t,n){for(let r=0;r<n.length;r++){let{key:o,routeId:i,controller:l}=n[r],a=t[o];e.find(u=>u?.route.id===i)&&hn(a)&&(q(l,"Expected an AbortController for revalidating fetcher deferred result"),await hu(a,l.signal,!0).then(u=>{u&&(t[o]=u)}))}}async function hu(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ie.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ie.error,error:o}}return{type:ie.data,data:e.deferredData.data}}}function vu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function ro(e,t){let n=typeof t=="string"?Tn(t).search:t.search;if(e[e.length-1].route.index&&vu(n||""))return e[e.length-1];let r=Xf(e);return r[r.length-1]}function md(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:l}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function fa(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function a0(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Yr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function s0(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function ln(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function u0(e,t){try{let n=e.sessionStorage.getItem(Zf);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function c0(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(Zf,JSON.stringify(n))}catch(r){$r(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nr(){return Nr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nr.apply(this,arguments)}const _l=E.createContext(null),op=E.createContext(null),Ir=E.createContext(null),gu=E.createContext(null),er=E.createContext({outlet:null,matches:[],isDataRoute:!1}),ip=E.createContext(null);function d0(e,t){let{relative:n}={};Ho()||q(!1);let{basename:r,navigator:o}=E.useContext(Ir),{hash:i,pathname:l,search:a}=f0(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:qt([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Ho(){return E.useContext(gu)!=null}function zl(){return Ho()||q(!1),E.useContext(gu).location}function lp(e){E.useContext(Ir).static||E.useLayoutEffect(e)}function ap(){let{isDataRoute:e}=E.useContext(er);return e?E0():m0()}function m0(){Ho()||q(!1);let e=E.useContext(_l),{basename:t,future:n,navigator:r}=E.useContext(Ir),{matches:o}=E.useContext(er),{pathname:i}=zl(),l=JSON.stringify(mu(o,n.v7_relativeSplatPath)),a=E.useRef(!1);return lp(()=>{a.current=!0}),E.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=fu(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(c.pathname=c.pathname==="/"?t:qt([t,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[t,r,l,i,e])}function f0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=E.useContext(Ir),{matches:o}=E.useContext(er),{pathname:i}=zl(),l=JSON.stringify(mu(o,r.v7_relativeSplatPath));return E.useMemo(()=>fu(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function p0(e,t,n,r){Ho()||q(!1);let{navigator:o}=E.useContext(Ir),{matches:i}=E.useContext(er),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=zl(),d;d=u;let c=d.pathname||"/",f=c;if(s!=="/"){let y=s.replace(/^\//,"").split("/");f="/"+c.replace(/^\//,"").split("/").slice(y.length).join("/")}let w=dn(e,{pathname:f});return y0(w&&w.map(y=>Object.assign({},y,{params:Object.assign({},a,y.params),pathname:qt([s,o.encodeLocation?o.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?s:qt([s,o.encodeLocation?o.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n,r)}function h0(){let e=b0(),t=Cl(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:o},n):null,null)}const v0=E.createElement(h0,null);class g0 extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(er.Provider,{value:this.props.routeContext},E.createElement(ip.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function x0(e){let{routeContext:t,match:n,children:r}=e,o=E.useContext(_l);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(er.Provider,{value:t},r)}function y0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(c=>c.route.id&&a?.[c.route.id]!==void 0);d>=0||q(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let c=l[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:w}=n,S=c.route.loader&&f[c.route.id]===void 0&&(!w||w[c.route.id]===void 0);if(c.route.lazy||S){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,c,f)=>{let w,S=!1,y=null,C=null;n&&(w=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||v0,s&&(u<0&&f===0?(j0("route-fallback"),S=!0,C=null):u===f&&(S=!0,C=c.route.hydrateFallbackElement||null)));let h=t.concat(l.slice(0,f+1)),m=()=>{let v;return w?v=y:S?v=C:c.route.Component?v=E.createElement(c.route.Component,null):c.route.element?v=c.route.element:v=d,E.createElement(x0,{match:c,routeContext:{outlet:d,matches:h,isDataRoute:n!=null},children:v})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?E.createElement(g0,{location:n.location,revalidation:n.revalidation,component:y,error:w,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()},null)}var xu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xu||{}),No=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(No||{});function sp(e){let t=E.useContext(_l);return t||q(!1),t}function up(e){let t=E.useContext(op);return t||q(!1),t}function w0(e){let t=E.useContext(er);return t||q(!1),t}function cp(e){let t=w0(),n=t.matches[t.matches.length-1];return n.route.id||q(!1),n.route.id}function b0(){var e;let t=E.useContext(ip),n=up(No.UseRouteError),r=cp(No.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}let S0=0;function k0(e){let{router:t,basename:n}=sp(xu.UseBlocker),r=up(No.UseBlocker),[o,i]=E.useState(""),l=E.useCallback(a=>{if(typeof e!="function")return!!e;if(n==="/")return e(a);let{currentLocation:s,nextLocation:u,historyAction:d}=a;return e({currentLocation:Nr({},s,{pathname:qn(s.pathname,n)||s.pathname}),nextLocation:Nr({},u,{pathname:qn(u.pathname,n)||u.pathname}),historyAction:d})},[n,e]);return E.useEffect(()=>{let a=String(++S0);return i(a),()=>t.deleteBlocker(a)},[t]),E.useEffect(()=>{o!==""&&t.getBlocker(o,l)},[t,o,l]),o&&r.blockers.has(o)?r.blockers.get(o):ir}function E0(){let{router:e}=sp(xu.UseNavigateStable),t=cp(No.UseNavigateStable),n=E.useRef(!1);return lp(()=>{n.current=!0}),E.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Nr({fromRouteId:t},i)))},[e,t])}const fd={};function j0(e,t,n){fd[e]||(fd[e]=!0)}function C0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=je.Pop,navigator:i,static:l=!1,future:a}=e;Ho()&&q(!1);let s=t.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:s,navigator:i,static:l,future:Nr({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=Tn(r));let{pathname:d="/",search:c="",hash:f="",state:w=null,key:S="default"}=r,y=E.useMemo(()=>{let C=qn(d,s);return C==null?null:{location:{pathname:C,search:c,hash:f,state:w,key:S},navigationType:o}},[s,d,c,f,w,S,o]);return y==null?null:E.createElement(Ir.Provider,{value:u},E.createElement(gu.Provider,{children:n,value:y}))}new Promise(()=>{});function _0(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:E.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:E.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:E.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}const z0="6";try{window.__reactRouterVersion=z0}catch{}function T0(e,t){return Vg({basename:t?.basename,future:ll({},t?.future,{v7_prependBasename:!0}),history:mg({window:t?.window}),hydrationData:t?.hydrationData||P0(),routes:e,mapRouteProperties:_0,unstable_dataStrategy:t?.unstable_dataStrategy,unstable_patchRoutesOnNavigation:t?.unstable_patchRoutesOnNavigation,window:t?.window}).initialize()}function P0(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=ll({},t,{errors:R0(t.errors)})),t}function R0(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new il(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let l=new i(o.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const L0=E.createContext({isTransitioning:!1}),$0=E.createContext(new Map),N0="startTransition",pd=ih[N0],D0="flushSync",hd=dg[D0];function M0(e){pd?pd(e):e()}function Xr(e){hd?hd(e):e()}class O0{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function A0(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=E.useState(n.state),[l,a]=E.useState(),[s,u]=E.useState({isTransitioning:!1}),[d,c]=E.useState(),[f,w]=E.useState(),[S,y]=E.useState(),C=E.useRef(new Map),{v7_startTransition:h}=r||{},m=E.useCallback(g=>{h?M0(g):g()},[h]),v=E.useCallback((g,U)=>{let{deletedFetchers:D,unstable_flushSync:W,unstable_viewTransitionOpts:X}=U;D.forEach(se=>C.current.delete(se)),g.fetchers.forEach((se,Ae)=>{se.data!==void 0&&C.current.set(Ae,se.data)});let fe=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!X||fe){W?Xr(()=>i(g)):m(()=>i(g));return}if(W){Xr(()=>{f&&(d&&d.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:X.currentLocation,nextLocation:X.nextLocation})});let se=n.window.document.startViewTransition(()=>{Xr(()=>i(g))});se.finished.finally(()=>{Xr(()=>{c(void 0),w(void 0),a(void 0),u({isTransitioning:!1})})}),Xr(()=>w(se));return}f?(d&&d.resolve(),f.skipTransition(),y({state:g,currentLocation:X.currentLocation,nextLocation:X.nextLocation})):(a(g),u({isTransitioning:!0,flushSync:!1,currentLocation:X.currentLocation,nextLocation:X.nextLocation}))},[n.window,f,d,C,m]);E.useLayoutEffect(()=>n.subscribe(v),[n,v]),E.useEffect(()=>{s.isTransitioning&&!s.flushSync&&c(new O0)},[s]),E.useEffect(()=>{if(d&&l&&n.window){let g=l,U=d.promise,D=n.window.document.startViewTransition(async()=>{m(()=>i(g)),await U});D.finished.finally(()=>{c(void 0),w(void 0),a(void 0),u({isTransitioning:!1})}),w(D)}},[m,l,d,n.window]),E.useEffect(()=>{d&&l&&o.location.key===l.location.key&&d.resolve()},[d,f,o.location,l]),E.useEffect(()=>{!s.isTransitioning&&S&&(a(S.state),u({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),y(void 0))},[s.isTransitioning,S]),E.useEffect(()=>{},[]);let k=E.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:g=>n.navigate(g),push:(g,U,D)=>n.navigate(g,{state:U,preventScrollReset:D?.preventScrollReset}),replace:(g,U,D)=>n.navigate(g,{replace:!0,state:U,preventScrollReset:D?.preventScrollReset})}),[n]),T=n.basename||"/",$=E.useMemo(()=>({router:n,navigator:k,static:!1,basename:T}),[n,k,T]),N=E.useMemo(()=>({v7_relativeSplatPath:n.future.v7_relativeSplatPath}),[n.future.v7_relativeSplatPath]);return E.createElement(E.Fragment,null,E.createElement(_l.Provider,{value:$},E.createElement(op.Provider,{value:o},E.createElement($0.Provider,{value:C.current},E.createElement(L0.Provider,{value:s},E.createElement(C0,{basename:T,location:o.location,navigationType:o.historyAction,navigator:k,future:N},o.initialized||n.future.v7_partialHydration?E.createElement(I0,{routes:n.routes,future:n.future,state:o}):t))))),null)}const I0=E.memo(F0);function F0(e){let{routes:t,future:n,state:r}=e;return p0(t,void 0,r,n)}var vd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(vd||(vd={}));var gd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(gd||(gd={}));const U0="modulepreload",V0=function(e,t){return new URL(e,t).href},xd={},fs=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),s=a?.nonce||a?.getAttribute("nonce");o=Promise.allSettled(n.map(u=>{if(u=V0(u,r),u in xd)return;xd[u]=!0;const d=u.endsWith(".css"),c=d?'[rel="stylesheet"]':"";if(!!r)for(let S=l.length-1;S>=0;S--){const y=l[S];if(y.href===u&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${c}`))return;const w=document.createElement("link");if(w.rel=d?"stylesheet":U0,d||(w.as="script"),w.crossOrigin="",w.href=u,s&&w.setAttribute("nonce",s),document.head.appendChild(w),d)return new Promise((S,y)=>{w.addEventListener("load",S),w.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(l){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=l,window.dispatchEvent(a),!a.defaultPrevented)throw l}return o.then(l=>{for(const a of l||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};var pa,Pe;(function(e){e.CONNECTED="connected",e.LOADING="loading",e.RECONNECTING="reconnecting",e.CONNECTION_LOST="connection-lost"})(Pe||(Pe={}));class B0{constructor(t){this.stateChangeListeners=new Set,this.loadingCount=0,this.connectionState=t,this.serviceWorkerMessageListener=this.serviceWorkerMessageListener.bind(this),navigator.serviceWorker&&(navigator.serviceWorker.addEventListener("message",this.serviceWorkerMessageListener),navigator.serviceWorker.ready.then(n=>{var r;(r=n.active)===null||r===void 0||r.postMessage({method:"Vaadin.ServiceWorker.isConnectionLost",id:"Vaadin.ServiceWorker.isConnectionLost"})}))}addStateChangeListener(t){this.stateChangeListeners.add(t)}removeStateChangeListener(t){this.stateChangeListeners.delete(t)}loadingStarted(){this.state=Pe.LOADING,this.loadingCount+=1}loadingFinished(){this.decreaseLoadingCount(Pe.CONNECTED)}loadingFailed(){this.decreaseLoadingCount(Pe.CONNECTION_LOST)}decreaseLoadingCount(t){this.loadingCount>0&&(this.loadingCount-=1,this.loadingCount===0&&(this.state=t))}get state(){return this.connectionState}set state(t){if(t!==this.connectionState){const n=this.connectionState;this.connectionState=t,this.loadingCount=0;for(const r of this.stateChangeListeners)r(n,this.connectionState)}}get online(){return this.connectionState===Pe.CONNECTED||this.connectionState===Pe.LOADING}get offline(){return!this.online}serviceWorkerMessageListener(t){typeof t.data=="object"&&t.data.id==="Vaadin.ServiceWorker.isConnectionLost"&&(t.data.result===!0&&(this.state=Pe.CONNECTION_LOST),navigator.serviceWorker.removeEventListener("message",this.serviceWorkerMessageListener))}}const H0=e=>!!(e==="localhost"||e==="[::1]"||/^127\.\d+\.\d+\.\d+$/u.exec(e)),wi=window;if(!(!((pa=wi.Vaadin)===null||pa===void 0)&&pa.connectionState)){let e;H0(window.location.hostname)?e=!0:e=navigator.onLine,wi.Vaadin||(wi.Vaadin={}),wi.Vaadin.connectionState=new B0(e?Pe.CONNECTED:Pe.CONNECTION_LOST)}function ht(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(l=e[a])&&(i=(o<3?l(i):o>3?l(t,n,i):l(t,n))||i);return o>3&&i&&Object.defineProperty(t,n,i),i}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=globalThis,yu=Ni.ShadowRoot&&(Ni.ShadyCSS===void 0||Ni.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wu=Symbol(),yd=new WeakMap;let bu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==wu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(yu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=yd.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&yd.set(n,t))}return t}toString(){return this.cssText}};const Su=e=>new bu(typeof e=="string"?e:e+"",void 0,wu),ke=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new bu(n,e,wu)},dp=(e,t)=>{if(yu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=Ni.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},wd=yu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Su(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:W0,defineProperty:Q0,getOwnPropertyDescriptor:K0,getOwnPropertyNames:G0,getOwnPropertySymbols:q0,getPrototypeOf:Y0}=Object,Tl=globalThis,bd=Tl.trustedTypes,X0=bd?bd.emptyScript:"",J0=Tl.reactiveElementPolyfillSupport,po=(e,t)=>e,al={toAttribute(e,t){switch(t){case Boolean:e=e?X0:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ku=(e,t)=>!W0(e,t),Sd={attribute:!0,type:String,converter:al,reflect:!1,hasChanged:ku};Symbol.metadata??=Symbol("metadata"),Tl.litPropertyMetadata??=new WeakMap;let lr=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Sd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Q0(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=K0(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o?.call(this)},set(l){const a=o?.call(this);i.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Sd}static _$Ei(){if(this.hasOwnProperty(po("elementProperties")))return;const t=Y0(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(po("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(po("properties"))){const n=this.properties,r=[...G0(n),...q0(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(wd(o))}else t!==void 0&&n.push(wd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dp(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:al).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:al;this._$Em=o,this[o]=l.fromAttribute(n,i.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??ku)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],i)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};lr.elementStyles=[],lr.shadowRootOptions={mode:"open"},lr[po("elementProperties")]=new Map,lr[po("finalized")]=new Map,J0?.({ReactiveElement:lr}),(Tl.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Eu=globalThis,sl=Eu.trustedTypes,kd=sl?sl.createPolicy("lit-html",{createHTML:e=>e}):void 0,mp="$lit$",mn=`lit$${Math.random().toFixed(9).slice(2)}$`,fp="?"+mn,Z0=`<${fp}>`,Yn=document,Do=()=>Yn.createComment(""),Mo=e=>e===null||typeof e!="object"&&typeof e!="function",ju=Array.isArray,ex=e=>ju(e)||typeof e?.[Symbol.iterator]=="function",ha=`[ 	
\f\r]`,Jr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ed=/-->/g,jd=/>/g,$n=RegExp(`>|${ha}(?:([^\\s"'>=/]+)(${ha}*=${ha}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cd=/'/g,_d=/"/g,pp=/^(?:script|style|textarea|title)$/i,hp=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),tx=hp(1),jy=hp(2),Xn=Symbol.for("lit-noChange"),De=Symbol.for("lit-nothing"),zd=new WeakMap,Fn=Yn.createTreeWalker(Yn,129);function vp(e,t){if(!ju(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return kd!==void 0?kd.createHTML(t):t}const nx=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",l=Jr;for(let a=0;a<n;a++){const s=e[a];let u,d,c=-1,f=0;for(;f<s.length&&(l.lastIndex=f,d=l.exec(s),d!==null);)f=l.lastIndex,l===Jr?d[1]==="!--"?l=Ed:d[1]!==void 0?l=jd:d[2]!==void 0?(pp.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=$n):d[3]!==void 0&&(l=$n):l===$n?d[0]===">"?(l=o??Jr,c=-1):d[1]===void 0?c=-2:(c=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?$n:d[3]==='"'?_d:Cd):l===_d||l===Cd?l=$n:l===Ed||l===jd?l=Jr:(l=$n,o=void 0);const w=l===$n&&e[a+1].startsWith("/>")?" ":"";i+=l===Jr?s+Z0:c>=0?(r.push(u),s.slice(0,c)+mp+s.slice(c)+mn+w):s+mn+(c===-2?a:w)}return[vp(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Oo{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const a=t.length-1,s=this.parts,[u,d]=nx(t,n);if(this.el=Oo.createElement(u,r),Fn.currentNode=this.el.content,n===2||n===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=Fn.nextNode())!==null&&s.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(mp)){const f=d[l++],w=o.getAttribute(c).split(mn),S=/([.?@])?(.*)/.exec(f);s.push({type:1,index:i,name:S[2],strings:w,ctor:S[1]==="."?ox:S[1]==="?"?ix:S[1]==="@"?lx:Pl}),o.removeAttribute(c)}else c.startsWith(mn)&&(s.push({type:6,index:i}),o.removeAttribute(c));if(pp.test(o.tagName)){const c=o.textContent.split(mn),f=c.length-1;if(f>0){o.textContent=sl?sl.emptyScript:"";for(let w=0;w<f;w++)o.append(c[w],Do()),Fn.nextNode(),s.push({type:2,index:++i});o.append(c[f],Do())}}}else if(o.nodeType===8)if(o.data===fp)s.push({type:2,index:i});else{let c=-1;for(;(c=o.data.indexOf(mn,c+1))!==-1;)s.push({type:7,index:i}),c+=mn.length-1}i++}}static createElement(t,n){const r=Yn.createElement("template");return r.innerHTML=t,r}}function Dr(e,t,n=e,r){if(t===Xn)return t;let o=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Mo(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(t=Dr(e,o._$AS(e,t.values),o,r)),t}class rx{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??Yn).importNode(n,!0);Fn.currentNode=o;let i=Fn.nextNode(),l=0,a=0,s=r[0];for(;s!==void 0;){if(l===s.index){let u;s.type===2?u=new Wo(i,i.nextSibling,this,t):s.type===1?u=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(u=new ax(i,this,t)),this._$AV.push(u),s=r[++a]}l!==s?.index&&(i=Fn.nextNode(),l++)}return Fn.currentNode=Yn,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Wo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=De,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Dr(this,t,n),Mo(t)?t===De||t==null||t===""?(this._$AH!==De&&this._$AR(),this._$AH=De):t!==this._$AH&&t!==Xn&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ex(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==De&&Mo(this._$AH)?this._$AA.nextSibling.data=t:this.T(Yn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Oo.createElement(vp(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new rx(o,this),l=i.u(this.options);i.p(n),this.T(l),this._$AH=i}}_$AC(t){let n=zd.get(t.strings);return n===void 0&&zd.set(t.strings,n=new Oo(t)),n}k(t){ju(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Wo(this.O(Do()),this.O(Do()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}let Pl=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=De,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=De}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=Dr(this,t,n,0),l=!Mo(t)||t!==this._$AH&&t!==Xn,l&&(this._$AH=t);else{const a=t;let s,u;for(t=i[0],s=0;s<i.length-1;s++)u=Dr(this,a[r+s],n,s),u===Xn&&(u=this._$AH[s]),l||=!Mo(u)||u!==this._$AH[s],u===De?t=De:t!==De&&(t+=(u??"")+i[s+1]),this._$AH[s]=u}l&&!o&&this.j(t)}j(t){t===De?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class ox extends Pl{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===De?void 0:t}}class ix extends Pl{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==De)}}class lx extends Pl{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Dr(this,t,n,0)??De)===Xn)return;const r=this._$AH,o=t===De&&r!==De||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==De&&(r===De||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ax{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Dr(this,t)}}const sx=Eu.litHtmlPolyfillSupport;sx?.(Oo,Wo),(Eu.litHtmlVersions??=[]).push("3.2.1");const ux=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new Wo(t.insertBefore(Do(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Bn=class extends lr{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ux(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xn}};Bn._$litElement$=!0,Bn.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:Bn});const cx=globalThis.litElementPolyfillSupport;cx?.({LitElement:Bn});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dx={attribute:!0,type:String,converter:al,reflect:!1,hasChanged:ku},mx=(e=dx,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),i.set(n.name,e),r==="accessor"){const{name:l}=n;return{set(a){const s=t.get.call(this);t.set.call(this,a),this.requestUpdate(l,s,e)},init(a){return a!==void 0&&this.P(l,void 0,e),a}}}if(r==="setter"){const{name:l}=n;return function(a){const s=this[l];t.call(this,a),this.requestUpdate(l,s,e)}}throw Error("Unsupported decorator location: "+r)};function vt(e){return(t,n)=>typeof n=="object"?mx(e,t,n):((r,o,i)=>{const l=o.hasOwnProperty(i);return o.constructor.createProperty(i,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fx={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},px=e=>(...t)=>({_$litDirective$:e,values:t});class hx{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vx=px(class extends hx{constructor(e){if(super(e),e.type!==fx.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(t)}const n=e.element.classList;for(const r of this.st)r in t||(n.remove(r),this.st.delete(r));for(const r in t){const o=!!t[r];o===this.st.has(r)||this.nt?.has(r)||(o?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Xn}}),va="css-loading-indicator";var _t;(function(e){e.IDLE="",e.FIRST="first",e.SECOND="second",e.THIRD="third"})(_t||(_t={}));class Oe extends Bn{static create(){var t,n;const r=window;return!((t=r.Vaadin)===null||t===void 0)&&t.connectionIndicator||(r.Vaadin||(r.Vaadin={}),r.Vaadin.connectionIndicator=document.createElement("vaadin-connection-indicator"),document.body.appendChild(r.Vaadin.connectionIndicator)),(n=r.Vaadin)===null||n===void 0?void 0:n.connectionIndicator}constructor(){super(),this.firstDelay=450,this.secondDelay=1500,this.thirdDelay=5e3,this.expandedDuration=2e3,this.onlineText="Online",this.offlineText="Connection lost",this.reconnectingText="Connection lost, trying to reconnect...",this.offline=!1,this.reconnecting=!1,this.expanded=!1,this.loading=!1,this.loadingBarState=_t.IDLE,this.applyDefaultThemeState=!0,this.firstTimeout=0,this.secondTimeout=0,this.thirdTimeout=0,this.expandedTimeout=0,this.lastMessageState=Pe.CONNECTED,this.connectionStateListener=()=>{this.expanded=this.updateConnectionState(),this.expandedTimeout=this.timeoutFor(this.expandedTimeout,this.expanded,()=>{this.expanded=!1},this.expandedDuration)}}render(){return tx`
      <div class="v-loading-indicator ${this.loadingBarState}" style=${this.getLoadingBarStyle()}></div>

      <div
        class="v-status-message ${vx({active:this.reconnecting})}"
      >
        <span class="text"> ${this.renderMessage()} </span>
      </div>
    `}connectedCallback(){var t;super.connectedCallback();const n=window;!((t=n.Vaadin)===null||t===void 0)&&t.connectionState&&(this.connectionStateStore=n.Vaadin.connectionState,this.connectionStateStore.addStateChangeListener(this.connectionStateListener),this.updateConnectionState()),this.updateTheme()}disconnectedCallback(){super.disconnectedCallback(),this.connectionStateStore&&this.connectionStateStore.removeStateChangeListener(this.connectionStateListener),this.updateTheme()}get applyDefaultTheme(){return this.applyDefaultThemeState}set applyDefaultTheme(t){t!==this.applyDefaultThemeState&&(this.applyDefaultThemeState=t,this.updateTheme())}createRenderRoot(){return this}updateConnectionState(){var t;const n=(t=this.connectionStateStore)===null||t===void 0?void 0:t.state;return this.offline=n===Pe.CONNECTION_LOST,this.reconnecting=n===Pe.RECONNECTING,this.updateLoading(n===Pe.LOADING),this.loading?!1:n!==this.lastMessageState?(this.lastMessageState=n,!0):!1}updateLoading(t){this.loading=t,this.loadingBarState=_t.IDLE,this.firstTimeout=this.timeoutFor(this.firstTimeout,t,()=>{this.loadingBarState=_t.FIRST},this.firstDelay),this.secondTimeout=this.timeoutFor(this.secondTimeout,t,()=>{this.loadingBarState=_t.SECOND},this.secondDelay),this.thirdTimeout=this.timeoutFor(this.thirdTimeout,t,()=>{this.loadingBarState=_t.THIRD},this.thirdDelay)}renderMessage(){return this.reconnecting?this.reconnectingText:this.offline?this.offlineText:this.onlineText}updateTheme(){if(this.applyDefaultThemeState&&this.isConnected){if(!document.getElementById(va)){const t=document.createElement("style");t.id=va,t.textContent=this.getDefaultStyle(),document.head.appendChild(t)}}else{const t=document.getElementById(va);t&&document.head.removeChild(t)}}getDefaultStyle(){return`
      @keyframes v-progress-start {
        0% {
          width: 0%;
        }
        100% {
          width: 50%;
        }
      }
      @keyframes v-progress-delay {
        0% {
          width: 50%;
        }
        100% {
          width: 90%;
        }
      }
      @keyframes v-progress-wait {
        0% {
          width: 90%;
          height: 4px;
        }
        3% {
          width: 91%;
          height: 7px;
        }
        100% {
          width: 96%;
          height: 7px;
        }
      }
      @keyframes v-progress-wait-pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .v-loading-indicator,
      .v-status-message {
        position: fixed;
        z-index: 251;
        left: 0;
        right: auto;
        top: 0;
        background-color: var(--lumo-primary-color, var(--material-primary-color, blue));
        transition: none;
      }
      .v-loading-indicator {
        width: 50%;
        height: 4px;
        opacity: 1;
        pointer-events: none;
        animation: v-progress-start 1000ms 200ms both;
      }
      .v-loading-indicator[style*='none'] {
        display: block !important;
        width: 100%;
        opacity: 0;
        animation: none;
        transition: opacity 500ms 300ms, width 300ms;
      }
      .v-loading-indicator.second {
        width: 90%;
        animation: v-progress-delay 3.8s forwards;
      }
      .v-loading-indicator.third {
        width: 96%;
        animation: v-progress-wait 5s forwards, v-progress-wait-pulse 1s 4s infinite backwards;
      }

      vaadin-connection-indicator[offline] .v-loading-indicator,
      vaadin-connection-indicator[reconnecting] .v-loading-indicator {
        display: none;
      }

      .v-status-message {
        opacity: 0;
        width: 100%;
        max-height: var(--status-height-collapsed, 8px);
        overflow: hidden;
        background-color: var(--status-bg-color-online, var(--lumo-primary-color, var(--material-primary-color, blue)));
        color: var(
          --status-text-color-online,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        font-size: 0.75rem;
        font-weight: 600;
        line-height: 1;
        transition: all 0.5s;
        padding: 0 0.5em;
      }

      vaadin-connection-indicator[offline] .v-status-message,
      vaadin-connection-indicator[reconnecting] .v-status-message {
        opacity: 1;
        background-color: var(--status-bg-color-offline, var(--lumo-shade, #333));
        color: var(
          --status-text-color-offline,
          var(--lumo-primary-contrast-color, var(--material-primary-contrast-color, #fff))
        );
        background-image: repeating-linear-gradient(
          45deg,
          rgba(255, 255, 255, 0),
          rgba(255, 255, 255, 0) 10px,
          rgba(255, 255, 255, 0.1) 10px,
          rgba(255, 255, 255, 0.1) 20px
        );
      }

      vaadin-connection-indicator[reconnecting] .v-status-message {
        animation: show-reconnecting-status 2s;
      }

      vaadin-connection-indicator[offline] .v-status-message:hover,
      vaadin-connection-indicator[reconnecting] .v-status-message:hover,
      vaadin-connection-indicator[expanded] .v-status-message {
        max-height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[expanded] .v-status-message {
        opacity: 1;
      }

      .v-status-message span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: var(--status-height, 1.75rem);
      }

      vaadin-connection-indicator[reconnecting] .v-status-message span::before {
        content: '';
        width: 1em;
        height: 1em;
        border-top: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-left: 2px solid
          var(--status-spinner-color, var(--lumo-primary-color, var(--material-primary-color, blue)));
        border-right: 2px solid transparent;
        border-bottom: 2px solid transparent;
        border-radius: 50%;
        box-sizing: border-box;
        animation: v-spin 0.4s linear infinite;
        margin: 0 0.5em;
      }

      @keyframes v-spin {
        100% {
          transform: rotate(360deg);
        }
      }
    `}getLoadingBarStyle(){switch(this.loadingBarState){case _t.IDLE:return"display: none";case _t.FIRST:case _t.SECOND:case _t.THIRD:return"display: block";default:return""}}timeoutFor(t,n,r,o){return t!==0&&window.clearTimeout(t),n?window.setTimeout(r,o):0}static get instance(){return Oe.create()}}ht([vt({type:Number})],Oe.prototype,"firstDelay",void 0);ht([vt({type:Number})],Oe.prototype,"secondDelay",void 0);ht([vt({type:Number})],Oe.prototype,"thirdDelay",void 0);ht([vt({type:Number})],Oe.prototype,"expandedDuration",void 0);ht([vt({type:String})],Oe.prototype,"onlineText",void 0);ht([vt({type:String})],Oe.prototype,"offlineText",void 0);ht([vt({type:String})],Oe.prototype,"reconnectingText",void 0);ht([vt({type:Boolean,reflect:!0})],Oe.prototype,"offline",void 0);ht([vt({type:Boolean,reflect:!0})],Oe.prototype,"reconnecting",void 0);ht([vt({type:Boolean,reflect:!0})],Oe.prototype,"expanded",void 0);ht([vt({type:Boolean,reflect:!0})],Oe.prototype,"loading",void 0);ht([vt({type:String})],Oe.prototype,"loadingBarState",void 0);ht([vt({type:Boolean})],Oe.prototype,"applyDefaultTheme",null);customElements.get("vaadin-connection-indicator")===void 0&&customElements.define("vaadin-connection-indicator",Oe);Oe.instance;var Td;const ul=window;ul.Vaadin||(ul.Vaadin={});(Td=ul.Vaadin).registrations||(Td.registrations=[]);ul.Vaadin.registrations.push({is:"@vaadin/common-frontend",version:"0.0.18"});class Pd extends Error{}const ga=window.document.body,le=window,gx=1;function gp(){return Object.keys(le.Vaadin.Flow.clients).filter(e=>e!=="TypeScript").map(e=>le.Vaadin.Flow.clients[e])}function Rd(e,t){gp().forEach(n=>n.sendEventMessage(gx,e,t))}let xx=class{constructor(t){this.response=void 0,this.pathname="",this.isActive=!1,this.baseRegex=/^\//,this.navigation="",ga.$=ga.$||[],this.config=t||{},le.Vaadin=le.Vaadin||{},le.Vaadin.Flow=le.Vaadin.Flow||{},le.Vaadin.Flow.clients={TypeScript:{isActive:()=>this.isActive}};const n=document.head.querySelector("base");this.baseRegex=new RegExp(`^${(document.baseURI||n&&n.href||"/").replace(/^https?:\/\/[^/]+/i,"")}`),this.appShellTitle=document.title,this.addConnectionIndicator()}get serverSideRoutes(){return[{path:"(.*)",action:this.action}]}loadingStarted(){this.isActive=!0,le.Vaadin.connectionState.loadingStarted()}loadingFinished(){this.isActive=!1,le.Vaadin.connectionState.loadingFinished(),!le.Vaadin.listener&&(le.Vaadin.listener={},document.addEventListener("click",t=>{t.target&&(t.target.hasAttribute("router-link")?this.navigation="link":t.composedPath().some(n=>n.nodeName==="A")&&(this.navigation="client"))},{capture:!0}))}get action(){return async t=>{if(this.pathname=t.pathname,le.Vaadin.connectionState.online)try{await this.flowInit()}catch(n){if(n instanceof Pd)return le.Vaadin.connectionState.state=Pe.CONNECTION_LOST,this.offlineStubAction();throw n}else return this.offlineStubAction();return this.container.onBeforeEnter=(n,r)=>this.flowNavigate(n,r),this.container.onBeforeLeave=(n,r)=>this.flowLeave(n,r),this.container}}async flowLeave(t,n){const{connectionState:r}=le.Vaadin;return this.pathname===t.pathname||!this.isFlowClientLoaded()||r.offline?Promise.resolve({}):new Promise(o=>{this.loadingStarted(),this.container.serverConnected=i=>{var l;o(n&&i?n.prevent():(l=n?.continue)===null||l===void 0?void 0:l.call(n)),this.loadingFinished()},Rd("ui-leave-navigation",{route:this.getFlowRoutePath(t),query:this.getFlowRouteQuery(t)})})}async flowNavigate(t,n){return this.response?new Promise(r=>{this.loadingStarted(),this.container.serverConnected=(o,i)=>{var l;n&&o?r(n.prevent()):n&&n.redirect&&i?r(n.redirect(i.pathname)):((l=n?.continue)===null||l===void 0||l.call(n),this.container.style.display="",r(this.container)),this.loadingFinished()},this.container.serverPaused=()=>{this.loadingFinished()},Rd("ui-navigate",{route:this.getFlowRoutePath(t),query:this.getFlowRouteQuery(t),appShellTitle:this.appShellTitle,historyState:history.state,trigger:this.navigation}),this.navigation="history"}):Promise.resolve(this.container)}getFlowRoutePath(t){return decodeURIComponent(t.pathname).replace(this.baseRegex,"")}getFlowRouteQuery(t){return t.search&&t.search.substring(1)||""}async flowInit(){if(!this.isFlowClientLoaded()){this.loadingStarted(),this.response=await this.flowInitUi();const{pushScript:t,appConfig:n}=this.response;typeof t=="string"&&await this.loadScript(t);const{appId:r}=n,o=`flow-container-${r.toLowerCase()}`,i=document.querySelector(o);i?this.container=i:(this.container=document.createElement(o),this.container.id=r),ga.$[r]=this.container,(await fs(()=>import("./FlowBootstrap-BRNFttkU.js"),[],import.meta.url)).init(this.response),typeof this.config.imports=="function"&&(this.injectAppIdScript(r),await this.config.imports());const a=await fs(()=>import("./FlowClient-DikjsIWg.js"),[],import.meta.url);await this.flowInitClient(a),this.loadingFinished()}return this.container&&!this.container.isConnected&&(this.container.style.display="none",document.body.appendChild(this.container)),this.response}async loadScript(t){return new Promise((n,r)=>{const o=document.createElement("script");o.onload=()=>n(),o.onerror=r,o.src=t,document.body.appendChild(o)})}injectAppIdScript(t){const n=t.substring(0,t.lastIndexOf("-")),r=document.createElement("script");r.type="module",r.setAttribute("data-app-id",n),document.body.append(r)}async flowInitClient(t){return t.init(),new Promise(n=>{const r=setInterval(()=>{gp().reduce((i,l)=>i||l.isActive(),!1)||(clearInterval(r),n())},5)})}async flowInitUi(){const t=le.Vaadin&&le.Vaadin.TypeScript&&le.Vaadin.TypeScript.initial;return t?(le.Vaadin.TypeScript.initial=void 0,Promise.resolve(t)):new Promise((n,r)=>{const i=new XMLHttpRequest,l=`?v-r=init&location=${encodeURIComponent(this.getFlowRoutePath(location))}&query=${encodeURIComponent(this.getFlowRouteQuery(location))}`;i.open("GET",l),i.onerror=()=>r(new Pd(`Invalid server response when initializing Flow UI.
        ${i.status}
        ${i.responseText}`)),i.onload=()=>{const a=i.getResponseHeader("content-type");a&&a.indexOf("application/json")!==-1?n(JSON.parse(i.responseText)):i.onerror()},i.send()})}addConnectionIndicator(){Oe.create(),le.addEventListener("online",()=>{if(!this.isFlowClientLoaded()){le.Vaadin.connectionState.state=Pe.RECONNECTING;const t=new XMLHttpRequest;t.open("HEAD","sw.js"),t.onload=()=>{le.Vaadin.connectionState.state=Pe.CONNECTED},t.onerror=()=>{le.Vaadin.connectionState.state=Pe.CONNECTION_LOST},setTimeout(()=>t.send(),50)}}),le.addEventListener("offline",()=>{this.isFlowClientLoaded()||(le.Vaadin.connectionState.state=Pe.CONNECTION_LOST)})}async offlineStubAction(){const t=document.createElement("iframe");t.setAttribute("src","./offline-stub.html"),t.setAttribute("style","width: 100%; height: 100%; border: 0"),this.response=void 0;let r;const o=()=>{r!==void 0&&(le.Vaadin.connectionState.removeStateChangeListener(r),r=void 0)};return t.onBeforeEnter=(i,l,a)=>{r=()=>{le.Vaadin.connectionState.online&&(o(),a.render(i,!1))},le.Vaadin.connectionState.addStateChangeListener(r)},t.onBeforeLeave=(i,l,a)=>{o()},t}isFlowClientLoaded(){return this.response!==void 0}};var xp={exports:{}},Rl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yx=E,wx=Symbol.for("react.element"),bx=Symbol.for("react.fragment"),Sx=Object.prototype.hasOwnProperty,kx=yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ex={key:!0,ref:!0,__self:!0,__source:!0};function yp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)Sx.call(t,r)&&!Ex.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:wx,type:e,key:i,ref:l,props:o,_owner:kx.current}}Rl.Fragment=bx;Rl.jsx=yp;Rl.jsxs=yp;xp.exports=Rl;var Cu=xp.exports;const jx=new xx({imports:()=>fs(()=>import("./generated-flow-imports-Dzgr5mpo.js"),[],import.meta.url)}),xa={render(){return Promise.resolve()}};function Cx(e){const t=e.port,n=e.protocol,i=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${i}`}function wp(e){if(e.href.startsWith(document.baseURI))return"/"+e.href.slice(document.baseURI.length)}function _x(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let i=0;i<n.length;i++){const l=n[i];if(l.nodeName&&l.nodeName.toLowerCase()==="a"){t=l;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a")return;const r=t;if(r.target&&r.target.toLowerCase()!=="_self"||r.hasAttribute("download")||r.hasAttribute("router-ignore"))return;if(r.pathname===window.location.pathname&&r.hash!==""){window.location.hash=r.hash;return}if((r.origin||Cx(r))===window.location.origin)return wp(new URL(r.href,r.baseURI))}function Ld(e,t){setTimeout(()=>{window.dispatchEvent(new CustomEvent("vaadin-navigated",{detail:{pathname:e,search:t}})),delete window.Vaadin.Flow.navigation})}function bp(){}const $d=()=>bp;function zx(e,t){const n=ap(),r=E.useRef([]).current,[o,i]=E.useState(0),l=E.useCallback(()=>{const u=r.shift();if(u===void 0)return;(async()=>{e.current&&(await e.current,e.current=void 0),t.current=!u.callback,n(u.to,u.opts),i(r.length)})()},[n,i]),a=E.useCallback(()=>{queueMicrotask(l)},[l]),s=E.useCallback((u,d,c)=>{r.push({to:u,callback:d,opts:c}),i(r.length),r.length===1&&a()},[i,a]);return E.useEffect(()=>()=>{a()},[o,a]),s}function _u(){const e=E.useRef(null),t=ap(),n=k0(({currentLocation:y,nextLocation:C})=>(o.current=o.current||C.pathname===y.pathname&&C.search===y.search&&C.hash===y.hash,!0)),r=zl(),o=E.useRef(!1),i=E.useRef(!1),l=E.useRef(!1),a=E.useRef(void 0),s=E.useRef(void 0),u=zx(s,o),d=d0("/"),c=E.useCallback(y=>{const C=_x(y);C&&(y&&y.preventDefault&&y.preventDefault(),o.current=!1,l.current=!0,t(C),window.dispatchEvent(new CustomEvent("close-overlay-drawer")))},[t]),f=E.useCallback(y=>{const C=y.detail,h=wp(C);h&&(y.preventDefault(),t(h))},[t]),w=E.useCallback(y=>{window.Vaadin.Flow.navigation=!0;const C="/"+y.detail.url;l.current=!1,u(C,y.detail.callback,{state:y.detail.state,replace:y.detail.replace})},[t]),S=E.useCallback(y=>()=>{t(y,{replace:!0})},[t]);return E.useEffect(()=>(window.addEventListener("vaadin-router-go",f),window.addEventListener("vaadin-navigate",w),()=>{window.removeEventListener("vaadin-router-go",f),window.removeEventListener("vaadin-navigate",w)}),[f,w]),E.useEffect(()=>()=>{a.current?.parentNode?.removeChild(a.current),a.current=void 0},[]),E.useEffect(()=>{if(n.state==="blocked"){if(i.current){const{pathname:k,state:T}=n.location;u(k.substring(d.length),!0,{state:T,replace:!0});return}i.current=!0;let y;if(s.current=new Promise((k,T)=>y={resolve:k,reject:T}),s.current.then(()=>i.current=!1,()=>i.current=!1),o.current&&!l.current){n.proceed(),y.resolve();return}l.current=!1;const{pathname:C,search:h}=n.location,m=window?.Vaadin?.routesConfig||[];let v=dn(Array.from(m),C);v&&v.filter(k=>k.route?.element?.type?.name===_u.name).length!=0?(a.current?.onBeforeEnter?.call(a?.current,{pathname:C,search:h},{prevent(){n.reset(),y.resolve(),o.current=!1},redirect:S,continue(){n.proceed(),y.resolve()}},xa),o.current=!0):Promise.resolve(a.current?.onBeforeLeave?.call(a?.current,{pathname:C,search:h},{prevent:$d},xa)).then(k=>{k===bp&&a.current?a.current.serverConnected=T=>{T?(n.reset(),y.resolve()):(n.proceed(),window.removeEventListener("click",c),y.resolve())}:(n.proceed(),window.removeEventListener("click",c),y.resolve())})}},[n.state,n.location]),E.useEffect(()=>{if(n.state!=="blocked"){if(o.current){o.current=!1,Ld(r.pathname,r.search);return}jx.serverSideRoutes[0].action({pathname:r.pathname,search:r.search}).then(y=>{const C=e.current?.parentNode;return C&&C!==y.parentNode&&(C.append(y),window.addEventListener("click",c),a.current=y),y.onBeforeEnter?.call(y,{pathname:r.pathname,search:r.search},{prevent:$d,redirect:S,continue(){Ld(r.pathname,r.search)}},xa)}).then(y=>{typeof y=="function"&&y()})}},[r]),Cu.jsx("output",{ref:e})}_u.type="FlowContainer";const Tx=[{path:"/*",element:Cu.jsx(_u,{})}];function Px(){const e=[...Tx];return{router:T0([...e],{basename:new URL(document.baseURI).pathname}),routes:e}}const{router:Rx,routes:Lx}=Px();function $x(){return Cu.jsx(A0,{router:Rx})}const ps=document.getElementById("outlet");let Sp=ps._root??Gf(ps);ps._root=Sp;Sp.render(E.createElement($x));window.Vaadin??={};window.Vaadin.routesConfig=Lx;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nx=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,o){super.attributeChangedCallback(n,r,o),n==="theme"&&this._set_theme(o)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kp=[],hs=new Set,zu=new Set;function Ep(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function Dx(e){return Ep(customElements.get(e))}function Mx(e=[]){return[e].flat(1/0).filter(t=>t instanceof bu?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function jp(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function Cp(e){return e.map(t=>t.cssText).join(`
`)}const cl="vaadin-themable-mixin-style";function Ox(e,t){const n=document.createElement("style");n.id=cl,n.textContent=Cp(e),t.content.appendChild(n)}function Ax(e){if(!e.shadowRoot)return;const t=e.constructor;if(e instanceof Bn)[...e.shadowRoot.querySelectorAll("style")].forEach(n=>n.remove()),dp(e.shadowRoot,t.elementStyles);else{const n=e.shadowRoot.getElementById(cl),r=t.prototype._template;n.textContent=r.content.getElementById(cl).textContent}}function Ix(e){hs.forEach(t=>{const n=t.deref();n instanceof e?Ax(n):n||hs.delete(t)})}function _p(e){if(e.prototype instanceof Bn)e.elementStyles=e.finalizeStyles(e.styles);else{const t=e.prototype._template;t.content.getElementById(cl).textContent=Cp(e.getStylesForThis())}zu.forEach(t=>{const n=customElements.get(t);n!==e&&n.prototype instanceof e&&_p(n)})}function Fx(e,t){const n=e.__themes;return!n||!t?!1:n.some(r=>r.styles.some(o=>t.some(i=>i.cssText===o.cssText)))}function Qo(e,t,n={}){t=Mx(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):kp.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId}),e&&zu.forEach(r=>{if(jp(e,r)&&Dx(r)){const o=customElements.get(r);Fx(o,t)?console.warn(`Registering styles that already exist for ${r}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${r}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),_p(o),Ix(o)}})}function vs(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():kp}function Ux(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function zp(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=vs().find(o=>o.moduleId===n);r?t.push(...zp(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function Vx(e){const t=`${e}-default-theme`,n=vs().filter(r=>r.moduleId!==t&&jp(r.themeFor,e)).map(r=>({...r,styles:[...zp(r),...r.styles],includePriority:Ux(r.moduleId)})).sort((r,o)=>o.includePriority-r.includePriority);return n.length>0?n:vs().filter(r=>r.moduleId===t)}const Py=e=>class extends Nx(e){constructor(){super(),hs.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&zu.add(this.is),this.elementStyles)return;const n=this.prototype._template;!n||Ep(this)||Ox(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...[n].flat(1/0),...r]:r}static getStylesForThis(){const n=e.__themes||[],r=Object.getPrototypeOf(this.prototype),o=(r?r.constructor.__themes:[])||[];this.__themes=[...n,...o,...Vx(this.is)];const i=this.__themes.flatMap(l=>l.styles);return i.filter((l,a)=>a===i.lastIndexOf(l))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bx=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},Pn=(e,...t)=>{Bx(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Hx(e,t="24.4.16"){Object.defineProperty(e,"version",{get(){return t}});const n=customElements.get(e.is);if(!n)customElements.define(e.is,e);else{const r=n.version;r&&e.version&&r===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${n.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Wx extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Hx(Wx);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qx=ke`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,Ll=ke`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Qo("",Ll,{moduleId:"lumo-typography"});Pn("typography-props",Qx);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kx=ke`
  ${Su(Ll.cssText.replace(/,\s*:host/su,""))}
`;Pn("typography",Kx);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gx=ke`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Pn("color-props",Gx);const $l=ke`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;Qo("",$l,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Pn("color",$l);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qx=ke`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;ke`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 500;
  }
`;Pn("style-props",qx);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Nl=ke`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] > vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] > vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] > vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Qo("",Nl,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Pn("badge",Nl);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yx=ke`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xx=ke`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint {
    background-color: var(--lumo-tint);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }

  .bg-shade {
    background-color: var(--lumo-shade);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }

  .bg-contrast {
    background-color: var(--lumo-contrast);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jx=ke`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }

  /* === Border color === */
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zx=ke`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ey=ke`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-1 {
    flex: 1 1 0%;
  }
  .flex-auto {
    flex: 1 1 auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow {
    flex-grow: 1;
  }
  .flex-grow-0 {
    flex-grow: 0;
  }

  /* === Flex shrink === */
  .flex-shrink {
    flex-shrink: 1;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\items-baseline {
      align-items: baseline;
    }
    .sm\\items-center {
      align-items: center;
    }
    .sm\\items-end {
      align-items: flex-end;
    }
    .sm\\items-start {
      align-items: flex-start;
    }
    .sm\\items-stretch {
      align-items: stretch;
    }
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\items-baseline {
      align-items: baseline;
    }
    .md\\items-center {
      align-items: center;
    }
    .md\\items-end {
      align-items: flex-end;
    }
    .md\\items-start {
      align-items: flex-start;
    }
    .md\\items-stretch {
      align-items: stretch;
    }
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\items-baseline {
      align-items: baseline;
    }
    .lg\\items-center {
      align-items: center;
    }
    .lg\\items-end {
      align-items: flex-end;
    }
    .lg\\items-start {
      align-items: flex-start;
    }
    .lg\\items-stretch {
      align-items: stretch;
    }
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\items-baseline {
      align-items: baseline;
    }
    .xl\\items-center {
      align-items: center;
    }
    .xl\\items-end {
      align-items: flex-end;
    }
    .xl\\items-start {
      align-items: flex-start;
    }
    .xl\\items-stretch {
      align-items: stretch;
    }
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\items-baseline {
      align-items: baseline;
    }
    .\\32xl\\items-center {
      align-items: center;
    }
    .\\32xl\\items-end {
      align-items: flex-end;
    }
    .\\32xl\\items-start {
      align-items: flex-start;
    }
    .\\32xl\\items-stretch {
      align-items: stretch;
    }
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ty=ke`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-0 {
    z-index: 0;
  }
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }
  .z-auto {
    z-index: auto;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ny=ke`
  /* === Box shadow === */
  .shadow-none {
    box-shadow: none;
  }
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ry=ke`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oy=ke`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iy=ke`
  .transition-none {
    transition: none;
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ly=ke`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Dl=ke`
${Yx}
${Xx}
${Jx}
${Zx}
${ey}
${ty}
${ny}
${ry}
${oy}
${iy}
${ly}
`;Qo("",Dl,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Pn("utility",Dl);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,l=/@import.+?;?$/gm;function a(_){var L=_.replace(l,"");return L!==_&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),L.trim()}function s(_){return"isConnected"in _?_.isConnected:document.contains(_)}function u(_){return _.filter(function(L,K){return _.indexOf(L)===K})}function d(_,L){return _.filter(function(K){return L.indexOf(K)===-1})}function c(_){_.parentNode.removeChild(_)}function f(_){return _.shadowRoot||n.get(_)}var w=["addRule","deleteRule","insertRule","removeRule"],S=CSSStyleSheet,y=S.prototype;y.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},y.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function C(_){return typeof _=="object"?X.isPrototypeOf(_)||y.isPrototypeOf(_):!1}function h(_){return typeof _=="object"?y.isPrototypeOf(_):!1}var m=new WeakMap,v=new WeakMap,k=new WeakMap,T=new WeakMap;function $(_,L){var K=document.createElement("style");return k.get(_).set(L,K),v.get(_).push(L),K}function N(_,L){return k.get(_).get(L)}function g(_,L){k.get(_).delete(L),v.set(_,v.get(_).filter(function(K){return K!==L}))}function U(_,L){requestAnimationFrame(function(){L.textContent=m.get(_).textContent,T.get(_).forEach(function(K){return L.sheet[K.method].apply(L.sheet,K.args)})})}function D(_){if(!m.has(_))throw new TypeError("Illegal invocation")}function W(){var _=this,L=document.createElement("style");t.body.appendChild(L),m.set(_,L),v.set(_,[]),k.set(_,new WeakMap),T.set(_,[])}var X=W.prototype;X.replace=function(L){try{return this.replaceSync(L),Promise.resolve(this)}catch(K){return Promise.reject(K)}},X.replaceSync=function(L){if(D(this),typeof L=="string"){var K=this;m.get(K).textContent=a(L),T.set(K,[]),v.get(K).forEach(function(Ue){Ue.isConnected()&&U(K,N(K,Ue))})}},o(X,"cssRules",{configurable:!0,enumerable:!0,get:function(){return D(this),m.get(this).sheet.cssRules}}),o(X,"media",{configurable:!0,enumerable:!0,get:function(){return D(this),m.get(this).sheet.media}}),w.forEach(function(_){X[_]=function(){var L=this;D(L);var K=arguments;T.get(L).push({method:_,args:K}),v.get(L).forEach(function(We){if(We.isConnected()){var ze=N(L,We).sheet;ze[_].apply(ze,K)}});var Ue=m.get(L).sheet;return Ue[_].apply(Ue,K)}}),o(W,Symbol.hasInstance,{configurable:!0,value:C});var fe={childList:!0,subtree:!0},se=new WeakMap;function Ae(_){var L=se.get(_);return L||(L=new Ie(_),se.set(_,L)),L}function tt(_){o(_.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return Ae(this).sheets},set:function(L){Ae(this).update(L)}})}function gt(_,L){for(var K=document.createNodeIterator(_,NodeFilter.SHOW_ELEMENT,function(We){return f(We)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),Ue=void 0;Ue=K.nextNode();)L(f(Ue))}var R=new WeakMap,M=new WeakMap,H=new WeakMap;function te(_,L){return L instanceof HTMLStyleElement&&M.get(_).some(function(K){return N(K,_)})}function oe(_){var L=R.get(_);return L instanceof Document?L.body:L}function Le(_){var L=document.createDocumentFragment(),K=M.get(_),Ue=H.get(_),We=oe(_);Ue.disconnect(),K.forEach(function(ze){L.appendChild(N(ze,_)||$(ze,_))}),We.insertBefore(L,null),Ue.observe(We,fe),K.forEach(function(ze){U(ze,N(ze,_))})}function Ie(_){var L=this;L.sheets=[],R.set(L,_),M.set(L,[]),H.set(L,new MutationObserver(function(K,Ue){if(!document){Ue.disconnect();return}K.forEach(function(We){e||i.call(We.addedNodes,function(ze){ze instanceof Element&&gt(ze,function(xe){Ae(xe).connect()})}),i.call(We.removedNodes,function(ze){ze instanceof Element&&(te(L,ze)&&Le(L),e||gt(ze,function(xe){Ae(xe).disconnect()}))})})}))}if(Ie.prototype={isConnected:function(){var _=R.get(this);return _ instanceof Document?_.readyState!=="loading":s(_.host)},connect:function(){var _=oe(this);H.get(this).observe(_,fe),M.get(this).length>0&&Le(this),gt(_,function(L){Ae(L).connect()})},disconnect:function(){H.get(this).disconnect()},update:function(_){var L=this,K=R.get(L)===document?"Document":"ShadowRoot";if(!Array.isArray(_))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Iterator getter is not callable.");if(!_.every(C))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Failed to convert value to 'CSSStyleSheet'");if(_.some(h))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Can't adopt non-constructed stylesheets");L.sheets=_;var Ue=M.get(L),We=u(_),ze=d(Ue,We);ze.forEach(function(xe){c(N(xe,L)),g(xe,L)}),M.set(L,We),L.isConnected()&&We.length>0&&Le(L)}},window.CSSStyleSheet=W,tt(Document),"ShadowRoot"in window){tt(ShadowRoot);var xt=Element.prototype,_e=xt.attachShadow;xt.attachShadow=function(L){var K=_e.call(this,L);return L.mode==="closed"&&n.set(this,K),K}}var Fe=Ae(document);Fe.isConnected()?Fe.connect():document.addEventListener("DOMContentLoaded",Fe.connect.bind(Fe))})();const{toString:ay}=Object.prototype;function sy(e){return ay.call(e)==="[object RegExp]"}function uy(e,{preserve:t=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let o=t,i;typeof t=="function"?(o=!1,i=t):sy(t)&&(o=!1,i=d=>t.test(d));let l=!1,a="",s="",u="";for(let d=0;d<e.length;d++){if(a=e[d],e[d-1]!=="\\"&&(a==='"'||a==="'")&&(l===a?l=!1:l||(l=a)),!l&&a==="/"&&e[d+1]==="*"){const c=e[d+2]==="!";let f=d+2;for(;f<e.length;f++){if(e[f]==="*"&&e[f+1]==="/"){o&&c||i&&i(s)?u+=`/*${s}*/`:n||(e[f+2]===`
`?f++:e[f+2]+e[f+3]===`\r
`&&(f+=2)),s="";break}s+=e[f]}d=f+1;continue}u+=a}return u}const cy=CSSStyleSheet.toString().includes("document.createElement"),dy=(e,t)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(e)!=null&&(e=uy(e));for(var r,o=e;(r=n.exec(e))!==null;){o=o.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const l=r[1]||r[5];l&&(i.media=l),t===document?document.head.appendChild(i):t.appendChild(i)}return o},my=(e,t,n)=>(n?t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]:t.adoptedStyleSheets=[...t.adoptedStyleSheets,e],()=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==e)}),fy=(e,t,n)=>{const r=new CSSStyleSheet;return r.replaceSync(e),cy?my(r,t,n):(n?t.adoptedStyleSheets.splice(0,0,r):t.adoptedStyleSheets.push(r),()=>{t.adoptedStyleSheets.splice(t.adoptedStyleSheets.indexOf(r),1)})},py=(e,t)=>{const n=document.createElement("style");return n.type="text/css",n.textContent=e,document.head.insertBefore(n,void 0),()=>{n.remove()}},bt=(e,t,n,r)=>{if(n===document){const i=hy(e);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const o=dy(e,n);return n===document?py(o):fy(o,n,r)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Nd(e){let t,n,r=2166136261;for(t=0,n=e.length;t<n;t++)r^=e.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function hy(e){let t=Nd(e);return t+Nd(t+e)}const vy=':host([class~="master-detail-layout"]) #layout{height:inherit;align-items:flex-start}';document["_vaadintheme_jmix-lumo_componentCss"]||(Qo("vaadin-form-layout",Su(vy.toString())),document["_vaadintheme_jmix-lumo_componentCss"]=!0);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Tu=ke`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Pn("spacing-props",Tu);const gy='.jmix-exception-dialog-window-content textarea{background-color:var(--lumo-contrast-20pct);border:0;border-radius:var(--lumo-border-radius-m);box-sizing:border-box;font-family:var(--lumo-font-family);font-size:var(--lumo-font-size-m);line-height:var(--lumo-line-height-s);outline:none;padding:calc(var(--lumo-size-s) - 1em * var(--lumo-line-height-s));resize:none}.jmix-exception-dialog-window-content textarea:focus{box-shadow:0 0 0 2px var(--lumo-primary-color-50pct)}.jmix-exception-dialog-window-content .jmix-exception-dialog-window-message-textarea{width:100%;height:100px}.jmix-exception-dialog-window-content .jmix-exception-dialog-window-stacktrace-textarea{width:100%;flex-grow:1}.jmix-main-view-header{box-sizing:border-box;display:flex;height:var(--lumo-size-xl);align-items:center;width:100%}.jmix-main-view-drawer-toggle{color:var(--lumo-secondary-text-color)}.jmix-main-view-title{margin:0;font-size:var(--lumo-font-size-l)}.jmix-main-view-section{display:flex;flex-direction:column;align-items:stretch;max-height:100%;min-height:100%}.jmix-main-view-application-title{display:flex;align-items:center;height:var(--lumo-size-xl);margin:0;padding-left:var(--lumo-space-m);padding-right:var(--lumo-space-m);font-size:var(--lumo-font-size-m)}.jmix-main-view-application-title-base-link{color:var(--lumo-header-text-color)}.jmix-main-view-application-title-base-link:hover{text-decoration:none}.jmix-main-view-navigation{display:flex;flex-direction:column;border-bottom:1px solid;border-color:var(--lumo-contrast-10pct);flex-grow:1;overflow:auto}.jmix-main-view-footer{display:flex;align-items:center;margin-bottom:var(--lumo-space-s);margin-top:var(--lumo-space-s);padding:var(--lumo-space-xs) var(--lumo-space-m);gap:var(--lumo-space-m)}.jmix-main-view-footer .jmix-user-indicator{flex-grow:1}.buttons-panel{width:100%;flex-wrap:wrap}.datetime-picker-container{display:flex;align-items:baseline;gap:calc(var(--lumo-space-xs) / 2)}.datetime-picker-container vaadin-date-picker{min-width:0;flex:1 1 auto}.datetime-picker-container vaadin-time-picker{min-width:0;flex:1 1.65 auto}.bordered-panel{border:1px solid;border-color:var(--lumo-contrast-20pct);border-radius:var(--lumo-border-radius-l)}.jmix-login-main-layout{background-color:var(--lumo-shade-5pct)}vaadin-app-layout.jmix-main-view-top-menu-app-layout::part(navbar){min-height:0;border-bottom:0}.jmix-main-view-top-menu-navigation-bar-box{padding:0;gap:0;width:100%}.jmix-main-view-top-menu-navigation{display:flex;flex-grow:1;overflow:auto}.jmix-main-view-top-menu-header{display:flex;align-items:center;width:100%;border-bottom:1px solid var(--lumo-contrast-10pct)}.jmix-main-view-top-menu-logo-container{display:flex;margin:0 var(--lumo-space-m)}.jmix-main-view-top-menu-logo{width:var(--lumo-size-m);height:var(--lumo-size-m)}.jmix-main-view-top-menu-user-box{align-self:flex-end;align-items:center;margin:0 var(--lumo-space-m);max-width:20em}.jmix-main-view-top-menu-view-header-box{border-bottom:1px solid var(--lumo-contrast-10pct);padding:0;width:100%}.jmix-main-view-top-menu-view-title{font-size:var(--lumo-font-size-l);margin:var(--lumo-space-s) var(--lumo-space-m)}.jmix-role-assigment-layout{container-type:inline-size;container-name:jmix-role-assigment-layout}.jmix-role-assigment-content-wrapper{flex-direction:column;overflow:auto;gap:var(--lumo-space-m);padding:var(--lumo-space-m)}@container jmix-role-assigment-layout (min-width: 60em){.jmix-role-assigment-content-wrapper{flex-direction:row}}.jmix-role-assignment-layout{container-type:inline-size;container-name:jmix-role-assignment-layout}.jmix-role-assignment-content-wrapper{flex-direction:column;overflow:auto;gap:var(--lumo-space-m);padding:var(--lumo-space-m)}@container jmix-role-assignment-layout (min-width: 60em){.jmix-role-assignment-content-wrapper{flex-direction:row}}.jmix-list-menu{color:var(--lumo-secondary-text-color);margin:0;overflow:auto;padding:0 var(--lumo-space-s)}.jmix-list-menu .jmix-menubar-item .menubar-list{margin-inline-start:var(--lumo-space-l)}.jmix-list-menu .jmix-menubar-item{padding:var(--lumo-space-s) 0;margin:0}.jmix-list-menu .jmix-menubar-item vaadin-details-summary{padding:var(--lumo-space-s)}.jmix-list-menu .jmix-menubar-item .jmix-menubar-summary-icon-container{display:flex;gap:var(--lumo-space-s);align-items:center}.jmix-list-menu .jmix-menu-item-link .link-icon,.jmix-list-menu .jmix-menubar-item .jmix-menubar-summary-icon-container .menubar-icon{width:var(--lumo-icon-size-s);height:var(--lumo-icon-size-s);flex-shrink:0}.jmix-list-menu .jmix-menu-item-link .prefix-component,.jmix-list-menu .jmix-menubar-item .jmix-menubar-summary-icon-container .prefix-component{flex-shrink:0}.jmix-list-menu .jmix-menu-item-link vaadin-icon.prefix-component,.jmix-list-menu .jmix-menubar-item .jmix-menubar-summary-icon-container vaadin-icon.prefix-component{width:var(--lumo-icon-size-s);height:var(--lumo-icon-size-s)}.jmix-list-menu .jmix-menu-item-link vaadin-icon.prefix-component[icon^="vaadin:"],.jmix-list-menu .jmix-menubar-item .jmix-menubar-summary-icon-container vaadin-icon.prefix-component[icon^="vaadin:"]{padding:.125em;box-sizing:border-box}.jmix-list-menu .jmix-menubar-item .menubar-summary{white-space:nowrap;font-weight:700;text-overflow:ellipsis;overflow:hidden}.jmix-list-menu .jmix-menu-item-link .suffix-component,.jmix-list-menu .jmix-menubar-item .jmix-menubar-summary-icon-container .suffix-component{margin-inline-start:auto;flex-shrink:0}.jmix-list-menu .jmix-menu-item-link{gap:var(--lumo-space-s);padding:var(--lumo-space-s);text-decoration:none;color:inherit;cursor:pointer;align-items:center}.jmix-list-menu .jmix-menu-item-link .link-text{line-height:var(--lumo-line-height-s);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.jmix-list-menu a[highlight][class*=jmix-menu-item-link]{color:var(--lumo-primary-text-color)}.jmix-list-menu a[highlight][class*=jmix-menu-item-link]{background-color:var(--lumo-primary-color-10pct);border-radius:var(--lumo-border-radius-m)}.jmix-list-menu .jmix-menubar-item vaadin-details-summary::part(content){display:flex;overflow:hidden;width:100%;align-items:center}.jmix-list-menu[theme~=toggle-reverse] vaadin-details-summary{justify-content:space-between}.jmix-list-menu[theme~=toggle-reverse] vaadin-details-summary::part(toggle){order:1;margin-inline-end:0}@supports selector(:focus-visible){.jmix-list-menu .jmix-menu-item-link:focus-visible{border-radius:var(--lumo-border-radius-m);box-shadow:0 0 0 var(--vaadin-focus-ring-width, 2px) var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));outline:0}}.jmix-user-indicator{overflow:hidden;text-align:center;text-overflow:ellipsis}.jmix-user-indicator .jmix-user-indicator-label{white-space:nowrap}.buttons-panel .jmix-simple-pagination:last-child{margin-inline-start:auto}.jmix-simple-pagination{align-items:center;display:flex;gap:var(--jmix-simple-pagination-gap)}.jmix-simple-pagination-status-bar{margin:0 var(--jmix-simple-pagination-gap);display:flex;gap:var(--jmix-simple-pagination-gap)}.jmix-simple-pagination .jmix-items-per-page{gap:var(--jmix-simple-pagination-gap)}.jmix-simple-pagination-total-count.link{color:var(--lumo-primary-text-color);cursor:pointer}.jmix-simple-pagination-navigation-button.first,.jmix-simple-pagination-navigation-button.prev,.jmix-simple-pagination-navigation-button.next,.jmix-simple-pagination-navigation-button.last{padding:0;margin:0;height:1.5rem;min-width:1.5rem}.jmix-simple-pagination-navigation-button vaadin-icon[dir=rtl]{rotate:180deg}.jmix-items-per-page{align-items:center;display:flex;gap:var(--jmix-items-per-page-gap, .5em)}.jmix-items-per-page-select{width:var(--jmix-items-per-page-select-width, 6em)}vaadin-menu-bar[jmix-role=jmix-dropdown-button] vaadin-menu-bar-item::part(content),vaadin-menu-bar[jmix-role|=jmix-combo-button] vaadin-menu-bar-item::part(content){align-items:center;gap:var(--lumo-space-xs)}.jmix-dropdown-button-item-wrapper{display:flex;align-items:center;gap:var(--lumo-space-s)}vaadin-icon.jmix-dropdown-button-item-icon:not([icon^="lumo:"]){padding:var(--lumo-space-xs);box-sizing:border-box}vaadin-menu-bar[jmix-role=jmix-dropdown-button]>vaadin-menu-bar-button{margin:var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2)}vaadin-menu-bar[jmix-role=jmix-combo-button-icon]>vaadin-menu-bar-button{margin-top:var(--lumo-space-xs);margin-bottom:var(--lumo-space-xs)}vaadin-menu-bar[jmix-role=jmix-combo-button-icon]>vaadin-menu-bar-button:nth-last-of-type(2){min-width:var(--lumo-button-size);padding-left:calc(var(--lumo-button-size) / 4);padding-right:calc(var(--lumo-button-size) / 4)}jmix-upload-field[theme~=no-file-name] .jmix-upload-button{flex-grow:1}.jmix-upload-field-input-container{align-items:center;display:flex;gap:var(--lumo-space-s)}.jmix-upload-field-file-name{cursor:pointer;margin:0}.jmix-upload-field-file-name:hover{text-decoration:underline}.jmix-upload-field-file-name.empty{color:var(--lumo-body-text-color);cursor:default}.jmix-upload-field-clear{color:var(--lumo-contrast-60pct);font-size:var(--lumo-icon-size-m);background:transparent;padding:0;border:none;box-shadow:none}.jmix-upload-field-clear:focus{outline:none;border-radius:var(--lumo-border-radius-s);box-shadow:0 0 0 2px var(--lumo-primary-color-50pct)}.jmix-upload-field-clear:before{content:var(--lumo-icons-cross);font-family:lumo-icons;display:block}.jmix-upload-field-clear:hover{color:var(--lumo-contrast-90pct)}.jmix-upload-dialog-content{display:flex;flex-direction:column;min-width:20em}.jmix-upload-dialog-cancel-button{align-self:end}img[theme~=fill]{object-fit:fill}img[theme~=contain]{object-fit:contain}img[theme~=cover]{object-fit:cover}img[theme~=scale-down]{object-fit:scale-down}.jmix-generic-filter-controls-layout{flex-wrap:wrap}.jmix-property-filter .unary-field{width:6em}.jmix-property-filter .filter-label{white-space:nowrap}.jmix-group-filter{border:1px solid;border-color:var(--lumo-contrast-20pct);border-radius:var(--lumo-border-radius-l);margin-top:var(--lumo-space-s);margin-bottom:var(--lumo-space-s)}vaadin-menu-bar[jmix-role=jmix-grid-column-visibility]>vaadin-menu-bar-button{margin:var(--lumo-space-xs) 0}.jmix-main-view-navigation>.jmix-menu-filter-field{margin:var(--lumo-space-s) var(--lumo-space-m) var(--lumo-space-s) var(--lumo-space-m)}.jmix-horizontal-menu{color:var(--lumo-secondary-text-color)}.jmix-horizontal-menu-root-item:hover{color:var(--lumo-contrast-80pct)}.jmix-horizontal-menu vaadin-menu-bar-button{color:inherit;background-color:transparent;border-radius:var(--lumo-border-radius-m);padding:0}.jmix-horizontal-menu vaadin-menu-bar-button[expanded]{background-color:var(--lumo-primary-color-10pct)}.jmix-horizontal-menu vaadin-menu-bar-button.jmix-horizontal-menu-item-wrapper[focus-ring]{box-shadow:inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color)}vaadin-menu-bar .jmix-horizontal-menu-item-wrapper{margin:0;padding:0}vaadin-menu-bar-list-box .jmix-horizontal-menu-item-wrapper{padding:0}vaadin-menu-bar-list-box vaadin-menu-bar-item[class~=jmix-horizontal-menu-item-wrapper]::part(checkmark){display:none}.jmix-horizontal-menu-item-wrapper[aria-haspopup=true]:after{margin:0;padding-inline-start:calc(var(--lumo-space-s) + var(--lumo-space-xs));padding-inline-end:var(--lumo-space-s)}.jmix-horizontal-menu-content-item{gap:var(--lumo-space-s);align-items:center}.jmix-horizontal-menu-content-item vaadin-icon.prefix-component{width:var(--lumo-icon-size-s);height:var(--lumo-icon-size-s)}.jmix-horizontal-menu-content-item .suffix-component{margin-inline-start:auto}vaadin-menu-bar .jmix-horizontal-menu-content-item{padding-inline-start:calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);padding-inline-end:calc(var(--lumo-size-m) / 3 + var(--lumo-border-radius-m) / 2);padding-top:.5em;padding-bottom:.5em}vaadin-menu-bar-list-box .jmix-horizontal-menu-content-item{padding-inline-start:calc(var(--lumo-icon-size-s) + var(--lumo-space-s) * 2);padding-inline-end:0;padding-top:.5em;padding-bottom:.5em}vaadin-menu-bar-list-box .jmix-horizontal-menu-content-item[prefixed]{padding-inline-start:var(--lumo-space-s)}vaadin-menu-bar-list-box .jmix-horizontal-menu-content-item .text-component:not(:last-child){margin-inline-end:var(--lumo-space-l)}.jmix-horizontal-menu-item:hover{text-decoration:none}vaadin-menu-bar-item .jmix-horizontal-menu-item{color:inherit;display:flex;cursor:pointer;width:100%}vaadin-menu-bar-list-box .jmix-horizontal-menu-item{padding-inline-end:calc(var(--lumo-icon-size-s) + var(--lumo-space-s) * 2)}.jmix-grid-context-menu-item-component{gap:var(--lumo-space-s);align-items:center;width:100%;display:flex}.jmix-grid-context-menu-item-component vaadin-icon.prefix-component{width:var(--lumo-icon-size-s);height:var(--lumo-icon-size-s)}.jmix-grid-context-menu-item-component .suffix-component{margin-inline-start:auto}.jmix-grid-context-menu-item-component kbd.suffix-component{box-sizing:border-box;display:inline-block;padding:calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);font-size:calc(var(--lumo-font-size-xs) * .85);line-height:var(--lumo-line-height-xs);color:var(--lumo-secondary-text-color);vertical-align:middle;background-color:var(--lumo-contrast-5pct);border:1px solid var(--lumo-contrast-20pct);border-radius:var(--lumo-border-radius-m);box-shadow:inset 0 -1px 0 var(--lumo-contrast-20pct, var(--lumo-contrast-5pct))}.jmix-grid-context-menu-item-component .text-component:not(:last-child){margin-inline-end:var(--lumo-space-l)}html{--jmix-rte-icons-bold: "";--jmix-rte-icons-italic: "";--jmix-rte-icons-underline: "";--jmix-rte-icons-strikethrough: "";--jmix-rte-icons-subscript: "";--jmix-rte-icons-superscript: "";--jmix-rte-icons-list-ordered: "";--jmix-rte-icons-list-bullet: "";--jmix-rte-icons-align-start: "";--jmix-rte-icons-align-center: "";--jmix-rte-icons-align-end: "";--jmix-rte-icons-align-justify: "";--jmix-rte-icons-image: "";--jmix-rte-icons-link: "";--jmix-rte-icons-quote-right: "";--jmix-rte-icons-angle-left: "";--jmix-rte-icons-angle-right: "";--jmix-rte-icons-clean: ""}jmix-rich-text-editor .ql-clipboard{left:-100000px;height:1px;overflow-y:hidden;position:absolute;top:50%}jmix-rich-text-editor .ql-clipboard p{margin:0;padding:0}jmix-rich-text-editor .ql-editor{box-sizing:border-box;line-height:1.42;height:100%;outline:none;overflow-y:auto;padding:.75em 1em;-moz-tab-size:4;tab-size:4;text-align:left;white-space:pre-wrap;word-wrap:break-word;flex:1}jmix-rich-text-editor .ql-editor>*{cursor:text}jmix-rich-text-editor .ql-align-left{text-align:left}jmix-rich-text-editor .ql-direction-rtl{direction:rtl;text-align:inherit}jmix-rich-text-editor .ql-align-center{text-align:center}jmix-rich-text-editor .ql-align-justify{text-align:justify}jmix-rich-text-editor .ql-align-right{text-align:right}jmix-rich-text-editor .jmix-rich-text-editor-container{display:flex;flex-direction:column;min-height:inherit;max-height:inherit;flex:auto;overflow:hidden}vaadin-form-layout jmix-rich-text-editor{align-self:flex-start}jmix-rich-text-editor .jmix-rich-text-editor-toolbar{display:flex;flex-wrap:wrap;flex-shrink:0;background-color:var(--lumo-contrast-5pct);padding:calc(var(--lumo-space-s) - 1px) var(--lumo-space-xs)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-group]{display:flex;margin:0 calc(var(--lumo-space-l) / 2 - 1px)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]{padding:0;font:inherit;line-height:1;text-transform:none;background:transparent;border:none;position:relative;width:var(--lumo-size-m, 2em);height:var(--lumo-size-m, 2em);border-radius:var(--lumo-border-radius-m);color:var(--lumo-contrast-60pct);margin:2px 1px;cursor:var(--lumo-clickable-cursor);transition:background-color .1s,color .1s}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:hover{outline:none;background-color:var(--lumo-contrast-5pct);color:var(--lumo-contrast-80pct);box-shadow:none}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:focus{outline:none;box-shadow:0 0 0 var(--_focus-ring-width) var(--_focus-ring-color)}@media (forced-colors: active){jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:focus,jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:hover{outline:1px solid!important}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button].ql-active{outline:2px solid;outline-offset:-1px}}@media (hover: none){jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:hover{background-color:transparent}}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:before{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:Vaadin-Icons;font-size:var(--lumo-icon-size-xs)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button].ql-active{background-color:var(--vaadin-selection-color, var(--lumo-primary-color));color:var(--lumo-primary-contrast-color)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button]:active{background-color:var(--lumo-contrast-10pct);color:var(--lumo-contrast-90pct)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-bold]:before{content:var(--jmix-rte-icons-bold)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-italic]:before{content:var(--jmix-rte-icons-italic)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-underline]:before{content:var(--jmix-rte-icons-underline)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-strike]:before{content:var(--jmix-rte-icons-strikethrough)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-h1]:before{content:"H1";font-size:var(--lumo-font-size-xl, 1.25em)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-h2]:before{content:"H2";font-size:var(--lumo-font-size-l, 1em)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-h3]:before{content:"H3";font-size:var(--lumo-font-size-m, .875em)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-h1]:before,jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-h2]:before,jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-h3]:before{font-family:var(--lumo-font-family);letter-spacing:-.05em;font-weight:700}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-subscript]:before{content:var(--jmix-rte-icons-subscript)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-superscript]:before{content:var(--jmix-rte-icons-superscript)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-blockquote]:before{content:var(--jmix-rte-icons-quote-right)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-code-block]:before{content:var(--jmix-rte-icons-angle-left) var(--jmix-rte-icons-angle-right);letter-spacing:-.4em;margin-left:-.2em}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-list-ordered]:before{content:var(--jmix-rte-icons-list-ordered)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-list-bullet]:before{content:var(--jmix-rte-icons-list-bullet)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-align-start]:before{content:var(--jmix-rte-icons-align-start)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-align-center]:before{content:var(--jmix-rte-icons-align-center)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-align-end]:before{content:var(--jmix-rte-icons-align-end)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-align-justify]:before{content:var(--jmix-rte-icons-align-justify)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-image]:before{content:var(--jmix-rte-icons-image)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-link]:before{content:var(--jmix-rte-icons-link)}jmix-rich-text-editor .jmix-rich-text-editor-toolbar [class*=toolbar-button-clean]:before{content:var(--jmix-rte-icons-clean)}jmix-rich-text-editor[readonly] .jmix-rich-text-editor-toolbar{display:none}jmix-rich-text-editor[disabled] [class*=toolbar-button]{background-color:transparent}jmix-rich-text-editor .jmix-rich-text-editor-toolbar input[type=file]{display:none}jmix-rich-text-editor .jmix-rich-text-editor-content{box-sizing:border-box;position:relative;flex:auto;display:flex;flex-direction:column;overflow:hidden;background-color:var(--lumo-base-color)}jmix-rich-text-editor .jmix-rich-text-editor-content>.ql-editor{padding:0 var(--lumo-space-m);line-height:inherit}jmix-rich-text-editor .jmix-rich-text-editor-content :where(h1,h2,h3,h4,h5,h6){margin-top:1.25em}jmix-rich-text-editor .jmix-rich-text-editor-content h1{margin-bottom:.75em}jmix-rich-text-editor .jmix-rich-text-editor-content :where(h2,h3,h4){margin-bottom:.5em}jmix-rich-text-editor .jmix-rich-text-editor-content h5{margin-bottom:.25em}jmix-rich-text-editor .jmix-rich-text-editor-content blockquote{padding-left:1em}jmix-rich-text-editor .jmix-rich-text-editor-content pre{white-space:pre-wrap;margin-bottom:.3125em;margin-top:.3125em;padding:.3125em .625em}jmix-rich-text-editor .jmix-rich-text-editor-content code{font-size:85%;padding:.125em .25em}jmix-rich-text-editor .jmix-rich-text-editor-content img{max-width:100%}jmix-rich-text-editor:not([theme~=no-border]):not([readonly]) .jmix-rich-text-editor-content{border-top:1px solid var(--lumo-contrast-20pct)}jmix-rich-text-editor[theme~=no-border] .jmix-rich-text-editor-toolbar{padding-top:var(--lumo-space-s);padding-bottom:var(--lumo-space-s)}jmix-rich-text-editor[theme~=compact]{min-height:calc(var(--lumo-size-m) * 6)}jmix-rich-text-editor[theme~=compact] .jmix-rich-text-editor-toolbar{padding:var(--lumo-space-xs) 0}jmix-rich-text-editor[theme~=compact][theme~=no-border] .jmix-rich-text-editor-toolbar{padding:calc(var(--lumo-space-xs) + 1px) 0}jmix-rich-text-editor[theme~=compact] [class*=toolbar-button]{width:var(--lumo-size-s);height:var(--lumo-size-s)}jmix-rich-text-editor[theme~=compact] [class*=toolbar-group]{margin:0 calc(var(--lumo-space-m) / 2 - 1px)}jmix-rich-text-editor[dir=rtl] .ql-editor{direction:rtl;text-align:right}jmix-rich-text-editor[dir=rtl] .jmix-rich-text-editor-toolbar [class*=toolbar-button-align-start]{rotate:180deg}jmix-rich-text-editor[dir=rtl] .jmix-rich-text-editor-toolbar [class*=toolbar-button-align-end]{rotate:180deg}jmix-combo-box-picker[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}jmix-combo-box-picker[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}jmix-combo-box-picker[disabled][has-error-message]::part(error-message),jmix-combo-box-picker[readonly][has-error-message]::part(error-message){display:none}jmix-code-editor[readonly][has-error-message]::part(error-message),jmix-code-editor[disabled][has-error-message]::part(error-message){display:none}jmix-code-editor[readonly][invalid],jmix-code-editor[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color)}jmix-value-picker[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}jmix-value-picker[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}jmix-value-picker[disabled][has-error-message]::part(error-message),jmix-value-picker[readonly][has-error-message]::part(error-message){display:none}jmix-multi-select-combo-box-picker[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}jmix-multi-select-combo-box-picker[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}jmix-multi-select-combo-box-picker[disabled][has-error-message]::part(error-message),jmix-multi-select-combo-box-picker[readonly][has-error-message]::part(error-message){display:none}.jmix-twin-column-items-column-label,.jmix-twin-column-selected-items-column-label{color:var(--lumo-secondary-text-color);font-weight:500;line-height:1;font-size:var(--lumo-font-size-s);padding-bottom:var(--lumo-space-xs)}jmix-twin-column[disabled] :is(.jmix-twin-column-items-column-label,.jmix-twin-column-selected-items-column-label){color:var(--lumo-disabled-text-color)}jmix-twin-column vaadin-list-box{border:1px solid var(--lumo-contrast-20pct);border-radius:0}jmix-twin-column vaadin-item{border-bottom:1px solid var(--lumo-contrast-10pct);border-radius:0;padding:var(--lumo-space-xs) var(--lumo-space-m)}jmix-twin-column vaadin-item::part(checkmark){display:none}jmix-twin-column vaadin-item[selected]{background-color:var(--lumo-primary-color-10pct)}jmix-twin-column vaadin-item:not([selected]):hover{background-color:transparent}jmix-twin-column[theme~=no-border] vaadin-list-box{border-width:0}jmix-twin-column[theme~=no-row-border] vaadin-item{border-width:0}jmix-twin-column[theme~=checkmarks] vaadin-item::part(checkmark){display:block}jmix-twin-column[theme~=checkmarks] vaadin-item{padding:var(--lumo-space-xs) var(--lumo-space-m) var(--lumo-space-xs) var(--lumo-space-xs)}jmix-twin-column[theme~=checkmarks] vaadin-item[selected]{background-color:transparent}jmix-twin-column[theme~=checkmarks] vaadin-item:hover{background-color:var(--lumo-primary-color-10pct)}jmix-twin-column vaadin-item:nth-last-of-type(1){border-bottom:0px}jmix-twin-column vaadin-button:first-child{margin-top:var(--lumo-space-s)}jmix-twin-column[theme~=no-space-between-actions] vaadin-button:first-child{border-top-left-radius:var(--lumo-border-radius-m);border-top-right-radius:var(--lumo-border-radius-m)}jmix-twin-column[theme~=no-space-between-actions] vaadin-button{margin-top:0;margin-bottom:0;border-radius:0}jmix-twin-column[theme~=no-space-between-actions] vaadin-button:last-child{border-bottom-left-radius:var(--lumo-border-radius-m);border-bottom-right-radius:var(--lumo-border-radius-m)}jmix-twin-column .jmix-twin-column-actions-panel{padding:0 var(--lumo-space-s) 0 var(--lumo-space-s);box-sizing:content-box}jmix-twin-column vaadin-button vaadin-icon[dir=rtl]{rotate:180deg}jmix-twin-column[invalid] .jmix-twin-column-items-column{border-top:1px solid var(--lumo-error-color);border-left:1px solid var(--lumo-error-color);border-bottom:1px solid var(--lumo-error-color)}jmix-twin-column[invalid][dir=rtl] .jmix-twin-column-items-column{border-left-width:0;border-right:1px solid var(--lumo-error-color)}jmix-twin-column[invalid] .jmix-twin-column-selected-items-column{border-top:1px solid var(--lumo-error-color);border-right:1px solid var(--lumo-error-color);border-bottom:1px solid var(--lumo-error-color)}jmix-twin-column[invalid][dir=rtl] .jmix-twin-column-selected-items-column{border-left:1px solid var(--lumo-error-color);border-right-width:0}jmix-twin-column[invalid] .jmix-twin-column-actions-panel{border-top:1px solid var(--lumo-error-color);border-bottom:1px solid var(--lumo-error-color)}vaadin-text-field[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-text-field[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-text-field[disabled][has-error-message]::part(error-message),vaadin-text-field[readonly][has-error-message]::part(error-message){display:none}vaadin-text-area[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-text-area[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-text-area[disabled][has-error-message]::part(error-message),vaadin-text-area[readonly][has-error-message]::part(error-message){display:none}vaadin-number-field[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-number-field[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-number-field[disabled][has-error-message]::part(error-message),vaadin-number-field[readonly][has-error-message]::part(error-message){display:none}vaadin-big-decimal-field[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-big-decimal-field[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-big-decimal-field[disabled][has-error-message]::part(error-message),vaadin-big-decimal-field[readonly][has-error-message]::part(error-message){display:none}vaadin-integer-field[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-integer-field[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-integer-field[disabled][has-error-message]::part(error-message),vaadin-integer-field[readonly][has-error-message]::part(error-message){display:none}vaadin-password-field[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-password-field[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-password-field[disabled][has-error-message]::part(error-message),vaadin-password-field[readonly][has-error-message]::part(error-message){display:none}vaadin-email-field[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-email-field[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-email-field[disabled][has-error-message]::part(error-message),vaadin-email-field[readonly][has-error-message]::part(error-message){display:none}vaadin-select[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-select[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-select[disabled][has-error-message]::part(error-message),vaadin-select[readonly][has-error-message]::part(error-message){display:none}vaadin-checkbox-group[readonly][has-error-message]::part(error-message),vaadin-checkbox-group[disabled][has-error-message]::part(error-message){display:none}vaadin-checkbox-group[readonly][invalid],vaadin-checkbox-group[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color)}vaadin-radio-group[readonly][has-error-message]::part(error-message),vaadin-radio-group[disabled][has-error-message]::part(error-message){display:none}vaadin-radio-group[readonly][invalid],vaadin-radio-group[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color)}vaadin-date-picker[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-date-picker[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-date-picker[disabled][has-error-message]::part(error-message),vaadin-date-picker[readonly][has-error-message]::part(error-message){display:none}vaadin-time-picker[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-time-picker[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-time-picker[disabled][has-error-message]::part(error-message),vaadin-time-picker[readonly][has-error-message]::part(error-message){display:none}vaadin-date-time-picker[readonly][invalid]::part(error-message),vaadin-date-time-picker[disabled][invalid]::part(error-message){display:none}vaadin-date-time-picker[readonly],vaadin-date-time-picker[disabled]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color)}vaadin-date-time-picker[readonly] ::part(input-field){--vaadin-input-field-invalid-background: transparent}vaadin-date-time-picker[readonly] ::part(input-field):after{--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-date-time-picker[disabled] ::part(input-field){--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-combo-box[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-combo-box[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-combo-box[disabled][has-error-message]::part(error-message),vaadin-combo-box[readonly][has-error-message]::part(error-message){display:none}vaadin-multi-select-combo-box[readonly][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: transparent;--vaadin-input-field-invalid-hover-highlight: transparent}vaadin-multi-select-combo-box[disabled][invalid]{--lumo-required-field-indicator-color: var(--lumo-primary-text-color);--vaadin-input-field-invalid-background: var(--lumo-contrast-5pct)}vaadin-multi-select-combo-box[disabled][has-error-message]::part(error-message),vaadin-multi-select-combo-box[readonly][has-error-message]::part(error-message){display:none}vaadin-form-item[theme~=jmix-group-filter-form-item]:not([label-position=top]){align-items:center}vaadin-form-item[theme~=jmix-group-filter-form-item]:not([label-position=top])::part(label){margin:0}vaadin-form-item[theme~=label-align-end]:not([label-position=top])::part(label){overflow:hidden;white-space:nowrap;text-overflow:ellipsis}vaadin-grid[theme~=no-header]::part(header-cell){display:none}vaadin-dialog-overlay[class~=column-filter-popup]::part(backdrop){background:unset}vaadin-dialog-overlay[class~=column-filter-dialog]::part(content){display:flex;flex-direction:row;gap:var(--lumo-space-s);padding:var(--lumo-space-wide-m)}vaadin-dialog-overlay[class~=column-filter-popup]::part(overlay){align-self:flex-start;position:absolute}vaadin-dialog-overlay[class~=column-filter-footer-small]::slotted([slot="footer"]){display:flex;gap:var(--lumo-space-s);width:100%}[jmix-role=column-filter-button]:not([activated]):hover{color:var(--lumo-contrast)}[jmix-role=column-filter-button]:not([activated]){color:var(--lumo-tertiary-text-color)}[jmix-role=column-filter-button]:is([activated]){color:var(--lumo-primary-text-color)}.jmix-text-layout-closeable .title,.jmix-text-layout-closeable .message,.jmix-text-layout .title,.jmix-text-layout .message{white-space:pre}.jmix-text-layout-closeable .title,.jmix-text-layout .title{font-size:var(--lumo-font-size-l);font-weight:600;margin:0;text-align:center}.jmix-text-layout-closeable .message,.jmix-text-layout .message{margin-top:0;margin-bottom:0}.jmix-closeable-layout{display:flex;align-items:flex-start;gap:var(--lumo-space-s)}.jmix-closeable-layout .close-button{position:absolute;right:0;top:0}.jmix-closeable-layout .close-button vaadin-icon{color:var(--_lumo-button-color, var(--lumo-contrast))}vaadin-notification-card:not([slot$=stretch]) .jmix-closeable-layout{padding-inline-end:var(--lumo-space-xs)}vaadin-notification-card[slot$=stretch] .jmix-closeable-layout .close-button{padding-top:var(--lumo-space-s);padding-inline-end:var(--lumo-space-s)}vaadin-notification-card:not([slot$=stretch]) .jmix-closeable-layout .close-button{padding-top:var(--lumo-space-xs);padding-inline-end:var(--lumo-space-xs)}vaadin-notification-card[slot$=stretch] .jmix-text-layout-closeable{padding-inline-start:unset}vaadin-notification-card[theme~=warning] .jmix-text-layout-closeable .title,vaadin-notification-card[theme~=warning] .jmix-text-layout .title{color:var(--lumo-warning-contrast-color)}vaadin-notification-card[theme~=contrast] .jmix-text-layout-closeable .title,vaadin-notification-card[theme~=contrast] .jmix-text-layout .title{color:var(--lumo-base-color)}vaadin-notification-card[theme~=error] .jmix-text-layout-closeable .title,vaadin-notification-card[theme~=error] .jmix-text-layout .title{color:var(--lumo-error-contrast-color)}vaadin-notification-card[theme~=success] .jmix-text-layout-closeable .title,vaadin-notification-card[theme~=success] .jmix-text-layout .title{color:var(--lumo-success-contrast-color)}vaadin-notification-card[theme~=primary] .jmix-text-layout-closeable .title,vaadin-notification-card[theme~=primary] .jmix-text-layout .title{color:var(--lumo-primary-contrast-color)}vaadin-notification-card::part(overlay){display:flex;justify-content:center;position:relative}vaadin-split-layout[theme~=splitter-spacing]{gap:var(--lumo-space-s)}@font-face{font-family:Vaadin-Icons;font-style:normal;font-weight:900;font-display:block;src:url('+new URL("Vaadin-Icons-xd9l0VVN.woff",import.meta.url).href+') format("woff"),url('+new URL("Vaadin-Icons-BZSCcOkD.ttf",import.meta.url).href+') format("truetype"),url('+new URL("Vaadin-Icons-BdG7kKl7.eot",import.meta.url).href+') format("eot")}html{--jmix-lumo-warning-background-color: var(--lumo-warning-color);--jmix-lumo-warning-background-color-50pct: hsla(48, 100%, 50%, .5);--jmix-lumo-warning-background-color-10pct: var(--lumo-warning-color-10pct);--jmix-lumo-warning-primary-text-color: var(--lumo-warning-text-color);--jmix-lumo-warning-color: var(--lumo-warning-contrast-color);--jmix-simple-pagination-gap: .3em}',xy=e=>{const t=[];e!==document&&(t.push(bt(Ll.cssText,"",e,!0)),t.push(bt($l.cssText,"",e,!0)),t.push(bt(Tu.cssText,"",e,!0)),t.push(bt(Nl.cssText,"",e,!0)),t.push(bt(Dl.cssText,"",e,!0)),t.push(bt(gy.toString(),"",e)))};document._vaadintheme_jmixProject_componentCss||(document._vaadintheme_jmixProject_componentCss=!0);const yy=".jmix-main-view-header{box-sizing:border-box;display:flex;height:var(--lumo-size-xl);align-items:center;width:100%}.jmix-main-view-drawer-toggle{color:var(--lumo-secondary-text-color)}.jmix-main-view-title{margin:0;font-size:var(--lumo-font-size-l)}.jmix-main-view-section{display:flex;flex-direction:column;align-items:stretch;max-height:100%;min-height:100%}.jmix-main-view-application-title{display:flex;align-items:center;height:var(--lumo-size-xl);margin:0;padding-left:var(--lumo-space-m);padding-right:var(--lumo-space-m);font-size:var(--lumo-font-size-m)}.jmix-main-view-application-title-base-link{color:var(--lumo-header-text-color)}.jmix-main-view-application-title-base-link:hover{text-decoration:none}.jmix-main-view-navigation{display:flex;flex-direction:column;border-bottom:1px solid;border-color:var(--lumo-contrast-10pct);flex-grow:1;overflow:auto}.jmix-main-view-footer{display:flex;align-items:center;margin-bottom:var(--lumo-space-s);margin-top:var(--lumo-space-s);padding:var(--lumo-space-xs) var(--lumo-space-m);gap:var(--lumo-space-m)}.jmix-main-view-footer .jmix-user-indicator{flex-grow:1}vaadin-app-layout.jmix-main-view-top-menu-app-layout::part(navbar){min-height:0;border-bottom:0}.jmix-main-view-top-menu-navigation-bar-box{padding:0;gap:0;width:100%}.jmix-main-view-top-menu-navigation{display:flex;flex-grow:1;overflow:auto}.jmix-main-view-top-menu-header{display:flex;align-items:center;width:100%;border-bottom:1px solid var(--lumo-contrast-10pct)}.jmix-main-view-top-menu-logo-container{display:flex;margin:0 var(--lumo-space-m)}.jmix-main-view-top-menu-logo{width:var(--lumo-size-m);height:var(--lumo-size-m)}.jmix-main-view-top-menu-user-box{align-self:flex-end;align-items:center;margin:0 var(--lumo-space-m);max-width:20em}.jmix-main-view-top-menu-view-header-box{border-bottom:1px solid var(--lumo-contrast-10pct);padding:0;width:100%}.jmix-main-view-top-menu-view-title{font-size:var(--lumo-font-size-l);margin:var(--lumo-space-s) var(--lumo-space-m)}.jmix-login-main-layout{background-color:var(--lumo-shade-5pct)}",wy=e=>{const t=[];e!==document&&(t.push(bt(Ll.cssText,"",e,!0)),t.push(bt($l.cssText,"",e,!0)),t.push(bt(Tu.cssText,"",e,!0)),t.push(bt(Nl.cssText,"",e,!0)),t.push(bt(Dl.cssText,"",e,!0)),t.push(bt(yy.toString(),"",e))),xy(e)},by=wy;by(document);export{ux as B,De as E,Py as T,fs as _,Pn as a,Qo as b,Nx as c,Hx as d,hx as e,fx as f,px as g,Xn as h,ke as i,jy as j,$l as k,Ll as l,Bn as m,Md as n,Sy as o,Su as r,kp as t,tx as x};
