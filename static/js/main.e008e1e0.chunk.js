(this.webpackJsonpmovielist=this.webpackJsonpmovielist||[]).push([[0],{36:function(e,t,n){},57:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(28),c=n.n(s),r=(n(36),n(8)),o=n(2),l=n(1);var j=function(e){return console.log(e),Object(l.jsx)("div",{className:"about_container",children:Object(l.jsx)("span",{children:"Hello! This is AboutPage!"})})},m=n(17),u=n.n(m),d=n(29),v=n(11),b=n(12),h=n(14),p=n(13),O=n(30),x=n.n(O);n(57);var g=function(e){var t=e.id,n=e.year,a=e.title,i=e.summary,s=e.image,c=e.genres;return Object(l.jsx)(r.b,{to:{pathname:"/movie/id:".concat(t),state:{year:n,title:a,summary:i,image:s,genres:c}},children:Object(l.jsxs)("div",{className:"movie",children:[Object(l.jsx)("img",{src:s,alt:a,title:a}),Object(l.jsxs)("div",{className:"movie_data",children:[Object(l.jsx)("h3",{className:"movie_title",children:a}),Object(l.jsx)("h5",{className:"movie_year",children:n}),Object(l.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(l.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(l.jsx)("p",{className:"movie_summary",children:i.slice(0,50)})]})]})})},f=(n(66),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovie=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovie()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Now Loading"})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return console.log(e),Object(l.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,image:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(i.a.Component)),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return Object(l.jsx)("div",{children:Object(l.jsx)("span",{children:e.state.title})})}}]),n}(i.a.Component);var N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:{pathname:"/about",state:{fromNavigation:!0}},children:"About"})]})};var _=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(N,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:f}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie/id::id",component:y})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),k()}},[[67,1,2]]]);
//# sourceMappingURL=main.e008e1e0.chunk.js.map