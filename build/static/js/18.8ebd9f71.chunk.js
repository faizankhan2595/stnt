(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[18],{275:function(e,t,r){"use strict";var n=r(5),a=r(4),c=r(28),o=r(0),u=r(6),s=r.n(u),i=r(479),l=r(76),p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};var d=["xs","sm","md","lg","xl","xxl"],f=o.forwardRef((function(e,t){var r,u=o.useContext(l.b),f=u.getPrefixCls,m=u.direction,h=o.useContext(i.a),b=h.gutter,g=h.wrap,v=h.supportFlexGap,x=e.prefixCls,j=e.span,y=e.order,w=e.offset,O=e.push,k=e.pull,B=e.className,I=e.children,N=e.flex,A=e.style,S=p(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),q=f("col",x),z={};d.forEach((function(t){var r,o={},u=e[t];"number"===typeof u?o.span=u:"object"===Object(c.a)(u)&&(o=u||{}),delete S[t],z=Object(a.a)(Object(a.a)({},z),(r={},Object(n.a)(r,"".concat(q,"-").concat(t,"-").concat(o.span),void 0!==o.span),Object(n.a)(r,"".concat(q,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),Object(n.a)(r,"".concat(q,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),Object(n.a)(r,"".concat(q,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),Object(n.a)(r,"".concat(q,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),Object(n.a)(r,"".concat(q,"-rtl"),"rtl"===m),r))}));var L=s()(q,(r={},Object(n.a)(r,"".concat(q,"-").concat(j),void 0!==j),Object(n.a)(r,"".concat(q,"-order-").concat(y),y),Object(n.a)(r,"".concat(q,"-offset-").concat(w),w),Object(n.a)(r,"".concat(q,"-push-").concat(O),O),Object(n.a)(r,"".concat(q,"-pull-").concat(k),k),r),B,z),C={};if(b&&b[0]>0){var P=b[0]/2;C.paddingLeft=P,C.paddingRight=P}if(b&&b[1]>0&&!v){var E=b[1]/2;C.paddingTop=E,C.paddingBottom=E}return N&&(C.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(N),!1!==g||C.minWidth||(C.minWidth=0)),o.createElement("div",Object(a.a)({},S,{style:Object(a.a)(Object(a.a)({},C),A),className:L,ref:t}),I)}));f.displayName="Col",t.a=f},276:function(e,t,r){"use strict";var n=r(4),a=r(5),c=r(28),o=r(7),u=r(0),s=r(6),i=r.n(s),l=r(76),p=r(479),d=r(53),f=r(122),m=r(481),h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},b=(Object(d.a)("top","middle","bottom","stretch"),Object(d.a)("start","end","center","space-around","space-between"),u.forwardRef((function(e,t){var r,s=e.prefixCls,d=e.justify,b=e.align,g=e.className,v=e.style,x=e.children,j=e.gutter,y=void 0===j?0:j,w=e.wrap,O=h(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),k=u.useContext(l.b),B=k.getPrefixCls,I=k.direction,N=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),A=Object(o.a)(N,2),S=A[0],q=A[1],z=function(){var e=u.useState(!1),t=Object(o.a)(e,2),r=t[0],n=t[1];return u.useEffect((function(){n(Object(m.b)())}),[]),r}(),L=u.useRef(y);u.useEffect((function(){var e=f.a.subscribe((function(e){var t=L.current||0;(!Array.isArray(t)&&"object"===Object(c.a)(t)||Array.isArray(t)&&("object"===Object(c.a)(t[0])||"object"===Object(c.a)(t[1])))&&q(e)}));return function(){return f.a.unsubscribe(e)}}),[]);var C=B("row",s),P=function(){var e=[0,0];return(Array.isArray(y)?y:[y,0]).forEach((function(t,r){if("object"===Object(c.a)(t))for(var n=0;n<f.b.length;n++){var a=f.b[n];if(S[a]&&void 0!==t[a]){e[r]=t[a];break}}else e[r]=t||0})),e}(),E=i()(C,(r={},Object(a.a)(r,"".concat(C,"-no-wrap"),!1===w),Object(a.a)(r,"".concat(C,"-").concat(d),d),Object(a.a)(r,"".concat(C,"-").concat(b),b),Object(a.a)(r,"".concat(C,"-rtl"),"rtl"===I),r),g),D={},R=P[0]>0?P[0]/-2:void 0,F=P[1]>0?P[1]/-2:void 0;if(R&&(D.marginLeft=R,D.marginRight=R),z){var T=Object(o.a)(P,2);D.rowGap=T[1]}else F&&(D.marginTop=F,D.marginBottom=F);var G=u.useMemo((function(){return{gutter:P,wrap:w,supportFlexGap:z}}),[P,w,z]);return u.createElement(p.a.Provider,{value:G},u.createElement("div",Object(n.a)({},O,{className:E,style:Object(n.a)(Object(n.a)({},D),v),ref:t}),x))})));b.displayName="Row";t.a=b},464:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},466:function(e,t){},472:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(69),a=function(e){if(Object(n.a)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],r=window.document.documentElement;return t.some((function(e){return e in r.style}))}return!1};function c(e,t){return Array.isArray(e)||void 0===t?a(e):function(e,t){if(!a(e))return!1;var r=document.createElement("div"),n=r.style[e];return r.style[e]=t,r.style[e]!==n}(e,t)}},473:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"f",(function(){return s})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return p})),r.d(t,"h",(function(){return d})),r.d(t,"g",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"G",(function(){return h})),r.d(t,"B",(function(){return b})),r.d(t,"v",(function(){return g})),r.d(t,"x",(function(){return v})),r.d(t,"w",(function(){return x})),r.d(t,"D",(function(){return j})),r.d(t,"E",(function(){return y})),r.d(t,"z",(function(){return w})),r.d(t,"A",(function(){return O})),r.d(t,"y",(function(){return k})),r.d(t,"j",(function(){return B})),r.d(t,"k",(function(){return I})),r.d(t,"i",(function(){return N})),r.d(t,"F",(function(){return A})),r.d(t,"u",(function(){return S})),r.d(t,"C",(function(){return q})),r.d(t,"r",(function(){return z})),r.d(t,"m",(function(){return L})),r.d(t,"q",(function(){return C})),r.d(t,"l",(function(){return P})),r.d(t,"n",(function(){return E})),r.d(t,"p",(function(){return D})),r.d(t,"o",(function(){return R})),r.d(t,"s",(function(){return F})),r.d(t,"t",(function(){return T}));r(15);var n=r(27),a=r.n(n),c=r(94),o=r(463),u="https://api.stntinternational.com",s=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c,s,i,l,p,d,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,c=t.travelAgentId,s=t.manifestType,i=t.masterPolicyNumber,l=t.insurancePolicyPackage,console.log("file",n),p=r(464),r(466),(d=new p).append("file",n),d.append("travelAgentId",c),d.append("manifestType",s),d.append("masterPolicyNumber",i),d.append("insurancePolicyPackage",l),f={method:"post",maxBodyLength:1/0,url:u+"/api/manifests",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:d},e.next=13,o.request(f);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.size,n=t.page,c=t.search,s={confirmPassword:"123456",password:"123456",userId:"6"},i={method:"get",maxBodyLength:1/0,url:u+"/api/travel-agencies?size=".concat(r,"&page=").concat(n,"&searchByAgencyName=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:s},e.next=5,o.request(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:u+"/api/travel-agencies",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}',n={method:"get",maxBodyLength:1/0,url:u+"/api/travel-agencies/"+r,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}'},e.next=5,o.request(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n={method:"put",url:u+"/api/travel-agencies/change-status",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,o.request(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:u+"/api/travel-agencies",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.size,n=t.page,c=t.search,'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}',s={method:"get",maxBodyLength:1/0,url:u+"/api/travel-agencies?size=".concat(r,"&page=").concat(n,"&searchByAgencyName=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}'},e.next=5,o.request(s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.passportNo,c=t.uidNo,s={method:"get",maxBodyLength:1/0,url:u+"/api/website/verification?name=".concat(r,"&passportNo=").concat(n,"&uidNo=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=4,o.request(s);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u+"/api/website/countries",o.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),e.next=4,o.get(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-request/user",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,"",n={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-categories/documents/"+r,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=5,o.request(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-categories",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n={method:"post",maxBodyLength:1/0,url:u+"/api/website/claim-request/payment",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,o.request(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n=t.paymentId,c={method:"post",maxBodyLength:1/0,url:u+"/api/website/claim-request/update/payment/"+n,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,o.request(c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-request/user/meta",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",r={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-request/review/"+t,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:u+"/api/claim?size=".concat(t,"&page=").concat(r),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.title,n=t.description,c={title:r,description:n,associateClaimType:"silver"},s={method:"post",maxBodyLength:1/0,url:u+"/api/claim-category",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:c},e.next=5,o.request(s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:u+"/api/users",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:u+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:u+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",maxBodyLength:1/0,url:u+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/travellers/".concat(t,"?size=2&page=1"),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/claim/travel-details/".concat(r,"/").concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:u+"/api/claim/claim-details/".concat(r,"/").concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:u+"/api/claim/claim-timeline/".concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"post",maxBodyLength:1/0,url:u+"/api/claim/remarks",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:{userId:t,remarks:r,claimReqId:n}},e.next=3,o.request(c);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:u+"/api/claim/remarks/".concat(r,"/").concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"put",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/claim",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:{userId:t,status:r,comment:n}},e.next=3,o.request(c);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n,c,s){var i,l,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for((i=new FormData).append("userId",t),i.append("claimReqId",r),i.append("settledAmount",c),i.append("approvedCategoryNumber",s),l=0;l<n.length;l++)i.append("file",n[l]);return p={method:"post",maxBodyLength:1/0,url:u+"/api/claim/claim-settlements",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:i},e.next=9,o.request(p);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),F=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/website//claim-request/delete-doc",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/claim/claim-summary/"+t.claimRequestID,headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},479:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({});t.a=a},481:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return o}));var n,a=r(69),c=(r(472),function(){return Object(a.a)()&&window.document.documentElement}),o=function(){if(!c())return!1;if(void 0!==n)return n;var e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),n=1===e.scrollHeight,document.body.removeChild(e),n}},484:function(e,t,r){"use strict";var n=r(276);t.a=n.a},485:function(e,t,r){"use strict";var n=r(275);t.a=n.a},603:function(e,t,r){},656:function(e,t,r){},700:function(e,t,r){"use strict";r.r(t);var n=r(27),a=r.n(n),c=r(94),o=r(78),u=r(0),s=r.n(u),i=(r(656),r(603),r(273)),l=r(484),p=r(485),d=r(473),f=r(1);t.default=function(){var e=s.a.useState(""),t=Object(o.a)(e,2),r=t[0],n=t[1],u=s.a.useState(""),m=Object(o.a)(u,2),h=m[0],b=m[1],g=s.a.useState(""),v=Object(o.a)(g,2),x=v[0],j=v[1],y=function(e){var t=e.target,r=t.name,a=t.value;"lastName"===r?n(a):"passportNumber"===r?b(a):"uid"===r&&j(a)},w=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.G)({name:r,passportNo:h,uidNo:x}).then((function(e){i.b.success("Details verified successfully"),localStorage.setItem("token",e.data.token),setTimeout((function(){window.location.href="/web/web_claimSubmission"}),1e3)})).catch((function(e){i.b.error("Verification failed. User not exists")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"main-container",children:[Object(f.jsxs)("div",{className:"banner-container",children:[Object(f.jsx)("img",{src:"/img/banner-img.png",alt:"banner",style:{width:"100%",height:"auto",marginTop:"130px"}}),Object(f.jsx)("div",{className:"stnt-logo-container",children:Object(f.jsx)("img",{src:"/img/stnt-logo-white.svg",alt:"stnt",style:{width:"150px",height:"auto"}})})]}),Object(f.jsx)("div",{children:Object(f.jsx)("div",{className:"stnt-logo-container-mobile",children:Object(f.jsx)("img",{src:"/img/stnt-logo-white.svg",alt:"stnt",style:{width:"100px",height:"auto"}})})}),Object(f.jsxs)(l.a,{children:[Object(f.jsx)(p.a,{span:8}),Object(f.jsx)(p.a,{lg:{span:8},xs:{span:24},children:Object(f.jsxs)("div",{className:"verify-details-container",children:[Object(f.jsx)("div",{className:"verify-details-heading",children:"Verify your details"}),Object(f.jsx)("div",{className:"verify-details-sub-text",children:"For verification, please enter following details"}),Object(f.jsxs)("div",{className:"label-field-container",children:[Object(f.jsx)("div",{className:"label",children:"Last Name"}),Object(f.jsx)("div",{className:"input-field",children:Object(f.jsx)("input",{type:"text",className:"input-field-main",placeholder:"Enter last name",name:"lastName",value:r,onChange:y})})]}),Object(f.jsxs)("div",{className:"label-field-container",children:[Object(f.jsxs)("div",{className:"label",children:["Passport Number",Object(f.jsx)("span",{className:"mandatory-item",children:"*"})]}),Object(f.jsx)("div",{className:"input-field",children:Object(f.jsx)("input",{type:"text",className:"input-field-main",placeholder:"Enter Passport Number",name:"passportNumber",value:h,onChange:y})})]}),Object(f.jsxs)("div",{className:"label-field-container",children:[Object(f.jsxs)("div",{className:"label",children:["UID",Object(f.jsx)("span",{className:"mandatory-item",children:"*"})]}),Object(f.jsx)("div",{className:"input-field",children:Object(f.jsx)("input",{type:"text",className:"input-field-main",placeholder:"Enter UID",name:"uid",value:x,onChange:y})})]}),Object(f.jsx)("div",{className:"btn-container",children:Object(f.jsx)("button",{className:"web-btn",onClick:w,children:"Verify"})})]})}),Object(f.jsx)(p.a,{span:8})]}),Object(f.jsxs)("div",{className:"footer-container",children:[Object(f.jsx)("div",{children:"Distributed By:"}),Object(f.jsx)("div",{style:{margin:"0px 20px"},children:Object(f.jsx)("img",{src:"/img/stntlogo.svg",alt:"stnt",style:{width:"100%",height:"auto"}})}),Object(f.jsx)("div",{children:"Underwritten By:"}),Object(f.jsx)("div",{style:{margin:"0px 20px"},children:Object(f.jsx)("img",{src:"/img/uoilogo.png",alt:"stnt",style:{width:"100%",height:"auto"}})})]})]})}}}]);
//# sourceMappingURL=18.8ebd9f71.chunk.js.map