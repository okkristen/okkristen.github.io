webpackJsonp([17],{"KcJ+":function(e,t){},bXXf:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={name:"module-header",props:{activeIndex:String,simple:{type:Boolean,default:!1}},data:function(){return{}},computed:{user:function(){return{}}},methods:{logout:function(){var e=this,t=this;this.$store.dispatch("logout").then(function(){e.$router.push({path:"/"})}).catch(function(e){"error"!==e&&t.$message({message:e,type:"error",showClose:!0})})}},components:{"module-menu":function(){return n.e(16).then(n.bind(null,"HqDH"))}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"module-header"},[t("el-row",{staticClass:"width-100 height-100"},[t("el-col",{attrs:{span:6}},[this._v("\n       \n  ")]),this._v(" "),t("el-col",{attrs:{span:12}},[t("module-menu")],1),this._v(" "),t("el-col",{attrs:{span:6}},[this._v("\n     \n  ")])],1)],1)},staticRenderFns:[]};var r=n("VU/8")(s,o,!1,function(e){n("KcJ+")},null,null);t.default=r.exports}});
//# sourceMappingURL=17.8eda0f07d0b1dc9b7cb8.js.map