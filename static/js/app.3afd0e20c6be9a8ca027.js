webpackJsonp([1],{ENLC:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("MVMM"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("Z0/y")({name:"app"},a,!1,function(t){n("Y8RT")},null,null).exports,i=n("zO6J"),s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("h1",{staticClass:"logo"},[this._v("Vue Demo by FungLeo")])])}]},l=n("Z0/y")(null,s,!1,null,null,null).exports,u={render:function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"copy"},[this._v("\n  Copy © FungLeo\n")])},staticRenderFns:[]},c=n("Z0/y")(null,u,!1,null,null,null).exports,d={components:{Header:l,Footer:c},data:function(){return{list:[],num1:0}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.$api.get("topics",null,function(e){t.list=e.data})}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),t._v(" "),n("div",{staticClass:"article_list"},[n("el-input-number",{attrs:{min:1,max:10,label:"描述文字"},model:{value:t.num1,callback:function(e){t.num1=e},expression:"num1"}}),t._v("  测试eleUi是否用\n    "),n("ul",t._l(t.list,function(e,r){return n("li",{key:r},[n("time",{domProps:{textContent:t._s(t.$utils.goodTime(e.create_at))}}),t._v(" "),n("router-link",{attrs:{to:"/content/"+e.id}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)}))],1),t._v(" "),n("Footer")],1)},staticRenderFns:[]},f=n("Z0/y")(d,p,!1,null,null,null).exports,_={components:{myHeader:l,myFooter:c},data:function(){return{id:this.$route.params.id,dat:{}}},created:function(){this.getData()},methods:{getData:function(){var t=this;console.log(this.$route),this.$api.get("topic/"+this.id,null,function(e){t.dat=e.data})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("myHeader"),t._v(" "),n("h2",{domProps:{textContent:t._s(t.dat.title)}}),t._v(" "),n("p",[t._v("作者："+t._s(t.dat.author.loginname)+" 发表于："+t._s(t.$utils.goodTime(t.dat.create_at)))]),t._v(" "),n("hr"),t._v(" "),n("article",{domProps:{innerHTML:t._s(t.dat.content)}}),t._v(" "),n("h3",[t._v("网友回复：")]),t._v(" "),n("ul",t._l(t.dat.replies,function(e,r){return n("li",{key:r},[n("p",[t._v("评论者："+t._s(e.author.loginname)+" 评论于："+t._s(t.$utils.goodTime(e.create_at)))]),t._v(" "),n("article",{domProps:{innerHTML:t._s(e.content)}})])})),t._v(" "),n("myFooter")],1)},staticRenderFns:[]},h=n("Z0/y")(_,m,!1,null,null,null).exports;r.default.use(i.a);var v=new i.a({routes:[{path:"/",component:f},{path:"/content/:id",component:h}]}),g={goodTime:function(t){var e=(new Date).getTime()-new Date(t).getTime(),n=e/31104e6,r=e/2592e6,a=e/6048e5,o=e/864e5,i=e/36e5,s=e/6e4;return n>=1?"发表于 "+~~n+" 年前":r>=1?"发表于 "+~~r+" 个月前":a>=1?"发表于 "+~~a+" 周前":o>=1?"发表于 "+~~o+" 天前":i>=1?"发表于 "+~~i+" 个小时前":s>=1?"发表于 "+~~s+" 分钟前":"刚刚"}},T=n("3cXf"),y=n.n(T),E="https://cnodejs.org/api/v1",$=n("aozt");function w(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function C(t,e,n,r,a){n&&(n=function t(e){for(var n in e)null===e[n]&&delete e[n],"string"===w(e[n])?e[n]=e[n].trim():"object"===w(e[n])?e[n]=t(e[n]):"array"===w(e[n])&&(e[n]=t(e[n]));return e}(n)),$({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null,baseURL:E,withCredentials:!1}).then(function(t){!0===t.data.success?r&&r(t.data):a?a(t.data):window.alert("error: "+y()(t.data))}).catch(function(t){var e=t.response;t&&window.alert("api error, HTTP CODE: "+e.status)})}var F={get:function(t,e,n,r){return C("GET",t,e,n,r)},post:function(t,e,n,r){return C("POST",t,e,n,r)},put:function(t,e,n,r){return C("PUT",t,e,n,r)},delete:function(t,e,n,r){return C("DELETE",t,e,n,r)}},D=n("wi/X"),L=n.n(D);n("ENLC");r.default.use(L.a),r.default.prototype.$api=F,r.default.prototype.$utils=g,r.default.config.productionTip=!1,new r.default({el:"#app",router:v,template:"<App/>",components:{App:o}})},Y8RT:function(t,e){}},["NHnr"]);