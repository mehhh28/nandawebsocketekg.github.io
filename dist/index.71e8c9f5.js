// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"47uZI":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7554d2eb71e8c9f5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"2dgaA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _comfey = require("comfey");
var _comfeyDefault = parcelHelpers.interopDefault(_comfey);
const COMFEY_DEBUG = 0;
const viewUpdater = new (0, _comfey.ComfeyDom)(document.getElementById("ecg"), COMFEY_DEBUG);
const ecgApp = new (0, _comfeyDefault.default)(viewUpdater);
const [_RR, setRR] = ecgApp.useState("rr", 0);
const [_freq, setFreq] = ecgApp.useState("freq", 0);
const [_hr, setHR] = ecgApp.useState("hr", 0);
const [_val, setVal] = ecgApp.useState("value", 0);
const pauseBtn = document.getElementById("pause-btn");
let t = -1;
const n = 600;
const data = [];
const margin = {
    top: 6,
    right: 0,
    bottom: 40,
    left: 40
};
const width = n - margin.right;
const height = 360 - margin.top - margin.bottom;
const x = d3.scale.linear().domain([
    t - n + 1,
    t
]).range([
    0,
    width
]);
const xAxis = d3.svg.axis().scale(x).orient("bottom");
const y = d3.time.scale().range([
    height,
    0
]).domain([
    0,
    4000
]);
const line = d3.svg.line().interpolate("basis").x(function(d, i) {
    return x(d.time);
}).y(function(d, i) {
    return y(d.value);
});
const svg = d3.select(".ecg-graph").append("p").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).style("margin-left", -margin.left + "px").append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
svg.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", width).attr("height", height);
const axis = svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(x.axis = xAxis);
const path = svg.append("g").attr("clip-path", "url(#clip)").append("path").style("fill", "none").style("stroke", "black").style("stroke-width", "1").data([
    data
]).attr("class", "line");
function tick() {
    x.domain([
        t - n + 2,
        t
    ]);
    axis.call(x.axis);
    // redraw the line
    svg.select(".line").attr("d", line);
    if (data.length > n) data.shift();
}
if ("WebSocket" in window) {
    const ws = new WebSocket("ws://192.168.100.4/ws");
    // Mock server
    //var ws = new WebSocket("ws://localhost:3211");
    ws.onerror = (e)=>{
        console.error({
            e
        });
    };
    ws.onopen = function() {
        ws.send("Hello");
        pauseBtn.addEventListener("click", (e)=>{
            ws.send("p");
        });
    };
    let millis = 0;
    let millisBuf = [];
    let lastR = +new Date();
    ws.onmessage = function(evt) {
        const val = evt.data;
        val.trim().split(" ").forEach((v)=>{
            const newMillis = performance.now();
            const value = parseInt(v);
            // Calculate the data rate
            if (millisBuf.length <= 100) millisBuf.push(newMillis - millis);
            if (millisBuf.length === 100) {
                const avgMillis = millisBuf.reduce((p, c)=>p + c, 0) / 100;
                setFreq(Math.round(1000 / avgMillis));
                millisBuf = [];
            }
            millis = newMillis;
            // Calculate heart rate
            if (value > 2000) {
                const now = +new Date();
                const rr = now - lastR;
                if (rr > 200) {
                    lastR = now;
                    setRR(rr);
                    setHR(Math.round(1000 / rr * 60));
                }
            }
            // update Graph
            data.push({
                time: ++t,
                value
            });
            // Just to visualize heart beating
            if (millisBuf.length % 5) setVal(value / 80 + 15);
            tick();
        });
    };
    ws.onclose = function() {
        console.warn("Connection is closed...");
        setTimeout(()=>{
            window.location = ".";
        }, 2000);
    };
} else console.error("WebSocket NOT supported by your Browser!");

},{"comfey":"3Qp8i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Qp8i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _comfeyJsDefault.default));
parcelHelpers.export(exports, "ComfeyDom", ()=>(0, _domJsDefault.default));
parcelHelpers.export(exports, "fsm", ()=>(0, _indexJsDefault.default));
var _comfeyJs = require("./src/comfey.js");
var _comfeyJsDefault = parcelHelpers.interopDefault(_comfeyJs);
var _domJs = require("./src/view/dom.js");
var _domJsDefault = parcelHelpers.interopDefault(_domJs);
var _indexJs = require("./src/fsm/index.js");
var _indexJsDefault = parcelHelpers.interopDefault(_indexJs);

},{"./src/comfey.js":"5v5J0","./src/view/dom.js":"1n7BL","./src/fsm/index.js":"gS2eZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5v5J0":[function(require,module,exports) {
/**
 * Comfey
 *
 * Lightweight framework for keeping state for your vanilla Js and simple data binding for HTML
 *
 * Comfey #764 (Japanese: キュワワー Cuwawa) is a Fairy-type Pokémon introduced in Generation VII.
 * It is not known to evolve into or from any other Pokémon.
 *
 * @author Anil Maharjan <anilmaharjan.com.np>
 **/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Comfey {
    /**
   * Creates an instance of Comfey.
   * @param {View} [view] View updater, implements IView Interface
   * @param {boolean} [debug=false] Flag to enable debug mode
   * @memberof Comfey
   */ constructor(view, debug = false){
        this.view = view;
        this.debug = debug;
    }
    /**
   *
   * Initializes a new state and returns getter and setter for the state
   * @param {string} state name of the state
   * @param {any} initialVal initial value
   * @param {function} watcher watcher function that will be called everytime the value of the state changes
   *
   * @returns {Array<[function, function]>} getterFunction and SetterFunction
   */ useState(state, initialVal, watcher) {
        const stateName = state;
        let value = initialVal;
        const setter = (newVal)=>{
            if (watcher) watcher(newVal, value, stateName);
            value = newVal;
            this.updateView(stateName, value);
        };
        this.updateView(stateName, value, true);
        return [
            ()=>value,
            setter
        ];
    }
    updateView(stateName, value, firstUpdate) {
        if (this.view) this.view.update(stateName, value, firstUpdate);
    }
}
exports.default = Comfey;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1n7BL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class ComfeyDom {
    constructor(root = document, debug = false){
        this.root = root;
        this.debug = debug;
        if (debug) {
            const rootIdentifier = root.tagName + (root.id != "" ? "#" + root.id : "");
            const debugUI = document.createElement("div");
            debugUI.addEventListener("dragend", (e)=>{
                e.preventDefault();
                e.target.style.top = `${e.pageY}px`;
                e.target.style.left = `${e.pageX}px`;
            });
            debugUI.setAttribute("class", "comfey-debug");
            debugUI.setAttribute("draggable", true);
            debugUI.innerHTML = `<h2>Comfey Debug (${rootIdentifier})</h2>
        <table>
          <thead>
            <tr>
              <th>State</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
          </tbody>`;
            this.root.appendChild(debugUI);
        }
    }
    /**
   * Update DOM, gets triggered by State updates
   * @param {string} stateName
   * @param {*} value
   * @return {void}
   * @memberof Comfey
   */ update(stateName, value, firstUpdate) {
        if (firstUpdate) {
            if (this.debug) {
                const debugRow = document.createElement("tr");
                debugRow.innerHTML = `
              <th>${stateName}</th>
              <td>
                <span data-bind="${stateName}"></span>
              </td>
            `;
                this.root.querySelector(".comfey-debug tbody").appendChild(debugRow);
            }
        }
        const boundElems = this.root.querySelectorAll(`[data-bind="${stateName}"]`);
        for (const boundEl of boundElems)boundEl.innerHTML = value;
        // Visible
        const boundVisibleElems = this.root.querySelectorAll(`[data-bind-visible^="${stateName}"]`);
        for (const boundEl of boundVisibleElems){
            const [, val, comparator] = boundEl.dataset.bindVisible.split("::");
            if (comparator) console.warn("Comfey: Comparators are not yet supported in bind-visible.");
            if (val) {
                if (val === value) boundEl.classList.add("visible");
                else boundEl.classList.remove("visible");
            } else if (value) boundEl.classList.add("visible");
            else boundEl.classList.remove("visible");
        }
        // Hidden
        const boundHiddenElems = this.root.querySelectorAll(`[data-bind-hidden="${stateName}"]`);
        for (const boundEl of boundHiddenElems)if (value) boundEl.classList.add("hidden");
        else boundEl.classList.remove("hidden");
        // Classes
        const boundClassElems = this.root.querySelectorAll(`[data-bind-class^="${stateName}:"]`);
        for (const boundEl of boundClassElems){
            const [, val, comparator] = boundEl.dataset.bindClass.split("::");
            const className = val;
            if (!className) return;
            if (value && !comparator || value && comparator && value == comparator) boundEl.classList.add(className);
            else boundEl.classList.remove(className);
        }
        // Attr
        const boundAttrElems = this.root.querySelectorAll(`[data-bind-attr^="${stateName}:"]`);
        for (const boundEl of boundAttrElems){
            const [, attr, val] = boundEl.dataset.bindAttr.split("::");
            if (value) boundEl.setAttribute(attr, val.replaceAll("$", value));
            else boundEl.removeAttribute(attr);
        }
    }
}
exports.default = ComfeyDom;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gS2eZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function fsm(app, state, config, watcher) {
    const [getState, setState] = app.useState(state, config.start, watcher);
    const _transitions = ()=>{
        return config[getState()];
    };
    const getTransitions = ()=>{
        return Object.keys(_transitions());
    };
    const transition = (key)=>{
        if (!_transitions().hasOwnProperty(key)) throw new Error("Invalid transition key");
        setState(_transitions()[key]);
    };
    return {
        getState,
        getTransitions,
        transition
    };
}
exports.default = fsm;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["47uZI","2dgaA"], "2dgaA", "parcelRequirede65")

//# sourceMappingURL=index.71e8c9f5.js.map
