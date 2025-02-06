"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[770],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),d=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=d(r),m=n,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return r?a.createElement(f,i(i({ref:e},c),{},{components:r})):a.createElement(f,i({ref:e},c))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6955:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905));const o={description:"Platforms Supported by Couchbase Lite for Dart and Notable Differences"},i="Supported Platforms",l={unversionedId:"supported-platforms",id:"supported-platforms",title:"Supported Platforms",description:"Platforms Supported by Couchbase Lite for Dart and Notable Differences",source:"@site/docs/supported-platforms.mdx",sourceDirName:".",slug:"/supported-platforms",permalink:"/supported-platforms",draft:!1,editUrl:"https://github.com/cbl-dart/cbl-dart/tree/main/docs/docs/supported-platforms.mdx",tags:[],version:"current",frontMatter:{description:"Platforms Supported by Couchbase Lite for Dart and Notable Differences"},sidebar:"sidebar",previous:{title:"Instrumentation",permalink:"/instrumentation"}},p={},d=[{value:"Flutter",id:"flutter",level:2},{value:"Default database directory",id:"default-database-directory",level:3},{value:"Standalone Dart",id:"standalone-dart",level:2},{value:"Default database directory",id:"default-database-directory-1",level:3}],c={toc:d},u="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("metaheader",null),(0,n.kt)("h2",{id:"flutter"},"Flutter"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"iOS"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= 10.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"macOS"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= 10.14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Android"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= 22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Linux"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= Ubuntu 20.04 x86_64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Windows"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= 10 x86_64")))),(0,n.kt)("h3",{id:"default-database-directory"},"Default database directory"),(0,n.kt)("p",null,"When opening a database without specifying a directory,\n",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/path_provider/latest/index.html"},(0,n.kt)("inlineCode",{parentName:"a"},"path_provider")),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/path_provider/latest/path_provider/getApplicationSupportDirectory.html"},(0,n.kt)("inlineCode",{parentName:"a"},"getApplicationSupportDirectory")),"\nis used to resolve it. See that function's documentation for the concrete\nlocations on the various platforms."),(0,n.kt)("h2",{id:"standalone-dart"},"Standalone Dart"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"right"},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"macOS"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= 10.14")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Linux"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= Ubuntu 20.04 x86_64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"right"},"Windows"),(0,n.kt)("td",{parentName:"tr",align:"left"},">= 10 x86_64")))),(0,n.kt)("h3",{id:"default-database-directory-1"},"Default database directory"),(0,n.kt)("p",null,"When opening a database without specifying a directory, the current working\ndirectory will be used. ",(0,n.kt)("a",{parentName:"p",href:"https://pub.dev/documentation/cbl_dart/latest/cbl_dart/CouchbaseLiteDart/init.html"},(0,n.kt)("inlineCode",{parentName:"a"},"CouchbaseLiteDart.init"))," allows you to\nspecify a different default directory."))}s.isMDXComponent=!0}}]);