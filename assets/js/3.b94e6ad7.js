(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{409:function(t,n,e){},411:function(t,n,e){"use strict";e(409)},416:function(t,n,e){},417:function(t,n,e){},418:function(t,n,e){},427:function(t,n,e){"use strict";e(416)},428:function(t,n,e){"use strict";e(417)},429:function(t,n,e){"use strict";var r=e(16),i=e(7),o=e(228),a=e(35),s=e(11),u=e(34),c=e(430),p=e(63),l=e(5),f=e(42),v=e(87).f,g=e(41).f,m=e(12).f,h=e(239).trim,_=i.Number,d=_.prototype,b="Number"==u(f(d)),y=function(t){var n,e,r,i,o,a,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(n=(c=h(c)).charCodeAt(0))||45===n){if(88===(e=c.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,N=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof N&&(b?l((function(){d.valueOf.call(e)})):"Number"!=u(e))?c(new _(y(n)),e,N):y(n)},I=r?v(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;I.length>$;$++)s(_,x=I[$])&&!s(N,x)&&m(N,x,g(_,x));N.prototype=d,d.constructor=N,a(i,"Number",N)}},430:function(t,n,e){var r=e(9),i=e(127);t.exports=function(t,n,e){var o,a;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(a=o.prototype)&&a!==e.prototype&&i(t,a),t}},431:function(t,n,e){var r=e(236),i=e(229),o=e(432),a=e(436);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},432:function(t,n,e){var r=e(133),i=e(433),o=e(126);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var c=n[a],p=r(t,c);e(p,c)&&i(u,o(c,t),p)}return u}},433:function(t,n,e){var r=e(434),i=e(126),o=e(131),a=e(86),s=e(64);t.exports=function(t,n,e,u){if(!a(t))return t;for(var c=-1,p=(n=i(n,t)).length,l=p-1,f=t;null!=f&&++c<p;){var v=s(n[c]),g=e;if("__proto__"===v||"constructor"===v||"prototype"===v)return t;if(c!=l){var m=f[v];void 0===(g=u?u(m,v,f):void 0)&&(g=a(m)?m:o(n[c+1])?[]:{})}r(f,v,g),f=f[v]}return t}},434:function(t,n,e){var r=e(435),i=e(130),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},435:function(t,n,e){var r=e(237);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},436:function(t,n,e){var r=e(230),i=e(437),o=e(439);t.exports=function(t){return r(t,o,i)}},437:function(t,n,e){var r=e(129),i=e(438),o=e(231),a=e(232),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},438:function(t,n,e){var r=e(235)(Object.getPrototypeOf,Object);t.exports=r},439:function(t,n,e){var r=e(233),i=e(440),o=e(132);t.exports=function(t){return o(t)?r(t,!0):i(t)}},440:function(t,n,e){var r=e(86),i=e(234),o=e(441),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},441:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},442:function(t,n,e){"use strict";e(418)},447:function(t,n,e){"use strict";e.r(n);e(2);var r=e(29),i=(e(15),e(17),e(21),{data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,446,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}}),o=(e(427),e(10)),a=Object(o.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(e(428),Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,e(429),e(89)),u=e.n(s),c=e(431),p=e.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=(Object(o.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,{components:{NavigationIcon:r.g,ClockIcon:r.a},data:function(){return{paginationComponent:null}},created:function(){this.paginationComponent=this.getPaginationComponent()},computed:{pages:function(){return this.$pagination.pages}},methods:{getPaginationComponent:function(){return a}}}),v=(e(442),e(411),Object(o.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts"},t._l(t.pages,(function(n){return e("div",{staticClass:"ui-post"},[e("div",{staticClass:"ui-post-title"},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),e("div",{staticClass:"ui-post-summary"},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n        ")]),t._v(" "),n.frontmatter.author?e("div",{staticClass:"ui-post-author"},[e("NavigationIcon"),t._v(" "),e("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?e("div",{staticClass:"ui-post-date"},[e("ClockIcon"),t._v(" "),e("span",[t._v(t._s(new Date(n.frontmatter.date.trim()).toDateString()))])],1):t._e()])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null));n.default=v.exports}}]);