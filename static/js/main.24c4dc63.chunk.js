(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e){e.exports={a:[{title:"Task 1",responsible:"Mark",description:"Lorem impsum",priority:"Low"},{title:"Task 2",responsible:"Mark 2",description:"Lorem impsum 2",priority:"medium"},{title:"Task 3",responsible:"Mark 3",description:"Lorem impsum",priority:"high"}]}},18:function(e,t,a){e.exports=a(30)},28:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=a(2),i=a(8),s=a(12),m={todos:a(17).a},d=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return Object(s.a)({},e,{todos:e.todos.concat(t.payload)});case"REMOVE_TODO":return Object(s.a)({},e,{todos:e.todos.filter(function(e,a){return a!==t.payload})});default:return e}},m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),u=(a(28),a(3)),p=a(4),b=a(6),E=a(5),v=a(7),h=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},r.a.createElement("h2",{className:"text-white"},this.props.title,r.a.createElement("span",{className:"badge badge-pill badge-light ml-2"},this.props.todos.length))))}}]),t}(n.Component),f=Object(c.b)(function(e){return{todos:e.todos}},null)(h),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){window.confirm("Are you sure you want to delete it?")&&a.props.removeTodo(e)},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos.map(function(t,a){var n=t.title,o=t.priority,l=t.description,c=t.responsible;return r.a.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12 mt-2 mb-5",key:a},r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,n),r.a.createElement("span",{className:"badge badge-pill badge-danger ml-2"},o)),r.a.createElement("div",{className:"card-body"},r.a.createElement("p",null,l),r.a.createElement("p",null,r.a.createElement("mark",null,c))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{className:"btn btn-danger",onClick:e.handleDelete.bind(e,a)},"Delete"))))});return r.a.createElement("div",null,r.a.createElement("div",{className:"row mt-4"},t))}}]),t}(n.Component),O=Object(c.b)(function(e){return{todos:e.todos}},function(e){return{removeTodo:function(t){return e({type:"REMOVE_TODO",payload:t})}}})(g),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).handleSubmit=function(e){e.preventDefault();var t={title:e.target.title.value,description:e.target.description.value,responsible:e.target.responsible.value,priority:e.target.priority.value};""===e.target.title.value?e.target.title.focus():""===e.target.responsible.value?e.target.responsible.focus():""===e.target.description.value?e.target.description.focus():(a.props.onAddTodo(t),e.target.reset())},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h3",null,"Formulario")),r.a.createElement("form",{className:"card-body",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"title",className:"form-control",placeholder:"Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"responsible",className:"form-control",placeholder:"Responsible"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"description",className:"form-control",placeholder:"Description"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control",name:"priority"},r.a.createElement("option",{value:"low"},"Low"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"high"},"High"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Enviar")))))}}]),t}(n.Component),N=Object(c.b)(null,function(e){return{onAddTodo:function(t){return e({type:"ADD_TODO",payload:t})}}})(y),w=function(){return r.a.createElement("div",null,r.a.createElement(f,{title:"Todo-App"}),r.a.createElement("div",{className:"d-inline-block col-md-4 col-sm-12"},r.a.createElement(N,null)),r.a.createElement("div",{className:"d-inline-block col-md-8 col-sm-12"},r.a.createElement(O,null)),r.a.createElement("div",{className:"footer text-center"},r.a.createElement("p",null,"Johann Pino --- Todo-App with React & Redux ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:d},r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.24c4dc63.chunk.js.map