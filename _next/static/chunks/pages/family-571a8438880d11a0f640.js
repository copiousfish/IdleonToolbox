(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[83],{6e3:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return $}});var r=t(2209),i=t(5893),a=t(2809),c=t(7294),l=t(9163),o=t(9009),s=t(163),d=t(5258),p=t(65),u=t(1423),x=t(7665);function m(){var n=(0,r.Z)(["\n  width: 85px;\n  height: 85px;\n  border: 1px solid white;\n  background: url(",") no-repeat;\n  background-size: contain;\n\n  @media (max-width: 1440px) {\n    width: 85px;\n    height: 85px;\n  }\n\n  @media (max-width: 370px) {\n    width: 60px;\n    height: 60px;\n  }\n\n  @media (max-width: 370px) {\n    width: 60px;\n    height: 60px;\n  }\n"]);return m=function(){return n},n}function h(){var n=(0,r.Z)(["\n  display: grid;\n  grid-template-columns: 85px 85px;\n  grid-template-rows: 85px 85px;\n\n  @media (max-width: 1440px) {\n    grid-template-columns: 85px 85px;\n    grid-template-rows: 85px 85px;\n  }\n\n  @media (max-width: 370px) {\n    grid-template-columns: 60px 60px;\n    grid-template-rows: 60px 60px;\n  }\n"]);return h=function(){return n},n}var f=l.ZP.div(h()),g=l.ZP.div(m(),(function(n){var e=n.img;return"None"!==e?"".concat(x.O4,"materials/").concat(e,".png"):""})),v=function(n){var e=n.equipment;return(0,i.jsx)(f,{children:null===e||void 0===e?void 0:e.map((function(n,e){var t=n.name;return e>7?null:(0,i.jsx)(g,{"aria-label":t,role:"img",title:t.replace(/_/g," "),img:t},t+e)}))})};function j(){var n=(0,r.Z)(["\n  justify-self: center;\n  @media (max-width: 750px) {\n    justify-self: right;\n    img {\n      width: 48px;\n      height: 48px;\n    }\n  }\n  \n  @media (max-width: 370px) {\n    justify-self: right;\n    img {\n      width: 36px;\n      height: 36px;\n    }\n  }\n"]);return j=function(){return n},n}var w=l.ZP.div(j()),b=function(n){var e=n.bubbles;return(0,i.jsx)(w,{children:null===e||void 0===e?void 0:e.map((function(n,e){var t="Sanic_Tools"===n?"Bug2":n;return(0,i.jsx)("img",{title:t.replace(/_/g," "),src:"".concat(x.O4,"alchemy/").concat(t,".png"),alt:""},n+e)}))})};function y(){var n=(0,r.Z)(["\n  justify-self: center;\n  margin-bottom: 5px;\n  text-align: center;\n\n  > div {\n    font-size: 16px;\n    @media (max-width: 370px) {\n      font-size: 12px;\n    }\n  }\n\n  > img {\n    width: 38px;\n    height: 36px;\n    @media (max-width: 370px) {\n      width: 24px;\n      height: 24px;\n    }\n  }\n"]);return y=function(){return n},n}function O(){var n=(0,r.Z)(["\n  display: grid;\n  grid-template-columns: 70px 70px 70px;\n  grid-template-rows: 70px 70px 70px;\n  grid-auto-flow: column;\n\n  @media (max-width: 750px) {\n  }\n  @media (max-width: 450px) {\n    grid-template-columns: repeat(3, 60px);\n    grid-template-rows: repeat(3, 60px);\n  }\n  \n  @media (max-width: 370px) {\n    grid-template-columns: repeat(3, 45px);\n    grid-template-rows: repeat(3, 45px);\n  }\n"]);return O=function(){return n},n}var Z=l.ZP.div(O()),P=l.ZP.div(y()),k=function(n){var e,t=n.skills;return(0,i.jsx)(Z,{children:null===(e=Object.keys(t))||void 0===e?void 0:e.map((function(n,e){var r=t[n];return"character"===n?null:(0,i.jsxs)(P,{children:[(0,i.jsx)("img",{title:n.capitalize(),src:"".concat(x.O4,"icons/").concat(n.capitalize(),"_Icon.png"),alt:""}),(0,i.jsxs)("div",{children:["LV ",r]})]},e)}))})};function N(){var n=(0,r.Z)(["\n  margin-bottom: 15px;\n\n  .list & {\n    display: grid;\n    place-content: center;\n  }\n\n  .character-profile {\n    display: flex;\n    align-items: center;\n    margin: 15px 0;\n    min-height: 110px;\n\n    > img {\n      margin-right: 10px;\n    }\n\n    @media (max-width: 750px) {\n      justify-content: center;\n    }\n  }\n\n  .name {\n    font-weight: bold;\n    color: ",";\n  }\n\n  .row {\n    display: grid;\n    grid-column-gap: 15px;\n    grid-template-columns: 170px 170px 210px;\n    grid-row-gap: 15px;\n\n    @media (max-width: 1440px) {\n      grid-column-gap: 15px;\n      grid-template-columns: 170px 170px 210px;\n    }\n\n    @media (max-width: 750px) {\n      grid-column-gap: 0;\n      grid-template-columns: 170px 170px;\n    }\n\n    @media (max-width: 370px) {\n      grid-column-gap: 0;\n      grid-template-columns: 120px 120px;\n      justify-content: center;\n    }\n  }\n"]);return N=function(){return n},n}var S=l.ZP.div(N(),(function(n){return n.classColor||"white"})),_=function(n){var e=n.name,t=n.level,r=n.class,a=n.equipment,c=n.tools,l=n.bubblesEquipped,o=n.skillLevels,s=n.strength,d=n.agility,p=n.wisdom,u=n.luck;return(0,i.jsxs)(S,{classColor:null===x.JU||void 0===x.JU?void 0:x.JU[r],children:[(0,i.jsxs)("div",{className:"character-profile",children:[(0,i.jsx)("img",{src:"".concat(x.O4,"classes/").concat(r,".png"),alt:""}),(0,i.jsxs)("div",{className:"info",children:[(0,i.jsxs)("div",{className:"name",children:["Name: ",e]}),(0,i.jsxs)("div",{children:["Level: ",t]}),(0,i.jsxs)("div",{children:["Class: ",r]}),(0,i.jsxs)("div",{children:["Str: ",s]}),(0,i.jsxs)("div",{children:["Agi: ",d]}),(0,i.jsxs)("div",{children:["Wis: ",p]}),(0,i.jsxs)("div",{children:["Luk: ",u]})]})]}),(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)(v,{equipment:a}),(0,i.jsx)(v,{equipment:c}),(0,i.jsx)(k,{skills:o}),(0,i.jsx)(b,{bubbles:l})]})]})},D=t(809),E=t.n(D),I=t(266),C=t(282),J=t(5477);function z(){var n=(0,r.Z)(["\n  display: inline-flex;\n  align-items: center;\n"]);return z=function(){return n},n}var T=l.ZP.div(z()),q=function(n){var e=n.handleImport,t=(0,c.useState)(!1),r=t[0],a=t[1],l=function(){var n=(0,I.Z)(E().mark((function n(){var t,r,i,c;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(!0),n.next=4,navigator.clipboard.read();case 4:return t=n.sent,n.next=7,t[0].getType("text/plain");case 7:return r=n.sent,n.next=10,r.text();case 10:i=n.sent,c=JSON.parse(i),e(c),a(!1),n.next=20;break;case 16:n.prev=16,n.t0=n.catch(0),console.log("Failed to load family JSON",n.t0),a(!1);case 20:case"end":return n.stop()}}),n,null,[[0,16]])})));return function(){return n.apply(this,arguments)}}();return(0,i.jsxs)(T,{children:[(0,i.jsx)(C.Z,{variant:"contained",color:"primary",onClick:l,children:"Import JSON"}),r?(0,i.jsx)(J.Z,{size:"small",color:"secondary"}):null]})},F=t(6447);function L(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function A(){var n=(0,r.Z)(["\n  & .tooltip {\n    color: black;\n    font-size: 16px;\n    background-color: #f5f5f9;\n    border: 1px solid #dadde9;\n    box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\n    max-width: 300px;\n    @media only screen and (max-width: 600px) {\n      max-width: 200px;\n    }\n  }\n"]);return A=function(){return n},n}var U=(0,l.ZP)((function(n){return(0,i.jsx)(F.ZP,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?L(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):L(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({classes:{popper:n.className,tooltip:"tooltip",touch:"touch"}},n))}))(A()),B=function(n){var e=n.children;return(0,i.jsx)(U,{interactive:!0,enterTouchDelay:100,placement:"top-start",title:(0,i.jsxs)("div",{children:["Head over to ",(0,i.jsx)("a",{href:"https://github.com/Corbeno/Idleon-Api-Downloader",rel:"noreferrer",target:"_blank",children:"Idleon-Api-Downloader"})," and use it to copy the\xa0",(0,i.jsx)("b",{children:"'Clean JSON'"})," option and click ",(0,i.jsx)("b",{children:"'Import JSON'"})]}),children:e})},W=t(8362),X=t(3133),H=t(442),M=t(7812);function V(){var n=(0,r.Z)(["\n  && {\n    background-color: #545456;\n  }\n\n  & .MuiTabs-indicator {\n    background-color: #50ff00;\n  }\n"]);return V=function(){return n},n}function G(){var n=(0,r.Z)(["\n  color: white;\n\n  h1 {\n    color: white;\n    padding: 10px;\n    display: grid;\n    grid-template-columns: 135px 135px;\n  }\n\n  .view-icons {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .tab-name {\n    display: flex;\n    align-items: center;\n  }\n\n  .characters {\n    display: grid;\n    grid-template-columns: ",";\n    place-content: center;\n\n    @media (max-width: 1919px) {\n      grid-template-columns: ",";\n    }\n\n    @media (max-width: 1200px) {\n      grid-template-columns: ",";\n    }\n\n    @media (max-width: 750px) {\n      grid-template-columns: none;\n    }\n  }\n\n  .missing-json {\n    display: grid;\n\n    .missing-text {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    > img {\n      place-self: center;\n    }\n  }\n\n"]);return G=function(){return n},n}function K(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function Q(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?K(Object(t),!0).forEach((function(e){(0,a.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):K(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var R=l.ZP.main(G(),(function(n){return"dashboard"===n.view?"max-content":"1fr 1fr 1fr"}),(function(n){return"dashboard"===n.view?"max-content":"1fr 1fr"}),(function(n){return"dashboard"===n.view?"max-content":"none"})),Y=(0,l.ZP)(p.Z)(V()),$=function(){var n,e,t,r=(0,c.useState)(null),a=r[0],l=r[1],p=(0,c.useState)(0),m=p[0],h=p[1],f=(0,c.useState)(),g=f[0],v=f[1];(0,c.useEffect)((function(){if(v(localStorage.getItem("view")||"dashboard"),!a)try{var n=localStorage.getItem("characterData"),e=JSON.parse(n);l(e)}catch(t){console.log("Failed to import family data from localStorage")}}),[]);var j=function(n){localStorage.setItem("view",n),v(n)};return(0,i.jsxs)(s.i,{children:[(0,i.jsx)(o.Z,{}),(0,i.jsxs)(R,{view:g,children:[(0,i.jsxs)("h1",{children:["Family ",(0,i.jsx)(q,{handleImport:function(n){l(n),localStorage.setItem("characterData",JSON.stringify(n))}})]}),(0,i.jsxs)("div",{className:"view-icons",children:[(0,i.jsx)(M.Z,{onClick:function(){return j("dashboard")},"aria-label":"dashboard-view",title:"dashboard-view",children:(0,i.jsx)(H.Z,{})}),(0,i.jsx)(M.Z,{onClick:function(){return j("list")},"aria-label":"list-view",title:"list-view",children:(0,i.jsx)(X.Z,{})})]}),"list"===g?(0,i.jsx)("div",{className:"characters list",children:null===a||void 0===a||null===(n=a.characters)||void 0===n?void 0:n.map((function(n,e){return(0,c.createElement)(_,Q(Q({},n),{},{key:e}))}))}):null,a?null:(0,i.jsxs)("div",{className:"missing-json",children:[(0,i.jsxs)("div",{className:"missing-text",children:[(0,i.jsx)("span",{children:"Please load your family JSON"}),(0,i.jsx)(B,{children:(0,i.jsx)(M.Z,{children:(0,i.jsx)(W.Z,{})})})]}),(0,i.jsx)("img",{src:"".concat(x.O4,"etc/Dr_Defecaus_Walking.gif"),alt:""})]}),"dashboard"===g&&a?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Z,{position:"static",children:(0,i.jsx)(Y,{scrollButtons:"auto",variant:"scrollable",value:m,onChange:function(n,e){h(e)},children:null===a||void 0===a||null===(e=a.characters)||void 0===e?void 0:e.map((function(n,e){var t=n.name,r=n.class;return(0,i.jsx)(u.Z,{label:(0,i.jsxs)("div",{className:"tab-name",children:[(0,i.jsx)("img",{src:"".concat(x.O4,"icons/").concat(r,"_Icon.png"),alt:""}),t]})},t+e)}))})}),(0,i.jsx)("div",{className:"characters dashboard",children:null===a||void 0===a||null===(t=a.characters)||void 0===t?void 0:t.map((function(n,e){return e===m?(0,c.createElement)(_,Q(Q({},n),{},{key:e})):null}))})]}):null]})]})}},9294:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/family",function(){return t(6e3)}])}},function(n){n.O(0,[793,769,472,774,888,179],(function(){return e=9294,n(n.s=e);var e}));var e=n.O();_N_E=e}]);