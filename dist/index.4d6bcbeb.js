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
})({"anvqh":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bed887d14d6bcbeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
declare var HMR_USE_SSE: boolean;
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
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
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
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"gLLPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wordList = require("../src/wordList");
var _wordListDefault = parcelHelpers.interopDefault(_wordList);
var _hangman0Svg = require("../src/img/hangman-0.svg");
var _hangman0SvgDefault = parcelHelpers.interopDefault(_hangman0Svg);
var _hangman1Svg = require("../src/img/hangman-1.svg");
var _hangman1SvgDefault = parcelHelpers.interopDefault(_hangman1Svg);
var _hangman2Svg = require("../src/img/hangman-2.svg");
var _hangman2SvgDefault = parcelHelpers.interopDefault(_hangman2Svg);
var _hangman3Svg = require("../src/img/hangman-3.svg");
var _hangman3SvgDefault = parcelHelpers.interopDefault(_hangman3Svg);
var _hangman4Svg = require("../src/img/hangman-4.svg");
var _hangman4SvgDefault = parcelHelpers.interopDefault(_hangman4Svg);
var _hangman5Svg = require("../src/img/hangman-5.svg");
var _hangman5SvgDefault = parcelHelpers.interopDefault(_hangman5Svg);
var _hangman6Svg = require("../src/img/hangman-6.svg");
var _hangman6SvgDefault = parcelHelpers.interopDefault(_hangman6Svg);
var _lostGif = require("../src/img/lost.gif");
var _lostGifDefault = parcelHelpers.interopDefault(_lostGif);
var _victoryGif = require("../src/img/victory.gif");
var _victoryGifDefault = parcelHelpers.interopDefault(_victoryGif);
const hangmanIndex = [
    (0, _hangman0SvgDefault.default),
    (0, _hangman1SvgDefault.default),
    (0, _hangman2SvgDefault.default),
    (0, _hangman3SvgDefault.default),
    (0, _hangman4SvgDefault.default),
    (0, _hangman5SvgDefault.default),
    (0, _hangman6SvgDefault.default)
];
const keyboard = document.querySelector(".keyboard");
const gameDisplay = document.querySelector(".game__display");
const gameHint = document.querySelector(".game__hint b");
const gameGuesses = document.querySelector(".game__guesses b");
const hangman = document.querySelector(".hangman__img");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const correctWord = document.querySelector(".modal__content p b");
const face = document.querySelector(".modal__face");
let currentWord, wrongGuesses = 0, correctGuess;
const maxGuesses = 6;
// get random word from word list, and set style
const getRandomWord = ()=>{
    const random = Math.floor(Math.random() * (0, _wordListDefault.default).length);
    let { word, hint } = (0, _wordListDefault.default)[random];
    word = word.toLowerCase();
    currentWord = word;
    console.log(currentWord);
    gameHint.innerText = hint;
    gameDisplay.innerHTML = word.split("").map(()=>`<li class="game__letter"></li>`).join("");
    correctGuess = new Array([
        ...currentWord
    ].length).fill("");
};
// creating keyboard
for(let i = 97; i <= 122; i++){
    const btn = document.createElement("button");
    btn.innerText = String.fromCharCode(i);
    keyboard.appendChild(btn);
}
// init game
const init = function(btn, clickedLetter) {
    const wordsArray = [
        ...currentWord
    ];
    if (currentWord.includes(clickedLetter)) wordsArray.forEach((letter, index)=>{
        if (letter === clickedLetter) {
            correctGuess[index] = clickedLetter;
            gameDisplay.querySelectorAll("li")[index].innerText = letter;
            gameDisplay.querySelectorAll("li")[index].classList.add("guessed");
            btn.disabled = true;
            wordFound();
        }
    });
    else {
        btn.classList.add("game__letter--wrong");
        btn.disabled = true;
        wrongGuesses++;
        hangman.src = hangmanIndex[wrongGuesses];
        hangman.classList.add("hangman--swing");
        hangman.addEventListener("animationend", ()=>{
            hangman.classList.remove("hangman--swing");
        }, {
            once: true
        });
        gameGuesses.innerText = `${wrongGuesses} / ${maxGuesses}`;
        if (wrongGuesses === maxGuesses) return gameOver();
    }
};
// add events to all buttons on keyboard using event delegation
keyboard.addEventListener("click", function(event) {
    if (!event.target instanceof HTMLButtonElement || event.target.classList.contains("keyboard")) return;
    init(event.target, event.target.textContent);
});
getRandomWord();
// game over conditions
const gameOver = function() {
    gameEndingScreen();
    face.src = (0, _lostGifDefault.default);
    modal.querySelector("h4").innerText = "Game Over!";
};
// reset game
const reset = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    getRandomWord();
    const btns = keyboard.querySelectorAll("button");
    btns.forEach((btn)=>btn.classList.contains("game__letter--wrong") ? btn.classList.remove("game__letter--wrong") : true);
    btns.forEach((btn)=>btn.disabled ? btn.disabled = false : true);
    hangman.src = (0, _hangman0SvgDefault.default);
    wrongGuesses = 0;
    gameGuesses.innerText = `${wrongGuesses} / ${maxGuesses}`;
    face.src = "";
};
// game winnner
const gameWinner = function() {
    face.src = (0, _victoryGifDefault.default);
    modal.querySelector("h4").innerText = "Victory!";
};
// listen for play again
modal.addEventListener("click", function(e) {
    if (!modal.classList.contains("hidden") && e.target instanceof HTMLButtonElement) reset();
});
// word found condition
const wordFound = function() {
    if (!correctGuess.includes("")) {
        gameWinner();
        gameEndingScreen();
    }
};
// game ended screen condition
const gameEndingScreen = function() {
    correctWord.innerText = currentWord;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../src/wordList":"28wcK","../src/img/hangman-0.svg":"8uofV","../src/img/hangman-1.svg":"3plFN","../src/img/hangman-2.svg":"1h9J1","../src/img/hangman-3.svg":"duIGS","../src/img/hangman-4.svg":"7AoOl","../src/img/hangman-5.svg":"iODxk","../src/img/hangman-6.svg":"4ot1Z","../src/img/lost.gif":"ikJIy","../src/img/victory.gif":"keTh6"}],"gkKU3":[function(require,module,exports) {
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
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"28wcK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = wordList = [
    {
        word: "HTML",
        hint: "Markup language for web pages"
    },
    {
        word: "CSS",
        hint: "Stylesheets for web design"
    },
    {
        word: "JavaScript",
        hint: "Popular web scripting language"
    },
    {
        word: "React",
        hint: "JavaScript library for UI"
    },
    {
        word: "Bootstrap",
        hint: "CSS framework for responsive design"
    },
    {
        word: "Angular",
        hint: "JavaScript framework by Google"
    },
    {
        word: "Vue",
        hint: "Progressive JavaScript framework"
    },
    {
        word: "jQuery",
        hint: "JavaScript library for easier DOM manipulation"
    },
    {
        word: "AJAX",
        hint: "Technique for asynchronous web requests"
    },
    {
        word: "JSON",
        hint: "Data format for web APIs"
    },
    {
        word: "API",
        hint: "Interface for web services"
    },
    {
        word: "PHP",
        hint: "Server-side scripting language"
    },
    {
        word: "MySQL",
        hint: "Popular relational database"
    },
    {
        word: "MongoDB",
        hint: "NoSQL database"
    },
    {
        word: "GraphQL",
        hint: "Query language for APIs"
    },
    {
        word: "NPM",
        hint: "Package manager for Node.js"
    },
    {
        word: "TypeScript",
        hint: "Superset of JavaScript"
    },
    {
        word: "Express",
        hint: "Web framework for Node.js"
    },
    {
        word: "SEO",
        hint: "Optimizing for search engines"
    },
    {
        word: "REST",
        hint: "Web service architecture"
    },
    {
        word: "HTTPS",
        hint: "Secure web protocol"
    },
    {
        word: "SSL",
        hint: "Protocol for encrypting web traffic"
    },
    {
        word: "CORS",
        hint: "Cross-Origin Resource Sharing"
    },
    {
        word: "Tailwind",
        hint: "Utility-first CSS framework"
    },
    {
        word: "GitHub",
        hint: "Most popular code hosting platform"
    },
    {
        word: "Electron",
        hint: "Framework for building desktop apps"
    },
    {
        word: "UX",
        hint: "User Experience"
    },
    {
        word: "UI",
        hint: "User Interface"
    },
    {
        word: "Python",
        hint: "Popular high-level programming language"
    },
    {
        word: "Ruby",
        hint: "Dynamic programming language focused on simplicity"
    },
    {
        word: "Java",
        hint: "Widely-used object-oriented programming language"
    },
    {
        word: "Swift",
        hint: "Programming language for iOS and macOS"
    },
    {
        word: "Kotlin",
        hint: "Modern programming language for Android development"
    },
    {
        word: "Go",
        hint: "Statically typed language by Google"
    },
    {
        word: "Rust",
        hint: "System programming language focused on safety"
    },
    {
        word: "Perl",
        hint: "High-level, general-purpose programming language"
    },
    {
        word: "Scala",
        hint: "Language combining object-oriented and functional programming"
    },
    {
        word: "Elixir",
        hint: "Dynamic language for scalable applications"
    },
    {
        word: "Lua",
        hint: "Lightweight scripting language"
    },
    {
        word: "MATLAB",
        hint: "Language for numerical computing"
    },
    {
        word: "R",
        hint: "Language for statistical computing"
    },
    {
        word: "SQL",
        hint: "Language for managing databases"
    },
    {
        word: "Bash",
        hint: "Unix shell and command language"
    },
    {
        word: "Shell",
        hint: "Command language interpreter"
    },
    {
        word: "Powershell",
        hint: "Task automation framework by Microsoft"
    },
    {
        word: "Fortran",
        hint: "Language for numerical and scientific computing"
    },
    {
        word: "Assembly",
        hint: "Low-level programming language"
    },
    {
        word: "Scratch",
        hint: "Visual programming language for beginners"
    },
    {
        word: "Dart",
        hint: "Language optimized for UI"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uofV":[function(require,module,exports) {
module.exports = require("50495282e25a44a6").getBundleURL("gnRNX") + "hangman-0.d4bf638d.svg" + "?" + Date.now();

},{"50495282e25a44a6":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3plFN":[function(require,module,exports) {
module.exports = require("a475c8a821e58f42").getBundleURL("gnRNX") + "hangman-1.8718dde5.svg" + "?" + Date.now();

},{"a475c8a821e58f42":"lgJ39"}],"1h9J1":[function(require,module,exports) {
module.exports = require("ac33067aa687f94").getBundleURL("gnRNX") + "hangman-2.3cafe51a.svg" + "?" + Date.now();

},{"ac33067aa687f94":"lgJ39"}],"duIGS":[function(require,module,exports) {
module.exports = require("d691663ac9b84ed4").getBundleURL("gnRNX") + "hangman-3.3c3a0b02.svg" + "?" + Date.now();

},{"d691663ac9b84ed4":"lgJ39"}],"7AoOl":[function(require,module,exports) {
module.exports = require("cd05bef4a12d4903").getBundleURL("gnRNX") + "hangman-4.c75417df.svg" + "?" + Date.now();

},{"cd05bef4a12d4903":"lgJ39"}],"iODxk":[function(require,module,exports) {
module.exports = require("dee4567e1acb97b9").getBundleURL("gnRNX") + "hangman-5.e6258132.svg" + "?" + Date.now();

},{"dee4567e1acb97b9":"lgJ39"}],"4ot1Z":[function(require,module,exports) {
module.exports = require("d798565c957ba952").getBundleURL("gnRNX") + "hangman-6.f1b2941e.svg" + "?" + Date.now();

},{"d798565c957ba952":"lgJ39"}],"ikJIy":[function(require,module,exports) {
module.exports = require("157fa57dc4dce362").getBundleURL("gnRNX") + "lost.e7515ab9.gif" + "?" + Date.now();

},{"157fa57dc4dce362":"lgJ39"}],"keTh6":[function(require,module,exports) {
module.exports = require("84890bc6bff1f745").getBundleURL("gnRNX") + "victory.44132a74.gif" + "?" + Date.now();

},{"84890bc6bff1f745":"lgJ39"}]},["anvqh","gLLPy"], "gLLPy", "parcelRequireec6f")

//# sourceMappingURL=index.4d6bcbeb.js.map
