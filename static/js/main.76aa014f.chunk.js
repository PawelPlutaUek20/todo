(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{99:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),c=n.n(r),i=n(12),s=n(7),l=n(78),d=n(16),b=n(79),u=n(31),j=Object(u.b)({name:"todos",initialState:[{id:1,text:"Complete online JavaScript course",completed:!0},{id:2,text:"Jog around the park 3x",completed:!1},{id:3,text:"10 minutes meditation",completed:!1},{id:4,text:"Read for 1 hour",completed:!1},{id:5,text:"Pick up groceries",completed:!1},{id:6,text:"Complete Todo App on Frontend Mentor",completed:!1}],reducers:{addTodo:function(e,t){return[].concat(Object(b.a)(e),[{id:e.reduce((function(e,t){return Math.max(t.id,e)}),-1)+1,text:t.payload.text,completed:!1}])},toggleTodo:function(e,t){return e.map((function(e){return e.id===t.payload.id?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e}))},deleteTodo:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},clearCompleted:function(e,t){return e.filter((function(e){return!1===e.completed}))},reorderTodos:{reducer:function(e,t){return t.payload},prepare:function(e,t,n){var a=Array.from(e),o=a.splice(t,1),r=Object(l.a)(o,1)[0];return a.splice(n,0,r),{payload:a}}}}}),p=j.actions,O=p.addTodo,h=p.toggleTodo,m=p.deleteTodo,f=p.clearCompleted,g=p.reorderTodos,x=j.reducer,k=n(149),y=n(139),v=n(59),C=n.n(v),T=n(134),S=n(5),N=Object(T.a)((function(e){var t,n;return{root:{"& .MuiInputBase-root":{backgroundColor:e.palette.background.paper,"&:focus-within":{"& .MuiInputAdornment-root":{color:e.palette.text.primary,transition:"transform 0.2s ease 0s",transform:"scale(1.1)"}}},"& .MuiInputBase-input":(t={},Object(s.a)(t,e.breakpoints.only("xs"),{height:11,fontSize:12}),Object(s.a)(t,e.breakpoints.up("sm"),{height:27,fontSize:18}),t),"& .MuiOutlinedInput-root":{"& fieldset":{borderWidth:0},"&.Mui-focused fieldset":{borderWidth:0}},"& .MuiInputAdornment-root":(n={},Object(s.a)(n,e.breakpoints.only("xs"),{marginRight:e.spacing(1.5)}),Object(s.a)(n,e.breakpoints.up("sm"),{marginRight:e.spacing(3)}),Object(s.a)(n,"color",e.palette.action.disabledBackground),Object(s.a)(n,"transition","transform 0.2s ease 0s"),Object(s.a)(n,"transform","scale(1)"),n)}}})),I=function(){var e=N(),t=Object(i.c)();return Object(S.jsx)(k.a,{className:e.root,placeholder:"Create a new todo...",onKeyDown:function(e){"Enter"===e.key&&(t(O({text:e.target.value})),e.target.value=null)},fullWidth:!0,variant:"outlined",InputProps:{startAdornment:Object(S.jsx)(y.a,{position:"start",children:Object(S.jsx)(C.a,{})})}})},w=n(140),M=n(141),z=n(150),B=n(143),W=n(142),A=n(73),F=n.n(A),R=n(74),P=n.n(R),D=n(50),E=Object(T.a)((function(e){var t,n;return{root:(t={},Object(s.a)(t,e.breakpoints.only("xs"),{height:53,"& .MuiTypography-body1":{fontSize:12}}),Object(s.a)(t,e.breakpoints.up("sm"),{height:65,"& .MuiTypography-body1":{fontSize:16}}),Object(s.a)(t,"backgroundColor",e.palette.background.paper),Object(s.a)(t,"justifyContent","space-between"),Object(s.a)(t,"borderBottom","1px solid ".concat(e.palette.divider)),t),completed:{textDecoration:"line-through",color:e.palette.action.disabledBackground},checkbox:{"& .MuiIconButton-label":{paddingLeft:1}},icon:(n={},Object(s.a)(n,e.breakpoints.only("xs"),{minWidth:34}),Object(s.a)(n,e.breakpoints.up("sm"),{minWidth:46}),n),button:{color:e.palette.action.disabledBackground},delete:{justifyContent:"flex-end"}}})),J=function(e){var t=e.id,n=e.text,a=e.completed,o=e.index,r=Object(i.c)(),c=E(),s=function(){r(h({id:t}))},l=function(){r(m({id:t}))};return Object(S.jsx)(D.b,{draggableId:t.toString(),index:o,children:function(e){return Object(S.jsxs)(w.a,Object(d.a)(Object(d.a)(Object(d.a)({className:"".concat(c.root," ").concat(a?c.completed:null),ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{children:[Object(S.jsx)(M.a,{className:c.icon,onClick:s,children:Object(S.jsx)(z.a,{className:"".concat(c.checkbox," ").concat(c.button),edge:"start",color:"primary",checked:a,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t},icon:Object(S.jsx)(C.a,{}),checkedIcon:Object(S.jsx)(F.a,{})})}),Object(S.jsx)(B.a,{id:t,primary:n}),Object(S.jsx)(M.a,{className:c.delete,children:Object(S.jsx)(W.a,{className:c.button,onClick:l,edge:"end","aria-label":"delete",children:Object(S.jsx)(P.a,{})})})]}))}},t)},L=n(29),U=n.p+"static/media/bg-desktop-light.3508d620.jpg",V=n.p+"static/media/bg-desktop-dark.73e47dbb.jpg",H={typography:{fontFamily:"Josefin Sans, sans-serif",fontWeightLight:400,fontWeightBold:700,h2:{fontWeight:"bold",textTransform:"uppercase"}},overrides:{MuiCssBaseline:{"@global":{body:{minWidth:320}}}}},K=Object(d.a)(Object(d.a)({},H),{},{palette:{type:"dark",text:{primary:"hsl(234, 39%, 85%)",secondary:"hsl(234, 11%, 52%)"},action:{disabledBackground:"hsl(233, 14%, 35%)",hover:"hsl(236, 33%, 92%)"},background:{default:"hsl(235, 21%, 11%)",paper:"hsl(235, 24%, 19%)"},divider:"hsl(237, 14%, 26%)"},backgroundImage:"url(".concat(V,")")}),q=Object(d.a)(Object(d.a)({},H),{},{palette:{type:"light",text:{primary:"hsl(235, 19%, 35%)",secondary:"hsl(236, 9%, 61%)"},action:{disabledBackground:"hsl(233, 11%, 84%)",hover:"hsl(235, 19%, 35%)"},background:{default:"hsl(0, 0%, 98%)"},divider:"hsl(236, 33%, 92%)"},backgroundImage:"url(".concat(U,")")}),G=function(e){return e.todos},Q=Object(L.a)([function(e){return e.visibilityFilter},G],(function(e,t){switch(e){case"All":return t;case"Completed":return t.filter((function(e){return e.completed}));case"Active":return t.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+e)}})),X=Object(L.a)([G],(function(e){return e.reduce((function(e,t){return t.completed?e:e+1}),0)})),Y=Object(L.a)((function(e){return e.theme}),(function(e){switch(e){case"light":return q;case"dark":return K;default:throw new Error("Unknown theme: "+e)}})),Z=n(138),$=n(51),_=n(151),ee=Object(u.b)({name:"visibilityFilter",initialState:"All",reducers:{setVisibilityFilter:function(e,t){return t.payload}}}),te=ee.actions.setVisibilityFilter,ne=ee.reducer,ae=n(144),oe=Object(T.a)((function(e){return{button:{color:e.palette.text.secondary,cursor:"pointer","&:hover":{color:e.palette.action.hover},margin:"0px 8px"},selected:{color:"hsl(220, 98%, 61%)"},container:{display:"flex"}}})),re=function(){var e=oe(),t=Object(i.c)(),n=Object(i.d)((function(e){return e.visibilityFilter}));return Object(S.jsx)(ae.a,{className:e.container,children:["All","Active","Completed"].map((function(a){return Object(S.jsx)($.a,{className:"".concat(e.button," ").concat(n===a?e.selected:null),onClick:function(){return function(e){t(te(e))}(a)},children:a},a)}))})},ce=Object(T.a)((function(e){var t;return{root:(t={},Object(s.a)(t,e.breakpoints.only("xs"),{height:48,"& .MuiTypography-body1":{fontSize:12}}),Object(s.a)(t,e.breakpoints.up("sm"),{height:52,"& .MuiTypography-body1":{fontSize:14,margin:"0 8px"}}),Object(s.a)(t,"backgroundColor",e.palette.background.paper),Object(s.a)(t,"justifyContent","space-between"),Object(s.a)(t,"color",e.palette.text.secondary),t),button:{cursor:"pointer","&:hover":{color:e.palette.action.hover}}}})),ie=function(){var e=ce(),t=Object(i.c)(),n=Object(i.d)(X);return Object(S.jsxs)(w.a,{className:e.root,children:[Object(S.jsxs)($.a,{children:[n," items left"]}),Object(S.jsx)(_.a,{xsDown:!0,children:Object(S.jsx)(re,{})}),Object(S.jsx)($.a,{className:e.button,onClick:function(){t(f())},children:"Clear Completed"})]})},se=Object(T.a)((function(e){var t;return{todoList:(t={},Object(s.a)(t,e.breakpoints.only("xs"),{margin:"8px 0"}),Object(s.a)(t,e.breakpoints.up("sm"),{marginTop:14}),t)}})),le=function(){var e=se(),t=Object(i.d)((function(e){return e.todos})),n=Object(i.d)(Q),a=Object(i.c)();return Object(S.jsx)(D.a,{onDragEnd:function(e){e.destination&&a(g(t,e.source.index,e.destination.index))},children:Object(S.jsx)(D.c,{droppableId:"characters",children:function(t){return Object(S.jsxs)(Z.a,Object(d.a)(Object(d.a)({className:e.todoList},t.droppableProps),{},{ref:t.innerRef,children:[n.map((function(e,t){return Object(S.jsx)(J,Object(d.a)({index:t},e),e.id)})),t.placeholder,Object(S.jsx)(ie,{})]}))}})})},de=n(145),be=n(146),ue=n(75),je=n.n(ue),pe=n(76),Oe=n.n(pe),he=Object(u.b)({name:"theme",initialState:"light",reducers:{toggleTheme:function(e,t){return"light"===e?"dark":"light"}}}),me=he.actions.toggleTheme,fe=he.reducer,ge=Object(T.a)((function(e){var t,n,a,o;return{header:(t={},Object(s.a)(t,e.breakpoints.only("xs"),{height:200}),Object(s.a)(t,e.breakpoints.up("sm"),{height:300}),Object(s.a)(t,"padding",24),Object(s.a)(t,"backgroundImage",e.backgroundImage),Object(s.a)(t,"backgroundRepeat","no-repeat"),Object(s.a)(t,"backgroundSize","cover"),Object(s.a)(t,"backgroundPosition","center"),t),container:(n={},Object(s.a)(n,e.breakpoints.only("xs"),{marginTop:15}),Object(s.a)(n,e.breakpoints.up("sm"),{marginTop:54}),n),title:(a={},Object(s.a)(a,e.breakpoints.only("xs"),{fontSize:26,letterSpacing:11}),Object(s.a)(a,e.breakpoints.up("sm"),{fontSize:40,letterSpacing:15}),a),icon:(o={},Object(s.a)(o,e.breakpoints.only("xs"),{fontSize:20}),Object(s.a)(o,e.breakpoints.up("sm"),{fontSize:26}),Object(s.a)(o,"transform","rotate(-200deg)"),Object(s.a)(o,"color","#fff"),o)}})),xe=function(){var e=ge(),t=Object(i.c)(),n=Object(i.d)((function(e){return e.theme}));return Object(S.jsx)(de.a,{className:e.header,position:"static",elevation:0,children:Object(S.jsx)(be.a,{maxWidth:"sm",children:Object(S.jsxs)(ae.a,{className:e.container,container:!0,alignItems:"baseline",justifyContent:"space-between",children:[Object(S.jsx)($.a,{className:e.title,variant:"h2",component:"h1",children:"Todo"}),Object(S.jsx)(W.a,{onClick:function(){t(me())},"aria-label":"theme",children:"light"===n?Object(S.jsx)(je.a,{className:e.icon}):Object(S.jsx)(Oe.a,{className:e.icon})})]})})})},ke=n(77),ye=n(147),ve=n(148),Ce=Object(T.a)((function(e){var t;return{root:(t={},Object(s.a)(t,e.breakpoints.only("xs"),{height:48,"& .MuiTypography-body1":{fontSize:14}}),Object(s.a)(t,"backgroundColor",e.palette.background.paper),Object(s.a)(t,"justifyContent","center"),Object(s.a)(t,"alignItems","center"),Object(s.a)(t,"display","flex"),Object(s.a)(t,"borderRadius",4),t)}})),Te=function(){var e=Ce();return Object(S.jsx)(_.a,{smUp:!0,children:Object(S.jsx)(ae.a,{className:e.root,children:Object(S.jsx)(re,{})})})},Se=Object(T.a)((function(e){return{root:{marginTop:40,color:e.palette.text.secondary,fontSize:14}}})),Ne=function(){var e=Se();return Object(S.jsx)($.a,{align:"center",className:e.root,children:"Drag and drop to reorder list"})},Ie=Object(T.a)((function(e){var t;return{container:(t={},Object(s.a)(t,e.breakpoints.only("xs"),{marginTop:-116}),Object(s.a)(t,e.breakpoints.up("sm"),{marginTop:-165}),Object(s.a)(t,"padding",24),t)}})),we=function(){var e=Ie(),t=Object(ke.a)(Object(i.d)(Y));return Object(S.jsxs)(ye.a,{theme:t,children:[Object(S.jsx)(ve.a,{}),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(xe,{}),Object(S.jsxs)(be.a,{maxWidth:"sm",className:e.container,children:[Object(S.jsx)(I,{}),Object(S.jsx)(le,{}),Object(S.jsx)(Te,{}),Object(S.jsx)(Ne,{})]})]})]})},Me=Object(u.a)({reducer:{todos:x,visibilityFilter:ne,theme:fe}});c.a.render(Object(S.jsx)(o.a.StrictMode,{children:Object(S.jsx)(i.a,{store:Me,children:Object(S.jsx)(we,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.76aa014f.chunk.js.map