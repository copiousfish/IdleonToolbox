(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8026],{9704:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return c(5496)}])},8211:function(c,b,a){"use strict";var d=a(5893),e=a(7294),f=a(134),g=a(6447),h=a(5861),i=a(7720),j=a(3133);b.Z=function(b){var l=b.libraryTimes,m=b.lastUpdated,a=l||{},n=a.bookCount,c=a.next,k=a.breakpoints;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(g.Z,{direction:"row",alignItems:"center",gap:1,children:[(0,d.jsx)("img",{src:"".concat(j.prefix,"data/Libz.png"),alt:""}),(0,d.jsx)("h3",{children:"Library"})]}),(0,d.jsxs)("h4",{children:["Book count: ",n]}),(0,d.jsxs)(g.Z,{direction:"row",gap:1,alignItems:"center",children:[(0,d.jsx)(h.Z,{sx:{width:100},children:"Next book in: "})," ",c>0?(0,d.jsx)(f.Z,{type:"countdown",lastUpdated:m,date:new Date().getTime()+1e3*c}):(0,d.jsx)(h.Z,{variant:"caption",children:"Wait for game update"})]}),null==k?void 0:k.map(function(b,c){var j=b.breakpoint,a=b.time;return a>0?(0,d.jsxs)(e.Fragment,{children:[(0,d.jsx)(i.Z,{sx:{my:1}}),(0,d.jsxs)(g.Z,{direction:"row",gap:1,children:[(0,d.jsxs)(h.Z,{sx:{width:100},children:[j," books in: "]})," ",a>0?(0,d.jsx)(f.Z,{type:"countdown",lastUpdated:m,date:new Date().getTime()+1e3*a}):(0,d.jsx)(h.Z,{variant:"caption",children:"Wait for game update"})]})]},"book-timer"+c):null})]})}},134:function(e,b,a){"use strict";var f=a(5893),g=a(7294),h=a(3277),i=a(3913),j=a(3133),c=a(5934),k=a(5861);function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){l(d,a,c[a])})}return d}function d(){var a,b,c=(a=["\n  .overtime {\n    color: #f91d1d;\n  }\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var n=c.Z.span(d());b.Z=function(b){var o=b.date,s=b.startDate,p=b.lastUpdated,t=b.type,d=b.pause,q=b.staticTime,e=b.placeholder,r=b.loop,l=(0,g.useState)(),a=l[0],u=l[1];(0,g.useEffect)(function(){if(o){if(q)return u(m({},(0,j.getDuration)(new Date().getTime(),o)));var a=new Date,b=a.getTime()-(null!=p?p:0),c=(0,i.Z)(o);u(m({},(0,j.getDuration)(null==a?void 0:a.getTime(),o+b*("countdown"===t?-1:1)),{overtime:"countdown"===t&&c}))}},[o,p]);var v=function(){var d=a.days,e=a.hours,b=a.minutes,c=a.seconds;60===(c+=1)&&(c=0,60===(b+=1)&&(b=0,24===(e+=1)&&(d+=1))),u(m({},a,{days:d,hours:e,minutes:b,seconds:c}))},w=function(){var e=a.days,b=a.hours,c=a.minutes,d=a.seconds;if(0===e&&0===b&&0===c&&0===d&&r)return u(m({},(0,j.getDuration)(new Date().getTime(),s)));-1==(d-=1)&&(d=59,-1==(c-=1)&&(c=59,-1==(b-=1)&&(b=0,e-=1))),u(m({},a,{days:e,hours:b,minutes:c,seconds:d}))};(0,h.Z)(function(){if(!a)return null;"countdown"!==t||(null==a?void 0:a.overtime)?v():w()},d||q?null:1e3);var c=function(a){var b=String(a);return(null==b?void 0:b.length)===1?"0".concat(a):a};return a?(0,f.jsx)(n,{children:((null==a?void 0:a.overtime)||d)&&e?e:(0,f.jsxs)(k.Z,{className:"".concat((null==a?void 0:a.overtime)&&!r?"overtime":""),component:"span",children:[(null==a?void 0:a.days)?c(null==a?void 0:a.days)+"d:":"",c(null==a?void 0:a.hours)+"h:",c(null==a?void 0:a.minutes)+"m",(null==a?void 0:a.days)?"":":",(null==a?void 0:a.days)?"":c(null==a?void 0:a.seconds)+"s"]})}):null}},5496:function(f,b,a){"use strict";a.r(b),a.d(b,{"default":function(){return aA}});var g=a(5893),h=a(7294),i=a(6998),j=a(6447),k=a(5861),l=a(5113),m=a(1528),n=a(2359),o=a(122),p=a(657),q=a(7645),r=a(7871),s=a(3457),t=a(476),u=a(480),v=a(9368),w=a(6242),x=a(4267),y=a(7357),z=a(7720),A=a(3133),c=a(5934),B=a(5231),C=a(3913),D=a(9690),E=a(6972),F=a(9619),G=a(7713),H=a(2761),I=a(2835),J=a(3771);function K(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function L(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function M(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){L(d,a,c[a])})}return d}function N(a,b){return function(a){if(Array.isArray(a))return a}(a)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(a,b)||P(a,b)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(a){return function(a){if(Array.isArray(a))return K(a)}(a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(a)||P(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(a,c){if(a){if("string"==typeof a)return K(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return K(a,c)}}var Q=function(b,c){var a;return null==b?void 0:null===(a=b.traps)|| void 0===a?void 0:a[c].some(function(a){return(0,C.Z)(null==a?void 0:a.timeLeft)})},R=function(b,c,n){var e,f,g,h,i,j,k,l,m,d=null==c?void 0:null===(e=c.traps)|| void 0===e?void 0:e[n],a=(null==b?void 0:null===(f=b[4])|| void 0===f?void 0:f.rawName)!=="Blank"?null==b?void 0:b[4]:null,o=null===(j=null==c?void 0:null===(g=c.alchemy)|| void 0===g?void 0:null===(h=g.bubbles)|| void 0===h?void 0:null===(i=h.quicc)|| void 0===i?void 0:i.find(function(a){return"CALL_ME_ASH"===a.bubbleName}))|| void 0===j?void 0:j.level,p=a?parseInt(null!==(m=null==a?void 0:null===(k=a.rawName)|| void 0===k?void 0:k.charAt((null==a?void 0:null===(l=a.rawName)|| void 0===l?void 0:l.length)-1))&& void 0!==m?m:0)+(o>0?1:0):null==d?void 0:d.length;return(null==d?void 0:d.length)<Math.min(p,8)},S=function(a){var b=5*(null==a?void 0:a.maxCharge)/100;return(null==a?void 0:a.currentCharge)>=(null==a?void 0:a.maxCharge)-b},T=function(d,e,f){var a,b,c;return((null==d?void 0:d.find(function(a){return"HAMMER_HAMMER"===a.bubbleName}))?3:2)-(null==e?void 0:null===(a=e.anvil)|| void 0===a?void 0:null===(b=a[f])|| void 0===b?void 0:null===(c=b.production)|| void 0===c?void 0:c.filter(function(a){return a.hammers>0})).reduce(function(a,b){return a+b.hammers},0)},U=function(d,h,g){var a,b,c,e=null==d?void 0:null===(a=d.anvil)|| void 0===a?void 0:a[g],f=null===(c=null==e?void 0:null===(b=e.production)|| void 0===b?void 0:b.filter(function(a){return a.hammers>0}))|| void 0===c?void 0:c.map(function(a){var b,c=1e3*(0,I.MH)(M({},a,{anvil:e,afkTime:h}));return{date:new Date().getTime()+c,name:null===G.items|| void 0===G.items?void 0:null===(b=G.items[null==a?void 0:a.rawName])|| void 0===b?void 0:b.displayName,rawName:null==a?void 0:a.rawName}});return null==f?void 0:f.map(function(a){var b=a.date,c=a.name,d=a.rawName,e=new Date(b-1);return{diff:(0,D.Z)(e,new Date),name:c,rawName:d}}).filter(function(a){return a.diff<=60})},V=function(a){var b,c=a.postOffice,d=a.afkTime,e=a.cooldowns,g=a.flatTalents,h={32:!0,130:!0,490:!0,25:!0},f=(0,F.x)(c,"Magician_Starterpack",2),i=Math.max(0,f),j=(new Date().getTime()-d)/1e3;return null===(b=Object.entries(e))|| void 0===b?void 0:b.reduce(function(b,e){var d=N(e,2),f=d[0],k=d[1];if(!h[f])return b;var a=null==g?void 0:g.find(function(a){var b=a.talentId;return parseInt(f)===b});if(!a)return b;var c=(1-i/100)*k-j,l=c<0?c:new Date().getTime()+1e3*c;return(0,C.Z)(l)?O(b).concat([{name:null==a?void 0:a.name,skillIndex:null==a?void 0:a.skillIndex}]):b},[])},W=function(c,d){var a,b,e=null==d?void 0:null===(a=d.accountOptions)|| void 0===a?void 0:a[89],f=null===G.randomList|| void 0===G.randomList?void 0:G.randomList[53],g=(0,H.bV)(e,f,11);return(null==c?void 0:null===(b=c.equippedBubbles)|| void 0===b?void 0:b.length)<(g?3:2)},X=function(c){var a,b;return null==c?void 0:null===(a=c.obols)|| void 0===a?void 0:null===(b=a.list)|| void 0===b?void 0:b.filter(function(a){return"Blank"===a.rawName})},Y=function(b,c){var a;return(null==c?void 0:null===(a=c.starSigns)|| void 0===a?void 0:a.reduce(function(a,b){var c=b.starName,d=b.unlocked;return c.includes("Chronus_Cosmos")&&d?a<2?2:a:c.includes("Hydron_Cosmos")&&d&&a<3?3:a},1))-(null==b?void 0:b.starSigns.length)},Z=function(a,d){var c=new Date().getTime()+((null==a?void 0:a.afkTime)-d);if((0,D.Z)(new Date,new Date(c))>=5){var b,e=null==a?void 0:null===(b=a.activePrayers)|| void 0===b?void 0:b.find(function(a){return"Unending_Energy"===a.name}),f=(0,E.Z)(new Date,new Date(c));return e&&f>10}return!1},$=function(a){if((null==a?void 0:a.class)==="Maestro"){var b;return null===(b=Object.entries(null==a?void 0:a.skillsInfo))|| void 0===b?void 0:b.reduce(function(d,h){var e=N(h,2),c=e[0],b=e[1];if((null==b?void 0:b.index)<10&&"character"!==c){var i=(0,H.O4)(c,null==b?void 0:b.level),f=100*(1-(null==b?void 0:b.expReq)/i);if(f>0){var g=(0,J._X)(null==a?void 0:a.talents,2,"CRYSTAL_COUNTDOWN");if(f===g)return O(d).concat([M({name:c},b,{crystalCountdown:g})])}}return d},[])}};function d(){var a,b,c=(a=["\n  width: 35px;\n  height: 35px;\n  object-fit: contain;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var _=function(a){var c=a.title,d=a.iconPath,b=a.style;return(0,g.jsx)(B.Z,{title:c,children:(0,g.jsx)(aa,{style:void 0===b?{}:b,src:"".concat(A.prefix).concat(d,".png"),alt:""})})},aa=c.Z.img(d()),ab=function(a){var b=a.characters,c=a.account,d=a.lastUpdated,e=a.trackers;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(j.Z,{gap:2,direction:"row",flexWrap:"wrap",children:b.map(function(a,f){var n,b=a.name,t=a.tools,u=a.classIndex,p=a.afkTarget,v=a.worship,o=a.postOffice,C=a.equippedBubbles,D=a.afkTime,q="_"!==p?p:"Nothing",r=(null==e?void 0:e.anvil)&&T(C,c,f),h=(null==e?void 0:e.talents)&&V(a),i=(null==e?void 0:e.obols)&&X(a),s=(null==e?void 0:e.starSigns)&&Y(a,c),l=U(c,D,f),m=$(a,c);return(0,g.jsx)(w.Z,{sx:{width:345},children:(0,g.jsxs)(x.Z,{children:[(0,g.jsxs)(j.Z,{direction:"row",alignItems:"center",gap:1,flexWrap:"wrap",children:[(0,g.jsx)(y.Z,{sx:{display:{sm:"none",md:"block"}},children:(0,g.jsx)("img",{src:"".concat(A.prefix,"data/ClassIcons").concat(u,".png"),alt:""})}),(0,g.jsx)(k.Z,{children:b}),(0,g.jsx)(B.Z,{title:(0,A.cleanUnderscore)(q),children:(0,g.jsx)(aa,{src:"".concat(A.prefix,"afk_targets/").concat(q,".png"),alt:"activity icon",style:{marginLeft:"auto"}})})]}),(0,g.jsx)(z.Z,{sx:{my:1}}),(0,g.jsxs)(j.Z,{direction:"row",gap:1,flexWrap:"wrap",children:[(null==e?void 0:e.prayers)&&Z(a,d)?(0,g.jsx)(_,{title:"".concat(b," has unending energy prayer and is afk for more than 10 hours!"),iconPath:"data/Prayer2"}):null,(null==e?void 0:e.traps)&&Q(c,f)?(0,g.jsx)(_,{title:"".concat(b," traps are overdue!"),iconPath:"data/TrapBoxSet1"}):null,(null==e?void 0:e.traps)&&R(t,c,f)?(0,g.jsx)(_,{title:"".concat(b," is missing a trap!"),iconPath:"data/ClassIcons48"}):null,(null==e?void 0:e.bubbles)&&W(a,c)?(0,g.jsx)(_,{title:"".concat(b," is missing an active bubble!"),iconPath:"data/aJarB0"}):null,(null==e?void 0:e.worship)&&S(v)?(0,g.jsx)(_,{title:"".concat(b," worship is full!"),iconPath:"data/ClassIcons50"}):null,(null==e?void 0:e.obols)&&(null==i?void 0:i.length)>0?(0,g.jsx)(_,{title:"".concat(b," has ").concat(null==i?void 0:i.length," empty obol slots!"),iconPath:"data/ObolLocked1"}):null,(null==e?void 0:e.postOffice)&&(null==(n=o)?void 0:n.unspentPoints)>0&&n.boxes.some(function(a){var b=a.level,c=a.maxLevel;return b<c})?(0,g.jsx)(_,{title:"".concat(b," has ").concat(null==o?void 0:o.unspentPoints," unspent points"),iconPath:"data/UIboxUpg0"}):null,(null==e?void 0:e.anvil)&&r>0?(0,g.jsx)(_,{title:"".concat(b," is missing ").concat(r," hammers"),iconPath:"data/GemP1"}):null,(null==e?void 0:e.anvil)&&(null==l?void 0:l.length)>0?null==l?void 0:l.map(function(a){var b=a.diff,c=a.name,d=a.rawName,e=b<=0;return(0,g.jsx)(_,{title:"".concat((0,A.cleanUnderscore)(c)," ").concat(e?"production is full!":"is ".concat(b," minutes away from being full!")),iconPath:"data/".concat(d)},"".concat(c,"-").concat(f))}):null,(null==e?void 0:e.starSigns)&&s>0?(0,g.jsx)(_,{title:"".concat(b," is missing ").concat(s," star signs!"),iconPath:"data/SignStar1b"}):null,(null==e?void 0:e.talents)&&(null==h?void 0:h.length)>0?null==h?void 0:h.map(function(a,c){var d=a.name,b=a.skillIndex;return(0,g.jsx)(_,{title:"".concat((0,A.cleanUnderscore)((0,A.pascalCase)(d))," is ready!"),iconPath:"data/UISkillIcon".concat(b)},b+"-"+c)}):null,(null==e?void 0:e.crystalCountdown)&&(null==m?void 0:m.length)>0?null==m?void 0:m.map(function(a,c){var d=a.name,b=a.icon,e=a.crystalCountdown;return(0,g.jsx)(_,{style:{border:"1px solid #fbb9b9",borderRadius:5},title:"Crystal Countdown is maxed for ".concat((0,A.cleanUnderscore)((0,A.pascalCase)(d))," (").concat(e.toFixed(2),"%)!"),iconPath:"data/".concat(b)},b+"-"+c+"-"+f)}):null]})]})},b)})})})},ac=a(5030),ad=a(3681),ae=a(1680),af=a(9346),ag=a(5817);function ah(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function ai(c,a){(null==a||a>c.length)&&(a=c.length);for(var b=0,d=new Array(a);b<a;b++)d[b]=c[b];return d}function aj(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function e(){var a,b,c=(a=["\n  width: ",";\n  height: ",";\n  object-fit: contain;\n  ","\n  position: ",";\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return e=function(){return c},c}var ak={stampReducer:function(b){var a;return(null==b?void 0:null===(a=b.atoms)|| void 0===a?void 0:a.stampReducer)>=90},sigils:function(d){var a,b,c;return null==d?void 0:null===(a=d.alchemy)|| void 0===a?void 0:null===(b=a.p2w)|| void 0===b?void 0:null===(c=b.sigils)|| void 0===c?void 0:c.filter(function(a){var b=a.characters,c=a.unlocked;return b.length>0&&1===c})},refinery:function(c){var a,b;return null==c?void 0:null===(a=c.refinery)|| void 0===a?void 0:null===(b=a.salts)|| void 0===b?void 0:b.reduce(function(a,b,h){var d,i=b.rank,e=b.cost,g=b.rawName,f=null==e?void 0:e.filter(function(a){var b,d=a.rawName,e=a.quantity,f=a.totalAmount;return f<Math.floor(Math.pow(i,(null==d?void 0:d.includes("Refinery"))&&h<=(null==c?void 0:null===(b=c.refinery)|| void 0===b?void 0:b.refinerySaltTaskLevel)?1.3:1.5))*e});return f.length>0&&(a=((function(a){if(Array.isArray(a))return ah(a)})(d=a)||function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}(d)||function(a,c){if(a){if("string"==typeof a)return ah(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return ah(a,c)}}(d)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([{rawName:g,missingMats:f}])),a},[])},towers:function(c){var a,b;return null==c?void 0:null===(a=c.towers)|| void 0===a?void 0:null===(b=a.data)|| void 0===b?void 0:b.filter(function(a){var b=(0,ad.ZX)(null==c?void 0:c.towers,null==a?void 0:a.level,null==a?void 0:a.bonusInc,null==a?void 0:a.index);return(null==a?void 0:a.progress)>=b})},keys:function(b){var a,c=null==b?void 0:null===(a=b.currencies)|| void 0===a?void 0:a.KeysAll;return null==c?void 0:c.filter(function(a){return a.daysSincePickup>=3})},arcadeBalls:function(a){var b,c,d;return Math.floor(Math.min((null==a?void 0:null===(b=a.timeAway)|| void 0===b?void 0:b.GlobalTime)-(null==a?void 0:null===(c=a.timeAway)|| void 0===c?void 0:c.Arcade),(0,ac.he)(null==a?void 0:a.stamps))/Math.max((0,ac.gq)(a),1800))>=(null==a?void 0:null===(d=a.arcade)|| void 0===d?void 0:d.maxBalls)},vials:function(c,d){var a,b,e=(d||{}).subtractGreenStacks;return null==c?void 0:null===(a=c.alchemy)|| void 0===a?void 0:null===(b=a.vials)|| void 0===b?void 0:b.filter(function(i){var a,b,d,f,g,h,j=i.level,k=i.itemReq,m=null===ae.ln|| void 0===ae.ln?void 0:ae.ln[j],l=(null===(b=null==c?void 0:null===(a=c.storage)|| void 0===a?void 0:a.find(function(b){var a,c;return b.name===(null==k?void 0:null===(a=k[0])|| void 0===a?void 0:a.name)}))|| void 0===b?void 0:b.amount)||0;e&&(l-=1e7);var n=parseInt((null===(f=null==k?void 0:null===(d=k[1])|| void 0===d?void 0:d.name.split("d"))|| void 0===f?void 0:f[1])||0),o=null==c?void 0:null===(g=c.alchemy)|| void 0===g?void 0:null===(h=g.liquids)|| void 0===h?void 0:h[n-1],p=3*j;return l>m&&o>p})},cooking:function(c){var a,b;return af.Cz-(null==c?void 0:null===(a=c.cooking)|| void 0===a?void 0:null===(b=a.spices)|| void 0===b?void 0:b.numberOfClaims)},miniBosses:function(a){var c,d,b=[],e=null==a?void 0:null===(c=a.accountOptions)|| void 0===c?void 0:c[96],f=null==a?void 0:null===(d=a.accountOptions)|| void 0===d?void 0:d[98];if(e>3){var g=Math.min(10,Math.floor(Math.pow(e-3,.55)));g>0&&b.push({rawName:"mini3b",name:"Dilapidated_Slush",currentCount:g})}if(f>3){var h=Math.min(8,Math.floor(Math.pow(f-3,.5)));h>0&&b.push({rawName:"mini4b",name:"Mutated_Mush",currentCount:h})}return b.length>0?b:null},bargainTag:function(b){var a;return(null==b?void 0:null===(a=b.accountOptions)|| void 0===a?void 0:a[62])===0},gaming:function(a,c){var g=c.sprouts,h=c.squirrel,i=c.shovel,b={};if(g&&(null==a?void 0:null===(l=a.gaming)|| void 0===l?void 0:l.availableSprouts)>=(null==a?void 0:null===(m=a.gaming)|| void 0===m?void 0:m.sproutsCapacity)&&(b.maxSprouts=null==a?void 0:null===(q=a.gaming)|| void 0===q?void 0:q.availableSprouts),g&&(null==a?void 0:null===(n=a.gaming)|| void 0===n?void 0:n.availableDrops)>=(null==a?void 0:null===(o=a.gaming)|| void 0===o?void 0:o.sproutsCapacity)&&(b.drops=null==a?void 0:null===(r=a.gaming)|| void 0===r?void 0:r.availableDrops),i&&(null==a?void 0:null===(p=a.gaming)|| void 0===p?void 0:p.lastShovelClicked)>0){var l,m,n,o,p,d,q,r,e,j=new Date().getTime()-(null==a?void 0:null===(e=a.gaming)|| void 0===e?void 0:e.lastShovelClicked)*1e3;b.shovel=(0,ag.Z)(j)}if(h&&(null==a?void 0:null===(d=a.gaming)|| void 0===d?void 0:d.lastAcornClicked)>0){var f,k=new Date().getTime()-(null==a?void 0:null===(f=a.gaming)|| void 0===f?void 0:f.lastAcornClicked)*1e3;b.squirrel=(0,ag.Z)(k)}return b},guildTasks:function(a,k){var b,c,d,e,f,g,h,i,l=k.daily,m=k.weekly,j={};return l&&(j.daily=null===(e=null==a?void 0:null===(b=a.guild)|| void 0===b?void 0:null===(c=b.guildTasks)|| void 0===c?void 0:null===(d=c.daily)|| void 0===d?void 0:d.filter(function(a){var b=a.requirement,c=a.progress;return c<b}))|| void 0===e?void 0:e.length),m&&(j.weekly=null===(i=null==a?void 0:null===(f=a.guild)|| void 0===f?void 0:null===(g=f.guildTasks)|| void 0===g?void 0:null===(h=g.weekly)|| void 0===h?void 0:h.filter(function(a){var b=a.requirement,c=a.progress;return c<b}))|| void 0===i?void 0:i.length),j}},al=function(b){var d=b.title,e=b.iconPath,a=b.vial,c=b.imgStyle;return(0,g.jsx)(B.Z,{title:d,children:(0,g.jsxs)(y.Z,{sx:{position:"relative"},children:[(0,g.jsx)(an,{style:function(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){aj(d,a,c[a])})}return d}({},void 0===c?{}:c),vial:a,src:"".concat(A.prefix).concat(e,".png"),alt:""}),a?(0,g.jsx)("img",{onError:function(a){a.target.src="".concat(A.prefix,"data/aVials12.png"),a.target.style="opacity: 0;"},src:"".concat(A.prefix,"data/aVials").concat((null==a?void 0:a.level)===0?"1":null==a?void 0:a.level,".png"),style:{opacity:(null==a?void 0:a.level)===0?.5:1,width:35,height:40},alt:"vial image missing"},"".concat(null==a?void 0:a.name)):null]})})},am=function(a){var b=a.missingMats;return(0,g.jsxs)(j.Z,{alignItems:"center",children:["Missing materials",(0,g.jsx)(j.Z,{direction:"row",children:b.map(function(b){var a=b.rawName;return(0,g.jsx)(an,{src:"".concat(A.prefix,"data/").concat(a,".png"),alt:""},a)})})]})},an=c.Z.img(e(),function(a){return a.vial?"25px":"35px"},function(a){return a.vial?"25px":"35px"},function(a){return a.vial?"top: 50%;left: 50%;transform:translate(-60%, -70%);":""},function(a){return a.vial?"absolute":"relative"}),ao=function(c){var d,e,f,i,l,m,n,o,p,q,r,s,t,u,v,y,z,B,C,D,E,F,G,I=c.account,b=c.trackers,J=c.trackersOptions,H=(0,h.useState)(),a=H[0],K=H[1];return(0,h.useEffect)(function(){if(b&&Object.values(b).some(function(a){return a})){var a=Object.entries(b).reduce(function(d,f){var b,c,e=(c=2,function(a){if(Array.isArray(a))return a}(b=f)||function(b,e){var f,g,a=null==b?null:"undefined"!=typeof Symbol&&b[Symbol.iterator]||b["@@iterator"];if(null!=a){var c=[],d=!0,h=!1;try{for(a=a.call(b);!(d=(f=a.next()).done)&&(c.push(f.value),!e||c.length!==e);d=!0);}catch(i){h=!0,g=i}finally{try{d||null==a.return||a.return()}finally{if(h)throw g}}return c}}(b,c)||function(a,c){if(a){if("string"==typeof a)return ai(a,c);var b=Object.prototype.toString.call(a).slice(8,-1);if("Object"===b&&a.constructor&&(b=a.constructor.name),"Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return ai(a,c)}}(b,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=e[0];return e[1]&&(null==ak?void 0:ak[a])&&(d[a]=null==ak?void 0:ak[a](I,null==J?void 0:J[a])),d},{});K(Object.values(a).some(function(a){return Array.isArray(a)?a.length>0:a})?a:null)}else K(null)},[I,b,J]),(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(w.Z,{children:(0,g.jsx)(x.Z,{children:a?(0,g.jsxs)(j.Z,{direction:"row",gap:2,flexWrap:"wrap",children:[(null==b?void 0:b.stampReducer)&&(null==a?void 0:a.stampReducer)?(0,g.jsx)(al,{title:"Stamp reducer is maxed (90%)!",iconPath:"data/Atom0"}):null,(null==b?void 0:b.bargainTag)&&(null==a?void 0:a.bargainTag)?(0,g.jsx)(al,{title:"You haven't use bargain tag even once today!",iconPath:"data/aShopItems10"}):null,(null==b?void 0:b.cooking)&&(null==a?void 0:a.cooking)>0?(0,g.jsx)(al,{title:"You have ".concat(null==a?void 0:a.cooking," spice clicks left!"),iconPath:"data/CookingSpice0"}):null,(null==b?void 0:b.arcadeBalls)&&(null==a?void 0:a.arcadeBalls)?(0,g.jsx)(al,{title:"Max ball capacity has reached!",iconPath:"data/PachiBall0"}):null,(null==b?void 0:b.gaming)&&(null==a?void 0:null===(d=a.gaming)|| void 0===d?void 0:d.maxSprouts)?(0,g.jsx)(al,{title:"Max sprouts capacity has reached (".concat(null==a?void 0:null===(e=a.gaming)|| void 0===e?void 0:e.maxSprouts,")"),imgStyle:{objectFit:"none"},iconPath:"etc/Sprouts"}):null,(null==b?void 0:b.gaming)&&(null==a?void 0:null===(f=a.gaming)|| void 0===f?void 0:f.drops)?(0,g.jsx)(al,{title:"Sprinkler drops has reached it's capacity (".concat(null==a?void 0:null===(i=a.gaming)|| void 0===i?void 0:i.drops,")"),iconPath:"data/GamingItem0b"}):null,(null==b?void 0:b.gaming)&&(null==a?void 0:null===(l=a.gaming)|| void 0===l?void 0:l.squirrel)>=1?(0,g.jsx)(al,{title:"".concat(null==a?void 0:null===(m=a.gaming)|| void 0===m?void 0:m.squirrel," hours has passed since you've clicked the squirrel!"),iconPath:"data/GamingItem2"}):null,(null==b?void 0:b.gaming)&&(null==a?void 0:null===(n=a.gaming)|| void 0===n?void 0:n.shovel)>=1?(0,g.jsx)(al,{title:"".concat(null==a?void 0:null===(o=a.gaming)|| void 0===o?void 0:o.shovel," hours has passed since you've clicked the shovel!"),iconPath:"data/GamingItem1"}):null,(null==b?void 0:b.miniBosses)&&(null==a?void 0:null===(p=a.miniBosses)|| void 0===p?void 0:p.length)>0?null==a?void 0:null===(q=a.miniBosses)|| void 0===q?void 0:q.map(function(a){var b=a.rawName,c=a.name,d=a.currentCount;return(0,g.jsx)(al,{title:"You can kill ".concat(d," ").concat((0,A.cleanUnderscore)(c),"s"),iconPath:"etc/".concat(b)},b)}):null,(null==b?void 0:b.sigils)&&(null==a?void 0:a.sigils.length)>0?null==a?void 0:null===(r=a.sigils)|| void 0===r?void 0:r.map(function(a){var b=a.name,c=a.index;return(0,g.jsx)(al,{title:"".concat((0,A.cleanUnderscore)((0,A.pascalCase)(b))," is already unlocked!"),iconPath:"data/aSiga".concat(c)},b)}):null,(null==b?void 0:b.refinery)&&(null==a?void 0:null===(s=a.refinery)|| void 0===s?void 0:s.length)>0?null==a?void 0:null===(t=a.refinery)|| void 0===t?void 0:t.map(function(a){var b=a.rawName,c=a.missingMats;return(0,g.jsx)(al,{title:(0,g.jsx)(am,{missingMats:c}),iconPath:"data/".concat(b)},b)}):null,(null==b?void 0:b.towers)&&(null==a?void 0:null===(u=a.towers)|| void 0===u?void 0:u.length)>0?null==a?void 0:null===(v=a.towers)|| void 0===v?void 0:v.map(function(a){var b=a.name,c=a.index;return(0,g.jsx)(al,{title:"".concat((0,A.cleanUnderscore)((0,A.pascalCase)(b))," is ready to be built!"),iconPath:"data/ConTower".concat(c)},b)}):null,(null==b?void 0:b.keys)&&(null==a?void 0:null===(y=a.keys)|| void 0===y?void 0:y.length)>0?null==a?void 0:null===(z=a.keys)|| void 0===z?void 0:z.map(function(a){var b=a.name,c=a.rawName,d=a.totalAmount;return(0,g.jsx)(al,{title:"".concat(d," of ").concat((0,A.cleanUnderscore)((0,A.pascalCase)(b))," keys are ready!"),iconPath:"data/".concat(c)},b)}):null,(null==b?void 0:b.vials)&&(null==a?void 0:null===(B=a.vials)|| void 0===B?void 0:B.length)>0?null==a?void 0:null===(C=a.vials)|| void 0===C?void 0:C.map(function(a){return(0,g.jsx)(al,{vial:a,title:"You have enough materials to upgrade ".concat((0,A.cleanUnderscore)(null==a?void 0:a.name)," vial!"),iconPath:"data/".concat(null==a?void 0:a.mainItem)},null==a?void 0:a.mainItem)}):null,(null==b?void 0:b.guildTasks)&&(null==a?void 0:null===(D=a.guildTasks)|| void 0===D?void 0:D.daily)?(0,g.jsx)(al,{title:"You have ".concat(null==a?void 0:null===(E=a.guildTasks)|| void 0===E?void 0:E.daily," uncompleted daily tasks"),iconPath:"etc/GP",imgStyle:{filter:"sepia(1) hue-rotate(46deg) saturate(1)"}}):null,(null==b?void 0:b.guildTasks)&&(null==a?void 0:null===(F=a.guildTasks)|| void 0===F?void 0:F.weekly)?(0,g.jsx)(al,{title:"You have ".concat(null==a?void 0:null===(G=a.guildTasks)|| void 0===G?void 0:G.weekly," uncompleted weekly tasks"),iconPath:"etc/GP",imgStyle:{filter:"sepia(1) hue-rotate(140deg) saturate(1)"}}):null]}):(0,g.jsx)(k.Z,{children:"There are no account alerts to display"})})})})},ap=a(4229),aq=a(4674),ar=a(8211),as=function(a){var b=a.account,c=a.lastUpdated;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(w.Z,{children:(0,g.jsx)(x.Z,{children:(0,g.jsx)(w.Z,{variant:"outlined",sx:{width:"fit-content"},children:(0,g.jsx)(x.Z,{children:(0,g.jsx)(ar.Z,{libraryTimes:null==b?void 0:b.libraryTimes,lastUpdated:c})})})})})})},at=a(2962);function au(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function av(d){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{},b=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(b=b.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),b.forEach(function(a){au(d,a,c[a])})}return d}var aw=["prayers","traps","bubbles","obols","worship","postOffice","anvil","starSigns","talents","crystalCountdown"].toSimpleObject(),ax=["stampReducer","arcadeBalls","refinery","towers","keys","vials","cooking","miniBosses","bargainTag","gaming","guildTasks"].toSimpleObject(),ay={account:{vials:{subtractGreenStacks:!0},gaming:{sprouts:!0,squirrel:!0,shovel:!0},guildTasks:{daily:!0,weekly:!0}}},az=function(a){var b,c=a.arr,d=a.type,e=a.onTrackerChange,f=a.onOptionChange,i=a.options;return null===(b=Object.keys(c))|| void 0===b?void 0:b.map(function(a){var b,k=null==i?void 0:i[a];return(0,g.jsxs)(h.Fragment,{children:[(0,g.jsx)(u.Z,{control:(0,g.jsx)(v.Z,{name:a,checked:null==c?void 0:c[a],size:"small",onChange:function(a){return e(a,d)}}),label:a.camelToTitleCase()}),(0,g.jsx)(j.Z,{sx:{ml:3},children:k&&(null===(b=Object.keys(k))|| void 0===b?void 0:b.map(function(b){return(0,g.jsx)(u.Z,{control:(0,g.jsx)(v.Z,{name:b,size:"small",checked:null==k?void 0:k[b],onChange:function(b){return f(b,d,a)}}),label:b.camelToTitleCase()},"option-".concat(b))}))})]},"tracker-".concat(a))})},aA=function(){var u=(0,h.useContext)(i.I),B=u.dispatch,c=u.state,d=c.characters,e=c.account,f=c.lastUpdated,v=(0,h.useState)(!1),z=v[0],C=v[1],w=(0,h.useState)(),a=w[0],D=w[1],x=(0,h.useState)(),b=x[0],E=x[1];(0,h.useEffect)(function(){var a,b,d,e,f,g,h=null==c||null===(a=c.trackers)|| void 0===a||!a.account||Object.keys(ax).length!==Object.keys(null==c?void 0:null===(b=c.trackers)|| void 0===b?void 0:b.account).length,i=null==c||null===(d=c.trackers)|| void 0===d||!d.characters||Object.keys(aw).length!==Object.keys(null==c?void 0:null===(e=c.trackers)|| void 0===e?void 0:e.characters).length;D({account:h?ax:null==c?void 0:null===(f=c.trackers)|| void 0===f?void 0:f.account,characters:i?aw:null==c?void 0:null===(g=c.trackers)|| void 0===g?void 0:g.characters});var j=null==c||!c.trackersOptions||Object.keys((0,A.flatten)(ay,{})).length!==Object.keys((0,A.flatten)(null==c?void 0:c.trackersOptions,{})).length;E(av({},j?ay:null==c?void 0:c.trackersOptions))},[]);var y=function(c,d){var e,f=av({},a,au({},d,av({},a[d],au({},c.target.name,c.target.checked)))),g=null==b?void 0:null===(e=b[d])|| void 0===e?void 0:e[c.target.name];g&&E(av({},b,au({},d,av({},null==b?void 0:b[d],au({},c.target.name,av({},Object.keys(g).toSimpleObject(c.target.checked))))))),D(f),B({type:"trackers",data:f})};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(at.PB,{title:"Idleon Toolbox | Dashboard",description:"Provides key information about your account and alerts you when there are unfinished tasks"}),(0,g.jsxs)(j.Z,{direction:"row",alignItems:"center",gap:3,children:[(0,g.jsx)(k.Z,{variant:"h2",children:"Dashboard"}),(0,g.jsx)(aq.Z,{title:"Configure alerts",onClick:function(){return C(!0)},children:(0,g.jsx)(ap.Z,{})})]}),(0,g.jsx)(k.Z,{component:"div",variant:"caption",mb:3,children:"* Please let me know if you want to tracks additional stuff"}),(0,g.jsxs)(j.Z,{gap:2,children:[(0,g.jsx)(ao,{trackers:null==a?void 0:a.account,trackersOptions:null==b?void 0:b.account,characters:d,account:e,lastUpdated:f}),(0,g.jsx)(ab,{trackers:null==a?void 0:a.characters,characters:d,account:e,lastUpdated:f}),(0,g.jsx)(as,{characters:d,account:e,lastUpdated:f})]}),(0,g.jsx)(l.Z,{sx:{position:"fixed",bottom:0,left:0,right:0},children:(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(n.Z,{label:"ko-fi",value:"ko-fi",icon:(0,g.jsx)("a",{href:"https://ko-fi.com/S6S7BHLQ4",target:"_blank",rel:"noreferrer",children:(0,g.jsx)("img",{height:"36",style:{border:0,height:36,width:143},src:"https://cdn.ko-fi.com/cdn/kofi1.png?v=3",alt:"Buy Me a Coffee at ko-fi.com"})})}),(0,g.jsx)(n.Z,{label:"discord",value:"discord",component:o.Z,href:"https://discord.gg/8Devcj7FzV",target:"_blank",icon:(0,g.jsx)("svg",{viewBox:"0 -2 127.14 96.36",width:"20",height:"20","aria-hidden":"true",children:(0,g.jsx)("path",{d:"M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z",fill:"white"})})})]})}),(0,g.jsxs)(p.Z,{open:z,onClose:function(){return C(!1)},children:[(0,g.jsx)(q.Z,{children:"What would you like to track ?"}),(0,g.jsx)(r.Z,{children:(0,g.jsxs)(j.Z,{direction:"row",alignItems:"flex-start",gap:5,flexWrap:"wrap",children:[(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(t.Z,{component:"legend",children:"Account"}),(0,g.jsx)(az,{arr:null==a?void 0:a.account,options:null==b?void 0:b.account,type:"account",onOptionChange:function(f,c,d){var e,g=av({},b,au({},c,av({},b[c],au({},d,av({},b[c][d],au({},f.target.name,f.target.checked))))));E(g),(null==a?void 0:null===(e=a[c])|| void 0===e?void 0:e[d])||D(av({},a,au({},c,av({},a[c],au({},d,!0))))),B({type:"trackersOptions",data:g})},onTrackerChange:y})]}),(0,g.jsxs)(s.Z,{children:[(0,g.jsx)(t.Z,{component:"legend",children:"Character"}),(0,g.jsx)(az,{arr:null==a?void 0:a.characters,type:"characters",onTrackerChange:y})]})]})})]})]})}}},function(a){a.O(0,[7308,9774,2888,179],function(){return a(a.s=9704)}),_N_E=a.O()}])