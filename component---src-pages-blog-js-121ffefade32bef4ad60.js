/*! For license information please see component---src-pages-blog-js-121ffefade32bef4ad60.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"K/fi":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("wx14"),c=a("zLVn"),i=a("TSYQ"),u=a.n(i),s=(a("QA0p"),r.a.createContext({}));s.Consumer,s.Provider;function f(e,t){var a=Object(n.useContext)(s);return e||a[t]||t}var m=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,l=e.as,i=void 0===l?"div":l,s=e.className,m=Object(c.a)(e,["bsPrefix","fluid","as","className"]),d=f(a,"container"),p="string"==typeof n?"-"+n:"-fluid";return r.a.createElement(i,Object(o.a)({ref:t},m,{className:u()(s,n?""+d+p:d)}))}));m.displayName="Container",m.defaultProps={fluid:!1};var d=m,p=["xl","lg","md","sm","xs"],v=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.noGutters,i=e.as,s=void 0===i?"div":i,m=Object(c.a)(e,["bsPrefix","className","noGutters","as"]),d=f(a,"row"),v=d+"-cols",E=[];return p.forEach((function(e){var t,a=m[e];delete m[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&E.push(""+v+n+"-"+t)})),r.a.createElement(s,Object(o.a)({ref:t},m,{className:u.a.apply(void 0,[n,d,l&&"no-gutters"].concat(E))}))}));v.displayName="Row",v.defaultProps={noGutters:!1};var E=v,b=["xl","lg","md","sm","xs"],h=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,i=void 0===l?"div":l,s=Object(c.a)(e,["bsPrefix","className","as"]),m=f(a,"col"),d=[],p=[];return b.forEach((function(e){var t,a,n,r=s[e];if(delete s[e],null!=r&&"object"==typeof r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&d.push(!0===t?""+m+o:""+m+o+"-"+t),null!=n&&p.push("order"+o+"-"+n),null!=a&&p.push("offset"+o+"-"+a)})),d.length||d.push(m),r.a.createElement(i,Object(o.a)({},s,{ref:t,className:u.a.apply(void 0,[n].concat(d,p))}))}));h.displayName="Col";var y=h,x=function(e){var t=e.siteTitle;return r.a.createElement("header",null,r.a.createElement(d,null,r.a.createElement(E,null,r.a.createElement(y,{xs:12},r.a.createElement("h1",{className:"text-center"},r.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))))};x.defaultProps={siteTitle:""};var g=x,w=function(){return r.a.createElement("footer",null,r.a.createElement(d,null,r.a.createElement(E,null,r.a.createElement(y,{xs:12},r.a.createElement("ul",{className:"text-center"},r.a.createElement("li",null,"© ",(new Date).getFullYear()),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/project"},"Project")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/the-notebook"},"The Notebook")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(l.Link,{to:"/about"},"About Me")))))))};a("KvI+"),t.a=function(e){var t=e.children;return r.a.createElement(l.StaticQuery,{query:"3649515864",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:"main container"},t),r.a.createElement(w,null))}})}},"KvI+":function(e,t,a){},QA0p:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,l=a.defaultProps,o=a.allowFallback,c=void 0!==o&&o,i=a.displayName,u=void 0===i?e.name||e.displayName:i,s=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!c?r.default.forwardRef(s):function(e){return s(e,null)},{displayName:u,propTypes:n,defaultProps:l})};var n,r=(n=a("q1tI"))&&n.__esModule?n:{default:n}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var c in n)a.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},vx99:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("K/fi");t.default=function(e){var t=e.data;return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Blog"),r.a.createElement("hr",null),t.allMarkdownRemark?t.allMarkdownRemark.edges.map((function(e,t){var a=e.node;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},r.a.createElement("h5",null,r.a.createElement(l.Link,{to:""+a.frontmatter.path},a.frontmatter.title)),r.a.createElement("p",null,a.frontmatter.date)))})):null))}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-blog-js-121ffefade32bef4ad60.js.map