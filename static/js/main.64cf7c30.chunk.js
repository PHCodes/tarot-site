(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e){e.exports={a:[{name:"Mana Asthavon",title:"Queen of Demons",race:"Demon",organization:"Shadowfall",primarycolor:"lime",secondarycolor:"green",textbackgroundcolor:"hsl(125, 82%, 28%)",textdark:!0,traits:"none",power:"Madness",picture:"Img/Mana2.gif",headshot:"Img/Mana.jpg",player:"The Frost"},{name:"Adamant",title:"???",race:"Race Unknown",organization:"Unaffiliated",primarycolor:"#b30000",secondarycolor:"#ff6666",textbackgroundcolor:"#ff99cc",textdark:!0,traits:"none",power:"Mineralogy",picture:"Img/Adamant2.jpg",headshot:"Img/Adamant.jpg",player:"Watamote"},{name:"Sofia",title:"The Melody",race:"Quincy",organization:"Vandenreich",primarycolor:"#bc9e08",secondarycolor:"#ecc60ecc",textbackgroundcolor:"#8f673a",textdark:!1,traits:"none",power:"Music",picture:"Img/Sofia2.gif",headshot:"Img/Sofia.PNG",player:"The Owl"},{name:"Calypso",title:"Crybaby",race:"Danava of Dreams/Nightmares",organization:"Unaffiliated",primarycolor:"#fb9327de",secondarycolor:"#ea0f0f",textbackgroundcolor:"#ea0f0f",textdark:!1,traits:"none",power:"Dreams",picture:"Img/Calypso2.PNG",headshot:"Img/Calypso.jpg",player:"Lillian"},{name:"Henrex Astillon",title:"Stealth Force Captain",race:"Shinigami/Demon Hybrid",organization:"Gotei 13, Vastime, Guild of Heroes",primarycolor:"#5A178C",secondarycolor:"#316AD5",textbackgroundcolor:"#6131d5",textdark:!1,traits:"none",power:"Ninjutsu, Electricity",picture:"Img/Henrex2.png",headshot:"Img/Henrex.png",player:"Henrex"},{name:"Yasuko",title:"Spirit Tamer",race:"Spiritual Human",organization:"Hebi Laboratories",primarycolor:"#8B008B",secondarycolor:"#4B0082",textbackgroundcolor:"#8B008B",textdark:!1,traits:"none",power:"Spiritualism",picture:"Img/Yasuko2.jpg",headshot:"Img/Yasuko.PNG",player:"MWD"},{name:"Suzu Hebi",title:"Trecera Espada",race:"Transcended Arrancar",organization:"Shadow Fall",primarycolor:"#9400D3",secondarycolor:"#9400D3",textbackgroundcolor:"#9400D3",textdark:!1,traits:"none",power:"Biomancy",picture:"Img/Suzu2.jpg",headshot:"Img/Suzu.PNG",player:"Zetsurin"},{name:"Kabuto Hebi",title:"The Doctor",race:"Corrupted Angel Iramasha",organization:"Hebi Laboratories",primarycolor:"purple",secondarycolor:"yellow",textbackgroundcolor:"gray",textdark:!0,traits:"none",power:"Biomancy, Reanimation",picture:"http://2.bp.blogspot.com/-jzAgaSrk7oY/Uq44IrH3dxI/AAAAAAAAAKA/JsbIdlWr120/s1600/Yakushi.Kabuto.full.1346175.jpg",headshot:"https://static.zerochan.net/Yakushi.Kabuto.full.1001504.jpg",player:"JJ"},{name:"Colin Washi",title:"Eagle God",race:"Vizard",organization:"Lux Oriori",primarycolor:"lime",secondarycolor:"green",textbackgroundcolor:"whtie",textdark:!0,traits:"none",power:"Feather Blades, Raw Speed",picture:"https://tse1.mm.bing.net/th?id=OIP.M08E1U4i6uQv0ObYewqPYwHaKX&pid=Api",headshot:"http://fc07.deviantart.net/fs16/f/2007/163/c/b/DNAngel__Krad_by_kurai88.jpg",player:"JJ"},{name:"Moonie",title:"Moon Iramasha",race:"Nature Iramasha",organization:"Lux Oriori",primarycolor:"brown",secondarycolor:"black",textbackgroundcolor:"gray",textdark:!1,traits:"None",power:"Gravity, Friction",picture:"http://25.media.tumblr.com/tumblr_lt3pz9DKTe1qbs05mo1_500.png",headshot:"https://tse2.mm.bing.net/th?id=OIP.1kO0rHxVorn7Lz7YCdFqXAHaFV&pid=Api",player:"JJ"},{name:"Ulv Auber",title:"Flame Of Hope",race:"Visored",organization:"none",primarycolor:"Amber",secondarycolor:"Black",textbackgroundcolor:"White",textdark:"false",traits:"Muscular!",power:"Resolve Flame",picture:"https://cdn.discordapp.com/attachments/333309422506082314/402526378291101696/dbd.png",headshot:"https://cdn.discordapp.com/attachments/333309422506082314/402526420523548702/3b3c2881916369947582b43071a8da4c--iron-anime-girls.png",player:"Wan"}]}},24:function(e,t,a){e.exports=a(59)},29:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),i=a.n(o);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));for(var l=a(3),c=a(4),s=a(6),m=a(5),u=a(7),p=(a(31),a(32),a(60)),d=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){if(!this.props.item.textdark||"false"==this.props.item.textdark){var e=document.getElementsByClassName("name-focus"),t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){r.value.style.color="white"}}catch(i){a=!0,n=i}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}}},{key:"render",value:function(){var e=this.props.item.name;return window.setTimeout(function(){var t=document.getElementById("name-box-"+e),a=document.getElementById("name-"+e);t&&a&&(a.classList.remove("invisible"),t.classList.remove("invisible"))},500),r.a.createElement("span",{className:"headshot"},r.a.createElement("span",{id:"name-box-"+this.props.item.name,className:"name-box invisible",style:{"background-color":this.props.item.textbackgroundcolor}},r.a.createElement("span",{id:"name-"+this.props.item.name,className:"name-focus invisible"},this.props.item.name,r.a.createElement("br",null),this.props.item.title,r.a.createElement("br",null),this.props.item.race,r.a.createElement("br",null),this.props.item.organization,r.a.createElement("br",null),this.props.item.power,r.a.createElement("br",null))),r.a.createElement("img",{className:"image-box",id:"imgFull",src:this.props.item.headshot}))}}]),t}(n.Component)),h=function(e){e.match;var t=e.item;return r.a.createElement(p.a,{to:"/".concat(t.name)},r.a.createElement(d,{item:t}))},f=(a(38),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).checkFiltered=function(e,t,n){var r=[];if(n){var o=!0,i=!1,l=void 0;try{for(var c,s=t[Symbol.iterator]();!(o=(c=s.next()).done);o=!0){var m=c.value;if(m[1]){var u=!0,p=!1,d=void 0;try{for(var h,f=e[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var y=h.value;for(var v in y)v==m[0]&&y[v].includes(m[1])&&(r.includes(y)||r.push(y),a.state.haveSearched||a.setState({haveSearched:!0}))}}catch(S){p=!0,d=S}finally{try{u||null==f.return||f.return()}finally{if(p)throw d}}}}}catch(S){i=!0,l=S}finally{try{o||null==s.return||s.return()}finally{if(i)throw l}}}else{var b=!0,g=!1,E=void 0;try{for(var k,x=e[Symbol.iterator]();!(b=(k=x.next()).done);b=!0){var w=k.value;r.push(w),a.setState({haveSearched:!1})}}catch(S){g=!0,E=S}finally{try{b||null==x.return||x.return()}finally{if(g)throw E}}}return a.setState({itemsToDisplay:r}),r},a.performFilter=function(e){},a.handleFilter=function(e){e.preventDefault();var t=[],n=!1,r=!0,o=!1,i=void 0;try{for(var l,c=e.currentTarget[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;"text"==s.type&&(t.push([s.name,s.value]),s.value&&(n=!0))}}catch(m){o=!0,i=m}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return setTimeout(function(){var e=a.checkFiltered(a.props.items,t,n);a.props.searchCompletedFunc(e)},500),!1},a.searchBySingleTrait=function(e){var t=a.checkFiltered(a.props.items,e,!0);a.props.searchCompletedFunc(t)},a.clearSearch=function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=document.getElementsByClassName("filter-input")[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.value=""}}catch(l){n=!0,r=l}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}a.props.searchCompletedFunc([])},a.state={itemsToDisplay:[],haveSearched:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.checkFiltered(this.props.items),this.props.haveSearched&&this.setState({haveSearched:!0}),this.props.makeSearchFunctionAvailable(this.searchBySingleTrait)}},{key:"inWords",value:function(e){var t=["","one ","two ","three ","four ","five ","six ","seven ","eight ","nine ","ten ","eleven ","twelve ","thirteen ","fourteen ","fifteen ","sixteen ","seventeen ","eighteen ","nineteen "],a=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];if((e=e.toString()).length>9)return"overflow";var n=("000000000"+e).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);if(n){var r="";return r+=0!=n[1]?(t[Number(n[1])]||a[n[1][0]]+" "+t[n[1][1]])+"crore ":"",r+=0!=n[2]?(t[Number(n[2])]||a[n[2][0]]+" "+t[n[2][1]])+"lakh ":"",r+=0!=n[3]?(t[Number(n[3])]||a[n[3][0]]+" "+t[n[3][1]])+"thousand ":"",r+=0!=n[4]?(t[Number(n[4])]||a[n[4][0]]+" "+t[n[4][1]])+"hundred ":"",r+=0!=n[5]?(""!=r?"and ":"")+(t[Number(n[5])]||a[n[5][0]]+" "+t[n[5][1]])+"only ":""}}},{key:"openNav",value:function(){"0px"!=document.getElementById("mySidenav").style.width&&document.getElementById("mySidenav").style.width?document.getElementById("mySidenav").style.width="0px":document.getElementById("mySidenav").style.width="50vw"}},{key:"closeNav",value:function(){document.getElementById("mySidenav").style.width="0px"}},{key:"render",value:function(){var e=this,t=0,a=[];if(this.props.mainSection&&a.push(r.a.createElement("div",{id:"mobile-menu",className:"mobile-menu"},r.a.createElement("div",{id:"mySidenav",class:"sidenav"},r.a.createElement("a",{href:"javascript:void(0)",class:"closebtn",onClick:function(){return e.closeNav()}},"\xd7"),r.a.createElement("span",{class:"filter-header",id:"search"},"Filter"),r.a.createElement("form",{onSubmit:function(t){return e.handleFilter(t)},autoComplete:"off",id:"filter-form"},r.a.createElement("span",{class:"filter-text"},"Name"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"name"}),r.a.createElement("br",null),r.a.createElement("span",{class:"filter-text"},"Race"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"race"}),r.a.createElement("span",{class:"filter-text"},"Organization"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"organization"}),r.a.createElement("br",null),r.a.createElement("span",{class:"filter-text"},"Player"),r.a.createElement("br",null),r.a.createElement("input",{class:"filter-input",type:"text",name:"player"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:"filter-button",type:"submit",value:"Submit"}),this.state.haveSearched?r.a.createElement("input",{className:"filter-button",type:"submit",value:"Cancel Search",onClick:function(t){return e.clearSearch(t)}}):"")),r.a.createElement("span",{style:{fontSize:"30px",cursor:"pointer"},onClick:function(){return e.openNav()}},"\u2630"))),this.state.itemsToDisplay.length>0){var n=!0,o=!1,i=void 0;try{for(var l,c=this.state.itemsToDisplay[Symbol.iterator]();!(n=(l=c.next()).done);n=!0){var s=l.value;t+=1,a.push(r.a.createElement("span",{className:"headshot-box"},r.a.createElement(h,{match:this.props.match,item:s,key:this.inWords(t)})))}}catch(m){o=!0,i=m}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}}return a}}]),t}(n.Component)),y=(a(40),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).x0=null,a.unify=function(e){return e.changedTouches?e.changedTouches[0]:e},a.lock=function(e){a.x0=a.unify(e).clientX},a.move=function(e){if(a.x0||0===a.x0){var t=a.unify(e).clientX-a.x0;Math.sign(t);Math.abs(t)>50&&(t>0&&a.leftLinkButton&&a.leftLinkButton.click(),t<0&&a.rightLinkButton&&a.rightLinkButton.click())}},a.reload=function(){document.getElementById(a.props.item.name).style.backgroundColor=a.props.item.primarycolor,document.getElementById("main-color").style.backgroundColor=a.props.item.secondarycolor,document.getElementById("inner-info-"+a.props.item.name).style.backgroundColor=a.props.item.textbackgroundcolor;var e=document.getElementsByClassName("basic-button"),t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){o.value.style.backgroundColor=a.props.item.secondarycolor}}catch(E){n=!0,r=E}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}if(!a.props.item.textdark||"false"==a.props.item.textdark){var l=document.getElementsByClassName("info-field");if(!a.props.item.textbackgroundcolor.match(/^(?:white|#fff(?:fff)?|rgba?\(\s*255\s*,\s*255\s*,\s*255\s*(?:,\s*1\s*)?\))$/i)){var c=!0,s=!1,m=void 0;try{for(var u,p=l[Symbol.iterator]();!(c=(u=p.next()).done);c=!0){u.value.style.color="white"}}catch(E){s=!0,m=E}finally{try{c||null==p.return||p.return()}finally{if(s)throw m}}}}if(!a.props.item.textdark||"false"==a.props.item.textdark){var d=document.getElementsByClassName("basic-button"),h=!0,f=!1,y=void 0;try{for(var v,b=d[Symbol.iterator]();!(h=(v=b.next()).done);h=!0){v.value.style.color="white"}}catch(E){f=!0,y=E}finally{try{h||null==b.return||b.return()}finally{if(f)throw y}}}var g=document.createElement("img");(g.src=a.props.item.picture,console.log(g.height),console.log(g.width),console.log(g),g.width>g.height)&&document.getElementById("img-"+a.props.item.name).classList.replace("relevant-image-vertical","relevant-image-horizontal")},a.funcForTraitSearch=function(e,t){document.getElementById("roster-link").click(),setTimeout(function(){a.props.searchBySingleTrait([[e,t]])},100)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.reload();var e=document.getElementById("full-page"+this.props.item.name);this.leftLinkButton=document.getElementById("leftLink-"+this.props.item.name),this.rightLinkButton=document.getElementById("rightLink-"+this.props.item.name),e.addEventListener("touchstart",this.lock,!1),e.addEventListener("touchend",this.move,!1),e.addEventListener("mousedown",this.lock,!1),e.addEventListener("mouseup",this.move,!1)}},{key:"componentDidUpdate",value:function(){this.reload(),document.getElementById("main-color").style.backgroundColor="#61dafb";var e=document.getElementsByClassName("basic-button"),t=!0,a=!1,n=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){r.value.style.backgroundColor="#61dafb"}}catch(p){a=!0,n=p}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}if(!this.props.item.textdark||"false"==this.props.item.textdark){var i=document.getElementsByClassName("basic-button"),l=!0,c=!1,s=void 0;try{for(var m,u=i[Symbol.iterator]();!(l=(m=u.next()).done);l=!0){m.value.style.color="black"}}catch(p){c=!0,s=p}finally{try{l||null==u.return||u.return()}finally{if(c)throw s}}}}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("full-page"+this.props.item.name);e.removeEventListener("touchstart",this.lock),e.removeEventListener("touchend",this.move),e.removeEventListener("mousedown",this.lock),e.removeEventListener("mouseup",this.move)}},{key:"capitalizeFirstLetter",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){var e=this,t=null,a=null;this.props.leftLink(this.props.item.name)&&(t=r.a.createElement(p.a,{id:"leftLink-"+this.props.item.name,to:this.props.leftLink(this.props.item.name),style:{textDecoration:"none"}},r.a.createElement("div",{className:"link-container left-link"}),r.a.createElement("div",{className:"left-link side-link"}))),this.props.rightLink(this.props.item.name)&&(a=r.a.createElement(p.a,{id:"rightLink-"+this.props.item.name,to:this.props.rightLink(this.props.item.name),style:{textDecoration:"none"}},r.a.createElement("div",{className:"link-container right-link"}),r.a.createElement("div",{className:"right-link side-link"})));var n=[],o=function(t){"primarycolor"!=t&&"secondarycolor"!=t&&"textbackgroundcolor"!=t&&"textdark"!=t&&"picture"!=t&&"headshot"!=t&&"items"!=t?n.push(r.a.createElement("div",{className:"info-field"},r.a.createElement("br",null),r.a.createElement("span",{style:{display:"inline-flex"}},e.capitalizeFirstLetter(t)+": "),e.props.item[t.toString()]?r.a.createElement("span",{style:{display:"inherit",cursor:"pointer"},onClick:function(a,n){return e.funcForTraitSearch(t.toString(),e.props.item[t.toString()])}},e.props.item[t.toString()]):r.a.createElement("span",null,"'N/A'"))):"items"==t&&n.push(r.a.createElement("div",{className:"info-field"},r.a.createElement("br",null),e.props.item[t.toString()]?r.a.createElement("span",{style:{display:"inline-block",cursor:"pointer"}},e.props.item[t]):r.a.createElement("span",null,"'N/A'")))};for(var i in this.props.item)o(i);return r.a.createElement("div",{id:"full-page"+this.props.item.name,className:"full-results-page"},r.a.createElement("span",{className:"result-page",id:this.props.item.name},r.a.createElement("div",{className:"inner-information"},r.a.createElement("center",null,r.a.createElement("img",{src:this.props.item.picture,id:"img-"+this.props.item.name,className:"relevant-image-vertical"})),r.a.createElement("br",null),r.a.createElement("div",{className:"text-field",id:"inner-info-"+this.props.item.name},r.a.createElement("div",{className:"text-field"},n)))),t||null,a||null)}}]),t}(n.Component)),v=a(10),b=(a(55),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componetdidUpdate",value:function(){}},{key:"render",value:function(){return r.a.createElement("span",{className:"overview-page-outer"},r.a.createElement("span",{className:"overview-page-inner"}))}}]),t}(n.Component)),g=(a(57),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleExample=function(e){e.preventDefault();var t="{",n={},o=!0,l=!1,c=void 0;try{for(var s,m=e.currentTarget[Symbol.iterator]();!(o=(s=m.next()).done);o=!0){var u=s.value;if("text"==u.type)if(u.value){var p=u.name.toLowerCase().replace(/ /g,"");n[p]=u.value,t+='"'.concat(p,'" : "').concat(u.value,'",\n')}else{var d=u.name.toLowerCase().replace(/ /g,"");n[d]="N/A",t+='"'.concat(d,'" : "N\\A",\n')}}}catch(h){l=!0,c=h}finally{try{o||null==m.return||m.return()}finally{if(l)throw c}}return t=t.substring(0,t.length-2),t+="\n}",a.setState({preppedCode:t}),i.a.render(r.a.createElement(y,{item:n,leftLink:function(){return null},rightLink:function(){return null}}),document.getElementById("example")),!1},a.selectCode=function(){document.getElementById("code-area").focus(),document.getElementById("code-area").select()},a.state={preppedCode:null,showCode:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){t.preppedCode&&(!t.showCode&&this.state.showCode||(document.getElementById("main-color").style.backgroundColor="#61dafb"));var a=document.getElementsByClassName("basic-button"),n=!0,r=!1,o=void 0;try{for(var i,l=a[Symbol.iterator]();!(n=(i=l.next()).done);n=!0){i.value.style.backgroundColor="#61dafb"}}catch(h){r=!0,o=h}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}var c=document.getElementsByClassName("basic-button"),s=!0,m=!1,u=void 0;try{for(var p,d=c[Symbol.iterator]();!(s=(p=d.next()).done);s=!0){p.value.style.color="black"}}catch(h){m=!0,u=h}finally{try{s||null==d.return||d.return()}finally{if(m)throw u}}}},{key:"render",value:function(){for(var e=this,t=["Name","Title","Race","Organization","Primary Color","Secondary Color","Text Background Color","Text Dark","Traits","Power","Picture","Headshot","Player"],a=[],n=0;n<t.length;n++){var o=t[n];a.push(r.a.createElement("div",{className:"example-section"},r.a.createElement("span",{className:"example-header"},o,": "),r.a.createElement("input",{type:"text",className:"example-input",name:o})))}return r.a.createElement("div",null,r.a.createElement("span",{className:"designer-page-outer"},r.a.createElement("span",{className:"designer-page-inner"},r.a.createElement("form",{onSubmit:function(t){return e.handleExample(t)}},a,r.a.createElement("input",{className:"basic-button example-button",type:"submit",value:"Submit"})),r.a.createElement("button",{id:"display-code",onClick:function(){return e.setState({showCode:!0})},className:"basic-button"+(this.state.showCode?" disappear-button":""),style:{display:this.state.preppedCode?"flex":"none"}},"Generate Code"),r.a.createElement("textarea",{readOnly:!0,id:"code-area",style:{display:this.state.showCode?"flex":"none"},className:"prepped-code",value:this.state.preppedCode}),r.a.createElement("button",{id:"select-text",style:{display:this.state.showCode?"flex":"none"},className:"basic-button",onClick:function(){return e.selectCode()}},"Select Code"))),r.a.createElement("div",{id:"example"}))}}]),t}(n.Component)),E=a(61),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).searchCompleted=function(e){a.setState({searchedItemsList:e})},a.searchFunctionAvailable=function(e){a.searchFunctionByTrait=e},a.state={searchedItemsList:[]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;function t(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}}function a(e){return Object(v.b)(e,{stiffness:330,damping:22,zIndex:100})}var n={atEnter:{opacity:0,scale:1.2},atLeave:{opacity:a(0),scale:a(.8)},atActive:{opacity:a(1),scale:a(1)}},o=function(t){var a=!0,n=!1,r=void 0;try{for(var o,i=e.props.itemList[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;if(l.name==t)return l}}catch(c){n=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}},i=function(t){var a=!0,n=!1,r=void 0;try{for(var o,i=e.props.ownerList[Symbol.iterator]();!(a=(o=i.next()).done);a=!0){var l=o.value;if(l.name==t)return l}}catch(c){n=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw r}}},l=[],c=!0,s=!1,m=void 0;try{for(var u,d=function(){var a=u.value;1;var o="/".concat(a.name);l.push(r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:o,component:function(){return r.a.createElement(y,{item:a,searchBySingleTrait:function(t){return e.searchFunctionByTrait(t)},leftLink:function(t){return function(t){var a=null,n=i(t),r=e.props.ownerList.lastIndexOf(n);return e.props.ownerList[r-1]&&(a="/".concat(e.props.ownerList[r-1].name)),a}(t)},rightLink:function(t){return function(t){var a=null,n=i(t),r=e.props.ownerList.lastIndexOf(n);return e.props.ownerList[r+1]&&(a="/".concat(e.props.ownerList[r+1].name)),a}(t)}})}}))},h=this.props.ownerList[Symbol.iterator]();!(c=(u=h.next()).done);c=!0)d()}catch(U){s=!0,m=U}finally{try{c||null==h.return||h.return()}finally{if(s)throw m}}var k=!0,x=!1,w=void 0;try{for(var S,L=this.props.ownerList[Symbol.iterator]();!(k=(S=L.next()).done);k=!0){var N=S.value,C=[];if(N.items[0]&&N.items[0].name){var I=!0,A=!1,B=void 0;try{for(var O,j=N.items[Symbol.iterator]();!(I=(O=j.next()).done);I=!0){var F=O.value;C.push(F)}}catch(U){A=!0,B=U}finally{try{I||null==j.return||j.return()}finally{if(A)throw B}}N.items=r.a.createElement(f,{makeSearchFunctionAvailable:function(t){return e.searchFunctionAvailable(t)},searchCompletedFunc:function(t){return e.searchCompleted(t)},haveSearched:this.state.searchedItemsList.length>0,items:C})}}}catch(U){x=!0,w=U}finally{try{k||null==L.return||L.return()}finally{if(x)throw w}}var D=!0,T=!1,z=void 0;try{for(var M,H=function(){var a=M.value;1;var i="/".concat(a.name);l.push(r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:i,component:function(){return r.a.createElement(y,{item:a,searchBySingleTrait:function(t){return e.searchFunctionByTrait(t)},leftLink:function(t){return function(t){var a=null,n=o(t),r=e.props.itemList.lastIndexOf(n);return e.state.searchedItemsList.length>0?(r=e.state.searchedItemsList.lastIndexOf(n),e.state.searchedItemsList[r-1]&&(a="/".concat(e.state.searchedItemsList[r-1].name))):e.props.itemList[r-1]&&(a="/".concat(e.props.itemList[r-1].name)),a}(t)},rightLink:function(t){return function(t){var a=null,n=o(t),r=e.props.itemList.lastIndexOf(n);return e.state.searchedItemsList.length>0?(r=e.state.searchedItemsList.lastIndexOf(n),e.state.searchedItemsList[r+1]&&(a="/".concat(e.state.searchedItemsList[r+1].name))):e.props.itemList[r+1]&&(a="/".concat(e.props.itemList[r+1].name)),a}(t)}})}}))},P=this.props.itemList[Symbol.iterator]();!(D=(M=P.next()).done);D=!0)H()}catch(U){T=!0,z=U}finally{try{D||null==P.return||P.return()}finally{if(T)throw z}}return r.a.createElement("div",{className:"App"},r.a.createElement(E.a,null,r.a.createElement("div",{className:"App",id:"main-color"},r.a.createElement("header",{className:"App-header"},r.a.createElement(p.a,{to:"/",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Overview")),r.a.createElement(p.a,{to:"/roster",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Roster")),r.a.createElement(p.a,{to:"/designer",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Designer")),r.a.createElement(p.a,{to:"/players",className:"link-button",style:{textDecoration:"none"}},r.a.createElement("button",{className:"basic-button"},"Players"))),r.a.createElement("div",{className:"App-body"},r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",exact:!0,path:"/",component:function(){return r.a.createElement("div",null,r.a.createElement(b,null))}}),r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:"/roster",component:function(t){var a=t.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Roster"),r.a.createElement(f,{key:"roster",mainSection:!0,match:a,makeSearchFunctionAvailable:function(t){return e.searchFunctionAvailable(t)},searchCompletedFunc:function(t){return e.searchCompleted(t)},haveSearched:e.state.searchedItemsList.length>0,items:e.state.searchedItemsList.length>0?e.state.searchedItemsList:e.props.itemList}))}}),r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:"/designer",component:function(){return r.a.createElement("div",null,r.a.createElement(g,null))}}),r.a.createElement(v.a,{atEnter:n.atEnter,atLeave:n.atLeave,atActive:n.atActive,mapStyles:t,className:"route-wrapper",path:"/players",component:function(t){var a=t.match;return r.a.createElement("div",null,r.a.createElement("h2",null,"Owners"),r.a.createElement(f,{key:"owners",match:a,makeSearchFunctionAvailable:function(t){return e.searchFunctionAvailable(t)},searchCompletedFunc:function(t){return e.searchCompleted(t)},haveSearched:e.state.searchedItemsList.length>0,items:e.props.ownerList}))}}),l))))}}]),t}(n.Component),x=a(23).a,w=[],S=0;S<x.length;S++){var L=x[S];L.headshot=L.headshot,w.push(L)}for(var N=[],C=[],I=[],A=0;A<w.length;A++)N.includes(w[A].player)||C.push(w[A]);C.map(function(e){var t,a,n=(t=e,I.map(function(e){if(e.name==t.player)return e}));n&&n.forEach(function(e){e&&(a=e)}),a||(a={name:e.player,picture:e.picture,headshot:e.headshot,textbackgroundcolor:"#61dafb",textdark:!0,items:[]},I.push(a)),a.items.push(e)}),i.a.render(r.a.createElement(k,{itemList:C,ownerList:I}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.64cf7c30.chunk.js.map