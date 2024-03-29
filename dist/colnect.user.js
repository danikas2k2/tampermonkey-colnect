/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ==UserScript==
// @name         collector :: colnect.com
// @namespace    https://colnect.com/
// @version      1.2.9
// @author       danikas2k2
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB6UlEQVQ4jdWSTUhUcRTFf/c/b8ZyMUW5qhZF1MaNZF8qge2siGxR29o48wZ1EW1bqGCt2hTWvCGKaNenEFgEIwXiWKK7FhEtMoQKtbSEGN/8T4sUxI82rbqrC+eewzmHC//92NJSn4lqkk7dDk56eD6SDzMAxzqvVX2Lqy46dE5il8Fnj574RKXnTV/HdADQlM3v96anQFow64w0QO2Z+6nvCzMvQJtkPAK9kiw27EKiEpSOdN5uChoz0W5vKoJNWmLh8HBf+0RzV3cCIL11OgO23bBbeI2Wolzxj18NNoaF/jguX3FyugykMcsN93V8BNPLrq54MWGrsHsmzZWisLgsubzZdROnHNACaMfU5qE1Oqp28BPTw1VIRT8E1cFikTZRM1UHjAEcbCvstSDegGdIpuOlfO7qqvadb0U2ZA1h/jFwGmPexLDENoxamZ1PBsmBeKE8DtZf9lwaK2Rn6zNRMmkKzeiVt2ZnKAQ9Q2wUqsPxzokTIzezdxX/ihED4PelnL40hPkPKacZM9pwrmWkkB23ldaW/UV1KqFBRF3sKnsC77xgp2RfX0fh+6W7YG26LOWiO4hDGD2jN9o/LQKTKy/dWvTGMH8U44BhY3NTW3rXc7mugHBNJhUrsWt9++Bs+W8C/zy/AT3Myy3qczVrAAAAAElFTkSuQmCC
// @downloadURL  https://raw.githubusercontent.com/danikas2k2/tampermonkey-colnect/master/dist/colnect.user.js
// @updateURL    https://raw.githubusercontent.com/danikas2k2/tampermonkey-colnect/master/dist/colnect.user.js
// @match        https://*.colnect.com/*/coins/*
// @match        https://*.colnect.com/*/banknotes/*
// @match        https://*.colnect.com/*/stamps/*
// @match        https://*.colnect.com/*/medals/*
// @match        https://*.colnect.com/*/tokens/*
// @run-at       document-end
// ==/UserScript==
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const colnect_less_1 = __importDefault(__webpack_require__(2));
$('head').append(`<style type="text/css">${colnect_less_1.default}</style>`);
const loc = document.location.href;
const type = (loc => {
    if (loc.includes('/coins/')) {
        return 'coins';
    }
    if (loc.includes('/banknotes/')) {
        return 'banknotes';
    }
    if (loc.includes('/stamps/')) {
        return 'stamps';
    }
    if (loc.includes('/medals/')) {
        return 'medals';
    }
    if (loc.includes('/tokens/')) {
        return 'tokens';
    }
    return 'other';
})(loc);
$('body').addClass(type);
const itemFullDetails = $('#item_full_details');
const itemCondition = $(`> .ibox > .ibox_list[data-lt="2"] .pop.condition`, itemFullDetails);
const { updateQC: _updateQC, spanCBup: _spanCBup } = Inventory;
if (type === 'coins' && loc.includes('/coin/')) {
    const itemYearVariants = $(`> .year_variants > ul > li[data-id]`, itemFullDetails);
    let currentPopCondition;
    const mouseOverCondition = (li) => {
        const popCondition = $('.ibox_list[data-lt="2"] > .pop.condition', li);
        if (popCondition) {
            popCondition.trigger('mouseover');
        }
        return popCondition;
    };
    // clicking on year row
    itemYearVariants.each((i, itemYearVariant) => {
        $(itemYearVariant).on('click', e => {
            currentPopCondition = mouseOverCondition($(e.currentTarget));
        });
    });
    const _q = { P: 1, FA: 2, G: 3, VG: 4, FI: 5, VF: 6, XF: 7, UNC: 8, BU: 9, FDC: 10 };
    const q = (s) => (s && s in _q) ? _q[s] : 0;
    //
    const qualityList = $('#quality_list');
    const updateOverallCondition = (e, current) => {
        const variants = [];
        itemYearVariants.each((i, n) => {
            const qn = $('ul.oth_inv', n).text().split(':', 2).pop().trim();
            variants.push(n.classList.contains('open')
                ? current
                : q(qn));
        });
        const best = Math.max(...variants);
        if (best && best !== q(itemCondition.text())) {
            itemCondition.trigger('mouseover');
            _updateQC(e, $(`#quality_list a[data-value="${best}"]`, itemCondition)[0]);
            if (currentPopCondition && currentPopCondition.length) {
                currentPopCondition.trigger('mouseover');
            }
            else {
                itemCondition.trigger('mouseout');
            }
        }
    };
    Inventory.updateQC = (e, n) => {
        const _r = _updateQC(e, n);
        updateOverallCondition(e, +$('a[data-value]', n).data('value'));
        return _r;
    };
    Inventory.spanCBup = (n) => {
        const _r = _spanCBup(n);
        if (n.classList.contains('cb_checked')) {
            // @ts-ignore
            updateOverallCondition(event, 0, null);
        }
        else {
            itemCondition.trigger('mouseover');
        }
        return _r;
    };
    $('li', qualityList)
        .off('click')
        .on('click', e => Inventory.updateQC(e, e.currentTarget));
}
else {
    Inventory.spanCBup = (n) => {
        const _r = _spanCBup(n);
        if (!n.classList.contains('cb_checked')) {
            itemCondition.trigger('mouseover');
        }
        return _r;
    };
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#quality_list {\n  display: flex;\n  visibility: visible;\n  opacity: 1;\n  width: auto;\n  padding: 0 1px;\n}\n#quality_list li {\n  width: 32px;\n  flex: 0 0 32px;\n  overflow: hidden;\n}\n#quality_list li + li {\n  margin-left: 1px;\n}\n#quality_list li:first-child a::before {\n  content: \"- \";\n}\n#quality_list li a {\n  margin: 0;\n  padding: 0 8px;\n  width: 16px;\n  height: 32px;\n  white-space: normal;\n  text-align: center;\n  line-height: 32px;\n  /* reserved */\n  /* reserved */\n  /* - */\n}\n#quality_list li a.pop_selected,\n#quality_list li a:hover {\n  font-size: 14px;\n  padding: 0 6px;\n  width: 20px;\n  border-top: 1px solid #fff;\n  border-bottom: 1px solid #fff;\n}\n#quality_list li a[data-value=\"-1\"] {\n  background: #5A6986;\n  color: #dee5f2;\n}\n#quality_list li a[data-value=\"-2\"] {\n  background: #854F61;\n  color: #FDE9F4;\n}\n#quality_list li a[data-value=\"0\"] {\n  background: #EEEEEE;\n  color: #242633;\n}\n/* coins, tokens */\n.coins #quality_list li,\n.tokens #quality_list li {\n  /* FDC */\n}\n.coins #quality_list li a,\n.tokens #quality_list li a {\n  /* P */\n  /* FA */\n  /* G */\n  /* VG */\n  /* FI */\n  /* VF */\n  /* XF */\n  /* UNC */\n  /* BU */\n  /* FDC */\n}\n.coins #quality_list li a[data-value=\"1\"],\n.tokens #quality_list li a[data-value=\"1\"] {\n  background: #CC0000;\n  color: #FFE3E3;\n}\n.coins #quality_list li a[data-value=\"2\"],\n.tokens #quality_list li a[data-value=\"2\"] {\n  background: #EC7000;\n  color: #FFF0E1;\n}\n.coins #quality_list li a[data-value=\"3\"],\n.tokens #quality_list li a[data-value=\"3\"] {\n  background: #B36D00;\n  color: #FADCB3;\n}\n.coins #quality_list li a[data-value=\"4\"],\n.tokens #quality_list li a[data-value=\"4\"] {\n  background: #AB8B00;\n  color: #F3E7B3;\n}\n.coins #quality_list li a[data-value=\"5\"],\n.tokens #quality_list li a[data-value=\"5\"] {\n  background: #636330;\n  color: #FFFFD4;\n}\n.coins #quality_list li a[data-value=\"6\"],\n.tokens #quality_list li a[data-value=\"6\"] {\n  background: #64992C;\n  color: #F9FFEF;\n}\n.coins #quality_list li a[data-value=\"7\"],\n.tokens #quality_list li a[data-value=\"7\"] {\n  background: #006633;\n  color: #F1F5EC;\n}\n.coins #quality_list li a[data-value=\"8\"],\n.tokens #quality_list li a[data-value=\"8\"] {\n  background: #206CFF;\n  color: #E0ECFF;\n}\n.coins #quality_list li a[data-value=\"9\"],\n.tokens #quality_list li a[data-value=\"9\"] {\n  background: #0000CC;\n  color: #DFE2FF;\n}\n.coins #quality_list li a[data-value=\"10\"],\n.tokens #quality_list li a[data-value=\"10\"] {\n  background: #5229A3;\n  color: #E0D5F9;\n}\n.coins #quality_list li:nth-last-child(1) a,\n.tokens #quality_list li:nth-last-child(1) a,\n.coins #quality_list li:nth-last-child(3) a,\n.tokens #quality_list li:nth-last-child(3) a,\n.coins #quality_list li:nth-last-child(1) a.pop_selected,\n.tokens #quality_list li:nth-last-child(1) a.pop_selected,\n.coins #quality_list li:nth-last-child(3) a.pop_selected,\n.tokens #quality_list li:nth-last-child(3) a.pop_selected,\n.coins #quality_list li:nth-last-child(1) a:hover,\n.tokens #quality_list li:nth-last-child(1) a:hover,\n.coins #quality_list li:nth-last-child(3) a:hover,\n.tokens #quality_list li:nth-last-child(3) a:hover {\n  padding: 0;\n  width: 32px;\n}\n/* medals */\n.medals #quality_list li a {\n  /* P */\n  /* G */\n  /* VG */\n  /* E */\n  /* M */\n}\n.medals #quality_list li a[data-value=\"1\"] {\n  background: #CC0000;\n  color: #FFE3E3;\n}\n.medals #quality_list li a[data-value=\"2\"] {\n  background: #AB8B00;\n  color: #F3E7B3;\n}\n.medals #quality_list li a[data-value=\"3\"] {\n  background: #64992C;\n  color: #F9FFEF;\n}\n.medals #quality_list li a[data-value=\"4\"] {\n  background: #006633;\n  color: #F1F5EC;\n}\n.medals #quality_list li a[data-value=\"5\"] {\n  background: #0000CC;\n  color: #DFE2FF;\n}\n/* banknotes */\n.banknotes #quality_list li {\n  /* UNC */\n  /* AUNC */\n}\n.banknotes #quality_list li a {\n  /* P */\n  /* FA */\n  /* G */\n  /* VG */\n  /* FI */\n  /* VF */\n  /* XF */\n  /* AUNC */\n  /* UNC */\n}\n.banknotes #quality_list li a[data-value=\"1\"] {\n  background: #CC0000;\n  color: #FFE3E3;\n}\n.banknotes #quality_list li a[data-value=\"2\"] {\n  background: #EC7000;\n  color: #FFF0E1;\n}\n.banknotes #quality_list li a[data-value=\"3\"] {\n  background: #B36D00;\n  color: #FADCB3;\n}\n.banknotes #quality_list li a[data-value=\"4\"] {\n  background: #AB8B00;\n  color: #F3E7B3;\n}\n.banknotes #quality_list li a[data-value=\"5\"] {\n  background: #636330;\n  color: #FFFFD4;\n}\n.banknotes #quality_list li a[data-value=\"6\"] {\n  background: #64992C;\n  color: #F9FFEF;\n}\n.banknotes #quality_list li a[data-value=\"7\"] {\n  background: #006633;\n  color: #F1F5EC;\n}\n.banknotes #quality_list li a[data-value=\"8\"] {\n  background: #206CFF;\n  color: #E0ECFF;\n}\n.banknotes #quality_list li a[data-value=\"9\"] {\n  background: #0000CC;\n  color: #DFE2FF;\n}\n.banknotes #quality_list li:nth-last-child(1) a,\n.banknotes #quality_list li:nth-last-child(1) a.pop_selected,\n.banknotes #quality_list li:nth-last-child(1) a:hover {\n  padding: 0;\n  width: 32px;\n}\n.banknotes #quality_list li:nth-last-child(2) a::before {\n  content: \"AU \";\n}\n/* stamps */\n.stamps #quality_list li {\n  /* MNH */\n  /* MH */\n}\n.stamps #quality_list li a {\n  /* MNH */\n  /* MH */\n  /* U */\n  /* CTO */\n}\n.stamps #quality_list li a[data-value=\"1\"] {\n  background: #006633;\n  color: #F1F5EC;\n}\n.stamps #quality_list li a[data-value=\"2\"] {\n  background: #64992C;\n  color: #F9FFEF;\n}\n.stamps #quality_list li a[data-value=\"3\"] {\n  background: #636330;\n  color: #FFFFD4;\n}\n.stamps #quality_list li a[data-value=\"4\"] {\n  background: #AB8B00;\n  color: #F3E7B3;\n}\n.stamps #quality_list li:nth-last-child(2) a,\n.stamps #quality_list li:nth-last-child(5) a,\n.stamps #quality_list li:nth-last-child(2) a.pop_selected,\n.stamps #quality_list li:nth-last-child(5) a.pop_selected,\n.stamps #quality_list li:nth-last-child(2) a:hover,\n.stamps #quality_list li:nth-last-child(5) a:hover {\n  padding: 0;\n  width: 32px;\n}\n.stamps #quality_list li:nth-last-child(3) a {\n  padding: 0 2px;\n  width: 28px;\n}\n.stamps #quality_list li:nth-last-child(3) a.pop_selected,\n.stamps #quality_list li:nth-last-child(3) a:hover {\n  padding: 0;\n  width: 32px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })
/******/ ]);