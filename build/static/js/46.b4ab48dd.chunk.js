(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[46],{470:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},472:function(e,t){},479:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"f",(function(){return i})),r.d(t,"d",(function(){return u})),r.d(t,"a",(function(){return l})),r.d(t,"e",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"g",(function(){return h})),r.d(t,"c",(function(){return f})),r.d(t,"v",(function(){return m})),r.d(t,"r",(function(){return b})),r.d(t,"l",(function(){return j})),r.d(t,"n",(function(){return g})),r.d(t,"m",(function(){return x})),r.d(t,"t",(function(){return v})),r.d(t,"p",(function(){return y})),r.d(t,"q",(function(){return O})),r.d(t,"o",(function(){return w})),r.d(t,"j",(function(){return k})),r.d(t,"i",(function(){return B})),r.d(t,"u",(function(){return N})),r.d(t,"k",(function(){return I})),r.d(t,"s",(function(){return z}));r(15);var n=r(27),a=r.n(n),c=r(94),s=r(471),o="https://api.stntinternational.com",i=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,c,i,u,l,d,p,h;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.file,c=t.travelAgentId,i=t.manifestType,u=t.masterPolicyNumber,l=t.insurancePolicyPackage,console.log("file",n),d=r(470),r(472),(p=new d).append("file",n),p.append("travelAgentId",c),p.append("manifestType",i),p.append("masterPolicyNumber",u),p.append("insurancePolicyPackage",l),h={method:"post",maxBodyLength:1/0,url:o+"/api/manifests",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:p},e.next=13,s.request(h);case 13:return e.abrupt("return",e.sent);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.size,n=t.page,c=t.search,i={confirmPassword:"123456",password:"123456",userId:"6"},u={method:"get",maxBodyLength:1/0,url:o+"/api/travel-agencies?size=".concat(r,"&page=").concat(n,"&searchByAgencyName=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:i},e.next=5,s.request(u);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:o+"/api/travel-agencies",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,s.request(r).then((function(e){console.log(JSON.stringify(e.data))})).catch((function(e){console.log(e)}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}',n={method:"get",maxBodyLength:1/0,url:o+"/api/travel-agencies/"+r,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}'},e.next=5,s.request(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t,n={method:"put",url:o+"/api/travel-agencies/change-status",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,s.request(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:o+"/api/travel-agencies",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,s.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.size,n=t.page,c=t.search,'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}',i={method:"get",maxBodyLength:1/0,url:o+"/api/travel-agencies?size=".concat(r,"&page=").concat(n,"&searchByAgencyName=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:'{\n    "confirmPassword":"123456",\n    "password":"123456",\n    "userId": "6"\n}'},e.next=5,s.request(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.name,n=t.passportNo,c=t.uidNo,i={method:"get",maxBodyLength:1/0,url:o+"/api/website/verification?name=".concat(r,"&passportNo=").concat(n,"&uidNo=").concat(c),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=4,s.request(i);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o+"/api/website/countries",s.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),e.next=4,s.get(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:o+"/api/website/claim-request/user",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,s.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.id,"",n={method:"get",maxBodyLength:1/0,url:o+"/api/website/claim-categories/documents/"+r,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=5,s.request(n);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:o+"/api/website/claim-categories",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,s.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.data,n={method:"post",maxBodyLength:1/0,url:o+"/api/website/claim-request/payment",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:r},e.next=4,s.request(n);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",t={method:"get",maxBodyLength:1/0,url:o+"/api/website/claim-request/user/meta",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,s.request(t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",r={method:"get",maxBodyLength:1/0,url:o+"/api/website/claim-request/review/"+t,headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:""},e.next=4,s.request(r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",maxBodyLength:1/0,url:o+"/api/kpi/claim-requests",headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,s.request(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(c.a)(a.a.mark((function e(t){var r,n,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.title,n=t.description,c={title:r,description:n,associateClaimType:"silver"},i={method:"post",maxBodyLength:1/0,url:o+"/api/claim-category",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:c},e.next=5,s.request(i);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"post",maxBodyLength:1/0,url:o+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,s.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"put",maxBodyLength:1/0,url:o+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")},data:t},e.next=3,s.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"get",maxBodyLength:1/0,url:o+"/api/website/address",headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,s.request(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"get",maxBodyLength:1/0,url:"https://api.stntinternational.com/api/travellers/".concat(t,"?size=2&page=1"),headers:{Authorization:"Bearer "+localStorage.getItem("token")}},e.next=3,s.request(r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},522:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(177);var a=r(141);function c(e){return function(e){if(Array.isArray(e))return Object(n.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},676:function(e,t,r){"use strict";r.r(t);var n=r(522),a=r(27),c=r.n(a),s=r(94),o=r(78),i=r(461),u=r(0),l=r(217),d=r(159),p=r(701),h=r(436),f=r(109),m=r(702),b=r(479),j=r(1),g=d.a.Option,x={files:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"13px",border:"1px solid lightblue",padding:"10px",borderRadius:"9px",background:"#0093ff0a"},uploadFile:{position:"absolute",width:"100%",height:"100%",opacity:0},".uploadFile::-webkit-file-upload-button":{visibility:"hidden"},".uploadFile::before":{content:"'Drag & Drop'",display:"inline-block",padding:"10px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},".uploadFile:hover::before":{backgroundColor:"#ccc"}};t.default=function(){var e=Object(u.useState)([]),t=Object(o.a)(e,2),r=t[0],a=t[1],v=Object(u.useState)(""),y=Object(o.a)(v,2),O=y[0],w=y[1],k=Object(u.useState)(""),B=Object(o.a)(k,2),N=B[0],I=B[1],z=Object(u.useState)(!1),A=Object(o.a)(z,2),S=A[0],q=A[1],F=p.a.useForm(),P=Object(o.a)(F,1)[0],C=Object(u.useState)([]),L=Object(o.a)(C,2),H=L[0],M=L[1],_=function(e){switch(e){case"male":P.setFieldsValue({note:"Hi, man!"});break;case"female":P.setFieldsValue({note:"Hi, lady!"});break;case"other":P.setFieldsValue({note:"Hi there!"})}},D=function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(r),0===r.length&&alert("Please upload a file"),n=t.master_policy_number,a=t.insurance_policy_package,e.next=7,Object(b.f)({file:r[0],travelAgentId:t.travel_agent,manifestType:t.manifest_type,masterPolicyNumber:n,insurancePolicyPackage:a});case 7:console.log("Success:"),q(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)(Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)({size:1e4,page:1,search:""});case 2:t=e.sent,console.log(t),M(t.data.data.rows);case 5:case"end":return e.stop()}}),e)}))),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(p.a,{form:P,layout:"vertical",name:"control-hooks",onFinish:D,children:[Object(j.jsxs)("div",{className:"border rounded p-3 bg-white",children:[Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(i.u,{})," "]}),Object(j.jsx)("div",{className:"ml-1",children:Object(j.jsx)("h3",{className:"d-flex",children:" Importing Manifests"})})]}),Object(j.jsxs)("div",{className:"m-auto w-75 mt-5",children:[Object(j.jsxs)("div",{className:"d-flex mt-4",children:[Object(j.jsx)(p.a.Item,{name:"travel_agent",label:"Travel Agency",rules:[{required:!0}],className:"w-50 p-1",children:Object(j.jsx)(d.a,{placeholder:"Select",onChange:_,allowClear:!0,children:H.map((function(e){return Object(j.jsx)(g,{value:e.id,children:e.agencyName})}))})}),Object(j.jsx)(p.a.Item,{name:"manifest_type",label:"Manifest Type",rules:[{required:!0}],className:"w-50 p-1",children:Object(j.jsxs)(d.a,{placeholder:"Select",onChange:_,allowClear:!0,children:[Object(j.jsx)(g,{value:"hajj",children:"Hajj"}),Object(j.jsx)(g,{value:"umrah",children:"Umrah"})]})})]}),Object(j.jsxs)("div",{className:"d-flex mt-2",children:[Object(j.jsx)(p.a.Item,{name:"master_policy_number",value:O,label:"Master Policy Number",rules:[{required:!0}],onChange:function(e){return w(e.target.value)},className:"w-50 p-1",children:Object(j.jsx)(h.a,{placeholder:"Enter Master Policy Number"})}),Object(j.jsx)(p.a.Item,{name:"insurance_policy_package",value:N,onChange:function(e){return I(e.target.value)},label:"Insurance Policy Package",onClick:!0,rules:[{required:!0}],className:"w-50 p-1",children:Object(j.jsx)(h.a,{placeholder:"Enter Insurace Policy Package"})})]}),Object(j.jsx)("div",{className:"border dashed bg-white rounded p-3 mt-4 p-5",children:Object(j.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center position-relative uploaddoc",children:[Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[Object(j.jsx)("path",{fill:"#41C1B2",d:"M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"}),Object(j.jsx)("path",{fill:"#D7E6EF",d:"M49 57H7V3h42v54z"}),Object(j.jsx)("path",{fill:"#41C1B2",d:"M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"}),Object(j.jsx)("path",{fill:"#F7FCFF",d:"M14 9h42v14H14V9z"}),Object(j.jsx)("path",{fill:"#41C1B2",d:"M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"}),Object(j.jsx)("path",{fill:"#F7FCFF",d:"M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"}),Object(j.jsx)("path",{fill:"#D7E6EF",d:"M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"}),Object(j.jsx)("path",{fill:"#44394A",d:"M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"})]}),Object(j.jsxs)("h5",{className:"mb-0 mt-2",children:["Drag & Drop Files Or"," ",Object(j.jsx)("span",{className:"mb-0",style:{color:"#4096ff"},children:"Choosen File"})]}),Object(j.jsx)("h5",{className:"mb-0",style:{color:"#4096ff"},children:"Upload only CSV files with max size of 25 mb"}),Object(j.jsx)("input",{style:x.uploadFile,className:"uploadFile",type:"file",onChange:function(e){var t=e.target.files;console.log(t);for(var c=[],s=0;s<t.length;s++)c.push(t[s]);console.log(r),a([].concat(Object(n.a)(r),[c[0]]))}})]})}),Object(j.jsx)("div",{className:"mt-4",children:r.length>0&&Object(j.jsx)("ul",{className:"p-0",style:{width:"40%"},children:r.map((function(e,t){return Object(j.jsxs)("li",{className:"my-3",style:x.files,children:[" ",Object(j.jsxs)("div",{className:"d-flex align-items-center",children:[Object(j.jsx)(i.E,{})," ",Object(j.jsxs)("span",{className:"ml-2",children:[e.name," "]})," "]}),Object(j.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){return function(e){var t=r.filter((function(t,r){return r!==e}));a(t)}(t)},children:[" ",Object(j.jsx)(l.a,{})," "]})]},e.name)}))})})]})]}),Object(j.jsx)("div",{className:"mt-4 d-flex justify-content-end",children:Object(j.jsxs)(p.a.Item,{children:[Object(j.jsx)(f.a,{className:"mr-2",children:"Back"}),Object(j.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Save"})]})})]}),Object(j.jsxs)(m.a,{width:600,footer:null,visible:S,onCancel:function(){return q(!1)},children:[Object(j.jsx)("div",{className:"d-flex my-3 flex-column w-75",children:Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("div",{className:"mr-3",children:Object(j.jsx)(i.c,{})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"mb-1",children:"manifest.csv file uploaded successfully!"}),Object(j.jsx)("p",{children:"Do you want to populate manifest.csv file details to travelers list ?"})]})]})}),Object(j.jsx)("div",{style:{gap:"10px"},className:"d-flex justify-content-end",children:Object(j.jsx)(f.a,{className:"px-4 font-weight-semibold text-white bg-info",onClick:function(){q(!1)},children:"Yes Please"})})]})]})}}}]);
//# sourceMappingURL=46.b4ab48dd.chunk.js.map