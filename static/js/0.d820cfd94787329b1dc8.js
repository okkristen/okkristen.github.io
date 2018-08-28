webpackJsonp([0],{IWMd:function(e,t){},jNt5:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("lDYn"),s=n.n(i),a="/* 又到了招聘季啦 !\n        用 vue 做了个能自动生成简历的小项目\n        能支持简历编辑和生成 PDF格式的简历哦!\n        如果想定制化可以点击左上角的 Logo\n        clone 本项目进行修改,顺便star一下哈! ^-^\n     ------------------------------------*/\n     /* 好了,开始制作简历\n        先对左边进行布局\n     ------------------------------------*/\n     .section-left{\n         float: left;\n         width: 30%;\n         height: 100%;\n         text-align: center;\n         color: #313131;\n         line-height: 1.8;\n\n     }\n     /* 右边布局\n      ------------------------------------*/\n     .section-right{\n         float: left;\n         width: 69%;\n         height: 100%;\n         padding: 1rem;\n         box-sizing: border-box;\n         background: #ffffff;\n\n     }\n     .section-left i{\n     color: rgb(151, 151, 151);\n     font-size: 0.5rem;\n\n    }\n    .section-left h2{\n        font-size: 1.5rem;\n    }\n    .section-left h3{\n        font-size: 0.5rem;\n    }\n    .section-left p{\n        font-size: 0.5rem;\n    }\n    .section-left li {\n      list-style: none;\n    }\n    /* 头部信息\n    ------------------------------------*/\n    .section-left .head{\n        padding-top: 2rem;\n        background: rgb(236,236,236);\n\n    }\n    .head ul{\n        width: 100%;\n        margin: 1rem 0;\n        border-top: 2px solid rgba(151, 151, 151,0.5);\n        border-bottom:2px solid rgba(151, 151, 151,0.5);\n    }\n    .head ul li{\n        float: left;\n        width: 32.1%;\n    }\n    .head ul li + li{\n        border-left: 2px solid rgba(151, 151, 151,0.5);\n    }\n    .section-left .item-title{\n        border-bottom: 2px solid rgba(151, 151, 151,0.5);\n        padding: 0 0.4rem;\n    }\n    /* 教育背景\n    ------------------------------------*/\n    .section-left .edu{\n        line-height: 2;\n        margin-bottom: 0.8rem;\n    }\n    .edu .honor-title{\n        font-size: 1.8rem;\n        color: #3d3d3d;\n        font-weight: 500;\n    }\n    /* 兴趣爱好\n    ------------------------------------*/\n    .section-left .interest{\n        margin-bottom: 0.8rem;\n\n    }\n    .section-left .inte-span{\n        display: inline-block;\n        font-size: 0.4rem;\n        border: 1px solid rgba(151, 151, 151,0.5);\n        padding: 0 1rem;\n        margin: 0.2rem 1rem;\n        border-radius: 2.5rem;\n    }\n    /* 技能特长\n    ------------------------------------*/\n    .section-left .skill{\n        width: 100%;\n    }\n    .skill h3{\n        margin-bottom: 1rem;\n    }\n    .skill .sk{\n      position: relative;\n      width: 98%;\n      margin: 0 auto;\n      text-align: left;\n      text-indent: 1.5rem;\n      font-size: 0.6rem;\n    }\n    .skill .sk-wrap{\n        position: absolute;\n        top:0;\n        right: 0;\n        bottom: 0;\n        margin: auto 0;\n        width: 70%;\n        height: 1rem;\n        border-radius: 0.5rem;\n        background:  rgba(151, 151, 151,0.5);\n    }\n    .skill .sk-per{\n        display: block;\n        width: 90%;\n        height: 100%;\n        background: rgba(151, 151, 151,0.9);\n        border-radius: 0.4rem;\n    }\n\n    /* 右边 博客链接\n     ------------------------------------*/\n    .section-right .blog-box{\n        margin-bottom: 4rem;\n    }\n    .section-right .blog{\n        float: right;\n        font-size: 1.4rem;\n        margin-right: 2rem;\n    }\n    .blog .title-name{\n        font-size: 1rem;\n    }\n    .blog .title-name:after{\n        content: '';\n        height: 2px;\n        width: 100%;\n        display:block;\n        margin-bottom: 2px;\n    }\n    .blog .link{\n        line-height: 2rem;\n        margin-bottom: 2px;\n        padding-right: 0.5rem;\n\n    }\n    .blog .link i{\n        margin-right: 1rem;\n    }\n    .blog .link a{\n        color: #313131;\n    }\n    /* 工作经验\n     ------------------------------------*/\n    .experience{\n        padding: 2.5rem;\n        -webkit-box-sizing: border-box;\n        box-sizing: border-box;\n        font-size: 1rem;\n        margin-bottom: 1rem;\n        /*box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);*/\n    }\n    .experience .title{\n        width: 100%;\n        height: 2rem;\n    }\n    .experience .title:after{\n        content: '';\n        height: 2px;\n        width: 100%;\n        display:block;\n        margin-bottom: 2px;\n        background: linear-gradient(to right, #ffffff, rgba(135, 135, 135, 0.5) 50%, #ffffff);\n    }\n    .item {\n      text-align: -webkit-auto;\n    }\n    .title .title-name{\n        font-size: 1.8rem;\n        display: inline-block;\n    }\n    .title .title-date{\n        float: right;\n    }\n    .experience .item-title{\n        padding: 0.6rem 0;\n        color: #42b983;\n    }\n    .experience .item-title span{\n        display: inline-block;\n    }\n    .item-title .item-name{\n        font-size: 1.6rem;\n    }\n    .item-title .item-skill{\n\n    }\n    .item-title .item-date{\n        float: right;\n    }\n    .experience .item ul{\n        margin-left: 1.5rem;\n        list-style: circle;\n    }\n    .self-evaluation .title{\n        margin-bottom: 1rem;\n    }\n    .self-evaluation p{\n        line-height: 1.4;\n    }\n    /* 编辑结束 !!!!\n       界面设计丑了点,欢迎star和issue\n       能提供好看的设计图那更是感激不尽!!!!\n     ------------------------------------*/",l={data:function(){return{msg:"hello vue",ttc:80,resStyleCode:"",pfdSize:{width:"",height:""},resumeData:s.a,time:null}},props:{},mounted:function(){this.setTimeout()},methods:{responseStyleCode:function(e){this.resStyleCode="<style>"+e+"</style>"},setTimeout:function(){var e=0,t=this;t.time=window.setInterval(function(){t.responseStyleCode(a.substring(0,e)),e===a.length?window.clearTimeout(t.time):e+=1},5)}},components:{}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"show-resume"}},[n("div",{staticClass:"resume-content clearfloat",style:{width:e.pfdSize.width+"px",height:e.pfdSize.height+"px"},attrs:{id:"resume_content"}},[n("section",{staticClass:"section-left"},[n("div",{staticClass:"head"},[n("h2",[e._v(e._s(e.resumeData.head.name))]),e._v(" "),n("h3",[e._v("求职意向:"+e._s(e.resumeData.head.intention))]),e._v(" "),e._m(0),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.tel))]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.email))]),e._v(" "),n("ul",{staticClass:"clearfloat"},[n("li",[n("p",[e._v("住址")]),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.address))])]),e._v(" "),n("li",[n("p",[e._v("年龄")]),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.age))])]),e._v(" "),n("li",[n("p",[e._v("性别")]),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.sex))])])])]),e._v(" "),n("div",{staticClass:"edu"},[e._m(2),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.school)+" ("+e._s(e.resumeData.head.graduation)+")")]),e._v(" "),n("p",[e._v(e._s(e.resumeData.head.graduationTime))]),e._v(" "),n("p",[e._v("专业:"+e._s(e.resumeData.head.major))]),e._v(" "),n("p",{staticClass:"honor-title"},[e._v("荣获")]),e._v(" "),e._l(e.resumeData.head.honor.split("、"),function(t,i){return n("p",{key:i},[e._v(e._s(t))])})],2),e._v(" "),n("div",{staticClass:"interest"},[e._m(3),e._v(" "),n("p",e._l(e.resumeData.head.interest.split("、"),function(t,i){return n("span",{key:i,staticClass:"inte-span"},[e._v(e._s(t))])}))]),e._v(" "),n("div",{staticClass:"skill"},[e._m(4),e._v(" "),e._l(e.resumeData.head.speciality.split("、"),function(t,i){return n("div",{key:i,staticClass:"sk"},[e._v(e._s(t)+"\n                    "),n("div",{staticClass:"sk-wrap"},[n("span",{staticClass:"sk-per",style:{width:e.resumeData.head.specialityPer.split("、")[i]+"%"}})])])})],2)]),e._v(" "),n("section",{staticClass:"section-right"},[n("div",{staticClass:"experience work-experience"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-name"},[e._v("工作经验")]),e._v(" "),n("div",{staticClass:"title-date"},[e._v(e._s(e.resumeData.workExperience.time))])]),e._v(" "),e._l(e.resumeData.workExperience.experience,function(t,i){return n("div",{key:i,staticClass:"show"},[t.name?n("div",{staticClass:"item"},[n("div",{staticClass:"item-title"},[n("span",{staticClass:"item-name"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"item-skill"},[e._v("/ "+e._s(t.skill))]),e._v(" "),n("span",{staticClass:"item-date"},[e._v(e._s(t.time))])]),e._v(" "),n("ul",e._l(t.describe,function(t,i){return n("li",{key:i},[e._v(e._s(t))])}))]):e._e()])})],2),e._v(" "),n("div",{staticClass:"experience project-experience"},[n("div",{staticClass:"title"},[n("div",{staticClass:"title-name"},[e._v("项目经验")]),e._v(" "),n("div",{staticClass:"title-date"},[e._v(e._s(e.resumeData.projectExperience.time))])]),e._v(" "),e._l(e.resumeData.projectExperience.experience,function(t,i){return n("div",{key:i,staticClass:"show"},[t.name?n("div",{staticClass:"item"},[n("div",{staticClass:"item-title"},[n("span",{staticClass:"item-name"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"item-skill"},[e._v("/ "+e._s(t.skill))]),e._v(" "),n("span",{staticClass:"item-date"},[e._v(e._s(t.time))])]),e._v(" "),n("ul",e._l(t.describe,function(t,i){return""!=t?n("li",{key:i},[e._v(e._s(t))]):e._e()}))]):e._e()])})],2),e._v(" "),n("div",{staticClass:"experience skill-experience"},[e._m(5),e._v(" "),e._l(e.resumeData.skill,function(t,i){return n("div",{key:i,staticClass:"show"},[t.type?n("div",{staticClass:"item"},[n("div",{staticClass:"item-title"},[n("span",{staticClass:"item-name"},[e._v(e._s(t.type))])]),e._v(" "),n("ul",e._l(t.describe,function(t,i){return n("li",{key:i},[e._v(e._s(t))])}))]):e._e()])})],2),e._v(" "),n("div",{staticClass:"experience self-evaluation"},[e._m(6),e._v(" "),e._l(e.resumeData.selfAssessment,function(t,i){return n("p",{key:i,staticClass:"eval-detail"},[e._v(e._s(t))])})],2)])]),e._v(" "),n("div",{domProps:{innerHTML:e._s(e.resStyleCode)}})])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("i",{staticClass:"icon-phone icon-2x"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("i",{staticClass:"icon-envelope-alt icon-2x"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("span",{staticClass:"item-title"},[this._v("教育背景")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("span",{staticClass:"item-title"},[this._v("兴趣爱好")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("span",{staticClass:"item-title"},[this._v("技能特长")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"title-name"},[this._v("掌握技能")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"title"},[t("div",{staticClass:"title-name"},[this._v("自我评价")])])}]};var o=n("VU/8")(l,r,!1,function(e){n("IWMd")},"data-v-74b427bd",null);t.default=o.exports},lDYn:function(e,t){e.exports={head:{name:"杨思静",intention:"后端开发",tel:"18590332584",email:"okkristen@foxmail.com",address:"浙江温州",age:"1995.05.08",sex:"男",school:"金华职业技术学院",graduation:"专科",graduationTime:"2013-9-1 至 2016-7-1",major:"建筑工程技术",honor:"暂无",interest:"骑行、编程、音乐",speciality:"java、js、css、html、Vue",specialityPer:"70、50、40、60、50"},blogLink:{github:"https://github.com/okkristen",blog:""},workExperience:{time:"2017-08-21~至今",experience:[{name:"江苏启程感知科技有限公司",skill:"后端工程师",time:"",describe:["1、负责研发公司应用软件的模块设计、开发和交付","2、负责编码，单元测试","3、按照功能组件的详细设计","4、参与新知识的学习和培训","5、修复程序BUG","6、参与与其业务相关的需求变更评审","7、完成上级交办的其他事宜","8、编写技术设计文档"]}]},projectExperience:{time:"项目时间",experience:[{name:"买钢乐供应链系统BOSS子系统",skill:"java,duddo",time:"2018.01~2018.05",describe:["xxxxxxxxxxxx"]},{name:"智慧河道",skill:"java,vue",time:"2018.05~2018.09",describe:["xxxxxxxxxxxx"]}]},skill:[{type:"后端",describe:["java"]},{type:"前端",describe:["vue"]}],selfAssessment:[" 本人性格开朗，对待工作认真负责，待人真诚有礼貌，","善于沟通、协调有较强的组织能力与团队精神。","活泼开朗、乐观上进、有爱心。上进心强、","勤于学习能不断进步自身的能力与综合素质,","做事情有主见，敢于承担责任。"]}}});
//# sourceMappingURL=0.d820cfd94787329b1dc8.js.map