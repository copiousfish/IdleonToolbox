(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[100],{84986:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/world-1/stamps",function(){return n(54514)}])},57404:function(t,e,n){"use strict";var l=n(82729),i=n(85893),a=n(42168),o=n(61599),r=n(15861),c=n(51233);function _templateObject(){let t=(0,l._)(["\n  width: 23px;\n  height: 27px;\n  object-fit: contain;\n"]);return _templateObject=function(){return t},t}let s=o.Z.img(_templateObject());e.Z=t=>{let{centered:e=!0,style:n={},money:l,title:o="Total Money",maxCoins:d=5}=t;return(0,i.jsxs)("div",{style:n,children:[o?(0,i.jsx)(r.Z,{style:{textAlign:"center"},children:o}):null,(0,i.jsx)(c.Z,{flexWrap:"wrap",justifyContent:e?"center":"flex-start",direction:"row",gap:2.3,children:null==l?void 0:l.map((t,e)=>{let[n,l]=t;return e<d&&Number(l)>0?(0,i.jsxs)(c.Z,{justifyContent:"center",alignItems:"center",children:[(0,i.jsx)(s,{src:"".concat(a.prefix,"data/Coins").concat(n,".png"),alt:""}),(0,i.jsx)(r.Z,{variant:"body1",component:"span",className:"coin-value",children:Number(l)})]},l+""+n):null})})]})}},68575:function(t,e,n){"use strict";var l=n(85893),i=n(67294),a=n(98396),o=n(11703),r=n(40044);e.Z=t=>{let{tabs:e,children:n,onTabChange:c}=t,[s,d]=(0,i.useState)(0),u=(0,a.Z)(t=>t.breakpoints.down("md"),{noSsr:!0}),v=Array.isArray(n)?n:[n];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Z,{centered:!u||u&&e.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&e.length>4?"scrollable":"standard",value:s,onChange:(t,e)=>{d(e),c&&c(e)},children:null==e?void 0:e.map((t,e)=>(0,l.jsx)(r.Z,{label:t},"".concat(t,"-").concat(e)))}),c?n:null==v?void 0:v.map((t,e)=>e===s?t:null)]})}},54514:function(t,e,n){"use strict";n.r(e);var l=n(82729),i=n(85893),a=n(15861),o=n(87357),r=n(51233),c=n(66242),s=n(44267),d=n(50480),u=n(69368),v=n(61903),m=n(67294),p=n(23513),h=n(42168),x=n(61599),g=n(88054),j=n(57404),f=n(5072),b=n(91296),Z=n.n(b),y=n(2962),_=n(67896),w=n(88344),C=n(70473),N=n(10924),O=n(68575);function _templateObject(){let t=(0,l._)(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  transform: translate(10%, -50%);\n  position: absolute;\n  top: 0;\n  right: 0;\n"]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,l._)(["\n  width: 32px;\n  height: 32px;\n  object-fit: contain;\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,l._)(["\n  opacity: ",";\n"]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,l._)(["\n  width: 32px;\n  height: 32px;\n  opacity: ",";\n"]);return _templateObject3=function(){return t},t}let S=x.Z.div(_templateObject()),M=x.Z.img(_templateObject1()),StampTooltip=t=>{let{func:e,level:n,goalLevel:l,x1:o,x2:r,displayName:c,effect:s,multiplier:d=1,goalBonus:u}=t,v=(0,h.growth)(e,n,o,r,!0)*d;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Z,{variant:"h5",children:(0,h.cleanUnderscore)(c)}),(0,i.jsxs)(a.Z,{sx:{color:n>0&&d>1?"multi":""},variant:"body1",children:["+",(0,h.cleanUnderscore)(s.replace(/\+{/,v))]}),n!==l?(0,i.jsxs)(a.Z,{mt:1,sx:{color:n>0&&d>1?"multi":""},variant:"body1",children:["Goal: +",(0,h.cleanUnderscore)(s.replace(/\+{/,u))]}):null]})},I=x.Z.img(_templateObject2(),t=>{let{level:e}=t;return 0===e?.5:1}),k=x.Z.img(_templateObject3(),t=>{let{hide:e}=t;return e?.5:1});e.default=()=>{var t,e,n,l,x,b;let{state:A}=(0,m.useContext)(p.I),B=(0,_.R)(null==A?void 0:null===(t=A.account)||void 0===t?void 0:t.rift,"Stamp_Mastery")?null==A?void 0:null===(n=A.account)||void 0===n?void 0:null===(e=n.accountOptions)||void 0===e?void 0:e[154]:0,E=null==A?void 0:null===(x=A.account)||void 0===x?void 0:null===(l=x.atoms)||void 0===l?void 0:l.stampReducer,[G,P]=(0,m.useState)(0),[F,T]=(0,m.useState)(),[q,L]=(0,m.useState)(E),[U,R]=(0,m.useState)(!1),[V,Y]=(0,m.useState)(!1),getStamps=()=>{var t,e,n,l;let i=null===(t=Object.keys(null==A?void 0:null===(e=A.account)||void 0===e?void 0:e.stamps))||void 0===t?void 0:t[G];return null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(n=l.stamps)||void 0===n?void 0:n[i]},z=(0,m.useMemo)(()=>getStamps(),[G]),getAccumulatedCost=(t,e,n,l)=>{let i=(null==F?void 0:F[t])-e,a="gold"===n?calculateGoldCost:calculateMaterialCost;if(i<=0){let t=a(e,l);return"material"===n?Math.floor(t):t}let o=Array(i||0).fill(1).map((t,e)=>e+1),r=o.reduce((t,i)=>{if("material"===n&&(e+i)%(null==l?void 0:l.reqItemMultiplicationLevel)==0||"gold"===n){let n=a(e+i,l);return t+n}return t},a(e,l));return"material"===n?Math.floor(r):r},W=(0,m.useCallback)((t,e,n,l)=>getAccumulatedCost(t,e,n,l),[F,q,U]),X=(0,m.useCallback)((t,e,n)=>(0,N.tc)(t,e,n),[A]),calculateMaterialCost=(t,e)=>{var n,l,i,a,o;let{reqItemMultiplicationLevel:r,baseMatCost:c,powMatBase:s}=e,d=(0,g.YG)(null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(n=l.alchemy)||void 0===n?void 0:n.vials,"material_cost_for_stamps"),u=(0,g.Vq)(null==A?void 0:null===(o=A.account)||void 0===o?void 0:null===(a=o.alchemy)||void 0===a?void 0:null===(i=a.p2w)||void 0===i?void 0:i.sigils,"ENVELOPE_PILE"),v=Math.max(.1,1-(q!==E?q:E)/100);return c*(B>0||U?.05:1)*v*(1/(1+u/100))*Math.pow(s,Math.pow(Math.round(t/r)-1,.8))*Math.max(.1,1-d/100)||0},calculateGoldCost=(t,e)=>{var n,l,i,a;let{reqItemMultiplicationLevel:o,baseCoinCost:r,powCoinBase:c}=e,s=(0,g.YG)(null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(n=l.alchemy)||void 0===n?void 0:n.vials,"material_cost_for_stamps"),d=null==A?void 0:null===(a=A.account)||void 0===a?void 0:null===(i=a.bribes)||void 0===i?void 0:i[0],u=(null==d?void 0:d.done)?r*(1-(null==d?void 0:d.value)/100):r;return Math.floor(u*Math.pow(c-t/(t+5*o)*.25,t*(10/o))*Math.max(.1,1-s/100))},K=Z()((t,e)=>{let{value:n}=t.target;T({...F,[e]:n?parseInt(n):0})},100);return(0,i.jsxs)("div",{children:[(0,i.jsx)(y.PB,{title:"Idleon Toolbox | Stamps",description:"Keep track of your stamps levels and requirements"}),(0,i.jsx)(a.Z,{textAlign:"center",variant:"h2",mb:3,children:"Stamps"}),(0,i.jsx)(a.Z,{textAlign:"center",component:"div",variant:"caption",mb:3,children:"* Green border means you have enough material, money and space to craft"}),(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",my:1},children:[(0,i.jsxs)(r.Z,{gap:1,children:[(0,i.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,i.jsx)("img",{src:"".concat(h.prefix,"data/GildedStamp.png"),alt:""}),B]})}),(0,i.jsx)(c.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:(0,i.jsxs)(s.Z,{sx:{display:"flex",alignItems:"center",gap:1},children:[(0,i.jsx)("img",{src:"".concat(h.prefix,"data/Atom0.png"),height:36,alt:""}),null!=E?E:0,"%"]})})]}),(0,i.jsxs)(r.Z,{sx:{mx:2},children:[(0,i.jsx)(d.Z,{control:(0,i.jsx)(u.Z,{name:"mini",checked:V,onChange:()=>Y(!V),size:"small"}),label:"Subtract green stacks"}),(0,i.jsx)(d.Z,{control:(0,i.jsx)(u.Z,{name:"mini",checked:U,onChange:()=>R(!U),size:"small"}),label:"Force gilded stamp"}),(0,i.jsx)(v.Z,{label:"Stamp Reducer",value:q,onChange:t=>L(t.target.value),type:"number",InputProps:{inputProps:{min:0,max:90}}})]})]}),(0,i.jsx)(O.Z,{tabs:Object.keys(null==A?void 0:null===(b=A.account)||void 0===b?void 0:b.stamps),onTabChange:t=>{P(t)},children:(0,i.jsx)(r.Z,{direction:"row",flexWrap:"wrap",justifyContent:"center",gap:3,children:null==z?void 0:z.map((t,e)=>{var n,l,o,d,u;let p,x,g,b;let{displayName:Z,rawName:y,level:_,itemReq:N,multiplier:O=1,func:B,x1:E,x2:G,reqItemMultiplicationLevel:P}=t,T=(null==F?void 0:F[e])?(null==F?void 0:F[e])<_?_:null==F?void 0:F[e]:_,q=(0,h.growth)(B,T,E,G,!0)*O,L=null==N?void 0:N.map(n=>{var l,i,a,o,r,c;let{rawName:s}=n,d=(0,w.F6)(C.crafts[null===C.items||void 0===C.items?void 0:null===(l=C.items[s])||void 0===l?void 0:l.displayName]),u=W(e,_,"material",t),v=W(e,_,"gold",t),m=T%P==0;return v&&(x=(null==A?void 0:null===(a=A.account)||void 0===a?void 0:null===(i=a.currencies)||void 0===i?void 0:i.rawMoney)>=v),(null==d?void 0:d.length)>0?p=null==d?void 0:d.every(t=>{var e,n,l;let{rawName:i,type:a,itemQuantity:o}=t;if("Equip"===a)return!0;let r=null==A?void 0:null===(l=A.account)||void 0===l?void 0:null===(n=l.storage)||void 0===n?void 0:null===(e=n.find(t=>{let{rawName:e}=t;return e===i}))||void 0===e?void 0:e.amount;return(r=V?r-1e7:r)>=o*u}):(b=null==A?void 0:null===(c=A.account)||void 0===c?void 0:null===(r=c.storage)||void 0===r?void 0:null===(o=r.find(t=>{let{rawName:e}=t;return e===s}))||void 0===o?void 0:o.amount,p=(b=V?b-1e7:b)>=u),{...n,materials:d,materialCost:u,goldCost:v,isMaterialCost:m,hasMaterials:p,hasMoney:x}}),U=X(null===C.items||void 0===C.items?void 0:C.items[null==N?void 0:null===(n=N[0])||void 0===n?void 0:n.rawName],null==A?void 0:A.characters,null==A?void 0:A.account);return g=(null==U?void 0:U.maxCapacity)>=(null==L?void 0:null===(l=L[0])||void 0===l?void 0:l.materialCost),(0,i.jsx)(m.Fragment,{children:(0,i.jsx)(c.Z,{sx:{overflow:"visible",position:"relative",width:230,border:p&&x&&g&&_>0?"1px solid #81c784":""},children:(0,i.jsxs)(s.Z,{sx:{"&:last-child":{paddingBottom:4}},children:[_>0?(0,i.jsxs)(S,{children:[p?null:(0,i.jsx)(f.Z,{title:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.Z,{children:["Not enough ",(0,h.cleanUnderscore)(null==N?void 0:null===(o=N[0])||void 0===o?void 0:o.name)]}),(0,i.jsxs)(a.Z,{children:["You have ",(0,h.notateNumber)(null!=b?b:0,"Big"),", you need ",(0,h.notateNumber)(Math.abs((null!=b?b:0)-(null==L?void 0:null===(d=L[0])||void 0===d?void 0:d.materialCost)),"Big")]})]}),children:(0,i.jsx)("img",{width:24,height:24,src:"".concat(h.prefix,"data/").concat(null==N?void 0:null===(u=N[0])||void 0===u?void 0:u.rawName,".png"),alt:""})}),x?null:(0,i.jsx)(f.Z,{title:"Not enough coins",children:(0,i.jsx)("img",{width:20,height:20,src:"".concat(h.prefix,"data/Coins5.png"),alt:""})}),g?null:(0,i.jsx)(f.Z,{title:"Not enough capacity",children:(0,i.jsx)("img",{width:24,height:24,style:{objectFit:"contain"},src:"".concat(h.prefix,"etc/Character.png"),alt:""})})]}):null,(0,i.jsxs)(r.Z,{direction:"row",alignItems:"center",justifyContent:"space-around",gap:2,children:[(0,i.jsxs)(r.Z,{alignItems:"center",children:[(0,i.jsx)(f.Z,{title:(0,i.jsx)(StampTooltip,{...t,goalLevel:T,goalBonus:q}),children:(0,i.jsx)(I,{width:48,height:48,level:_,src:"".concat(h.prefix,"data/").concat(y,".png"),alt:""})}),(0,i.jsxs)(a.Z,{variant:"body1",children:["Lv. ",_]})]}),(0,i.jsx)(v.Z,{type:"number",sx:{width:90},defaultValue:T,onChange:t=>K(t,e),label:"Goal",variant:"outlined",inputProps:{min:_||0}})]}),null==L?void 0:L.map((t,e)=>{var n;let{rawName:l,name:o,materialCost:c,isMaterialCost:s,goldCost:d}=t;return(0,i.jsxs)(r.Z,{gap:1,mt:2,children:[(0,i.jsxs)(r.Z,{gap:2,justifyContent:"center",direction:"row",alignItems:"center",children:[(0,i.jsx)(M,{src:"".concat(h.prefix,"data/SignStar3b.png"),alt:""}),(0,i.jsx)(a.Z,{children:isNaN(q)?0:q}),(0,i.jsx)(f.Z,{title:"Best to craft with ".concat(null!==(n=null==U?void 0:U.character)&&void 0!==n?n:"Nobody"," (Capacity: ").concat(isNaN(null==U?void 0:U.maxCapacity)?0:(0,h.notateNumber)(null==U?void 0:U.maxCapacity,"Big"),")"),children:(0,i.jsxs)(r.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,i.jsx)(k,{hide:!c||!s,src:"".concat(h.prefix,"data/").concat(l,".png"),alt:""}),c?(0,h.notateNumber)(c,"Big"):null]})})]}),(0,i.jsx)(j.Z,{title:"",money:(0,h.getCoinsArray)(d)})]},"".concat(l,"-").concat(o,"-").concat(e))})]})})},y+""+Z+e)})})})]})}}},function(t){t.O(0,[5106,8054,9774,2888,179],function(){return t(t.s=84986)}),_N_E=t.O()}]);