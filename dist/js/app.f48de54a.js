(function(t){function a(a){for(var r,s,o=a[0],l=a[1],c=a[2],u=0,v=[];u<o.length;u++)s=o[u],i[s]&&v.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(a);while(v.length)v.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,o=1;o<e.length;o++){var l=e[o];0!==i[l]&&(r=!1)}r&&(n.splice(a--,1),t=s(s.s=e[0]))}return t}var r={},i={app:0},n=[];function s(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=r,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)s.d(e,r,function(a){return t[a]}.bind(null,r));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},2762:function(t,a,e){},"29c6":function(t,a,e){"use strict";var r=e("4345"),i=e.n(r);i.a},4345:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=e("bb71");e("da64");r["a"].use(i["a"],{iconfont:"md"});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-list",t._l(t.links,function(a){return e("v-list-tile",{key:a.title,attrs:{to:a.url}},[e("v-list-tile-action",[e("v-icon",[t._v(t._s(a.icon))])],1),e("v-list-tile-content",[e("v-list-tile-title",{domProps:{textContent:t._s(a.titel)}})],1)],1)}),1)],1),e("v-toolbar",{attrs:{dark:"",color:"primary",app:""}},[e("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(a){t.drawer=!0}}}),e("v-toolbar-title",[e("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("Car Application")])],1),e("v-spacer"),e("v-toolbar-items",{staticClass:"hidden-sm-and-down"},t._l(t.links,function(a){return e("v-btn",{key:a.titel,attrs:{flat:"",to:a.url}},[e("v-icon",{attrs:{left:""}},[t._v(t._s(a.icon))]),t._v("\n            "+t._s(a.titel)+"\n          ")],1)}),1)],1),e("v-content",[e("router-view")],1)],1)},s=[],o={data:function(){return{drawer:!1,links:[{titel:"Login",icon:"lock",url:"/login"},{titel:"Registration",icon:"account_circle",url:"/registeration"},{titel:"Order",icon:"bookmark_border",url:"/orders"},{titel:"Add car",icon:"note_add",url:"/add_cars"},{titel:"My cars",icon:"list",url:"/my_cars"}]}}},l=o,c=(e("29c6"),e("2877")),d=e("6544"),u=e.n(d),v=e("7496"),m=e("8336"),p=e("549c"),f=e("132d"),b=e("8860"),h=e("ba95"),_=e("40fe"),g=e("5d23"),x=e("f774"),w=e("9910"),V=e("71d9"),y=e("2a7f"),C=e("706c"),T=Object(c["a"])(l,n,s,!1,null,"00e9c604",null),k=T.exports;u()(T,{VApp:v["a"],VBtn:m["a"],VContent:p["a"],VIcon:f["a"],VList:b["a"],VListTile:h["a"],VListTileAction:_["a"],VListTileContent:g["a"],VListTileTitle:g["c"],VNavigationDrawer:x["a"],VSpacer:w["a"],VToolbar:V["a"],VToolbarItems:y["a"],VToolbarSideIcon:C["a"],VToolbarTitle:y["b"]});var j=e("8c4f"),P=e("bc3a"),O=e.n(P),L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{attrs:{fluid:""}},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{sx12:""}},[e("v-carousel",t._l(t.homeCars,function(a,r){return e("v-carousel-item",{key:r,attrs:{src:a.src,"reverse-transition":"fade-transition",transition:"fade-transition"}},[e("div",{staticClass:"link-btn"},[e("v-btn",{staticClass:"error",attrs:{to:"/ad/"+a.id}},[t._v(t._s(a.title))])],1)])}),1)],1)],1)],1),e("v-container",{attrs:{"grid-list-lg":""}},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.homeCars,function(a,r){return e("v-flex",{key:r,attrs:{xs12:"",sm6:"",md4:""}},[e("v-card",[e("v-card-media",{attrs:{src:a.src,height:"200px"}}),e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("h3",{staticClass:"headline mb-0"},[t._v(t._s(a.title))]),e("div",[t._v(t._s(a.description))])])]),e("v-card-actions",[e("v-btn",{attrs:{flat:"",to:"/ad/"+a.id}},[t._v("Open")]),e("v-btn",{staticClass:"primary",attrs:{raised:""}},[t._v("Buy")])],1)],1)],1)}),1)],1)],1)},S=[],E={data:function(){return{homeCars:[{src:"https://i.infocar.ua/i/12/1212/1400x936.jpg",id:0,promo:!1,title:"Tiguan",description:"Tiguan is the bast car in the world"},{src:"https://cdn.volkswagen.ua/media/Theme_Teaser_BreakerMedia_Image_Component/8790-19199-image/dh-3840-05dd08/f9d66299/1472124360/tn0880.jpg",id:1,promo:!0,title:"Tiguan",description:"Tiguan is the bast car in the world"},{src:"https://static.volkswagen.ru/content/dam/vw-ngw/vw_pkw/importers/ru/models/tiguan/press/2017-09-05_Tiguan_vs_Mazda_vs_Honda_vs_Kia_in_Autoreview.jpg/_jcr_content/renditions/original.transform/max/img.jpg",id:2,promo:!1,title:"Tiguan",description:"Tiguan is the bast car in the world"},{src:"https://m.atcdn.co.uk/vms/media/03ff2aefd95f451eac48c76544dd6c4a.jpg",id:3,promo:!0,title:"Tiguan",description:"Tiguan is the bast car in the world"}]}},methods:{}},A=E,F=(e("c4ad"),e("b0af")),M=e("99d9"),B=e("b901"),R=e("12b2"),$=e("5e66"),q=e("3e35"),I=e("a523"),z=e("0e8f"),D=e("a722"),H=Object(c["a"])(A,L,S,!1,null,"04a78b5c",null),J=H.exports;u()(H,{VBtn:m["a"],VCard:F["a"],VCardActions:M["a"],VCardMedia:B["a"],VCardTitle:R["a"],VCarousel:$["a"],VCarouselItem:q["a"],VContainer:I["a"],VFlex:z["a"],VLayout:D["a"]});var K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("h1",{staticClass:"text--secondary md-3"},[t._v("Create new car")]),e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-text-field",{attrs:{name:"title",label:"Title",type:"text",required:"",rules:[function(t){return!!t||"Title is required"}]},model:{value:t.titel,callback:function(a){t.titel=a},expression:"titel"}}),e("v-text-field",{attrs:{name:"description",label:"Description",type:"text","multi-line":"",rules:[function(t){return!!t||"Description is required"}]},model:{value:t.description,callback:function(a){t.description=a},expression:"description"}})],1),e("v-layout",{staticClass:"mb-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-btn",{staticClass:"warning"},[t._v("\n                        Upload\n                        "),e("v-icon",{attrs:{right:"",dark:""}},[t._v("cloud_upload")])],1)],1)],1),e("v-layout",{staticClass:"mb-3",attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("img",{attrs:{src:"",height:"150"}})])],1),e("v-layout",{staticClass:"mb-3",attrs:{row:""}},[e("v-switch",{attrs:{label:"Show on home page: "+t.isPromo.toString()},model:{value:t.isPromo,callback:function(a){t.isPromo=a},expression:"isPromo"}})],1),e("v-layout",{staticClass:"mb-3",attrs:{row:""}},[e("v-spacer"),e("v-btn",{staticClass:"success",attrs:{disabled:!t.valid},on:{click:function(a){return t.create()}}},[t._v("\n                    Create\n                ")])],1)],1)],1)],1)},N=[],U={data:function(){return{isPromo:!1,titel:"",description:"",valid:!1}},methods:{create:function(){if(this.$refs.form.validate())this.isPromo,this.titel,this.description}}},G=U,Q=e("4bd4"),W=e("b73d"),X=e("2677"),Y=Object(c["a"])(G,K,N,!1,null,null,null),Z=Y.exports;u()(Y,{VBtn:m["a"],VContainer:I["a"],VFlex:z["a"],VForm:Q["a"],VIcon:f["a"],VLayout:D["a"],VSpacer:w["a"],VSwitch:W["a"],VTextField:X["a"]});var tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("h1",{staticClass:"text--secondary mb-3"},[t._v("My cars")]),t._l(t.homeCars,function(a){return e("v-card",{key:a.id,staticClass:"elevation-10 mb-3"},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs4:""}},[e("v-card-media",{attrs:{src:a.src,height:"175px"}})],1),e("v-flex",{attrs:{xs8:""}},[e("v-card-text",[e("h2",{staticClass:"text--primary"},[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.description))])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"info",attrs:{to:"/ad/"+a.id}},[t._v("\n                                Open\n                            ")])],1)],1)],1)],1)})],2)],1)],1)},at=[],et={data:function(){return{homeCars:[{src:"https://i.infocar.ua/i/12/1212/1400x936.jpg",id:0,promo:!1,title:"Tiguan",description:"Tiguan is the bast car in the world"},{src:"https://cdn.volkswagen.ua/media/Theme_Teaser_BreakerMedia_Image_Component/8790-19199-image/dh-3840-05dd08/f9d66299/1472124360/tn0880.jpg",id:1,promo:!0,title:"Tiguan",description:"Tiguan is the bast car in the world"},{src:"https://static.volkswagen.ru/content/dam/vw-ngw/vw_pkw/importers/ru/models/tiguan/press/2017-09-05_Tiguan_vs_Mazda_vs_Honda_vs_Kia_in_Autoreview.jpg/_jcr_content/renditions/original.transform/max/img.jpg",id:2,promo:!1,title:"Tiguan",description:"Tiguan is the bast car in the world"},{src:"https://m.atcdn.co.uk/vms/media/03ff2aefd95f451eac48c76544dd6c4a.jpg",id:3,promo:!0,title:"Tiguan",description:"Tiguan is the bast car in the world"}]}}},rt=et,it=Object(c["a"])(rt,tt,at,!1,null,null,null),nt=it.exports;u()(it,{VBtn:m["a"],VCard:F["a"],VCardActions:M["a"],VCardMedia:B["a"],VCardText:M["b"],VContainer:I["a"],VFlex:z["a"],VLayout:D["a"],VSpacer:w["a"]});var st=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",[t._v("Login form")])],1),e("v-card-text",[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-text-field",{attrs:{"prepend-icon":"email",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",counter:6,rules:t.passRules},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:t.onSubmit}},[t._v("Login")])],1)],1)],1)],1)],1)},ot=[],lt={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passRules:[function(t){return!!t||"Pass is required"},function(t){return t.length>=6||"Pass must be less than 10 characters"}]}},methods:{onSubmit:function(){if(this.$refs.form.validate()){var t={email:this.email,password:this.password};console.log(t)}}}},ct=lt,dt=Object(c["a"])(ct,st,ot,!1,null,null,null),ut=dt.exports;u()(dt,{VBtn:m["a"],VCard:F["a"],VCardActions:M["a"],VCardText:M["b"],VContainer:I["a"],VFlex:z["a"],VForm:Q["a"],VLayout:D["a"],VSpacer:w["a"],VTextField:X["a"],VToolbar:V["a"],VToolbarTitle:y["b"]});var vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[e("v-card",{staticClass:"elevation-12"},[e("v-toolbar",{attrs:{dark:"",color:"primary"}},[e("v-toolbar-title",[t._v("Registration")])],1),e("v-card-text",[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-text-field",{attrs:{"prepend-icon":"email",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",counter:6,rules:t.passRules},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Confirm Password",type:"password",counter:6,rules:t.ConfirmPassRules},model:{value:t.confirmPassword,callback:function(a){t.confirmPassword=a},expression:"confirmPassword"}})],1)],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{disabled:!t.valid,color:"primary"},on:{click:t.onSubmit}},[t._v("Create Accounte")])],1)],1)],1)],1)],1)},mt=[],pt={data:function(){var t=this;return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passRules:[function(t){return!!t||"Pass is required"},function(t){return t.length>=6||"Pass must be less than 10 characters"}],ConfirmPassRules:[function(t){return!!t||"Pass is required"},function(a){return a===t.password||"Password sould match"}]}},methods:{onSubmit:function(){if(this.$refs.form.validate()){var t={email:this.email,password:this.password};console.log(t)}}}},ft=pt,bt=Object(c["a"])(ft,vt,mt,!1,null,null,null),ht=bt.exports;u()(bt,{VBtn:m["a"],VCard:F["a"],VCardActions:M["a"],VCardText:M["b"],VContainer:I["a"],VFlex:z["a"],VForm:Q["a"],VLayout:D["a"],VSpacer:w["a"],VTextField:X["a"],VToolbar:V["a"],VToolbarTitle:y["b"]});var _t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[e("h1",{staticClass:"text--secondary mb-3"},[t._v("Orders")]),t._l(t.orders,function(a){return e("v-list",{key:a.id,attrs:{subheader:"","two-line":""}},[e("v-list-tile",[e("v-list-tile-action",[e("v-checkbox",{attrs:{color:"success","input-value":a.done},on:{change:function(e){return t.markDone(a)}}})],1),e("v-list-tile-content",[e("v-list-tile-title",[t._v(t._s(a.name))]),e("v-list-tile-sub-title",[t._v(t._s(a.phone))])],1),e("v-list-tile-action",[e("v-btn",{staticClass:"primary",attrs:{to:"/ad/"+a.adId}},[t._v("Open")])],1)],1)],1)})],2)],1)],1)},gt=[],xt={data:function(){return{orders:[{id:0,name:"Nazar",phone:"0680406408",adId:"123",done:!1}]}},methods:{markDone:function(t){t.done=!0}}},wt=xt,Vt=e("ac7c"),yt=Object(c["a"])(wt,_t,gt,!1,null,null,null),Ct=yt.exports;u()(yt,{VBtn:m["a"],VCheckbox:Vt["a"],VContainer:I["a"],VFlex:z["a"],VLayout:D["a"],VList:b["a"],VListTile:h["a"],VListTileAction:_["a"],VListTileContent:g["a"],VListTileSubTitle:g["b"],VListTileTitle:g["c"]});var Tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs12:""}},[e("v-card",[e("v-card-media",{attrs:{src:"https://m.atcdn.co.uk/vms/media/03ff2aefd95f451eac48c76544dd6c4a.jpg"}}),e("v-card-text",[e("h1",{staticClass:"text--primary"},[t._v(" Cars ")]),e("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores consectetur, ducimus magni perferendis similique. Consectetur cum doloremque obcaecati. Officia?")])]),e("v-card-actions",[e("v-spacer"),e("v-btn",{staticClass:"warning",attrs:{flat:""}},[t._v("Edit")]),e("v-btn",{staticClass:"success"},[t._v("Buy")])],1)],1)],1)],1)],1)},kt=[],jt={data:function(){return{}}},Pt=jt,Ot=Object(c["a"])(Pt,Tt,kt,!1,null,null,null),Lt=Ot.exports;u()(Ot,{VBtn:m["a"],VCard:F["a"],VCardActions:M["a"],VCardMedia:B["a"],VCardText:M["b"],VContainer:I["a"],VFlex:z["a"],VLayout:D["a"],VSpacer:w["a"]}),r["a"].use(j["a"]),r["a"].use(O.a);var St=new j["a"]({routes:[{path:"",name:"home",component:J},{path:"/login",name:"login",component:ut},{path:"/ad/:id",name:"ad",component:Lt},{path:"/registeration",name:"registration",component:ht},{path:"/orders",name:"orders",component:Ct},{path:"/add_cars",name:"add_car",component:Z},{path:"/my_cars",name:"my_cars",component:nt}],mode:"history"});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)},router:St,axios:O.a}).$mount("#app")},c4ad:function(t,a,e){"use strict";var r=e("2762"),i=e.n(r);i.a}});
//# sourceMappingURL=app.f48de54a.js.map