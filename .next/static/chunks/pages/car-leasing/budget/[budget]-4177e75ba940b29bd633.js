_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[94],{Ghas:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c=n("nKUr"),i=n("vJKn"),l=n.n(i),a=n("rg98"),s=n("q1tI"),r=n("l6Ha"),o=n("Phwu"),d=n("FU9X"),b=n("A83Z"),u=n("qPfW"),j=n("UG5Z"),h=n("wbKs"),x=function(e){var t=e.leasingDealType,n=e.title,i=e.description,x=e.vehicleFilter,m=e.modelPreviews,p=e.topPicks,f=Object(s.useState)(0),O=f[0],v=f[1],g=Object(s.useState)(0),w=g[0],N=g[1],k=Object(s.useState)("OrderPrice"),C=k[0],S=k[1],_=Object(s.useState)("ASC"),y=_[0],P=_[1],D=Object(s.useState)(m),T=D[0],E=D[1];Object(s.useEffect)((function(){Promise.resolve(M(C,y)).then((function(e){E(e.data),v(e.data.totalVehiclesCount),N(e.data.totalItemsCount)}))}),[t,C,y]);var H=function(e,t){S(e),P(t)},M=function(){var e=Object(a.a)(l.a.mark((function e(t,n){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={sortBy:t,sortDirection:n},i={pageSize:9999,pageIndex:1},e.next=4,Object(h.K)(x,i,c);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{children:[Object(c.jsxs)("div",{className:"container-fluid pt-4 pb-5 py-md-4",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24 d-flex align-items-center mb-4",children:Object(c.jsx)("h1",{className:"m-0",children:n})})}),i&&Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24",children:Object(c.jsx)(r.a,{theme:"light",children:i})})})]}),Object(c.jsxs)("div",{className:"container-fluid py-5 bg-light-grey",children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-24 col-md-18",children:Object(c.jsxs)("h3",{className:"mb-3 mb-md-5",children:[Object(c.jsx)("mark",{className:"mark-text",children:O})," Matching Deals from ",Object(c.jsx)("mark",{className:"mark-text",children:w})," Matching Models"]})}),Object(c.jsx)("div",{className:"col-24 col-md-6 mb-3 mb-md-0",children:Object(c.jsxs)(u.a,{indicator:!0,active:"Price Low-High",wrapperClass:"w-100",buttonClass:"btn-block bg-white text-left",buttonText:"Sort by",children:[Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("OrderPrice","DESC")},children:"Price High-Low"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("OrderPrice","ASC")},children:"Price Low-High"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("Seats","DESC")},children:"Seats High-Low"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("Seats","ASC")},children:"Seats Low-High"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("EngineSize","DESC")},children:"Engine Size High-Low"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("EngineSize","ASC")},children:"Engine Size Low-High"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("Mpg","DESC")},children:"MPG High-Low"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("Mpg","ASC")},children:"MPG Low-High"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("CO2","DESC")},children:"CO2 High-Low"}),Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return H("CO2","ASC")},children:"CO2 Low-High"})]})})]}),Object(c.jsx)("div",{className:"row",children:T.dataItems.map((function(e){return Object(c.jsx)("div",{className:"col-24 col-md-12 col-lg-6 d-flex",children:Object(c.jsx)(o.a,{isATC:!1,vehicle:e,dealSelector:t})},"model-".concat(e.vehicleRef))}))})]})]}),p&&Object(c.jsxs)("section",{className:"container-fluid py-5 bg-white",children:[Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24",children:Object(c.jsx)("h2",{className:"mb-3 mb-md-5",children:"Customers Also Viewed..."})})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)("div",{className:"col-24",children:Object(c.jsx)(j.a,{children:Object(c.jsx)(b.a,{tabletArrows:!0,desktopArrows:!0,infinite:p.length>3,children:p.map((function(e){return Object(c.jsx)(d.a,{id:"picked-".concat(e.vehicleRef),isATC:!1,vehicle:e,dealSelector:t,showStickers:!1},"featured-".concat(e.vehicleRef))}))})})})})]})]})}},dvJK:function(e,t,n){e.exports={"expandable-text":"expandable-text_expandable-text__sWgd9","is-limited":"expandable-text_is-limited__1kNcL","expandable-text__inner":"expandable-text_expandable-text__inner__M62dL","is-open":"expandable-text_is-open__1Y0kQ","expandable-text--dark":"expandable-text_expandable-text--dark__2V0DV"}},l6Ha:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var c=n("nKUr"),i=n("q1tI"),l=n.n(i),a=n("i8i4"),s=n.n(a),r=n("dvJK"),o=n.n(r),d=n("qPfW"),b=n("IP2g"),u=n("4Bjl"),j=n("wHSu"),h=n("zjkP"),x=function(e){var t=e.children,n=e.theme,a=e.isATC,r=void 0!==a&&a,x=e.galleryButton,m=void 0!==x&&x,p=e.reviewButton,f=void 0!==p&&p,O=e.modelDropDown,v=void 0!==O&&O,g=e.modelDropDownData,w=e.vehicleFilter,N=e.leasingDealType,k=e.handleModelChange,C=e.handleScrollToTabs,S=l.a.useRef(),_=Object(i.useState)(!1),y=_[0],P=_[1],D=Object(i.useState)(!1),T=D[0],E=D[1];return Object(i.useEffect)((function(){var e=s.a.findDOMNode(S.current).clientHeight,t=0;t=window.innerWidth>767?200:100,e&&e>t&&P(!0)}),[]),Object(c.jsxs)("div",{className:"".concat(o.a["expandable-text"]," ").concat("dark"===n?o.a["expandable-text--dark"]:""," ").concat(y&&!T?o.a["is-limited"]:""," ").concat(T?o.a["is-open"]:""),children:[Object(c.jsx)("div",{ref:S,className:o.a["expandable-text__inner"],dangerouslySetInnerHTML:{__html:t}}),y&&Object(c.jsxs)("button",{role:"button",className:"btn ".concat("dark"===n?"btn-outline-light":"btn-outline-black"," btn-labeled btn-labeled--right ").concat(T?"btn-labeled--rotate":""," ").concat(m&&f?"":"btn-block-xs"," btn-fluid btn-lg mr-sm-3 mt-3"),onClick:function(e){return function(e){e.preventDefault(),E(!T)}(e)},children:[Object(c.jsx)("span",{className:"btn-text",children:T?"Show less":"Read more"}),Object(c.jsx)("span",{className:"btn-label",children:Object(c.jsx)(b.a,{width:"17",height:"17",icon:u.c})})]}),m&&Object(c.jsxs)("button",{role:"button",onClick:function(){return C("gallery")},className:"btn ".concat(r?"btn-outline-light":"btn-outline-primary"," btn-labeled btn-fluid btn-lg mr-3 d-none d-md-inline-block mt-3"),children:[Object(c.jsx)("span",{className:"btn-label",children:Object(c.jsx)(b.a,{width:"16",height:"16",icon:j.l})}),Object(c.jsx)("span",{className:"btn-text",children:"View Gallery"})]}),f&&Object(c.jsxs)("button",{role:"button",onClick:function(){return C("review")},className:"btn ".concat(r?"btn-outline-light":"btn-outline-primary"," btn-labeled btn-fluid btn-lg d-none d-md-inline-block mt-3"),children:[Object(c.jsx)("span",{className:"btn-label",children:Object(c.jsx)(b.a,{width:"16",height:"16",icon:u.d})}),Object(c.jsx)("span",{className:"btn-text",children:"View Review"})]}),v&&g&&Object(c.jsx)(d.a,{wrapperClass:"w-100-xs float-md-right",buttonClass:"".concat(r?" btn-outline-light":"btn-outline-primary"," btn-fluid btn-lg btn-block-xs mt-3"),buttonText:"Quick model select",children:null===g||void 0===g?void 0:g.map((function(e){return Object(c.jsx)("button",{type:"button",className:"text-left",onClick:function(){return k(Object(h.k)(N)+"/"+(null===w||void 0===w?void 0:w.manufacturerUrl)+"/"+e.shortModTextUrl)},children:e.shortModText},e.shortModText)}))})]})}},n7O3:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return r}));var c=n("nKUr"),i=(n("q1tI"),n("/MKj")),l=n("z+X5"),a=n("Ghas");var s=function(e){var t=e.leasingDealType,n=e.title,i=e.description,l=e.vehicleFilter,s=e.modelPreviews,r=e.topPicks;return Object(c.jsx)(a.a,{leasingDealType:t,title:n,description:i,vehicleFilter:l,modelPreviews:s,topPicks:r})};s.layout=l.a;var r=!0;t.default=Object(i.b)((function(e){return{leasingDealType:e.dealSelector}}))(s)},v4z8:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/car-leasing/budget/[budget]",function(){return n("n7O3")}])}},[["v4z8",0,1,4,6,8,5,11,18,2,3,7,9,10,12,14,15,17,26]]]);