(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[49],{559:function(e,t,s){},703:function(e,t,s){"use strict";s.r(t);var i=s(15),a=s(0),n=s(507),r=s(554),c=s.n(r),o=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[].concat(o),dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},d=Object(i.a)({},l),j={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[].concat(o),dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"".concat(e)}}}},x=([].concat(o),s(556)),h=s(33),b=s(1),u={position:"absolute",zIndex:"1"},m={position:"absolute",zIndex:"1",right:"0",top:"-2px",marginLeft:"20px"},f=function(e){var t=e.title,s=e.series,r=e.width,o=e.height,f=e.xAxis,p=e.customOptions,O=e.card,v=e.type,g=e.extra,y=e.direction,w=e.bodyClass,N=function(e){switch(e){case"line":return l;case"bar":return j;case"area":return d;default:return l}}(v),A=window.innerWidth<768,B=function(){if(F.current){var e,t=F.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight="".concat(A?0:null===(e=C.current)||void 0===e?void 0:e.offsetWidth,"px"),y===h.b&&(t.style.right="auto",t.style.left="0"),A&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};Object(a.useEffect)((function(){B()}),[]);var C=Object(a.useRef)(null),F=Object(a.useRef)();N.xaxis.categories=f,p&&(N=Object(i.a)(Object(i.a)({},N),p));var M=function(){return Object(b.jsx)(x.a,{onResize:void setTimeout((function(){B()}),600),children:Object(b.jsx)("div",{style:y===h.b?{direction:"ltr"}:{},className:"chartRef",ref:F,children:Object(b.jsx)(c.a,{options:N,type:v,series:s,width:r,height:o})})})};return Object(b.jsx)(b.Fragment,{children:O?Object(b.jsx)(n.a,{children:Object(b.jsxs)("div",{className:"position-relative ".concat(w),children:[Object(b.jsx)("div",{style:A?{}:u,children:t})&&Object(b.jsx)("h4",{className:"font-weight-bold",style:A?{}:u,children:t}),g&&Object(b.jsx)("div",{ref:C,style:A?{}:m,children:g}),M()]})}):M()})};f.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};var p=f,O=(s(709),s(710),s(559),s(460));t.default=function(){var e={series:[{name:"<30",data:[45,52,38,24,33]},{name:"31-60",data:[35,41,62,42,13]},{name:">60",data:[41,62,35,13,35]}],categories:["Jan","Feb","Mar","Apr","May","Jun"]},t={series:[{name:"Singapore",data:[45,52,38,24,33]},{name:"Brunei",data:[35,41,62,42,13]},{name:"Malaysia",data:[41,62,35,13,35]}],categories:["Jan","Feb","Mar","Apr","May","Jun"]},s={series:[{name:"Singapore",data:[35,41,62,42,13,18,29]},{name:"Brunei",data:[41,35,62,20,45,22,56]},{name:"Malaysia",data:[30,80,90,42,45,8,89]}],categories:["JAN 22","FEB 22","MAR 22","APR 22","MAY 22","JUN 22","JUL 22"]};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"w-100 d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes ml-0",children:[Object(b.jsx)(O.k,{}),Object(b.jsxs)("div",{className:"position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText",children:[Object(b.jsx)("div",{children:"22"}),Object(b.jsx)("h5",{children:"Total Travelers"})]})]}),Object(b.jsxs)("div",{className:"w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes",children:[Object(b.jsx)(O.l,{}),Object(b.jsxs)("div",{className:"position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText",children:[Object(b.jsx)("div",{children:"22"}),Object(b.jsx)("h5",{children:"Total Agency"})]})]}),Object(b.jsxs)("div",{className:"w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes",children:[Object(b.jsx)(O.i,{}),Object(b.jsxs)("div",{className:"position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText",children:[Object(b.jsx)("div",{children:"22"}),Object(b.jsx)("h5",{children:"Claim Requests"})]})]}),Object(b.jsxs)("div",{className:"w-25 d-flex justify-content-center align-items-center position-relative DashboardColorBoxes mr-0",children:[Object(b.jsx)(O.j,{}),Object(b.jsxs)("div",{className:"position-absolute d-flex align-items-center justify-content-center flex-column DashboardBoxText",children:[Object(b.jsx)("div",{children:"22"}),Object(b.jsx)("h5",{children:"Approved Claims"})]})]})]}),Object(b.jsxs)("div",{className:"d-flex mt-3",children:[Object(b.jsx)("div",{className:"w-50",children:Object(b.jsx)("div",{className:"mr-2",children:Object(b.jsx)(p,{title:"Travelers",series:s.series,xAxis:s.categories,height:400})})}),Object(b.jsx)("div",{className:"w-50",children:Object(b.jsx)("div",{className:"ml-2",children:Object(b.jsx)(p,{title:"Policy Packages",series:s.series,xAxis:s.categories,height:400})})})]}),Object(b.jsxs)("div",{className:"d-flex mt-3",children:[Object(b.jsx)("div",{className:"w-50",children:Object(b.jsx)("div",{className:"mr-2",children:Object(b.jsx)(p,{series:e.series,xAxis:e.categories,title:"Traveler by Age Group",height:410,type:"bar",customOptions:{colors:["#5A6ACF","#FF928E","#41C1B2"]}})})}),Object(b.jsx)("div",{className:"w-50",children:Object(b.jsx)("div",{className:"ml-2",children:Object(b.jsx)(p,{series:t.series,xAxis:t.categories,title:"Unique Visitors",height:410,type:"bar",customOptions:{colors:["#E8414E","#FCB323","#41C1B2"]}})})})]})]})}}}]);
//# sourceMappingURL=49.eea2d8cd.chunk.js.map