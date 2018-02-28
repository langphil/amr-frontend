webpackJsonp([1],{"/g/1":function(t,e){},"039M":function(t,e){},"9M+g":function(t,e){},CmDF:function(t,e){},I8gM:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("sCSS"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"menu"},[a("router-link",{staticClass:"link",attrs:{to:{path:"/"}}},[t._v("Welcome")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:{path:"/about"}}},[t._v("About this research")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:{path:"/companies"}}},[t._v("Companies")]),t._v(" "),a("router-link",{staticClass:"link",attrs:{to:{path:"/programmes"}}},[t._v("Programmes")])],1),t._v(" "),a("div",{staticClass:"content"},[a("router-view")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticStyle:{"text-align":"center"}},[this._v("Antimicrobial Resistance Register")])])}]};var i=a("VU/8")({name:"App"},s,!1,function(t){a("039M")},null,null).exports,o=a("/ocq"),c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title-head"},[t._v("Welcome")]),t._v(" "),a("h1",{staticStyle:{color:"red"}},[t._v("IN DEVELOPMENT")]),t._v(" "),a("p",[t._v("The threat caused by antimicrobial resistance\n\t(AMR) is a growing and urgent global health problem. Currently up to\n\t700,000 people globally, including 50,000 people in Europe and the USA,\n\tdie each year due to drug resistance in illnesses such as bacterial\n\tinfections, malaria, HIV/AIDS and tuberculosis.")]),t._v(" "),a("p",[t._v("In 2016, a number of pharmaceutical companies signed two declarations,\n\tcommitting to sharing surveillance data to make it accessible to public\n\thealth bodies and healthcare professionals.")]),t._v(" "),a("ul",[a("li",[t._v("The Davos declaration (January 2016)")]),t._v(" "),a("li",[t._v("The United Nations Global Assembly Declaration (September 2016)")])]),t._v(" "),a("p",[t._v("There is an accepted need to share data form the global antibiotic\n\tsurveillance studies externally to guide appropriate antibiotic prescription,\n\tto set up new breakpoints for antibiotics and to encourage wider innovation\n\tin this area.")])])}]};var l=a("VU/8")({name:"About"},c,!1,function(t){a("I8gM")},"data-v-660fdcdc",null).exports,m=a("mtWM"),u=a.n(m),v={name:"Companies",data:function(){return{companies:[],errors:[]}},created:function(){var t=this;u.a.get("https://odi-amr.herokuapp.com/api/companies").then(function(e){t.companies=e.data.companies}).catch(function(e){t.errors.push(e)})}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title-head"},[t._v("Companies")]),t._v(" "),t._l(t.companies,function(e){return a("div",{key:e},[a("div",{staticClass:"box"},[a("h2",[a("a",{attrs:{href:"/programmes/"+e.url}},[t._v(t._s(e.name))])]),t._v(" "),a("h4",[t._v("Programmes")]),t._v(" "),t._l(e.programmes,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])}),t._v(" "),a("h4",[t._v("Antimicrobials")]),t._v(" "),t._l(e.antimicrobials,function(e){return a("ul",{key:e},[a("li",[t._v(t._s(e))])])})],2)])})],2)},staticRenderFns:[]};var _=a("VU/8")(v,p,!1,function(t){a("CmDF")},"data-v-1719f9c5",null).exports,h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title-head"},[this._v("About")])])}]};var d=a("VU/8")({name:"About"},h,!1,function(t){a("/g/1")},"data-v-084edecd",null).exports,f=function(){return u.a.get("https://odi-amr.herokuapp.com/api/programmes")},g={name:"Programme",data:function(){return{programmes:[],errors:[]}},created:function(){var t=this;f().then(function(e){t.programmes=e.data.programmes}).catch(function(e){t.errors.push(e)})}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"title-head"},[t._v("Programmes:")]),t._v(" "),t._m(0),t._v(" "),t._l(t.programmes,function(e){return a("div",{key:e},[a("div",{staticClass:"box"},[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("small",[t._v(t._s(e.programmeName))]),t._v(" "),a("p",[a("strong",[t._v("Years active: ")]),t._v(" "+t._s(e.yearsActive))]),t._v(" "),a("p",[t._v(t._s(e.primaryObjective))]),t._v(" "),a("h4",[t._v("Dataset")]),t._v(" "),a("p",[a("strong",[t._v("Storage: ")]),t._v(t._s(e.dataset.stored))]),t._v(" "),a("p",[a("strong",[t._v("Format: ")]),t._v(t._s(e.dataset.format))]),t._v(" "),a("p",[a("strong",[t._v("Responsibility: ")]),t._v(t._s(e.dataset.datasetAccessResponsible))]),t._v(" "),a("h4",[t._v("Methodology")]),t._v(" "),a("p",[a("strong",[t._v("Active: ")]),t._v(t._s(e.methodology.activeSurveillance))])])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{staticStyle:{color:"red","text-align":"left"}},[this._v("Data shown below is not exhaustive"),e("br"),this._v("Programmes will have individual pages"),e("br"),this._v("Data source can be found "),e("a",{attrs:{href:"https://odi-amr.herokuapp.com/api/programmes"}},[this._v("here")])])}]};var C=a("VU/8")(g,b,!1,function(t){a("sd2O")},"data-v-776b4680",null).exports,y={name:"Programme",data:function(){return{programmes:[],errors:[]}},created:function(){var t=this;f().then(function(e){t.programmes=e.data.programmes}).catch(function(e){t.errors.push(e)})}},k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",{staticClass:"title-head"},[this._v("Programme")])])}]};var A=a("VU/8")(y,k,!1,function(t){a("h4/J")},"data-v-f5420298",null).exports;n.a.use(o.a);var E=new o.a({mode:"history",routes:[{path:"/",name:"Home",component:l},{path:"/about",name:"About",component:d},{path:"/companies",name:"Companies",component:_},{path:"/programmes",name:"Programmes",component:C},{path:"/programmes/:programme",name:"Programme",component:A}]});a("Jmt5"),a("9M+g");n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:E,components:{App:i},template:"<App/>"})},"h4/J":function(t,e){},sd2O:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fabba4c29cb442974fbf.js.map