(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[42],{462:function(e,t,s){"use strict";var a=s(0),n=s.n(a),r=s(477),c=s(1),o=n.a.forwardRef((function(e,t){return Object(c.jsx)(r.a,{component:e.svg,className:e.className})}));t.a=o},477:function(e,t,s){"use strict";var a=s(3),n=s(5),r=s(14),c=s(0),o=s(6),i=s.n(o),l=s(106),u=s(67),d=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],m=c.forwardRef((function(e,t){var s=e.className,o=e.component,m=e.viewBox,j=e.spin,h=e.rotate,g=e.tabIndex,b=e.onClick,p=e.children,x=Object(r.a)(e,d);Object(u.g)(Boolean(o||p),"Should have `component` prop or `children`."),Object(u.f)();var O=c.useContext(l.a).prefixCls,f=void 0===O?"anticon":O,v=i()(f,s),w=i()(Object(n.a)({},"".concat(f,"-spin"),!!j)),y=h?{msTransform:"rotate(".concat(h,"deg)"),transform:"rotate(".concat(h,"deg)")}:void 0,N=Object(a.a)(Object(a.a)({},u.e),{},{className:w,style:y,viewBox:m});m||delete N.viewBox;var k=g;return void 0===k&&b&&(k=-1),c.createElement("span",Object(a.a)(Object(a.a)({role:"img"},x),{},{ref:t,tabIndex:k,onClick:b,className:v}),o?c.createElement(o,Object(a.a)({},N),p):p?(Object(u.g)(Boolean(m)||1===c.Children.count(p)&&c.isValidElement(p)&&"use"===c.Children.only(p).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),c.createElement("svg",Object(a.a)(Object(a.a)({},N),{},{viewBox:m}),p)):null)}));m.displayName="AntdIcon",t.a=m},492:function(e,t,s){"use strict";var a=s(468),n=s.n(a),r=s(12),c=s(520).a(),o=s(34),i=s(274),l=n.a.create({baseURL:r.a,timeout:6e4}),u="/auth/login";l.interceptors.request.use((function(e){var t=localStorage.getItem(o.b);return t&&(e.headers.authorization=t),t||e.headers["public-request"]||(c.push(u),window.location.reload()),e}),(function(e){i.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((function(e){return e.data}),(function(e){var t={message:""};return 400!==e.response.status&&403!==e.response.status||(t.message="Authentication Fail",t.description="Please login again",localStorage.removeItem(o.b),c.push(u),window.location.reload()),404===e.response.status&&(t.message="Not Found"),500===e.response.status&&(t.message="Internal Server Error"),508===e.response.status&&(t.message="Time Out"),i.a.error(t),Promise.reject(e)}));var d=l,m={login:function(e){return d({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return d({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};t.a=m},519:function(e,t,s){"use strict";var a=s(27),n=s.n(a),r=s(94),c=s(78),o=s(0),i=s(39),l=s(710),u=s(703),d=s(436),m=s(109),j=s(665),h=s(716),g=(s(461),s(462),s(54)),b=s(492),p=s(45),x=s(521),O=s(468),f=s.n(O),v=s(1),w=function(e){var t=Object(p.g)(),s=Object(o.useState)(""),a=Object(c.a)(s,2),i=a[0],g=a[1],O=Object(o.useState)(""),w=Object(c.a)(O,2),y=w[0],N=w[1],k=Object(o.useState)(null),I=Object(c.a)(k,2),C=I[0],P=I[1],B=function(){var e=Object(r.a)(n.a.mark((function e(t){var s,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f.a.post("https://api.stntinternational.com/api/auth/login",{username:i,password:y});case 4:s=e.sent,a=s.data,localStorage.setItem("token",a.token),window.location.href="/app/dashboard",e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),P("Invalid username or password");case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),S=e.otherSignIn,M=e.showForgetPassword,A=e.hideAuthMessage,E=e.onForgetPasswordClick,F=e.showLoading,T=e.extra,q=e.loading,L=e.showMessage,R=e.message,z=e.authenticated,J=e.showAuthMessage,U=e.token,D=e.redirect,V=e.allowRedirect;Object(o.useEffect)((function(){null!==U&&V&&t.push(D),L&&setTimeout((function(){A()}),3e3)}));var W=Object(v.jsx)("div",{});return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(x.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:L?1:0,marginBottom:L?20:0},children:Object(v.jsx)(l.a,{type:"error",showIcon:!0,message:R})}),Object(v.jsxs)(u.a,{layout:"vertical",name:"login-form",onFinish:function(e){F();b.a.login(e).then((function(e){z("fakeToken")})).then((function(e){J(e)}))},children:[Object(v.jsx)(u.a.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please input your email"},{type:"email",message:"Please enter a valid email!"}],children:Object(v.jsx)(d.a,{value:"username",onChange:function(e){return g(e.target.value)},prefix:Object(v.jsx)(j.a,{className:"text-primary"})})}),Object(v.jsx)(u.a.Item,{name:"password",label:Object(v.jsxs)("div",{className:"".concat(M?"d-flex justify-content-between w-100 align-items-center":""),children:[Object(v.jsx)("span",{children:"Password"}),M&&Object(v.jsx)("span",{onClick:function(){return E},className:"cursor-pointer font-size-sm font-weight-normal text-muted",children:"Forget Password?"})]}),rules:[{required:!0,message:"Please input your password"}],children:Object(v.jsx)(d.a.Password,{value:"password",onChange:function(e){return N(e.target.value)},prefix:Object(v.jsx)(h.a,{className:"text-primary"})})}),C&&Object(v.jsx)("p",{style:{color:"red"},children:C}),Object(v.jsx)(u.a.Item,{children:Object(v.jsx)(m.a,{type:"primary",htmlType:"submit",block:!0,loading:q,style:{backgroundColor:"#41C1B2",border:"none"},onClick:B,children:"Log In"})}),S?W:null,T]})]})};w.defaultProps={otherSignIn:!0,showForgetPassword:!1};var y={showAuthMessage:g.c,showLoading:g.d,hideAuthMessage:g.b,authenticated:g.a};t.a=Object(i.b)((function(e){var t=e.auth;return{loading:t.loading,message:t.message,showMessage:t.showMessage,token:t.token,redirect:t.redirect}}),y)(w)},655:function(e,t,s){},694:function(e,t,s){"use strict";s.r(t);var a=s(15),n=(s(0),s(519)),r=s(484),c=s(485),o=s(39),i=(s(655),s(1));"url(".concat("/img/others/login-page-bg.svg",")");t.default=function(e){var t=Object(o.c)((function(e){return e.theme.currentTheme}));return Object(i.jsx)("div",{className:"h-100 ".concat("light"===t?"bg-white":""),children:Object(i.jsxs)(r.a,{justify:"center",className:"align-items-stretch h-100",children:[Object(i.jsx)(c.a,{xs:0,sm:0,md:0,lg:10,children:Object(i.jsxs)("div",{className:"bg-holder",children:[Object(i.jsx)("div",{className:"vector-holder",children:Object(i.jsx)("img",{src:"/img/others/login-vector.png",alt:"vector",className:"img-fluid"})}),Object(i.jsxs)("div",{className:"welcome-note",children:["Welcome to",Object(i.jsx)("br",{}),"STNT CRM"]}),Object(i.jsx)("div",{className:"design-element-1"}),Object(i.jsx)("div",{className:"design-element-2"})]})}),Object(i.jsx)(c.a,{xs:20,sm:20,md:24,lg:14,children:Object(i.jsxs)("div",{className:"container d-flex flex-column justify-content-center h-100",children:[Object(i.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(i.jsx)("img",{src:"/img/stntlogo.svg",alt:"logo",className:"logo"})}),Object(i.jsx)(r.a,{justify:"center",children:Object(i.jsxs)(c.a,{xs:24,sm:24,md:20,lg:12,xl:8,children:[Object(i.jsx)("div",{style:{textAlign:"center"},children:Object(i.jsx)("h1",{children:"Login"})}),Object(i.jsx)("p",{style:{textAlign:"center"},children:"Please enter username & password below to get started."}),Object(i.jsx)("div",{className:"mt-4",children:Object(i.jsx)(n.a,Object(a.a)({},e))})]})})]})})]})})}}}]);
//# sourceMappingURL=42.8d2892c5.chunk.js.map