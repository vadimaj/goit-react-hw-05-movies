"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{111:function(e,t,r){var n=r(87),a=r(689),c=r(184);t.Z=function(e){var t=e.movies;console.log(t);var r=(0,a.TH)();return(0,c.jsx)("ul",{className:"movies",children:t.map((function(e){return(0,c.jsx)(n.rU,{to:"/movies/".concat(e.id),state:{from:r},children:(0,c.jsx)("li",{children:e.title})},e.id)}))})}},188:function(e,t,r){r.d(t,{Fn:function(){return a},H7:function(){return n},YM:function(){return c},b1:function(){return o}});var n="https://api.themoviedb.org/3",a="0f13d416e0a5bec252569942d7aded53",c=new URLSearchParams({api_key:a}),o="https://image.tmdb.org/t/p/w200/"},530:function(e,t,r){r.r(t),r.d(t,{default:function(){return O}});var n,a=r(433),c=r(861),o=r(439),u=r(757),i=r.n(u),s=r(87),l=r(791),f="Searchbar_searchbar__0FWoU",h="Searchbar_searchForm__Bt5yh",p="Searchbar_searchForm-button__LrdGM",m="Searchbar_searchForm-input__xffDM",v=["title","titleId"];function d(){return d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function x(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){var r=e.title,a=e.titleId,c=x(e,v);return l.createElement("svg",d({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"512px",height:"512px",viewBox:"0 0 512 512",enableBackground:"new 0 0 512 512",xmlSpace:"preserve",ref:t,"aria-labelledby":a},c),r?l.createElement("title",{id:a},r):null,n||(n=l.createElement("g",null,l.createElement("path",{d:"M497.938,430.063l-62.281-62.281c-18.156,26.656-41.219,49.719-67.875,67.875l62.281,62.281 c18.75,18.75,49.156,18.75,67.875,0C516.688,479.188,516.688,448.813,497.938,430.063z"}),l.createElement("path",{d:"M448,224C448,100.281,347.719,0,224,0S0,100.281,0,224s100.281,224,224,224S448,347.719,448,224z M224,400 c-97.047,0-176-78.969-176-176c0-97.047,78.953-176,176-176c97.031,0,176,78.953,176,176C400,321.031,321.031,400,224,400z"}))))}var w=l.forwardRef(b),y=(r.p,r(184)),g=function(e){var t=e.onSubmit,r=(0,l.useState)(""),n=(0,o.Z)(r,2),a=n[0],c=n[1];return(0,y.jsx)("header",{className:f,children:(0,y.jsxs)("form",{className:h,onSubmit:function(e){if(e.preventDefault(),""===a.trim())return alert("Please enter search query");t(a),c("")},children:[(0,y.jsx)("input",{className:m,type:"text",name:"query",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:a,onChange:function(e){c(e.currentTarget.value)}}),(0,y.jsx)("button",{type:"submit",className:p,children:(0,y.jsx)(w,{width:"25",height:"25"})})]})})},_=r(111),j=r(188),S=function(){var e=(0,c.Z)(i().mark((function e(t){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({api_key:j.Fn,query:t}),e.next=3,fetch("".concat(j.H7,"/search/movie?").concat(r));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=S,O=function(){var e,t=(0,l.useState)([]),r=(0,o.Z)(t,2),n=r[0],u=r[1],f=(0,s.lr)(),h=(0,o.Z)(f,2),p=h[0],m=h[1],v=null!==(e=p.get("query"))&&void 0!==e?e:"";(0,l.useEffect)((function(){function e(){return(e=(0,c.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(v);case 3:t=e.sent,u((function(e){return[].concat((0,a.Z)(e),(0,a.Z)(t.results))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}""!==v&&function(){e.apply(this,arguments)}()}),[v]);return(0,y.jsxs)("section",{className:"section",children:[(0,y.jsx)(g,{onSubmit:function(e){m({query:e})}}),(0,y.jsx)(_.Z,{movies:n})]})}},861:function(e,t,r){function n(e,t,r,n,a,c,o){try{var u=e[c](o),i=u.value}catch(s){return void r(s)}u.done?t(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,c){var o=e.apply(t,r);function u(e){n(o,a,c,u,i,"next",e)}function i(e){n(o,a,c,u,i,"throw",e)}u(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=530.e9fd831c.chunk.js.map