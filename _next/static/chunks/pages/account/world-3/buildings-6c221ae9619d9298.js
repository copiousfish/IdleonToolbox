(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3446],{75558:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-3/buildings",function(){return t(19925)}])},33948:function(e,n,t){"use strict";var i=t(85893),r=t(67294),l=t(96986),o=t(33913),d=t(39574),c=t(15861);let a=(0,r.forwardRef)((e,n)=>{let{date:t,startDate:a,lastUpdated:u,stopAtZero:s,type:x,pause:m,staticTime:v,placeholder:h,loop:f,variant:p="inherit",...j}=e,[g,Z]=(0,r.useState)();(0,r.useEffect)(()=>{if(t){if(v){if(!isFinite(t))return;return Z({...(0,d.getDuration)(new Date().getTime(),t)})}let e=new Date,n=e.getTime()-(null!=u?u:0),i=(0,o.Z)(t);Z({...(0,d.getDuration)(null==e?void 0:e.getTime(),t+n*("countdown"===x?-1:1)),overtime:"countdown"===x&&i})}},[t,u]);let w=()=>{let{days:e,hours:n,minutes:t,seconds:i}=g;60===(i+=1)&&(i=0,60===(t+=1)&&(t=0,24===(n+=1)&&(e+=1))),Z({...g,days:e,hours:n,minutes:t,seconds:i})},b=()=>{let{days:e,hours:n,minutes:t,seconds:i}=g;if(0===e&&0===n&&0===t&&0===i){if(s)return;if(f)return Z({...(0,d.getDuration)(new Date().getTime(),a)})}-1==(i-=1)&&(i=59,-1==(t-=1)&&(t=59,-1==(n-=1)&&(n=0,e-=1))),Z({...g,days:e,hours:n,minutes:t,seconds:i})};(0,l.Z)(()=>{if(!g)return null;"countdown"!==x||(null==g?void 0:g.overtime)?w():b()},m||v?null:1e3);let y=e=>{let n=String(e);return(null==n?void 0:n.length)===1?"0".concat(e):e};return g?((null==g?void 0:g.overtime)||m)&&h?(0,i.jsx)(c.Z,{...j,ref:n,children:h}):(0,i.jsxs)(c.Z,{...j,ref:n,variant:p,sx:{color:"".concat((null==g?void 0:g.overtime)&&!f?"#f91d1d":"")},component:"span",children:[(null==g?void 0:g.days)?y(null==g?void 0:g.days)+"d:":"",y(null==g?void 0:g.hours)+"h:",y(null==g?void 0:g.minutes)+"m",(null==g?void 0:g.days)?"":":",(null==g?void 0:g.days)?"":y(null==g?void 0:g.seconds)+"s"]}):null});n.Z=a},25164:function(e,n,t){"use strict";t.d(n,{Gr:function(){return N},M5:function(){return g},Wd:function(){return B},Ye:function(){return C},iy:function(){return b},j8:function(){return w},u3:function(){return T},uQ:function(){return Z},wD:function(){return I}});var i=t(82729),r=t(85893),l=t(67294),o=t(39574),d=t(51233),c=t(15861),a=t(49425),u=t(66242),s=t(44267),x=t(61599),m=t(51053),v=t(60510);function h(){let e=(0,i._)(["\n  & .MuiBadge-badge {\n    background-color: #d5d5dc;\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return h=function(){return e},e}function f(){let e=(0,i._)(["\n  height: 20px;\n  object-fit: contain;\n"]);return f=function(){return e},e}function p(){let e=(0,i._)(["\n  width: 56px;\n  height: 72px;\n  object-fit: contain;\n  opacity: ",";\n"]);return p=function(){return e},e}function j(){let e=(0,i._)(["\n  position: absolute;\n  left: 50%;\n  top: -3px;\n  pointer-events: none;\n  transform: translateX(-50%);\n"]);return j=function(){return e},e}let g=(0,l.forwardRef)((e,n)=>{let{stat:t,icon:i}=e,{img:l,...a}=e;return(0,r.jsxs)(d.Z,{alignItems:"center",...a,ref:n,style:{position:"relative",width:"fit-content"},children:[(0,r.jsx)("img",{...l,src:"".concat(o.prefix,"data/").concat(i,".png"),alt:""}),(0,r.jsx)(c.Z,{variant:"body1",component:"span",children:t})]})});g.displayName="IconWithText";let Z=e=>{let{title:n,value:t,boldTitle:i,titleStyle:l={}}=e;return(0,r.jsxs)(d.Z,{direction:"row",flexWrap:"wrap",alignItems:"center",children:[n?(0,r.jsxs)(c.Z,{style:l,fontWeight:i?"bold":500,component:"span",children:[n,":\xa0"]}):null,(0,r.jsx)(c.Z,{fontSize:15,component:"span",children:t})]})},w=(0,x.Z)(a.Z)(h()),b=e=>{let{cardName:n,stars:t,cardIndex:i,name:l,variant:d,rawName:c,amount:a,nextLevelReq:u}=e,s="cardSet"===d?"".concat(o.prefix,"data/").concat(c,".png"):"".concat(o.prefix,"data/2Cards").concat(i,".png");return(0,r.jsxs)(r.Fragment,{children:[t>0?(0,r.jsx)(M,{src:"".concat(o.prefix,"data/CardEquipBorder").concat(t,".png"),alt:""}):null,(0,r.jsx)(m.Z,{title:(0,r.jsx)(y,{...e,cardName:"cardSet"===d?l:n,nextLevelReq:u,amount:a}),children:(0,r.jsx)(S,{isCardSet:"cardSet"===d,amount:a,src:s,alt:""})})]})},y=e=>{let{displayName:n,effect:t,bonus:i,stars:l,showInfo:a,nextLevelReq:u,amount:s}=e,x=i;return a&&(x=(0,v.BZ)({bonus:i,stars:l})),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(n)}),(0,r.jsx)(c.Z,{children:(0,o.cleanUnderscore)(t.replace("{",x))}),a?(0,r.jsx)(d.Z,{mt:1,direction:"row",gap:1,flexWrap:"wrap",children:[1,2,3,4,5,6].map((e,t)=>(0,r.jsxs)(d.Z,{alignItems:"center",justifyContent:"space-between",children:[0===t?(0,r.jsx)(c.Z,{children:"Base"}):(0,r.jsx)(_,{src:"".concat(o.prefix,"etc/Star").concat(t,".png"),alt:""}),(0,r.jsx)(c.Z,{children:i*(t+1)})]},"".concat(n,"-").concat(t)))}):null,s>=u?(0,r.jsxs)(d.Z,{children:["You've collected ",(0,o.numberWithCommas)(s)," cards"]}):u>0?(0,r.jsxs)(d.Z,{children:["Progress: ",(0,o.numberWithCommas)(s)," / ",(0,o.numberWithCommas)(u)]}):null]})},_=x.Z.img(f()),S=x.Z.img(p(),e=>{let{amount:n,isCardSet:t}=e;return n||t?1:.5}),M=x.Z.img(j()),T=e=>{let{level:n,funcX:t,x1:i,x2:l,funcY:a,y1:u,y2:s,description:x,name:m,talentId:v}=e,h=n>0?(0,o.growth)(t,n,i,l):0,f=n>0?(0,o.growth)(a,n,u,s):0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,r.jsx)("img",{src:"".concat(o.prefix,"data/UISkillIcon").concat(v,".png"),alt:""}),(0,r.jsx)(c.Z,{fontWeight:"bold",variant:"h6",children:(0,o.cleanUnderscore)(m)})]}),(0,r.jsx)(c.Z,{children:(0,o.cleanUnderscore)(x).replace("{",h).replace("}",f)})]})},B=e=>{let{players:n,characters:t}=e;return(0,r.jsx)(d.Z,{gap:1,direction:"row",children:n.map(e=>{var n;let{index:i}=e;return(0,r.jsx)(m.Z,{title:null==t?void 0:null===(n=t[i])||void 0===n?void 0:n.name,children:(0,r.jsx)("img",{src:"".concat(o.prefix,"data/headBIG.png"),alt:""})},name+"-head-"+i)})})},N=e=>{let{name:n}=e;return(0,r.jsxs)(c.Z,{variant:"h3",children:["Your account is missing data for ",n]})},C=e=>{let{cardSx:n,title:t,value:i,children:l}=e;return(0,r.jsx)(u.Z,{sx:{my:{xs:0,md:3},width:"fit-content",...n},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:t}),i?(0,r.jsx)(c.Z,{children:i}):l]})})},I=e=>{let{direction:n="row",children:t}=e;return(0,r.jsx)(d.Z,{gap:1,direction:n,alignItems:"center",children:t})}},19925:function(e,n,t){"use strict";t.r(n);var i=t(82729),r=t(85893),l=t(67294),o=t(41422),d=t(15861),c=t(51233),a=t(33454),u=t(96420),s=t(66242),x=t(44267),m=t(67720),v=t(39574),h=t(61599),f=t(57277),p=t(2962),j=t(33948),g=t(47315),Z=t(51053),w=t(87357),b=t(25164),y=t(74721);function _(){let e=(0,i._)(["\n  width: 50px;\n  height: 50px;\n  object-fit: contain;\n"]);return _=function(){return e},e}function S(){let e=(0,i._)(["\n  width: 35px;\n  height: 35px;\n  object-fit: contain;\n"]);return S=function(){return e},e}let M=h.Z.img(_()),T=h.Z.img(S()),B=e=>{let{cardSx:n,title:t,value:i,children:l,breakdown:o}=e;return(0,r.jsx)(s.Z,{sx:{my:{xs:0,md:3},width:"fit-content",...n},children:(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(d.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:t}),(0,r.jsxs)(c.Z,{direction:"row",gap:2,children:[i?(0,r.jsx)(d.Z,{children:i}):l,o?(0,r.jsx)(Z.Z,{title:(0,r.jsx)(c.Z,{children:null==o?void 0:o.map((e,n)=>{let{name:t,value:i}=e;return(0,r.jsx)(b.uQ,{title:t,value:isNaN(i)?i:"".concat((0,v.notateNumber)(i,"MultiplierInfo").replace(".00",""),"x")},"".concat(t,"-").concat(n))})}),children:(0,r.jsx)(y.Z,{})}):null]})]})})};n.default=()=>{var e,n;let{state:t}=(0,l.useContext)(o.I),[i,h]=(0,l.useState)("order"),y=null==t?void 0:null===(e=t.account)||void 0===e?void 0:null===(n=e.construction)||void 0===n?void 0:n.totalBuildRate,_=(0,g._m)(null==t?void 0:t.account,"Nitrogen_-_Construction_Trimmer"),S=(0,l.useMemo)(()=>{var e,n,i;return null==t?void 0:null===(e=t.account)||void 0===e?void 0:null===(n=e.towers)||void 0===n?void 0:null===(i=n.data)||void 0===i?void 0:i.find(e=>5===e.index)},[t]),N=(e,n,t,i,r)=>e.map(e=>{let{rawName:l,name:o,amount:d}=e,c=Math.min(.1,.1*Math.floor((r.level+999)/1e3)),a=Math.max(0,r.level-1),u=Math.max(.2,1-(c+a*r.costInc[0]/100));return l.includes("Refinery")?{rawName:l,name:o,amount:Math.floor(u*d*(n+1))}:{rawName:l,name:o,amount:Math.floor(u*d*Math.pow(i+.03-(i+.03-1.05)*n/(t/2+n),n))}}),C=(0,l.useMemo)(()=>{var e,n,i;return null==t?void 0:null===(e=t.account)||void 0===e?void 0:null===(n=e.towers)||void 0===n?void 0:null===(i=n.data)||void 0===i?void 0:i.map(e=>{var n,i,r,l,o,d,c,a,u,s,x,m,v;let{progress:h,level:p,maxLevel:j,bonusInc:g,itemReq:Z,slot:w}=e,b=N(Z,p,j,g,S),M=(0,f.ZX)(null==t?void 0:null===(n=t.account)||void 0===n?void 0:n.towers,p,g,null==e?void 0:e.index),T=null==t?void 0:null===(i=t.account)||void 0===i?void 0:null===(r=i.atoms)||void 0===r?void 0:null===(l=r.atoms)||void 0===l?void 0:l.find(e=>{let{name:n}=e;return"Carbon_-_Wizard_Maximizer"===n}),B=(0,f.Bt)(null==t?void 0:null===(o=t.account)||void 0===o?void 0:null===(d=o.towers)||void 0===d?void 0:d.totalLevels,j,null==T?void 0:T.level);j+=B;let C=(null===(c=null===(a=null==t?void 0:null===(u=t.account)||void 0===u?void 0:u.lab.jewels)||void 0===a?void 0:a.slice(3,7))||void 0===c?void 0:c.every(e=>{let{active:n}=e;return n}))?1:0,I=(null===(s=null==t?void 0:null===(x=t.account)||void 0===x?void 0:x.lab.jewels)||void 0===s?void 0:null===(m=s[3])||void 0===m?void 0:m.active)?1+C:0,W=I+(_?1:0),D=-1!==w&&w<W;if(D){let e=(new Date().getTime()-(null!==(v=null==t?void 0:t.lastUpdated)&&void 0!==v?v:0))/1e3;h+=(3+_/100)*(e/3600)*y}let U=(3+_/100)*y,k=(M-h)/U*36e5,E=(M-h)/y*36e5;return{...e,maxLevel:j,isMaxed:p===j,isSlotTrimmed:D,timeLeft:E,progress:h,buildCost:M,items:b,trimmedSlotSpeed:U,trimmedTimeLeft:k}})},[null==t?void 0:t.account]),I=(0,l.useMemo)(()=>{if("order"===i)return C;if("time"===i){let e=JSON.parse(JSON.stringify(C));return null==e?void 0:e.sort((e,n)=>{let t=(null==e?void 0:e.isSlotTrimmed)?null==e?void 0:e.trimmedTimeLeft:null==e?void 0:e.timeLeft,i=(null==n?void 0:n.isSlotTrimmed)?null==n?void 0:n.trimmedTimeLeft:null==n?void 0:n.timeLeft;return(null==e?void 0:e.isMaxed)?1:(null==n?void 0:n.isMaxed)?-1:t-i})}if("requirement"===i){let e=JSON.parse(JSON.stringify(C));return null==e?void 0:e.sort((e,n)=>{if(null==e?void 0:e.isMaxed)return 1;if(null==n?void 0:n.isMaxed)return -1;let t=(null==e?void 0:e.buildCost)-(null==e?void 0:e.progress),i=(null==n?void 0:n.buildCost)-(null==n?void 0:n.progress);return t-i})}},[i]),W=e=>{let{isSlotTrimmed:n,inProgress:t}=e;return n?"warning.light":t?"success.light":""};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.PB,{title:"Idleon Toolbox | Buildings",description:"Keep track of your towers levels, bonuses and required materials for upgrades"}),(0,r.jsx)(d.Z,{variant:"h2",mb:3,children:"Buildings"}),(0,r.jsxs)(c.Z,{direction:"row",alignItems:"center",gap:3,flexWrap:"wrap",mb:2,children:[(0,r.jsxs)(w.Z,{children:[(0,r.jsx)(d.Z,{children:"Sort by"}),(0,r.jsxs)(a.Z,{value:i,sx:{mb:2},exclusive:!0,onChange:(e,n)=>h(n),children:[(0,r.jsx)(u.Z,{value:"order",children:"Order"}),(0,r.jsx)(u.Z,{value:"time",children:"Time left"}),(0,r.jsx)(u.Z,{value:"requirement",children:"Build cost"})]})]}),(0,r.jsx)(B,{title:"Build Speed",value:(0,v.notateNumber)(y,"Big")}),(0,r.jsx)(B,{title:"Trimmed Build Speed",value:(0,v.notateNumber)((3+_/100)*y,"Big"),breakdown:[{name:"Base (jewel)",value:3},{name:"Atom",value:_/100}]})]}),(0,r.jsx)(c.Z,{direction:"row",flexWrap:"wrap",gap:3,children:null==I?void 0:I.map((e,n)=>{let{name:i,progress:l,level:o,maxLevel:a,inProgress:u,isSlotTrimmed:h,isMaxed:f,items:p,buildCost:g,timeLeft:w,trimmedTimeLeft:y}=e;return(0,r.jsx)(s.Z,{sx:{border:u||h?"1px solid":"",borderColor:W(e),width:{xs:"100%",md:450},height:{md:165}},children:(0,r.jsx)(x.Z,{children:(0,r.jsxs)(c.Z,{direction:"row",justifyContent:"space-around",flexWrap:"wrap",children:[(0,r.jsxs)(c.Z,{alignItems:"center",sx:{textAlign:"center"},children:[(0,r.jsx)(d.Z,{children:(0,v.cleanUnderscore)(i)}),(0,r.jsx)(M,{src:"".concat(v.prefix,"data/ConTower").concat(null==e?void 0:e.index,".png"),alt:""}),(0,r.jsxs)(d.Z,{children:["Lv. ",o," / ",a]}),f?(0,r.jsx)(d.Z,{color:"success.light",children:"MAXED"}):(0,r.jsx)(Z.Z,{title:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(d.Z,{children:["Progress: ",(0,v.numberWithCommas)(Math.floor(l))]}),(0,r.jsxs)(d.Z,{children:["Requirement: ",(0,v.numberWithCommas)(Math.floor(g))]})]}),children:(0,r.jsxs)(d.Z,{children:[(0,v.notateNumber)(l,"Big")," / ",(0,v.notateNumber)(g,"Big")]})})]}),f?null:(0,r.jsxs)(c.Z,{gap:2,divider:(0,r.jsx)(m.Z,{flexItem:!0}),children:[(0,r.jsxs)(c.Z,{children:[f?null:(0,r.jsx)(b.uQ,{title:"Non-trimmed",titleStyle:{color:!h&&"#81c784"},value:(0,r.jsx)(j.Z,{type:"countdown",staticTime:!0,placeholder:"Ready!",date:new Date().getTime()+w,lastUpdated:null==t?void 0:t.lastUpdated})}),f?null:(0,r.jsx)(b.uQ,{title:"Trimmed",titleStyle:{color:h&&"#81c784"},value:(0,r.jsx)(j.Z,{type:"countdown",placeholder:"Ready!",staticTime:!0,date:new Date().getTime()+y,lastUpdated:null==t?void 0:t.lastUpdated})})]}),f?null:(0,r.jsx)(c.Z,{direction:"row",gap:3,alignItems:"center",children:(0,r.jsx)(c.Z,{direction:"row",gap:1,children:null==p?void 0:p.map((e,n)=>{let{rawName:t,amount:l}=e;return(0,r.jsxs)(c.Z,{alignItems:"center",children:[(0,r.jsx)(T,{src:"".concat(v.prefix,"data/").concat(t,".png"),alt:""}),(0,r.jsx)(d.Z,{children:(0,v.notateNumber)(l,"Big")})]},"".concat(i,"-").concat(t,"-").concat(n))})})})]})]})})},"".concat(i,"-").concat(n))})})]})}}},function(e){e.O(0,[1220,1195,2471,7277,9774,2888,179],function(){return e(e.s=75558)}),_N_E=e.O()}]);