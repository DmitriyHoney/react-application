(this["webpackJsonpvk-project"]=this["webpackJsonpvk-project"]||[]).push([[4],{296:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],a=!0,r=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(u){r=!0,s=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}return n}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",(function(){return a}))},297:function(e,t,n){},298:function(e,t,n){e.exports={btn:"Pagination_btn__1SiER",btn_act:"Pagination_btn_act__1r9kG"}},299:function(e,t,n){e.exports={avatar:"OneUser_avatar__1ML6_",userPhoto:"OneUser_userPhoto__2FiH9",userWrap:"OneUser_userWrap__132xe",userName:"OneUser_userName__1cX8-",userStatus:"OneUser_userStatus__YfuYP"}},300:function(e,t,n){e.exports=n.p+"static/media/default-usaer.cdb366b2.jpg"},315:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(19),s=n(21),o=n(20),c=n(22),u=n(0),l=n.n(u),i=n(10),f=n(297),m=n.n(f),p=n(296),b=n(298),g=n.n(b),h=function(e){for(var t=[],n=Math.ceil(e.totalCount/e.pageSize),a=1;a<=n;a++)t.push(a);var r=Math.ceil(n/e.portions),s=Object(u.useState)(1),o=Object(p.a)(s,2),c=o[0],i=o[1],f=(c-1)*e.portions+1,m=c*e.portions,b=t.filter((function(e){return e>=f&&e<=m})).map((function(t){return l.a.createElement("span",{key:t,className:t===e.currentPage?"".concat(g.a.btn," ").concat(g.a.btn_act):"".concat(g.a.btn),onClick:function(){return e.changePage(t)}},t)}));return l.a.createElement("div",null,c>1&&l.a.createElement("button",{className:"main-btn prev",onClick:function(){i(c-1)}},"Prev"),b,!(c===r)&&l.a.createElement("button",{className:"main-btn next",onClick:function(){i(c+1)}},"Next"))},O=n(63),P=n(299),d=n.n(P),v=n(300),U=n.n(v),_=n(27),w=function(e){var t=e.user,n=t.name,a=t.id,r=t.photos,s=t.status,o=t.followed,c=e.usersInSubscribeProcess.some((function(e){return e===a})),u="/profile/".concat(a);return l.a.createElement("div",{key:a,className:d.a.userWrap},l.a.createElement("div",{className:d.a.userPhoto},l.a.createElement(_.b,{to:u},l.a.createElement("img",{className:d.a.avatar,src:r.small||U.a,alt:"avatar"})),o?l.a.createElement("button",{disabled:c,className:"main-btn",onClick:function(){return e.unFollowOnUser(a)}},"unfollow"):l.a.createElement("button",{disabled:c,className:"main-btn",onClick:function(){return e.followOnUser(a)}},"follow")),l.a.createElement("div",{className:d.a.userInfo},l.a.createElement("div",{className:d.a.userName},n),l.a.createElement("div",{className:d.a.userStatus},s||"not status")))},E=function(e){var t=e.items.map((function(t){return l.a.createElement(w,{key:t.id,user:t,followOnUser:e.followOnUser,unFollowOnUser:e.unFollowOnUser,usersInSubscribeProcess:e.usersInSubscribeProcess})}));return l.a.createElement("div",{className:m.a.usersList},l.a.createElement(h,{currentPage:e.currentPage,changePage:e.changePage,portions:5,pageSize:e.pageSize,totalCount:e.totalCount}),e.preloader?t:l.a.createElement(O.a,null))},j=n(127),N=n(5),k=n(54),y=n(38),S=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).changePage=function(e){n.props.changeCurrentPage(e)},n.followOnUser=function(e){n.props.followOnUser(e)},n.unFollowOnUser=function(e){n.props.unFollowOnUser(e)},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.countUsers)}},{key:"render",value:function(){return this.props.usersPage.items?l.a.createElement(E,Object.assign({},this.props.usersPage,{followOnUser:this.followOnUser,unFollowOnUser:this.unFollowOnUser,changePage:this.changePage})):l.a.createElement(O.a,null)}}]),t}(l.a.Component);t.default=Object(N.d)(Object(i.b)((function(e){return{usersPage:Object(y.f)(e),currentPage:e.usersPage.currentPage,countUsers:e.usersPage.countUsers}}),{getUsers:j.d,changeCurrentPage:j.a,followOnUser:j.c,unFollowOnUser:j.e}),k.a)(S)}}]);
//# sourceMappingURL=4.f00dda22.chunk.js.map