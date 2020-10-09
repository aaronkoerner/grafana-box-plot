define(["@grafana/data","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/simple-statistics/dist/simple-statistics.min.js":
/*!***********************************************************************!*\
  !*** ../node_modules/simple-statistics/dist/simple-statistics.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?r(exports):undefined}(this,(function(t){"use strict";function r(t){if(0===t.length)return 0;for(var r,e=t[0],n=0,a=1;a<t.length;a++)r=e+t[a],Math.abs(e)>=Math.abs(t[a])?n+=e-r+t[a]:n+=t[a]-r+e,e=r;return e+n}function e(t){if(0===t.length)throw new Error("mean requires at least one data point");return r(t)/t.length}function n(t,r){var n,a,o=e(t),i=0;if(2===r)for(a=0;a<t.length;a++)i+=(n=t[a]-o)*n;else for(a=0;a<t.length;a++)i+=Math.pow(t[a]-o,r);return i}function a(t){if(0===t.length)throw new Error("variance requires at least one data point");return n(t,2)/t.length}function o(t){if(1===t.length)return 0;var r=a(t);return Math.sqrt(r)}function i(t){if(0===t.length)throw new Error("mode requires at least one data point");if(1===t.length)return t[0];for(var r=t[0],e=NaN,n=0,a=1,o=1;o<t.length+1;o++)t[o]!==r?(a>n&&(n=a,e=r),a=1,r=t[o]):a++;return e}function u(t){return t.slice().sort((function(t,r){return t-r}))}function h(t){if(0===t.length)throw new Error("min requires at least one data point");for(var r=t[0],e=1;e<t.length;e++)t[e]<r&&(r=t[e]);return r}function f(t){if(0===t.length)throw new Error("max requires at least one data point");for(var r=t[0],e=1;e<t.length;e++)t[e]>r&&(r=t[e]);return r}function s(t){for(var r=0,e=0;e<t.length;e++)r+=t[e];return r}function l(t,r){var e=t.length*r;if(0===t.length)throw new Error("quantile requires at least one data point.");if(r<0||r>1)throw new Error("quantiles must be between 0 and 1");return 1===r?t[t.length-1]:0===r?t[0]:e%1!=0?t[Math.ceil(e)-1]:t.length%2==0?(t[e-1]+t[e])/2:t[e]}function c(t,r,e,n){for(e=e||0,n=n||t.length-1;n>e;){if(n-e>600){var a=n-e+1,o=r-e+1,i=Math.log(a),u=.5*Math.exp(2*i/3),h=.5*Math.sqrt(i*u*(a-u)/a);o-a/2<0&&(h*=-1),c(t,r,Math.max(e,Math.floor(r-o*u/a+h)),Math.min(n,Math.floor(r+(a-o)*u/a+h)))}var f=t[r],s=e,l=n;for(g(t,e,r),t[n]>f&&g(t,e,n);s<l;){for(g(t,s,l),s++,l--;t[s]<f;)s++;for(;t[l]>f;)l--}t[e]===f?g(t,e,l):g(t,++l,n),l<=r&&(e=l+1),r<=l&&(n=l-1)}}function g(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function v(t,r){var e=t.slice();if(Array.isArray(r)){!function(t,r){for(var e=[0],n=0;n<r.length;n++)e.push(M(t.length,r[n]));e.push(t.length-1),e.sort(w);var a=[0,e.length-1];for(;a.length;){var o=Math.ceil(a.pop()),i=Math.floor(a.pop());if(!(o-i<=1)){var u=Math.floor((i+o)/2);p(t,e[u],Math.floor(e[i]),Math.ceil(e[o])),a.push(i,u,u,o)}}}(e,r);for(var n=[],a=0;a<r.length;a++)n[a]=l(e,r[a]);return n}return p(e,M(e.length,r),0,e.length-1),l(e,r)}function p(t,r,e,n){r%1==0?c(t,r,e,n):(c(t,r=Math.floor(r),e,n),c(t,r+1,r+1,n))}function w(t,r){return t-r}function M(t,r){var e=t*r;return 1===r?t-1:0===r?0:e%1!=0?Math.ceil(e)-1:t%2==0?e-.5:e}function m(t,r){if(r<t[0])return 0;if(r>t[t.length-1])return 1;var e=function(t,r){var e=0,n=0,a=t.length;for(;n<a;)r<=t[e=n+a>>>1]?a=e:n=-~e;return n}(t,r);if(t[e]!==r)return e/t.length;e++;var n=function(t,r){var e=0,n=0,a=t.length;for(;n<a;)r>=t[e=n+a>>>1]?n=-~e:a=e;return n}(t,r);if(n===e)return e/t.length;var a=n-e+1;return a*(n+e)/2/a/t.length}function d(t){var r=v(t,.75),e=v(t,.25);if("number"==typeof r&&"number"==typeof e)return r-e}function b(t){return+v(t,.5)}function q(t){for(var r=b(t),e=[],n=0;n<t.length;n++)e.push(Math.abs(t[n]-r));return b(e)}function E(t,r){r=r||Math.random;for(var e,n,a=t.length;a>0;)n=Math.floor(r()*a--),e=t[a],t[a]=t[n],t[n]=e;return t}function y(t,r){return E(t.slice().slice(),r)}function S(t){for(var r,e=0,n=0;n<t.length;n++)0!==n&&t[n]===r||(r=t[n],e++);return e}function x(t,r){for(var e=[],n=0;n<t;n++){for(var a=[],o=0;o<r;o++)a.push(0);e.push(a)}return e}function P(t,r,e,n){var a;if(t>0){var o=(e[r]-e[t-1])/(r-t+1);a=n[r]-n[t-1]-(r-t+1)*o*o}else a=n[r]-e[r]*e[r]/(r+1);return a<0?0:a}function k(t,r,e,n,a,o,i){if(!(t>r)){var u=Math.floor((t+r)/2);n[e][u]=n[e-1][u-1],a[e][u]=u;var h=e;t>e&&(h=Math.max(h,a[e][t-1]||0)),h=Math.max(h,a[e-1][u]||0);var f,s,l,c=u-1;r<n.length-1&&(c=Math.min(c,a[e][r+1]||0));for(var g=c;g>=h&&!((f=P(g,u,o,i))+n[e-1][h-1]>=n[e][u]);--g)(s=P(h,u,o,i)+n[e-1][h-1])<n[e][u]&&(n[e][u]=s,a[e][u]=h),h++,(l=f+n[e-1][g-1])<n[e][u]&&(n[e][u]=l,a[e][u]=g);k(t,u-1,e,n,a,o,i),k(u+1,r,e,n,a,o,i)}}function I(t,r){if(t.length!==r.length)throw new Error("sampleCovariance requires samples with equal lengths");if(t.length<2)throw new Error("sampleCovariance requires at least two data points in each sample");for(var n=e(t),a=e(r),o=0,i=0;i<t.length;i++)o+=(t[i]-n)*(r[i]-a);return o/(t.length-1)}function D(t){if(t.length<2)throw new Error("sampleVariance requires at least two data points");return n(t,2)/(t.length-1)}function C(t){var r=D(t);return Math.sqrt(r)}function T(t,r,e,n){return(t*r+e*n)/(r+n)}function N(t){if(0===t.length)throw new Error("meanSimple requires at least one data point");return s(t)/t.length}function _(t){if(0===t.length)throw new Error("rootMeanSquare requires at least one data point");for(var r=0,e=0;e<t.length;e++)r+=Math.pow(t[e],2);return Math.sqrt(r/t.length)}var R=function(){this.totalCount=0,this.data={}};R.prototype.train=function(t,r){for(var e in this.data[r]||(this.data[r]={}),t){var n=t[e];void 0===this.data[r][e]&&(this.data[r][e]={}),void 0===this.data[r][e][n]&&(this.data[r][e][n]=0),this.data[r][e][n]++}this.totalCount++},R.prototype.score=function(t){var r,e={};for(var n in t){var a=t[n];for(r in this.data)e[r]={},this.data[r][n]?e[r][n+"_"+a]=(this.data[r][n][a]||0)/this.totalCount:e[r][n+"_"+a]=0}var o={};for(r in e)for(var i in o[r]=0,e[r])o[r]+=e[r][i];return o};var F=function(){this.weights=[],this.bias=0};F.prototype.predict=function(t){if(t.length!==this.weights.length)return null;for(var r=0,e=0;e<this.weights.length;e++)r+=this.weights[e]*t[e];return(r+=this.bias)>0?1:0},F.prototype.train=function(t,r){if(0!==r&&1!==r)return null;t.length!==this.weights.length&&(this.weights=t,this.bias=1);var e=this.predict(t);if("number"==typeof e&&e!==r){for(var n=r-e,a=0;a<this.weights.length;a++)this.weights[a]+=n*t[a];this.bias+=n}return this};function A(t){if(t<0)throw new Error("factorial requires a non-negative value");if(Math.floor(t)!==t)throw new Error("factorial requires an integer input");for(var r=1,e=2;e<=t;e++)r*=e;return r}var z=[.9999999999999971,57.15623566586292,-59.59796035547549,14.136097974741746,-.4919138160976202,3399464998481189e-20,4652362892704858e-20,-9837447530487956e-20,.0001580887032249125,-.00021026444172410488,.00021743961811521265,-.0001643181065367639,8441822398385275e-20,-26190838401581408e-21,36899182659531625e-22],V=Math.log(Math.sqrt(2*Math.PI));var j={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}};var B=Math.sqrt(2*Math.PI),K={gaussian:function(t){return Math.exp(-.5*t*t)/B}},O={nrd:function(t){var r=C(t),e=d(t);return"number"==typeof e&&(r=Math.min(r,e/1.34)),1.06*r*Math.pow(t.length,-.2)}};function U(t,r,e){var n,a;if(void 0===r)n=K.gaussian;else if("string"==typeof r){if(!K[r])throw new Error('Unknown kernel "'+r+'"');n=K[r]}else n=r;if(void 0===e)a=O.nrd(t);else if("string"==typeof e){if(!O[e])throw new Error('Unknown bandwidth method "'+e+'"');a=O[e](t)}else a=e;return function(r){var e=0,o=0;for(e=0;e<t.length;e++)o+=n((r-t[e])/a);return o/a/t.length}}var G=Math.sqrt(2*Math.PI);function H(t){for(var r=t,e=t,n=1;n<15;n++)r+=e*=t*t/(2*n+1);return Math.round(1e4*(.5+r/G*Math.exp(-t*t/2)))/1e4}for(var L=[],W=0;W<=3.09;W+=.01)L.push(H(W));function J(t){var r=1/(1+.5*Math.abs(t)),e=r*Math.exp(-t*t+((((((((.17087277*r-.82215223)*r+1.48851587)*r-1.13520398)*r+.27886807)*r-.18628806)*r+.09678418)*r+.37409196)*r+1.00002368)*r-1.26551223);return t>=0?1-e:e-1}function Q(t){var r=8*(Math.PI-3)/(3*Math.PI*(4-Math.PI)),e=Math.sqrt(Math.sqrt(Math.pow(2/(Math.PI*r)+Math.log(1-t*t)/2,2)-Math.log(1-t*t)/r)-(2/(Math.PI*r)+Math.log(1-t*t)/2));return t>=0?e:-e}function X(t){if("number"==typeof t)return t<0?-1:0===t?0:1;throw new TypeError("not a number")}t.BayesianClassifier=R,t.PerceptronModel=F,t.addToMean=function(t,r,e){return t+(e-t)/(r+1)},t.average=e,t.averageSimple=N,t.bayesian=R,t.bernoulliDistribution=function(t){if(t<0||t>1)throw new Error("bernoulliDistribution requires probability to be between 0 and 1 inclusive");return[1-t,t]},t.binomialDistribution=function(t,r){if(!(r<0||r>1||t<=0||t%1!=0)){var e=0,n=0,a=[],o=1;do{a[e]=o*Math.pow(r,e)*Math.pow(1-r,t-e),n+=a[e],o=o*(t-++e+1)/e}while(n<.9999);return a}},t.bisect=function(t,r,e,n,a){if("function"!=typeof t)throw new TypeError("func must be a function");for(var o=0;o<n;o++){var i=(r+e)/2;if(0===t(i)||Math.abs((e-r)/2)<a)return i;X(t(i))===X(t(r))?r=i:e=i}throw new Error("maximum number of iterations exceeded")},t.chiSquaredDistributionTable=j,t.chiSquaredGoodnessOfFit=function(t,r,n){for(var a=0,o=r(e(t)),i=[],u=[],h=0;h<t.length;h++)void 0===i[t[h]]&&(i[t[h]]=0),i[t[h]]++;for(var f=0;f<i.length;f++)void 0===i[f]&&(i[f]=0);for(var s in o)s in i&&(u[+s]=o[s]*t.length);for(var l=u.length-1;l>=0;l--)u[l]<3&&(u[l-1]+=u[l],u.pop(),i[l-1]+=i[l],i.pop());for(var c=0;c<i.length;c++)a+=Math.pow(i[c]-u[c],2)/u[c];var g=i.length-1-1;return j[g][n]<a},t.chunk=function(t,r){var e=[];if(r<1)throw new Error("chunk size must be a positive number");if(Math.floor(r)!==r)throw new Error("chunk size must be an integer");for(var n=0;n<t.length;n+=r)e.push(t.slice(n,n+r));return e},t.ckmeans=function(t,r){if(r>t.length)throw new Error("cannot generate more classes than there are data values");var e=u(t);if(1===S(e))return[e];var n=x(r,e.length),a=x(r,e.length);!function(t,r,e){for(var n=r[0].length,a=t[Math.floor(n/2)],o=[],i=[],u=0,h=void 0;u<n;++u)h=t[u]-a,0===u?(o.push(h),i.push(h*h)):(o.push(o[u-1]+h),i.push(i[u-1]+h*h)),r[0][u]=P(0,u,o,i),e[0][u]=0;for(var f=1;f<r.length;++f)k(f<r.length-1?f:n-1,n-1,f,r,e,o,i)}(e,n,a);for(var o=[],i=a[0].length-1,h=a.length-1;h>=0;h--){var f=a[h][i];o[h]=e.slice(f,i+1),h>0&&(i=f-1)}return o},t.combinations=function t(r,e){var n,a,o,i,u=[];for(n=0;n<r.length;n++)if(1===e)u.push([r[n]]);else for(o=t(r.slice(n+1,r.length),e-1),a=0;a<o.length;a++)(i=o[a]).unshift(r[n]),u.push(i);return u},t.combinationsReplacement=function t(r,e){for(var n=[],a=0;a<r.length;a++)if(1===e)n.push([r[a]]);else for(var o=t(r.slice(a,r.length),e-1),i=0;i<o.length;i++)n.push([r[a]].concat(o[i]));return n},t.combineMeans=T,t.combineVariances=function(t,r,e,n,a,o){var i=T(r,e,a,o);return(e*(t+Math.pow(r-i,2))+o*(n+Math.pow(a-i,2)))/(e+o)},t.cumulativeStdNormalProbability=function(t){var r=Math.abs(t),e=Math.min(Math.round(100*r),L.length-1);return t>=0?L[e]:+(1-L[e]).toFixed(4)},t.epsilon=1e-4,t.equalIntervalBreaks=function(t,r){if(t.length<2)return t;for(var e=h(t),n=f(t),a=[e],o=(n-e)/r,i=1;i<r;i++)a.push(a[0]+o*i);return a.push(n),a},t.erf=J,t.errorFunction=J,t.extent=function(t){if(0===t.length)throw new Error("extent requires at least one data point");for(var r=t[0],e=t[0],n=1;n<t.length;n++)t[n]>e&&(e=t[n]),t[n]<r&&(r=t[n]);return[r,e]},t.extentSorted=function(t){return[t[0],t[t.length-1]]},t.factorial=A,t.gamma=function t(r){if(Number.isInteger(r))return r<=0?NaN:A(r-1);if(--r<0)return Math.PI/(Math.sin(Math.PI*-r)*t(-r));var e=r+1/4;return Math.pow(r/Math.E,r)*Math.sqrt(2*Math.PI*(r+1/6))*(1+1/144/Math.pow(e,2)-1/12960/Math.pow(e,3)-257/207360/Math.pow(e,4)-52/2612736/Math.pow(e,5)+5741173/9405849600/Math.pow(e,6)+37529/18811699200/Math.pow(e,7))},t.gammaln=function(t){if(t<=0)return 1/0;t--;for(var r=z[0],e=1;e<15;e++)r+=z[e]/(t+e);var n=5.2421875+t;return V+Math.log(r)-n+(t+.5)*Math.log(n)},t.geometricMean=function(t){if(0===t.length)throw new Error("geometricMean requires at least one data point");for(var r=1,e=0;e<t.length;e++){if(t[e]<=0)throw new Error("geometricMean requires only positive numbers as input");r*=t[e]}return Math.pow(r,1/t.length)},t.harmonicMean=function(t){if(0===t.length)throw new Error("harmonicMean requires at least one data point");for(var r=0,e=0;e<t.length;e++){if(t[e]<=0)throw new Error("harmonicMean requires only positive numbers as input");r+=1/t[e]}return t.length/r},t.interquartileRange=d,t.inverseErrorFunction=Q,t.iqr=d,t.kde=U,t.kernelDensityEstimation=U,t.linearRegression=function(t){var r,e,n=t.length;if(1===n)r=0,e=t[0][1];else{for(var a,o,i,u=0,h=0,f=0,s=0,l=0;l<n;l++)u+=o=(a=t[l])[0],h+=i=a[1],f+=o*o,s+=o*i;e=h/n-(r=(n*s-u*h)/(n*f-u*u))*u/n}return{m:r,b:e}},t.linearRegressionLine=function(t){return function(r){return t.b+t.m*r}},t.mad=q,t.max=f,t.maxSorted=function(t){return t[t.length-1]},t.mean=e,t.meanSimple=N,t.median=b,t.medianAbsoluteDeviation=q,t.medianSorted=function(t){return l(t,.5)},t.min=h,t.minSorted=function(t){return t[0]},t.mode=function(t){return i(u(t))},t.modeFast=function(t){for(var r,e=new Map,n=0,a=0;a<t.length;a++){var o=e.get(t[a]);void 0===o?o=1:o++,o>n&&(r=t[a],n=o),e.set(t[a],o)}if(0===n)throw new Error("mode requires at last one data point");return r},t.modeSorted=i,t.numericSort=u,t.perceptron=F,t.permutationTest=function(t,r,n,a){if(void 0===a&&(a=1e4),void 0===n&&(n="two_side"),"two_side"!==n&&"greater"!==n&&"less"!==n)throw new Error("`alternative` must be either 'two_side', 'greater', or 'less'");for(var o=e(t)-e(r),i=new Array(a),u=t.concat(r),h=Math.floor(u.length/2),f=0;f<a;f++){E(u);var s=u.slice(0,h),l=u.slice(h,u.length),c=e(s)-e(l);i[f]=c}var g=0;if("two_side"===n)for(var v=0;v<=a;v++)Math.abs(i[v])>=Math.abs(o)&&(g+=1);else if("greater"===n)for(var p=0;p<=a;p++)i[p]>=o&&(g+=1);else for(var w=0;w<=a;w++)i[w]<=o&&(g+=1);return g/a},t.permutationsHeap=function(t){for(var r=new Array(t.length),e=[t.slice()],n=0;n<t.length;n++)r[n]=0;for(var a=0;a<t.length;)if(r[a]<a){var o=0;a%2!=0&&(o=r[a]);var i=t[o];t[o]=t[a],t[a]=i,e.push(t.slice()),r[a]++,a=0}else r[a]=0,a++;return e},t.poissonDistribution=function(t){if(!(t<=0)){var r=0,e=0,n=[],a=1;do{n[r]=Math.exp(-t)*Math.pow(t,r)/a,e+=n[r],a*=++r}while(e<.9999);return n}},t.probit=function(t){return 0===t?t=1e-4:t>=1&&(t=.9999),Math.sqrt(2)*Q(2*t-1)},t.product=function(t){for(var r=1,e=0;e<t.length;e++)r*=t[e];return r},t.quantile=v,t.quantileRank=function(t,r){return m(u(t),r)},t.quantileRankSorted=m,t.quantileSorted=l,t.quickselect=c,t.rSquared=function(t,r){if(t.length<2)return 1;for(var e=0,n=0;n<t.length;n++)e+=t[n][1];for(var a=e/t.length,o=0,i=0;i<t.length;i++)o+=Math.pow(a-t[i][1],2);for(var u=0,h=0;h<t.length;h++)u+=Math.pow(t[h][1]-r(t[h][0]),2);return 1-u/o},t.rms=_,t.rootMeanSquare=_,t.sample=function(t,r,e){return y(t,e).slice(0,r)},t.sampleCorrelation=function(t,r){return I(t,r)/C(t)/C(r)},t.sampleCovariance=I,t.sampleKurtosis=function(t){var r=t.length;if(r<4)throw new Error("sampleKurtosis requires at least four data points");for(var n,a=e(t),o=0,i=0,u=0;u<r;u++)o+=(n=t[u]-a)*n,i+=n*n*n*n;return(r-1)/((r-2)*(r-3))*(r*(r+1)*i/(o*o)-3*(r-1))},t.sampleSkewness=function(t){if(t.length<3)throw new Error("sampleSkewness requires at least three data points");for(var r,n=e(t),a=0,o=0,i=0;i<t.length;i++)a+=(r=t[i]-n)*r,o+=r*r*r;var u=t.length-1,h=Math.sqrt(a/u),f=t.length;return f*o/((f-1)*(f-2)*Math.pow(h,3))},t.sampleStandardDeviation=C,t.sampleVariance=D,t.sampleWithReplacement=function(t,r,e){if(0===t.length)return[];e=e||Math.random;for(var n=t.length,a=[],o=0;o<r;o++){var i=Math.floor(e()*n);a.push(t[i])}return a},t.shuffle=y,t.shuffleInPlace=E,t.sign=X,t.standardDeviation=o,t.standardNormalTable=L,t.subtractFromMean=function(t,r,e){return(t*r-e)/(r-1)},t.sum=r,t.sumNthPowerDeviations=n,t.sumSimple=s,t.tTest=function(t,r){return(e(t)-r)/(o(t)/Math.sqrt(t.length))},t.tTestTwoSample=function(t,r,n){var a=t.length,o=r.length;if(!a||!o)return null;n||(n=0);var i=e(t),u=e(r),h=D(t),f=D(r);if("number"==typeof i&&"number"==typeof u&&"number"==typeof h&&"number"==typeof f){var s=((a-1)*h+(o-1)*f)/(a+o-2);return(i-u-n)/Math.sqrt(s*(1/a+1/o))}},t.uniqueCountSorted=S,t.variance=a,t.zScore=function(t,r,e){return(t-r)/e},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=simple-statistics.min.js.map


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
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


/***/ }),

