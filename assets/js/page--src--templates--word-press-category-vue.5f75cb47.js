(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Wsvf:function(t,a,e){"use strict";e.d(a,"a",(function(){return n}));e("Kw5r");var s=e("DOVJ"),i=(e("Y6W1"),e("ma9I"),e("2B1R"),e("qePV"),e("rB9j"),e("UxlC"),e("VTBJ")),r=e("fVfk"),n={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,a){var e=a.props,n=a.data,o=a.parent,u=e.info,p=e.showLinks,c=e.showNavigation,g=e.ariaLabel,f=function(t,a){var e=t.currentPage,s=void 0===e?1:e,i=t.totalPages,r=void 0===i?1:i,n=Math.ceil(a/2),l=Math.floor(s-n),o=Math.floor(s+n);r<=a?(l=0,o=r):s<=n?(l=0,o=a):s+n>=r&&(l=r-a,o=r);for(var u=[],p=l+1;p<=o;p++)u.push(p);return{current:s,total:r,start:l,end:o,pages:u}}(u,e.range),d=f.current,v=f.total,b=f.pages,h=f.start,C=f.end,L=Object(r.d)(o.$route),y=function(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";a===d&&(n=e.ariaCurrentLabel);var u={to:l(L,a),exact:!0};return e.activeLinkClass&&(u.activeClass=e.activeLinkClass),e.exactActiveLinkClass&&(u.exactActiveClass=e.exactActiveLinkClass),t(s.a,{class:[e.linkClass,o],attrs:Object(i.a)(Object(i.a)({},u),{},{"aria-label":n.replace("%n",a),"aria-current":d===a})},[r])},x=p?b.map((function(t){return y(t,t,e.ariaLinkLabel)})):[];if(c){var w=e.firstLabel,m=e.prevLabel,P=e.nextLabel,S=e.lastLabel,k=e.ariaFirstLabel,j=e.ariaPrevLabel,N=e.ariaNextLabel,O=e.ariaLastLabel,_=e.firstClass,$=e.prevClass,J=e.nextClass,B=e.lastClass,G=e.navClass;d>1&&x.unshift(y(d-1,m,j,[$,G])),h>0&&x.unshift(y(1,w,k,[_,G])),d<v&&x.push(y(d+1,P,N,[J,G])),C<v&&x.push(y(v,S,O,[B,G]))}return x.length<2?null:t("nav",Object(i.a)(Object(i.a)({},n),{},{attrs:{role:"navigation","aria-label":g}}),x)}};function l(t,a){var e=/\/$/.test(t)?"/":"";return a>1?Object(r.g)(t)+"/".concat(a).concat(e):t}e("6NbQ")},nJNL:function(t,a,e){"use strict";var s={props:{post:{type:Object,required:!0}}},i=e("KHd+"),r=Object(i.a)(s,(function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"border flex flex-col"},[a("div",{staticClass:"relative"},[a("g-image",{staticClass:"mx-auto",attrs:{src:"https://picsum.photos/id/104/400",width:"400"}})],1),a("div",{staticClass:"content flex-grow  py-3 px-2"},[a("div",{staticClass:"title w-full"},[a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-2xl",domProps:{innerHTML:this._s(this.post.title)}})]),a("div",{staticClass:"description"},[a("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.post.excerpt)}})])]),a("div",{staticClass:"separetor w-full border"}),a("div",{staticClass:"action flex flex-wrap"},[a("button",{staticClass:"p-2"},[this._v("share")]),a("div",{staticClass:"flex-auto"}),a("g-link",{attrs:{to:this.post.path}},[a("button",{staticClass:"p-2"},[this._v("Read more")])])],1)])}),[],!1,null,null,null);a.a=r.exports},xgR8:function(t,a,e){"use strict";e.r(a);var s=e("Wsvf"),i=e("nJNL"),r={components:{Pager:s.a,Post:i.a},metaInfo:function(){return{title:this.$page.wordPressCategory.title}}},n=e("KHd+"),l=null,o=Object(n.a)(r,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",[this._v("Category: "+this._s(this.$page.wordPressCategory.title)+" ")]),a("ul",{staticClass:"post-list"},this._l(this.$page.wordPressCategory.belongsTo.edges,(function(t){var e=t.node;return a("li",{key:e.id},[a("Post",{attrs:{post:e}})],1)})),0),a("Pager",{attrs:{info:this.$page.wordPressCategory.belongsTo.pageInfo}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(o);a.default=o.exports}}]);