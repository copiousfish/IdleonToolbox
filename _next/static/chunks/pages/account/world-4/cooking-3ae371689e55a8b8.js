(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7851],{2169:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-4/cooking",function(){return l(1131)}])},6554:function(e,n,l){"use strict";var t=l(5893),i=l(7357),r=l(1458),o=l(5861);l(7294);let s=e=>{let{percent:n,bgColor:l,label:s=!0,sx:a,pre:c}=e;return(0,t.jsxs)(i.Z,{sx:{display:"flex",alignItems:"center"},children:[c,(0,t.jsx)(i.Z,{sx:{width:"100%",mr:1},children:(0,t.jsx)(r.Z,{sx:{width:"100%",height:10,borderRadius:5,"& .MuiLinearProgress-bar":{backgroundColor:l||""},...a},variant:"determinate",value:n>100?100:n})}),s?(0,t.jsx)(i.Z,{children:(0,t.jsx)(o.Z,{variant:"body2",color:"text.secondary",children:"".concat(Math.round(n),"%")})}):null]})};n.Z=s},3948:function(e,n,l){"use strict";var t=l(2729),i=l(5893),r=l(7294),o=l(6986),s=l(3913),a=l(9574),c=l(5934),d=l(5861);function u(){let e=(0,t._)(["\n  .overtime {\n    color: #f91d1d;\n  }\n"]);return u=function(){return e},e}let x=e=>{let{date:n,startDate:l,lastUpdated:t,stopAtZero:c,type:u,pause:x,staticTime:h,placeholder:v,loop:j,variant:p="inherit"}=e,[g,f]=(0,r.useState)();(0,r.useEffect)(()=>{if(n){if(h)return f({...(0,a.getDuration)(new Date().getTime(),n)});let e=new Date,l=e.getTime()-(null!=t?t:0),i=(0,s.Z)(n);f({...(0,a.getDuration)(null==e?void 0:e.getTime(),n+l*("countdown"===u?-1:1)),overtime:"countdown"===u&&i})}},[n,t]);let Z=()=>{let{days:e,hours:n,minutes:l,seconds:t}=g;60===(t+=1)&&(t=0,60===(l+=1)&&(l=0,24===(n+=1)&&(e+=1))),f({...g,days:e,hours:n,minutes:l,seconds:t})},w=()=>{let{days:e,hours:n,minutes:t,seconds:i}=g;if(0===e&&0===n&&0===t&&0===i){if(c)return;if(j)return f({...(0,a.getDuration)(new Date().getTime(),l)})}-1==(i-=1)&&(i=59,-1==(t-=1)&&(t=59,-1==(n-=1)&&(n=0,e-=1))),f({...g,days:e,hours:n,minutes:t,seconds:i})};(0,o.Z)(()=>{if(!g)return null;"countdown"!==u||(null==g?void 0:g.overtime)?Z():w()},x||h?null:1e3);let b=e=>{let n=String(e);return(null==n?void 0:n.length)===1?"0".concat(e):e};return g?(0,i.jsx)(m,{children:((null==g?void 0:g.overtime)||x)&&v?v:(0,i.jsxs)(d.Z,{variant:p,className:"".concat((null==g?void 0:g.overtime)&&!j?"overtime":""),component:"span",children:[(null==g?void 0:g.days)?b(null==g?void 0:g.days)+"d:":"",b(null==g?void 0:g.hours)+"h:",b(null==g?void 0:g.minutes)+"m",(null==g?void 0:g.days)?"":":",(null==g?void 0:g.days)?"":b(null==g?void 0:g.seconds)+"s"]})}):null},m=c.Z.span(u());n.Z=x},1131:function(e,n,l){"use strict";l.r(n),l.d(n,{default:function(){return q}});var t=l(5893),i=l(8396),r=l(5861),o=l(1703),s=l(44),a=l(7294),c=l(9597),d=l(2729),u=l(6242),x=l(4267),m=l(6447),h=l(7720),v=l(9574),j=l(1053),p=l(3948),g=l(1994),f=l(5934),Z=l(6554),w=l(9798);function b(){let e=(0,d._)(["\n  object-fit: contain;\n  width: 32px;\n"]);return b=function(){return e},e}function k(){let e=(0,d._)(["\n  object-fit: contain;\n  margin-top: -20px;\n  filter: ();\n  opacity: ","\n"]);return k=function(){return e},e}let N=e=>{var n,l;let{spices:i,kitchens:o,meals:s,totalMealSpeed:c,lastUpdated:d,achievements:f,lab:w}=e,b=e=>null==e?void 0:e.reduce((e,n)=>{var l,t,i;let r=(null==n?void 0:n.status)===2;if(!r)return e;let{meal:o}=n;return{...e,[null==o?void 0:o.rawName]:{total:(null!==(i=null===(l=e[null==o?void 0:o.rawName])||void 0===l?void 0:l.total)&&void 0!==i?i:0)+(null==n?void 0:n.mealSpeed)/(null==n?void 0:null===(t=n.meal)||void 0===t?void 0:t.cookReq),...o}}},{}),k=(0,a.useMemo)(()=>b(o),[o]),N=e=>{if(!e)return 0;let n=e[e.length-1];return(null==n?void 0:n.index)<(null==s?void 0:s.length)?2*(null==n?void 0:n.cookReq):1e10},F=(e,n)=>Math.floor(2*e+n);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.Z,{sx:{width:"fit-content"},children:(0,t.jsx)(x.Z,{children:(0,t.jsxs)(r.Z,{children:["Claims: ",null==i?void 0:i.numberOfClaims," / ",g.Cz]})})}),(0,t.jsx)(m.Z,{my:2,direction:"row",gap:2,flexWrap:"wrap",children:null==i?void 0:null===(n=i.available)||void 0===n?void 0:n.map((e,n)=>{var l;return e?(0,t.jsx)(u.Z,{elevation:4,children:(0,t.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(y,{src:"".concat(v.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""}),(0,t.jsx)(j.Z,{title:parseInt(null==e?void 0:e.amount),children:(0,t.jsx)(r.Z,{children:(0,v.notateNumber)(parseInt(null==e?void 0:e.amount),"Big")})}),(0,t.jsxs)(r.Z,{sx:{color:"grey.400"},children:["(",(0,v.notateNumber)(parseInt(null!==(l=null==e?void 0:e.toClaim)&&void 0!==l?l:0),"Big"),")"]})]})},"".concat(null==e?void 0:e.spiceName,"-").concat(n)):null})}),(0,t.jsx)(r.Z,{variant:"h4",textAlign:"center",mb:3,children:"Totals"}),(0,t.jsx)(m.Z,{my:2,direction:"row",justifyContent:"center",gap:2,children:null===(l=Object.entries(k||{}))||void 0===l?void 0:l.map((e,n)=>{let[l,i]=e,{total:r}=i;return(0,t.jsx)(u.Z,{children:(0,t.jsxs)(x.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,t.jsx)(j.Z,{placement:"top",title:(0,t.jsx)(C,{achievements:f,totalMealSpeed:c,meal:i,lab:w}),children:(0,t.jsx)(S,{src:"".concat(v.prefix,"data/").concat(l,".png"),alt:""})}),(0,t.jsxs)("div",{children:[(0,v.kFormatter)(r,2),"/hr"]}),(0,t.jsx)(C,{achievements:f,totalMealSpeed:c,meal:i,lab:w})]})},"".concat(l,"-").concat(n,"-").concat(r))})}),(0,t.jsx)(m.Z,{direction:"row",justifyContent:"center",gap:3,flexWrap:"wrap",children:null==o?void 0:o.map((e,n)=>{var l,i,o,a,g,b,k,B;if(!e)return null;let I=(null==e?void 0:e.status)>=3,T=N(null==e?void 0:e.possibleMeals),M=Math.round((null==e?void 0:e.currentProgress)/T*100),L=(T-(null==e?void 0:e.currentProgress))/e.fireSpeed;return(0,t.jsx)(u.Z,{sx:{width:{xs:350,sm:400}},children:(0,t.jsxs)(x.Z,{sx:{padding:4},children:[(0,t.jsxs)(m.Z,{direction:"row",justifyContent:"center",children:[(0,t.jsxs)(m.Z,{children:[(0,t.jsxs)(r.Z,{sx:{color:"success.light"},children:["Speed (",null==e?void 0:e.speedLv,")"]}),(0,t.jsxs)(r.Z,{children:[null!==(b=(0,v.notateNumber)(null==e?void 0:e.mealSpeed,"Big"))&&void 0!==b?b:0,"/hr"]}),(0,t.jsxs)(m.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(y,{src:"".concat(v.prefix,"data/CookingSpice").concat(F(n,0),".png"),alt:""}),(0,t.jsx)(r.Z,{children:(0,v.notateNumber)(null==e?void 0:e.speedCost,"Big")})]})]}),(0,t.jsx)(h.Z,{sx:{mx:2,backgroundColor:"white"},orientation:"vertical",flexItem:!0}),(0,t.jsxs)(m.Z,{children:[(0,t.jsxs)(r.Z,{sx:{color:"error.light"},children:["Fire (",null==e?void 0:e.fireLv,")"]}),(0,t.jsxs)(r.Z,{children:[null!==(k=(0,v.notateNumber)(null==e?void 0:e.fireSpeed,"Big"))&&void 0!==k?k:0,"/hr"]}),(0,t.jsxs)(m.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(y,{src:"".concat(v.prefix,"data/CookingSpice").concat(F(n,1),".png"),alt:""}),(0,t.jsx)(r.Z,{children:(0,v.notateNumber)(null==e?void 0:e.fireCost,"Big")})]})]}),(0,t.jsx)(h.Z,{sx:{mx:2,backgroundColor:"white"},orientation:"vertical",flexItem:!0}),(0,t.jsxs)(m.Z,{children:[(0,t.jsxs)(r.Z,{sx:{color:"info.light"},children:["Luck (",null==e?void 0:e.luckLv,")"]}),(0,t.jsxs)(r.Z,{children:[null!==(B=null==e?void 0:e.mealLuck.toFixed(2))&&void 0!==B?B:0,"x"]}),(0,t.jsxs)(m.Z,{mt:2,alignItems:"center",children:[(0,t.jsx)(y,{src:"".concat(v.prefix,"data/CookingSpice").concat(F(n,2),".png"),alt:""}),(0,t.jsx)(r.Z,{children:(0,v.notateNumber)(null==e?void 0:e.luckCost,"Big")})]})]})]}),I?(0,t.jsxs)(m.Z,{children:[(0,t.jsxs)(m.Z,{mt:4,mb:1,direction:"row",justifyContent:"center",alignItems:"center",gap:2,children:[(0,t.jsx)(r.Z,{variant:"body1",children:"Spices: "}),null==e?void 0:null===(l=e.spices)||void 0===l?void 0:l.map((e,n)=>-1===e?null:(0,t.jsx)(y,{src:"".concat(v.prefix,"data/CookingSpice").concat(e,".png"),alt:""},"".concat(e,"-").concat(n)))]}),(null==e?void 0:null===(i=e.possibleMeals)||void 0===i?void 0:i.length)>0?(0,t.jsx)(m.Z,{direction:"row",justifyContent:"center",flexWrap:"wrap",alignItems:"center",rowGap:1.5,children:null==e?void 0:null===(o=e.possibleMeals)||void 0===o?void 0:o.map((e,n)=>{var l;return(0,t.jsx)(S,{missing:(null==s?void 0:null===(l=s[null==e?void 0:e.index])||void 0===l?void 0:l.level)===0,src:"".concat(v.prefix,"data/").concat(null==e?void 0:e.rawName,".png"),alt:""},"possible-".concat(null==e?void 0:e.rawName,"-").concat(n))})}):null,(0,t.jsx)(j.Z,{title:"".concat(M,"%"),children:(0,t.jsx)(Z.Z,{percent:M})}),(0,t.jsxs)(m.Z,{direction:"row",gap:3,mt:1,children:[(0,t.jsxs)(r.Z,{variant:"body1",component:"span",children:[(0,v.kFormatter)(null==e?void 0:e.currentProgress,2)," / ",(0,v.kFormatter)(T)]}),(0,t.jsx)(p.Z,{placeholder:(0,t.jsx)(r.Z,{sx:{color:"success.light"},children:"Ready"}),type:"countdown",date:new Date().getTime()+36e5*L,lastUpdated:d})]})]}):(0,t.jsxs)(m.Z,{mt:2,justifyContent:"center",alignItems:"center",children:[(0,t.jsx)(j.Z,{placement:"top",title:(0,t.jsx)(C,{achievements:f,totalMealSpeed:c,lab:w,meal:null==e?void 0:e.meal}),children:(0,t.jsx)(S,{src:"".concat(v.prefix,"data/").concat(null==e?void 0:null===(a=e.meal)||void 0===a?void 0:a.rawName,".png"),alt:""})}),(0,t.jsxs)("div",{children:[(0,v.kFormatter)((null==e?void 0:e.mealSpeed)/(null==e?void 0:null===(g=e.meal)||void 0===g?void 0:g.cookReq),2),"/hr"]})]})]})},"kitchen-".concat(n))})})]})},C=e=>{var n;let{meal:l,lab:i,totalMealSpeed:o,achievements:s}=e,a=(0,g.Qo)(11,l,o,s),c=(0,g.sV)(null==l?void 0:l.level,s),d=(11-(null==l?void 0:l.level))*c,u=(null==l?void 0:l.amount)>=c?"0":(0,g.Kn)(c-(null==l?void 0:l.amount),null==l?void 0:l.cookReq,o),x=(0,w.c9)(i.labBonuses,8),m=(0,w.pc)(null==i?void 0:i.jewels,16,x),h=(1+(m+(null==l?void 0:l.shinyMulti))/100)*(null==l?void 0:l.level)*(null==l?void 0:l.baseStat);return(0,t.jsxs)(t.Fragment,{children:[(null==l?void 0:l.level)>=11||c===d?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Z,{children:["Next Level in: ",(0,t.jsx)(p.Z,{date:new Date().getTime()+36e5*u,staticTime:!0})]}),(0,t.jsxs)(r.Z,{children:["(",(0,v.notateNumber)(null==l?void 0:l.amount,"Big")," / ",(0,v.notateNumber)(c,"Big"),")"]})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Z,{children:["Next Level in: ",(0,t.jsx)(p.Z,{date:new Date().getTime()+36e5*u,staticTime:!0})]}),(0,t.jsxs)(r.Z,{children:["Diamond plate in: ",(0,t.jsx)(p.Z,{date:new Date().getTime()+36e5*a,staticTime:!0})," "]}),(0,t.jsxs)(r.Z,{children:["(",(0,v.notateNumber)(null==l?void 0:l.amount,"Big")," / ",(0,v.notateNumber)(d,"Big"),")"]})]}),(0,t.jsx)(r.Z,{fontSize:15,fontWeight:"bold",children:(0,v.cleanUnderscore)(null==l?void 0:null===(n=l.effect)||void 0===n?void 0:n.replace("{",(0,v.kFormatter)(h)))})]})},y=f.Z.img(b()),S=f.Z.img(k(),e=>{let{missing:n}=e;return n?.5:1});var F=l(5114),B=l(6420),I=l(1903),T=l(7357),M=l(5789),L=l(3619),D=l(8972),W=l(4529);function _(){let e=(0,d._)(["\n  width: 82px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-right: -20px;\n\n  & img:nth-of-type(1) {\n    margin-top: -30px;\n  }\n\n  & img {\n    margin-left: -30px;\n  }\n"]);return _=function(){return e},e}function E(){let e=(0,d._)(["\n  & {\n    display: flex;\n    align-items: center;\n  }\n"]);return E=function(){return e},e}let P=[-1,0,11,30],O=e=>{let{characters:n,meals:l,totalMealSpeed:i,achievements:o,artifacts:s,lab:c}=e,[d,h]=a.useState(()=>[]),[f,Z]=(0,a.useState)(),[b,k]=(0,a.useState)([]),[N,C]=(0,a.useState)(30),[y,S]=(0,a.useState)(P[0]),T=(0,w.c9)(c.labBonuses,8),_=(0,w.pc)(null==c?void 0:c.jewels,16,T),E=()=>{let e=null==n?void 0:n.filter(e=>(null==e?void 0:e.class)==="Blood_Berserker");return e.reduce((e,n)=>{var l;let{talents:t}=n,i=null==t?void 0:null===(l=t[3])||void 0===l?void 0:l.orderedTalents.find(e=>(null==e?void 0:e.name)==="OVERFLOWING_LADLE"),r=(0,v.growth)(null==i?void 0:i.funcX,null==i?void 0:i.maxLevel,null==i?void 0:i.x1,null==i?void 0:i.x2,!1);return r>e?r:e},0)},O=(0,a.useMemo)(()=>E(),[n]),A=(e,n)=>null==e?void 0:e.map(e=>{if(!e)return null;let{amount:l,level:t,cookReq:r}=e,s=(0,g.sV)(t,o),a=l>=s?"0":(0,g.Kn)(s-l,r,i),c=(0,g.Qo)(11,e,i,o),d=(0,g.Qo)(30,e,i,o);return n&&(a/=1+O/100,c/=1+O/100,d/=1+O/100),{...e,levelCost:s,diamondCost:(11-t)*s,timeTillNextLevel:a,timeToDiamond:c,blackVoidCost:(30-t)*s,timeToBlackVoid:d}}),V=(0,a.useMemo)(()=>A(l),[l]);(0,a.useEffect)(()=>{let e=(0,W.YS)(s,"Causticolumn");e&&C(30+(null==e?void 0:e.bonus))},[s]);let q=(e,n)=>{h(n)};(0,a.useEffect)(()=>{let e;if(0===y){let n=[...V];e=K(n,"timeTillNextLevel")}else if(11===y){let n=[...V];e=K(n,"timeToDiamond",11)}else if(30===y){let n=[...V];e=K(n,"timeToBlackVoid",30)}else e=V;d.includes("overflow")&&(e=A(e||l,O)),d.includes("hide")&&(e=e.filter(e=>(null==e?void 0:e.level)<N));let n=X(e);k(n),Z(e)},[d,l,N,y]);let K=function(e,n){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=[...V];return t.sort((e,t)=>e.level===l?1:t.level===l?-1:(null==e?void 0:e[n])-(null==t?void 0:t[n])),t},X=e=>{let n=e.filter(e=>((null==e?void 0:e.stat)==="Mcook"||(null==e?void 0:e.stat)==="KitchenEff")&&(null==e?void 0:e.level)<N);return(n=n.map(e=>{let{level:n,baseStat:l,shinyMulti:t,timeTillNextLevel:i}=e,r=(1+(_+t)/100)*n*l,o=(1+(_+t)/100)*(n+1)*l;return{...e,currentLevelBonus:(0,v.notateNumber)(r),nextLevelBonus:(0,v.notateNumber)(o),bonusDiff:o-r,diff:(o-r)/i}})).sort((e,n)=>n.diff-e.diff),n},Q=e=>{S(e.target.value)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(F.Z,{sx:{my:2},value:d,onChange:q,children:[(0,t.jsx)(B.Z,{value:"minimized",children:"Minimized"}),(0,t.jsx)(B.Z,{value:"hide",children:"Hide capped"}),(0,t.jsx)(B.Z,{value:"overflow",children:(0,t.jsxs)(m.Z,{direction:"row",gap:1,children:[(0,t.jsx)(r.Z,{children:"Overflowing Ladle"}),(0,t.jsx)(j.Z,{title:"Blood Berserker Talent: Ladles gives ".concat((0,v.kFormatter)(O,2),"% more afk time"),children:(0,t.jsx)(M.Z,{})})]})})]}),(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",gap:3,children:[(0,t.jsx)(I.Z,{sx:{width:150},label:"Sort by",select:!0,value:y,onChange:Q,children:null==P?void 0:P.map(e=>(0,t.jsx)(D.Z,{value:e,children:-1===e?"Order":0===e?"Time":"Time to ".concat(e)},e))}),11!==y||(null==f?void 0:f.some(e=>{let{level:n,amount:l}=e;return l>0&&n<11}))?null:(0,t.jsx)(r.Z,{sx:{color:"#ffa726"},children:"All meals are higher than level 11 !"}),30!==y||(null==f?void 0:f.some(e=>{let{level:n,amount:l}=e;return l>0&&n<30}))?null:(0,t.jsx)(r.Z,{sx:{color:"#ffa726"},children:"All meals are higher than level 30 !"})]}),(0,t.jsxs)(m.Z,{my:2,children:[(0,t.jsx)(r.Z,{my:1,variant:"h5",children:"Best meal speed contribution"}),(0,t.jsx)(m.Z,{gap:2,direction:"row",flexWrap:"wrap",children:b.map((e,n)=>{let{currentLevelBonus:l,nextLevelBonus:i,level:o,name:s,rawName:a,bonusDiff:c,timeTillNextLevel:d}=e;return(0,t.jsx)(u.Z,{sx:{width:340},children:(0,t.jsx)(x.Z,{children:(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",children:[(0,t.jsxs)(z,{children:[(0,t.jsx)("img",{src:"".concat(v.prefix,"data/").concat(a,".png"),alt:""}),o>0?(0,t.jsx)("img",{className:"plate",src:"".concat(v.prefix,"data/CookingPlate").concat(o-1,".png"),alt:""}):null]}),(0,t.jsxs)(m.Z,{gap:1,children:[(0,t.jsxs)(R,{children:[(0,v.cleanUnderscore)(s)," (Lv. ",o," ",(0,t.jsx)(L.Z,{fontSize:"small"})," ",o+1,")"]}),(0,t.jsxs)(R,{children:[l,"% ",(0,t.jsx)(L.Z,{fontSize:"small"})," ",i,"% (",(0,v.kFormatter)(c),")"]}),(0,t.jsxs)(r.Z,{component:"span",children:["Next level: ",(0,t.jsx)(p.Z,{date:new Date().getTime()+36e5*d,staticTime:!0})]}),(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(v.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(j.Z,{title:(0,v.numberWithCommas)(parseFloat(d).toFixed(2)),children:(0,t.jsx)("span",{children:(0,v.notateNumber)(d,"Big")})})]})]})]})})},"".concat(s,"-").concat(n))})})]}),(0,t.jsx)(r.Z,{my:1,variant:"h5",children:"Meals"}),(0,t.jsx)(m.Z,{direction:"row",flexWrap:"wrap",gap:2,children:null==f?void 0:f.map((e,n)=>{if(!e)return null;let{name:l,amount:i,rawName:s,effect:a,level:c,baseStat:h,multiplier:g,shinyMulti:f,levelCost:Z,timeTillNextLevel:w,timeToDiamond:b,timeToBlackVoid:k}=e;return(0,t.jsx)(u.Z,{sx:{width:300,opacity:0===c?.5:1},children:(0,t.jsxs)(x.Z,{children:[(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",children:[(0,t.jsx)(j.Z,{title:(0,t.jsx)(U,{achievements:o,...e}),children:(0,t.jsxs)(z,{children:[(0,t.jsx)("img",{src:"".concat(v.prefix,"data/").concat(s,".png"),alt:""}),c>0?(0,t.jsx)("img",{className:"plate",src:"".concat(v.prefix,"data/CookingPlate").concat(c-1,".png"),alt:""}):null]})}),(0,t.jsxs)(r.Z,{children:[(0,v.cleanUnderscore)(l)," (Lv. ",c,")"]})]}),(0,t.jsxs)(m.Z,{mt:2,gap:1,children:[(0,t.jsx)(r.Z,{sx:{color:g>1?"info.light":""},children:(0,v.cleanUnderscore)(null==a?void 0:a.replace("{",(0,v.kFormatter)((1+(_+f)/100)*c*h)))}),d.includes("minimized")?null:(null==e?void 0:e.level)===N?(0,t.jsx)(r.Z,{color:"success.light",children:"MAXED"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Z,{sx:{color:i>=Z?"success.light":c>0?"error.light":""},children:["Progress: ",(0,t.jsx)(j.Z,{title:(0,v.numberWithCommas)(parseInt(i)),children:(0,t.jsx)("span",{children:(0,v.notateNumber)(Math.floor(i),"Big")})})," / ",(0,t.jsx)(j.Z,{title:(0,v.numberWithCommas)(parseInt(Z)),children:(0,t.jsx)("span",{children:(0,v.notateNumber)(Math.ceil(Z),"Big")})})]}),c>0?(0,t.jsxs)(t.Fragment,{children:[0===y||-1===y?(0,t.jsxs)(r.Z,{component:"span",children:["Next level: ",(0,t.jsx)(p.Z,{date:new Date().getTime()+36e5*w,staticTime:!0})]}):null,11===y&&c<11?(0,t.jsxs)(r.Z,{children:["Next milestone: ",(0,t.jsx)(p.Z,{date:new Date().getTime()+36e5*b,staticTime:!0})]}):null,30===y&&c<30&&k>0?(0,t.jsxs)(r.Z,{children:["Next milestone: ",parseInt(36e5*k/864e5)," days"]}):null]}):null]}),(null==e?void 0:e.level)<N?(0,t.jsxs)(t.Fragment,{children:[(-1===y||0===y)&&(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(v.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(j.Z,{title:(0,v.numberWithCommas)(parseFloat(w).toFixed(2)),children:(0,t.jsx)("span",{children:(0,v.notateNumber)(w,"Big")})})]}),11===y&&c<11&&c>0?(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(v.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(j.Z,{title:(0,v.numberWithCommas)(parseFloat(b).toFixed(2)),children:(0,t.jsx)("span",{children:(0,v.notateNumber)(b,"Big")})})]}):null,30===y&&c<30&&c>0?(0,t.jsxs)(m.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,t.jsx)("img",{src:"".concat(v.prefix,"data/Ladle.png"),alt:"",width:32,height:32}),(0,t.jsx)(j.Z,{title:(0,v.numberWithCommas)(parseFloat(k).toFixed(2)),children:(0,t.jsxs)("span",{children:[" ",(0,v.notateNumber)(k,"Big")]})})]}):null]}):null]})]})},"".concat(l,"-").concat(n))})})]})},U=e=>{let{level:n,baseStat:l,multiplier:i,effect:o,achievements:s}=e,a=(0,g.sV)(n+1,s);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.Z,{fontWeight:"bold",children:["Next level bonus:\xa0",(0,t.jsx)(r.Z,{component:"span",sx:{fontWeight:400},children:(0,v.cleanUnderscore)(null==o?void 0:o.replace("{",(0,v.kFormatter)((n+1)*l*i)))})]}),(0,t.jsx)(T.Z,{children:(0,t.jsxs)(r.Z,{fontWeight:"bold",children:["Next level req:\xa0",(0,t.jsx)(r.Z,{component:"span",sx:{fontWeight:400},children:(0,v.numberWithCommas)(parseInt(a))})]})})]})},z=f.Z.div(_()),R=(0,f.Z)(r.Z)(E());var A=l(2962);let V=()=>{var e,n;let{state:l}=(0,a.useContext)(c.I),{cooking:d,achievements:u,sailing:x}=(null==l?void 0:l.account)||{},[m,h]=(0,a.useState)(0),v=(0,i.Z)(e=>e.breakpoints.down("md"),{noSsr:!0}),j=(e,n)=>{h(n)},p=(0,a.useMemo)(()=>{var e;return null==d?void 0:null===(e=d.kitchens)||void 0===e?void 0:e.reduce((e,n)=>e+n.mealSpeed,0)},[d]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.PB,{title:"Idleon Toolbox | Cooking",description:"Keep track of your kitchens and meals progression"}),(0,t.jsx)(r.Z,{variant:"h2",textAlign:"center",mb:3,children:"Cooking"}),(0,t.jsx)(o.Z,{centered:!0,sx:{marginBottom:3},variant:v?"fullWidth":"standard",value:m,onChange:j,children:["Kitchens","Meals"].map((e,n)=>(0,t.jsx)(s.Z,{label:e},"".concat(e,"-").concat(n)))}),0===m?(0,t.jsx)(N,{...d,achievements:u,lastUpdated:null==l?void 0:l.lastUpdated,totalMealSpeed:p,lab:null==l?void 0:null===(e=l.account)||void 0===e?void 0:e.lab}):null,1===m?(0,t.jsx)(O,{characters:null==l?void 0:l.characters,...d,lab:null==l?void 0:null===(n=l.account)||void 0===n?void 0:n.lab,achievements:u,totalMealSpeed:p,artifacts:null==x?void 0:x.artifacts}):null]})};var q=V}},function(e){e.O(0,[9912,1316,9774,2888,179],function(){return e(e.s=2169)}),_N_E=e.O()}]);