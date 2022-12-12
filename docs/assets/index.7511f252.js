import{g as k,h as g,x as R,P as L,r as a,o as U,c as M,b as e,w as t,s as x,bM as N,a as V,F as j,N as z,i as w,j as W,d as C}from"./index.2a72fe30.js";const I=["src"],O=k({__name:"Upload",props:{modelValue:Array},emits:["update:modelValue"],setup(b,{emit:D}){const i=b;let u=g([]);const F=g(""),_=g(!1),E=(n,r)=>{console.log(n,r)},d=(n,r)=>new Promise((m,c)=>{var p=new FileReader;let s=/\.jpg$|\.jpeg$|\.gif$|\.png$/i;p.readAsDataURL(n);let f=n.name;s.test(f)?p.onload=B=>{u.value.push({name:f,url:B.target.result}),D("update:modelValue",u.value),m(B.target.result)}:(z.error("\u8BF7\u4E0A\u4F20\u56FE\u7247"),c())}),l=n=>{F.value=n.url,_.value=!0};return R(()=>{L(()=>i.modelValue,n=>{u.value=n})}),(n,r)=>{const m=a("el-icon"),c=a("el-upload"),p=a("el-dialog");return U(),M(j,null,[e(c,{action:"","before-upload":d,"list-type":"picture-card","on-preview":l,"on-remove":E,"file-list":x(u)},{default:t(()=>[e(m,null,{default:t(()=>[e(x(N))]),_:1})]),_:1},8,["file-list"]),e(p,{modelValue:_.value,"onUpdate:modelValue":r[0]||(r[0]=s=>_.value=s),width:"80%",top:"80px"},{default:t(()=>[V("img",{"w-full":"",src:F.value,alt:"\u9884\u89C8\u56FE\u7247",style:{width:"100%"}},null,8,I)]),_:1},8,["modelValue"])],64)}}}),S={style:{"max-width":"800px"}},T=V("span",{class:"text-gray-500"},"-",-1),H=k({__name:"index",setup(b){const D=g("default"),i=g(),u=w({name:"\u8DD1\u6B65",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:"",img:[]}),F=w({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6D3B\u52A8\u540D\u79F0\u6D3B\u52A8\u533A\u57DF",trigger:"blur"},{min:3,max:5,message:"\u957F\u5EA6\u5728 3 \u5230 5 \u4E2A\u5B57\u7B26",trigger:"blur"}],img:[{required:!0,message:"\u8BF7\u4E0A\u4F20\u56FE\u7247",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u9009\u62E9\u6D3B\u52A8\u533A\u57DF",trigger:"change"}],date1:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],date2:[{type:"date",required:!0,message:"\u8BF7\u9009\u62E9\u65F6\u95F4",trigger:"change"}],type:[{type:"array",required:!0,message:"\u8BF7\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u6D3B\u52A8\u6027\u8D28",trigger:"change"}],resource:[{required:!0,message:`\u8BF7\u9009\u62E9\u6D3B\u52A8\u8D44\u6E90
`,trigger:"change"}],desc:[{required:!0,message:"\u8BF7\u586B\u5199\u6D3B\u52A8\u5F62\u5F0F",trigger:"blur"}]}),_=async d=>{console.log("--FORM---",u)},E=d=>{!d||d.resetFields()};return(d,l)=>{const n=a("el-input"),r=a("el-form-item"),m=a("el-option"),c=a("el-select"),p=a("el-date-picker"),s=a("el-col"),f=a("el-time-picker"),B=a("el-switch"),A=a("el-checkbox"),q=a("el-checkbox-group"),y=a("el-radio"),$=a("el-radio-group"),v=a("el-button"),h=a("el-form"),P=a("PageWrapLayout");return U(),W(P,null,{default:t(()=>[V("div",S,[e(h,{ref_key:"ruleFormRef",ref:i,model:u,rules:F,"label-width":"120px",class:"demo-ruleForm",size:D.value},{default:t(()=>[e(r,{label:"\u6D3B\u52A8\u540D\u79F0",prop:"name"},{default:t(()=>[e(n,{modelValue:u.name,"onUpdate:modelValue":l[0]||(l[0]=o=>u.name=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6D3B\u52A8\u533A\u57DF",prop:"region"},{default:t(()=>[e(c,{modelValue:u.region,"onUpdate:modelValue":l[1]||(l[1]=o=>u.region=o),placeholder:"\u6D3B\u52A8\u533A\u57DF"},{default:t(()=>[e(m,{label:"\u533A\u57DF1",value:"\u4E0A\u6D77"}),e(m,{label:"\u533A\u57DF2",value:"\u5317\u4EAC"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u5373\u65F6\u914D\u9001",required:""},{default:t(()=>[e(s,{span:11},{default:t(()=>[e(r,{prop:"date1"},{default:t(()=>[e(p,{modelValue:u.date1,"onUpdate:modelValue":l[2]||(l[2]=o=>u.date1=o),type:"date",placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(s,{class:"text-center",span:2,style:{"text-align":"center"}},{default:t(()=>[T]),_:1}),e(s,{span:11},{default:t(()=>[e(r,{prop:"date2"},{default:t(()=>[e(f,{modelValue:u.date2,"onUpdate:modelValue":l[3]||(l[3]=o=>u.date2=o),placeholder:"\u9009\u62E9\u65F6\u95F4",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(r,{label:"\u5373\u65F6\u914D\u9001",prop:"delivery"},{default:t(()=>[e(B,{modelValue:u.delivery,"onUpdate:modelValue":l[4]||(l[4]=o=>u.delivery=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u6D3B\u52A8\u6027\u8D28",prop:"type"},{default:t(()=>[e(q,{modelValue:u.type,"onUpdate:modelValue":l[5]||(l[5]=o=>u.type=o)},{default:t(()=>[e(A,{label:"\u7F8E\u98DF/\u9910\u5385\u7EBF\u4E0A\u6D3B\u52A8",name:"type"}),e(A,{label:"\u5730\u63A8\u6D3B\u52A8",name:"type"}),e(A,{label:"\u7EBF\u4E0B\u4E3B\u9898\u6D3B\u52A8",name:"type"}),e(A,{label:"\u5355\u7EAF\u54C1\u724C\u66DD\u5149",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u7279\u6B8A\u8D44\u6E90",prop:"resource"},{default:t(()=>[e($,{modelValue:u.resource,"onUpdate:modelValue":l[6]||(l[6]=o=>u.resource=o)},{default:t(()=>[e(y,{label:"\u7EBF\u4E0A\u54C1\u724C\u5546\u8D5E\u52A9"}),e(y,{label:"\u7EBF\u4E0B\u573A\u5730\u514D\u8D39"})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u4E0A\u4F20\u56FE\u7247",prop:"img"},{default:t(()=>[e(O,{modelValue:u.img,"onUpdate:modelValue":l[7]||(l[7]=o=>u.img=o)},null,8,["modelValue"])]),_:1}),e(r,{label:"\u5907\u6CE8",prop:"desc"},{default:t(()=>[e(n,{modelValue:u.desc,"onUpdate:modelValue":l[8]||(l[8]=o=>u.desc=o),type:"textarea"},null,8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(v,{type:"primary",onClick:l[9]||(l[9]=o=>_(i.value))},{default:t(()=>[C("\u7ACB\u5373\u521B\u5EFA")]),_:1}),e(v,{onClick:l[10]||(l[10]=o=>E(i.value))},{default:t(()=>[C("\u91CD\u7F6E")]),_:1})]),_:1})]),_:1},8,["model","rules","size"])])]),_:1})}}});export{H as default};
