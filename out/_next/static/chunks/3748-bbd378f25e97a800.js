(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3748],{42308:function(e,s,n){"use strict";n.d(s,{Z:function(){return c}});var r=n(85893),a=n(10508),i=n.n(a);function c(e){var s=e.type,n=e.src,a=e.padding;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"btn ".concat(s),onClick:e.onClick,children:(0,r.jsx)("div",{className:i().pinkbtn,children:(0,r.jsxs)("div",{className:"small"===a?"btn-smallPadding btn ".concat(s):"btn ".concat(s),children:[(0,r.jsx)("img",{src:n,className:null!=n||void 0!=n?"img":"displayNone"}),(0,r.jsx)("p",{children:e.text})]})})})})}},53447:function(e,s,n){"use strict";n.d(s,{Z:function(){return l}});var r=n(85893),a=n(44411),i=n.n(a),c=n(41664),t=n.n(c);function l(){return(0,r.jsxs)("div",{className:i().footer,children:[(0,r.jsx)("div",{className:"footer-container footer-container-top",children:(0,r.jsx)("div",{className:"footer-wrapper footer-wrapper-top",children:(0,r.jsxs)("div",{className:"wrapper-wrapper",children:[(0,r.jsxs)("div",{className:"left",children:[(0,r.jsx)("img",{src:"/images/logo_noir.png"}),(0,r.jsx)("div",{className:"desc greyText",children:"Our community is building a comprehensive decentralized trading platform for the future of finance. Join us!"})]}),(0,r.jsx)("div",{className:"bar"}),(0,r.jsxs)("div",{className:"right",children:[(0,r.jsxs)("div",{className:"menus",children:[(0,r.jsx)("div",{className:"menu",children:"Services"}),(0,r.jsx)("div",{className:"sub-menu greyText",children:"Swap"}),(0,r.jsx)("div",{className:"sub-menu greyText",children:"Create Pool"})]}),(0,r.jsxs)("div",{className:"menus",children:[(0,r.jsx)("div",{className:"menu",children:"Help"}),(0,r.jsx)("div",{className:"sub-menu greyText",children:"Academy"}),(0,r.jsx)("div",{className:"sub-menu greyText",children:"About Us"})]}),(0,r.jsxs)("div",{className:"menus",children:[(0,r.jsx)("div",{className:"menu",children:"Terms"}),(0,r.jsx)("div",{className:"sub-menu greyText",children:"Terms of Use"})]})]})]})})}),(0,r.jsx)("div",{className:"footer-container footer-container-bottom",children:(0,r.jsxs)("div",{className:"footer-wrapper footer-wrapper-bottom",children:[(0,r.jsx)("p",{className:"copyright greyText",children:"Copyright \xa9 2022 Kodex. All rights reserved."}),(0,r.jsxs)("div",{className:"sns-wrapper",children:[(0,r.jsx)("div",{className:"sns",children:(0,r.jsx)(t(),{href:"/",children:(0,r.jsx)("img",{src:"/images/sns_git.svg"})})}),(0,r.jsx)("div",{className:"sns",children:(0,r.jsx)(t(),{href:"/",children:(0,r.jsx)("img",{src:"/images/sns_twitter.svg"})})}),(0,r.jsx)("div",{className:"sns",children:(0,r.jsx)(t(),{href:"/",children:(0,r.jsx)("img",{src:"/images/sns_instagram.svg"})})}),(0,r.jsx)("div",{className:"sns",children:(0,r.jsx)(t(),{href:"/",children:(0,r.jsx)("img",{src:"/images/sns_discord.svg"})})})]})]})})]})}},13778:function(e,s,n){"use strict";n.d(s,{Z:function(){return y}});var r=n(34051),a=n.n(r),i=n(85893),c=n(17362),t=n.n(c),l=n(42308),o=n(41664),d=n.n(o),m=n(10508),x=n.n(m);function u(e){return(0,i.jsx)("div",{className:x().thickbtn,onClick:e.onClick,children:(0,i.jsxs)("div",{className:"btn",children:[(0,i.jsx)("img",{src:e.src}),(0,i.jsx)("p",{children:e.text})]})})}var h=n(67294),v=n(89188),p=n(32813),g=n(11163),j=n(22874),f=n(34422),N=n(12287),b=n(15901),w=n(62210);function k(e,s,n,r,a,i,c){try{var t=e[i](c),l=t.value}catch(o){return void n(o)}t.done?s(l):Promise.resolve(l).then(r,a)}function y(){var e=(0,w.CG)((function(e){return e.wallet.address})),s=(0,g.useRouter)(),n=(0,h.useState)(!1),r=n[0],c=n[1],o=(0,h.useState)(!1),m=o[0],x=o[1],y=(0,h.useState)(!1),_=y[0],C=y[1],S=function(){var e,s=(e=a().mark((function e(){var s,n,r,i,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new v.Pm({name:"Kodex"}),n=new p.BeaconWallet({name:"Kodex"}),e.next=4,n.client.getActiveAccount();case 4:if(!(r=e.sent)){e.next=12;break}return console.log("Already connected:",r),e.next=9,new Promise((function(e){return setTimeout(e,1e3)}));case 9:return e.next=11,n.clearActiveAccount();case 11:return e.abrupt("return");case 12:return e.prev=12,console.log("Requesting permissions..."),e.next=16,s.requestPermissions();case 16:return i=e.sent,console.log("Got permissions:",i.address),e.next=20,n.client.getActiveAccount();case 20:c=e.sent,console.log(c),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(12),console.log("Got error:",e.t0);case 27:case"end":return e.stop()}}),e,null,[[12,24]])})),function(){var s=this,n=arguments;return new Promise((function(r,a){var i=e.apply(s,n);function c(e){k(i,r,a,c,t,"next",e)}function t(e){k(i,r,a,c,t,"throw",e)}c(void 0)}))});return function(){return s.apply(this,arguments)}}();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("section",{className:t().navbar,children:[(0,i.jsxs)("div",{className:"desktop-navbar-wrapper navbar-wrapper",children:[(0,i.jsxs)("div",{className:"navbar-contents left",children:[(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)(d(),{href:"/",children:(0,i.jsx)("img",{src:"/images/logo_blanc.png"})})}),(0,i.jsxs)("div",{className:"left-wrapper",children:[(0,i.jsx)("div",{className:"btn-home",children:(0,i.jsx)(u,{text:"Home",src:"/images/home.png",onClick:function(){console.log("handleHome: "),s.push("/home")}})}),(0,i.jsx)("div",{className:"btn-swap",children:(0,i.jsx)(u,{text:"Swap",src:"/images/swap.png",onClick:function(){console.log("handleSwap: "),s.push("/swap")}})})]})]}),(0,i.jsxs)("div",{className:"navbar-contents right",children:[(0,i.jsx)("img",{className:"settings",src:"/images/settings.png",alt:"settings"}),(0,i.jsx)("div",{className:"balance",children:(0,i.jsx)(d(),{href:"/",target:"_blank",className:"balance-link",children:"$ 0.33"})}),(0,i.jsxs)("div",{className:"right-wrapper",children:[(0,i.jsx)("div",{className:"btn-pool",children:(0,i.jsx)(l.Z,{text:"Create Pool",type:"withoutBorder",onClick:function(){console.log("createPool: "),s.push("/pools")}})}),(0,i.jsx)("div",{className:"btn-wallet",children:(0,i.jsx)(j.g,{setNodeSelector:C,setShowFiat:x,setShowToast:c})})]})]})]}),(0,i.jsxs)("div",{className:"mobile-navbar-wrapper navbar-wrapper",children:[(0,i.jsxs)("div",{className:"mobile-wrapper",children:[(0,i.jsx)("div",{className:"burger",children:(0,i.jsx)("img",{src:"/images/burger.png"})}),(0,i.jsx)("div",{className:"logo",children:(0,i.jsx)("img",{src:"/images/logo_noir.png"})})]}),(0,i.jsx)("div",{className:"btn-wallet",children:(0,i.jsx)(l.Z,{text:"Connect Wallet",type:"withoutBorder",style:{height:"20px"},onClick:S})}),(0,i.jsx)("div",{className:"mobile-navbar-container"})]}),r&&(0,i.jsx)(b.Z,{address:e})]}),(0,i.jsx)(f.Z,{show:_,setShow:C}),m&&(0,i.jsx)(N.Z,{hide:x})]})}},44411:function(e){e.exports={footer:"footer_footer__u526u"}},17362:function(e){e.exports={navbar:"navbar_navbar__ZG6u0"}}}]);