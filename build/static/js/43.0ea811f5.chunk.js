(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[43],{514:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},516:function(e,t){},530:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a(197);var s=a(152);function c(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(s.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},674:function(e,t,a){"use strict";a.r(t);var l=a(530),s=a(24),c=a.n(s),n=a(76),i=a(63),r=a(303),o=a(0),d=a(135),j=a(173),u=a(195),b=a(148),h=a(68),m=a(302),f=a(517),p=a(1),x=j.a.Option,O={files:{listStyle:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"13px",border:"1px solid lightblue",padding:"10px",borderRadius:"9px",background:"#0093ff0a"},uploadFile:{position:"absolute",width:"100%",height:"100%",opacity:0},".uploadFile::-webkit-file-upload-button":{visibility:"hidden"},".uploadFile::before":{content:"'Drag & Drop'",display:"inline-block",padding:"10px",border:"1px solid #ccc",borderRadius:"4px",cursor:"pointer"},".uploadFile:hover::before":{backgroundColor:"#ccc"}};t.default=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],v=Object(o.useState)(""),y=Object(i.a)(v,2),g=y[0],w=y[1],N=Object(o.useState)(""),F=Object(i.a)(N,2),C=F[0],k=F[1],S=Object(o.useState)(!1),A=Object(i.a)(S,2),H=A[0],I=A[1],M=u.a.useForm(),_=Object(i.a)(M,1)[0],z=Object(o.useState)([]),P=Object(i.a)(z,2),D=P[0],E=P[1],V=function(e){switch(e){case"male":_.setFieldsValue({note:"Hi, man!"});break;case"female":_.setFieldsValue({note:"Hi, lady!"});break;case"other":_.setFieldsValue({note:"Hi there!"})}},B=function(){var e=Object(n.a)(c.a.mark((function e(t){var l,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(a),0===a.length&&alert("Please upload a file"),l=t.master_policy_number,s=t.insurance_policy_package,e.next=7,Object(f.f)({file:a[0],travelAgentId:t.travel_agent,manifestType:t.manifest_type,masterPolicyNumber:l,insurancePolicyPackage:s});case 7:console.log("Success:"),I(!0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.useEffect)(Object(n.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)({size:1e4,page:1,search:""});case 2:t=e.sent,console.log(t),E(t.data.data.rows);case 5:case"end":return e.stop()}}),e)}))),[]),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(u.a,{form:_,layout:"vertical",name:"control-hooks",onFinish:B,children:[Object(p.jsxs)("div",{className:"border rounded p-3 bg-white",children:[Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(r.s,{})," "]}),Object(p.jsx)("div",{className:"ml-1",children:Object(p.jsx)("h3",{className:"d-flex",children:" Importing Manifests"})})]}),Object(p.jsxs)("div",{className:"m-auto w-75 mt-5",children:[Object(p.jsxs)("div",{className:"d-flex mt-4",children:[Object(p.jsx)(u.a.Item,{name:"travel_agent",label:"Travel Agency",rules:[{required:!0}],className:"w-50 p-1",children:Object(p.jsx)(j.a,{placeholder:"Select",onChange:V,allowClear:!0,children:D.map((function(e){return Object(p.jsx)(x,{value:e.id,children:e.agencyName})}))})}),Object(p.jsx)(u.a.Item,{name:"manifest_type",label:"Manifest Type",rules:[{required:!0}],className:"w-50 p-1",children:Object(p.jsxs)(j.a,{placeholder:"Select",onChange:V,allowClear:!0,children:[Object(p.jsx)(x,{value:"hajj",children:"Hajj"}),Object(p.jsx)(x,{value:"umrah",children:"Umrah"})]})})]}),Object(p.jsxs)("div",{className:"d-flex mt-2",children:[Object(p.jsx)(u.a.Item,{name:"master_policy_number",value:g,label:"Master Policy Number",rules:[{required:!0}],onChange:function(e){return w(e.target.value)},className:"w-50 p-1",children:Object(p.jsx)(b.a,{placeholder:"Enter Master Policy Number"})}),Object(p.jsx)(u.a.Item,{name:"insurance_policy_package",value:C,onChange:function(e){return k(e.target.value)},label:"Insurance Policy Package",onClick:!0,rules:[{required:!0}],className:"w-50 p-1",children:Object(p.jsx)(b.a,{placeholder:"Enter Insurace Policy Package"})})]}),Object(p.jsx)("div",{className:"border dashed bg-white rounded p-3 mt-4 p-5",children:Object(p.jsxs)("div",{className:"d-flex flex-column justify-content-center align-items-center position-relative uploaddoc",children:[Object(p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64",fill:"none",viewBox:"0 0 64 64",children:[Object(p.jsx)("path",{fill:"#41C1B2",d:"M18.57 15.51l7.86 7a2 2 0 001.33.51H56v34.9A2.93 2.93 0 0153.26 61H5.74A2.93 2.93 0 013 57.92V18a2.85 2.85 0 012.68-3h11.56a2 2 0 011.33.51z"}),Object(p.jsx)("path",{fill:"#D7E6EF",d:"M49 57H7V3h42v54z"}),Object(p.jsx)("path",{fill:"#41C1B2",d:"M45 23h16v-6a2 2 0 00-2-2h-6l-8 8z"}),Object(p.jsx)("path",{fill:"#F7FCFF",d:"M14 9h42v14H14V9z"}),Object(p.jsx)("path",{fill:"#41C1B2",d:"M25.69 15.51l7.42 7a1.8 1.8 0 001.25.51H61v34.9A2.87 2.87 0 0158.41 61H13.59A2.87 2.87 0 0111 57.92V18a2.79 2.79 0 012.53-3h10.9c.47 0 .922.184 1.26.51z"}),Object(p.jsx)("path",{fill:"#F7FCFF",d:"M36 55c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13z"}),Object(p.jsx)("path",{fill:"#D7E6EF",d:"M52 13H32a1 1 0 000 2h20a1 1 0 000-2zm0 4H37a1 1 0 000 2h15a1 1 0 000-2z"}),Object(p.jsx)("path",{fill:"#44394A",d:"M36.5 49.28l6.72-6.72a5.501 5.501 0 00-7.78-7.78l-8.84 8.84a1.002 1.002 0 000 1.42A1 1 0 0028 45l8.84-8.84a3.5 3.5 0 114.95 4.95l-6.71 6.71a1.998 1.998 0 01-3.38-.571A2 2 0 0132.26 45L39 38.32a.5.5 0 01.71 0 .48.48 0 010 .71l-6 6a1 1 0 101.42 1.41l6-6a2.503 2.503 0 00-3.54-3.54l-6.72 6.72a4 4 0 000 5.66 4.003 4.003 0 005.66 0h-.03z"})]}),Object(p.jsxs)("h5",{className:"mb-0 mt-2",children:["Drag & Drop Files Or"," ",Object(p.jsx)("span",{className:"mb-0",style:{color:"#4096ff"},children:"Choosen File"})]}),Object(p.jsx)("h5",{className:"mb-0",style:{color:"#4096ff"},children:"Upload only CSV files with max size of 25 mb"}),Object(p.jsx)("input",{style:O.uploadFile,className:"uploadFile",type:"file",onChange:function(e){var t=e.target.files;console.log(t);for(var c=[],n=0;n<t.length;n++)c.push(t[n]);console.log(a),s([].concat(Object(l.a)(a),[c[0]]))}})]})}),Object(p.jsx)("div",{className:"mt-4",children:a.length>0&&Object(p.jsx)("ul",{className:"p-0",style:{width:"40%"},children:a.map((function(e,t){return Object(p.jsxs)("li",{className:"my-3",style:O.files,children:[" ",Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)(r.C,{})," ",Object(p.jsxs)("span",{className:"ml-2",children:[e.name," "]})," "]}),Object(p.jsxs)("span",{style:{cursor:"pointer"},onClick:function(){return function(e){var t=a.filter((function(t,a){return a!==e}));s(t)}(t)},children:[" ",Object(p.jsx)(d.a,{})," "]})]},e.name)}))})})]})]}),Object(p.jsx)("div",{className:"mt-4 d-flex justify-content-end",children:Object(p.jsxs)(u.a.Item,{children:[Object(p.jsx)(h.a,{className:"mr-2",children:"Back"}),Object(p.jsx)(h.a,{type:"primary",htmlType:"submit",children:"Save"})]})})]}),Object(p.jsxs)(m.a,{width:600,footer:null,visible:H,onCancel:function(){return I(!1)},children:[Object(p.jsx)("div",{className:"d-flex my-3 flex-column w-75",children:Object(p.jsxs)("div",{className:"d-flex",children:[Object(p.jsx)("div",{className:"mr-3",children:Object(p.jsx)(r.c,{})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h4",{className:"mb-1",children:"manifest.csv file uploaded successfully!"}),Object(p.jsx)("p",{children:"Do you want to populate manifest.csv file details to travelers list ?"})]})]})}),Object(p.jsx)("div",{style:{gap:"10px"},className:"d-flex justify-content-end",children:Object(p.jsx)(h.a,{className:"px-4 font-weight-semibold text-white bg-info",onClick:function(){I(!1)},children:"Yes Please"})})]})]})}}}]);
//# sourceMappingURL=43.0ea811f5.chunk.js.map