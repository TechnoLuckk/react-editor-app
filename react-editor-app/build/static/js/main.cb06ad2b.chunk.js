(this["webpackJsonpreact-editor-app"]=this["webpackJsonpreact-editor-app"]||[]).push([[0],{4:function(e,n,t){},40:function(e){e.exports=JSON.parse('[{"content":"<p>hello html</p>"},{"content":"<p>hello css</p>"},{"content":"<p>hello javascript</p>"}]')},41:function(e,n,t){"use strict";t.r(n);var c,i,s=t(0),r=t.n(s),o=t(14),a=t.n(o),l=t(2),j=t(7),u=(t(4),t(1)),d=function(){return Object(u.jsx)("div",{className:"nav",children:"Online Code Editor"})},b=function(e){var n=Object(s.useState)(1),t=Object(l.a)(n,2),c=(t[0],t[1]),i=function(n){console.log(n),e.changeCurrentFile(n),c(n)};return Object(u.jsx)("div",{className:"file-pane",children:Object(u.jsxs)("ul",{className:"file-list",children:[Object(u.jsx)("li",{className:"list-item",onClick:function(){i(0)},children:"index.html"}),Object(u.jsx)("li",{className:"list-item",onClick:function(){i(1)},children:"index.css"}),Object(u.jsx)("li",{className:"list-item",onClick:function(){i(2)},children:"index.js"})]})})},x=function(e){var n=0===e.current?"index.html":1===e.current?"index.css":"index.js",t=Object(s.useState)([{content:"1@"},{content:"2@"},{content:"3@"}]),c=Object(l.a)(t,2),i=c[0];c[1];return Object(u.jsxs)("div",{className:"editor-main",children:[Object(u.jsxs)("div",{children:["Editing ",n," ",">"," "]}),Object(u.jsx)("textarea",{rows:"15",cols:"142",onChange:function(t){console.log(typeof t),(0===e.current||1===e.current||2===e.current)&&(console.log(i[e.current].content),i[e.current].content=t.target.value),console.log("At ",n," ",i)}}),Object(u.jsx)("button",{onClick:function(){var n=i[0].content+i[1].content+i[2].content;e.handleChange(n)},children:"Save"})]})},O=t(8),h=t(15),p=function(e){var n=e.toDisplay;return Object(u.jsx)("div",{className:"live-view",children:Object(h.a)(n)})},f=O.a.div(c||(c=Object(j.a)(["\n  display : flex;\n  flex-direction : row;\n  justify-content : space-between;\n  margin-top : 10px;\n"]))),m=O.a.div(i||(i=Object(j.a)(["\n  display : flex;\n  flex-direction : column;\n  justify-content : space-between;\n  margin-top : 5px;\n  min-height: 100%;\n"])));var g=function(){var e=Object(s.useState)(""),n=Object(l.a)(e,2),c=n[0],i=n[1],o=Object(s.useState)(0),a=Object(l.a)(o,2),j=a[0],O=a[1],h=t(40);return Object(u.jsxs)(r.a.Fragment,{children:[Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)(d,{})}),Object(u.jsx)(r.a.Fragment,{children:Object(u.jsxs)(m,{children:[Object(u.jsxs)(f,{children:[Object(u.jsx)(b,{current:j,changeCurrentFile:function(e){O(e),console.log("Editing ",j)}}),Object(u.jsx)(x,{current:j,handleChange:function(e){return function(e){i(e),h[j].content=e}(e)},content:h[j].content})]}),Object(u.jsx)(p,{toDisplay:c})]})})]})};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.cb06ad2b.chunk.js.map