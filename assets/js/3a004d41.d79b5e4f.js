"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4874],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),k=r,s=c["".concat(p,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(s,i(i({ref:t},m),{},{components:a})):n.createElement(s,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:()=>n,Z:()=>r})},4996:(e,t,a)=>{a.d(t,{C:()=>l,Z:()=>i});var n=a(2263),r=a(3919);function l(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var l=void 0===n?{}:n,i=l.forcePrependBaseUrl,o=void 0!==i&&i,p=l.absolute,d=void 0!==p&&p;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(o)return t+a;var m=a.startsWith(t)?a:t+a.replace(/^\//,"");return d?e+m:m}(l,a,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},3507:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>d,metadata:()=>m,toc:()=>u,default:()=>k});var n=a(2122),r=a(9756),l=(a(7294),a(3905)),i=a(4996),o=["components"],p={id:"card",title:"Card"},d=void 0,m={unversionedId:"card",id:"version-1.2.0/card",isDocsHomePage:!1,title:"Card",description:"Cards are a great way to display information, usually containing content and",source:"@site/versioned_docs/version-1.2.0/card.md",sourceDirName:".",slug:"/card",permalink:"/docs/1.2.0/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/card.md",version:"1.2.0",frontMatter:{id:"card",title:"Card"},sidebar:"version-1.2.0/docs",previous:{title:"ButtonGroup",permalink:"/docs/1.2.0/button_group"},next:{title:"CheckBox",permalink:"/docs/1.2.0/checkbox"}},u=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>dividerStyle</code>",id:"dividerstyle",children:[]},{value:"<code>featuredSubtitle</code>",id:"featuredsubtitle",children:[]},{value:"<code>featuredSubtitleStyle</code>",id:"featuredsubtitlestyle",children:[]},{value:"<code>featuredTitle</code>",id:"featuredtitle",children:[]},{value:"<code>featuredTitleStyle</code>",id:"featuredtitlestyle",children:[]},{value:"<code>image</code>",id:"image",children:[]},{value:"<code>imageProps</code>",id:"imageprops",children:[]},{value:"<code>imageStyle</code>",id:"imagestyle",children:[]},{value:"<code>imageWrapperStyle</code>",id:"imagewrapperstyle",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleNumberOfLines</code>",id:"titlenumberoflines",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",children:[]}]}],c={toc:u};function k(e){var t=e.components,a=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Cards are a great way to display information, usually containing content and\nactions about a single subject. Cards can contain images, buttons, text and\nmore."),(0,l.kt)("img",{alt:"Card Component",src:(0,i.Z)("img/card.png")}),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const users = [\n {\n    name: 'brynn',\n    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'\n },\n ... // more users here\n]\n\nimport { View, Text, Image } from 'react-native'\nimport { Card, ListItem, Button, Icon } from 'react-native-elements'\n\n// implemented without image with header\n<Card title=\"CARD WITH DIVIDER\">\n  {\n    users.map((u, i) => {\n      return (\n        <View key={i} style={styles.user}>\n          <Image\n            style={styles.image}\n            resizeMode=\"cover\"\n            source={{ uri: u.avatar }}\n          />\n          <Text style={styles.name}>{u.name}</Text>\n        </View>\n      );\n    })\n  }\n</Card>\n\n// implemented without image without header, using ListItem component\n <Card containerStyle={{padding: 0}} >\n  {\n    users.map((u, i) => {\n      return (\n        <ListItem\n          key={i}\n          roundAvatar\n          title={u.name}\n          avatar={{uri:u.avatar}}\n        />\n      );\n    })\n  }\n</Card>\n\n\n// implemented with Text and Button as children\n<Card\n  title='HELLO WORLD'\n  image={require('../images/pic2.jpg')}>\n  <Text style={{marginBottom: 10}}>\n    The idea with React Native Elements is more about component structure than actual design.\n  </Text>\n  <Button\n    icon={<Icon name='code' color='#ffffff' />}\n    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}\n    title='VIEW NOW' />\n</Card>\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#containerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"containerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dividerstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"dividerStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#featuredsubtitle"},(0,l.kt)("inlineCode",{parentName:"a"},"featuredSubtitle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#featuredsubtitlestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"featuredSubtitleStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#featuredtitle"},(0,l.kt)("inlineCode",{parentName:"a"},"featuredTitle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#featuredtitlestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"featuredTitleStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#image"},(0,l.kt)("inlineCode",{parentName:"a"},"image"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#imageprops"},(0,l.kt)("inlineCode",{parentName:"a"},"imageProps"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#imagestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"imageStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#imagewrapperstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"imageWrapperStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#title"},(0,l.kt)("inlineCode",{parentName:"a"},"title"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlenumberoflines"},(0,l.kt)("inlineCode",{parentName:"a"},"titleNumberOfLines"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#titlestyle"},(0,l.kt)("inlineCode",{parentName:"a"},"titleStyle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#wrapperstyle"},(0,l.kt)("inlineCode",{parentName:"a"},"wrapperStyle")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("h3",{id:"containerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"containerStyle")),(0,l.kt)("p",null,"outer container style (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"dividerstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"dividerStyle")),(0,l.kt)("p",null,"additional divider styling (if title provided) (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"featuredsubtitle"},(0,l.kt)("inlineCode",{parentName:"h3"},"featuredSubtitle")),(0,l.kt)("p",null,"subtitle rendered over the image (only works if image prop is present)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"featuredsubtitlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"featuredSubtitleStyle")),(0,l.kt)("p",null,"styling for featured subtitle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"featuredtitle"},(0,l.kt)("inlineCode",{parentName:"h3"},"featuredTitle")),(0,l.kt)("p",null,"title rendered over the image (only works if image prop is present)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"featuredtitlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"featuredTitleStyle")),(0,l.kt)("p",null,"styling for featured title"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"image"},(0,l.kt)("inlineCode",{parentName:"h3"},"image")),(0,l.kt)("p",null,"add an image as the heading with the image prop (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"image uri or require path"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"imageprops"},(0,l.kt)("inlineCode",{parentName:"h3"},"imageProps")),(0,l.kt)("p",null,'optional properties to pass to the image if provided e.g "resizeMode"'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"{",(0,l.kt)("a",{parentName:"td",href:"/docs/1.2.0/image#props"},"...Image props"),"} )"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"imagestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"imageStyle")),(0,l.kt)("p",null,"specify image styling if image is provided"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object(style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"inherited styling")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"imagewrapperstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"imageWrapperStyle")),(0,l.kt)("p",null,"specify styling for view surrounding image"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object(style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"title"},(0,l.kt)("inlineCode",{parentName:"h3"},"title")),(0,l.kt)("p",null,"optional card title (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"string OR React Native Component"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titlenumberoflines"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleNumberOfLines")),(0,l.kt)("p",null,"number of lines for title (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"titlestyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"titleStyle")),(0,l.kt)("p",null,"additional title styling (if title provided) (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wrapperstyle"},(0,l.kt)("inlineCode",{parentName:"h3"},"wrapperStyle")),(0,l.kt)("p",null,"inner container style (optional)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"object (style)"),(0,l.kt)("td",{parentName:"tr",align:"center"},"none")))))}k.isMDXComponent=!0}}]);