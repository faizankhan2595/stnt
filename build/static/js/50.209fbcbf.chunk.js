(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[50],{482:function(e,t,n){"use strict";var a=n(4),c=n(5),l=n(14),o=n(3),r=n(16),i=n(18),s=n(21),u=n(22),d=n(0),f=n.n(d),b=n(6),p=n.n(b),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(r.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,c=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),c&&c({target:Object(o.a)(Object(o.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var c="checked"in e?e.checked:e.defaultChecked;return a.state={checked:c},a}return Object(i.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,r=t.style,i=t.name,s=t.id,u=t.type,d=t.disabled,b=t.readOnly,h=t.tabIndex,v=t.onClick,m=t.onFocus,O=t.onBlur,j=t.onKeyDown,y=t.onKeyPress,x=t.onKeyUp,g=t.autoFocus,C=t.value,k=t.required,w=Object(l.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),N=Object.keys(w).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=w[t]),e}),{}),E=this.state.checked,P=p()(n,o,(e={},Object(c.a)(e,"".concat(n,"-checked"),E),Object(c.a)(e,"".concat(n,"-disabled"),d),e));return f.a.createElement("span",{className:P,style:r},f.a.createElement("input",Object(a.a)({name:i,id:s,type:u,required:k,readOnly:b,disabled:d,tabIndex:h,className:"".concat(n,"-input"),checked:!!E,onClick:v,onFocus:m,onBlur:O,onKeyUp:x,onKeyDown:j,onKeyPress:y,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:C},N)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(o.a)(Object(o.a)({},t),{},{checked:e.checked}):null}}]),n}(d.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=h},501:function(e,t,n){"use strict";var a=n(5),c=n(4),l=n(0),o=n(6),r=n.n(o),i=n(482),s=n(11),u=n(7),d=n(37),f=n(76),b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},p=l.createContext(null),h=function(e,t){var n=e.defaultValue,o=e.children,i=e.options,h=void 0===i?[]:i,v=e.prefixCls,m=e.className,O=e.style,j=e.onChange,y=b(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),x=l.useContext(f.b),C=x.getPrefixCls,k=x.direction,w=l.useState(y.value||n||[]),N=Object(u.a)(w,2),E=N[0],P=N[1],S=l.useState([]),I=Object(u.a)(S,2),K=I[0],D=I[1];l.useEffect((function(){"value"in y&&P(y.value||[])}),[y.value]);var F=function(){return h.map((function(e){return"string"===typeof e?{label:e,value:e}:e}))},T=C("checkbox",v),V="".concat(T,"-group"),M=Object(d.a)(y,["value","disabled"]);h&&h.length>0&&(o=F().map((function(e){return l.createElement(g,{prefixCls:T,key:e.value.toString(),disabled:"disabled"in e?e.disabled:y.disabled,value:e.value,checked:-1!==E.indexOf(e.value),onChange:e.onChange,className:"".concat(V,"-item"),style:e.style},e.label)})));var _={toggleOption:function(e){var t=E.indexOf(e.value),n=Object(s.a)(E);-1===t?n.push(e.value):n.splice(t,1),"value"in y||P(n);var a=F();null===j||void 0===j||j(n.filter((function(e){return-1!==K.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:E,disabled:y.disabled,name:y.name,registerValue:function(e){D((function(t){return[].concat(Object(s.a)(t),[e])}))},cancelValue:function(e){D((function(t){return t.filter((function(t){return t!==e}))}))}},B=r()(V,Object(a.a)({},"".concat(V,"-rtl"),"rtl"===k),m);return l.createElement("div",Object(c.a)({className:B,style:O},M,{ref:t}),l.createElement(p.Provider,{value:_},o))},v=l.forwardRef(h),m=l.memo(v),O=n(43),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n},y=function(e,t){var n,o=e.prefixCls,s=e.className,u=e.children,d=e.indeterminate,b=void 0!==d&&d,h=e.style,v=e.onMouseEnter,m=e.onMouseLeave,y=e.skipGroup,x=void 0!==y&&y,g=j(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),C=l.useContext(f.b),k=C.getPrefixCls,w=C.direction,N=l.useContext(p),E=l.useRef(g.value);l.useEffect((function(){null===N||void 0===N||N.registerValue(g.value),Object(O.a)("checked"in g||!!N||!("value"in g),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),l.useEffect((function(){if(!x)return g.value!==E.current&&(null===N||void 0===N||N.cancelValue(E.current),null===N||void 0===N||N.registerValue(g.value)),function(){return null===N||void 0===N?void 0:N.cancelValue(g.value)}}),[g.value]);var P=k("checkbox",o),S=Object(c.a)({},g);N&&!x&&(S.onChange=function(){g.onChange&&g.onChange.apply(g,arguments),N.toggleOption&&N.toggleOption({label:u,value:g.value})},S.name=N.name,S.checked=-1!==N.value.indexOf(g.value),S.disabled=g.disabled||N.disabled);var I=r()((n={},Object(a.a)(n,"".concat(P,"-wrapper"),!0),Object(a.a)(n,"".concat(P,"-rtl"),"rtl"===w),Object(a.a)(n,"".concat(P,"-wrapper-checked"),S.checked),Object(a.a)(n,"".concat(P,"-wrapper-disabled"),S.disabled),n),s),K=r()(Object(a.a)({},"".concat(P,"-indeterminate"),b));return l.createElement("label",{className:I,style:h,onMouseEnter:v,onMouseLeave:m},l.createElement(i.a,Object(c.a)({},S,{prefixCls:P,className:K,ref:t})),void 0!==u&&l.createElement("span",null,u))},x=l.forwardRef(y);x.displayName="Checkbox";var g=x,C=g;C.Group=m,C.__ANT_CHECKBOX=!0;t.a=C},665:function(e,t,n){"use strict";n.r(t);var a=n(78),c=n(0),l=n(699),o=n(436),r=n(501),i=n(109),s=n(700),u=n(701),d=n(486),f=n.n(d),b=n(45),p=n(1);t.default=function(){var e=l.a.useForm(),t=Object(a.a)(e,1)[0],n=Object(b.g)(),d=Object(c.useState)(!1),h=Object(a.a)(d,2),v=h[0],m=h[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)(l.a,{layout:"vertical",onFinish:function(e){console.log("Success:",e),m(!0),setTimeout((function(){m(!1),setTimeout((function(){n.push("/app/claim_document_manager")}),400)}),900)},form:t,name:"control-hooks",children:[Object(p.jsxs)("div",{className:"p-3 bg-white rounded border",children:[Object(p.jsx)("h5",{className:"text-info m-0",children:"Add New Claim Category"}),Object(p.jsx)("div",{style:{width:"60%"},className:"mt-4",children:Object(p.jsx)(l.a.Item,{name:"Title",label:"Claim Category Title",rules:[{required:!0,message:"Please enter Claim Category Title*"}],children:Object(p.jsx)(o.a,{placeholder:"Title"})})}),Object(p.jsx)("div",{style:{width:"60%"},children:Object(p.jsx)(l.a.Item,{name:"Description",label:"Description (if any)",children:Object(p.jsx)(f.a,{placeholder:"Type here..."})})}),Object(p.jsx)("div",{style:{width:"60%"},children:Object(p.jsx)(l.a.Item,{name:"Claim_Category",label:"Associate Claim Category With",children:Object(p.jsx)(r.a.Group,{options:["Regular","Silver","Deluxe"],onChange:function(e){console.log("checked = ",e)}})})})]}),Object(p.jsx)(l.a.Item,{children:Object(p.jsxs)("div",{style:{gap:"10px"},className:"mt-5 d-flex justify-content-end",children:[Object(p.jsx)(i.a,{className:"px-4 font-weight-semibold",htmlType:"button",children:"Cancel"}),Object(p.jsx)(i.a,{className:"px-4 font-weight-semibold text-white bg-info",htmlType:"submit",children:"Save"})]})})]}),Object(p.jsx)(s.a,{width:600,footer:null,visible:v,onCancel:function(){return m(!1)},children:Object(p.jsx)(u.a,{status:"success",title:"New Claim Category Added Successfully!"})})]})}}}]);
//# sourceMappingURL=50.209fbcbf.chunk.js.map