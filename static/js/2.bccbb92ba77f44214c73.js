webpackJsonp([2],{"dLd/":function(t,e,a){t.exports=a.p+"static/img/logo.0e3a2b5.png"},"h/j6":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=a("dLd/"),n=a.n(c),s={name:"module-blog-category-tag",created:function(){this.ct={articles:3,avatar:"/tag/vue.png",id:7,tagname:"Vue"}},watch:{$route:"getCategoryOrTagAndArticles"},data:function(){return{defaultAvatar:n.a,ct:{},article:{query:{tagId:"",categoryId:""}}}},computed:{title:function(){return"tag"===this.$route.params.type?this.ct.tagname+" - 标签 - For Fun":this.ct.categoryname+" - 文章分类 - For Fun"}},methods:{getCategoryOrTagAndArticles:function(){},getCategoryDetail:function(t){},getTagDetail:function(t){},getArticlesByCategory:function(t){},getArticlesByTag:function(t){}},components:{"module-article-scroll-page":function(){return a.e(13).then(a.bind(null,"4NU1"))}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"module-blog-category-tag"},[a("el-container",{staticClass:"me-ct-container"},[a("el-main",[a("div",{staticClass:"me-ct-title"},["tag"===this.$route.params.type?[a("img",{staticClass:"me-ct-picture",attrs:{src:t.ct.avatar}}),t._v(" "),a("h3",{staticClass:"me-ct-name"},[t._v(t._s(t.ct.tagname))])]:[a("img",{staticClass:"me-ct-picture",attrs:{src:t.ct.avatar}}),t._v(" "),a("h3",{staticClass:"me-ct-name"},[t._v(t._s(t.ct.categoryname))]),t._v(" "),a("p",[t._v(t._s(t.ct.description))])],t._v(" "),a("span",{staticClass:"me-ct-meta"},[t._v(t._s(t.ct.articles)+" 文章")])],2),t._v(" "),a("div",{staticClass:"me-ct-articles"},[a("module-article-scroll-page")],1)])],1)],1)},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("zgAM")},null,null);e.default=i.exports},zgAM:function(t,e){}});
//# sourceMappingURL=2.bccbb92ba77f44214c73.js.map