/***/ "./BoxPlotPanel.tsx":
/*!**************************!*\
  !*** ./BoxPlotPanel.tsx ***!
  \**************************/
/*! exports provided: BoxPlotPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxPlotPanel", function() { return BoxPlotPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simple-statistics */ "../node_modules/simple-statistics/dist/simple-statistics.min.js");
/* harmony import */ var simple_statistics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simple_statistics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__);






var BoxPlotPanel = function BoxPlotPanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var styles = getStyles();
  var myBoxStyle = {
    fill: options.boxColor.replace('-', ''),
    fillOpacity: 0.4,
    stroke: options.boxColor.replace('-', ''),
    strokeWidth: 1
  };
  var myWhiskerStyle = {
    stroke: options.boxColor.replace('-', ''),
    strokeWidth: options.lineWidth
  };
  var myMedianStyle = {
    stroke: options.medianColor.replace('-', '')
  };
  var myOutlierStyle = {
    fill: options.boxColor.replace('-', '')
  };
  var values = data.series.map(function (series) {
    return series.fields.find(function (field) {
      return field.type === 'number';
    });
  }).map(function (field) {
    var _a;

    return (_a = field) === null || _a === void 0 ? void 0 : _a.values;
  });
  var numSeries = data.series.length; //const vals = values[0] !== undefined ? values[0].toArray() : [];
  //const min = Math.min(...values.map(val => (val === undefined ? 0 : Math.min(...val.toArray()))));
  //const max = Math.max(...values.map(val => (val === undefined ? 10 : Math.max(...val.toArray()))));

  var params = {
    width: options.seriesOrientation === 'horizontal' ? width - 20 : width / numSeries,
    height: options.seriesOrientation === 'horizontal' ? height / numSeries : height - 20,
    orientation: options.seriesOrientation,
    min: options.minScale,
    max: options.maxScale
  };

  var plot = function plot(series) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Boxplot, {
      width: params.width,
      height: params.height,
      orientation: params.orientation,
      boxStyle: myBoxStyle,
      whiskerStyle: myWhiskerStyle,
      medianStyle: myMedianStyle,
      outlierStyle: myOutlierStyle,
      whiskerStrokeWidth: options.lineWidth,
      medianStrokeWidth: options.lineWidth,
      axis: {
        label: series.name,
        min: params.min,
        max: params.max,
        gridLines: options.gridLines,
        numTicks: options.numTicks,
        autoScale: options.autoscale
      },
      stats: computeBoxplotStats(series.fields.find(function (field) {
        return field.name === 'Value';
      }).values.toArray()),
      options: options
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, data.series.map(function (serie) {
    return plot(serie);
  })));
};
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_5__["stylesFactory"])(function () {
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "])))
  };
});

