(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"py-5 bg-white"},[a("div",{staticClass:"container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row"},[t._m(0),a("div",{staticClass:"inline-flex items-center ml-5 space-x-6 lg:justify-end"},[a("nav",{staticClass:"flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200"},[a("a",{staticClass:"mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase",attrs:{href:"https://nanocrawler.cc/explorer/account/"+t.gameaddress}},[t._v("Explorer")]),a("a",{staticClass:"mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900 uppercase",attrs:{href:"https://github.com/besoeasy/simple-nano-game?"+t.gameaddress}},[t._v("Github")])])])])]),a("section",{staticClass:"text-gray-600 body-font"},[a("div",{staticClass:"container mx-auto flex px-5 py-10 items-center justify-center flex-col"},[a("img",{staticClass:"mb-10 object-cover object-center rounded",attrs:{alt:"hero",src:"https://bafybeihq6dnwimqahij2ocihgdeihg7ctxu3a37whdiezb43sqdnetyctq.ipfs.infura-ipfs.io/"}}),a("div",{staticClass:"text-center lg:w-2/3 w-full"},[a("h1",{staticClass:"title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"},[t._v("DEPOSIT NANO TO PLAY !")]),a("p",{staticClass:"mb-8 leading-relaxed"},[t._v(" "+t._s(t.gameaddress)+" ")]),a("div",{staticClass:"flex justify-center"},[a("a",{staticClass:"inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg",attrs:{href:"nano:"+t.gameaddress}},[t._v("Open Natrium")])])])])]),a("section",{staticClass:"py-10 overflow-hidden"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-4 md:gap-10"},[t._m(1),t._m(2),a("div",[a("h5",{staticClass:"mt-10 mb-3 text-lg font-bold font-heading text-gray-900"},[t._v("Max Win")]),a("p",[t._v(" Maximum Win Per Bet is "),a("strong",[t._v(t._s(t.formatS(t.balance/20))+" NANO")]),t._v(", you can't win more than this per bet. ")])]),a("div",[a("h5",{staticClass:"mt-10 mb-3 text-lg font-bold font-heading text-gray-900"},[t._v("Game Balance")]),a("p",[t._v(" Game Balance is "),a("strong",[t._v(t._s(t.formatS(t.balance))+" NANO")]),t._v(", this will grow over time. ")])])])])]),a("section",{staticClass:"py-10 overflow-hidden"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"overflow-x-auto"},[a("table",{staticClass:"table w-full table-zebra"},[t._m(3),a("tbody",t._l(t.betsdata,(function(e){return a("tr",{key:e.id},[a("th",[t._v(" "+t._s(e.height)+" ")]),a("td",[t._v(" "+t._s(e.account)+" ")]),a("td",[t._v(" "+t._s(e.amount)+" ")]),a("td",["receive"==e.type?a("div",[t._v(t._s(e.roll))]):t._e(),"receive"!==e.type?a("div",[t._v("--")]):t._e()]),a("td",["send"==e.type?a("a",{staticClass:"px-4 py-1 text-red-400 rounded"},[t._v("SEND")]):t._e(),"receive"==e.type?a("a",{staticClass:"px-4 py-1 text-green-400 rounded "},[t._v("RECEIVE")]):t._e()]),a("td",[a("a",{staticClass:"px-4 py-1 text-white bg-blue-400 rounded",attrs:{target:"_blank",href:"https://nanocrawler.cc/explorer/block/"+e.hash}},[t._v("View")])])])})),0)])])])]),t._m(4)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative flex flex-col md:flex-row"},[a("a",{staticClass:"flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0",attrs:{href:"https://nano.besoeasy.com"}},[a("span",{staticClass:"mx-auto text-xl font-black leading-none text-gray-900 select-none"},[t._v("NANO.BESOEASY.COM")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",{staticClass:"mt-10 mb-3 text-lg font-bold font-heading text-gray-900"},[t._v("Roll Below 33")]),a("p",[t._v("To win you must "),a("strong",[t._v("Roll Below 33")]),t._v(". Rolls are generated by NANO block hashes.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",{staticClass:"mt-10 mb-3 text-lg font-bold font-heading text-gray-900"},[t._v("Win 3X")]),a("p",[t._v("All winning bets get 3 times deposit amount, No logins required.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th"),a("th",[t._v("Player")]),a("th",[t._v("Amount")]),a("th",[t._v("Roll")]),a("th",[t._v("Type")]),a("th",[t._v("Block")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"p-10 footer bg-base-200 text-base-content footer-center"},[a("div",[a("a",{staticClass:"link link-hover",attrs:{href:"https://besoeasy.com"}},[a("p",[t._v("© BESOEASY.COM")])])])])}],o=a("bc3a"),i=a.n(o),c=a("6c27"),l=a.n(c);const u="https://vault.nanocrawler.cc/api/node-api",d="nano_3zrie5gc4j8r536d3hj3pa48aejkskkgrec8f961xc78cmsw6uamx5z3q5xq";function f(t){return t=l()(t),t=t.substring(0,8),t=parseInt(t,16),t/=4294967295,100*t}async function h(t){const e=await i.a.post(u,{json_block:"true",action:"blocks_info",hashes:[t]}).then((function(e){return e.data.blocks[t]}));return e}async function p(){const t=await i.a.post(u,{action:"account_history",account:d,count:100}).then((function(t){return t.data}));return t}async function m(){const t=await i.a.post(u,{action:"account_info",account:d}).then((function(t){return t.data}));return t}async function v(t){const e=await h(t);return f(t+e.contents.signature+e.contents.work).toFixed(2)}var g={data(){return{fetching:!0,gameaddress:d,balance:0,betsdata:[]}},methods:{formatS:function(t){return parseFloat(t/1e30).toFixed(8)},async fetchdata(){this.fetching=!1,console.log("fetching data");const t=await m(),e=await p(),a=e.history;var n;for(this.balance=t.balance,this.betsdata=[],n=0;n<a.length;n++){var s=await v(a[n].hash),r={height:a[n].height,account:a[n].account,amount:this.formatS(a[n].amount),type:a[n].type,hash:a[n].hash,roll:s};this.betsdata.push(r)}this.fetching=!0}},async mounted(){setInterval(async()=>{this.fetching&&this.fetchdata()},5e3)}},b=g,x=a("2877"),_=Object(x["a"])(b,s,r,!1,null,null,null),y=_.exports;n["a"].config.productionTip=!1,new n["a"]({render:t=>t(y)}).$mount("#app")}});
//# sourceMappingURL=app.f836e63f.js.map