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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof2(exports)) === 'object' && ( false ? undefined : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof2(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _clipboardAction = __webpack_require__(1);

      var _clipboardAction2 = _interopRequireDefault(_clipboardAction);

      var _tinyEmitter = __webpack_require__(3);

      var _tinyEmitter2 = _interopRequireDefault(_tinyEmitter);

      var _goodListener = __webpack_require__(4);

      var _goodListener2 = _interopRequireDefault(_goodListener);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (_typeof2(call) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + _typeof2(superClass));
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      /**
       * Base class which takes one or more elements, adds event listeners to them,
       * and instantiates a new `ClipboardAction` on each click.
       */


      var Clipboard = function (_Emitter) {
        _inherits(Clipboard, _Emitter);
        /**
         * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
         * @param {Object} options
         */


        function Clipboard(trigger, options) {
          _classCallCheck(this, Clipboard);

          var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));

          _this.resolveOptions(options);

          _this.listenClick(trigger);

          return _this;
        }
        /**
         * Defines if attributes would be resolved using internal setter functions
         * or custom functions that were passed in the constructor.
         * @param {Object} options
         */


        _createClass(Clipboard, [{
          key: 'resolveOptions',
          value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
            this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
            this.text = typeof options.text === 'function' ? options.text : this.defaultText;
            this.container = _typeof(options.container) === 'object' ? options.container : document.body;
          }
          /**
           * Adds a click event listener to the passed trigger.
           * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
           */

        }, {
          key: 'listenClick',
          value: function listenClick(trigger) {
            var _this2 = this;

            this.listener = (0, _goodListener2.default)(trigger, 'click', function (e) {
              return _this2.onClick(e);
            });
          }
          /**
           * Defines a new `ClipboardAction` on each click event.
           * @param {Event} e
           */

        }, {
          key: 'onClick',
          value: function onClick(e) {
            var trigger = e.delegateTarget || e.currentTarget;

            if (this.clipboardAction) {
              this.clipboardAction = null;
            }

            this.clipboardAction = new _clipboardAction2.default({
              action: this.action(trigger),
              target: this.target(trigger),
              text: this.text(trigger),
              container: this.container,
              trigger: trigger,
              emitter: this
            });
          }
          /**
           * Default `action` lookup function.
           * @param {Element} trigger
           */

        }, {
          key: 'defaultAction',
          value: function defaultAction(trigger) {
            return getAttributeValue('action', trigger);
          }
          /**
           * Default `target` lookup function.
           * @param {Element} trigger
           */

        }, {
          key: 'defaultTarget',
          value: function defaultTarget(trigger) {
            var selector = getAttributeValue('target', trigger);

            if (selector) {
              return document.querySelector(selector);
            }
          }
          /**
           * Returns the support of the given action, or all actions if no action is
           * given.
           * @param {String} [action]
           */

        }, {
          key: 'defaultText',

          /**
           * Default `text` lookup function.
           * @param {Element} trigger
           */
          value: function defaultText(trigger) {
            return getAttributeValue('text', trigger);
          }
          /**
           * Destroy lifecycle.
           */

        }, {
          key: 'destroy',
          value: function destroy() {
            this.listener.destroy();

            if (this.clipboardAction) {
              this.clipboardAction.destroy();
              this.clipboardAction = null;
            }
          }
        }], [{
          key: 'isSupported',
          value: function isSupported() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
            var actions = typeof action === 'string' ? [action] : action;
            var support = !!document.queryCommandSupported;
            actions.forEach(function (action) {
              support = support && !!document.queryCommandSupported(action);
            });
            return support;
          }
        }]);

        return Clipboard;
      }(_tinyEmitter2.default);
      /**
       * Helper function to retrieve attribute value.
       * @param {String} suffix
       * @param {Element} element
       */


      function getAttributeValue(suffix, element) {
        var attribute = 'data-clipboard-' + suffix;

        if (!element.hasAttribute(attribute)) {
          return;
        }

        return element.getAttribute(attribute);
      }

      module.exports = Clipboard;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      "use strict";

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _select = __webpack_require__(2);

      var _select2 = _interopRequireDefault(_select);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /**
       * Inner class which performs selection from either `text` or `target`
       * properties and then executes copy or cut operations.
       */


      var ClipboardAction = function () {
        /**
         * @param {Object} options
         */
        function ClipboardAction(options) {
          _classCallCheck(this, ClipboardAction);

          this.resolveOptions(options);
          this.initSelection();
        }
        /**
         * Defines base properties passed from constructor.
         * @param {Object} options
         */


        _createClass(ClipboardAction, [{
          key: 'resolveOptions',
          value: function resolveOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.action = options.action;
            this.container = options.container;
            this.emitter = options.emitter;
            this.target = options.target;
            this.text = options.text;
            this.trigger = options.trigger;
            this.selectedText = '';
          }
          /**
           * Decides which selection strategy is going to be applied based
           * on the existence of `text` and `target` properties.
           */

        }, {
          key: 'initSelection',
          value: function initSelection() {
            if (this.text) {
              this.selectFake();
            } else if (this.target) {
              this.selectTarget();
            }
          }
          /**
           * Creates a fake textarea element, sets its value from `text` property,
           * and makes a selection on it.
           */

        }, {
          key: 'selectFake',
          value: function selectFake() {
            var _this = this;

            var isRTL = document.documentElement.getAttribute('dir') == 'rtl';
            this.removeFake();

            this.fakeHandlerCallback = function () {
              return _this.removeFake();
            };

            this.fakeHandler = this.container.addEventListener('click', this.fakeHandlerCallback) || true;
            this.fakeElem = document.createElement('textarea'); // Prevent zooming on iOS

            this.fakeElem.style.fontSize = '12pt'; // Reset box model

            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0'; // Move element out of screen horizontally

            this.fakeElem.style.position = 'absolute';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

            var yPosition = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = yPosition + 'px';
            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = this.text;
            this.container.appendChild(this.fakeElem);
            this.selectedText = (0, _select2.default)(this.fakeElem);
            this.copyText();
          }
          /**
           * Only removes the fake element after another click event, that way
           * a user can hit `Ctrl+C` to copy because selection still exists.
           */

        }, {
          key: 'removeFake',
          value: function removeFake() {
            if (this.fakeHandler) {
              this.container.removeEventListener('click', this.fakeHandlerCallback);
              this.fakeHandler = null;
              this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
              this.container.removeChild(this.fakeElem);
              this.fakeElem = null;
            }
          }
          /**
           * Selects the content from element passed on `target` property.
           */

        }, {
          key: 'selectTarget',
          value: function selectTarget() {
            this.selectedText = (0, _select2.default)(this.target);
            this.copyText();
          }
          /**
           * Executes the copy operation based on the current selection.
           */

        }, {
          key: 'copyText',
          value: function copyText() {
            var succeeded = void 0;

            try {
              succeeded = document.execCommand(this.action);
            } catch (err) {
              succeeded = false;
            }

            this.handleResult(succeeded);
          }
          /**
           * Fires an event based on the copy operation result.
           * @param {Boolean} succeeded
           */

        }, {
          key: 'handleResult',
          value: function handleResult(succeeded) {
            this.emitter.emit(succeeded ? 'success' : 'error', {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
          /**
           * Moves focus away from `target` and back to the trigger, removes current selection.
           */

        }, {
          key: 'clearSelection',
          value: function clearSelection() {
            if (this.trigger) {
              this.trigger.focus();
            }

            window.getSelection().removeAllRanges();
          }
          /**
           * Sets the `action` to be performed which can be either 'copy' or 'cut'.
           * @param {String} action
           */

        }, {
          key: 'destroy',

          /**
           * Destroy lifecycle.
           */
          value: function destroy() {
            this.removeFake();
          }
        }, {
          key: 'action',
          set: function set() {
            var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'copy';
            this._action = action;

            if (this._action !== 'copy' && this._action !== 'cut') {
              throw new Error('Invalid "action" value, use either "copy" or "cut"');
            }
          }
          /**
           * Gets the `action` property.
           * @return {String}
           */
          ,
          get: function get() {
            return this._action;
          }
          /**
           * Sets the `target` property using an element
           * that will be have its content copied.
           * @param {Element} target
           */

        }, {
          key: 'target',
          set: function set(target) {
            if (target !== undefined) {
              if (target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' && target.nodeType === 1) {
                if (this.action === 'copy' && target.hasAttribute('disabled')) {
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                }

                if (this.action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
                  throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                }

                this._target = target;
              } else {
                throw new Error('Invalid "target" value, use a valid Element');
              }
            }
          }
          /**
           * Gets the `target` property.
           * @return {String|HTMLElement}
           */
          ,
          get: function get() {
            return this._target;
          }
        }]);

        return ClipboardAction;
      }();

      module.exports = ClipboardAction;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      function select(element) {
        var selectedText;

        if (element.nodeName === 'SELECT') {
          element.focus();
          selectedText = element.value;
        } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
          var isReadOnly = element.hasAttribute('readonly');

          if (!isReadOnly) {
            element.setAttribute('readonly', '');
          }

          element.select();
          element.setSelectionRange(0, element.value.length);

          if (!isReadOnly) {
            element.removeAttribute('readonly');
          }

          selectedText = element.value;
        } else {
          if (element.hasAttribute('contenteditable')) {
            element.focus();
          }

          var selection = window.getSelection();
          var range = document.createRange();
          range.selectNodeContents(element);
          selection.removeAllRanges();
          selection.addRange(range);
          selectedText = selection.toString();
        }

        return selectedText;
      }

      module.exports = select;
      /***/
    },
    /* 3 */

    /***/
    function (module, exports) {
      function E() {// Keep this empty so it's easier to inherit from
        // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
      }

      E.prototype = {
        on: function on(name, callback, ctx) {
          var e = this.e || (this.e = {});
          (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
          });
          return this;
        },
        once: function once(name, callback, ctx) {
          var self = this;

          function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
          }

          ;
          listener._ = callback;
          return this.on(name, listener, ctx);
        },
        emit: function emit(name) {
          var data = [].slice.call(arguments, 1);
          var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
          var i = 0;
          var len = evtArr.length;

          for (i; i < len; i++) {
            evtArr[i].fn.apply(evtArr[i].ctx, data);
          }

          return this;
        },
        off: function off(name, callback) {
          var e = this.e || (this.e = {});
          var evts = e[name];
          var liveEvents = [];

          if (evts && callback) {
            for (var i = 0, len = evts.length; i < len; i++) {
              if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
            }
          } // Remove event from queue to prevent memory leak
          // Suggested by https://github.com/lazd
          // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910


          liveEvents.length ? e[name] = liveEvents : delete e[name];
          return this;
        }
      };
      module.exports = E;
      /***/
    },
    /* 4 */

    /***/
    function (module, exports, __webpack_require__) {
      var is = __webpack_require__(5);

      var delegate = __webpack_require__(6);
      /**
       * Validates all params and calls the right
       * listener function based on its target type.
       *
       * @param {String|HTMLElement|HTMLCollection|NodeList} target
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listen(target, type, callback) {
        if (!target && !type && !callback) {
          throw new Error('Missing required arguments');
        }

        if (!is.string(type)) {
          throw new TypeError('Second argument must be a String');
        }

        if (!is.fn(callback)) {
          throw new TypeError('Third argument must be a Function');
        }

        if (is.node(target)) {
          return listenNode(target, type, callback);
        } else if (is.nodeList(target)) {
          return listenNodeList(target, type, callback);
        } else if (is.string(target)) {
          return listenSelector(target, type, callback);
        } else {
          throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
        }
      }
      /**
       * Adds an event listener to a HTML element
       * and returns a remove listener function.
       *
       * @param {HTMLElement} node
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listenNode(node, type, callback) {
        node.addEventListener(type, callback);
        return {
          destroy: function destroy() {
            node.removeEventListener(type, callback);
          }
        };
      }
      /**
       * Add an event listener to a list of HTML elements
       * and returns a remove listener function.
       *
       * @param {NodeList|HTMLCollection} nodeList
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listenNodeList(nodeList, type, callback) {
        Array.prototype.forEach.call(nodeList, function (node) {
          node.addEventListener(type, callback);
        });
        return {
          destroy: function destroy() {
            Array.prototype.forEach.call(nodeList, function (node) {
              node.removeEventListener(type, callback);
            });
          }
        };
      }
      /**
       * Add an event listener to a selector
       * and returns a remove listener function.
       *
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @return {Object}
       */


      function listenSelector(selector, type, callback) {
        return delegate(document.body, selector, type, callback);
      }

      module.exports = listen;
      /***/
    },
    /* 5 */

    /***/
    function (module, exports) {
      /**
       * Check if argument is a HTML element.
       *
       * @param {Object} value
       * @return {Boolean}
       */
      exports.node = function (value) {
        return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
      };
      /**
       * Check if argument is a list of HTML elements.
       *
       * @param {Object} value
       * @return {Boolean}
       */


      exports.nodeList = function (value) {
        var type = Object.prototype.toString.call(value);
        return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
      };
      /**
       * Check if argument is a string.
       *
       * @param {Object} value
       * @return {Boolean}
       */


      exports.string = function (value) {
        return typeof value === 'string' || value instanceof String;
      };
      /**
       * Check if argument is a function.
       *
       * @param {Object} value
       * @return {Boolean}
       */


      exports.fn = function (value) {
        var type = Object.prototype.toString.call(value);
        return type === '[object Function]';
      };
      /***/

    },
    /* 6 */

    /***/
    function (module, exports, __webpack_require__) {
      var closest = __webpack_require__(7);
      /**
       * Delegates event to a selector.
       *
       * @param {Element} element
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @param {Boolean} useCapture
       * @return {Object}
       */


      function _delegate(element, selector, type, callback, useCapture) {
        var listenerFn = listener.apply(this, arguments);
        element.addEventListener(type, listenerFn, useCapture);
        return {
          destroy: function destroy() {
            element.removeEventListener(type, listenerFn, useCapture);
          }
        };
      }
      /**
       * Delegates event to a selector.
       *
       * @param {Element|String|Array} [elements]
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @param {Boolean} useCapture
       * @return {Object}
       */


      function delegate(elements, selector, type, callback, useCapture) {
        // Handle the regular Element usage
        if (typeof elements.addEventListener === 'function') {
          return _delegate.apply(null, arguments);
        } // Handle Element-less usage, it defaults to global delegation


        if (typeof type === 'function') {
          // Use `document` as the first parameter, then apply arguments
          // This is a short way to .unshift `arguments` without running into deoptimizations
          return _delegate.bind(null, document).apply(null, arguments);
        } // Handle Selector-based usage


        if (typeof elements === 'string') {
          elements = document.querySelectorAll(elements);
        } // Handle Array-like based usage


        return Array.prototype.map.call(elements, function (element) {
          return _delegate(element, selector, type, callback, useCapture);
        });
      }
      /**
       * Finds closest match and invokes callback.
       *
       * @param {Element} element
       * @param {String} selector
       * @param {String} type
       * @param {Function} callback
       * @return {Function}
       */


      function listener(element, selector, type, callback) {
        return function (e) {
          e.delegateTarget = closest(e.target, selector);

          if (e.delegateTarget) {
            callback.call(element, e);
          }
        };
      }

      module.exports = delegate;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      var DOCUMENT_NODE_TYPE = 9;
      /**
       * A polyfill for Element.matches()
       */

      if (typeof Element !== 'undefined' && !Element.prototype.matches) {
        var proto = Element.prototype;
        proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
      }
      /**
       * Finds the closest parent that matches a selector.
       *
       * @param {Element} element
       * @param {String} selector
       * @return {Function}
       */


      function closest(element, selector) {
        while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
          if (typeof element.matches === 'function' && element.matches(selector)) {
            return element;
          }

          element = element.parentNode;
        }
      }

      module.exports = closest;
      /***/
    }
    /******/
    ])
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.min.js":
/*!******************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.min.js ***!
  \******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return function (n) {
    var o = {};

    function r(t) {
      if (o[t]) return o[t].exports;
      var e = o[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
    }

    return r.m = n, r.c = o, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 0);
  }([function (t, e, n) {
    "use strict";

    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        i = function () {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      };
    }(),
        a = o(n(1)),
        c = o(n(3)),
        u = o(n(4));

    function o(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var l = function (t) {
      function o(t, e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, o);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));

        return n.resolveOptions(e), n.listenClick(t), n;
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(o, c.default), i(o, [{
        key: "resolveOptions",
        value: function value() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === r(t.container) ? t.container : document.body;
        }
      }, {
        key: "listenClick",
        value: function value(t) {
          var e = this;
          this.listener = (0, u.default)(t, "click", function (t) {
            return e.onClick(t);
          });
        }
      }, {
        key: "onClick",
        value: function value(t) {
          var e = t.delegateTarget || t.currentTarget;
          this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new a.default({
            action: this.action(e),
            target: this.target(e),
            text: this.text(e),
            container: this.container,
            trigger: e,
            emitter: this
          });
        }
      }, {
        key: "defaultAction",
        value: function value(t) {
          return s("action", t);
        }
      }, {
        key: "defaultTarget",
        value: function value(t) {
          var e = s("target", t);
          if (e) return document.querySelector(e);
        }
      }, {
        key: "defaultText",
        value: function value(t) {
          return s("text", t);
        }
      }, {
        key: "destroy",
        value: function value() {
          this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
        }
      }], [{
        key: "isSupported",
        value: function value() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
              e = "string" == typeof t ? [t] : t,
              n = !!document.queryCommandSupported;
          return e.forEach(function (t) {
            n = n && !!document.queryCommandSupported(t);
          }), n;
        }
      }]), o;
    }();

    function s(t, e) {
      var n = "data-clipboard-" + t;
      if (e.hasAttribute(n)) return e.getAttribute(n);
    }

    t.exports = l;
  }, function (t, e, n) {
    "use strict";

    var o,
        r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        i = function () {
      function o(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t;
      };
    }(),
        a = n(2),
        c = (o = a) && o.__esModule ? o : {
      default: o
    };

    var u = function () {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.resolveOptions(t), this.initSelection();
      }

      return i(e, [{
        key: "resolveOptions",
        value: function value() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
          this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = "";
        }
      }, {
        key: "initSelection",
        value: function value() {
          this.text ? this.selectFake() : this.target && this.selectTarget();
        }
      }, {
        key: "selectFake",
        value: function value() {
          var t = this,
              e = "rtl" == document.documentElement.getAttribute("dir");
          this.removeFake(), this.fakeHandlerCallback = function () {
            return t.removeFake();
          }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
          var n = window.pageYOffset || document.documentElement.scrollTop;
          this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, c.default)(this.fakeElem), this.copyText();
        }
      }, {
        key: "removeFake",
        value: function value() {
          this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
        }
      }, {
        key: "selectTarget",
        value: function value() {
          this.selectedText = (0, c.default)(this.target), this.copyText();
        }
      }, {
        key: "copyText",
        value: function value() {
          var e = void 0;

          try {
            e = document.execCommand(this.action);
          } catch (t) {
            e = !1;
          }

          this.handleResult(e);
        }
      }, {
        key: "handleResult",
        value: function value(t) {
          this.emitter.emit(t ? "success" : "error", {
            action: this.action,
            text: this.selectedText,
            trigger: this.trigger,
            clearSelection: this.clearSelection.bind(this)
          });
        }
      }, {
        key: "clearSelection",
        value: function value() {
          this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
        }
      }, {
        key: "destroy",
        value: function value() {
          this.removeFake();
        }
      }, {
        key: "action",
        set: function set() {
          var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "copy";
          if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
        },
        get: function get() {
          return this._action;
        }
      }, {
        key: "target",
        set: function set(t) {
          if (void 0 !== t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
            this._target = t;
          }
        },
        get: function get() {
          return this._target;
        }
      }]), e;
    }();

    t.exports = u;
  }, function (t, e) {
    t.exports = function (t) {
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(),
            r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
      }
      return e;
    };
  }, function (t, e) {
    function n() {}

    n.prototype = {
      on: function on(t, e, n) {
        var o = this.e || (this.e = {});
        return (o[t] || (o[t] = [])).push({
          fn: e,
          ctx: n
        }), this;
      },
      once: function once(t, e, n) {
        var o = this;

        function r() {
          o.off(t, r), e.apply(n, arguments);
        }

        return r._ = e, this.on(t, r, n);
      },
      emit: function emit(t) {
        for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {
          n[o].fn.apply(n[o].ctx, e);
        }

        return this;
      },
      off: function off(t, e) {
        var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
        if (o && e) for (var i = 0, a = o.length; i < a; i++) {
          o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        }
        return r.length ? n[t] = r : delete n[t], this;
      }
    }, t.exports = n;
  }, function (t, e, n) {
    var d = n(5),
        h = n(6);

    t.exports = function (t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!d.string(e)) throw new TypeError("Second argument must be a String");
      if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
      if (d.node(t)) return s = e, f = n, (l = t).addEventListener(s, f), {
        destroy: function destroy() {
          l.removeEventListener(s, f);
        }
      };
      if (d.nodeList(t)) return a = t, c = e, u = n, Array.prototype.forEach.call(a, function (t) {
        t.addEventListener(c, u);
      }), {
        destroy: function destroy() {
          Array.prototype.forEach.call(a, function (t) {
            t.removeEventListener(c, u);
          });
        }
      };
      if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
      var o, r, i, a, c, u, l, s, f;
    };
  }, function (t, n) {
    n.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, n.nodeList = function (t) {
      var e = Object.prototype.toString.call(t);
      return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
    }, n.string = function (t) {
      return "string" == typeof t || t instanceof String;
    }, n.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    var a = n(7);

    function i(t, e, n, o, r) {
      var i = function (e, n, t, o) {
        return function (t) {
          t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);
        };
      }.apply(this, arguments);

      return t.addEventListener(n, i, r), {
        destroy: function destroy() {
          t.removeEventListener(n, i, r);
        }
      };
    }

    t.exports = function (t, e, n, o, r) {
      return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return i(t, e, n, o, r);
      }));
    };
  }, function (t, e) {
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var n = Element.prototype;
      n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
    }

    t.exports = function (t, e) {
      for (; t && 9 !== t.nodeType;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode;
      }
    };
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-1!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/postcss-loader/src??ref--6-3!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-1!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/postcss-loader/src??ref--6-3!./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/themes/prism-okaidia.css":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-1!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/postcss-loader/src??ref--6-3!./node_modules/prismjs/themes/prism-okaidia.css ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/themes/prism.css":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-1!./node_modules/css-loader/dist/cjs.js??ref--6-2!./node_modules/postcss-loader/src??ref--6-3!./node_modules/prismjs/themes/prism.css ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/prismjs/components/prism-markdown.min.js":
/*!***************************************************************!*\
  !*** ./node_modules/prismjs/components/prism-markdown.min.js ***!
  \***************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

!function (d) {
  function n(n, e) {
    return n = n.replace(/<inner>/g, "(?:\\\\.|[^\\\\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))"), e && (n = n + "|" + n.replace(/_/g, "\\*")), RegExp("((?:^|[^\\\\])(?:\\\\{2})*)(?:" + n + ")");
  }

  var e = "(?:\\\\.|``.+?``|`[^`\r\\n]+`|[^\\\\|\r\\n`])+",
      t = "\\|?__(?:\\|__)+\\|?(?:(?:\r?\n|\r)|$)".replace(/__/g, e),
      a = "\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\r?\n|\r)";
  d.languages.markdown = d.languages.extend("markup", {}), d.languages.insertBefore("markdown", "prolog", {
    blockquote: {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    table: {
      pattern: RegExp("^" + t + a + "(?:" + t + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + t + a + ")(?:" + t + ")*$"),
          lookbehind: !0,
          inside: {
            "table-data": {
              pattern: RegExp(e),
              inside: d.languages.markdown
            },
            punctuation: /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + t + ")" + a + "$"),
          lookbehind: !0,
          inside: {
            punctuation: /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + t + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(e),
              alias: "important",
              inside: d.languages.markdown
            },
            punctuation: /\|/
          }
        }
      }
    },
    code: [{
      pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
      lookbehind: !0,
      alias: "keyword"
    }, {
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: !0,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
          lookbehind: !0
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: !0
        },
        punctuation: /```/
      }
    }],
    title: [{
      pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#+.+/m,
      lookbehind: !0,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    hr: {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    list: {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: !0,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        variable: {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: !0
        },
        string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        punctuation: /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    bold: {
      pattern: n("__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__", !0),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /\*\*|__/
      }
    },
    italic: {
      pattern: n("_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_", !0),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /[*_]/
      }
    },
    strike: {
      pattern: n("(~~?)(?:(?!~)<inner>)+?\\2", !1),
      lookbehind: !0,
      greedy: !0,
      inside: {
        content: {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: {}
        },
        punctuation: /~~?/
      }
    },
    url: {
      pattern: n('!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])', !1),
      lookbehind: !0,
      greedy: !0,
      inside: {
        variable: {
          pattern: /(\[)[^\]]+(?=\]$)/,
          lookbehind: !0
        },
        content: {
          pattern: /(^!?\[)[^\]]+(?=\])/,
          lookbehind: !0,
          inside: {}
        },
        string: {
          pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
        }
      }
    }
  }), ["url", "bold", "italic", "strike"].forEach(function (e) {
    ["url", "bold", "italic", "strike"].forEach(function (n) {
      e !== n && (d.languages.markdown[e].inside.content.inside[n] = d.languages.markdown[n]);
    });
  }), d.hooks.add("after-tokenize", function (n) {
    "markdown" !== n.language && "md" !== n.language || !function n(e) {
      if (e && "string" != typeof e) for (var t = 0, a = e.length; t < a; t++) {
        var i = e[t];

        if ("code" === i.type) {
          var r = i.content[1],
              o = i.content[3];

          if (r && o && "code-language" === r.type && "code-block" === o.type && "string" == typeof r.content) {
            var l = "language-" + r.content.trim().split(/\s+/)[0].toLowerCase();
            o.alias ? "string" == typeof o.alias ? o.alias = [o.alias, l] : o.alias.push(l) : o.alias = [l];
          }
        } else n(i.content);
      }
    }(n.tokens);
  }), d.hooks.add("wrap", function (n) {
    if ("code-block" === n.type) {
      for (var e = "", t = 0, a = n.classes.length; t < a; t++) {
        var i = n.classes[t],
            r = /language-(.+)/.exec(i);

        if (r) {
          e = r[1];
          break;
        }
      }

      var o = d.languages[e];

      if (o) {
        var l = n.content.replace(/&lt;/g, "<").replace(/&amp;/g, "&");
        n.content = d.highlight(l, o, e);
      } else if (e && "none" !== e && d.plugins.autoloader) {
        var s = "md-" + new Date().valueOf() + "-" + Math.floor(1e16 * Math.random());
        n.attributes.id = s, d.plugins.autoloader.loadLanguages(e, function () {
          var n = document.getElementById(s);
          n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e));
        });
      }
    }
  }), d.languages.md = d.languages.markdown;
}(Prism);

/***/ }),

