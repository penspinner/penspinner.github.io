(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(463),l=n(452),i=(n(42),n(97)),c=n.n(i),u=function(e){var t=e.children,n=e.heightOffset,a=e.widthOffset,o=c()(e,["children","heightOffset","widthOffset"]),l=r.a.createRef(),i=r.a.useState(0),u=i[0],d=i[1],s=r.a.useState(0),m=s[0],p=s[1];return r.a.useEffect(function(){if(l.current){var e=l.current.getBoundingClientRect(),t=e.height,n=e.width;d(t),p(n)}},[m]),r.a.createElement("div",Object.assign({},o,{ref:l,style:{position:"absolute",top:"calc(50% - "+u/2+"px - "+n+"px)",left:"calc(50% - "+m/2+"px - "+a+"px)"}}),t)};u.defaultProps={heightOffset:0,widthOffset:0};var d=u,s=n(295),m=function(e){return function(t){return r.a.createElement(e,Object.assign({rel:"noopener noreferrer",target:"_blank"},t))}}("a"),p=function(){return r.a.createElement(o.a,{columns:"equal"},r.a.createElement(o.a.Column,null,r.a.createElement(m,{href:"https://github.com/penspinner",title:"GitHub"},r.a.createElement(s.a,{name:"github square",size:"big"}))),r.a.createElement(o.a.Column,null,r.a.createElement(m,{href:"https://linkedin.com/in/stliao",title:"LinkedIn"},r.a.createElement(s.a,{name:"linkedin square",size:"big"}))),r.a.createElement(o.a.Column,null,r.a.createElement(m,{href:"https://youtube.com/32309",title:"YouTube"},r.a.createElement(s.a,{name:"youtube square",size:"big"}))))},g=n(237),f=n(172),h=f.b.span.withConfig({displayName:"ThingsAboutMeBlackboard__Chalk",componentId:"sc-1kdovnn-0"})(["background-color:var(--beige-green);border-radius:2px;bottom:0px;position:absolute;"]),b=f.b.div.withConfig({displayName:"ThingsAboutMeBlackboard__StickyNote",componentId:"sc-1kdovnn-1"})(["background-color:var(--dark-green);max-width:200px;min-height:100px;padding:1rem;"]),E=f.b.div.withConfig({displayName:"ThingsAboutMeBlackboard__Blackboard",componentId:"sc-1kdovnn-2"})(["background:linear-gradient(to right,black,var(--chalk-gray) 50%,black) !important;border:10px solid var(--silver);color:var(--beige-green);height:100%;padding:5%;position:relative;width:100%;"]),v=function(){return r.a.createElement(E,null,r.a.createElement("h1",null,"Things about me"),r.a.createElement(h,{style:{left:"75%",height:"5px",width:"25px"}}),r.a.createElement(h,{style:{left:"50%",height:"8px",width:"40px"}}),r.a.createElement(h,{style:{left:"10%",height:"12px",width:"35px",borderRadius:"6px"}}),r.a.createElement(h,{style:{left:"25%",height:"6px",width:"30px"}}),r.a.createElement(o.a,{columns:"equal"},r.a.createElement(o.a.Column,null,r.a.createElement(b,null,"I love using React.")),r.a.createElement(o.a.Column,null,r.a.createElement(b,null,r.a.createElement("p",null,"My interest in software started since I was a little kid playing video games and surfing the web. The interest developed during my college years. I have made websites, web apps, games, and will continue to make more and explore newer technologies."))),r.a.createElement(o.a.Column,null,r.a.createElement(b,null,"I am a Fullstack Developer at Percolate Inc."))))},k=n(450),w=n.n(k),x=n(451),y=n.n(x);t.default=function(){return r.a.createElement(g.a,null,r.a.createElement(o.a,null,r.a.createElement(o.a.Row,{textAlign:"center"},r.a.createElement(o.a.Column,null,r.a.createElement(l.a,{fluid:!0,src:w.a}),r.a.createElement(d,{heightOffset:100},r.a.createElement("h1",null,"Steven Liao"),r.a.createElement(p,null)))),r.a.createElement(o.a.Row,{columns:"equal"},r.a.createElement(o.a.Column,null,r.a.createElement(l.a,{fluid:!0,src:y.a})),r.a.createElement(o.a.Column,null,r.a.createElement(v,null)))))}},190:function(e,t,n){var a;e.exports=(a=n(216))&&a.default||a},215:function(e){e.exports={data:{site:{siteMetadata:{title:"Steven Liao"}}}}},216:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),o=n(5),l=n.n(o),i=n(65),c=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(i.a,Object.assign({location:t,pageResources:n},n.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},237:function(e,t,n){"use strict";var a=n(215),r=n(0),o=n.n(r),l=n(242),i=n.n(l),c=n(172),u=n(5),d=n.n(u),s=n(41),m=n.n(s),p=(n(190),o.a.createContext({}));function g(e){var t=e.staticQueryData,n=e.data,a=e.query,r=e.render,l=n?n.data:t[a]&&t[a].data;return o.a.createElement(o.a.Fragment,null,l&&r(l),!l&&o.a.createElement("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,a=e.render,r=e.children;return o.a.createElement(p.Consumer,null,function(e){return o.a.createElement(g,{data:t,query:n,render:a||r,staticQueryData:e})})};f.propTypes={data:d.a.object,query:d.a.string.isRequired,render:d.a.func,children:d.a.func};var h=n(462),b=n(295),E=n(463),v=(n(42),n(97)),k=n.n(v),w=function(e){var t=e.initialVolume,n=k()(e,["initialVolume"]),a=o.a.useRef(null);return o.a.useEffect(function(){a.current&&(a.current.volume=t)},[]),o.a.createElement("audio",Object.assign({},n,{ref:a}))};w.defaultProps={initialVolume:.15};var x=w,y=c.b.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"sc-9hcv82-0"})(["background-color:var(--dark-green);"]),q=Object(c.b)(h.a.Input).withConfig({displayName:"Footer__TransparentFormInput",componentId:"sc-9hcv82-1"})(["input{background:transparent !important;border:none !important;color:white !important;}"]),C=Object(c.c)(["50%{transform:scale(1.2);}"]),z=Object(c.b)(b.a).withConfig({displayName:"Footer__GrowBiggerIcon",componentId:"sc-9hcv82-2"})(["animation:"," 1s infinite;"],C),O=Object(c.c)(["0%{transform:translateY(-5px);opacity:0.1;}50%{opacity:1;}100%{transform:translateY(10px);opacity:0.1;}"]),I=Object(c.b)(b.a).withConfig({displayName:"Footer__TeardropIcon",componentId:"sc-9hcv82-3"})(["animation:"," 2s infinite;"],O),_=Object(c.c)(["0%{transform:rotate(-10deg);}50%{transform:rotate(20deg);}100%{transform:rotate(-20deg);}"]),R=Object(c.b)(b.a).withConfig({displayName:"Footer__ShakeIcon",componentId:"sc-9hcv82-4"})(["animation:"," 1s infinite;"],_),j=function(){var e=o.a.useState(!1),t=e[0],n=e[1],a=o.a.useState(""),r=a[0],l=a[1];return o.a.useEffect(function(){var e=function(e){"Escape"===e.key&&(n(!1),l(""))};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}},[]),o.a.createElement(y,null,o.a.createElement(E.a,{textAlign:"center"},t?o.a.createElement(E.a.Row,null,o.a.createElement(x,{controls:!0,preload:"metadata"},o.a.createElement("source",{src:"https://docs.google.com/uc?export=download&id=0B-eyIPPQbnF-WWcwUlIzT0JBWE0",type:"audio/mpeg"}),"Your browser does not support the audio tag.")):o.a.createElement(h.a,{onSubmit:function(e){e.preventDefault(),"op"===r.toLowerCase()&&n(!0)}},o.a.createElement(q,{onChange:function(e,t){var n=t.value;l(n)},value:r})),o.a.createElement(E.a.Row,null,o.a.createElement("span",null,"© Copyright Steven Liao. 2016-present. All rights reserved. Made with ")," ",o.a.createElement(z,{color:"pink",fitted:!0,name:"heart"})," ",o.a.createElement(I,{color:"blue",fitted:!0,name:"tint"})," ",o.a.createElement(R,{color:"teal",fitted:!0,name:"food"}),"  .")))},F=n(292),S=n.n(F);function L(){var e=S()(['\n\t:root {\n\t\t--head-font: \'Patua One\', sans-serif;\n\t\t--body-font: \'Open Sans\', sans-serif;\n\n\t\t--large-font-size  : 18px;\n\t\t--medium-font-size : 16px;\n\t\t--small-font-size  : 14px;\n\n\t\t--beige: #e3c691;\n\t\t--beige-green: #dee7c6;\n\t\t--chalk-gray: #515156;\n\t\t--dark-green: #053b00;\n\t\t--dark-green2: #01260c;\n\t\t--light-blue: #4dd0e1;\n\t\t--light-green: #28dc18;\n\t\t--green: #19b76e;\n\t\t--silver: #c0c0c0;\n\t}\n\n\tbody {\n\t\tcolor: var(--beige-green) !important;\n\t\tfont-size: var(--medium-font-size);\n\t\tbackground-color: var(--dark-green) !important;\n\t}\n\n\t.link-button {\n\t\tborder: 1px solid var(--dark-green2);\n\t\tborder-radius: 4px;\n\t\tfont-size: var(--large-font-size);\n\t\tpadding: 10px;\n\t\ttext-decoration: none;\n\n\t\t&:hover\t{\n\t\t\ttext-decoration: none;\n\t\t\tbackground-color: var(--dark-green2);\n\t\t\tcolor: var(--light-green);;\n\t\t\t-webkit-transition: background-color 0.5s ease-out, color 0.5s ease-out;\n\t\t\ttransition: background-color 0.5s ease-out, color 0.5s ease-out;\n\t\t}\n\t}\n\n\t// .contact, .notes {\n\t// \tform {\n\t// \t\tmargin-bottom: 0;\n\t// \t\tpadding: 20px 0;\n\t// \t\twidth: 75%;\n\t// \t}\n\n\t// \tfieldset {\n\t// \t\tpadding: 20px;\n\t// \t\tborder: 2px groove var(--beige-green);\n\t// \t\tfloat: none;\n\t// \t}\n\n\t// \tinput, textarea {\n\t// \t\tfont-size: var(--medium-font-size);\n\t// \t}\n\n\t// \tlegend {\n\t// \t\tcolor: var(--beige-green);\n\t// \t\twidth: initial;\n\t// \t\tborder-bottom: 0;\n\t// \t}\n\n\t// \tinput[type="text"], input[type="email"], input[type="tel"], input[type="file"], textarea {\n\t// \t\tbackground-color: var(--beige-green);\n\t// \t\tborder: 1px solid #e5e5e5;\n\t// \t\tpadding: 8px 10px;\n\t// \t\tbox-sizing: border-box;\n\t// \t\twidth: 100%;\n\t// \t\tmargin: 0 0 25px;\n\t// \t\tcolor: black;\n\t// \t}\n\n\t// \ttextarea {\n\t// \t\tfont: 100% Verdana, Helvetica, sans-serif;\n\t// \t\tmin-height: 100px;\n\t// \t\tresize: vertical;\n\t// \t\twhite-space: pre-wrap;\n\t// \t}\n\n\t// \tinput[type="submit"] {\n\t// \t\tfloat: right;\n\t// \t\tbackground-color: var(--light-green);;\n\t// \t\tpadding: 10px 20px;\n\t// \t\tcolor: white;\n\t// \t\tborder: none;\n\t// \t\tborder-radius: 4px;\n\t// \t\tcursor: pointer;\n\t// \t}\n\t// }\n\n\t// .projects {\n\t// \tcolor: var(--dark-green2);\n\t// \t.background-blueGradient {\n\t//     background: linear-gradient(to bottom right, #95DAE7, #89B4CA, #437C9E);\n\t//   }\n\t// \t.background-grayGradient {\n\t//     background: linear-gradient(to bottom, #F1F1F1 , #999999, #F1F1F1);\n\t//   }\n\t// \t.background-lightBlue {\n\t//     background-color: var(--light-blue);\n\t//   }\n\t// \t.background-green {\n\t//     background-color: var(--green);\n\t//   }\n\t// }\n']);return L=function(){return e},e}var B=Object(c.a)(L()),N=function(e){return o.a.createElement("svg",Object.assign({version:"1.1",viewBox:"0.0 0.0 300.0 300.0",fill:"none",stroke:"none",strokeLinecap:"square",strokeMiterlimit:"10"},e),o.a.createElement("clipPath",{id:"p.0"},o.a.createElement("path",{d:"m0 0l300.0 0l0 300.0l-300.0 0l0 -300.0z",clipRule:"nonzero"})),o.a.createElement("g",{clipPath:"url(#p.0)"},o.a.createElement("path",{fill:"#000000",fillOpacity:"0.0",d:"m0 0l300.0 0l0 300.0l-300.0 0z",fillRule:"nonzero"}),o.a.createElement("path",{fill:"#000000",d:"m2.3622048 150.0l0 0c0 -81.5381 66.09969 -147.6378 147.6378 -147.6378l0 0c39.155975 0 76.70822 15.554652 104.39569 43.242107c27.687439 27.687458 43.242096 65.239716 43.242096 104.39569l0 0c0 81.5381 -66.099686 147.63779 -147.63779 147.63779l0 0c-81.5381 0 -147.6378 -66.099686 -147.6378 -147.63779z",fillRule:"nonzero"}),o.a.createElement("path",{stroke:"#000000",strokeWidth:"1.0",strokeLinejoin:"round",strokeLinecap:"butt",d:"m2.3622048 150.0l0 0c0 -81.5381 66.09969 -147.6378 147.6378 -147.6378l0 0c39.155975 0 76.70822 15.554652 104.39569 43.242107c27.687439 27.687458 43.242096 65.239716 43.242096 104.39569l0 0c0 81.5381 -66.099686 147.63779 -147.63779 147.63779l0 0c-81.5381 0 -147.6378 -66.099686 -147.6378 -147.63779z",fillRule:"nonzero"}),o.a.createElement("path",{fill:"#000000",fillOpacity:"0.0",d:"m2.3622048 2.3622048l295.27557 0l0 295.27557l-295.27557 0z",fillRule:"nonzero"}),o.a.createElement("path",{fill:"#28dc18",d:"m41.203125 170.52594l17.15625 -1.5q1.21875 10.3125 5.671875 16.921875q4.453125 6.609375 13.828125 10.6875q9.375 4.078125 21.09375 4.078125q10.40625 0 18.375 -3.09375q7.96875 -3.09375 11.859375 -8.484375q3.8906097 -5.390625 3.8906097 -11.765625q0 -6.46875 -3.7499847 -11.296875q-3.75 -4.828125 -12.375 -8.109375q-5.53125 -2.15625 -24.46875 -6.703125q-18.9375 -4.546875 -26.53125 -8.578125q-9.84375 -5.15625 -14.671875 -12.796875q-4.828125 -7.6406174 -4.828125 -17.109367q0 -10.40625 5.90625 -19.453125q5.90625 -9.046875 17.25 -13.734375q11.34375 -4.6875 25.21875 -4.6875q15.28125 0 26.953125 4.921875q11.67186 4.921875 17.95311 14.484375q6.28125 9.5625 6.75 21.65625l-17.437485 1.3125q-1.40625 -13.03125 -9.515625 -19.6875q-8.109375 -6.65625 -23.953125 -6.65625q-16.5 0 -24.046875 6.046875q-7.546875 6.046875 -7.546875 14.578125q0 7.40625 5.34375 12.1875q5.25 4.7812424 27.421875 9.796867q22.171875 5.015625 30.421875 8.765625q11.999985 5.53125 17.718735 14.015625q5.71875 8.484375 5.71875 19.546875q0 10.96875 -6.28125 20.671875q-6.28125 9.703125 -18.04686 15.09375q-11.765625 5.390625 -26.484375 5.390625q-18.65625 0 -31.265625 -5.4375q-12.609375 -5.4375 -19.78125 -16.359375q-7.171875 -10.921875 -7.546875 -24.703125zm133.49998 44.15625l0 -137.4375l18.1875 0l0 121.21874l67.687515 0l0 16.21875l-85.875015 0z",fillRule:"nonzero"})))},T=c.b.header.withConfig({displayName:"Header__StyledHeader",componentId:"sc-11kps4v-0"})(["background-color:var(--dark-green);padding:1rem;"]),A=function(){return o.a.createElement(T,null,o.a.createElement(E.a,null,o.a.createElement(E.a.Row,{verticalAlign:"middle"},o.a.createElement(E.a.Column,{width:"12"},o.a.createElement(m.a,{to:"/"},o.a.createElement(N,{width:"75px"}))))))},M=(n(293),c.b.main.withConfig({displayName:"Layout__Main",componentId:"hmho4f-0"})(["margin-top:1rem;margin-bottom:1rem;margin-left:1rem;margin-right:1rem;padding-top:0;"]));t.a=function(e){var t=e.children;return o.a.createElement(f,{query:"3892401927",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Steven Liao website"},{name:"keywords",content:"website, react, portfolio"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{rel:"icon",href:"src/images/rubiks-cube-256.png"})),o.a.createElement(A,null),o.a.createElement(M,null,t),o.a.createElement(j,null),o.a.createElement(B,null))},data:a})}},450:function(e,t,n){e.exports=n.p+"static/desk-7a31fdf0c0c3f06c53671232946ad115.jpg"},451:function(e,t,n){e.exports=n.p+"static/me_comp-e72d4357c3d0c979596d053c25a33e6a.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-f81ac6144ce9b80ed598.js.map