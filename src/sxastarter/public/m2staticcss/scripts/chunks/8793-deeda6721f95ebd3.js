"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8793],{27890:function(e,t,n){n.d(t,{pL:function(){return h},AS:function(){return m},ZP:function(){return AreaChart}});var r=n(85893),o=n(65165),s=n(99599),i=n(77833),a=n(14569),l=n(67294),u=n(62097),c=n(55832),d=n(52974),p=n(99906),f=n(35870);let g=(0,l.memo)(e=>{let{left:t,width:n,isDark:o,boosted:s}=e,i=n?t/n*100:0,a="".concat(i-15,"%"),l="".concat(i-.1,"%"),u="".concat(i,"%");return s?o?(0,r.jsxs)("linearGradient",{id:"gradient",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#05B799"}),(0,r.jsx)("stop",{offset:a,stopColor:"#05C8A2"}),(0,r.jsx)("stop",{offset:l,stopColor:"#2EFFBF"}),(0,r.jsx)("stop",{offset:u,stopColor:"#0D5F53"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#064448"})]}):(0,r.jsxs)("linearGradient",{id:"gradient",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#39EBCD"}),(0,r.jsx)("stop",{offset:a,stopColor:"#20F0C3"}),(0,r.jsx)("stop",{offset:l,stopColor:"#01F0A7"}),(0,r.jsx)("stop",{offset:u,stopColor:"#9CF7DD"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#AEEDF0"})]}):o?(0,r.jsxs)("linearGradient",{id:"gradient",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#05C088"}),(0,r.jsx)("stop",{offset:a,stopColor:"#05C58C"}),(0,r.jsx)("stop",{offset:l,stopColor:"#01EFA7"}),(0,r.jsx)("stop",{offset:u,stopColor:"#0F6B51"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#064E39"})]}):(0,r.jsxs)("linearGradient",{id:"gradient",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"#37F2BA"}),(0,r.jsx)("stop",{offset:a,stopColor:"#19F1B0"}),(0,r.jsx)("stop",{offset:l,stopColor:"#00DC99"}),(0,r.jsx)("stop",{offset:u,stopColor:"#9CF7DD"}),(0,r.jsx)("stop",{offset:"100%",stopColor:"#B4F9E5"})]})});g.displayName="GradientSvg";let getElementHeight=e=>e?e.getBoundingClientRect().height:0,getElementWidth=e=>e?e.getBoundingClientRect().width:0,getDays=e=>e.days||0,getApyValue=e=>e.apy||0,m=7,h=360,x=[];for(let e=0;e<h;e++){let t=1/(1.47*h-e);x.push({days:e+1,apy:t*e*e})}function AreaChart(e){let{width:t,minValue:n=m,maxValue:b=h,initialDays:j,onDaysChange:v,boosted:C=!0,isHomePage:y=!1,setIsGraphEngaged:_}=e,P=(0,l.useRef)(0),{t:E}=(0,c.$G)("earn"),{themeStyle:O,direction:M}=(0,u.Z)(),k=(0,l.useRef)(),{isTablet:w}=(0,d.iP)(),[D,A]=(0,l.useState)(j),[F,L]=(0,l.useState)(0),[Z,R]=(0,l.useState)(t),[B,S]=(0,l.useState)(0),[G,N]=(0,l.useState)(t),W=(0,l.useRef)(null),I=(0,l.useRef)(null),X=(0,l.useRef)(null),$=(0,l.useMemo)(()=>getElementHeight(X.current),[X.current,w]),getCircleAbsolutePosition=e=>{var t;let n=e/h*k.current.maxLeft,r=T(null===(t=x[e-1<0?0:e-1])||void 0===t?void 0:t.apy)-4;return{left:n,top:r}},setGlossPosition=e=>{let{left:n,top:r}=getCircleAbsolutePosition(e),o=C?50:65,s=(n+P.current)/t*100,i=(r+o)/$*100;N(s),S(i)},setPositions=e=>{let{left:t,top:n}=getCircleAbsolutePosition(e);L(n?n+45:45),R(t?t+P.current:0),setGlossPosition(e)},z=(0,l.useMemo)(()=>(0,i.Z)({range:[0,t-P.current],domain:[0,h]}),[t,P.current]),H=(0,l.useMemo)(()=>w?-900:-280,[w]),T=(0,l.useMemo)(()=>(0,i.Z)({range:[h-70,w?0:-10],domain:[H,x[x.length-1].apy],nice:!0}),[w,H]),V=(0,l.useCallback)(()=>{let e=Math.round(100-(t-32)*100/t),r=Math.ceil(b*e/100/2);return{newMaxDays:b+r,newMinDays:n-r}},[t,b,n]),setPositionsAndDays=e=>{let{newMaxDays:t,newMinDays:r}=V(),o=Math.min(b,Math.max(Math.round(e*(t-r))+r,n));setPositions(Math.ceil(e*h)),A(o),v(o,!0)},updateChart=()=>{k.current=getInitialPosition();let{newMaxDays:e,newMinDays:t}=V(),n=(j-t)/(e-t);setPositionsAndDays(n)};(0,l.useEffect)(()=>{let e=j!==D&&j>=n&&j<=b;e&&updateChart()},[j,$,n,b]),(0,l.useEffect)(()=>{updateChart()},[t,$,C,w]);let q=(0,l.useCallback)(e=>{!w&&I.current&&(I.current.style.cursor=e)},[I.current,w]),J=(0,l.useMemo)(()=>{if(!W.current)return 0;let e=f.Nh/2,t=getElementWidth(X.current),n=Z<=e,r=t-Z<=e;return n?4+e:r?t-4-e:Z},[Z,w,X.current]);return(0,l.useEffect)(()=>{var e,t;let handleMouseMove=e=>{let{left:t}=function(e){let{containerLeft:t,minLeft:n,maxLeft:r}=k.current,o=e-t;return o<=n&&(o=n),o>=r&&(o=r),{left:o}}("pageX"in e?e.pageX:e.touches[0].pageX),n=Math.max(t-P.current,0)/(k.current.maxLeft+16);setPositionsAndDays(n)};null===(e=I.current)||void 0===e||e.addEventListener("mousedown",()=>{q("grabbing"),k.current=getInitialPosition(),document.addEventListener("mousemove",handleMouseMove),document.addEventListener("mouseup",()=>{q("grab"),null==_||_(!0),document.removeEventListener("mousemove",handleMouseMove)})},{passive:!0}),null===(t=I.current)||void 0===t||t.addEventListener("touchstart",()=>{q("grabbing"),k.current=getInitialPosition(),document.addEventListener("touchmove",handleMouseMove),document.addEventListener("touchend",()=>{q("grab"),null==_||_(!0),document.removeEventListener("touchmove",handleMouseMove)})},{passive:!0})},[w,t,$,C,b,n]),(0,l.useEffect)(()=>{X.current&&(X.current.style.transition="--x 380ms ease-in-out, padding-top 500ms ease-out");let e=setTimeout(()=>{X.current&&(X.current.style.transition="padding-top 500ms ease-out")},600);return()=>{clearTimeout(e)}},[C,X.current]),(0,r.jsxs)(f.hC,{className:"no-rtl",children:[(0,r.jsxs)(f.W2,{boosted:C,ref:X,style:{"--x":"".concat(B,"%"),background:"conic-gradient(\n            from 0.14deg at ".concat(G,"% var(--x),\n            rgba(31, 237, 178, 0) -13.33deg,\n            rgba(31, 237, 178, 0.6) 187.5deg,\n            rgba(31, 237, 178, 0) 346.67deg,\n            rgba(31, 237, 178, 0.6) 547.5deg\n          )")},children:[(0,r.jsxs)(f.z$,{ref:I,style:{left:"".concat(Z,"px")},children:[(0,r.jsx)(f.x1,{}),(0,r.jsx)(f.Cd,{style:{top:"".concat(F,"px")}})]}),(0,r.jsx)(f.Ld,{width:t-P.current>0?t-P.current:0,height:$?$-48:0,children:(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(g,{width:t,left:Z,boosted:C,isDark:"dark"===O}),(0,r.jsx)(a.Z,{data:x,x:e=>z(getDays(e)),y:e=>T(getApyValue(e)),yScale:T,strokeWidth:1,stroke:"url(#gradient)",fill:"url(#gradient)",curve:o.Z})]})})]}),(0,r.jsx)(f.$D,{style:{left:"".concat(J-("rtl"===M?getElementWidth(W.current):0),"px")},ref:W,isHomePage:y,children:(0,r.jsx)(f.k5,{color:y?"typePrimary":"oppositeTypePrimary",variant:p.R.ExtraSmall,align:"center",children:E("earn.custom.daysOnChart",{daysCount:D})})})]});function getInitialPosition(){var e,t;let{left:n,width:r}=null===(e=X.current)||void 0===e?void 0:e.getBoundingClientRect(),{left:o,width:s}=null===(t=I.current)||void 0===t?void 0:t.getBoundingClientRect();return{left:o,containerLeft:n,minLeft:16,maxLeft:r-s-P.current}}}},35870:function(e,t,n){n.d(t,{$D:function(){return d},Cd:function(){return h},Ld:function(){return f},Nh:function(){return u},PG:function(){return l},W2:function(){return p},bC:function(){return a},hC:function(){return c},k5:function(){return x},x1:function(){return m},z$:function(){return g}});var r=n(82729),o=n(81719),s=n(70917),i=n(16879);function _templateObject(){let e=(0,r._)(["\n  position: relative;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n    z-index: ",";\n\n    position: absolute;\n    min-width: ","px;\n    top: ",";\n\n    transform: translateX(-50%);\n    max-height: ",";\n    border-radius: ",";\n    padding: 5px "," ",";\n    background: ",";\n\n    & > p {\n      white-space: nowrap;\n    }\n\n    "," {\n      top: ",";\n      padding: 5px "," ",";\n    }\n  "]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n    position: relative;\n    width: 100%;\n    height: ","px;\n    touch-action: none;\n    border-radius: ",";\n    overflow: hidden;\n\n    @property --x {\n      syntax: '<percentage>';\n      inherits: false;\n      initial-value: 10%;\n    }\n\n    padding-top: ",";\n\n    "," {\n      height: ","px;\n    }\n  "]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n    margin-top: ",";\n    border-radius: 0 0 "," ",";\n  "]);return _templateObject3=function(){return e},e}function _templateObject4(){let e=(0,r._)(["\n  position: absolute;\n  /*@noflip*/\n  cursor: grab;\n"]);return _templateObject4=function(){return e},e}function _templateObject5(){let e=(0,r._)(["\n    position: relative;\n\n    width: 1px;\n    height: ","px;\n    background: linear-gradient(180deg, rgba(115, 255, 212, 0) 0%, #73ffd4 27.08%, #009e6e 48.96%);\n\n    // this helps to drag the line easier (especially on touch devices)\n    &::after {\n      content: '';\n      position: absolute;\n      transform: translateX(-50%);\n\n      width: ",";\n      height: ","px;\n\n      "," {\n        height: ","px;\n      }\n    }\n\n    "," {\n      height: ","px;\n    }\n  "]);return _templateObject5=function(){return e},e}function _templateObject6(){let e=(0,r._)(["\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    border-radius: 50%;\n    left: -7px;\n    background: ",";\n\n    &.booster-changed {\n      transition: top 500ms ease-out;\n      -webkit-transition: top 500ms ease-out;\n    }\n  "]);return _templateObject6=function(){return e},e}function _templateObject7(){let e=(0,r._)(["\n  direction: ltr;\n"]);return _templateObject7=function(){return e},e}let a=225,l=324,u=75,c=(0,o.ZP)("div")(_templateObject()),d=(0,o.ZP)("div")(e=>{let{theme:t,isHomePage:n}=e;return(0,s.iv)(_templateObject1(),t.zInd.featured,u,n?"".concat(a-28,"px"):t.spaces.medium,t.spaces.large,t.borderRadius.large,t.spaces.xsmall,t.spaces.xsmall,"light"===t.themeStyle||n?t.colors.secondaryHover:t.colors.oppositePrimaryBackground,t.breakpoints.up("lg"),n?"".concat(l-28,"px"):t.spaces.medium,t.spaces.small,t.spaces.xsmall)}),p=(0,o.ZP)("div",{shouldForwardProp:e=>"boosted"!==e})(e=>{let{theme:t,boosted:n}=e;return(0,s.iv)(_templateObject2(),a,t.borderRadius.small,n?0:t.spaces.medium,t.breakpoints.up("lg"),l)}),f=(0,o.ZP)("svg")(e=>{let{theme:t}=e;return(0,s.iv)(_templateObject3(),t.spaces.xxlarge,t.borderRadius.small,t.borderRadius.small)}),g=(0,o.ZP)("div")(_templateObject4()),m=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,s.iv)(_templateObject5(),a,t.spaces.large,a,t.breakpoints.up("lg"),l,t.breakpoints.up("lg"),l)}),h=(0,o.ZP)("div")(e=>{let{theme:t}=e,n="dark"===t.themeStyle?"radial-gradient(50% 50% at 50% 50%, #fff 27.49%, rgba(255, 255, 255, 0) 100%)":"radial-gradient(50% 50% at 50% 50%, #fff 50%, rgba(255, 255, 255, 0.1) 100%)";return(0,s.iv)(_templateObject6(),n)}),x=(0,o.ZP)(i.x)(_templateObject7())}}]);