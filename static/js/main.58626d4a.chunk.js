(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports={a:[{name:"Mana Asthavon",title:"Queen of Demons",race:"Demon",organization:"Shadowfall",primaryColor:"lime",secondaryColor:"green",textBackgroundColor:"hsl(125, 82%, 28%)",textDark:!0,traits:"none",power:"Madness",picture:"Img/Mana2.gif",headshot:"Img/Mana.jpg",player:"The Frost"},{name:"Adamant",title:"???",race:"Race Unknown",organization:"Unaffiliated",primaryColor:"#b30000",secondaryColor:"#ff6666",textBackgroundColor:"#ff99cc",textDark:!0,traits:"none",power:"Mineralogy",picture:"Img/Adamant2.jpg",headshot:"Img/Adamant.jpg",player:"Watamote"},{name:"Sofia",title:"The Melody",race:"Quincy",organization:"Vandenreich",primaryColor:"#bc9e08",secondaryColor:"#ecc60ecc",textBackgroundColor:"#8f673a",textDark:!1,traits:"none",power:"Music",picture:"Img/Sofia2.gif",headshot:"Img/Sofia.PNG",player:"The Owl"},{name:"Calypso",title:"Crybaby",race:"Danava of Dreams/Nightmares",organization:"Unaffiliated",primaryColor:"#fb9327de",secondaryColor:"#ea0f0f",textBackgroundColor:"#ea0f0f",textDark:!1,traits:"none",power:"Dreams",picture:"Img/Calypso2.PNG",headshot:"Img/Calypso.jpg",player:"Lillian"},{name:"Henrex Astillon",title:"Stealth Force Captain",race:"Shinigami/Demon Hybrid",organization:"Gotei 13, Vastime, Guild of Heroes",primaryColor:"#5A178C",secondaryColor:"#316AD5",textBackgroundColor:"#6131d5",textDark:!1,traits:"none",power:"Ninjutsu, Electricity",picture:"Img/Henrex2.png",headshot:"Img/Henrex.png",player:"Henrex"},{name:"Yasuko",title:"Spirit Tamer",race:"Spiritual Human",organization:"Hebi Laboratories",primaryColor:"#8B008B",secondaryColor:"#4B0082",textBackgroundColor:"#8B008B",textDark:!1,traits:"none",power:"Spiritualism",picture:"Img/Yasuko2.jpg",headshot:"Img/Yasuko.PNG",player:"MWD"},{name:"Suzu Hebi",title:"Trecera Espada",race:"Transcended Arrancar",organization:"Shadow Fall",primaryColor:"#9400D3",secondaryColor:"#9400D3",textBackgroundColor:"#9400D3",textDark:!1,traits:"none",power:"Biomancy",picture:"Img/Suzu2.jpg",headshot:"Img/Suzu.PNG",player:"Zetsurin"}]}},24:function(e,t,a){e.exports=a(59)},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var l=a(3),s=a(4),c=a(6),m=a(5),u=a(7),p=(a(31),a(32),a(60)),d=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(!this.props.item.textDark){var e=document.getElementsByClassName("name-focus"),t=!0,a=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.style.color="white"}}catch(o){a=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}}}},{key:"render",value:function(){var e=this.props.item.name;return window.setTimeout(function(){var t=document.getElementById("name-box-"+e),a=document.getElementById("name-"+e);t&&a&&(a.classList.remove("invisible"),t.classList.remove("invisible"))},500),r.a.createElement("span",{className:"headshot"},r.a.createElement("span",{id:"name-box-"+this.props.item.name,className:"name-box invisible",style:{"background-color":this.props.item.textBackgroundColor}},r.a.createElement("span",{id:"name-"+this.props.item.name,className:"name-focus invisible"},this.props.item.name,r.a.createElement("br",null),this.props.item.title,r.a.createElement("br",null),this.props.item.race,r.a.createElement("br",null),this.props.item.organization,r.a.createElement("br",null),this.props.item.power,r.a.createElement("br",null))),r.a.createElement("img",{className:"image-box",id:"imgFull",src:this.props.item.headshot}))}}]),t}(n.Component)),h=function(e){e.match;var t=e.item;return r.a.createElement(p.a,{to:"/".concat(t.name)},r.a.createElement(d,{item:t}))},f=(a(38),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).checkFiltered=function(e,t,n){var r=[];if(n){var i=!0,o=!1,l=void 0;try{for(var s,c=t[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var m=s.value;if(m[1]){var u=!0,p=!1,d=void 0;try{for(var h,f=e[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var y=h.value;for(var v in y)v==m[0]&&y[v].includes(m[1])&&(r.includes(y)||r.push(y),a.state.haveSearched||a.setState({haveSearched:!0}))}}catch(w){p=!0,d=w}finally{try{u||null==f.return||f.return()}finally{if(p)throw d}}}}}catch(w){o=!0,l=w}finally{try{i||null==c.return||c.return()}finally{if(o)throw l}}}else{var b=!0,E=!1,g=void 0;try{for(var x,N=e[Symbol.iterator]();!(b=(x=N.next()).done);b=!0){y=x.value;r.push(y),a.setState({haveSearched:!1})}}catch(w){E=!0,g=w}finally{try{b||null==N.return||N.return()}finally{if(E)throw g}}}a.setState({itemsToDisplay:r})},a.performFilter=function(e){},a.handleFilter=function(e){e.preventDefault();var t=[],n=!1,r=!0,i=!1,o=void 0;try{for(var l,s=e.currentTarget[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var c=l.value;"text"==c.type&&(t.push([c.name,c.value]),c.value&&(n=!0))}}catch(m){i=!0,o=m}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return a.checkFiltered(a.props.items,t,n),!1},a.clearSearch=function(e){var t=!0,a=!1,n=void 0;try{for(var r,i=document.getElementsByClassName("filter-input")[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.value=""}}catch(o){a=!0,n=o}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}},a.state={itemsToDisplay:[],haveSearched:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.checkFiltered(this.props.items)}},{key:"inWords",value:function(e){var t=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],a=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if((e=e.toString()).length>9)return"overflow";var n=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(n){var r="";return r+=0!=n[1]?(t[Number(n[1])]||a[n[1][0]]+" "+t[n[1][1]])+"crore ":"",r+=0!=n[2]?(t[Number(n[2])]||a[n[2][0]]+" "+t[n[2][1]])+"lakh ":"",r+=0!=n[3]?(t[Number(n[3])]||a[n[3][0]]+" "+t[n[3][1]])+"thousand ":"",r+=0!=n[4]?(t[Number(n[4])]||a[n[4][0]]+" "+t[n[4][1]])+"hundred ":"",r+=0!=n[5]?(""!=r?"and ":"")+(t[Number(n[5])]||a[n[5][0]]+" "+t[n[5][1]])+"only ":""}}},{key:"openNav",value:function(){"0px"!=document.getElementById("mySidenav").style.width&&document.getElementById("mySidenav").style.width?document.getElementById("mySidenav").style.width="0px":document.getElementById("mySidenav").style.width="50vw"}},{key:"closeNav",value:function(){document.getElementById("mySidenav").style.width="0px"}},{key:"render",value:function(){var e=this,t=0,a=[];if(a.push(r.a.createElement("div",{id:"mobile-menu",className:"mobile-menu"},r.a.createElement("div",{id:"mySidenav",class:"sidenav"},r.a.createElement("a",{href:"javascript:void(0)",class:"closebtn",onClick:function(){return e.closeNav()}},"\xd7"),r.a.createElement("span",{class:"filter-header",id:"search"},"Filter"),r.a.createElement("form",{onSubmit:function(t){return e.handleFilter(t)},autoComplete:"off",id:"filter-form"},r.a.createElement("span",{class:"filter-text"},"Name"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"name"}),r.a.createElement("br",null),r.a.createElement("span",{class:"filter-text"},"Race"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"race"}),r.a.createElement("span",{class:"filter-text"},"Organization"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"organization"}),r.a.createElement("br",null),r.a.createElement("span",{class:"filter-text"},"Player"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"player"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"filter-button",type:"submit",value:"Submit"}),this.state.haveSearched?r.a.createElement("input",{className:"filter-button",type:"submit",value:"Cancel Search",onClick:function(t){return e.clearSearch(t)}}):"")),r.a.createElement("span",{style:{fontSize:"30px",cursor:"pointer"},onClick:function(){return e.openNav()}},"\u2630"))),this.state.itemsToDisplay.length>0){var n=!0,i=!1,o=void 0;try{for(var l,s=this.state.itemsToDisplay[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value;t+=1,a.push(r.a.createElement("span",{className:"headshot-box"},r.a.createElement(h,{match:this.props.match,item:c,key:this.inWords(t)})))}}catch(m){i=!0,o=m}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}}return a}}]),t}(n.Component)),y=(a(40),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){document.getElementById(this.props.item.name).style.backgroundColor=this.props.item.primaryColor,document.getElementById("main-color").style.backgroundColor=this.props.item.secondaryColor,document.getElementById("inner-info-"+this.props.item.name).style.backgroundColor=this.props.item.textBackgroundColor;var e=document.getElementsByClassName("basic-button"),t=!0,a=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.style.backgroundColor=this.props.item.secondaryColor}}catch(E){a=!0,n=E}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}if(!this.props.item.textDark){var o=document.getElementsByClassName("info-field"),l=!0,s=!1,c=void 0;try{for(var m,u=o[Symbol.iterator]();!(l=(m=u.next()).done);l=!0){m.value.style.color="white"}}catch(E){s=!0,c=E}finally{try{l||null==u.return||u.return()}finally{if(s)throw c}}}if(!this.props.item.textDark){var p=document.getElementsByClassName("basic-button"),d=!0,h=!1,f=void 0;try{for(var y,v=p[Symbol.iterator]();!(d=(y=v.next()).done);d=!0){y.value.style.color="white"}}catch(E){h=!0,f=E}finally{try{d||null==v.return||v.return()}finally{if(h)throw f}}}var b=document.createElement("img");(b.src=this.props.item.picture,console.log(b.height),console.log(b.width),console.log(b),b.width>b.height)&&document.getElementById("img-"+this.props.item.name).classList.replace("relevant-image-vertical","relevant-image-horizontal");if(this.props.linkLeft)document.getElementById("left-move-"+this.props.item.name);if(this.props.linkRight)document.getElementById("right-move-"+this.props.item.name)}},{key:"componentDidUpdate",value:function(){document.getElementById("main-color").style.backgroundColor="#61dafb";var e=document.getElementsByClassName("basic-button"),t=!0,a=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){r.value.style.backgroundColor="#61dafb"}}catch(p){a=!0,n=p}finally{try{t||null==i.return||i.return()}finally{if(a)throw n}}if(!this.props.item.textDark){var o=document.getElementsByClassName("basic-button"),l=!0,s=!1,c=void 0;try{for(var m,u=o[Symbol.iterator]();!(l=(m=u.next()).done);l=!0){m.value.style.color="black"}}catch(p){s=!0,c=p}finally{try{l||null==u.return||u.return()}finally{if(s)throw c}}}}},{key:"render",value:function(){return r.a.createElement("div",{id:"full-page"+this.props.item.name,className:"full-results-page"},r.a.createElement("span",{className:"left-move",id:"left-move-"+this.props.item.name}),r.a.createElement("span",{className:"right-move",id:"right-move-"+this.props.item.name}),r.a.createElement("span",{className:"result-page",id:this.props.item.name},r.a.createElement("div",{className:"inner-information"},r.a.createElement("center",null,r.a.createElement("img",{src:this.props.item.picture,id:"img-"+this.props.item.name,className:"relevant-image-vertical"})),r.a.createElement("br",null),r.a.createElement("div",{className:"text-field",id:"inner-info-"+this.props.item.name},r.a.createElement("div",{className:"info-field"},r.a.createElement("br",null),"Name: ",this.props.item.name?this.props.item.name:"ERROR NO NAME GIVEN!"),r.a.createElement("div",{className:"info-field"},"Title"+(this.props.item.title.includes(" ")?"s":""),": ",this.props.item.title?this.props.item.title:"N/A"),r.a.createElement("div",{className:"info-field"},"Race: ",this.props.item.race?this.props.item.race:"N/A"),r.a.createElement("div",{className:"info-field"},"Organization"+(this.props.item.organization.includes(" ")?"s":""),": ",this.props.item.organization?this.props.item.organization:"N/A"),r.a.createElement("div",{className:"info-field"},"Overall Power Concept"+(this.props.item.power.includes(" ")?"s":""),": ",this.props.item.power?this.props.item.power:"N/A"),r.a.createElement("div",{className:"info-field"},"Passionate about: ",this.props.item.passion?this.props.item.passion:"N/A"),r.a.createElement("div",{className:"info-field"},r.a.createElement("a",{href:this.props.item.application},"App Link")),r.a.createElement("br",null),r.a.createElement("div",{className:"info-field"},"Player: ",this.props.item.player),r.a.createElement("br",null)))))}}]),t}(n.Component)),v=a(12),b=(a(55),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componetdidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("span",{className:"overview-page-outer"},r.a.createElement("span",{className:"overview-page-inner"}))}}]),t}(n.Component)),E=(a(57),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleExample=function(e){e.preventDefault();var t={},a=!0,n=!1,i=void 0;try{for(var l,s=e.currentTarget[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var c=l.value;"text"==c.type&&(c.value?t[c.name.toLowerCase().replace(" ","")]=c.value:t[c.name.toLowerCase().replace(" ","")]="N/A")}}catch(m){n=!0,i=m}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return o.a.render(r.a.createElement(y,{item:t}),document.getElementById("example")),!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this,t=["Name","Title","Race","Organization","Primary Color","Secondary Color","Text Background Color","Text Dark","Traits","Power","Picture","Headshot","Player"],a=[],n=0;n<t.length;n++){var i=t[n];a.push(r.a.createElement("div",{className:"example-section"},r.a.createElement("span",{className:"example-header"},i,": "),r.a.createElement("input",{type:"text",className:"example-input",name:i})))}return r.a.createElement("div",null,r.a.createElement("span",{className:"designer-page-outer"},r.a.createElement("span",{className:"designer-page-inner"},r.a.createElement("form",{onSubmit:function(t){return e.handleExample(t)}},a,r.a.createElement("input",{className:"basic-button example-button",type:"submit",value:"Submit"})))),r.a.createElement("div",{id:"example"}))}}]),t}(n.Component)),g=a(61),x=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;function t(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function a(e){return Object(v.b)(e,{stiffness:330,damping:22,zIndex:100})}var n={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:a(0),scale:a(.8)},atActive:{opacity:a(1),scale:a(1)}},i=[],o=0,l=!0,s=!1,c=void 0;try{for(var m,u=function(){var e=m.value;o+=1,i.push(r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",key:o,path:"/".concat(e.name),component:function(){return r.a.createElement(y,{item:e})}}))},d=this.props.itemList[Symbol.iterator]();!(l=(m=d.next()).done);l=!0)u()}catch(h){s=!0,c=h}finally{try{l||null==d.return||d.return()}finally{if(s)throw c}}return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null,r.a.createElement("div",{className:"App",id:"main-color"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p.a,{to:"/",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Overview")),r.a.createElement(p.a,{to:"/roster",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Roster")),r.a.createElement(p.a,{to:"/designer",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Designer"))),r.a.createElement("div",{className:"App-body"},r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",exact:!0,path:"/",component:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}),r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:"/roster",component:function(t){var a=t.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Roster"),r.a.createElement(f,{match:a,items:e.props.itemList}))}}),r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:"/designer",component:function(){return r.a.createElement("div",null,r.a.createElement(E,null))}}),i))))}}]),t}(n.Component),N=a(23).a,w=[],k=0;k<N.length;k++){var C=N[k];C.headshot=C.headshot,w.push(C)}for(var S=[],B=[],j=0;j<w.length;j++)S.includes(w[j].player)||B.push(w[j]);o.a.render(r.a.createElement(x,{itemList:B}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.58626d4a.chunk.js.map