function computeBoxplotStats(data) {
  var quartile2 = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["median"](data);
  var quartile1 = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["quantile"](data, 0.25);
  var quartile3 = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["quantile"](data, 0.75);
  var percentile10 = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["quantile"](data, 0.1);
  var percentile90 = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["quantile"](data, 0.9);
  var interQuartileRange = quartile3 - quartile1;
  var lowerOutlierCutoff = quartile1 - 1.5 * interQuartileRange;
  var upperOutlierCutoff = quartile3 + 1.5 * interQuartileRange;
  var outliers = [];
  var nonOutliers = [];
  data.forEach(function (datum) {
    if (datum < lowerOutlierCutoff || datum > upperOutlierCutoff) {
      outliers.push(datum);
    } else {
      nonOutliers.push(datum);
    }
  });
  var minNonOutliers = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["min"](nonOutliers);
  var maxNonOutliers = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["max"](nonOutliers);
  var min = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["min"](data);
  var max = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["max"](data);
  var mean = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["mean"](data);
  var std = simple_statistics__WEBPACK_IMPORTED_MODULE_4__["standardDeviation"](data);
  return {
    quartile1: quartile1,
    quartile2: quartile2,
    quartile3: quartile3,
    percentile10: percentile10,
    percentile90: percentile90,
    lowerOutlierCutoff: lowerOutlierCutoff,
    upperOutlierCutoff: upperOutlierCutoff,
    minNonOutliers: minNonOutliers,
    maxNonOutliers: maxNonOutliers,
    min: min,
    max: max,
    mean: mean,
    std: std,
    outliers: outliers
  };
}

