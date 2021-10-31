(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{11:function(e,t,c){},13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),r=c.n(s),i=(c(11),c(2)),o=c.n(i),l=c(4),u=c(3),j=(c(13),c(14),c(0));var h=function(e){var t=e.movie,c=Object(n.useState)(""),a=Object(u.a)(c,2),s=a[0],r=a[1],i="c325c6385fbc64f5360ebbd46b419ec4",h="https://api.themoviedb.org/3/";function b(){return(b=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h+"configuration?api_key=".concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c.images.secure_base_url),r(c.images.secure_base_url+"w342");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]);var p={backgroundImage:"linear-gradient(to bottom right, rgba(1.57%, 8.63%, 14.51%, 1.00), rgba(1.57%, 8.63%, 14.51%, 0.84)), url(https://image.tmdb.org/t/p/w1280/".concat(t.backdrop_path,")"),objectFit:"cover"};return console.log(t),Object(j.jsxs)("div",{className:"movie-item",style:p,children:[Object(j.jsx)("div",{className:"image-container",children:Object(j.jsx)("img",{className:"movie-poster",src:s+t.poster_path,alt:"movie poster"})}),Object(j.jsxs)("div",{className:"info-container",children:[Object(j.jsx)("h1",{className:"movie-title",children:"movie"===t.media_type?t.original_title:t.name}),Object(j.jsxs)("p",{className:"release-date",children:[t.release_date," (",Object(j.jsx)("span",{className:"original_language",children:t.original_language}),")"]}),Object(j.jsx)("h3",{className:"overview-title",children:"Overview"}),Object(j.jsxs)("p",{className:"overview",children:[t.overview.slice(0,410),"..."]}),Object(j.jsxs)("p",{className:"rating-title",children:[Object(j.jsx)("strong",{children:"PMDB"})," Rating"]}),Object(j.jsxs)("div",{className:"rating",children:[Object(j.jsx)("img",{className:"rating-image",alt:"rating-star",src:"https://cdn-icons-png.flaticon.com/512/143/143547.png",width:"28",height:"28",style:{display:"block"}}),Object(j.jsxs)("div",{className:"rating-stats",children:[Object(j.jsxs)("p",{className:"rating-value",children:[t.vote_average,"/10"]}),Object(j.jsx)("p",{className:"rating-count",children:t.vote_count})]})]})]})]})};var b=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),i=r[0],b=r[1],p="c325c6385fbc64f5360ebbd46b419ec4",d="https://api.themoviedb.org/3/",m="search/multi";function v(){return(v=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(d).concat(m,"?api_key=").concat(p,"&query=").concat(c));case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,b(a.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("div",{className:"header-bar",children:Object(j.jsx)("p",{children:"PMDB - The Poor Man's Movie Database"})})}),Object(j.jsxs)("main",{children:[Object(j.jsxs)("div",{id:"search-section",children:[Object(j.jsx)("h1",{children:"Welcome."}),Object(j.jsx)("h3",{children:"Millions of movies, TV shows and people to discover. Explore now."}),Object(j.jsxs)("form",{onSubmit:function(e){return v.apply(this,arguments)},children:[Object(j.jsx)("label",{htmlFor:"inputQuery",children:Object(j.jsx)("input",{type:"text",id:"inputQuery",name:"inputQuery",onChange:function(e){return a(e.target.value)},value:c,placeholder:"i.e. The Dark Knight or Christopher Nolan"})}),Object(j.jsx)("button",{type:"submit",children:"Search"})]})]}),Object(j.jsx)("div",{id:"movies-list",children:function(){var e=i.filter((function(e){return e.poster_path})).sort((function(e,t){return e.popularity>t.popularity?-1:t.popularity>e.popularity?1:0})).map((function(e){return Object(j.jsx)(h,{movie:e},e.id)}));return e.length>10?e.slice(0,10):e}()})]})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.9a64bcb0.chunk.js.map