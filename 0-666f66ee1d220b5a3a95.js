(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(142),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(147),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var d=a(48);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},146:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),l=a(4),c=a.n(l),o=a(143),u=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},i.a.createElement("h1",{className:"text-center"},i.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var s=u,d=function(){return i.a.createElement("footer",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-12"},i.a.createElement("ul",null,i.a.createElement("li",null,"© ",(new Date).getFullYear()),i.a.createElement("li",null,i.a.createElement(o.Link,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(o.Link,{to:"project"},"Project")))))))},m=(a(151),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t),i.a.createElement(d,null))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},147:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"DUKERSPACE"}}}}},150:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(68),o=a(2),u=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,a){}}]);
//# sourceMappingURL=0-666f66ee1d220b5a3a95.js.map