(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8997],{27036:function(n,e,t){"use strict";var r=t(64836);e.Z=void 0;var s=r(t(64938)),i=t(85893),o=(0,s.default)((0,i.jsx)("path",{d:"M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");e.Z=o},20466:function(n,e,t){"use strict";t.d(e,{Z:function(){return getDay}});var r=t(19013),s=t(13882);function getDay(n){return(0,s.Z)(1,arguments),(0,r.Z)(n).getDay()}},33913:function(n,e,t){"use strict";t.d(e,{Z:function(){return isPast}});var r=t(19013),s=t(13882);function isPast(n){return(0,s.Z)(1,arguments),(0,r.Z)(n).getTime()<Date.now()}},49352:function(n,e,t){"use strict";t.d(e,{Z:function(){return isThursday}});var r=t(19013),s=t(13882);function isThursday(n){return(0,s.Z)(1,arguments),4===(0,r.Z)(n).getDay()}},85148:function(n,e,t){"use strict";t.d(e,{Z:function(){return nextThursday}});var r=t(77349),s=t(20466),i=t(13882);function nextThursday(n){return(0,i.Z)(1,arguments),function(n,e){(0,i.Z)(2,arguments);var t=4-(0,s.Z)(n);return t<=0&&(t+=7),(0,r.Z)(n,t)}(n,4)}},23284:function(n,e,t){"use strict";t.d(e,{Z:function(){return previousThursday}});var r=t(13882),s=t(20466),i=t(7069);function previousThursday(n){return(0,r.Z)(1,arguments),function(n,e){(0,r.Z)(2,arguments);var t=(0,s.Z)(n)-4;return t<=0&&(t+=7),(0,i.Z)(n,t)}(n,4)}},28366:function(n,e,t){"use strict";t.d(e,{Z:function(){return startOfToday}});var r=t(69119);function startOfToday(){return(0,r.Z)(Date.now())}},5564:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/misc/constellations",function(){return t(36183)}])},68575:function(n,e,t){"use strict";var r=t(85893),s=t(67294),i=t(98396),o=t(11703),l=t(40044);e.Z=n=>{let{tabs:e,children:t,onTabChange:a}=n,[c,d]=(0,s.useState)(0),u=(0,i.Z)(n=>n.breakpoints.down("md"),{noSsr:!0}),x=Array.isArray(t)?t:[t];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{centered:!u||u&&e.length<4,scrollButtons:!0,allowScrollButtonsMobile:!0,sx:{marginBottom:3},variant:u&&e.length>4?"scrollable":"standard",value:c,onChange:(n,e)=>{d(e),a&&a(e)},children:null==e?void 0:e.map((n,e)=>(0,r.jsx)(l.Z,{label:n},"".concat(n,"-").concat(e)))}),a?t:null==x?void 0:x.map((n,e)=>e===c?n:null)]})}},36183:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return constellations}});var r=t(85893),s=t(67294),i=t(23513),o=t(98396),l=t(51233),a=t(15861),c=t(86886),d=t(67720),u=t(42168),x=t(27036),Constellations=n=>{let{constellations:e=[]}=n,t=(0,o.Z)(n=>n.breakpoints.down("md"),{noSsr:!0});return(0,r.jsxs)(l.Z,{gap:3,children:[(0,r.jsxs)(a.Z,{variant:"h5",textAlign:"center",children:["Total Points: ",(()=>{let{ownedPoints:n,totalPoints:t}=null==e?void 0:e.reduce((n,e)=>{let{points:t,done:r}=e;return r&&(n.ownedPoints+=t),n.totalPoints+=t,n},{ownedPoints:0,totalPoints:0});return"".concat(n," / ").concat(t)})()]}),(0,r.jsxs)(c.ZP,{rowGap:2,justifyContent:"center",container:!0,children:[t?null:(0,r.jsx)(c.ZP,{item:!0,xs:1,children:(0,r.jsx)(a.Z,{variant:"body1",component:"span",children:"Name"})}),(0,r.jsx)(c.ZP,{item:!0,xs:1,children:(0,r.jsx)(a.Z,{variant:"body1",component:"span",children:t?"":"Progress"})}),(0,r.jsx)(c.ZP,{item:!0,xs:2,children:(0,r.jsx)(a.Z,{pl:t?0:6,variant:"body1",component:"span",children:t?"Loc.":"Location"})}),(0,r.jsx)(c.ZP,{item:!0,xs:3,children:(0,r.jsx)(a.Z,{pl:t?0:6,variant:"body1",component:"span",children:t?"Req.":"Requirement"})}),(0,r.jsx)(c.ZP,{item:!0,xs:4,children:(0,r.jsx)(a.Z,{pl:t?0:6,variant:"body1",component:"span",children:"Points"})}),(0,r.jsx)(c.ZP,{item:!0,md:1})]}),null==e?void 0:e.map((n,i)=>{var o;let{name:l,points:m,done:v,requirement:h,completedChars:Z,requiredPlayers:p,location:j}=n;return(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(c.ZP,{rowGap:2,gap:1,container:!0,children:[t?null:(0,r.jsx)(c.ZP,{item:!0,xs:1,children:(0,r.jsx)(a.Z,{variant:"body1",component:"span",children:(0,u.cleanUnderscore)(l)})}),(0,r.jsx)(c.ZP,{item:!0,xs:1,children:v?(0,r.jsx)(x.Z,{color:"success"}):(0,r.jsx)(a.Z,{variant:"body1",component:"span",children:"".concat(null!==(o=null==Z?void 0:Z.length)&&void 0!==o?o:0,"/").concat(p)})}),(0,r.jsx)(c.ZP,{item:!0,xs:2,children:"End_Of_The_Road"===j?(0,u.cleanUnderscore)(j)+" *":(0,u.cleanUnderscore)(j)}),(0,r.jsx)(c.ZP,{item:!0,xs:3,children:(0,u.cleanUnderscore)(h)}),(0,r.jsx)(c.ZP,{item:!0,xs:2,sm:1,children:m}),(0,r.jsx)(c.ZP,{item:!0,xs:2,children:(null==Z?void 0:Z.length)>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{variant:"caption",component:"div",children:"Completed Chars"}),(0,r.jsxs)(a.Z,{variant:"caption",sx:{wordBreak:"break-word"},children:["indexes: ",(0,u.constellationIndexes)(Z)]})]}):null})]}),e.length-1!==i?(0,r.jsx)(d.Z,{}):null]},l+" "+i)})]})},m=t(87357),v=t(68575),Misc_StarSigns=n=>{var e;let{starSigns:t,infiniteStars:i}=n,[h,Z]=(0,s.useState)(0),p=(0,o.Z)(n=>n.breakpoints.down("md"),{noSsr:!0}),j=(0,s.useMemo)(()=>t.filter(n=>{let{tree:e}=n;return"chronus"===e}),[t,i]),f=(0,s.useMemo)(()=>t.filter(n=>{let{tree:e}=n;return"hydron"===e}),[t,i]);return i=0===h?i:i-34,(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v.Z,{tabs:["chronus","hydron"],onTabChange:n=>Z(n),children:(0,r.jsxs)(l.Z,{gap:3,children:[(0,r.jsxs)(c.ZP,{container:!0,children:[(0,r.jsx)(c.ZP,{item:!0,md:4,sx:{display:{sm:"none",md:"block"}},children:"Name"}),(0,r.jsx)(c.ZP,{item:!0,xs:8,md:4,children:"Bonuses"}),(0,r.jsx)(c.ZP,{item:!0,xs:2,md:4,pl:5,children:"Cost"})]}),null===(e=0===h?j:f)||void 0===e?void 0:e.map((n,e)=>{let{indexedStarName:o,cost:l,unlocked:v,bonuses:Z,description:j}=n;return!o.includes("Filler")&&!o.includes("Unknown")&&(0,r.jsxs)(s.Fragment,{children:[(0,r.jsxs)(c.ZP,{rowGap:2,container:!0,children:[(0,r.jsxs)(c.ZP,{item:!0,alignItems:"center",gap:2,md:4,sx:{display:{sm:"none",md:"flex"},justifyContent:{xs:"center",sm:"center",md:"flex-start"}},children:[v?(0,r.jsx)(x.Z,{color:"success"}):(0,r.jsx)(m.Z,{width:24,height:24}),p?null:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{variant:"body1",component:"span",children:(0,u.cleanUnderscore)(o)}),i>=e?(0,r.jsx)("img",{src:"".concat(u.prefix,"data/SignStarInf").concat(0===h?0:1,".png"),alt:""}):null]})]}),(0,r.jsxs)(c.ZP,{item:!0,sm:7,md:4,display:"flex",alignItems:"center",gap:2,children:[p&&v?(0,r.jsx)(x.Z,{color:"success"}):null,(0,r.jsx)(a.Z,{variant:"body1",component:"span",children:Z?null==Z?void 0:Z.map(n=>{let{rawName:e,bonus:t}=n;return(0,u.cleanUnderscore)(e.replace("{",t))}).join(", "):(0,u.cleanUnderscore)(j)})]}),(0,r.jsxs)(c.ZP,{item:!0,sm:4,md:4,children:[" ",(0,r.jsx)(a.Z,{variant:"body1",pl:5,component:"span",children:l})]})]}),t.length-1!==e?(0,r.jsx)(d.Z,{}):null]},name+" "+e)})]})})})},h=t(2962),Z=t(5432),p=t(67896);let j=["Constellations","Star Signs"];var constellations=()=>{var n,e,t,o,l;let{state:a}=(0,s.useContext)(i.I),getInfiniteStar=(n,e)=>{if((0,p.R)(n,"Infinite_Stars"))return 5+(0,Z.du)(e,"Infinite_Star_Signs")},sortStarSigns=n=>{let e=null==n?void 0:n.sort((n,e)=>n.indexedStarName.localeCompare(e.indexedStarName,"en",{numeric:!0})),t=null==e?void 0:e.pop();return e.splice(21,0,t),e},c=(0,s.useMemo)(()=>{var n,e,t;return getInfiniteStar(null==a?void 0:null===(n=a.account)||void 0===n?void 0:n.rift,null==a?void 0:null===(t=a.account)||void 0===t?void 0:null===(e=t.breeding)||void 0===e?void 0:e.pets)},[null==a?void 0:null===(n=a.account)||void 0===n?void 0:n.rift,null==a?void 0:null===(t=a.account)||void 0===t?void 0:null===(e=t.breeding)||void 0===e?void 0:e.pets]),d=(0,s.useMemo)(()=>{var n;return sortStarSigns(null==a?void 0:null===(n=a.account)||void 0===n?void 0:n.starSigns)},[null==a?void 0:null===(o=a.account)||void 0===o?void 0:o.starSigns]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(h.PB,{title:"Idleon Toolbox | Constellations",description:"Constellation and star signs overview"}),(0,r.jsxs)(v.Z,{tabs:j,children:[(0,r.jsx)(Constellations,{constellations:null==a?void 0:null===(l=a.account)||void 0===l?void 0:l.constellations}),(0,r.jsx)(Misc_StarSigns,{starSigns:d,infiniteStars:c})]})]})}}},function(n){n.O(0,[6886,8054,9774,2888,179],function(){return n(n.s=5564)}),_N_E=n.O()}]);