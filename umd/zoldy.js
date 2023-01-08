(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Zoldy = {}));
})(this, (function (exports) { 'use strict';

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof$1(obj) {
    "@babel/helpers - typeof";

    return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof$1(obj);
  }

  function _toPrimitive$1(input, hint) {
    if (_typeof$1(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof$1(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey$1(arg) {
    var key = _toPrimitive$1(arg, "string");
    return _typeof$1(key) === "symbol" ? key : String(key);
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
    }
  }
  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty$1(obj, key, value) {
    key = _toPropertyKey$1(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator$1(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }

  function createCommonjsModule$1(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1$1 = createCommonjsModule$1(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1$1 = createCommonjsModule$1(function (module) {
  var _typeof = _typeof_1$1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime$1 = regeneratorRuntime$1$1();
  var regenerator$1 = runtime$1;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime$1;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime$1;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime$1);
    }
  }

  var WrappedValue_OPAQUE = Symbol();
  var Void = Symbol();

  function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$2(arr);
  }

  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableSpread$1();
  }

  var RakunContextManagerImpl = /*#__PURE__*/function () {
    function RakunContextManagerImpl() {
      _classCallCheck(this, RakunContextManagerImpl);
      _defineProperty(this, "items", []);
    }
    _createClass(RakunContextManagerImpl, [{
      key: "getValue",
      value: function getValue(context) {
        var _this$items$filter$;
        return Promise.resolve((_this$items$filter$ = this.items.filter(function (item) {
          return item.context === context;
        })[0]) === null || _this$items$filter$ === void 0 ? void 0 : _this$items$filter$.value);
      }
    }, {
      key: "setValue",
      value: function setValue(context, value) {
        this.items = [].concat(_toConsumableArray$1(this.items.filter(function (item) {
          return item.context != context;
        })), [{
          context: context,
          value: value
        }]);
        return Promise.resolve(Void);
      }
    }]);
    return RakunContextManagerImpl;
  }();

  function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toArray$1(arr) {
    return _arrayWithHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$2(arr) || _nonIterableRest$1();
  }

  function _asyncIterator(iterable) { var method, async, sync, retry = 2; for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) { if (async && null != (method = iterable[async])) return method.call(iterable); if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable)); async = "@@asyncIterator", sync = "@@iterator"; } throw new TypeError("Object is not async iterable"); }
  function AsyncFromSyncIterator(s) { function AsyncFromSyncIteratorContinuation(r) { if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object.")); var done = r.done; return Promise.resolve(r.value).then(function (value) { return { value: value, done: done }; }); } return AsyncFromSyncIterator = function AsyncFromSyncIterator(s) { this.s = s, this.n = s.next; }, AsyncFromSyncIterator.prototype = { s: null, n: null, next: function next() { return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments)); }, "return": function _return(value) { var ret = this.s["return"]; return void 0 === ret ? Promise.resolve({ value: value, done: !0 }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments)); }, "throw": function _throw(value) { var thr = this.s["return"]; return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments)); } }, new AsyncFromSyncIterator(s); }
  var fromAsyncIterator = function fromAsyncIterator(execute) {
    return new RakunAsyncIteratorImpl(execute);
  };
  var just = function just() {
    for (var _len = arguments.length, promises = new Array(_len), _key = 0; _key < _len; _key++) {
      promises[_key] = arguments[_key];
    }
    return fromCallback(function () {
      return promises;
    });
  };
  var fromArray = function fromArray(values) {
    return fromCallback(function () {
      return values;
    });
  };
  var then = function then() {
    return fromCallback(function () {
      return [Void];
    });
  };
  var empty = function empty() {
    return fromCallback(function () {
      return [];
    });
  };
  var zip = function zip() {
    for (var _len2 = arguments.length, sources = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      sources[_key2] = arguments[_key2];
    }
    return fromAsyncIterator(function (ctx) {
      var finish = false;
      return _defineProperty({}, Symbol.asyncIterator, function () {
        var asyncIterator = {
          next: function next() {
            return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee() {
              var _value;
              return regenerator$1.wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (finish) {
                      _context.next = 6;
                      break;
                    }
                    finish = true;
                    _context.next = 4;
                    return Promise.all(sources.map(function (source) {
                      return source.iterator(ctx).next();
                    })).then(function (array) {
                      return array.map(function (item) {
                        return item.done ? null : item.value;
                      });
                    });
                  case 4:
                    _value = _context.sent;
                    return _context.abrupt("return", {
                      done: false,
                      value: _value
                    });
                  case 6:
                    return _context.abrupt("return", {
                      done: true,
                      value: null
                    });
                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }))();
          }
        };
        return asyncIterator;
      });
    });
  };
  var error = function error(_error) {
    return fromCallback( /*#__PURE__*/_asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee2() {
      return regenerator$1.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            throw _error;
          case 1:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
  };
  var fromCallback = function fromCallback() {
    for (var _len3 = arguments.length, callbacks = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      callbacks[_key3] = arguments[_key3];
    }
    return fromAsyncIterator(function (ctx) {
      var values = null;
      return _defineProperty({}, Symbol.asyncIterator, function () {
        var asyncIterator = {
          next: function next() {
            return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee3() {
              var _values, _values2, value, rest;
              return regenerator$1.wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    if (values) {
                      _context3.next = 4;
                      break;
                    }
                    _context3.next = 3;
                    return Promise.resolve(callbacks.map(function (callback) {
                      return Promise.resolve(callback(ctx));
                    })).then(function (a) {
                      return Promise.all(a);
                    }).then(function (a) {
                      return Promise.all(a.flat().map(function (e) {
                        return Promise.resolve(e);
                      }));
                    });
                  case 3:
                    values = _context3.sent;
                  case 4:
                    if (!(!values || values.length == 0)) {
                      _context3.next = 6;
                      break;
                    }
                    return _context3.abrupt("return", {
                      done: true,
                      value: null
                    });
                  case 6:
                    _values = values, _values2 = _toArray$1(_values), value = _values2[0], rest = _values2.slice(1);
                    values = rest;
                    return _context3.abrupt("return", {
                      done: false,
                      value: value
                    });
                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }))();
          }
        };
        return asyncIterator;
      });
    });
  };
  var RakunAsyncIteratorImpl = /*#__PURE__*/function () {
    function RakunAsyncIteratorImpl(callback) {
      _classCallCheck(this, RakunAsyncIteratorImpl);
      this.callback = callback;
      _defineProperty(this, WrappedValue_OPAQUE, 'asyncIterator');
    }
    _createClass(RakunAsyncIteratorImpl, [{
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        var _this = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this.iterator(ctx);
          var index = 0;
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee4() {
                  var item;
                  return regenerator$1.wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return it.next();
                      case 2:
                        item = _context4.sent;
                        if (!(item.done && index == 0)) {
                          _context4.next = 8;
                          break;
                        }
                        it = source.iterator(ctx);
                        _context4.next = 7;
                        return it.next();
                      case 7:
                        item = _context4.sent;
                      case 8:
                        index++;
                        return _context4.abrupt("return", item);
                      case 10:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return this.switchIfEmpty(fromCallback(function () {
          return [value];
        }));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this2 = this;
        for (var _len4 = arguments.length, sources = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          sources[_key4] = arguments[_key4];
        }
        return fromAsyncIterator(function (ctx) {
          var it = _this2.iterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee5() {
                  var item, value;
                  return regenerator$1.wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return it.next();
                      case 2:
                        item = _context5.sent;
                        if (!item.done) {
                          _context5.next = 5;
                          break;
                        }
                        return _context5.abrupt("return", item);
                      case 5:
                        _context5.t0 = [item.value];
                        _context5.t1 = _toConsumableArray$1;
                        _context5.next = 9;
                        return Promise.all(sources.map(function (source) {
                          return source.iterator(ctx).next();
                        })).then(function (array) {
                          return array.map(function (item) {
                            return item.done ? null : item.value;
                          });
                        });
                      case 9:
                        _context5.t2 = _context5.sent;
                        _context5.t3 = (0, _context5.t1)(_context5.t2);
                        value = _context5.t0.concat.call(_context5.t0, _context5.t3);
                        return _context5.abrupt("return", {
                          done: item.done,
                          value: value
                        });
                      case 13:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this3 = this;
        for (var _len5 = arguments.length, sourceFns = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          sourceFns[_key5] = arguments[_key5];
        }
        return fromAsyncIterator(function (ctx) {
          var it = _this3.iterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee6() {
                  var item, value;
                  return regenerator$1.wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return it.next();
                      case 2:
                        item = _context6.sent;
                        if (!item.done) {
                          _context6.next = 5;
                          break;
                        }
                        return _context6.abrupt("return", item);
                      case 5:
                        _context6.t0 = [item.value];
                        _context6.t1 = _toConsumableArray$1;
                        _context6.next = 9;
                        return Promise.all(sourceFns.map(function (fn) {
                          return fn(item.value).iterator(ctx).next();
                        })).then(function (array) {
                          return array.map(function (item) {
                            return item.done ? null : item.value;
                          });
                        });
                      case 9:
                        _context6.t2 = _context6.sent;
                        _context6.t3 = (0, _context6.t1)(_context6.t2);
                        value = _context6.t0.concat.call(_context6.t0, _context6.t3);
                        return _context6.abrupt("return", {
                          done: item.done,
                          value: value
                        });
                      case 13:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        var _this4 = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this4.iterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee7() {
                  var item, b;
                  return regenerator$1.wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return it.next();
                      case 2:
                        item = _context7.sent;
                        if (!item.done) {
                          _context7.next = 5;
                          break;
                        }
                        return _context7.abrupt("return", item);
                      case 5:
                        _context7.next = 7;
                        return fn(item.value).iterator(ctx);
                      case 7:
                        _context7.next = 9;
                        return _context7.sent.next();
                      case 9:
                        b = _context7.sent;
                        if (b.value) {
                          _context7.next = 14;
                          break;
                        }
                        _context7.next = 13;
                        return asyncIterator.next();
                      case 13:
                        return _context7.abrupt("return", _context7.sent);
                      case 14:
                        return _context7.abrupt("return", item);
                      case 15:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        var _this5 = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this5.iterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee8() {
                  var item, b;
                  return regenerator$1.wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return it.next();
                      case 2:
                        item = _context8.sent;
                        if (!item.done) {
                          _context8.next = 5;
                          break;
                        }
                        return _context8.abrupt("return", item);
                      case 5:
                        b = fn(item.value);
                        if (b) {
                          _context8.next = 10;
                          break;
                        }
                        _context8.next = 9;
                        return asyncIterator.next();
                      case 9:
                        return _context8.abrupt("return", _context8.sent);
                      case 10:
                        return _context8.abrupt("return", item);
                      case 11:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        var sourceOld = this;
        return fromAsyncIterator(function (ctx) {
          var finish = false;
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee9() {
                  return regenerator$1.wrap(function _callee9$(_context9) {
                    while (1) switch (_context9.prev = _context9.next) {
                      case 0:
                        if (finish) {
                          _context9.next = 5;
                          break;
                        }
                        finish = true;
                        _context9.next = 4;
                        return sourceOld.block(ctx);
                      case 4:
                        return _context9.abrupt("return", {
                          value: value
                        });
                      case 5:
                        return _context9.abrupt("return", {
                          done: true,
                          value: null
                        });
                      case 6:
                      case "end":
                        return _context9.stop();
                    }
                  }, _callee9);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "then",
      value: function then(source) {
        if (!source) return this.thenReturn(Void);
        var sourceOld = this;
        return fromAsyncIterator(function (ctx) {
          var finish = false;
          var it2 = source.iterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee10() {
                  var item2;
                  return regenerator$1.wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        if (finish) {
                          _context10.next = 4;
                          break;
                        }
                        finish = true;
                        _context10.next = 4;
                        return sourceOld.block(ctx);
                      case 4:
                        _context10.next = 6;
                        return it2.next();
                      case 6:
                        item2 = _context10.sent;
                        if (!item2.done) {
                          _context10.next = 9;
                          break;
                        }
                        return _context10.abrupt("return", item2);
                      case 9:
                        return _context10.abrupt("return", item2);
                      case 10:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        var _this6 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var iterator = _this6.iterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee11() {
                  return regenerator$1.wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.prev = 0;
                        _context11.next = 3;
                        return iterator.next();
                      case 3:
                        return _context11.abrupt("return", _context11.sent);
                      case 6:
                        _context11.prev = 6;
                        _context11.t0 = _context11["catch"](0);
                        if (!(_context11.t0 instanceof errorType)) {
                          _context11.next = 12;
                          break;
                        }
                        _context11.next = 11;
                        return fn(_context11.t0).iterator(ctx).next();
                      case 11:
                        return _context11.abrupt("return", _context11.sent);
                      case 12:
                        throw _context11.t0;
                      case 13:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11, null, [[0, 6]]);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        var _this7 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var iterator = _this7.iterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee12() {
                  var item;
                  return regenerator$1.wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        _context12.next = 2;
                        return iterator.next();
                      case 2:
                        item = _context12.sent;
                        if (!item.done) {
                          handler(item.value);
                        }
                        return _context12.abrupt("return", item);
                      case 5:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        var _this8 = this;
        return fromAsyncIterator(function (ctx) {
          var it = _this8.iterator(ctx);
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee13() {
                  return regenerator$1.wrap(function _callee13$(_context13) {
                    while (1) switch (_context13.prev = _context13.next) {
                      case 0:
                        _context13.prev = 0;
                        _context13.next = 3;
                        return it.next();
                      case 3:
                        return _context13.abrupt("return", _context13.sent);
                      case 6:
                        _context13.prev = 6;
                        _context13.t0 = _context13["catch"](0);
                        handler(_context13.t0);
                        throw _context13.t0;
                      case 10:
                      case "end":
                        return _context13.stop();
                    }
                  }, _callee13, null, [[0, 6]]);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        var _this9 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var it = _this9.iterator(ctx);
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee14() {
                  var item;
                  return regenerator$1.wrap(function _callee14$(_context14) {
                    while (1) switch (_context14.prev = _context14.next) {
                      case 0:
                        _context14.next = 2;
                        return it.next();
                      case 2:
                        item = _context14.sent;
                        if (!item.done) {
                          _context14.next = 5;
                          break;
                        }
                        return _context14.abrupt("return", item);
                      case 5:
                        _context14.t0 = item.done;
                        _context14.next = 8;
                        return fn(item.value);
                      case 8:
                        _context14.t1 = _context14.sent;
                        return _context14.abrupt("return", {
                          done: _context14.t0,
                          value: _context14.t1
                        });
                      case 10:
                      case "end":
                        return _context14.stop();
                    }
                  }, _callee14);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        var _this10 = this;
        return fromAsyncIterator(function (ctx) {
          return _defineProperty({}, Symbol.asyncIterator, function () {
            var iterator = _this10.iterator(ctx);
            var item = null; // (1)
            var iterator2 = null; // (1)
            var asyncIterator = {
              next: function next() {
                return _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee15() {
                  var item2;
                  return regenerator$1.wrap(function _callee15$(_context15) {
                    while (1) switch (_context15.prev = _context15.next) {
                      case 0:
                        if (!(item == null)) {
                          _context15.next = 4;
                          break;
                        }
                        _context15.next = 3;
                        return iterator.next();
                      case 3:
                        item = _context15.sent;
                      case 4:
                        if (!item.done) {
                          _context15.next = 6;
                          break;
                        }
                        return _context15.abrupt("return", {
                          done: true,
                          value: item.value
                        });
                      case 6:
                        if (iterator2 == null) {
                          iterator2 = fn(item.value).iterator(ctx);
                        }
                        _context15.next = 9;
                        return iterator2.next();
                      case 9:
                        item2 = _context15.sent;
                        if (!item2.done) {
                          _context15.next = 18;
                          break;
                        }
                        iterator2 = null;
                        item = null;
                        _context15.next = 15;
                        return asyncIterator.next();
                      case 15:
                        return _context15.abrupt("return", _context15.sent);
                      case 18:
                        return _context15.abrupt("return", {
                          done: item2.done,
                          value: item2.value
                        });
                      case 19:
                      case "end":
                        return _context15.stop();
                    }
                  }, _callee15);
                }))();
              }
            };
            return asyncIterator;
          });
        });
      }
    }, {
      key: "blockFirst",
      value: function () {
        var _blockFirst = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee16(contextManager) {
          var array;
          return regenerator$1.wrap(function _callee16$(_context16) {
            while (1) switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.block(contextManager);
              case 2:
                array = _context16.sent;
                return _context16.abrupt("return", array[0]);
              case 4:
              case "end":
                return _context16.stop();
            }
          }, _callee16, this);
        }));
        function blockFirst(_x) {
          return _blockFirst.apply(this, arguments);
        }
        return blockFirst;
      }()
    }, {
      key: "block",
      value: function () {
        var _block = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee17(contextManager) {
          var arr, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, i;
          return regenerator$1.wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
              case 0:
                arr = [];
                _iteratorAbruptCompletion = false;
                _didIteratorError = false;
                _context17.prev = 3;
                _context17.t0 = _asyncIterator;
                _context17.next = 7;
                return this.callback(contextManager);
              case 7:
                _context17.t1 = _context17.sent;
                _iterator = (0, _context17.t0)(_context17.t1);
              case 9:
                _context17.next = 11;
                return _iterator.next();
              case 11:
                if (!(_iteratorAbruptCompletion = !(_step = _context17.sent).done)) {
                  _context17.next = 17;
                  break;
                }
                i = _step.value;
                arr.push(i);
              case 14:
                _iteratorAbruptCompletion = false;
                _context17.next = 9;
                break;
              case 17:
                _context17.next = 23;
                break;
              case 19:
                _context17.prev = 19;
                _context17.t2 = _context17["catch"](3);
                _didIteratorError = true;
                _iteratorError = _context17.t2;
              case 23:
                _context17.prev = 23;
                _context17.prev = 24;
                if (!(_iteratorAbruptCompletion && _iterator["return"] != null)) {
                  _context17.next = 28;
                  break;
                }
                _context17.next = 28;
                return _iterator["return"]();
              case 28:
                _context17.prev = 28;
                if (!_didIteratorError) {
                  _context17.next = 31;
                  break;
                }
                throw _iteratorError;
              case 31:
                return _context17.finish(28);
              case 32:
                return _context17.finish(23);
              case 33:
                return _context17.abrupt("return", arr);
              case 34:
              case "end":
                return _context17.stop();
            }
          }, _callee17, this, [[3, 19, 23, 33], [24,, 28, 32]]);
        }));
        function block(_x2) {
          return _block.apply(this, arguments);
        }
        return block;
      }()
    }, {
      key: "iterator",
      value: function iterator(ctx) {
        return this.callback(ctx)[Symbol.asyncIterator]();
      }
    }]);
    return RakunAsyncIteratorImpl;
  }();
  var StaticAsyncIteratorImpl = /*#__PURE__*/_createClass(function StaticAsyncIteratorImpl() {
    _classCallCheck(this, StaticAsyncIteratorImpl);
    _defineProperty(this, "then", then);
    _defineProperty(this, "empty", empty);
    _defineProperty(this, "zip", zip);
    _defineProperty(this, "just", just);
    _defineProperty(this, "error", error);
    _defineProperty(this, "fromArray", fromArray);
    _defineProperty(this, "fromCallback", fromCallback);
  });

  var asyncIterator = new StaticAsyncIteratorImpl();

  var fromSourceBuild$1 = function fromSourceBuild(sourceBuild) {
    return new RakunMonoImpl(sourceBuild);
  };
  var RakunStaticMonoImpl = /*#__PURE__*/function () {
    function RakunStaticMonoImpl() {
      _classCallCheck(this, RakunStaticMonoImpl);
      _defineProperty(this, "fromSourceBuild", fromSourceBuild$1);
    }
    _createClass(RakunStaticMonoImpl, [{
      key: "fromCallback",
      value: function fromCallback() {
        for (var _len = arguments.length, callbacks = new Array(_len), _key = 0; _key < _len; _key++) {
          callbacks[_key] = arguments[_key];
        }
        return fromSourceBuild$1(asyncIterator.fromCallback.apply(asyncIterator, _toConsumableArray$1(callbacks.map(function (callback) {
          return function (ctx) {
            return Promise.all([callback(ctx)]);
          };
        }))));
      }
    }, {
      key: "then",
      value: function then() {
        return this.fromSourceBuild(asyncIterator.then());
      }
    }, {
      key: "empty",
      value: function empty() {
        return this.fromSourceBuild(asyncIterator.empty());
      }
    }, {
      key: "zip",
      value: function zip() {
        return this.fromSourceBuild(asyncIterator.zip.apply(asyncIterator, arguments));
      }
    }, {
      key: "just",
      value: function just(value) {
        return this.fromSourceBuild(asyncIterator.just(value));
      }
    }, {
      key: "fromPromise",
      value: function fromPromise(promise) {
        return this.fromSourceBuild(asyncIterator.just(promise));
      }
    }, {
      key: "error",
      value: function (_error) {
        function error(_x) {
          return _error.apply(this, arguments);
        }
        error.toString = function () {
          return _error.toString();
        };
        return error;
      }(function (error) {
        return this.fromSourceBuild(asyncIterator.error(error));
      })
    }]);
    return RakunStaticMonoImpl;
  }();
  var RakunMonoImpl = /*#__PURE__*/function () {
    function RakunMonoImpl(_asyncIterator) {
      _classCallCheck(this, RakunMonoImpl);
      this._asyncIterator = _asyncIterator;
      _defineProperty(this, WrappedValue_OPAQUE, "mono");
    }
    _createClass(RakunMonoImpl, [{
      key: "flatPipeMany",
      value: function flatPipeMany(fn) {
        return fromSourceBuild(this._asyncIterator.flatPipe(fn));
      }
    }, {
      key: "then",
      value: function then(source) {
        if (source) {
          if (source[WrappedValue_OPAQUE] == 'flux') {
            return fromSourceBuild(this._asyncIterator.then(source));
          } else {
            return fromSourceBuild$1(this._asyncIterator.then(source));
          }
        } else return fromSourceBuild$1(this._asyncIterator.then());
      }
    }, {
      key: "iterator",
      value: function iterator(ctx) {
        return this._asyncIterator.iterator(ctx);
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        return fromSourceBuild$1(this._asyncIterator.onErrorResume(errorType, fn));
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        return fromSourceBuild$1(this._asyncIterator.doOnNext(handler));
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        return fromSourceBuild$1(this._asyncIterator.doOnError(handler));
      }
    }, {
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        return fromSourceBuild$1(this._asyncIterator.switchIfEmpty(source));
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return fromSourceBuild$1(this._asyncIterator.defaultIfEmpty(value));
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this$_asyncIterator;
        return fromSourceBuild$1((_this$_asyncIterator = this._asyncIterator).zipWhen.apply(_this$_asyncIterator, arguments));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this$_asyncIterator2;
        return fromSourceBuild$1((_this$_asyncIterator2 = this._asyncIterator).zip.apply(_this$_asyncIterator2, arguments));
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        return fromSourceBuild$1(this._asyncIterator.pipe(fn));
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        return fromSourceBuild$1(this._asyncIterator.flatPipe(fn));
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        return fromSourceBuild$1(this._asyncIterator.thenReturn(value));
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return fromSourceBuild$1(this._asyncIterator.filter(fn));
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        return fromSourceBuild$1(this._asyncIterator.flatFilter(fn));
      }
    }, {
      key: "blockFirst",
      value: function blockFirst(contextManager) {
        return this._asyncIterator.blockFirst(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
      }
    }, {
      key: "block",
      value: function block(contextManager) {
        return this._asyncIterator.block(contextManager);
      }
    }]);
    return RakunMonoImpl;
  }();

  var fromSourceBuild = function fromSourceBuild(sourceBuild) {
    return new RakunFluxImpl(sourceBuild);
  };
  var RakunStaticFluxImpl = /*#__PURE__*/function () {
    function RakunStaticFluxImpl() {
      _classCallCheck(this, RakunStaticFluxImpl);
      _defineProperty(this, "fromSourceBuild", fromSourceBuild);
    }
    _createClass(RakunStaticFluxImpl, [{
      key: "fromCallback",
      value: function fromCallback() {
        return fromSourceBuild(asyncIterator.fromCallback.apply(asyncIterator, arguments));
      }
    }, {
      key: "fromPromise",
      value: function fromPromise(promise) {
        return fromSourceBuild(asyncIterator.fromArray(promise));
      }
    }, {
      key: "fromArray",
      value: function fromArray(values) {
        return fromSourceBuild(asyncIterator.fromArray(values));
      }
    }, {
      key: "just",
      value: function just() {
        for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
          values[_key] = arguments[_key];
        }
        return fromSourceBuild(asyncIterator.fromArray(values));
      }
    }]);
    return RakunStaticFluxImpl;
  }();
  var RakunFluxImpl = /*#__PURE__*/function () {
    function RakunFluxImpl(_asyncIterator) {
      _classCallCheck(this, RakunFluxImpl);
      this._asyncIterator = _asyncIterator;
      _defineProperty(this, WrappedValue_OPAQUE, 'flux');
    }
    _createClass(RakunFluxImpl, [{
      key: "then",
      value: function then(source) {
        if (source) {
          if (source[WrappedValue_OPAQUE] == 'mono') {
            return fromSourceBuild$1(this._asyncIterator.then(source));
          } else {
            return fromSourceBuild(this._asyncIterator.then(source));
          }
        } else return fromSourceBuild$1(this._asyncIterator.then());
      }
    }, {
      key: "array",
      value: function array() {
        var _this = this;
        return fromSourceBuild$1(asyncIterator.fromCallback( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator$1( /*#__PURE__*/regenerator$1.mark(function _callee(ctx) {
            return regenerator$1.wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _this._asyncIterator.block(ctx);
                case 2:
                  _context.t0 = _context.sent;
                  return _context.abrupt("return", [_context.t0]);
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()));
      }
    }, {
      key: "switchIfEmpty",
      value: function switchIfEmpty(source) {
        return fromSourceBuild(this._asyncIterator.switchIfEmpty(source));
      }
    }, {
      key: "defaultIfEmpty",
      value: function defaultIfEmpty(value) {
        return fromSourceBuild(this._asyncIterator.defaultIfEmpty(value));
      }
    }, {
      key: "onErrorResume",
      value: function onErrorResume(errorType, fn) {
        return fromSourceBuild(this._asyncIterator.onErrorResume(errorType, fn));
      }
    }, {
      key: "doOnNext",
      value: function doOnNext(handler) {
        return fromSourceBuild(this._asyncIterator.doOnNext(handler));
      }
    }, {
      key: "doOnError",
      value: function doOnError(handler) {
        return fromSourceBuild(this._asyncIterator.doOnError(handler));
      }
    }, {
      key: "zipWhen",
      value: function zipWhen() {
        var _this$_asyncIterator;
        return fromSourceBuild((_this$_asyncIterator = this._asyncIterator).zipWhen.apply(_this$_asyncIterator, arguments));
      }
    }, {
      key: "zip",
      value: function zip() {
        var _this$_asyncIterator2;
        return fromSourceBuild((_this$_asyncIterator2 = this._asyncIterator).zip.apply(_this$_asyncIterator2, arguments));
      }
    }, {
      key: "pipe",
      value: function pipe(fn) {
        return fromSourceBuild(this._asyncIterator.pipe(fn));
      }
    }, {
      key: "flatPipe",
      value: function flatPipe(fn) {
        return fromSourceBuild(this._asyncIterator.flatPipe(fn));
      }
    }, {
      key: "filter",
      value: function filter(fn) {
        return fromSourceBuild(this._asyncIterator.filter(fn));
      }
    }, {
      key: "flatFilter",
      value: function flatFilter(fn) {
        return fromSourceBuild(this._asyncIterator.flatFilter(fn));
      }
    }, {
      key: "thenReturn",
      value: function thenReturn(value) {
        return fromSourceBuild(this._asyncIterator.thenReturn(value));
      }
    }, {
      key: "blockFirst",
      value: function blockFirst(contextManager) {
        return this._asyncIterator.blockFirst(contextManager !== null && contextManager !== void 0 ? contextManager : new RakunContextManagerImpl());
      }
    }, {
      key: "block",
      value: function block(contextManager) {
        return this._asyncIterator.block(contextManager);
      }
    }, {
      key: "iterator",
      value: function iterator(ctx) {
        return this._asyncIterator.iterator(ctx);
      }
    }]);
    return RakunFluxImpl;
  }();

  var flux$1 = new RakunStaticFluxImpl();

  var mono$1 = new RakunStaticMonoImpl();

  var RakunContextImpl = /*#__PURE__*/function () {
    function RakunContextImpl(defualtValue) {
      _classCallCheck(this, RakunContextImpl);
      this.defualtValue = defualtValue;
    }
    _createClass(RakunContextImpl, [{
      key: "get",
      value: function get() {
        var _this = this;
        return mono$1.fromCallback(function (ctx) {
          return ctx.getValue(_this);
        });
      }
    }, {
      key: "define",
      value: function define(value) {
        var _this2 = this;
        return mono$1.fromCallback(function (ctx) {
          return ctx.setValue(_this2, value);
        });
      }
    }]);
    return RakunContextImpl;
  }();

  var RakunStaticContextImpl = /*#__PURE__*/function () {
    function RakunStaticContextImpl() {
      _classCallCheck(this, RakunStaticContextImpl);
    }
    _createClass(RakunStaticContextImpl, [{
      key: "create",
      value: function create(value) {
        return new RakunContextImpl(value);
      }
    }]);
    return RakunStaticContextImpl;
  }();
  var context$1 = new RakunStaticContextImpl();
  var flux = flux$1;
  var mono = mono$1;
  var context = context$1;

  var zoldyPathParentProvider = context.create(null);
  var zoldySnapshotProvider = context.create(null);

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
        args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        _next(undefined);
      });
    };
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
  }
  module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  var regeneratorRuntime$1 = createCommonjsModule(function (module) {
  var _typeof = _typeof_1["default"];
  function _regeneratorRuntime() {
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
      return exports;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
      return Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }), obj[key];
    }
    try {
      define({}, "");
    } catch (err) {
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
      return defineProperty(generator, "_invoke", {
        value: makeInvokeMethod(innerFn, self, context)
      }), generator;
    }
    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }
    exports.wrap = wrap;
    var ContinueSentinel = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }
    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if ("throw" !== record.type) {
          var result = record.arg,
            value = result.value;
          return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          }) : PromiseImpl.resolve(value).then(function (unwrapped) {
            result.value = unwrapped, resolve(result);
          }, function (error) {
            return invoke("throw", error, resolve, reject);
          });
        }
        reject(record.arg);
      }
      var previousPromise;
      defineProperty(this, "_invoke", {
        value: function value(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
      });
    }
    function makeInvokeMethod(innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }
    function maybeInvokeDelegate(delegate, context) {
      var methodName = context.method,
        method = delegate.iterator[methodName];
      if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
      var record = tryCatch(method, delegate.iterator, context.arg);
      if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
      var info = record.arg;
      return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
    }
    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };
      1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal", delete record.arg, entry.completion = record;
    }
    function Context(tryLocsList) {
      this.tryEntries = [{
        tryLoc: "root"
      }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) return iteratorMethod.call(iterable);
        if ("function" == typeof iterable.next) return iterable;
        if (!isNaN(iterable.length)) {
          var i = -1,
            next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
              return next.value = undefined, next.done = !0, next;
            };
          return next.next = next;
        }
      }
      return {
        next: doneResult
      };
    }
    function doneResult() {
      return {
        value: undefined,
        done: !0
      };
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
      value: GeneratorFunctionPrototype,
      configurable: !0
    }), defineProperty(GeneratorFunctionPrototype, "constructor", {
      value: GeneratorFunction,
      configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
      var ctor = "function" == typeof genFun && genFun.constructor;
      return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
    }, exports.mark = function (genFun) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
    }, exports.awrap = function (arg) {
      return {
        __await: arg
      };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
      return this;
    }), define(Gp, "toString", function () {
      return "[object Generator]";
    }), exports.keys = function (val) {
      var object = Object(val),
        keys = [];
      for (var key in object) keys.push(key);
      return keys.reverse(), function next() {
        for (; keys.length;) {
          var key = keys.pop();
          if (key in object) return next.value = key, next.done = !1, next;
        }
        return next.done = !0, next;
      };
    }, exports.values = values, Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ("throw" === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ("root" === entry.tryLoc) return handle("end");
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error("try statement without catch or finally");
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if ("throw" === record.type) throw record.arg;
        return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ("throw" === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
      }
    }, exports;
  }
  module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  });

  // TODO(Babel 8): Remove this file.

  var runtime = regeneratorRuntime$1();
  var regenerator = runtime;

  // Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
      globalThis.regeneratorRuntime = runtime;
    } else {
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  }

  function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];{var i=Y[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}}function r(n){return !!n&&!!n[Q]}function t(n){var r;return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t;}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function _(){return U||n(0),U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r);}function O(n){g(n),n.p.forEach(S),n.p=null;}function g(n){n===U&&(U=n.l);}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s){if(c===o&&n(5),r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1;}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t);}function z(n,r){var t=n[Q];return (t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return (t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1;}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t));})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return !0;E(n),k(n);}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return "length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?O(c):g(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l);}return f}n(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q];(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n;},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);var produce = fn;

  var eventemitter3 = createCommonjsModule(function (module) {

  var has = Object.prototype.hasOwnProperty
    , prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }

    var listener = new EE(fn, context || emitter, once)
      , evt = prefix ? prefix + event : event;

    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];

    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = []
      , events
      , name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event
      , handlers = this._events[evt];

    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];

    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }

    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event
      , listeners = this._events[evt];

    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;

    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }

    var listeners = this._events[evt];

    if (listeners.fn) {
      if (
        listeners.fn === fn &&
        (!once || listeners.once) &&
        (!context || listeners.context === context)
      ) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (
          listeners[i].fn !== fn ||
          (once && !listeners[i].once) ||
          (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else clearEvent(this, evt);
    }

    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
  });

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
  var initialValue = {
    dependencies: [],
    state: "loading",
    value: null
  };
  var ZoldyStoreImpl = /*#__PURE__*/function () {
    function ZoldyStoreImpl() {
      var _this = this;
      var states = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var events = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      _classCallCheck$1(this, ZoldyStoreImpl);
      this.states = states;
      this.events = events;
      _defineProperty$1(this, "inProcess", false);
      _defineProperty$1(this, "getState", function (path) {
        var _this$states$path;
        return (_this$states$path = _this.states[path]) !== null && _this$states$path !== void 0 ? _this$states$path : initialValue;
      });
    }
    _createClass$1(ZoldyStoreImpl, [{
      key: "getEvents",
      value: function getEvents() {
        return this.events;
      }
    }, {
      key: "setEvents",
      value: function setEvents(events) {
        this.events = events;
      }
    }, {
      key: "getValue",
      value: function getValue(path) {
        var _this$states$path2;
        return (_this$states$path2 = this.states[path]) === null || _this$states$path2 === void 0 ? void 0 : _this$states$path2.value;
      }
    }, {
      key: "addDependency",
      value: function addDependency(path, dependency) {
        this.states = produce(this.states, function (draft) {
          var _draft$path;
          draft[path] = produce((_draft$path = draft[path]) !== null && _draft$path !== void 0 ? _draft$path : initialValue, function (d) {
            if (!d.dependencies.includes(dependency)) {
              d.dependencies = [].concat(_toConsumableArray(d.dependencies), [dependency]);
            }
          });
        });
      }
    }, {
      key: "hasDependency",
      value: function hasDependency(path, dependency) {
        var _this$states$path$dep, _this$states$path3;
        var dependencies = (_this$states$path$dep = (_this$states$path3 = this.states[path]) === null || _this$states$path3 === void 0 ? void 0 : _this$states$path3.dependencies) !== null && _this$states$path$dep !== void 0 ? _this$states$path$dep : [];
        return dependencies.includes(dependency);
      }
    }, {
      key: "set",
      value: function set(path, value) {
        var _this2 = this;
        var _produce = produce([this.states, this.events], function (draft) {
            _this2._recipeSet(path, value, draft);
          }),
          _produce2 = _slicedToArray(_produce, 2),
          data = _produce2[0],
          events = _produce2[1];
        this.states = data;
        this.events = events;
      }
    }, {
      key: "getDependencies",
      value: function getDependencies(path) {
        var _this$states$path$dep2, _this$states$path4;
        return (_this$states$path$dep2 = (_this$states$path4 = this.states[path]) === null || _this$states$path4 === void 0 ? void 0 : _this$states$path4.dependencies) !== null && _this$states$path$dep2 !== void 0 ? _this$states$path$dep2 : [];
      }
    }, {
      key: "setDependency",
      value: function setDependency(path, dependencies) {
        this.states = produce(this.states, function (draft) {
          var _draft$path2;
          draft[path] = produce((_draft$path2 = draft[path]) !== null && _draft$path2 !== void 0 ? _draft$path2 : initialValue, function (d) {
            d.dependencies = dependencies;
          });
        });
      }
    }, {
      key: "_recipeReset",
      value: function _recipeReset(path, _ref) {
        var _data$path$dependenci, _data$path;
        var _ref2 = _slicedToArray(_ref, 2),
          data = _ref2[0],
          events = _ref2[1];
        if (path in data) {
          data[path] = produce(data[path], function (d) {
            d.state = "loading";
            d.value = null;
          });
        }
        var _iterator = _createForOfIteratorHelper((_data$path$dependenci = (_data$path = data[path]) === null || _data$path === void 0 ? void 0 : _data$path.dependencies) !== null && _data$path$dependenci !== void 0 ? _data$path$dependenci : []),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var p = _step.value;
            this._recipeReset(p, [data, events]);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        events.push([path, data[path]]);
      }
    }, {
      key: "_recipeSet",
      value: function _recipeSet(path, value, _ref3) {
        var _states$path, _states$path$dependen, _states$path2;
        var _ref4 = _slicedToArray(_ref3, 2),
          states = _ref4[0],
          events = _ref4[1];
        states[path] = produce((_states$path = states[path]) !== null && _states$path !== void 0 ? _states$path : initialValue, function (d) {
          d.state = "hasValue";
          d.value = value;
        });
        var dependencies = (_states$path$dependen = (_states$path2 = states[path]) === null || _states$path2 === void 0 ? void 0 : _states$path2.dependencies) !== null && _states$path$dependen !== void 0 ? _states$path$dependen : [];
        var _iterator2 = _createForOfIteratorHelper(dependencies),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var p = _step2.value;
            this._recipeReset(p, [states, events]);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        events.push([path, states[path]]);
      }
    }, {
      key: "reset",
      value: function reset(path) {
        var _this3 = this;
        var _produce3 = produce([this.states, this.events], function (draft) {
            _this3._recipeReset(path, draft);
          }),
          _produce4 = _slicedToArray(_produce3, 2),
          states = _produce4[0],
          events = _produce4[1];
        this.states = states;
        this.events = events;
      }
    }]);
    return ZoldyStoreImpl;
  }();
  var ZoldySnapshotImpl = /*#__PURE__*/function () {
    function ZoldySnapshotImpl(cache, parent) {
      _classCallCheck$1(this, ZoldySnapshotImpl);
      this.cache = cache;
      this.parent = parent;
      _defineProperty$1(this, "eventEmitter", void 0);
      this.eventEmitter = new eventemitter3();
    }
    _createClass$1(ZoldySnapshotImpl, [{
      key: "reset",
      value: function reset(path) {
        var snapshot = this;
        return snapshot.getCacheState(path).flatPipe(function () {
          snapshot.cache.reset(path);
          if (snapshot.parent) {
            return snapshot.parent.reset(path);
          } else {
            return mono.then();
          }
        }).flatPipe(function () {
          return snapshot.emitEvents();
        });
      }
    }, {
      key: "emitEvents",
      value: function emitEvents() {
        var _this4 = this;
        var snapshot = this;
        var events = snapshot.cache.getEvents();
        events.forEach(function (e) {
          return _this4.eventEmitter.emit(e[0], e[1]);
        });
        snapshot.cache.setEvents([]);
        return mono.then();
      }
    }, {
      key: "addDependency",
      value: function addDependency(path, dependency) {
        var snapshot = this;
        return mono.fromCallback(function () {
          snapshot.cache.addDependency(path, dependency);
          return Void;
        });
      }
    }, {
      key: "hasDependency",
      value: function hasDependency(path, dependency) {
        var snapshot = this;
        return mono.fromCallback(function () {
          return snapshot.cache.hasDependency(path, dependency);
        });
      }
    }, {
      key: "getDependencies",
      value: function getDependencies(path) {
        var snapshot = this;
        return flux.fromCallback( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
          return regenerator.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", snapshot.cache.getDependencies(path));
              case 1:
              case "end":
                return _context.stop();
            }
          }, _callee);
        })));
      }
    }, {
      key: "setCacheValue",
      value: function setCacheValue(path, value) {
        var snapshot = this;
        return mono.fromCallback(function () {
          snapshot.cache.set(path, value);
          return Void;
        });
      }
    }, {
      key: "getCacheState",
      value: function getCacheState(path) {
        var snapshot = this;
        return mono.just(path).pipe(snapshot.cache.getState).flatPipe(function (state) {
          if (state.state != 'hasValue' && snapshot.parent) {
            return snapshot.parent.getCacheState(path);
          }
          return mono.just(snapshot.cache.getState(path));
        });
      }
    }, {
      key: "getState",
      value: function getState(_ref6) {
        var _this5 = this;
        var get = _ref6.get,
          path = _ref6.path;
        var snapshot = this;
        return snapshot.getCacheState(path).flatPipe(function (state) {
          if (state.state == "hasValue") {
            return mono.just(state);
          } else {
            return _this5._get(path, get).then(snapshot.getCacheState(path));
          }
        });
      }
    }, {
      key: "_get",
      value: function _get(path, get) {
        var _this6 = this;
        var snapshot = this;
        return zoldyPathParentProvider.get().flatPipe(function (value) {
          if (value) {
            return _this6.addDependency(path, value).thenReturn(value);
          }
          return mono.just(value);
        }).flatPipe(function (oldPathParent) {
          return zoldyPathParentProvider.define(path).then(get().flatPipe(function (v) {
            return snapshot.setCacheValue(path, v).then(zoldyPathParentProvider.define(oldPathParent));
          }));
        }).flatPipe(function () {
          return snapshot.emitEvents();
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(path, callback) {
        var snapshot = this;
        return mono.fromCallback(function () {
          snapshot.eventEmitter.on(path, callback);
          return callback;
        }).flatPipe(function (cb) {
          return mono.just(function () {
            snapshot.eventEmitter.removeListener(path, cb);
            return mono.then();
          });
        });
      }
    }, {
      key: "set",
      value: function set(_ref7) {
        var path = _ref7.path,
          value = _ref7.value;
        var snapshot = this;
        return snapshot.setCacheValue(path, value).then().flatPipe(function () {
          return snapshot.emitEvents();
        });
      }
    }]);
    return ZoldySnapshotImpl;
  }();

  var getSnapshotOrThrow = function getSnapshotOrThrow(zoldySnapshot) {
    return zoldySnapshot != null ? mono.just(zoldySnapshot) : mono.error(new Error("NotFound ZoldySnapshot"));
  };
  var createSnapshot = function createSnapshot(parent) {
    return new ZoldySnapshotImpl(new ZoldyStoreImpl({}), parent);
  };

  var ZoldyAtomImpl = /*#__PURE__*/function () {
    function ZoldyAtomImpl(config) {
      _classCallCheck$1(this, ZoldyAtomImpl);
      _defineProperty$1(this, "_default", void 0);
      _defineProperty$1(this, "path", void 0);
      this.path = config['path'];
      this._default = config['default'];
    }
    _createClass$1(ZoldyAtomImpl, [{
      key: "get",
      value: function get() {
        return this.getState().pipe(function (s) {
          return s.value;
        });
      }
    }, {
      key: "getState",
      value: function getState() {
        var _this = this;
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.getState({
            get: function get() {
              return _this._default();
            },
            path: path
          });
        });
      }
    }, {
      key: "subscribe",
      value: function subscribe(callback) {
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.subscribe(path, callback);
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.reset(path);
        });
      }
    }, {
      key: "set",
      value: function set(value) {
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.set({
            value: value,
            path: path
          });
        });
      }
    }]);
    return ZoldyAtomImpl;
  }();

  var atom$1 = function atom(config) {
    return new ZoldyAtomImpl({
      "default": function _default() {
        return config["default"];
      },
      path: config.path
    });
  };

  function _toArray(arr) {
    return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableRest();
  }

  var _encode = function encode(fields, fieldNameArray, defualtValue) {
    var _fieldNameArray = _toArray(fieldNameArray),
      fieldName = _fieldNameArray[0],
      fieldNameArrayRest = _fieldNameArray.slice(1);
    if (fieldName) {
      if ('encode' in fields) {
        return fields.encode;
      } else {
        var field = Object.keys(fields).filter(function (_fieldName) {
          return _fieldName == fieldName;
        })[0];
        return _encode(fields[field], fieldNameArrayRest, defualtValue);
      }
    }
    return function () {
      return defualtValue;
    };
  };
  var ZoldyParamsImpl = /*#__PURE__*/function () {
    function ZoldyParamsImpl(path, fields) {
      _classCallCheck$1(this, ZoldyParamsImpl);
      this.path = path;
      this.fields = fields;
    }
    _createClass$1(ZoldyParamsImpl, [{
      key: "encode",
      value: function encode(params) {
        var _this = this;
        return this.path.replace(/(:\w+)/g, function (param) {
          var fieldNameArray = param.substring(1).split(".");
          return _encode(_this.fields, fieldNameArray, param)(params);
        });
      }
    }]);
    return ZoldyParamsImpl;
  }();

  var atomfamily = function atomfamily(config) {
    return function (params) {
      var paramsBuild = new ZoldyParamsImpl(config.path, config.params);
      return atom$1({
        "default": config["default"](params),
        path: paramsBuild.encode(params)
      });
    };
  };

  var ZoldySelectorValueImpl = /*#__PURE__*/function () {
    function ZoldySelectorValueImpl(config) {
      _classCallCheck$1(this, ZoldySelectorValueImpl);
      _defineProperty$1(this, "_get", void 0);
      _defineProperty$1(this, "path", void 0);
      this.path = config['path'];
      this._get = config['get'];
    }
    _createClass$1(ZoldySelectorValueImpl, [{
      key: "subscribe",
      value: function subscribe(callback) {
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.subscribe(path, callback);
        });
      }
    }, {
      key: "getState",
      value: function getState() {
        var _this = this;
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.getState({
            get: function get() {
              return _this["_get"];
            },
            path: path
          });
        });
      }
    }, {
      key: "get",
      value: function get() {
        return this.getState().pipe(function (s) {
          return s.value;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        var path = this.path;
        return zoldySnapshotProvider.get().flatPipe(getSnapshotOrThrow).flatPipe(function (zoldySnapshot) {
          return zoldySnapshot.reset(path);
        });
      }
    }]);
    return ZoldySelectorValueImpl;
  }();
  var ZoldySelectorStateImpl = /*#__PURE__*/function () {
    function ZoldySelectorStateImpl(config, zoldyValue) {
      _classCallCheck$1(this, ZoldySelectorStateImpl);
      this.zoldyValue = zoldyValue;
      _defineProperty$1(this, "_set", void 0);
      this._set = config.set;
    }
    _createClass$1(ZoldySelectorStateImpl, [{
      key: "path",
      get: function get() {
        return this.zoldyValue.path;
      }
    }, {
      key: "getState",
      value: function getState() {
        return this.zoldyValue.getState();
      }
    }, {
      key: "subscribe",
      value: function subscribe(callback) {
        return this.zoldyValue.subscribe(callback);
      }
    }, {
      key: "get",
      value: function get() {
        return this.zoldyValue.get();
      }
    }, {
      key: "set",
      value: function set(value) {
        return this._set(value);
      }
    }, {
      key: "reset",
      value: function reset() {
        return this.zoldyValue.reset();
      }
    }]);
    return ZoldySelectorStateImpl;
  }();

  var selector$1 = function selector(config) {
    if ("set" in config) {
      return new ZoldySelectorStateImpl(config, new ZoldySelectorValueImpl(config));
    } else {
      return new ZoldySelectorValueImpl(config);
    }
  };

  var selectorFamily$1 = function selectorFamily(config) {
    return function (params) {
      var paramsBuild = new ZoldyParamsImpl(config.path, config.params);
      if ("set" in config) {
        return selector$1({
          get: config.get(params),
          path: paramsBuild.encode(params),
          set: function set(v) {
            return config.set(params, v);
          }
        });
      } else {
        return selector$1({
          get: config.get(params),
          path: paramsBuild.encode(params)
        });
      }
    };
  };

  var paramString = {
    encode: function encode(v) {
      return v;
    },
    decode: function decode(v) {
      return v;
    }
  };
  var param$1 = {
    string: paramString
  };

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
  var ZoldyValue = /*#__PURE__*/_createClass$1(function ZoldyValue() {
    _classCallCheck$1(this, ZoldyValue);
    _defineProperty$1(this, "path", void 0);
  });
  var ZoldyState = /*#__PURE__*/function (_ZoldyValue) {
    _inherits(ZoldyState, _ZoldyValue);
    var _super = _createSuper(ZoldyState);
    function ZoldyState() {
      _classCallCheck$1(this, ZoldyState);
      return _super.apply(this, arguments);
    }
    return _createClass$1(ZoldyState);
  }(ZoldyValue);

  var index = {
    atomFamily: atomfamily,
    atom: atom$1,
    selector: selector$1
  };
  var atomFamily = atomfamily;
  var atom = atom$1;
  var param = param$1;
  var selector = selector$1;
  var selectorFamily = selectorFamily$1;

  exports.ZoldyState = ZoldyState;
  exports.ZoldyValue = ZoldyValue;
  exports.atom = atom;
  exports.atomFamily = atomFamily;
  exports.createSnapshot = createSnapshot;
  exports["default"] = index;
  exports.getSnapshotOrThrow = getSnapshotOrThrow;
  exports.param = param;
  exports.selector = selector;
  exports.selectorFamily = selectorFamily;
  exports.zoldyPathParentProvider = zoldyPathParentProvider;
  exports.zoldySnapshotProvider = zoldySnapshotProvider;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
