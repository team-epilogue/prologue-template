"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7306:function(e,t,n){var l=n(7294),a=n(1082),r=n(7212).L1;t.Z=function(){(0,a.useStaticQuery)("3159585216").site;return l.createElement("div",{className:"page-container"},r.map((function(e,t){return e.isExternal?l.createElement(i,{key:t},l.createElement(a.Link,{to:e.url,target:"_blank",rel:"noopener noreferrer"},e.label)):l.createElement("div",{className:"page",key:t},l.createElement(a.Link,{to:e.url},e.label))})))};var i=function(e){var t=e.children;return l.createElement("div",null,t)}},8678:function(e,t,n){var l=n(7294);n(1082);t.Z=function(e){e.location,e.title;var t=e.children;return l.createElement("div",{className:"global-wrapper"},l.createElement("main",null,t))}},9755:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(1082),a=n(7294),r=n(7212),i=n.p+"static/gatsby-icon-8fb027d91d1fd0bc7fe0eb613a8e7a8d.png",c=function(){var e=r.logoText;return a.createElement(l.StaticQuery,{query:"3004417078",render:function(t){return e?a.createElement("h1",null,a.createElement(l.Link,{to:"/"},e)):a.createElement("div",{className:"logo-container"},a.createElement("img",{src:i,className:"logo-img",alt:"logoImg"}))}})}},9357:function(e,t,n){var l=n(7294),a=n(1082),r=function(e){var t,n,r,i=e.description,c=(e.lang,e.title),o=e.children,m=(0,a.useStaticQuery)("2246895633").site,s=i||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return l.createElement(l.Fragment,null,l.createElement("title",null,u?c+" | "+u:c),l.createElement("meta",{name:"description",content:s}),l.createElement("meta",{property:"og:title",content:c}),l.createElement("meta",{property:"og:description",content:s}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter.username)||""}),l.createElement("meta",{name:"twitter:title",content:c}),l.createElement("meta",{name:"twitter:description",content:s}),o)};r.defaultProps={description:""},t.Z=r},6547:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return p}});var l=n(7294),a=n(1082),r=function(){var e,t,n=(0,a.useStaticQuery)("2500322721"),r=null===(e=n.site.siteMetadata)||void 0===e?void 0:e.author,i=null===(t=n.site.siteMetadata)||void 0===t?void 0:t.social,c=Object.keys(i);return l.createElement("div",{className:"profile"},(null==r?void 0:r.profile)&&l.createElement("img",{src:r.profile,width:200,height:200,className:"profile-avatar",alt:"Profile picture"}),l.createElement("div",null,(null==r?void 0:r.name)&&l.createElement("div",null,l.createElement("p",{className:"name"},l.createElement("strong",null,r.name)),l.createElement("p",null,(null==r?void 0:r.summary)||null))),l.createElement("div",null,c.map((function(e,t){return i[e].username&&l.createElement("a",{href:i[e].url+i[e].username,target:"_blank",rel:"noreferrer",key:t},l.createElement("img",{src:"/icons/"+i[e].title+".png",alt:i[e].title}))}))))},i=n(8678),c=n(9357),o=function(){return l.createElement(a.StaticQuery,{query:"3431623010",render:function(e){return l.createElement("div",{className:"post-list-container"},l.createElement("ol",{style:{listStyle:"none"}},e.allMarkdownRemark.nodes.map((function(e){var t=e.frontmatter.title||e.fields.slug;return l.createElement("li",{key:e.fields.slug},l.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",null,l.createElement("h2",null,l.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},l.createElement("span",{itemProp:"headline"},t))),l.createElement("small",null,e.frontmatter.date)),l.createElement("section",null,l.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}})},m=n(7212).W3,s=function(){return l.createElement(a.StaticQuery,{query:"1257724990",render:function(e){return l.createElement("div",{className:"category"},l.createElement("nav",null,m.map((function(t){return l.createElement("div",{key:t},l.createElement(a.Link,{to:"전체보기"===t?"/all-posts":e.allMarkdownRemark.categoryList.includes(t)?"/"+t+"/":"/empty-posts"},t))}))))}})},u=function(){return l.createElement(a.StaticQuery,{query:"3004417078",render:function(e){return l.createElement("div",{className:"title"},l.createElement("h3",null,"여기가 타이틀임"))}})},d=n(9755),E=n(7306),p=function(e){var t,n=e.data,a=e.location,c=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title";return 0===n.allMarkdownRemark.nodes.length?l.createElement(i.Z,{location:a,title:c},l.createElement("div",{className:"display_flex"},l.createElement(r,null),l.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).'))):l.createElement(i.Z,{location:a,title:c},l.createElement("div",{className:"display-row"},l.createElement(d.Z,null),l.createElement(E.Z,null)),l.createElement("div",{className:"display-row"},l.createElement("div",{className:"display-grid-r"},l.createElement("div",{className:"display-column"},l.createElement(u,null),l.createElement(o,null)),l.createElement("div",{className:"display-column"},l.createElement(r,null),l.createElement(s,null)))))},f=function(){return l.createElement(c.Z,{title:"All posts"})}},7212:function(e){e.exports=JSON.parse('{"L1":[{"label":"Posts","url":"/blog","isExternal":false},{"label":"About","url":"/about/","isExternal":false},{"label":"Contact","url":"/contact/","isExternal":false}],"W3":["전체보기","category1","category2"]}')}}]);
//# sourceMappingURL=component---src-pages-index-js-fea9edc06aab91f63ad2.js.map