(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(t,e,n){"use strict";(function(r){n.d(e,"a",function(){return t});var t={limits:[30,40,50,60,70,80,90,100],data:{},state:{url:"",route:"",scrollPos:1,limit:30,profile:""},reqs:{urls:["/posts","/comments","/albums","/photos","/todos","/users"].reduce(function(t,e){var n;return t[e]=(n=e,function(t,e){return"https://jsonplaceholder.typicode.com".concat(n,"?_start=").concat(t,"&_limit=").concat(e)}),t},{}),http:function(n){return function(e){return function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return r.request({url:n,method:e,data:t})}}}},showModes:!1,showLimits:!1,showTabs:function(t){t.tabsShowing=!t.tabsShowing},tabsShowing:!1}}).call(this,n(0))},,,function(t,e,n){"use strict";(function(n){var t={view:function(t){var e=t.attrs.children;return n("section.content",{id:"content"},e)}};e.a=t}).call(this,n(0))},function(t,e,n){"use strict";(function(n){var t={view:function(t){var e=t.children;return n(".navigationModal",e)}};e.a=t}).call(this,n(0))},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,n){"use strict";n.r(e);var r=n(0),u=n.n(r),o=n(1),i=function(t){var e=t.attrs.model,n="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z",r="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z",o=function(t){return u.a.render(t,u()("path",{xmlns:"http://www.w3.org/2000/svg",d:e.tabsShowing?n:r}))};return{oncreate:function(t){var e=t.dom;return o(e)},onupdate:function(t){var e=t.dom;return o(e)},view:function(t){var e=t.attrs.model;return u()("svg.hamburger",{onclick:function(){return e.showTabs(e)}})}}},a=n(3);function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.n(a).a;var c=function(t){var e=t.dom;e.style.opacity=0,e.classList.toggle("slideRight"),e.style.opacity=1},l={onbeforeremove:function(t){var e=t.dom;return new Promise(function(){s(e.children).reverse().map(function(t,e){return setTimeout(function(){t.style.display="none"},100*e)})})},view:function(t){var r=t.attrs.model;return u()(".limits",r.limits.map(function(t,e){return u()("button.btn.limit",{oncreate:(n=e,function(t){var e=t.dom;e.style.opacity=0,setTimeout(function(){e.classList.toggle("slideDown"),e.style.opacity=1},200*(n+1))}),onclick:function(){r.state.limit=t,r.showLimits=!1},key:e},t);var n}))}},d={view:function(t){var e=t.attrs.model;return u()(".changeLimits",[u()("button.changeLimitBtn",{onclick:function(){return e.showLimits=!e.showLimits}},"Change Limit"),e.showLimits&&u()(l,{model:e})])}},m={view:function(t){var e=t.attrs.model;return u()("header.header",{id:"header"},[u()(i,{model:e}),u()(d,{model:e})])}},f={view:function(){return u()("footer.footer",{id:"footer"},"Footer")}},h=n(4),v=function(t){var n=t.attrs.key;return{view:function(t){var e=t.attrs.tab;return u()("a.tab",{key:n,id:"".concat(e),href:"".concat(e),oncreate:u.a.route.link},e.split("/")[1])}}},p=function(t){var e=t.attrs.model,r=Object.keys(e.reqs.urls);return{oncreate:c,view:function(t){var n=t.attrs.model;return u()("aside.sidebar slide-left",{id:"sidebar"},r.map(function(t,e){return u()(v,{key:e,active:n.state.route==t,tab:t})}))}}},w=n(5),g=function(t){var n=t.attrs.model;return{view:function(t){var e=t.children;return u()("section.layout",{id:"layout"},e?[u()(m,{model:n}),"phone"==n.state.profile?n.tabsShowing?u()(w.a,u()(p,{model:n})):null:u()(p,{model:n}),u()(h.a,{model:n,children:e}),u()(f,{model:n})]:[])}}},b=function(i){return function(t){i.state.route=t,i.data[t]?i.data[t]:i.data[t]={data:[],limit:1};var e,n,r,o=i.data[t].data.length;n=(r=i).reqs.urls[t](o,i.state.limit),e=t,u.a.request({url:n,method:"GET",extract:function(t){return r.data[e].limit=parseInt(t.getResponseHeader("x-total-count")),JSON.parse(t.responseText)}}).then(function(t){return r.data[e].data=r.data[e].data.concat(t),r})}},y=u()(".holder",{style:{width:"100%",height:"100%"}},[u()(".preloader",[u()("div"),u()("div"),u()("div"),u()("div"),u()("div"),u()("div"),u()("div")])]),k={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.title,i=r.body;return u()(".grid-item.post",{id:"post-".concat(n)},[u()("h1",o),u()("p",i)])}},L={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.email,i=r.name,a=r.body;return u()(".grid-item.comment",{id:"comment-".concat(n)},[u()("h1",i),u()("p",o),u()("p",a)])}},x={view:function(t){var e=t.attrs,n=e.key,r=e.item.title;return u()(".grid-item.album",{id:"album-".concat(n)},[u()("h1",r)])}},T={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.title,i=r.thumbnailUrl;return u()(".grid-item.photo",{id:"photo-".concat(n)},[u()("h1",{style:{padding:"4px",right:"auto",flex:3}},o),u()("img",{style:{left:"auto",flex:"1 150px"},src:i})])}},S=function(t){var o=t.attrs.item.completed;return{view:function(t){var e=t.attrs,n=e.key,r=e.item.title;return u()(".grid-item.todo",{id:"todo-".concat(n),key:n},[u()("input[type=checkbox].fancyCheckBox",{onclick:function(){o=!o},checked:o},"Done"),u()("h1",r)])}}},q={view:function(t){var e=t.attrs,n=e.key,r=e.item,o=r.email,i=r.name,a=r.phone,s=r.username,c=r.website;return u()(".grid-item.user",{id:"user-".concat(n),key:n},[u()(".",[u()("label.left",{for:"name"},"name"),u()("p.right",{name:"name"},i)]),u()(".",[u()("label.left",{for:"email"},"email"),u()("p.right",{name:"email"},o)]),u()(".",[u()("label.left",{for:"phone"},"phone"),u()("p.right",{name:"phone"},a)]),u()(".",[u()("label.left",{for:"username"},"username"),u()("p.right",{name:"username"},s)]),u()(".",[u()("label.left",{for:"website"},"website"),u()("p.right",{name:"website"},c)])])}},A={view:function(t){var o,r=t.attrs.model,e=r.state.route,i=function(t){switch(t){case"/posts":return k;case"/comments":return L;case"/albums":return x;case"/photos":return T;case"/todos":return S;case"/users":return q}}(e),n=r.data[e].data;return u()("section.component",{id:"component",route:r.state.route,onscroll:(o=r,function(t){var e=o.state.route,n=o.data[e].data.length,r=10*n*o.state.scrollPos;t.target.scrollTop-o.state.scrollPos>=r&&(o.state.scrollPos++,t.target.scrollTop,n<o.data[e].limit&&b(o)(e))})},0==n.length?u()(".loader",y):n.map(function(t,e){return u()(i,{oncreate:(n=e,function(t){var e=t.dom;return e.style.opacity=0,setTimeout(function(){e.classList.toggle("stretchRight"),e.style.opacity=1},100*n+20)}),key:e,item:t,model:r});var n}))}},P=function(o){return{onmatch:function(t,e){return n=e,(r=o).state.scrollPos=1,r.tabsShowing=!1,b(r)(n);var n,r},render:function(){return u()(g,{model:o},u()(A,{model:o}))}}},j=(n(9),n(10),n(11),document.body);function z(t){return t<668?"phone":t<920?"tablet":"desktop"}var H,M=window.innerWidth;o.a.state.profile=z(M),function t(){var e=window.innerWidth;if(M!==e){M=e;var n=o.a.state.profile;o.a.state.profile=z(e),n!=o.a.state.profile&&u.a.redraw()}requestAnimationFrame(t)}(),u.a.route(j,"/posts",(H=o.a,{"/posts":P(H),"/comments":P(H),"/albums":P(H),"/photos":P(H),"/todos":P(H),"/users":P(H)}))}],[[12,1,2]]]);
//# sourceMappingURL=main-chunk.js.map