(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),o=n(6),i=n(8),r=n(1),l=n(4),a=n.n(l),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="length",d="name";var j=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(!1),l=Object(o.a)(c,2),j=l[0],g=l[1],p=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(i.a)(t);return!n&&s?c.reverse():(n&&c.sort((function(t,e){switch(n){case d:return s?e.localeCompare(t):t.localeCompare(e);case h:return e.length!==t.length?s?e.length-t.length:t.length-e.length:s?e.localeCompare(t):t.localeCompare(e);default:return 0}})),c)}(b,{sortField:n,isReversed:j}),m=function(t){return function(){s(t)}};return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:a()("button is-info",{"is-light":n!==d}),onClick:m(d),children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:a()("button is-success",{"is-light":n!==h}),onClick:m(h),children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:a()("button is-warning",{"is-light":!j}),onClick:function(){g(!j)},children:"Reverse"}),(n||j)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),g(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.aa311b4c.chunk.js.map