/***/ "./node_modules/prismjs/components/prism-wiki.min.js":
/*!***********************************************************!*\
  !*** ./node_modules/prismjs/components/prism-wiki.min.js ***!
  \***********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

Prism.languages.wiki = Prism.languages.extend("markup", {
  "block-comment": {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: !0,
    alias: "comment"
  },
  heading: {
    pattern: /^(=+).+?\1/m,
    inside: {
      punctuation: /^=+|=+$/,
      important: /.+/
    }
  },
  emphasis: {
    pattern: /('{2,5}).+?\1/,
    inside: {
      "bold italic": {
        pattern: /(''''').+?(?=\1)/,
        lookbehind: !0
      },
      bold: {
        pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
        lookbehind: !0
      },
      italic: {
        pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
        lookbehind: !0
      },
      punctuation: /^''+|''+$/
    }
  },
  hr: {
    pattern: /^-{4,}/m,
    alias: "punctuation"
  },
  url: [/ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i, /\[\[.+?\]\]|\[.+?\]/],
  variable: [/__[A-Z]+__/, /\{{3}.+?\}{3}/, /\{\{.+?\}\}/],
  symbol: [/^#redirect/im, /~{3,5}/],
  "table-tag": {
    pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
    lookbehind: !0,
    inside: {
      "table-bar": {
        pattern: /\|$/,
        alias: "punctuation"
      },
      rest: Prism.languages.markup.tag.inside
    }
  },
  punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
}), Prism.languages.insertBefore("wiki", "tag", {
  nowiki: {
    pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
    inside: {
      tag: {
        pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
        inside: Prism.languages.markup.tag.inside
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

!function () {
  if ("undefined" != typeof self && self.Prism && self.document) if (Prism.plugins.toolbar) {
    var r = window.ClipboardJS || void 0;
    r || "function" != "function" || (r = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js"));
    var i = [];

    if (!r) {
      var o = document.createElement("script"),
          e = document.querySelector("head");
      o.onload = function () {
        if (r = window.ClipboardJS) for (; i.length;) {
          i.pop()();
        }
      }, o.src = "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js", e.appendChild(o);
    }

    Prism.plugins.toolbar.registerButton("copy-to-clipboard", function (e) {
      var t = document.createElement("button");
      return t.textContent = "Copy", r ? o() : i.push(o), t;

      function o() {
        var o = new r(t, {
          text: function text() {
            return e.code;
          }
        });
        o.on("success", function () {
          t.textContent = "Copied!", n();
        }), o.on("error", function () {
          t.textContent = "Press Ctrl+C to copy", n();
        });
      }

      function n() {
        setTimeout(function () {
          t.textContent = "Copy";
        }, 5e3);
      }
    });
  } else console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");
}();

/***/ }),

/***/ "./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

!function () {
  var i = Object.assign || function (e, n) {
    for (var t in n) {
      n.hasOwnProperty(t) && (e[t] = n[t]);
    }

    return e;
  };

  function e(e) {
    this.defaults = i({}, e);
  }

  function l(e) {
    for (var n = 0, t = 0; t < e.length; ++t) {
      e.charCodeAt(t) == "\t".charCodeAt(0) && (n += 3);
    }

    return e.length + n;
  }

  e.prototype = {
    setDefaults: function setDefaults(e) {
      this.defaults = i(this.defaults, e);
    },
    normalize: function normalize(e, n) {
      for (var t in n = i(this.defaults, n)) {
        var r = t.replace(/-(\w)/g, function (e, n) {
          return n.toUpperCase();
        });
        "normalize" !== t && "setDefaults" !== r && n[t] && this[r] && (e = this[r].call(this, e, n[t]));
      }

      return e;
    },
    leftTrim: function leftTrim(e) {
      return e.replace(/^\s+/, "");
    },
    rightTrim: function rightTrim(e) {
      return e.replace(/\s+$/, "");
    },
    tabsToSpaces: function tabsToSpaces(e, n) {
      return n = 0 | n || 4, e.replace(/\t/g, new Array(++n).join(" "));
    },
    spacesToTabs: function spacesToTabs(e, n) {
      return n = 0 | n || 4, e.replace(RegExp(" {" + n + "}", "g"), "\t");
    },
    removeTrailing: function removeTrailing(e) {
      return e.replace(/\s*?$/gm, "");
    },
    removeInitialLineFeed: function removeInitialLineFeed(e) {
      return e.replace(/^(?:\r?\n|\r)/, "");
    },
    removeIndent: function removeIndent(e) {
      var n = e.match(/^[^\S\n\r]*(?=\S)/gm);
      return n && n[0].length ? (n.sort(function (e, n) {
        return e.length - n.length;
      }), n[0].length ? e.replace(RegExp("^" + n[0], "gm"), "") : e) : e;
    },
    indent: function indent(e, n) {
      return e.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++n).join("\t") + "$&");
    },
    breakLines: function breakLines(e, n) {
      n = !0 === n ? 80 : 0 | n || 80;

      for (var t = e.split("\n"), r = 0; r < t.length; ++r) {
        if (!(l(t[r]) <= n)) {
          for (var i = t[r].split(/(\s+)/g), o = 0, a = 0; a < i.length; ++a) {
            var s = l(i[a]);
            n < (o += s) && (i[a] = "\n" + i[a], o = s);
          }

          t[r] = i.join("");
        }
      }

      return t.join("\n");
    }
  },  true && module.exports && (module.exports = e), "undefined" != typeof Prism && (Prism.plugins.NormalizeWhitespace = new e({
    "remove-trailing": !0,
    "remove-indent": !0,
    "left-trim": !0,
    "right-trim": !0
  }), Prism.hooks.add("before-sanity-check", function (e) {
    var n = Prism.plugins.NormalizeWhitespace;
    if (!e.settings || !1 !== e.settings["whitespace-normalization"]) if (e.element && e.element.parentNode || !e.code) {
      var t = e.element.parentNode,
          r = /(?:^|\s)no-whitespace-normalization(?:\s|$)/;

      if (e.code && t && "pre" === t.nodeName.toLowerCase() && !r.test(t.className) && !r.test(e.element.className)) {
        for (var i = t.childNodes, o = "", a = "", s = !1, l = 0; l < i.length; ++l) {
          var c = i[l];
          c == e.element ? s = !0 : "#text" === c.nodeName && (s ? a += c.nodeValue : o += c.nodeValue, t.removeChild(c), --l);
        }

        if (e.element.children.length && Prism.plugins.KeepMarkup) {
          var u = o + e.element.innerHTML + a;
          e.element.innerHTML = n.normalize(u, e.settings), e.code = e.element.textContent;
        } else e.code = o + e.code + a, e.code = n.normalize(e.code, e.settings);
      }
    } else e.code = n.normalize(e.code, e.settings);
  }));
}();

/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.css":
/*!****************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ***!
  \****************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../mini-css-extract-plugin/dist/loader.js??ref--6-1!../../../css-loader/dist/cjs.js??ref--6-2!../../../postcss-loader/src??ref--6-3!./prism-toolbar.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js":
/*!*******************************************************************!*\
  !*** ./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var r = [],
        i = {},
        a = function a() {};

    Prism.plugins.toolbar = {};

    var t = Prism.plugins.toolbar.registerButton = function (t, a) {
      var e;
      e = "function" == typeof a ? a : function (t) {
        var e;
        return "function" == typeof a.onClick ? ((e = document.createElement("button")).type = "button", e.addEventListener("click", function () {
          a.onClick.call(this, t);
        })) : "string" == typeof a.url ? (e = document.createElement("a")).href = a.url : e = document.createElement("span"), a.className && e.classList.add(a.className), e.textContent = a.text, e;
      }, t in i ? console.warn('There is a button with the key "' + t + '" registered already.') : r.push(i[t] = e);
    },
        e = Prism.plugins.toolbar.hook = function (n) {
      var t = n.element.parentNode;

      if (t && /pre/i.test(t.nodeName) && !t.parentNode.classList.contains("code-toolbar")) {
        var e = document.createElement("div");
        e.classList.add("code-toolbar"), t.parentNode.insertBefore(e, t), e.appendChild(t);
        var o = document.createElement("div");
        o.classList.add("toolbar"), document.body.hasAttribute("data-toolbar-order") && (r = document.body.getAttribute("data-toolbar-order").split(",").map(function (t) {
          return i[t] || a;
        })), r.forEach(function (t) {
          var e = t(n);

          if (e) {
            var a = document.createElement("div");
            a.classList.add("toolbar-item"), a.appendChild(e), o.appendChild(a);
          }
        }), e.appendChild(o);
      }
    };

    t("label", function (t) {
      var e = t.element.parentNode;

      if (e && /pre/i.test(e.nodeName) && e.hasAttribute("data-label")) {
        var a,
            n,
            o = e.getAttribute("data-label");

        try {
          n = document.querySelector("template#" + o);
        } catch (t) {}

        return n ? a = n.content : (e.hasAttribute("data-url") ? (a = document.createElement("a")).href = e.getAttribute("data-url") : a = document.createElement("span"), a.textContent = o), a;
      }
    }), Prism.hooks.add("complete", e);
  }
}();

/***/ }),

/***/ "./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css ***!
  \**********************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../mini-css-extract-plugin/dist/loader.js??ref--6-1!../../../css-loader/dist/cjs.js??ref--6-2!../../../postcss-loader/src??ref--6-3!./prism-unescaped-markup.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

"undefined" != typeof self && self.Prism && self.document && Prism.languages.markup && (Prism.plugins.UnescapedMarkup = !0, Prism.hooks.add("before-highlightall", function (e) {
  e.selector += ", [class*='lang-'] script[type='text/plain'], [class*='language-'] script[type='text/plain'], script[type='text/plain'][class*='lang-'], script[type='text/plain'][class*='language-']";
}), Prism.hooks.add("before-sanity-check", function (t) {
  if ((t.element.matches || t.element.msMatchesSelector).call(t.element, "script[type='text/plain']")) {
    var e = document.createElement("code");
    return (a = document.createElement("pre")).className = e.className = t.element.className, t.element.dataset && Object.keys(t.element.dataset).forEach(function (e) {
      Object.prototype.hasOwnProperty.call(t.element.dataset, e) && (a.dataset[e] = t.element.dataset[e]);
    }), t.code = t.code.replace(/&lt;\/script(>|&gt;)/gi, "<\/script>"), e.textContent = t.code, a.appendChild(e), t.element.parentNode.replaceChild(a, t.element), void (t.element = e);
  }

  var a = t.element.parentNode;
  !t.code && a && "pre" == a.nodeName.toLowerCase() && t.element.childNodes.length && "#comment" == t.element.childNodes[0].nodeName && (t.element.textContent = t.code = t.element.childNodes[0].textContent);
}));

/***/ }),

/***/ "./node_modules/prismjs/prism.js":
/*!***************************************!*\
  !*** ./node_modules/prismjs/prism.js ***!
  \***************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/* **********************************************
     Begin prism-core.js
********************************************** */
var _self = typeof window !== 'undefined' ? window // if in browser
: typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
: {} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */


var Prism = function (_self) {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;
  var _ = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
        }
      },
      type: function type(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function objId(obj) {
        if (!obj['__id']) {
          Object.defineProperty(obj, '__id', {
            value: ++uniqueId
          });
        }

        return obj['__id'];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function deepClone(o, visited) {
        var clone,
            id,
            type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case 'Object':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = {};
            visited[id] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }

            return clone;

          case 'Array':
            id = _.util.objId(o);

            if (visited[id]) {
              return visited[id];
            }

            clone = [];
            visited[id] = clone;
            o.forEach(function (v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;

          default:
            return o;
        }
      }
    },
    languages: {
      extend: function extend(id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need an object and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function insertBefore(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            } // Do not insert token which also occur in insert. See #1525


            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }

        var old = root[inside];
        root[inside] = ret; // Update references in other language definitions

        _.languages.DFS(_.languages, function (key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });

        return ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            var property = o[i],
                propertyType = _.util.type(property);

            if (propertyType === 'Object' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === 'Array' && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(async, callback) {
      _.highlightAllUnder(document, async, callback);
    },
    highlightAllUnder: function highlightAllUnder(container, async, callback) {
      var env = {
        callback: callback,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run('before-highlightall', env);

      var elements = container.querySelectorAll(env.selector);

      for (var i = 0, element; element = elements[i++];) {
        _.highlightElement(element, async === true, env.callback);
      }
    },
    highlightElement: function highlightElement(element, async, callback) {
      // Find language
      var language = 'none',
          grammar,
          parent = element;

      while (parent && !lang.test(parent.className)) {
        parent = parent.parentNode;
      }

      if (parent) {
        language = (parent.className.match(lang) || [, 'none'])[1].toLowerCase();
        grammar = _.languages[language];
      } // Set language on the element, if not present


      element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

      if (element.parentNode) {
        // Set language on the parent, for styling
        parent = element.parentNode;

        if (/pre/i.test(parent.nodeName)) {
          parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
        }
      }

      var code = element.textContent;
      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      var insertHighlightedCode = function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;

        _.hooks.run('before-insert', env);

        env.element.innerHTML = env.highlightedCode;

        _.hooks.run('after-highlight', env);

        _.hooks.run('complete', env);

        callback && callback.call(env.element);
      };

      _.hooks.run('before-sanity-check', env);

      if (!env.code) {
        _.hooks.run('complete', env);

        return;
      }

      _.hooks.run('before-highlight', env);

      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function (evt) {
          insertHighlightedCode(evt.data);
        };

        worker.postMessage(JSON.stringify({
          language: env.language,
          code: env.code,
          immediateClose: true
        }));
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },
    highlight: function highlight(text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };

      _.hooks.run('before-tokenize', env);

      env.tokens = _.tokenize(env.code, env.grammar);

      _.hooks.run('after-tokenize', env);

      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);
            if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            if (oneshot) break;
          }
        }
      }
    },
    tokenize: function tokenize(text, grammar) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    },
    hooks: {
      all: {},
      add: function add(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function run(name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; callback = callbacks[i++];) {
          callback(env);
        }
      }
    },
    Token: Token
  };
  _self.Prism = _;

  function Token(type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  }

  Token.stringify = function (o, language) {
    if (typeof o == 'string') {
      return o;
    }

    if (Array.isArray(o)) {
      return o.map(function (element) {
        return Token.stringify(element, language);
      }).join('');
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language),
      tag: 'span',
      classes: ['token', o.type],
      attributes: {},
      language: language
    };

    if (o.alias) {
      var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    _.hooks.run('wrap', env);

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
    }).join(' ');
    return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
  };

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener('message', function (evt) {
        var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;

        _self.postMessage(_.highlight(code, _.languages[lang], lang));

        if (immediateClose) {
          _self.close();
        }
      }, false);
    }

    return _;
  } //Get current script and highlight


  var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

  if (script) {
    _.filename = script.src;

    if (!_.manual && !script.hasAttribute('data-manual')) {
      if (document.readyState !== "loading") {
        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(_.highlightAll);
        } else {
          window.setTimeout(_.highlightAll, 16);
        }
      } else {
        document.addEventListener('DOMContentLoaded', _.highlightAll);
      }
    }
  }

  return _;
}(_self);

if ( true && module.exports) {
  module.exports = Prism;
} // hack for components to work correctly in node.js


if (typeof global !== 'undefined') {
  global.Prism = Prism;
}
/* **********************************************
     Begin prism-markup.js
********************************************** */


Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': /<!DOCTYPE[\s\S]+?>/i,
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /@[\w-]+/ // See rest below

      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);
/* **********************************************
     Begin prism-clike.js
********************************************** */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {
  if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
    return;
  }
  /**
   * @param {Element} [container=document]
   */


  self.Prism.fileHighlight = function (container) {
    container = container || document;
    var Extensions = {
      'js': 'javascript',
      'py': 'python',
      'rb': 'ruby',
      'ps1': 'powershell',
      'psm1': 'powershell',
      'sh': 'bash',
      'bat': 'batch',
      'h': 'c',
      'tex': 'latex'
    };
    Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
      // ignore if already loaded
      if (pre.hasAttribute('data-src-loaded')) {
        return;
      } // load current


      var src = pre.getAttribute('data-src');
      var language,
          parent = pre;
      var lang = /\blang(?:uage)?-([\w-]+)\b/i;

      while (parent && !lang.test(parent.className)) {
        parent = parent.parentNode;
      }

      if (parent) {
        language = (pre.className.match(lang) || [, ''])[1];
      }

      if (!language) {
        var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
        language = Extensions[extension] || extension;
      }

      var code = document.createElement('code');
      code.className = 'language-' + language;
      pre.textContent = '';
      code.textContent = 'Loading…';
      pre.appendChild(code);
      var xhr = new XMLHttpRequest();
      xhr.open('GET', src, true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status < 400 && xhr.responseText) {
            code.textContent = xhr.responseText;
            Prism.highlightElement(code); // mark as loaded

            pre.setAttribute('data-src-loaded', '');
          } else if (xhr.status >= 400) {
            code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
          } else {
            code.textContent = '✖ Error: File does not exist or is empty';
          }
        }
      };

      xhr.send(null);
    });

    if (Prism.plugins.toolbar) {
      Prism.plugins.toolbar.registerButton('download-file', function (env) {
        var pre = env.element.parentNode;

        if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
          return;
        }

        var src = pre.getAttribute('data-src');
        var a = document.createElement('a');
        a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
        a.setAttribute('download', '');
        a.href = src;
        return a;
      });
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    // execute inside handler, for dropping Event as argument
    self.Prism.fileHighlight();
  });
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/prismjs/themes/prism-okaidia.css":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-okaidia.css ***!
  \*******************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../mini-css-extract-plugin/dist/loader.js??ref--6-1!../../css-loader/dist/cjs.js??ref--6-2!../../postcss-loader/src??ref--6-3!./prism-okaidia.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/themes/prism-okaidia.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/prismjs/themes/prism.css":
/*!***********************************************!*\
  !*** ./node_modules/prismjs/themes/prism.css ***!
  \***********************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../mini-css-extract-plugin/dist/loader.js??ref--6-1!../../css-loader/dist/cjs.js??ref--6-2!../../postcss-loader/src??ref--6-3!./prism.css */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/prismjs/themes/prism.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ 0:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/clipboard/dist/clipboard.min.js ./node_modules/prismjs/prism.js ./node_modules/prismjs/components/prism-markdown.min.js ./node_modules/prismjs/components/prism-wiki.min.js ./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js ./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css ./node_modules/prismjs/themes/prism.css ./node_modules/prismjs/themes/prism-okaidia.css ./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js ./node_modules/prismjs/plugins/toolbar/prism-toolbar.css ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js ./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./node_modules/clipboard/dist/clipboard.min.js */"./node_modules/clipboard/dist/clipboard.min.js");
