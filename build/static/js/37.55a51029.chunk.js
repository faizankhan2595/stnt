(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[37],{514:function(e,a,i){"use strict";var c=i(175);a.a=c.a},515:function(e,a,i){"use strict";var c=i(123);a.a=c.a},658:function(e,a,i){},665:function(e,a,i){"use strict";var c=i(2),t=i(5),s=i(0),l=i.n(s),n=i(35),r=i(4),d=i(13),o=i(16),j=i(20),m=i(22),b=i(23),h=i(52),p=i(6),x=i.n(p),v=["className","prefixCls","style","active","status","iconPrefix","icon","wrapperStyle","stepNumber","disabled","description","title","subTitle","progressDot","stepIcon","tailContent","icons","stepIndex","onStepClick","onClick"];function O(e){return"string"===typeof e}var u=function(e){Object(m.a)(i,e);var a=Object(b.a)(i);function i(){var e;return Object(o.a)(this,i),(e=a.apply(this,arguments)).onClick=function(){var a=e.props,i=a.onClick,c=a.onStepClick,t=a.stepIndex;i&&i.apply(void 0,arguments),c(t)},e}return Object(j.a)(i,[{key:"renderIconNode",value:function(){var e,a,i=this.props,c=i.prefixCls,l=i.progressDot,n=i.stepIcon,r=i.stepNumber,d=i.status,o=i.title,j=i.description,m=i.icon,b=i.iconPrefix,h=i.icons,p=x()("".concat(c,"-icon"),"".concat(b,"icon"),(e={},Object(t.a)(e,"".concat(b,"icon-").concat(m),m&&O(m)),Object(t.a)(e,"".concat(b,"icon-check"),!m&&"finish"===d&&(h&&!h.finish||!h)),Object(t.a)(e,"".concat(b,"icon-cross"),!m&&"error"===d&&(h&&!h.error||!h)),e)),v=s.createElement("span",{className:"".concat(c,"-icon-dot")});return a=l?"function"===typeof l?s.createElement("span",{className:"".concat(c,"-icon")},l(v,{index:r-1,status:d,title:o,description:j})):s.createElement("span",{className:"".concat(c,"-icon")},v):m&&!O(m)?s.createElement("span",{className:"".concat(c,"-icon")},m):h&&h.finish&&"finish"===d?s.createElement("span",{className:"".concat(c,"-icon")},h.finish):h&&h.error&&"error"===d?s.createElement("span",{className:"".concat(c,"-icon")},h.error):m||"finish"===d||"error"===d?s.createElement("span",{className:p}):s.createElement("span",{className:"".concat(c,"-icon")},r),n&&(a=n({index:r-1,status:d,title:o,description:j,node:a})),a}},{key:"render",value:function(){var e,a=this.props,i=a.className,c=a.prefixCls,l=a.style,n=a.active,o=a.status,j=void 0===o?"wait":o,m=(a.iconPrefix,a.icon),b=(a.wrapperStyle,a.stepNumber,a.disabled),h=a.description,p=a.title,O=a.subTitle,u=(a.progressDot,a.stepIcon,a.tailContent),N=(a.icons,a.stepIndex,a.onStepClick),g=a.onClick,y=Object(d.a)(a,v),f=x()("".concat(c,"-item"),"".concat(c,"-item-").concat(j),i,(e={},Object(t.a)(e,"".concat(c,"-item-custom"),m),Object(t.a)(e,"".concat(c,"-item-active"),n),Object(t.a)(e,"".concat(c,"-item-disabled"),!0===b),e)),w=Object(r.a)({},l),C={};return N&&!b&&(C.role="button",C.tabIndex=0,C.onClick=this.onClick),s.createElement("div",Object.assign({},y,{className:f,style:w}),s.createElement("div",Object.assign({onClick:g},C,{className:"".concat(c,"-item-container")}),s.createElement("div",{className:"".concat(c,"-item-tail")},u),s.createElement("div",{className:"".concat(c,"-item-icon")},this.renderIconNode()),s.createElement("div",{className:"".concat(c,"-item-content")},s.createElement("div",{className:"".concat(c,"-item-title")},p,O&&s.createElement("div",{title:"string"===typeof O?O:void 0,className:"".concat(c,"-item-subtitle")},O)),h&&s.createElement("div",{className:"".concat(c,"-item-description")},h))))}}]),i}(s.Component),N=["prefixCls","style","className","children","direction","type","labelPlacement","iconPrefix","status","size","current","progressDot","stepIcon","initial","icons","onChange"],g=function(e){Object(m.a)(i,e);var a=Object(b.a)(i);function i(){var e;return Object(o.a)(this,i),(e=a.apply(this,arguments)).onStepClick=function(a){var i=e.props,c=i.onChange,t=i.current;c&&t!==a&&c(a)},e}return Object(j.a)(i,[{key:"render",value:function(){var e,a=this,i=this.props,c=i.prefixCls,n=i.style,o=void 0===n?{}:n,j=i.className,m=i.children,b=i.direction,p=i.type,v=i.labelPlacement,O=i.iconPrefix,u=i.status,g=i.size,y=i.current,f=i.progressDot,w=i.stepIcon,C=i.initial,k=i.icons,P=i.onChange,S=Object(d.a)(i,N),D="navigation"===p,I=f?"vertical":v,E=x()(c,"".concat(c,"-").concat(b),j,(e={},Object(t.a)(e,"".concat(c,"-").concat(g),g),Object(t.a)(e,"".concat(c,"-label-").concat(I),"horizontal"===b),Object(t.a)(e,"".concat(c,"-dot"),!!f),Object(t.a)(e,"".concat(c,"-navigation"),D),e));return l.a.createElement("div",Object.assign({className:E,style:o},S),Object(h.a)(m).map((function(e,i){var t=C+i,l=Object(r.a)({stepNumber:"".concat(t+1),stepIndex:t,key:t,prefixCls:c,iconPrefix:O,wrapperStyle:o,progressDot:f,stepIcon:w,icons:k,onStepClick:P&&a.onStepClick},e.props);return"error"===u&&i===y-1&&(l.className="".concat(c,"-next-error")),e.props.status||(l.status=t===y?u:t<y?"finish":"wait"),l.active=t===y,Object(s.cloneElement)(e,l)})))}}]),i}(l.a.Component);g.Step=u,g.defaultProps={type:"default",prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1};var y=g,f=i(229),w=i(84),C=i(81),k=i(549),P=i(150),S=function(e){var a,i=e.percent,l=e.size,r=e.className,d=e.direction,o=e.responsive,j=Object(P.a)().xs,m=s.useContext(C.b),b=m.getPrefixCls,h=m.direction,p=s.useCallback((function(){return o&&j?"vertical":d}),[j,d]),v=b("steps",e.prefixCls),O=b("",e.iconPrefix),u=x()((a={},Object(t.a)(a,"".concat(v,"-rtl"),"rtl"===h),Object(t.a)(a,"".concat(v,"-with-progress"),void 0!==i),a),r),N={finish:s.createElement(f.a,{className:"".concat(v,"-finish-icon")}),error:s.createElement(w.a,{className:"".concat(v,"-error-icon")})};return s.createElement(y,Object(c.a)({icons:N},Object(n.a)(e,["percent","responsive"]),{direction:p(),stepIcon:function(e){var a=e.node;if("process"===e.status&&void 0!==i){var c="small"===l?32:40;return s.createElement("div",{className:"".concat(v,"-progress-icon")},s.createElement(k.a,{type:"circle",percent:i,width:c,strokeWidth:4,format:function(){return null}}),a)}return a},prefixCls:v,iconPrefix:O,className:u}))};S.Step=y.Step,S.defaultProps={current:0,responsive:!0};a.a=S},668:function(e,a,i){"use strict";var c=i(4),t=i(0),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},l=i(14),n=function(e,a){return t.createElement(l.a,Object(c.a)(Object(c.a)({},e),{},{ref:a,icon:s}))};n.displayName="UploadOutlined";a.a=t.forwardRef(n)},687:function(e,a,i){"use strict";i.r(a);var c=i(15),t=(i(0),i(658),i(668)),s=i(665),l=i(301),n=i(514),r=i(515),d=i(703),o=i(173),j=i(704),m=i(68),b=i(148),h=i(306),p=i(1),x=s.a.Step,v=[{key:"1",sno:"1",name:"Draft1",date:"24 Apr 2023, 10:00:00 Am"},{key:"2",sno:"2",name:"Draft2",date:"24 Apr 2023, 10:00:00 Am"}],O=[{title:"Sr. No",dataIndex:"sno",key:"sno"},{title:"Name",dataIndex:"name",key:"name"},{title:"Date of Draft",dataIndex:"date",key:"date"},{title:"Action",dataIndex:"address",key:"address"}],u=[{key:"1",sno:"1",name:"Draft1",date:"24 Apr 2023, 10:00:00 Am"},{key:"2",sno:"2",name:"Draft2",date:"24 Apr 2023, 10:00:00 Am"}],N=[{title:"Sr. No",dataIndex:"sno",key:"sno"},{title:"UID",dataIndex:"uid",key:"uid"},{title:"Date",dataIndex:"date",key:"date"},{title:"Status",dataIndex:"status",key:"status"},{title:"Action",dataIndex:"address",key:"address"}],g=function(e){console.log("selected ".concat(e))},y=function(e){console.log("search:",e)},f={name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:{authorization:"authorization-text"},onChange:function(e){"uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status?l.b.success("".concat(e.file.name," file uploaded successfully")):"error"===e.file.status&&l.b.error("".concat(e.file.name," file upload failed."))}};a.default=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"banner-container",children:Object(p.jsx)("img",{src:"/img/banner-img.png",alt:"banner",style:{width:"100%",height:"auto"}})}),Object(p.jsxs)("div",{className:"claim-title-container",children:[Object(p.jsx)("div",{className:"claim-title-text",children:"Claim Submission"}),Object(p.jsxs)("div",{className:"claim-title-sub-text",children:["With a convenient insurance claim process, you can now register your claim, ",Object(p.jsx)("br",{}),"upload the necessary documents and know the status instantly."]})]}),Object(p.jsx)("div",{className:"steps-container",children:Object(p.jsx)("div",{className:"step-container",children:Object(p.jsxs)(s.a,{current:0,labelPlacement:"vertical",children:[Object(p.jsx)(x,{title:"Get started"}),Object(p.jsx)(x,{title:"Travel Details"}),Object(p.jsx)(x,{title:"Claim Details"}),Object(p.jsx)(x,{title:"Payment Details"}),Object(p.jsx)(x,{title:"Review"})]})})}),Object(p.jsx)("div",{className:"virtual-card-container",children:Object(p.jsxs)("div",{className:"virtual-card",children:[Object(p.jsxs)("div",{className:"virtual-card-heading",style:{marginBottom:"15px"},children:[Object(p.jsxs)("div",{className:"heading-cion-container",style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)("div",{className:"virtual-card-icon-container",children:Object(p.jsx)("img",{src:"/img/virtual-card-icon.png",alt:"virtual-card-icon",style:{width:"32px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Traveler's Virtual Card"})]}),Object(p.jsxs)("div",{className:"share-download-icon",style:{display:"flex"},children:[Object(p.jsx)("div",{className:"share-icon",style:{marginRight:"10px"},children:Object(p.jsx)("img",{src:"/img/share.png",alt:"share-icon",style:{width:"28px",height:"auto",cursor:"pointer"}})}),Object(p.jsx)("div",{className:"download-icon",children:Object(p.jsx)("img",{src:"/img/download.png",alt:"download-icon",style:{width:"28px",height:"auto",cursor:"pointer"}})})]})]}),Object(p.jsxs)(n.a,{children:[Object(p.jsx)(r.a,{span:12,className:"virtual-card-desc",children:"A virtual claim payment card is unique digit computer generated number that is created solely for a use between a payer and payee. We will provide a Claim Assistance Card for your to ensure that you have handy policy details as well as direct claims assistance number always with you."}),Object(p.jsx)(r.a,{span:12,className:"virtual-card-img",children:Object(p.jsx)("div",{className:"virtual-card-img-container",children:Object(p.jsx)("img",{src:"/img/virtual-crd.png",alt:"virtual-card-img",style:{width:"100%",height:"auto"}})})})]})]})}),Object(p.jsx)("div",{className:"virtual-card-container",children:Object(p.jsxs)("div",{className:"virtual-card",children:[Object(p.jsx)("div",{className:"virtual-card-heading",style:{marginBottom:"15px"},children:Object(p.jsxs)("div",{className:"heading-icon-container",style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)("div",{className:"virtual-card-icon-container",children:Object(p.jsx)("img",{src:"/img/policy-details-icon.svg",alt:"policy-details-icon",style:{width:"32px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Policy Details"})]})}),Object(p.jsxs)(n.a,{children:[Object(p.jsxs)(r.a,{span:6,className:"virtual-card-desc-policy",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Policy Effective Date:"}),Object(p.jsx)("div",{className:"policy-detail",children:"1 Apr 2023, 10:00:00 Am"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Policy Type::"}),Object(p.jsx)("div",{className:"policy-detail",children:"UMRAH EMA 1444H"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"UID No:"}),Object(p.jsx)("div",{className:"policy-detail",children:"S-STT-S1004-5921"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Duration of Package:"}),Object(p.jsx)("div",{className:"policy-detail",children:"16 Days"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Cost:"}),Object(p.jsx)("div",{className:"policy-detail",children:"S$175.00"})]})]}),Object(p.jsxs)(r.a,{span:6,className:"virtual-card-desc",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Policy Expiration Date::"}),Object(p.jsx)("div",{className:"policy-detail",children:"20 Apr 2023, 10:00:00 Am"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Policy No:"}),Object(p.jsx)("div",{className:"policy-detail",children:"100025399969"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Date of Birth:"}),Object(p.jsx)("div",{className:"policy-detail",children:"10 Jan 1990"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Geographical Limit:"}),Object(p.jsx)("div",{className:"policy-detail",children:"Saudi Arabia Only"})]})]}),Object(p.jsx)(r.a,{span:12,className:"virtual-card-img",children:Object(p.jsx)("div",{className:"virtual-card-img-container",children:Object(p.jsx)("img",{src:"/img/policy-img.png",alt:"virtual-card-img",style:{width:"350px",height:"auto"}})})})]})]})}),Object(p.jsxs)("div",{className:"drafts-container",children:[Object(p.jsxs)("div",{className:"draft-heading-container",children:[Object(p.jsx)("div",{className:"drafts-icon",children:Object(p.jsx)("img",{src:"/img/drafts.png",alt:"draft-icon",style:{width:"32px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"draft-heading",children:Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Drafts"})})]}),Object(p.jsx)(d.a,{dataSource:v,columns:O,style:{marginTop:"15px"}})]}),Object(p.jsxs)("div",{className:"drafts-container",children:[Object(p.jsxs)("div",{className:"draft-heading-container",children:[Object(p.jsx)("div",{className:"drafts-icon",children:Object(p.jsx)("img",{src:"/img/drafts.png",alt:"draft-icon",style:{width:"32px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"draft-heading",children:Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Claim Submission History"})})]}),Object(p.jsx)(d.a,{dataSource:u,columns:N,style:{marginTop:"15px"}})]}),Object(p.jsxs)("div",{className:"initiate-claim-container",children:[Object(p.jsxs)("div",{className:"initiate-claim-heading-container",children:[Object(p.jsx)("div",{className:"inititae-claim-heading",children:"Want to initiate claim?"}),Object(p.jsx)("div",{className:"inititae-claim-sub-heading",children:"Quick claim support for Umrah travel"})]}),Object(p.jsx)("div",{className:"initiate-claim-btn-container",children:Object(p.jsx)("div",{className:"web-btn",children:"GET STARTED"})})]}),Object(p.jsxs)("div",{className:"back-icon-container",children:[Object(p.jsx)("div",{className:"back-icon",children:Object(p.jsx)("img",{src:"/img/back-icon.svg",alt:"back-icon",style:{width:"7px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"back-text",children:"Back"})]}),Object(p.jsxs)("div",{className:"travel-details-container",children:[Object(p.jsx)("div",{className:"verify-details-heading",children:"Your Travel Details"}),Object(p.jsx)("div",{className:"verify-details-sub-text",children:"Please enter your travel insurance policy details below."})]}),Object(p.jsxs)("div",{className:"select-country-container",children:[Object(p.jsx)("div",{className:"label",children:"Country where Loss Occurred"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(o.a,{showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:g,onSearch:y,filterOption:function(e,a){var i;return(null!==(i=null===a||void 0===a?void 0:a.label)&&void 0!==i?i:"").toLowerCase().includes(e.toLowerCase())},options:[{value:"Singapore",label:"singapore"},{value:"Saudi Arabia",label:"ksa"},{value:"Brunei",label:"brunei"},{value:"Malaysia",label:"malaysia"},{value:"Indonesia",label:"indonesia"},{value:"Thailand",label:"thailand"}]})}),Object(p.jsx)("div",{className:"initiate-claim-btn-container",children:Object(p.jsx)("div",{className:"web-btn",children:"NEXT"})})]}),Object(p.jsxs)("div",{className:"claim-details-main-container",children:[Object(p.jsxs)("div",{className:"back-icon-container",children:[Object(p.jsx)("div",{className:"back-icon",children:Object(p.jsx)("img",{src:"/img/back-icon.svg",alt:"back-icon",style:{width:"7px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"back-text",children:"Back"})]}),Object(p.jsxs)("div",{className:"claim-details-title",children:[Object(p.jsx)("div",{className:"claim-details-heading",children:"Claim requests"}),Object(p.jsx)("div",{className:"claim-details-sub-text",children:"claim request can be initiated by selecting category of claim and uploading documents & pictures. User can add multiple claims for different categories from list"})]}),Object(p.jsxs)("div",{className:"heading-icon-container",style:{display:"flex",alignItems:"center"},children:[Object(p.jsx)("div",{className:"virtual-card-icon-container",children:Object(p.jsx)("img",{src:"/img/policy-details-icon.svg",alt:"policy-details-icon",style:{width:"32px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",style:{margin:"25px 0px",backgroundColor:"#FCFAFA",padding:"15px"},children:"Claim request 1"})]}),Object(p.jsxs)("div",{className:"claim-category-select",children:[Object(p.jsx)("div",{className:"label",style:{margrinBottom:"15px"},children:"Claim Category"}),Object(p.jsx)(o.a,{showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:g,onSearch:y,filterOption:function(e,a){var i;return(null!==(i=null===a||void 0===a?void 0:a.label)&&void 0!==i?i:"").toLowerCase().includes(e.toLowerCase())},options:[{label:"Medical & Other Expenses",value:"medical_other_Expenses"},{label:"Hospital Confinement Allowance",value:"hospital_confinement_allowance"},{label:"Emergency Medical Evacuation",value:"emergency_medical_evacuation"},{label:"Personal Accident / Permanent Total Disablement / Child\u2019s Education Fund",value:"personal_accident_permanent_total_disablement_child_education_fund"},{label:"Compassionate Visit/ Child Caretaker/ Child Help Get Well Benefit",value:"compassionate_visit"},{label:"Bereavement Benefit due to COVID-19",value:"benefit_covid_19"},{label:"Cancellation/Postponement (before onset of trip)",value:"cancellation"},{label:"Trip Curtailment",value:"trip_curtailment"},{label:"Travel Delay",value:"travel_delay"},{label:"Travel Misconnection",value:"travel_misconnection"},{label:"Overbooked Scheduled Public Conveyance",value:"overbooked_scheduled"},{label:"Flight Deviation",value:"flight_deviation"},{label:"Hijacking / Kidnapping",value:"hijacking_kidnapping"},{label:"Baggage Delay",value:"baggage_delay"},{label:"Loss of Baggage & Personal Effects",value:"loss_of_baggage"},{label:"Credit Card Indemnity",value:"credit_card_indemnity"},{label:"Personal Liability",value:"personal_liability"},{label:"Rental Vehicle Excess",value:"rental_vehicle_excess"},{label:"Home Protection / Burglary",value:"home_protection"},{label:"Emergency Phone Charges",value:"emergency_phone_charges"},{label:"Un-utilized Entertainment Ticket",value:"un_utilized_entertainment_ticket"},{label:"Credit Card Liability Protector",value:"credit_card_liability_protector"},{label:"Others",value:"others"}]})]}),Object(p.jsx)("div",{className:"documents-upload-heading",style:{margrinBottom:"10px",margrinTop:"10px"},children:"Documents Upload"}),Object(p.jsx)("div",{className:"mandatory-items-note",children:"* are mandatory items"}),Object(p.jsxs)("div",{className:"documents-upload-container",children:[Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Copy of Certificate of Insurance*"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Tour Operators Confirmation of booking invoices, Airline ticket counterfoil(s)/ Booking Pass(es)**"}),Object(p.jsx)(r.a,{span:12,children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{className:"pl-4",children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Copies of your other insurance policy and proof of receiving compensation, if any*"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Medical Report and/or Hospital Discharge Summary showing nature and/or diagnosis of injury/ sickness"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Original Medical Bills/ Receipts for the full amount of the claim"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Police Report (for accident-related cases)"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Death Certificate, Burial/ Cremation Permit (if death occurred) and bill incurred for burial in the locality"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Child\u2019s birth certificate (for Child\u2019s Education Fund)"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)(n.a,{className:"w-100 d-flex align-items-center mt-2 mb-2 pr-2",children:[Object(p.jsx)(r.a,{span:12,className:"document-upload-label",children:"Bills/Receipts for additional expenses incurred (for compassionate visit and child help claim)"}),Object(p.jsx)(r.a,{span:12,className:"pl-4",children:Object(p.jsx)(j.a,Object(c.a)(Object(c.a)({},f),{},{children:Object(p.jsx)(m.a,{icon:Object(p.jsx)(t.a,{}),children:"Click to Upload"})}))})]}),Object(p.jsxs)("div",{className:"btns-container",children:[Object(p.jsx)("div",{className:"web-btn",children:"Add more claims"}),Object(p.jsxs)("div",{className:"d-flex align-items-center",children:[Object(p.jsx)("div",{className:"secondary-btn mr-2",children:"Save as draft"}),Object(p.jsx)("div",{className:"web-btn",children:"Next"})]})]})]})]}),Object(p.jsxs)("div",{className:"back-icon-container",children:[Object(p.jsx)("div",{className:"back-icon",children:Object(p.jsx)("img",{src:"/img/back-icon.svg",alt:"back-icon",style:{width:"7px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"back-text",children:"Back"})]}),Object(p.jsx)("div",{className:"payment-details-container",children:Object(p.jsxs)(n.a,{className:"w-100",children:[Object(p.jsx)(r.a,{span:8}),Object(p.jsxs)(r.a,{span:8,children:[Object(p.jsxs)("div",{className:"travel-details-container",children:[Object(p.jsx)("div",{className:"verify-details-heading",children:"Payment Details"}),Object(p.jsx)("div",{className:"verify-details-sub-text",children:"Please enter your payment details for money transfer upon successful claim settlement"})]}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"Payment options*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(o.a,{className:"w-100",showSearch:!0,placeholder:"Select payment option",optionFilterProp:"children",onChange:g,onSearch:y,filterOption:function(e,a){var i;return(null!==(i=null===a||void 0===a?void 0:a.label)&&void 0!==i?i:"").toLowerCase().includes(e.toLowerCase())},options:[{value:"dbs_posb",label:"DBS POSB Account"},{value:"paynow_linked_account",label:"Paynow Linked Account"},{value:"cheque",label:"Cheque"}]})})]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"Payee Name (as per bank account)*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(b.a,{placeholder:"Payee Name"})})]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"Payee NRIC*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(b.a,{placeholder:"Payee NRIC"})})]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"Bank Name (DBS/POSB Only)*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(o.a,{className:"w-100",showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:g,onSearch:y,filterOption:function(e,a){var i;return(null!==(i=null===a||void 0===a?void 0:a.label)&&void 0!==i?i:"").toLowerCase().includes(e.toLowerCase())},options:[{value:"dbs",label:"DBS"},{value:"posb",label:"POSB"}]})})]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"Bank Account Number*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(b.a,{placeholder:"Enter Bank Account Number"})})]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"PayNow registered mobile number or NRIC/FIN*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(b.a,{placeholder:"Enter Bank Account Number"})})]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"Payee name*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(b.a,{placeholder:"Enter Bank Account Number"})})]})}),Object(p.jsx)("div",{className:"web-btn",children:"Next"})]}),Object(p.jsx)(r.a,{span:8})]})}),Object(p.jsxs)("div",{className:"back-icon-container",children:[Object(p.jsx)("div",{className:"back-icon",children:Object(p.jsx)("img",{src:"/img/back-icon.svg",alt:"back-icon",style:{width:"7px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"back-text",children:"Back"})]}),Object(p.jsxs)("div",{className:"claim-details-title",children:[Object(p.jsx)("div",{className:"claim-details-heading",children:"Review Claim"}),Object(p.jsx)("div",{className:"claim-details-sub-text",children:"Review claim details below. You can edit the claim details before submitting"})]}),Object(p.jsxs)("div",{className:"review-container",children:[Object(p.jsxs)("div",{className:"review-header-container",children:[Object(p.jsx)("div",{className:"icon-container",children:Object(p.jsx)("img",{src:"/img/travel-icon.svg",alt:"claim-details-icon",style:{width:"30px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Travel Details"})]}),Object(p.jsx)("div",{className:"review-details-container",children:Object(p.jsxs)(n.a,{className:"w-100",children:[Object(p.jsxs)(r.a,{span:8,className:"virtual-card-desc-policy",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Insurance Policy Package"}),Object(p.jsx)("div",{className:"policy-detail",children:"Hajj 1443H"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Traveler Agent"}),Object(p.jsx)("div",{className:"policy-detail",children:"Mr. Rashid M"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Departure date from Singapore:"}),Object(p.jsx)("div",{className:"policy-detail",children:"15 Apr 2023"})]})]}),Object(p.jsxs)(r.a,{span:8,className:"virtual-card-desc-policy",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Policy Number"}),Object(p.jsx)("div",{className:"policy-detail",children:"100256500266"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Country where Loss Occurred"}),Object(p.jsx)("div",{className:"policy-detail",children:"Saudi Arabia"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Return date to Singapore"}),Object(p.jsx)("div",{className:"policy-detail",children:"22 Apr 2023"})]})]}),Object(p.jsx)(r.a,{span:8,className:"d-flex justify-content-end align-items-start",children:Object(p.jsx)("div",{className:"edit-icon-container",children:Object(p.jsxs)("div",{className:"edit-icon",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("img",{src:"/img/edit-icon.svg",alt:"edit-icon",style:{width:"12px",height:"auto",marginRight:"5px"}})}),Object(p.jsx)("span",{children:"Edit"})]})})})]})})]}),Object(p.jsxs)("div",{className:"review-container",children:[Object(p.jsxs)("div",{className:"review-header-container",children:[Object(p.jsx)("div",{className:"icon-container",children:Object(p.jsx)("img",{src:"/img/claim-icon.svg",alt:"claim-details-icon",style:{width:"30px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Claim Details"})]}),Object(p.jsxs)("div",{className:"claim-header pl-2",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("img",{src:"/img/policy-details-icon.svg",alt:"claim-icon",style:{width:"30px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{children:"Claim 1"}),Object(p.jsx)("div",{})]}),Object(p.jsx)("div",{className:"review-details-container",children:Object(p.jsxs)(n.a,{className:"w-100",children:[Object(p.jsxs)(r.a,{span:8,className:"virtual-card-desc-policy",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Claim Category"}),Object(p.jsx)("div",{className:"policy-detail",children:"Medical and other expenses"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Documents Uploaded"}),Object(p.jsx)("div",{className:"policy-detail",children:"Copy of Certificate of Insurance*"})]})]}),Object(p.jsx)(r.a,{span:8,className:"virtual-card-desc-policy",style:{paddingRight:"20px"}}),Object(p.jsx)(r.a,{span:8,className:"d-flex justify-content-end align-items-start",children:Object(p.jsx)("div",{className:"edit-icon-container",children:Object(p.jsxs)("div",{className:"edit-icon",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("img",{src:"/img/edit-icon.svg",alt:"edit-icon",style:{width:"12px",height:"auto",marginRight:"5px"}})}),Object(p.jsx)("span",{children:"Edit"})]})})})]})})]}),Object(p.jsxs)("div",{className:"review-container",children:[Object(p.jsxs)("div",{className:"review-header-container",children:[Object(p.jsx)("div",{className:"icon-container",children:Object(p.jsx)("img",{src:"/img/payment-icon.svg",alt:"claim-details-icon",style:{width:"30px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Payment Details"})]}),Object(p.jsx)("div",{className:"review-details-container",children:Object(p.jsxs)(n.a,{className:"w-100",children:[Object(p.jsxs)(r.a,{span:8,className:"virtual-card-desc-policy",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Payment Option"}),Object(p.jsx)("div",{className:"policy-detail",children:"DBS/POSB Account"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Payee NRIC"}),Object(p.jsx)("div",{className:"policy-detail",children:"S800256S"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Bank Account No"}),Object(p.jsx)("div",{className:"policy-detail",children:"1256645 6954669 66456"})]})]}),Object(p.jsxs)(r.a,{span:8,className:"virtual-card-desc-policy",style:{paddingRight:"20px"},children:[Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Payee Name (as per bank acccount)"}),Object(p.jsx)("div",{className:"policy-detail",children:"100256500266"})]}),Object(p.jsxs)("div",{className:"policy-details-container",children:[Object(p.jsx)("div",{className:"policy-details-label",children:"Bank Name"}),Object(p.jsx)("div",{className:"policy-detail",children:"DBS"})]})]}),Object(p.jsx)(r.a,{span:8,className:"d-flex justify-content-end align-items-start",children:Object(p.jsx)("div",{className:"edit-icon-container",children:Object(p.jsxs)("div",{className:"edit-icon",children:[Object(p.jsx)("div",{className:"icon",children:Object(p.jsx)("img",{src:"/img/edit-icon.svg",alt:"edit-icon",style:{width:"12px",height:"auto",marginRight:"5px"}})}),Object(p.jsx)("span",{children:"Edit"})]})})})]})})]}),Object(p.jsxs)("div",{className:"review-container",children:[Object(p.jsxs)("div",{className:"review-header-container",children:[Object(p.jsx)("div",{className:"icon-container",children:Object(p.jsx)("img",{src:"/img/declaration-icon.svg",alt:"claim-details-icon",style:{width:"30px",height:"auto",marginRight:"10px"}})}),Object(p.jsx)("div",{className:"virtual-card-heading-text",children:"Declaration"})]}),Object(p.jsxs)("div",{className:"declaration-container pl-2",children:[Object(p.jsx)("div",{className:"checkbox-text",children:Object(p.jsx)(h.a,{onChange:g,children:"I declare that all information are true"})}),Object(p.jsx)("div",{className:"notice-container",children:Object(p.jsxs)("div",{className:"notice-text-decl my-3",children:[Object(p.jsx)("b",{children:"Important Notice:"})," In accordance to the provisions of the Personal Data Protection Act 2012 (PDPA),the UOI's privacy notice shall form part of the terms and conditions of the policy. A copy of UOI's Privacy  Notice can be found at www.uoi.com.sg"]})}),Object(p.jsx)("div",{className:"single-detail-entry-container",children:Object(p.jsxs)("div",{className:"label-field-container",children:[Object(p.jsx)("div",{className:"label",children:"User Name*"}),Object(p.jsx)("div",{style:{marginTop:"15px"},children:Object(p.jsx)(b.a,{placeholder:"Payee Name"})})]})}),Object(p.jsx)("div",{className:"ip-address-holder mt-1",children:"197.184.163.130"})]}),Object(p.jsx)("div",{className:"checkbox-text my-3",children:Object(p.jsx)(h.a,{onChange:g,children:"I/We declare that the information given in this claim form is true and correct to the best of my knowledge and belief.I/We undertake to render every assistance on my/our power in dealing with the matter.I hereby authorize any hospital physician, other person who has attended or examined me, to furnish to the Company, or its authorized representative, any and all information with respect to any illness or injury, medical history, consultation, prescriptions or treatment and copies of all hospital or medical records. A digital copy of this authorization shall be considered as effective and valid as the original."})})]})]})}}}]);
//# sourceMappingURL=37.55a51029.chunk.js.map