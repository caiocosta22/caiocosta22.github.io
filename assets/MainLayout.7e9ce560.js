import{c as j,i as Pe,e as G,p as et,a as f,h as C,d as he,g as K,l as Me,f as yt,s as pt,w as T,o as Z,j as ne,n as Oe,k as zt,m as Be,q as St,r as wt,t as w,u as tt,v as ie,x as _e,y as ce,z as at,A as lt,B as me,C as _t,D as be,E as qt,F as Ct,G as ot,H as kt,P as Tt,I as xt,J as ae,K as $t,L as de,M as qe,N as Re,O as Ce,Q as Ee,R as ke,S as Bt,T as Et,U as Lt,V as ve,W as Te,X as De,Y as Pt,Z as Mt,_ as Ot,$ as At,a0 as Ht,a1 as Qe,a2 as Rt,a3 as Dt,a4 as nt,a5 as le,a6 as Ve,a7 as U,a8 as $,a9 as J,aa as Fe,ab as D,ac as je,ad as Qt,ae as Le,af as Vt,ag as Ft,ah as jt,ai as Wt,aj as Nt,ak as It,al as Xt,am as Kt}from"./index.86887d76.js";var Ut=j({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=K(),s=Pe(Me,G);if(s===G)return console.error("QPageContainer needs to be child of QLayout"),G;et(yt,!0);const t=f(()=>{const a={};return s.header.space===!0&&(a.paddingTop=`${s.header.size}px`),s.right.space===!0&&(a[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(a.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(a[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),a});return()=>C("div",{class:"q-page-container",style:t.value},he(i.default))}});const{passive:We}=Be,Yt=["both","horizontal","vertical"];var it=j({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Yt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:pt},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let s=null,t,a;T(()=>e.scrollTarget,()=>{v(),l()});function u(){s!==null&&s();const h=Math.max(0,St(t)),y=wt(t),g={top:h-n.position.top,left:y-n.position.left};if(e.axis==="vertical"&&g.top===0||e.axis==="horizontal"&&g.left===0)return;const z=Math.abs(g.top)>=Math.abs(g.left)?g.top<0?"up":"down":g.left<0?"left":"right";n.position={top:h,left:y},n.directionChanged=n.direction!==z,n.delta=g,n.directionChanged===!0&&(n.direction=z,n.inflectionPoint=n.position),i("scroll",{...n})}function l(){t=zt(a,e.scrollTarget),t.addEventListener("scroll",c,We),c(!0)}function v(){t!==void 0&&(t.removeEventListener("scroll",c,We),t=void 0)}function c(h){if(h===!0||e.debounce===0||e.debounce==="0")u();else if(s===null){const[y,g]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];s=()=>{g(y),s=null}}}const{proxy:o}=K();return T(()=>o.$q.lang.rtl,u),Z(()=>{a=o.$el.parentNode,l()}),ne(()=>{s!==null&&s(),v()}),Object.assign(o,{trigger:c,getPosition:()=>n}),Oe}});function Jt(){const e=w(!tt.value);return e.value===!1&&Z(()=>{e.value=!0}),{isHydrated:e}}const rt=typeof ResizeObserver!="undefined",Ne=rt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var fe=j({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let n=null,s,t={width:-1,height:-1};function a(v){v===!0||e.debounce===0||e.debounce==="0"?u():n===null&&(n=setTimeout(u,e.debounce))}function u(){if(n!==null&&(clearTimeout(n),n=null),s){const{offsetWidth:v,offsetHeight:c}=s;(v!==t.width||c!==t.height)&&(t={width:v,height:c},i("resize",t))}}const{proxy:l}=K();if(l.trigger=a,rt===!0){let v;const c=o=>{s=l.$el.parentNode,s?(v=new ResizeObserver(a),v.observe(s),u()):o!==!0&&ie(()=>{c(!0)})};return Z(()=>{c()}),ne(()=>{n!==null&&clearTimeout(n),v!==void 0&&(v.disconnect!==void 0?v.disconnect():s&&v.unobserve(s))}),Oe}else{let o=function(){n!==null&&(clearTimeout(n),n=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",a,Be.passive),c=void 0)},h=function(){o(),s&&s.contentDocument&&(c=s.contentDocument.defaultView,c.addEventListener("resize",a,Be.passive),u())};const{isHydrated:v}=Jt();let c;return Z(()=>{ie(()=>{s=l.$el,s&&h()})}),ne(o),()=>{if(v.value===!0)return C("object",{class:"q--avoid-card-border",style:Ne.style,tabindex:-1,type:"text/html",data:Ne.url,"aria-hidden":"true",onLoad:h})}}}}),Gt=j({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:s}}=K(),t=w(null),a=w(s.screen.height),u=w(e.container===!0?0:s.screen.width),l=w({position:0,direction:"down",inflectionPoint:0}),v=w(0),c=w(tt.value===!0?0:_e()),o=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),h=f(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),y=f(()=>c.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),g=f(()=>c.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function z(b){if(e.container===!0||document.qScrollPrevented!==!0){const k={position:b.position.top,direction:b.direction,directionChanged:b.directionChanged,inflectionPoint:b.inflectionPoint.top,delta:b.delta.top};l.value=k,e.onScroll!==void 0&&n("scroll",k)}}function E(b){const{height:k,width:B}=b;let R=!1;a.value!==k&&(R=!0,a.value=k,e.onScrollHeight!==void 0&&n("scrollHeight",k),_()),u.value!==B&&(R=!0,u.value=B),R===!0&&e.onResize!==void 0&&n("resize",b)}function x({height:b}){v.value!==b&&(v.value=b,_())}function _(){if(e.container===!0){const b=a.value>v.value?_e():0;c.value!==b&&(c.value=b)}}let M=null;const q={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:t,height:a,containerHeight:v,scrollbarWidth:c,totalWidth:f(()=>u.value+c.value),rows:f(()=>{const b=e.view.toLowerCase().split(" ");return{top:b[0].split(""),middle:b[1].split(""),bottom:b[2].split("")}}),header:ce({size:0,offset:0,space:!1}),right:ce({size:300,offset:0,space:!1}),footer:ce({size:0,offset:0,space:!1}),left:ce({size:300,offset:0,space:!1}),scroll:l,animate(){M!==null?clearTimeout(M):document.body.classList.add("q-body--layout-animate"),M=setTimeout(()=>{M=null,document.body.classList.remove("q-body--layout-animate")},155)},update(b,k,B){q[b][k]=B}};if(et(Me,q),_e()>0){let B=function(){b=null,k.classList.remove("hide-scrollbar")},R=function(){if(b===null){if(k.scrollHeight>s.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(b);b=setTimeout(B,300)},W=function(Q){b!==null&&Q==="remove"&&(clearTimeout(b),B()),window[`${Q}EventListener`]("resize",R)},b=null;const k=document.body;T(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),at(()=>{W("remove")})}return()=>{const b=lt(i.default,[C(it,{onScroll:z}),C(fe,{onResize:E})]),k=C("div",{class:o.value,style:h.value,ref:e.container===!0?void 0:t,tabindex:-1},b);return e.container===!0?C("div",{class:"q-layout-container overflow-hidden",ref:t},[C(fe,{onResize:x}),C("div",{class:"absolute-full",style:y.value},[C("div",{class:"scroll",style:g.value},[k])])]):k}}}),Ie=j({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:i}){const n=f(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>C("div",{class:n.value},he(i.default))}}),Xe=j({name:"QItem",props:{...me,..._t,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:i,emit:n}){const{proxy:{$q:s}}=K(),t=be(e,s),{hasLink:a,linkAttrs:u,linkClass:l,linkTag:v,navigateOnClick:c}=qt(),o=w(null),h=w(null),y=f(()=>e.clickable===!0||a.value===!0||e.tag==="label"),g=f(()=>e.disable!==!0&&y.value===!0),z=f(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(a.value===!0&&e.active===null?l.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(g.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=f(()=>{if(e.insetLevel===void 0)return null;const q=s.lang.rtl===!0?"Right":"Left";return{["padding"+q]:16+e.insetLevel*56+"px"}});function x(q){g.value===!0&&(h.value!==null&&(q.qKeyEvent!==!0&&document.activeElement===o.value?h.value.focus():document.activeElement===h.value&&o.value.focus()),c(q))}function _(q){if(g.value===!0&&Ct(q,[13,32])===!0){ot(q),q.qKeyEvent=!0;const b=new MouseEvent("click",q);b.qKeyEvent=!0,o.value.dispatchEvent(b)}n("keyup",q)}function M(){const q=kt(i.default,[]);return g.value===!0&&q.unshift(C("div",{class:"q-focus-helper",tabindex:-1,ref:h})),q}return()=>{const q={ref:o,class:z.value,style:E.value,role:"listitem",onClick:x,onKeyup:_};return g.value===!0?(q.tabindex=e.tabindex||"0",Object.assign(q,u.value)):y.value===!0&&(q["aria-disabled"]="true"),C(v.value,q,M())}}}),Zt=j({name:"QList",props:{...me,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:i}){const n=K(),s=be(e,n.proxy.$q),t=f(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>C(e.tag,{class:t.value},he(i.default))}});const Ae={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},ea=Object.keys(Ae);Ae.all=!0;function Ke(e){const i={};for(const n of ea)e[n]===!0&&(i[n]=!0);return Object.keys(i).length===0?Ae:(i.horizontal===!0?i.left=i.right=!0:i.left===!0&&i.right===!0&&(i.horizontal=!0),i.vertical===!0?i.up=i.down=!0:i.up===!0&&i.down===!0&&(i.vertical=!0),i.horizontal===!0&&i.vertical===!0&&(i.all=!0),i)}const ta=["INPUT","TEXTAREA"];function Ue(e,i){return i.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof i.handler=="function"&&ta.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(i.uid)===-1)}function aa(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Tt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function xe(e,i,n){const s=Ee(e);let t,a=s.left-i.event.x,u=s.top-i.event.y,l=Math.abs(a),v=Math.abs(u);const c=i.direction;c.horizontal===!0&&c.vertical!==!0?t=a<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=u<0?"up":"down":c.up===!0&&u<0?(t="up",l>v&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.down===!0&&u>0?(t="down",l>v&&(c.left===!0&&a<0?t="left":c.right===!0&&a>0&&(t="right"))):c.left===!0&&a<0?(t="left",l<v&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down"))):c.right===!0&&a>0&&(t="right",l<v&&(c.up===!0&&u<0?t="up":c.down===!0&&u>0&&(t="down")));let o=!1;if(t===void 0&&n===!1){if(i.event.isFirst===!0||i.event.lastDir===void 0)return{};t=i.event.lastDir,o=!0,t==="left"||t==="right"?(s.left-=a,l=0,a=0):(s.top-=u,v=0,u=0)}return{synthetic:o,payload:{evt:e,touch:i.event.mouse!==!0,mouse:i.event.mouse===!0,position:s,direction:t,isFirst:i.event.isFirst,isFinal:n===!0,duration:Date.now()-i.event.time,distance:{x:l,y:v},offset:{x:a,y:u},delta:{x:s.left-i.event.lastX,y:s.top-i.event.lastY}}}}let la=0;var oe=xt({name:"touch-pan",beforeMount(e,{value:i,modifiers:n}){if(n.mouse!==!0&&ae.has.touch!==!0)return;function s(a,u){n.mouse===!0&&u===!0?ot(a):(n.stop===!0&&Ce(a),n.prevent===!0&&Re(a))}const t={uid:"qvtp_"+la++,handler:i,modifiers:n,direction:Ke(n),noop:Oe,mouseStart(a){Ue(a,t)&&$t(a)&&(de(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(a,!0))},touchStart(a){if(Ue(a,t)){const u=a.target;de(t,"temp",[[u,"touchmove","move","notPassiveCapture"],[u,"touchcancel","end","passiveCapture"],[u,"touchend","end","passiveCapture"]]),t.start(a)}},start(a,u){if(ae.is.firefox===!0&&qe(e,!0),t.lastEvt=a,u===!0||n.stop===!0){if(t.direction.all!==!0&&(u!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=a.type.indexOf("mouse")!==-1?new MouseEvent(a.type,a):new TouchEvent(a.type,a);a.defaultPrevented===!0&&Re(c),a.cancelBubble===!0&&Ce(c),Object.assign(c,{qKeyEvent:a.qKeyEvent,qClickOutside:a.qClickOutside,qAnchorHandled:a.qAnchorHandled,qClonedBy:a.qClonedBy===void 0?[t.uid]:a.qClonedBy.concat(t.uid)}),t.initialEvent={target:a.target,event:c}}Ce(a)}const{left:l,top:v}=Ee(a);t.event={x:l,y:v,time:Date.now(),mouse:u===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:l,lastY:v}},move(a){if(t.event===void 0)return;const u=Ee(a),l=u.left-t.event.x,v=u.top-t.event.y;if(l===0&&v===0)return;t.lastEvt=a;const c=t.event.mouse===!0,o=()=>{s(a,c);let g;n.preserveCursor!==!0&&n.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),aa(),t.styleCleanup=z=>{if(t.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),c===!0){const E=()=>{document.body.classList.remove("no-pointer-events--children")};z!==void 0?setTimeout(()=>{E(),z()},50):E()}else z!==void 0&&z()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(a,t.event.mouse);const{payload:g,synthetic:z}=xe(a,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(a):(t.styleCleanup===void 0&&t.event.isFirst===!0&&o(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=z===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){o(),t.event.detected=!0,t.move(a);return}const h=Math.abs(l),y=Math.abs(v);h!==y&&(t.direction.horizontal===!0&&h>y||t.direction.vertical===!0&&h<y||t.direction.up===!0&&h<y&&v<0||t.direction.down===!0&&h<y&&v>0||t.direction.left===!0&&h>y&&l<0||t.direction.right===!0&&h>y&&l>0?(t.event.detected=!0,t.move(a)):t.end(a,!0))},end(a,u){if(t.event!==void 0){if(ke(t,"temp"),ae.is.firefox===!0&&qe(e,!1),u===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(xe(a===void 0?t.lastEvt:a,t).payload);const{payload:l}=xe(a===void 0?t.lastEvt:a,t,!0),v=()=>{t.handler(l)};t.styleCleanup!==void 0?t.styleCleanup(v):v()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,n.mouse===!0){const a=n.mouseCapture===!0||n.mousecapture===!0?"Capture":"";de(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}ae.has.touch===!0&&de(t,"main",[[e,"touchstart","touchStart",`passive${n.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,i){const n=e.__qtouchpan;n!==void 0&&(i.oldValue!==i.value&&(typeof value!="function"&&n.end(),n.handler=i.value),n.direction=Ke(i.modifiers))},beforeUnmount(e){const i=e.__qtouchpan;i!==void 0&&(i.event!==void 0&&i.end(),ke(i,"main"),ke(i,"temp"),ae.is.firefox===!0&&qe(e,!1),i.styleCleanup!==void 0&&i.styleCleanup(),delete e.__qtouchpan)}});function X(e,i,n){return n<=i?i:Math.min(n,Math.max(i,e))}const Ye=["vertical","horizontal"],$e={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Je={prevent:!0,mouse:!0,mouseAllDir:!0},Ge=e=>e>=250?50:Math.ceil(e/5);var oa=j({name:"QScrollArea",props:{...me,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:i,emit:n}){const s=w(!1),t=w(!1),a=w(!1),u={vertical:w(0),horizontal:w(0)},l={vertical:{ref:w(null),position:w(0),size:w(0)},horizontal:{ref:w(null),position:w(0),size:w(0)}},{proxy:v}=K(),c=be(e,v.$q);let o=null,h;const y=w(null),g=f(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));l.vertical.percentage=f(()=>{const d=l.vertical.size.value-u.vertical.value;if(d<=0)return 0;const m=X(l.vertical.position.value/d,0,1);return Math.round(m*1e4)/1e4}),l.vertical.thumbHidden=f(()=>(e.visible===null?a.value:e.visible)!==!0&&s.value===!1&&t.value===!1||l.vertical.size.value<=u.vertical.value+1),l.vertical.thumbStart=f(()=>l.vertical.percentage.value*(u.vertical.value-l.vertical.thumbSize.value)),l.vertical.thumbSize=f(()=>Math.round(X(u.vertical.value*u.vertical.value/l.vertical.size.value,Ge(u.vertical.value),u.vertical.value))),l.vertical.style=f(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${l.vertical.thumbStart.value}px`,height:`${l.vertical.thumbSize.value}px`})),l.vertical.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.vertical.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(l.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),l.horizontal.percentage=f(()=>{const d=l.horizontal.size.value-u.horizontal.value;if(d<=0)return 0;const m=X(Math.abs(l.horizontal.position.value)/d,0,1);return Math.round(m*1e4)/1e4}),l.horizontal.thumbHidden=f(()=>(e.visible===null?a.value:e.visible)!==!0&&s.value===!1&&t.value===!1||l.horizontal.size.value<=u.horizontal.value+1),l.horizontal.thumbStart=f(()=>l.horizontal.percentage.value*(u.horizontal.value-l.horizontal.thumbSize.value)),l.horizontal.thumbSize=f(()=>Math.round(X(u.horizontal.value*u.horizontal.value/l.horizontal.size.value,Ge(u.horizontal.value),u.horizontal.value))),l.horizontal.style=f(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[v.$q.lang.rtl===!0?"right":"left"]:`${l.horizontal.thumbStart.value}px`,width:`${l.horizontal.thumbSize.value}px`})),l.horizontal.thumbClass=f(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),l.horizontal.barClass=f(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(l.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const z=f(()=>l.vertical.thumbHidden.value===!0&&l.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),E=[[oe,d=>{R(d,"vertical")},void 0,{vertical:!0,...Je}]],x=[[oe,d=>{R(d,"horizontal")},void 0,{horizontal:!0,...Je}]];function _(){const d={};return Ye.forEach(m=>{const S=l[m];d[m+"Position"]=S.position.value,d[m+"Percentage"]=S.percentage.value,d[m+"Size"]=S.size.value,d[m+"ContainerSize"]=u[m].value}),d}const M=Bt(()=>{const d=_();d.ref=v,n("scroll",d)},0);function q(d,m,S){if(Ye.includes(d)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(d==="vertical"?De:Te)(y.value,m,S)}function b({height:d,width:m}){let S=!1;u.vertical.value!==d&&(u.vertical.value=d,S=!0),u.horizontal.value!==m&&(u.horizontal.value=m,S=!0),S===!0&&H()}function k({position:d}){let m=!1;l.vertical.position.value!==d.top&&(l.vertical.position.value=d.top,m=!0),l.horizontal.position.value!==d.left&&(l.horizontal.position.value=d.left,m=!0),m===!0&&H()}function B({height:d,width:m}){l.horizontal.size.value!==m&&(l.horizontal.size.value=m,H()),l.vertical.size.value!==d&&(l.vertical.size.value=d,H())}function R(d,m){const S=l[m];if(d.isFirst===!0){if(S.thumbHidden.value===!0)return;h=S.position.value,t.value=!0}else if(t.value!==!0)return;d.isFinal===!0&&(t.value=!1);const F=$e[m],Y=u[m].value,ge=(S.size.value-Y)/(Y-S.thumbSize.value),ue=d.distance[F.dist],ye=h+(d.direction===F.dir?1:-1)*ue*ge;ee(ye,m)}function W(d,m){const S=l[m];if(S.thumbHidden.value!==!0){const F=d[$e[m].offset];if(F<S.thumbStart.value||F>S.thumbStart.value+S.thumbSize.value){const Y=F-S.thumbSize.value/2;ee(Y/u[m].value*S.size.value,m)}S.ref.value!==null&&S.ref.value.dispatchEvent(new MouseEvent(d.type,d))}}function Q(d){W(d,"vertical")}function A(d){W(d,"horizontal")}function H(){s.value=!0,o!==null&&clearTimeout(o),o=setTimeout(()=>{o=null,s.value=!1},e.delay),e.onScroll!==void 0&&M()}function ee(d,m){y.value[$e[m].scroll]=d}let L=null;function te(){L!==null&&clearTimeout(L),L=setTimeout(()=>{L=null,a.value=!0},v.$q.platform.is.ios?50:0)}function re(){L!==null&&(clearTimeout(L),L=null),a.value=!1}let V=null;return T(()=>v.$q.lang.rtl,d=>{y.value!==null&&Te(y.value,Math.abs(l.horizontal.position.value)*(d===!0?-1:1))}),Et(()=>{V={top:l.vertical.position.value,left:l.horizontal.position.value}}),Lt(()=>{if(V===null)return;const d=y.value;d!==null&&(Te(d,V.left),De(d,V.top))}),ne(M.cancel),Object.assign(v,{getScrollTarget:()=>y.value,getScroll:_,getScrollPosition:()=>({top:l.vertical.position.value,left:l.horizontal.position.value}),getScrollPercentage:()=>({top:l.vertical.percentage.value,left:l.horizontal.percentage.value}),setScrollPosition:q,setScrollPercentage(d,m,S){q(d,m*(l[d].size.value-u[d].value)*(d==="horizontal"&&v.$q.lang.rtl===!0?-1:1),S)}}),()=>C("div",{class:g.value,onMouseenter:te,onMouseleave:re},[C("div",{ref:y,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[C("div",{class:"q-scrollarea__content absolute",style:z.value},lt(i.default,[C(fe,{debounce:0,onResize:B})])),C(it,{axis:"both",onScroll:k})]),C(fe,{debounce:0,onResize:b}),C("div",{class:l.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Q}),C("div",{class:l.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),ve(C("div",{ref:l.vertical.ref,class:l.vertical.thumbClass.value,style:l.vertical.style.value,"aria-hidden":"true"}),E),ve(C("div",{ref:l.horizontal.ref,class:l.horizontal.thumbClass.value,style:l.horizontal.style.value,"aria-hidden":"true"}),x)])}});const Ze=150;var na=j({name:"QDrawer",inheritAttrs:!1,props:{...Pt,...me,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Mt,"onLayout","miniState"],setup(e,{slots:i,emit:n,attrs:s}){const t=K(),{proxy:{$q:a}}=t,u=be(e,a),{preventBodyScroll:l}=Rt(),{registerTimeout:v,removeTimeout:c}=Ot(),o=Pe(Me,G);if(o===G)return console.error("QDrawer needs to be child of QLayout"),G;let h,y=null,g;const z=w(e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint),E=f(()=>e.mini===!0&&z.value!==!0),x=f(()=>E.value===!0?e.miniWidth:e.width),_=w(e.showIfAbove===!0&&z.value===!1?!0:e.modelValue===!0),M=f(()=>e.persistent!==!0&&(z.value===!0||F.value===!0));function q(r,p){if(R(),r!==!1&&o.animate(),O(0),z.value===!0){const P=o.instances[V.value];P!==void 0&&P.belowBreakpoint===!0&&P.hide(!1),N(1),o.isContainer.value!==!0&&l(!0)}else N(0),r!==!1&&ze(!1);v(()=>{r!==!1&&ze(!0),p!==!0&&n("show",r)},Ze)}function b(r,p){W(),r!==!1&&o.animate(),N(0),O(H.value*x.value),Se(),p!==!0?v(()=>{n("hide",r)},Ze):c()}const{show:k,hide:B}=At({showing:_,hideOnRouteChange:M,handleShow:q,handleHide:b}),{addToHistory:R,removeFromHistory:W}=Ht(_,B,M),Q={belowBreakpoint:z,hide:B},A=f(()=>e.side==="right"),H=f(()=>(a.lang.rtl===!0?-1:1)*(A.value===!0?1:-1)),ee=w(0),L=w(!1),te=w(!1),re=w(x.value*H.value),V=f(()=>A.value===!0?"left":"right"),d=f(()=>_.value===!0&&z.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:x.value:0),m=f(()=>e.overlay===!0||e.miniToOverlay===!0||o.view.value.indexOf(A.value?"R":"L")!==-1||a.platform.is.ios===!0&&o.isContainer.value===!0),S=f(()=>e.overlay===!1&&_.value===!0&&z.value===!1),F=f(()=>e.overlay===!0&&_.value===!0&&z.value===!1),Y=f(()=>"fullscreen q-drawer__backdrop"+(_.value===!1&&L.value===!1?" hidden":"")),ge=f(()=>({backgroundColor:`rgba(0,0,0,${ee.value*.4})`})),ue=f(()=>A.value===!0?o.rows.value.top[2]==="r":o.rows.value.top[0]==="l"),ye=f(()=>A.value===!0?o.rows.value.bottom[2]==="r":o.rows.value.bottom[0]==="l"),ut=f(()=>{const r={};return o.header.space===!0&&ue.value===!1&&(m.value===!0?r.top=`${o.header.offset}px`:o.header.space===!0&&(r.top=`${o.header.size}px`)),o.footer.space===!0&&ye.value===!1&&(m.value===!0?r.bottom=`${o.footer.offset}px`:o.footer.space===!0&&(r.bottom=`${o.footer.size}px`)),r}),st=f(()=>{const r={width:`${x.value}px`,transform:`translateX(${re.value}px)`};return z.value===!0?r:Object.assign(r,ut.value)}),ct=f(()=>"q-drawer__content fit "+(o.isContainer.value!==!0?"scroll":"overflow-auto")),dt=f(()=>`q-drawer q-drawer--${e.side}`+(te.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(u.value===!0?" q-drawer--dark q-dark":"")+(L.value===!0?" no-transition":_.value===!0?"":" q-layout--prevent-focus")+(z.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${E.value===!0?"mini":"standard"}`+(m.value===!0||S.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ue.value===!0?" q-drawer--top-padding":""))),vt=f(()=>{const r=a.lang.rtl===!0?e.side:V.value;return[[oe,bt,void 0,{[r]:!0,mouse:!0}]]}),ft=f(()=>{const r=a.lang.rtl===!0?V.value:e.side;return[[oe,He,void 0,{[r]:!0,mouse:!0}]]}),ht=f(()=>{const r=a.lang.rtl===!0?V.value:e.side;return[[oe,He,void 0,{[r]:!0,mouse:!0,mouseAllDir:!0}]]});function pe(){gt(z,e.behavior==="mobile"||e.behavior!=="desktop"&&o.totalWidth.value<=e.breakpoint)}T(z,r=>{r===!0?(h=_.value,_.value===!0&&B(!1)):e.overlay===!1&&e.behavior!=="mobile"&&h!==!1&&(_.value===!0?(O(0),N(0),Se()):k(!1))}),T(()=>e.side,(r,p)=>{o.instances[p]===Q&&(o.instances[p]=void 0,o[p].space=!1,o[p].offset=0),o.instances[r]=Q,o[r].size=x.value,o[r].space=S.value,o[r].offset=d.value}),T(o.totalWidth,()=>{(o.isContainer.value===!0||document.qScrollPrevented!==!0)&&pe()}),T(()=>e.behavior+e.breakpoint,pe),T(o.isContainer,r=>{_.value===!0&&l(r!==!0),r===!0&&pe()}),T(o.scrollbarWidth,()=>{O(_.value===!0?0:void 0)}),T(d,r=>{I("offset",r)}),T(S,r=>{n("onLayout",r),I("space",r)}),T(A,()=>{O()}),T(x,r=>{O(),we(e.miniToOverlay,r)}),T(()=>e.miniToOverlay,r=>{we(r,x.value)}),T(()=>a.lang.rtl,()=>{O()}),T(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(mt(),o.animate())}),T(E,r=>{n("miniState",r)});function O(r){r===void 0?ie(()=>{r=_.value===!0?0:x.value,O(H.value*r)}):(o.isContainer.value===!0&&A.value===!0&&(z.value===!0||Math.abs(r)===x.value)&&(r+=H.value*o.scrollbarWidth.value),re.value=r)}function N(r){ee.value=r}function ze(r){const p=r===!0?"remove":o.isContainer.value!==!0?"add":"";p!==""&&document.body.classList[p]("q-body--drawer-toggle")}function mt(){y!==null&&clearTimeout(y),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),te.value=!0,y=setTimeout(()=>{y=null,te.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function bt(r){if(_.value!==!1)return;const p=x.value,P=X(r.distance.x,0,p);if(r.isFinal===!0){P>=Math.min(75,p)===!0?k():(o.animate(),N(0),O(H.value*p)),L.value=!1;return}O((a.lang.rtl===!0?A.value!==!0:A.value)?Math.max(p-P,0):Math.min(0,P-p)),N(X(P/p,0,1)),r.isFirst===!0&&(L.value=!0)}function He(r){if(_.value!==!0)return;const p=x.value,P=r.direction===e.side,se=(a.lang.rtl===!0?P!==!0:P)?X(r.distance.x,0,p):0;if(r.isFinal===!0){Math.abs(se)<Math.min(75,p)===!0?(o.animate(),N(1),O(0)):B(),L.value=!1;return}O(H.value*se),N(X(1-se/p,0,1)),r.isFirst===!0&&(L.value=!0)}function Se(){l(!1),ze(!0)}function I(r,p){o.update(e.side,r,p)}function gt(r,p){r.value!==p&&(r.value=p)}function we(r,p){I("size",r===!0?e.miniWidth:p)}return o.instances[e.side]=Q,we(e.miniToOverlay,x.value),I("space",S.value),I("offset",d.value),e.showIfAbove===!0&&e.modelValue!==!0&&_.value===!0&&e["onUpdate:modelValue"]!==void 0&&n("update:modelValue",!0),Z(()=>{n("onLayout",S.value),n("miniState",E.value),h=e.showIfAbove===!0;const r=()=>{(_.value===!0?q:b)(!1,!0)};if(o.totalWidth.value!==0){ie(r);return}g=T(o.totalWidth,()=>{g(),g=void 0,_.value===!1&&e.showIfAbove===!0&&z.value===!1?k(!1):r()})}),ne(()=>{g!==void 0&&g(),y!==null&&(clearTimeout(y),y=null),_.value===!0&&Se(),o.instances[e.side]===Q&&(o.instances[e.side]=void 0,I("size",0),I("offset",0),I("space",!1))}),()=>{const r=[];z.value===!0&&(e.noSwipeOpen===!1&&r.push(ve(C("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),vt.value)),r.push(Qe("div",{ref:"backdrop",class:Y.value,style:ge.value,"aria-hidden":"true",onClick:B},void 0,"backdrop",e.noSwipeBackdrop!==!0&&_.value===!0,()=>ht.value)));const p=E.value===!0&&i.mini!==void 0,P=[C("div",{...s,key:""+p,class:[ct.value,s.class]},p===!0?i.mini():he(i.default))];return e.elevated===!0&&_.value===!0&&P.push(C("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),r.push(Qe("aside",{ref:"content",class:dt.value,style:st.value},P,"contentclose",e.noSwipeClose!==!0&&z.value===!0,()=>ft.value)),C("div",{class:"q-drawer-container"},r)}}});function ia(){return Pe(Dt)}const ra={class:"header"},ua=["src"],sa={class:"icons",id:"desktop"},ca={class:"hamburger"},da={class:"menu"},va={class:"icons",id:"#mobile"},fa={__name:"Header",setup(e){const i=ia(),n=w(i.dark.isActive),s=()=>{i.dark.toggle()},t=w([{menu:"Sobre",link:"SOBRE"},{menu:"Experi\xEAncia",link:"EXPERIENCIA"},{menu:"Projetos",link:"PROJETOS"},{menu:"Forma\xE7\xE3o",link:"FORMACAO"}]),a=w(!1),u=f(()=>n.value?"primary":"secondary"),l=f(()=>n.value?"/images/logo-branca.svg":"/images/logo.svg"),v=c=>{const o=document.getElementById(c);console.log(o),a.value=!a.value,ie(()=>{window.scrollTo({top:o.offsetTop-10,behavior:"smooth"})})};return(c,o)=>(le(),Ve(je,null,[U("div",ra,[U("img",{src:l.value,alt:"Caio Costa"},null,8,ua),U("div",sa,[$(J,{name:"fa-solid fa-sun",color:u.value},null,8,["color"]),$(Fe,{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=h=>n.value=h),onClick:o[1]||(o[1]=h=>s()),color:u.value},null,8,["modelValue","color"]),$(J,{name:"fa-solid fa-moon",color:u.value},null,8,["color"])]),U("div",ca,[$(J,{name:"fa-solid fa-bars",color:u.value,size:"xs",onClick:o[2]||(o[2]=h=>a.value=!a.value),round:"",dense:""},null,8,["color"])])]),U("div",da,[$(na,{behavior:"mobile",modelValue:a.value,"onUpdate:modelValue":o[5]||(o[5]=h=>a.value=h),width:220,breakpoint:1080,bordered:"",elevated:"",side:"right",class:Wt(Nt(i).dark.isActive?"bg-secondary":"bg-primary")},{default:D(()=>[$(oa,{class:"fit"},{default:D(()=>[$(Zt,{class:"lista-hamburger"},{default:D(()=>[(le(!0),Ve(je,null,Qt(t.value,h=>ve((le(),Le(Xe,{key:h,class:"item-hamburger",clickable:"",active:h.menu==="Outbox",onClick:y=>v(h.link)},{default:D(()=>[$(Ie,null,{default:D(()=>[Vt(Ft(h.menu),1)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[jt]])),128)),$(Xe,null,{default:D(()=>[$(Ie,null,{default:D(()=>[U("div",va,[$(J,{name:"fa-solid fa-sun",color:u.value},null,8,["color"]),$(Fe,{modelValue:n.value,"onUpdate:modelValue":o[3]||(o[3]=h=>n.value=h),onClick:o[4]||(o[4]=h=>s()),color:u.value,size:"lg"},null,8,["modelValue","color"]),$(J,{name:"fa-solid fa-moon",color:u.value},null,8,["color"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","class"])])],64))}};var ha=nt(fa,[["__scopeId","data-v-574ec0d3"]]);const ma={class:"header",style:{background:"rgba(0,0,0,0)"}},ba={__name:"MainLayout",setup(e){const i=w(!1);Z(()=>{window.addEventListener("scroll",n)}),at(()=>{window.removeEventListener("scroll",n)});const n=()=>{i.value=window.scrollY!==0},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(t,a)=>{const u=It("router-view");return le(),Le(Gt,{class:"container",view:"hHh lpr fff"},{default:D(()=>[U("header",ma,[$(ha)]),$(Ut,{class:"pagina"},{default:D(()=>[$(u)]),_:1}),i.value?(le(),Le(Xt,{key:0,class:"floating-button2",color:"info",position:"bottom-right",onClick:s,align:"right",size:"sm"},{default:D(()=>[$(J,{name:"arrow_upward"})]),_:1})):Kt("",!0)]),_:1})}}};var pa=nt(ba,[["__scopeId","data-v-2476a7d3"]]);export{pa as default};
