"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{421:function(e,r,t){t.d(r,{Z:function(){return i}});var n="Loader_loader__+lRPl",a=t(643),c=t(184),i=function(){return(0,c.jsx)("div",{className:n,children:(0,c.jsx)(a.iT,{height:"30",width:"30",color:"#3f51b5",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#8890bc",strokeWidth:7,strokeWidthSecondary:7})})}},111:function(e,r,t){var n=t(87),a=t(689),c=t(184);r.Z=function(e){var r=e.movies,t=(0,a.TH)();return(0,c.jsx)("ul",{className:"movies",children:r.map((function(e){var r=e.id,a=e.title,i=e.original_title;return(0,c.jsx)(n.rU,{to:"/movies/".concat(r),state:{from:t},children:(0,c.jsx)("li",{children:null!==a&&void 0!==a?a:i})},r)}))})}},188:function(e,r,t){t.d(r,{Fn:function(){return a},H7:function(){return n},YM:function(){return c},b1:function(){return i}});var n="https://api.themoviedb.org/3",a="0f13d416e0a5bec252569942d7aded53",c=new URLSearchParams({api_key:a}),i="https://image.tmdb.org/t/p/w200/"},530:function(e,r,t){t.r(r),t.d(r,{default:function(){return E}});var n,a=t(861),c=t(439),i=t(757),s=t.n(i),o=t(87),u=t(791),l="Searchbar_searchbar__0FWoU",h="Searchbar_searchForm__Bt5yh",p="Searchbar_searchForm-button__LrdGM",f="Searchbar_searchForm-input__xffDM",d=["title","titleId"];function m(){return m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},m.apply(this,arguments)}function v(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function x(e,r){var t=e.title,a=e.titleId,c=v(e,d);return u.createElement("svg",m({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve",ref:r,"aria-labelledby":a},c),t?u.createElement("title",{id:a},t):null,n||(n=u.createElement("g",null,u.createElement("path",{d:"M497.938,430.063l-62.281-62.281c-18.156,26.656-41.219,49.719-67.875,67.875l62.281,62.281 c18.75,18.75,49.156,18.75,67.875,0C516.688,479.188,516.688,448.813,497.938,430.063z"}),u.createElement("path",{d:"M448,224C448,100.281,347.719,0,224,0S0,100.281,0,224s100.281,224,224,224S448,347.719,448,224z M224,400 c-97.047,0-176-78.969-176-176c0-97.047,78.953-176,176-176c97.031,0,176,78.953,176,176C400,321.031,321.031,400,224,400z"}))))}var b=u.forwardRef(x),w=(t.p,t(184)),y=function(e){var r=e.onSubmit,t=(0,u.useState)(""),n=(0,c.Z)(t,2),a=n[0],i=n[1];return(0,w.jsx)("header",{className:l,children:(0,w.jsxs)("form",{className:h,onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("Please enter search query");r(a),i("")},children:[(0,w.jsx)("input",{className:f,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(e){i(e.currentTarget.value)}}),(0,w.jsx)("button",{type:"submit",className:p,children:(0,w.jsx)(b,{width:"25",height:"25"})})]})})},g=t(111),j=t(188),_=function(){var e=(0,a.Z)(s().mark((function e(r){var t,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new URLSearchParams({api_key:j.Fn,query:r}),e.next=3,fetch("".concat(j.H7,"/search/movie?").concat(t));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),S=_,k=t(421),O="pending",Z="resolved",C="rejected",E=function(){var e,r=(0,u.useState)([]),t=(0,c.Z)(r,2),n=t[0],i=t[1],l=(0,u.useState)("idle"),h=(0,c.Z)(l,2),p=h[0],f=h[1],d=(0,u.useState)(null),m=(0,c.Z)(d,2),v=m[0],x=m[1],b=(0,o.lr)(),j=(0,c.Z)(b,2),_=j[0],E=j[1],F=null!==(e=_.get("query"))&&void 0!==e?e:"";(0,u.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(F);case 3:r=e.sent,i(r.results),f(Z),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),x(e.t0),f(C);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}""!==F&&(f(O),function(){e.apply(this,arguments)}())}),[F]);return"pending"===p?(0,w.jsx)(k.Z,{}):"rejected"===p?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("div",{children:"An error occured, please try again."}),(0,w.jsxs)("div",{children:["Error",v.message]})]}):(0,w.jsxs)("section",{className:"section",children:[(0,w.jsx)(y,{onSubmit:function(e){E({query:e})}}),(0,w.jsx)(g.Z,{movies:n})]})}}}]);
//# sourceMappingURL=530.74577996.chunk.js.map