__webpack_require__(/*! ./node_modules/prismjs/prism.js */"./node_modules/prismjs/prism.js");
__webpack_require__(/*! ./node_modules/prismjs/components/prism-markdown.min.js */"./node_modules/prismjs/components/prism-markdown.min.js");
__webpack_require__(/*! ./node_modules/prismjs/components/prism-wiki.min.js */"./node_modules/prismjs/components/prism-wiki.min.js");
__webpack_require__(/*! ./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js */"./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js");
__webpack_require__(/*! ./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css */"./node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.css");
__webpack_require__(/*! ./node_modules/prismjs/themes/prism.css */"./node_modules/prismjs/themes/prism.css");
__webpack_require__(/*! ./node_modules/prismjs/themes/prism-okaidia.css */"./node_modules/prismjs/themes/prism-okaidia.css");
__webpack_require__(/*! ./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js */"./node_modules/prismjs/plugins/toolbar/prism-toolbar.min.js");
__webpack_require__(/*! ./node_modules/prismjs/plugins/toolbar/prism-toolbar.css */"./node_modules/prismjs/plugins/toolbar/prism-toolbar.css");
__webpack_require__(/*! ./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js */"./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js");
module.exports = __webpack_require__(/*! ./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js */"./node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.min.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NsaXBib2FyZC9kaXN0L2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2xpcGJvYXJkL2Rpc3QvY2xpcGJvYXJkLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wbHVnaW5zL3Rvb2xiYXIvcHJpc20tdG9vbGJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy91bmVzY2FwZWQtbWFya3VwL3ByaXNtLXVuZXNjYXBlZC1tYXJrdXAuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS1va2FpZGlhLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya2Rvd24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL2NvbXBvbmVudHMvcHJpc20td2lraS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9jb3B5LXRvLWNsaXBib2FyZC9wcmlzbS1jb3B5LXRvLWNsaXBib2FyZC5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy9ub3JtYWxpemUtd2hpdGVzcGFjZS9wcmlzbS1ub3JtYWxpemUtd2hpdGVzcGFjZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIuY3NzPzY4MjAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvcGx1Z2lucy90b29sYmFyL3ByaXNtLXRvb2xiYXIubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvdW5lc2NhcGVkLW1hcmt1cC9wcmlzbS11bmVzY2FwZWQtbWFya3VwLmNzcz8wOTFjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcmlzbWpzL3BsdWdpbnMvdW5lc2NhcGVkLW1hcmt1cC9wcmlzbS11bmVzY2FwZWQtbWFya3VwLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy9wcmlzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20tb2thaWRpYS5jc3M/NmFlYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJpc21qcy90aGVtZXMvcHJpc20uY3NzPzhhMDUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaSIsImwiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJnZXREZWZhdWx0IiwiZ2V0TW9kdWxlRXhwb3J0cyIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIl90eXBlb2YiLCJpdGVyYXRvciIsIm9iaiIsImNvbnN0cnVjdG9yIiwiX2NyZWF0ZUNsYXNzIiwiZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwibGVuZ3RoIiwiZGVzY3JpcHRvciIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiQ29uc3RydWN0b3IiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfY2xpcGJvYXJkQWN0aW9uIiwiX2NsaXBib2FyZEFjdGlvbjIiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiX3RpbnlFbWl0dGVyIiwiX3RpbnlFbWl0dGVyMiIsIl9nb29kTGlzdGVuZXIiLCJfZ29vZExpc3RlbmVyMiIsImRlZmF1bHQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIlR5cGVFcnJvciIsIl9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJDbGlwYm9hcmQiLCJfRW1pdHRlciIsInRyaWdnZXIiLCJvcHRpb25zIiwiX3RoaXMiLCJnZXRQcm90b3R5cGVPZiIsInJlc29sdmVPcHRpb25zIiwibGlzdGVuQ2xpY2siLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJkZWZhdWx0QWN0aW9uIiwiZGVmYXVsdFRhcmdldCIsInRleHQiLCJkZWZhdWx0VGV4dCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsIl90aGlzMiIsImxpc3RlbmVyIiwiZSIsIm9uQ2xpY2siLCJkZWxlZ2F0ZVRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJjbGlwYm9hcmRBY3Rpb24iLCJlbWl0dGVyIiwiZ2V0QXR0cmlidXRlVmFsdWUiLCJzZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3IiLCJkZXN0cm95IiwiaXNTdXBwb3J0ZWQiLCJhY3Rpb25zIiwic3VwcG9ydCIsInF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCIsImZvckVhY2giLCJzdWZmaXgiLCJlbGVtZW50IiwiYXR0cmlidXRlIiwiaGFzQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwiX3NlbGVjdCIsIl9zZWxlY3QyIiwiQ2xpcGJvYXJkQWN0aW9uIiwiaW5pdFNlbGVjdGlvbiIsInNlbGVjdGVkVGV4dCIsInNlbGVjdEZha2UiLCJzZWxlY3RUYXJnZXQiLCJpc1JUTCIsImRvY3VtZW50RWxlbWVudCIsInJlbW92ZUZha2UiLCJmYWtlSGFuZGxlckNhbGxiYWNrIiwiZmFrZUhhbmRsZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZmFrZUVsZW0iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJmb250U2l6ZSIsImJvcmRlciIsInBhZGRpbmciLCJtYXJnaW4iLCJwb3NpdGlvbiIsInlQb3NpdGlvbiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwidG9wIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kQ2hpbGQiLCJjb3B5VGV4dCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsInN1Y2NlZWRlZCIsImV4ZWNDb21tYW5kIiwiZXJyIiwiaGFuZGxlUmVzdWx0IiwiZW1pdCIsImNsZWFyU2VsZWN0aW9uIiwiZm9jdXMiLCJnZXRTZWxlY3Rpb24iLCJyZW1vdmVBbGxSYW5nZXMiLCJzZXQiLCJfYWN0aW9uIiwiRXJyb3IiLCJub2RlVHlwZSIsIl90YXJnZXQiLCJzZWxlY3QiLCJub2RlTmFtZSIsImlzUmVhZE9ubHkiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNlbGVjdGlvbiIsInJhbmdlIiwiY3JlYXRlUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJhZGRSYW5nZSIsInRvU3RyaW5nIiwiRSIsIm9uIiwiY2FsbGJhY2siLCJjdHgiLCJwdXNoIiwiZm4iLCJvbmNlIiwib2ZmIiwiYXBwbHkiLCJfIiwiZGF0YSIsInNsaWNlIiwiZXZ0QXJyIiwibGVuIiwiZXZ0cyIsImxpdmVFdmVudHMiLCJpcyIsImRlbGVnYXRlIiwibGlzdGVuIiwidHlwZSIsInN0cmluZyIsIm5vZGUiLCJsaXN0ZW5Ob2RlIiwibm9kZUxpc3QiLCJsaXN0ZW5Ob2RlTGlzdCIsImxpc3RlblNlbGVjdG9yIiwiQXJyYXkiLCJIVE1MRWxlbWVudCIsIlN0cmluZyIsImNsb3Nlc3QiLCJfZGVsZWdhdGUiLCJ1c2VDYXB0dXJlIiwibGlzdGVuZXJGbiIsImVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsIkRPQ1VNRU5UX05PREVfVFlQRSIsIkVsZW1lbnQiLCJtYXRjaGVzIiwicHJvdG8iLCJtYXRjaGVzU2VsZWN0b3IiLCJtb3pNYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3IiLCJwYXJlbnROb2RlIiwiYSIsInUiLCJoIiwiZiIsInJlcGxhY2UiLCJSZWdFeHAiLCJsYW5ndWFnZXMiLCJtYXJrZG93biIsImV4dGVuZCIsImluc2VydEJlZm9yZSIsImJsb2NrcXVvdGUiLCJwYXR0ZXJuIiwiYWxpYXMiLCJ0YWJsZSIsImluc2lkZSIsImxvb2tiZWhpbmQiLCJwdW5jdHVhdGlvbiIsImNvZGUiLCJncmVlZHkiLCJ0aXRsZSIsImhyIiwibGlzdCIsInZhcmlhYmxlIiwiYm9sZCIsImNvbnRlbnQiLCJpdGFsaWMiLCJzdHJpa2UiLCJ1cmwiLCJob29rcyIsImFkZCIsImxhbmd1YWdlIiwidHJpbSIsInNwbGl0IiwidG9Mb3dlckNhc2UiLCJ0b2tlbnMiLCJjbGFzc2VzIiwiZXhlYyIsImhpZ2hsaWdodCIsInBsdWdpbnMiLCJhdXRvbG9hZGVyIiwiRGF0ZSIsInZhbHVlT2YiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJhdHRyaWJ1dGVzIiwiaWQiLCJsb2FkTGFuZ3VhZ2VzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJ0ZXh0Q29udGVudCIsIm1kIiwiUHJpc20iLCJ3aWtpIiwiaGVhZGluZyIsImltcG9ydGFudCIsImVtcGhhc2lzIiwic3ltYm9sIiwicmVzdCIsIm1hcmt1cCIsInRhZyIsIm5vd2lraSIsInRvb2xiYXIiLCJDbGlwYm9hcmRKUyIsInJlcXVpcmUiLCJvbmxvYWQiLCJwb3AiLCJzcmMiLCJyZWdpc3RlckJ1dHRvbiIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwid2FybiIsImFzc2lnbiIsImRlZmF1bHRzIiwiY2hhckNvZGVBdCIsInNldERlZmF1bHRzIiwibm9ybWFsaXplIiwidG9VcHBlckNhc2UiLCJsZWZ0VHJpbSIsInJpZ2h0VHJpbSIsInRhYnNUb1NwYWNlcyIsImpvaW4iLCJzcGFjZXNUb1RhYnMiLCJyZW1vdmVUcmFpbGluZyIsInJlbW92ZUluaXRpYWxMaW5lRmVlZCIsInJlbW92ZUluZGVudCIsIm1hdGNoIiwic29ydCIsImluZGVudCIsImJyZWFrTGluZXMiLCJOb3JtYWxpemVXaGl0ZXNwYWNlIiwic2V0dGluZ3MiLCJ0ZXN0IiwiY2xhc3NOYW1lIiwiY2hpbGROb2RlcyIsIm5vZGVWYWx1ZSIsImNoaWxkcmVuIiwiS2VlcE1hcmt1cCIsImhyZWYiLCJjbGFzc0xpc3QiLCJob29rIiwiY29udGFpbnMiLCJVbmVzY2FwZWRNYXJrdXAiLCJkYXRhc2V0Iiwia2V5cyIsInJlcGxhY2VDaGlsZCIsIl9zZWxmIiwiV29ya2VyR2xvYmFsU2NvcGUiLCJsYW5nIiwidW5pcXVlSWQiLCJtYW51YWwiLCJkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIiLCJ1dGlsIiwiZW5jb2RlIiwiVG9rZW4iLCJpc0FycmF5Iiwib2JqSWQiLCJjbG9uZSIsImRlZXBDbG9uZSIsInZpc2l0ZWQiLCJ2IiwicmVkZWYiLCJiZWZvcmUiLCJpbnNlcnQiLCJncmFtbWFyIiwicmV0IiwidG9rZW4iLCJuZXdUb2tlbiIsIm9sZCIsIkRGUyIsInByb3BlcnR5VHlwZSIsImhpZ2hsaWdodEFsbCIsImFzeW5jIiwiaGlnaGxpZ2h0QWxsVW5kZXIiLCJlbnYiLCJydW4iLCJoaWdobGlnaHRFbGVtZW50IiwicGFyZW50IiwiaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlIiwiaGlnaGxpZ2h0ZWRDb2RlIiwiV29ya2VyIiwid29ya2VyIiwiZmlsZW5hbWUiLCJvbm1lc3NhZ2UiLCJldnQiLCJwb3N0TWVzc2FnZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJpbW1lZGlhdGVDbG9zZSIsInRva2VuaXplIiwibWF0Y2hHcmFtbWFyIiwic3RyYXJyIiwiaW5kZXgiLCJzdGFydFBvcyIsIm9uZXNob3QiLCJwYXR0ZXJucyIsImoiLCJsb29rYmVoaW5kTGVuZ3RoIiwiZ2xvYmFsIiwiZmxhZ3MiLCJzb3VyY2UiLCJwb3MiLCJzdHIiLCJsYXN0SW5kZXgiLCJmcm9tIiwidG8iLCJrIiwiZGVsTnVtIiwiYWZ0ZXIiLCJhcmdzIiwid3JhcHBlZCIsInNwbGljZSIsImFsbCIsImNhbGxiYWNrcyIsIm1hdGNoZWRTdHIiLCJhbGlhc2VzIiwibWVzc2FnZSIsInBhcnNlIiwiY2xvc2UiLCJzY3JpcHQiLCJjdXJyZW50U2NyaXB0IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyZWFkeVN0YXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkSW5saW5lZCIsInRhZ05hbWUiLCJpbmNsdWRlZENkYXRhSW5zaWRlIiwiZGVmIiwieG1sIiwiaHRtbCIsIm1hdGhtbCIsInN2ZyIsImNzcyIsImNsaWtlIiwiamF2YXNjcmlwdCIsImpzIiwiZmlsZUhpZ2hsaWdodCIsIkV4dGVuc2lvbnMiLCJwcmUiLCJleHRlbnNpb24iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzdGF0dXNUZXh0Iiwic2VuZCIsImciLCJGdW5jdGlvbiIsIndlYnBhY2tQb2x5ZmlsbCIsImRlcHJlY2F0ZSIsInBhdGhzIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztR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QUNuQkF2YSxNQUFNLENBQUNELE9BQVAsR0FBaUIsVUFBU0MsTUFBVCxFQUFpQjtBQUNqQyxNQUFJLENBQUNBLE1BQU0sQ0FBQ3lhLGVBQVosRUFBNkI7QUFDNUJ6YSxVQUFNLENBQUMwYSxTQUFQLEdBQW1CLFlBQVcsQ0FBRSxDQUFoQzs7QUFDQTFhLFVBQU0sQ0FBQzJhLEtBQVAsR0FBZSxFQUFmLENBRjRCLENBRzVCOztBQUNBLFFBQUksQ0FBQzNhLE1BQU0sQ0FBQ3VULFFBQVosRUFBc0J2VCxNQUFNLENBQUN1VCxRQUFQLEdBQWtCLEVBQWxCO0FBQ3RCeFMsVUFBTSxDQUFDQyxjQUFQLENBQXNCaEIsTUFBdEIsRUFBOEIsUUFBOUIsRUFBd0M7QUFDdkNpQixnQkFBVSxFQUFFLElBRDJCO0FBRXZDQyxTQUFHLEVBQUUsZUFBVztBQUNmLGVBQU9sQixNQUFNLENBQUNPLENBQWQ7QUFDQTtBQUpzQyxLQUF4QztBQU1BUSxVQUFNLENBQUNDLGNBQVAsQ0FBc0JoQixNQUF0QixFQUE4QixJQUE5QixFQUFvQztBQUNuQ2lCLGdCQUFVLEVBQUUsSUFEdUI7QUFFbkNDLFNBQUcsRUFBRSxlQUFXO0FBQ2YsZUFBT2xCLE1BQU0sQ0FBQ00sQ0FBZDtBQUNBO0FBSmtDLEtBQXBDO0FBTUFOLFVBQU0sQ0FBQ3lhLGVBQVAsR0FBeUIsQ0FBekI7QUFDQTs7QUFDRCxTQUFPemEsTUFBUDtBQUNBLENBckJELEMiLCJmaWxlIjoianMvaGlnaGxpZ2h0LXN5bnRheC5qcz9mMjBiYjYxM2ZhMTkxMDRiYmUyYSIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuNFxuICogaHR0cHM6Ly96ZW5vcm9jaGEuZ2l0aHViLmlvL2NsaXBib2FyZC5qc1xuICogXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJDbGlwYm9hcmRKU1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vKioqKioqLyBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4vKioqKioqLyBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuLyoqKioqKi8gXHRcdHJldHVybiBucztcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGlwYm9hcmRBY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG52YXIgX2NsaXBib2FyZEFjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGlwYm9hcmRBY3Rpb24pO1xuXG52YXIgX3RpbnlFbWl0dGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcblxudmFyIF90aW55RW1pdHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW55RW1pdHRlcik7XG5cbnZhciBfZ29vZExpc3RlbmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxudmFyIF9nb29kTGlzdGVuZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZExpc3RlbmVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIEJhc2UgY2xhc3Mgd2hpY2ggdGFrZXMgb25lIG9yIG1vcmUgZWxlbWVudHMsIGFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZW0sXG4gKiBhbmQgaW5zdGFudGlhdGVzIGEgbmV3IGBDbGlwYm9hcmRBY3Rpb25gIG9uIGVhY2ggY2xpY2suXG4gKi9cbnZhciBDbGlwYm9hcmQgPSBmdW5jdGlvbiAoX0VtaXR0ZXIpIHtcbiAgICBfaW5oZXJpdHMoQ2xpcGJvYXJkLCBfRW1pdHRlcik7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdHJpZ2dlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgZnVuY3Rpb24gQ2xpcGJvYXJkKHRyaWdnZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENsaXBib2FyZCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENsaXBib2FyZC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENsaXBib2FyZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBfdGhpcy5saXN0ZW5DbGljayh0cmlnZ2VyKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgaWYgYXR0cmlidXRlcyB3b3VsZCBiZSByZXNvbHZlZCB1c2luZyBpbnRlcm5hbCBzZXR0ZXIgZnVuY3Rpb25zXG4gICAgICogb3IgY3VzdG9tIGZ1bmN0aW9ucyB0aGF0IHdlcmUgcGFzc2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkLCBbe1xuICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSB0eXBlb2Ygb3B0aW9ucy5hY3Rpb24gPT09ICdmdW5jdGlvbicgPyBvcHRpb25zLmFjdGlvbiA6IHRoaXMuZGVmYXVsdEFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdHlwZW9mIG9wdGlvbnMudGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50YXJnZXQgOiB0aGlzLmRlZmF1bHRUYXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnRleHQgPSB0eXBlb2Ygb3B0aW9ucy50ZXh0ID09PSAnZnVuY3Rpb24nID8gb3B0aW9ucy50ZXh0IDogdGhpcy5kZWZhdWx0VGV4dDtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gX3R5cGVvZihvcHRpb25zLmNvbnRhaW5lcikgPT09ICdvYmplY3QnID8gb3B0aW9ucy5jb250YWluZXIgOiBkb2N1bWVudC5ib2R5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZHMgYSBjbGljayBldmVudCBsaXN0ZW5lciB0byB0aGUgcGFzc2VkIHRyaWdnZXIuXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEhUTUxFbGVtZW50fEhUTUxDb2xsZWN0aW9ufE5vZGVMaXN0fSB0cmlnZ2VyXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaXN0ZW5DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaXN0ZW5DbGljayh0cmlnZ2VyKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lciA9ICgwLCBfZ29vZExpc3RlbmVyMi5kZWZhdWx0KSh0cmlnZ2VyLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpczIub25DbGljayhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmluZXMgYSBuZXcgYENsaXBib2FyZEFjdGlvbmAgb24gZWFjaCBjbGljayBldmVudC5cbiAgICAgICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnb25DbGljaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyID0gZS5kZWxlZ2F0ZVRhcmdldCB8fCBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5jbGlwYm9hcmRBY3Rpb24gPSBuZXcgX2NsaXBib2FyZEFjdGlvbjIuZGVmYXVsdCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiB0aGlzLmFjdGlvbih0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0KHRyaWdnZXIpLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dCh0cmlnZ2VyKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgZW1pdHRlcjogdGhpc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBgYWN0aW9uYCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVmYXVsdEFjdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0QWN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgnYWN0aW9uJywgdHJpZ2dlcik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBgdGFyZ2V0YCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVmYXVsdFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZWZhdWx0VGFyZ2V0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RvciA9IGdldEF0dHJpYnV0ZVZhbHVlKCd0YXJnZXQnLCB0cmlnZ2VyKTtcblxuICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJldHVybnMgdGhlIHN1cHBvcnQgb2YgdGhlIGdpdmVuIGFjdGlvbiwgb3IgYWxsIGFjdGlvbnMgaWYgbm8gYWN0aW9uIGlzXG4gICAgICAgICAqIGdpdmVuLlxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2FjdGlvbl1cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2RlZmF1bHRUZXh0JyxcblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGB0ZXh0YCBsb29rdXAgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdHJpZ2dlclxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGRlZmF1bHRUZXh0KHRyaWdnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBdHRyaWJ1dGVWYWx1ZSgndGV4dCcsIHRyaWdnZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlc3Ryb3kgbGlmZWN5Y2xlLlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lci5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNsaXBib2FyZEFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpcGJvYXJkQWN0aW9uLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBib2FyZEFjdGlvbiA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgICAga2V5OiAnaXNTdXBwb3J0ZWQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gaXNTdXBwb3J0ZWQoKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJ2NvcHknLCAnY3V0J107XG5cbiAgICAgICAgICAgIHZhciBhY3Rpb25zID0gdHlwZW9mIGFjdGlvbiA9PT0gJ3N0cmluZycgPyBbYWN0aW9uXSA6IGFjdGlvbjtcbiAgICAgICAgICAgIHZhciBzdXBwb3J0ID0gISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQ7XG5cbiAgICAgICAgICAgIGFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydCA9IHN1cHBvcnQgJiYgISFkb2N1bWVudC5xdWVyeUNvbW1hbmRTdXBwb3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9ydDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDbGlwYm9hcmQ7XG59KF90aW55RW1pdHRlcjIuZGVmYXVsdCk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHJldHJpZXZlIGF0dHJpYnV0ZSB2YWx1ZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdWZmaXhcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlVmFsdWUoc3VmZml4LCBlbGVtZW50KSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9ICdkYXRhLWNsaXBib2FyZC0nICsgc3VmZml4O1xuXG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDbGlwYm9hcmQ7XG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfc2VsZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxudmFyIF9zZWxlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2VsZWN0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBJbm5lciBjbGFzcyB3aGljaCBwZXJmb3JtcyBzZWxlY3Rpb24gZnJvbSBlaXRoZXIgYHRleHRgIG9yIGB0YXJnZXRgXG4gKiBwcm9wZXJ0aWVzIGFuZCB0aGVuIGV4ZWN1dGVzIGNvcHkgb3IgY3V0IG9wZXJhdGlvbnMuXG4gKi9cbnZhciBDbGlwYm9hcmRBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBDbGlwYm9hcmRBY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2xpcGJvYXJkQWN0aW9uKTtcblxuICAgICAgICB0aGlzLnJlc29sdmVPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGJhc2UgcHJvcGVydGllcyBwYXNzZWQgZnJvbSBjb25zdHJ1Y3Rvci5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqL1xuXG5cbiAgICBfY3JlYXRlQ2xhc3MoQ2xpcGJvYXJkQWN0aW9uLCBbe1xuICAgICAgICBrZXk6ICdyZXNvbHZlT3B0aW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlT3B0aW9ucygpIHtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcblxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBvcHRpb25zLmFjdGlvbjtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gb3B0aW9ucy5jb250YWluZXI7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIgPSBvcHRpb25zLmVtaXR0ZXI7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IG9wdGlvbnMudGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3B0aW9ucy50ZXh0O1xuICAgICAgICAgICAgdGhpcy50cmlnZ2VyID0gb3B0aW9ucy50cmlnZ2VyO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlY2lkZXMgd2hpY2ggc2VsZWN0aW9uIHN0cmF0ZWd5IGlzIGdvaW5nIHRvIGJlIGFwcGxpZWQgYmFzZWRcbiAgICAgICAgICogb24gdGhlIGV4aXN0ZW5jZSBvZiBgdGV4dGAgYW5kIGB0YXJnZXRgIHByb3BlcnRpZXMuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdpbml0U2VsZWN0aW9uJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGluaXRTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGYWtlKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYXJnZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDcmVhdGVzIGEgZmFrZSB0ZXh0YXJlYSBlbGVtZW50LCBzZXRzIGl0cyB2YWx1ZSBmcm9tIGB0ZXh0YCBwcm9wZXJ0eSxcbiAgICAgICAgICogYW5kIG1ha2VzIGEgc2VsZWN0aW9uIG9uIGl0LlxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnc2VsZWN0RmFrZScsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RGYWtlKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgdmFyIGlzUlRMID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGlyJykgPT0gJ3J0bCc7XG5cbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUZha2UoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gdGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2spIHx8IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICAgICAgLy8gUHJldmVudCB6b29taW5nIG9uIGlPU1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5mb250U2l6ZSA9ICcxMnB0JztcbiAgICAgICAgICAgIC8vIFJlc2V0IGJveCBtb2RlbFxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5ib3JkZXIgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLnBhZGRpbmcgPSAnMCc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICAgICAgICAgIC8vIE1vdmUgZWxlbWVudCBvdXQgb2Ygc2NyZWVuIGhvcml6b250YWxseVxuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnN0eWxlW2lzUlRMID8gJ3JpZ2h0JyA6ICdsZWZ0J10gPSAnLTk5OTlweCc7XG4gICAgICAgICAgICAvLyBNb3ZlIGVsZW1lbnQgdG8gdGhlIHNhbWUgcG9zaXRpb24gdmVydGljYWxseVxuICAgICAgICAgICAgdmFyIHlQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgdGhpcy5mYWtlRWxlbS5zdHlsZS50b3AgPSB5UG9zaXRpb24gKyAncHgnO1xuXG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XG4gICAgICAgICAgICB0aGlzLmZha2VFbGVtLnZhbHVlID0gdGhpcy50ZXh0O1xuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRleHQgPSAoMCwgX3NlbGVjdDIuZGVmYXVsdCkodGhpcy5mYWtlRWxlbSk7XG4gICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogT25seSByZW1vdmVzIHRoZSBmYWtlIGVsZW1lbnQgYWZ0ZXIgYW5vdGhlciBjbGljayBldmVudCwgdGhhdCB3YXlcbiAgICAgICAgICogYSB1c2VyIGNhbiBoaXQgYEN0cmwrQ2AgdG8gY29weSBiZWNhdXNlIHNlbGVjdGlvbiBzdGlsbCBleGlzdHMuXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW1vdmVGYWtlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZUZha2UoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mYWtlSGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5mYWtlRWxlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZmFrZUVsZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmFrZUVsZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlbGVjdHMgdGhlIGNvbnRlbnQgZnJvbSBlbGVtZW50IHBhc3NlZCBvbiBgdGFyZ2V0YCBwcm9wZXJ0eS5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ3NlbGVjdFRhcmdldCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3RUYXJnZXQoKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkVGV4dCA9ICgwLCBfc2VsZWN0Mi5kZWZhdWx0KSh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLmNvcHlUZXh0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogRXhlY3V0ZXMgdGhlIGNvcHkgb3BlcmF0aW9uIGJhc2VkIG9uIHRoZSBjdXJyZW50IHNlbGVjdGlvbi5cbiAgICAgICAgICovXG5cbiAgICB9LCB7XG4gICAgICAgIGtleTogJ2NvcHlUZXh0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvcHlUZXh0KCkge1xuICAgICAgICAgICAgdmFyIHN1Y2NlZWRlZCA9IHZvaWQgMDtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBkb2N1bWVudC5leGVjQ29tbWFuZCh0aGlzLmFjdGlvbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXN1bHQoc3VjY2VlZGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaXJlcyBhbiBldmVudCBiYXNlZCBvbiB0aGUgY29weSBvcGVyYXRpb24gcmVzdWx0LlxuICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHN1Y2NlZWRlZFxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnaGFuZGxlUmVzdWx0JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVJlc3VsdChzdWNjZWVkZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHN1Y2NlZWRlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IHRoaXMuYWN0aW9uLFxuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuc2VsZWN0ZWRUZXh0LFxuICAgICAgICAgICAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgICAgICAgICBjbGVhclNlbGVjdGlvbjogdGhpcy5jbGVhclNlbGVjdGlvbi5iaW5kKHRoaXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNb3ZlcyBmb2N1cyBhd2F5IGZyb20gYHRhcmdldGAgYW5kIGJhY2sgdG8gdGhlIHRyaWdnZXIsIHJlbW92ZXMgY3VycmVudCBzZWxlY3Rpb24uXG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICdjbGVhclNlbGVjdGlvbicsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhclNlbGVjdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRyaWdnZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIGBhY3Rpb25gIHRvIGJlIHBlcmZvcm1lZCB3aGljaCBjYW4gYmUgZWl0aGVyICdjb3B5JyBvciAnY3V0Jy5cbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IGFjdGlvblxuICAgICAgICAgKi9cblxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnZGVzdHJveScsXG5cblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVzdHJveSBsaWZlY3ljbGUuXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRmFrZSgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdhY3Rpb24nLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdjb3B5JztcblxuICAgICAgICAgICAgdGhpcy5fYWN0aW9uID0gYWN0aW9uO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fYWN0aW9uICE9PSAnY29weScgJiYgdGhpcy5fYWN0aW9uICE9PSAnY3V0Jykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcImFjdGlvblwiIHZhbHVlLCB1c2UgZWl0aGVyIFwiY29weVwiIG9yIFwiY3V0XCInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIHRoZSBgYWN0aW9uYCBwcm9wZXJ0eS5cbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0cyB0aGUgYHRhcmdldGAgcHJvcGVydHkgdXNpbmcgYW4gZWxlbWVudFxuICAgICAgICAgKiB0aGF0IHdpbGwgYmUgaGF2ZSBpdHMgY29udGVudCBjb3BpZWQuXG4gICAgICAgICAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0XG4gICAgICAgICAqL1xuXG4gICAgfSwge1xuICAgICAgICBrZXk6ICd0YXJnZXQnLFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uID09PSAnY29weScgJiYgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwidGFyZ2V0XCIgYXR0cmlidXRlLiBQbGVhc2UgdXNlIFwicmVhZG9ubHlcIiBpbnN0ZWFkIG9mIFwiZGlzYWJsZWRcIiBhdHRyaWJ1dGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGlvbiA9PT0gJ2N1dCcgJiYgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgfHwgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIGB0YXJnZXRgIHByb3BlcnR5LlxuICAgICAgICAgKiBAcmV0dXJuIHtTdHJpbmd8SFRNTEVsZW1lbnR9XG4gICAgICAgICAqL1xuICAgICAgICAsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBDbGlwYm9hcmRBY3Rpb247XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpcGJvYXJkQWN0aW9uO1xuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gc2VsZWN0KGVsZW1lbnQpIHtcbiAgICB2YXIgc2VsZWN0ZWRUZXh0O1xuXG4gICAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnKSB7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnIHx8IGVsZW1lbnQubm9kZU5hbWUgPT09ICdURVhUQVJFQScpIHtcbiAgICAgICAgdmFyIGlzUmVhZE9ubHkgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmVhZG9ubHknKTtcblxuICAgICAgICBpZiAoIWlzUmVhZE9ubHkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuc2VsZWN0KCk7XG4gICAgICAgIGVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgZWxlbWVudC52YWx1ZS5sZW5ndGgpO1xuXG4gICAgICAgIGlmICghaXNSZWFkT25seSkge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBlbGVtZW50LnZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKSkge1xuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcblxuICAgICAgICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5yZW1vdmVBbGxSYW5nZXMoKTtcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKTtcblxuICAgICAgICBzZWxlY3RlZFRleHQgPSBzZWxlY3Rpb24udG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VsZWN0ZWRUZXh0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlbGVjdDtcblxuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZnVuY3Rpb24gRSAoKSB7XG4gIC8vIEtlZXAgdGhpcyBlbXB0eSBzbyBpdCdzIGVhc2llciB0byBpbmhlcml0IGZyb21cbiAgLy8gKHZpYSBodHRwczovL2dpdGh1Yi5jb20vbGlwc21hY2sgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2lzc3Vlcy8zKVxufVxuXG5FLnByb3RvdHlwZSA9IHtcbiAgb246IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIGUgPSB0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KTtcblxuICAgIChlW25hbWVdIHx8IChlW25hbWVdID0gW10pKS5wdXNoKHtcbiAgICAgIGZuOiBjYWxsYmFjayxcbiAgICAgIGN0eDogY3R4XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvbmNlOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2ssIGN0eCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBmdW5jdGlvbiBsaXN0ZW5lciAoKSB7XG4gICAgICBzZWxmLm9mZihuYW1lLCBsaXN0ZW5lcik7XG4gICAgICBjYWxsYmFjay5hcHBseShjdHgsIGFyZ3VtZW50cyk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLl8gPSBjYWxsYmFja1xuICAgIHJldHVybiB0aGlzLm9uKG5hbWUsIGxpc3RlbmVyLCBjdHgpO1xuICB9LFxuXG4gIGVtaXQ6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGRhdGEgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGV2dEFyciA9ICgodGhpcy5lIHx8ICh0aGlzLmUgPSB7fSkpW25hbWVdIHx8IFtdKS5zbGljZSgpO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgbGVuID0gZXZ0QXJyLmxlbmd0aDtcblxuICAgIGZvciAoaTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBldnRBcnJbaV0uZm4uYXBwbHkoZXZ0QXJyW2ldLmN0eCwgZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH0sXG5cbiAgb2ZmOiBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuICAgIHZhciBldnRzID0gZVtuYW1lXTtcbiAgICB2YXIgbGl2ZUV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGV2dHMgJiYgY2FsbGJhY2spIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBldnRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChldnRzW2ldLmZuICE9PSBjYWxsYmFjayAmJiBldnRzW2ldLmZuLl8gIT09IGNhbGxiYWNrKVxuICAgICAgICAgIGxpdmVFdmVudHMucHVzaChldnRzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZXZlbnQgZnJvbSBxdWV1ZSB0byBwcmV2ZW50IG1lbW9yeSBsZWFrXG4gICAgLy8gU3VnZ2VzdGVkIGJ5IGh0dHBzOi8vZ2l0aHViLmNvbS9sYXpkXG4gICAgLy8gUmVmOiBodHRwczovL2dpdGh1Yi5jb20vc2NvdHRjb3JnYW4vdGlueS1lbWl0dGVyL2NvbW1pdC9jNmViZmFhOWJjOTczYjMzZDExMGE4NGEzMDc3NDJiN2NmOTRjOTUzI2NvbW1pdGNvbW1lbnQtNTAyNDkxMFxuXG4gICAgKGxpdmVFdmVudHMubGVuZ3RoKVxuICAgICAgPyBlW25hbWVdID0gbGl2ZUV2ZW50c1xuICAgICAgOiBkZWxldGUgZVtuYW1lXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEU7XG5cblxuLyoqKi8gfSksXG4vKiA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpcyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgZGVsZWdhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhbGwgcGFyYW1zIGFuZCBjYWxscyB0aGUgcmlnaHRcbiAqIGxpc3RlbmVyIGZ1bmN0aW9uIGJhc2VkIG9uIGl0cyB0YXJnZXQgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xIVE1MRWxlbWVudHxIVE1MQ29sbGVjdGlvbnxOb2RlTGlzdH0gdGFyZ2V0XG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuKHRhcmdldCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBpZiAoIXRhcmdldCAmJiAhdHlwZSAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50cycpO1xuICAgIH1cblxuICAgIGlmICghaXMuc3RyaW5nKHR5cGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nJyk7XG4gICAgfVxuXG4gICAgaWYgKCFpcy5mbihjYWxsYmFjaykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhpcmQgYXJndW1lbnQgbXVzdCBiZSBhIEZ1bmN0aW9uJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzLm5vZGUodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZSh0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXMubm9kZUxpc3QodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gbGlzdGVuTm9kZUxpc3QodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzLnN0cmluZyh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5TZWxlY3Rvcih0YXJnZXQsIHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBTdHJpbmcsIEhUTUxFbGVtZW50LCBIVE1MQ29sbGVjdGlvbiwgb3IgTm9kZUxpc3QnKTtcbiAgICB9XG59XG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0byBhIEhUTUwgZWxlbWVudFxuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gbm9kZVxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3Rlbk5vZGUobm9kZSwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVzdHJveTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEFkZCBhbiBldmVudCBsaXN0ZW5lciB0byBhIGxpc3Qgb2YgSFRNTCBlbGVtZW50c1xuICogYW5kIHJldHVybnMgYSByZW1vdmUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtOb2RlTGlzdHxIVE1MQ29sbGVjdGlvbn0gbm9kZUxpc3RcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBsaXN0ZW5Ob2RlTGlzdChub2RlTGlzdCwgdHlwZSwgY2FsbGJhY2spIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vZGVMaXN0LCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobm9kZUxpc3QsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGEgc2VsZWN0b3JcbiAqIGFuZCByZXR1cm5zIGEgcmVtb3ZlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGxpc3RlblNlbGVjdG9yKHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaykge1xuICAgIHJldHVybiBkZWxlZ2F0ZShkb2N1bWVudC5ib2R5LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RlbjtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIEhUTUwgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMubm9kZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgICAgICAmJiB2YWx1ZS5ub2RlVHlwZSA9PT0gMTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYXJndW1lbnQgaXMgYSBsaXN0IG9mIEhUTUwgZWxlbWVudHMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5leHBvcnRzLm5vZGVMaXN0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiAodHlwZSA9PT0gJ1tvYmplY3QgTm9kZUxpc3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBIVE1MQ29sbGVjdGlvbl0nKVxuICAgICAgICAmJiAoJ2xlbmd0aCcgaW4gdmFsdWUpXG4gICAgICAgICYmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgZXhwb3J0cy5ub2RlKHZhbHVlWzBdKSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGFyZ3VtZW50IGlzIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5zdHJpbmcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgU3RyaW5nO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBhcmd1bWVudCBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5mbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpO1xuXG4gICAgcmV0dXJuIHR5cGUgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY2xvc2VzdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbi8qKlxuICogRGVsZWdhdGVzIGV2ZW50IHRvIGEgc2VsZWN0b3IuXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIF9kZWxlZ2F0ZShlbGVtZW50LCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICB2YXIgbGlzdGVuZXJGbiA9IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXJGbiwgdXNlQ2FwdHVyZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkZXN0cm95OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lckZuLCB1c2VDYXB0dXJlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBEZWxlZ2F0ZXMgZXZlbnQgdG8gYSBzZWxlY3Rvci5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR8U3RyaW5nfEFycmF5fSBbZWxlbWVudHNdXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHBhcmFtIHtCb29sZWFufSB1c2VDYXB0dXJlXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGRlbGVnYXRlKGVsZW1lbnRzLCBzZWxlY3RvciwgdHlwZSwgY2FsbGJhY2ssIHVzZUNhcHR1cmUpIHtcbiAgICAvLyBIYW5kbGUgdGhlIHJlZ3VsYXIgRWxlbWVudCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEVsZW1lbnQtbGVzcyB1c2FnZSwgaXQgZGVmYXVsdHMgdG8gZ2xvYmFsIGRlbGVnYXRpb25cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gVXNlIGBkb2N1bWVudGAgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciwgdGhlbiBhcHBseSBhcmd1bWVudHNcbiAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0IHdheSB0byAudW5zaGlmdCBgYXJndW1lbnRzYCB3aXRob3V0IHJ1bm5pbmcgaW50byBkZW9wdGltaXphdGlvbnNcbiAgICAgICAgcmV0dXJuIF9kZWxlZ2F0ZS5iaW5kKG51bGwsIGRvY3VtZW50KS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBTZWxlY3Rvci1iYXNlZCB1c2FnZVxuICAgIGlmICh0eXBlb2YgZWxlbWVudHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbGVtZW50cyk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIEFycmF5LWxpa2UgYmFzZWQgdXNhZ2VcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2RlbGVnYXRlKGVsZW1lbnQsIHNlbGVjdG9yLCB0eXBlLCBjYWxsYmFjaywgdXNlQ2FwdHVyZSk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogRmluZHMgY2xvc2VzdCBtYXRjaCBhbmQgaW52b2tlcyBjYWxsYmFjay5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gbGlzdGVuZXIoZWxlbWVudCwgc2VsZWN0b3IsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5kZWxlZ2F0ZVRhcmdldCA9IGNsb3Nlc3QoZS50YXJnZXQsIHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoZS5kZWxlZ2F0ZVRhcmdldCkge1xuICAgICAgICAgICAgY2FsbGJhY2suY2FsbChlbGVtZW50LCBlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWxlZ2F0ZTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIERPQ1VNRU5UX05PREVfVFlQRSA9IDk7XG5cbi8qKlxuICogQSBwb2x5ZmlsbCBmb3IgRWxlbWVudC5tYXRjaGVzKClcbiAqL1xuaWYgKHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuXG4gICAgcHJvdG8ubWF0Y2hlcyA9IHByb3RvLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgcHJvdG8ub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG59XG5cbi8qKlxuICogRmluZHMgdGhlIGNsb3Nlc3QgcGFyZW50IHRoYXQgbWF0Y2hlcyBhIHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gY2xvc2VzdCAoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlICE9PSBET0NVTUVOVF9OT0RFX1RZUEUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50Lm1hdGNoZXMgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgICAgIGVsZW1lbnQubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0O1xuXG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pOyIsIi8qIVxuICogY2xpcGJvYXJkLmpzIHYyLjAuNFxuICogaHR0cHM6Ly96ZW5vcm9jaGEuZ2l0aHViLmlvL2NsaXBib2FyZC5qc1xuICogXG4gKiBMaWNlbnNlZCBNSVQgwqkgWmVubyBSb2NoYVxuICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxlKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkNsaXBib2FyZEpTPWUoKTp0LkNsaXBib2FyZEpTPWUoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihuKXt2YXIgbz17fTtmdW5jdGlvbiByKHQpe2lmKG9bdF0pcmV0dXJuIG9bdF0uZXhwb3J0czt2YXIgZT1vW3RdPXtpOnQsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gblt0XS5jYWxsKGUuZXhwb3J0cyxlLGUuZXhwb3J0cyxyKSxlLmw9ITAsZS5leHBvcnRzfXJldHVybiByLm09bixyLmM9byxyLmQ9ZnVuY3Rpb24odCxlLG4pe3Iubyh0LGUpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpci5kKG4sbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKHQpe3ZhciBlPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiByLmQoZSxcImFcIixlKSxlfSxyLm89ZnVuY3Rpb24odCxlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsZSl9LHIucD1cIlwiLHIoci5zPTApfShbZnVuY3Rpb24odCxlLG4pe1widXNlIHN0cmljdFwiO3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxlLG4pe3JldHVybiBlJiZvKHQucHJvdG90eXBlLGUpLG4mJm8odCxuKSx0fX0oKSxhPW8obigxKSksYz1vKG4oMykpLHU9byhuKDQpKTtmdW5jdGlvbiBvKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGU/dDp7ZGVmYXVsdDp0fX12YXIgbD1mdW5jdGlvbih0KXtmdW5jdGlvbiBvKHQsZSl7IWZ1bmN0aW9uKHQsZSl7aWYoISh0IGluc3RhbmNlb2YgZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX0odGhpcyxvKTt2YXIgbj1mdW5jdGlvbih0LGUpe2lmKCF0KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4hZXx8XCJvYmplY3RcIiE9dHlwZW9mIGUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/dDplfSh0aGlzLChvLl9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKG8pKS5jYWxsKHRoaXMpKTtyZXR1cm4gbi5yZXNvbHZlT3B0aW9ucyhlKSxuLmxpc3RlbkNsaWNrKHQpLG59cmV0dXJuIGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgZSYmbnVsbCE9PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIGUpO3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZSYmZS5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTp0LGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLGUmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKHQsZSk6dC5fX3Byb3RvX189ZSl9KG8sYy5kZWZhdWx0KSxpKG8sW3trZXk6XCJyZXNvbHZlT3B0aW9uc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9MDxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9O3RoaXMuYWN0aW9uPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQuYWN0aW9uP3QuYWN0aW9uOnRoaXMuZGVmYXVsdEFjdGlvbix0aGlzLnRhcmdldD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LnRhcmdldD90LnRhcmdldDp0aGlzLmRlZmF1bHRUYXJnZXQsdGhpcy50ZXh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIHQudGV4dD90LnRleHQ6dGhpcy5kZWZhdWx0VGV4dCx0aGlzLmNvbnRhaW5lcj1cIm9iamVjdFwiPT09cih0LmNvbnRhaW5lcik/dC5jb250YWluZXI6ZG9jdW1lbnQuYm9keX19LHtrZXk6XCJsaXN0ZW5DbGlja1wiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXM7dGhpcy5saXN0ZW5lcj0oMCx1LmRlZmF1bHQpKHQsXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3JldHVybiBlLm9uQ2xpY2sodCl9KX19LHtrZXk6XCJvbkNsaWNrXCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIGU9dC5kZWxlZ2F0ZVRhcmdldHx8dC5jdXJyZW50VGFyZ2V0O3RoaXMuY2xpcGJvYXJkQWN0aW9uJiYodGhpcy5jbGlwYm9hcmRBY3Rpb249bnVsbCksdGhpcy5jbGlwYm9hcmRBY3Rpb249bmV3IGEuZGVmYXVsdCh7YWN0aW9uOnRoaXMuYWN0aW9uKGUpLHRhcmdldDp0aGlzLnRhcmdldChlKSx0ZXh0OnRoaXMudGV4dChlKSxjb250YWluZXI6dGhpcy5jb250YWluZXIsdHJpZ2dlcjplLGVtaXR0ZXI6dGhpc30pfX0se2tleTpcImRlZmF1bHRBY3Rpb25cIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gcyhcImFjdGlvblwiLHQpfX0se2tleTpcImRlZmF1bHRUYXJnZXRcIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgZT1zKFwidGFyZ2V0XCIsdCk7aWYoZSlyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlKX19LHtrZXk6XCJkZWZhdWx0VGV4dFwiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBzKFwidGV4dFwiLHQpfX0se2tleTpcImRlc3Ryb3lcIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMubGlzdGVuZXIuZGVzdHJveSgpLHRoaXMuY2xpcGJvYXJkQWN0aW9uJiYodGhpcy5jbGlwYm9hcmRBY3Rpb24uZGVzdHJveSgpLHRoaXMuY2xpcGJvYXJkQWN0aW9uPW51bGwpfX1dLFt7a2V5OlwiaXNTdXBwb3J0ZWRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXCJjb3B5XCIsXCJjdXRcIl0sZT1cInN0cmluZ1wiPT10eXBlb2YgdD9bdF06dCxuPSEhZG9jdW1lbnQucXVlcnlDb21tYW5kU3VwcG9ydGVkO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24odCl7bj1uJiYhIWRvY3VtZW50LnF1ZXJ5Q29tbWFuZFN1cHBvcnRlZCh0KX0pLG59fV0pLG99KCk7ZnVuY3Rpb24gcyh0LGUpe3ZhciBuPVwiZGF0YS1jbGlwYm9hcmQtXCIrdDtpZihlLmhhc0F0dHJpYnV0ZShuKSlyZXR1cm4gZS5nZXRBdHRyaWJ1dGUobil9dC5leHBvcnRzPWx9LGZ1bmN0aW9uKHQsZSxuKXtcInVzZSBzdHJpY3RcIjt2YXIgbyxyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9LGk9ZnVuY3Rpb24oKXtmdW5jdGlvbiBvKHQsZSl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5lbnVtZXJhYmxlPW8uZW51bWVyYWJsZXx8ITEsby5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbyYmKG8ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LG8ua2V5LG8pfX1yZXR1cm4gZnVuY3Rpb24odCxlLG4pe3JldHVybiBlJiZvKHQucHJvdG90eXBlLGUpLG4mJm8odCxuKSx0fX0oKSxhPW4oMiksYz0obz1hKSYmby5fX2VzTW9kdWxlP286e2RlZmF1bHQ6b307dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpeyFmdW5jdGlvbih0LGUpe2lmKCEodCBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5yZXNvbHZlT3B0aW9ucyh0KSx0aGlzLmluaXRTZWxlY3Rpb24oKX1yZXR1cm4gaShlLFt7a2V5OlwicmVzb2x2ZU9wdGlvbnNcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0PTA8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fTt0aGlzLmFjdGlvbj10LmFjdGlvbix0aGlzLmNvbnRhaW5lcj10LmNvbnRhaW5lcix0aGlzLmVtaXR0ZXI9dC5lbWl0dGVyLHRoaXMudGFyZ2V0PXQudGFyZ2V0LHRoaXMudGV4dD10LnRleHQsdGhpcy50cmlnZ2VyPXQudHJpZ2dlcix0aGlzLnNlbGVjdGVkVGV4dD1cIlwifX0se2tleTpcImluaXRTZWxlY3Rpb25cIix2YWx1ZTpmdW5jdGlvbigpe3RoaXMudGV4dD90aGlzLnNlbGVjdEZha2UoKTp0aGlzLnRhcmdldCYmdGhpcy5zZWxlY3RUYXJnZXQoKX19LHtrZXk6XCJzZWxlY3RGYWtlXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLGU9XCJydGxcIj09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRpclwiKTt0aGlzLnJlbW92ZUZha2UoKSx0aGlzLmZha2VIYW5kbGVyQ2FsbGJhY2s9ZnVuY3Rpb24oKXtyZXR1cm4gdC5yZW1vdmVGYWtlKCl9LHRoaXMuZmFrZUhhbmRsZXI9dGhpcy5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKXx8ITAsdGhpcy5mYWtlRWxlbT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiksdGhpcy5mYWtlRWxlbS5zdHlsZS5mb250U2l6ZT1cIjEycHRcIix0aGlzLmZha2VFbGVtLnN0eWxlLmJvcmRlcj1cIjBcIix0aGlzLmZha2VFbGVtLnN0eWxlLnBhZGRpbmc9XCIwXCIsdGhpcy5mYWtlRWxlbS5zdHlsZS5tYXJnaW49XCIwXCIsdGhpcy5mYWtlRWxlbS5zdHlsZS5wb3NpdGlvbj1cImFic29sdXRlXCIsdGhpcy5mYWtlRWxlbS5zdHlsZVtlP1wicmlnaHRcIjpcImxlZnRcIl09XCItOTk5OXB4XCI7dmFyIG49d2luZG93LnBhZ2VZT2Zmc2V0fHxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO3RoaXMuZmFrZUVsZW0uc3R5bGUudG9wPW4rXCJweFwiLHRoaXMuZmFrZUVsZW0uc2V0QXR0cmlidXRlKFwicmVhZG9ubHlcIixcIlwiKSx0aGlzLmZha2VFbGVtLnZhbHVlPXRoaXMudGV4dCx0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmZha2VFbGVtKSx0aGlzLnNlbGVjdGVkVGV4dD0oMCxjLmRlZmF1bHQpKHRoaXMuZmFrZUVsZW0pLHRoaXMuY29weVRleHQoKX19LHtrZXk6XCJyZW1vdmVGYWtlXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmZha2VIYW5kbGVyJiYodGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrKSx0aGlzLmZha2VIYW5kbGVyPW51bGwsdGhpcy5mYWtlSGFuZGxlckNhbGxiYWNrPW51bGwpLHRoaXMuZmFrZUVsZW0mJih0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmZha2VFbGVtKSx0aGlzLmZha2VFbGVtPW51bGwpfX0se2tleTpcInNlbGVjdFRhcmdldFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZWxlY3RlZFRleHQ9KDAsYy5kZWZhdWx0KSh0aGlzLnRhcmdldCksdGhpcy5jb3B5VGV4dCgpfX0se2tleTpcImNvcHlUZXh0XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT12b2lkIDA7dHJ5e2U9ZG9jdW1lbnQuZXhlY0NvbW1hbmQodGhpcy5hY3Rpb24pfWNhdGNoKHQpe2U9ITF9dGhpcy5oYW5kbGVSZXN1bHQoZSl9fSx7a2V5OlwiaGFuZGxlUmVzdWx0XCIsdmFsdWU6ZnVuY3Rpb24odCl7dGhpcy5lbWl0dGVyLmVtaXQodD9cInN1Y2Nlc3NcIjpcImVycm9yXCIse2FjdGlvbjp0aGlzLmFjdGlvbix0ZXh0OnRoaXMuc2VsZWN0ZWRUZXh0LHRyaWdnZXI6dGhpcy50cmlnZ2VyLGNsZWFyU2VsZWN0aW9uOnRoaXMuY2xlYXJTZWxlY3Rpb24uYmluZCh0aGlzKX0pfX0se2tleTpcImNsZWFyU2VsZWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnRyaWdnZXImJnRoaXMudHJpZ2dlci5mb2N1cygpLHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKX19LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLnJlbW92ZUZha2UoKX19LHtrZXk6XCJhY3Rpb25cIixzZXQ6ZnVuY3Rpb24oKXt2YXIgdD0wPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJjb3B5XCI7aWYodGhpcy5fYWN0aW9uPXQsXCJjb3B5XCIhPT10aGlzLl9hY3Rpb24mJlwiY3V0XCIhPT10aGlzLl9hY3Rpb24pdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFwiYWN0aW9uXCIgdmFsdWUsIHVzZSBlaXRoZXIgXCJjb3B5XCIgb3IgXCJjdXRcIicpfSxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fYWN0aW9ufX0se2tleTpcInRhcmdldFwiLHNldDpmdW5jdGlvbih0KXtpZih2b2lkIDAhPT10KXtpZighdHx8XCJvYmplY3RcIiE9PSh2b2lkIDA9PT10P1widW5kZWZpbmVkXCI6cih0KSl8fDEhPT10Lm5vZGVUeXBlKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIHZhbHVlLCB1c2UgYSB2YWxpZCBFbGVtZW50Jyk7aWYoXCJjb3B5XCI9PT10aGlzLmFjdGlvbiYmdC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgXCJ0YXJnZXRcIiBhdHRyaWJ1dGUuIFBsZWFzZSB1c2UgXCJyZWFkb25seVwiIGluc3RlYWQgb2YgXCJkaXNhYmxlZFwiIGF0dHJpYnV0ZScpO2lmKFwiY3V0XCI9PT10aGlzLmFjdGlvbiYmKHQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIil8fHQuaGFzQXR0cmlidXRlKFwiZGlzYWJsZWRcIikpKXRocm93IG5ldyBFcnJvcignSW52YWxpZCBcInRhcmdldFwiIGF0dHJpYnV0ZS4gWW91IGNhblxcJ3QgY3V0IHRleHQgZnJvbSBlbGVtZW50cyB3aXRoIFwicmVhZG9ubHlcIiBvciBcImRpc2FibGVkXCIgYXR0cmlidXRlcycpO3RoaXMuX3RhcmdldD10fX0sZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3RhcmdldH19XSksZX0oKTt0LmV4cG9ydHM9dX0sZnVuY3Rpb24odCxlKXt0LmV4cG9ydHM9ZnVuY3Rpb24odCl7dmFyIGU7aWYoXCJTRUxFQ1RcIj09PXQubm9kZU5hbWUpdC5mb2N1cygpLGU9dC52YWx1ZTtlbHNlIGlmKFwiSU5QVVRcIj09PXQubm9kZU5hbWV8fFwiVEVYVEFSRUFcIj09PXQubm9kZU5hbWUpe3ZhciBuPXQuaGFzQXR0cmlidXRlKFwicmVhZG9ubHlcIik7bnx8dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLFwiXCIpLHQuc2VsZWN0KCksdC5zZXRTZWxlY3Rpb25SYW5nZSgwLHQudmFsdWUubGVuZ3RoKSxufHx0LnJlbW92ZUF0dHJpYnV0ZShcInJlYWRvbmx5XCIpLGU9dC52YWx1ZX1lbHNle3QuaGFzQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpJiZ0LmZvY3VzKCk7dmFyIG89d2luZG93LmdldFNlbGVjdGlvbigpLHI9ZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtyLnNlbGVjdE5vZGVDb250ZW50cyh0KSxvLnJlbW92ZUFsbFJhbmdlcygpLG8uYWRkUmFuZ2UociksZT1vLnRvU3RyaW5nKCl9cmV0dXJuIGV9fSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4oKXt9bi5wcm90b3R5cGU9e29uOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz10aGlzLmV8fCh0aGlzLmU9e30pO3JldHVybihvW3RdfHwob1t0XT1bXSkpLnB1c2goe2ZuOmUsY3R4Om59KSx0aGlzfSxvbmNlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgbz10aGlzO2Z1bmN0aW9uIHIoKXtvLm9mZih0LHIpLGUuYXBwbHkobixhcmd1bWVudHMpfXJldHVybiByLl89ZSx0aGlzLm9uKHQscixuKX0sZW1pdDpmdW5jdGlvbih0KXtmb3IodmFyIGU9W10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSksbj0oKHRoaXMuZXx8KHRoaXMuZT17fSkpW3RdfHxbXSkuc2xpY2UoKSxvPTAscj1uLmxlbmd0aDtvPHI7bysrKW5bb10uZm4uYXBwbHkobltvXS5jdHgsZSk7cmV0dXJuIHRoaXN9LG9mZjpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMuZXx8KHRoaXMuZT17fSksbz1uW3RdLHI9W107aWYobyYmZSlmb3IodmFyIGk9MCxhPW8ubGVuZ3RoO2k8YTtpKyspb1tpXS5mbiE9PWUmJm9baV0uZm4uXyE9PWUmJnIucHVzaChvW2ldKTtyZXR1cm4gci5sZW5ndGg/blt0XT1yOmRlbGV0ZSBuW3RdLHRoaXN9fSx0LmV4cG9ydHM9bn0sZnVuY3Rpb24odCxlLG4pe3ZhciBkPW4oNSksaD1uKDYpO3QuZXhwb3J0cz1mdW5jdGlvbih0LGUsbil7aWYoIXQmJiFlJiYhbil0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50c1wiKTtpZighZC5zdHJpbmcoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nXCIpO2lmKCFkLmZuKG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGlyZCBhcmd1bWVudCBtdXN0IGJlIGEgRnVuY3Rpb25cIik7aWYoZC5ub2RlKHQpKXJldHVybiBzPWUsZj1uLChsPXQpLmFkZEV2ZW50TGlzdGVuZXIocyxmKSx7ZGVzdHJveTpmdW5jdGlvbigpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihzLGYpfX07aWYoZC5ub2RlTGlzdCh0KSlyZXR1cm4gYT10LGM9ZSx1PW4sQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhLGZ1bmN0aW9uKHQpe3QuYWRkRXZlbnRMaXN0ZW5lcihjLHUpfSkse2Rlc3Ryb3k6ZnVuY3Rpb24oKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGEsZnVuY3Rpb24odCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKGMsdSl9KX19O2lmKGQuc3RyaW5nKHQpKXJldHVybiBvPXQscj1lLGk9bixoKGRvY3VtZW50LmJvZHksbyxyLGkpO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgU3RyaW5nLCBIVE1MRWxlbWVudCwgSFRNTENvbGxlY3Rpb24sIG9yIE5vZGVMaXN0XCIpO3ZhciBvLHIsaSxhLGMsdSxsLHMsZn19LGZ1bmN0aW9uKHQsbil7bi5ub2RlPWZ1bmN0aW9uKHQpe3JldHVybiB2b2lkIDAhPT10JiZ0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQmJjE9PT10Lm5vZGVUeXBlfSxuLm5vZGVMaXN0PWZ1bmN0aW9uKHQpe3ZhciBlPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KTtyZXR1cm4gdm9pZCAwIT09dCYmKFwiW29iamVjdCBOb2RlTGlzdF1cIj09PWV8fFwiW29iamVjdCBIVE1MQ29sbGVjdGlvbl1cIj09PWUpJiZcImxlbmd0aFwiaW4gdCYmKDA9PT10Lmxlbmd0aHx8bi5ub2RlKHRbMF0pKX0sbi5zdHJpbmc9ZnVuY3Rpb24odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHR8fHQgaW5zdGFuY2VvZiBTdHJpbmd9LG4uZm49ZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IEZ1bmN0aW9uXVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfX0sZnVuY3Rpb24odCxlLG4pe3ZhciBhPW4oNyk7ZnVuY3Rpb24gaSh0LGUsbixvLHIpe3ZhciBpPWZ1bmN0aW9uKGUsbix0LG8pe3JldHVybiBmdW5jdGlvbih0KXt0LmRlbGVnYXRlVGFyZ2V0PWEodC50YXJnZXQsbiksdC5kZWxlZ2F0ZVRhcmdldCYmby5jYWxsKGUsdCl9fS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihuLGkscikse2Rlc3Ryb3k6ZnVuY3Rpb24oKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIobixpLHIpfX19dC5leHBvcnRzPWZ1bmN0aW9uKHQsZSxuLG8scil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdC5hZGRFdmVudExpc3RlbmVyP2kuYXBwbHkobnVsbCxhcmd1bWVudHMpOlwiZnVuY3Rpb25cIj09dHlwZW9mIG4/aS5iaW5kKG51bGwsZG9jdW1lbnQpLmFwcGx5KG51bGwsYXJndW1lbnRzKTooXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodCkpLEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0LGZ1bmN0aW9uKHQpe3JldHVybiBpKHQsZSxuLG8scil9KSl9fSxmdW5jdGlvbih0LGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBFbGVtZW50JiYhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyl7dmFyIG49RWxlbWVudC5wcm90b3R5cGU7bi5tYXRjaGVzPW4ubWF0Y2hlc1NlbGVjdG9yfHxuLm1vek1hdGNoZXNTZWxlY3Rvcnx8bi5tc01hdGNoZXNTZWxlY3Rvcnx8bi5vTWF0Y2hlc1NlbGVjdG9yfHxuLndlYmtpdE1hdGNoZXNTZWxlY3Rvcn10LmV4cG9ydHM9ZnVuY3Rpb24odCxlKXtmb3IoO3QmJjkhPT10Lm5vZGVUeXBlOyl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5tYXRjaGVzJiZ0Lm1hdGNoZXMoZSkpcmV0dXJuIHQ7dD10LnBhcmVudE5vZGV9fX1dKX0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIiFmdW5jdGlvbihkKXtmdW5jdGlvbiBuKG4sZSl7cmV0dXJuIG49bi5yZXBsYWNlKC88aW5uZXI+L2csXCIoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXFxuXFxyXXwoPzpcXHI/XFxufFxccikoPyFcXHI/XFxufFxccikpXCIpLGUmJihuPW4rXCJ8XCIrbi5yZXBsYWNlKC9fL2csXCJcXFxcKlwiKSksUmVnRXhwKFwiKCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFx7Mn0pKikoPzpcIituK1wiKVwiKX12YXIgZT1cIig/OlxcXFxcXFxcLnxgYC4rP2BgfGBbXmBcXHJcXFxcbl0rYHxbXlxcXFxcXFxcfFxcclxcXFxuYF0pK1wiLHQ9XCJcXFxcfD9fXyg/OlxcXFx8X18pK1xcXFx8Pyg/Oig/Olxccj9cXG58XFxyKXwkKVwiLnJlcGxhY2UoL19fL2csZSksYT1cIlxcXFx8P1sgXFx0XSo6Py17Myx9Oj9bIFxcdF0qKD86XFxcXHxbIFxcdF0qOj8tezMsfTo/WyBcXHRdKikrXFxcXHw/KD86XFxyP1xcbnxcXHIpXCI7ZC5sYW5ndWFnZXMubWFya2Rvd249ZC5sYW5ndWFnZXMuZXh0ZW5kKFwibWFya3VwXCIse30pLGQubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcIm1hcmtkb3duXCIsXCJwcm9sb2dcIix7YmxvY2txdW90ZTp7cGF0dGVybjovXj4oPzpbXFx0IF0qPikqL20sYWxpYXM6XCJwdW5jdHVhdGlvblwifSx0YWJsZTp7cGF0dGVybjpSZWdFeHAoXCJeXCIrdCthK1wiKD86XCIrdCtcIikqXCIsXCJtXCIpLGluc2lkZTp7XCJ0YWJsZS1kYXRhLXJvd3NcIjp7cGF0dGVybjpSZWdFeHAoXCJeKFwiK3QrYStcIikoPzpcIit0K1wiKSokXCIpLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOntcInRhYmxlLWRhdGFcIjp7cGF0dGVybjpSZWdFeHAoZSksaW5zaWRlOmQubGFuZ3VhZ2VzLm1hcmtkb3dufSxwdW5jdHVhdGlvbjovXFx8L319LFwidGFibGUtbGluZVwiOntwYXR0ZXJuOlJlZ0V4cChcIl4oXCIrdCtcIilcIithK1wiJFwiKSxsb29rYmVoaW5kOiEwLGluc2lkZTp7cHVuY3R1YXRpb246L1xcfHw6Py17Myx9Oj8vfX0sXCJ0YWJsZS1oZWFkZXItcm93XCI6e3BhdHRlcm46UmVnRXhwKFwiXlwiK3QrXCIkXCIpLGluc2lkZTp7XCJ0YWJsZS1oZWFkZXJcIjp7cGF0dGVybjpSZWdFeHAoZSksYWxpYXM6XCJpbXBvcnRhbnRcIixpbnNpZGU6ZC5sYW5ndWFnZXMubWFya2Rvd259LHB1bmN0dWF0aW9uOi9cXHwvfX19fSxjb2RlOlt7cGF0dGVybjovKF5bIFxcdF0qKD86XFxyP1xcbnxcXHIpKSg/OiB7NH18XFx0KS4rKD86KD86XFxyP1xcbnxcXHIpKD86IHs0fXxcXHQpLispKi9tLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJrZXl3b3JkXCJ9LHtwYXR0ZXJuOi9gYC4rP2BgfGBbXmBcXHJcXG5dK2AvLGFsaWFzOlwia2V5d29yZFwifSx7cGF0dGVybjovXmBgYFtcXHNcXFNdKj9eYGBgJC9tLGdyZWVkeTohMCxpbnNpZGU6e1wiY29kZS1ibG9ja1wiOntwYXR0ZXJuOi9eKGBgYC4qKD86XFxyP1xcbnxcXHIpKVtcXHNcXFNdKz8oPz0oPzpcXHI/XFxufFxccileYGBgJCkvbSxsb29rYmVoaW5kOiEwfSxcImNvZGUtbGFuZ3VhZ2VcIjp7cGF0dGVybjovXihgYGApLisvLGxvb2tiZWhpbmQ6ITB9LHB1bmN0dWF0aW9uOi9gYGAvfX1dLHRpdGxlOlt7cGF0dGVybjovXFxTLiooPzpcXHI/XFxufFxccikoPzo9PSt8LS0rKSg/PVsgXFx0XSokKS9tLGFsaWFzOlwiaW1wb3J0YW50XCIsaW5zaWRlOntwdW5jdHVhdGlvbjovPT0rJHwtLSskL319LHtwYXR0ZXJuOi8oXlxccyopIysuKy9tLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJpbXBvcnRhbnRcIixpbnNpZGU6e3B1bmN0dWF0aW9uOi9eIyt8IyskL319XSxocjp7cGF0dGVybjovKF5cXHMqKShbKi1dKSg/OltcXHQgXSpcXDIpezIsfSg/PVxccyokKS9tLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJwdW5jdHVhdGlvblwifSxsaXN0OntwYXR0ZXJuOi8oXlxccyopKD86WyorLV18XFxkK1xcLikoPz1bXFx0IF0uKS9tLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJwdW5jdHVhdGlvblwifSxcInVybC1yZWZlcmVuY2VcIjp7cGF0dGVybjovIT9cXFtbXlxcXV0rXFxdOltcXHQgXSsoPzpcXFMrfDwoPzpcXFxcLnxbXj5cXFxcXSkrPikoPzpbXFx0IF0rKD86XCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwifCcoPzpcXFxcLnxbXidcXFxcXSkqJ3xcXCgoPzpcXFxcLnxbXilcXFxcXSkqXFwpKSk/LyxpbnNpZGU6e3ZhcmlhYmxlOntwYXR0ZXJuOi9eKCE/XFxbKVteXFxdXSsvLGxvb2tiZWhpbmQ6ITB9LHN0cmluZzovKD86XCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwifCcoPzpcXFxcLnxbXidcXFxcXSkqJ3xcXCgoPzpcXFxcLnxbXilcXFxcXSkqXFwpKSQvLHB1bmN0dWF0aW9uOi9eW1xcW1xcXSE6XXxbPD5dL30sYWxpYXM6XCJ1cmxcIn0sYm9sZDp7cGF0dGVybjpuKFwiX18oPzooPyFfKTxpbm5lcj58Xyg/Oig/IV8pPGlubmVyPikrXykrX19cIiwhMCksbG9va2JlaGluZDohMCxncmVlZHk6ITAsaW5zaWRlOntjb250ZW50OntwYXR0ZXJuOi8oXi4uKVtcXHNcXFNdKyg/PS4uJCkvLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOnt9fSxwdW5jdHVhdGlvbjovXFwqXFwqfF9fL319LGl0YWxpYzp7cGF0dGVybjpuKFwiXyg/Oig/IV8pPGlubmVyPnxfXyg/Oig/IV8pPGlubmVyPikrX18pK19cIiwhMCksbG9va2JlaGluZDohMCxncmVlZHk6ITAsaW5zaWRlOntjb250ZW50OntwYXR0ZXJuOi8oXi4pW1xcc1xcU10rKD89LiQpLyxsb29rYmVoaW5kOiEwLGluc2lkZTp7fX0scHVuY3R1YXRpb246L1sqX10vfX0sc3RyaWtlOntwYXR0ZXJuOm4oXCIofn4/KSg/Oig/IX4pPGlubmVyPikrP1xcXFwyXCIsITEpLGxvb2tiZWhpbmQ6ITAsZ3JlZWR5OiEwLGluc2lkZTp7Y29udGVudDp7cGF0dGVybjovKF5+fj8pW1xcc1xcU10rKD89XFwxJCkvLGxvb2tiZWhpbmQ6ITAsaW5zaWRlOnt9fSxwdW5jdHVhdGlvbjovfn4/L319LHVybDp7cGF0dGVybjpuKCchP1xcXFxbKD86KD8hXFxcXF0pPGlubmVyPikrXFxcXF0oPzpcXFxcKFteXFxcXHMpXSsoPzpbXFx0IF0rXCIoPzpcXFxcXFxcXC58W15cIlxcXFxcXFxcXSkqXCIpP1xcXFwpfCA/XFxcXFsoPzooPyFcXFxcXSk8aW5uZXI+KStcXFxcXSknLCExKSxsb29rYmVoaW5kOiEwLGdyZWVkeTohMCxpbnNpZGU6e3ZhcmlhYmxlOntwYXR0ZXJuOi8oXFxbKVteXFxdXSsoPz1cXF0kKS8sbG9va2JlaGluZDohMH0sY29udGVudDp7cGF0dGVybjovKF4hP1xcWylbXlxcXV0rKD89XFxdKS8sbG9va2JlaGluZDohMCxpbnNpZGU6e319LHN0cmluZzp7cGF0dGVybjovXCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwiKD89XFwpJCkvfX19fSksW1widXJsXCIsXCJib2xkXCIsXCJpdGFsaWNcIixcInN0cmlrZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe1tcInVybFwiLFwiYm9sZFwiLFwiaXRhbGljXCIsXCJzdHJpa2VcIl0uZm9yRWFjaChmdW5jdGlvbihuKXtlIT09biYmKGQubGFuZ3VhZ2VzLm1hcmtkb3duW2VdLmluc2lkZS5jb250ZW50Lmluc2lkZVtuXT1kLmxhbmd1YWdlcy5tYXJrZG93bltuXSl9KX0pLGQuaG9va3MuYWRkKFwiYWZ0ZXItdG9rZW5pemVcIixmdW5jdGlvbihuKXtcIm1hcmtkb3duXCIhPT1uLmxhbmd1YWdlJiZcIm1kXCIhPT1uLmxhbmd1YWdlfHwhZnVuY3Rpb24gbihlKXtpZihlJiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIHQ9MCxhPWUubGVuZ3RoO3Q8YTt0Kyspe3ZhciBpPWVbdF07aWYoXCJjb2RlXCI9PT1pLnR5cGUpe3ZhciByPWkuY29udGVudFsxXSxvPWkuY29udGVudFszXTtpZihyJiZvJiZcImNvZGUtbGFuZ3VhZ2VcIj09PXIudHlwZSYmXCJjb2RlLWJsb2NrXCI9PT1vLnR5cGUmJlwic3RyaW5nXCI9PXR5cGVvZiByLmNvbnRlbnQpe3ZhciBsPVwibGFuZ3VhZ2UtXCIrci5jb250ZW50LnRyaW0oKS5zcGxpdCgvXFxzKy8pWzBdLnRvTG93ZXJDYXNlKCk7by5hbGlhcz9cInN0cmluZ1wiPT10eXBlb2Ygby5hbGlhcz9vLmFsaWFzPVtvLmFsaWFzLGxdOm8uYWxpYXMucHVzaChsKTpvLmFsaWFzPVtsXX19ZWxzZSBuKGkuY29udGVudCl9fShuLnRva2Vucyl9KSxkLmhvb2tzLmFkZChcIndyYXBcIixmdW5jdGlvbihuKXtpZihcImNvZGUtYmxvY2tcIj09PW4udHlwZSl7Zm9yKHZhciBlPVwiXCIsdD0wLGE9bi5jbGFzc2VzLmxlbmd0aDt0PGE7dCsrKXt2YXIgaT1uLmNsYXNzZXNbdF0scj0vbGFuZ3VhZ2UtKC4rKS8uZXhlYyhpKTtpZihyKXtlPXJbMV07YnJlYWt9fXZhciBvPWQubGFuZ3VhZ2VzW2VdO2lmKG8pe3ZhciBsPW4uY29udGVudC5yZXBsYWNlKC8mbHQ7L2csXCI8XCIpLnJlcGxhY2UoLyZhbXA7L2csXCImXCIpO24uY29udGVudD1kLmhpZ2hsaWdodChsLG8sZSl9ZWxzZSBpZihlJiZcIm5vbmVcIiE9PWUmJmQucGx1Z2lucy5hdXRvbG9hZGVyKXt2YXIgcz1cIm1kLVwiKyhuZXcgRGF0ZSkudmFsdWVPZigpK1wiLVwiK01hdGguZmxvb3IoMWUxNipNYXRoLnJhbmRvbSgpKTtuLmF0dHJpYnV0ZXMuaWQ9cyxkLnBsdWdpbnMuYXV0b2xvYWRlci5sb2FkTGFuZ3VhZ2VzKGUsZnVuY3Rpb24oKXt2YXIgbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKTtuJiYobi5pbm5lckhUTUw9ZC5oaWdobGlnaHQobi50ZXh0Q29udGVudCxkLmxhbmd1YWdlc1tlXSxlKSl9KX19fSksZC5sYW5ndWFnZXMubWQ9ZC5sYW5ndWFnZXMubWFya2Rvd259KFByaXNtKTsiLCJQcmlzbS5sYW5ndWFnZXMud2lraT1QcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKFwibWFya3VwXCIse1wiYmxvY2stY29tbWVudFwiOntwYXR0ZXJuOi8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj9cXCpcXC8vLGxvb2tiZWhpbmQ6ITAsYWxpYXM6XCJjb21tZW50XCJ9LGhlYWRpbmc6e3BhdHRlcm46L14oPSspLis/XFwxL20saW5zaWRlOntwdW5jdHVhdGlvbjovXj0rfD0rJC8saW1wb3J0YW50Oi8uKy99fSxlbXBoYXNpczp7cGF0dGVybjovKCd7Miw1fSkuKz9cXDEvLGluc2lkZTp7XCJib2xkIGl0YWxpY1wiOntwYXR0ZXJuOi8oJycnJycpLis/KD89XFwxKS8sbG9va2JlaGluZDohMH0sYm9sZDp7cGF0dGVybjovKCcnJylbXiddKD86Lio/W14nXSk/KD89XFwxKS8sbG9va2JlaGluZDohMH0saXRhbGljOntwYXR0ZXJuOi8oJycpW14nXSg/Oi4qP1teJ10pPyg/PVxcMSkvLGxvb2tiZWhpbmQ6ITB9LHB1bmN0dWF0aW9uOi9eJycrfCcnKyQvfX0saHI6e3BhdHRlcm46L14tezQsfS9tLGFsaWFzOlwicHVuY3R1YXRpb25cIn0sdXJsOlsvSVNCTiArKD86OTdbODldWyAtXT8pPyg/OlxcZFsgLV0/KXs5fVtcXGR4XVxcYnwoPzpSRkN8UE1JRCkgK1xcZCsvaSwvXFxbXFxbLis/XFxdXFxdfFxcWy4rP1xcXS9dLHZhcmlhYmxlOlsvX19bQS1aXStfXy8sL1xce3szfS4rP1xcfXszfS8sL1xce1xcey4rP1xcfVxcfS9dLHN5bWJvbDpbL14jcmVkaXJlY3QvaW0sL357Myw1fS9dLFwidGFibGUtdGFnXCI6e3BhdHRlcm46LygoPzpefFt8IV0pW3whXSlbXnxcXHJcXG5dK1xcfCg/IVxcfCkvbSxsb29rYmVoaW5kOiEwLGluc2lkZTp7XCJ0YWJsZS1iYXJcIjp7cGF0dGVybjovXFx8JC8sYWxpYXM6XCJwdW5jdHVhdGlvblwifSxyZXN0OlByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmluc2lkZX19LHB1bmN0dWF0aW9uOi9eKD86XFx7XFx8fFxcfFxcfXxcXHwtfFsqIzo7IXxdKXxcXHxcXHx8ISEvbX0pLFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXCJ3aWtpXCIsXCJ0YWdcIix7bm93aWtpOntwYXR0ZXJuOi88KG5vd2lraXxwcmV8c291cmNlKVxcYltcXHNcXFNdKj8+W1xcc1xcU10qPzxcXC9cXDE+L2ksaW5zaWRlOnt0YWc6e3BhdHRlcm46LzwoPzpub3dpa2l8cHJlfHNvdXJjZSlcXGJbXFxzXFxTXSo/Pnw8XFwvKD86bm93aWtpfHByZXxzb3VyY2UpPi9pLGluc2lkZTpQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5pbnNpZGV9fX19KTsiLCIhZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZi5QcmlzbSYmc2VsZi5kb2N1bWVudClpZihQcmlzbS5wbHVnaW5zLnRvb2xiYXIpe3ZhciByPXdpbmRvdy5DbGlwYm9hcmRKU3x8dm9pZCAwO3J8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHJlcXVpcmV8fChyPXJlcXVpcmUoXCJjbGlwYm9hcmRcIikpO3ZhciBpPVtdO2lmKCFyKXt2YXIgbz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIik7by5vbmxvYWQ9ZnVuY3Rpb24oKXtpZihyPXdpbmRvdy5DbGlwYm9hcmRKUylmb3IoO2kubGVuZ3RoOylpLnBvcCgpKCl9LG8uc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvY2xpcGJvYXJkLmpzLzIuMC4wL2NsaXBib2FyZC5taW4uanNcIixlLmFwcGVuZENoaWxkKG8pfVByaXNtLnBsdWdpbnMudG9vbGJhci5yZWdpc3RlckJ1dHRvbihcImNvcHktdG8tY2xpcGJvYXJkXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtyZXR1cm4gdC50ZXh0Q29udGVudD1cIkNvcHlcIixyP28oKTppLnB1c2gobyksdDtmdW5jdGlvbiBvKCl7dmFyIG89bmV3IHIodCx7dGV4dDpmdW5jdGlvbigpe3JldHVybiBlLmNvZGV9fSk7by5vbihcInN1Y2Nlc3NcIixmdW5jdGlvbigpe3QudGV4dENvbnRlbnQ9XCJDb3BpZWQhXCIsbigpfSksby5vbihcImVycm9yXCIsZnVuY3Rpb24oKXt0LnRleHRDb250ZW50PVwiUHJlc3MgQ3RybCtDIHRvIGNvcHlcIixuKCl9KX1mdW5jdGlvbiBuKCl7c2V0VGltZW91dChmdW5jdGlvbigpe3QudGV4dENvbnRlbnQ9XCJDb3B5XCJ9LDVlMyl9fSl9ZWxzZSBjb25zb2xlLndhcm4oXCJDb3B5IHRvIENsaXBib2FyZCBwbHVnaW4gbG9hZGVkIGJlZm9yZSBUb29sYmFyIHBsdWdpbi5cIil9KCk7IiwiIWZ1bmN0aW9uKCl7dmFyIGk9T2JqZWN0LmFzc2lnbnx8ZnVuY3Rpb24oZSxuKXtmb3IodmFyIHQgaW4gbiluLmhhc093blByb3BlcnR5KHQpJiYoZVt0XT1uW3RdKTtyZXR1cm4gZX07ZnVuY3Rpb24gZShlKXt0aGlzLmRlZmF1bHRzPWkoe30sZSl9ZnVuY3Rpb24gbChlKXtmb3IodmFyIG49MCx0PTA7dDxlLmxlbmd0aDsrK3QpZS5jaGFyQ29kZUF0KHQpPT1cIlxcdFwiLmNoYXJDb2RlQXQoMCkmJihuKz0zKTtyZXR1cm4gZS5sZW5ndGgrbn1lLnByb3RvdHlwZT17c2V0RGVmYXVsdHM6ZnVuY3Rpb24oZSl7dGhpcy5kZWZhdWx0cz1pKHRoaXMuZGVmYXVsdHMsZSl9LG5vcm1hbGl6ZTpmdW5jdGlvbihlLG4pe2Zvcih2YXIgdCBpbiBuPWkodGhpcy5kZWZhdWx0cyxuKSl7dmFyIHI9dC5yZXBsYWNlKC8tKFxcdykvZyxmdW5jdGlvbihlLG4pe3JldHVybiBuLnRvVXBwZXJDYXNlKCl9KTtcIm5vcm1hbGl6ZVwiIT09dCYmXCJzZXREZWZhdWx0c1wiIT09ciYmblt0XSYmdGhpc1tyXSYmKGU9dGhpc1tyXS5jYWxsKHRoaXMsZSxuW3RdKSl9cmV0dXJuIGV9LGxlZnRUcmltOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL15cXHMrLyxcIlwiKX0scmlnaHRUcmltOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1xccyskLyxcIlwiKX0sdGFic1RvU3BhY2VzOmZ1bmN0aW9uKGUsbil7cmV0dXJuIG49MHxufHw0LGUucmVwbGFjZSgvXFx0L2csbmV3IEFycmF5KCsrbikuam9pbihcIiBcIikpfSxzcGFjZXNUb1RhYnM6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gbj0wfG58fDQsZS5yZXBsYWNlKFJlZ0V4cChcIiB7XCIrbitcIn1cIixcImdcIiksXCJcXHRcIil9LHJlbW92ZVRyYWlsaW5nOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL1xccyo/JC9nbSxcIlwiKX0scmVtb3ZlSW5pdGlhbExpbmVGZWVkOmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlcGxhY2UoL14oPzpcXHI/XFxufFxccikvLFwiXCIpfSxyZW1vdmVJbmRlbnQ6ZnVuY3Rpb24oZSl7dmFyIG49ZS5tYXRjaCgvXlteXFxTXFxuXFxyXSooPz1cXFMpL2dtKTtyZXR1cm4gbiYmblswXS5sZW5ndGg/KG4uc29ydChmdW5jdGlvbihlLG4pe3JldHVybiBlLmxlbmd0aC1uLmxlbmd0aH0pLG5bMF0ubGVuZ3RoP2UucmVwbGFjZShSZWdFeHAoXCJeXCIrblswXSxcImdtXCIpLFwiXCIpOmUpOmV9LGluZGVudDpmdW5jdGlvbihlLG4pe3JldHVybiBlLnJlcGxhY2UoL15bXlxcU1xcblxccl0qKD89XFxTKS9nbSxuZXcgQXJyYXkoKytuKS5qb2luKFwiXFx0XCIpK1wiJCZcIil9LGJyZWFrTGluZXM6ZnVuY3Rpb24oZSxuKXtuPSEwPT09bj84MDowfG58fDgwO2Zvcih2YXIgdD1lLnNwbGl0KFwiXFxuXCIpLHI9MDtyPHQubGVuZ3RoOysrcilpZighKGwodFtyXSk8PW4pKXtmb3IodmFyIGk9dFtyXS5zcGxpdCgvKFxccyspL2cpLG89MCxhPTA7YTxpLmxlbmd0aDsrK2Epe3ZhciBzPWwoaVthXSk7bjwobys9cykmJihpW2FdPVwiXFxuXCIraVthXSxvPXMpfXRbcl09aS5qb2luKFwiXCIpfXJldHVybiB0LmpvaW4oXCJcXG5cIil9fSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmKG1vZHVsZS5leHBvcnRzPWUpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcmlzbSYmKFByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZT1uZXcgZSh7XCJyZW1vdmUtdHJhaWxpbmdcIjohMCxcInJlbW92ZS1pbmRlbnRcIjohMCxcImxlZnQtdHJpbVwiOiEwLFwicmlnaHQtdHJpbVwiOiEwfSksUHJpc20uaG9va3MuYWRkKFwiYmVmb3JlLXNhbml0eS1jaGVja1wiLGZ1bmN0aW9uKGUpe3ZhciBuPVByaXNtLnBsdWdpbnMuTm9ybWFsaXplV2hpdGVzcGFjZTtpZighZS5zZXR0aW5nc3x8ITEhPT1lLnNldHRpbmdzW1wid2hpdGVzcGFjZS1ub3JtYWxpemF0aW9uXCJdKWlmKGUuZWxlbWVudCYmZS5lbGVtZW50LnBhcmVudE5vZGV8fCFlLmNvZGUpe3ZhciB0PWUuZWxlbWVudC5wYXJlbnROb2RlLHI9Lyg/Ol58XFxzKW5vLXdoaXRlc3BhY2Utbm9ybWFsaXphdGlvbig/Olxcc3wkKS87aWYoZS5jb2RlJiZ0JiZcInByZVwiPT09dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpJiYhci50ZXN0KHQuY2xhc3NOYW1lKSYmIXIudGVzdChlLmVsZW1lbnQuY2xhc3NOYW1lKSl7Zm9yKHZhciBpPXQuY2hpbGROb2RlcyxvPVwiXCIsYT1cIlwiLHM9ITEsbD0wO2w8aS5sZW5ndGg7KytsKXt2YXIgYz1pW2xdO2M9PWUuZWxlbWVudD9zPSEwOlwiI3RleHRcIj09PWMubm9kZU5hbWUmJihzP2ErPWMubm9kZVZhbHVlOm8rPWMubm9kZVZhbHVlLHQucmVtb3ZlQ2hpbGQoYyksLS1sKX1pZihlLmVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoJiZQcmlzbS5wbHVnaW5zLktlZXBNYXJrdXApe3ZhciB1PW8rZS5lbGVtZW50LmlubmVySFRNTCthO2UuZWxlbWVudC5pbm5lckhUTUw9bi5ub3JtYWxpemUodSxlLnNldHRpbmdzKSxlLmNvZGU9ZS5lbGVtZW50LnRleHRDb250ZW50fWVsc2UgZS5jb2RlPW8rZS5jb2RlK2EsZS5jb2RlPW4ubm9ybWFsaXplKGUuY29kZSxlLnNldHRpbmdzKX19ZWxzZSBlLmNvZGU9bi5ub3JtYWxpemUoZS5jb2RlLGUuc2V0dGluZ3MpfSkpfSgpOyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi0xIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTMhLi9wcmlzbS10b29sYmFyLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIiFmdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLlByaXNtJiZzZWxmLmRvY3VtZW50KXt2YXIgcj1bXSxpPXt9LGE9ZnVuY3Rpb24oKXt9O1ByaXNtLnBsdWdpbnMudG9vbGJhcj17fTt2YXIgdD1QcmlzbS5wbHVnaW5zLnRvb2xiYXIucmVnaXN0ZXJCdXR0b249ZnVuY3Rpb24odCxhKXt2YXIgZTtlPVwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YTpmdW5jdGlvbih0KXt2YXIgZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhLm9uQ2xpY2s/KChlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpLnR5cGU9XCJidXR0b25cIixlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7YS5vbkNsaWNrLmNhbGwodGhpcyx0KX0pKTpcInN0cmluZ1wiPT10eXBlb2YgYS51cmw/KGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIikpLmhyZWY9YS51cmw6ZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSxhLmNsYXNzTmFtZSYmZS5jbGFzc0xpc3QuYWRkKGEuY2xhc3NOYW1lKSxlLnRleHRDb250ZW50PWEudGV4dCxlfSx0IGluIGk/Y29uc29sZS53YXJuKCdUaGVyZSBpcyBhIGJ1dHRvbiB3aXRoIHRoZSBrZXkgXCInK3QrJ1wiIHJlZ2lzdGVyZWQgYWxyZWFkeS4nKTpyLnB1c2goaVt0XT1lKX0sZT1QcmlzbS5wbHVnaW5zLnRvb2xiYXIuaG9vaz1mdW5jdGlvbihuKXt2YXIgdD1uLmVsZW1lbnQucGFyZW50Tm9kZTtpZih0JiYvcHJlL2kudGVzdCh0Lm5vZGVOYW1lKSYmIXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoXCJjb2RlLXRvb2xiYXJcIikpe3ZhciBlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ZS5jbGFzc0xpc3QuYWRkKFwiY29kZS10b29sYmFyXCIpLHQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZSx0KSxlLmFwcGVuZENoaWxkKHQpO3ZhciBvPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7by5jbGFzc0xpc3QuYWRkKFwidG9vbGJhclwiKSxkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZShcImRhdGEtdG9vbGJhci1vcmRlclwiKSYmKHI9ZG9jdW1lbnQuYm9keS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvb2xiYXItb3JkZXJcIikuc3BsaXQoXCIsXCIpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gaVt0XXx8YX0pKSxyLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dChuKTtpZihlKXt2YXIgYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2EuY2xhc3NMaXN0LmFkZChcInRvb2xiYXItaXRlbVwiKSxhLmFwcGVuZENoaWxkKGUpLG8uYXBwZW5kQ2hpbGQoYSl9fSksZS5hcHBlbmRDaGlsZChvKX19O3QoXCJsYWJlbFwiLGZ1bmN0aW9uKHQpe3ZhciBlPXQuZWxlbWVudC5wYXJlbnROb2RlO2lmKGUmJi9wcmUvaS50ZXN0KGUubm9kZU5hbWUpJiZlLmhhc0F0dHJpYnV0ZShcImRhdGEtbGFiZWxcIikpe3ZhciBhLG4sbz1lLmdldEF0dHJpYnV0ZShcImRhdGEtbGFiZWxcIik7dHJ5e249ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRlbXBsYXRlI1wiK28pfWNhdGNoKHQpe31yZXR1cm4gbj9hPW4uY29udGVudDooZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLXVybFwiKT8oYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSkuaHJlZj1lLmdldEF0dHJpYnV0ZShcImRhdGEtdXJsXCIpOmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiksYS50ZXh0Q29udGVudD1vKSxhfX0pLFByaXNtLmhvb2tzLmFkZChcImNvbXBsZXRlXCIsZSl9fSgpOyIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tNi0xIS4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi0yIS4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS02LTMhLi9wcmlzbS11bmVzY2FwZWQtbWFya3VwLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiZzZWxmLlByaXNtJiZzZWxmLmRvY3VtZW50JiZQcmlzbS5sYW5ndWFnZXMubWFya3VwJiYoUHJpc20ucGx1Z2lucy5VbmVzY2FwZWRNYXJrdXA9ITAsUHJpc20uaG9va3MuYWRkKFwiYmVmb3JlLWhpZ2hsaWdodGFsbFwiLGZ1bmN0aW9uKGUpe2Uuc2VsZWN0b3IrPVwiLCBbY2xhc3MqPSdsYW5nLSddIHNjcmlwdFt0eXBlPSd0ZXh0L3BsYWluJ10sIFtjbGFzcyo9J2xhbmd1YWdlLSddIHNjcmlwdFt0eXBlPSd0ZXh0L3BsYWluJ10sIHNjcmlwdFt0eXBlPSd0ZXh0L3BsYWluJ11bY2xhc3MqPSdsYW5nLSddLCBzY3JpcHRbdHlwZT0ndGV4dC9wbGFpbiddW2NsYXNzKj0nbGFuZ3VhZ2UtJ11cIn0pLFByaXNtLmhvb2tzLmFkZChcImJlZm9yZS1zYW5pdHktY2hlY2tcIixmdW5jdGlvbih0KXtpZigodC5lbGVtZW50Lm1hdGNoZXN8fHQuZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcikuY2FsbCh0LmVsZW1lbnQsXCJzY3JpcHRbdHlwZT0ndGV4dC9wbGFpbiddXCIpKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY29kZVwiKTtyZXR1cm4oYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicHJlXCIpKS5jbGFzc05hbWU9ZS5jbGFzc05hbWU9dC5lbGVtZW50LmNsYXNzTmFtZSx0LmVsZW1lbnQuZGF0YXNldCYmT2JqZWN0LmtleXModC5lbGVtZW50LmRhdGFzZXQpLmZvckVhY2goZnVuY3Rpb24oZSl7T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQuZWxlbWVudC5kYXRhc2V0LGUpJiYoYS5kYXRhc2V0W2VdPXQuZWxlbWVudC5kYXRhc2V0W2VdKX0pLHQuY29kZT10LmNvZGUucmVwbGFjZSgvJmx0O1xcL3NjcmlwdCg+fCZndDspL2dpLFwiPFxcL3NjcmlwdD5cIiksZS50ZXh0Q29udGVudD10LmNvZGUsYS5hcHBlbmRDaGlsZChlKSx0LmVsZW1lbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoYSx0LmVsZW1lbnQpLHZvaWQodC5lbGVtZW50PWUpfXZhciBhPXQuZWxlbWVudC5wYXJlbnROb2RlOyF0LmNvZGUmJmEmJlwicHJlXCI9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmdC5lbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoJiZcIiNjb21tZW50XCI9PXQuZWxlbWVudC5jaGlsZE5vZGVzWzBdLm5vZGVOYW1lJiYodC5lbGVtZW50LnRleHRDb250ZW50PXQuY29kZT10LmVsZW1lbnQuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCl9KSk7IiwiXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWNvcmUuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxudmFyIF9zZWxmID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKVxuXHQ/IHdpbmRvdyAgIC8vIGlmIGluIGJyb3dzZXJcblx0OiAoXG5cdFx0KHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIFdvcmtlckdsb2JhbFNjb3BlKVxuXHRcdD8gc2VsZiAvLyBpZiBpbiB3b3JrZXJcblx0XHQ6IHt9ICAgLy8gaWYgaW4gbm9kZSBqc1xuXHQpO1xuXG4vKipcbiAqIFByaXNtOiBMaWdodHdlaWdodCwgcm9idXN0LCBlbGVnYW50IHN5bnRheCBoaWdobGlnaHRpbmdcbiAqIE1JVCBsaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwL1xuICogQGF1dGhvciBMZWEgVmVyb3UgaHR0cDovL2xlYS52ZXJvdS5tZVxuICovXG5cbnZhciBQcmlzbSA9IChmdW5jdGlvbiAoX3NlbGYpe1xuXG4vLyBQcml2YXRlIGhlbHBlciB2YXJzXG52YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xudmFyIHVuaXF1ZUlkID0gMDtcblxudmFyIF8gPSB7XG5cdG1hbnVhbDogX3NlbGYuUHJpc20gJiYgX3NlbGYuUHJpc20ubWFudWFsLFxuXHRkaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXI6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLmRpc2FibGVXb3JrZXJNZXNzYWdlSGFuZGxlcixcblx0dXRpbDoge1xuXHRcdGVuY29kZTogZnVuY3Rpb24gKHRva2Vucykge1xuXHRcdFx0aWYgKHRva2VucyBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdHJldHVybiBuZXcgVG9rZW4odG9rZW5zLnR5cGUsIF8udXRpbC5lbmNvZGUodG9rZW5zLmNvbnRlbnQpLCB0b2tlbnMuYWxpYXMpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VucykpIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5tYXAoXy51dGlsLmVuY29kZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdG9rZW5zLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0dHlwZTogZnVuY3Rpb24gKG8pIHtcblx0XHRcdHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuXHRcdH0sXG5cblx0XHRvYmpJZDogZnVuY3Rpb24gKG9iaikge1xuXHRcdFx0aWYgKCFvYmpbJ19faWQnXSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCAnX19pZCcsIHsgdmFsdWU6ICsrdW5pcXVlSWQgfSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb2JqWydfX2lkJ107XG5cdFx0fSxcblxuXHRcdC8vIERlZXAgY2xvbmUgYSBsYW5ndWFnZSBkZWZpbml0aW9uIChlLmcuIHRvIGV4dGVuZCBpdClcblx0XHRjbG9uZTogZnVuY3Rpb24gZGVlcENsb25lKG8sIHZpc2l0ZWQpIHtcblx0XHRcdHZhciBjbG9uZSwgaWQsIHR5cGUgPSBfLnV0aWwudHlwZShvKTtcblx0XHRcdHZpc2l0ZWQgPSB2aXNpdGVkIHx8IHt9O1xuXG5cdFx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdFx0Y2FzZSAnT2JqZWN0Jzpcblx0XHRcdFx0XHRpZCA9IF8udXRpbC5vYmpJZChvKTtcblx0XHRcdFx0XHRpZiAodmlzaXRlZFtpZF0pIHtcblx0XHRcdFx0XHRcdHJldHVybiB2aXNpdGVkW2lkXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2xvbmUgPSB7fTtcblx0XHRcdFx0XHR2aXNpdGVkW2lkXSA9IGNsb25lO1xuXG5cdFx0XHRcdFx0Zm9yICh2YXIga2V5IGluIG8pIHtcblx0XHRcdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmVba2V5XSA9IGRlZXBDbG9uZShvW2tleV0sIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBjbG9uZTtcblxuXHRcdFx0XHRjYXNlICdBcnJheSc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0gW107XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdG8uZm9yRWFjaChmdW5jdGlvbiAodiwgaSkge1xuXHRcdFx0XHRcdFx0Y2xvbmVbaV0gPSBkZWVwQ2xvbmUodiwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRyZXR1cm4gbztcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0bGFuZ3VhZ2VzOiB7XG5cdFx0ZXh0ZW5kOiBmdW5jdGlvbiAoaWQsIHJlZGVmKSB7XG5cdFx0XHR2YXIgbGFuZyA9IF8udXRpbC5jbG9uZShfLmxhbmd1YWdlc1tpZF0pO1xuXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gcmVkZWYpIHtcblx0XHRcdFx0bGFuZ1trZXldID0gcmVkZWZba2V5XTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGxhbmc7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEluc2VydCBhIHRva2VuIGJlZm9yZSBhbm90aGVyIHRva2VuIGluIGEgbGFuZ3VhZ2UgbGl0ZXJhbFxuXHRcdCAqIEFzIHRoaXMgbmVlZHMgdG8gcmVjcmVhdGUgdGhlIG9iamVjdCAod2UgY2Fubm90IGFjdHVhbGx5IGluc2VydCBiZWZvcmUga2V5cyBpbiBvYmplY3QgbGl0ZXJhbHMpLFxuXHRcdCAqIHdlIGNhbm5vdCBqdXN0IHByb3ZpZGUgYW4gb2JqZWN0LCB3ZSBuZWVkIGFuIG9iamVjdCBhbmQgYSBrZXkuXG5cdFx0ICogQHBhcmFtIGluc2lkZSBUaGUga2V5IChvciBsYW5ndWFnZSBpZCkgb2YgdGhlIHBhcmVudFxuXHRcdCAqIEBwYXJhbSBiZWZvcmUgVGhlIGtleSB0byBpbnNlcnQgYmVmb3JlLlxuXHRcdCAqIEBwYXJhbSBpbnNlcnQgT2JqZWN0IHdpdGggdGhlIGtleS92YWx1ZSBwYWlycyB0byBpbnNlcnRcblx0XHQgKiBAcGFyYW0gcm9vdCBUaGUgb2JqZWN0IHRoYXQgY29udGFpbnMgYGluc2lkZWAuIElmIGVxdWFsIHRvIFByaXNtLmxhbmd1YWdlcywgaXQgY2FuIGJlIG9taXR0ZWQuXG5cdFx0ICovXG5cdFx0aW5zZXJ0QmVmb3JlOiBmdW5jdGlvbiAoaW5zaWRlLCBiZWZvcmUsIGluc2VydCwgcm9vdCkge1xuXHRcdFx0cm9vdCA9IHJvb3QgfHwgXy5sYW5ndWFnZXM7XG5cdFx0XHR2YXIgZ3JhbW1hciA9IHJvb3RbaW5zaWRlXTtcblx0XHRcdHZhciByZXQgPSB7fTtcblxuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0XHRpZiAoZ3JhbW1hci5oYXNPd25Qcm9wZXJ0eSh0b2tlbikpIHtcblxuXHRcdFx0XHRcdGlmICh0b2tlbiA9PSBiZWZvcmUpIHtcblx0XHRcdFx0XHRcdGZvciAodmFyIG5ld1Rva2VuIGluIGluc2VydCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoaW5zZXJ0Lmhhc093blByb3BlcnR5KG5ld1Rva2VuKSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldFtuZXdUb2tlbl0gPSBpbnNlcnRbbmV3VG9rZW5dO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRG8gbm90IGluc2VydCB0b2tlbiB3aGljaCBhbHNvIG9jY3VyIGluIGluc2VydC4gU2VlICMxNTI1XG5cdFx0XHRcdFx0aWYgKCFpbnNlcnQuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cdFx0XHRcdFx0XHRyZXRbdG9rZW5dID0gZ3JhbW1hclt0b2tlbl07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbGQgPSByb290W2luc2lkZV07XG5cdFx0XHRyb290W2luc2lkZV0gPSByZXQ7XG5cblx0XHRcdC8vIFVwZGF0ZSByZWZlcmVuY2VzIGluIG90aGVyIGxhbmd1YWdlIGRlZmluaXRpb25zXG5cdFx0XHRfLmxhbmd1YWdlcy5ERlMoXy5sYW5ndWFnZXMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdFx0aWYgKHZhbHVlID09PSBvbGQgJiYga2V5ICE9IGluc2lkZSkge1xuXHRcdFx0XHRcdHRoaXNba2V5XSA9IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fSxcblxuXHRcdC8vIFRyYXZlcnNlIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiB3aXRoIERlcHRoIEZpcnN0IFNlYXJjaFxuXHRcdERGUzogZnVuY3Rpb24gREZTKG8sIGNhbGxiYWNrLCB0eXBlLCB2aXNpdGVkKSB7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0dmFyIG9iaklkID0gXy51dGlsLm9iaklkO1xuXG5cdFx0XHRmb3IgKHZhciBpIGluIG8pIHtcblx0XHRcdFx0aWYgKG8uaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKG8sIGksIG9baV0sIHR5cGUgfHwgaSk7XG5cblx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSBvW2ldLFxuXHRcdFx0XHRcdCAgICBwcm9wZXJ0eVR5cGUgPSBfLnV0aWwudHlwZShwcm9wZXJ0eSk7XG5cblx0XHRcdFx0XHRpZiAocHJvcGVydHlUeXBlID09PSAnT2JqZWN0JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgbnVsbCwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHByb3BlcnR5VHlwZSA9PT0gJ0FycmF5JyAmJiAhdmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldKSB7XG5cdFx0XHRcdFx0XHR2aXNpdGVkW29iaklkKHByb3BlcnR5KV0gPSB0cnVlO1xuXHRcdFx0XHRcdFx0REZTKHByb3BlcnR5LCBjYWxsYmFjaywgaSwgdmlzaXRlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRwbHVnaW5zOiB7fSxcblxuXHRoaWdobGlnaHRBbGw6IGZ1bmN0aW9uKGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdF8uaGlnaGxpZ2h0QWxsVW5kZXIoZG9jdW1lbnQsIGFzeW5jLCBjYWxsYmFjayk7XG5cdH0sXG5cblx0aGlnaGxpZ2h0QWxsVW5kZXI6IGZ1bmN0aW9uKGNvbnRhaW5lciwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGNhbGxiYWNrOiBjYWxsYmFjayxcblx0XHRcdHNlbGVjdG9yOiAnY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sIFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gY29kZSwgY29kZVtjbGFzcyo9XCJsYW5nLVwiXSwgW2NsYXNzKj1cImxhbmctXCJdIGNvZGUnXG5cdFx0fTtcblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0YWxsJywgZW52KTtcblxuXHRcdHZhciBlbGVtZW50cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKGVudi5zZWxlY3Rvcik7XG5cblx0XHRmb3IgKHZhciBpPTAsIGVsZW1lbnQ7IGVsZW1lbnQgPSBlbGVtZW50c1tpKytdOykge1xuXHRcdFx0Xy5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQsIGFzeW5jID09PSB0cnVlLCBlbnYuY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHRFbGVtZW50OiBmdW5jdGlvbihlbGVtZW50LCBhc3luYywgY2FsbGJhY2spIHtcblx0XHQvLyBGaW5kIGxhbmd1YWdlXG5cdFx0dmFyIGxhbmd1YWdlID0gJ25vbmUnLCBncmFtbWFyLCBwYXJlbnQgPSBlbGVtZW50O1xuXG5cdFx0d2hpbGUgKHBhcmVudCAmJiAhbGFuZy50ZXN0KHBhcmVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRsYW5ndWFnZSA9IChwYXJlbnQuY2xhc3NOYW1lLm1hdGNoKGxhbmcpIHx8IFssJ25vbmUnXSlbMV0udG9Mb3dlckNhc2UoKTtcblx0XHRcdGdyYW1tYXIgPSBfLmxhbmd1YWdlc1tsYW5ndWFnZV07XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBlbGVtZW50LCBpZiBub3QgcHJlc2VudFxuXHRcdGVsZW1lbnQuY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG5cdFx0XHQvLyBTZXQgbGFuZ3VhZ2Ugb24gdGhlIHBhcmVudCwgZm9yIHN0eWxpbmdcblx0XHRcdHBhcmVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYgKC9wcmUvaS50ZXN0KHBhcmVudC5ub2RlTmFtZSkpIHtcblx0XHRcdFx0cGFyZW50LmNsYXNzTmFtZSA9IHBhcmVudC5jbGFzc05hbWUucmVwbGFjZShsYW5nLCAnJykucmVwbGFjZSgvXFxzKy9nLCAnICcpICsgJyBsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGNvZGUgPSBlbGVtZW50LnRleHRDb250ZW50O1xuXG5cdFx0dmFyIGVudiA9IHtcblx0XHRcdGVsZW1lbnQ6IGVsZW1lbnQsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2UsXG5cdFx0XHRncmFtbWFyOiBncmFtbWFyLFxuXHRcdFx0Y29kZTogY29kZVxuXHRcdH07XG5cblx0XHR2YXIgaW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlID0gZnVuY3Rpb24gKGhpZ2hsaWdodGVkQ29kZSkge1xuXHRcdFx0ZW52LmhpZ2hsaWdodGVkQ29kZSA9IGhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1pbnNlcnQnLCBlbnYpO1xuXG5cdFx0XHRlbnYuZWxlbWVudC5pbm5lckhUTUwgPSBlbnYuaGlnaGxpZ2h0ZWRDb2RlO1xuXG5cdFx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItaGlnaGxpZ2h0JywgZW52KTtcblx0XHRcdF8uaG9va3MucnVuKCdjb21wbGV0ZScsIGVudik7XG5cdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjay5jYWxsKGVudi5lbGVtZW50KTtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLXNhbml0eS1jaGVjaycsIGVudik7XG5cblx0XHRpZiAoIWVudi5jb2RlKSB7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaGlnaGxpZ2h0JywgZW52KTtcblxuXHRcdGlmICghZW52LmdyYW1tYXIpIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLnV0aWwuZW5jb2RlKGVudi5jb2RlKSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGFzeW5jICYmIF9zZWxmLldvcmtlcikge1xuXHRcdFx0dmFyIHdvcmtlciA9IG5ldyBXb3JrZXIoXy5maWxlbmFtZSk7XG5cblx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldnQpIHtcblx0XHRcdFx0aW5zZXJ0SGlnaGxpZ2h0ZWRDb2RlKGV2dC5kYXRhKTtcblx0XHRcdH07XG5cblx0XHRcdHdvcmtlci5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdGxhbmd1YWdlOiBlbnYubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGU6IGVudi5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZTogdHJ1ZVxuXHRcdFx0fSkpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShfLmhpZ2hsaWdodChlbnYuY29kZSwgZW52LmdyYW1tYXIsIGVudi5sYW5ndWFnZSkpO1xuXHRcdH1cblx0fSxcblxuXHRoaWdobGlnaHQ6IGZ1bmN0aW9uICh0ZXh0LCBncmFtbWFyLCBsYW5ndWFnZSkge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjb2RlOiB0ZXh0LFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHRcdH07XG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS10b2tlbml6ZScsIGVudik7XG5cdFx0ZW52LnRva2VucyA9IF8udG9rZW5pemUoZW52LmNvZGUsIGVudi5ncmFtbWFyKTtcblx0XHRfLmhvb2tzLnJ1bignYWZ0ZXItdG9rZW5pemUnLCBlbnYpO1xuXHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoXy51dGlsLmVuY29kZShlbnYudG9rZW5zKSwgZW52Lmxhbmd1YWdlKTtcblx0fSxcblxuXHRtYXRjaEdyYW1tYXI6IGZ1bmN0aW9uICh0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGluZGV4LCBzdGFydFBvcywgb25lc2hvdCwgdGFyZ2V0KSB7XG5cdFx0Zm9yICh2YXIgdG9rZW4gaW4gZ3JhbW1hcikge1xuXHRcdFx0aWYoIWdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pIHx8ICFncmFtbWFyW3Rva2VuXSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRva2VuID09IHRhcmdldCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBwYXR0ZXJucyA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0cGF0dGVybnMgPSAoXy51dGlsLnR5cGUocGF0dGVybnMpID09PSBcIkFycmF5XCIpID8gcGF0dGVybnMgOiBbcGF0dGVybnNdO1xuXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHBhdHRlcm5zLmxlbmd0aDsgKytqKSB7XG5cdFx0XHRcdHZhciBwYXR0ZXJuID0gcGF0dGVybnNbal0sXG5cdFx0XHRcdFx0aW5zaWRlID0gcGF0dGVybi5pbnNpZGUsXG5cdFx0XHRcdFx0bG9va2JlaGluZCA9ICEhcGF0dGVybi5sb29rYmVoaW5kLFxuXHRcdFx0XHRcdGdyZWVkeSA9ICEhcGF0dGVybi5ncmVlZHksXG5cdFx0XHRcdFx0bG9va2JlaGluZExlbmd0aCA9IDAsXG5cdFx0XHRcdFx0YWxpYXMgPSBwYXR0ZXJuLmFsaWFzO1xuXG5cdFx0XHRcdGlmIChncmVlZHkgJiYgIXBhdHRlcm4ucGF0dGVybi5nbG9iYWwpIHtcblx0XHRcdFx0XHQvLyBXaXRob3V0IHRoZSBnbG9iYWwgZmxhZywgbGFzdEluZGV4IHdvbid0IHdvcmtcblx0XHRcdFx0XHR2YXIgZmxhZ3MgPSBwYXR0ZXJuLnBhdHRlcm4udG9TdHJpbmcoKS5tYXRjaCgvW2ltdXldKiQvKVswXTtcblx0XHRcdFx0XHRwYXR0ZXJuLnBhdHRlcm4gPSBSZWdFeHAocGF0dGVybi5wYXR0ZXJuLnNvdXJjZSwgZmxhZ3MgKyBcImdcIik7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRwYXR0ZXJuID0gcGF0dGVybi5wYXR0ZXJuIHx8IHBhdHRlcm47XG5cblx0XHRcdFx0Ly8gRG9u4oCZdCBjYWNoZSBsZW5ndGggYXMgaXQgY2hhbmdlcyBkdXJpbmcgdGhlIGxvb3Bcblx0XHRcdFx0Zm9yICh2YXIgaSA9IGluZGV4LCBwb3MgPSBzdGFydFBvczsgaSA8IHN0cmFyci5sZW5ndGg7IHBvcyArPSBzdHJhcnJbaV0ubGVuZ3RoLCArK2kpIHtcblxuXHRcdFx0XHRcdHZhciBzdHIgPSBzdHJhcnJbaV07XG5cblx0XHRcdFx0XHRpZiAoc3RyYXJyLmxlbmd0aCA+IHRleHQubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHQvLyBTb21ldGhpbmcgd2VudCB0ZXJyaWJseSB3cm9uZywgQUJPUlQsIEFCT1JUIVxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChzdHIgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGdyZWVkeSAmJiBpICE9IHN0cmFyci5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IHBvcztcblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KTtcblx0XHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyAobG9va2JlaGluZCA/IG1hdGNoWzFdLmxlbmd0aCA6IDApLFxuXHRcdFx0XHRcdFx0ICAgIHRvID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgsXG5cdFx0XHRcdFx0XHQgICAgayA9IGksXG5cdFx0XHRcdFx0XHQgICAgcCA9IHBvcztcblxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgbGVuID0gc3RyYXJyLmxlbmd0aDsgayA8IGxlbiAmJiAocCA8IHRvIHx8ICghc3RyYXJyW2tdLnR5cGUgJiYgIXN0cmFycltrIC0gMV0uZ3JlZWR5KSk7ICsraykge1xuXHRcdFx0XHRcdFx0XHRwICs9IHN0cmFycltrXS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRcdC8vIE1vdmUgdGhlIGluZGV4IGkgdG8gdGhlIGVsZW1lbnQgaW4gc3RyYXJyIHRoYXQgaXMgY2xvc2VzdCB0byBmcm9tXG5cdFx0XHRcdFx0XHRcdGlmIChmcm9tID49IHApIHtcblx0XHRcdFx0XHRcdFx0XHQrK2k7XG5cdFx0XHRcdFx0XHRcdFx0cG9zID0gcDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJZiBzdHJhcnJbaV0gaXMgYSBUb2tlbiwgdGhlbiB0aGUgbWF0Y2ggc3RhcnRzIGluc2lkZSBhbm90aGVyIFRva2VuLCB3aGljaCBpcyBpbnZhbGlkXG5cdFx0XHRcdFx0XHRpZiAoc3RyYXJyW2ldIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE51bWJlciBvZiB0b2tlbnMgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHdpdGggdGhlIG5ldyBtYXRjaFxuXHRcdFx0XHRcdFx0ZGVsTnVtID0gayAtIGk7XG5cdFx0XHRcdFx0XHRzdHIgPSB0ZXh0LnNsaWNlKHBvcywgcCk7XG5cdFx0XHRcdFx0XHRtYXRjaC5pbmRleCAtPSBwb3M7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBhdHRlcm4ubGFzdEluZGV4ID0gMDtcblxuXHRcdFx0XHRcdFx0dmFyIG1hdGNoID0gcGF0dGVybi5leGVjKHN0ciksXG5cdFx0XHRcdFx0XHRcdGRlbE51bSA9IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFtYXRjaCkge1xuXHRcdFx0XHRcdFx0aWYgKG9uZXNob3QpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmKGxvb2tiZWhpbmQpIHtcblx0XHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSBtYXRjaFsxXSA/IG1hdGNoWzFdLmxlbmd0aCA6IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIGZyb20gPSBtYXRjaC5pbmRleCArIGxvb2tiZWhpbmRMZW5ndGgsXG5cdFx0XHRcdFx0ICAgIG1hdGNoID0gbWF0Y2hbMF0uc2xpY2UobG9va2JlaGluZExlbmd0aCksXG5cdFx0XHRcdFx0ICAgIHRvID0gZnJvbSArIG1hdGNoLmxlbmd0aCxcblx0XHRcdFx0XHQgICAgYmVmb3JlID0gc3RyLnNsaWNlKDAsIGZyb20pLFxuXHRcdFx0XHRcdCAgICBhZnRlciA9IHN0ci5zbGljZSh0byk7XG5cblx0XHRcdFx0XHR2YXIgYXJncyA9IFtpLCBkZWxOdW1dO1xuXG5cdFx0XHRcdFx0aWYgKGJlZm9yZSkge1xuXHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0cG9zICs9IGJlZm9yZS5sZW5ndGg7XG5cdFx0XHRcdFx0XHRhcmdzLnB1c2goYmVmb3JlKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR2YXIgd3JhcHBlZCA9IG5ldyBUb2tlbih0b2tlbiwgaW5zaWRlPyBfLnRva2VuaXplKG1hdGNoLCBpbnNpZGUpIDogbWF0Y2gsIGFsaWFzLCBtYXRjaCwgZ3JlZWR5KTtcblxuXHRcdFx0XHRcdGFyZ3MucHVzaCh3cmFwcGVkKTtcblxuXHRcdFx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGFmdGVyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KHN0cmFyciwgYXJncyk7XG5cblx0XHRcdFx0XHRpZiAoZGVsTnVtICE9IDEpXG5cdFx0XHRcdFx0XHRfLm1hdGNoR3JhbW1hcih0ZXh0LCBzdHJhcnIsIGdyYW1tYXIsIGksIHBvcywgdHJ1ZSwgdG9rZW4pO1xuXG5cdFx0XHRcdFx0aWYgKG9uZXNob3QpXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHR0b2tlbml6ZTogZnVuY3Rpb24odGV4dCwgZ3JhbW1hcikge1xuXHRcdHZhciBzdHJhcnIgPSBbdGV4dF07XG5cblx0XHR2YXIgcmVzdCA9IGdyYW1tYXIucmVzdDtcblxuXHRcdGlmIChyZXN0KSB7XG5cdFx0XHRmb3IgKHZhciB0b2tlbiBpbiByZXN0KSB7XG5cdFx0XHRcdGdyYW1tYXJbdG9rZW5dID0gcmVzdFt0b2tlbl07XG5cdFx0XHR9XG5cblx0XHRcdGRlbGV0ZSBncmFtbWFyLnJlc3Q7XG5cdFx0fVxuXG5cdFx0Xy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCAwLCAwLCBmYWxzZSk7XG5cblx0XHRyZXR1cm4gc3RyYXJyO1xuXHR9LFxuXG5cdGhvb2tzOiB7XG5cdFx0YWxsOiB7fSxcblxuXHRcdGFkZDogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaG9va3MgPSBfLmhvb2tzLmFsbDtcblxuXHRcdFx0aG9va3NbbmFtZV0gPSBob29rc1tuYW1lXSB8fCBbXTtcblxuXHRcdFx0aG9va3NbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblxuXHRcdHJ1bjogZnVuY3Rpb24gKG5hbWUsIGVudikge1xuXHRcdFx0dmFyIGNhbGxiYWNrcyA9IF8uaG9va3MuYWxsW25hbWVdO1xuXG5cdFx0XHRpZiAoIWNhbGxiYWNrcyB8fCAhY2FsbGJhY2tzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGZvciAodmFyIGk9MCwgY2FsbGJhY2s7IGNhbGxiYWNrID0gY2FsbGJhY2tzW2krK107KSB7XG5cdFx0XHRcdGNhbGxiYWNrKGVudik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdFRva2VuOiBUb2tlblxufTtcblxuX3NlbGYuUHJpc20gPSBfO1xuXG5mdW5jdGlvbiBUb2tlbih0eXBlLCBjb250ZW50LCBhbGlhcywgbWF0Y2hlZFN0ciwgZ3JlZWR5KSB7XG5cdHRoaXMudHlwZSA9IHR5cGU7XG5cdHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG5cdHRoaXMuYWxpYXMgPSBhbGlhcztcblx0Ly8gQ29weSBvZiB0aGUgZnVsbCBzdHJpbmcgdGhpcyB0b2tlbiB3YXMgY3JlYXRlZCBmcm9tXG5cdHRoaXMubGVuZ3RoID0gKG1hdGNoZWRTdHIgfHwgXCJcIikubGVuZ3RofDA7XG5cdHRoaXMuZ3JlZWR5ID0gISFncmVlZHk7XG59XG5cblRva2VuLnN0cmluZ2lmeSA9IGZ1bmN0aW9uKG8sIGxhbmd1YWdlKSB7XG5cdGlmICh0eXBlb2YgbyA9PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBvO1xuXHR9XG5cblx0aWYgKEFycmF5LmlzQXJyYXkobykpIHtcblx0XHRyZXR1cm4gby5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0cmV0dXJuIFRva2VuLnN0cmluZ2lmeShlbGVtZW50LCBsYW5ndWFnZSk7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHR2YXIgZW52ID0ge1xuXHRcdHR5cGU6IG8udHlwZSxcblx0XHRjb250ZW50OiBUb2tlbi5zdHJpbmdpZnkoby5jb250ZW50LCBsYW5ndWFnZSksXG5cdFx0dGFnOiAnc3BhbicsXG5cdFx0Y2xhc3NlczogWyd0b2tlbicsIG8udHlwZV0sXG5cdFx0YXR0cmlidXRlczoge30sXG5cdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlXG5cdH07XG5cblx0aWYgKG8uYWxpYXMpIHtcblx0XHR2YXIgYWxpYXNlcyA9IEFycmF5LmlzQXJyYXkoby5hbGlhcykgPyBvLmFsaWFzIDogW28uYWxpYXNdO1xuXHRcdEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGVudi5jbGFzc2VzLCBhbGlhc2VzKTtcblx0fVxuXG5cdF8uaG9va3MucnVuKCd3cmFwJywgZW52KTtcblxuXHR2YXIgYXR0cmlidXRlcyA9IE9iamVjdC5rZXlzKGVudi5hdHRyaWJ1dGVzKS5tYXAoZnVuY3Rpb24obmFtZSkge1xuXHRcdHJldHVybiBuYW1lICsgJz1cIicgKyAoZW52LmF0dHJpYnV0ZXNbbmFtZV0gfHwgJycpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSArICdcIic7XG5cdH0pLmpvaW4oJyAnKTtcblxuXHRyZXR1cm4gJzwnICsgZW52LnRhZyArICcgY2xhc3M9XCInICsgZW52LmNsYXNzZXMuam9pbignICcpICsgJ1wiJyArIChhdHRyaWJ1dGVzID8gJyAnICsgYXR0cmlidXRlcyA6ICcnKSArICc+JyArIGVudi5jb250ZW50ICsgJzwvJyArIGVudi50YWcgKyAnPic7XG59O1xuXG5pZiAoIV9zZWxmLmRvY3VtZW50KSB7XG5cdGlmICghX3NlbGYuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdC8vIGluIE5vZGUuanNcblx0XHRyZXR1cm4gXztcblx0fVxuXG5cdGlmICghXy5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIpIHtcblx0XHQvLyBJbiB3b3JrZXJcblx0XHRfc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2dCkge1xuXHRcdFx0dmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2dC5kYXRhKSxcblx0XHRcdFx0bGFuZyA9IG1lc3NhZ2UubGFuZ3VhZ2UsXG5cdFx0XHRcdGNvZGUgPSBtZXNzYWdlLmNvZGUsXG5cdFx0XHRcdGltbWVkaWF0ZUNsb3NlID0gbWVzc2FnZS5pbW1lZGlhdGVDbG9zZTtcblxuXHRcdFx0X3NlbGYucG9zdE1lc3NhZ2UoXy5oaWdobGlnaHQoY29kZSwgXy5sYW5ndWFnZXNbbGFuZ10sIGxhbmcpKTtcblx0XHRcdGlmIChpbW1lZGlhdGVDbG9zZSkge1xuXHRcdFx0XHRfc2VsZi5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdH0sIGZhbHNlKTtcblx0fVxuXG5cdHJldHVybiBfO1xufVxuXG4vL0dldCBjdXJyZW50IHNjcmlwdCBhbmQgaGlnaGxpZ2h0XG52YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdCB8fCBbXS5zbGljZS5jYWxsKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpKS5wb3AoKTtcblxuaWYgKHNjcmlwdCkge1xuXHRfLmZpbGVuYW1lID0gc2NyaXB0LnNyYztcblxuXHRpZiAoIV8ubWFudWFsICYmICFzY3JpcHQuaGFzQXR0cmlidXRlKCdkYXRhLW1hbnVhbCcpKSB7XG5cdFx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIpIHtcblx0XHRcdGlmICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG5cdFx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoXy5oaWdobGlnaHRBbGwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoXy5oaWdobGlnaHRBbGwsIDE2KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgXy5oaWdobGlnaHRBbGwpO1xuXHRcdH1cblx0fVxufVxuXG5yZXR1cm4gXztcblxufSkoX3NlbGYpO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0bW9kdWxlLmV4cG9ydHMgPSBQcmlzbTtcbn1cblxuLy8gaGFjayBmb3IgY29tcG9uZW50cyB0byB3b3JrIGNvcnJlY3RseSBpbiBub2RlLmpzXG5pZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLlByaXNtID0gUHJpc207XG59XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1tYXJrdXAuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCA9IHtcblx0J2NvbW1lbnQnOiAvPCEtLVtcXHNcXFNdKj8tLT4vLFxuXHQncHJvbG9nJzogLzxcXD9bXFxzXFxTXSs/XFw/Pi8sXG5cdCdkb2N0eXBlJzogLzwhRE9DVFlQRVtcXHNcXFNdKz8+L2ksXG5cdCdjZGF0YSc6IC88IVxcW0NEQVRBXFxbW1xcc1xcU10qP11dPi9pLFxuXHQndGFnJzoge1xuXHRcdHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vaSxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGFnJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvaSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL148XFwvPy8sXG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdCdhdHRyLXZhbHVlJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPVxccyooPzpcIlteXCJdKlwifCdbXiddKid8W15cXHMnXCI+PV0rKS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQncHVuY3R1YXRpb24nOiBbXG5cdFx0XHRcdFx0XHQvXj0vLFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXihcXHMqKVtcIiddfFtcIiddJC8sXG5cdFx0XHRcdFx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQncHVuY3R1YXRpb24nOiAvXFwvPz4vLFxuXHRcdFx0J2F0dHItbmFtZSc6IHtcblx0XHRcdFx0cGF0dGVybjogL1teXFxzPlxcL10rLyxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J25hbWVzcGFjZSc6IC9eW15cXHM+XFwvOl0rOi9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9LFxuXHQnZW50aXR5JzogLyYjP1tcXGRhLXpdezEsOH07L2lcbn07XG5cblByaXNtLmxhbmd1YWdlcy5tYXJrdXBbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddLmluc2lkZVsnZW50aXR5J10gPVxuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwWydlbnRpdHknXTtcblxuLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcblByaXNtLmhvb2tzLmFkZCgnd3JhcCcsIGZ1bmN0aW9uKGVudikge1xuXG5cdGlmIChlbnYudHlwZSA9PT0gJ2VudGl0eScpIHtcblx0XHRlbnYuYXR0cmlidXRlc1sndGl0bGUnXSA9IGVudi5jb250ZW50LnJlcGxhY2UoLyZhbXA7LywgJyYnKTtcblx0fVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG5cdC8qKlxuXHQgKiBBZGRzIGFuIGlubGluZWQgbGFuZ3VhZ2UgdG8gbWFya3VwLlxuXHQgKlxuXHQgKiBBbiBleGFtcGxlIG9mIGFuIGlubGluZWQgbGFuZ3VhZ2UgaXMgQ1NTIHdpdGggYDxzdHlsZT5gIHRhZ3MuXG5cdCAqXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuXHQgKiBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gbGFuZyBUaGUgbGFuZ3VhZ2Uga2V5LlxuXHQgKiBAZXhhbXBsZVxuXHQgKiBhZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKTtcblx0ICovXG5cdHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcblx0XHR2YXIgaW5jbHVkZWRDZGF0YUluc2lkZSA9IHt9O1xuXHRcdGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcblx0XHRcdHBhdHRlcm46IC8oXjwhXFxbQ0RBVEFcXFspW1xcc1xcU10rPyg/PVxcXVxcXT4kKS9pLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblx0XHRpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2k7XG5cblx0XHR2YXIgaW5zaWRlID0ge1xuXHRcdFx0J2luY2x1ZGVkLWNkYXRhJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG5cdFx0XHRcdGluc2lkZTogaW5jbHVkZWRDZGF0YUluc2lkZVxuXHRcdFx0fVxuXHRcdH07XG5cdFx0aW5zaWRlWydsYW5ndWFnZS0nICsgbGFuZ10gPSB7XG5cdFx0XHRwYXR0ZXJuOiAvW1xcc1xcU10rLyxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG5cdFx0fTtcblxuXHRcdHZhciBkZWYgPSB7fTtcblx0XHRkZWZbdGFnTmFtZV0gPSB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoLyg8X19bXFxzXFxTXSo/PikoPzo8IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT5cXHMqfFtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKC9fXy9nLCB0YWdOYW1lKSwgJ2knKSxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRncmVlZHk6IHRydWUsXG5cdFx0XHRpbnNpZGU6IGluc2lkZVxuXHRcdH07XG5cblx0XHRQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrdXAnLCAnY2RhdGEnLCBkZWYpO1xuXHR9XG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KTtcblByaXNtLmxhbmd1YWdlcy5odG1sID0gUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cDtcblByaXNtLmxhbmd1YWdlcy5tYXRobWwgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwO1xuUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1jc3MuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuKGZ1bmN0aW9uIChQcmlzbSkge1xuXG5cdHZhciBzdHJpbmcgPSAvKFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS87XG5cblx0UHJpc20ubGFuZ3VhZ2VzLmNzcyA9IHtcblx0XHQnY29tbWVudCc6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcblx0XHQnYXRydWxlJzoge1xuXHRcdFx0cGF0dGVybjogL0BbXFx3LV0rW1xcc1xcU10qPyg/Ojt8KD89XFxzKlxceykpLyxcblx0XHRcdGluc2lkZToge1xuXHRcdFx0XHQncnVsZSc6IC9AW1xcdy1dKy9cblx0XHRcdFx0Ly8gU2VlIHJlc3QgYmVsb3dcblx0XHRcdH1cblx0XHR9LFxuXHRcdCd1cmwnOiB7XG5cdFx0XHRwYXR0ZXJuOiBSZWdFeHAoJ3VybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfFteXFxuXFxyKCldKilcXFxcKScsICdpJyksXG5cdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0J2Z1bmN0aW9uJzogL151cmwvaSxcblx0XHRcdFx0J3B1bmN0dWF0aW9uJzogL15cXCh8XFwpJC9cblx0XHRcdH1cblx0XHR9LFxuXHRcdCdzZWxlY3Rvcic6IFJlZ0V4cCgnW157fVxcXFxzXSg/Oltee307XCJcXCddfCcgKyBzdHJpbmcuc291cmNlICsgJykqPyg/PVxcXFxzKlxcXFx7KScpLFxuXHRcdCdzdHJpbmcnOiB7XG5cdFx0XHRwYXR0ZXJuOiBzdHJpbmcsXG5cdFx0XHRncmVlZHk6IHRydWVcblx0XHR9LFxuXHRcdCdwcm9wZXJ0eSc6IC9bLV9hLXpcXHhBMC1cXHVGRkZGXVstXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKjopL2ksXG5cdFx0J2ltcG9ydGFudCc6IC8haW1wb3J0YW50XFxiL2ksXG5cdFx0J2Z1bmN0aW9uJzogL1stYS16MC05XSsoPz1cXCgpL2ksXG5cdFx0J3B1bmN0dWF0aW9uJzogL1soKXt9OzosXS9cblx0fTtcblxuXHRQcmlzbS5sYW5ndWFnZXMuY3NzWydhdHJ1bGUnXS5pbnNpZGUucmVzdCA9IFByaXNtLmxhbmd1YWdlcy5jc3M7XG5cblx0dmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXA7XG5cdGlmIChtYXJrdXApIHtcblx0XHRtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuXG5cdFx0UHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnaW5zaWRlJywgJ2F0dHItdmFsdWUnLCB7XG5cdFx0XHQnc3R5bGUtYXR0cic6IHtcblx0XHRcdFx0cGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuXHRcdFx0XHRpbnNpZGU6IHtcblx0XHRcdFx0XHQnYXR0ci1uYW1lJzoge1xuXHRcdFx0XHRcdFx0cGF0dGVybjogL15cXHMqc3R5bGUvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogbWFya3VwLnRhZy5pbnNpZGVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCdwdW5jdHVhdGlvbic6IC9eXFxzKj1cXHMqWydcIl18WydcIl1cXHMqJC8sXG5cdFx0XHRcdFx0J2F0dHItdmFsdWUnOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvLisvaSxcblx0XHRcdFx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzc1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0YWxpYXM6ICdsYW5ndWFnZS1jc3MnXG5cdFx0XHR9XG5cdFx0fSwgbWFya3VwLnRhZyk7XG5cdH1cblxufShQcmlzbSkpO1xuXG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgQmVnaW4gcHJpc20tY2xpa2UuanNcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuXHQnY29tbWVudCc6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/KD86XFwqXFwvfCQpLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWVcblx0XHR9LFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0Z3JlZWR5OiB0cnVlXG5cdFx0fVxuXHRdLFxuXHQnc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC8oW1wiJ10pKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG5cdFx0Z3JlZWR5OiB0cnVlXG5cdH0sXG5cdCdjbGFzcy1uYW1lJzoge1xuXHRcdHBhdHRlcm46IC8oKD86XFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrKXwoPzpjYXRjaFxccytcXCgpKVtcXHcuXFxcXF0rL2ksXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRpbnNpZGU6IHtcblx0XHRcdHB1bmN0dWF0aW9uOiAvWy5cXFxcXS9cblx0XHR9XG5cdH0sXG5cdCdrZXl3b3JkJzogL1xcYig/OmlmfGVsc2V8d2hpbGV8ZG98Zm9yfHJldHVybnxpbnxpbnN0YW5jZW9mfGZ1bmN0aW9ufG5ld3x0cnl8dGhyb3d8Y2F0Y2h8ZmluYWxseXxudWxsfGJyZWFrfGNvbnRpbnVlKVxcYi8sXG5cdCdib29sZWFuJzogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcblx0J2Z1bmN0aW9uJzogL1xcdysoPz1cXCgpLyxcblx0J251bWJlcic6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWystXT9cXGQrKT8vaSxcblx0J29wZXJhdG9yJzogLy0tP3xcXCtcXCs/fCE9Pz0/fDw9P3w+PT98PT0/PT98JiY/fFxcfFxcfD98XFw/fFxcKnxcXC98fnxcXF58JS8sXG5cdCdwdW5jdHVhdGlvbic6IC9be31bXFxdOygpLC46XS9cbn07XG5cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICBCZWdpbiBwcmlzbS1qYXZhc2NyaXB0LmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG5cdCdjbGFzcy1uYW1lJzogW1xuXHRcdFByaXNtLmxhbmd1YWdlcy5jbGlrZVsnY2xhc3MtbmFtZSddLFxuXHRcdHtcblx0XHRcdHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSlbXyRBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZVxuXHRcdH1cblx0XSxcblx0J2tleXdvcmQnOiBbXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogLygoPzpefH0pXFxzKikoPzpjYXRjaHxmaW5hbGx5KVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKF58W14uXSlcXGIoPzphc3xhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlXG5cdFx0fSxcblx0XSxcblx0J251bWJlcic6IC9cXGIoPzooPzowW3hYXSg/OltcXGRBLUZhLWZdKD86X1tcXGRBLUZhLWZdKT8pK3wwW2JCXSg/OlswMV0oPzpfWzAxXSk/KSt8MFtvT10oPzpbMC03XSg/Ol9bMC03XSk/KSspbj98KD86XFxkKD86X1xcZCk/KStufE5hTnxJbmZpbml0eSlcXGJ8KD86XFxiKD86XFxkKD86X1xcZCk/KStcXC4/KD86XFxkKD86X1xcZCk/KSp8XFxCXFwuKD86XFxkKD86X1xcZCk/KSspKD86W0VlXVsrLV0/KD86XFxkKD86X1xcZCk/KSspPy8sXG5cdC8vIEFsbG93IGZvciBhbGwgbm9uLUFTQ0lJIGNoYXJhY3RlcnMgKFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMDA4NDQ0KVxuXHQnZnVuY3Rpb24nOiAvIz9bXyRhLXpBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKig/OlxcLlxccyooPzphcHBseXxiaW5kfGNhbGwpXFxzKik/XFwoKS8sXG5cdCdvcGVyYXRvcic6IC8tWy09XT98XFwrWys9XT98IT0/PT98PDw/PT98Pj4/Pj89P3w9KD86PT0/fD4pP3wmWyY9XT98XFx8W3w9XT98XFwqXFwqPz0/fFxcLz0/fH58XFxePT98JT0/fFxcP3xcXC57M30vXG59KTtcblxuUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRbJ2NsYXNzLW5hbWUnXVswXS5wYXR0ZXJuID0gLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8bmV3KVxccyspW1xcdy5cXFxcXSsvO1xuXG5QcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ2tleXdvcmQnLCB7XG5cdCdyZWdleCc6IHtcblx0XHRwYXR0ZXJuOiAvKCg/Ol58W14kXFx3XFx4QTAtXFx1RkZGRi5cIidcXF0pXFxzXSlcXHMqKVxcLyhcXFsoPzpbXlxcXVxcXFxcXHJcXG5dfFxcXFwuKSpdfFxcXFwufFteL1xcXFxcXFtcXHJcXG5dKStcXC9bZ2lteXVzXXswLDZ9KD89XFxzKigkfFtcXHJcXG4sLjt9KVxcXV0pKS8sXG5cdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRncmVlZHk6IHRydWVcblx0fSxcblx0Ly8gVGhpcyBtdXN0IGJlIGRlY2xhcmVkIGJlZm9yZSBrZXl3b3JkIGJlY2F1c2Ugd2UgdXNlIFwiZnVuY3Rpb25cIiBpbnNpZGUgdGhlIGxvb2stZm9yd2FyZFxuXHQnZnVuY3Rpb24tdmFyaWFibGUnOiB7XG5cdFx0cGF0dGVybjogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccypbPTpdXFxzKig/OmFzeW5jXFxzKik/KD86XFxiZnVuY3Rpb25cXGJ8KD86XFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCl8W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKilcXHMqPT4pKS8sXG5cdFx0YWxpYXM6ICdmdW5jdGlvbidcblx0fSxcblx0J3BhcmFtZXRlcic6IFtcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKGZ1bmN0aW9uKD86XFxzK1tfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopP1xccypcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpKS8sXG5cdFx0XHRsb29rYmVoaW5kOiB0cnVlLFxuXHRcdFx0aW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0cGF0dGVybjogL1tfJGEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqPT4pL2ksXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKFxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqPT4pLyxcblx0XHRcdGxvb2tiZWhpbmQ6IHRydWUsXG5cdFx0XHRpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0fSxcblx0XHR7XG5cdFx0XHRwYXR0ZXJuOiAvKCg/OlxcYnxcXHN8XikoPyEoPzphc3xhc3luY3xhd2FpdHxicmVha3xjYXNlfGNhdGNofGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlYnVnZ2VyfGRlZmF1bHR8ZGVsZXRlfGRvfGVsc2V8ZW51bXxleHBvcnR8ZXh0ZW5kc3xmaW5hbGx5fGZvcnxmcm9tfGZ1bmN0aW9ufGdldHxpZnxpbXBsZW1lbnRzfGltcG9ydHxpbnxpbnN0YW5jZW9mfGludGVyZmFjZXxsZXR8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmV0dXJufHNldHxzdGF0aWN8c3VwZXJ8c3dpdGNofHRoaXN8dGhyb3d8dHJ5fHR5cGVvZnx1bmRlZmluZWR8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZCkoPyFbJFxcd1xceEEwLVxcdUZGRkZdKSkoPzpbXyRBLVphLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qXFxzKilcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpXFxzKlxceykvLFxuXHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcblx0XHR9XG5cdF0sXG5cdCdjb25zdGFudCc6IC9cXGJbQS1aXSg/OltBLVpfXXxcXGR4PykqXFxiL1xufSk7XG5cblByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAnc3RyaW5nJywge1xuXHQndGVtcGxhdGUtc3RyaW5nJzoge1xuXHRcdHBhdHRlcm46IC9gKD86XFxcXFtcXHNcXFNdfFxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfXwoPyFcXCR7KVteXFxcXGBdKSpgLyxcblx0XHRncmVlZHk6IHRydWUsXG5cdFx0aW5zaWRlOiB7XG5cdFx0XHQndGVtcGxhdGUtcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdHBhdHRlcm46IC9eYHxgJC8sXG5cdFx0XHRcdGFsaWFzOiAnc3RyaW5nJ1xuXHRcdFx0fSxcblx0XHRcdCdpbnRlcnBvbGF0aW9uJzoge1xuXHRcdFx0XHRwYXR0ZXJuOiAvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopXFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9Lyxcblx0XHRcdFx0bG9va2JlaGluZDogdHJ1ZSxcblx0XHRcdFx0aW5zaWRlOiB7XG5cdFx0XHRcdFx0J2ludGVycG9sYXRpb24tcHVuY3R1YXRpb24nOiB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuOiAvXlxcJHt8fSQvLFxuXHRcdFx0XHRcdFx0YWxpYXM6ICdwdW5jdHVhdGlvbidcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQnc3RyaW5nJzogL1tcXHNcXFNdKy9cblx0XHR9XG5cdH1cbn0pO1xuXG5pZiAoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCkge1xuXHRQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzY3JpcHQnLCAnamF2YXNjcmlwdCcpO1xufVxuXG5QcmlzbS5sYW5ndWFnZXMuanMgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdDtcblxuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgIEJlZ2luIHByaXNtLWZpbGUtaGlnaGxpZ2h0LmpzXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgIXNlbGYuUHJpc20gfHwgIXNlbGYuZG9jdW1lbnQgfHwgIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvKipcblx0ICogQHBhcmFtIHtFbGVtZW50fSBbY29udGFpbmVyPWRvY3VtZW50XVxuXHQgKi9cblx0c2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0ID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XG5cdFx0Y29udGFpbmVyID0gY29udGFpbmVyIHx8IGRvY3VtZW50O1xuXG5cdFx0dmFyIEV4dGVuc2lvbnMgPSB7XG5cdFx0XHQnanMnOiAnamF2YXNjcmlwdCcsXG5cdFx0XHQncHknOiAncHl0aG9uJyxcblx0XHRcdCdyYic6ICdydWJ5Jyxcblx0XHRcdCdwczEnOiAncG93ZXJzaGVsbCcsXG5cdFx0XHQncHNtMSc6ICdwb3dlcnNoZWxsJyxcblx0XHRcdCdzaCc6ICdiYXNoJyxcblx0XHRcdCdiYXQnOiAnYmF0Y2gnLFxuXHRcdFx0J2gnOiAnYycsXG5cdFx0XHQndGV4JzogJ2xhdGV4J1xuXHRcdH07XG5cblx0XHRBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgncHJlW2RhdGEtc3JjXScpKS5mb3JFYWNoKGZ1bmN0aW9uIChwcmUpIHtcblx0XHRcdC8vIGlnbm9yZSBpZiBhbHJlYWR5IGxvYWRlZFxuXHRcdFx0aWYgKHByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3JjLWxvYWRlZCcpKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gbG9hZCBjdXJyZW50XG5cdFx0XHR2YXIgc3JjID0gcHJlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcblxuXHRcdFx0dmFyIGxhbmd1YWdlLCBwYXJlbnQgPSBwcmU7XG5cdFx0XHR2YXIgbGFuZyA9IC9cXGJsYW5nKD86dWFnZSk/LShbXFx3LV0rKVxcYi9pO1xuXHRcdFx0d2hpbGUgKHBhcmVudCAmJiAhbGFuZy50ZXN0KHBhcmVudC5jbGFzc05hbWUpKSB7XG5cdFx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGFyZW50KSB7XG5cdFx0XHRcdGxhbmd1YWdlID0gKHByZS5jbGFzc05hbWUubWF0Y2gobGFuZykgfHwgWywgJyddKVsxXTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdFx0XHR2YXIgZXh0ZW5zaW9uID0gKHNyYy5tYXRjaCgvXFwuKFxcdyspJC8pIHx8IFssICcnXSlbMV07XG5cdFx0XHRcdGxhbmd1YWdlID0gRXh0ZW5zaW9uc1tleHRlbnNpb25dIHx8IGV4dGVuc2lvbjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGNvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjb2RlJyk7XG5cdFx0XHRjb2RlLmNsYXNzTmFtZSA9ICdsYW5ndWFnZS0nICsgbGFuZ3VhZ2U7XG5cblx0XHRcdHByZS50ZXh0Q29udGVudCA9ICcnO1xuXG5cdFx0XHRjb2RlLnRleHRDb250ZW50ID0gJ0xvYWRpbmfigKYnO1xuXG5cdFx0XHRwcmUuYXBwZW5kQ2hpbGQoY29kZSk7XG5cblx0XHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuXHRcdFx0eGhyLm9wZW4oJ0dFVCcsIHNyYywgdHJ1ZSk7XG5cblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG5cblx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA8IDQwMCAmJiB4aHIucmVzcG9uc2VUZXh0KSB7XG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0geGhyLnJlc3BvbnNlVGV4dDtcblxuXHRcdFx0XHRcdFx0UHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlKTtcblx0XHRcdFx0XHRcdC8vIG1hcmsgYXMgbG9hZGVkXG5cdFx0XHRcdFx0XHRwcmUuc2V0QXR0cmlidXRlKCdkYXRhLXNyYy1sb2FkZWQnLCAnJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKHhoci5zdGF0dXMgPj0gNDAwKSB7XG5cdFx0XHRcdFx0XHRjb2RlLnRleHRDb250ZW50ID0gJ+KcliBFcnJvciAnICsgeGhyLnN0YXR1cyArICcgd2hpbGUgZmV0Y2hpbmcgZmlsZTogJyArIHhoci5zdGF0dXNUZXh0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRcdGNvZGUudGV4dENvbnRlbnQgPSAn4pyWIEVycm9yOiBGaWxlIGRvZXMgbm90IGV4aXN0IG9yIGlzIGVtcHR5Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdHhoci5zZW5kKG51bGwpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKFByaXNtLnBsdWdpbnMudG9vbGJhcikge1xuXHRcdFx0UHJpc20ucGx1Z2lucy50b29sYmFyLnJlZ2lzdGVyQnV0dG9uKCdkb3dubG9hZC1maWxlJywgZnVuY3Rpb24gKGVudikge1xuXHRcdFx0XHR2YXIgcHJlID0gZW52LmVsZW1lbnQucGFyZW50Tm9kZTtcblx0XHRcdFx0aWYgKCFwcmUgfHwgIS9wcmUvaS50ZXN0KHByZS5ub2RlTmFtZSkgfHwgIXByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc3JjJykgfHwgIXByZS5oYXNBdHRyaWJ1dGUoJ2RhdGEtZG93bmxvYWQtbGluaycpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBzcmMgPSBwcmUuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuXHRcdFx0XHR2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblx0XHRcdFx0YS50ZXh0Q29udGVudCA9IHByZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtZG93bmxvYWQtbGluay1sYWJlbCcpIHx8ICdEb3dubG9hZCc7XG5cdFx0XHRcdGEuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsICcnKTtcblx0XHRcdFx0YS5ocmVmID0gc3JjO1xuXHRcdFx0XHRyZXR1cm4gYTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHR9O1xuXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gZXhlY3V0ZSBpbnNpZGUgaGFuZGxlciwgZm9yIGRyb3BwaW5nIEV2ZW50IGFzIGFyZ3VtZW50XG5cdFx0c2VsZi5QcmlzbS5maWxlSGlnaGxpZ2h0KCk7XG5cdH0pO1xuXG59KSgpO1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LTEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMyEuL3ByaXNtLW9rYWlkaWEuY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS02LTEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTIhLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTYtMyEuL3ByaXNtLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZXMgPSBbXTtcbiAgdmFyIG5ld1N0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY3NzID0gaXRlbVsxXTtcbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdO1xuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH07XG5cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgcGFydHM6IFtwYXJ0XVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcbiAgICB2YXIgaiA9IDA7XG5cbiAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgIGRvbVN0eWxlLnJlZnMrKztcblxuICAgICAgZm9yICg7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgICAgZm9yICg7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIHJlZnM6IDEsXG4gICAgICAgIHBhcnRzOiBwYXJ0c1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBvcHRpb25zLmF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhvcHRpb25zLmF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIG9wdGlvbnMuYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmF0dHJpYnV0ZXMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzID09PSAnb2JqZWN0JyA/IG9wdGlvbnMuYXR0cmlidXRlcyA6IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIHZhciBtYXlSZW1vdmUgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXTtcbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG4gICAgICBpZiAoZG9tU3R5bGUpIHtcbiAgICAgICAgZG9tU3R5bGUucmVmcy0tO1xuICAgICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgICBhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtYXlSZW1vdmUubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2RvbVN0eWxlID0gbWF5UmVtb3ZlW19pXTtcblxuICAgICAgaWYgKF9kb21TdHlsZS5yZWZzID09PSAwKSB7XG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgX2RvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgX2RvbVN0eWxlLnBhcnRzW2pdKCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bX2RvbVN0eWxlLmlkXTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59OyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=