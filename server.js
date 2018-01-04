!function(e){function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=6)}([function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a}),t.d(n,"f",function(){return i}),t.d(n,"g",function(){return c}),t.d(n,"c",function(){return u}),t.d(n,"d",function(){return l}),t.d(n,"e",function(){return p});var r=t(17),s=t.n(r),o=process.env.NODE_ENV||"development",a="development"===o,i="localhost",c=process.env.PORT||4e3,u=a?"http://".concat(i,":").concat(c,"/"):"/",l=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return s.a.resolve.apply(s.a,[process.cwd()].concat(n))},p=require},function(e,n){e.exports=require("webpack")},function(e,n){e.exports=require("debug")},function(e,n){e.exports=require("webpack-merge")},function(e,n){e.exports=require("ssr-webpack-plugin")},function(e,n,t){"use strict";(function(e){function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,"a",function(){return v});var s=t(1),o=t.n(s),a=t(24),i=t.n(a),c=t(25),u=t.n(c),l=t(26),p=t.n(l),d=t(27),f=t.n(d),m=t(0),b=m.b,g=!b,h=function(e){return i.a.extract({fallback:{loader:"react-style-loader",options:{react:e}},use:[{loader:"css-loader",options:{minimize:g,souceMap:b,modules:e,camelCase:!0,importLoaders:2,localIdentName:m.b?"[path][name]__[local]--[hash:base64:5]":"[hash:base64:5]"}},{loader:"postcss-loader",options:{minimize:g,souceMap:b,plugins:[p()({rootValue:16,selectorBlackList:["html"]})]}},{loader:"sass-loader",options:{minimize:g,souceMap:b}}]})},v=function(e){return{test:/\.js$/,loader:"babel-loader",exclude:/node_modules/,options:r({cacheDirectory:!0},e&&{presets:[["@babel/env",{modules:!1,exclude:["babel-plugin-transform-async-to-generator","babel-plugin-transform-regenerator"]}]]})}};n.b={devtool:m.b&&"cheap-module-source-map",resolve:{alias:{lodash:"lodash-es"},extensions:[".js",".scss"],modules:[Object(m.d)("src"),"node_modules"]},module:{rules:[{test:/\.webp$/,use:[{loader:"url-loader",options:{limit:8192}},"img-loader"]},{test:/\.pug$/,use:["apply-loader",{loader:"pug-loader",options:{pretty:m.b}}]},{test:/\.scss$/,oneOf:[{test:/app.scss$/,use:h()},{test:/./,use:h(!0)}]}]},plugins:[new o.a.LoaderOptionsPlugin({context:e}),new i.a({disable:!0,filename:"[name].[contenthash].css"}),new u.a,new o.a.DefinePlugin({"process.env.NODE_ENV":JSON.stringify(m.a),__DEV__:m.b})].concat(function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(m.b?[new o.a.NamedModulesPlugin,new o.a.NamedChunksPlugin]:[new f.a,new o.a.NoEmitOnErrorsPlugin,new o.a.optimize.ModuleConcatenationPlugin]))}}).call(n,"/")},function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}Object.defineProperty(n,"__esModule",{value:!0});var s,o,a=t(7),i=t.n(a),c=t(2),u=t.n(c),l=t(8),p=t.n(l),d=t(9),f=t.n(d),m=t(10),b=t.n(m),g=t(11),h=t.n(g),v=t(12),w=t.n(v),x=t(13),y=t.n(x),j=t(14),O=t.n(j),k=t(15),P=t.n(k),_=t(16),q=(t.n(_),t(0)),S=u()("1stg:server"),E=q.b?t(18).renderFile(Object(q.d)("server/template.pug"),{pretty:!0}):i.a.readFileSync(Object(q.d)("dist/template.html"),"utf-8"),M=new p.a,N=P()(1e3),R=[y()(),async function(e,n){if(q.b)await s;else if(await e.cashed())return;if("GET"!==e.method||e.url.lastIndexOf(".")>e.url.lastIndexOf("/")||!["*/*","text/html"].find(function(n){return e.get("Accept").includes(n)}))return n();var t={ctx:e,title:"React SSR"};e.respond=!1;var r=e.res;o.renderToStream(t).on("afterRender",function(){e.status=t.code||200,e.set({"Content-Type":"text/html"})}).on("error",function(n){var t=n.status,s=n.url;if(s)return e.status=302,e.set({Location:s}),r.end();switch(e.status=t||500,t){case 404:return r.end("404 | Page Not Found");default:r.end("500 | Internal Server Error"),S("error during render : ".concat(s)),S(n.stack)}}).pipe(r)}],C=function(e,n){return Object(_.createBundleRenderer)(e,r({},n,{template:E,basedir:Object(q.d)("dist/static"),runInNewContext:!1}))};if(q.b){var A=t(19).default(function(e){var n=e.bundle,t=e.clientManifest;o=C(n,{clientManifest:t})}),F=A.readyPromise,V=A.webpackMiddleware;s=F,R.push(V)}else{o=C(Object(q.e)(Object(q.d)("dist/ssr-server-bundle.json")),{clientManifest:Object(q.e)(Object(q.d)("dist/ssr-client-manifest.json"))});var $={};R.splice(1,0,h()(),O()(Object(q.d)("dist/static"),{maxAge:31536e6},$),w()(f()({get:function(e){return N.get(e)},set:function(e,n){return N.set(e,n)}}))),$["/service-worker.js"].maxAge=0}M.use(b()(R)),M.listen(q.g,q.f,function(){S("Server start listening at %s:%s",q.f,q.g)})},function(e,n){e.exports=require("fs")},function(e,n){e.exports=require("koa")},function(e,n){e.exports=require("koa-cash")},function(e,n){e.exports=require("koa-compose")},function(e,n){e.exports=require("koa-compress")},function(e,n){e.exports=require("koa-convert")},function(e,n){e.exports=require("koa-logger")},function(e,n){e.exports=require("koa-static-cache")},function(e,n){e.exports=require("lru-cache")},function(e,n){e.exports=require("react-server-renderer")},function(e,n){e.exports=require("path")},function(e,n){e.exports=require("pug")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),s=t.n(r),o=t(20),a=t.n(o),i=t(21),c=t.n(i),u=t(1),l=t.n(u),p=t(0),d=t(22),f=t(28),m=s()("1stg:server:dev");d.a.entry.app.unshift("webpack-hot-middleware/client","react-hot-loader/patch"),d.a.plugins.unshift(new l.a.HotModuleReplacementPlugin),n.default=function(e){var n,t,r,s,o=new Promise(function(e){n=e}),i=function(){n(),e.apply(void 0,arguments)},u=l()(d.a),b=a()({compiler:u,dev:{stats:{colors:!0}}});u.plugin("done",function(e){(e=e.toJson()).errors.forEach(m),e.warnings.forEach(m),e.errors.length||(s=b.dev.fileSystem,t=JSON.parse(s.readFileSync(Object(p.d)("dist/ssr-client-manifest.json"))),r&&i({bundle:r,clientManifest:t,fs:s}))});var g=new c.a,h=l()(f.a);return h.outputFileSystem=g,h.watch({},function(e,n){if(e)throw e;(n=n.toJson()).errors.length||(r=JSON.parse(g.readFileSync(Object(p.d)("dist/ssr-server-bundle.json"))),t&&i({bundle:r,clientManifest:t,fs:s}))}),{readyPromise:o,webpackMiddleware:b}}},function(e,n){e.exports=require("koa-webpack")},function(e,n){e.exports=require("memory-fs")},function(e,n,t){"use strict";var r=t(1),s=t.n(r),o=t(3),a=t.n(o),i=t(4),c=(t.n(i),t(23)),u=t.n(c),l=t(0),p=t(5),d=a.a.smart(p.b,{entry:{app:[Object(l.d)("src/entry-client.js")],vendors:["react","react-dom","react-router","react-router-config","react-router-dom"]},output:{publicPath:l.c,path:Object(l.d)("dist/static"),filename:"[name].[".concat(l.b?"hash":"chunkhash","].js")},module:{rules:[Object(p.a)()]},plugins:[new s.a.DefinePlugin({"process.env.REACT_ENV":'"client"',__SERVER__:!1}),new s.a.optimize.CommonsChunkPlugin({names:["vendors","manifest"]}),new i.SSRClientPlugin({filename:"../ssr-client-manifest.json"})]});l.b||d.plugins.push(new u.a({cacheId:"react-ssr",filename:"service-worker.js",minify:!0,dontCacheBustUrlsMatching:/./,staticFileGlobsIgnorePatterns:[/\.map$/,/\.json$/],runtimeCaching:[{urlPattern:"/",handler:"networkFirst"}]})),n.a=d},function(e,n){e.exports=require("sw-precache-webpack-plugin")},function(e,n){e.exports=require("extract-text-webpack-plugin")},function(e,n){e.exports=require("friendly-errors-webpack-plugin")},function(e,n){e.exports=require("postcss-plugin-px2rem")},function(e,n){e.exports=require("uglifyjs-webpack-plugin")},function(e,n,t){"use strict";var r=t(1),s=t.n(r),o=t(3),a=t.n(o),i=t(29),c=t.n(i),u=t(4),l=(t.n(u),t(0)),p=t(5);n.a=a.a.smart(p.b,{entry:Object(l.d)("src/entry-server.js"),target:"node",output:{publicPath:l.c,path:Object(l.d)("dist"),filename:"[name].[chunkhash].js",libraryTarget:"commonjs2"},externals:c()({whitelist:/\.css$/}),module:{rules:[Object(p.a)(!0)]},plugins:[new s.a.DefinePlugin({"process.env.REACT_ENV":'"server"',__SERVER__:!0}),new u.SSRServerPlugin]})},function(e,n){e.exports=require("webpack-node-externals")}]);