(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[201],{poAI:function(e,t,r){"use strict";r.r(t);var n=r("cpVT"),c=r("nKUr"),o=r("btDt"),s=(r("q1tI"),r("MHX4")),b=r("/MKj"),a=r("hoA6");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(b.b)((function(e){return{formData:e.formData,stepNumber:e.stepIndicator}}))((function(e){var t=e.formData[e.stepNumber],r=Object(s.c)(),n=r.handleSubmit;return Object(c.jsxs)("div",{className:"w-100 bg-white p-3 p-md-5",children:[Object(c.jsx)("h2",{className:"mb-5",children:"Your Bank Details"}),Object(c.jsx)(s.b,u(u({},r),{},{children:Object(c.jsxs)("form",{onSubmit:n((function(t){e.handleFormSave(e.stepNumber,t)&&e.handleFormStep(e.stepNumber+1)})),children:[Object(c.jsx)(a.a,{showSortCodeLookup:!0,showAccountNumer:!0,showAccountName:!0,formData:t}),Object(c.jsxs)("div",{className:"form-row d-flex justify-content-end",children:[Object(c.jsx)("button",{type:"button",className:"btn btn-outline-secondary mr-3",onClick:function(){e.handleFormStep(e.stepNumber-1)},children:"Back"}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary btn-lg",onClick:function(){Object(o.d)("prop_form_tracking_soletrader","Click","bank-details-completed")},children:"Next"})]})]})}))]})}))}}]);