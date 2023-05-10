(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5860],{7358:function(e,r,n){"use strict";n.d(r,{Z:function(){return y}});var t=n(3366),o=n(7462),i=n(7294);n(9864);var a=n(6010),s=n(4780),d=n(948),l=n(1657),c=n(7922),u=n(5113),p=n(4861),f=n(9299),h=n(4867),x=n(1588);function Z(e){return(0,h.Z)("MuiAccordion",e)}let v=(0,x.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]);var m=n(5893);let g=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],j=e=>{let{classes:r,square:n,expanded:t,disabled:o,disableGutters:i}=e;return(0,s.Z)({root:["root",!n&&"rounded",t&&"expanded",o&&"disabled",!i&&"gutters"],region:["region"]},Z,r)},b=(0,d.ZP)(u.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[{[`& .${v.region}`]:r.region},r.root,!n.square&&r.rounded,!n.disableGutters&&r.gutters]}})(({theme:e})=>{let r={duration:e.transitions.duration.shortest};return{position:"relative",transition:e.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(e.vars||e).palette.divider,transition:e.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}},[`&.${v.expanded}`]:{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}},[`&.${v.disabled}`]:{backgroundColor:(e.vars||e).palette.action.disabledBackground}}},({theme:e,ownerState:r})=>(0,o.Z)({},!r.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(e.vars||e).shape.borderRadius,borderTopRightRadius:(e.vars||e).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(e.vars||e).shape.borderRadius,borderBottomRightRadius:(e.vars||e).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!r.disableGutters&&{[`&.${v.expanded}`]:{margin:"16px 0"}})),w=i.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiAccordion"}),{children:s,className:d,defaultExpanded:u=!1,disabled:h=!1,disableGutters:x=!1,expanded:Z,onChange:v,square:w=!1,TransitionComponent:y=c.Z,TransitionProps:R}=n,C=(0,t.Z)(n,g),[M,N]=(0,f.Z)({controlled:Z,default:u,name:"Accordion",state:"expanded"}),k=i.useCallback(e=>{N(!M),v&&v(e,!M)},[M,v,N]),[A,...D]=i.Children.toArray(s),S=i.useMemo(()=>({expanded:M,disabled:h,disableGutters:x,toggle:k}),[M,h,x,k]),_=(0,o.Z)({},n,{square:w,disabled:h,disableGutters:x,expanded:M}),I=j(_);return(0,m.jsxs)(b,(0,o.Z)({className:(0,a.Z)(I.root,d),ref:r,ownerState:_,square:w},C,{children:[(0,m.jsx)(p.Z.Provider,{value:S,children:A}),(0,m.jsx)(y,(0,o.Z)({in:M,timeout:"auto"},R,{children:(0,m.jsx)("div",{"aria-labelledby":A.props.id,id:A.props["aria-controls"],role:"region",className:I.region,children:D})}))]}))});var y=w},4861:function(e,r,n){"use strict";var t=n(7294);let o=t.createContext({});r.Z=o},2797:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var t=n(7462),o=n(3366),i=n(7294),a=n(6010),s=n(4780),d=n(948),l=n(1657),c=n(4867);function u(e){return(0,c.Z)("MuiAccordionDetails",e)}(0,n(1588).Z)("MuiAccordionDetails",["root"]);var p=n(5893);let f=["className"],h=e=>{let{classes:r}=e;return(0,s.Z)({root:["root"]},u,r)},x=(0,d.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e})=>({padding:e.spacing(1,2,2)})),Z=i.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiAccordionDetails"}),{className:i}=n,s=(0,o.Z)(n,f),d=h(n);return(0,p.jsx)(x,(0,t.Z)({className:(0,a.Z)(d.root,i),ref:r,ownerState:n},s))});var v=Z},8895:function(e,r,n){"use strict";n.d(r,{Z:function(){return y}});var t=n(3366),o=n(7462),i=n(7294),a=n(6010),s=n(4780),d=n(948),l=n(1657),c=n(7739),u=n(4861),p=n(4867),f=n(1588);function h(e){return(0,p.Z)("MuiAccordionSummary",e)}let x=(0,f.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]);var Z=n(5893);let v=["children","className","expandIcon","focusVisibleClassName","onClick"],m=e=>{let{classes:r,expanded:n,disabled:t,disableGutters:o}=e;return(0,s.Z)({root:["root",n&&"expanded",t&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]},h,r)},g=(0,d.ZP)(c.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{let n={duration:e.transitions.duration.shortest};return(0,o.Z)({display:"flex",minHeight:48,padding:e.spacing(0,2),transition:e.transitions.create(["min-height","background-color"],n),[`&.${x.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${x.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`&:hover:not(.${x.disabled})`]:{cursor:"pointer"}},!r.disableGutters&&{[`&.${x.expanded}`]:{minHeight:64}})}),j=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:(e,r)=>r.content})(({theme:e,ownerState:r})=>(0,o.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!r.disableGutters&&{transition:e.transitions.create(["margin"],{duration:e.transitions.duration.shortest}),[`&.${x.expanded}`]:{margin:"20px 0"}})),b=(0,d.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:(e,r)=>r.expandIconWrapper})(({theme:e})=>({display:"flex",color:(e.vars||e).palette.action.active,transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),[`&.${x.expanded}`]:{transform:"rotate(180deg)"}})),w=i.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiAccordionSummary"}),{children:s,className:d,expandIcon:c,focusVisibleClassName:p,onClick:f}=n,h=(0,t.Z)(n,v),{disabled:x=!1,disableGutters:w,expanded:y,toggle:R}=i.useContext(u.Z),C=e=>{R&&R(e),f&&f(e)},M=(0,o.Z)({},n,{expanded:y,disabled:x,disableGutters:w}),N=m(M);return(0,Z.jsxs)(g,(0,o.Z)({focusRipple:!1,disableRipple:!0,disabled:x,component:"div","aria-expanded":y,className:(0,a.Z)(N.root,d),focusVisibleClassName:(0,a.Z)(N.focusVisible,p),onClick:C,ref:r,ownerState:M},h,{children:[(0,Z.jsx)(j,{className:N.content,ownerState:M,children:s}),c&&(0,Z.jsx)(b,{className:N.expandIconWrapper,ownerState:M,children:c})]}))});var y=w},6242:function(e,r,n){"use strict";n.d(r,{Z:function(){return m}});var t=n(7462),o=n(3366),i=n(7294),a=n(6010),s=n(4780),d=n(948),l=n(1657),c=n(5113),u=n(4867);function p(e){return(0,u.Z)("MuiCard",e)}(0,n(1588).Z)("MuiCard",["root"]);var f=n(5893);let h=["className","raised"],x=e=>{let{classes:r}=e;return(0,s.Z)({root:["root"]},p,r)},Z=(0,d.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({overflow:"hidden"})),v=i.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiCard"}),{className:i,raised:s=!1}=n,d=(0,o.Z)(n,h),c=(0,t.Z)({},n,{raised:s}),u=x(c);return(0,f.jsx)(Z,(0,t.Z)({className:(0,a.Z)(u.root,i),elevation:s?8:void 0,ref:r,ownerState:c},d))});var m=v},4267:function(e,r,n){"use strict";n.d(r,{Z:function(){return v}});var t=n(7462),o=n(3366),i=n(7294),a=n(6010),s=n(4780),d=n(948),l=n(1657),c=n(4867);function u(e){return(0,c.Z)("MuiCardContent",e)}(0,n(1588).Z)("MuiCardContent",["root"]);var p=n(5893);let f=["className","component"],h=e=>{let{classes:r}=e;return(0,s.Z)({root:["root"]},u,r)},x=(0,d.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),Z=i.forwardRef(function(e,r){let n=(0,l.Z)({props:e,name:"MuiCardContent"}),{className:i,component:s="div"}=n,d=(0,o.Z)(n,f),c=(0,t.Z)({},n,{component:s}),u=h(c);return(0,p.jsx)(x,(0,t.Z)({as:s,className:(0,a.Z)(u.root,i),ownerState:c,ref:r},d))});var v=Z},9936:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/dungeons",function(){return n(8915)}])},3948:function(e,r,n){"use strict";var t=n(2729),o=n(5893),i=n(7294),a=n(6986),s=n(3913),d=n(9574),l=n(5934),c=n(5861);function u(){let e=(0,t._)(["\n  .overtime {\n    color: #f91d1d;\n  }\n"]);return u=function(){return e},e}let p=e=>{let{date:r,startDate:n,lastUpdated:t,stopAtZero:l,type:u,pause:p,staticTime:h,placeholder:x,loop:Z,variant:v="inherit"}=e,[m,g]=(0,i.useState)();(0,i.useEffect)(()=>{if(r){if(h)return g({...(0,d.getDuration)(new Date().getTime(),r)});let e=new Date,n=e.getTime()-(null!=t?t:0),o=(0,s.Z)(r);g({...(0,d.getDuration)(null==e?void 0:e.getTime(),r+n*("countdown"===u?-1:1)),overtime:"countdown"===u&&o})}},[r,t]);let j=()=>{let{days:e,hours:r,minutes:n,seconds:t}=m;60===(t+=1)&&(t=0,60===(n+=1)&&(n=0,24===(r+=1)&&(e+=1))),g({...m,days:e,hours:r,minutes:n,seconds:t})},b=()=>{let{days:e,hours:r,minutes:t,seconds:o}=m;if(0===e&&0===r&&0===t&&0===o){if(l)return;if(Z)return g({...(0,d.getDuration)(new Date().getTime(),n)})}-1==(o-=1)&&(o=59,-1==(t-=1)&&(t=59,-1==(r-=1)&&(r=0,e-=1))),g({...m,days:e,hours:r,minutes:t,seconds:o})};(0,a.Z)(()=>{if(!m)return null;"countdown"!==u||(null==m?void 0:m.overtime)?j():b()},p||h?null:1e3);let w=e=>{let r=String(e);return(null==r?void 0:r.length)===1?"0".concat(e):e};return m?(0,o.jsx)(f,{children:((null==m?void 0:m.overtime)||p)&&x?x:(0,o.jsxs)(c.Z,{variant:v,className:"".concat((null==m?void 0:m.overtime)&&!Z?"overtime":""),component:"span",children:[(null==m?void 0:m.days)?w(null==m?void 0:m.days)+"d:":"",w(null==m?void 0:m.hours)+"h:",w(null==m?void 0:m.minutes)+"m",(null==m?void 0:m.days)?"":":",(null==m?void 0:m.days)?"":w(null==m?void 0:m.seconds)+"s"]})}):null},f=l.Z.span(u());r.Z=p},8915:function(e,r,n){"use strict";n.r(r);var t=n(2729),o=n(5893),i=n(7294),a=n(5861),s=n(6447),d=n(7358),l=n(8895),c=n(2797),u=n(6242),p=n(4267),f=n(9574),h=n(9597),x=n(5934),Z=n(3948),v=n(3508),m=n(5039),g=n(2962);function j(){let e=(0,t._)(["\n  width: 25px;\n  object-fit: contain;\n"]);return j=function(){return e},e}let b=()=>{let{state:e}=(0,i.useContext)(h.I),{dungeons:r}=(null==e?void 0:e.account)||{},n=(0,i.useMemo)(()=>{var r;return(0,m.IS)(null==e?void 0:null===(r=e.serverVars)||void 0===r?void 0:r.HappyHours)||[]},[e]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g.PB,{title:"Idleon Toolbox | Dungeons",description:"Dungeon information including happy hour times, currency, upgrades and more"}),(0,o.jsx)(a.Z,{my:2,variant:"h2",children:"Dungeons"}),(0,o.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",gap:4,children:[(0,o.jsxs)(w,{children:[(0,o.jsx)(y,{src:"".concat(f.prefix,"data/Dung_Rank").concat(null==r?void 0:r.rank,".png"),alt:""}),(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:["Rank: ",null==r?void 0:r.rank]}),(0,o.jsxs)(a.Z,{children:[null==r?void 0:r.progress," / ",null==r?void 0:r.rankReq]})]})]}),(0,o.jsxs)(w,{children:[(0,o.jsx)("img",{src:"".concat(f.prefix,"etc/boosted-runs.png"),alt:""}),(0,o.jsx)(a.Z,{children:null==r?void 0:r.boostedRuns}),(0,o.jsx)(y,{src:"".concat(f.prefix,"data/DungCredits1.png"),alt:""}),null==r?void 0:r.credits,(0,o.jsx)(y,{src:"".concat(f.prefix,"data/DungCredits2.png"),alt:""}),null==r?void 0:r.flurbos]})]}),(0,o.jsx)(s.Z,{my:2,direction:"row",gap:4,children:(0,o.jsxs)(d.Z,{children:[(0,o.jsx)(l.Z,{expandIcon:n.length>1?(0,o.jsx)(v.Z,{}):null,children:(0,o.jsxs)(s.Z,{direction:"row",gap:2,children:[(0,o.jsx)(a.Z,{children:"Next happy hour:"}),(null==n?void 0:n.length)>0?(0,o.jsx)(Z.Z,{type:"countdown",date:null==n?void 0:n[0],lastUpdated:null==e?void 0:e.lastUpdated}):"waiting for lava to set them"]})}),n.length>1?(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(a.Z,{mb:1,children:"Future happy hours"}),(0,o.jsx)(s.Z,{gap:2,children:n.map((r,n)=>0===n?null:(0,o.jsxs)(s.Z,{direction:"row",gap:3,children:[(0,o.jsxs)(a.Z,{sx:{width:40},children:["#",n]}),(0,o.jsx)(Z.Z,{date:r,lastUpdated:null==e?void 0:e.lastUpdated},"happy-".concat(n))]},"next-happy-hour-".concat(n)))})]}):null]})}),(0,o.jsxs)(s.Z,{direction:"row",flexWrap:"wrap",gap:4,children:[(0,o.jsx)(R,{upgrades:null==r?void 0:r.insideUpgrades}),(0,o.jsx)(R,{isFlurbo:!0,upgrades:null==r?void 0:r.upgrades})]})]})},w=e=>{let{column:r,sx:n={},children:t}=e;return(0,o.jsx)(u.Z,{sx:n,children:(0,o.jsx)(p.Z,{sx:{height:"100%",display:"flex"},children:(0,o.jsx)(s.Z,{direction:r?"column":"row",gap:1,justifyContent:"center",alignItems:"center",children:t})})})},y=x.Z.img(j()),R=e=>{let{isFlurbo:r,upgrades:n=[]}=e,t=e=>(0,f.growth)(null==e?void 0:e.func,null==e?void 0:e.level,null==e?void 0:e.x1,null==e?void 0:e.x2),i=e=>{let n=0;for(let t=e;t<(r?50:100);t++)n+=d(t);return n},d=e=>r?Math.floor(1+Math.pow(1.7*e,1.05)*Math.pow(1.027+(e-30)/(e+30)*.01*Math.floor((e+970)/1e3),e)):Math.floor(2+Math.pow(1.5*e,1.04)*Math.pow(1.024+(e-60)/(e+60)*.01*Math.floor((e+940)/1e3),e));return(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{my:2,variant:"h4",children:[r?"Flurbo":"Dungeon"," Upgrades"]}),(0,o.jsx)(s.Z,{gap:1,children:n.map((e,n)=>{let{level:l,type:c,effect:h}=e,x=l>=(r?50:100);return(0,o.jsx)(u.Z,{sx:{width:{md:450}},children:(0,o.jsx)(p.Z,{children:(0,o.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",gap:2,children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsxs)(a.Z,{children:["+",t(e),"%"===c?c:""," ",(0,f.cleanUnderscore)(h)]}),(0,o.jsx)(a.Z,{color:x?"success.light":"",children:x?"MAXED":"Lv. ".concat(l," / ").concat(r?50:100)})]}),(0,o.jsxs)(s.Z,{direction:"row",gap:3,children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(a.Z,{color:"info.light",children:"Cost"}),(0,o.jsx)(a.Z,{children:d(l)})]}),(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(a.Z,{color:"info.light",children:"Cost to max"}),(0,o.jsx)(a.Z,{children:i(l)})]})]})]})})},"".concat(h,"-").concat(n))})})]})};r.default=b}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=9936)}),_N_E=e.O()}]);