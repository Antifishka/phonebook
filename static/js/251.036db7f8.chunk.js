"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[251],{8251:function(n,e,r){r.r(e),r.d(e,{default:function(){return B}});var t,i,o,a,s,l,u=r(111),d=r(9434),c=r(8724),m=r(168),p=r(6088),h=r(8445),f=r(1607),x=p.Z.form(t||(t=(0,m.Z)(["\n    display: flex;\n    flex-direction: column;\n    gap: ","px;\n    max-width: ",";\n    padding: ","px;\n    margin-left: auto;\n    margin-right: auto;\n\n    background-color: ",";\n    border-radius: ",";\n    box-shadow: ",";\n\n    text-align: center;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.sizes.formWidth}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.radii.box}),(function(n){return n.theme.shadows.box})),g=p.Z.label(i||(i=(0,m.Z)(["\n    position: relative;   \n    width: 100%;\n    text-align: left;\n    font-size: ",";\n\n    :focus-within{\n        color: ",";\n    }\n"])),(function(n){return f.r.fontSizes.s}),(function(n){return n.theme.colors.accent})),b=p.Z.input(o||(o=(0,m.Z)(["\n    margin-top: ","px; \n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: 26px;\n    padding-right: ","px;\n    width: 100%;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: ",";\n\n    font: inherit;\n    font-size: ",";\n\n    background-color: #fff;\n\n    ::placeholder {\n        font-size: ",";\n    }\n"])),(function(n){return n.theme.space[1]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.normal}),(function(n){return f.r.fontSizes.m}),(function(n){return f.r.fontSizes.s})),j=p.Z.div(a||(a=(0,m.Z)(["\n    position: absolute;\n    top: 30px;\n    left: ","px;\n"])),(function(n){return n.theme.space[3]})),w=(0,p.Z)(h.O)(s||(s=(0,m.Z)(["\n    display: flex;\n    align-items: center;;\n    gap: ","px;\n    margin: 0 auto;\n    padding-top: ","px;\n    padding-bottom: ","px;\n    padding-left: ","px;\n    padding-right: ","px;\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]})),Z=p.Z.p(l||(l=(0,m.Z)(["\n    color: ",";\n"])),(function(n){return n.theme.colors.error})),z=r(6355),v=r(6856),S=r(5705),k=r(2797),q=r(184),y=k.Ry().shape({name:k.Z_().min(2,"Too Short!").max(30,"Too Long!").required("Name is required"),email:k.Z_().email("Invalid email").required("Email is required"),password:k.Z_().min(6,"Too Short!").required("Password is required")}),C=function(){var n=(0,d.I0)(),e=(0,S.TA)({initialValues:{name:"",email:"",password:""},validationSchema:y,onSubmit:function(e,r){var t=e.name,i=e.email,o=e.password,a=r.resetForm;console.log(t,i,o),n(c.ZP.register({name:t,email:i,password:o})),a()}}),r=e.values,t=e.errors,i=e.touched,o=e.handleBlur,a=e.handleChange,s=e.handleSubmit;return(0,q.jsxs)(x,{onSubmit:s,autoComplete:"off",children:[(0,q.jsx)(u.x,{fontSize:f.r.fontSizes.l,fontWeight:f.r.fontWeights.bold,as:"h2",children:"Register form"}),(0,q.jsxs)(g,{children:["Username",(0,q.jsx)(j,{children:(0,q.jsx)(z.dfI,{size:15})}),(0,q.jsx)(b,{type:"text",name:"name",value:r.name,placeholder:"Antifishka",onChange:a,onBlur:o}),t.name&&i.name&&(0,q.jsx)(Z,{children:t.name})]}),(0,q.jsxs)(g,{children:["Email",(0,q.jsx)(j,{children:(0,q.jsx)(v.ixJ,{size:15})}),(0,q.jsx)(b,{type:"email",name:"email",value:r.email,placeholder:"example@mail.com",onChange:a,onBlur:o}),t.email&&i.email&&(0,q.jsx)(Z,{children:t.email})]}),(0,q.jsxs)(g,{children:["Password",(0,q.jsx)(j,{children:(0,q.jsx)(v.Tmq,{size:15})}),(0,q.jsx)(b,{type:"password",name:"password",value:r.password,placeholder:"Example123",onChange:a,onBlur:o}),t.password&&i.password&&(0,q.jsx)(Z,{children:t.password})]}),(0,q.jsx)(w,{type:"submit",children:"Register"})]})},T=r(4270);function B(){return(0,q.jsxs)(u.x,{pt:"16px",as:"main",children:[(0,q.jsx)(T.q,{children:(0,q.jsx)("title",{children:"Registration"})}),(0,q.jsx)(C,{})]})}}}]);
//# sourceMappingURL=251.036db7f8.chunk.js.map