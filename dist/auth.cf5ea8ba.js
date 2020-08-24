// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__createBinding = __createBinding;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__classPrivateFieldGet = __classPrivateFieldGet;
exports.__classPrivateFieldSet = __classPrivateFieldSet;
exports.__assign = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __createBinding(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
}

function __exportStar(m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }

  return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }

  privateMap.set(receiver, value);
  return value;
}
},{}],"node_modules/@firebase/util/dist/index.cjs.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return 'indexedDB' in self && indexedDB !== null;
}
/**
 * This method validates browser context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 */
function validateIndexedDBOpenable() {
    return new Promise(function (resolve, reject) {
        try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = window.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function () {
                request_1.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist_1) {
                    window.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                }
                resolve(true);
            };
            request_1.onupgradeneeded = function () {
                preExist_1 = false;
            };
            request_1.onerror = function () {
                var _a;
                reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (!navigator || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.areCookiesEnabled = areCookiesEnabled;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isBrowserExtension = isBrowserExtension;
exports.isElectron = isElectron;
exports.isEmpty = isEmpty;
exports.isIE = isIE;
exports.isIndexedDBAvailable = isIndexedDBAvailable;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isSafari = isSafari;
exports.isUWP = isUWP;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateIndexedDBOpenable = validateIndexedDBOpenable;
exports.validateNamespace = validateNamespace;


},{"tslib":"node_modules/tslib/tslib.es6.js"}],"node_modules/@firebase/component/dist/index.cjs.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var util = require('@firebase/util');

/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new util.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            // If the service instance is available, resolve the promise with it immediately
            try {
                var instance = this.getOrInitializeService(normalizedIdentifier);
                if (instance) {
                    deferred.resolve(instance);
                }
            }
            catch (e) {
                // when the instance factory throws an exception during get(), it should not cause
                // a fatal error. We just return the unresolved promise in this case.
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a = tslib.__assign({ identifier: DEFAULT_ENTRY_NAME, optional: false }, options), identifier = _a.identifier, optional = _a.optional;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        try {
            var instance = this.getOrInitializeService(normalizedIdentifier);
            if (!instance) {
                if (optional) {
                    return null;
                }
                throw Error("Service " + this.name + " is not available");
            }
            return instance;
        }
        catch (e) {
            if (optional) {
                return null;
            }
            else {
                throw e;
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService(DEFAULT_ENTRY_NAME);
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = tslib.__values(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = tslib.__read(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService(normalizedIdentifier);
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return tslib.__awaiter(this, void 0, void 0, function () {
            var services;
            return tslib.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all(services
                                .filter(function (service) { return 'INTERNAL' in service; })
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.getOrInitializeService = function (identifier) {
        var instance = this.instances.get(identifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, normalizeIdentifierForFactory(identifier));
            this.instances.set(identifier, instance);
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());

exports.Component = Component;
exports.ComponentContainer = ComponentContainer;
exports.Provider = Provider;


},{"tslib":"node_modules/tslib/tslib.es6.js","@firebase/util":"node_modules/@firebase/util/dist/index.cjs.js"}],"node_modules/@firebase/logger/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = setLogLevel;
exports.setUserLogHandler = setUserLogHandler;
exports.Logger = exports.LogLevel = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var _a;
/**
 * A container for all of the Logger instances
 */


var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (exports.LogLevel = LogLevel = {}));

var levelStringToEnum = {
  'debug': LogLevel.DEBUG,
  'verbose': LogLevel.VERBOSE,
  'info': LogLevel.INFO,
  'warn': LogLevel.WARN,
  'error': LogLevel.ERROR,
  'silent': LogLevel.SILENT
};
/**
 * The default log level
 */

var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */

var ConsoleMethod = (_a = {}, _a[LogLevel.DEBUG] = 'log', _a[LogLevel.VERBOSE] = 'log', _a[LogLevel.INFO] = 'info', _a[LogLevel.WARN] = 'warn', _a[LogLevel.ERROR] = 'error', _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function (instance, logType) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();
  var method = ConsoleMethod[logType];

  if (method) {
    console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
  } else {
    throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger =
/** @class */
function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The main (internal) log handler for the Logger instance.
     * Can be set to a new function in internal package code but not by user.
     */

    this._logHandler = defaultLogHandler;
    /**
     * The optional, additional, user-defined log handler for the Logger instance.
     */

    this._userLogHandler = null;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function () {
      return this._logLevel;
    },
    set: function (val) {
      if (!(val in LogLevel)) {
        throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
      }

      this._logLevel = val;
    },
    enumerable: false,
    configurable: true
  }); // Workaround for setter/getter having to be the same type.

  Logger.prototype.setLogLevel = function (val) {
    this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
  };

  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function () {
      return this._logHandler;
    },
    set: function (val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "userLogHandler", {
    get: function () {
      return this._userLogHandler;
    },
    set: function (val) {
      this._userLogHandler = val;
    },
    enumerable: false,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */

  Logger.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
  };

  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
  };

  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
  };

  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
  };

  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));

    this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
  };

  return Logger;
}();

exports.Logger = Logger;

function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.setLogLevel(level);
  });
}

function setUserLogHandler(logCallback, options) {
  var _loop_1 = function (instance) {
    var customLogLevel = null;

    if (options && options.level) {
      customLogLevel = levelStringToEnum[options.level];
    }

    if (logCallback === null) {
      instance.userLogHandler = null;
    } else {
      instance.userLogHandler = function (instance, level) {
        var args = [];

        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }

        var message = args.map(function (arg) {
          if (arg == null) {
            return null;
          } else if (typeof arg === 'string') {
            return arg;
          } else if (typeof arg === 'number' || typeof arg === 'boolean') {
            return arg.toString();
          } else if (arg instanceof Error) {
            return arg.message;
          } else {
            try {
              return JSON.stringify(arg);
            } catch (ignored) {
              return null;
            }
          }
        }).filter(function (arg) {
          return arg;
        }).join(' ');

        if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
          logCallback({
            level: LogLevel[level].toLowerCase(),
            message: message,
            args: args,
            type: instance.name
          });
        }
      };
    }
  };

  for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
    var instance = instances_1[_i];

    _loop_1(instance);
  }
}
},{}],"node_modules/@firebase/app/dist/index.cjs.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var util = require('@firebase/util');
var component = require('@firebase/component');
var logger$1 = require('@firebase/logger');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a["invalid-log-argument" /* INVALID_LOG_ARGUMENT */] = 'First argument to `onLog` must be null or a function.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

var name$1 = "@firebase/app";
var version = "0.6.10";

var name$2 = "@firebase/analytics";

var name$3 = "@firebase/auth";

var name$4 = "@firebase/database";

var name$5 = "@firebase/functions";

var name$6 = "@firebase/installations";

var name$7 = "@firebase/messaging";

var name$8 = "@firebase/performance";

var name$9 = "@firebase/remote-config";

var name$a = "@firebase/storage";

var name$b = "@firebase/firestore";

var name$c = "firebase-wrapper";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a$1;
var DEFAULT_ENTRY_NAME = '[DEFAULT]';
var PLATFORM_LOG_STRING = (_a$1 = {},
    _a$1[name$1] = 'fire-core',
    _a$1[name$2] = 'fire-analytics',
    _a$1[name$3] = 'fire-auth',
    _a$1[name$4] = 'fire-rtdb',
    _a$1[name$5] = 'fire-fn',
    _a$1[name$6] = 'fire-iid',
    _a$1[name$7] = 'fire-fcm',
    _a$1[name$8] = 'fire-perf',
    _a$1[name$9] = 'fire-rc',
    _a$1[name$a] = 'fire-gcs',
    _a$1[name$b] = 'fire-fst',
    _a$1['fire-js'] = 'fire-js',
    _a$1[name$c] = 'fire-js-all',
    _a$1);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        var e_1, _a;
        var _this = this;
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.container = new component.ComponentContainer(config.name);
        // add itself to container
        this._addComponent(new component.Component('app', function () { return _this; }, "PUBLIC" /* PUBLIC */));
        try {
            // populate ComponentContainer with existing components
            for (var _b = tslib.__values(this.firebase_.INTERNAL.components.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var component$1 = _c.value;
                this._addComponent(component$1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: false,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            return Promise.all(_this.container.getProviders().map(function (provider) { return provider.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        // getImmediate will always succeed because _getService is only called for registered components.
        return this.container.getProvider(name).getImmediate({
            identifier: instanceIdentifier
        });
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.container.getProvider(name).clearInstance(instanceIdentifier);
    };
    /**
     * @param component the component being added to this app's container
     */
    FirebaseAppImpl.prototype._addComponent = function (component) {
        try {
            this.container.addComponent(component);
        }
        catch (e) {
            logger.debug("Component " + component.name + " failed to register with FirebaseApp " + this.name, e);
        }
    };
    FirebaseAppImpl.prototype._addOrOverwriteComponent = function (component) {
        this.container.addOrOverwriteComponent(component);
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version$1 = "7.18.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var components = new Map();
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        registerVersion: registerVersion,
        setLogLevel: logger$1.setLogLevel,
        onLog: onLog,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version$1,
        INTERNAL: {
            registerComponent: registerComponent,
            removeApp: removeApp,
            components: components,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    function registerComponent(component) {
        var e_1, _a;
        var componentName = component.name;
        if (components.has(componentName)) {
            logger.debug("There were multiple attempts to register component " + componentName + ".");
            return component.type === "PUBLIC" /* PUBLIC */
                ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    namespace[componentName]
                : null;
        }
        components.set(componentName, component);
        // create service namespace for public components
        if (component.type === "PUBLIC" /* PUBLIC */) {
            // The Service namespace is an accessor function ...
            var serviceNamespace = function (appArg) {
                if (appArg === void 0) { appArg = app(); }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (typeof appArg[componentName] !== 'function') {
                    // Invalid argument.
                    // This happens in the following case: firebase.storage('gs:/')
                    throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                        appName: componentName
                    });
                }
                // Forward service instance lookup to the FirebaseApp.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return appArg[componentName]();
            };
            // ... and a container for service-level properties.
            if (component.serviceProps !== undefined) {
                util.deepExtend(serviceNamespace, component.serviceProps);
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            namespace[componentName] = serviceNamespace;
            // Patch the FirebaseAppImpl prototype
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            firebaseAppImpl.prototype[componentName] =
                // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
                // option added to the no-explicit-any rule when ESlint releases it.
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var serviceFxn = this._getService.bind(this, componentName);
                    return serviceFxn.apply(this, component.multipleInstances ? args : []);
                };
        }
        try {
            // add the component to existing app instances
            for (var _b = tslib.__values(Object.keys(apps)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var appName = _c.value;
                apps[appName]._addComponent(component);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return component.type === "PUBLIC" /* PUBLIC */
            ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
                namespace[componentName]
            : null;
    }
    function registerVersion(libraryKeyOrName, version, variant) {
        var _a;
        // TODO: We can use this check to whitelist strings when/if we set up
        // a good whitelist system.
        var library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
        if (variant) {
            library += "-" + variant;
        }
        var libraryMismatch = library.match(/\s|\//);
        var versionMismatch = version.match(/\s|\//);
        if (libraryMismatch || versionMismatch) {
            var warning = [
                "Unable to register library \"" + library + "\" with version \"" + version + "\":"
            ];
            if (libraryMismatch) {
                warning.push("library name \"" + library + "\" contains illegal characters (whitespace or \"/\")");
            }
            if (libraryMismatch && versionMismatch) {
                warning.push('and');
            }
            if (versionMismatch) {
                warning.push("version name \"" + version + "\" contains illegal characters (whitespace or \"/\")");
            }
            logger.warn(warning.join(' '));
            return;
        }
        registerComponent(new component.Component(library + "-version", function () { return ({ library: library, version: version }); }, "VERSION" /* VERSION */));
    }
    function onLog(logCallback, options) {
        if (logCallback !== null && typeof logCallback !== 'function') {
            throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */, {
                appName: name
            });
        }
        logger$1.setUserLogHandler(logCallback, options);
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib.__assign(tslib.__assign({}, namespace.INTERNAL), { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}
var firebase = createFirebaseNamespace();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PlatformLoggerService = /** @class */ (function () {
    function PlatformLoggerService(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    PlatformLoggerService.prototype.getPlatformInfoString = function () {
        var providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(function (provider) {
            if (isVersionServiceProvider(provider)) {
                var service = provider.getImmediate();
                return service.library + "/" + service.version;
            }
            else {
                return null;
            }
        })
            .filter(function (logString) { return logString; })
            .join(' ');
    };
    return PlatformLoggerService;
}());
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    var component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(firebase, variant) {
    firebase.INTERNAL.registerComponent(new component.Component('platform-logger', function (container) { return new PlatformLoggerService(container); }, "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    firebase.registerVersion(name$1, version, variant);
    // Register platform SDK identifier (no version).
    firebase.registerVersion('fire-js', '');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Firebase Lite detection test
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var initializeApp = firebase.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebase.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase$1 = firebase;
registerCoreComponents(firebase$1);

exports.default = firebase$1;
exports.firebase = firebase$1;


},{"tslib":"node_modules/tslib/tslib.es6.js","@firebase/util":"node_modules/@firebase/util/dist/index.cjs.js","@firebase/component":"node_modules/@firebase/component/dist/index.cjs.js","@firebase/logger":"node_modules/@firebase/logger/dist/index.esm.js"}],"node_modules/firebase/app/dist/index.cjs.js":[function(require,module,exports) {
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(require('@firebase/app'));

var name = "firebase";
var version = "7.19.0";

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
firebase.registerVersion(name, version, 'app');

module.exports = firebase;


},{"@firebase/app":"node_modules/@firebase/app/dist/index.cjs.js"}],"node_modules/@firebase/auth/dist/auth.js":[function(require,module,exports) {
var global = arguments[3];
(function() {var firebase = require('@firebase/app').default;/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}var ca=ba(this);
function da(a,b){if(b){var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}function ea(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function fa(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ea(a)}}
da("Promise",function(a){function b(g){this.b=0;this.c=void 0;this.a=[];var h=this.f();try{g(h.resolve,h.reject)}catch(m){h.reject(m)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=ca.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var m=
g[h];g[h]=null;try{m()}catch(p){this.f(p)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.f=function(){function g(p){return function(v){m||(m=!0,p.call(h,v))}}var h=this,m=!1;return{resolve:g(this.m),reject:g(this.g)}};b.prototype.m=function(g){if(g===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.s(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.u(g):this.h(g)}};
b.prototype.u=function(g){var h=void 0;try{h=g.then}catch(m){this.g(m);return}"function"==typeof h?this.w(h,g):this.h(g)};b.prototype.g=function(g){this.i(2,g)};b.prototype.h=function(g){this.i(1,g)};b.prototype.i=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.c=h;this.l()};b.prototype.l=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.s=function(g){var h=this.f();
g.Oa(h.resolve,h.reject)};b.prototype.w=function(g,h){var m=this.f();try{g.call(h,m.resolve,m.reject)}catch(p){m.reject(p)}};b.prototype.then=function(g,h){function m(A,Q){return"function"==typeof A?function(wa){try{p(A(wa))}catch(ud){v(ud)}}:Q}var p,v,C=new b(function(A,Q){p=A;v=Q});this.Oa(m(g,p),m(h,v));return C};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Oa=function(g,h){function m(){switch(p.b){case 1:g(p.c);break;case 2:h(p.c);break;default:throw Error("Unexpected state: "+
p.b);}}var p=this;null==this.a?f.b(m):this.a.push(m)};b.resolve=d;b.reject=function(g){return new b(function(h,m){m(g)})};b.race=function(g){return new b(function(h,m){for(var p=fa(g),v=p.next();!v.done;v=p.next())d(v.value).Oa(h,m)})};b.all=function(g){var h=fa(g),m=h.next();return m.done?d([]):new b(function(p,v){function C(wa){return function(ud){A[wa]=ud;Q--;0==Q&&p(A)}}var A=[],Q=0;do A.push(void 0),Q++,d(m.value).Oa(C(A.length-1),v),m=h.next();while(!m.done)})};return b});
var ha=ha||{},l=this||self,ia=/^[\w+/_-]+[=]{0,2}$/,ja=null;function ka(){}
function la(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ma(a){var b=la(a);return"array"==b||"object"==b&&"number"==typeof a.length}function na(a){return"function"==la(a)}function n(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function oa(a){return Object.prototype.hasOwnProperty.call(a,pa)&&a[pa]||(a[pa]=++qa)}var pa="closure_uid_"+(1E9*Math.random()>>>0),qa=0;function ra(a,b,c){return a.call.apply(a.bind,arguments)}
function sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?q=ra:q=sa;return q.apply(null,arguments)}
function ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var ua=Date.now||function(){return+new Date};function r(a,b){function c(){}c.prototype=b.prototype;a.Za=b.prototype;a.prototype=new c;a.prototype.constructor=a};/*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function t(a,b,c){this.code=va+a;this.message=b||xa[a]||"";this.a=c||null}r(t,Error);t.prototype.v=function(){var a={code:this.code,message:this.message};this.a&&(a.serverResponse=this.a);return a};t.prototype.toJSON=function(){return this.v()};function ya(a){var b=a&&a.code;return b?new t(b.substring(va.length),a.message,a.serverResponse):null}
var va="auth/",xa={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
"captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.",
"requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.",
"internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.",
"invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
"invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.",
"invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.",
"unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
"invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.",
"multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
"missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
"missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
"no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.",
"rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.",
"too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.",
"unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.",
"web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."};var za={hd:{Ra:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Xa:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Ua:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},pd:{Ra:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Xa:"https://securetoken.googleapis.com/v1/token",Ua:"https://identitytoolkit.googleapis.com/v2/",id:"p"},rd:{Ra:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
Xa:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Ua:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},sd:{Ra:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Xa:"https://test-securetoken.sandbox.googleapis.com/v1/token",Ua:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}};
function Aa(a){for(var b in za)if(za[b].id===a)return a=za[b],{firebaseEndpoint:a.Ra,secureTokenEndpoint:a.Xa,identityPlatformEndpoint:a.Ua};return null}var Ba;Ba=Aa("__EID__")?"__EID__":void 0;function Ca(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(u,Error);u.prototype.name="CustomError";function Da(a,b){a=a.split("%s");for(var c="",d=a.length-1,e=0;e<d;e++)c+=a[e]+(e<b.length?b[e]:"%s");u.call(this,c+a[d])}r(Da,u);Da.prototype.name="AssertionError";function Ea(a,b){throw new Da("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function Fa(a,b){this.c=a;this.f=b;this.b=0;this.a=null}Fa.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};function Ga(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)};function Ha(){this.b=this.a=null}var Ja=new Fa(function(){return new Ia},function(a){a.reset()});Ha.prototype.add=function(a,b){var c=Ja.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};function Ka(){var a=La,b=null;a.a&&(b=a.a,a.a=a.a.next,a.a||(a.b=null),b.next=null);return b}function Ia(){this.next=this.b=this.a=null}Ia.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};Ia.prototype.reset=function(){this.next=this.b=this.a=null};var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Na(a,b){for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;--d)d in c&&b.call(void 0,c[d],d,a)}
var Oa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d},Qa=Array.prototype.some?function(a,
b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1};function Ra(a){a:{var b=Sa;for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Ta(a,b){return 0<=Ma(a,b)}
function Ua(a,b){b=Ma(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}function Va(a,b){var c=0;Na(a,function(d,e){b.call(void 0,d,e,a)&&1==Array.prototype.splice.call(a,e,1).length&&c++})}function Wa(a){return Array.prototype.concat.apply([],arguments)}function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Ya=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Za=/&/g,$a=/</g,ab=/>/g,bb=/"/g,cb=/'/g,db=/\x00/g,eb=/[\x00&<>"']/;function x(a,b){return-1!=a.indexOf(b)}function fb(a,b){return a<b?-1:a>b?1:0};var gb;a:{var hb=l.navigator;if(hb){var ib=hb.userAgent;if(ib){gb=ib;break a}}gb=""}function y(a){return x(gb,a)};function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function kb(a){for(var b in a)return!1;return!0}function lb(a){var b={},c;for(c in a)b[c]=a[c];return b}var mb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function z(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<mb.length;f++)c=mb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function nb(a,b){a:{try{var c=a&&a.ownerDocument,d=c&&(c.defaultView||c.parentWindow);d=d||l;if(d.Element&&d.Location){var e=d;break a}}catch(g){}e=null}if(e&&"undefined"!=typeof e[b]&&(!a||!(a instanceof e[b])&&(a instanceof e.Location||a instanceof e.Element))){if(n(a))try{var f=a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a)}catch(g){f="<object could not be stringified>"}else f=void 0===a?"undefined":null===a?"null":typeof a;Ea("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
b,f)}};function ob(a,b){this.a=a===pb&&b||"";this.b=qb}ob.prototype.ra=!0;ob.prototype.qa=function(){return this.a};ob.prototype.toString=function(){return"Const{"+this.a+"}"};function rb(a){if(a instanceof ob&&a.constructor===ob&&a.b===qb)return a.a;Ea("expected object of type Const, got '"+a+"'");return"type_error:Const"}var qb={},pb={},sb=new ob(pb,"");function tb(a,b){this.a=a===ub&&b||"";this.b=vb}tb.prototype.ra=!0;tb.prototype.qa=function(){return this.a.toString()};tb.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};function wb(a){if(a instanceof tb&&a.constructor===tb&&a.b===vb)return a.a;Ea("expected object of type TrustedResourceUrl, got '"+a+"' of type "+la(a));return"type_error:TrustedResourceUrl"}
function xb(a,b){var c=rb(a);if(!yb.test(c))throw Error("Invalid TrustedResourceUrl format: "+c);a=c.replace(zb,function(d,e){if(!Object.prototype.hasOwnProperty.call(b,e))throw Error('Found marker, "'+e+'", in format string, "'+c+'", but no valid label mapping found in args: '+JSON.stringify(b));d=b[e];return d instanceof ob?rb(d):encodeURIComponent(String(d))});return new tb(ub,a)}
var zb=/%{(\w+)}/g,yb=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,vb={},ub={};function Ab(a,b){this.a=a===Bb&&b||"";this.b=Cb}Ab.prototype.ra=!0;Ab.prototype.qa=function(){return this.a.toString()};Ab.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};function Db(a){if(a instanceof Ab&&a.constructor===Ab&&a.b===Cb)return a.a;Ea("expected object of type SafeUrl, got '"+a+"' of type "+la(a));return"type_error:SafeUrl"}var Eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
function Fb(a){if(a instanceof Ab)return a;a="object"==typeof a&&a.ra?a.qa():String(a);Eb.test(a)||(a="about:invalid#zClosurez");return new Ab(Bb,a)}var Cb={},Bb={};function Gb(){this.a="";this.b=Hb}Gb.prototype.ra=!0;Gb.prototype.qa=function(){return this.a.toString()};Gb.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};function Ib(a){if(a instanceof Gb&&a.constructor===Gb&&a.b===Hb)return a.a;Ea("expected object of type SafeHtml, got '"+a+"' of type "+la(a));return"type_error:SafeHtml"}var Hb={};function Jb(a){var b=new Gb;b.a=a;return b}Jb("<!DOCTYPE html>");var Kb=Jb("");Jb("<br>");function Lb(a){var b=new tb(ub,rb(sb));nb(a,"HTMLIFrameElement");a.src=wb(b).toString()}function Mb(a,b){nb(a,"HTMLScriptElement");a.src=wb(b);if(null===ja)b:{b=l.document;if((b=b.querySelector&&b.querySelector("script[nonce]"))&&(b=b.nonce||b.getAttribute("nonce"))&&ia.test(b)){ja=b;break b}ja=""}b=ja;b&&a.setAttribute("nonce",b)};function Nb(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}function Ob(a){eb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Za,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace($a,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(ab,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(bb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(cb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(db,"&#0;")));return a};function Pb(a){Pb[" "](a);return a}Pb[" "]=ka;function Qb(a,b){var c=Rb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Sb=y("Opera"),Tb=y("Trident")||y("MSIE"),Ub=y("Edge"),Vb=Ub||Tb,Wb=y("Gecko")&&!(x(gb.toLowerCase(),"webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),Xb=x(gb.toLowerCase(),"webkit")&&!y("Edge");function Yb(){var a=l.document;return a?a.documentMode:void 0}var Zb;
a:{var $b="",ac=function(){var a=gb;if(Wb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ub)return/Edge\/([\d\.]+)/.exec(a);if(Tb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Xb)return/WebKit\/(\S+)/.exec(a);if(Sb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ac&&($b=ac?ac[1]:"");if(Tb){var bc=Yb();if(null!=bc&&bc>parseFloat($b)){Zb=String(bc);break a}}Zb=$b}var Rb={};
function cc(a){return Qb(a,function(){for(var b=0,c=Ya(String(Zb)).split("."),d=Ya(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=fb(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||fb(0==g[2].length,0==h[2].length)||fb(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var dc;
dc=l.document&&Tb?Yb():void 0;try{(new self.OffscreenCanvas(0,0)).getContext("2d")}catch(a){}var ec=!Tb||9<=Number(dc);function fc(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function gc(a,b){jb(b,function(c,d){c&&"object"==typeof c&&c.ra&&(c=c.qa());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:hc.hasOwnProperty(d)?a.setAttribute(hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ic(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!ec&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Ob(g.name),'"');if(g.type){f.push(' type="',Ob(g.type),'"');var h={};z(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=jc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):gc(f,g));2<d.length&&kc(e,f,d);return f}
function kc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}for(var e=2;e<c.length;e++){var f=c[e];!ma(f)||n(f)&&0<f.nodeType?d(f):w(lc(f)?Xa(f):f,d)}}function jc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function lc(a){if(a&&"number"==typeof a.length){if(n(a))return"function"==typeof a.item||"string"==typeof a.item;if(na(a))return"function"==typeof a.item}return!1};function mc(a){l.setTimeout(function(){throw a;},0)}var nc;
function oc(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!y("Presto")&&(a=function(){var e=jc(document,"IFRAME");e.style.display="none";Lb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Ib(Kb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=q(function(m){if(("*"==h||m.origin==h)&&m.data==g)this.port1.onmessage()},
this);f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});if("undefined"!==typeof a&&!y("Trident")&&!y("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Db;c.Db=null;e()}};return function(e){d.next={Db:e};d=d.next;b.port2.postMessage(0)}}return function(e){l.setTimeout(e,0)}};function pc(a,b){qc||rc();sc||(qc(),sc=!0);La.add(a,b)}var qc;function rc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);qc=function(){a.then(tc)}}else qc=function(){var b=tc;!na(l.setImmediate)||l.Window&&l.Window.prototype&&!y("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(nc||(nc=oc()),nc(b)):l.setImmediate(b)}}var sc=!1,La=new Ha;function tc(){for(var a;a=Ka();){try{a.a.call(a.b)}catch(b){mc(b)}Ga(Ja,a)}sc=!1};function B(a,b){this.a=uc;this.i=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=ka)try{var c=this;a.call(b,function(d){vc(c,wc,d)},function(d){if(!(d instanceof xc))try{if(d instanceof Error)throw d;throw Error("Promise rejected.");}catch(e){}vc(c,yc,d)})}catch(d){vc(this,yc,d)}}var uc=0,wc=2,yc=3;function zc(){this.next=this.f=this.b=this.g=this.a=null;this.c=!1}zc.prototype.reset=function(){this.f=this.b=this.g=this.a=null;this.c=!1};var Ac=new Fa(function(){return new zc},function(a){a.reset()});
function Bc(a,b,c){var d=Ac.get();d.g=a;d.b=b;d.f=c;return d}function D(a){if(a instanceof B)return a;var b=new B(ka);vc(b,wc,a);return b}function E(a){return new B(function(b,c){c(a)})}function Cc(a,b,c){Dc(a,b,c,null)||pc(ta(b,a))}function Ec(a){return new B(function(b,c){var d=a.length,e=[];if(d)for(var f=function(p,v){d--;e[p]=v;0==d&&b(e)},g=function(p){c(p)},h=0,m;h<a.length;h++)m=a[h],Cc(m,ta(f,h),g);else b(e)})}
function Fc(a){return new B(function(b){var c=a.length,d=[];if(c)for(var e=function(h,m,p){c--;d[h]=m?{Mb:!0,value:p}:{Mb:!1,reason:p};0==c&&b(d)},f=0,g;f<a.length;f++)g=a[f],Cc(g,ta(e,f,!0),ta(e,f,!1));else b(d)})}B.prototype.then=function(a,b,c){return Gc(this,na(a)?a:null,na(b)?b:null,c)};B.prototype.$goog_Thenable=!0;k=B.prototype;k.ma=function(a,b){a=Bc(a,a,b);a.c=!0;Hc(this,a);return this};k.o=function(a,b){return Gc(this,null,a,b)};
k.cancel=function(a){if(this.a==uc){var b=new xc(a);pc(function(){Ic(this,b)},this)}};function Ic(a,b){if(a.a==uc)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.c||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.a==uc&&1==d?Ic(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Jc(c),Kc(c,e,yc,b)))}a.c=null}else vc(a,yc,b)}function Hc(a,b){a.b||a.a!=wc&&a.a!=yc||Lc(a);a.f?a.f.next=b:a.b=b;a.f=b}
function Gc(a,b,c,d){var e=Bc(null,null,null);e.a=new B(function(f,g){e.g=b?function(h){try{var m=b.call(d,h);f(m)}catch(p){g(p)}}:f;e.b=c?function(h){try{var m=c.call(d,h);void 0===m&&h instanceof xc?g(h):f(m)}catch(p){g(p)}}:g});e.a.c=a;Hc(a,e);return e.a}k.Yc=function(a){this.a=uc;vc(this,wc,a)};k.Zc=function(a){this.a=uc;vc(this,yc,a)};
function vc(a,b,c){a.a==uc&&(a===c&&(b=yc,c=new TypeError("Promise cannot resolve to itself")),a.a=1,Dc(c,a.Yc,a.Zc,a)||(a.i=c,a.a=b,a.c=null,Lc(a),b!=yc||c instanceof xc||Mc(a,c)))}function Dc(a,b,c,d){if(a instanceof B)return Hc(a,Bc(b||ka,c||null,d)),!0;if(Ca(a))return a.then(b,c,d),!0;if(n(a))try{var e=a.then;if(na(e))return Nc(a,e,b,c,d),!0}catch(f){return c.call(d,f),!0}return!1}
function Nc(a,b,c,d,e){function f(m){h||(h=!0,d.call(e,m))}function g(m){h||(h=!0,c.call(e,m))}var h=!1;try{b.call(a,g,f)}catch(m){f(m)}}function Lc(a){a.h||(a.h=!0,pc(a.ec,a))}function Jc(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}k.ec=function(){for(var a;a=Jc(this);)Kc(this,a,this.a,this.i);this.h=!1};
function Kc(a,b,c,d){if(c==yc&&b.b&&!b.c)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,Oc(b,c,d);else try{b.c?b.g.call(b.f):Oc(b,c,d)}catch(e){Pc.call(null,e)}Ga(Ac,b)}function Oc(a,b,c){b==wc?a.g.call(a.f,c):a.b&&a.b.call(a.f,c)}function Mc(a,b){a.g=!0;pc(function(){a.g&&Pc.call(null,b)})}var Pc=mc;function xc(a){u.call(this,a)}r(xc,u);xc.prototype.name="cancel";function Qc(){0!=Rc&&(Sc[oa(this)]=this);this.wa=this.wa;this.na=this.na}var Rc=0,Sc={};Qc.prototype.wa=!1;function Tc(a){if(!a.wa&&(a.wa=!0,a.Ba(),0!=Rc)){var b=oa(a);if(0!=Rc&&a.na&&0<a.na.length)throw Error(a+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");delete Sc[b]}}Qc.prototype.Ba=function(){if(this.na)for(;this.na.length;)this.na.shift()()};var Uc=Object.freeze||function(a){return a};var Vc=!Tb||9<=Number(dc),Wc=Tb&&!cc("9"),Xc=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{l.addEventListener("test",ka,b),l.removeEventListener("test",ka,b)}catch(c){}return a}();function F(a,b){this.type=a;this.b=this.target=b;this.defaultPrevented=!1}F.prototype.preventDefault=function(){this.defaultPrevented=!0};function Yc(a,b){F.call(this,a?a.type:"");this.relatedTarget=this.b=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.a=null;if(a){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.b=b;if(b=a.relatedTarget){if(Wb){a:{try{Pb(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==
c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Zc[a.pointerType]||"";this.a=a;a.defaultPrevented&&this.preventDefault()}}r(Yc,F);var Zc=Uc({2:"touch",3:"pen",4:"mouse"});Yc.prototype.preventDefault=function(){Yc.Za.preventDefault.call(this);var a=this.a;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Wc)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};Yc.prototype.f=function(){return this.a};var $c="closure_listenable_"+(1E6*Math.random()|0),ad=0;function bd(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ta=e;this.key=++ad;this.ua=this.Na=!1}function cd(a){a.ua=!0;a.listener=null;a.proxy=null;a.src=null;a.Ta=null};function dd(a){this.src=a;this.a={};this.b=0}dd.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=ed(a,b,d,e);-1<g?(b=a[g],c||(b.Na=!1)):(b=new bd(b,this.src,f,!!d,e),b.Na=c,a.push(b));return b};function fd(a,b){var c=b.type;c in a.a&&Ua(a.a[c],b)&&(cd(b),0==a.a[c].length&&(delete a.a[c],a.b--))}function ed(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ua&&f.listener==b&&f.capture==!!c&&f.Ta==d)return e}return-1};var gd="closure_lm_"+(1E6*Math.random()|0),hd={},id=0;function jd(a,b,c,d,e){if(d&&d.once)kd(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)jd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?md(a,b,c,n(d)?!!d.capture:!!d,e):nd(a,b,c,!1,d,e)}
function nd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=n(e)?!!e.capture:!!e,h=od(a);h||(a[gd]=h=new dd(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=pd();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Xc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(qd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");id++}}
function pd(){var a=rd,b=Vc?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function kd(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)kd(a,b[f],c,d,e);else c=ld(c),a&&a[$c]?sd(a,b,c,n(d)?!!d.capture:!!d,e):nd(a,b,c,!0,d,e)}
function td(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)td(a,b[f],c,d,e);else(d=n(d)?!!d.capture:!!d,c=ld(c),a&&a[$c])?(a=a.u,b=String(b).toString(),b in a.a&&(f=a.a[b],c=ed(f,c,d,e),-1<c&&(cd(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=od(a))&&(b=a.a[b.toString()],a=-1,b&&(a=ed(b,c,d,e)),(c=-1<a?b[a]:null)&&vd(c))}
function vd(a){if("number"!==typeof a&&a&&!a.ua){var b=a.src;if(b&&b[$c])fd(b.u,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(qd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);id--;(c=od(b))?(fd(c,a),0==c.b&&(c.src=null,b[gd]=null)):cd(a)}}}function qd(a){return a in hd?hd[a]:hd[a]="on"+a}
function wd(a,b,c,d){var e=!0;if(a=od(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.ua&&(f=xd(f,d),e=e&&!1!==f)}return e}function xd(a,b){var c=a.listener,d=a.Ta||a.src;a.Na&&vd(a);return c.call(d,b)}
function rd(a,b){if(a.ua)return!0;if(!Vc){if(!b)a:{b=["window","event"];for(var c=l,d=0;d<b.length;d++)if(c=c[b[d]],null==c){b=null;break a}b=c}d=b;b=new Yc(d,this);c=!0;if(!(0>d.keyCode||void 0!=d.returnValue)){a:{var e=!1;if(0==d.keyCode)try{d.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==d.returnValue)d.returnValue=!0}d=[];for(e=b.b;e;e=e.parentNode)d.push(e);a=a.type;for(e=d.length-1;0<=e;e--){b.b=d[e];var f=wd(d[e],a,!0,b);c=c&&f}for(e=0;e<d.length;e++)b.b=d[e],f=wd(d[e],a,!1,b),c=c&&f}return c}return xd(a,
new Yc(b,this))}function od(a){a=a[gd];return a instanceof dd?a:null}var yd="__closure_events_fn_"+(1E9*Math.random()>>>0);function ld(a){if(na(a))return a;a[yd]||(a[yd]=function(b){return a.handleEvent(b)});return a[yd]};function G(){Qc.call(this);this.u=new dd(this);this.Yb=this;this.eb=null}r(G,Qc);G.prototype[$c]=!0;G.prototype.addEventListener=function(a,b,c,d){jd(this,a,b,c,d)};G.prototype.removeEventListener=function(a,b,c,d){td(this,a,b,c,d)};
G.prototype.dispatchEvent=function(a){var b,c=this.eb;if(c)for(b=[];c;c=c.eb)b.push(c);c=this.Yb;var d=a.type||a;if("string"===typeof a)a=new F(a,c);else if(a instanceof F)a.target=a.target||c;else{var e=a;a=new F(d,c);z(a,e)}e=!0;if(b)for(var f=b.length-1;0<=f;f--){var g=a.b=b[f];e=zd(g,d,!0,a)&&e}g=a.b=c;e=zd(g,d,!0,a)&&e;e=zd(g,d,!1,a)&&e;if(b)for(f=0;f<b.length;f++)g=a.b=b[f],e=zd(g,d,!1,a)&&e;return e};
G.prototype.Ba=function(){G.Za.Ba.call(this);if(this.u){var a=this.u,b=0,c;for(c in a.a){for(var d=a.a[c],e=0;e<d.length;e++)++b,cd(d[e]);delete a.a[c];a.b--}}this.eb=null};function md(a,b,c,d,e){a.u.add(String(b),c,!1,d,e)}function sd(a,b,c,d,e){a.u.add(String(b),c,!0,d,e)}
function zd(a,b,c,d){b=a.u.a[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ua&&g.capture==c){var h=g.listener,m=g.Ta||g.src;g.Na&&fd(a.u,g);e=!1!==h.call(m,d)&&e}}return e&&!d.defaultPrevented};function Ad(a,b,c){if(na(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:l.setTimeout(a,b||0)}function Bd(a){var b=null;return(new B(function(c,d){b=Ad(function(){c(void 0)},a);-1==b&&d(Error("Failed to schedule timer."))})).o(function(c){l.clearTimeout(b);throw c;})};function Cd(a){if(a.V&&"function"==typeof a.V)return a.V();if("string"===typeof a)return a.split("");if(ma(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}b=[];c=0;for(d in a)b[c++]=a[d];return b}function Dd(a){if(a.X&&"function"==typeof a.X)return a.X();if(!a.V||"function"!=typeof a.V){if(ma(a)||"string"===typeof a){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}b=[];c=0;for(var d in a)b[c++]=d;return b}}
function Ed(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(ma(a)||"string"===typeof a)w(a,b,void 0);else for(var c=Dd(a),d=Cd(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)};function Fd(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Fd)for(c=a.X(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}k=Fd.prototype;k.V=function(){Gd(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};k.X=function(){Gd(this);return this.a.concat()};
k.clear=function(){this.b={};this.c=this.a.length=0};function Gd(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Hd(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Hd(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}k.get=function(a,b){return Hd(this.b,a)?this.b[a]:b};k.set=function(a,b){Hd(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
k.forEach=function(a,b){for(var c=this.X(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Hd(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Id=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Jd(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var f=a[c].substring(0,d);e=a[c].substring(d+1)}else f=a[c];b(f,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};function Kd(a,b){this.b=this.i=this.f="";this.l=null;this.g=this.c="";this.h=!1;var c;a instanceof Kd?(this.h=void 0!==b?b:a.h,Ld(this,a.f),this.i=a.i,this.b=a.b,Md(this,a.l),this.c=a.c,Nd(this,Od(a.a)),this.g=a.g):a&&(c=String(a).match(Id))?(this.h=!!b,Ld(this,c[1]||"",!0),this.i=Pd(c[2]||""),this.b=Pd(c[3]||"",!0),Md(this,c[4]),this.c=Pd(c[5]||"",!0),Nd(this,c[6]||"",!0),this.g=Pd(c[7]||"")):(this.h=!!b,this.a=new Qd(null,this.h))}
Kd.prototype.toString=function(){var a=[],b=this.f;b&&a.push(Rd(b,Sd,!0),":");var c=this.b;if(c||"file"==b)a.push("//"),(b=this.i)&&a.push(Rd(b,Sd,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.l,null!=c&&a.push(":",String(c));if(c=this.c)this.b&&"/"!=c.charAt(0)&&a.push("/"),a.push(Rd(c,"/"==c.charAt(0)?Td:Ud,!0));(c=this.a.toString())&&a.push("?",c);(c=this.g)&&a.push("#",Rd(c,Vd));return a.join("")};
Kd.prototype.resolve=function(a){var b=new Kd(this),c=!!a.f;c?Ld(b,a.f):c=!!a.i;c?b.i=a.i:c=!!a.b;c?b.b=a.b:c=null!=a.l;var d=a.c;if(c)Md(b,a.l);else if(c=!!a.c){if("/"!=d.charAt(0))if(this.b&&!this.c)d="/"+d;else{var e=b.c.lastIndexOf("/");-1!=e&&(d=b.c.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(x(e,"./")||x(e,"/.")){d=0==e.lastIndexOf("/",0);e=e.split("/");for(var f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),
d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?b.c=d:c=""!==a.a.toString();c?Nd(b,Od(a.a)):c=!!a.g;c&&(b.g=a.g);return b};function Ld(a,b,c){a.f=c?Pd(b,!0):b;a.f&&(a.f=a.f.replace(/:$/,""))}function Md(a,b){if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.l=b}else a.l=null}function Nd(a,b,c){b instanceof Qd?(a.a=b,Wd(a.a,a.h)):(c||(b=Rd(b,Xd)),a.a=new Qd(b,a.h))}function H(a,b,c){a.a.set(b,c)}function Yd(a,b){return a.a.get(b)}
function Zd(a){return a instanceof Kd?new Kd(a):new Kd(a,void 0)}function $d(a,b){var c=new Kd(null,void 0);Ld(c,"https");a&&(c.b=a);b&&(c.c=b);return c}function Pd(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rd(a,b,c){return"string"===typeof a?(a=encodeURI(a).replace(b,ae),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ae(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}
var Sd=/[#\/\?@]/g,Ud=/[#\?:]/g,Td=/[#\?]/g,Xd=/[#\?@]/g,Vd=/#/g;function Qd(a,b){this.b=this.a=null;this.c=a||null;this.f=!!b}function be(a){a.a||(a.a=new Fd,a.b=0,a.c&&Jd(a.c,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}function ce(a){var b=Dd(a);if("undefined"==typeof b)throw Error("Keys are undefined");var c=new Qd(null,void 0);a=Cd(a);for(var d=0;d<b.length;d++){var e=b[d],f=a[d];Array.isArray(f)?de(c,e,f):c.add(e,f)}return c}k=Qd.prototype;
k.add=function(a,b){be(this);this.c=null;a=ee(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};function fe(a,b){be(a);b=ee(a,b);Hd(a.a.b,b)&&(a.c=null,a.b-=a.a.get(b).length,a=a.a,Hd(a.b,b)&&(delete a.b[b],a.c--,a.a.length>2*a.c&&Gd(a)))}k.clear=function(){this.a=this.c=null;this.b=0};function ge(a,b){be(a);b=ee(a,b);return Hd(a.a.b,b)}k.forEach=function(a,b){be(this);this.a.forEach(function(c,d){w(c,function(e){a.call(b,e,d,this)},this)},this)};
k.X=function(){be(this);for(var a=this.a.V(),b=this.a.X(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};k.V=function(a){be(this);var b=[];if("string"===typeof a)ge(this,a)&&(b=Wa(b,this.a.get(ee(this,a))));else{a=this.a.V();for(var c=0;c<a.length;c++)b=Wa(b,a[c])}return b};k.set=function(a,b){be(this);this.c=null;a=ee(this,a);ge(this,a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};
k.get=function(a,b){if(!a)return b;a=this.V(a);return 0<a.length?String(a[0]):b};function de(a,b,c){fe(a,b);0<c.length&&(a.c=null,a.a.set(ee(a,b),Xa(c)),a.b+=c.length)}k.toString=function(){if(this.c)return this.c;if(!this.a)return"";for(var a=[],b=this.a.X(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.V(d);for(var f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="="+encodeURIComponent(String(d[f])));a.push(g)}}return this.c=a.join("&")};
function Od(a){var b=new Qd;b.c=a.c;a.a&&(b.a=new Fd(a.a),b.b=a.b);return b}function ee(a,b){b=String(b);a.f&&(b=b.toLowerCase());return b}function Wd(a,b){b&&!a.f&&(be(a),a.c=null,a.a.forEach(function(c,d){var e=d.toLowerCase();d!=e&&(fe(this,d),de(this,e,c))},a));a.f=b};function he(a){var b=[];ie(new je,a,b);return b.join("")}function je(){}
function ie(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ie(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),ke(d,c),c.push(":"),ie(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":ke(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var le={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},me=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;
function ke(a,b){b.push('"',a.replace(me,function(c){var d=le[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),le[c]=d);return d}),'"')};function ne(){var a=I();return Tb&&!!dc&&11==dc||/Edge\/\d+/.test(a)}function oe(){return l.window&&l.window.location.href||self&&self.location&&self.location.href||""}function pe(a,b){b=b||l.window;var c="about:blank";a&&(c=Db(Fb(a)));b.location.href=c}function qe(a,b){var c=[],d;for(d in a)d in b?typeof a[d]!=typeof b[d]?c.push(d):"object"==typeof a[d]&&null!=a[d]&&null!=b[d]?0<qe(a[d],b[d]).length&&c.push(d):a[d]!==b[d]&&c.push(d):c.push(d);for(d in b)d in a||c.push(d);return c}
function re(){var a=I();a=se(a)!=te?null:(a=a.match(/\sChrome\/(\d+)/i))&&2==a.length?parseInt(a[1],10):null;return a&&30>a?!1:!Tb||!dc||9<dc}function ue(a){a=(a||I()).toLowerCase();return a.match(/android/)||a.match(/webos/)||a.match(/iphone|ipad|ipod/)||a.match(/blackberry/)||a.match(/windows phone/)||a.match(/iemobile/)?!0:!1}function ve(a){a=a||l.window;try{a.close()}catch(b){}}
function we(a,b,c){var d=Math.floor(1E9*Math.random()).toString();b=b||500;c=c||600;var e=(window.screen.availHeight-c)/2,f=(window.screen.availWidth-b)/2;b={width:b,height:c,top:0<e?e:0,left:0<f?f:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1};c=I().toLowerCase();d&&(b.target=d,x(c,"crios/")&&(b.target="_blank"));se(I())==xe&&(a=a||"http://localhost",b.scrollbars=!0);c=a||"";(a=b)||(a={});d=window;b=c instanceof Ab?c:Fb("undefined"!=typeof c.href?c.href:String(c));c=a.target||c.target;e=[];
for(g in a)switch(g){case "width":case "height":case "top":case "left":e.push(g+"="+a[g]);break;case "target":case "noopener":case "noreferrer":break;default:e.push(g+"="+(a[g]?1:0))}var g=e.join(",");if((y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"))&&d.navigator&&d.navigator.standalone&&c&&"_self"!=c)g=jc(document,"A"),nb(g,"HTMLAnchorElement"),b instanceof Ab||b instanceof Ab||(b="object"==typeof b&&b.ra?b.qa():String(b),Eb.test(b)||(b="about:invalid#zClosurez"),b=new Ab(Bb,b)),g.href=
Db(b),g.setAttribute("target",c),a.noreferrer&&g.setAttribute("rel","noreferrer"),a=document.createEvent("MouseEvent"),a.initMouseEvent("click",!0,!0,d,1),g.dispatchEvent(a),g={};else if(a.noreferrer){if(g=d.open("",c,g),a=Db(b),g&&(Vb&&x(a,";")&&(a="'"+a.replace(/'/g,"%27")+"'"),g.opener=null,a=Jb('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ob(a)+'">'),d=g.document))d.write(Ib(a)),d.close()}else(g=d.open(Db(b),c,g))&&a.noopener&&(g.opener=null);if(g)try{g.focus()}catch(h){}return g}
function ye(a){return new B(function(b){function c(){Bd(2E3).then(function(){if(!a||a.closed)b();else return c()})}return c()})}var ze=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ae=/^[^@]+@[^@]+$/;function Be(){var a=null;return(new B(function(b){"complete"==l.document.readyState?b():(a=function(){b()},kd(window,"load",a))})).o(function(b){td(window,"load",a);throw b;})}
function Ce(){return De(void 0)?Be().then(function(){return new B(function(a,b){var c=l.document,d=setTimeout(function(){b(Error("Cordova framework is not ready."))},1E3);c.addEventListener("deviceready",function(){clearTimeout(d);a()},!1)})}):E(Error("Cordova must run in an Android or iOS file scheme."))}function De(a){a=a||I();return!("file:"!==Ee()&&"ionic:"!==Ee()||!a.toLowerCase().match(/iphone|ipad|ipod|android/))}function Fe(){var a=l.window;try{return!(!a||a==a.top)}catch(b){return!1}}
function Ge(){return"undefined"!==typeof l.WorkerGlobalScope&&"function"===typeof l.importScripts}function He(){return firebase.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":firebase.INTERNAL.hasOwnProperty("node")?"Node":Ge()?"Worker":"Browser"}function Ie(){var a=He();return"ReactNative"===a||"Node"===a}function Je(){for(var a=50,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}
var xe="Firefox",te="Chrome";
function se(a){var b=a.toLowerCase();if(x(b,"opera/")||x(b,"opr/")||x(b,"opios/"))return"Opera";if(x(b,"iemobile"))return"IEMobile";if(x(b,"msie")||x(b,"trident/"))return"IE";if(x(b,"edge/"))return"Edge";if(x(b,"firefox/"))return xe;if(x(b,"silk/"))return"Silk";if(x(b,"blackberry"))return"Blackberry";if(x(b,"webos"))return"Webos";if(!x(b,"safari/")||x(b,"chrome/")||x(b,"crios/")||x(b,"android"))if(!x(b,"chrome/")&&!x(b,"crios/")||x(b,"edge/")){if(x(b,"android"))return"Android";if((a=a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&
2==a.length)return a[1]}else return te;else return"Safari";return"Other"}var Ke={jd:"FirebaseCore-web",ld:"FirebaseUI-web"};function Le(a,b){b=b||[];var c=[],d={},e;for(e in Ke)d[Ke[e]]=!0;for(e=0;e<b.length;e++)"undefined"!==typeof d[b[e]]&&(delete d[b[e]],c.push(b[e]));c.sort();b=c;b.length||(b=["FirebaseCore-web"]);c=He();"Browser"===c?(d=I(),c=se(d)):"Worker"===c&&(d=I(),c=se(d)+"-"+c);return c+"/JsCore/"+a+"/"+b.join(",")}function I(){return l.navigator&&l.navigator.userAgent||""}
function J(a,b){a=a.split(".");b=b||l;for(var c=0;c<a.length&&"object"==typeof b&&null!=b;c++)b=b[a[c]];c!=a.length&&(b=void 0);return b}function Me(){try{var a=l.localStorage,b=Ne();if(a)return a.setItem(b,"1"),a.removeItem(b),ne()?!!l.indexedDB:!0}catch(c){return Ge()&&!!l.indexedDB}return!1}function Oe(){return(Pe()||"chrome-extension:"===Ee()||De())&&!Ie()&&Me()&&!Ge()}function Pe(){return"http:"===Ee()||"https:"===Ee()}function Ee(){return l.location&&l.location.protocol||null}
function Qe(a){a=a||I();return ue(a)||se(a)==xe?!1:!0}function Re(a){return"undefined"===typeof a?null:he(a)}function Se(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&null!==a[c]&&void 0!==a[c]&&(b[c]=a[c]);return b}function Te(a){if(null!==a)return JSON.parse(a)}function Ne(a){return a?a:Math.floor(1E9*Math.random()).toString()}function Ue(a){a=a||I();return"Safari"==se(a)||a.toLowerCase().match(/iphone|ipad|ipod/)?!1:!0}
function Ve(){var a=l.___jsl;if(a&&a.H)for(var b in a.H)if(a.H[b].r=a.H[b].r||[],a.H[b].L=a.H[b].L||[],a.H[b].r=a.H[b].L.concat(),a.CP)for(var c=0;c<a.CP.length;c++)a.CP[c]=null}function We(a,b){if(a>b)throw Error("Short delay should be less than long delay!");this.a=a;this.c=b;a=I();b=He();this.b=ue(a)||"ReactNative"===b}
We.prototype.get=function(){var a=l.navigator;return(a&&"boolean"===typeof a.onLine&&(Pe()||"chrome-extension:"===Ee()||"undefined"!==typeof a.connection)?a.onLine:1)?this.b?this.c:this.a:Math.min(5E3,this.a)};function Xe(){var a=l.document;return a&&"undefined"!==typeof a.visibilityState?"visible"==a.visibilityState:!0}
function Ye(){var a=l.document,b=null;return Xe()||!a?D():(new B(function(c){b=function(){Xe()&&(a.removeEventListener("visibilitychange",b,!1),c())};a.addEventListener("visibilitychange",b,!1)})).o(function(c){a.removeEventListener("visibilitychange",b,!1);throw c;})}function Ze(a){try{var b=new Date(parseInt(a,10));if(!isNaN(b.getTime())&&!/[^0-9]/.test(a))return b.toUTCString()}catch(c){}return null}function $e(){return!(!J("fireauth.oauthhelper",l)&&!J("fireauth.iframe",l))}
function af(){var a=l.navigator;return a&&a.serviceWorker&&a.serviceWorker.controller||null}function bf(){var a=l.navigator;return a&&a.serviceWorker?D().then(function(){return a.serviceWorker.ready}).then(function(b){return b.active||null}).o(function(){return null}):D(null)};var cf={};function df(a){cf[a]||(cf[a]=!0,"undefined"!==typeof console&&"function"===typeof console.warn&&console.warn(a))};var ef;try{var ff={};Object.defineProperty(ff,"abcd",{configurable:!0,enumerable:!0,value:1});Object.defineProperty(ff,"abcd",{configurable:!0,enumerable:!0,value:2});ef=2==ff.abcd}catch(a){ef=!1}function K(a,b,c){ef?Object.defineProperty(a,b,{configurable:!0,enumerable:!0,value:c}):a[b]=c}function L(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&K(a,c,b[c])}function gf(a){var b={};L(b,a);return b}function hf(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}
function jf(a,b){if(!b||!b.length)return!0;if(!a)return!1;for(var c=0;c<b.length;c++){var d=a[b[c]];if(void 0===d||null===d||""===d)return!1}return!0}function kf(a){var b=a;if("object"==typeof a&&null!=a){b="length"in a?[]:{};for(var c in a)K(b,c,kf(a[c]))}return b};/*

 Copyright 2019 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function lf(a){var b=a&&(a[mf]?"phone":null);if(b&&a&&a[nf]){K(this,"uid",a[nf]);K(this,"displayName",a[of]||null);var c=null;a[pf]&&(c=(new Date(a[pf])).toUTCString());K(this,"enrollmentTime",c);K(this,"factorId",b)}else throw new t("internal-error","Internal assert: invalid MultiFactorInfo object");}lf.prototype.v=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}};function qf(a){try{var b=new rf(a)}catch(c){b=null}return b}
var of="displayName",pf="enrolledAt",nf="mfaEnrollmentId",mf="phoneInfo";function rf(a){lf.call(this,a);K(this,"phoneNumber",a[mf])}r(rf,lf);rf.prototype.v=function(){var a=rf.Za.v.call(this);a.phoneNumber=this.phoneNumber;return a};function sf(a){var b={},c=a[tf],d=a[uf],e=a[vf];a=qf(a[wf]);if(!e||e!=xf&&e!=yf&&!c||e==yf&&!d||e==zf&&!a)throw Error("Invalid checkActionCode response!");e==yf?(b[Af]=c||null,b[Bf]=c||null,b[Cf]=d):(b[Af]=d||null,b[Bf]=d||null,b[Cf]=c||null);b[Df]=a||null;K(this,Ef,e);K(this,Ff,kf(b))}
var zf="REVERT_SECOND_FACTOR_ADDITION",xf="EMAIL_SIGNIN",yf="VERIFY_AND_CHANGE_EMAIL",tf="email",wf="mfaInfo",uf="newEmail",vf="requestType",Cf="email",Af="fromEmail",Df="multiFactorInfo",Bf="previousEmail",Ff="data",Ef="operation";function Gf(a){a=Zd(a);var b=Yd(a,Hf)||null,c=Yd(a,If)||null,d=Yd(a,Jf)||null;d=d?Kf[d]||null:null;if(!b||!c||!d)throw new t("argument-error",Hf+", "+If+"and "+Jf+" are required in a valid action code URL.");L(this,{apiKey:b,operation:d,code:c,continueUrl:Yd(a,Lf)||null,languageCode:Yd(a,Mf)||null,tenantId:Yd(a,Nf)||null})}
var Hf="apiKey",If="oobCode",Lf="continueUrl",Mf="languageCode",Jf="mode",Nf="tenantId",Kf={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:zf,signIn:xf,verifyAndChangeEmail:yf,verifyEmail:"VERIFY_EMAIL"};function Of(a){try{return new Gf(a)}catch(b){return null}};function Pf(a){var b=a[Qf];if("undefined"===typeof b)throw new t("missing-continue-uri");if("string"!==typeof b||"string"===typeof b&&!b.length)throw new t("invalid-continue-uri");this.h=b;this.b=this.a=null;this.g=!1;var c=a[Rf];if(c&&"object"===typeof c){b=c[Sf];var d=c[Tf];c=c[Uf];if("string"===typeof b&&b.length){this.a=b;if("undefined"!==typeof d&&"boolean"!==typeof d)throw new t("argument-error",Tf+" property must be a boolean when specified.");this.g=!!d;if("undefined"!==typeof c&&("string"!==
typeof c||"string"===typeof c&&!c.length))throw new t("argument-error",Uf+" property must be a non empty string when specified.");this.b=c||null}else{if("undefined"!==typeof b)throw new t("argument-error",Sf+" property must be a non empty string when specified.");if("undefined"!==typeof d||"undefined"!==typeof c)throw new t("missing-android-pkg-name");}}else if("undefined"!==typeof c)throw new t("argument-error",Rf+" property must be a non null object when specified.");this.f=null;if((b=a[Vf])&&"object"===
typeof b)if(b=b[Wf],"string"===typeof b&&b.length)this.f=b;else{if("undefined"!==typeof b)throw new t("argument-error",Wf+" property must be a non empty string when specified.");}else if("undefined"!==typeof b)throw new t("argument-error",Vf+" property must be a non null object when specified.");b=a[Xf];if("undefined"!==typeof b&&"boolean"!==typeof b)throw new t("argument-error",Xf+" property must be a boolean when specified.");this.c=!!b;a=a[Yf];if("undefined"!==typeof a&&("string"!==typeof a||"string"===
typeof a&&!a.length))throw new t("argument-error",Yf+" property must be a non empty string when specified.");this.i=a||null}var Rf="android",Yf="dynamicLinkDomain",Xf="handleCodeInApp",Vf="iOS",Qf="url",Tf="installApp",Uf="minimumVersion",Sf="packageName",Wf="bundleId";
function Zf(a){var b={};b.continueUrl=a.h;b.canHandleCodeInApp=a.c;if(b.androidPackageName=a.a)b.androidMinimumVersion=a.b,b.androidInstallApp=a.g;b.iOSBundleId=a.f;b.dynamicLinkDomain=a.i;for(var c in b)null===b[c]&&delete b[c];return b};function $f(a){return Pa(a,function(b){b=b.toString(16);return 1<b.length?b:"0"+b}).join("")};var ag=null;function bg(a){var b="";cg(a,function(c){b+=String.fromCharCode(c)});return b}function cg(a,b){function c(m){for(;d<a.length;){var p=a.charAt(d++),v=ag[p];if(null!=v)return v;if(!/^[\s\xa0]*$/.test(p))throw Error("Unknown base64 encoding at char: "+p);}return m}dg();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function dg(){if(!ag){ag={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++)for(var d=a.concat(b[c].split("")),e=0;e<d.length;e++){var f=d[e];void 0===ag[f]&&(ag[f]=e)}}};function eg(a){var b=fg(a);if(!(b&&b.sub&&b.iss&&b.aud&&b.exp))throw Error("Invalid JWT");this.g=a;this.c=b.exp;this.h=b.sub;ua();this.a=b.provider_id||b.firebase&&b.firebase.sign_in_provider||null;this.f=b.firebase&&b.firebase.tenant||null;this.b=!!b.is_anonymous||"anonymous"==this.a}eg.prototype.S=function(){return this.f};eg.prototype.i=function(){return this.b};eg.prototype.toString=function(){return this.g};function gg(a){try{return new eg(a)}catch(b){return null}}
function fg(a){if(!a)return null;a=a.split(".");if(3!=a.length)return null;a=a[1];for(var b=(4-a.length%4)%4,c=0;c<b;c++)a+=".";try{return JSON.parse(bg(a))}catch(d){}return null};var hg="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),ig=["client_id","response_type","scope","redirect_uri","state"],jg={kd:{Ha:"locale",ta:700,sa:600,ea:"facebook.com",Va:ig},md:{Ha:null,ta:500,sa:750,ea:"github.com",Va:ig},nd:{Ha:"hl",ta:515,sa:680,ea:"google.com",Va:ig},td:{Ha:"lang",ta:485,sa:705,ea:"twitter.com",Va:hg},gd:{Ha:"locale",ta:640,sa:600,ea:"apple.com",Va:[]}};
function kg(a){for(var b in jg)if(jg[b].ea==a)return jg[b];return null};function lg(a){var b={};b["facebook.com"]=mg;b["google.com"]=ng;b["github.com"]=og;b["twitter.com"]=pg;var c=a&&a[qg];try{if(c)return b[c]?new b[c](a):new rg(a);if("undefined"!==typeof a[sg])return new tg(a)}catch(d){}return null}var sg="idToken",qg="providerId";
function tg(a){var b=a[qg];if(!b&&a[sg]){var c=gg(a[sg]);c&&c.a&&(b=c.a)}if(!b)throw Error("Invalid additional user info!");if("anonymous"==b||"custom"==b)b=null;c=!1;"undefined"!==typeof a.isNewUser?c=!!a.isNewUser:"identitytoolkit#SignupNewUserResponse"===a.kind&&(c=!0);K(this,"providerId",b);K(this,"isNewUser",c)}function rg(a){tg.call(this,a);a=Te(a.rawUserInfo||"{}");K(this,"profile",kf(a||{}))}r(rg,tg);
function mg(a){rg.call(this,a);if("facebook.com"!=this.providerId)throw Error("Invalid provider ID!");}r(mg,rg);function og(a){rg.call(this,a);if("github.com"!=this.providerId)throw Error("Invalid provider ID!");K(this,"username",this.profile&&this.profile.login||null)}r(og,rg);function ng(a){rg.call(this,a);if("google.com"!=this.providerId)throw Error("Invalid provider ID!");}r(ng,rg);
function pg(a){rg.call(this,a);if("twitter.com"!=this.providerId)throw Error("Invalid provider ID!");K(this,"username",a.screenName||null)}r(pg,rg);function ug(a){var b=Zd(a),c=Yd(b,"link"),d=Yd(Zd(c),"link");b=Yd(b,"deep_link_id");return Yd(Zd(b),"link")||b||d||c||a};function vg(a,b){if(!a&&!b)throw new t("internal-error","Internal assert: no raw session string available");if(a&&b)throw new t("internal-error","Internal assert: unable to determine the session type");this.a=a||null;this.b=b||null;this.type=this.a?wg:xg}var wg="enroll",xg="signin";vg.prototype.Fa=function(){return this.a?D(this.a):D(this.b)};vg.prototype.v=function(){return this.type==wg?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}};function yg(){}yg.prototype.ia=function(){};yg.prototype.b=function(){};yg.prototype.c=function(){};yg.prototype.v=function(){};function zg(a,b){return a.then(function(c){if(c[Ag]){var d=gg(c[Ag]);if(!d||b!=d.h)throw new t("user-mismatch");return c}throw new t("user-mismatch");}).o(function(c){throw c&&c.code&&c.code==va+"user-not-found"?new t("user-mismatch"):c;})}
function Bg(a,b){if(b)this.a=b;else throw new t("internal-error","failed to construct a credential");K(this,"providerId",a);K(this,"signInMethod",a)}Bg.prototype.ia=function(a){return Cg(a,Dg(this))};Bg.prototype.b=function(a,b){var c=Dg(this);c.idToken=b;return Eg(a,c)};Bg.prototype.c=function(a,b){return zg(Fg(a,Dg(this)),b)};function Dg(a){return{pendingToken:a.a,requestUri:"http://localhost"}}Bg.prototype.v=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}};
function Gg(a){if(a&&a.providerId&&a.signInMethod&&0==a.providerId.indexOf("saml.")&&a.pendingToken)try{return new Bg(a.providerId,a.pendingToken)}catch(b){}return null}
function Hg(a,b,c){this.a=null;if(b.idToken||b.accessToken)b.idToken&&K(this,"idToken",b.idToken),b.accessToken&&K(this,"accessToken",b.accessToken),b.nonce&&!b.pendingToken&&K(this,"nonce",b.nonce),b.pendingToken&&(this.a=b.pendingToken);else if(b.oauthToken&&b.oauthTokenSecret)K(this,"accessToken",b.oauthToken),K(this,"secret",b.oauthTokenSecret);else throw new t("internal-error","failed to construct a credential");K(this,"providerId",a);K(this,"signInMethod",c)}
Hg.prototype.ia=function(a){return Cg(a,Ig(this))};Hg.prototype.b=function(a,b){var c=Ig(this);c.idToken=b;return Eg(a,c)};Hg.prototype.c=function(a,b){var c=Ig(this);return zg(Fg(a,c),b)};
function Ig(a){var b={};a.idToken&&(b.id_token=a.idToken);a.accessToken&&(b.access_token=a.accessToken);a.secret&&(b.oauth_token_secret=a.secret);b.providerId=a.providerId;a.nonce&&!a.a&&(b.nonce=a.nonce);b={postBody:ce(b).toString(),requestUri:"http://localhost"};a.a&&(delete b.postBody,b.pendingToken=a.a);return b}
Hg.prototype.v=function(){var a={providerId:this.providerId,signInMethod:this.signInMethod};this.idToken&&(a.oauthIdToken=this.idToken);this.accessToken&&(a.oauthAccessToken=this.accessToken);this.secret&&(a.oauthTokenSecret=this.secret);this.nonce&&(a.nonce=this.nonce);this.a&&(a.pendingToken=this.a);return a};
function Jg(a){if(a&&a.providerId&&a.signInMethod){var b={idToken:a.oauthIdToken,accessToken:a.oauthTokenSecret?null:a.oauthAccessToken,oauthTokenSecret:a.oauthTokenSecret,oauthToken:a.oauthTokenSecret&&a.oauthAccessToken,nonce:a.nonce,pendingToken:a.pendingToken};try{return new Hg(a.providerId,b,a.signInMethod)}catch(c){}}return null}function Kg(a,b){this.Oc=b||[];L(this,{providerId:a,isOAuthProvider:!0});this.Fb={};this.lb=(kg(a)||{}).Ha||null;this.kb=null}
Kg.prototype.Ia=function(a){this.Fb=lb(a);return this};function Lg(a){if("string"!==typeof a||0!=a.indexOf("saml."))throw new t("argument-error",'SAML provider IDs must be prefixed with "saml."');Kg.call(this,a,[])}r(Lg,Kg);function M(a){Kg.call(this,a,ig);this.a=[]}r(M,Kg);M.prototype.Aa=function(a){Ta(this.a,a)||this.a.push(a);return this};M.prototype.Nb=function(){return Xa(this.a)};
M.prototype.credential=function(a,b){var c;n(a)?c={idToken:a.idToken||null,accessToken:a.accessToken||null,nonce:a.rawNonce||null}:c={idToken:a||null,accessToken:b||null};if(!c.idToken&&!c.accessToken)throw new t("argument-error","credential failed: must provide the ID token and/or the access token.");return new Hg(this.providerId,c,this.providerId)};function Mg(){M.call(this,"facebook.com")}r(Mg,M);K(Mg,"PROVIDER_ID","facebook.com");K(Mg,"FACEBOOK_SIGN_IN_METHOD","facebook.com");
function Ng(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return(new Mg).credential({accessToken:b})}function Og(){M.call(this,"github.com")}r(Og,M);K(Og,"PROVIDER_ID","github.com");K(Og,"GITHUB_SIGN_IN_METHOD","github.com");
function Pg(a){if(!a)throw new t("argument-error","credential failed: expected 1 argument (the OAuth access token).");var b=a;n(a)&&(b=a.accessToken);return(new Og).credential({accessToken:b})}function Qg(){M.call(this,"google.com");this.Aa("profile")}r(Qg,M);K(Qg,"PROVIDER_ID","google.com");K(Qg,"GOOGLE_SIGN_IN_METHOD","google.com");function Rg(a,b){var c=a;n(a)&&(c=a.idToken,b=a.accessToken);return(new Qg).credential({idToken:c,accessToken:b})}function Sg(){Kg.call(this,"twitter.com",hg)}r(Sg,Kg);
K(Sg,"PROVIDER_ID","twitter.com");K(Sg,"TWITTER_SIGN_IN_METHOD","twitter.com");function Tg(a,b){var c=a;n(c)||(c={oauthToken:a,oauthTokenSecret:b});if(!c.oauthToken||!c.oauthTokenSecret)throw new t("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");return new Hg("twitter.com",c,"twitter.com")}
function Ug(a,b,c){this.a=a;this.f=b;K(this,"providerId","password");K(this,"signInMethod",c===Vg.EMAIL_LINK_SIGN_IN_METHOD?Vg.EMAIL_LINK_SIGN_IN_METHOD:Vg.EMAIL_PASSWORD_SIGN_IN_METHOD)}Ug.prototype.ia=function(a){return this.signInMethod==Vg.EMAIL_LINK_SIGN_IN_METHOD?N(a,Wg,{email:this.a,oobCode:this.f}):N(a,Xg,{email:this.a,password:this.f})};
Ug.prototype.b=function(a,b){return this.signInMethod==Vg.EMAIL_LINK_SIGN_IN_METHOD?N(a,Yg,{idToken:b,email:this.a,oobCode:this.f}):N(a,Zg,{idToken:b,email:this.a,password:this.f})};Ug.prototype.c=function(a,b){return zg(this.ia(a),b)};Ug.prototype.v=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}};function $g(a){return a&&a.email&&a.password?new Ug(a.email,a.password,a.signInMethod):null}function Vg(){L(this,{providerId:"password",isOAuthProvider:!1})}
function ah(a,b){b=bh(b);if(!b)throw new t("argument-error","Invalid email link!");return new Ug(a,b.code,Vg.EMAIL_LINK_SIGN_IN_METHOD)}function bh(a){a=ug(a);return(a=Of(a))&&a.operation===xf?a:null}L(Vg,{PROVIDER_ID:"password"});L(Vg,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"});L(Vg,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"});function ch(a){if(!(a.bb&&a.ab||a.Ja&&a.da))throw new t("internal-error");this.a=a;K(this,"providerId","phone");this.ea="phone";K(this,"signInMethod","phone")}
ch.prototype.ia=function(a){return a.cb(dh(this))};ch.prototype.b=function(a,b){var c=dh(this);c.idToken=b;return N(a,eh,c)};ch.prototype.c=function(a,b){var c=dh(this);c.operation="REAUTH";a=N(a,fh,c);return zg(a,b)};ch.prototype.v=function(){var a={providerId:"phone"};this.a.bb&&(a.verificationId=this.a.bb);this.a.ab&&(a.verificationCode=this.a.ab);this.a.Ja&&(a.temporaryProof=this.a.Ja);this.a.da&&(a.phoneNumber=this.a.da);return a};
function gh(a){if(a&&"phone"===a.providerId&&(a.verificationId&&a.verificationCode||a.temporaryProof&&a.phoneNumber)){var b={};w(["verificationId","verificationCode","temporaryProof","phoneNumber"],function(c){a[c]&&(b[c]=a[c])});return new ch(b)}return null}function dh(a){return a.a.Ja&&a.a.da?{temporaryProof:a.a.Ja,phoneNumber:a.a.da}:{sessionInfo:a.a.bb,code:a.a.ab}}
function hh(a){try{this.a=a||firebase.auth()}catch(b){throw new t("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");}L(this,{providerId:"phone",isOAuthProvider:!1})}
hh.prototype.cb=function(a,b){var c=this.a.b;return D(b.verify()).then(function(d){if("string"!==typeof d)throw new t("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");switch(b.type){case "recaptcha":var e=n(a)?a.session:null,f=n(a)?a.phoneNumber:a,g;e&&e.type==wg?g=e.Fa().then(function(h){return ih(c,{idToken:h,phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:d}})}):e&&e.type==xg?g=e.Fa().then(function(h){return jh(c,
{mfaPendingCredential:h,mfaEnrollmentId:a.multiFactorHint&&a.multiFactorHint.uid||a.multiFactorUid,phoneSignInInfo:{recaptchaToken:d}})}):g=kh(c,{phoneNumber:f,recaptchaToken:d});return g.then(function(h){"function"===typeof b.reset&&b.reset();return h},function(h){"function"===typeof b.reset&&b.reset();throw h;});default:throw new t("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');}})};
function lh(a,b){if(!a)throw new t("missing-verification-id");if(!b)throw new t("missing-verification-code");return new ch({bb:a,ab:b})}L(hh,{PROVIDER_ID:"phone"});L(hh,{PHONE_SIGN_IN_METHOD:"phone"});
function mh(a){if(a.temporaryProof&&a.phoneNumber)return new ch({Ja:a.temporaryProof,da:a.phoneNumber});var b=a&&a.providerId;if(!b||"password"===b)return null;var c=a&&a.oauthAccessToken,d=a&&a.oauthTokenSecret,e=a&&a.nonce,f=a&&a.oauthIdToken,g=a&&a.pendingToken;try{switch(b){case "google.com":return Rg(f,c);case "facebook.com":return Ng(c);case "github.com":return Pg(c);case "twitter.com":return Tg(c,d);default:return c||d||f||g?g?0==b.indexOf("saml.")?new Bg(b,g):new Hg(b,{pendingToken:g,idToken:a.oauthIdToken,
accessToken:a.oauthAccessToken},b):(new M(b)).credential({idToken:f,accessToken:c,rawNonce:e}):null}}catch(h){return null}}function nh(a){if(!a.isOAuthProvider)throw new t("invalid-oauth-provider");};function oh(a,b,c,d,e,f,g){this.c=a;this.b=b||null;this.g=c||null;this.f=d||null;this.i=f||null;this.h=g||null;this.a=e||null;if(this.g||this.a){if(this.g&&this.a)throw new t("invalid-auth-event");if(this.g&&!this.f)throw new t("invalid-auth-event");}else throw new t("invalid-auth-event");}oh.prototype.getUid=function(){var a=[];a.push(this.c);this.b&&a.push(this.b);this.f&&a.push(this.f);this.h&&a.push(this.h);return a.join("-")};oh.prototype.S=function(){return this.h};
oh.prototype.v=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.v()}};function ph(a){a=a||{};return a.type?new oh(a.type,a.eventId,a.urlResponse,a.sessionId,a.error&&ya(a.error),a.postBody,a.tenantId):null};/*

 Copyright 2018 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function qh(){this.b=null;this.a=[]}var rh=null;function sh(a){var b=rh;b.a.push(a);b.b||(b.b=function(c){for(var d=0;d<b.a.length;d++)b.a[d](c)},a=J("universalLinks.subscribe",l),"function"===typeof a&&a(null,b.b))};function th(a){var b="unauthorized-domain",c=void 0,d=Zd(a);a=d.b;d=d.f;"chrome-extension"==d?c=Nb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):"http"==d||"https"==d?c=Nb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",a):b="operation-not-supported-in-this-environment";
t.call(this,b,c)}r(th,t);function uh(a,b,c){t.call(this,a,c);a=b||{};a.Gb&&K(this,"email",a.Gb);a.da&&K(this,"phoneNumber",a.da);a.credential&&K(this,"credential",a.credential);a.Wb&&K(this,"tenantId",a.Wb)}r(uh,t);uh.prototype.v=function(){var a={code:this.code,message:this.message};this.email&&(a.email=this.email);this.phoneNumber&&(a.phoneNumber=this.phoneNumber);this.tenantId&&(a.tenantId=this.tenantId);var b=this.credential&&this.credential.v();b&&z(a,b);return a};uh.prototype.toJSON=function(){return this.v()};
function vh(a){if(a.code){var b=a.code||"";0==b.indexOf(va)&&(b=b.substring(va.length));var c={credential:mh(a),Wb:a.tenantId};if(a.email)c.Gb=a.email;else if(a.phoneNumber)c.da=a.phoneNumber;else if(!c.credential)return new t(b,a.message||void 0);return new uh(b,c,a.message)}return null};function wh(){}wh.prototype.c=null;function xh(a){return a.c||(a.c=a.b())};var yh;function zh(){}r(zh,wh);zh.prototype.a=function(){var a=Ah(this);return a?new ActiveXObject(a):new XMLHttpRequest};zh.prototype.b=function(){var a={};Ah(this)&&(a[0]=!0,a[1]=!0);return a};
function Ah(a){if(!a.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.f=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.f}yh=new zh;function Bh(){}r(Bh,wh);Bh.prototype.a=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new Ch;throw Error("Unsupported browser");};Bh.prototype.b=function(){return{}};
function Ch(){this.a=new XDomainRequest;this.readyState=0;this.onreadystatechange=null;this.responseType=this.responseText=this.response="";this.status=-1;this.statusText="";this.a.onload=q(this.oc,this);this.a.onerror=q(this.Pb,this);this.a.onprogress=q(this.pc,this);this.a.ontimeout=q(this.tc,this)}k=Ch.prototype;k.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.a.open(a,b)};
k.send=function(a){if(a)if("string"==typeof a)this.a.send(a);else throw Error("Only string data is supported");else this.a.send()};k.abort=function(){this.a.abort()};k.setRequestHeader=function(){};k.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.a.contentType:""};k.oc=function(){this.status=200;this.response=this.responseText=this.a.responseText;Dh(this,4)};k.Pb=function(){this.status=500;this.response=this.responseText="";Dh(this,4)};k.tc=function(){this.Pb()};
k.pc=function(){this.status=200;Dh(this,1)};function Dh(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}k.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType};function Eh(a,b,c){this.reset(a,b,c,void 0,void 0)}Eh.prototype.a=null;var Fh=0;Eh.prototype.reset=function(a,b,c,d,e){"number"==typeof e||Fh++;d||ua();delete this.a};function Gh(a){this.f=a;this.b=this.c=this.a=null}function Hh(a,b){this.name=a;this.value=b}Hh.prototype.toString=function(){return this.name};var Ih=new Hh("SEVERE",1E3),Jh=new Hh("WARNING",900),Kh=new Hh("CONFIG",700),Lh=new Hh("FINE",500);function Mh(a){if(a.c)return a.c;if(a.a)return Mh(a.a);Ea("Root logger has no level set.");return null}Gh.prototype.log=function(a,b,c){if(a.value>=Mh(this).value)for(na(b)&&(b=b()),a=new Eh(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Nh={},Oh=null;
function Ph(a){Oh||(Oh=new Gh(""),Nh[""]=Oh,Oh.c=Kh);var b;if(!(b=Nh[a])){b=new Gh(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Ph(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Nh[a]=b}return b};function Qh(a,b){a&&a.log(Lh,b,void 0)};function Rh(a){this.f=a}r(Rh,wh);Rh.prototype.a=function(){return new Sh(this.f)};Rh.prototype.b=function(a){return function(){return a}}({});function Sh(a){G.call(this);this.s=a;this.readyState=Th;this.status=0;this.responseType=this.responseText=this.response=this.statusText="";this.onreadystatechange=null;this.i=new Headers;this.b=null;this.m="GET";this.g="";this.a=!1;this.h=Ph("goog.net.FetchXmlHttp");this.l=this.c=this.f=null}r(Sh,G);var Th=0;k=Sh.prototype;
k.open=function(a,b){if(this.readyState!=Th)throw this.abort(),Error("Error reopening a connection");this.m=a;this.g=b;this.readyState=1;Uh(this)};k.send=function(a){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.a=!0;var b={headers:this.i,method:this.m,credentials:void 0,cache:void 0};a&&(b.body=a);this.s.fetch(new Request(this.g,b)).then(this.sc.bind(this),this.Sa.bind(this))};
k.abort=function(){this.response=this.responseText="";this.i=new Headers;this.status=0;this.c&&this.c.cancel("Request was aborted.");1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,Vh(this,!1));this.readyState=Th};
k.sc=function(a){this.a&&(this.f=a,this.b||(this.b=a.headers,this.readyState=2,Uh(this)),this.a&&(this.readyState=3,Uh(this),this.a&&("arraybuffer"===this.responseType?a.arrayBuffer().then(this.qc.bind(this),this.Sa.bind(this)):"undefined"!==typeof l.ReadableStream&&"body"in a?(this.response=this.responseText="",this.c=a.body.getReader(),this.l=new TextDecoder,Wh(this)):a.text().then(this.rc.bind(this),this.Sa.bind(this)))))};function Wh(a){a.c.read().then(a.nc.bind(a)).catch(a.Sa.bind(a))}
k.nc=function(a){if(this.a){var b=this.l.decode(a.value?a.value:new Uint8Array(0),{stream:!a.done});b&&(this.response=this.responseText+=b);a.done?Vh(this,!0):Uh(this);3==this.readyState&&Wh(this)}};k.rc=function(a){this.a&&(this.response=this.responseText=a,Vh(this,!0))};k.qc=function(a){this.a&&(this.response=a,Vh(this,!0))};k.Sa=function(a){var b=this.h;b&&b.log(Jh,"Failed to fetch url "+this.g,a instanceof Error?a:Error(a));this.a&&Vh(this,!0)};
function Vh(a,b){b&&a.f&&(a.status=a.f.status,a.statusText=a.f.statusText);a.readyState=4;a.f=null;a.c=null;a.l=null;Uh(a)}k.setRequestHeader=function(a,b){this.i.append(a,b)};k.getResponseHeader=function(a){return this.b?this.b.get(a.toLowerCase())||"":((a=this.h)&&a.log(Jh,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")};
k.getAllResponseHeaders=function(){if(!this.b){var a=this.h;a&&a.log(Jh,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0);return""}a=[];for(var b=this.b.entries(),c=b.next();!c.done;)c=c.value,a.push(c[0]+": "+c[1]),c=b.next();return a.join("\r\n")};function Uh(a){a.onreadystatechange&&a.onreadystatechange.call(a)};function Xh(a){G.call(this);this.headers=new Fd;this.D=a||null;this.c=!1;this.B=this.a=null;this.h=this.P=this.l="";this.f=this.O=this.i=this.N=!1;this.g=0;this.s=null;this.m=Yh;this.w=this.R=!1}r(Xh,G);var Yh="";Xh.prototype.b=Ph("goog.net.XhrIo");var Zh=/^https?$/i,$h=["POST","PUT"];
function ai(a,b,c,d,e){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.l+"; newUri="+b);c=c?c.toUpperCase():"GET";a.l=b;a.h="";a.P=c;a.N=!1;a.c=!0;a.a=a.D?a.D.a():yh.a();a.B=a.D?xh(a.D):xh(yh);a.a.onreadystatechange=q(a.Sb,a);try{Qh(a.b,bi(a,"Opening Xhr")),a.O=!0,a.a.open(c,String(b),!0),a.O=!1}catch(g){Qh(a.b,bi(a,"Error opening Xhr: "+g.message));ci(a,g);return}b=d||"";var f=new Fd(a.headers);e&&Ed(e,function(g,h){f.set(h,g)});e=Ra(f.X());d=l.FormData&&b instanceof
l.FormData;!Ta($h,c)||e||d||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(g,h){this.a.setRequestHeader(h,g)},a);a.m&&(a.a.responseType=a.m);"withCredentials"in a.a&&a.a.withCredentials!==a.R&&(a.a.withCredentials=a.R);try{di(a),0<a.g&&(a.w=ei(a.a),Qh(a.b,bi(a,"Will abort after "+a.g+"ms if incomplete, xhr2 "+a.w)),a.w?(a.a.timeout=a.g,a.a.ontimeout=q(a.Ka,a)):a.s=Ad(a.Ka,a.g,a)),Qh(a.b,bi(a,"Sending request")),a.i=!0,a.a.send(b),a.i=!1}catch(g){Qh(a.b,
bi(a,"Send error: "+g.message)),ci(a,g)}}function ei(a){return Tb&&cc(9)&&"number"===typeof a.timeout&&void 0!==a.ontimeout}function Sa(a){return"content-type"==a.toLowerCase()}k=Xh.prototype;k.Ka=function(){"undefined"!=typeof ha&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",Qh(this.b,bi(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))};function ci(a,b){a.c=!1;a.a&&(a.f=!0,a.a.abort(),a.f=!1);a.h=b;fi(a);gi(a)}
function fi(a){a.N||(a.N=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}k.abort=function(){this.a&&this.c&&(Qh(this.b,bi(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),gi(this))};k.Ba=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),gi(this,!0));Xh.Za.Ba.call(this)};k.Sb=function(){this.wa||(this.O||this.i||this.f?hi(this):this.Hc())};k.Hc=function(){hi(this)};
function hi(a){if(a.c&&"undefined"!=typeof ha)if(a.B[1]&&4==ii(a)&&2==ji(a))Qh(a.b,bi(a,"Local request error detected and ignored"));else if(a.i&&4==ii(a))Ad(a.Sb,0,a);else if(a.dispatchEvent("readystatechange"),4==ii(a)){Qh(a.b,bi(a,"Request complete"));a.c=!1;try{var b=ji(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.l).match(Id)[1]||null;if(!f&&l.self&&l.self.location){var g=l.self.location.protocol;
f=g.substr(0,g.length-1)}e=!Zh.test(f?f.toLowerCase():"")}d=e}if(d)a.dispatchEvent("complete"),a.dispatchEvent("success");else{try{var h=2<ii(a)?a.a.statusText:""}catch(m){Qh(a.b,"Can not get status: "+m.message),h=""}a.h=h+" ["+ji(a)+"]";fi(a)}}finally{gi(a)}}}function gi(a,b){if(a.a){di(a);var c=a.a,d=a.B[0]?ka:null;a.a=null;a.B=null;b||a.dispatchEvent("ready");try{c.onreadystatechange=d}catch(e){(a=a.b)&&a.log(Ih,"Problem encountered resetting onreadystatechange: "+e.message,void 0)}}}
function di(a){a.a&&a.w&&(a.a.ontimeout=null);a.s&&(l.clearTimeout(a.s),a.s=null)}function ii(a){return a.a?a.a.readyState:0}function ji(a){try{return 2<ii(a)?a.a.status:-1}catch(b){return-1}}function ki(a){try{return a.a?a.a.responseText:""}catch(b){return Qh(a.b,"Can not get responseText: "+b.message),""}}
k.getResponse=function(){try{if(!this.a)return null;if("response"in this.a)return this.a.response;switch(this.m){case Yh:case "text":return this.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var a=this.b;a&&a.log(Ih,"Response type "+this.m+" is not supported on this browser",void 0);return null}catch(b){return Qh(this.b,"Can not get response: "+b.message),null}};function bi(a,b){return b+" ["+a.P+" "+a.l+" "+ji(a)+"]"};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function li(a){var b=mi;this.g=[];this.w=b;this.s=a||null;this.f=this.a=!1;this.c=void 0;this.u=this.B=this.i=!1;this.h=0;this.b=null;this.l=0}li.prototype.cancel=function(a){if(this.a)this.c instanceof li&&this.c.cancel();else{if(this.b){var b=this.b;delete this.b;a?b.cancel(a):(b.l--,0>=b.l&&b.cancel())}this.w?this.w.call(this.s,this):this.u=!0;this.a||(a=new ni(this),oi(this),pi(this,!1,a))}};li.prototype.m=function(a,b){this.i=!1;pi(this,a,b)};function pi(a,b,c){a.a=!0;a.c=c;a.f=!b;qi(a)}
function oi(a){if(a.a){if(!a.u)throw new ri(a);a.u=!1}}function si(a,b){ti(a,null,b,void 0)}function ti(a,b,c,d){a.g.push([b,c,d]);a.a&&qi(a)}li.prototype.then=function(a,b,c){var d,e,f=new B(function(g,h){d=g;e=h});ti(this,d,function(g){g instanceof ni?f.cancel():e(g)});return f.then(a,b,c)};li.prototype.$goog_Thenable=!0;function ui(a){return Qa(a.g,function(b){return na(b[1])})}
function qi(a){if(a.h&&a.a&&ui(a)){var b=a.h,c=vi[b];c&&(l.clearTimeout(c.a),delete vi[b]);a.h=0}a.b&&(a.b.l--,delete a.b);b=a.c;for(var d=c=!1;a.g.length&&!a.i;){var e=a.g.shift(),f=e[0],g=e[1];e=e[2];if(f=a.f?g:f)try{var h=f.call(e||a.s,b);void 0!==h&&(a.f=a.f&&(h==b||h instanceof Error),a.c=b=h);if(Ca(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.i=!0}catch(m){b=m,a.f=!0,ui(a)||(c=!0)}}a.c=b;d&&(h=q(a.m,a,!0),d=q(a.m,a,!1),b instanceof li?(ti(b,h,d),b.B=!0):b.then(h,d));c&&(b=
new wi(b),vi[b.a]=b,a.h=b.a)}function ri(){u.call(this)}r(ri,u);ri.prototype.message="Deferred has already fired";ri.prototype.name="AlreadyCalledError";function ni(){u.call(this)}r(ni,u);ni.prototype.message="Deferred was canceled";ni.prototype.name="CanceledError";function wi(a){this.a=l.setTimeout(q(this.c,this),0);this.b=a}wi.prototype.c=function(){delete vi[this.a];throw this.b;};var vi={};function xi(a){var b={},c=b.document||document,d=wb(a).toString(),e=jc(document,"SCRIPT"),f={Tb:e,Ka:void 0},g=new li(f),h=null,m=null!=b.timeout?b.timeout:5E3;0<m&&(h=window.setTimeout(function(){yi(e,!0);var p=new zi(Ai,"Timeout reached for loading script "+d);oi(g);pi(g,!1,p)},m),f.Ka=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(yi(e,b.ud||!1,h),oi(g),pi(g,!0,null))};e.onerror=function(){yi(e,!0,h);var p=new zi(Bi,"Error while loading script "+
d);oi(g);pi(g,!1,p)};f=b.attributes||{};z(f,{type:"text/javascript",charset:"UTF-8"});gc(e,f);Mb(e,a);Ci(c).appendChild(e);return g}function Ci(a){var b;return(b=(a||document).getElementsByTagName("HEAD"))&&0!=b.length?b[0]:a.documentElement}function mi(){if(this&&this.Tb){var a=this.Tb;a&&"SCRIPT"==a.tagName&&yi(a,!0,this.Ka)}}
function yi(a,b,c){null!=c&&l.clearTimeout(c);a.onload=ka;a.onerror=ka;a.onreadystatechange=ka;b&&window.setTimeout(function(){a&&a.parentNode&&a.parentNode.removeChild(a)},0)}var Bi=0,Ai=1;function zi(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);u.call(this,c);this.code=a}r(zi,u);function Di(a){this.f=a}r(Di,wh);Di.prototype.a=function(){return new this.f};Di.prototype.b=function(){return{}};
function Ei(a,b,c){this.c=a;a=b||{};this.u=a.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token";this.m=a.secureTokenTimeout||Fi;this.g=lb(a.secureTokenHeaders||Gi);this.h=a.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/";this.l=a.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/";this.i=a.firebaseTimeout||Hi;this.a=lb(a.firebaseHeaders||Ii);c&&(this.a["X-Client-Version"]=c,this.g["X-Client-Version"]=c);c="Node"==He();c=l.XMLHttpRequest||
c&&firebase.INTERNAL.node&&firebase.INTERNAL.node.XMLHttpRequest;if(!c&&!Ge())throw new t("internal-error","The XMLHttpRequest compatibility library was not found.");this.f=void 0;Ge()?this.f=new Rh(self):Ie()?this.f=new Di(c):this.f=new Bh;this.b=null}var Ji,Ag="idToken",Fi=new We(3E4,6E4),Gi={"Content-Type":"application/x-www-form-urlencoded"},Hi=new We(3E4,6E4),Ii={"Content-Type":"application/json"};function Ki(a,b){b?a.a["X-Firebase-Locale"]=b:delete a.a["X-Firebase-Locale"]}
function Li(a,b){b?(a.a["X-Client-Version"]=b,a.g["X-Client-Version"]=b):(delete a.a["X-Client-Version"],delete a.g["X-Client-Version"])}Ei.prototype.S=function(){return this.b};function Mi(a,b,c,d,e,f,g){re()||Ge()?a=q(a.w,a):(Ji||(Ji=new B(function(h,m){Ni(h,m)})),a=q(a.s,a));a(b,c,d,e,f,g)}
Ei.prototype.w=function(a,b,c,d,e,f){if(Ge()&&("undefined"===typeof l.fetch||"undefined"===typeof l.Headers||"undefined"===typeof l.Request))throw new t("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");var g=new Xh(this.f);if(f){g.g=Math.max(0,f);var h=setTimeout(function(){g.dispatchEvent("timeout")},f)}md(g,"complete",function(){h&&clearTimeout(h);var m=null;try{m=
JSON.parse(ki(this))||null}catch(p){m=null}b&&b(m)});sd(g,"ready",function(){h&&clearTimeout(h);Tc(this)});sd(g,"timeout",function(){h&&clearTimeout(h);Tc(this);b&&b(null)});ai(g,a,c,d,e)};var Oi=new ob(pb,"https://apis.google.com/js/client.js?onload=%{onload}"),Pi="__fcb"+Math.floor(1E6*Math.random()).toString();
function Ni(a,b){if(((window.gapi||{}).client||{}).request)a();else{l[Pi]=function(){((window.gapi||{}).client||{}).request?a():b(Error("CORS_UNSUPPORTED"))};var c=xb(Oi,{onload:Pi});si(xi(c),function(){b(Error("CORS_UNSUPPORTED"))})}}
Ei.prototype.s=function(a,b,c,d,e){var f=this;Ji.then(function(){window.gapi.client.setApiKey(f.c);var g=window.gapi.auth.getToken();window.gapi.auth.setToken(null);window.gapi.client.request({path:a,method:c,body:d,headers:e,authType:"none",callback:function(h){window.gapi.auth.setToken(g);b&&b(h)}})}).o(function(g){b&&b({error:{message:g&&g.message||"CORS_UNSUPPORTED"}})})};
function Qi(a,b){return new B(function(c,d){"refresh_token"==b.grant_type&&b.refresh_token||"authorization_code"==b.grant_type&&b.code?Mi(a,a.u+"?key="+encodeURIComponent(a.c),function(e){e?e.error?d(Ri(e)):e.access_token&&e.refresh_token?c(e):d(new t("internal-error")):d(new t("network-request-failed"))},"POST",ce(b).toString(),a.g,a.m.get()):d(new t("internal-error"))})}
function Si(a,b,c,d,e,f,g){var h=Zd(b+c);H(h,"key",a.c);g&&H(h,"cb",ua().toString());var m="GET"==d;if(m)for(var p in e)e.hasOwnProperty(p)&&H(h,p,e[p]);return new B(function(v,C){Mi(a,h.toString(),function(A){A?A.error?C(Ri(A,f||{})):v(A):C(new t("network-request-failed"))},d,m?void 0:he(Se(e)),a.a,a.i.get())})}function Ti(a){a=a.email;if("string"!==typeof a||!Ae.test(a))throw new t("invalid-email");}function Ui(a){"email"in a&&Ti(a)}
function Vi(a,b){return N(a,Wi,{identifier:b,continueUri:Pe()?oe():"http://localhost"}).then(function(c){return c.signinMethods||[]})}function Xi(a){return N(a,Yi,{}).then(function(b){return b.authorizedDomains||[]})}function O(a){if(!a[Ag]){if(a.mfaPendingCredential)throw new t("multi-factor-auth-required",null,lb(a));throw new t("internal-error");}}
function Zi(a){if(a.phoneNumber||a.temporaryProof){if(!a.phoneNumber||!a.temporaryProof)throw new t("internal-error");}else{if(!a.sessionInfo)throw new t("missing-verification-id");if(!a.code)throw new t("missing-verification-code");}}Ei.prototype.vb=function(){return N(this,$i,{})};Ei.prototype.xb=function(a,b){return N(this,aj,{idToken:a,email:b})};Ei.prototype.yb=function(a,b){return N(this,Zg,{idToken:a,password:b})};var bj={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"};k=Ei.prototype;
k.zb=function(a,b){var c={idToken:a},d=[];jb(bj,function(e,f){var g=b[f];null===g?d.push(e):f in b&&(c[f]=g)});d.length&&(c.deleteAttribute=d);return N(this,aj,c)};k.rb=function(a,b){a={requestType:"PASSWORD_RESET",email:a};z(a,b);return N(this,cj,a)};k.sb=function(a,b){a={requestType:"EMAIL_SIGNIN",email:a};z(a,b);return N(this,dj,a)};k.qb=function(a,b){a={requestType:"VERIFY_EMAIL",idToken:a};z(a,b);return N(this,ej,a)};
k.Ab=function(a,b,c){a={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:a,newEmail:b};z(a,c);return N(this,fj,a)};function kh(a,b){return N(a,gj,b)}k.cb=function(a){return N(this,hj,a)};function ih(a,b){return N(a,ij,b).then(function(c){return c.phoneSessionInfo.sessionInfo})}
function jj(a){if(!a.phoneVerificationInfo)throw new t("internal-error");if(!a.phoneVerificationInfo.sessionInfo)throw new t("missing-verification-id");if(!a.phoneVerificationInfo.code)throw new t("missing-verification-code");}function jh(a,b){return N(a,kj,b).then(function(c){return c.phoneResponseInfo.sessionInfo})}function lj(a,b,c){return N(a,mj,{idToken:b,deleteProvider:c})}function nj(a){if(!a.requestUri||!a.sessionId&&!a.postBody&&!a.pendingToken)throw new t("internal-error");}
function oj(a,b){b.oauthIdToken&&b.providerId&&0==b.providerId.indexOf("oidc.")&&!b.pendingToken&&(a.sessionId?b.nonce=a.sessionId:a.postBody&&(a=new Qd(a.postBody),ge(a,"nonce")&&(b.nonce=a.get("nonce"))));return b}
function pj(a){var b=null;a.needConfirmation?(a.code="account-exists-with-different-credential",b=vh(a)):"FEDERATED_USER_ID_ALREADY_LINKED"==a.errorMessage?(a.code="credential-already-in-use",b=vh(a)):"EMAIL_EXISTS"==a.errorMessage?(a.code="email-already-in-use",b=vh(a)):a.errorMessage&&(b=qj(a.errorMessage));if(b)throw b;O(a)}function Cg(a,b){b.returnIdpCredential=!0;return N(a,rj,b)}function Eg(a,b){b.returnIdpCredential=!0;return N(a,sj,b)}
function Fg(a,b){b.returnIdpCredential=!0;b.autoCreate=!1;return N(a,tj,b)}function uj(a){if(!a.oobCode)throw new t("invalid-action-code");}k.jb=function(a,b){return N(this,vj,{oobCode:a,newPassword:b})};k.Pa=function(a){return N(this,wj,{oobCode:a})};k.fb=function(a){return N(this,xj,{oobCode:a})};
var xj={endpoint:"setAccountInfo",A:uj,Y:"email",C:!0},wj={endpoint:"resetPassword",A:uj,G:function(a){var b=a.requestType;if(!b||!a.email&&"EMAIL_SIGNIN"!=b&&"VERIFY_AND_CHANGE_EMAIL"!=b)throw new t("internal-error");},C:!0},yj={endpoint:"signupNewUser",A:function(a){Ti(a);if(!a.password)throw new t("weak-password");},G:O,U:!0,C:!0},Wi={endpoint:"createAuthUri",C:!0},zj={endpoint:"deleteAccount",M:["idToken"]},mj={endpoint:"setAccountInfo",M:["idToken","deleteProvider"],A:function(a){if("array"!=
la(a.deleteProvider))throw new t("internal-error");}},Wg={endpoint:"emailLinkSignin",M:["email","oobCode"],A:Ti,G:O,U:!0,C:!0},Yg={endpoint:"emailLinkSignin",M:["idToken","email","oobCode"],A:Ti,G:O,U:!0},Aj={endpoint:"accounts/mfaEnrollment:finalize",M:["idToken","phoneVerificationInfo"],A:jj,G:O,C:!0,La:!0},Bj={endpoint:"accounts/mfaSignIn:finalize",M:["mfaPendingCredential","phoneVerificationInfo"],A:jj,G:O,C:!0,La:!0},Cj={endpoint:"getAccountInfo"},dj={endpoint:"getOobConfirmationCode",M:["requestType"],
A:function(a){if("EMAIL_SIGNIN"!=a.requestType)throw new t("internal-error");Ti(a)},Y:"email",C:!0},ej={endpoint:"getOobConfirmationCode",M:["idToken","requestType"],A:function(a){if("VERIFY_EMAIL"!=a.requestType)throw new t("internal-error");},Y:"email",C:!0},fj={endpoint:"getOobConfirmationCode",M:["idToken","newEmail","requestType"],A:function(a){if("VERIFY_AND_CHANGE_EMAIL"!=a.requestType)throw new t("internal-error");},Y:"email",C:!0},cj={endpoint:"getOobConfirmationCode",M:["requestType"],A:function(a){if("PASSWORD_RESET"!=
a.requestType)throw new t("internal-error");Ti(a)},Y:"email",C:!0},Yi={hb:!0,endpoint:"getProjectConfig",Rb:"GET"},Dj={hb:!0,endpoint:"getRecaptchaParam",Rb:"GET",G:function(a){if(!a.recaptchaSiteKey)throw new t("internal-error");}},vj={endpoint:"resetPassword",A:uj,Y:"email",C:!0},gj={endpoint:"sendVerificationCode",M:["phoneNumber","recaptchaToken"],Y:"sessionInfo",C:!0},aj={endpoint:"setAccountInfo",M:["idToken"],A:Ui,U:!0},Zg={endpoint:"setAccountInfo",M:["idToken"],A:function(a){Ui(a);if(!a.password)throw new t("weak-password");
},G:O,U:!0},$i={endpoint:"signupNewUser",G:O,U:!0,C:!0},ij={endpoint:"accounts/mfaEnrollment:start",M:["idToken","phoneEnrollmentInfo"],A:function(a){if(!a.phoneEnrollmentInfo)throw new t("internal-error");if(!a.phoneEnrollmentInfo.phoneNumber)throw new t("missing-phone-number");if(!a.phoneEnrollmentInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneSessionInfo||!a.phoneSessionInfo.sessionInfo)throw new t("internal-error");},C:!0,La:!0},kj={endpoint:"accounts/mfaSignIn:start",
M:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],A:function(a){if(!a.phoneSignInInfo||!a.phoneSignInInfo.recaptchaToken)throw new t("missing-app-credential");},G:function(a){if(!a.phoneResponseInfo||!a.phoneResponseInfo.sessionInfo)throw new t("internal-error");},C:!0,La:!0},rj={endpoint:"verifyAssertion",A:nj,Wa:oj,G:pj,U:!0,C:!0},tj={endpoint:"verifyAssertion",A:nj,Wa:oj,G:function(a){if(a.errorMessage&&"USER_NOT_FOUND"==a.errorMessage)throw new t("user-not-found");if(a.errorMessage)throw qj(a.errorMessage);
O(a)},U:!0,C:!0},sj={endpoint:"verifyAssertion",A:function(a){nj(a);if(!a.idToken)throw new t("internal-error");},Wa:oj,G:pj,U:!0},Ej={endpoint:"verifyCustomToken",A:function(a){if(!a.token)throw new t("invalid-custom-token");},G:O,U:!0,C:!0},Xg={endpoint:"verifyPassword",A:function(a){Ti(a);if(!a.password)throw new t("wrong-password");},G:O,U:!0,C:!0},hj={endpoint:"verifyPhoneNumber",A:Zi,G:O,C:!0},eh={endpoint:"verifyPhoneNumber",A:function(a){if(!a.idToken)throw new t("internal-error");Zi(a)},
G:function(a){if(a.temporaryProof)throw a.code="credential-already-in-use",vh(a);O(a)}},fh={Eb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",A:Zi,G:O,C:!0},Fj={endpoint:"accounts/mfaEnrollment:withdraw",M:["idToken","mfaEnrollmentId"],G:function(a){if(!!a[Ag]^!!a.refreshToken)throw new t("internal-error");},C:!0,La:!0};
function N(a,b,c){if(!jf(c,b.M))return E(new t("internal-error"));var d=!!b.La,e=b.Rb||"POST",f;return D(c).then(b.A).then(function(){b.U&&(c.returnSecureToken=!0);b.C&&a.b&&"undefined"===typeof c.tenantId&&(c.tenantId=a.b);return d?Si(a,a.l,b.endpoint,e,c,b.Eb,b.hb||!1):Si(a,a.h,b.endpoint,e,c,b.Eb,b.hb||!1)}).then(function(g){f=g;return b.Wa?b.Wa(c,f):f}).then(b.G).then(function(){if(!b.Y)return f;if(!(b.Y in f))throw new t("internal-error");return f[b.Y]})}
function qj(a){return Ri({error:{errors:[{message:a}],code:400,message:a}})}
function Ri(a,b){var c=(a.error&&a.error.errors&&a.error.errors[0]||{}).reason||"";var d={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"};if(c=d[c]?new t(d[c]):null)return c;c=a.error&&a.error.message||"";d={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",
MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",
EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",
OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",
QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",
INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",
UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"};z(d,b||{});b=(b=c.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<b.length?b[1]:void 0;for(var e in d)if(0===c.indexOf(e))return new t(d[e],b);!b&&a&&(b=Re(a));return new t("internal-error",b)};function Gj(a){this.b=a;this.a=null;this.nb=Hj(this)}
function Hj(a){return Ij().then(function(){return new B(function(b,c){J("gapi.iframes.getContext")().open({where:document.body,url:a.b,messageHandlersFilter:J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},function(d){function e(){clearTimeout(f);b()}a.a=d;a.a.restyle({setHideOnLeave:!1});var f=setTimeout(function(){c(Error("Network Error"))},Jj.get());d.ping(e).then(e,function(){c(Error("Network Error"))})})})})}
function Kj(a,b){return a.nb.then(function(){return new B(function(c){a.a.send(b.type,b,c,J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})})}function Lj(a,b){a.nb.then(function(){a.a.register("authEvent",b,J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))})}var Mj=new ob(pb,"https://apis.google.com/js/api.js?onload=%{onload}"),Nj=new We(3E4,6E4),Jj=new We(5E3,15E3),Oj=null;
function Ij(){return Oj?Oj:Oj=(new B(function(a,b){function c(){Ve();J("gapi.load")("gapi.iframes",{callback:a,ontimeout:function(){Ve();b(Error("Network Error"))},timeout:Nj.get()})}if(J("gapi.iframes.Iframe"))a();else if(J("gapi.load"))c();else{var d="__iframefcb"+Math.floor(1E6*Math.random()).toString();l[d]=function(){J("gapi.load")?c():b(Error("Network Error"))};d=xb(Mj,{onload:d});D(xi(d)).o(function(){b(Error("Network Error"))})}})).o(function(a){Oj=null;throw a;})};function Pj(a,b,c){this.i=a;this.g=b;this.h=c;this.f=null;this.a=$d(this.i,"/__/auth/iframe");H(this.a,"apiKey",this.g);H(this.a,"appName",this.h);this.b=null;this.c=[]}Pj.prototype.toString=function(){this.f?H(this.a,"v",this.f):fe(this.a.a,"v");this.b?H(this.a,"eid",this.b):fe(this.a.a,"eid");this.c.length?H(this.a,"fw",this.c.join(",")):fe(this.a.a,"fw");return this.a.toString()};function Qj(a,b,c,d,e){this.s=a;this.m=b;this.c=c;this.u=d;this.i=this.g=this.l=null;this.a=e;this.h=this.f=null}
Qj.prototype.ub=function(a){this.h=a;return this};
Qj.prototype.toString=function(){var a=$d(this.s,"/__/auth/handler");H(a,"apiKey",this.m);H(a,"appName",this.c);H(a,"authType",this.u);if(this.a.isOAuthProvider){var b=this.a;try{var c=firebase.app(this.c).auth().ja()}catch(h){c=null}b.kb=c;H(a,"providerId",this.a.providerId);b=this.a;c=Se(b.Fb);for(var d in c)c[d]=c[d].toString();d=b.Oc;c=lb(c);for(var e=0;e<d.length;e++){var f=d[e];f in c&&delete c[f]}b.lb&&b.kb&&!c[b.lb]&&(c[b.lb]=b.kb);kb(c)||H(a,"customParameters",Re(c))}"function"===typeof this.a.Nb&&
(b=this.a.Nb(),b.length&&H(a,"scopes",b.join(",")));this.l?H(a,"redirectUrl",this.l):fe(a.a,"redirectUrl");this.g?H(a,"eventId",this.g):fe(a.a,"eventId");this.i?H(a,"v",this.i):fe(a.a,"v");if(this.b)for(var g in this.b)this.b.hasOwnProperty(g)&&!Yd(a,g)&&H(a,g,this.b[g]);this.h?H(a,"tid",this.h):fe(a.a,"tid");this.f?H(a,"eid",this.f):fe(a.a,"eid");g=Rj(this.c);g.length&&H(a,"fw",g.join(","));return a.toString()};function Rj(a){try{return firebase.app(a).auth().Ea()}catch(b){return[]}}
function Sj(a,b,c,d,e){this.u=a;this.f=b;this.b=c;this.c=d||null;this.h=e||null;this.m=this.s=this.w=null;this.g=[];this.l=this.a=null}
function Tj(a){var b=oe();return Xi(a).then(function(c){a:{var d=Zd(b),e=d.f;d=d.b;for(var f=0;f<c.length;f++){var g=c[f];var h=d;var m=e;0==g.indexOf("chrome-extension://")?h=Zd(g).b==h&&"chrome-extension"==m:"http"!=m&&"https"!=m?h=!1:ze.test(g)?h=h==g:(g=g.split(".").join("\\."),h=(new RegExp("^(.+\\."+g+"|"+g+")$","i")).test(h));if(h){c=!0;break a}}c=!1}if(!c)throw new th(oe());})}
function Uj(a){if(a.l)return a.l;a.l=Be().then(function(){if(!a.s){var b=a.c,c=a.h,d=Rj(a.b),e=new Pj(a.u,a.f,a.b);e.f=b;e.b=c;e.c=Xa(d||[]);a.s=e.toString()}a.i=new Gj(a.s);Vj(a)});return a.l}k=Sj.prototype;k.Lb=function(a,b,c){var d=new t("popup-closed-by-user"),e=new t("web-storage-unsupported"),f=this,g=!1;return this.ka().then(function(){Wj(f).then(function(h){h||(a&&ve(a),b(e),g=!0)})}).o(function(){}).then(function(){if(!g)return ye(a)}).then(function(){if(!g)return Bd(c).then(function(){b(d)})})};
k.Ub=function(){var a=I();return!Qe(a)&&!Ue(a)};k.Qb=function(){return!1};
k.Jb=function(a,b,c,d,e,f,g,h){if(!a)return E(new t("popup-blocked"));if(g&&!Qe())return this.ka().o(function(p){ve(a);e(p)}),d(),D();this.a||(this.a=Tj(Xj(this)));var m=this;return this.a.then(function(){var p=m.ka().o(function(v){ve(a);e(v);throw v;});d();return p}).then(function(){nh(c);if(!g){var p=Yj(m.u,m.f,m.b,b,c,null,f,m.c,void 0,m.h,h);pe(p,a)}}).o(function(p){"auth/network-request-failed"==p.code&&(m.a=null);throw p;})};
function Xj(a){a.m||(a.w=a.c?Le(a.c,Rj(a.b)):null,a.m=new Ei(a.f,Aa(a.h),a.w));return a.m}k.Kb=function(a,b,c,d){this.a||(this.a=Tj(Xj(this)));var e=this;return this.a.then(function(){nh(b);var f=Yj(e.u,e.f,e.b,a,b,oe(),c,e.c,void 0,e.h,d);pe(f)}).o(function(f){"auth/network-request-failed"==f.code&&(e.a=null);throw f;})};k.ka=function(){var a=this;return Uj(this).then(function(){return a.i.nb}).o(function(){a.a=null;throw new t("network-request-failed");})};k.Xb=function(){return!0};
function Yj(a,b,c,d,e,f,g,h,m,p,v){a=new Qj(a,b,c,d,e);a.l=f;a.g=g;a.i=h;a.b=lb(m||null);a.f=p;return a.ub(v).toString()}function Vj(a){if(!a.i)throw Error("IfcHandler must be initialized!");Lj(a.i,function(b){var c={};if(b&&b.authEvent){var d=!1;b=ph(b.authEvent);for(c=0;c<a.g.length;c++)d=a.g[c](b)||d;c={};c.status=d?"ACK":"ERROR";return D(c)}c.status="ERROR";return D(c)})}
function Wj(a){var b={type:"webStorageSupport"};return Uj(a).then(function(){return Kj(a.i,b)}).then(function(c){if(c&&c.length&&"undefined"!==typeof c[0].webStorageSupport)return c[0].webStorageSupport;throw Error();})}k.Ca=function(a){this.g.push(a)};k.Qa=function(a){Va(this.g,function(b){return b==a})};function Zj(a){this.a=a||firebase.INTERNAL.reactNative&&firebase.INTERNAL.reactNative.AsyncStorage;if(!this.a)throw new t("internal-error","The React Native compatibility library was not found.");this.type="asyncStorage"}k=Zj.prototype;k.get=function(a){return D(this.a.getItem(a)).then(function(b){return b&&Te(b)})};k.set=function(a,b){return D(this.a.setItem(a,Re(b)))};k.T=function(a){return D(this.a.removeItem(a))};k.ba=function(){};k.ha=function(){};function ak(a){this.b=a;this.a={};this.f=q(this.c,this)}var bk=[];function ck(){var a=Ge()?self:null;w(bk,function(c){c.b==a&&(b=c)});if(!b){var b=new ak(a);bk.push(b)}return b}
ak.prototype.c=function(a){var b=a.data.eventType,c=a.data.eventId,d=this.a[b];if(d&&0<d.length){a.ports[0].postMessage({status:"ack",eventId:c,eventType:b,response:null});var e=[];w(d,function(f){e.push(D().then(function(){return f(a.origin,a.data.data)}))});Fc(e).then(function(f){var g=[];w(f,function(h){g.push({fulfilled:h.Mb,value:h.value,reason:h.reason?h.reason.message:void 0})});w(g,function(h){for(var m in h)"undefined"===typeof h[m]&&delete h[m]});a.ports[0].postMessage({status:"done",eventId:c,
eventType:b,response:g})})}};function dk(a,b,c){kb(a.a)&&a.b.addEventListener("message",a.f);"undefined"===typeof a.a[b]&&(a.a[b]=[]);a.a[b].push(c)};function ek(a){this.a=a}ek.prototype.postMessage=function(a,b){this.a.postMessage(a,b)};function fk(a){this.c=a;this.b=!1;this.a=[]}
function gk(a,b,c,d){var e,f=c||{},g,h,m,p=null;if(a.b)return E(Error("connection_unavailable"));var v=d?800:50,C="undefined"!==typeof MessageChannel?new MessageChannel:null;return(new B(function(A,Q){C?(e=Math.floor(Math.random()*Math.pow(10,20)).toString(),C.port1.start(),h=setTimeout(function(){Q(Error("unsupported_event"))},v),g=function(wa){wa.data.eventId===e&&("ack"===wa.data.status?(clearTimeout(h),m=setTimeout(function(){Q(Error("timeout"))},3E3)):"done"===wa.data.status?(clearTimeout(m),
"undefined"!==typeof wa.data.response?A(wa.data.response):Q(Error("unknown_error"))):(clearTimeout(h),clearTimeout(m),Q(Error("invalid_response"))))},p={messageChannel:C,onMessage:g},a.a.push(p),C.port1.addEventListener("message",g),a.c.postMessage({eventType:b,eventId:e,data:f},[C.port2])):Q(Error("connection_unavailable"))})).then(function(A){hk(a,p);return A}).o(function(A){hk(a,p);throw A;})}
function hk(a,b){if(b){var c=b.messageChannel,d=b.onMessage;c&&(c.port1.removeEventListener("message",d),c.port1.close());Va(a.a,function(e){return e==b})}}fk.prototype.close=function(){for(;0<this.a.length;)hk(this,this.a[0]);this.b=!0};function ik(){if(!jk())throw new t("web-storage-unsupported");this.c={};this.a=[];this.b=0;this.u=l.indexedDB;this.type="indexedDB";this.g=this.l=this.f=this.i=null;this.s=!1;this.h=null;var a=this;Ge()&&self?(this.l=ck(),dk(this.l,"keyChanged",function(b,c){return kk(a).then(function(d){0<d.length&&w(a.a,function(e){e(d)});return{keyProcessed:Ta(d,c.key)}})}),dk(this.l,"ping",function(){return D(["keyChanged"])})):bf().then(function(b){if(a.h=b)a.g=new fk(new ek(b)),gk(a.g,"ping",null,!0).then(function(c){c[0].fulfilled&&
Ta(c[0].value,"keyChanged")&&(a.s=!0)}).o(function(){})})}var lk;function mk(a){return new B(function(b,c){var d=a.u.deleteDatabase("firebaseLocalStorageDb");d.onsuccess=function(){b()};d.onerror=function(e){c(Error(e.target.error))}})}
function nk(a){return new B(function(b,c){var d=a.u.open("firebaseLocalStorageDb",1);d.onerror=function(e){try{e.preventDefault()}catch(f){}c(Error(e.target.error))};d.onupgradeneeded=function(e){e=e.target.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(f){c(f)}};d.onsuccess=function(e){e=e.target.result;e.objectStoreNames.contains("firebaseLocalStorage")?b(e):mk(a).then(function(){return nk(a)}).then(function(f){b(f)}).o(function(f){c(f)})}})}
function ok(a){a.m||(a.m=nk(a));return a.m}function jk(){try{return!!l.indexedDB}catch(a){return!1}}function pk(a){return a.objectStore("firebaseLocalStorage")}function qk(a,b){return a.transaction(["firebaseLocalStorage"],b?"readwrite":"readonly")}function rk(a){return new B(function(b,c){a.onsuccess=function(d){d&&d.target?b(d.target.result):b()};a.onerror=function(d){c(d.target.error)}})}k=ik.prototype;
k.set=function(a,b){var c=!1,d,e=this;return ok(this).then(function(f){d=f;f=pk(qk(d,!0));return rk(f.get(a))}).then(function(f){var g=pk(qk(d,!0));if(f)return f.value=b,rk(g.put(f));e.b++;c=!0;f={};f.fbase_key=a;f.value=b;return rk(g.add(f))}).then(function(){e.c[a]=b;return sk(e,a)}).ma(function(){c&&e.b--})};function sk(a,b){return a.g&&a.h&&af()===a.h?gk(a.g,"keyChanged",{key:b},a.s).then(function(){}).o(function(){}):D()}
k.get=function(a){return ok(this).then(function(b){return rk(pk(qk(b,!1)).get(a))}).then(function(b){return b&&b.value})};k.T=function(a){var b=!1,c=this;return ok(this).then(function(d){b=!0;c.b++;return rk(pk(qk(d,!0))["delete"](a))}).then(function(){delete c.c[a];return sk(c,a)}).ma(function(){b&&c.b--})};
function kk(a){return ok(a).then(function(b){var c=pk(qk(b,!1));return c.getAll?rk(c.getAll()):new B(function(d,e){var f=[],g=c.openCursor();g.onsuccess=function(h){(h=h.target.result)?(f.push(h.value),h["continue"]()):d(f)};g.onerror=function(h){e(h.target.error)}})}).then(function(b){var c={},d=[];if(0==a.b){for(d=0;d<b.length;d++)c[b[d].fbase_key]=b[d].value;d=qe(a.c,c);a.c=c}return d})}k.ba=function(a){0==this.a.length&&tk(this);this.a.push(a)};
k.ha=function(a){Va(this.a,function(b){return b==a});0==this.a.length&&uk(this)};function tk(a){function b(){a.f=setTimeout(function(){a.i=kk(a).then(function(c){0<c.length&&w(a.a,function(d){d(c)})}).then(function(){b()}).o(function(c){"STOP_EVENT"!=c.message&&b()})},800)}uk(a);b()}function uk(a){a.i&&a.i.cancel("STOP_EVENT");a.f&&(clearTimeout(a.f),a.f=null)};function vk(a){var b=this,c=null;this.a=[];this.type="indexedDB";this.c=a;this.b=D().then(function(){if(jk()){var d=Ne(),e="__sak"+d;lk||(lk=new ik);c=lk;return c.set(e,d).then(function(){return c.get(e)}).then(function(f){if(f!==d)throw Error("indexedDB not supported!");return c.T(e)}).then(function(){return c}).o(function(){return b.c})}return b.c}).then(function(d){b.type=d.type;d.ba(function(e){w(b.a,function(f){f(e)})});return d})}k=vk.prototype;k.get=function(a){return this.b.then(function(b){return b.get(a)})};
k.set=function(a,b){return this.b.then(function(c){return c.set(a,b)})};k.T=function(a){return this.b.then(function(b){return b.T(a)})};k.ba=function(a){this.a.push(a)};k.ha=function(a){Va(this.a,function(b){return b==a})};function wk(){this.a={};this.type="inMemory"}k=wk.prototype;k.get=function(a){return D(this.a[a])};k.set=function(a,b){this.a[a]=b;return D()};k.T=function(a){delete this.a[a];return D()};k.ba=function(){};k.ha=function(){};function xk(){if(!yk()){if("Node"==He())throw new t("internal-error","The LocalStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=zk()||firebase.INTERNAL.node.localStorage;this.type="localStorage"}function zk(){try{var a=l.localStorage,b=Ne();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function yk(){var a="Node"==He();a=zk()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.localStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=xk.prototype;k.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Te(c)})};k.set=function(a,b){var c=this;return D().then(function(){var d=Re(b);null===d?c.T(a):c.a.setItem(a,d)})};k.T=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};
k.ba=function(a){l.window&&jd(l.window,"storage",a)};k.ha=function(a){l.window&&td(l.window,"storage",a)};function Ak(){this.type="nullStorage"}k=Ak.prototype;k.get=function(){return D(null)};k.set=function(){return D()};k.T=function(){return D()};k.ba=function(){};k.ha=function(){};function Bk(){if(!Ck()){if("Node"==He())throw new t("internal-error","The SessionStorage compatibility library was not found.");throw new t("web-storage-unsupported");}this.a=Dk()||firebase.INTERNAL.node.sessionStorage;this.type="sessionStorage"}function Dk(){try{var a=l.sessionStorage,b=Ne();a&&(a.setItem(b,"1"),a.removeItem(b));return a}catch(c){return null}}
function Ck(){var a="Node"==He();a=Dk()||a&&firebase.INTERNAL.node&&firebase.INTERNAL.node.sessionStorage;if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return!1}}k=Bk.prototype;k.get=function(a){var b=this;return D().then(function(){var c=b.a.getItem(a);return Te(c)})};k.set=function(a,b){var c=this;return D().then(function(){var d=Re(b);null===d?c.T(a):c.a.setItem(a,d)})};k.T=function(a){var b=this;return D().then(function(){b.a.removeItem(a)})};k.ba=function(){};
k.ha=function(){};function Ek(){var a={};a.Browser=Fk;a.Node=Gk;a.ReactNative=Hk;a.Worker=Ik;this.a=a[He()]}var Jk,Fk={F:xk,$a:Bk},Gk={F:xk,$a:Bk},Hk={F:Zj,$a:Ak},Ik={F:xk,$a:Ak};/*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
var Kk={od:"local",NONE:"none",qd:"session"};function Lk(a){var b=new t("invalid-persistence-type"),c=new t("unsupported-persistence-type");a:{for(d in Kk)if(Kk[d]==a){var d=!0;break a}d=!1}if(!d||"string"!==typeof a)throw b;switch(He()){case "ReactNative":if("session"===a)throw c;break;case "Node":if("none"!==a)throw c;break;case "Worker":if("session"===a||!jk()&&"none"!==a)throw c;break;default:if(!Me()&&"none"!==a)throw c;}}
function Mk(){var a=!Ue(I())&&Fe()?!0:!1,b=Qe(),c=Me();this.m=a;this.h=b;this.l=c;this.a={};Jk||(Jk=new Ek);a=Jk;try{this.g=!ne()&&$e()||!l.indexedDB?new a.a.F:new vk(Ge()?new wk:new a.a.F)}catch(d){this.g=new wk,this.h=!0}try{this.i=new a.a.$a}catch(d){this.i=new wk}this.u=new wk;this.f=q(this.Vb,this);this.b={}}var Nk;function Ok(){Nk||(Nk=new Mk);return Nk}function Pk(a,b){switch(b){case "session":return a.i;case "none":return a.u;default:return a.g}}
function Qk(a,b){return"firebase:"+a.name+(b?":"+b:"")}function Rk(a,b,c){var d=Qk(b,c),e=Pk(a,b.F);return a.get(b,c).then(function(f){var g=null;try{g=Te(l.localStorage.getItem(d))}catch(h){}if(g&&!f)return l.localStorage.removeItem(d),a.set(b,g,c);g&&f&&"localStorage"!=e.type&&l.localStorage.removeItem(d)})}k=Mk.prototype;k.get=function(a,b){return Pk(this,a.F).get(Qk(a,b))};function Sk(a,b,c){c=Qk(b,c);"local"==b.F&&(a.b[c]=null);return Pk(a,b.F).T(c)}
k.set=function(a,b,c){var d=Qk(a,c),e=this,f=Pk(this,a.F);return f.set(d,b).then(function(){return f.get(d)}).then(function(g){"local"==a.F&&(e.b[d]=g)})};k.addListener=function(a,b,c){a=Qk(a,b);this.l&&(this.b[a]=l.localStorage.getItem(a));kb(this.a)&&(Pk(this,"local").ba(this.f),this.h||(ne()||!$e())&&l.indexedDB||!this.l||Tk(this));this.a[a]||(this.a[a]=[]);this.a[a].push(c)};
k.removeListener=function(a,b,c){a=Qk(a,b);this.a[a]&&(Va(this.a[a],function(d){return d==c}),0==this.a[a].length&&delete this.a[a]);kb(this.a)&&(Pk(this,"local").ha(this.f),Uk(this))};function Tk(a){Uk(a);a.c=setInterval(function(){for(var b in a.a){var c=l.localStorage.getItem(b),d=a.b[b];c!=d&&(a.b[b]=c,c=new Yc({type:"storage",key:b,target:window,oldValue:d,newValue:c,a:!0}),a.Vb(c))}},1E3)}function Uk(a){a.c&&(clearInterval(a.c),a.c=null)}
k.Vb=function(a){if(a&&a.f){var b=a.a.key;if(null==b)for(var c in this.a){var d=this.b[c];"undefined"===typeof d&&(d=null);var e=l.localStorage.getItem(c);e!==d&&(this.b[c]=e,this.ib(c))}else if(0==b.indexOf("firebase:")&&this.a[b]){"undefined"!==typeof a.a.a?Pk(this,"local").ha(this.f):Uk(this);if(this.m)if(c=l.localStorage.getItem(b),d=a.a.newValue,d!==c)null!==d?l.localStorage.setItem(b,d):l.localStorage.removeItem(b);else if(this.b[b]===d&&"undefined"===typeof a.a.a)return;var f=this;c=function(){if("undefined"!==
typeof a.a.a||f.b[b]!==l.localStorage.getItem(b))f.b[b]=l.localStorage.getItem(b),f.ib(b)};Tb&&dc&&10==dc&&l.localStorage.getItem(b)!==a.a.newValue&&a.a.newValue!==a.a.oldValue?setTimeout(c,10):c()}}else w(a,q(this.ib,this))};k.ib=function(a){this.a[a]&&w(this.a[a],function(b){b()})};function Vk(a){this.a=a;this.b=Ok()}var Wk={name:"authEvent",F:"local"};function Xk(a){return a.b.get(Wk,a.a).then(function(b){return ph(b)})};function Yk(){this.a=Ok()};function Zk(){this.b=-1};function $k(a,b){this.b=al;this.f=l.Uint8Array?new Uint8Array(this.b):Array(this.b);this.g=this.c=0;this.a=[];this.i=a;this.h=b;this.l=l.Int32Array?new Int32Array(64):Array(64);void 0===bl&&(l.Int32Array?bl=new Int32Array(cl):bl=cl);this.reset()}var bl;r($k,Zk);for(var al=64,dl=al-1,el=[],fl=0;fl<dl;fl++)el[fl]=0;var gl=Wa(128,el);$k.prototype.reset=function(){this.g=this.c=0;this.a=l.Int32Array?new Int32Array(this.h):Xa(this.h)};
function hl(a){for(var b=a.f,c=a.l,d=0,e=0;e<b.length;)c[d++]=b[e]<<24|b[e+1]<<16|b[e+2]<<8|b[e+3],e=4*d;for(b=16;64>b;b++){e=c[b-15]|0;d=c[b-2]|0;var f=(c[b-16]|0)+((e>>>7|e<<25)^(e>>>18|e<<14)^e>>>3)|0,g=(c[b-7]|0)+((d>>>17|d<<15)^(d>>>19|d<<13)^d>>>10)|0;c[b]=f+g|0}d=a.a[0]|0;e=a.a[1]|0;var h=a.a[2]|0,m=a.a[3]|0,p=a.a[4]|0,v=a.a[5]|0,C=a.a[6]|0;f=a.a[7]|0;for(b=0;64>b;b++){var A=((d>>>2|d<<30)^(d>>>13|d<<19)^(d>>>22|d<<10))+(d&e^d&h^e&h)|0;g=p&v^~p&C;f=f+((p>>>6|p<<26)^(p>>>11|p<<21)^(p>>>25|p<<
7))|0;g=g+(bl[b]|0)|0;g=f+(g+(c[b]|0)|0)|0;f=C;C=v;v=p;p=m+g|0;m=h;h=e;e=d;d=g+A|0}a.a[0]=a.a[0]+d|0;a.a[1]=a.a[1]+e|0;a.a[2]=a.a[2]+h|0;a.a[3]=a.a[3]+m|0;a.a[4]=a.a[4]+p|0;a.a[5]=a.a[5]+v|0;a.a[6]=a.a[6]+C|0;a.a[7]=a.a[7]+f|0}
function il(a,b,c){void 0===c&&(c=b.length);var d=0,e=a.c;if("string"===typeof b)for(;d<c;)a.f[e++]=b.charCodeAt(d++),e==a.b&&(hl(a),e=0);else if(ma(b))for(;d<c;){var f=b[d++];if(!("number"==typeof f&&0<=f&&255>=f&&f==(f|0)))throw Error("message must be a byte array");a.f[e++]=f;e==a.b&&(hl(a),e=0)}else throw Error("message must be string or array");a.c=e;a.g+=c}
var cl=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,
4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function jl(){$k.call(this,8,kl)}r(jl,$k);var kl=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];function ll(a,b,c,d,e){this.u=a;this.i=b;this.l=c;this.m=d||null;this.s=e||null;this.h=b+":"+c;this.w=new Yk;this.g=new Vk(this.h);this.f=null;this.b=[];this.a=this.c=null}function ml(a){return new t("invalid-cordova-configuration",a)}k=ll.prototype;
k.ka=function(){return this.Ga?this.Ga:this.Ga=Ce().then(function(){if("function"!==typeof J("universalLinks.subscribe",l))throw ml("cordova-universal-links-plugin-fix is not installed");if("undefined"===typeof J("BuildInfo.packageName",l))throw ml("cordova-plugin-buildinfo is not installed");if("function"!==typeof J("cordova.plugins.browsertab.openUrl",l))throw ml("cordova-plugin-browsertab is not installed");if("function"!==typeof J("cordova.InAppBrowser.open",l))throw ml("cordova-plugin-inappbrowser is not installed");
},function(){throw new t("cordova-not-ready");})};function nl(){for(var a=20,b=[];0<a;)b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),a--;return b.join("")}function ol(a){var b=new jl;il(b,a);a=[];var c=8*b.g;56>b.c?il(b,gl,56-b.c):il(b,gl,b.b-(b.c-56));for(var d=63;56<=d;d--)b.f[d]=c&255,c/=256;hl(b);for(d=c=0;d<b.i;d++)for(var e=24;0<=e;e-=8)a[c++]=b.a[d]>>e&255;return $f(a)}
k.Lb=function(a,b){b(new t("operation-not-supported-in-this-environment"));return D()};k.Jb=function(){return E(new t("operation-not-supported-in-this-environment"))};k.Xb=function(){return!1};k.Ub=function(){return!0};k.Qb=function(){return!0};
k.Kb=function(a,b,c,d){if(this.c)return E(new t("redirect-operation-pending"));var e=this,f=l.document,g=null,h=null,m=null,p=null;return this.c=D().then(function(){nh(b);return pl(e)}).then(function(){return ql(e,a,b,c,d)}).then(function(){return(new B(function(v,C){h=function(){var A=J("cordova.plugins.browsertab.close",l);v();"function"===typeof A&&A();e.a&&"function"===typeof e.a.close&&(e.a.close(),e.a=null);return!1};e.Ca(h);m=function(){g||(g=Bd(2E3).then(function(){C(new t("redirect-cancelled-by-user"))}))};
p=function(){Xe()&&m()};f.addEventListener("resume",m,!1);I().toLowerCase().match(/android/)||f.addEventListener("visibilitychange",p,!1)})).o(function(v){return rl(e).then(function(){throw v;})})}).ma(function(){m&&f.removeEventListener("resume",m,!1);p&&f.removeEventListener("visibilitychange",p,!1);g&&g.cancel();h&&e.Qa(h);e.c=null})};
function ql(a,b,c,d,e){var f=nl(),g=new oh(b,d,null,f,new t("no-auth-event"),null,e),h=J("BuildInfo.packageName",l);if("string"!==typeof h)throw new t("invalid-cordova-configuration");var m=J("BuildInfo.displayName",l),p={};if(I().toLowerCase().match(/iphone|ipad|ipod/))p.ibi=h;else if(I().toLowerCase().match(/android/))p.apn=h;else return E(new t("operation-not-supported-in-this-environment"));m&&(p.appDisplayName=m);f=ol(f);p.sessionId=f;var v=Yj(a.u,a.i,a.l,b,c,null,d,a.m,p,a.s,e);return a.ka().then(function(){var C=
a.h;return a.w.a.set(Wk,g.v(),C)}).then(function(){var C=J("cordova.plugins.browsertab.isAvailable",l);if("function"!==typeof C)throw new t("invalid-cordova-configuration");var A=null;C(function(Q){if(Q){A=J("cordova.plugins.browsertab.openUrl",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");A(v)}else{A=J("cordova.InAppBrowser.open",l);if("function"!==typeof A)throw new t("invalid-cordova-configuration");Q=I();a.a=A(v,Q.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||Q.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?
"_blank":"_system","location=yes")}})})}function sl(a,b){for(var c=0;c<a.b.length;c++)try{a.b[c](b)}catch(d){}}function pl(a){a.f||(a.f=a.ka().then(function(){return new B(function(b){function c(d){b(d);a.Qa(c);return!1}a.Ca(c);tl(a)})}));return a.f}function rl(a){var b=null;return Xk(a.g).then(function(c){b=c;c=a.g;return Sk(c.b,Wk,c.a)}).then(function(){return b})}
function tl(a){function b(g){d=!0;e&&e.cancel();rl(a).then(function(h){var m=c;if(h&&g&&g.url){var p=null;m=ug(g.url);-1!=m.indexOf("/__/auth/callback")&&(p=Zd(m),p=Te(Yd(p,"firebaseError")||null),p=(p="object"===typeof p?ya(p):null)?new oh(h.c,h.b,null,null,p,null,h.S()):new oh(h.c,h.b,m,h.f,null,null,h.S()));m=p||c}sl(a,m)})}var c=new oh("unknown",null,null,null,new t("no-auth-event")),d=!1,e=Bd(500).then(function(){return rl(a).then(function(){d||sl(a,c)})}),f=l.handleOpenURL;l.handleOpenURL=function(g){0==
g.toLowerCase().indexOf(J("BuildInfo.packageName",l).toLowerCase()+"://")&&b({url:g});if("function"===typeof f)try{f(g)}catch(h){console.error(h)}};rh||(rh=new qh);sh(b)}k.Ca=function(a){this.b.push(a);pl(this).o(function(b){"auth/invalid-cordova-configuration"===b.code&&(b=new oh("unknown",null,null,null,new t("no-auth-event")),a(b))})};k.Qa=function(a){Va(this.b,function(b){return b==a})};function ul(a){this.a=a;this.b=Ok()}var vl={name:"pendingRedirect",F:"session"};function wl(a){return a.b.set(vl,"pending",a.a)}function xl(a){return Sk(a.b,vl,a.a)}function yl(a){return a.b.get(vl,a.a).then(function(b){return"pending"==b})};function zl(a,b,c){this.i={};this.w=0;this.D=a;this.u=b;this.m=c;this.h=[];this.f=!1;this.l=q(this.s,this);this.b=new Al;this.B=new Bl;this.g=new ul(this.u+":"+this.m);this.c={};this.c.unknown=this.b;this.c.signInViaRedirect=this.b;this.c.linkViaRedirect=this.b;this.c.reauthViaRedirect=this.b;this.c.signInViaPopup=this.B;this.c.linkViaPopup=this.B;this.c.reauthViaPopup=this.B;this.a=Cl(this.D,this.u,this.m,Ba)}
function Cl(a,b,c,d){var e=firebase.SDK_VERSION||null;return De()?new ll(a,b,c,e,d):new Sj(a,b,c,e,d)}zl.prototype.reset=function(){this.f=!1;this.a.Qa(this.l);this.a=Cl(this.D,this.u,this.m);this.i={}};function Dl(a){a.f||(a.f=!0,a.a.Ca(a.l));var b=a.a;return a.a.ka().o(function(c){a.a==b&&a.reset();throw c;})}function El(a){a.a.Ub()&&Dl(a).o(function(b){var c=new oh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Fl(b)&&a.s(c)});a.a.Qb()||Gl(a.b)}
function Hl(a,b){Ta(a.h,b)||a.h.push(b);a.f||yl(a.g).then(function(c){c?xl(a.g).then(function(){Dl(a).o(function(d){var e=new oh("unknown",null,null,null,new t("operation-not-supported-in-this-environment"));Fl(d)&&a.s(e)})}):El(a)}).o(function(){El(a)})}function Il(a,b){Va(a.h,function(c){return c==b})}
zl.prototype.s=function(a){if(!a)throw new t("invalid-auth-event");6E5<=ua()-this.w&&(this.i={},this.w=0);if(a&&a.getUid()&&this.i.hasOwnProperty(a.getUid()))return!1;for(var b=!1,c=0;c<this.h.length;c++){var d=this.h[c];if(d.Cb(a.c,a.b)){if(b=this.c[a.c])b.h(a,d),a&&(a.f||a.b)&&(this.i[a.getUid()]=!0,this.w=ua());b=!0;break}}Gl(this.b);return b};var Jl=new We(2E3,1E4),Kl=new We(3E4,6E4);zl.prototype.pa=function(){return this.b.pa()};
function Ll(a,b,c,d,e,f,g){return a.a.Jb(b,c,d,function(){a.f||(a.f=!0,a.a.Ca(a.l))},function(){a.reset()},e,f,g)}function Fl(a){return a&&"auth/cordova-not-ready"==a.code?!0:!1}
function Ml(a,b,c,d,e){var f;return wl(a.g).then(function(){return a.a.Kb(b,c,d,e).o(function(g){if(Fl(g))throw new t("operation-not-supported-in-this-environment");f=g;return xl(a.g).then(function(){throw f;})}).then(function(){return a.a.Xb()?new B(function(){}):xl(a.g).then(function(){return a.pa()}).then(function(){}).o(function(){})})})}function Nl(a,b,c,d,e){return a.a.Lb(d,function(f){b.la(c,null,f,e)},Jl.get())}var Ol={};
function Pl(a,b,c){var d=b+":"+c;Ol[d]||(Ol[d]=new zl(a,b,c));return Ol[d]}function Al(){this.b=null;this.f=[];this.c=[];this.a=null;this.i=this.g=!1}Al.prototype.reset=function(){this.b=null;this.a&&(this.a.cancel(),this.a=null)};
Al.prototype.h=function(a,b){if(a){this.reset();this.g=!0;var c=a.c,d=a.b,e=a.a&&"auth/web-storage-unsupported"==a.a.code,f=a.a&&"auth/operation-not-supported-in-this-environment"==a.a.code;this.i=!(!e&&!f);"unknown"!=c||e||f?a.a?(Ql(this,!0,null,a.a),D()):b.Da(c,d)?Rl(this,a,b):E(new t("invalid-auth-event")):(Ql(this,!1,null,null),D())}else E(new t("invalid-auth-event"))};function Gl(a){a.g||(a.g=!0,Ql(a,!1,null,null))}function Sl(a){a.g&&!a.i&&Ql(a,!1,null,null)}
function Rl(a,b,c){c=c.Da(b.c,b.b);var d=b.g,e=b.f,f=b.i,g=b.S(),h=!!b.c.match(/Redirect$/);c(d,e,g,f).then(function(m){Ql(a,h,m,null)}).o(function(m){Ql(a,h,null,m)})}function Tl(a,b){a.b=function(){return E(b)};if(a.c.length)for(var c=0;c<a.c.length;c++)a.c[c](b)}function Ul(a,b){a.b=function(){return D(b)};if(a.f.length)for(var c=0;c<a.f.length;c++)a.f[c](b)}function Ql(a,b,c,d){b?d?Tl(a,d):Ul(a,c):Ul(a,{user:null});a.f=[];a.c=[]}
Al.prototype.pa=function(){var a=this;return new B(function(b,c){a.b?a.b().then(b,c):(a.f.push(b),a.c.push(c),Vl(a))})};function Vl(a){var b=new t("timeout");a.a&&a.a.cancel();a.a=Bd(Kl.get()).then(function(){a.b||(a.g=!0,Ql(a,!0,null,b))})}function Bl(){}Bl.prototype.h=function(a,b){if(a){var c=a.c,d=a.b;a.a?(b.la(a.c,null,a.a,a.b),D()):b.Da(c,d)?Wl(a,b):E(new t("invalid-auth-event"))}else E(new t("invalid-auth-event"))};
function Wl(a,b){var c=a.b,d=a.c;b.Da(d,c)(a.g,a.f,a.S(),a.i).then(function(e){b.la(d,e,null,c)}).o(function(e){b.la(d,null,e,c)})};function Xl(){this.Bb=!1;Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.Bb},set:function(a){this.Bb=a},enumerable:!1})};function Yl(a,b){this.a=b;K(this,"verificationId",a)}Yl.prototype.confirm=function(a){a=lh(this.verificationId,a);return this.a(a)};function Zl(a,b,c,d){return(new hh(a)).cb(b,c).then(function(e){return new Yl(e,d)})};function $l(a){var b=fg(a);if(!(b&&b.exp&&b.auth_time&&b.iat))throw new t("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");L(this,{token:a,expirationTime:Ze(1E3*b.exp),authTime:Ze(1E3*b.auth_time),issuedAtTime:Ze(1E3*b.iat),signInProvider:b.firebase&&b.firebase.sign_in_provider?b.firebase.sign_in_provider:null,signInSecondFactor:b.firebase&&b.firebase.sign_in_second_factor?b.firebase.sign_in_second_factor:null,claims:b})}
;function am(a,b,c){var d=b&&b[bm];if(!d)throw new t("argument-error","Internal assert: Invalid MultiFactorResolver");this.a=a;this.f=lb(b);this.g=c;this.c=new vg(null,d);this.b=[];var e=this;w(b[cm]||[],function(f){(f=qf(f))&&e.b.push(f)});K(this,"auth",this.a);K(this,"session",this.c);K(this,"hints",this.b)}var cm="mfaInfo",bm="mfaPendingCredential";am.prototype.Pc=function(a){var b=this;return a.ob(this.a.b,this.c).then(function(c){var d=lb(b.f);delete d[cm];delete d[bm];z(d,c);return b.g(d)})};function dm(a,b,c,d){t.call(this,"multi-factor-auth-required",d,b);this.b=new am(a,b,c);K(this,"resolver",this.b)}r(dm,t);function em(a,b,c){if(a&&n(a.serverResponse)&&"auth/multi-factor-auth-required"===a.code)try{return new dm(b,a.serverResponse,c,a.message)}catch(d){}return null};function fm(){}fm.prototype.ob=function(a,b,c){return b.type==wg?gm(this,a,b,c):hm(this,a,b)};function gm(a,b,c,d){return c.Fa().then(function(e){e={idToken:e};"undefined"!==typeof d&&(e.displayName=d);z(e,{phoneVerificationInfo:dh(a.a)});return N(b,Aj,e)})}function hm(a,b,c){return c.Fa().then(function(d){d={mfaPendingCredential:d};z(d,{phoneVerificationInfo:dh(a.a)});return N(b,Bj,d)})}function im(a){K(this,"factorId",a.ea);this.a=a}r(im,fm);
function jm(a){im.call(this,a);if(this.a.ea!=hh.PROVIDER_ID)throw new t("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential");}r(jm,im);function km(a,b){F.call(this,a);for(var c in b)this[c]=b[c]}r(km,F);function lm(a,b){this.a=a;this.b=[];this.c=q(this.wc,this);jd(this.a,"userReloaded",this.c);var c=[];b&&b.multiFactor&&b.multiFactor.enrolledFactors&&w(b.multiFactor.enrolledFactors,function(d){var e=null,f={};if(d){d.uid&&(f[nf]=d.uid);d.displayName&&(f[of]=d.displayName);d.enrollmentTime&&(f[pf]=(new Date(d.enrollmentTime)).toISOString());d.phoneNumber&&(f[mf]=d.phoneNumber);try{e=new rf(f)}catch(g){}d=e}else d=null;d&&c.push(d)});mm(this,c)}
function nm(a){var b=[];w(a.mfaInfo||[],function(c){(c=qf(c))&&b.push(c)});return b}k=lm.prototype;k.wc=function(a){mm(this,nm(a.ed))};function mm(a,b){a.b=b;K(a,"enrolledFactors",b)}k.Ob=function(){return this.a.I().then(function(a){return new vg(a,null)})};k.dc=function(a,b){var c=this,d=this.a.a;return this.Ob().then(function(e){return a.ob(d,e,b)}).then(function(e){om(c.a,e);return c.a.reload()})};
k.$c=function(a){var b=this,c="string"===typeof a?a:a.uid,d=this.a.a;return this.a.I().then(function(e){return N(d,Fj,{idToken:e,mfaEnrollmentId:c})}).then(function(e){var f=Oa(b.b,function(g){return g.uid!=c});mm(b,f);om(b.a,e);return b.a.reload().o(function(g){if("auth/user-token-expired"!=g.code)throw g;})})};k.v=function(){return{multiFactor:{enrolledFactors:Pa(this.b,function(a){return a.v()})}}};function pm(a,b,c){this.h=a;this.i=b;this.g=c;this.c=3E4;this.f=96E4;this.b=null;this.a=this.c;if(this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!");}pm.prototype.start=function(){this.a=this.c;qm(this,!0)};function rm(a,b){if(b)return a.a=a.c,a.g();b=a.a;a.a*=2;a.a>a.f&&(a.a=a.f);return b}function qm(a,b){a.stop();a.b=Bd(rm(a,b)).then(function(){return Ye()}).then(function(){return a.h()}).then(function(){qm(a,!0)}).o(function(c){a.i(c)&&qm(a,!1)})}
pm.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)};function sm(a){this.c=a;this.b=this.a=null}sm.prototype.v=function(){return{apiKey:this.c.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:tm(this)}};function tm(a){return a.b&&1E3*a.b.c||0}function um(a,b){var c=b.refreshToken;a.b=gg(b[Ag]||"");a.a=c}function vm(a,b){a.b=b.b;a.a=b.a}
function wm(a,b){return Qi(a.c,b).then(function(c){a.b=gg(c.access_token);a.a=c.refresh_token;return{accessToken:a.b.toString(),refreshToken:a.a}}).o(function(c){"auth/user-token-expired"==c.code&&(a.a=null);throw c;})}sm.prototype.getToken=function(a){a=!!a;return this.b&&!this.a?E(new t("user-token-expired")):a||!this.b||ua()>tm(this)-3E4?this.a?wm(this,{grant_type:"refresh_token",refresh_token:this.a}):D(null):D({accessToken:this.b.toString(),refreshToken:this.a})};function xm(a,b){this.a=a||null;this.b=b||null;L(this,{lastSignInTime:Ze(b||null),creationTime:Ze(a||null)})}function ym(a){return new xm(a.a,a.b)}xm.prototype.v=function(){return{lastLoginAt:this.b,createdAt:this.a}};function zm(a,b,c,d,e,f){L(this,{uid:a,displayName:d||null,photoURL:e||null,email:c||null,phoneNumber:f||null,providerId:b})}
function P(a,b,c){this.N=[];this.l=a.apiKey;this.m=a.appName;this.s=a.authDomain||null;a=firebase.SDK_VERSION?Le(firebase.SDK_VERSION):null;this.a=new Ei(this.l,Aa(Ba),a);this.b=new sm(this.a);Am(this,b[Ag]);um(this.b,b);K(this,"refreshToken",this.b.a);Bm(this,c||{});G.call(this);this.P=!1;this.s&&Oe()&&(this.i=Pl(this.s,this.l,this.m));this.R=[];this.h=null;this.B=Cm(this);this.Z=q(this.Ma,this);var d=this;this.oa=null;this.za=function(e){d.va(e.g)};this.aa=null;this.W=[];this.ya=function(e){Dm(d,
e.c)};this.$=null;this.O=new lm(this,c);K(this,"multiFactor",this.O)}r(P,G);P.prototype.va=function(a){this.oa=a;Ki(this.a,a)};P.prototype.ja=function(){return this.oa};function Em(a,b){a.aa&&td(a.aa,"languageCodeChanged",a.za);(a.aa=b)&&jd(b,"languageCodeChanged",a.za)}function Dm(a,b){a.W=b;Li(a.a,firebase.SDK_VERSION?Le(firebase.SDK_VERSION,a.W):null)}P.prototype.Ea=function(){return Xa(this.W)};function Fm(a,b){a.$&&td(a.$,"frameworkChanged",a.ya);(a.$=b)&&jd(b,"frameworkChanged",a.ya)}
P.prototype.Ma=function(){this.B.b&&(this.B.stop(),this.B.start())};function Gm(a){try{return firebase.app(a.m).auth()}catch(b){throw new t("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+a.m+"'!");}}function Cm(a){return new pm(function(){return a.I(!0)},function(b){return b&&"auth/network-request-failed"==b.code?!0:!1},function(){var b=tm(a.b)-ua()-3E5;return 0<b?b:0})}
function Hm(a){a.D||a.B.b||(a.B.start(),td(a,"tokenChanged",a.Z),jd(a,"tokenChanged",a.Z))}function Im(a){td(a,"tokenChanged",a.Z);a.B.stop()}function Am(a,b){a.xa=b;K(a,"_lat",b)}function Jm(a,b){Va(a.R,function(c){return c==b})}function Km(a){for(var b=[],c=0;c<a.R.length;c++)b.push(a.R[c](a));return Fc(b).then(function(){return a})}function Lm(a){a.i&&!a.P&&(a.P=!0,Hl(a.i,a))}
function Bm(a,b){L(a,{uid:b.uid,displayName:b.displayName||null,photoURL:b.photoURL||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,isAnonymous:b.isAnonymous||!1,tenantId:b.tenantId||null,metadata:new xm(b.createdAt,b.lastLoginAt),providerData:[]});a.a.b=a.tenantId}K(P.prototype,"providerId","firebase");function Mm(){}function Nm(a){return D().then(function(){if(a.D)throw new t("app-deleted");})}
function Om(a){return Pa(a.providerData,function(b){return b.providerId})}function Pm(a,b){b&&(Qm(a,b.providerId),a.providerData.push(b))}function Qm(a,b){Va(a.providerData,function(c){return c.providerId==b})}function Rm(a,b,c){("uid"!=b||c)&&a.hasOwnProperty(b)&&K(a,b,c)}
function Sm(a,b){a!=b&&(L(a,{uid:b.uid,displayName:b.displayName,photoURL:b.photoURL,email:b.email,emailVerified:b.emailVerified,phoneNumber:b.phoneNumber,isAnonymous:b.isAnonymous,tenantId:b.tenantId,providerData:[]}),b.metadata?K(a,"metadata",ym(b.metadata)):K(a,"metadata",new xm),w(b.providerData,function(c){Pm(a,c)}),vm(a.b,b.b),K(a,"refreshToken",a.b.a),mm(a.O,b.O.b))}k=P.prototype;k.reload=function(){var a=this;return R(this,Nm(this).then(function(){return Tm(a).then(function(){return Km(a)}).then(Mm)}))};
function Tm(a){return a.I().then(function(b){var c=a.isAnonymous;return Um(a,b).then(function(){c||Rm(a,"isAnonymous",!1);return b})})}k.mc=function(a){return this.I(a).then(function(b){return new $l(b)})};k.I=function(a){var b=this;return R(this,Nm(this).then(function(){return b.b.getToken(a)}).then(function(c){if(!c)throw new t("internal-error");c.accessToken!=b.xa&&(Am(b,c.accessToken),b.dispatchEvent(new km("tokenChanged")));Rm(b,"refreshToken",c.refreshToken);return c.accessToken}))};
function om(a,b){b[Ag]&&a.xa!=b[Ag]&&(um(a.b,b),a.dispatchEvent(new km("tokenChanged")),Am(a,b[Ag]),Rm(a,"refreshToken",a.b.a))}function Um(a,b){return N(a.a,Cj,{idToken:b}).then(q(a.Ic,a))}
k.Ic=function(a){a=a.users;if(!a||!a.length)throw new t("internal-error");a=a[0];Bm(this,{uid:a.localId,displayName:a.displayName,photoURL:a.photoUrl,email:a.email,emailVerified:!!a.emailVerified,phoneNumber:a.phoneNumber,lastLoginAt:a.lastLoginAt,createdAt:a.createdAt,tenantId:a.tenantId});for(var b=Vm(a),c=0;c<b.length;c++)Pm(this,b[c]);Rm(this,"isAnonymous",!(this.email&&a.passwordHash)&&!(this.providerData&&this.providerData.length));this.dispatchEvent(new km("userReloaded",{ed:a}))};
function Vm(a){return(a=a.providerUserInfo)&&a.length?Pa(a,function(b){return new zm(b.rawId,b.providerId,b.email,b.displayName,b.photoUrl,b.phoneNumber)}):[]}k.Jc=function(a){df("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");return this.pb(a)};
k.pb=function(a){var b=this,c=null;return R(this,a.c(this.a,this.uid).then(function(d){om(b,d);c=Wm(b,d,"reauthenticate");b.h=null;return b.reload()}).then(function(){return c}),!0)};function Xm(a,b){return Tm(a).then(function(){if(Ta(Om(a),b))return Km(a).then(function(){throw new t("provider-already-linked");})})}k.Ac=function(a){df("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");return this.mb(a)};
k.mb=function(a){var b=this,c=null;return R(this,Xm(this,a.providerId).then(function(){return b.I()}).then(function(d){return a.b(b.a,d)}).then(function(d){c=Wm(b,d,"link");return Ym(b,d)}).then(function(){return c}))};k.Bc=function(a,b){var c=this;return R(this,Xm(this,"phone").then(function(){return Zl(Gm(c),a,b,q(c.mb,c))}))};k.Kc=function(a,b){var c=this;return R(this,D().then(function(){return Zl(Gm(c),a,b,q(c.pb,c))}),!0)};
function Wm(a,b,c){var d=mh(b);b=lg(b);return gf({user:a,credential:d,additionalUserInfo:b,operationType:c})}function Ym(a,b){om(a,b);return a.reload().then(function(){return a})}k.xb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.xb(c,a)}).then(function(c){om(b,c);return b.reload()}))};k.cd=function(a){var b=this;return R(this,this.I().then(function(c){return a.b(b.a,c)}).then(function(c){om(b,c);return b.reload()}))};
k.yb=function(a){var b=this;return R(this,this.I().then(function(c){return b.a.yb(c,a)}).then(function(c){om(b,c);return b.reload()}))};
k.zb=function(a){if(void 0===a.displayName&&void 0===a.photoURL)return Nm(this);var b=this;return R(this,this.I().then(function(c){return b.a.zb(c,{displayName:a.displayName,photoUrl:a.photoURL})}).then(function(c){om(b,c);Rm(b,"displayName",c.displayName||null);Rm(b,"photoURL",c.photoUrl||null);w(b.providerData,function(d){"password"===d.providerId&&(K(d,"displayName",b.displayName),K(d,"photoURL",b.photoURL))});return Km(b)}).then(Mm))};
k.ad=function(a){var b=this;return R(this,Tm(this).then(function(c){return Ta(Om(b),a)?lj(b.a,c,[a]).then(function(d){var e={};w(d.providerUserInfo||[],function(f){e[f.providerId]=!0});w(Om(b),function(f){e[f]||Qm(b,f)});e[hh.PROVIDER_ID]||K(b,"phoneNumber",null);return Km(b)}):Km(b).then(function(){throw new t("no-such-provider");})}))};
k.delete=function(){var a=this;return R(this,this.I().then(function(b){return N(a.a,zj,{idToken:b})}).then(function(){a.dispatchEvent(new km("userDeleted"))})).then(function(){for(var b=0;b<a.N.length;b++)a.N[b].cancel("app-deleted");Em(a,null);Fm(a,null);a.N=[];a.D=!0;Im(a);K(a,"refreshToken",null);a.i&&Il(a.i,a)})};
k.Cb=function(a,b){return"linkViaPopup"==a&&(this.g||null)==b&&this.f||"reauthViaPopup"==a&&(this.g||null)==b&&this.f||"linkViaRedirect"==a&&(this.fa||null)==b||"reauthViaRedirect"==a&&(this.fa||null)==b?!0:!1};k.la=function(a,b,c,d){"linkViaPopup"!=a&&"reauthViaPopup"!=a||d!=(this.g||null)||(c&&this.w?this.w(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.w)};
k.Da=function(a,b){return"linkViaPopup"==a&&b==(this.g||null)?q(this.Hb,this):"reauthViaPopup"==a&&b==(this.g||null)?q(this.Ib,this):"linkViaRedirect"==a&&(this.fa||null)==b?q(this.Hb,this):"reauthViaRedirect"==a&&(this.fa||null)==b?q(this.Ib,this):null};k.Cc=function(a){var b=this;return Zm(this,"linkViaPopup",a,function(){return Xm(b,a.providerId).then(function(){return Km(b)})},!1)};k.Lc=function(a){return Zm(this,"reauthViaPopup",a,function(){return D()},!0)};
function Zm(a,b,c,d,e){if(!Oe())return E(new t("operation-not-supported-in-this-environment"));if(a.h&&!e)return E(a.h);var f=kg(c.providerId),g=Ne(a.uid+":::"),h=null;(!Qe()||Fe())&&a.s&&c.isOAuthProvider&&(h=Yj(a.s,a.l,a.m,b,c,null,g,firebase.SDK_VERSION||null,null,null,a.tenantId));var m=we(h,f&&f.ta,f&&f.sa);d=d().then(function(){$m(a);if(!e)return a.I().then(function(){})}).then(function(){return Ll(a.i,m,b,c,g,!!h,a.tenantId)}).then(function(){return new B(function(p,v){a.la(b,null,new t("cancelled-popup-request"),
a.g||null);a.f=p;a.w=v;a.g=g;a.c=Nl(a.i,a,b,m,g)})}).then(function(p){m&&ve(m);return p?gf(p):null}).o(function(p){m&&ve(m);throw p;});return R(a,d,e)}k.Dc=function(a){var b=this;return an(this,"linkViaRedirect",a,function(){return Xm(b,a.providerId)},!1)};k.Mc=function(a){return an(this,"reauthViaRedirect",a,function(){return D()},!0)};
function an(a,b,c,d,e){if(!Oe())return E(new t("operation-not-supported-in-this-environment"));if(a.h&&!e)return E(a.h);var f=null,g=Ne(a.uid+":::");d=d().then(function(){$m(a);if(!e)return a.I().then(function(){})}).then(function(){a.fa=g;return Km(a)}).then(function(h){a.ga&&(h=a.ga,h=h.b.set(bn,a.v(),h.a));return h}).then(function(){return Ml(a.i,b,c,g,a.tenantId)}).o(function(h){f=h;if(a.ga)return cn(a.ga);throw f;}).then(function(){if(f)throw f;});return R(a,d,e)}
function $m(a){if(!a.i||!a.P){if(a.i&&!a.P)throw new t("internal-error");throw new t("auth-domain-config-required");}}k.Hb=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null;c=this.I().then(function(g){return Eg(e.a,{requestUri:a,postBody:d,sessionId:b,idToken:g})}).then(function(g){f=Wm(e,g,"link");return Ym(e,g)}).then(function(){return f});return R(this,c)};
k.Ib=function(a,b,c,d){var e=this;this.c&&(this.c.cancel(),this.c=null);var f=null,g=D().then(function(){return zg(Fg(e.a,{requestUri:a,sessionId:b,postBody:d,tenantId:c}),e.uid)}).then(function(h){f=Wm(e,h,"reauthenticate");om(e,h);e.h=null;return e.reload()}).then(function(){return f});return R(this,g,!0)};
k.qb=function(a){var b=this,c=null;return R(this,this.I().then(function(d){c=d;return"undefined"===typeof a||kb(a)?{}:Zf(new Pf(a))}).then(function(d){return b.a.qb(c,d)}).then(function(d){if(b.email!=d)return b.reload()}).then(function(){}))};k.Ab=function(a,b){var c=this,d=null;return R(this,this.I().then(function(e){d=e;return"undefined"===typeof b||kb(b)?{}:Zf(new Pf(b))}).then(function(e){return c.a.Ab(d,a,e)}).then(function(e){if(c.email!=e)return c.reload()}).then(function(){}))};
function R(a,b,c){var d=dn(a,b,c);a.N.push(d);d.ma(function(){Ua(a.N,d)});return d.o(function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=em(e.v(),Gm(a),q(a.hc,a)));throw f||e;})}k.hc=function(a){var b=null,c=this;a=zg(D(a),c.uid).then(function(d){b=Wm(c,d,"reauthenticate");om(c,d);c.h=null;return c.reload()}).then(function(){return b});return R(this,a,!0)};
function dn(a,b,c){return a.h&&!c?(b.cancel(),E(a.h)):b.o(function(d){!d||"auth/user-disabled"!=d.code&&"auth/user-token-expired"!=d.code||(a.h||a.dispatchEvent(new km("userInvalidated")),a.h=d);throw d;})}k.toJSON=function(){return this.v()};
k.v=function(){var a={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.s,stsTokenManager:this.b.v(),redirectEventId:this.fa||null};this.metadata&&z(a,this.metadata.v());w(this.providerData,function(b){a.providerData.push(hf(b))});z(a,this.O.v());return a};
function en(a){if(!a.apiKey)return null;var b={apiKey:a.apiKey,authDomain:a.authDomain,appName:a.appName},c={};if(a.stsTokenManager&&a.stsTokenManager.accessToken)c[Ag]=a.stsTokenManager.accessToken,c.refreshToken=a.stsTokenManager.refreshToken||null;else return null;var d=new P(b,c,a);a.providerData&&w(a.providerData,function(e){e&&Pm(d,gf(e))});a.redirectEventId&&(d.fa=a.redirectEventId);return d}
function fn(a,b,c,d){var e=new P(a,b);c&&(e.ga=c);d&&Dm(e,d);return e.reload().then(function(){return e})}function gn(a,b,c,d){var e=a.b,f={};f[Ag]=e.b&&e.b.toString();f.refreshToken=e.a;b=new P(b||{apiKey:a.l,authDomain:a.s,appName:a.m},f);c&&(b.ga=c);d&&Dm(b,d);Sm(b,a);return b};function hn(a){this.a=a;this.b=Ok()}var bn={name:"redirectUser",F:"session"};function cn(a){return Sk(a.b,bn,a.a)}function jn(a,b){return a.b.get(bn,a.a).then(function(c){c&&b&&(c.authDomain=b);return en(c||{})})};function kn(a){this.a=a;this.b=Ok();this.c=null;this.f=ln(this);this.b.addListener(mn("local"),this.a,q(this.g,this))}kn.prototype.g=function(){var a=this,b=mn("local");nn(this,function(){return D().then(function(){return a.c&&"local"!=a.c.F?a.b.get(b,a.a):null}).then(function(c){if(c)return on(a,"local").then(function(){a.c=b})})})};function on(a,b){var c=[],d;for(d in Kk)Kk[d]!==b&&c.push(Sk(a.b,mn(Kk[d]),a.a));c.push(Sk(a.b,pn,a.a));return Ec(c)}
function ln(a){var b=mn("local"),c=mn("session"),d=mn("none");return Rk(a.b,b,a.a).then(function(){return a.b.get(c,a.a)}).then(function(e){return e?c:a.b.get(d,a.a).then(function(f){return f?d:a.b.get(b,a.a).then(function(g){return g?b:a.b.get(pn,a.a).then(function(h){return h?mn(h):b})})})}).then(function(e){a.c=e;return on(a,e.F)}).o(function(){a.c||(a.c=b)})}var pn={name:"persistence",F:"session"};function mn(a){return{name:"authUser",F:a}}
kn.prototype.tb=function(a){var b=null,c=this;Lk(a);return nn(this,function(){return a!=c.c.F?c.b.get(c.c,c.a).then(function(d){b=d;return on(c,a)}).then(function(){c.c=mn(a);if(b)return c.b.set(c.c,b,c.a)}):D()})};function qn(a){return nn(a,function(){return a.b.set(pn,a.c.F,a.a)})}function rn(a,b){return nn(a,function(){return a.b.set(a.c,b.v(),a.a)})}function sn(a){return nn(a,function(){return Sk(a.b,a.c,a.a)})}
function tn(a,b){return nn(a,function(){return a.b.get(a.c,a.a).then(function(c){c&&b&&(c.authDomain=b);return en(c||{})})})}function nn(a,b){a.f=a.f.then(b,b);return a.f};function un(a){this.l=!1;K(this,"settings",new Xl);K(this,"app",a);if(S(this).options&&S(this).options.apiKey)a=firebase.SDK_VERSION?Le(firebase.SDK_VERSION):null,this.b=new Ei(S(this).options&&S(this).options.apiKey,Aa(Ba),a);else throw new t("invalid-api-key");this.P=[];this.m=[];this.O=[];this.$b=firebase.INTERNAL.createSubscribe(q(this.xc,this));this.W=void 0;this.ac=firebase.INTERNAL.createSubscribe(q(this.yc,this));vn(this,null);this.i=new kn(S(this).options.apiKey+":"+S(this).name);this.B=
new hn(S(this).options.apiKey+":"+S(this).name);this.Z=T(this,wn(this));this.h=T(this,xn(this));this.aa=!1;this.oa=q(this.Xc,this);this.Ma=q(this.ca,this);this.xa=q(this.jc,this);this.ya=q(this.uc,this);this.za=q(this.vc,this);this.a=null;yn(this);this.INTERNAL={};this.INTERNAL["delete"]=q(this.delete,this);this.INTERNAL.logFramework=q(this.Ec,this);this.s=0;G.call(this);zn(this);this.N=[]}r(un,G);function An(a){F.call(this,"languageCodeChanged");this.g=a}r(An,F);
function Bn(a){F.call(this,"frameworkChanged");this.c=a}r(Bn,F);k=un.prototype;k.tb=function(a){a=this.i.tb(a);return T(this,a)};k.va=function(a){this.$===a||this.l||(this.$=a,Ki(this.b,this.$),this.dispatchEvent(new An(this.ja())))};k.ja=function(){return this.$};k.dd=function(){var a=l.navigator;this.va(a?a.languages&&a.languages[0]||a.language||a.userLanguage||null:null)};k.Ec=function(a){this.N.push(a);Li(this.b,firebase.SDK_VERSION?Le(firebase.SDK_VERSION,this.N):null);this.dispatchEvent(new Bn(this.N))};
k.Ea=function(){return Xa(this.N)};k.ub=function(a){this.R===a||this.l||(this.R=a,this.b.b=this.R)};k.S=function(){return this.R};function zn(a){Object.defineProperty(a,"lc",{get:function(){return this.ja()},set:function(b){this.va(b)},enumerable:!1});a.$=null;Object.defineProperty(a,"ti",{get:function(){return this.S()},set:function(b){this.ub(b)},enumerable:!1});a.R=null}
k.toJSON=function(){return{apiKey:S(this).options.apiKey,authDomain:S(this).options.authDomain,appName:S(this).name,currentUser:U(this)&&U(this).v()}};function Cn(a){return a.Zb||E(new t("auth-domain-config-required"))}function yn(a){var b=S(a).options.authDomain,c=S(a).options.apiKey;b&&Oe()&&(a.Zb=a.Z.then(function(){if(!a.l){a.a=Pl(b,c,S(a).name);Hl(a.a,a);U(a)&&Lm(U(a));if(a.D){Lm(a.D);var d=a.D;d.va(a.ja());Em(d,a);d=a.D;Dm(d,a.N);Fm(d,a);a.D=null}return a.a}}))}
k.Cb=function(a,b){switch(a){case "unknown":case "signInViaRedirect":return!0;case "signInViaPopup":return this.g==b&&!!this.f;default:return!1}};k.la=function(a,b,c,d){"signInViaPopup"==a&&this.g==d&&(c&&this.w?this.w(c):b&&!c&&this.f&&this.f(b),this.c&&(this.c.cancel(),this.c=null),delete this.f,delete this.w)};k.Da=function(a,b){return"signInViaRedirect"==a||"signInViaPopup"==a&&this.g==b&&this.f?q(this.gc,this):null};
k.gc=function(a,b,c,d){var e=this,f={requestUri:a,postBody:d,sessionId:b,tenantId:c};this.c&&(this.c.cancel(),this.c=null);return e.Z.then(function(){return Dn(e,Cg(e.b,f))})};
k.Vc=function(a){if(!Oe())return E(new t("operation-not-supported-in-this-environment"));var b=this,c=kg(a.providerId),d=Ne(),e=null;(!Qe()||Fe())&&S(this).options.authDomain&&a.isOAuthProvider&&(e=Yj(S(this).options.authDomain,S(this).options.apiKey,S(this).name,"signInViaPopup",a,null,d,firebase.SDK_VERSION||null,null,null,this.S()));var f=we(e,c&&c.ta,c&&c.sa);c=Cn(this).then(function(g){return Ll(g,f,"signInViaPopup",a,d,!!e,b.S())}).then(function(){return new B(function(g,h){b.la("signInViaPopup",
null,new t("cancelled-popup-request"),b.g);b.f=g;b.w=h;b.g=d;b.c=Nl(b.a,b,"signInViaPopup",f,d)})}).then(function(g){f&&ve(f);return g?gf(g):null}).o(function(g){f&&ve(f);throw g;});return T(this,c)};k.Wc=function(a){if(!Oe())return E(new t("operation-not-supported-in-this-environment"));var b=this,c=Cn(this).then(function(){return qn(b.i)}).then(function(){return Ml(b.a,"signInViaRedirect",a,void 0,b.S())});return T(this,c)};
function En(a){if(!Oe())return E(new t("operation-not-supported-in-this-environment"));var b=Cn(a).then(function(){return a.a.pa()}).then(function(c){return c?gf(c):null});return T(a,b)}k.pa=function(){var a=this;return En(this).then(function(b){a.a&&Sl(a.a.b);return b}).o(function(b){a.a&&Sl(a.a.b);throw b;})};
k.bd=function(a){if(!a)return E(new t("null-user"));if(this.R!=a.tenantId)return E(new t("tenant-id-mismatch"));var b=this,c={};c.apiKey=S(this).options.apiKey;c.authDomain=S(this).options.authDomain;c.appName=S(this).name;var d=gn(a,c,b.B,b.Ea());return T(this,this.h.then(function(){if(S(b).options.apiKey!=a.l)return d.reload()}).then(function(){if(U(b)&&a.uid==U(b).uid)return Sm(U(b),a),b.ca(a);vn(b,d);Lm(d);return b.ca(d)}).then(function(){Fn(b)}))};
function Gn(a,b){var c={};c.apiKey=S(a).options.apiKey;c.authDomain=S(a).options.authDomain;c.appName=S(a).name;return a.Z.then(function(){return fn(c,b,a.B,a.Ea())}).then(function(d){if(U(a)&&d.uid==U(a).uid)return Sm(U(a),d),a.ca(d);vn(a,d);Lm(d);return a.ca(d)}).then(function(){Fn(a)})}
function vn(a,b){U(a)&&(Jm(U(a),a.Ma),td(U(a),"tokenChanged",a.xa),td(U(a),"userDeleted",a.ya),td(U(a),"userInvalidated",a.za),Im(U(a)));b&&(b.R.push(a.Ma),jd(b,"tokenChanged",a.xa),jd(b,"userDeleted",a.ya),jd(b,"userInvalidated",a.za),0<a.s&&Hm(b));K(a,"currentUser",b);b&&(b.va(a.ja()),Em(b,a),Dm(b,a.N),Fm(b,a))}k.wb=function(){var a=this,b=this.h.then(function(){a.a&&Sl(a.a.b);if(!U(a))return D();vn(a,null);return sn(a.i).then(function(){Fn(a)})});return T(this,b)};
function Hn(a){var b=jn(a.B,S(a).options.authDomain).then(function(c){if(a.D=c)c.ga=a.B;return cn(a.B)});return T(a,b)}function wn(a){var b=S(a).options.authDomain,c=Hn(a).then(function(){return tn(a.i,b)}).then(function(d){return d?(d.ga=a.B,a.D&&(a.D.fa||null)==(d.fa||null)?d:d.reload().then(function(){return rn(a.i,d).then(function(){return d})}).o(function(e){return"auth/network-request-failed"==e.code?d:sn(a.i)})):null}).then(function(d){vn(a,d||null)});return T(a,c)}
function xn(a){return a.Z.then(function(){return En(a)}).o(function(){}).then(function(){if(!a.l)return a.oa()}).o(function(){}).then(function(){if(!a.l){a.aa=!0;var b=a.i;b.b.addListener(mn("local"),b.a,a.oa)}})}
k.Xc=function(){var a=this;return tn(this.i,S(this).options.authDomain).then(function(b){if(!a.l){var c;if(c=U(a)&&b){c=U(a).uid;var d=b.uid;c=void 0===c||null===c||""===c||void 0===d||null===d||""===d?!1:c==d}if(c)return Sm(U(a),b),U(a).I();if(U(a)||b)vn(a,b),b&&(Lm(b),b.ga=a.B),a.a&&Hl(a.a,a),Fn(a)}})};k.ca=function(a){return rn(this.i,a)};k.jc=function(){Fn(this);this.ca(U(this))};k.uc=function(){this.wb()};k.vc=function(){this.wb()};
function Dn(a,b){var c=null,d=null;return T(a,b.then(function(e){c=mh(e);d=lg(e);return Gn(a,e)},function(e){var f=null;e&&"auth/multi-factor-auth-required"===e.code&&(f=em(e.v(),a,q(a.ic,a)));throw f||e;}).then(function(){return gf({user:U(a),credential:c,additionalUserInfo:d,operationType:"signIn"})}))}k.ic=function(a){var b=this;return this.h.then(function(){return Dn(b,D(a))})};k.xc=function(a){var b=this;this.addAuthTokenListener(function(){a.next(U(b))})};
k.yc=function(a){var b=this;In(this,function(){a.next(U(b))})};k.Gc=function(a,b,c){var d=this;this.aa&&Promise.resolve().then(function(){"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d))});return this.$b(a,b,c)};k.Fc=function(a,b,c){var d=this;this.aa&&Promise.resolve().then(function(){d.W=d.getUid();"function"===typeof a?a(U(d)):"function"===typeof a.next&&a.next(U(d))});return this.ac(a,b,c)};
k.kc=function(a){var b=this,c=this.h.then(function(){return U(b)?U(b).I(a).then(function(d){return{accessToken:d}}):null});return T(this,c)};k.Rc=function(a){var b=this;return this.h.then(function(){return Dn(b,N(b.b,Ej,{token:a}))}).then(function(c){var d=c.user;Rm(d,"isAnonymous",!1);b.ca(d);return c})};k.Sc=function(a,b){var c=this;return this.h.then(function(){return Dn(c,N(c.b,Xg,{email:a,password:b}))})};
k.cc=function(a,b){var c=this;return this.h.then(function(){return Dn(c,N(c.b,yj,{email:a,password:b}))})};k.Ya=function(a){var b=this;return this.h.then(function(){return Dn(b,a.ia(b.b))})};k.Qc=function(a){df("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");return this.Ya(a)};
k.vb=function(){var a=this;return this.h.then(function(){var b=U(a);if(b&&b.isAnonymous){var c=gf({providerId:null,isNewUser:!1});return gf({user:b,credential:null,additionalUserInfo:c,operationType:"signIn"})}return Dn(a,a.b.vb()).then(function(d){var e=d.user;Rm(e,"isAnonymous",!0);a.ca(e);return d})})};function S(a){return a.app}function U(a){return a.currentUser}k.getUid=function(){return U(this)&&U(this).uid||null};function Jn(a){return U(a)&&U(a)._lat||null}
function Fn(a){if(a.aa){for(var b=0;b<a.m.length;b++)if(a.m[b])a.m[b](Jn(a));if(a.W!==a.getUid()&&a.O.length)for(a.W=a.getUid(),b=0;b<a.O.length;b++)if(a.O[b])a.O[b](Jn(a))}}k.bc=function(a){this.addAuthTokenListener(a);this.s++;0<this.s&&U(this)&&Hm(U(this))};k.Nc=function(a){var b=this;w(this.m,function(c){c==a&&b.s--});0>this.s&&(this.s=0);0==this.s&&U(this)&&Im(U(this));this.removeAuthTokenListener(a)};
k.addAuthTokenListener=function(a){var b=this;this.m.push(a);T(this,this.h.then(function(){b.l||Ta(b.m,a)&&a(Jn(b))}))};k.removeAuthTokenListener=function(a){Va(this.m,function(b){return b==a})};function In(a,b){a.O.push(b);T(a,a.h.then(function(){!a.l&&Ta(a.O,b)&&a.W!==a.getUid()&&(a.W=a.getUid(),b(Jn(a)))}))}
k.delete=function(){this.l=!0;for(var a=0;a<this.P.length;a++)this.P[a].cancel("app-deleted");this.P=[];this.i&&(a=this.i,a.b.removeListener(mn("local"),a.a,this.oa));this.a&&(Il(this.a,this),Sl(this.a.b));return Promise.resolve()};function T(a,b){a.P.push(b);b.ma(function(){Ua(a.P,b)});return b}k.fc=function(a){return T(this,Vi(this.b,a))};k.zc=function(a){return!!bh(a)};
k.sb=function(a,b){var c=this;return T(this,D().then(function(){var d=new Pf(b);if(!d.c)throw new t("argument-error",Xf+" must be true when sending sign in link to email");return Zf(d)}).then(function(d){return c.b.sb(a,d)}).then(function(){}))};k.fd=function(a){return this.Pa(a).then(function(b){return b.data.email})};k.jb=function(a,b){return T(this,this.b.jb(a,b).then(function(){}))};k.Pa=function(a){return T(this,this.b.Pa(a).then(function(b){return new sf(b)}))};
k.fb=function(a){return T(this,this.b.fb(a).then(function(){}))};k.rb=function(a,b){var c=this;return T(this,D().then(function(){return"undefined"===typeof b||kb(b)?{}:Zf(new Pf(b))}).then(function(d){return c.b.rb(a,d)}).then(function(){}))};k.Uc=function(a,b){return T(this,Zl(this,a,b,q(this.Ya,this)))};
k.Tc=function(a,b){var c=this;return T(this,D().then(function(){var d=b||oe(),e=ah(a,d);d=bh(d);if(!d)throw new t("argument-error","Invalid email link!");if(d.tenantId!==c.S())throw new t("tenant-id-mismatch");return c.Ya(e)}))};function Kn(){}Kn.prototype.render=function(){};Kn.prototype.reset=function(){};Kn.prototype.getResponse=function(){};Kn.prototype.execute=function(){};function Ln(){this.a={};this.b=1E12}var Mn=null;Ln.prototype.render=function(a,b){this.a[this.b.toString()]=new Nn(a,b);return this.b++};Ln.prototype.reset=function(a){var b=On(this,a);a=Pn(a);b&&a&&(b.delete(),delete this.a[a])};Ln.prototype.getResponse=function(a){return(a=On(this,a))?a.getResponse():null};Ln.prototype.execute=function(a){(a=On(this,a))&&a.execute()};function On(a,b){return(b=Pn(b))?a.a[b]||null:null}function Pn(a){return(a="undefined"===typeof a?1E12:a)?a.toString():null}
function Nn(a,b){this.g=!1;this.c=b;this.a=this.b=null;this.h="invisible"!==this.c.size;this.f=fc(a);var c=this;this.i=function(){c.execute()};this.h?this.execute():jd(this.f,"click",this.i)}Nn.prototype.getResponse=function(){Qn(this);return this.b};
Nn.prototype.execute=function(){Qn(this);var a=this;this.a||(this.a=setTimeout(function(){a.b=Je();var b=a.c.callback,c=a.c["expired-callback"];if(b)try{b(a.b)}catch(d){}a.a=setTimeout(function(){a.a=null;a.b=null;if(c)try{c()}catch(d){}a.h&&a.execute()},6E4)},500))};Nn.prototype.delete=function(){Qn(this);this.g=!0;clearTimeout(this.a);this.a=null;td(this.f,"click",this.i)};function Qn(a){if(a.g)throw Error("reCAPTCHA mock was already deleted!");};function Rn(){}K(Rn,"FACTOR_ID","phone");function Sn(){}Sn.prototype.g=function(){Mn||(Mn=new Ln);return D(Mn)};Sn.prototype.c=function(){};var Tn=null;function Un(){this.b=l.grecaptcha?Infinity:0;this.f=null;this.a="__rcb"+Math.floor(1E6*Math.random()).toString()}var Vn=new ob(pb,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Wn=new We(3E4,6E4);
Un.prototype.g=function(a){var b=this;return new B(function(c,d){var e=setTimeout(function(){d(new t("network-request-failed"))},Wn.get());if(!l.grecaptcha||a!==b.f&&!b.b){l[b.a]=function(){if(l.grecaptcha){b.f=a;var g=l.grecaptcha.render;l.grecaptcha.render=function(h,m){h=g(h,m);b.b++;return h};clearTimeout(e);c(l.grecaptcha)}else clearTimeout(e),d(new t("internal-error"));delete l[b.a]};var f=xb(Vn,{onload:b.a,hl:a||""});D(xi(f)).o(function(){clearTimeout(e);d(new t("internal-error","Unable to load external reCAPTCHA dependencies!"))})}else clearTimeout(e),
c(l.grecaptcha)})};Un.prototype.c=function(){this.b--};var Xn=null;function Yn(a,b,c,d,e,f,g){K(this,"type","recaptcha");this.c=this.f=null;this.D=!1;this.u=b;this.g=null;g?(Tn||(Tn=new Sn),g=Tn):(Xn||(Xn=new Un),g=Xn);this.m=g;this.a=c||{theme:"light",type:"image"};this.h=[];if(this.a[Zn])throw new t("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");this.i="invisible"===this.a[$n];if(!l.document)throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
if(!fc(b)||!this.i&&fc(b).hasChildNodes())throw new t("argument-error","reCAPTCHA container is either not found or already contains inner elements!");this.s=new Ei(a,f||null,e||null);this.w=d||function(){return null};var h=this;this.l=[];var m=this.a[ao];this.a[ao]=function(v){bo(h,v);if("function"===typeof m)m(v);else if("string"===typeof m){var C=J(m,l);"function"===typeof C&&C(v)}};var p=this.a[co];this.a[co]=function(){bo(h,null);if("function"===typeof p)p();else if("string"===typeof p){var v=
J(p,l);"function"===typeof v&&v()}}}var ao="callback",co="expired-callback",Zn="sitekey",$n="size";function bo(a,b){for(var c=0;c<a.l.length;c++)try{a.l[c](b)}catch(d){}}function eo(a,b){Va(a.l,function(c){return c==b})}function fo(a,b){a.h.push(b);b.ma(function(){Ua(a.h,b)});return b}k=Yn.prototype;
k.Ga=function(){var a=this;return this.f?this.f:this.f=fo(this,D().then(function(){if(Pe()&&!Ge())return Be();throw new t("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");}).then(function(){return a.m.g(a.w())}).then(function(b){a.g=b;return N(a.s,Dj,{})}).then(function(b){a.a[Zn]=b.recaptchaSiteKey}).o(function(b){a.f=null;throw b;}))};
k.render=function(){go(this);var a=this;return fo(this,this.Ga().then(function(){if(null===a.c){var b=a.u;if(!a.i){var c=fc(b);b=ic("DIV");c.appendChild(b)}a.c=a.g.render(b,a.a)}return a.c}))};k.verify=function(){go(this);var a=this;return fo(this,this.render().then(function(b){return new B(function(c){var d=a.g.getResponse(b);if(d)c(d);else{var e=function(f){f&&(eo(a,e),c(f))};a.l.push(e);a.i&&a.g.execute(a.c)}})}))};k.reset=function(){go(this);null!==this.c&&this.g.reset(this.c)};
function go(a){if(a.D)throw new t("internal-error","RecaptchaVerifier instance has been destroyed.");}k.clear=function(){go(this);this.D=!0;this.m.c();for(var a=0;a<this.h.length;a++)this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");if(!this.i){a=fc(this.u);for(var b;b=a.firstChild;)a.removeChild(b)}};
function ho(a,b,c){var d=!1;try{this.b=c||firebase.app()}catch(g){throw new t("argument-error","No firebase.app.App instance is currently initialized.");}if(this.b.options&&this.b.options.apiKey)c=this.b.options.apiKey;else throw new t("invalid-api-key");var e=this,f=null;try{f=this.b.auth().Ea()}catch(g){}try{d=this.b.auth().settings.appVerificationDisabledForTesting}catch(g){}f=firebase.SDK_VERSION?Le(firebase.SDK_VERSION,f):null;Yn.call(this,c,a,b,function(){try{var g=e.b.auth().ja()}catch(h){g=
null}return g},f,Aa(Ba),d)}r(ho,Yn);function io(a,b,c,d){a:{c=Array.prototype.slice.call(c);var e=0;for(var f=!1,g=0;g<b.length;g++)if(b[g].optional)f=!0;else{if(f)throw new t("internal-error","Argument validator encountered a required argument after an optional argument.");e++}f=b.length;if(c.length<e||f<c.length)d="Expected "+(e==f?1==e?"1 argument":e+" arguments":e+"-"+f+" arguments")+" but got "+c.length+".";else{for(e=0;e<c.length;e++)if(f=b[e].optional&&void 0===c[e],!b[e].K(c[e])&&!f){b=b[e];if(0>e||e>=jo.length)throw new t("internal-error",
"Argument validator received an unsupported number of arguments.");c=jo[e];d=(d?"":c+" argument ")+(b.name?'"'+b.name+'" ':"")+"must be "+b.J+".";break a}d=null}}if(d)throw new t("argument-error",a+" failed: "+d);}var jo="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");function V(a,b){return{name:a||"",J:"a valid string",optional:!!b,K:function(c){return"string"===typeof c}}}
function ko(a,b){return{name:a||"",J:"a boolean",optional:!!b,K:function(c){return"boolean"===typeof c}}}function W(a,b){return{name:a||"",J:"a valid object",optional:!!b,K:n}}function lo(a,b){return{name:a||"",J:"a function",optional:!!b,K:function(c){return"function"===typeof c}}}function mo(a,b){return{name:a||"",J:"null",optional:!!b,K:function(c){return null===c}}}function no(){return{name:"",J:"an HTML element",optional:!1,K:function(a){return!!(a&&a instanceof Element)}}}
function oo(){return{name:"auth",J:"an instance of Firebase Auth",optional:!0,K:function(a){return!!(a&&a instanceof un)}}}function po(){return{name:"app",J:"an instance of Firebase App",optional:!0,K:function(a){return!!(a&&a instanceof firebase.app.App)}}}function qo(a){return{name:a?a+"Credential":"credential",J:a?"a valid "+a+" credential":"a valid credential",optional:!1,K:function(b){if(!b)return!1;var c=!a||b.providerId===a;return!(!b.ia||!c)}}}
function ro(){return{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,K:function(a){return a?!!a.ob:!1}}}function so(){return{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(a){return!!(a&&a.providerId&&a.hasOwnProperty&&a.hasOwnProperty("isOAuthProvider"))}}}function to(a,b){return n(a)&&"string"===typeof a.type&&a.type===b&&"function"===typeof a.Fa}function uo(a){return n(a)&&"string"===typeof a.uid}
function vo(){return{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(a){return!(!a||"string"!==typeof a.type||"function"!==typeof a.verify)}}}function X(a,b,c,d){return{name:c||"",J:a.J+" or "+b.J,optional:!!d,K:function(e){return a.K(e)||b.K(e)}}};function Y(a,b){for(var c in b){var d=b[c].name;a[d]=wo(d,a[c],b[c].j)}}function xo(a,b){for(var c in b){var d=b[c].name;d!==c&&Object.defineProperty(a,d,{get:ta(function(e){return this[e]},c),set:ta(function(e,f,g,h){io(e,[g],[h],!0);this[f]=h},d,c,b[c].gb),enumerable:!0})}}function Z(a,b,c,d){a[b]=wo(b,c,d)}
function wo(a,b,c){function d(){var g=Array.prototype.slice.call(arguments);io(e,c,g);return b.apply(this,g)}if(!c)return b;var e=yo(a),f;for(f in b)d[f]=b[f];for(f in b.prototype)d.prototype[f]=b.prototype[f];return d}function yo(a){a=a.split(".");return a[a.length-1]};Y(un.prototype,{fb:{name:"applyActionCode",j:[V("code")]},Pa:{name:"checkActionCode",j:[V("code")]},jb:{name:"confirmPasswordReset",j:[V("code"),V("newPassword")]},cc:{name:"createUserWithEmailAndPassword",j:[V("email"),V("password")]},fc:{name:"fetchSignInMethodsForEmail",j:[V("email")]},pa:{name:"getRedirectResult",j:[]},zc:{name:"isSignInWithEmailLink",j:[V("emailLink")]},Fc:{name:"onAuthStateChanged",j:[X(W(),lo(),"nextOrObserver"),lo("opt_error",!0),lo("opt_completed",!0)]},Gc:{name:"onIdTokenChanged",
j:[X(W(),lo(),"nextOrObserver"),lo("opt_error",!0),lo("opt_completed",!0)]},rb:{name:"sendPasswordResetEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),mo(null,!0),"opt_actionCodeSettings",!0)]},sb:{name:"sendSignInLinkToEmail",j:[V("email"),W("actionCodeSettings")]},tb:{name:"setPersistence",j:[V("persistence")]},Qc:{name:"signInAndRetrieveDataWithCredential",j:[qo()]},vb:{name:"signInAnonymously",j:[]},Ya:{name:"signInWithCredential",j:[qo()]},Rc:{name:"signInWithCustomToken",j:[V("token")]},
Sc:{name:"signInWithEmailAndPassword",j:[V("email"),V("password")]},Tc:{name:"signInWithEmailLink",j:[V("email"),V("emailLink",!0)]},Uc:{name:"signInWithPhoneNumber",j:[V("phoneNumber"),vo()]},Vc:{name:"signInWithPopup",j:[so()]},Wc:{name:"signInWithRedirect",j:[so()]},bd:{name:"updateCurrentUser",j:[X(function(a){return{name:"user",J:"an instance of Firebase User",optional:!!a,K:function(b){return!!(b&&b instanceof P)}}}(),mo(),"user")]},wb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[V(null,!0)]},
dd:{name:"useDeviceLanguage",j:[]},fd:{name:"verifyPasswordResetCode",j:[V("code")]}});xo(un.prototype,{lc:{name:"languageCode",gb:X(V(),mo(),"languageCode")},ti:{name:"tenantId",gb:X(V(),mo(),"tenantId")}});un.Persistence=Kk;un.Persistence.LOCAL="local";un.Persistence.SESSION="session";un.Persistence.NONE="none";
Y(P.prototype,{"delete":{name:"delete",j:[]},mc:{name:"getIdTokenResult",j:[ko("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[ko("opt_forceRefresh",!0)]},Ac:{name:"linkAndRetrieveDataWithCredential",j:[qo()]},mb:{name:"linkWithCredential",j:[qo()]},Bc:{name:"linkWithPhoneNumber",j:[V("phoneNumber"),vo()]},Cc:{name:"linkWithPopup",j:[so()]},Dc:{name:"linkWithRedirect",j:[so()]},Jc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[qo()]},pb:{name:"reauthenticateWithCredential",j:[qo()]},Kc:{name:"reauthenticateWithPhoneNumber",
j:[V("phoneNumber"),vo()]},Lc:{name:"reauthenticateWithPopup",j:[so()]},Mc:{name:"reauthenticateWithRedirect",j:[so()]},reload:{name:"reload",j:[]},qb:{name:"sendEmailVerification",j:[X(W("opt_actionCodeSettings",!0),mo(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[V(null,!0)]},ad:{name:"unlink",j:[V("provider")]},xb:{name:"updateEmail",j:[V("email")]},yb:{name:"updatePassword",j:[V("password")]},cd:{name:"updatePhoneNumber",j:[qo("phone")]},zb:{name:"updateProfile",j:[W("profile")]},
Ab:{name:"verifyBeforeUpdateEmail",j:[V("email"),X(W("opt_actionCodeSettings",!0),mo(null,!0),"opt_actionCodeSettings",!0)]}});Y(Ln.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(Kn.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}});Y(B.prototype,{ma:{name:"finally"},o:{name:"catch"},then:{name:"then"}});
xo(Xl.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",gb:ko("appVerificationDisabledForTesting")}});Y(Yl.prototype,{confirm:{name:"confirm",j:[V("verificationCode")]}});Z(yg,"fromJSON",function(a){a="string"===typeof a?JSON.parse(a):a;for(var b,c=[Jg,$g,gh,Gg],d=0;d<c.length;d++)if(b=c[d](a))return b;return null},[X(V(),W(),"json")]);Z(Vg,"credential",function(a,b){return new Ug(a,b)},[V("email"),V("password")]);Y(Ug.prototype,{v:{name:"toJSON",j:[V(null,!0)]}});
Y(Mg.prototype,{Aa:{name:"addScope",j:[V("scope")]},Ia:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Mg,"credential",Ng,[X(V(),W(),"token")]);Z(Vg,"credentialWithLink",ah,[V("email"),V("emailLink")]);Y(Og.prototype,{Aa:{name:"addScope",j:[V("scope")]},Ia:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Og,"credential",Pg,[X(V(),W(),"token")]);Y(Qg.prototype,{Aa:{name:"addScope",j:[V("scope")]},Ia:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});
Z(Qg,"credential",Rg,[X(V(),X(W(),mo()),"idToken"),X(V(),mo(),"accessToken",!0)]);Y(Sg.prototype,{Ia:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Z(Sg,"credential",Tg,[X(V(),W(),"token"),V("secret",!0)]);Y(M.prototype,{Aa:{name:"addScope",j:[V("scope")]},credential:{name:"credential",j:[X(V(),X(W(),mo()),"optionsOrIdToken"),X(V(),mo(),"accessToken",!0)]},Ia:{name:"setCustomParameters",j:[W("customOAuthParameters")]}});Y(Hg.prototype,{v:{name:"toJSON",j:[V(null,!0)]}});
Y(Bg.prototype,{v:{name:"toJSON",j:[V(null,!0)]}});Z(hh,"credential",lh,[V("verificationId"),V("verificationCode")]);
Y(hh.prototype,{cb:{name:"verifyPhoneNumber",j:[X(V(),function(a,b){return{name:a||"phoneInfoOptions",J:"valid phone info options",optional:!!b,K:function(c){return c?c.session&&c.phoneNumber?to(c.session,wg)&&"string"===typeof c.phoneNumber:c.session&&c.multiFactorHint?to(c.session,xg)&&uo(c.multiFactorHint):c.session&&c.multiFactorUid?to(c.session,xg)&&"string"===typeof c.multiFactorUid:c.phoneNumber?"string"===typeof c.phoneNumber:!1:!1}}}(),"phoneInfoOptions"),vo()]}});
Y(ch.prototype,{v:{name:"toJSON",j:[V(null,!0)]}});Y(t.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(uh.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(th.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(dm.prototype,{toJSON:{name:"toJSON",j:[V(null,!0)]}});Y(am.prototype,{Pc:{name:"resolveSignIn",j:[ro()]}});
Y(lm.prototype,{Ob:{name:"getSession",j:[]},dc:{name:"enroll",j:[ro(),V("displayName",!0)]},$c:{name:"unenroll",j:[X({name:"multiFactorInfo",J:"a valid multiFactorInfo",optional:!1,K:uo},V(),"multiFactorInfoIdentifier")]}});Y(ho.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}});Z(Gf,"parseLink",Of,[V("link")]);Z(Rn,"assertion",function(a){return new jm(a)},[qo("phone")]);
(function(){if("undefined"!==typeof firebase&&firebase.INTERNAL&&firebase.INTERNAL.registerComponent){var a={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:xf,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:zf,VERIFY_AND_CHANGE_EMAIL:yf,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:un,AuthCredential:yg,Error:t};Z(a,"EmailAuthProvider",Vg,[]);Z(a,"FacebookAuthProvider",Mg,[]);Z(a,"GithubAuthProvider",Og,[]);Z(a,"GoogleAuthProvider",Qg,[]);Z(a,"TwitterAuthProvider",Sg,[]);
Z(a,"OAuthProvider",M,[V("providerId")]);Z(a,"SAMLAuthProvider",Lg,[V("providerId")]);Z(a,"PhoneAuthProvider",hh,[oo()]);Z(a,"RecaptchaVerifier",ho,[X(V(),no(),"recaptchaContainer"),W("recaptchaParameters",!0),po()]);Z(a,"ActionCodeURL",Gf,[]);Z(a,"PhoneMultiFactorGenerator",Rn,[]);firebase.INTERNAL.registerComponent({name:"auth",instanceFactory:function(b){b=b.getProvider("app").getImmediate();return new un(b)},multipleInstances:!1,serviceProps:a,instantiationMode:"LAZY",type:"PUBLIC"});firebase.INTERNAL.registerComponent({name:"auth-internal",
instanceFactory:function(b){b=b.getProvider("auth").getImmediate();return{getUid:q(b.getUid,b),getToken:q(b.kc,b),addAuthTokenListener:q(b.bc,b),removeAuthTokenListener:q(b.Nc,b)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"});firebase.registerVersion("@firebase/auth","0.14.9");firebase.INTERNAL.extendNamespace({User:P})}else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");})();}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});



},{"@firebase/app":"node_modules/@firebase/app/dist/index.cjs.js"}],"node_modules/firebase/auth/dist/index.esm.js":[function(require,module,exports) {
"use strict";

require("@firebase/auth");
},{"@firebase/auth":"node_modules/@firebase/auth/dist/auth.js"}],"node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createWebChannelTransport = exports.XhrIo = exports.WebChannel = exports.EventType = exports.ErrorCode = exports.default = void 0;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
var g,
    goog = goog || {},
    k = commonjsGlobal || self;

function aa() {}

function ba(a) {
  var b = typeof a;
  return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
}

function ca(a) {
  var b = ba(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}

function n(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}

function da(a) {
  return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa);
}

var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
    fa = 0;

function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}

function ja(a, b, c) {
  if (!a) throw Error();

  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(e, d);
      return a.apply(b, e);
    };
  }

  return function () {
    return a.apply(b, arguments);
  };
}

function p(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja;
  return p.apply(null, arguments);
}

function ka(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function () {
    var d = c.slice();
    d.push.apply(d, arguments);
    return a.apply(this, d);
  };
}

var q = Date.now;

function r(a, b) {
  function c() {}

  c.prototype = b.prototype;
  a.S = b.prototype;
  a.prototype = new c();
  a.prototype.constructor = a;
}

function u() {
  this.j = this.j;
  this.i = this.i;
}

var la = 0;
u.prototype.j = !1;

u.prototype.ja = function () {
  if (!this.j && (this.j = !0, this.G(), 0 != la)) {
    var a = da(this);
  }
};

u.prototype.G = function () {
  if (this.i) for (; this.i.length;) this.i.shift()();
};

var na = Array.prototype.indexOf ? function (a, b) {
  return Array.prototype.indexOf.call(a, b, void 0);
} : function (a, b) {
  if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);

  for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;

  return -1;
},
    oa = Array.prototype.forEach ? function (a, b, c) {
  Array.prototype.forEach.call(a, b, c);
} : function (a, b, c) {
  for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
};

function pa(a) {
  a: {
    var b = qa;

    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
      b = e;
      break a;
    }

    b = -1;
  }

  return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}

function ra(a) {
  return Array.prototype.concat.apply([], arguments);
}

function sa(a) {
  var b = a.length;

  if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

    return c;
  }

  return [];
}

function ta(a) {
  return /^[\s\xa0]*$/.test(a);
}

var ua = String.prototype.trim ? function (a) {
  return a.trim();
} : function (a) {
  return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};

function v(a, b) {
  return -1 != a.indexOf(b);
}

function xa(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

var w;

a: {
  var ya = k.navigator;

  if (ya) {
    var za = ya.userAgent;

    if (za) {
      w = za;
      break a;
    }
  }

  w = "";
}

function Aa(a, b, c) {
  for (var d in a) b.call(c, a[d], d, a);
}

function Ba(a) {
  var b = {};

  for (var c in a) b[c] = a[c];

  return b;
}

var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function Da(a, b) {
  var c, d;

  for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];

    for (c in d) a[c] = d[c];

    for (var f = 0; f < Ca.length; f++) c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
  }
}

function Ea(a) {
  Ea[" "](a);
  return a;
}

Ea[" "] = aa;

function Fa(a, b) {
  var c = Ga;
  return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
}

var Ha = v(w, "Opera"),
    x = v(w, "Trident") || v(w, "MSIE"),
    Ia = v(w, "Edge"),
    Ja = Ia || x,
    Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"),
    La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");

function Ma() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}

var Na;

a: {
  var Oa = "",
      Pa = function () {
    var a = w;
    if (Ka) return /rv:([^\);]+)(\)|;)/.exec(a);
    if (Ia) return /Edge\/([\d\.]+)/.exec(a);
    if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (La) return /WebKit\/(\S+)/.exec(a);
    if (Ha) return /(?:Version)[ \/]?(\S+)/.exec(a);
  }();

  Pa && (Oa = Pa ? Pa[1] : "");

  if (x) {
    var Qa = Ma();

    if (null != Qa && Qa > parseFloat(Oa)) {
      Na = String(Qa);
      break a;
    }
  }

  Na = Oa;
}

var Ga = {};

function Ra(a) {
  return Fa(a, function () {
    {
      var b = 0;
      var e = ua(String(Na)).split("."),
          f = ua(String(a)).split("."),
          h = Math.max(e.length, f.length);

      for (var m = 0; 0 == b && m < h; m++) {
        var c = e[m] || "",
            d = f[m] || "";

        do {
          c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
          d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
          if (0 == c[0].length && 0 == d[0].length) break;
          b = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
          c = c[3];
          d = d[3];
        } while (0 == b);
      }
    }
    return 0 <= b;
  });
}

var Sa;

if (k.document && x) {
  var Ta = Ma();
  Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
} else Sa = void 0;

var Ua = Sa;

var Va = !x || 9 <= Number(Ua),
    Wa = x && !Ra("9"),
    Xa = function () {
  if (!k.addEventListener || !Object.defineProperty) return !1;
  var a = !1,
      b = Object.defineProperty({}, "passive", {
    get: function () {
      a = !0;
    }
  });

  try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
  } catch (c) {}

  return a;
}();

function y(a, b) {
  this.type = a;
  this.a = this.target = b;
  this.defaultPrevented = !1;
}

y.prototype.b = function () {
  this.defaultPrevented = !0;
};

function A(a, b) {
  y.call(this, a ? a.type : "");
  this.relatedTarget = this.a = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.pointerId = 0;
  this.pointerType = "";
  this.c = null;

  if (a) {
    var c = this.type = a.type,
        d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.a = b;

    if (b = a.relatedTarget) {
      if (Ka) {
        a: {
          try {
            Ea(b.nodeName);
            var e = !0;
            break a;
          } catch (f) {}

          e = !1;
        }

        e || (b = null);
      }
    } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

    this.relatedTarget = b;
    d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
    this.button = a.button;
    this.key = a.key || "";
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.pointerId = a.pointerId || 0;
    this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
    this.c = a;
    a.defaultPrevented && this.b();
  }
}

r(A, y);
var Ya = {
  2: "touch",
  3: "pen",
  4: "mouse"
};

A.prototype.b = function () {
  A.S.b.call(this);
  var a = this.c;
  if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Wa) try {
    if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
  } catch (b) {}
};

var C = "closure_listenable_" + (1E6 * Math.random() | 0),
    Za = 0;

function $a(a, b, c, d, e) {
  this.listener = a;
  this.proxy = null;
  this.src = b;
  this.type = c;
  this.capture = !!d;
  this.ca = e;
  this.key = ++Za;
  this.Y = this.Z = !1;
}

function ab(a) {
  a.Y = !0;
  a.listener = null;
  a.proxy = null;
  a.src = null;
  a.ca = null;
}

function bb(a) {
  this.src = a;
  this.a = {};
  this.b = 0;
}

bb.prototype.add = function (a, b, c, d, e) {
  var f = a.toString();
  a = this.a[f];
  a || (a = this.a[f] = [], this.b++);
  var h = cb(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new $a(b, this.src, f, !!d, e), b.Z = c, a.push(b));
  return b;
};

function db(a, b) {
  var c = b.type;

  if (c in a.a) {
    var d = a.a[c],
        e = na(d, b),
        f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }
}

function cb(a, b, c, d) {
  for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d) return e;
  }

  return -1;
}

var eb = "closure_lm_" + (1E6 * Math.random() | 0),
    fb = {};

function hb(a, b, c, d, e) {
  if (d && d.once) return ib(a, b, c, d, e);

  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) hb(a, b[f], c, d, e);

    return null;
  }

  c = jb(c);
  return a && a[C] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !1, d, e);
}

function kb(a, b, c, d, e, f) {
  if (!b) throw Error("Invalid event type");
  var h = n(e) ? !!e.capture : !!e;
  if (h && !Va) return null;
  var m = lb(a);
  m || (a[eb] = m = new bb(a));
  c = m.add(b, c, d, h, f);
  if (c.proxy) return c;
  d = mb();
  c.proxy = d;
  d.src = a;
  d.listener = c;
  if (a.addEventListener) Xa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(nb(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
  return c;
}

function mb() {
  var a = ob,
      b = Va ? function (c) {
    return a.call(b.src, b.listener, c);
  } : function (c) {
    c = a.call(b.src, b.listener, c);
    if (!c) return c;
  };
  return b;
}

function ib(a, b, c, d, e) {
  if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++) ib(a, b[f], c, d, e);

    return null;
  }

  c = jb(c);
  return a && a[C] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !0, d, e);
}

function pb(a, b, c, d, e) {
  if (Array.isArray(b)) for (var f = 0; f < b.length; f++) pb(a, b[f], c, d, e);else (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = lb(a)) && (b = a.a[b.toString()], a = -1, b && (a = cb(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c));
}

function rb(a) {
  if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[C]) db(b.c, a);else {
      var c = a.type,
          d = a.proxy;
      b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
      (c = lb(b)) ? (db(c, a), 0 == c.b && (c.src = null, b[eb] = null)) : ab(a);
    }
  }
}

function nb(a) {
  return a in fb ? fb[a] : fb[a] = "on" + a;
}

function sb(a, b) {
  var c = a.listener,
      d = a.ca || a.src;
  a.Z && rb(a);
  return c.call(d, b);
}

function ob(a, b) {
  if (a.Y) return !0;

  if (!Va) {
    if (!b) a: {
      b = ["window", "event"];

      for (var c = k, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
        b = null;
        break a;
      }

      b = c;
    }
    b = new A(b, this);
    return sb(a, b);
  }

  return sb(a, new A(b, this));
}

function lb(a) {
  a = a[eb];
  return a instanceof bb ? a : null;
}

var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function jb(a) {
  if ("function" == ba(a)) return a;
  a[tb] || (a[tb] = function (b) {
    return a.handleEvent(b);
  });
  return a[tb];
}

function D() {
  u.call(this);
  this.c = new bb(this);
  this.J = this;
  this.C = null;
}

r(D, u);
D.prototype[C] = !0;
g = D.prototype;

g.addEventListener = function (a, b, c, d) {
  hb(this, a, b, c, d);
};

g.removeEventListener = function (a, b, c, d) {
  pb(this, a, b, c, d);
};

g.dispatchEvent = function (a) {
  var b,
      c = this.C;
  if (c) for (b = []; c; c = c.C) b.push(c);
  c = this.J;
  var d = a.type || a;
  if ("string" === typeof a) a = new y(a, c);else if (a instanceof y) a.target = a.target || c;else {
    var e = a;
    a = new y(d, c);
    Da(a, e);
  }
  e = !0;
  if (b) for (var f = b.length - 1; 0 <= f; f--) {
    var h = a.a = b[f];
    e = ub(h, d, !0, a) && e;
  }
  h = a.a = c;
  e = ub(h, d, !0, a) && e;
  e = ub(h, d, !1, a) && e;
  if (b) for (f = 0; f < b.length; f++) h = a.a = b[f], e = ub(h, d, !1, a) && e;
  return e;
};

g.G = function () {
  D.S.G.call(this);

  if (this.c) {
    var a = this.c,
        c;

    for (c in a.a) {
      for (var d = a.a[c], e = 0; e < d.length; e++) ab(d[e]);

      delete a.a[c];
      a.b--;
    }
  }

  this.C = null;
};

g.va = function (a, b, c, d) {
  return this.c.add(String(a), b, !1, c, d);
};

g.wa = function (a, b, c, d) {
  return this.c.add(String(a), b, !0, c, d);
};

function ub(a, b, c, d) {
  b = a.c.a[String(b)];
  if (!b) return !0;
  b = b.concat();

  for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];

    if (h && !h.Y && h.capture == c) {
      var m = h.listener,
          l = h.ca || h.src;
      h.Z && db(a.c, h);
      e = !1 !== m.call(l, d) && e;
    }
  }

  return e && !d.defaultPrevented;
}

var vb = k.JSON.stringify;

function wb() {
  this.b = this.a = null;
}

var yb = new (
/** @class */
function () {
  function class_1(a, b, c) {
    this.f = c;
    this.c = a;
    this.g = b;
    this.b = 0;
    this.a = null;
  }

  class_1.prototype.get = function () {
    var a;
    0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c();
    return a;
  };

  return class_1;
}())(function () {
  return new xb();
}, function (a) {
  a.reset();
}, 100);

wb.prototype.add = function (a, b) {
  var c = yb.get();
  c.set(a, b);
  this.b ? this.b.next = c : this.a = c;
  this.b = c;
};

function zb() {
  var a = Ab,
      b = null;
  a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
  return b;
}

function xb() {
  this.next = this.b = this.a = null;
}

xb.prototype.set = function (a, b) {
  this.a = a;
  this.b = b;
  this.next = null;
};

xb.prototype.reset = function () {
  this.next = this.b = this.a = null;
};

function Bb(a) {
  k.setTimeout(function () {
    throw a;
  }, 0);
}

function Cb(a, b) {
  Db || Eb();
  Fb || (Db(), Fb = !0);
  Ab.add(a, b);
}

var Db;

function Eb() {
  var a = k.Promise.resolve(void 0);

  Db = function () {
    a.then(Gb);
  };
}

var Fb = !1,
    Ab = new wb();

function Gb() {
  for (var a; a = zb();) {
    try {
      a.a.call(a.b);
    } catch (c) {
      Bb(c);
    }

    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
  }

  Fb = !1;
}

function Hb(a, b) {
  D.call(this);
  this.b = a || 1;
  this.a = b || k;
  this.f = p(this.Ya, this);
  this.g = q();
}

r(Hb, D);
g = Hb.prototype;
g.aa = !1;
g.M = null;

g.Ya = function () {
  if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
  }
};

g.start = function () {
  this.aa = !0;
  this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q());
};

function Ib(a) {
  a.aa = !1;
  a.M && (a.a.clearTimeout(a.M), a.M = null);
}

g.G = function () {
  Hb.S.G.call(this);
  Ib(this);
  delete this.a;
};

function Jb(a, b, c) {
  if ("function" == ba(a)) c && (a = p(a, c));else if (a && "function" == typeof a.handleEvent) a = p(a.handleEvent, a);else throw Error("Invalid listener argument");
  return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0);
}

function Kb(a) {
  a.a = Jb(function () {
    a.a = null;
    a.c && (a.c = !1, Kb(a));
  }, a.h);
  var b = a.b;
  a.b = null;
  a.g.apply(null, b);
}

var Lb =
/** @class */
function (_super) {
  __extends(Lb, _super);

  function Lb(a, b, c) {
    var _this = _super.call(this) || this;

    _this.g = null != c ? a.bind(c) : a;
    _this.h = b;
    _this.b = null;
    _this.c = !1;
    _this.a = null;
    return _this;
  }

  Lb.prototype.f = function (a) {
    this.b = arguments;
    this.a ? this.c = !0 : Kb(this);
  };

  Lb.prototype.G = function () {
    _super.prototype.G.call(this);

    this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null);
  };

  return Lb;
}(u);

function E(a) {
  u.call(this);
  this.b = a;
  this.a = {};
}

r(E, u);
var Mb = [];

function Nb(a, b, c, d) {
  Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb);

  for (var e = 0; e < c.length; e++) {
    var f = hb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f) break;
    a.a[f.key] = f;
  }
}

function Ob(a) {
  Aa(a.a, function (b, c) {
    this.a.hasOwnProperty(c) && rb(b);
  }, a);
  a.a = {};
}

E.prototype.G = function () {
  E.S.G.call(this);
  Ob(this);
};

E.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};

function Pb() {
  this.a = !0;
}

function Qb(a, b, c, d, e, f) {
  a.info(function () {
    if (a.a) {
      if (f) {
        var h = "";

        for (var m = f.split("&"), l = 0; l < m.length; l++) {
          var t = m[l].split("=");

          if (1 < t.length) {
            var B = t[0];
            t = t[1];
            var z = B.split("_");
            h = 2 <= z.length && "type" == z[1] ? h + (B + "=" + t + "&") : h + (B + "=redacted&");
          }
        }
      } else h = null;
    } else h = f;
    return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h;
  });
}

function Rb(a, b, c, d, e, f, h) {
  a.info(function () {
    return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h;
  });
}

function F(a, b, c, d) {
  a.info(function () {
    return "XMLHTTP TEXT (" + b + "): " + Sb(a, c) + (d ? " " + d : "");
  });
}

function Tb(a, b) {
  a.info(function () {
    return "TIMEOUT: " + b;
  });
}

Pb.prototype.info = function () {};

function Sb(a, b) {
  if (!a.a) return b;
  if (!b) return null;

  try {
    var c = JSON.parse(b);
    if (c) for (a = 0; a < c.length; a++) if (Array.isArray(c[a])) {
      var d = c[a];

      if (!(2 > d.length)) {
        var e = d[1];

        if (Array.isArray(e) && !(1 > e.length)) {
          var f = e[0];
          if ("noop" != f && "stop" != f && "close" != f) for (var h = 1; h < e.length; h++) e[h] = "";
        }
      }
    }
    return vb(c);
  } catch (m) {
    return b;
  }
}

var Ub = null;

function Vb() {
  return Ub = Ub || new D();
}

function Wb(a) {
  y.call(this, "serverreachability", a);
}

r(Wb, y);

function G(a) {
  var b = Vb();
  b.dispatchEvent(new Wb(b, a));
}

function Xb(a) {
  y.call(this, "statevent", a);
}

r(Xb, y);

function H(a) {
  var b = Vb();
  b.dispatchEvent(new Xb(b, a));
}

function Yb(a) {
  y.call(this, "timingevent", a);
}

r(Yb, y);

function I(a, b) {
  if ("function" != ba(a)) throw Error("Fn must not be null and must be a function");
  return k.setTimeout(function () {
    a();
  }, b);
}

var Zb = {
  NO_ERROR: 0,
  Za: 1,
  gb: 2,
  fb: 3,
  bb: 4,
  eb: 5,
  hb: 6,
  Da: 7,
  TIMEOUT: 8,
  kb: 9
};
var $b = {
  ab: "complete",
  ob: "success",
  Ea: "error",
  Da: "abort",
  mb: "ready",
  nb: "readystatechange",
  TIMEOUT: "timeout",
  ib: "incrementaldata",
  lb: "progress",
  cb: "downloadprogress",
  pb: "uploadprogress"
};

function ac() {}

ac.prototype.a = null;

function bc(a) {
  var b;
  (b = a.a) || (b = a.a = {});
  return b;
}

function cc() {}

var J = {
  OPEN: "a",
  $a: "b",
  Ea: "c",
  jb: "d"
};

function dc() {
  y.call(this, "d");
}

r(dc, y);

function ec() {
  y.call(this, "c");
}

r(ec, y);
var fc;

function gc() {}

r(gc, ac);
fc = new gc();

function K(a, b, c, d) {
  this.g = a;
  this.c = b;
  this.f = c;
  this.T = d || 1;
  this.J = new E(this);
  this.P = hc;
  a = Ja ? 125 : void 0;
  this.R = new Hb(a);
  this.B = null;
  this.b = !1;
  this.j = this.l = this.i = this.H = this.u = this.U = this.o = null;
  this.s = [];
  this.a = null;
  this.D = 0;
  this.h = this.m = null;
  this.N = -1;
  this.A = !1;
  this.O = 0;
  this.F = null;
  this.W = this.C = this.V = this.I = !1;
}

var hc = 45E3,
    ic = {},
    jc = {};
g = K.prototype;

g.setTimeout = function (a) {
  this.P = a;
};

function kc(a, b, c) {
  a.H = 1;
  a.i = lc(L(b));
  a.j = c;
  a.I = !0;
  mc(a, null);
}

function mc(a, b) {
  a.u = q();
  M(a);
  a.l = L(a.i);
  var c = a.l,
      d = a.T;
  Array.isArray(d) || (d = [String(d)]);
  nc(c.b, "t", d);
  a.D = 0;
  a.a = oc(a.g, a.g.C ? b : null);
  0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O));
  Nb(a.J, a.a, "readystatechange", a.Wa);
  b = a.B ? Ba(a.B) : {};
  a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b));
  G(1);
  Qb(a.c, a.m, a.l, a.f, a.T, a.j);
}

g.Wa = function (a) {
  a = a.target;
  var b = this.F;
  b && 3 == N(a) ? b.f() : this.Ca(a);
};

g.Ca = function (a) {
  try {
    if (a == this.a) a: {
      var b = N(this.a),
          c = this.a.ua(),
          d = this.a.X();

      if (!(3 > b || 3 == b && !Ja && !this.a.$())) {
        this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
        pc(this);
        var e = this.a.X();
        this.N = e;
        var f = this.a.$();
        this.b = 200 == e;
        Rb(this.c, this.m, this.l, this.f, this.T, b, e);

        if (this.b) {
          if (this.V && !this.C) {
            b: {
              if (this.a) {
                var h,
                    m = this.a;

                if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                  var l = h;
                  break b;
                }
              }

              l = null;
            }

            if (l) F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"), this.C = !0, qc(this, l);else {
              this.b = !1;
              this.h = 3;
              H(12);
              O(this);
              rc(this);
              break a;
            }
          }

          this.I ? (tc(this, b, f), Ja && this.b && 3 == b && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
          4 == b && O(this);
          this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, M(this)));
        } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
      }
    }
  } catch (t) {} finally {}
};

function tc(a, b, c) {
  for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);

    if (e == jc) {
      4 == b && (a.h = 4, H(14), d = !1);
      F(a.c, a.f, null, "[Incomplete Response]");
      break;
    } else if (e == ic) {
      a.h = 4;
      H(15);
      F(a.c, a.f, c, "[Invalid Chunk]");
      d = !1;
      break;
    } else F(a.c, a.f, e, null), qc(a, e);
  }

  4 == b && 0 == c.length && (a.h = 1, H(16), d = !1);
  a.b = a.b && d;
  d ? 0 < c.length && !a.W && (a.W = !0, b = a.g, b.a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b), b.F = !0)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a));
}

g.Va = function () {
  if (this.a) {
    var a = N(this.a),
        b = this.a.$();
    this.D < b.length && (pc(this), tc(this, a, b), this.b && 4 != a && M(this));
  }
};

function vc(a, b) {
  var c = a.D,
      d = b.indexOf("\n", c);
  if (-1 == d) return jc;
  c = Number(b.substring(c, d));
  if (isNaN(c)) return ic;
  d += 1;
  if (d + c > b.length) return jc;
  b = b.substr(d, c);
  a.D = d + c;
  return b;
}

g.cancel = function () {
  this.A = !0;
  O(this);
};

function M(a) {
  a.U = q() + a.P;
  yc(a, a.P);
}

function yc(a, b) {
  if (null != a.o) throw Error("WatchDog timer not null");
  a.o = I(p(a.Ua, a), b);
}

function pc(a) {
  a.o && (k.clearTimeout(a.o), a.o = null);
}

g.Ua = function () {
  this.o = null;
  var a = q();
  0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a);
};

function rc(a) {
  0 == a.g.v || a.A || uc(a.g, a);
}

function O(a) {
  pc(a);
  var b = a.F;
  b && "function" == typeof b.ja && b.ja();
  a.F = null;
  Ib(a.R);
  Ob(a.J);
  a.a && (b = a.a, a.a = null, b.abort(), b.ja());
}

function qc(a, b) {
  try {
    var c = a.g;
    if (0 != c.v && (c.a == a || zc(c.b, a))) if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
      try {
        var d = c.ka.a.parse(b);
      } catch (sc) {
        d = null;
      }

      if (Array.isArray(d) && 3 == d.length) {
        var e = d;
        if (0 == e[0]) a: {
          if (!c.j) {
            if (c.a) if (c.a.u + 3E3 < a.u) Ac(c), Bc(c);else break a;
            Cc(c);
            H(18);
          }
        } else c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6E3));

        if (1 >= Dc(c.b) && c.ea) {
          try {
            c.ea();
          } catch (sc) {}

          c.ea = void 0;
        }
      } else P(c, 11);
    } else if ((a.C || c.a == a) && Ac(c), !ta(b)) for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++) if (e = b[d], c.P = e[0], e = e[1], 2 == c.v) {
      if ("c" == e[0]) {
        c.J = e[1];
        c.ga = e[2];
        var f = e[3];
        null != f && (c.ha = f, c.c.info("VER=" + c.ha));
        var h = e[4];
        null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
        var m = e[5];

        if (null != m && "number" === typeof m && 0 < m) {
          var l = 1.5 * m;
          c.D = l;
          c.c.info("backChannelRequestTimeoutMs_=" + l);
        }

        l = c;
        var t = a.a;

        if (t) {
          var B = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;

          if (B) {
            var z = l.b;
            !z.a && (v(B, "spdy") || v(B, "quic") || v(B, "h2")) && (z.f = z.g, z.a = new Set(), z.b && (Ec(z, z.b), z.b = null));
          }

          if (l.A) {
            var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null;
            qb && (l.na = qb, Q(l.B, l.A, qb));
          }
        }

        c.v = 3;
        c.f && c.f.ta();
        c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
        l = c;
        var va = a;
        l.la = Fc(l, l.C ? l.ga : null, l.fa);

        if (va.C) {
          Gc(l.b, va);
          var wa = va,
              wc = l.D;
          wc && wa.setTimeout(wc);
          wa.o && (pc(wa), M(wa));
          l.a = va;
        } else Hc(l);

        0 < c.g.length && Ic(c);
      } else "stop" != e[0] && "close" != e[0] || P(c, 7);
    } else 3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
    G(4);
  } catch (sc) {}
}

function Kc(a) {
  if (a.K && "function" == typeof a.K) return a.K();
  if ("string" === typeof a) return a.split("");

  if (ca(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);

    return b;
  }

  b = [];
  c = 0;

  for (d in a) b[c++] = a[d];

  return a = b;
}

function Lc(a, b) {
  if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (ca(a) || "string" === typeof a) oa(a, b, void 0);else {
    if (a.L && "function" == typeof a.L) var c = a.L();else if (a.K && "function" == typeof a.K) c = void 0;else if (ca(a) || "string" === typeof a) {
      c = [];

      for (var d = a.length, e = 0; e < d; e++) c.push(e);
    } else for (e in c = [], d = 0, a) c[d++] = e;
    d = Kc(a);
    e = d.length;

    for (var f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
  }
}

function R(a, b) {
  this.b = {};
  this.a = [];
  this.c = 0;
  var c = arguments.length;

  if (1 < c) {
    if (c % 2) throw Error("Uneven number of arguments");

    for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
  } else if (a) if (a instanceof R) for (c = a.L(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
}

g = R.prototype;

g.K = function () {
  Mc(this);

  for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);

  return a;
};

g.L = function () {
  Mc(this);
  return this.a.concat();
};

function Mc(a) {
  if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
      var d = a.a[b];
      S(a.b, d) && (a.a[c++] = d);
      b++;
    }

    a.a.length = c;
  }

  if (a.c != a.a.length) {
    var e = {};

    for (c = b = 0; b < a.a.length;) d = a.a[b], S(e, d) || (a.a[c++] = d, e[d] = 1), b++;

    a.a.length = c;
  }
}

g.get = function (a, b) {
  return S(this.b, a) ? this.b[a] : b;
};

g.set = function (a, b) {
  S(this.b, a) || (this.c++, this.a.push(a));
  this.b[a] = b;
};

g.forEach = function (a, b) {
  for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d],
        f = this.get(e);
    a.call(b, f, e, this);
  }
};

function S(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}

var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

function Oc(a, b) {
  if (a) {
    a = a.split("&");

    for (var c = 0; c < a.length; c++) {
      var d = a[c].indexOf("="),
          e = null;

      if (0 <= d) {
        var f = a[c].substring(0, d);
        e = a[c].substring(d + 1);
      } else f = a[c];

      b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
  }
}

function T(a, b) {
  this.c = this.j = this.f = "";
  this.h = null;
  this.i = this.g = "";
  this.a = !1;

  if (a instanceof T) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new U();
    c.c = b.c;
    b.a && (c.a = new R(b.a), c.b = b.b);
    Sc(this, c);
    this.i = a.i;
  } else a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Tc(c[5] || "", !0), Sc(this, c[6] || "", !0), this.i = Tc(c[7] || "")) : (this.a = !!b, this.b = new U(null, this.a));
}

T.prototype.toString = function () {
  var a = [],
      b = this.f;
  b && a.push(Uc(b, Vc, !0), ":");
  var c = this.c;
  if (c || "file" == b) a.push("//"), (b = this.j) && a.push(Uc(b, Vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c));
  if (c = this.g) this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, !0));
  (c = this.b.toString()) && a.push("?", c);
  (c = this.i) && a.push("#", Uc(c, Yc));
  return a.join("");
};

function L(a) {
  return new T(a);
}

function Pc(a, b, c) {
  a.f = c ? Tc(b, !0) : b;
  a.f && (a.f = a.f.replace(/:$/, ""));
}

function Qc(a, b, c) {
  a.c = c ? Tc(b, !0) : b;
}

function Rc(a, b) {
  if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
    a.h = b;
  } else a.h = null;
}

function Sc(a, b, c) {
  b instanceof U ? (a.b = b, Zc(a.b, a.a)) : (c || (b = Uc(b, $c)), a.b = new U(b, a.a));
}

function Q(a, b, c) {
  a.b.set(b, c);
}

function lc(a) {
  Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36));
  return a;
}

function ad(a) {
  return a instanceof T ? L(a) : new T(a, void 0);
}

function bd(a, b, c, d) {
  var e = new T(null, void 0);
  a && Pc(e, a);
  b && Qc(e, b);
  c && Rc(e, c);
  d && (e.g = d);
  return e;
}

function Tc(a, b) {
  return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
}

function Uc(a, b, c) {
  return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
}

function cd(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}

var Vc = /[#\/\?@]/g,
    Xc = /[#\?:]/g,
    Wc = /[#\?]/g,
    $c = /[#\?@]/g,
    Yc = /#/g;

function U(a, b) {
  this.b = this.a = null;
  this.c = a || null;
  this.f = !!b;
}

function V(a) {
  a.a || (a.a = new R(), a.b = 0, a.c && Oc(a.c, function (b, c) {
    a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
  }));
}

g = U.prototype;

g.add = function (a, b) {
  V(this);
  this.c = null;
  a = W(this, a);
  var c = this.a.get(a);
  c || this.a.set(a, c = []);
  c.push(b);
  this.b += 1;
  return this;
};

function dd(a, b) {
  V(a);
  b = W(a, b);
  S(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, S(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a)));
}

function ed(a, b) {
  V(a);
  b = W(a, b);
  return S(a.a.b, b);
}

g.forEach = function (a, b) {
  V(this);
  this.a.forEach(function (c, d) {
    oa(c, function (e) {
      a.call(b, e, d, this);
    }, this);
  }, this);
};

g.L = function () {
  V(this);

  for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

  return c;
};

g.K = function (a) {
  V(this);
  var b = [];
  if ("string" === typeof a) ed(this, a) && (b = ra(b, this.a.get(W(this, a))));else {
    a = this.a.K();

    for (var c = 0; c < a.length; c++) b = ra(b, a[c]);
  }
  return b;
};

g.set = function (a, b) {
  V(this);
  this.c = null;
  a = W(this, a);
  ed(this, a) && (this.b -= this.a.get(a).length);
  this.a.set(a, [b]);
  this.b += 1;
  return this;
};

g.get = function (a, b) {
  if (!a) return b;
  a = this.K(a);
  return 0 < a.length ? String(a[0]) : b;
};

function nc(a, b, c) {
  dd(a, b);
  0 < c.length && (a.c = null, a.a.set(W(a, b), sa(c)), a.b += c.length);
}

g.toString = function () {
  if (this.c) return this.c;
  if (!this.a) return "";

  for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c],
        e = encodeURIComponent(String(d));
    d = this.K(d);

    for (var f = 0; f < d.length; f++) {
      var h = e;
      "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
      a.push(h);
    }
  }

  return this.c = a.join("&");
};

function W(a, b) {
  b = String(b);
  a.f && (b = b.toLowerCase());
  return b;
}

function Zc(a, b) {
  b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) {
    var e = d.toLowerCase();
    d != e && (dd(this, d), nc(this, e, c));
  }, a));
  a.f = b;
}

function fd(a, b) {
  this.b = a;
  this.a = b;
}

function gd(a) {
  this.g = a || hd;
  k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb);
  this.f = a ? this.g : 1;
  this.a = null;
  1 < this.f && (this.a = new Set());
  this.b = null;
  this.c = [];
}

var hd = 10;

function id(a) {
  return a.b ? !0 : a.a ? a.a.size >= a.f : !1;
}

function Dc(a) {
  return a.b ? 1 : a.a ? a.a.size : 0;
}

function zc(a, b) {
  return a.b ? a.b == b : a.a ? a.a.has(b) : !1;
}

function Ec(a, b) {
  a.a ? a.a.add(b) : a.b = b;
}

function Gc(a, b) {
  a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b);
}

gd.prototype.cancel = function () {
  var e_1, _a;

  this.c = jd(this);
  if (this.b) this.b.cancel(), this.b = null;else if (this.a && 0 !== this.a.size) {
    try {
      for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var a = _c.value;
        a.cancel();
      }
    } catch (e_1_1) {
      e_1 = {
        error: e_1_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_1) throw e_1.error;
      }
    }

    this.a.clear();
  }
};

function jd(a) {
  var e_2, _a;

  if (null != a.b) return a.c.concat(a.b.s);

  if (null != a.a && 0 !== a.a.size) {
    var b = a.c;

    try {
      for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
        var c = _c.value;
        b = b.concat(c.s);
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }

    return b;
  }

  return sa(a.c);
}

function kd() {}

kd.prototype.stringify = function (a) {
  return k.JSON.stringify(a, void 0);
};

kd.prototype.parse = function (a) {
  return k.JSON.parse(a, void 0);
};

function ld() {
  this.a = new kd();
}

function md(a, b, c) {
  var d = c || "";

  try {
    Lc(a, function (e, f) {
      var h = e;
      n(e) && (h = vb(e));
      b.push(d + f + "=" + encodeURIComponent(h));
    });
  } catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
  }
}

function nd(a, b) {
  var c = new Pb();

  if (k.Image) {
    var d = new Image();
    d.onload = ka(od, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(od, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(od, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () {
      if (d.ontimeout) d.ontimeout();
    }, 1E4);
    d.src = a;
  } else b(!1);
}

function od(a, b, c, d, e) {
  try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
  } catch (f) {}
}

var pd = k.JSON.parse;

function X(a) {
  D.call(this);
  this.headers = new R();
  this.H = a || null;
  this.b = !1;
  this.s = this.a = null;
  this.B = "";
  this.h = 0;
  this.f = "";
  this.g = this.A = this.l = this.u = !1;
  this.o = 0;
  this.m = null;
  this.I = qd;
  this.D = this.F = !1;
}

r(X, D);
var qd = "",
    rd = /^https?$/i,
    sd = ["POST", "PUT"];
g = X.prototype;

g.ba = function (a, b, c, d) {
  if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
  b = b ? b.toUpperCase() : "GET";
  this.B = a;
  this.f = "";
  this.h = 0;
  this.u = !1;
  this.b = !0;
  this.a = new XMLHttpRequest();
  this.s = this.H ? bc(this.H) : bc(fc);
  this.a.onreadystatechange = p(this.za, this);

  try {
    this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
  } catch (f) {
    td(this, f);
    return;
  }

  a = c || "";
  var e = new R(this.headers);
  d && Lc(d, function (f, h) {
    e.set(h, f);
  });
  d = pa(e.L());
  c = k.FormData && a instanceof k.FormData;
  !(0 <= na(sd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  e.forEach(function (f, h) {
    this.a.setRequestHeader(h, f);
  }, this);
  this.I && (this.a.responseType = this.I);
  "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);

  try {
    ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
  } catch (f) {
    td(this, f);
  }
};

function vd(a) {
  return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout;
}

function qa(a) {
  return "content-type" == a.toLowerCase();
}

g.xa = function () {
  "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8));
};

function td(a, b) {
  a.b = !1;
  a.a && (a.g = !0, a.a.abort(), a.g = !1);
  a.f = b;
  a.h = 5;
  wd(a);
  xd(a);
}

function wd(a) {
  a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
}

g.abort = function (a) {
  this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this));
};

g.G = function () {
  this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), xd(this, !0));
  X.S.G.call(this);
};

g.za = function () {
  this.j || (this.A || this.l || this.g ? yd(this) : this.Ta());
};

g.Ta = function () {
  yd(this);
};

function yd(a) {
  if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X())) if (a.l && 4 == N(a)) Jb(a.za, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
    a.b = !1;

    try {
      var b = a.X();

      a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          var c = !0;
          break a;

        default:
          c = !1;
      }

      var d;

      if (!(d = c)) {
        var e;

        if (e = 0 === b) {
          var f = String(a.B).match(Nc)[1] || null;

          if (!f && k.self && k.self.location) {
            var h = k.self.location.protocol;
            f = h.substr(0, h.length - 1);
          }

          e = !rd.test(f ? f.toLowerCase() : "");
        }

        d = e;
      }

      if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
        a.h = 6;

        try {
          var m = 2 < N(a) ? a.a.statusText : "";
        } catch (l) {
          m = "";
        }

        a.f = m + " [" + a.X() + "]";
        wd(a);
      }
    } finally {
      xd(a);
    }
  }
}

function xd(a, b) {
  if (a.a) {
    ud(a);
    var c = a.a,
        d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");

    try {
      c.onreadystatechange = d;
    } catch (e) {}
  }
}

function ud(a) {
  a.a && a.D && (a.a.ontimeout = null);
  a.m && (k.clearTimeout(a.m), a.m = null);
}

function N(a) {
  return a.a ? a.a.readyState : 0;
}

g.X = function () {
  try {
    return 2 < N(this) ? this.a.status : -1;
  } catch (a) {
    return -1;
  }
};

g.$ = function () {
  try {
    return this.a ? this.a.responseText : "";
  } catch (a) {
    return "";
  }
};

g.Na = function (a) {
  if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return pd(b);
  }
};

g.ua = function () {
  return this.h;
};

g.Qa = function () {
  return "string" === typeof this.f ? this.f : String(this.f);
};

function zd(a) {
  var b = "";
  Aa(a, function (c, d) {
    b += d;
    b += ":";
    b += c;
    b += "\r\n";
  });
  return b;
}

function Ad(a, b, c) {
  a: {
    for (d in c) {
      var d = !1;
      break a;
    }

    d = !0;
  }

  d || (c = zd(c), "string" === typeof a ? null != c && encodeURIComponent(String(c)) : Q(a, b, c));
}

function Bd(a, b, c) {
  return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b;
}

function Cd(a) {
  this.pa = 0;
  this.g = [];
  this.c = new Pb();
  this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
  this.La = this.R = 0;
  this.Ia = Bd("failFast", !1, a);
  this.H = this.m = this.j = this.h = this.f = null;
  this.T = !0;
  this.I = this.oa = this.P = -1;
  this.U = this.o = this.u = 0;
  this.Fa = Bd("baseRetryDelayMs", 5E3, a);
  this.Ma = Bd("retryDelaySeedMs", 1E4, a);
  this.Ja = Bd("forwardChannelMaxRetries", 2, a);
  this.ma = Bd("forwardChannelRequestTimeoutMs", 2E4, a);
  this.Ka = a && a.g || void 0;
  this.D = void 0;
  this.C = a && a.supportsCrossDomainXhr || !1;
  this.J = "";
  this.b = new gd(a && a.concurrentRequestLimit);
  this.ka = new ld();
  this.da = a && a.fastHandshake || !1;
  this.Ga = a && a.b || !1;
  a && a.f && (this.c.a = !1);
  a && a.forceLongPolling && (this.T = !1);
  this.V = !this.da && this.T && a && a.c || !1;
  this.ea = void 0;
  this.N = 0;
  this.F = !1;
  this.s = null;
}

g = Cd.prototype;
g.ha = 8;
g.v = 1;

function Jc(a) {
  Dd(a);

  if (3 == a.v) {
    var b = a.R++,
        c = L(a.B);
    Q(c, "SID", a.J);
    Q(c, "RID", b);
    Q(c, "TYPE", "terminate");
    Ed(a, c);
    b = new K(a, a.c, b, void 0);
    b.H = 2;
    b.i = lc(L(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && (new Image().src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    M(b);
  }

  Fd(a);
}

function Bc(a) {
  a.a && (xc(a), a.a.cancel(), a.a = null);
}

function Dd(a) {
  Bc(a);
  a.j && (k.clearTimeout(a.j), a.j = null);
  Ac(a);
  a.b.cancel();
  a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null);
}

function Gd(a, b) {
  a.g.push(new fd(a.La++, b));
  3 == a.v && Ic(a);
}

function Ic(a) {
  id(a.b) || a.h || (a.h = !0, Cb(a.Ba, a), a.u = 0);
}

function Hd(a, b) {
  if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0)) return !1;
  if (a.h) return a.g = b.s.concat(a.g), !0;
  if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja)) return !1;
  a.h = I(p(a.Ba, a, b), Id(a, a.u));
  a.u++;
  return !0;
}

g.Ba = function (a) {
  if (this.h) if (this.h = null, 1 == this.v) {
    if (!a) {
      this.R = Math.floor(1E5 * Math.random());
      a = this.R++;
      var b = new K(this, this.c, a, void 0),
          c = this.l;
      this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
      null === this.i && (b.B = c);
      var d;
      if (this.da) a: {
        for (var e = d = 0; e < this.g.length; e++) {
          b: {
            var f = this.g[e];

            if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
              f = f.length;
              break b;
            }

            f = void 0;
          }

          if (void 0 === f) break;
          d += f;

          if (4096 < d) {
            d = e;
            break a;
          }

          if (4096 === d || e === this.g.length - 1) {
            d = e + 1;
            break a;
          }
        }

        d = 1E3;
      } else d = 1E3;
      d = Jd(this, b, d);
      e = L(this.B);
      Q(e, "RID", a);
      Q(e, "CVER", 22);
      this.A && Q(e, "X-HTTP-Session-Id", this.A);
      Ed(this, e);
      this.i && c && Ad(e, this.i, c);
      Ec(this.b, b);
      this.Ga && Q(e, "TYPE", "init");
      this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b.V = !0, kc(b, e, null)) : kc(b, e, d);
      this.v = 2;
    }
  } else 3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
};

function Kd(a, b) {
  var c;
  b ? c = b.f : c = a.R++;
  var d = L(a.B);
  Q(d, "SID", a.J);
  Q(d, "RID", c);
  Q(d, "AID", a.P);
  Ed(a, d);
  a.i && a.l && Ad(d, a.i, a.l);
  c = new K(a, a.c, c, a.u + 1);
  null === a.i && (c.B = a.l);
  b && (a.g = b.s.concat(a.g));
  b = Jd(a, c, 1E3);
  c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random()));
  Ec(a.b, c);
  kc(c, d, b);
}

function Ed(a, b) {
  a.f && Lc({}, function (c, d) {
    Q(b, d, c);
  });
}

function Jd(a, b, c) {
  c = Math.min(a.g.length, c);
  var d = a.f ? p(a.f.Ha, a.f, a) : null;

  a: for (var e = a.g, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);

    for (var m = !0, l = 0; l < c; l++) {
      var t = e[l].b,
          B = e[l].a;
      t -= f;
      if (0 > t) f = Math.max(0, e[l].b - 100), m = !1;else try {
        md(B, h, "req" + t + "_");
      } catch (z) {
        d && d(B);
      }
    }

    if (m) {
      d = h.join("&");
      break a;
    }
  }

  a = a.g.splice(0, c);
  b.s = a;
  return d;
}

function Hc(a) {
  a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0);
}

function Cc(a) {
  if (a.a || a.j || 3 <= a.o) return !1;
  a.U++;
  a.j = I(p(a.Aa, a), Id(a, a.o));
  a.o++;
  return !0;
}

g.Aa = function () {
  this.j = null;
  Ld(this);

  if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I(p(this.Sa, this), a);
  }
};

g.Sa = function () {
  this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Bc(this), Ld(this));
};

function xc(a) {
  null != a.s && (k.clearTimeout(a.s), a.s = null);
}

function Ld(a) {
  a.a = new K(a, a.c, "rpc", a.U);
  null === a.i && (a.a.B = a.l);
  a.a.O = 0;
  var b = L(a.la);
  Q(b, "RID", "rpc");
  Q(b, "SID", a.J);
  Q(b, "CI", a.H ? "0" : "1");
  Q(b, "AID", a.P);
  Ed(a, b);
  Q(b, "TYPE", "xmlhttp");
  a.i && a.l && Ad(b, a.i, a.l);
  a.D && a.a.setTimeout(a.D);
  var c = a.a;
  a = a.ga;
  c.H = 1;
  c.i = lc(L(b));
  c.j = null;
  c.I = !0;
  mc(c, a);
}

g.Ra = function () {
  null != this.m && (this.m = null, Bc(this), Cc(this), H(19));
};

function Ac(a) {
  null != a.m && (k.clearTimeout(a.m), a.m = null);
}

function uc(a, b) {
  var c = null;

  if (a.a == b) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
  } else if (zc(a.b, b)) c = b.s, Gc(a.b, b), d = 1;else return;

  a.I = b.N;
  if (0 != a.v) if (b.b) {
    if (1 == d) {
      c = b.j ? b.j.length : 0;
      b = q() - b.u;
      var e = a.u;
      d = Vb();
      d.dispatchEvent(new Yb(d, c, b, e));
      Ic(a);
    } else Hc(a);
  } else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b) || 2 == d && Cc(a))) switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
    case 1:
      P(a, 5);
      break;

    case 4:
      P(a, 10);
      break;

    case 3:
      P(a, 6);
      break;

    default:
      P(a, 2);
  }
}

function Id(a, b) {
  var c = a.Fa + Math.floor(Math.random() * a.Ma);
  a.f || (c *= 2);
  return c * b;
}

function P(a, b) {
  a.c.info("Error code " + b);

  if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
  } else H(2);

  a.v = 0;
  a.f && a.f.ra(b);
  Fd(a);
  Dd(a);
}

g.Xa = function (a) {
  a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1));
};

function Fd(a) {
  a.v = 0;
  a.I = -1;

  if (a.f) {
    if (0 != jd(a.b).length || 0 != a.g.length) a.b.c.length = 0, sa(a.g), a.g.length = 0;
    a.f.qa();
  }
}

function Fc(a, b, c) {
  var d = ad(c);
  if ("" != d.c) b && Qc(d, b + "." + d.c), Rc(d, d.h);else {
    var e = k.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
  }
  a.W && Aa(a.W, function (f, h) {
    Q(d, h, f);
  });
  b = a.A;
  c = a.na;
  b && c && Q(d, b, c);
  Q(d, "VER", a.ha);
  Ed(a, d);
  return d;
}

function oc(a, b) {
  if (b && !a.C) throw Error("Can't create secondary domain capable XhrIo object.");
  b = new X(a.Ka);
  b.F = a.C;
  return b;
}

function Md() {}

g = Md.prototype;

g.ta = function () {};

g.sa = function () {};

g.ra = function () {};

g.qa = function () {};

g.Ha = function () {};

function Nd() {
  if (x && !(10 <= Number(Ua))) throw Error("Environmental error: no available transport.");
}

Nd.prototype.a = function (a, b) {
  return new Y(a, b);
};

function Y(a, b) {
  D.call(this);
  this.a = new Cd(b);
  this.l = a;
  this.b = b && b.messageUrlParams || null;
  a = b && b.messageHeaders || null;
  b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
    "X-Client-Protocol": "webchannel"
  });
  this.a.l = a;
  a = b && b.initMessageHeaders || null;
  b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = {
    "X-WebChannel-Content-Type": b.messageContentType
  });
  b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = {
    "X-WebChannel-Client-Profile": b.a
  });
  this.a.O = a;
  (a = b && b.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
  this.h = b && b.supportsCrossDomainXhr || !1;
  this.g = b && b.sendRawJson || !1;
  (b = b && b.httpSessionIdParam) && !ta(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
  this.f = new Z(this);
}

r(Y, D);
g = Y.prototype;

g.addEventListener = function (a, b, c, d) {
  Y.S.addEventListener.call(this, a, b, c, d);
};

g.removeEventListener = function (a, b, c, d) {
  Y.S.removeEventListener.call(this, a, b, c, d);
};

g.Oa = function () {
  this.a.f = this.f;
  this.h && (this.a.C = !0);
  var a = this.a,
      b = this.l,
      c = this.b || void 0;
  H(0);
  a.fa = b;
  a.W = c || {};
  a.H = a.T;
  a.B = Fc(a, null, a.fa);
  Ic(a);
};

g.close = function () {
  Jc(this.a);
};

g.Pa = function (a) {
  if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Gd(this.a, b);
  } else this.g ? (b = {}, b.__data__ = vb(a), Gd(this.a, b)) : Gd(this.a, a);
};

g.G = function () {
  this.a.f = null;
  delete this.f;
  Jc(this.a);
  delete this.a;
  Y.S.G.call(this);
};

function Od(a) {
  dc.call(this);
  var b = a.__sm__;

  if (b) {
    a: {
      for (var c in b) {
        a = c;
        break a;
      }

      a = void 0;
    }

    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
  } else this.data = a;
}

r(Od, dc);

function Pd() {
  ec.call(this);
  this.status = 1;
}

r(Pd, ec);

function Z(a) {
  this.a = a;
}

r(Z, Md);

Z.prototype.ta = function () {
  this.a.dispatchEvent("a");
};

Z.prototype.sa = function (a) {
  this.a.dispatchEvent(new Od(a));
};

Z.prototype.ra = function (a) {
  this.a.dispatchEvent(new Pd(a));
};

Z.prototype.qa = function () {
  this.a.dispatchEvent("b");
};
/*
Copyright 2017 Google Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/


Nd.prototype.createWebChannel = Nd.prototype.a;
Y.prototype.send = Y.prototype.Pa;
Y.prototype.open = Y.prototype.Oa;
Y.prototype.close = Y.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J;
J.OPEN = "a";
J.CLOSE = "b";
J.ERROR = "c";
J.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.X;
X.prototype.getResponseJson = X.prototype.Na;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var esm = {
  createWebChannelTransport: function () {
    return new Nd();
  },
  ErrorCode: Zb,
  EventType: $b,
  WebChannel: cc,
  XhrIo: X
};
var esm_1 = esm.createWebChannelTransport;
exports.createWebChannelTransport = esm_1;
var esm_2 = esm.ErrorCode;
exports.ErrorCode = esm_2;
var esm_3 = esm.EventType;
exports.EventType = esm_3;
var esm_4 = esm.WebChannel;
exports.WebChannel = esm_4;
var esm_5 = esm.XhrIo;
exports.XhrIo = esm_5;
var _default = esm;
exports.default = _default;
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/@firebase/firestore/dist/index.cjs.js":[function(require,module,exports) {
var process = require("process");
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var t,
    e = require("tslib"),
    n = (t = require("@firebase/app")) && "object" == _typeof(t) && "default" in t ? t.default : t,
    r = require("@firebase/logger"),
    i = require("@firebase/util"),
    o = require("@firebase/webchannel-wrapper"),
    s = require("@firebase/component"),
    u = new r.Logger("@firebase/firestore"); // Helper methods are needed because variables can't be exported as read/write


function a() {
  return u.logLevel;
}

function c(t) {
  for (var n = [], i = 1; i < arguments.length; i++) {
    n[i - 1] = arguments[i];
  }

  if (u.logLevel <= r.LogLevel.DEBUG) {
    var o = n.map(l);
    u.debug.apply(u, e.__spreadArrays(["Firestore (7.19.0): " + t], o));
  }
}

function h(t) {
  for (var n = [], i = 1; i < arguments.length; i++) {
    n[i - 1] = arguments[i];
  }

  if (u.logLevel <= r.LogLevel.ERROR) {
    var o = n.map(l);
    u.error.apply(u, e.__spreadArrays(["Firestore (7.19.0): " + t], o));
  }
}

function f(t) {
  for (var n = [], i = 1; i < arguments.length; i++) {
    n[i - 1] = arguments[i];
  }

  if (u.logLevel <= r.LogLevel.WARN) {
    var o = n.map(l);
    u.warn.apply(u, e.__spreadArrays(["Firestore (7.19.0): " + t], o));
  }
}
/**
 * Converts an additional log parameter to a string representation.
 */


function l(t) {
  if ("string" == typeof t) return t;

  try {
    return e = t, JSON.stringify(e);
  } catch (e) {
    // Converting to JSON failed, just log the object directly
    return t;
  }
  /**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

  /** Formats an object as a JSON string, suitable for logging. */


  var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */


function p(t) {
  void 0 === t && (t = "Unexpected state"); // Log the failure in addition to throw an exception, just in case the
  // exception is swallowed.

  var e = "FIRESTORE (7.19.0) INTERNAL ASSERTION FAILED: " + t; // NOTE: We don't use FirestoreError here because these are internal failures
  // that cannot be handled by the user. (Also it would create a circular
  // dependency between the error and assert modules which doesn't work.)

  throw h(e), new Error(e)
  /**
  * Fails if the given assertion condition is false, throwing an Error with the
  * given message if it did.
  *
  * Messages are stripped in production builds.
  */
  ;
}

function d(t, e) {
  t || p();
}
/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */


function y(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */


function v(t) {
  // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
  var e = // eslint-disable-next-line @typescript-eslint/no-explicit-any
  "undefined" != typeof self && (self.crypto || self.msCrypto),
      n = new Uint8Array(t);
  if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n);else // Falls back to Math.random
    for (var r = 0; r < t; r++) {
      n[r] = Math.floor(256 * Math.random());
    }
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var g =
/** @class */
function () {
  function t() {}

  return t.t = function () {
    for ( // Alphanumeric characters
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = "" // The largest byte value that is a multiple of `char.length`.
    ; n.length < 20;) {
      for (var r = v(40), i = 0; i < r.length; ++i) {
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
      }
    }

    return n;
  }, t;
}();

function m(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
/** Helper to compare arrays using isEqual(). */


function w(t, e, n) {
  return t.length === e.length && t.every(function (t, r) {
    return n(t, e[r]);
  });
}
/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */


function _(t) {
  // Return the input string, with an additional NUL byte appended.
  return t + "\0";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var b =
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function b(t, e, n, r, i) {
  this.s = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
},
    I =
/** @class */
function () {
  function t(t, e) {
    this.projectId = t, this.database = e || "(default)";
  }

  return Object.defineProperty(t.prototype, "i", {
    get: function get() {
      return "(default)" === this.database;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) {
    return e instanceof t && e.projectId === this.projectId && e.database === this.database;
  }, t.prototype.o = function (t) {
    return m(this.projectId, t.projectId) || m(this.database, t.database);
  }, t;
}();
/** The default database name for a project. */

/** Represents the database ID a Firestore client is associated with. */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function E(t) {
  var e = 0;

  for (var n in t) {
    Object.prototype.hasOwnProperty.call(t, n) && e++;
  }

  return e;
}

function T(t, e) {
  for (var n in t) {
    Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
  }
}

function N(t) {
  for (var e in t) {
    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  }

  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */


var A =
/** @class */
function () {
  function t(t, e) {
    this.h = t, this.u = e,
    /**
         * The inner map for a key -> value pair. Due to the possibility of
         * collisions we keep a list of entries that we do a linear search through
         * to find an actual match. Note that collisions should be rare, so we still
         * expect near constant time lookups in practice.
         */
    this.l = {}
    /** Get a value for this key, or undefined if it does not exist. */
    ;
  }

  return t.prototype.get = function (t) {
    var e = this.h(t),
        n = this.l[e];
    if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
      var o = i[r],
          s = o[0],
          u = o[1];
      if (this.u(s, t)) return u;
    }
  }, t.prototype.has = function (t) {
    return void 0 !== this.get(t);
  },
  /** Put this key and value in the map. */
  t.prototype.set = function (t, e) {
    var n = this.h(t),
        r = this.l[n];

    if (void 0 !== r) {
      for (var i = 0; i < r.length; i++) {
        if (this.u(r[i][0], t)) return void (r[i] = [t, e]);
      }

      r.push([t, e]);
    } else this.l[n] = [[t, e]];
  },
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  t.prototype.delete = function (t) {
    var e = this.h(t),
        n = this.l[e];
    if (void 0 === n) return !1;

    for (var r = 0; r < n.length; r++) {
      if (this.u(n[r][0], t)) return 1 === n.length ? delete this.l[e] : n.splice(r, 1), !0;
    }

    return !1;
  }, t.prototype.forEach = function (t) {
    T(this.l, function (e, n) {
      for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r],
            s = o[0],
            u = o[1];
        t(s, u);
      }
    });
  }, t.prototype._ = function () {
    return N(this.l);
  }, t;
}(),
    S = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h

  /** Not an error; returned on success. */
  OK: "ok",

  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",

  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",

  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",

  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",

  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",

  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",

  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller can not be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",

  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",

  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",

  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",

  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",

  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",

  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",

  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",

  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",

  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
},
    D =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    r.toString = function () {
      return r.name + ": [code=" + r.code + "]: " + r.message;
    }, r;
  }

  return e.__extends(n, t), n;
}(Error),
    x =
/** @class */
function () {
  function t(t, e) {
    if (this.seconds = t, this.nanoseconds = e, e < 0) throw new D(S.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (e >= 1e9) throw new D(S.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
    if (t < -62135596800) throw new D(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); // This will break in the year 10,000.

    if (t >= 253402300800) throw new D(S.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }

  return t.now = function () {
    return t.fromMillis(Date.now());
  }, t.fromDate = function (e) {
    return t.fromMillis(e.getTime());
  }, t.fromMillis = function (e) {
    var n = Math.floor(e / 1e3);
    return new t(n, 1e6 * (e - 1e3 * n));
  }, t.prototype.toDate = function () {
    return new Date(this.toMillis());
  }, t.prototype.toMillis = function () {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }, t.prototype.T = function (t) {
    return this.seconds === t.seconds ? m(this.nanoseconds, t.nanoseconds) : m(this.seconds, t.seconds);
  }, t.prototype.isEqual = function (t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }, t.prototype.toString = function () {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }, t.prototype.toJSON = function () {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }, t.prototype.valueOf = function () {
    // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
    // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
    // with zeroes to be a consistent length. Strings with this format then have a lexiographical
    // ordering that matches the expected ordering. The <seconds> translation is done to avoid
    // having a leading negative sign (i.e. a leading '-' character) in its string representation,
    // which would affect its lexiographical ordering.
    var t = this.seconds - -62135596800; // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.

    return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }, t;
}(),
    k =
/** @class */
function () {
  function t(t) {
    this.timestamp = t;
  }

  return t.m = function (e) {
    return new t(e);
  }, t.min = function () {
    return new t(new x(0, 0));
  }, t.prototype.o = function (t) {
    return this.timestamp.T(t.timestamp);
  }, t.prototype.isEqual = function (t) {
    return this.timestamp.isEqual(t.timestamp);
  },
  /** Returns a number representation of the version for use in spec tests. */
  t.prototype.I = function () {
    // Convert to microseconds.
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }, t.prototype.toString = function () {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }, t.prototype.A = function () {
    return this.timestamp;
  }, t;
}(),
    L =
/** @class */
function () {
  function t(t, e, n) {
    void 0 === e ? e = 0 : e > t.length && p(), void 0 === n ? n = t.length - e : n > t.length - e && p(), this.segments = t, this.offset = e, this.R = n;
  }

  return Object.defineProperty(t.prototype, "length", {
    get: function get() {
      return this.R;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) {
    return 0 === t.P(this, e);
  }, t.prototype.child = function (e) {
    var n = this.segments.slice(this.offset, this.limit());
    return e instanceof t ? e.forEach(function (t) {
      n.push(t);
    }) : n.push(e), this.g(n);
  },
  /** The index of one past the last segment of the path. */
  t.prototype.limit = function () {
    return this.offset + this.length;
  }, t.prototype.V = function (t) {
    return t = void 0 === t ? 1 : t, this.g(this.segments, this.offset + t, this.length - t);
  }, t.prototype.p = function () {
    return this.g(this.segments, this.offset, this.length - 1);
  }, t.prototype.v = function () {
    return this.segments[this.offset];
  }, t.prototype.S = function () {
    return this.get(this.length - 1);
  }, t.prototype.get = function (t) {
    return this.segments[this.offset + t];
  }, t.prototype._ = function () {
    return 0 === this.length;
  }, t.prototype.D = function (t) {
    if (t.length < this.length) return !1;

    for (var e = 0; e < this.length; e++) {
      if (this.get(e) !== t.get(e)) return !1;
    }

    return !0;
  }, t.prototype.C = function (t) {
    if (this.length + 1 !== t.length) return !1;

    for (var e = 0; e < this.length; e++) {
      if (this.get(e) !== t.get(e)) return !1;
    }

    return !0;
  }, t.prototype.forEach = function (t) {
    for (var e = this.offset, n = this.limit(); e < n; e++) {
      t(this.segments[e]);
    }
  }, t.prototype.N = function () {
    return this.segments.slice(this.offset, this.limit());
  }, t.P = function (t, e) {
    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
      var i = t.get(r),
          o = e.get(r);
      if (i < o) return -1;
      if (i > o) return 1;
    }

    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }, t;
}(),
    P =
/** @class */
function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e.__extends(n, t), n.prototype.g = function (t, e, r) {
    return new n(t, e, r);
  }, n.prototype.F = function () {
    // NOTE: The client is ignorant of any path segments containing escape
    // sequences (e.g. __id123__) and just passes them through raw (they exist
    // for legacy reasons and should not be used frequently).
    return this.N().join("/");
  }, n.prototype.toString = function () {
    return this.F();
  },
  /**
   * Creates a resource path from the given slash-delimited string.
   */
  n.k = function (t) {
    // NOTE: The client is ignorant of any path segments containing escape
    // sequences (e.g. __id123__) and just passes them through raw (they exist
    // for legacy reasons and should not be used frequently).
    if (t.indexOf("//") >= 0) throw new D(S.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them."); // We may still have an empty segment at the beginning or end if they had a
    // leading or trailing slash (which we allow).

    return new n(t.split("/").filter(function (t) {
      return t.length > 0;
    }));
  }, n.$ = function () {
    return new n([]);
  }, n;
}(L),
    R = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
    O =
/** @class */
function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e.__extends(n, t), n.prototype.g = function (t, e, r) {
    return new n(t, e, r);
  },
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  n.O = function (t) {
    return R.test(t);
  }, n.prototype.F = function () {
    return this.N().map(function (t) {
      return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.O(t) || (t = "`" + t + "`"), t;
    }).join(".");
  }, n.prototype.toString = function () {
    return this.F();
  },
  /**
   * Returns true if this field references the key of a document.
   */
  n.prototype.M = function () {
    return 1 === this.length && "__name__" === this.get(0);
  },
  /**
   * The field designating the key of a document.
   */
  n.L = function () {
    return new n(["__name__"]);
  },
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  n.q = function (t) {
    for (var e = [], r = "", i = 0, o = function o() {
      if (0 === r.length) throw new D(S.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      e.push(r), r = "";
    }, s = !1; i < t.length;) {
      var u = t[i];

      if ("\\" === u) {
        if (i + 1 === t.length) throw new D(S.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
        var a = t[i + 1];
        if ("\\" !== a && "." !== a && "`" !== a) throw new D(S.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
        r += a, i += 2;
      } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
    }

    if (o(), s) throw new D(S.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new n(e);
  }, n.$ = function () {
    return new n([]);
  }, n;
}(L),
    V =
/** @class */
function () {
  function t(t) {
    this.path = t;
  }

  return t.B = function (e) {
    return new t(P.k(e));
  }, t.U = function (e) {
    return new t(P.k(e).V(5));
  },
  /** Returns true if the document is in the specified collectionId. */
  t.prototype.W = function (t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }, t.prototype.isEqual = function (t) {
    return null !== t && 0 === P.P(this.path, t.path);
  }, t.prototype.toString = function () {
    return this.path.toString();
  }, t.P = function (t, e) {
    return P.P(t.path, e.path);
  }, t.j = function (t) {
    return t.length % 2 == 0;
  },
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments The segments of the path to the document
   * @return A new instance of DocumentKey
   */
  t.K = function (e) {
    return new t(new P(e.slice()));
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Returns whether a variable is either undefined or null.
 */


function U(t) {
  return null == t;
}
/** Returns whether the value represents -0. */


function C(t) {
  // Detect if the value is -0.0. Based on polyfill from
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
  return -0 === t && 1 / t == -1 / 0;
}
/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */


function q(t) {
  return "number" == typeof t && Number.isInteger(t) && !C(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing


var M = function M(t, e, n, r, i, o, s) {
  void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.G = null;
};
/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */


function F(t, e, n, r, i, o, s) {
  return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), new M(t, e, n, r, i, o, s);
}

function G(t) {
  var e = y(t);

  if (null === e.G) {
    var n = e.path.F();
    null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map(function (t) {
      return function (t) {
        // TODO(b/29183165): Technically, this won't be unique if two values have
        // the same description, such as the int 3 and the string "3". So we should
        // add the types in here somehow, too.
        return t.field.F() + t.op.toString() + Pt(t.value);
      }(t);
    }).join(","), n += "|ob:", n += e.orderBy.map(function (t) {
      return (e = t).field.F() + e.dir;
      var e;
    }).join(","), U(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", n += xn(e.startAt)), e.endAt && (n += "|ub:", n += xn(e.endAt)), e.G = n;
  }

  return e.G;
}

function j(t, e) {
  if (t.limit !== e.limit) return !1;
  if (t.orderBy.length !== e.orderBy.length) return !1;

  for (var n = 0; n < t.orderBy.length; n++) {
    if (!On(t.orderBy[n], e.orderBy[n])) return !1;
  }

  if (t.filters.length !== e.filters.length) return !1;

  for (var r = 0; r < t.filters.length; r++) {
    if (i = t.filters[r], o = e.filters[r], i.op !== o.op || !i.field.isEqual(o.field) || !Dt(i.value, o.value)) return !1;
  }

  var i, o;
  return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!Ln(t.startAt, e.startAt) && Ln(t.endAt, e.endAt);
}

function B(t) {
  return V.j(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Converts a Base64 encoded string to a binary string. */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */


var z =
/** @class */
function () {
  function t(t) {
    this.H = t;
  }

  return t.fromBase64String = function (e) {
    return new t(atob(e));
  }, t.fromUint8Array = function (e) {
    return new t(
    /**
    * Helper function to convert an Uint8array to a binary string.
    */
    function (t) {
      for (var e = "", n = 0; n < t.length; ++n) {
        e += String.fromCharCode(t[n]);
      }

      return e;
    }(e));
  }, t.prototype.toBase64 = function () {
    return t = this.H, btoa(t);
    /** Converts a binary string to a Base64 encoded string. */

    var t;
    /** True if and only if the Base64 conversion functions are available. */
  }, t.prototype.toUint8Array = function () {
    return function (t) {
      for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) {
        e[n] = t.charCodeAt(n);
      }

      return e;
    }(this.H);
  }, t.prototype.Y = function () {
    return 2 * this.H.length;
  }, t.prototype.o = function (t) {
    return m(this.H, t.H);
  }, t.prototype.isEqual = function (t) {
    return this.H === t.H;
  }, t;
}();

z.J = new z("");

var Q,
    W,
    H =
/** @class */
function () {
  function t(
  /** The target being listened to. */
  t,
  /**
   * The target ID to which the target corresponds; Assigned by the
   * LocalStore for user listens and by the SyncEngine for limbo watches.
   */
  e,
  /** The purpose of the target. */
  n,
  /**
   * The sequence number of the last transaction during which this target data
   * was modified.
   */
  r,
  /** The latest snapshot version seen for this target. */
  i
  /**
   * The maximum snapshot version at which the associated view
   * contained no limbo documents.
   */
  , o
  /**
   * An opaque, server-assigned token that allows watching a target to be
   * resumed after disconnecting without retransmitting all the data that
   * matches the target. The resume token essentially identifies a point in
   * time from which the server should resume sending results.
   */
  , s) {
    void 0 === i && (i = k.min()), void 0 === o && (o = k.min()), void 0 === s && (s = z.J), this.target = t, this.targetId = e, this.X = n, this.sequenceNumber = r, this.Z = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
  }
  /** Creates a new target data instance with an updated sequence number. */


  return t.prototype.tt = function (e) {
    return new t(this.target, this.targetId, this.X, e, this.Z, this.lastLimboFreeSnapshotVersion, this.resumeToken);
  },
  /**
   * Creates a new target data instance with an updated resume token and
   * snapshot version.
   */
  t.prototype.et = function (e, n) {
    return new t(this.target, this.targetId, this.X, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
  },
  /**
   * Creates a new target data instance with an updated last limbo free
   * snapshot version number.
   */
  t.prototype.nt = function (e) {
    return new t(this.target, this.targetId, this.X, this.sequenceNumber, this.Z, e, this.resumeToken);
  }, t;
}(),
    K = // TODO(b/33078163): just use simplest form of existence filter for now
function K(t) {
  this.count = t;
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */


function Y(t) {
  switch (t) {
    case S.OK:
      return p();

    case S.CANCELLED:
    case S.UNKNOWN:
    case S.DEADLINE_EXCEEDED:
    case S.RESOURCE_EXHAUSTED:
    case S.INTERNAL:
    case S.UNAVAILABLE: // Unauthenticated means something went wrong with our token and we need
    // to retry with new credentials which will happen automatically.

    case S.UNAUTHENTICATED:
      return !1;

    case S.INVALID_ARGUMENT:
    case S.NOT_FOUND:
    case S.ALREADY_EXISTS:
    case S.PERMISSION_DENIED:
    case S.FAILED_PRECONDITION: // Aborted might be retried in some scenarios, but that is dependant on
    // the context and should handled individually by the calling code.
    // See https://cloud.google.com/apis/design/errors.

    case S.ABORTED:
    case S.OUT_OF_RANGE:
    case S.UNIMPLEMENTED:
    case S.DATA_LOSS:
      return !0;

    default:
      return p();
  }
}
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */

/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */


function Z(t) {
  if (void 0 === t) // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return h("GRPC error has no .code"), S.UNKNOWN;

  switch (t) {
    case Q.OK:
      return S.OK;

    case Q.CANCELLED:
      return S.CANCELLED;

    case Q.UNKNOWN:
      return S.UNKNOWN;

    case Q.DEADLINE_EXCEEDED:
      return S.DEADLINE_EXCEEDED;

    case Q.RESOURCE_EXHAUSTED:
      return S.RESOURCE_EXHAUSTED;

    case Q.INTERNAL:
      return S.INTERNAL;

    case Q.UNAVAILABLE:
      return S.UNAVAILABLE;

    case Q.UNAUTHENTICATED:
      return S.UNAUTHENTICATED;

    case Q.INVALID_ARGUMENT:
      return S.INVALID_ARGUMENT;

    case Q.NOT_FOUND:
      return S.NOT_FOUND;

    case Q.ALREADY_EXISTS:
      return S.ALREADY_EXISTS;

    case Q.PERMISSION_DENIED:
      return S.PERMISSION_DENIED;

    case Q.FAILED_PRECONDITION:
      return S.FAILED_PRECONDITION;

    case Q.ABORTED:
      return S.ABORTED;

    case Q.OUT_OF_RANGE:
      return S.OUT_OF_RANGE;

    case Q.UNIMPLEMENTED:
      return S.UNIMPLEMENTED;

    case Q.DATA_LOSS:
      return S.DATA_LOSS;

    default:
      return p();
  }
}
/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */


(W = Q || (Q = {}))[W.OK = 0] = "OK", W[W.CANCELLED = 1] = "CANCELLED", W[W.UNKNOWN = 2] = "UNKNOWN", W[W.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", W[W.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", W[W.NOT_FOUND = 5] = "NOT_FOUND", W[W.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", W[W.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", W[W.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", W[W.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", W[W.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", W[W.ABORTED = 10] = "ABORTED", W[W.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", W[W.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", W[W.INTERNAL = 13] = "INTERNAL", W[W.UNAVAILABLE = 14] = "UNAVAILABLE", W[W.DATA_LOSS = 15] = "DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.

var X =
/** @class */
function () {
  function t(t, e) {
    this.P = t, this.root = e || J.EMPTY;
  } // Returns a copy of the map, with the specified key/value added or replaced.


  return t.prototype.st = function (e, n) {
    return new t(this.P, this.root.st(e, n, this.P).copy(null, null, J.it, null, null));
  }, // Returns a copy of the map, with the specified key removed.
  t.prototype.remove = function (e) {
    return new t(this.P, this.root.remove(e, this.P).copy(null, null, J.it, null, null));
  }, // Returns the value of the node with the given key, or null.
  t.prototype.get = function (t) {
    for (var e = this.root; !e._();) {
      var n = this.P(t, e.key);
      if (0 === n) return e.value;
      n < 0 ? e = e.left : n > 0 && (e = e.right);
    }

    return null;
  }, // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  t.prototype.indexOf = function (t) {
    for ( // Number of nodes that were pruned when descending right
    var e = 0, n = this.root; !n._();) {
      var r = this.P(t, n.key);
      if (0 === r) return e + n.left.size;
      r < 0 ? n = n.left : ( // Count all nodes left of the node plus the node itself
      e += n.left.size + 1, n = n.right);
    } // Node not found


    return -1;
  }, t.prototype._ = function () {
    return this.root._();
  }, Object.defineProperty(t.prototype, "size", {
    // Returns the total number of nodes in the map.
    get: function get() {
      return this.root.size;
    },
    enumerable: !1,
    configurable: !0
  }), // Returns the minimum key in the map.
  t.prototype.rt = function () {
    return this.root.rt();
  }, // Returns the maximum key in the map.
  t.prototype.ot = function () {
    return this.root.ot();
  }, // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.ht = function (t) {
    return this.root.ht(t);
  }, t.prototype.forEach = function (t) {
    this.ht(function (e, n) {
      return t(e, n), !1;
    });
  }, t.prototype.toString = function () {
    var t = [];
    return this.ht(function (e, n) {
      return t.push(e + ":" + n), !1;
    }), "{" + t.join(", ") + "}";
  }, // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.at = function (t) {
    return this.root.at(t);
  }, // Returns an iterator over the SortedMap.
  t.prototype.ct = function () {
    return new $(this.root, null, this.P, !1);
  }, t.prototype.ut = function (t) {
    return new $(this.root, t, this.P, !1);
  }, t.prototype.lt = function () {
    return new $(this.root, null, this.P, !0);
  }, t.prototype._t = function (t) {
    return new $(this.root, t, this.P, !0);
  }, t;
}(),
    $ =
/** @class */
function () {
  function t(t, e, n, r) {
    this.ft = r, this.dt = [];

    for (var i = 1; !t._();) {
      if (i = e ? n(t.key, e) : 1, // flip the comparison if we're going in reverse
      r && (i *= -1), i < 0) // This node is less than our start key. ignore it
        t = this.ft ? t.left : t.right;else {
        if (0 === i) {
          // This node is exactly equal to our start key. Push it on the stack,
          // but stop iterating;
          this.dt.push(t);
          break;
        } // This node is greater than our start key, add it to the stack and move
        // to the next one


        this.dt.push(t), t = this.ft ? t.right : t.left;
      }
    }
  }

  return t.prototype.wt = function () {
    var t = this.dt.pop(),
        e = {
      key: t.key,
      value: t.value
    };
    if (this.ft) for (t = t.left; !t._();) {
      this.dt.push(t), t = t.right;
    } else for (t = t.right; !t._();) {
      this.dt.push(t), t = t.left;
    }
    return e;
  }, t.prototype.Tt = function () {
    return this.dt.length > 0;
  }, t.prototype.Et = function () {
    if (0 === this.dt.length) return null;
    var t = this.dt[this.dt.length - 1];
    return {
      key: t.key,
      value: t.value
    };
  }, t;
}(),
    J =
/** @class */
function () {
  function t(e, n, r, i, o) {
    this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
  } // Returns a copy of the current node, optionally replacing pieces of it.


  return t.prototype.copy = function (e, n, r, i, o) {
    return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
  }, t.prototype._ = function () {
    return !1;
  }, // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.ht = function (t) {
    return this.left.ht(t) || t(this.key, this.value) || this.right.ht(t);
  }, // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  t.prototype.at = function (t) {
    return this.right.at(t) || t(this.key, this.value) || this.left.at(t);
  }, // Returns the minimum node in the tree.
  t.prototype.min = function () {
    return this.left._() ? this : this.left.min();
  }, // Returns the maximum key in the tree.
  t.prototype.rt = function () {
    return this.min().key;
  }, // Returns the maximum key in the tree.
  t.prototype.ot = function () {
    return this.right._() ? this.key : this.right.ot();
  }, // Returns new tree, with the key/value added.
  t.prototype.st = function (t, e, n) {
    var r = this,
        i = n(t, r.key);
    return (r = i < 0 ? r.copy(null, null, null, r.left.st(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.st(t, e, n))).It();
  }, t.prototype.At = function () {
    if (this.left._()) return t.EMPTY;
    var e = this;
    return e.left.Rt() || e.left.left.Rt() || (e = e.Pt()), (e = e.copy(null, null, null, e.left.At(), null)).It();
  }, // Returns new tree, with the specified item removed.
  t.prototype.remove = function (e, n) {
    var r,
        i = this;
    if (n(e, i.key) < 0) i.left._() || i.left.Rt() || i.left.left.Rt() || (i = i.Pt()), i = i.copy(null, null, null, i.left.remove(e, n), null);else {
      if (i.left.Rt() && (i = i.gt()), i.right._() || i.right.Rt() || i.right.left.Rt() || (i = i.Vt()), 0 === n(e, i.key)) {
        if (i.right._()) return t.EMPTY;
        r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.At());
      }

      i = i.copy(null, null, null, null, i.right.remove(e, n));
    }
    return i.It();
  }, t.prototype.Rt = function () {
    return this.color;
  }, // Returns new tree after performing any needed rotations.
  t.prototype.It = function () {
    var t = this;
    return t.right.Rt() && !t.left.Rt() && (t = t.yt()), t.left.Rt() && t.left.left.Rt() && (t = t.gt()), t.left.Rt() && t.right.Rt() && (t = t.pt()), t;
  }, t.prototype.Pt = function () {
    var t = this.pt();
    return t.right.left.Rt() && (t = (t = (t = t.copy(null, null, null, null, t.right.gt())).yt()).pt()), t;
  }, t.prototype.Vt = function () {
    var t = this.pt();
    return t.left.left.Rt() && (t = (t = t.gt()).pt()), t;
  }, t.prototype.yt = function () {
    var e = this.copy(null, null, t.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }, t.prototype.gt = function () {
    var e = this.copy(null, null, t.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }, t.prototype.pt = function () {
    var t = this.left.copy(null, null, !this.left.color, null, null),
        e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }, // For testing.
  t.prototype.bt = function () {
    var t = this.vt();
    return Math.pow(2, t) <= this.size + 1;
  }, // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  t.prototype.vt = function () {
    if (this.Rt() && this.left.Rt()) throw p();
    if (this.right.Rt()) throw p();
    var t = this.left.vt();
    if (t !== this.right.vt()) throw p();
    return t + (this.Rt() ? 0 : 1);
  }, t;
}(); // end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any


J.EMPTY = null, J.RED = !0, J.it = !1, // end LLRBEmptyNode
J.EMPTY = new (
/** @class */
function () {
  function t() {
    this.size = 0;
  }

  return Object.defineProperty(t.prototype, "key", {
    get: function get() {
      throw p();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "value", {
    get: function get() {
      throw p();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "color", {
    get: function get() {
      throw p();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "left", {
    get: function get() {
      throw p();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "right", {
    get: function get() {
      throw p();
    },
    enumerable: !1,
    configurable: !0
  }), // Returns a copy of the current node.
  t.prototype.copy = function (t, e, n, r, i) {
    return this;
  }, // Returns a copy of the tree, with the specified key/value added.
  t.prototype.st = function (t, e, n) {
    return new J(t, e);
  }, // Returns a copy of the tree, with the specified key removed.
  t.prototype.remove = function (t, e) {
    return this;
  }, t.prototype._ = function () {
    return !0;
  }, t.prototype.ht = function (t) {
    return !1;
  }, t.prototype.at = function (t) {
    return !1;
  }, t.prototype.rt = function () {
    return null;
  }, t.prototype.ot = function () {
    return null;
  }, t.prototype.Rt = function () {
    return !1;
  }, // For testing.
  t.prototype.bt = function () {
    return !0;
  }, t.prototype.vt = function () {
    return 0;
  }, t;
}())();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */

var tt =
/** @class */
function () {
  function t(t) {
    this.P = t, this.data = new X(this.P);
  }

  return t.prototype.has = function (t) {
    return null !== this.data.get(t);
  }, t.prototype.first = function () {
    return this.data.rt();
  }, t.prototype.last = function () {
    return this.data.ot();
  }, Object.defineProperty(t.prototype, "size", {
    get: function get() {
      return this.data.size;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.indexOf = function (t) {
    return this.data.indexOf(t);
  },
  /** Iterates elements in order defined by "comparator" */
  t.prototype.forEach = function (t) {
    this.data.ht(function (e, n) {
      return t(e), !1;
    });
  },
  /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */
  t.prototype.St = function (t, e) {
    for (var n = this.data.ut(t[0]); n.Tt();) {
      var r = n.wt();
      if (this.P(r.key, t[1]) >= 0) return;
      e(r.key);
    }
  },
  /**
   * Iterates over `elem`s such that: start <= elem until false is returned.
   */
  t.prototype.Dt = function (t, e) {
    var n;

    for (n = void 0 !== e ? this.data.ut(e) : this.data.ct(); n.Tt();) {
      if (!t(n.wt().key)) return;
    }
  },
  /** Finds the least element greater than or equal to `elem`. */
  t.prototype.Ct = function (t) {
    var e = this.data.ut(t);
    return e.Tt() ? e.wt().key : null;
  }, t.prototype.ct = function () {
    return new et(this.data.ct());
  }, t.prototype.ut = function (t) {
    return new et(this.data.ut(t));
  },
  /** Inserts or updates an element */
  t.prototype.add = function (t) {
    return this.copy(this.data.remove(t).st(t, !0));
  },
  /** Deletes an element */
  t.prototype.delete = function (t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }, t.prototype._ = function () {
    return this.data._();
  }, t.prototype.Nt = function (t) {
    var e = this; // Make sure `result` always refers to the larger one of the two sets.

    return e.size < t.size && (e = t, t = this), t.forEach(function (t) {
      e = e.add(t);
    }), e;
  }, t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) return !1;
    if (this.size !== e.size) return !1;

    for (var n = this.data.ct(), r = e.data.ct(); n.Tt();) {
      var i = n.wt().key,
          o = r.wt().key;
      if (0 !== this.P(i, o)) return !1;
    }

    return !0;
  }, t.prototype.N = function () {
    var t = [];
    return this.forEach(function (e) {
      t.push(e);
    }), t;
  }, t.prototype.toString = function () {
    var t = [];
    return this.forEach(function (e) {
      return t.push(e);
    }), "SortedSet(" + t.toString() + ")";
  }, t.prototype.copy = function (e) {
    var n = new t(this.P);
    return n.data = e, n;
  }, t;
}(),
    et =
/** @class */
function () {
  function t(t) {
    this.Ft = t;
  }

  return t.prototype.wt = function () {
    return this.Ft.wt().key;
  }, t.prototype.Tt = function () {
    return this.Ft.Tt();
  }, t;
}(),
    nt = new X(V.P);

function rt() {
  return nt;
}

function it() {
  return rt();
}

var ot = new X(V.P);

function st() {
  return ot;
}

var ut = new X(V.P),
    at = new tt(V.P);

function ct() {
  for (var t = [], e = 0; e < arguments.length; e++) {
    t[e] = arguments[e];
  }

  for (var n = at, r = 0, i = t; r < i.length; r++) {
    var o = i[r];
    n = n.add(o);
  }

  return n;
}

var ht = new tt(m);

function ft() {
  return ht;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */


var lt =
/** @class */
function () {
  /** The default ordering is by key if the comparator is omitted */
  function t(t) {
    // We are adding document key comparator to the end as it's the only
    // guaranteed unique property of a document.
    this.P = t ? function (e, n) {
      return t(e, n) || V.P(e.key, n.key);
    } : function (t, e) {
      return V.P(t.key, e.key);
    }, this.kt = st(), this.$t = new X(this.P)
    /**
    * Returns an empty copy of the existing DocumentSet, using the same
    * comparator.
    */
    ;
  }

  return t.xt = function (e) {
    return new t(e.P);
  }, t.prototype.has = function (t) {
    return null != this.kt.get(t);
  }, t.prototype.get = function (t) {
    return this.kt.get(t);
  }, t.prototype.first = function () {
    return this.$t.rt();
  }, t.prototype.last = function () {
    return this.$t.ot();
  }, t.prototype._ = function () {
    return this.$t._();
  },
  /**
   * Returns the index of the provided key in the document set, or -1 if the
   * document key is not present in the set;
   */
  t.prototype.indexOf = function (t) {
    var e = this.kt.get(t);
    return e ? this.$t.indexOf(e) : -1;
  }, Object.defineProperty(t.prototype, "size", {
    get: function get() {
      return this.$t.size;
    },
    enumerable: !1,
    configurable: !0
  }),
  /** Iterates documents in order defined by "comparator" */
  t.prototype.forEach = function (t) {
    this.$t.ht(function (e, n) {
      return t(e), !1;
    });
  },
  /** Inserts or updates a document with the same key */
  t.prototype.add = function (t) {
    // First remove the element if we have it.
    var e = this.delete(t.key);
    return e.copy(e.kt.st(t.key, t), e.$t.st(t, null));
  },
  /** Deletes a document with a given key */
  t.prototype.delete = function (t) {
    var e = this.get(t);
    return e ? this.copy(this.kt.remove(t), this.$t.remove(e)) : this;
  }, t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) return !1;
    if (this.size !== e.size) return !1;

    for (var n = this.$t.ct(), r = e.$t.ct(); n.Tt();) {
      var i = n.wt().key,
          o = r.wt().key;
      if (!i.isEqual(o)) return !1;
    }

    return !0;
  }, t.prototype.toString = function () {
    var t = [];
    return this.forEach(function (e) {
      t.push(e.toString());
    }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
  }, t.prototype.copy = function (e, n) {
    var r = new t();
    return r.P = this.P, r.kt = e, r.$t = n, r;
  }, t;
}(),
    pt =
/** @class */
function () {
  function t() {
    this.Ot = new X(V.P);
  }

  return t.prototype.track = function (t) {
    var e = t.doc.key,
        n = this.Ot.get(e);
    n ? // Merge the new change with the existing change.
    0
    /* Added */
    !== t.type && 3
    /* Metadata */
    === n.type ? this.Ot = this.Ot.st(e, t) : 3
    /* Metadata */
    === t.type && 1
    /* Removed */
    !== n.type ? this.Ot = this.Ot.st(e, {
      type: n.type,
      doc: t.doc
    }) : 2
    /* Modified */
    === t.type && 2
    /* Modified */
    === n.type ? this.Ot = this.Ot.st(e, {
      type: 2
      /* Modified */
      ,
      doc: t.doc
    }) : 2
    /* Modified */
    === t.type && 0
    /* Added */
    === n.type ? this.Ot = this.Ot.st(e, {
      type: 0
      /* Added */
      ,
      doc: t.doc
    }) : 1
    /* Removed */
    === t.type && 0
    /* Added */
    === n.type ? this.Ot = this.Ot.remove(e) : 1
    /* Removed */
    === t.type && 2
    /* Modified */
    === n.type ? this.Ot = this.Ot.st(e, {
      type: 1
      /* Removed */
      ,
      doc: n.doc
    }) : 0
    /* Added */
    === t.type && 1
    /* Removed */
    === n.type ? this.Ot = this.Ot.st(e, {
      type: 2
      /* Modified */
      ,
      doc: t.doc
    }) : // This includes these cases, which don't make sense:
    // Added->Added
    // Removed->Removed
    // Modified->Added
    // Removed->Modified
    // Metadata->Added
    // Removed->Metadata
    p() : this.Ot = this.Ot.st(e, t);
  }, t.prototype.Mt = function () {
    var t = [];
    return this.Ot.ht(function (e, n) {
      t.push(n);
    }), t;
  }, t;
}(),
    dt =
/** @class */
function () {
  function t(t, e, n, r, i, o, s, u) {
    this.query = t, this.docs = e, this.Lt = n, this.docChanges = r, this.qt = i, this.fromCache = o, this.Bt = s, this.Ut = u
    /** Returns a view snapshot as if all documents in the snapshot were added. */
    ;
  }

  return t.Qt = function (e, n, r, i) {
    var o = [];
    return n.forEach(function (t) {
      o.push({
        type: 0
        /* Added */
        ,
        doc: t
      });
    }), new t(e, n, lt.xt(n), o, r, i,
    /* syncStateChanged= */
    !0,
    /* excludesMetadataChanges= */
    !1);
  }, Object.defineProperty(t.prototype, "hasPendingWrites", {
    get: function get() {
      return !this.qt._();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) {
    if (!(this.fromCache === t.fromCache && this.Bt === t.Bt && this.qt.isEqual(t.qt) && dn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Lt.isEqual(t.Lt))) return !1;
    var e = this.docChanges,
        n = t.docChanges;
    if (e.length !== n.length) return !1;

    for (var r = 0; r < e.length; r++) {
      if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
    }

    return !0;
  }, t;
}(),
    yt =
/** @class */
function () {
  function t(
  /**
   * The snapshot version this event brings us up to, or MIN if not set.
   */
  t,
  /**
   * A map from target to changes to the target. See TargetChange.
   */
  e,
  /**
   * A set of targets that is known to be inconsistent. Listens for these
   * targets should be re-established without resume tokens.
   */
  n,
  /**
   * A set of which documents have changed or been deleted, along with the
   * doc's new values (if not deleted).
   */
  r,
  /**
   * A set of which document updates are due only to limbo resolution targets.
   */
  i) {
    this.Z = t, this.Wt = e, this.jt = n, this.Kt = r, this.Gt = i;
  }
  /**
   * HACK: Views require RemoteEvents in order to determine whether the view is
   * CURRENT, but secondary tabs don't receive remote events. So this method is
   * used to create a synthesized RemoteEvent that can be used to apply a
   * CURRENT status change to a View, for queries executed in a different tab.
   */
  // PORTING NOTE: Multi-tab only


  return t.zt = function (e, n) {
    var r = new Map();
    return r.set(e, vt.Ht(e, n)), new t(k.min(), r, ft(), rt(), ct());
  }, t;
}(),
    vt =
/** @class */
function () {
  function t(
  /**
   * An opaque, server-assigned token that allows watching a query to be resumed
   * after disconnecting without retransmitting all the data that matches the
   * query. The resume token essentially identifies a point in time from which
   * the server should resume sending results.
   */
  t,
  /**
   * The "current" (synced) status of this target. Note that "current"
   * has special meaning in the RPC protocol that implies that a target is
   * both up-to-date and consistent with the rest of the watch stream.
   */
  e,
  /**
   * The set of documents that were newly assigned to this target as part of
   * this remote event.
   */
  n,
  /**
   * The set of documents that were already assigned to this target but received
   * an update during this remote event.
   */
  r,
  /**
   * The set of documents that were removed from this target as part of this
   * remote event.
   */
  i) {
    this.resumeToken = t, this.Yt = e, this.Jt = n, this.Xt = r, this.Zt = i
    /**
    * This method is used to create a synthesized TargetChanges that can be used to
    * apply a CURRENT status change to a View (for queries executed in a different
    * tab) or for new queries (to raise snapshots with correct CURRENT status).
    */
    ;
  }

  return t.Ht = function (e, n) {
    return new t(z.J, n, ct(), ct(), ct());
  }, t;
}(),
    gt = function gt(
/** The new document applies to all of these targets. */
t,
/** The new document is removed from all of these targets. */
e,
/** The key of the document for this change. */
n,
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
  this.te = t, this.removedTargetIds = e, this.key = n, this.ee = r;
},
    mt = function mt(t, e) {
  this.targetId = t, this.ne = e;
},
    wt = function wt(
/** What kind of change occurred to the watch target. */
t,
/** The target IDs that were added/removed/set. */
e,
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */
, r) {
  void 0 === n && (n = z.J), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r;
},
    _t =
/** @class */
function () {
  function t() {
    /**
     * The number of pending responses (adds or removes) that we are waiting on.
     * We only consider targets active that have no pending responses.
     */
    this.se = 0,
    /**
         * Keeps track of the document changes since the last raised snapshot.
         *
         * These changes are continuously updated as we receive document updates and
         * always reflect the current set of changes against the last issued snapshot.
         */
    this.ie = Et(),
    /** See public getters for explanations of these fields. */
    this.re = z.J, this.oe = !1,
    /**
         * Whether this target state should be included in the next snapshot. We
         * initialize to true so that newly-added targets are included in the next
         * RemoteEvent.
         */
    this.he = !0;
  }

  return Object.defineProperty(t.prototype, "Yt", {
    /**
     * Whether this target has been marked 'current'.
     *
     * 'Current' has special meaning in the RPC protocol: It implies that the
     * Watch backend has sent us all changes up to the point at which the target
     * was added and that the target is consistent with the rest of the watch
     * stream.
     */
    get: function get() {
      return this.oe;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "resumeToken", {
    /** The last resume token sent to us for this target. */
    get: function get() {
      return this.re;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "ae", {
    /** Whether this target has pending target adds or target removes. */
    get: function get() {
      return 0 !== this.se;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "ce", {
    /** Whether we have modified any state that should trigger a snapshot. */
    get: function get() {
      return this.he;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Applies the resume token to the TargetChange, but only when it has a new
   * value. Empty resumeTokens are discarded.
   */
  t.prototype.ue = function (t) {
    t.Y() > 0 && (this.he = !0, this.re = t);
  },
  /**
   * Creates a target change from the current set of changes.
   *
   * To reset the document changes after raising this snapshot, call
   * `clearPendingChanges()`.
   */
  t.prototype.le = function () {
    var t = ct(),
        e = ct(),
        n = ct();
    return this.ie.forEach(function (r, i) {
      switch (i) {
        case 0
        /* Added */
        :
          t = t.add(r);
          break;

        case 2
        /* Modified */
        :
          e = e.add(r);
          break;

        case 1
        /* Removed */
        :
          n = n.add(r);
          break;

        default:
          p();
      }
    }), new vt(this.re, this.oe, t, e, n);
  },
  /**
   * Resets the document changes and sets `hasPendingChanges` to false.
   */
  t.prototype._e = function () {
    this.he = !1, this.ie = Et();
  }, t.prototype.fe = function (t, e) {
    this.he = !0, this.ie = this.ie.st(t, e);
  }, t.prototype.de = function (t) {
    this.he = !0, this.ie = this.ie.remove(t);
  }, t.prototype.we = function () {
    this.se += 1;
  }, t.prototype.Te = function () {
    this.se -= 1;
  }, t.prototype.Ee = function () {
    this.he = !0, this.oe = !0;
  }, t;
}(),
    bt =
/** @class */
function () {
  function t(t) {
    this.me = t,
    /** The internal state of all tracked targets. */
    this.Ie = new Map(),
    /** Keeps track of the documents to update since the last raised snapshot. */
    this.Ae = rt(),
    /** A mapping of document keys to their set of target IDs. */
    this.Re = It(),
    /**
         * A list of targets with existence filter mismatches. These targets are
         * known to be inconsistent and their listens needs to be re-established by
         * RemoteStore.
         */
    this.Pe = new tt(m)
    /**
    * Processes and adds the DocumentWatchChange to the current set of changes.
    */
    ;
  }

  return t.prototype.ge = function (t) {
    for (var e = 0, n = t.te; e < n.length; e++) {
      var r = n[e];
      t.ee instanceof tn ? this.Ve(r, t.ee) : t.ee instanceof en && this.ye(r, t.key, t.ee);
    }

    for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
      var s = o[i];
      this.ye(s, t.key, t.ee);
    }
  },
  /** Processes and adds the WatchTargetChange to the current set of changes. */
  t.prototype.pe = function (t) {
    var e = this;
    this.be(t, function (n) {
      var r = e.ve(n);

      switch (t.state) {
        case 0
        /* NoChange */
        :
          e.Se(n) && r.ue(t.resumeToken);
          break;

        case 1
        /* Added */
        :
          // We need to decrement the number of pending acks needed from watch
          // for this targetId.
          r.Te(), r.ae || // We have a freshly added target, so we need to reset any state
          // that we had previously. This can happen e.g. when remove and add
          // back a target for existence filter mismatches.
          r._e(), r.ue(t.resumeToken);
          break;

        case 2
        /* Removed */
        :
          // We need to keep track of removed targets to we can post-filter and
          // remove any target changes.
          // We need to decrement the number of pending acks needed from watch
          // for this targetId.
          r.Te(), r.ae || e.removeTarget(n);
          break;

        case 3
        /* Current */
        :
          e.Se(n) && (r.Ee(), r.ue(t.resumeToken));
          break;

        case 4
        /* Reset */
        :
          e.Se(n) && ( // Reset the target and synthesizes removes for all existing
          // documents. The backend will re-add any documents that still
          // match the target before it sends the next global snapshot.
          e.De(n), r.ue(t.resumeToken));
          break;

        default:
          p();
      }
    });
  },
  /**
   * Iterates over all targetIds that the watch change applies to: either the
   * targetIds explicitly listed in the change or the targetIds of all currently
   * active targets.
   */
  t.prototype.be = function (t, e) {
    var n = this;
    t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Ie.forEach(function (t, r) {
      n.Se(r) && e(r);
    });
  },
  /**
   * Handles existence filters and synthesizes deletes for filter mismatches.
   * Targets that are invalidated by filter mismatches are added to
   * `pendingTargetResets`.
   */
  t.prototype.Ce = function (t) {
    var e = t.targetId,
        n = t.ne.count,
        r = this.Ne(e);

    if (r) {
      var i = r.target;
      if (B(i)) {
        if (0 === n) {
          // The existence filter told us the document does not exist. We deduce
          // that this document does not exist and apply a deleted document to
          // our updates. Without applying this deleted document there might be
          // another query that will raise this document as part of a snapshot
          // until it is resolved, essentially exposing inconsistency between
          // queries.
          var o = new V(i.path);
          this.ye(e, o, new en(o, k.min()));
        } else d(1 === n);
      } else this.Fe(e) !== n && ( // Existence filter mismatch: We reset the mapping and raise a new
      // snapshot with `isFromCache:true`.
      this.De(e), this.Pe = this.Pe.add(e));
    }
  },
  /**
   * Converts the currently accumulated state into a remote event at the
   * provided snapshot version. Resets the accumulated changes before returning.
   */
  t.prototype.ke = function (t) {
    var e = this,
        n = new Map();
    this.Ie.forEach(function (r, i) {
      var o = e.Ne(i);

      if (o) {
        if (r.Yt && B(o.target)) {
          // Document queries for document that don't exist can produce an empty
          // result set. To update our local cache, we synthesize a document
          // delete if we have not previously received the document. This
          // resolves the limbo state of the document, removing it from
          // limboDocumentRefs.
          // TODO(dimond): Ideally we would have an explicit lookup target
          // instead resulting in an explicit delete message and we could
          // remove this special logic.
          var s = new V(o.target.path);
          null !== e.Ae.get(s) || e.$e(i, s) || e.ye(i, s, new en(s, t));
        }

        r.ce && (n.set(i, r.le()), r._e());
      }
    });
    var r = ct(); // We extract the set of limbo-only document updates as the GC logic
    // special-cases documents that do not appear in the target cache.
    // TODO(gsoltis): Expand on this comment once GC is available in the JS
    // client.

    this.Re.forEach(function (t, n) {
      var i = !0;
      n.Dt(function (t) {
        var n = e.Ne(t);
        return !n || 2
        /* LimboResolution */
        === n.X || (i = !1, !1);
      }), i && (r = r.add(t));
    });
    var i = new yt(t, n, this.Pe, this.Ae, r);
    return this.Ae = rt(), this.Re = It(), this.Pe = new tt(m), i;
  },
  /**
   * Adds the provided document to the internal list of document updates and
   * its document key to the given target's mapping.
   */
  // Visible for testing.
  t.prototype.Ve = function (t, e) {
    if (this.Se(t)) {
      var n = this.$e(t, e.key) ? 2
      /* Modified */
      : 0
      /* Added */
      ;
      this.ve(t).fe(e.key, n), this.Ae = this.Ae.st(e.key, e), this.Re = this.Re.st(e.key, this.xe(e.key).add(t));
    }
  },
  /**
   * Removes the provided document from the target mapping. If the
   * document no longer matches the target, but the document's state is still
   * known (e.g. we know that the document was deleted or we received the change
   * that caused the filter mismatch), the new document can be provided
   * to update the remote document cache.
   */
  // Visible for testing.
  t.prototype.ye = function (t, e, n) {
    if (this.Se(t)) {
      var r = this.ve(t);
      this.$e(t, e) ? r.fe(e, 1
      /* Removed */
      ) : // The document may have entered and left the target before we raised a
      // snapshot, so we can just ignore the change.
      r.de(e), this.Re = this.Re.st(e, this.xe(e).delete(t)), n && (this.Ae = this.Ae.st(e, n));
    }
  }, t.prototype.removeTarget = function (t) {
    this.Ie.delete(t);
  },
  /**
   * Returns the current count of documents in the target. This includes both
   * the number of documents that the LocalStore considers to be part of the
   * target as well as any accumulated changes.
   */
  t.prototype.Fe = function (t) {
    var e = this.ve(t).le();
    return this.me.Oe(t).size + e.Jt.size - e.Zt.size;
  },
  /**
   * Increment the number of acks needed from watch before we can consider the
   * server to be 'in-sync' with the client's active targets.
   */
  t.prototype.we = function (t) {
    this.ve(t).we();
  }, t.prototype.ve = function (t) {
    var e = this.Ie.get(t);
    return e || (e = new _t(), this.Ie.set(t, e)), e;
  }, t.prototype.xe = function (t) {
    var e = this.Re.get(t);
    return e || (e = new tt(m), this.Re = this.Re.st(t, e)), e;
  },
  /**
   * Verifies that the user is still interested in this target (by calling
   * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
   * from watch.
   */
  t.prototype.Se = function (t) {
    var e = null !== this.Ne(t);
    return e || c("WatchChangeAggregator", "Detected inactive target", t), e;
  },
  /**
   * Returns the TargetData for an active target (i.e. a target that the user
   * is still interested in that has no outstanding target change requests).
   */
  t.prototype.Ne = function (t) {
    var e = this.Ie.get(t);
    return e && e.ae ? null : this.me.Me(t);
  },
  /**
   * Resets the state of a Watch target to its initial state (e.g. sets
   * 'current' to false, clears the resume token and removes its target mapping
   * from all documents).
   */
  t.prototype.De = function (t) {
    var e = this;
    this.Ie.set(t, new _t()), this.me.Oe(t).forEach(function (n) {
      e.ye(t, n,
      /*updatedDocument=*/
      null);
    });
  },
  /**
   * Returns whether the LocalStore considers the document to be part of the
   * specified target.
   */
  t.prototype.$e = function (t, e) {
    return this.me.Oe(t).has(e);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */


function It() {
  return new X(V.P);
}

function Et() {
  return new X(V.P);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */


function Tt(t) {
  var e, n;
  return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}
/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */

/**
 * Returns the local time at which this timestamp was first set.
 */


function Nt(t) {
  var e = Rt(t.mapValue.fields.__local_write_time__.timestampValue);
  return new x(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.


var At = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
/** Extracts the backend's type order for the provided value. */

function St(t) {
  return "nullValue" in t ? 0
  /* NullValue */
  : "booleanValue" in t ? 1
  /* BooleanValue */
  : "integerValue" in t || "doubleValue" in t ? 2
  /* NumberValue */
  : "timestampValue" in t ? 3
  /* TimestampValue */
  : "stringValue" in t ? 5
  /* StringValue */
  : "bytesValue" in t ? 6
  /* BlobValue */
  : "referenceValue" in t ? 7
  /* RefValue */
  : "geoPointValue" in t ? 8
  /* GeoPointValue */
  : "arrayValue" in t ? 9
  /* ArrayValue */
  : "mapValue" in t ? Tt(t) ? 4
  /* ServerTimestampValue */
  : 10
  /* ObjectValue */
  : p();
}
/** Tests `left` and `right` for equality based on the backend semantics. */


function Dt(t, e) {
  var n = St(t);
  if (n !== St(e)) return !1;

  switch (n) {
    case 0
    /* NullValue */
    :
      return !0;

    case 1
    /* BooleanValue */
    :
      return t.booleanValue === e.booleanValue;

    case 4
    /* ServerTimestampValue */
    :
      return Nt(t).isEqual(Nt(e));

    case 3
    /* TimestampValue */
    :
      return function (t, e) {
        if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) // Use string equality for ISO 8601 timestamps
          return t.timestampValue === e.timestampValue;
        var n = Rt(t.timestampValue),
            r = Rt(e.timestampValue);
        return n.seconds === r.seconds && n.nanos === r.nanos;
      }(t, e);

    case 5
    /* StringValue */
    :
      return t.stringValue === e.stringValue;

    case 6
    /* BlobValue */
    :
      return function (t, e) {
        return Vt(t.bytesValue).isEqual(Vt(e.bytesValue));
      }(t, e);

    case 7
    /* RefValue */
    :
      return t.referenceValue === e.referenceValue;

    case 8
    /* GeoPointValue */
    :
      return function (t, e) {
        return Ot(t.geoPointValue.latitude) === Ot(e.geoPointValue.latitude) && Ot(t.geoPointValue.longitude) === Ot(e.geoPointValue.longitude);
      }(t, e);

    case 2
    /* NumberValue */
    :
      return function (t, e) {
        if ("integerValue" in t && "integerValue" in e) return Ot(t.integerValue) === Ot(e.integerValue);

        if ("doubleValue" in t && "doubleValue" in e) {
          var n = Ot(t.doubleValue),
              r = Ot(e.doubleValue);
          return n === r ? C(n) === C(r) : isNaN(n) && isNaN(r);
        }

        return !1;
      }(t, e);

    case 9
    /* ArrayValue */
    :
      return w(t.arrayValue.values || [], e.arrayValue.values || [], Dt);

    case 10
    /* ObjectValue */
    :
      return function (t, e) {
        var n = t.mapValue.fields || {},
            r = e.mapValue.fields || {};
        if (E(n) !== E(r)) return !1;

        for (var i in n) {
          if (n.hasOwnProperty(i) && (void 0 === r[i] || !Dt(n[i], r[i]))) return !1;
        }

        return !0;
      }(t, e);

    default:
      return p();
  }
}

function xt(t, e) {
  return void 0 !== (t.values || []).find(function (t) {
    return Dt(t, e);
  });
}

function kt(t, e) {
  var n = St(t),
      r = St(e);
  if (n !== r) return m(n, r);

  switch (n) {
    case 0
    /* NullValue */
    :
      return 0;

    case 1
    /* BooleanValue */
    :
      return m(t.booleanValue, e.booleanValue);

    case 2
    /* NumberValue */
    :
      return function (t, e) {
        var n = Ot(t.integerValue || t.doubleValue),
            r = Ot(e.integerValue || e.doubleValue);
        return n < r ? -1 : n > r ? 1 : n === r ? 0 : // one or both are NaN.
        isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
      }(t, e);

    case 3
    /* TimestampValue */
    :
      return Lt(t.timestampValue, e.timestampValue);

    case 4
    /* ServerTimestampValue */
    :
      return Lt(Nt(t), Nt(e));

    case 5
    /* StringValue */
    :
      return m(t.stringValue, e.stringValue);

    case 6
    /* BlobValue */
    :
      return function (t, e) {
        var n = Vt(t),
            r = Vt(e);
        return n.o(r);
      }(t.bytesValue, e.bytesValue);

    case 7
    /* RefValue */
    :
      return function (t, e) {
        for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
          var o = m(n[i], r[i]);
          if (0 !== o) return o;
        }

        return m(n.length, r.length);
      }(t.referenceValue, e.referenceValue);

    case 8
    /* GeoPointValue */
    :
      return function (t, e) {
        var n = m(Ot(t.latitude), Ot(e.latitude));
        return 0 !== n ? n : m(Ot(t.longitude), Ot(e.longitude));
      }(t.geoPointValue, e.geoPointValue);

    case 9
    /* ArrayValue */
    :
      return function (t, e) {
        for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
          var o = kt(n[i], r[i]);
          if (o) return o;
        }

        return m(n.length, r.length);
      }(t.arrayValue, e.arrayValue);

    case 10
    /* ObjectValue */
    :
      return function (t, e) {
        var n = t.fields || {},
            r = Object.keys(n),
            i = e.fields || {},
            o = Object.keys(i); // Even though MapValues are likely sorted correctly based on their insertion
        // order (e.g. when received from the backend), local modifications can bring
        // elements out of order. We need to re-sort the elements to ensure that
        // canonical IDs are independent of insertion order.

        r.sort(), o.sort();

        for (var s = 0; s < r.length && s < o.length; ++s) {
          var u = m(r[s], o[s]);
          if (0 !== u) return u;
          var a = kt(n[r[s]], i[o[s]]);
          if (0 !== a) return a;
        }

        return m(r.length, o.length);
      }(t.mapValue, e.mapValue);

    default:
      throw p();
  }
}

function Lt(t, e) {
  if ("string" == typeof t && "string" == typeof e && t.length === e.length) return m(t, e);
  var n = Rt(t),
      r = Rt(e),
      i = m(n.seconds, r.seconds);
  return 0 !== i ? i : m(n.nanos, r.nanos);
}

function Pt(t) {
  return function t(e) {
    return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function (t) {
      var e = Rt(t);
      return "time(" + e.seconds + "," + e.nanos + ")";
    }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? Vt(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, V.U(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function (e) {
      for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
        var s = o[i];
        r ? r = !1 : n += ",", n += t(s);
      }

      return n + "]";
    }(e.arrayValue) : "mapValue" in e ? function (e) {
      for ( // Iteration order in JavaScript is not guaranteed. To ensure that we generate
      // matching canonical IDs for identical maps, we need to sort the keys.
      var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
        var s = o[i];
        r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
      }

      return n + "}";
    }(e.mapValue) : p();
    var n, r;
  }(t);
}

function Rt(t) {
  // The json interface (for the browser) will return an iso timestamp string,
  // while the proto js library (for node) will return a
  // google.protobuf.Timestamp instance.
  if (d(!!t), "string" == typeof t) {
    // The date string can have higher precision (nanos) than the Date class
    // (millis), so we do some custom parsing here.
    // Parse the nanos right out of the string.
    var e = 0,
        n = At.exec(t);

    if (d(!!n), n[1]) {
      // Pad the fraction out to 9 digits (nanos).
      var r = n[1];
      r = (r + "000000000").substr(0, 9), e = Number(r);
    } // Parse the date to get the seconds.


    var i = new Date(t);
    return {
      seconds: Math.floor(i.getTime() / 1e3),
      nanos: e
    };
  }

  return {
    seconds: Ot(t.seconds),
    nanos: Ot(t.nanos)
  };
}
/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */


function Ot(t) {
  // TODO(bjornick): Handle int64 greater than 53 bits.
  return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}
/** Converts the possible Proto types for Blobs into a ByteString. */


function Vt(t) {
  return "string" == typeof t ? z.fromBase64String(t) : z.fromUint8Array(t);
}
/** Returns a reference value for the provided database and key. */


function Ut(t, e) {
  return {
    referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.F()
  };
}
/** Returns true if `value` is an IntegerValue . */


function Ct(t) {
  return !!t && "integerValue" in t;
}
/** Returns true if `value` is a DoubleValue. */

/** Returns true if `value` is an ArrayValue. */


function qt(t) {
  return !!t && "arrayValue" in t;
}
/** Returns true if `value` is a NullValue. */


function Mt(t) {
  return !!t && "nullValue" in t;
}
/** Returns true if `value` is NaN. */


function Ft(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
/** Returns true if `value` is a MapValue. */


function Gt(t) {
  return !!t && "mapValue" in t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var jt = {
  asc: "ASCENDING",
  desc: "DESCENDING"
},
    Bt = {
  "<": "LESS_THAN",
  "<=": "LESS_THAN_OR_EQUAL",
  ">": "GREATER_THAN",
  ">=": "GREATER_THAN_OR_EQUAL",
  "==": "EQUAL",
  "!=": "NOT_EQUAL",
  "array-contains": "ARRAY_CONTAINS",
  in: "IN",
  "not-in": "NOT_IN",
  "array-contains-any": "ARRAY_CONTAINS_ANY"
},
    zt = function zt(t, e) {
  this.s = t, this.Le = e;
};
/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */

/**
 * Returns an IntegerValue for `value`.
 */


function Qt(t) {
  return {
    integerValue: "" + t
  };
}
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */


function Wt(t, e) {
  if (t.Le) {
    if (isNaN(e)) return {
      doubleValue: "NaN"
    };
    if (e === 1 / 0) return {
      doubleValue: "Infinity"
    };
    if (e === -1 / 0) return {
      doubleValue: "-Infinity"
    };
  }

  return {
    doubleValue: C(e) ? "-0" : e
  };
}
/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */


function Ht(t, e) {
  return q(e) ? Qt(e) : Wt(t, e);
}
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */


function Kt(t, e) {
  return t.Le ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
    seconds: "" + e.seconds,
    nanos: e.nanoseconds
  };
}
/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */


function Yt(t, e) {
  return t.Le ? e.toBase64() : e.toUint8Array();
}
/**
 * Returns a ByteString based on the proto string value.
 */


function Zt(t, e) {
  return Kt(t, e.A());
}

function Xt(t) {
  return d(!!t), k.m(function (t) {
    var e = Rt(t);
    return new x(e.seconds, e.nanos);
  }(t));
}

function $t(t, e) {
  return function (t) {
    return new P(["projects", t.projectId, "databases", t.database]);
  }(t).child("documents").child(e).F();
}

function Jt(t) {
  var e = P.k(t);
  return d(me(e)), e;
}

function te(t, e) {
  return $t(t.s, e.path);
}

function ee(t, e) {
  var n = Jt(e);
  return d(n.get(1) === t.s.projectId), d(!n.get(3) && !t.s.database || n.get(3) === t.s.database), new V(oe(n));
}

function ne(t, e) {
  return $t(t.s, e);
}

function re(t) {
  var e = Jt(t); // In v1beta1 queries for collections at the root did not have a trailing
  // "/documents". In v1 all resource paths contain "/documents". Preserve the
  // ability to read the v1beta1 form for compatibility with queries persisted
  // in the local target cache.

  return 4 === e.length ? P.$() : oe(e);
}

function ie(t) {
  return new P(["projects", t.s.projectId, "databases", t.s.database]).F();
}

function oe(t) {
  return d(t.length > 4 && "documents" === t.get(4)), t.V(5)
  /** Creates an api.Document from key and fields (but no create/update time) */
  ;
}

function se(t, e, n) {
  return {
    name: te(t, e),
    fields: n.proto.mapValue.fields
  };
}

function ue(t, e) {
  var n;
  if (e instanceof je) n = {
    update: se(t, e.key, e.value)
  };else if (e instanceof Ke) n = {
    delete: te(t, e.key)
  };else if (e instanceof Be) n = {
    update: se(t, e.key, e.data),
    updateMask: ge(e.qe)
  };else if (e instanceof Qe) n = {
    transform: {
      document: te(t, e.key),
      fieldTransforms: e.fieldTransforms.map(function (t) {
        return function (t, e) {
          var n = e.transform;
          if (n instanceof Ee) return {
            fieldPath: e.field.F(),
            setToServerValue: "REQUEST_TIME"
          };
          if (n instanceof Te) return {
            fieldPath: e.field.F(),
            appendMissingElements: {
              values: n.elements
            }
          };
          if (n instanceof Ae) return {
            fieldPath: e.field.F(),
            removeAllFromArray: {
              values: n.elements
            }
          };
          if (n instanceof De) return {
            fieldPath: e.field.F(),
            increment: n.Be
          };
          throw p();
        }(0, t);
      })
    }
  };else {
    if (!(e instanceof Ye)) return p();
    n = {
      verify: te(t, e.key)
    };
  }
  return e.Qe.Ue || (n.currentDocument = function (t, e) {
    return void 0 !== e.updateTime ? {
      updateTime: Zt(t, e.updateTime)
    } : void 0 !== e.exists ? {
      exists: e.exists
    } : p();
  }(t, e.Qe)), n;
}

function ae(t, e) {
  var n = e.currentDocument ? function (t) {
    return void 0 !== t.updateTime ? Oe.updateTime(Xt(t.updateTime)) : void 0 !== t.exists ? Oe.exists(t.exists) : Oe.We();
  }(e.currentDocument) : Oe.We();

  if (e.update) {
    e.update.name;
    var r = ee(t, e.update.name),
        i = new Ze({
      mapValue: {
        fields: e.update.fields
      }
    });

    if (e.updateMask) {
      var o = function (t) {
        var e = t.fieldPaths || [];
        return new Le(e.map(function (t) {
          return O.q(t);
        }));
      }(e.updateMask);

      return new Be(r, i, o, n);
    }

    return new je(r, i, n);
  }

  if (e.delete) {
    var s = ee(t, e.delete);
    return new Ke(s, n);
  }

  if (e.transform) {
    var u = ee(t, e.transform.document),
        a = e.transform.fieldTransforms.map(function (e) {
      return function (t, e) {
        var n = null;
        if ("setToServerValue" in e) d("REQUEST_TIME" === e.setToServerValue), n = new Ee();else if ("appendMissingElements" in e) {
          var r = e.appendMissingElements.values || [];
          n = new Te(r);
        } else if ("removeAllFromArray" in e) {
          var i = e.removeAllFromArray.values || [];
          n = new Ae(i);
        } else "increment" in e ? n = new De(t, e.increment) : p();
        var o = O.q(e.fieldPath);
        return new Pe(o, n);
      }(t, e);
    });
    return d(!0 === n.exists), new Qe(u, a);
  }

  if (e.verify) {
    var c = ee(t, e.verify);
    return new Ye(c, n);
  }

  return p();
}

function ce(t, e) {
  return {
    documents: [ne(t, e.path)]
  };
}

function he(t, e) {
  // Dissect the path into parent, collectionId, and optional key filter.
  var n = {
    structuredQuery: {}
  },
      r = e.path;
  null !== e.collectionGroup ? (n.parent = ne(t, r), n.structuredQuery.from = [{
    collectionId: e.collectionGroup,
    allDescendants: !0
  }]) : (n.parent = ne(t, r.p()), n.structuredQuery.from = [{
    collectionId: r.S()
  }]);

  var i = function (t) {
    if (0 !== t.length) {
      var e = t.map(function (t) {
        // visible for testing
        return function (t) {
          if ("=="
          /* EQUAL */
          === t.op) {
            if (Ft(t.value)) return {
              unaryFilter: {
                field: pe(t.field),
                op: "IS_NAN"
              }
            };
            if (Mt(t.value)) return {
              unaryFilter: {
                field: pe(t.field),
                op: "IS_NULL"
              }
            };
          } else if ("!="
          /* NOT_EQUAL */
          === t.op) {
            if (Ft(t.value)) return {
              unaryFilter: {
                field: pe(t.field),
                op: "IS_NOT_NAN"
              }
            };
            if (Mt(t.value)) return {
              unaryFilter: {
                field: pe(t.field),
                op: "IS_NOT_NULL"
              }
            };
          }

          return {
            fieldFilter: {
              field: pe(t.field),
              op: (e = t.op, Bt[e]),
              value: t.value
            }
          }; // visible for testing

          var e;
        }(t);
      });
      return 1 === e.length ? e[0] : {
        compositeFilter: {
          op: "AND",
          filters: e
        }
      };
    }
  }(e.filters);

  i && (n.structuredQuery.where = i);

  var o = function (t) {
    if (0 !== t.length) return t.map(function (t) {
      return {
        field: pe((e = t).field),
        direction: (n = e.dir, jt[n])
      }; // visible for testing

      var e, n;
    });
  }(e.orderBy);

  o && (n.structuredQuery.orderBy = o);

  var s = function (t, e) {
    return t.Le || U(e) ? e : {
      value: e
    };
  }(t, e.limit);

  return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = fe(e.startAt)), e.endAt && (n.structuredQuery.endAt = fe(e.endAt)), n;
}

function fe(t) {
  return {
    before: t.before,
    values: t.position
  };
}

function le(t) {
  var e = !!t.before,
      n = t.values || [];
  return new Dn(n, e);
} // visible for testing


function pe(t) {
  return {
    fieldPath: t.F()
  };
}

function de(t) {
  return O.q(t.fieldPath);
}

function ye(t) {
  return wn.create(de(t.fieldFilter.field), function (t) {
    switch (t) {
      case "EQUAL":
        return "=="
        /* EQUAL */
        ;

      case "NOT_EQUAL":
        return "!="
        /* NOT_EQUAL */
        ;

      case "GREATER_THAN":
        return ">"
        /* GREATER_THAN */
        ;

      case "GREATER_THAN_OR_EQUAL":
        return ">="
        /* GREATER_THAN_OR_EQUAL */
        ;

      case "LESS_THAN":
        return "<"
        /* LESS_THAN */
        ;

      case "LESS_THAN_OR_EQUAL":
        return "<="
        /* LESS_THAN_OR_EQUAL */
        ;

      case "ARRAY_CONTAINS":
        return "array-contains"
        /* ARRAY_CONTAINS */
        ;

      case "IN":
        return "in"
        /* IN */
        ;

      case "NOT_IN":
        return "not-in"
        /* NOT_IN */
        ;

      case "ARRAY_CONTAINS_ANY":
        return "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        ;

      case "OPERATOR_UNSPECIFIED":
      default:
        return p();
    }
  }(t.fieldFilter.op), t.fieldFilter.value);
}

function ve(t) {
  switch (t.unaryFilter.op) {
    case "IS_NAN":
      var e = de(t.unaryFilter.field);
      return wn.create(e, "=="
      /* EQUAL */
      , {
        doubleValue: NaN
      });

    case "IS_NULL":
      var n = de(t.unaryFilter.field);
      return wn.create(n, "=="
      /* EQUAL */
      , {
        nullValue: "NULL_VALUE"
      });

    case "IS_NOT_NAN":
      var r = de(t.unaryFilter.field);
      return wn.create(r, "!="
      /* NOT_EQUAL */
      , {
        doubleValue: NaN
      });

    case "IS_NOT_NULL":
      var i = de(t.unaryFilter.field);
      return wn.create(i, "!="
      /* NOT_EQUAL */
      , {
        nullValue: "NULL_VALUE"
      });

    case "OPERATOR_UNSPECIFIED":
    default:
      return p();
  }
}

function ge(t) {
  var e = [];
  return t.fields.forEach(function (t) {
    return e.push(t.F());
  }), {
    fieldPaths: e
  };
}

function me(t) {
  // Resource names have at least 4 components (project ID, database ID)
  return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Represents a transform within a TransformMutation. */


var we = function we() {
  // Make sure that the structural type of `TransformOperation` is unique.
  // See https://github.com/microsoft/TypeScript/issues/5451
  this.je = void 0;
};
/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */


function _e(t, e, n) {
  return t instanceof Ee ? function (t, e) {
    var n = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: t.seconds,
            nanos: t.nanoseconds
          }
        }
      }
    };
    return e && (n.fields.__previous_value__ = e), {
      mapValue: n
    };
  }(n, e) : t instanceof Te ? Ne(t, e) : t instanceof Ae ? Se(t, e) : function (t, e) {
    // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
    // precision and resolves overflows by reducing precision, we do not
    // manually cap overflows at 2^63.
    var n = Ie(t, e),
        r = xe(n) + xe(t.Be);
    return Ct(n) && Ct(t.Be) ? Qt(r) : Wt(t.serializer, r);
  }(t, e);
}
/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */


function be(t, e, n) {
  // The server just sends null as the transform result for array operations,
  // so we have to calculate a result the same as we do for local
  // applications.
  return t instanceof Te ? Ne(t, e) : t instanceof Ae ? Se(t, e) : n;
}
/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent transforms.
 */


function Ie(t, e) {
  return t instanceof De ? Ct(n = e) || function (t) {
    return !!t && "doubleValue" in t;
  }(n) ? e : {
    integerValue: 0
  } : null;
  var n;
}
/** Transforms a value into a server-generated timestamp. */


var Ee =
/** @class */
function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e.__extends(n, t), n;
}(we),
    Te =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).elements = e, n;
  }

  return e.__extends(n, t), n;
}(we);
/** Transforms an array value via a union operation. */


function Ne(t, e) {
  for (var n = ke(e), r = function r(t) {
    n.some(function (e) {
      return Dt(e, t);
    }) || n.push(t);
  }, i = 0, o = t.elements; i < o.length; i++) {
    r(o[i]);
  }

  return {
    arrayValue: {
      values: n
    }
  };
}
/** Transforms an array value via a remove operation. */


var Ae =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).elements = e, n;
  }

  return e.__extends(n, t), n;
}(we);

function Se(t, e) {
  for (var n = ke(e), r = function r(t) {
    n = n.filter(function (e) {
      return !Dt(e, t);
    });
  }, i = 0, o = t.elements; i < o.length; i++) {
    r(o[i]);
  }

  return {
    arrayValue: {
      values: n
    }
  };
}
/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */


var De =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).serializer = e, r.Be = n, r;
  }

  return e.__extends(n, t), n;
}(we);

function xe(t) {
  return Ot(t.integerValue || t.doubleValue);
}

function ke(t) {
  return qt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */


var Le =
/** @class */
function () {
  function t(t) {
    this.fields = t, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    t.sort(O.P)
    /**
    * Verifies that `fieldPath` is included by at least one field in this field
    * mask.
    *
    * This is an O(n) operation, where `n` is the size of the field mask.
    */
    ;
  }

  return t.prototype.Ke = function (t) {
    for (var e = 0, n = this.fields; e < n.length; e++) {
      if (n[e].D(t)) return !0;
    }

    return !1;
  }, t.prototype.isEqual = function (t) {
    return w(this.fields, t.fields, function (t, e) {
      return t.isEqual(e);
    });
  }, t;
}(),
    Pe = function Pe(t, e) {
  this.field = t, this.transform = e;
};
/** A field path and the TransformOperation to perform upon it. */

/** The result of successfully applying a mutation to the backend. */


var Re = function Re(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t,
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
  this.version = t, this.transformResults = e;
},
    Oe =
/** @class */
function () {
  function t(t, e) {
    this.updateTime = t, this.exists = e
    /** Creates a new empty Precondition. */
    ;
  }

  return t.We = function () {
    return new t();
  },
  /** Creates a new Precondition with an exists flag. */
  t.exists = function (e) {
    return new t(void 0, e);
  },
  /** Creates a new Precondition based on a version a document exists at. */
  t.updateTime = function (e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "Ue", {
    /** Returns whether this Precondition is empty. */
    get: function get() {
      return void 0 === this.updateTime && void 0 === this.exists;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) {
    return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
  }, t;
}();
/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */

/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */


function Ve(t, e) {
  return void 0 !== t.updateTime ? e instanceof tn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof tn;
}
/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */


var Ue = function Ue() {};
/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult The result of applying the mutation from the backend.
 * @return The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */


function Ce(t, e, n) {
  return t instanceof je ? function (t, e, n) {
    // Unlike applySetMutationToLocalView, if we're applying a mutation to a
    // remote document the server has accepted the mutation so the precondition
    // must have held.
    return new tn(t.key, n.version, t.value, {
      hasCommittedMutations: !0
    });
  }(t, 0, n) : t instanceof Be ? function (t, e, n) {
    if (!Ve(t.Qe, e)) // Since the mutation was not rejected, we know that the  precondition
      // matched on the backend. We therefore must not have the expected version
      // of the document in our cache and return an UnknownDocument with the
      // known updateTime.
      return new nn(t.key, n.version);
    var r = ze(t, e);
    return new tn(t.key, n.version, r, {
      hasCommittedMutations: !0
    });
  }(t, e, n) : t instanceof Qe ? function (t, e, n) {
    if (d(null != n.transformResults), !Ve(t.Qe, e)) // Since the mutation was not rejected, we know that the  precondition
      // matched on the backend. We therefore must not have the expected version
      // of the document in our cache and return an UnknownDocument with the
      // known updateTime.
      return new nn(t.key, n.version);

    var r = We(t, e),
        i =
    /**
    * Creates a list of "transform results" (a transform result is a field value
    * representing the result of applying a transform) for use after a
    * TransformMutation has been acknowledged by the server.
    *
    * @param fieldTransforms The field transforms to apply the result to.
    * @param baseDoc The document prior to applying this mutation batch.
    * @param serverTransformResults The transform results received by the server.
    * @return The transform results list.
    */
    function (t, e, n) {
      var r = [];
      d(t.length === n.length);

      for (var i = 0; i < n.length; i++) {
        var o = t[i],
            s = o.transform,
            u = null;
        e instanceof tn && (u = e.field(o.field)), r.push(be(s, u, n[i]));
      }

      return r;
    }(t.fieldTransforms, e, n.transformResults),
        o = n.version,
        s = He(t, r.data(), i);

    return new tn(t.key, o, s, {
      hasCommittedMutations: !0
    });
  }(t, e, n) : function (t, e, n) {
    // Unlike applyToLocalView, if we're applying a mutation to a remote
    // document the server has accepted the mutation so the precondition must
    // have held.
    return new en(t.key, n.version, {
      hasCommittedMutations: !0
    });
  }(t, 0, n);
}
/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @return The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */


function qe(t, e, n, r) {
  return t instanceof je ? function (t, e) {
    if (!Ve(t.Qe, e)) return e;
    var n = Ge(e);
    return new tn(t.key, n, t.value, {
      Ge: !0
    });
  }(t, e) : t instanceof Be ? function (t, e) {
    if (!Ve(t.Qe, e)) return e;
    var n = Ge(e),
        r = ze(t, e);
    return new tn(t.key, n, r, {
      Ge: !0
    });
  }(t, e) : t instanceof Qe ? function (t, e, n, r) {
    if (!Ve(t.Qe, e)) return e;

    var i = We(t, e),
        o = function (t, e, n, r) {
      for (var i = [], o = 0, s = t; o < s.length; o++) {
        var u = s[o],
            a = u.transform,
            c = null;
        n instanceof tn && (c = n.field(u.field)), null === c && r instanceof tn && ( // If the current document does not contain a value for the mutated
        // field, use the value that existed before applying this mutation
        // batch. This solves an edge case where a PatchMutation clears the
        // values in a nested map before the TransformMutation is applied.
        c = r.field(u.field)), i.push(_e(a, c, e));
      }

      return i;
    }(t.fieldTransforms, n, e, r),
        s = He(t, i.data(), o);

    return new tn(t.key, i.version, s, {
      Ge: !0
    });
  }(t, e, r, n) : function (t, e) {
    return Ve(t.Qe, e) ? new en(t.key, k.min()) : e;
  }(t, e);
}
/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent mutations.
 */


function Me(t, e) {
  return t instanceof Qe ? function (t, e) {
    for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
      var o = i[r],
          s = e instanceof tn ? e.field(o.field) : void 0,
          u = Ie(o.transform, s || null);
      null != u && (n = null == n ? new Xe().set(o.field, u) : n.set(o.field, u));
    }

    return n ? n.ze() : null;
  }(t, e) : null;
}

function Fe(t, e) {
  return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Qe.isEqual(e.Qe) && (0
  /* Set */
  === t.type ? t.value.isEqual(e.value) : 1
  /* Patch */
  === t.type ? t.data.isEqual(e.data) && t.qe.isEqual(e.qe) : 2
  /* Transform */
  !== t.type || w(t.fieldTransforms, t.fieldTransforms, function (t, e) {
    return function (t, e) {
      return t.field.isEqual(e.field) && function (t, e) {
        return t instanceof Te && e instanceof Te || t instanceof Ae && e instanceof Ae ? w(t.elements, e.elements, Dt) : t instanceof De && e instanceof De ? Dt(t.Be, e.Be) : t instanceof Ee && e instanceof Ee;
      }(t.transform, e.transform);
    }(t, e);
  }));
}
/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */


function Ge(t) {
  return t instanceof tn ? t.version : k.min();
}
/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */


var je =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).key = e, i.value = n, i.Qe = r, i.type = 0
    /* Set */
    , i;
  }

  return e.__extends(n, t), n;
}(Ue),
    Be =
/** @class */
function (t) {
  function n(e, n, r, i) {
    var o = this;
    return (o = t.call(this) || this).key = e, o.data = n, o.qe = r, o.Qe = i, o.type = 1
    /* Patch */
    , o;
  }

  return e.__extends(n, t), n;
}(Ue);

function ze(t, e) {
  return function (t, e) {
    var n = new Xe(e);
    return t.qe.fields.forEach(function (e) {
      if (!e._()) {
        var r = t.data.field(e);
        null !== r ? n.set(e, r) : n.delete(e);
      }
    }), n.ze();
  }(t, e instanceof tn ? e.data() : Ze.empty());
}

var Qe =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).key = e, r.fieldTransforms = n, r.type = 2
    /* Transform */
    , // NOTE: We set a precondition of exists: true as a safety-check, since we
    // always combine TransformMutations with a SetMutation or PatchMutation which
    // (if successful) should end up with an existing document.
    r.Qe = Oe.exists(!0), r;
  }

  return e.__extends(n, t), n;
}(Ue);

function We(t, e) {
  return e;
}

function He(t, e, n) {
  for (var r = new Xe(e), i = 0; i < t.fieldTransforms.length; i++) {
    var o = t.fieldTransforms[i];
    r.set(o.field, n[i]);
  }

  return r.ze();
}
/** A mutation that deletes the document at the given key. */


var Ke =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).key = e, r.Qe = n, r.type = 3
    /* Delete */
    , r;
  }

  return e.__extends(n, t), n;
}(Ue),
    Ye =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).key = e, r.Qe = n, r.type = 4
    /* Verify */
    , r;
  }

  return e.__extends(n, t), n;
}(Ue),
    Ze =
/** @class */
function () {
  function t(t) {
    this.proto = t;
  }

  return t.empty = function () {
    return new t({
      mapValue: {}
    });
  },
  /**
   * Returns the value at the given path or null.
   *
   * @param path the path to search
   * @return The value at the path or if there it doesn't exist.
   */
  t.prototype.field = function (t) {
    if (t._()) return this.proto;

    for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
      if (!e.mapValue.fields) return null;
      if (!Gt(e = e.mapValue.fields[t.get(n)])) return null;
    }

    return (e = (e.mapValue.fields || {})[t.S()]) || null;
  }, t.prototype.isEqual = function (t) {
    return Dt(this.proto, t.proto);
  }, t;
}(),
    Xe =
/** @class */
function () {
  /**
   * @param baseObject The object to mutate.
   */
  function t(t) {
    void 0 === t && (t = Ze.empty()), this.He = t,
    /** A map that contains the accumulated changes in this builder. */
    this.Ye = new Map();
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path The field path to set.
   * @param value The value to set.
   * @return The current Builder instance.
   */


  return t.prototype.set = function (t, e) {
    return this.Je(t, e), this;
  },
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path The field path to remove.
   * @return The current Builder instance.
   */
  t.prototype.delete = function (t) {
    return this.Je(t, null), this;
  },
  /**
   * Adds `value` to the overlay map at `path`. Creates nested map entries if
   * needed.
   */
  t.prototype.Je = function (t, e) {
    for (var n = this.Ye, r = 0; r < t.length - 1; ++r) {
      var i = t.get(r),
          o = n.get(i);
      o instanceof Map ? // Re-use a previously created map
      n = o : o && 10
      /* ObjectValue */
      === St(o) ? ( // Convert the existing Protobuf MapValue into a map
      o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : ( // Create an empty map to represent the current nesting level
      o = new Map(), n.set(i, o), n = o);
    }

    n.set(t.S(), e);
  },
  /** Returns an ObjectValue with all mutations applied. */
  t.prototype.ze = function () {
    var t = this.Xe(O.$(), this.Ye);
    return null != t ? new Ze(t) : this.He;
  },
  /**
   * Applies any overlays from `currentOverlays` that exist at `currentPath`
   * and returns the merged data at `currentPath` (or null if there were no
   * changes).
   *
   * @param currentPath The path at the current nesting level. Can be set to
   * FieldValue.emptyPath() to represent the root.
   * @param currentOverlays The overlays at the current nesting level in the
   * same format as `overlayMap`.
   * @return The merged data at `currentPath` or null if no modifications
   * were applied.
   */
  t.prototype.Xe = function (t, e) {
    var n = this,
        r = !1,
        i = this.He.field(t),
        o = Gt(i) ? // If there is already data at the current path, base our
    Object.assign({}, i.mapValue.fields) : {};
    return e.forEach(function (e, i) {
      if (e instanceof Map) {
        var s = n.Xe(t.child(i), e);
        null != s && (o[i] = s, r = !0);
      } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
    }), r ? {
      mapValue: {
        fields: o
      }
    } : null;
  }, t;
}();
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */


function $e(t) {
  var e = [];
  return T(t.fields || {}, function (t, n) {
    var r = new O([t]);

    if (Gt(n)) {
      var i = $e(n.mapValue).fields;
      if (0 === i.length) // Preserve the empty map by adding it to the FieldMask.
        e.push(r);else // For nested and non-empty ObjectValues, add the FieldPath of the
        // leaf nodes.
        for (var o = 0, s = i; o < s.length; o++) {
          var u = s[o];
          e.push(r.child(u));
        }
    } else // For nested and non-empty ObjectValues, add the FieldPath of the leaf
      // nodes.
      e.push(r);
  }), new Le(e)
  /**
  * @license
  * Copyright 2017 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */

  /**
  * The result of a lookup for a given path may be an existing document or a
  * marker that this document does not exist at a given version.
  */
  ;
}

var Je = function Je(t, e) {
  this.key = t, this.version = e;
},
    tn =
/** @class */
function (t) {
  function n(e, n, r, i) {
    var o = this;
    return (o = t.call(this, e, n) || this).Ze = r, o.Ge = !!i.Ge, o.hasCommittedMutations = !!i.hasCommittedMutations, o;
  }

  return e.__extends(n, t), n.prototype.field = function (t) {
    return this.Ze.field(t);
  }, n.prototype.data = function () {
    return this.Ze;
  }, n.prototype.tn = function () {
    return this.Ze.proto;
  }, n.prototype.isEqual = function (t) {
    return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ge === t.Ge && this.hasCommittedMutations === t.hasCommittedMutations && this.Ze.isEqual(t.Ze);
  }, n.prototype.toString = function () {
    return "Document(" + this.key + ", " + this.version + ", " + this.Ze.toString() + ", {hasLocalMutations: " + this.Ge + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
  }, Object.defineProperty(n.prototype, "hasPendingWrites", {
    get: function get() {
      return this.Ge || this.hasCommittedMutations;
    },
    enumerable: !1,
    configurable: !0
  }), n;
}(Je),
    en =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), i;
  }

  return e.__extends(n, t), n.prototype.toString = function () {
    return "NoDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(n.prototype, "hasPendingWrites", {
    get: function get() {
      return this.hasCommittedMutations;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.isEqual = function (t) {
    return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, n;
}(Je),
    nn =
/** @class */
function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e.__extends(n, t), n.prototype.toString = function () {
    return "UnknownDocument(" + this.key + ", " + this.version + ")";
  }, Object.defineProperty(n.prototype, "hasPendingWrites", {
    get: function get() {
      return !0;
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.isEqual = function (t) {
    return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
  }, n;
}(Je);
/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Casts `obj` to `T`. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 */


function rn(t, // eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
  if (!(t instanceof e)) throw e.name === t.constructor.name ? new D(S.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass '" + e.name + "' from a different Firestore SDK?") : new D(S.INVALID_ARGUMENT, "Expected type '" + e.name + "', but was '" + t.constructor.name + "'");
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */


var on =
/** @class */
function () {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  function t(t, e, n, r, i, o
  /* First */
  , s, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.en = n, this.filters = r, this.limit = i, this.nn = o, this.startAt = s, this.endAt = u, this.sn = null, // The corresponding `Target` of this `Query` instance.
    this.rn = null, this.startAt, this.endAt;
  }
  /**
   * Helper to convert a collection group query into a collection query at a
   * specific path. This is used when executing collection group queries, since
   * we have to split the query into a set of collection queries at multiple
   * paths.
   */


  return t.prototype.on = function (e) {
    return new t(e,
    /*collectionGroup=*/
    null, this.en.slice(), this.filters.slice(), this.limit, this.nn, this.startAt, this.endAt);
  }, t.prototype.hn = function () {
    return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.en.length || 1 === this.en.length && this.en[0].field.M());
  }, t.prototype.an = function () {
    return !U(this.limit) && "F"
    /* First */
    === this.nn;
  }, t.prototype.cn = function () {
    return !U(this.limit) && "L"
    /* Last */
    === this.nn;
  }, t.prototype.un = function () {
    return this.en.length > 0 ? this.en[0].field : null;
  }, t.prototype.ln = function () {
    for (var t = 0, e = this.filters; t < e.length; t++) {
      var n = e[t];
      if (n._n()) return n.field;
    }

    return null;
  }, t.prototype.fn = function (t) {
    for (var e = 0, n = this.filters; e < n.length; e++) {
      var r = n[e];
      if (t.indexOf(r.op) >= 0) return r.op;
    }

    return null;
  }, t;
}();
/** Creates a new Query instance with the options provided. */


function sn(t, e, n, r, i, o, s, u) {
  return new on(t, e, n, r, i, o, s, u);
}
/** Creates a new Query for a query that matches all documents at `path` */


function un(t) {
  return new on(t);
}
/**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */

/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */


function an(t) {
  return null !== t.collectionGroup;
}
/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */


function cn(t) {
  var e = rn(t, on);

  if (null === e.sn) {
    e.sn = [];
    var n = e.ln(),
        r = e.un();
    if (null !== n && null === r) // In order to implicitly add key ordering, we must also add the
      // inequality filter field for it to be a valid query.
      // Note that the default inequality field and key ordering is ascending.
      n.M() || e.sn.push(new Pn(n)), e.sn.push(new Pn(O.L(), "asc"
      /* ASCENDING */
      ));else {
      for (var i = !1, o = 0, s = e.en; o < s.length; o++) {
        var u = s[o];
        e.sn.push(u), u.field.M() && (i = !0);
      }

      if (!i) {
        // The order of the implicit key ordering always matches the last
        // explicit order by
        var a = e.en.length > 0 ? e.en[e.en.length - 1].dir : "asc"
        /* ASCENDING */
        ;
        e.sn.push(new Pn(O.L(), a));
      }
    }
  }

  return e.sn;
}
/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */


function hn(t) {
  var e = rn(t, on);
  if (!e.rn) if ("F"
  /* First */
  === e.nn) e.rn = F(e.path, e.collectionGroup, cn(e), e.filters, e.limit, e.startAt, e.endAt);else {
    for ( // Flip the orderBy directions since we want the last results
    var n = [], r = 0, i = cn(e); r < i.length; r++) {
      var o = i[r],
          s = "desc"
      /* DESCENDING */
      === o.dir ? "asc"
      /* ASCENDING */
      : "desc"
      /* DESCENDING */
      ;
      n.push(new Pn(o.field, s));
    } // We need to swap the cursors to match the now-flipped query ordering.


    var u = e.endAt ? new Dn(e.endAt.position, !e.endAt.before) : null,
        a = e.startAt ? new Dn(e.startAt.position, !e.startAt.before) : null; // Now return as a LimitType.First query.

    e.rn = F(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
  }
  return e.rn;
}

function fn(t, e, n) {
  return new on(t.path, t.collectionGroup, t.en.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function ln(t, e) {
  return new on(t.path, t.collectionGroup, t.en.slice(), t.filters.slice(), t.limit, t.nn, e, t.endAt);
}

function pn(t, e) {
  return new on(t.path, t.collectionGroup, t.en.slice(), t.filters.slice(), t.limit, t.nn, t.startAt, e);
}

function dn(t, e) {
  return j(hn(t), hn(e)) && t.nn === e.nn;
} // TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.


function yn(t) {
  return G(hn(t)) + "|lt:" + t.nn;
}

function vn(t) {
  return "Query(target=" + function (t) {
    var e = t.path.F();
    return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), t.filters.length > 0 && (e += ", filters: [" + t.filters.map(function (t) {
      return (e = t).field.F() + " " + e.op + " " + Pt(e.value);
      /** Returns a debug description for `filter`. */

      var e;
      /** Filter that matches on key fields (i.e. '__name__'). */
    }).join(", ") + "]"), U(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map(function (t) {
      return (e = t).field.F() + " (" + e.dir + ")";
      var e;
    }).join(", ") + "]"), t.startAt && (e += ", startAt: " + xn(t.startAt)), t.endAt && (e += ", endAt: " + xn(t.endAt)), "Target(" + e + ")";
  }(hn(t)) + "; limitType=" + t.nn + ")";
}
/** Returns whether `doc` matches the constraints of `query`. */


function gn(t, e) {
  return function (t, e) {
    var n = e.key.path;
    return null !== t.collectionGroup ? e.key.W(t.collectionGroup) && t.path.D(n) : V.j(t.path) ? t.path.isEqual(n) : t.path.C(n);
  }(t, e) && function (t, e) {
    for (var n = 0, r = t.en; n < r.length; n++) {
      var i = r[n]; // order by key always matches

      if (!i.field.M() && null === e.field(i.field)) return !1;
    }

    return !0;
  }(t, e) && function (t, e) {
    for (var n = 0, r = t.filters; n < r.length; n++) {
      if (!r[n].matches(e)) return !1;
    }

    return !0;
  }(t, e) && function (t, e) {
    return !(t.startAt && !kn(t.startAt, cn(t), e)) && (!t.endAt || !kn(t.endAt, cn(t), e));
  }(t, e);
}

function mn(t) {
  return function (e, n) {
    for (var r = !1, i = 0, o = cn(t); i < o.length; i++) {
      var s = o[i],
          u = Rn(s, e, n);
      if (0 !== u) return u;
      r = r || s.field.M();
    }

    return 0;
  };
}

var wn =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
  }
  /**
   * Creates a filter based on the provided arguments.
   */


  return e.__extends(n, t), n.create = function (t, e, r) {
    if (t.M()) return "in"
    /* IN */
    === e || "not-in"
    /* NOT_IN */
    === e ? this.dn(t, e, r) : new _n(t, e, r);

    if (Mt(r)) {
      if ("=="
      /* EQUAL */
      !== e && "!="
      /* NOT_EQUAL */
      !== e) // TODO(ne-queries): Update error message to include != comparison.
        throw new D(S.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
      return new n(t, e, r);
    }

    if (Ft(r)) {
      if ("=="
      /* EQUAL */
      !== e && "!="
      /* NOT_EQUAL */
      !== e) // TODO(ne-queries): Update error message to include != comparison.
        throw new D(S.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
      return new n(t, e, r);
    }

    return "array-contains"
    /* ARRAY_CONTAINS */
    === e ? new Tn(t, r) : "in"
    /* IN */
    === e ? new Nn(t, r) : "not-in"
    /* NOT_IN */
    === e ? new An(t, r) : "array-contains-any"
    /* ARRAY_CONTAINS_ANY */
    === e ? new Sn(t, r) : new n(t, e, r);
  }, n.dn = function (t, e, n) {
    return "in"
    /* IN */
    === e ? new bn(t, n) : new In(t, n);
  }, n.prototype.matches = function (t) {
    var e = t.field(this.field); // Types do not have to match in NOT_EQUAL filters.

    return "!="
    /* NOT_EQUAL */
    === this.op ? null !== e && this.wn(kt(e, this.value)) : null !== e && St(this.value) === St(e) && this.wn(kt(e, this.value)); // Only compare types with matching backend order (such as double and int).
  }, n.prototype.wn = function (t) {
    switch (this.op) {
      case "<"
      /* LESS_THAN */
      :
        return t < 0;

      case "<="
      /* LESS_THAN_OR_EQUAL */
      :
        return t <= 0;

      case "=="
      /* EQUAL */
      :
        return 0 === t;

      case "!="
      /* NOT_EQUAL */
      :
        return 0 !== t;

      case ">"
      /* GREATER_THAN */
      :
        return t > 0;

      case ">="
      /* GREATER_THAN_OR_EQUAL */
      :
        return t >= 0;

      default:
        return p();
    }
  }, n.prototype._n = function () {
    return ["<"
    /* LESS_THAN */
    , "<="
    /* LESS_THAN_OR_EQUAL */
    , ">"
    /* GREATER_THAN */
    , ">="
    /* GREATER_THAN_OR_EQUAL */
    , "!="
    /* NOT_EQUAL */
    ].indexOf(this.op) >= 0;
  }, n;
}(function () {});

var _n =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    return (i = t.call(this, e, n, r) || this).key = V.U(r.referenceValue), i;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    var e = V.P(t.key, this.key);
    return this.wn(e);
  }, n;
}(wn),
    bn =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this, e, "in"
    /* IN */
    , n) || this).keys = En("in"
    /* IN */
    , n), r;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    return this.keys.some(function (e) {
      return e.isEqual(t.key);
    });
  }, n;
}(wn),
    In =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this, e, "not-in"
    /* NOT_IN */
    , n) || this).keys = En("not-in"
    /* NOT_IN */
    , n), r;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    return !this.keys.some(function (e) {
      return e.isEqual(t.key);
    });
  }, n;
}(wn);
/** Filter that matches on key fields within an array. */


function En(t, e) {
  var n;
  return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map(function (t) {
    return V.U(t.referenceValue);
  });
}
/** A Filter that implements the array-contains operator. */


var Tn =
/** @class */
function (t) {
  function n(e, n) {
    return t.call(this, e, "array-contains"
    /* ARRAY_CONTAINS */
    , n) || this;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    var e = t.field(this.field);
    return qt(e) && xt(e.arrayValue, this.value);
  }, n;
}(wn),
    Nn =
/** @class */
function (t) {
  function n(e, n) {
    return t.call(this, e, "in"
    /* IN */
    , n) || this;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    var e = t.field(this.field);
    return null !== e && xt(this.value.arrayValue, e);
  }, n;
}(wn),
    An =
/** @class */
function (t) {
  function n(e, n) {
    return t.call(this, e, "not-in"
    /* NOT_IN */
    , n) || this;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    var e = t.field(this.field);
    return null !== e && !xt(this.value.arrayValue, e);
  }, n;
}(wn),
    Sn =
/** @class */
function (t) {
  function n(e, n) {
    return t.call(this, e, "array-contains-any"
    /* ARRAY_CONTAINS_ANY */
    , n) || this;
  }

  return e.__extends(n, t), n.prototype.matches = function (t) {
    var e = this,
        n = t.field(this.field);
    return !(!qt(n) || !n.arrayValue.values) && n.arrayValue.values.some(function (t) {
      return xt(e.value.arrayValue, t);
    });
  }, n;
}(wn),
    Dn = function Dn(t, e) {
  this.position = t, this.before = e;
};
/** A Filter that implements the IN operator. */


function xn(t) {
  // TODO(b/29183165): Make this collision robust.
  return (t.before ? "b" : "a") + ":" + t.position.map(function (t) {
    return Pt(t);
  }).join(",");
}
/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */


function kn(t, e, n) {
  for (var r = 0, i = 0; i < t.position.length; i++) {
    var o = e[i],
        s = t.position[i];
    if (r = o.field.M() ? V.P(V.U(s.referenceValue), n.key) : kt(s, n.field(o.field)), "desc"
    /* DESCENDING */
    === o.dir && (r *= -1), 0 !== r) break;
  }

  return t.before ? r <= 0 : r < 0;
}

function Ln(t, e) {
  if (null === t) return null === e;
  if (null === e) return !1;
  if (t.before !== e.before || t.position.length !== e.position.length) return !1;

  for (var n = 0; n < t.position.length; n++) {
    if (!Dt(t.position[n], e.position[n])) return !1;
  }

  return !0;
}
/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */


var Pn = function Pn(t, e
/* ASCENDING */
) {
  void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function Rn(t, e, n) {
  var r = t.field.M() ? V.P(e.key, n.key) : function (t, e, n) {
    var r = e.field(t),
        i = n.field(t);
    return null !== r && null !== i ? kt(r, i) : p();
  }(t.field, e, n);

  switch (t.dir) {
    case "asc"
    /* ASCENDING */
    :
      return r;

    case "desc"
    /* DESCENDING */
    :
      return -1 * r;

    default:
      return p();
  }
}

function On(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A batch of mutations that will be sent as one unit to the backend.
 */


var Vn =
/** @class */
function () {
  /**
   * @param batchId The unique ID of this mutation batch.
   * @param localWriteTime The original write time of this mutation.
   * @param baseMutations Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  function t(t, e, n, r) {
    this.batchId = t, this.Tn = e, this.baseMutations = n, this.mutations = r
    /**
    * Applies all the mutations in this MutationBatch to the specified document
    * to create a new remote document
    *
    * @param docKey The key of the document to apply mutations to.
    * @param maybeDoc The document to apply mutations to.
    * @param batchResult The result of applying the MutationBatch to the
    * backend.
    */
    ;
  }

  return t.prototype.En = function (t, e, n) {
    for (var r = n.mn, i = 0; i < this.mutations.length; i++) {
      var o = this.mutations[i];
      o.key.isEqual(t) && (e = Ce(o, e, r[i]));
    }

    return e;
  },
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param docKey The key of the document to apply mutations to.
   * @param maybeDoc The document to apply mutations to.
   */
  t.prototype.In = function (t, e) {
    // First, apply the base state. This allows us to apply non-idempotent
    // transform against a consistent set of values.
    for (var n = 0, r = this.baseMutations; n < r.length; n++) {
      var i = r[n];
      i.key.isEqual(t) && (e = qe(i, e, e, this.Tn));
    } // Second, apply all user-provided mutations.


    for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
      var a = u[s];
      a.key.isEqual(t) && (e = qe(a, e, o, this.Tn));
    }

    return e;
  },
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch.
   */
  t.prototype.An = function (t) {
    var e = this,
        n = t; // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
    // directly (as done in `applyToLocalView()`), we can reduce the complexity
    // to O(n).

    return this.mutations.forEach(function (r) {
      var i = e.In(r.key, t.get(r.key));
      i && (n = n.st(r.key, i));
    }), n;
  }, t.prototype.keys = function () {
    return this.mutations.reduce(function (t, e) {
      return t.add(e.key);
    }, ct());
  }, t.prototype.isEqual = function (t) {
    return this.batchId === t.batchId && w(this.mutations, t.mutations, function (t, e) {
      return Fe(t, e);
    }) && w(this.baseMutations, t.baseMutations, function (t, e) {
      return Fe(t, e);
    });
  }, t;
}(),
    Un =
/** @class */
function () {
  function t(t, e, n,
  /**
   * A pre-computed mapping from each mutated document to the resulting
   * version.
   */
  r) {
    this.batch = t, this.Rn = e, this.mn = n, this.Pn = r
    /**
    * Creates a new MutationBatchResult for the given batch and results. There
    * must be one result for each mutation in the batch. This static factory
    * caches a document=>version mapping (docVersions).
    */
    ;
  }

  return t.from = function (e, n, r) {
    d(e.mutations.length === r.length);

    for (var i = ut, o = e.mutations, s = 0; s < o.length; s++) {
      i = i.st(o[s].key, r[s].version);
    }

    return new t(e, n, r, i);
  }, t;
}(),
    Cn =
/** @class */
function () {
  function t(t) {
    var e = this; // NOTE: next/catchCallback will always point to our own wrapper functions,
    // not the user's raw next() or catch() callbacks.

    this.gn = null, this.Vn = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.yn = !1, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.pn = !1, t(function (t) {
      e.yn = !0, e.result = t, e.gn && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      e.gn(t);
    }, function (t) {
      e.yn = !0, e.error = t, e.Vn && e.Vn(t);
    });
  }

  return t.prototype.catch = function (t) {
    return this.next(void 0, t);
  }, t.prototype.next = function (e, n) {
    var r = this;
    return this.pn && p(), this.pn = !0, this.yn ? this.error ? this.bn(n, this.error) : this.vn(e, this.result) : new t(function (t, i) {
      r.gn = function (n) {
        r.vn(e, n).next(t, i);
      }, r.Vn = function (e) {
        r.bn(n, e).next(t, i);
      };
    });
  }, t.prototype.Sn = function () {
    var t = this;
    return new Promise(function (e, n) {
      t.next(e, n);
    });
  }, t.prototype.Dn = function (e) {
    try {
      var n = e();
      return n instanceof t ? n : t.resolve(n);
    } catch (e) {
      return t.reject(e);
    }
  }, t.prototype.vn = function (e, n) {
    return e ? this.Dn(function () {
      return e(n);
    }) : t.resolve(n);
  }, t.prototype.bn = function (e, n) {
    return e ? this.Dn(function () {
      return e(n);
    }) : t.reject(n);
  }, t.resolve = function (e) {
    return new t(function (t, n) {
      t(e);
    });
  }, t.reject = function (e) {
    return new t(function (t, n) {
      n(e);
    });
  }, t.Cn = function ( // Accept all Promise types in waitFor().
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  e) {
    return new t(function (t, n) {
      var r = 0,
          i = 0,
          o = !1;
      e.forEach(function (e) {
        ++r, e.next(function () {
          ++i, o && i === r && t();
        }, function (t) {
          return n(t);
        });
      }), o = !0, i === r && t();
    });
  },
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  t.Nn = function (e) {
    for (var n = t.resolve(!1), r = function r(e) {
      n = n.next(function (n) {
        return n ? t.resolve(n) : e();
      });
    }, i = 0, o = e; i < o.length; i++) {
      r(o[i]);
    }

    return n;
  }, t.forEach = function (t, e) {
    var n = this,
        r = [];
    return t.forEach(function (t, i) {
      r.push(e.call(n, t, i));
    }), this.Cn(r);
  }, t;
}(),
    qn =
/** @class */
function () {
  function t() {
    // A mapping of document key to the new cache entry that should be written (or null if any
    // existing cache entry should be removed).
    this.Fn = new A(function (t) {
      return t.toString();
    }, function (t, e) {
      return t.isEqual(e);
    }), this.kn = !1;
  }

  return Object.defineProperty(t.prototype, "readTime", {
    get: function get() {
      return this.$n;
    },
    set: function set(t) {
      this.$n = t;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  t.prototype.xn = function (t, e) {
    this.On(), this.readTime = e, this.Fn.set(t.key, t);
  },
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  t.prototype.Mn = function (t, e) {
    this.On(), e && (this.readTime = e), this.Fn.set(t, null);
  },
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction The transaction in which to perform any persistence
   *     operations.
   * @param documentKey The key of the entry to look up.
   * @return The cached Document or NoDocument entry, or null if we have nothing
   * cached.
   */
  t.prototype.Ln = function (t, e) {
    this.On();
    var n = this.Fn.get(e);
    return void 0 !== n ? Cn.resolve(n) : this.qn(t, e);
  },
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys The keys of the entries to look up.
   * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
   *     entry cannot be found, the corresponding key will be mapped to a null
   *     value.
   */
  t.prototype.getEntries = function (t, e) {
    return this.Bn(t, e);
  },
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  t.prototype.apply = function (t) {
    return this.On(), this.kn = !0, this.Un(t);
  },
  /** Helper to assert this.changes is not null  */
  t.prototype.On = function () {}, t;
}(),
    Mn = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
    Fn =
/** @class */
function () {
  function t() {
    this.Qn = [];
  }

  return t.prototype.Wn = function (t) {
    this.Qn.push(t);
  }, t.prototype.jn = function () {
    this.Qn.forEach(function (t) {
      return t();
    });
  }, t;
}(),
    Gn =
/** @class */
function () {
  function t(t, e, n) {
    this.Kn = t, this.Gn = e, this.zn = n
    /**
    * Get the local view of the document identified by `key`.
    *
    * @return Local view of the document or null if we don't have any cached
    * state for it.
    */
    ;
  }

  return t.prototype.Hn = function (t, e) {
    var n = this;
    return this.Gn.Yn(t, e).next(function (r) {
      return n.Jn(t, e, r);
    });
  },
  /** Internal version of `getDocument` that allows reusing batches. */
  t.prototype.Jn = function (t, e, n) {
    return this.Kn.Ln(t, e).next(function (t) {
      for (var r = 0, i = n; r < i.length; r++) {
        t = i[r].In(e, t);
      }

      return t;
    });
  }, // Returns the view of the given `docs` as they would appear after applying
  // all mutations in the given `batches`.
  t.prototype.Xn = function (t, e, n) {
    var r = it();
    return e.forEach(function (t, e) {
      for (var i = 0, o = n; i < o.length; i++) {
        e = o[i].In(t, e);
      }

      r = r.st(t, e);
    }), r;
  },
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  t.prototype.Zn = function (t, e) {
    var n = this;
    return this.Kn.getEntries(t, e).next(function (e) {
      return n.ts(t, e);
    });
  },
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   */
  t.prototype.ts = function (t, e) {
    var n = this;
    return this.Gn.es(t, e).next(function (r) {
      var i = n.Xn(t, e, r),
          o = rt();
      return i.forEach(function (t, e) {
        // TODO(http://b/32275378): Don't conflate missing / deleted.
        e || (e = new en(t, k.min())), o = o.st(t, e);
      }), o;
    });
  },
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction The persistence transaction.
   * @param query The query to match documents against.
   * @param sinceReadTime If not set to SnapshotVersion.min(), return only
   *     documents that have been read since this snapshot version (exclusive).
   */
  t.prototype.ns = function (t, e, n) {
    /**
    * Returns whether the query matches a single document by path (rather than a
    * collection).
    */
    return function (t) {
      return V.j(t.path) && null === t.collectionGroup && 0 === t.filters.length;
    }(e) ? this.ss(t, e.path) : an(e) ? this.rs(t, e, n) : this.os(t, e, n);
  }, t.prototype.ss = function (t, e) {
    // Just do a simple document lookup.
    return this.Hn(t, new V(e)).next(function (t) {
      var e = st();
      return t instanceof tn && (e = e.st(t.key, t)), e;
    });
  }, t.prototype.rs = function (t, e, n) {
    var r = this,
        i = e.collectionGroup,
        o = st();
    return this.zn.hs(t, i).next(function (s) {
      return Cn.forEach(s, function (s) {
        var u = e.on(s.child(i));
        return r.os(t, u, n).next(function (t) {
          t.forEach(function (t, e) {
            o = o.st(t, e);
          });
        });
      }).next(function () {
        return o;
      });
    });
  }, t.prototype.os = function (t, e, n) {
    var r,
        i,
        o = this; // Query the remote documents and overlay mutations.

    return this.Kn.ns(t, e, n).next(function (n) {
      return r = n, o.Gn.as(t, e);
    }).next(function (e) {
      return i = e, o.cs(t, i, r).next(function (t) {
        r = t;

        for (var e = 0, n = i; e < n.length; e++) {
          for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
            var a = u[s],
                c = a.key,
                h = r.get(c),
                f = qe(a, h, h, o.Tn);
            r = f instanceof tn ? r.st(c, f) : r.remove(c);
          }
        }
      });
    }).next(function () {
      // Finally, filter out any documents that don't actually match
      // the query.
      return r.forEach(function (t, n) {
        gn(e, n) || (r = r.remove(t));
      }), r;
    });
  }, t.prototype.cs = function (t, e, n) {
    for (var r = ct(), i = 0, o = e; i < o.length; i++) {
      for (var s = 0, u = o[i].mutations; s < u.length; s++) {
        var a = u[s];
        a instanceof Be && null === n.get(a.key) && (r = r.add(a.key));
      }
    }

    var c = n;
    return this.Kn.getEntries(t, r).next(function (t) {
      return t.forEach(function (t, e) {
        null !== e && e instanceof tn && (c = c.st(t, e));
      }), c;
    });
  }, t;
}(),
    jn =
/** @class */
function () {
  function t(t, e, n, r) {
    this.targetId = t, this.fromCache = e, this.us = n, this.ls = r;
  }

  return t._s = function (e, n) {
    for (var r = ct(), i = ct(), o = 0, s = n.docChanges; o < s.length; o++) {
      var u = s[o];

      switch (u.type) {
        case 0
        /* Added */
        :
          r = r.add(u.doc.key);
          break;

        case 1
        /* Removed */
        :
          i = i.add(u.doc.key);
        // do nothing
      }
    }

    return new t(e, n.fromCache, r, i);
  }, t;
}(),
    Bn =
/** @class */
function () {
  function t(t, e) {
    var n = this;
    this.previousValue = t, e && (e.fs = function (t) {
      return n.ds(t);
    }, this.ws = function (t) {
      return e.Ts(t);
    });
  }

  return t.prototype.ds = function (t) {
    return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
  }, t.prototype.next = function () {
    var t = ++this.previousValue;
    return this.ws && this.ws(t), t;
  }, t;
}();
/** The result of applying a mutation batch to the backend. */


Bn.Es = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var zn = function zn() {
  var t = this;
  this.promise = new Promise(function (e, n) {
    t.resolve = e, t.reject = n;
  });
},
    Qn =
/** @class */
function () {
  function t(
  /**
   * The AsyncQueue to run backoff operations on.
   */
  t,
  /**
   * The ID to use when scheduling backoff operations on the AsyncQueue.
   */
  e,
  /**
   * The initial delay (used as the base delay on the first retry attempt).
   * Note that jitter will still be applied, so the actual delay could be as
   * little as 0.5*initialDelayMs.
   */
  n
  /**
   * The multiplier to use to determine the extended base delay after each
   * attempt.
   */
  , r
  /**
   * The maximum base delay after which no further backoff is performed.
   * Note that jitter will still be applied, so the actual delay could be as
   * much as 1.5*maxDelayMs.
   */
  , i) {
    void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.ms = t, this.Is = e, this.As = n, this.Rs = r, this.Ps = i, this.gs = 0, this.Vs = null,
    /** The last backoff attempt, as epoch milliseconds. */
    this.ys = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */


  return t.prototype.reset = function () {
    this.gs = 0;
  },
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  t.prototype.ps = function () {
    this.gs = this.Ps;
  },
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  t.prototype.bs = function (t) {
    var e = this; // Cancel any pending backoff operation.

    this.cancel(); // First schedule using the current base (which may be 0 and should be
    // honored as such).

    var n = Math.floor(this.gs + this.vs()),
        r = Math.max(0, Date.now() - this.ys),
        i = Math.max(0, n - r); // Guard against lastAttemptTime being in the future due to a clock change.

    i > 0 && c("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.gs + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.Vs = this.ms.Ss(this.Is, i, function () {
      return e.ys = Date.now(), t();
    }), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.gs *= this.Rs, this.gs < this.As && (this.gs = this.As), this.gs > this.Ps && (this.gs = this.Ps);
  }, t.prototype.Ds = function () {
    null !== this.Vs && (this.Vs.Cs(), this.Vs = null);
  }, t.prototype.cancel = function () {
    null !== this.Vs && (this.Vs.cancel(), this.Vs = null);
  },
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  t.prototype.vs = function () {
    return (Math.random() - .5) * this.gs;
  }, t;
}(),
    Wn =
/** @class */
function () {
  /*
   * Creates a new SimpleDb wrapper for IndexedDb database `name`.
   *
   * Note that `version` must not be a downgrade. IndexedDB does not support
   * downgrading the schema version. We currently do not support any way to do
   * versioning outside of IndexedDB's versioning mechanism, as only
   * version-upgrade transactions are allowed to do things like create
   * objectstores.
   */
  function t(e, n, r) {
    this.name = e, this.version = n, this.Ns = r, // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
    // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
    // whatever reason it's much harder to hit after 12.2 so we only proactively
    // log on 12.2.
    12.2 === t.Fs(i.getUA()) && h("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
  }
  /** Deletes the specified database. */


  return t.delete = function (t) {
    return c("SimpleDb", "Removing database:", t), $n(window.indexedDB.deleteDatabase(t)).Sn();
  },
  /** Returns true if IndexedDB is available in the current environment. */
  t.ks = function () {
    if ("undefined" == typeof indexedDB) return !1;
    if (t.$s()) return !0; // We extensively use indexed array values and compound keys,
    // which IE and Edge do not support. However, they still have indexedDB
    // defined on the window, so we need to check for them here and make sure
    // to return that persistence is not enabled for those browsers.
    // For tracking support of this feature, see here:
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
    // Check the UA string to find out the browser.

    var e = i.getUA(),
        n = t.Fs(e),
        r = 0 < n && n < 10,
        o = t.xs(e),
        s = 0 < o && o < 4.5; // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
    // Edge
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
    // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
    // iOS Safari: Disable for users running iOS version < 10.

    return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || r || s);
  },
  /**
   * Returns true if the backing IndexedDB store is the Node IndexedDBShim
   * (see https://github.com/axemclion/IndexedDBShim).
   */
  t.$s = function () {
    var t;
    return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Os);
  },
  /** Helper to get a typed SimpleDbStore from a transaction. */
  t.Ms = function (t, e) {
    return t.store(e);
  }, // visible for testing

  /** Parse User Agent to determine iOS version. Returns -1 if not found. */
  t.Fs = function (t) {
    var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
        n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(n);
  }, // visible for testing

  /** Parse User Agent to determine Android version. Returns -1 if not found. */
  t.xs = function (t) {
    var e = t.match(/Android ([\d.]+)/i),
        n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(n);
  },
  /**
   * Opens the specified database, creating or upgrading it if necessary.
   */
  t.prototype.Ls = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t,
          n = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.db ? [3
            /*break*/
            , 2] : (c("SimpleDb", "Opening database:", this.name), t = this, [4
            /*yield*/
            , new Promise(function (t, e) {
              // TODO(mikelehen): Investigate browser compatibility.
              // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
              // suggests IE9 and older WebKit browsers handle upgrade
              // differently. They expect setVersion, as described here:
              // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
              var r = indexedDB.open(n.name, n.version);
              r.onsuccess = function (e) {
                var n = e.target.result;
                t(n);
              }, r.onblocked = function () {
                e(new Kn("Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
              }, r.onerror = function (t) {
                var n = t.target.error;
                "VersionError" === n.name ? e(new D(S.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : e(new Kn(n));
              }, r.onupgradeneeded = function (t) {
                c("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                var e = t.target.result;
                n.Ns.createOrUpgrade(e, r.transaction, t.oldVersion, n.version).next(function () {
                  c("SimpleDb", "Database upgrade to version " + n.version + " complete");
                });
              };
            })]);

          case 1:
            t.db = e.sent(), e.label = 2;

          case 2:
            return [2
            /*return*/
            , (this.qs && (this.db.onversionchange = function (t) {
              return n.qs(t);
            }), this.db)];
        }
      });
    });
  }, t.prototype.Bs = function (t) {
    this.qs = t, this.db && (this.db.onversionchange = function (e) {
      return t(e);
    });
  }, t.prototype.runTransaction = function (t, n, r) {
    return e.__awaiter(this, void 0, void 0, function () {
      var i, o, s, u, a;
      return e.__generator(this, function (h) {
        switch (h.label) {
          case 0:
            i = "readonly" === t, o = 0, s = function s() {
              var t, s, a, h, f;
              return e.__generator(this, function (e) {
                switch (e.label) {
                  case 0:
                    ++o, e.label = 1;

                  case 1:
                    return e.trys.push([1, 4,, 5]), [4
                    /*yield*/
                    , u.Ls()];

                  case 2:
                    // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                    // fire), but still return the original transactionFnResult back to the
                    // caller.
                    return u.db = e.sent(), t = Zn.open(u.db, i ? "readonly" : "readwrite", n), s = r(t).catch(function (e) {
                      // Abort the transaction if there was an error.
                      return t.abort(e), Cn.reject(e);
                    }).Sn(), a = {}, s.catch(function () {}), [4
                    /*yield*/
                    , t.Us];

                  case 3:
                    return [2
                    /*return*/
                    , (a.value = ( // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                    // fire), but still return the original transactionFnResult back to the
                    // caller.
                    e.sent(), s), a)];

                  case 4:
                    return h = e.sent(), f = "FirebaseError" !== h.name && o < 3, c("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", h.message, f), u.close(), f ? [3
                    /*break*/
                    , 5] : [2
                    /*return*/
                    , {
                      value: Promise.reject(h)
                    }];

                  case 5:
                    return [2
                    /*return*/
                    ];
                }
              });
            }, u = this, h.label = 1;

          case 1:
            return [5
            /*yield**/
            , s()];

          case 2:
            if ("object" == _typeof(a = h.sent())) return [2
            /*return*/
            , a.value];
            h.label = 3;

          case 3:
            return [3
            /*break*/
            , 1];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.close = function () {
    this.db && this.db.close(), this.db = void 0;
  }, t;
}(),
    Hn =
/** @class */
function () {
  function t(t) {
    this.Qs = t, this.Ws = !1, this.js = null;
  }

  return Object.defineProperty(t.prototype, "yn", {
    get: function get() {
      return this.Ws;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "Ks", {
    get: function get() {
      return this.js;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "cursor", {
    set: function set(t) {
      this.Qs = t;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * This function can be called to stop iteration at any point.
   */
  t.prototype.done = function () {
    this.Ws = !0;
  },
  /**
   * This function can be called to skip to that next key, which could be
   * an index or a primary key.
   */
  t.prototype.Gs = function (t) {
    this.js = t;
  },
  /**
   * Delete the current cursor value from the object store.
   *
   * NOTE: You CANNOT do this with a keysOnly query.
   */
  t.prototype.delete = function () {
    return $n(this.Qs.delete());
  }, t;
}(),
    Kn =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this, S.UNAVAILABLE, "IndexedDB transaction failed: " + e) || this).name = "IndexedDbTransactionError", n;
  }

  return e.__extends(n, t), n;
}(D);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */

/** Verifies whether `e` is an IndexedDbTransactionError. */


function Yn(t) {
  // Use name equality, as instanceof checks on errors don't work with errors
  // that wrap other errors.
  return "IndexedDbTransactionError" === t.name;
}
/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */


var Zn =
/** @class */
function () {
  function t(t) {
    var e = this;
    this.transaction = t, this.aborted = !1,
    /**
         * A promise that resolves with the result of the IndexedDb transaction.
         */
    this.zs = new zn(), this.transaction.oncomplete = function () {
      e.zs.resolve();
    }, this.transaction.onabort = function () {
      t.error ? e.zs.reject(new Kn(t.error)) : e.zs.resolve();
    }, this.transaction.onerror = function (t) {
      var n = tr(t.target.error);
      e.zs.reject(new Kn(n));
    };
  }

  return t.open = function (e, n, r) {
    try {
      return new t(e.transaction(r, n));
    } catch (e) {
      throw new Kn(e);
    }
  }, Object.defineProperty(t.prototype, "Us", {
    get: function get() {
      return this.zs.promise;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.abort = function (t) {
    t && this.zs.reject(t), this.aborted || (c("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort());
  },
  /**
   * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
   * operations performed on the SimpleDbStore happen within the context of this
   * transaction and it cannot be used anymore once the transaction is
   * completed.
   *
   * Note that we can't actually enforce that the KeyType and ValueType are
   * correct, but they allow type safety through the rest of the consuming code.
   */
  t.prototype.store = function (t) {
    var e = this.transaction.objectStore(t);
    return new Xn(e);
  }, t;
}(),
    Xn =
/** @class */
function () {
  function t(t) {
    this.store = t;
  }

  return t.prototype.put = function (t, e) {
    var n;
    return void 0 !== e ? (c("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (c("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), $n(n);
  },
  /**
   * Adds a new value into an Object Store and returns the new key. Similar to
   * IndexedDb's `add()`, this method will fail on primary key collisions.
   *
   * @param value The object to write.
   * @return The key of the value to add.
   */
  t.prototype.add = function (t) {
    return c("SimpleDb", "ADD", this.store.name, t, t), $n(this.store.add(t));
  },
  /**
   * Gets the object with the specified key from the specified store, or null
   * if no object exists with the specified key.
   *
   * @key The key of the object to get.
   * @return The object with the specified key or null if no object exists.
   */
  t.prototype.get = function (t) {
    var e = this; // We're doing an unsafe cast to ValueType.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return $n(this.store.get(t)).next(function (n) {
      // Normalize nonexistence to null.
      return void 0 === n && (n = null), c("SimpleDb", "GET", e.store.name, t, n), n;
    });
  }, t.prototype.delete = function (t) {
    return c("SimpleDb", "DELETE", this.store.name, t), $n(this.store.delete(t));
  },
  /**
   * If we ever need more of the count variants, we can add overloads. For now,
   * all we need is to count everything in a store.
   *
   * Returns the number of rows in the store.
   */
  t.prototype.count = function () {
    return c("SimpleDb", "COUNT", this.store.name), $n(this.store.count());
  }, t.prototype.Hs = function (t, e) {
    var n = this.cursor(this.options(t, e)),
        r = [];
    return this.Ys(n, function (t, e) {
      r.push(e);
    }).next(function () {
      return r;
    });
  }, t.prototype.Js = function (t, e) {
    c("SimpleDb", "DELETE ALL", this.store.name);
    var n = this.options(t, e);
    n.Xs = !1;
    var r = this.cursor(n);
    return this.Ys(r, function (t, e, n) {
      return n.delete();
    });
  }, t.prototype.Zs = function (t, e) {
    var n;
    e ? n = t : (n = {}, e = t);
    var r = this.cursor(n);
    return this.Ys(r, e);
  },
  /**
   * Iterates over a store, but waits for the given callback to complete for
   * each entry before iterating the next entry. This allows the callback to do
   * asynchronous work to determine if this iteration should continue.
   *
   * The provided callback should return `true` to continue iteration, and
   * `false` otherwise.
   */
  t.prototype.ti = function (t) {
    var e = this.cursor({});
    return new Cn(function (n, r) {
      e.onerror = function (t) {
        var e = tr(t.target.error);
        r(e);
      }, e.onsuccess = function (e) {
        var r = e.target.result;
        r ? t(r.primaryKey, r.value).next(function (t) {
          t ? r.continue() : n();
        }) : n();
      };
    });
  }, t.prototype.Ys = function (t, e) {
    var n = [];
    return new Cn(function (r, i) {
      t.onerror = function (t) {
        i(t.target.error);
      }, t.onsuccess = function (t) {
        var i = t.target.result;

        if (i) {
          var o = new Hn(i),
              s = e(i.primaryKey, i.value, o);

          if (s instanceof Cn) {
            var u = s.catch(function (t) {
              return o.done(), Cn.reject(t);
            });
            n.push(u);
          }

          o.yn ? r() : null === o.Ks ? i.continue() : i.continue(o.Ks);
        } else r();
      };
    }).next(function () {
      return Cn.Cn(n);
    });
  }, t.prototype.options = function (t, e) {
    var n = void 0;
    return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
      index: n,
      range: e
    };
  }, t.prototype.cursor = function (t) {
    var e = "next";

    if (t.reverse && (e = "prev"), t.index) {
      var n = this.store.index(t.index);
      return t.Xs ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
    }

    return this.store.openCursor(t.range, e);
  }, t;
}();
/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */


function $n(t) {
  return new Cn(function (e, n) {
    t.onsuccess = function (t) {
      var n = t.target.result;
      e(n);
    }, t.onerror = function (t) {
      var e = tr(t.target.error);
      n(e);
    };
  });
} // Guard so we only report the error once.


var Jn = !1;

function tr(t) {
  var e = Wn.Fs(i.getUA());

  if (e >= 12.2 && e < 13) {
    var n = "An internal error was encountered in the Indexed Database server";

    if (t.message.indexOf(n) >= 0) {
      // Wrap error in a more descriptive one.
      var r = new D("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
      return Jn || (Jn = !0, // Throw a global exception outside of this promise chain, for the user to
      // potentially catch.
      setTimeout(function () {
        throw r;
      }, 0)), r;
    }
  }

  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** The Platform's 'window' implementation or null if not available. */


function er() {
  // `window` is not always available, e.g. in ReactNative and WebWorkers.
  // eslint-disable-next-line no-restricted-globals
  return "undefined" != typeof window ? window : null;
}
/** The Platform's 'document' implementation or null if not available. */


function nr() {
  // `document` is not always available, e.g. in ReactNative and WebWorkers.
  // eslint-disable-next-line no-restricted-globals
  return "undefined" != typeof document ? document : null;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */


var rr =
/** @class */
function () {
  function t(t, e, n, r, i) {
    this.ei = t, this.Is = e, this.ni = n, this.op = r, this.si = i, this.ii = new zn(), this.then = this.ii.promise.then.bind(this.ii.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.ii.promise.catch(function (t) {})
    /**
    * Creates and returns a DelayedOperation that has been scheduled to be
    * executed on the provided asyncQueue after the provided delayMs.
    *
    * @param asyncQueue The queue to schedule the operation on.
    * @param id A Timer ID identifying the type of operation this is.
    * @param delayMs The delay (ms) before the operation should be scheduled.
    * @param op The operation to run.
    * @param removalCallback A callback to be called synchronously once the
    *   operation is executed or canceled, notifying the AsyncQueue to remove it
    *   from its delayedOperations list.
    *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
    *   the DelayedOperation class public.
    */
    ;
  }

  return t.ri = function (e, n, r, i, o) {
    var s = new t(e, n, Date.now() + r, i, o);
    return s.start(r), s;
  },
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  t.prototype.start = function (t) {
    var e = this;
    this.oi = setTimeout(function () {
      return e.hi();
    }, t);
  },
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  t.prototype.Cs = function () {
    return this.hi();
  },
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  t.prototype.cancel = function (t) {
    null !== this.oi && (this.clearTimeout(), this.ii.reject(new D(S.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
  }, t.prototype.hi = function () {
    var t = this;
    this.ei.ai(function () {
      return null !== t.oi ? (t.clearTimeout(), t.op().then(function (e) {
        return t.ii.resolve(e);
      })) : Promise.resolve();
    });
  }, t.prototype.clearTimeout = function () {
    null !== this.oi && (this.si(this), clearTimeout(this.oi), this.oi = null);
  }, t;
}(),
    ir =
/** @class */
function () {
  function t() {
    var t = this; // The last promise in the queue.

    this.ci = Promise.resolve(), // A list of retryable operations. Retryable operations are run in order and
    // retried with backoff.
    this.ui = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.li = !1, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this._i = [], // visible for testing
    this.fi = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.di = !1, // List of TimerIds to fast-forward delays for.
    this.wi = [], // Backoff timer used to schedule retries for retryable operations
    this.Ti = new Qn(this, "async_queue_retry"
    /* AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Ei = function () {
      var e = nr();
      e && c("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.Ti.Ds();
    };
    var e = nr();
    e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.Ei);
  }

  return Object.defineProperty(t.prototype, "mi", {
    // Is this AsyncQueue being shut down? If true, this instance will not enqueue
    // any new operations, Promises from enqueue requests will not resolve.
    get: function get() {
      return this.li;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  t.prototype.ai = function (t) {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.enqueue(t);
  },
  /**
   * Regardless if the queue has initialized shutdown, adds a new operation to the
   * queue without waiting for it to complete (i.e. we ignore the Promise result).
   */
  t.prototype.Ii = function (t) {
    this.Ai(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.Ri(t);
  },
  /**
   * Initialize the shutdown of this queue. Once this method is called, the
   * only possible way to request running an operation is through
   * `enqueueEvenWhileRestricted()`.
   */
  t.prototype.Pi = function () {
    if (!this.li) {
      this.li = !0;
      var t = nr();
      t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.Ei);
    }
  },
  /**
   * Adds a new operation to the queue. Returns a promise that will be resolved
   * when the promise returned by the new operation is (with its value).
   */
  t.prototype.enqueue = function (t) {
    return this.Ai(), this.li ? new Promise(function (t) {}) : this.Ri(t);
  },
  /**
   * Enqueue a retryable operation.
   *
   * A retryable operation is rescheduled with backoff if it fails with a
   * IndexedDbTransactionError (the error type used by SimpleDb). All
   * retryable operations are executed in order and only run if all prior
   * operations were retried successfully.
   */
  t.prototype.gi = function (t) {
    var e = this;
    this.ui.push(t), this.ai(function () {
      return e.Vi();
    });
  },
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  t.prototype.Vi = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t,
          n = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            if (0 === this.ui.length) return [3
            /*break*/
            , 5];
            e.label = 1;

          case 1:
            return e.trys.push([1, 3,, 4]), [4
            /*yield*/
            , this.ui[0]()];

          case 2:
            return e.sent(), this.ui.shift(), this.Ti.reset(), [3
            /*break*/
            , 4];

          case 3:
            if (!Yn(t = e.sent())) throw t; // Failure will be handled by AsyncQueue

            return c("AsyncQueue", "Operation failed with retryable error: " + t), [3
            /*break*/
            , 4];

          case 4:
            this.ui.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
            // This is necessary to run retryable operations that failed during
            // their initial attempt since we don't know whether they are already
            // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
            // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
            // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
            // call scheduled here.
            // Since `backoffAndRun()` cancels an existing backoff and schedules a
            // new backoff on every call, there is only ever a single additional
            // operation in the queue.
            this.Ti.bs(function () {
              return n.Vi();
            }), e.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.Ri = function (t) {
    var e = this,
        n = this.ci.then(function () {
      return e.di = !0, t().catch(function (t) {
        // Re-throw the error so that this.tail becomes a rejected Promise and
        // all further attempts to chain (via .then) will just short-circuit
        // and return the rejected Promise.
        throw e.fi = t, e.di = !1, h("INTERNAL UNHANDLED ERROR: ",
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error Error or FirestoreError
        */
        function (t) {
          var e = t.message || "";
          return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), e;
        }(t)), t;
      }).then(function (t) {
        return e.di = !1, t;
      });
    });
    return this.ci = n, n;
  },
  /**
   * Schedules an operation to be queued on the AsyncQueue once the specified
   * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
   * or fast-forward the operation prior to its running.
   */
  t.prototype.Ss = function (t, e, n) {
    var r = this;
    this.Ai(), // Fast-forward delays for timerIds that have been overriden.
    this.wi.indexOf(t) > -1 && (e = 0);
    var i = rr.ri(this, t, e, n, function (t) {
      return r.yi(t);
    });
    return this._i.push(i), i;
  }, t.prototype.Ai = function () {
    this.fi && p();
  },
  /**
   * Verifies there's an operation currently in-progress on the AsyncQueue.
   * Unfortunately we can't verify that the running code is in the promise chain
   * of that operation, so this isn't a foolproof check, but it should be enough
   * to catch some bugs.
   */
  t.prototype.pi = function () {},
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  t.prototype.bi = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return [4
            /*yield*/
            , t = this.ci];

          case 1:
            e.sent(), e.label = 2;

          case 2:
            if (t !== this.ci) return [3
            /*break*/
            , 0];
            e.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  t.prototype.vi = function (t) {
    for (var e = 0, n = this._i; e < n.length; e++) {
      if (n[e].Is === t) return !0;
    }

    return !1;
  },
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId Delayed operations up to and including this TimerId will
   *  be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  t.prototype.Si = function (t) {
    var e = this; // Note that draining may generate more delayed ops, so we do that first.

    return this.bi().then(function () {
      // Run ops in the same order they'd run if they ran naturally.
      e._i.sort(function (t, e) {
        return t.ni - e.ni;
      });

      for (var n = 0, r = e._i; n < r.length; n++) {
        var i = r[n];
        if (i.Cs(), "all"
        /* All */
        !== t && i.Is === t) break;
      }

      return e.bi();
    });
  },
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  t.prototype.Di = function (t) {
    this.wi.push(t);
  },
  /** Called once a DelayedOperation is run or canceled. */
  t.prototype.yi = function (t) {
    // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
    var e = this._i.indexOf(t);

    this._i.splice(e, 1);
  }, t;
}();
/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */


function or(t, e) {
  if (h("AsyncQueue", e + ": " + t), Yn(t)) return new D(S.UNAVAILABLE, e + ": " + t);
  throw t;
}

function sr(t, e) {
  var n = t[0],
      r = t[1],
      i = e[0],
      o = e[1],
      s = m(n, i);
  return 0 === s ? m(r, o) : s;
}
/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */


var ur =
/** @class */
function () {
  function t(t) {
    this.Ci = t, this.buffer = new tt(sr), this.Ni = 0;
  }

  return t.prototype.Fi = function () {
    return ++this.Ni;
  }, t.prototype.ki = function (t) {
    var e = [t, this.Fi()];
    if (this.buffer.size < this.Ci) this.buffer = this.buffer.add(e);else {
      var n = this.buffer.last();
      sr(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
    }
  }, Object.defineProperty(t.prototype, "maxValue", {
    get: function get() {
      // Guaranteed to be non-empty. If we decide we are not collecting any
      // sequence numbers, nthSequenceNumber below short-circuits. If we have
      // decided that we are collecting n sequence numbers, it's because n is some
      // percentage of the existing sequence numbers. That means we should never
      // be in a situation where we are collecting sequence numbers but don't
      // actually have any.
      return this.buffer.last()[0];
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(),
    ar = {
  $i: !1,
  xi: 0,
  Oi: 0,
  Mi: 0
},
    cr =
/** @class */
function () {
  function t( // When we attempt to collect, we will only do so if the cache size is greater than this
  // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
  t, // The percentage of sequence numbers that we will attempt to collect
  e, // A cap on the total number of sequence numbers that will be collected. This prevents
  // us from collecting a huge number of sequence numbers if the cache has grown very large.
  n) {
    this.Li = t, this.qi = e, this.Bi = n;
  }

  return t.Ui = function (e) {
    return new t(e, t.Qi, t.Wi);
  }, t;
}();

cr.ji = -1, cr.Ki = 1048576, cr.Gi = 41943040, cr.Qi = 10, cr.Wi = 1e3, cr.zi = new cr(cr.Gi, cr.Qi, cr.Wi), cr.Hi = new cr(cr.ji, 0, 0);
/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */

var hr =
/** @class */
function () {
  function t(t, e) {
    this.Yi = t, this.ei = e, this.Ji = !1, this.Xi = null;
  }

  return t.prototype.start = function (t) {
    this.Yi.params.Li !== cr.ji && this.Zi(t);
  }, t.prototype.stop = function () {
    this.Xi && (this.Xi.cancel(), this.Xi = null);
  }, Object.defineProperty(t.prototype, "tr", {
    get: function get() {
      return null !== this.Xi;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.Zi = function (t) {
    var n = this,
        r = this.Ji ? 3e5 : 6e4;
    c("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.Xi = this.ei.Ss("lru_garbage_collection"
    /* LruGarbageCollection */
    , r, function () {
      return e.__awaiter(n, void 0, void 0, function () {
        var n;
        return e.__generator(this, function (e) {
          switch (e.label) {
            case 0:
              this.Xi = null, this.Ji = !0, e.label = 1;

            case 1:
              return e.trys.push([1, 3,, 7]), [4
              /*yield*/
              , t.er(this.Yi)];

            case 2:
              return e.sent(), [3
              /*break*/
              , 7];

            case 3:
              return Yn(n = e.sent()) ? (c("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), [3
              /*break*/
              , 6]) : [3
              /*break*/
              , 4];

            case 4:
              return [4
              /*yield*/
              , Ai(n)];

            case 5:
              e.sent(), e.label = 6;

            case 6:
              return [3
              /*break*/
              , 7];

            case 7:
              return [4
              /*yield*/
              , this.Zi(t)];

            case 8:
              return e.sent(), [2
              /*return*/
              ];
          }
        });
      });
    });
  }, t;
}(),
    fr =
/** @class */
function () {
  function t(t, e) {
    this.nr = t, this.params = e
    /** Given a percentile of target to collect, returns the number of targets to collect. */
    ;
  }

  return t.prototype.sr = function (t, e) {
    return this.nr.ir(t).next(function (t) {
      return Math.floor(e / 100 * t);
    });
  },
  /** Returns the nth sequence number, counting in order from the smallest. */
  t.prototype.rr = function (t, e) {
    var n = this;
    if (0 === e) return Cn.resolve(Bn.Es);
    var r = new ur(e);
    return this.nr.be(t, function (t) {
      return r.ki(t.sequenceNumber);
    }).next(function () {
      return n.nr.or(t, function (t) {
        return r.ki(t);
      });
    }).next(function () {
      return r.maxValue;
    });
  },
  /**
   * Removes targets with a sequence number equal to or less than the given upper bound, and removes
   * document associations with those targets.
   */
  t.prototype.hr = function (t, e, n) {
    return this.nr.hr(t, e, n);
  },
  /**
   * Removes documents that have a sequence number equal to or less than the upper bound and are not
   * otherwise pinned.
   */
  t.prototype.ar = function (t, e) {
    return this.nr.ar(t, e);
  }, t.prototype.cr = function (t, e) {
    var n = this;
    return this.params.Li === cr.ji ? (c("LruGarbageCollector", "Garbage collection skipped; disabled"), Cn.resolve(ar)) : this.ur(t).next(function (r) {
      return r < n.params.Li ? (c("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.Li), ar) : n.lr(t, e);
    });
  }, t.prototype.ur = function (t) {
    return this.nr.ur(t);
  }, t.prototype.lr = function (t, e) {
    var n,
        i,
        o,
        s,
        u,
        h,
        f,
        l = this,
        p = Date.now();
    return this.sr(t, this.params.qi).next(function (e) {
      // Cap at the configured max
      return e > l.params.Bi ? (c("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + l.params.Bi + " from " + e), i = l.params.Bi) : i = e, s = Date.now(), l.rr(t, i);
    }).next(function (r) {
      return n = r, u = Date.now(), l.hr(t, n, e);
    }).next(function (e) {
      return o = e, h = Date.now(), l.ar(t, n);
    }).next(function (t) {
      return f = Date.now(), a() <= r.LogLevel.DEBUG && c("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (h - u) + "ms\n\tRemoved " + t + " documents in " + (f - h) + "ms\nTotal Duration: " + (f - p) + "ms"), Cn.resolve({
        $i: !0,
        xi: i,
        Oi: o,
        Mi: t
      });
    });
  }, t;
}();
/** Implements the steps for LRU garbage collection. */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */


function lr(t) {
  for (var e = "", n = 0; n < t.length; n++) {
    e.length > 0 && (e = dr(e)), e = pr(t.get(n), e);
  }

  return dr(e);
}
/** Encodes a single segment of a resource path into the given result */


function pr(t, e) {
  for (var n = e, r = t.length, i = 0; i < r; i++) {
    var o = t.charAt(i);

    switch (o) {
      case "\0":
        n += "";
        break;

      case "":
        n += "";
        break;

      default:
        n += o;
    }
  }

  return n;
}
/** Encodes a path separator into the given result */


function dr(t) {
  return t + "";
}
/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */


function yr(t) {
  // Event the empty path must encode as a path of at least length 2. A path
  // with exactly 2 must be the empty path.
  var e = t.length;
  if (d(e >= 2), 2 === e) return d("" === t.charAt(0) && "" === t.charAt(1)), P.$(); // Escape characters cannot exist past the second-to-last position in the
  // source value.

  for (var n = e - 2, r = [], i = "", o = 0; o < e;) {
    // The last two characters of a valid encoded path must be a separator, so
    // there must be an end to this segment.
    var s = t.indexOf("", o);

    switch ((s < 0 || s > n) && p(), t.charAt(s + 1)) {
      case "":
        var u = t.substring(o, s),
            a = void 0;
        0 === i.length ? // Avoid copying for the common case of a segment that excludes \0
        // and \001
        a = u : (a = i += u, i = ""), r.push(a);
        break;

      case "":
        i += t.substring(o, s), i += "\0";
        break;

      case "":
        // The escape character can be used in the output to encode itself.
        i += t.substring(o, s + 1);
        break;

      default:
        p();
    }

    o = s + 2;
  }

  return new P(r);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Serializer for values stored in the LocalStore. */


var vr = function vr(t) {
  this._r = t;
};
/** Decodes a remote document from storage locally to a Document. */


function gr(t, e) {
  if (e.document) return function (t, e, n) {
    var r = ee(t, e.name),
        i = Xt(e.updateTime),
        o = new Ze({
      mapValue: {
        fields: e.fields
      }
    });
    return new tn(r, i, o, {
      hasCommittedMutations: !!n
    });
  }(t._r, e.document, !!e.hasCommittedMutations);

  if (e.noDocument) {
    var n = V.K(e.noDocument.path),
        r = Ir(e.noDocument.readTime);
    return new en(n, r, {
      hasCommittedMutations: !!e.hasCommittedMutations
    });
  }

  if (e.unknownDocument) {
    var i = V.K(e.unknownDocument.path),
        o = Ir(e.unknownDocument.version);
    return new nn(i, o);
  }

  return p();
}
/** Encodes a document for storage locally. */


function mr(t, e, n) {
  var r = wr(n),
      i = e.key.path.p().N();

  if (e instanceof tn) {
    var o = function (t, e) {
      return {
        name: te(t, e.key),
        fields: e.tn().mapValue.fields,
        updateTime: Kt(t, e.version.A())
      };
    }(t._r, e),
        s = e.hasCommittedMutations;

    return new Hr(
    /* unknownDocument= */
    null,
    /* noDocument= */
    null, o, s, r, i);
  }

  if (e instanceof en) {
    var u = e.key.path.N(),
        a = br(e.version),
        c = e.hasCommittedMutations;
    return new Hr(
    /* unknownDocument= */
    null, new Qr(u, a),
    /* document= */
    null, c, r, i);
  }

  if (e instanceof nn) {
    var h = e.key.path.N(),
        f = br(e.version);
    return new Hr(new Wr(h, f),
    /* noDocument= */
    null,
    /* document= */
    null,
    /* hasCommittedMutations= */
    !0, r, i);
  }

  return p();
}

function wr(t) {
  var e = t.A();
  return [e.seconds, e.nanoseconds];
}

function _r(t) {
  var e = new x(t[0], t[1]);
  return k.m(e);
}

function br(t) {
  var e = t.A();
  return new Fr(e.seconds, e.nanoseconds);
}

function Ir(t) {
  var e = new x(t.seconds, t.nanoseconds);
  return k.m(e);
}
/** Encodes a batch of mutations into a DbMutationBatch for local storage. */

/** Decodes a DbMutationBatch into a MutationBatch */


function Er(t, e) {
  var n = (e.baseMutations || []).map(function (e) {
    return ae(t._r, e);
  }),
      r = e.mutations.map(function (e) {
    return ae(t._r, e);
  }),
      i = x.fromMillis(e.localWriteTimeMs);
  return new Vn(e.batchId, i, n, r);
}
/** Decodes a DbTarget into TargetData */


function Tr(t) {
  var e,
      n,
      r = Ir(t.readTime),
      i = void 0 !== t.lastLimboFreeSnapshotVersion ? Ir(t.lastLimboFreeSnapshotVersion) : k.min();
  return void 0 !== t.query.documents ? (d(1 === (n = t.query).documents.length), e = hn(un(re(n.documents[0])))) : e = function (t) {
    var e = re(t.parent),
        n = t.structuredQuery,
        r = n.from ? n.from.length : 0,
        i = null;

    if (r > 0) {
      d(1 === r);
      var o = n.from[0];
      o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
    }

    var s = [];
    n.where && (s = function t(e) {
      return e ? void 0 !== e.unaryFilter ? [ve(e)] : void 0 !== e.fieldFilter ? [ye(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map(function (e) {
        return t(e);
      }).reduce(function (t, e) {
        return t.concat(e);
      }) : p() : [];
    }(n.where));
    var u = [];
    n.orderBy && (u = n.orderBy.map(function (t) {
      return new Pn(de((e = t).field), // visible for testing
      function (t) {
        switch (t) {
          case "ASCENDING":
            return "asc"
            /* ASCENDING */
            ;

          case "DESCENDING":
            return "desc"
            /* DESCENDING */
            ;

          default:
            return;
        }
      }(e.direction));
      var e;
    }));
    var a = null;
    n.limit && (a = function (t) {
      var e;
      return U(e = "object" == _typeof(t) ? t.value : t) ? null : e;
    }(n.limit));
    var c = null;
    n.startAt && (c = le(n.startAt));
    var h = null;
    return n.endAt && (h = le(n.endAt)), hn(sn(e, i, u, s, a, "F"
    /* First */
    , c, h));
  }(t.query), new H(e, t.targetId, 0
  /* Listen */
  , t.lastListenSequenceNumber, r, i, z.fromBase64String(t.resumeToken))
  /** Encodes TargetData into a DbTarget for storage locally. */
  ;
}

function Nr(t, e) {
  var n,
      r = br(e.Z),
      i = br(e.lastLimboFreeSnapshotVersion);
  n = B(e.target) ? ce(t._r, e.target) : he(t._r, e.target); // We can't store the resumeToken as a ByteString in IndexedDb, so we
  // convert it to a base64 string for storage.

  var o = e.resumeToken.toBase64(); // lastListenSequenceNumber is always 0 until we do real GC.

  return new Yr(e.targetId, G(e.target), r, o, e.sequenceNumber, i, n);
}
/**
 * A helper function for figuring out what kind of query has been stored.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** A mutation queue for a specific user, backed by IndexedDB. */


var Ar =
/** @class */
function () {
  function t(
  /**
   * The normalized userId (e.g. null UID => "" userId) used to store /
   * retrieve mutations.
   */
  t, e, n, r) {
    this.userId = t, this.serializer = e, this.zn = n, this.dr = r,
    /**
         * Caches the document keys for pending mutation batches. If the mutation
         * has been removed from IndexedDb, the cached value may continue to
         * be used to retrieve the batch's document keys. To remove a cached value
         * locally, `removeCachedMutationKeys()` should be invoked either directly
         * or through `removeMutationBatches()`.
         *
         * With multi-tab, when the primary client acknowledges or rejects a mutation,
         * this cache is used by secondary clients to invalidate the local
         * view of the documents that were previously affected by the mutation.
         */
    // PORTING NOTE: Multi-tab only.
    this.wr = {}
    /**
    * Creates a new mutation queue for the given user.
    * @param user The user for which to create a mutation queue.
    * @param serializer The serializer to use when persisting to IndexedDb.
    */
    ;
  }

  return t.Tr = function (e, n, r, i) {
    // TODO(mcg): Figure out what constraints there are on userIDs
    // In particular, are there any reserved characters? are empty ids allowed?
    // For the moment store these together in the same mutations table assuming
    // that empty userIDs aren't allowed.
    return d("" !== e.uid), new t(e.Er() ? e.uid : "", n, r, i);
  }, t.prototype.mr = function (t) {
    var e = !0,
        n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
    return xr(t).Zs({
      index: Br.userMutationsIndex,
      range: n
    }, function (t, n, r) {
      e = !1, r.done();
    }).next(function () {
      return e;
    });
  }, t.prototype.Ir = function (t, e, n, r) {
    var i = this,
        o = kr(t),
        s = xr(t); // The IndexedDb implementation in Chrome (and Firefox) does not handle
    // compound indices that include auto-generated keys correctly. To ensure
    // that the index entry is added correctly in all browsers, we perform two
    // writes: The first write is used to retrieve the next auto-generated Batch
    // ID, and the second write populates the index and stores the actual
    // mutation batch.
    // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
    // We write an empty object to obtain key
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

    return s.add({}).next(function (u) {
      d("number" == typeof u);

      for (var a = new Vn(u, e, n, r), c = function (t, e, n) {
        var r = n.baseMutations.map(function (e) {
          return ue(t._r, e);
        }),
            i = n.mutations.map(function (e) {
          return ue(t._r, e);
        });
        return new Br(e, n.batchId, n.Tn.toMillis(), r, i);
      }(i.serializer, i.userId, a), h = [], f = new tt(function (t, e) {
        return m(t.F(), e.F());
      }), l = 0, p = r; l < p.length; l++) {
        var y = p[l],
            v = zr.key(i.userId, y.key.path, u);
        f = f.add(y.key.path.p()), h.push(s.put(c)), h.push(o.put(v, zr.PLACEHOLDER));
      }

      return f.forEach(function (e) {
        h.push(i.zn.Ar(t, e));
      }), t.Wn(function () {
        i.wr[u] = a.keys();
      }), Cn.Cn(h).next(function () {
        return a;
      });
    });
  }, t.prototype.Rr = function (t, e) {
    var n = this;
    return xr(t).get(e).next(function (t) {
      return t ? (d(t.userId === n.userId), Er(n.serializer, t)) : null;
    });
  },
  /**
   * Returns the document keys for the mutation batch with the given batchId.
   * For primary clients, this method returns `null` after
   * `removeMutationBatches()` has been called. Secondary clients return a
   * cached result until `removeCachedMutationKeys()` is invoked.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Pr = function (t, e) {
    var n = this;
    return this.wr[e] ? Cn.resolve(this.wr[e]) : this.Rr(t, e).next(function (t) {
      if (t) {
        var r = t.keys();
        return n.wr[e] = r, r;
      }

      return null;
    });
  }, t.prototype.gr = function (t, e) {
    var n = this,
        r = e + 1,
        i = IDBKeyRange.lowerBound([this.userId, r]),
        o = null;
    return xr(t).Zs({
      index: Br.userMutationsIndex,
      range: i
    }, function (t, e, i) {
      e.userId === n.userId && (d(e.batchId >= r), o = Er(n.serializer, e)), i.done();
    }).next(function () {
      return o;
    });
  }, t.prototype.Vr = function (t) {
    var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
        n = -1;
    return xr(t).Zs({
      index: Br.userMutationsIndex,
      range: e,
      reverse: !0
    }, function (t, e, r) {
      n = e.batchId, r.done();
    }).next(function () {
      return n;
    });
  }, t.prototype.yr = function (t) {
    var e = this,
        n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
    return xr(t).Hs(Br.userMutationsIndex, n).next(function (t) {
      return t.map(function (t) {
        return Er(e.serializer, t);
      });
    });
  }, t.prototype.Yn = function (t, e) {
    var n = this,
        r = zr.prefixForPath(this.userId, e.path),
        i = IDBKeyRange.lowerBound(r),
        o = []; // Scan the document-mutation index starting with a prefix starting with
    // the given documentKey.

    return kr(t).Zs({
      range: i
    }, function (r, i, s) {
      var u = r[0],
          a = r[1],
          c = r[2],
          h = yr(a); // Only consider rows matching exactly the specific key of
      // interest. Note that because we order by path first, and we
      // order terminators before path separators, we'll encounter all
      // the index rows for documentKey contiguously. In particular, all
      // the rows for documentKey will occur before any rows for
      // documents nested in a subcollection beneath documentKey so we
      // can stop as soon as we hit any such row.

      if (u === n.userId && e.path.isEqual(h)) // Look up the mutation batch in the store.
        return xr(t).get(c).next(function (t) {
          if (!t) throw p();
          d(t.userId === n.userId), o.push(Er(n.serializer, t));
        });
      s.done();
    }).next(function () {
      return o;
    });
  }, t.prototype.es = function (t, e) {
    var n = this,
        r = new tt(m),
        i = [];
    return e.forEach(function (e) {
      var o = zr.prefixForPath(n.userId, e.path),
          s = IDBKeyRange.lowerBound(o),
          u = kr(t).Zs({
        range: s
      }, function (t, i, o) {
        var s = t[0],
            u = t[1],
            a = t[2],
            c = yr(u); // Only consider rows matching exactly the specific key of
        // interest. Note that because we order by path first, and we
        // order terminators before path separators, we'll encounter all
        // the index rows for documentKey contiguously. In particular, all
        // the rows for documentKey will occur before any rows for
        // documents nested in a subcollection beneath documentKey so we
        // can stop as soon as we hit any such row.

        s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
      });
      i.push(u);
    }), Cn.Cn(i).next(function () {
      return n.pr(t, r);
    });
  }, t.prototype.as = function (t, e) {
    var n = this,
        r = e.path,
        i = r.length + 1,
        o = zr.prefixForPath(this.userId, r),
        s = IDBKeyRange.lowerBound(o),
        u = new tt(m);
    return kr(t).Zs({
      range: s
    }, function (t, e, o) {
      var s = t[0],
          a = t[1],
          c = t[2],
          h = yr(a);
      s === n.userId && r.D(h) ? // Rows with document keys more than one segment longer than the
      // query path can't be matches. For example, a query on 'rooms'
      // can't match the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      h.length === i && (u = u.add(c)) : o.done();
    }).next(function () {
      return n.pr(t, u);
    });
  }, t.prototype.pr = function (t, e) {
    var n = this,
        r = [],
        i = []; // TODO(rockwood): Implement this using iterate.

    return e.forEach(function (e) {
      i.push(xr(t).get(e).next(function (t) {
        if (null === t) throw p();
        d(t.userId === n.userId), r.push(Er(n.serializer, t));
      }));
    }), Cn.Cn(i).next(function () {
      return r;
    });
  }, t.prototype.br = function (t, e) {
    var n = this;
    return Dr(t.vr, this.userId, e).next(function (r) {
      return t.Wn(function () {
        n.Sr(e.batchId);
      }), Cn.forEach(r, function (e) {
        return n.dr.Dr(t, e);
      });
    });
  },
  /**
   * Clears the cached keys for a mutation batch. This method should be
   * called by secondary clients after they process mutation updates.
   *
   * Note that this method does not have to be called from primary clients as
   * the corresponding cache entries are cleared when an acknowledged or
   * rejected batch is removed from the mutation queue.
   */
  // PORTING NOTE: Multi-tab only
  t.prototype.Sr = function (t) {
    delete this.wr[t];
  }, t.prototype.Cr = function (t) {
    var e = this;
    return this.mr(t).next(function (n) {
      if (!n) return Cn.resolve(); // Verify that there are no entries in the documentMutations index if
      // the queue is empty.

      var r = IDBKeyRange.lowerBound(zr.prefixForUser(e.userId)),
          i = [];
      return kr(t).Zs({
        range: r
      }, function (t, n, r) {
        if (t[0] === e.userId) {
          var o = yr(t[1]);
          i.push(o);
        } else r.done();
      }).next(function () {
        d(0 === i.length);
      });
    });
  }, t.prototype.Nr = function (t, e) {
    return Sr(t, this.userId, e);
  }, // PORTING NOTE: Multi-tab only (state is held in memory in other clients).

  /** Returns the mutation queue's metadata from IndexedDb. */
  t.prototype.Fr = function (t) {
    var e = this;
    return Lr(t).get(this.userId).next(function (t) {
      return t || new jr(e.userId, -1,
      /*lastStreamToken=*/
      "");
    });
  }, t;
}();
/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */


function Sr(t, e, n) {
  var r = zr.prefixForPath(e, n.path),
      i = r[1],
      o = IDBKeyRange.lowerBound(r),
      s = !1;
  return kr(t).Zs({
    range: o,
    Xs: !0
  }, function (t, n, r) {
    var o = t[0],
        u = t[1];
    t[2];
    o === e && u === i && (s = !0), r.done();
  }).next(function () {
    return s;
  });
}
/** Returns true if any mutation queue contains the given document. */

/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */


function Dr(t, e, n) {
  var r = t.store(Br.store),
      i = t.store(zr.store),
      o = [],
      s = IDBKeyRange.only(n.batchId),
      u = 0,
      a = r.Zs({
    range: s
  }, function (t, e, n) {
    return u++, n.delete();
  });
  o.push(a.next(function () {
    d(1 === u);
  }));

  for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
    var l = f[h],
        p = zr.key(e, l.key.path, n.batchId);
    o.push(i.delete(p)), c.push(l.key);
  }

  return Cn.Cn(o).next(function () {
    return c;
  });
}
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */


function xr(t) {
  return fi.Ms(t, Br.store);
}
/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */


function kr(t) {
  return fi.Ms(t, zr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */


function Lr(t) {
  return fi.Ms(t, jr.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Pr =
/** @class */
function () {
  /**
   * @param {LocalSerializer} serializer The document serializer.
   * @param {IndexManager} indexManager The query indexes that need to be maintained.
   */
  function t(t, e) {
    this.serializer = t, this.zn = e
    /**
    * Adds the supplied entries to the cache.
    *
    * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
    * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
    */
    ;
  }

  return t.prototype.xn = function (t, e, n) {
    return Or(t).put(Vr(e), n);
  },
  /**
   * Removes a document from the cache.
   *
   * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
   */
  t.prototype.Mn = function (t, e) {
    var n = Or(t),
        r = Vr(e);
    return n.delete(r);
  },
  /**
   * Updates the current cache size.
   *
   * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
   * cache's metadata.
   */
  t.prototype.updateMetadata = function (t, e) {
    var n = this;
    return this.getMetadata(t).next(function (r) {
      return r.byteSize += e, n.kr(t, r);
    });
  }, t.prototype.Ln = function (t, e) {
    var n = this;
    return Or(t).get(Vr(e)).next(function (t) {
      return n.$r(t);
    });
  },
  /**
   * Looks up an entry in the cache.
   *
   * @param documentKey The key of the entry to look up.
   * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
   */
  t.prototype.xr = function (t, e) {
    var n = this;
    return Or(t).get(Vr(e)).next(function (t) {
      var e = n.$r(t);
      return e ? {
        Or: e,
        size: Ur(t)
      } : null;
    });
  }, t.prototype.getEntries = function (t, e) {
    var n = this,
        r = it();
    return this.Mr(t, e, function (t, e) {
      var i = n.$r(e);
      r = r.st(t, i);
    }).next(function () {
      return r;
    });
  },
  /**
   * Looks up several entries in the cache.
   *
   * @param documentKeys The set of keys entries to look up.
   * @return A map of MaybeDocuments indexed by key (if a document cannot be
   *     found, the key will be mapped to null) and a map of sizes indexed by
   *     key (zero if the key cannot be found).
   */
  t.prototype.Lr = function (t, e) {
    var n = this,
        r = it(),
        i = new X(V.P);
    return this.Mr(t, e, function (t, e) {
      var o = n.$r(e);
      o ? (r = r.st(t, o), i = i.st(t, Ur(e))) : (r = r.st(t, null), i = i.st(t, 0));
    }).next(function () {
      return {
        qr: r,
        Br: i
      };
    });
  }, t.prototype.Mr = function (t, e, n) {
    if (e._()) return Cn.resolve();
    var r = IDBKeyRange.bound(e.first().path.N(), e.last().path.N()),
        i = e.ct(),
        o = i.wt();
    return Or(t).Zs({
      range: r
    }, function (t, e, r) {
      // Go through keys not found in cache.
      for (var s = V.K(t); o && V.P(o, s) < 0;) {
        n(o, null), o = i.wt();
      }

      o && o.isEqual(s) && ( // Key found in cache.
      n(o, e), o = i.Tt() ? i.wt() : null), // Skip to the next key (if there is one).
      o ? r.Gs(o.path.N()) : r.done();
    }).next(function () {
      // The rest of the keys are not in the cache. One case where `iterate`
      // above won't go through them is when the cache is empty.
      for (; o;) {
        n(o, null), o = i.Tt() ? i.wt() : null;
      }
    });
  }, t.prototype.ns = function (t, e, n) {
    var r = this,
        i = st(),
        o = e.path.length + 1,
        s = {};

    if (n.isEqual(k.min())) {
      // Documents are ordered by key, so we can use a prefix scan to narrow
      // down the documents we need to match the query against.
      var u = e.path.N();
      s.range = IDBKeyRange.lowerBound(u);
    } else {
      // Execute an index-free query and filter by read time. This is safe
      // since all document changes to queries that have a
      // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
      var a = e.path.N(),
          c = wr(n);
      s.range = IDBKeyRange.lowerBound([a, c],
      /* open= */
      !0), s.index = Hr.collectionReadTimeIndex;
    }

    return Or(t).Zs(s, function (t, n, s) {
      // The query is actually returning any path that starts with the query
      // path prefix which may include documents in subcollections. For
      // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
      // shouldn't match it. Fix this by discarding rows with document keys
      // more than one segment longer than the query path.
      if (t.length === o) {
        var u = gr(r.serializer, n);
        e.path.D(u.key.path) ? u instanceof tn && gn(e, u) && (i = i.st(u.key, u)) : s.done();
      }
    }).next(function () {
      return i;
    });
  },
  /**
   * Returns the set of documents that have changed since the specified read
   * time.
   */
  // PORTING NOTE: This is only used for multi-tab synchronization.
  t.prototype.Ur = function (t, e) {
    var n = this,
        r = rt(),
        i = wr(e),
        o = Or(t),
        s = IDBKeyRange.lowerBound(i, !0);
    return o.Zs({
      index: Hr.readTimeIndex,
      range: s
    }, function (t, e) {
      // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
      // the documents directly since we want to keep sentinel deletes.
      var o = gr(n.serializer, e);
      r = r.st(o.key, o), i = e.readTime;
    }).next(function () {
      return {
        Qr: r,
        readTime: _r(i)
      };
    });
  },
  /**
   * Returns the read time of the most recently read document in the cache, or
   * SnapshotVersion.min() if not available.
   */
  // PORTING NOTE: This is only used for multi-tab synchronization.
  t.prototype.Wr = function (t) {
    var e = Or(t),
        n = k.min(); // If there are no existing entries, we return SnapshotVersion.min().

    return e.Zs({
      index: Hr.readTimeIndex,
      reverse: !0
    }, function (t, e, r) {
      e.readTime && (n = _r(e.readTime)), r.done();
    }).next(function () {
      return n;
    });
  }, t.prototype.jr = function (e) {
    return new t.Kr(this, !!e && e.Gr);
  }, t.prototype.zr = function (t) {
    return this.getMetadata(t).next(function (t) {
      return t.byteSize;
    });
  }, t.prototype.getMetadata = function (t) {
    return Rr(t).get(Kr.key).next(function (t) {
      return d(!!t), t;
    });
  }, t.prototype.kr = function (t, e) {
    return Rr(t).put(Kr.key, e);
  },
  /**
   * Decodes `remoteDoc` and returns the document (or null, if the document
   * corresponds to the format used for sentinel deletes).
   */
  t.prototype.$r = function (t) {
    if (t) {
      var e = gr(this.serializer, t);
      return e instanceof en && e.version.isEqual(k.min()) ? null : e;
    }

    return null;
  }, t;
}();
/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */


function Rr(t) {
  return fi.Ms(t, Kr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */


function Or(t) {
  return fi.Ms(t, Hr.store);
}

function Vr(t) {
  return t.path.N();
}
/**
 * Retrusn an approximate size for the given document.
 */


function Ur(t) {
  var e;
  if (t.document) e = t.document;else if (t.unknownDocument) e = t.unknownDocument;else {
    if (!t.noDocument) throw p();
    e = t.noDocument;
  }
  return JSON.stringify(e).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An in-memory implementation of IndexManager.
 */


Pr.Kr =
/** @class */
function (t) {
  /**
   * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
   * @param trackRemovals Whether to create sentinel deletes that can be tracked by
   * `getNewDocumentChanges()`.
   */
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).Hr = e, r.Gr = n, // A map of document sizes prior to applying the changes in this buffer.
    r.Yr = new A(function (t) {
      return t.toString();
    }, function (t, e) {
      return t.isEqual(e);
    }), r;
  }

  return e.__extends(n, t), n.prototype.Un = function (t) {
    var e = this,
        n = [],
        r = 0,
        i = new tt(function (t, e) {
      return m(t.F(), e.F());
    });
    return this.Fn.forEach(function (o, s) {
      var u = e.Yr.get(o);

      if (s) {
        var a = mr(e.Hr.serializer, s, e.readTime);
        i = i.add(o.path.p());
        var c = Ur(a);
        r += c - u, n.push(e.Hr.xn(t, o, a));
      } else if (r -= u, e.Gr) {
        // In order to track removals, we store a "sentinel delete" in the
        // RemoteDocumentCache. This entry is represented by a NoDocument
        // with a version of 0 and ignored by `maybeDecodeDocument()` but
        // preserved in `getNewDocumentChanges()`.
        var h = mr(e.Hr.serializer, new en(o, k.min()), e.readTime);
        n.push(e.Hr.xn(t, o, h));
      } else n.push(e.Hr.Mn(t, o));
    }), i.forEach(function (r) {
      n.push(e.Hr.zn.Ar(t, r));
    }), n.push(this.Hr.updateMetadata(t, r)), Cn.Cn(n);
  }, n.prototype.qn = function (t, e) {
    var n = this; // Record the size of everything we load from the cache so we can compute a delta later.

    return this.Hr.xr(t, e).next(function (t) {
      return null === t ? (n.Yr.set(e, 0), null) : (n.Yr.set(e, t.size), t.Or);
    });
  }, n.prototype.Bn = function (t, e) {
    var n = this; // Record the size of everything we load from the cache so we can compute
    // a delta later.

    return this.Hr.Lr(t, e).next(function (t) {
      var e = t.qr; // Note: `getAllFromCache` returns two maps instead of a single map from
      // keys to `DocumentSizeEntry`s. This is to allow returning the
      // `NullableMaybeDocumentMap` directly, without a conversion.

      return t.Br.forEach(function (t, e) {
        n.Yr.set(t, e);
      }), e;
    });
  }, n;
}(qn);

var Cr =
/** @class */
function () {
  function t() {
    this.Jr = new qr();
  }

  return t.prototype.Ar = function (t, e) {
    return this.Jr.add(e), Cn.resolve();
  }, t.prototype.hs = function (t, e) {
    return Cn.resolve(this.Jr.getEntries(e));
  }, t;
}(),
    qr =
/** @class */
function () {
  function t() {
    this.index = {};
  } // Returns false if the entry already existed.


  return t.prototype.add = function (t) {
    var e = t.S(),
        n = t.p(),
        r = this.index[e] || new tt(P.P),
        i = !r.has(n);
    return this.index[e] = r.add(n), i;
  }, t.prototype.has = function (t) {
    var e = t.S(),
        n = t.p(),
        r = this.index[e];
    return r && r.has(n);
  }, t.prototype.getEntries = function (t) {
    return (this.index[t] || new tt(P.P)).N();
  }, t;
}(),
    Mr =
/** @class */
function () {
  function t(t) {
    this.serializer = t;
  }
  /**
   * Performs database creation and schema upgrades.
   *
   * Note that in production, this method is only ever used to upgrade the schema
   * to SCHEMA_VERSION. Different values of toVersion are only used for testing
   * and local feature development.
   */


  return t.prototype.createOrUpgrade = function (t, e, n, r) {
    var i = this;
    d(n < r && n >= 0 && r <= 10);
    var o = new Zn(e);
    n < 1 && r >= 1 && (function (t) {
      t.createObjectStore(Gr.store);
    }(t), function (t) {
      t.createObjectStore(jr.store, {
        keyPath: jr.keyPath
      }), t.createObjectStore(Br.store, {
        keyPath: Br.keyPath,
        autoIncrement: !0
      }).createIndex(Br.userMutationsIndex, Br.userMutationsKeyPath, {
        unique: !0
      }), t.createObjectStore(zr.store);
    }(t), Jr(t), function (t) {
      t.createObjectStore(Hr.store);
    }(t)); // Migration 2 to populate the targetGlobal object no longer needed since
    // migration 3 unconditionally clears it.

    var s = Cn.resolve();
    return n < 3 && r >= 3 && ( // Brand new clients don't need to drop and recreate--only clients that
    // potentially have corrupt data.
    0 !== n && (function (t) {
      t.deleteObjectStore(Zr.store), t.deleteObjectStore(Yr.store), t.deleteObjectStore(Xr.store);
    }(t), Jr(t)), s = s.next(function () {
      /**
      * Creates the target global singleton row.
      *
      * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
      */
      return function (t) {
        var e = t.store(Xr.store),
            n = new Xr(
        /*highestTargetId=*/
        0,
        /*lastListenSequenceNumber=*/
        0, k.min().A(),
        /*targetCount=*/
        0);
        return e.put(Xr.key, n);
      }(o);
    })), n < 4 && r >= 4 && (0 !== n && ( // Schema version 3 uses auto-generated keys to generate globally unique
    // mutation batch IDs (this was previously ensured internally by the
    // client). To migrate to the new schema, we have to read all mutations
    // and write them back out. We preserve the existing batch IDs to guarantee
    // consistency with other object stores. Any further mutation batch IDs will
    // be auto-generated.
    s = s.next(function () {
      return function (t, e) {
        return e.store(Br.store).Hs().next(function (n) {
          t.deleteObjectStore(Br.store), t.createObjectStore(Br.store, {
            keyPath: Br.keyPath,
            autoIncrement: !0
          }).createIndex(Br.userMutationsIndex, Br.userMutationsKeyPath, {
            unique: !0
          });
          var r = e.store(Br.store),
              i = n.map(function (t) {
            return r.put(t);
          });
          return Cn.Cn(i);
        });
      }(t, o);
    })), s = s.next(function () {
      !function (t) {
        t.createObjectStore(ti.store, {
          keyPath: ti.keyPath
        });
      }(t);
    })), n < 5 && r >= 5 && (s = s.next(function () {
      return i.removeAcknowledgedMutations(o);
    })), n < 6 && r >= 6 && (s = s.next(function () {
      return function (t) {
        t.createObjectStore(Kr.store);
      }(t), i.addDocumentGlobal(o);
    })), n < 7 && r >= 7 && (s = s.next(function () {
      return i.ensureSequenceNumbers(o);
    })), n < 8 && r >= 8 && (s = s.next(function () {
      return i.createCollectionParentIndex(t, o);
    })), n < 9 && r >= 9 && (s = s.next(function () {
      // Multi-Tab used to manage its own changelog, but this has been moved
      // to the DbRemoteDocument object store itself. Since the previous change
      // log only contained transient data, we can drop its object store.
      !function (t) {
        t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
      }(t), function (t) {
        var e = t.objectStore(Hr.store);
        e.createIndex(Hr.readTimeIndex, Hr.readTimeIndexPath, {
          unique: !1
        }), e.createIndex(Hr.collectionReadTimeIndex, Hr.collectionReadTimeIndexPath, {
          unique: !1
        });
      }(e);
    })), n < 10 && r >= 10 && (s = s.next(function () {
      return i.rewriteCanonicalIds(o);
    })), s;
  }, t.prototype.addDocumentGlobal = function (t) {
    var e = 0;
    return t.store(Hr.store).Zs(function (t, n) {
      e += Ur(n);
    }).next(function () {
      var n = new Kr(e);
      return t.store(Kr.store).put(Kr.key, n);
    });
  }, t.prototype.removeAcknowledgedMutations = function (t) {
    var e = this,
        n = t.store(jr.store),
        r = t.store(Br.store);
    return n.Hs().next(function (n) {
      return Cn.forEach(n, function (n) {
        var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
        return r.Hs(Br.userMutationsIndex, i).next(function (r) {
          return Cn.forEach(r, function (r) {
            d(r.userId === n.userId);
            var i = Er(e.serializer, r);
            return Dr(t, n.userId, i).next(function () {});
          });
        });
      });
    });
  },
  /**
   * Ensures that every document in the remote document cache has a corresponding sentinel row
   * with a sequence number. Missing rows are given the most recently used sequence number.
   */
  t.prototype.ensureSequenceNumbers = function (t) {
    var e = t.store(Zr.store),
        n = t.store(Hr.store);
    return t.store(Xr.store).get(Xr.key).next(function (t) {
      var r = [];
      return n.Zs(function (n, i) {
        var o = new P(n),
            s = function (t) {
          return [0, lr(t)];
        }(o);

        r.push(e.get(s).next(function (n) {
          return n ? Cn.resolve() : function (n) {
            return e.put(new Zr(0, lr(n), t.highestListenSequenceNumber));
          }(o);
        }));
      }).next(function () {
        return Cn.Cn(r);
      });
    });
  }, t.prototype.createCollectionParentIndex = function (t, e) {
    // Create the index.
    t.createObjectStore($r.store, {
      keyPath: $r.keyPath
    });

    var n = e.store($r.store),
        r = new qr(),
        i = function i(t) {
      if (r.add(t)) {
        var e = t.S(),
            i = t.p();
        return n.put({
          collectionId: e,
          parent: lr(i)
        });
      }
    }; // Helper to add an index entry iff we haven't already written it.
    // Index existing remote documents.


    return e.store(Hr.store).Zs({
      Xs: !0
    }, function (t, e) {
      var n = new P(t);
      return i(n.p());
    }).next(function () {
      return e.store(zr.store).Zs({
        Xs: !0
      }, function (t, e) {
        t[0];
        var n = t[1],
            r = (t[2], yr(n));
        return i(r.p());
      });
    });
  }, t.prototype.rewriteCanonicalIds = function (t) {
    var e = this,
        n = t.store(Yr.store);
    return n.Zs(function (t, r) {
      var i = Tr(r),
          o = Nr(e.serializer, i);
      return n.put(o);
    });
  }, t;
}(),
    Fr = function Fr(t, e) {
  this.seconds = t, this.nanoseconds = e;
},
    Gr = function Gr(t,
/** Whether to allow shared access from multiple tabs. */
e, n) {
  this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};
/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */

/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */


Gr.store = "owner",
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Gr.key = "owner";

var jr = function jr(
/**
     * The normalized user ID to which this queue belongs.
     */
t,
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e,
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
  this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};
/** Name of the IndexedDb object store.  */


jr.store = "mutationQueues",
/** Keys are automatically assigned via the userId property. */
jr.keyPath = "userId";
/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */

var Br = function Br(
/**
     * The normalized user ID to which this batch belongs.
     */
t,
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e,
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n,
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r,
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
  this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i;
};
/** Name of the IndexedDb object store.  */


Br.store = "mutations",
/** Keys are automatically assigned via the userId, batchId properties. */
Br.keyPath = "batchId",
/** The index name for lookup of mutations by user. */
Br.userMutationsIndex = "userMutationsIndex",
/** The user mutations index is keyed by [userId, batchId] pairs. */
Br.userMutationsKeyPath = ["userId", "batchId"];

var zr =
/** @class */
function () {
  function t() {}
  /**
   * Creates a [userId] key for use in the DbDocumentMutations index to iterate
   * over all of a user's document mutations.
   */


  return t.prefixForUser = function (t) {
    return [t];
  },
  /**
   * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
   * index to iterate over all at document mutations for a given path or lower.
   */
  t.prefixForPath = function (t, e) {
    return [t, lr(e)];
  },
  /**
   * Creates a full index key of [userId, encodedPath, batchId] for inserting
   * and deleting into the DbDocumentMutations index.
   */
  t.key = function (t, e, n) {
    return [t, lr(e), n];
  }, t;
}();

zr.store = "documentMutations",
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
zr.PLACEHOLDER = new zr();

var Qr = function Qr(t, e) {
  this.path = t, this.readTime = e;
},
    Wr = function Wr(t, e) {
  this.path = t, this.version = e;
},
    Hr = // TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function Hr(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t,
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e,
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n,
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r,
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i,
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
  this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o;
};
/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */


Hr.store = "remoteDocuments",
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Hr.readTimeIndex = "readTimeIndex", Hr.readTimeIndexPath = "readTime",
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Hr.collectionReadTimeIndex = "collectionReadTimeIndex", Hr.collectionReadTimeIndexPath = ["parentPath", "readTime"];
/**
 * Contains a single entry that has metadata about the remote document cache.
 */

var Kr =
/**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
function Kr(t) {
  this.byteSize = t;
};

Kr.store = "remoteDocumentGlobal", Kr.key = "remoteDocumentGlobalKey";

var Yr = function Yr(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t,
/**
     * The canonical string representing this query. This is not unique.
     */
e,
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n,
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r,
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i,
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o,
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
  this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

Yr.store = "targets",
/** Keys are automatically assigned via the targetId property. */
Yr.keyPath = "targetId",
/** The name of the queryTargets index. */
Yr.queryTargetsIndexName = "queryTargetsIndex",
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Yr.queryTargetsKeyPath = ["canonicalId", "targetId"];
/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */

var Zr = function Zr(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t,
/**
     * The path to the document, as encoded in the key.
     */
e,
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
  this.targetId = t, this.path = e, this.sequenceNumber = n;
};
/** Name of the IndexedDb object store.  */


Zr.store = "targetDocuments",
/** Keys are automatically assigned via the targetId, path properties. */
Zr.keyPath = ["targetId", "path"],
/** The index name for the reverse index. */
Zr.documentTargetsIndex = "documentTargetsIndex",
/** We also need to create the reverse index for these properties. */
Zr.documentTargetsKeyPath = ["path", "targetId"];
/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */

var Xr = function Xr(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t,
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e,
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n,
/**
     * The number of targets persisted.
     */
r) {
  this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r;
};
/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */


Xr.key = "targetGlobalKey", Xr.store = "targetGlobal";
/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */

var $r = function $r(
/**
     * The collectionId (e.g. 'messages')
     */
t,
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
  this.collectionId = t, this.parent = e;
};
/** Name of the IndexedDb object store. */


function Jr(t) {
  t.createObjectStore(Zr.store, {
    keyPath: Zr.keyPath
  }).createIndex(Zr.documentTargetsIndex, Zr.documentTargetsKeyPath, {
    unique: !0
  }), // NOTE: This is unique only because the TargetId is the suffix.
  t.createObjectStore(Yr.store, {
    keyPath: Yr.keyPath
  }).createIndex(Yr.queryTargetsIndexName, Yr.queryTargetsKeyPath, {
    unique: !0
  }), t.createObjectStore(Xr.store);
}

$r.store = "collectionParents",
/** Keys are automatically assigned via the collectionId, parent properties. */
$r.keyPath = ["collectionId", "parent"];

var ti = function ti( // Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.

/** The auto-generated client id assigned at client startup. */
t,
/** The last time this state was updated. */
e,
/** Whether the client's network connection is enabled. */
n,
/** Whether this client is running in a foreground tab. */
r) {
  this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};
/** Name of the IndexedDb object store. */


ti.store = "clientMetadata",
/** Keys are automatically assigned via the clientId properties. */
ti.keyPath = "clientId";

var ei = e.__spreadArrays(e.__spreadArrays(e.__spreadArrays([jr.store, Br.store, zr.store, Hr.store, Yr.store, Gr.store, Xr.store, Zr.store], [ti.store]), [Kr.store]), [$r.store]),
    ni =
/** @class */
function () {
  function t() {
    /**
     * An in-memory copy of the index entries we've already written since the SDK
     * launched. Used to avoid re-writing the same entry repeatedly.
     *
     * This is *NOT* a complete cache of what's in persistence and so can never be used to
     * satisfy reads.
     */
    this.Xr = new qr();
  }
  /**
   * Adds a new entry to the collection parent index.
   *
   * Repeated calls for the same collectionPath should be avoided within a
   * transaction as IndexedDbIndexManager only caches writes once a transaction
   * has been committed.
   */


  return t.prototype.Ar = function (t, e) {
    var n = this;

    if (!this.Xr.has(e)) {
      var r = e.S(),
          i = e.p();
      t.Wn(function () {
        // Add the collection to the in memory cache only if the transaction was
        // successfully committed.
        n.Xr.add(e);
      });
      var o = {
        collectionId: r,
        parent: lr(i)
      };
      return ri(t).put(o);
    }

    return Cn.resolve();
  }, t.prototype.hs = function (t, e) {
    var n = [],
        r = IDBKeyRange.bound([e, ""], [_(e), ""],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0);
    return ri(t).Hs(r).next(function (t) {
      for (var r = 0, i = t; r < i.length; r++) {
        var o = i[r]; // This collectionId guard shouldn't be necessary (and isn't as long
        // as we're running in a real browser), but there's a bug in
        // indexeddbshim that breaks our range in our tests running in node:
        // https://github.com/axemclion/IndexedDBShim/issues/334

        if (o.collectionId !== e) break;
        n.push(yr(o.parent));
      }

      return n;
    });
  }, t;
}(); // V2 is no longer usable (see comment at top of file)
// Visible for testing

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A persisted implementation of IndexManager.
 */

/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */


function ri(t) {
  return fi.Ms(t, $r.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Offset to ensure non-overlapping target ids. */

/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */


var ii =
/** @class */
function () {
  function t(t) {
    this.Zr = t;
  }

  return t.prototype.next = function () {
    return this.Zr += 2, this.Zr;
  }, t.to = function () {
    // The target cache generator must return '2' in its first call to `next()`
    // as there is no differentiation in the protocol layer between an unset
    // number and the number '0'. If we were to sent a target with target ID
    // '0', the backend would consider it unset and replace it with its own ID.
    return new t(0);
  }, t.eo = function () {
    // Sync engine assigns target IDs for limbo document detection.
    return new t(-1);
  }, t;
}(),
    oi =
/** @class */
function () {
  function t(t, e) {
    this.dr = t, this.serializer = e;
  } // PORTING NOTE: We don't cache global metadata for the target cache, since
  // some of it (in particular `highestTargetId`) can be modified by secondary
  // tabs. We could perhaps be more granular (and e.g. still cache
  // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
  // to IndexedDb whenever we need to read metadata. We can revisit if it turns
  // out to have a meaningful performance impact.


  return t.prototype.no = function (t) {
    var e = this;
    return this.so(t).next(function (n) {
      var r = new ii(n.highestTargetId);
      return n.highestTargetId = r.next(), e.io(t, n).next(function () {
        return n.highestTargetId;
      });
    });
  }, t.prototype.ro = function (t) {
    return this.so(t).next(function (t) {
      return k.m(new x(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
    });
  }, t.prototype.oo = function (t) {
    return this.so(t).next(function (t) {
      return t.highestListenSequenceNumber;
    });
  }, t.prototype.ho = function (t, e, n) {
    var r = this;
    return this.so(t).next(function (i) {
      return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.A()), e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.io(t, i);
    });
  }, t.prototype.ao = function (t, e) {
    var n = this;
    return this.co(t, e).next(function () {
      return n.so(t).next(function (r) {
        return r.targetCount += 1, n.uo(e, r), n.io(t, r);
      });
    });
  }, t.prototype.lo = function (t, e) {
    return this.co(t, e);
  }, t.prototype._o = function (t, e) {
    var n = this;
    return this.fo(t, e.targetId).next(function () {
      return si(t).delete(e.targetId);
    }).next(function () {
      return n.so(t);
    }).next(function (e) {
      return d(e.targetCount > 0), e.targetCount -= 1, n.io(t, e);
    });
  },
  /**
   * Drops any targets with sequence number less than or equal to the upper bound, excepting those
   * present in `activeTargetIds`. Document associations for the removed targets are also removed.
   * Returns the number of targets removed.
   */
  t.prototype.hr = function (t, e, n) {
    var r = this,
        i = 0,
        o = [];
    return si(t).Zs(function (s, u) {
      var a = Tr(u);
      a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r._o(t, a)));
    }).next(function () {
      return Cn.Cn(o);
    }).next(function () {
      return i;
    });
  },
  /**
   * Call provided function with each `TargetData` that we have cached.
   */
  t.prototype.be = function (t, e) {
    return si(t).Zs(function (t, n) {
      var r = Tr(n);
      e(r);
    });
  }, t.prototype.so = function (t) {
    return ui(t).get(Xr.key).next(function (t) {
      return d(null !== t), t;
    });
  }, t.prototype.io = function (t, e) {
    return ui(t).put(Xr.key, e);
  }, t.prototype.co = function (t, e) {
    return si(t).put(Nr(this.serializer, e));
  },
  /**
   * In-place updates the provided metadata to account for values in the given
   * TargetData. Saving is done separately. Returns true if there were any
   * changes to the metadata.
   */
  t.prototype.uo = function (t, e) {
    var n = !1;
    return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n;
  }, t.prototype.do = function (t) {
    return this.so(t).next(function (t) {
      return t.targetCount;
    });
  }, t.prototype.wo = function (t, e) {
    // Iterating by the canonicalId may yield more than one result because
    // canonicalId values are not required to be unique per target. This query
    // depends on the queryTargets index to be efficient.
    var n = G(e),
        r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY]),
        i = null;
    return si(t).Zs({
      range: r,
      index: Yr.queryTargetsIndexName
    }, function (t, n, r) {
      var o = Tr(n); // After finding a potential match, check that the target is
      // actually equal to the requested target.

      j(e, o.target) && (i = o, r.done());
    }).next(function () {
      return i;
    });
  }, t.prototype.To = function (t, e, n) {
    var r = this,
        i = [],
        o = ai(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
    // IndexedDb.

    return e.forEach(function (e) {
      var s = lr(e.path);
      i.push(o.put(new Zr(n, s))), i.push(r.dr.Eo(t, n, e));
    }), Cn.Cn(i);
  }, t.prototype.mo = function (t, e, n) {
    var r = this,
        i = ai(t); // PORTING NOTE: The reverse index (documentsTargets) is maintained by
    // IndexedDb.

    return Cn.forEach(e, function (e) {
      var o = lr(e.path);
      return Cn.Cn([i.delete([n, o]), r.dr.Io(t, n, e)]);
    });
  }, t.prototype.fo = function (t, e) {
    var n = ai(t),
        r = IDBKeyRange.bound([e], [e + 1],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0);
    return n.delete(r);
  }, t.prototype.Ao = function (t, e) {
    var n = IDBKeyRange.bound([e], [e + 1],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0),
        r = ai(t),
        i = ct();
    return r.Zs({
      range: n,
      Xs: !0
    }, function (t, e, n) {
      var r = yr(t[1]),
          o = new V(r);
      i = i.add(o);
    }).next(function () {
      return i;
    });
  }, t.prototype.Nr = function (t, e) {
    var n = lr(e.path),
        r = IDBKeyRange.bound([n], [_(n)],
    /*lowerOpen=*/
    !1,
    /*upperOpen=*/
    !0),
        i = 0;
    return ai(t).Zs({
      index: Zr.documentTargetsIndex,
      Xs: !0,
      range: r
    }, function (t, e, n) {
      var r = t[0]; // Having a sentinel row for a document does not count as containing that document;
      // For the target cache, containing the document means the document is part of some
      // target.

      t[1];
      0 !== r && (i++, n.done());
    }).next(function () {
      return i > 0;
    });
  },
  /**
   * Looks up a TargetData entry by target ID.
   *
   * @param targetId The target ID of the TargetData entry to look up.
   * @return The cached TargetData entry, or null if the cache has no entry for
   * the target.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Me = function (t, e) {
    return si(t).get(e).next(function (t) {
      return t ? Tr(t) : null;
    });
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */


function si(t) {
  return fi.Ms(t, Yr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */


function ui(t) {
  return fi.Ms(t, Xr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */


function ai(t) {
  return fi.Ms(t, Zr.store);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var ci = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",
    hi =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).vr = e, r.Ro = n, r;
  }

  return e.__extends(n, t), n;
}(Fn),
    fi =
/** @class */
function () {
  function t(
  /**
   * Whether to synchronize the in-memory state of multiple tabs and share
   * access to local persistence.
   */
  e, n, r, i, o, s, u, a, c,
  /**
   * If set to true, forcefully obtains database access. Existing tabs will
   * no longer be able to access IndexedDB.
   */
  f) {
    if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, this.ms = o, this.window = s, this.document = u, this.Po = c, this.Vo = f, this.yo = null, this.po = !1, this.isPrimary = !1, this.networkEnabled = !0,
    /** Our window.unload handler, if registered. */
    this.bo = null, this.inForeground = !1,
    /** Our 'visibilitychange' listener if registered. */
    this.vo = null,
    /** The client metadata refresh task. */
    this.So = null,
    /** The last time we garbage collected the client metadata object store. */
    this.Do = Number.NEGATIVE_INFINITY,
    /** A listener to notify on primary state changes. */
    this.Co = function (t) {
      return Promise.resolve();
    }, !t.ks()) throw new D(S.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
    this.dr = new di(this, i), this.No = n + "main", this.serializer = new vr(a), this.Fo = new Wn(this.No, 10, new Mr(this.serializer)), this.ko = new oi(this.dr, this.serializer), this.zn = new ni(), this.Kn = new Pr(this.serializer, this.zn), this.window && this.window.localStorage ? this.$o = this.window.localStorage : (this.$o = null, !1 === f && h("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
  }

  return t.Ms = function (t, e) {
    if (t instanceof hi) return Wn.Ms(t.vr, e);
    throw p();
  },
  /**
   * Attempt to start IndexedDb persistence.
   *
   * @return {Promise<void>} Whether persistence was enabled.
   */
  t.prototype.start = function () {
    var t = this; // NOTE: This is expected to fail sometimes (in the case of another tab
    // already having the persistence lock), so it's the first thing we should
    // do.

    return this.xo().then(function () {
      if (!t.isPrimary && !t.allowTabSynchronization) // Fail `start()` if `synchronizeTabs` is disabled and we cannot
        // obtain the primary lease.
        throw new D(S.FAILED_PRECONDITION, ci);
      return t.Oo(), t.Mo(), t.Lo(), t.runTransaction("getHighestListenSequenceNumber", "readonly", function (e) {
        return t.ko.oo(e);
      });
    }).then(function (e) {
      t.yo = new Bn(e, t.Po);
    }).then(function () {
      t.po = !0;
    }).catch(function (e) {
      return t.Fo && t.Fo.close(), Promise.reject(e);
    });
  },
  /**
   * Registers a listener that gets called when the primary state of the
   * instance changes. Upon registering, this listener is invoked immediately
   * with the current primary state.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.qo = function (t) {
    var n = this;
    return this.Co = function (r) {
      return e.__awaiter(n, void 0, void 0, function () {
        return e.__generator(this, function (e) {
          return this.tr ? [2
          /*return*/
          , t(r)] : [2
          /*return*/
          ];
        });
      });
    }, t(this.isPrimary);
  },
  /**
   * Registers a listener that gets called when the database receives a
   * version change event indicating that it has deleted.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.Bo = function (t) {
    var n = this;
    this.Fo.Bs(function (r) {
      return e.__awaiter(n, void 0, void 0, function () {
        return e.__generator(this, function (e) {
          switch (e.label) {
            case 0:
              return null === r.newVersion ? [4
              /*yield*/
              , t()] : [3
              /*break*/
              , 2];

            case 1:
              e.sent(), e.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    });
  },
  /**
   * Adjusts the current network state in the client's metadata, potentially
   * affecting the primary lease.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.Uo = function (t) {
    var n = this;
    this.networkEnabled !== t && (this.networkEnabled = t, // Schedule a primary lease refresh for immediate execution. The eventual
    // lease update will be propagated via `primaryStateListener`.
    this.ms.ai(function () {
      return e.__awaiter(n, void 0, void 0, function () {
        return e.__generator(this, function (t) {
          switch (t.label) {
            case 0:
              return this.tr ? [4
              /*yield*/
              , this.xo()] : [3
              /*break*/
              , 2];

            case 1:
              t.sent(), t.label = 2;

            case 2:
              return [2
              /*return*/
              ];
          }
        });
      });
    }));
  },
  /**
   * Updates the client metadata in IndexedDb and attempts to either obtain or
   * extend the primary lease for the local client. Asynchronously notifies the
   * primary state listener if the client either newly obtained or released its
   * primary lease.
   */
  t.prototype.xo = function () {
    var t = this;
    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", function (e) {
      return pi(e).put(new ti(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next(function () {
        if (t.isPrimary) return t.Qo(e).next(function (e) {
          e || (t.isPrimary = !1, t.ms.gi(function () {
            return t.Co(!1);
          }));
        });
      }).next(function () {
        return t.Wo(e);
      }).next(function (n) {
        return t.isPrimary && !n ? t.jo(e).next(function () {
          return !1;
        }) : !!n && t.Ko(e).next(function () {
          return !0;
        });
      });
    }).catch(function (e) {
      if (Yn(e)) // Proceed with the existing state. Any subsequent access to
        // IndexedDB will verify the lease.
        return c("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
      if (!t.allowTabSynchronization) throw e;
      return c("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e),
      /* isPrimary= */
      !1;
    }).then(function (e) {
      t.isPrimary !== e && t.ms.gi(function () {
        return t.Co(e);
      }), t.isPrimary = e;
    });
  }, t.prototype.Qo = function (t) {
    var e = this;
    return li(t).get(Gr.key).next(function (t) {
      return Cn.resolve(e.Go(t));
    });
  }, t.prototype.zo = function (t) {
    return pi(t).delete(this.clientId);
  },
  /**
   * If the garbage collection threshold has passed, prunes the
   * RemoteDocumentChanges and the ClientMetadata store based on the last update
   * time of all clients.
   */
  t.prototype.Ho = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var n,
          r,
          i,
          o,
          s = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return !this.isPrimary || this.Yo(this.Do, 18e5) ? [3
            /*break*/
            , 2] : (this.Do = Date.now(), [4
            /*yield*/
            , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function (e) {
              var n = t.Ms(e, ti.store);
              return n.Hs().next(function (t) {
                var e = s.Jo(t, 18e5),
                    r = t.filter(function (t) {
                  return -1 === e.indexOf(t);
                }); // Delete metadata for clients that are no longer considered active.

                return Cn.forEach(r, function (t) {
                  return n.delete(t.clientId);
                }).next(function () {
                  return r;
                });
              });
            }).catch(function () {
              return [];
            })]);

          case 1:
            // Delete potential leftover entries that may continue to mark the
            // inactive clients as zombied in LocalStorage.
            // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
            // the client atomically, but we can't. So we opt to delete the IndexedDb
            // entries first to avoid potentially reviving a zombied client.
            if (n = e.sent(), this.$o) for (r = 0, i = n; r < i.length; r++) {
              o = i[r], this.$o.removeItem(this.Xo(o.clientId));
            }
            e.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Schedules a recurring timer to update the client metadata and to either
   * extend or acquire the primary lease if the client is eligible.
   */
  t.prototype.Lo = function () {
    var t = this;
    this.So = this.ms.Ss("client_metadata_refresh"
    /* ClientMetadataRefresh */
    , 4e3, function () {
      return t.xo().then(function () {
        return t.Ho();
      }).then(function () {
        return t.Lo();
      });
    });
  },
  /** Checks whether `client` is the local client. */
  t.prototype.Go = function (t) {
    return !!t && t.ownerId === this.clientId;
  },
  /**
   * Evaluate the state of all active clients and determine whether the local
   * client is or can act as the holder of the primary lease. Returns whether
   * the client is eligible for the lease, but does not actually acquire it.
   * May return 'false' even if there is no active leaseholder and another
   * (foreground) client should become leaseholder instead.
   */
  t.prototype.Wo = function (t) {
    var e = this;
    return this.Vo ? Cn.resolve(!0) : li(t).get(Gr.key).next(function (n) {
      // A client is eligible for the primary lease if:
      // - its network is enabled and the client's tab is in the foreground.
      // - its network is enabled and no other client's tab is in the
      //   foreground.
      // - every clients network is disabled and the client's tab is in the
      //   foreground.
      // - every clients network is disabled and no other client's tab is in
      //   the foreground.
      // - the `forceOwningTab` setting was passed in.
      if (null !== n && e.Yo(n.leaseTimestampMs, 5e3) && !e.Zo(n.ownerId)) {
        if (e.Go(n) && e.networkEnabled) return !0;

        if (!e.Go(n)) {
          if (!n.allowTabSynchronization) // Fail the `canActAsPrimary` check if the current leaseholder has
            // not opted into multi-tab synchronization. If this happens at
            // client startup, we reject the Promise returned by
            // `enablePersistence()` and the user can continue to use Firestore
            // with in-memory persistence.
            // If this fails during a lease refresh, we will instead block the
            // AsyncQueue from executing further operations. Note that this is
            // acceptable since mixing & matching different `synchronizeTabs`
            // settings is not supported.
            // TODO(b/114226234): Remove this check when `synchronizeTabs` can
            // no longer be turned off.
            throw new D(S.FAILED_PRECONDITION, ci);
          return !1;
        }
      }

      return !(!e.networkEnabled || !e.inForeground) || pi(t).Hs().next(function (t) {
        return void 0 === e.Jo(t, 5e3).find(function (t) {
          if (e.clientId !== t.clientId) {
            var n = !e.networkEnabled && t.networkEnabled,
                r = !e.inForeground && t.inForeground,
                i = e.networkEnabled === t.networkEnabled;
            if (n || r && i) return !0;
          }

          return !1;
        });
      });
    }).next(function (t) {
      return e.isPrimary !== t && c("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t;
    });
  }, t.prototype.th = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
            // has obtained the primary lease.
            // The shutdown() operations are idempotent and can be called even when
            // start() aborted (e.g. because it couldn't acquire the persistence lease).
            return this.po = !1, this.eh(), this.So && (this.So.cancel(), this.So = null), this.nh(), this.sh(), [4
            /*yield*/
            , this.Fo.runTransaction("readwrite", [Gr.store, ti.store], function (e) {
              var n = new hi(e, Bn.Es);
              return t.jo(n).next(function () {
                return t.zo(n);
              });
            })];

          case 1:
            // The shutdown() operations are idempotent and can be called even when
            // start() aborted (e.g. because it couldn't acquire the persistence lease).
            // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
            // has obtained the primary lease.
            return e.sent(), this.Fo.close(), // Remove the entry marking the client as zombied from LocalStorage since
            // we successfully deleted its metadata from IndexedDb.
            this.ih(), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Returns clients that are not zombied and have an updateTime within the
   * provided threshold.
   */
  t.prototype.Jo = function (t, e) {
    var n = this;
    return t.filter(function (t) {
      return n.Yo(t.updateTimeMs, e) && !n.Zo(t.clientId);
    });
  },
  /**
   * Returns the IDs of the clients that are currently active. If multi-tab
   * is not supported, returns an array that only contains the local client's
   * ID.
   *
   * PORTING NOTE: This is only used for Web multi-tab.
   */
  t.prototype.rh = function () {
    var t = this;
    return this.runTransaction("getActiveClients", "readonly", function (e) {
      return pi(e).Hs().next(function (e) {
        return t.Jo(e, 18e5).map(function (t) {
          return t.clientId;
        });
      });
    });
  }, Object.defineProperty(t.prototype, "tr", {
    get: function get() {
      return this.po;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.oh = function (t) {
    return Ar.Tr(t, this.serializer, this.zn, this.dr);
  }, t.prototype.hh = function () {
    return this.ko;
  }, t.prototype.ah = function () {
    return this.Kn;
  }, t.prototype.uh = function () {
    return this.zn;
  }, t.prototype.runTransaction = function (t, e, n) {
    var r = this;
    c("IndexedDbPersistence", "Starting transaction:", t);
    var i,
        o = "readonly" === e ? "readonly" : "readwrite"; // Do all transactions as readwrite against all object stores, since we
    // are the only reader/writer.

    return this.Fo.runTransaction(o, ei, function (o) {
      return i = new hi(o, r.yo ? r.yo.next() : Bn.Es), "readwrite-primary" === e ? r.Qo(i).next(function (t) {
        return !!t || r.Wo(i);
      }).next(function (e) {
        if (!e) throw h("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, r.ms.gi(function () {
          return r.Co(!1);
        }), new D(S.FAILED_PRECONDITION, Mn);
        return n(i);
      }).next(function (t) {
        return r.Ko(i).next(function () {
          return t;
        });
      }) : r.lh(i).next(function () {
        return n(i);
      });
    }).then(function (t) {
      return i.jn(), t;
    });
  },
  /**
   * Verifies that the current tab is the primary leaseholder or alternatively
   * that the leaseholder has opted into multi-tab synchronization.
   */
  // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
  // be turned off.
  t.prototype.lh = function (t) {
    var e = this;
    return li(t).get(Gr.key).next(function (t) {
      if (null !== t && e.Yo(t.leaseTimestampMs, 5e3) && !e.Zo(t.ownerId) && !e.Go(t) && !(e.Vo || e.allowTabSynchronization && t.allowTabSynchronization)) throw new D(S.FAILED_PRECONDITION, ci);
    });
  },
  /**
   * Obtains or extends the new primary lease for the local client. This
   * method does not verify that the client is eligible for this lease.
   */
  t.prototype.Ko = function (t) {
    var e = new Gr(this.clientId, this.allowTabSynchronization, Date.now());
    return li(t).put(Gr.key, e);
  }, t.ks = function () {
    return Wn.ks();
  },
  /** Checks the primary lease and removes it if we are the current primary. */
  t.prototype.jo = function (t) {
    var e = this,
        n = li(t);
    return n.get(Gr.key).next(function (t) {
      return e.Go(t) ? (c("IndexedDbPersistence", "Releasing primary lease."), n.delete(Gr.key)) : Cn.resolve();
    });
  },
  /** Verifies that `updateTimeMs` is within `maxAgeMs`. */
  t.prototype.Yo = function (t, e) {
    var n = Date.now();
    return !(t < n - e || t > n && (h("Detected an update time that is in the future: " + t + " > " + n), 1));
  }, t.prototype.Oo = function () {
    var t = this;
    null !== this.document && "function" == typeof this.document.addEventListener && (this.vo = function () {
      t.ms.ai(function () {
        return t.inForeground = "visible" === t.document.visibilityState, t.xo();
      });
    }, this.document.addEventListener("visibilitychange", this.vo), this.inForeground = "visible" === this.document.visibilityState);
  }, t.prototype.nh = function () {
    this.vo && (this.document.removeEventListener("visibilitychange", this.vo), this.vo = null);
  },
  /**
   * Attaches a window.unload handler that will synchronously write our
   * clientId to a "zombie client id" location in LocalStorage. This can be used
   * by tabs trying to acquire the primary lease to determine that the lease
   * is no longer valid even if the timestamp is recent. This is particularly
   * important for the refresh case (so the tab correctly re-acquires the
   * primary lease). LocalStorage is used for this rather than IndexedDb because
   * it is a synchronous API and so can be used reliably from  an unload
   * handler.
   */
  t.prototype.Mo = function () {
    var t,
        e = this;
    "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.bo = function () {
      // Note: In theory, this should be scheduled on the AsyncQueue since it
      // accesses internal state. We execute this code directly during shutdown
      // to make sure it gets a chance to run.
      e.eh(), e.ms.ai(function () {
        return e.th();
      });
    }, this.window.addEventListener("unload", this.bo));
  }, t.prototype.sh = function () {
    this.bo && (this.window.removeEventListener("unload", this.bo), this.bo = null);
  },
  /**
   * Returns whether a client is "zombied" based on its LocalStorage entry.
   * Clients become zombied when their tab closes without running all of the
   * cleanup logic in `shutdown()`.
   */
  t.prototype.Zo = function (t) {
    var e;

    try {
      var n = null !== (null === (e = this.$o) || void 0 === e ? void 0 : e.getItem(this.Xo(t)));
      return c("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), n;
    } catch (t) {
      // Gracefully handle if LocalStorage isn't working.
      return h("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
    }
  },
  /**
   * Record client as zombied (a client that had its tab closed). Zombied
   * clients are ignored during primary tab selection.
   */
  t.prototype.eh = function () {
    if (this.$o) try {
      this.$o.setItem(this.Xo(this.clientId), String(Date.now()));
    } catch (t) {
      // Gracefully handle if LocalStorage isn't available / working.
      h("Failed to set zombie client id.", t);
    }
  },
  /** Removes the zombied client entry if it exists. */
  t.prototype.ih = function () {
    if (this.$o) try {
      this.$o.removeItem(this.Xo(this.clientId));
    } catch (t) {// Ignore
    }
  }, t.prototype.Xo = function (t) {
    return "firestore_zombie_" + this.persistenceKey + "_" + t;
  }, t;
}();
/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */

/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */


function li(t) {
  return fi.Ms(t, Gr.store);
}
/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */


function pi(t) {
  return fi.Ms(t, ti.store);
}
/** Provides LRU functionality for IndexedDB persistence. */


var di =
/** @class */
function () {
  function t(t, e) {
    this.db = t, this.Yi = new fr(this, e);
  }

  return t.prototype.ir = function (t) {
    var e = this._h(t);

    return this.db.hh().do(t).next(function (t) {
      return e.next(function (e) {
        return t + e;
      });
    });
  }, t.prototype._h = function (t) {
    var e = 0;
    return this.or(t, function (t) {
      e++;
    }).next(function () {
      return e;
    });
  }, t.prototype.be = function (t, e) {
    return this.db.hh().be(t, e);
  }, t.prototype.or = function (t, e) {
    return this.fh(t, function (t, n) {
      return e(n);
    });
  }, t.prototype.Eo = function (t, e, n) {
    return yi(t, n);
  }, t.prototype.Io = function (t, e, n) {
    return yi(t, n);
  }, t.prototype.hr = function (t, e, n) {
    return this.db.hh().hr(t, e, n);
  }, t.prototype.Dr = function (t, e) {
    return yi(t, e);
  },
  /**
   * Returns true if anything would prevent this document from being garbage
   * collected, given that the document in question is not present in any
   * targets and has a sequence number less than or equal to the upper bound for
   * the collection run.
   */
  t.prototype.dh = function (t, e) {
    return function (t, e) {
      var n = !1;
      return Lr(t).ti(function (r) {
        return Sr(t, r, e).next(function (t) {
          return t && (n = !0), Cn.resolve(!t);
        });
      }).next(function () {
        return n;
      });
    }(t, e);
  }, t.prototype.ar = function (t, e) {
    var n = this,
        r = this.db.ah().jr(),
        i = [],
        o = 0;
    return this.fh(t, function (s, u) {
      if (u <= e) {
        var a = n.dh(t, s).next(function (e) {
          if (!e) // Our size accounting requires us to read all documents before
            // removing them.
            return o++, r.Ln(t, s).next(function () {
              return r.Mn(s), ai(t).delete([0, lr(s.path)]);
            });
        });
        i.push(a);
      }
    }).next(function () {
      return Cn.Cn(i);
    }).next(function () {
      return r.apply(t);
    }).next(function () {
      return o;
    });
  }, t.prototype.removeTarget = function (t, e) {
    var n = e.tt(t.Ro);
    return this.db.hh().lo(t, n);
  }, t.prototype.wh = function (t, e) {
    return yi(t, e);
  },
  /**
   * Call provided function for each document in the cache that is 'orphaned'. Orphaned
   * means not a part of any target, so the only entry in the target-document index for
   * that document will be the sentinel row (targetId 0), which will also have the sequence
   * number for the last time the document was accessed.
   */
  t.prototype.fh = function (t, e) {
    var n,
        r = ai(t),
        i = Bn.Es;
    return r.Zs({
      index: Zr.documentTargetsIndex
    }, function (t, r) {
      var o = t[0],
          s = (t[1], r.path),
          u = r.sequenceNumber;
      0 === o ? ( // if nextToReport is valid, report it, this is a new key so the
      // last one must not be a member of any targets.
      i !== Bn.Es && e(new V(yr(n)), i), // set nextToReport to be this sequence number. It's the next one we
      // might report, if we don't find any targets for this document.
      // Note that the sequence number must be defined when the targetId
      // is 0.
      i = u, n = s) : // set nextToReport to be invalid, we know we don't need to report
      // this one since we found a target for it.
      i = Bn.Es;
    }).next(function () {
      // Since we report sequence numbers after getting to the next key, we
      // need to check if the last key we iterated over was an orphaned
      // document and report it.
      i !== Bn.Es && e(new V(yr(n)), i);
    });
  }, t.prototype.ur = function (t) {
    return this.db.ah().zr(t);
  }, t;
}();

function yi(t, e) {
  return ai(t).put(
  /**
  * @return A value suitable for writing a sentinel row in the target-document
  * store.
  */
  function (t, e) {
    return new Zr(0, lr(t.path), e);
  }(e, t.Ro));
}
/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */


function vi(t, e) {
  // Use two different prefix formats:
  //   * firestore / persistenceKey / projectID . databaseID / ...
  //   * firestore / persistenceKey / projectID / ...
  // projectIDs are DNS-compatible names and cannot contain dots
  // so there's no danger of collisions.
  var n = t.projectId;
  return t.i || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
  /**
  * Implements `LocalStore` interface.
  *
  * Note: some field defined in this class might have public access level, but
  * the class is not exported so they are only accessible from this module.
  * This is useful to implement optional features (like bundles) in free
  * functions, such that they are tree-shakeable.
  */
  ;
}

var gi =
/** @class */
function () {
  function t(
  /** Manages our in-memory or durable persistence. */
  t, e, n) {
    this.persistence = t, this.Th = e,
    /**
         * Maps a targetID to data about its target.
         *
         * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
         * of `applyRemoteEvent()` idempotent.
         */
    this.Eh = new X(m),
    /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this.mh = new A(function (t) {
      return G(t);
    }, j),
    /**
         * The read time of the last entry processed by `getNewDocumentChanges()`.
         *
         * PORTING NOTE: This is only used for multi-tab synchronization.
         */
    this.Ih = k.min(), this.Gn = t.oh(n), this.Ah = t.ah(), this.ko = t.hh(), this.Rh = new Gn(this.Ah, this.Gn, this.persistence.uh()), this.Th.Ph(this.Rh);
  }

  return t.prototype.er = function (t) {
    var e = this;
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function (n) {
      return t.cr(n, e.Eh);
    });
  }, t;
}();
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */


function mi(t, e) {
  var n = y(t);
  return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function (t) {
    var r = e.batch.keys(),
        i = n.Ah.jr({
      Gr: !0
    });
    return function (t, e, n, r) {
      var i = n.batch,
          o = i.keys(),
          s = Cn.resolve();
      return o.forEach(function (t) {
        s = s.next(function () {
          return r.Ln(e, t);
        }).next(function (e) {
          var o = e,
              s = n.Pn.get(t);
          d(null !== s), (!o || o.version.o(s) < 0) && (o = i.En(t, o, n)) && // We use the commitVersion as the readTime rather than the
          // document's updateTime since the updateTime is not advanced
          // for updates that do not modify the underlying document.
          r.xn(o, n.Rn);
        });
      }), s.next(function () {
        return t.Gn.br(e, i);
      });
    }(n, t, e, i).next(function () {
      return i.apply(t);
    }).next(function () {
      return n.Gn.Cr(t);
    }).next(function () {
      return n.Rh.Zn(t, r);
    });
  });
}
/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */

/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */


function wi(t) {
  var e = y(t);
  return e.persistence.runTransaction("Get last remote snapshot version", "readonly", function (t) {
    return e.ko.ro(t);
  });
}
/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */


function _i(t, e) {
  var n = y(t),
      r = e.Z,
      i = n.Eh;
  return n.persistence.runTransaction("Apply remote event", "readwrite-primary", function (t) {
    var o = n.Ah.jr({
      Gr: !0
    }); // Reset newTargetDataByTargetMap in case this transaction gets re-run.

    i = n.Eh;
    var s = [];
    e.Wt.forEach(function (e, o) {
      var u = i.get(o);

      if (u) {
        // Only update the remote keys if the target is still active. This
        // ensures that we can persist the updated target data along with
        // the updated assignment.
        s.push(n.ko.mo(t, e.Zt, o).next(function () {
          return n.ko.To(t, e.Jt, o);
        }));
        var a = e.resumeToken; // Update the resume token if the change includes one.

        if (a.Y() > 0) {
          var c = u.et(a, r).tt(t.Ro);
          i = i.st(o, c), // Update the target data if there are target changes (or if
          // sufficient time has passed since the last update).

          /**
          * Returns true if the newTargetData should be persisted during an update of
          * an active target. TargetData should always be persisted when a target is
          * being released and should not call this function.
          *
          * While the target is active, TargetData updates can be omitted when nothing
          * about the target has changed except metadata like the resume token or
          * snapshot version. Occasionally it's worth the extra write to prevent these
          * values from getting too stale after a crash, but this doesn't have to be
          * too frequent.
          */
          function (t, e, n) {
            // Always persist target data if we don't already have a resume token.
            return d(e.resumeToken.Y() > 0), 0 === t.resumeToken.Y() || // Don't allow resume token changes to be buffered indefinitely. This
            // allows us to be reasonably up-to-date after a crash and avoids needing
            // to loop over all active queries on shutdown. Especially in the browser
            // we may not get time to do anything interesting while the current tab is
            // closing.
            e.Z.I() - t.Z.I() >= 3e8 || n.Jt.size + n.Xt.size + n.Zt.size > 0;
          }(u, c, e) && s.push(n.ko.lo(t, c));
        }
      }
    });
    var u = rt(),
        a = ct(); // HACK: The only reason we allow a null snapshot version is so that we
    // can synthesize remote events when we get permission denied errors while
    // trying to resolve the state of a locally cached document that is in
    // limbo.

    if (e.Kt.forEach(function (t, e) {
      a = a.add(t);
    }), // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
    // documents in advance in a single call.
    s.push(o.getEntries(t, a).next(function (i) {
      e.Kt.forEach(function (a, h) {
        var f = i.get(a); // Note: The order of the steps below is important, since we want
        // to ensure that rejected limbo resolutions (which fabricate
        // NoDocuments with SnapshotVersion.min()) never add documents to
        // cache.

        h instanceof en && h.version.isEqual(k.min()) ? ( // NoDocuments with SnapshotVersion.min() are used in manufactured
        // events. We remove these documents from cache since we lost
        // access.
        o.Mn(a, r), u = u.st(a, h)) : null == f || h.version.o(f.version) > 0 || 0 === h.version.o(f.version) && f.hasPendingWrites ? (o.xn(h, r), u = u.st(a, h)) : c("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", f.version, " Watch version:", h.version), e.Gt.has(a) && s.push(n.persistence.dr.wh(t, a));
      });
    })), !r.isEqual(k.min())) {
      var h = n.ko.ro(t).next(function (e) {
        return n.ko.ho(t, t.Ro, r);
      });
      s.push(h);
    }

    return Cn.Cn(s).next(function () {
      return o.apply(t);
    }).next(function () {
      return n.Rh.ts(t, u);
    });
  }).then(function (t) {
    return n.Eh = i, t;
  });
}
/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */


function bi(t, e) {
  var n = y(t);
  return n.persistence.runTransaction("Get next mutation batch", "readonly", function (t) {
    return void 0 === e && (e = -1), n.Gn.gr(t, e);
  });
}
/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */

/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */


function Ii(t, e) {
  var n = y(t);
  return n.persistence.runTransaction("Allocate target", "readwrite", function (t) {
    var r;
    return n.ko.wo(t, e).next(function (i) {
      return i ? ( // This target has been listened to previously, so reuse the
      // previous targetID.
      // TODO(mcg): freshen last accessed date?
      r = i, Cn.resolve(r)) : n.ko.no(t).next(function (i) {
        return r = new H(e, i, 0
        /* Listen */
        , t.Ro), n.ko.ao(t, r).next(function () {
          return r;
        });
      });
    });
  }).then(function (t) {
    // If Multi-Tab is enabled, the existing target data may be newer than
    // the in-memory data
    var r = n.Eh.get(t.targetId);
    return (null === r || t.Z.o(r.Z) > 0) && (n.Eh = n.Eh.st(t.targetId, t), n.mh.set(e, t.targetId)), t;
  });
}
/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.

/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.


function Ei(t, n, r) {
  return e.__awaiter(this, void 0, void 0, function () {
    var i, o, s, u;
    return e.__generator(this, function (e) {
      switch (e.label) {
        case 0:
          i = y(t), o = i.Eh.get(n), s = r ? "readwrite" : "readwrite-primary", e.label = 1;

        case 1:
          return e.trys.push([1, 4,, 5]), r ? [3
          /*break*/
          , 3] : [4
          /*yield*/
          , i.persistence.runTransaction("Release target", s, function (t) {
            return i.persistence.dr.removeTarget(t, o);
          })];

        case 2:
          e.sent(), e.label = 3;

        case 3:
          return [3
          /*break*/
          , 5];

        case 4:
          if (!Yn(u = e.sent())) throw u; // All `releaseTarget` does is record the final metadata state for the
          // target, but we've been recording this periodically during target
          // activity. If we lose this write this could cause a very slight
          // difference in the order of target deletion during GC, but we
          // don't define exact LRU semantics so this is acceptable.

          return c("LocalStore", "Failed to update sequence numbers for target " + n + ": " + u), [3
          /*break*/
          , 5];

        case 5:
          return i.Eh = i.Eh.remove(n), i.mh.delete(o.target), [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults Whether results from previous executions can
 * be used to optimize this query execution.
 */


function Ti(t, e, n) {
  var r = y(t),
      i = k.min(),
      o = ct();
  return r.persistence.runTransaction("Execute query", "readonly", function (t) {
    return function (t, e, n) {
      var r = y(t),
          i = r.mh.get(n);
      return void 0 !== i ? Cn.resolve(r.Eh.get(i)) : r.ko.wo(e, n);
    }(r, t, hn(e)).next(function (e) {
      if (e) return i = e.lastLimboFreeSnapshotVersion, r.ko.Ao(t, e.targetId).next(function (t) {
        o = t;
      });
    }).next(function () {
      return r.Th.ns(t, e, n ? i : k.min(), n ? o : ct());
    }).next(function (t) {
      return {
        documents: t,
        gh: o
      };
    });
  });
} // PORTING NOTE: Multi-Tab only.


function Ni(t, e) {
  var n = y(t),
      r = y(n.ko),
      i = n.Eh.get(e);
  return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", function (t) {
    return r.Me(t, e).next(function (t) {
      return t ? t.target : null;
    });
  });
}
/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.

/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */


function Ai(t) {
  return e.__awaiter(this, void 0, void 0, function () {
    return e.__generator(this, function (e) {
      if (t.code !== S.FAILED_PRECONDITION || t.message !== Mn) throw t;
      return c("LocalStore", "Unexpectedly lost primary lease"), [2
      /*return*/
      ];
    });
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */


var Si =
/** @class */
function () {
  function t() {
    // A set of outstanding references to a document sorted by key.
    this.Vh = new tt(Di.yh), // A set of outstanding references to a document sorted by target id.
    this.ph = new tt(Di.bh)
    /** Returns true if the reference set contains no references. */
    ;
  }

  return t.prototype._ = function () {
    return this.Vh._();
  },
  /** Adds a reference to the given document key for the given ID. */
  t.prototype.Eo = function (t, e) {
    var n = new Di(t, e);
    this.Vh = this.Vh.add(n), this.ph = this.ph.add(n);
  },
  /** Add references to the given document keys for the given ID. */
  t.prototype.vh = function (t, e) {
    var n = this;
    t.forEach(function (t) {
      return n.Eo(t, e);
    });
  },
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  t.prototype.Io = function (t, e) {
    this.Sh(new Di(t, e));
  }, t.prototype.Dh = function (t, e) {
    var n = this;
    t.forEach(function (t) {
      return n.Io(t, e);
    });
  },
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  t.prototype.Ch = function (t) {
    var e = this,
        n = new V(new P([])),
        r = new Di(n, t),
        i = new Di(n, t + 1),
        o = [];
    return this.ph.St([r, i], function (t) {
      e.Sh(t), o.push(t.key);
    }), o;
  }, t.prototype.Nh = function () {
    var t = this;
    this.Vh.forEach(function (e) {
      return t.Sh(e);
    });
  }, t.prototype.Sh = function (t) {
    this.Vh = this.Vh.delete(t), this.ph = this.ph.delete(t);
  }, t.prototype.Fh = function (t) {
    var e = new V(new P([])),
        n = new Di(e, t),
        r = new Di(e, t + 1),
        i = ct();
    return this.ph.St([n, r], function (t) {
      i = i.add(t.key);
    }), i;
  }, t.prototype.Nr = function (t) {
    var e = new Di(t, 0),
        n = this.Vh.Ct(e);
    return null !== n && t.isEqual(n.key);
  }, t;
}(),
    Di =
/** @class */
function () {
  function t(t, e) {
    this.key = t, this.kh = e
    /** Compare by key then by ID */
    ;
  }

  return t.yh = function (t, e) {
    return V.P(t.key, e.key) || m(t.kh, e.kh);
  },
  /** Compare by ID then by key */
  t.bh = function (t, e) {
    return m(t.kh, e.kh) || V.P(t.key, e.key);
  }, t;
}(),
    xi =
/** @class */
function () {
  function t(t) {
    this.uid = t;
  }

  return t.prototype.Er = function () {
    return null != this.uid;
  },
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  t.prototype.$h = function () {
    return this.Er() ? "uid:" + this.uid : "anonymous-user";
  }, t.prototype.isEqual = function (t) {
    return t.uid === this.uid;
  }, t;
}();
/** A user with a null UID. */


xi.UNAUTHENTICATED = new xi(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
xi.xh = new xi("google-credentials-uid"), xi.Oh = new xi("first-party-uid");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ki = function ki(t, e) {
  this.user = e, this.type = "OAuth", this.Mh = {}, // Set the headers using Object Literal notation to avoid minification
  this.Mh.Authorization = "Bearer " + t;
},
    Li =
/** @class */
function () {
  function t() {
    /**
     * Stores the listener registered with setChangeListener()
     * This isn't actually necessary since the UID never changes, but we use this
     * to verify the listen contract is adhered to in tests.
     */
    this.Lh = null;
  }

  return t.prototype.getToken = function () {
    return Promise.resolve(null);
  }, t.prototype.qh = function () {}, t.prototype.Bh = function (t) {
    this.Lh = t, // Fire with initial user.
    t(xi.UNAUTHENTICATED);
  }, t.prototype.Uh = function () {
    this.Lh = null;
  }, t;
}(),
    Pi =
/** @class */
function () {
  function t(t) {
    var e = this;
    /**
     * The auth token listener registered with FirebaseApp, retained here so we
     * can unregister it.
     */

    this.Qh = null,
    /** Tracks the current User. */
    this.currentUser = xi.UNAUTHENTICATED, this.Wh = !1,
    /**
         * Counter used to detect if the token changed while a getToken request was
         * outstanding.
         */
    this.jh = 0,
    /** The listener registered with setChangeListener(). */
    this.Lh = null, this.forceRefresh = !1, this.Qh = function () {
      e.jh++, e.currentUser = e.Kh(), e.Wh = !0, e.Lh && e.Lh(e.currentUser);
    }, this.jh = 0, this.auth = t.getImmediate({
      optional: !0
    }), this.auth ? this.auth.addAuthTokenListener(this.Qh) : ( // if auth is not available, invoke tokenListener once with null token
    this.Qh(null), t.get().then(function (t) {
      e.auth = t, e.Qh && // tokenListener can be removed by removeChangeListener()
      e.auth.addAuthTokenListener(e.Qh);
    }, function () {}));
  }

  return t.prototype.getToken = function () {
    var t = this,
        e = this.jh,
        n = this.forceRefresh; // Take note of the current value of the tokenCounter so that this method
    // can fail (with an ABORTED error) if there is a token change while the
    // request is outstanding.

    return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then(function (n) {
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      return t.jh !== e ? (c("FirebaseCredentialsProvider", "getToken aborted due to token change."), t.getToken()) : n ? (d("string" == typeof n.accessToken), new ki(n.accessToken, t.currentUser)) : null;
    }) : Promise.resolve(null);
  }, t.prototype.qh = function () {
    this.forceRefresh = !0;
  }, t.prototype.Bh = function (t) {
    this.Lh = t, // Fire the initial event
    this.Wh && t(this.currentUser);
  }, t.prototype.Uh = function () {
    this.auth && this.auth.removeAuthTokenListener(this.Qh), this.Qh = null, this.Lh = null;
  }, // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  t.prototype.Kh = function () {
    var t = this.auth && this.auth.getUid();
    return d(null === t || "string" == typeof t), new xi(t);
  }, t;
}(),
    Ri =
/** @class */
function () {
  function t(t, e) {
    this.Gh = t, this.zh = e, this.type = "FirstParty", this.user = xi.Oh;
  }

  return Object.defineProperty(t.prototype, "Mh", {
    get: function get() {
      var t = {
        "X-Goog-AuthUser": this.zh
      },
          e = this.Gh.auth.Hh([]);
      return e && (t.Authorization = e), t;
    },
    enumerable: !1,
    configurable: !0
  }), t;
}(),
    Oi =
/** @class */
function () {
  function t(t, e) {
    this.Gh = t, this.zh = e;
  }

  return t.prototype.getToken = function () {
    return Promise.resolve(new Ri(this.Gh, this.zh));
  }, t.prototype.Bh = function (t) {
    // Fire with initial uid.
    t(xi.Oh);
  }, t.prototype.Uh = function () {}, t.prototype.qh = function () {}, t;
}(),
    Vi =
/** @class */
function () {
  function t(t, e, n, r, i, o) {
    this.ms = t, this.Yh = n, this.Jh = r, this.Xh = i, this.listener = o, this.state = 0
    /* Initial */
    ,
    /**
         * A close count that's incremented every time the stream is closed; used by
         * getCloseGuardedDispatcher() to invalidate callbacks that happen after
         * close.
         */
    this.Zh = 0, this.ta = null, this.stream = null, this.Ti = new Qn(t, e)
    /**
    * Returns true if start() has been called and no error has occurred. True
    * indicates the stream is open or in the process of opening (which
    * encompasses respecting backoff, getting auth tokens, and starting the
    * actual RPC). Use isOpen() to determine if the stream is open and ready for
    * outbound requests.
    */
    ;
  }

  return t.prototype.ea = function () {
    return 1
    /* Starting */
    === this.state || 2
    /* Open */
    === this.state || 4
    /* Backoff */
    === this.state;
  },
  /**
   * Returns true if the underlying RPC is open (the onOpen() listener has been
   * called) and the stream is ready for outbound requests.
   */
  t.prototype.na = function () {
    return 2
    /* Open */
    === this.state;
  },
  /**
   * Starts the RPC. Only allowed if isStarted() returns false. The stream is
   * not immediately ready for use: onOpen() will be invoked when the RPC is
   * ready for outbound requests, at which point isOpen() will return true.
   *
   * When start returns, isStarted() will return true.
   */
  t.prototype.start = function () {
    3
    /* Error */
    !== this.state ? this.auth() : this.sa();
  },
  /**
   * Stops the RPC. This call is idempotent and allowed regardless of the
   * current isStarted() state.
   *
   * When stop returns, isStarted() and isOpen() will both return false.
   */
  t.prototype.stop = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return this.ea() ? [4
            /*yield*/
            , this.close(0
            /* Initial */
            )] : [3
            /*break*/
            , 2];

          case 1:
            t.sent(), t.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * After an error the stream will usually back off on the next attempt to
   * start it. If the error warrants an immediate restart of the stream, the
   * sender can use this to indicate that the receiver should not back off.
   *
   * Each error will call the onClose() listener. That function can decide to
   * inhibit backoff if required.
   */
  t.prototype.ia = function () {
    this.state = 0
    /* Initial */
    , this.Ti.reset();
  },
  /**
   * Marks this stream as idle. If no further actions are performed on the
   * stream for one minute, the stream will automatically close itself and
   * notify the stream's onClose() handler with Status.OK. The stream will then
   * be in a !isStarted() state, requiring the caller to start the stream again
   * before further use.
   *
   * Only streams that are in state 'Open' can be marked idle, as all other
   * states imply pending network operations.
   */
  t.prototype.ra = function () {
    var t = this; // Starts the idle time if we are in state 'Open' and are not yet already
    // running a timer (in which case the previous idle timeout still applies).

    this.na() && null === this.ta && (this.ta = this.ms.Ss(this.Yh, 6e4, function () {
      return t.oa();
    }));
  },
  /** Sends a message to the underlying stream. */
  t.prototype.ha = function (t) {
    this.aa(), this.stream.send(t);
  },
  /** Called by the idle timer when the stream should close due to inactivity. */
  t.prototype.oa = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        return this.na() ? [2
        /*return*/
        , this.close(0
        /* Initial */
        )] : [2
        /*return*/
        ];
      });
    });
  },
  /** Marks the stream as active again. */
  t.prototype.aa = function () {
    this.ta && (this.ta.cancel(), this.ta = null);
  },
  /**
   * Closes the stream and cleans up as necessary:
   *
   * * closes the underlying GRPC stream;
   * * calls the onClose handler with the given 'error';
   * * sets internal stream state to 'finalState';
   * * adjusts the backoff timer based on the error
   *
   * A new stream can be opened by calling start().
   *
   * @param finalState the intended state of the stream after closing.
   * @param error the error the connection was closed with.
   */
  t.prototype.close = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            // Notify the listener that the stream closed.
            // Cancel any outstanding timers (they're guaranteed not to execute).
            return this.aa(), this.Ti.cancel(), // Invalidates any stream-related callbacks (e.g. from auth or the
            // underlying stream), guaranteeing they won't execute.
            this.Zh++, 3
            /* Error */
            !== t ? // If this is an intentional close ensure we don't delay our next connection attempt.
            this.Ti.reset() : n && n.code === S.RESOURCE_EXHAUSTED ? ( // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
            h(n.toString()), h("Using maximum backoff delay to prevent overloading the backend."), this.Ti.ps()) : n && n.code === S.UNAUTHENTICATED && // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
            // just expired.
            this.Xh.qh(), // Clean up the underlying stream because we are no longer interested in events.
            null !== this.stream && (this.ca(), this.stream.close(), this.stream = null), // This state must be assigned before calling onClose() to allow the callback to
            // inhibit backoff or otherwise manipulate the state in its non-started state.
            this.state = t, [4
            /*yield*/
            , this.listener.ua(n)];

          case 1:
            // Cancel any outstanding timers (they're guaranteed not to execute).
            // Notify the listener that the stream closed.
            return e.sent(), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Can be overridden to perform additional cleanup before the stream is closed.
   * Calling super.tearDown() is not required.
   */
  t.prototype.ca = function () {}, t.prototype.auth = function () {
    var t = this;
    this.state = 1
    /* Starting */
    ;
    var e = this.la(this.Zh),
        n = this.Zh; // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.

    this.Xh.getToken().then(function (e) {
      // Stream can be stopped while waiting for authentication.
      // TODO(mikelehen): We really should just use dispatchIfNotClosed
      // and let this dispatch onto the queue, but that opened a spec test can
      // of worms that I don't want to deal with in this PR.
      t.Zh === n && // Normally we'd have to schedule the callback on the AsyncQueue.
      // However, the following calls are safe to be called outside the
      // AsyncQueue since they don't chain asynchronous calls
      t._a(e);
    }, function (n) {
      e(function () {
        var e = new D(S.UNKNOWN, "Fetching auth token failed: " + n.message);
        return t.fa(e);
      });
    });
  }, t.prototype._a = function (t) {
    var e = this,
        n = this.la(this.Zh);
    this.stream = this.da(t), this.stream.wa(function () {
      n(function () {
        return e.state = 2
        /* Open */
        , e.listener.wa();
      });
    }), this.stream.ua(function (t) {
      n(function () {
        return e.fa(t);
      });
    }), this.stream.onMessage(function (t) {
      n(function () {
        return e.onMessage(t);
      });
    });
  }, t.prototype.sa = function () {
    var t = this;
    this.state = 4
    /* Backoff */
    , this.Ti.bs(function () {
      return e.__awaiter(t, void 0, void 0, function () {
        return e.__generator(this, function (t) {
          return this.state = 0
          /* Initial */
          , this.start(), [2
          /*return*/
          ];
        });
      });
    });
  }, // Visible for tests
  t.prototype.fa = function (t) {
    // In theory the stream could close cleanly, however, in our current model
    // we never expect this to happen because if we stop a stream ourselves,
    // this callback will never be called. To prevent cases where we retry
    // without a backoff accidentally, we set the stream to error in all cases.
    return c("PersistentStream", "close with error: " + t), this.stream = null, this.close(3
    /* Error */
    , t);
  },
  /**
   * Returns a "dispatcher" function that dispatches operations onto the
   * AsyncQueue but only runs them if closeCount remains unchanged. This allows
   * us to turn auth / stream callbacks into no-ops if the stream is closed /
   * re-opened, etc.
   */
  t.prototype.la = function (t) {
    var e = this;
    return function (n) {
      e.ms.ai(function () {
        return e.Zh === t ? n() : (c("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve());
      });
    };
  }, t;
}(),
    Ui =
/** @class */
function (t) {
  function n(e, n, r, i, o) {
    var s = this;
    return (s = t.call(this, e, "listen_stream_connection_backoff"
    /* ListenStreamConnectionBackoff */
    , "listen_stream_idle"
    /* ListenStreamIdle */
    , n, r, o) || this).serializer = i, s;
  }

  return e.__extends(n, t), n.prototype.da = function (t) {
    return this.Jh.Ta("Listen", t);
  }, n.prototype.onMessage = function (t) {
    // A successful response means the stream is healthy
    this.Ti.reset();

    var e = function (t, e) {
      var n;

      if ("targetChange" in e) {
        e.targetChange; // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
        // if unset

        var r = function (t) {
          return "NO_CHANGE" === t ? 0
          /* NoChange */
          : "ADD" === t ? 1
          /* Added */
          : "REMOVE" === t ? 2
          /* Removed */
          : "CURRENT" === t ? 3
          /* Current */
          : "RESET" === t ? 4
          /* Reset */
          : p();
        }(e.targetChange.targetChangeType || "NO_CHANGE"),
            i = e.targetChange.targetIds || [],
            o = function (t, e) {
          return t.Le ? (d(void 0 === e || "string" == typeof e), z.fromBase64String(e || "")) : (d(void 0 === e || e instanceof Uint8Array), z.fromUint8Array(e || new Uint8Array()));
        }(t, e.targetChange.resumeToken),
            s = e.targetChange.cause,
            u = s && function (t) {
          var e = void 0 === t.code ? S.UNKNOWN : Z(t.code);
          return new D(e, t.message || "");
        }(s);

        n = new wt(r, i, o, u || null);
      } else if ("documentChange" in e) {
        e.documentChange;
        var a = e.documentChange;
        a.document, a.document.name, a.document.updateTime;
        var c = ee(t, a.document.name),
            h = Xt(a.document.updateTime),
            f = new Ze({
          mapValue: {
            fields: a.document.fields
          }
        }),
            l = new tn(c, h, f, {}),
            y = a.targetIds || [],
            v = a.removedTargetIds || [];
        n = new gt(y, v, l.key, l);
      } else if ("documentDelete" in e) {
        e.documentDelete;
        var g = e.documentDelete;
        g.document;

        var m = ee(t, g.document),
            w = g.readTime ? Xt(g.readTime) : k.min(),
            _ = new en(m, w),
            b = g.removedTargetIds || [];

        n = new gt([], b, _.key, _);
      } else if ("documentRemove" in e) {
        e.documentRemove;
        var I = e.documentRemove;
        I.document;
        var E = ee(t, I.document),
            T = I.removedTargetIds || [];
        n = new gt([], T, E, null);
      } else {
        if (!("filter" in e)) return p();
        e.filter;
        var N = e.filter;
        N.targetId;
        var A = N.count || 0,
            x = new K(A),
            L = N.targetId;
        n = new mt(L, x);
      }

      return n;
    }(this.serializer, t),
        n = function (t) {
      // We have only reached a consistent snapshot for the entire stream if there
      // is a read_time set and it applies to all targets (i.e. the list of
      // targets is empty). The backend is guaranteed to send such responses.
      if (!("targetChange" in t)) return k.min();
      var e = t.targetChange;
      return e.targetIds && e.targetIds.length ? k.min() : e.readTime ? Xt(e.readTime) : k.min();
    }(t);

    return this.listener.Ea(e, n);
  },
  /**
   * Registers interest in the results of the given target. If the target
   * includes a resumeToken it will be included in the request. Results that
   * affect the target will be streamed back as WatchChange messages that
   * reference the targetId.
   */
  n.prototype.ma = function (t) {
    var e = {};
    e.database = ie(this.serializer), e.addTarget = function (t, e) {
      var n,
          r = e.target;
      return (n = B(r) ? {
        documents: ce(t, r)
      } : {
        query: he(t, r)
      }).targetId = e.targetId, e.resumeToken.Y() > 0 && (n.resumeToken = Yt(t, e.resumeToken)), n;
    }(this.serializer, t);

    var n = function (t, e) {
      var n = function (t, e) {
        switch (e) {
          case 0
          /* Listen */
          :
            return null;

          case 1
          /* ExistenceFilterMismatch */
          :
            return "existence-filter-mismatch";

          case 2
          /* LimboResolution */
          :
            return "limbo-document";

          default:
            return p();
        }
      }(0, e.X);

      return null == n ? null : {
        "goog-listen-tags": n
      };
    }(this.serializer, t);

    n && (e.labels = n), this.ha(e);
  },
  /**
   * Unregisters interest in the results of the target associated with the
   * given targetId.
   */
  n.prototype.Ia = function (t) {
    var e = {};
    e.database = ie(this.serializer), e.removeTarget = t, this.ha(e);
  }, n;
}(Vi),
    Ci =
/** @class */
function (t) {
  function n(e, n, r, i, o) {
    var s = this;
    return (s = t.call(this, e, "write_stream_connection_backoff"
    /* WriteStreamConnectionBackoff */
    , "write_stream_idle"
    /* WriteStreamIdle */
    , n, r, o) || this).serializer = i, s.Aa = !1, s;
  }

  return e.__extends(n, t), Object.defineProperty(n.prototype, "Ra", {
    /**
     * Tracks whether or not a handshake has been successfully exchanged and
     * the stream is ready to accept mutations.
     */
    get: function get() {
      return this.Aa;
    },
    enumerable: !1,
    configurable: !0
  }), // Override of PersistentStream.start
  n.prototype.start = function () {
    this.Aa = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
  }, n.prototype.ca = function () {
    this.Aa && this.Pa([]);
  }, n.prototype.da = function (t) {
    return this.Jh.Ta("Write", t);
  }, n.prototype.onMessage = function (t) {
    if ( // Always capture the last stream token.
    d(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Aa) {
      // A successful first write response means the stream is healthy,
      // Note, that we could consider a successful handshake healthy, however,
      // the write itself might be causing an error we want to back off from.
      this.Ti.reset();

      var e = function (t, e) {
        return t && t.length > 0 ? (d(void 0 !== e), t.map(function (t) {
          return function (t, e) {
            // NOTE: Deletes don't have an updateTime.
            var n = t.updateTime ? Xt(t.updateTime) : Xt(e);
            n.isEqual(k.min()) && ( // The Firestore Emulator currently returns an update time of 0 for
            // deletes of non-existing documents (rather than null). This breaks the
            // test "get deleted doc while offline with source=cache" as NoDocuments
            // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
            // TODO(#2149): Remove this when Emulator is fixed
            n = Xt(e));
            var r = null;
            return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), new Re(n, r);
          }(t, e);
        })) : [];
      }(t.writeResults, t.commitTime),
          n = Xt(t.commitTime);

      return this.listener.ga(n, e);
    } // The first response is always the handshake response


    return d(!t.writeResults || 0 === t.writeResults.length), this.Aa = !0, this.listener.Va();
  },
  /**
   * Sends an initial streamToken to the server, performing the handshake
   * required to make the StreamingWrite RPC work. Subsequent
   * calls should wait until onHandshakeComplete was called.
   */
  n.prototype.ya = function () {
    // TODO(dimond): Support stream resumption. We intentionally do not set the
    // stream token on the handshake, ignoring any stream token we might have.
    var t = {};
    t.database = ie(this.serializer), this.ha(t);
  },
  /** Sends a group of mutations to the Firestore backend to apply. */
  n.prototype.Pa = function (t) {
    var e = this,
        n = {
      streamToken: this.lastStreamToken,
      writes: t.map(function (t) {
        return ue(e.serializer, t);
      })
    };
    this.ha(n);
  }, n;
}(Vi),
    qi =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    return (i = t.call(this) || this).credentials = e, i.Jh = n, i.serializer = r, i.pa = !1, i;
  }

  return e.__extends(n, t), n.prototype.ba = function () {
    if (this.pa) throw new D(S.FAILED_PRECONDITION, "The client has already been terminated.");
  },
  /** Gets an auth token and invokes the provided RPC. */
  n.prototype.va = function (t, e, n) {
    var r = this;
    return this.ba(), this.credentials.getToken().then(function (i) {
      return r.Jh.va(t, e, n, i);
    }).catch(function (t) {
      throw t.code === S.UNAUTHENTICATED && r.credentials.qh(), t;
    });
  },
  /** Gets an auth token and invokes the provided RPC with streamed results. */
  n.prototype.Sa = function (t, e, n) {
    var r = this;
    return this.ba(), this.credentials.getToken().then(function (i) {
      return r.Jh.Sa(t, e, n, i);
    }).catch(function (t) {
      throw t.code === S.UNAUTHENTICATED && r.credentials.qh(), t;
    });
  }, n.prototype.terminate = function () {
    this.pa = !1;
  }, n;
}(function () {}),
    Mi =
/** @class */
function () {
  function t(t, e) {
    this.ei = t, this.Da = e,
    /** The current OnlineState. */
    this.state = "Unknown"
    /* Unknown */
    ,
    /**
         * A count of consecutive failures to open the stream. If it reaches the
         * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
         * Offline.
         */
    this.Ca = 0,
    /**
         * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
         * transition from OnlineState.Unknown to OnlineState.Offline without waiting
         * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
         */
    this.Na = null,
    /**
         * Whether the client should log a warning message if it fails to connect to
         * the backend (initially true, cleared after a successful stream, or if we've
         * logged the message already).
         */
    this.Fa = !0
    /**
    * Called by RemoteStore when a watch stream is started (including on each
    * backoff attempt).
    *
    * If this is the first attempt, it sets the OnlineState to Unknown and starts
    * the onlineStateTimer.
    */
    ;
  }

  return t.prototype.ka = function () {
    var t = this;
    0 === this.Ca && (this.$a("Unknown"
    /* Unknown */
    ), this.Na = this.ei.Ss("online_state_timeout"
    /* OnlineStateTimeout */
    , 1e4, function () {
      return t.Na = null, t.xa("Backend didn't respond within 10 seconds."), t.$a("Offline"
      /* Offline */
      ), Promise.resolve();
    }));
  },
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  t.prototype.Oa = function (t) {
    "Online"
    /* Online */
    === this.state ? this.$a("Unknown"
    /* Unknown */
    ) : (this.Ca++, this.Ca >= 1 && (this.Ma(), this.xa("Connection failed 1 times. Most recent error: " + t.toString()), this.$a("Offline"
    /* Offline */
    )));
  },
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  t.prototype.set = function (t) {
    this.Ma(), this.Ca = 0, "Online"
    /* Online */
    === t && ( // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    this.Fa = !1), this.$a(t);
  }, t.prototype.$a = function (t) {
    t !== this.state && (this.state = t, this.Da(t));
  }, t.prototype.xa = function (t) {
    var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
    this.Fa ? (h(e), this.Fa = !1) : c("OnlineStateTracker", e);
  }, t.prototype.Ma = function () {
    null !== this.Na && (this.Na.cancel(), this.Na = null);
  }, t;
}(),
    Fi =
/** @class */
function () {
  function t(
  /**
   * The local store, used to fill the write pipeline with outbound mutations.
   */
  t,
  /** The client-side proxy for interacting with the backend. */
  n, r, i, o) {
    var s = this;
    this.La = t, this.qa = n, this.ei = r,
    /**
         * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
         * LocalStore via fillWritePipeline() and have or will send to the write
         * stream.
         *
         * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
         * restart the write stream. When the stream is established the writes in the
         * pipeline will be sent in order.
         *
         * Writes remain in writePipeline until they are acknowledged by the backend
         * and thus will automatically be re-sent if the stream is interrupted /
         * restarted before they're acknowledged.
         *
         * Write responses from the backend are linked to their originating request
         * purely based on order, and so we can just shift() writes from the front of
         * the writePipeline as we receive responses.
         */
    this.Ba = [],
    /**
         * A mapping of watched targets that the client cares about tracking and the
         * user has explicitly called a 'listen' for this target.
         *
         * These targets may or may not have been sent to or acknowledged by the
         * server. On re-establishing the listen stream, these targets should be sent
         * to the server. The targets removed with unlistens are removed eagerly
         * without waiting for confirmation from the listen stream.
         */
    this.Ua = new Map(), this.Qa = null,
    /**
         * A set of reasons for why the RemoteStore may be offline. If empty, the
         * RemoteStore may start its network connections.
         */
    this.Wa = new Set(), this.ja = o, this.ja.Ka(function (t) {
      r.ai(function () {
        return e.__awaiter(s, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                return this.Ga() ? (c("RemoteStore", "Restarting streams for network reachability change."), [4
                /*yield*/
                , this.za()]) : [3
                /*break*/
                , 2];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [2
                /*return*/
                ];
            }
          });
        });
      });
    }), this.Ha = new Mi(r, i), // Create streams (but note they're not started yet).
    this.Ya = function (t, e, n) {
      var r = y(t);
      return r.ba(), new Ui(e, r.Jh, r.credentials, r.serializer, n);
    }(this.qa, r, {
      wa: this.Ja.bind(this),
      ua: this.Xa.bind(this),
      Ea: this.Za.bind(this)
    }), this.tc = function (t, e, n) {
      var r = y(t);
      return r.ba(), new Ci(e, r.Jh, r.credentials, r.serializer, n);
    }(this.qa, r, {
      wa: this.ec.bind(this),
      ua: this.nc.bind(this),
      Va: this.sc.bind(this),
      ga: this.ga.bind(this)
    });
  }
  /**
   * Starts up the remote store, creating streams, restoring state from
   * LocalStore, etc.
   */


  return t.prototype.start = function () {
    return this.enableNetwork();
  },
  /** Re-enables the network. Idempotent. */
  t.prototype.enableNetwork = function () {
    return this.Wa.delete(0
    /* UserDisabled */
    ), this.ic();
  }, t.prototype.ic = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return this.Ga() ? (this.rc() ? this.oc() : this.Ha.set("Unknown"
            /* Unknown */
            ), [4
            /*yield*/
            , this.hc()]) : [3
            /*break*/
            , 2];

          case 1:
            // This will start the write stream if necessary.
            t.sent(), t.label = 2;

          case 2:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Temporarily disables the network. The network can be re-enabled using
   * enableNetwork().
   */
  t.prototype.disableNetwork = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return this.Wa.add(0
            /* UserDisabled */
            ), [4
            /*yield*/
            , this.ac()];

          case 1:
            return t.sent(), // Set the OnlineState to Offline so get()s return from cache, etc.
            this.Ha.set("Offline"
            /* Offline */
            ), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.ac = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return [4
            /*yield*/
            , this.tc.stop()];

          case 1:
            return t.sent(), [4
            /*yield*/
            , this.Ya.stop()];

          case 2:
            return t.sent(), this.Ba.length > 0 && (c("RemoteStore", "Stopping write stream with " + this.Ba.length + " pending writes"), this.Ba = []), this.cc(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.th = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return c("RemoteStore", "RemoteStore shutting down."), this.Wa.add(5
            /* Shutdown */
            ), [4
            /*yield*/
            , this.ac()];

          case 1:
            return t.sent(), this.ja.th(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
            // triggering spurious listener events with cached data, etc.
            this.Ha.set("Unknown"
            /* Unknown */
            ), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Starts new listen for the given target. Uses resume token if provided. It
   * is a no-op if the target of given `TargetData` is already being listened to.
   */
  t.prototype.listen = function (t) {
    this.Ua.has(t.targetId) || ( // Mark this as something the client is currently listening for.
    this.Ua.set(t.targetId, t), this.rc() ? // The listen will be sent in onWatchStreamOpen
    this.oc() : this.Ya.na() && this.uc(t));
  },
  /**
   * Removes the listen from server. It is a no-op if the given target id is
   * not being listened to.
   */
  t.prototype.lc = function (t) {
    this.Ua.delete(t), this.Ya.na() && this._c(t), 0 === this.Ua.size && (this.Ya.na() ? this.Ya.ra() : this.Ga() && // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    this.Ha.set("Unknown"
    /* Unknown */
    ));
  },
  /** {@link TargetMetadataProvider.getTargetDataForTarget} */
  t.prototype.Me = function (t) {
    return this.Ua.get(t) || null;
  },
  /** {@link TargetMetadataProvider.getRemoteKeysForTarget} */
  t.prototype.Oe = function (t) {
    return this.fc.Oe(t);
  },
  /**
   * We need to increment the the expected number of pending responses we're due
   * from watch so we wait for the ack to process any messages from this target.
   */
  t.prototype.uc = function (t) {
    this.Qa.we(t.targetId), this.Ya.ma(t);
  },
  /**
   * We need to increment the expected number of pending responses we're due
   * from watch so we wait for the removal on the server before we process any
   * messages from this target.
   */
  t.prototype._c = function (t) {
    this.Qa.we(t), this.Ya.Ia(t);
  }, t.prototype.oc = function () {
    this.Qa = new bt(this), this.Ya.start(), this.Ha.ka();
  },
  /**
   * Returns whether the watch stream should be started because it's necessary
   * and has not yet been started.
   */
  t.prototype.rc = function () {
    return this.Ga() && !this.Ya.ea() && this.Ua.size > 0;
  }, t.prototype.Ga = function () {
    return 0 === this.Wa.size;
  }, t.prototype.cc = function () {
    this.Qa = null;
  }, t.prototype.Ja = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t = this;
      return e.__generator(this, function (e) {
        return this.Ua.forEach(function (e, n) {
          t.uc(e);
        }), [2
        /*return*/
        ];
      });
    });
  }, t.prototype.Xa = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        return this.cc(), // If we still need the watch stream, retry the connection.
        this.rc() ? (this.Ha.Oa(t), this.oc()) : // No need to restart watch stream because there are no active targets.
        // The online state is set to unknown because there is no active attempt
        // at establishing a connection
        this.Ha.set("Unknown"
        /* Unknown */
        ), [2
        /*return*/
        ];
      });
    });
  }, t.prototype.Za = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r, i, o;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            if (this.Ha.set("Online"
            /* Online */
            ), !(t instanceof wt && 2
            /* Removed */
            === t.state && t.cause)) // Mark the client as online since we got a message from the server
              return [3
              /*break*/
              , 6];
            e.label = 1;

          case 1:
            return e.trys.push([1, 3,, 5]), [4
            /*yield*/
            , this.dc(t)];

          case 2:
            return e.sent(), [3
            /*break*/
            , 5];

          case 3:
            return r = e.sent(), c("RemoteStore", "Failed to remove targets %s: %s ", t.targetIds.join(","), r), [4
            /*yield*/
            , this.wc(r)];

          case 4:
            return e.sent(), [3
            /*break*/
            , 5];

          case 5:
            return [3
            /*break*/
            , 13];

          case 6:
            if (t instanceof gt ? this.Qa.ge(t) : t instanceof mt ? this.Qa.Ce(t) : this.Qa.pe(t), n.isEqual(k.min())) return [3
            /*break*/
            , 13];
            e.label = 7;

          case 7:
            return e.trys.push([7, 11,, 13]), [4
            /*yield*/
            , wi(this.La)];

          case 8:
            return i = e.sent(), n.o(i) >= 0 ? [4
            /*yield*/
            , this.Tc(n)] : [3
            /*break*/
            , 10];
          // We have received a target change with a global snapshot if the snapshot
          // version is not equal to SnapshotVersion.min().

          case 9:
            // We have received a target change with a global snapshot if the snapshot
            // version is not equal to SnapshotVersion.min().
            e.sent(), e.label = 10;

          case 10:
            return [3
            /*break*/
            , 13];

          case 11:
            return c("RemoteStore", "Failed to raise snapshot:", o = e.sent()), [4
            /*yield*/
            , this.wc(o)];

          case 12:
            return e.sent(), [3
            /*break*/
            , 13];

          case 13:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Recovery logic for IndexedDB errors that takes the network offline until
   * `op` succeeds. Retries are scheduled with backoff using
   * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
   * validated via a generic operation.
   *
   * The returned Promise is resolved once the network is disabled and before
   * any retry attempt.
   */
  t.prototype.wc = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r = this;
      return e.__generator(this, function (i) {
        switch (i.label) {
          case 0:
            if (!Yn(t)) throw t; // Disable network and raise offline snapshots

            return this.Wa.add(1
            /* IndexedDbFailed */
            ), [4
            /*yield*/
            , this.ac()];

          case 1:
            // Disable network and raise offline snapshots
            return i.sent(), this.Ha.set("Offline"
            /* Offline */
            ), n || ( // Use a simple read operation to determine if IndexedDB recovered.
            // Ideally, we would expose a health check directly on SimpleDb, but
            // RemoteStore only has access to persistence through LocalStore.
            n = function n() {
              return wi(r.La);
            }), // Probe IndexedDB periodically and re-enable network
            this.ei.gi(function () {
              return e.__awaiter(r, void 0, void 0, function () {
                return e.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return c("RemoteStore", "Retrying IndexedDB access"), [4
                      /*yield*/
                      , n()];

                    case 1:
                      return t.sent(), this.Wa.delete(1
                      /* IndexedDbFailed */
                      ), [4
                      /*yield*/
                      , this.ic()];

                    case 2:
                      return t.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Executes `op`. If `op` fails, takes the network offline until `op`
   * succeeds. Returns after the first attempt.
   */
  t.prototype.Ec = function (t) {
    var e = this;
    return t().catch(function (n) {
      return e.wc(n, t);
    });
  },
  /**
   * Takes a batch of changes from the Datastore, repackages them as a
   * RemoteEvent, and passes that on to the listener, which is typically the
   * SyncEngine.
   */
  t.prototype.Tc = function (t) {
    var e = this,
        n = this.Qa.ke(t); // Update in-memory resume tokens. LocalStore will update the
    // persistent view of these when applying the completed RemoteEvent.
    // Finally raise remote event

    return n.Wt.forEach(function (n, r) {
      if (n.resumeToken.Y() > 0) {
        var i = e.Ua.get(r); // A watched target might have been removed already.

        i && e.Ua.set(r, i.et(n.resumeToken, t));
      }
    }), // Re-establish listens for the targets that have been invalidated by
    // existence filter mismatches.
    n.jt.forEach(function (t) {
      var n = e.Ua.get(t);

      if (n) {
        // Clear the resume token for the target, since we're in a known mismatch
        // state.
        e.Ua.set(t, n.et(z.J, n.Z)), // Cause a hard reset by unwatching and rewatching immediately, but
        // deliberately don't send a resume token so that we get a full update.
        e._c(t); // Mark the target we send as being on behalf of an existence filter
        // mismatch, but don't actually retain that in listenTargets. This ensures
        // that we flag the first re-listen this way without impacting future
        // listens of this target (that might happen e.g. on reconnect).

        var r = new H(n.target, t, 1
        /* ExistenceFilterMismatch */
        , n.sequenceNumber);
        e.uc(r);
      }
    }), this.fc.mc(n);
  },
  /** Handles an error on a target */
  t.prototype.dc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n, r, i, o;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            n = t.cause, r = 0, i = t.targetIds, e.label = 1;

          case 1:
            return r < i.length ? (o = i[r], this.Ua.has(o) ? [4
            /*yield*/
            , this.fc.Ic(o, n)] : [3
            /*break*/
            , 3]) : [3
            /*break*/
            , 5];

          case 2:
            e.sent(), this.Ua.delete(o), this.Qa.removeTarget(o), e.label = 3;

          case 3:
            e.label = 4;

          case 4:
            return r++, [3
            /*break*/
            , 1];

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Attempts to fill our write pipeline with writes from the LocalStore.
   *
   * Called internally to bootstrap or refill the write pipeline and by
   * SyncEngine whenever there are new mutations to process.
   *
   * Starts the write stream if necessary.
   */
  t.prototype.hc = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t, n, r;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            t = this.Ba.length > 0 ? this.Ba[this.Ba.length - 1].batchId : -1, e.label = 1;

          case 1:
            if (!this.Ac()) return [3
            /*break*/
            , 7];
            e.label = 2;

          case 2:
            return e.trys.push([2, 4,, 6]), [4
            /*yield*/
            , bi(this.La, t)];

          case 3:
            return null === (n = e.sent()) ? (0 === this.Ba.length && this.tc.ra(), [3
            /*break*/
            , 7]) : (t = n.batchId, this.Rc(n), [3
            /*break*/
            , 6]);

          case 4:
            return r = e.sent(), [4
            /*yield*/
            , this.wc(r)];

          case 5:
            return e.sent(), [3
            /*break*/
            , 6];

          case 6:
            return [3
            /*break*/
            , 1];

          case 7:
            return this.Pc() && this.gc(), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Returns true if we can add to the write pipeline (i.e. the network is
   * enabled and the write pipeline is not full).
   */
  t.prototype.Ac = function () {
    return this.Ga() && this.Ba.length < 10;
  }, // For testing
  t.prototype.Vc = function () {
    return this.Ba.length;
  },
  /**
   * Queues additional writes to be sent to the write stream, sending them
   * immediately if the write stream is established.
   */
  t.prototype.Rc = function (t) {
    this.Ba.push(t), this.tc.na() && this.tc.Ra && this.tc.Pa(t.mutations);
  }, t.prototype.Pc = function () {
    return this.Ga() && !this.tc.ea() && this.Ba.length > 0;
  }, t.prototype.gc = function () {
    this.tc.start();
  }, t.prototype.ec = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        return this.tc.ya(), [2
        /*return*/
        ];
      });
    });
  }, t.prototype.sc = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t, n, r;
      return e.__generator(this, function (e) {
        // Send the write pipeline now that the stream is established.
        for (t = 0, n = this.Ba; t < n.length; t++) {
          r = n[t], this.tc.Pa(r.mutations);
        }

        return [2
        /*return*/
        ];
      });
    });
  }, t.prototype.ga = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r,
          i,
          o = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return r = this.Ba.shift(), i = Un.from(r, t, n), [4
            /*yield*/
            , this.Ec(function () {
              return o.fc.yc(i);
            })];

          case 1:
            // It's possible that with the completion of this mutation another
            // slot has freed up.
            return e.sent(), [4
            /*yield*/
            , this.hc()];

          case 2:
            // It's possible that with the completion of this mutation another
            // slot has freed up.
            return e.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.nc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return t && this.tc.Ra ? [4
            /*yield*/
            , this.pc(t)] : [3
            /*break*/
            , 2];
          // This error affects the actual write.

          case 1:
            // This error affects the actual write.
            e.sent(), e.label = 2;

          case 2:
            // If the write stream closed after the write handshake completes, a write
            // operation failed and we fail the pending operation.
            // The write stream might have been started by refilling the write
            // pipeline for failed writes
            return this.Pc() && this.gc(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.pc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n,
          r,
          i = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return Y(r = t.code) && r !== S.ABORTED ? (n = this.Ba.shift(), // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
            this.tc.ia(), [4
            /*yield*/
            , this.Ec(function () {
              return i.fc.bc(n.batchId, t);
            })]) : [3
            /*break*/
            , 3];

          case 1:
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            return e.sent(), [4
            /*yield*/
            , this.hc()];

          case 2:
            // In this case it's also unlikely that the server itself is melting
            // down -- this was just a bad request so inhibit backoff on the next
            // restart.
            // It's possible that with the completion of this mutation
            // another slot has freed up.
            e.sent(), e.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.za = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return this.Wa.add(4
            /* ConnectivityChange */
            ), [4
            /*yield*/
            , this.ac()];

          case 1:
            return t.sent(), this.Ha.set("Unknown"
            /* Unknown */
            ), this.tc.ia(), this.Ya.ia(), this.Wa.delete(4
            /* ConnectivityChange */
            ), [4
            /*yield*/
            , this.ic()];

          case 2:
            return t.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.vc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.ei.pi(), // Tear down and re-create our network streams. This will ensure we get a
            // fresh auth token for the new user and re-fill the write pipeline with
            // new mutations from the LocalStore (since mutations are per-user).
            c("RemoteStore", "RemoteStore received new credentials"), this.Wa.add(3
            /* CredentialChange */
            ), [4
            /*yield*/
            , this.ac()];

          case 1:
            return e.sent(), this.Ha.set("Unknown"
            /* Unknown */
            ), [4
            /*yield*/
            , this.fc.vc(t)];

          case 2:
            return e.sent(), this.Wa.delete(3
            /* CredentialChange */
            ), [4
            /*yield*/
            , this.ic()];

          case 3:
            return e.sent(), [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Toggles the network state when the client gains or loses its primary lease.
   */
  t.prototype.Sc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return t ? (this.Wa.delete(2
            /* IsSecondary */
            ), [4
            /*yield*/
            , this.ic()]) : [3
            /*break*/
            , 2];

          case 1:
            return e.sent(), [3
            /*break*/
            , 5];

          case 2:
            return (n = t) ? [3
            /*break*/
            , 4] : (this.Wa.add(2
            /* IsSecondary */
            ), [4
            /*yield*/
            , this.ac()]);

          case 3:
            e.sent(), n = this.Ha.set("Unknown"
            /* Unknown */
            ), e.label = 4;

          case 4:
            n, e.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t;
}();
/** A CredentialsProvider that always yields an empty token. */

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>

/** Assembles the key for a client state in WebStorage */


function Gi(t, e) {
  return "firestore_clients_" + t + "_" + e;
} // The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.

/** Assembles the key for a mutation batch in WebStorage */


function ji(t, e, n) {
  var r = "firestore_mutations_" + t + "_" + n;
  return e.Er() && (r += "_" + e.uid), r;
} // The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>

/** Assembles the key for a query state in WebStorage */


function Bi(t, e) {
  return "firestore_targets_" + t + "_" + e;
} // The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>

/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing


var zi =
/** @class */
function () {
  function t(t, e, n, r) {
    this.user = t, this.batchId = e, this.state = n, this.error = r
    /**
    * Parses a MutationMetadata from its JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.Dc = function (e, n, r) {
    var i = JSON.parse(r),
        o = "object" == _typeof(i) && -1 !== ["pending", "acknowledged", "rejected"].indexOf(i.state) && (void 0 === i.error || "object" == _typeof(i.error)),
        s = void 0;

    return o && i.error && (o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new D(i.error.code, i.error.message)), o ? new t(e, n, i.state, s) : (h("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), null);
  }, t.prototype.Cc = function () {
    var t = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t);
  }, t;
}(),
    Qi =
/** @class */
function () {
  function t(t, e, n) {
    this.targetId = t, this.state = e, this.error = n
    /**
    * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.Dc = function (e, n) {
    var r = JSON.parse(n),
        i = "object" == _typeof(r) && -1 !== ["not-current", "current", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == _typeof(r.error)),
        o = void 0;

    return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new D(r.error.code, r.error.message)), i ? new t(e, r.state, o) : (h("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), null);
  }, t.prototype.Cc = function () {
    var t = {
      state: this.state,
      updateTimeMs: Date.now()
    };
    return this.error && (t.error = {
      code: this.error.code,
      message: this.error.message
    }), JSON.stringify(t);
  }, t;
}(),
    Wi =
/** @class */
function () {
  function t(t, e) {
    this.clientId = t, this.activeTargetIds = e
    /**
    * Parses a RemoteClientState from the JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.Dc = function (e, n) {
    for (var r = JSON.parse(n), i = "object" == _typeof(r) && r.activeTargetIds instanceof Array, o = ft(), s = 0; i && s < r.activeTargetIds.length; ++s) {
      i = q(r.activeTargetIds[s]), o = o.add(r.activeTargetIds[s]);
    }

    return i ? new t(e, o) : (h("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), null);
  }, t;
}(),
    Hi =
/** @class */
function () {
  function t(t, e) {
    this.clientId = t, this.onlineState = e
    /**
    * Parses a SharedOnlineState from its JSON representation in WebStorage.
    * Logs a warning and returns null if the format of the data is not valid.
    */
    ;
  }

  return t.Dc = function (e) {
    var n = JSON.parse(e);
    return "object" == _typeof(n) && -1 !== ["Unknown", "Online", "Offline"].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (h("SharedClientState", "Failed to parse online state: " + e), null);
  }, t;
}(),
    Ki =
/** @class */
function () {
  function t() {
    this.activeTargetIds = ft();
  }

  return t.prototype.Nc = function (t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }, t.prototype.Fc = function (t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  },
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  t.prototype.Cc = function () {
    var t = {
      activeTargetIds: this.activeTargetIds.N(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(t);
  }, t;
}(),
    Yi =
/** @class */
function () {
  function t(t, e, n, r, i) {
    this.window = t, this.ms = e, this.persistenceKey = n, this.kc = r, this.fc = null, this.Da = null, this.fs = null, this.$c = this.xc.bind(this), this.Oc = new X(m), this.tr = !1,
    /**
         * Captures WebStorage events that occur before `start()` is called. These
         * events are replayed once `WebStorageSharedClientState` is started.
         */
    this.Mc = []; // Escape the special characters mentioned here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    this.storage = this.window.localStorage, this.currentUser = i, this.Lc = Gi(this.persistenceKey, this.kc), this.qc =
    /** Assembles the key for the current sequence number. */
    function (t) {
      return "firestore_sequence_number_" + t;
    }(this.persistenceKey), this.Oc = this.Oc.st(this.kc, new Ki()), this.Bc = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Uc = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Qc = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Wc =
    /** Assembles the key for the online state of the primary tab. */
    function (t) {
      return "firestore_online_state_" + t;
    }(this.persistenceKey), // Rather than adding the storage observer during start(), we add the
    // storage observer during initialization. This ensures that we collect
    // events before other components populate their initial state (during their
    // respective start() calls). Otherwise, we might for example miss a
    // mutation that is added after LocalStore's start() processed the existing
    // mutations but before we observe WebStorage events.
    this.window.addEventListener("storage", this.$c);
  }
  /** Returns 'true' if WebStorage is available in the current environment. */


  return t.ks = function (t) {
    return !(!t || !t.localStorage);
  }, t.prototype.start = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t,
          n,
          r,
          i,
          o,
          s,
          u,
          a,
          c,
          h,
          f,
          l = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return [4
            /*yield*/
            , this.fc.rh()];

          case 1:
            for (t = e.sent(), n = 0, r = t; n < r.length; n++) {
              (i = r[n]) !== this.kc && (o = this.getItem(Gi(this.persistenceKey, i))) && (s = Wi.Dc(i, o)) && (this.Oc = this.Oc.st(s.clientId, s));
            }

            for (this.jc(), (u = this.storage.getItem(this.Wc)) && (a = this.Kc(u)) && this.Gc(a), c = 0, h = this.Mc; c < h.length; c++) {
              f = h[c], this.xc(f);
            }

            return this.Mc = [], // Register a window unload hook to remove the client metadata entry from
            // WebStorage even if `shutdown()` was not called.
            this.window.addEventListener("unload", function () {
              return l.th();
            }), this.tr = !0, [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.Ts = function (t) {
    this.setItem(this.qc, JSON.stringify(t));
  }, t.prototype.zc = function () {
    return this.Hc(this.Oc);
  }, t.prototype.Yc = function (t) {
    var e = !1;
    return this.Oc.forEach(function (n, r) {
      r.activeTargetIds.has(t) && (e = !0);
    }), e;
  }, t.prototype.Jc = function (t) {
    this.Xc(t, "pending");
  }, t.prototype.Zc = function (t, e, n) {
    this.Xc(t, e, n), // Once a final mutation result is observed by other clients, they no longer
    // access the mutation's metadata entry. Since WebStorage replays events
    // in order, it is safe to delete the entry right after updating it.
    this.tu(t);
  }, t.prototype.eu = function (t) {
    var e = "not-current"; // Lookup an existing query state if the target ID was already registered
    // by another tab

    if (this.Yc(t)) {
      var n = this.storage.getItem(Bi(this.persistenceKey, t));

      if (n) {
        var r = Qi.Dc(t, n);
        r && (e = r.state);
      }
    }

    return this.nu.Nc(t), this.jc(), e;
  }, t.prototype.su = function (t) {
    this.nu.Fc(t), this.jc();
  }, t.prototype.iu = function (t) {
    return this.nu.activeTargetIds.has(t);
  }, t.prototype.ru = function (t) {
    this.removeItem(Bi(this.persistenceKey, t));
  }, t.prototype.ou = function (t, e, n) {
    this.hu(t, e, n);
  }, t.prototype.au = function (t, e, n) {
    var r = this;
    e.forEach(function (t) {
      r.tu(t);
    }), this.currentUser = t, n.forEach(function (t) {
      r.Jc(t);
    });
  }, t.prototype.cu = function (t) {
    this.uu(t);
  }, t.prototype.th = function () {
    this.tr && (this.window.removeEventListener("storage", this.$c), this.removeItem(this.Lc), this.tr = !1);
  }, t.prototype.getItem = function (t) {
    var e = this.storage.getItem(t);
    return c("SharedClientState", "READ", t, e), e;
  }, t.prototype.setItem = function (t, e) {
    c("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
  }, t.prototype.removeItem = function (t) {
    c("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
  }, t.prototype.xc = function (t) {
    var n = this,
        r = t; // Note: The function is typed to take Event to be interface-compatible with
    // `Window.addEventListener`.

    if (r.storageArea === this.storage) {
      if (c("SharedClientState", "EVENT", r.key, r.newValue), r.key === this.Lc) return void h("Received WebStorage notification for local change. Another client might have garbage-collected our state");
      this.ms.gi(function () {
        return e.__awaiter(n, void 0, void 0, function () {
          var t, n, i, o, s, u;
          return e.__generator(this, function (e) {
            if (this.tr) {
              if (null !== r.key) if (this.Bc.test(r.key)) {
                if (null == r.newValue) return t = this.lu(r.key), [2
                /*return*/
                , this._u(t, null)];
                if (n = this.fu(r.key, r.newValue)) return [2
                /*return*/
                , this._u(n.clientId, n)];
              } else if (this.Uc.test(r.key)) {
                if (null !== r.newValue && (i = this.du(r.key, r.newValue))) return [2
                /*return*/
                , this.wu(i)];
              } else if (this.Qc.test(r.key)) {
                if (null !== r.newValue && (o = this.Tu(r.key, r.newValue))) return [2
                /*return*/
                , this.Eu(o)];
              } else if (r.key === this.Wc) {
                if (null !== r.newValue && (s = this.Kc(r.newValue))) return [2
                /*return*/
                , this.Gc(s)];
              } else r.key === this.qc && (u = function (t) {
                var e = Bn.Es;
                if (null != t) try {
                  var n = JSON.parse(t);
                  d("number" == typeof n), e = n;
                } catch (t) {
                  h("SharedClientState", "Failed to read sequence number from WebStorage", t);
                }
                return e;
              }(r.newValue)) !== Bn.Es && this.fs(u);
            } else this.Mc.push(r);

            return [2
            /*return*/
            ];
          });
        });
      });
    }
  }, Object.defineProperty(t.prototype, "nu", {
    get: function get() {
      return this.Oc.get(this.kc);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.jc = function () {
    this.setItem(this.Lc, this.nu.Cc());
  }, t.prototype.Xc = function (t, e, n) {
    var r = new zi(this.currentUser, t, e, n),
        i = ji(this.persistenceKey, this.currentUser, t);
    this.setItem(i, r.Cc());
  }, t.prototype.tu = function (t) {
    var e = ji(this.persistenceKey, this.currentUser, t);
    this.removeItem(e);
  }, t.prototype.uu = function (t) {
    var e = {
      clientId: this.kc,
      onlineState: t
    };
    this.storage.setItem(this.Wc, JSON.stringify(e));
  }, t.prototype.hu = function (t, e, n) {
    var r = Bi(this.persistenceKey, t),
        i = new Qi(t, e, n);
    this.setItem(r, i.Cc());
  },
  /**
   * Parses a client state key in WebStorage. Returns null if the key does not
   * match the expected key format.
   */
  t.prototype.lu = function (t) {
    var e = this.Bc.exec(t);
    return e ? e[1] : null;
  },
  /**
   * Parses a client state in WebStorage. Returns 'null' if the value could not
   * be parsed.
   */
  t.prototype.fu = function (t, e) {
    var n = this.lu(t);
    return Wi.Dc(n, e);
  },
  /**
   * Parses a mutation batch state in WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  t.prototype.du = function (t, e) {
    var n = this.Uc.exec(t),
        r = Number(n[1]),
        i = void 0 !== n[2] ? n[2] : null;
    return zi.Dc(new xi(i), r, e);
  },
  /**
   * Parses a query target state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  t.prototype.Tu = function (t, e) {
    var n = this.Qc.exec(t),
        r = Number(n[1]);
    return Qi.Dc(r, e);
  },
  /**
   * Parses an online state from WebStorage. Returns 'null' if the value
   * could not be parsed.
   */
  t.prototype.Kc = function (t) {
    return Hi.Dc(t);
  }, t.prototype.wu = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        return t.user.uid === this.currentUser.uid ? [2
        /*return*/
        , this.fc.mu(t.batchId, t.state, t.error)] : (c("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), [2
        /*return*/
        ]);
      });
    });
  }, t.prototype.Eu = function (t) {
    return this.fc.Iu(t.targetId, t.state, t.error);
  }, t.prototype._u = function (t, e) {
    var n = this,
        r = e ? this.Oc.st(t, e) : this.Oc.remove(t),
        i = this.Hc(this.Oc),
        o = this.Hc(r),
        s = [],
        u = [];
    return o.forEach(function (t) {
      i.has(t) || s.push(t);
    }), i.forEach(function (t) {
      o.has(t) || u.push(t);
    }), this.fc.Au(s, u).then(function () {
      n.Oc = r;
    });
  }, t.prototype.Gc = function (t) {
    // We check whether the client that wrote this online state is still active
    // by comparing its client ID to the list of clients kept active in
    // IndexedDb. If a client does not update their IndexedDb client state
    // within 5 seconds, it is considered inactive and we don't emit an online
    // state event.
    this.Oc.get(t.clientId) && this.Da(t.onlineState);
  }, t.prototype.Hc = function (t) {
    var e = ft();
    return t.forEach(function (t, n) {
      e = e.Nt(n.activeTargetIds);
    }), e;
  }, t;
}(),
    Zi =
/** @class */
function () {
  function t() {
    this.Ru = new Ki(), this.Pu = {}, this.Da = null, this.fs = null;
  }

  return t.prototype.Jc = function (t) {// No op.
  }, t.prototype.Zc = function (t, e, n) {// No op.
  }, t.prototype.eu = function (t) {
    return this.Ru.Nc(t), this.Pu[t] || "not-current";
  }, t.prototype.ou = function (t, e, n) {
    this.Pu[t] = e;
  }, t.prototype.su = function (t) {
    this.Ru.Fc(t);
  }, t.prototype.iu = function (t) {
    return this.Ru.activeTargetIds.has(t);
  }, t.prototype.ru = function (t) {
    delete this.Pu[t];
  }, t.prototype.zc = function () {
    return this.Ru.activeTargetIds;
  }, t.prototype.Yc = function (t) {
    return this.Ru.activeTargetIds.has(t);
  }, t.prototype.start = function () {
    return this.Ru = new Ki(), Promise.resolve();
  }, t.prototype.au = function (t, e, n) {// No op.
  }, t.prototype.cu = function (t) {// No op.
  }, t.prototype.th = function () {}, t.prototype.Ts = function (t) {}, t;
}(),
    Xi = function Xi(t) {
  this.key = t;
},
    $i = function $i(t) {
  this.key = t;
},
    Ji =
/** @class */
function () {
  function t(t,
  /** Documents included in the remote target */
  e) {
    this.query = t, this.gu = e, this.Vu = null,
    /**
         * A flag whether the view is current with the backend. A view is considered
         * current after it has seen the current flag from the backend and did not
         * lose consistency within the watch stream (e.g. because of an existence
         * filter mismatch).
         */
    this.Yt = !1,
    /** Documents in the view but not in the remote target */
    this.yu = ct(),
    /** Document Keys that have local changes */
    this.qt = ct(), this.pu = mn(t), this.bu = new lt(this.pu);
  }

  return Object.defineProperty(t.prototype, "vu", {
    /**
     * The set of remote documents that the server has told us belongs to the target associated with
     * this view.
     */
    get: function get() {
      return this.gu;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Iterates over a set of doc changes, applies the query limit, and computes
   * what the new results should be, what the changes were, and whether we may
   * need to go back to the local cache for more results. Does not make any
   * changes to the view.
   * @param docChanges The doc changes to apply to this view.
   * @param previousChanges If this is being called with a refill, then start
   *        with this set of docs and changes instead of the current view.
   * @return a new set of docs, changes, and refill flag.
   */
  t.prototype.Su = function (t, e) {
    var n = this,
        r = e ? e.Du : new pt(),
        i = e ? e.bu : this.bu,
        o = e ? e.qt : this.qt,
        s = i,
        u = !1,
        a = this.query.an() && i.size === this.query.limit ? i.last() : null,
        c = this.query.cn() && i.size === this.query.limit ? i.first() : null; // Drop documents out to meet limit/limitToLast requirement.

    if (t.ht(function (t, e) {
      var h = i.get(t),
          f = e instanceof tn ? e : null;
      f && (f = gn(n.query, f) ? f : null);
      var l = !!h && n.qt.has(h.key),
          p = !!f && (f.Ge || // We only consider committed mutations for documents that were
      // mutated during the lifetime of the view.
      n.qt.has(f.key) && f.hasCommittedMutations),
          d = !1; // Calculate change

      h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
        type: 3
        /* Metadata */
        ,
        doc: f
      }), d = !0) : n.Cu(h, f) || (r.track({
        type: 2
        /* Modified */
        ,
        doc: f
      }), d = !0, (a && n.pu(f, a) > 0 || c && n.pu(f, c) < 0) && ( // This doc moved from inside the limit to outside the limit.
      // That means there may be some other doc in the local cache
      // that should be included instead.
      u = !0)) : !h && f ? (r.track({
        type: 0
        /* Added */
        ,
        doc: f
      }), d = !0) : h && !f && (r.track({
        type: 1
        /* Removed */
        ,
        doc: h
      }), d = !0, (a || c) && ( // A doc was removed from a full limit query. We'll need to
      // requery from the local cache to see if we know about some other
      // doc that should be in the results.
      u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), o = o.delete(t)));
    }), this.query.an() || this.query.cn()) for (; s.size > this.query.limit;) {
      var h = this.query.an() ? s.last() : s.first();
      s = s.delete(h.key), o = o.delete(h.key), r.track({
        type: 1
        /* Removed */
        ,
        doc: h
      });
    }
    return {
      bu: s,
      Du: r,
      Nu: u,
      qt: o
    };
  }, t.prototype.Cu = function (t, e) {
    // We suppress the initial change event for documents that were modified as
    // part of a write acknowledgment (e.g. when the value of a server transform
    // is applied) as Watch will send us the same document again.
    // By suppressing the event, we only raise two user visible events (one with
    // `hasPendingWrites` and the final state of the document) instead of three
    // (one with `hasPendingWrites`, the modified document with
    // `hasPendingWrites` and the final state of the document).
    return t.Ge && e.hasCommittedMutations && !e.Ge;
  },
  /**
   * Updates the view with the given ViewDocumentChanges and optionally updates
   * limbo docs and sync state from the provided target change.
   * @param docChanges The set of changes to make to the view's docs.
   * @param updateLimboDocuments Whether to update limbo documents based on this
   *        change.
   * @param targetChange A target change to apply for computing limbo docs and
   *        sync state.
   * @return A new ViewChange with the given docs, changes, and sync state.
   */
  // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
  t.prototype.Un = function (t, e, n) {
    var r = this,
        i = this.bu;
    this.bu = t.bu, this.qt = t.qt; // Sort changes based on type and query comparator

    var o = t.Du.Mt();
    o.sort(function (t, e) {
      return function (t, e) {
        var n = function n(t) {
          switch (t) {
            case 0
            /* Added */
            :
              return 1;

            case 2
            /* Modified */
            :
            case 3
            /* Metadata */
            :
              // A metadata change is converted to a modified change at the public
              // api layer.  Since we sort by document key and then change type,
              // metadata and modified changes must be sorted equivalently.
              return 2;

            case 1
            /* Removed */
            :
              return 0;

            default:
              return p();
          }
        };

        return n(t) - n(e);
      }(t.type, e.type) || r.pu(t.doc, e.doc);
    }), this.Fu(n);
    var s = e ? this.ku() : [],
        u = 0 === this.yu.size && this.Yt ? 1
    /* Synced */
    : 0
    /* Local */
    ,
        a = u !== this.Vu;
    return this.Vu = u, 0 !== o.length || a ? {
      snapshot: new dt(this.query, t.bu, i, o, t.qt, 0
      /* Local */
      === u, a,
      /* excludesMetadataChanges= */
      !1),
      $u: s
    } : {
      $u: s
    }; // no changes
  },
  /**
   * Applies an OnlineState change to the view, potentially generating a
   * ViewChange if the view's syncState changes as a result.
   */
  t.prototype.xu = function (t) {
    return this.Yt && "Offline"
    /* Offline */
    === t ? ( // If we're offline, set `current` to false and then call applyChanges()
    // to refresh our syncState and generate a ViewChange as appropriate. We
    // are guaranteed to get a new TargetChange that sets `current` back to
    // true once the client is back online.
    this.Yt = !1, this.Un({
      bu: this.bu,
      Du: new pt(),
      qt: this.qt,
      Nu: !1
    },
    /* updateLimboDocuments= */
    !1)) : {
      $u: []
    };
  },
  /**
   * Returns whether the doc for the given key should be in limbo.
   */
  t.prototype.Ou = function (t) {
    // If the remote end says it's part of this query, it's not in limbo.
    return !this.gu.has(t) && // The local store doesn't think it's a result, so it shouldn't be in limbo.
    !!this.bu.has(t) && !this.bu.get(t).Ge;
  },
  /**
   * Updates syncedDocuments, current, and limbo docs based on the given change.
   * Returns the list of changes to which docs are in limbo.
   */
  t.prototype.Fu = function (t) {
    var e = this;
    t && (t.Jt.forEach(function (t) {
      return e.gu = e.gu.add(t);
    }), t.Xt.forEach(function (t) {}), t.Zt.forEach(function (t) {
      return e.gu = e.gu.delete(t);
    }), this.Yt = t.Yt);
  }, t.prototype.ku = function () {
    var t = this; // We can only determine limbo documents when we're in-sync with the server.

    if (!this.Yt) return []; // TODO(klimt): Do this incrementally so that it's not quadratic when
    // updating many documents.

    var e = this.yu;
    this.yu = ct(), this.bu.forEach(function (e) {
      t.Ou(e.key) && (t.yu = t.yu.add(e.key));
    }); // Diff the new limbo docs with the old limbo docs.

    var n = [];
    return e.forEach(function (e) {
      t.yu.has(e) || n.push(new $i(e));
    }), this.yu.forEach(function (t) {
      e.has(t) || n.push(new Xi(t));
    }), n;
  },
  /**
   * Update the in-memory state of the current view with the state read from
   * persistence.
   *
   * We update the query view whenever a client's primary status changes:
   * - When a client transitions from primary to secondary, it can miss
   *   LocalStorage updates and its query views may temporarily not be
   *   synchronized with the state on disk.
   * - For secondary to primary transitions, the client needs to update the list
   *   of `syncedDocuments` since secondary clients update their query views
   *   based purely on synthesized RemoteEvents.
   *
   * @param queryResult.documents - The documents that match the query according
   * to the LocalStore.
   * @param queryResult.remoteKeys - The keys of the documents that match the
   * query according to the backend.
   *
   * @return The ViewChange that resulted from this synchronization.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Mu = function (t) {
    this.gu = t.gh, this.yu = ct();
    var e = this.Su(t.documents);
    return this.Un(e,
    /*updateLimboDocuments=*/
    !0);
  },
  /**
   * Returns a view snapshot as if this query was just listened to. Contains
   * a document add for every existing document and the `fromCache` and
   * `hasPendingWrites` status of the already established view.
   */
  // PORTING NOTE: Multi-tab only.
  t.prototype.Lu = function () {
    return dt.Qt(this.query, this.bu, this.qt, 0
    /* Local */
    === this.Vu);
  }, t;
}(),
    to = function to(
/**
     * The query itself.
     */
t,
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e,
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
  this.query = t, this.targetId = e, this.view = n;
},
    eo = function eo(t) {
  this.key = t,
  /**
           * Set to true once we've received a document. This is used in
           * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
           * decide whether it needs to manufacture a delete event for the target once
           * the target is CURRENT.
           */
  this.qu = !1;
},
    no =
/** @class */
function () {
  function t(t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
  r, i, o) {
    this.La = t, this.Bu = e, this.qa = n, this.Uu = r, this.currentUser = i, this.Qu = o, this.Wu = null, this.ju = new A(function (t) {
      return yn(t);
    }, dn), this.Ku = new Map(),
    /**
         * The keys of documents that are in limbo for which we haven't yet started a
         * limbo resolution query.
         */
    this.Gu = [],
    /**
         * Keeps track of the target ID for each document that is in limbo with an
         * active target.
         */
    this.zu = new X(V.P),
    /**
         * Keeps track of the information about an active limbo resolution for each
         * active target ID that was started for the purpose of limbo resolution.
         */
    this.Hu = new Map(), this.Yu = new Si(),
    /** Stores user completion handlers, indexed by User and BatchId. */
    this.Ju = {},
    /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.Xu = new Map(), this.Zu = ii.eo(), this.onlineState = "Unknown"
    /* Unknown */
    , // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.tl = void 0;
  }

  return Object.defineProperty(t.prototype, "el", {
    get: function get() {
      return !0 === this.tl;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.subscribe = function (t) {
    this.Wu = t;
  }, t.prototype.listen = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n, r, i, o, s;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.nl("listen()"), (i = this.ju.get(t)) ? ( // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
            // already exists when EventManager calls us for the first time. This
            // happens when the primary tab is already listening to this query on
            // behalf of another tab and the user of the primary also starts listening
            // to the query. EventManager will not have an assigned target ID in this
            // case and calls `listen` to obtain this ID.
            n = i.targetId, this.Uu.eu(n), r = i.view.Lu(), [3
            /*break*/
            , 4]) : [3
            /*break*/
            , 1];

          case 1:
            return [4
            /*yield*/
            , Ii(this.La, hn(t))];

          case 2:
            return o = e.sent(), s = this.Uu.eu(o.targetId), n = o.targetId, [4
            /*yield*/
            , this.sl(t, n, "current" === s)];

          case 3:
            r = e.sent(), this.el && this.Bu.listen(o), e.label = 4;

          case 4:
            return [2
            /*return*/
            , r];
        }
      });
    });
  },
  /**
   * Registers a view for a previously unknown query and computes its initial
   * snapshot.
   */
  t.prototype.sl = function (t, n, r) {
    return e.__awaiter(this, void 0, void 0, function () {
      var i, o, s, u, a, c;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return [4
            /*yield*/
            , Ti(this.La, t,
            /* usePreviousResults= */
            !0)];

          case 1:
            return i = e.sent(), o = new Ji(t, i.gh), s = o.Su(i.documents), u = vt.Ht(n, r && "Offline"
            /* Offline */
            !== this.onlineState), a = o.Un(s,
            /* updateLimboDocuments= */
            this.el, u), this.il(n, a.$u), c = new to(t, n, o), [2
            /*return*/
            , (this.ju.set(t, c), this.Ku.has(n) ? this.Ku.get(n).push(t) : this.Ku.set(n, [t]), a.snapshot)];
        }
      });
    });
  }, t.prototype.lc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n,
          r,
          i = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            // Only clean up the query view and target if this is the only query mapped
            // to the target.
            return this.nl("unlisten()"), n = this.ju.get(t), (r = this.Ku.get(n.targetId)).length > 1 ? [2
            /*return*/
            , (this.Ku.set(n.targetId, r.filter(function (e) {
              return !dn(e, t);
            })), void this.ju.delete(t))] : this.el ? ( // We need to remove the local query target first to allow us to verify
            // whether any other client is still interested in this target.
            this.Uu.su(n.targetId), this.Uu.Yc(n.targetId) ? [3
            /*break*/
            , 2] : [4
            /*yield*/
            , Ei(this.La, n.targetId,
            /*keepPersistedTargetData=*/
            !1).then(function () {
              i.Uu.ru(n.targetId), i.Bu.lc(n.targetId), i.rl(n.targetId);
            }).catch(Ai)]) : [3
            /*break*/
            , 3];

          case 1:
            e.sent(), e.label = 2;

          case 2:
            return [3
            /*break*/
            , 5];

          case 3:
            return this.rl(n.targetId), [4
            /*yield*/
            , Ei(this.La, n.targetId,
            /*keepPersistedTargetData=*/
            !0)];

          case 4:
            e.sent(), e.label = 5;

          case 5:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.write = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r, i, o;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            this.nl("write()"), e.label = 1;

          case 1:
            return e.trys.push([1, 5,, 6]), [4
            /*yield*/
            ,
            /* Accepts locally generated Mutations and commit them to storage. */
            function (t, e) {
              var n,
                  r = y(t),
                  i = x.now(),
                  o = e.reduce(function (t, e) {
                return t.add(e.key);
              }, ct());
              return r.persistence.runTransaction("Locally write mutations", "readwrite", function (t) {
                return r.Rh.Zn(t, o).next(function (o) {
                  n = o;

                  for ( // For non-idempotent mutations (such as `FieldValue.increment()`),
                  // we record the base state in a separate patch mutation. This is
                  // later used to guarantee consistent values and prevents flicker
                  // even if the backend sends us an update that already includes our
                  // transform.
                  var s = [], u = 0, a = e; u < a.length; u++) {
                    var c = a[u],
                        h = Me(c, n.get(c.key));
                    null != h && // NOTE: The base state should only be applied if there's some
                    // existing document to override, so use a Precondition of
                    // exists=true
                    s.push(new Be(c.key, h, $e(h.proto.mapValue), Oe.exists(!0)));
                  }

                  return r.Gn.Ir(t, i, s, e);
                });
              }).then(function (t) {
                var e = t.An(n);
                return {
                  batchId: t.batchId,
                  Fn: e
                };
              });
            }(this.La, t)];

          case 2:
            return r = e.sent(), this.Uu.Jc(r.batchId), this.ol(r.batchId, n), [4
            /*yield*/
            , this.hl(r.Fn)];

          case 3:
            return e.sent(), [4
            /*yield*/
            , this.Bu.hc()];

          case 4:
            return e.sent(), [3
            /*break*/
            , 6];

          case 5:
            return i = e.sent(), o = or(i, "Failed to persist write"), n.reject(o), [3
            /*break*/
            , 6];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.mc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n,
          r = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            this.nl("applyRemoteEvent()"), e.label = 1;

          case 1:
            return e.trys.push([1, 4,, 6]), [4
            /*yield*/
            , _i(this.La, t)];

          case 2:
            return n = e.sent(), // Update `receivedDocument` as appropriate for any limbo targets.
            t.Wt.forEach(function (t, e) {
              var n = r.Hu.get(e);
              n && ( // Since this is a limbo resolution lookup, it's for a single document
              // and it could be added, modified, or removed, but not a combination.
              d(t.Jt.size + t.Xt.size + t.Zt.size <= 1), t.Jt.size > 0 ? n.qu = !0 : t.Xt.size > 0 ? d(n.qu) : t.Zt.size > 0 && (d(n.qu), n.qu = !1));
            }), [4
            /*yield*/
            , this.hl(n, t)];

          case 3:
            // Update `receivedDocument` as appropriate for any limbo targets.
            return e.sent(), [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , Ai(e.sent())];

          case 5:
            return e.sent(), [3
            /*break*/
            , 6];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.xu = function (t, e) {
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
    if (this.el && 0
    /* RemoteStore */
    === e || !this.el && 1
    /* SharedClientState */
    === e) {
      this.nl("applyOnlineStateChange()");
      var n = [];
      this.ju.forEach(function (e, r) {
        var i = r.view.xu(t);
        i.snapshot && n.push(i.snapshot);
      }), this.Wu.al(t), this.Wu.Ea(n), this.onlineState = t, this.el && this.Uu.cu(t);
    }
  }, t.prototype.Ic = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r,
          i,
          o,
          s,
          u,
          a = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.nl("rejectListens()"), // PORTING NOTE: Multi-tab only.
            this.Uu.ou(t, "rejected", n), r = this.Hu.get(t), (i = r && r.key) ? (o = (o = new X(V.P)).st(i, new en(i, k.min())), s = ct().add(i), u = new yt(k.min(),
            /* targetChanges= */
            new Map(),
            /* targetMismatches= */
            new tt(m), o, s), [4
            /*yield*/
            , this.mc(u)]) : [3
            /*break*/
            , 2];

          case 1:
            return e.sent(), // Since this query failed, we won't want to manually unlisten to it.
            // We only remove it from bookkeeping after we successfully applied the
            // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
            // this query when the RemoteStore restarts the Watch stream, which should
            // re-trigger the target failure.
            this.zu = this.zu.remove(i), this.Hu.delete(t), this.cl(), [3
            /*break*/
            , 4];

          case 2:
            return [4
            /*yield*/
            , Ei(this.La, t,
            /* keepPersistedTargetData */
            !1).then(function () {
              return a.rl(t, n);
            }).catch(Ai)];

          case 3:
            e.sent(), e.label = 4;

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.yc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n, r;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            this.nl("applySuccessfulWrite()"), n = t.batch.batchId, e.label = 1;

          case 1:
            return e.trys.push([1, 4,, 6]), [4
            /*yield*/
            , mi(this.La, t)];

          case 2:
            return r = e.sent(), // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught
            // up), so we raise user callbacks first so that they consistently happen
            // before listen events.
            this.ul(n,
            /*error=*/
            null), this.ll(n), this.Uu.Zc(n, "acknowledged"), [4
            /*yield*/
            , this.hl(r)];

          case 3:
            // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught
            // up), so we raise user callbacks first so that they consistently happen
            // before listen events.
            return e.sent(), [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , Ai(e.sent())];

          case 5:
            return e.sent(), [3
            /*break*/
            , 6];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.bc = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            this.nl("rejectFailedWrite()"), e.label = 1;

          case 1:
            return e.trys.push([1, 4,, 6]), [4
            /*yield*/
            , function (t, e) {
              var n = y(t);
              return n.persistence.runTransaction("Reject batch", "readwrite-primary", function (t) {
                var r;
                return n.Gn.Rr(t, e).next(function (e) {
                  return d(null !== e), r = e.keys(), n.Gn.br(t, e);
                }).next(function () {
                  return n.Gn.Cr(t);
                }).next(function () {
                  return n.Rh.Zn(t, r);
                });
              });
            }(this.La, t)];

          case 2:
            return r = e.sent(), // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught up),
            // so we raise user callbacks first so that they consistently happen before
            // listen events.
            this.ul(t, n), this.ll(t), this.Uu.Zc(t, "rejected", n), [4
            /*yield*/
            , this.hl(r)];

          case 3:
            // The local store may or may not be able to apply the write result and
            // raise events immediately (depending on whether the watcher is caught up),
            // so we raise user callbacks first so that they consistently happen before
            // listen events.
            return e.sent(), [3
            /*break*/
            , 6];

          case 4:
            return [4
            /*yield*/
            , Ai(e.sent())];

          case 5:
            return e.sent(), [3
            /*break*/
            , 6];

          case 6:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype._l = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n, r, i, o;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            this.Bu.Ga() || c("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), e.label = 1;

          case 1:
            return e.trys.push([1, 3,, 4]), [4
            /*yield*/
            , function (t) {
              var e = y(t);
              return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function (t) {
                return e.Gn.Vr(t);
              });
            }(this.La)];

          case 2:
            return -1 === (n = e.sent()) ? [2
            /*return*/
            , void t.resolve()] : ((r = this.Xu.get(n) || []).push(t), this.Xu.set(n, r), [3
            /*break*/
            , 4]);

          case 3:
            return i = e.sent(), o = or(i, "Initialization of waitForPendingWrites() operation failed"), t.reject(o), [3
            /*break*/
            , 4];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
   * if there are any.
   */
  t.prototype.ll = function (t) {
    (this.Xu.get(t) || []).forEach(function (t) {
      t.resolve();
    }), this.Xu.delete(t);
  },
  /** Reject all outstanding callbacks waiting for pending writes to complete. */
  t.prototype.fl = function (t) {
    this.Xu.forEach(function (e) {
      e.forEach(function (e) {
        e.reject(new D(S.CANCELLED, t));
      });
    }), this.Xu.clear();
  }, t.prototype.ol = function (t, e) {
    var n = this.Ju[this.currentUser.$h()];
    n || (n = new X(m)), n = n.st(t, e), this.Ju[this.currentUser.$h()] = n;
  },
  /**
   * Resolves or rejects the user callback for the given batch and then discards
   * it.
   */
  t.prototype.ul = function (t, e) {
    var n = this.Ju[this.currentUser.$h()]; // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.

    if (n) {
      var r = n.get(t);
      r && (e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.Ju[this.currentUser.$h()] = n;
    }
  }, t.prototype.rl = function (t, e) {
    var n = this;
    void 0 === e && (e = null), this.Uu.su(t);

    for (var r = 0, i = this.Ku.get(t); r < i.length; r++) {
      var o = i[r];
      this.ju.delete(o), e && this.Wu.dl(o, e);
    }

    this.Ku.delete(t), this.el && this.Yu.Ch(t).forEach(function (t) {
      n.Yu.Nr(t) || // We removed the last reference for this key
      n.wl(t);
    });
  }, t.prototype.wl = function (t) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var e = this.zu.get(t);
    null !== e && (this.Bu.lc(e), this.zu = this.zu.remove(t), this.Hu.delete(e), this.cl());
  }, t.prototype.il = function (t, e) {
    for (var n = 0, r = e; n < r.length; n++) {
      var i = r[n];
      i instanceof Xi ? (this.Yu.Eo(i.key, t), this.Tl(i)) : i instanceof $i ? (c("SyncEngine", "Document no longer in limbo: " + i.key), this.Yu.Io(i.key, t), this.Yu.Nr(i.key) || // We removed the last reference for this key
      this.wl(i.key)) : p();
    }
  }, t.prototype.Tl = function (t) {
    var e = t.key;
    this.zu.get(e) || (c("SyncEngine", "New document in limbo: " + e), this.Gu.push(e), this.cl());
  },
  /**
   * Starts listens for documents in limbo that are enqueued for resolution,
   * subject to a maximum number of concurrent resolutions.
   *
   * Without bounding the number of concurrent resolutions, the server can fail
   * with "resource exhausted" errors which can lead to pathological client
   * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
   */
  t.prototype.cl = function () {
    for (; this.Gu.length > 0 && this.zu.size < this.Qu;) {
      var t = this.Gu.shift(),
          e = this.Zu.next();
      this.Hu.set(e, new eo(t)), this.zu = this.zu.st(t, e), this.Bu.listen(new H(hn(un(t.path)), e, 2
      /* LimboResolution */
      , Bn.Es));
    }
  }, // Visible for testing
  t.prototype.El = function () {
    return this.zu;
  }, // Visible for testing
  t.prototype.ml = function () {
    return this.Gu;
  }, t.prototype.hl = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r,
          i,
          o,
          s = this;
      return e.__generator(this, function (u) {
        switch (u.label) {
          case 0:
            return r = [], i = [], o = [], this.ju.forEach(function (e, u) {
              o.push(Promise.resolve().then(function () {
                var e = u.view.Su(t);
                return e.Nu ? Ti(s.La, u.query,
                /* usePreviousResults= */
                !1).then(function (t) {
                  var n = t.documents;
                  return u.view.Su(n, e);
                }) : e; // The query has a limit and some docs were removed, so we need
                // to re-run the query against the local store to make sure we
                // didn't lose any good docs that had been past the limit.
              }).then(function (t) {
                var e = n && n.Wt.get(u.targetId),
                    o = u.view.Un(t,
                /* updateLimboDocuments= */
                s.el, e);

                if (s.il(u.targetId, o.$u), o.snapshot) {
                  s.el && s.Uu.ou(u.targetId, o.snapshot.fromCache ? "not-current" : "current"), r.push(o.snapshot);

                  var a = jn._s(u.targetId, o.snapshot);

                  i.push(a);
                }
              }));
            }), [4
            /*yield*/
            , Promise.all(o)];

          case 1:
            return u.sent(), this.Wu.Ea(r), [4
            /*yield*/
            , function (t, n) {
              return e.__awaiter(this, void 0, void 0, function () {
                var r, i, o, s, u, a, h, f, l;
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      r = y(t), e.label = 1;

                    case 1:
                      return e.trys.push([1, 3,, 4]), [4
                      /*yield*/
                      , r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function (t) {
                        return Cn.forEach(n, function (e) {
                          return Cn.forEach(e.us, function (n) {
                            return r.persistence.dr.Eo(t, e.targetId, n);
                          }).next(function () {
                            return Cn.forEach(e.ls, function (n) {
                              return r.persistence.dr.Io(t, e.targetId, n);
                            });
                          });
                        });
                      })];

                    case 2:
                      return e.sent(), [3
                      /*break*/
                      , 4];

                    case 3:
                      if (!Yn(i = e.sent())) throw i; // If `notifyLocalViewChanges` fails, we did not advance the sequence
                      // number for the documents that were included in this transaction.
                      // This might trigger them to be deleted earlier than they otherwise
                      // would have, but it should not invalidate the integrity of the data.

                      return c("LocalStore", "Failed to update sequence numbers: " + i), [3
                      /*break*/
                      , 4];

                    case 4:
                      for (o = 0, s = n; o < s.length; o++) {
                        u = s[o], a = u.targetId, u.fromCache || (h = r.Eh.get(a), f = h.Z, l = h.nt(f), // Advance the last limbo free snapshot version
                        r.Eh = r.Eh.st(a, l));
                      }

                      return [2
                      /*return*/
                      ];
                  }
                });
              });
            }(this.La, i)];

          case 2:
            return u.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.nl = function (t) {}, t.prototype.vc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n;
      return e.__generator(this, function (r) {
        switch (r.label) {
          case 0:
            return this.currentUser.isEqual(t) ? [3
            /*break*/
            , 3] : (c("SyncEngine", "User change. New user:", t.$h()), [4
            /*yield*/
            ,
            /**
            * Tells the LocalStore that the currently authenticated user has changed.
            *
            * In response the local store switches the mutation queue to the new user and
            * returns any resulting document changes.
            */
            // PORTING NOTE: Android and iOS only return the documents affected by the
            // change.
            function (t, n) {
              return e.__awaiter(this, void 0, void 0, function () {
                var r, i, o, s;
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return r = y(t), i = r.Gn, o = r.Rh, [4
                      /*yield*/
                      , r.persistence.runTransaction("Handle user change", "readonly", function (t) {
                        // Swap out the mutation queue, grabbing the pending mutation batches
                        // before and after.
                        var e;
                        return r.Gn.yr(t).next(function (s) {
                          return e = s, i = r.persistence.oh(n), // Recreate our LocalDocumentsView using the new
                          // MutationQueue.
                          o = new Gn(r.Ah, i, r.persistence.uh()), i.yr(t);
                        }).next(function (n) {
                          for (var r = [], i = [], s = ct(), u = 0, a = e // Union the old/new changed keys.
                          ; u < a.length; u++) {
                            var c = a[u];
                            r.push(c.batchId);

                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                              var l = f[h];
                              s = s.add(l.key);
                            }
                          }

                          for (var p = 0, d = n; p < d.length; p++) {
                            var y = d[p];
                            i.push(y.batchId);

                            for (var v = 0, g = y.mutations; v < g.length; v++) {
                              var m = g[v];
                              s = s.add(m.key);
                            }
                          } // Return the set of all (potentially) changed documents and the list
                          // of mutation batch IDs that were affected by change.


                          return o.Zn(t, s).next(function (t) {
                            return {
                              Il: t,
                              Al: r,
                              Rl: i
                            };
                          });
                        });
                      })];

                    case 1:
                      return s = e.sent(), [2
                      /*return*/
                      , (r.Gn = i, r.Rh = o, r.Th.Ph(r.Rh), s)];
                  }
                });
              });
            }(this.La, t)]);

          case 1:
            return n = r.sent(), this.currentUser = t, // Fails tasks waiting for pending writes requested by previous user.
            this.fl("'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
            this.Uu.au(t, n.Al, n.Rl), [4
            /*yield*/
            , this.hl(n.Il)];

          case 2:
            r.sent(), r.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.Oe = function (t) {
    var e = this.Hu.get(t);
    if (e && e.qu) return ct().add(e.key);
    var n = ct(),
        r = this.Ku.get(t);
    if (!r) return n;

    for (var i = 0, o = r; i < o.length; i++) {
      var s = o[i],
          u = this.ju.get(s);
      n = n.Nt(u.view.vu);
    }

    return n;
  }, t;
}();
/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */


function ro(t, n) {
  return e.__awaiter(this, void 0, void 0, function () {
    var r, i, o;
    return e.__generator(this, function (e) {
      switch (e.label) {
        case 0:
          return [4
          /*yield*/
          , Ti((r = y(t)).La, n.query,
          /* usePreviousResults= */
          !0)];

        case 1:
          return i = e.sent(), o = n.view.Mu(i), [2
          /*return*/
          , (r.el && r.il(n.targetId, o.$u), o)];
      }
    });
  });
}
/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.


function io(t, n, r, i) {
  return e.__awaiter(this, void 0, void 0, function () {
    var o, s;
    return e.__generator(this, function (e) {
      switch (e.label) {
        case 0:
          return (o = y(t)).nl("applyBatchState()"), [4
          /*yield*/
          , function (t, e) {
            var n = y(t),
                r = y(n.Gn);
            return n.persistence.runTransaction("Lookup mutation documents", "readonly", function (t) {
              return r.Pr(t, e).next(function (e) {
                return e ? n.Rh.Zn(t, e) : Cn.resolve(null);
              });
            });
          }(o.La, n)];

        case 1:
          return null === (s = e.sent()) ? [3
          /*break*/
          , 6] : "pending" !== r ? [3
          /*break*/
          , 3] : [4
          /*yield*/
          , o.Bu.hc()];

        case 2:
          // If we are the primary client, we need to send this write to the
          // backend. Secondary clients will ignore these writes since their remote
          // connection is disabled.
          return e.sent(), [3
          /*break*/
          , 4];

        case 3:
          "acknowledged" === r || "rejected" === r ? ( // NOTE: Both these methods are no-ops for batches that originated from
          // other clients.
          o.ul(n, i || null), function (t, e) {
            y(y(t).Gn).Sr(e);
          }(o.La, n)) : p(), e.label = 4;

        case 4:
          return [4
          /*yield*/
          , o.hl(s)];

        case 5:
          return e.sent(), [3
          /*break*/
          , 7];

        case 6:
          // A throttled tab may not have seen the mutation before it was completed
          // and removed from the mutation queue, in which case we won't have cached
          // the affected documents. In this case we can safely ignore the update
          // since that means we didn't apply the mutation locally at all (if we
          // had, we would have cached the affected documents), and so we will just
          // see any resulting document changes via normal remote document updates
          // as applicable.
          c("SyncEngine", "Cannot apply mutation batch with id: " + n), e.label = 7;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.


function oo(t, n) {
  return e.__awaiter(this, void 0, void 0, function () {
    var r, i, o, s, u, a, c, h;
    return e.__generator(this, function (e) {
      switch (e.label) {
        case 0:
          return r = y(t), !0 !== n || !0 === r.tl ? [3
          /*break*/
          , 3] : (i = r.Uu.zc(), [4
          /*yield*/
          , so(r, i.N())]);

        case 1:
          return o = e.sent(), r.tl = !0, [4
          /*yield*/
          , r.Bu.Sc(!0)];

        case 2:
          for (e.sent(), s = 0, u = o; s < u.length; s++) {
            a = u[s], r.Bu.listen(a);
          }

          return [3
          /*break*/
          , 7];

        case 3:
          return !1 !== n || !1 === r.tl ? [3
          /*break*/
          , 7] : (c = [], h = Promise.resolve(), r.Ku.forEach(function (t, e) {
            r.Uu.iu(e) ? c.push(e) : h = h.then(function () {
              return r.rl(e), Ei(r.La, e,
              /*keepPersistedTargetData=*/
              !0);
            }), r.Bu.lc(e);
          }), [4
          /*yield*/
          , h]);

        case 4:
          return e.sent(), [4
          /*yield*/
          , so(r, c)];

        case 5:
          return e.sent(), // PORTING NOTE: Multi-Tab only.
          function (t) {
            var e = y(t);
            e.Hu.forEach(function (t, n) {
              e.Bu.lc(n);
            }), e.Yu.Nh(), e.Hu = new Map(), e.zu = new X(V.P);
          }(r), r.tl = !1, [4
          /*yield*/
          , r.Bu.Sc(!1)];

        case 6:
          e.sent(), e.label = 7;

        case 7:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function so(t, n, r) {
  return e.__awaiter(this, void 0, void 0, function () {
    var r, i, o, s, u, a, c, h, f, l, p, d, v, g;
    return e.__generator(this, function (e) {
      switch (e.label) {
        case 0:
          r = y(t), i = [], o = [], s = 0, u = n, e.label = 1;

        case 1:
          return s < u.length ? (a = u[s], c = void 0, (h = r.Ku.get(a)) && 0 !== h.length ? [4
          /*yield*/
          , Ii(r.La, hn(h[0]))] : [3
          /*break*/
          , 7]) : [3
          /*break*/
          , 13];

        case 2:
          // For queries that have a local View, we fetch their current state
          // from LocalStore (as the resume token and the snapshot version
          // might have changed) and reconcile their views with the persisted
          // state (the list of syncedDocuments may have gotten out of sync).
          c = e.sent(), f = 0, l = h, e.label = 3;

        case 3:
          return f < l.length ? (p = l[f], d = r.ju.get(p), [4
          /*yield*/
          , ro(r, d)]) : [3
          /*break*/
          , 6];

        case 4:
          (v = e.sent()).snapshot && o.push(v.snapshot), e.label = 5;

        case 5:
          return f++, [3
          /*break*/
          , 3];

        case 6:
          return [3
          /*break*/
          , 11];

        case 7:
          return [4
          /*yield*/
          , Ni(r.La, a)];

        case 8:
          return g = e.sent(), [4
          /*yield*/
          , Ii(r.La, g)];

        case 9:
          return c = e.sent(), [4
          /*yield*/
          , r.sl(uo(g), a,
          /*current=*/
          !1)];

        case 10:
          e.sent(), e.label = 11;

        case 11:
          i.push(c), e.label = 12;

        case 12:
          return s++, [3
          /*break*/
          , 1];

        case 13:
          return [2
          /*return*/
          , (r.Wu.Ea(o), i)];
      }
    });
  });
}
/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.


function uo(t) {
  return sn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F"
  /* First */
  , t.startAt, t.endAt);
}
/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.


function ao(t) {
  var e = y(t);
  return y(y(e.La).persistence).rh();
}
/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.


function co(t, n, r, i) {
  return e.__awaiter(this, void 0, void 0, function () {
    var o, s, u;
    return e.__generator(this, function (e) {
      switch (e.label) {
        case 0:
          return (o = y(t)).tl ? ( // If we receive a target state notification via WebStorage, we are
          // either already secondary or another tab has taken the primary lease.
          c("SyncEngine", "Ignoring unexpected query state notification."), [3
          /*break*/
          , 8]) : [3
          /*break*/
          , 1];

        case 1:
          if (!o.Ku.has(n)) return [3
          /*break*/
          , 8];

          switch (r) {
            case "current":
            case "not-current":
              return [3
              /*break*/
              , 2];

            case "rejected":
              return [3
              /*break*/
              , 5];
          }

          return [3
          /*break*/
          , 7];

        case 2:
          return [4
          /*yield*/
          , function (t) {
            var e = y(t),
                n = y(e.Ah);
            return e.persistence.runTransaction("Get new document changes", "readonly", function (t) {
              return n.Ur(t, e.Ih);
            }).then(function (t) {
              var n = t.Qr,
                  r = t.readTime;
              return e.Ih = r, n;
            });
          }(o.La)];

        case 3:
          return s = e.sent(), u = yt.zt(n, "current" === r), [4
          /*yield*/
          , o.hl(s, u)];

        case 4:
          return e.sent(), [3
          /*break*/
          , 8];

        case 5:
          return [4
          /*yield*/
          , Ei(o.La, n,
          /* keepPersistedTargetData */
          !0)];

        case 6:
          return e.sent(), o.rl(n, i), [3
          /*break*/
          , 8];

        case 7:
          p(), e.label = 8;

        case 8:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/** Adds or removes Watch targets for queries from different tabs. */


function ho(t, n, r) {
  return e.__awaiter(this, void 0, void 0, function () {
    var i, o, s, u, a, h, f, l, p, d;
    return e.__generator(this, function (v) {
      switch (v.label) {
        case 0:
          if (!(i = y(t)).tl) return [3
          /*break*/
          , 10];
          o = 0, s = n, v.label = 1;

        case 1:
          return o < s.length ? (u = s[o], i.Ku.has(u) ? ( // A target might have been added in a previous attempt
          c("SyncEngine", "Adding an already active target " + u), [3
          /*break*/
          , 5]) : [4
          /*yield*/
          , Ni(i.La, u)]) : [3
          /*break*/
          , 6];

        case 2:
          return a = v.sent(), [4
          /*yield*/
          , Ii(i.La, a)];

        case 3:
          return h = v.sent(), [4
          /*yield*/
          , i.sl(uo(a), h.targetId,
          /*current=*/
          !1)];

        case 4:
          v.sent(), i.Bu.listen(h), v.label = 5;

        case 5:
          return o++, [3
          /*break*/
          , 1];

        case 6:
          f = function f(t) {
            return e.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return i.Ku.has(t) ? [4
                  /*yield*/
                  , Ei(i.La, t,
                  /* keepPersistedTargetData */
                  !1).then(function () {
                    i.Bu.lc(t), i.rl(t);
                  }).catch(Ai)] : [3
                  /*break*/
                  , 2];
                // Release queries that are still active.

                case 1:
                  // Release queries that are still active.
                  e.sent(), e.label = 2;

                case 2:
                  return [2
                  /*return*/
                  ];
              }
            });
          }, l = 0, p = r, v.label = 7;

        case 7:
          return l < p.length ? (d = p[l], [5
          /*yield**/
          , f(d)]) : [3
          /*break*/
          , 10];

        case 8:
          v.sent(), v.label = 9;

        case 9:
          return l++, [3
          /*break*/
          , 7];

        case 10:
          return [2
          /*return*/
          ];
      }
    });
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */


var fo = function fo() {
  this.Pl = void 0, this.listeners = [];
},
    lo =
/** @class */
function () {
  function t(t) {
    this.fc = t, this.gl = new A(function (t) {
      return yn(t);
    }, dn), this.onlineState = "Unknown"
    /* Unknown */
    , this.Vl = new Set(), this.fc.subscribe(this);
  }

  return t.prototype.listen = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n, r, i, o, s, u;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            if (n = t.query, r = !1, (i = this.gl.get(n)) || (r = !0, i = new fo()), !r) return [3
            /*break*/
            , 4];
            e.label = 1;

          case 1:
            return e.trys.push([1, 3,, 4]), o = i, [4
            /*yield*/
            , this.fc.listen(n)];

          case 2:
            return o.Pl = e.sent(), [3
            /*break*/
            , 4];

          case 3:
            return s = e.sent(), u = or(s, "Initialization of query '" + vn(t.query) + "' failed"), [2
            /*return*/
            , void t.onError(u)];

          case 4:
            return this.gl.set(n, i), i.listeners.push(t), // Run global snapshot listeners if a consistent snapshot has been emitted.
            t.xu(this.onlineState), i.Pl && t.yl(i.Pl) && this.pl(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.lc = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n, r, i, o;
      return e.__generator(this, function (e) {
        return n = t.query, r = !1, (i = this.gl.get(n)) && (o = i.listeners.indexOf(t)) >= 0 && (i.listeners.splice(o, 1), r = 0 === i.listeners.length), r ? [2
        /*return*/
        , (this.gl.delete(n), this.fc.lc(n))] : [2
        /*return*/
        ];
      });
    });
  }, t.prototype.Ea = function (t) {
    for (var e = !1, n = 0, r = t; n < r.length; n++) {
      var i = r[n],
          o = i.query,
          s = this.gl.get(o);

      if (s) {
        for (var u = 0, a = s.listeners; u < a.length; u++) {
          a[u].yl(i) && (e = !0);
        }

        s.Pl = i;
      }
    }

    e && this.pl();
  }, t.prototype.dl = function (t, e) {
    var n = this.gl.get(t);
    if (n) for (var r = 0, i = n.listeners; r < i.length; r++) {
      i[r].onError(e);
    } // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.

    this.gl.delete(t);
  }, t.prototype.al = function (t) {
    this.onlineState = t;
    var e = !1;
    this.gl.forEach(function (n, r) {
      for (var i = 0, o = r.listeners; i < o.length; i++) {
        // Run global snapshot listeners if a consistent snapshot has been emitted.
        o[i].xu(t) && (e = !0);
      }
    }), e && this.pl();
  }, t.prototype.bl = function (t) {
    this.Vl.add(t), // Immediately fire an initial event, indicating all existing listeners
    // are in-sync.
    t.next();
  }, t.prototype.vl = function (t) {
    this.Vl.delete(t);
  }, // Call all global snapshot listeners that have been set.
  t.prototype.pl = function () {
    this.Vl.forEach(function (t) {
      t.next();
    });
  }, t;
}(),
    po =
/** @class */
function () {
  function t(t, e, n) {
    this.query = t, this.Sl = e,
    /**
         * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
         * observer. This flag is set to true once we've actually raised an event.
         */
    this.Dl = !1, this.Cl = null, this.onlineState = "Unknown"
    /* Unknown */
    , this.options = n || {}
    /**
    * Applies the new ViewSnapshot to this listener, raising a user-facing event
    * if applicable (depending on what changed, whether the user has opted into
    * metadata-only changes, etc.). Returns true if a user-facing event was
    * indeed raised.
    */
    ;
  }

  return t.prototype.yl = function (t) {
    if (!this.options.includeMetadataChanges) {
      for ( // Remove the metadata only changes.
      var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
        var i = r[n];
        3
        /* Metadata */
        !== i.type && e.push(i);
      }

      t = new dt(t.query, t.docs, t.Lt, e, t.qt, t.fromCache, t.Bt,
      /* excludesMetadataChanges= */
      !0);
    }

    var o = !1;
    return this.Dl ? this.Nl(t) && (this.Sl.next(t), o = !0) : this.Fl(t, this.onlineState) && (this.kl(t), o = !0), this.Cl = t, o;
  }, t.prototype.onError = function (t) {
    this.Sl.error(t);
  },
  /** Returns whether a snapshot was raised. */
  t.prototype.xu = function (t) {
    this.onlineState = t;
    var e = !1;
    return this.Cl && !this.Dl && this.Fl(this.Cl, t) && (this.kl(this.Cl), e = !0), e;
  }, t.prototype.Fl = function (t, e) {
    // Always raise the first event when we're synced
    if (!t.fromCache) return !0; // NOTE: We consider OnlineState.Unknown as online (it should become Offline
    // or Online if we wait long enough).

    var n = "Offline"
    /* Offline */
    !== e; // Don't raise the event if we're online, aren't synced yet (checked
    // above) and are waiting for a sync.

    return !(this.options.$l && n || t.docs._() && "Offline"
    /* Offline */
    !== e); // Raise data from cache if we have any documents or we are offline
  }, t.prototype.Nl = function (t) {
    // We don't need to handle includeDocumentMetadataChanges here because
    // the Metadata only changes have already been stripped out if needed.
    // At this point the only changes we will see are the ones we should
    // propagate.
    if (t.docChanges.length > 0) return !0;
    var e = this.Cl && this.Cl.hasPendingWrites !== t.hasPendingWrites;
    return !(!t.Bt && !e) && !0 === this.options.includeMetadataChanges; // Generally we should have hit one of the cases above, but it's possible
    // to get here if there were only metadata docChanges and they got
    // stripped out.
  }, t.prototype.kl = function (t) {
    t = dt.Qt(t.query, t.docs, t.qt, t.fromCache), this.Dl = !0, this.Sl.next(t);
  }, t;
}(),
    yo =
/** @class */
function () {
  function t() {}

  return t.prototype.Ph = function (t) {
    this.xl = t;
  }, t.prototype.ns = function (t, e, n, i) {
    var o = this; // Queries that match all documents don't benefit from using
    // IndexFreeQueries. It is more efficient to scan all documents in a
    // collection, rather than to perform individual lookups.

    return e.hn() || n.isEqual(k.min()) ? this.Ol(t, e) : this.xl.Zn(t, i).next(function (s) {
      var u = o.Ml(e, s);
      return (e.an() || e.cn()) && o.Nu(e.nn, u, i, n) ? o.Ol(t, e) : (a() <= r.LogLevel.DEBUG && c("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), vn(e)), o.xl.ns(t, e, n).next(function (t) {
        // We merge `previousResults` into `updateResults`, since
        // `updateResults` is already a DocumentMap. If a document is
        // contained in both lists, then its contents are the same.
        return u.forEach(function (e) {
          t = t.st(e.key, e);
        }), t;
      }));
    }); // Queries that have never seen a snapshot without limbo free documents
    // should also be run as a full collection scan.
  },
  /** Applies the query filter and sorting to the provided documents.  */
  t.prototype.Ml = function (t, e) {
    // Sort the documents and re-apply the query filter since previously
    // matching documents do not necessarily still match the query.
    var n = new tt(mn(t));
    return e.forEach(function (e, r) {
      r instanceof tn && gn(t, r) && (n = n.add(r));
    }), n;
  },
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param sortedPreviousResults The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion The version of the snapshot when the query
   * was last synchronized.
   */
  t.prototype.Nu = function (t, e, n, r) {
    // The query needs to be refilled if a previously matching document no
    // longer matches.
    if (n.size !== e.size) return !0; // Limit queries are not eligible for index-free query execution if there is
    // a potential that an older document from cache now sorts before a document
    // that was previously part of the limit. This, however, can only happen if
    // the document at the edge of the limit goes out of limit.
    // If a document that is not the limit boundary sorts differently,
    // the boundary of the limit itself did not change and documents from cache
    // will continue to be "rejected" by this boundary. Therefore, we can ignore
    // any modifications that don't affect the last document.

    var i = "F"
    /* First */
    === t ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.o(r) > 0);
  }, t.prototype.Ol = function (t, e) {
    return a() <= r.LogLevel.DEBUG && c("IndexFreeQueryEngine", "Using full collection scan to execute query:", vn(e)), this.xl.ns(t, e, k.min());
  }, t;
}(),
    vo =
/** @class */
function () {
  function t(t, e) {
    this.zn = t, this.dr = e,
    /**
         * The set of all mutations that have been sent but not yet been applied to
         * the backend.
         */
    this.Gn = [],
    /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.Ll = 1,
    /** An ordered mapping between documents and the mutations batch IDs. */
    this.ql = new tt(Di.yh);
  }

  return t.prototype.mr = function (t) {
    return Cn.resolve(0 === this.Gn.length);
  }, t.prototype.Ir = function (t, e, n, r) {
    var i = this.Ll;
    this.Ll++, this.Gn.length > 0 && this.Gn[this.Gn.length - 1];
    var o = new Vn(i, e, n, r);
    this.Gn.push(o); // Track references by document key and index collection parents.

    for (var s = 0, u = r; s < u.length; s++) {
      var a = u[s];
      this.ql = this.ql.add(new Di(a.key, i)), this.zn.Ar(t, a.key.path.p());
    }

    return Cn.resolve(o);
  }, t.prototype.Rr = function (t, e) {
    return Cn.resolve(this.Bl(e));
  }, t.prototype.gr = function (t, e) {
    var n = e + 1,
        r = this.Ul(n),
        i = r < 0 ? 0 : r; // The requested batchId may still be out of range so normalize it to the
    // start of the queue.

    return Cn.resolve(this.Gn.length > i ? this.Gn[i] : null);
  }, t.prototype.Vr = function () {
    return Cn.resolve(0 === this.Gn.length ? -1 : this.Ll - 1);
  }, t.prototype.yr = function (t) {
    return Cn.resolve(this.Gn.slice());
  }, t.prototype.Yn = function (t, e) {
    var n = this,
        r = new Di(e, 0),
        i = new Di(e, Number.POSITIVE_INFINITY),
        o = [];
    return this.ql.St([r, i], function (t) {
      var e = n.Bl(t.kh);
      o.push(e);
    }), Cn.resolve(o);
  }, t.prototype.es = function (t, e) {
    var n = this,
        r = new tt(m);
    return e.forEach(function (t) {
      var e = new Di(t, 0),
          i = new Di(t, Number.POSITIVE_INFINITY);
      n.ql.St([e, i], function (t) {
        r = r.add(t.kh);
      });
    }), Cn.resolve(this.Ql(r));
  }, t.prototype.as = function (t, e) {
    // Use the query path as a prefix for testing if a document matches the
    // query.
    var n = e.path,
        r = n.length + 1,
        i = n; // Construct a document reference for actually scanning the index. Unlike
    // the prefix the document key in this reference must have an even number of
    // segments. The empty segment can be used a suffix of the query path
    // because it precedes all other segments in an ordered traversal.

    V.j(i) || (i = i.child(""));
    var o = new Di(new V(i), 0),
        s = new tt(m); // Find unique batchIDs referenced by all documents potentially matching the
    // query.

    return this.ql.Dt(function (t) {
      var e = t.key.path;
      return !!n.D(e) && ( // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      e.length === r && (s = s.add(t.kh)), !0);
    }, o), Cn.resolve(this.Ql(s));
  }, t.prototype.Ql = function (t) {
    var e = this,
        n = []; // Construct an array of matching batches, sorted by batchID to ensure that
    // multiple mutations affecting the same document key are applied in order.

    return t.forEach(function (t) {
      var r = e.Bl(t);
      null !== r && n.push(r);
    }), n;
  }, t.prototype.br = function (t, e) {
    var n = this;
    d(0 === this.Wl(e.batchId, "removed")), this.Gn.shift();
    var r = this.ql;
    return Cn.forEach(e.mutations, function (i) {
      var o = new Di(i.key, e.batchId);
      return r = r.delete(o), n.dr.Dr(t, i.key);
    }).next(function () {
      n.ql = r;
    });
  }, t.prototype.Sr = function (t) {// No-op since the memory mutation queue does not maintain a separate cache.
  }, t.prototype.Nr = function (t, e) {
    var n = new Di(e, 0),
        r = this.ql.Ct(n);
    return Cn.resolve(e.isEqual(r && r.key));
  }, t.prototype.Cr = function (t) {
    return this.Gn.length, Cn.resolve();
  },
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId The batchId to search for
   * @param action A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  t.prototype.Wl = function (t, e) {
    return this.Ul(t);
  },
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @return The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been remvoed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  t.prototype.Ul = function (t) {
    return 0 === this.Gn.length ? 0 : t - this.Gn[0].batchId; // Examine the front of the queue to figure out the difference between the
    // batchId and indexes in the array. Note that since the queue is ordered
    // by batchId, if the first batch has a larger batchId then the requested
    // batchId doesn't exist in the queue.
  },
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficent.
   */
  t.prototype.Bl = function (t) {
    var e = this.Ul(t);
    return e < 0 || e >= this.Gn.length ? null : this.Gn[e];
  }, t;
}(),
    go =
/** @class */
function () {
  /**
   * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
   * return 0 to avoid unnecessarily doing the work of calculating the size.
   */
  function t(t, e) {
    this.zn = t, this.jl = e,
    /** Underlying cache of documents and their read times. */
    this.docs = new X(V.P),
    /** Size of all cached documents. */
    this.size = 0
    /**
    * Adds the supplied entry to the cache and updates the cache size as appropriate.
    *
    * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
    * returned by `newChangeBuffer()`.
    */
    ;
  }

  return t.prototype.xn = function (t, e, n) {
    var r = e.key,
        i = this.docs.get(r),
        o = i ? i.size : 0,
        s = this.jl(e);
    return this.docs = this.docs.st(r, {
      Or: e,
      size: s,
      readTime: n
    }), this.size += s - o, this.zn.Ar(t, r.path.p());
  },
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  t.prototype.Mn = function (t) {
    var e = this.docs.get(t);
    e && (this.docs = this.docs.remove(t), this.size -= e.size);
  }, t.prototype.Ln = function (t, e) {
    var n = this.docs.get(e);
    return Cn.resolve(n ? n.Or : null);
  }, t.prototype.getEntries = function (t, e) {
    var n = this,
        r = it();
    return e.forEach(function (t) {
      var e = n.docs.get(t);
      r = r.st(t, e ? e.Or : null);
    }), Cn.resolve(r);
  }, t.prototype.ns = function (t, e, n) {
    for (var r = st(), i = new V(e.path.child("")), o = this.docs.ut(i) // Documents are ordered by key, so we can use a prefix scan to narrow down
    // the documents we need to match the query against.
    ; o.Tt();) {
      var s = o.wt(),
          u = s.key,
          a = s.value,
          c = a.Or,
          h = a.readTime;
      if (!e.path.D(u.path)) break;
      h.o(n) <= 0 || c instanceof tn && gn(e, c) && (r = r.st(c.key, c));
    }

    return Cn.resolve(r);
  }, t.prototype.Kl = function (t, e) {
    return Cn.forEach(this.docs, function (t) {
      return e(t);
    });
  }, t.prototype.jr = function (e) {
    // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
    // a separate changelog and does not need special handling for removals.
    return new t.Kr(this);
  }, t.prototype.zr = function (t) {
    return Cn.resolve(this.size);
  }, t;
}();
/**
 * EventManager is responsible for mapping queries to query event emitters.
 * It handles "fan-out". -- Identical queries will re-use the same watch on the
 * backend.
 */

/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */


go.Kr =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).Hr = e, n;
  }

  return e.__extends(n, t), n.prototype.Un = function (t) {
    var e = this,
        n = [];
    return this.Fn.forEach(function (r, i) {
      i ? n.push(e.Hr.xn(t, i, e.readTime)) : e.Hr.Mn(r);
    }), Cn.Cn(n);
  }, n.prototype.qn = function (t, e) {
    return this.Hr.Ln(t, e);
  }, n.prototype.Bn = function (t, e) {
    return this.Hr.getEntries(t, e);
  }, n;
}(qn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var mo =
/** @class */
function () {
  function t(t) {
    this.persistence = t,
    /**
         * Maps a target to the data about that target
         */
    this.Gl = new A(function (t) {
      return G(t);
    }, j),
    /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = k.min(),
    /** The highest numbered target ID encountered. */
    this.highestTargetId = 0,
    /** The highest sequence number encountered. */
    this.zl = 0,
    /**
         * A ordered bidirectional mapping between documents and the remote target
         * IDs.
         */
    this.Hl = new Si(), this.targetCount = 0, this.Yl = ii.to();
  }

  return t.prototype.be = function (t, e) {
    return this.Gl.forEach(function (t, n) {
      return e(n);
    }), Cn.resolve();
  }, t.prototype.ro = function (t) {
    return Cn.resolve(this.lastRemoteSnapshotVersion);
  }, t.prototype.oo = function (t) {
    return Cn.resolve(this.zl);
  }, t.prototype.no = function (t) {
    return this.highestTargetId = this.Yl.next(), Cn.resolve(this.highestTargetId);
  }, t.prototype.ho = function (t, e, n) {
    return n && (this.lastRemoteSnapshotVersion = n), e > this.zl && (this.zl = e), Cn.resolve();
  }, t.prototype.co = function (t) {
    this.Gl.set(t.target, t);
    var e = t.targetId;
    e > this.highestTargetId && (this.Yl = new ii(e), this.highestTargetId = e), t.sequenceNumber > this.zl && (this.zl = t.sequenceNumber);
  }, t.prototype.ao = function (t, e) {
    return this.co(e), this.targetCount += 1, Cn.resolve();
  }, t.prototype.lo = function (t, e) {
    return this.co(e), Cn.resolve();
  }, t.prototype._o = function (t, e) {
    return this.Gl.delete(e.target), this.Hl.Ch(e.targetId), this.targetCount -= 1, Cn.resolve();
  }, t.prototype.hr = function (t, e, n) {
    var r = this,
        i = 0,
        o = [];
    return this.Gl.forEach(function (s, u) {
      u.sequenceNumber <= e && null === n.get(u.targetId) && (r.Gl.delete(s), o.push(r.fo(t, u.targetId)), i++);
    }), Cn.Cn(o).next(function () {
      return i;
    });
  }, t.prototype.do = function (t) {
    return Cn.resolve(this.targetCount);
  }, t.prototype.wo = function (t, e) {
    var n = this.Gl.get(e) || null;
    return Cn.resolve(n);
  }, t.prototype.To = function (t, e, n) {
    return this.Hl.vh(e, n), Cn.resolve();
  }, t.prototype.mo = function (t, e, n) {
    this.Hl.Dh(e, n);
    var r = this.persistence.dr,
        i = [];
    return r && e.forEach(function (e) {
      i.push(r.Dr(t, e));
    }), Cn.Cn(i);
  }, t.prototype.fo = function (t, e) {
    return this.Hl.Ch(e), Cn.resolve();
  }, t.prototype.Ao = function (t, e) {
    var n = this.Hl.Fh(e);
    return Cn.resolve(n);
  }, t.prototype.Nr = function (t, e) {
    return Cn.resolve(this.Hl.Nr(e));
  }, t;
}(),
    wo =
/** @class */
function () {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  function t(t) {
    var e = this;
    this.Jl = {}, this.yo = new Bn(0), this.po = !1, this.po = !0, this.dr = t(this), this.ko = new mo(this), this.zn = new Cr(), this.Kn = new go(this.zn, function (t) {
      return e.dr.Xl(t);
    });
  }

  return t.prototype.start = function () {
    return Promise.resolve();
  }, t.prototype.th = function () {
    // No durable state to ensure is closed on shutdown.
    return this.po = !1, Promise.resolve();
  }, Object.defineProperty(t.prototype, "tr", {
    get: function get() {
      return this.po;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.Bo = function () {// No op.
  }, t.prototype.Uo = function () {// No op.
  }, t.prototype.uh = function () {
    return this.zn;
  }, t.prototype.oh = function (t) {
    var e = this.Jl[t.$h()];
    return e || (e = new vo(this.zn, this.dr), this.Jl[t.$h()] = e), e;
  }, t.prototype.hh = function () {
    return this.ko;
  }, t.prototype.ah = function () {
    return this.Kn;
  }, t.prototype.runTransaction = function (t, e, n) {
    var r = this;
    c("MemoryPersistence", "Starting transaction:", t);
    var i = new _o(this.yo.next());
    return this.dr.Zl(), n(i).next(function (t) {
      return r.dr.t_(i).next(function () {
        return t;
      });
    }).Sn().then(function (t) {
      return i.jn(), t;
    });
  }, t.prototype.e_ = function (t, e) {
    return Cn.Nn(Object.values(this.Jl).map(function (n) {
      return function () {
        return n.Nr(t, e);
      };
    }));
  }, t;
}(),
    _o =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).Ro = e, n;
  }

  return e.__extends(n, t), n;
}(Fn),
    bo =
/** @class */
function () {
  function t(t) {
    this.persistence = t,
    /** Tracks all documents that are active in Query views. */
    this.n_ = new Si(),
    /** The list of documents that are potentially GCed after each transaction. */
    this.s_ = null;
  }

  return t.i_ = function (e) {
    return new t(e);
  }, Object.defineProperty(t.prototype, "r_", {
    get: function get() {
      if (this.s_) return this.s_;
      throw p();
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.Eo = function (t, e, n) {
    return this.n_.Eo(n, e), this.r_.delete(n.toString()), Cn.resolve();
  }, t.prototype.Io = function (t, e, n) {
    return this.n_.Io(n, e), this.r_.add(n.toString()), Cn.resolve();
  }, t.prototype.Dr = function (t, e) {
    return this.r_.add(e.toString()), Cn.resolve();
  }, t.prototype.removeTarget = function (t, e) {
    var n = this;
    this.n_.Ch(e.targetId).forEach(function (t) {
      return n.r_.add(t.toString());
    });
    var r = this.persistence.hh();
    return r.Ao(t, e.targetId).next(function (t) {
      t.forEach(function (t) {
        return n.r_.add(t.toString());
      });
    }).next(function () {
      return r._o(t, e);
    });
  }, t.prototype.Zl = function () {
    this.s_ = new Set();
  }, t.prototype.t_ = function (t) {
    var e = this,
        n = this.persistence.ah().jr(); // Remove newly orphaned documents.

    return Cn.forEach(this.r_, function (r) {
      var i = V.B(r);
      return e.o_(t, i).next(function (t) {
        t || n.Mn(i);
      });
    }).next(function () {
      return e.s_ = null, n.apply(t);
    });
  }, t.prototype.wh = function (t, e) {
    var n = this;
    return this.o_(t, e).next(function (t) {
      t ? n.r_.delete(e.toString()) : n.r_.add(e.toString());
    });
  }, t.prototype.Xl = function (t) {
    // For eager GC, we don't care about the document size, there are no size thresholds.
    return 0;
  }, t.prototype.o_ = function (t, e) {
    var n = this;
    return Cn.Nn([function () {
      return Cn.resolve(n.n_.Nr(e));
    }, function () {
      return n.persistence.hh().Nr(t, e);
    }, function () {
      return n.persistence.e_(t, e);
    }]);
  }, t;
}(),
    Io =
/** @class */
function () {
  function t(t) {
    this.h_ = t.h_, this.a_ = t.a_;
  }

  return t.prototype.wa = function (t) {
    this.c_ = t;
  }, t.prototype.ua = function (t) {
    this.u_ = t;
  }, t.prototype.onMessage = function (t) {
    this.l_ = t;
  }, t.prototype.close = function () {
    this.a_();
  }, t.prototype.send = function (t) {
    this.h_(t);
  }, t.prototype.__ = function () {
    this.c_();
  }, t.prototype.f_ = function (t) {
    this.u_(t);
  }, t.prototype.d_ = function (t) {
    this.l_(t);
  }, t;
}(),
    Eo = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery"
},
    To =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n;
  }
  /**
   * Base class for all Rest-based connections to the backend (WebChannel and
   * HTTP).
   */


  return e.__extends(n, t), n.prototype.A_ = function (t, e, n, r) {
    return new Promise(function (i, s) {
      var u = new o.XhrIo();
      u.listenOnce(o.EventType.COMPLETE, function () {
        try {
          switch (u.getLastErrorCode()) {
            case o.ErrorCode.NO_ERROR:
              var e = u.getResponseJson();
              c("Connection", "XHR received:", JSON.stringify(e)), i(e);
              break;

            case o.ErrorCode.TIMEOUT:
              c("Connection", 'RPC "' + t + '" timed out'), s(new D(S.DEADLINE_EXCEEDED, "Request time out"));
              break;

            case o.ErrorCode.HTTP_ERROR:
              var n = u.getStatus();

              if (c("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), n > 0) {
                var r = u.getResponseJson().error;

                if (r && r.status && r.message) {
                  var a = function (t) {
                    var e = t.toLowerCase().replace("_", "-");
                    return Object.values(S).indexOf(e) >= 0 ? e : S.UNKNOWN;
                  }(r.status);

                  s(new D(a, r.message));
                } else s(new D(S.UNKNOWN, "Server responded with status " + u.getStatus()));
              } else // If we received an HTTP_ERROR but there's no status code,
                // it's most probably a connection issue
                s(new D(S.UNAVAILABLE, "Connection failed."));

              break;

            default:
              p();
          }
        } finally {
          c("Connection", 'RPC "' + t + '" completed.');
        }
      });
      var a = JSON.stringify(r);
      u.send(e, "POST", a, n, 15);
    });
  }, n.prototype.Ta = function (t, e) {
    var n = [this.T_, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
        r = o.createWebChannelTransport(),
        s = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: "projects/" + this.s.projectId + "/databases/" + this.s.database
      },
      sendRawJson: !0,
      supportsCrossDomainXhr: !0,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling
    };
    this.I_(s.initMessageHeaders, e), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the httpHeadersOverwriteParam option to specify that
    // the headers should instead be encoded into a special "$httpHeaders" query
    // parameter, which is recognized by the webchannel backend. This is
    // formally defined here:
    // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
    // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
    // doesn't have an Origin header. So we have to exclude a few browser environments that are
    // known to (sometimes) not include an Origin. See
    // https://github.com/firebase/firebase-js-sdk/issues/1491.
    i.isMobileCordova() || i.isReactNative() || i.isElectron() || i.isIE() || i.isUWP() || i.isBrowserExtension() || (s.httpHeadersOverwriteParam = "$httpHeaders");
    var u = n.join("");
    c("Connection", "Creating WebChannel: " + u, s);

    var a = r.createWebChannel(u, s),
        h = !1,
        l = !1,
        p = new Io({
      h_: function h_(t) {
        l ? c("Connection", "Not sending because WebChannel is closed:", t) : (h || (c("Connection", "Opening WebChannel transport."), a.open(), h = !0), c("Connection", "WebChannel sending:", t), a.send(t));
      },
      a_: function a_() {
        return a.close();
      }
    }),
        y = function y(t, e) {
      // TODO(dimond): closure typing seems broken because WebChannel does
      // not implement goog.events.Listenable
      a.listen(t, function (t) {
        try {
          e(t);
        } catch (t) {
          setTimeout(function () {
            throw t;
          }, 0);
        }
      });
    }; // WebChannel supports sending the first message with the handshake - saving
    // a network round trip. However, it will have to call send in the same
    // JS event loop as open. In order to enforce this, we delay actually
    // opening the WebChannel until send is called. Whether we have called
    // open is tracked with this variable.
    // Closure events are guarded and exceptions are swallowed, so catch any
    // exception and rethrow using a setTimeout so they become visible again.
    // Note that eventually this function could go away if we are confident
    // enough the code is exception free.


    return y(o.WebChannel.EventType.OPEN, function () {
      l || c("Connection", "WebChannel transport opened.");
    }), y(o.WebChannel.EventType.CLOSE, function () {
      l || (l = !0, c("Connection", "WebChannel transport closed"), p.f_());
    }), y(o.WebChannel.EventType.ERROR, function (t) {
      l || (l = !0, f("Connection", "WebChannel transport errored:", t), p.f_(new D(S.UNAVAILABLE, "The operation could not be completed")));
    }), y(o.WebChannel.EventType.MESSAGE, function (t) {
      var e;

      if (!l) {
        var n = t.data[0];
        d(!!n); // TODO(b/35143891): There is a bug in One Platform that caused errors
        // (and only errors) to be wrapped in an extra array. To be forward
        // compatible with the bug we need to check either condition. The latter
        // can be removed once the fix has been rolled out.
        // Use any because msgData.error is not typed.

        var r = n,
            i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);

        if (i) {
          c("Connection", "WebChannel received error:", i); // error.status will be a string like 'OK' or 'NOT_FOUND'.

          var o = i.status,
              s = function (t) {
            // lookup by string
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var e = Q[t];
            if (void 0 !== e) return Z(e);
          }(o),
              u = i.message;

          void 0 === s && (s = S.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), // Mark closed so no further events are propagated
          l = !0, p.f_(new D(s, u)), a.close();
        } else c("Connection", "WebChannel received:", n), p.d_(n);
      }
    }), setTimeout(function () {
      // Technically we could/should wait for the WebChannel opened event,
      // but because we want to send the first message with the WebChannel
      // handshake we pretend the channel opened here (asynchronously), and
      // then delay the actual open until the first message is sent.
      p.__();
    }, 0), p;
  }, n;
}(
/** @class */
function () {
  function t(t) {
    this.w_ = t, this.s = t.s;
    var e = t.ssl ? "https" : "http";
    this.T_ = e + "://" + t.host, this.E_ = "projects/" + this.s.projectId + "/databases/" + this.s.database + "/documents";
  }

  return t.prototype.va = function (t, e, n, r) {
    var i = this.m_(t, e);
    c("RestConnection", "Sending: ", i, n);
    var o = {};
    return this.I_(o, r), this.A_(t, i, o, n).then(function (t) {
      return c("RestConnection", "Received: ", t), t;
    }, function (e) {
      throw f("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), e;
    });
  }, t.prototype.Sa = function (t, e, n, r) {
    // The REST API automatically aggregates all of the streamed results, so we
    // can just use the normal invoke() method.
    return this.va(t, e, n, r);
  },
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  t.prototype.I_ = function (t, e) {
    if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.19.0", // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid	triggering preflight requests.
    t["Content-Type"] = "text/plain", e) for (var n in e.Mh) {
      e.Mh.hasOwnProperty(n) && (t[n] = e.Mh[n]);
    }
  }, t.prototype.m_ = function (t, e) {
    var n = Eo[t];
    return this.T_ + "/v1/" + e + ":" + n;
  }, t;
}()),
    No =
/** @class */
function () {
  function t() {
    var t = this;
    this.R_ = function () {
      return t.P_();
    }, this.g_ = function () {
      return t.V_();
    }, this.y_ = [], this.p_();
  }

  return t.prototype.Ka = function (t) {
    this.y_.push(t);
  }, t.prototype.th = function () {
    window.removeEventListener("online", this.R_), window.removeEventListener("offline", this.g_);
  }, t.prototype.p_ = function () {
    window.addEventListener("online", this.R_), window.addEventListener("offline", this.g_);
  }, t.prototype.P_ = function () {
    c("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");

    for (var t = 0, e = this.y_; t < e.length; t++) {
      (0, e[t])(0
      /* AVAILABLE */
      );
    }
  }, t.prototype.V_ = function () {
    c("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");

    for (var t = 0, e = this.y_; t < e.length; t++) {
      (0, e[t])(1
      /* UNAVAILABLE */
      );
    }
  }, // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.

  /** Checks that all used attributes of window are available. */
  t.ks = function () {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }, t;
}(),
    Ao =
/** @class */
function () {
  function t() {}

  return t.prototype.Ka = function (t) {// No-op.
  }, t.prototype.th = function () {// No-op.
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Initializes the WebChannelConnection for the browser. */

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function So(t) {
  return new zt(t,
  /* useProto3Json= */
  !0);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var Do = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
    xo =
/** @class */
function () {
  function t() {}

  return t.prototype.initialize = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.Uu = this.b_(t), this.persistence = this.v_(t), [4
            /*yield*/
            , this.persistence.start()];

          case 1:
            return e.sent(), this.S_ = this.D_(t), this.La = this.C_(t), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.D_ = function (t) {
    return null;
  }, t.prototype.C_ = function (t) {
    /** Manages our in-memory or durable persistence. */
    return e = this.persistence, n = new yo(), r = t.N_, new gi(e, n, r);
    var e, n, r;
  }, t.prototype.v_ = function (t) {
    if (t.k_.F_) throw new D(S.FAILED_PRECONDITION, Do);
    return new wo(bo.i_);
  }, t.prototype.b_ = function (t) {
    return new Zi();
  }, t.prototype.terminate = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (t) {
        switch (t.label) {
          case 0:
            return this.S_ && this.S_.stop(), [4
            /*yield*/
            , this.Uu.th()];

          case 1:
            return t.sent(), [4
            /*yield*/
            , this.persistence.th()];

          case 2:
            return t.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.clearPersistence = function (t, e) {
    throw new D(S.FAILED_PRECONDITION, Do);
  }, t;
}(),
    ko =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).x_ = e, n;
  }

  return e.__extends(n, t), n.prototype.initialize = function (n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r,
          i = this;
      return e.__generator(this, function (o) {
        switch (o.label) {
          case 0:
            return [4
            /*yield*/
            , t.prototype.initialize.call(this, n)];

          case 1:
            return o.sent(), [4
            /*yield*/
            , this.x_.initialize(this, n)];

          case 2:
            return o.sent(), r = this.x_.fc, this.Uu instanceof Yi ? (this.Uu.fc = {
              mu: io.bind(null, r),
              Iu: co.bind(null, r),
              Au: ho.bind(null, r),
              rh: ao.bind(null, r)
            }, [4
            /*yield*/
            , this.Uu.start()]) : [3
            /*break*/
            , 4];

          case 3:
            o.sent(), o.label = 4;

          case 4:
            // NOTE: This will immediately call the listener, so we make sure to
            // set it after localStore / remoteStore are started.
            return [4
            /*yield*/
            , this.persistence.qo(function (t) {
              return e.__awaiter(i, void 0, void 0, function () {
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , oo(this.x_.fc, t)];

                    case 1:
                      return e.sent(), this.S_ && (t && !this.S_.tr ? this.S_.start(this.La) : t || this.S_.stop()), [2
                      /*return*/
                      ];
                  }
                });
              });
            })];

          case 5:
            // NOTE: This will immediately call the listener, so we make sure to
            // set it after localStore / remoteStore are started.
            return o.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, n.prototype.b_ = function (t) {
    if (t.k_.F_ && t.k_.synchronizeTabs) {
      var e = er();
      if (!Yi.ks(e)) throw new D(S.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
      var n = vi(t.w_.s, t.w_.persistenceKey);
      return new Yi(e, t.ei, n, t.clientId, t.N_);
    }

    return new Zi();
  }, n;
}(
/** @class */
function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e.__extends(n, t), n.prototype.initialize = function (n) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (r) {
        switch (r.label) {
          case 0:
            return [4
            /*yield*/
            , t.prototype.initialize.call(this, n)];

          case 1:
            return r.sent(), [4
            /*yield*/
            , function (t) {
              return e.__awaiter(this, void 0, void 0, function () {
                var n, r;
                return e.__generator(this, function (e) {
                  return n = y(t), r = y(n.Ah), [2
                  /*return*/
                  , n.persistence.runTransaction("Synchronize last document change read time", "readonly", function (t) {
                    return r.Wr(t);
                  }).then(function (t) {
                    n.Ih = t;
                  })];
                });
              });
            }(this.La)];

          case 2:
            return r.sent(), [2
            /*return*/
            ];
        }
      });
    });
  }, n.prototype.D_ = function (t) {
    var e = this.persistence.dr.Yi;
    return new hr(e, t.ei);
  }, n.prototype.v_ = function (t) {
    var e = vi(t.w_.s, t.w_.persistenceKey),
        n = So(t.w_.s);
    return new fi(t.k_.synchronizeTabs, e, t.clientId, cr.Ui(t.k_.cacheSizeBytes), t.ei, er(), nr(), n, this.Uu, t.k_.Vo);
  }, n.prototype.b_ = function (t) {
    return new Zi();
  }, n.prototype.clearPersistence = function (t, n) {
    return function (t) {
      return e.__awaiter(this, void 0, void 0, function () {
        var n;
        return e.__generator(this, function (e) {
          switch (e.label) {
            case 0:
              return Wn.ks() ? (n = t + "main", [4
              /*yield*/
              , Wn.delete(n)]) : [2
              /*return*/
              , Promise.resolve()];

            case 1:
              return e.sent(), [2
              /*return*/
              ];
          }
        });
      });
    }(vi(t, n));
  }, n;
}(xo)),
    Lo =
/** @class */
function () {
  function t() {}

  return t.prototype.initialize = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      var r = this;
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.La ? [3
            /*break*/
            , 3] : (this.La = t.La, this.Uu = t.Uu, this.qa = this.O_(n), this.Bu = this.M_(n), this.fc = this.L_(n), this.q_ = this.B_(n), this.Uu.Da = function (t) {
              return r.fc.xu(t, 1
              /* SharedClientState */
              );
            }, this.Bu.fc = this.fc, [4
            /*yield*/
            , this.Bu.start()]);

          case 1:
            return e.sent(), [4
            /*yield*/
            , this.Bu.Sc(this.fc.el)];

          case 2:
            e.sent(), e.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.B_ = function (t) {
    return new lo(this.fc);
  }, t.prototype.O_ = function (t) {
    var e,
        n = So(t.w_.s),
        r = (e = t.w_, new To(e));
    /** Return the Platform-specific connectivity monitor. */

    return function (t, e, n) {
      return new qi(t, e, n);
    }(t.credentials, r, n);
  }, t.prototype.M_ = function (t) {
    var e = this;
    return new Fi(this.La, this.qa, t.ei, function (t) {
      return e.fc.xu(t, 0
      /* RemoteStore */
      );
    }, No.ks() ? new No() : new Ao());
  }, t.prototype.L_ = function (t) {
    return function (t, e, n, // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o, s) {
      var u = new no(t, e, n, r, i, o);
      return s && (u.tl = !0), u;
    }(this.La, this.Bu, this.qa, this.Uu, t.N_, t.Qu, !t.k_.F_ || !t.k_.synchronizeTabs);
  }, t.prototype.terminate = function () {
    return this.Bu.th();
  }, t;
}();
/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


function Po(t) {
  /**
  * Returns true if obj is an object and contains at least one of the specified
  * methods.
  */
  return function (t, e) {
    if ("object" != _typeof(t) || null === t) return !1;

    for (var n = t, r = 0, i = ["next", "error", "complete"]; r < i.length; r++) {
      var o = i[r];
      if (o in n && "function" == typeof n[o]) return !0;
    }

    return !1;
  }(t);
}

var Ro =
/** @class */
function () {
  function t(t) {
    this.observer = t,
    /**
         * When set to true, will not raise future events. Necessary to deal with
         * async detachment of listener.
         */
    this.muted = !1;
  }

  return t.prototype.next = function (t) {
    this.observer.next && this.U_(this.observer.next, t);
  }, t.prototype.error = function (t) {
    this.observer.error ? this.U_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
  }, t.prototype.Q_ = function () {
    this.muted = !0;
  }, t.prototype.U_ = function (t, e) {
    var n = this;
    this.muted || setTimeout(function () {
      n.muted || t(e);
    }, 0);
  }, t;
}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */


function Oo(t, e) {
  if (0 !== e.length) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + $o(e.length, "argument") + ".");
}
/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */


function Vo(t, e, n) {
  if (e.length !== n) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires " + $o(n, "argument") + ", but was called with " + $o(e.length, "argument") + ".");
}
/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */


function Uo(t, e, n) {
  if (e.length < n) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires at least " + $o(n, "argument") + ", but was called with " + $o(e.length, "argument") + ".");
}
/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */


function Co(t, e, n, r) {
  if (e.length < n || e.length > r) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + $o(e.length, "argument") + ".");
}
/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */

/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */


function qo(t, e, n, r) {
  zo(t, e, Xo(n) + " argument", r);
}
/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */


function Mo(t, e, n, r) {
  void 0 !== r && qo(t, e, n, r);
}
/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */


function Fo(t, e, n, r) {
  zo(t, e, n + " option", r);
}
/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */


function Go(t, e, n, r) {
  void 0 !== r && Fo(t, e, n, r);
}
/**
 * Validates that the provided named option equals one of the expected values.
 */

/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */


function jo(t, e, n, r, i) {
  void 0 !== r && function (t, e, n, r, i) {
    for (var o = [], s = 0, u = i; s < u.length; s++) {
      var a = u[s];
      if (a === r) return;
      o.push(Wo(a));
    }

    var c = Wo(r);
    throw new D(S.INVALID_ARGUMENT, "Invalid value " + c + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
  }(t, 0, n, r, i);
}
/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */


function Bo(t, e, n, r) {
  if (!e.some(function (t) {
    return t === r;
  })) throw new D(S.INVALID_ARGUMENT, "Invalid value " + Wo(r) + " provided to function " + t + "() for its " + Xo(n) + " argument. Acceptable values: " + e.join(", "));
  return r;
}
/** Helper to validate the type of a provided input. */


function zo(t, e, n, r) {
  if (!("object" === e ? Qo(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : _typeof(r) === e)) {
    var i = Wo(r);
    throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
  }
}
/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */


function Qo(t) {
  return "object" == _typeof(t) && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}
/** Returns a string describing the type / value of the provided input. */


function Wo(t) {
  if (void 0 === t) return "undefined";
  if (null === t) return "null";
  if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
  if ("number" == typeof t || "boolean" == typeof t) return "" + t;

  if ("object" == _typeof(t)) {
    if (t instanceof Array) return "an array";

    var e =
    /** Hacky method to try to get the constructor name for an object. */
    function (t) {
      if (t.constructor) {
        var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
        if (e && e.length > 1) return e[1];
      }

      return null;
    }(t);

    return e ? "a custom " + e + " object" : "an object";
  }

  return "function" == typeof t ? "a function" : p();
}

function Ho(t, e, n) {
  if (void 0 === n) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + Xo(e) + " argument, but it was undefined.");
}
/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */


function Ko(t, e, n) {
  T(e, function (e, r) {
    if (n.indexOf(e) < 0) throw new D(S.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
  });
}
/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */


function Yo(t, e, n, r) {
  var i = Wo(r);
  return new D(S.INVALID_ARGUMENT, "Function " + t + "() requires its " + Xo(n) + " argument to be a " + e + ", but it was: " + i);
}

function Zo(t, e, n) {
  if (n <= 0) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires its " + Xo(e) + " argument to be a positive number, but it was: " + n + ".");
}
/** Converts a number to its english word representation */


function Xo(t) {
  switch (t) {
    case 1:
      return "first";

    case 2:
      return "second";

    case 3:
      return "third";

    default:
      return t + "th";
  }
}
/**
 * Formats the given word as plural conditionally given the preceding number.
 */


function $o(t, e) {
  return t + " " + e + (1 === t ? "" : "s");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/** Helper function to assert Uint8Array is available at runtime. */


function Jo() {
  if ("undefined" == typeof Uint8Array) throw new D(S.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}
/** Helper function to assert Base64 functions are available at runtime. */


function ts() {
  if ("undefined" == typeof atob) throw new D(S.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}
/**
 * Immutable class holding a blob (binary data).
 * This class is directly exposed in the public API.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */


var es =
/** @class */
function () {
  function t(t) {
    ts(), this.W_ = t;
  }

  return t.fromBase64String = function (e) {
    Vo("Blob.fromBase64String", arguments, 1), qo("Blob.fromBase64String", "string", 1, e), ts();

    try {
      return new t(z.fromBase64String(e));
    } catch (e) {
      throw new D(S.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + e);
    }
  }, t.fromUint8Array = function (e) {
    if (Vo("Blob.fromUint8Array", arguments, 1), Jo(), !(e instanceof Uint8Array)) throw Yo("Blob.fromUint8Array", "Uint8Array", 1, e);
    return new t(z.fromUint8Array(e));
  }, t.prototype.toBase64 = function () {
    return Vo("Blob.toBase64", arguments, 0), ts(), this.W_.toBase64();
  }, t.prototype.toUint8Array = function () {
    return Vo("Blob.toUint8Array", arguments, 0), Jo(), this.W_.toUint8Array();
  }, t.prototype.toString = function () {
    return "Blob(base64: " + this.toBase64() + ")";
  }, t.prototype.isEqual = function (t) {
    return this.W_.isEqual(t.W_);
  }, t;
}(),
    ns = function ns(t) {
  !function (t, e, n, r) {
    if (!(e instanceof Array) || e.length < 1) throw new D(S.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + $o(1, "element") + ".");
  }(0, t);

  for (var e = 0; e < t.length; ++e) {
    if (qo("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new D(S.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
  }

  this.j_ = new O(t);
},
    rs =
/** @class */
function (t) {
  /**
   * Creates a FieldPath from the provided field names. If more than one field
   * name is provided, the path will point to a nested field in a document.
   *
   * @param fieldNames A list of field names.
   */
  function n() {
    for (var e = [], n = 0; n < arguments.length; n++) {
      e[n] = arguments[n];
    }

    return t.call(this, e) || this;
  }

  return e.__extends(n, t), n.documentId = function () {
    /**
     * Internal Note: The backend doesn't technically support querying by
     * document ID. Instead it queries by the entire document name (full path
     * included), but in the cases we currently support documentId(), the net
     * effect is the same.
     */
    return new n(O.L().F());
  }, n.prototype.isEqual = function (t) {
    if (!(t instanceof n)) throw Yo("isEqual", "FieldPath", 1, t);
    return this.j_.isEqual(t.j_);
  }, n;
}(ns),
    is = new RegExp("[~\\*/\\[\\]]"),
    os = function os() {
  /** A pointer to the implementing class. */
  this.K_ = this;
},
    ss =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).G_ = e, n;
  }

  return e.__extends(n, t), n.prototype.z_ = function (t) {
    if (2
    /* MergeSet */
    !== t.H_) throw 1
    /* Update */
    === t.H_ ? t.Y_(this.G_ + "() can only appear at the top level of your update data") : t.Y_(this.G_ + "() cannot be used with set() unless you pass {merge:true}"); // No transform to add for a delete, but we need to add it to our
    // fieldMask so it gets deleted.

    return t.qe.push(t.path), null;
  }, n.prototype.isEqual = function (t) {
    return t instanceof n;
  }, n;
}(os);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.

/**
 * A field class base class that is shared by the lite, full and legacy SDK,
 * which supports shared code that deals with FieldPaths.
 */

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue The sentinel FieldValue for which to create a child
 *     context.
 * @param context The parent context.
 * @param arrayElement Whether or not the FieldValue has an array.
 */


function us(t, e, n) {
  return new _s({
    H_: 3
    /* Argument */
    ,
    J_: e.settings.J_,
    methodName: t.G_,
    X_: n
  }, e.s, e.serializer, e.ignoreUndefinedProperties);
}

var as =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).G_ = e, n;
  }

  return e.__extends(n, t), n.prototype.z_ = function (t) {
    return new Pe(t.path, new Ee());
  }, n.prototype.isEqual = function (t) {
    return t instanceof n;
  }, n;
}(os),
    cs =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).G_ = e, r.Z_ = n, r;
  }

  return e.__extends(n, t), n.prototype.z_ = function (t) {
    var e = us(this, t,
    /*array=*/
    !0),
        n = this.Z_.map(function (t) {
      return As(t, e);
    }),
        r = new Te(n);
    return new Pe(t.path, r);
  }, n.prototype.isEqual = function (t) {
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, n;
}(os),
    hs =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).G_ = e, r.Z_ = n, r;
  }

  return e.__extends(n, t), n.prototype.z_ = function (t) {
    var e = us(this, t,
    /*array=*/
    !0),
        n = this.Z_.map(function (t) {
      return As(t, e);
    }),
        r = new Ae(n);
    return new Pe(t.path, r);
  }, n.prototype.isEqual = function (t) {
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, n;
}(os),
    fs =
/** @class */
function (t) {
  function n(e, n) {
    var r = this;
    return (r = t.call(this) || this).G_ = e, r.tf = n, r;
  }

  return e.__extends(n, t), n.prototype.z_ = function (t) {
    var e = new De(t.serializer, Ht(t.serializer, this.tf));
    return new Pe(t.path, e);
  }, n.prototype.isEqual = function (t) {
    // TODO(mrschmidt): Implement isEquals
    return this === t;
  }, n;
}(os),
    ls =
/** @class */
function (t) {
  function n() {
    return t.call(this) || this;
  }

  return e.__extends(n, t), n.delete = function () {
    return Oo("FieldValue.delete", arguments), new ps(new ss("FieldValue.delete"));
  }, n.serverTimestamp = function () {
    return Oo("FieldValue.serverTimestamp", arguments), new ps(new as("FieldValue.serverTimestamp"));
  }, n.arrayUnion = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    } // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.


    return Uo("FieldValue.arrayUnion", arguments, 1), new ps(new cs("FieldValue.arrayUnion", t));
  }, n.arrayRemove = function () {
    for (var t = [], e = 0; e < arguments.length; e++) {
      t[e] = arguments[e];
    } // NOTE: We don't actually parse the data until it's used in set() or
    // update() since we'd need the Firestore instance to do this.


    return Uo("FieldValue.arrayRemove", arguments, 1), new ps(new hs("FieldValue.arrayRemove", t));
  }, n.increment = function (t) {
    return qo("FieldValue.increment", "number", 1, t), Vo("FieldValue.increment", arguments, 1), new ps(new fs("FieldValue.increment", t));
  }, n;
}(os),
    ps =
/** @class */
function (t) {
  function n(e) {
    var n = this;
    return (n = t.call(this) || this).K_ = e, n.G_ = e.G_, n;
  }

  return e.__extends(n, t), n.prototype.z_ = function (t) {
    return this.K_.z_(t);
  }, n.prototype.isEqual = function (t) {
    return t instanceof n && this.K_.isEqual(t.K_);
  }, n;
}(ls),
    ds =
/** @class */
function () {
  function t(t, e) {
    if (Vo("GeoPoint", arguments, 2), qo("GeoPoint", "number", 1, t), qo("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new D(S.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
    if (!isFinite(e) || e < -180 || e > 180) throw new D(S.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
    this.ef = t, this.nf = e;
  }

  return Object.defineProperty(t.prototype, "latitude", {
    /**
     * Returns the latitude of this geo point, a number between -90 and 90.
     */
    get: function get() {
      return this.ef;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "longitude", {
    /**
     * Returns the longitude of this geo point, a number between -180 and 180.
     */
    get: function get() {
      return this.nf;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (t) {
    return this.ef === t.ef && this.nf === t.nf;
  }, t.prototype.toJSON = function () {
    return {
      latitude: this.ef,
      longitude: this.nf
    };
  },
  /**
   * Actually private to JS consumers of our API, so this function is prefixed
   * with an underscore.
   */
  t.prototype.T = function (t) {
    return m(this.ef, t.ef) || m(this.nf, t.nf);
  }, t;
}(),
    ys = /^__.*__$/,
    vs = function vs(t, e, n) {
  this.sf = t, this.if = e, this.rf = n;
},
    gs =
/** @class */
function () {
  function t(t, e, n) {
    this.data = t, this.qe = e, this.fieldTransforms = n;
  }

  return t.prototype.hf = function (t, e) {
    var n = [];
    return null !== this.qe ? n.push(new Be(t, this.data, this.qe, e)) : n.push(new je(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new Qe(t, this.fieldTransforms)), n;
  }, t;
}(),
    ms =
/** @class */
function () {
  function t(t, e, n) {
    this.data = t, this.qe = e, this.fieldTransforms = n;
  }

  return t.prototype.hf = function (t, e) {
    var n = [new Be(t, this.data, this.qe, e)];
    return this.fieldTransforms.length > 0 && n.push(new Qe(t, this.fieldTransforms)), n;
  }, t;
}();

function ws(t) {
  switch (t) {
    case 0
    /* Set */
    : // fall through

    case 2
    /* MergeSet */
    : // fall through

    case 1
    /* Update */
    :
      return !0;

    case 3
    /* Argument */
    :
    case 4
    /* ArrayArgument */
    :
      return !1;

    default:
      throw p();
  }
}
/** A "context" object passed around while parsing user data. */


var _s =
/** @class */
function () {
  /**
   * Initializes a ParseContext with the given source and path.
   *
   * @param settings The settings for the parser.
   * @param databaseId The database ID of the Firestore instance.
   * @param serializer The serializer to use to generate the Value proto.
   * @param ignoreUndefinedProperties Whether to ignore undefined properties
   * rather than throw.
   * @param fieldTransforms A mutable list of field transforms encountered while
   *     parsing the data.
   * @param fieldMask A mutable list of field paths encountered while parsing
   *     the data.
   *
   * TODO(b/34871131): We don't support array paths right now, so path can be
   * null to indicate the context represents any location within an array (in
   * which case certain features will not work and errors will be somewhat
   * compromised).
   */
  function t(t, e, n, r, i, o) {
    this.settings = t, this.s = e, this.serializer = n, this.ignoreUndefinedProperties = r, // Minor hack: If fieldTransforms is undefined, we assume this is an
    // external call and we need to validate the entire path.
    void 0 === i && this.af(), this.fieldTransforms = i || [], this.qe = o || [];
  }

  return Object.defineProperty(t.prototype, "path", {
    get: function get() {
      return this.settings.path;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "H_", {
    get: function get() {
      return this.settings.H_;
    },
    enumerable: !1,
    configurable: !0
  }),
  /** Returns a new context with the specified settings overwritten. */
  t.prototype.cf = function (e) {
    return new t(Object.assign(Object.assign({}, this.settings), e), this.s, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.qe);
  }, t.prototype.uf = function (t) {
    var e,
        n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
        r = this.cf({
      path: n,
      X_: !1
    });
    return r.lf(t), r;
  }, t.prototype._f = function (t) {
    var e,
        n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t),
        r = this.cf({
      path: n,
      X_: !1
    });
    return r.af(), r;
  }, t.prototype.ff = function (t) {
    // TODO(b/34871131): We don't support array paths right now; so make path
    // undefined.
    return this.cf({
      path: void 0,
      X_: !0
    });
  }, t.prototype.Y_ = function (t) {
    return Ps(t, this.settings.methodName, this.settings.df || !1, this.path, this.settings.J_);
  },
  /** Returns 'true' if 'fieldPath' was traversed when creating this context. */
  t.prototype.contains = function (t) {
    return void 0 !== this.qe.find(function (e) {
      return t.D(e);
    }) || void 0 !== this.fieldTransforms.find(function (e) {
      return t.D(e.field);
    });
  }, t.prototype.af = function () {
    // TODO(b/34871131): Remove null check once we have proper paths for fields
    // within arrays.
    if (this.path) for (var t = 0; t < this.path.length; t++) {
      this.lf(this.path.get(t));
    }
  }, t.prototype.lf = function (t) {
    if (0 === t.length) throw this.Y_("Document fields must not be empty");
    if (ws(this.H_) && ys.test(t)) throw this.Y_('Document fields cannot begin and end with "__"');
  }, t;
}(),
    bs =
/** @class */
function () {
  function t(t, e, n) {
    this.s = t, this.ignoreUndefinedProperties = e, this.serializer = n || So(t)
    /** Creates a new top-level parse context. */
    ;
  }

  return t.prototype.wf = function (t, e, n, r) {
    return void 0 === r && (r = !1), new _s({
      H_: t,
      methodName: e,
      J_: n,
      path: O.$(),
      X_: !1,
      df: r
    }, this.s, this.serializer, this.ignoreUndefinedProperties);
  }, t;
}();
/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */

/** Parse document data from a set() call. */


function Is(t, e, n, r, i, o) {
  void 0 === o && (o = {});
  var s = t.wf(o.merge || o.mergeFields ? 2
  /* MergeSet */
  : 0
  /* Set */
  , e, n, i);
  xs("Data must be an object, but it was:", s, r);
  var u,
      a,
      c = Ss(r, s);
  if (o.merge) u = new Le(s.qe), a = s.fieldTransforms;else if (o.mergeFields) {
    for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
      var d = l[f],
          y = void 0;
      if (d instanceof ns) y = d.j_;else {
        if ("string" != typeof d) throw p();
        y = Ls(e, d, n);
      }
      if (!s.contains(y)) throw new D(S.INVALID_ARGUMENT, "Field '" + y + "' is specified in your field mask but missing from your input data.");
      Rs(h, y) || h.push(y);
    }

    u = new Le(h), a = s.fieldTransforms.filter(function (t) {
      return u.Ke(t.field);
    });
  } else u = null, a = s.fieldTransforms;
  return new gs(new Ze(c), u, a);
}
/** Parse update data from an update() call. */


function Es(t, e, n, r) {
  var i = t.wf(1
  /* Update */
  , e, n);
  xs("Data must be an object, but it was:", i, r);
  var o = [],
      s = new Xe();
  T(r, function (t, r) {
    var u = Ls(e, t, n),
        a = i._f(u);

    if (r instanceof os && r.K_ instanceof ss) // Add it to the field mask, but don't add anything to updateData.
      o.push(u);else {
      var c = As(r, a);
      null != c && (o.push(u), s.set(u, c));
    }
  });
  var u = new Le(o);
  return new ms(s.ze(), u, i.fieldTransforms);
}
/** Parse update data from a list of field/value arguments. */


function Ts(t, e, n, r, i, o) {
  var s = t.wf(1
  /* Update */
  , e, n),
      u = [ks(e, r, n)],
      a = [i];
  if (o.length % 2 != 0) throw new D(S.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");

  for (var c = 0; c < o.length; c += 2) {
    u.push(ks(e, o[c])), a.push(o[c + 1]);
  } // We iterate in reverse order to pick the last value for a field if the
  // user specified the field multiple times.


  for (var h = [], f = new Xe(), l = u.length - 1; l >= 0; --l) {
    if (!Rs(h, u[l])) {
      var p = u[l],
          d = a[l],
          y = s._f(p);

      if (d instanceof os && d.K_ instanceof ss) // Add it to the field mask, but don't add anything to updateData.
        h.push(p);else {
        var v = As(d, y);
        null != v && (h.push(p), f.set(p, v));
      }
    }
  }

  var g = new Le(h);
  return new ms(f.ze(), g, s.fieldTransforms);
}
/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */


function Ns(t, e, n, r) {
  return void 0 === r && (r = !1), As(n, t.wf(r ? 4
  /* ArrayArgument */
  : 3
  /* Argument */
  , e));
}
/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */


function As(t, e) {
  if (Ds(t)) return xs("Unsupported field value:", e, t), Ss(t, e);
  if (t instanceof os) // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.

    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function (t, e) {
      // Sentinels are only supported with writes, and not within arrays.
      if (!ws(e.H_)) throw e.Y_(t.G_ + "() can only be used with update() and set()");
      if (!e.path) throw e.Y_(t.G_ + "() is not currently supported inside arrays");
      var n = t.z_(e);
      n && e.fieldTransforms.push(n);
    }(t, e), null;

  if ( // If context.path is null we are inside an array and we don't support
  // field mask paths more granular than the top-level array.
  e.path && e.qe.push(e.path), t instanceof Array) {
    // TODO(b/34871131): Include the path containing the array in the error
    // message.
    // In the case of IN queries, the parsed data is an array (representing
    // the set of values to be included for the IN query) that may directly
    // contain additional arrays (each representing an individual field
    // value), so we disable this validation.
    if (e.settings.X_ && 4
    /* ArrayArgument */
    !== e.H_) throw e.Y_("Nested arrays are not supported");
    return function (t, e) {
      for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
        var s = As(o[i], e.ff(r));
        null == s && ( // Just include nulls in the array for fields being replaced with a
        // sentinel.
        s = {
          nullValue: "NULL_VALUE"
        }), n.push(s), r++;
      }

      return {
        arrayValue: {
          values: n
        }
      };
    }(t, e);
  }

  return function (t, e) {
    if (null === t) return {
      nullValue: "NULL_VALUE"
    };
    if ("number" == typeof t) return Ht(e.serializer, t);
    if ("boolean" == typeof t) return {
      booleanValue: t
    };
    if ("string" == typeof t) return {
      stringValue: t
    };

    if (t instanceof Date) {
      var n = x.fromDate(t);
      return {
        timestampValue: Kt(e.serializer, n)
      };
    }

    if (t instanceof x) {
      // Firestore backend truncates precision down to microseconds. To ensure
      // offline mode works the same with regards to truncation, perform the
      // truncation immediately without waiting for the backend to do that.
      var r = new x(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
      return {
        timestampValue: Kt(e.serializer, r)
      };
    }

    if (t instanceof ds) return {
      geoPointValue: {
        latitude: t.latitude,
        longitude: t.longitude
      }
    };
    if (t instanceof es) return {
      bytesValue: Yt(e.serializer, t)
    };

    if (t instanceof vs) {
      var i = e.s,
          o = t.sf;
      if (!o.isEqual(i)) throw e.Y_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
      return {
        referenceValue: $t(t.sf || e.s, t.if.path)
      };
    }

    if (void 0 === t && e.ignoreUndefinedProperties) return null;
    throw e.Y_("Unsupported field value: " + Wo(t));
  }(t, e);
}

function Ss(t, e) {
  var n = {};
  return N(t) ? // If we encounter an empty object, we explicitly add it to the update
  // mask to ensure that the server creates a map entry.
  e.path && e.path.length > 0 && e.qe.push(e.path) : T(t, function (t, r) {
    var i = As(r, e.uf(t));
    null != i && (n[t] = i);
  }), {
    mapValue: {
      fields: n
    }
  };
}

function Ds(t) {
  return !("object" != _typeof(t) || null === t || t instanceof Array || t instanceof Date || t instanceof x || t instanceof ds || t instanceof es || t instanceof vs || t instanceof os);
}

function xs(t, e, n) {
  if (!Ds(n) || !Qo(n)) {
    var r = Wo(n);
    throw "an object" === r ? e.Y_(t + " a custom object") : e.Y_(t + " " + r);
  }
}
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */


function ks(t, e, n) {
  if (e instanceof ns) return e.j_;
  if ("string" == typeof e) return Ls(t, e);
  throw Ps("Field path arguments must be of type string or FieldPath.", t,
  /* hasConverter= */
  !1,
  /* path= */
  void 0, n);
}
/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 * @param targetDoc The document against which the field path will be evaluated.
 */


function Ls(t, n, r) {
  try {
    return function (t) {
      if (t.search(is) >= 0) throw new D(S.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");

      try {
        return new (rs.bind.apply(rs, e.__spreadArrays([void 0], t.split("."))))();
      } catch (e) {
        throw new D(S.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
      }
    }(n).j_;
  } catch (n) {
    throw Ps((i = n) instanceof Error ? i.message : i.toString(), t,
    /* hasConverter= */
    !1,
    /* path= */
    void 0, r);
  }
  /**
  * Extracts the message from a caught exception, which should be an Error object
  * though JS doesn't guarantee that.
  */


  var i;
  /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */
}

function Ps(t, e, n, r, i) {
  var o = r && !r._(),
      s = void 0 !== i,
      u = "Function " + e + "() called with invalid data";
  n && (u += " (via `toFirestore()`)");
  var a = "";
  return (o || s) && (a += " (found", o && (a += " in field " + r), s && (a += " in document " + i), a += ")"), new D(S.INVALID_ARGUMENT, (u += ". ") + t + a);
}

function Rs(t, e) {
  return t.some(function (t) {
    return t.isEqual(e);
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */


var Os =
/** @class */
function () {
  function t(t) {
    this.qa = t, // The version of each document that was read during this transaction.
    this.Tf = new Map(), this.mutations = [], this.Ef = !1,
    /**
         * A deferred usage error that occurred previously in this transaction that
         * will cause the transaction to fail once it actually commits.
         */
    this.mf = null,
    /**
         * Set of documents that have been written in the transaction.
         *
         * When there's more than one write to the same key in a transaction, any
         * writes after the first are handled differently.
         */
    this.If = new Set();
  }

  return t.prototype.Af = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      var n,
          r = this;
      return e.__generator(this, function (i) {
        switch (i.label) {
          case 0:
            if (this.Rf(), this.mutations.length > 0) throw new D(S.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
            return [4
            /*yield*/
            , function (t, n) {
              return e.__awaiter(this, void 0, void 0, function () {
                var r, i, o, s, u, a;
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return r = y(t), i = ie(r.serializer) + "/documents", o = {
                        documents: n.map(function (t) {
                          return te(r.serializer, t);
                        })
                      }, [4
                      /*yield*/
                      , r.Sa("BatchGetDocuments", i, o)];

                    case 1:
                      return s = e.sent(), u = new Map(), s.forEach(function (t) {
                        var e = function (t, e) {
                          return "found" in e ? function (t, e) {
                            d(!!e.found), e.found.name, e.found.updateTime;
                            var n = ee(t, e.found.name),
                                r = Xt(e.found.updateTime),
                                i = new Ze({
                              mapValue: {
                                fields: e.found.fields
                              }
                            });
                            return new tn(n, r, i, {});
                          }(t, e) : "missing" in e ? function (t, e) {
                            d(!!e.missing), d(!!e.readTime);
                            var n = ee(t, e.missing),
                                r = Xt(e.readTime);
                            return new en(n, r);
                          }(t, e) : p();
                        }(r.serializer, t);

                        u.set(e.key.toString(), e);
                      }), a = [], [2
                      /*return*/
                      , (n.forEach(function (t) {
                        var e = u.get(t.toString());
                        d(!!e), a.push(e);
                      }), a)];
                  }
                });
              });
            }(this.qa, t)];

          case 1:
            return [2
            /*return*/
            , ((n = i.sent()).forEach(function (t) {
              t instanceof en || t instanceof tn ? r.Pf(t) : p();
            }), n)];
        }
      });
    });
  }, t.prototype.set = function (t, e) {
    this.write(e.hf(t, this.Qe(t))), this.If.add(t.toString());
  }, t.prototype.update = function (t, e) {
    try {
      this.write(e.hf(t, this.gf(t)));
    } catch (t) {
      this.mf = t;
    }

    this.If.add(t.toString());
  }, t.prototype.delete = function (t) {
    this.write([new Ke(t, this.Qe(t))]), this.If.add(t.toString());
  }, t.prototype.commit = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t,
          n = this;
      return e.__generator(this, function (r) {
        switch (r.label) {
          case 0:
            if (this.Rf(), this.mf) throw this.mf;
            return t = this.Tf, // For each mutation, note that the doc was written.
            this.mutations.forEach(function (e) {
              t.delete(e.key.toString());
            }), // For each document that was read but not written to, we want to perform
            // a `verify` operation.
            t.forEach(function (t, e) {
              var r = V.B(e);
              n.mutations.push(new Ye(r, n.Qe(r)));
            }), [4
            /*yield*/
            , function (t, n) {
              return e.__awaiter(this, void 0, void 0, function () {
                var r, i, o;
                return e.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return r = y(t), i = ie(r.serializer) + "/documents", o = {
                        writes: n.map(function (t) {
                          return ue(r.serializer, t);
                        })
                      }, [4
                      /*yield*/
                      , r.va("Commit", i, o)];

                    case 1:
                      return e.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }(this.qa, this.mutations)];

          case 1:
            // For each mutation, note that the doc was written.
            return r.sent(), this.Ef = !0, [2
            /*return*/
            ];
        }
      });
    });
  }, t.prototype.Pf = function (t) {
    var e;
    if (t instanceof tn) e = t.version;else {
      if (!(t instanceof en)) throw p(); // For deleted docs, we must use baseVersion 0 when we overwrite them.

      e = k.min();
    }
    var n = this.Tf.get(t.key.toString());

    if (n) {
      if (!e.isEqual(n)) // This transaction will fail no matter what.
        throw new D(S.ABORTED, "Document version changed between two reads.");
    } else this.Tf.set(t.key.toString(), e);
  },
  /**
   * Returns the version of this document when it was read in this transaction,
   * as a precondition, or no precondition if it was not read.
   */
  t.prototype.Qe = function (t) {
    var e = this.Tf.get(t.toString());
    return !this.If.has(t.toString()) && e ? Oe.updateTime(e) : Oe.We();
  },
  /**
   * Returns the precondition for a document if the operation is an update.
   */
  t.prototype.gf = function (t) {
    var e = this.Tf.get(t.toString()); // The first time a document is written, we want to take into account the
    // read time and existence

    if (!this.If.has(t.toString()) && e) {
      if (e.isEqual(k.min())) // The document doesn't exist, so fail the transaction.
        // This has to be validated locally because you can't send a
        // precondition that a document does not exist without changing the
        // semantics of the backend write to be an insert. This is the reverse
        // of what we want, since we want to assert that the document doesn't
        // exist but then send the update and have it fail. Since we can't
        // express that to the backend, we have to validate locally.
        // Note: this can change once we can send separate verify writes in the
        // transaction.
        throw new D(S.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); // Document exists, base precondition on document update time.

      return Oe.updateTime(e);
    } // Document was not read, so we just use the preconditions for a blind
    // update.


    return Oe.exists(!0);
  }, t.prototype.write = function (t) {
    this.Rf(), this.mutations = this.mutations.concat(t);
  }, t.prototype.Rf = function () {}, t;
}(),
    Vs =
/** @class */
function () {
  function t(t, e, n, r) {
    this.ei = t, this.qa = e, this.updateFunction = n, this.ii = r, this.Vf = 5, this.Ti = new Qn(this.ei, "transaction_retry"
    /* TransactionRetry */
    )
    /** Runs the transaction and sets the result on deferred. */
    ;
  }

  return t.prototype.run = function () {
    this.yf();
  }, t.prototype.yf = function () {
    var t = this;
    this.Ti.bs(function () {
      return e.__awaiter(t, void 0, void 0, function () {
        var t,
            n,
            r = this;
        return e.__generator(this, function (e) {
          return t = new Os(this.qa), (n = this.pf(t)) && n.then(function (e) {
            r.ei.ai(function () {
              return t.commit().then(function () {
                r.ii.resolve(e);
              }).catch(function (t) {
                r.bf(t);
              });
            });
          }).catch(function (t) {
            r.bf(t);
          }), [2
          /*return*/
          ];
        });
      });
    });
  }, t.prototype.pf = function (t) {
    try {
      var e = this.updateFunction(t);
      return !U(e) && e.catch && e.then ? e : (this.ii.reject(Error("Transaction callback must return a Promise")), null);
    } catch (t) {
      // Do not retry errors thrown by user provided updateFunction.
      return this.ii.reject(t), null;
    }
  }, t.prototype.bf = function (t) {
    var e = this;
    this.Vf > 0 && this.vf(t) ? (this.Vf -= 1, this.ei.ai(function () {
      return e.yf(), Promise.resolve();
    })) : this.ii.reject(t);
  }, t.prototype.vf = function (t) {
    if ("FirebaseError" === t.name) {
      // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
      // non-matching document versions with ABORTED. These errors should be retried.
      var e = t.code;
      return "aborted" === e || "failed-precondition" === e || !Y(e);
    }

    return !1;
  }, t;
}(),
    Us =
/** @class */
function () {
  function t(t,
  /**
   * Asynchronous queue responsible for all of our internal processing. When
   * we get incoming work from the user (via public API) or the network
   * (incoming GRPC messages), we should always schedule onto this queue.
   * This ensures all of our work is properly serialized (e.g. we don't
   * start processing a new operation while the previous one is waiting for
   * an async I/O to complete).
   */
  e) {
    this.credentials = t, this.ei = e, this.clientId = g.t(), // We defer our initialization until we get the current user from
    // setChangeListener(). We block the async queue until we got the initial
    // user and the initialization is completed. This will prevent any scheduled
    // work from happening before initialization is completed.
    // If initializationDone resolved then the FirestoreClient is in a usable
    // state.
    this.Sf = new zn()
    /**
    * Starts up the FirestoreClient, returning only whether or not enabling
    * persistence succeeded.
    *
    * The intent here is to "do the right thing" as far as users are concerned.
    * Namely, in cases where offline persistence is requested and possible,
    * enable it, but otherwise fall back to persistence disabled. For the most
    * part we expect this to succeed one way or the other so we don't expect our
    * users to actually wait on the firestore.enablePersistence Promise since
    * they generally won't care.
    *
    * Of course some users actually do care about whether or not persistence
    * was successfully enabled, so the Promise returned from this method
    * indicates this outcome.
    *
    * This presents a problem though: even before enablePersistence resolves or
    * rejects, users may have made calls to e.g. firestore.collection() which
    * means that the FirestoreClient in there will be available and will be
    * enqueuing actions on the async queue.
    *
    * Meanwhile any failure of an operation on the async queue causes it to
    * panic and reject any further work, on the premise that unhandled errors
    * are fatal.
    *
    * Consequently the fallback is handled internally here in start, and if the
    * fallback succeeds we signal success to the async queue even though the
    * start() itself signals failure.
    *
    * @param databaseInfo The connection information for the current instance.
    * @param offlineComponentProvider Provider that returns all components
    * required for memory-only or IndexedDB persistence.
    * @param onlineComponentProvider Provider that returns all components
    * required for online support.
    * @param persistenceSettings Settings object to configure offline
    *     persistence.
    * @returns A deferred result indicating the user-visible result of enabling
    *     offline persistence. This method will reject this if IndexedDB fails to
    *     start for any reason. If usePersistence is false this is
    *     unconditionally resolved.
    */
    ;
  }

  return t.prototype.start = function (t, e, n, r) {
    var i = this;
    this.Df(), this.w_ = t; // If usePersistence is true, certain classes of errors while starting are
    // recoverable but only by falling back to persistence disabled.
    // If there's an error in the first case but not in recovery we cannot
    // reject the promise blocking the async queue because this will cause the
    // async queue to panic.

    var o = new zn(),
        s = !1; // Return only the result of enabling persistence. Note that this does not
    // need to await the completion of initializationDone because the result of
    // this method should not reflect any other kind of failure to start.

    return this.credentials.Bh(function (t) {
      if (!s) return s = !0, c("FirestoreClient", "Initializing. user=", t.uid), i.Cf(e, n, r, t, o).then(i.Sf.resolve, i.Sf.reject);
      i.ei.gi(function () {
        return i.Bu.vc(t);
      });
    }), // Block the async queue until initialization is done
    this.ei.ai(function () {
      return i.Sf.promise;
    }), o.promise;
  },
  /** Enables the network connection and requeues all pending operations. */
  t.prototype.enableNetwork = function () {
    var t = this;
    return this.Df(), this.ei.enqueue(function () {
      return t.persistence.Uo(!0), t.Bu.enableNetwork();
    });
  },
  /**
   * Initializes persistent storage, attempting to use IndexedDB if
   * usePersistence is true or memory-only if false.
   *
   * If IndexedDB fails because it's already open in another tab or because the
   * platform can't possibly support our implementation then this method rejects
   * the persistenceResult and falls back on memory-only persistence.
   *
   * @param offlineComponentProvider Provider that returns all components
   * required for memory-only or IndexedDB persistence.
   * @param onlineComponentProvider Provider that returns all components
   * required for online support.
   * @param persistenceSettings Settings object to configure offline persistence
   * @param user The initial user
   * @param persistenceResult A deferred result indicating the user-visible
   *     result of enabling offline persistence. This method will reject this if
   *     IndexedDB fails to start for any reason. If usePersistence is false
   *     this is unconditionally resolved.
   * @returns a Promise indicating whether or not initialization should
   *     continue, i.e. that one of the persistence implementations actually
   *     succeeded.
   */
  t.prototype.Cf = function (t, n, r, i, o) {
    return e.__awaiter(this, void 0, void 0, function () {
      var s,
          u,
          a = this;
      return e.__generator(this, function (c) {
        switch (c.label) {
          case 0:
            return c.trys.push([0, 3,, 4]), s = {
              ei: this.ei,
              w_: this.w_,
              clientId: this.clientId,
              credentials: this.credentials,
              N_: i,
              Qu: 100,
              k_: r
            }, [4
            /*yield*/
            , t.initialize(s)];

          case 1:
            return c.sent(), [4
            /*yield*/
            , n.initialize(t, s)];

          case 2:
            return c.sent(), this.persistence = t.persistence, this.Uu = t.Uu, this.La = t.La, this.S_ = t.S_, this.qa = n.qa, this.Bu = n.Bu, this.fc = n.fc, this.Nf = n.q_, // When a user calls clearPersistence() in one client, all other clients
            // need to be terminated to allow the delete to succeed.
            this.persistence.Bo(function () {
              return e.__awaiter(a, void 0, void 0, function () {
                return e.__generator(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4
                      /*yield*/
                      , this.terminate()];

                    case 1:
                      return t.sent(), [2
                      /*return*/
                      ];
                  }
                });
              });
            }), o.resolve(), [3
            /*break*/
            , 4];

          case 3:
            // An unknown failure on the first stage shuts everything down.
            if (u = c.sent(), // Regardless of whether or not the retry succeeds, from an user
            // perspective, offline persistence has failed.
            o.reject(u), !this.Ff(u)) throw u;
            return [2
            /*return*/
            , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u), this.Cf(new xo(), new Lo(), {
              F_: !1
            }, i, o))];

          case 4:
            return [2
            /*return*/
            ];
        }
      });
    });
  },
  /**
   * Decides whether the provided error allows us to gracefully disable
   * persistence (as opposed to crashing the client).
   */
  t.prototype.Ff = function (t) {
    return "FirebaseError" === t.name ? t.code === S.FAILED_PRECONDITION || t.code === S.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || // When the browser is out of quota we could get either quota exceeded
    // or an aborted error depending on whether the error happened during
    // schema migration.
    22 === t.code || 20 === t.code || // Firefox Private Browsing mode disables IndexedDb and returns
    // INVALID_STATE for any usage.
    11 === t.code;
  },
  /**
   * Checks that the client has not been terminated. Ensures that other methods on
   * this class cannot be called after the client is terminated.
   */
  t.prototype.Df = function () {
    if (this.ei.mi) throw new D(S.FAILED_PRECONDITION, "The client has already been terminated.");
  },
  /** Disables the network connection. Pending operations will not complete. */
  t.prototype.disableNetwork = function () {
    var t = this;
    return this.Df(), this.ei.enqueue(function () {
      return t.persistence.Uo(!1), t.Bu.disableNetwork();
    });
  }, t.prototype.terminate = function () {
    var t = this;
    this.ei.Pi();
    var n = new zn();
    return this.ei.Ii(function () {
      return e.__awaiter(t, void 0, void 0, function () {
        var t, r;
        return e.__generator(this, function (e) {
          switch (e.label) {
            case 0:
              return e.trys.push([0, 4,, 5]), // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
              this.S_ && this.S_.stop(), [4
              /*yield*/
              , this.Bu.th()];

            case 1:
              return e.sent(), [4
              /*yield*/
              , this.Uu.th()];

            case 2:
              return e.sent(), [4
              /*yield*/
              , this.persistence.th()];

            case 3:
              // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
              return e.sent(), // `removeChangeListener` must be called after shutting down the
              // RemoteStore as it will prevent the RemoteStore from retrieving
              // auth tokens.
              this.credentials.Uh(), n.resolve(), [3
              /*break*/
              , 5];

            case 4:
              return t = e.sent(), r = or(t, "Failed to shutdown persistence"), n.reject(r), [3
              /*break*/
              , 5];

            case 5:
              return [2
              /*return*/
              ];
          }
        });
      });
    }), n.promise;
  },
  /**
   * Returns a Promise that resolves when all writes that were pending at the time this
   * method was called received server acknowledgement. An acknowledgement can be either acceptance
   * or rejection.
   */
  t.prototype.waitForPendingWrites = function () {
    var t = this;
    this.Df();
    var e = new zn();
    return this.ei.ai(function () {
      return t.fc._l(e);
    }), e.promise;
  }, t.prototype.listen = function (t, e, n) {
    var r = this;
    this.Df();
    var i = new Ro(n),
        o = new po(t, i, e);
    return this.ei.ai(function () {
      return r.Nf.listen(o);
    }), function () {
      i.Q_(), r.ei.ai(function () {
        return r.Nf.lc(o);
      });
    };
  }, t.prototype.kf = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (n) {
        switch (n.label) {
          case 0:
            return this.Df(), [4
            /*yield*/
            , this.Sf.promise];

          case 1:
            return [2
            /*return*/
            , (n.sent(), function (t, n, r) {
              return e.__awaiter(this, void 0, void 0, function () {
                var i,
                    o = this;
                return e.__generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return i = new zn(), [4
                      /*yield*/
                      , t.enqueue(function () {
                        return e.__awaiter(o, void 0, void 0, function () {
                          var t, o, s;
                          return e.__generator(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([0, 2,, 3]), [4
                                /*yield*/
                                , function (t, e) {
                                  var n = y(t);
                                  return n.persistence.runTransaction("read document", "readonly", function (t) {
                                    return n.Rh.Hn(t, e);
                                  });
                                }(n, r)];

                              case 1:
                                return (t = e.sent()) instanceof tn ? i.resolve(t) : t instanceof en ? i.resolve(null) : i.reject(new D(S.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), [3
                                /*break*/
                                , 3];

                              case 2:
                                return o = e.sent(), s = or(o, "Failed to get document '" + r + " from cache"), i.reject(s), [3
                                /*break*/
                                , 3];

                              case 3:
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      })];

                    case 1:
                      return [2
                      /*return*/
                      , (s.sent(), i.promise)];
                  }
                });
              });
            }(this.ei, this.La, t))];
        }
      });
    });
  }, t.prototype.$f = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.Df(), [4
            /*yield*/
            , this.Sf.promise];

          case 1:
            return [2
            /*return*/
            , (e.sent(), function (t, e, n, r) {
              var i = new zn(),
                  o = Cs(t, e, un(n.path), {
                includeMetadataChanges: !0,
                $l: !0
              }, {
                next: function next(t) {
                  // Remove query first before passing event to user to avoid
                  // user actions affecting the now stale query.
                  o();
                  var e = t.docs.has(n);
                  !e && t.fromCache ? // TODO(dimond): If we're online and the document doesn't
                  // exist then we resolve with a doc.exists set to false. If
                  // we're offline however, we reject the Promise in this
                  // case. Two options: 1) Cache the negative response from
                  // the server so we can deliver that even when you're
                  // offline 2) Actually reject the Promise in the online case
                  // if the document doesn't exist.
                  i.reject(new D(S.UNAVAILABLE, "Failed to get document because the client is offline.")) : e && t.fromCache && r && "server" === r.source ? i.reject(new D(S.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(t);
                },
                error: function error(t) {
                  return i.reject(t);
                }
              });
              return i.promise;
            }(this.ei, this.Nf, t, n))];
        }
      });
    });
  }, t.prototype.xf = function (t) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (n) {
        switch (n.label) {
          case 0:
            return this.Df(), [4
            /*yield*/
            , this.Sf.promise];

          case 1:
            return [2
            /*return*/
            , (n.sent(), function (t, n, r) {
              return e.__awaiter(this, void 0, void 0, function () {
                var i,
                    o = this;
                return e.__generator(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return i = new zn(), [4
                      /*yield*/
                      , t.enqueue(function () {
                        return e.__awaiter(o, void 0, void 0, function () {
                          var t, o, s, u, a, c;
                          return e.__generator(this, function (e) {
                            switch (e.label) {
                              case 0:
                                return e.trys.push([0, 2,, 3]), [4
                                /*yield*/
                                , Ti(n, r,
                                /* usePreviousResults= */
                                !0)];

                              case 1:
                                return t = e.sent(), o = new Ji(r, t.gh), s = o.Su(t.documents), u = o.Un(s,
                                /* updateLimboDocuments= */
                                !1), i.resolve(u.snapshot), [3
                                /*break*/
                                , 3];

                              case 2:
                                return a = e.sent(), c = or(a, "Failed to execute query '" + r + " against cache"), i.reject(c), [3
                                /*break*/
                                , 3];

                              case 3:
                                return [2
                                /*return*/
                                ];
                            }
                          });
                        });
                      })];

                    case 1:
                      return [2
                      /*return*/
                      , (s.sent(), i.promise)];
                  }
                });
              });
            }(this.ei, this.La, t))];
        }
      });
    });
  }, t.prototype.Of = function (t, n) {
    return e.__awaiter(this, void 0, void 0, function () {
      return e.__generator(this, function (e) {
        switch (e.label) {
          case 0:
            return this.Df(), [4
            /*yield*/
            , this.Sf.promise];

          case 1:
            return [2
            /*return*/
            , (e.sent(), function (t, e, n, r) {
              var i = new zn(),
                  o = Cs(t, e, n, {
                includeMetadataChanges: !0,
                $l: !0
              }, {
                next: function next(t) {
                  // Remove query first before passing event to user to avoid
                  // user actions affecting the now stale query.
                  o(), t.fromCache && r && "server" === r.source ? i.reject(new D(S.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(t);
                },
                error: function error(t) {
                  return i.reject(t);
                }
              });
              return i.promise;
            }(this.ei, this.Nf, t, n))];
        }
      });
    });
  }, t.prototype.write = function (t) {
    var e = this;
    this.Df();
    var n = new zn();
    return this.ei.ai(function () {
      return e.fc.write(t, n);
    }), n.promise;
  }, t.prototype.s = function () {
    return this.w_.s;
  }, t.prototype.bl = function (t) {
    var n = this;
    this.Df();
    var r = new Ro(t);
    return this.ei.ai(function () {
      return e.__awaiter(n, void 0, void 0, function () {
        return e.__generator(this, function (t) {
          return [2
          /*return*/
          , this.Nf.bl(r)];
        });
      });
    }), function () {
      r.Q_(), n.ei.ai(function () {
        return e.__awaiter(n, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            return [2
            /*return*/
            , this.Nf.vl(r)];
          });
        });
      });
    };
  }, Object.defineProperty(t.prototype, "Mf", {
    get: function get() {
      // Technically, the asyncQueue is still running, but only accepting operations
      // related to termination or supposed to be run after termination. It is effectively
      // terminated to the eyes of users.
      return this.ei.mi;
    },
    enumerable: !1,
    configurable: !0
  }),
  /**
   * Takes an updateFunction in which a set of reads and writes can be performed
   * atomically. In the updateFunction, the client can read and write values
   * using the supplied transaction object. After the updateFunction, all
   * changes will be committed. If a retryable error occurs (ex: some other
   * client has changed any of the data referenced), then the updateFunction
   * will be called again after a backoff. If the updateFunction still fails
   * after all retries, then the transaction will be rejected.
   *
   * The transaction object passed to the updateFunction contains methods for
   * accessing documents and collections. Unlike other datastore access, data
   * accessed with the transaction will not reflect local changes that have not
   * been committed. For this reason, it is required that all reads are
   * performed before any writes. Transactions must be performed while online.
   */
  t.prototype.transaction = function (t) {
    var e = this;
    this.Df();
    var n = new zn();
    return this.ei.ai(function () {
      return new Vs(e.ei, e.qa, t, n).run(), Promise.resolve();
    }), n.promise;
  }, t;
}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */


function Cs(t, e, n, r, i) {
  var o = new Ro(i),
      s = new po(n, o, r);
  return t.ai(function () {
    return e.listen(s);
  }), function () {
    o.Q_(), t.ai(function () {
      return e.lc(s);
    });
  };
}

var qs =
/** @class */
function () {
  function t(t, e, n, r) {
    this.s = t, this.timestampsInSnapshots = e, this.Lf = n, this.qf = r;
  }

  return t.prototype.Bf = function (t) {
    switch (St(t)) {
      case 0
      /* NullValue */
      :
        return null;

      case 1
      /* BooleanValue */
      :
        return t.booleanValue;

      case 2
      /* NumberValue */
      :
        return Ot(t.integerValue || t.doubleValue);

      case 3
      /* TimestampValue */
      :
        return this.Uf(t.timestampValue);

      case 4
      /* ServerTimestampValue */
      :
        return this.Qf(t);

      case 5
      /* StringValue */
      :
        return t.stringValue;

      case 6
      /* BlobValue */
      :
        return new es(Vt(t.bytesValue));

      case 7
      /* RefValue */
      :
        return this.Wf(t.referenceValue);

      case 8
      /* GeoPointValue */
      :
        return this.jf(t.geoPointValue);

      case 9
      /* ArrayValue */
      :
        return this.Kf(t.arrayValue);

      case 10
      /* ObjectValue */
      :
        return this.Gf(t.mapValue);

      default:
        throw p();
    }
  }, t.prototype.Gf = function (t) {
    var e = this,
        n = {};
    return T(t.fields || {}, function (t, r) {
      n[t] = e.Bf(r);
    }), n;
  }, t.prototype.jf = function (t) {
    return new ds(Ot(t.latitude), Ot(t.longitude));
  }, t.prototype.Kf = function (t) {
    var e = this;
    return (t.values || []).map(function (t) {
      return e.Bf(t);
    });
  }, t.prototype.Qf = function (t) {
    switch (this.Lf) {
      case "previous":
        var e = function t(e) {
          var n = e.mapValue.fields.__previous_value__;
          return Tt(n) ? t(n) : n;
        }(t);

        return null == e ? null : this.Bf(e);

      case "estimate":
        return this.Uf(Nt(t));

      default:
        return null;
    }
  }, t.prototype.Uf = function (t) {
    var e = Rt(t),
        n = new x(e.seconds, e.nanos);
    return this.timestampsInSnapshots ? n : n.toDate();
  }, t.prototype.Wf = function (t) {
    var e = P.k(t);
    d(me(e));
    var n = new I(e.get(1), e.get(3)),
        r = new V(e.V(5));
    return n.isEqual(this.s) || // TODO(b/64130202): Somehow support foreign references.
    h("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.s.projectId + "/" + this.s.database + ") instead."), this.qf(r);
  }, t;
}(),
    Ms = cr.ji,
    Fs =
/** @class */
function () {
  function t(t) {
    var e, n, r, i;

    if (void 0 === t.host) {
      if (void 0 !== t.ssl) throw new D(S.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = !0;
    } else Fo("settings", "non-empty string", "host", t.host), this.host = t.host, Go("settings", "boolean", "ssl", t.ssl), this.ssl = null === (e = t.ssl) || void 0 === e || e;

    if (Ko("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties"]), Go("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, Go("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), Go("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), // Nobody should set timestampsInSnapshots anymore, but the error depends on
    // whether they set it to true or false...
    !0 === t.timestampsInSnapshots ? h("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && h("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, Go("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = cr.Gi;else {
      if (t.cacheSizeBytes !== Ms && t.cacheSizeBytes < cr.Ki) throw new D(S.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + cr.Ki);
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    Go("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
  }

  return t.prototype.isEqual = function (t) {
    return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
  }, t;
}(),
    Gs =
/** @class */
function () {
  // Note: We are using `MemoryComponentProvider` as a default
  // ComponentProvider to ensure backwards compatibility with the format
  // expected by the console build.
  function t(n, r, i, o) {
    var s = this;

    if (void 0 === i && (i = new xo()), void 0 === o && (o = new Lo()), this.zf = i, this.Hf = o, this.Yf = null, // Public for use in tests.
    // TODO(mikelehen): Use modularized initialization instead.
    this.Jf = new ir(), this.INTERNAL = {
      delete: function _delete() {
        return e.__awaiter(s, void 0, void 0, function () {
          return e.__generator(this, function (t) {
            switch (t.label) {
              case 0:
                // The client must be initalized to ensure that all subsequent API usage
                // throws an exception.
                return this.Xf(), [4
                /*yield*/
                , this.Zf.terminate()];

              case 1:
                // The client must be initalized to ensure that all subsequent API usage
                // throws an exception.
                return t.sent(), [2
                /*return*/
                ];
            }
          });
        });
      }
    }, "object" == _typeof(n.options)) {
      // This is very likely a Firebase app object
      // TODO(b/34177605): Can we somehow use instanceof?
      var u = n;
      this.Yf = u, this.sf = t.td(u), this.ed = u.name, this.nd = new Pi(r);
    } else {
      var a = n;
      if (!a.projectId) throw new D(S.INVALID_ARGUMENT, "Must provide projectId");
      this.sf = new I(a.projectId, a.database), // Use a default persistenceKey that lines up with FirebaseApp.
      this.ed = "[DEFAULT]", this.nd = new Li();
    }

    this.sd = new Fs({});
  }

  return Object.defineProperty(t.prototype, "rd", {
    get: function get() {
      return this.od || ( // Lazy initialize UserDataReader once the settings are frozen
      this.od = new bs(this.sf, this.sd.ignoreUndefinedProperties)), this.od;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.settings = function (t) {
    Vo("Firestore.settings", arguments, 1), qo("Firestore.settings", "object", 1, t);
    var e = new Fs(t);
    if (this.Zf && !this.sd.isEqual(e)) throw new D(S.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
    this.sd = e, void 0 !== e.credentials && (this.nd = function (t) {
      if (!t) return new Li();

      switch (t.type) {
        case "gapi":
          var e = t.hd; // Make sure this really is a Gapi client.

          return d(!("object" != _typeof(e) || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), new Oi(e, t.zh || "0");

        case "provider":
          return t.hd;

        default:
          throw new D(S.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }, t.prototype.enableNetwork = function () {
    return this.Xf(), this.Zf.enableNetwork();
  }, t.prototype.disableNetwork = function () {
    return this.Xf(), this.Zf.disableNetwork();
  }, t.prototype.enablePersistence = function (t) {
    var e, n;
    if (this.Zf) throw new D(S.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
    var r = !1,
        i = !1;
    if (t && (void 0 !== t.experimentalTabSynchronization && h("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new D(S.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
    return this.ad(this.zf, this.Hf, {
      F_: !0,
      cacheSizeBytes: this.sd.cacheSizeBytes,
      synchronizeTabs: r,
      Vo: i
    });
  }, t.prototype.clearPersistence = function () {
    return e.__awaiter(this, void 0, void 0, function () {
      var t,
          n = this;
      return e.__generator(this, function (r) {
        if (void 0 !== this.Zf && !this.Zf.Mf) throw new D(S.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
        return t = new zn(), [2
        /*return*/
        , (this.Jf.Ii(function () {
          return e.__awaiter(n, void 0, void 0, function () {
            var n;
            return e.__generator(this, function (e) {
              switch (e.label) {
                case 0:
                  return e.trys.push([0, 2,, 3]), [4
                  /*yield*/
                  , this.zf.clearPersistence(this.sf, this.ed)];

                case 1:
                  return e.sent(), t.resolve(), [3
                  /*break*/
                  , 3];

                case 2:
                  return n = e.sent(), t.reject(n), [3
                  /*break*/
                  , 3];

                case 3:
                  return [2
                  /*return*/
                  ];
              }
            });
          });
        }), t.promise)];
      });
    });
  }, t.prototype.terminate = function () {
    return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
  }, Object.defineProperty(t.prototype, "ud", {
    get: function get() {
      return this.Xf(), this.Zf.Mf;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.waitForPendingWrites = function () {
    return this.Xf(), this.Zf.waitForPendingWrites();
  }, t.prototype.onSnapshotsInSync = function (t) {
    if (this.Xf(), Po(t)) return this.Zf.bl(t);
    qo("Firestore.onSnapshotsInSync", "function", 1, t);
    var e = {
      next: t
    };
    return this.Zf.bl(e);
  }, t.prototype.Xf = function () {
    return this.Zf || // Kick off starting the client but don't actually wait for it.
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.ad(new xo(), new Lo(), {
      F_: !1
    }), this.Zf;
  }, t.prototype.ld = function () {
    return new b(this.sf, this.ed, this.sd.host, this.sd.ssl, this.sd.forceLongPolling);
  }, t.prototype.ad = function (t, e, n) {
    var r = this.ld();
    return this.Zf = new Us(this.nd, this.Jf), this.Zf.start(r, t, e, n);
  }, t.td = function (t) {
    if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new D(S.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
    var e,
        n = t.options.projectId;
    /**
    * @license
    * Copyright 2017 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */

    if (!n || "string" != typeof n) throw new D(S.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
    return new I(n);
  }, Object.defineProperty(t.prototype, "app", {
    get: function get() {
      if (!this.Yf) throw new D(S.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
      return this.Yf;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.collection = function (t) {
    return Vo("Firestore.collection", arguments, 1), qo("Firestore.collection", "non-empty string", 1, t), this.Xf(), new nu(P.k(t), this,
    /* converter= */
    null);
  }, t.prototype.doc = function (t) {
    return Vo("Firestore.doc", arguments, 1), qo("Firestore.doc", "non-empty string", 1, t), this.Xf(), zs._d(P.k(t), this,
    /* converter= */
    null);
  }, t.prototype.collectionGroup = function (t) {
    if (Vo("Firestore.collectionGroup", arguments, 1), qo("Firestore.collectionGroup", "non-empty string", 1, t), t.indexOf("/") >= 0) throw new D(S.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
    return this.Xf(), new tu(function (t) {
      return new on(P.$(), t);
    }(t), this,
    /* converter= */
    null);
  }, t.prototype.runTransaction = function (t) {
    var e = this;
    return Vo("Firestore.runTransaction", arguments, 1), qo("Firestore.runTransaction", "function", 1, t), this.Xf().transaction(function (n) {
      return t(new js(e, n));
    });
  }, t.prototype.batch = function () {
    return this.Xf(), new Bs(this);
  }, Object.defineProperty(t, "logLevel", {
    get: function get() {
      switch (a()) {
        case r.LogLevel.DEBUG:
          return "debug";

        case r.LogLevel.ERROR:
          return "error";

        case r.LogLevel.SILENT:
          return "silent";

        case r.LogLevel.WARN:
          return "warn";

        case r.LogLevel.INFO:
          return "info";

        case r.LogLevel.VERBOSE:
          return "verbose";

        default:
          // The default log level is error
          return "error";
      }
    },
    enumerable: !1,
    configurable: !0
  }), t.setLogLevel = function (t) {
    var e;
    Vo("Firestore.setLogLevel", arguments, 1), Bo("setLogLevel", ["debug", "error", "silent", "warn", "info", "verbose"], 1, t), e = t, u.setLogLevel(e);
  }, // Note: this is not a property because the minifier can't work correctly with
  // the way TypeScript compiler outputs properties.
  t.prototype.fd = function () {
    return this.sd.timestampsInSnapshots;
  }, t;
}(),
    js =
/** @class */
function () {
  function t(t, e) {
    this.dd = t, this.wd = e;
  }

  return t.prototype.get = function (t) {
    var e = this;
    Vo("Transaction.get", arguments, 1);
    var n = su("Transaction.get", t, this.dd);
    return this.wd.Af([n.if]).then(function (t) {
      if (!t || 1 !== t.length) return p();
      var r = t[0];
      if (r instanceof en) return new Ws(e.dd, n.if, null,
      /* fromCache= */
      !1,
      /* hasPendingWrites= */
      !1, n.rf);
      if (r instanceof tn) return new Ws(e.dd, n.if, r,
      /* fromCache= */
      !1,
      /* hasPendingWrites= */
      !1, n.rf);
      throw p();
    });
  }, t.prototype.set = function (t, e, n) {
    Co("Transaction.set", arguments, 2, 3);
    var r = su("Transaction.set", t, this.dd);
    n = ru("Transaction.set", n);
    var i = au(r.rf, e, n),
        o = Is(this.dd.rd, "Transaction.set", r.if, i, null !== r.rf, n);
    return this.wd.set(r.if, o), this;
  }, t.prototype.update = function (t, e, n) {
    for (var r, i, o = [], s = 3; s < arguments.length; s++) {
      o[s - 3] = arguments[s];
    }

    return "string" == typeof e || e instanceof rs ? (Uo("Transaction.update", arguments, 3), r = su("Transaction.update", t, this.dd), i = Ts(this.dd.rd, "Transaction.update", r.if, e, n, o)) : (Vo("Transaction.update", arguments, 2), r = su("Transaction.update", t, this.dd), i = Es(this.dd.rd, "Transaction.update", r.if, e)), this.wd.update(r.if, i), this;
  }, t.prototype.delete = function (t) {
    Vo("Transaction.delete", arguments, 1);
    var e = su("Transaction.delete", t, this.dd);
    return this.wd.delete(e.if), this;
  }, t;
}(),
    Bs =
/** @class */
function () {
  function t(t) {
    this.dd = t, this.Td = [], this.Ed = !1;
  }

  return t.prototype.set = function (t, e, n) {
    Co("WriteBatch.set", arguments, 2, 3), this.md();
    var r = su("WriteBatch.set", t, this.dd);
    n = ru("WriteBatch.set", n);
    var i = au(r.rf, e, n),
        o = Is(this.dd.rd, "WriteBatch.set", r.if, i, null !== r.rf, n);
    return this.Td = this.Td.concat(o.hf(r.if, Oe.We())), this;
  }, t.prototype.update = function (t, e, n) {
    for (var r, i, o = [], s = 3; s < arguments.length; s++) {
      o[s - 3] = arguments[s];
    }

    return this.md(), "string" == typeof e || e instanceof rs ? (Uo("WriteBatch.update", arguments, 3), r = su("WriteBatch.update", t, this.dd), i = Ts(this.dd.rd, "WriteBatch.update", r.if, e, n, o)) : (Vo("WriteBatch.update", arguments, 2), r = su("WriteBatch.update", t, this.dd), i = Es(this.dd.rd, "WriteBatch.update", r.if, e)), this.Td = this.Td.concat(i.hf(r.if, Oe.exists(!0))), this;
  }, t.prototype.delete = function (t) {
    Vo("WriteBatch.delete", arguments, 1), this.md();
    var e = su("WriteBatch.delete", t, this.dd);
    return this.Td = this.Td.concat(new Ke(e.if, Oe.We())), this;
  }, t.prototype.commit = function () {
    return this.md(), this.Ed = !0, this.Td.length > 0 ? this.dd.Xf().write(this.Td) : Promise.resolve();
  }, t.prototype.md = function () {
    if (this.Ed) throw new D(S.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
  }, t;
}(),
    zs =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    return (i = t.call(this, n.sf, e, r) || this).if = e, i.firestore = n, i.rf = r, i.Zf = i.firestore.Xf(), i;
  }

  return e.__extends(n, t), n._d = function (t, e, r) {
    if (t.length % 2 != 0) throw new D(S.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.F() + " has " + t.length);
    return new n(new V(t), e, r);
  }, Object.defineProperty(n.prototype, "id", {
    get: function get() {
      return this.if.path.S();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "parent", {
    get: function get() {
      return new nu(this.if.path.p(), this.firestore, this.rf);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "path", {
    get: function get() {
      return this.if.path.F();
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.collection = function (t) {
    if (Vo("DocumentReference.collection", arguments, 1), qo("DocumentReference.collection", "non-empty string", 1, t), !t) throw new D(S.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
    var e = P.k(t);
    return new nu(this.if.path.child(e), this.firestore,
    /* converter= */
    null);
  }, n.prototype.isEqual = function (t) {
    if (!(t instanceof n)) throw Yo("isEqual", "DocumentReference", 1, t);
    return this.firestore === t.firestore && this.if.isEqual(t.if) && this.rf === t.rf;
  }, n.prototype.set = function (t, e) {
    Co("DocumentReference.set", arguments, 1, 2), e = ru("DocumentReference.set", e);
    var n = au(this.rf, t, e),
        r = Is(this.firestore.rd, "DocumentReference.set", this.if, n, null !== this.rf, e);
    return this.Zf.write(r.hf(this.if, Oe.We()));
  }, n.prototype.update = function (t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) {
      r[i - 2] = arguments[i];
    }

    return "string" == typeof t || t instanceof rs ? (Uo("DocumentReference.update", arguments, 2), n = Ts(this.firestore.rd, "DocumentReference.update", this.if, t, e, r)) : (Vo("DocumentReference.update", arguments, 1), n = Es(this.firestore.rd, "DocumentReference.update", this.if, t)), this.Zf.write(n.hf(this.if, Oe.exists(!0)));
  }, n.prototype.delete = function () {
    return Vo("DocumentReference.delete", arguments, 0), this.Zf.write([new Ke(this.if, Oe.We())]);
  }, n.prototype.onSnapshot = function () {
    for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) {
      i[o] = arguments[o];
    }

    Co("DocumentReference.onSnapshot", arguments, 1, 4);
    var s = {
      includeMetadataChanges: !1
    },
        u = 0;
    "object" != _typeof(i[u]) || Po(i[u]) || (Ko("DocumentReference.onSnapshot", s = i[u], ["includeMetadataChanges"]), Go("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++);
    var a = {
      includeMetadataChanges: s.includeMetadataChanges
    };

    if (Po(i[u])) {
      var c = i[u];
      i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
    } else qo("DocumentReference.onSnapshot", "function", u, i[u]), Mo("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), Mo("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);

    var h = {
      next: function next(t) {
        i[u] && i[u](r.Id(t));
      },
      error: i[u + 1],
      complete: i[u + 2]
    };
    return this.Zf.listen(un(this.if.path), a, h);
  }, n.prototype.get = function (t) {
    var e = this;
    Co("DocumentReference.get", arguments, 0, 1), ou("DocumentReference.get", t);
    var n = this.firestore.Xf();
    return t && "cache" === t.source ? n.kf(this.if).then(function (t) {
      return new Ws(e.firestore, e.if, t,
      /*fromCache=*/
      !0, t instanceof tn && t.Ge, e.rf);
    }) : n.$f(this.if, t).then(function (t) {
      return e.Id(t);
    });
  }, n.prototype.withConverter = function (t) {
    return new n(this.if, this.firestore, t);
  },
  /**
   * Converts a ViewSnapshot that contains the current document to a
   * DocumentSnapshot.
   */
  n.prototype.Id = function (t) {
    var e = t.docs.get(this.if);
    return new Ws(this.firestore, this.if, e, t.fromCache, t.hasPendingWrites, this.rf);
  }, n;
}(vs),
    Qs =
/** @class */
function () {
  function t(t, e) {
    this.hasPendingWrites = t, this.fromCache = e;
  }

  return t.prototype.isEqual = function (t) {
    return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
  }, t;
}(),
    Ws =
/** @class */
function () {
  function t(t, e, n, r, i, o) {
    this.dd = t, this.if = e, this.Ad = n, this.Rd = r, this.Pd = i, this.rf = o;
  }

  return t.prototype.data = function (t) {
    var e = this;

    if (Co("DocumentSnapshot.data", arguments, 0, 1), t = iu("DocumentSnapshot.data", t), this.Ad) {
      // We only want to use the converter and create a new DocumentSnapshot
      // if a converter has been provided.
      if (this.rf) {
        var n = new Hs(this.dd, this.if, this.Ad, this.Rd, this.Pd,
        /* converter= */
        null);
        return this.rf.fromFirestore(n, t);
      }

      return new qs(this.dd.sf, this.dd.fd(), t.serverTimestamps || "none", function (t) {
        return new zs(t, e.dd,
        /* converter= */
        null);
      }).Bf(this.Ad.tn());
    }
  }, t.prototype.get = function (t, e) {
    var n = this;

    if (Co("DocumentSnapshot.get", arguments, 1, 2), e = iu("DocumentSnapshot.get", e), this.Ad) {
      var r = this.Ad.data().field(ks("DocumentSnapshot.get", t, this.if));
      if (null !== r) return new qs(this.dd.sf, this.dd.fd(), e.serverTimestamps || "none", function (t) {
        return new zs(t, n.dd, n.rf);
      }).Bf(r);
    }
  }, Object.defineProperty(t.prototype, "id", {
    get: function get() {
      return this.if.path.S();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "ref", {
    get: function get() {
      return new zs(this.if, this.dd, this.rf);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "exists", {
    get: function get() {
      return null !== this.Ad;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "metadata", {
    get: function get() {
      return new Qs(this.Pd, this.Rd);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) throw Yo("isEqual", "DocumentSnapshot", 1, e);
    return this.dd === e.dd && this.Rd === e.Rd && this.if.isEqual(e.if) && (null === this.Ad ? null === e.Ad : this.Ad.isEqual(e.Ad)) && this.rf === e.rf;
  }, t;
}(),
    Hs =
/** @class */
function (t) {
  function n() {
    return null !== t && t.apply(this, arguments) || this;
  }

  return e.__extends(n, t), n.prototype.data = function (e) {
    return t.prototype.data.call(this, e);
  }, n;
}(Ws);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:


function Ks(t, e, n, r, i, o, s) {
  var u;

  if (i.M()) {
    if ("array-contains"
    /* ARRAY_CONTAINS */
    === o || "array-contains-any"
    /* ARRAY_CONTAINS_ANY */
    === o) throw new D(S.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");

    if ("in"
    /* IN */
    === o || "not-in"
    /* NOT_IN */
    === o) {
      Xs(s, o);

      for (var a = [], c = 0, h = s; c < h.length; c++) {
        var f = h[c];
        a.push(Zs(r, t, f));
      }

      u = {
        arrayValue: {
          values: a
        }
      };
    } else u = Zs(r, t, s);
  } else "in"
  /* IN */
  !== o && "not-in"
  /* NOT_IN */
  !== o && "array-contains-any"
  /* ARRAY_CONTAINS_ANY */
  !== o || Xs(s, o), u = Ns(n, e, s,
  /* allowArrays= */
  "in"
  /* IN */
  === o || "not-in"
  /* NOT_IN */
  === o);

  var l = wn.create(i, o, u);
  return function (t, e) {
    if (e._n()) {
      var n = t.ln();
      if (null !== n && !n.isEqual(e.field)) throw new D(S.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
      var r = t.un();
      null !== r && $s(t, e.field, r);
    }

    var i = t.fn(
    /**
    * Given an operator, returns the set of operators that cannot be used with it.
    *
    * Operators in a query must adhere to the following set of rules:
    * 1. Only one array operator is allowed.
    * 2. Only one disjunctive operator is allowed.
    * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
    * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
    *
    * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
    * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
    */
    function (t) {
      switch (t) {
        case "!="
        /* NOT_EQUAL */
        :
          return ["!="
          /* NOT_EQUAL */
          , "not-in"
          /* NOT_IN */
          ];

        case "array-contains"
        /* ARRAY_CONTAINS */
        :
          return ["array-contains"
          /* ARRAY_CONTAINS */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          , "not-in"
          /* NOT_IN */
          ];

        case "in"
        /* IN */
        :
          return ["array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          , "in"
          /* IN */
          , "not-in"
          /* NOT_IN */
          ];

        case "array-contains-any"
        /* ARRAY_CONTAINS_ANY */
        :
          return ["array-contains"
          /* ARRAY_CONTAINS */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          , "in"
          /* IN */
          , "not-in"
          /* NOT_IN */
          ];

        case "not-in"
        /* NOT_IN */
        :
          return ["array-contains"
          /* ARRAY_CONTAINS */
          , "array-contains-any"
          /* ARRAY_CONTAINS_ANY */
          , "in"
          /* IN */
          , "not-in"
          /* NOT_IN */
          , "!="
          /* NOT_EQUAL */
          ];

        default:
          return [];
      }
    }(e.op));
    if (null !== i) // Special case when it's a duplicate op to give a slightly clearer error message.
      throw i === e.op ? new D(S.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new D(S.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
  }(t, l), l;
}

function Ys(t, e, n) {
  if (null !== t.startAt) throw new D(S.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
  if (null !== t.endAt) throw new D(S.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
  var r = new Pn(e, n);
  return function (t, e) {
    if (null === t.un()) {
      // This is the first order by. It must match any inequality.
      var n = t.ln();
      null !== n && $s(t, n, e.field);
    }
  }(t, r), r
  /**
  * Create a Bound from a query and a document.
  *
  * Note that the Bound will always include the key of the document
  * and so only the provided document will compare equal to the returned
  * position.
  *
  * Will throw if the document does not contain all fields of the order by
  * of the query or if any of the fields in the order by are an uncommitted
  * server timestamp.
  */

  /**
  * Parses the given documentIdValue into a ReferenceValue, throwing
  * appropriate errors if the value is anything other than a DocumentReference
  * or String, or if the string is malformed.
  */
  ;
}

function Zs(t, e, n) {
  if ("string" == typeof n) {
    if ("" === n) throw new D(S.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
    if (!an(e) && -1 !== n.indexOf("/")) throw new D(S.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
    var r = e.path.child(P.k(n));
    if (!V.j(r)) throw new D(S.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
    return Ut(t, new V(r));
  }

  if (n instanceof vs) return Ut(t, n.if);
  throw new D(S.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Wo(n) + ".");
}
/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */


function Xs(t, e) {
  if (!Array.isArray(t) || 0 === t.length) throw new D(S.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
  if (t.length > 10) throw new D(S.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");

  if ("in"
  /* IN */
  === e || "array-contains-any"
  /* ARRAY_CONTAINS_ANY */
  === e) {
    if (t.indexOf(null) >= 0) throw new D(S.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
    if (t.filter(function (t) {
      return Number.isNaN(t);
    }).length > 0) throw new D(S.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
  }
}

function $s(t, e, n) {
  if (!n.isEqual(e)) throw new D(S.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

function Js(t) {
  if (t.cn() && 0 === t.en.length) throw new D(S.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

var tu =
/** @class */
function () {
  function t(t, e, n) {
    this.gd = t, this.firestore = e, this.rf = n;
  }

  return t.prototype.where = function (e, n, r) {
    // TODO(ne-queries): Add 'not-in' and '!=' to validation.
    var i;
    Vo("Query.where", arguments, 3), Ho("Query.where", 3, r), i = "not-in" === n || "!=" === n ? n : Bo("Query.where", ["<"
    /* LESS_THAN */
    , "<="
    /* LESS_THAN_OR_EQUAL */
    , "=="
    /* EQUAL */
    , ">="
    /* GREATER_THAN_OR_EQUAL */
    , ">"
    /* GREATER_THAN */
    , "array-contains"
    /* ARRAY_CONTAINS */
    , "in"
    /* IN */
    , "array-contains-any"
    /* ARRAY_CONTAINS_ANY */
    ], 2, n);
    var o = ks("Query.where", e),
        s = Ks(this.gd, "Query.where", this.firestore.rd, this.firestore.sf, o, i, r);
    return new t(function (t, e) {
      var n = t.filters.concat([e]);
      return new on(t.path, t.collectionGroup, t.en.slice(), n, t.limit, t.nn, t.startAt, t.endAt);
    }(this.gd, s), this.firestore, this.rf);
  }, t.prototype.orderBy = function (e, n) {
    var r;
    if (Co("Query.orderBy", arguments, 1, 2), Mo("Query.orderBy", "non-empty string", 2, n), void 0 === n || "asc" === n) r = "asc"
    /* ASCENDING */
    ;else {
      if ("desc" !== n) throw new D(S.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
      r = "desc"
      /* DESCENDING */
      ;
    }
    var i = ks("Query.orderBy", e),
        o = Ys(this.gd, i, r);
    return new t(function (t, e) {
      // TODO(dimond): validate that orderBy does not list the same key twice.
      var n = t.en.concat([e]);
      return new on(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.nn, t.startAt, t.endAt);
    }(this.gd, o), this.firestore, this.rf);
  }, t.prototype.limit = function (e) {
    return Vo("Query.limit", arguments, 1), qo("Query.limit", "number", 1, e), Zo("Query.limit", 1, e), new t(fn(this.gd, e, "F"
    /* First */
    ), this.firestore, this.rf);
  }, t.prototype.limitToLast = function (e) {
    return Vo("Query.limitToLast", arguments, 1), qo("Query.limitToLast", "number", 1, e), Zo("Query.limitToLast", 1, e), new t(fn(this.gd, e, "L"
    /* Last */
    ), this.firestore, this.rf);
  }, t.prototype.startAt = function (e) {
    for (var n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
    }

    Uo("Query.startAt", arguments, 1);
    var i = this.Vd("Query.startAt", e, n,
    /*before=*/
    !0);
    return new t(ln(this.gd, i), this.firestore, this.rf);
  }, t.prototype.startAfter = function (e) {
    for (var n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
    }

    Uo("Query.startAfter", arguments, 1);
    var i = this.Vd("Query.startAfter", e, n,
    /*before=*/
    !1);
    return new t(ln(this.gd, i), this.firestore, this.rf);
  }, t.prototype.endBefore = function (e) {
    for (var n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
    }

    Uo("Query.endBefore", arguments, 1);
    var i = this.Vd("Query.endBefore", e, n,
    /*before=*/
    !0);
    return new t(pn(this.gd, i), this.firestore, this.rf);
  }, t.prototype.endAt = function (e) {
    for (var n = [], r = 1; r < arguments.length; r++) {
      n[r - 1] = arguments[r];
    }

    Uo("Query.endAt", arguments, 1);
    var i = this.Vd("Query.endAt", e, n,
    /*before=*/
    !1);
    return new t(pn(this.gd, i), this.firestore, this.rf);
  }, t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) throw Yo("isEqual", "Query", 1, e);
    return this.firestore === e.firestore && dn(this.gd, e.gd) && this.rf === e.rf;
  }, t.prototype.withConverter = function (e) {
    return new t(this.gd, this.firestore, e);
  },
  /** Helper function to create a bound from a document or fields */
  t.prototype.Vd = function (t, n, r, i) {
    if (Ho(t, 1, n), n instanceof Ws) return Vo(t, e.__spreadArrays([n], r), 1), function (t, e, n, r, i) {
      if (!r) throw new D(S.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "()."); // Because people expect to continue/end a query at the exact document
      // provided, we need to use the implicit sort order rather than the explicit
      // sort order, because it's guaranteed to contain the document key. That way
      // the position becomes unambiguous and the query continues/ends exactly at
      // the provided document. Without the key (by using the explicit sort
      // orders), multiple documents could match the position, yielding duplicate
      // results.

      for (var o = [], s = 0, u = cn(t); s < u.length; s++) {
        var a = u[s];
        if (a.field.M()) o.push(Ut(e, r.key));else {
          var c = r.field(a.field);
          if (Tt(c)) throw new D(S.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');

          if (null === c) {
            var h = a.field.F();
            throw new D(S.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
          }

          o.push(c);
        }
      }

      return new Dn(o, i);
    }(this.gd, this.firestore.sf, t, n.Ad, i);
    var o = [n].concat(r);
    return function (t, e, n, r, i, o) {
      // Use explicit order by's because it has to match the query the user made
      var s = t.en;
      if (i.length > s.length) throw new D(S.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");

      for (var u = [], a = 0; a < i.length; a++) {
        var c = i[a];

        if (s[a].field.M()) {
          if ("string" != typeof c) throw new D(S.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + _typeof(c));
          if (!an(t) && -1 !== c.indexOf("/")) throw new D(S.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
          var h = t.path.child(P.k(c));
          if (!V.j(h)) throw new D(S.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
          var f = new V(h);
          u.push(Ut(e, f));
        } else {
          var l = Ns(n, r, c);
          u.push(l);
        }
      }

      return new Dn(u, o);
    }(this.gd, this.firestore.sf, this.firestore.rd, t, o, i);
  }, t.prototype.onSnapshot = function () {
    for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) {
      i[o] = arguments[o];
    }

    Co("Query.onSnapshot", arguments, 1, 4);
    var s = {},
        u = 0;

    if ("object" != _typeof(i[u]) || Po(i[u]) || (Ko("Query.onSnapshot", s = i[u], ["includeMetadataChanges"]), Go("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), u++), Po(i[u])) {
      var a = i[u];
      i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
    } else qo("Query.onSnapshot", "function", u, i[u]), Mo("Query.onSnapshot", "function", u + 1, i[u + 1]), Mo("Query.onSnapshot", "function", u + 2, i[u + 2]);

    var c = {
      next: function next(t) {
        i[u] && i[u](new eu(r.firestore, r.gd, t, r.rf));
      },
      error: i[u + 1],
      complete: i[u + 2]
    };
    return Js(this.gd), this.firestore.Xf().listen(this.gd, s, c);
  }, t.prototype.get = function (t) {
    var e = this;
    Co("Query.get", arguments, 0, 1), ou("Query.get", t), Js(this.gd);
    var n = this.firestore.Xf();
    return (t && "cache" === t.source ? n.xf(this.gd) : n.Of(this.gd, t)).then(function (t) {
      return new eu(e.firestore, e.gd, t, e.rf);
    });
  }, t;
}(),
    eu =
/** @class */
function () {
  function t(t, e, n, r) {
    this.dd = t, this.yd = e, this.pd = n, this.rf = r, this.bd = null, this.vd = null, this.metadata = new Qs(n.hasPendingWrites, n.fromCache);
  }

  return Object.defineProperty(t.prototype, "docs", {
    get: function get() {
      var t = [];
      return this.forEach(function (e) {
        return t.push(e);
      }), t;
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "empty", {
    get: function get() {
      return this.pd.docs._();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(t.prototype, "size", {
    get: function get() {
      return this.pd.docs.size;
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.forEach = function (t, e) {
    var n = this;
    Co("QuerySnapshot.forEach", arguments, 1, 2), qo("QuerySnapshot.forEach", "function", 1, t), this.pd.docs.forEach(function (r) {
      t.call(e, n.Sd(r, n.metadata.fromCache, n.pd.qt.has(r.key)));
    });
  }, Object.defineProperty(t.prototype, "query", {
    get: function get() {
      return new tu(this.yd, this.dd, this.rf);
    },
    enumerable: !1,
    configurable: !0
  }), t.prototype.docChanges = function (t) {
    t && (Ko("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), Go("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
    var e = !(!t || !t.includeMetadataChanges);
    if (e && this.pd.Ut) throw new D(S.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
    return this.bd && this.vd === e || (this.bd =
    /**
    * Calculates the array of firestore.DocumentChange's for a given ViewSnapshot.
    *
    * Exported for testing.
    *
    * @param snapshot The ViewSnapshot that represents the expected state.
    * @param includeMetadataChanges Whether to include metadata changes.
    * @param converter A factory function that returns a QueryDocumentSnapshot.
    * @return An objecyt that matches the firestore.DocumentChange API.
    */
    function (t, e, n) {
      if (t.Lt._()) {
        // Special case the first snapshot because index calculation is easy and
        // fast
        var r = 0;
        return t.docChanges.map(function (e) {
          var i = n(e.doc, t.fromCache, t.qt.has(e.doc.key));
          return e.doc, {
            type: "added",
            doc: i,
            oldIndex: -1,
            newIndex: r++
          };
        });
      } // A DocumentSet that is updated incrementally as changes are applied to use
      // to lookup the index of a document.


      var i = t.Lt;
      return t.docChanges.filter(function (t) {
        return e || 3
        /* Metadata */
        !== t.type;
      }).map(function (e) {
        var r = n(e.doc, t.fromCache, t.qt.has(e.doc.key)),
            o = -1,
            s = -1;
        return 0
        /* Added */
        !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 1
        /* Removed */
        !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
          type: uu(e.type),
          doc: r,
          oldIndex: o,
          newIndex: s
        };
      });
    }(this.pd, e, this.Sd.bind(this)), this.vd = e), this.bd;
  },
  /** Check the equality. The call can be very expensive. */
  t.prototype.isEqual = function (e) {
    if (!(e instanceof t)) throw Yo("isEqual", "QuerySnapshot", 1, e);
    return this.dd === e.dd && dn(this.yd, e.yd) && this.pd.isEqual(e.pd) && this.rf === e.rf;
  }, t.prototype.Sd = function (t, e, n) {
    return new Hs(this.dd, t.key, t, e, n, this.rf);
  }, t;
}(),
    nu =
/** @class */
function (t) {
  function n(e, n, r) {
    var i = this;
    if ((i = t.call(this, un(e), n, r) || this).Dd = e, e.length % 2 != 1) throw new D(S.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.F() + " has " + e.length);
    return i;
  }

  return e.__extends(n, t), Object.defineProperty(n.prototype, "id", {
    get: function get() {
      return this.gd.path.S();
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "parent", {
    get: function get() {
      var t = this.gd.path.p();
      return t._() ? null : new zs(new V(t), this.firestore,
      /* converter= */
      null);
    },
    enumerable: !1,
    configurable: !0
  }), Object.defineProperty(n.prototype, "path", {
    get: function get() {
      return this.gd.path.F();
    },
    enumerable: !1,
    configurable: !0
  }), n.prototype.doc = function (t) {
    Co("CollectionReference.doc", arguments, 0, 1), // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    0 === arguments.length && (t = g.t()), qo("CollectionReference.doc", "non-empty string", 1, t);
    var e = P.k(t);
    return zs._d(this.gd.path.child(e), this.firestore, this.rf);
  }, n.prototype.add = function (t) {
    Vo("CollectionReference.add", arguments, 1), qo("CollectionReference.add", "object", 1, this.rf ? this.rf.toFirestore(t) : t);
    var e = this.doc();
    return e.set(t).then(function () {
      return e;
    });
  }, n.prototype.withConverter = function (t) {
    return new n(this.Dd, this.firestore, t);
  }, n;
}(tu);

function ru(t, e) {
  if (void 0 === e) return {
    merge: !1
  };
  if (Ko(t, e, ["merge", "mergeFields"]), Go(t, "boolean", "merge", e.merge), function (t, e, n, r, i) {
    void 0 !== r && function (t, e, n, r, i) {
      if (!(r instanceof Array)) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + Wo(r));

      for (var o = 0; o < r.length; ++o) {
        if (!i(r[o])) throw new D(S.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + Wo(r[o]));
      }
    }(t, e, n, r, i);
  }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function (t) {
    return "string" == typeof t || t instanceof rs;
  }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new D(S.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
  return e;
}

function iu(t, e) {
  return void 0 === e ? {} : (Ko(t, e, ["serverTimestamps"]), jo(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e);
}

function ou(t, e) {
  Mo(t, "object", 1, e), e && (Ko(t, e, ["source"]), jo(t, 0, "source", e.source, ["default", "server", "cache"]));
}

function su(t, e, n) {
  if (e instanceof vs) {
    if (e.firestore !== n) throw new D(S.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return e;
  }

  throw Yo(t, "DocumentReference", 1, e);
}

function uu(t) {
  switch (t) {
    case 0
    /* Added */
    :
      return "added";

    case 2
    /* Modified */
    :
    case 3
    /* Metadata */
    :
      return "modified";

    case 1
    /* Removed */
    :
      return "removed";

    default:
      return p();
  }
}
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */


function au(t, e, n) {
  // Cast to `any` in order to satisfy the union type constraint on
  // toFirestore().
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var cu = {
  Firestore: Gs,
  GeoPoint: ds,
  Timestamp: x,
  Blob: es,
  Transaction: js,
  WriteBatch: Bs,
  DocumentReference: zs,
  DocumentSnapshot: Ws,
  Query: tu,
  QueryDocumentSnapshot: Hs,
  QuerySnapshot: eu,
  CollectionReference: nu,
  FieldPath: rs,
  FieldValue: ls,
  setLogLevel: Gs.setLogLevel,
  CACHE_SIZE_UNLIMITED: Ms
};
/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */

function hu(t) {
  !function (t, e) {
    t.INTERNAL.registerComponent(new s.Component("firestore", function (t) {
      return function (t, e) {
        var n = new Lo(),
            r = new ko(n);
        return new Gs(t, e, r, n);
      }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
    }, "PUBLIC"
    /* PUBLIC */
    ).setServiceProps(Object.assign({}, cu)));
  }(t), t.registerVersion("@firebase/firestore", "1.16.5");
}

hu(n), exports.__PRIVATE_registerFirestore = hu;
},{"tslib":"node_modules/tslib/tslib.es6.js","@firebase/app":"node_modules/@firebase/app/dist/index.cjs.js","@firebase/logger":"node_modules/@firebase/logger/dist/index.esm.js","@firebase/util":"node_modules/@firebase/util/dist/index.cjs.js","@firebase/webchannel-wrapper":"node_modules/@firebase/webchannel-wrapper/dist/index.esm.js","@firebase/component":"node_modules/@firebase/component/dist/index.cjs.js","process":"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/node_modules/process/browser.js"}],"node_modules/firebase/firestore/dist/index.esm.js":[function(require,module,exports) {
"use strict";

require("@firebase/firestore");
},{"@firebase/firestore":"node_modules/@firebase/firestore/dist/index.cjs.js"}],"scripts/auth.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* FIREBASE INIT */
_app.default.initializeApp({
  apiKey: "AIzaSyAvG9Dd3Wecyzc9jby8yiC0z210sZBjmvI",
  authDomain: "project-manathan-781227.firebaseapp.com",
  databaseURL: "https://project-manathan-781227.firebaseio.com",
  projectId: "project-manathan-781227",
  storageBucket: "project-manathan-781227.appspot.com",
  messagingSenderId: "697524608485",
  appId: "1:697524608485:web:c5990129bf8b6c3643230c",
  measurementId: "G-TVDE4JMC09"
});

var auth = _app.default.auth();

exports.auth = auth;

var db = _app.default.firestore();
/* CURRENT USER */


exports.db = db;
auth.onAuthStateChanged(function (user) {
  console.log(user === null || user === void 0 ? void 0 : user.email);
}); // LOG-IN

var signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', function (e) {
  e.preventDefault(); //Get user info

  var email = signupForm['signup-email'].value;
  var password = signupForm['signup-password'].value; //Sign in the user

  auth.createUserWithEmailAndPassword(email, password).then(function (res) {
    var modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
}); // LOG-OUT

var logout = document.querySelector('#logout');
logout.addEventListener('click', function (e) {
  e.preventDefault();
  auth.signOut();
}); // LOGIN

var loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var email = loginForm['login-email'].value;
  var password = loginForm['login-password'].value;
  auth.signInWithEmailAndPassword(email, password).then(function (res) {
    var modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
}); //CREATE A NEW GUIDE

var createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', function (e) {
  console.log("form submitted...");
  e.preventDefault();
  db.collection('guides').add({
    title: createForm['title'].value,
    content: createForm['content'].value
  }).then(function () {
    var modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(function (e) {
    console.log(e.message);
  });
});
},{"firebase/app":"node_modules/firebase/app/dist/index.cjs.js","firebase/auth":"node_modules/firebase/auth/dist/index.esm.js","firebase/firestore":"node_modules/firebase/firestore/dist/index.esm.js"}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49977" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/auth.js"], null)
//# sourceMappingURL=/auth.cf5ea8ba.js.map