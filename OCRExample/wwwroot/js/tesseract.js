/*! For license information please see tesseract.js.LICENSE.txt */
(()=>{var t={134:t=>{t.exports=function(){return"undefined"!=typeof window&&"object"==typeof window.process&&"renderer"===window.process.type||!("undefined"==typeof process||"object"!=typeof process.versions||!process.versions.electron)||"object"==typeof navigator&&"string"==typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0}},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),s=new N(n||[]);return o(i,"_invoke",{value:j(t,r,s)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",g="completed",y={};function v(){}function m(){}function w(){}var b={};l(b,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(T([])));E&&E!==r&&n.call(E,i)&&(b=E);var x=w.prototype=v.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,a,i,s){var c=p(t[o],t,a);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?e.resolve(u.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(c.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(t,e,r){var n=h;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===g){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=O(i,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var c=p(t,e,r);if("normal"===c.type){if(n=r.done?g:d,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=g,r.method="throw",r.arg=c.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var a=p(o,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function T(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(S.prototype),l(S.prototype,s,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(x),l(x,c,"Generator"),l(x,i,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:T(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},181:(t,e,r)=>{const n=r(158);t.exports={recognize:async(t,e,r)=>{const o=await n(r);return await o.loadLanguage(e),await o.initialize(e),o.recognize(t).finally((async()=>{await o.terminate()}))},detect:async(t,e)=>{const r=await n(e);return await r.loadLanguage("osd"),await r.initialize("osd"),r.detect(t).finally((async()=>{await r.terminate()}))}}},308:t=>{t.exports={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3}},895:t=>{t.exports={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"}},154:(t,e,r)=>{const n=r(308);t.exports={defaultOEM:n.DEFAULT}},720:t=>{t.exports={langPath:"https://tessdata.projectnaptha.com/4.0.0",workerBlobURL:!0,logger:()=>{}}},520:t=>{t.exports={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"}},949:(t,e,r)=>{const n=r(504);let o=0;t.exports=({id:t,action:e,payload:r={}})=>{let a=t;return void 0===a&&(a=n("Job",o),o+=1),{id:a,action:e,payload:r}}},877:function(t,e,r){const n=r(949),{log:o}=r(486),a=r(504);let i=0;t.exports=()=>{const t=a("Scheduler",i),e={},r={};let s=[];i+=1;const c=()=>Object.keys(e).length,l=()=>{if(0!==s.length){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(void 0===r[t[n]]){s[0](e[t[n]]);break}}},u=(e,a)=>new Promise(((i,c)=>{const u=n({action:e,payload:a});s.push((async t=>{s.shift(),r[t.id]=u;try{i(await t[e].apply(this,[...a,u.id]))}catch(t){c(t)}finally{delete r[t.id],l()}})),o(`[${t}]: Add ${u.id} to JobQueue`),o(`[${t}]: JobQueue length=${s.length}`),l()}));return{addWorker:r=>(e[r.id]=r,o(`[${t}]: Add ${r.id}`),o(`[${t}]: Number of workers=${c()}`),l(),r.id),addJob:async(e,...r)=>{if(0===c())throw Error(`[${t}]: You need to have at least one worker before adding jobs`);return u(e,r)},terminate:async()=>{Object.keys(e).forEach((async t=>{await e[t].terminate()})),s=[]},getQueueLen:()=>s.length,getNumWorkers:c}}},158:(t,e,r)=>{const n=r(937),o=r(634),a=r(949),{log:i}=r(486),s=r(504),{defaultOEM:c}=r(154),{defaultOptions:l,spawnWorker:u,terminateWorker:p,onMessage:h,loadImage:d,send:f}=r(791);let g=0;t.exports=async(t={})=>{const e=s("Worker",g),{logger:r,errorHandler:y,...v}=n({...l,...t}),m={},w={};let b,L;const E=new Promise(((t,e)=>{L=t,b=e}));let x=u(v);x.onerror=t=>{b(t.message)},g+=1;const k=(t,e)=>{m[t]=e},S=(t,e)=>{w[t]=e},j=({id:t,action:r,payload:n})=>new Promise(((o,a)=>{i(`[${e}]: Start ${t}, action=${r}`),k(r,o),S(r,a),f(x,{workerId:e,jobId:t,action:r,payload:n})}));h(x,(({workerId:t,jobId:e,status:n,action:a,data:s})=>{if("resolve"===n){i(`[${t}]: Complete ${e}`);let r=s;"recognize"===a?r=o(s):"getPDF"===a&&(r=Array.from({...s,length:Object.keys(s).length})),m[a]({jobId:e,data:r})}else if("reject"===n){if(w[a](s),"load"===a&&b(s),!y)throw Error(s);y(s)}else"progress"===n&&r({...s,userJobId:e})}));const O={id:e,worker:x,setResolve:k,setReject:S,load:()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),writeText:(t,e,r)=>j(a({id:r,action:"FS",payload:{method:"writeFile",args:[t,e]}})),readText:(t,e)=>j(a({id:e,action:"FS",payload:{method:"readFile",args:[t,{encoding:"utf8"}]}})),removeFile:(t,e)=>j(a({id:e,action:"FS",payload:{method:"unlink",args:[t]}})),FS:(t,e,r)=>j(a({id:r,action:"FS",payload:{method:t,args:e}})),loadLanguage:(t="eng",e)=>j(a({id:e,action:"loadLanguage",payload:{langs:t,options:v}})),initialize:(t="eng",e=c,r,n)=>j(a({id:n,action:"initialize",payload:{langs:t,oem:e,config:r}})),setParameters:(t={},e)=>j(a({id:e,action:"setParameters",payload:{params:t}})),recognize:async(t,e={},r={blocks:!0,text:!0,hocr:!0,tsv:!0},n)=>j(a({id:n,action:"recognize",payload:{image:await d(t),options:e,output:r}})),getPDF:(t="Tesseract OCR Result",e=!1,r)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),j(a({id:r,action:"getPDF",payload:{title:t,textonly:e}}))),detect:async(t,e)=>j(a({id:e,action:"detect",payload:{image:await d(t)}})),terminate:async()=>(null!==x&&(p(x),x=null),Promise.resolve())};return j(a({id:undefined,action:"load",payload:{options:v}})).then((()=>L(O))).catch((()=>{})),E}},320:(t,e,r)=>{r(666);const n=r(877),o=r(158),a=r(181),i=r(520),s=r(308),c=r(895),{setLogging:l}=r(486);t.exports={languages:i,OEM:s,PSM:c,createScheduler:n,createWorker:o,setLogging:l,...a}},634:t=>{t.exports=t=>{const e=[],r=[],n=[],o=[],a=[];return t.blocks&&t.blocks.forEach((i=>{i.paragraphs.forEach((e=>{e.lines.forEach((r=>{r.words.forEach((n=>{n.symbols.forEach((o=>{a.push({...o,page:t,block:i,paragraph:e,line:r,word:n})})),o.push({...n,page:t,block:i,paragraph:e,line:r})})),n.push({...r,page:t,block:i,paragraph:e})})),r.push({...e,page:t,block:i})})),e.push({...i,page:t})})),{...t,blocks:e,paragraphs:r,lines:n,words:o,symbols:a}}},376:(t,e,r)=>{const n=r(134);t.exports=t=>{const e={};return"undefined"!=typeof WorkerGlobalScope?e.type="webworker":n()?e.type="electron":"object"==typeof window?e.type="browser":"object"==typeof process&&(e.type="node"),void 0===t?e:e[t]}},504:t=>{t.exports=(t,e)=>`${t}-${e}-${Math.random().toString(16).slice(3,8)}`},486:function(t,e){let r=!1;e.logging=r,e.setLogging=t=>{r=t},e.log=(...t)=>r?console.log.apply(this,t):null},937:(t,e,r)=>{const n="browser"===r(376)("type")?t=>new URL(t,window.location.href).href:t=>t;t.exports=t=>{const e={...t};return["corePath","workerPath","langPath"].forEach((r=>{t[r]&&(e[r]=n(e[r]))})),e}},40:(t,e,r)=>{const{version:n}=r(547),o=r(720);var a;t.exports={...o,workerPath:"undefined"!=typeof process&&"development"===process.env.TESS_ENV?(a=`/dist/worker.dev.js?nocache=${Math.random().toString(36).slice(3)}`,new URL(a,window.location.href).href):`https://cdn.jsdelivr.net/npm/tesseract.js@v${n}/dist/worker.min.js`,corePath:null}},791:(t,e,r)=>{const n=r(40),o=r(5),a=r(25),i=r(804),s=r(247),c=r(196);t.exports={defaultOptions:n,spawnWorker:o,terminateWorker:a,onMessage:i,send:s,loadImage:c}},196:t=>{const e=t=>new Promise(((e,r)=>{const n=new FileReader;n.onload=()=>{e(n.result)},n.onerror=({target:{error:{code:t}}})=>{r(Error(`File could not be read! Code=${t}`))},n.readAsArrayBuffer(t)})),r=async t=>{let n=t;if(void 0===t)return"undefined";if("string"==typeof t)if(/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(t))n=atob(t.split(",")[1]).split("").map((t=>t.charCodeAt(0)));else{const e=await fetch(t);n=await e.arrayBuffer()}else if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)"IMG"===t.tagName&&(n=await r(t.src)),"VIDEO"===t.tagName&&(n=await r(t.poster)),"CANVAS"===t.tagName&&await new Promise((r=>{t.toBlob((async t=>{n=await e(t),r()}))}));else if("undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas){const r=await t.convertToBlob();n=await e(r)}else(t instanceof File||t instanceof Blob)&&(n=await e(t));return new Uint8Array(n)};t.exports=r},804:t=>{t.exports=(t,e)=>{t.onmessage=({data:t})=>{e(t)}}},247:t=>{t.exports=async(t,e)=>{t.postMessage(e)}},5:t=>{t.exports=({workerPath:t,workerBlobURL:e})=>{let r;if(Blob&&URL&&e){const e=new Blob([`importScripts("${t}");`],{type:"application/javascript"});r=new Worker(URL.createObjectURL(e))}else r=new Worker(t);return r}},25:t=>{t.exports=t=>{t.terminate()}},547:t=>{"use strict";t.exports=JSON.parse('{"name":"tesseract.js","version":"4.1.0","description":"Pure Javascript Multilingual OCR","main":"src/index.js","types":"src/index.d.ts","unpkg":"dist/tesseract.min.js","jsdelivr":"dist/tesseract.min.js","scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json","prepublishOnly":"npm run build","wait":"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html","lint":"eslint src","lint:fix":"eslint --fix src","postinstall":"opencollective-postinstall || true"},"browser":{"./src/worker/node/index.js":"./src/worker/browser/index.js"},"author":"","contributors":["jeromewu"],"license":"Apache-2.0","devDependencies":{"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0","acorn":"^8.8.2","babel-loader":"^9.1.2","buffer":"^6.0.3","cors":"^2.8.5","eslint":"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1","express":"^4.18.2","mocha":"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5","nyc":"^15.1.0","rimraf":"^5.0.0","rollup":"^3.20.7","wait-on":"^7.0.1","webpack":"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},"dependencies":{"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^4.0.4","wasm-feature-detect":"^1.2.11","zlibjs":"^0.3.1"},"overrides":{"@rollup/pluginutils":"^5.0.2"},"repository":{"type":"git","url":"https://github.com/naptha/tesseract.js.git"},"bugs":{"url":"https://github.com/naptha/tesseract.js/issues"},"homepage":"https://github.com/naptha/tesseract.js","collective":{"type":"opencollective","url":"https://opencollective.com/tesseractjs"}}')}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(320);function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function n(){n=function(){return t};var t={},r=Object.prototype,o=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),s=new O(n||[]);return a(i,"_invoke",{value:x(t,r,s)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=p;var d={};function f(){}function g(){}function y(){}var v={};u(v,s,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(_([])));w&&w!==r&&o.call(w,s)&&(v=w);var b=y.prototype=f.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,r){function n(a,i,s,c){var l=h(t[a],t,i);if("throw"!==l.type){var u=l.arg,p=u.value;return p&&"object"==e(p)&&o.call(p,"__await")?r.resolve(p.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):r.resolve(p).then((function(t){u.value=t,s(u)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var i;a(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}})}function x(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:A}}function A(){return{value:void 0,done:!0}}return g.prototype=y,a(b,"constructor",{value:y,configurable:!0}),a(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,l,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(p(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),u(b,l,"Generator"),u(b,s,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),c=o.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function o(t,e,r,n,o,a,i){try{var s=t[a](i),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}var a=document.querySelector("canvas"),i=document.querySelector("video"),s=document.getElementById("startscan"),c=document.getElementById("stopscan");s.addEventListener("click",(function(){var e,r;console.log("start"),a.width=640,a.height=480,a.getContext("2d").drawImage(i,0,0,a.width,a.height),e=document.querySelector("canvas").toDataURL("image/png"),(r=n().mark((function r(){var o,a,i;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,t.createWorker)({langPath:"./lang-data"});case 2:return o=r.sent,r.next=5,o.loadLanguage("eng");case 5:return r.next=7,o.initialize("eng");case 7:return r.next=9,o.setParameters({tessedit_char_whitelist:"0123456789",classify_bln_numeric_mode:1});case 9:return r.next=11,o.recognize(e);case 11:a=r.sent,(i=a.data.text)&&console.log(i);case 14:case"end":return r.stop()}}),r)})),function(){var t=this,e=arguments;return new Promise((function(n,a){var i=r.apply(t,e);function s(t){o(i,n,a,s,c,"next",t)}function c(t){o(i,n,a,s,c,"throw",t)}s(void 0)}))})()})),c.addEventListener("click",(function(){clearInterval(0),console.log("stop"),a.getContext("2d").clearRect(0,0,a.width,a.height)})),navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){window.stream=t,i.srcObject=t})).catch((function(t){console.log("navigator.getUserMedia error: ",t)}))})()})();