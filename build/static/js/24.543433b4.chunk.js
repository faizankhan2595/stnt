(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[24],{132:function(e,t,r){"use strict";r.r(t);t.default=function(e,t){}},461:function(e,t,r){"use strict";var n=r(0),a=r.n(n),c=r(477),o=r(1),u=a.a.forwardRef((function(e,t){return Object(o.jsx)(c.a,{component:e.svg,className:e.className})}));t.a=u},463:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},464:function(e,t){},467:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(78),a=r(703),c=r(0),o=(r(468),r(1));var u=function(e){return(null===e||void 0===e?void 0:e.charAt(0).toUpperCase())+(null===e||void 0===e?void 0:e.slice(1))};t.b=function(e){var t=e.checkbox,r=e.attribiue,u=e.clients,i=(e.showFrontentPagination,Object(c.useState)([])),s=Object(n.a)(i,2),l=s[0],d=s[1];return Object(o.jsx)("div",{children:Object(o.jsx)(a.a,{rowKey:"id",rowSelection:t&&{selectedRowKeys:l,onChange:function(e,t){d(e)}},columns:r,dataSource:u})})}},468:function(e,t,r){},469:function(e,t,r){"use strict";r(0);var n=r(435),a=r(198),c=r(156),o=r(1),u=function(e){return Object(o.jsx)(n.a,{overlay:e.menu,placement:e.placement,trigger:["click"],children:Object(o.jsx)("div",{className:"ellipsis-dropdown",children:Object(o.jsx)(c.a,{})})})};u.defaultProps={trigger:"click",placement:"bottomRight",menu:Object(o.jsx)(a.a,{})},t.a=u},472:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"g",(function(){return f})),r.d(t,"c",(function(){return m})),r.d(t,"H",(function(){return h})),r.d(t,"C",(function(){return v})),r.d(t,"w",(function(){return b})),r.d(t,"y",(function(){return g})),r.d(t,"x",(function(){return x})),r.d(t,"E",(function(){return j})),r.d(t,"F",(function(){return y})),r.d(t,"A",(function(){return w})),r.d(t,"B",(function(){return O})),r.d(t,"z",(function(){return k})),r.d(t,"j",(function(){return B})),r.d(t,"s",(function(){return S})),r.d(t,"k",(function(){return I})),r.d(t,"i",(function(){return N})),r.d(t,"G",(function(){return A})),r.d(t,"v",(function(){return z})),r.d(t,"D",(function(){return q})),r.d(t,"r",(function(){return L})),r.d(t,"m",(function(){return P})),r.d(t,"q",(function(){return R})),r.d(t,"l",(function(){return _})),r.d(t,"n",(function(){return C})),r.d(t,"p",(function(){return D})),r.d(t,"o",(function(){return M})),r.d(t,"t",(function(){return E})),r.d(t,"u",(function(){return T}));r(15);var n=r(27),a=r.n(n),c=r(94),o=r(462),u="https://api.stntinternational.com",i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c,i,s,l,d,p,f;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,c=t.travelAgentId,i=t.manifestType,s=t.masterPolicyNumber,l=t.insurancePolicyPackage,console.log("file",n),d=r(463),r(464),(p=new d).append("file",n),p.append("travelAgentId",c),p.append("manifestType",i),p.append("masterPolicyNumber",s),p.append("insurancePolicyPackage",l),f={method:"post",maxBodyLength:1/0,url:u+"/api/manifests",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:p},e.next=13,o.request(f);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.size,n=t.page,c=t.search,i={confirmPassword:"123456",password:"123456",userId:"6"},s={method:"get",maxBodyLength:1/0,url:u+"/api/travel-agencies?size=".concat(r,"&page=").concat(n,"&searchByAgencyName=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:i},e.next=5,o.request(s);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:u+"/api/travel-agencies",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}',n={method:"get",maxBodyLength:1/0,url:u+"/api/travel-agencies/"+r,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}'},e.next=5,o.request(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n={method:"put",url:u+"/api/travel-agencies/change-status",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,o.request(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:u+"/api/travel-agencies",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.size,n=t.page,c=t.search,'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}',i={method:"get",maxBodyLength:1/0,url:u+"/api/travel-agencies?size=".concat(r,"&page=").concat(n,"&searchByAgencyName=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}'},e.next=5,o.request(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.passportNo,c=t.uidNo,i={method:"get",maxBodyLength:1/0,url:u+"/api/website/verification?name=".concat(r,"&passportNo=").concat(n,"&uidNo=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=4,o.request(i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u+"/api/website/countries",o.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),e.next=4,o.get(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-request/user",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,"",n={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-categories/documents/"+r,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=5,o.request(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:u+"/api/claim-category?size=100",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n={method:"post",maxBodyLength:1/0,url:u+"/api/website/claim-request/payment",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,o.request(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n=t.id,c={method:"put",maxBodyLength:1/0,url:u+"/api/website/claim-request/update/payment/"+n,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,o.request(c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"",t={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-request/user/meta",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=5,o.request(t);case 5:return r=e.sent,console.log("res1",r),e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),e.t0&&(localStorage.removeItem("token"),window.location.pathname="/"),console.error(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",r={method:"get",maxBodyLength:1/0,url:u+"/api/website/claim-request/review/"+t,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,o.request(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:u+"/api/claim?size=".concat(t,"&page=").concat(r),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.title,n=t.description,c={title:r,description:n,associateClaimType:"silver"},i={method:"post",maxBodyLength:1/0,url:u+"/api/claim-category",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:c},e.next=5,o.request(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{id:t,title:"Hello",description:"This is fastly new Test claim document for the data",isMandatory:!1},r={method:"delete",url:u+"/api/claim-documents/".concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=4,o.request(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:u+"/api/users",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:u+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:u+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",maxBodyLength:1/0,url:u+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/travellers/".concat(t,"?size=2&page=1"),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/claim/travel-details/".concat(r,"/").concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),P=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:u+"/api/claim/claim-details/".concat(r,"/").concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:u+"/api/claim/claim-timeline/".concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"post",maxBodyLength:1/0,url:u+"/api/claim/remarks",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:{userId:t,remarks:r,claimReqId:n}},e.next=3,o.request(c);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"get",maxBodyLength:1/0,url:u+"/api/claim/remarks/".concat(r,"/").concat(t),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,o.request(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={method:"put",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/claim",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:{id:t,status:r,comment:n}},e.next=3,o.request(c);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(a.a.mark((function e(t,r,n,c,i){var s,l,d;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for((s=new FormData).append("userId",t),s.append("claimReqId",r),s.append("settledAmount",c),s.append("approvedCategoryNumber",i),l=0;l<n.length;l++)s.append("file",n[l]);return d={method:"post",maxBodyLength:1/0,url:u+"/api/claim/claim-settlements",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:s},e.next=9,o.request(d);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t,r,n,a,c){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/website//claim-request/delete-doc",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/claim/claim-summary/"+t.claimRequestID,headers:{Authorization:"Bearer "+localStorage.getItem("token"),"Response-Type":"blob"},responseType:"blob"},e.next=3,o.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},477:function(e,t,r){"use strict";var n=r(4),a=r(5),c=r(13),o=r(0),u=r(6),i=r.n(u),s=r(106),l=r(67),d=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],p=o.forwardRef((function(e,t){var r=e.className,u=e.component,p=e.viewBox,f=e.spin,m=e.rotate,h=e.tabIndex,v=e.onClick,b=e.children,g=Object(c.a)(e,d);Object(l.g)(Boolean(u||b),"Should have `component` prop or `children`."),Object(l.f)();var x=o.useContext(s.a).prefixCls,j=void 0===x?"anticon":x,y=i()(j,r),w=i()(Object(a.a)({},"".concat(j,"-spin"),!!f)),O=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,k=Object(n.a)(Object(n.a)({},l.e),{},{className:w,style:O,viewBox:p});p||delete k.viewBox;var B=h;return void 0===B&&v&&(B=-1),o.createElement("span",Object(n.a)(Object(n.a)({role:"img"},g),{},{ref:t,tabIndex:B,onClick:v,className:y}),u?o.createElement(u,Object(n.a)({},k),b):b?(Object(l.g)(Boolean(p)||1===o.Children.count(b)&&o.isValidElement(b)&&"use"===o.Children.only(b).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),o.createElement("svg",Object(n.a)(Object(n.a)({},k),{},{viewBox:p}),b)):null)}));p.displayName="AntdIcon",t.a=p},481:function(e,t,r){"use strict";var n=r(4),a=r(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=r(14),u=function(e,t){return a.createElement(o.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,icon:c}))};u.displayName="DeleteOutlined";t.a=a.forwardRef(u)},535:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var a=r(45),c=n(r(0)),o=r(158);r(9),r(132);var u=n(r(54));function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}function l(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],0<=t.indexOf(r)||(a[r]=e[r]);return a}var d=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createBrowserHistory(t.props),t}return s(t,e),t.prototype.render=function(){return c.createElement(a.Router,{history:this.history,children:this.props.children})},t}(c.Component),p=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).history=o.createHashHistory(t.props),t}return s(t,e),t.prototype.render=function(){return c.createElement(a.Router,{history:this.history,children:this.props.children})},t}(c.Component),f=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?o.createLocation(e,null,null,t):e},h=function(e){return e},v=c.forwardRef;void 0===v&&(v=h);var b=v((function(e,t){var r=e.innerRef,n=e.navigate,a=e.onClick,o=l(e,["innerRef","navigate","onClick"]),u=o.target,s=i({},o,{onClick:function(t){try{a&&a(t)}catch(e){throw t.preventDefault(),e}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t)||(t.preventDefault(),n())}});return s.ref=h!==v&&t||r,c.createElement("a",s)})),g=v((function(e,t){var r=e.component,n=void 0===r?b:r,o=e.replace,s=e.to,d=e.innerRef,p=l(e,["component","replace","to","innerRef"]);return c.createElement(a.__RouterContext.Consumer,null,(function(e){e||u(!1);var r=e.history,a=m(f(s,e.location),e.location),l=a?r.createHref(a):"",b=i({},p,{href:l,navigate:function(){var t=f(s,e.location);(o?r.replace:r.push)(t)}});return h!==v?b.ref=t||d:b.innerRef=d,c.createElement(n,b)}))})),x=function(e){return e},j=c.forwardRef;void 0===j&&(j=x);var y=j((function(e,t){var r=e["aria-current"],n=void 0===r?"page":r,o=e.activeClassName,s=void 0===o?"active":o,d=e.activeStyle,p=e.className,h=e.exact,v=e.isActive,b=e.location,y=e.sensitive,w=e.strict,O=e.style,k=e.to,B=e.innerRef,S=l(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(a.__RouterContext.Consumer,null,(function(e){e||u(!1);var r=b||e.location,o=m(f(k,r),r),l=o.pathname,I=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),N=I?a.matchPath(r.pathname,{path:I,exact:h,sensitive:y,strict:w}):null,A=!!(v?v(N,r):N),z=A?function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((function(e){return e})).join(" ")}(p,s):p,q=A?i({},O,{},d):O,L=i({"aria-current":A&&n||null,className:z,style:q,to:o},S);return x!==j?L.ref=t||B:L.innerRef=B,c.createElement(g,L)}))}));Object.defineProperty(t,"MemoryRouter",{enumerable:!0,get:function(){return a.MemoryRouter}}),Object.defineProperty(t,"Prompt",{enumerable:!0,get:function(){return a.Prompt}}),Object.defineProperty(t,"Redirect",{enumerable:!0,get:function(){return a.Redirect}}),Object.defineProperty(t,"Route",{enumerable:!0,get:function(){return a.Route}}),Object.defineProperty(t,"Router",{enumerable:!0,get:function(){return a.Router}}),Object.defineProperty(t,"StaticRouter",{enumerable:!0,get:function(){return a.StaticRouter}}),Object.defineProperty(t,"Switch",{enumerable:!0,get:function(){return a.Switch}}),Object.defineProperty(t,"generatePath",{enumerable:!0,get:function(){return a.generatePath}}),Object.defineProperty(t,"matchPath",{enumerable:!0,get:function(){return a.matchPath}}),Object.defineProperty(t,"useHistory",{enumerable:!0,get:function(){return a.useHistory}}),Object.defineProperty(t,"useLocation",{enumerable:!0,get:function(){return a.useLocation}}),Object.defineProperty(t,"useParams",{enumerable:!0,get:function(){return a.useParams}}),Object.defineProperty(t,"useRouteMatch",{enumerable:!0,get:function(){return a.useRouteMatch}}),Object.defineProperty(t,"withRouter",{enumerable:!0,get:function(){return a.withRouter}}),t.BrowserRouter=d,t.HashRouter=p,t.Link=g,t.NavLink=y},674:function(e,t,r){"use strict";r.r(t);var n=r(27),a=r.n(n),c=r(94),o=r(15),u=r(78),i=r(0),s=r(437),l=r(501),d=r(109),p=r(460),f=r(469),m=r(198),h=r(43),v=r(467),b=r(461),g=r(481),x=r(705),j=r(530),y=r(535),w=r(462),O=r.n(w),k=r(472),B=r(1),S=[{Sr_No:1,Document_Type:"Passport",Mandatory:!0,Last_Updated_On:"2022-05-10",Status:"Active"},{Sr_No:2,Document_Type:"Driver's License",Mandatory:!1,Last_Updated_On:"2022-05-09",Status:"Inactive"},{Sr_No:3,Document_Type:"ID Card",Mandatory:!0,Last_Updated_On:"2022-05-08",Status:"Active"}];t.default=function(){var e=Object(i.useState)(S),t=Object(u.a)(e,2),r=t[0],n=t[1],w=Object(i.useState)(""),I=Object(u.a)(w,2),N=I[0],A=I[1],z=Object(y.useParams)().id,q=Object(i.useState)(null),L=Object(u.a)(q,2),P=L[0],R=L[1],_=Object(i.useState)(!1),C=Object(u.a)(_,2),D=C[0],M=C[1],E=Object(i.useState)(1),T=Object(u.a)(E,2),H=T[0],U=T[1],F=s.a.Search,K=[{title:"Sr No",dataIndex:"Sr_No"},{title:"Document Type",dataIndex:"Document_Type"},{title:"Mandatory",dataIndex:"Mandatory",render:function(e){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(l.a,{checked:e})})}},{title:"Last Updated On",dataIndex:"Last_Updated_On"},{title:"Status",dataIndex:"Status",render:function(e){return Object(B.jsx)("p",{className:"".concat("active"!==e?"text-danger":"text-success"," font-weight-semibold"),children:e})}},{title:"Action",render:function(e){return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(f.a,{menu:Object(B.jsxs)(m.a,{children:[Object(B.jsx)(m.a.Item,{children:Object(B.jsxs)(h.b,{to:"event_list/update/".concat(e.id),className:"d-flex align-items-center",children:[Object(B.jsx)(b.a,{className:"mr-2",svg:p.n}),"Edit"]})}),Object(B.jsx)(m.a.Item,{children:Object(B.jsxs)(h.b,{onClick:function(){R(e.Sr_No),M(!0),U("Active"===e.Status?1:2)},className:"d-flex align-items-center",children:[Object(B.jsx)("span",{className:"mr-2",children:Object(B.jsx)(p.B,{})}),"Update Status"]})}),Object(B.jsx)(m.a.Item,{children:Object(B.jsxs)("span",{onClick:function(){return console.log("del")},children:[" ",Object(B.jsx)(g.a,{className:"mr-2 "}),"Delete"]})})]})})})}}],J=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(k.b,"/api/claim-category/").concat(t),{headers:{Authorization:"Bearer "+localStorage.getItem("token")}});case 2:r=e.sent,A(r.data.claimCategory.title),c=r.data.claimDocuments.map((function(e,t){return{id:e.id,claimCategoryId:e.claimCategoryId,Sr_No:t+1,Document_Type:e.title,Mandatory:e.isMandatory,Last_Updated_On:e.updatedAt,Status:e.status}})),n(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){z&&J(z)}),[]),Object(B.jsxs)("div",{children:[Object(B.jsxs)("div",{className:"p-3 bg-white",children:[Object(B.jsxs)("p",{children:["Claim Document Management / ",Object(B.jsx)("span",{style:{color:"black"},children:"View Documents"})," "]}),Object(B.jsxs)("div",{className:"d-flex",children:[Object(B.jsx)("div",{className:"claimDocManSvg",children:Object(B.jsx)(p.d,{})}),Object(B.jsxs)("div",{className:"ml-2",children:[Object(B.jsx)("h5",{className:"m-0 mt-2",children:N||"Medical & Other Expenses"}),Object(B.jsx)("p",{children:"View & add different types of document  for claim category to be uploaded by travelers."})]})]})]}),Object(B.jsxs)("div",{className:"d-flex justify-content-between my-3",children:[Object(B.jsx)(F,{placeholder:"Search",onSearch:function(e){return console.log(e)},style:{width:200}}),Object(B.jsxs)(d.a,{className:"bg-info text-white",children:[" ",Object(B.jsx)(h.b,{className:"text-white",to:"/app/claim_document_manager/view_document/add_new_document",children:"New Document Category"})]})]}),Object(B.jsx)(v.b,{clients:r,attribiue:K}),Object(B.jsxs)(x.a,{width:600,footer:null,visible:D,onOk:function(){M(!1)},onCancel:function(){return M(!1)},children:[Object(B.jsxs)("div",{className:"d-flex my-3 flex-column w-75",children:[Object(B.jsxs)("h3",{className:"mb-4 d-flex align-items-center",children:[" ",Object(B.jsx)(p.b,{}),Object(B.jsx)("span",{className:"ml-2",children:"Change Document Type Status"})]}),Object(B.jsxs)(j.a.Group,{className:"ml-5",onChange:function(e){console.log("radio checked",e.target.value),U(e.target.value)},value:H,children:[Object(B.jsx)(j.a,{value:1,children:"Active"}),Object(B.jsx)(j.a,{className:"ml-3",value:2,children:"In Active"})]})]}),Object(B.jsxs)("div",{style:{gap:"10px"},className:"mt-5 d-flex justify-content-end",children:[Object(B.jsx)(d.a,{className:"px-4 font-weight-semibold",onClick:function(){return M(!1)},children:"Cancel"}),Object(B.jsx)(d.a,{className:"px-4 font-weight-semibold text-white bg-info",onClick:function(){!function(){var e=r.map((function(e,t){return e.Sr_No===P?1===H?Object(o.a)(Object(o.a)({},e),{},{Status:"Active"}):Object(o.a)(Object(o.a)({},e),{},{Status:"Inactive"}):e}));n(e),console.log(e)}(),M(!1)},children:"Save"})]})]})]})}}}]);
//# sourceMappingURL=24.543433b4.chunk.js.map