(this["webpackJsonpvk-project"]=this["webpackJsonpvk-project"]||[]).push([[5],{309:function(e,a,t){e.exports={dialogsWrap:"Dialogs_dialogsWrap__FZWOg",dialogItem:"Dialogs_dialogItem__33-Fe",dialogItemAct:"Dialogs_dialogItemAct__efRlA",chatWrap:"Dialogs_chatWrap__2l8QW"}},310:function(e,a,t){e.exports={dialogItem:"DialogCardOfFriend_dialogItem__27ew2"}},311:function(e,a,t){e.exports={myMessage:"ChatMessage_myMessage__1089j",friendMessage:"ChatMessage_friendMessage__2Jtvy"}},312:function(e,a,t){e.exports={sendInput:"SendMessage_sendInput__2Wd6I",sendMesage:"SendMessage_sendMesage__33lUy"}},314:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(10),r=t(309),d=t.n(r),l=t(310),i=t.n(l),o=t(94),g=t(27),u=function(e){return n.a.createElement(g.b,{to:"/dialogs/".concat(e.userId),className:i.a.dialogItem+" "+e.active},n.a.createElement(o.a,{src:e.src}),n.a.createElement("div",{className:"dialog__author"},e.name))},m=t(311),_=t.n(m),f=function(e){var a;return a="friend"===e.send?_.a.friendMessage:_.a.myMessage,n.a.createElement("div",{className:a},n.a.createElement(o.a,{src:e.src}),n.a.createElement("p",null,e.message))},p=t(312),b=t.n(p),M=t(96),v=function(e){return n.a.createElement("div",{className:b.a.sendMesage},n.a.createElement("textarea",{className:b.a.sendInput,value:e.value,onChange:function(a){e.updateMessageTextarea(a.target.value)}}),n.a.createElement("button",{className:"main-btn",onClick:function(){e.addNewMessage()}},"Send"))},E=function(e){var a=e.dialogsPage.friends.map((function(e,a){return n.a.createElement(u,{key:a,userId:e.userId,name:e.name,src:e.src})}));return n.a.createElement("div",{className:"default-card ".concat(d.a.dialogsWrap)},n.a.createElement("div",null,a),n.a.createElement("div",{className:d.a.chatWrap},n.a.createElement(f,{send:"friend",message:"Hello, how are you?",src:"https://avatars.mds.yandex.net/get-pdb/1935444/7ad1efd1-cc5f-48fc-96ad-c65bab20970c/s1200"}),n.a.createElement(f,{send:"me",message:"Hello, I`m fine, thanks!",src:"https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5a316bb4830905958b6dbad4_5a316bda77d0e6afcba2ac2d/scale_1200"}),n.a.createElement(v,{value:e.dialogsPage.chatTextarea,updateMessageTextarea:e.updateMessageTextarea,addNewMessage:e.addNewMessage})))},h=t(54),I=t(5),x=t(38);a.default=Object(I.d)(Object(c.b)((function(e){return{dialogsPage:Object(x.b)(e)}}),(function(e){return{updateMessageTextarea:function(a){e(Object(M.c)(a))},addNewMessage:function(){e(Object(M.a)())}}})),h.a)(E)}}]);
//# sourceMappingURL=5.c1282029.chunk.js.map