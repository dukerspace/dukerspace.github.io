(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"K/fi":function(e,t,a){"use strict";var n=a("PlB2"),r=a("q1tI"),l=a.n(r),o=a("Wbzz"),u=a("wx14"),c=a("zLVn"),i=a("TSYQ"),s=a.n(i),f=(a("f3/d"),a("QA0p"),l.a.createContext({}));f.Consumer,f.Provider;function d(e,t){var a=Object(r.useContext)(f);return e||a[t]||t}var m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,r=e.as,o=void 0===r?"div":r,i=e.className,f=Object(c.a)(e,["bsPrefix","fluid","as","className"]),m=d(a,"container"),p="string"==typeof n?"-"+n:"-fluid";return l.a.createElement(o,Object(u.a)({ref:t},f,{className:s()(i,n?""+m+p:m)}))}));m.displayName="Container",m.defaultProps={fluid:!1};var p=m,v=(a("8+KV"),["xl","lg","md","sm","xs"]),E=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.noGutters,o=e.as,i=void 0===o?"div":o,f=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),m=d(a,"row"),p=m+"-cols",E=[];return v.forEach((function(e){var t,a=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&E.push(""+p+n+"-"+t)})),l.a.createElement(i,Object(u.a)({ref:t},f,{className:s.a.apply(void 0,[n,m,r&&"no-gutters"].concat(E))}))}));E.displayName="Row",E.defaultProps={noGutters:!1};var b=E,h=["xl","lg","md","sm","xs"],y=l.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,r=e.as,o=void 0===r?"div":r,i=Object(c.a)(e,["bsPrefix","className","as"]),f=d(a,"col"),m=[],p=[];return h.forEach((function(e){var t,a,n,r=i[e];if(delete i[e],null!=r&&"object"==typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&m.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&p.push("order"+o+"-"+n),null!=a&&p.push("offset"+o+"-"+a)})),m.length||m.push(f),l.a.createElement(o,Object(u.a)({},i,{ref:t,className:s.a.apply(void 0,[n].concat(m,p))}))}));y.displayName="Col";var x=y,w=function(e){var t=e.siteTitle;return l.a.createElement("header",null,l.a.createElement(p,null,l.a.createElement(b,null,l.a.createElement(x,{xs:12},l.a.createElement("h1",{className:"text-center"},l.a.createElement(o.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))))};w.defaultProps={siteTitle:""};var N=w,P=function(){return l.a.createElement("footer",null,l.a.createElement(p,null,l.a.createElement(b,null,l.a.createElement(x,{xs:12},l.a.createElement("ul",{className:"text-center"},l.a.createElement("li",null,"© ",(new Date).getFullYear()),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"project"},"Project")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"the-notebook"},"The Notebook")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"blog"},"Blog")),l.a.createElement("li",null,l.a.createElement(o.Link,{to:"about"},"About Me")))))))};a("KvI+"),t.a=function(e){var t=e.children;return l.a.createElement(o.StaticQuery,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(N,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{className:"main container"},t),l.a.createElement(P,null))},data:n})}},PlB2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"DUKERSPACE"}}}}')},QA0p:function(e,t,a){"use strict";a("91GP"),a("f3/d"),t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,l=a.defaultProps,o=a.allowFallback,u=void 0!==o&&o,c=a.displayName,i=void 0===c?e.name||e.displayName:c,s=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!u?r.default.forwardRef(s):function(e){return s(e,null)},{displayName:i,propTypes:n,defaultProps:l})};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n}},TSYQ:function(e,t,a){var n;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===l)for(var u in n)a.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return o}));var n=a("q1tI"),r=a.n(n),l=a("K/fi");t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("p",null,t.frontmatter.date),r.a.createElement("hr",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};var o="2813173630"},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-templates-blog-js-3b1b08ab60ddbd8011b3.js.map