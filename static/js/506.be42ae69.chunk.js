"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[506],{506:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(861),c=t(439),a=t(757),i=t.n(a),s=t(689),u=t(791),o=t(188),d=function(){var e=(0,r.Z)(i().mark((function e(n){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(o.H7,"/movie/").concat(n,"/credits?").concat(o.YM));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=d,h="Cast_cast-container__VofqV",p="Cast_cast-image__Lf-J8",l=t(184),v="pending",m="resolved",x="rejected",j=function(){var e=(0,s.UO)().movieId,n=(0,u.useState)(""),t=(0,c.Z)(n,2),a=t[0],d=t[1],j=(0,u.useState)([]),w=(0,c.Z)(j,2),_=w[0],g=w[1],k=(0,u.useState)(null),b=(0,c.Z)(k,2),y=b[0],Z=b[1];return(0,u.useEffect)((function(){function n(){return(n=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f(e);case 3:t=n.sent,g(t.cast),d(m),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(0),Z(n.t0),d(x);case 12:case"end":return n.stop()}}),n,null,[[0,8]])})))).apply(this,arguments)}d(v),function(){n.apply(this,arguments)}()}),[e]),"pending"===a?(0,l.jsx)("div",{children:"Loading..."}):"rejected"===a?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:"An error occured, please try again."}),(0,l.jsxs)("div",{children:["Error",y.message]})]}):"resolved"===a?(0,l.jsx)("div",{className:h,children:_.map((function(e){var n=e.name,t=e.profile_path,r=e.character,c=e.id;return(0,l.jsxs)("div",{children:[t&&(0,l.jsx)("img",{src:o.b1+t,alt:n,className:p}),(0,l.jsx)("h3",{children:n}),(0,l.jsx)("h3",{children:"Character:"}),(0,l.jsx)("p",{children:r})]},c)}))}):void 0}},188:function(e,n,t){t.d(n,{Fn:function(){return c},H7:function(){return r},YM:function(){return a},b1:function(){return i}});var r="https://api.themoviedb.org/3",c="0f13d416e0a5bec252569942d7aded53",a=new URLSearchParams({api_key:c}),i="https://image.tmdb.org/t/p/w200/"},861:function(e,n,t){function r(e,n,t,r,c,a,i){try{var s=e[a](i),u=s.value}catch(o){return void t(o)}s.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,a){var i=e.apply(n,t);function s(e){r(i,c,a,s,u,"next",e)}function u(e){r(i,c,a,s,u,"throw",e)}s(void 0)}))}}t.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=506.be42ae69.chunk.js.map