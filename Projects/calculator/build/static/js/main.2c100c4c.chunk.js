(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{17:function(e,t,n){e.exports=n(36)},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),c=n(8),u=n.n(c),i=(n(22),n(23),n(24),n(1)),l=n(4),s=n(6),p=n(2),f=n(3),v={value:"0"},d={setTotal:function(e,t){return Object(p.a)(e,(function(e){return t.payload}))}},b={appendTotal:function(e,t){return Object(p.a)(e,(function(e){e.value="".concat("0"!==e.value?e.value:"").concat(t.payload.value)}))}},m={clear:function(e){return Object(p.a)(e,(function(e){return v}))}},O=Object(f.b)({name:"total",initialState:v,reducers:Object(s.a)({},d,{},b,{},m)}),h=[],g={clear:function(e){return Object(p.a)(e,(function(e){return h}))}},j={pushHistory:function(e,t){return Object(p.a)(e,(function(e){e.push(t.payload),6===e.length&&e.splice(0,1)}))}},w={replaceHistory:function(e,t){return Object(p.a)(e,(function(e){e[e.length-1].operator=t.payload.operator}))}},y=Object(f.b)({name:"history",initialState:h,reducers:Object(s.a)({},g,{},j,{},w)}),E={tempValue:"0"},I={clear:function(e){return Object(p.a)(e,(function(e){return E}))}},k={setTemp:function(e,t){return Object(p.a)(e,(function(e){return t.payload}))}},F=Object(f.b)({name:"tempTotal",initialState:E,reducers:Object(s.a)({},I,{},k)});!function(e){e.FirstInput="FirstInput",e.FollowUpInput="FollowUpInput",e.OperatorInput="OperatorInput",e.TotalInput="TotalInput",e.MaybeNegative="MaybeNegative"}(a||(a={}));var T={state:a.FirstInput},V={setState:function(e,t){return Object(p.a)(e,(function(e){return t.payload}))}},N={clear:function(e){return Object(p.a)(e,(function(e){return T}))}},S=Object(f.b)({name:"status",initialState:T,reducers:Object(s.a)({},V,{},N)}),U=O.reducer,C=O.actions,M=C.setTotal,W=C.clear,A=C.appendTotal,H=y.reducer,R=y.actions,x=R.pushHistory,B=R.clear,J=R.replaceHistory,L=F.reducer,P=F.actions,q=P.setTemp,z=P.clear,$=S.reducer,_=S.actions,D=_.setState,G=(_.clear,Object(l.combineReducers)({total:U,history:H,temp:L,status:$}));function K(e){switch(e){case"+":return function(e,t){return e+t};case"-":return function(e,t){return e-t};case"*":return function(e,t){return e*t};case"/":return function(e,t){return e/t};default:return function(e){return e}}}var Q=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.history})),n=Object(i.c)((function(e){return e.total})).value,r=Object(i.c)((function(e){return e.temp})).tempValue,c=Object(i.c)((function(e){return e.status})).state;return o.a.createElement("button",{id:"equals",onClick:function(o){switch(c){case a.OperatorInput:e(J({operator:"="})),e(M({value:r})),e(D({state:a.TotalInput}));break;case a.FollowUpInput:e(x({prevValue:n,operator:"="}));var u,i=K(null===(u=t[t.length-1])||void 0===u?void 0:u.operator)(Number.parseFloat(r),Number.parseFloat(n)).toString(10);e(q({tempValue:i})),e(M({value:i})),e(D({state:a.TotalInput}));break;case a.FirstInput:case a.TotalInput:}}},"=")},X=[{id:"zero",value:"0"},{id:"one",value:"1"},{id:"two",value:"2"},{id:"three",value:"3"},{id:"four",value:"4"},{id:"five",value:"5"},{id:"six",value:"6"},{id:"seven",value:"7"},{id:"eight",value:"8"},{id:"nine",value:"9"}],Y=function(e){var t=e.value,n=e.id,a=e.onClick;return o.a.createElement("button",{id:n,onClick:function(e){return a(t)}},t)},Z=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.status})).state;return o.a.createElement(o.a.Fragment,null,X.map((function(e){var t=e.value,a=e.id;return o.a.createElement(Y,{value:t,id:a,key:a,onClick:n})})));function n(n){switch(t){case a.FirstInput:case a.TotalInput:e(B()),e(z()),e(M({value:n})),e(D({state:a.FollowUpInput}));break;case a.FollowUpInput:e(A({value:n}));break;case a.OperatorInput:e(A({value:n})),e(D({state:a.FollowUpInput}));break;case a.MaybeNegative:e(M({value:"-".concat(n)})),e(D({state:a.FollowUpInput}))}}},ee=function(e){var t=e.id,n=e.operator,r=Object(i.b)(),c=Object(i.c)((function(e){return e.history})),u=Object(i.c)((function(e){return e.total})).value,l=Object(i.c)((function(e){return e.status})).state,s=Object(i.c)((function(e){return e.temp})).tempValue;return o.a.createElement("button",{id:t,onClick:function(e){switch(l){case a.FollowUpInput:r(x({prevValue:u,operator:n}));var t=c.concat([{prevValue:u,operator:n}]).reduce((function(e,t){return{prevValue:K(e.operator)(Number.parseFloat(e.prevValue),Number.parseFloat(t.prevValue)).toString(10),operator:t.operator}}));r(q({tempValue:t.prevValue})),r(M({value:"0"})),r(D({state:a.OperatorInput}));break;case a.OperatorInput:"-"===n?(r(D({state:a.MaybeNegative})),r(q({tempSign:"",tempValue:s}))):r(J({operator:n}));break;case a.MaybeNegative:r(D({state:a.OperatorInput})),r(J({operator:n}));break;case a.TotalInput:r(B()),r(x({prevValue:u,operator:n})),r(M({value:"0"})),r(D({state:a.OperatorInput}));break;case a.FirstInput:"-"===n&&(r(D({state:a.MaybeNegative})),r(q({tempValue:"0",tempSign:"-"})))}},className:"subtract"===t&&l===a.MaybeNegative?"negative":""},n)},te=function(){return o.a.createElement(ee,{id:"add",operator:"+"})},ne=function(){return o.a.createElement(ee,{id:"subtract",operator:"-"})},ae=function(){return o.a.createElement(ee,{id:"multiply",operator:"*"})},re=function(){return o.a.createElement(ee,{id:"divide",operator:"/"})},oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.status})).state,n=Object(i.c)((function(e){return e.total})).value;return o.a.createElement("button",{id:"decimal",onClick:function(r){switch(t){case a.TotalInput:case a.OperatorInput:case a.FirstInput:e(M({value:"0."}));break;case a.FollowUpInput:case a.MaybeNegative:/\./.test(n)||e(A({value:"."}))}}},".")},ce=function(){var e=Object(i.b)();return o.a.createElement("button",{id:"clear",onClick:function(){e(W()),e(B()),e(z()),e(D({state:a.FirstInput}))}},"AC")},ue=(n(34),function(){var e=Object(i.c)((function(e){return e.total})).value,t=Object(i.c)((function(e){return e.history})),n=Object(i.c)((function(e){return e.temp})),a=n.tempValue,r=n.tempSign;return o.a.createElement("section",{id:"display_history"},o.a.createElement("section",{id:"history"},o.a.createElement("ul",null,t.map((function(e,t){var n=e.prevValue,a=e.operator;return o.a.createElement(o.a.Fragment,{key:t},o.a.createElement("li",null,n),o.a.createElement("li",null,a))})))),o.a.createElement("p",{id:"tempTotal"},"".concat(r?"-":"").concat(a)),o.a.createElement("section",{id:"display"},o.a.createElement("p",null,e)))}),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(35);var se=Object(f.a)({reducer:G});u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{store:se},o.a.createElement((function(){return o.a.createElement("main",{className:"App"},o.a.createElement(ue,null),o.a.createElement("section",{id:"pad"},o.a.createElement(Z,null),o.a.createElement(oe,null),o.a.createElement(te,null),o.a.createElement(ne,null),o.a.createElement(ae,null),o.a.createElement(re,null),o.a.createElement(ce,null),o.a.createElement(Q,null)))}),null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):le(t,e)}))}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.2c100c4c.chunk.js.map