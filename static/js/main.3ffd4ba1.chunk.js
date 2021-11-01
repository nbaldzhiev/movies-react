(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),i=(n(11),n(2)),o=n.n(i),l=n(3),u=n(4),p=(n(13),n(14),n(0));var j=function(e){var t=e.movie,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],s=a[1],i="c325c6385fbc64f5360ebbd46b419ec4",j="https://api.themoviedb.org/3/";function b(){return(b=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(j+"configuration?api_key=".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n.images.secure_base_url),s(n.images.secure_base_url+"w342");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(c.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]);var h={backgroundImage:"linear-gradient(to bottom right, rgba(1.57%, 8.63%, 14.51%, 1.00), rgba(1.57%, 8.63%, 14.51%, 0.84)), url(https://image.tmdb.org/t/p/w1280/".concat(t.backdrop_path,")"),objectFit:"cover"};return console.log(t),Object(p.jsxs)("div",{className:"movie-item",style:h,children:[Object(p.jsx)("div",{className:"image-container",children:Object(p.jsx)("img",{className:"movie-poster",src:r+t.poster_path,alt:"movie poster"})}),Object(p.jsxs)("div",{className:"info-container",children:[Object(p.jsx)("h1",{className:"movie-title",children:"movie"===t.media_type?t.original_title:t.media_type?t.name:t.original_title}),Object(p.jsxs)("p",{className:"release-date",children:[t.release_date," (",Object(p.jsx)("span",{className:"original_language",children:t.original_language}),")"]}),Object(p.jsx)("h3",{className:"overview-title",children:"Overview"}),Object(p.jsxs)("p",{className:"overview",children:[t.overview.slice(0,410),"..."]}),Object(p.jsxs)("p",{className:"rating-title",children:[Object(p.jsx)("strong",{children:"PMDB"})," Rating"]}),Object(p.jsxs)("div",{className:"rating",children:[Object(p.jsx)("img",{className:"rating-image",alt:"rating-star",src:"https://cdn-icons-png.flaticon.com/512/143/143547.png",width:"28",height:"28",style:{display:"block"}}),Object(p.jsxs)("div",{className:"rating-stats",children:[Object(p.jsxs)("p",{className:"rating-value",children:[t.vote_average,"/10"]}),Object(p.jsx)("p",{className:"rating-count",children:t.vote_count})]})]})]})]})};var b=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(u.a)(r,2),i=s[0],b=s[1],h="c325c6385fbc64f5360ebbd46b419ec4",d="https://api.themoviedb.org/3/",m="search/multi",v="movie/now_playing",f="movie/top_rated";function g(){return(g=Object(l.a)(o.a.mark((function e(t){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,fetch("".concat(d).concat(m,"?api_key=").concat(h,"&query=").concat(n));case 5:return c=e.sent,e.next=8,c.json();case 8:a=e.sent,b(a.results);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(d).concat(v,"?api_key=").concat(h));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,console.log(c),b(c.results);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(d).concat(f,"?api_key=").concat(h));case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,b(c.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("header",{children:Object(p.jsx)("div",{className:"header-bar",children:Object(p.jsx)("p",{children:"PMDB - The Poor Man's Movie Database"})})}),Object(p.jsxs)("main",{children:[Object(p.jsxs)("div",{id:"search-section",children:[Object(p.jsx)("h1",{children:"Welcome."}),Object(p.jsx)("h3",{children:"Millions of movies, TV shows and people to discover. Explore now."}),Object(p.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(p.jsx)("label",{htmlFor:"inputQuery",children:Object(p.jsx)("input",{type:"text",id:"inputQuery",name:"inputQuery",onChange:function(e){return a(e.target.value)},value:n,placeholder:"i.e. The Dark Knight or Christopher Nolan"})}),Object(p.jsx)("button",{type:"submit",children:"Search"})]}),Object(p.jsxs)("div",{className:"trendy-buttons",children:[Object(p.jsx)("button",{className:"now-playing-button",type:"submit",onClick:function(e){return x.apply(this,arguments)},children:"Now Playing"}),Object(p.jsx)("button",{className:"popular-button",type:"submit",onClick:function(e){return O.apply(this,arguments)},children:"Top Rated"})]})]}),Object(p.jsx)("div",{id:"movies-list",children:function(){if(i){var e=i.filter((function(e){return e.poster_path})).sort((function(e,t){return e.popularity>t.popularity?-1:t.popularity>e.popularity?1:0})).map((function(e){return Object(p.jsx)(j,{movie:e},e.id)}));return e.length>10?e.slice(0,10):e}}()})]})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.3ffd4ba1.chunk.js.map