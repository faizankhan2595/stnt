(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[36],{275:function(e,t,c){"use strict";var a=c(5),n=c(4),r=c(28),i=c(0),s=c(6),o=c.n(s),l=c(479),u=c(76),d=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c};var f=["xs","sm","md","lg","xl","xxl"],b=i.forwardRef((function(e,t){var c,s=i.useContext(u.b),b=s.getPrefixCls,p=s.direction,j=i.useContext(l.a),m=j.gutter,O=j.wrap,v=j.supportFlexGap,y=e.prefixCls,x=e.span,h=e.order,g=e.offset,w=e.push,N=e.pull,E=e.className,C=e.children,P=e.flex,A=e.style,R=d(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),S=b("col",y),G={};f.forEach((function(t){var c,i={},s=e[t];"number"===typeof s?i.span=s:"object"===Object(r.a)(s)&&(i=s||{}),delete R[t],G=Object(n.a)(Object(n.a)({},G),(c={},Object(a.a)(c,"".concat(S,"-").concat(t,"-").concat(i.span),void 0!==i.span),Object(a.a)(c,"".concat(S,"-").concat(t,"-order-").concat(i.order),i.order||0===i.order),Object(a.a)(c,"".concat(S,"-").concat(t,"-offset-").concat(i.offset),i.offset||0===i.offset),Object(a.a)(c,"".concat(S,"-").concat(t,"-push-").concat(i.push),i.push||0===i.push),Object(a.a)(c,"".concat(S,"-").concat(t,"-pull-").concat(i.pull),i.pull||0===i.pull),Object(a.a)(c,"".concat(S,"-rtl"),"rtl"===p),c))}));var I=o()(S,(c={},Object(a.a)(c,"".concat(S,"-").concat(x),void 0!==x),Object(a.a)(c,"".concat(S,"-order-").concat(h),h),Object(a.a)(c,"".concat(S,"-offset-").concat(g),g),Object(a.a)(c,"".concat(S,"-push-").concat(w),w),Object(a.a)(c,"".concat(S,"-pull-").concat(N),N),c),E,G),k={};if(m&&m[0]>0){var D=m[0]/2;k.paddingLeft=D,k.paddingRight=D}if(m&&m[1]>0&&!v){var F=m[1]/2;k.paddingTop=F,k.paddingBottom=F}return P&&(k.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(P),!1!==O||k.minWidth||(k.minWidth=0)),i.createElement("div",Object(n.a)({},R,{style:Object(n.a)(Object(n.a)({},k),A),className:I,ref:t}),C)}));b.displayName="Col",t.a=b},276:function(e,t,c){"use strict";var a=c(4),n=c(5),r=c(28),i=c(7),s=c(0),o=c(6),l=c.n(o),u=c(76),d=c(479),f=c(53),b=c(122),p=c(481),j=function(e,t){var c={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(c[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(c[a[n]]=e[a[n]])}return c},m=(Object(f.a)("top","middle","bottom","stretch"),Object(f.a)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var c,o=e.prefixCls,f=e.justify,m=e.align,O=e.className,v=e.style,y=e.children,x=e.gutter,h=void 0===x?0:x,g=e.wrap,w=j(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),N=s.useContext(u.b),E=N.getPrefixCls,C=N.direction,P=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),A=Object(i.a)(P,2),R=A[0],S=A[1],G=function(){var e=s.useState(!1),t=Object(i.a)(e,2),c=t[0],a=t[1];return s.useEffect((function(){a(Object(p.b)())}),[]),c}(),I=s.useRef(h);s.useEffect((function(){var e=b.a.subscribe((function(e){var t=I.current||0;(!Array.isArray(t)&&"object"===Object(r.a)(t)||Array.isArray(t)&&("object"===Object(r.a)(t[0])||"object"===Object(r.a)(t[1])))&&S(e)}));return function(){return b.a.unsubscribe(e)}}),[]);var k=E("row",o),D=function(){var e=[0,0];return(Array.isArray(h)?h:[h,0]).forEach((function(t,c){if("object"===Object(r.a)(t))for(var a=0;a<b.b.length;a++){var n=b.b[a];if(R[n]&&void 0!==t[n]){e[c]=t[n];break}}else e[c]=t||0})),e}(),F=l()(k,(c={},Object(n.a)(c,"".concat(k,"-no-wrap"),!1===g),Object(n.a)(c,"".concat(k,"-").concat(f),f),Object(n.a)(c,"".concat(k,"-").concat(m),m),Object(n.a)(c,"".concat(k,"-rtl"),"rtl"===C),c),O),L={},B=D[0]>0?D[0]/-2:void 0,J=D[1]>0?D[1]/-2:void 0;if(B&&(L.marginLeft=B,L.marginRight=B),G){var T=Object(i.a)(D,2);L.rowGap=T[1]}else J&&(L.marginTop=J,L.marginBottom=J);var U=s.useMemo((function(){return{gutter:D,wrap:g,supportFlexGap:G}}),[D,g,G]);return s.createElement(d.a.Provider,{value:U},s.createElement("div",Object(a.a)({},w,{className:F,style:Object(a.a)(Object(a.a)({},L),v),ref:t}),y))})));m.displayName="Row";t.a=m},472:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var a=c(69),n=function(e){if(Object(a.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],c=window.document.documentElement;return t.some((function(e){return e in c.style}))}return!1};function r(e,t){return Array.isArray(e)||void 0===t?n(e):function(e,t){if(!n(e))return!1;var c=document.createElement("div"),a=c.style[e];return c.style[e]=t,c.style[e]!==a}(e,t)}},479:function(e,t,c){"use strict";var a=c(0),n=Object(a.createContext)({});t.a=n},481:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return i}));var a,n=c(69),r=(c(472),function(){return Object(n.a)()&&window.document.documentElement}),i=function(){if(!r())return!1;if(void 0!==a)return a;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),a=1===e.scrollHeight,document.body.removeChild(e),a}},484:function(e,t,c){"use strict";var a=c(276);t.a=a.a},485:function(e,t,c){"use strict";var a=c(275);t.a=a.a},653:function(e,t,c){},691:function(e,t,c){"use strict";c.r(t);c(0),c(653);var a=c(484),n=c(485),r=c(1);t.default=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"banner-container",children:Object(r.jsx)("img",{src:"/img/banner-img.png",alt:"banner",style:{width:"100%",height:"auto"}})}),Object(r.jsxs)(a.a,{children:[Object(r.jsx)(n.a,{span:8}),Object(r.jsx)(n.a,{span:8}),Object(r.jsx)(n.a,{span:8})]}),Object(r.jsxs)("div",{className:"verify-details-container",children:[Object(r.jsx)("div",{className:"verify-details-heading",children:"Verify your details"}),Object(r.jsx)("div",{className:"verify-details-sub-text",children:"For verification, please enter following details"}),Object(r.jsxs)("div",{className:"label-field-container",children:[Object(r.jsx)("div",{className:"label",children:"Last Name"}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("input",{type:"text",className:"input-field-main",placeholder:"Enter last name"})})]}),Object(r.jsxs)("div",{className:"label-field-container",children:[Object(r.jsx)("div",{className:"label",children:"Passport Number"}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("input",{type:"text",className:"input-field-main",placeholder:"Passport number"})})]}),Object(r.jsxs)("div",{className:"label-field-container",children:[Object(r.jsx)("div",{className:"label",children:"UID"}),Object(r.jsx)("div",{className:"input-field",children:Object(r.jsx)("input",{type:"text",className:"input-field-main",placeholder:"UID"})})]}),Object(r.jsx)("div",{className:"btn-container",children:Object(r.jsx)("button",{className:"web-btn",children:"Verify"})})]})]})}}}]);
//# sourceMappingURL=36.75ca4600.chunk.js.map