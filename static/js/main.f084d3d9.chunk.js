(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(41)},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a.n(o),c=a(13),l=a.n(c),i=(a(20),a(7)),r=(a(21),a(22),function(e){return n.a.createElement("div",{className:"todo"},n.a.createElement("h2",null,e.value+1,". ",e.title),n.a.createElement("button",{className:"DelTodoBtn",id:e.id,value:e.value,onClick:e.delTodo}))}),d=a(14),s=a.n(d).a.initializeApp({apiKey:"AIzaSyDG6YkN_9Hfgm6TjbvlzBu2Wl_-c01npYc",authDomain:"todo-app-e3d9d.firebaseapp.com",databaseURL:"https://todo-app-e3d9d.firebaseio.com",projectId:"todo-app-e3d9d",storageBucket:"todo-app-e3d9d.appspot.com",messagingSenderId:"958375853003",appId:"1:958375853003:web:81d35b35cdbb35c2f5544e"}).firestore(),u=a(9),p=0,m=p;var f=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(o.useState)(""),d=Object(i.a)(l,2),f=d[0],v=d[1];function b(e){e.preventDefault(),console.log(O);var t=e.target.value,a=O[t].id;p--,console.log("Deleted item DOC-ID:"+a),s.collection("todos").doc(a).delete()}var h=Object(o.useState)([]),E=Object(i.a)(h,2),O=E[0],g=E[1];return Object(o.useEffect)((function(){s.collection("todos").onSnapshot((function(e){g(e.docs.map((function(e){return{id:e.id,data:e.data()}}))),c(e.docs.map((function(e){return e.data().title})))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"todoTitle"},n.a.createElement("h1",null,"TODO APP")),n.a.createElement("form",null,n.a.createElement("input",{value:f,onChange:function(e){return v(e.target.value)},type:"text",placeholder:"Write a TODO..."}),n.a.createElement("button",{className:"AddTodoBtn",disabled:!f,type:"submit",onClick:function(e){e.preventDefault(),s.collection("todos").doc(Object(u.v4)()).set({title:f}),localStorage.setItem(p,m),p+=1,v("")}}),n.a.createElement("h3",null,"You have ",p," TODO(s) left"),n.a.createElement("div",{className:"todosContainer"},a.map((function(e,t){return n.a.createElement(r,{title:e,id:Object(u.v4)(),key:t,value:t,delTodo:b})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.f084d3d9.chunk.js.map