var Boxplot = function Boxplot(_a) {
  var width = _a.width,
      height = _a.height,
      orientation = _a.orientation,
      axis = _a.axis,
      stats = _a.stats,
      style = _a.style,
      whiskerStrokeWidth = _a.whiskerStrokeWidth,
      whiskerStyle = _a.whiskerStyle,
      boxStyle = _a.boxStyle,
      medianStrokeWidth = _a.medianStrokeWidth,
      medianStyle = _a.medianStyle,
      outlierRadius = _a.outlierRadius,
      outlierStyle = _a.outlierStyle,
      className = _a.className,
      options = _a.options;
  var xMin, xMax, transforms, labelTransforms, scale, labelPad, xCenter, chartHeight, chartWidth, chartPad, tickLabelWidth;
  var padding = 5;
  var maxVal = axis.autoScale ? stats.max + (stats.max - stats.min) / 10 : axis.max;
  var minVal = axis.autoScale ? stats.min - (stats.max - stats.min) / 10 : axis.min;
  var range = maxVal - minVal;
  var labelHeight = 12;
  var labelWidth = 6 * axis.label.length;

  if (Math.abs(maxVal) > Math.abs(minVal)) {
    tickLabelWidth = 8 * Math.ceil(Math.log10(Math.abs(maxVal)) + 2);
  } else {
    tickLabelWidth = 8 * Math.ceil(Math.log10(Math.abs(minVal)) + 2);
  }

  var ticks = new Array(axis.numTicks + 1);

  for (var i = 0; i < ticks.length; i++) {
    ticks[i] = minVal + range * i / axis.numTicks;
  }

  if (orientation === 'vertical') {
    labelPad = labelHeight + 5; //basically providing 6 pixels per digit + "."

    xMin = tickLabelWidth + 3 * padding;
    xMax = width > 205 ? 200 : width - 2 * padding;
    xCenter = (xMax + xMin) / 2;
    chartPad = labelHeight;
    chartHeight = height - 2 * padding - labelPad - chartPad;
    scale = chartHeight / range; // Coordinate system: +y at the top, +x to the right.

    transforms = ["translate (0, " + (chartHeight + chartPad) + ")", "scale(1, -1)"];
    labelTransforms = ["translate (0, " + (height - labelHeight) + ")"];
  } else {
    xMin = labelHeight;
    labelPad = tickLabelWidth / 2;
    xMax = height > 200 + 2 * padding + 2 * labelHeight ? 200 : height - 2 * padding - 2 * labelHeight;
    xCenter = (xMax + xMin) / 2;
    chartPad = tickLabelWidth / 2 + 5;
    chartHeight = width - 2 * padding - labelPad - chartPad; //chartHeight = width - 2 * padding - chartPad;

    scale = chartHeight / range; // Coordinate system: +y at the right, +x to the top.

    transforms = ["translate (" + labelPad + ", " + (height - 2 * padding - labelHeight) + ") ", "rotate(-90)"];
    labelTransforms = ["translate (" + -xCenter + ", " + labelHeight + ")"];
  }

  var svgVertStyle = {
    display: 'inline-block',
    padding: padding + "px"
  };
  var svgHorzStyle = {
    display: 'block',
    padding: padding + "px"
  };
  var whiskerLow, whiskerHigh;

  switch (options.whiskerStat) {
    case 'iqr':
      whiskerLow = stats.lowerOutlierCutoff;
      whiskerHigh = stats.upperOutlierCutoff;
      break;

    case 'percentile10':
      whiskerLow = stats.percentile10;
      whiskerHigh = stats.percentile90;
      break;

    case 'std':
      whiskerLow = stats.mean - stats.std;
      whiskerHigh = stats.mean + stats.std;
      break;

    case 'minMaxNonOutliers':
    default:
      whiskerLow = stats.minNonOutliers;
      whiskerHigh = stats.maxNonOutliers;
  }

  var title = "Low Whisker: " + Math.round(whiskerLow * 100) / 100 + "\n1st Quartile: " + Math.round(stats.quartile1 * 100) / 100 + "\nMean: " + Math.round(stats.mean * 100) / 100 + "\nMedian: " + Math.round(stats.quartile2 * 100) / 100 + "\n3rd Quartile: " + Math.round(stats.quartile3 * 100) / 100 + "\nHigh Whisker: " + Math.round(whiskerHigh * 100) / 100;
  var gridStyle = {
    stroke: whiskerStyle.stroke,
    strokeWidth: whiskerStyle.strokeWidth,
    strokeOpacity: 0.25
  };

  var tickLine = function tickLine(tick) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
      x1: xMin - 2 * padding,
      x2: axis.gridLines ? xMax : xMin - padding,
      y1: scale * (tick - minVal),
      y2: scale * (tick - minVal),
      strokeWidth: whiskerStrokeWidth,
      style: axis.gridLines ? gridStyle : whiskerStyle
    });
  };

  var tickLabel = function tickLabel(tick) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
      x: orientation === 'vertical' ? tickLabelWidth : labelPad + scale * (tick - minVal),
      y: orientation === 'vertical' ? chartHeight + chartPad - scale * (tick - minVal) + labelHeight / 2 : height - 2 * padding - 1,
      fill: "white",
      textAnchor: orientation === 'vertical' ? 'end' : 'middle'
    }, Math.round(tick * 10) / 10);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: width,
    height: height,
    className: className,
    style: orientation === 'vertical' ? svgVertStyle : svgHorzStyle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: labelTransforms.join(' '),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
    x: xCenter,
    y: "0",
    fill: "white",
    textAnchor: orientation === 'vertical' ? 'middle' : 'left'
  }, axis.label)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: transforms.join(' '),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "axis",
    x1: xMin - 2 * padding,
    x2: xMin - 2 * padding,
    y1: 0,
    y2: scale * range,
    strokeWidth: whiskerStrokeWidth,
    style: whiskerStyle
  }), ticks.map(function (tick) {
    return tickLine(tick);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    style: style
  }, ticks.map(function (tick) {
    return tickLabel(tick);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: transforms.join(' '),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    key: "box",
    x: xMin,
    width: xMax - xMin,
    y: scale * (stats.quartile1 - minVal),
    height: scale * (stats.quartile3 - stats.quartile1),
    style: boxStyle
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "tick-low",
    x1: xMin,
    x2: xMax,
    y1: scale * (whiskerLow - minVal),
    y2: scale * (whiskerLow - minVal),
    strokeWidth: whiskerStrokeWidth,
    style: whiskerStyle
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "whisker-low",
    x1: xCenter,
    x2: xCenter,
    y1: scale * (whiskerLow - minVal),
    y2: scale * (stats.quartile1 - minVal),
    strokeWidth: whiskerStrokeWidth,
    style: whiskerStyle
  }), options.showMedian ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "median",
    x1: xMin,
    x2: xMax,
    y1: scale * (stats.quartile2 - minVal),
    y2: scale * (stats.quartile2 - minVal),
    strokeWidth: medianStrokeWidth,
    style: medianStyle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Median: ", stats.quartile2)) : '', options.showMean ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "mean",
    x1: xMin,
    x2: xMax,
    y1: scale * (stats.mean - minVal),
    y2: scale * (stats.mean - minVal),
    strokeWidth: medianStrokeWidth,
    style: medianStyle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Mean: ", stats.mean)) : '', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "whisker-high",
    x1: xCenter,
    x2: xCenter,
    y1: scale * (whiskerHigh - minVal),
    y2: scale * (stats.quartile3 - minVal),
    strokeWidth: whiskerStrokeWidth,
    style: whiskerStyle
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    key: "tick-high",
    x1: xMin,
    x2: xMax,
    y1: scale * (whiskerHigh - minVal),
    y2: scale * (whiskerHigh - minVal),
    strokeWidth: whiskerStrokeWidth,
    style: whiskerStyle
  }), options.showOutliers ? stats.outliers.map(function (outlier, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ellipse", {
      key: 'outlier-${index}',
      cx: xCenter,
      cy: scale * (outlier - minVal),
      rx: outlierRadius,
      ry: outlierRadius,
      strokeWidth: "0",
      style: outlierStyle
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, outlier));
  }) : ''));
};

