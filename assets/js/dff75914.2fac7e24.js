/*! For license information please see dff75914.2fac7e24.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[811170],{55114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(824246),o=n(511151);const i={id:"backend-tasks.taskscheduledefinitionconfig",title:"TaskScheduleDefinitionConfig",description:"API reference for TaskScheduleDefinitionConfig"},s=void 0,c={id:"reference/backend-tasks.taskscheduledefinitionconfig",title:"TaskScheduleDefinitionConfig",description:"API reference for TaskScheduleDefinitionConfig",source:"@site/../docs/reference/backend-tasks.taskscheduledefinitionconfig.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskscheduledefinitionconfig",permalink:"/docs/reference/backend-tasks.taskscheduledefinitionconfig",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-tasks.taskscheduledefinitionconfig.md",tags:[],version:"current",frontMatter:{id:"backend-tasks.taskscheduledefinitionconfig",title:"TaskScheduleDefinitionConfig",description:"API reference for TaskScheduleDefinitionConfig"}},a={},u=[{value:"Properties",id:"properties",level:2}];function f(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks",children:(0,r.jsx)(t.code,{children:"@backstage/backend-tasks"})})," > ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig",children:(0,r.jsx)(t.code,{children:"TaskScheduleDefinitionConfig"})})]}),"\n",(0,r.jsxs)(t.p,{children:["Config options for ",(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinition",children:"TaskScheduleDefinition"})," that control the scheduling of a task."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface TaskScheduleDefinitionConfig \n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Property"}),(0,r.jsx)(t.th,{children:"Modifiers"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.frequency",children:"frequency"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["{ cron: string; } | string | ",(0,r.jsx)(t.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})]}),(0,r.jsx)(t.td,{children:"How often you want the task to run. The system does its best to avoid overlapping invocations."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.initialdelay",children:"initialDelay?"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["string | ",(0,r.jsx)(t.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})]}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," The amount of time that should pass before the first invocation happens."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.scope",children:"scope?"})}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"'global' | 'local'"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.em,{children:"(Optional)"})," Sets the scope of concurrency control / locking to apply for invocations of this task."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"/docs/reference/backend-tasks.taskscheduledefinitionconfig.timeout",children:"timeout"})}),(0,r.jsx)(t.td,{}),(0,r.jsxs)(t.td,{children:["string | ",(0,r.jsx)(t.a,{href:"/docs/reference/types.humanduration",children:"HumanDuration"})]}),(0,r.jsx)(t.td,{children:'The maximum amount of time that a single task invocation can take, before it\'s considered timed out and gets "released" such that a new invocation is permitted to take place (possibly, then, on a different worker).'})]})]})]})]})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,f=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)s.call(t,r)&&!a.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:c.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,k={};function m(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||h}function b(){}function x(e,t,n){this.props=e,this.context=t,this.refs=k,this.updater=n||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=m.prototype;var j=x.prototype=new b;j.constructor=x,y(j,m.prototype),j.isPureReactComponent=!0;var _=Array.isArray,g=Object.prototype.hasOwnProperty,v={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var o,i={},s=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(s=""+t.key),t)g.call(t,o)&&!S.hasOwnProperty(o)&&(i[o]=t[o]);var a=arguments.length-2;if(1===a)i.children=r;else if(1<a){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+2];i.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:n,type:e,key:s,ref:c,props:i,_owner:v.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,i,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return s=s(a=e),e=""===i?"."+R(a,0):i,_(s)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),$(s,t,o,"",(function(e){return e}))):null!=s&&(w(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,o+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(E,"$&/")+"/")+e)),t.push(s)),1;if(a=0,i=""===i?".":i+":",_(e))for(var u=0;u<e.length;u++){var f=i+R(c=e[u],u);a+=$(c,t,o,f,s)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)a+=$(c=c.value,t,o,f=i+R(c,u++),s);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function P(e,t,n){if(null==e)return e;var r=[],o=0;return $(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},O={transition:null},I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:O,ReactCurrentOwner:v};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=s,t.PureComponent=x,t.StrictMode=i,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=v.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)g.call(t,u)&&!S.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){a=Array(u);for(var f=0;f<u;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:n,type:e.type,key:i,ref:s,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(667294);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);