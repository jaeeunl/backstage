/*! For license information please see 4a619525.e23d2d13.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[848894],{4372:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=r(824246),o=r(511151);const i={id:"config.configreader",title:"ConfigReader",description:"API reference for ConfigReader"},c=void 0,s={id:"reference/config.configreader",title:"ConfigReader",description:"API reference for ConfigReader",source:"@site/../docs/reference/config.configreader.md",sourceDirName:"reference",slug:"/reference/config.configreader",permalink:"/docs/reference/config.configreader",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/config.configreader.md",tags:[],version:"current",frontMatter:{id:"config.configreader",title:"ConfigReader",description:"API reference for ConfigReader"}},a={},l=[{value:"Constructors",id:"constructors",level:2},{value:"Methods",id:"methods",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/config",children:(0,t.jsx)(n.code,{children:"@backstage/config"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader",children:(0,t.jsx)(n.code,{children:"ConfigReader"})})]}),"\n",(0,t.jsxs)(n.p,{children:["An implementation of the ",(0,t.jsx)(n.code,{children:"Config"})," interface that uses a plain JavaScript object for the backing data, with the ability of linking multiple readers together."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ConfigReader implements Config \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/config.config",children:"Config"})]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constructor"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader._constructor_",children:"(constructor)(data, context, fallback, prefix)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"ConfigReader"})," class"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.fromconfigs",children:"fromConfigs(configs)"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"static"})}),(0,t.jsx)(n.td,{children:"Instantiates the config reader from a list of application config objects."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.get",children:"get(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptional"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getboolean",children:"getBoolean(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalBoolean"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getconfig",children:"getConfig(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalConfig"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getconfigarray",children:"getConfigArray(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalConfigArray"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getnumber",children:"getNumber(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalNumber"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptional",children:"getOptional(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.p,{children:"Read out all configuration data for the given key."}),(0,t.jsx)(n.p,{children:"Usage of this method should be avoided as the typed alternatives provide much better error reporting. The main use-case of this method is to determine the type of a configuration value in the case where there are multiple possible shapes of the configuration."})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptionalboolean",children:"getOptionalBoolean(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Reads a configuration value at the given key, expecting it to be a boolean."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptionalconfig",children:"getOptionalConfig(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Creates a sub-view of the configuration object. The configuration value at the position of the provided key must be an object."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptionalconfigarray",children:"getOptionalConfigArray(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Creates a sub-view of an array of configuration objects. The configuration value at the position of the provided key must be an array of objects."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptionalnumber",children:"getOptionalNumber(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Reads a configuration value at the given key, expecting it to be a number."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptionalstring",children:"getOptionalString(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Reads a configuration value at the given key, expecting it to be a string."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getoptionalstringarray",children:"getOptionalStringArray(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Reads a configuration value at the given key, expecting it to be an array of strings."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getstring",children:"getString(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalString"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.getstringarray",children:"getStringArray(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Same as ",(0,t.jsx)(n.code,{children:"getOptionalStringArray"}),", but will throw an error if there's no value for the given key."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.has",children:"has(key)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Checks whether the given key is present."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/config.configreader.keys",children:"keys()"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Lists all available configuration keys."})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},371426:(e,n,r)=>{var t=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,i={},l=null,f=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(f=n.ref),n)c.call(n,t)&&!a.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:o,type:e,key:l,ref:f,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),a=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),u=Symbol.for("react.lazy"),h=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,j={};function x(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||g}function y(){}function m(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||g}x.prototype.isReactComponent={},x.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=x.prototype;var b=m.prototype=new y;b.constructor=m,p(b,x.prototype),b.isPureReactComponent=!0;var v=Array.isArray,k=Object.prototype.hasOwnProperty,_={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function C(e,n,t){var o,i={},c=null,s=null;if(null!=n)for(o in void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(c=""+n.key),n)k.call(n,o)&&!S.hasOwnProperty(o)&&(i[o]=n[o]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===i[o]&&(i[o]=a[o]);return{$$typeof:r,type:e,key:c,ref:s,props:i,_owner:_.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function O(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function E(e,n,o,i,c){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var a=!1;if(null===e)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case t:a=!0}}if(a)return c=c(a=e),e=""===i?"."+O(a,0):i,v(c)?(o="",null!=e&&(o=e.replace(R,"$&/")+"/"),E(c,n,o,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),n.push(c)),1;if(a=0,i=""===i?".":i+":",v(e))for(var l=0;l<e.length;l++){var f=i+O(s=e[l],l);a+=E(s,n,o,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(s=e.next()).done;)a+=E(s=s.value,n,o,f=i+O(s,l++),c);else if("object"===s)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,n,r){if(null==e)return e;var t=[],o=0;return E(e,t,"","",(function(e){return n.call(r,e,o++)})),t}function P(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},A={transition:null},T={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:A,ReactCurrentOwner:_};n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=x,n.Fragment=o,n.Profiler=c,n.PureComponent=m,n.StrictMode=i,n.Suspense=f,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=p({},e.props),i=e.key,c=e.ref,s=e._owner;if(null!=n){if(void 0!==n.ref&&(c=n.ref,s=_.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in n)k.call(n,l)&&!S.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==a?a[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=t;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];o.children=a}return{$$typeof:r,type:e.type,key:i,ref:c,props:o,_owner:s}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},n.createElement=C,n.createFactory=function(e){var n=C.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=A.transition;A.transition={};try{e()}finally{A.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return I.current.useCallback(e,n)},n.useContext=function(e){return I.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return I.current.useDeferredValue(e)},n.useEffect=function(e,n){return I.current.useEffect(e,n)},n.useId=function(){return I.current.useId()},n.useImperativeHandle=function(e,n,r){return I.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return I.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return I.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return I.current.useMemo(e,n)},n.useReducer=function(e,n,r){return I.current.useReducer(e,n,r)},n.useRef=function(e){return I.current.useRef(e)},n.useState=function(e){return I.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return I.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return I.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var t=r(667294);const o={},i=t.createContext(o);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);