Boxplot.propTypes = {
  // Width of the svg element
  width: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
  // Height of the svg element
  height: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
  // Orientation of the plot. vertical means min values at the left,
  // horizontal means min values at the bottom.
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3__["oneOf"](['vertical', 'horizontal']),
  // Minimum and maximum values for the axis. Values outside this
  // range are clipped.
  //min: PropTypes.number.isRequired,
  //max: PropTypes.number.isRequired,
  // The stats to plot.
  stats: prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"]({
    quartile1: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    quartile2: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    quartile3: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    percentile10: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    percentile90: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    lowerOutlierCutoff: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    upperOutlierCutoff: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    minNonOutliers: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    maxNonOutliers: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    min: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    max: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    mean: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    std: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"].isRequired,
    outliers: prop_types__WEBPACK_IMPORTED_MODULE_3__["array"]
  }),
  style: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
  //tickStyle: PropTypes.object,
  whiskerStrokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
  whiskerStyle: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
  boxStyle: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
  medianStrokeWidth: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
  medianStyle: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
  outlierRadius: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
  outlierStyle: prop_types__WEBPACK_IMPORTED_MODULE_3__["object"],
  // Pass through, to support styled-components.
  className: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
};
Boxplot.defaultProps = {
  orientation: 'vertical',
  style: {
    strokeOpacity: 1,
    fillOpacity: 0.75
  },
  //tickStyle: { stroke: 'black' },
  whiskerStrokeWidth: 1,
  // whiskerStyle: { stroke: 'black', strokeDasharray: '2,2' },
  whiskerStyle: {
    stroke: 'black'
  },
  boxStyle: {
    stroke: 'black',
    fill: 'black'
  },
  medianStrokeWidth: 2,
  medianStyle: {
    stroke: 'white'
  },
  outlierRadius: 2.5,
  outlierStyle: {
    stroke: 'black',
    fill: 'black'
  }
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BoxPlotPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxPlotPanel */ "./BoxPlotPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_BoxPlotPanel__WEBPACK_IMPORTED_MODULE_1__["BoxPlotPanel"]).setPanelOptions(function (builder) {
  return builder.addRadio({
    path: 'seriesOrientation',
    defaultValue: 'horizontal',
    name: 'Series orientation',
    settings: {
      options: [{
        value: 'horizontal',
        label: 'Horizontal'
      }, {
        value: 'vertical',
        label: 'Vertical'
      }]
    }
  }).addBooleanSwitch({
    path: 'gridLines',
    name: 'Show Grid Lines',
    defaultValue: false,
    category: ['Axis']
  }).addNumberInput({
    path: 'numTicks',
    name: 'Number of Ticks',
    defaultValue: 10,
    category: ['Axis']
  }).addBooleanSwitch({
    path: 'autoscale',
    name: 'Autoscale',
    defaultValue: true,
    category: ['Axis']
  }).addNumberInput({
    path: 'minScale',
    name: 'Minimum',
    defaultValue: 0,
    showIf: function showIf(config) {
      return !config.autoscale;
    },
    category: ['Axis']
  }).addNumberInput({
    path: 'maxScale',
    name: 'Maximum',
    defaultValue: 100,
    showIf: function showIf(config) {
      return !config.autoscale;
    },
    category: ['Axis']
  }).addNumberInput({
    path: 'lineWidth',
    name: 'Line Width',
    defaultValue: 1
  }).addColorPicker({
    path: 'boxColor',
    name: 'Box Color',
    defaultValue: 'lime'
  }).addColorPicker({
    path: 'medianColor',
    name: 'Median Color',
    defaultValue: 'white'
  }).addSelect({
    path: 'whiskerStat',
    defaultValue: 'minMaxNonOutliers',
    name: 'Whisker Placement',
    category: ['Statistics'],
    settings: {
      options: [{
        value: 'minMaxNonOutliers',
        label: 'Min/Max of Non-Outliers'
      }, {
        value: 'iqr',
        label: 'Box +/- 1.5 x Interquartile Range'
      }, {
        value: 'percentile10',
        label: '10th/90th Percentile'
      }, {
        value: 'std',
        label: 'Mean +/- 1 Standard Deviation'
      }]
    }
  }).addBooleanSwitch({
    path: 'showMedian',
    name: 'Show Median',
    defaultValue: true,
    category: ['Statistics']
  }).addBooleanSwitch({
    path: 'showMean',
    name: 'Show Mean',
    defaultValue: false,
    category: ['Statistics']
  }).addBooleanSwitch({
    path: 'showOutliers',
    name: 'Show Outliers',
    defaultValue: true,
    category: ['Statistics']
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map