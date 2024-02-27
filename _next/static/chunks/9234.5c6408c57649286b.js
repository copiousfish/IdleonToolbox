"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9234],{29234:function(e,o,l){l.d(o,{parseData:function(){return parseData}});var t=l(56552),n=l(54685),i=l(74805),a=l(1972),r=l(74861),s=l(64569);let u={0:"dewdrop",1:"sandstone",2:"chillsnap",3:"astro"},d={0:"chopping",1:"fishing",2:"catching",3:"mining"},getHighscores=(e,o)=>{var l,t,n;let i=(null==e?void 0:null===(l=e.FamilyValuesMap)||void 0===l?void 0:l.ColosseumHighscores)||(null==e?void 0:e.FamValColosseumHighscores),a=(null==e?void 0:null===(t=e.FamilyValuesMap)||void 0===t?void 0:t.MinigameHiscores)||(null==e?void 0:e.FamValMinigameHiscores);return{coloHighscores:parseColosseum(i),minigameHighscores:parseMinigame(a).concat([{name:"pen pals",score:(null==o?void 0:null===(n=o.accountOptions)||void 0===n?void 0:n[99])||0}])}},parseColosseum=e=>e.slice(1).filter((e,o)=>u[o]).map((e,o)=>({name:u[o],score:parseFloat(e)})),parseMinigame=e=>e.filter((e,o)=>d[o]).map((e,o)=>({name:d[o],score:e}));var v=l(30925);let getGemShop=e=>{let o=(0,v.tryToParse)(null==e?void 0:e.GemItemsPurchased)||(null==e?void 0:e.GemItemsPurchased);return parseGemShop(o)},parseGemShop=e=>e;var c=l(25081),_=l(88054),p=l(23515),m=l(29129),h=l(96707),g=l(15815),f=l(70473);let getForge=(e,o)=>{let l=null==e?void 0:e.ForgeItemOrder,t=(null==e?void 0:e.ForgeItemQuantity)||(null==e?void 0:e.ForgeItemQty),n=(null==e?void 0:e.FurnaceLevels)||(null==e?void 0:e.ForgeLV);return parseForge(l,t,n,o)},y=[{name:"New Forge Slot",maxLevel:16,description:"extra slots to smelt ores",costMulti:void 0},{name:"Ore Capacity Boost",maxLevel:50,description:"Increases max ores per slot",costMulti:1.41},{name:"Forge Speed",maxLevel:90,description:"Ores are turned into bars faster",costMulti:1.2},{name:"Forge EXP Gain",maxLevel:85,description:"Increased EXP gain from using the forge",costMulti:1.21},{name:"Bar Bonanza",maxLevel:75,description:"Increased chance to make an extra bar",costMulti:1.25},{name:"Puff Puff Go",maxLevel:60,description:"Increased chance for a card drop while afk",costMulti:1.33}],parseForge=(e,o,l,t)=>{var n,i,a;let r=null==y?void 0:y.map((e,o)=>({...e,level:l[o]})),s=null!==(i=null==t?void 0:null===(n=t.gemShopPurchases)||void 0===n?void 0:n.find((e,o)=>104===o))&&void 0!==i?i:0,u=[],d=0;for(let l=0;l<(null==e?void 0:e.length);l+=3){let[t,n,i]=null==e?void 0:e.slice(l,l+3),[v,c,_]=o.slice(l,l+3),p=null===f.items||void 0===f.items?void 0:f.items[n],m=null===f.items||void 0===f.items?void 0:f.items[t],h=d<s,g=Math.round(100+5*(null==r?void 0:null===(a=r[2])||void 0===a?void 0:a.level)),y=getSpeed(g,p,h),b=Math.round(v/(null==m?void 0:m.Amount))*((null==m?void 0:m.Cooldown)/(4*y));u=[...u,{isBrimestone:h,ore:{...m,rawName:t,quantity:v,timeTillEmpty:1e3*b},barrel:{...p,rawName:n,quantity:c},bar:{...null===f.items||void 0===f.items?void 0:f.items[i],rawName:i,quantity:_}}],d++}return{list:u,upgrades:r}},getSpeed=(e,o,l)=>{let t=Math.round(e)/100;return t*=(null==o?void 0:o.Effect)==="SpeedForge"?null==o?void 0:o.Amount:1,l&&(t*=1.5),.25*t};var b=l(47212),M=l(9339),S=l(72664);let getTasks=e=>{var o;let l=(null==e?void 0:e.Tasks)||[(0,v.tryToParse)(null==e?void 0:e.TaskZZ0),(0,v.tryToParse)(null==e?void 0:e.TaskZZ1),(0,v.tryToParse)(null==e?void 0:e.TaskZZ2),(0,v.tryToParse)(null==e?void 0:e.TaskZZ3),(0,v.tryToParse)(null==e?void 0:e.TaskZZ4),(0,v.tryToParse)(null==e?void 0:e.TaskZZ5)],t=null===f.tasks||void 0===f.tasks?void 0:null===(o=f.tasks.map((e,o)=>null==e?void 0:e.map((e,t)=>{var n,i,a,r,s,u;let d=null==l?void 0:null===(i=l[0])||void 0===i?void 0:null===(n=i[o])||void 0===n?void 0:n[t],v=null==l?void 0:null===(r=l[1])||void 0===r?void 0:null===(a=r[o])||void 0===a?void 0:a[t],c=e;if(8===t){let e=null==l?void 0:null===(s=l[5])||void 0===s?void 0:s[o];c=null===f.tasks||void 0===f.tasks?void 0:null===(u=f.tasks[o])||void 0===u?void 0:u[8+e]}return{...c,stat:d,level:v,meritReward:Math.round(1+Math.floor(v/5))}})))||void 0===o?void 0:o.map(e=>null==e?void 0:e.slice(0,9)),n=null===f.merits||void 0===f.merits?void 0:f.merits.map((e,o)=>null==e?void 0:e.map((e,t)=>{var n,i;let a=null==l?void 0:null===(i=l[2])||void 0===i?void 0:null===(n=i[o])||void 0===n?void 0:n[t];return{...e,level:a}}));return{tasks:parseTasks(l),tasksDescriptions:t,meritsDescriptions:n}},parseTasks=e=>e;var k=l(71345),T=l(10924),w=l(32387),C=l(11028),O=l(89260),x=l(15893),G=l(64605),E=l(73592),P=l(70508),F=l(19225),B=l(74629),I=l(5432),D=l(19834),N=l(16727),L=l(20385),A=l(95331),R=l(67896),U=l(4056);let j=["Get_as_much_total_stats_as_possible,_STR_AGI_WIS_and_LUK_combined.","Get_as_much_STR_stat_as_you_can.","Get_as_much_AGI_stat_as_you_can.","Get_as_much_WIS_stat_as_you_can.","Get_as_much_LUK_stat_as_you_can.","Get_the_highest_DPS_(number_of_digits)_you_can;_but_on_a_beginner","Get_the_highest_DPS_(number_of_digits)_you_can;_but_on_a_warrior.","Get_the_highest_DPS_(number_of_digits)_you_can;_but_on_a_archer.","Get_the_highest_DPS_(number_of_digits)_you_can;_but_on_a_mage.","Get_the_highest_Accuracy_stat_you_can.","Get_the_highest_Defence_stat._Tank_mains;_it's_your_moment!","Get_the_highest_Movement_Speed_you_can.","Get_the_highest_Critical_Chance_%_you_can.","Spawn_as_many_Giant_Mobs_this_week_as_you_can.","Get_the_highest_Max_HP_as_possible.","Get_the_highest_Max_MP_as_possible.","Get_as_many_individual_hits_on_the_DPS_Dummy_as_you_can_within_the_timer.","Get_as_much_Mining_Efficiency_(number_of_digits)_as_you_can.","Get_as_much_Choppin_Efficiency_(number_of_digits)_as_you_can.","Get_as_much_Fishing_Efficiency_(number_of_digits)_as_you_can.","Get_as_much_Catching_Efficiency_(number_of_digits)_as_you_can."],q=[{effect:"+{,Base_STR",divider:12},{effect:"+{,Base_AGI",divider:12},{effect:"+{,Base_WIS",divider:12},{effect:"+{,Base_LUK",divider:10},{effect:"+{%,Total_DMG",divider:3},{effect:"+{%,Class_EXP",divider:4},{effect:"+{%,Skill_Eff",divider:5}],H=[{effect:"1_in_100000_chance_for_Trophy_per_hr_of_Nothing_AFK",cost:24},{effect:"1.25x_Dungeon_Credits_and_Flurbos_gained",cost:200},{effect:"-30%_Kitchen_Upgrade_Costs",cost:750},{effect:"1.20x_Chance_to_find_Sailing_Artifacts",cost:2500},{effect:"Dirty_Shovel_digs_up_+25%_more_Gold_Nuggets",cost:1e4},{effect:"+100_Star_Talent_Pts",cost:2e4},{effect:"World_6_Bonus..._I_wonder_what_it_will_be...",cost:4e4},{effect:"World_7_Bonus..._I_wonder_what_it_will_be...",cost:6e4}],getIslands=e=>{var o,l,t,n,i,a,r,s,u,d,c,_;let p=null===(o=(null==e?void 0:null===(l=e.accountOptions)||void 0===l?void 0:l[169])||"")||void 0===o?void 0:o.split(""),h=null==e?void 0:null===(n=e.accountOptions)||void 0===n?void 0:null===(t=n[169])||void 0===t?void 0:t.length,g={0:0,1:8,2:32,3:80,4:200,5:500},f={0:0,1:15,2:45,3:100,4:200,5:500},y=[{name:"Trash",description:"Trade_garbage_that_washs_up_each_day_for_items",preUnlockCost:4,baseCost:10},{name:"Rando",description:"Guaranteed_Random_Event_once_a_week",preUnlockCost:12,baseCost:12},{name:"Crystal",description:"Fight_daily_giant_crystal_mobs_that_drop_candy",preUnlockCost:20,baseCost:15},{name:"Seasalt",description:"Catch_legendary_fish_for_crafting_World_6_equips",preUnlockCost:28,baseCost:50},{name:"Shimmer",description:"Do_Weekly_Challenges_for_Shimmer_Upgrades",preUnlockCost:40,baseCost:25},{name:"Fractal",description:"Dump_your_time_candy_here_for..._nothing...?",preUnlockCost:52,baseCost:70}].map((o,l)=>({...o,unlocked:(null==p?void 0:p.indexOf(null===v.number2letter||void 0===v.number2letter?void 0:v.number2letter[l]))!==-1,cost:0===h?o.preUnlockCost+(null==g?void 0:g[h]):o.baseCost+(null==f?void 0:f[h]),...extraIslandDetails(e,l)})),b=null==e?void 0:null===(i=e.accountOptions)||void 0===i?void 0:i[162],M=(0,m.k)(null==e?void 0:e.bribes,"Bottle_Service"),S=(0,T.U7)(null==e?void 0:e.bundles,"bun_p")?30:0,k=null==e?void 0:null===(u=e.quests)||void 0===u?void 0:null===(s=u["Yum-Yum_Desert"])||void 0===s?void 0:null===(r=s.find(e=>{let{name:o}=e;return"Omar_Da_Ogar"===o}))||void 0===r?void 0:null===(a=r.npcQuests)||void 0===a?void 0:a.reduce((e,o)=>{let{completed:l}=o;return e+((null==l?void 0:l.length)>0?1:0)},0),w=null==e?void 0:null===(d=e.accountOptions)||void 0===d?void 0:d[164],C=null===(c=e.accountOptions)||void 0===c?void 0:c[160],O=null===(_=e.accountOptions)||void 0===_?void 0:_[163];return{islandsUnlocked:h,bottles:b,bottlesPerDay:Math.floor(4*(1+(M+(10*w+10*k+S))/100)),trashPerDay:Math.round(3.75*Math.floor(1.01+(.5+(.01+O/5)))),trashPerDaysAfk:0===C?0:Math.round(3*(14>C?.25+C:Math.pow(8*C,.5))*Math.floor(1.01+(.5+(Math.min(C,70)/100+O/5)))),numberOfDaysAfk:C,list:y}},extraIslandDetails=(e,o)=>{var l,t,n,i,a,r,s,u,d,c,_;let p={};if(0===o){let o=null==e?void 0:null===(l=e.accountOptions)||void 0===l?void 0:l[161],i=["data/StampB47","data/StampB32","data/StampA38","data/StampA39","etc/Trash_Currency","etc/Bribe","data/Island1","data/TalentBook1","data/EquipmentNametag6b"],a=["Skelefish Stamp"," Amplestample Stamp","Golden Sixes Stamp","Stat Wallstreet Stamp","+20% Garbage Gain","Unlock New Bribe Set","10% Message Bottle Gain","Filthy Damage Special Talent Book","Trash Tuna Nametag"],r=[20,40,80,300,7*Math.pow(1.4,null==e?void 0:null===(t=e.accountOptions)||void 0===t?void 0:t[163]),135,25*Math.pow(1.5,null==e?void 0:null===(n=e.accountOptions)||void 0===n?void 0:n[164]),450,1500].map((o,l)=>{var t,n;let r=4===l?null==e?void 0:null===(t=e.accountOptions)||void 0===t?void 0:t[163]:6===l?null==e?void 0:null===(n=e.accountOptions)||void 0===n?void 0:n[164]:null;return{cost:Math.round(o),effect:null==i?void 0:i[l],upgrades:r,name:null==a?void 0:a[l]}});p={trash:o,learnMore:!0,shop:r}}else if(1===o)p={learnMore:!0,shop:[{effect:"5% Loot (".concat(null==e?void 0:null===(i=e.accountOptions)||void 0===i?void 0:i[166],")"),cost:Math.round(10*Math.pow(1.5,null==e?void 0:null===(a=e.accountOptions)||void 0===a?void 0:a[166]))},{effect:"3% Double boss (".concat(null==e?void 0:null===(r=e.accountOptions)||void 0===r?void 0:r[167],")"),cost:Math.round(6*Math.pow(1.4,null==e?void 0:null===(s=e.accountOptions)||void 0===s?void 0:s[167]))},{effect:"Star book",cost:200}]};else if(4===o){let o=null==e?void 0:null===(u=e.accountOptions)||void 0===u?void 0:u[183],l=(0,v.notateNumber)(null==e?void 0:null===(d=e.accountOptions)||void 0===d?void 0:d[172]),t=null==e?void 0:null===(c=e.accountOptions)||void 0===c?void 0:c[173],n=null==q?void 0:q.map((o,l)=>{var t,n;let{effect:i,divider:a}=o,r=null==e?void 0:null===(t=e.accountOptions)||void 0===t?void 0:t[174+l];return{effect:null==i?void 0:null===(n=i.replace("{",r))||void 0===n?void 0:n.replace(","," "),bonus:r,cost:1+Math.floor(r/a)}});p={shop:n,currentTrial:j[o],bestDpsEver:l,shimmerCurrency:t,learnMore:!0}}else if(5===o){let o=null==e?void 0:null===(_=e.accountOptions)||void 0===_?void 0:_[184];p={hoursAfk:o,shop:null==H?void 0:H.map(e=>({...e,unlocked:o>(null==e?void 0:e.cost)})),learnMore:!0}}return p};var W=l(72973),Z=l(15265),z=l(8616);let getFarming=(e,o)=>{let l=(0,v.tryToParse)(null==e?void 0:e.FarmUpg),t=(0,v.tryToParse)(null==e?void 0:e.FarmPlot),n=(0,v.tryToParse)(null==e?void 0:e.FarmCrop);return parseFarming(l,t,n,o)},parseFarming=(e,o,l,t)=>{var n;let i=null==t?void 0:null===(n=t.gemShopPurchases)||void 0===n?void 0:n.find((e,o)=>139===o),a=null==e?void 0:e.slice(2,f.marketInfo.length+1),r=null==e?void 0:e[1],s=null===f.marketInfo||void 0===f.marketInfo?void 0:f.marketInfo.map((e,o)=>{var l;let{cropId:t,cropIdIncrement:n,cost:i,costExponent:r,bonusPerLvl:s,maxLvl:u,bonus:d}=e,v=null!==(l=null==a?void 0:a[o])&&void 0!==l?l:0;return{...e,level:v,type:getCropType({index:o,cropId:t,cropIdIncrement:n,level:v}),cost:i*Math.pow(r,v),nextUpgrades:getNextUpgradesReq({index:o,cropId:t,cropIdIncrement:n,level:v,cost:i,costExponent:r}),costToMax:calcCostToMax({level:v,maxLvl:u,cost:i,costExponent:r}),value:d.includes("}")?1+v*s/100:v*s}}),u=null==o?void 0:o.map(e=>{var o;let[l,t,n,i,a,r,s]=e,u=Math.round((null===f.seedInfo||void 0===f.seedInfo?void 0:null===(o=f.seedInfo[l])||void 0===o?void 0:o.cropIdMin)+n);return{seedType:l,cropType:u,cropQuantity:a,cropProgress:s,progress:t,growthReq:14400*Math.pow(1.5,l),currentOG:r,cropRawName:"FarmCrop".concat(u,".png"),seedRawName:"Seed_".concat(l,".png")}}),d=getMarketBonus(s,"LAND_PLOTS");return{plot:u,crop:{...l,beans:r},market:s,cropsFound:Object.keys(l||{}).length,cropsOnVine:Math.floor(1+(d+20*i)/100)}},updateFarming=(e,o)=>{var l,t;let n=null==o?void 0:null===(t=o.farming)||void 0===t?void 0:null===(l=t.plot)||void 0===l?void 0:l.map(l=>{var t,n,i,a,r,s,u;let d=getMarketBonus(null==o?void 0:null===(t=o.farming)||void 0===t?void 0:t.market,"OG_FERTILIZER"),v=(0,z.vq)(o,"Taffy_Disc"),c=(0,h.o9)(null==e?void 0:e[0],o,"OG_Chance"),p=Math.pow(.4,(null==l?void 0:l.currentOG)+1)*Math.max(1,d)*v*(1+c/100),m=getMarketBonus(null==o?void 0:null===(n=o.farming)||void 0===n?void 0:n.market,"NUTRITIOUS_SOIL"),g=getMarketBonus(null==o?void 0:null===(i=o.farming)||void 0===i?void 0:i.market,"SPEED_GMO"),f=null===(r=Object.values(null==o?void 0:null===(s=o.farming)||void 0===s?void 0:s.crop))||void 0===r?void 0:null===(a=r.filter(e=>e>=1e3))||void 0===a?void 0:a.length,y=(0,_.iu)(null==o?void 0:null===(u=o.alchemy)||void 0===u?void 0:u.vials,"6FarmSpd"),b=Math.min(1e9,Math.max(1,Math.pow(2,null==l?void 0:l.currentOG)));return{...l,nextOGChance:p,growthRate:Math.max(1,g*f)*(1+(m+y)/100)*1,ogMulti:b}});return{...(null==o?void 0:o.farming)||{},plot:n,cropDepot:getCropDepotBonuses(o)}},getNextUpgradesReq=e=>{let{index:o,cropId:l,cropIdIncrement:t,level:n,cost:i,costExponent:a}=e,r=new Map,s=0;for(;r.size<4;){let e=getCropType({index:o,cropId:l,cropIdIncrement:t,level:n+s}),u=i*Math.pow(a,n+s);r.has(e)?r.set(e,r.get(e)+u):r.set(e,u),s++}let u=Array.from(r.entries()).map(e=>{let[o,l]=e;return{type:o,cost:l}});return console.log("uniqueUpgrades",u),u},getCropType=e=>{let{index:o,cropId:l,cropIdIncrement:t,level:n}=e;return 0===o?Math.floor(l+t*(n+(2*Math.floor(n/3)+Math.floor(n/4)))):Math.floor(l+t*n)},getCropDepotBonuses=e=>{var o,l,t,n,i,a,r;let s=(0,x.c9)(null==e?void 0:null===(o=e.lab)||void 0===o?void 0:o.labBonuses,17),u={damage:{name:"DMG",value:0},gamingEvo:{name:"Gaming Evo",value:0},jadeCoin:{name:"Jade Coin",value:0},cookingSpeed:{name:"Meal Spd",value:0},cash:{name:"Cash",value:0},shiny:{name:"Pet Rate",value:0}};return(0,z.x5)(e,"Reinforced_Science_Pencil")&&(u.damage.value=20*Math.round(null==e?void 0:null===(l=e.farming)||void 0===l?void 0:l.cropsFound)*(1+s/100)),(0,z.x5)(e,"Science_Pen")&&(u.gamingEvo.value=Math.pow(1.02,Math.round(null==e?void 0:null===(t=e.farming)||void 0===t?void 0:t.cropsFound))*(1+s/100)),(0,z.x5)(e,"Science_Marker")&&(u.jadeCoin.value=8*Math.round(null==e?void 0:null===(n=e.farming)||void 0===n?void 0:n.cropsFound)*(1+s/100)),(0,z.x5)(e,"Science_Featherpen")&&(u.cookingSpeed.value=Math.pow(1.1,Math.round(null==e?void 0:null===(i=e.farming)||void 0===i?void 0:i.cropsFound))*(1+s/100)),(0,z.x5)(e,"Science_Environmentally_Sourced_Pencil")&&(u.cash.value=15*Math.round(null==e?void 0:null===(a=e.farming)||void 0===a?void 0:a.cropsFound)*(1+s/100)),(0,z.x5)(e,"Science_Crayon")&&(u.shiny.value=7*Math.round(null==e?void 0:null===(r=e.farming)||void 0===r?void 0:r.cropsFound)*(1+s/100)),u},getMarketBonus=(e,o)=>{var l,t;return null!==(t=null===(l=null==e?void 0:e.find(e=>{let{name:l}=e;return l===o}))||void 0===l?void 0:l.value)&&void 0!==t?t:0},calcCostToMax=e=>{let{level:o,maxLvl:l,cost:t,costExponent:n}=e,i=0;for(let e=o;e<l;e++)i+=t*Math.pow(n,e);return null!=i?i:0},parseData=(e,o,l,t,n)=>{let i,a;try{console.info("%cStart Parsing","color:orange");let r=serializeData(e,o,l,t,n);return i=null==r?void 0:r.accountData,a=null==r?void 0:r.charactersData,console.info("data",{account:i,characters:a}),console.info("%cParsed successfully","color: green"),{account:i,characters:a}}catch(e){console.error("Error while parsing data",e),void 0!==window.gtag&&window.gtag("event","error",{event_category:"error",event_label:"engagement",value:JSON.stringify(e)})}},serializeData=(e,o,l,u,d)=>{var y,j,q,H,K,V,X,Y,Q,J,$,ee,eo,el;let et={},en=[],ei=(0,t.ql)(e,o);et.companions=(0,T.Rf)(l),et.bundles=(0,T.kU)(e),et.serverVars=d,et.accountOptions=(null==e?void 0:e.OptionsListAccount)||(0,v.tryToParse)(null==e?void 0:e.OptLacc),et.bribes=(0,m.t)(e),et.timeAway=(0,v.tryToParse)(null==e?void 0:e.TimeAway)||(null==e?void 0:e.TimeAway),et.alchemy=(0,_.p4)(e,et,ei),et.equippedBubbles=(0,_.Tw)(e,null===(y=et.alchemy)||void 0===y?void 0:y.bubbles,ei),et.storage=(0,p.cF)(e),et.saltLick=(0,w.U)(e,et.storage),et.dungeons=(0,C.MR)(e,et.accountOptions),et.prayers=(0,g.hn)(e,et.storage),et.cards=(0,n.vm)(e,et),et.gemShopPurchases=getGemShop(e),et.guild=(0,G.Sk)(e,u),et.currencies=(0,T.DE)(e),et.stamps=(0,a.t2)(e,et),et.obols=(0,i.dR)(e),et.looty=(0,T.NQ)(e);let{tasks:ea,tasksDescriptions:er,meritsDescriptions:es}=getTasks(e);et.tasks=ea,et.tasksDescriptions=er,et.meritsDescriptions=es,et.breeding=(0,I.N5)(e,et),et.cooking=(0,O.Tt)(e,et),et.divinity=(0,D.y0)(e,ei),et.postOfficeShipments=(0,U.NU)(e),et.sneaking=(0,z.JL)(e,d,ei),et.farming=getFarming(e,et),et.lab=(0,x.Cs)(e,ei,et),et.towers=(0,b.d4)(e),et.shrines=(0,s.Xz)(e,et),et.statues=(0,r.Xl)(e,ei),et.achievements=(0,M.j)(e),et.lab.connectedPlayers=null===(j=et.lab.connectedPlayers)||void 0===j?void 0:j.map(e=>{var o,l;return{...e,isDivinityConnected:(null==et?void 0:null===(l=et.divinity)||void 0===l?void 0:null===(o=l.linkedDeities)||void 0===o?void 0:o[null==e?void 0:e.playerId])===4||(0,x.p8)(e,4)}}),et.rift=(0,R.wE)(e),et.arcade=(0,k.z)(e,et,d);let eu=(0,x.c9)(et.lab.labBonuses,7);et.stamps=(0,a.Md)(et.stamps,eu),et.alchemy.vials=(0,_.B9)(et),et.equinox=(0,W.B)(e,et);let ed=(0,x.c9)(et.lab.labBonuses,8),ev=(0,x.pc)(et.lab.jewels,16,ed);et.cooking.meals=(0,O.wR)(et.cooking.meals,ev);let ec=null==ei?void 0:ei.map(e=>{var o,l,t;let n=null==e?void 0:e.PersonalValuesMap;return{level:null!==(l=null==n?void 0:null===(o=n.StatList)||void 0===o?void 0:o[4])&&void 0!==l?l:0,class:null!==(t=null===f.classes||void 0===f.classes?void 0:f.classes[null==e?void 0:e.CharacterClass])&&void 0!==t?t:""}});et.starSigns=(0,h.kz)(e),et.constellations=(0,h.tp)(e),et.charactersLevels=ec,en=ei.map(o=>(0,t.SD)(o,ec,{...et},e)),et.farming=updateFarming(en,et),et.lab=(0,x.Cs)(e,ei,et,en),et.alchemy.vials=(0,_.B9)(et),q=[1,2,3,4,5],et.finishedWorlds=void 0===q?void 0:q.reduce((e,o)=>({...e,["World".concat(o)]:(0,F.jZ)(en,o)}),{}),et.statues=(0,r.hE)(et.statues,en);let e_=null==en?void 0:en.map(e=>{let{name:o,skillsInfo:l}=e;return{name:o,skillsInfo:l}});et.totalSkillsLevels=(0,T.B4)(e_),et.construction=(0,b.VR)(e,et),et.atoms=(0,A.nK)(e,et);let ep=(0,N.yN)(e,en,et);et.alchemy.p2w.sigils=(0,_.RG)(et.alchemy.p2w.sigils,ep),et.alchemy.liquidCauldrons=(0,_.jd)(et),et.gaming=(0,L.gm)(e,en,et,d),et.atoms=(0,A.nK)(e,et),et.sailing=(0,N.x0)(e,ep,en,et,d,ec);let em=(0,T.tS)(e_);en=en.map(e=>({...e,skillsInfo:em[null==e?void 0:e.name]})),et.highscores=getHighscores(e,et),et.shopStock=(0,c.u6)(e),et.forge=getForge(e,et),et.refinery=(0,S.wt)(e,et.storage,et.tasks),et.printer=(0,E.h)(e,en,et),et.traps=(0,P.aQ)(ei),et.quests=(0,F.zz)(en),et.islands=getIslands(et),et.deathNote=(0,B.WA)(en,et),et.anvil=en.map(e=>{let{anvil:o}=e;return o});let eh=parseFloat(null==e?void 0:e.MoneyBANK),eg=null==en?void 0:en.reduce((e,o)=>e+parseFloat(null==o?void 0:o.money),0),ef=eh+eg;et.currencies.rawMoney=ef,et.currencies.money=(0,v.getCoinsArray)(ef),et.currencies.gems=null==e?void 0:e.GemsOwned,et.currencies.KeysAll=(0,T.Ix)(null==et?void 0:null===(H=et.currencies)||void 0===H?void 0:H.KeysAll,en,et),et.currencies.ColosseumTickets=(0,T.cg)(null==et?void 0:null===(K=et.currencies)||void 0===K?void 0:K.ColosseumTickets,en,et),et.currencies.penPals=null!==(el=null===(V=et.accountOptions)||void 0===V?void 0:V[99])&&void 0!==el?el:0,et.cooking.kitchens=(0,O.vu)(e,en,et),et.libraryTimes=(0,T.W9)(e,en,et),et.breeding=(0,I.XM)(e,et),et.divinity.deities=(0,D.wl)(et),en=null==en?void 0:en.map(e=>{let{carryCapBags:o}=e;return e.carryCapBags=null==o?void 0:o.map(o=>{let l=(0,T.HA)(null==o?void 0:o.Class),t=(0,T.z3)(l,e,et);return{...o,capacityPerSlot:null==t?void 0:t.value,breakdown:null==t?void 0:t.breakdown,maxCapacity:(null==t?void 0:t.value)*(null==e?void 0:e.inventorySlots)}}),e.constructionSpeed=(0,t.x6)(e,et),e.constructionExpPerHour=(0,t.NA)(e,et),e}),et.stamps=(0,a.bW)(et,en),et.shrinesExpBonus=(0,s.n)(en,et),et.msaTotalizer=(0,Z.CU)(et);let ey=Math.floor((null==et?void 0:null===(Q=et.deathNote)||void 0===Q?void 0:null===(Y=Q[0])||void 0===Y?void 0:null===(X=Y.mobs)||void 0===X?void 0:X[0].kills)/1e6),eb=(null===($=et.lab.labBonuses)||void 0===$?void 0:null===(J=$[13])||void 0===J?void 0:J.active)?1.5*ey:0,eM=ey*(null===(eo=et.lab.labBonuses)||void 0===eo?void 0:null===(ee=eo[9])||void 0===ee?void 0:ee.bonusOn);return et.lab.labBonuses=(0,x.ww)(et.lab.labBonuses,eM+eb,9),et.totems=(0,Z.Ew)(e),{accountData:et,charactersData:en}}},25081:function(e,o,l){l.d(o,{gN:function(){return getRawShopItems},u6:function(){return getShops}});var t=l(30925),n=l(70473);let getShops=e=>{let o=(null==e?void 0:e.ShopStock)||(0,t.tryToParse)(null==e?void 0:e.ShopStock);return parseShops(o)},parseShops=e=>e.reduce((e,o,l)=>{var t;let a=null===(t=Object.values(o))||void 0===t?void 0:t.reduce((e,o,t)=>{var a,r,s,u;let d=null==i?void 0:null===(a=i[l])||void 0===a?void 0:a[t],v=parseInt(o)||0;return v>0&&d?[...e,{amount:o,...null===(s=n.shops[l])||void 0===s?void 0:null===(r=s.items)||void 0===r?void 0:r[t],shopName:null===(u=n.shops[l])||void 0===u?void 0:u.name}]:e},[]);return[...e,a]},[]),getRawShopItems=()=>{var e;return null===(e=Object.entries(n.shops))||void 0===e?void 0:e.reduce((e,o)=>{var l;let[t,{items:n}]=o,a=null==n?void 0:null===(l=n.filter((e,o)=>{var l;return null==i?void 0:null===(l=i[t])||void 0===l?void 0:l[o]}))||void 0===l?void 0:l.map(e=>{let{rawName:o}=e;return o});return[...e,...a]},[]).toSimpleObject()},i={0:[3,8,13,14,17,23].toSimpleObject(),1:[2,8,9,13].toSimpleObject(),2:[0,1,2,3,4,5,6,7,8,9,10,18,19].toSimpleObject(),3:[12].toSimpleObject(),4:[0,1,2,8,9,10,19,22].toSimpleObject(),5:[2,3,4,8,9,10,11].toSimpleObject(),6:[0,1,2,3,4,5].toSimpleObject(),7:[0,2,3,4,5,6,7].toSimpleObject()}},70508:function(e,o,l){l.d(o,{aQ:function(){return getTraps},oH:function(){return getTrapsBonuses},q6:function(){return calcTotalCritters}});var t=l(70473),n=l(88054),i=l(30796);let getTraps=e=>parseTraps(e),parseTraps=e=>e.map(e=>{let o=(null==e?void 0:e.PldTraps)||[];return o.reduce((e,o)=>{var l;let[n,,i,a,r,s,u,d]=o;if(-1===n||"-1"===n)return e;let v=t.traps[s].find(e=>e.trapTime===u),c=u-i;return a?[...e,{name:null===(l=t.items[a])||void 0===l?void 0:l.displayName,rawName:a,crittersQuantity:r,trapType:s,trapExp:d,timeLeft:new Date().getTime()+1e3*c,trapData:v}]:e},[])}),calcTotalCritters=(e,o)=>{var l;let{critter:t,exp:n}=o;return null==e?void 0:null===(l=e.traps)||void 0===l?void 0:l.reduce((e,o)=>(o.reduce((o,l)=>{var i,a,r,s;let{crittersQuantity:u,trapExp:d,rawName:v}=l;e={...e,[v]:{critters:(null!==(r=null==e?void 0:null===(i=e[v])||void 0===i?void 0:i.critters)&&void 0!==r?r:0)+u*t,exp:(null!==(s=null==e?void 0:null===(a=e[v])||void 0===a?void 0:a.exp)&&void 0!==s?s:0)+d*n}}},{}),e),{})},getTrapsBonuses=(e,o)=>{let l=null==o?void 0:o.map((l,t)=>calcCrittersBonus({currentCharacterIndex:t,account:e,characters:o,isExp:!1})),t=null==o?void 0:o.map((l,t)=>calcCrittersBonus({currentCharacterIndex:t,account:e,characters:o,isExp:!0}));return{max:{critter:Math.max(...l||[1]),exp:Math.max(...t||[1])},min:{critter:Math.min(...l||[1]),exp:Math.min(...t||[1])}}},calcCrittersBonus=e=>{var o,l,t;let{currentCharacterIndex:a,account:r,characters:s,isExp:u}=e,d=u?0:(0,n.iu)(null==r?void 0:null===(o=r.alchemy)||void 0===o?void 0:o.vials,"TrapOvision");if((0,i.gW)(null==s?void 0:null===(l=s[a])||void 0===l?void 0:l.class,"Hunter")){let e=(0,i.L1)(s,2,"Hunter","EAGLE_EYE",u);d+=u?Math.max(40,Math.min((0,i._X)(null==e?void 0:e.talents,2,"EAGLE_EYE",u),99)):Math.max(50,(0,i._X)(null==e?void 0:e.talents,2,"EAGLE_EYE"))}else{let e=0;for(let o=0;o<(null==s?void 0:s.length);o++)if((0,i.gW)(null==s?void 0:null===(t=s[o])||void 0===t?void 0:t.class,"Hunter")){let o=(0,i.L1)(s,2,"Hunter","EAGLE_EYE",u,!0);e=Math.max(e,(0,i._X)(null==o?void 0:o.talents,2,"EAGLE_EYE",u,!0))}else e=Math.max(e,u?40:50);d+=e}return isNaN(d)?1:d/100}}}]);