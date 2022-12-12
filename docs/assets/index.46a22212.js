import{g as B,i,r,o as b,j as E,w as u,b as e,h as R,c as h,a as w,d as V,N as C,aP as U,_ as A}from"./index.2a72fe30.js";const T=B({__name:"FormOne",setup(x){const t=i({name:"",email:"",autograph:"",occupation:""}),l=i({name:{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:"blur"},email:{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",trigger:"blur"},autograph:{required:!0,message:"\u8BF7\u8F93\u5165\u767B\u9646\u8D26\u6237\u540D",trigger:"blur"}});return(c,m)=>{const o=r("el-input"),s=r("el-form-item"),n=r("el-col"),a=r("el-option"),_=r("el-select"),F=r("el-row"),g=r("el-form"),d=r("el-card");return b(),E(d,{header:"\u8868\u5355\u7EC4\u4EF61"},{default:u(()=>[e(g,{model:t,rules:l,ref:"formRuleOneRef","label-width":"100px"},{default:u(()=>[e(F,{gutter:35},{default:u(()=>[e(n,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(s,{label:"\u59D3\u540D",prop:"name"},{default:u(()=>[e(o,{modelValue:t.name,"onUpdate:modelValue":m[0]||(m[0]=p=>t.name=p),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(s,{label:"\u90AE\u7BB1",prop:"email"},{default:u(()=>[e(o,{modelValue:t.email,"onUpdate:modelValue":m[1]||(m[1]=p=>t.email=p),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u90AE\u7BB1",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(s,{label:"\u7528\u6237\u540D",prop:"autograph"},{default:u(()=>[e(o,{modelValue:t.autograph,"onUpdate:modelValue":m[2]||(m[2]=p=>t.autograph=p),placeholder:"\u8BF7\u8F93\u5165\u767B\u9646\u8D26\u6237\u540D",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(n,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(s,{label:"\u804C\u52A1",prop:"occupation"},{default:u(()=>[e(_,{modelValue:t.occupation,"onUpdate:modelValue":m[3]||(m[3]=p=>t.occupation=p),placeholder:"\u8BF7\u9009\u62E9\u804C\u52A1",clearable:""},{default:u(()=>[e(a,{label:"\u8BA1\u7B97\u673A / \u4E92\u8054\u7F51 / \u901A\u4FE1",value:"1"}),e(a,{label:"\u751F\u4EA7 / \u5DE5\u827A / \u5236\u9020",value:"2"}),e(a,{label:"\u533B\u7597 / \u62A4\u7406 / \u5236\u836F",value:"3"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}}),D=B({__name:"FormTwo",setup(x){const t=R(),l=i({phone:"",sex:"",password:"",auth:""}),c=i({phone:{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A",trigger:"blur"},password:{required:!0,message:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",trigger:"blur"},auth:{required:!0,message:"\u8BF7\u8F93\u5165\u6743\u9650\u89D2\u8272",trigger:"blur"}});return(m,o)=>{const s=r("el-input"),n=r("el-form-item"),a=r("el-col"),_=r("el-option"),F=r("el-select"),g=r("el-row"),d=r("el-form"),p=r("el-card");return b(),E(p,{header:"\u8868\u5355\u7EC4\u4EF62"},{default:u(()=>[e(d,{model:l,rules:c,ref_key:"formRuleTwoRef",ref:t,"label-width":"100px"},{default:u(()=>[e(g,{gutter:35},{default:u(()=>[e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u624B\u673A",prop:"phone"},{default:u(()=>[e(s,{modelValue:l.phone,"onUpdate:modelValue":o[0]||(o[0]=f=>l.phone=f),placeholder:"\u8BF7\u8F93\u5165\u624B\u673A",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u6027\u522B"},{default:u(()=>[e(F,{modelValue:l.sex,"onUpdate:modelValue":o[1]||(o[1]=f=>l.sex=f),placeholder:"\u8BF7\u9009\u62E9\u6027\u522B",clearable:"",class:"w100"},{default:u(()=>[e(_,{label:"\u7537",value:"1"}),e(_,{label:"\u5973",value:"2"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u767B\u5F55\u5BC6\u7801",prop:"password"},{default:u(()=>[e(s,{modelValue:l.password,"onUpdate:modelValue":o[2]||(o[2]=f=>l.password=f),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5BC6\u7801",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u6743\u9650\u89D2\u8272",prop:"auth"},{default:u(()=>[e(s,{modelValue:l.auth,"onUpdate:modelValue":o[3]||(o[3]=f=>l.auth=f),placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\u89D2\u8272",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}}),v=B({__name:"FormThree",setup(x){const t=R(),l=i({createUser:"",editUser:"",user:"",department:""}),c=i({createUser:{required:!0,message:"\u8BF7\u8F93\u5165\u521B\u5EFA\u7528\u6237",trigger:"blur"},editUser:{required:!0,message:"\u8BF7\u8F93\u5165\u4FEE\u6539\u7528\u6237",trigger:"blur"},user:{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7528\u6237",trigger:"blur"},department:{required:!0,message:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8",trigger:"blur"}});return(m,o)=>{const s=r("el-input"),n=r("el-form-item"),a=r("el-col"),_=r("el-row"),F=r("el-form"),g=r("el-card");return b(),E(g,{header:"\u8868\u5355\u7EC4\u4EF63"},{default:u(()=>[e(F,{model:l,rules:c,ref_key:"formRuleThreeRef",ref:t,"label-width":"100px"},{default:u(()=>[e(_,{gutter:35},{default:u(()=>[e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u521B\u5EFA\u7528\u6237",prop:"createUser"},{default:u(()=>[e(s,{modelValue:l.createUser,"onUpdate:modelValue":o[0]||(o[0]=d=>l.createUser=d),placeholder:"\u8BF7\u8F93\u5165\u521B\u5EFA\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u4FEE\u6539\u7528\u6237",prop:"editUser"},{default:u(()=>[e(s,{modelValue:l.editUser,"onUpdate:modelValue":o[1]||(o[1]=d=>l.editUser=d),placeholder:"\u8BF7\u8F93\u5165\u4FEE\u6539\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u6240\u5C5E\u7528\u6237",prop:"user"},{default:u(()=>[e(s,{modelValue:l.user,"onUpdate:modelValue":o[2]||(o[2]=d=>l.user=d),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u7528\u6237",clearable:""},null,8,["modelValue"])]),_:1})]),_:1}),e(a,{xs:24,sm:12,md:8,lg:6,xl:4},{default:u(()=>[e(n,{label:"\u6240\u5C5E\u90E8\u95E8",prop:"department"},{default:u(()=>[e(s,{modelValue:l.department,"onUpdate:modelValue":o[3]||(o[3]=d=>l.department=d),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])]),_:1})}}}),$={class:"m-more-form"},q={class:"footer"},k=B({__name:"index",setup(x){const{proxy:t}=U(),l=(s,n)=>new Promise(a=>{t.$refs[s].$refs[n].validate(_=>{_&&a(_)})}),c=()=>{t.$refs.formRuleOne.$refs.formRuleOneRef.resetFields(),t.$refs.formRuleTwo.$refs.formRuleTwoRef.resetFields(),t.$refs.formRuleThree.$refs.formRuleThreeRef.resetFields()},m=()=>{Promise.all([l("formRuleOne","formRuleOneRef"),l("formRuleTwo","formRuleTwoRef"),l("formRuleThree","formRuleThreeRef")]).then(s=>{C.success("\u8868\u5355\u5168\u90E8\u9A8C\u8BC1\u6210\u529F")})},o=()=>{c()};return(s,n)=>{const a=r("el-button");return b(),h("div",$,[e(T,{ref:"formRuleOne"},null,512),e(D,{ref:"formRuleTwo"},null,512),e(v,{ref:"formRuleThree"},null,512),w("div",q,[e(a,{onClick:o},{default:u(()=>[V("\u91CD\u7F6E")]),_:1}),e(a,{type:"primary",onClick:m},{default:u(()=>[V("\u9A8C\u8BC1\u8868\u5355")]),_:1})])])}}});const O=A(k,[["__scopeId","data-v-0f499c76"]]);export{O as default};
