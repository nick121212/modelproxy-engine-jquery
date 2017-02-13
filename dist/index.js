(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("modelProxy"));
	else if(typeof define === 'function' && define.amd)
		define(["modelProxy"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("modelProxy")) : factory(root["modelProxy"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || (function () {
	    var extendStatics = Object.setPrototypeOf ||
	        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	})();
	var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	};
	var __generator = (this && this.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
	    return { next: verb(0), "throw": verb(1), "return": verb(2) };
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [0, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	};
	var modelproxy_1 = __webpack_require__(1);
	var JqueryEngine = (function (_super) {
	    __extends(JqueryEngine, _super);
	    function JqueryEngine() {
	        var _this = _super.call(this) || this;
	        _this.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
	            var startTime;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        startTime = Date.now();
	                        return [4 /*yield*/, next()];
	                    case 1:
	                        _a.sent();
	                        console.log("\u6267\u884C\u65F6\u95F4" + (Date.now() - startTime) + "ms");
	                        return [2 /*return*/];
	                }
	            });
	        }); });
	        _this.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
	            var paramsString, settings, _a;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        paramsString = $.param(ctx.executeInfo.params || {});
	                        settings = {
	                            url: "" + this.getStatePath(ctx.instance) + ctx.instance.path + "?" + paramsString,
	                            data: ctx.executeInfo.data,
	                            method: ctx.instance.method.toString(),
	                            dataType: "json"
	                        };
	                        _a = ctx;
	                        return [4 /*yield*/, $.ajax($.extend({}, settings, ctx.executeInfo.settings || {}))];
	                    case 1:
	                        _a.result = _b.sent();
	                        return [4 /*yield*/, next()];
	                    case 2:
	                        _b.sent();
	                        return [2 /*return*/];
	                }
	            });
	        }); });
	        _this.use(function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        console.log("complete");
	                        return [4 /*yield*/, next()];
	                    case 1:
	                        _a.sent();
	                        return [2 /*return*/];
	                }
	            });
	        }); });
	        return _this;
	    }
	    JqueryEngine.prototype.proxy = function (instance, options) {
	        return __awaiter(this, void 0, void 0, function () {
	            var ctx, fn;
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0:
	                        ctx = {
	                            instance: instance,
	                            executeInfo: options
	                        }, fn = this.callback(function () {
	                            console.log("over");
	                        });
	                        return [4 /*yield*/, fn(ctx)];
	                    case 1:
	                        _a.sent();
	                        return [2 /*return*/, ctx.result];
	                }
	            });
	        });
	    };
	    return JqueryEngine;
	}(modelproxy_1.modelProxy.BaseEngine));
	exports.JqueryEngine = JqueryEngine;


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;